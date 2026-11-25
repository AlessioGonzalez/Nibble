-- Nibble: base de datos en Supabase.
-- Ejecuta este archivo en Supabase > SQL Editor. Se puede volver a ejecutar sin perder datos
-- y también actualiza las instalaciones anteriores (las de la tabla progress sin versiones).

-- =====================================================================
-- 1. Progreso: una fila por usuario con el estado completo de la app.
-- =====================================================================
create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  state      jsonb       not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.progress add column if not exists revision   bigint      not null default 0;
alter table public.progress add column if not exists created_at timestamptz not null default now();

-- El estado debe ser un objeto JSON y ocupar menos de 512 KB.
alter table public.progress drop constraint if exists progress_state_ok;
alter table public.progress add constraint progress_state_ok
  check (jsonb_typeof(state) = 'object' and pg_column_size(state) < 524288);

-- updated_at lo pone el servidor, no el reloj del navegador.
create or replace function public.touch_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at := now();
  return new;
end $$;
drop trigger if exists progress_touch on public.progress;
create trigger progress_touch before insert or update on public.progress
  for each row execute function public.touch_updated_at();

-- Seguridad a nivel de fila: cada usuario solo puede leer y escribir su propia fila.
alter table public.progress enable row level security;

drop policy if exists "progress: leer la propia fila" on public.progress;
create policy "progress: leer la propia fila"
  on public.progress for select
  using ((select auth.uid()) = user_id);

drop policy if exists "progress: crear la propia fila" on public.progress;
create policy "progress: crear la propia fila"
  on public.progress for insert
  with check ((select auth.uid()) = user_id);

drop policy if exists "progress: actualizar la propia fila" on public.progress;
create policy "progress: actualizar la propia fila"
  on public.progress for update
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "progress: borrar la propia fila" on public.progress;
create policy "progress: borrar la propia fila"
  on public.progress for delete
  using ((select auth.uid()) = user_id);

-- Guardado con control de versiones. La app envía la revisión que leyó:
--   - si coincide con la de la base de datos, guarda y devuelve la revisión nueva;
--   - si otro dispositivo guardó antes, no toca nada y devuelve null. La app vuelve
--     a leer, combina las dos copias (sin perder niveles) y reintenta.
create or replace function public.save_progress(p_state jsonb, p_revision bigint)
returns bigint language plpgsql security invoker set search_path = '' as $$
declare
  r bigint;
begin
  if auth.uid() is null then
    raise exception 'save_progress: sesión no iniciada';
  end if;
  insert into public.progress as p (user_id, state, revision)
  values (auth.uid(), p_state, 1)
  on conflict (user_id) do update
    set state = excluded.state, revision = p.revision + 1
    where p.revision = p_revision
  returning p.revision into r;
  return r;
end $$;
revoke all on function public.save_progress(jsonb, bigint) from public, anon;
grant execute on function public.save_progress(jsonb, bigint) to authenticated;

-- =====================================================================
-- 2. Historial: una fila por cada nivel, reto, nivel extra o prueba terminados.
-- =====================================================================
create table if not exists public.level_results (
  id         bigint generated always as identity primary key,
  user_id    uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  course     text        not null check (course in ('python', 'java', 'javascript', 'cpp')),
  locale     text        not null check (locale in ('es', 'en', 'fr', 'it')),
  mode       text        not null check (mode in ('practice', 'reto', 'extra', 'test')),
  day        smallint    check (day between 1 and 30),
  level      smallint    check (level between 1 and 8),
  sections   smallint    not null check (sections between 1 and 50),
  correct    smallint    not null check (correct >= 0),
  mistakes   smallint    not null check (mistakes >= 0),
  xp         smallint    not null check (xp between 0 and 100),
  seconds    integer     not null check (seconds between 0 and 86400),
  created_at timestamptz not null default now()
);
create index if not exists level_results_user_time on public.level_results (user_id, created_at desc);

alter table public.level_results enable row level security;

drop policy if exists "level_results: leer las propias" on public.level_results;
create policy "level_results: leer las propias"
  on public.level_results for select
  using ((select auth.uid()) = user_id);

drop policy if exists "level_results: crear las propias" on public.level_results;
create policy "level_results: crear las propias"
  on public.level_results for insert
  with check ((select auth.uid()) = user_id);

drop policy if exists "level_results: borrar las propias" on public.level_results;
create policy "level_results: borrar las propias"
  on public.level_results for delete
  using ((select auth.uid()) = user_id);

-- Resumen por curso del usuario que consulta (respeta las políticas de arriba).
create or replace view public.my_stats with (security_invoker = true) as
select
  course,
  count(*) filter (where mode in ('practice', 'reto'))                    as levels,
  count(*) filter (where mode = 'reto')                                   as retos,
  coalesce(sum(xp), 0)                                                    as xp,
  round(100.0 * sum(correct) / nullif(sum(correct + mistakes), 0))        as accuracy,
  sum(seconds)                                                            as seconds,
  max(created_at)                                                         as last_played
from public.level_results
group by course;

-- =====================================================================
-- 3. Sugerencias: el formulario "Sugerencias" de la app.
--    Solo los usuarios con sesión pueden enviarlas, y nadie puede leerlas desde la app:
--    se revisan en Supabase > Table Editor > suggestions (cambia status a 'read' o 'done').
-- =====================================================================
create table if not exists public.suggestions (
  id         bigint generated always as identity primary key,
  user_id    uuid        default auth.uid() references auth.users (id) on delete set null,
  kind       text        not null check (kind in ('idea', 'bug', 'content', 'other')),
  message    text        not null check (char_length(btrim(message)) between 10 and 2000),
  course     text        check (course in ('python', 'java', 'javascript', 'cpp')),
  locale     text        check (locale in ('es', 'en', 'fr', 'it')),
  day        smallint    check (day between 1 and 30),
  status     text        not null default 'new' check (status in ('new', 'read', 'done')),
  created_at timestamptz not null default now()
);
create index if not exists suggestions_time on public.suggestions (created_at desc);

alter table public.suggestions enable row level security;

drop policy if exists "suggestions: enviar las propias" on public.suggestions;
create policy "suggestions: enviar las propias"
  on public.suggestions for insert
  to authenticated
  with check ((select auth.uid()) = user_id);