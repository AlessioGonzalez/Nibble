# Qué hacer si algo va mal

Guía de una página para incidentes de seguridad o pérdida de datos en Nibble. Contacto público: nibblebytesproyect@gmail.com (ver `SECURITY.md`).

## 1. Una clave se ha filtrado

- **Clave `service_role` o `sb_secret_`** (la secreta): es lo más grave, porque salta la seguridad por filas.
  1. Supabase > Project Settings > API: genera una clave nueva y revoca la anterior.
  2. Busca dónde estaba (repositorio, capturas, chats) y bórrala. Si llegó a un commit, la clave ya es pública aunque borres el commit: lo importante es revocarla.
  3. Revisa en Supabase > Logs las peticiones hechas con ella desde la fecha de la filtración.
- **Clave `anon`** (la pública): no es secreta; está en la web a propósito. No hace falta nada.
- **Token de GitHub, Google o el correo (SMTP)**: revócalo en su panel y crea otro.

## 2. Alguien ha entrado en una cuenta que no es suya

1. Supabase > Authentication > Users: busca la cuenta, cierra sus sesiones y, si hace falta, bloquéala.
2. Avisa a la persona por correo y pídele que cambie la contraseña. Ella también puede usar «Cerrar sesión en todos los dispositivos» en su perfil.
3. Si se han tocado datos, restaura su fila de `progress` desde la última copia (apartado 4).

## 3. Datos personales expuestos (brecha)

1. Corta la causa: revoca claves, desactiva la función o la política RLS que falle y vuelve a ejecutar `supabase/test-rls.sql` en un proyecto de pruebas.
2. Apunta qué ha pasado, cuándo, qué datos y de cuántas personas.
3. Si hay riesgo para las personas, el RGPD obliga a avisar a la Agencia Española de Protección de Datos en 72 horas (sede.aepd.gob.es) y, si el riesgo es alto, a las personas afectadas.

## 4. Pérdida o borrado de datos

- **Copias**: `node scripts/export-backup.mjs` (instrucciones en el propio archivo) guarda cada tabla en `backups/AAAA-MM-DD/`. Hazlo cada semana y guarda las copias fuera del ordenador, cifradas. El plan gratuito de Supabase no incluye copias automáticas descargables.
- **Restaurar una fila de progreso**: Supabase > Table Editor > `progress`, o con SQL: `update public.progress set state = '<json de la copia>'::jsonb, revision = revision + 1 where user_id = '<id>';`
- El progreso también está en el navegador de cada persona: al iniciar sesión de nuevo, la app une su copia local con la de la nube.

## 5. La web está caída o publica algo roto

1. GitHub > Actions: mira el último despliegue. Si falla una comprobación, no se publica nada nuevo y sigue la versión anterior.
2. Para volver atrás: `git revert <commit>` en `main` y `git push`. El despliegue se hace solo.
3. Si los usuarios ven una versión vieja, sube `VERSION` en `assets/js/app.js` y en `sw.js` a la vez: el service worker cambia de caché.

## Después

Escribe en un párrafo qué pasó, la causa y qué se cambia para que no vuelva a pasar.
