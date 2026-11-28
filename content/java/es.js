/* Java · Español */
(({ mc, out, fill, ord, typ, code, addCourse }) => addCourse('java', 'es', {
  tag: 'Orientado a objetos y con tipado fuerte, de Android a servidores.',
  days: [
    // ───────────── Día 1 ─────────────
    {
      id: 'java-intro',
      t: 'Introducción',
      d: 'La JVM, javac, el método main y System.out.println.',
      guide: [
        { h: '¿Qué es Java?', p: [
          'Java es un lenguaje de programación creado por James Gosling en Sun Microsystems y publicado en 1995. Hoy lo mantiene Oracle y sale una versión nueva cada seis meses.',
          'Su lema es "escríbelo una vez, ejecútalo en cualquier parte": el mismo programa funciona en Windows, macOS o Linux sin cambiar una línea.',
          'Lo usan los bancos para sus sistemas de pagos, Android para sus apps, empresas como Netflix o LinkedIn en sus servidores y Minecraft en su edición Java.' ] },
        { h: 'Compilar y ejecutar: javac y la JVM', p: [
          'Java no se ejecuta directamente. Primero `javac` traduce tu archivo `.java` a bytecode, un archivo `.class`. Después la JVM (Java Virtual Machine) lee ese bytecode y lo ejecuta en tu máquina.',
          'Para programar necesitas el JDK (Java Development Kit), que incluye `javac`, la JVM y las librerías estándar. Descárgalo de adoptium.net o de oracle.com.',
          'Desde Java 11 puedes saltarte el paso de compilar en programas de un solo archivo: `java Hola.java` compila y ejecuta a la vez.' ],
          code: `// En la terminal:\n// javac Hola.java   -> crea Hola.class (bytecode)\n// java Hola         -> la JVM lo ejecuta\n// java Hola.java    -> compila y ejecuta en un paso (Java 11+)` },
        { h: 'Tu primer programa', p: [
          'Todo el código Java vive dentro de una clase. El archivo debe llamarse igual que la clase pública: la clase `Hola` va en `Hola.java`.',
          'La ejecución empieza siempre en el método `public static void main(String[] args)`. Si cambias esa firma, la JVM no encuentra por dónde empezar.',
          'Cada instrucción termina en `;` y los bloques van entre llaves `{ }`. Java distingue mayúsculas: `system.out` no funciona, tiene que ser `System.out`.' ],
          code: `public class Hola {\n    public static void main(String[] args) {\n        System.out.println("Hola, mundo");\n    }\n}` },
        { h: 'print, println y comentarios', p: [
          '`System.out.println()` escribe y añade un salto de línea; `System.out.print()` escribe sin saltar. Con `+` unes textos y valores: `"Total: " + 5` da `Total: 5`.',
          'Los comentarios explican el código y Java los ignora: `//` para una línea, `/* ... */` para varias y `/** ... */` para la documentación (Javadoc).' ],
          code: `// Comentario de una línea\n/* Comentario\n   de varias líneas */\nSystem.out.print("Uno ");\nSystem.out.print("Dos");\nSystem.out.println();      // solo salta de línea\nSystem.out.println("Tres");\n// Salida:\n// Uno Dos\n// Tres` },
        { h: 'Ejemplo real: el ticket de una cafetería', real: true, p: [
          'Con lo que ya sabes puedes imprimir el ticket de una cafetería. Los cálculos entre paréntesis se hacen antes de unirlos al texto.' ],
          code: `public class Ticket {\n    public static void main(String[] args) {\n        System.out.println("Cafetería Sol");\n        System.out.println("2 x Café: " + 2 * 1.5);\n        System.out.println("1 x Tostada: " + 2.25);\n        System.out.println("Total: " + (2 * 1.5 + 2.25) + " €");\n    }\n}\n// Cafetería Sol\n// 2 x Café: 3.0\n// 1 x Tostada: 2.25\n// Total: 5.25 €` },
      ],
      x: [
        mc('¿Qué instrucción muestra un texto y salta de línea en Java?', ['System.out.println()', 'console.log()', 'print()', 'echo()'], '`System.out.println()` escribe en la consola y añade un salto de línea. `console.log()` es de JavaScript.'),
        mc('¿Con qué símbolo termina cada instrucción en Java?', [';', '.', ':', 'Con un salto de línea'], 'Java exige `;` al final de cada instrucción; si falta, el código no compila.'),
        mc('¿Qué ejecuta el bytecode de un archivo .class?', ['La JVM (Java Virtual Machine)', 'El compilador javac', 'El navegador', 'El sistema operativo directamente'], '`javac` crea el bytecode y la JVM lo ejecuta en cada sistema.'),
        mc('¿Qué comando compila el archivo Hola.java?', ['javac Hola.java', 'java Hola.class', 'run Hola.java', 'compile Hola'], '`javac` genera `Hola.class`; después `java Hola` lo ejecuta.'),
        ord('Escribe la instrucción que muestra Hola y salta de línea', ['System', '.', 'out', '.', 'println', '(', '"Hola"', ')', ';'], ['console', 'log'], '`System.out.println` escribe el texto y añade un salto de línea. No olvides el `;` final.'),
        out(`System.out.print("A");\nSystem.out.println("B");\nSystem.out.print("C");`, ['AB\nC', 'A\nB\nC', 'ABC', 'A\nBC'], '`print` no salta de línea, así que A y B quedan juntas; `println` salta después de la B.'),
        typ('Completa la línea para imprimir el precio y saltar de línea', `double precio = 9.99;\nSystem.out.___(precio);`, 'println', '`println` imprime y añade un salto de línea; `print` no lo añade.'),
        out(`System.out.println("Total: " + 2 + 3);\nSystem.out.println(2 + 3 + " total");`, ['Total: 23\n5 total', 'Total: 5\n5 total', 'Total: 23\n23 total', 'Total: 5\n23 total'], 'Java evalúa de izquierda a derecha: en la primera línea el texto va primero y todo se concatena; en la segunda, 2 + 3 se suma antes de llegar al texto.'),
      ],
      lab: [
        code('Escribe un programa que muestre `Hola, Kibi` en una línea y, en la siguiente, el resultado de `7 * 6`.', `public class Main {\n    public static void main(String[] args) {\n        // Escribe aquí tu programa\n    }\n}\n`, [{ in: '', out: 'Hola, Kibi\n42' }], `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hola, Kibi");\n        System.out.println(7 * 6);\n    }\n}`, '`System.out.println()` escribe cada valor en una línea nueva: primero el texto entre comillas y después el resultado de `7 * 6`, que se calcula antes de mostrarlo.'),
      ],
    },
    // ───────────── Día 2 ─────────────
    {
      id: 'java-vars',
      t: 'Variables y tipos',
      d: 'Tipos primitivos, String, var, final y conversiones.',
      guide: [
        { h: 'Declarar una variable', p: [
          'Una variable es un nombre que guarda un valor. En Java escribes primero el tipo y después el nombre: `int edad = 20;`.',
          'Java tiene tipado estático: el tipo se decide al escribir el código y no cambia. Si intentas guardar `"hola"` en un `int`, el programa no compila. Así muchos errores aparecen antes de ejecutar.',
          'Los nombres van en camelCase (`precioTotal`, `numeroDeAlumnos`), empiezan por letra y no pueden ser palabras reservadas como `class` o `int`.' ],
          code: `int edad = 20;\nedad = 21;          // se puede cambiar el valor\n// edad = "veinte"; // error: un int no guarda texto\nint alumnos;        // declarada sin valor\nalumnos = 30;       // asignada después` },
        { h: 'Los 8 tipos primitivos', p: [
          'Enteros: `byte`, `short`, `int` (el habitual) y `long` para números muy grandes, que llevan una `L` al final.',
          'Decimales: `double` (el habitual) y `float`, que lleva una `f` al final. Un carácter suelto es un `char` y va entre comillas simples. Verdadero o falso es un `boolean`.',
          'Usa `int` y `double` salvo que tengas un motivo: son los que espera casi todo el código.' ],
          code: `byte b = 100;              // -128 a 127\nint poblacion = 47_000_000; // el _ solo ayuda a leer\nlong distancia = 9_460_730_472_580L;\ndouble precio = 19.99;\nfloat peso = 72.5f;\nchar inicial = 'J';\nboolean activo = true;` },
        { h: 'String, var y final', p: [
          '`String` guarda texto entre comillas dobles. No es un primitivo sino una clase, por eso empieza por mayúscula.',
          'Desde Java 10, `var` deduce el tipo de una variable local a partir de su valor: `var ciudad = "Madrid";` es un `String`. El tipo sigue siendo fijo.',
          '`final` crea una constante que no se puede reasignar. Por convención se escribe en MAYÚSCULAS: `final double IVA = 0.21;`.' ],
          code: `String nombre = "Ana";\nvar ciudad = "Madrid";   // el compilador deduce String\nvar visitas = 0;          // deduce int\nfinal double IVA = 0.21;\n// IVA = 0.10;            // error: IVA es final` },
        { h: 'Conversiones entre tipos', p: [
          'De un tipo pequeño a uno grande la conversión es automática: un `int` cabe en un `double`. Al revés hay que pedirla con un cast, `(int) 9.99`, y se pierden los decimales (no redondea).',
          'Para convertir texto en número usa `Integer.parseInt("42")` o `Double.parseDouble("3.5")`. Si el texto no es un número, se lanza `NumberFormatException`.' ],
          code: `int entero = 7;\ndouble d = entero;          // 7.0, automático\nint truncado = (int) 9.99;  // 9\nint n = Integer.parseInt("42");\ndouble x = Double.parseDouble("3.5");\nString s = String.valueOf(n);  // "42"` },
        { h: 'Ejemplo real: la ficha de un producto', real: true, p: [
          'Una tienda online guarda de cada producto su nombre, precio, unidades y si está disponible. Cada dato tiene su tipo natural.',
          'Para mostrar el precio con IVA redondeado a 2 decimales, multiplicamos por 100, redondeamos con `Math.round` y dividimos entre `100.0`.' ],
          code: `String nombre = "Auriculares Bluetooth";\ndouble precio = 39.90;\nint stock = 12;\nboolean disponible = stock > 0;\nfinal double IVA = 0.21;\n\ndouble conIva = Math.round(precio * (1 + IVA) * 100) / 100.0;\nSystem.out.println(nombre + ": " + conIva + " €");  // Auriculares Bluetooth: 48.28 €\nSystem.out.println("Disponible: " + disponible);    // Disponible: true` },
      ],
      x: [
        fill(`___ edad = 20;`, ['int', 'integer', 'Int', 'num'], '`int` es el tipo primitivo para números enteros. Java distingue mayúsculas, así que `Int` no existe.'),
        mc('¿Qué tipo primitivo guarda `true` o `false`?', ['boolean', 'bool', 'bit', 'logic'], 'En Java el tipo lógico primitivo es `boolean`; `bool` es de C++ y C#.'),
        mc('¿Cuál de estos es un valor `char` válido?', ["'J'", '"J"', "'Java'", 'J'], 'Un `char` es un solo carácter entre comillas simples. Con comillas dobles sería un `String`.'),
        out(`int a = 7;\nint b = 2;\nSystem.out.println(a / b);`, ['3', '3.5', '4', '3.0'], 'Dividir dos `int` da otro `int`: se descarta la parte decimal.'),
        out(`double precio = 9.99;\nint n = (int) precio;\nSystem.out.println(n);`, ['9', '10', '9.99', '9.0'], 'El cast a `int` corta los decimales, no redondea.'),
        out(`String s = "Java";\nSystem.out.println(s + 1 + 2);`, ['Java12', 'Java3', '3Java', 'Error'], 'Se evalúa de izquierda a derecha: "Java" + 1 es "Java1", y + 2 da "Java12".'),
        mc('¿Qué ocurre con este código?', ['No compila: una variable final no se puede reasignar', 'MAX pasa a valer 20', 'MAX sigue valiendo 10 sin avisar', 'Falla solo al ejecutarlo'], 'El compilador impide reasignar una variable `final`.', `final int MAX = 10;\nMAX = 20;`),
        out(`char c = 'A';\nint n = c + 2;\nchar d = (char) n;\nSystem.out.println(n + " " + d);`, ['67 C', 'C 67', 'A2 C', '67 67'], 'Un `char` es un número: A vale 65, así que n es 67. Al convertirlo de nuevo a `char` obtenemos la C.'),
      ],
    },
    // ───────────── Día 3 ─────────────
    {
      id: 'java-operators',
      t: 'Operadores',
      d: 'Aritméticos, comparación, lógicos, incrementos y precedencia.',
      guide: [
        { h: 'Operadores aritméticos', p: [
          'Java tiene `+`, `-`, `*`, `/` y `%`. El operador `%` da el resto de la división y sirve para saber si un número es par (`n % 2 == 0`) o para repetir ciclos.',
          'Cuidado con la división entre enteros: `7 / 2` da `3`, porque los dos operandos son `int`. Si uno es `double`, el resultado también lo es: `7 / 2.0` da `3.5`.',
          'Dividir un entero entre cero lanza `ArithmeticException`; con `double` el resultado es `Infinity`.' ],
          code: `int a = 7, b = 2;\nSystem.out.println(a + b);    // 9\nSystem.out.println(a / b);    // 3\nSystem.out.println(a % b);    // 1\nSystem.out.println(a / 2.0);  // 3.5` },
        { h: 'Asignación compuesta e incrementos', p: [
          '`x += 3` es lo mismo que `x = x + 3`. También existen `-=`, `*=`, `/=` y `%=`.',
          '`x++` suma 1 y `x--` resta 1. En una línea sola da igual ponerlos antes o después, pero dentro de una expresión cambia: `x++` usa el valor viejo y luego suma; `++x` suma primero y usa el nuevo.' ],
          code: `int puntos = 10;\npuntos += 5;   // 15\npuntos *= 2;   // 30\nint i = 5;\nint a = i++;   // a = 5, i = 6\nint b = ++i;   // i = 7, b = 7` },
        { h: 'Comparación y lógica', p: [
          'Los comparadores `==`, `!=`, `>`, `<`, `>=` y `<=` devuelven un `boolean`. No confundas `==` (comparar) con `=` (asignar).',
          'Los lógicos son `&&` (y), `||` (o) y `!` (no). Se evalúan en cortocircuito: si con la parte izquierda ya se sabe el resultado, la derecha no se ejecuta. Así `n != 0 && 10 / n > 1` nunca divide entre cero.' ],
          code: `int edad = 25;\nboolean adulto = edad >= 18;               // true\nboolean joven = edad >= 18 && edad < 30;   // true\nboolean finde = false;\nSystem.out.println(!finde || adulto);      // true` },
        { h: 'Precedencia, casts y Math', p: [
          'Igual que en matemáticas, `*`, `/` y `%` van antes que `+` y `-`. Ante la duda, usa paréntesis: también hacen el código más fácil de leer.',
          'El cast `(double) a / b` convierte `a` antes de dividir. La clase `Math` trae funciones listas: `Math.pow`, `Math.sqrt`, `Math.max`, `Math.abs` y `Math.round`.' ],
          code: `System.out.println(2 + 3 * 4);        // 14\nSystem.out.println((2 + 3) * 4);      // 20\nSystem.out.println((double) 7 / 2);   // 3.5\nSystem.out.println(Math.pow(2, 10));  // 1024.0\nSystem.out.println(Math.sqrt(81));    // 9.0\nSystem.out.println(Math.round(4.6));  // 5` },
        { h: 'Ejemplo real: envío gratis y tiempo de entrega', real: true, p: [
          'Una tienda regala el envío si el pedido supera 50 € o si el cliente es socio. Además, el repartidor necesita el tiempo de ruta en horas y minutos.',
          'Con `/` y `%` entre enteros convertimos minutos en horas y minutos sin decimales.' ],
          code: `double subtotal = 47.50;\nboolean esSocio = true;\nboolean envioGratis = subtotal >= 50 || esSocio;\n\nint minutos = 135;\nSystem.out.println("Envío gratis: " + envioGratis);             // Envío gratis: true\nSystem.out.println(minutos / 60 + " h " + minutos % 60 + " min"); // 2 h 15 min` },
      ],
      x: [
        out(`System.out.println(10 % 4);`, ['2', '2.5', '0', '4'], '`%` da el resto de la división: 10 entre 4 cabe 2 veces y sobran 2.'),
        out(`int x = 5;\nx += 3;\nSystem.out.println(x);`, ['8', '5', '53', '3'], '`x += 3` equivale a `x = x + 3`.'),
        mc('¿Qué operador significa "o" lógico en Java?', ['||', '&&', '!', 'or'], '`||` es O, `&&` es Y y `!` es NO. Java no usa la palabra `or`.'),
        out(`System.out.println(2 + 3 * 4);`, ['14', '20', '24', '9'], 'La multiplicación va antes: 3 × 4 = 12 y luego 2 + 12 = 14.'),
        out(`System.out.println((double) 7 / 2);`, ['3.5', '3', '3.0', '4'], 'El cast convierte el 7 en 7.0 antes de dividir, así que la división es decimal.'),
        typ('Suma 1 a las visitas con el operador de incremento', `int visitas = 41;\nvisitas___;`, ['++', '+= 1', '+=1'], '`visitas++` suma 1 a la variable; es la forma corta de `visitas = visitas + 1`.'),
        out(`int c = 0;\nSystem.out.println(c != 0 && 10 / c > 1);`, ['false', 'true', 'ArithmeticException', '0'], 'Cortocircuito: `c != 0` es falso, así que `&&` no evalúa la división entre cero.'),
        out(`int i = 5;\nint j = i++ + ++i;\nSystem.out.println(j + " " + i);`, ['12 7', '11 7', '12 6', '10 7'], '`i++` usa 5 y deja `i` en 6; `++i` lo sube a 7 y usa 7. La suma es 12 e `i` termina en 7.'),
      ],
    },
    // ───────────── Día 4 ─────────────
    {
      id: 'java-conditionals',
      t: 'Condicionales',
      d: 'if, else if, else, el operador ternario y switch.',
      guide: [
        { h: 'if y else', p: [
          '`if (condición) { ... }` ejecuta el bloque solo si la condición es `true`. La condición tiene que ser un `boolean`: en Java no vale poner un número.',
          'Un error clásico es escribir `if (x = 5)`: con un `int` no compila, porque `=` asigna en lugar de comparar. Usa `==`. Y pon siempre llaves, aunque el bloque tenga una línea.' ],
          code: `int edad = 16;\nif (edad >= 18) {\n    System.out.println("Puedes votar");\n} else {\n    System.out.println("Aún no puedes votar");\n}\n// Aún no puedes votar` },
        { h: 'else if: varias opciones', p: [
          'Con `else if` encadenas condiciones. Java las comprueba en orden y ejecuta solo la primera que se cumple; el resto se salta.',
          'Por eso el orden importa: pon primero las condiciones más estrictas. Si comprobaras `nota >= 5` antes que `nota >= 9`, un 10 saldría como "Aprobado".' ],
          code: `double nota = 7.5;\nif (nota >= 9) {\n    System.out.println("Sobresaliente");\n} else if (nota >= 7) {\n    System.out.println("Notable");\n} else if (nota >= 5) {\n    System.out.println("Aprobado");\n} else {\n    System.out.println("Suspenso");\n}\n// Notable` },
        { h: 'El operador ternario', p: [
          '`condición ? valorSiTrue : valorSiFalse` devuelve un valor en una sola línea. Es ideal para elegir entre dos textos o dos números.',
          'No lo encadenes muchas veces: tres ternarios seguidos son difíciles de leer, y ahí es mejor un `if`.' ],
          code: `int stock = 0;\nString estado = stock > 0 ? "Disponible" : "Agotado";\nSystem.out.println(estado);  // Agotado` },
        { h: 'switch clásico', p: [
          '`switch` compara un valor (entero, `char`, `String` o enum) con varios `case`. `default` recoge cualquier otro caso.',
          'En el switch clásico, si olvidas `break` la ejecución "cae" al siguiente caso. A veces se usa a propósito para agrupar casos, pero casi siempre es un error. En el día 25 verás el switch moderno con flechas, que no tiene este problema.' ],
          code: `String dia = "sábado";\nswitch (dia) {\n    case "sábado":\n    case "domingo":\n        System.out.println("Fin de semana");\n        break;\n    default:\n        System.out.println("Laborable");\n}\n// Fin de semana` },
        { h: 'Ejemplo real: el coste de un envío', real: true, p: [
          'Una tienda calcula el envío por tramos de peso y añade un suplemento para las islas. Fíjate en que el texto se compara con `equals`, nunca con `==`.' ],
          code: `double kg = 3.2;\nString zona = "peninsula";\ndouble coste;\nif (kg <= 1) {\n    coste = 4.50;\n} else if (kg <= 5) {\n    coste = 6.90;\n} else {\n    coste = 6.90 + (kg - 5) * 1.20;\n}\nif (zona.equals("islas")) {\n    coste += 8;\n}\nSystem.out.println("Envío: " + coste + " €");  // Envío: 6.9 €` },
      ],
      x: [
        fill(`if (edad >= 18) {\n    System.out.println("adulto");\n} ___ {\n    System.out.println("menor");\n}`, ['else', 'elif', 'otherwise', 'default'], 'El bloque alternativo se escribe con `else`. `elif` es de Python.'),
        out(`int x = 10;\nif (x > 5 && x < 20) {\n    System.out.println("rango");\n} else {\n    System.out.println("fuera");\n}`, ['rango', 'fuera', 'rango\nfuera'], '10 cumple las dos condiciones unidas con `&&`, y solo se ejecuta un bloque.'),
        mc('Si `x` es un `int`, ¿qué pasa con `if (x = 5)`?', ['No compila: = asigna y la condición debe ser boolean', 'Compara x con 5', 'Siempre es verdadero', 'Siempre es falso'], 'Para comparar se usa `==`. Java exige que la condición sea un `boolean`.'),
        out(`int x = 5;\nString r = (x % 2 == 0) ? "par" : "impar";\nSystem.out.println(r);`, ['impar', 'par', 'true'], 'El ternario elige "impar" porque 5 % 2 es 1, no 0.'),
        ord('Escribe la cabecera del if: "si edad es mayor o igual que 18"', ['if', '(', 'edad', '>=', '18', ')'], ['=>', 'then'], 'La condición va entre paréntesis y el operador es `>=`. Java no usa `then`.'),
        out(`int nota = 75;\nif (nota >= 90) System.out.println("A");\nelse if (nota >= 70) System.out.println("B");\nelse System.out.println("C");`, ['B', 'A', 'C', 'B\nC'], '75 no llega a 90 pero sí a 70, y tras el primer acierto se saltan los demás.'),
        out(`int dia = 2;\nswitch (dia) {\n    case 1: System.out.print("L");\n    case 2: System.out.print("M");\n    case 3: System.out.print("X");\n        break;\n    default: System.out.print("?");\n}`, ['MX', 'M', 'MX?', 'LMX'], 'Entra en `case 2` y, sin `break`, sigue con `case 3` hasta encontrar uno.'),
        out(`int edad = 70;\nboolean estudiante = false;\ndouble precio = 10;\nif (edad < 12 || edad >= 65) {\n    precio = precio / 2;\n} else if (estudiante) {\n    precio = precio * 0.8;\n}\nString tipo = precio < 10 ? "reducido" : "normal";\nSystem.out.println(tipo + " " + precio);`, ['reducido 5.0', 'normal 10.0', 'reducido 8.0', 'reducido 5'], '70 cumple `edad >= 65`, así que el precio baja a 5.0 y el else if ni se mira. Como es `double`, se imprime con decimal.'),
      ],
    },
    // ───────────── Día 5 ─────────────
    {
      id: 'java-loops',
      t: 'Bucles',
      d: 'for, for-each, while, do-while, break y continue.',
      guide: [
        { h: 'El bucle for', p: [
          '`for (int i = 0; i < n; i++)` tiene tres partes: el inicio, la condición que se comprueba antes de cada vuelta y el paso que se ejecuta al final de cada vuelta.',
          'Úsalo cuando sabes cuántas veces quieres repetir. El error más típico es el "uno de más": con `i <= array.length` te sales del array.' ],
          code: `for (int i = 1; i <= 3; i++) {\n    System.out.println("Vuelta " + i);\n}\n// Vuelta 1\n// Vuelta 2\n// Vuelta 3\n\nfor (int i = 10; i > 0; i -= 5) {\n    System.out.println(i);   // 10 y 5\n}` },
        { h: 'El for-each', p: [
          'Aquí aparece por primera vez un array, varios valores entre llaves con un tipo como `String[]`. De momento basta con saber que el for-each los recorre uno a uno; los arrays y las colecciones llegan a partir del día 7.',
          '`for (String nombre : nombres)` recorre todos los elementos de un array o una colección sin manejar índices. Es más corto y evita salirse del rango.',
          'Úsalo siempre que no necesites la posición. Si la necesitas, o vas a modificar el array por índice, usa el `for` clásico.' ],
          code: `String[] invitados = {"Ana", "Luis", "Eva"};\nfor (String nombre : invitados) {\n    System.out.println("Hola, " + nombre);\n}` },
        { h: 'while y do-while', p: [
          '`while (condición)` repite mientras se cumpla la condición. Úsalo cuando no sabes cuántas vueltas habrá, por ejemplo al leer datos hasta que se acaben.',
          '`do { ... } while (condición);` comprueba al final, así que se ejecuta al menos una vez: útil para menús que se muestran antes de preguntar.',
          'Si la condición nunca se vuelve falsa tienes un bucle infinito. Asegúrate de que algo dentro del bucle la acerca a su fin.' ],
          code: `int cuenta = 3;\nwhile (cuenta > 0) {\n    System.out.println(cuenta);\n    cuenta--;\n}\nSystem.out.println("¡Despegue!");` },
        { h: 'break, continue y bucles anidados', p: [
          '`break` sale del bucle en ese instante; `continue` salta el resto de la vuelta actual y pasa a la siguiente.',
          'Un bucle dentro de otro recorre combinaciones: filas y columnas, cada producto con cada tienda. Los dos contadores necesitan nombres distintos (`i` y `j`).' ],
          code: `for (int i = 1; i <= 3; i++) {\n    String fila = "";\n    for (int j = 1; j <= 3; j++) {\n        fila += i * j + " ";\n    }\n    System.out.println(fila.trim());\n}\n// 1 2 3\n// 2 4 6\n// 3 6 9` },
        { h: 'Ejemplo real: cuánto tarda en crecer un ahorro', real: true, p: [
          'Tienes 1000 € en una cuenta que da un 5 % anual y quieres saber cuántos años tardas en llegar a 1200 €. No sabes cuántas vueltas habrá, así que usas `while`.' ],
          code: `double ahorro = 1000;\nint anios = 0;\nwhile (ahorro < 1200) {\n    ahorro = ahorro * 1.05;\n    anios++;\n}\nSystem.out.println("Años necesarios: " + anios);  // Años necesarios: 4` },
      ],
      x: [
        fill(`___ (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}`, ['for', 'foreach', 'loop', 'while'], 'El bucle con inicio, condición y paso es `for`.'),
        out(`for (int i = 1; i <= 3; i++) {\n    System.out.println(i * 2);\n}`, ['2\n4\n6', '1\n2\n3', '2\n4\n6\n8', '0\n2\n4'], '`i` vale 1, 2 y 3; cada vez se imprime el doble en una línea.'),
        out(`int n = 3;\nwhile (n > 0) {\n    System.out.print(n);\n    n--;\n}`, ['321', '3210', '123', '33'], 'Se imprime 3, 2 y 1. Cuando `n` llega a 0 la condición falla y el bucle termina.'),
        out(`int[] nums = {4, 8, 15};\nint suma = 0;\nfor (int n : nums) {\n    suma += n;\n}\nSystem.out.println(suma);`, ['27', '3', '4815', '15'], 'El for-each recorre cada número y los acumula: 4 + 8 + 15 = 27.'),
        out(`int i = 0;\ndo {\n    i++;\n} while (i < 0);\nSystem.out.println(i);`, ['1', '0', '-1', 'Bucle infinito'], '`do-while` ejecuta el bloque una vez antes de comprobar la condición.'),
        out(`for (int i = 0; i < 5; i++) {\n    if (i == 3) break;\n    System.out.print(i);\n}`, ['012', '0123', '01234', '3'], 'Al llegar a 3, `break` sale del bucle antes de imprimir.'),
        typ('Salta los números negativos y sigue con el siguiente', `for (int n : nums) {\n    if (n < 0) ___;\n    suma += n;\n}`, 'continue', '`continue` termina la vuelta actual y pasa al siguiente elemento; `break` saldría del bucle.'),
        out(`int total = 0;\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (j == i) continue;\n        total += i * j;\n    }\n}\nSystem.out.println(total);`, ['22', '36', '14', '18'], 'Se suman todos los productos i × j salvo cuando i y j coinciden: 36 en total menos 1 + 4 + 9 = 22.'),
      ],
    },
    // ───────────── Día 6 ─────────────
    {
      id: 'java-strings',
      t: 'Strings',
      d: 'length, charAt, substring, equals, split y StringBuilder.',
      guide: [
        { h: 'Qué es un String', p: [
          '`String` guarda texto entre comillas dobles. Es una clase, así que tiene métodos que se llaman con un punto: `nombre.length()`.',
          'Los String son inmutables: ningún método cambia el texto original, todos devuelven uno nuevo. Si no guardas el resultado, se pierde.',
          'Los índices de los caracteres empiezan en 0: en `"Java"`, la `J` está en la posición 0 y la `a` final en la 3.' ],
          code: `String s = "hola";\ns.toUpperCase();          // devuelve "HOLA", pero no se guarda\nSystem.out.println(s);    // hola\ns = s.toUpperCase();      // ahora sí\nSystem.out.println(s);    // HOLA` },
        { h: 'Métodos esenciales', p: [
          '`length()` cuenta caracteres, `charAt(i)` devuelve el de la posición `i` e `indexOf()` busca dónde aparece algo (devuelve -1 si no está).',
          '`substring(inicio, fin)` recorta: incluye `inicio` y excluye `fin`. `trim()` quita espacios de los extremos; `replace()`, `contains()`, `startsWith()` y `endsWith()` hacen lo que su nombre dice.' ],
          code: `String s = "Hola Java";\nSystem.out.println(s.length());          // 9\nSystem.out.println(s.charAt(0));         // H\nSystem.out.println(s.indexOf("Java"));   // 5\nSystem.out.println(s.substring(0, 4));   // Hola\nSystem.out.println(s.replace("a", "4")); // Hol4 J4v4\nSystem.out.println(s.contains("Ja"));    // true` },
        { h: 'Comparar textos: equals, no ==', p: [
          '`==` compara si dos variables apuntan al mismo objeto en memoria, no si el texto es igual. Para comparar el contenido usa siempre `equals()`.',
          '`equalsIgnoreCase()` ignora mayúsculas, útil para comparar respuestas de usuarios. `compareTo()` sirve para ordenar alfabéticamente: devuelve un número negativo, cero o positivo.' ],
          code: `String a = "java";\nString b = new String("java");\nSystem.out.println(a == b);                  // false\nSystem.out.println(a.equals(b));             // true\nSystem.out.println("JAVA".equalsIgnoreCase(a)); // true` },
        { h: 'Dividir, unir y StringBuilder', p: [
          '`split(",")` corta un texto en un array de trozos y `String.join(", ", ...)` los vuelve a unir. `"ab".repeat(3)` repite el texto.',
          'Concatenar con `+` dentro de un bucle crea un String nuevo en cada vuelta. Para construir textos largos usa `StringBuilder`, que sí se modifica: `append()`, `insert()`, `reverse()` y al final `toString()`.' ],
          code: `String[] partes = "rojo,verde,azul".split(",");\nSystem.out.println(partes[1]);                    // verde\nSystem.out.println(String.join(" | ", partes));   // rojo | verde | azul\n\nStringBuilder sb = new StringBuilder();\nsb.append("Hola").append(", ").append("Java");\nSystem.out.println(sb.toString());                // Hola, Java` },
        { h: 'Ejemplo real: limpiar un email de un formulario', real: true, p: [
          'La gente escribe su email con espacios y mayúsculas. Antes de guardarlo hay que normalizarlo, y a veces separar el usuario del dominio.' ],
          code: `String entrada = "  Ana.Garcia@Gmail.COM ";\nString email = entrada.trim().toLowerCase();\nint arroba = email.indexOf('@');\nString usuario = email.substring(0, arroba);\nString dominio = email.substring(arroba + 1);\n\nSystem.out.println(email);    // ana.garcia@gmail.com\nSystem.out.println(usuario);  // ana.garcia\nSystem.out.println(dominio);  // gmail.com` },
      ],
      x: [
        out(`String s = "Java";\nSystem.out.println(s.length());`, ['4', '3', '5'], '`length()` devuelve el número de caracteres: J, a, v, a.'),
        out(`System.out.println("Hola".charAt(1));`, ['o', 'H', 'l'], 'Los índices empiezan en 0, así que el 1 es la segunda letra.'),
        mc('¿Cómo se compara correctamente el contenido de dos String?', ['s1.equals(s2)', 's1 == s2', 's1 === s2', 's1.compare(s2)'], '`==` compara si son el mismo objeto en memoria. `equals()` compara el texto.'),
        out(`String s = "programar";\nSystem.out.println(s.substring(0, 3));`, ['pro', 'prog', 'rog', 'ogr'], '`substring(inicio, fin)` incluye el inicio y excluye el fin: posiciones 0, 1 y 2.'),
        out(`String s = "hola";\ns.toUpperCase();\nSystem.out.println(s);`, ['hola', 'HOLA', 'Hola'], 'Los String son inmutables: `toUpperCase()` devuelve otro String, que aquí no se guarda.'),
        typ('Quita los espacios del principio y del final', `String entrada = "  ana@mail.com ";\nString limpio = entrada.___();`, ['trim', 'strip'], '`trim()` (o `strip()`) devuelve el texto sin espacios en los extremos.'),
        out(`String[] partes = "rojo,verde,azul".split(",");\nSystem.out.println(partes.length + " " + partes[1]);`, ['3 verde', '2 verde', '3 rojo', '3 ,verde'], '`split(",")` da 3 trozos y el de índice 1 es "verde".'),
        out(`StringBuilder sb = new StringBuilder("ab");\nsb.append("cd").reverse();\nString s = sb.toString().toUpperCase();\nSystem.out.println(s.indexOf("B") + s);`, ['2DCBA', '1DCBA', '2ABCD', 'DCBA2'], '`append` deja "abcd", `reverse` lo convierte en "dcba" y en mayúsculas es "DCBA". La B está en la posición 2 y el número se concatena delante.'),
      ],
    },
    // ───────────── Día 7 ─────────────
    {
      id: 'java-arrays',
      t: 'Arrays',
      d: 'Arrays de tamaño fijo, índices, la clase Arrays y matrices.',
      guide: [
        { h: 'Qué es un array', p: [
          'Un array guarda varios valores del mismo tipo bajo un solo nombre. Su tamaño se fija al crearlo y ya no cambia.',
          'Puedes crearlo con valores, `int[] notas = {7, 9, 5};`, o vacío con un tamaño, `new int[5]`. Los vacíos se rellenan con valores por defecto: `0` para números, `false` para `boolean` y `null` para objetos como `String`.' ],
          code: `int[] notas = {7, 9, 5};\nString[] nombres = new String[3];   // [null, null, null]\ndouble[] precios = new double[2];   // [0.0, 0.0]\nnombres[0] = "Ana";` },
        { h: 'Índices y length', p: [
          'Los índices van de `0` a `length - 1`. El último elemento es `a[a.length - 1]`. `length` es una propiedad, sin paréntesis (al contrario que `length()` en los String).',
          'Si usas un índice fuera de rango, Java lanza `ArrayIndexOutOfBoundsException`. Es uno de los errores más comunes al empezar, sobre todo con `<=` en vez de `<` en los bucles.' ],
          code: `int[] a = {10, 20, 30};\nSystem.out.println(a.length);          // 3\nSystem.out.println(a[a.length - 1]);   // 30\n// System.out.println(a[3]);           // ArrayIndexOutOfBoundsException` },
        { h: 'Recorrer un array', p: [
          'Con un `for` clásico tienes el índice; con el for-each (`for (int n : notas)`) recorres los valores directamente. Los verás a fondo en el día de bucles.',
          'Un array es un objeto: si haces `int[] b = a;`, `b` y `a` apuntan al mismo array. Para tener una copia independiente usa `a.clone()` o `Arrays.copyOf(a, a.length)`.' ],
          code: `int[] notas = {7, 9, 5};\nfor (int i = 0; i < notas.length; i++) {\n    System.out.println("Nota " + i + ": " + notas[i]);\n}\nint suma = 0;\nfor (int n : notas) {\n    suma += n;\n}\nSystem.out.println(suma);  // 21` },
        { h: 'La clase Arrays y las matrices', p: [
          'Si imprimes un array directamente verás algo como `[I@1b6d3586`, su referencia. Usa `Arrays.toString()` para ver el contenido. Recuerda `import java.util.Arrays;`.',
          '`Arrays.sort()` ordena, `Arrays.fill()` rellena y `Arrays.copyOf()` copia. Una matriz es un array de arrays: `m[fila][columna]`.' ],
          code: `int[] a = {3, 1, 2};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a));  // [1, 2, 3]\n\nint[][] tablero = {{1, 2, 3}, {4, 5, 6}};\nSystem.out.println(tablero[1][2]);        // 6\nSystem.out.println(tablero.length);       // 2 filas` },
        { h: 'Ejemplo real: las temperaturas de la semana', real: true, p: [
          'Una app del tiempo guarda las máximas de los 7 días de la semana y muestra la más alta y la media.' ],
          code: `double[] temps = {18.5, 21.0, 19.5, 23.0, 22.5, 24.0, 18.5};\ndouble suma = 0;\ndouble max = temps[0];\nfor (double t : temps) {\n    suma += t;\n    if (t > max) max = t;\n}\nSystem.out.println("Máxima: " + max);                 // Máxima: 24.0\nSystem.out.println("Media: " + suma / temps.length);  // Media: 21.0` },
      ],
      x: [
        out(`int[] arr = new int[3];\nSystem.out.println(arr[0]);`, ['0', 'null', '3', 'Error'], 'Los arrays de `int` se rellenan con ceros al crearse.'),
        out(`int[] arr = {1, 2, 3};\nSystem.out.println(arr.length);`, ['3', '2', '4'], '`length` es el número de elementos, no el último índice.'),
        typ('Imprime cuántos nombres hay', `String[] nombres = {"Ana", "Bea"};\nSystem.out.println(nombres.___);`, 'length', 'En los arrays, `length` es una propiedad y va sin paréntesis.'),
        mc('Si `arr` tiene 3 elementos, ¿qué pasa al leer `arr[3]`?', ['Se lanza ArrayIndexOutOfBoundsException', 'Devuelve 0', 'Devuelve null', 'Devuelve el último elemento'], 'Los índices válidos van de 0 a 2; el 3 está fuera de rango.'),
        out(`int[] a = {3, 1, 2};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a));`, ['[1, 2, 3]', '[3, 1, 2]', '123', '[I@1b6d3586'], '`Arrays.toString` da un texto legible; imprimir el array directamente mostraría su referencia.'),
        out(`int[][] m = {{1, 2}, {3, 4}};\nSystem.out.println(m[1][0]);`, ['3', '2', '4', '1'], 'Fila 1 (la segunda) y columna 0 (la primera).'),
        out(`int[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 9;\nSystem.out.println(a[0]);`, ['9', '1', '0'], '`b = a` no copia el array: las dos variables apuntan al mismo, así que el cambio se ve desde `a`.'),
        out(`int[] v = {4, 7, 1, 9};\nint[] c = Arrays.copyOf(v, 3);\nArrays.sort(c);\nSystem.out.println(c[c.length - 1] + v[3]);`, ['16', '18', '10', '79'], '`copyOf(v, 3)` copia {4, 7, 1}; ordenado queda {1, 4, 7}. El último es 7, y 7 + 9 = 16. `v` no cambia.'),
      ],
    },
    // ───────────── Día 8 ─────────────
    {
      id: 'java-arraylist',
      t: 'ArrayList',
      d: 'Listas dinámicas: add, get, set, remove, size y envoltorios.',
      guide: [
        { h: 'Por qué una lista', p: [
          'Un array tiene tamaño fijo. Si no sabes cuántos elementos vas a tener (los productos de un carrito, los mensajes de un chat), usa `ArrayList`, que crece y encoge sola.',
          'Se declara con el tipo de sus elementos entre ángulos: `List<String> nombres = new ArrayList<>();`. Necesitas `import java.util.ArrayList;` e `import java.util.List;`.',
          'Declarar la variable como `List` (la interfaz) y crearla como `ArrayList` es la práctica habitual: así puedes cambiar de implementación sin tocar el resto del código.' ] },
        { h: 'Métodos básicos', p: [
          '`add()` añade al final (o en una posición con `add(i, x)`), `get(i)` lee, `set(i, x)` reemplaza y `remove()` quita. `size()` da cuántos hay.',
          '`contains()` e `indexOf()` buscan, `isEmpty()` dice si está vacía y `clear()` la vacía. Al imprimir una lista se ve su contenido: `[a, b, c]`.' ],
          code: `List<String> frutas = new ArrayList<>();\nfrutas.add("manzana");\nfrutas.add("pera");\nfrutas.add(0, "kiwi");      // [kiwi, manzana, pera]\nfrutas.set(1, "mango");     // [kiwi, mango, pera]\nfrutas.remove("pera");      // [kiwi, mango]\nSystem.out.println(frutas.get(0));            // kiwi\nSystem.out.println(frutas.size());            // 2\nSystem.out.println(frutas.contains("mango")); // true` },
        { h: 'Envoltorios y autoboxing', p: [
          'Las listas solo guardan objetos, no primitivos. Por eso `List<int>` no compila: se usa la clase envoltorio, `List<Integer>`. Cada primitivo tiene la suya: `Integer`, `Double`, `Boolean`, `Character`...',
          'Java convierte automáticamente entre `int` e `Integer` (autoboxing). Ojo con `remove`: en una `List<Integer>`, `remove(1)` quita el índice 1, y `remove(Integer.valueOf(1))` quita el valor 1.' ],
          code: `List<Integer> nums = new ArrayList<>(List.of(5, 1, 8));\nnums.remove(1);                   // quita el índice 1 -> [5, 8]\nnums.remove(Integer.valueOf(8));  // quita el valor 8 -> [5]\nSystem.out.println(nums);         // [5]` },
        { h: 'Recorrer, ordenar y listas inmutables', p: [
          'Recorre una lista con for-each. `Collections.sort(lista)` la ordena y `Collections.max(lista)` da el mayor.',
          '`List.of(...)` crea una lista inmutable: es rápida de escribir, pero `add` o `remove` lanzan `UnsupportedOperationException`. Si necesitas modificarla, envuélvela: `new ArrayList<>(List.of(...))`.' ],
          code: `List<Integer> edades = new ArrayList<>(List.of(34, 19, 27));\nCollections.sort(edades);\nSystem.out.println(edades);                   // [19, 27, 34]\nSystem.out.println(Collections.max(edades));  // 34\nfor (int e : edades) {\n    System.out.print(e + ";");                // 19;27;34;\n}` },
        { h: 'Ejemplo real: la lista de la compra', real: true, p: [
          'Una app de lista de la compra añade productos, tacha los comprados y pone primero lo urgente.' ],
          code: `List<String> compra = new ArrayList<>();\ncompra.add("leche");\ncompra.add("pan");\ncompra.add("huevos");\ncompra.remove("pan");          // ya lo compraste\ncompra.add(0, "café");         // lo urgente, primero\nSystem.out.println(compra);    // [café, leche, huevos]\nSystem.out.println("Quedan " + compra.size() + " cosas");  // Quedan 3 cosas` },
      ],
      x: [
        out(`List<String> lista = new ArrayList<>();\nlista.add("a");\nlista.add("b");\nSystem.out.println(lista.size());`, ['2', '1', '0'], '`size()` devuelve cuántos elementos hay en la lista.'),
        typ('Añade "Luis" al final de la lista', `List<String> nombres = new ArrayList<>();\nnombres.___("Luis");`, 'add', '`add` inserta un elemento al final de la lista.'),
        fill(`List<String> ciudades = new ArrayList<>(List.of("Lima", "Quito"));\nString primera = ciudades.___(0);`, ['get', 'at', 'first', 'index'], '`get(i)` devuelve el elemento de la posición `i`. Los corchetes `[0]` solo funcionan con arrays.'),
        out(`List<String> l = List.of("x", "y");\nSystem.out.println(l.contains("y"));`, ['true', 'false', '1'], '`contains` indica si el elemento está en la lista.'),
        mc('¿Por qué `List<int>` no compila?', ['Los genéricos necesitan tipos objeto: hay que usar List<Integer>', 'Falta importar int', 'List no admite números', 'Hay que escribir List[int]'], '`Integer` es la clase envoltorio de `int` y Java convierte entre ellos automáticamente.'),
        out(`List<String> l = new ArrayList<>(List.of("a", "b", "c"));\nl.remove(1);\nSystem.out.println(l);`, ['[a, c]', '[b, c]', '[a, b]'], '`remove(1)` quita el elemento del índice 1, la "b".'),
        out(`List<Integer> l = new ArrayList<>();\nl.add(5);\nl.add(0, 9);\nSystem.out.println(l.get(0) + l.get(1));`, ['14', '95', '9', '5'], '`add(0, 9)` inserta el 9 al principio: [9, 5]. Son `Integer`, así que se suman: 14.'),
        out(`List<Integer> l = new ArrayList<>(List.of(10, 20, 30));\nl.remove(Integer.valueOf(10));\nl.remove(0);\nl.add(5);\nSystem.out.println(l + " " + l.size());`, ['[30, 5] 2', '[20, 5] 2', '[10, 30, 5] 3', '[30, 5] 3'], 'Primero se quita el valor 10 ([20, 30]), luego el índice 0 ([30]) y se añade 5: [30, 5], con 2 elementos.'),
      ],
    },
    // ───────────── Día 9 ─────────────
    {
      id: 'java-sets',
      t: 'Sets',
      d: 'HashSet, TreeSet, LinkedHashSet y operaciones de conjuntos.',
      guide: [
        { h: 'Qué es un Set', p: [
          'Un `Set` es una colección sin duplicados: si añades un elemento que ya está, no pasa nada. Es perfecto para etiquetas, usuarios únicos o palabras distintas.',
          'Comprobar si algo está en un `HashSet` con `contains()` es casi instantáneo aunque tenga millones de elementos; en una lista habría que recorrerla entera.' ],
          code: `Set<String> etiquetas = new HashSet<>();\netiquetas.add("java");\netiquetas.add("poo");\netiquetas.add("java");                         // ya estaba\nSystem.out.println(etiquetas.size());          // 2\nSystem.out.println(etiquetas.contains("poo")); // true` },
        { h: 'Tres implementaciones', p: [
          '`HashSet` es el más rápido, pero no garantiza ningún orden al recorrerlo.',
          '`LinkedHashSet` recuerda el orden de inserción y `TreeSet` mantiene los elementos ordenados (números de menor a mayor, textos alfabéticamente).',
          'Elige `HashSet` por defecto y cambia solo si necesitas un orden concreto.' ],
          code: `List<Integer> datos = List.of(5, 1, 3, 1);\nSystem.out.println(new LinkedHashSet<>(datos)); // [5, 1, 3]\nSystem.out.println(new TreeSet<>(datos));       // [1, 3, 5]` },
        { h: 'add, remove y su resultado', p: [
          '`add()` devuelve `true` si el elemento era nuevo y `false` si ya estaba. Así puedes detectar duplicados mientras insertas.',
          '`remove()` también devuelve si el conjunto cambió. Un `Set` no tiene índices: no existe `get(0)`.' ],
          code: `Set<String> vistos = new HashSet<>();\nSystem.out.println(vistos.add("ana"));   // true\nSystem.out.println(vistos.add("ana"));   // false, repetido\nSystem.out.println(vistos.remove("eva")); // false, no estaba` },
        { h: 'Unión, intersección y diferencia', p: [
          '`addAll` hace la unión, `retainAll` la intersección (deja solo los comunes) y `removeAll` la diferencia.',
          'Los tres modifican el conjunto sobre el que los llamas. Si quieres conservar el original, haz antes una copia: `new HashSet<>(a)`.' ],
          code: `Set<String> lunes = Set.of("Ana", "Luis", "Eva");\nSet<String> martes = Set.of("Eva", "Teo");\n\nSet<String> ambos = new TreeSet<>(lunes);\nambos.retainAll(martes);\nSystem.out.println(ambos);   // [Eva]\n\nSet<String> todos = new TreeSet<>(lunes);\ntodos.addAll(martes);\nSystem.out.println(todos);   // [Ana, Eva, Luis, Teo]` },
        { h: 'Ejemplo real: quitar emails repetidos', real: true, p: [
          'Una newsletter recibe inscripciones desde varios formularios y algunos emails llegan dos veces. Con un `LinkedHashSet` se eliminan los repetidos y se respeta el orden de llegada.' ],
          code: `List<String> inscritos = List.of(\n    "ana@mail.com", "luis@mail.com", "ana@mail.com",\n    "eva@mail.com", "luis@mail.com");\nSet<String> unicos = new LinkedHashSet<>(inscritos);\nSystem.out.println(unicos.size());  // 3\nSystem.out.println(unicos);         // [ana@mail.com, luis@mail.com, eva@mail.com]` },
      ],
      x: [
        mc('¿Qué colección no permite elementos duplicados?', ['HashSet', 'ArrayList', 'LinkedList', 'int[]'], 'Un `Set` guarda cada elemento una sola vez.'),
        out(`Set<String> s = new HashSet<>();\ns.add("a");\ns.add("a");\ns.add("b");\nSystem.out.println(s.size());`, ['2', '3', '1'], 'La segunda "a" se ignora porque ya estaba.'),
        mc('¿Qué devuelve `set.add(x)` si x ya estaba en el conjunto?', ['false', 'true', 'null', 'Lanza una excepción'], '`add` devuelve si el conjunto ha cambiado; si x ya estaba, no cambia.'),
        out(`Set<Integer> s = new TreeSet<>(List.of(5, 1, 3));\nSystem.out.println(s);`, ['[1, 3, 5]', '[5, 1, 3]', '[5, 3, 1]', '{1, 3, 5}'], '`TreeSet` mantiene los elementos ordenados de menor a mayor.'),
        mc('¿Qué Set conserva el orden en que se añadieron los elementos?', ['LinkedHashSet', 'HashSet', 'TreeSet', 'SortedSet'], '`TreeSet` ordena por valor; `LinkedHashSet` respeta el orden de llegada.'),
        fill(`Set<String> todos = new TreeSet<>(grupoA);\ntodos.___(grupoB);  // unión de los dos grupos`, ['addAll', 'retainAll', 'removeAll', 'union'], '`addAll` añade todos los elementos del otro conjunto: es la unión.'),
        out(`Set<Integer> a = new TreeSet<>(List.of(1, 2, 3));\na.retainAll(List.of(2, 3, 4));\nSystem.out.println(a);`, ['[2, 3]', '[1, 2, 3, 4]', '[1]', '[4]'], '`retainAll` deja solo los elementos comunes: es la intersección.'),
        out(`Set<String> s = new TreeSet<>(List.of("pera", "kiwi", "uva"));\nboolean b = s.add("kiwi");\ns.removeAll(Set.of("uva", "mango"));\nSystem.out.println(b + " " + s);`, ['false [kiwi, pera]', 'true [kiwi, pera]', 'false [pera, kiwi]', 'false [kiwi, pera, uva]'], '"kiwi" ya estaba, así que `add` da false. `removeAll` quita "uva" (mango no estaba) y el `TreeSet` muestra el resto en orden alfabético.'),
      ],
    },
    // ───────────── Día 10 ─────────────
    {
      id: 'java-maps',
      t: 'Maps',
      d: 'HashMap y TreeMap: put, get, getOrDefault, merge y recorrido.',
      guide: [
        { h: 'Qué es un Map', p: [
          'Un `Map` asocia claves únicas a valores, como un diccionario: el código postal de cada ciudad, el stock de cada producto, la nota de cada alumno.',
          'Se declara con dos tipos: `Map<String, Integer> stock = new HashMap<>();`. Las claves no se repiten; si haces `put` con una clave que ya existe, reemplazas su valor.' ] },
        { h: 'Añadir, leer y borrar', p: [
          '`put(k, v)` añade o reemplaza y `get(k)` lee. Si la clave no existe, `get` devuelve `null`, y usarlo como número lanza `NullPointerException`.',
          '`getOrDefault(k, valor)` devuelve un valor alternativo cuando falta la clave. `containsKey()` comprueba si existe y `remove()` la borra.' ],
          code: `Map<String, Integer> stock = new HashMap<>();\nstock.put("manzanas", 12);\nstock.put("peras", 5);\nstock.put("peras", 8);                              // reemplaza\nSystem.out.println(stock.get("peras"));             // 8\nSystem.out.println(stock.get("uvas"));              // null\nSystem.out.println(stock.getOrDefault("uvas", 0));  // 0\nSystem.out.println(stock.containsKey("manzanas"));  // true` },
        { h: 'Recorrer un Map y elegir implementación', p: [
          '`keySet()` da las claves, `values()` los valores y `entrySet()` los pares; cada `Map.Entry` tiene `getKey()` y `getValue()`.',
          '`HashMap` no garantiza orden, `LinkedHashMap` respeta el de inserción y `TreeMap` ordena por clave.' ],
          code: `Map<String, Double> notas = new TreeMap<>();\nnotas.put("Luis", 6.5);\nnotas.put("Ana", 9.0);\nfor (Map.Entry<String, Double> e : notas.entrySet()) {\n    System.out.println(e.getKey() + " -> " + e.getValue());\n}\n// Ana -> 9.0\n// Luis -> 6.5` },
        { h: 'Contar con merge', p: [
          'Contar cuántas veces aparece algo es de lo más habitual. `merge(clave, 1, Integer::sum)` pone 1 si la clave es nueva y, si ya existe, le suma 1.',
          'La alternativa clásica es `m.put(k, m.getOrDefault(k, 0) + 1)`. Las dos hacen lo mismo; `merge` es más corta.' ],
          code: `Map<String, Integer> votos = new HashMap<>();\nfor (String v : new String[] {"sí", "no", "sí"}) {\n    votos.merge(v, 1, Integer::sum);\n}\nSystem.out.println(votos.get("sí"));  // 2` },
        { h: 'Ejemplo real: contar las palabras de un texto', real: true, p: [
          'Un analizador de textos cuenta cuántas veces aparece cada palabra, por ejemplo para encontrar las más repetidas en reseñas de clientes. El `TreeMap` las muestra en orden alfabético.' ],
          code: `String texto = "el gato y el perro y el pez";\nMap<String, Integer> cuenta = new TreeMap<>();\nfor (String palabra : texto.split(" ")) {\n    cuenta.merge(palabra, 1, Integer::sum);\n}\nSystem.out.println(cuenta);  // {el=3, gato=1, perro=1, pez=1, y=2}` },
      ],
      x: [
        out(`Map<String, Integer> m = new HashMap<>();\nm.put("x", 1);\nm.put("x", 5);\nSystem.out.println(m.get("x"));`, ['5', '1', '6', '[1, 5]'], 'Las claves son únicas: el segundo `put` sustituye el valor.'),
        out(`Map<String, Integer> m = new HashMap<>();\nSystem.out.println(m.get("z"));`, ['null', '0', 'Error'], '`get` devuelve `null` si la clave no existe.'),
        out(`Map<String, Integer> m = new HashMap<>();\nSystem.out.println(m.getOrDefault("z", 0));`, ['0', 'null', 'z'], '`getOrDefault` devuelve el valor alternativo porque la clave no existe.'),
        typ('Comprueba si el mapa tiene la clave "peras"', `if (stock.___("peras")) {\n    System.out.println("Hay peras");\n}`, 'containsKey', '`containsKey` devuelve `true` si la clave existe en el mapa.'),
        fill(`for (Map.Entry<String, Integer> e : mapa.___()) {\n    System.out.println(e.getKey() + "=" + e.getValue());\n}`, ['entrySet', 'entries', 'items', 'keySet'], '`entrySet` da los pares clave-valor; `keySet` daría solo las claves.'),
        out(`Map<String, Integer> m = new TreeMap<>();\nm.put("b", 2);\nm.put("a", 1);\nSystem.out.println(m);`, ['{a=1, b=2}', '{b=2, a=1}', '[a, b]', '{1, 2}'], '`TreeMap` ordena por clave y se imprime con llaves.'),
        mc('¿Qué Map recorre las claves en el orden en que se añadieron?', ['LinkedHashMap', 'HashMap', 'TreeMap', 'SortedMap'], '`HashMap` no garantiza orden y `TreeMap` ordena por clave.'),
        out(`Map<Character, Integer> c = new TreeMap<>();\nfor (char ch : "banana".toCharArray()) {\n    c.merge(ch, 1, Integer::sum);\n}\nSystem.out.println(c);`, ['{a=3, b=1, n=2}', '{b=1, a=3, n=2}', '{a=1, b=1, n=1}', '{a=3, n=2, b=1}'], '`merge` cuenta cada letra: tres a, una b y dos n. El `TreeMap` las ordena alfabéticamente.'),
      ],
    },
    // ───────────── Día 11 ─────────────
    {
      id: 'java-methods',
      t: 'Métodos',
      d: 'Tipos de retorno, void, parámetros, sobrecarga y recursión.',
      guide: [
        { h: 'Qué es un método', p: [
          'Un método es un bloque de código con nombre que puedes llamar las veces que quieras. Evita repetir código y hace que cada parte del programa tenga una sola tarea.',
          'Su cabecera indica los modificadores, el tipo que devuelve, el nombre y los parámetros: `static int sumar(int a, int b)`. Por ahora los declaramos `static` para llamarlos directamente desde `main`; el día 13 verás los métodos de objeto.' ],
          code: `public class Calculadora {\n    static int sumar(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        int r = sumar(4, 6);\n        System.out.println(r);          // 10\n        System.out.println(sumar(1, 1)); // 2\n    }\n}` },
        { h: 'return y void', p: [
          '`return` termina el método y devuelve un valor del tipo declarado. Si el método devuelve `int`, todos los caminos tienen que acabar en un `return` con un entero o no compila.',
          'Un método `void` no devuelve nada: hace algo (imprimir, guardar, enviar) y termina. Puede usar `return;` sin valor para salir antes.' ],
          code: `static void saludar(String nombre) {\n    if (nombre.isEmpty()) {\n        return;               // sale sin hacer nada\n    }\n    System.out.println("Hola, " + nombre);\n}\n\nstatic boolean esPar(int n) {\n    return n % 2 == 0;\n}` },
        { h: 'Paso por valor', p: [
          'Java siempre pasa los argumentos por valor: el método recibe una copia. Si cambias un parámetro `int` dentro del método, la variable original no cambia.',
          'Con objetos y arrays se copia la referencia, no el objeto. Por eso el método sí puede modificar el contenido de un array que recibe, aunque no pueda hacer que la variable original apunte a otro.' ],
          code: `static void intentarCambiar(int x) { x = 99; }\nstatic void vaciar(int[] a) { a[0] = 0; }\n\nint n = 5;\nintentarCambiar(n);\nSystem.out.println(n);      // 5\n\nint[] datos = {7, 8};\nvaciar(datos);\nSystem.out.println(datos[0]); // 0` },
        { h: 'Sobrecarga y varargs', p: [
          'Puedes tener varios métodos con el mismo nombre si cambian los parámetros: es la sobrecarga. Java elige cuál llamar según los argumentos. `System.out.println` está sobrecargado para cada tipo.',
          'Con `int... nums` (varargs) un método acepta cualquier número de argumentos, que dentro se usan como un array.' ],
          code: `static int max(int a, int b) { return a > b ? a : b; }\nstatic double max(double a, double b) { return a > b ? a : b; }\n\nstatic int suma(int... nums) {\n    int total = 0;\n    for (int n : nums) total += n;\n    return total;\n}\n\nSystem.out.println(max(3, 8));       // 8\nSystem.out.println(max(2.5, 1.0));   // 2.5\nSystem.out.println(suma(1, 2, 3, 4)); // 10` },
        { h: 'Recursión', p: [
          'Un método recursivo se llama a sí mismo con un problema más pequeño. Necesita un caso base que no se llame más; si falta, la pila se llena y Java lanza `StackOverflowError`.',
          'Es natural para estructuras que se repiten dentro de sí mismas, como carpetas con subcarpetas. Para cálculos simples, un bucle suele ser más eficiente.' ],
          code: `static int factorial(int n) {\n    if (n <= 1) return 1;          // caso base\n    return n * factorial(n - 1);   // caso recursivo\n}\n\nSystem.out.println(factorial(5));  // 120` },
        { h: 'Ejemplo real: el precio final de un pedido', real: true, p: [
          'Una tienda aplica un descuento y después el IVA. Separar cada paso en un método con buen nombre hace que el cálculo se lea como una frase y se pueda reutilizar.' ],
          code: `static double aplicarDescuento(double precio, int porcentaje) {\n    return precio - precio * porcentaje / 100;\n}\n\nstatic double redondear(double valor) {\n    return Math.round(valor * 100) / 100.0;\n}\n\ndouble conDescuento = aplicarDescuento(80.0, 15);\nSystem.out.println(conDescuento);                   // 68.0\nSystem.out.println(redondear(conDescuento * 1.21)); // 82.28` },
      ],
      x: [
        fill(`public static ___ sumar(int a, int b) {\n    return a + b;\n}`, ['int', 'void', 'return', 'function'], 'El método devuelve la suma de dos enteros, así que su tipo de retorno es `int`.'),
        mc('¿Qué significa `void` en la cabecera de un método?', ['Que no devuelve ningún valor', 'Que no recibe parámetros', 'Que es privado', 'Que es estático'], '`void` indica que el método no tiene valor de retorno.'),
        typ('Completa el método para que devuelva el doble', `static int doble(int n) {\n    ___ n * 2;\n}`, 'return', '`return` devuelve el valor y termina el método.'),
        out(`static int cuadrado(int n) {\n    return n * n;\n}\n\nSystem.out.println(cuadrado(cuadrado(2)));`, ['16', '8', '4', '2'], 'Primero `cuadrado(2)` da 4 y luego `cuadrado(4)` da 16.'),
        mc('`int max(int a, int b)` y `double max(double a, double b)` en la misma clase son...', ['Sobrecarga de métodos', 'Un error de compilación', 'Herencia', 'Sobrescritura'], 'Mismo nombre con parámetros distintos: Java elige cuál usar según el tipo de los argumentos.'),
        out(`static void cambiar(int x) { x = 99; }\n\nint n = 1;\ncambiar(n);\nSystem.out.println(n);`, ['1', '99', '0', 'Error'], 'Java pasa los primitivos por valor: el método modifica una copia.'),
        out(`static void duplicar(int[] a) { a[0] *= 2; }\n\nint[] v = {5, 1};\nduplicar(v);\nSystem.out.println(v[0]);`, ['10', '5', '0', 'Error'], 'Se copia la referencia al array, así que el método modifica el mismo array que ve `main`.'),
        out(`static int suma(int... nums) {\n    int t = 0;\n    for (int n : nums) t += n;\n    return t;\n}\nstatic int fact(int n) {\n    return n <= 1 ? 1 : n * fact(n - 1);\n}\n\nSystem.out.println(suma(1, 2, 3) + fact(4));`, ['30', '10', '33', '624'], '`suma(1, 2, 3)` da 6 y `fact(4)` da 4 × 3 × 2 × 1 = 24. Los dos son `int`, así que se suman: 30.'),
      ],
    },
    // ───────────── Día 12 ─────────────
    {
      id: 'java-packages',
      t: 'Paquetes e imports',
      d: 'package, import, java.lang y modificadores de acceso.',
      guide: [
        { h: 'Paquetes', p: [
          'Un paquete agrupa clases relacionadas, igual que una carpeta agrupa archivos. De hecho, cada paquete corresponde a una carpeta: `com.tienda.modelo` vive en `com/tienda/modelo/`.',
          'Por convención se usa el dominio de la empresa al revés (`com.empresa.proyecto`), todo en minúsculas. Así dos librerías distintas pueden tener una clase `Usuario` sin chocar.',
          'La línea `package` va la primera del archivo; antes solo puede haber comentarios.' ],
          code: `// Archivo: src/com/tienda/modelo/Producto.java\npackage com.tienda.modelo;\n\npublic class Producto {\n    // ...\n}` },
        { h: 'import', p: [
          'Para usar una clase de otro paquete la importas: `import java.util.List;`. El comodín `import java.util.*;` importa todas las clases de ese paquete, pero no sus subpaquetes.',
          'El paquete `java.lang` se importa solo: por eso usas `String`, `Math`, `Integer` o `System` sin escribir nada. Con `import static` puedes usar miembros estáticos sin el nombre de la clase.' ],
          code: `import java.util.ArrayList;\nimport java.util.List;\nimport java.time.LocalDate;\nimport static java.lang.Math.PI;\n\ndouble area = PI * 2 * 2;   // sin escribir Math.PI` },
        { h: 'Modificadores de acceso', p: [
          '`public`: visible desde cualquier clase. `protected`: desde el mismo paquete y desde las subclases. Sin modificador (package-private): solo desde el mismo paquete. `private`: solo dentro de la propia clase.',
          'La regla práctica: empieza por lo más restrictivo (`private`) y abre solo lo que otras clases necesiten de verdad. Cuanto menos expongas, menos cosas pueden romperse al cambiar el código.' ] },
        { h: 'La biblioteca estándar', p: [
          'Java trae miles de clases listas para usar. Las que más vas a importar: `java.util` (colecciones, `Scanner`, `Random`), `java.time` (fechas), `java.nio.file` (archivos) y `java.util.stream` (streams).',
          '`Scanner` lee lo que el usuario escribe en la consola, y `Random` genera números aleatorios.' ],
          code: `import java.util.Random;\nimport java.util.Scanner;\n\nScanner teclado = new Scanner(System.in);\nSystem.out.print("¿Cómo te llamas? ");\nString nombre = teclado.nextLine();\n\nRandom azar = new Random();\nint dado = azar.nextInt(6) + 1;   // de 1 a 6\nSystem.out.println(nombre + " ha sacado un " + dado);` },
        { h: 'Ejemplo real: organizar el proyecto de una tienda', real: true, p: [
          'En un proyecto real cada capa va en su paquete: el modelo de datos en uno y la aplicación en otro. Los modificadores deciden qué puede usar cada parte.' ],
          code: `// Archivo: src/com/tienda/modelo/Producto.java\npackage com.tienda.modelo;\n\npublic class Producto {\n    public String nombre;\n    double precio;   // package-private: solo com.tienda.modelo\n}\n\n// Archivo: src/com/tienda/app/Main.java\npackage com.tienda.app;\n\nimport com.tienda.modelo.Producto;\n\npublic class Main {\n    public static void main(String[] args) {\n        Producto p = new Producto();\n        p.nombre = "Teclado";   // public: permitido\n        // p.precio = 25;       // error: no es visible desde otro paquete\n    }\n}` },
      ],
      x: [
        fill(`___ java.util.Scanner;`, ['import', 'include', 'using', 'require'], '`import` trae clases de otros paquetes. `include` es de C y `using` de C#.'),
        mc('¿Qué paquete se importa automáticamente en todo programa Java?', ['java.lang', 'java.util', 'java.io', 'java.main'], 'Por eso puedes usar `String`, `Math` o `System` sin importarlos.'),
        mc('¿Dónde se escribe la declaración `package`?', ['En la primera línea del archivo', 'Al final del archivo', 'Dentro del método main', 'En cualquier sitio'], 'Solo pueden ir comentarios antes de ella.'),
        out(`System.out.println(Math.max(3, 8) + Math.abs(-2));`, ['10', '6', '11', '5'], '`Math.max(3, 8)` es 8 y `Math.abs(-2)` es 2. `Math` está en `java.lang`, no hace falta importarla.'),
        ord('Escribe el import de la clase Scanner', ['import', 'java', '.', 'util', '.', 'Scanner', ';'], ['include', '#'], '`Scanner` está en el paquete `java.util` y la línea termina en `;`.'),
        mc('Un atributo sin modificador de acceso es visible...', ['Solo desde su mismo paquete', 'Desde cualquier clase', 'Solo dentro de su clase', 'Solo desde las subclases'], 'Es el acceso package-private, el que se aplica por defecto.'),
        mc('¿Qué importa `import java.util.*;`?', ['Todas las clases del paquete java.util, sin sus subpaquetes', 'Todos los paquetes de Java', 'java.util y también java.util.function', 'Nada, es un error'], 'El comodín no incluye subpaquetes como `java.util.function`, que se importan aparte.'),
        mc('`Panel` está en otro paquete y no hereda de `Cuenta`. ¿Qué línea compila dentro de `Panel`?', ['c.titular = "Ana";', 'c.saldo = 100;', 'c.numero = 7;', 'c.pin = "1234";'], 'Desde otro paquete y sin herencia solo se ve lo `public`. `protected` exige ser subclase, el acceso por defecto exige el mismo paquete y `private` solo vale dentro de `Cuenta`.', `package com.app.modelo;\n\npublic class Cuenta {\n    public String titular;\n    protected double saldo;\n    int numero;\n    private String pin;\n}\n\n// En com.app.web.Panel:\nCuenta c = new Cuenta();`),
      ],
    },
    // ───────────── Día 13 ─────────────
    {
      id: 'java-classes',
      t: 'Clases y objetos',
      d: 'Atributos, métodos, constructores, new y this.',
      guide: [
        { h: 'Clases y objetos', p: [
          'Una clase es un molde: describe qué datos tiene algo (atributos) y qué sabe hacer (métodos). Un objeto es una instancia concreta de ese molde, creada con `new`.',
          'La clase `Coche` dice que todo coche tiene marca y velocidad; tu coche y el de tu vecina son dos objetos distintos, cada uno con sus valores.',
          'Pensar en objetos ayuda a modelar el mundo real: un pedido, un usuario, una factura. Cada uno guarda sus datos y las operaciones que los usan.' ],
          code: `class Coche {\n    String marca;\n    int velocidad;\n\n    void acelerar(int kmh) {\n        velocidad += kmh;\n    }\n}\n\nCoche c = new Coche();\nc.marca = "Seat";\nc.acelerar(50);\nSystem.out.println(c.marca + " a " + c.velocidad);  // Seat a 50` },
        { h: 'Constructores', p: [
          'El constructor prepara el objeto cuando se crea. Se llama igual que la clase y no declara tipo de retorno, ni siquiera `void`.',
          'Si no escribes ninguno, Java crea uno vacío. Pero si escribes uno con parámetros, el vacío desaparece: `new Coche()` dejaría de compilar.',
          'Puedes tener varios constructores (sobrecarga), y uno puede llamar a otro con `this(...)`.' ],
          code: `class Coche {\n    String marca;\n    int velocidad;\n\n    Coche(String marca) {\n        this(marca, 0);           // llama al otro constructor\n    }\n\n    Coche(String marca, int velocidad) {\n        this.marca = marca;\n        this.velocidad = velocidad;\n    }\n}` },
        { h: 'this', p: [
          '`this` es una referencia al objeto actual. Se usa sobre todo para distinguir un atributo de un parámetro con el mismo nombre: `this.marca = marca;`.',
          'Si olvidas `this` en ese caso, asignas el parámetro a sí mismo y el atributo se queda en `null`. El código compila, pero no hace lo que querías.' ] },
        { h: 'Referencias y null', p: [
          'Una variable de tipo objeto no guarda el objeto, guarda una referencia a él. Si haces `Coche b = a;`, las dos variables apuntan al mismo coche.',
          'Una referencia que no apunta a nada vale `null`. Llamar a un método sobre `null` lanza `NullPointerException`, el error más famoso de Java.' ],
          code: `Coche a = new Coche("Seat");\nCoche b = a;            // mismo objeto\nb.velocidad = 120;\nSystem.out.println(a.velocidad);  // 120\n\nCoche c = null;\n// c.acelerar(10);      // NullPointerException` },
        { h: 'Ejemplo real: las líneas de un pedido', real: true, p: [
          'Cada línea de un pedido online tiene producto, precio y cantidad, y sabe calcular su subtotal. El objeto agrupa los datos con la operación que los usa.' ],
          code: `class LineaPedido {\n    String producto;\n    double precio;\n    int cantidad;\n\n    LineaPedido(String producto, double precio, int cantidad) {\n        this.producto = producto;\n        this.precio = precio;\n        this.cantidad = cantidad;\n    }\n\n    double subtotal() {\n        return precio * cantidad;\n    }\n}\n\nLineaPedido a = new LineaPedido("Camiseta", 12.5, 2);\nLineaPedido b = new LineaPedido("Gorra", 9.0, 1);\nSystem.out.println(a.subtotal() + b.subtotal());  // 34.0` },
      ],
      x: [
        mc('¿Qué es un objeto?', ['Una instancia concreta creada a partir de una clase', 'Un tipo primitivo', 'Un método estático', 'Un paquete'], 'La clase es el molde; el objeto, lo que sale de él con `new`.'),
        fill(`public class Coche {\n    private String marca;\n\n    public ___(String marca) {\n        this.marca = marca;\n    }\n}`, ['Coche', 'constructor', 'void Coche', 'new'], 'El constructor se llama igual que la clase y no lleva tipo de retorno.'),
        ord('Crea un objeto Coche de marca Seat', ['Coche', 'c', '=', 'new', 'Coche', '(', '"Seat"', ')', ';'], ['create', 'make'], '`new` crea el objeto y llama al constructor con los argumentos.'),
        mc('Dentro de un método, ¿qué es `this`?', ['Una referencia al objeto actual', 'La clase padre', 'Un método estático', 'El paquete actual'], '`this.marca` es el atributo del objeto; `marca` a secas sería el parámetro.'),
        out(`class Punto {\n    int x, y;\n    Punto(int x, int y) { this.x = x; this.y = y; }\n}\n\nPunto p = new Punto(2, 3);\nSystem.out.println(p.x + p.y);`, ['5', '23', '2', 'Error'], 'El constructor guarda 2 y 3 en los atributos; son `int`, así que se suman: 5.'),
        out(`class C { int v = 1; }\n\nC a = new C();\nC b = a;\nb.v = 7;\nSystem.out.println(a.v);`, ['7', '1', '0', 'Error'], '`a` y `b` apuntan al mismo objeto: cambiarlo desde una se ve desde la otra.'),
        mc('¿Qué ocurre al ejecutar este código?', ['Se lanza NullPointerException', 'Imprime null', 'Imprime una cadena vacía', 'No compila'], 'La variable no apunta a ningún objeto, así que no se puede llamar a sus métodos. Compila, pero falla al ejecutar.', `Coche c = null;\nSystem.out.println(c.getMarca());`),
        out(`class Contador {\n    int valor;\n    Contador() { this(10); }\n    Contador(int inicio) { valor = inicio; }\n    void sumar() { valor++; }\n}\n\nContador a = new Contador();\nContador b = new Contador(3);\nContador c = a;\nc.sumar();\nb.sumar();\nSystem.out.println(a.valor + " " + b.valor);`, ['11 4', '10 4', '11 3', '10 3'], 'El constructor vacío llama a `this(10)`. `c` apunta al mismo objeto que `a`, así que `a` llega a 11; `b` pasa de 3 a 4.'),
      ],
    },
    // ───────────── Día 14 ─────────────
    {
      id: 'java-encapsulation',
      t: 'Encapsulación',
      d: 'private, getters, setters con validación, static y final.',
      guide: [
        { h: 'Por qué encapsular', p: [
          'Si cualquiera puede escribir `cuenta.saldo = -500;`, tu programa tendrá cuentas imposibles. Encapsular es ocultar el estado interno con `private` y permitir cambiarlo solo a través de métodos que comprueban las reglas.',
          'Así la clase se protege a sí misma: da igual quién la use, nunca quedará en un estado inválido. Y puedes cambiar cómo funciona por dentro sin romper a quien la usa.' ] },
        { h: 'Getters y setters', p: [
          'Un getter devuelve un atributo privado (`getNombre()`, o `isActivo()` para `boolean`). Un setter lo modifica (`setEdad(int edad)`) y es el lugar perfecto para validar.',
          'No crees setters por costumbre: si un dato no debería cambiar después de crear el objeto, no le pongas setter.' ],
          code: `public class Alumno {\n    private String nombre;\n    private int edad;\n\n    public String getNombre() { return nombre; }\n\n    public void setEdad(int edad) {\n        if (edad < 0) {\n            throw new IllegalArgumentException("Edad negativa");\n        }\n        this.edad = edad;\n    }\n}` },
        { h: 'static: de la clase, no del objeto', p: [
          'Un atributo `static` existe una sola vez, en la clase, y lo comparten todos los objetos. Sirve para contadores globales o configuración común.',
          'Un método `static` se llama con el nombre de la clase (`Math.max(3, 8)`) y no puede usar atributos de instancia, porque no pertenece a ningún objeto concreto.' ],
          code: `class Usuario {\n    static int total = 0;   // compartido\n    String nombre;          // uno por objeto\n\n    Usuario(String nombre) {\n        this.nombre = nombre;\n        total++;\n    }\n}\n\nnew Usuario("Ana");\nnew Usuario("Luis");\nSystem.out.println(Usuario.total);  // 2` },
        { h: 'final y objetos inmutables', p: [
          'Un atributo `final` se asigna una vez (al declararlo o en el constructor) y ya no cambia. Si todos los atributos son `private final` y no hay setters, el objeto es inmutable, como `String`.',
          'Los objetos inmutables son más fáciles de razonar y seguros entre hilos. Las constantes se declaran `static final` y en MAYÚSCULAS: `static final int MAX_INTENTOS = 3;`.' ] },
        { h: 'Ejemplo real: una cuenta bancaria segura', real: true, p: [
          'El saldo es privado y solo cambia con `ingresar` y `retirar`, que rechazan cantidades inválidas. El IBAN es `final`: una cuenta no cambia de número.' ],
          code: `public class CuentaBancaria {\n    private final String iban;\n    private double saldo;\n\n    public CuentaBancaria(String iban) {\n        this.iban = iban;\n    }\n\n    public void ingresar(double cantidad) {\n        if (cantidad > 0) saldo += cantidad;\n    }\n\n    public boolean retirar(double cantidad) {\n        if (cantidad <= 0 || cantidad > saldo) return false;\n        saldo -= cantidad;\n        return true;\n    }\n\n    public double getSaldo() { return saldo; }\n}\n\nCuentaBancaria c = new CuentaBancaria("ES12 3456");\nc.ingresar(100);\nSystem.out.println(c.retirar(150));  // false\nSystem.out.println(c.retirar(40));   // true\nSystem.out.println(c.getSaldo());    // 60.0` },
      ],
      x: [
        mc('¿Para qué sirve `private` en un atributo?', ['Para que solo sea accesible dentro de su clase', 'Para impedir crear objetos', 'Para hacerlo constante', 'Para compartirlo entre objetos'], 'Desde fuera solo se accede a través de los métodos públicos que la clase decida ofrecer.'),
        typ('Escribe el modificador que oculta el atributo fuera de la clase', `public class Cuenta {\n    ___ double saldo;\n}`, 'private', '`private` limita el acceso a la propia clase.'),
        fill(`public String ___() {\n    return nombre;\n}`, ['getNombre', 'nombre', 'get', 'Nombre'], 'Por convención, los getters se llaman `get` más el nombre del atributo en mayúscula.'),
        mc('¿Qué hace `final` en un atributo?', ['Impide cambiar su valor después de asignarlo', 'Lo hace privado', 'Lo comparte entre objetos', 'Lo borra al terminar el programa'], 'Se usa para constantes y para objetos inmutables.'),
        mc('¿Qué significa que un atributo sea `static`?', ['Pertenece a la clase y lo comparten todas las instancias', 'No puede cambiar de valor', 'Solo es visible dentro de la clase', 'Se borra al salir del método'], 'Existe una sola vez, en la clase, no una por objeto.'),
        out(`class Ticket {\n    static int emitidos = 0;\n    Ticket() { emitidos++; }\n}\n\nnew Ticket();\nnew Ticket();\nnew Ticket();\nSystem.out.println(Ticket.emitidos);`, ['3', '1', '0', 'Error'], 'Los tres objetos comparten el mismo contador `static`, y cada constructor lo incrementa.'),
        mc('¿Por qué conviene validar dentro de un setter?', ['Para impedir estados inválidos, como una edad negativa', 'Para que el código sea más rápido', 'Porque Java lo exige', 'Para poder heredar el atributo'], 'La clase protege sus propias reglas, la use quien la use.'),
        out(`class Termostato {\n    private int grados = 20;\n    private static final int MAX = 30;\n    void subir(int n) {\n        if (grados + n <= MAX) grados += n;\n    }\n    int getGrados() { return grados; }\n}\n\nTermostato t = new Termostato();\nt.subir(5);\nt.subir(8);\nt.subir(5);\nSystem.out.println(t.getGrados());`, ['30', '38', '25', '33'], '20 + 5 = 25. Subir 8 daría 33 y supera el máximo, así que se ignora. 25 + 5 = 30 sí está permitido.'),
      ],
    },
    // ───────────── Día 15 ─────────────
    {
      id: 'java-inheritance',
      t: 'Herencia',
      d: 'extends, super, @Override y la clase Object.',
      guide: [
        { h: 'extends: heredar de otra clase', p: [
          'Con `extends` una clase hija hereda los atributos y métodos de una clase padre y puede añadir los suyos. Así no repites el código común.',
          'La herencia expresa una relación "es un": un `Perro` es un `Animal`. Si la relación es "tiene un" (un coche tiene un motor), usa un atributo en lugar de herencia.',
          'Java solo permite heredar de una clase. Para combinar comportamientos de varias fuentes están las interfaces (día 16).' ],
          code: `class Animal {\n    protected String nombre;\n\n    Animal(String nombre) { this.nombre = nombre; }\n\n    String comer() { return nombre + " está comiendo"; }\n}\n\nclass Perro extends Animal {\n    Perro(String nombre) { super(nombre); }\n\n    String ladrar() { return nombre + ": ¡guau!"; }\n}\n\nPerro p = new Perro("Toby");\nSystem.out.println(p.comer());   // Toby está comiendo\nSystem.out.println(p.ladrar());  // Toby: ¡guau!` },
        { h: 'super', p: [
          '`super(...)` llama al constructor del padre y tiene que ser la primera línea del constructor hijo. Si el padre no tiene constructor vacío, estás obligado a llamarlo.',
          'Antes de ejecutar el constructor hijo siempre se construye la parte del padre. `super.metodo()` llama a la versión del padre de un método.' ] },
        { h: 'Sobrescribir métodos con @Override', p: [
          'Una clase hija puede redefinir un método del padre con la misma firma: es sobrescribir. Pon siempre `@Override` encima: si te equivocas en el nombre o los parámetros, el compilador te avisa.',
          'Sin `@Override`, un error de escritura crearía un método nuevo en silencio y el del padre seguiría ejecutándose.' ],
          code: `class Animal {\n    String sonido() { return "..."; }\n}\n\nclass Gato extends Animal {\n    @Override\n    String sonido() { return "Miau"; }\n}\n\nSystem.out.println(new Gato().sonido());  // Miau` },
        { h: 'La clase Object', p: [
          'Todas las clases heredan, directa o indirectamente, de `Object`. De ella vienen `toString()`, `equals()` y `hashCode()`.',
          'El `toString()` por defecto imprime algo como `Libro@1b6d3586`. Sobrescríbelo para que tus objetos se lean bien en los logs y al depurar.' ],
          code: `class Libro {\n    String titulo = "Dune";\n\n    @Override\n    public String toString() {\n        return "Libro: " + titulo;\n    }\n}\n\nSystem.out.println(new Libro());  // Libro: Dune` },
        { h: 'Ejemplo real: nóminas de empleados y gerentes', real: true, p: [
          'Todos los empleados cobran su sueldo anual en 12 pagas; los gerentes además reciben un bonus mensual. El gerente reutiliza el cálculo del padre con `super` y le suma el bonus.' ],
          code: `class Empleado {\n    protected String nombre;\n    protected double sueldoAnual;\n\n    Empleado(String nombre, double sueldoAnual) {\n        this.nombre = nombre;\n        this.sueldoAnual = sueldoAnual;\n    }\n\n    double sueldoMensual() { return sueldoAnual / 12; }\n}\n\nclass Gerente extends Empleado {\n    private double bonus;\n\n    Gerente(String nombre, double sueldoAnual, double bonus) {\n        super(nombre, sueldoAnual);\n        this.bonus = bonus;\n    }\n\n    @Override\n    double sueldoMensual() { return super.sueldoMensual() + bonus; }\n}\n\nSystem.out.println(new Empleado("Ana", 30000).sueldoMensual());     // 2500.0\nSystem.out.println(new Gerente("Luis", 48000, 500).sueldoMensual()); // 4500.0` },
      ],
      x: [
        fill(`class Perro ___ Animal {\n}`, ['extends', 'implements', 'inherits', ':'], 'En Java se hereda de una clase con `extends`. Los dos puntos son de C++ y C#.'),
        mc('¿De cuántas clases puede heredar directamente una clase en Java?', ['Solo de una', 'De dos', 'De las que quiera', 'De ninguna'], 'Java no tiene herencia múltiple de clases; para eso están las interfaces.'),
        out(`class A { String hola() { return "A"; } }\nclass B extends A { }\n\nSystem.out.println(new B().hola());`, ['A', 'B', 'null', 'Error'], 'B no define `hola`, así que usa la que hereda de A.'),
        mc('¿Qué hace `super(nombre)` dentro de un constructor?', ['Llama al constructor de la clase padre', 'Crea una copia del objeto', 'Vuelve a llamar al mismo constructor', 'Borra el objeto padre'], 'Debe ser la primera instrucción del constructor hijo.'),
        out(`class A { A() { System.out.print("A"); } }\nclass B extends A { B() { System.out.print("B"); } }\n\nnew B();`, ['AB', 'BA', 'B', 'A'], 'Antes de ejecutar el constructor hijo se construye la parte del padre.'),
        mc('¿Para qué sirve `@Override`?', ['Indica que el método sobrescribe uno del padre y el compilador lo comprueba', 'Crea un método nuevo', 'Hace el método estático', 'Impide que se herede el método'], 'Si la firma no coincide con ningún método del padre, el código no compila.'),
        out(`class Libro {\n    String titulo = "Dune";\n    @Override\n    public String toString() { return "Libro: " + titulo; }\n}\n\nSystem.out.println(new Libro());`, ['Libro: Dune', 'Dune', 'Libro@1b6d3586', 'null'], '`println` llama a `toString()`, y aquí está sobrescrito.'),
        out(`class Vehiculo {\n    String info() { return "Vehículo"; }\n    String describir() { return "Soy " + info(); }\n}\nclass Moto extends Vehiculo {\n    @Override\n    String info() { return "Moto, " + super.info(); }\n}\n\nSystem.out.println(new Moto().describir());`, ['Soy Moto, Vehículo', 'Soy Vehículo', 'Soy Moto', 'Moto, Soy Vehículo'], '`describir` se hereda, pero llama a `info()` del objeto real, que es una Moto. Su versión añade "Moto, " y usa `super.info()`.'),
      ],
    },
    // ───────────── Día 16 ─────────────
    {
      id: 'java-polymorphism',
      t: 'Polimorfismo e interfaces',
      d: 'interface, implements, clases abstractas y métodos default.',
      guide: [
        { h: 'Interfaces: un contrato', p: [
          'Una interfaz declara qué métodos debe tener una clase, sin decir cómo se hacen. La clase la cumple con `implements` y escribe esos métodos.',
          'Una clase solo hereda de una clase, pero puede implementar varias interfaces: `class Pato implements Volador, Nadador`.',
          'Los métodos de una interfaz son públicos, así que al implementarlos tienes que marcarlos `public`.' ],
          code: `interface Volador {\n    void volar();\n}\n\nclass Pato implements Volador {\n    public void volar() { System.out.println("El pato aletea"); }\n}\n\nclass Avion implements Volador {\n    public void volar() { System.out.println("El avión despega"); }\n}` },
        { h: 'Polimorfismo', p: [
          'Una variable de tipo interfaz (o de clase padre) puede guardar cualquier objeto que la cumpla. Al llamar a un método se ejecuta la versión de la clase real del objeto, no la del tipo de la variable.',
          'Así escribes código general (`for (Volador v : voladores) v.volar();`) que funciona con clases que aún no existen. Añadir un `Dron` no obliga a tocar ese bucle.' ],
          code: `List<Volador> voladores = List.of(new Pato(), new Avion());\nfor (Volador v : voladores) {\n    v.volar();\n}\n// El pato aletea\n// El avión despega` },
        { h: 'Clases abstractas', p: [
          'Una clase `abstract` no se puede instanciar. Puede tener métodos abstractos (sin cuerpo) que las hijas deben escribir y métodos normales que heredan.',
          '¿Interfaz o clase abstracta? Usa una interfaz para describir una capacidad ("se puede pagar", "se puede ordenar"). Usa una clase abstracta cuando las hijas comparten estado (atributos) o un constructor.' ],
          code: `abstract class Figura {\n    abstract double area();\n\n    String describir() {\n        return "Área: " + area();\n    }\n}\n\nclass Circulo extends Figura {\n    double r;\n    Circulo(double r) { this.r = r; }\n    double area() { return Math.PI * r * r; }\n}` },
        { h: 'Métodos default e instanceof', p: [
          'Desde Java 8, una interfaz puede traer métodos `default` con una implementación por defecto. Las clases los heredan y pueden sobrescribirlos.',
          'Con `instanceof` compruebas el tipo real de un objeto. Desde Java 16 puedes declarar la variable en la misma comprobación: `if (f instanceof Circulo c)`.' ],
          code: `Figura f = new Circulo(1);\nif (f instanceof Circulo c) {\n    System.out.println("Radio: " + c.r);  // Radio: 1.0\n}` },
        { h: 'Ejemplo real: métodos de pago en una tienda', real: true, p: [
          'Una tienda acepta tarjeta y transferencia, y cada método cobra una comisión distinta. La caja trabaja con la interfaz `MetodoPago` y no necesita saber cuál es cuál.' ],
          code: `interface MetodoPago {\n    double comision(double importe);\n\n    default double total(double importe) {\n        return importe + comision(importe);\n    }\n}\n\nclass Tarjeta implements MetodoPago {\n    public double comision(double importe) { return importe * 0.02; }\n}\n\nclass Transferencia implements MetodoPago {\n    public double comision(double importe) { return 0.50; }\n}\n\nfor (MetodoPago m : List.of(new Tarjeta(), new Transferencia())) {\n    System.out.println(m.total(100));\n}\n// 102.0\n// 100.5` },
      ],
      x: [
        fill(`interface Volador {\n    void volar();\n}\n\nclass Pajaro ___ Volador {\n    public void volar() { }\n}`, ['implements', 'extends', 'uses', 'with'], 'Las clases cumplen interfaces con `implements`; `extends` es para heredar de clases.'),
        mc('¿Qué es el polimorfismo?', ['Usar objetos de distintas clases a través de un tipo común', 'Tener muchos constructores', 'Copiar objetos', 'Heredar de varias clases'], 'El mismo código funciona con distintas implementaciones.'),
        out(`class Animal {\n    String sonido() { return "..."; }\n}\nclass Gato extends Animal {\n    @Override\n    String sonido() { return "Miau"; }\n}\n\nAnimal a = new Gato();\nSystem.out.println(a.sonido());`, ['Miau', '...', 'null', 'Error'], 'Aunque la variable es `Animal`, el objeto es un `Gato` y se ejecuta su método.'),
        fill(`___ class Figura {\n    abstract double area();\n}`, ['abstract', 'interface', 'virtual', 'static'], 'Una clase con métodos abstractos debe ser `abstract`.'),
        mc('Si `Figura` es abstracta, ¿qué pasa con `Figura f = new Figura();`?', ['No compila: una clase abstracta no se puede instanciar', 'Crea una figura vacía', 'Lanza una excepción al ejecutar', 'Crea un objeto de la primera subclase'], 'Solo puedes crear objetos de sus subclases concretas.'),
        mc('¿Qué puede tener una clase abstracta que una interfaz no puede?', ['Atributos de instancia y constructores', 'Métodos públicos', 'Constantes', 'Métodos default'], 'Las interfaces no guardan estado propio de cada objeto.'),
        out(`interface Saludo {\n    default String hola() { return "hola"; }\n}\nclass S implements Saludo { }\n\nSystem.out.println(new S().hola());`, ['hola', 'null', 'Error de compilación', 'S'], 'Los métodos `default` dan una implementación que la clase hereda sin escribir nada.'),
        out(`interface Forma { double area(); }\n\nclass Cuadrado implements Forma {\n    double lado;\n    Cuadrado(double lado) { this.lado = lado; }\n    public double area() { return lado * lado; }\n}\nclass Rectangulo implements Forma {\n    double b, h;\n    Rectangulo(double b, double h) { this.b = b; this.h = h; }\n    public double area() { return b * h; }\n}\n\ndouble total = 0;\nfor (Forma f : List.of(new Cuadrado(3), new Rectangulo(2, 5))) {\n    total += f.area();\n}\nSystem.out.println(total);`, ['19.0', '19', '14.0', 'Error'], 'Cada objeto usa su propia `area()`: 3 × 3 = 9 y 2 × 5 = 10. Son `double`, así que se imprime 19.0.'),
      ],
    },
    // ───────────── Día 17 ─────────────
    {
      id: 'java-exceptions',
      t: 'Excepciones',
      d: 'try, catch, finally, throw y checked frente a unchecked.',
      guide: [
        { h: 'Qué es una excepción', p: [
          'Una excepción es un objeto que Java lanza cuando algo sale mal: dividir entre cero, leer un archivo que no existe, convertir "abc" en número. Si nadie la captura, el programa se detiene y muestra la traza (stack trace).',
          'La traza no es tu enemiga: la primera línea dice el tipo de error y el mensaje, y las siguientes, en qué línea de qué archivo ocurrió. Léela de arriba abajo.' ] },
        { h: 'try, catch y finally', p: [
          '`try` encierra el código que puede fallar y `catch` captura un tipo concreto de excepción. Puedes poner varios `catch`, del más específico al más general, o unir tipos con `|`.',
          '`finally` se ejecuta siempre, haya error o no: es el sitio para cerrar conexiones o liberar recursos. Nunca dejes un `catch` vacío: esconde el error y luego no sabrás qué pasó.' ],
          code: `try {\n    int n = Integer.parseInt("42a");\n    System.out.println(n);\n} catch (NumberFormatException e) {\n    System.out.println("Formato inválido: " + e.getMessage());\n} finally {\n    System.out.println("Fin");\n}\n// Formato inválido: For input string: "42a"\n// Fin` },
        { h: 'Checked y unchecked', p: [
          'Las excepciones checked (como `IOException`) representan problemas externos previsibles. El compilador te obliga a capturarlas o a declararlas en el método con `throws`.',
          'Las unchecked heredan de `RuntimeException` (como `NullPointerException` o `IllegalArgumentException`) y suelen indicar un fallo de programación. No es obligatorio capturarlas: es mejor evitarlas.' ],
          code: `// checked: hay que declararla o capturarla\nstatic String leer(Path ruta) throws IOException {\n    return Files.readString(ruta);\n}\n\n// unchecked: indica un uso incorrecto\nstatic double raiz(double x) {\n    if (x < 0) throw new IllegalArgumentException("x negativo");\n    return Math.sqrt(x);\n}` },
        { h: 'throw y excepciones propias', p: [
          '`throw new Tipo("mensaje")` lanza una excepción. No confundas `throw` (lanzar, dentro del código) con `throws` (avisar, en la cabecera del método).',
          'Puedes crear tus propias excepciones heredando de `Exception` (checked) o `RuntimeException` (unchecked). Un nombre claro como `SaldoInsuficienteException` explica el problema solo con leerlo.' ],
          code: `class SaldoInsuficienteException extends Exception {\n    SaldoInsuficienteException(String msg) { super(msg); }\n}\n\nstatic void retirar(double saldo, double cantidad) throws SaldoInsuficienteException {\n    if (cantidad > saldo) {\n        throw new SaldoInsuficienteException("Faltan " + (cantidad - saldo) + " €");\n    }\n}` },
        { h: 'try-with-resources', p: [
          'Los recursos que hay que cerrar (archivos, conexiones) se abren entre paréntesis después de `try`. Java los cierra al terminar el bloque, aunque haya una excepción.',
          'Funciona con cualquier clase que implemente `AutoCloseable`, y evita los `finally` largos y propensos a errores.' ],
          code: `try (BufferedReader br = Files.newBufferedReader(Path.of("datos.txt"))) {\n    System.out.println(br.readLine());\n} catch (IOException e) {\n    System.out.println("No se pudo leer: " + e.getMessage());\n}` },
        { h: 'Ejemplo real: leer la edad de un formulario', real: true, p: [
          'Lo que escribe un usuario no es fiable. Este método convierte el texto en número, rechaza edades imposibles y no deja que un error tumbe la aplicación.' ],
          code: `static int leerEdad(String texto) {\n    try {\n        int edad = Integer.parseInt(texto.trim());\n        if (edad < 0 || edad > 120) {\n            throw new IllegalArgumentException("Edad fuera de rango: " + edad);\n        }\n        return edad;\n    } catch (NumberFormatException e) {\n        System.out.println("No es un número: " + texto);\n        return -1;\n    }\n}\n\nSystem.out.println(leerEdad(" 34 "));     // 34\nSystem.out.println(leerEdad("treinta"));\n// No es un número: treinta\n// -1` },
      ],
      x: [
        fill(`___ {\n    int n = Integer.parseInt("abc");\n} catch (NumberFormatException e) {\n    System.out.println("No es un número");\n}`, ['try', 'do', 'attempt', 'check'], 'El código que puede fallar va dentro de `try`.'),
        out(`try {\n    String s = null;\n    s.length();\n} catch (NullPointerException e) {\n    System.out.println("nulo");\n}`, ['nulo', '0', 'null', 'Error sin capturar'], 'Llamar a un método sobre `null` lanza `NullPointerException`, y aquí se captura.'),
        fill(`if (edad < 0) {\n    ___ new IllegalArgumentException("Edad negativa");\n}`, ['throw', 'throws', 'raise', 'error'], '`throw` lanza una excepción; `throws` la declara en la cabecera del método. `raise` es de Python.'),
        out(`try {\n    int[] a = new int[2];\n    a[5] = 1;\n    System.out.println("ok");\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("fuera");\n} finally {\n    System.out.println("fin");\n}`, ['fuera\nfin', 'ok\nfin', 'fin', 'fuera'], '`a[5]` lanza la excepción antes de imprimir "ok". `finally` se ejecuta siempre.'),
        mc('¿Qué caracteriza a una excepción checked, como IOException?', ['El compilador obliga a capturarla o a declararla con throws', 'Java la ignora automáticamente', 'Solo aparece al ejecutar, sin aviso previo', 'Es un error de sintaxis'], 'Si no la gestionas, el código no compila.'),
        mc('¿Qué hace `try (var br = Files.newBufferedReader(ruta)) { ... }`?', ['Cierra el recurso automáticamente al terminar el bloque', 'Reintenta la lectura si falla', 'Ignora todas las excepciones', 'Abre el archivo dos veces'], 'Es try-with-resources: cierra el lector aunque haya un error.'),
        mc('¿Por qué no compila poner `catch (Exception e)` antes de `catch (NumberFormatException e)`?', ['El segundo catch nunca se alcanzaría, porque Exception ya lo captura todo', 'Exception no existe en Java', 'Solo se permite un catch por try', 'NumberFormatException es checked'], 'Los `catch` se ordenan del más específico al más general.'),
        out(`static int dividir(int a, int b) {\n    try {\n        return a / b;\n    } catch (ArithmeticException e) {\n        System.out.print("error ");\n        return 0;\n    } finally {\n        System.out.print("fin ");\n    }\n}\n\nSystem.out.println(dividir(10, 0) + dividir(9, 3));`, ['error fin fin 3', 'error fin 3', 'fin error fin 3', 'error 0 fin fin 3'], 'La primera llamada imprime "error " y después "fin " y devuelve 0. La segunda imprime "fin " y devuelve 3. Al final se imprime 0 + 3.'),
      ],
    },
    // ───────────── Día 18 ─────────────
    {
      id: 'java-generics',
      t: 'Genéricos',
      d: 'Clases y métodos genéricos, el operador diamante y comodines.',
      guide: [
        { h: 'Por qué existen los genéricos', p: [
          'Antes de Java 5 una lista guardaba `Object` y había que convertir cada elemento con un cast. Si alguien metía un número en una lista de nombres, el error aparecía en ejecución como `ClassCastException`.',
          'Con genéricos escribes `List<String>` y el compilador comprueba los tipos: meter un número ni siquiera compila, y al leer no hace falta cast.' ],
          code: `List<String> nombres = new ArrayList<>();\nnombres.add("Ana");\n// nombres.add(42);        // error de compilación\nString primero = nombres.get(0);   // sin cast` },
        { h: 'Clases genéricas', p: [
          'Una clase genérica declara uno o más parámetros de tipo entre ángulos: `class Caja<T>`. Dentro, `T` se usa como cualquier tipo.',
          'Por convención se usan letras: `T` (tipo), `E` (elemento), `K` y `V` (clave y valor). En `new Caja<>("hola")` el operador diamante `<>` deja que el compilador deduzca el tipo.' ],
          code: `class Par<K, V> {\n    private final K clave;\n    private final V valor;\n\n    Par(K clave, V valor) {\n        this.clave = clave;\n        this.valor = valor;\n    }\n\n    K getClave() { return clave; }\n    V getValor() { return valor; }\n}\n\nPar<String, Integer> p = new Par<>("edad", 30);\nSystem.out.println(p.getClave() + "=" + p.getValor());  // edad=30` },
        { h: 'Métodos genéricos', p: [
          'Un método también puede ser genérico: declara `<T>` antes del tipo de retorno y lo usa en sus parámetros. El tipo se deduce de los argumentos al llamarlo.',
          'Los genéricos solo admiten tipos objeto: `List<int>` no existe, se usa `List<Integer>`.' ],
          code: `static <T> T ultimo(List<T> lista) {\n    return lista.get(lista.size() - 1);\n}\n\nString s = ultimo(List.of("a", "b", "c"));  // "c"\nInteger n = ultimo(List.of(4, 5));          // 5` },
        { h: 'Límites y comodines', p: [
          '`<T extends Comparable<T>>` limita `T` a tipos que se pueden comparar, así dentro puedes llamar a `compareTo`.',
          '`List<? extends Number>` acepta listas de `Number` o de cualquier subclase (`Integer`, `Double`) para leer de ellas. `List<? super Integer>` acepta listas donde puedes meter `Integer`. Regla para recordarlo: extends para leer, super para escribir.' ],
          code: `static double sumar(List<? extends Number> nums) {\n    double total = 0;\n    for (Number n : nums) total += n.doubleValue();\n    return total;\n}\n\nSystem.out.println(sumar(List.of(1, 2, 3)));    // 6.0\nSystem.out.println(sumar(List.of(1.5, 2.5)));   // 4.0` },
        { h: 'Ejemplo real: la respuesta de una API', real: true, p: [
          'Muchas aplicaciones devuelven siempre el mismo envoltorio: el dato si todo fue bien o un mensaje de error. Con un genérico, la misma clase sirve para usuarios, pedidos o lo que sea.' ],
          code: `class Resultado<T> {\n    private final T dato;\n    private final String error;\n\n    private Resultado(T dato, String error) {\n        this.dato = dato;\n        this.error = error;\n    }\n\n    static <T> Resultado<T> ok(T dato) { return new Resultado<>(dato, null); }\n    static <T> Resultado<T> fallo(String error) { return new Resultado<>(null, error); }\n\n    boolean esOk() { return error == null; }\n    T getDato() { return dato; }\n    String getError() { return error; }\n}\n\nResultado<Integer> r1 = Resultado.ok(42);\nResultado<Integer> r2 = Resultado.fallo("Usuario no encontrado");\nSystem.out.println(r1.esOk() + " " + r1.getDato());   // true 42\nSystem.out.println(r2.esOk() + " " + r2.getError());  // false Usuario no encontrado` },
      ],
      x: [
        mc('¿Qué ventaja aportan los genéricos?', ['Comprobar los tipos al compilar y evitar casts', 'Hacer el código más rápido de escribir sin tipos', 'Permitir tipos primitivos en las listas', 'Ninguna, son opcionales'], 'Los errores de tipo aparecen al compilar y no en ejecución.'),
        mc('¿Qué significa `<>` en `new ArrayList<>()`?', ['El compilador deduce el tipo genérico (operador diamante)', 'La lista está vacía', 'La lista no tiene tipo', 'Es un error'], 'El tipo se deduce de la declaración de la variable.'),
        typ('Declara el parámetro de tipo de la clase', `class Caja<___> {\n    private T contenido;\n}`, 'T', 'El parámetro de tipo se declara entre ángulos y luego se usa dentro de la clase.'),
        out(`class Caja<T> {\n    T valor;\n    Caja(T v) { valor = v; }\n}\n\nCaja<String> c = new Caja<>("hola");\nSystem.out.println(c.valor.length());`, ['4', 'hola', 'T', 'Error'], '`T` es `String`, así que `valor.length()` funciona sin cast.'),
        fill(`class Par<___, V> {\n    K clave;\n    V valor;\n}`, ['K', 'T[]', 'int', '?'], 'Cada parámetro de tipo que se usa dentro se declara entre los ángulos.'),
        fill(`static <T> T primero(List<___> lista) {\n    return lista.get(0);\n}`, ['T', '?', 'Object', 'E'], 'El método declara `<T>` y lo usa en sus parámetros y en el retorno.'),
        mc('¿Qué listas acepta un parámetro `List<? extends Number>`?', ['Listas de Number o de una subclase, como Integer o Double', 'Solo List<Number>', 'Cualquier lista', 'Listas de String'], '`? extends` es un comodín acotado por arriba.'),
        out(`static <T extends Comparable<T>> T mayor(List<T> lista) {\n    T max = lista.get(0);\n    for (T x : lista) {\n        if (x.compareTo(max) > 0) max = x;\n    }\n    return max;\n}\n\nSystem.out.println(mayor(List.of(3, 9, 4)) + mayor(List.of("pera", "uva", "kiwi")));`, ['9uva', '3kiwi', '9pera', '13'], 'El mayor número es 9 y el mayor texto en orden alfabético es "uva". Un `Integer` más un `String` se concatena: "9uva".'),
      ],
    },
    // ───────────── Día 19 ─────────────
    {
      id: 'java-datetime',
      t: 'Fecha y hora',
      d: 'java.time: LocalDate, plusDays, ChronoUnit y formatos.',
      guide: [
        { h: 'El paquete java.time', p: [
          'Desde Java 8 las fechas se manejan con `java.time`. `LocalDate` es una fecha (año, mes, día), `LocalTime` una hora y `LocalDateTime` las dos juntas.',
          'Las clases antiguas `Date` y `Calendar` son confusas (los meses empezaban en 0) y no conviene usarlas en código nuevo.',
          'Crea fechas con `LocalDate.of(2025, 3, 14)` o la de hoy con `LocalDate.now()`. Al imprimirlas salen en formato ISO: `2025-03-14`.' ],
          code: `LocalDate fecha = LocalDate.of(2025, 3, 14);\nLocalTime hora = LocalTime.of(9, 30);\nLocalDateTime cita = LocalDateTime.of(2025, 3, 14, 9, 30);\nSystem.out.println(fecha);   // 2025-03-14\nSystem.out.println(cita);    // 2025-03-14T09:30\nSystem.out.println(fecha.getDayOfWeek());  // FRIDAY` },
        { h: 'Sumar y restar: fechas inmutables', p: [
          '`plusDays()`, `plusMonths()`, `minusWeeks()` y similares devuelven una fecha nueva; la original no cambia. Si no guardas el resultado, se pierde (igual que con los String).',
          'java.time se encarga de los cambios de mes y de los años bisiestos: el 31 de enero más un mes da el último día de febrero.' ],
          code: `LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusDays(1));    // 2024-02-01\nSystem.out.println(d.plusMonths(1));  // 2024-02-29\nd.plusYears(1);                       // resultado perdido\nSystem.out.println(d);                // 2024-01-31` },
        { h: 'Diferencias entre fechas', p: [
          '`ChronoUnit.DAYS.between(a, b)` da los días que hay de `a` a `b` (negativo si `b` es anterior). También existen `MONTHS`, `YEARS`, `HOURS`...',
          '`Period.between(a, b)` da la diferencia en años, meses y días, útil para calcular edades. Para horas y minutos se usa `Duration`.' ],
          code: `LocalDate nacimiento = LocalDate.of(1995, 6, 20);\nLocalDate hoy = LocalDate.of(2025, 3, 14);\nSystem.out.println(Period.between(nacimiento, hoy).getYears());  // 29\nSystem.out.println(ChronoUnit.DAYS.between(\n    LocalDate.of(2025, 1, 1), LocalDate.of(2025, 2, 1)));       // 31` },
        { h: 'Formatear y leer fechas', p: [
          '`DateTimeFormatter.ofPattern("dd/MM/yyyy")` define un formato: `dd` día, `MM` mes (con `mm` serían minutos), `yyyy` año, `HH` hora.',
          '`fecha.format(f)` convierte la fecha en texto y `LocalDate.parse(texto, f)` hace lo contrario.' ],
          code: `DateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nLocalDate d = LocalDate.parse("25/12/2025", f);\nSystem.out.println(d);              // 2025-12-25\nSystem.out.println(d.format(f));    // 25/12/2025` },
        { h: 'Ejemplo real: el vencimiento de una factura', real: true, p: [
          'Una factura se paga a 30 días desde su emisión. El programa calcula la fecha de vencimiento y cuántos días de retraso lleva el pago.' ],
          code: `LocalDate emision = LocalDate.of(2025, 3, 14);\nLocalDate vencimiento = emision.plusDays(30);\nLocalDate hoy = LocalDate.of(2025, 4, 20);\nlong retraso = ChronoUnit.DAYS.between(vencimiento, hoy);\n\nDateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nSystem.out.println("Vence el " + vencimiento.format(f));  // Vence el 13/04/2025\nSystem.out.println("Días de retraso: " + retraso);         // Días de retraso: 7` },
      ],
      x: [
        mc('¿Qué clase representa solo una fecha, sin hora?', ['LocalDate', 'LocalTime', 'LocalDateTime', 'Calendar'], '`LocalDate` guarda año, mes y día.'),
        out(`LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusDays(1));`, ['2024-02-01', '2024-01-32', '2024-01-01', 'Error'], 'java.time gestiona el cambio de mes automáticamente.'),
        out(`LocalDate d = LocalDate.of(2024, 5, 9);\nSystem.out.println(d.getMonthValue());`, ['5', '9', 'MAY', '2024'], '`getMonthValue()` da el número del mes; `getMonth()` daría MAY.'),
        fill(`DateTimeFormatter f = DateTimeFormatter.___("dd/MM/yyyy");`, ['ofPattern', 'format', 'pattern', 'of'], '`ofPattern` crea un formateador a partir de un patrón.'),
        out(`LocalDate d = LocalDate.of(2024, 3, 1);\nd.plusDays(5);\nSystem.out.println(d);`, ['2024-03-01', '2024-03-06', '2024-03-05', 'Error'], 'Las fechas son inmutables: `plusDays` devuelve otra fecha que aquí no se guarda.'),
        out(`long n = ChronoUnit.DAYS.between(\n    LocalDate.of(2024, 1, 1),\n    LocalDate.of(2024, 1, 11));\nSystem.out.println(n);`, ['10', '11', '1', 'Error'], 'Del 1 al 11 de enero hay 10 días: el primero cuenta y el último no.'),
        out(`LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusMonths(1));`, ['2024-02-29', '2024-02-31', '2024-03-02', '2024-03-01'], 'El 31 de febrero no existe, así que se ajusta al último día del mes. 2024 es bisiesto: 29.'),
        out(`LocalDate inicio = LocalDate.of(2025, 12, 30);\nLocalDate fin = inicio.plusDays(5);\nDateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nSystem.out.println(fin.format(f) + " " + fin.getYear());`, ['04/01/2026 2026', '35/12/2025 2025', '04/01/2026 2025', '01/04/2026 2026'], 'Cinco días después del 30 de diciembre es el 4 de enero del año siguiente. El patrón pone primero el día.'),
      ],
    },
    // ───────────── Día 20 ─────────────
    {
      id: 'java-regex',
      t: 'Expresiones regulares',
      d: 'Pattern, Matcher, matches, replaceAll y split.',
      guide: [
        { h: 'Qué es una expresión regular', p: [
          'Una expresión regular (regex) describe un patrón de texto: "cinco dígitos", "algo con una arroba en medio", "una palabra que empieza por mayúscula". Sirve para validar, buscar y reemplazar.',
          '`texto.matches(regex)` devuelve `true` solo si el texto completo encaja con el patrón, no si lo contiene en alguna parte.' ],
          code: `System.out.println("28013".matches("\\\\d{5}"));    // true\nSystem.out.println("280".matches("\\\\d{5}"));      // false\nSystem.out.println("CP 28013".matches("\\\\d{5}")); // false: sobra "CP "` },
        { h: 'La sintaxis básica', p: [
          '`.` es cualquier carácter, `\\d` un dígito, `\\w` una letra, dígito o guion bajo y `\\s` un espacio. `[abc]` es uno de esos caracteres y `[a-z]` un rango.',
          'Los cuantificadores dicen cuántas veces: `+` una o más, `*` cero o más, `?` cero o una y `{2,4}` entre dos y cuatro.',
          'En un String de Java la barra invertida es un carácter de escape, así que se escribe doble: la regex `\\d+` se escribe `"\\\\d+"`.' ] },
        { h: 'Pattern y Matcher: buscar coincidencias', p: [
          '`Pattern.compile(regex)` prepara el patrón y `pattern.matcher(texto)` crea un `Matcher` que lo recorre. Cada `find()` avanza a la siguiente coincidencia y `group()` la devuelve.',
          'Los paréntesis crean grupos que puedes leer por separado con `group(1)`, `group(2)`... Compila el `Pattern` una vez y reutilízalo si lo vas a usar muchas veces.' ],
          code: `Pattern p = Pattern.compile("(\\\\d{2}):(\\\\d{2})");\nMatcher m = p.matcher("Abre a las 09:30 y cierra a las 21:00");\nwhile (m.find()) {\n    System.out.println(m.group() + " -> hora " + m.group(1));\n}\n// 09:30 -> hora 09\n// 21:00 -> hora 21` },
        { h: 'replaceAll y split', p: [
          '`replaceAll(regex, reemplazo)` sustituye cada coincidencia y `split(regex)` corta el texto por el patrón.',
          'Ojo: `split(".")` no corta por puntos, porque `.` significa "cualquier carácter". Para un punto literal escribe `split("\\\\.")`.' ],
          code: `String tel = "600-12 34-56";\nSystem.out.println(tel.replaceAll("[^0-9]", ""));  // 600123456\n\nString[] partes = "uno, dos,tres".split(",\\\\s*");\nSystem.out.println(partes.length);                 // 3` },
        { h: 'Ejemplo real: validar y extraer datos de un texto', real: true, p: [
          'Un formulario comprueba que el código postal tenga 5 dígitos, y un lector de tickets suma los importes que aparecen en el texto con formato "1,50 €".' ],
          code: `String cp = "28013";\nSystem.out.println(cp.matches("\\\\d{5}"));   // true\n\nPattern precio = Pattern.compile("(\\\\d+),(\\\\d{2}) €");\nMatcher m = precio.matcher("Café 1,50 € y tostada 2,25 €");\ndouble total = 0;\nwhile (m.find()) {\n    total += Double.parseDouble(m.group(1) + "." + m.group(2));\n}\nSystem.out.println(total);  // 3.75` },
      ],
      x: [
        mc('¿Qué clase compila una expresión regular en Java?', ['Pattern', 'Regex', 'RegExp', 'Matcher'], '`Pattern.compile` crea el patrón; el `Matcher` se obtiene después con `pattern.matcher(texto)`.'),
        out(`System.out.println("12345".matches("\\\\d+"));`, ['true', 'false', '12345', 'Error'], '`\\d+` exige que todo el texto sean uno o más dígitos, y lo son.'),
        out(`System.out.println("Java".matches("[A-Z].*"));`, ['true', 'false', 'J', 'Error'], 'Empieza por una mayúscula y `.*` acepta el resto.'),
        mc('¿Por qué en Java la expresión `\\d+` se escribe `"\\\\d+"`?', ['Porque la barra invertida es el carácter de escape de los String y hay que duplicarla', 'Porque las regex de Java usan dos barras', 'Porque así se buscan dos dígitos', 'Es opcional, las dos formas son iguales'], 'El String `"\\\\d+"` contiene el texto `\\d+`, que es lo que recibe el motor de regex.'),
        out(`System.out.println("a1b22c".replaceAll("\\\\d+", "-"));`, ['a-b-c', 'a-b--c', 'abc', 'a1b22c'], 'Cada grupo de dígitos seguidos se sustituye por un solo guion.'),
        out(`String[] p = "uno, dos,tres".split(",\\\\s*");\nSystem.out.println(p.length);`, ['3', '2', '4', '1'], 'Se corta en cada coma seguida de cero o más espacios.'),
        fill(`Matcher m = Pattern.compile("[a-z]+").matcher("Hola Mundo");\nwhile (m.___()) {\n    System.out.println(m.group());\n}`, ['find', 'next', 'matches', 'search'], '`find()` avanza a la siguiente coincidencia y `group()` la devuelve.'),
        out(`Matcher m = Pattern.compile("(\\\\w+)@(\\\\w+)\\\\.com")\n    .matcher("ana@gmail.com, luis@yahoo.com");\nString r = "";\nwhile (m.find()) {\n    r += m.group(2).toUpperCase() + " ";\n}\nSystem.out.println(r.trim());`, ['GMAIL YAHOO', 'ANA LUIS', 'gmail yahoo', 'GMAIL'], 'Hay dos coincidencias y el grupo 2 es el dominio, sin ".com". Se pasan a mayúsculas y `trim` quita el espacio final.'),
      ],
    },
    // ───────────── Día 21 ─────────────
    {
      id: 'java-files',
      t: 'Archivos',
      d: 'java.nio: Path, Files, leer, escribir y recorrer archivos grandes.',
      guide: [
        { h: 'Rutas con Path', p: [
          'Desde Java 7 los archivos se manejan con el paquete `java.nio.file`. Una ruta se representa con `Path` y se crea con `Path.of(...)`, que une las partes con el separador correcto del sistema (`/` o `\\`).',
          '`getFileName()` da el nombre del archivo, `getParent()` la carpeta que lo contiene y `toAbsolutePath()` la ruta completa. Crear un `Path` no crea ningún archivo: solo describe dónde estaría.' ],
          code: `Path ruta = Path.of("datos", "2025", "ventas.csv");\nSystem.out.println(ruta);                // datos/2025/ventas.csv\nSystem.out.println(ruta.getFileName());  // ventas.csv\nSystem.out.println(ruta.getParent());    // datos/2025` },
        { h: 'Leer y escribir texto con Files', p: [
          'La clase `Files` tiene métodos estáticos para casi todo: `writeString` escribe un texto, `readString` lo lee entero y `readAllLines` devuelve una `List<String>` con cada línea.',
          'Por defecto `writeString` sobrescribe el archivo. Para añadir al final pasa `StandardOpenOption.APPEND`. Casi todos los métodos lanzan `IOException`, una excepción checked que hay que capturar o declarar con `throws`.' ],
          code: `Path notas = Path.of("notas.txt");\nFiles.writeString(notas, "Comprar pan\\n");\nFiles.writeString(notas, "Llamar al médico\\n", StandardOpenOption.APPEND);\n\nList<String> lineas = Files.readAllLines(notas);\nSystem.out.println(lineas.size());  // 2\nSystem.out.println(lineas.get(1));  // Llamar al médico` },
        { h: 'Archivos grandes: línea a línea', p: [
          '`readAllLines` carga todo el archivo en memoria. Con un log de varios gigas eso es un problema: usa `Files.lines(ruta)`, que devuelve un `Stream<String>` y lee las líneas según las necesita.',
          'Ese stream mantiene el archivo abierto, así que va siempre dentro de un try-with-resources para que se cierre al terminar.' ],
          code: `try (Stream<String> lineas = Files.lines(Path.of("servidor.log"))) {\n    long errores = lineas.filter(l -> l.contains("ERROR")).count();\n    System.out.println("Errores: " + errores);\n} catch (IOException e) {\n    System.out.println("No se pudo leer el log: " + e.getMessage());\n}` },
        { h: 'Carpetas y comprobaciones', p: [
          '`Files.exists(ruta)` dice si algo existe, `Files.isDirectory(ruta)` si es una carpeta y `Files.size(ruta)` cuántos bytes ocupa.',
          '`Files.createDirectories(ruta)` crea la carpeta y todas las intermedias que falten, sin fallar si ya existen. `Files.copy`, `Files.move` y `Files.delete` hacen lo que su nombre indica.' ],
          code: `Path carpeta = Path.of("informes", "2025", "marzo");\nFiles.createDirectories(carpeta);\nPath informe = carpeta.resolve("resumen.txt");\nFiles.writeString(informe, "Ventas: 1200 €");\nSystem.out.println(Files.exists(informe));   // true\nSystem.out.println(Files.size(informe));     // bytes que ocupa` },
        { h: 'Ejemplo real: sumar los gastos de un CSV', real: true, p: [
          'El banco te deja descargar tus movimientos en un CSV con la cabecera `concepto,importe`. El programa salta la cabecera, separa cada línea por la coma y suma los importes.' ],
          code: `Path csv = Path.of("gastos.csv");\nFiles.writeString(csv, "concepto,importe\\nalquiler,650\\nluz,48.30\\nsúper,212.45\\n");\n\ndouble total = 0;\nList<String> lineas = Files.readAllLines(csv);\nfor (String linea : lineas.subList(1, lineas.size())) {\n    String[] partes = linea.split(",");\n    total += Double.parseDouble(partes[1]);\n}\nSystem.out.printf("Gasto del mes: %.2f €%n", total);  // Gasto del mes: 910,75 € (según el idioma del sistema)` },
      ],
      x: [
        mc('¿Qué tipo representa una ruta de archivo en `java.nio.file`?', ['Path', 'Route', 'FilePath', 'Directory'], '`Path.of("a", "b.txt")` crea una ruta uniendo las partes con el separador del sistema.'),
        fill(`String texto = Files.___(Path.of("notas.txt"));  // todo el contenido`, ['readString', 'read', 'readAll', 'open'], '`readString` devuelve el contenido entero del archivo como un `String`.'),
        mc('¿Qué excepción checked lanzan casi todos los métodos de `Files`?', ['IOException', 'FileException', 'NullPointerException', 'RuntimeException'], 'Al ser checked, hay que capturarla con `try/catch` o declararla con `throws IOException`.'),
        out(`Path p = Path.of("docs", "2025", "informe.pdf");\nSystem.out.println(p.getFileName());`, ['informe.pdf', 'docs', '2025/informe.pdf', 'informe'], '`getFileName()` devuelve el último elemento de la ruta, con su extensión.'),
        mc('¿Qué hace `Files.writeString(ruta, texto, StandardOpenOption.APPEND)`?', ['Añade el texto al final sin borrar lo que había', 'Sobrescribe el archivo', 'Lanza un error si el archivo existe', 'Crea una copia del archivo'], 'Sin `APPEND`, `writeString` reemplaza el contenido anterior.'),
        typ('Crea la carpeta y todas las intermedias que falten', `Files.___(Path.of("informes", "2025", "marzo"));`, 'createDirectories', '`createDirectories` crea toda la ruta y no falla si ya existe. `createDirectory`, en singular, solo crea la última.'),
        ord('Lee todas las líneas del archivo en una lista', ['List<String>', 'lineas', '=', 'Files', '.', 'readAllLines', '(', 'ruta', ')', ';'], ['readLines', 'File'], '`Files.readAllLines(ruta)` devuelve una `List<String>` con una entrada por línea.'),
        out(`Path p = Path.of("t.txt");\nFiles.writeString(p, "uno\\ndos\\n");\nFiles.writeString(p, "tres\\n", StandardOpenOption.APPEND);\nList<String> lineas = Files.readAllLines(p);\nSystem.out.println(lineas.size() + " " + lineas.get(lineas.size() - 1));`, ['3 tres', '2 tres', '1 tres', '3 uno'], 'La primera escritura deja dos líneas y la segunda añade "tres" al final. `readAllLines` quita los saltos de línea.'),
      ],
    },
    // ───────────── Día 22 ─────────────
    {
      id: 'java-lambdas',
      t: 'Lambdas',
      d: 'Interfaces funcionales, Function, Predicate, Consumer, Supplier y referencias a métodos.',
      guide: [
        { h: 'Qué es una lambda', p: [
          'Una lambda es una función sin nombre que puedes guardar en una variable o pasar como argumento. Se escribe `(parámetros) -> expresión`: `x -> x * 2` recibe un número y devuelve su doble.',
          'Antes de Java 8 había que escribir una clase anónima entera para lo mismo. Con lambdas, ordenar una lista por longitud cabe en una línea.' ],
          code: `List<String> nombres = new ArrayList<>(List.of("Eva", "Alejandro", "Luis"));\n\n// Antes: clase anónima\nnombres.sort(new Comparator<String>() {\n    public int compare(String a, String b) { return a.length() - b.length(); }\n});\n\n// Ahora: lambda\nnombres.sort((a, b) -> a.length() - b.length());\nSystem.out.println(nombres);  // [Eva, Luis, Alejandro]` },
        { h: 'Interfaces funcionales', p: [
          'Una lambda siempre implementa una interfaz funcional: una interfaz con un único método abstracto. `Comparator`, `Runnable` y las de `java.util.function` lo son.',
          'Las más usadas: `Function<T, R>` recibe un T y devuelve un R (`apply`), `Predicate<T>` devuelve un boolean (`test`), `Consumer<T>` recibe y no devuelve nada (`accept`) y `Supplier<T>` no recibe nada y devuelve un T (`get`).' ],
          code: `Function<String, Integer> longitud = s -> s.length();\nPredicate<Integer> esPar = n -> n % 2 == 0;\nConsumer<String> saludar = s -> System.out.println("Hola, " + s);\nSupplier<Double> azar = () -> Math.random();\n\nSystem.out.println(longitud.apply("Java"));  // 4\nSystem.out.println(esPar.test(7));           // false\nsaludar.accept("Ana");                       // Hola, Ana` },
        { h: 'Referencias a métodos', p: [
          'Cuando la lambda solo llama a un método que ya existe, puedes escribir una referencia con `::`. `s -> s.toUpperCase()` se convierte en `String::toUpperCase`.',
          'Hay cuatro formas: método estático (`Integer::parseInt`), método de un objeto concreto (`System.out::println`), método de instancia del tipo (`String::length`) y constructor (`ArrayList::new`).' ],
          code: `List<String> numeros = List.of("3", "10", "7");\nnumeros.stream()\n       .map(Integer::parseInt)\n       .forEach(System.out::println);\n// 3\n// 10\n// 7` },
        { h: 'Variables capturadas y composición', p: [
          'Una lambda puede usar variables locales de fuera, pero solo si son efectivamente finales: no se modifican después de asignarlas. Por eso `total += x` dentro de una lambda no compila.',
          'Las funciones se pueden encadenar: `f.andThen(g)` aplica primero `f` y luego `g`; `f.compose(g)` aplica primero `g`. Los predicados se combinan con `and`, `or` y `negate`.' ],
          code: `Predicate<String> largo = s -> s.length() > 5;\nPredicate<String> empiezaPorA = s -> s.startsWith("A");\nPredicate<String> ambos = largo.and(empiezaPorA);\n\nSystem.out.println(ambos.test("Alejandro"));  // true\nSystem.out.println(ambos.test("Ana"));        // false` },
        { h: 'Ejemplo real: ordenar un catálogo', real: true, p: [
          'Una tienda muestra sus productos ordenados por precio y, si empatan, por nombre. `Comparator.comparing` con referencias a métodos lo expresa casi como una frase.' ],
          code: `record Producto(String nombre, double precio) {}\n\nList<Producto> catalogo = new ArrayList<>(List.of(\n    new Producto("Teclado", 25.0),\n    new Producto("Alfombrilla", 9.9),\n    new Producto("Ratón", 25.0)));\n\ncatalogo.sort(Comparator.comparing(Producto::precio)\n                        .thenComparing(Producto::nombre));\ncatalogo.forEach(p -> System.out.println(p.nombre() + " " + p.precio()));\n// Alfombrilla 9.9\n// Ratón 25.0\n// Teclado 25.0` },
      ],
      x: [
        mc('¿Qué es una interfaz funcional?', ['Una interfaz con un único método abstracto', 'Una interfaz sin métodos', 'Una clase con métodos estáticos', 'Cualquier interfaz que herede de Function'], 'Por eso una lambda puede implementarla: solo hay un método que rellenar.'),
        out(`Function<Integer, Integer> doble = x -> x * 2;\nSystem.out.println(doble.apply(7));`, ['14', '7', 'x * 2', 'Error'], '`apply` ejecuta la función con el argumento 7.'),
        out(`Predicate<String> largo = s -> s.length() > 4;\nSystem.out.println(largo.test("Java") + " " + largo.test("Python"));`, ['false true', 'true true', 'true false', 'false false'], '"Java" tiene 4 letras (no es mayor que 4) y "Python" tiene 6.'),
        fill(`List.of("a", "b").forEach(System.out___println);`, ['::', '.', '->', ':'], '`System.out::println` es una referencia al método `println` del objeto `System.out`.'),
        mc('¿Qué interfaz no recibe nada y devuelve un valor?', ['Supplier<T>', 'Consumer<T>', 'Predicate<T>', 'Function<T, R>'], '`Supplier` tiene el método `get()`. `Consumer` hace justo lo contrario: recibe y no devuelve.'),
        out(`BiFunction<Integer, Integer, Integer> potencia = (b, e) -> (int) Math.pow(b, e);\nSystem.out.println(potencia.apply(2, 5));`, ['32', '10', '25', '7'], '`BiFunction` recibe dos argumentos: 2 elevado a 5 es 32.'),
        mc('¿Por qué no compila `int total = 0; lista.forEach(x -> total += x);`?', ['Las lambdas solo pueden usar variables locales efectivamente finales', 'forEach no acepta lambdas', 'total debería ser long', 'Falta un return'], 'Para sumar usa un stream: `lista.stream().mapToInt(Integer::intValue).sum()`.'),
        out(`Function<Integer, Integer> sumar3 = x -> x + 3;\nFunction<Integer, Integer> doble = x -> x * 2;\nSystem.out.println(sumar3.andThen(doble).apply(4) + " " + sumar3.compose(doble).apply(4));`, ['14 11', '11 14', '14 14', '25'], '`andThen` suma primero y dobla después: (4 + 3) * 2 = 14. `compose` dobla primero: 4 * 2 + 3 = 11.'),
      ],
    },
    // ───────────── Día 23 ─────────────
    {
      id: 'java-streams',
      t: 'Streams',
      d: 'filter, map, sorted, reduce, collect, agrupaciones y evaluación perezosa.',
      guide: [
        { h: 'Qué es un stream', p: [
          'Un stream es una tubería de operaciones sobre una secuencia de datos: una fuente (`lista.stream()`), cero o más operaciones intermedias (`filter`, `map`...) y una operación terminal que produce el resultado (`toList`, `count`...).',
          'Un stream no modifica la colección original y solo se puede recorrer una vez. Describe qué quieres obtener en lugar de cómo recorrer los datos paso a paso.' ],
          code: `List<Integer> numeros = List.of(5, 12, 8, 21, 3);\nList<Integer> resultado = numeros.stream()\n    .filter(n -> n > 4)    // 5, 12, 8, 21\n    .map(n -> n * 10)      // 50, 120, 80, 210\n    .sorted()\n    .toList();\nSystem.out.println(resultado);  // [50, 80, 120, 210]\nSystem.out.println(numeros);    // [5, 12, 8, 21, 3]` },
        { h: 'Operaciones intermedias', p: [
          '`filter` se queda con los elementos que cumplen un predicado, `map` transforma cada uno, `sorted` ordena, `distinct` quita repetidos, `limit(n)` se queda con los primeros n y `skip(n)` salta los primeros n.',
          'Son perezosas: no hacen nada hasta que aparece la operación terminal. Gracias a eso, `limit` puede cortar un stream enorme sin procesarlo entero.' ],
          code: `List<String> top = Stream.of("pera", "kiwi", "pera", "uva", "melón", "kiwi")\n    .distinct()\n    .sorted()\n    .limit(3)\n    .toList();\nSystem.out.println(top);  // [kiwi, melón, pera]` },
        { h: 'Operaciones terminales', p: [
          '`count()` cuenta, `toList()` crea una lista, `forEach` ejecuta algo por elemento y `anyMatch`/`allMatch` comprueban condiciones.',
          'Para números usa `mapToInt` y obtendrás `sum()`, `average()` y `max()`. `reduce` combina todos los elementos en uno con una operación que tú eliges.' ],
          code: `List<Integer> notas = List.of(7, 4, 9, 6);\nint suma = notas.stream().mapToInt(Integer::intValue).sum();\ndouble media = notas.stream().mapToInt(Integer::intValue).average().orElse(0);\nint producto = notas.stream().reduce(1, (a, b) -> a * b);\nboolean todasAprobadas = notas.stream().allMatch(n -> n >= 5);\nSystem.out.println(suma + " " + media + " " + producto + " " + todasAprobadas);\n// 26 6.5 1512 false` },
        { h: 'Collectors: unir y agrupar', p: [
          '`collect` con la clase `Collectors` construye resultados más elaborados: `joining(", ")` une textos, `groupingBy` agrupa en un `Map` y `counting()` o `summingInt` resumen cada grupo.',
          'Si quieres el mapa ordenado por clave, pide un `TreeMap` en `groupingBy`.' ],
          code: `List<String> ciudades = List.of("Madrid", "Málaga", "Bilbao", "Murcia", "Burgos");\nMap<Character, List<String>> porInicial = ciudades.stream()\n    .collect(Collectors.groupingBy(c -> c.charAt(0), TreeMap::new, Collectors.toList()));\nSystem.out.println(porInicial);\n// {B=[Bilbao, Burgos], M=[Madrid, Málaga, Murcia]}\n\nSystem.out.println(String.join(" | ", ciudades.subList(0, 2)));  // Madrid | Málaga` },
        { h: 'Ejemplo real: el resumen de pedidos de una tienda', real: true, p: [
          'A partir de la lista de pedidos del día, la tienda quiere saber cuánto ha gastado cada cliente y quién es el mejor cliente. Con streams son dos expresiones.' ],
          code: `record Pedido(String cliente, double importe) {}\n\nList<Pedido> pedidos = List.of(\n    new Pedido("Ana", 30.0), new Pedido("Luis", 12.5),\n    new Pedido("Ana", 18.0), new Pedido("Eva", 45.0));\n\nMap<String, Double> porCliente = pedidos.stream()\n    .collect(Collectors.groupingBy(Pedido::cliente, TreeMap::new,\n             Collectors.summingDouble(Pedido::importe)));\nSystem.out.println(porCliente);  // {Ana=48.0, Eva=45.0, Luis=12.5}\n\nString mejor = porCliente.entrySet().stream()\n    .max(Map.Entry.comparingByValue())\n    .map(Map.Entry::getKey)\n    .orElse("nadie");\nSystem.out.println("Mejor cliente: " + mejor);  // Mejor cliente: Ana` },
      ],
      x: [
        mc('¿Qué hace `filter` en un stream?', ['Se queda con los elementos que cumplen una condición', 'Transforma cada elemento', 'Ordena los elementos', 'Suma los elementos'], 'Para transformar se usa `map`.'),
        out(`List<Integer> r = List.of(1, 2, 3, 4).stream()\n    .map(n -> n * n)\n    .toList();\nSystem.out.println(r);`, ['[1, 4, 9, 16]', '[1, 2, 3, 4]', '[2, 4, 6, 8]', '30'], '`map` eleva al cuadrado cada número y `toList` recoge el resultado.'),
        out(`long n = Stream.of("ana", "luis", "eva", "leo")\n    .filter(s -> s.length() == 3)\n    .count();\nSystem.out.println(n);`, ['3', '4', '1', '2'], 'Solo "luis" tiene más de 3 letras.'),
        fill(`int total = List.of(5, 10, 15).stream()\n    .mapToInt(Integer::intValue)\n    .___();`, ['sum', 'total', 'add', 'reduce'], '`mapToInt` da un `IntStream`, que tiene `sum()`. `reduce` también serviría, pero necesita argumentos.'),
        out(`String s = Stream.of("a", "b", "c").collect(Collectors.joining("-"));\nSystem.out.println(s);`, ['a-b-c', 'abc', '[a, b, c]', 'a-b-c-'], '`joining` pone el separador solo entre elementos, no al final.'),
        mc('¿Qué pasa con un stream que solo tiene operaciones intermedias, sin terminal?', ['No se ejecuta nada: las intermedias son perezosas', 'Se ejecuta igualmente', 'Lanza una excepción', 'Devuelve null'], 'El trabajo empieza cuando llega la operación terminal.'),
        out(`System.out.println(Stream.of(3, 1, 3, 2, 1).distinct().sorted().toList());`, ['[1, 2, 3]', '[3, 1, 2]', '[1, 1, 2, 3, 3]', '[3, 2, 1]'], '`distinct` deja 3, 1 y 2 y `sorted` los ordena.'),
        out(`List<String> palabras = List.of("sol", "mar", "luna", "cielo", "río");\nMap<Integer, Long> porLongitud = palabras.stream()\n    .collect(Collectors.groupingBy(String::length, TreeMap::new, Collectors.counting()));\nSystem.out.println(porLongitud);`, ['{3=3, 4=1, 5=1}', '{3=2, 4=1, 5=1}', '{sol=3, mar=3, luna=4, cielo=5, río=3}', '[3, 4, 5]'], '"sol", "mar" y "río" tienen 3 letras, "luna" 4 y "cielo" 5. `counting()` cuenta cuántas hay en cada grupo y el `TreeMap` ordena las claves.'),
      ],
    },
    // ───────────── Día 24 ─────────────
    {
      id: 'java-optional',
      t: 'Optional y records',
      d: 'Valores que pueden faltar sin null y clases de datos inmutables en una línea.',
      guide: [
        { h: 'El problema de null', p: [
          'Un método que busca algo puede no encontrarlo. Si devuelve `null` y quien lo llama no lo comprueba, el programa falla con `NullPointerException`, el error más común de Java.',
          '`Optional<T>` es una caja que contiene un valor o está vacía. El tipo de retorno ya avisa de que el resultado puede faltar, y el compilador te obliga a decidir qué hacer.' ],
          code: `Optional<String> lleno = Optional.of("Ana");\nOptional<String> vacio = Optional.empty();\nOptional<String> quizas = Optional.ofNullable(null);  // vacío\n\nSystem.out.println(lleno.isPresent());   // true\nSystem.out.println(quizas.isEmpty());    // true` },
        { h: 'Usar un Optional sin get()', p: [
          '`orElse(valor)` da el contenido o un valor por defecto, `orElseGet(() -> ...)` calcula el defecto solo si hace falta y `orElseThrow()` lanza una excepción si está vacío.',
          '`map` transforma el contenido si existe y `ifPresent` ejecuta algo solo si hay valor. Evita `get()` sin comprobar: es volver al problema de null. Optional se usa como tipo de retorno, no para atributos ni parámetros.' ],
          code: `Optional<String> email = Optional.of("  ANA@MAIL.COM ");\nString limpio = email.map(String::trim)\n                     .map(String::toLowerCase)\n                     .orElse("sin email");\nSystem.out.println(limpio);  // ana@mail.com\n\nOptional.<String>empty().ifPresent(System.out::println);  // no imprime nada` },
        { h: 'Records: clases de datos en una línea', p: [
          'Un `record` declara una clase cuyo único propósito es guardar datos. Con `record Punto(int x, int y) {}` Java genera el constructor, los métodos de acceso `x()` e `y()`, `equals`, `hashCode` y `toString`.',
          'Los campos son `final`: un record es inmutable. Para "cambiar" un valor se crea otro record.' ],
          code: `record Punto(int x, int y) {}\n\nPunto p = new Punto(3, 4);\nSystem.out.println(p);                       // Punto[x=3, y=4]\nSystem.out.println(p.x() + p.y());           // 7\nSystem.out.println(p.equals(new Punto(3, 4)));  // true` },
        { h: 'Validar y añadir métodos', p: [
          'El constructor compacto (sin paréntesis) permite validar los datos antes de guardarlos: si algo no cuadra, lanza una excepción y el objeto nunca llega a existir.',
          'Un record puede tener métodos propios y métodos estáticos, e implementar interfaces. Lo que no puede es heredar de otra clase ni tener atributos de instancia extra.' ],
          code: `record Precio(double importe, String moneda) {\n    Precio {\n        if (importe < 0) throw new IllegalArgumentException("Importe negativo");\n    }\n\n    Precio conIva() { return new Precio(importe * 1.21, moneda); }\n}\n\nSystem.out.println(new Precio(100, "EUR").conIva());  // Precio[importe=121.0, moneda=EUR]` },
        { h: 'Ejemplo real: buscar un usuario por email', real: true, p: [
          'Un repositorio de usuarios devuelve `Optional<Usuario>`: quien llama ve en la firma que el usuario puede no existir y decide qué responder, sin riesgo de `NullPointerException`.' ],
          code: `record Usuario(String email, String nombre) {}\n\nclass RepositorioUsuarios {\n    private final List<Usuario> usuarios = List.of(\n        new Usuario("ana@mail.com", "Ana"),\n        new Usuario("luis@mail.com", "Luis"));\n\n    Optional<Usuario> buscarPorEmail(String email) {\n        return usuarios.stream().filter(u -> u.email().equals(email)).findFirst();\n    }\n}\n\nRepositorioUsuarios repo = new RepositorioUsuarios();\nSystem.out.println(repo.buscarPorEmail("ana@mail.com").map(Usuario::nombre).orElse("Invitado"));  // Ana\nSystem.out.println(repo.buscarPorEmail("eva@mail.com").map(Usuario::nombre).orElse("Invitado"));  // Invitado` },
      ],
      x: [
        mc('¿Para qué sirve `Optional`?', ['Para representar un valor que puede faltar sin usar null', 'Para hacer opcionales los parámetros de un método', 'Para capturar excepciones', 'Para crear listas vacías'], 'El tipo de retorno deja claro que el resultado puede no existir.'),
        out(`Optional<String> o = Optional.empty();\nSystem.out.println(o.orElse("anónimo"));`, ['anónimo', 'null', 'Optional.empty', 'Error'], 'Está vacío, así que `orElse` devuelve el valor por defecto.'),
        out(`Optional<String> o = Optional.of("java");\nSystem.out.println(o.map(String::toUpperCase).orElse("-"));`, ['JAVA', 'java', '-', 'Optional[JAVA]'], '`map` transforma el contenido y `orElse` lo saca de la caja.'),
        fill(`___ Punto(int x, int y) {}`, ['record', 'class', 'struct', 'data'], '`record` genera constructor, accesos, `equals`, `hashCode` y `toString`.'),
        out(`record Punto(int x, int y) {}\nPunto p = new Punto(3, 4);\nSystem.out.println(p);`, ['Punto[x=3, y=4]', 'Punto(3, 4)', 'Punto@1b6d3586', '{x=3, y=4}'], 'El `toString` de un record muestra el nombre y cada campo entre corchetes.'),
        out(`record Punto(int x, int y) {}\nSystem.out.println(new Punto(1, 2).equals(new Punto(1, 2)));`, ['true', 'false', 'Error', 'null'], 'Los records comparan por contenido: dos puntos con los mismos valores son iguales.'),
        mc('¿Cómo se lee el campo `x` de un record `Punto p`?', ['p.x()', 'p.getX()', 'p.x', 'p.get("x")'], 'Los métodos de acceso de un record se llaman igual que el campo, sin el prefijo get.'),
        out(`record Producto(String nombre, double precio) {\n    Producto {\n        if (precio < 0) throw new IllegalArgumentException("precio negativo");\n    }\n}\nList<Producto> lista = List.of(new Producto("pan", 1.2), new Producto("queso", 4.5));\nOptional<Producto> caro = lista.stream().filter(p -> p.precio() > 5).findFirst();\nSystem.out.println(caro.map(Producto::nombre).orElse("ninguno") + " " + lista.get(1).precio());`, ['ninguno 4.5', 'queso 4.5', 'null 4.5', 'ninguno 1.2'], 'Ningún producto cuesta más de 5, así que `findFirst` da un Optional vacío y se usa "ninguno". El segundo producto cuesta 4.5.'),
      ],
    },
    // ───────────── Día 25 ─────────────
    {
      id: 'java-enums',
      t: 'Enums y switch moderno',
      d: 'enum con atributos y métodos, values, ordinal y switch con flechas y yield.',
      guide: [
        { h: 'Qué es un enum', p: [
          'Un `enum` es un tipo con un conjunto fijo de valores: los días de la semana, los estados de un pedido, los palos de una baraja. El compilador impide usar un valor que no esté en la lista.',
          '`values()` devuelve todos los valores, `name()` su nombre como texto, `ordinal()` su posición (empezando en 0) y `valueOf("TEXTO")` convierte un texto en el valor del enum.' ],
          code: `enum Dia { LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO }\n\nDia hoy = Dia.VIERNES;\nSystem.out.println(hoy);                    // VIERNES\nSystem.out.println(hoy.ordinal());          // 4\nSystem.out.println(Dia.values().length);    // 7\nSystem.out.println(Dia.valueOf("LUNES"));   // LUNES` },
        { h: 'Enums con atributos y métodos', p: [
          'Cada valor de un enum es un objeto, así que puede tener atributos, un constructor (siempre privado) y métodos. Es ideal para datos fijos asociados a cada opción.',
          'Compara enums con `==`: cada valor existe una sola vez.' ],
          code: `enum Plan {\n    BASICO(5.99, 1), FAMILIAR(13.99, 4), PREMIUM(17.99, 6);\n\n    private final double precio;\n    private final int pantallas;\n\n    Plan(double precio, int pantallas) {\n        this.precio = precio;\n        this.pantallas = pantallas;\n    }\n\n    double precioPorPantalla() { return precio / pantallas; }\n}\n\nSystem.out.printf("%.2f%n", Plan.FAMILIAR.precioPorPantalla());  // 3,50 (según el idioma del sistema)` },
        { h: 'switch con flechas', p: [
          'Desde Java 14, `case X -> ...` ejecuta solo esa rama: no hay "caída" al siguiente caso y no hace falta `break`. Un mismo `case` admite varios valores separados por comas.',
          'El switch también puede ser una expresión que devuelve un valor. Si una rama necesita varias líneas, abre un bloque y devuelve el valor con `yield`. Con enums, el compilador avisa si te falta algún caso.' ],
          code: `Dia d = Dia.SABADO;\nString tipo = switch (d) {\n    case SABADO, DOMINGO -> "fin de semana";\n    case VIERNES -> {\n        System.out.println("¡Casi!");\n        yield "laborable";\n    }\n    default -> "laborable";\n};\nSystem.out.println(tipo);  // fin de semana` },
        { h: 'El switch clásico y su trampa', p: [
          'En el switch clásico con dos puntos, si un `case` no termina en `break`, la ejecución continúa en el siguiente (fall-through). Es una fuente clásica de errores.',
          'En código nuevo usa flechas. Desde Java 21, además, `switch` admite patrones de tipo: `case Integer i -> ...`.' ],
          code: `Object valor = 42;\nString descripcion = switch (valor) {\n    case Integer i when i > 10 -> "entero grande: " + i;\n    case Integer i -> "entero: " + i;\n    case String s -> "texto de " + s.length() + " letras";\n    default -> "otra cosa";\n};\nSystem.out.println(descripcion);  // entero grande: 42` },
        { h: 'Ejemplo real: los estados de un pedido', real: true, p: [
          'Una tienda online controla en qué estado está cada pedido. El enum define los estados posibles y un método decide cuál es el siguiente, así nadie puede saltarse pasos.' ],
          code: `enum Estado {\n    PENDIENTE, PAGADO, ENVIADO, ENTREGADO;\n\n    Estado siguiente() {\n        return switch (this) {\n            case PENDIENTE -> PAGADO;\n            case PAGADO -> ENVIADO;\n            case ENVIADO, ENTREGADO -> ENTREGADO;\n        };\n    }\n}\n\nEstado e = Estado.PENDIENTE;\nfor (int i = 0; i < 3; i++) {\n    e = e.siguiente();\n    System.out.println(e);\n}\n// PAGADO\n// ENVIADO\n// ENTREGADO` },
      ],
      x: [
        mc('¿Qué es un enum?', ['Un tipo con un conjunto fijo de valores', 'Una lista que puede crecer', 'Un tipo de número', 'Una interfaz'], 'El compilador solo admite los valores declarados.'),
        out(`enum Color { ROJO, VERDE, AZUL }\nSystem.out.println(Color.AZUL.ordinal());`, ['2', '3', '1', 'AZUL'], '`ordinal()` empieza en 0: ROJO es 0, VERDE 1 y AZUL 2.'),
        out(`enum Color { ROJO, VERDE, AZUL }\nSystem.out.println(Color.values().length + " " + Color.valueOf("VERDE"));`, ['3 VERDE', '2 VERDE', '3 1', 'Error'], '`values()` tiene 3 elementos y `valueOf` convierte el texto en el valor del enum, que se imprime por su nombre.'),
        fill(`String tipo = switch (dia) {\n    case SABADO, DOMINGO ___ "fin de semana";\n    default -> "laborable";\n};`, ['->', ':', '=>', '='], 'El switch moderno usa flechas `->`. `=>` es de JavaScript.'),
        out(`int mes = 2;\nint dias = switch (mes) {\n    case 2 -> 28;\n    case 4, 6, 9, 11 -> 30;\n    default -> 31;\n};\nSystem.out.println(dias);`, ['28', '30', '31', 'Error'], 'El mes 2 entra en la primera rama, y con flechas no hay caída a las siguientes.'),
        mc('¿Qué diferencia al switch con flechas del clásico con dos puntos?', ['No hay caída al siguiente case, así que no hace falta break', 'Solo funciona con números', 'Es más lento', 'Necesita break en cada case'], 'Cada rama se ejecuta sola, sin continuar en la siguiente.'),
        typ('Devuelve el valor desde un bloque dentro de un switch expresión', `String r = switch (n) {\n    case 3 -> {\n        System.out.println("tres");\n        ___ "impar";\n    }\n    default -> "otro";\n};`, 'yield', 'Dentro de un bloque `{ }` de un switch expresión el valor se devuelve con `yield`, no con `return`.'),
        out(`int n = 2;\nString r = "";\nswitch (n) {\n    case 1: r += "uno ";\n    case 2: r += "dos ";\n    case 3: r += "tres ";\n        break;\n    default: r += "otro";\n}\nSystem.out.println(r.trim());`, ['dos tres', 'dos', 'dos tres otro', 'uno dos tres'], 'Es el switch clásico: entra en `case 2` y, como no hay `break`, sigue en `case 3` hasta el `break`. No llega a `default`.'),
      ],
    },
    // ───────────── Día 26 ─────────────
    {
      id: 'java-concurrency',
      t: 'Concurrencia',
      d: 'Hilos, condiciones de carrera, synchronized, AtomicInteger y ExecutorService.',
      guide: [
        { h: 'Hilos', p: [
          'Un hilo (thread) es una línea de ejecución. Un programa Java empieza con el hilo `main`, pero puede lanzar otros para hacer varias cosas a la vez: descargar archivos mientras la interfaz sigue respondiendo, atender a muchos clientes...',
          'Se crea un `Thread` con una lambda y se arranca con `start()`. Ojo: llamar a `run()` ejecuta el código en el hilo actual, sin crear ninguno. `join()` espera a que el hilo termine.' ],
          code: `Thread t = new Thread(() -> {\n    for (int i = 1; i <= 3; i++) System.out.println("Descargando parte " + i);\n});\nt.start();          // arranca en paralelo\nt.join();           // espera a que termine\nSystem.out.println("Descarga completa");` },
        { h: 'Condiciones de carrera', p: [
          'Cuando dos hilos modifican el mismo dato a la vez, el resultado depende del orden en que se intercalen. `contador++` parece una operación, pero son tres: leer, sumar y escribir, y otro hilo puede colarse en medio.',
          'El resultado es un error intermitente: a veces sale bien y a veces no, lo que lo hace muy difícil de depurar.' ],
          code: `int[] contador = {0};\nRunnable sumar = () -> { for (int i = 0; i < 100_000; i++) contador[0]++; };\nThread a = new Thread(sumar), b = new Thread(sumar);\na.start(); b.start();\na.join(); b.join();\nSystem.out.println(contador[0]);  // casi nunca 200000` },
        { h: 'synchronized y clases atómicas', p: [
          '`synchronized` marca un método o bloque que solo un hilo puede ejecutar a la vez sobre el mismo objeto. Los demás esperan su turno.',
          'Para contadores es más sencillo `AtomicInteger`: `incrementAndGet()` suma de forma segura sin bloqueos explícitos. Para colecciones compartidas existen `ConcurrentHashMap` y compañía.' ],
          code: `AtomicInteger contador = new AtomicInteger();\nRunnable sumar = () -> { for (int i = 0; i < 100_000; i++) contador.incrementAndGet(); };\nThread a = new Thread(sumar), b = new Thread(sumar);\na.start(); b.start();\na.join(); b.join();\nSystem.out.println(contador.get());  // 200000, siempre` },
        { h: 'ExecutorService: grupos de hilos', p: [
          'Crear hilos a mano para cada tarea es caro. Un `ExecutorService` mantiene un grupo (pool) de hilos y les reparte las tareas que le envías con `submit`.',
          '`submit` devuelve un `Future`: su método `get()` espera a que la tarea termine y devuelve el resultado. Al acabar, llama a `shutdown()`. Desde Java 21, `Executors.newVirtualThreadPerTaskExecutor()` usa hilos virtuales, muy ligeros, ideales para miles de tareas que esperan a la red.' ],
          code: `ExecutorService pool = Executors.newFixedThreadPool(2);\nFuture<Integer> f = pool.submit(() -> {\n    Thread.sleep(500);   // simula un cálculo lento\n    return 6 * 7;\n});\nSystem.out.println("Calculando...");\nSystem.out.println(f.get());  // 42\npool.shutdown();` },
        { h: 'Ejemplo real: consultar varios servicios a la vez', real: true, p: [
          'Una web de viajes pregunta el precio a tres aerolíneas. Si lo hace una tras otra tarda la suma de los tiempos; en paralelo, solo lo que tarde la más lenta.' ],
          code: `static int consultarPrecio(String aerolinea) throws InterruptedException {\n    Thread.sleep(1000);                 // simula la llamada por red\n    return 80 + aerolinea.length() * 5;\n}\n\nList<String> aerolineas = List.of("Iberia", "Vueling", "Ryanair");\ntry (ExecutorService pool = Executors.newVirtualThreadPerTaskExecutor()) {\n    List<Future<Integer>> precios = new ArrayList<>();\n    for (String a : aerolineas) precios.add(pool.submit(() -> consultarPrecio(a)));\n\n    int mejor = Integer.MAX_VALUE;\n    for (Future<Integer> p : precios) mejor = Math.min(mejor, p.get());\n    System.out.println("Mejor precio: " + mejor + " €");  // en 1 segundo, no en 3\n}` },
      ],
      x: [
        mc('¿Qué método arranca un hilo nuevo?', ['start()', 'run()', 'begin()', 'execute()'], '`run()` ejecuta el código en el hilo actual; solo `start()` crea un hilo nuevo.'),
        mc('¿Qué es una condición de carrera?', ['Dos hilos modifican un dato a la vez y el resultado depende del orden', 'Un hilo que va más rápido que otro', 'Un bucle infinito', 'Un error de compilación'], 'Por eso `contador++` desde varios hilos puede perder sumas.'),
        fill(`AtomicInteger contador = new AtomicInteger();\ncontador.___();  // suma 1 de forma segura`, ['incrementAndGet', '++', 'add', 'increment'], '`incrementAndGet` suma 1 y devuelve el nuevo valor de forma atómica.'),
        out(`Thread t = new Thread(() -> System.out.println("hilo"));\nt.start();\nt.join();\nSystem.out.println("main");`, ['hilo\nmain', 'main\nhilo', 'main', 'hilo'], '`join()` hace que `main` espere a que el hilo termine, así que "hilo" sale siempre primero.'),
        mc('¿Para qué sirve `synchronized`?', ['Para que solo un hilo a la vez ejecute ese método o bloque', 'Para que el código vaya más rápido', 'Para crear un hilo nuevo', 'Para sincronizar el reloj del sistema'], 'Los demás hilos esperan hasta que el primero sale.'),
        ord('Crea un pool con 4 hilos', ['ExecutorService', 'pool', '=', 'Executors', '.', 'newFixedThreadPool', '(', '4', ')', ';'], ['new', 'Thread'], 'Los pools se crean con los métodos de fábrica de `Executors`.'),
        mc('¿Qué hace `future.get()`?', ['Espera a que la tarea termine y devuelve su resultado', 'Cancela la tarea', 'Arranca la tarea', 'Devuelve siempre null'], 'Si la tarea lanzó una excepción, `get()` la relanza envuelta en `ExecutionException`.'),
        out(`ExecutorService pool = Executors.newFixedThreadPool(3);\nList<Future<Integer>> futuros = new ArrayList<>();\nfor (int i = 1; i <= 3; i++) {\n    int n = i;\n    futuros.add(pool.submit(() -> n * n));\n}\nint total = 0;\nfor (Future<Integer> f : futuros) total += f.get();\npool.shutdown();\nSystem.out.println(total);`, ['14', '6', '36', '9'], 'Las tareas calculan 1, 4 y 9 en paralelo, pero `get()` espera a cada una: 1 + 4 + 9 = 14. `int n = i` hace falta porque la lambda solo puede usar variables efectivamente finales.'),
      ],
    },
    // ───────────── Día 27 ─────────────
    {
      id: 'java-build',
      t: 'Maven y Gradle',
      d: 'Herramientas de construcción: estructura del proyecto, dependencias, tests y empaquetado.',
      guide: [
        { h: 'Por qué una herramienta de construcción', p: [
          'Un proyecto real tiene decenas de clases, librerías externas, tests y un archivo final que entregar. Compilar todo eso con `javac` a mano es inviable.',
          'Maven y Gradle descargan las dependencias, compilan, ejecutan los tests y empaquetan el resultado (normalmente un `.jar`) con un solo comando. Además imponen una estructura de carpetas estándar que cualquier desarrollador reconoce.' ],
          code: `mi-proyecto/\n├── pom.xml                (o build.gradle.kts)\n└── src/\n    ├── main/java/          código de la aplicación\n    ├── main/resources/     configuración, plantillas...\n    └── test/java/          tests` },
        { h: 'Maven y el pom.xml', p: [
          'Maven se configura en `pom.xml`. Cada proyecto y cada librería se identifican con tres coordenadas: `groupId` (organización), `artifactId` (nombre) y `version`.',
          'Los comandos siguen un ciclo de vida: `mvn compile` compila, `mvn test` además ejecuta los tests y `mvn package` genera el `.jar` en la carpeta `target`.' ],
          code: `<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.miempresa</groupId>\n  <artifactId>tienda</artifactId>\n  <version>1.0.0</version>\n\n  <dependencies>\n    <dependency>\n      <groupId>com.google.code.gson</groupId>\n      <artifactId>gson</artifactId>\n      <version>2.11.0</version>\n    </dependency>\n  </dependencies>\n</project>` },
        { h: 'Gradle', p: [
          'Gradle hace lo mismo con un script en Kotlin (`build.gradle.kts`) o Groovy, más corto que el XML. Es el estándar en Android.',
          '`implementation` añade una dependencia para el código y `testImplementation` una que solo usan los tests. El wrapper `./gradlew` descarga y usa la versión de Gradle fijada en el proyecto, así todo el equipo compila igual.' ],
          code: `plugins {\n    java\n    application\n}\n\nrepositories { mavenCentral() }\n\ndependencies {\n    implementation("com.google.code.gson:gson:2.11.0")\n    testImplementation("org.junit.jupiter:junit-jupiter:5.11.0")\n}\n\napplication { mainClass = "com.miempresa.tienda.App" }\n\n// ./gradlew build   -> compila, prueba y empaqueta\n// ./gradlew run     -> ejecuta la aplicación` },
        { h: 'Repositorios y versiones', p: [
          'Las librerías se descargan de Maven Central, el gran repositorio público de Java, y se guardan en una caché local para no bajarlas cada vez.',
          'Fija versiones exactas: así el proyecto compila igual hoy que dentro de un año. Muchas librerías siguen el versionado semántico: un cambio en el primer número (2.x a 3.x) puede romper tu código.' ] },
        { h: 'Ejemplo real: un test con JUnit', real: true, p: [
          'Con JUnit añadido como dependencia de test, este test comprueba que el cálculo del IVA es correcto. `mvn test` o `./gradlew test` lo ejecutan junto a todos los demás antes de empaquetar.' ],
          code: `// src/main/java/com/miempresa/tienda/Precios.java\npublic class Precios {\n    public static double conIva(double base) {\n        return Math.round(base * 1.21 * 100) / 100.0;\n    }\n}\n\n// src/test/java/com/miempresa/tienda/PreciosTest.java\nimport org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\nclass PreciosTest {\n    @Test\n    void sumaElIva() {\n        assertEquals(121.0, Precios.conIva(100));\n    }\n}` },
      ],
      x: [
        mc('¿Qué archivo configura un proyecto Maven?', ['pom.xml', 'build.gradle', 'package.json', 'maven.yml'], '`package.json` es de npm (JavaScript).'),
        mc('¿Dónde va el código de la aplicación en la estructura estándar?', ['src/main/java', 'src/java', 'main/', 'java/src'], 'Los tests van en `src/test/java`.'),
        fill(`<dependency>\n  <groupId>com.google.code.gson</groupId>\n  <___>gson</artifactId>\n  <version>2.11.0</version>\n</dependency>`, ['artifactId', 'name', 'packageId', 'module'], 'Una dependencia se identifica con groupId, artifactId y version.'),
        ord('Limpia el proyecto y genera el .jar con Maven', ['mvn', 'clean', 'package'], ['npm', 'gradle'], '`clean` borra la carpeta `target` y `package` compila, prueba y empaqueta.'),
        mc('¿Qué significa `testImplementation` en Gradle?', ['La dependencia solo está disponible para los tests', 'Se descarga solo en producción', 'Comprueba que la dependencia funciona', 'Ejecuta los tests automáticamente'], 'Así las librerías de pruebas no acaban dentro del `.jar` final.'),
        mc('¿Para qué sirve `./gradlew`?', ['Ejecuta Gradle con la versión fijada en el proyecto, sin instalarlo aparte', 'Borra el proyecto', 'Instala Java', 'Crea un repositorio Git'], 'Es el wrapper: todo el equipo usa la misma versión de Gradle.'),
        typ('Añade Gson como dependencia del código', `dependencies {\n    ___("com.google.code.gson:gson:2.11.0")\n}`, 'implementation', '`implementation` es para el código de la aplicación; `testImplementation`, solo para los tests.'),
        mc('Una compañera clona tu proyecto Maven, compila a mano con `javac` y falla con "package com.google.gson does not exist". ¿Qué es lo más probable?', ['javac no lee el pom.xml ni descarga dependencias: debe usar mvn compile', 'Gson no existe en Maven Central', 'Tiene que reiniciar el ordenador', 'Debe borrar el pom.xml'], 'Maven descarga las dependencias declaradas y las pone en el classpath al compilar; `javac` solo no sabe nada de ellas.'),
      ],
    },
    // ───────────── Día 28 ─────────────
    {
      id: 'java-jdbc',
      t: 'JDBC y bases de datos',
      d: 'Conexiones, PreparedStatement, ResultSet, inyección SQL y transacciones.',
      guide: [
        { h: 'Qué es JDBC', p: [
          'JDBC es la API estándar de Java para hablar con bases de datos relacionales (PostgreSQL, MySQL, SQLite...). Cada base de datos aporta un driver, que se añade como dependencia con Maven o Gradle.',
          'La conexión se abre con `DriverManager.getConnection(url, usuario, contraseña)`. La URL indica el tipo de base de datos, el servidor y su nombre. Abre siempre la conexión en un try-with-resources para que se cierre sola.' ],
          code: `String url = "jdbc:postgresql://localhost:5432/tienda";\ntry (Connection con = DriverManager.getConnection(url, "app", System.getenv("DB_PASSWORD"))) {\n    System.out.println("Conectado: " + con.getMetaData().getDatabaseProductName());\n} catch (SQLException e) {\n    System.out.println("Error de conexión: " + e.getMessage());\n}` },
        { h: 'Consultar con PreparedStatement', p: [
          'Un `PreparedStatement` es una consulta con huecos `?` que se rellenan con `setString`, `setInt`... Los huecos se numeran desde 1.',
          '`executeQuery()` devuelve un `ResultSet`, un cursor que empieza antes de la primera fila: cada `next()` avanza una fila y devuelve `false` cuando no quedan más. Los valores se leen con `getString("columna")`, `getInt`...' ],
          code: `String sql = "SELECT nombre, precio FROM productos WHERE precio < ? ORDER BY precio";\ntry (PreparedStatement ps = con.prepareStatement(sql)) {\n    ps.setDouble(1, 10.0);\n    try (ResultSet rs = ps.executeQuery()) {\n        while (rs.next()) {\n            System.out.println(rs.getString("nombre") + ": " + rs.getDouble("precio"));\n        }\n    }\n}` },
        { h: 'Modificar datos e inyección SQL', p: [
          '`executeUpdate()` ejecuta INSERT, UPDATE o DELETE y devuelve cuántas filas ha cambiado.',
          'Nunca construyas una consulta concatenando texto que escribe el usuario. Un nombre como `x\' OR \'1\'=\'1` cambiaría el significado de la consulta: es la inyección SQL. Con `?` el driver envía los datos por separado y no pueden convertirse en código.' ],
          code: `// MAL: vulnerable a inyección SQL\n// String sql = "DELETE FROM usuarios WHERE email = '" + email + "'";\n\n// BIEN\ntry (PreparedStatement ps = con.prepareStatement("UPDATE productos SET precio = precio * 1.05 WHERE categoria = ?")) {\n    ps.setString(1, "bebidas");\n    int filas = ps.executeUpdate();\n    System.out.println(filas + " productos actualizados");\n}` },
        { h: 'Transacciones', p: [
          'Por defecto cada sentencia se confirma sola (auto-commit). Cuando varias operaciones deben ocurrir todas o ninguna, desactívalo con `setAutoCommit(false)`, confirma al final con `commit()` y, si algo falla, deshaz con `rollback()`.',
          'En aplicaciones grandes se suele usar JPA/Hibernate o Spring Data, que generan el SQL por ti, pero por debajo siguen usando JDBC.' ] },
        { h: 'Ejemplo real: una transferencia bancaria', real: true, p: [
          'Sacar dinero de una cuenta y meterlo en otra tiene que hacerse entero o no hacerse. Si el segundo UPDATE falla, el `rollback` devuelve el dinero a la primera cuenta.' ],
          code: `static void transferir(Connection con, int origen, int destino, double importe) throws SQLException {\n    con.setAutoCommit(false);\n    try (PreparedStatement sacar = con.prepareStatement("UPDATE cuentas SET saldo = saldo - ? WHERE id = ? AND saldo >= ?");\n         PreparedStatement meter = con.prepareStatement("UPDATE cuentas SET saldo = saldo + ? WHERE id = ?")) {\n        sacar.setDouble(1, importe); sacar.setInt(2, origen); sacar.setDouble(3, importe);\n        if (sacar.executeUpdate() == 0) throw new SQLException("Saldo insuficiente");\n        meter.setDouble(1, importe); meter.setInt(2, destino);\n        meter.executeUpdate();\n        con.commit();\n    } catch (SQLException e) {\n        con.rollback();\n        throw e;\n    } finally {\n        con.setAutoCommit(true);\n    }\n}` },
      ],
      x: [
        mc('¿Qué es JDBC?', ['La API estándar de Java para hablar con bases de datos relacionales', 'Una base de datos', 'Un framework web', 'Un lenguaje de consultas'], 'Cada base de datos aporta su driver JDBC.'),
        fill(`PreparedStatement ps = con.prepareStatement(\n    "SELECT * FROM usuarios WHERE email = ___");\nps.setString(1, email);`, ['?', '$email', ':email', '%s'], 'En JDBC los huecos se marcan con `?` y se rellenan con los métodos `set...`.'),
        mc('¿Por qué usar `PreparedStatement` en lugar de concatenar texto en la consulta?', ['Evita la inyección SQL al enviar los datos aparte de la consulta', 'Es obligatorio en MySQL', 'Hace la consulta asíncrona', 'Por ninguna razón concreta'], 'Los datos nunca se interpretan como SQL.'),
        fill(`try (ResultSet rs = ps.executeQuery()) {\n    while (rs.___()) {\n        System.out.println(rs.getString("nombre"));\n    }\n}`, ['next', 'hasNext', 'read', 'fetch'], '`next()` avanza a la siguiente fila y devuelve `false` cuando no quedan.'),
        mc('¿Qué devuelve `executeUpdate()`?', ['El número de filas afectadas', 'Un ResultSet', 'true o false', 'Nada'], 'Sirve para INSERT, UPDATE y DELETE.'),
        ord('Rellena el primer hueco de la consulta con el email', ['ps', '.', 'setString', '(', '1', ',', 'email', ')', ';'], ['setText', '0'], 'Los huecos se numeran desde 1, no desde 0.'),
        mc('¿Qué hace `con.rollback()`?', ['Deshace los cambios de la transacción en curso', 'Confirma los cambios', 'Cierra la conexión', 'Repite la última consulta'], 'Se usa en el `catch` cuando una operación de la transacción falla.'),
        mc('Si `nombre` vale `x\' OR \'1\'=\'1`, ¿qué pasa al ejecutar esta consulta?', ['Devuelve todos los usuarios: es una inyección SQL', 'Lanza siempre SQLException', 'No devuelve nada', 'Busca un usuario con ese nombre literal'], 'La condición queda `nombre = \'x\' OR \'1\'=\'1\'`, que es verdadera para todas las filas. Con `PreparedStatement` y `?` no pasaría.', `String sql = "SELECT * FROM usuarios WHERE nombre = '" + nombre + "'";\nResultSet rs = con.createStatement().executeQuery(sql);`),
      ],
    },
    // ───────────── Día 29 ─────────────
    {
      id: 'java-spring',
      t: 'APIs REST con Spring Boot',
      d: '@RestController, mappings, @PathVariable, @RequestBody, ResponseEntity y capas.',
      guide: [
        { h: 'Qué es Spring Boot', p: [
          'Spring es el framework más usado para aplicaciones Java de servidor, y Spring Boot lo configura casi todo por ti: trae un servidor web integrado, así que tu aplicación arranca con un simple `main`.',
          'Un proyecto nuevo se genera en start.spring.io eligiendo la dependencia "Spring Web". Se ejecuta con `./mvnw spring-boot:run` o `./gradlew bootRun` y queda escuchando en http://localhost:8080.' ],
          code: `@SpringBootApplication\npublic class TiendaApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(TiendaApplication.class, args);\n    }\n}` },
        { h: 'Controladores y rutas', p: [
          '`@RestController` marca una clase que atiende peticiones HTTP. Cada método se asocia a una ruta con `@GetMapping`, `@PostMapping`, `@PutMapping` o `@DeleteMapping`.',
          'Lo que devuelve el método se convierte automáticamente en JSON (con la librería Jackson), usando los getters o los componentes del record.' ],
          code: `record Saludo(String mensaje, int longitud) {}\n\n@RestController\npublic class SaludoController {\n    @GetMapping("/saludo")\n    public Saludo saludo(@RequestParam(defaultValue = "mundo") String nombre) {\n        String m = "Hola, " + nombre;\n        return new Saludo(m, m.length());\n    }\n}\n// GET /saludo?nombre=Ana  ->  {"mensaje":"Hola, Ana","longitud":9}` },
        { h: 'Parámetros, cuerpo y códigos de estado', p: [
          '`@PathVariable` lee una parte de la ruta (`/tareas/{id}`), `@RequestParam` un parámetro de la URL (`?q=pan`) y `@RequestBody` convierte el JSON del cuerpo de la petición en un objeto Java.',
          'Para elegir el código de estado devuelve un `ResponseEntity`: `ResponseEntity.ok(x)` da 200, `ResponseEntity.status(HttpStatus.CREATED).body(x)` da 201 y `ResponseEntity.notFound().build()` da 404.' ] },
        { h: 'Capas e inyección de dependencias', p: [
          'Una aplicación ordenada separa responsabilidades: el controlador habla HTTP, el servicio (`@Service`) contiene la lógica de negocio y el repositorio accede a los datos. Con Spring Data JPA, un repositorio es solo una interfaz.',
          'Spring crea esos objetos y los conecta: basta con pedirlos en el constructor. Esta inyección por constructor deja las dependencias claras, permite que sean `final` y facilita sustituirlas en los tests.' ],
          code: `@Service\npublic class PrecioService {\n    public double conIva(double base) { return base * 1.21; }\n}\n\n@RestController\npublic class PrecioController {\n    private final PrecioService service;\n\n    public PrecioController(PrecioService service) {  // Spring lo inyecta\n        this.service = service;\n    }\n\n    @GetMapping("/precio/{base}")\n    public double precio(@PathVariable double base) {\n        return service.conIva(base);\n    }\n}` },
        { h: 'Ejemplo real: una API de tareas', real: true, p: [
          'Una API completa para una lista de tareas: listar, consultar una, crear y borrar. Los datos se guardan en memoria; cambiarlos a una base de datos solo afectaría a la capa de repositorio.' ],
          code: `record Tarea(long id, String titulo, boolean hecha) {}\nrecord NuevaTarea(String titulo) {}\n\n@RestController\n@RequestMapping("/tareas")\npublic class TareaController {\n    private final Map<Long, Tarea> tareas = new ConcurrentHashMap<>();\n    private final AtomicLong siguienteId = new AtomicLong(1);\n\n    @GetMapping\n    public Collection<Tarea> listar() { return tareas.values(); }\n\n    @GetMapping("/{id}")\n    public ResponseEntity<Tarea> ver(@PathVariable long id) {\n        Tarea t = tareas.get(id);\n        return t == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(t);\n    }\n\n    @PostMapping\n    public ResponseEntity<Tarea> crear(@RequestBody NuevaTarea nueva) {\n        if (nueva.titulo() == null || nueva.titulo().isBlank()) return ResponseEntity.badRequest().build();\n        Tarea t = new Tarea(siguienteId.getAndIncrement(), nueva.titulo(), false);\n        tareas.put(t.id(), t);\n        return ResponseEntity.status(HttpStatus.CREATED).body(t);\n    }\n\n    @DeleteMapping("/{id}")\n    public ResponseEntity<Void> borrar(@PathVariable long id) {\n        return tareas.remove(id) == null ? ResponseEntity.notFound().build() : ResponseEntity.noContent().build();\n    }\n}` },
      ],
      x: [
        mc('¿Qué anotación marca una clase que atiende peticiones HTTP y responde con JSON?', ['@RestController', '@Service', '@Entity', '@Json'], '`@Service` es para la lógica de negocio y `@Entity` para tablas de JPA.'),
        fill(`@___("/saludo")\npublic String saludo() {\n    return "Hola";\n}`, ['GetMapping', 'Get', 'Route', 'RequestGet'], '`@GetMapping` asocia el método a peticiones GET en esa ruta.'),
        mc('Con `@GetMapping("/usuarios/{id}")`, ¿cómo recibe el método el `id`?', ['Con un parámetro @PathVariable long id', 'Con @RequestBody long id', 'Con @Param id', 'Con request.get("id")'], '`@PathVariable` lee la parte de la ruta que va entre llaves.'),
        mc('¿Qué hace `@RequestBody`?', ['Convierte el JSON del cuerpo de la petición en un objeto Java', 'Devuelve el cuerpo como texto', 'Valida la URL', 'Crea la tabla en la base de datos'], 'Se usa sobre todo en métodos POST y PUT.'),
        fill(`return ResponseEntity.___(HttpStatus.CREATED).body(tarea);`, ['status', 'code', 'with', 'send'], '`status` fija el código HTTP y `body` el contenido de la respuesta.'),
        mc('¿Qué ventaja tiene la inyección de dependencias por constructor?', ['Las dependencias son explícitas, pueden ser final y se sustituyen fácilmente en los tests', 'El código va más rápido', 'No necesita Spring', 'Crea cada objeto dos veces'], 'Spring pasa al constructor los objetos que necesita la clase.'),
        typ('Recibe el parámetro q de la URL /buscar?q=pan', `@GetMapping("/buscar")\npublic List<Producto> buscar(@___ String q) {\n    return service.buscar(q);\n}`, 'RequestParam', '`@RequestParam` lee los parámetros que van después de `?` en la URL.'),
        mc('¿Qué JSON recibe el cliente al llamar a GET /tarea?', ['{"titulo":"Repasar","hecha":false}', 'Tarea@1b6d3586', '{"getTitulo":"Repasar","isHecha":false}', '"Repasar"'], 'Jackson usa los getters: `getTitulo()` da la propiedad "titulo" e `isHecha()`, al ser boolean, da "hecha".', `public class Tarea {\n    private String titulo = "Repasar";\n    private boolean hecha = false;\n    public String getTitulo() { return titulo; }\n    public boolean isHecha() { return hecha; }\n}\n\n@GetMapping("/tarea")\npublic Tarea tarea() {\n    return new Tarea();\n}`),
      ],
    },
    // ───────────── Día 30 ─────────────
    {
      id: 'java-wrapup',
      t: 'Conclusiones',
      d: 'Repaso final del reto, buenas prácticas, errores clásicos y cómo seguir.',
      guide: [
        { h: 'Lo que has aprendido', p: [
          'En 30 días has pasado de `System.out.println("Hola, mundo")` a crear una API REST con Spring Boot. Has visto tipos, colecciones, clases, herencia, interfaces, excepciones, genéricos, lambdas, streams, concurrencia, archivos y bases de datos.',
          'Lo importante no es memorizar cada método, sino entender las ideas: tipos que el compilador comprueba, objetos que encapsulan su estado y código que se lee como una descripción del problema.' ] },
        { h: 'Buenas prácticas', p: [
          'Usa nombres que expliquen la intención, métodos cortos que hagan una sola cosa y `final` siempre que puedas: los objetos inmutables (como los records) evitan muchos errores.',
          'Programa contra interfaces (`List`, no `ArrayList`), cierra los recursos con try-with-resources, no dejes `catch` vacíos y escribe tests con JUnit para lo importante.' ],
          code: `// Menos claro\nArrayList<Object> l = new ArrayList<>();\nfor (int i = 0; i < pedidos.size(); i++) {\n    if (pedidos.get(i).total() > 100) l.add(pedidos.get(i).cliente());\n}\n\n// Más claro\nList<String> clientesVip = pedidos.stream()\n    .filter(p -> p.total() > 100)\n    .map(Pedido::cliente)\n    .toList();` },
        { h: 'Errores clásicos', p: [
          'Comparar String con `==` compara referencias, no contenido: usa `equals`. Lo mismo con `Integer` fuera del rango -128 a 127.',
          'Modificar una lista mientras la recorres con for-each lanza `ConcurrentModificationException`: usa `removeIf`. Y si sobrescribes `equals`, sobrescribe también `hashCode`, o los `HashMap` y `HashSet` se comportarán mal.' ],
          code: `String a = new String("hola");\nSystem.out.println(a == "hola");       // false\nSystem.out.println(a.equals("hola"));  // true\n\nList<Integer> nums = new ArrayList<>(List.of(3, -1, 4, -5));\nnums.removeIf(n -> n < 0);\nSystem.out.println(nums);  // [3, 4]` },
        { h: 'Cómo seguir', p: [
          'Elige un camino: backend con Spring Boot y Spring Data, Android (hoy sobre todo con Kotlin, que corre en la misma JVM) o sistemas de datos con Kafka o Spark.',
          'Lee "Effective Java" de Joshua Bloch, practica con proyectos propios, publícalos en GitHub y lee código de proyectos de código abierto. Se aprende a programar programando.' ] },
        { h: 'Ejemplo real: tu proyecto final', real: true, p: [
          'Un gestor de gastos de consola que une buena parte del curso: records para los datos, archivos para guardarlos y streams para el resumen. Amplíalo a tu gusto con una base de datos o una API con Spring Boot.' ],
          code: `record Gasto(LocalDate fecha, String categoria, double importe) {\n    String aCsv() { return fecha + "," + categoria + "," + importe; }\n    static Gasto deCsv(String linea) {\n        String[] p = linea.split(",");\n        return new Gasto(LocalDate.parse(p[0]), p[1], Double.parseDouble(p[2]));\n    }\n}\n\npublic class Gastos {\n    public static void main(String[] args) throws IOException {\n        Path archivo = Path.of("gastos.csv");\n        List<Gasto> gastos = List.of(\n            new Gasto(LocalDate.of(2025, 3, 1), "comida", 42.5),\n            new Gasto(LocalDate.of(2025, 3, 2), "transporte", 12.0),\n            new Gasto(LocalDate.of(2025, 3, 5), "comida", 18.3));\n        Files.write(archivo, gastos.stream().map(Gasto::aCsv).toList());\n\n        Map<String, Double> resumen = Files.readAllLines(archivo).stream()\n            .map(Gasto::deCsv)\n            .collect(Collectors.groupingBy(Gasto::categoria, TreeMap::new,\n                     Collectors.summingDouble(Gasto::importe)));\n        resumen.forEach((cat, total) -> System.out.printf("%-12s %8.2f%n", cat, total));\n    }\n}` },
      ],
      x: [
        out(`String a = new String("hola");\nString b = "hola";\nSystem.out.println((a == b) + " " + a.equals(b));`, ['false true', 'true true', 'true false', 'false false'], '`new String` crea otro objeto: `==` compara referencias y da false, `equals` compara el contenido.'),
        out(`Integer x = 127, y = 127, m = 1000, n = 1000;\nSystem.out.println((x == y) + " " + (m == n));`, ['true false', 'true true', 'false false', 'false true'], 'Java reutiliza los objetos Integer entre -128 y 127, así que x e y son el mismo objeto. 1000 queda fuera de esa caché. Compara siempre con `equals`.'),
        mc('¿Qué lanza eliminar elementos de un ArrayList mientras lo recorres con for-each?', ['ConcurrentModificationException', 'IndexOutOfBoundsException', 'NullPointerException', 'Nada'], 'Usa `removeIf` o un `Iterator` con su método `remove()`.'),
        fill(`List<Integer> nums = new ArrayList<>(List.of(3, -1, 4));\nnums.___(n -> n < 0);  // borra los negativos`, ['removeIf', 'removeAll', 'filter', 'delete'], '`removeIf` recibe un predicado y borra los elementos que lo cumplen.'),
        out(`StringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 3; i++) sb.append(i).append(",");\nSystem.out.println(sb.reverse());`, [',2,1,0', '0,1,2,', '2,1,0,', ',0,1,2'], 'El texto es "0,1,2," y `reverse()` le da la vuelta carácter a carácter.'),
        out(`System.out.println(10 / 4 + " " + 10 / 4.0 + " " + 10 % 4);`, ['2 2.5 2', '2.5 2.5 2', '2 2 2', '2 2.5 2.5'], 'Entre enteros, `/` descarta los decimales; con un `double` no. `%` da el resto: 2.'),
        mc('¿Qué método debes sobrescribir siempre que sobrescribas `equals`?', ['hashCode', 'toString', 'compareTo', 'clone'], 'Dos objetos iguales deben tener el mismo hashCode, o `HashMap` y `HashSet` no los encontrarán.'),
        out(`record Gasto(String categoria, double importe) {}\nList<Gasto> gastos = List.of(\n    new Gasto("comida", 12.5), new Gasto("ocio", 20.0),\n    new Gasto("comida", 8.5), new Gasto("transporte", 3.0));\nString mayor = gastos.stream()\n    .collect(Collectors.groupingBy(Gasto::categoria, Collectors.summingDouble(Gasto::importe)))\n    .entrySet().stream()\n    .max(Map.Entry.comparingByValue())\n    .map(Map.Entry::getKey)\n    .orElse("ninguna");\nSystem.out.println(mayor);`, ['comida', 'ocio', 'transporte', 'ninguna'], 'Agrupando, comida suma 12.5 + 8.5 = 21.0, ocio 20.0 y transporte 3.0. `max` por valor se queda con la entrada de comida y `getKey` da su nombre.'),
      ],
    },
  ],
}))(Sintaxis);
