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
      t: 'Título del día',
      d: 'Resumen de una línea de lo que se aprende.',
      guide: [ /* 4 a 6 secciones */ ],
      x: [ /* exactamente 8 ejercicios: 7 prácticas y el reto final */ ],
    },
    // ... 30 días en total
  ],
}))(Sintaxis);
```

El orden y los temas de los 30 días siguen el reto *30 Days Of Python* de Asabeneh adaptado a cada lenguaje. La lista de días de cada curso está en `.legacy/<curso>.js` (la versión anterior del proyecto): mantén esos títulos y ese orden.

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

La app no necesita más ejercicios: arma cada nivel con las 7 prácticas del día y con un repaso de los días anteriores.

- El nivel 1 tiene 8 secciones, el 2 tiene 7, el 3 otra vez 8, y así sucesivamente. Cada nivel empieza con su práctica (`x[k]`).
- Dentro de un nivel cada ejercicio sale una sola vez. Solo si no hay bastantes distintos (los niveles de 8 del día 1) se repite uno, al final y en la otra forma.
- Las prácticas de hoy se toman en saltos de 2 (`x[k]`, `x[k+2]`, `x[k+4]`…), así dos niveles seguidos comparten como mucho una.
- El repaso empieza por los 3 días anteriores y sigue con los más antiguos. Se baraja siempre igual para cada día, curso e idioma, y cada nivel toma un trozo distinto. Al repetir un nivel ya completado, el repaso es al azar.
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
