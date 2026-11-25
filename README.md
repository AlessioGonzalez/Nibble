# Nibble

Aprende **Python, Java, JavaScript y C++** a bocados, con retos de 30 días al estilo de [30 Days Of Python](https://github.com/Asabeneh/30-Days-Of-Python) y la mecánica de una app de idiomas: rachas, vidas, experiencia y ejercicios cortos. Un *nibble* son 4 bits, uno por cada lenguaje del curso.

Te acompaña **Kibi**, un hámster programador que mordisquea código. Lleva una tarjeta `</>` del color del curso que estás haciendo.

- **Pantalla inicial** con la presentación de la web. Se muestra en la primera visita y siempre en `#inicio`, y también desde el buscador (`Ctrl K` > *Pantalla de inicio*).
- **30 días por lenguaje.** Cada día tiene una guía con ejemplos reales, 7 niveles de práctica y un reto final: 240 preguntas escritas por lenguaje.
- **Niveles de 8 y 7 secciones:** el nivel 1 de cada día tiene 8, el 2 tiene 7, el 3 otra vez 8, y así sucesivamente. Cada nivel alterna secciones de **elegir la opción correcta** con secciones de **escribir código**: completar el hueco, escribir la salida exacta o escribir la línea entera. Dentro de un nivel no se repite ningún ejercicio (salvo una sección en los niveles de 8 del día 1, que solo tiene 7). Cada nivel mezcla prácticas del día con un repaso de los días anteriores, y cada nivel del mismo día recibe un trozo distinto del repaso.
- **Sugerencias:** una página con un formulario para enviar ideas, errores de la web o errores en las lecciones. Con Supabase se guardan en la tabla `suggestions`; sin Supabase se abren como incidencia (*issue*) del repositorio de GitHub.
- **El reto final desbloquea el día siguiente:** 7 preguntas (6 del día y el reto), con un fallo como máximo.
- **10 vidas.** Cada fallo resta una; se recupera una cada 2 minutos, o las 10 al momento al completar un nivel extra.
- **Pensada para el móvil (iOS y Android):** se puede añadir a la pantalla de inicio con su propio icono. Además, los campos de escribir código desactivan el autocorrector y aceptan las comillas y guiones que ponen los teclados del móvil.
- **4 idiomas:** español, inglés, francés e italiano (interfaz y lecciones).
- **Cuentas con email y contraseña** (Supabase): el progreso se guarda en la nube y se mantiene en cualquier dispositivo.
- Menú lateral, buscador con `Ctrl K`, mapa de 30 días, modo claro y oscuro, y diseño para móvil.

Es una web estática: HTML, CSS y JavaScript sin dependencias ni paso de compilación.

## Probarla en local

Los navegadores no cargan los cursos desde `file://`, así que sirve la carpeta con cualquier servidor estático:

```bash
npx serve .
# o bien
python -m http.server 8000
```

Sin configurar Supabase, la app funciona en **modo local**: no pide cuenta y guarda el progreso en el navegador.

## Activar las cuentas y el progreso en la nube (Supabase)

1. Crea un proyecto gratuito en [supabase.com](https://supabase.com).
2. En **SQL Editor**, ejecuta el contenido de [`supabase/schema.sql`](supabase/schema.sql). Crea la tabla `progress` con seguridad a nivel de fila: cada usuario solo puede leer y escribir su propio progreso.
3. En **Authentication > URL Configuration**, pon como *Site URL* la dirección donde publiques la web (por ejemplo `https://tu-usuario.github.io/nibble/`) y añádela también en *Redirect URLs*. Así funcionan los enlaces de confirmación y de cambio de contraseña.
4. En **Project Settings > API**, copia la *Project URL* y la clave *anon public* y pégalas en [`assets/js/config.js`](assets/js/config.js):

   ```js
   window.SINTAXIS_CONFIG = {
     supabaseUrl: 'https://xxxx.supabase.co',
     supabaseAnonKey: 'eyJ...',
   };
   ```

   La clave *anon* es pública por diseño; la protección la dan las políticas de `schema.sql`. **Nunca** pongas la clave `service_role` en este archivo.

Con Supabase configurado, la app muestra una pantalla de acceso (entrar, crear cuenta y recuperar la contraseña). El progreso se guarda en el navegador y se sincroniza con la nube poco después de cada cambio. Al entrar desde otro dispositivo, se combinan ambas copias sin perder niveles completados.

### Qué crea `schema.sql`

| Objeto | Para qué sirve |
| --- | --- |
| Tabla `progress` | Una fila por usuario con todo su progreso. La columna `revision` cuenta los guardados y `updated_at` la pone el servidor. Una restricción impide guardar algo que no sea un objeto JSON o que ocupe más de 512 KB. |
| Función `save_progress` | Guarda el progreso solo si nadie lo ha cambiado desde la última lectura. Si otro dispositivo guardó antes, la app vuelve a leer, combina las dos copias y reintenta. Así dos pestañas o dos móviles no se pisan el progreso. |
| Tabla `level_results` | El historial: una fila por cada nivel, reto, nivel extra o prueba terminados, con el curso, el día, las secciones, los aciertos, los fallos, la experiencia y el tiempo. Sin conexión se guardan en una cola local y se envían después. |
| Tabla `suggestions` | Las sugerencias del formulario: tipo, mensaje y, si el usuario lo marca, el curso y el día. Solo los usuarios con sesión pueden enviarlas y nadie puede leerlas desde la app. Se revisan en **Table Editor > suggestions**, donde la columna `status` sirve para marcarlas como `read` o `done`. |
| Vista `my_stats` | Resumen por curso del usuario que la consulta: niveles, retos, experiencia, porcentaje de aciertos y última partida. |

Todas las tablas tienen seguridad a nivel de fila: cada usuario solo ve y modifica lo suyo. El archivo se puede volver a ejecutar sin perder datos y actualiza las instalaciones anteriores. Si aún no lo has ejecutado de nuevo, la app sigue funcionando con la tabla `progress` antigua, pero sin control de versiones ni historial.

## Publicar en GitHub Pages

1. Crea un repositorio vacío en GitHub (sin README ni licencia), por ejemplo `nibble`.
2. Desde la carpeta del proyecto, súbelo a la rama `main`:

   ```bash
   git add .
   git commit -m "Nibble: primera versión"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/nibble.git
   git push -u origin main
   ```

3. En GitHub, ve a **Settings > Pages** y en *Build and deployment* elige *Source: GitHub Actions*.
4. En la pestaña **Actions** verás el workflow *Publicar en GitHub Pages*. Si el primer push se hizo antes del paso 3, ábrelo y pulsa *Run workflow*.
5. Cuando termine, la web estará en `https://TU-USUARIO.github.io/nibble/`.
6. Opcional, para activar las cuentas: en lugar de editar `config.js`, crea las variables `SUPABASE_URL` y `SUPABASE_ANON_KEY` en **Settings > Secrets and variables > Actions > Variables**. El workflow genera `config.js` con ellas al publicar. Recuerda poner la dirección de la web en Supabase (paso 3 del apartado anterior).
7. Sugerencias sin Supabase: el workflow enlaza solo el formulario con las incidencias del repositorio (`https://github.com/TU-USUARIO/nibble/issues/new`). Comprueba que **Settings > General > Features > Issues** está activado (lo está por defecto en los repositorios públicos). Quien envíe una sugerencia así necesita una cuenta de GitHub.

Cada push a `main` ejecuta [`.github/workflows/pages.yml`](.github/workflows/pages.yml), que valida las 3840 preguntas y publica la web. Si el contenido tiene un error, la publicación se detiene y el registro del workflow indica el día y el ejercicio.

## Estructura

```
index.html                 página principal
assets/css/app.css         estilos
assets/js/config.js        claves de Supabase (vacías = modo local)
assets/js/content-api.js   funciones que usan los archivos de contenido
assets/js/i18n.js          textos de la interfaz en es, en, fr e it
assets/js/store.js         progreso del usuario, login y sincronización
assets/js/app.js           interfaz: mapa, días, lecciones, perfil y buscador
content/<curso>/<idioma>.js  lecciones de cada curso en cada idioma
docs/CONTENIDO.md          cómo escribir y traducir lecciones
scripts/validate.mjs       validador del contenido
supabase/schema.sql        tabla y políticas de la base de datos
```

## Añadir o corregir lecciones

Lee [`docs/CONTENIDO.md`](docs/CONTENIDO.md) y valida antes de subir cambios:

```bash
node scripts/validate.mjs                 # todo
node scripts/validate.mjs python          # un curso
node scripts/validate.mjs python es       # un curso en un idioma
node scripts/validate.mjs --allow-missing # ignora los archivos que aún no existen
```

Si falta la traducción de un curso, la app muestra la versión en español.

## Licencia

[MIT](LICENSE)
