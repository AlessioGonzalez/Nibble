/* C++ · Español */
(({ mc, out, fill, ord, typ, code, addCourse }) => addCourse('cpp', 'es', {
  tag: 'Rendimiento y control directo de la memoria.',
  days: [
    // ───────────────────────── Día 1
    {
      id: 'cpp-intro',
      t: 'Introducción',
      d: 'Qué es C++, compilar, main, iostream y std::cout.',
      guide: [
        { h: '¿Qué es C++?', p: [
          'C++ es un lenguaje compilado creado por Bjarne Stroustrup a partir de 1979 como una ampliación de C. Combina la velocidad de C con herramientas modernas como clases, plantillas y una gran biblioteca estándar.',
          'Está detrás de navegadores como Chrome, motores de videojuegos como Unreal Engine, bases de datos como MySQL y sistemas de trading donde cada microsegundo cuenta.',
          'El lenguaje evoluciona por versiones: C++11 lo modernizó y después llegaron C++14, C++17, C++20 y C++23. En este curso usamos C++17/20.' ] },
        { h: 'Tu primer programa', p: [
          'Guarda este código en `hola.cpp`. Todo programa empieza a ejecutarse en la función `int main()`.',
          'A diferencia de Python, C++ no se ejecuta directamente: primero el compilador traduce el código a un ejecutable. Con GCC: `g++ -std=c++20 hola.cpp -o hola` y después `./hola`.' ],
          code: `#include <iostream>\n\nint main() {\n    std::cout << "Hola, mundo\\n";\n    return 0;\n}` },
        { h: 'Anatomía del programa', p: [
          '`#include <iostream>` trae la parte de la biblioteca estándar que maneja la entrada y la salida. `std::cout` es la salida estándar y `<<` le envía datos; puedes encadenar varios `<<` seguidos.',
          '`std::` indica que `cout` pertenece al espacio de nombres de la biblioteca estándar. `"\\n"` es un salto de línea.',
          'Cada instrucción termina en `;`. Olvidarlo es el error más común al empezar. `return 0;` avisa al sistema de que todo fue bien (en `main` puedes omitirlo).' ],
          code: `#include <iostream>\n\nint main() {\n    // Comentario de una línea\n    /* Comentario\n       de varias líneas */\n    std::cout << "Tengo " << 25 << " años" << "\\n";  // Tengo 25 años\n    std::cout << 3 + 4 << "\\n";                      // 7\n}` },
        { h: 'Leer datos del teclado', p: [
          '`std::cin` es la entrada estándar y usa `>>` en sentido contrario: lleva el dato del teclado a una variable.',
          'Truco para recordarlo: las flechas apuntan hacia donde va el dato. `cout << x` saca `x` hacia la pantalla; `cin >> x` mete lo tecleado en `x`.' ],
          code: `#include <iostream>\n\nint main() {\n    int edad;\n    std::cout << "¿Cuántos años tienes? ";\n    std::cin >> edad;\n    std::cout << "El año que viene tendrás " << edad + 1 << "\\n";\n}` },
        { h: 'Ejemplo real: precio con IVA', real: true, p: [
          'Una tienda online necesita mostrar el precio final de un producto. Con unas pocas líneas ya calculas el total con un IVA del 21 %.',
          '`std::cout` muestra los decimales que hagan falta (hasta 6 cifras significativas por defecto). En el día 28 verás cómo fijar exactamente dos decimales.' ],
          code: `#include <iostream>\n\nint main() {\n    double precio = 49.99;\n    double iva = 0.21;\n    std::cout << "Total: " << precio * (1 + iva) << " euros\\n";  // Total: 60.4879 euros\n}` },
      ],
      x: [
        mc('¿Qué cabecera necesitas para usar `std::cout`?', ['<iostream>', '<console>', '<output>', '<stdio>'], '`<iostream>` declara los flujos estándar `std::cout` y `std::cin`.'),
        mc('¿En qué función empieza a ejecutarse un programa de C++?', ['main', 'start', 'init', 'run'], 'El sistema operativo llama siempre a `main` al arrancar el programa.'),
        mc('¿Cómo se escribe un comentario de una línea en C++?', ['// comentario', '# comentario', '-- comentario', '<!-- comentario -->'], 'Todo lo que sigue a `//` hasta el final de la línea se ignora. `#` es de Python.'),
        ord('Escribe la instrucción que muestra Hola', ['std::cout', '<<', '"Hola"', ';'], ['>>', 'print'], '`<<` envía el texto al flujo de salida y la instrucción termina con `;`.'),
        mc('¿Qué hace el compilador de C++?', ['Traduce el código fuente a un programa ejecutable', 'Ejecuta el código línea a línea', 'Descarga librerías de internet', 'Corrige los errores automáticamente'], 'Por ejemplo, `g++ hola.cpp -o hola` genera el ejecutable `hola`.'),
        out(`std::cout << "A" << "B" << "\\n" << "C";`, ['AB\nC', 'A B C', 'ABC', 'AB\\nC'], '`<<` encadena sin añadir espacios y `"\\n"` produce un salto de línea real.'),
        typ('Escribe el operador que lleva lo tecleado a la variable', `int edad;\nstd::cin ___ edad;`, '>>', '`std::cin` usa `>>`: el dato va del teclado hacia la variable.'),
        // Reto final
        out(`std::cout << 3 + 4 << " " << "3 + 4" << "\\n";\nstd::cout << 10 / 4;`, ['7 3 + 4\n2', '7 7\n2.5', '3 + 4 3 + 4\n2', '7 3 + 4\n2.5'], 'Sin comillas, `3 + 4` se calcula; entre comillas es texto. `10 / 4` entre enteros descarta los decimales: 2.'),
      ],
      lab: [
        code('Escribe un programa que muestre `Hola, Kibi` en una línea y, en la siguiente, el resultado de `7 * 6`.', `#include <iostream>\n\nint main() {\n    // Escribe aquí tu programa\n    return 0;\n}\n`, [{ in: '', out: 'Hola, Kibi\n42' }], `#include <iostream>\n\nint main() {\n    std::cout << "Hola, Kibi" << "\\n";\n    std::cout << 7 * 6 << "\\n";\n    return 0;\n}`, '`std::cout` con `"\\n"` escribe cada valor en una línea nueva: primero el texto entre comillas y después el resultado de `7 * 6`, que se calcula antes de mostrarlo.'),
      ],
    },
    // ───────────────────────── Día 2
    {
      id: 'cpp-vars',
      t: 'Variables y tipos',
      d: 'int, double, char, bool, auto, const y conversiones.',
      guide: [
        { h: 'Declarar variables', p: [
          'En C++ cada variable tiene un tipo fijo que se indica al declararla: `int edad = 30;`. El compilador usa ese tipo para reservar memoria y detectar errores antes de ejecutar.',
          'Puedes inicializar con `=` o con llaves: `int edad{30};`. Las llaves son más seguras porque no permiten conversiones que pierden datos: `int x{3.7};` no compila.',
          'Una variable local sin inicializar contiene basura. Inicializa siempre tus variables.' ],
          code: `int edad = 30;\ndouble altura{1.75};\nint puntos;        // ¡basura! no la leas sin darle valor\npuntos = 0;        // ahora sí` },
        { h: 'Los tipos básicos', p: [
          '`int` para enteros, `double` para decimales, `char` para un carácter entre comillas simples, `bool` para `true`/`false` y `long long` para enteros muy grandes.',
          '`sizeof(tipo)` dice cuántos bytes ocupa. En la mayoría de PCs `int` ocupa 4 bytes (hasta unos 2.100 millones) y `long long` 8 bytes.' ],
          code: `int habitantes = 3300000;\nlong long poblacion_mundial = 8100000000LL;\ndouble precio = 19.95;\nchar inicial = 'M';\nbool activo = true;\nstd::cout << sizeof(char) << " " << sizeof(double);  // 1 8` },
        { h: 'auto, const y constexpr', p: [
          '`auto` deja que el compilador deduzca el tipo a partir del valor: `auto x = 3.5;` es un `double`. Úsalo cuando el tipo sea evidente o muy largo de escribir.',
          '`const` impide modificar la variable después de crearla. `constexpr` va más allá: el valor se calcula en tiempo de compilación.',
          'Buena práctica: marca como `const` todo lo que no vaya a cambiar. El compilador te avisará si lo modificas por error.' ],
          code: `auto total = 2 * 9.99;      // double\nauto unidades = 3;          // int\nconst double IVA = 0.21;\nconstexpr int DIAS_SEMANA = 7;\n// IVA = 0.10;  // error: IVA es const` },
        { h: 'Conversiones y static_cast', p: [
          'C++ convierte tipos automáticamente, y a veces pierde información: al guardar `3.9` en un `int` se queda en `3` (trunca, no redondea).',
          'La división entre dos enteros es entera: `7 / 2` vale `3`. Si quieres decimales, convierte uno de los operandos con `static_cast<double>(x)`.',
          '`static_cast` hace la conversión explícita y visible. Evita el estilo antiguo `(double)x`.' ],
          code: `int total = 7, n = 2;\nstd::cout << total / n << "\\n";                          // 3\nstd::cout << static_cast<double>(total) / n << "\\n";     // 3.5\nint truncado = 3.9;\nstd::cout << truncado;                                   // 3` },
        { h: 'Ejemplo real: consumo de un coche', real: true, p: [
          'Tras un viaje quieres saber cuántos litros gasta tu coche cada 100 km. Fíjate en que usamos `double` porque los litros llevan decimales.',
          'Si hubieras declarado `litros` como `int`, el 29.4 se habría quedado en 29 y el resultado sería incorrecto.' ],
          code: `#include <iostream>\n\nint main() {\n    const double km = 420;\n    const double litros = 29.4;\n    std::cout << "Consumo: " << litros / km * 100 << " L/100 km\\n";  // Consumo: 7 L/100 km\n}` },
      ],
      x: [
        mc('¿Qué tipo usarías para guardar si un usuario está conectado?', ['bool', 'boolean', 'bit', 'int8'], 'El tipo lógico de C++ es `bool` y vale `true` o `false`.'),
        mc('En `auto x = 3.5;`, ¿qué tipo deduce el compilador?', ['double', 'float', 'int', 'auto'], 'Los literales decimales sin sufijo son `double`. `3.5f` sería `float`.'),
        out(`int a = 7, b = 2;\nstd::cout << a / b;`, ['3', '3.5', '4', '3.0'], 'La división entre dos `int` descarta los decimales.'),
        out(`std::cout << 7.0 / 2;`, ['3.5', '3', '4', '3.50'], 'Si un operando es `double`, la división es decimal.'),
        out(`int x = 3.9;\nstd::cout << x;`, ['3', '3.9', '4', 'Error'], 'Al guardar un decimal en un `int` se trunca la parte decimal, no se redondea.'),
        fill(`int suma = 17, n = 4;\ndouble media = static_cast<___>(suma) / n;  // 4.25`, ['double', 'int', 'char', 'bool'], 'Convirtiendo `suma` a `double`, la división deja de ser entera.'),
        out(`char c = 'A';\nc = c + 2;\nstd::cout << c;`, ['C', 'A2', '67', 'B'], 'Un `char` es un número: A (65) + 2 = 67, que es la letra C.'),
        // Reto final
        out(`int a = 9;\ndouble b = a / 2;\ndouble c = a / 2.0;\nstd::cout << b << " " << c;`, ['4 4.5', '4.5 4.5', '4 4', '4.5 4'], '`a / 2` se calcula entre enteros (4) antes de guardarse en `b`; `a / 2.0` ya es decimal (4.5).'),
      ],
    },
    // ───────────────────────── Día 3
    {
      id: 'cpp-operators',
      t: 'Operadores',
      d: 'Aritméticos, comparación, lógicos, incrementos y precedencia.',
      guide: [
        { h: 'Operadores aritméticos', p: [
          'C++ tiene `+ - * /` y `%` (resto). Entre enteros, `/` descarta decimales y `%` devuelve lo que sobra: `17 / 5` es 3 y `17 % 5` es 2.',
          '`%` solo funciona con enteros. Es muy útil para saber si un número es par (`n % 2 == 0`) o para quedarte con la última cifra (`n % 10`).' ],
          code: `int a = 17, b = 5;\nstd::cout << a + b << " " << a - b << " " << a * b << "\\n";  // 22 12 85\nstd::cout << a / b << " " << a % b << "\\n";                  // 3 2\nstd::cout << 17.0 / 5;                                       // 3.4` },
        { h: 'Asignación compuesta e incrementos', p: [
          '`x += 3` equivale a `x = x + 3`; también existen `-=`, `*=`, `/=` y `%=`.',
          '`++x` incrementa y devuelve el valor nuevo; `x++` devuelve el valor antiguo y después incrementa. Solo importa si usas el resultado en la misma expresión.',
          'No modifiques la misma variable dos veces en una expresión (`i = i++ + ++i`): el resultado no está bien definido.' ],
          code: `int x = 5;\nint a = x++;   // a = 5, x = 6\nint b = ++x;   // x = 7, b = 7\nx *= 2;        // 14\nstd::cout << a << " " << b << " " << x;  // 5 7 14` },
        { h: 'Comparación y lógica', p: [
          'Los comparadores `== != < > <= >=` y los lógicos `&&` (y), `||` (o) y `!` (no) producen un `bool`.',
          '`std::cout` muestra los `bool` como `1` y `0`. Si prefieres ver `true`/`false`, envía antes `std::boolalpha`.',
          '`&&` y `||` se evalúan en cortocircuito: en `a && b`, si `a` es falso, `b` ni se calcula. Por eso `v.size() > 0 && v[0] == 1` es seguro.' ],
          code: `int edad = 20;\nbool tiene_entrada = true;\nstd::cout << (edad >= 18) << "\\n";                       // 1\nstd::cout << std::boolalpha << (edad >= 18 && !tiene_entrada);  // false` },
        { h: 'Precedencia', p: [
          '`*`, `/` y `%` van antes que `+` y `-`; las comparaciones van después de la aritmética, y `&&` antes que `||`.',
          'Ojo con `std::cout << a < b;`: `<<` tiene más prioridad que `<`, así que no compila. Pon paréntesis: `std::cout << (a < b);`.',
          'Ante la duda, usa paréntesis: hacen el código más claro y evitan sorpresas.' ] },
        { h: 'Ejemplo real: año bisiesto y cambio en monedas', real: true, p: [
          'Un calendario necesita saber si febrero tiene 29 días: un año es bisiesto si es divisible entre 4 y no entre 100, salvo que sea divisible entre 400.',
          'Y una caja registradora convierte céntimos en euros y céntimos con `/` y `%`.' ],
          code: `#include <iostream>\n\nint main() {\n    int anio = 2024;\n    bool bisiesto = (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;\n    std::cout << std::boolalpha << anio << " bisiesto: " << bisiesto << "\\n";  // 2024 bisiesto: true\n\n    int centimos = 387;\n    std::cout << centimos / 100 << " euros y " << centimos % 100 << " céntimos\\n";  // 3 euros y 87 céntimos\n}` },
      ],
      x: [
        typ('Escribe el operador que da el resto de la división', `int resto = 17 ___ 5;  // 2`, '%', '`%` devuelve lo que sobra: 17 entre 5 cabe 3 veces y sobran 2.'),
        out(`int x = 10;\nx -= 3;\nx *= 2;\nstd::cout << x;`, ['14', '7', '20', '17'], '10 - 3 = 7 y 7 * 2 = 14.'),
        mc('En `v.size() > 0 && v[0] == 1`, ¿qué pasa si el vector está vacío?', ['`v[0]` no llega a evaluarse', 'El programa falla al leer `v[0]`', 'Se evalúan las dos partes igualmente', 'No compila'], '`&&` usa cortocircuito: si la primera parte es falsa, la segunda no se calcula.'),
        out(`int x = 5;\nint y = x++;\nstd::cout << x << " " << y;`, ['6 5', '6 6', '5 6', '5 5'], '`x++` devuelve el valor antiguo (5) y después incrementa `x` a 6.'),
        fill(`std::cout << std::___ << (2 < 3);  // muestra: true`, ['boolalpha', 'booltext', 'showbool', 'truefalse'], '`std::boolalpha` hace que los `bool` se impriman como `true` y `false`.'),
        out(`bool a = true, b = false;\nstd::cout << (a && !b) << (a && b);`, ['10', '11', '01', 'truefalse'], '`a && !b` es verdadero (1) y `a && b` es falso (0).'),
        out(`std::cout << 2 + 3 * 4 % 5;`, ['4', '0', '2', '14'], '`*` y `%` van primero, de izquierda a derecha: 3 * 4 = 12, 12 % 5 = 2, y 2 + 2 = 4.'),
        // Reto final
        out(`int a = 1900, b = 2024;\nbool ba = (a % 4 == 0 && a % 100 != 0) || a % 400 == 0;\nbool bb = (b % 4 == 0 && b % 100 != 0) || b % 400 == 0;\nstd::cout << ba << bb << " " << 387 / 100 << ":" << 387 % 100;`, ['01 3:87', '11 3:87', '01 3.87:87', '10 3:87'], '1900 es divisible entre 100 pero no entre 400, así que no es bisiesto (0); 2024 sí (1). Después, 387 / 100 = 3 y 387 % 100 = 87.'),
      ],
    },
    // ───────────────────────── Día 4
    {
      id: 'cpp-conditionals',
      t: 'Condicionales',
      d: 'if, else if, switch, el operador ternario y FizzBuzz.',
      guide: [
        { h: 'if, else if y else', p: [
          '`if (condición)` ejecuta un bloque solo si la condición es verdadera. `else if` encadena más casos y `else` recoge todo lo demás.',
          'Usa siempre llaves `{ }`, aunque el bloque tenga una sola línea: evita errores al añadir líneas después.' ],
          code: `int nota = 7;\nif (nota >= 9) {\n    std::cout << "Sobresaliente";\n} else if (nota >= 7) {\n    std::cout << "Notable";     // se ejecuta este\n} else if (nota >= 5) {\n    std::cout << "Aprobado";\n} else {\n    std::cout << "Suspenso";\n}` },
        { h: 'Verdadero, falso y el error de =', p: [
          'En C++ cualquier número distinto de 0 cuenta como verdadero y el 0 como falso.',
          'Error clásico: `if (x = 5)` asigna 5 a `x` (en vez de comparar) y siempre es verdadero. Para comparar se usa `==`. Compila con `-Wall` y el compilador te avisará.',
          'Desde C++17 puedes declarar una variable dentro del `if`: `if (auto pos = s.find(\'@\'); pos != std::string::npos)`. Así solo existe donde se usa.' ] },
        { h: 'switch', p: [
          '`switch` compara un entero, `char` o `enum` con varios `case`. No funciona con `std::string`.',
          'Cada `case` debe acabar en `break`; si no, la ejecución "cae" en el siguiente caso. A veces se hace a propósito para agrupar casos.',
          '`default` se ejecuta cuando ningún caso coincide.' ],
          code: `char opcion = 'b';\nswitch (opcion) {\n    case 'a':\n        std::cout << "Nueva partida";\n        break;\n    case 'b':\n    case 'c':                   // b y c hacen lo mismo\n        std::cout << "Cargar partida";\n        break;\n    default:\n        std::cout << "Opción no válida";\n}` },
        { h: 'El operador ternario', p: [
          '`std::string` es el tipo de C++ para guardar texto; lo verás a fondo en el día 6.',
          '`condición ? valor_si : valor_no` elige un valor dentro de una expresión. Es ideal para casos cortos.',
          'Se pueden anidar, pero más de dos niveles cuesta de leer; en ese caso vuelve al `if`.' ],
          code: `int edad = 16;\nstd::string tipo = edad >= 18 ? "adulto" : "menor";\nstd::cout << tipo;  // menor` },
        { h: 'Ejemplo real: tarifa de envío', real: true, p: [
          'Una tienda cobra el envío por tramos de peso y añade un 50 % si es urgente. Los `else if` comprueban los tramos en orden y el ternario aplica el recargo.' ],
          code: `#include <iostream>\n\ndouble tarifa_envio(double kg, bool urgente) {\n    double precio;\n    if (kg <= 1) precio = 4.5;\n    else if (kg <= 5) precio = 7.9;\n    else precio = 7.9 + (kg - 5) * 1.2;   // 1,20 € por kilo extra\n    return urgente ? precio * 1.5 : precio;\n}\n\nint main() {\n    std::cout << tarifa_envio(3, false) << "\\n";  // 7.9\n    std::cout << tarifa_envio(8, true) << "\\n";   // 17.25\n}` },
      ],
      x: [
        out(`int x = 4;\nif (x % 2 == 0)\n    std::cout << "par";\nelse\n    std::cout << "impar";`, ['par', 'impar', 'parimpar', '0'], '4 entre 2 da resto 0, así que se cumple la condición.'),
        fill(`if (x > 0) {\n    std::cout << "positivo";\n} ___ if (x < 0) {\n    std::cout << "negativo";\n}`, ['else', 'elif', 'elseif', 'or'], 'C++ encadena condiciones con `else if`, en dos palabras.'),
        out(`int pendientes = 0;\nif (!pendientes) std::cout << "al día";`, ['al día', '0', 'Nada', 'Error'], '0 equivale a `false`, y `!false` es `true`.'),
        mc('¿Qué tipo de valores admite un `switch` en C++?', ['Enteros, char y enums', 'Strings', 'Doubles', 'Cualquier objeto'], 'Para comparar `std::string` usa una cadena de `if`/`else if`.'),
        out(`int x = 0;\nif (x = 5) std::cout << "si";\nelse std::cout << "no";`, ['si', 'no', 'Error de compilación'], '`x = 5` asigna (no compara) y el resultado, 5, cuenta como verdadero.'),
        out(`int d = 2;\nswitch (d) {\n    case 1: std::cout << "L";\n    case 2: std::cout << "M";\n    case 3: std::cout << "X"; break;\n    default: std::cout << "?";\n}`, ['MX', 'M', 'MX?', 'LMX'], 'Entra en `case 2` y, como no hay `break`, sigue hasta el `break` de `case 3`.'),
        out(`int nota = 7;\nstd::cout << (nota >= 9 ? "A" : nota >= 7 ? "B" : "C");`, ['B', 'A', 'C', 'AB'], 'La primera condición falla, así que se evalúa el segundo ternario: 7 >= 7 es verdadero.'),
        // Reto final
        out(`int n = 30;\nstd::string r;\nif (n % 3 == 0) r += "Fizz";\nif (n % 5 == 0) r += "Buzz";\nif (r.empty()) r = std::to_string(n);\nswitch (n % 4) {\n    case 2: r += "!";\n    case 3: r += "?"; break;\n    default: r += ".";\n}\nstd::cout << r;`, ['FizzBuzz!?', 'FizzBuzz!', 'Fizz!?', 'FizzBuzz.'], '30 es múltiplo de 3 y de 5, así que se ejecutan los dos `if`. 30 % 4 = 2: se añade "!" y, sin `break`, también "?".'),
      ],
    },
    // ───────────────────────── Día 5
    {
      id: 'cpp-loops',
      t: 'Bucles',
      d: 'for, while, do-while, range-for, break y continue.',
      guide: [
        { h: 'El bucle for', p: [
          '`for (inicio; condición; paso)` es ideal cuando sabes cuántas vueltas dar. La variable declarada en el inicio solo existe dentro del bucle.',
          'Error típico: usar `<=` en lugar de `<` al recorrer índices y salirte del contenedor por una posición.' ],
          code: `for (int i = 1; i <= 5; i++) {\n    std::cout << i << " ";   // 1 2 3 4 5\n}\nfor (int i = 10; i > 0; i -= 3) {\n    std::cout << i << " ";   // 10 7 4 1\n}` },
        { h: 'while y do-while', p: [
          '`while (condición)` repite mientras la condición sea verdadera. Úsalo cuando no sabes de antemano cuántas vueltas habrá.',
          '`do { ... } while (condición);` comprueba al final, así que el bloque se ejecuta al menos una vez. Va muy bien para menús y para pedir datos hasta que sean válidos.' ],
          code: `int nota;\ndo {\n    std::cout << "Nota (0-10): ";\n    std::cin >> nota;\n} while (nota < 0 || nota > 10);   // repite hasta que sea válida` },
        { h: 'El range-for', p: [
          'En los ejemplos aparecen `std::string` (texto) y `std::vector` (una lista de valores). De momento basta con saber que el range-for los recorre elemento a elemento; los verás a fondo en los días 6 y 8.',
          '`for (tipo x : contenedor)` recorre todos los elementos de un vector, array, set, map o string sin índices.',
          'Recuerda: `for (auto x : v)` trabaja con copias; `for (auto& x : v)` modifica los originales y `for (const auto& x : v)` lee sin copiar.' ],
          code: `std::string palabra = "hola";\nint vocales = 0;\nfor (char c : palabra)\n    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') vocales++;\nstd::cout << vocales;  // 2` },
        { h: 'break, continue y bucles anidados', p: [
          '`break` sale del bucle inmediatamente y `continue` salta al siguiente paso.',
          'Con bucles anidados, `break` solo sale del bucle más interno. Si necesitas salir de todos, mueve el código a una función y usa `return`.' ],
          code: `for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) continue;   // salta los pares\n    if (i > 7) break;           // para en el 9\n    std::cout << i << " ";       // 1 3 5 7\n}` },
        { h: 'Ejemplo real: ¿cuánto tarda en crecer tu ahorro?', real: true, p: [
          'Ingresas 1.000 € en una cuenta al 5 % anual y quieres saber cuántos años tardarás en llegar a 1.500 €. No sabes cuántas vueltas habrá, así que `while` es la herramienta adecuada.' ],
          code: `#include <iostream>\n\nint main() {\n    double saldo = 1000;\n    int anios = 0;\n    while (saldo < 1500) {\n        saldo *= 1.05;   // intereses del año\n        anios++;\n    }\n    std::cout << "Años: " << anios << ", saldo: " << saldo << "\\n";\n    // Años: 9, saldo: 1551.33\n}` },
      ],
      x: [
        out(`for (int i = 0; i < 4; i += 2)\n    std::cout << i;`, ['02', '0123', '024', '24'], '`i` vale 0 y luego 2; al llegar a 4 la condición falla.'),
        typ('Completa la condición para que imprima 1 2 3 4 5', `for (int i = 1; i ___ 5; i++)\n    std::cout << i << " ";`, '<=', 'Con `<=` el bucle incluye el 5; con `<` pararía en el 4.'),
        fill(`std::vector<int> v = {1, 2, 3};\nfor (int x ___ v) std::cout << x;`, [':', 'in', 'of', '->'], 'El range-for usa dos puntos: `for (tipo x : contenedor)`.'),
        out(`int n = 0;\ndo {\n    n++;\n} while (n < 0);\nstd::cout << n;`, ['1', '0', 'Bucle infinito', '-1'], '`do-while` ejecuta el bloque una vez antes de comprobar la condición.'),
        mc('Con dos bucles anidados, ¿de dónde sale un `break` escrito en el interno?', ['Solo del bucle interno', 'De los dos bucles', 'Del bucle externo', 'De la función entera'], '`break` solo sale del bucle más cercano. Para salir de todos, mueve el código a una función y usa `return`.'),
        out(`for (int i = 0; i < 5; i++) {\n    if (i % 2 == 0) continue;\n    std::cout << i;\n}`, ['13', '024', '01234', '1'], '`continue` salta los pares, así que solo se imprimen 1 y 3.'),
        out(`int c = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = i; j < 3; j++) c++;\nstd::cout << c;`, ['6', '9', '3', '5'], 'El bucle interno da 3, 2 y 1 vueltas: 3 + 2 + 1 = 6.'),
        // Reto final
        out(`int n = 1234, suma = 0, digitos = 0;\nwhile (n > 0) {\n    suma += n % 10;\n    n /= 10;\n    digitos++;\n}\nstd::cout << suma << " " << digitos;`, ['10 4', '4 10', '10 3', '1234 4'], '`n % 10` extrae la última cifra y `n /= 10` la quita. Se suman 4 + 3 + 2 + 1 = 10 en 4 vueltas.'),
      ],
    },
    // ───────────────────────── Día 6
    {
      id: 'cpp-strings',
      t: 'Strings',
      d: 'std::string: concatenar, size, substr, find y conversiones.',
      guide: [
        { h: 'std::string', p: [
          '`std::string` (cabecera `<string>`) guarda texto y gestiona su memoria solo: puede crecer y encogerse sin que tú hagas nada.',
          'Se concatena con `+` y `+=`, y se compara con `==`, `<` y `>` (orden alfabético).',
          'Los textos entre comillas como `"Hola"` son literales de C, no `std::string`. Por eso `"Hola" + " mundo"` no compila; `std::string("Hola") + " mundo"` sí.' ],
          code: `#include <string>\n\nstd::string nombre = "Ada";\nstd::string saludo = "Hola, " + nombre;  // string + literal: correcto\nsaludo += "!";\nstd::cout << saludo << "\\n";              // Hola, Ada!\nstd::cout << (nombre == "Ada");          // 1` },
        { h: 'Métodos más usados', p: [
          '`size()` (o `length()`) cuenta caracteres, `empty()` dice si está vacío y `s[i]` accede al carácter `i` empezando en 0.',
          '`substr(pos, n)` devuelve `n` caracteres desde `pos`; sin `n` llega hasta el final. `find(texto)` devuelve la posición de la primera aparición o `std::string::npos` si no está.',
          'Al contrario que en Python o Java, un `std::string` se puede modificar: `s[0] = \'X\';`.' ],
          code: `std::string s = "programar";\nstd::cout << s.size() << "\\n";        // 9\nstd::cout << s.substr(3, 4) << "\\n";  // gram\nstd::cout << s.find("ar") << "\\n";    // 7\nif (s.find("z") == std::string::npos)\n    std::cout << "no hay z\\n";\ns[0] = 'P';\nstd::cout << s;                       // Programar` },
        { h: 'Convertir entre números y texto', p: [
          '`std::to_string(42)` convierte un número en texto. `std::stoi("42")` convierte texto en `int` y `std::stod("3.5")` en `double`.',
          'Si el texto no es un número, `stoi` lanza una excepción `std::invalid_argument`. Lo verás en el día 23.' ],
          code: `std::string edad = "29";\nint n = std::stoi(edad) + 1;\nstd::string msg = "Cumplirás " + std::to_string(n);\nstd::cout << msg << "\\n";                 // Cumplirás 30\nstd::cout << std::stod("2.5") * 2;       // 5` },
        { h: 'Leer líneas completas', p: [
          '`std::cin >> s` lee solo hasta el primer espacio. Para leer una frase entera usa `std::getline(std::cin, s)`.',
          'Si mezclas `cin >>` y `getline`, el salto de línea pendiente hace que `getline` lea una línea vacía. Llama antes a `std::cin.ignore()`.' ],
          code: `std::string ciudad;\nstd::cout << "¿Dónde vives? ";\nstd::getline(std::cin, ciudad);   // admite "San Sebastián"\nstd::cout << "Vives en " << ciudad;` },
        { h: 'Ejemplo real: separar un email', real: true, p: [
          'Un formulario de registro guarda el usuario y el dominio de un email por separado. Con `find` localizas la arroba y con `substr` cortas las dos partes.' ],
          code: `#include <iostream>\n#include <string>\n\nint main() {\n    std::string email = "lucia.martin@empresa.com";\n    auto arroba = email.find('@');\n    if (arroba == std::string::npos) {\n        std::cout << "Email no válido\\n";\n        return 1;\n    }\n    std::cout << "Usuario: " << email.substr(0, arroba) << "\\n";   // lucia.martin\n    std::cout << "Dominio: " << email.substr(arroba + 1) << "\\n";  // empresa.com\n}` },
      ],
      x: [
        out(`std::string s = "C++";\nstd::cout << s.size();`, ['3', '2', '4', 'Error'], '`size()` cuenta los caracteres: C, + y +.'),
        out(`std::string a = "Hola", b = "Mundo";\nstd::cout << a + " " + b;`, ['Hola Mundo', 'HolaMundo', 'Hola + Mundo', 'Error'], '`+` concatena strings, y el espacio va entre ellos.'),
        fill(`int n = std::___("123");`, ['stoi', 'to_int', 'parseInt', 'toInt'], '`stoi` viene de "string to int".'),
        out(`std::string s = "programar";\nstd::cout << s.substr(3, 4);`, ['gram', 'gra', 'rogr', 'grama'], '`substr(pos, n)` toma 4 caracteres desde la posición 3 (la primera g).'),
        out(`std::string s = "banana";\nstd::cout << s.find("na");`, ['2', '4', '1', '3'], '`find` devuelve la posición de la primera aparición: b(0) a(1) n(2).'),
        mc('¿Qué ocurre con `std::string s = "Hola" + " mundo";`?', ['No compila: son dos literales de C, no std::string', 'Guarda "Hola mundo"', 'Guarda solo "Hola"', 'Lanza una excepción al ejecutar'], 'Al menos uno de los operandos de `+` debe ser un `std::string`.'),
        out(`std::string s = "ana";\ns += std::to_string(7 * 3);\nstd::cout << s << s.size();`, ['ana215', 'ana213', 'ana7*35', 'ana2121'], '`to_string(21)` añade "21" y el texto "ana21" tiene 5 caracteres.'),
        // Reto final
        out(`std::string email = "ana.diaz@correo.es";\nauto pos = email.find('@');\nstd::string user = email.substr(0, pos);\nuser[0] = 'A';\nstd::cout << user << " " << email.size() - pos - 1;`, ['Ana.diaz 9', 'ana.diaz 9', 'Ana.diaz 10', 'Ana.diaz@ 9'], 'La @ está en la posición 8: el usuario son los 8 primeros caracteres y se modifica su inicial. El email mide 18, así que el dominio tiene 18 - 8 - 1 = 9.'),
      ],
    },
    // ───────────────────────── Día 7
    {
      id: 'cpp-arrays',
      t: 'Arrays',
      d: 'Arrays clásicos, std::array, límites y matrices.',
      guide: [
        { h: 'Arrays de tamaño fijo', p: [
          'Un array guarda varios valores del mismo tipo seguidos en memoria: `int notas[3] = {7, 9, 5};`. Su tamaño se fija al compilar y no puede cambiar.',
          'Los índices van de 0 a n-1. Si das menos valores que el tamaño, el resto se rellena con ceros: `int a[5] = {1, 2};` es `{1, 2, 0, 0, 0}`.' ],
          code: `int notas[3] = {7, 9, 5};\nnotas[1] = 10;\nstd::cout << notas[0] + notas[1] << "\\n";  // 17\nint ceros[4] = {};                          // {0, 0, 0, 0}` },
        { h: 'C++ no comprueba los límites', p: [
          'Leer o escribir `notas[3]` en un array de 3 elementos es comportamiento indefinido: el programa puede dar valores basura, colgarse o parecer que funciona.',
          'Es una de las fuentes de fallos de seguridad más conocidas. Por eso, en C++ moderno se prefiere `std::array` o `std::vector`, que ofrecen `at()` con comprobación.' ] },
        { h: 'std::array', p: [
          '`std::array<int, 3>` (cabecera `<array>`) es un array de tamaño fijo con ventajas: conoce su tamaño con `size()`, se puede copiar con `=` y `at(i)` lanza una excepción si el índice no existe.',
          'Con el range-for `for (int x : arr)` lo recorres sin preocuparte de los índices.' ],
          code: `#include <array>\n\nstd::array<int, 4> v = {3, 1, 4, 1};\nfor (int x : v) std::cout << x << " ";  // 3 1 4 1\nstd::cout << "\\n" << v.size();          // 4\n// v.at(10);  // lanza std::out_of_range` },
        { h: 'Matrices', p: [
          'Un array de arrays forma una tabla: `int m[2][3]` tiene 2 filas y 3 columnas. `m[fila][columna]` accede a una celda.',
          'Para recorrerla se anidan dos bucles: el exterior recorre filas y el interior columnas.' ],
          code: `int m[2][3] = {{1, 2, 3},\n               {4, 5, 6}};\nstd::cout << m[1][2] << "\\n";  // 6\nint suma = 0;\nfor (auto& fila : m)\n    for (int x : fila) suma += x;\nstd::cout << suma;             // 21` },
        { h: 'Ejemplo real: temperaturas de la semana', real: true, p: [
          'Una app del tiempo guarda las máximas de los 7 días y muestra la media y el día más caluroso. Como la semana siempre tiene 7 días, `std::array` es ideal.' ],
          code: `#include <array>\n#include <iostream>\n\nint main() {\n    std::array<double, 7> temps = {18.5, 21.0, 19.5, 23.0, 25.5, 24.0, 20.5};\n    double suma = 0, maxima = temps[0];\n    for (double t : temps) {\n        suma += t;\n        if (t > maxima) maxima = t;\n    }\n    std::cout << "Media: " << suma / temps.size() << "\\n";  // Media: 21.7143\n    std::cout << "Máxima: " << maxima << "\\n";             // Máxima: 25.5\n}` },
      ],
      x: [
        out(`int a[4] = {5, 6, 7, 8};\nstd::cout << a[2];`, ['7', '6', '8', 'Error'], 'Los índices empiezan en 0: el índice 2 es el tercer elemento.'),
        out(`int a[5] = {1, 2};\nstd::cout << a[3];`, ['0', '2', 'Basura', 'Error'], 'Los elementos que faltan en la inicialización se rellenan con ceros.'),
        out(`int a[] = {3, 1, 2};\nint s = 0;\nfor (int x : a) s += x;\nstd::cout << s;`, ['6', '3', '312', 'Error'], 'El range-for suma 3 + 1 + 2.'),
        mc('¿Qué ocurre al leer `a[10]` en un array clásico de 5 elementos?', ['Comportamiento indefinido: C++ no comprueba los límites', 'Lanza una excepción', 'Devuelve 0', 'No compila'], 'Con `std::array` o `std::vector` puedes usar `at()`, que sí comprueba.'),
        fill(`std::array<int, 3> a = {1, 2, 3};\nstd::cout << a.___();  // 3`, ['size', 'length', 'count', 'len'], '`size()` devuelve el número de elementos de cualquier contenedor estándar.'),
        out(`int m[2][2] = {{1, 2}, {3, 4}};\nstd::cout << m[1][0];`, ['3', '2', '4', '1'], 'Fila 1 (la segunda) y columna 0 (la primera): el 3.'),
        out(`int a[] = {4, 8, 15, 16};\nstd::cout << sizeof(a) / sizeof(a[0]);`, ['4', '16', '1', '8'], '`sizeof(a)` son los bytes de todo el array y `sizeof(a[0])` los de un elemento: el cociente es el número de elementos.'),
        // Reto final
        out(`std::array<int, 5> v = {3, 8, 1, 9, 4};\nint mx = v[0], pos = 0;\nfor (int i = 1; i < 5; i++)\n    if (v[i] > mx) { mx = v[i]; pos = i; }\nstd::cout << mx << " en " << pos;`, ['9 en 3', '9 en 4', '8 en 1', '9 en 2'], 'El bucle guarda el mayor valor visto y su índice. El 9 está en el índice 3 porque se cuenta desde 0.'),
      ],
    },
    // ───────────────────────── Día 8
    {
      id: 'cpp-vectors',
      t: 'Vectores',
      d: 'std::vector: push_back, pop_back, insert, erase, at y recorridos.',
      guide: [
        { h: 'Un array que crece', p: [
          '`std::vector` (cabecera `<vector>`) es el contenedor más usado de C++: un array dinámico que crece cuando añades elementos y libera su memoria solo.',
          'Si no sabes cuántos elementos tendrás, usa `std::vector`. Es la opción por defecto para listas de datos.' ],
          code: `#include <vector>\n\nstd::vector<int> v;          // vacío\nstd::vector<int> w = {4, 8};  // con valores\nstd::vector<int> z(3, 7);    // {7, 7, 7}\nv.push_back(15);\nstd::cout << v.size() << w.size() << z.size();  // 123` },
        { h: 'Añadir y quitar', p: [
          '`push_back(x)` añade al final y `pop_back()` quita el último. `front()` y `back()` dan el primero y el último.',
          '`insert(v.begin() + i, x)` inserta en la posición `i` y `erase(v.begin() + i)` la borra. Ambos desplazan el resto de elementos, así que en vectores enormes son más lentos.',
          '`clear()` vacía el vector y `empty()` dice si está vacío.' ],
          code: `std::vector<int> v = {10, 20, 30};\nv.push_back(40);            // 10 20 30 40\nv.insert(v.begin(), 5);     // 5 10 20 30 40\nv.erase(v.begin() + 2);     // 5 10 30 40\nv.pop_back();               // 5 10 30\nstd::cout << v.front() << " " << v.back();  // 5 30` },
        { h: '[] frente a at()', p: [
          '`v[i]` es rápido pero no comprueba nada: un índice fuera de rango es comportamiento indefinido.',
          '`v.at(i)` comprueba el índice y lanza `std::out_of_range` si no existe. Úsalo cuando el índice venga de fuera (del usuario, de un archivo...).' ] },
        { h: 'Recorrer un vector', p: [
          '`for (int x : v)` recorre copias de los elementos. Para modificarlos usa una referencia: `for (int& x : v)`.',
          'Con objetos grandes (como `std::string`) usa `for (const auto& x : v)`: no copia y deja claro que solo lees.' ],
          code: `std::vector<int> precios = {10, 20, 30};\nfor (int& p : precios) p = p * 2;     // modifica el original\nfor (const auto& p : precios)\n    std::cout << p << " ";              // 20 40 60` },
        { h: 'Ejemplo real: el carrito de la compra', real: true, p: [
          'Una tienda online guarda los precios del carrito en un vector: el cliente añade productos con `push_back` y el total se calcula recorriendo el vector.' ],
          code: `#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<double> carrito = {12.99, 4.50, 7.25};\n    carrito.push_back(3.10);   // añade otro producto\n    double total = 0;\n    for (double precio : carrito) total += precio;\n    std::cout << carrito.size() << " artículos, total " << total << " euros\\n";\n    // 4 artículos, total 27.84 euros\n}` },
      ],
      x: [
        out(`std::vector<int> v = {1, 2, 3};\nv.push_back(4);\nstd::cout << v.size();`, ['4', '3', '5', 'Error'], '`push_back` añade un elemento al final.'),
        fill(`std::vector<std::string> nombres;\nnombres.___("Ana");`, ['push_back', 'add', 'append', 'push'], 'En C++ se añade al final de un vector con `push_back`.'),
        out(`std::vector<int> v = {2, 4, 6};\nint s = 0;\nfor (int n : v) s += n;\nstd::cout << s;`, ['12', '246', '6', '3'], 'El range-for recorre cada elemento: 2 + 4 + 6 = 12.'),
        out(`std::vector<int> v = {1, 2, 3};\nv.pop_back();\nstd::cout << v.back();`, ['2', '3', '1', 'Error'], '`pop_back` quita el 3 y `back` devuelve el nuevo último.'),
        out(`std::vector<int> v(3, 7);\nstd::cout << v[0] + v[2];`, ['14', '7', '10', '21'], '`v(3, 7)` crea 3 elementos con valor 7, así que 7 + 7 = 14.'),
        mc('¿Qué diferencia hay entre `v[i]` y `v.at(i)`?', ['at() comprueba el índice y lanza una excepción si no existe', 'Ninguna', '[] es más seguro', 'at() devuelve una copia'], '`[]` no comprueba nada y es algo más rápido; `at()` lanza `std::out_of_range`.'),
        out(`std::vector<int> v = {10, 20, 30, 40};\nv.erase(v.begin() + 1);\nstd::cout << v[1] << " " << v.size();`, ['30 3', '20 3', '30 4', '40 3'], '`erase` borra el índice 1 (el 20) y los siguientes se desplazan: queda {10, 30, 40}.'),
        // Reto final
        out(`std::vector<int> v = {5, 3, 8};\nfor (auto& x : v) x *= 2;\nv.insert(v.begin(), 1);\nv.pop_back();\nstd::cout << v.front() + v.back() << " " << v.size();`, ['7 3', '17 3', '1 3', '7 4'], 'Con `auto&` se duplican los originales: {10, 6, 16}. Tras insertar el 1 y quitar el último queda {1, 10, 6}: 1 + 6 = 7 y tamaño 3.'),
      ],
    },
    // ───────────────────────── Día 9
    {
      id: 'cpp-sets',
      t: 'Sets',
      d: 'std::set y std::unordered_set: elementos únicos.',
      guide: [
        { h: 'Elementos únicos y ordenados', p: [
          '`std::set` (cabecera `<set>`) guarda cada valor una sola vez y los mantiene ordenados de menor a mayor. Si insertas un repetido, simplemente se ignora.',
          'Es perfecto para preguntas del tipo "¿ya he visto esto?" o "¿cuántos valores distintos hay?".' ],
          code: `#include <set>\n\nstd::set<int> s = {5, 1, 5, 3};\ns.insert(2);\ns.insert(3);               // repetido: no hace nada\nfor (int x : s) std::cout << x << " ";  // 1 2 3 5\nstd::cout << "\\n" << s.size();          // 4` },
        { h: 'Buscar y borrar', p: [
          '`count(x)` devuelve 1 si `x` está y 0 si no. En C++20 tienes `contains(x)`, que devuelve un `bool` y se lee mejor.',
          '`erase(x)` elimina el valor. `insert` devuelve un par cuyo `.second` es `true` si el elemento era nuevo.',
          'Buscar en un `std::set` es muy rápido (logarítmico), mucho más que buscar en un vector grande elemento a elemento.' ],
          code: `std::set<std::string> etiquetas = {"c++", "stl"};\nstd::cout << etiquetas.count("stl") << "\\n";    // 1\nstd::cout << etiquetas.contains("go") << "\\n";  // 0 (C++20)\nauto r = etiquetas.insert("c++");\nstd::cout << r.second << "\\n";                  // 0: ya existía\netiquetas.erase("stl");` },
        { h: 'std::unordered_set', p: [
          '`std::unordered_set` (cabecera `<unordered_set>`) hace lo mismo pero usa una tabla hash: buscar e insertar es aún más rápido de media, a cambio de no mantener ningún orden.',
          'Regla práctica: si necesitas recorrer los valores ordenados, usa `std::set`; si solo preguntas si algo existe, `std::unordered_set`.' ] },
        { h: 'Crear un set desde un vector', p: [
          'Puedes construir un set a partir de cualquier rango: `std::set<int> s(v.begin(), v.end());`. Es la forma más sencilla de quitar duplicados.',
          'También puedes añadir un rango entero a un set existente con `s.insert(otro.begin(), otro.end())`.' ],
          code: `std::vector<int> v = {3, 1, 3, 2, 1};\nstd::set<int> unicos(v.begin(), v.end());\nstd::cout << unicos.size();  // 3` },
        { h: 'Ejemplo real: visitantes únicos de una web', real: true, p: [
          'El registro de una web anota el usuario en cada visita. Para el informe diario interesa cuántas personas distintas entraron, no cuántas visitas hubo.' ],
          code: `#include <iostream>\n#include <set>\n#include <string>\n#include <vector>\n\nint main() {\n    std::vector<std::string> visitas = {"ana", "luis", "ana", "marta", "luis", "ana"};\n    std::set<std::string> unicos(visitas.begin(), visitas.end());\n    std::cout << visitas.size() << " visitas, " << unicos.size() << " visitantes\\n";\n    // 6 visitas, 3 visitantes\n    for (const auto& u : unicos) std::cout << u << " ";  // ana luis marta\n}` },
      ],
      x: [
        out(`std::set<int> s = {3, 1, 3, 2};\nstd::cout << s.size();`, ['3', '4', '2', 'Error'], 'El 3 repetido se ignora: quedan 1, 2 y 3.'),
        fill(`std::set<int> s;\ns.___(7);`, ['insert', 'push_back', 'add', 'append'], 'Los sets no tienen "final"; se añade con `insert`.'),
        out(`std::set<int> s = {5, 1, 4};\nfor (int x : s) std::cout << x;`, ['145', '514', '541', '154'], '`std::set` mantiene los elementos ordenados de menor a mayor.'),
        out(`std::set<std::string> s = {"b", "a"};\nstd::cout << s.count("a");`, ['1', '0', '2', 'a'], '`count` devuelve 1 si el elemento existe y 0 si no.'),
        out(`std::set<int> s = {1, 2, 3};\ns.erase(2);\nstd::cout << s.size();`, ['2', '3', '1', '0'], '`erase` elimina el 2 y quedan dos elementos.'),
        mc('¿Qué contenedor guarda valores únicos sin orden y con búsqueda muy rápida?', ['std::unordered_set', 'std::set', 'std::vector', 'std::array'], 'Usa una tabla hash internamente, así que no mantiene orden.'),
        out(`std::set<int> s = {1, 2};\nauto r = s.insert(2);\nstd::cout << r.second << s.size();`, ['02', '13', '12', '03'], 'El 2 ya existía: `insert` devuelve `second == false` (0) y el tamaño sigue en 2.'),
        // Reto final
        out(`std::set<int> a = {1, 3, 5, 7};\nstd::set<int> b = {3, 4, 5};\nint comunes = 0;\nfor (int x : b) if (a.count(x)) comunes++;\na.insert(b.begin(), b.end());\nstd::cout << comunes << " " << a.size();`, ['2 5', '2 7', '3 5', '1 5'], 'Los comunes son 3 y 5. Al insertar `b` en `a` solo entra el 4: {1, 3, 4, 5, 7}, cinco elementos.'),
      ],
    },
    // ───────────────────────── Día 10
    {
      id: 'cpp-maps',
      t: 'Maps',
      d: 'std::map y std::unordered_map: pares clave-valor.',
      guide: [
        { h: 'Diccionarios en C++', p: [
          '`std::map<Clave, Valor>` (cabecera `<map>`) asocia claves únicas con valores, como una agenda que relaciona nombres con teléfonos.',
          'Las claves se mantienen ordenadas. `m[clave] = valor` añade la pareja o cambia el valor si la clave ya existía.' ],
          code: `#include <map>\n\nstd::map<std::string, int> edades;\nedades["Ana"] = 31;\nedades["Luis"] = 28;\nedades["Ana"] = 32;           // sustituye el valor\nstd::cout << edades["Ana"] << " " << edades.size();  // 32 2` },
        { h: 'La trampa de []', p: [
          'Leer con `m["clave"]` una clave que no existe la crea con un valor por defecto (0 para números, texto vacío para strings). Así se cuelan claves que nadie quería.',
          'Para leer sin crear, usa `m.at("clave")`, que lanza `std::out_of_range` si no existe, o comprueba antes con `count`, `contains` (C++20) o `find`.' ],
          code: `std::map<std::string, int> stock = {{"pan", 4}};\nif (stock.contains("leche"))           // C++20\n    std::cout << stock.at("leche");\nauto it = stock.find("pan");\nif (it != stock.end())\n    std::cout << it->first << ": " << it->second;  // pan: 4` },
        { h: 'Recorrer un map', p: [
          'Cada elemento es un par con `.first` (clave) y `.second` (valor). Desde C++17 lo puedes desempaquetar con `for (const auto& [clave, valor] : m)`.',
          'El recorrido sale ordenado por clave. `m.begin()->first` es la clave más pequeña.' ],
          code: `std::map<std::string, double> precios = {{"pera", 2.1}, {"kiwi", 3.4}, {"uva", 2.8}};\nfor (const auto& [fruta, precio] : precios)\n    std::cout << fruta << " " << precio << "\\n";\n// kiwi 3.4\n// pera 2.1\n// uva 2.8` },
        { h: 'std::unordered_map', p: [
          '`std::unordered_map` (cabecera `<unordered_map>`) tiene la misma interfaz pero usa una tabla hash: más rápido de media y sin orden.',
          'Usa `std::map` cuando quieras recorrer las claves ordenadas y `std::unordered_map` cuando solo busques por clave.' ] },
        { h: 'Ejemplo real: contar palabras de un texto', real: true, p: [
          'Un analizador de reseñas quiere saber qué palabras se repiten más. `std::istringstream` (cabecera `<sstream>`) trocea el texto por espacios, y `frecuencia[palabra]++` aprovecha que `[]` crea la clave con 0 la primera vez.' ],
          code: `#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\n\nint main() {\n    std::string texto = "el gato y el perro y el pez";\n    std::istringstream in(texto);\n    std::map<std::string, int> frecuencia;\n    std::string palabra;\n    while (in >> palabra) frecuencia[palabra]++;\n    for (const auto& [p, n] : frecuencia)\n        std::cout << p << ": " << n << "\\n";\n    // el: 3, gato: 1, perro: 1, pez: 1, y: 2 (una por línea)\n}` },
      ],
      x: [
        out(`std::map<std::string, int> m;\nm["a"] = 1;\nm["a"] = 5;\nstd::cout << m["a"];`, ['5', '1', '6', 'Error'], 'Las claves son únicas: la segunda asignación sustituye el valor.'),
        out(`std::map<int, char> m = {{2, 'b'}, {1, 'a'}};\nfor (auto& [k, v] : m) std::cout << v;`, ['ab', 'ba', '12', 'a'], '`std::map` recorre sus elementos ordenados por clave: 1 y luego 2.'),
        fill(`if (m.___("clave")) {\n    std::cout << "existe";\n}`, ['count', 'has', 'exists', 'includes'], '`count` devuelve 1 si la clave existe. En C++20 también existe `contains`.'),
        out(`std::map<std::string, int> m;\nstd::cout << m["x"] << m.size();`, ['01', '00', 'Error', 'x1'], 'Leer `m["x"]` crea la clave con valor 0, así que el tamaño pasa a 1.'),
        mc('¿Qué hace `m.at("z")` si la clave no existe?', ['Lanza std::out_of_range', 'Crea la clave con 0', 'Devuelve 0', 'No compila'], '`at` es la forma segura de leer sin crear claves.'),
        mc('Para contar palabras sin necesitar orden y con la máxima velocidad, ¿qué contenedor usarías?', ['std::unordered_map', 'std::map', 'std::vector', 'std::set'], 'Sus búsquedas son de tiempo constante de media.'),
        out(`std::map<char, int> c;\nfor (char ch : std::string("hola ola"))\n    if (ch != ' ') c[ch]++;\nstd::cout << c['o'] << c['a'] << c.size();`, ['224', '114', '225', '223'], '"o", "l" y "a" aparecen dos veces y "h" una: o=2, a=2 y hay 4 claves distintas.'),
        // Reto final
        out(`std::map<std::string, int> stock = {{"pan", 3}, {"leche", 0}};\nstock["pan"] -= 1;\nstock["huevos"] += 12;\nint total = 0;\nfor (const auto& [p, n] : stock) total += n;\nstd::cout << stock.size() << " " << total << " " << stock.begin()->first;`, ['3 14 huevos', '2 14 pan', '3 15 huevos', '3 14 pan'], '`stock["huevos"]` crea la clave con 0 y le suma 12. Total: 2 + 0 + 12 = 14. La clave menor en orden alfabético es "huevos".'),
      ],
    },
    // ───────────────────────── Día 11
    {
      id: 'cpp-functions',
      t: 'Funciones',
      d: 'Declaración, prototipos, valores por defecto, sobrecarga y recursión.',
      guide: [
        { h: 'Declarar y llamar funciones', p: [
          'Una función agrupa código con un nombre para reutilizarlo: `tipo_retorno nombre(parámetros) { ... }`.',
          '`return` devuelve el resultado y termina la función. Si no devuelve nada, el tipo de retorno es `void`.',
          'Cada parámetro lleva su tipo: `int sumar(int a, int b)`. El compilador comprueba que llames a la función con los tipos correctos.' ],
          code: `#include <iostream>\n#include <string>\n\nint cuadrado(int n) {\n    return n * n;\n}\n\nvoid saludar(std::string nombre) {\n    std::cout << "Hola, " << nombre << "\\n";\n}\n\nint main() {\n    std::cout << cuadrado(4) << "\\n";  // 16\n    saludar("Ada");                    // Hola, Ada\n}` },
        { h: 'Prototipos', p: [
          'El compilador lee el archivo de arriba abajo: una función debe estar declarada antes de usarla.',
          'Si prefieres escribir `main` primero, declara antes el prototipo: la cabecera de la función terminada en `;`. La definición completa puede ir más abajo.' ],
          code: `int cubo(int n);   // prototipo\n\nint main() {\n    std::cout << cubo(3);  // 27\n}\n\nint cubo(int n) {  // definición\n    return n * n * n;\n}` },
        { h: 'Valores por defecto y sobrecarga', p: [
          'Un parámetro puede tener un valor por defecto que se usa si no lo pasas. Los parámetros con valor por defecto van siempre al final.',
          'La sobrecarga permite varias funciones con el mismo nombre y distintos parámetros. El compilador elige la versión según los argumentos.' ],
          code: `double area(double lado) { return lado * lado; }\ndouble area(double base, double altura) { return base * altura; }\n\nvoid avisar(std::string msg, int veces = 1) {\n    for (int i = 0; i < veces; i++) std::cout << msg << "\\n";\n}\n\nstd::cout << area(3) << " " << area(2, 5) << "\\n";  // 9 10\navisar("Guardado");      // una vez\navisar("¡Error!", 2);    // dos veces` },
        { h: 'Recursión', p: [
          'Una función recursiva se llama a sí misma con un problema más pequeño. Siempre necesita un caso base que detenga las llamadas.',
          'Sin caso base, las llamadas se acumulan en la pila hasta que el programa se cuelga (stack overflow).' ],
          code: `int factorial(int n) {\n    if (n <= 1) return 1;          // caso base\n    return n * factorial(n - 1);   // caso recursivo\n}\n\nstd::cout << factorial(5);  // 120` },
        { h: 'Ejemplo real: precio final con descuento', real: true, p: [
          'Una tienda calcula el precio final de muchos productos. Con valores por defecto, la misma función sirve con o sin descuento y con el IVA general del 21 %.' ],
          code: `#include <iostream>\n\ndouble precio_final(double precio, double descuento = 0, double iva = 0.21) {\n    return precio * (1 - descuento) * (1 + iva);\n}\n\nint main() {\n    std::cout << precio_final(100) << "\\n";            // 121\n    std::cout << precio_final(100, 0.2) << "\\n";       // 96.8\n    std::cout << precio_final(100, 0, 0.10) << "\\n";   // 110\n}` },
      ],
      x: [
        out(`int doble(int x) { return x * 2; }\nstd::cout << doble(doble(3));`, ['12', '6', '9', 'Error'], '`doble(3)` vale 6 y `doble(6)` vale 12.'),
        mc('¿Qué tipo de retorno usa una función que no devuelve nada?', ['void', 'null', 'none', 'empty'], '`void` indica que la función no devuelve ningún valor.'),
        fill(`int sumar(int a, int b) {\n    ___ a + b;\n}`, ['return', 'yield', 'give', 'break'], '`return` devuelve el resultado al código que llamó a la función.'),
        out(`void f(int a, int b = 10) {\n    std::cout << a + b;\n}\nf(5);`, ['15', '5', '510', 'Error'], 'Como no se pasa `b`, toma su valor por defecto: 5 + 10 = 15.'),
        out(`void tipo(int) { std::cout << "int "; }\nvoid tipo(double) { std::cout << "double "; }\ntipo(3);\ntipo(3.0);`, ['int double ', 'int int ', 'double double ', 'Error'], 'Sobrecarga: `3` es un `int` y `3.0` un `double`, así que se llama a una versión distinta cada vez.'),
        typ('Completa el caso base del factorial', `int fact(int n) {\n    if (n <= 1) return ___;\n    return n * fact(n - 1);\n}`, '1', 'El factorial de 0 y de 1 es 1. Sin este caso base la recursión no terminaría.'),
        mc('¿Dónde deben ir los parámetros con valor por defecto?', ['Al final de la lista', 'Al principio de la lista', 'En cualquier posición', 'Solo en funciones void'], 'Si un parámetro tiene valor por defecto, todos los que van detrás también deben tenerlo.'),
        // Reto final
        out(`int f(int n) {\n    if (n == 0) return 0;\n    return n % 10 + f(n / 10);\n}\nint g(int a, int b = 2) { return a * b; }\n\nstd::cout << f(492) << " " << g(f(31));`, ['15 8', '15 4', '492 8', '15 6'], '`f` suma las cifras de forma recursiva: 4 + 9 + 2 = 15 y 3 + 1 = 4. Después `g(4)` usa `b = 2`: 8.'),
      ],
    },
    // ───────────────────────── Día 12
    {
      id: 'cpp-headers',
      t: 'Cabeceras y namespaces',
      d: 'Archivos .h y .cpp, #include, #pragma once y namespace.',
      guide: [
        { h: 'Separar el código en archivos', p: [
          'En proyectos reales el código se reparte en varios archivos. El archivo de cabecera (`.h` o `.hpp`) declara qué existe y el `.cpp` contiene la implementación.',
          'Otros archivos incluyen la cabecera para usar esas funciones. Se compilan todos los `.cpp` juntos: `g++ main.cpp matematicas.cpp -o app`.' ],
          code: `// matematicas.h\n#pragma once\nint sumar(int a, int b);\ndouble media(int a, int b);\n\n// matematicas.cpp\n#include "matematicas.h"\nint sumar(int a, int b) { return a + b; }\ndouble media(int a, int b) { return (a + b) / 2.0; }\n\n// main.cpp\n#include <iostream>\n#include "matematicas.h"\nint main() {\n    std::cout << sumar(2, 3) << " " << media(2, 3);  // 5 2.5\n}` },
        { h: '#include y #pragma once', p: [
          '`#include` copia literalmente el contenido del archivo en ese punto. Con `< >` se buscan las cabeceras del sistema y de la biblioteca estándar; con `" "` se busca primero en tu proyecto.',
          'Si una cabecera se incluye dos veces, sus definiciones se repiten y aparecen errores. `#pragma once` lo evita. La forma clásica equivalente son las guardas con `#ifndef`.' ],
          code: `// forma clásica: guardas de inclusión\n#ifndef MATEMATICAS_H\n#define MATEMATICAS_H\n\nint sumar(int a, int b);\n\n#endif` },
        { h: 'namespace', p: [
          'Un `namespace` agrupa nombres para que no choquen con los de otras librerías. Por eso la biblioteca estándar vive dentro de `std`.',
          'Desde fuera se accede con el operador `::`: `geometria::area_circulo(2)`. Los namespaces se pueden anidar.' ],
          code: `namespace geometria {\n    const double PI = 3.14159;\n    double area_circulo(double r) { return PI * r * r; }\n}\n\nstd::cout << geometria::area_circulo(2);  // 12.5664` },
        { h: 'using y alias', p: [
          '`using std::cout;` trae un solo nombre. `using namespace std;` los trae todos: cómodo en ejercicios pequeños, pero puede provocar choques de nombres.',
          'Nunca escribas `using namespace` en un archivo `.h`: se impondría a todos los archivos que lo incluyan.',
          'Para nombres largos puedes crear un alias: `namespace fs = std::filesystem;`.' ],
          code: `#include <filesystem>\nnamespace fs = std::filesystem;\nusing std::cout;\n\ncout << fs::current_path();  // la carpeta actual` },
        { h: 'Ejemplo real: utilidades de una tienda', real: true, p: [
          'El equipo de una tienda online reúne sus cálculos en un namespace propio, con la cabecera separada de la implementación. Así cualquier parte del programa puede usarlos sin chocar con otras librerías.' ],
          code: `// tienda.h\n#pragma once\nnamespace tienda {\n    double con_iva(double precio);\n    bool envio_gratis(double total);\n}\n\n// tienda.cpp\n#include "tienda.h"\nnamespace tienda {\n    double con_iva(double precio) { return precio * 1.21; }\n    bool envio_gratis(double total) { return total >= 50; }\n}\n\n// main.cpp\n#include <iostream>\n#include "tienda.h"\nint main() {\n    double total = tienda::con_iva(45);\n    std::cout << total << " " << tienda::envio_gratis(total);  // 54.45 1\n}` },
      ],
      x: [
        mc('¿Qué suele contener un archivo `.h`?', ['Declaraciones de funciones y clases', 'La función main', 'El programa ya compilado', 'Solo comentarios'], 'La cabecera dice qué existe; el `.cpp` contiene cómo funciona.'),
        fill(`// utilidades.h\n#___ once\nint maximo(int a, int b);`, ['pragma', 'define', 'include', 'ifndef'], '`#pragma once` evita que la cabecera se incluya dos veces en el mismo archivo.'),
        out(`namespace a { int x = 1; }\nnamespace b { int x = 2; }\nstd::cout << a::x + b::x;`, ['3', '12', '2', 'Error'], 'Cada `x` vive en su namespace, así que no chocan: 1 + 2 = 3.'),
        mc('¿Qué diferencia hay entre `#include <vector>` y `#include "util.h"`?', ['Con < > se buscan cabeceras del sistema; con " " se busca primero en tu proyecto', 'Ninguna', 'Con " " solo se incluyen cabeceras de la STL', 'Con < > el archivo se incluye dos veces'], 'Usa comillas para tus propias cabeceras y `< >` para las de la biblioteca estándar.'),
        typ('Escribe el operador que accede a un nombre de un namespace', `std___cout << "Hola";`, '::', '`::` es el operador de ámbito: `std::cout` es el `cout` del namespace `std`.'),
        mc('¿Por qué no conviene escribir `using namespace std;` en un archivo `.h`?', ['Se impone a todos los archivos que lo incluyen y puede causar choques de nombres', 'Hace el programa más lento', 'No compila dentro de un .h', 'Borra los namespaces propios'], 'Quien incluya tu cabecera recibiría todos los nombres de `std` sin haberlo pedido.'),
        ord('Ordena el comando que compila dos archivos en un ejecutable llamado app', ['g++', 'main.cpp', 'util.cpp', '-o', 'app'], ['#include', 'util.h'], 'Se pasan todos los `.cpp` al compilador; las cabeceras no, porque ya las incluyen los `.cpp`.'),
        // Reto final
        out(`namespace app {\n    int v = 2;\n    namespace beta {\n        int v = 3;\n        int doble() { return v * 2; }\n    }\n    int suma() { return v + beta::v; }\n}\nint v = 1;\n\nstd::cout << v << app::suma() << app::beta::doble() << ::v;`, ['1561', '2561', '1531', '1562'], 'Fuera de los namespaces, `v` es la global (1). Dentro de `app`, `v` es 2 y `beta::v` es 3, así que `suma()` da 5. Dentro de `beta`, `v` es 3 y `doble()` da 6. `::v` es la global: 1.'),
      ],
    },
    // ───────────────────────── Día 13
    {
      id: 'cpp-references',
      t: 'Referencias',
      d: 'Paso por valor, referencias, paso por referencia y const&.',
      guide: [
        { h: 'Paso por valor', p: [
          'Por defecto, C++ pasa a las funciones una copia de cada argumento. Si la función cambia el parámetro, el original no se entera.',
          'Copiar un `int` es barato, pero copiar un vector con un millón de elementos no lo es.' ],
          code: `void incrementar(int n) {\n    n++;               // cambia la copia\n}\n\nint x = 5;\nincrementar(x);\nstd::cout << x;        // 5` },
        { h: 'Referencias', p: [
          'Una referencia es otro nombre para una variable que ya existe: `int& r = x;`. Todo lo que hagas con `r` le pasa a `x`.',
          'Una referencia se inicializa al crearla y ya no puede pasar a referirse a otra variable.',
          'Nunca devuelvas una referencia a una variable local de una función: la variable desaparece al salir y la referencia queda colgando.' ],
          code: `int x = 10;\nint& r = x;    // r es un alias de x\nr = 25;\nstd::cout << x << "\\n";  // 25\nx++;\nstd::cout << r;           // 26` },
        { h: 'Paso por referencia', p: [
          'Si el parámetro es una referencia (`int& n`), la función trabaja directamente con la variable original.',
          'Así una función puede modificar varios valores del código que la llama, como en este intercambio.' ],
          code: `void intercambiar(int& a, int& b) {\n    int tmp = a;\n    a = b;\n    b = tmp;\n}\n\nint x = 1, y = 2;\nintercambiar(x, y);\nstd::cout << x << y;  // 21` },
        { h: 'const&: leer sin copiar', p: [
          '`const T&` pasa el original sin copiarlo y, gracias a `const`, la función no puede modificarlo.',
          'Regla práctica: tipos pequeños (`int`, `double`, `char`) por valor; objetos grandes que solo se leen (`std::string`, `std::vector`) por `const&`; y lo que la función debe modificar, por `&`.' ],
          code: `double media(const std::vector<double>& notas) {\n    double suma = 0;\n    for (double n : notas) suma += n;\n    // notas.push_back(10);  // error: es const\n    return suma / notas.size();\n}` },
        { h: 'Ejemplo real: descuentos en el carrito', real: true, p: [
          'Una tienda aplica un descuento a todo el carrito y después calcula el total. La primera función modifica el vector (`&`); la segunda solo lo lee (`const&`).' ],
          code: `#include <iostream>\n#include <vector>\n\nvoid aplicar_descuento(std::vector<double>& precios, double pct) {\n    for (double& p : precios) p *= 1 - pct;\n}\n\ndouble total(const std::vector<double>& precios) {\n    double t = 0;\n    for (double p : precios) t += p;\n    return t;\n}\n\nint main() {\n    std::vector<double> carrito = {20, 50, 30};\n    aplicar_descuento(carrito, 0.10);\n    std::cout << "Total: " << total(carrito) << "\\n";  // Total: 90\n}` },
      ],
      x: [
        out(`void f(int n) { n = 10; }\n\nint x = 1;\nf(x);\nstd::cout << x;`, ['1', '10', '11', 'Error'], 'Por valor, la función recibe una copia y el original no cambia.'),
        out(`void f(int& n) { n = 10; }\n\nint x = 1;\nf(x);\nstd::cout << x;`, ['10', '1', '11', 'Error'], 'Con `int&` la función trabaja con la variable original.'),
        fill(`void duplicar(int___ n) {\n    n *= 2;\n}`, ['&', '*', '#', '@'], 'Con `&` el parámetro es una referencia y el cambio llega al original.'),
        out(`int a = 3;\nint& r = a;\nr += 4;\nstd::cout << a;`, ['7', '3', '4', 'Error'], '`r` es otro nombre de `a`, así que `r += 4` modifica `a`.'),
        mc('¿Cuál es la mejor forma de pasar un vector grande que la función solo va a leer?', ['const std::vector<int>&', 'std::vector<int>', 'std::vector<int>&', 'std::vector<int>*'], '`const&` evita la copia y garantiza que no se modificará.'),
        mc('¿Qué ocurre con `int& r;` sin inicializar?', ['No compila: una referencia debe inicializarse', 'Vale 0', 'Se refiere a nullptr', 'Contiene basura'], 'Una referencia siempre tiene que referirse a algo desde que nace.'),
        typ('Haz que el bucle modifique los elementos originales', `std::vector<int> v = {1, 2, 3};\nfor (auto___ x : v) x *= 2;`, '&', 'Con `auto&`, `x` es una referencia a cada elemento y no una copia.'),
        // Reto final
        out(`void f(int a, int& b, const int& c) {\n    a++;\n    b += c;\n}\n\nint x = 1, y = 2, z = 3;\nf(x, y, z);\nf(y, z, x);\nstd::cout << x << y << z;`, ['154', '254', '153', '264'], 'Primera llamada: `a` es una copia de `x` (no cambia) e `y` pasa a 2 + 3 = 5. Segunda: `a` es una copia de `y` y `z` pasa a 3 + 1 = 4.'),
      ],
    },
    // ───────────────────────── Día 14
    {
      id: 'cpp-pointers',
      t: 'Punteros',
      d: 'Direcciones, *, &, nullptr y aritmética de punteros.',
      guide: [
        { h: 'Direcciones de memoria', p: [
          'Cada variable vive en una posición de memoria con una dirección. `&x` devuelve la dirección de `x`.',
          'Un puntero es una variable que guarda una dirección. `int* p = &x;` se lee "p es un puntero a int que apunta a x".' ],
          code: `int x = 42;\nint* p = &x;\nstd::cout << p << "\\n";   // una dirección, p. ej. 0x7ffd5e8c\nstd::cout << *p << "\\n";  // 42` },
        { h: 'Desreferenciar con *', p: [
          '`*p` accede al valor al que apunta `p`: sirve tanto para leer como para escribir.',
          'Ojo con los dos usos de `*`: en la declaración (`int* p`) indica que es un puntero; en una expresión (`*p`) accede al valor. Y `&` también tiene dos usos: dirección (`&x`) y referencia (`int& r`).' ],
          code: `int x = 5;\nint* p = &x;\n*p = 20;          // cambia x a través del puntero\nstd::cout << x;   // 20` },
        { h: 'nullptr', p: [
          'Un puntero que no apunta a nada debe valer `nullptr`. Desreferenciar un puntero nulo es comportamiento indefinido y normalmente cuelga el programa.',
          'Comprueba siempre los punteros que podrían ser nulos antes de usarlos. Un puntero sin inicializar es aún peor: apunta a cualquier sitio.' ],
          code: `int* p = nullptr;\nif (p != nullptr) {\n    std::cout << *p;\n} else {\n    std::cout << "No apunta a nada";\n}` },
        { h: 'Punteros y arrays', p: [
          'El nombre de un array se convierte en un puntero a su primer elemento. Sumar 1 a un puntero lo avanza un elemento, no un byte.',
          '`p[i]` es lo mismo que `*(p + i)`. Restar dos punteros del mismo array da cuántos elementos los separan.' ],
          code: `int a[] = {10, 20, 30};\nint* p = a;               // apunta a a[0]\nstd::cout << *(p + 1) << " " << p[2] << "\\n";  // 20 30\np++;                      // ahora apunta a a[1]\nstd::cout << *p;          // 20` },
        { h: 'Ejemplo real: buscar un código de producto', real: true, p: [
          'Un almacén busca un código en su inventario. La función devuelve un puntero al elemento encontrado o `nullptr` si no existe, y quien la llama comprueba el resultado.' ],
          code: `#include <iostream>\n#include <vector>\n\nconst int* buscar(const std::vector<int>& codigos, int objetivo) {\n    for (const int& c : codigos)\n        if (c == objetivo) return &c;\n    return nullptr;\n}\n\nint main() {\n    std::vector<int> stock = {1201, 3307, 4410};\n    if (const int* p = buscar(stock, 3307))\n        std::cout << "Encontrado: " << *p << "\\n";  // Encontrado: 3307\n    if (buscar(stock, 9999) == nullptr)\n        std::cout << "No existe\\n";                // No existe\n}` },
      ],
      x: [
        mc('¿Qué guarda un puntero?', ['La dirección de memoria de otro dato', 'Una copia del dato', 'El tamaño del dato', 'El nombre de la variable'], 'Un puntero contiene una dirección; con `*` accedes al dato que hay en ella.'),
        fill(`int x = 5;\nint* p = ___x;`, ['&', '*', '#', '->'], '`&x` obtiene la dirección de `x`.'),
        out(`int x = 5;\nint* p = &x;\n*p = 9;\nstd::cout << x;`, ['9', '5', 'Una dirección', 'Error'], '`*p = 9` escribe en la variable a la que apunta `p`, que es `x`.'),
        out(`int a[] = {2, 4, 6, 8};\nint* p = a;\np += 2;\nstd::cout << *p;`, ['6', '4', '2', '8'], '`p` empieza en `a[0]` y avanza dos elementos hasta `a[2]`.'),
        typ('Escribe el valor de un puntero que no apunta a nada', `int* p = ___;`, 'nullptr', '`nullptr` es el puntero nulo de C++ moderno.'),
        mc('¿Qué ocurre al hacer `*p` cuando `p` vale `nullptr`?', ['Comportamiento indefinido; normalmente el programa se cuelga', 'Devuelve 0', 'Lanza una excepción', 'No compila'], 'Por eso hay que comprobar `p != nullptr` antes de desreferenciar.'),
        out(`int x = 3, y = 7;\nint* p = &x;\np = &y;\n*p += 1;\nstd::cout << x << y;`, ['38', '47', '37', '48'], 'Un puntero sí puede cambiar de destino: tras `p = &y`, el `+= 1` afecta a `y`.'),
        // Reto final
        out(`int v[] = {5, 1, 4, 2};\nint* p = v;\nint* q = v + 3;\nstd::swap(*p, *q);\np++;\n*p = *q * 10;\nstd::cout << v[0] << v[1] << " " << q - p;`, ['250 2', '250 3', '510 2', '210 2'], 'El swap deja {2, 1, 4, 5}. `p` avanza a `v[1]`, que pasa a valer 5 * 10 = 50. `q` apunta a `v[3]` y `p` a `v[1]`: los separan 2 elementos.'),
      ],
    },
    // ───────────────────────── Día 15
    {
      id: 'cpp-memory',
      t: 'Memoria dinámica',
      d: 'Stack y heap, new, delete, fugas y punteros colgantes.',
      guide: [
        { h: 'Stack y heap', p: [
          'Las variables locales viven en el stack (pila): se crean al entrar en su bloque y se destruyen solas al salir. Es rápido, pero su tamaño es limitado.',
          'El heap (montón) guarda datos cuyo tamaño o duración se decide mientras el programa se ejecuta. Esa memoria se reserva y se libera a mano.' ] },
        { h: 'new y delete', p: [
          '`new` reserva memoria en el heap y devuelve un puntero. `delete` la libera.',
          'Para arrays se usan `new T[n]` y `delete[]`. Mezclarlos (`new[]` con `delete`) es comportamiento indefinido.',
          'Tras liberar, conviene poner el puntero a `nullptr` para no usarlo por error.' ],
          code: `int* p = new int(42);       // un int en el heap\nstd::cout << *p << "\\n";     // 42\ndelete p;\np = nullptr;\n\nint n = 5;\nint* datos = new int[n];    // array de tamaño decidido al ejecutar\ndatos[0] = 7;\ndelete[] datos;` },
        { h: 'Fugas de memoria', p: [
          'Si pierdes el puntero sin hacer `delete`, esa memoria queda reservada hasta que termina el programa: es una fuga.',
          'En un programa que funciona durante días, como un servidor, las fugas acaban agotando la memoria.' ],
          code: `void procesar() {\n    int* buffer = new int[1000];\n    // ... trabajo ...\n    if (true) return;   // ¡fuga! se sale sin delete[]\n    delete[] buffer;\n}` },
        { h: 'Punteros colgantes y doble delete', p: [
          'Un puntero colgante apunta a memoria que ya se liberó. Leerlo o escribir en él es comportamiento indefinido.',
          'Hacer `delete` dos veces sobre la misma memoria también lo es. Poner el puntero a `nullptr` tras liberar evita ambos errores, porque `delete nullptr` no hace nada.' ] },
        { h: 'Ejemplo real: notas de una clase de tamaño variable', real: true, p: [
          'Un programa de un instituto no sabe cuántos alumnos tendrá cada clase hasta que se ejecuta. Primero lo resolvemos con `new[]` y `delete[]`.',
          'En C++ moderno lo habitual es usar `std::vector`, que reserva y libera solo. En el día 26 verás los smart pointers, que hacen lo mismo con objetos sueltos.' ],
          code: `#include <iostream>\n#include <vector>\n\nint main() {\n    int n = 4;\n    double* notas = new double[n]{6.5, 8, 9.5, 7};\n    double suma = 0;\n    for (int i = 0; i < n; i++) suma += notas[i];\n    std::cout << "Media: " << suma / n << "\\n";   // Media: 7.75\n    delete[] notas;   // imprescindible\n\n    // Lo mismo, sin new ni delete:\n    std::vector<double> v = {6.5, 8, 9.5, 7};\n}` },
      ],
      x: [
        mc('¿Dónde se guardan las variables locales de una función?', ['En el stack (pila)', 'En el heap (montón)', 'En el disco', 'En un archivo temporal'], 'Se crean al entrar en el bloque y se destruyen solas al salir.'),
        fill(`int* datos = new int[100];\n// ...\n___ datos;`, ['delete[]', 'delete', 'free', 'remove'], 'Lo reservado con `new[]` se libera con `delete[]`.'),
        mc('¿Qué es una fuga de memoria?', ['Memoria reservada con new que nunca se libera', 'Leer fuera de un array', 'Un puntero que vale nullptr', 'Una variable sin inicializar'], 'La memoria queda ocupada aunque nadie pueda usarla.'),
        out(`int* p = new int(7);\n*p *= 3;\nint r = *p;\ndelete p;\nstd::cout << r;`, ['21', '7', 'Basura', 'Error'], '`r` guarda una copia del valor (21) antes de liberar, así que se puede usar sin problema.'),
        typ('Libera el entero reservado con new', `int* p = new int(5);\n___ p;`, 'delete', 'Un objeto suelto creado con `new` se libera con `delete` (sin corchetes).'),
        mc('¿Qué es un puntero colgante?', ['Un puntero que apunta a memoria ya liberada', 'Un puntero que vale nullptr', 'Un puntero a otro puntero', 'Un puntero a una constante'], 'Usarlo es comportamiento indefinido.'),
        ord('Reserva en el heap un array de n enteros', ['int*', 'datos', '=', 'new', 'int[n]', ';'], ['malloc', 'delete'], '`new int[n]` reserva `n` enteros y devuelve un puntero al primero.'),
        // Reto final
        out(`int n = 4;\nint* a = new int[n];\nfor (int i = 0; i < n; i++) a[i] = i * i;\nint* b = a + 1;\nint s = 0;\nfor (int i = 0; i < 3; i++) s += b[i];\ndelete[] a;\nstd::cout << s;`, ['14', '13', '5', 'Error'], 'El array es {0, 1, 4, 9}. `b` apunta a `a[1]`, así que suma 1 + 4 + 9 = 14. `s` se calcula antes de liberar.'),
      ],
    },
    // ───────────────────────── Día 16
    {
      id: 'cpp-structs',
      t: 'Structs y enums',
      d: 'Agrupar datos con struct y definir constantes con enum class.',
      guide: [
        { h: 'struct: agrupar datos', p: [
          'Un `struct` junta varios datos relacionados bajo un mismo tipo. Cada dato es un miembro y se accede a él con el punto: `p.x`.',
          'La definición termina en `;` después de la llave de cierre. Olvidarlo produce errores confusos en la línea siguiente.' ],
          code: `struct Punto {\n    double x;\n    double y;\n};\n\nPunto p{3, 4};\np.x = 5;\nstd::cout << p.x << "," << p.y;  // 5,4` },
        { h: 'Valores por defecto y funciones', p: [
          'Los miembros pueden tener un valor por defecto que se usa si no das otro al crear el objeto.',
          'Para pasar un struct a una función que solo lo lee, usa `const&` y evitarás copiarlo.' ],
          code: `struct Producto {\n    std::string nombre;\n    double precio = 0;\n    int stock = 0;\n};\n\ndouble valor_stock(const Producto& p) {\n    return p.precio * p.stock;\n}\n\nProducto teclado{"Teclado", 25.5, 4};\nstd::cout << valor_stock(teclado);  // 102` },
        { h: 'Vectores de structs y structured bindings', p: [
          'Un `std::vector<Producto>` funciona como una pequeña tabla: cada elemento es una fila.',
          'Desde C++17 puedes desempaquetar los miembros en variables: `auto [nombre, precio, stock] = p;`. También funciona en el range-for.' ],
          code: `std::vector<Punto> ruta = {{0, 0}, {3, 4}, {6, 8}};\nfor (const auto& [x, y] : ruta)\n    std::cout << "(" << x << ", " << y << ") ";\n// (0, 0) (3, 4) (6, 8)` },
        { h: 'enum class', p: [
          'Un `enum class` define un tipo con un conjunto cerrado de valores con nombre. Se escriben con el nombre del tipo delante: `Color::Verde`.',
          'El `enum` clásico mete sus nombres en el ámbito exterior y se convierte en `int` sin avisar. `enum class` evita ambos problemas; si necesitas el número, conviértelo con `static_cast<int>`.',
          'Por defecto, el primer valor vale 0, el segundo 1 y así sucesivamente.' ],
          code: `enum class Color { Rojo, Verde, Azul };\n\nColor c = Color::Verde;\nif (c == Color::Verde) std::cout << "Adelante\\n";\nstd::cout << static_cast<int>(c);  // 1` },
        { h: 'Ejemplo real: pedidos de una tienda', real: true, p: [
          'Una tienda guarda cada pedido en un struct y su estado en un `enum class`. Así es imposible escribir un estado inventado como `"enviadoo"`, y un `switch` traduce cada estado a texto.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nenum class Estado { Pendiente, Enviado, Entregado };\n\nstruct Pedido {\n    int id;\n    double total;\n    Estado estado;\n};\n\nstd::string texto(Estado e) {\n    switch (e) {\n        case Estado::Pendiente: return "pendiente";\n        case Estado::Enviado:   return "enviado";\n        case Estado::Entregado: return "entregado";\n    }\n    return "?";\n}\n\nint main() {\n    std::vector<Pedido> pedidos = {\n        {101, 35.5, Estado::Enviado},\n        {102, 12.0, Estado::Pendiente},\n        {103, 80.0, Estado::Pendiente}};\n    double por_enviar = 0;\n    for (const auto& p : pedidos) {\n        std::cout << p.id << ": " << texto(p.estado) << "\\n";\n        if (p.estado == Estado::Pendiente) por_enviar += p.total;\n    }\n    std::cout << "Pendiente de enviar: " << por_enviar << " euros\\n";  // 92 euros\n}` },
      ],
      x: [
        fill(`struct Punto {\n    int x, y;\n}___`, [';', ':', ',', '.'], 'La definición de un struct termina con punto y coma tras la llave.'),
        out(`struct P { int x; int y; };\n\nP p{2, 5};\np.y += p.x;\nstd::cout << p.y;`, ['7', '5', '2', '25'], '`p{2, 5}` asigna x = 2 e y = 5; después y pasa a 5 + 2 = 7.'),
        mc('¿Qué ventaja tiene `enum class` sobre el `enum` clásico?', ['Sus nombres no se mezclan con los demás y no se convierte en int sin querer', 'Ocupa menos memoria', 'Admite valores decimales', 'Se puede usar como std::string'], 'Por eso hay que escribir `Color::Rojo` y usar `static_cast<int>` para obtener el número.'),
        out(`enum class Talla { S, M, L, XL };\nstd::cout << static_cast<int>(Talla::L);`, ['2', '3', 'L', 'Error'], 'Los valores se numeran desde 0: S = 0, M = 1, L = 2.'),
        typ('Accede al valor Verde del enum class', `enum class Semaforo { Rojo, Ambar, Verde };\nSemaforo s = Semaforo___Verde;`, '::', 'Los valores de un `enum class` se escriben con el operador de ámbito: `Semaforo::Verde`.'),
        out(`struct Config {\n    int volumen = 50;\n    bool mudo = false;\n};\n\nConfig c;\nc.volumen += 10;\nstd::cout << c.volumen << c.mudo;`, ['600', '60false', '500', '6001'], 'Los valores por defecto dan 50 y `false`. 50 + 10 = 60 y el `bool` se imprime como 0.'),
        out(`struct Par { std::string k; int v; };\n\nPar p{"edad", 30};\nauto [clave, valor] = p;\nstd::cout << clave << "=" << valor;`, ['edad=30', 'k=v', '30=edad', 'Error'], 'El structured binding copia los miembros en orden: `clave` recibe "edad" y `valor` recibe 30.'),
        // Reto final
        out(`struct Item { std::string nombre; double precio; int uds; };\n\nstd::vector<Item> carrito = {{"pan", 1.5, 2}, {"leche", 0.9, 6}, {"queso", 4.0, 1}};\ndouble total = 0, max_linea = 0;\nstd::string mas_caro;\nfor (const auto& [n, p, u] : carrito) {\n    total += p * u;\n    if (p * u > max_linea) { max_linea = p * u; mas_caro = n; }\n}\nstd::cout << total << " " << mas_caro;`, ['12.4 leche', '12.4 queso', '6.4 queso', '9 leche'], 'Las líneas valen 3, 5.4 y 4, que suman 12.4. La línea más cara es la de la leche (5.4), aunque el queso tenga el precio unitario más alto.'),
      ],
    },
    // ───────────────────────── Día 17
    {
      id: 'cpp-classes',
      t: 'Clases',
      d: 'class, public, private, métodos const, this y ->.',
      guide: [
        { h: 'Datos y comportamiento juntos', p: [
          'Una `class` agrupa datos (atributos) y las funciones que trabajan con ellos (métodos). Cada objeto creado a partir de la clase tiene sus propios datos.',
          'La diferencia con `struct` es el acceso por defecto: en `class` todo es privado salvo que digas lo contrario; en `struct`, público.' ],
          code: `class Contador {\npublic:\n    void incrementar() { valor++; }\n    int obtener() const { return valor; }\nprivate:\n    int valor = 0;\n};\n\nContador c;\nc.incrementar();\nc.incrementar();\nstd::cout << c.obtener();  // 2\n// c.valor = 10;  // error: valor es privado` },
        { h: 'Encapsulación', p: [
          'Lo habitual es dejar los atributos en `private` y ofrecer métodos `public` que los manejan. Así la clase controla que sus datos sean siempre válidos.',
          'Si mañana cambias cómo se guarda el dato por dentro, el código que usa la clase no tiene que cambiar.' ],
          code: `class Termostato {\npublic:\n    void fijar(int g) {\n        if (g < 15) g = 15;   // la clase impone sus límites\n        if (g > 30) g = 30;\n        grados = g;\n    }\n    int ver() const { return grados; }\nprivate:\n    int grados = 20;\n};` },
        { h: 'Métodos const', p: [
          'Un método marcado con `const` al final promete no modificar el objeto. El compilador lo comprueba.',
          'Solo los métodos `const` se pueden llamar sobre objetos `const` o referencias `const&`. Marca como `const` todos los métodos que solo consultan.' ] },
        { h: 'this y ->', p: [
          'Dentro de un método, `this` es un puntero al objeto actual. Sirve, por ejemplo, cuando un parámetro se llama igual que un atributo.',
          'Con un puntero a objeto, `p->metodo()` es la forma corta de `(*p).metodo()`.' ],
          code: `class Jugador {\npublic:\n    void poner_nombre(std::string nombre) { this->nombre = nombre; }\n    std::string ver() const { return nombre; }\nprivate:\n    std::string nombre;\n};\n\nJugador j;\nJugador* p = &j;\np->poner_nombre("Leo");\nstd::cout << j.ver();  // Leo` },
        { h: 'Ejemplo real: una cuenta bancaria', real: true, p: [
          'Un banco nunca dejaría que cualquier parte del programa cambie el saldo directamente. La clase solo permite ingresar y retirar cantidades válidas, y avisa con un `bool` si la operación se rechaza.' ],
          code: `#include <iostream>\n\nclass Cuenta {\npublic:\n    bool ingresar(double cantidad) {\n        if (cantidad <= 0) return false;\n        saldo += cantidad;\n        return true;\n    }\n    bool retirar(double cantidad) {\n        if (cantidad <= 0 || cantidad > saldo) return false;\n        saldo -= cantidad;\n        return true;\n    }\n    double obtener_saldo() const { return saldo; }\nprivate:\n    double saldo = 0;\n};\n\nint main() {\n    Cuenta c;\n    c.ingresar(200);\n    std::cout << c.retirar(500) << " " << c.retirar(50) << "\\n";  // 0 1\n    std::cout << c.obtener_saldo() << "\\n";                      // 150\n}` },
      ],
      x: [
        mc('¿Cuál es el acceso por defecto de los miembros de una `class`?', ['private', 'public', 'protected', 'No tiene'], 'En `class` todo es privado salvo que se indique otra cosa; en `struct`, público.'),
        fill(`class Gato {\n___:\n    void maullar() { std::cout << "Miau"; }\n};`, ['public', 'open', 'export', 'global'], '`public:` hace que lo que viene después se pueda usar desde fuera de la clase.'),
        out(`class C {\npublic:\n    void sumar(int n) { total += n; }\n    int ver() const { return total; }\nprivate:\n    int total = 0;\n};\n\nC c;\nc.sumar(4);\nc.sumar(-1);\nstd::cout << c.ver();`, ['3', '4', '5', 'Error'], 'El objeto conserva su `total` entre llamadas: 0 + 4 - 1 = 3.'),
        mc('¿Qué indica el `const` final en `int ver() const`?', ['Que el método no modifica el objeto', 'Que devuelve una constante', 'Que no se puede redefinir', 'Que solo se puede llamar una vez'], 'Así el método se puede usar también con objetos `const`.'),
        typ('Llama al método a través de un puntero', `Cuenta c;\nCuenta* p = &c;\np___ingresar(50);`, '->', '`p->ingresar(50)` equivale a `(*p).ingresar(50)`.'),
        mc('¿Qué ocurre con `c.total = 99;` si `total` es privado?', ['No compila', 'Se cambia el valor', 'Lanza una excepción', 'Se ignora en silencio'], 'El compilador impide acceder a miembros privados desde fuera de la clase.'),
        out(`class Termostato {\npublic:\n    void fijar(int g) { grados = g < 15 ? 15 : (g > 30 ? 30 : g); }\n    int ver() const { return grados; }\nprivate:\n    int grados = 20;\n};\n\nTermostato t;\nt.fijar(42);\nstd::cout << t.ver();`, ['30', '42', '20', '15'], 'El método limita el valor al rango 15-30, así que 42 se queda en 30.'),
        // Reto final
        out(`class Cuenta {\npublic:\n    bool ingresar(double x) {\n        if (x <= 0) return false;\n        saldo += x;\n        return true;\n    }\n    bool retirar(double x) {\n        if (x > saldo) return false;\n        saldo -= x;\n        return true;\n    }\n    double ver() const { return saldo; }\nprivate:\n    double saldo = 0;\n};\n\nCuenta c;\nc.ingresar(100);\nc.ingresar(-20);\nbool a = c.retirar(30);\nbool b = c.retirar(80);\nstd::cout << a << b << " " << c.ver();`, ['10 70', '11 -10', '10 50', '11 70'], 'El ingreso negativo se rechaza: el saldo es 100. Retirar 30 funciona (1) y deja 70; retirar 80 no (0) porque supera el saldo.'),
      ],
    },
    // ───────────────────────── Día 18
    {
      id: 'cpp-constructors',
      t: 'Constructores y destructores',
      d: 'Inicialización, listas de inicialización, explicit, destructores y RAII.',
      guide: [
        { h: 'Constructores', p: [
          'Un constructor es un método especial que se ejecuta al crear el objeto. Se llama igual que la clase y no tiene tipo de retorno, ni siquiera `void`.',
          'Sirve para que el objeto nazca con datos válidos y no tengas que configurarlo después.' ],
          code: `class Producto {\npublic:\n    Producto(std::string n, double p) {\n        nombre = n;\n        precio = p;\n    }\n    void mostrar() const { std::cout << nombre << ": " << precio << "\\n"; }\nprivate:\n    std::string nombre;\n    double precio;\n};\n\nProducto p("Ratón", 19.9);\np.mostrar();  // Ratón: 19.9` },
        { h: 'Lista de inicialización', p: [
          'La forma preferida de dar valor a los atributos es la lista de inicialización, que va tras `:` antes del cuerpo. Inicializa directamente en lugar de crear y luego asignar.',
          'Es obligatoria para atributos `const` y referencias. Los atributos se inicializan en el orden en que están declarados en la clase, no en el de la lista.' ],
          code: `class Producto {\npublic:\n    Producto(std::string n, double p) : nombre(n), precio(p) {}\nprivate:\n    std::string nombre;\n    double precio;\n};` },
        { h: 'Varios constructores y explicit', p: [
          'Una clase puede tener varios constructores (sobrecarga). El que no recibe parámetros es el constructor por defecto.',
          'Un constructor de un solo parámetro permite conversiones implícitas: `Temperatura t = 30;`. Márcalo con `explicit` para impedirlas y evitar sorpresas.' ],
          code: `class Temperatura {\npublic:\n    Temperatura() : grados(20) {}\n    explicit Temperatura(double g) : grados(g) {}\n    double ver() const { return grados; }\nprivate:\n    double grados;\n};\n\nTemperatura a;          // 20\nTemperatura b(25.5);    // 25.5\n// Temperatura c = 30;  // error gracias a explicit` },
        { h: 'Destructores y RAII', p: [
          'El destructor (`~Clase()`) se ejecuta automáticamente cuando el objeto se destruye, por ejemplo al salir de su bloque. Los objetos se destruyen en orden inverso al de creación.',
          'RAII es la idea central de C++: el constructor adquiere un recurso (memoria, un archivo, una conexión) y el destructor lo libera. Así nunca se olvida liberarlo, ni siquiera si hay errores.' ],
          code: `class Traza {\npublic:\n    Traza(std::string n) : nombre(n) { std::cout << "entra " << nombre << "\\n"; }\n    ~Traza() { std::cout << "sale " << nombre << "\\n"; }\nprivate:\n    std::string nombre;\n};\n\nint main() {\n    Traza a("A");\n    {\n        Traza b("B");\n    }                       // aquí se destruye B\n    std::cout << "fin\\n";\n}                           // aquí se destruye A\n// entra A, entra B, sale B, fin, sale A` },
        { h: 'Ejemplo real: medir cuánto tarda una tarea', real: true, p: [
          'Un equipo quiere saber qué funciones de su programa son lentas. Este cronómetro empieza a contar en el constructor y muestra el tiempo en el destructor: basta con crearlo al principio de la función.' ],
          code: `#include <chrono>\n#include <iostream>\n#include <string>\n\nclass Cronometro {\npublic:\n    explicit Cronometro(std::string tarea)\n        : tarea(tarea), inicio(std::chrono::steady_clock::now()) {}\n    ~Cronometro() {\n        auto fin = std::chrono::steady_clock::now();\n        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(fin - inicio).count();\n        std::cout << tarea << " tardó " << ms << " ms\\n";\n    }\nprivate:\n    std::string tarea;\n    std::chrono::steady_clock::time_point inicio;\n};\n\nvoid exportar_informe() {\n    Cronometro c("exportar_informe");\n    // ... trabajo ...\n}   // al salir, el destructor muestra el tiempo` },
      ],
      x: [
        mc('¿Qué tipo de retorno tiene un constructor?', ['Ninguno, ni siquiera void', 'void', 'El tipo de la clase', 'int'], 'Los constructores no declaran tipo de retorno.'),
        fill(`class Archivo {\npublic:\n    ___Archivo() { std::cout << "cerrado"; }\n};`, ['~', '!', '-', '#'], 'El destructor se escribe con `~` delante del nombre de la clase.'),
        out(`struct T {\n    char c;\n    T(char c) : c(c) { std::cout << c; }\n    ~T() { std::cout << c; }\n};\n\nint main() {\n    T a('x');\n    { T b('y'); }\n    T c('z');\n}`, ['xyyzzx', 'xyzzyx', 'xyzxyz', 'xyyzxz'], '`b` se crea y se destruye dentro de su bloque (yy). Al final de `main` se destruyen `c` y `a` en orden inverso a su creación (zx).'),
        typ('Completa la lista de inicialización', `class Punto {\npublic:\n    Punto(int x, int y) ___ x(x), y(y) {}\nprivate:\n    int x, y;\n};`, ':', 'La lista de inicialización empieza con dos puntos tras los parámetros.'),
        mc('¿Qué evita `explicit` en un constructor de un parámetro?', ['Conversiones implícitas como `Temperatura t = 30;`', 'Que se pueda llamar al constructor', 'Que el objeto se copie', 'Que se ejecute el destructor'], 'Con `explicit` hay que escribir `Temperatura t(30);`.'),
        mc('¿Qué significa RAII?', ['El constructor adquiere un recurso y el destructor lo libera', 'Todas las clases deben heredar de otra', 'La memoria la libera un recolector de basura', 'Los atributos deben ser públicos'], 'Como el destructor se ejecuta siempre, el recurso nunca se queda sin liberar.'),
        out(`class Caja {\npublic:\n    Caja() : ancho(1), alto(1) {}\n    Caja(int a, int h) : ancho(a), alto(h) {}\n    int area() const { return ancho * alto; }\nprivate:\n    int ancho, alto;\n};\n\nCaja a;\nCaja b(3, 4);\nstd::cout << a.area() + b.area();`, ['13', '12', '7', 'Error'], '`a` usa el constructor por defecto (1 × 1) y `b` el de dos parámetros (3 × 4): 1 + 12 = 13.'),
        // Reto final
        out(`struct P {\n    char id;\n    P(char id) : id(id) { std::cout << "+" << id; }\n    ~P() { std::cout << "-" << id; }\n};\n\nstruct Coche {\n    P motor{'m'};\n    P ruedas{'r'};\n    Coche() { std::cout << "+C"; }\n    ~Coche() { std::cout << "-C"; }\n};\n\nint main() {\n    Coche c;\n}`, ['+m+r+C-C-r-m', '+C+m+r-r-m-C', '+m+r+C-C-m-r', '+C+m+r-C-r-m'], 'Los atributos se construyen en orden de declaración antes del cuerpo del constructor. Al destruir, primero se ejecuta el cuerpo del destructor y después los atributos en orden inverso.'),
      ],
    },
    // ───────────────────────── Día 19
    {
      id: 'cpp-inheritance',
      t: 'Herencia',
      d: 'Clases derivadas, protected, constructores de la base y orden de construcción.',
      guide: [
        { h: 'Clases derivadas', p: [
          'La herencia crea una clase nueva a partir de otra: `class Perro : public Animal`. La clase derivada recibe los atributos y métodos de la base y añade los suyos.',
          'Úsala cuando hay una relación "es un": un perro es un animal. Si la relación es "tiene un" (un coche tiene un motor), usa un atributo.' ],
          code: `class Animal {\npublic:\n    std::string nombre;\n    void comer() const { std::cout << nombre << " come\\n"; }\n};\n\nclass Perro : public Animal {\npublic:\n    void ladrar() const { std::cout << nombre << " ladra\\n"; }\n};\n\nPerro p;\np.nombre = "Toby";\np.comer();   // Toby come\np.ladrar();  // Toby ladra` },
        { h: 'protected', p: [
          '`private`: solo la propia clase. `protected`: la propia clase y sus derivadas. `public`: cualquiera.',
          'Usa `protected` para lo que las clases hijas necesitan tocar pero el resto del programa no.' ] },
        { h: 'Constructores en la herencia', p: [
          'La clase derivada llama al constructor de la base en su lista de inicialización: `Gerente(...) : Empleado(n, s)`.',
          'Primero se construye la parte de la base y después la derivada. Al destruir, el orden es el inverso.' ],
          code: `class Empleado {\npublic:\n    Empleado(std::string n, double s) : nombre(n), sueldo(s) {}\nprotected:\n    std::string nombre;\n    double sueldo;\n};\n\nclass Gerente : public Empleado {\npublic:\n    Gerente(std::string n, double s, double bonus)\n        : Empleado(n, s), bonus(bonus) {}\n    double total() const { return sueldo + bonus; }  // sueldo es protected\nprivate:\n    double bonus;\n};\n\nGerente g("Marta", 3000, 500);\nstd::cout << g.total();  // 3500` },
        { h: 'Redefinir métodos y llamar a la base', p: [
          'Si la derivada define un método con el mismo nombre que la base, oculta la versión de la base.',
          'Desde la derivada puedes seguir llamando a la versión original con `Base::metodo()`. Así amplías el comportamiento en lugar de repetirlo.' ] },
        { h: 'Ejemplo real: vehículos de una flota', real: true, p: [
          'Una empresa de transporte gestiona coches y camiones. Todos tienen matrícula y kilómetros; los camiones añaden la carga máxima. La ficha del camión reutiliza la de la base y le añade su dato.' ],
          code: `#include <iostream>\n#include <string>\n\nclass Vehiculo {\npublic:\n    Vehiculo(std::string matricula, int km) : matricula(matricula), km(km) {}\n    std::string ficha() const {\n        return matricula + " (" + std::to_string(km) + " km)";\n    }\nprotected:\n    std::string matricula;\n    int km;\n};\n\nclass Camion : public Vehiculo {\npublic:\n    Camion(std::string matricula, int km, int carga)\n        : Vehiculo(matricula, km), carga(carga) {}\n    std::string ficha() const {\n        return Vehiculo::ficha() + ", carga " + std::to_string(carga) + " kg";\n    }\nprivate:\n    int carga;\n};\n\nint main() {\n    Camion c("1234-BCD", 85000, 12000);\n    std::cout << c.ficha() << "\\n";  // 1234-BCD (85000 km), carga 12000 kg\n}` },
      ],
      x: [
        fill(`class Gato ___ public Animal {\n    // ...\n};`, [':', '->', 'extends', '::'], 'En C++ la herencia se indica con dos puntos: `class Gato : public Animal`.'),
        mc('¿Desde dónde se puede acceder a un miembro `protected`?', ['Desde la propia clase y sus derivadas', 'Desde cualquier parte', 'Solo desde la propia clase', 'Solo desde main'], '`protected` está a medio camino entre `private` y `public`.'),
        out(`struct A {\n    A() { std::cout << "A"; }\n    ~A() { std::cout << "a"; }\n};\nstruct B : A {\n    B() { std::cout << "B"; }\n    ~B() { std::cout << "b"; }\n};\n\nint main() { B obj; }`, ['ABba', 'BAab', 'ABab', 'BAba'], 'Primero se construye la base y luego la derivada; al destruir, el orden se invierte.'),
        out(`struct Base {\n    std::string hola() const { return "base"; }\n};\nstruct Hija : Base {\n    std::string hola() const { return "hija+" + Base::hola(); }\n};\n\nHija h;\nstd::cout << h.hola();`, ['hija+base', 'base', 'hija', 'base+hija'], '`Hija::hola` oculta la versión de la base, pero la llama explícitamente con `Base::hola()`.'),
        typ('Llama al constructor de la clase base', `class Gerente : public Empleado {\npublic:\n    Gerente(std::string n) : ___(n) {}\n};`, 'Empleado', 'La base se inicializa en la lista de inicialización usando su nombre.'),
        mc('¿Qué relación representa bien la herencia pública?', ['"Es un": un perro es un animal', '"Tiene un": un coche tiene un motor', '"Usa un": un programa usa un archivo', '"Contiene varios": una lista contiene números'], 'Para "tiene un" se usa un atributo, no herencia.'),
        ord('Declara una clase Moto que hereda públicamente de Vehiculo', ['class', 'Moto', ':', 'public', 'Vehiculo', '{', '};'], ['extends', 'private'], 'Primero el nombre de la clase nueva, después `: public` y la clase base.'),
        // Reto final
        out(`class Cuenta {\npublic:\n    Cuenta(double s) : saldo(s) {}\n    double ver() const { return saldo; }\nprotected:\n    double saldo;\n};\n\nclass Ahorro : public Cuenta {\npublic:\n    Ahorro(double s, double tasa) : Cuenta(s), tasa(tasa) {}\n    void anio() { saldo += saldo * tasa; }\nprivate:\n    double tasa;\n};\n\nAhorro a(1000, 0.1);\na.anio();\na.anio();\nstd::cout << a.ver();`, ['1210', '1200', '1100', '1000'], '`Ahorro` puede modificar `saldo` porque es `protected`. El interés es compuesto: 1000 → 1100 → 1210.'),
      ],
    },
    // ───────────────────────── Día 20
    {
      id: 'cpp-polymorphism',
      t: 'Polimorfismo',
      d: 'virtual, override, clases abstractas y destructor virtual.',
      guide: [
        { h: 'El problema', p: [
          'Un puntero o una referencia a la clase base puede apuntar a un objeto derivado. Pero, por defecto, C++ decide qué método llamar según el tipo del puntero, no el del objeto real.',
          'Así, si guardas un `Circulo` en un `Figura&`, se llamaría al método de `Figura`.' ] },
        { h: 'virtual y override', p: [
          'Un método `virtual` se elige mientras el programa se ejecuta, según el tipo real del objeto. Es lo que se llama polimorfismo.',
          'En la derivada, marca el método con `override`: el compilador comprobará que de verdad sustituye a uno virtual de la base y te avisará si te equivocas en el nombre o en los parámetros.' ],
          code: `class Figura {\npublic:\n    virtual double area() const { return 0; }\n    virtual ~Figura() = default;\n};\n\nclass Circulo : public Figura {\npublic:\n    explicit Circulo(double r) : r(r) {}\n    double area() const override { return 3.14159 * r * r; }\nprivate:\n    double r;\n};\n\nclass Cuadrado : public Figura {\npublic:\n    explicit Cuadrado(double l) : l(l) {}\n    double area() const override { return l * l; }\nprivate:\n    double l;\n};\n\nCirculo c(1);\nCuadrado q(2);\nconst Figura& f = q;\nstd::cout << f.area();  // 4: se usa el área del Cuadrado` },
        { h: 'Clases abstractas', p: [
          'Un método virtual puro (`= 0`) no tiene implementación en la base: obliga a las derivadas a escribirla.',
          'Una clase con algún método virtual puro es abstracta y no se pueden crear objetos de ella. Sirve como contrato: define qué deben saber hacer sus derivadas.' ],
          code: `class Notificador {\npublic:\n    virtual void enviar(const std::string& msg) const = 0;\n    virtual ~Notificador() = default;\n};\n\n// Notificador n;  // error: es una clase abstracta` },
        { h: 'Destructor virtual', p: [
          'Si borras un objeto derivado con `delete` a través de un puntero a la base y el destructor de la base no es virtual, el destructor de la derivada no se ejecuta: es comportamiento indefinido.',
          'Regla: toda clase pensada para usarse de forma polimórfica necesita `virtual ~Base() = default;`.' ] },
        { h: 'Ejemplo real: avisos por email y por SMS', real: true, p: [
          'Una tienda avisa a sus clientes por varios canales. El código que envía los avisos solo conoce `Notificador`; añadir un canal nuevo (por ejemplo, notificaciones push) no obliga a cambiarlo.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nclass Notificador {\npublic:\n    virtual void enviar(const std::string& msg) const = 0;\n    virtual ~Notificador() = default;\n};\n\nclass Email : public Notificador {\npublic:\n    void enviar(const std::string& msg) const override { std::cout << "[email] " << msg << "\\n"; }\n};\n\nclass Sms : public Notificador {\npublic:\n    void enviar(const std::string& msg) const override { std::cout << "[sms] " << msg << "\\n"; }\n};\n\nvoid avisar_a_todos(const std::vector<const Notificador*>& canales, const std::string& msg) {\n    for (const Notificador* c : canales) c->enviar(msg);\n}\n\nint main() {\n    Email e;\n    Sms s;\n    avisar_a_todos({&e, &s}, "Tu pedido ha salido");\n    // [email] Tu pedido ha salido\n    // [sms] Tu pedido ha salido\n}` },
      ],
      x: [
        mc('¿Qué palabra hace que un método se elija según el tipo real del objeto?', ['virtual', 'override', 'static', 'dynamic'], '`override` solo comprueba que sustituyes un método que ya es virtual.'),
        out(`struct A { void hola() const { std::cout << "A"; } };\nstruct B : A { void hola() const { std::cout << "B"; } };\n\nB b;\nA& r = b;\nr.hola();\nb.hola();`, ['AB', 'BB', 'AA', 'BA'], 'Sin `virtual`, la llamada a través de `A&` usa el método de `A`.'),
        out(`struct A { virtual void hola() const { std::cout << "A"; } };\nstruct B : A { void hola() const override { std::cout << "B"; } };\n\nB b;\nA& r = b;\nr.hola();`, ['B', 'A', 'AB', 'Error'], 'Con `virtual`, se llama al método del tipo real del objeto, que es `B`.'),
        fill(`class Figura {\npublic:\n    virtual double area() const ___ 0;\n};`, ['=', '==', ':', '->'], '`= 0` convierte el método en virtual puro y la clase en abstracta.'),
        mc('Si `Figura` tiene un método virtual puro, ¿qué ocurre con `Figura f;`?', ['No compila: no se puede crear un objeto de una clase abstracta', 'Se crea con área 0', 'Lanza una excepción', 'Se convierte en un Circulo'], 'Solo se pueden crear objetos de las derivadas que implementan todos los métodos puros.'),
        typ('Indica que el método sustituye a uno virtual de la base', `class Cuadrado : public Figura {\n    double l = 2;\npublic:\n    double area() const ___ { return l * l; }\n};`, 'override', '`override` hace que el compilador compruebe que el método existe y es virtual en la base.'),
        mc('¿Por qué una clase base polimórfica necesita un destructor virtual?', ['Para que `delete` con un puntero a la base ejecute también el destructor de la derivada', 'Para que la clase sea abstracta', 'Para que el objeto se pueda copiar', 'Para que el programa sea más rápido'], 'Sin él, borrar a través de la base es comportamiento indefinido.'),
        // Reto final
        out(`struct Figura {\n    virtual double area() const = 0;\n    virtual std::string nombre() const { return "figura"; }\n    virtual ~Figura() = default;\n};\nstruct Rect : Figura {\n    double a, b;\n    Rect(double a, double b) : a(a), b(b) {}\n    double area() const override { return a * b; }\n    std::string nombre() const override { return "rect"; }\n};\nstruct Cuad : Rect {\n    Cuad(double l) : Rect(l, l) {}\n};\n\nRect r(2, 3);\nCuad c(4);\nstd::vector<const Figura*> v = {&r, &c};\ndouble total = 0;\nfor (auto f : v) total += f->area();\nstd::cout << total << " " << v[1]->nombre();`, ['22 rect', '22 figura', '22 cuad', '10 rect'], 'Las áreas son 2 × 3 = 6 y 4 × 4 = 16. `Cuad` no redefine `nombre()`, así que hereda la versión de `Rect`.'),
      ],
    },
    // ───────────────────────── Día 21
    {
      id: 'cpp-overloading',
      t: 'Sobrecarga de operadores',
      d: 'operator+, operator==, operator<, operator<< y functores.',
      guide: [
        { h: 'Operadores para tus propios tipos', p: [
          'C++ permite definir qué hacen `+`, `==`, `<`, `<<` y casi todos los operadores con tus clases. Así un vector matemático se suma con `a + b` en vez de `a.sumar(b)`.',
          'Se define una función llamada `operator` seguida del símbolo. Úsalo solo cuando el significado sea evidente: un `+` que reste confundiría a cualquiera.' ],
          code: `struct Vec2 {\n    double x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n    Vec2 operator*(double k) const { return {x * k, y * k}; }\n};\n\nVec2 a{1, 2}, b{3, 4};\nVec2 c = a + b * 2;   // {7, 10}` },
        { h: 'Comparar: operator== y operator<', p: [
          '`operator==` compara dos objetos. En C++20 puedes pedir que el compilador lo genere comparando todos los miembros con `= default`.',
          '`operator<` define un orden. Con él, `std::sort` y `std::set` ya saben ordenar tus objetos.' ],
          code: `struct Fecha {\n    int anio, mes, dia;\n    bool operator==(const Fecha&) const = default;   // C++20\n    bool operator<(const Fecha& o) const {\n        if (anio != o.anio) return anio < o.anio;\n        if (mes != o.mes) return mes < o.mes;\n        return dia < o.dia;\n    }\n};\n\nFecha a{2024, 5, 1}, b{2024, 3, 9};\nstd::cout << (a == b) << (b < a);  // 01` },
        { h: 'Imprimir con operator<<', p: [
          'Para usar `std::cout << objeto`, define una función libre `operator<<` que recibe el flujo y el objeto, escribe en el flujo y lo devuelve.',
          'Devolver el `std::ostream&` permite encadenar varios `<<`. Si la función necesita acceder a miembros privados, se declara como `friend` dentro de la clase.' ],
          code: `std::ostream& operator<<(std::ostream& os, const Vec2& v) {\n    return os << "(" << v.x << ", " << v.y << ")";\n}\n\nstd::cout << Vec2{7, 10} << "\\n";  // (7, 10)` },
        { h: 'Functores: operator()', p: [
          'Si una clase define `operator()`, sus objetos se pueden llamar como funciones. Se llaman functores y, a diferencia de una función normal, pueden guardar datos.',
          'Los operadores compuestos como `+=` modifican el objeto y devuelven `*this` por referencia.' ],
          code: `struct Multiplicador {\n    int factor;\n    int operator()(int x) const { return x * factor; }\n};\n\nMultiplicador triple{3};\nstd::cout << triple(5);  // 15` },
        { h: 'Ejemplo real: importes sin errores de redondeo', real: true, p: [
          'Una cafetería suma importes. Con `double`, `0.1 + 0.2` no da exactamente `0.3`, así que el dinero se guarda en céntimos enteros. Los operadores hacen que la clase se use como un número más.' ],
          code: `#include <iostream>\n\nclass Dinero {\npublic:\n    explicit Dinero(long long centimos) : centimos(centimos) {}\n    Dinero operator+(const Dinero& o) const { return Dinero(centimos + o.centimos); }\n    Dinero operator*(int n) const { return Dinero(centimos * n); }\n    bool operator<(const Dinero& o) const { return centimos < o.centimos; }\n    friend std::ostream& operator<<(std::ostream& os, const Dinero& d) {\n        long long c = d.centimos % 100;\n        return os << d.centimos / 100 << "," << (c < 10 ? "0" : "") << c << " €";\n    }\nprivate:\n    long long centimos;\n};\n\nint main() {\n    Dinero cafe(150), tostada(225);\n    Dinero total = cafe * 2 + tostada;\n    std::cout << total << "\\n";             // 5,25 €\n    std::cout << (total < Dinero(500));     // 0\n}` },
      ],
      x: [
        mc('¿Cómo se llama la función que define el operador `+` de una clase?', ['operator+', 'plus', 'add', '__add__'], 'Se escribe `operator` seguido del símbolo. `__add__` es de Python.'),
        out(`struct Vec2 {\n    int x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n};\n\nVec2 a{1, 2}, b{3, 4};\nVec2 c = a + b;\nstd::cout << c.x << c.y;`, ['46', '13', '24', 'Error'], '`a + b` llama a `operator+`: x = 1 + 3 = 4 e y = 2 + 4 = 6.'),
        fill(`std::ostream& operator___(std::ostream& os, const Punto& p) {\n    return os << p.x << "," << p.y;\n}`, ['<<', '>>', '+', '()'], 'Para usar `std::cout << p` hay que sobrecargar `operator<<`.'),
        out(`struct Sumador {\n    int base;\n    int operator()(int x) const { return base + x; }\n};\n\nSumador s{10};\nstd::cout << s(5) << s(s(1));`, ['1521', '1511', '1520', 'Error'], '`s(5)` = 15. `s(1)` = 11 y `s(11)` = 21. Se imprimen seguidos: 1521.'),
        mc('¿Por qué `operator<<` devuelve `std::ostream&`?', ['Para poder encadenar varios << seguidos', 'Porque el compilador lo exige siempre', 'Para que sea más rápido', 'Para poder leer del teclado'], '`std::cout << a << b` funciona porque `(std::cout << a)` devuelve otra vez el flujo.'),
        typ('Pide al compilador que genere la comparación == (C++20)', `struct P {\n    int x, y;\n    bool operator==(const P&) const = ___;\n};`, 'default', '`= default` genera una comparación miembro a miembro.'),
        out(`struct Tarea {\n    std::string nombre;\n    int prioridad;\n    bool operator<(const Tarea& o) const { return prioridad < o.prioridad; }\n};\n\nstd::vector<Tarea> v = {{"b", 3}, {"a", 1}, {"c", 2}};\nstd::sort(v.begin(), v.end());\nfor (const auto& t : v) std::cout << t.nombre;`, ['acb', 'abc', 'bca', 'cab'], '`std::sort` usa `operator<`, que ordena por prioridad: 1 (a), 2 (c), 3 (b).'),
        // Reto final
        out(`struct Euros {\n    int cent;\n    Euros operator+(const Euros& o) const { return {cent + o.cent}; }\n    Euros& operator+=(const Euros& o) { cent += o.cent; return *this; }\n    bool operator<(const Euros& o) const { return cent < o.cent; }\n};\n\nEuros a{250}, b{199};\nEuros c = a + b;\nc += Euros{51};\nstd::cout << c.cent / 100 << "." << c.cent % 100 << " " << (a < b) << (b < c);`, ['5.0 01', '5.00 01', '5.0 10', '4.99 01'], '250 + 199 + 51 = 500 céntimos. 500 % 100 vale 0 y se imprime "0", no "00". `a < b` es falso (0) y `b < c` verdadero (1).'),
      ],
    },
    // ───────────────────────── Día 22
    {
      id: 'cpp-templates',
      t: 'Plantillas',
      d: 'template, typename, plantillas de función y de clase.',
      guide: [
        { h: 'El problema de repetir código', p: [
          'Si quieres una función `mayor` para `int`, otra para `double` y otra para `std::string`, acabarías escribiendo tres veces lo mismo.',
          'Las plantillas (templates) permiten escribir el código una vez con un tipo genérico. El compilador genera la versión concreta para cada tipo que uses.' ] },
        { h: 'Plantillas de función', p: [
          '`template <typename T>` declara un parámetro de tipo llamado `T`. Al llamar a la función, el compilador deduce `T` a partir de los argumentos.',
          'Si los argumentos no encajan (`mayor(3, 2.5)`: ¿`T` es `int` o `double`?), no compila. Puedes indicar el tipo a mano: `mayor<double>(3, 2.5)`.' ],
          code: `template <typename T>\nT mayor(T a, T b) {\n    return a > b ? a : b;\n}\n\nstd::cout << mayor(3, 7) << "\\n";        // 7\nstd::cout << mayor(2.5, 1.5) << "\\n";    // 2.5\nstd::cout << mayor<double>(3, 2.5);      // 3` },
        { h: 'Plantillas de clase', p: [
          'Una clase también puede ser una plantilla. Al usarla se indica el tipo entre `< >`: `Caja<int>`.',
          'Ya las conoces: `std::vector<int>`, `std::map<std::string, int>` y `std::array<double, 7>` son plantillas de la biblioteca estándar.' ],
          code: `template <typename T>\nclass Caja {\npublic:\n    explicit Caja(T valor) : valor(valor) {}\n    T obtener() const { return valor; }\nprivate:\n    T valor;\n};\n\nCaja<int> a(42);\nCaja<std::string> b("hola");\nstd::cout << a.obtener() << " " << b.obtener();  // 42 hola` },
        { h: 'Varios parámetros y valores constantes', p: [
          'Una plantilla puede tener varios tipos (`template <typename K, typename V>`) y también valores constantes conocidos al compilar, como un tamaño.',
          'El código de una plantilla se genera al compilar, así que no cuesta nada al ejecutar. Por eso las plantillas suelen escribirse enteras en los archivos `.h`.' ],
          code: `template <typename T, int N>\nclass Buffer {\npublic:\n    int capacidad() const { return N; }\nprivate:\n    T datos[N];\n};\n\nBuffer<double, 8> b;\nstd::cout << b.capacidad();  // 8` },
        { h: 'Ejemplo real: estadísticas para cualquier tipo de dato', real: true, p: [
          'Un panel de métricas calcula medias de visitas (enteros) y de temperaturas (decimales). Una sola plantilla sirve para los dos casos y para cualquier tipo numérico futuro.' ],
          code: `#include <iostream>\n#include <vector>\n\ntemplate <typename T>\ndouble media(const std::vector<T>& v) {\n    if (v.empty()) return 0;\n    T suma{};\n    for (const T& x : v) suma += x;\n    return static_cast<double>(suma) / v.size();\n}\n\nint main() {\n    std::vector<int> visitas = {120, 95, 143};\n    std::vector<double> temperaturas = {21.5, 23.0, 19.5};\n    std::cout << media(visitas) << "\\n";       // 119.333\n    std::cout << media(temperaturas) << "\\n";  // 21.3333\n}` },
      ],
      x: [
        fill(`___ <typename T>\nT doble(T x) {\n    return x * 2;\n}`, ['template', 'generic', 'typename', 'auto'], 'Las plantillas empiezan con `template <typename T>`.'),
        out(`template <typename T>\nT mayor(T a, T b) { return a > b ? a : b; }\n\nstd::cout << mayor(4, 9) << mayor('a', 'z');`, ['9z', '4a', '9a', 'Error'], 'Se genera una versión para `int` (9) y otra para `char` (\'z\' va después de \'a\').'),
        mc('Con `template <typename T> T mayor(T a, T b)`, ¿qué pasa con `mayor(3, 2.5)`?', ['No compila: T no puede ser int y double a la vez', 'Devuelve 3', 'Devuelve 2.5', 'Convierte los dos a int'], 'Se arregla indicando el tipo: `mayor<double>(3, 2.5)`.'),
        typ('Crea una Caja que guarde un double', `template <typename T>\nclass Caja { /* ... */ };\n\nCaja<___> c(3.14);`, 'double', 'El tipo concreto se indica entre `< >` al usar la plantilla de clase.'),
        out(`template <typename T>\nT suma3(T a, T b, T c) { return a + b + c; }\n\nstd::cout << suma3(1, 2, 3) << " " << suma3<std::string>("a", "b", "c");`, ['6 abc', '6 6', '123 abc', 'Error'], 'Con `int` se suman números; con `std::string`, `+` concatena.'),
        mc('¿Cuándo genera el compilador el código de una plantilla?', ['Cuando se usa con un tipo concreto', 'Al leer la palabra template', 'Mientras se ejecuta el programa', 'Nunca: las plantillas se interpretan'], 'Por cada tipo distinto con el que la usas, genera una versión.'),
        out(`template <int N>\nint potencia(int base) {\n    int r = 1;\n    for (int i = 0; i < N; i++) r *= base;\n    return r;\n}\n\nstd::cout << potencia<3>(2) + potencia<2>(5);`, ['33', '13', '31', 'Error'], '`potencia<3>(2)` = 8 y `potencia<2>(5)` = 25: suman 33.'),
        // Reto final
        out(`template <typename T>\nclass Pila {\npublic:\n    void meter(T x) { datos.push_back(x); }\n    T sacar() { T x = datos.back(); datos.pop_back(); return x; }\n    bool vacia() const { return datos.empty(); }\nprivate:\n    std::vector<T> datos;\n};\n\nPila<std::string> p;\np.meter("a");\np.meter("b");\np.meter("c");\nstd::string r;\nwhile (!p.vacia()) r += p.sacar();\nPila<int> q;\nq.meter(r.size());\nstd::cout << r << q.sacar();`, ['cba3', 'abc3', 'cba0', 'abc0'], 'Una pila saca primero lo último que entró: c, b, a. El texto "cba" tiene 3 caracteres y se guarda en la `Pila<int>`.'),
      ],
    },
    // ───────────────────────── Día 23
    {
      id: 'cpp-exceptions',
      t: 'Excepciones',
      d: 'throw, try, catch, excepciones estándar y excepciones propias.',
      guide: [
        { h: 'Errores que no se pueden ignorar', p: [
          'Cuando una función no puede hacer su trabajo, puede lanzar una excepción con `throw`. La ejecución salta al `catch` más cercano que la acepte.',
          'El código que puede fallar va dentro de `try`. Si nadie captura la excepción, el programa termina.' ],
          code: `#include <stdexcept>\n\ndouble dividir(double a, double b) {\n    if (b == 0) throw std::invalid_argument("división entre cero");\n    return a / b;\n}\n\ntry {\n    std::cout << dividir(10, 2) << "\\n";  // 5\n    std::cout << dividir(1, 0) << "\\n";   // lanza: esta línea no imprime nada\n} catch (const std::invalid_argument& e) {\n    std::cout << "Error: " << e.what() << "\\n";\n}` },
        { h: 'Excepciones estándar', p: [
          'La cabecera `<stdexcept>` ofrece `std::runtime_error`, `std::invalid_argument` y `std::out_of_range`, entre otras. Todas heredan de `std::exception`, cuyo método `what()` devuelve el mensaje.',
          'La biblioteca estándar las usa: `std::stoi("hola")` lanza `std::invalid_argument` y `v.at(10)` lanza `std::out_of_range`.' ],
          code: `try {\n    int n = std::stoi("hola");\n} catch (const std::invalid_argument&) {\n    std::cout << "No es un número\\n";\n}\n\nstd::vector<int> v = {1, 2, 3};\ntry {\n    v.at(10);\n} catch (const std::out_of_range&) {\n    std::cout << "Índice fuera de rango\\n";\n}` },
        { h: 'Varios catch y su orden', p: [
          'Un `try` puede tener varios `catch`. Se prueba el primero que encaje, de arriba abajo, así que los tipos más concretos van antes que `std::exception`.',
          '`catch (...)` captura cualquier cosa y debe ir el último. Captura siempre por referencia constante (`const std::exception& e`) para no copiar el objeto ni perder información.' ] },
        { h: 'Excepciones propias y RAII', p: [
          'Puedes crear tus excepciones heredando de una estándar. Así quien las capture sabe exactamente qué falló.',
          'Cuando se lanza una excepción, se destruyen los objetos locales de cada función por la que pasa. Gracias a RAII, los recursos se liberan igualmente.',
          '`noexcept` marca funciones que prometen no lanzar nada, como los destructores.' ],
          code: `class SaldoInsuficiente : public std::runtime_error {\npublic:\n    SaldoInsuficiente() : std::runtime_error("saldo insuficiente") {}\n};\n\nvoid retirar(double& saldo, double cantidad) {\n    if (cantidad > saldo) throw SaldoInsuficiente();\n    saldo -= cantidad;\n}` },
        { h: 'Ejemplo real: validar la edad que escribe un usuario', real: true, p: [
          'Un formulario recibe la edad como texto. Puede no ser un número o estar fuera de rango, y cada caso merece un mensaje distinto.',
          'Fíjate en que primero se calcula la edad y después se imprime: así no queda un "Edad:" a medias si la conversión falla.' ],
          code: `#include <iostream>\n#include <stdexcept>\n#include <string>\n\nint leer_edad(const std::string& texto) {\n    int edad = std::stoi(texto);           // puede lanzar invalid_argument\n    if (edad < 0 || edad > 120)\n        throw std::out_of_range("edad fuera de rango");\n    return edad;\n}\n\nint main() {\n    for (std::string entrada : {"34", "abc", "200"}) {\n        try {\n            int edad = leer_edad(entrada);\n            std::cout << "Edad: " << edad << "\\n";\n        } catch (const std::invalid_argument&) {\n            std::cout << "'" << entrada << "' no es un número\\n";\n        } catch (const std::out_of_range& e) {\n            std::cout << e.what() << "\\n";\n        }\n    }\n}\n// Edad: 34\n// 'abc' no es un número\n// edad fuera de rango` },
      ],
      x: [
        fill(`if (b == 0)\n    ___ std::invalid_argument("b es cero");`, ['throw', 'raise', 'catch', 'error'], 'En C++ las excepciones se lanzan con `throw`. `raise` es de Python.'),
        mc('¿Qué método de `std::exception` devuelve el mensaje del error?', ['what()', 'message()', 'getMessage()', 'error()'], 'Todas las excepciones estándar tienen `what()`.'),
        out(`try {\n    std::cout << "A";\n    throw std::runtime_error("x");\n    std::cout << "B";\n} catch (const std::exception& e) {\n    std::cout << "C";\n}\nstd::cout << "D";`, ['ACD', 'ABCD', 'AC', 'ABD'], 'Tras el `throw` no se ejecuta el resto del `try`. Se ejecuta el `catch` y el programa continúa después.'),
        out(`std::vector<int> v = {1, 2, 3};\ntry {\n    std::cout << v.at(5);\n} catch (const std::out_of_range&) {\n    std::cout << "fuera";\n}`, ['fuera', '0', 'Basura', 'Error de compilación'], '`at` comprueba el índice y lanza `std::out_of_range`.'),
        mc('¿Cómo conviene capturar las excepciones?', ['Por referencia constante: catch (const std::exception& e)', 'Por valor: catch (std::exception e)', 'Con un puntero: catch (std::exception* e)', 'Da igual cómo'], 'Por referencia no se copia el objeto ni se pierde la parte de la clase derivada.'),
        typ('Escribe el catch que captura cualquier excepción', `try {\n    procesar();\n} catch (___) {\n    std::cout << "Error desconocido";\n}`, '...', '`catch (...)` lo captura todo y debe ir el último.'),
        out(`try {\n    throw std::out_of_range("x");\n} catch (const std::invalid_argument&) {\n    std::cout << 1;\n} catch (const std::exception&) {\n    std::cout << 2;\n} catch (...) {\n    std::cout << 3;\n}`, ['2', '1', '3', '23'], '`out_of_range` no es un `invalid_argument`, pero sí hereda de `std::exception`. Solo se ejecuta el primer `catch` que encaja.'),
        // Reto final
        out(`struct R {\n    char c;\n    R(char c) : c(c) {}\n    ~R() { std::cout << c; }\n};\n\nvoid f(int n) {\n    R r('f');\n    if (n > 1) throw std::runtime_error("grande");\n    std::cout << "ok";\n}\n\nint main() {\n    try {\n        R a('a');\n        f(1);\n        f(2);\n        std::cout << "fin";\n    } catch (const std::exception& e) {\n        std::cout << "[" << e.what() << "]";\n    }\n}`, ['okffa[grande]', 'okf[grande]fa', 'okff[grande]a', 'okffafin'], '`f(1)` imprime "ok" y al salir destruye `r` (f). `f(2)` lanza: se destruyen `r` (f) y `a` (a) antes de entrar en el `catch`, que imprime [grande]. "fin" nunca se imprime.'),
      ],
    },
    // ───────────────────────── Día 24
    {
      id: 'cpp-stl',
      t: 'Algoritmos de la STL',
      d: 'sort, reverse, find, count, max_element y accumulate.',
      guide: [
        { h: '<algorithm>: no reinventes la rueda', p: [
          'La biblioteca estándar trae decenas de algoritmos probados y optimizados. Trabajan sobre un rango indicado con dos iteradores: `v.begin()` y `v.end()`.',
          '`std::sort` ordena de menor a mayor; con `std::greater<int>()` ordena al revés. `std::reverse` da la vuelta a los elementos.' ],
          code: `#include <algorithm>\n\nstd::vector<int> v = {5, 2, 8, 1};\nstd::sort(v.begin(), v.end());                       // 1 2 5 8\nstd::sort(v.begin(), v.end(), std::greater<int>());  // 8 5 2 1\nstd::reverse(v.begin(), v.end());                    // 1 2 5 8` },
        { h: 'Buscar y contar', p: [
          '`std::find` devuelve un iterador al primer elemento igual al buscado, o `end()` si no lo encuentra. Restando `begin()` obtienes su posición.',
          '`std::count` cuenta apariciones. `std::max_element` y `std::min_element` devuelven un iterador: usa `*` para leer el valor.' ],
          code: `std::vector<int> notas = {7, 9, 4, 9, 6};\nauto it = std::find(notas.begin(), notas.end(), 4);\nif (it != notas.end())\n    std::cout << "4 en la posición " << it - notas.begin() << "\\n";  // 2\nstd::cout << std::count(notas.begin(), notas.end(), 9) << "\\n";      // 2\nstd::cout << *std::max_element(notas.begin(), notas.end());          // 9` },
        { h: 'accumulate y <numeric>', p: [
          '`std::accumulate` (cabecera `<numeric>`) suma todos los elementos a partir de un valor inicial.',
          'Cuidado: el tipo del resultado es el del valor inicial. Con `0` suma en `int` y pierde los decimales; con `0.0` suma en `double`.' ],
          code: `#include <numeric>\n\nstd::vector<double> precios = {1.5, 2.5, 3.0};\nstd::cout << std::accumulate(precios.begin(), precios.end(), 0.0) << "\\n";  // 7\nstd::cout << std::accumulate(precios.begin(), precios.end(), 0);           // 6: ¡suma en int!` },
        { h: 'Ranges (C++20)', p: [
          'C++20 añade versiones en `std::ranges` que reciben el contenedor entero, sin `begin()` ni `end()`: `std::ranges::sort(v)`.',
          'Son más cortas y difíciles de usar mal. Mañana verás cómo combinarlas con lambdas para filtrar y transformar.' ],
          code: `std::vector<int> v = {3, 1, 2};\nstd::ranges::sort(v);                  // 1 2 3\nauto it = std::ranges::find(v, 2);\nstd::cout << *std::ranges::max_element(v);  // 3` },
        { h: 'Ejemplo real: ranking de ventas', real: true, p: [
          'El encargado de una tienda revisa las ventas de la semana: total, mejor día, cuántos días se vendió exactamente lo mismo y los tres mejores importes. Sin un solo bucle escrito a mano.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <numeric>\n#include <vector>\n\nint main() {\n    std::vector<int> ventas = {320, 150, 480, 150, 275};\n    int total = std::accumulate(ventas.begin(), ventas.end(), 0);\n    auto mejor = std::max_element(ventas.begin(), ventas.end());\n    std::cout << "Total: " << total << "\\n";                                  // 1375\n    std::cout << "Mejor día: " << (mejor - ventas.begin()) + 1 << "\\n";       // 3\n    std::cout << "Días con 150: " << std::count(ventas.begin(), ventas.end(), 150) << "\\n";  // 2\n    std::sort(ventas.begin(), ventas.end(), std::greater<int>());\n    std::cout << "Top 3: " << ventas[0] << " " << ventas[1] << " " << ventas[2] << "\\n";  // 480 320 275\n}` },
      ],
      x: [
        mc('¿Qué cabecera contiene `std::sort`?', ['<algorithm>', '<vector>', '<sort>', '<numeric>'], '`<numeric>` contiene `accumulate`; `<algorithm>`, casi todo lo demás.'),
        out(`std::vector<int> v = {3, 1, 2};\nstd::sort(v.begin(), v.end());\nstd::cout << v[0] << v[2];`, ['13', '32', '31', '12'], 'Ordenado queda {1, 2, 3}: el primero es 1 y el último 3.'),
        fill(`std::vector<int> v = {4, 5, 6};\nint total = std::___(v.begin(), v.end(), 0);  // 15`, ['accumulate', 'sum', 'add_all', 'total'], '`std::accumulate` suma el rango empezando por el valor inicial.'),
        out(`std::vector<int> v = {4, 9, 2, 9};\nauto it = std::max_element(v.begin(), v.end());\nstd::cout << *it << " " << it - v.begin();`, ['9 1', '9 3', '4 0', '9 2'], 'Si hay empate, `max_element` devuelve el primero: el 9 de la posición 1.'),
        out(`std::vector<double> v = {0.5, 0.5, 0.5};\nstd::cout << std::accumulate(v.begin(), v.end(), 0);`, ['0', '1.5', '1', 'Error'], 'El valor inicial `0` es `int`: cada suma parcial (0 + 0.5) se trunca a 0.'),
        typ('Comprueba si find no encontró el valor', `auto it = std::find(v.begin(), v.end(), 7);\nif (it == v.___()) std::cout << "no está";`, 'end', 'Si no encuentra el valor, `find` devuelve `end()`.'),
        out(`std::string s = "radar";\nstd::string r = s;\nstd::reverse(r.begin(), r.end());\nstd::cout << (r == s) << std::count(s.begin(), s.end(), 'a');`, ['12', '02', '11', 'Error'], '"radar" es un palíndromo: al revés es igual (1). Tiene dos letras a.'),
        // Reto final
        out(`std::vector<int> v = {5, 3, 8, 3, 1};\nstd::sort(v.begin(), v.end(), std::greater<int>());\nstd::reverse(v.begin(), v.begin() + 2);\nint s = std::accumulate(v.begin() + 1, v.end(), 0);\nauto it = std::find(v.begin(), v.end(), 3);\nstd::cout << v[0] << " " << s << " " << (it - v.begin());`, ['5 15 2', '8 15 2', '5 20 2', '5 15 3'], 'Orden descendente: {8, 5, 3, 3, 1}. Invertir los dos primeros: {5, 8, 3, 3, 1}. La suma desde la posición 1 es 8 + 3 + 3 + 1 = 15 y el primer 3 está en la posición 2.'),
      ],
    },
    // ───────────────────────── Día 25
    {
      id: 'cpp-iterators',
      t: 'Iteradores y lambdas',
      d: 'begin, end, lambdas, capturas por copia y por referencia.',
      guide: [
        { h: 'Iteradores', p: [
          'Un iterador señala una posición dentro de un contenedor, como un puntero generalizado. `*it` lee el elemento y `++it` avanza.',
          '`begin()` apunta al primer elemento y `end()` a la posición siguiente al último: nunca hay que desreferenciar `end()`.',
          'Funcionan igual con `vector`, `list`, `set` o `map`. En un map, `it->first` es la clave e `it->second` el valor.' ],
          code: `std::vector<std::string> nombres = {"Ana", "Luis", "Eva"};\nfor (auto it = nombres.begin(); it != nombres.end(); ++it)\n    std::cout << *it << " ";   // Ana Luis Eva\nauto ultimo = nombres.end() - 1;\nstd::cout << *ultimo;          // Eva` },
        { h: 'Lambdas', p: [
          'Una lambda es una función sin nombre que se escribe donde se necesita: `[](parámetros) { cuerpo }`.',
          'Se pueden guardar en una variable con `auto` o pasar directamente a un algoritmo, por ejemplo para indicar a `std::sort` cómo ordenar.' ],
          code: `auto cuadrado = [](int x) { return x * x; };\nstd::cout << cuadrado(5) << "\\n";  // 25\n\nstd::vector<int> v = {5, -2, 8, -1};\nstd::sort(v.begin(), v.end(), [](int a, int b) {\n    return std::abs(a) < std::abs(b);   // ordenar por valor absoluto\n});\n// -1 -2 5 8` },
        { h: 'Capturas', p: [
          'Entre los corchetes se indica qué variables de fuera puede usar la lambda. `[x]` copia `x` en el momento de crear la lambda; `[&x]` la usa por referencia y puede modificarla.',
          '`[=]` captura por copia todo lo que use y `[&]` todo por referencia. Mejor captura solo lo que necesitas: el código queda más claro.' ],
          code: `int limite = 10;\nint contador = 0;\nauto contar = [limite, &contador](int x) {\n    if (x > limite) contador++;\n};\nfor (int x : {4, 15, 22, 9}) contar(x);\nstd::cout << contador;  // 2` },
        { h: 'Algoritmos con lambdas', p: [
          '`std::count_if` cuenta los elementos que cumplen una condición y `std::find_if` busca el primero que la cumple.',
          '`std::transform` aplica una función a cada elemento. `std::erase_if` (C++20) borra los que cumplen una condición.' ],
          code: `std::vector<int> v = {3, 8, 12, 5, 20};\nint grandes = std::count_if(v.begin(), v.end(), [](int x) { return x > 6; });   // 3\nauto par = std::find_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });  // apunta al 8\nstd::transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });\n// 30 80 120 50 200\nstd::erase_if(v, [](int x) { return x > 100; });   // 30 80 50` },
        { h: 'Ejemplo real: filtrar y ordenar un catálogo', real: true, p: [
          'Una tienda online quita los productos agotados, ordena el resto por precio y cuenta cuántos entran en el presupuesto del cliente. La lambda `asequible` captura el presupuesto por copia.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <string>\n#include <vector>\n\nstruct Producto { std::string nombre; double precio; int stock; };\n\nint main() {\n    std::vector<Producto> catalogo = {\n        {"Auriculares", 59.9, 12}, {"Cable USB", 7.5, 0},\n        {"Teclado", 35.0, 4}, {"Monitor", 189.0, 2}};\n    double presupuesto = 100;\n\n    std::erase_if(catalogo, [](const Producto& p) { return p.stock == 0; });\n    std::sort(catalogo.begin(), catalogo.end(),\n              [](const Producto& a, const Producto& b) { return a.precio < b.precio; });\n    auto asequible = [presupuesto](const Producto& p) { return p.precio <= presupuesto; };\n\n    for (const auto& p : catalogo) std::cout << p.nombre << " ";  // Teclado Auriculares Monitor\n    std::cout << "\\nAsequibles: " << std::count_if(catalogo.begin(), catalogo.end(), asequible);  // 2\n}` },
      ],
      x: [
        mc('¿A qué apunta `v.end()`?', ['A la posición siguiente al último elemento', 'Al último elemento', 'Al primer elemento', 'A nullptr'], 'Por eso los bucles usan `it != v.end()` y nunca se lee `*v.end()`.'),
        out(`auto suma = [](int a, int b) { return a + b; };\nstd::cout << suma(2, 3) * 2;`, ['10', '7', '8', 'Error'], 'La lambda devuelve 5 y se multiplica por 2.'),
        fill(`int total = 0;\nauto sumar = [___total](int x) { total += x; };`, ['&', '=', '*', 'this'], 'Para modificar `total` hay que capturarla por referencia.'),
        out(`int x = 1;\nauto f = [x]() { return x * 10; };\nx = 5;\nstd::cout << f();`, ['10', '50', '1', 'Error'], 'La captura por copia guarda el valor que tenía `x` al crear la lambda: 1.'),
        out(`std::vector<int> v = {1, 4, 7, 10, 13};\nstd::cout << std::count_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });`, ['2', '3', '5', '14'], 'Solo 4 y 10 son pares.'),
        typ('Busca el primer elemento negativo', `auto it = std::___(v.begin(), v.end(), [](int x) { return x < 0; });`, 'find_if', '`find_if` devuelve el primer elemento que cumple la condición.'),
        ord('Escribe una lambda que devuelve el doble de x', ['[]', '(int x)', '{', 'return', 'x * 2;', '}'], ['def', '=>'], 'Corchetes de captura, parámetros y cuerpo entre llaves.'),
        // Reto final
        out(`std::vector<int> v = {4, 1, 7, 2, 9};\nint umbral = 3, veces = 0;\nstd::sort(v.begin(), v.end(), [&veces](int a, int b) { veces++; return a > b; });\nstd::erase_if(v, [umbral](int x) { return x < umbral; });\nstd::transform(v.begin(), v.end(), v.begin(), [](int x) { return x - 1; });\nstd::cout << v.size() << " " << v.front() << v.back() << " " << (veces > 0);`, ['3 83 1', '3 93 1', '5 83 1', '3 38 1'], 'Orden descendente: {9, 7, 4, 2, 1}. Se borran los menores que 3: {9, 7, 4}. Se resta 1: {8, 6, 3}. `veces` se modificó por referencia, así que es mayor que 0.'),
      ],
    },
    // ───────────────────────── Día 26
    {
      id: 'cpp-smart-pointers',
      t: 'Smart pointers',
      d: 'unique_ptr, shared_ptr, weak_ptr y RAII.',
      guide: [
        { h: 'Adiós a delete', p: [
          'Los smart pointers (cabecera `<memory>`) son objetos que se comportan como punteros y liberan la memoria en su destructor. Es RAII aplicado a la memoria dinámica.',
          'En C++ moderno casi nunca se escribe `new` ni `delete`: se usan `std::make_unique` y `std::make_shared`.' ] },
        { h: 'unique_ptr: un único dueño', p: [
          '`std::unique_ptr` es el dueño exclusivo de un objeto. Cuando se destruye, libera el objeto.',
          'No se puede copiar (habría dos dueños), pero sí mover con `std::move`: la propiedad pasa al nuevo puntero y el antiguo queda en `nullptr`. Es la opción por defecto.' ],
          code: `#include <memory>\n\nauto p = std::make_unique<int>(42);\nstd::cout << *p << "\\n";              // 42\n// auto q = p;                        // error: no se puede copiar\nauto q = std::move(p);                // la propiedad pasa a q\nstd::cout << (p == nullptr) << "\\n";  // 1\n// al salir del bloque, q libera la memoria` },
        { h: 'shared_ptr: propiedad compartida', p: [
          '`std::shared_ptr` permite varios dueños. Lleva la cuenta de cuántos hay (`use_count()`) y libera el objeto cuando desaparece el último.',
          'Es algo más lento que `unique_ptr`: úsalo solo cuando la propiedad sea compartida de verdad.' ],
          code: `auto a = std::make_shared<std::string>("informe.pdf");\n{\n    auto b = a;                          // dos dueños\n    std::cout << a.use_count() << "\\n";  // 2\n}                                        // b desaparece\nstd::cout << a.use_count() << "\\n";      // 1` },
        { h: 'weak_ptr y los ciclos', p: [
          'Si dos objetos se apuntan entre sí con `shared_ptr`, la cuenta nunca llega a 0 y ninguno se libera: es una fuga.',
          '`std::weak_ptr` observa un objeto compartido sin ser dueño. Para usarlo se llama a `lock()`, que devuelve un `shared_ptr` (vacío si el objeto ya no existe).' ],
          code: `std::weak_ptr<int> w;\n{\n    auto s = std::make_shared<int>(7);\n    w = s;\n    if (auto p = w.lock()) std::cout << *p << "\\n";  // 7\n}\nstd::cout << w.expired();  // 1: el objeto ya no existe` },
        { h: 'Ejemplo real: figuras polimórficas sin fugas', real: true, p: [
          'Un programa de planos guarda figuras de distintos tipos en un mismo vector. Con `unique_ptr` cada figura se libera sola cuando se destruye el vector, sin un solo `delete`.' ],
          code: `#include <iostream>\n#include <memory>\n#include <vector>\n\nstruct Figura {\n    virtual double area() const = 0;\n    virtual ~Figura() = default;\n};\nstruct Circulo : Figura {\n    double r;\n    explicit Circulo(double r) : r(r) {}\n    double area() const override { return 3.14159 * r * r; }\n};\nstruct Rect : Figura {\n    double a, b;\n    Rect(double a, double b) : a(a), b(b) {}\n    double area() const override { return a * b; }\n};\n\nint main() {\n    std::vector<std::unique_ptr<Figura>> plano;\n    plano.push_back(std::make_unique<Circulo>(1));\n    plano.push_back(std::make_unique<Rect>(4, 5));\n    double total = 0;\n    for (const auto& f : plano) total += f->area();\n    std::cout << "Superficie: " << total << " m2\\n";  // Superficie: 23.1416 m2\n}   // el vector se destruye y libera cada figura` },
      ],
      x: [
        mc('¿Qué smart pointer usarías para un objeto con un único dueño?', ['std::unique_ptr', 'std::shared_ptr', 'std::weak_ptr', 'Un puntero normal con new'], '`unique_ptr` es la opción por defecto: no tiene coste extra.'),
        fill(`auto p = std::___<int>(5);`, ['make_unique', 'new_unique', 'unique', 'create'], '`std::make_unique<T>(args)` crea el objeto y el `unique_ptr` a la vez.'),
        out(`auto a = std::make_shared<int>(1);\nauto b = a;\nauto c = b;\nstd::cout << a.use_count();`, ['3', '1', '2', '0'], '`a`, `b` y `c` comparten el mismo objeto: tres dueños.'),
        mc('Si `p` es un `std::unique_ptr`, ¿qué ocurre con `auto q = p;`?', ['No compila: un unique_ptr no se puede copiar', 'Los dos comparten el objeto', 'Se copia el objeto apuntado', 'p pasa a valer nullptr'], 'Para cambiar de dueño hay que moverlo: `auto q = std::move(p);`.'),
        typ('Transfiere la propiedad de p a q', `auto p = std::make_unique<int>(3);\nauto q = std::___(p);`, 'move', 'Tras `std::move`, `q` es el dueño y `p` queda en `nullptr`.'),
        out(`struct T {\n    ~T() { std::cout << "x"; }\n};\n\nint main() {\n    auto a = std::make_shared<T>();\n    {\n        auto b = a;\n        std::cout << "1";\n    }\n    std::cout << "2";\n    a.reset();\n    std::cout << "3";\n}`, ['12x3', '1x23', '123x', 'x123'], 'Al salir del bloque `b` desaparece, pero `a` sigue siendo dueño. `a.reset()` suelta al último dueño y el objeto se destruye en ese momento.'),
        mc('¿Para qué sirve `std::weak_ptr`?', ['Para observar un objeto compartido sin mantenerlo vivo y romper ciclos', 'Para tener un único dueño', 'Para punteros que nunca son nulos', 'Para reservar arrays'], 'Un `weak_ptr` no cuenta en `use_count()`.'),
        // Reto final
        out(`auto s = std::make_shared<int>(10);\nstd::weak_ptr<int> w = s;\nauto s2 = s;\n*s2 += 5;\nstd::cout << *s << s.use_count();\ns.reset();\nstd::cout << " " << w.expired();\ns2.reset();\nstd::cout << w.expired();`, ['152 01', '153 01', '152 11', '152 00'], '`s` y `s2` comparten el entero, que pasa a 15; el `weak_ptr` no cuenta, así que hay 2 dueños. Tras soltar `s` aún queda `s2` (0); tras soltar `s2` el objeto se destruye (1).'),
      ],
    },
    // ───────────────────────── Día 27
    {
      id: 'cpp-move',
      t: 'Semántica de movimiento',
      d: 'lvalues, rvalues, std::move, constructor de movimiento y la regla del cero.',
      guide: [
        { h: 'Copiar sale caro', p: [
          'Copiar un vector con un millón de elementos copia el millón de elementos. Pero si el original ya no se va a usar, basta con quedarse con su memoria interna: eso es mover.',
          'Mover un `std::vector` o un `std::string` solo copia unos pocos punteros, tenga el tamaño que tenga.' ] },
        { h: 'lvalues y rvalues', p: [
          'Un lvalue es algo con nombre y dirección, como una variable. Un rvalue es un valor temporal, como el resultado de `a + b`, que desaparece al terminar la instrucción.',
          'Una referencia a rvalue (`T&&`) solo se puede enlazar con temporales. Así una función sabe que puede "robar" el contenido sin que nadie lo note.' ],
          code: `std::string a = "hola";\nstd::string& r1 = a;          // lvalue: a tiene nombre\nstd::string&& r2 = a + "!";   // rvalue: un temporal\n// std::string&& r3 = a;      // error: a no es un temporal` },
        { h: 'std::move', p: [
          '`std::move(x)` no mueve nada por sí solo: convierte `x` en un rvalue para que se elija la versión que mueve.',
          'Después de moverlo, el objeto original sigue siendo válido pero su contenido no está garantizado (un vector movido queda vacío). Solo vuelve a usarlo después de asignarle un valor nuevo.' ],
          code: `std::vector<int> grande(1'000'000, 7);\nstd::vector<int> destino = std::move(grande);  // se lleva la memoria, sin copiar\nstd::cout << destino.size() << " " << grande.size();  // 1000000 0` },
        { h: 'Constructor de movimiento y la regla del cero', p: [
          'Si tu clase gestiona un recurso a mano (un `new[]`), necesita destructor, copia y movimiento escritos por ti: es la regla de los cinco. El constructor de movimiento se queda con el recurso y deja al original vacío.',
          'Mucho mejor es la regla del cero: si los miembros se gestionan solos (`std::string`, `std::vector`, `std::unique_ptr`), no escribas nada de eso. El compilador genera la copia y el movimiento correctos.' ],
          code: `class Buffer {   // gestiona memoria a mano: regla de los cinco\npublic:\n    explicit Buffer(std::size_t n) : datos(new int[n]), n(n) {}\n    Buffer(Buffer&& otro) noexcept : datos(otro.datos), n(otro.n) {\n        otro.datos = nullptr;   // el original deja de ser dueño\n        otro.n = 0;\n    }\n    ~Buffer() { delete[] datos; }\n    // ... faltarían la copia y las asignaciones\nprivate:\n    int* datos;\n    std::size_t n;\n};\n\nclass Playlist {   // regla del cero: nada que escribir\n    std::string nombre;\n    std::vector<std::string> canciones;\n};` },
        { h: 'Ejemplo real: generar registros sin copias', real: true, p: [
          'Un servicio genera cien mil registros de pedidos. Cada línea se mueve al vector en lugar de copiarse, y el vector completo se devuelve por valor: el compilador lo mueve o elimina la copia.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nstd::vector<std::string> generar_registros(int n) {\n    std::vector<std::string> registros;\n    registros.reserve(n);\n    for (int i = 1; i <= n; i++) {\n        std::string linea = "pedido-" + std::to_string(i);\n        registros.push_back(std::move(linea));   // mueve en vez de copiar\n    }\n    return registros;   // no se copia el vector\n}\n\nint main() {\n    auto registros = generar_registros(100000);\n    std::cout << registros.size() << " " << registros.back() << "\\n";  // 100000 pedido-100000\n}` },
      ],
      x: [
        mc('¿Qué hace realmente `std::move(x)`?', ['Convierte x en un rvalue para que pueda moverse; no mueve nada por sí solo', 'Copia x en otra posición de memoria', 'Borra x', 'Lleva x al heap'], 'El movimiento lo hace el constructor o la asignación de movimiento que se elige gracias a esa conversión.'),
        out(`std::vector<int> a = {1, 2, 3};\nstd::vector<int> b = std::move(a);\nstd::cout << b.size() << a.size();`, ['30', '33', '03', 'Error'], '`b` se queda con la memoria de `a`, y un vector movido queda vacío.'),
        fill(`void guardar(std::string___ s);  // solo acepta temporales`, ['&&', '&', '*', '**'], '`T&&` es una referencia a rvalue: se enlaza con valores temporales.'),
        mc('¿Qué dice la regla del cero?', ['Si tus miembros gestionan sus recursos, no escribas destructor, copia ni movimiento', 'Las clases no deben tener atributos públicos', 'Los punteros deben inicializarse a cero', 'Nunca hay que usar new'], 'El compilador genera versiones correctas a partir de las de los miembros.'),
        typ('Añade el texto al vector sin copiarlo', `std::string linea = "dato";\nstd::vector<std::string> v;\nv.push_back(std::___(linea));`, 'move', 'Con `std::move`, `push_back` usa la versión que mueve.'),
        mc('¿Cuál de estas expresiones es un rvalue?', ['a + b', 'a', 'v[0]', '*p'], '`a + b` produce un valor temporal sin nombre; las demás se refieren a objetos que ya existen.'),
        out(`std::string a = "hola";\nstd::string b = a;\nstd::string c = std::move(b);\nc += "!";\nstd::cout << a << " " << c;`, ['hola hola!', 'hola! hola!', 'hola hola', 'Error'], '`b` es una copia de `a`; después `c` se lleva el contenido de `b`. Ni `a` ni su contenido se ven afectados.'),
        // Reto final
        out(`struct S {\n    S() {}\n    S(const S&) { std::cout << "C"; }\n    S(S&&) noexcept { std::cout << "M"; }\n};\n\nS a;\nS b = a;\nS c = std::move(a);\nS d = S(b);\nstd::vector<S> v;\nv.reserve(2);\nv.push_back(b);\nv.push_back(std::move(c));`, ['CMCCM', 'CMCMCM', 'CCCCM', 'CMCMM'], '`b = a` copia (C) y `std::move(a)` mueve (M). `S(b)` copia (C) y, desde C++17, el temporal se construye directamente en `d`, sin mover. Con espacio reservado, `push_back(b)` copia (C) y `push_back(std::move(c))` mueve (M).'),
      ],
    },
    // ───────────────────────── Día 28
    {
      id: 'cpp-files',
      t: 'Archivos',
      d: 'ofstream, ifstream, getline, modos de apertura y formato de números.',
      guide: [
        { h: 'Escribir con ofstream', p: [
          '`std::ofstream` (cabecera `<fstream>`) abre un archivo para escribir y se usa igual que `std::cout`.',
          'Comprueba siempre que se abrió: `if (!salida)`. El archivo se cierra solo cuando el objeto se destruye (RAII).' ],
          code: `#include <fstream>\n\nstd::ofstream salida("notas.txt");\nif (!salida) {\n    std::cerr << "No se pudo abrir el archivo\\n";\n    return 1;\n}\nsalida << "Ana 8.5\\n";\nsalida << "Luis 6\\n";\n// al salir del bloque, el archivo se cierra` },
        { h: 'Leer con ifstream y getline', p: [
          '`std::ifstream` abre un archivo para leer. Con `>>` lees dato a dato, separados por espacios; con `std::getline` lees líneas completas.',
          'Pon la lectura como condición del `while`: el bucle termina solo al llegar al final del archivo o si un dato no encaja.' ],
          code: `std::ifstream entrada("notas.txt");\nstd::string nombre;\ndouble nota;\nwhile (entrada >> nombre >> nota)\n    std::cout << nombre << ": " << nota << "\\n";\n\nstd::ifstream log("app.log");\nstd::string linea;\nint errores = 0;\nwhile (std::getline(log, linea))\n    if (linea.find("ERROR") != std::string::npos) errores++;` },
        { h: 'Modos de apertura', p: [
          'Por defecto, `std::ofstream` borra el contenido del archivo al abrirlo (`std::ios::trunc`). Para añadir al final usa `std::ios::app`.',
          '`std::ios::binary` evita que se transformen los saltos de línea, necesario para imágenes o datos binarios.' ],
          code: `std::ofstream log("app.log", std::ios::app);   // añade sin borrar\nlog << "Usuario conectado\\n";` },
        { h: 'Dar formato a los números', p: [
          'La cabecera `<iomanip>` controla cómo se escriben los números, tanto en pantalla como en archivos. `std::fixed` con `std::setprecision(2)` muestra exactamente dos decimales, ideal para precios.',
          '`std::setw(n)` reserva `n` caracteres para el siguiente dato, útil para alinear columnas. `fixed` y `setprecision` se mantienen hasta que los cambies; `setw` solo afecta al siguiente dato.' ],
          code: `#include <iomanip>\n\ndouble total = 60.4879;\nstd::cout << std::fixed << std::setprecision(2) << total << "\\n";  // 60.49\nstd::cout << std::setw(8) << 3.5 << "|\\n";                        //     3.50|` },
        { h: 'Ejemplo real: procesar un CSV de gastos', real: true, p: [
          'Exportas los gastos del banco a un CSV (`fecha,concepto,importe`). El programa salta la cabecera, trocea cada línea por comas con `std::getline` y escribe un informe con dos decimales.' ],
          code: `#include <fstream>\n#include <iomanip>\n#include <iostream>\n#include <sstream>\n#include <string>\n\nint main() {\n    std::ifstream csv("gastos.csv");\n    if (!csv) { std::cerr << "Falta gastos.csv\\n"; return 1; }\n    std::string linea;\n    std::getline(csv, linea);            // salta la cabecera\n    double total = 0;\n    int filas = 0;\n    while (std::getline(csv, linea)) {\n        std::istringstream ss(linea);\n        std::string fecha, concepto, importe;\n        std::getline(ss, fecha, ',');\n        std::getline(ss, concepto, ',');\n        std::getline(ss, importe, ',');\n        total += std::stod(importe);\n        filas++;\n    }\n    std::ofstream informe("informe.txt");\n    informe << std::fixed << std::setprecision(2)\n            << filas << " gastos, total " << total << " euros\\n";\n}` },
      ],
      x: [
        mc('¿Qué clase se usa para escribir en un archivo?', ['std::ofstream', 'std::ifstream', 'std::istream', 'std::filestream'], 'La o es de output (salida) y la i de input (entrada).'),
        fill(`std::ifstream f("datos.txt");\nstd::string linea;\nwhile (std::___(f, linea)) {\n    std::cout << linea << "\\n";\n}`, ['getline', 'readline', 'read', 'nextLine'], '`std::getline` lee una línea completa y devuelve el flujo, que es falso al llegar al final.'),
        out(`std::cout << std::fixed << std::setprecision(2) << 3.14159;`, ['3.14', '3.1', '3.14159', '3.142'], 'Con `std::fixed`, `setprecision(2)` fija dos decimales.'),
        mc('¿Qué modo añade texto al final del archivo sin borrar lo que tenía?', ['std::ios::app', 'std::ios::trunc', 'std::ios::in', 'std::ios::binary'], '`app` viene de append (añadir).'),
        typ('Comprueba si el archivo no se pudo abrir', `std::ifstream f("config.txt");\nif (___f) {\n    std::cerr << "No existe";\n}`, '!', 'Un flujo que no se pudo abrir se evalúa como falso, así que `!f` es verdadero.'),
        out(`std::istringstream ss("ana,32,Madrid");\nstd::string campo;\nint n = 0;\nwhile (std::getline(ss, campo, ',')) n++;\nstd::cout << n << " " << campo;`, ['3 Madrid', '2 Madrid', '3 ana', '1 ana,32,Madrid'], 'Con la coma como separador hay tres campos, y `campo` conserva el último que se leyó.'),
        ord('Abre log.txt para añadir al final', ['std::ofstream', 'log(', '"log.txt",', 'std::ios::app', ');'], ['std::ifstream', 'std::ios::trunc'], 'Se escribe con `ofstream` y el modo `std::ios::app`.'),
        // Reto final
        out(`{\n    std::ofstream f("t.txt");\n    f << "3 4\\n5";\n}\n{\n    std::ofstream f("t.txt", std::ios::app);\n    f << " 6";\n}\nstd::ifstream in("t.txt");\nint x, suma = 0, n = 0;\nwhile (in >> x) { suma += x; n++; }\nstd::cout << n << " " << std::fixed << std::setprecision(1) << suma / static_cast<double>(n);`, ['4 4.5', '3 4.0', '2 3.5', '4 4.50'], 'El primer bloque escribe "3 4", un salto y "5"; el segundo añade " 6" sin borrar. `>>` salta espacios y saltos de línea: lee 4 números que suman 18. La media, con un decimal, es 4.5.'),
      ],
    },
    // ───────────────────────── Día 29
    {
      id: 'cpp-concurrency',
      t: 'Concurrencia',
      d: 'std::thread, join, mutex, atomic y async.',
      guide: [
        { h: 'Varios hilos a la vez', p: [
          'Un hilo (`std::thread`, cabecera `<thread>`) ejecuta una función en paralelo con el resto del programa. Así se aprovechan los varios núcleos del procesador.',
          '`join()` espera a que el hilo termine. Si un `std::thread` se destruye sin `join()` ni `detach()`, el programa termina con `std::terminate`. `std::jthread` (C++20) hace el `join` solo.',
          'El orden en que se ejecutan los hilos no está garantizado: cada ejecución puede ser distinta.' ],
          code: `#include <thread>\n\nvoid tarea(int id) {\n    std::cout << "Hilo " << id << "\\n";\n}\n\nint main() {\n    std::thread a(tarea, 1);\n    std::thread b(tarea, 2);\n    a.join();\n    b.join();   // espera a que terminen los dos\n}` },
        { h: 'Condiciones de carrera', p: [
          'Si dos hilos modifican el mismo dato a la vez sin coordinarse, hay una condición de carrera: el resultado es imprevisible y técnicamente es comportamiento indefinido.',
          '`contador++` parece una operación, pero son tres: leer, sumar y escribir. Dos hilos pueden leer el mismo valor y perder un incremento.' ] },
        { h: 'mutex y lock_guard', p: [
          'Un `std::mutex` (cabecera `<mutex>`) deja pasar a un solo hilo a la vez por la sección protegida.',
          '`std::lock_guard` bloquea el mutex al crearse y lo libera al destruirse (RAII). Así nunca te olvidas de liberarlo, ni siquiera si salta una excepción.' ],
          code: `std::mutex m;\nint contador = 0;\n\nvoid sumar() {\n    for (int i = 0; i < 100000; i++) {\n        std::lock_guard<std::mutex> lock(m);\n        contador++;\n    }\n}\n// con dos hilos ejecutando sumar(), contador acaba en 200000` },
        { h: 'atomic, async y future', p: [
          'Para un contador sencillo basta con `std::atomic<int>` (cabecera `<atomic>`): sus operaciones no se pueden interrumpir a medias.',
          '`std::async` (cabecera `<future>`) lanza una tarea y devuelve un `std::future`. `get()` espera al resultado y lo devuelve. Es la forma más cómoda de calcular algo en paralelo.' ],
          code: `std::atomic<int> visitas{0};\nvisitas++;   // seguro entre hilos\n\nauto f = std::async(std::launch::async, [] { return 6 * 7; });\n// ... el hilo principal hace otras cosas ...\nstd::cout << f.get();  // 42` },
        { h: 'Ejemplo real: sumar un vector enorme en dos mitades', real: true, p: [
          'Un análisis de datos suma diez millones de valores. Una mitad se calcula en otro hilo con `std::async` mientras el hilo principal suma la otra. `std::cref` pasa el vector por referencia para no copiarlo.' ],
          code: `#include <functional>\n#include <future>\n#include <iostream>\n#include <numeric>\n#include <vector>\n\nlong long sumar(const std::vector<int>& v, std::size_t desde, std::size_t hasta) {\n    return std::accumulate(v.begin() + desde, v.begin() + hasta, 0LL);\n}\n\nint main() {\n    std::vector<int> datos(10'000'000, 1);\n    std::size_t mitad = datos.size() / 2;\n    auto parte1 = std::async(std::launch::async, sumar, std::cref(datos), 0, mitad);\n    long long parte2 = sumar(datos, mitad, datos.size());\n    std::cout << parte1.get() + parte2 << "\\n";  // 10000000\n}` },
      ],
      x: [
        mc('¿Qué hace `t.join()`?', ['Espera a que el hilo t termine', 'Inicia el hilo', 'Detiene el hilo a la fuerza', 'Une dos hilos en uno'], 'El hilo empieza al construir el `std::thread`; `join` espera su final.'),
        fill(`std::mutex m;\nint contador = 0;\n\nvoid sumar() {\n    std::___<std::mutex> lock(m);\n    contador++;\n}`, ['lock_guard', 'mutex_lock', 'guard', 'synchronized'], '`std::lock_guard` bloquea el mutex y lo libera al salir del bloque.'),
        mc('¿Qué es una condición de carrera?', ['Varios hilos acceden al mismo dato a la vez, al menos uno lo modifica y no se sincronizan', 'Un hilo que termina antes que otro', 'Un bucle demasiado rápido', 'Un hilo que espera a otro con join'], 'Se evita con `std::mutex`, `std::atomic` o no compartiendo datos.'),
        out(`std::atomic<int> c{0};\nstd::thread a([&] { for (int i = 0; i < 1000; i++) c++; });\nstd::thread b([&] { for (int i = 0; i < 1000; i++) c++; });\na.join();\nb.join();\nstd::cout << c;`, ['2000', '1000', 'Un valor imprevisible', '0'], 'Con `std::atomic` ningún incremento se pierde.'),
        typ('Recoge el resultado de la tarea', `auto f = std::async(std::launch::async, [] { return 6 * 7; });\nint r = f.___();`, 'get', '`get()` espera a que termine la tarea y devuelve su resultado.'),
        mc('¿Qué pasa si un `std::thread` se destruye sin `join()` ni `detach()`?', ['El programa termina con std::terminate', 'El hilo se une automáticamente', 'No pasa nada', 'El hilo vuelve a empezar'], '`std::jthread` (C++20) evita el problema porque hace `join` en su destructor.'),
        out(`auto doble = [](int x) { return x * 2; };\nauto f1 = std::async(std::launch::async, doble, 10);\nauto f2 = std::async(std::launch::async, doble, 21);\nstd::cout << f1.get() + f2.get();`, ['62', '31', '2042', 'Error'], 'Las tareas devuelven 20 y 42, y `get()` espera a cada una antes de sumar.'),
        // Reto final
        out(`std::vector<int> r(3);\nstd::vector<std::thread> hilos;\nfor (int i = 0; i < 3; i++)\n    hilos.emplace_back([&r, i] { r[i] = (i + 1) * (i + 1); });\nfor (auto& h : hilos) h.join();\nstd::cout << r[0] + r[1] + r[2] << " " << hilos.size();`, ['14 3', '6 3', '14 0', 'Un valor imprevisible'], 'Cada hilo escribe en su propia posición, así que no hay carrera. `i` se captura por copia; por referencia sería un error, porque cambia mientras los hilos arrancan. Tras los `join`: 1 + 4 + 9 = 14.'),
      ],
    },
    // ───────────────────────── Día 30
    {
      id: 'cpp-wrapup',
      t: 'Conclusiones',
      d: 'Repaso final, herramientas del día a día y siguientes pasos.',
      guide: [
        { h: 'Lo que has aprendido', p: [
          'Has recorrido C++ desde `std::cout` hasta los hilos: tipos, contenedores de la STL, funciones, referencias y punteros, memoria dinámica, clases, herencia, polimorfismo, plantillas, excepciones, algoritmos, lambdas, smart pointers, movimiento, archivos y concurrencia.',
          'La idea que lo une todo es RAII: cada recurso tiene un dueño que lo libera en su destructor. Si la aplicas, tu código C++ será seguro y rápido a la vez.' ] },
        { h: 'C++ moderno en pocas líneas', p: [
          'Este fragmento junta varias piezas del curso: un struct, un vector, `std::sort` con una lambda, structured bindings y `std::accumulate`.',
          'Fíjate en lo que no aparece: ni `new`, ni `delete`, ni bucles con índices propensos a errores.' ],
          code: `struct Alumno { std::string nombre; double nota; };\n\nstd::vector<Alumno> clase = {{"Eva", 8.5}, {"Leo", 6.0}, {"Ana", 9.2}};\nstd::sort(clase.begin(), clase.end(),\n          [](const Alumno& a, const Alumno& b) { return a.nota > b.nota; });\nfor (const auto& [nombre, nota] : clase)\n    std::cout << nombre << " " << nota << "\\n";   // Ana 9.2, Eva 8.5, Leo 6\ndouble media = std::accumulate(clase.begin(), clase.end(), 0.0,\n    [](double s, const Alumno& a) { return s + a.nota; }) / clase.size();` },
        { h: 'Herramientas del día a día', p: [
          'Compila con avisos: `g++ -std=c++20 -Wall -Wextra -O2`. Los sanitizers (`-fsanitize=address,undefined`) detectan accesos fuera de rango y comportamiento indefinido mientras pruebas.',
          'En proyectos con muchos archivos se usa CMake para describir cómo compilar. Un depurador (gdb, lldb o el de tu editor) y `clang-format` completan la caja de herramientas.' ],
          code: `# CMakeLists.txt\ncmake_minimum_required(VERSION 3.20)\nproject(MiApp CXX)\nset(CMAKE_CXX_STANDARD 20)\nadd_executable(miapp src/main.cpp src/tienda.cpp)\n\n# En la terminal:\n# cmake -B build && cmake --build build` },
        { h: 'Errores típicos y siguientes pasos', p: [
          'Los fallos más habituales: variables sin inicializar, división entera inesperada, índices fuera de rango, `=` en vez de `==`, referencias o punteros colgantes y datos compartidos entre hilos sin protección.',
          'Para seguir: practica con proyectos pequeños (un gestor de tareas, un juego de consola, un analizador de logs), consulta cppreference.com como referencia y lee "A Tour of C++" de Bjarne Stroustrup. Después explora Qt para interfaces, Unreal Engine para juegos o la programación de sistemas.' ] },
        { h: 'Ejemplo real: mini gestor de inventario', real: true, p: [
          'Un almacén registra entradas y salidas de material. La clase protege sus datos, usa un `std::map`, lanza excepciones cuando una operación no es válida y un algoritmo con lambda cuenta los productos agotados.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <map>\n#include <stdexcept>\n#include <string>\n\nclass Inventario {\npublic:\n    void entrada(const std::string& producto, int uds) {\n        if (uds <= 0) throw std::invalid_argument("unidades no válidas");\n        stock[producto] += uds;\n    }\n    void salida(const std::string& producto, int uds) {\n        auto it = stock.find(producto);\n        if (it == stock.end() || it->second < uds)\n            throw std::runtime_error("stock insuficiente de " + producto);\n        it->second -= uds;\n    }\n    int agotados() const {\n        return std::count_if(stock.begin(), stock.end(),\n                             [](const auto& par) { return par.second == 0; });\n    }\nprivate:\n    std::map<std::string, int> stock;\n};\n\nint main() {\n    Inventario inv;\n    inv.entrada("tornillos", 500);\n    inv.entrada("tuercas", 20);\n    inv.salida("tuercas", 20);\n    try {\n        inv.salida("arandelas", 5);\n    } catch (const std::exception& e) {\n        std::cout << "Aviso: " << e.what() << "\\n";   // Aviso: stock insuficiente de arandelas\n    }\n    std::cout << "Agotados: " << inv.agotados() << "\\n";  // Agotados: 1\n}` },
      ],
      x: [
        mc('¿Qué opción de g++ activa la mayoría de los avisos útiles?', ['-Wall', '-O2', '-g', '-o'], '`-Wall` (y `-Wextra`) avisan de errores como variables sin usar o `=` en una condición.'),
        out(`int a = 2;\nint& r = a;\nint* p = &a;\nr *= 3;\n*p += 1;\nstd::cout << a;`, ['7', '6', '3', '9'], '`r` y `*p` se refieren a `a`: 2 × 3 = 6 y 6 + 1 = 7.'),
        mc('¿Qué contenedor usarías para contar cuántas veces aparece cada palabra, ordenadas alfabéticamente?', ['std::map<std::string, int>', 'std::vector<std::string>', 'std::set<std::string>', 'std::array<int, 26>'], 'Un `map` asocia cada palabra con su contador y mantiene las claves ordenadas.'),
        fill(`auto p = std::make_unique<Circulo>(2.0);\nstd::cout << p___area();`, ['->', '.', '::', '*'], 'Con un puntero (también uno inteligente) se accede a los métodos con `->`.'),
        typ('Ordena el vector de mayor a menor', `std::sort(v.begin(), v.end(), [](int a, int b) { return a ___ b; });`, '>', 'La lambda debe devolver `true` cuando `a` deba ir antes que `b`.'),
        out(`struct A {\n    virtual int f() const { return 1; }\n    virtual ~A() = default;\n};\nstruct B : A {\n    int f() const override { return 2; }\n};\n\nstd::unique_ptr<A> p = std::make_unique<B>();\nstd::cout << p->f() + A().f();`, ['3', '2', '4', 'Error'], '`p` apunta a un `B`, así que `f()` vale 2. `A().f()` crea un `A` temporal y vale 1.'),
        ord('Declara un vector de unique_ptr a Figura llamado plano', ['std::vector<', 'std::unique_ptr<', 'Figura', '>>', 'plano;'], ['std::shared_ptr<', '*'], 'El tipo de los elementos va dentro de los ángulos de `std::vector`.'),
        // Reto final
        out(`struct Pedido { std::string cliente; double total; };\n\nstd::vector<Pedido> v = {{"ana", 30}, {"luis", 120}, {"eva", 75}, {"ana", 45}};\nstd::map<std::string, double> por_cliente;\nfor (const auto& [c, t] : v) por_cliente[c] += t;\nauto mejor = std::max_element(por_cliente.begin(), por_cliente.end(),\n    [](const auto& a, const auto& b) { return a.second < b.second; });\nint grandes = std::count_if(v.begin(), v.end(),\n    [](const Pedido& p) { return p.total > 50; });\nstd::cout << por_cliente.size() << " " << mejor->first << " " << grandes;`, ['3 luis 2', '4 luis 2', '3 ana 2', '3 luis 3'], 'Por cliente: ana 75, eva 75 y luis 120, tres claves. El mayor total es el de luis. Solo dos pedidos superan los 50: 120 y 75.'),
      ],
    },
  ],
}))(Sintaxis);
