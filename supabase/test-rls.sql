-- Nibble: pruebas de la base de datos (seguridad RLS, guardado con versiones, historial y sugerencias).
-- Ejecútalo en Supabase > SQL Editor DESPUÉS de schema.sql, mejor en un proyecto de pruebas.
-- Todo va dentro de una transacción que se deshace al final (rollback): no deja usuarios ni datos.
-- Si una comprobación falla, se detiene con un error que dice cuál. Si todo va bien, termina con
-- el aviso "Nibble: todas las pruebas de la base de datos han pasado".

begin;

-- Dos usuarios de prueba (solo existen dentro de esta transacción).
insert into auth.users (id, email) values
  ('00000000-0000-4000-8000-00000000000a', 'prueba-a@nibble.test'),
  ('00000000-0000-4000-8000-00000000000b', 'prueba-b@nibble.test');

-- Para "entrar" como un usuario se cambian los claims: auth.uid() lee de ellos el sub.

set local role authenticated;

-- 1. save_progress: control de versiones.
select set_config('request.jwt.claims', '{"sub":"00000000-0000-4000-8000-00000000000a","role":"authenticated"}', true);
do $$
declare r bigint;
begin
  r := public.save_progress('{"v":3,"xp":10}'::jsonb, 0);
  assert r = 1, 'save_progress: el primer guardado debería devolver la revisión 1';
  r := public.save_progress('{"v":3,"xp":20}'::jsonb, 0);
  assert r is null, 'save_progress: guardar con una revisión antigua debería devolver null (conflicto)';
  r := public.save_progress('{"v":3,"xp":30}'::jsonb, 1);
  assert r = 2, 'save_progress: guardar con la revisión actual debería devolver 2';
  assert (select (state->>'xp')::int from public.progress) = 30, 'progress: no se guardó el último estado';
end $$;

-- 2. Un usuario no ve ni cambia el progreso de otro.
select set_config('request.jwt.claims', '{"sub":"00000000-0000-4000-8000-00000000000b","role":"authenticated"}', true);
do $$
declare n int;
begin
  assert (select count(*) from public.progress) = 0, 'RLS progress: B ve la fila de A';
  update public.progress set state = '{}'::jsonb where user_id = '00000000-0000-4000-8000-00000000000a';
  get diagnostics n = row_count;
  assert n = 0, 'RLS progress: B ha podido cambiar la fila de A';
  begin
    insert into public.progress (user_id, state) values ('00000000-0000-4000-8000-00000000000a', '{}'::jsonb);
    raise exception 'RLS progress: B ha podido crear una fila a nombre de A';
  exception when insufficient_privilege or unique_violation then null;
  end;
end $$;

-- 3. level_results: client_id evita duplicados y nadie escribe por otro.
select set_config('request.jwt.claims', '{"sub":"00000000-0000-4000-8000-00000000000a","role":"authenticated"}', true);
do $$
begin
  insert into public.level_results (client_id, course, locale, mode, day, level, sections, correct, mistakes, xp, seconds)
    values ('11111111-1111-4111-8111-111111111111', 'python', 'es', 'practice', 1, 1, 8, 8, 0, 5, 60)
    on conflict (client_id) do nothing;
  insert into public.level_results (client_id, course, locale, mode, day, level, sections, correct, mistakes, xp, seconds)
    values ('11111111-1111-4111-8111-111111111111', 'python', 'es', 'practice', 1, 1, 8, 8, 0, 5, 60)
    on conflict (client_id) do nothing;
  assert (select count(*) from public.level_results) = 1, 'level_results: el reenvío con el mismo client_id se ha duplicado';
  begin
    insert into public.level_results (user_id, course, locale, mode, sections, correct, mistakes, xp, seconds)
      values ('00000000-0000-4000-8000-00000000000b', 'java', 'es', 'extra', 5, 5, 0, 10, 30);
    raise exception 'RLS level_results: A ha podido guardar un resultado a nombre de B';
  exception when insufficient_privilege then null;
  end;
  assert (select count(*) from public.my_stats) = 1, 'my_stats: A debería ver un solo curso';
end $$;

select set_config('request.jwt.claims', '{"sub":"00000000-0000-4000-8000-00000000000b","role":"authenticated"}', true);
do $$
begin
  assert (select count(*) from public.level_results) = 0, 'RLS level_results: B ve el historial de A';
  assert (select count(*) from public.my_stats) = 0, 'my_stats: B ve el resumen de A';
end $$;

-- 3b. level_results_guard: los resultados imposibles y los envíos en masa se descartan sin error.
select set_config('request.jwt.claims', '{"sub":"00000000-0000-4000-8000-00000000000a","role":"authenticated"}', true);
do $$
declare before_n int;
begin
  before_n := (select count(*) from public.level_results);
  -- 8 secciones en 3 segundos, más aciertos que secciones y más XP de la que da una práctica.
  insert into public.level_results (course, locale, mode, day, level, sections, correct, mistakes, xp, seconds)
    values ('python', 'es', 'practice', 1, 2, 8, 8, 0, 5, 3),
           ('python', 'es', 'practice', 1, 2, 8, 9, 0, 5, 60),
           ('python', 'es', 'practice', 1, 2, 8, 8, 0, 50, 60);
  assert (select count(*) from public.level_results) = before_n, 'level_results_guard: ha aceptado un resultado imposible';
  -- Un lote de 200 resultados válidos: solo entran 120 en la misma hora, sin error.
  insert into public.level_results (course, locale, mode, day, level, sections, correct, mistakes, xp, seconds)
    select 'python', 'es', 'practice', 1, 3, 8, 8, 0, 5, 60 from generate_series(1, 200);
  assert (select count(*) from public.level_results) = 120, 'level_results_guard: el límite de 120 por hora no se aplica';
end $$;

-- 4. Sugerencias: nadie las lee desde la app y hay como mucho 5 por hora.
do $$
begin
  for i in 1..5 loop
    insert into public.suggestions (kind, message) values ('idea', 'Sugerencia de prueba número ' || i);
  end loop;
  assert (select count(*) from public.suggestions) = 0, 'RLS suggestions: un usuario puede leer las sugerencias';
  begin
    insert into public.suggestions (kind, message) values ('idea', 'La sexta sugerencia de la hora');
    raise exception 'suggestions: la sexta sugerencia en una hora debería rechazarse';
  exception when raise_exception then
    if sqlerrm not like 'suggestions: límite%' then raise; end if;
  end;
end $$;

-- 5. Sin sesión (anon) no se puede guardar progreso.
reset role;
set local role anon;
do $$
begin
  begin
    perform public.save_progress('{}'::jsonb, 0);
    raise exception 'save_progress: anon ha podido ejecutarla';
  exception when insufficient_privilege then null;
  end;
end $$;

do $$ begin raise notice 'Nibble: todas las pruebas de la base de datos han pasado'; end $$;
rollback;
