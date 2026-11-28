/* Python · Español */
(({ mc, out, fill, ord, typ, code, addCourse }) => addCourse('python', 'es', {
  tag: 'De tu primer print() a una tienda con base de datos, API y pruebas: cuatro semanas con un proyecto al final de cada una.',
  days: [
    // ───────────── Día 1 ─────────────
    {
      id: 'py-intro',
      t: 'Tu primer programa',
      d: 'Qué es Python, cómo ejecutar un archivo, print(), la sangría y los comentarios.',
      guide: [
        { h: '¿Qué es Python?', p: [
          'Python es un lenguaje de programación de alto nivel creado por Guido van Rossum y publicado en 1991. Se lee casi como inglés, por eso es uno de los más usados para empezar.',
          'Hoy lo usan Instagram y Spotify en sus servidores, la NASA en análisis científico y casi todos los equipos de inteligencia artificial.',
          'Es un lenguaje interpretado: no hace falta compilar. Escribes el código y Python lo ejecuta línea a línea, de arriba abajo.' ] },
        { h: 'Tu primer programa', p: [
          'Instala Python desde python.org y guarda esto en un archivo `hola.py`. Ejecútalo con `python hola.py` en la terminal.',
          '`print()` muestra en pantalla lo que le pases entre paréntesis. Los textos van entre comillas; los números, no.',
          'También puedes escribir `python` en la terminal para abrir la consola interactiva y probar líneas sueltas. Sales con `exit()`.' ],
          code: `print("Hola, mundo")\nprint(3 + 4)  # 7` },
        { h: 'Python como calculadora', p: [
          'Los operadores básicos son `+`, `-`, `*` y `/`. La potencia se escribe `**`.',
          'Cada valor tiene un tipo: `int` para enteros, `float` para decimales y `str` para textos. `type()` te dice cuál es. Fíjate en que el decimal se escribe con punto, no con coma.' ],
          code: `print(10 - 3)        # 7\nprint(10 / 4)        # 2.5\nprint(2 ** 3)        # 8\nprint(type(10))      # <class 'int'>\nprint(type(2.5))     # <class 'float'>\nprint(type("hola"))  # <class 'str'>` },
        { h: 'Sangría y comentarios', p: [
          'Python no usa llaves: la sangría de 4 espacios indica qué líneas forman un bloque. Si no cuadra, Python lanza `IndentationError`.',
          'Lo que va tras `#` es un comentario: Python lo ignora y sirve para explicar el código a otras personas (o a ti dentro de un mes).' ],
          code: `# Comprobar si alguien puede votar\nedad = 20\nif edad >= 18:\n    print("Puedes votar")  # dentro del if\nprint("Fin")              # fuera del if` },
        { h: 'Ejemplo real: dividir la cuenta del restaurante', real: true, p: [
          'Con cuatro líneas ya resuelves un problema cotidiano: repartir una cuenta con propina entre amigos.',
          '`round(numero, 2)` redondea a dos decimales, justo lo que necesitas con dinero.' ],
          code: `cuenta = 84.50\npersonas = 3\npropina = cuenta * 0.10\nprint("Cada persona paga:", round((cuenta + propina) / personas, 2))  # Cada persona paga: 30.98` },
      ],
      x: [
        mc('¿Qué función muestra texto en pantalla en Python?', ['print()', 'echo()', 'console.log()', 'printf()'], '`print()` escribe en la salida estándar. `console.log()` es de JavaScript.'),
        mc('¿Cómo se escribe un comentario en Python?', ['# comentario', '// comentario', '/* comentario */', '-- comentario'], 'Todo lo que sigue a `#` en una línea es un comentario.'),
        out(`print(2 ** 3)`, ['8', '6', '9', '23'], '`**` es la potencia: 2 elevado a 3 es 8.'),
        mc('¿Qué marca los bloques de código en Python?', ['La sangría', 'Las llaves { }', 'Las palabras begin y end', 'El punto y coma'], 'Python usa la sangría; si no cuadra, lanza `IndentationError`.'),
        out(`print(type("7"))`, ["<class 'str'>", "<class 'int'>", "<class 'float'>"], 'Las comillas convierten el 7 en texto, un `str`.'),
        ord('Escribe el código que muestra Hola, mundo', ['print', '(', '"Hola, mundo"', ')'], ['echo', '{'], 'Llamas a `print` con el texto entre comillas dentro de los paréntesis.'),
        out(`print("Hola" * 3)`, ['HolaHolaHola', 'Hola 3', 'Error', 'Hola*3'], 'Multiplicar un texto por un entero lo repite.'),
        out(`a = 10\nb = 3\nprint(a + b * 2, (a + b) * 2)`, ['16 26', '26 16', '16 16', '26 26'], 'La multiplicación va antes que la suma; los paréntesis cambian el orden. `print` separa los valores con un espacio.'),
      ],
      lab: [
        code('Escribe un programa que muestre `Hola, Kibi` en una línea y, en la siguiente, el resultado de `7 * 6`.', `# Escribe aquí tu programa\n`, [{ in: '', out: 'Hola, Kibi\n42' }], `print("Hola, Kibi")\nprint(7 * 6)`, '`print()` escribe cada valor en una línea nueva: primero el texto entre comillas y después el resultado de `7 * 6`, que se calcula antes de mostrarlo.'),
      ],
    },
    // ───────────── Día 2 ─────────────
    {
      id: 'py-vars',
      t: 'Variables y tipos',
      d: 'Guardar datos con nombre, los tipos básicos, input() y cómo pasar de texto a número.',
      guide: [
        { h: '¿Qué es una variable?', p: [
          'Una variable es un nombre que apunta a un valor. Se crea con `=`, que en Python significa "asigna", no "es igual".',
          'No hace falta declarar el tipo: Python lo deduce del valor. Puedes reasignar la variable cuando quieras, incluso con un valor de otro tipo.' ],
          code: `nombre = "Ana"\nedad = 25\nprint(nombre, edad)  # Ana 25\nedad = 26            # reasignar cambia el valor\nprint(edad)          # 26` },
        { h: 'Cómo nombrar variables', p: [
          'Usa snake_case: minúsculas y palabras separadas por guion bajo (`precio_total`). Un nombre no puede empezar por número ni llevar guiones o espacios.',
          'Python distingue mayúsculas: `edad` y `Edad` son variables distintas. Las constantes se escriben en MAYÚSCULAS por convención.',
          'No puedes usar palabras reservadas como `if`, `for`, `class` o `def`. Elige nombres que expliquen qué guardan: `precio` es mejor que `p`.' ],
          code: `precio_total = 99.9   # bien: snake_case\nPI = 3.14159          # constante por convención\nEdad = 30             # distinta de edad\n# 2precio = 5         # SyntaxError: no puede empezar por número\n# mi-precio = 5       # error: el guion se lee como una resta` },
        { h: 'Asignación múltiple', p: [
          'Puedes asignar varias variables en una línea separándolas por comas. Python empareja cada nombre con su valor.',
          'Es la forma más limpia de intercambiar dos valores: no necesitas una variable auxiliar.' ],
          code: `x, y, z = 1, 2, 3\na = b = 0          # las dos valen 0\nx, y = y, x        # intercambio\nprint(x, y)        # 2 1` },
        { h: 'Funciones integradas', p: [
          'Python trae funciones listas para usar: `print()`, `len()` (longitud), `type()` (tipo), `int()`, `float()` y `str()` (conversiones), `round()`, `abs()`, `min()` y `max()`.',
          'Las conversiones son clave: `"7" + "7"` da `"77"`, pero `int("7") + 7` da 14.' ],
          code: `print(len("Python"))      # 6\nprint(type(3.5))          # <class 'float'>\nprint(int("42") + 1)      # 43\nprint(str(7) + "7")       # 77\nprint(round(3.14159, 2))  # 3.14\nprint(max(4, 9, 2))       # 9` },
        { h: 'input() siempre devuelve texto', p: [
          '`input()` muestra un mensaje, espera a que el usuario escriba y devuelve lo escrito como `str`, aunque sean dígitos.',
          'El error típico es hacer `input() + 1`: Python lanza `TypeError` porque no sabe sumar texto y número. Convierte primero con `int()` o `float()`.' ],
          code: `texto = input("¿Cuántos años tienes? ")  # el usuario escribe 30\nedad = int(texto)                         # "30" -> 30\nprint("El año que viene tendrás", edad + 1)  # El año que viene tendrás 31` },
        { h: 'Ejemplo real: calcular el IMC', real: true, p: [
          'El índice de masa corporal es el peso dividido entre la altura al cuadrado. Pedimos los datos, los convertimos a `float` y redondeamos el resultado.' ],
          code: `nombre = input("Nombre: ")              # Lucía\npeso = float(input("Peso en kg: "))     # 62.5\naltura = float(input("Altura en m: "))  # 1.68\nimc = peso / altura ** 2\nprint(nombre, "tiene un IMC de", round(imc, 1))  # Lucía tiene un IMC de 22.1` },
      ],
      x: [
        out(`x = 5\ny = 3\nprint(x + y)`, ['8', '53', 'x + y', 'Error'], 'Ambas variables son enteros, así que `+` los suma.'),
        mc('¿Qué nombre de variable es válido?', ['nombre_completo', '2nombre', 'nombre-completo', 'class'], 'Un nombre no puede empezar por número, llevar guiones ni ser una palabra reservada como `class`.'),
        out(`print(len("Python"))`, ['6', '5', '7', 'Error'], '`len()` cuenta los caracteres del texto.'),
        typ('Convierte el texto "25" en un número entero', `edad = ___("25")`, 'int', '`int()` convierte un texto con dígitos en un entero. `float()` lo convertiría en decimal.'),
        out(`a, b = 1, 2\na, b = b, a\nprint(a, b)`, ['2 1', '1 2', '2 2', 'Error'], 'La asignación múltiple intercambia los valores en una sola línea.'),
        out(`print(round(7.456, 1), abs(-3))`, ['7.5 3', '7.4 3', '7.5 -3', '7.46 3'], '`round(7.456, 1)` deja un decimal y redondea hacia arriba; `abs()` quita el signo.'),
        out(`edad = input("Edad: ")  # el usuario escribe 20\nprint(type(edad))`, ["<class 'str'>", "<class 'int'>", "<class 'float'>", '20'], '`input()` siempre devuelve texto. Para operar con él hay que convertirlo con `int()`.'),
        out(`precio = "19.99"\ncantidad = 3\ntotal = float(precio) * cantidad\nprint(round(total, 2), type(total).__name__)`, ['59.97 float', '19.9919.9919.99 str', '59.97 int', 'Error'], '`float("19.99")` convierte el texto en número antes de multiplicar. Un `float` por un `int` da un `float`.'),
      ],
    },
    // ───────────── Día 3 ─────────────
    {
      id: 'py-operators',
      t: 'Operaciones y comparaciones',
      d: 'Calcular, comparar y combinar condiciones con and, or y not, y en qué orden se evalúa todo.',
      guide: [
        { h: 'Operadores aritméticos', p: [
          'Además de `+ - * /`, Python tiene la división entera `//` (descarta los decimales), el resto `%` y la potencia `**`.',
          '`/` siempre devuelve un `float`, aunque la división sea exacta. Si necesitas un entero, usa `//`.',
          '`%` es más útil de lo que parece: `n % 2 == 0` dice si un número es par y `n % 60` saca los minutos sueltos.' ],
          code: `print(7 + 2)    # 9\nprint(7 / 2)    # 3.5\nprint(7 // 2)   # 3\nprint(7 % 2)    # 1\nprint(2 ** 10)  # 1024\nprint(6 / 3)    # 2.0` },
        { h: 'Precedencia: quién va primero', p: [
          'Python sigue el orden matemático: primero `**`, después `* / // %` y al final `+ -`. Ante la duda, pon paréntesis: hacen el código más claro.',
          'Ojo con `-2 ** 2`: la potencia se calcula antes que el signo, así que da -4.' ],
          code: `print(2 + 3 * 4)    # 14\nprint((2 + 3) * 4)  # 20\nprint(-2 ** 2)      # -4\nprint((-2) ** 2)    # 4` },
        { h: 'Comparación y lógica', p: [
          'Los comparadores `== != > < >= <=` devuelven `True` o `False`. No confundas `=` (asignar) con `==` (comparar).',
          '`and` exige que se cumplan las dos condiciones, `or` que se cumpla al menos una y `not` invierte el resultado.',
          'Python permite encadenar comparaciones: `18 <= edad < 65` se lee igual que en matemáticas.' ],
          code: `edad = 20\nprint(edad >= 18)               # True\nprint(edad == 18)               # False\nprint(18 <= edad < 65)          # True\nprint(edad > 18 and edad < 21)  # True\nprint(not edad > 18)            # False` },
        { h: 'Asignación compuesta y decimales', p: [
          '`x += 1` es lo mismo que `x = x + 1`. Existen `-=`, `*=`, `/=`, `//=` y `%=`.',
          'Los `float` se guardan en binario y a veces no son exactos: `0.1 + 0.2` no da 0.3 justo. Para mostrar dinero, redondea con `round()`.' ],
          code: `saldo = 100\nsaldo -= 30    # 70\nsaldo *= 2     # 140\nprint(saldo)   # 140\nprint(0.1 + 0.2)            # 0.30000000000000004\nprint(round(0.1 + 0.2, 2))  # 0.3` },
        { h: 'Ejemplo real: duración de una película y precio rebajado', real: true, p: [
          'Una plataforma de vídeo guarda la duración en minutos, pero la muestra en horas y minutos. `//` y `%` lo resuelven.',
          'Y una tienda que aplica un 25 % de descuento solo necesita multiplicar por `1 - descuento`.' ],
          code: `minutos = 135\nhoras = minutos // 60\nresto = minutos % 60\nprint(horas, "h", resto, "min")  # 2 h 15 min\n\nprecio = 80\ndescuento = 0.25\nprint("Pagas:", precio * (1 - descuento))  # Pagas: 60.0` },
      ],
      x: [
        out(`print(7 // 2)`, ['3', '3.5', '4', '1'], '`//` es la división entera: descarta los decimales.'),
        out(`print(10 % 3)`, ['1', '3', '0', '3.33'], '`%` devuelve el resto: 10 entre 3 cabe 3 veces y sobra 1.'),
        out(`print(6 / 2)`, ['3.0', '3', '2', 'Error'], 'La división `/` siempre devuelve un `float`, aunque el resultado sea exacto.'),
        mc('¿Qué operador compara si dos valores son iguales?', ['==', '=', '===', 'equals'], '`=` asigna un valor; `==` compara. `===` no existe en Python.'),
        out(`print(5 > 3 and 2 > 4)`, ['False', 'True', 'None', 'Error'], '`and` solo es verdadero si ambas condiciones lo son, y 2 > 4 es falso.'),
        out(`x = 10\nx += 5\nx *= 2\nprint(x)`, ['30', '25', '20', '15'], 'Primero 10 + 5 = 15 y después 15 * 2 = 30.'),
        fill(`n = 17\nes_par = n ___ 2 == 0\nprint(es_par)  # False`, ['%', '//', '/', '**'], 'Un número es par si el resto de dividirlo entre 2 es 0, y el resto se calcula con `%`.', 'Completa para comprobar si n es par'),
        out(`print(2 + 3 * 4 ** 2 // 10, not 3 == 3 or 1 < 2)`, ['6 True', '8 True', '6 False', '20 True'], '4 ** 2 = 16, 3 * 16 = 48, 48 // 10 = 4 y 2 + 4 = 6. `not 3 == 3` es False, pero `or 1 < 2` da True.'),
      ],
    },
    // ───────────── Día 4 ─────────────
    {
      id: 'py-strings',
      t: 'Trabajar con texto',
      d: 'Índices, cortes, f-strings y los métodos que limpian y transforman textos.',
      guide: [
        { h: 'Crear textos', p: [
          'Un string (`str`) es una secuencia de caracteres entre comillas simples o dobles. Usa las que no aparezcan dentro del texto.',
          'Las comillas triples permiten escribir varias líneas. Dentro de un texto, `\\n` es un salto de línea y `\\t` un tabulador.',
          'Los strings son inmutables: los métodos no cambian el texto original, devuelven uno nuevo.' ],
          code: `saludo = "Hola"\nfrase = 'Dijo "vale" y se fue'\npoema = """Línea uno\nLínea dos"""\nprint(len(saludo))  # 4\nprint("Uno\\tDos\\nTres")` },
        { h: 'Índices y slicing', p: [
          'Cada carácter tiene una posición que empieza en 0. Los índices negativos cuentan desde el final: `-1` es el último.',
          '`s[inicio:fin]` corta desde `inicio` hasta `fin` sin incluirlo. Si omites uno de los dos, va hasta el extremo. `s[::-1]` le da la vuelta.' ],
          code: `lenguaje = "Python"\nprint(lenguaje[0])     # P\nprint(lenguaje[-1])    # n\nprint(lenguaje[1:4])   # yth\nprint(lenguaje[:2])    # Py\nprint(lenguaje[::-1])  # nohtyP` },
        { h: 'f-strings: meter variables en un texto', p: [
          'Una f-string lleva una `f` delante de las comillas y sustituye lo que va entre llaves por su valor. Es la forma moderna y más legible.',
          'Puedes dar formato: `{precio:.2f}` muestra dos decimales. Con `+` también puedes unir textos, pero todo debe ser `str`: convierte los números con `str()`.' ],
          code: `nombre = "Ana"\nedad = 30\nprecio = 4.5\nprint(f"{nombre} tiene {edad} años")  # Ana tiene 30 años\nprint(f"Total: {precio * 3:.2f} €")   # Total: 13.50 €\nprint("Edad: " + str(edad))           # Edad: 30` },
        { h: 'Métodos de strings', p: [
          '`strip()` quita espacios de los extremos, `lower()` y `upper()` cambian mayúsculas, `title()` capitaliza cada palabra y `replace()` sustituye.',
          '`split()` corta el texto en una lista y `join()` hace lo contrario. `count()`, `find()`, `startswith()`, `endswith()` e `isdigit()` sirven para buscar y comprobar.' ],
          code: `texto = "  Hola Mundo  "\nprint(texto.strip())                        # Hola Mundo\nprint(texto.strip().lower())                # hola mundo\nprint("a-b-c".split("-"))                   # ['a', 'b', 'c']\nprint(" ".join(["Me", "gusta", "Python"]))  # Me gusta Python\nprint("banana".count("a"))                  # 3\nprint("2024".isdigit())                     # True` },
        { h: 'Ejemplo real: limpiar un email de un formulario', real: true, p: [
          'La gente escribe su email con espacios y mayúsculas. Antes de guardarlo conviene normalizarlo, y de paso generar un nombre de usuario.',
          'Encadenar métodos (`strip().lower()`) es habitual: cada uno trabaja sobre el resultado del anterior.' ],
          code: `email = "  Lucia.Perez@Gmail.COM "\nemail = email.strip().lower()\nusuario = email.split("@")[0].replace(".", "_")\nprint(email)                         # lucia.perez@gmail.com\nprint(usuario)                       # lucia_perez\nprint(email.endswith("@gmail.com"))  # True` },
      ],
      x: [
        out(`print("3" + "4")`, ['34', '7', 'Error', '3 + 4'], 'Con textos, `+` concatena: une "3" y "4".'),
        fill(`nombre = "Ana"\nprint(___"Hola {nombre}")`, ['f', 's', '$', '%'], 'La `f` delante de las comillas crea una f-string, que sustituye `{nombre}` por su valor.'),
        out(`s = "Python"\nprint(s[0], s[-1])`, ['P n', 'P o', 'y n', 'Error'], 'El índice 0 es el primer carácter y -1 el último.'),
        out(`print("hola mundo".title())`, ['Hola Mundo', 'HOLA MUNDO', 'Hola mundo', 'hola Mundo'], '`title()` pone en mayúscula la primera letra de cada palabra.'),
        out(`print("Python"[1:4])`, ['yth', 'ytho', 'Pyt', 'pyth'], 'El slice empieza en el índice 1 (`y`) y se detiene antes del 4.'),
        out(`print("a,b,c".split(","))`, ["['a', 'b', 'c']", 'abc', 'a b c', "('a', 'b', 'c')"], '`split(",")` corta el texto en cada coma y devuelve una lista.'),
        typ('Quita los espacios del principio y del final', `limpio = "  hola  ".___()`, 'strip', '`strip()` elimina los espacios (y saltos de línea) de los dos extremos.'),
        out(`nombre = "  ada lovelace "\nlimpio = nombre.strip().title()\nprint(f"{limpio[:3]}-{len(limpio)}")`, ['Ada-12', 'ada-15', 'Ada-15', 'Ada -12'], 'Tras `strip()` quedan 12 caracteres ("ada lovelace") y `title()` da "Ada Lovelace". `[:3]` toma "Ada".'),
      ],
    },
    // ───────────── Día 5 ─────────────
    {
      id: 'py-conditionals',
      t: 'Tomar decisiones',
      d: 'if, elif y else, qué cuenta como verdadero y el if de una sola línea.',
      guide: [
        { h: 'if y else', p: [
          '`if` ejecuta un bloque solo si la condición es verdadera. `else` cubre el caso contrario. Después de la condición van dos puntos y el bloque se sangra 4 espacios.',
          'Olvidar los dos puntos es el error más común al empezar: Python responde con `SyntaxError`.' ],
          code: `temperatura = 31\nif temperatura > 30:\n    print("Hace calor")\n    print("Bebe agua")\nelse:\n    print("Temperatura agradable")` },
        { h: 'Varias opciones con elif', p: [
          '`elif` (else if) prueba otra condición si la anterior falló. Python se queda con la primera que se cumple y salta el resto.',
          'Por eso el orden importa: de la condición más exigente a la menos.' ],
          code: `nota = 78\nif nota >= 90:\n    calificacion = "Sobresaliente"\nelif nota >= 70:\n    calificacion = "Notable"\nelif nota >= 50:\n    calificacion = "Aprobado"\nelse:\n    calificacion = "Suspenso"\nprint(calificacion)  # Notable` },
        { h: 'Verdadero y falso', p: [
          'Cualquier valor puede usarse como condición. Son falsos: `0`, `0.0`, `""`, `[]`, `{}`, `set()` y `None`. Todo lo demás es verdadero.',
          'Así, `if not carrito:` es la forma idiomática de preguntar si una lista está vacía.',
          'Combina condiciones con `and`, `or` y `not`, y usa `in` para comprobar si un valor está entre varios.' ],
          code: `carrito = []\nif not carrito:\n    print("El carrito está vacío")\n\nusuario = "admin"\nif usuario in ("admin", "root") and len(usuario) > 3:\n    print("Acceso total")` },
        { h: 'Condiciones anidadas y ternario', p: [
          'Puedes meter un `if` dentro de otro, pero más de dos niveles cuesta de leer: muchas veces `and` o `elif` lo simplifican.',
          'El ternario escribe un if/else que devuelve un valor en una línea: `valor_si if condicion else valor_no`.' ],
          code: `edad = 16\nmensaje = "mayor de edad" if edad >= 18 else "menor de edad"\nprint(mensaje)  # menor de edad` },
        { h: 'Ejemplo real: precio de una entrada de cine', real: true, p: [
          'Un cine cobra 5 € a los menores de 12, 6 € a los mayores de 65 y 9 € al resto. Los miércoles, día del espectador, descuenta 2 € más.' ],
          code: `edad = 67\nes_miercoles = True\nif edad < 12:\n    precio = 5\nelif edad >= 65:\n    precio = 6\nelse:\n    precio = 9\nif es_miercoles:\n    precio -= 2\nprint("Entrada:", precio, "€")  # Entrada: 4 €` },
      ],
      x: [
        out(`x = 7\nif x > 5:\n    print("grande")\nelse:\n    print("pequeño")`, ['grande', 'pequeño', 'grande\npequeño', 'Nada'], '7 es mayor que 5, así que se ejecuta el bloque del `if` y se salta el `else`.'),
        fill(`if nota >= 90:\n    print("A")\n___ nota >= 70:\n    print("B")`, ['elif', 'else if', 'elseif', 'case'], 'En Python, "si no, si..." se escribe `elif`.'),
        ord('Escribe la condición: si x es par', ['if', 'x', '%', '2', '==', '0', ':'], ['=', '/'], '`%` da el resto. Si el resto entre 2 es 0, el número es par. Se compara con `==`, no con `=`.'),
        out(`n = 0\nif n:\n    print("sí")\nelse:\n    print("no")`, ['no', 'sí', '0', 'Error'], 'El 0 se considera falso en una condición.'),
        out(`edad = 15\nr = "adulto" if edad >= 18 else "menor"\nprint(r)`, ['menor', 'adulto', 'True', '15'], 'Es un ternario: como 15 es menor que 18, se usa el valor del `else`.'),
        mc('¿Cuál de estos valores es verdadero en un `if`?', ['[0]', '""', '[]', 'None'], 'Una lista con un elemento es verdadera aunque ese elemento sea 0. Las colecciones vacías y `None` son falsas.'),
        out(`x = 5\nif x > 2:\n    if x > 10:\n        print("A")\n    else:\n        print("B")`, ['B', 'A', 'A\nB', 'Nada'], 'Entra en el primer `if`, pero 5 no es mayor que 10, así que va al `else` interno.'),
        out(`puntos = 85\nvip = False\nif puntos >= 90 or vip:\n    nivel = "oro"\nelif puntos >= 80 and not vip:\n    nivel = "plata"\nelse:\n    nivel = "bronce"\nprint(nivel.upper() if puntos % 2 else nivel)`, ['PLATA', 'plata', 'ORO', 'bronce'], '85 no llega a 90 y no es VIP, pero cumple el `elif`: "plata". 85 % 2 es 1, verdadero, así que se imprime en mayúsculas.'),
      ],
    },
    // ───────────── Día 6 ─────────────
    {
      id: 'py-loops',
      t: 'Repetir con bucles',
      d: 'for y while, range(), break y continue: que el programa repita el trabajo por ti.',
      guide: [
        { h: 'El bucle for', p: [
          '`for` recorre los elementos de cualquier secuencia: una lista, un string, un diccionario... En cada vuelta, la variable toma el siguiente elemento.',
          'Úsalo cuando sepas qué vas a recorrer. Es el bucle que más usarás en Python.',
          'En algunos ejemplos aparece una lista, varios valores entre corchetes. De momento basta con saber que `for` los recorre uno a uno; las verás a fondo en el día 8.' ],
          code: `frutas = ["manzana", "pera", "kiwi"]\nfor fruta in frutas:\n    print(fruta.upper())\n\nfor letra in "sol":\n    print(letra)` },
        { h: 'range()', p: [
          '`range(n)` genera los números de 0 a n-1. `range(inicio, fin)` empieza donde digas y `range(inicio, fin, paso)` avanza de `paso` en `paso`; con paso negativo cuenta hacia atrás.',
          'El final nunca se incluye. Es el mismo criterio que el slicing.' ],
          code: `print(list(range(5)))          # [0, 1, 2, 3, 4]\nprint(list(range(2, 6)))       # [2, 3, 4, 5]\nprint(list(range(10, 0, -3)))  # [10, 7, 4, 1]\nfor i in range(3):\n    print("Vuelta", i)` },
        { h: 'El bucle while', p: [
          '`while` repite mientras la condición sea verdadera. Úsalo cuando no sepas cuántas vueltas harán falta.',
          'Asegúrate de que algo dentro del bucle acabe haciendo falsa la condición; si no, tendrás un bucle infinito (se para con Ctrl+C).' ],
          code: `saldo = 1000\nanios = 0\nwhile saldo < 1500:\n    saldo *= 1.10   # 10 % de interés anual\n    anios += 1\nprint(anios)  # 5` },
        { h: 'break, continue y enumerate', p: [
          '`break` sale del bucle en el acto; `continue` salta el resto de la vuelta actual y pasa a la siguiente.',
          '`enumerate()` te da a la vez el índice y el elemento, sin llevar un contador a mano.' ],
          code: `for i, letra in enumerate("abc"):\n    print(i, letra)\n\nfor n in range(1, 10):\n    if n % 2 == 0:\n        continue   # salta los pares\n    if n > 7:\n        break      # se detiene al llegar a 9\n    print(n, end=" ")  # 1 3 5 7` },
        { h: 'Ejemplo real: resumen de ventas de la semana', real: true, p: [
          'Una cafetería apunta lo que vende cada día. Un bucle suma el total y cuenta cuántos días superaron los 100 €.' ],
          code: `ventas = [120.5, 98.0, 143.25, 87.75, 210.0]\ntotal = 0\ndias_buenos = 0\nfor importe in ventas:\n    total += importe\n    if importe >= 100:\n        dias_buenos += 1\nprint("Total:", total)                       # Total: 659.5\nprint("Días de más de 100 €:", dias_buenos)  # Días de más de 100 €: 3` },
      ],
      x: [
        out(`for i in range(3):\n    print(i)`, ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', '3'], '`range(3)` produce 0, 1 y 2: empieza en 0 y no incluye el 3.'),
        mc('¿Qué números produce `range(2, 10, 3)`?', ['2, 5, 8', '2, 4, 6, 8', '3, 6, 9', '2, 5, 8, 11'], 'Empieza en 2, suma 3 cada vez y se detiene antes de llegar a 10.'),
        out(`n = 0\nwhile n < 3:\n    n += 1\nprint(n)`, ['3', '2', '4', '0'], 'El bucle se repite mientras `n < 3`. Cuando `n` vale 3 la condición falla y se imprime 3.'),
        mc('¿Qué hace `break` dentro de un bucle?', ['Sale del bucle inmediatamente', 'Salta a la siguiente iteración', 'Termina todo el programa', 'Reinicia el bucle'], '`break` corta el bucle. Para saltar solo la vuelta actual se usa `continue`.'),
        out(`for c in "hola":\n    if c == "l":\n        continue\n    print(c, end="")`, ['hoa', 'hola', 'ho', 'l'], '`continue` se salta la "l". `end=""` evita el salto de línea, por eso sale todo junto.'),
        out(`total = 0\nfor n in range(1, 5):\n    total += n\nprint(total)`, ['10', '15', '4', '5'], 'Suma 1 + 2 + 3 + 4 = 10; `range(1, 5)` no incluye el 5.'),
        typ('Recorre a la vez la posición y el nombre', `nombres = ["Ana", "Luis"]\nfor i, nombre in ___(nombres):\n    print(i, nombre)`, 'enumerate', '`enumerate()` devuelve pares (índice, elemento) en cada vuelta.'),
        out(`total = 0\nfor i in range(1, 4):\n    for j in range(i):\n        total += j\nprint(total)`, ['4', '6', '10', '3'], 'Con i = 1 se suma 0; con i = 2, 0 + 1; con i = 3, 0 + 1 + 2. En total 0 + 1 + 3 = 4.'),
      ],
    },
    // ───────────── Día 7 ─────────────
    {
      id: 'py-workshop-register',
      t: 'Taller de Kibi: la caja registradora',
      d: 'Proyecto de la semana 1: una caja que pide precios, suma el total, aplica descuentos e imprime el ticket.',
      guide: [
        { h: 'El encargo', p: [
          'Kibi abre una tienda de semillas y necesita una caja registradora en la terminal. Escribes el precio de cada artículo, la caja suma, aplica un descuento si toca e imprime el ticket.',
          'Este taller junta todo lo de la semana: variables, `input()`, conversiones, condicionales, bucles y f-strings. Lo construimos por pasos y cada paso ya funciona solo, así que puedes ejecutarlo y comprobarlo antes de seguir.' ] },
        { h: 'Paso 1: pedir precios hasta escribir 0', p: [
          'No sabemos cuántos artículos habrá, así que usamos `while True` y salimos con `break` cuando el cajero escribe 0.',
          'Llevamos dos cuentas a la vez: el total en euros y el número de artículos. `+=` suma al valor que ya había.' ],
          code: `total = 0\narticulos = 0\nwhile True:\n    precio = float(input("Precio (0 para terminar): "))\n    if precio == 0:\n        break\n    total += precio\n    articulos += 1\nprint(f"{articulos} artículos, total {total:.2f} €")` },
        { h: 'Paso 2: que no se rompa con lo que escriben', p: [
          'Si el cajero escribe `2,50` o `hola`, `float()` falla y el programa se cierra. Primero cambiamos la coma por un punto y comprobamos que lo que queda son dígitos con, como mucho, un punto.',
          '`continue` salta al principio del bucle sin sumar nada. En el día 15 verás `try` y `except`, la forma habitual de controlar estos errores.' ],
          code: `while True:\n    texto = input("Precio (0 para terminar): ").replace(",", ".")\n    if not texto.replace(".", "", 1).isdigit():\n        print("Eso no es un precio, prueba otra vez")\n        continue\n    precio = float(texto)\n    if precio == 0:\n        break` },
        { h: 'Paso 3: descuentos por tramos', p: [
          'La tienda descuenta un 10 % desde 50 € y un 5 % desde 20 €. Con `elif` el orden importa: se comprueba primero el tramo más alto, porque 60 € también cumple `>= 20`.',
          'El formato `:.2f` deja siempre dos decimales, como en cualquier ticket.' ],
          code: `total = 42.8\nif total >= 50:\n    descuento = total * 0.10\nelif total >= 20:\n    descuento = total * 0.05\nelse:\n    descuento = 0\nprint(f"Descuento: {descuento:.2f} €")      # Descuento: 2.14 €\nprint(f"A pagar: {total - descuento:.2f} €")  # A pagar: 40.66 €` },
        { h: 'Ejemplo real: el ticket completo', real: true, p: [
          'Juntamos los tres pasos. `:<10` alinea el texto a la izquierda en 10 caracteres y `:>8.2f` alinea el número a la derecha, para que las cifras queden en columna.',
          'Ideas para ampliarlo: pedir también la cantidad de cada artículo o calcular el cambio a partir de lo que entrega el cliente.' ],
          code: `total = 0\narticulos = 0\nwhile True:\n    texto = input("Precio (0 para terminar): ").replace(",", ".")\n    if not texto.replace(".", "", 1).isdigit():\n        print("Eso no es un precio")\n        continue\n    precio = float(texto)\n    if precio == 0:\n        break\n    total += precio\n    articulos += 1\n\ndescuento = total * 0.10 if total >= 50 else total * 0.05 if total >= 20 else 0\nprint("-" * 18)\nprint(f"{'Artículos':<10}{articulos:>8}")\nprint(f"{'Total':<10}{total:>8.2f}")\nprint(f"{'Descuento':<10}{descuento:>8.2f}")\nprint(f"{'A pagar':<10}{total - descuento:>8.2f}")` },
      ],
      x: [
        mc('¿Qué hace `break` dentro del `while True` de la caja?', ['Sale del bucle y sigue con lo que hay después', 'Vuelve al principio del bucle', 'Cierra el programa entero', 'Salta solo la vuelta actual'], '`break` termina el bucle; el programa continúa en la primera línea de después. Saltar la vuelta actual es lo que hace `continue`.'),
        out(`total = 0\ntotal += 2.5\ntotal += 1.25\nprint(f"{total:.2f}")`, ['3.75', '3.8', '3.750', '375'], '`+=` va sumando al total, y `:.2f` muestra exactamente dos decimales.'),
        fill(`precio = ___(input("Precio: "))`, ['float', 'str', 'print', 'len'], '`input()` devuelve texto. Para hacer cuentas con decimales hay que convertirlo con `float()`.'),
        out(`total = 25\nif total >= 50:\n    print("10%")\nelif total >= 20:\n    print("5%")\nelse:\n    print("0%")`, ['5%', '10%', '0%', '5%\n0%'], '25 no llega a 50, pero sí a 20. Con `elif` solo se ejecuta la primera rama que se cumple.'),
        out(`n = 0\ntotal = 0\nwhile total < 10:\n    total += 4\n    n += 1\nprint(n, total)`, ['3 12', '2 8', '3 10', '4 16'], 'El bucle suma 4 mientras el total sea menor que 10: 4, 8 y 12. Con 12 la condición ya es falsa y se han dado 3 vueltas.'),
        typ('Escribe la palabra que sale del bucle cuando el precio es 0', `while True:\n    precio = float(input())\n    if precio == 0:\n        ___\n    total += precio`, 'break', '`break` termina el bucle en cuanto se cumple la condición.'),
        out(`print(f"{'Total':<8}|{9.5:>6.2f}")`, ['Total   |  9.50', 'Total|9.50', '   Total|9.50  ', 'Total   |9.5'], '`:<8` rellena el texto con espacios hasta 8 caracteres por la derecha; `:>6.2f` pone el número con dos decimales alineado a la derecha en 6.'),
        out(`total = 0\nfor precio in range(5, 30, 10):\n    if precio > 20:\n        continue\n    total += precio\ndescuento = total * 0.1 if total >= 20 else 0\nprint(total, round(total - descuento, 2))`, ['20 18.0', '45 40.5', '20 20', '20 18'], '`range(5, 30, 10)` da 5, 15 y 25; el 25 se salta con `continue`, así que el total es 20. Como llega a 20 hay un 10 % de descuento, y el resultado es un decimal: 18.0.'),
      ],
    },
    // ───────────── Día 8 ─────────────
    {
      id: 'py-lists',
      t: 'Listas',
      d: 'Guardar muchos valores en orden: añadir, quitar, cortar, ordenar y copiar sin sorpresas.',
      guide: [
        { h: 'Crear y acceder', p: [
          'Una lista es una colección ordenada y modificable. Se escribe entre corchetes y puede mezclar tipos, aunque lo normal es que todos sean del mismo.',
          'Se accede por índice igual que en los strings. Un índice que no existe lanza `IndexError`. A diferencia de los strings, puedes cambiar un elemento asignándolo.' ],
          code: `compra = ["leche", "pan", "huevos"]\nprint(compra[0])    # leche\nprint(compra[-1])   # huevos\nprint(len(compra))  # 3\ncompra[1] = "pan integral"\nprint(compra)       # ['leche', 'pan integral', 'huevos']` },
        { h: 'Añadir y quitar elementos', p: [
          '`append()` añade al final, `insert(i, x)` en una posición y `extend()` añade varios. `remove(x)` borra el primer elemento igual a `x` y `pop()` quita y devuelve el último (o el del índice que le pases).',
          '`in` comprueba si un elemento está en la lista.' ],
          code: `tareas = ["estudiar"]\ntareas.append("correr")\ntareas.insert(0, "desayunar")\ntareas.extend(["leer", "dormir"])\nprint(tareas)  # ['desayunar', 'estudiar', 'correr', 'leer', 'dormir']\ntareas.remove("correr")\nultima = tareas.pop()\nprint(ultima, tareas)    # dormir ['desayunar', 'estudiar', 'leer']\nprint("leer" in tareas)  # True` },
        { h: 'Cortar y ordenar', p: [
          'El slicing funciona igual que en los strings y devuelve una lista nueva.',
          '`sort()` ordena la lista en el sitio y devuelve `None`; `sorted()` devuelve una lista nueva y deja la original intacta. Un error clásico es escribir `lista = lista.sort()` y quedarse con `None`.',
          '`sum()`, `min()` y `max()` trabajan directamente sobre listas de números.' ],
          code: `notas = [7, 4, 9, 6]\nprint(sorted(notas))  # [4, 6, 7, 9]\nprint(notas)          # [7, 4, 9, 6]\nnotas.sort(reverse=True)\nprint(notas)          # [9, 7, 6, 4]\nprint(notas[:2])      # [9, 7]\nprint(sum(notas) / len(notas))  # 6.5` },
        { h: 'Copias y referencias', p: [
          '`b = a` no copia la lista: crea otro nombre para el mismo objeto. Si cambias `b`, cambias `a`.',
          'Para una copia independiente usa `a.copy()`, `list(a)` o `a[:]`.' ],
          code: `a = [1, 2, 3]\nb = a           # mismo objeto\nc = a.copy()    # copia independiente\na.append(4)\nprint(b)  # [1, 2, 3, 4]\nprint(c)  # [1, 2, 3]` },
        { h: 'Ejemplo real: el ticket de la compra', real: true, p: [
          'Con una lista de precios ya puedes sacar el número de artículos, el total y el producto más caro de un ticket.' ],
          code: `precios = [2.35, 1.20, 4.99, 0.89]\ntotal = sum(precios)\nprint("Artículos:", len(precios))  # Artículos: 4\nprint("Total:", round(total, 2))   # Total: 9.43\nprint("Más caro:", max(precios))   # Más caro: 4.99` },
      ],
      x: [
        out(`frutas = ["manzana", "pera", "uva"]\nprint(frutas[1])`, ['pera', 'manzana', 'uva', 'Error'], 'Los índices empiezan en 0: `frutas[1]` es el segundo elemento.'),
        ord('Añade el 4 al final de la lista nums', ['nums', '.', 'append', '(', '4', ')'], ['push', 'add'], 'Las listas de Python usan `.append()`. `push` es de JavaScript.'),
        out(`nums = [10, 20, 30, 40, 50]\nprint(nums[1:3])`, ['[20, 30]', '[10, 20, 30]', '[20, 30, 40]', '[20]'], 'El slice va del índice 1 al 3 sin incluirlo.'),
        out(`nums = [3, 1, 2]\nnums.sort()\nprint(nums)`, ['[1, 2, 3]', '[3, 2, 1]', 'None', '[3, 1, 2]'], '`sort()` ordena la lista en el sitio, de menor a mayor.'),
        out(`nums = [1, 2, 3]\nultimo = nums.pop()\nprint(ultimo, nums)`, ['3 [1, 2]', '1 [2, 3]', '3 [1, 2, 3]', '[1, 2] 3'], '`pop()` sin argumentos quita y devuelve el último elemento.'),
        mc('¿Qué devuelve `nums.sort()`?', ['None', 'La lista ordenada', 'Una copia ordenada', 'True'], '`sort()` ordena en el sitio y devuelve `None`. Si quieres una lista nueva, usa `sorted(nums)`.'),
        out(`a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)`, ['[1, 2, 3, 4]', '[1, 2, 3]', '[4]', 'Error'], '`b = a` no copia la lista: ambos nombres apuntan al mismo objeto. Usa `a.copy()` para duplicarla.'),
        out(`nums = [5, 3, 8, 1]\norden = sorted(nums)\nnums.append(orden[0] + orden[-1])\nprint(nums[-1], len(nums), nums[:2])`, ['9 5 [5, 3]', '6 5 [5, 3]', '9 4 [1, 3]', '9 5 [1, 3]'], '`sorted()` no toca `nums`; `orden` es [1, 3, 5, 8], así que se añade 1 + 8 = 9 al final de `nums`.'),
      ],
    },
    // ───────────── Día 9 ─────────────
    {
      id: 'py-tuples',
      t: 'Tuplas y conjuntos',
      d: 'Tuplas que no cambian, el desempaquetado y los sets para quitar duplicados y comparar grupos.',
      guide: [
        { h: '¿Qué es una tupla?', p: [
          'Una tupla es como una lista, pero inmutable: una vez creada no puedes añadir, quitar ni cambiar elementos. Se escribe con paréntesis.',
          'Úsala para datos que van juntos y no deben cambiar: unas coordenadas, un color RGB, una fecha. Además, al ser inmutable, puede ser clave de un diccionario.',
          'Se indexa y se corta igual que una lista, y tiene dos métodos: `count()` e `index()`.' ],
          code: `color = (255, 128, 0)\nprint(color[0])          # 255\nprint(len(color))        # 3\nprint(color.count(0))    # 1\nprint(color.index(128))  # 1` },
        { h: 'Inmutabilidad', p: [
          'Intentar cambiar un elemento lanza `TypeError`. Si de verdad necesitas modificarla, conviértela en lista, cámbiala y vuelve a convertirla.',
          'Esa protección es la ventaja: nadie puede alterar los datos por accidente en otra parte del programa.' ],
          code: `dias = ("lun", "mar", "mié")\n# dias[0] = "dom"  # TypeError: 'tuple' object does not support item assignment\nlista = list(dias)\nlista.append("jue")\ndias = tuple(lista)\nprint(dias)  # ('lun', 'mar', 'mié', 'jue')` },
        { h: 'Desempaquetado', p: [
          'Puedes repartir los elementos de una tupla en variables: `x, y = punto`. El número de variables debe coincidir con el de elementos, salvo que uses `*` para recoger el resto en una lista.',
          'Cuidado: los paréntesis solos no crean una tupla. Una tupla de un elemento necesita coma: `(5,)`.' ],
          code: `punto = (3, 4)\nx, y = punto\nprint(x, y)            # 3 4\nprimero, *resto = (1, 2, 3, 4)\nprint(primero, resto)  # 1 [2, 3, 4]\nprint(type((5,)), type((5)))  # <class 'tuple'> <class 'int'>` },
        { h: '¿Qué es un set?', p: [
          'Un set es una colección sin orden y sin elementos repetidos. Se escribe con llaves: `{1, 2, 3}`. Si metes duplicados, se quedan en uno.',
          'Un set vacío se crea con `set()`: `{}` crea un diccionario vacío.',
          'Comprobar si algo está en un set con `in` es muy rápido, incluso con millones de elementos. Por eso se usan para listas de "ya visto".' ],
          code: `etiquetas = {"python", "web", "python", "datos"}\nprint(len(etiquetas))      # 3\nprint("web" in etiquetas)  # True\nvacio = set()\nprint(type({}))            # <class 'dict'>` },
        { h: 'Operaciones de conjuntos', p: [
          'Unión `|` (todos), intersección `&` (los comunes), diferencia `-` (los de uno que no están en el otro) y diferencia simétrica `^` (los que están en uno solo).',
          '`issubset()` comprueba si todos los elementos de un set están en otro.' ],
          code: `a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(a | b)  # {1, 2, 3, 4, 5}\nprint(a & b)  # {3, 4}\nprint(a - b)  # {1, 2}\nprint(a ^ b)  # {1, 2, 5}\nprint({1, 2}.issubset(a))  # True` },
        { h: 'Ejemplo real: clientes que repiten', real: true, p: [
          'Una tienda quiere saber qué clientes compraron en enero y en febrero, cuáles dejaron de comprar y cuáles son nuevos. Son tres operaciones de conjuntos.' ],
          code: `enero = {"Ana", "Luis", "Eva", "Marta"}\nfebrero = {"Luis", "Marta", "Pedro"}\nfieles = enero & febrero\nperdidos = enero - febrero\nnuevos = febrero - enero\nprint(sorted(fieles))    # ['Luis', 'Marta']\nprint(sorted(perdidos))  # ['Ana', 'Eva']\nprint(sorted(nuevos))    # ['Pedro']` },
      ],
      x: [
        mc('¿Qué colección es inmutable?', ['tuple', 'list', 'dict', 'set'], 'Una tupla no se puede modificar después de crearla.'),
        out(`t = (10, 20, 30)\nprint(t[1])`, ['20', '10', '30', 'Error'], 'Las tuplas se indexan igual que las listas, desde 0.'),
        fill(`punto = (3, 4)\n___ = punto\nprint(x, y)  # 3 4`, ['x, y', 'x y', 'x; y', 'x & y'], 'Para desempaquetar, escribe las variables separadas por comas a la izquierda del `=`.'),
        out(`t = (1, 2, 3)\nt[0] = 9\nprint(t)`, ['TypeError', '(9, 2, 3)', '(1, 2, 3)', 'None'], 'Las tuplas no admiten asignar elementos, así que Python lanza `TypeError`.'),
        out(`s = {1, 2, 2, 3, 3, 3}\nprint(len(s))`, ['3', '6', '4', '1'], 'Un set elimina los duplicados: queda {1, 2, 3}.'),
        out(`s = {1, 2}\ns.add(2)\ns.add(5)\nprint(len(s))`, ['3', '4', '2', 'Error'], 'Añadir un 2 que ya existe no cambia nada; el 5 sí se añade.'),
        out(`a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)`, ['{2, 3}', '{1, 2, 3, 4}', '{1}', '{4}'], '`&` es la intersección: los elementos que están en ambos.'),
        out(`a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(len(a | b), sorted(a ^ b), {3}.issubset(a & b))`, ['5 [1, 2, 5] True', '7 [1, 2, 5] True', '5 [3, 4] True', '5 [1, 2, 5] False'], 'La unión tiene 5 elementos, la diferencia simétrica deja 1, 2 y 5, y el 3 está en la intersección {3, 4}.'),
      ],
    },
    // ───────────── Día 10 ─────────────
    {
      id: 'py-dicts',
      t: 'Diccionarios',
      d: 'Buscar valores por su clave: crear, cambiar, recorrer y anidar datos.',
      guide: [
        { h: 'Crear y acceder', p: [
          'Un diccionario asocia claves únicas con valores, como una agenda: buscas por el nombre y obtienes el teléfono. Se escribe `{clave: valor}`.',
          '`d["clave"]` devuelve el valor, pero lanza `KeyError` si la clave no existe. `d.get("clave", defecto)` es más seguro: devuelve el defecto (o `None`).' ],
          code: `persona = {"nombre": "Ana", "edad": 30, "ciudad": "Lima"}\nprint(persona["nombre"])                  # Ana\nprint(persona.get("email"))               # None\nprint(persona.get("email", "sin email"))  # sin email` },
        { h: 'Añadir, cambiar y borrar', p: [
          'Asignar a una clave la crea si no existe o cambia su valor si ya existe. `update()` mezcla otro diccionario.',
          '`pop(clave)` borra y devuelve el valor; `del d[clave]` solo borra. `in` comprueba si existe una clave (no un valor).' ],
          code: `stock = {"manzanas": 10}\nstock["peras"] = 5       # añade\nstock["manzanas"] -= 3   # modifica\nstock.update({"uvas": 8})\ndel stock["peras"]\nprint(stock)             # {'manzanas': 7, 'uvas': 8}\nprint("uvas" in stock)   # True` },
        { h: 'Recorrer un diccionario', p: [
          '`keys()` da las claves, `values()` los valores e `items()` los pares. Con `for clave, valor in d.items()` recorres todo a la vez.',
          'Desde Python 3.7 los diccionarios mantienen el orden en que insertaste las claves.' ],
          code: `notas = {"Ana": 9, "Luis": 6, "Eva": 8}\nfor alumno, nota in notas.items():\n    print(alumno, "->", nota)\nprint(list(notas.keys()))  # ['Ana', 'Luis', 'Eva']\nprint(sum(notas.values()) / len(notas))  # 7.666666666666667` },
        { h: 'Datos anidados', p: [
          'Los valores pueden ser listas u otros diccionarios. Así se representa casi cualquier dato real, y es exactamente la forma que tiene el JSON de las APIs.',
          'Las claves deben ser inmutables: textos, números o tuplas. Una lista no puede ser clave.' ],
          code: `usuario = {\n    "nombre": "Eva",\n    "idiomas": ["es", "en"],\n    "direccion": {"ciudad": "Sevilla", "cp": "41001"},\n}\nprint(usuario["direccion"]["ciudad"])  # Sevilla\nprint(usuario["idiomas"][-1])          # en` },
        { h: 'Ejemplo real: contar palabras de un texto', real: true, p: [
          'Contar cuántas veces aparece cada palabra es la base de los buscadores y del análisis de opiniones. El truco está en `get(palabra, 0) + 1`: si la palabra es nueva empieza en 0.' ],
          code: `texto = "el gato y el perro y el pez"\nconteo = {}\nfor palabra in texto.split():\n    conteo[palabra] = conteo.get(palabra, 0) + 1\nprint(conteo)  # {'el': 3, 'gato': 1, 'y': 2, 'perro': 1, 'pez': 1}` },
      ],
      x: [
        fill(`edades = {"ana": 30, "luis": 25}\nprint(edades___)  # 30`, ['["ana"]', '.ana', '("ana")', '{ana}'], 'A los valores de un diccionario se accede con corchetes y la clave.'),
        out(`d = {"a": 1}\nd["b"] = 2\nprint(len(d))`, ['2', '1', '3', 'Error'], 'Asignar a una clave nueva la añade al diccionario.'),
        out(`d = {"x": 1}\nprint(d.get("y", 0))`, ['0', 'None', 'KeyError', '1'], '`get()` devuelve el valor por defecto cuando la clave no existe.'),
        out(`d = {"a": 1, "b": 2}\nprint(list(d.keys()))`, ["['a', 'b']", '[1, 2]', "[('a', 1), ('b', 2)]", 'ab'], '`keys()` devuelve las claves del diccionario.'),
        out(`d = {"a": 1}\nprint(d["z"])`, ['KeyError', 'None', '0', 'Nada'], 'Acceder con corchetes a una clave que no existe lanza `KeyError`.'),
        typ('Borra la clave "pan" y guarda su valor', `cesta = {"pan": 1.2, "leche": 0.9}\nprecio = cesta.___("pan")`, 'pop', '`pop(clave)` elimina la clave y devuelve su valor.'),
        out(`precios = {"pan": 1, "leche": 2}\nprint(sum(precios.values()))`, ['3', '2', 'pan leche', 'Error'], '`values()` da los valores y `sum()` los suma.'),
        out(`inventario = {"pan": 2, "leche": 0}\ninventario["huevos"] = inventario.get("huevos", 0) + 12\ninventario["pan"] += 1\nprint(len(inventario), inventario["pan"] + inventario["huevos"], "leche" in inventario)`, ['3 15 True', '2 15 True', '3 14 True', '3 15 False'], 'Se añade "huevos" con 12 y "pan" pasa a 3: hay 3 claves y 3 + 12 = 15. "leche" sigue siendo una clave aunque valga 0.'),
      ],
    },
    // ───────────── Día 11 ─────────────
    {
      id: 'py-functions',
      t: 'Funciones',
      d: 'Agrupar código con def: parámetros, return, valores por defecto, *args, **kwargs y ámbito.',
      guide: [
        { h: 'Definir y llamar una función', p: [
          'Una función es un bloque de código con nombre que puedes reutilizar. Se define con `def`, recibe parámetros entre paréntesis y devuelve un resultado con `return`.',
          'Si te descubres copiando y pegando el mismo código, es momento de convertirlo en función: si hay un error, lo corriges en un solo sitio.' ],
          code: `def saludar(nombre):\n    return f"Hola, {nombre}"\n\nprint(saludar("Ana"))   # Hola, Ana\nprint(saludar("Luis"))  # Hola, Luis` },
        { h: 'return no es print', p: [
          '`print()` solo muestra un valor en pantalla; `return` lo devuelve para que puedas guardarlo y seguir operando con él.',
          'Una función sin `return` devuelve `None`. Si intentas sumarle algo, obtendrás `TypeError`.' ],
          code: `def doble_print(n):\n    print(n * 2)\n\ndef doble_return(n):\n    return n * 2\n\nresultado = doble_return(5) + 1\nprint(resultado)        # 11\nprint(doble_print(5))   # imprime 10 y después None` },
        { h: 'Parámetros por defecto y con nombre', p: [
          'Un parámetro puede tener un valor por defecto (`iva=0.21`) que se usa si no lo pasas. Los parámetros con defecto van siempre después de los obligatorios.',
          'Al llamar, puedes nombrar los argumentos (`descuento=0.1`): el código se entiende mejor y no importa el orden.' ],
          code: `def precio_final(precio, iva=0.21, descuento=0):\n    return round(precio * (1 - descuento) * (1 + iva), 2)\n\nprint(precio_final(100))                 # 121.0\nprint(precio_final(100, descuento=0.1))  # 108.9\nprint(precio_final(100, iva=0.10))       # 110.0` },
        { h: '*args, **kwargs y varios resultados', p: [
          '`*args` recoge cualquier número de argumentos posicionales en una tupla; `**kwargs` recoge los argumentos con nombre en un diccionario.',
          'Para devolver varios valores, sepáralos por comas: la función devuelve una tupla que puedes desempaquetar.' ],
          code: `def estadisticas(*numeros):\n    return min(numeros), max(numeros), sum(numeros) / len(numeros)\n\nmenor, mayor, media = estadisticas(4, 8, 6)\nprint(menor, mayor, media)  # 4 8 6.0\n\ndef perfil(**datos):\n    return datos\n\nprint(perfil(nombre="Eva", edad=28))  # {'nombre': 'Eva', 'edad': 28}` },
        { h: 'Ámbito de las variables', p: [
          'Las variables creadas dentro de una función son locales: nacen al llamarla y desaparecen al terminar. Asignar dentro de una función crea una variable local nueva, aunque fuera exista otra con el mismo nombre.',
          'La buena práctica es que una función reciba lo que necesita por parámetros y devuelva el resultado, en lugar de tocar variables globales.' ],
          code: `contador = 0\n\ndef sumar():\n    contador = 1   # variable local, no toca la de fuera\n\nsumar()\nprint(contador)  # 0` },
        { h: 'Ejemplo real: nota final de una asignatura', real: true, p: [
          'Un profesor pondera el examen al 60 % y las prácticas al 40 %, aunque en algún curso cambia el peso. Una función con un parámetro por defecto lo resuelve y devuelve la nota y el estado.' ],
          code: `def nota_final(examen, practicas, peso_examen=0.6):\n    nota = examen * peso_examen + practicas * (1 - peso_examen)\n    estado = "aprobado" if nota >= 5 else "suspenso"\n    return round(nota, 2), estado\n\nprint(nota_final(4.5, 7))     # (5.5, 'aprobado')\nprint(nota_final(3, 6, 0.8))  # (3.6, 'suspenso')` },
      ],
      x: [
        fill(`___ saludar(nombre):\n    return "Hola " + nombre`, ['def', 'function', 'fun', 'func'], 'Las funciones en Python se definen con `def`.'),
        out(`def doble(n):\n    return n * 2\n\nprint(doble(4))`, ['8', '44', 'n * 2', 'None'], 'La función devuelve 4 * 2, que es 8.'),
        typ('Completa la función para que devuelva el área del triángulo', `def area(base, altura):\n    ___ base * altura / 2`, 'return', '`return` devuelve el resultado a quien llamó a la función.'),
        out(`def f(a, b=10):\n    return a + b\n\nprint(f(5))`, ['15', '5', 'Error', '510'], 'Como no pasamos `b`, toma su valor por defecto, 10.'),
        out(`def f():\n    print("hi")\n\nr = f()\nprint(r)`, ['hi\nNone', 'hi', 'None', 'Error'], '`f()` imprime "hi" pero no tiene `return`, así que devuelve `None`.'),
        out(`def suma(*nums):\n    return sum(nums)\n\nprint(suma(1, 2, 3))`, ['6', '(1, 2, 3)', '123', 'Error'], '`*nums` agrupa los argumentos en una tupla y `sum()` los suma.'),
        out(`def f(a, b=2, c=3):\n    return a * b + c\n\nprint(f(1, c=10))`, ['12', '13', '5', 'Error'], '`b` conserva su defecto (2) y `c` vale 10: 1 * 2 + 10 = 12.'),
        out(`def resumen(*notas, minimo=5):\n    aprobadas = 0\n    for n in notas:\n        if n >= minimo:\n            aprobadas += 1\n    return aprobadas, len(notas)\n\na, t = resumen(4, 7, 5, 9, minimo=6)\nprint(f"{a}/{t}")`, ['2/4', '3/4', '2/5', '3/5'], '`*notas` recoge (4, 7, 5, 9) y `minimo` vale 6: solo aprueban 7 y 9. La función devuelve una tupla que se desempaqueta.'),
      ],
    },
    // ───────────── Día 12 ─────────────
    {
      id: 'py-comprehensions',
      t: 'Comprensiones',
      d: 'Crear listas, diccionarios y sets en una línea, filtrando y transformando a la vez.',
      guide: [
        { h: 'Del bucle a la comprensión', p: [
          'Una comprensión de lista crea una lista nueva aplicando una expresión a cada elemento: `[expresión for elemento in iterable]`.',
          'Hace lo mismo que un bucle con `append()`, pero en una línea y normalmente más rápido.' ],
          code: `precios = [10, 20, 40]\ncon_iva = []\nfor p in precios:\n    con_iva.append(p * 1.21)\n\ncon_iva = [p * 1.21 for p in precios]  # lo mismo en una línea\nprint([round(p, 1) for p in con_iva])   # [12.1, 24.2, 48.4]` },
        { h: 'Filtrar y elegir', p: [
          'Un `if` al final filtra: solo entran los elementos que cumplen la condición.',
          'Si lo que quieres es elegir entre dos valores para cada elemento, el `if ... else` va delante del `for` (es un ternario).' ],
          code: `nums = [3, -1, 8, 0, -5]\npositivos = [n for n in nums if n > 0]\netiquetas = ["par" if n % 2 == 0 else "impar" for n in nums]\nprint(positivos)  # [3, 8]\nprint(etiquetas)  # ['impar', 'impar', 'par', 'par', 'impar']` },
        { h: 'Comprensiones de diccionario y de set', p: [
          'Con llaves y `clave: valor` creas un diccionario; con llaves y un solo valor, un set.',
          'Son ideales para construir tablas de búsqueda rápidas a partir de una lista.' ],
          code: `nombres = ["ana", "luis", "eva"]\nlongitudes = {n: len(n) for n in nombres}\niniciales = {n[0].upper() for n in ["ana", "alba", "luis"]}\nprint(longitudes)         # {'ana': 3, 'luis': 4, 'eva': 3}\nprint(sorted(iniciales))  # ['A', 'L']` },
        { h: 'Anidadas, y cuándo no usarlas', p: [
          'Puedes encadenar varios `for` para aplanar una lista de listas. Se leen en el mismo orden que los bucles normales.',
          'Si una comprensión no cabe en una línea o necesita varias condiciones, un bucle normal será más legible. La claridad gana.' ],
          code: `matriz = [[1, 2], [3, 4], [5, 6]]\nplana = [x for fila in matriz for x in fila]\nprint(plana)  # [1, 2, 3, 4, 5, 6]` },
        { h: 'Ejemplo real: limpiar los emails de un formulario', real: true, p: [
          'Un formulario de registro guarda los emails tal y como los escribió la gente: con espacios, mayúsculas, vacíos o sin arroba. Una comprensión los limpia y filtra a la vez.' ],
          code: `registros = [" Ana@Mail.com", "", "luis@mail.com ", "sin-arroba", "EVA@mail.com"]\nemails = [r.strip().lower() for r in registros if "@" in r]\nprint(emails)  # ['ana@mail.com', 'luis@mail.com', 'eva@mail.com']` },
      ],
      x: [
        out(`cuadrados = [x * x for x in range(4)]\nprint(cuadrados)`, ['[0, 1, 4, 9]', '[1, 4, 9, 16]', '[0, 2, 4, 6]', '[0, 1, 4, 9, 16]'], 'Aplica `x * x` a cada valor de 0 a 3.'),
        fill(`mayus = [p.upper() ___ p in ["a", "b"]]`, ['for', 'in', 'with', 'each'], 'La estructura es `[expresión for elemento in iterable]`.'),
        out(`pares = [n for n in range(10) if n % 2 == 0]\nprint(pares)`, ['[0, 2, 4, 6, 8]', '[2, 4, 6, 8, 10]', '[0, 2, 4, 6, 8, 10]', '[1, 3, 5, 7, 9]'], 'El `if` filtra los pares de 0 a 9.'),
        out(`cuadrados = {n: n * n for n in range(3)}\nprint(cuadrados)`, ['{0: 0, 1: 1, 2: 4}', '[0, 1, 4]', '{0, 1, 4}', '{1: 1, 2: 4}'], 'Es una comprensión de diccionario: cada clave `n` se asocia con `n * n`.'),
        out(`print([c for c in "hola" if c != "o"])`, ["['h', 'l', 'a']", 'hla', "['h', 'o', 'l', 'a']", "['o']"], 'Recorre cada letra y descarta la "o".'),
        ord('Escribe una comprensión que duplique cada número de nums', ['[', 'n * 2', 'for', 'n', 'in', 'nums', ']'], ['(', 'each'], 'Primero la expresión, luego `for` variable `in` iterable, todo entre corchetes.'),
        out(`print(["A" if n > 5 else "B" for n in [3, 7, 5]])`, ["['B', 'A', 'B']", "['A']", "['B', 'A', 'A']", "['A', 'B', 'A']"], 'El ternario elige "A" o "B" para cada número. 5 no es mayor que 5, así que es "B".'),
        out(`ventas = {"lun": 120, "mar": 80, "mié": 150}\nbuenos = {d: v * 2 for d, v in ventas.items() if v >= 100}\nprint(buenos, sum(buenos.values()))`, ["{'lun': 240, 'mié': 300} 540", "{'lun': 120, 'mié': 150} 270", "{'lun': 240, 'mar': 160, 'mié': 300} 700", '[240, 300] 540'], 'El filtro deja fuera el martes (80) y la expresión duplica los demás: 240 + 300 = 540.'),
      ],
    },
    // ───────────── Día 13 ─────────────
    {
      id: 'py-modules',
      t: 'Módulos y paquetes con pip',
      d: 'Importar tu código y la biblioteca estándar, e instalar paquetes de PyPI con pip.',
      guide: [
        { h: '¿Qué es un módulo?', p: [
          'Un módulo es simplemente un archivo `.py`. Todo lo que defines en él (funciones, variables, clases) se puede usar desde otro archivo con `import`.',
          'Dividir un programa en módulos lo hace más fácil de mantener: cada archivo se ocupa de una cosa.' ],
          code: `# archivo: utilidades.py\nIVA = 0.21\n\ndef con_iva(precio):\n    return round(precio * (1 + IVA), 2)\n\n# archivo: main.py (en la misma carpeta)\nimport utilidades\nprint(utilidades.con_iva(50))  # 60.5` },
        { h: 'Formas de importar', p: [
          '`import math` carga el módulo y usas sus nombres con el prefijo: `math.sqrt()`. `from math import sqrt` trae solo ese nombre y lo usas sin prefijo.',
          '`import statistics as st` le pone un alias corto. Evita `from modulo import *`: llena tu código de nombres y no sabrás de dónde sale cada uno.' ],
          code: `import math\nfrom math import sqrt, pi\nimport statistics as st\n\nprint(math.floor(3.7))     # 3\nprint(sqrt(81))            # 9.0\nprint(round(pi, 2))        # 3.14\nprint(st.mean([2, 4, 9]))  # 5` },
        { h: 'La biblioteca estándar', p: [
          'Python viene "con pilas incluidas": `math` (matemáticas), `random` (azar), `datetime` (fechas), `os` y `pathlib` (archivos), `json`, `csv`, `re`, `statistics`... No hay que instalar nada.',
          '`random` sirve para juegos y simulaciones: `randint(a, b)` incluye los dos extremos, `choice()` elige un elemento y `shuffle()` baraja una lista en el sitio.' ],
          code: `import random\n\nprint(random.randint(1, 6))  # un número del 1 al 6\nprint(random.choice(["piedra", "papel", "tijera"]))\ncartas = [1, 2, 3, 4]\nrandom.shuffle(cartas)       # baraja la lista en el sitio\nprint(cartas)` },
        { h: 'pip y PyPI', p: [
          'La biblioteca estándar es grande, pero el verdadero poder de Python está en PyPI (Python Package Index), un repositorio con cientos de miles de paquetes: `requests`, `pandas`, `flask`, `numpy`...',
          'pip es el programa que los descarga e instala. Viene con Python. Si tienes varias versiones de Python, `python -m pip` garantiza que instalas en la misma que ejecutas.' ],
          code: `pip --version\npip install requests\npip install requests==2.32.3   # una versión exacta\npip install --upgrade requests\npip uninstall requests\npython -m pip install requests  # el pip de ESTE Python` },
        { h: 'requirements.txt', p: [
          '`pip freeze > requirements.txt` guarda la lista exacta de paquetes y versiones del proyecto. Se sube al repositorio junto al código.',
          'Quien clone el proyecto ejecuta `pip install -r requirements.txt` y obtiene exactamente las mismas versiones. Así evitas el clásico "en mi ordenador funciona".' ],
          code: `# requirements.txt\nrequests==2.32.3\npython-dateutil==2.9.0\n\n# en otro ordenador\npip install -r requirements.txt` },
        { h: 'Ejemplo real: tipo de cambio con requests', real: true, p: [
          'Con `requests` puedes consultar una API pública de divisas en tres líneas. `timeout` evita que el programa se quede colgado y `raise_for_status()` lanza un error si la respuesta no es correcta.' ],
          code: `# pip install requests\nimport requests\n\nr = requests.get("https://api.frankfurter.app/latest?from=EUR&to=USD", timeout=10)\nr.raise_for_status()\ndatos = r.json()\nprint("1 EUR =", datos["rates"]["USD"], "USD")` },
      ],
      x: [
        fill(`___ math\nprint(math.pi)`, ['import', 'include', 'using', 'require'], '`import` carga un módulo en Python.'),
        out(`import math\nprint(math.sqrt(25))`, ['5.0', '5', '25', 'Error'], '`math.sqrt` devuelve siempre un `float`.'),
        fill(`import statistics ___ st\nprint(st.mean([1, 2, 3]))`, ['as', 'to', '=', 'alias'], '`as` da un alias al módulo importado.'),
        out(`from math import floor, ceil\nprint(floor(2.5), ceil(2.1))`, ['2 3', '3 3', '2 2', '3 2'], '`floor` redondea hacia abajo y `ceil` hacia arriba, sin mirar los decimales.'),
        mc('¿Qué es pip?', ['El gestor de paquetes de Python', 'Un editor de código', 'Un tipo de dato', 'Un framework web'], 'pip instala y gestiona librerías de terceros.'),
        ord('Instala el paquete requests', ['pip', 'install', 'requests'], ['get', 'npm'], 'El comando es `pip install` seguido del nombre del paquete.'),
        mc('¿Qué hace `pip freeze > requirements.txt`?', ['Guarda los paquetes instalados y sus versiones en un archivo', 'Impide que Python se actualice', 'Borra los paquetes', 'Instala los paquetes del archivo'], 'Así otras personas pueden reproducir tu entorno.'),
        mc('Tu script falla con `ModuleNotFoundError: No module named \'requests\'`, pero `pip install requests` dice que ya está instalado. ¿Qué es lo más probable?', ['pip instala en otro Python distinto del que ejecuta el script: usa python -m pip install requests', 'requests no existe en PyPI', 'Hay que escribir import Requests con mayúscula', 'Hay que reiniciar el ordenador'], 'Con varias instalaciones de Python, `pip` y `python` pueden no corresponderse. `python -m pip` usa el pip del mismo intérprete.'),
      ],
    },
    // ───────────── Día 14 ─────────────
    {
      id: 'py-workshop-contacts',
      t: 'Taller de Kibi: la agenda de clientes',
      d: 'Proyecto de la semana 2: guardar clientes en una lista de diccionarios, buscarlos y filtrarlos con funciones en un módulo propio.',
      guide: [
        { h: 'El encargo', p: [
          'La tienda de Kibi ya tiene clientes fijos y quiere recordarlos: nombre, teléfono y cuántas compras llevan, para premiar a los más fieles.',
          'Este taller junta la semana 2: listas, diccionarios, funciones, comprensiones y módulos. Al final tendrás una agenda con menú que puedes usar de verdad.' ] },
        { h: 'Paso 1: los datos', p: [
          'Cada cliente es un diccionario con las mismas claves, y todos van en una lista. Es como una tabla: la lista son las filas y las claves, las columnas.',
          'Para leer un dato se combinan los dos accesos: primero la posición en la lista y después la clave.' ],
          code: `clientes = [\n    {"nombre": "Lucía", "telefono": "600111222", "compras": 12},\n    {"nombre": "Marco", "telefono": "600333444", "compras": 3},\n    {"nombre": "Aiko", "telefono": "600555666", "compras": 7},\n]\nprint(len(clientes), clientes[0]["nombre"])  # 3 Lucía` },
        { h: 'Paso 2: una función para cada tarea', p: [
          '`buscar()` recorre la lista y devuelve el primer cliente con ese nombre, sin distinguir mayúsculas. Si termina el bucle sin encontrarlo, devuelve `None`.',
          '`agregar()` reutiliza `buscar()` para no duplicar clientes y devuelve `True` o `False` para que quien la llama sepa qué ha pasado.' ],
          code: `def buscar(clientes, nombre):\n    for c in clientes:\n        if c["nombre"].lower() == nombre.lower():\n            return c\n    return None\n\ndef agregar(clientes, nombre, telefono):\n    if buscar(clientes, nombre):\n        return False\n    clientes.append({"nombre": nombre, "telefono": telefono, "compras": 0})\n    return True\n\nprint(buscar(clientes, "aiko")["telefono"])  # 600555666` },
        { h: 'Paso 3: filtrar con comprensiones', p: [
          'Una comprensión de lista saca los clientes fieles en una línea. Una de diccionario crea un listín para encontrar un teléfono al instante por el nombre.' ],
          code: `fieles = [c["nombre"] for c in clientes if c["compras"] >= 5]\nprint(fieles)  # ['Lucía', 'Aiko']\n\ntelefonos = {c["nombre"]: c["telefono"] for c in clientes}\nprint(telefonos["Marco"])  # 600333444` },
        { h: 'Paso 4: un módulo propio', p: [
          'Guarda `buscar()` y `agregar()` en un archivo `agenda.py`. Desde otro archivo de la misma carpeta las traes con `from agenda import buscar, agregar`.',
          'Así el menú queda en un archivo y la lógica en otro, y puedes reutilizar la agenda en otros programas sin copiar código.' ],
          code: `# main.py\nfrom agenda import buscar, agregar\n\nclientes = []\nagregar(clientes, "Eva", "600777888")\nprint(buscar(clientes, "EVA"))  # {'nombre': 'Eva', 'telefono': '600777888', 'compras': 0}` },
        { h: 'Ejemplo real: el menú de la agenda', real: true, p: [
          'Un bucle con un menú de opciones es la base de muchas herramientas de terminal. Cada opción llama a una función de `agenda.py`.' ],
          code: `from agenda import buscar, agregar\n\nclientes = []\nwhile True:\n    opcion = input("1 Buscar · 2 Añadir · 3 Fieles · 0 Salir: ")\n    if opcion == "0":\n        break\n    elif opcion == "1":\n        c = buscar(clientes, input("Nombre: "))\n        print(c if c else "No está en la agenda")\n    elif opcion == "2":\n        ok = agregar(clientes, input("Nombre: "), input("Teléfono: "))\n        print("Guardado" if ok else "Ya existe")\n    elif opcion == "3":\n        print([c["nombre"] for c in clientes if c["compras"] >= 5])` },
      ],
      x: [
        out(`c = {"nombre": "Aiko", "compras": 7}\nprint(c["compras"] + 1)`, ['8', '71', '7', 'Error'], '`c["compras"]` es el entero 7; al sumarle 1 da 8.'),
        out(`clientes = [{"n": "Ana"}, {"n": "Leo"}]\nprint(clientes[1]["n"])`, ['Leo', 'Ana', '{"n": "Leo"}', 'Error'], '`clientes[1]` es el segundo diccionario y `["n"]` lee su nombre.'),
        fill(`clientes.___({"nombre": "Eva", "compras": 0})`, ['append', 'add', 'insert', 'push'], '`append()` añade un elemento al final de una lista. `add()` es de los sets y `push()` no existe en Python.'),
        out(`def total_compras(clientes):\n    return sum(c["compras"] for c in clientes)\n\nprint(total_compras([{"compras": 2}, {"compras": 5}]))`, ['7', '25', '[2, 5]', 'Error'], 'La expresión recorre los clientes, toma sus compras y `sum()` las suma: 2 + 5.'),
        out(`clientes = [{"n": "Ana", "k": 9}, {"n": "Leo", "k": 2}, {"n": "Eva", "k": 5}]\nprint([c["n"] for c in clientes if c["k"] > 4])`, ["['Ana', 'Eva']", "['Leo']", "['Ana', 'Leo', 'Eva']", '[9, 5]'], 'La comprensión se queda con los clientes cuyo `k` es mayor que 4 y guarda su nombre.'),
        mc('¿Por qué `buscar()` tiene `return None` al final, fuera del bucle?', ['Para indicar que no encontró a nadie tras mirar todos los clientes', 'Porque toda función necesita un return al final', 'Para salir del bucle antes de tiempo', 'Para vaciar la lista de clientes'], 'Si algún cliente coincide, el `return` de dentro del bucle sale antes. Solo se llega al final cuando no hay ninguno.'),
        typ('Completa la línea que trae la función buscar desde agenda.py', `from agenda ___ buscar`, 'import', '`from módulo import nombre` trae solo ese nombre para usarlo directamente.'),
        out(`def agregar(clientes, nombre):\n    if nombre in [c["nombre"] for c in clientes]:\n        return False\n    clientes.append({"nombre": nombre, "compras": 0})\n    return True\n\nagenda = [{"nombre": "Ana", "compras": 3}]\nprint(agregar(agenda, "Leo"), agregar(agenda, "Ana"), len(agenda))`, ['True False 2', 'True True 3', 'False False 1', 'True False 3'], 'Leo no estaba y se añade (`True`); Ana ya estaba y no se repite (`False`). La agenda acaba con 2 clientes.'),
      ],
    },
    // ───────────── Día 15 ─────────────
    {
      id: 'py-exceptions',
      t: 'Errores y excepciones',
      d: 'Leer un traceback, reconocer los errores típicos y controlarlos con try, except, else, finally y raise.',
      guide: [
        { h: 'Cómo leer un traceback', p: [
          'Cuando algo falla, Python muestra un traceback. Léelo de abajo arriba: la última línea dice el tipo de error y su mensaje; justo encima aparecen el archivo, la línea y el código que falló.',
          'Copiar la última línea en un buscador suele llevarte directamente a la solución.' ],
          code: `Traceback (most recent call last):\n  File "tienda.py", line 3, in <module>\n    total = precio * cantidad\nNameError: name 'cantidad' is not defined` },
        { h: 'NameError, TypeError y ValueError', p: [
          '`NameError`: usas un nombre que no existe (una errata o una variable que aún no has creado).',
          '`TypeError`: la operación no tiene sentido con ese tipo, como sumar texto y número. `ValueError`: el tipo es correcto, pero el valor no, como `int("treinta")`.' ],
          code: `print(nombre)    # NameError: name 'nombre' is not defined\n"Edad: " + 30    # TypeError: can only concatenate str (not "int") to str\nint("treinta")   # ValueError: invalid literal for int() with base 10: 'treinta'\nlen(5)           # TypeError: object of type 'int' has no len()` },
        { h: 'try y except', p: [
          'Algunos errores no dependen de ti: el usuario escribe letras donde esperabas un número, un archivo no existe o la red se cae. `try` ejecuta el código que puede fallar y `except` decide qué hacer si falla, en lugar de que el programa se detenga.',
          'Captura siempre el tipo concreto (`except ValueError`). Un `except:` a secas atrapa también errores que no esperabas y esconde fallos de verdad.' ],
          code: `texto = "doce"\ntry:\n    numero = int(texto)\nexcept ValueError:\n    print("Eso no es un número")\n    numero = 0\nprint(numero)  # 0` },
        { h: 'else y finally', p: [
          '`else` se ejecuta solo si el `try` no lanzó ningún error: ahí va el código que depende de que todo saliera bien.',
          '`finally` se ejecuta siempre, haya error o no. Se usa para liberar recursos: cerrar archivos o conexiones.' ],
          code: `try:\n    resultado = 10 / 2\nexcept ZeroDivisionError:\n    print("Error")\nelse:\n    print("Resultado:", resultado)  # solo si no hubo error\nfinally:\n    print("Fin del cálculo")         # siempre` },
        { h: 'Lanzar errores con raise', p: [
          'Con `raise` lanzas tú una excepción cuando los datos no tienen sentido para tu función. Es mejor fallar pronto y con un mensaje claro que devolver un resultado incorrecto.',
          'Quien llame a la función decidirá si captura el error y cómo.' ],
          code: `def retirar(saldo, cantidad):\n    if cantidad > saldo:\n        raise ValueError("Saldo insuficiente")\n    return saldo - cantidad\n\ntry:\n    retirar(50, 80)\nexcept ValueError as e:\n    print("Error:", e)  # Error: Saldo insuficiente` },
        { h: 'Ejemplo real: pedir la edad hasta que sea válida', real: true, p: [
          'En un programa de consola no puedes fiarte de lo que escribe el usuario. Este bucle repite la pregunta hasta recibir un entero positivo, sin que el programa se rompa.' ],
          code: `while True:\n    try:\n        edad = int(input("Edad: "))\n        if edad < 0:\n            raise ValueError("negativa")\n        break\n    except ValueError:\n        print("Introduce un número entero positivo")\nprint("Edad registrada:", edad)` },
      ],
      x: [
        mc('¿Qué error produce `print(nombre)` si `nombre` no existe?', ['NameError', 'TypeError', 'SyntaxError', 'ValueError'], 'Python no encuentra ninguna variable con ese nombre.'),
        mc('¿Qué error produce `"5" + 5`?', ['TypeError', 'ValueError', 'NameError', 'Ninguno'], 'No se puede sumar un `str` y un `int`; convierte uno de ellos primero.'),
        mc('¿Qué error produce `int("hola")`?', ['ValueError', 'TypeError', 'NameError', 'SyntaxError'], 'El tipo es correcto (un texto), pero su valor no se puede convertir en número.'),
        fill(`___:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("error")`, ['try', 'do', 'catch', 'test'], 'El bloque que puede fallar va dentro de `try`.'),
        out(`try:\n    n = int("abc")\nexcept ValueError:\n    n = -1\nprint(n)`, ['-1', 'abc', '0', 'Error'], 'La conversión falla, se captura `ValueError` y se asigna -1.'),
        out(`try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("error")\nfinally:\n    print("fin")`, ['error\nfin', 'fin', 'error', 'inf\nfin'], 'Dividir entre cero lanza `ZeroDivisionError`, que se captura. `finally` se ejecuta siempre.'),
        fill(`def dividir(a, b):\n    if b == 0:\n        ___ ValueError("b no puede ser 0")\n    return a / b`, ['raise', 'throw', 'except', 'error'], 'En Python las excepciones se lanzan con `raise`. `throw` es de Java y JavaScript.'),
        out(`def convertir(valores):\n    total = 0\n    for v in valores:\n        try:\n            total += int(v)\n        except ValueError:\n            total -= 1\n        finally:\n            total += 10\n    return total\n\nprint(convertir(["5", "a", "2"]))`, ['36', '6', '26', '37'], '"5" suma 5, "a" resta 1 y "2" suma 2, y `finally` añade 10 en cada vuelta: 5 - 1 + 2 + 30 = 36.'),
      ],
    },
    // ───────────── Día 16 ─────────────
    {
      id: 'py-files',
      t: 'Leer y escribir archivos',
      d: 'open() y with, rutas, archivos que no existen, CSV y JSON.',
      guide: [
        { h: 'Abrir y escribir', p: [
          '`open(ruta, modo)` abre un archivo. Modos: `"r"` leer (por defecto), `"w"` escribir borrando lo que hubiera, `"a"` añadir al final y `"x"` crear (falla si ya existe).',
          'Usa siempre `with open(...) as f:`: el archivo se cierra solo al salir del bloque, incluso si hay un error. Indica `encoding="utf-8"` para que las tildes y la ñ se guarden bien en cualquier sistema.' ],
          code: `with open("notas.txt", "w", encoding="utf-8") as f:\n    f.write("Comprar pan\\n")\n    f.write("Llamar al médico\\n")\n\nwith open("notas.txt", "a", encoding="utf-8") as f:\n    f.write("Pagar la luz\\n")` },
        { h: 'Leer', p: [
          '`read()` devuelve todo el contenido en un string, `readline()` una línea y `readlines()` una lista de líneas (cada una con su `\\n` final).',
          'Para archivos grandes, recorre el archivo con `for`: lee línea a línea sin cargarlo entero en memoria.' ],
          code: `with open("notas.txt", encoding="utf-8") as f:\n    for numero, linea in enumerate(f, start=1):\n        print(numero, linea.strip())\n# 1 Comprar pan\n# 2 Llamar al médico\n# 3 Pagar la luz` },
        { h: 'Rutas y archivos que no existen', p: [
          'Abrir para leer un archivo que no existe lanza `FileNotFoundError`; captúralo si es algo que puede pasar.',
          '`pathlib.Path` maneja rutas sin preocuparte de si el sistema usa `/` o `\\`, y te dice la extensión, el nombre o si el archivo existe.' ],
          code: `from pathlib import Path\n\nruta = Path("datos") / "clientes.csv"\nprint(ruta.suffix)    # .csv\nprint(ruta.name)      # clientes.csv\nprint(ruta.exists())  # False si aún no existe` },
        { h: 'JSON', p: [
          'JSON es el formato estándar para guardar e intercambiar datos estructurados. `json.dump()` escribe un objeto de Python en un archivo y `json.load()` lo lee.',
          '`json.dumps()` y `json.loads()` (con s de string) hacen lo mismo pero con textos. Fíjate en que `True` de Python se convierte en `true` en JSON.' ],
          code: `import json\n\nconfig = {"tema": "oscuro", "idioma": "es", "avisos": True}\nwith open("config.json", "w", encoding="utf-8") as f:\n    json.dump(config, f, indent=2)\n\nwith open("config.json", encoding="utf-8") as f:\n    cargada = json.load(f)\nprint(cargada["tema"])           # oscuro\nprint(json.dumps({"ok": True}))  # {"ok": true}` },
        { h: 'Ejemplo real: sumar los gastos de un CSV', real: true, p: [
          'Tu banco te deja descargar los movimientos en CSV. `csv.DictReader` lee cada fila como un diccionario cuyas claves son los nombres de la cabecera.',
          'Abre los CSV con `newline=""`, como recomienda la documentación del módulo `csv`.' ],
          code: `import csv\n\nwith open("gastos.csv", "w", newline="", encoding="utf-8") as f:\n    f.write("concepto,importe\\nalquiler,650\\nluz,48.30\\nsúper,212.45\\n")\n\ntotal = 0\nwith open("gastos.csv", newline="", encoding="utf-8") as f:\n    for fila in csv.DictReader(f):\n        total += float(fila["importe"])\nprint(f"Gasto del mes: {total:.2f} €")  # Gasto del mes: 910.75 €` },
      ],
      x: [
        fill(`___ open("datos.txt") as f:\n    texto = f.read()`, ['with', 'using', 'try', 'open'], '`with` cierra el archivo automáticamente al salir del bloque, incluso si hay un error.'),
        mc('¿Qué modo de `open()` añade texto al final sin borrar lo que hay?', ['"a"', '"w"', '"r"', '"x"'], '`"w"` sobrescribe el archivo entero; `"a"` (append) añade al final.'),
        mc('¿Qué pasa si abres con `"r"` un archivo que no existe?', ['Se lanza FileNotFoundError', 'Se crea vacío', 'Devuelve None', 'Se abre en modo escritura'], 'Solo los modos de escritura crean el archivo.'),
        out(`import json\ntexto = json.dumps({"a": 1})\nprint(type(texto))`, ["<class 'str'>", "<class 'dict'>", "<class 'json'>", '{"a": 1}'], '`dumps` (dump string) convierte un objeto de Python en texto JSON.'),
        out(`import json\nd = json.loads('{"x": [1, 2]}')\nprint(d["x"][1])`, ['2', '1', '[1, 2]', 'Error'], '`loads` convierte el texto JSON en un diccionario.'),
        mc('¿Qué devuelve `f.readlines()`?', ['Una lista con cada línea del archivo', 'Solo la primera línea', 'Todo el texto en un string', 'El número de líneas'], 'Cada elemento de la lista incluye el salto de línea final.'),
        typ('Abre el archivo para escribir desde cero', `with open("log.txt", "___") as f:\n    f.write("inicio")`, 'w', '`"w"` crea el archivo o borra su contenido antes de escribir.'),
        out(`with open("t.txt", "w") as f:\n    f.write("uno\\ndos\\n")\nwith open("t.txt", "a") as f:\n    f.write("tres\\n")\nwith open("t.txt") as f:\n    lineas = f.readlines()\nprint(len(lineas), lineas[-1].strip())`, ['3 tres', '2 tres', '1 tres', '3 uno'], '`"w"` escribe dos líneas y `"a"` añade la tercera sin borrar. `strip()` quita el salto de línea de "tres\\n".'),
      ],
    },
    // ───────────── Día 17 ─────────────
    {
      id: 'py-datetime',
      t: 'Fechas y horas',
      d: 'Crear fechas, pasarlas a texto y al revés, y calcular cuánto tiempo hay entre dos.',
      guide: [
        { h: 'El módulo datetime', p: [
          '`datetime` tiene varias clases: `date` (solo fecha), `time` (solo hora), `datetime` (fecha y hora) y `timedelta` (una duración).',
          '`datetime.now()` da el momento actual y `date.today()` la fecha de hoy. Sus atributos `year`, `month`, `day`, `hour`... te dan cada parte.' ],
          code: `from datetime import datetime, date\n\nahora = datetime.now()\nprint(ahora.year, ahora.month, ahora.day)\nhoy = date.today()\nprint(hoy)  # p. ej. 2025-03-14` },
        { h: 'Crear fechas concretas', p: [
          'Pasa año, mes y día (y si quieres hora y minutos) al constructor. Al imprimir una fecha se muestra en formato ISO: año-mes-día.',
          '`weekday()` devuelve el día de la semana como número: 0 es lunes y 6 domingo.' ],
          code: `from datetime import date, datetime\n\ncumple = date(1995, 8, 21)\nprint(cumple.year)       # 1995\nprint(cumple.weekday())  # 0\ncita = datetime(2025, 6, 3, 17, 30)\nprint(cita)              # 2025-06-03 17:30:00` },
        { h: 'De fecha a texto y de texto a fecha', p: [
          '`strftime()` (string format time) convierte una fecha en texto con el formato que quieras: `%d` día, `%m` mes, `%Y` año, `%H` hora y `%M` minutos.',
          '`strptime()` (string parse time) hace lo contrario: lee un texto con ese formato y devuelve un `datetime`. Si el texto no encaja, lanza `ValueError`.' ],
          code: `from datetime import datetime\n\ncita = datetime(2025, 6, 3, 17, 30)\nprint(cita.strftime("%d/%m/%Y %H:%M"))  # 03/06/2025 17:30\nnavidad = datetime.strptime("25/12/2025", "%d/%m/%Y")\nprint(navidad.month)                    # 12` },
        { h: 'Sumar y restar tiempo', p: [
          'Sumar un `timedelta` a una fecha la mueve hacia delante; restarlo, hacia atrás. Python ya sabe cuántos días tiene cada mes y qué años son bisiestos.',
          'Restar dos fechas da un `timedelta`; su atributo `days` es la diferencia en días.' ],
          code: `from datetime import date, timedelta\n\ninicio = date(2025, 1, 30)\nprint(inicio + timedelta(days=7))  # 2025-02-06\nfin = date(2025, 12, 31)\nprint((fin - inicio).days)         # 335` },
        { h: 'Ejemplo real: calcular la edad de alguien', real: true, p: [
          'Restar años no basta: si la persona aún no ha cumplido este año, hay que quitar uno. Comparar tuplas `(mes, día)` lo resuelve en una línea.',
          'Recibir `hoy` como parámetro, en lugar de llamar a `date.today()` dentro, hace que la función sea fácil de probar.' ],
          code: `from datetime import date\n\ndef edad(nacimiento, hoy):\n    anios = hoy.year - nacimiento.year\n    if (hoy.month, hoy.day) < (nacimiento.month, nacimiento.day):\n        anios -= 1   # aún no ha cumplido este año\n    return anios\n\nprint(edad(date(1990, 11, 5), date(2025, 3, 14)))  # 34` },
      ],
      x: [
        fill(`from datetime ___ datetime\nprint(datetime.now())`, ['import', 'include', 'use', 'from'], '`from módulo import nombre` trae un nombre concreto del módulo.'),
        out(`from datetime import date\nd = date(2024, 5, 9)\nprint(d.year)`, ['2024', '5', '9', '2024-05-09'], '`year` es el atributo con el año.'),
        out(`from datetime import date\nd = date(2024, 5, 9)\nprint(d.strftime("%d/%m/%Y"))`, ['09/05/2024', '2024/05/09', '9/5/2024', '05/09/2024'], '`%d` es el día con dos cifras, `%m` el mes y `%Y` el año con cuatro.'),
        out(`from datetime import date\na = date(2024, 1, 1)\nb = date(2024, 1, 31)\nprint((b - a).days)`, ['30', '31', '1', 'Error'], 'Restar dos fechas da un `timedelta`; del 1 al 31 hay 30 días.'),
        out(`from datetime import date, timedelta\nd = date(2024, 2, 28) + timedelta(days=1)\nprint(d)`, ['2024-02-29', '2024-03-01', '2024-02-28', 'Error'], '2024 es bisiesto, así que tras el 28 de febrero viene el 29.'),
        mc('¿Qué hace `datetime.strptime("10/03/2024", "%d/%m/%Y")`?', ['Convierte el texto en un objeto datetime', 'Convierte una fecha en texto', 'Devuelve la fecha actual', 'Calcula la diferencia de días'], 'strptime viene de "string parse time": de texto a fecha. `strftime` hace lo contrario.'),
        typ('Suma dos semanas a la fecha', `from datetime import date, timedelta\nnueva = date(2025, 1, 1) + timedelta(___=2)`, 'weeks', '`timedelta` acepta `days`, `weeks`, `hours`, `minutes` y `seconds`.'),
        out(`from datetime import date, timedelta\nfactura = date(2025, 1, 31)\nvence = factura + timedelta(days=30)\nprint(vence.strftime("%d/%m"), (vence - factura).days, vence > factura)`, ['02/03 30 True', '28/02 30 True', '03/02 30 True', '02/03 28 True'], 'Febrero de 2025 tiene 28 días: 30 días después del 31 de enero es el 2 de marzo. Las fechas se pueden comparar con `>`.'),
      ],
    },
    // ───────────── Día 18 ─────────────
    {
      id: 'py-regex',
      t: 'Buscar patrones con regex',
      d: 'Validar, buscar y reemplazar texto con expresiones regulares y el módulo re.',
      guide: [
        { h: '¿Qué es una expresión regular?', p: [
          'Una expresión regular (regex) es un patrón que describe un tipo de texto: "tres dígitos", "algo que parece un email"... El módulo `re` busca esos patrones.',
          'Escribe los patrones como cadenas raw, con `r` delante (`r"\\d+"`), para que Python no interprete las barras invertidas.',
          '`re.search()` devuelve la primera coincidencia (o `None`) y `re.findall()` una lista con todas.' ],
          code: `import re\n\ntexto = "Pedido 4521 enviado el 12/03"\nprint(re.search(r"\\d+", texto).group())  # 4521\nprint(re.findall(r"\\d+", texto))         # ['4521', '12', '03']` },
        { h: 'Los símbolos básicos', p: [
          '`\\d` es un dígito, `\\w` una letra, dígito o guion bajo, `\\s` un espacio y `.` cualquier carácter. `[aeiou]` es uno de esos caracteres y `[^0-9]` cualquiera que no sea dígito.',
          'Cuantificadores: `+` una o más veces, `*` cero o más, `?` opcional y `{5}` exactamente cinco. `^` marca el inicio, `$` el final y `\\b` el borde de una palabra.',
          'Ojo: `[aeiou]` no incluye las vocales con tilde.' ],
          code: `import re\n\nprint(re.findall(r"[aeiou]", "murciélago"))             # ['u', 'i', 'a', 'o']\nprint(re.findall(r"\\b\\w{5}\\b", "el perro come carne"))  # ['perro', 'carne']\nprint(bool(re.fullmatch(r"\\d{5}", "28001")))            # True` },
        { h: 'search, match, fullmatch y grupos', p: [
          '`match()` solo busca al principio del texto, `fullmatch()` exige que encaje el texto entero y `search()` busca en cualquier parte.',
          'Los paréntesis crean grupos que puedes extraer por separado con `group(n)` o todos juntos con `groups()`.' ],
          code: `import re\n\nfecha = "Fecha: 2025-03-14"\nm = re.search(r"(\\d{4})-(\\d{2})-(\\d{2})", fecha)\nprint(m.group(1))              # 2025\nprint(m.groups())              # ('2025', '03', '14')\nprint(re.match(r"\\d", fecha))  # None` },
        { h: 'Reemplazar y dividir', p: [
          '`re.sub(patrón, reemplazo, texto)` sustituye todas las coincidencias. `re.split()` corta el texto por un patrón, más flexible que `str.split()`.' ],
          code: `import re\n\nprint(re.sub(r"\\s+", " ", "demasiados    espacios   aquí"))  # demasiados espacios aquí\nprint(re.split(r"[,;]\\s*", "rojo, verde;azul"))              # ['rojo', 'verde', 'azul']` },
        { h: 'Ejemplo real: validar emails y extraer teléfonos', real: true, p: [
          'Un formulario necesita rechazar emails mal escritos, y un CRM quiere sacar los teléfonos de unas notas escritas a mano, estén o no separados por espacios.',
          'Ningún patrón de email es perfecto; este cubre los casos habituales. Para validar de verdad, se envía un correo de confirmación.' ],
          code: `import re\n\npatron_email = r"^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"\nfor email in ["ana@mail.com", "mal@", "luis.p@empresa.es"]:\n    print(email, bool(re.match(patron_email, email)))\n\nnotas = "Llamar a Ana 612 345 678 o a Luis 699112233"\nprint(re.findall(r"\\d{3}\\s?\\d{3}\\s?\\d{3}", notas))  # ['612 345 678', '699112233']` },
      ],
      x: [
        mc('¿Qué módulo de Python trabaja con expresiones regulares?', ['re', 'regex', 'regexp', 'match'], 'El módulo estándar se llama `re`.'),
        mc('¿Qué representa `\\d` en una expresión regular?', ['Un dígito del 0 al 9', 'Cualquier letra', 'Un espacio', 'El final del texto'], '`\\d` equivale a `[0-9]`.'),
        out(`import re\nprint(re.findall(r"\\d+", "a12b3"))`, ["['12', '3']", "['1', '2', '3']", '12, 3', '[12, 3]'], '`\\d+` busca secuencias de uno o más dígitos seguidos, y devuelve textos.'),
        out(`import re\nprint(re.sub(r"\\s+", "-", "hola  mundo bonito"))`, ['hola-mundo-bonito', 'hola--mundo-bonito', 'holamundobonito', 'hola mundo bonito'], '`\\s+` agrupa los espacios seguidos en una sola coincidencia.'),
        out(`import re\nprint(bool(re.match(r"^[A-Z]", "python")))`, ['False', 'True', 'None', 'P'], '`^[A-Z]` exige que el texto empiece por mayúscula, y "python" empieza por minúscula.'),
        fill(`import re\ntexto = "ana@web.com y luis@web.com"\nemails = re.___(r"\\w+@\\w+\\.com", texto)  # todas las coincidencias`, ['findall', 'search', 'match', 'find'], '`findall` devuelve una lista con todas las coincidencias.'),
        out(`import re\nm = re.search(r"(\\w+)@(\\w+)", "escribe a ana@correo hoy")\nprint(m.group(2))`, ['correo', 'ana', 'ana@correo', '@'], 'El patrón tiene dos grupos: el primero captura "ana" y el segundo "correo".'),
        out(`import re\nlog = "ERROR 404 en /login, ERROR 500 en /pago, OK 200 en /"\nerrores = re.findall(r"ERROR (\\d{3})", log)\nprint(errores, re.sub(r"\\d", "#", errores[0]))`, ["['404', '500'] ###", "['ERROR 404', 'ERROR 500'] ###", "['404', '500', '200'] ###", "['404', '500'] #"], 'Con un grupo, `findall` devuelve solo lo capturado, y el 200 no va precedido de ERROR. `sub` cambia cada dígito de "404" por #.'),
      ],
    },
    // ───────────── Día 19 ─────────────
    {
      id: 'py-higher-order',
      t: 'Funciones como valores',
      d: 'Pasar funciones a otras funciones: lambda, map, filter, sorted con key, closures y decoradores.',
      guide: [
        { h: 'Las funciones también son valores', p: [
          'En Python una función es un objeto más: puedes guardarla en una variable, pasarla como argumento o devolverla desde otra función.',
          'Una función de orden superior es la que recibe o devuelve otras funciones. Permite escribir código genérico que se adapta a lo que le pases.' ],
          code: `def gritar(texto):\n    return texto.upper() + "!"\n\ndef aplicar(funcion, valor):\n    return funcion(valor)\n\nprint(aplicar(gritar, "hola"))  # HOLA!\nprint(aplicar(len, "hola"))     # 4` },
        { h: 'lambda: funciones de una línea', p: [
          '`lambda parametros: expresión` crea una función anónima pequeña. Se usa sobre todo como argumento de `sorted`, `map`, `filter`, `max`...',
          'Si la lógica necesita más de una expresión, define una función normal con `def`.' ],
          code: `doble = lambda x: x * 2\nprint(doble(7))  # 14\n\nproductos = [("pan", 1.2), ("queso", 4.5), ("leche", 0.9)]\nproductos.sort(key=lambda p: p[1])\nprint(productos[0])  # ('leche', 0.9)` },
        { h: 'map, filter y reduce', p: [
          '`map(f, datos)` aplica `f` a cada elemento; `filter(f, datos)` se queda con los que hacen `f` verdadera. Devuelven iteradores: envuélvelos en `list()` para ver el resultado.',
          '`reduce` (del módulo `functools`) combina todos los elementos en un solo valor. Muchas veces una comprensión de lista es más legible que `map` y `filter`.' ],
          code: `from functools import reduce\n\nnums = [1, 2, 3, 4, 5]\nprint(list(map(lambda n: n ** 2, nums)))         # [1, 4, 9, 16, 25]\nprint(list(filter(lambda n: n % 2 == 1, nums)))  # [1, 3, 5]\nprint(reduce(lambda a, b: a * b, nums))          # 120` },
        { h: 'Closures', p: [
          'Una función definida dentro de otra recuerda las variables de la función exterior aunque esta ya haya terminado. Eso es un closure.',
          'Sirve para fabricar funciones configuradas: aquí, una función de descuento para cada porcentaje.' ],
          code: `def crear_descuento(porcentaje):\n    def aplicar(precio):\n        return precio * (1 - porcentaje / 100)\n    return aplicar\n\nrebajas = crear_descuento(20)\nprint(rebajas(50))  # 40.0` },
        { h: 'Decoradores', p: [
          'Un decorador es una función que recibe otra y devuelve una versión ampliada. Se aplica con `@nombre` encima del `def`.',
          'Se usan para registrar llamadas, medir tiempos, comprobar permisos o cachear resultados sin tocar la función original. Flask, que verás el día 27, los usa para las rutas.' ],
          code: `def registrar(funcion):\n    def envoltura(*args):\n        print("Llamando a", funcion.__name__)\n        return funcion(*args)\n    return envoltura\n\n@registrar\ndef sumar(a, b):\n    return a + b\n\nprint(sumar(2, 3))\n# Llamando a sumar\n# 5` },
        { h: 'Ejemplo real: catálogo de una tienda', real: true, p: [
          'Con `filter`, `map`, `sorted` y `max` con `key` puedes responder preguntas sobre un catálogo: qué productos cuestan menos de 20 € y cuál es el más caro.' ],
          code: `productos = [\n    {"nombre": "Auriculares", "precio": 59.9},\n    {"nombre": "Cable USB", "precio": 7.5},\n    {"nombre": "Ratón", "precio": 19.9},\n]\nbaratos = filter(lambda p: p["precio"] < 20, productos)\nnombres = sorted(map(lambda p: p["nombre"], baratos))\nprint(nombres)  # ['Cable USB', 'Ratón']\nmas_caro = max(productos, key=lambda p: p["precio"])\nprint(mas_caro["nombre"])  # Auriculares` },
      ],
      x: [
        mc('¿Qué es una función de orden superior?', ['Una función que recibe o devuelve otras funciones', 'Una función definida dentro de una clase', 'Una función con más de tres parámetros', 'Una función que se ejecuta más rápido'], '`map`, `filter` y `sorted(key=...)` son ejemplos: reciben una función como argumento.'),
        out(`cuadrado = lambda x: x ** 2\nprint(cuadrado(3))`, ['9', '6', '27', '8'], '`**` es la potencia: 3 elevado a 2 es 9.'),
        fill(`doble = ___ x: x * 2\nprint(doble(5))  # 10`, ['lambda', 'def', 'fn', 'func'], 'Las funciones anónimas de una línea se crean con `lambda`.'),
        out(`print(list(map(lambda n: n + 1, [1, 2, 3])))`, ['[2, 3, 4]', '[1, 2, 3]', '6', '<map object>'], '`map` aplica la función a cada elemento y `list()` muestra el resultado.'),
        out(`print(list(filter(lambda n: n > 2, [1, 2, 3, 4])))`, ['[3, 4]', '[1, 2]', '[False, False, True, True]', '2'], '`filter` se queda con los elementos para los que la función devuelve `True`.'),
        out(`def multiplicador(n):\n    def f(x):\n        return x * n\n    return f\n\ntriple = multiplicador(3)\nprint(triple(5))`, ['15', '8', '3', 'Error'], '`f` es un closure: recuerda el valor de `n` aunque `multiplicador` ya haya terminado.'),
        out(`def gritar(f):\n    def envoltura():\n        return f().upper()\n    return envoltura\n\n@gritar\ndef saludo():\n    return "hola"\n\nprint(saludo())`, ['HOLA', 'hola', 'envoltura', 'Error'], '`@gritar` sustituye `saludo` por `envoltura`, que pasa el resultado a mayúsculas.'),
        out(`from functools import reduce\nnums = [3, 8, 1, 6]\nr = reduce(lambda a, b: a + b, map(lambda n: n * 10, filter(lambda n: n > 2, nums)))\nprint(r)`, ['170', '180', '17', '[30, 80, 60]'], '`filter` deja 3, 8 y 6; `map` los multiplica por 10 y `reduce` los suma: 30 + 80 + 60 = 170.'),
      ],
    },
    // ───────────── Día 20 ─────────────
    {
      id: 'py-venv',
      t: 'Entornos virtuales',
      d: 'Un entorno por proyecto con venv, para que las dependencias de uno no rompan otro.',
      guide: [
        { h: 'El problema que resuelven', p: [
          'Imagina dos proyectos: uno necesita Django 4 y otro Django 5. Si instalas todo en el Python del sistema, uno de los dos se rompe.',
          'Un entorno virtual es una carpeta con su propio Python y sus propios paquetes. Cada proyecto tiene el suyo y no se pisan.' ] },
        { h: 'Crear y activar un entorno', p: [
          '`python -m venv .venv` crea el entorno en la carpeta `.venv`. Después hay que activarlo; el prompt de la terminal mostrará `(.venv)` al principio.' ],
          code: `# crear\npython -m venv .venv\n\n# activar en macOS y Linux\nsource .venv/bin/activate\n\n# activar en Windows (PowerShell)\n.venv\\Scripts\\Activate.ps1\n\n# salir del entorno\ndeactivate` },
        { h: 'Instalar y compartir dependencias', p: [
          'Con el entorno activo, `pip install` instala solo dentro de él. Al terminar, guarda la lista con `pip freeze > requirements.txt`.',
          'La carpeta `.venv` no se sube a Git: se añade a `.gitignore` y cada persona la recrea con `pip install -r requirements.txt`.' ],
          code: `pip install flask requests\npip freeze > requirements.txt\n\n# en .gitignore\n.venv/` },
        { h: 'Comprobar qué Python se está usando', p: [
          'Si un paquete no se importa, comprueba qué intérprete estás usando. Con un entorno activo, `sys.prefix` apunta a la carpeta del entorno.',
          'Editores como VS Code permiten elegir el intérprete del entorno para que el autocompletado y la ejecución usen los mismos paquetes.' ],
          code: `import sys\nprint(sys.executable)                 # ruta del Python en uso\nprint(sys.prefix != sys.base_prefix)  # True si hay un entorno activo` },
        { h: 'Ejemplo real: preparar un proyecto nuevo', real: true, p: [
          'Estos son los pasos que seguirías al empezar cualquier proyecto profesional en Python, por ejemplo una app que consulta el tiempo.' ],
          code: `mkdir clima-app\ncd clima-app\npython -m venv .venv\nsource .venv/bin/activate\npip install requests\npip freeze > requirements.txt\necho ".venv/" > .gitignore\ngit init` },
      ],
      x: [
        mc('¿Para qué sirve un entorno virtual?', ['Para aislar las dependencias de cada proyecto', 'Para ejecutar Python en el navegador', 'Para hacer el código más rápido', 'Para crear máquinas virtuales'], 'Cada proyecto puede usar versiones distintas de las mismas librerías.'),
        ord('Crea un entorno virtual en la carpeta .venv', ['python', '-m', 'venv', '.venv'], ['pip', 'new'], '`-m venv` ejecuta el módulo venv; el último argumento es la carpeta.'),
        mc('En Windows con PowerShell, ¿cómo se activa el entorno `.venv`?', ['.venv\\Scripts\\Activate.ps1', 'source .venv/bin/activate', 'activate .venv', 'python .venv'], 'En macOS y Linux se usa `source .venv/bin/activate`.'),
        mc('¿Debes subir la carpeta del entorno virtual a Git?', ['No: se añade a .gitignore y se comparte requirements.txt', 'Sí, siempre', 'Solo en proyectos grandes', 'Solo los archivos .py de dentro'], 'El entorno se recrea con `pip install -r requirements.txt`.'),
        mc('Con el entorno activo, ¿dónde instala `pip install flask`?', ['Dentro del entorno virtual del proyecto', 'En todo el sistema', 'En la carpeta del usuario', 'En la nube'], 'Por eso no afecta a otros proyectos.'),
        typ('Escribe el comando que desactiva el entorno virtual', `(.venv) $ ___`, 'deactivate', '`deactivate` vuelve al Python del sistema.'),
        mc('¿Qué muestra `print(sys.prefix != sys.base_prefix)` con un entorno virtual activo?', ['True', 'False', 'La versión de Python', 'None'], 'Dentro de un entorno, `sys.prefix` apunta a su carpeta y es distinto de `sys.base_prefix`.'),
        ord('Guarda las dependencias del entorno en requirements.txt', ['pip', 'freeze', '>', 'requirements.txt'], ['install', '-r'], '`pip freeze` lista los paquetes con su versión y `>` redirige esa salida a un archivo.'),
      ],
    },
    // ───────────── Día 21 ─────────────
    {
      id: 'py-workshop-sales',
      t: 'Taller de Kibi: el informe de ventas',
      d: 'Proyecto de la semana 3: leer las ventas de un CSV, saltar las filas con errores, agrupar por mes y guardar un informe en JSON.',
      guide: [
        { h: 'El encargo', p: [
          'Kibi apunta cada venta en `ventas.csv`: fecha, producto e importe. Quiere saber cuánto vende cada mes y cuál es su producto estrella, aunque el archivo tenga alguna fila mal escrita.',
          'Este taller junta la semana 3: archivos, excepciones, fechas, expresiones regulares y funciones como valores. Crea una carpeta para el proyecto con su entorno (`python -m venv .venv`): solo usa la biblioteca estándar, pero así ya queda preparado.' ],
          code: `fecha,producto,importe\n2026-03-02,pipas,4.50\n2026-03-15,heno,7.25\n2026-04-01,pipas,4.50\n2026-04-09,zanahoria,abc` },
        { h: 'Paso 1: leer el CSV sin romperse', p: [
          '`csv.DictReader` convierte cada fila en un diccionario con las claves de la cabecera. Todos los valores llegan como texto.',
          'La última fila tiene `abc` como importe: `float()` lanza `ValueError`, la capturamos, avisamos y pasamos a la siguiente con `continue`.' ],
          code: `import csv\n\nventas = []\nwith open("ventas.csv", encoding="utf-8") as f:\n    for fila in csv.DictReader(f):\n        try:\n            fila["importe"] = float(fila["importe"])\n        except ValueError:\n            print("Fila ignorada:", fila["fecha"], fila["producto"])\n            continue\n        ventas.append(fila)\nprint(len(ventas))  # 3` },
        { h: 'Paso 2: agrupar por mes', p: [
          '`strptime()` convierte el texto en una fecha y `strftime("%Y-%m")` lo deja en año y mes, que usamos como clave.',
          '`dict.get(clave, 0)` devuelve 0 la primera vez que aparece un mes, así no hace falta comprobar si la clave existe.' ],
          code: `from datetime import datetime\n\npor_mes = {}\nfor v in ventas:\n    mes = datetime.strptime(v["fecha"], "%Y-%m-%d").strftime("%Y-%m")\n    por_mes[mes] = por_mes.get(mes, 0) + v["importe"]\nprint(por_mes)  # {'2026-03': 11.75, '2026-04': 4.5}` },
        { h: 'Paso 3: validar fechas y buscar el producto estrella', p: [
          'Una expresión regular descarta las filas cuya fecha no tiene la forma `AAAA-MM-DD` antes de hacer cuentas.',
          '`max()` con `key` recibe una función: compara los productos por su total y devuelve el producto, no la cifra.' ],
          code: `import re\n\nFECHA = re.compile(r"\\d{4}-\\d{2}-\\d{2}")\nventas = [v for v in ventas if FECHA.fullmatch(v["fecha"])]\n\ntotales = {}\nfor v in ventas:\n    totales[v["producto"]] = totales.get(v["producto"], 0) + v["importe"]\nmejor = max(totales, key=lambda p: totales[p])\nprint(mejor, totales[mejor])  # pipas 9.0` },
        { h: 'Ejemplo real: guardar el informe', real: true, p: [
          'El informe se guarda en JSON para que otro programa, una hoja de cálculo o una web puedan leerlo. `ensure_ascii=False` conserva las tildes y `indent=2` lo deja legible.',
          'Si cada mes llega un CSV nuevo, el mismo programa genera el informe en segundos. Ese es el trabajo que la programación te quita de encima.' ],
          code: `import json\n\ninforme = {"por_mes": por_mes, "producto_estrella": mejor, "ventas_validas": len(ventas)}\nwith open("informe.json", "w", encoding="utf-8") as f:\n    json.dump(informe, f, ensure_ascii=False, indent=2)` },
      ],
      x: [
        mc('¿Qué hace `with open("ventas.csv") as f:` al terminar el bloque?', ['Cierra el archivo, aunque haya habido un error', 'Borra el archivo', 'Guarda una copia del archivo', 'Nada: hay que cerrarlo a mano con close()'], '`with` cierra el archivo al salir del bloque, también si se lanza una excepción dentro.'),
        out(`try:\n    importe = float("abc")\nexcept ValueError:\n    importe = 0\nprint(importe)`, ['0', 'abc', 'ValueError', '0.0'], '`float("abc")` lanza `ValueError`; el `except` la captura y asigna el entero 0.'),
        fill(`from datetime import datetime\nd = datetime.___("2026-03-15", "%Y-%m-%d")\nprint(d.month)  # 3`, ['strptime', 'strftime', 'parse', 'fromtext'], '`strptime` lee un texto y lo convierte en fecha (p de parse). `strftime` hace lo contrario.'),
        out(`from datetime import datetime\nd = datetime(2026, 4, 9)\nprint(d.strftime("%Y-%m"))`, ['2026-04', '2026-4', '04-2026', '2026-04-09'], '`%m` escribe el mes siempre con dos cifras, y el formato solo pide año y mes.'),
        out(`totales = {}\nfor p in ["pipas", "heno", "pipas"]:\n    totales[p] = totales.get(p, 0) + 1\nprint(totales)`, ["{'pipas': 2, 'heno': 1}", "{'pipas': 1, 'heno': 1}", "{'heno': 1, 'pipas': 2}", 'KeyError'], '`get(p, 0)` da 0 la primera vez, así que no hay `KeyError`. El diccionario conserva el orden en que aparecen las claves.'),
        out(`import re\nprint(bool(re.fullmatch(r"\\d{4}-\\d{2}", "2026-3")))`, ['False', 'True', 'None', '2026-3'], '`\\d{2}` exige dos dígitos y el mes solo tiene uno. `fullmatch` necesita que encaje el texto entero.'),
        out(`totales = {"pipas": 9.0, "heno": 7.25}\nprint(max(totales, key=lambda p: totales[p]))`, ['pipas', '9.0', 'heno', '7.25'], 'Al recorrer un diccionario se recorren sus claves. `key` compara por el total, pero `max()` devuelve la clave.'),
        out(`filas = ["2026-03-02;4.50", "2026-03-20;x", "2026-04-01;3.00", "2026-03-31;1.50"]\npor_mes = {}\nfor fila in filas:\n    fecha, importe = fila.split(";")\n    try:\n        por_mes[fecha[:7]] = por_mes.get(fecha[:7], 0) + float(importe)\n    except ValueError:\n        continue\nprint(por_mes)`, ["{'2026-03': 6.0, '2026-04': 3.0}", "{'2026-03': 4.5, '2026-04': 3.0}", 'ValueError', "{'2026-03': 6.0}"], 'La fila con `x` falla en `float()` antes de asignar nada y se salta. Marzo suma 4.50 + 1.50 = 6.0 y abril, 3.0.'),
      ],
    },
    // ───────────── Día 22 ─────────────
    {
      id: 'py-classes',
      t: 'Clases y objetos',
      d: 'Crear tus propios tipos con class: __init__, self, atributos, métodos y métodos especiales.',
      guide: [
        { h: 'Clases y objetos', p: [
          'Una clase es un molde que describe datos (atributos) y comportamiento (métodos). Cada objeto creado a partir de ella es una instancia con sus propios valores.',
          '`__init__` se ejecuta al crear el objeto y prepara sus atributos. `self` es la propia instancia: con `self.nombre` guardas un dato en ella.' ],
          code: `class Perro:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n\n    def ladrar(self):\n        return f"{self.nombre} dice guau"\n\nrex = Perro("Rex", 3)\nprint(rex.ladrar())  # Rex dice guau\nprint(rex.edad)      # 3` },
        { h: 'Atributos de clase y de instancia', p: [
          'Un atributo de instancia (`self.x`) es propio de cada objeto. Un atributo de clase se define en el cuerpo de la clase y lo comparten todas las instancias.',
          'Úsalos para constantes o contadores comunes. Cuidado con las listas: si una lista es atributo de clase, todas las instancias modifican la misma.' ],
          code: `class Contador:\n    total = 0  # de clase: compartido\n\n    def __init__(self):\n        Contador.total += 1\n        self.id = Contador.total  # de instancia\n\na = Contador()\nb = Contador()\nprint(a.id, b.id, Contador.total)  # 1 2 2` },
        { h: 'Herencia y super()', p: [
          'Con `class Hijo(Padre)` la clase hija recibe todos los métodos del padre y puede sobrescribirlos.',
          '`super()` llama al método del padre. Lo habitual es usarlo en `__init__` para reutilizar la inicialización.' ],
          code: `class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\n    def hablar(self):\n        return "..."\n\nclass Gato(Animal):\n    def __init__(self, nombre, interior):\n        super().__init__(nombre)\n        self.interior = interior\n\n    def hablar(self):\n        return "miau"\n\nmichi = Gato("Michi", True)\nprint(michi.nombre, michi.hablar())  # Michi miau` },
        { h: 'Métodos especiales y dataclasses', p: [
          'Los métodos con doble guion bajo cambian cómo se comporta el objeto con las herramientas de Python: `__str__` al imprimirlo, `__len__` con `len()` y `__eq__` al comparar con `==`.',
          'El decorador `@dataclass` genera `__init__`, `__repr__` y `__eq__` automáticamente para las clases que solo guardan datos.' ],
          code: `from dataclasses import dataclass\n\n@dataclass\nclass Punto:\n    x: int\n    y: int\n\np = Punto(1, 2)\nprint(p)                 # Punto(x=1, y=2)\nprint(p == Punto(1, 2))  # True` },
        { h: 'Ejemplo real: un carrito de la compra', real: true, p: [
          'Una tienda online necesita guardar los productos del carrito y calcular el total. Una clase agrupa los datos y las operaciones en un solo lugar.' ],
          code: `class Carrito:\n    def __init__(self):\n        self.items = []\n\n    def agregar(self, producto, precio, cantidad=1):\n        self.items.append((producto, precio, cantidad))\n\n    def total(self):\n        return sum(precio * cant for _, precio, cant in self.items)\n\n    def __str__(self):\n        return f"Carrito con {len(self.items)} productos: {self.total():.2f} €"\n\nc = Carrito()\nc.agregar("Libro", 12.50)\nc.agregar("Bolígrafo", 1.20, 3)\nprint(c)  # Carrito con 2 productos: 16.10 €` },
      ],
      x: [
        fill(`class Perro:\n    def ___(self, nombre):\n        self.nombre = nombre`, ['__init__', 'constructor', 'init', '__new__'], '`__init__` es el método que se ejecuta al crear el objeto.'),
        mc('¿Qué representa `self` dentro de un método?', ['La instancia actual del objeto', 'La clase padre', 'Una variable global', 'El módulo actual'], '`self` es el objeto concreto sobre el que se llama el método.'),
        out(`class Gato:\n    def __init__(self, n):\n        self.n = n\n\n    def hablar(self):\n        return self.n + " dice miau"\n\nprint(Gato("Tom").hablar())`, ['Tom dice miau', 'miau', 'n dice miau', 'Error'], 'El objeto guarda "Tom" en `self.n` y `hablar()` lo usa.'),
        fill(`class Animal:\n    pass\n\nclass Pez(___):\n    pass`, ['Animal', 'extends Animal', ':Animal', '<Animal>'], 'Para heredar, pones la clase padre entre paréntesis.'),
        out(`class A:\n    def hola(self):\n        return "A"\n\nclass B(A):\n    def hola(self):\n        return "B" + super().hola()\n\nprint(B().hola())`, ['BA', 'B', 'A', 'AB'], 'B devuelve "B" y le añade lo que devuelve el método del padre, "A".'),
        out(`class Contador:\n    total = 0\n\n    def __init__(self):\n        Contador.total += 1\n\nContador()\nContador()\nprint(Contador.total)`, ['2', '0', '1', 'Error'], '`total` es un atributo de clase, compartido por todas las instancias, y se crearon dos.'),
        mc('¿Qué método define el texto que muestra `print(objeto)`?', ['__str__', '__print__', 'toString', '__text__'], '`__str__` devuelve la representación legible del objeto.'),
        out(`class Cuenta:\n    def __init__(self, saldo=0):\n        self.saldo = saldo\n\n    def ingresar(self, x):\n        self.saldo += x\n        return self\n\nc = Cuenta(10).ingresar(5).ingresar(20)\nprint(c.saldo)`, ['35', '10', '25', 'Error'], 'Cada `ingresar` devuelve `self`, así que las llamadas se encadenan sobre el mismo objeto: 10 + 5 + 20 = 35.'),
      ],
    },
    // ───────────── Día 23 ─────────────
    {
      id: 'py-inheritance',
      t: 'Herencia y dataclasses',
      d: 'Reutilizar clases con herencia y super(), cuándo preferir la composición y ahorrar código con @dataclass.',
      guide: [
        { h: 'Heredar de otra clase', p: [
          'Una clase hija hereda los atributos y métodos de su clase madre, y puede cambiar los que necesite. `Oferta` es un `Producto` con descuento: no hace falta repetir lo que ya hace `Producto`.',
          '`super().__init__(...)` ejecuta el `__init__` de la madre para que siga preparando los atributos comunes. Sin esa línea, `self.nombre` y `self.precio` no existirían.' ],
          code: `class Producto:\n    def __init__(self, nombre, precio):\n        self.nombre = nombre\n        self.precio = precio\n\n    def precio_final(self):\n        return self.precio\n\nclass Oferta(Producto):\n    def __init__(self, nombre, precio, descuento):\n        super().__init__(nombre, precio)\n        self.descuento = descuento\n\n    def precio_final(self):\n        return round(self.precio * (1 - self.descuento), 2)\n\nprint(Oferta("Heno", 8.0, 0.25).precio_final())  # 6.0` },
        { h: 'isinstance y el orden de búsqueda', p: [
          'Una `Oferta` también es un `Producto`, pero no al revés. `isinstance()` lo comprueba y es la forma correcta de preguntar por el tipo de un objeto.',
          'Al llamar a un método, Python lo busca primero en la clase del objeto y, si no está, en su madre. Ese orden se llama MRO y lo puedes ver en `__mro__`.' ],
          code: `o = Oferta("Heno", 8.0, 0.25)\nprint(isinstance(o, Producto))                    # True\nprint(isinstance(Producto("Pipas", 4.5), Oferta))  # False\nprint(Oferta.__mro__[1].__name__)                 # Producto` },
        { h: '¿Herencia o composición?', p: [
          'Usa herencia cuando la frase "es un" tiene sentido: una oferta es un producto. Si lo natural es "tiene un", usa composición: un carrito tiene productos, así que guarda una lista de ellos.',
          'Las jerarquías profundas se vuelven difíciles de cambiar. En la duda, la composición suele ser la opción más flexible.' ],
          code: `class Carrito:\n    def __init__(self):\n        self.productos = []  # tiene productos: composición\n\n    def total(self):\n        return sum(p.precio_final() for p in self.productos)` },
        { h: '@dataclass: clases de datos sin repetir código', p: [
          'Muchas clases solo guardan datos. `@dataclass` escribe por ti `__init__`, `__repr__` (lo que muestra `print`) y `__eq__` (la comparación con `==`) a partir de los atributos con su tipo.',
          'Una lista como valor por defecto se escribe con `field(default_factory=list)`; si no, todos los objetos compartirían la misma lista, igual que con los parámetros por defecto de las funciones.' ],
          code: `from dataclasses import dataclass, field\n\n@dataclass\nclass Cliente:\n    nombre: str\n    compras: int = 0\n    etiquetas: list = field(default_factory=list)\n\nana = Cliente("Ana")\nprint(ana)                    # Cliente(nombre='Ana', compras=0, etiquetas=[])\nprint(ana == Cliente("Ana"))  # True` },
        { h: 'frozen y order', p: [
          'Con `frozen=True` el objeto no se puede modificar después de crearlo, como una tupla con nombres. Con `order=True` se pueden comparar con `<` y `>`, campo por campo y en orden.' ],
          code: `from dataclasses import dataclass\n\n@dataclass(frozen=True, order=True)\nclass Version:\n    mayor: int\n    menor: int\n\nprint(Version(1, 10) > Version(1, 2))  # True\n# Version(2, 0).mayor = 3 lanzaría FrozenInstanceError` },
        { h: 'Ejemplo real: el catálogo de la tienda', real: true, p: [
          'Las dataclasses también se heredan. El catálogo mezcla productos normales y ofertas, y el bucle llama a `precio_final()` sin preguntar de qué tipo es cada uno: cada objeto sabe calcular su precio.' ],
          code: `from dataclasses import dataclass\n\n@dataclass\nclass Producto:\n    nombre: str\n    precio: float\n\n    def precio_final(self):\n        return self.precio\n\n@dataclass\nclass Oferta(Producto):\n    descuento: float = 0.1\n\n    def precio_final(self):\n        return round(self.precio * (1 - self.descuento), 2)\n\ncatalogo = [Producto("Pipas", 4.5), Oferta("Heno", 8.0, 0.25)]\nfor p in catalogo:\n    print(f"{p.nombre}: {p.precio_final():.2f} €")\n# Pipas: 4.50 €\n# Heno: 6.00 €` },
      ],
      x: [
        fill(`class Producto:\n    pass\n\nclass Oferta(___):\n    pass  # Oferta hereda de Producto`, ['Producto', 'super', 'self', 'Producto()'], 'La clase madre va entre paréntesis, por su nombre y sin llamarla.'),
        mc('¿Para qué sirve `super().__init__(nombre, precio)` en una clase hija?', ['Para ejecutar el __init__ de la clase madre y no repetir su código', 'Para crear un segundo objeto', 'Para borrar los atributos de la madre', 'Para impedir que otra clase herede de ella'], '`super()` da acceso a la clase madre; su `__init__` prepara los atributos comunes.'),
        out(`class A:\n    def hola(self):\n        return "A"\n\nclass B(A):\n    pass\n\nprint(B().hola())`, ['A', 'B', 'None', 'AttributeError'], '`B` no define `hola`, así que Python lo busca en su madre `A`.'),
        out(`class A:\n    pass\n\nclass B(A):\n    pass\n\nprint(isinstance(B(), A), isinstance(A(), B))`, ['True False', 'True True', 'False True', 'False False'], 'Un objeto de la hija también es de la madre, pero uno de la madre no es de la hija.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Punto:\n    x: int\n    y: int = 0\n\nprint(Punto(3))`, ['Punto(x=3, y=0)', 'Punto(3)', '<__main__.Punto object>', '(3, 0)'], '`@dataclass` genera un `__repr__` con el nombre de cada campo y su valor, incluido el valor por defecto.'),
        mc('Un `Carrito` guarda los productos que se van a comprar. ¿Qué relación conviene?', ['Composición: el carrito tiene una lista de productos', 'Herencia: Carrito hereda de Producto', 'Herencia: Producto hereda de Carrito', 'Ninguna: mejor una variable global'], 'Un carrito no es un producto: tiene productos. "Tiene un" pide composición.'),
        fill(`from dataclasses import dataclass, field\n\n@dataclass\nclass Pedido:\n    lineas: list = ___(default_factory=list)`, ['field', 'list', 'dataclass', 'default'], '`field(default_factory=list)` crea una lista nueva para cada pedido en lugar de compartir una.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Producto:\n    nombre: str\n    precio: float\n\n    def final(self):\n        return self.precio\n\n@dataclass\nclass Oferta(Producto):\n    descuento: float = 0.5\n\n    def final(self):\n        return super().final() * (1 - self.descuento)\n\nitems = [Producto("a", 4.0), Oferta("b", 6.0), Oferta("c", 10.0, 0.1)]\nprint(sum(p.final() for p in items), Oferta("b", 6.0) == items[1])`, ['16.0 True', '20.0 True', '16.0 False', '13.0 True'], '4.0 + 6.0 × 0.5 + 10.0 × 0.9 = 16.0. Las dataclasses se comparan por sus campos, así que dos ofertas con los mismos datos son iguales.'),
      ],
    },
    // ───────────── Día 24 ─────────────
    {
      id: 'py-pandas',
      t: 'Análisis de datos con pandas',
      d: 'Media y mediana con statistics, y tablas con pandas: leer un CSV, filtrar, crear columnas y agrupar.',
      guide: [
        { h: 'Medidas de tendencia central', p: [
          'La media es la suma dividida entre la cantidad, la mediana es el valor central de los datos ordenados y la moda es el valor que más se repite.',
          'La mediana resiste mejor los valores extremos: con sueldos, unos pocos muy altos disparan la media pero apenas mueven la mediana.' ],
          code: `import statistics as st\n\nsueldos = [1200, 1300, 1250, 1400, 9000]\nprint(st.mean(sueldos))    # 2830\nprint(st.median(sueldos))  # 1300` },
        { h: 'Series y DataFrames', p: [
          'Pandas es la librería de referencia para analizar datos en tablas. Una `Series` es una columna con índice y un `DataFrame` es una tabla con varias columnas.',
          'Por convención se importa como `pd`.' ],
          code: `import pandas as pd\n\ndf = pd.DataFrame({\n    "producto": ["café", "té", "zumo"],\n    "precio": [1.8, 1.5, 2.5],\n    "vendidos": [120, 45, 60],\n})\nprint(df.shape)            # (3, 3)\nprint(df["precio"].max())  # 2.5` },
        { h: 'Leer y explorar datos', p: [
          '`pd.read_csv("ventas.csv")` carga un CSV. Para explorarlo, `head()` muestra las primeras filas, `info()` los tipos y valores nulos, y `describe()` las estadísticas de cada columna numérica.' ],
          code: `df = pd.read_csv("ventas.csv")\nprint(df.head())      # primeras 5 filas\ndf.info()             # columnas, tipos y nulos\nprint(df.describe())  # media, mínimo, máximo...` },
        { h: 'Seleccionar y filtrar', p: [
          '`df["col"]` selecciona una columna y `df[["a", "b"]]` varias. Para filtrar filas, usa una condición: `df[df["precio"] > 2]`.',
          'Combina condiciones con `&` (y) y `|` (o), cada una entre paréntesis.' ],
          code: `baratos = df[df["precio"] < 2]\nprint(baratos["producto"].tolist())  # ['café', 'té']\n\npopulares = df[(df["precio"] < 2) & (df["vendidos"] > 100)]\nprint(len(populares))  # 1` },
        { h: 'Columnas nuevas y agrupaciones', p: [
          'Puedes crear columnas calculadas a partir de otras. `groupby()` agrupa las filas por una columna y permite sumar, contar o promediar cada grupo.' ],
          code: `df["ingresos"] = df["precio"] * df["vendidos"]\nprint(df["ingresos"].sum())  # 433.5\n\nventas = pd.DataFrame({"tienda": ["A", "B", "A"], "total": [100, 50, 30]})\nprint(ventas.groupby("tienda")["total"].sum().to_dict())  # {'A': 130, 'B': 50}` },
        { h: 'Ejemplo real: un informe de ventas mensual', real: true, p: [
          'Un caso típico en una empresa: a partir de un CSV con todas las ventas del año, calcular el total, el número de ventas y el ticket medio de cada mes, y exportarlo a Excel.' ],
          code: `import pandas as pd\n\nventas = pd.read_csv("ventas_2025.csv", parse_dates=["fecha"])\nventas["mes"] = ventas["fecha"].dt.month\n\ninforme = (ventas.groupby("mes")["importe"]\n                 .agg(["sum", "count", "mean"])\n                 .round(2))\nprint(informe)\ninforme.to_excel("informe_mensual.xlsx")` },
      ],
      x: [
        out(`import statistics as st\nprint(st.mean([2, 4, 6]))`, ['4', '12', '6', '3'], 'La media es la suma (12) dividida entre la cantidad (3).'),
        mc('¿Qué medida es el valor central de los datos ordenados?', ['La mediana', 'La media', 'La moda', 'La desviación estándar'], 'Con [1, 3, 9], la mediana es 3.'),
        mc('¿Qué estructura de pandas representa una tabla con filas y columnas?', ['DataFrame', 'Series', 'Array', 'Table'], 'Una `Series` es una sola columna.'),
        fill(`import pandas as pd\ndf = pd.___("ventas.csv")`, ['read_csv', 'open_csv', 'load', 'csv'], '`read_csv` carga un archivo CSV en un DataFrame.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"x": [1, 2, 3]})\nprint(df["x"].sum())`, ['6', '3', '[1, 2, 3]', 'x'], 'Seleccionas la columna como Series y la sumas.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"edad": [20, 35, 50]})\nprint(len(df[df["edad"] > 30]))`, ['2', '1', '3', '0'], 'El filtro deja las filas con 35 y 50.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"a": [1, 2, 3]})\ndf["b"] = df["a"] * 10\nprint(df["b"].tolist())`, ['[10, 20, 30]', '[1, 2, 3]', '[10]', '60'], 'La operación se aplica a toda la columna y crea una nueva.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"tienda": ["A", "B", "A", "B"], "total": [10, 5, 20, 1]})\nr = df.groupby("tienda")["total"].sum()\nprint(r["A"], r["B"])`, ['30 6', '10 5', '15 3', '36'], '`groupby` agrupa las filas por tienda y `sum` suma cada grupo: A = 10 + 20 y B = 5 + 1.'),
      ],
    },
    // ───────────── Día 25 ─────────────
    {
      id: 'py-apis',
      t: 'Consumir APIs',
      d: 'Pedir datos a otros servicios por HTTP con requests: métodos, códigos de estado, JSON y errores.',
      guide: [
        { h: '¿Qué es una API?', p: [
          'Una API es un contrato que permite a dos programas comunicarse. Las APIs web reciben peticiones HTTP en una URL y responden con datos, casi siempre en JSON.',
          'Así obtienes el tiempo, cotizaciones, mapas o traducciones desde tu programa sin copiar nada a mano.' ] },
        { h: 'Métodos y códigos de estado', p: [
          'Los métodos indican la acción: GET lee, POST crea, PUT o PATCH actualizan y DELETE borra.',
          'El código de estado resume el resultado: 200 OK, 201 creado, 400 petición incorrecta, 401 sin autorización, 404 no encontrado y 500 error del servidor.' ],
          code: `import requests\n\nr = requests.get("https://api.github.com/users/octocat", timeout=10)\nprint(r.status_code)              # 200\nprint(r.headers["Content-Type"])  # application/json; charset=utf-8` },
        { h: 'Parámetros, cabeceras y JSON', p: [
          'Los parámetros de búsqueda se pasan con `params` y requests construye la URL por ti. Muchas APIs piden una clave en las cabeceras, con `headers`.',
          '`r.json()` convierte la respuesta en diccionarios y listas de Python.' ],
          code: `import requests\n\nr = requests.get(\n    "https://api.github.com/search/repositories",\n    params={"q": "language:python", "sort": "stars", "per_page": 3},\n    timeout=10,\n)\nfor repo in r.json()["items"]:\n    print(repo["full_name"], repo["stargazers_count"])` },
        { h: 'Errores y límites', p: [
          'Las peticiones de red pueden fallar: el servidor no responde, devuelve un error o te limita por hacer demasiadas peticiones (código 429).',
          '`raise_for_status()` lanza una excepción si el código es de error, y `try/except` te permite reaccionar sin que el programa se detenga.' ],
          code: `import requests\n\ntry:\n    r = requests.get("https://api.github.com/users/no-existe-12345", timeout=10)\n    r.raise_for_status()\nexcept requests.HTTPError as e:\n    print("Error HTTP:", e.response.status_code)  # Error HTTP: 404\nexcept requests.RequestException:\n    print("No se pudo conectar")` },
        { h: 'Ejemplo real: el tiempo de mañana', real: true, p: [
          'Open-Meteo es una API meteorológica gratuita que no necesita clave. Con unas pocas líneas obtienes la previsión de cualquier ciudad a partir de sus coordenadas.' ],
          code: `import requests\n\nr = requests.get(\n    "https://api.open-meteo.com/v1/forecast",\n    params={"latitude": 40.42, "longitude": -3.70,\n            "daily": "temperature_2m_max,temperature_2m_min", "timezone": "auto"},\n    timeout=10,\n)\nr.raise_for_status()\nd = r.json()["daily"]\nprint(f"Mañana en Madrid: {d['temperature_2m_min'][1]} a {d['temperature_2m_max'][1]} °C")` },
      ],
      x: [
        mc('¿Qué método HTTP se usa para leer datos?', ['GET', 'POST', 'DELETE', 'PUT'], 'GET pide un recurso sin modificarlo.'),
        mc('¿Qué significa el código de estado 404?', ['Recurso no encontrado', 'Todo correcto', 'Error del servidor', 'Creado'], 'Los códigos 4xx son errores del cliente.'),
        mc('¿Qué método HTTP crea un recurso nuevo?', ['POST', 'GET', 'HEAD', 'OPTIONS'], 'POST envía datos al servidor para crear algo.'),
        fill(`r = requests.get(url, timeout=10)\ndatos = r.___()`, ['json', 'text', 'parse', 'dict'], '`.json()` convierte el cuerpo JSON de la respuesta en diccionarios y listas.'),
        mc('¿Qué código devuelve normalmente una API al crear un recurso?', ['201', '200', '204', '301'], '201 Created indica que se creó algo nuevo.'),
        mc('¿Qué formato de datos usan casi todas las APIs REST?', ['JSON', 'CSV', 'Texto plano', 'Binario'], 'JSON es ligero y fácil de leer desde cualquier lenguaje.'),
        out(`import requests\nr = requests.get(\n    "https://example.com/buscar",\n    params={"q": "python", "page": 2},\n)\nprint(r.url)`, ['https://example.com/buscar?q=python&page=2', 'https://example.com/buscar', 'https://example.com/buscar?python&2', 'Error'], 'requests añade los parámetros a la URL y los codifica por ti.'),
        mc('Una API responde con el código 429. ¿Qué deberías hacer?', ['Esperar y reintentar con menos peticiones: has superado el límite', 'Repetir la petición inmediatamente en un bucle', 'Cambiar GET por POST', 'Nada: 429 significa que todo fue bien'], '429 Too Many Requests indica que has superado el límite. Muchas APIs dicen cuánto esperar en la cabecera Retry-After.'),
      ],
    },
    // ───────────── Día 26 ─────────────
    {
      id: 'py-scraping',
      t: 'Extraer datos de webs',
      d: 'Descargar páginas y sacar datos del HTML con BeautifulSoup, sin abusar del sitio.',
      guide: [
        { h: '¿Qué es el web scraping?', p: [
          'El web scraping consiste en descargar páginas web y extraer de su HTML los datos que te interesan: precios, titulares, horarios...',
          'Se usa cuando un sitio no ofrece una API. Si existe una API, úsala: es más estable y está pensada para programas.' ] },
        { h: 'Descargar el HTML con requests', p: [
          '`requests.get(url)` descarga la página. `status_code` indica si fue bien (200) y `.text` contiene el HTML.',
          'Indica siempre un `timeout` para que el programa no se quede esperando para siempre si el servidor no responde.' ],
          code: `import requests\n\nr = requests.get("https://example.com", timeout=10)\nprint(r.status_code)  # 200\nprint(r.text[:15])    # <!doctype html>` },
        { h: 'Analizar el HTML con BeautifulSoup', p: [
          'BeautifulSoup (`pip install beautifulsoup4`) convierte el HTML en un árbol que puedes recorrer. `find()` devuelve el primer elemento, `find_all()` todos y `select()` acepta selectores CSS.',
          '`.text` o `.get_text(strip=True)` dan el texto, y `elemento["href"]` lee un atributo.' ],
          code: `from bs4 import BeautifulSoup\n\nhtml = """<ul>\n  <li class="p">Café <span>1.80</span></li>\n  <li class="p">Té <span>1.50</span></li>\n</ul>"""\nsoup = BeautifulSoup(html, "html.parser")\nfor li in soup.select("li.p"):\n    nombre = li.contents[0].strip()\n    precio = float(li.span.text)\n    print(nombre, precio)\n# Café 1.8\n# Té 1.5` },
        { h: 'Hacerlo de forma responsable', p: [
          'Revisa el archivo `robots.txt` y las condiciones de uso del sitio, no recojas datos personales y espera entre peticiones con `time.sleep(1)` para no saturar el servidor.',
          'Las páginas cambian: si cambia el HTML, tu scraper deja de funcionar. Comprueba que `find()` no devuelva `None` antes de usar el resultado.' ] },
        { h: 'Ejemplo real: los titulares de una web de noticias', real: true, p: [
          'Un script que lee los cinco primeros titulares de Hacker News con sus enlaces. Es la base de cualquier resumen de noticias automático.' ],
          code: `import time\nimport requests\nfrom bs4 import BeautifulSoup\n\nurl = "https://news.ycombinator.com/"\nr = requests.get(url, timeout=10, headers={"User-Agent": "curso-sintaxis/1.0"})\nsoup = BeautifulSoup(r.text, "html.parser")\n\nfor enlace in soup.select(".titleline > a")[:5]:\n    print("-", enlace.get_text(strip=True))\n    print("  ", enlace["href"])\ntime.sleep(1)  # pausa antes de la siguiente petición` },
      ],
      x: [
        mc('¿Qué librería se usa habitualmente para analizar HTML en Python?', ['BeautifulSoup', 'NumPy', 'Flask', 'Pygame'], 'BeautifulSoup convierte el HTML en un árbol fácil de recorrer.'),
        mc('¿Qué devuelve `requests.get(url).text`?', ['El contenido de la respuesta como texto', 'Un objeto BeautifulSoup', 'El código de estado', 'Una lista de enlaces'], '`.status_code` daría el código HTTP, como 200.'),
        fill(`soup = BeautifulSoup(html, "html.parser")\ntitulos = soup.___("h2")  # todos los h2`, ['find_all', 'find', 'get', 'select_one'], '`find_all` devuelve todos los elementos; `find` solo el primero.'),
        out(`from bs4 import BeautifulSoup\nsoup = BeautifulSoup("<p>Hola</p>", "html.parser")\nprint(soup.p.text)`, ['Hola', '<p>Hola</p>', 'p', 'None'], '`.text` extrae el texto sin las etiquetas.'),
        mc('¿Cómo obtienes la URL de un enlace `a` con BeautifulSoup?', ['enlace["href"]', 'enlace.url', 'enlace.text', 'enlace.link()'], 'Los atributos HTML se leen como en un diccionario.'),
        mc('¿Qué archivo indica qué partes de un sitio se pueden rastrear?', ['robots.txt', 'sitemap.css', 'index.html', '.htaccess'], 'Respetar robots.txt es parte de un scraping responsable.'),
        out(`from bs4 import BeautifulSoup\nhtml = '<a href="/a">A</a><a href="/b">B</a>'\nsoup = BeautifulSoup(html, "html.parser")\nprint([a["href"] for a in soup.find_all("a")])`, ["['/a', '/b']", "['A', 'B']", '/a', "['/a']"], '`find_all` devuelve todos los enlaces y `a["href"]` lee el atributo de cada uno.'),
        out(`from bs4 import BeautifulSoup\nhtml = "<div><p>Hola</p></div>"\nsoup = BeautifulSoup(html, "html.parser")\nprint(soup.find("span") is None, soup.div.p.text)`, ['True Hola', 'False Hola', 'None Hola', 'Error'], '`find` devuelve `None` si no hay coincidencias (no hay ningún span). `soup.div.p` navega hasta el párrafo dentro del div.'),
      ],
    },
    // ───────────── Día 27 ─────────────
    {
      id: 'py-build-api',
      t: 'Crear tu propia API',
      d: 'Una API REST con Flask: rutas, JSON, códigos de estado y validar lo que llega.',
      guide: [
        { h: 'Frameworks web en Python', p: [
          'Un framework web recibe las peticiones HTTP del navegador y decide qué responder. En Python los más usados son Flask (pequeño y flexible), Django (completo, con ORM y panel de administración) y FastAPI (rápido y pensado para APIs).',
          'En este día usamos Flask: `pip install flask`.' ] },
        { h: 'Tu primera aplicación Flask', p: [
          'Cada ruta se asocia a una función con el decorador `@app.route()`. Lo que devuelve la función es lo que ve el navegador.',
          'Arranca el servidor de desarrollo con `flask --app app run --debug` y abre http://127.0.0.1:5000 en el navegador.' ],
          code: `# app.py\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef inicio():\n    return "<h1>Hola desde Flask</h1>"\n\n@app.route("/saludo/<nombre>")\ndef saludo(nombre):\n    return f"Hola, {nombre}"` },
        { h: 'Leer y crear recursos', p: [
          '`GET /tareas` lista todas y `GET /tareas/<id>` devuelve una. `POST /tareas` crea una nueva con el JSON del cuerpo, que lees con `request.get_json()`.',
          'Devuelve el código adecuado: 201 al crear y 404 si el recurso no existe.' ],
          code: `from flask import Flask, jsonify, request, abort\n\napp = Flask(__name__)\ntareas = [{"id": 1, "titulo": "Aprender Flask", "hecha": False}]\n\n@app.get("/tareas")\ndef listar():\n    return jsonify(tareas)\n\n@app.get("/tareas/<int:id>")\ndef ver(id):\n    tarea = next((t for t in tareas if t["id"] == id), None)\n    if tarea is None:\n        abort(404)\n    return jsonify(tarea)\n\n@app.post("/tareas")\ndef crear():\n    datos = request.get_json()\n    tarea = {"id": len(tareas) + 1, "titulo": datos["titulo"], "hecha": False}\n    tareas.append(tarea)\n    return jsonify(tarea), 201` },
        { h: 'Actualizar, borrar y validar', p: [
          '`PUT` o `PATCH` actualizan y `DELETE` borra. Valida siempre lo que llega: si falta un campo, responde 400 con un mensaje claro en lugar de dejar que el servidor falle con un 500.' ],
          code: `@app.delete("/tareas/<int:id>")\ndef borrar(id):\n    global tareas\n    tareas = [t for t in tareas if t["id"] != id]\n    return "", 204\n\n@app.post("/notas")\ndef crear_nota():\n    datos = request.get_json(silent=True) or {}\n    if "texto" not in datos:\n        return jsonify(error="Falta el campo texto"), 400\n    return jsonify(texto=datos["texto"]), 201` },
        { h: 'Probar la API', p: [
          'Puedes probarla con `curl` desde la terminal, con herramientas como Postman o con el cliente de pruebas de Flask, que no necesita arrancar el servidor.',
          'FastAPI es una alternativa moderna: valida los datos con anotaciones de tipo y genera documentación interactiva en `/docs`.' ],
          code: `# en la terminal\ncurl -X POST http://127.0.0.1:5000/tareas \\\n     -H "Content-Type: application/json" \\\n     -d '{"titulo": "Repasar"}'\n\n# en un test\nwith app.test_client() as c:\n    r = c.post("/tareas", json={"titulo": "Repasar"})\n    print(r.status_code)  # 201` },
        { h: 'Ejemplo real: un acortador de enlaces', real: true, p: [
          'Un servicio como bit.ly en miniatura: recibe una URL larga, genera un código corto y redirige a quien visite ese código.' ],
          code: `import secrets\nfrom flask import Flask, jsonify, request, redirect, abort\n\napp = Flask(__name__)\nenlaces = {}\n\n@app.post("/acortar")\ndef acortar():\n    url = (request.get_json(silent=True) or {}).get("url")\n    if not url or not url.startswith("http"):\n        return jsonify(error="URL no válida"), 400\n    codigo = secrets.token_urlsafe(4)\n    enlaces[codigo] = url\n    return jsonify(corto=f"{request.host_url}{codigo}"), 201\n\n@app.get("/<codigo>")\ndef ir(codigo):\n    if codigo not in enlaces:\n        abort(404)\n    return redirect(enlaces[codigo])` },
      ],
      x: [
        mc('¿Qué es Flask?', ['Un microframework para crear aplicaciones web', 'Una base de datos', 'Un editor de código', 'Un gestor de paquetes'], 'Flask es ligero y se amplía con extensiones.'),
        fill(`@app.___("/")\ndef inicio():\n    return "Hola"`, ['route', 'get_route', 'path', 'url'], '`@app.route` asocia una URL con la función.'),
        mc('Con la ruta `/saludo/<nombre>`, ¿qué valor recibe `nombre` al visitar `/saludo/Ana`?', ['"Ana"', '"<nombre>"', '"saludo"', 'None'], 'Las partes entre `< >` son variables de la URL.'),
        fill(`from flask import Flask, ___\n\napp = Flask(__name__)\n\n@app.route("/api")\ndef api():\n    return jsonify({"ok": True})`, ['jsonify', 'json', 'dumps', 'JSON'], '`jsonify` crea una respuesta HTTP con contenido JSON.'),
        mc('¿Cómo lees el JSON enviado en una petición POST con Flask?', ['request.get_json()', 'request.body', 'request.json_read()', 'input()'], 'Devuelve el cuerpo ya convertido en diccionario.'),
        mc('En `return jsonify(tarea), 201`, ¿qué es el 201?', ['El código de estado HTTP de la respuesta', 'El id de la tarea', 'El puerto del servidor', 'El tamaño de la respuesta'], '201 indica que el recurso se creó.'),
        mc('Llega un POST sin el campo obligatorio "titulo". ¿Qué deberías responder?', ['400 con un mensaje que explique qué falta', '500 Error del servidor', '200 con un objeto vacío', '404 No encontrado'], '400 Bad Request indica que la petición del cliente es incorrecta, y el mensaje le ayuda a corregirla.'),
        out(`from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.get("/tareas/<int:id>")\ndef ver(id):\n    if id > 3:\n        return jsonify(error="No existe"), 404\n    return jsonify(id=id)\n\nwith app.test_client() as c:\n    r = c.get("/tareas/7")\n    print(r.status_code, r.get_json()["error"])`, ['404 No existe', '200 No existe', '404 None', '500 Error'], '7 es mayor que 3, así que la ruta devuelve el JSON de error con el código 404, y `get_json()` lo convierte en diccionario.'),
      ],
    },
    // ───────────── Día 28 ─────────────
    {
      id: 'py-sqlite',
      t: 'Bases de datos con SQLite',
      d: 'Guardar datos en una base de datos de verdad con sqlite3: tablas, INSERT, SELECT, parámetros seguros y transacciones.',
      guide: [
        { h: '¿Por qué una base de datos?', p: [
          'Un CSV o un JSON van bien con pocos datos. Cuando hay miles de filas, varias personas escribiendo a la vez o preguntas como "¿cuánto ha gastado cada cliente?", una base de datos es más rápida y más segura.',
          'SQLite guarda toda la base en un solo archivo y viene incluida en Python con el módulo `sqlite3`: no hay que instalar nada. La usan los móviles, los navegadores y muchísimas aplicaciones.',
          'Las consultas se escriben en SQL, un lenguaje propio para datos. Lo básico se aprende en una tarde y sirve igual en PostgreSQL o MySQL.' ] },
        { h: 'Conectar y crear una tabla', p: [
          '`connect()` abre el archivo (o lo crea) y `":memory:"` crea una base temporal que desaparece al cerrar, perfecta para pruebas.',
          'Una tabla define columnas con su tipo. `INTEGER PRIMARY KEY` numera cada fila sola y `NOT NULL` impide dejar ese dato vacío.' ],
          code: `import sqlite3\n\ncon = sqlite3.connect("tienda.db")  # ":memory:" para una base temporal\ncon.execute("""\n    CREATE TABLE IF NOT EXISTS productos (\n        id INTEGER PRIMARY KEY,\n        nombre TEXT NOT NULL,\n        precio REAL NOT NULL\n    )\n""")` },
        { h: 'Insertar con parámetros', p: [
          'Los valores van como `?` en la consulta y se pasan aparte en una tupla. Nunca metas datos del usuario con un f-string: alguien podría escribir SQL que cambie la consulta (inyección SQL).',
          '`executemany()` inserta muchas filas de una vez. Los cambios no se guardan hasta `commit()`.' ],
          code: `con.execute("INSERT INTO productos (nombre, precio) VALUES (?, ?)", ("Pipas", 4.5))\ncon.executemany(\n    "INSERT INTO productos (nombre, precio) VALUES (?, ?)",\n    [("Heno", 7.25), ("Zanahoria", 1.25)],\n)\ncon.commit()` },
        { h: 'Consultar', p: [
          '`SELECT` elige columnas, `WHERE` filtra y `ORDER BY` ordena. Recorrer el resultado da una tupla por fila.',
          '`fetchone()` devuelve solo la primera fila, cómodo para cuentas como `COUNT(*)` o `SUM()`.' ],
          code: `consulta = "SELECT nombre, precio FROM productos WHERE precio > ? ORDER BY precio"\nfor nombre, precio in con.execute(consulta, (2,)):\n    print(nombre, precio)\n# Pipas 4.5\n# Heno 7.25\nprint(con.execute("SELECT COUNT(*), SUM(precio) FROM productos").fetchone())  # (3, 13.0)` },
        { h: 'Transacciones con with', p: [
          'Usar la conexión con `with` agrupa los cambios en una transacción: si todo va bien se guardan, y si hay un error se deshacen todos. Así nunca queda una operación a medias.' ],
          code: `with con:  # commit si todo va bien, rollback si hay un error\n    con.execute("UPDATE productos SET precio = precio * 0.9 WHERE nombre = ?", ("Heno",))\ncon.close()` },
        { h: 'Ejemplo real: cuánto gasta cada cliente', real: true, p: [
          '`GROUP BY` junta las filas de cada cliente y `SUM()` suma sus importes. Lo que en Python sería un bucle con un diccionario, en SQL es una línea, y funciona igual con un millón de pedidos.' ],
          code: `import sqlite3\n\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE pedidos (cliente TEXT, importe REAL)")\nwith con:\n    con.executemany(\n        "INSERT INTO pedidos VALUES (?, ?)",\n        [("Ana", 12.5), ("Leo", 4.0), ("Ana", 7.5)],\n    )\nconsulta = "SELECT cliente, SUM(importe) FROM pedidos GROUP BY cliente ORDER BY 2 DESC"\nfor cliente, total in con.execute(consulta):\n    print(f"{cliente}: {total:.2f} €")\n# Ana: 20.00 €\n# Leo: 4.00 €` },
      ],
      x: [
        mc('¿Qué módulo trae SQLite con Python, sin instalar nada?', ['sqlite3', 'pymongo', 'sqlalchemy', 'sqlite'], 'El módulo `sqlite3` forma parte de la biblioteca estándar.'),
        mc('¿Qué hace `con.commit()`?', ['Guarda de forma permanente los cambios pendientes', 'Cierra la conexión', 'Deshace los últimos cambios', 'Crea la base de datos'], 'Hasta el `commit()`, los cambios forman parte de una transacción abierta y no se han guardado.'),
        fill(`con.execute("INSERT INTO productos (nombre, precio) VALUES (___, ?)", ("Pipas", 4.5))`, ['?', '%s', '{}', '$1'], 'En `sqlite3` cada valor se marca con `?` y se pasa aparte. `%s` y `$1` son de otros conectores.'),
        mc('¿Por qué no hay que meter el texto que escribe el usuario en la consulta con un f-string?', ['Porque permite una inyección SQL: el usuario podría cambiar la consulta', 'Porque los f-strings no funcionan con SQLite', 'Porque la consulta tarda más', 'Porque SQLite no acepta textos'], 'Con `?`, SQLite trata el dato siempre como un valor y nunca como parte del SQL.'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE t (n INTEGER)")\ncon.executemany("INSERT INTO t VALUES (?)", [(1,), (2,), (3,)])\nprint(con.execute("SELECT SUM(n) FROM t").fetchone())`, ['(6,)', '6', '[6]', '(1, 2, 3)'], '`fetchone()` devuelve una fila como tupla, aunque tenga una sola columna.'),
        typ('Completa la consulta que lee todas las columnas de la tabla productos', `SELECT ___ FROM productos`, '*', 'El asterisco significa "todas las columnas".'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE p (nombre TEXT, precio REAL)")\ncon.executemany("INSERT INTO p VALUES (?, ?)", [("a", 3.0), ("b", 1.0), ("c", 2.0)])\nprint([n for (n,) in con.execute("SELECT nombre FROM p ORDER BY precio")])`, ["['b', 'c', 'a']", "['a', 'b', 'c']", "['a', 'c', 'b']", "[('b',), ('c',), ('a',)]"], '`ORDER BY precio` ordena de menor a mayor precio, y `(n,)` desempaqueta la tupla de cada fila.'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE pedidos (cliente TEXT, importe REAL)")\ntry:\n    with con:\n        con.execute("INSERT INTO pedidos VALUES (?, ?)", ("Ana", 10.0))\n        con.execute("INSERT INTO pedidos VALUES (?, ?, ?)", ("Leo", 5.0, 1))\nexcept sqlite3.OperationalError:\n    pass\nprint(con.execute("SELECT COUNT(*) FROM pedidos").fetchone()[0])`, ['0', '1', '2', 'OperationalError'], 'La segunda inserción pasa 3 valores a una tabla de 2 columnas y falla. `with con` deshace toda la transacción, también la primera inserción.'),
      ],
    },
    // ───────────── Día 29 ─────────────
    {
      id: 'py-pytest',
      t: 'Probar tu código con pytest',
      d: 'Escribir pruebas automáticas con assert y pytest: casos normales, casos límite, excepciones y fixtures.',
      guide: [
        { h: '¿Por qué escribir pruebas?', p: [
          'Una prueba es código que comprueba que otro código hace lo que debe. Se ejecuta en un segundo cada vez que cambias algo y te avisa si has roto lo que ya funcionaba.',
          '`assert` comprueba una condición: si es verdadera no pasa nada y, si es falsa, lanza `AssertionError`. Es la pieza básica de cualquier prueba.' ],
          code: `def precio_con_iva(precio):\n    return round(precio * 1.21, 2)\n\nassert precio_con_iva(100) == 121.0\nassert precio_con_iva(0) == 0\nprint("Todo correcto")  # Todo correcto` },
        { h: 'Tu primera prueba con pytest', p: [
          'Instala pytest con `pip install pytest` dentro del entorno del proyecto. Busca solo los archivos `test_*.py` y, dentro, las funciones que empiezan por `test_`.',
          'Ejecútalo con `pytest` en la carpeta del proyecto. Muestra un punto por cada prueba que pasa y una `F` por cada fallo, con el valor que esperabas y el que salió.' ],
          code: `# test_precios.py\nfrom precios import precio_con_iva\n\ndef test_precio_normal():\n    assert precio_con_iva(100) == 121.0\n\ndef test_precio_cero():\n    assert precio_con_iva(0) == 0` },
        { h: 'Casos límite y excepciones', p: [
          'Los errores suelen esconderse en los bordes: el cero, los negativos, una lista vacía. Pruébalos a propósito.',
          '`pytest.raises` comprueba que se lanza una excepción. Los decimales no son exactos, así que se comparan con `pytest.approx`.' ],
          code: `import pytest\nfrom precios import precio_con_iva\n\ndef test_precio_negativo():\n    with pytest.raises(ValueError):\n        precio_con_iva(-5)  # la función debe lanzar ValueError\n\ndef test_decimales():\n    assert 0.1 + 0.2 == pytest.approx(0.3)` },
        { h: 'Muchos casos con parametrize', p: [
          'En lugar de copiar la misma prueba con otros números, `@pytest.mark.parametrize` la ejecuta una vez por cada caso de la lista y, si uno falla, te dice cuál.' ],
          code: `import pytest\nfrom precios import precio_con_iva\n\n@pytest.mark.parametrize("precio, esperado", [(100, 121.0), (10, 12.1), (0, 0)])\ndef test_precio_con_iva(precio, esperado):\n    assert precio_con_iva(precio) == esperado` },
        { h: 'Ejemplo real: probar la base de datos de la tienda', real: true, p: [
          'Una fixture prepara lo que necesitan las pruebas. pytest la ejecuta antes de cada prueba que la pide por su nombre como parámetro.',
          'Aquí cada prueba recibe una base de datos vacía en memoria, así ninguna depende de otra ni toca los datos reales. Lo que va después del `yield` se ejecuta al terminar, para limpiar.' ],
          code: `import sqlite3\nimport pytest\n\n@pytest.fixture\ndef con():\n    con = sqlite3.connect(":memory:")\n    con.execute("CREATE TABLE productos (nombre TEXT, precio REAL)")\n    yield con\n    con.close()\n\ndef test_insertar(con):\n    con.execute("INSERT INTO productos VALUES (?, ?)", ("Pipas", 4.5))\n    assert con.execute("SELECT COUNT(*) FROM productos").fetchone()[0] == 1\n\ndef test_empieza_vacia(con):\n    assert con.execute("SELECT COUNT(*) FROM productos").fetchone()[0] == 0` },
      ],
      x: [
        mc('¿Qué pasa con `assert precio_con_iva(100) == 121.0` si la función devuelve 120?', ['Lanza AssertionError', 'Imprime False y sigue', 'Devuelve 120', 'No hace nada'], 'Si la condición de `assert` es falsa, se lanza `AssertionError`; pytest lo muestra como una prueba fallida.'),
        mc('¿Cómo encuentra pytest las pruebas?', ['Busca archivos test_*.py y funciones que empiezan por test_', 'Ejecuta todas las funciones del proyecto', 'Lee una lista en requirements.txt', 'Solo ejecuta el archivo main.py'], 'pytest sigue una convención de nombres: archivos `test_*.py` y funciones `test_*`.'),
        out(`def doble(n):\n    return n * 2\n\ntry:\n    assert doble(3) == 5\n    print("ok")\nexcept AssertionError:\n    print("falla")`, ['falla', 'ok', '6', 'AssertionError'], '`doble(3)` es 6, no 5: el `assert` lanza `AssertionError` antes de llegar al `print("ok")`.'),
        fill(`import pytest\n\ndef test_division():\n    with pytest.___(ZeroDivisionError):\n        1 / 0`, ['raises', 'catch', 'expect', 'error'], '`pytest.raises` hace que la prueba pase solo si dentro del bloque se lanza esa excepción.'),
        mc('¿Por qué falla `assert 0.1 + 0.2 == 0.3`?', ['Porque los decimales en coma flotante no son exactos: la suma da 0.30000000000000004', 'Porque assert no admite sumas', 'Porque 0.3 es un texto', 'Porque hay que usar is en lugar de =='], 'Los `float` se guardan en binario con un pequeño error. Para compararlos se usa `pytest.approx` o `math.isclose`.'),
        typ('Escribe el decorador que convierte la función en una fixture', `import pytest\n\n@pytest.___\ndef carrito():\n    return []`, 'fixture', '`@pytest.fixture` marca la función; las pruebas la reciben poniendo `carrito` como parámetro.'),
        out(`import math\nprint(0.1 + 0.2 == 0.3, math.isclose(0.1 + 0.2, 0.3))`, ['False True', 'True True', 'False False', 'True False'], '`==` compara el valor exacto, que no coincide. `math.isclose` acepta una diferencia mínima, como `pytest.approx`.'),
        out(`def descuento(total):\n    if total < 0:\n        raise ValueError("total negativo")\n    return total * 0.1 if total >= 50 else 0\n\ncasos = [(100, 10.0), (49, 0), (50, 0), (-1, None)]\nfallos = 0\nfor total, esperado in casos:\n    try:\n        if descuento(total) != esperado:\n            fallos += 1\n    except ValueError:\n        pass\nprint(fallos)`, ['1', '0', '2', 'ValueError'], 'Solo falla el caso (50, 0): con 50 ya hay descuento y la función da 5.0. El -1 lanza `ValueError`, que se captura y no cuenta como fallo.'),
      ],
    },
    // ───────────── Día 30 ─────────────
    {
      id: 'py-workshop-shop',
      t: 'Taller de Kibi: la tienda completa',
      d: 'Proyecto final: la tienda de Kibi con dataclasses, una base de datos SQLite, una API con Flask y pruebas con pytest.',
      guide: [
        { h: 'El encargo', p: [
          'Cuatro semanas después, la tienda de Kibi necesita algo serio: un catálogo guardado en una base de datos y una API para que una web o una app puedan consultar productos y hacer pedidos.',
          'Juntamos lo de la última semana con todo lo anterior. Cada archivo tiene una sola tarea, así se entiende mejor y se puede probar por partes.' ],
          code: `tienda/\n├── .venv/\n├── requirements.txt   # flask, pytest\n├── modelo.py          # la clase Producto\n├── datos.py           # funciones que hablan con SQLite\n├── api.py             # rutas de Flask\n└── test_tienda.py     # pruebas` },
        { h: 'Paso 1: el modelo', p: [
          'Una dataclass describe un producto. El método `disponible()` contiene la regla de negocio: se puede pedir una cantidad positiva que no supere el stock.' ],
          code: `# modelo.py\nfrom dataclasses import dataclass\n\n@dataclass\nclass Producto:\n    nombre: str\n    precio: float\n    stock: int = 0\n\n    def disponible(self, cantidad):\n        return 0 < cantidad <= self.stock` },
        { h: 'Paso 2: los datos en SQLite', p: [
          '`datos.py` es el único archivo que sabe SQL. Si un día cambias de base de datos, solo tocas este archivo.',
          '`INSERT OR REPLACE` actualiza el producto si ya existía otro con el mismo nombre, porque el nombre es la clave primaria.' ],
          code: `# datos.py\nimport sqlite3\nfrom modelo import Producto\n\ndef conectar(ruta="tienda.db"):\n    con = sqlite3.connect(ruta)\n    con.execute("CREATE TABLE IF NOT EXISTS productos (nombre TEXT PRIMARY KEY, precio REAL, stock INTEGER)")\n    return con\n\ndef guardar(con, p):\n    with con:\n        con.execute("INSERT OR REPLACE INTO productos VALUES (?, ?, ?)", (p.nombre, p.precio, p.stock))\n\ndef buscar(con, nombre):\n    fila = con.execute("SELECT nombre, precio, stock FROM productos WHERE nombre = ?", (nombre,)).fetchone()\n    return Producto(*fila) if fila else None` },
        { h: 'Paso 3: la API', p: [
          'Dos rutas: una para ver un producto y otra para pedirlo. Cada respuesta lleva su código de estado: 404 si no existe, 400 si no hay stock y 201 si el pedido se crea.',
          'Te queda una mejora: restar del stock la cantidad pedida y guardarlo con `guardar()`.' ],
          code: `# api.py\nfrom flask import Flask, jsonify, request\nfrom datos import conectar, buscar\n\napp = Flask(__name__)\n\n@app.get("/productos/<nombre>")\ndef ver(nombre):\n    p = buscar(conectar(), nombre)\n    if p is None:\n        return jsonify(error="No existe"), 404\n    return jsonify(nombre=p.nombre, precio=p.precio, stock=p.stock)\n\n@app.post("/pedidos")\ndef pedir():\n    datos = request.get_json()\n    p = buscar(conectar(), datos.get("producto", ""))\n    if p is None or not p.disponible(datos.get("cantidad", 0)):\n        return jsonify(error="Sin stock"), 400\n    return jsonify(total=round(p.precio * datos["cantidad"], 2)), 201` },
        { h: 'Ejemplo real: probar la tienda antes de abrirla', real: true, p: [
          'Las pruebas usan una base en memoria, así se pueden ejecutar mil veces sin tocar `tienda.db`. Con `pytest` en la terminal sabes en un segundo si la tienda sigue funcionando después de cada cambio.' ],
          code: `# test_tienda.py\nimport pytest\nfrom modelo import Producto\nfrom datos import conectar, guardar, buscar\n\n@pytest.fixture\ndef con():\n    return conectar(":memory:")\n\ndef test_guardar_y_buscar(con):\n    guardar(con, Producto("Pipas", 4.5, 10))\n    assert buscar(con, "Pipas") == Producto("Pipas", 4.5, 10)\n\ndef test_no_existe(con):\n    assert buscar(con, "Kiwi") is None\n\ndef test_sin_stock():\n    assert not Producto("Heno", 7.25, 2).disponible(3)` },
        { h: 'Cómo seguir', p: [
          'Has pasado de `print("Hola, mundo")` a una aplicación con modelo, base de datos, API y pruebas. Es la misma estructura que usan muchos proyectos profesionales, solo que más pequeña.',
          'Siguientes pasos: guarda el proyecto en Git, pasa un formateador como `ruff` o `black`, añade una página web que llame a la API y publícala en un servicio de hosting. Elige un problema tuyo y resuélvelo con lo que sabes: es la forma más rápida de seguir aprendiendo.' ] },
      ],
      x: [
        mc('¿Por qué la tienda separa modelo.py, datos.py y api.py?', ['Para que cada archivo tenga una sola tarea y se pueda probar por separado', 'Porque Python no admite archivos largos', 'Para que el programa vaya más rápido', 'Porque Flask lo exige'], 'Separar responsabilidades hace el código más fácil de entender, cambiar y probar.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Producto:\n    nombre: str\n    precio: float\n    stock: int = 0\n\n    def disponible(self, cantidad):\n        return 0 < cantidad <= self.stock\n\np = Producto("Pipas", 4.5, 3)\nprint(p.disponible(3), p.disponible(0), p.disponible(4))`, ['True False False', 'True True False', 'False False False', 'True False True'], '3 está dentro del stock; 0 no es una cantidad positiva y 4 supera el stock.'),
        fill(`con.execute("SELECT precio FROM productos WHERE nombre = ?", (___,))`, ['nombre', '"nombre"', 'f"{nombre}"', '*nombre'], 'El valor va en una tupla aparte. `"nombre"` buscaría literalmente la palabra "nombre".'),
        mc('La API responde `404` a `GET /productos/Kiwi`. ¿Qué significa?', ['Que no hay ningún producto llamado Kiwi', 'Que el servidor se ha caído', 'Que falta el cuerpo JSON', 'Que el pedido se ha creado'], '404 es "no encontrado". Un servidor caído daría un error 5xx.'),
        out(`def total(precio, cantidad):\n    return round(precio * cantidad, 2)\n\nprint(total(4.5, 3), total(7.25, 2))`, ['13.5 14.5', '13.50 14.50', '13 14', '7.5 9.25'], '4.5 × 3 = 13.5 y 7.25 × 2 = 14.5. `round` no añade ceros al final: eso lo haría un formato como `:.2f`.'),
        mc('¿Qué ventaja tiene que la fixture use `conectar(":memory:")`?', ['Cada prueba empieza con una base vacía y no toca la de verdad', 'Las pruebas se guardan en tienda.db', 'Así no hace falta crear la tabla', 'La base se comparte entre todas las pruebas'], 'Una base en memoria nueva por prueba hace que las pruebas sean independientes y repetibles.'),
        typ('Escribe el código de estado que devuelve la API al crear un pedido', `return jsonify(total=13.5), ___`, '201', '201 significa "creado". 200 es un "correcto" genérico.'),
        out(`import sqlite3\nfrom dataclasses import dataclass\n\n@dataclass\nclass Producto:\n    nombre: str\n    precio: float\n    stock: int = 0\n\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE productos (nombre TEXT PRIMARY KEY, precio REAL, stock INTEGER)")\nfor p in [Producto("Pipas", 4.5, 10), Producto("Heno", 7.25), Producto("Pipas", 4.0, 8)]:\n    with con:\n        con.execute("INSERT OR REPLACE INTO productos VALUES (?, ?, ?)", (p.nombre, p.precio, p.stock))\nfila = con.execute("SELECT COUNT(*), SUM(stock) FROM productos").fetchone()\nprint(fila, Producto(*con.execute("SELECT * FROM productos WHERE nombre = 'Pipas'").fetchone()))`, ["(2, 8) Producto(nombre='Pipas', precio=4.0, stock=8)", "(3, 18) Producto(nombre='Pipas', precio=4.5, stock=10)", "(2, 18) Producto(nombre='Pipas', precio=4.0, stock=8)", 'sqlite3.IntegrityError'], 'El segundo "Pipas" reemplaza al primero porque el nombre es la clave primaria. Quedan 2 productos: Pipas con stock 8 y Heno con 0.'),
      ],
    },
  ],
}))(Sintaxis);
