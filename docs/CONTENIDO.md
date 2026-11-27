# Cómo se escribe el contenido

Cada curso tiene un archivo por idioma:

```
content/<curso>/<idioma>.js     curso: python | java | javascript | cpp
                                idioma: es | en | fr | it
```

La app carga solo el archivo del curso y del idioma que se está usando. Si falta un idioma, usa el español.

Después de editar, valida siempre:

```
node scripts/validate.mjs <curso>            # todos los idiomas de un curso
node scripts/validate.mjs <curso> <idioma>   # un solo archivo
```

## Estructura de un archivo

```js
/* Python · Español */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('python', 'es', {
  tag: 'Una frase que describe el curso.',
  days: [
    {
      id: 'py-intro',            // identificador fijo del día (ver assets/js/order.js)
      t: 'Título del día',
      d: 'Resumen de una línea de lo que se aprende.',
      guide: [ /* 4 a 6 secciones */ ],
      x: [ /* exactamente 8 ejercicios: 7 prácticas y el reto final */ ],
    },
    // ... 30 días en total
  ],
}))(Sintaxis);
```

### Identificadores y orden de los días

Cada día tiene un `id` fijo (`py-loops`, `java-maps`…), igual en los 4 idiomas. El orden del curso está en `assets/js/order.js`: la posición de cada id es su número de día. El progreso de los usuarios se guarda por id, así que para reordenar el temario:

1. Cambia el orden en `order.js` y en los 4 archivos de idioma del curso (el validador comprueba que coinciden).
2. Un día nuevo lleva un id nuevo. Un id nunca se reutiliza para otro tema.
3. Revisa `UNLOCK_ID` en `assets/js/practice.js`: cada familia de ejercicios apunta al id del día que la enseña.

### Temario y textos propios

El formato de reto de 30 días se inspira en retos de la comunidad como *30 Days Of Python* de Asabeneh, pero el temario, las lecciones y los ejercicios de Nibble tienen que ser propios: no copies ni traduzcas textos, ejercicios ni el orden de temas de otros cursos. Si algo se inspira en otra fuente, cítala como inspiración.

## La guía de cada día

Cada día es una lección completa, como un capítulo de un libro corto. `guide` es una lista de **4 a 6 secciones**:

```js
{ h: 'Título de la sección', p: ['Párrafo 1.', 'Párrafo 2.'], code: `código opcional` }
{ h: 'Ejemplo real: ...', real: true, p: ['Contexto del problema.'], code: `...` }
```

Requisitos (el validador los comprueba):

- Al menos 4 secciones; al menos 2 con `code`.
- Al menos una sección con `real: true`: un **ejemplo real** de algo que alguien haría de verdad en su trabajo o su vida (calcular una factura, limpiar un CSV, validar un formulario, leer una API pública, contar palabras de un texto...). Nada de `foo` y `bar`.
- Explica el porqué, no solo el qué: errores típicos, cuándo usar cada cosa, buenas prácticas.
- Párrafos cortos, frases directas. El código en línea va entre comillas invertidas: `` `print()` ``.
- El código de los ejemplos debe ser correcto y, si indicas la salida en un comentario, esa salida debe ser exacta.

## Los 8 ejercicios de cada día

`x` tiene **exactamente 8 ejercicios**:

- `x[0]` a `x[6]`: las **7 prácticas**, de menor a mayor dificultad. Cada práctica es la pregunta principal de un nivel de la ruta.
- `x[7]`: el **reto final**, más difícil que las prácticas y que combina varias ideas del día. Se juega al final de un nivel de 7 preguntas (6 del día y el reto); hay que acertar con como mucho 1 fallo para desbloquear el día siguiente.

### Cómo se arma cada nivel

Cada nivel junta tres fuentes de ejercicios:

- **Su práctica del día** (`x[k]`), que solo sale en ese nivel.
- **1 o 2 de repaso** de días anteriores, primero de los 3 más recientes. Cada nivel toma un trozo distinto del repaso; al repetir un nivel ya completado, el repaso es al azar.
- **Ejercicios generados al azar** por `assets/js/practice.js`. El generador usa solo los temas que el curso ya ha visto (la tabla `UNLOCK` dice desde qué día sale cada familia) y calcula él mismo la respuesta. Así ningún ejercicio se repite dentro de un nivel y los niveles son distintos entre sí.

El reto final junta 3 prácticas del día, 3 ejercicios generados y la pregunta del reto (`x[7]`).

- El nivel 1 tiene 8 secciones, el 2 tiene 7, el 3 otra vez 8, y así sucesivamente.
- Para añadir una familia al generador, escribe su función en `make()` y su día en `UNLOCK` para los 4 lenguajes, añade sus textos `gen.*` en los 4 idiomas de `assets/js/i18n.js` y ejecuta `node scripts/check-practice.mjs`.
- Las secciones alternan **elegir** (`mc`, `out`, `fill`, `ord`) y **escribir código**. Para las de escribir, la app convierte los ejercicios:
  - `fill`: escribes en el hueco lo que antes elegías.
  - `out`: escribes la salida exacta. Solo si la respuesta cabe en una línea y tiene 40 caracteres o menos.
  - `ord`: escribes la línea entera. Solo si cabe en 70 caracteres y la pregunta no empieza por "Ordena" ("Order", "Remets", "Ordina"…), porque entonces no tendría sentido escribirla.
  - `typ` se usa tal cual.
- Al comprobar lo escrito se ignoran los espacios de más y el `;` final.

Usa al menos 3 tipos distintos por día. Tipos disponibles:

| Tipo | Función | Uso |
|---|---|---|
| Elegir respuesta | `mc(pregunta, [correcta, otra, otra, otra], explicación, código?)` | Conceptos |
| Qué imprime | `out(código, [correcta, ...], explicación, pregunta?)` | Leer código |
| Completar hueco | `fill(códigoCon___, [correcta, ...], explicación, pregunta?)` | Sintaxis |
| Ordenar piezas | `ord(pregunta, [piezas en orden], [piezas señuelo], explicación)` | Escribir una línea |
| Escribir | `typ(pregunta, códigoCon___, 'respuesta' o ['respuesta', 'alternativa'], explicación)` | Recordar sin pistas |

Reglas:

- En `mc`, `out` y `fill` **la opción correcta va siempre primero**; la app las baraja. Usa 3 o 4 opciones sin repetir.
- Los distractores deben ser errores plausibles (los que comete de verdad alguien que aprende), no tonterías.
- `fill` y `typ` necesitan el hueco `___` en el código.
- La explicación (`e`) dice por qué la respuesta es correcta en una o dos frases.
- Comprueba mentalmente cada salida de `out`: tiene que ser exacta, incluidos espacios y saltos de línea (`'0\n1\n2'`).
- En las cadenas de JavaScript del archivo, el código va entre comillas invertidas (template literals). Si el código contiene comillas invertidas o `${`, usa comillas simples y `\n`.

## Traducciones

- `en`, `fr` e `it` son traducciones fieles del español: mismos días, mismas secciones y los mismos ejercicios en el mismo orden, con el mismo tipo y el mismo número de opciones.
- Traduce los textos: títulos, párrafos, preguntas, opciones en lenguaje natural y explicaciones. También puedes traducir los comentarios y los textos dentro del código si la salida de los ejercicios sigue siendo correcta.
- No traduzcas palabras clave, nombres de funciones ni opciones que sean código.
- Escribe con naturalidad en cada idioma; no traduzcas palabra por palabra.

## Ejemplo completo de un día

```js
{
  id: 'py-intro',
  t: 'Introducción',
  d: 'Qué es Python, tu primer programa, la sangría y los comentarios.',
  guide: [
    { h: '¿Qué es Python?', p: [
      'Python es un lenguaje de programación de alto nivel creado por Guido van Rossum y publicado en 1991. Se lee casi como inglés, por eso es uno de los más usados para empezar.',
      'Hoy lo usan Instagram y Spotify en sus servidores, la NASA en análisis científico y casi todos los equipos de inteligencia artificial.' ] },
    { h: 'Tu primer programa', p: [
      'Instala Python desde python.org y guarda esto en un archivo `hola.py`. Ejecútalo con `python hola.py` en la terminal.',
      '`print()` muestra en pantalla lo que le pases entre paréntesis. Los textos van entre comillas.' ],
      code: `print("Hola, mundo")\nprint(3 + 4)  # 7` },
    { h: 'Sangría y comentarios', p: [
      'Python no usa llaves: la sangría de 4 espacios indica qué líneas forman un bloque. Si no cuadra, Python lanza `IndentationError`.',
      'Lo que va tras `#` es un comentario: Python lo ignora y sirve para explicar el código a otras personas.' ],
      code: `# Comprobar si alguien puede votar\nedad = 20\nif edad >= 18:\n    print("Puedes votar")  # dentro del if\nprint("Fin")              # fuera del if` },
    { h: 'Ejemplo real: dividir la cuenta del restaurante', real: true, p: [
      'Con cuatro líneas ya resuelves un problema cotidiano: repartir una cuenta con propina entre amigos.' ],
      code: `cuenta = 84.50\npersonas = 3\npropina = cuenta * 0.10\nprint("Cada persona paga:", round((cuenta + propina) / personas, 2))  # 30.98` },
  ],
  x: [
    mc('¿Qué función muestra texto en pantalla en Python?', ['print()', 'echo()', 'console.log()', 'printf()'], '`print()` escribe en la salida estándar. `console.log()` es de JavaScript.'),
    mc('¿Cómo se escribe un comentario en Python?', ['# comentario', '// comentario', '/* comentario */', '-- comentario'], 'Todo lo que sigue a `#` en una línea es un comentario.'),
    out(`print(2 ** 3)`, ['8', '6', '9', '23'], '`**` es la potencia: 2 elevado a 3 es 8.'),
    mc('¿Qué marca los bloques de código en Python?', ['La sangría', 'Las llaves { }', 'Las palabras begin y end', 'El punto y coma'], 'Python usa la sangría; si no cuadra, lanza `IndentationError`.'),
    out(`print(type("7"))`, ["<class 'str'>", "<class 'int'>", "<class 'float'>"], 'Las comillas convierten el 7 en texto, un `str`.'),
    ord('Escribe el código que muestra Hola, mundo', ['print', '(', '"Hola, mundo"', ')'], ['echo', '{'], 'Llamas a `print` con el texto entre comillas dentro de los paréntesis.'),
    out(`print("Hola" * 3)`, ['HolaHolaHola', 'Hola 3', 'Error', 'Hola*3'], 'Multiplicar un texto por un entero lo repite.'),
    // Reto final del día
    out(`a = 10\nb = 3\nprint(a + b * 2, (a + b) * 2)`, ['16 26', '26 16', '16 16', '26 26'], 'La multiplicación va antes que la suma; los paréntesis cambian el orden. `print` separa los valores con un espacio.'),
  ],
}
```
