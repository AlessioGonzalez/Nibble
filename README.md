# Nibble

Aprende **Python, Java, JavaScript y C++** byte a byte, con retos de 30 días, rachas, vidas, experiencia y ejercicios cortos. Un *nibble* son 4 bits, uno por cada lenguaje del curso; cada día del reto es un byte y cada uno de sus 8 niveles, un bit.

El formato de reto de 30 días se inspira en retos de la comunidad como 30 Days Of Python de Asabeneh. El temario, las lecciones y los ejercicios de Nibble son propios.

Te acompaña **Kibi**, un hámster programador que mordisquea código. Lleva una tarjeta `</>` del color del curso que estás haciendo. Tiene armario: cada logro le trae un disfraz (gorros, gafas, una capa, una corona…) que le pones en la pestaña **Kibi**. Los disfraces se dibujan encima de Kibi sin cambiar su forma, su cara ni sus colores.


En JavaScript, los programas se ejecutan en `sandbox.html`, abierta en un `<iframe sandbox="allow-scripts">` con su propia CSP: origen aislado, sin acceso a la sesión, localStorage, IndexedDB, cookies ni red, y con un Worker dentro. `console.log` va al panel de salida y `prompt()` lee la entrada del ejercicio.

En el curso de Python, los programas del editor se ejecutan en el propio navegador con [Pyodide](https://pyodide.org) dentro de un Web Worker: **Ejecutar** muestra la salida y los errores (explicados en una frase), y **Comprobar** pasa las pruebas del ejercicio. Un programa que tarda más de 5 s se corta sin congelar la página. Pyodide (unos 13 MB) se descarga la primera vez que se pulsa Ejecutar y después funciona sin conexión.

Si falta la traducción de un curso, la app muestra la versión en español.

## Pruebas

```
npm test                          # progreso, textos, generador y seguridad
npm install && npx playwright install chromium firefox webkit
npm run e2e                       # 10 recorridos a 375 y 1280 px; los de JavaScript aislado, también en Firefox y WebKit
node scripts/validate.mjs         # contenido de los 4 cursos (y ejecuta las soluciones de los programas de Python y JavaScript)
node scripts/build-vendor.mjs     # regenera CodeMirror y copia Pyodide a assets/vendor/
```

En Supabase: `supabase/test-rls.sql` (seguridad por filas, límites y medición). Copias de seguridad y qué hacer ante un incidente: [docs/INCIDENTES.md](docs/INCIDENTES.md).

## Licencia

Todos los derechos reservados (ver [LICENSE](LICENSE)). Hasta el 27 de noviembre de 2026 el proyecto se publicó con licencia MIT; esas copias anteriores conservan esa licencia. Los componentes de terceros mantienen las suyas: [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

Seguridad: [SECURITY.md](SECURITY.md).
