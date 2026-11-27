/* JavaScript · Español */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('javascript', 'es', {
  tag: 'El lenguaje de la web, del navegador a Node.js, en 30 días.',
  days: [
    // Día 1
    {
      id: 'js-intro',
      t: 'Introducción',
      d: 'Qué es JavaScript, dónde se ejecuta, la consola y tu primer script.',
      guide: [
        { h: '¿Qué es JavaScript?', p: [
          'JavaScript es el lenguaje de programación de la web. Brendan Eich lo creó en 1995 para el navegador Netscape y hoy lo entienden todos los navegadores del mundo.',
          'HTML define el contenido de una página, CSS su aspecto y JavaScript su comportamiento: menús que se abren, formularios que se validan, mapas que se mueven.',
          'Su nombre oficial como estándar es ECMAScript. Cuando leas "ES6" o "ES2015" se refiere a la gran actualización de 2015, que trajo `let`, `const`, las funciones flecha y las clases.' ] },
        { h: 'Dónde se ejecuta', p: [
          'En el navegador: abre la consola con F12 (o Ctrl+Mayús+J) y escribe código directamente. Para una página, guarda el código en un archivo `.js` y enlázalo desde el HTML.',
          'Fuera del navegador: Node.js ejecuta JavaScript en servidores y en tu terminal. Instálalo desde nodejs.org y ejecuta un archivo con `node app.js`.',
          'El atributo `defer` hace que el script se ejecute cuando el HTML ya está cargado, así puede encontrar los elementos de la página.' ],
          code: `<!-- index.html -->\n<script src="app.js" defer></script>\n\n// En la terminal, con Node.js:\n// node app.js` },
        { h: 'Tu primer programa', p: [
          '`console.log()` muestra en la consola lo que le pases entre paréntesis. Puedes pasarle varios valores separados por comas y los mostrará separados por un espacio.',
          'Los textos van entre comillas dobles o simples. El punto y coma final es opcional, pero ponerlo siempre evita sorpresas.' ],
          code: `console.log("Hola, mundo");     // Hola, mundo\nconsole.log(2 + 3);             // 5\nconsole.log("Total:", 10 * 3);  // Total: 30` },
        { h: 'Variables y comentarios', p: [
          'Una variable es una caja con nombre donde guardas un valor. Usa `const` para valores que no vas a reasignar y `let` para los que sí cambian. Evita `var`, que es la forma antigua.',
          'Lo que va detrás de `//` es un comentario de una línea; `/* ... */` abarca varias líneas. JavaScript los ignora: sirven para explicar el porqué del código.',
          'Error típico: reasignar una `const`. JavaScript lanza `TypeError: Assignment to constant variable`.' ],
          code: `const nombre = "Eva";   // no cambiará\nlet edad = 30;          // puede cambiar\nedad = edad + 1;\n/* Mostramos el resultado\n   en una sola línea */\nconsole.log(nombre, edad);  // Eva 31` },
        { h: 'Ejemplo real: dividir la cuenta del restaurante', real: true, p: [
          'Con unas pocas líneas ya resuelves un problema cotidiano: repartir una cuenta con un 10 % de propina entre amigos.',
          '`toFixed(2)` redondea a dos decimales y devuelve un texto, perfecto para mostrar dinero.' ],
          code: `const cuenta = 84.5;\nconst personas = 3;\nconst propina = cuenta * 0.1;\nconst porPersona = (cuenta + propina) / personas;\nconsole.log("Cada persona paga:", porPersona.toFixed(2));  // Cada persona paga: 30.98` },
      ],
      x: [
        mc('¿Cómo se muestra un mensaje en la consola en JavaScript?', ['console.log("Hola")', 'print("Hola")', 'System.out.println("Hola")', 'echo "Hola"'], '`console.log` es la forma estándar de escribir en la consola. `print` es de Python.'),
        mc('¿Cómo se escribe un comentario de una línea?', ['// comentario', '# comentario', '<!-- comentario -->', '-- comentario'], 'Todo lo que sigue a `//` en esa línea se ignora. `/* */` sirve para varias líneas.'),
        mc('¿Dónde se puede ejecutar JavaScript?', ['En el navegador y fuera de él con Node.js', 'Solo en el navegador', 'Solo en Windows', 'Solo dentro de Java'], 'Todos los navegadores lo ejecutan, y Node.js lo lleva a servidores y a la terminal.'),
        fill(`<script ___="app.js" defer></script>`, ['src', 'href', 'file', 'link'], 'El atributo `src` enlaza un archivo de JavaScript externo. `href` se usa en enlaces y hojas de estilo.'),
        out(`console.log(2 + 3 * 4);`, ['14', '20', '24', '9'], 'La multiplicación se calcula antes que la suma: 3 * 4 = 12 y 2 + 12 = 14.'),
        ord('Escribe la línea que muestra Hola, mundo en la consola', ['console', '.', 'log', '(', '"Hola, mundo"', ')'], ['print', 'echo'], 'Se llama al método `log` del objeto `console` con el texto entre paréntesis.'),
        typ('Declara una variable que se pueda reasignar', `___ edad = 30;\nedad = 31;`, ['let', 'var'], '`let` permite reasignar. Con `const` la segunda línea lanzaría un `TypeError`.'),
        out(`let precio = 10;\nprecio = precio * 2;\nconst envio = 5;\nconsole.log("Total:", precio + envio);`, ['Total: 25', 'Total: 15', 'Total:25', 'Error'], '`precio` pasa a valer 20 y se suma el envío: 25. `console.log` separa sus argumentos con un espacio.'),
      ],
    },
    // Día 2
    {
      id: 'js-types',
      t: 'Tipos de datos',
      d: 'Primitivos, typeof, textos, números y conversiones entre tipos.',
      guide: [
        { h: 'Primitivos y objetos', p: [
          'JavaScript tiene siete tipos primitivos: `string` (texto), `number` (números, enteros o decimales), `boolean` (`true`/`false`), `undefined`, `null`, `bigint` y `symbol`. Todo lo demás, como arrays y funciones, son objetos.',
          '`typeof` te dice el tipo de un valor. Ojo con dos rarezas: `typeof null` devuelve "object" por un error histórico, y `typeof []` también devuelve "object".',
          '`undefined` significa "todavía no tiene valor"; `null` lo pones tú a propósito para decir "vacío".' ],
          code: `console.log(typeof "hola");     // string\nconsole.log(typeof 3.14);       // number\nconsole.log(typeof true);       // boolean\nconsole.log(typeof undefined);  // undefined\nconsole.log(typeof null);       // object  (rareza histórica)\nconsole.log(typeof [1, 2]);     // object` },
        { h: 'let, const y var', p: [
          'Usa `const` por defecto y `let` solo cuando necesites reasignar. Así quien lea el código sabe qué valores cambian.',
          '`var` es la forma anterior a 2015: no respeta los bloques `{ }` y se puede usar antes de declararla (vale `undefined`), lo que provoca errores difíciles de ver.' ] },
        { h: 'Textos y plantillas', p: [
          'Los textos van entre comillas dobles, simples o invertidas. Las comillas invertidas crean plantillas: insertan expresiones con `${...}` y admiten varias líneas.',
          'Métodos útiles: `length` (longitud), `toUpperCase()`, `toLowerCase()`, `trim()` (quita espacios de los extremos), `includes()`, `slice(inicio, fin)` y `replace()`. Ninguno modifica el texto original: devuelven uno nuevo.' ],
          code: 'const nombre = "Eva";\nconst puntos = 15;\nconsole.log(`${nombre} tiene ${puntos} puntos`);  // Eva tiene 15 puntos\n\nconst t = "  JavaScript  ".trim();\nconsole.log(t.length);           // 10\nconsole.log(t.slice(0, 4));      // Java\nconsole.log(t.toUpperCase());    // JAVASCRIPT\nconsole.log(t.includes("Script")); // true' },
        { h: 'Números y conversiones', p: [
          'Si uno de los operandos de `+` es texto, JavaScript concatena: `"5" + 2` da "52". Los demás operadores (`-`, `*`, `/`) convierten el texto en número: `"5" - 2` da 3.',
          'Convierte de forma explícita para no depender de esas reglas: `Number("42")`, `parseInt("42px")`, `parseFloat("3.5")` y `String(42)`.',
          'Si la conversión falla obtienes `NaN` ("not a number"), que curiosamente es de tipo `number`. Compruébalo con `Number.isNaN()`.' ],
          code: `console.log("5" + 2);           // 52\nconsole.log("5" - 2);           // 3\nconsole.log(Number("42") + 1);  // 43\nconsole.log(parseInt("42px"));  // 42\nconsole.log(Number("hola"));    // NaN` },
        { h: 'Ejemplo real: limpiar un nombre de un formulario', real: true, p: [
          'Los usuarios escriben con espacios de más y mayúsculas al azar. Antes de guardar un nombre conviene normalizarlo.',
          'Encadenar métodos es habitual: cada uno devuelve un texto nuevo sobre el que se aplica el siguiente.' ],
          code: `const entrada = "   aNA  ";\nconst limpio = entrada.trim().toLowerCase();\nconst nombre = limpio[0].toUpperCase() + limpio.slice(1);\nconsole.log(nombre);         // Ana\nconsole.log(nombre.length);  // 3` },
      ],
      x: [
        mc('¿Qué palabra declara una variable que no se puede reasignar?', ['const', 'let', 'var', 'static'], 'Con `const` no puedes volver a asignar la variable; con `let` sí.'),
        out(`console.log(typeof 42);`, ['number', 'int', 'integer', 'Number'], 'JavaScript tiene un único tipo para enteros y decimales: `number`.'),
        out(`let x;\nconsole.log(x);`, ['undefined', 'null', '0', 'Error'], 'Una variable declarada sin valor vale `undefined`.'),
        out(`let a = "5";\nlet b = 2;\nconsole.log(a + b);`, ['52', '7', 'Error', 'NaN'], 'Si uno de los operandos es texto, `+` concatena en vez de sumar.'),
        out(`console.log("5" - 2);`, ['3', '52', 'NaN', 'Error'], 'El operador `-` solo trabaja con números, así que convierte "5" en 5.'),
        fill(`const s = "  hola  ";\nconsole.log(s.___());  // hola`, ['trim', 'strip', 'clean', 'trimAll'], '`trim()` quita los espacios del principio y del final. `strip` es de Python.'),
        out(`const t = "JavaScript";\nconsole.log(t.length, t.slice(0, 4), t.toUpperCase().includes("SCRIPT"));`, ['10 Java true', '10 Jav true', '9 Java true', '10 Java false'], 'Tiene 10 letras, `slice(0, 4)` toma los índices 0 a 3 y en mayúsculas sí contiene "SCRIPT".'),
        out('const nombre = "ana";\nconst edad = "30";\nconsole.log(`${nombre.toUpperCase()} tiene ${Number(edad) + 1} años`);', ['ANA tiene 31 años', 'ANA tiene 301 años', 'ana tiene 31 años', '${nombre.toUpperCase()} tiene ${Number(edad) + 1} años'], 'La plantilla evalúa cada `${...}`. `Number(edad)` convierte "30" en 30, así que suma en vez de concatenar.'),
      ],
    },
    // Día 3
    {
      id: 'js-booleans',
      t: 'Booleanos, operadores y fechas',
      d: '=== frente a ==, truthy y falsy, operadores aritméticos y lógicos, y Date.',
      guide: [
        { h: 'Booleanos y comparaciones', p: [
          'Un booleano solo puede ser `true` o `false`. Lo obtienes al comparar: `>`, `<`, `>=`, `<=`, `===` (igual) y `!==` (distinto).',
          '`===` compara valor y tipo. `==` convierte los tipos antes de comparar y da resultados raros como `0 == ""` (true). Usa siempre `===` y `!==`.' ],
          code: `console.log(5 === "5");  // false\nconsole.log(5 == "5");   // true  (convierte el texto)\nconsole.log(3 !== 4);    // true\nconsole.log(10 >= 10);   // true` },
        { h: 'Truthy y falsy', p: [
          'En un `if`, cualquier valor se convierte en booleano. Solo hay seis valores falsy: `false`, `0`, `""` (texto vacío), `null`, `undefined` y `NaN`.',
          'Todo lo demás es truthy, incluidos "0", "false", `[]` y `{}`. Es un error típico pensar que un array vacío es falso.' ],
          code: `console.log(Boolean(0));     // false\nconsole.log(Boolean(""));    // false\nconsole.log(Boolean("0"));   // true\nconsole.log(Boolean([]));    // true` },
        { h: 'Operadores aritméticos y de asignación', p: [
          'Además de `+ - * /` tienes `%` (resto de la división) y `**` (potencia). La precedencia es la de las matemáticas: primero `**`, luego `* / %` y al final `+ -`.',
          'Atajos: `x += 2` equivale a `x = x + 2`, y `x++` suma 1. El resto `%` sirve para saber si un número es par (`n % 2 === 0`).' ],
          code: `console.log(10 % 3);     // 1\nconsole.log(2 ** 3);     // 8\nlet x = 5;\nx += 2;   // 7\nx++;      // 8\nconsole.log(x);          // 8` },
        { h: 'Operadores lógicos', p: [
          '`&&` (y) es verdadero si ambos lados lo son; `||` (o) si al menos uno lo es; `!` niega.',
          'Se evalúan en cortocircuito: en `a && b`, si `a` es falsy ni siquiera se mira `b`. Por eso `usuario && usuario.nombre` no falla si `usuario` es `null`.' ] },
        { h: 'Fechas con Date', p: [
          '`new Date()` crea la fecha y hora actuales; `new Date(2024, 0, 15)` crea una fecha concreta. Cuidado: los meses empiezan en 0 (enero) y terminan en 11 (diciembre).',
          '`getFullYear()`, `getMonth()`, `getDate()` (día del mes) y `getDay()` (día de la semana, 0 es domingo) leen sus partes. Restar dos fechas da la diferencia en milisegundos.' ],
          code: `const d = new Date(2024, 0, 15);  // 15 de enero de 2024\nconsole.log(d.getFullYear(), d.getMonth(), d.getDate());  // 2024 0 15\nconsole.log(d.getDay());  // 1 (lunes)` },
        { h: 'Ejemplo real: cuántos días faltan para las vacaciones', real: true, p: [
          'Una cuenta atrás es un clásico en webs de eventos. Restamos las fechas y convertimos los milisegundos en días.',
          '`Math.round` evita errores de una hora cuando hay cambio de horario entre las dos fechas.' ],
          code: `const hoy = new Date(2024, 5, 1);     // 1 de junio\nconst viaje = new Date(2024, 6, 15);  // 15 de julio\nconst MS_POR_DIA = 1000 * 60 * 60 * 24;\nconst dias = Math.round((viaje - hoy) / MS_POR_DIA);\nconsole.log("Faltan", dias, "días");  // Faltan 44 días` },
      ],
      x: [
        mc('¿Cuál de estos valores es falsy?', ['0', '"0"', '[]', '"false"'], 'El número 0 es falsy. Cualquier texto no vacío y cualquier array, aunque esté vacío, son truthy.'),
        out(`console.log(5 == "5", 5 === "5");`, ['true false', 'true true', 'false false', 'false true'], '`==` convierte "5" en número y da `true`; `===` también compara el tipo y da `false`.'),
        out(`console.log(10 % 3, 2 ** 3);`, ['1 8', '3 6', '1 6', '3 8'], '`%` es el resto (10 entre 3 da 3 y sobra 1) y `**` la potencia (2³ = 8).'),
        out(`let x = 5;\nx += 2;\nx++;\nconsole.log(x);`, ['8', '7', '6', '52'], '5 + 2 = 7, y `x++` suma 1 más.'),
        fill(`const puedeEntrar = edad >= 18 ___ tieneEntrada;`, ['&&', 'and', '||', '&&&'], 'Deben cumplirse las dos condiciones, así que se usa `&&`. `and` es de Python.'),
        out(`console.log(Boolean(""), Boolean("0"));`, ['false true', 'true true', 'false false', 'true false'], 'El texto vacío es falsy; "0" es un texto no vacío, así que es truthy.'),
        out(`const d = new Date(2024, 0, 15);\nconsole.log(d.getMonth());`, ['0', '1', '15', '2024'], 'Los meses en `Date` empiezan en 0: enero es 0.'),
        out(`const edad = 20;\nconst socio = false;\nconst descuento = edad < 25 || socio;\nconsole.log(descuento, !descuento && edad > 18, 7 + 3 * 2 ** 2);`, ['true false 19', 'true true 19', 'true false 40', 'false false 19'], '`edad < 25` es true, así que `||` da true; `!true` es false; y 2 ** 2 = 4, 3 * 4 = 12, 7 + 12 = 19.'),
      ],
    },
    // Día 4
    {
      id: 'js-conditionals',
      t: 'Condicionales',
      d: 'if, else if, el operador ternario, switch, ?? y ?.',
      guide: [
        { h: 'if, else if y else', p: [
          '`if` ejecuta un bloque solo si la condición es verdadera. Puedes encadenar alternativas con `else if` y terminar con un `else` para el resto de casos.',
          'Las condiciones se comprueban en orden y solo se ejecuta el primer bloque que cumple. Por eso conviene empezar por el caso más restrictivo.' ],
          code: `const temperatura = 28;\nif (temperatura > 30) {\n  console.log("Hace mucho calor");\n} else if (temperatura > 20) {\n  console.log("Se está bien");\n} else {\n  console.log("Abrígate");\n}\n// Se está bien` },
        { h: 'El operador ternario', p: [
          '`condición ? valorSiSí : valorSiNo` elige entre dos valores en una sola expresión. Es ideal para asignar una variable o montar un texto.',
          'No encadenes muchos ternarios: si hay más de dos casos, un `if` o un `switch` se lee mejor.' ],
          code: `const edad = 17;\nconst acceso = edad >= 18 ? "permitido" : "denegado";\nconsole.log(acceso);  // denegado` },
        { h: 'switch', p: [
          '`switch` compara un valor con varios `case` usando `===`. Cada caso termina con `break`; si lo olvidas, la ejecución sigue en el caso siguiente.',
          'Ese "caer" al siguiente caso se aprovecha para agrupar valores, y `default` recoge lo que no coincide con ninguno.' ],
          code: `const dia = "sab";\nswitch (dia) {\n  case "sab":\n  case "dom":\n    console.log("Fin de semana");\n    break;\n  default:\n    console.log("Día laborable");\n}\n// Fin de semana` },
        { h: 'Valores por defecto: ?? y ?.', p: [
          '`a ?? b` devuelve `b` solo si `a` es `null` o `undefined`. Es mejor que `||` para valores por defecto, porque `||` también reemplaza 0 y "", que pueden ser valores válidos.',
          'El encadenamiento opcional `?.` lee una propiedad sin fallar si lo anterior es `null` o `undefined`: devuelve `undefined` en lugar de lanzar un `TypeError`.' ],
          code: `const stock = 0;\nconsole.log(stock || 10);  // 10  (¡perdemos el 0!)\nconsole.log(stock ?? 10);  // 0\n\nconst usuario = { perfil: null };\nconsole.log(usuario.perfil?.foto);  // undefined` },
        { h: 'Ejemplo real: calcular el envío de una tienda online', real: true, p: [
          'Las tiendas suelen dar envío gratis a partir de un importe y cobrar distinto según el país. Es un caso perfecto para `if` / `else if`.' ],
          code: `const total = 42;\nconst pais = "ES";\nlet envio;\nif (total >= 50) {\n  envio = 0;\n} else if (pais === "ES") {\n  envio = 4.99;\n} else {\n  envio = 9.99;\n}\nconsole.log("Envío:", envio);  // Envío: 4.99` },
      ],
      x: [
        out(`const edad = 20;\nconst r = edad >= 18 ? "adulto" : "menor";\nconsole.log(r);`, ['adulto', 'menor', 'true', '20'], 'La condición es verdadera, así que el ternario devuelve el primer valor.'),
        fill(`if (x > 10) {\n  console.log("mucho");\n} ___ (x > 5) {\n  console.log("algo");\n}`, ['else if', 'elif', 'elseif', 'else'], 'En JavaScript las alternativas se encadenan con `else if`. `elif` es de Python.'),
        out(`const n = 0;\nif (n) {\n  console.log("sí");\n} else {\n  console.log("no");\n}`, ['no', 'sí', '0', 'undefined'], '0 es falsy, así que se ejecuta el `else`.'),
        out(`console.log(null ?? "valor", 0 || "otro");`, ['valor otro', 'null otro', 'valor 0', 'null 0'], '`??` sustituye `null`. `||` sustituye cualquier falsy, incluido 0.'),
        out(`const dia = "sab";\nswitch (dia) {\n  case "sab":\n  case "dom":\n    console.log("finde");\n    break;\n  default:\n    console.log("laborable");\n}`, ['finde', 'laborable', 'finde\nlaborable', 'sab'], 'Los `case` vacíos se agrupan: "sab" cae en el bloque de "dom", y `break` evita llegar a `default`.'),
        out(`const obj = { a: 1 };\nconsole.log(obj.b?.c);`, ['undefined', 'Error', 'null', '""'], '`obj.b` es `undefined` y `?.` corta ahí devolviendo `undefined` en lugar de lanzar un error.'),
        typ('Usa el operador que da un valor por defecto solo si el nombre es null o undefined', `const nombre = usuario.nombre ___ "Anónimo";`, '??', '`??` respeta valores como "" o 0 y solo sustituye `null` y `undefined`.'),
        out(`const nota = 7.5;\nlet calificacion;\nif (nota >= 9) calificacion = "Sobresaliente";\nelse if (nota >= 7) calificacion = "Notable";\nelse if (nota >= 5) calificacion = "Aprobado";\nelse calificacion = "Suspenso";\nconst extra = nota > 7 ? "+" : "";\nconsole.log(calificacion + extra);`, ['Notable+', 'Notable', 'Sobresaliente+', 'Aprobado+'], '7.5 no llega a 9 pero sí a 7, así que es "Notable"; además es mayor que 7 y el ternario añade "+".'),
      ],
    },
    // Día 5
    {
      id: 'js-arrays',
      t: 'Arrays',
      d: 'Crear, leer, modificar, buscar y ordenar listas de valores.',
      guide: [
        { h: 'Crear y acceder', p: [
          'Un array es una lista ordenada de valores entre corchetes: `const notas = [7, 9, 4]`. Puede mezclar tipos, aunque lo normal es que todos sean del mismo.',
          'Los índices empiezan en 0: el primer elemento es `notas[0]` y el último `notas[notas.length - 1]` o, más corto, `notas.at(-1)`. Leer un índice que no existe da `undefined`, no un error.' ],
          code: `const frutas = ["pera", "uva", "kiwi"];\nconsole.log(frutas[0]);       // pera\nconsole.log(frutas.length);   // 3\nconsole.log(frutas.at(-1));   // kiwi\nconsole.log(frutas[10]);      // undefined` },
        { h: 'Añadir y quitar elementos', p: [
          '`push` añade al final y `pop` quita el último. `unshift` añade al principio y `shift` quita el primero.',
          '`splice(inicio, cuántos, ...nuevos)` borra o inserta en cualquier posición. Todos estos métodos modifican el array original.' ],
          code: `const tareas = ["comprar", "estudiar"];\ntareas.push("correr");      // ["comprar", "estudiar", "correr"]\ntareas.unshift("despertar"); // ["despertar", "comprar", "estudiar", "correr"]\ntareas.pop();               // quita "correr"\ntareas.splice(1, 1);        // quita "comprar"\nconsole.log(tareas);        // ["despertar", "estudiar"]` },
        { h: 'Buscar, copiar y unir', p: [
          '`indexOf` devuelve la posición de un valor (o -1 si no está) e `includes` devuelve true o false. `slice(inicio, fin)` copia un trozo sin incluir el fin.',
          '`join(separador)` une los elementos en un texto y `concat` (o el spread `[...a, ...b]`) junta arrays. Estos métodos no modifican el original.' ],
          code: `const nums = [10, 20, 30, 40];\nconsole.log(nums.indexOf(30));    // 2\nconsole.log(nums.includes(50));   // false\nconsole.log(nums.slice(1, 3));    // [20, 30]\nconsole.log(nums.join(" | "));    // 10 | 20 | 30 | 40` },
        { h: 'Ordenar y las referencias', p: [
          '`sort()` sin argumentos ordena como texto: `[3, 1, 10].sort()` da `[1, 10, 3]`. Para números pasa una función: `sort((a, b) => a - b)`.',
          'Un array guardado en `const` no se puede reasignar, pero sí cambiar por dentro. Y al hacer `const b = a` no copias: ambas variables apuntan al mismo array. Para copiar usa `[...a]`.' ],
          code: `const precios = [30, 5, 120];\nprecios.sort((a, b) => a - b);\nconsole.log(precios);  // [5, 30, 120]\n\nconst a = [1, 2];\nconst b = a;       // misma lista\nconst c = [...a];  // copia\nb.push(3);\nconsole.log(a, c); // [1, 2, 3] [1, 2]` },
        { h: 'Ejemplo real: la lista de la compra', real: true, p: [
          'Una lista de la compra es un array que crece y encoge. Antes de añadir comprobamos que no esté repetido, y quitamos lo que ya compramos.' ],
          code: `const compra = ["leche", "pan"];\ncompra.push("huevos");\nif (!compra.includes("café")) compra.push("café");\ncompra.splice(compra.indexOf("pan"), 1);  // ya compramos el pan\nconsole.log(compra.length, compra.join(", "));  // 3 leche, huevos, café` },
      ],
      x: [
        out(`const frutas = ["pera", "uva"];\nfrutas.push("kiwi");\nconsole.log(frutas.length);`, ['3', '2', 'kiwi', 'Error'], '`push` añade al final y el tamaño pasa a 3.'),
        ord('Añade el 4 al final del array nums', ['nums', '.', 'push', '(', '4', ')'], ['append', 'add'], 'Los arrays de JavaScript usan `push`. `append` es de Python.'),
        fill(`const notas = [7, 9, 4];\nconst ultima = notas[notas.___ - 1];`, ['length', 'size', 'count', 'length()'], '`length` es una propiedad, no un método: va sin paréntesis. El último índice es `length - 1`.'),
        out(`const a = [1, 2, 3];\nconsole.log(a.indexOf(2), a.includes(5));`, ['1 false', '2 false', '1 true', '-1 false'], 'El 2 está en el índice 1 y el 5 no está.'),
        out(`const a = [1, 2, 3, 4, 5];\nconsole.log(a.slice(1, 3));`, ['[2, 3]', '[1, 2, 3]', '[2, 3, 4]', '[1, 2]'], '`slice(inicio, fin)` incluye el inicio pero no el fin, y no modifica el original.'),
        out(`console.log([3, 1, 10].sort());`, ['[1, 10, 3]', '[1, 3, 10]', '[10, 3, 1]', '[3, 1, 10]'], 'Sin función de comparación, `sort` ordena como texto y "10" va antes que "3". Usa `sort((a, b) => a - b)` para números.'),
        out(`const a = [1, 2, 3];\nconst b = a;\nb.pop();\nconsole.log(a);`, ['[1, 2]', '[1, 2, 3]', '[3]', 'Error'], '`b` no es una copia: apunta al mismo array que `a`.'),
        out(`const cola = ["Ana", "Leo", "Eva"];\ncola.push("Sol");\nconst atendido = cola.shift();\ncola.splice(1, 1, "Iker");\nconsole.log(atendido, cola);`, ['Ana ["Leo", "Iker", "Sol"]', 'Sol ["Ana", "Iker", "Eva"]', 'Ana ["Leo", "Iker", "Eva", "Sol"]', 'Ana ["Iker", "Eva", "Sol"]'], '`shift` saca a "Ana" del principio; queda ["Leo", "Eva", "Sol"] y `splice(1, 1, "Iker")` cambia "Eva" por "Iker".'),
      ],
    },
    // Día 6
    {
      id: 'js-loops',
      t: 'Bucles',
      d: 'for, while, do...while, for...of, for...in, break y continue.',
      guide: [
        { h: 'El bucle for', p: [
          '`for (inicio; condición; paso)` repite un bloque un número conocido de veces. Lo típico es contar con `let i = 0` mientras `i < n`, sumando 1 en cada vuelta.',
          'Error típico: usar `i <= array.length`. El último índice es `length - 1`, así que la última vuelta leería `undefined`.' ],
          code: `for (let i = 0; i < 3; i++) {\n  console.log("Vuelta", i);\n}\n// Vuelta 0\n// Vuelta 1\n// Vuelta 2` },
        { h: 'while y do...while', p: [
          '`while` repite mientras la condición sea verdadera; úsalo cuando no sabes cuántas vueltas habrá. Asegúrate de que algo cambie dentro o tendrás un bucle infinito.',
          '`do...while` comprueba la condición al final, así que el bloque se ejecuta al menos una vez.' ],
          code: `let saldo = 100;\nlet meses = 0;\nwhile (saldo > 0) {\n  saldo -= 30;\n  meses++;\n}\nconsole.log(meses);  // 4` },
        { h: 'for...of y for...in', p: [
          '`for...of` recorre los valores de cualquier iterable: arrays, textos, Sets o Maps. Es la forma más clara de recorrer un array.',
          '`for...in` recorre las claves de un objeto. Con un array te daría los índices como texto ("0", "1"...), así que no lo uses para arrays.' ],
          code: `for (const letra of "sol") console.log(letra);  // s, o, l (una por línea)\n\nconst edades = { Ana: 30, Leo: 8 };\nfor (const nombre in edades) {\n  console.log(nombre, edades[nombre]);\n}\n// Ana 30\n// Leo 8` },
        { h: 'break y continue', p: [
          '`break` sale del bucle por completo: útil cuando ya encontraste lo que buscabas. `continue` salta el resto de la vuelta actual y pasa a la siguiente.',
          'Úsalos con moderación: un bucle con muchos `break` y `continue` cuesta seguirlo. A menudo un método de array como `find` o `filter` (día 9) lo expresa mejor.' ],
          code: `const notas = [7, 3, 9, 4];\nfor (const n of notas) {\n  if (n < 5) continue;   // salta los suspensos\n  console.log("Aprobado:", n);\n}\n// Aprobado: 7\n// Aprobado: 9` },
        { h: 'Ejemplo real: total de un ticket y el producto más caro', real: true, p: [
          'Recorrer una lista acumulando resultados es el uso más común de un bucle: sumar importes, buscar máximos, contar casos.' ],
          code: `const precios = [3.5, 12, 7.25, 1.99];\nlet total = 0;\nlet masCaro = 0;\nfor (const p of precios) {\n  total += p;\n  if (p > masCaro) masCaro = p;\n}\nconsole.log(total.toFixed(2), masCaro);  // 24.74 12` },
      ],
      x: [
        out(`for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`, ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', '3'], '`i` empieza en 0 y el bucle para cuando llega a 3, sin ejecutar esa vuelta.'),
        fill(`for (const fruta ___ ["pera", "uva"]) {\n  console.log(fruta);\n}`, ['of', 'in', 'from', 'at'], '`for...of` recorre los valores del array.'),
        out(`let i = 0;\nwhile (i < 3) i++;\nconsole.log(i);`, ['3', '2', '4', '0'], 'El bucle termina cuando `i` vale 3, y ese es el valor que se imprime.'),
        typ('Sal del bucle en cuanto encuentres el número buscado', `for (const n of numeros) {\n  if (n === buscado) ___;\n}`, ['break', 'break;'], '`break` termina el bucle inmediatamente.'),
        out(`for (const i in ["a", "b"]) {\n  console.log(i);\n}`, ['0\n1', 'a\nb', '["a", "b"]', 'undefined'], '`for...in` recorre las claves (los índices); `for...of` recorre los valores.'),
        out(`let s = "";\nfor (const c of "abc") {\n  s = c + s;\n}\nconsole.log(s);`, ['cba', 'abc', 'c', 'bca'], 'Cada letra se pone delante de lo acumulado, así que el texto queda invertido.'),
        out(`let s = 0;\nfor (let i = 1; i <= 10; i++) {\n  if (i % 2) continue;\n  s += i;\n}\nconsole.log(s);`, ['30', '25', '55', '10'], '`i % 2` es 1 (truthy) en los impares, que se saltan: 2 + 4 + 6 + 8 + 10 = 30.'),
        out(`const notas = [8, 3, 10, 6, 2];\nlet aprobados = 0;\nlet suma = 0;\nfor (const n of notas) {\n  if (n < 5) continue;\n  aprobados++;\n  suma += n;\n}\nconsole.log(aprobados, suma / aprobados);`, ['3 8', '5 5.8', '3 4.8', '2 9'], 'Se saltan el 3 y el 2. Quedan 8, 10 y 6: tres aprobados que suman 24, y 24 / 3 = 8.'),
      ],
    },
    // Día 7
    {
      id: 'js-functions',
      t: 'Funciones',
      d: 'Declaraciones, funciones flecha, parámetros, return, ámbito y hoisting.',
      guide: [
        { h: 'Declarar y llamar funciones', p: [
          'Una función es un bloque de código con nombre que puedes reutilizar. Se declara con `function nombre(parámetros) { ... }` y se llama con `nombre(argumentos)`.',
          '`return` devuelve un valor y termina la función. Si no hay `return`, la función devuelve `undefined`: es un error muy común olvidarlo.' ],
          code: `function area(ancho, alto) {\n  return ancho * alto;\n}\nconsole.log(area(3, 4));  // 12\n\nfunction saludar(nombre) {\n  console.log("Hola " + nombre);  // no devuelve nada\n}\nconsole.log(saludar("Ana"));  // Hola Ana, y luego undefined` },
        { h: 'Parámetros por defecto y rest', p: [
          'Un parámetro puede tener un valor por defecto que se usa si no pasas ese argumento: `function f(x = 1)`.',
          '`...resto` reúne todos los argumentos sobrantes en un array. Así una función acepta cualquier cantidad de valores.' ],
          code: 'function saludar(nombre = "amigo") {\n  return `Hola, ${nombre}`;\n}\nconsole.log(saludar());       // Hola, amigo\n\nfunction sumar(...nums) {\n  let total = 0;\n  for (const n of nums) total += n;\n  return total;\n}\nconsole.log(sumar(1, 2, 3));  // 6' },
        { h: 'Funciones flecha', p: [
          'Las funciones flecha son una forma corta de escribir funciones: `const doble = (n) => n * 2`. Si el cuerpo es una sola expresión, el `return` es implícito.',
          'Con llaves necesitas `return` explícito: `(n) => { return n * 2; }`. Son perfectas para funciones pequeñas que se pasan a otras (lo verás en el día 9).' ],
          code: `const doble = (n) => n * 2;\nconst saludo = () => "¡Hola!";\nconst max = (a, b) => {\n  if (a > b) return a;\n  return b;\n};\nconsole.log(doble(5), saludo(), max(3, 8));  // 10 ¡Hola! 8` },
        { h: 'Ámbito y hoisting', p: [
          'Las variables declaradas dentro de una función (o de un bloque `{ }` con `let`/`const`) solo existen ahí dentro. Una variable interna con el mismo nombre que una externa la "tapa" sin modificarla.',
          'Las declaraciones `function` se elevan (hoisting): puedes llamarlas antes de la línea donde se escriben. Las funciones guardadas en `const` no: llamarlas antes lanza `ReferenceError`.' ],
          code: `console.log(cuadrado(4));  // 16, funciona por el hoisting\nfunction cuadrado(n) {\n  return n * n;\n}\n\nlet x = 1;\nfunction cambiar() {\n  let x = 2;   // otra variable, solo existe aquí\n  return x;\n}\nconsole.log(cambiar(), x);  // 2 1` },
        { h: 'Ejemplo real: precio final con descuento e IVA', real: true, p: [
          'Una tienda necesita calcular el precio final en muchos sitios: carrito, factura, correo de confirmación. Una función evita repetir la fórmula y equivocarse.',
          'Redondear con `Math.round(x * 100) / 100` deja el resultado con dos decimales como número.' ],
          code: `function precioFinal(base, descuento = 0, iva = 0.21) {\n  const conDescuento = base * (1 - descuento);\n  return Math.round(conDescuento * (1 + iva) * 100) / 100;\n}\nconsole.log(precioFinal(100));       // 121\nconsole.log(precioFinal(100, 0.2));  // 96.8\nconsole.log(precioFinal(50, 0, 0.1)); // 55` },
      ],
      x: [
        fill(`const doble = (n) ___ n * 2;`, ['=>', '->', '=', ':'], 'Las funciones flecha usan `=>`. Con una sola expresión, el `return` es implícito.'),
        out(`function saludar(n = "amigo") {\n  return "Hola " + n;\n}\nconsole.log(saludar());`, ['Hola amigo', 'Hola undefined', 'Hola', 'Error'], 'Si no pasas el argumento, se usa el valor por defecto.'),
        typ('Haz que la función devuelva el área del círculo', `function area(r) {\n  ___ Math.PI * r * r;\n}`, 'return', 'Sin `return`, la función calcularía el valor pero devolvería `undefined`.'),
        out(`const f = function (x) {\n  return x * x;\n};\nconsole.log(f(4));`, ['16', '8', 'x * x', 'undefined'], 'Es una expresión de función guardada en una variable: 4 * 4 = 16.'),
        out(`console.log(f());\n\nfunction f() {\n  return "listo";\n}`, ['listo', 'undefined', 'Error', 'f'], 'Las declaraciones `function` se elevan: se pueden usar antes de escribirse.'),
        out(`let x = 1;\nfunction cambiar() {\n  let x = 2;\n  return x;\n}\nconsole.log(cambiar(), x);`, ['2 1', '2 2', '1 1', '1 2'], 'El `x` de dentro es otra variable local; el `x` de fuera sigue valiendo 1.'),
        out(`function sumar(...n) {\n  let t = 0;\n  for (const v of n) t += v;\n  return t;\n}\nconsole.log(sumar(1, 2, 3), sumar());`, ['6 0', '6 undefined', '[1, 2, 3] 0', '123 0'], '`...n` reúne los argumentos en un array. Sin argumentos el array está vacío y el total se queda en 0.'),
        out(`const descuento = (precio, pct = 10) => precio - precio * pct / 100;\nfunction total(...precios) {\n  let t = 0;\n  for (const p of precios) t += descuento(p);\n  return t;\n}\nconsole.log(total(100, 50), descuento(200, 50));`, ['135 100', '150 100', '135 190', '15 100'], 'Con el 10 % por defecto, 100 queda en 90 y 50 en 45: total 135. Con 50 %, 200 queda en 100.'),
      ],
    },
    // Día 8
    {
      id: 'js-objects',
      t: 'Objetos',
      d: 'Propiedades, métodos, this, recorrer objetos y copiarlos.',
      guide: [
        { h: 'Crear objetos y leer propiedades', p: [
          'Un objeto agrupa datos relacionados en pares clave-valor: `const user = { nombre: "Ana", edad: 30 }`. Es la estructura más usada en JavaScript.',
          'Lees una propiedad con punto (`user.nombre`) o con corchetes (`user["nombre"]`). Los corchetes son necesarios cuando la clave está en una variable o tiene espacios.' ],
          code: `const user = { nombre: "Ana", edad: 30, "ciudad natal": "Quito" };\nconsole.log(user.nombre);           // Ana\nconsole.log(user["ciudad natal"]);  // Quito\n\nconst campo = "edad";\nconsole.log(user[campo]);           // 30\nconsole.log(user.email);            // undefined` },
        { h: 'Añadir, cambiar y borrar', p: [
          'Asignar a una propiedad que no existe la crea; asignar a una que existe la cambia. `delete obj.clave` la elimina.',
          'Para saber si una propiedad existe usa `"clave" in obj`. Comprobar `obj.clave` no basta: la propiedad podría existir con valor `0` o `""`.' ],
          code: `const coche = { marca: "Seat" };\ncoche.color = "rojo";   // añade\ncoche.marca = "Fiat";   // cambia\ndelete coche.color;     // borra\nconsole.log(coche);     // { marca: "Fiat" }\nconsole.log("color" in coche);  // false` },
        { h: 'Métodos y this', p: [
          'Una función guardada en un objeto se llama método. Dentro de un método, `this` es el objeto que lo llama, y así accede a sus propias propiedades.',
          'Cuidado: las funciones flecha no tienen su propio `this`. Para métodos usa la forma corta `nombre() { ... }`.' ],
          code: 'const cuenta = {\n  titular: "Leo",\n  saldo: 50,\n  ingresar(cantidad) {\n    this.saldo += cantidad;\n    return `${this.titular}: ${this.saldo} €`;\n  },\n};\nconsole.log(cuenta.ingresar(20));  // Leo: 70 €' },
        { h: 'Recorrer y copiar objetos', p: [
          '`Object.keys(obj)` devuelve las claves, `Object.values(obj)` los valores y `Object.entries(obj)` pares `[clave, valor]`, ideales para `for...of`.',
          'Los objetos se asignan por referencia, igual que los arrays. Copia con `{ ...obj }` (copia superficial) o `structuredClone(obj)` (copia profunda, incluidos los objetos anidados).' ],
          code: `const precios = { pan: 1.2, leche: 0.9 };\nfor (const [producto, precio] of Object.entries(precios)) {\n  console.log(producto, precio);\n}\n// pan 1.2\n// leche 0.9\n\nconst copia = { ...precios };\ncopia.pan = 2;\nconsole.log(precios.pan);  // 1.2, el original no cambia` },
        { h: 'Ejemplo real: total de un pedido', real: true, p: [
          'En una tienda, un pedido es un objeto con cantidades por producto y una tabla de precios. Recorriendo las entradas calculamos el importe.' ],
          code: `const pedido = {\n  cliente: "Ana",\n  productos: { camiseta: 2, gorra: 1 },\n};\nconst precios = { camiseta: 15, gorra: 9 };\nlet total = 0;\nfor (const [producto, cantidad] of Object.entries(pedido.productos)) {\n  total += cantidad * precios[producto];\n}\nconsole.log(pedido.cliente, "paga", total);  // Ana paga 39` },
      ],
      x: [
        fill(`const user = { nombre: "Sol" };\nconsole.log(user___);`, ['.nombre', '->nombre', '::nombre', '(nombre)'], 'Se accede con punto o con corchetes: `user["nombre"]`.'),
        out(`const p = { nombre: "Ana" };\np.edad = 30;\nconsole.log(Object.keys(p));`, ['["nombre", "edad"]', '["Ana", 30]', '2', '{ nombre, edad }'], '`Object.keys` devuelve los nombres de las propiedades en orden de creación.'),
        mc('¿Qué devuelve `Object.entries({ a: 1, b: 2 })`?', ['[["a", 1], ["b", 2]]', '["a", "b"]', '[1, 2]', '{ a: 1, b: 2 }'], 'Devuelve un array de pares `[clave, valor]`, perfecto para recorrer con `for...of`.'),
        out(`const p = { a: 1 };\nconst q = p;\nq.a = 5;\nconsole.log(p.a);`, ['5', '1', 'undefined', 'Error'], 'Los objetos se asignan por referencia: `p` y `q` son el mismo objeto.'),
        out(`const o = { a: 1 };\nconsole.log("a" in o, o.b);`, ['true undefined', 'true null', 'false undefined', 'Error'], '`in` comprueba si existe la propiedad; leer una que no existe da `undefined`.'),
        out(`const coche = {\n  marca: "Seat",\n  info() { return "Marca: " + this.marca; }\n};\nconsole.log(coche.info());`, ['Marca: Seat', 'Marca: undefined', 'Marca: this.marca', 'Error'], 'Dentro de un método, `this` es el objeto que lo llama.'),
        out(`const clave = "color";\nconst o = { [clave]: "rojo" };\nconsole.log(o.color, o.clave);`, ['rojo undefined', 'undefined rojo', 'rojo rojo', 'Error'], '`[clave]` usa el valor de la variable ("color") como nombre de la propiedad; no existe ninguna propiedad llamada "clave".'),
        out(`const inventario = { manzanas: 4, peras: 0, uvas: 12 };\ninventario.kiwis = 3;\ndelete inventario.peras;\nlet total = 0;\nfor (const k in inventario) total += inventario[k];\nconsole.log(Object.keys(inventario).length, total);`, ['3 19', '4 19', '3 16', '4 7'], 'Tras añadir kiwis y borrar peras quedan 3 claves: manzanas, uvas y kiwis. 4 + 12 + 3 = 19.'),
      ],
    },
    // Día 9
    {
      id: 'js-higher-order',
      t: 'Funciones de orden superior',
      d: 'Callbacks, forEach, map, filter, reduce, find, some, every y sort.',
      guide: [
        { h: 'Funciones como valores', p: [
          'En JavaScript las funciones son valores: se guardan en variables, se pasan como argumento y se devuelven. Una función de orden superior es la que recibe o devuelve otra función.',
          'La función que pasas como argumento se llama callback. Fíjate en que se pasa sin paréntesis: `aplicar(doble)` pasa la función; `aplicar(doble())` pasaría su resultado.' ],
          code: `function aplicar(fn, valor) {\n  return fn(valor);\n}\nconst doble = (n) => n * 2;\nconsole.log(aplicar(doble, 5));         // 10\nconsole.log(aplicar((n) => n + 1, 5));  // 6` },
        { h: 'forEach y map', p: [
          '`forEach` ejecuta el callback con cada elemento y no devuelve nada: úsalo para efectos como mostrar en pantalla.',
          '`map` crea un array nuevo del mismo tamaño con cada elemento transformado. El original no cambia. Error típico: olvidar el `return` cuando el callback lleva llaves.' ],
          code: `const precios = [10, 20, 30];\nprecios.forEach((p, i) => console.log(i, p));\n// 0 10\n// 1 20\n// 2 30\nconst conIva = precios.map((p) => p * 1.5);\nconsole.log(conIva);  // [15, 30, 45]` },
        { h: 'filter, find y findIndex', p: [
          '`filter` devuelve un array nuevo con los elementos que cumplen la condición (el callback devuelve true).',
          '`find` devuelve el primer elemento que cumple, o `undefined`; `findIndex` devuelve su posición, o -1.' ],
          code: `const edades = [12, 25, 17, 40];\nconsole.log(edades.filter((e) => e >= 18));    // [25, 40]\nconsole.log(edades.find((e) => e >= 18));      // 25\nconsole.log(edades.findIndex((e) => e > 50));  // -1` },
        { h: 'reduce, some, every y sort', p: [
          '`reduce((acumulado, elemento) => ..., inicial)` combina todo el array en un solo valor: una suma, un máximo, un objeto de recuento. Pon siempre el valor inicial.',
          '`some` dice si alguno cumple y `every` si todos cumplen. `sort` acepta un callback que compara dos elementos: negativo si `a` va antes, positivo si va después.',
          'Estos métodos se encadenan: cada uno devuelve un array sobre el que se aplica el siguiente.' ],
          code: `const nums = [4, 8, 15];\nconsole.log(nums.reduce((acc, n) => acc + n, 0));  // 27\nconsole.log(nums.some((n) => n > 10));             // true\nconsole.log(nums.every((n) => n % 2 === 0));       // false\nconsole.log([...nums].sort((a, b) => b - a));      // [15, 8, 4]` },
        { h: 'Ejemplo real: informe de pedidos', real: true, p: [
          'Con `filter`, `map` y `reduce` puedes resumir datos como en una hoja de cálculo: cuánto se ha cobrado y quién debe dinero.' ],
          code: `const pedidos = [\n  { cliente: "Ana", total: 120, pagado: true },\n  { cliente: "Leo", total: 45, pagado: false },\n  { cliente: "Eva", total: 80, pagado: true },\n];\nconst ingresos = pedidos\n  .filter((p) => p.pagado)\n  .reduce((suma, p) => suma + p.total, 0);\nconst pendientes = pedidos.filter((p) => !p.pagado).map((p) => p.cliente);\nconsole.log(ingresos, pendientes);  // 200 ["Leo"]` },
      ],
      x: [
        mc('¿Qué es un callback?', ['Una función que se pasa como argumento a otra', 'Una función que se llama a sí misma', 'Un error de una función', 'Una variable global'], 'La función que la recibe decide cuándo llamarla, como hacen `map` o `addEventListener`.'),
        out(`const nums = [1, 2, 3];\nconsole.log(nums.map((n) => n * 10));`, ['[10, 20, 30]', '[1, 2, 3]', '60', '[10]'], '`map` crea un array nuevo con cada elemento transformado.'),
        out(`console.log([5, 12, 8, 20].filter((n) => n > 10));`, ['[12, 20]', '[5, 8]', '2', '[true, false]'], '`filter` se queda con los elementos para los que el callback devuelve true.'),
        fill(`const productos = [{ precio: 5 }, { precio: 9 }];\nconst precios = productos.___((p) => p.precio);  // [5, 9]`, ['map', 'filter', 'forEach', 'reduce'], '`map` transforma cada objeto en su precio. `forEach` no devuelve nada.'),
        out(`const total = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);\nconsole.log(total);`, ['10', '24', '[1, 2, 3, 4]', '0'], '`reduce` acumula empezando en 0: 0 + 1 + 2 + 3 + 4 = 10.'),
        out(`const nums = [1, 2, 3, 4];\nconsole.log(nums.find((n) => n > 2), nums.some((n) => n > 3));`, ['3 true', '[3, 4] true', '3 false', '4 true'], '`find` devuelve el primer elemento que cumple; `some` indica si alguno cumple.'),
        out(`const personas = [{ n: "Ana", e: 30 }, { n: "Leo", e: 8 }, { n: "Eva", e: 45 }];\nconst orden = personas.sort((a, b) => b.e - a.e).map((p) => p.n);\nconsole.log(orden.join(", "));`, ['Eva, Ana, Leo', 'Leo, Ana, Eva', 'Ana, Leo, Eva', 'Ana, Eva, Leo'], '`b.e - a.e` ordena de mayor a menor edad: 45, 30 y 8. Luego `map` se queda con los nombres.'),
        out(`const palabras = ["sol", "mar", "luna", "sol", "mar", "sol"];\nconst cuenta = palabras.reduce((acc, p) => {\n  acc[p] = (acc[p] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(cuenta.sol, Object.keys(cuenta).length, palabras.filter((p) => p.length > 3).length);`, ['3 3 1', '3 6 1', '1 3 1', '3 3 4'], '"sol" aparece 3 veces, hay 3 palabras distintas y solo "luna" tiene más de 3 letras.'),
      ],
    },
    // Día 10
    {
      id: 'js-sets-maps',
      t: 'Sets y Maps',
      d: 'Valores únicos con Set y diccionarios con claves de cualquier tipo con Map.',
      guide: [
        { h: 'Set: valores únicos', p: [
          'Un `Set` es una colección donde cada valor aparece una sola vez. Si añades uno repetido, simplemente se ignora.',
          'Métodos: `add`, `has`, `delete` y `clear`; `size` (sin paréntesis) da cuántos elementos tiene. Comprobar con `has` es mucho más rápido que `includes` en listas grandes.' ],
          code: `const etiquetas = new Set(["js", "web"]);\netiquetas.add("js");      // repetido: no cambia nada\netiquetas.add("node");\nconsole.log(etiquetas.size);       // 3\nconsole.log(etiquetas.has("web")); // true\netiquetas.delete("web");\nconsole.log([...etiquetas]);       // ["js", "node"]` },
        { h: 'Operaciones con conjuntos', p: [
          'El truco más usado: `[...new Set(array)]` elimina los duplicados de un array conservando el orden de la primera aparición.',
          'Unión: `new Set([...a, ...b])`. Intersección: `[...a].filter((x) => b.has(x))`. Diferencia: `[...a].filter((x) => !b.has(x))`.' ],
          code: `const correos = ["ana@x.com", "leo@x.com", "ana@x.com"];\nconst unicos = [...new Set(correos)];\nconsole.log(unicos);  // ["ana@x.com", "leo@x.com"]` },
        { h: 'Map: claves de cualquier tipo', p: [
          'Un `Map` asocia claves con valores, como un objeto, pero las claves pueden ser de cualquier tipo (números, objetos...) y conserva el orden de inserción.',
          'Métodos: `set(clave, valor)`, `get(clave)`, `has`, `delete` y la propiedad `size`. `set` devuelve el propio Map, así que se puede encadenar.' ],
          code: `const stock = new Map();\nstock.set("pan", 4).set("leche", 0);\nconsole.log(stock.get("pan"));    // 4\nconsole.log(stock.get("arroz"));  // undefined\nconsole.log(stock.size);          // 2` },
        { h: 'Recorrer y elegir entre Map y objeto', p: [
          '`for (const [clave, valor] of mapa)` recorre un Map. También tiene `keys()`, `values()` y `entries()`. `new Map(Object.entries(obj))` y `Object.fromEntries(mapa)` convierten entre ambos.',
          'Usa un objeto para datos con forma fija (un usuario con nombre y edad). Usa un Map cuando las claves llegan en tiempo de ejecución, se añaden y quitan a menudo o no son textos.' ],
          code: `const notas = new Map([["Ana", 9], ["Leo", 6]]);\nfor (const [alumno, nota] of notas) {\n  console.log(alumno, nota);\n}\n// Ana 9\n// Leo 6\nconsole.log(Object.fromEntries(notas));  // { Ana: 9, Leo: 6 }` },
        { h: 'Ejemplo real: contar votos', real: true, p: [
          'En una encuesta llegan votos repetidos. Un Map cuenta cuántos tiene cada opción y un Set dice cuántas opciones distintas hubo.' ],
          code: `const votos = ["Ana", "Leo", "Ana", "Eva", "Ana", "Leo", "Sol"];\nconst recuento = new Map();\nfor (const v of votos) {\n  recuento.set(v, (recuento.get(v) || 0) + 1);\n}\nconsole.log(recuento.get("Ana"), recuento.size);  // 3 4\nconsole.log(new Set(votos).size);                 // 4` },
      ],
      x: [
        out(`const s = new Set([1, 2, 2, 3]);\nconsole.log(s.size);`, ['3', '4', '2', 'undefined'], 'El Set ignora el 2 repetido.'),
        fill(`const s = new Set(["js"]);\nconsole.log(s.___("js"));  // true`, ['has', 'includes', 'contains', 'get'], '`has` comprueba si un valor está en el Set. `includes` es de los arrays.'),
        mc('¿Qué ventaja tiene un Map frente a un objeto normal?', ['Admite claves de cualquier tipo y mantiene el orden de inserción', 'Es más corto de escribir', 'Se convierte solo en JSON', 'No tiene ninguna'], 'Un objeto solo admite claves de texto o símbolos.'),
        out(`console.log([...new Set([3, 1, 3, 2, 1])]);`, ['[3, 1, 2]', '[1, 2, 3]', '[3, 1, 3, 2, 1]', '3'], 'El Set respeta el orden de la primera aparición y elimina los repetidos; no ordena.'),
        out(`const m = new Map();\nm.set("a", 1).set("b", 2);\nconsole.log(m.get("b"), m.get("c"));`, ['2 undefined', '2 null', '1 undefined', 'Error'], '`set` devuelve el propio Map, así que se encadena. Una clave que no existe da `undefined`.'),
        out(`const m = new Map([["x", 1], ["y", 2]]);\nconsole.log([...m.keys()]);`, ['["x", "y"]', '[1, 2]', '[["x", 1], ["y", 2]]', '2'], '`keys()` devuelve las claves en orden de inserción.'),
        out(`const s = new Set([1, 2, 3]);\ns.add(2);\ns.delete(1);\nconsole.log(s.size, s.has(1));`, ['2 false', '3 false', '3 true', '2 true'], 'Añadir el 2 no cambia nada porque ya estaba; al borrar el 1 quedan 2 elementos.'),
        out(`const a = new Set(["js", "py", "go"]);\nconst b = new Set(["py", "rs", "js"]);\nconst comunes = [...a].filter((x) => b.has(x));\nconst todos = new Set([...a, ...b]);\nconsole.log(comunes, todos.size);`, ['["js", "py"] 4', '["py", "js"] 4', '["js", "py"] 6', '["go", "rs"] 4'], 'La intersección sigue el orden de `a`: "js" y "py". La unión sin repetidos tiene js, py, go y rs.'),
      ],
    },
    // Día 11
    {
      id: 'js-destructuring',
      t: 'Desestructuración y spread',
      d: 'Extraer valores de arrays y objetos, valores por defecto, spread y rest.',
      guide: [
        { h: 'Desestructurar arrays', p: [
          'La desestructuración saca valores de un array y los guarda en variables en una sola línea: `const [a, b] = lista`. Se asignan por posición.',
          'Puedes saltarte posiciones dejando un hueco entre comas. Y sirve para intercambiar dos variables sin una auxiliar: `[a, b] = [b, a]`.' ],
          code: `const colores = ["rojo", "verde", "azul"];\nconst [primero, , tercero] = colores;\nconsole.log(primero, tercero);  // rojo azul\n\nlet a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);  // 2 1` },
        { h: 'Desestructurar objetos', p: [
          'Con objetos se extrae por nombre de propiedad: `const { nombre, edad } = usuario`. El orden da igual.',
          'Puedes renombrar (`{ nombre: n }`), dar valores por defecto que se usan si la propiedad es `undefined` (`{ rol = "invitado" }`) y entrar en objetos anidados.' ],
          code: `const usuario = { nombre: "Ana", edad: 31, direccion: { ciudad: "Sevilla" } };\nconst { nombre: n, rol = "invitado", direccion: { ciudad } } = usuario;\nconsole.log(n, rol, ciudad);  // Ana invitado Sevilla` },
        { h: 'Spread: expandir', p: [
          'Los tres puntos `...` delante de un array u objeto lo expanden. Sirven para copiar, unir y pasar argumentos: `Math.max(...numeros)`.',
          'En objetos, si una propiedad se repite gana la última. Ojo: la copia es superficial; los objetos de dentro siguen siendo compartidos.' ],
          code: `const a = [1, 2];\nconst b = [3, 4];\nconsole.log([...a, ...b]);        // [1, 2, 3, 4]\nconsole.log(Math.max(...b));      // 4\n\nconst base = { tema: "claro", idioma: "es" };\nconst mio = { ...base, tema: "oscuro" };\nconsole.log(mio);  // { tema: "oscuro", idioma: "es" }` },
        { h: 'Rest: agrupar lo que sobra', p: [
          'Los mismos tres puntos en el lado izquierdo, o en los parámetros, hacen lo contrario: agrupan el resto en un array u objeto.',
          'Una función puede desestructurar su parámetro directamente. Es la forma habitual de recibir opciones con nombre y valores por defecto.' ],
          code: `const [cabeza, ...cola] = [10, 20, 30];\nconsole.log(cabeza, cola);  // 10 [20, 30]\n\nconst { id, ...datos } = { id: 7, nombre: "Leo", edad: 25 };\nconsole.log(datos);  // { nombre: "Leo", edad: 25 }\n\nfunction crearBoton({ texto, color = "azul" }) {\n  return texto + " (" + color + ")";\n}\nconsole.log(crearBoton({ texto: "Enviar" }));  // Enviar (azul)` },
        { h: 'Ejemplo real: preferencias de usuario', real: true, p: [
          'Una aplicación tiene ajustes por defecto y cada usuario guarda solo los que cambió. Con spread se combinan sin tocar los originales y con desestructuración se leen cómodamente.' ],
          code: `const porDefecto = { tema: "claro", idioma: "es", notificaciones: true };\nconst guardadas = { tema: "oscuro" };\n\nconst ajustes = { ...porDefecto, ...guardadas };\nconst { tema, idioma, ...resto } = ajustes;\n\nconsole.log(tema, idioma);  // oscuro es\nconsole.log(resto);         // { notificaciones: true }\nconsole.log(porDefecto.tema);  // claro: el original no cambia` },
      ],
      x: [
        out(`const [a, , c] = [10, 20, 30];\nconsole.log(a, c);`, ['10 30', '10 20', '20 30', 'undefined'], 'El hueco entre comas se salta la segunda posición.'),
        fill(`const lista = [1, 2, 3];\nconst copia = [___lista];`, ['...', '..', '*', '&'], 'El spread `...` expande los elementos dentro de un array nuevo.'),
        out(`const { x, y = 5 } = { x: 1 };\nconsole.log(x + y);`, ['6', '1', 'NaN', 'undefined'], '`y` no existe en el objeto, así que toma su valor por defecto: 1 + 5 = 6.'),
        out(`const base = { color: "rojo", talla: "M" };\nconst nuevo = { ...base, talla: "L" };\nconsole.log(nuevo.talla, base.talla);`, ['L M', 'L L', 'M M', 'M L'], 'En el objeto nuevo gana la última `talla`. El original no se modifica.'),
        typ('Intercambia los valores de a y b', `let a = 1, b = 2;\n[a, b] = [___];`, ['b, a', 'b,a'], 'El array de la derecha se crea con los valores actuales y luego se reparte en orden.'),
        mc('¿Cuál es la diferencia entre spread y rest?', ['Spread expande elementos; rest agrupa los que sobran en un array u objeto', 'Son lo mismo con distinto nombre', 'Spread solo funciona con objetos y rest con arrays', 'Rest copia en profundidad'], 'Se escriben igual (`...`). Lo que cambia es el lado: a la derecha expande, a la izquierda o en parámetros agrupa.'),
        out(`const [primera, ...resto] = "hola";\nconsole.log(primera, resto.length);`, ['h 3', 'h 4', 'hola 0', 'Error'], 'Los textos son iterables: `primera` es "h" y `resto` es ["o", "l", "a"].'),
        out(`const pedido = { id: 7, cliente: { nombre: "Ana", ciudad: "Lima" }, items: [3, 5, 2] };\nconst { cliente: { ciudad }, items: [primero, ...otros], ...resto } = pedido;\nconsole.log(ciudad, otros.length, Math.max(primero, ...otros), Object.keys(resto).join());`, ['Lima 2 5 id', 'Lima 3 5 id', 'Lima 2 5 id,cliente,items', 'Ana 2 5 id'], '`ciudad` sale del objeto anidado. `otros` es [5, 2]. El máximo de 3, 5 y 2 es 5. En `resto` solo queda `id`, porque `cliente` e `items` ya se extrajeron.'),
      ],
    },
    // Día 12
    {
      id: 'js-regex',
      t: 'Expresiones regulares',
      d: 'Literales /.../, clases de caracteres, test, match, replace y modificadores.',
      guide: [
        { h: 'Qué es una expresión regular', p: [
          'Una expresión regular describe un patrón de texto. Se escribe entre barras, `/patrón/modificadores`, o con `new RegExp("patrón")` cuando el patrón se construye a partir de una variable.',
          '`regex.test(texto)` devuelve `true` si el patrón aparece en el texto. Es la forma más rápida de validar.' ],
          code: `const tieneNumero = /\\d/;\nconsole.log(tieneNumero.test("clave1"));  // true\nconsole.log(tieneNumero.test("clave"));   // false` },
        { h: 'Clases de caracteres y cuantificadores', p: [
          '`\\d` es un dígito, `\\w` una letra, dígito o guion bajo, `\\s` un espacio en blanco y `.` cualquier carácter. `[aeiou]` acepta uno de la lista y `[^0-9]` cualquiera que no sea dígito.',
          'Los cuantificadores dicen cuántas veces: `+` una o más, `*` cero o más, `?` cero o una, `{3}` exactamente tres y `{2,4}` entre dos y cuatro.',
          '`^` marca el inicio del texto y `$` el final. Sin ellos, el patrón puede aparecer en cualquier parte.' ],
          code: `const cp = /^\\d{5}$/;          // exactamente 5 dígitos\nconsole.log(cp.test("41001"));   // true\nconsole.log(cp.test("4100"));    // false\nconsole.log(cp.test("410012"));  // false` },
        { h: 'Modificadores, match y grupos', p: [
          'Los modificadores van tras la última barra: `i` ignora mayúsculas, `g` busca todas las coincidencias y `m` hace que `^` y `$` funcionen por línea.',
          '`texto.match(/.../g)` devuelve un array con todas las coincidencias, o `null` si no hay ninguna. Los paréntesis crean grupos que se pueden recuperar por separado; con `(?<nombre>...)` tienen nombre.' ],
          code: `console.log("a1 b22 c333".match(/\\d+/g));  // ["1", "22", "333"]\n\nconst m = "2024-05-17".match(/(?<anio>\\d{4})-(?<mes>\\d{2})/);\nconsole.log(m.groups.anio, m.groups.mes);  // 2024 05` },
        { h: 'replace y split', p: [
          '`replace(regex, nuevo)` sustituye la primera coincidencia, o todas si la expresión lleva `g`. En el texto nuevo, `$1` es el primer grupo.',
          '`split` también acepta una expresión regular, útil cuando el separador varía.' ],
          code: `console.log("1-2-3".replace(/-/g, "+"));             // 1+2+3\nconsole.log("Ana Ruiz".replace(/(\\w+) (\\w+)/, "$2, $1"));   // Ruiz, Ana\nconsole.log("uno, dos,tres".split(/,\\s*/));         // ["uno", "dos", "tres"]` },
        { h: 'Ejemplo real: validar un formulario', real: true, p: [
          'Un formulario de registro comprueba el correo y el código postal antes de enviarlos, y limpia el teléfono que el usuario escribió con espacios y guiones.' ],
          code: `const reglas = {\n  correo: /^[\\w.-]+@[\\w-]+\\.[a-z]{2,}$/i,\n  cp: /^\\d{5}$/,\n};\n\nfunction validar(datos) {\n  const errores = [];\n  if (!reglas.correo.test(datos.correo)) errores.push("correo");\n  if (!reglas.cp.test(datos.cp)) errores.push("código postal");\n  return errores;\n}\n\nconsole.log(validar({ correo: "ana@mail.com", cp: "28001" }));  // []\nconsole.log(validar({ correo: "ana@mail", cp: "280" }));       // ["correo", "código postal"]\nconsole.log("600 12-34 56".replace(/\\D/g, ""));               // 600123456` },
      ],
      x: [
        out(`console.log(/^\\d{3}$/.test("123"), /^\\d{3}$/.test("1234"));`, ['true false', 'true true', 'false false', 'false true'], 'Con `^` y `$` el texto entero debe tener exactamente tres dígitos.'),
        fill(`const r = /hola/___;\nconsole.log(r.test("HOLA"));  // true`, ['i', 'g', 'm', 'u'], 'El modificador `i` ignora la diferencia entre mayúsculas y minúsculas.'),
        out(`console.log("a1b22c333".match(/\\d+/g));`, ['["1", "22", "333"]', '["1"]', '["1", "2", "2", "3", "3", "3"]', 'null'], '`\\d+` toma todos los dígitos seguidos que pueda, y `g` devuelve todas las coincidencias.'),
        out(`console.log("2024-05-01".replace(/-/g, "/"));`, ['2024/05/01', '2024/05-01', '2024-05-01', '/'], 'Con `g` se sustituyen todos los guiones, no solo el primero.'),
        mc('¿Qué representa `\\s` en una expresión regular?', ['Un espacio en blanco: espacio, tabulador o salto de línea', 'La letra s', 'Cualquier carácter', 'Un dígito'], 'Su opuesto es `\\S`: cualquier carácter que no sea espacio.'),
        typ('Haz que acepte una o más letras', `const soloLetras = /^[a-z]___$/i;`, '+', '`+` significa una o más veces. Con `*` también aceptaría el texto vacío.'),
        out(`console.log("uno, dos,tres".split(/,\\s*/));`, ['["uno", "dos", "tres"]', '["uno", " dos", "tres"]', '["uno, dos,tres"]'], 'El separador es una coma seguida de cero o más espacios, así que ningún trozo conserva espacios.'),
        out(`const texto = "Pedidos: A-12, B-7, A-30, C-5";\nconst codigos = texto.match(/A-\\d+/g);\nconst suma = codigos.map((c) => Number(c.slice(2))).reduce((a, b) => a + b, 0);\nconsole.log(codigos.length, suma, /c-5/i.test(texto));`, ['2 42 true', '2 42 false', '4 54 true', '3 42 true'], 'Solo "A-12" y "A-30" empiezan por A. `slice(2)` quita "A-": 12 + 30 = 42. Con `i`, "c-5" encuentra "C-5".'),
      ],
    },
    // Día 13
    {
      id: 'js-console',
      t: 'Métodos de console',
      d: 'log, error, warn, table, time, count, group y assert para depurar.',
      guide: [
        { h: 'Más allá de console.log', p: [
          '`console.log` acepta varios argumentos y los separa con un espacio. Los objetos se muestran de forma interactiva en el navegador.',
          '`console.info`, `console.warn` y `console.error` funcionan igual, pero el navegador los marca con colores e iconos y se pueden filtrar. `error` además escribe en la salida de errores.' ],
          code: `const usuario = { nombre: "Ana", puntos: 40 };\nconsole.log("Usuario:", usuario, "activo");\nconsole.warn("Quedan pocos intentos");\nconsole.error("No se pudo guardar");` },
        { h: 'console.table', p: [
          '`console.table` muestra un array de objetos como una tabla, con una fila por elemento y una columna por propiedad.',
          'Un segundo argumento elige las columnas: `console.table(datos, ["nombre"])`. Es ideal para revisar datos que llegan de una API.' ],
          code: `const alumnos = [\n  { nombre: "Ana", nota: 9 },\n  { nombre: "Leo", nota: 6 },\n];\nconsole.table(alumnos);\n// ┌─────────┬────────┬──────┐\n// │ (index) │ nombre │ nota │\n// │    0    │ "Ana"  │  9   │\n// │    1    │ "Leo"  │  6   │` },
        { h: 'Medir y contar', p: [
          '`console.time("etiqueta")` arranca un cronómetro y `console.timeEnd("etiqueta")` muestra cuánto tardó. Así sabes qué parte del código es lenta.',
          '`console.count("etiqueta")` muestra cuántas veces se ha llamado con esa etiqueta, y `console.countReset` pone el contador a cero.' ],
          code: `console.time("bucle");\nlet s = 0;\nfor (let i = 0; i < 1e6; i++) s += i;\nconsole.timeEnd("bucle");  // bucle: 3.2 ms (varía)\n\nconsole.count("clic");  // clic: 1\nconsole.count("clic");  // clic: 2` },
        { h: 'Agrupar y comprobar', p: [
          '`console.group("título")` sangra los mensajes siguientes hasta `console.groupEnd()`. Ayuda a leer la salida de procesos con varios pasos.',
          '`console.assert(condición, mensaje)` solo muestra el mensaje, como error, si la condición es falsa. No detiene el programa.' ],
          code: `console.group("Pedido 42");\nconsole.log("Cliente: Ana");\nconsole.log("Total: 30 €");\nconsole.groupEnd();\n\nconsole.assert(1 + 1 === 2, "no se muestra");\nconsole.assert([].length > 0, "La lista está vacía");  // Assertion failed: La lista está vacía` },
        { h: 'Ejemplo real: depurar un carrito', real: true, p: [
          'Un carrito calcula mal el total. Con unas pocas llamadas a console se ve el contenido, se comprueba cada paso y se mide el cálculo sin usar el depurador.' ],
          code: `const carrito = [\n  { producto: "Libro", precio: 15, unidades: 2 },\n  { producto: "Funda", precio: 8, unidades: 0 },\n];\n\nconsole.table(carrito);\nconsole.time("total");\nconst total = carrito.reduce((s, l) => {\n  console.assert(l.unidades > 0, "Línea sin unidades:", l.producto);\n  return s + l.precio * l.unidades;\n}, 0);\nconsole.timeEnd("total");\nconsole.log("Total:", total);  // Total: 30` },
      ],
      x: [
        mc('¿Qué método muestra un array de objetos en forma de tabla?', ['console.table', 'console.grid', 'console.list', 'console.dir'], 'Cada objeto es una fila y cada propiedad una columna.'),
        mc('Tras `console.count("clic")` dos veces y `console.count("otro")` una vez, ¿qué muestra la última llamada?', ['otro: 1', 'otro: 3', 'clic: 3', '3'], 'Cada etiqueta tiene su propio contador.'),
        fill(`console.___("carga");\ncargarDatos();\nconsole.timeEnd("carga");`, ['time', 'timer', 'start', 'clock'], '`console.time` y `console.timeEnd` deben usar la misma etiqueta.'),
        out(`console.assert(2 + 2 === 4, "fallo");\nconsole.log("fin");`, ['fin', 'Assertion failed: fallo\nfin', 'fallo\nfin', 'Error'], 'La condición es verdadera, así que `assert` no muestra nada.'),
        mc('¿En qué se diferencia `console.error` de `console.log`?', ['Escribe en la salida de errores y el navegador lo marca como error', 'Detiene el programa', 'Lanza una excepción', 'No hay ninguna diferencia'], 'Para lanzar un error de verdad se usa `throw`.'),
        typ('Cierra el grupo de mensajes', `console.group("Usuario");\nconsole.log("Ana");\nconsole.___();`, 'groupEnd', 'Cada `group` se cierra con su `groupEnd`.'),
        out(`const n = 5;\nconsole.log("Total:", n, "items");`, ['Total: 5 items', 'Total:5items', 'Total: n items', 'Total: 5, items'], 'Los argumentos se muestran separados por un espacio.'),
        out(`for (let i = 0; i < 3; i++) console.count("paso");\nconsole.countReset("paso");\nconsole.count("paso");\nconsole.assert(false, "revisar");`, ['paso: 1\npaso: 2\npaso: 3\npaso: 1\nAssertion failed: revisar', 'paso: 1\npaso: 2\npaso: 3\npaso: 4\nAssertion failed: revisar', 'paso: 1\npaso: 2\npaso: 3\npaso: 1', 'paso: 3\npaso: 1\nAssertion failed: revisar'], 'El bucle cuenta hasta 3, `countReset` reinicia el contador y la siguiente llamada vuelve a 1. `assert` con `false` muestra su mensaje.'),
      ],
    },
    // Día 14
    {
      id: 'js-errors',
      t: 'Manejo de errores',
      d: 'try, catch, finally, throw, tipos de error y errores propios.',
      guide: [
        { h: 'try y catch', p: [
          'Cuando algo falla, JavaScript lanza un error y, si nadie lo captura, el script se detiene. El código que puede fallar va dentro de `try`; si falla, se ejecuta `catch` con el error.',
          'El objeto de error tiene `name` (el tipo) y `message` (la descripción). Si no necesitas el error, puedes escribir solo `catch { ... }`.' ],
          code: `try {\n  const datos = JSON.parse("{mal json}");\n} catch (error) {\n  console.log(error.name);     // SyntaxError\n  console.log("No se pudo leer el archivo");\n}\nconsole.log("El programa sigue");` },
        { h: 'Lanzar errores con throw', p: [
          '`throw new Error("mensaje")` lanza un error propio. La función se detiene en ese punto y el error sube hasta el `catch` más cercano.',
          'Lanza errores cuando una función recibe datos con los que no puede trabajar, en lugar de devolver un valor raro que falle más tarde.' ],
          code: `function dividir(a, b) {\n  if (b === 0) throw new Error("No se puede dividir entre cero");\n  return a / b;\n}\n\ntry {\n  console.log(dividir(10, 2));  // 5\n  console.log(dividir(1, 0));   // lanza: no se muestra\n} catch (e) {\n  console.log(e.message);       // No se puede dividir entre cero\n}` },
        { h: 'finally y tipos de error', p: [
          '`finally` se ejecuta siempre, haya error o no, incluso si el `try` hace `return`. Se usa para cerrar o limpiar: ocultar un indicador de carga, cerrar una conexión.',
          'Tipos habituales: `TypeError` (usar mal un valor, como leer propiedades de `null`), `ReferenceError` (variable que no existe), `SyntaxError` (código o JSON mal escrito) y `RangeError` (número fuera de rango).' ],
          code: `try {\n  const usuario = null;\n  usuario.nombre;\n} catch (e) {\n  console.log(e instanceof TypeError);  // true\n} finally {\n  console.log("Limpieza hecha");\n}` },
        { h: 'Errores propios', p: [
          'Puedes crear tus propios tipos heredando de `Error`. Así el `catch` puede distinguir un error de validación de un fallo inesperado con `instanceof`.',
          'Si un `catch` recibe un error que no sabe tratar, lo mejor es volver a lanzarlo con `throw e` para no ocultarlo.' ],
          code: `class ValidacionError extends Error {\n  constructor(mensaje) {\n    super(mensaje);\n    this.name = "ValidacionError";\n  }\n}\n\ntry {\n  throw new ValidacionError("El correo está vacío");\n} catch (e) {\n  if (e instanceof ValidacionError) console.log("Revisa:", e.message);\n  else throw e;\n}` },
        { h: 'Ejemplo real: leer una configuración', real: true, p: [
          'Una aplicación lee su configuración guardada como texto. Si el texto está roto o le falta un dato, avisa y usa valores por defecto en lugar de romperse.' ],
          code: `function leerConfig(texto) {\n  try {\n    const cfg = JSON.parse(texto);\n    if (!cfg.idioma) throw new Error("Falta el idioma");\n    return cfg;\n  } catch (error) {\n    console.warn("Configuración no válida:", error.message);\n    return { idioma: "es" };\n  }\n}\n\nconsole.log(leerConfig('{"idioma":"fr"}').idioma);  // fr\nconsole.log(leerConfig("{}").idioma);               // es (con aviso)\nconsole.log(leerConfig("roto").idioma);             // es (con aviso)` },
      ],
      x: [
        out(`let r = "";\ntry {\n  r += "A";\n  throw new Error("x");\n  r += "B";\n} catch {\n  r += "C";\n} finally {\n  r += "D";\n}\nconsole.log(r);`, ['ACD', 'ABCD', 'AD', 'AC'], 'Tras el `throw` no se ejecuta el resto del `try`. Después van `catch` y `finally`.'),
        fill(`if (saldo < cantidad) {\n  ___ new Error("Saldo insuficiente");\n}`, ['throw', 'raise', 'error', 'catch'], 'En JavaScript los errores se lanzan con `throw`. `raise` es de Python.'),
        out(`try {\n  null.length;\n} catch (e) {\n  console.log(e.name);\n}`, ['TypeError', 'ReferenceError', 'SyntaxError', 'RangeError'], 'Leer una propiedad de `null` es usar mal un valor: `TypeError`.'),
        out(`try {\n  console.log(noExiste);\n} catch (e) {\n  console.log(e instanceof ReferenceError);\n}`, ['true', 'false', 'undefined'], 'Usar una variable que no se ha declarado lanza `ReferenceError`.'),
        mc('¿Cuándo se ejecuta el bloque `finally`?', ['Siempre, haya error o no', 'Solo si hay un error', 'Solo si no hay error', 'Nunca si el try hace return'], 'Por eso se usa para limpiar, pase lo que pase.'),
        typ('Crea un tipo de error propio', `class ValidacionError ___ Error {}`, 'extends', 'Heredar de `Error` permite distinguirlo luego con `instanceof`.'),
        out(`function f() {\n  try {\n    return "try";\n  } finally {\n    console.log("finally");\n  }\n}\nconsole.log(f());`, ['finally\ntry', 'try\nfinally', 'try', 'finally'], 'El `return` espera a que termine `finally`, así que primero se muestra "finally" y luego el valor devuelto.'),
        out('class ValidacionError extends Error {\n  constructor(campo) {\n    super(`${campo} no es válido`);\n    this.name = "ValidacionError";\n  }\n}\nfunction validar(edad) {\n  if (typeof edad !== "number") throw new TypeError("edad debe ser un número");\n  if (edad < 0) throw new ValidacionError("edad");\n  return edad;\n}\nconst log = [];\nfor (const v of [30, -1, "x"]) {\n  try {\n    log.push(validar(v));\n  } catch (e) {\n    log.push(e instanceof ValidacionError ? e.message : e.name);\n  } finally {\n    log.push("|");\n  }\n}\nconsole.log(log.join(" "));', ['30 | edad no es válido | TypeError |', '30 | edad no es válido | edad debe ser un número |', '30 | ValidacionError | TypeError |', '30 edad no es válido TypeError'], '30 es válido. -1 lanza `ValidacionError` y se guarda su mensaje. "x" lanza `TypeError`, que no es `ValidacionError`, así que se guarda su `name`. `finally` añade "|" en las tres vueltas.'),
      ],
    },
    // Día 15
    {
      id: 'js-classes',
      t: 'Clases',
      d: 'class, constructor, métodos, getters, extends, super, static y campos privados.',
      guide: [
        { h: 'Declarar una clase', p: [
          'Una clase es un molde para crear objetos con la misma forma. El `constructor` se ejecuta con `new` y prepara las propiedades del objeto con `this`.',
          'Los métodos se escriben dentro de la clase sin la palabra `function` y los comparten todos los objetos creados con ella.' ],
          code: `class Producto {\n  constructor(nombre, precio) {\n    this.nombre = nombre;\n    this.precio = precio;\n  }\n  conIva() {\n    return this.precio * 1.21;\n  }\n}\n\nconst libro = new Producto("Libro", 20);\nconsole.log(libro.nombre, libro.conIva());  // Libro 24.2` },
        { h: 'Getters, setters y campos privados', p: [
          'Un campo que empieza por `#` es privado: solo se puede usar dentro de la clase. Intentar leerlo desde fuera es un error de sintaxis.',
          '`get` define una propiedad calculada que se lee sin paréntesis y `set` una que valida antes de guardar.' ],
          code: `class Termostato {\n  #grados = 20;\n  get grados() {\n    return this.#grados;\n  }\n  set grados(valor) {\n    this.#grados = Math.min(30, Math.max(15, valor));\n  }\n}\n\nconst t = new Termostato();\nt.grados = 42;\nconsole.log(t.grados);  // 30` },
        { h: 'Herencia con extends y super', p: [
          '`class Hija extends Madre` crea una clase que hereda las propiedades y métodos de otra. Puede añadir los suyos y redefinir los heredados.',
          'En el constructor de la hija hay que llamar a `super(...)` antes de usar `this`. Dentro de un método, `super.metodo()` llama a la versión de la madre.' ],
          code: `class Animal {\n  constructor(nombre) {\n    this.nombre = nombre;\n  }\n  hablar() {\n    return this.nombre + " hace un sonido";\n  }\n}\n\nclass Perro extends Animal {\n  hablar() {\n    return super.hablar() + ": ¡guau!";\n  }\n}\n\nconsole.log(new Perro("Toby").hablar());  // Toby hace un sonido: ¡guau!` },
        { h: 'Miembros static e instanceof', p: [
          'Un método o propiedad `static` pertenece a la clase, no a cada objeto: se usa como `Clase.metodo()`. Sirve para utilidades y contadores compartidos.',
          '`objeto instanceof Clase` comprueba si un objeto se creó con esa clase o con una que hereda de ella. Por dentro, una clase sigue siendo una función: `typeof Clase` es "function".' ],
          code: `class Usuario {\n  static creados = 0;\n  constructor(nombre) {\n    this.nombre = nombre;\n    Usuario.creados++;\n  }\n  static invitado() {\n    return new Usuario("invitado");\n  }\n}\n\nconst u = Usuario.invitado();\nnew Usuario("Ana");\nconsole.log(Usuario.creados, u instanceof Usuario);  // 2 true` },
        { h: 'Ejemplo real: un carrito de la compra', real: true, p: [
          'Una tienda online guarda las líneas del carrito en un campo privado. Desde fuera solo se puede añadir productos y leer el total, así que nadie puede dejar el carrito en un estado incorrecto.' ],
          code: `class Carrito {\n  #lineas = [];\n  agregar(producto, precio, unidades = 1) {\n    if (unidades <= 0) throw new Error("Unidades no válidas");\n    this.#lineas.push({ producto, precio, unidades });\n    return this;   // permite encadenar\n  }\n  get total() {\n    return this.#lineas.reduce((s, l) => s + l.precio * l.unidades, 0);\n  }\n  get cantidad() {\n    return this.#lineas.length;\n  }\n}\n\nconst c = new Carrito().agregar("Taza", 8, 2).agregar("Café", 12);\nconsole.log(c.cantidad, c.total);  // 2 28` },
      ],
      x: [
        fill(`class Perro ___ Animal {\n  ladrar() { return "guau"; }\n}`, ['extends', 'inherits', 'implements', ':'], 'La herencia en JavaScript se escribe con `extends`.'),
        out(`class Contador {\n  #n = 0;\n  inc() {\n    this.#n++;\n    return this;\n  }\n  get valor() {\n    return this.#n;\n  }\n}\nconst c = new Contador();\nc.inc().inc().inc();\nconsole.log(c.valor);`, ['3', '1', 'undefined', 'Error'], '`inc` devuelve `this`, así que se puede encadenar. El getter se lee sin paréntesis.'),
        mc('¿Qué hace `super(...)` en el constructor de una clase hija?', ['Llama al constructor de la clase madre', 'Crea una copia del objeto', 'Convierte el método en estático', 'Borra la clase madre'], 'Es obligatorio llamarlo antes de usar `this` en una clase que usa `extends`.'),
        out(`class A {\n  saludo() { return "A"; }\n}\nclass B extends A {\n  saludo() { return "B" + super.saludo(); }\n}\nconsole.log(new B().saludo());`, ['BA', 'B', 'A', 'AB'], '`B` redefine `saludo`, pero llama a la versión de `A` con `super.saludo()`.'),
        typ('Haz que el método se use desde la clase, sin crear objetos', `class Mates {\n  ___ doble(n) { return n * 2; }\n}\nconsole.log(Mates.doble(4));`, 'static', 'Los métodos `static` pertenecen a la clase.'),
        out(`class Punto {\n  constructor(x) { this.x = x; }\n}\nconst p = new Punto(2);\nconsole.log(typeof Punto, p instanceof Punto);`, ['function true', 'class true', 'object true', 'function false'], 'Por dentro una clase es una función especial.'),
        mc('¿Qué pasa al escribir `carrito.#lineas` fuera de la clase?', ['Error de sintaxis: los campos privados solo se usan dentro de la clase', 'Devuelve undefined', 'Devuelve el array', 'Devuelve null'], 'Los campos `#` están protegidos por el propio lenguaje, no solo por convenio.'),
        out(`class Cuenta {\n  static total = 0;\n  #saldo;\n  constructor(titular, saldo = 0) {\n    this.titular = titular;\n    this.#saldo = saldo;\n    Cuenta.total++;\n  }\n  retirar(c) {\n    if (c > this.#saldo) throw new Error("Sin fondos");\n    this.#saldo -= c;\n  }\n  get saldo() { return this.#saldo; }\n}\nclass Ahorro extends Cuenta {\n  retirar(c) { super.retirar(c + 1); }\n}\nconst a = new Cuenta("Ana", 50);\nconst b = new Ahorro("Leo", 20);\na.retirar(30);\ntry { b.retirar(20); } catch (e) { console.log(e.message); }\nconsole.log(a.saldo, b.saldo, Cuenta.total);`, ['Sin fondos\n20 20 2', 'Sin fondos\n20 0 2', '20 0 2', 'Sin fondos\n20 20 1'], '`a` pasa de 50 a 20. `Ahorro` cobra 1 de comisión: retirar 20 pide 21, más de lo que tiene, y lanza el error sin tocar el saldo. Se crearon dos cuentas.'),
      ],
    },
    // Día 16
    {
      id: 'js-json',
      t: 'JSON',
      d: 'JSON.stringify, JSON.parse, reglas del formato y copias de datos.',
      guide: [
        { h: 'Qué es JSON', p: [
          'JSON es un formato de texto para intercambiar datos. Lo usan casi todas las APIs web y muchos archivos de configuración, como `package.json`.',
          'Se parece a un objeto de JavaScript, pero es más estricto: las claves y los textos van entre comillas dobles, no admite comentarios ni comas finales, y solo guarda textos, números, booleanos, `null`, arrays y objetos.' ],
          code: `{\n  "nombre": "Ana",\n  "edad": 31,\n  "activa": true,\n  "cursos": ["js", "python"],\n  "direccion": { "ciudad": "Bilbao" },\n  "telefono": null\n}` },
        { h: 'JSON.stringify: de objeto a texto', p: [
          '`JSON.stringify(valor)` convierte un valor en un texto JSON. El tercer argumento añade sangría para que sea legible: `JSON.stringify(obj, null, 2)`.',
          'Las propiedades con `undefined` o funciones se omiten, y las fechas se convierten en texto con formato ISO.' ],
          code: `const usuario = { nombre: "Leo", edad: 25, saludar() {}, apodo: undefined };\nconsole.log(JSON.stringify(usuario));  // {"nombre":"Leo","edad":25}\nconsole.log(JSON.stringify({ a: 1, b: [2, 3] }, null, 2));\n// {\n//   "a": 1,\n//   "b": [\n//     2,\n//     3\n//   ]\n// }` },
        { h: 'JSON.parse: de texto a objeto', p: [
          '`JSON.parse(texto)` hace lo contrario: lee un texto JSON y devuelve el valor de JavaScript.',
          'Si el texto no es JSON válido lanza un `SyntaxError`, así que con datos que vienen de fuera conviene usar `try...catch`.' ],
          code: `const texto = '{"producto":"Taza","precio":8.5}';\nconst obj = JSON.parse(texto);\nconsole.log(obj.precio * 2);  // 17\n\ntry {\n  JSON.parse("{precio: 8.5}");  // claves sin comillas\n} catch (e) {\n  console.log(e.name);  // SyntaxError\n}` },
        { h: 'Copias y fechas', p: [
          '`JSON.parse(JSON.stringify(obj))` crea una copia profunda: los objetos de dentro ya no se comparten. Pero pierde fechas, `undefined` y funciones.',
          'Para copias profundas fiables existe `structuredClone(obj)`, que conserva las fechas. Al leer JSON, las fechas llegan como texto: conviértelas con `new Date(texto)`.' ],
          code: `const original = { fecha: new Date(2024, 0, 1), etiquetas: ["a"] };\nconst conJson = JSON.parse(JSON.stringify(original));\nconst clon = structuredClone(original);\nconsole.log(typeof conJson.fecha);         // string\nconsole.log(clon.fecha instanceof Date);   // true` },
        { h: 'Ejemplo real: enviar y recibir un pedido', real: true, p: [
          'Una tienda envía el pedido a su servidor como texto JSON y recibe la respuesta también en JSON. Las fechas se reconvierten al leerlas.' ],
          code: `const pedido = { cliente: "Eva", lineas: [{ producto: "Libro", uds: 2 }], fecha: new Date() };\nconst cuerpo = JSON.stringify(pedido);   // se enviaría con fetch\n\nconst respuesta = '{"id":981,"estado":"pagado","fecha":"2024-03-10T09:30:00.000Z"}';\nconst datos = JSON.parse(respuesta);\nconst fecha = new Date(datos.fecha);\nconsole.log(datos.id, datos.estado, fecha.getUTCHours());  // 981 pagado 9` },
      ],
      x: [
        mc('¿Cuál de estos textos es JSON válido?', ['{"nombre": "Ana", "edad": 30}', '{nombre: "Ana"}', "{'nombre': 'Ana'}", '{"edad": 30,}'], 'JSON exige comillas dobles en claves y textos y no admite comas finales.'),
        out(`console.log(JSON.stringify({ a: 1, b: "x" }));`, ['{"a":1,"b":"x"}', '{ a: 1, b: "x" }', '{"a": 1, "b": "x"}', '[object Object]'], 'Sin sangría, `stringify` no deja espacios.'),
        out(`const o = JSON.parse('{"n": 5}');\nconsole.log(o.n + 1, typeof o);`, ['6 object', '51 object', '6 string', 'NaN object'], '`parse` devuelve un objeto y `n` es un número de verdad.'),
        fill(`const usuario = { nombre: "Ana" };\nconst texto = JSON.___(usuario);`, ['stringify', 'parse', 'toString', 'encode'], '`stringify` convierte el objeto en texto JSON.'),
        out(`console.log(JSON.stringify({ a: undefined, b: () => 1, c: null }));`, ['{"c":null}', '{"a":undefined,"b":null,"c":null}', '{"a":null,"b":null,"c":null}', '{}'], 'Las propiedades con `undefined` o funciones se omiten; `null` sí se guarda.'),
        typ('Convierte el texto JSON en un objeto', `const texto = '{"activo":true}';\nconst datos = JSON.___(texto);`, 'parse', '`JSON.parse` lee el texto y devuelve el valor.'),
        out(`const original = { lista: [1, 2] };\nconst copia = JSON.parse(JSON.stringify(original));\ncopia.lista.push(3);\nconsole.log(original.lista.length, copia.lista.length);`, ['2 3', '3 3', '2 2', '3 2'], 'La copia hecha con JSON es profunda: el array de dentro ya no se comparte.'),
        out(`const pedido = { id: 3, fecha: new Date(Date.UTC(2024, 0, 15)), items: [{ p: "té", n: 2 }], nota: undefined };\nconst texto = JSON.stringify(pedido);\nconst vuelta = JSON.parse(texto);\nconsole.log(typeof vuelta.fecha, "nota" in vuelta, vuelta.items[0].n * 2, texto.includes("2024-01-15"));`, ['string false 4 true', 'object false 4 true', 'string true 4 true', 'object true 4 false'], 'La fecha se guarda como texto ISO y vuelve como texto. `nota` era `undefined`, así que no se guardó. Los arrays y objetos de dentro sí se conservan.'),
      ],
    },
    // Día 17
    {
      id: 'js-storage',
      t: 'Web Storage',
      d: 'Guardar datos en el navegador con localStorage y sessionStorage.',
      guide: [
        { h: 'Qué es Web Storage', p: [
          'El navegador ofrece dos almacenes de pares clave-valor: `localStorage`, que conserva los datos aunque cierres el navegador, y `sessionStorage`, que los borra al cerrar la pestaña.',
          'Cada sitio web tiene su propio almacén y solo puede leer el suyo. Caben unos 5 MB y todo se guarda como texto.' ] },
        { h: 'Guardar, leer y borrar', p: [
          '`setItem(clave, valor)` guarda, `getItem(clave)` lee (devuelve `null` si no existe), `removeItem(clave)` borra una clave y `clear()` borra todo.',
          '`length` dice cuántas claves hay. Todo valor se convierte en texto: si guardas el número 5, leerás "5".' ],
          code: `localStorage.setItem("tema", "oscuro");\nconsole.log(localStorage.getItem("tema"));    // oscuro\nconsole.log(localStorage.getItem("idioma"));  // null\n\nlocalStorage.setItem("visitas", 3);\nconsole.log(typeof localStorage.getItem("visitas"));  // string\nlocalStorage.removeItem("tema");` },
        { h: 'Guardar objetos con JSON', p: [
          'Si guardas un objeto directamente, se convierte en el texto "[object Object]" y se pierden los datos. Hay que pasarlo por `JSON.stringify` al guardar y por `JSON.parse` al leer.',
          'Como `JSON.parse(null)` devuelve `null`, con `??` puedes dar un valor por defecto cuando la clave aún no existe.' ],
          code: `const carrito = [{ producto: "Taza", uds: 2 }];\nlocalStorage.setItem("carrito", JSON.stringify(carrito));\n\nconst leido = JSON.parse(localStorage.getItem("carrito")) ?? [];\nconsole.log(leido[0].producto);  // Taza` },
        { h: 'sessionStorage, eventos y seguridad', p: [
          '`sessionStorage` tiene los mismos métodos. Úsalo para datos temporales, como un formulario a medio rellenar.',
          'Cuando otra pestaña del mismo sitio cambia `localStorage`, se dispara el evento `storage`, útil para sincronizar pestañas.',
          'No guardes contraseñas ni datos sensibles: cualquier script que se ejecute en tu página puede leer el almacén.' ],
          code: `sessionStorage.setItem("borrador", "Hola, quería pregun...");\n\nwindow.addEventListener("storage", (e) => {\n  if (e.key === "tema") aplicarTema(e.newValue);\n});` },
        { h: 'Ejemplo real: recordar el modo oscuro', real: true, p: [
          'Una web guarda la preferencia de tema del usuario. Al volver días después, la página se abre con el tema que eligió.' ],
          code: `const CLAVE = "preferencias";\n\nfunction leerPreferencias() {\n  return JSON.parse(localStorage.getItem(CLAVE)) ?? { tema: "claro", fuente: 16 };\n}\n\nfunction cambiarTema(tema) {\n  const prefs = { ...leerPreferencias(), tema };\n  localStorage.setItem(CLAVE, JSON.stringify(prefs));\n  document.body.dataset.tema = tema;\n}\n\ndocument.body.dataset.tema = leerPreferencias().tema;  // al cargar la página` },
      ],
      x: [
        mc('¿En qué se diferencian `localStorage` y `sessionStorage`?', ['localStorage conserva los datos al cerrar el navegador; sessionStorage los borra al cerrar la pestaña', 'sessionStorage guarda más datos', 'localStorage solo guarda números', 'No hay ninguna diferencia'], 'Ambos tienen los mismos métodos y guardan solo texto.'),
        fill(`localStorage.___("tema", "oscuro");`, ['setItem', 'set', 'save', 'put'], '`setItem(clave, valor)` guarda un valor.'),
        out(`localStorage.setItem("visitas", 5);\nconst v = localStorage.getItem("visitas");\nconsole.log(typeof v, v + 1);`, ['string 51', 'number 6', 'string 6', 'number 51'], 'Todo se guarda como texto, así que `+` concatena.'),
        out(`console.log(localStorage.getItem("noExiste"));`, ['null', 'undefined', '""', 'Error'], 'Una clave que no existe devuelve `null`.'),
        out(`localStorage.setItem("u", { nombre: "Ana" });\nconsole.log(localStorage.getItem("u"));`, ['[object Object]', '{"nombre":"Ana"}', '{ nombre: "Ana" }', 'null'], 'Sin `JSON.stringify`, el objeto se convierte en un texto inútil.'),
        typ('Da un objeto vacío por defecto si la clave no existe', `const prefs = JSON.parse(localStorage.getItem("prefs")) ___ {};`, ['??', '||'], '`JSON.parse(null)` es `null`, y `??` lo sustituye por `{}`.'),
        mc('¿Qué no deberías guardar en localStorage?', ['Contraseñas o datos sensibles', 'El idioma elegido', 'El tema claro u oscuro', 'Un borrador de comentario'], 'Cualquier script que se ejecute en la página puede leer el almacén.'),
        out(`localStorage.clear();\nconst guardar = (k, v) => localStorage.setItem(k, JSON.stringify(v));\nconst leer = (k, def) => JSON.parse(localStorage.getItem(k)) ?? def;\nguardar("tareas", ["pan", "leche"]);\nconst tareas = leer("tareas", []);\ntareas.push("café");\nguardar("tareas", tareas);\nlocalStorage.removeItem("tema");\nconsole.log(leer("tareas", []).length, leer("tema", "claro"), localStorage.length);`, ['3 claro 1', '2 claro 1', '3 null 1', '3 claro 2'], 'Las tareas se leen, se amplían y se vuelven a guardar: 3. "tema" no existe, así que `leer` devuelve el valor por defecto. Solo queda una clave.'),
      ],
    },
    // Día 18
    {
      id: 'js-promises',
      t: 'Promesas',
      d: 'Código asíncrono, Promise, then, catch, Promise.all y el orden de ejecución.',
      guide: [
        { h: 'Código asíncrono', p: [
          'Algunas tareas tardan: pedir datos a un servidor, leer un archivo, esperar un temporizador. JavaScript no se queda parado esperando: sigue con el resto del código y atiende el resultado cuando llega.',
          '`setTimeout(fn, ms)` es el ejemplo más simple: programa una función para más tarde. Incluso con 0 ms, se ejecuta después del código que ya estaba en marcha.' ],
          code: `console.log("1. Pido los datos");\nsetTimeout(() => console.log("3. Llegan los datos"), 1000);\nconsole.log("2. Sigo trabajando");` },
        { h: 'Crear y usar promesas', p: [
          'Una promesa representa un valor que llegará en el futuro. Está pendiente, y luego se cumple (resolve) o se rechaza (reject).',
          '`then` recibe el valor cuando se cumple, `catch` el error cuando se rechaza y `finally` se ejecuta en ambos casos.' ],
          code: `function tirarDado() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const n = Math.ceil(Math.random() * 6);\n      if (n === 1) reject(new Error("Has sacado un 1"));\n      else resolve(n);\n    }, 500);\n  });\n}\n\ntirarDado()\n  .then((n) => console.log("Has sacado", n))\n  .catch((e) => console.log(e.message))\n  .finally(() => console.log("Fin de la tirada"));` },
        { h: 'Encadenar', p: [
          'Lo que devuelve un `then` es el valor que recibe el siguiente. Si devuelve otra promesa, la cadena espera a que se cumpla.',
          'Un solo `catch` al final captura el error de cualquier paso anterior.' ],
          code: `Promise.resolve(2)\n  .then((n) => n * 10)\n  .then((n) => {\n    if (n > 100) throw new Error("Demasiado grande");\n    return n + 1;\n  })\n  .then((n) => console.log(n))   // 21\n  .catch((e) => console.log(e.message));` },
        { h: 'Varias promesas y el orden de ejecución', p: [
          '`Promise.all([...])` espera a todas y devuelve sus valores en orden; si una falla, falla todo. `Promise.allSettled` espera a todas y dice cómo terminó cada una. `Promise.race` se queda con la primera en terminar.',
          'El orden: primero todo el código síncrono, después las promesas cumplidas (microtareas) y por último los temporizadores (macrotareas).' ],
          code: `console.log("A");\nsetTimeout(() => console.log("D"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("B");\n// A B C D` },
        { h: 'Ejemplo real: cargar un panel en paralelo', real: true, p: [
          'Un panel necesita el usuario, sus pedidos y sus avisos. Se piden a la vez con `Promise.all`, así el tiempo total es el de la petición más lenta y no la suma de todas.' ],
          code: `const esperar = (ms, valor) => new Promise((r) => setTimeout(() => r(valor), ms));\n\nconst pedirUsuario = () => esperar(300, { nombre: "Ana" });\nconst pedirPedidos = () => esperar(500, [101, 102]);\nconst pedirAvisos = () => esperar(200, ["Envío en camino"]);\n\nconsole.time("panel");\nPromise.all([pedirUsuario(), pedirPedidos(), pedirAvisos()])\n  .then(([usuario, pedidos, avisos]) => {\n    console.log(usuario.nombre, pedidos.length, avisos[0]);  // Ana 2 Envío en camino\n    console.timeEnd("panel");  // unos 500 ms, no 1000\n  })\n  .catch((e) => console.log("No se pudo cargar el panel:", e.message));` },
      ],
      x: [
        out(`console.log("A");\nsetTimeout(() => console.log("B"), 0);\nconsole.log("C");`, ['A\nC\nB', 'A\nB\nC', 'B\nA\nC', 'C\nA\nB'], 'El temporizador se ejecuta cuando termina el código síncrono, aunque sea de 0 ms.'),
        out(`console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);`, ['1\n4\n3\n2', '1\n2\n3\n4', '1\n4\n2\n3', '1\n3\n4\n2'], 'Primero el código síncrono (1 y 4), luego las promesas (3) y por último los temporizadores (2).'),
        fill(`const p = Promise.___(new Error("mal"));\np.catch((e) => console.log(e.message));  // mal`, ['reject', 'fail', 'error', 'catch'], '`Promise.reject` crea una promesa ya rechazada, igual que `Promise.resolve` crea una ya cumplida.'),
        out(`Promise.resolve(2)\n  .then((n) => n * 3)\n  .then((n) => console.log(n + 1));`, ['7', '6', '3', 'undefined'], 'El primer `then` devuelve 6 y el segundo lo recibe: 6 + 1 = 7.'),
        mc('¿Qué hace `Promise.all` si una de las promesas se rechaza?', ['Se rechaza en cuanto una falla', 'Ignora la que falla', 'Espera a todas y devuelve los errores', 'Vuelve a intentarla'], 'Si necesitas el resultado de todas aunque fallen, usa `Promise.allSettled`.'),
        typ('Captura el error de la cadena', `pedirDatos()\n  .then(mostrar)\n  .___((error) => console.log(error.message));`, 'catch', 'Un `catch` al final captura el error de cualquier paso anterior.'),
        out(`Promise.reject(new Error("x"))\n  .then(() => console.log("A"))\n  .catch((e) => console.log("B", e.message))\n  .finally(() => console.log("C"));`, ['B x\nC', 'A\nB x\nC', 'B x', 'A\nC'], 'La promesa rechazada se salta el `then` y llega al `catch`. `finally` se ejecuta siempre.'),
        out(`const esperar = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms));\nconst log = [];\nPromise.all([esperar(30, "a"), esperar(10, "b"), 5]).then((r) => log.push(r.join("")));\nPromise.race([esperar(20, "x"), esperar(5, "y")]).then((v) => log.push(v));\nPromise.allSettled([Promise.reject(new Error("no")), 1]).then((r) => log.push(r.map((s) => s.status[0]).join("")));\nsetTimeout(() => console.log(log.join(" ")), 50);`, ['rf y ab5', 'ab5 y rf', 'y rf ab5', 'rf x ab5'], '`allSettled` no espera a ningún temporizador: termina primero con "rejected" y "fulfilled" (rf). `race` se queda con la de 5 ms (y). `all` espera a la más lenta y respeta el orden original: ab5.'),
      ],
    },
    // Día 19
    {
      id: 'js-closures',
      t: 'Closures',
      d: 'Funciones que recuerdan su ámbito, fábricas de funciones y datos privados.',
      guide: [
        { h: 'Ámbito léxico', p: [
          'Una función puede usar las variables del lugar donde se escribió, no del lugar desde donde se llama. Es el ámbito léxico.',
          'Las funciones de dentro ven las variables de las de fuera, pero no al revés.' ],
          code: `const saludo = "Hola";\nfunction exterior() {\n  const nombre = "Ana";\n  function interior() {\n    return saludo + ", " + nombre;  // ve las dos variables\n  }\n  return interior();\n}\nconsole.log(exterior());  // Hola, Ana` },
        { h: 'Qué es un closure', p: [
          'Un closure es una función que recuerda las variables de su ámbito aunque la función que las creó ya haya terminado.',
          'Cada llamada a la función exterior crea un ámbito nuevo, así que cada closure tiene sus propias variables.' ],
          code: `function crearContador() {\n  let cuenta = 0;\n  return () => ++cuenta;\n}\n\nconst a = crearContador();\nconst b = crearContador();\na();\na();\nconsole.log(a(), b());  // 3 1` },
        { h: 'Fábricas de funciones y datos privados', p: [
          'Una fábrica de funciones devuelve funciones configuradas con los datos que recibe: `multiplicador(3)` crea una función que triplica.',
          'Las variables del closure son privadas: nadie puede tocarlas desde fuera si no es a través de las funciones devueltas.' ],
          code: `function multiplicador(k) {\n  return (n) => n * k;\n}\nconst triple = multiplicador(3);\nconsole.log(triple(5));  // 15\n\nfunction crearMonedero() {\n  let saldo = 0;\n  return {\n    ingresar: (c) => (saldo += c),\n    consultar: () => saldo,\n  };\n}\nconst m = crearMonedero();\nm.ingresar(10);\nconsole.log(m.consultar(), m.saldo);  // 10 undefined` },
        { h: 'Closures en bucles', p: [
          'Con `let`, cada vuelta del bucle tiene su propia variable, así que cada closure recuerda un valor distinto.',
          'Con `var` solo existe una variable para todo el bucle y todos los closures ven su valor final. Es un error clásico; usar `let` lo evita.' ],
          code: `for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log("let:", i), 0);   // 0, 1, 2\n}\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log("var:", j), 0);   // 3, 3, 3\n}` },
        { h: 'Ejemplo real: limitar los intentos de acceso', real: true, p: [
          'Un formulario de acceso permite tres intentos. El contador vive en un closure, así que ningún otro código de la página puede reiniciarlo.' ],
          code: `function crearLimitador(maximo) {\n  let intentos = 0;\n  return function intentar(correcta) {\n    if (intentos >= maximo) return "Bloqueado";\n    intentos++;\n    return correcta ? "Bienvenido" : "Quedan " + (maximo - intentos);\n  };\n}\n\nconst acceso = crearLimitador(3);\nconsole.log(acceso(false));  // Quedan 2\nconsole.log(acceso(false));  // Quedan 1\nconsole.log(acceso(false));  // Quedan 0\nconsole.log(acceso(true));   // Bloqueado` },
      ],
      x: [
        out(`function crear() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = crear();\na();\na();\nconsole.log(a());`, ['3', '1', '0', 'undefined'], 'La función devuelta recuerda `n` entre llamadas.'),
        out(`function crear() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = crear();\nconst b = crear();\na();\na();\nconsole.log(a(), b());`, ['3 1', '3 4', '1 1', '3 3'], 'Cada llamada a `crear` tiene su propia `n`.'),
        mc('¿Qué es un closure?', ['Una función que recuerda las variables del ámbito donde se creó', 'Una función que se cierra sola', 'Un bucle que termina', 'Un objeto sin propiedades'], 'Lo recuerda aunque la función que la creó ya haya terminado.'),
        out(`const fs = [];\nfor (var i = 0; i < 3; i++) fs.push(() => i);\nconsole.log(fs.map((f) => f()).join(""));`, ['333', '012', '222', 'undefined'], 'Con `var` solo hay una `i` para todo el bucle y al final vale 3.'),
        fill(`const fs = [];\nfor (___ i = 0; i < 3; i++) fs.push(() => i);\nconsole.log(fs.map((f) => f()).join(""));  // 012`, ['let', 'var', 'global', 'static'], 'Con `let` cada vuelta tiene su propia variable.'),
        typ('Completa la fábrica de funciones', `function multiplicador(k) {\n  return (n) => n * ___;\n}\nconsole.log(multiplicador(4)(5));  // 20`, 'k', 'La función devuelta recuerda el `k` con el que se creó.'),
        out(`function unaVez(fn) {\n  let hecho = false, r;\n  return (...args) => {\n    if (!hecho) {\n      hecho = true;\n      r = fn(...args);\n    }\n    return r;\n  };\n}\nconst iniciar = unaVez((x) => x * 10);\nconsole.log(iniciar(2), iniciar(5));`, ['20 20', '20 50', '20 undefined', '50 50'], 'La segunda llamada ya no ejecuta `fn`: devuelve el resultado guardado.'),
        out(`function crearBanco(saldoInicial) {\n  let saldo = saldoInicial;\n  const historial = [];\n  return {\n    ingresar(c) { saldo += c; historial.push("+" + c); return this; },\n    retirar(c) { if (c <= saldo) { saldo -= c; historial.push("-" + c); } return this; },\n    resumen: () => saldo + " [" + historial.join(",") + "]",\n  };\n}\nconst cuenta = crearBanco(10);\ncuenta.ingresar(5).retirar(20).retirar(8);\nconst otra = crearBanco(0);\nconsole.log(cuenta.resumen(), otra.resumen(), cuenta.saldo);`, ['7 [+5,-8] 0 [] undefined', '7 [+5,-20,-8] 0 [] undefined', '7 [+5,-8] 7 [+5,-8] 7', '-13 [+5,-20,-8] 0 [] undefined'], '10 + 5 = 15; retirar 20 no se permite; retirar 8 deja 7. `otra` tiene su propio saldo e historial. `saldo` es privado: no es una propiedad del objeto.'),
      ],
    },
    // Día 20
    {
      id: 'js-clean-code',
      t: 'Código limpio',
      d: 'Nombres claros, funciones pequeñas, constantes y herramientas de calidad.',
      guide: [
        { h: 'Nombres que se explican solos', p: [
          'El código se lee muchas más veces de las que se escribe. Un buen nombre ahorra un comentario: `usuariosActivos` dice más que `arr2`.',
          'Convenciones de JavaScript: `camelCase` para variables y funciones, `PascalCase` para clases y `MAYUSCULAS_CON_GUIONES` para constantes fijas. Los booleanos suenan a pregunta: `estaActivo`, `tienePermiso`.' ],
          code: `// Difícil de leer\nconst d = u.filter((x) => x.a && x.e > 17);\n\n// Claro\nconst usuariosAdultosActivos = usuarios.filter(\n  (usuario) => usuario.activo && usuario.edad >= 18\n);` },
        { h: 'Funciones pequeñas y sin números mágicos', p: [
          'Cada función debería hacer una sola cosa y tener un nombre que la describa. Si necesitas la palabra "y" para explicarla, probablemente son dos funciones.',
          'Un número mágico es un valor sin explicación en medio del código, como `0.21` o `86400000`. Ponle nombre con una constante.' ],
          code: `const IVA = 0.21;\nconst MS_POR_DIA = 24 * 60 * 60 * 1000;\n\nconst conIva = (precio) => precio * (1 + IVA);\nconst diasEntre = (a, b) => Math.round((b - a) / MS_POR_DIA);` },
        { h: 'Retornos tempranos', p: [
          'Muchos `if` anidados obligan a recordar todas las condiciones a la vez. Comprueba primero los casos especiales y sal de la función con `return`.',
          'El camino principal queda al final, sin sangría y fácil de seguir.' ],
          code: `// Anidado\nfunction descuento(usuario) {\n  if (usuario) {\n    if (usuario.esSocio) {\n      return 0.1;\n    } else {\n      return 0;\n    }\n  } else {\n    return 0;\n  }\n}\n\n// Con retornos tempranos\nfunction descuento(usuario) {\n  if (!usuario?.esSocio) return 0;\n  return 0.1;\n}` },
        { h: 'Buenas costumbres y herramientas', p: [
          'Usa `const` por defecto y `let` solo si vas a reasignar. Compara siempre con `===`. No modifiques los parámetros que recibes: devuelve un valor nuevo.',
          'ESLint revisa el código sin ejecutarlo y avisa de errores y malas prácticas. Prettier lo formatea automáticamente para que todo el equipo escriba igual. Los comentarios deben explicar el porqué, no el qué.' ],
          code: `// npm install --save-dev eslint prettier\n// npx eslint src/\n// npx prettier --write src/\n\n// Mal: el comentario repite el código\ni++;  // suma uno a i\n\n// Bien: explica una decisión\nconst REINTENTOS = 3;  // la API falla a veces en el primer intento` },
        { h: 'Ejemplo real: refactorizar el cálculo de un pedido', real: true, p: [
          'Una tienda tenía una única función larga con números sueltos. Dividida en funciones pequeñas con constantes, cada regla de negocio se entiende y se puede probar por separado.' ],
          code: `const DESCUENTO_SOCIO = 0.1;\nconst ENVIO_GRATIS_DESDE = 50;\nconst COSTE_ENVIO = 5;\n\nconst subtotal = (lineas) => lineas.reduce((s, l) => s + l.precio * l.uds, 0);\nconst descuento = (importe, esSocio) => (esSocio ? importe * DESCUENTO_SOCIO : 0);\nconst envio = (importe) => (importe >= ENVIO_GRATIS_DESDE ? 0 : COSTE_ENVIO);\n\nfunction totalPedido(lineas, esSocio) {\n  const base = subtotal(lineas);\n  const conDescuento = base - descuento(base, esSocio);\n  return conDescuento + envio(conDescuento);\n}\n\nconsole.log(totalPedido([{ precio: 30, uds: 1 }], false));  // 35` },
      ],
      x: [
        mc('¿Qué nombre es más claro para un array de usuarios activos?', ['usuariosActivos', 'arr', 'datos2', 'x'], 'Un buen nombre dice qué contiene la variable sin tener que leer el resto del código.'),
        mc('¿Qué es un número mágico?', ['Un valor sin explicación en medio del código', 'Un número aleatorio', 'Un número muy grande', 'Un número negativo'], 'Se soluciona dándole un nombre con una constante, como `IVA`.'),
        out(`function precioEnvio(total, esSocio) {\n  if (esSocio) return 0;\n  if (total >= 50) return 0;\n  return 4.99;\n}\nconsole.log(precioEnvio(30, false), precioEnvio(30, true), precioEnvio(60, false));`, ['4.99 0 0', '0 0 4.99', '4.99 4.99 0', '4.99 0 4.99'], 'Cada caso especial sale pronto; solo el caso normal llega al final.'),
        fill(`___ IVA = 0.21;  // no cambia nunca`, ['const', 'let', 'var', 'static'], 'Lo que no se reasigna se declara con `const`.'),
        mc('¿Qué herramienta revisa el código sin ejecutarlo y avisa de errores y malas prácticas?', ['ESLint', 'Prettier', 'Node.js', 'npm'], 'Prettier solo formatea; ESLint analiza.'),
        out(`function conDescuento(productos) {\n  return productos.map((p) => ({ ...p, precio: p.precio * 0.9 }));\n}\nconst lista = [{ precio: 100 }];\nconst rebajada = conDescuento(lista);\nconsole.log(lista[0].precio, rebajada[0].precio);`, ['100 90', '90 90', '100 100', '90 100'], 'La función crea objetos nuevos con spread, así que el array original no cambia.'),
        ord('Ordena la función para que use un retorno temprano', ['function nombre(usuario) {', 'if (!usuario) return "Anónimo";', 'return usuario.nombre;', '}'], ['else {', 'if (usuario) {'], 'Primero se descarta el caso especial; el caso normal queda al final sin anidar.'),
        out(`const DESCUENTO_SOCIO = 0.1;\nconst ENVIO_GRATIS_DESDE = 50;\nconst COSTE_ENVIO = 5;\nconst subtotal = (items) => items.reduce((s, i) => s + i.precio * i.uds, 0);\nconst descuento = (importe, esSocio) => (esSocio ? importe * DESCUENTO_SOCIO : 0);\nconst envio = (importe) => (importe >= ENVIO_GRATIS_DESDE ? 0 : COSTE_ENVIO);\nfunction totalPedido(items, esSocio) {\n  const base = subtotal(items);\n  const conDescuento = base - descuento(base, esSocio);\n  return conDescuento + envio(conDescuento);\n}\nconst items = [{ precio: 20, uds: 2 }, { precio: 15, uds: 1 }];\nconsole.log(totalPedido(items, false), totalPedido(items, true));`, ['55 54.5', '55 49.5', '60 54.5', '55 55'], 'El subtotal es 55. Sin descuento, el envío es gratis: 55. El socio paga 49.5, que no llega a 50, así que se suma el envío: 54.5.'),
      ],
    },
    // Día 21
    {
      id: 'js-dom',
      t: 'DOM',
      d: 'El árbol de la página, seleccionar elementos y leer su contenido.',
      guide: [
        { h: 'El árbol del documento', p: [
          'Cuando el navegador carga una página, convierte el HTML en un árbol de objetos llamado DOM (Document Object Model). Cada etiqueta es un nodo elemento con padres, hijos y hermanos.',
          'Desde JavaScript se accede a ese árbol con el objeto `document`. Lo que cambias en el DOM se ve al momento en la página.' ],
          code: `<!-- index.html -->\n<body>\n  <h1 id="titulo">Mi tienda</h1>\n  <ul class="productos">\n    <li>Taza</li>\n    <li>Libreta</li>\n  </ul>\n  <script src="app.js" defer></script>\n</body>` },
        { h: 'Seleccionar elementos', p: [
          '`document.querySelector(selector)` devuelve el primer elemento que coincide con un selector CSS, o `null` si no hay ninguno. `querySelectorAll` devuelve todos en una `NodeList`, que se recorre con `forEach` o `for...of`.',
          '`getElementById("id")` es la forma clásica de buscar por id. También puedes buscar dentro de un elemento: `lista.querySelector("li")`.' ],
          code: `const titulo = document.querySelector("#titulo");\nconst items = document.querySelectorAll(".productos li");\nconsole.log(items.length);  // 2\nitems.forEach((li) => console.log(li.textContent));\n// Taza\n// Libreta\nconsole.log(document.querySelector(".no-existe"));  // null` },
        { h: 'Leer contenido y valores', p: [
          '`textContent` devuelve el texto de un elemento y sus hijos, sin etiquetas. `innerHTML` devuelve el HTML de dentro, con etiquetas.',
          'En los campos de formulario el dato está en `value` (siempre texto) y en las casillas, en `checked`.' ],
          code: `<!-- <p id="aviso">Envío <b>gratis</b></p>\n     <input id="edad" value="31"> -->\nconst aviso = document.querySelector("#aviso");\nconsole.log(aviso.textContent);  // Envío gratis\nconsole.log(aviso.innerHTML);    // Envío <b>gratis</b>\nconsole.log(Number(document.querySelector("#edad").value) + 1);  // 32` },
        { h: 'Atributos, dataset y recorrer el árbol', p: [
          '`getAttribute("href")` lee un atributo. Los atributos `data-*` se leen con `dataset`: `data-precio` es `el.dataset.precio`, siempre como texto.',
          'Para moverte por el árbol: `parentElement`, `children`, `firstElementChild`, `nextElementSibling` y `closest(selector)`, que busca el antepasado más cercano que coincide.' ],
          code: `<!-- <li class="producto" data-id="7" data-precio="12.5"><span>Taza</span></li> -->\nconst span = document.querySelector(".producto span");\nconst li = span.closest(".producto");\nconsole.log(li.dataset.id, Number(li.dataset.precio) * 2);  // 7 25\nconsole.log(li.children.length);  // 1` },
        { h: 'Ejemplo real: resumen de una lista de tareas', real: true, p: [
          'Una aplicación de tareas muestra en la cabecera cuántas quedan pendientes. Solo necesita leer el DOM: contar los elementos y comprobar su clase.' ],
          code: `<!-- <ul id="tareas">\n       <li class="hecha">Comprar pan</li>\n       <li>Llamar al banco</li>\n       <li>Estudiar JS</li>\n     </ul>\n     <p id="resumen"></p> -->\nconst tareas = [...document.querySelectorAll("#tareas li")];\nconst pendientes = tareas.filter((li) => !li.classList.contains("hecha"));\nconsole.log(pendientes.length + " de " + tareas.length + " pendientes");  // 2 de 3 pendientes\nconsole.log(pendientes.map((li) => li.textContent));  // ["Llamar al banco", "Estudiar JS"]` },
      ],
      x: [
        mc('¿Qué devuelve `document.querySelector` si no encuentra ningún elemento?', ['null', 'undefined', 'Un array vacío', 'Lanza un error'], 'Por eso conviene comprobar el resultado antes de usarlo.'),
        fill(`const titulo = document.___("#titulo");`, ['querySelector', 'getElement', 'select', 'find'], '`querySelector` acepta cualquier selector CSS.'),
        out(`// <ul id="lista"><li>a</li><li class="hecha">b</li><li class="hecha">c</li></ul>\nconst hechas = document.querySelectorAll("#lista .hecha");\nconsole.log(hechas.length, hechas[0].textContent);`, ['2 b', '3 a', '2 c', '1 b'], 'Solo dos `li` tienen la clase `hecha`, y el primero de ellos contiene "b".'),
        mc('¿En qué se diferencian `textContent` e `innerHTML`?', ['textContent da solo el texto; innerHTML da también las etiquetas', 'Son exactamente iguales', 'innerHTML solo funciona en formularios', 'textContent incluye los comentarios'], 'Para leer o escribir texto sin interpretar HTML, usa `textContent`.'),
        typ('Lee lo que el usuario escribió en el campo', `const correo = document.querySelector("#correo").___;`, 'value', 'El contenido de un `input` está en `value` y siempre es texto.'),
        out(`// <button data-id="42" data-tipo="borrar">X</button>\nconst b = document.querySelector("button");\nconsole.log(b.dataset.id, typeof b.dataset.id);`, ['42 string', '42 number', 'undefined undefined', 'data-id string'], '`dataset` convierte `data-id` en `id` y siempre devuelve texto.'),
        ord('Selecciona todos los párrafos con la clase nota', ['document', '.querySelectorAll(', '"p.nota"', ')'], ['.getElementById(', '"#nota"'], '`querySelectorAll` con el selector CSS `p.nota` devuelve todos los que coinciden.'),
        out(`// <section id="tienda">\n//   <article class="producto" data-precio="12"><h2>Taza</h2></article>\n//   <article class="producto agotado" data-precio="30"><h2>Lámpara</h2></article>\n//   <article class="producto" data-precio="8"><h2>Libreta</h2></article>\n// </section>\nconst productos = [...document.querySelectorAll("#tienda .producto:not(.agotado)")];\nconst total = productos.reduce((s, p) => s + Number(p.dataset.precio), 0);\nconst nombres = productos.map((p) => p.querySelector("h2").textContent);\nconsole.log(productos.length, total, nombres.join("+"));`, ['2 20 Taza+Libreta', '3 50 Taza+Lámpara+Libreta', '2 20 Taza+Lámpara', '2 128 Taza+Libreta'], '`:not(.agotado)` descarta la lámpara. `Number` convierte los precios antes de sumar: 12 + 8 = 20. Sin `Number` se concatenarían.'),
      ],
    },
    // Día 22
    {
      id: 'js-dom-edit',
      t: 'Manipular el DOM',
      d: 'Cambiar texto, crear e insertar elementos, clases, estilos y atributos.',
      guide: [
        { h: 'Cambiar el contenido', p: [
          'Asignar `textContent` sustituye el texto de un elemento. Es la opción segura para mostrar datos que vienen del usuario.',
          '`innerHTML` interpreta el texto como HTML. Nunca lo uses con datos del usuario: alguien podría inyectar un script (ataque XSS).' ],
          code: `const saludo = document.querySelector("#saludo");\nconst nombre = "<img src=x onerror=alert(1)>";\n\nsaludo.textContent = "Hola, " + nombre;   // se muestra tal cual, sin peligro\n// saludo.innerHTML = "Hola, " + nombre;  // ¡ejecutaría código!` },
        { h: 'Crear, insertar y borrar', p: [
          '`document.createElement("li")` crea un elemento que aún no está en la página. Se inserta con `append` (al final), `prepend` (al principio), `before` o `after`.',
          '`elemento.remove()` lo quita de la página. Para muchos elementos, crea un `DocumentFragment` e insértalo de una vez.' ],
          code: `const lista = document.querySelector("#lista");\nconst li = document.createElement("li");\nli.textContent = "Nueva tarea";\nlista.append(li);\n\nconst primero = lista.firstElementChild;\nprimero.remove();` },
        { h: 'Clases y estilos', p: [
          '`classList` maneja las clases: `add`, `remove`, `contains` y `toggle`, que pone la clase si no está y la quita si está. Con un segundo argumento booleano, `toggle` la fuerza.',
          'Cambiar clases y dejar el diseño en el CSS es mejor que tocar `style` directamente. Si lo haces, las propiedades van en camelCase: `style.backgroundColor`.' ],
          code: `const boton = document.querySelector("#menu");\nboton.classList.add("activo");\nboton.classList.toggle("abierto");          // la pone\nboton.classList.toggle("abierto");          // la quita\nboton.classList.toggle("oscuro", true);     // la fuerza\n\nboton.style.backgroundColor = "tomato";\ndocument.documentElement.style.setProperty("--color-principal", "teal");` },
        { h: 'Atributos', p: [
          '`setAttribute(nombre, valor)` y `removeAttribute(nombre)` cambian atributos. Muchos tienen propiedad directa: `img.src`, `a.href`, `input.disabled`.',
          'El atributo `hidden` oculta un elemento sin CSS: `aviso.hidden = true`.' ],
          code: `const foto = document.createElement("img");\nfoto.src = "gato.jpg";\nfoto.alt = "Un gato durmiendo";\nfoto.setAttribute("loading", "lazy");\n\nconst enviar = document.querySelector("#enviar");\nenviar.disabled = true;\ndocument.querySelector("#aviso").hidden = false;` },
        { h: 'Ejemplo real: pintar una lista de tareas desde datos', real: true, p: [
          'Las tareas viven en un array y la lista de la página se vuelve a dibujar a partir de él cada vez que cambia. Es la idea que usan librerías como React.' ],
          code: `const tareas = [\n  { texto: "Comprar pan", hecha: true },\n  { texto: "Estudiar JS", hecha: false },\n];\n\nfunction pintar() {\n  const lista = document.querySelector("#tareas");\n  const fragmento = document.createDocumentFragment();\n  for (const t of tareas) {\n    const li = document.createElement("li");\n    li.textContent = t.texto;\n    li.classList.toggle("hecha", t.hecha);\n    fragmento.append(li);\n  }\n  lista.replaceChildren(fragmento);   // vacía la lista y añade los nuevos\n  document.querySelector("#contador").textContent =\n    tareas.filter((t) => !t.hecha).length + " pendientes";\n}\n\npintar();` },
      ],
      x: [
        fill(`const li = document.___("li");\nli.textContent = "Pan";`, ['createElement', 'newElement', 'create', 'makeElement'], '`createElement` crea el elemento; después hay que insertarlo.'),
        mc('¿Por qué usar `textContent` y no `innerHTML` para mostrar lo que escribe un usuario?', ['innerHTML interpretaría su texto como HTML y podría ejecutar código malicioso', 'textContent es más bonito', 'innerHTML no funciona con textos largos', 'No hay ninguna razón'], 'Es la defensa básica contra los ataques XSS.'),
        out(`const p = document.createElement("p");\np.classList.add("aviso", "grande");\np.classList.toggle("grande");\np.classList.toggle("activo");\nconsole.log(p.className);`, ['aviso activo', 'aviso grande activo', 'aviso', 'activo'], 'El primer `toggle` quita `grande` porque estaba; el segundo añade `activo` porque no estaba.'),
        out(`const ul = document.createElement("ul");\nfor (const t of ["a", "b"]) {\n  const li = document.createElement("li");\n  li.textContent = t;\n  ul.append(li);\n}\nul.prepend(document.createElement("li"));\nconsole.log(ul.children.length, ul.lastElementChild.textContent);`, ['3 b', '2 b', '3 a', '3 '], '`prepend` añade un `li` vacío al principio, así que "b" sigue siendo el último.'),
        typ('Quita el aviso de la página', `document.querySelector(".aviso").___();`, 'remove', '`remove()` saca el elemento del DOM.'),
        out(`const caja = document.createElement("div");\ncaja.style.backgroundColor = "red";\ncaja.style.fontSize = "20px";\nconsole.log(caja.getAttribute("style"));`, ['background-color: red; font-size: 20px;', 'backgroundColor: red; fontSize: 20px', 'null'], 'En JavaScript se escribe en camelCase, pero el atributo `style` guarda los nombres de CSS.'),
        mc('¿Qué hace `elemento.classList.toggle("activo")`?', ['Añade la clase si no está y la quita si está', 'Siempre la añade', 'Siempre la quita', 'Devuelve el número de clases'], 'Con `toggle("activo", true)` se fuerza a añadirla.'),
        out(`const tareas = [{ texto: "Comprar pan", hecha: true }, { texto: "Estudiar <b>JS</b>", hecha: false }];\nconst ul = document.createElement("ul");\nfor (const t of tareas) {\n  const li = document.createElement("li");\n  li.textContent = t.texto;\n  li.classList.toggle("hecha", t.hecha);\n  ul.append(li);\n}\nul.firstElementChild.remove();\nconsole.log(ul.children.length, ul.innerHTML);`, ['1 <li>Estudiar &lt;b&gt;JS&lt;/b&gt;</li>', '1 <li>Estudiar <b>JS</b></li>', '2 <li class="hecha">Comprar pan</li>'], 'Se borra la primera tarea. Como el texto se puso con `textContent`, las etiquetas no se interpretan y en el HTML aparecen escapadas. `toggle` con `false` no añade la clase.'),
      ],
    },
    // Día 23
    {
      id: 'js-events',
      t: 'Eventos',
      d: 'addEventListener, el objeto evento, preventDefault, propagación y delegación.',
      guide: [
        { h: 'Escuchar eventos', p: [
          'Un evento es algo que pasa en la página: un clic, una tecla, un formulario enviado. `elemento.addEventListener("click", funcion)` ejecuta la función cada vez que ocurre.',
          'Eventos habituales: `click`, `input` (cada cambio en un campo), `change`, `submit`, `keydown` y `DOMContentLoaded`. La opción `{ once: true }` hace que el oyente se ejecute una sola vez.' ],
          code: `const boton = document.querySelector("#saludar");\nboton.addEventListener("click", () => {\n  console.log("¡Hola!");\n});\n\nconst buscador = document.querySelector("#buscar");\nbuscador.addEventListener("input", (e) => {\n  console.log("Buscando:", e.target.value);\n});` },
        { h: 'El objeto evento', p: [
          'La función recibe un objeto con información: `type` (el tipo), `target` (el elemento donde ocurrió), `currentTarget` (el que tiene el oyente) y, en teclado, `key`.',
          '`preventDefault()` cancela lo que el navegador haría por defecto, como recargar la página al enviar un formulario o seguir un enlace.' ],
          code: `const form = document.querySelector("#registro");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();   // no recarga la página\n  const correo = form.querySelector("#correo").value;\n  console.log("Enviar", correo);\n});\n\ndocument.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") cerrarModal();\n});` },
        { h: 'Propagación', p: [
          'Un evento empieza en el elemento donde ocurrió y después sube por sus antepasados: es el burbujeo. Un clic en un botón también es un clic en el `div` que lo contiene.',
          '`e.stopPropagation()` detiene la subida. Úsalo con cuidado: otros oyentes de más arriba dejarán de enterarse.' ],
          code: `<!-- <div id="tarjeta"><button id="me-gusta">♥</button></div> -->\ndocument.querySelector("#tarjeta").addEventListener("click", () => {\n  console.log("Abrir tarjeta");\n});\ndocument.querySelector("#me-gusta").addEventListener("click", (e) => {\n  e.stopPropagation();   // el clic no abre la tarjeta\n  console.log("Me gusta");\n});` },
        { h: 'Delegación de eventos', p: [
          'En vez de poner un oyente en cada elemento de una lista, se pone uno solo en el contenedor y se mira con `e.target.closest(...)` qué elemento se pulsó.',
          'Funciona también con los elementos que se añaden después y gasta menos memoria.' ],
          code: `const lista = document.querySelector("#lista");\nlista.addEventListener("click", (e) => {\n  const boton = e.target.closest(".borrar");\n  if (!boton) return;            // clic en otra parte\n  boton.closest("li").remove();\n});` },
        { h: 'Ejemplo real: un formulario de tareas', real: true, p: [
          'Un formulario añade tareas sin recargar la página y la lista usa delegación para marcarlas como hechas, también las que se añadan más tarde.' ],
          code: `const form = document.querySelector("#nueva");\nconst input = form.querySelector("input");\nconst lista = document.querySelector("#tareas");\n\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const texto = input.value.trim();\n  if (!texto) return;\n  const li = document.createElement("li");\n  li.textContent = texto;\n  lista.append(li);\n  input.value = "";\n  input.focus();\n});\n\nlista.addEventListener("click", (e) => {\n  const li = e.target.closest("li");\n  if (li) li.classList.toggle("hecha");\n});` },
      ],
      x: [
        fill(`boton.___("click", () => console.log("¡Hola!"));`, ['addEventListener', 'onEvent', 'listen', 'on'], '`addEventListener(tipo, función)` registra un oyente.'),
        mc('¿Qué hace `e.preventDefault()` en el evento `submit` de un formulario?', ['Evita que el navegador envíe el formulario y recargue la página', 'Borra los campos', 'Detiene la propagación del evento', 'Desactiva el botón'], 'Así puedes validar y enviar los datos con JavaScript.'),
        out(`// <div id="caja"><button id="btn">OK</button></div>\nconst log = [];\ndocument.querySelector("#caja").addEventListener("click", () => log.push("caja"));\ndocument.querySelector("#btn").addEventListener("click", () => log.push("btn"));\ndocument.querySelector("#btn").click();\nconsole.log(log.join(" > "));`, ['btn > caja', 'caja > btn', 'btn', 'caja'], 'El evento empieza en el botón y luego sube al `div`.'),
        out(`// <ul id="menu"><li>Inicio</li><li>Contacto</li></ul>\nconst menu = document.querySelector("#menu");\nmenu.addEventListener("click", (e) => {\n  console.log(e.target.textContent, e.currentTarget.id);\n});\nmenu.children[1].click();`, ['Contacto menu', 'InicioContacto menu', 'Contacto ', 'menu Contacto'], '`target` es el `li` pulsado; `currentTarget` es la lista, que tiene el oyente.'),
        typ('Comprueba si se pulsó la tecla Enter', `input.addEventListener("keydown", (e) => {\n  if (e.___ === "Enter") enviar();\n});`, 'key', '`e.key` contiene el nombre de la tecla.'),
        mc('¿Qué es la delegación de eventos?', ['Poner un solo oyente en el contenedor y averiguar qué hijo se pulsó', 'Pasar un evento a otra página', 'Ejecutar dos oyentes a la vez', 'Cancelar un evento'], 'Funciona incluso con los elementos añadidos después.'),
        out(`// <button>+</button>\nlet n = 0;\nconst b = document.querySelector("button");\nb.addEventListener("click", () => n++, { once: true });\nb.addEventListener("click", () => (n += 10));\nb.click();\nb.click();\nconsole.log(n);`, ['21', '22', '11', '20'], 'El primer oyente solo se ejecuta en el primer clic (+1); el segundo en los dos (+20).'),
        out(`// <ul id="lista"><li><button class="borrar">x</button> Pan</li><li><button class="borrar">x</button> Leche</li></ul>\nconst lista = document.querySelector("#lista");\nconst log = [];\nlista.addEventListener("click", (e) => {\n  const boton = e.target.closest(".borrar");\n  if (!boton) return log.push("fuera");\n  boton.closest("li").remove();\n  log.push("borrado");\n});\nlista.querySelector("li").click();\nlista.querySelector(".borrar").click();\nconsole.log(log.join(","), lista.children.length, lista.textContent.trim());`, ['fuera,borrado 1 x Leche', 'borrado,borrado 0', 'fuera,borrado 1 Leche', 'borrado,fuera 1 x Pan'], 'El primer clic es en el `li`, no en un botón: `closest` devuelve `null`. El segundo pulsa el botón de "Pan" y borra su `li`. Queda "x Leche", porque el botón sigue dentro.'),
      ],
    },
    // Día 24
    {
      id: 'js-async',
      t: 'Async/await y fetch',
      d: 'Funciones async, await, errores con try...catch y peticiones a APIs con fetch.',
      guide: [
        { h: 'async y await', p: [
          'Una función `async` siempre devuelve una promesa. Dentro, `await` espera a que una promesa se cumpla y devuelve su valor, como si el código fuera síncrono.',
          '`await` solo pausa esa función: el resto del programa sigue funcionando. En los módulos también se puede usar `await` fuera de las funciones.' ],
          code: `const esperar = (ms) => new Promise((r) => setTimeout(r, ms));\n\nasync function cuentaAtras() {\n  for (let i = 3; i > 0; i--) {\n    console.log(i);\n    await esperar(1000);\n  }\n  return "¡Despegue!";\n}\n\ncuentaAtras().then(console.log);  // 3, 2, 1, ¡Despegue!` },
        { h: 'Errores con try...catch', p: [
          'Si la promesa que se espera se rechaza, `await` lanza el error. Se captura con un `try...catch` normal, igual que los errores síncronos.',
          'Así el código asíncrono se lee de arriba abajo, sin cadenas de `then`.' ],
          code: `async function cargarPerfil(id) {\n  try {\n    const usuario = await pedirUsuario(id);\n    const pedidos = await pedirPedidos(usuario.id);\n    return { usuario, pedidos };\n  } catch (error) {\n    console.log("No se pudo cargar:", error.message);\n    return null;\n  }\n}` },
        { h: 'fetch: pedir datos a una API', p: [
          '`fetch(url)` hace una petición HTTP y devuelve una promesa con la respuesta. `respuesta.json()` lee el cuerpo y lo convierte de JSON, y también devuelve una promesa.',
          'Ojo: `fetch` solo se rechaza si falla la red. Un 404 o un 500 cumplen la promesa, así que hay que comprobar `respuesta.ok`.' ],
          code: `async function buscarUsuario(id) {\n  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);\n  if (!res.ok) throw new Error("Error HTTP " + res.status);\n  const usuario = await res.json();\n  return usuario.name;\n}\n\nbuscarUsuario(1).then(console.log);  // Leanne Graham` },
        { h: 'Enviar datos y peticiones en paralelo', p: [
          'Para enviar datos se pasa un segundo argumento con `method`, `headers` y `body`. El cuerpo se convierte a texto con `JSON.stringify`.',
          'Dos `await` seguidos esperan uno detrás de otro. Si las peticiones no dependen entre sí, lánzalas a la vez con `await Promise.all([...])`.' ],
          code: `const res = await fetch("/api/pedidos", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ producto: "Taza", uds: 2 }),\n});\n\n// En paralelo: tarda lo que la más lenta\nconst [usuarios, productos] = await Promise.all([\n  fetch("/api/usuarios").then((r) => r.json()),\n  fetch("/api/productos").then((r) => r.json()),\n]);` },
        { h: 'Ejemplo real: buscador con API', real: true, p: [
          'Un buscador muestra los usuarios de una API cuyo nombre contiene el texto escrito. Avisa mientras carga y muestra un mensaje claro si algo falla.' ],
          code: `const input = document.querySelector("#buscar");\nconst resultados = document.querySelector("#resultados");\n\nasync function buscar(texto) {\n  resultados.textContent = "Cargando...";\n  try {\n    const res = await fetch("https://jsonplaceholder.typicode.com/users");\n    if (!res.ok) throw new Error("Error HTTP " + res.status);\n    const usuarios = await res.json();\n    const encontrados = usuarios.filter((u) =>\n      u.name.toLowerCase().includes(texto.toLowerCase())\n    );\n    resultados.textContent = encontrados.map((u) => u.name).join(", ") || "Sin resultados";\n  } catch (error) {\n    resultados.textContent = "No se pudo buscar: " + error.message;\n  }\n}\n\ninput.addEventListener("change", () => buscar(input.value));` },
      ],
      x: [
        out(`async function f() {\n  return 5;\n}\nconsole.log(f() instanceof Promise);`, ['true', 'false', '5', 'undefined'], 'Una función `async` siempre devuelve una promesa, aunque devuelva un valor normal.'),
        out(`async function tarea() {\n  console.log("B");\n  await null;\n  console.log("D");\n}\nconsole.log("A");\ntarea();\nconsole.log("C");`, ['A\nB\nC\nD', 'A\nB\nD\nC', 'A\nC\nB\nD', 'B\nA\nC\nD'], 'La función se ejecuta hasta el primer `await`; entonces cede el control y continúa cuando termina el código síncrono.'),
        fill(`async function cargar() {\n  const res = ___ fetch("/api/productos");\n  return res.json();\n}`, ['await', 'async', 'then', 'wait'], '`await` espera a que la promesa de `fetch` se cumpla.'),
        mc('Si el servidor responde con un error 404, ¿qué hace la promesa de `fetch`?', ['Se cumple; hay que comprobar respuesta.ok', 'Se rechaza siempre', 'Devuelve null', 'Lanza un SyntaxError'], '`fetch` solo se rechaza cuando falla la red.'),
        typ('Convierte el cuerpo de la respuesta de JSON a objeto', `const res = await fetch("/api/usuario");\nconst datos = await res.___();`, 'json', '`res.json()` lee el cuerpo y lo convierte; también hay que esperarlo.'),
        out(`const fallar = () => Promise.reject(new Error("sin red"));\nasync function cargar() {\n  try {\n    await fallar();\n    return "ok";\n  } catch (e) {\n    return "error: " + e.message;\n  }\n}\ncargar().then((r) => console.log(r));`, ['error: sin red', 'ok', 'sin red', 'undefined'], 'El `await` de una promesa rechazada lanza el error, que se captura en el `catch`.'),
        mc('¿Cómo esperas dos peticiones que no dependen entre sí sin perder tiempo?', ['await Promise.all([pedirA(), pedirB()])', 'await pedirA(); await pedirB();', 'pedirA().await + pedirB().await', 'async Promise.race([pedirA()])'], 'Con dos `await` seguidos, la segunda petición no empieza hasta que acaba la primera.'),
        out(`const log = [];\nconst esperar = (ms, v) => new Promise((r) => setTimeout(() => { log.push(v); r(v); }, ms));\nasync function secuencial() {\n  const a = await esperar(30, "s1");\n  const b = await esperar(30, "s2");\n  return a + b;\n}\nasync function paralelo() {\n  const [a, b] = await Promise.all([esperar(40, "p1"), esperar(10, "p2")]);\n  return a + b;\n}\nPromise.all([secuencial(), paralelo()]).then(([s, p]) => console.log(log.join(" "), "|", s, p));`, ['p2 s1 p1 s2 | s1s2 p1p2', 's1 s2 p1 p2 | s1s2 p1p2', 'p2 s1 p1 s2 | s1s2 p2p1', 'p2 p1 s1 s2 | s1s2 p1p2'], 'p2 termina a los 10 ms, s1 a los 30 y p1 a los 40. s2 no empieza hasta que acaba s1, así que termina a los 60. `Promise.all` devuelve los valores en el orden en que se pidieron, no en el que terminaron.'),
      ],
    },
    // Día 25
    {
      id: 'js-modules',
      t: 'Módulos ES',
      d: 'export, import, exportaciones por defecto, type="module" e import dinámico.',
      guide: [
        { h: 'Por qué usar módulos', p: [
          'Un módulo es un archivo con su propio ámbito: sus variables no se mezclan con las de otros archivos. Solo comparte lo que exporta.',
          'Dividir el código en módulos pequeños (precios, carrito, interfaz...) lo hace más fácil de entender, probar y reutilizar.' ] },
        { h: 'Exportaciones con nombre', p: [
          '`export` delante de una declaración la hace visible desde fuera. Un módulo puede tener tantas exportaciones con nombre como quiera.',
          'Se importan entre llaves y con el mismo nombre: `import { sumar } from "./mates.js"`. Con `as` puedes renombrarlas, y con `import * as M` las recibes todas en un objeto.' ],
          code: `// mates.js\nexport const PI = 3.14159;\nexport function sumar(a, b) {\n  return a + b;\n}\n\n// main.js\nimport { sumar, PI as pi } from "./mates.js";\nimport * as M from "./mates.js";\nconsole.log(sumar(2, 3), pi, M.PI);  // 5 3.14159 3.14159` },
        { h: 'Exportación por defecto', p: [
          'Cada módulo puede tener una sola exportación por defecto, que suele ser lo principal del archivo. Se importa sin llaves y con el nombre que quieras.',
          'Se pueden combinar: `import Carrito, { formatear } from "./carrito.js"`.' ],
          code: `// carrito.js\nexport default class Carrito {\n  lineas = [];\n}\nexport const formatear = (n) => n.toFixed(2) + " €";\n\n// main.js\nimport MiCarrito, { formatear } from "./carrito.js";\nconst c = new MiCarrito();\nconsole.log(formatear(3.5));  // 3.50 €` },
        { h: 'Usarlos en el navegador', p: [
          'El script principal se carga con `<script type="module" src="main.js">`. Los módulos se ejecutan en modo estricto, se aplazan como con `defer` y se cargan una sola vez aunque se importen varias veces.',
          'En el navegador las rutas llevan extensión (`./mates.js`) y la página debe servirse desde un servidor, no abrirse como archivo. `await import("./grafico.js")` carga un módulo solo cuando hace falta.' ],
          code: `<script type="module" src="main.js"></script>\n\n// main.js: carga el editor solo si el usuario lo abre\ndocument.querySelector("#editar").addEventListener("click", async () => {\n  const { abrirEditor } = await import("./editor.js");\n  abrirEditor();\n});` },
        { h: 'Ejemplo real: una tienda dividida en módulos', real: true, p: [
          'La tienda separa los cálculos de precios, el carrito y la interfaz. Los precios se pueden probar sin navegador y la interfaz no sabe cómo se calcula el IVA.' ],
          code: `// precios.js\nexport const IVA = 0.21;\nexport const conIva = (n) => n * (1 + IVA);\nexport const formatear = (n) => n.toFixed(2) + " €";\n\n// carrito.js\nimport { conIva } from "./precios.js";\nexport default function total(lineas) {\n  return conIva(lineas.reduce((s, l) => s + l.precio * l.uds, 0));\n}\n\n// main.js\nimport total from "./carrito.js";\nimport { formatear } from "./precios.js";\nconst lineas = [{ precio: 10, uds: 2 }];\ndocument.querySelector("#total").textContent = formatear(total(lineas));  // 24.20 €` },
      ],
      x: [
        fill(`// mates.js\n___ function sumar(a, b) {\n  return a + b;\n}`, ['export', 'public', 'module', 'exports'], '`export` hace la función visible para otros módulos.'),
        mc('¿Qué recibe `import calcular from "./precios.js"`?', ['La exportación por defecto de precios.js', 'Una exportación llamada calcular', 'Todas las exportaciones', 'Nada: falta poner llaves'], 'Sin llaves se importa la exportación por defecto, con el nombre que elijas.'),
        typ('Importa formatear con el nombre fmt', `import { formatear ___ fmt } from "./utils.js";`, 'as', '`as` renombra lo que se importa.'),
        mc('¿Qué necesita la etiqueta script para cargar un módulo en el navegador?', ['type="module"', 'module="true"', 'async', 'lang="es6"'], 'Además, la página debe servirse desde un servidor.'),
        ord('Importa precio e iva desde tienda.js', ['import', '{ precio, iva }', 'from', '"./tienda.js";'], ['require(', 'export'], 'Las exportaciones con nombre se importan entre llaves.'),
        mc('¿Cuántas exportaciones por defecto puede tener un módulo?', ['Una como máximo', 'Ninguna', 'Dos', 'Todas las que quiera'], 'Las exportaciones con nombre, en cambio, no tienen límite.'),
        fill(`<script ___="module" src="main.js"></script>`, ['type', 'lang', 'kind', 'mode'], 'Sin `type="module"`, el navegador no permite `import` ni `export`.'),
        out(`// contador.js\nlet cuenta = 0;\nexport const sumar = () => ++cuenta;\nexport default cuenta;\n\n// main.js\nimport valor, { sumar } from "./contador.js";\nimport * as C from "./contador.js";\nsumar();\nsumar();\nconsole.log(valor, C.default, typeof C.sumar);`, ['0 0 function', '2 2 function', '0 2 function', '2 0 undefined'], '`export default cuenta` exporta el valor que tenía la variable en ese momento: 0. Llamar a `sumar` cambia `cuenta`, pero no lo exportado por defecto. `C.sumar` es la función.'),
      ],
    },
    // Día 26
    {
      id: 'js-iterators',
      t: 'Iteradores y generadores',
      d: 'El protocolo iterable, Symbol.iterator, function*, yield y next().',
      guide: [
        { h: 'Iterables e iteradores', p: [
          'Un iterable es cualquier cosa que se puede recorrer con `for...of` o expandir con `...`: arrays, textos, Map, Set. Los objetos normales no lo son.',
          'Por dentro, un iterable tiene un método `[Symbol.iterator]()` que devuelve un iterador. El iterador tiene `next()`, que devuelve `{ value, done }` en cada llamada hasta que `done` es `true`.' ],
          code: `const it = ["a", "b"][Symbol.iterator]();\nconsole.log(it.next());  // { value: "a", done: false }\nconsole.log(it.next());  // { value: "b", done: false }\nconsole.log(it.next());  // { value: undefined, done: true }\n\nfor (const x of { a: 1 }) {}  // TypeError: no es iterable` },
        { h: 'Generadores', p: [
          'Una función generadora se declara con `function*`. Al llamarla no se ejecuta: devuelve un iterador. Cada `next()` la ejecuta hasta el siguiente `yield`, que entrega un valor y la pausa.',
          'El valor del `return` final aparece con `done: true`, así que `for...of` y el spread lo ignoran.' ],
          code: `function* semaforo() {\n  yield "verde";\n  yield "ámbar";\n  yield "rojo";\n}\n\nconst s = semaforo();\nconsole.log(s.next().value);  // verde\nconsole.log([...semaforo()]); // ["verde", "ámbar", "rojo"]` },
        { h: 'Secuencias perezosas e infinitas', p: [
          'Un generador calcula cada valor solo cuando se pide. Por eso puede representar secuencias infinitas sin colgar el programa, siempre que solo se pidan algunos valores.',
          '`next(valor)` envía un valor al generador: es lo que devuelve el `yield` en el que estaba pausado.' ],
          code: `function* ids(prefijo) {\n  let n = 1;\n  while (true) yield prefijo + "-" + n++;\n}\n\nconst pedidos = ids("PED");\nconsole.log(pedidos.next().value);  // PED-1\nconsole.log(pedidos.next().value);  // PED-2` },
        { h: 'Hacer iterables tus clases', p: [
          'Si una clase define `*[Symbol.iterator]()`, sus objetos funcionan con `for...of`, el spread y la desestructuración.',
          '`yield*` delega en otro iterable y entrega todos sus valores uno a uno.' ],
          code: `class Playlist {\n  constructor(...canciones) {\n    this.canciones = canciones;\n  }\n  *[Symbol.iterator]() {\n    yield* this.canciones;\n  }\n}\n\nconst lista = new Playlist("Intro", "Tema 1", "Final");\nfor (const c of lista) console.log(c);\nconst [primera] = lista;\nconsole.log(primera);  // Intro` },
        { h: 'Ejemplo real: leer resultados por páginas', real: true, p: [
          'Una API devuelve los productos de 2 en 2. Un generador oculta la paginación: quien lo usa recorre los productos uno a uno y solo se piden las páginas que hacen falta.' ],
          code: `const catalogo = ["Taza", "Libreta", "Lápiz", "Mochila", "Agenda"];\nfunction pedirPagina(n) {           // simula una API\n  return catalogo.slice(n * 2, n * 2 + 2);\n}\n\nfunction* todosLosProductos() {\n  let pagina = 0;\n  while (true) {\n    const items = pedirPagina(pagina++);\n    if (items.length === 0) return;\n    console.log("(página " + pagina + ")");\n    yield* items;\n  }\n}\n\nfor (const p of todosLosProductos()) {\n  if (p === "Lápiz") break;   // la página 3 nunca se pide\n  console.log(p);\n}` },
      ],
      x: [
        out(`const it = [10, 20][Symbol.iterator]();\nconsole.log(it.next().value, it.next().value, it.next().done);`, ['10 20 true', '10 20 false', '10 10 false', 'undefined undefined true'], 'Cada `next()` avanza una posición; tras el último elemento, `done` es `true`.'),
        fill(`function___ contar() {\n  yield 1;\n  yield 2;\n}`, ['*', '&', '#', '!'], 'Las funciones generadoras se declaran con `function*`.'),
        out(`function* g() {\n  yield "a";\n  yield "b";\n  return "c";\n}\nconsole.log([...g()]);`, ['["a", "b"]', '["a", "b", "c"]', '["c"]', '[]'], 'El valor del `return` llega con `done: true` y el spread lo descarta.'),
        mc('¿Qué pasa al ejecutar `for (const x of { a: 1 }) {}`?', ['Lanza TypeError: los objetos normales no son iterables', 'Recorre las claves', 'Recorre los valores', 'No hace nada'], 'Para recorrer un objeto usa `Object.keys`, `Object.values` u `Object.entries`.'),
        out(`function* naturales() {\n  let n = 1;\n  while (true) yield n++;\n}\nconst it = naturales();\nit.next();\nconsole.log(it.next().value, it.next().value);`, ['2 3', '1 2', '3 4', 'El programa se cuelga'], 'El bucle infinito no es un problema: el generador solo avanza cuando se le pide. El primer valor (1) ya se consumió.'),
        typ('Entrega cada número par', `function* pares() {\n  for (let i = 0; i < 6; i += 2) ___ i;\n}`, 'yield', '`yield` entrega el valor y pausa el generador hasta el siguiente `next()`.'),
        out(`function* charla() {\n  const nombre = yield "¿Cómo te llamas?";\n  yield "Hola, " + nombre;\n}\nconst c = charla();\nconsole.log(c.next().value);\nconsole.log(c.next("Ana").value);`, ['¿Cómo te llamas?\nHola, Ana', '¿Cómo te llamas?\nHola, undefined', 'Hola, Ana', '¿Cómo te llamas?\n¿Cómo te llamas?'], 'El valor pasado al segundo `next` es lo que devuelve el primer `yield`.'),
        out(`class Rango {\n  constructor(desde, hasta, paso = 1) {\n    Object.assign(this, { desde, hasta, paso });\n  }\n  *[Symbol.iterator]() {\n    for (let i = this.desde; i <= this.hasta; i += this.paso) yield i;\n  }\n}\nfunction* tomar(iterable, n) {\n  for (const x of iterable) {\n    if (n-- <= 0) return;\n    yield x;\n  }\n}\nconst r = new Rango(1, 10, 3);\nconsole.log([...r].join(","), [...tomar(r, 2)].join(","), Math.max(...r));`, ['1,4,7,10 1,4 10', '1,4,7 1,4 7', '1,4,7,10 1,4,7 10', '1,3,6,9 1,3 9'], 'De 1 a 10 de 3 en 3: 1, 4, 7 y 10. `tomar` se detiene tras dos valores. Cada spread pide un iterador nuevo, así que el rango se puede recorrer varias veces.'),
      ],
    },
    // Día 27
    {
      id: 'js-node',
      t: 'Node.js',
      d: 'JavaScript en el servidor: process, módulos de Node, npm y Express.',
      guide: [
        { h: 'Qué es Node.js', p: [
          'Node.js ejecuta JavaScript fuera del navegador, con el mismo motor V8 de Chrome. Sirve para servidores, herramientas de línea de comandos y scripts.',
          'En Node no existen `document` ni `window`, pero hay otras cosas: `process` (argumentos, variables de entorno), acceso a archivos, red y más. Se ejecuta con `node archivo.js`.' ],
          code: `// saludo.js → node saludo.js Ana\nconst nombre = process.argv[2] ?? "mundo";\nconsole.log("Hola, " + nombre);          // Hola, Ana\nconsole.log(process.env.NODE_ENV);       // la variable de entorno, si existe` },
        { h: 'Módulos de Node', p: [
          'Node trae módulos para casi todo: `node:fs/promises` para archivos, `node:path` para rutas, `node:http` para servidores. Se importan con el prefijo `node:`.',
          'Con `"type": "module"` en `package.json` se usa `import`. El sistema antiguo, CommonJS, usa `require` y `module.exports`; lo verás en mucho código existente.' ],
          code: `import { readFile, writeFile } from "node:fs/promises";\nimport path from "node:path";\n\nconst ruta = path.join("datos", "notas.json");\nconst notas = JSON.parse(await readFile(ruta, "utf8"));\nnotas.push({ alumno: "Eva", nota: 9 });\nawait writeFile(ruta, JSON.stringify(notas, null, 2));\nconsole.log(path.extname(ruta));  // .json` },
        { h: 'npm y package.json', p: [
          'npm es el gestor de paquetes de Node. `npm init -y` crea `package.json`, que describe el proyecto, sus dependencias y sus scripts.',
          '`npm install express` descarga el paquete en `node_modules` y lo anota en `package.json`. `package-lock.json` fija las versiones exactas. `node_modules` no se sube a Git: se recrea con `npm install`.' ],
          code: `{\n  "name": "mi-api",\n  "type": "module",\n  "scripts": {\n    "start": "node server.js",\n    "dev": "node --watch server.js",\n    "test": "vitest"\n  },\n  "dependencies": {\n    "express": "^4.19.2"\n  }\n}` },
        { h: 'Un servidor con Express', p: [
          'Express es el framework más usado para crear servidores web con Node. Cada ruta asocia un método HTTP y una URL con una función que recibe la petición (`req`) y la respuesta (`res`).',
          '`res.json()` envía datos en JSON y `res.status(código)` fija el código HTTP: 200 bien, 201 creado, 400 petición incorrecta, 404 no encontrado.' ],
          code: `import express from "express";\n\nconst app = express();\napp.use(express.json());   // para leer cuerpos JSON\n\napp.get("/api/hola", (req, res) => {\n  res.json({ mensaje: "Hola desde Node" });\n});\n\napp.listen(3000, () => console.log("Servidor en http://localhost:3000"));` },
        { h: 'Ejemplo real: una API de tareas', real: true, p: [
          'Una pequeña API guarda tareas en memoria. Valida los datos que llegan y responde con los códigos HTTP correctos, que el frontal puede pedir con `fetch`.' ],
          code: `import express from "express";\n\nconst app = express();\napp.use(express.json());\nconst tareas = [];\n\napp.get("/api/tareas", (req, res) => res.json(tareas));\n\napp.post("/api/tareas", (req, res) => {\n  const texto = req.body.texto?.trim();\n  if (!texto) return res.status(400).json({ error: "Falta el texto" });\n  const tarea = { id: tareas.length + 1, texto, hecha: false };\n  tareas.push(tarea);\n  res.status(201).json(tarea);\n});\n\napp.delete("/api/tareas/:id", (req, res) => {\n  const i = tareas.findIndex((t) => t.id === Number(req.params.id));\n  if (i === -1) return res.status(404).json({ error: "No existe" });\n  tareas.splice(i, 1);\n  res.status(204).end();\n});\n\napp.listen(3000);` },
      ],
      x: [
        mc('¿Qué de esto NO existe en Node.js?', ['document', 'console', 'setTimeout', 'process'], 'Node no tiene página que mostrar, así que no hay DOM.'),
        fill(`import { readFile } from "node:___/promises";`, ['fs', 'file', 'os', 'path'], '`fs` (file system) es el módulo para trabajar con archivos.'),
        out(`// Terminal: node saludo.js Ana 30\nconst [, , nombre, edad] = process.argv;\nconsole.log(nombre, typeof edad);`, ['Ana string', 'Ana number', 'node string', 'saludo.js Ana'], 'Las dos primeras posiciones son la ruta de Node y la del script. Los argumentos siempre llegan como texto.'),
        mc('¿Qué archivo describe las dependencias y los scripts de un proyecto?', ['package.json', 'node_modules', 'index.html', '.gitignore'], '`node_modules` contiene los paquetes descargados y no se sube a Git.'),
        typ('Instala el paquete express', `npm ___ express`, ['install', 'i'], '`npm install` (o `npm i`) descarga el paquete y lo añade a `package.json`.'),
        out(`import path from "node:path";\nconsole.log(path.extname("informe.final.pdf"), path.basename("/fotos/gato.jpg", ".jpg"));`, ['.pdf gato', '.final.pdf gato', 'pdf gato.jpg', '.pdf /fotos/gato'], '`extname` toma solo la última extensión; `basename` quita la carpeta y, si se indica, la extensión.'),
        ord('Crea una ruta GET que responda con JSON', ['app.get(', '"/api/hola",', '(req, res) =>', 'res.json({ ok: true })', ');'], ['app.listen(', 'document.'], 'Método, ruta y la función que recibe la petición y la respuesta.'),
        mc('El servidor recibe tres peticiones seguidas: `POST {"texto":"pan"}`, `POST {}` y `POST {"texto":"leche"}`. ¿Qué códigos devuelve y qué id tiene la última tarea?', ['201, 400 y 201; id 2', '201, 400 y 201; id 3', '200, 400 y 200; id 2', '201, 201 y 201; id 3'], 'La petición sin texto se rechaza con 400 y no se guarda, así que la tarea "leche" es la segunda: id 2. Crear un recurso responde 201.', `const tareas = [];\napp.post("/tareas", (req, res) => {\n  if (!req.body.texto) return res.status(400).json({ error: "Falta texto" });\n  const tarea = { id: tareas.length + 1, texto: req.body.texto };\n  tareas.push(tarea);\n  res.status(201).json(tarea);\n});`),
      ],
    },
    // Día 28
    {
      id: 'js-testing',
      t: 'Testing',
      d: 'Tests automáticos con Vitest o Jest: test, expect, casos límite y mocks.',
      guide: [
        { h: 'Por qué escribir tests', p: [
          'Un test es código que comprueba que otro código funciona. Se ejecuta en segundos y avisa si un cambio rompe algo que antes iba bien.',
          'Las herramientas más usadas son Vitest y Jest, casi idénticas. Se instalan con `npm install --save-dev vitest` y se ejecutan con `npm test`.' ] },
        { h: 'test y expect', p: [
          '`test("descripción", () => { ... })` define un caso. Dentro, `expect(valor)` con un comparador comprueba el resultado: `toBe` compara con `===`, `toEqual` compara el contenido de objetos y arrays.',
          '`describe` agrupa tests relacionados. Los archivos suelen llamarse `algo.test.js`.' ],
          code: `// precios.test.js\nimport { describe, test, expect } from "vitest";\nimport { conIva, aplicarDescuento } from "./precios.js";\n\ndescribe("precios", () => {\n  test("añade el 21 % de IVA", () => {\n    expect(conIva(100)).toBe(121);\n  });\n  test("devuelve un objeto nuevo con el descuento", () => {\n    expect(aplicarDescuento({ precio: 50 }, 0.1)).toEqual({ precio: 45 });\n  });\n});` },
        { h: 'Casos límite y errores', p: [
          'No pruebes solo el caso feliz: prueba listas vacías, cero, negativos, textos raros. Ahí se esconden los errores.',
          'Para comprobar que algo lanza un error, se pasa una función: `expect(() => dividir(1, 0)).toThrow()`. Con números decimales usa `toBeCloseTo`.' ],
          code: `test("lista vacía da 0", () => {\n  expect(media([])).toBe(0);\n});\ntest("no permite dividir entre cero", () => {\n  expect(() => dividir(1, 0)).toThrow("entre cero");\n});\ntest("0.1 + 0.2", () => {\n  expect(0.1 + 0.2).toBeCloseTo(0.3);\n});` },
        { h: 'Mocks y TDD', p: [
          'Un mock sustituye una dependencia (enviar un correo, llamar a una API) por una función falsa que registra cómo se la llamó. `vi.fn()` en Vitest o `jest.fn()` en Jest.',
          'TDD (desarrollo guiado por tests): primero escribes un test que falla, luego el código mínimo para que pase y después mejoras el código con los tests como red de seguridad.' ],
          code: `import { vi, test, expect } from "vitest";\n\ntest("avisa a los clientes con deuda", () => {\n  const enviar = vi.fn();\n  avisarMorosos([{ correo: "a@x.com", deuda: 20 }, { correo: "b@x.com", deuda: 0 }], enviar);\n  expect(enviar).toHaveBeenCalledTimes(1);\n  expect(enviar).toHaveBeenCalledWith("a@x.com", expect.any(String));\n});` },
        { h: 'Ejemplo real: proteger el cálculo de un carrito', real: true, p: [
          'Antes de cambiar las reglas de envío, una tienda escribe tests de la función actual. Si alguien rompe un caso, `npm test` lo dice antes de que llegue a los clientes.' ],
          code: `// carrito.js\nexport function total(lineas, envioGratisDesde = 50) {\n  const subtotal = lineas.reduce((s, l) => s + l.precio * l.uds, 0);\n  return subtotal >= envioGratisDesde || subtotal === 0 ? subtotal : subtotal + 4.99;\n}\n\n// carrito.test.js\nimport { test, expect } from "vitest";\nimport { total } from "./carrito.js";\n\ntest("carrito vacío cuesta 0", () => expect(total([])).toBe(0));\ntest("cobra envío por debajo de 50", () =>\n  expect(total([{ precio: 10, uds: 2 }])).toBeCloseTo(24.99));\ntest("envío gratis desde 50", () =>\n  expect(total([{ precio: 25, uds: 2 }])).toBe(50));\n\n// $ npm test\n// ✓ carrito.test.js (3 tests)` },
      ],
      x: [
        mc('¿En qué se diferencian `toBe` y `toEqual`?', ['toBe compara con ===; toEqual compara el contenido de objetos y arrays', 'Son iguales', 'toEqual solo sirve para números', 'toBe compara el tipo y toEqual el valor'], 'Dos objetos con el mismo contenido no son `===`, así que para ellos se usa `toEqual`.'),
        fill(`test("suma", () => {\n  expect(sumar(2, 3)).___(5);\n});`, ['toBe', 'equals', 'is', 'toBeEqual'], '`toBe` comprueba que el valor es exactamente el esperado.'),
        out(`const resultados = [];\nfunction test(nombre, fn) {\n  try {\n    fn();\n    resultados.push("✓ " + nombre);\n  } catch {\n    resultados.push("✗ " + nombre);\n  }\n}\nconst expect = (real) => ({\n  toBe: (esperado) => {\n    if (real !== esperado) throw new Error();\n  },\n});\nconst doble = (n) => n * 2;\ntest("doble de 2", () => expect(doble(2)).toBe(4));\ntest("doble de -1", () => expect(doble(-1)).toBe(2));\nconsole.log(resultados.join(" | "));`, ['✓ doble de 2 | ✗ doble de -1', '✓ doble de 2 | ✓ doble de -1', '✗ doble de 2 | ✗ doble de -1', '✓ doble de 2'], 'Así funciona un test por dentro: `expect` lanza un error si no coincide y `test` lo captura. `doble(-1)` es -2, no 2.'),
        out(`const a = { x: 1 };\nconsole.log(a === { x: 1 }, JSON.stringify(a) === JSON.stringify({ x: 1 }));`, ['false true', 'true true', 'false false', 'true false'], 'Son dos objetos distintos aunque tengan el mismo contenido. Por eso existe `toEqual`.'),
        typ('Comprueba que la función lanza un error', `expect(() => dividir(1, 0)).___("entre cero");`, 'toThrow', 'Se pasa una función para que `expect` pueda ejecutarla y capturar el error.'),
        mc('¿Cuál es el orden de TDD?', ['Escribir un test que falla, hacer que pase y mejorar el código', 'Escribir el código, probarlo a mano y escribir tests', 'Escribir todos los tests al final', 'Mejorar el código y luego escribir tests'], 'Se resume como rojo, verde, refactorizar.'),
        ord('Escribe un test que compruebe que sumar(2, 3) es 5', ['test("suma dos números",', '() => {', 'expect(sumar(2, 3))', '.toBe(5);', '});'], ['assert(', 'console.log('], 'Descripción, función con el `expect` y el comparador.'),
        out(`function fn() {\n  const f = (...args) => {\n    f.llamadas.push(args);\n  };\n  f.llamadas = [];\n  return f;\n}\nfunction avisarMorosos(clientes, enviar) {\n  let n = 0;\n  for (const c of clientes) {\n    if (c.deuda > 0) {\n      enviar(c.correo, "Debes " + c.deuda + " €");\n      n++;\n    }\n  }\n  return n;\n}\nconst enviar = fn();\nconst total = avisarMorosos([{ correo: "a@x.com", deuda: 20 }, { correo: "b@x.com", deuda: 0 }, { correo: "c@x.com", deuda: 5 }], enviar);\nconsole.log(total, enviar.llamadas.length, enviar.llamadas[1][0]);`, ['2 2 c@x.com', '3 3 b@x.com', '2 2 b@x.com', '2 3 c@x.com'], 'Es un mock casero: guarda los argumentos de cada llamada. Solo dos clientes deben dinero, y la segunda llamada fue para c@x.com.'),
      ],
    },
    // Día 29
    {
      id: 'js-performance',
      t: 'Rendimiento y patrones',
      d: 'Medir, debounce, throttle, memoization, el DOM eficiente y Web Workers.',
      guide: [
        { h: 'Primero, medir', p: [
          'No optimices a ciegas: mide dónde se va el tiempo. `performance.now()` da una marca de tiempo precisa en milisegundos y la pestaña Rendimiento de las DevTools muestra qué tarda.',
          'Casi siempre el problema está en pocos sitios: un bucle que se repite demasiado, peticiones de más o cambios en el DOM uno a uno.' ],
          code: `const inicio = performance.now();\nconst ordenados = [...datos].sort((a, b) => a.precio - b.precio);\nconsole.log("Ordenar:", (performance.now() - inicio).toFixed(1), "ms");` },
        { h: 'Debounce y throttle', p: [
          'Debounce espera a que una acción deje de repetirse durante un tiempo antes de ejecutar la función: ideal para buscar mientras el usuario escribe.',
          'Throttle ejecuta la función como mucho una vez cada cierto tiempo, aunque el evento se dispare cientos de veces: ideal para `scroll` o `resize`.' ],
          code: `function debounce(fn, ms) {\n  let temporizador;\n  return (...args) => {\n    clearTimeout(temporizador);\n    temporizador = setTimeout(() => fn(...args), ms);\n  };\n}\n\nfunction throttle(fn, ms) {\n  let ultima = 0;\n  return (...args) => {\n    const ahora = Date.now();\n    if (ahora - ultima >= ms) {\n      ultima = ahora;\n      fn(...args);\n    }\n  };\n}\n\nwindow.addEventListener("scroll", throttle(() => console.log(scrollY), 100));` },
        { h: 'Memoization', p: [
          'Memoizar es guardar el resultado de una función para no recalcularlo cuando se repiten los mismos argumentos. Funciona con funciones puras: mismo argumento, mismo resultado.',
          'Un `Map` como caché es la forma más simple. Cuidado con la memoria si los argumentos posibles son infinitos.' ],
          code: `function memo(fn) {\n  const cache = new Map();\n  return (n) => {\n    if (!cache.has(n)) cache.set(n, fn(n));\n    return cache.get(n);\n  };\n}\n\nconst lento = (n) => { for (let i = 0; i < 1e8; i++); return n * 2; };\nconst rapido = memo(lento);\nrapido(21);  // tarda\nrapido(21);  // instantáneo: sale de la caché` },
        { h: 'DOM eficiente y Web Workers', p: [
          'Cada cambio en el DOM puede obligar al navegador a recalcular el diseño. Agrupa los cambios: crea los elementos en un `DocumentFragment` y añádelos de una vez, o cambia una clase en vez de muchos estilos.',
          'Un cálculo pesado bloquea la página. Un Web Worker lo ejecuta en otro hilo y se comunica con mensajes: `postMessage` para enviar y el evento `message` para recibir. `loading="lazy"` en las imágenes retrasa su carga hasta que se ven.' ],
          code: `// main.js\nconst worker = new Worker("primos.js");\nworker.postMessage(5_000_000);\nworker.addEventListener("message", (e) => {\n  console.log("Primos encontrados:", e.data);\n});\n\n// primos.js (otro hilo: la página sigue respondiendo)\nself.addEventListener("message", (e) => {\n  let cuenta = 0;\n  for (let n = 2; n < e.data; n++) if (esPrimo(n)) cuenta++;\n  self.postMessage(cuenta);\n});` },
        { h: 'Ejemplo real: un buscador que no satura la API', real: true, p: [
          'Sin cuidado, buscar "javascript" letra a letra hace diez peticiones. Con debounce solo se pide cuando el usuario se detiene, y una caché evita repetir búsquedas ya hechas.' ],
          code: `const cache = new Map();\n\nasync function buscar(texto) {\n  if (cache.has(texto)) return cache.get(texto);\n  const res = await fetch("/api/buscar?q=" + encodeURIComponent(texto));\n  const datos = await res.json();\n  cache.set(texto, datos);\n  return datos;\n}\n\nconst input = document.querySelector("#buscar");\ninput.addEventListener("input", debounce(async () => {\n  const texto = input.value.trim();\n  if (texto.length < 2) return;\n  const resultados = await buscar(texto);\n  pintarResultados(resultados);\n}, 300));` },
      ],
      x: [
        mc('¿Qué diferencia hay entre debounce y throttle?', ['Debounce espera a que la acción pare; throttle limita cuántas veces se ejecuta por tiempo', 'Son lo mismo', 'Throttle solo funciona con teclado', 'Debounce ejecuta la función inmediatamente'], 'Debounce para búsquedas mientras se escribe; throttle para `scroll` o `resize`.'),
        out(`function memo(fn) {\n  const cache = new Map();\n  return (n) => {\n    if (!cache.has(n)) cache.set(n, fn(n));\n    return cache.get(n);\n  };\n}\nlet calculos = 0;\nconst cuadrado = memo((n) => {\n  calculos++;\n  return n * n;\n});\ncuadrado(4);\ncuadrado(4);\ncuadrado(5);\nconsole.log(calculos, cuadrado(5));`, ['2 25', '3 25', '4 25', '2 16'], 'El segundo `cuadrado(4)` y el último `cuadrado(5)` salen de la caché: solo se calcularon 4 y 5.'),
        fill(`const inicio = performance.___();\nhacerAlgo();\nconsole.log(performance.now() - inicio, "ms");`, ['now', 'time', 'start', 'clock'], '`performance.now()` da una marca de tiempo precisa.'),
        out(`function debounce(fn, ms) {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), ms);\n  };\n}\nconst log = [];\nconst buscar = debounce((txt) => log.push(txt), 20);\nbuscar("j");\nbuscar("ja");\nbuscar("jav");\nsetTimeout(() => buscar("java"), 50);\nsetTimeout(() => console.log(log.join(",")), 100);`, ['jav,java', 'j,ja,jav,java', 'java', 'j,java'], 'Las tres primeras llamadas llegan seguidas: cada una cancela la anterior y solo se ejecuta "jav". "java" llega más tarde y también se ejecuta.'),
        typ('Crea un hilo aparte para un cálculo pesado', `const worker = new ___("calculo.js");`, 'Worker', 'Un Web Worker ejecuta el script en otro hilo y se comunica con mensajes.'),
        mc('¿Por qué conviene agrupar los cambios en el DOM?', ['Cada cambio puede obligar a recalcular el diseño de la página', 'Porque el DOM solo admite un cambio por segundo', 'Para gastar menos memoria en el servidor', 'No conviene: es mejor hacerlos uno a uno'], 'Un `DocumentFragment` o cambiar una clase permite hacerlo de una vez.'),
        mc('¿Qué técnica usarías para que una función ligada al `scroll` se ejecute como mucho cada 100 ms?', ['throttle', 'debounce', 'memoization', 'Un Web Worker'], 'Con debounce solo se ejecutaría al dejar de hacer scroll.'),
        out(`const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));\nlet llamadas = 0;\nconst cache = {};\nfunction fibMemo(n) {\n  llamadas++;\n  if (n in cache) return cache[n];\n  return (cache[n] = n < 2 ? n : fibMemo(n - 1) + fibMemo(n - 2));\n}\nconsole.log(fib(10), fibMemo(10), llamadas);`, ['55 55 19', '55 55 177', '55 55 11', '89 89 19'], 'Las dos dan el mismo resultado, pero la versión con caché calcula cada número una sola vez: 11 cálculos (del 10 al 0) más 8 consultas a la caché. La versión sin caché haría 177 llamadas.'),
      ],
    },
    // Día 30
    {
      id: 'js-wrapup',
      t: 'Conclusiones',
      d: 'Repaso final, herramientas del día a día y próximos pasos.',
      guide: [
        { h: 'Lo que has aprendido', p: [
          'Has recorrido JavaScript desde `console.log` hasta los servidores: tipos, condicionales, bucles, funciones, objetos, arrays y sus métodos, clases, errores, JSON, el DOM y los eventos, promesas y `async/await`, módulos, generadores, Node.js y tests.',
          'La idea que lo une todo: JavaScript es un lenguaje de funciones y objetos que reacciona a eventos. Casi todo lo que hace una web moderna se construye con esas piezas.' ] },
        { h: 'JavaScript moderno en pocas líneas', p: [
          'Este fragmento junta varias piezas del curso: desestructuración, métodos de arrays, funciones flecha, plantillas de texto, `??` y `async/await`.',
          'Fíjate en lo que no hay: ni `var`, ni bucles con índices, ni `==`.' ],
          code: 'const pedidos = [\n  { cliente: "Ana", total: 40, pagado: true },\n  { cliente: "Leo", total: 25, pagado: false },\n  { cliente: "Eva", total: 60, pagado: true },\n];\n\nconst cobrado = pedidos\n  .filter(({ pagado }) => pagado)\n  .reduce((suma, { total }) => suma + total, 0);\n\nconst pendientes = pedidos.filter((p) => !p.pagado).map((p) => p.cliente);\nconsole.log(`Cobrado: ${cobrado} €. Pendientes: ${pendientes.join(", ") || "ninguno"}`);\n// Cobrado: 100 €. Pendientes: Leo' },
        { h: 'Herramientas del día a día', p: [
          'Las DevTools del navegador (consola, depurador, red, rendimiento) son tu mejor aliado. Vite crea y sirve proyectos en segundos, ESLint y Prettier mantienen el código limpio y Git guarda el historial.',
          'TypeScript añade tipos a JavaScript y detecta muchos errores antes de ejecutar. Es el siguiente paso natural.' ],
          code: `# Crear un proyecto nuevo con Vite\nnpm create vite@latest mi-app\ncd mi-app\nnpm install\nnpm run dev\n\n# Revisar y formatear\nnpx eslint .\nnpx prettier --write .` },
        { h: 'Errores típicos y próximos pasos', p: [
          'Los fallos más comunes: usar `==` en vez de `===`, olvidar un `await`, perder el `this` al pasar un método como callback, modificar arrays u objetos compartidos y comparar decimales con `===`.',
          'Para seguir: construye proyectos pequeños (una lista de tareas con localStorage, un buscador con una API, un juego en canvas), consulta MDN y javascript.info, aprende TypeScript y después un framework como React, Vue o Svelte, o Node.js con una base de datos para el backend.' ] },
        { h: 'Ejemplo real: un gestor de gastos', real: true, p: [
          'Una pequeña aplicación junta lo aprendido: una clase con campo privado, validación con errores, `reduce` para agrupar, `localStorage` con JSON para guardar y `Intl.NumberFormat` para mostrar euros.' ],
          code: `class Gastos {\n  #lista;\n  constructor(lista = []) {\n    this.#lista = lista;\n  }\n  agregar(concepto, importe, categoria = "otros") {\n    if (!(importe > 0)) throw new RangeError("Importe no válido");\n    this.#lista.push({ concepto, importe, categoria, fecha: new Date().toISOString() });\n    return this;\n  }\n  porCategoria() {\n    return this.#lista.reduce((acc, { categoria, importe }) => {\n      acc[categoria] = (acc[categoria] ?? 0) + importe;\n      return acc;\n    }, {});\n  }\n  guardar() {\n    localStorage.setItem("gastos", JSON.stringify(this.#lista));\n  }\n  static cargar() {\n    return new Gastos(JSON.parse(localStorage.getItem("gastos")) ?? []);\n  }\n}\n\nconst euros = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });\nconst g = Gastos.cargar().agregar("Cine", 9, "ocio").agregar("Fruta", 6.5, "comida");\ng.guardar();\nfor (const [cat, total] of Object.entries(g.porCategoria())) {\n  console.log(cat, euros.format(total));   // ocio 9,00 €  ·  comida 6,50 €\n}` },
      ],
      x: [
        out(`console.log(0.1 + 0.2 === 0.3, [] == false, null ?? "x");`, ['false true x', 'true false x', 'false false null', 'true true x'], 'Los decimales no son exactos. Con `==`, `[]` y `false` se convierten a 0, por eso se recomienda `===`. `??` sustituye `null`.'),
        mc('¿Con qué palabra declaras una variable que no se va a reasignar?', ['const', 'let', 'var', 'static'], 'Usa `const` por defecto y `let` solo si necesitas reasignar.'),
        out(`const o = {\n  n: "Ana",\n  saludar() {\n    return this.n;\n  },\n};\nconst f = o.saludar;\nconsole.log(o.saludar(), f.call({ n: "Leo" }));`, ['Ana Leo', 'Ana Ana', 'Ana undefined', 'Leo Leo'], '`this` depende de cómo se llama la función, no de dónde se escribió. `call` fija el `this`.'),
        fill(`const precios = [5, 10, 15];\nconst total = precios.___((s, p) => s + p, 0);`, ['reduce', 'map', 'filter', 'sum'], '`reduce` combina el array en un solo valor.'),
        typ('Espera a que lleguen los datos', `async function cargar(url) {\n  const datos = ___ fetch(url).then((r) => r.json());\n  return datos;\n}`, 'await', 'Sin `await`, `datos` sería una promesa pendiente.'),
        out(`const [a, ...b] = new Set([3, 3, 1, 2]);\nconsole.log(a, b.length, Array.isArray(b));`, ['3 2 true', '3 3 true', '3 2 false', '1 2 true'], 'El Set queda {3, 1, 2}. La desestructuración funciona con cualquier iterable y el rest siempre crea un array.'),
        ord('Quédate con las personas mayores de edad', ['const adultos', '=', 'personas.filter(', '(p) => p.edad >= 18', ');'], ['.map(', 'function'], '`filter` devuelve un array nuevo con los elementos que cumplen la condición.'),
        out(`class Gastos {\n  #lista = [];\n  agregar(concepto, importe, categoria = "otros") {\n    if (importe <= 0) throw new RangeError("Importe no válido");\n    this.#lista.push({ concepto, importe, categoria });\n    return this;\n  }\n  porCategoria() {\n    return this.#lista.reduce((acc, { categoria, importe }) => {\n      acc[categoria] = (acc[categoria] ?? 0) + importe;\n      return acc;\n    }, {});\n  }\n}\nconst g = new Gastos().agregar("Pan", 2).agregar("Cine", 9, "ocio").agregar("Fruta", 6, "comida");\ntry {\n  g.agregar("Error", -1);\n} catch (e) {\n  console.log(e.name);\n}\nconst resumen = Object.entries(g.porCategoria()).sort((a, b) => b[1] - a[1]);\nconsole.log(resumen.map(([c, t]) => c + ":" + t).join(" "), JSON.stringify(g));`, ['RangeError\nocio:9 comida:6 otros:2 {}', 'Error\nocio:9 comida:6 otros:2 {}', 'RangeError\notros:2 ocio:9 comida:6 {}', 'RangeError\nocio:9 comida:6 otros:2 {"#lista":[]}'], 'El importe negativo lanza `RangeError`. Se agrupa por categoría y se ordena de mayor a menor. `JSON.stringify` ignora los campos privados, así que da "{}".'),
      ],
    },
  ],
}))(Sintaxis);
