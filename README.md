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

Si falta la traducción de un curso, la app muestra la versión en español.

## Licencia

[MIT](LICENSE)
