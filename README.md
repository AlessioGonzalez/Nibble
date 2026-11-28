# Nibble

Aprende **Python, Java, JavaScript y C++** byte a byte, con retos de 30 días, rachas, vidas, experiencia y ejercicios cortos. Un *nibble* son 4 bits, uno por cada lenguaje del curso; cada día del reto es un byte y cada uno de sus 8 niveles, un bit.

El formato de reto de 30 días se inspira en retos de la comunidad como 30 Days Of Python de Asabeneh. El temario, las lecciones y los ejercicios de Nibble son propios.

Te acompaña **Kibi**, un hámster programador que mordisquea código. Lleva una tarjeta `</>` del color del curso que estás haciendo. Tiene armario: cada logro le trae un disfraz (gorros, gafas, una capa, una corona…) que le pones en la pestaña **Kibi**. Los disfraces se dibujan encima de Kibi sin cambiar su forma, su cara ni sus colores.


Si falta la traducción de un curso, la app muestra la versión en español.

## Pruebas

```
npm test                          # progreso, textos, generador y seguridad
npm install && npx playwright install chromium
npm run e2e                       # 5 recorridos en el navegador, a 375 y 1280 px
node scripts/validate.mjs         # contenido de los 4 cursos
```

En Supabase: `supabase/test-rls.sql` (seguridad por filas, límites y medición). Copias de seguridad y qué hacer ante un incidente: [docs/INCIDENTES.md](docs/INCIDENTES.md).

## Licencia

Todos los derechos reservados (ver [LICENSE](LICENSE)). Hasta el 27 de noviembre de 2026 el proyecto se publicó con licencia MIT; esas copias anteriores conservan esa licencia. Los componentes de terceros mantienen las suyas: [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

Seguridad: [SECURITY.md](SECURITY.md).
