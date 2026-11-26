/* Python · Español */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('python', 'es', {
  tag: 'De cero a analizar datos y crear APIs en 30 días, con el lenguaje más fácil de leer.',
  days: [
    // ───────────── Día 1 ─────────────
    {
      t: 'Introducción',
      d: 'Qué es Python, tu primer programa, la sangría y los comentarios.',
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
    },
    // ───────────── Día 2 ─────────────
    {
      t: 'Variables y funciones integradas',
      d: 'Guardar datos en variables, nombrarlas bien y usar input(), len() y las conversiones de tipo.',
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
      t: 'Operadores',
      d: 'Aritméticos, de comparación, lógicos y de asignación, y el orden en que se evalúan.',
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
      t: 'Strings',
      d: 'Texto en Python: comillas, índices, slicing, f-strings y los métodos más útiles.',
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
      t: 'Listas',
      d: 'Crear, recorrer, modificar, cortar y ordenar listas, y el peligro de las copias.',
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
    // ───────────── Día 6 ─────────────
    {
      t: 'Tuplas',
      d: 'Colecciones inmutables, desempaquetado y cuándo preferir una tupla a una lista.',
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
        { h: 'Funciones que devuelven varias cosas', p: [
          'Cuando una función devuelve varios valores, en realidad devuelve una tupla. `divmod(a, b)` es un ejemplo integrado: da el cociente y el resto a la vez.' ],
          code: `cociente, resto = divmod(17, 5)\nprint(cociente, resto)  # 3 2\nprint(divmod(17, 5))    # (3, 2)` },
        { h: 'Ejemplo real: líneas de un pedido', real: true, p: [
          'Cada línea de un pedido tiene nombre, precio y unidades. Guardarla como tupla evita que se modifique sin querer después de facturarla.' ],
          code: `linea1 = ("Teclado", 25.0, 2)\nlinea2 = ("Ratón", 12.5, 1)\nnombre, precio, unidades = linea1\nprint(nombre, precio * unidades)   # Teclado 50.0\ntotal = linea1[1] * linea1[2] + linea2[1] * linea2[2]\nprint("Total del pedido:", total)  # Total del pedido: 62.5` },
      ],
      x: [
        mc('¿Qué colección es inmutable?', ['tuple', 'list', 'dict', 'set'], 'Una tupla no se puede modificar después de crearla.'),
        out(`t = (10, 20, 30)\nprint(t[1])`, ['20', '10', '30', 'Error'], 'Las tuplas se indexan igual que las listas, desde 0.'),
        out(`x, y = (3, 4)\nprint(x * y)`, ['12', '7', '(3, 4)', 'Error'], 'El desempaquetado asigna 3 a `x` y 4 a `y`.'),
        fill(`punto = (3, 4)\n___ = punto\nprint(x, y)  # 3 4`, ['x, y', 'x y', 'x; y', 'x & y'], 'Para desempaquetar, escribe las variables separadas por comas a la izquierda del `=`.'),
        out(`t = (1, 2, 3)\nt[0] = 9\nprint(t)`, ['TypeError', '(9, 2, 3)', '(1, 2, 3)', 'None'], 'Las tuplas no admiten asignar elementos, así que Python lanza `TypeError`.'),
        out(`print(type((5)), type((5,)))`, ["<class 'int'> <class 'tuple'>", "<class 'tuple'> <class 'tuple'>", "<class 'int'> <class 'int'>", 'Error'], 'Los paréntesis solos no crean una tupla; la coma sí.'),
        out(`t = (1, 2) + (3,)\nprint(t)`, ['(1, 2, 3)', '(1, 2, (3,))', 'Error', '(4, 2)'], '`+` concatena tuplas y crea una nueva; las originales no cambian.'),
        out(`datos = (10, 20, 30, 40)\na, *b, c = datos\nprint(a + c, len(b), datos.index(30))`, ['50 2 2', '50 2 3', '30 3 2', 'Error'], '`a` toma 10, `c` toma 40 y `*b` recoge [20, 30]. El 30 está en el índice 2.'),
      ],
    },
    // ───────────── Día 7 ─────────────
    {
      t: 'Sets',
      d: 'Conjuntos sin duplicados: crearlos, modificarlos y combinarlos con unión, intersección y diferencia.',
      guide: [
        { h: '¿Qué es un set?', p: [
          'Un set es una colección sin orden y sin elementos repetidos. Se escribe con llaves: `{1, 2, 3}`. Si metes duplicados, se quedan en uno.',
          'Un set vacío se crea con `set()`: `{}` crea un diccionario vacío.',
          'Comprobar si algo está en un set con `in` es muy rápido, incluso con millones de elementos. Por eso se usan para listas de "ya visto".' ],
          code: `etiquetas = {"python", "web", "python", "datos"}\nprint(len(etiquetas))      # 3\nprint("web" in etiquetas)  # True\nvacio = set()\nprint(type({}))            # <class 'dict'>` },
        { h: 'Añadir y quitar', p: [
          '`add()` añade un elemento. Para quitar, `remove()` lanza `KeyError` si no existe, mientras que `discard()` no hace nada. Usa `discard()` cuando no estés seguro.',
          'Como no tienen orden, los sets no admiten índices: `s[0]` da error.' ],
          code: `s = {1, 2, 3}\ns.add(4)\ns.discard(10)   # no existe: no pasa nada\ns.remove(1)\nprint(s)        # {2, 3, 4}\n# s.remove(10)  # KeyError: 10` },
        { h: 'Operaciones de conjuntos', p: [
          'Unión `|` (todos), intersección `&` (los comunes), diferencia `-` (los de uno que no están en el otro) y diferencia simétrica `^` (los que están en uno solo).',
          '`issubset()` comprueba si todos los elementos de un set están en otro.' ],
          code: `a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(a | b)  # {1, 2, 3, 4, 5}\nprint(a & b)  # {3, 4}\nprint(a - b)  # {1, 2}\nprint(a ^ b)  # {1, 2, 5}\nprint({1, 2}.issubset(a))  # True` },
        { h: 'Quitar duplicados de una lista', p: [
          'Convertir una lista en set elimina los repetidos al instante. Como el set no tiene orden, usa `sorted()` si quieres un resultado ordenado y estable.' ],
          code: `correos = ["ana@x.com", "luis@x.com", "ana@x.com"]\nunicos = sorted(set(correos))\nprint(unicos)  # ['ana@x.com', 'luis@x.com']` },
        { h: 'Ejemplo real: clientes que repiten', real: true, p: [
          'Una tienda quiere saber qué clientes compraron en enero y en febrero, cuáles dejaron de comprar y cuáles son nuevos. Son tres operaciones de conjuntos.' ],
          code: `enero = {"Ana", "Luis", "Eva", "Marta"}\nfebrero = {"Luis", "Marta", "Pedro"}\nfieles = enero & febrero\nperdidos = enero - febrero\nnuevos = febrero - enero\nprint(sorted(fieles))    # ['Luis', 'Marta']\nprint(sorted(perdidos))  # ['Ana', 'Eva']\nprint(sorted(nuevos))    # ['Pedro']` },
      ],
      x: [
        out(`s = {1, 2, 2, 3, 3, 3}\nprint(len(s))`, ['3', '6', '4', '1'], 'Un set elimina los duplicados: queda {1, 2, 3}.'),
        mc('¿Cómo se crea un set vacío?', ['set()', '{}', '[]', 'set[]'], '`{}` crea un diccionario vacío, no un set.'),
        out(`s = {1, 2}\ns.add(2)\ns.add(5)\nprint(len(s))`, ['3', '4', '2', 'Error'], 'Añadir un 2 que ya existe no cambia nada; el 5 sí se añade.'),
        out(`a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)`, ['{2, 3}', '{1, 2, 3, 4}', '{1}', '{4}'], '`&` es la intersección: los elementos que están en ambos.'),
        fill(`a = {1, 2, 3}\nb = {3, 4}\nprint(a ___ b)  # {1, 2, 3, 4}`, ['|', '&', '-', '^'], '`|` es la unión: junta todos los elementos de los dos sets sin repetir.'),
        out(`a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a - b)`, ['{1}', '{4}', '{1, 4}', '{2, 3}'], 'La diferencia deja los elementos de `a` que no están en `b`.'),
        out(`print(sorted(set("banana")))`, ["['a', 'b', 'n']", "['b', 'a', 'n', 'a', 'n', 'a']", "{'a', 'b', 'n'}", 'abn'], 'El set quita duplicados y `sorted()` devuelve una lista ordenada.'),
        out(`a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(len(a | b), sorted(a ^ b), {3}.issubset(a & b))`, ['5 [1, 2, 5] True', '7 [1, 2, 5] True', '5 [3, 4] True', '5 [1, 2, 5] False'], 'La unión tiene 5 elementos, la diferencia simétrica deja 1, 2 y 5, y el 3 está en la intersección {3, 4}.'),
      ],
    },
    // ───────────── Día 8 ─────────────
    {
      t: 'Diccionarios',
      d: 'Pares clave-valor: acceder, añadir, borrar, recorrer y anidar datos.',
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
          '`keys()` da las claves, `values()` los valores e `items()` los pares. Con `for clave, valor in d.items()` recorres todo a la vez (los bucles los verás a fondo en el día 10).',
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
    // ───────────── Día 9 ─────────────
    {
      t: 'Condicionales',
      d: 'Tomar decisiones con if, elif y else, valores verdaderos y falsos, y el operador ternario.',
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
    // ───────────── Día 10 ─────────────
    {
      t: 'Bucles',
      d: 'Repetir tareas con for y while, range(), enumerate(), break y continue.',
      guide: [
        { h: 'El bucle for', p: [
          '`for` recorre los elementos de cualquier secuencia: una lista, un string, un diccionario... En cada vuelta, la variable toma el siguiente elemento.',
          'Úsalo cuando sepas qué vas a recorrer. Es el bucle que más usarás en Python.' ],
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
    // ───────────── Día 11 ─────────────
    {
      t: 'Funciones',
      d: 'Definir funciones con def, devolver resultados, parámetros por defecto, *args, **kwargs y ámbito.',
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
      t: 'Módulos',
      d: 'Organizar código en módulos, las formas de importar y la biblioteca estándar: math, random y más.',
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
        { h: 'if __name__ == "__main__"', p: [
          'Cuando ejecutas un archivo directamente, la variable `__name__` vale `"__main__"`. Cuando otro archivo lo importa, vale el nombre del módulo.',
          'Por eso el código de prueba o el punto de entrada se mete en ese `if`: así importar el módulo no ejecuta nada por sorpresa.' ],
          code: `def main():\n    print("Ejecutando el programa")\n\nif __name__ == "__main__":\n    main()` },
        { h: 'Ejemplo real: generar una contraseña segura', real: true, p: [
          'Para contraseñas y tokens no uses `random`, que es predecible. El módulo `secrets` de la biblioteca estándar está pensado para esto, y `string` trae las letras y dígitos ya preparados.' ],
          code: `import secrets\nimport string\n\ndef generar_contrasena(longitud=12):\n    caracteres = string.ascii_letters + string.digits + "!@#$%"\n    contrasena = ""\n    for _ in range(longitud):\n        contrasena += secrets.choice(caracteres)\n    return contrasena\n\nprint(generar_contrasena())  # p. ej. k7R!x2Qm@9Lz` },
      ],
      x: [
        fill(`___ math\nprint(math.pi)`, ['import', 'include', 'using', 'require'], '`import` carga un módulo en Python.'),
        out(`import math\nprint(math.sqrt(25))`, ['5.0', '5', '25', 'Error'], '`math.sqrt` devuelve siempre un `float`.'),
        mc('¿Qué hace `from math import pi`?', ['Importa solo el nombre pi para usarlo directamente', 'Importa todo el módulo con el nombre pi', 'Crea una variable pi dentro de math', 'Descarga el módulo math'], 'Después puedes escribir `pi` sin el prefijo `math.`.'),
        fill(`import statistics ___ st\nprint(st.mean([1, 2, 3]))`, ['as', 'to', '=', 'alias'], '`as` da un alias al módulo importado.'),
        mc('¿Qué devuelve `random.randint(1, 6)`?', ['Un entero entre 1 y 6, ambos incluidos', 'Un entero entre 1 y 5', 'Un decimal entre 1 y 6', 'Siempre 1'], 'A diferencia de `range`, `randint` incluye el límite superior.'),
        out(`from math import floor, ceil\nprint(floor(2.5), ceil(2.1))`, ['2 3', '3 3', '2 2', '3 2'], '`floor` redondea hacia abajo y `ceil` hacia arriba, sin mirar los decimales.'),
        mc('¿Para qué sirve `if __name__ == "__main__":`?', ['Para ejecutar código solo cuando el archivo se ejecuta directamente, no al importarlo', 'Para declarar la función principal obligatoria', 'Para importar el módulo main', 'Para comprobar la versión de Python'], 'Al importar el archivo, `__name__` vale el nombre del módulo y ese bloque no se ejecuta.'),
        out(`import math as m\nfrom statistics import mean\nlados = [3, 4]\nhipotenusa = m.sqrt(lados[0] ** 2 + lados[1] ** 2)\nprint(hipotenusa, mean(lados + [hipotenusa]))`, ['5.0 4.0', '5 4', '5.0 4', '25.0 4.0'], '√(9 + 16) = 5.0, un `float`. La media de [3, 4, 5.0] es 4.0: al haber un `float`, el resultado también lo es.'),
      ],
    },
    // ───────────── Día 13 ─────────────
    {
      t: 'Comprensión de listas',
      d: 'Crear listas, diccionarios y sets en una línea, con filtros y transformaciones.',
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
    // ───────────── Día 14 ─────────────
    {
      t: 'Funciones de orden superior',
      d: 'Funciones como valores: lambda, map, filter, sorted con key, closures y decoradores.',
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
          'Se usan para registrar llamadas, medir tiempos, comprobar permisos o cachear resultados sin tocar la función original. Flask, que verás el día 26, los usa para las rutas.' ],
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
    // ───────────── Día 15 ─────────────
    {
      t: 'Errores de tipo',
      d: 'Leer un traceback y reconocer los errores más comunes: SyntaxError, NameError, TypeError, ValueError...',
      guide: [
        { h: 'Cómo leer un traceback', p: [
          'Cuando algo falla, Python muestra un traceback. Léelo de abajo arriba: la última línea dice el tipo de error y su mensaje; justo encima aparecen el archivo, la línea y el código que falló.',
          'Copiar la última línea en un buscador suele llevarte directamente a la solución.' ],
          code: `Traceback (most recent call last):\n  File "tienda.py", line 3, in <module>\n    total = precio * cantidad\nNameError: name 'cantidad' is not defined` },
        { h: 'SyntaxError e IndentationError', p: [
          'Un `SyntaxError` significa que el código está mal escrito y Python ni siquiera empieza a ejecutarlo: faltan dos puntos, un paréntesis o unas comillas.',
          '`IndentationError` es un caso particular: la sangría no cuadra. No mezcles tabuladores y espacios; configura tu editor para usar 4 espacios.' ],
          code: `if edad >= 18      # SyntaxError: expected ':'\n    print("adulto")\n\ndef saludar():\nprint("hola")      # IndentationError: expected an indented block` },
        { h: 'NameError, TypeError y ValueError', p: [
          '`NameError`: usas un nombre que no existe (una errata o una variable que aún no has creado).',
          '`TypeError`: la operación no tiene sentido con ese tipo, como sumar texto y número. `ValueError`: el tipo es correcto, pero el valor no, como `int("treinta")`.' ],
          code: `print(nombre)    # NameError: name 'nombre' is not defined\n"Edad: " + 30    # TypeError: can only concatenate str (not "int") to str\nint("treinta")   # ValueError: invalid literal for int() with base 10: 'treinta'\nlen(5)           # TypeError: object of type 'int' has no len()` },
        { h: 'Otros errores frecuentes', p: [
          '`IndexError`: índice fuera de la lista. `KeyError`: clave que no está en el diccionario. `AttributeError`: método o atributo que ese objeto no tiene.',
          '`ZeroDivisionError`: división entre cero. `ModuleNotFoundError`: el módulo no existe o no está instalado (o está mal escrito).' ],
          code: `colores = ["rojo", "verde"]\ncolores[2]        # IndexError: list index out of range\n{"a": 1}["b"]     # KeyError: 'b'\n"hola".push("!")  # AttributeError: 'str' object has no attribute 'push'\n10 / 0            # ZeroDivisionError: division by zero\nimport numpi      # ModuleNotFoundError: No module named 'numpi'` },
        { h: 'Ejemplo real: depurar el cálculo de una media', real: true, p: [
          'Las notas llegan de un formulario como textos. Sumarlas directamente lanza `TypeError`; el traceback lo deja claro: `sum()` intenta sumar un `int` con un `str`. La solución es convertirlas antes.' ],
          code: `notas = ["7", "8.5", "6"]\n# media = sum(notas) / len(notas)\n# TypeError: unsupported operand type(s) for +: 'int' and 'str'\nnumeros = [float(n) for n in notas]\nmedia = sum(numeros) / len(numeros)\nprint(round(media, 2))  # 7.17` },
      ],
      x: [
        mc('¿Qué error produce `print(nombre)` si `nombre` no existe?', ['NameError', 'TypeError', 'SyntaxError', 'ValueError'], 'Python no encuentra ninguna variable con ese nombre.'),
        mc('¿Qué error produce `"5" + 5`?', ['TypeError', 'ValueError', 'NameError', 'Ninguno'], 'No se puede sumar un `str` y un `int`; convierte uno de ellos primero.'),
        mc('¿Qué error produce `[1, 2, 3][5]`?', ['IndexError', 'KeyError', 'ValueError', 'TypeError'], 'El índice 5 no existe en una lista de 3 elementos.'),
        mc('¿Qué error produce `int("hola")`?', ['ValueError', 'TypeError', 'NameError', 'SyntaxError'], 'El tipo es correcto (un texto), pero su valor no se puede convertir en número.'),
        out(`print(1 / 0)`, ['ZeroDivisionError', '0', 'inf', 'None'], 'Dividir entre cero lanza `ZeroDivisionError`.'),
        mc('¿Qué error produce `"hola".push("!")`?', ['AttributeError', 'TypeError', 'NameError', 'SyntaxError'], 'Los strings no tienen ningún método llamado `push`.'),
        typ('Escribe el tipo de error que produce este código', `x = 5\nif x > 3\n    print(x)\n# Error: ___`, 'SyntaxError', 'Falta `:` al final del `if`, así que el código está mal escrito y Python no llega a ejecutarlo.'),
        mc('¿Qué error se lanza primero al ejecutar este código?', ['TypeError', 'ZeroDivisionError', 'KeyError', 'ValueError'], 'La segunda línea ya falla: `"1.20"` es un texto y no se puede sumar con el `float` 0.95. La división entre cero nunca llega a ejecutarse.', `precios = {"pan": "1.20", "leche": 0.95}\ntotal = precios["pan"] + precios["leche"]\nprint(total / 0)`),
      ],
    },
    // ───────────── Día 16 ─────────────
    {
      t: 'Fecha y hora',
      d: 'El módulo datetime: crear fechas, darles formato, convertir textos y calcular diferencias.',
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
    // ───────────── Día 17 ─────────────
    {
      t: 'Manejo de excepciones',
      d: 'Controlar errores con try, except, else y finally, y lanzar los tuyos con raise.',
      guide: [
        { h: 'try y except', p: [
          'Algunos errores no dependen de ti: el usuario escribe letras donde esperabas un número, un archivo no existe o la red se cae. `try` ejecuta el código que puede fallar y `except` decide qué hacer si falla, en lugar de que el programa se detenga.',
          'Captura siempre el tipo concreto (`except ValueError`). Un `except:` a secas atrapa también errores que no esperabas y esconde fallos de verdad.' ],
          code: `texto = "doce"\ntry:\n    numero = int(texto)\nexcept ValueError:\n    print("Eso no es un número")\n    numero = 0\nprint(numero)  # 0` },
        { h: 'Varias excepciones y as', p: [
          'Puedes encadenar varios `except`, uno por tipo de error. Python usa el primero que encaje.',
          'Con `except TipoError as e` guardas la excepción en `e` para mostrar o registrar su mensaje.' ],
          code: `def dividir(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "No se puede dividir entre cero"\n    except TypeError as e:\n        return f"Tipo incorrecto: {e}"\n\nprint(dividir(10, 2))  # 5.0\nprint(dividir(10, 0))  # No se puede dividir entre cero` },
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
        fill(`___:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("error")`, ['try', 'do', 'catch', 'test'], 'El bloque que puede fallar va dentro de `try`.'),
        out(`try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("error")\nfinally:\n    print("fin")`, ['error\nfin', 'fin', 'error', 'inf\nfin'], 'Dividir entre cero lanza `ZeroDivisionError`, que se captura. `finally` se ejecuta siempre.'),
        mc('¿Cuándo se ejecuta el bloque `finally`?', ['Siempre, haya error o no', 'Solo si hay un error', 'Solo si no hay errores', 'Nunca, es opcional'], 'Se usa para liberar recursos como archivos o conexiones.'),
        out(`try:\n    n = int("abc")\nexcept ValueError:\n    n = -1\nprint(n)`, ['-1', 'abc', '0', 'Error'], 'La conversión falla, se captura `ValueError` y se asigna -1.'),
        out(`try:\n    print("a")\nexcept ValueError:\n    print("b")\nelse:\n    print("c")`, ['a\nc', 'a\nb', 'a', 'a\nb\nc'], 'No hubo error, así que tras el `try` se ejecuta el `else`.'),
        fill(`def dividir(a, b):\n    if b == 0:\n        ___ ValueError("b no puede ser 0")\n    return a / b`, ['raise', 'throw', 'except', 'error'], 'En Python las excepciones se lanzan con `raise`. `throw` es de Java y JavaScript.'),
        out(`try:\n    x = [1, 2][5]\nexcept KeyError:\n    print("clave")\nexcept IndexError:\n    print("índice")`, ['índice', 'clave', 'clave\níndice', 'IndexError'], 'El índice 5 no existe, así que se lanza `IndexError` y lo captura el segundo `except`.'),
        out(`def convertir(valores):\n    total = 0\n    for v in valores:\n        try:\n            total += int(v)\n        except ValueError:\n            total -= 1\n        finally:\n            total += 10\n    return total\n\nprint(convertir(["5", "a", "2"]))`, ['36', '6', '26', '37'], '"5" suma 5, "a" resta 1 y "2" suma 2, y `finally` añade 10 en cada vuelta: 5 - 1 + 2 + 30 = 36.'),
      ],
    },
    // ───────────── Día 18 ─────────────
    {
      t: 'Expresiones regulares',
      d: 'Buscar, validar y reemplazar patrones de texto con el módulo re.',
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
      t: 'Manejo de archivos',
      d: 'Leer y escribir archivos de texto con open() y with, y trabajar con CSV y JSON.',
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
    // ───────────── Día 20 ─────────────
    {
      t: 'Gestor de paquetes pip',
      d: 'Instalar, actualizar y fijar librerías de PyPI con pip y requirements.txt.',
      guide: [
        { h: 'pip y PyPI', p: [
          'La biblioteca estándar es grande, pero el verdadero poder de Python está en PyPI (Python Package Index), un repositorio con cientos de miles de paquetes: `requests`, `pandas`, `flask`, `numpy`...',
          'pip es el programa que los descarga e instala. Viene con Python. Si tienes varias versiones de Python, `python -m pip` garantiza que instalas en la misma que ejecutas.' ],
          code: `pip --version\npip install requests\npip install requests==2.32.3   # una versión exacta\npip install --upgrade requests\npip uninstall requests\npython -m pip install requests  # el pip de ESTE Python` },
        { h: 'Ver qué tienes instalado', p: [
          '`pip list` muestra todos los paquetes con su versión y `pip show nombre` da detalles de uno: versión, dependencias y dónde está instalado.' ],
          code: `pip list\npip show requests\n# Name: requests\n# Version: 2.32.3\n# Requires: certifi, charset-normalizer, idna, urllib3` },
        { h: 'requirements.txt', p: [
          '`pip freeze > requirements.txt` guarda la lista exacta de paquetes y versiones del proyecto. Se sube al repositorio junto al código.',
          'Quien clone el proyecto ejecuta `pip install -r requirements.txt` y obtiene exactamente las mismas versiones. Así evitas el clásico "en mi ordenador funciona".' ],
          code: `# requirements.txt\nrequests==2.32.3\npython-dateutil==2.9.0\n\n# en otro ordenador\npip install -r requirements.txt` },
        { h: 'Errores frecuentes', p: [
          '`ModuleNotFoundError` suele significar que el paquete no está instalado en el Python que estás usando.',
          'El nombre para instalar no siempre coincide con el de importar: `pip install beautifulsoup4` se importa como `bs4` y `pip install Pillow` como `PIL`.',
          'Instala solo paquetes conocidos y revisa el nombre: existen paquetes maliciosos con nombres casi iguales a los populares.' ],
          code: `pip install beautifulsoup4   # se instala así...\n\nfrom bs4 import BeautifulSoup  # ...y se importa así` },
        { h: 'Ejemplo real: tipo de cambio con requests', real: true, p: [
          'Con `requests` puedes consultar una API pública de divisas en tres líneas. `timeout` evita que el programa se quede colgado y `raise_for_status()` lanza un error si la respuesta no es correcta.' ],
          code: `# pip install requests\nimport requests\n\nr = requests.get("https://api.frankfurter.app/latest?from=EUR&to=USD", timeout=10)\nr.raise_for_status()\ndatos = r.json()\nprint("1 EUR =", datos["rates"]["USD"], "USD")` },
      ],
      x: [
        mc('¿Qué es pip?', ['El gestor de paquetes de Python', 'Un editor de código', 'Un tipo de dato', 'Un framework web'], 'pip instala y gestiona librerías de terceros.'),
        ord('Instala el paquete requests', ['pip', 'install', 'requests'], ['get', 'npm'], 'El comando es `pip install` seguido del nombre del paquete.'),
        mc('¿De dónde descarga pip los paquetes por defecto?', ['De PyPI, el Python Package Index', 'De GitHub', 'De npm', 'De la tienda de Windows'], 'PyPI aloja cientos de miles de paquetes de Python.'),
        mc('¿Qué hace `pip freeze > requirements.txt`?', ['Guarda los paquetes instalados y sus versiones en un archivo', 'Impide que Python se actualice', 'Borra los paquetes', 'Instala los paquetes del archivo'], 'Así otras personas pueden reproducir tu entorno.'),
        typ('Instala las dependencias listadas en el archivo', `pip install ___ requirements.txt`, '-r', '`-r` indica que lea la lista de paquetes de un archivo.'),
        mc('¿Qué comando muestra los paquetes instalados?', ['pip list', 'pip show-all', 'pip ls', 'pip installed'], '`pip show nombre` da los detalles de un paquete concreto.'),
        mc('Instalas `pip install beautifulsoup4`. ¿Cómo lo importas?', ['from bs4 import BeautifulSoup', 'import beautifulsoup4', 'from beautifulsoup4 import BeautifulSoup', 'import soup'], 'El paquete de PyPI se llama beautifulsoup4, pero el módulo que instala se llama `bs4`.'),
        mc('Tu script falla con `ModuleNotFoundError: No module named \'requests\'`, pero `pip install requests` dice que ya está instalado. ¿Qué es lo más probable?', ['pip instala en otro Python distinto del que ejecuta el script: usa python -m pip install requests', 'requests no existe en PyPI', 'Hay que escribir import Requests con mayúscula', 'Hay que reiniciar el ordenador'], 'Con varias instalaciones de Python, `pip` y `python` pueden no corresponderse. `python -m pip` usa el pip del mismo intérprete.'),
      ],
    },
    // ───────────── Día 21 ─────────────
    {
      t: 'Clases y objetos',
      d: 'class, __init__, self, atributos, herencia, super() y dataclasses.',
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
    // ───────────── Día 22 ─────────────
    {
      t: 'Web scraping',
      d: 'Descargar páginas con requests y extraer datos con BeautifulSoup.',
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
    // ───────────── Día 23 ─────────────
    {
      t: 'Entornos virtuales',
      d: 'venv: aislar las dependencias de cada proyecto.',
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
    // ───────────── Día 24 ─────────────
    {
      t: 'Estadística',
      d: 'statistics y NumPy: media, mediana, moda, dispersión y arrays.',
      guide: [
        { h: 'Medidas de tendencia central', p: [
          'La media es la suma dividida entre la cantidad, la mediana es el valor central de los datos ordenados y la moda es el valor que más se repite.',
          'La mediana resiste mejor los valores extremos: con sueldos, unos pocos muy altos disparan la media pero apenas mueven la mediana.' ],
          code: `import statistics as st\n\nsueldos = [1200, 1300, 1250, 1400, 9000]\nprint(st.mean(sueldos))    # 2830\nprint(st.median(sueldos))  # 1300` },
        { h: 'Dispersión: la desviación estándar', p: [
          'La desviación estándar mide cuánto se alejan los datos de la media. Dos clases pueden tener la misma nota media y una dispersión muy distinta.',
          '`statistics.pstdev()` calcula la desviación de toda la población y `stdev()` la de una muestra.' ],
          code: `import statistics as st\n\nclase_a = [5, 5, 5, 5]\nclase_b = [0, 10, 0, 10]\nprint(st.mean(clase_a), st.mean(clase_b))      # 5 5\nprint(st.pstdev(clase_a), st.pstdev(clase_b))  # 0.0 5.0` },
        { h: 'NumPy: cálculos con arrays', p: [
          'NumPy trabaja con arrays de números de forma muy rápida. Las operaciones se aplican a todos los elementos a la vez, sin bucles: es la vectorización.',
          'Ojo: con una lista normal, `lista * 2` la repite; con un array, multiplica cada elemento.' ],
          code: `import numpy as np\n\ntemps = np.array([18.5, 21.0, 23.5, 19.0])\nprint(temps.mean())              # 20.5\nprint(temps.max(), temps.min())  # 23.5 18.5\nprint(temps * 9 / 5 + 32)        # las mismas temperaturas en Fahrenheit` },
        { h: 'Filtrar con condiciones', p: [
          'Con NumPy puedes usar una condición como índice: `arr[arr > 20]` devuelve los elementos que la cumplen.',
          '`np.percentile(datos, 90)` da el valor por debajo del cual está el 90 % de los datos, útil para detectar casos extremos.' ],
          code: `import numpy as np\n\nventas = np.array([120, 80, 300, 95, 150])\nprint(ventas[ventas > 100])  # [120 300 150]\nprint(ventas.sum())          # 745` },
        { h: 'Ejemplo real: analizar las notas de una clase', real: true, p: [
          'Un profesor quiere un resumen rápido de su grupo: la media, la mediana y cuántos han aprobado.' ],
          code: `import statistics as st\n\nnotas = {"Ana": 8.5, "Luis": 6.0, "Eva": 9.5, "Leo": 4.5, "Sara": 7.0}\nvalores = list(notas.values())\n\nprint("Media:", st.mean(valores))      # Media: 7.1\nprint("Mediana:", st.median(valores))  # Mediana: 7.0\naprobados = [n for n, v in notas.items() if v >= 5]\nprint(f"Aprobados: {len(aprobados)} de {len(notas)}")  # Aprobados: 4 de 5` },
      ],
      x: [
        out(`import statistics as st\nprint(st.mean([2, 4, 6]))`, ['4', '12', '6', '3'], 'La media es la suma (12) dividida entre la cantidad (3).'),
        mc('¿Qué medida es el valor central de los datos ordenados?', ['La mediana', 'La media', 'La moda', 'La desviación estándar'], 'Con [1, 3, 9], la mediana es 3.'),
        fill(`import statistics as st\nprint(st.___([1, 2, 2, 3]))  # 2, el valor más repetido`, ['mode', 'mean', 'median', 'max'], '`mode` devuelve el valor más frecuente.'),
        out(`import numpy as np\na = np.array([1, 2, 3])\nprint(a * 2)`, ['[2 4 6]', '[1, 2, 3, 1, 2, 3]', '[1 2 3 1 2 3]', 'Error'], 'NumPy multiplica cada elemento. Con una lista normal, `* 2` la repetiría.'),
        out(`import numpy as np\nprint(np.arange(0, 10, 3))`, ['[0 3 6 9]', '[0 3 6]', '[3 6 9]', '[0, 3, 6, 9, 10]'], '`arange` funciona como `range`, pero devuelve un array.'),
        out(`import numpy as np\nm = np.zeros((2, 3))\nprint(m.shape)`, ['(2, 3)', '(3, 2)', '6', '[2, 3]'], '`shape` indica filas y columnas.'),
        out(`import numpy as np\na = np.array([3, 8, 1, 9])\nprint(a[a > 2])`, ['[3 8 9]', '[8 9]', '[True True False True]', '[3, 8, 9]'], 'Una condición como índice filtra el array y deja los elementos que la cumplen.'),
        out(`import statistics as st\ndatos = [2, 4, 4, 4, 100]\nprint(st.median(datos), st.mode(datos), st.mean(datos) > 20)`, ['4 4 True', '4 4 False', '22.8 4 True', '4 100 True'], 'La mediana y la moda son 4, pero el 100 dispara la media hasta 22.8. Por eso la mediana es más fiable con valores extremos.'),
      ],
    },
    // ───────────── Día 25 ─────────────
    {
      t: 'Pandas',
      d: 'Series, DataFrames, leer CSV, filtrar, crear columnas y agrupar.',
      guide: [
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
        mc('¿Qué estructura de pandas representa una tabla con filas y columnas?', ['DataFrame', 'Series', 'Array', 'Table'], 'Una `Series` es una sola columna.'),
        fill(`import pandas as pd\ndf = pd.___("ventas.csv")`, ['read_csv', 'open_csv', 'load', 'csv'], '`read_csv` carga un archivo CSV en un DataFrame.'),
        mc('¿Qué muestra `df.head()`?', ['Las primeras 5 filas', 'Los nombres de las columnas', 'La última fila', 'Las estadísticas'], 'Puedes pasar otro número: `df.head(10)`.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"x": [1, 2, 3]})\nprint(df["x"].sum())`, ['6', '3', '[1, 2, 3]', 'x'], 'Seleccionas la columna como Series y la sumas.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"edad": [20, 35, 50]})\nprint(len(df[df["edad"] > 30]))`, ['2', '1', '3', '0'], 'El filtro deja las filas con 35 y 50.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"a": [1, 2], "b": [3, 4]})\nprint(df.shape)`, ['(2, 2)', '(4,)', '2', '(1, 2)'], '2 filas y 2 columnas.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"a": [1, 2, 3]})\ndf["b"] = df["a"] * 10\nprint(df["b"].tolist())`, ['[10, 20, 30]', '[1, 2, 3]', '[10]', '60'], 'La operación se aplica a toda la columna y crea una nueva.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"tienda": ["A", "B", "A", "B"], "total": [10, 5, 20, 1]})\nr = df.groupby("tienda")["total"].sum()\nprint(r["A"], r["B"])`, ['30 6', '10 5', '15 3', '36'], '`groupby` agrupa las filas por tienda y `sum` suma cada grupo: A = 10 + 20 y B = 5 + 1.'),
      ],
    },
    // ───────────── Día 26 ─────────────
    {
      t: 'Python para la web',
      d: 'Flask: rutas, parámetros, plantillas y formularios.',
      guide: [
        { h: 'Frameworks web en Python', p: [
          'Un framework web recibe las peticiones HTTP del navegador y decide qué responder. En Python los más usados son Flask (pequeño y flexible), Django (completo, con ORM y panel de administración) y FastAPI (rápido y pensado para APIs).',
          'En este día usamos Flask: `pip install flask`.' ] },
        { h: 'Tu primera aplicación Flask', p: [
          'Cada ruta se asocia a una función con el decorador `@app.route()`. Lo que devuelve la función es lo que ve el navegador.',
          'Arranca el servidor de desarrollo con `flask --app app run --debug` y abre http://127.0.0.1:5000 en el navegador.' ],
          code: `# app.py\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef inicio():\n    return "<h1>Hola desde Flask</h1>"\n\n@app.route("/saludo/<nombre>")\ndef saludo(nombre):\n    return f"Hola, {nombre}"` },
        { h: 'Plantillas HTML', p: [
          'Para páginas completas, Flask usa plantillas Jinja guardadas en la carpeta `templates`. `render_template()` las rellena con tus datos.',
          'En la plantilla, `{{ variable }}` muestra un valor y `{% for %}` recorre listas. Jinja escapa el HTML automáticamente, lo que protege frente a inyecciones de código.' ],
          code: `# app.py\nfrom flask import Flask, render_template\n\napp = Flask(__name__)\n\n@app.route("/tareas")\ndef tareas():\n    lista = ["Comprar pan", "Estudiar Python"]\n    return render_template("tareas.html", tareas=lista)\n\n# templates/tareas.html\n# <ul>{% for t in tareas %}<li>{{ t }}</li>{% endfor %}</ul>` },
        { h: 'Formularios y métodos HTTP', p: [
          'Una ruta puede aceptar varios métodos: `GET` para mostrar y `POST` para recibir datos. Los campos del formulario llegan en `request.form`.',
          'Tras procesar un POST, redirige con `redirect()` para que recargar la página no reenvíe el formulario.' ],
          code: `from flask import Flask, request, redirect\n\napp = Flask(__name__)\nmensajes = []\n\n@app.route("/contacto", methods=["GET", "POST"])\ndef contacto():\n    if request.method == "POST":\n        mensajes.append(request.form["mensaje"])\n        return redirect("/contacto")\n    return f"Mensajes recibidos: {len(mensajes)}"` },
        { h: 'Ejemplo real: la carta de una cafetería', real: true, p: [
          'Una cafetería quiere publicar su carta en una web que se actualice cambiando una lista en Python, sin tocar el HTML.' ],
          code: `from flask import Flask, render_template_string\n\napp = Flask(__name__)\nCARTA = [("Café", 1.80), ("Té", 1.50), ("Tostada", 2.20)]\n\nPLANTILLA = """\n<h1>Carta</h1>\n<ul>{% for nombre, precio in carta %}\n  <li>{{ nombre }}: {{ "%.2f"|format(precio) }} €</li>\n{% endfor %}</ul>\n"""\n\n@app.route("/")\ndef carta():\n    return render_template_string(PLANTILLA, carta=CARTA)` },
      ],
      x: [
        mc('¿Qué es Flask?', ['Un microframework para crear aplicaciones web', 'Una base de datos', 'Un editor de código', 'Un gestor de paquetes'], 'Flask es ligero y se amplía con extensiones.'),
        fill(`@app.___("/")\ndef inicio():\n    return "Hola"`, ['route', 'get_route', 'path', 'url'], '`@app.route` asocia una URL con la función.'),
        mc('Con la ruta `/saludo/<nombre>`, ¿qué valor recibe `nombre` al visitar `/saludo/Ana`?', ['"Ana"', '"<nombre>"', '"saludo"', 'None'], 'Las partes entre `< >` son variables de la URL.'),
        mc('¿Qué función rellena una plantilla HTML de la carpeta templates?', ['render_template()', 'show_html()', 'template()', 'render()'], 'Las plantillas usan la sintaxis de Jinja.'),
        fill(`@app.route("/contacto", methods=[___])\ndef contacto():\n    ...`, ['"GET", "POST"', 'GET, POST', '"get()", "post()"', 'ALL'], '`methods` es una lista de textos con los métodos HTTP permitidos.'),
        mc('¿Qué framework de Python es más completo e incluye ORM y panel de administración?', ['Django', 'Flask', 'NumPy', 'Requests'], 'Django sigue la filosofía de "baterías incluidas".'),
        mc('Tras procesar un formulario con POST, ¿por qué conviene devolver `redirect()`?', ['Para que recargar la página no reenvíe el formulario', 'Para que la página cargue más rápido', 'Porque Flask lo exige', 'Para borrar los datos del formulario'], 'Es el patrón Post/Redirect/Get.'),
        out(`from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/doble/<int:n>")\ndef doble(n):\n    return str(n * 2)\n\nwith app.test_client() as c:\n    print(c.get("/doble/21").text)`, ['42', '2121', '21', 'Error'], 'El conversor `<int:n>` transforma "21" en un entero, así que el resultado es 42 y no "2121". `test_client()` permite probar rutas sin arrancar el servidor.'),
      ],
    },
    // ───────────── Día 27 ─────────────
    {
      t: 'Python con MongoDB',
      d: 'pymongo: insertar, buscar, actualizar y borrar documentos.',
      guide: [
        { h: 'Bases de datos de documentos', p: [
          'MongoDB es una base de datos NoSQL: en lugar de tablas con columnas fijas, guarda documentos con forma de JSON agrupados en colecciones.',
          'Cada documento puede tener campos distintos, lo que la hace flexible para datos que cambian a menudo. Para probar sin instalar nada existe MongoDB Atlas, que tiene un plan gratuito.' ] },
        { h: 'Conectar con pymongo', p: [
          '`pip install pymongo` instala el controlador oficial. `MongoClient` abre la conexión; después eliges la base de datos y la colección como si fueran diccionarios.',
          'No escribas la contraseña en el código: guárdala en una variable de entorno.' ],
          code: `import os\nfrom pymongo import MongoClient\n\ncliente = MongoClient(os.environ["MONGO_URL"])\ndb = cliente["escuela"]\nalumnos = db["alumnos"]` },
        { h: 'Crear y leer documentos', p: [
          '`insert_one()` e `insert_many()` añaden documentos. `find()` devuelve un cursor con los que cumplen el filtro y `find_one()` el primero.',
          'Los filtros son diccionarios. Operadores como `$gt` (mayor que), `$lt` (menor que) o `$in` (dentro de una lista) permiten consultas más ricas.' ],
          code: `alumnos.insert_many([\n    {"nombre": "Ana", "edad": 22, "cursos": ["python"]},\n    {"nombre": "Luis", "edad": 19, "cursos": ["java", "python"]},\n])\n\nfor a in alumnos.find({"edad": {"$gt": 20}}):\n    print(a["nombre"])  # Ana\n\nprint(alumnos.count_documents({"cursos": "python"}))  # 2` },
        { h: 'Actualizar y borrar', p: [
          '`update_one(filtro, cambios)` modifica el primer documento que coincide. Usa `$set` para cambiar campos y `$inc` para sumar a un número.',
          '`delete_one()` y `delete_many()` borran documentos. Revisa bien el filtro: un filtro vacío `{}` afecta a toda la colección.' ],
          code: `alumnos.update_one({"nombre": "Luis"}, {"$set": {"edad": 20}})\nalumnos.update_one({"nombre": "Ana"}, {"$inc": {"edad": 1}})\nalumnos.delete_one({"nombre": "Luis"})` },
        { h: 'Ejemplo real: guardar los pedidos de una tienda', real: true, p: [
          'Los pedidos de una tienda online encajan bien en documentos: cada uno lleva sus productos dentro, sin necesidad de varias tablas.' ],
          code: `from datetime import datetime\n\npedidos = db["pedidos"]\npedidos.insert_one({\n    "cliente": "ana@example.com",\n    "fecha": datetime.now(),\n    "productos": [\n        {"nombre": "Libro", "precio": 12.5, "cantidad": 1},\n        {"nombre": "Taza", "precio": 6.0, "cantidad": 2},\n    ],\n    "estado": "pendiente",\n})\n\npendientes = pedidos.count_documents({"estado": "pendiente"})\nprint("Pedidos pendientes:", pendientes)` },
      ],
      x: [
        mc('¿Qué tipo de base de datos es MongoDB?', ['NoSQL orientada a documentos', 'Relacional con tablas SQL', 'Una hoja de cálculo', 'Un archivo CSV'], 'Guarda documentos flexibles en lugar de filas con columnas fijas.'),
        mc('¿Qué librería conecta Python con MongoDB?', ['pymongo', 'mongopy', 'sqlite3', 'pandas'], '`pymongo` es el controlador oficial.'),
        fill(`db.usuarios.___({"nombre": "Luis"})  # añade un documento`, ['insert_one', 'add', 'push', 'create'], '`insert_one` inserta un documento; `insert_many`, varios.'),
        mc('¿Qué busca el filtro `{"edad": {"$gt": 30}}`?', ['Documentos con edad mayor que 30', 'Edad igual a 30', 'Edad menor que 30', 'Edades entre 0 y 30'], '`$gt` significa "greater than". Otros operadores: `$lt`, `$gte` y `$ne`.'),
        mc('¿Qué devuelve `coleccion.find()` sin filtro?', ['Un cursor con todos los documentos', 'Solo el primer documento', 'El número de documentos', 'None'], 'Para obtener uno solo existe `find_one()`.'),
        fill(`db.usuarios.update_one(\n    {"nombre": "Luis"},\n    {___: {"edad": 31}}\n)`, ['"$set"', '"$update"', '"$put"', '"set"'], '`$set` cambia solo los campos indicados.'),
        typ('Completa el operador que suma 1 al campo visitas', `paginas.update_one({"url": "/"}, {"___": {"visitas": 1}})`, '$inc', '`$inc` incrementa un campo numérico en la cantidad indicada.'),
        mc('Con los documentos `{"nombre": "Ana", "cursos": ["python"]}` y `{"nombre": "Luis", "cursos": ["java", "python"]}`, ¿qué devuelve `count_documents({"cursos": "python"})`?', ['2', '1', '0', 'Un error, porque cursos es una lista'], 'Si el campo es una lista, MongoDB busca dentro de ella: los dos documentos contienen "python".'),
      ],
    },
    // ───────────── Día 28 ─────────────
    {
      t: 'APIs',
      d: 'HTTP, métodos, códigos de estado y consumir APIs con requests.',
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
    // ───────────── Día 29 ─────────────
    {
      t: 'Construir una API',
      d: 'Una API REST con Flask: rutas, jsonify, códigos de estado y validación.',
      guide: [
        { h: 'De consumir a crear', p: [
          'Ahora te toca estar al otro lado: crear una API que otros programas puedan usar. Con Flask, cada ruta devuelve JSON con `jsonify()`.',
          'Una API REST organiza las URL por recursos (`/tareas`, `/tareas/3`) y usa el método HTTP para indicar la acción.' ] },
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
        fill(`from flask import Flask, ___\n\napp = Flask(__name__)\n\n@app.route("/api")\ndef api():\n    return jsonify({"ok": True})`, ['jsonify', 'json', 'dumps', 'JSON'], '`jsonify` crea una respuesta HTTP con contenido JSON.'),
        mc('¿Cómo lees el JSON enviado en una petición POST con Flask?', ['request.get_json()', 'request.body', 'request.json_read()', 'input()'], 'Devuelve el cuerpo ya convertido en diccionario.'),
        mc('En `return jsonify(tarea), 201`, ¿qué es el 201?', ['El código de estado HTTP de la respuesta', 'El id de la tarea', 'El puerto del servidor', 'El tamaño de la respuesta'], '201 indica que el recurso se creó.'),
        mc('¿Qué método y ruta siguen la convención REST para borrar la tarea 5?', ['DELETE /tareas/5', 'GET /borrar/5', 'POST /tareas/delete', 'PUT /tareas'], 'La URL nombra el recurso y el método indica la acción.'),
        fill(`@app.___("/tareas")\ndef crear():\n    datos = request.get_json()\n    ...`, ['post', 'get', 'put', 'delete'], 'Desde Flask 2.0, `@app.post` es un atajo de `@app.route(..., methods=["POST"])`, el método para crear recursos.'),
        mc('¿Qué ventaja ofrece FastAPI?', ['Valida datos con tipos y genera documentación automática', 'No necesita Python', 'Sustituye a la base de datos', 'Solo funciona con HTML'], 'Su documentación interactiva está en `/docs`.'),
        mc('Llega un POST sin el campo obligatorio "titulo". ¿Qué deberías responder?', ['400 con un mensaje que explique qué falta', '500 Error del servidor', '200 con un objeto vacío', '404 No encontrado'], '400 Bad Request indica que la petición del cliente es incorrecta, y el mensaje le ayuda a corregirla.'),
        out(`from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.get("/tareas/<int:id>")\ndef ver(id):\n    if id > 3:\n        return jsonify(error="No existe"), 404\n    return jsonify(id=id)\n\nwith app.test_client() as c:\n    r = c.get("/tareas/7")\n    print(r.status_code, r.get_json()["error"])`, ['404 No existe', '200 No existe', '404 None', '500 Error'], '7 es mayor que 3, así que la ruta devuelve el JSON de error con el código 404, y `get_json()` lo convierte en diccionario.'),
      ],
    },
    // ───────────── Día 30 ─────────────
    {
      t: 'Conclusiones',
      d: 'Repaso final del reto, buenas prácticas y cómo seguir aprendiendo.',
      guide: [
        { h: 'Lo que has aprendido', p: [
          'En 30 días has pasado de `print("Hola, mundo")` a analizar datos con pandas, consumir APIs y crear tu propio servicio web. Has visto tipos, colecciones, funciones, clases, excepciones, archivos, expresiones regulares y el ecosistema de paquetes.',
          'Lo más importante no es recordar cada función, sino saber dividir un problema en partes y buscar en la documentación lo que necesitas.' ] },
        { h: 'Código pythónico', p: [
          'El Zen de Python (`import this`) resume el estilo del lenguaje: lo bonito es mejor que lo feo, lo explícito mejor que lo implícito y lo simple mejor que lo complejo.',
          'Sigue la guía de estilo PEP 8 y usa herramientas como `ruff` o `black` para formatear el código automáticamente.' ],
          code: `nombres = ["Ana", "Luis", "Eva", "Carla"]\n\n# Menos pythónico\nresultado = []\nfor i in range(len(nombres)):\n    if len(nombres[i]) > 3:\n        resultado.append(nombres[i].upper())\n\n# Pythónico\nresultado = [n.upper() for n in nombres if len(n) > 3]\nprint(resultado)  # ['LUIS', 'CARLA']` },
        { h: 'Errores que conviene evitar', p: [
          'Usar listas o diccionarios como valor por defecto de un parámetro: se comparten entre llamadas. Usa `None` y crea el objeto dentro de la función.',
          'Capturar excepciones con un `except:` vacío, que esconde errores reales. Captura siempre el tipo concreto.' ],
          code: `# Mal: la lista se comparte entre llamadas\ndef agregar(x, lista=[]):\n    lista.append(x)\n    return lista\n\n# Bien\ndef agregar(x, lista=None):\n    if lista is None:\n        lista = []\n    lista.append(x)\n    return lista` },
        { h: 'Cómo seguir', p: [
          'Elige un área y construye proyectos: análisis de datos con pandas y Jupyter, desarrollo web con Django o FastAPI, automatización de tareas o inteligencia artificial con scikit-learn y PyTorch.',
          'Lee código de proyectos de código abierto, publica el tuyo en GitHub y pide revisiones. Programar se aprende programando.' ] },
        { h: 'Ejemplo real: tu proyecto final', real: true, p: [
          'Un proyecto que une todo el curso: descarga datos de una API, los guarda en un CSV y genera un resumen con pandas. Amplíalo a tu gusto con un gráfico, una web con Flask o un aviso por email.' ],
          code: `import csv\nimport requests\nimport pandas as pd\n\ndef descargar_clima(lat, lon):\n    r = requests.get("https://api.open-meteo.com/v1/forecast",\n                     params={"latitude": lat, "longitude": lon,\n                             "daily": "temperature_2m_max", "timezone": "auto"},\n                     timeout=10)\n    r.raise_for_status()\n    return r.json()["daily"]\n\ndatos = descargar_clima(40.42, -3.70)\nwith open("clima.csv", "w", newline="", encoding="utf-8") as f:\n    w = csv.writer(f)\n    w.writerow(["fecha", "maxima"])\n    w.writerows(zip(datos["time"], datos["temperature_2m_max"]))\n\ndf = pd.read_csv("clima.csv")\nprint(df.describe())` },
      ],
      x: [
        out(`def contar():\n    yield 1\n    yield 2\n\nprint(list(contar()))`, ['[1, 2]', '1', '[1]', 'Error'], 'Una función con `yield` es un generador; `list()` recoge todos sus valores.'),
        out(`print(sum(n for n in range(5) if n % 2))`, ['4', '10', '6', '2'], 'Suma los impares de 0 a 4: 1 + 3 = 4.'),
        fill(`print(", ".___(["a", "b", "c"]))  # a, b, c`, ['join', 'split', 'concat', 'append'], '`join` une los elementos usando el texto como separador.'),
        out(`def f(x, lista=[]):\n    lista.append(x)\n    return lista\n\nf(1)\nprint(f(2))`, ['[1, 2]', '[2]', '[1]', 'Error'], 'El valor por defecto mutable se crea una sola vez y se comparte entre llamadas. Usa `None` como defecto.'),
        out(`x = [1, 2, 3]\nprint(x[::-1], x)`, ['[3, 2, 1] [1, 2, 3]', '[3, 2, 1] [3, 2, 1]', '[1, 2, 3] [3, 2, 1]', 'Error'], 'El slicing crea una lista nueva; la original no cambia.'),
        out(`print(bool([]), bool([0]))`, ['False True', 'True True', 'False False', 'True False'], 'Una lista vacía es falsa; una lista con cualquier elemento, aunque sea 0, es verdadera.'),
        mc('¿Qué guía describe el estilo recomendado para escribir código Python?', ['PEP 8', 'PEP 20', 'ISO 9001', 'RFC 2616'], 'PEP 8 es la guía de estilo; PEP 20 es el Zen de Python que muestra `import this`.'),
        out(`def f(n, memo={}):\n    if n in memo:\n        return memo[n]\n    memo[n] = n if n < 2 else f(n - 1) + f(n - 2)\n    return memo[n]\n\nprint(f(10), len(f.__defaults__[0]))`, ['55 11', '55 10', '89 11', 'Error'], 'Es Fibonacci con memoria: f(10) vale 55. El diccionario por defecto se comparte entre llamadas y acaba con las claves 0 a 10, es decir, 11 entradas. Aquí ese comportamiento se usa a propósito como caché.'),
      ],
    },
  ],
}))(Sintaxis);
