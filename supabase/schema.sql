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

-- Identificador que pone la app a cada resultado. Si un envío llega pero se pierde la respuesta,
-- o dos pestañas envían lo mismo, la fila repetida se ignora (upsert con ignoreDuplicates).
-- Las filas antiguas quedan con client_id vacío: los NULL no chocan entre sí.
alter table public.level_results add column if not exists client_id uuid;
create unique index if not exists level_results_client_id on public.level_results (client_id);

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

-- Resultados imposibles o en masa: el trigger los descarta en silencio (return null) en lugar de dar error,
-- porque la app envía su cola de resultados en un solo lote y un error atascaría la cola para siempre.
--   - más de 120 resultados por usuario y hora;
--   - menos de 2 segundos por sección;
--   - más aciertos que secciones, o más XP de la que da ese modo (práctica 5, reto 25, extra 10, prueba 20).
-- security definer: cuenta las filas del usuario sin depender de RLS; nadie puede llamarla directamente.
create or replace function public.level_results_guard()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if new.seconds < 2 * new.sections
     or new.correct > new.sections
     or new.xp > case new.mode when 'practice' then 5 when 'reto' then 25 when 'extra' then 10 else 20 end
     or (select count(*) from public.level_results r
         where r.user_id = new.user_id and r.created_at > now() - interval '1 hour') >= 120 then
    return null;
  end if;
  return new;
end $$;
revoke all on function public.level_results_guard() from public, anon, authenticated;
drop trigger if exists level_results_guard on public.level_results;
create trigger level_results_guard before insert on public.level_results
  for each row execute function public.level_results_guard();

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

-- Como mucho 5 sugerencias por usuario y hora. La función es security definer porque el usuario
-- no puede leer la tabla (RLS) y el recuento le daría siempre 0; nadie puede llamarla directamente.
create index if not exists suggestions_user_time on public.suggestions (user_id, created_at desc);
create or replace function public.suggestions_rate_limit()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if (select count(*) from public.suggestions s
      where s.user_id = new.user_id and s.created_at > now() - interval '1 hour') >= 5 then
    raise exception 'suggestions: límite de 5 por hora' using hint = 'rate_limit';
  end if;
  return new;
end $$;
revoke all on function public.suggestions_rate_limit() from public, anon, authenticated;
drop trigger if exists suggestions_rate on public.suggestions;
create trigger suggestions_rate before insert on public.suggestions
  for each row execute function public.suggestions_rate_limit();
-- =====================================================================
-- 4. Medición sin datos personales: tabla events y vistas en el esquema analytics.
--    Cada evento guarda solo el tipo, el curso, el día, el idioma y la fecha: sin usuario, sin
--    identificador del navegador y sin cookies, así que no se puede asociar a nadie.
--    Tipos: trial (respondió el ejercicio de la portada), start (pulsó Empezar), signup (creó cuenta),
--    level (terminó un nivel) y day (desbloqueó un día).
--    Se envían desde la app (anon o con sesión) y nadie puede leerlos desde la app: se consultan en
--    Supabase > SQL Editor, p. ej. select * from analytics.retention;
-- =====================================================================
create table if not exists public.events (
  id         bigint generated always as identity primary key,
  type       text        not null,
  course     text        check (course in ('python', 'java', 'javascript', 'cpp')),
  day        smallint    check (day between 1 and 30),
  locale     text        check (locale in ('es', 'en', 'fr', 'it')),
  created_at timestamptz not null default now()
);
alter table public.events drop constraint if exists events_type_ok;
alter table public.events add constraint events_type_ok check (type in ('trial', 'start', 'signup', 'level', 'day'));
create index if not exists events_time on public.events (created_at desc);

alter table public.events enable row level security;
drop policy if exists "events: enviar" on public.events;
create policy "events: enviar"
  on public.events for insert
  to anon, authenticated
  with check (true);
-- Sin política de lectura: desde la app no se puede leer ningún evento.

-- La fecha la pone el servidor. Como mucho 600 eventos por minuto entre todos (el resto se descarta
-- sin error) y, de vez en cuando, se borran los eventos de hace más de 24 meses.
create or replace function public.events_guard()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  new.created_at := now();
  if (select count(*) from public.events e where e.created_at > now() - interval '1 minute') >= 600 then
    return null;
  end if;
  if random() < 0.01 then
    delete from public.events where created_at < now() - interval '24 months';
  end if;
  return new;
end $$;
revoke all on function public.events_guard() from public, anon, authenticated;
drop trigger if exists events_guard on public.events;
create trigger events_guard before insert on public.events
  for each row execute function public.events_guard();

-- Vistas para el titular (no se publican por la API: el esquema analytics no está expuesto).
create schema if not exists analytics;
revoke all on schema analytics from public, anon, authenticated;

-- Retención de las cuentas: de los registrados hace al menos N días, cuántos terminaron un nivel
-- N días o más después de registrarse.
create or replace view analytics.retention as
select n.days,
  count(u.id) filter (where u.created_at <= now() - make_interval(days => n.days)) as cohort,
  count(u.id) filter (where u.created_at <= now() - make_interval(days => n.days) and exists (
    select 1 from public.level_results r
    where r.user_id = u.id and r.created_at >= u.created_at + make_interval(days => n.days))) as returned
from (values (1), (7), (30)) as n(days) cross join auth.users u
group by n.days order by n.days;

-- Embudo por curso: cuántas cuentas han llegado a cada día (su día más alto con un nivel terminado).
create or replace view analytics.funnel as
with reach as (
  select user_id, course, max(day) as day from public.level_results where day is not null group by user_id, course
)
select c.course, d.day, count(r.user_id) as users
from (select distinct course from reach) c cross join generate_series(1, 30) as d(day)
left join reach r on r.course = c.course and r.day >= d.day
group by c.course, d.day order by c.course, d.day;

-- Precisión por día de curso (primeros intentos acertados sobre respuestas), para revisar los días difíciles.
create or replace view analytics.accuracy as
select course, day, count(*) as levels,
  round(100.0 * sum(correct) / nullif(sum(correct + mistakes), 0), 1) as accuracy
from public.level_results
where mode in ('practice', 'reto') and day is not null
group by course, day order by course, day;

-- Eventos por día y tipo (incluye a quien aún no tiene cuenta: portada, ejercicio de prueba, registro).
create or replace view analytics.events_daily as
select created_at::date as day, type, count(*) as events
from public.events group by 1, 2 order by 1 desc, 2;

-- Días desbloqueados por curso según los eventos (cuentas y portada juntas, sin identificar a nadie).
create or replace view analytics.days_reached as
select course, day, count(*) as times from public.events where type = 'day' group by course, day order by course, day;
