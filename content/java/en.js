/* Java · English */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('java', 'en', {
  tag: 'Object-oriented and strongly typed, from Android to servers.',
  days: [
    // ───────────── Day 1 ─────────────
    {
      id: 'java-intro',
      t: 'Introduction',
      d: 'The JVM, javac, the main method and System.out.println.',
      guide: [
        { h: 'What is Java?', p: [
          'Java is a programming language created by James Gosling at Sun Microsystems and released in 1995. Today Oracle maintains it and a new version comes out every six months.',
          'Its motto is "write once, run anywhere": the same program works on Windows, macOS or Linux without changing a line.',
          'Banks use it for their payment systems, Android for its apps, companies like Netflix and LinkedIn on their servers, and Minecraft in its Java edition.' ] },
        { h: 'Compiling and running: javac and the JVM', p: [
          'Java is not run directly. First `javac` translates your `.java` file into bytecode, a `.class` file. Then the JVM (Java Virtual Machine) reads that bytecode and runs it on your machine.',
          'To program you need the JDK (Java Development Kit), which includes `javac`, the JVM and the standard libraries. Download it from adoptium.net or oracle.com.',
          'Since Java 11 you can skip the compile step for single-file programs: `java Hello.java` compiles and runs at once.' ],
          code: `// In the terminal:\n// javac Hello.java   -> creates Hello.class (bytecode)\n// java Hello         -> the JVM runs it\n// java Hello.java    -> compiles and runs in one step (Java 11+)` },
        { h: 'Your first program', p: [
          'All Java code lives inside a class. The file must have the same name as the public class: the class `Hello` goes in `Hello.java`.',
          'Execution always starts in the method `public static void main(String[] args)`. If you change that signature, the JVM cannot find where to start.',
          'Each statement ends with `;` and blocks go inside braces `{ }`. Java is case-sensitive: `system.out` does not work, it has to be `System.out`.' ],
          code: `public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, world");\n    }\n}` },
        { h: 'print, println and comments', p: [
          '`System.out.println()` writes and adds a line break; `System.out.print()` writes without one. With `+` you join text and values: `"Total: " + 5` gives `Total: 5`.',
          'Comments explain the code and Java ignores them: `//` for one line, `/* ... */` for several and `/** ... */` for documentation (Javadoc).' ],
          code: `// One-line comment\n/* Comment\n   over several lines */\nSystem.out.print("One ");\nSystem.out.print("Two");\nSystem.out.println();      // just a line break\nSystem.out.println("Three");\n// Output:\n// One Two\n// Three` },
        { h: 'Real example: a café receipt', real: true, p: [
          'With what you already know you can print a café receipt. The calculations in parentheses are done before they are joined to the text.' ],
          code: `public class Receipt {\n    public static void main(String[] args) {\n        System.out.println("Sunny Café");\n        System.out.println("2 x Coffee: " + 2 * 1.5);\n        System.out.println("1 x Toast: " + 2.25);\n        System.out.println("Total: " + (2 * 1.5 + 2.25) + " €");\n    }\n}\n// Sunny Café\n// 2 x Coffee: 3.0\n// 1 x Toast: 2.25\n// Total: 5.25 €` },
      ],
      x: [
        mc('Which statement prints text and moves to a new line in Java?', ['System.out.println()', 'console.log()', 'print()', 'echo()'], '`System.out.println()` writes to the console and adds a line break. `console.log()` is JavaScript.'),
        mc('Which symbol ends each statement in Java?', [';', '.', ':', 'A line break'], 'Java requires `;` at the end of each statement; without it, the code does not compile.'),
        mc('What runs the bytecode in a .class file?', ['The JVM (Java Virtual Machine)', 'The javac compiler', 'The browser', 'The operating system directly'], '`javac` creates the bytecode and the JVM runs it on each system.'),
        mc('Which command compiles the file Hello.java?', ['javac Hello.java', 'java Hello.class', 'run Hello.java', 'compile Hello'], '`javac` generates `Hello.class`; then `java Hello` runs it.'),
        ord('Write the statement that prints Hello and moves to a new line', ['System', '.', 'out', '.', 'println', '(', '"Hello"', ')', ';'], ['console', 'log'], '`System.out.println` writes the text and adds a line break. Do not forget the final `;`.'),
        out(`System.out.print("A");\nSystem.out.println("B");\nSystem.out.print("C");`, ['AB\nC', 'A\nB\nC', 'ABC', 'A\nBC'], '`print` does not break the line, so A and B stay together; `println` breaks after the B.'),
        typ('Complete the line to print the price and move to a new line', `double price = 9.99;\nSystem.out.___(price);`, 'println', '`println` prints and adds a line break; `print` does not.'),
        out(`System.out.println("Total: " + 2 + 3);\nSystem.out.println(2 + 3 + " total");`, ['Total: 23\n5 total', 'Total: 5\n5 total', 'Total: 23\n23 total', 'Total: 5\n23 total'], 'Java evaluates from left to right: in the first line the text comes first and everything is concatenated; in the second, 2 + 3 is added before reaching the text.'),
      ],
    },
    // ───────────── Day 2 ─────────────
    {
      id: 'java-vars',
      t: 'Variables and types',
      d: 'Primitive types, String, var, final and conversions.',
      guide: [
        { h: 'Declaring a variable', p: [
          'A variable is a name that holds a value. In Java you write the type first and then the name: `int age = 20;`.',
          'Java is statically typed: the type is decided when you write the code and does not change. If you try to store `"hello"` in an `int`, the program does not compile. That way many bugs show up before running.',
          'Names use camelCase (`totalPrice`, `numberOfStudents`), start with a letter and cannot be reserved words such as `class` or `int`.' ],
          code: `int age = 20;\nage = 21;           // the value can change\n// age = "twenty"; // error: an int cannot hold text\nint students;       // declared without a value\nstudents = 30;      // assigned later` },
        { h: 'The 8 primitive types', p: [
          'Integers: `byte`, `short`, `int` (the usual one) and `long` for very large numbers, which carry an `L` at the end.',
          'Decimals: `double` (the usual one) and `float`, which carries an `f` at the end. A single character is a `char` and goes in single quotes. True or false is a `boolean`.',
          'Use `int` and `double` unless you have a reason not to: they are what almost all code expects.' ],
          code: `byte b = 100;                // -128 to 127\nint population = 47_000_000; // the _ only helps reading\nlong distance = 9_460_730_472_580L;\ndouble price = 19.99;\nfloat weight = 72.5f;\nchar initial = 'J';\nboolean active = true;` },
        { h: 'String, var and final', p: [
          '`String` holds text in double quotes. It is not a primitive but a class, which is why it starts with a capital letter.',
          'Since Java 10, `var` infers the type of a local variable from its value: `var city = "London";` is a `String`. The type is still fixed.',
          '`final` creates a constant that cannot be reassigned. By convention it is written in UPPERCASE: `final double VAT = 0.20;`.' ],
          code: `String name = "Ana";\nvar city = "London";     // the compiler infers String\nvar visits = 0;          // infers int\nfinal double VAT = 0.20;\n// VAT = 0.10;           // error: VAT is final` },
        { h: 'Converting between types', p: [
          'From a small type to a large one the conversion is automatic: an `int` fits in a `double`. The other way round you must ask for it with a cast, `(int) 9.99`, and the decimals are lost (it does not round).',
          'To turn text into a number use `Integer.parseInt("42")` or `Double.parseDouble("3.5")`. If the text is not a number, a `NumberFormatException` is thrown.' ],
          code: `int whole = 7;\ndouble d = whole;           // 7.0, automatic\nint truncated = (int) 9.99; // 9\nint n = Integer.parseInt("42");\ndouble x = Double.parseDouble("3.5");\nString s = String.valueOf(n);  // "42"` },
        { h: 'Real example: a product card', real: true, p: [
          'An online shop stores each product’s name, price, units in stock and whether it is available. Each piece of data has its natural type.',
          'To show the price with VAT rounded to 2 decimals, we multiply by 100, round with `Math.round` and divide by `100.0`.' ],
          code: `String name = "Bluetooth headphones";\ndouble price = 39.90;\nint stock = 12;\nboolean available = stock > 0;\nfinal double VAT = 0.21;\n\ndouble withVat = Math.round(price * (1 + VAT) * 100) / 100.0;\nSystem.out.println(name + ": " + withVat + " €");  // Bluetooth headphones: 48.28 €\nSystem.out.println("Available: " + available);     // Available: true` },
      ],
      x: [
        fill(`___ age = 20;`, ['int', 'integer', 'Int', 'num'], '`int` is the primitive type for whole numbers. Java is case-sensitive, so `Int` does not exist.'),
        mc('Which primitive type holds `true` or `false`?', ['boolean', 'bool', 'bit', 'logic'], 'In Java the primitive logical type is `boolean`; `bool` is from C++ and C#.'),
        mc('Which of these is a valid `char` value?', ["'J'", '"J"', "'Java'", 'J'], 'A `char` is a single character in single quotes. With double quotes it would be a `String`.'),
        out(`int a = 7;\nint b = 2;\nSystem.out.println(a / b);`, ['3', '3.5', '4', '3.0'], 'Dividing two `int` values gives another `int`: the decimal part is dropped.'),
        out(`double price = 9.99;\nint n = (int) price;\nSystem.out.println(n);`, ['9', '10', '9.99', '9.0'], 'The cast to `int` cuts the decimals; it does not round.'),
        out(`String s = "Java";\nSystem.out.println(s + 1 + 2);`, ['Java12', 'Java3', '3Java', 'Error'], 'It is evaluated left to right: "Java" + 1 is "Java1", and + 2 gives "Java12".'),
        mc('What happens with this code?', ['It does not compile: a final variable cannot be reassigned', 'MAX becomes 20', 'MAX stays 10 without warning', 'It only fails when run'], 'The compiler stops you from reassigning a `final` variable.', `final int MAX = 10;\nMAX = 20;`),
        out(`char c = 'A';\nint n = c + 2;\nchar d = (char) n;\nSystem.out.println(n + " " + d);`, ['67 C', 'C 67', 'A2 C', '67 67'], 'A `char` is a number: A is 65, so n is 67. Converting it back to `char` gives C.'),
      ],
    },
    // ───────────── Day 3 ─────────────
    {
      id: 'java-operators',
      t: 'Operators',
      d: 'Arithmetic, comparison, logical, increments and precedence.',
      guide: [
        { h: 'Arithmetic operators', p: [
          'Java has `+`, `-`, `*`, `/` and `%`. The `%` operator gives the remainder of a division and tells you whether a number is even (`n % 2 == 0`) or helps repeat cycles.',
          'Watch out for integer division: `7 / 2` gives `3`, because both operands are `int`. If one is a `double`, the result is too: `7 / 2.0` gives `3.5`.',
          'Dividing an integer by zero throws `ArithmeticException`; with `double` the result is `Infinity`.' ],
          code: `int a = 7, b = 2;\nSystem.out.println(a + b);    // 9\nSystem.out.println(a / b);    // 3\nSystem.out.println(a % b);    // 1\nSystem.out.println(a / 2.0);  // 3.5` },
        { h: 'Compound assignment and increments', p: [
          '`x += 3` is the same as `x = x + 3`. There are also `-=`, `*=`, `/=` and `%=`.',
          '`x++` adds 1 and `x--` subtracts 1. On a line of their own it does not matter whether they go before or after, but inside an expression it does: `x++` uses the old value and then adds; `++x` adds first and uses the new one.' ],
          code: `int points = 10;\npoints += 5;   // 15\npoints *= 2;   // 30\nint i = 5;\nint a = i++;   // a = 5, i = 6\nint b = ++i;   // i = 7, b = 7` },
        { h: 'Comparison and logic', p: [
          'The comparison operators `==`, `!=`, `>`, `<`, `>=` and `<=` return a `boolean`. Do not confuse `==` (compare) with `=` (assign).',
          'The logical ones are `&&` (and), `||` (or) and `!` (not). They short-circuit: if the left side already decides the result, the right side is not run. So `n != 0 && 10 / n > 1` never divides by zero.' ],
          code: `int age = 25;\nboolean adult = age >= 18;               // true\nboolean young = age >= 18 && age < 30;   // true\nboolean weekend = false;\nSystem.out.println(!weekend || adult);   // true` },
        { h: 'Precedence, casts and Math', p: [
          'As in maths, `*`, `/` and `%` come before `+` and `-`. When in doubt, use parentheses: they also make the code easier to read.',
          'The cast `(double) a / b` converts `a` before dividing. The `Math` class has ready-made functions: `Math.pow`, `Math.sqrt`, `Math.max`, `Math.abs` and `Math.round`.' ],
          code: `System.out.println(2 + 3 * 4);        // 14\nSystem.out.println((2 + 3) * 4);      // 20\nSystem.out.println((double) 7 / 2);   // 3.5\nSystem.out.println(Math.pow(2, 10));  // 1024.0\nSystem.out.println(Math.sqrt(81));    // 9.0\nSystem.out.println(Math.round(4.6));  // 5` },
        { h: 'Real example: free shipping and delivery time', real: true, p: [
          'A shop gives free shipping if the order is over €50 or if the customer is a member. The courier also needs the route time in hours and minutes.',
          'With `/` and `%` between integers we turn minutes into hours and minutes without decimals.' ],
          code: `double subtotal = 47.50;\nboolean isMember = true;\nboolean freeShipping = subtotal >= 50 || isMember;\n\nint minutes = 135;\nSystem.out.println("Free shipping: " + freeShipping);              // Free shipping: true\nSystem.out.println(minutes / 60 + " h " + minutes % 60 + " min"); // 2 h 15 min` },
      ],
      x: [
        out(`System.out.println(10 % 4);`, ['2', '2.5', '0', '4'], '`%` gives the remainder: 4 goes into 10 twice with 2 left over.'),
        out(`int x = 5;\nx += 3;\nSystem.out.println(x);`, ['8', '5', '53', '3'], '`x += 3` is the same as `x = x + 3`.'),
        mc('Which operator means logical "or" in Java?', ['||', '&&', '!', 'or'], '`||` is OR, `&&` is AND and `!` is NOT. Java does not use the word `or`.'),
        out(`System.out.println(2 + 3 * 4);`, ['14', '20', '24', '9'], 'Multiplication comes first: 3 × 4 = 12 and then 2 + 12 = 14.'),
        out(`System.out.println((double) 7 / 2);`, ['3.5', '3', '3.0', '4'], 'The cast turns the 7 into 7.0 before dividing, so the division is decimal.'),
        typ('Add 1 to the visits with the increment operator', `int visits = 41;\nvisits___;`, ['++', '+= 1', '+=1'], '`visits++` adds 1 to the variable; it is the short form of `visits = visits + 1`.'),
        out(`int c = 0;\nSystem.out.println(c != 0 && 10 / c > 1);`, ['false', 'true', 'ArithmeticException', '0'], 'Short circuit: `c != 0` is false, so `&&` never evaluates the division by zero.'),
        out(`int i = 5;\nint j = i++ + ++i;\nSystem.out.println(j + " " + i);`, ['12 7', '11 7', '12 6', '10 7'], '`i++` uses 5 and leaves `i` at 6; `++i` raises it to 7 and uses 7. The sum is 12 and `i` ends at 7.'),
      ],
    },
    // ───────────── Day 4 ─────────────
    {
      id: 'java-conditionals',
      t: 'Conditionals',
      d: 'if, else if, else, the ternary operator and switch.',
      guide: [
        { h: 'if and else', p: [
          '`if (condition) { ... }` runs the block only if the condition is `true`. The condition has to be a `boolean`: in Java a number is not allowed.',
          'A classic mistake is writing `if (x = 5)`: with an `int` it does not compile, because `=` assigns instead of comparing. Use `==`. And always use braces, even if the block has one line.' ],
          code: `int age = 16;\nif (age >= 18) {\n    System.out.println("You can vote");\n} else {\n    System.out.println("You cannot vote yet");\n}\n// You cannot vote yet` },
        { h: 'else if: several options', p: [
          'With `else if` you chain conditions. Java checks them in order and runs only the first one that is true; the rest are skipped.',
          'That is why order matters: put the strictest conditions first. If you checked `mark >= 5` before `mark >= 9`, a 10 would come out as "Pass".' ],
          code: `double mark = 7.5;\nif (mark >= 9) {\n    System.out.println("Excellent");\n} else if (mark >= 7) {\n    System.out.println("Very good");\n} else if (mark >= 5) {\n    System.out.println("Pass");\n} else {\n    System.out.println("Fail");\n}\n// Very good` },
        { h: 'The ternary operator', p: [
          '`condition ? valueIfTrue : valueIfFalse` returns a value in a single line. It is ideal for choosing between two texts or two numbers.',
          'Do not chain it many times: three ternaries in a row are hard to read, and an `if` is better there.' ],
          code: `int stock = 0;\nString status = stock > 0 ? "Available" : "Sold out";\nSystem.out.println(status);  // Sold out` },
        { h: 'The classic switch', p: [
          '`switch` compares a value (integer, `char`, `String` or enum) with several `case` labels. `default` catches any other case.',
          'In the classic switch, if you forget `break` execution "falls through" to the next case. It is sometimes used on purpose to group cases, but it is almost always a bug. On day 25 you will see the modern switch with arrows, which does not have this problem.' ],
          code: `String day = "saturday";\nswitch (day) {\n    case "saturday":\n    case "sunday":\n        System.out.println("Weekend");\n        break;\n    default:\n        System.out.println("Weekday");\n}\n// Weekend` },
        { h: 'Real example: the cost of shipping', real: true, p: [
          'A shop works out shipping by weight bands and adds a surcharge for the islands. Notice that the text is compared with `equals`, never with `==`.' ],
          code: `double kg = 3.2;\nString zone = "mainland";\ndouble cost;\nif (kg <= 1) {\n    cost = 4.50;\n} else if (kg <= 5) {\n    cost = 6.90;\n} else {\n    cost = 6.90 + (kg - 5) * 1.20;\n}\nif (zone.equals("islands")) {\n    cost += 8;\n}\nSystem.out.println("Shipping: " + cost + " €");  // Shipping: 6.9 €` },
      ],
      x: [
        fill(`if (age >= 18) {\n    System.out.println("adult");\n} ___ {\n    System.out.println("minor");\n}`, ['else', 'elif', 'otherwise', 'default'], 'The alternative block is written with `else`. `elif` is Python.'),
        out(`int x = 10;\nif (x > 5 && x < 20) {\n    System.out.println("range");\n} else {\n    System.out.println("out");\n}`, ['range', 'out', 'range\nout'], '10 meets both conditions joined with `&&`, and only one block runs.'),
        mc('If `x` is an `int`, what happens with `if (x = 5)`?', ['It does not compile: = assigns and the condition must be boolean', 'It compares x with 5', 'It is always true', 'It is always false'], 'To compare you use `==`. Java requires the condition to be a `boolean`.'),
        out(`int x = 5;\nString r = (x % 2 == 0) ? "even" : "odd";\nSystem.out.println(r);`, ['odd', 'even', 'true'], 'The ternary picks "odd" because 5 % 2 is 1, not 0.'),
        ord('Write the if header: "if age is greater than or equal to 18"', ['if', '(', 'age', '>=', '18', ')'], ['=>', 'then'], 'The condition goes in parentheses and the operator is `>=`. Java does not use `then`.'),
        out(`int mark = 75;\nif (mark >= 90) System.out.println("A");\nelse if (mark >= 70) System.out.println("B");\nelse System.out.println("C");`, ['B', 'A', 'C', 'B\nC'], '75 does not reach 90 but does reach 70, and after the first match the rest are skipped.'),
        out(`int day = 2;\nswitch (day) {\n    case 1: System.out.print("M");\n    case 2: System.out.print("T");\n    case 3: System.out.print("W");\n        break;\n    default: System.out.print("?");\n}`, ['TW', 'T', 'TW?', 'MTW'], 'It enters `case 2` and, with no `break`, carries on into `case 3` until it finds one.'),
        out(`int age = 70;\nboolean student = false;\ndouble price = 10;\nif (age < 12 || age >= 65) {\n    price = price / 2;\n} else if (student) {\n    price = price * 0.8;\n}\nString type = price < 10 ? "reduced" : "regular";\nSystem.out.println(type + " " + price);`, ['reduced 5.0', 'regular 10.0', 'reduced 8.0', 'reduced 5'], '70 meets `age >= 65`, so the price drops to 5.0 and the else if is not even checked. Since it is a `double`, it prints with a decimal.'),
      ],
    },
    // ───────────── Day 5 ─────────────
    {
      id: 'java-loops',
      t: 'Loops',
      d: 'for, for-each, while, do-while, break and continue.',
      guide: [
        { h: 'The for loop', p: [
          '`for (int i = 0; i < n; i++)` has three parts: the start, the condition checked before each pass and the step run at the end of each pass.',
          'Use it when you know how many times you want to repeat. The most typical mistake is "off by one": with `i <= array.length` you go past the end of the array.' ],
          code: `for (int i = 1; i <= 3; i++) {\n    System.out.println("Lap " + i);\n}\n// Lap 1\n// Lap 2\n// Lap 3\n\nfor (int i = 10; i > 0; i -= 5) {\n    System.out.println(i);   // 10 and 5\n}` },
        { h: 'The for-each', p: [
          'This is the first time an array appears, several values between curly braces with a type like `String[]`. For now it is enough to know that the for-each goes through them one by one; arrays and collections come from day 7.',
          '`for (String name : names)` goes through every item of an array or a collection without handling indexes. It is shorter and avoids going out of range.',
          'Use it whenever you do not need the position. If you need it, or you are going to modify the array by index, use the classic `for`.' ],
          code: `String[] guests = {"Ana", "Luis", "Eva"};\nfor (String name : guests) {\n    System.out.println("Hello, " + name);\n}` },
        { h: 'while and do-while', p: [
          '`while (condition)` repeats as long as the condition holds. Use it when you do not know how many passes there will be, for example when reading data until it runs out.',
          '`do { ... } while (condition);` checks at the end, so it runs at least once: handy for menus shown before asking.',
          'If the condition never becomes false you have an infinite loop. Make sure something inside the loop moves it towards its end.' ],
          code: `int count = 3;\nwhile (count > 0) {\n    System.out.println(count);\n    count--;\n}\nSystem.out.println("Lift-off!");` },
        { h: 'break, continue and nested loops', p: [
          '`break` leaves the loop right away; `continue` skips the rest of the current pass and moves to the next one.',
          'A loop inside another goes through combinations: rows and columns, each product with each shop. The two counters need different names (`i` and `j`).' ],
          code: `for (int i = 1; i <= 3; i++) {\n    String row = "";\n    for (int j = 1; j <= 3; j++) {\n        row += i * j + " ";\n    }\n    System.out.println(row.trim());\n}\n// 1 2 3\n// 2 4 6\n// 3 6 9` },
        { h: 'Real example: how long savings take to grow', real: true, p: [
          'You have €1000 in an account paying 5 % a year and want to know how many years it takes to reach €1200. You do not know how many passes there will be, so you use `while`.' ],
          code: `double savings = 1000;\nint years = 0;\nwhile (savings < 1200) {\n    savings = savings * 1.05;\n    years++;\n}\nSystem.out.println("Years needed: " + years);  // Years needed: 4` },
      ],
      x: [
        fill(`___ (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}`, ['for', 'foreach', 'loop', 'while'], 'The loop with a start, a condition and a step is `for`.'),
        out(`for (int i = 1; i <= 3; i++) {\n    System.out.println(i * 2);\n}`, ['2\n4\n6', '1\n2\n3', '2\n4\n6\n8', '0\n2\n4'], '`i` is 1, 2 and 3; each time the double is printed on its own line.'),
        out(`int n = 3;\nwhile (n > 0) {\n    System.out.print(n);\n    n--;\n}`, ['321', '3210', '123', '33'], '3, 2 and 1 are printed. When `n` reaches 0 the condition fails and the loop ends.'),
        out(`int[] nums = {4, 8, 15};\nint sum = 0;\nfor (int n : nums) {\n    sum += n;\n}\nSystem.out.println(sum);`, ['27', '3', '4815', '15'], 'The for-each goes through each number and adds them up: 4 + 8 + 15 = 27.'),
        out(`int i = 0;\ndo {\n    i++;\n} while (i < 0);\nSystem.out.println(i);`, ['1', '0', '-1', 'Infinite loop'], '`do-while` runs the block once before checking the condition.'),
        out(`for (int i = 0; i < 5; i++) {\n    if (i == 3) break;\n    System.out.print(i);\n}`, ['012', '0123', '01234', '3'], 'On reaching 3, `break` leaves the loop before printing.'),
        typ('Skip the negative numbers and carry on with the next one', `for (int n : nums) {\n    if (n < 0) ___;\n    sum += n;\n}`, 'continue', '`continue` ends the current pass and moves to the next item; `break` would leave the loop.'),
        out(`int total = 0;\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (j == i) continue;\n        total += i * j;\n    }\n}\nSystem.out.println(total);`, ['22', '36', '14', '18'], 'All products i × j are added except when i and j are equal: 36 in total minus 1 + 4 + 9 = 22.'),
      ],
    },
    // ───────────── Day 6 ─────────────
    {
      id: 'java-strings',
      t: 'Strings',
      d: 'length, charAt, substring, equals, split and StringBuilder.',
      guide: [
        { h: 'What is a String', p: [
          '`String` holds text in double quotes. It is a class, so it has methods you call with a dot: `name.length()`.',
          'Strings are immutable: no method changes the original text, they all return a new one. If you do not store the result, it is lost.',
          'Character indexes start at 0: in `"Java"`, the `J` is at position 0 and the final `a` at 3.' ],
          code: `String s = "hello";\ns.toUpperCase();          // returns "HELLO", but it is not stored\nSystem.out.println(s);    // hello\ns = s.toUpperCase();      // now it is\nSystem.out.println(s);    // HELLO` },
        { h: 'Essential methods', p: [
          '`length()` counts characters, `charAt(i)` returns the one at position `i` and `indexOf()` finds where something appears (it returns -1 if it is not there).',
          '`substring(start, end)` cuts: it includes `start` and excludes `end`. `trim()` removes spaces at both ends; `replace()`, `contains()`, `startsWith()` and `endsWith()` do what their names say.' ],
          code: `String s = "Hola Java";\nSystem.out.println(s.length());          // 9\nSystem.out.println(s.charAt(0));         // H\nSystem.out.println(s.indexOf("Java"));   // 5\nSystem.out.println(s.substring(0, 4));   // Hola\nSystem.out.println(s.replace("a", "4")); // Hol4 J4v4\nSystem.out.println(s.contains("Ja"));    // true` },
        { h: 'Comparing text: equals, not ==', p: [
          '`==` checks whether two variables point to the same object in memory, not whether the text is equal. To compare the content always use `equals()`.',
          '`equalsIgnoreCase()` ignores case, handy for comparing user answers. `compareTo()` is used to sort alphabetically: it returns a negative number, zero or a positive number.' ],
          code: `String a = "java";\nString b = new String("java");\nSystem.out.println(a == b);                     // false\nSystem.out.println(a.equals(b));                // true\nSystem.out.println("JAVA".equalsIgnoreCase(a)); // true` },
        { h: 'Splitting, joining and StringBuilder', p: [
          '`split(",")` cuts a text into an array of pieces and `String.join(", ", ...)` joins them back. `"ab".repeat(3)` repeats the text.',
          'Concatenating with `+` inside a loop creates a new String on every pass. To build long texts use `StringBuilder`, which can be modified: `append()`, `insert()`, `reverse()` and finally `toString()`.' ],
          code: `String[] parts = "red,green,blue".split(",");\nSystem.out.println(parts[1]);                    // green\nSystem.out.println(String.join(" | ", parts));   // red | green | blue\n\nStringBuilder sb = new StringBuilder();\nsb.append("Hello").append(", ").append("Java");\nSystem.out.println(sb.toString());               // Hello, Java` },
        { h: 'Real example: cleaning an email from a form', real: true, p: [
          'People type their email with spaces and capitals. Before saving it you need to normalise it, and sometimes split the user from the domain.' ],
          code: `String input = "  Ana.Smith@Gmail.COM ";\nString email = input.trim().toLowerCase();\nint at = email.indexOf('@');\nString user = email.substring(0, at);\nString domain = email.substring(at + 1);\n\nSystem.out.println(email);   // ana.smith@gmail.com\nSystem.out.println(user);    // ana.smith\nSystem.out.println(domain);  // gmail.com` },
      ],
      x: [
        out(`String s = "Java";\nSystem.out.println(s.length());`, ['4', '3', '5'], '`length()` returns the number of characters: J, a, v, a.'),
        out(`System.out.println("Hello".charAt(1));`, ['e', 'H', 'l'], 'Indexes start at 0, so 1 is the second letter.'),
        mc('How do you correctly compare the content of two Strings?', ['s1.equals(s2)', 's1 == s2', 's1 === s2', 's1.compare(s2)'], '`==` checks whether they are the same object in memory. `equals()` compares the text.'),
        out(`String s = "programming";\nSystem.out.println(s.substring(0, 3));`, ['pro', 'prog', 'rog', 'ogr'], '`substring(start, end)` includes the start and excludes the end: positions 0, 1 and 2.'),
        out(`String s = "hello";\ns.toUpperCase();\nSystem.out.println(s);`, ['hello', 'HELLO', 'Hello'], 'Strings are immutable: `toUpperCase()` returns another String, which is not stored here.'),
        typ('Remove the spaces at the start and the end', `String input = "  ana@mail.com ";\nString clean = input.___();`, ['trim', 'strip'], '`trim()` (or `strip()`) returns the text without spaces at the ends.'),
        out(`String[] parts = "red,green,blue".split(",");\nSystem.out.println(parts.length + " " + parts[1]);`, ['3 green', '2 green', '3 red', '3 ,green'], '`split(",")` gives 3 pieces and the one at index 1 is "green".'),
        out(`StringBuilder sb = new StringBuilder("ab");\nsb.append("cd").reverse();\nString s = sb.toString().toUpperCase();\nSystem.out.println(s.indexOf("B") + s);`, ['2DCBA', '1DCBA', '2ABCD', 'DCBA2'], '`append` leaves "abcd", `reverse` turns it into "dcba" and in capitals it is "DCBA". The B is at position 2 and the number is concatenated in front.'),
      ],
    },
    // ───────────── Day 7 ─────────────
    {
      id: 'java-arrays',
      t: 'Arrays',
      d: 'Fixed-size arrays, indexes, the Arrays class and matrices.',
      guide: [
        { h: 'What is an array', p: [
          'An array stores several values of the same type under one name. Its size is fixed when you create it and never changes.',
          'You can create it with values, `int[] marks = {7, 9, 5};`, or empty with a size, `new int[5]`. Empty ones are filled with default values: `0` for numbers, `false` for `boolean` and `null` for objects such as `String`.' ],
          code: `int[] marks = {7, 9, 5};\nString[] names = new String[3];     // [null, null, null]\ndouble[] prices = new double[2];    // [0.0, 0.0]\nnames[0] = "Ana";` },
        { h: 'Indexes and length', p: [
          'Indexes go from `0` to `length - 1`. The last item is `a[a.length - 1]`. `length` is a property, without parentheses (unlike `length()` on Strings).',
          'If you use an index out of range, Java throws `ArrayIndexOutOfBoundsException`. It is one of the most common errors at the start, especially with `<=` instead of `<` in loops.' ],
          code: `int[] a = {10, 20, 30};\nSystem.out.println(a.length);          // 3\nSystem.out.println(a[a.length - 1]);   // 30\n// System.out.println(a[3]);           // ArrayIndexOutOfBoundsException` },
        { h: 'Looping over an array', p: [
          'With a classic `for` you have the index; with the for-each (`for (int n : marks)`) you go through the values directly. You will look at them in depth on the loops day.',
          'An array is an object: if you write `int[] b = a;`, `b` and `a` point to the same array. For an independent copy use `a.clone()` or `Arrays.copyOf(a, a.length)`.' ],
          code: `int[] marks = {7, 9, 5};\nfor (int i = 0; i < marks.length; i++) {\n    System.out.println("Mark " + i + ": " + marks[i]);\n}\nint sum = 0;\nfor (int n : marks) {\n    sum += n;\n}\nSystem.out.println(sum);  // 21` },
        { h: 'The Arrays class and matrices', p: [
          'If you print an array directly you will see something like `[I@1b6d3586`, its reference. Use `Arrays.toString()` to see the content. Remember `import java.util.Arrays;`.',
          '`Arrays.sort()` sorts, `Arrays.fill()` fills and `Arrays.copyOf()` copies. A matrix is an array of arrays: `m[row][column]`.' ],
          code: `int[] a = {3, 1, 2};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a));  // [1, 2, 3]\n\nint[][] board = {{1, 2, 3}, {4, 5, 6}};\nSystem.out.println(board[1][2]);          // 6\nSystem.out.println(board.length);         // 2 rows` },
        { h: 'Real example: the week’s temperatures', real: true, p: [
          'A weather app stores the highs for the 7 days of the week and shows the highest one and the average.' ],
          code: `double[] temps = {18.5, 21.0, 19.5, 23.0, 22.5, 24.0, 18.5};\ndouble sum = 0;\ndouble max = temps[0];\nfor (double t : temps) {\n    sum += t;\n    if (t > max) max = t;\n}\nSystem.out.println("Highest: " + max);               // Highest: 24.0\nSystem.out.println("Average: " + sum / temps.length); // Average: 21.0` },
      ],
      x: [
        out(`int[] arr = new int[3];\nSystem.out.println(arr[0]);`, ['0', 'null', '3', 'Error'], '`int` arrays are filled with zeros when created.'),
        out(`int[] arr = {1, 2, 3};\nSystem.out.println(arr.length);`, ['3', '2', '4'], '`length` is the number of items, not the last index.'),
        typ('Print how many names there are', `String[] names = {"Ana", "Bea"};\nSystem.out.println(names.___);`, 'length', 'On arrays, `length` is a property and has no parentheses.'),
        mc('If `arr` has 3 items, what happens when you read `arr[3]`?', ['ArrayIndexOutOfBoundsException is thrown', 'It returns 0', 'It returns null', 'It returns the last item'], 'The valid indexes go from 0 to 2; 3 is out of range.'),
        out(`int[] a = {3, 1, 2};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a));`, ['[1, 2, 3]', '[3, 1, 2]', '123', '[I@1b6d3586'], '`Arrays.toString` gives readable text; printing the array directly would show its reference.'),
        out(`int[][] m = {{1, 2}, {3, 4}};\nSystem.out.println(m[1][0]);`, ['3', '2', '4', '1'], 'Row 1 (the second) and column 0 (the first).'),
        out(`int[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 9;\nSystem.out.println(a[0]);`, ['9', '1', '0'], '`b = a` does not copy the array: both variables point to the same one, so the change is visible from `a`.'),
        out(`int[] v = {4, 7, 1, 9};\nint[] c = Arrays.copyOf(v, 3);\nArrays.sort(c);\nSystem.out.println(c[c.length - 1] + v[3]);`, ['16', '18', '10', '79'], '`copyOf(v, 3)` copies {4, 7, 1}; sorted it becomes {1, 4, 7}. The last one is 7, and 7 + 9 = 16. `v` does not change.'),
      ],
    },
    // ───────────── Day 8 ─────────────
    {
      id: 'java-arraylist',
      t: 'ArrayList',
      d: 'Dynamic lists: add, get, set, remove, size and wrapper classes.',
      guide: [
        { h: 'Why a list', p: [
          'An array has a fixed size. If you do not know how many items you will have (the products in a cart, the messages in a chat), use `ArrayList`, which grows and shrinks by itself.',
          'It is declared with the type of its items in angle brackets: `List<String> names = new ArrayList<>();`. You need `import java.util.ArrayList;` and `import java.util.List;`.',
          'Declaring the variable as `List` (the interface) and creating it as `ArrayList` is the usual practice: that way you can change the implementation without touching the rest of the code.' ] },
        { h: 'Basic methods', p: [
          '`add()` adds to the end (or at a position with `add(i, x)`), `get(i)` reads, `set(i, x)` replaces and `remove()` removes. `size()` tells you how many there are.',
          '`contains()` and `indexOf()` search, `isEmpty()` tells you whether it is empty and `clear()` empties it. Printing a list shows its content: `[a, b, c]`.' ],
          code: `List<String> fruits = new ArrayList<>();\nfruits.add("apple");\nfruits.add("pear");\nfruits.add(0, "kiwi");      // [kiwi, apple, pear]\nfruits.set(1, "mango");     // [kiwi, mango, pear]\nfruits.remove("pear");      // [kiwi, mango]\nSystem.out.println(fruits.get(0));            // kiwi\nSystem.out.println(fruits.size());            // 2\nSystem.out.println(fruits.contains("mango")); // true` },
        { h: 'Wrapper classes and autoboxing', p: [
          'Lists only hold objects, not primitives. That is why `List<int>` does not compile: you use the wrapper class, `List<Integer>`. Each primitive has its own: `Integer`, `Double`, `Boolean`, `Character`...',
          'Java converts automatically between `int` and `Integer` (autoboxing). Careful with `remove`: in a `List<Integer>`, `remove(1)` removes index 1, and `remove(Integer.valueOf(1))` removes the value 1.' ],
          code: `List<Integer> nums = new ArrayList<>(List.of(5, 1, 8));\nnums.remove(1);                   // removes index 1 -> [5, 8]\nnums.remove(Integer.valueOf(8));  // removes the value 8 -> [5]\nSystem.out.println(nums);         // [5]` },
        { h: 'Looping, sorting and immutable lists', p: [
          'Loop over a list with for-each. `Collections.sort(list)` sorts it and `Collections.max(list)` gives the largest item.',
          '`List.of(...)` creates an immutable list: it is quick to write, but `add` or `remove` throw `UnsupportedOperationException`. If you need to modify it, wrap it: `new ArrayList<>(List.of(...))`.' ],
          code: `List<Integer> ages = new ArrayList<>(List.of(34, 19, 27));\nCollections.sort(ages);\nSystem.out.println(ages);                   // [19, 27, 34]\nSystem.out.println(Collections.max(ages));  // 34\nfor (int a : ages) {\n    System.out.print(a + ";");              // 19;27;34;\n}` },
        { h: 'Real example: the shopping list', real: true, p: [
          'A shopping list app adds products, crosses off the ones you bought and puts urgent ones first.' ],
          code: `List<String> shopping = new ArrayList<>();\nshopping.add("milk");\nshopping.add("bread");\nshopping.add("eggs");\nshopping.remove("bread");        // already bought\nshopping.add(0, "coffee");       // urgent, first\nSystem.out.println(shopping);    // [coffee, milk, eggs]\nSystem.out.println(shopping.size() + " things left");  // 3 things left` },
      ],
      x: [
        out(`List<String> list = new ArrayList<>();\nlist.add("a");\nlist.add("b");\nSystem.out.println(list.size());`, ['2', '1', '0'], '`size()` returns how many items are in the list.'),
        typ('Add "Luis" to the end of the list', `List<String> names = new ArrayList<>();\nnames.___("Luis");`, 'add', '`add` inserts an item at the end of the list.'),
        fill(`List<String> cities = new ArrayList<>(List.of("Lima", "Quito"));\nString first = cities.___(0);`, ['get', 'at', 'first', 'index'], '`get(i)` returns the item at position `i`. Square brackets `[0]` only work with arrays.'),
        out(`List<String> l = List.of("x", "y");\nSystem.out.println(l.contains("y"));`, ['true', 'false', '1'], '`contains` tells you whether the item is in the list.'),
        mc('Why does `List<int>` not compile?', ['Generics need object types: you have to use List<Integer>', 'int has not been imported', 'List does not accept numbers', 'You must write List[int]'], '`Integer` is the wrapper class for `int` and Java converts between them automatically.'),
        out(`List<String> l = new ArrayList<>(List.of("a", "b", "c"));\nl.remove(1);\nSystem.out.println(l);`, ['[a, c]', '[b, c]', '[a, b]'], '`remove(1)` removes the item at index 1, the "b".'),
        out(`List<Integer> l = new ArrayList<>();\nl.add(5);\nl.add(0, 9);\nSystem.out.println(l.get(0) + l.get(1));`, ['14', '95', '9', '5'], '`add(0, 9)` inserts 9 at the start: [9, 5]. They are `Integer`, so they are added: 14.'),
        out(`List<Integer> l = new ArrayList<>(List.of(10, 20, 30));\nl.remove(Integer.valueOf(10));\nl.remove(0);\nl.add(5);\nSystem.out.println(l + " " + l.size());`, ['[30, 5] 2', '[20, 5] 2', '[10, 30, 5] 3', '[30, 5] 3'], 'First the value 10 is removed ([20, 30]), then index 0 ([30]) and 5 is added: [30, 5], with 2 items.'),
      ],
    },
    // ───────────── Day 9 ─────────────
    {
      id: 'java-sets',
      t: 'Sets',
      d: 'HashSet, TreeSet, LinkedHashSet and set operations.',
      guide: [
        { h: 'What is a Set', p: [
          'A `Set` is a collection with no duplicates: if you add an item that is already there, nothing happens. It is perfect for tags, unique users or distinct words.',
          'Checking whether something is in a `HashSet` with `contains()` is almost instant even with millions of items; in a list you would have to go through it all.' ],
          code: `Set<String> tags = new HashSet<>();\ntags.add("java");\ntags.add("oop");\ntags.add("java");                         // already there\nSystem.out.println(tags.size());          // 2\nSystem.out.println(tags.contains("oop")); // true` },
        { h: 'Three implementations', p: [
          '`HashSet` is the fastest, but it guarantees no order when you loop over it.',
          '`LinkedHashSet` remembers insertion order and `TreeSet` keeps the items sorted (numbers from smallest to largest, text alphabetically).',
          'Choose `HashSet` by default and switch only if you need a specific order.' ],
          code: `List<Integer> data = List.of(5, 1, 3, 1);\nSystem.out.println(new LinkedHashSet<>(data)); // [5, 1, 3]\nSystem.out.println(new TreeSet<>(data));       // [1, 3, 5]` },
        { h: 'add, remove and their result', p: [
          '`add()` returns `true` if the item was new and `false` if it was already there. That way you can detect duplicates as you insert.',
          '`remove()` also returns whether the set changed. A `Set` has no indexes: there is no `get(0)`.' ],
          code: `Set<String> seen = new HashSet<>();\nSystem.out.println(seen.add("ana"));    // true\nSystem.out.println(seen.add("ana"));    // false, repeated\nSystem.out.println(seen.remove("eva")); // false, not there` },
        { h: 'Union, intersection and difference', p: [
          '`addAll` makes the union, `retainAll` the intersection (keeps only the common ones) and `removeAll` the difference.',
          'All three modify the set you call them on. If you want to keep the original, make a copy first: `new HashSet<>(a)`.' ],
          code: `Set<String> monday = Set.of("Ana", "Luis", "Eva");\nSet<String> tuesday = Set.of("Eva", "Teo");\n\nSet<String> both = new TreeSet<>(monday);\nboth.retainAll(tuesday);\nSystem.out.println(both);   // [Eva]\n\nSet<String> all = new TreeSet<>(monday);\nall.addAll(tuesday);\nSystem.out.println(all);    // [Ana, Eva, Luis, Teo]` },
        { h: 'Real example: removing repeated emails', real: true, p: [
          'A newsletter receives sign-ups from several forms and some emails arrive twice. A `LinkedHashSet` removes the repeats and keeps the order of arrival.' ],
          code: `List<String> signups = List.of(\n    "ana@mail.com", "luis@mail.com", "ana@mail.com",\n    "eva@mail.com", "luis@mail.com");\nSet<String> unique = new LinkedHashSet<>(signups);\nSystem.out.println(unique.size());  // 3\nSystem.out.println(unique);         // [ana@mail.com, luis@mail.com, eva@mail.com]` },
      ],
      x: [
        mc('Which collection does not allow duplicate items?', ['HashSet', 'ArrayList', 'LinkedList', 'int[]'], 'A `Set` stores each item only once.'),
        out(`Set<String> s = new HashSet<>();\ns.add("a");\ns.add("a");\ns.add("b");\nSystem.out.println(s.size());`, ['2', '3', '1'], 'The second "a" is ignored because it was already there.'),
        mc('What does `set.add(x)` return if x was already in the set?', ['false', 'true', 'null', 'It throws an exception'], '`add` returns whether the set changed; if x was already there, it does not.'),
        out(`Set<Integer> s = new TreeSet<>(List.of(5, 1, 3));\nSystem.out.println(s);`, ['[1, 3, 5]', '[5, 1, 3]', '[5, 3, 1]', '{1, 3, 5}'], '`TreeSet` keeps the items sorted from smallest to largest.'),
        mc('Which Set keeps the order in which items were added?', ['LinkedHashSet', 'HashSet', 'TreeSet', 'SortedSet'], '`TreeSet` sorts by value; `LinkedHashSet` keeps the order of arrival.'),
        fill(`Set<String> all = new TreeSet<>(groupA);\nall.___(groupB);  // union of both groups`, ['addAll', 'retainAll', 'removeAll', 'union'], '`addAll` adds every item of the other set: it is the union.'),
        out(`Set<Integer> a = new TreeSet<>(List.of(1, 2, 3));\na.retainAll(List.of(2, 3, 4));\nSystem.out.println(a);`, ['[2, 3]', '[1, 2, 3, 4]', '[1]', '[4]'], '`retainAll` keeps only the common items: it is the intersection.'),
        out(`Set<String> s = new TreeSet<>(List.of("pear", "kiwi", "grape"));\nboolean b = s.add("kiwi");\ns.removeAll(Set.of("grape", "mango"));\nSystem.out.println(b + " " + s);`, ['false [kiwi, pear]', 'true [kiwi, pear]', 'false [pear, kiwi]', 'false [kiwi, pear, grape]'], '"kiwi" was already there, so `add` gives false. `removeAll` removes "grape" (mango was not there) and the `TreeSet` shows the rest in alphabetical order.'),
      ],
    },
    // ───────────── Day 10 ─────────────
    {
      id: 'java-maps',
      t: 'Maps',
      d: 'HashMap and TreeMap: put, get, getOrDefault, merge and iteration.',
      guide: [
        { h: 'What is a Map', p: [
          'A `Map` links unique keys to values, like a dictionary: each city’s postcode, each product’s stock, each student’s mark.',
          'It is declared with two types: `Map<String, Integer> stock = new HashMap<>();`. Keys are never repeated; if you `put` a key that already exists, you replace its value.' ] },
        { h: 'Adding, reading and deleting', p: [
          '`put(k, v)` adds or replaces and `get(k)` reads. If the key does not exist, `get` returns `null`, and using it as a number throws `NullPointerException`.',
          '`getOrDefault(k, value)` returns a fallback value when the key is missing. `containsKey()` checks whether it exists and `remove()` deletes it.' ],
          code: `Map<String, Integer> stock = new HashMap<>();\nstock.put("apples", 12);\nstock.put("pears", 5);\nstock.put("pears", 8);                               // replaces\nSystem.out.println(stock.get("pears"));              // 8\nSystem.out.println(stock.get("grapes"));             // null\nSystem.out.println(stock.getOrDefault("grapes", 0)); // 0\nSystem.out.println(stock.containsKey("apples"));     // true` },
        { h: 'Looping over a Map and choosing an implementation', p: [
          '`keySet()` gives the keys, `values()` the values and `entrySet()` the pairs; each `Map.Entry` has `getKey()` and `getValue()`.',
          '`HashMap` guarantees no order, `LinkedHashMap` keeps insertion order and `TreeMap` sorts by key.' ],
          code: `Map<String, Double> marks = new TreeMap<>();\nmarks.put("Luis", 6.5);\nmarks.put("Ana", 9.0);\nfor (Map.Entry<String, Double> e : marks.entrySet()) {\n    System.out.println(e.getKey() + " -> " + e.getValue());\n}\n// Ana -> 9.0\n// Luis -> 6.5` },
        { h: 'Counting with merge', p: [
          'Counting how many times something appears is very common. `merge(key, 1, Integer::sum)` puts 1 if the key is new and, if it already exists, adds 1 to it.',
          'The classic alternative is `m.put(k, m.getOrDefault(k, 0) + 1)`. Both do the same; `merge` is shorter.' ],
          code: `Map<String, Integer> votes = new HashMap<>();\nfor (String v : new String[] {"yes", "no", "yes"}) {\n    votes.merge(v, 1, Integer::sum);\n}\nSystem.out.println(votes.get("yes"));  // 2` },
        { h: 'Real example: counting the words in a text', real: true, p: [
          'A text analyser counts how many times each word appears, for example to find the most repeated ones in customer reviews. The `TreeMap` shows them in alphabetical order.' ],
          code: `String text = "the cat and the dog and the fish";\nMap<String, Integer> count = new TreeMap<>();\nfor (String word : text.split(" ")) {\n    count.merge(word, 1, Integer::sum);\n}\nSystem.out.println(count);  // {and=2, cat=1, dog=1, fish=1, the=3}` },
      ],
      x: [
        out(`Map<String, Integer> m = new HashMap<>();\nm.put("x", 1);\nm.put("x", 5);\nSystem.out.println(m.get("x"));`, ['5', '1', '6', '[1, 5]'], 'Keys are unique: the second `put` replaces the value.'),
        out(`Map<String, Integer> m = new HashMap<>();\nSystem.out.println(m.get("z"));`, ['null', '0', 'Error'], '`get` returns `null` if the key does not exist.'),
        out(`Map<String, Integer> m = new HashMap<>();\nSystem.out.println(m.getOrDefault("z", 0));`, ['0', 'null', 'z'], '`getOrDefault` returns the fallback value because the key does not exist.'),
        typ('Check whether the map has the key "pears"', `if (stock.___("pears")) {\n    System.out.println("There are pears");\n}`, 'containsKey', '`containsKey` returns `true` if the key exists in the map.'),
        fill(`for (Map.Entry<String, Integer> e : map.___()) {\n    System.out.println(e.getKey() + "=" + e.getValue());\n}`, ['entrySet', 'entries', 'items', 'keySet'], '`entrySet` gives the key-value pairs; `keySet` would give only the keys.'),
        out(`Map<String, Integer> m = new TreeMap<>();\nm.put("b", 2);\nm.put("a", 1);\nSystem.out.println(m);`, ['{a=1, b=2}', '{b=2, a=1}', '[a, b]', '{1, 2}'], '`TreeMap` sorts by key and is printed with braces.'),
        mc('Which Map goes through the keys in the order they were added?', ['LinkedHashMap', 'HashMap', 'TreeMap', 'SortedMap'], '`HashMap` guarantees no order and `TreeMap` sorts by key.'),
        out(`Map<Character, Integer> c = new TreeMap<>();\nfor (char ch : "banana".toCharArray()) {\n    c.merge(ch, 1, Integer::sum);\n}\nSystem.out.println(c);`, ['{a=3, b=1, n=2}', '{b=1, a=3, n=2}', '{a=1, b=1, n=1}', '{a=3, n=2, b=1}'], '`merge` counts each letter: three a, one b and two n. The `TreeMap` sorts them alphabetically.'),
      ],
    },
    // ───────────── Day 11 ─────────────
    {
      id: 'java-methods',
      t: 'Methods',
      d: 'Return types, void, parameters, overloading and recursion.',
      guide: [
        { h: 'What is a method', p: [
          'A method is a named block of code you can call as many times as you like. It avoids repeating code and gives each part of the program a single job.',
          'Its header states the modifiers, the type it returns, the name and the parameters: `static int add(int a, int b)`. For now we declare them `static` so we can call them straight from `main`; on day 13 you will see object methods.' ],
          code: `public class Calculator {\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        int r = add(4, 6);\n        System.out.println(r);          // 10\n        System.out.println(add(1, 1));  // 2\n    }\n}` },
        { h: 'return and void', p: [
          '`return` ends the method and gives back a value of the declared type. If the method returns `int`, every path has to end in a `return` with an integer or it does not compile.',
          'A `void` method returns nothing: it does something (print, save, send) and ends. It can use `return;` with no value to leave early.' ],
          code: `static void greet(String name) {\n    if (name.isEmpty()) {\n        return;               // leaves without doing anything\n    }\n    System.out.println("Hello, " + name);\n}\n\nstatic boolean isEven(int n) {\n    return n % 2 == 0;\n}` },
        { h: 'Pass by value', p: [
          'Java always passes arguments by value: the method receives a copy. If you change an `int` parameter inside the method, the original variable does not change.',
          'With objects and arrays the reference is copied, not the object. That is why the method can change the content of an array it receives, although it cannot make the original variable point to another one.' ],
          code: `static void tryToChange(int x) { x = 99; }\nstatic void clearFirst(int[] a) { a[0] = 0; }\n\nint n = 5;\ntryToChange(n);\nSystem.out.println(n);        // 5\n\nint[] data = {7, 8};\nclearFirst(data);\nSystem.out.println(data[0]);  // 0` },
        { h: 'Overloading and varargs', p: [
          'You can have several methods with the same name if their parameters differ: that is overloading. Java picks which one to call from the arguments. `System.out.println` is overloaded for every type.',
          'With `int... nums` (varargs) a method accepts any number of arguments, which are used as an array inside.' ],
          code: `static int max(int a, int b) { return a > b ? a : b; }\nstatic double max(double a, double b) { return a > b ? a : b; }\n\nstatic int sum(int... nums) {\n    int total = 0;\n    for (int n : nums) total += n;\n    return total;\n}\n\nSystem.out.println(max(3, 8));        // 8\nSystem.out.println(max(2.5, 1.0));    // 2.5\nSystem.out.println(sum(1, 2, 3, 4));  // 10` },
        { h: 'Recursion', p: [
          'A recursive method calls itself with a smaller problem. It needs a base case that stops calling; without one, the stack fills up and Java throws `StackOverflowError`.',
          'It is natural for structures that repeat inside themselves, like folders with subfolders. For simple calculations a loop is usually more efficient.' ],
          code: `static int factorial(int n) {\n    if (n <= 1) return 1;          // base case\n    return n * factorial(n - 1);   // recursive case\n}\n\nSystem.out.println(factorial(5));  // 120` },
        { h: 'Real example: the final price of an order', real: true, p: [
          'A shop applies a discount and then VAT. Splitting each step into a well-named method makes the calculation read like a sentence and makes it reusable.' ],
          code: `static double applyDiscount(double price, int percent) {\n    return price - price * percent / 100;\n}\n\nstatic double round2(double value) {\n    return Math.round(value * 100) / 100.0;\n}\n\ndouble discounted = applyDiscount(80.0, 15);\nSystem.out.println(discounted);                 // 68.0\nSystem.out.println(round2(discounted * 1.21));  // 82.28` },
      ],
      x: [
        fill(`public static ___ add(int a, int b) {\n    return a + b;\n}`, ['int', 'void', 'return', 'function'], 'The method returns the sum of two integers, so its return type is `int`.'),
        mc('What does `void` mean in a method header?', ['That it returns no value', 'That it takes no parameters', 'That it is private', 'That it is static'], '`void` means the method has no return value.'),
        typ('Complete the method so it returns the double', `static int twice(int n) {\n    ___ n * 2;\n}`, 'return', '`return` gives back the value and ends the method.'),
        out(`static int square(int n) {\n    return n * n;\n}\n\nSystem.out.println(square(square(2)));`, ['16', '8', '4', '2'], 'First `square(2)` gives 4 and then `square(4)` gives 16.'),
        mc('`int max(int a, int b)` and `double max(double a, double b)` in the same class are...', ['Method overloading', 'A compile error', 'Inheritance', 'Overriding'], 'Same name with different parameters: Java picks which one to use from the argument types.'),
        out(`static void change(int x) { x = 99; }\n\nint n = 1;\nchange(n);\nSystem.out.println(n);`, ['1', '99', '0', 'Error'], 'Java passes primitives by value: the method changes a copy.'),
        out(`static void doubleFirst(int[] a) { a[0] *= 2; }\n\nint[] v = {5, 1};\ndoubleFirst(v);\nSystem.out.println(v[0]);`, ['10', '5', '0', 'Error'], 'The reference to the array is copied, so the method changes the same array that `main` sees.'),
        out(`static int sum(int... nums) {\n    int t = 0;\n    for (int n : nums) t += n;\n    return t;\n}\nstatic int fact(int n) {\n    return n <= 1 ? 1 : n * fact(n - 1);\n}\n\nSystem.out.println(sum(1, 2, 3) + fact(4));`, ['30', '10', '33', '624'], '`sum(1, 2, 3)` gives 6 and `fact(4)` gives 4 × 3 × 2 × 1 = 24. Both are `int`, so they are added: 30.'),
      ],
    },
    // ───────────── Day 12 ─────────────
    {
      id: 'java-packages',
      t: 'Packages and imports',
      d: 'package, import, java.lang and access modifiers.',
      guide: [
        { h: 'Packages', p: [
          'A package groups related classes, just as a folder groups files. In fact, each package matches a folder: `com.shop.model` lives in `com/shop/model/`.',
          'By convention you use your company’s domain reversed (`com.company.project`), all in lowercase. That way two different libraries can each have a `User` class without clashing.',
          'The `package` line goes first in the file; only comments may come before it.' ],
          code: `// File: src/com/shop/model/Product.java\npackage com.shop.model;\n\npublic class Product {\n    // ...\n}` },
        { h: 'import', p: [
          'To use a class from another package you import it: `import java.util.List;`. The wildcard `import java.util.*;` imports every class in that package, but not its subpackages.',
          'The `java.lang` package is imported automatically: that is why you use `String`, `Math`, `Integer` or `System` without writing anything. With `import static` you can use static members without the class name.' ],
          code: `import java.util.ArrayList;\nimport java.util.List;\nimport java.time.LocalDate;\nimport static java.lang.Math.PI;\n\ndouble area = PI * 2 * 2;   // without writing Math.PI` },
        { h: 'Access modifiers', p: [
          '`public`: visible from any class. `protected`: from the same package and from subclasses. No modifier (package-private): only from the same package. `private`: only inside the class itself.',
          'The practical rule: start with the most restrictive (`private`) and open only what other classes really need. The less you expose, the less can break when you change the code.' ] },
        { h: 'The standard library', p: [
          'Java ships with thousands of ready-to-use classes. The ones you will import most: `java.util` (collections, `Scanner`, `Random`), `java.time` (dates), `java.nio.file` (files) and `java.util.stream` (streams).',
          '`Scanner` reads what the user types in the console, and `Random` generates random numbers.' ],
          code: `import java.util.Random;\nimport java.util.Scanner;\n\nScanner keyboard = new Scanner(System.in);\nSystem.out.print("What is your name? ");\nString name = keyboard.nextLine();\n\nRandom random = new Random();\nint die = random.nextInt(6) + 1;   // from 1 to 6\nSystem.out.println(name + " rolled a " + die);` },
        { h: 'Real example: organising a shop project', real: true, p: [
          'In a real project each layer goes in its own package: the data model in one and the application in another. Modifiers decide what each part can use.' ],
          code: `// File: src/com/shop/model/Product.java\npackage com.shop.model;\n\npublic class Product {\n    public String name;\n    double price;   // package-private: only com.shop.model\n}\n\n// File: src/com/shop/app/Main.java\npackage com.shop.app;\n\nimport com.shop.model.Product;\n\npublic class Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.name = "Keyboard";   // public: allowed\n        // p.price = 25;       // error: not visible from another package\n    }\n}` },
      ],
      x: [
        fill(`___ java.util.Scanner;`, ['import', 'include', 'using', 'require'], '`import` brings in classes from other packages. `include` is C and `using` is C#.'),
        mc('Which package is imported automatically in every Java program?', ['java.lang', 'java.util', 'java.io', 'java.main'], 'That is why you can use `String`, `Math` or `System` without importing them.'),
        mc('Where is the `package` declaration written?', ['On the first line of the file', 'At the end of the file', 'Inside the main method', 'Anywhere'], 'Only comments may come before it.'),
        out(`System.out.println(Math.max(3, 8) + Math.abs(-2));`, ['10', '6', '11', '5'], '`Math.max(3, 8)` is 8 and `Math.abs(-2)` is 2. `Math` is in `java.lang`, so no import is needed.'),
        ord('Write the import for the Scanner class', ['import', 'java', '.', 'util', '.', 'Scanner', ';'], ['include', '#'], '`Scanner` is in the `java.util` package and the line ends with `;`.'),
        mc('An attribute with no access modifier is visible...', ['Only from its own package', 'From any class', 'Only inside its class', 'Only from subclasses'], 'It is package-private access, the default.'),
        mc('What does `import java.util.*;` import?', ['Every class in the java.util package, not its subpackages', 'Every Java package', 'java.util and also java.util.function', 'Nothing, it is an error'], 'The wildcard does not include subpackages such as `java.util.function`, which are imported separately.'),
        mc('`Panel` is in another package and does not extend `Account`. Which line compiles inside `Panel`?', ['a.holder = "Ana";', 'a.balance = 100;', 'a.number = 7;', 'a.pin = "1234";'], 'From another package and without inheritance only `public` is visible. `protected` requires being a subclass, default access requires the same package and `private` only works inside `Account`.', `package com.app.model;\n\npublic class Account {\n    public String holder;\n    protected double balance;\n    int number;\n    private String pin;\n}\n\n// In com.app.web.Panel:\nAccount a = new Account();`),
      ],
    },
    // ───────────── Day 13 ─────────────
    {
      id: 'java-classes',
      t: 'Classes and objects',
      d: 'Attributes, methods, constructors, new and this.',
      guide: [
        { h: 'Classes and objects', p: [
          'A class is a blueprint: it describes what data something has (attributes) and what it can do (methods). An object is a concrete instance of that blueprint, created with `new`.',
          'The `Car` class says every car has a brand and a speed; your car and your neighbour’s are two different objects, each with its own values.',
          'Thinking in objects helps you model the real world: an order, a user, an invoice. Each one keeps its data and the operations that use it.' ],
          code: `class Car {\n    String brand;\n    int speed;\n\n    void accelerate(int kmh) {\n        speed += kmh;\n    }\n}\n\nCar c = new Car();\nc.brand = "Seat";\nc.accelerate(50);\nSystem.out.println(c.brand + " at " + c.speed);  // Seat at 50` },
        { h: 'Constructors', p: [
          'The constructor prepares the object when it is created. It has the same name as the class and declares no return type, not even `void`.',
          'If you write none, Java creates an empty one. But if you write one with parameters, the empty one disappears: `new Car()` would stop compiling.',
          'You can have several constructors (overloading), and one can call another with `this(...)`.' ],
          code: `class Car {\n    String brand;\n    int speed;\n\n    Car(String brand) {\n        this(brand, 0);           // calls the other constructor\n    }\n\n    Car(String brand, int speed) {\n        this.brand = brand;\n        this.speed = speed;\n    }\n}` },
        { h: 'this', p: [
          '`this` is a reference to the current object. It is mostly used to tell an attribute apart from a parameter with the same name: `this.brand = brand;`.',
          'If you forget `this` in that case, you assign the parameter to itself and the attribute stays `null`. The code compiles, but it does not do what you wanted.' ] },
        { h: 'References and null', p: [
          'A variable of an object type does not hold the object, it holds a reference to it. If you write `Car b = a;`, both variables point to the same car.',
          'A reference that points to nothing is `null`. Calling a method on `null` throws `NullPointerException`, Java’s most famous error.' ],
          code: `Car a = new Car("Seat");\nCar b = a;              // same object\nb.speed = 120;\nSystem.out.println(a.speed);  // 120\n\nCar c = null;\n// c.accelerate(10);    // NullPointerException` },
        { h: 'Real example: the lines of an order', real: true, p: [
          'Each line of an online order has a product, a price and a quantity, and knows how to work out its subtotal. The object groups the data with the operation that uses it.' ],
          code: `class OrderLine {\n    String product;\n    double price;\n    int quantity;\n\n    OrderLine(String product, double price, int quantity) {\n        this.product = product;\n        this.price = price;\n        this.quantity = quantity;\n    }\n\n    double subtotal() {\n        return price * quantity;\n    }\n}\n\nOrderLine a = new OrderLine("T-shirt", 12.5, 2);\nOrderLine b = new OrderLine("Cap", 9.0, 1);\nSystem.out.println(a.subtotal() + b.subtotal());  // 34.0` },
      ],
      x: [
        mc('What is an object?', ['A concrete instance created from a class', 'A primitive type', 'A static method', 'A package'], 'The class is the blueprint; the object is what comes out of it with `new`.'),
        fill(`public class Car {\n    private String brand;\n\n    public ___(String brand) {\n        this.brand = brand;\n    }\n}`, ['Car', 'constructor', 'void Car', 'new'], 'The constructor has the same name as the class and no return type.'),
        ord('Create a Car object of the brand Seat', ['Car', 'c', '=', 'new', 'Car', '(', '"Seat"', ')', ';'], ['create', 'make'], '`new` creates the object and calls the constructor with the arguments.'),
        mc('Inside a method, what is `this`?', ['A reference to the current object', 'The parent class', 'A static method', 'The current package'], '`this.brand` is the object’s attribute; plain `brand` would be the parameter.'),
        out(`class Point {\n    int x, y;\n    Point(int x, int y) { this.x = x; this.y = y; }\n}\n\nPoint p = new Point(2, 3);\nSystem.out.println(p.x + p.y);`, ['5', '23', '2', 'Error'], 'The constructor stores 2 and 3 in the attributes; they are `int`, so they are added: 5.'),
        out(`class C { int v = 1; }\n\nC a = new C();\nC b = a;\nb.v = 7;\nSystem.out.println(a.v);`, ['7', '1', '0', 'Error'], '`a` and `b` point to the same object: changing it through one is visible through the other.'),
        mc('What happens when this code runs?', ['NullPointerException is thrown', 'It prints null', 'It prints an empty string', 'It does not compile'], 'The variable points to no object, so its methods cannot be called. It compiles, but fails at run time.', `Car c = null;\nSystem.out.println(c.getBrand());`),
        out(`class Counter {\n    int value;\n    Counter() { this(10); }\n    Counter(int start) { value = start; }\n    void add() { value++; }\n}\n\nCounter a = new Counter();\nCounter b = new Counter(3);\nCounter c = a;\nc.add();\nb.add();\nSystem.out.println(a.value + " " + b.value);`, ['11 4', '10 4', '11 3', '10 3'], 'The empty constructor calls `this(10)`. `c` points to the same object as `a`, so `a` reaches 11; `b` goes from 3 to 4.'),
      ],
    },
    // ───────────── Day 14 ─────────────
    {
      id: 'java-encapsulation',
      t: 'Encapsulation',
      d: 'private, getters, setters with validation, static and final.',
      guide: [
        { h: 'Why encapsulate', p: [
          'If anyone can write `account.balance = -500;`, your program will have impossible accounts. Encapsulating means hiding the internal state with `private` and allowing changes only through methods that check the rules.',
          'That way the class protects itself: no matter who uses it, it will never be left in an invalid state. And you can change how it works inside without breaking whoever uses it.' ] },
        { h: 'Getters and setters', p: [
          'A getter returns a private attribute (`getName()`, or `isActive()` for a `boolean`). A setter changes it (`setAge(int age)`) and is the perfect place to validate.',
          'Do not create setters out of habit: if a value should not change after the object is created, do not give it a setter.' ],
          code: `public class Student {\n    private String name;\n    private int age;\n\n    public String getName() { return name; }\n\n    public void setAge(int age) {\n        if (age < 0) {\n            throw new IllegalArgumentException("Negative age");\n        }\n        this.age = age;\n    }\n}` },
        { h: 'static: of the class, not the object', p: [
          'A `static` attribute exists only once, in the class, and every object shares it. It is used for global counters or shared configuration.',
          'A `static` method is called with the class name (`Math.max(3, 8)`) and cannot use instance attributes, because it does not belong to any particular object.' ],
          code: `class User {\n    static int total = 0;   // shared\n    String name;            // one per object\n\n    User(String name) {\n        this.name = name;\n        total++;\n    }\n}\n\nnew User("Ana");\nnew User("Luis");\nSystem.out.println(User.total);  // 2` },
        { h: 'final and immutable objects', p: [
          'A `final` attribute is assigned once (when declared or in the constructor) and never changes. If every attribute is `private final` and there are no setters, the object is immutable, like `String`.',
          'Immutable objects are easier to reason about and safe across threads. Constants are declared `static final` and in UPPERCASE: `static final int MAX_ATTEMPTS = 3;`.' ] },
        { h: 'Real example: a safe bank account', real: true, p: [
          'The balance is private and only changes through `deposit` and `withdraw`, which reject invalid amounts. The IBAN is `final`: an account does not change its number.' ],
          code: `public class BankAccount {\n    private final String iban;\n    private double balance;\n\n    public BankAccount(String iban) {\n        this.iban = iban;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        return true;\n    }\n\n    public double getBalance() { return balance; }\n}\n\nBankAccount a = new BankAccount("GB12 3456");\na.deposit(100);\nSystem.out.println(a.withdraw(150));  // false\nSystem.out.println(a.withdraw(40));   // true\nSystem.out.println(a.getBalance());   // 60.0` },
      ],
      x: [
        mc('What is `private` for on an attribute?', ['So it can only be accessed inside its class', 'To stop objects being created', 'To make it constant', 'To share it between objects'], 'From outside it is only reached through the public methods the class chooses to offer.'),
        typ('Write the modifier that hides the attribute outside the class', `public class Account {\n    ___ double balance;\n}`, 'private', '`private` limits access to the class itself.'),
        fill(`public String ___() {\n    return name;\n}`, ['getName', 'name', 'get', 'Name'], 'By convention, getters are called `get` plus the attribute name with a capital letter.'),
        mc('What does `final` do on an attribute?', ['It stops its value changing after it is assigned', 'It makes it private', 'It shares it between objects', 'It deletes it when the program ends'], 'It is used for constants and for immutable objects.'),
        mc('What does it mean for an attribute to be `static`?', ['It belongs to the class and every instance shares it', 'Its value cannot change', 'It is only visible inside the class', 'It is deleted when the method ends'], 'It exists once, in the class, not once per object.'),
        out(`class Ticket {\n    static int issued = 0;\n    Ticket() { issued++; }\n}\n\nnew Ticket();\nnew Ticket();\nnew Ticket();\nSystem.out.println(Ticket.issued);`, ['3', '1', '0', 'Error'], 'The three objects share the same `static` counter, and each constructor increments it.'),
        mc('Why is it a good idea to validate inside a setter?', ['To prevent invalid states, such as a negative age', 'To make the code faster', 'Because Java requires it', 'So the attribute can be inherited'], 'The class protects its own rules, whoever uses it.'),
        out(`class Thermostat {\n    private int degrees = 20;\n    private static final int MAX = 30;\n    void raise(int n) {\n        if (degrees + n <= MAX) degrees += n;\n    }\n    int getDegrees() { return degrees; }\n}\n\nThermostat t = new Thermostat();\nt.raise(5);\nt.raise(8);\nt.raise(5);\nSystem.out.println(t.getDegrees());`, ['30', '38', '25', '33'], '20 + 5 = 25. Raising by 8 would give 33, above the maximum, so it is ignored. 25 + 5 = 30 is allowed.'),
      ],
    },
    // ───────────── Day 15 ─────────────
    {
      id: 'java-inheritance',
      t: 'Inheritance',
      d: 'extends, super, @Override and the Object class.',
      guide: [
        { h: 'extends: inheriting from another class', p: [
          'With `extends` a child class inherits the attributes and methods of a parent class and can add its own. That way you do not repeat shared code.',
          'Inheritance expresses an "is a" relationship: a `Dog` is an `Animal`. If the relationship is "has a" (a car has an engine), use an attribute instead of inheritance.',
          'Java only allows inheriting from one class. To combine behaviour from several sources there are interfaces (day 16).' ],
          code: `class Animal {\n    protected String name;\n\n    Animal(String name) { this.name = name; }\n\n    String eat() { return name + " is eating"; }\n}\n\nclass Dog extends Animal {\n    Dog(String name) { super(name); }\n\n    String bark() { return name + ": woof!"; }\n}\n\nDog d = new Dog("Toby");\nSystem.out.println(d.eat());   // Toby is eating\nSystem.out.println(d.bark());  // Toby: woof!` },
        { h: 'super', p: [
          '`super(...)` calls the parent’s constructor and has to be the first line of the child constructor. If the parent has no empty constructor, you are forced to call it.',
          'Before the child constructor runs, the parent part is always built. `super.method()` calls the parent’s version of a method.' ] },
        { h: 'Overriding methods with @Override', p: [
          'A child class can redefine a parent method with the same signature: that is overriding. Always put `@Override` above it: if you get the name or the parameters wrong, the compiler warns you.',
          'Without `@Override`, a typo would silently create a new method and the parent’s would keep running.' ],
          code: `class Animal {\n    String sound() { return "..."; }\n}\n\nclass Cat extends Animal {\n    @Override\n    String sound() { return "Meow"; }\n}\n\nSystem.out.println(new Cat().sound());  // Meow` },
        { h: 'The Object class', p: [
          'Every class inherits, directly or indirectly, from `Object`. That is where `toString()`, `equals()` and `hashCode()` come from.',
          'The default `toString()` prints something like `Book@1b6d3586`. Override it so your objects read well in logs and when debugging.' ],
          code: `class Book {\n    String title = "Dune";\n\n    @Override\n    public String toString() {\n        return "Book: " + title;\n    }\n}\n\nSystem.out.println(new Book());  // Book: Dune` },
        { h: 'Real example: payroll for employees and managers', real: true, p: [
          'Every employee is paid their annual salary in 12 instalments; managers also get a monthly bonus. The manager reuses the parent’s calculation with `super` and adds the bonus.' ],
          code: `class Employee {\n    protected String name;\n    protected double annualSalary;\n\n    Employee(String name, double annualSalary) {\n        this.name = name;\n        this.annualSalary = annualSalary;\n    }\n\n    double monthlySalary() { return annualSalary / 12; }\n}\n\nclass Manager extends Employee {\n    private double bonus;\n\n    Manager(String name, double annualSalary, double bonus) {\n        super(name, annualSalary);\n        this.bonus = bonus;\n    }\n\n    @Override\n    double monthlySalary() { return super.monthlySalary() + bonus; }\n}\n\nSystem.out.println(new Employee("Ana", 30000).monthlySalary());     // 2500.0\nSystem.out.println(new Manager("Luis", 48000, 500).monthlySalary()); // 4500.0` },
      ],
      x: [
        fill(`class Dog ___ Animal {\n}`, ['extends', 'implements', 'inherits', ':'], 'In Java you inherit from a class with `extends`. The colon is C++ and C#.'),
        mc('How many classes can a Java class inherit from directly?', ['Only one', 'Two', 'As many as it likes', 'None'], 'Java has no multiple inheritance of classes; that is what interfaces are for.'),
        out(`class A { String hi() { return "A"; } }\nclass B extends A { }\n\nSystem.out.println(new B().hi());`, ['A', 'B', 'null', 'Error'], 'B does not define `hi`, so it uses the one it inherits from A.'),
        mc('What does `super(name)` do inside a constructor?', ['It calls the parent class constructor', 'It creates a copy of the object', 'It calls the same constructor again', 'It deletes the parent object'], 'It must be the first statement of the child constructor.'),
        out(`class A { A() { System.out.print("A"); } }\nclass B extends A { B() { System.out.print("B"); } }\n\nnew B();`, ['AB', 'BA', 'B', 'A'], 'Before the child constructor runs, the parent part is built.'),
        mc('What is `@Override` for?', ['It marks the method as overriding a parent one, and the compiler checks it', 'It creates a new method', 'It makes the method static', 'It stops the method being inherited'], 'If the signature matches no parent method, the code does not compile.'),
        out(`class Book {\n    String title = "Dune";\n    @Override\n    public String toString() { return "Book: " + title; }\n}\n\nSystem.out.println(new Book());`, ['Book: Dune', 'Dune', 'Book@1b6d3586', 'null'], '`println` calls `toString()`, which is overridden here.'),
        out(`class Vehicle {\n    String info() { return "Vehicle"; }\n    String describe() { return "I am " + info(); }\n}\nclass Motorbike extends Vehicle {\n    @Override\n    String info() { return "Motorbike, " + super.info(); }\n}\n\nSystem.out.println(new Motorbike().describe());`, ['I am Motorbike, Vehicle', 'I am Vehicle', 'I am Motorbike', 'Motorbike, I am Vehicle'], '`describe` is inherited, but it calls `info()` on the real object, which is a Motorbike. Its version adds "Motorbike, " and uses `super.info()`.'),
      ],
    },
    // ───────────── Day 16 ─────────────
    {
      id: 'java-polymorphism',
      t: 'Polymorphism and interfaces',
      d: 'interface, implements, abstract classes and default methods.',
      guide: [
        { h: 'Interfaces: a contract', p: [
          'An interface declares which methods a class must have, without saying how they work. The class fulfils it with `implements` and writes those methods.',
          'A class inherits from only one class, but it can implement several interfaces: `class Duck implements Flyer, Swimmer`.',
          'Interface methods are public, so when you implement them you must mark them `public`.' ],
          code: `interface Flyer {\n    void fly();\n}\n\nclass Duck implements Flyer {\n    public void fly() { System.out.println("The duck flaps"); }\n}\n\nclass Plane implements Flyer {\n    public void fly() { System.out.println("The plane takes off"); }\n}` },
        { h: 'Polymorphism', p: [
          'A variable of an interface type (or parent class type) can hold any object that fulfils it. When you call a method, the version of the object’s real class runs, not that of the variable’s type.',
          'That way you write general code (`for (Flyer f : flyers) f.fly();`) that works with classes that do not exist yet. Adding a `Drone` does not force you to touch that loop.' ],
          code: `List<Flyer> flyers = List.of(new Duck(), new Plane());\nfor (Flyer f : flyers) {\n    f.fly();\n}\n// The duck flaps\n// The plane takes off` },
        { h: 'Abstract classes', p: [
          'An `abstract` class cannot be instantiated. It can have abstract methods (with no body) that children must write and normal methods they inherit.',
          'Interface or abstract class? Use an interface to describe an ability ("can be paid", "can be sorted"). Use an abstract class when the children share state (attributes) or a constructor.' ],
          code: `abstract class Shape {\n    abstract double area();\n\n    String describe() {\n        return "Area: " + area();\n    }\n}\n\nclass Circle extends Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    double area() { return Math.PI * r * r; }\n}` },
        { h: 'Default methods and instanceof', p: [
          'Since Java 8, an interface can bring `default` methods with a default implementation. Classes inherit them and can override them.',
          'With `instanceof` you check an object’s real type. Since Java 16 you can declare the variable in the same check: `if (s instanceof Circle c)`.' ],
          code: `Shape s = new Circle(1);\nif (s instanceof Circle c) {\n    System.out.println("Radius: " + c.r);  // Radius: 1.0\n}` },
        { h: 'Real example: payment methods in a shop', real: true, p: [
          'A shop accepts card and bank transfer, and each method charges a different fee. The till works with the `PaymentMethod` interface and does not need to know which is which.' ],
          code: `interface PaymentMethod {\n    double fee(double amount);\n\n    default double total(double amount) {\n        return amount + fee(amount);\n    }\n}\n\nclass Card implements PaymentMethod {\n    public double fee(double amount) { return amount * 0.02; }\n}\n\nclass Transfer implements PaymentMethod {\n    public double fee(double amount) { return 0.50; }\n}\n\nfor (PaymentMethod m : List.of(new Card(), new Transfer())) {\n    System.out.println(m.total(100));\n}\n// 102.0\n// 100.5` },
      ],
      x: [
        fill(`interface Flyer {\n    void fly();\n}\n\nclass Bird ___ Flyer {\n    public void fly() { }\n}`, ['implements', 'extends', 'uses', 'with'], 'Classes fulfil interfaces with `implements`; `extends` is for inheriting from classes.'),
        mc('What is polymorphism?', ['Using objects of different classes through a common type', 'Having many constructors', 'Copying objects', 'Inheriting from several classes'], 'The same code works with different implementations.'),
        out(`class Animal {\n    String sound() { return "..."; }\n}\nclass Cat extends Animal {\n    @Override\n    String sound() { return "Meow"; }\n}\n\nAnimal a = new Cat();\nSystem.out.println(a.sound());`, ['Meow', '...', 'null', 'Error'], 'Although the variable is an `Animal`, the object is a `Cat` and its method runs.'),
        fill(`___ class Shape {\n    abstract double area();\n}`, ['abstract', 'interface', 'virtual', 'static'], 'A class with abstract methods must be `abstract`.'),
        mc('If `Shape` is abstract, what happens with `Shape s = new Shape();`?', ['It does not compile: an abstract class cannot be instantiated', 'It creates an empty shape', 'It throws an exception at run time', 'It creates an object of the first subclass'], 'You can only create objects of its concrete subclasses.'),
        mc('What can an abstract class have that an interface cannot?', ['Instance attributes and constructors', 'Public methods', 'Constants', 'Default methods'], 'Interfaces do not hold per-object state.'),
        out(`interface Greeting {\n    default String hello() { return "hello"; }\n}\nclass G implements Greeting { }\n\nSystem.out.println(new G().hello());`, ['hello', 'null', 'Compile error', 'G'], '`default` methods give an implementation the class inherits without writing anything.'),
        out(`interface Shape { double area(); }\n\nclass Square implements Shape {\n    double side;\n    Square(double side) { this.side = side; }\n    public double area() { return side * side; }\n}\nclass Rectangle implements Shape {\n    double b, h;\n    Rectangle(double b, double h) { this.b = b; this.h = h; }\n    public double area() { return b * h; }\n}\n\ndouble total = 0;\nfor (Shape s : List.of(new Square(3), new Rectangle(2, 5))) {\n    total += s.area();\n}\nSystem.out.println(total);`, ['19.0', '19', '14.0', 'Error'], 'Each object uses its own `area()`: 3 × 3 = 9 and 2 × 5 = 10. They are `double`, so 19.0 is printed.'),
      ],
    },
    // ───────────── Day 17 ─────────────
    {
      id: 'java-exceptions',
      t: 'Exceptions',
      d: 'try, catch, finally, throw and checked versus unchecked.',
      guide: [
        { h: 'What is an exception', p: [
          'An exception is an object Java throws when something goes wrong: dividing by zero, reading a file that does not exist, turning "abc" into a number. If nobody catches it, the program stops and shows the stack trace.',
          'The stack trace is not your enemy: the first line gives the error type and message, and the following ones show which line of which file it happened in. Read it from the top down.' ] },
        { h: 'try, catch and finally', p: [
          '`try` wraps the code that may fail and `catch` catches a specific kind of exception. You can have several `catch` blocks, from most specific to most general, or join types with `|`.',
          '`finally` always runs, error or not: it is the place to close connections or release resources. Never leave an empty `catch`: it hides the error and later you will not know what happened.' ],
          code: `try {\n    int n = Integer.parseInt("42a");\n    System.out.println(n);\n} catch (NumberFormatException e) {\n    System.out.println("Invalid format: " + e.getMessage());\n} finally {\n    System.out.println("Done");\n}\n// Invalid format: For input string: "42a"\n// Done` },
        { h: 'Checked and unchecked', p: [
          'Checked exceptions (such as `IOException`) represent foreseeable external problems. The compiler forces you to catch them or declare them in the method with `throws`.',
          'Unchecked ones extend `RuntimeException` (such as `NullPointerException` or `IllegalArgumentException`) and usually point to a programming bug. Catching them is not mandatory: it is better to avoid them.' ],
          code: `// checked: must be declared or caught\nstatic String read(Path path) throws IOException {\n    return Files.readString(path);\n}\n\n// unchecked: signals incorrect use\nstatic double root(double x) {\n    if (x < 0) throw new IllegalArgumentException("negative x");\n    return Math.sqrt(x);\n}` },
        { h: 'throw and your own exceptions', p: [
          '`throw new Type("message")` throws an exception. Do not confuse `throw` (throwing, inside the code) with `throws` (warning, in the method header).',
          'You can create your own exceptions by extending `Exception` (checked) or `RuntimeException` (unchecked). A clear name like `InsufficientFundsException` explains the problem just by reading it.' ],
          code: `class InsufficientFundsException extends Exception {\n    InsufficientFundsException(String msg) { super(msg); }\n}\n\nstatic void withdraw(double balance, double amount) throws InsufficientFundsException {\n    if (amount > balance) {\n        throw new InsufficientFundsException((amount - balance) + " € short");\n    }\n}` },
        { h: 'try-with-resources', p: [
          'Resources that must be closed (files, connections) are opened in parentheses after `try`. Java closes them when the block ends, even if there is an exception.',
          'It works with any class that implements `AutoCloseable`, and it avoids long, error-prone `finally` blocks.' ],
          code: `try (BufferedReader br = Files.newBufferedReader(Path.of("data.txt"))) {\n    System.out.println(br.readLine());\n} catch (IOException e) {\n    System.out.println("Could not read: " + e.getMessage());\n}` },
        { h: 'Real example: reading an age from a form', real: true, p: [
          'What a user types cannot be trusted. This method turns the text into a number, rejects impossible ages and does not let an error bring down the application.' ],
          code: `static int readAge(String text) {\n    try {\n        int age = Integer.parseInt(text.trim());\n        if (age < 0 || age > 120) {\n            throw new IllegalArgumentException("Age out of range: " + age);\n        }\n        return age;\n    } catch (NumberFormatException e) {\n        System.out.println("Not a number: " + text);\n        return -1;\n    }\n}\n\nSystem.out.println(readAge(" 34 "));     // 34\nSystem.out.println(readAge("thirty"));\n// Not a number: thirty\n// -1` },
      ],
      x: [
        fill(`___ {\n    int n = Integer.parseInt("abc");\n} catch (NumberFormatException e) {\n    System.out.println("Not a number");\n}`, ['try', 'do', 'attempt', 'check'], 'The code that may fail goes inside `try`.'),
        out(`try {\n    String s = null;\n    s.length();\n} catch (NullPointerException e) {\n    System.out.println("null!");\n}`, ['null!', '0', 'null', 'Uncaught error'], 'Calling a method on `null` throws `NullPointerException`, and here it is caught.'),
        fill(`if (age < 0) {\n    ___ new IllegalArgumentException("Negative age");\n}`, ['throw', 'throws', 'raise', 'error'], '`throw` throws an exception; `throws` declares it in the method header. `raise` is Python.'),
        out(`try {\n    int[] a = new int[2];\n    a[5] = 1;\n    System.out.println("ok");\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("out");\n} finally {\n    System.out.println("end");\n}`, ['out\nend', 'ok\nend', 'end', 'out'], '`a[5]` throws the exception before "ok" is printed. `finally` always runs.'),
        mc('What characterises a checked exception, such as IOException?', ['The compiler forces you to catch it or declare it with throws', 'Java ignores it automatically', 'It only appears at run time, with no warning', 'It is a syntax error'], 'If you do not handle it, the code does not compile.'),
        mc('What does `try (var br = Files.newBufferedReader(path)) { ... }` do?', ['It closes the resource automatically when the block ends', 'It retries the read if it fails', 'It ignores every exception', 'It opens the file twice'], 'It is try-with-resources: it closes the reader even if there is an error.'),
        mc('Why does putting `catch (Exception e)` before `catch (NumberFormatException e)` not compile?', ['The second catch could never be reached, because Exception already catches everything', 'Exception does not exist in Java', 'Only one catch is allowed per try', 'NumberFormatException is checked'], '`catch` blocks go from the most specific to the most general.'),
        out(`static int divide(int a, int b) {\n    try {\n        return a / b;\n    } catch (ArithmeticException e) {\n        System.out.print("error ");\n        return 0;\n    } finally {\n        System.out.print("end ");\n    }\n}\n\nSystem.out.println(divide(10, 0) + divide(9, 3));`, ['error end end 3', 'error end 3', 'end error end 3', 'error 0 end end 3'], 'The first call prints "error " and then "end " and returns 0. The second prints "end " and returns 3. Finally 0 + 3 is printed.'),
      ],
    },
    // ───────────── Day 18 ─────────────
    {
      id: 'java-generics',
      t: 'Generics',
      d: 'Generic classes and methods, the diamond operator and wildcards.',
      guide: [
        { h: 'Why generics exist', p: [
          'Before Java 5 a list held `Object` and every item had to be converted with a cast. If someone put a number in a list of names, the error showed up at run time as a `ClassCastException`.',
          'With generics you write `List<String>` and the compiler checks the types: adding a number does not even compile, and no cast is needed when reading.' ],
          code: `List<String> names = new ArrayList<>();\nnames.add("Ana");\n// names.add(42);           // compile error\nString first = names.get(0);  // no cast` },
        { h: 'Generic classes', p: [
          'A generic class declares one or more type parameters in angle brackets: `class Box<T>`. Inside, `T` is used like any type.',
          'By convention letters are used: `T` (type), `E` (element), `K` and `V` (key and value). In `new Box<>("hello")` the diamond operator `<>` lets the compiler infer the type.' ],
          code: `class Pair<K, V> {\n    private final K key;\n    private final V value;\n\n    Pair(K key, V value) {\n        this.key = key;\n        this.value = value;\n    }\n\n    K getKey() { return key; }\n    V getValue() { return value; }\n}\n\nPair<String, Integer> p = new Pair<>("age", 30);\nSystem.out.println(p.getKey() + "=" + p.getValue());  // age=30` },
        { h: 'Generic methods', p: [
          'A method can be generic too: it declares `<T>` before the return type and uses it in its parameters. The type is inferred from the arguments when you call it.',
          'Generics only accept object types: `List<int>` does not exist, you use `List<Integer>`.' ],
          code: `static <T> T last(List<T> list) {\n    return list.get(list.size() - 1);\n}\n\nString s = last(List.of("a", "b", "c"));  // "c"\nInteger n = last(List.of(4, 5));          // 5` },
        { h: 'Bounds and wildcards', p: [
          '`<T extends Comparable<T>>` restricts `T` to types that can be compared, so inside you can call `compareTo`.',
          '`List<? extends Number>` accepts lists of `Number` or any subclass (`Integer`, `Double`) to read from. `List<? super Integer>` accepts lists you can put `Integer` into. A rule to remember it: extends to read, super to write.' ],
          code: `static double sum(List<? extends Number> nums) {\n    double total = 0;\n    for (Number n : nums) total += n.doubleValue();\n    return total;\n}\n\nSystem.out.println(sum(List.of(1, 2, 3)));    // 6.0\nSystem.out.println(sum(List.of(1.5, 2.5)));   // 4.0` },
        { h: 'Real example: an API response', real: true, p: [
          'Many applications always return the same wrapper: the data if all went well or an error message. With a generic, the same class works for users, orders or anything else.' ],
          code: `class Result<T> {\n    private final T data;\n    private final String error;\n\n    private Result(T data, String error) {\n        this.data = data;\n        this.error = error;\n    }\n\n    static <T> Result<T> ok(T data) { return new Result<>(data, null); }\n    static <T> Result<T> failure(String error) { return new Result<>(null, error); }\n\n    boolean isOk() { return error == null; }\n    T getData() { return data; }\n    String getError() { return error; }\n}\n\nResult<Integer> r1 = Result.ok(42);\nResult<Integer> r2 = Result.failure("User not found");\nSystem.out.println(r1.isOk() + " " + r1.getData());   // true 42\nSystem.out.println(r2.isOk() + " " + r2.getError());  // false User not found` },
      ],
      x: [
        mc('What do generics bring?', ['Type checks at compile time and no casts', 'Faster code to write without types', 'Primitive types in lists', 'Nothing, they are optional'], 'Type errors show up when compiling and not at run time.'),
        mc('What does `<>` mean in `new ArrayList<>()`?', ['The compiler infers the generic type (diamond operator)', 'The list is empty', 'The list has no type', 'It is an error'], 'The type is inferred from the variable declaration.'),
        typ('Declare the class type parameter', `class Box<___> {\n    private T content;\n}`, 'T', 'The type parameter is declared in angle brackets and then used inside the class.'),
        out(`class Box<T> {\n    T value;\n    Box(T v) { value = v; }\n}\n\nBox<String> b = new Box<>("hello");\nSystem.out.println(b.value.length());`, ['5', 'hello', 'T', 'Error'], '`T` is `String`, so `value.length()` works with no cast.'),
        fill(`class Pair<___, V> {\n    K key;\n    V value;\n}`, ['K', 'T[]', 'int', '?'], 'Every type parameter used inside is declared in the angle brackets.'),
        fill(`static <T> T first(List<___> list) {\n    return list.get(0);\n}`, ['T', '?', 'Object', 'E'], 'The method declares `<T>` and uses it in its parameters and its return type.'),
        mc('Which lists does a `List<? extends Number>` parameter accept?', ['Lists of Number or of a subclass, such as Integer or Double', 'Only List<Number>', 'Any list', 'Lists of String'], '`? extends` is an upper-bounded wildcard.'),
        out(`static <T extends Comparable<T>> T largest(List<T> list) {\n    T max = list.get(0);\n    for (T x : list) {\n        if (x.compareTo(max) > 0) max = x;\n    }\n    return max;\n}\n\nSystem.out.println(largest(List.of(3, 9, 4)) + largest(List.of("pear", "grape", "kiwi")));`, ['9pear', '3grape', '9kiwi', '13'], 'The largest number is 9 and the largest text in alphabetical order is "pear". An `Integer` plus a `String` is concatenated: "9pear".'),
      ],
    },
    // ───────────── Day 19 ─────────────
    {
      id: 'java-datetime',
      t: 'Date and time',
      d: 'java.time: LocalDate, plusDays, ChronoUnit and formats.',
      guide: [
        { h: 'The java.time package', p: [
          'Since Java 8 dates are handled with `java.time`. `LocalDate` is a date (year, month, day), `LocalTime` a time and `LocalDateTime` both together.',
          'The old `Date` and `Calendar` classes are confusing (months started at 0) and should not be used in new code.',
          'Create dates with `LocalDate.of(2025, 3, 14)` or today’s with `LocalDate.now()`. When printed they come out in ISO format: `2025-03-14`.' ],
          code: `LocalDate date = LocalDate.of(2025, 3, 14);\nLocalTime time = LocalTime.of(9, 30);\nLocalDateTime meeting = LocalDateTime.of(2025, 3, 14, 9, 30);\nSystem.out.println(date);     // 2025-03-14\nSystem.out.println(meeting);  // 2025-03-14T09:30\nSystem.out.println(date.getDayOfWeek());  // FRIDAY` },
        { h: 'Adding and subtracting: immutable dates', p: [
          '`plusDays()`, `plusMonths()`, `minusWeeks()` and similar return a new date; the original does not change. If you do not store the result, it is lost (just like with Strings).',
          'java.time handles month changes and leap years: 31 January plus one month gives the last day of February.' ],
          code: `LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusDays(1));    // 2024-02-01\nSystem.out.println(d.plusMonths(1));  // 2024-02-29\nd.plusYears(1);                       // result lost\nSystem.out.println(d);                // 2024-01-31` },
        { h: 'Differences between dates', p: [
          '`ChronoUnit.DAYS.between(a, b)` gives the days from `a` to `b` (negative if `b` is earlier). There are also `MONTHS`, `YEARS`, `HOURS`...',
          '`Period.between(a, b)` gives the difference in years, months and days, handy for working out ages. For hours and minutes you use `Duration`.' ],
          code: `LocalDate birth = LocalDate.of(1995, 6, 20);\nLocalDate today = LocalDate.of(2025, 3, 14);\nSystem.out.println(Period.between(birth, today).getYears());  // 29\nSystem.out.println(ChronoUnit.DAYS.between(\n    LocalDate.of(2025, 1, 1), LocalDate.of(2025, 2, 1)));     // 31` },
        { h: 'Formatting and parsing dates', p: [
          '`DateTimeFormatter.ofPattern("dd/MM/yyyy")` defines a format: `dd` day, `MM` month (`mm` would be minutes), `yyyy` year, `HH` hour.',
          '`date.format(f)` turns the date into text and `LocalDate.parse(text, f)` does the opposite.' ],
          code: `DateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nLocalDate d = LocalDate.parse("25/12/2025", f);\nSystem.out.println(d);            // 2025-12-25\nSystem.out.println(d.format(f));  // 25/12/2025` },
        { h: 'Real example: an invoice due date', real: true, p: [
          'An invoice is paid 30 days after it is issued. The program works out the due date and how many days late the payment is.' ],
          code: `LocalDate issued = LocalDate.of(2025, 3, 14);\nLocalDate due = issued.plusDays(30);\nLocalDate today = LocalDate.of(2025, 4, 20);\nlong late = ChronoUnit.DAYS.between(due, today);\n\nDateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nSystem.out.println("Due on " + due.format(f));  // Due on 13/04/2025\nSystem.out.println("Days late: " + late);       // Days late: 7` },
      ],
      x: [
        mc('Which class represents only a date, with no time?', ['LocalDate', 'LocalTime', 'LocalDateTime', 'Calendar'], '`LocalDate` stores year, month and day.'),
        out(`LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusDays(1));`, ['2024-02-01', '2024-01-32', '2024-01-01', 'Error'], 'java.time handles the change of month automatically.'),
        out(`LocalDate d = LocalDate.of(2024, 5, 9);\nSystem.out.println(d.getMonthValue());`, ['5', '9', 'MAY', '2024'], '`getMonthValue()` gives the month number; `getMonth()` would give MAY.'),
        fill(`DateTimeFormatter f = DateTimeFormatter.___("dd/MM/yyyy");`, ['ofPattern', 'format', 'pattern', 'of'], '`ofPattern` creates a formatter from a pattern.'),
        out(`LocalDate d = LocalDate.of(2024, 3, 1);\nd.plusDays(5);\nSystem.out.println(d);`, ['2024-03-01', '2024-03-06', '2024-03-05', 'Error'], 'Dates are immutable: `plusDays` returns another date that is not stored here.'),
        out(`long n = ChronoUnit.DAYS.between(\n    LocalDate.of(2024, 1, 1),\n    LocalDate.of(2024, 1, 11));\nSystem.out.println(n);`, ['10', '11', '1', 'Error'], 'From 1 to 11 January there are 10 days: the first counts and the last does not.'),
        out(`LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusMonths(1));`, ['2024-02-29', '2024-02-31', '2024-03-02', '2024-03-01'], '31 February does not exist, so it is adjusted to the last day of the month. 2024 is a leap year: 29.'),
        out(`LocalDate start = LocalDate.of(2025, 12, 30);\nLocalDate end = start.plusDays(5);\nDateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nSystem.out.println(end.format(f) + " " + end.getYear());`, ['04/01/2026 2026', '35/12/2025 2025', '04/01/2026 2025', '01/04/2026 2026'], 'Five days after 30 December is 4 January of the next year. The pattern puts the day first.'),
      ],
    },
    // ───────────── Day 20 ─────────────
    {
      id: 'java-regex',
      t: 'Regular expressions',
      d: 'Pattern, Matcher, matches, replaceAll and split.',
      guide: [
        { h: 'What is a regular expression', p: [
          'A regular expression (regex) describes a text pattern: "five digits", "something with an at sign in the middle", "a word starting with a capital". It is used to validate, search and replace.',
          '`text.matches(regex)` returns `true` only if the whole text fits the pattern, not if it contains it somewhere.' ],
          code: `System.out.println("90210".matches("\\\\d{5}"));     // true\nSystem.out.println("902".matches("\\\\d{5}"));       // false\nSystem.out.println("ZIP 90210".matches("\\\\d{5}")); // false: "ZIP " is extra` },
        { h: 'The basic syntax', p: [
          '`.` is any character, `\\d` a digit, `\\w` a letter, digit or underscore and `\\s` a space. `[abc]` is one of those characters and `[a-z]` a range.',
          'Quantifiers say how many times: `+` one or more, `*` zero or more, `?` zero or one and `{2,4}` between two and four.',
          'In a Java String the backslash is an escape character, so it is written twice: the regex `\\d+` is written `"\\\\d+"`.' ] },
        { h: 'Pattern and Matcher: finding matches', p: [
          '`Pattern.compile(regex)` prepares the pattern and `pattern.matcher(text)` creates a `Matcher` that goes through it. Each `find()` moves to the next match and `group()` returns it.',
          'Parentheses create groups you can read separately with `group(1)`, `group(2)`... Compile the `Pattern` once and reuse it if you will use it many times.' ],
          code: `Pattern p = Pattern.compile("(\\\\d{2}):(\\\\d{2})");\nMatcher m = p.matcher("Opens at 09:30 and closes at 21:00");\nwhile (m.find()) {\n    System.out.println(m.group() + " -> hour " + m.group(1));\n}\n// 09:30 -> hour 09\n// 21:00 -> hour 21` },
        { h: 'replaceAll and split', p: [
          '`replaceAll(regex, replacement)` replaces every match and `split(regex)` cuts the text by the pattern.',
          'Careful: `split(".")` does not split by dots, because `.` means "any character". For a literal dot write `split("\\\\.")`.' ],
          code: `String phone = "555-12 34-56";\nSystem.out.println(phone.replaceAll("[^0-9]", ""));  // 555123456\n\nString[] parts = "one, two,three".split(",\\\\s*");\nSystem.out.println(parts.length);                    // 3` },
        { h: 'Real example: validating and extracting data from text', real: true, p: [
          'A form checks that the ZIP code has 5 digits, and a receipt reader adds up the amounts that appear in the text in the format "€1.50".' ],
          code: `String zip = "90210";\nSystem.out.println(zip.matches("\\\\d{5}"));   // true\n\nPattern price = Pattern.compile("€(\\\\d+\\\\.\\\\d{2})");\nMatcher m = price.matcher("Coffee €1.50 and toast €2.25");\ndouble total = 0;\nwhile (m.find()) {\n    total += Double.parseDouble(m.group(1));\n}\nSystem.out.println(total);  // 3.75` },
      ],
      x: [
        mc('Which class compiles a regular expression in Java?', ['Pattern', 'Regex', 'RegExp', 'Matcher'], '`Pattern.compile` creates the pattern; the `Matcher` is obtained afterwards with `pattern.matcher(text)`.'),
        out(`System.out.println("12345".matches("\\\\d+"));`, ['true', 'false', '12345', 'Error'], '`\\d+` requires the whole text to be one or more digits, and it is.'),
        out(`System.out.println("Java".matches("[A-Z].*"));`, ['true', 'false', 'J', 'Error'], 'It starts with a capital letter and `.*` accepts the rest.'),
        mc('Why is the expression `\\d+` written `"\\\\d+"` in Java?', ['Because the backslash is the String escape character and has to be doubled', 'Because Java regexes use two backslashes', 'Because that way it looks for two digits', 'It is optional, both forms are the same'], 'The String `"\\\\d+"` contains the text `\\d+`, which is what the regex engine receives.'),
        out(`System.out.println("a1b22c".replaceAll("\\\\d+", "-"));`, ['a-b-c', 'a-b--c', 'abc', 'a1b22c'], 'Each run of consecutive digits is replaced by a single hyphen.'),
        out(`String[] p = "one, two,three".split(",\\\\s*");\nSystem.out.println(p.length);`, ['3', '2', '4', '1'], 'It is cut at each comma followed by zero or more spaces.'),
        fill(`Matcher m = Pattern.compile("[a-z]+").matcher("Hello World");\nwhile (m.___()) {\n    System.out.println(m.group());\n}`, ['find', 'next', 'matches', 'search'], '`find()` moves to the next match and `group()` returns it.'),
        out(`Matcher m = Pattern.compile("(\\\\w+)@(\\\\w+)\\\\.com")\n    .matcher("ana@gmail.com, luis@yahoo.com");\nString r = "";\nwhile (m.find()) {\n    r += m.group(2).toUpperCase() + " ";\n}\nSystem.out.println(r.trim());`, ['GMAIL YAHOO', 'ANA LUIS', 'gmail yahoo', 'GMAIL'], 'There are two matches and group 2 is the domain, without ".com". They are turned into capitals and `trim` removes the final space.'),
      ],
    },
    // ───────────── Day 21 ─────────────
    {
      id: 'java-files',
      t: 'Files',
      d: 'java.nio: Path, Files, reading, writing and going through large files.',
      guide: [
        { h: 'Paths with Path', p: [
          'Since Java 7 files are handled with the `java.nio.file` package. A path is represented by `Path` and created with `Path.of(...)`, which joins the parts with the right separator for the system (`/` or `\\`).',
          '`getFileName()` gives the file name, `getParent()` the folder that contains it and `toAbsolutePath()` the full path. Creating a `Path` does not create any file: it only describes where it would be.' ],
          code: `Path path = Path.of("data", "2025", "sales.csv");\nSystem.out.println(path);                // data/2025/sales.csv\nSystem.out.println(path.getFileName());  // sales.csv\nSystem.out.println(path.getParent());    // data/2025` },
        { h: 'Reading and writing text with Files', p: [
          'The `Files` class has static methods for almost everything: `writeString` writes a text, `readString` reads it all and `readAllLines` returns a `List<String>` with each line.',
          'By default `writeString` overwrites the file. To append, pass `StandardOpenOption.APPEND`. Almost every method throws `IOException`, a checked exception you must catch or declare with `throws`.' ],
          code: `Path notes = Path.of("notes.txt");\nFiles.writeString(notes, "Buy bread\\n");\nFiles.writeString(notes, "Call the doctor\\n", StandardOpenOption.APPEND);\n\nList<String> lines = Files.readAllLines(notes);\nSystem.out.println(lines.size());  // 2\nSystem.out.println(lines.get(1));  // Call the doctor` },
        { h: 'Large files: line by line', p: [
          '`readAllLines` loads the whole file into memory. With a log of several gigabytes that is a problem: use `Files.lines(path)`, which returns a `Stream<String>` and reads lines as it needs them.',
          'That stream keeps the file open, so it always goes inside a try-with-resources so it is closed when done.' ],
          code: `try (Stream<String> lines = Files.lines(Path.of("server.log"))) {\n    long errors = lines.filter(l -> l.contains("ERROR")).count();\n    System.out.println("Errors: " + errors);\n} catch (IOException e) {\n    System.out.println("Could not read the log: " + e.getMessage());\n}` },
        { h: 'Folders and checks', p: [
          '`Files.exists(path)` tells you whether something exists, `Files.isDirectory(path)` whether it is a folder and `Files.size(path)` how many bytes it takes up.',
          '`Files.createDirectories(path)` creates the folder and any missing parent folders, without failing if they already exist. `Files.copy`, `Files.move` and `Files.delete` do what their names say.' ],
          code: `Path folder = Path.of("reports", "2025", "march");\nFiles.createDirectories(folder);\nPath report = folder.resolve("summary.txt");\nFiles.writeString(report, "Sales: €1200");\nSystem.out.println(Files.exists(report));  // true\nSystem.out.println(Files.size(report));    // bytes it takes up` },
        { h: 'Real example: adding up the expenses in a CSV', real: true, p: [
          'Your bank lets you download your transactions as a CSV with the header `item,amount`. The program skips the header, splits each line at the comma and adds up the amounts.' ],
          code: `Path csv = Path.of("expenses.csv");\nFiles.writeString(csv, "item,amount\\nrent,650\\npower,48.30\\ngroceries,212.45\\n");\n\ndouble total = 0;\nList<String> lines = Files.readAllLines(csv);\nfor (String line : lines.subList(1, lines.size())) {\n    String[] parts = line.split(",");\n    total += Double.parseDouble(parts[1]);\n}\nSystem.out.printf("Spent this month: %.2f €%n", total);  // Spent this month: 910.75 € (depends on the system locale)` },
      ],
      x: [
        mc('Which type represents a file path in `java.nio.file`?', ['Path', 'Route', 'FilePath', 'Directory'], '`Path.of("a", "b.txt")` builds a path by joining the parts with the system separator.'),
        fill(`String text = Files.___(Path.of("notes.txt"));  // the whole content`, ['readString', 'read', 'readAll', 'open'], '`readString` returns the whole content of the file as a `String`.'),
        mc('Which checked exception do almost all `Files` methods throw?', ['IOException', 'FileException', 'NullPointerException', 'RuntimeException'], 'Since it is checked, you must catch it with `try/catch` or declare it with `throws IOException`.'),
        out(`Path p = Path.of("docs", "2025", "report.pdf");\nSystem.out.println(p.getFileName());`, ['report.pdf', 'docs', '2025/report.pdf', 'report'], '`getFileName()` returns the last element of the path, with its extension.'),
        mc('What does `Files.writeString(path, text, StandardOpenOption.APPEND)` do?', ['Adds the text at the end without wiping what was there', 'Overwrites the file', 'Throws an error if the file exists', 'Makes a copy of the file'], 'Without `APPEND`, `writeString` replaces the previous content.'),
        typ('Create the folder and any missing parent folders', `Files.___(Path.of("reports", "2025", "march"));`, 'createDirectories', '`createDirectories` creates the whole path and does not fail if it exists. `createDirectory`, singular, only creates the last one.'),
        ord('Read all the lines of the file into a list', ['List<String>', 'lines', '=', 'Files', '.', 'readAllLines', '(', 'path', ')', ';'], ['readLines', 'File'], '`Files.readAllLines(path)` returns a `List<String>` with one entry per line.'),
        out(`Path p = Path.of("t.txt");\nFiles.writeString(p, "one\\ntwo\\n");\nFiles.writeString(p, "three\\n", StandardOpenOption.APPEND);\nList<String> lines = Files.readAllLines(p);\nSystem.out.println(lines.size() + " " + lines.get(lines.size() - 1));`, ['3 three', '2 three', '1 three', '3 one'], 'The first write leaves two lines and the second appends "three". `readAllLines` strips the line breaks.'),
      ],
    },
    // ───────────── Day 22 ─────────────
    {
      id: 'java-lambdas',
      t: 'Lambdas',
      d: 'Functional interfaces, Function, Predicate, Consumer, Supplier and method references.',
      guide: [
        { h: 'What is a lambda', p: [
          'A lambda is a nameless function you can store in a variable or pass as an argument. It is written `(parameters) -> expression`: `x -> x * 2` takes a number and returns its double.',
          'Before Java 8 you had to write a whole anonymous class for the same thing. With lambdas, sorting a list by length fits on one line.' ],
          code: `List<String> names = new ArrayList<>(List.of("Eva", "Alexander", "Luis"));\n\n// Before: anonymous class\nnames.sort(new Comparator<String>() {\n    public int compare(String a, String b) { return a.length() - b.length(); }\n});\n\n// Now: lambda\nnames.sort((a, b) -> a.length() - b.length());\nSystem.out.println(names);  // [Eva, Luis, Alexander]` },
        { h: 'Functional interfaces', p: [
          'A lambda always implements a functional interface: an interface with a single abstract method. `Comparator`, `Runnable` and the ones in `java.util.function` are examples.',
          'The most used: `Function<T, R>` takes a T and returns an R (`apply`), `Predicate<T>` returns a boolean (`test`), `Consumer<T>` takes a value and returns nothing (`accept`) and `Supplier<T>` takes nothing and returns a T (`get`).' ],
          code: `Function<String, Integer> length = s -> s.length();\nPredicate<Integer> isEven = n -> n % 2 == 0;\nConsumer<String> greet = s -> System.out.println("Hello, " + s);\nSupplier<Double> random = () -> Math.random();\n\nSystem.out.println(length.apply("Java"));  // 4\nSystem.out.println(isEven.test(7));        // false\ngreet.accept("Ana");                       // Hello, Ana` },
        { h: 'Method references', p: [
          'When the lambda only calls a method that already exists, you can write a reference with `::`. `s -> s.toUpperCase()` becomes `String::toUpperCase`.',
          'There are four forms: a static method (`Integer::parseInt`), a method of a specific object (`System.out::println`), an instance method of the type (`String::length`) and a constructor (`ArrayList::new`).' ],
          code: `List<String> numbers = List.of("3", "10", "7");\nnumbers.stream()\n       .map(Integer::parseInt)\n       .forEach(System.out::println);\n// 3\n// 10\n// 7` },
        { h: 'Captured variables and composition', p: [
          'A lambda can use local variables from outside, but only if they are effectively final: not changed after being assigned. That is why `total += x` inside a lambda does not compile.',
          'Functions can be chained: `f.andThen(g)` applies `f` first and then `g`; `f.compose(g)` applies `g` first. Predicates combine with `and`, `or` and `negate`.' ],
          code: `Predicate<String> isLong = s -> s.length() > 5;\nPredicate<String> startsWithA = s -> s.startsWith("A");\nPredicate<String> both = isLong.and(startsWithA);\n\nSystem.out.println(both.test("Alexander"));  // true\nSystem.out.println(both.test("Ana"));        // false` },
        { h: 'Real example: sorting a catalogue', real: true, p: [
          'A shop shows its products sorted by price and, when they tie, by name. `Comparator.comparing` with method references says it almost like a sentence.' ],
          code: `record Product(String name, double price) {}\n\nList<Product> catalogue = new ArrayList<>(List.of(\n    new Product("Keyboard", 25.0),\n    new Product("Mouse pad", 9.9),\n    new Product("Mouse", 25.0)));\n\ncatalogue.sort(Comparator.comparing(Product::price)\n                         .thenComparing(Product::name));\ncatalogue.forEach(p -> System.out.println(p.name() + " " + p.price()));\n// Mouse pad 9.9\n// Keyboard 25.0\n// Mouse 25.0` },
      ],
      x: [
        mc('What is a functional interface?', ['An interface with a single abstract method', 'An interface with no methods', 'A class with static methods', 'Any interface that extends Function'], 'That is why a lambda can implement it: there is only one method to fill in.'),
        out(`Function<Integer, Integer> twice = x -> x * 2;\nSystem.out.println(twice.apply(7));`, ['14', '7', 'x * 2', 'Error'], '`apply` runs the function with the argument 7.'),
        out(`Predicate<String> isLong = s -> s.length() > 4;\nSystem.out.println(isLong.test("Java") + " " + isLong.test("Python"));`, ['false true', 'true true', 'true false', 'false false'], '"Java" has 4 letters (not more than 4) and "Python" has 6.'),
        fill(`List.of("a", "b").forEach(System.out___println);`, ['::', '.', '->', ':'], '`System.out::println` is a reference to the `println` method of the `System.out` object.'),
        mc('Which interface takes nothing and returns a value?', ['Supplier<T>', 'Consumer<T>', 'Predicate<T>', 'Function<T, R>'], '`Supplier` has the `get()` method. `Consumer` does exactly the opposite: it takes and returns nothing.'),
        out(`BiFunction<Integer, Integer, Integer> power = (b, e) -> (int) Math.pow(b, e);\nSystem.out.println(power.apply(2, 5));`, ['32', '10', '25', '7'], '`BiFunction` takes two arguments: 2 to the power of 5 is 32.'),
        mc('Why does `int total = 0; list.forEach(x -> total += x);` not compile?', ['Lambdas can only use effectively final local variables', 'forEach does not accept lambdas', 'total should be a long', 'A return is missing'], 'To add up, use a stream: `list.stream().mapToInt(Integer::intValue).sum()`.'),
        out(`Function<Integer, Integer> add3 = x -> x + 3;\nFunction<Integer, Integer> twice = x -> x * 2;\nSystem.out.println(add3.andThen(twice).apply(4) + " " + add3.compose(twice).apply(4));`, ['14 11', '11 14', '14 14', '25'], '`andThen` adds first and doubles after: (4 + 3) * 2 = 14. `compose` doubles first: 4 * 2 + 3 = 11.'),
      ],
    },
    // ───────────── Day 23 ─────────────
    {
      id: 'java-streams',
      t: 'Streams',
      d: 'filter, map, sorted, reduce, collect, grouping and lazy evaluation.',
      guide: [
        { h: 'What is a stream', p: [
          'A stream is a pipeline of operations over a sequence of data: a source (`list.stream()`), zero or more intermediate operations (`filter`, `map`...) and a terminal operation that produces the result (`toList`, `count`...).',
          'A stream does not modify the original collection and can only be consumed once. It describes what you want to get instead of how to go through the data step by step.' ],
          code: `List<Integer> numbers = List.of(5, 12, 8, 21, 3);\nList<Integer> result = numbers.stream()\n    .filter(n -> n > 4)    // 5, 12, 8, 21\n    .map(n -> n * 10)      // 50, 120, 80, 210\n    .sorted()\n    .toList();\nSystem.out.println(result);   // [50, 80, 120, 210]\nSystem.out.println(numbers);  // [5, 12, 8, 21, 3]` },
        { h: 'Intermediate operations', p: [
          '`filter` keeps the items that match a predicate, `map` transforms each one, `sorted` sorts, `distinct` removes repeats, `limit(n)` keeps the first n and `skip(n)` skips the first n.',
          'They are lazy: they do nothing until the terminal operation appears. Thanks to that, `limit` can cut a huge stream without processing it all.' ],
          code: `List<String> top = Stream.of("pear", "kiwi", "pear", "grape", "melon", "kiwi")\n    .distinct()\n    .sorted()\n    .limit(3)\n    .toList();\nSystem.out.println(top);  // [grape, kiwi, melon]` },
        { h: 'Terminal operations', p: [
          '`count()` counts, `toList()` creates a list, `forEach` does something per item and `anyMatch`/`allMatch` check conditions.',
          'For numbers use `mapToInt` and you get `sum()`, `average()` and `max()`. `reduce` combines every item into one with an operation you choose.' ],
          code: `List<Integer> marks = List.of(7, 4, 9, 6);\nint sum = marks.stream().mapToInt(Integer::intValue).sum();\ndouble average = marks.stream().mapToInt(Integer::intValue).average().orElse(0);\nint product = marks.stream().reduce(1, (a, b) -> a * b);\nboolean allPassed = marks.stream().allMatch(n -> n >= 5);\nSystem.out.println(sum + " " + average + " " + product + " " + allPassed);\n// 26 6.5 1512 false` },
        { h: 'Collectors: joining and grouping', p: [
          '`collect` with the `Collectors` class builds richer results: `joining(", ")` joins texts, `groupingBy` groups into a `Map` and `counting()` or `summingInt` summarise each group.',
          'If you want the map sorted by key, ask for a `TreeMap` in `groupingBy`.' ],
          code: `List<String> cities = List.of("Leeds", "London", "Bristol", "Liverpool", "Bath");\nMap<Character, List<String>> byInitial = cities.stream()\n    .collect(Collectors.groupingBy(c -> c.charAt(0), TreeMap::new, Collectors.toList()));\nSystem.out.println(byInitial);\n// {B=[Bristol, Bath], L=[Leeds, London, Liverpool]}\n\nSystem.out.println(String.join(" | ", cities.subList(0, 2)));  // Leeds | London` },
        { h: 'Real example: a shop’s order summary', real: true, p: [
          'From the day’s list of orders, the shop wants to know how much each customer spent and who the best customer is. With streams it is two expressions.' ],
          code: `record Order(String customer, double amount) {}\n\nList<Order> orders = List.of(\n    new Order("Ana", 30.0), new Order("Luis", 12.5),\n    new Order("Ana", 18.0), new Order("Eva", 45.0));\n\nMap<String, Double> byCustomer = orders.stream()\n    .collect(Collectors.groupingBy(Order::customer, TreeMap::new,\n             Collectors.summingDouble(Order::amount)));\nSystem.out.println(byCustomer);  // {Ana=48.0, Eva=45.0, Luis=12.5}\n\nString best = byCustomer.entrySet().stream()\n    .max(Map.Entry.comparingByValue())\n    .map(Map.Entry::getKey)\n    .orElse("nobody");\nSystem.out.println("Best customer: " + best);  // Best customer: Ana` },
      ],
      x: [
        mc('What does `filter` do in a stream?', ['Keeps the items that meet a condition', 'Transforms each item', 'Sorts the items', 'Adds up the items'], 'To transform you use `map`.'),
        out(`List<Integer> r = List.of(1, 2, 3, 4).stream()\n    .map(n -> n * n)\n    .toList();\nSystem.out.println(r);`, ['[1, 4, 9, 16]', '[1, 2, 3, 4]', '[2, 4, 6, 8]', '30'], '`map` squares each number and `toList` collects the result.'),
        out(`long n = Stream.of("ana", "luis", "eva", "leo")\n    .filter(s -> s.length() == 3)\n    .count();\nSystem.out.println(n);`, ['3', '4', '1', '2'], 'Only "luis" has more than 3 letters.'),
        fill(`int total = List.of(5, 10, 15).stream()\n    .mapToInt(Integer::intValue)\n    .___();`, ['sum', 'total', 'add', 'reduce'], '`mapToInt` gives an `IntStream`, which has `sum()`. `reduce` would work too, but it needs arguments.'),
        out(`String s = Stream.of("a", "b", "c").collect(Collectors.joining("-"));\nSystem.out.println(s);`, ['a-b-c', 'abc', '[a, b, c]', 'a-b-c-'], '`joining` puts the separator only between items, not at the end.'),
        mc('What happens to a stream that only has intermediate operations, with no terminal one?', ['Nothing runs: intermediate operations are lazy', 'It runs anyway', 'It throws an exception', 'It returns null'], 'The work starts when the terminal operation arrives.'),
        out(`System.out.println(Stream.of(3, 1, 3, 2, 1).distinct().sorted().toList());`, ['[1, 2, 3]', '[3, 1, 2]', '[1, 1, 2, 3, 3]', '[3, 2, 1]'], '`distinct` leaves 3, 1 and 2 and `sorted` puts them in order.'),
        out(`List<String> words = List.of("sun", "sea", "moon", "cloud", "sky");\nMap<Integer, Long> byLength = words.stream()\n    .collect(Collectors.groupingBy(String::length, TreeMap::new, Collectors.counting()));\nSystem.out.println(byLength);`, ['{3=3, 4=1, 5=1}', '{3=2, 4=1, 5=1}', '{sun=3, sea=3, moon=4, cloud=5, sky=3}', '[3, 4, 5]'], '"sun", "sea" and "sky" have 3 letters, "moon" 4 and "cloud" 5. `counting()` counts how many are in each group and the `TreeMap` sorts the keys.'),
      ],
    },
    // ───────────── Day 24 ─────────────
    {
      id: 'java-optional',
      t: 'Optional and records',
      d: 'Values that may be missing without null, and immutable data classes in one line.',
      guide: [
        { h: 'The problem with null', p: [
          'A method that looks for something may not find it. If it returns `null` and the caller does not check, the program fails with `NullPointerException`, Java’s most common error.',
          '`Optional<T>` is a box that holds a value or is empty. The return type already warns that the result may be missing, and the compiler makes you decide what to do.' ],
          code: `Optional<String> full = Optional.of("Ana");\nOptional<String> empty = Optional.empty();\nOptional<String> maybe = Optional.ofNullable(null);  // empty\n\nSystem.out.println(full.isPresent());   // true\nSystem.out.println(maybe.isEmpty());    // true` },
        { h: 'Using an Optional without get()', p: [
          '`orElse(value)` gives the content or a default, `orElseGet(() -> ...)` computes the default only when needed and `orElseThrow()` throws an exception if it is empty.',
          '`map` transforms the content if there is one and `ifPresent` runs something only when there is a value. Avoid `get()` without checking: it brings back the null problem. Optional is meant for return types, not for attributes or parameters.' ],
          code: `Optional<String> email = Optional.of("  ANA@MAIL.COM ");\nString clean = email.map(String::trim)\n                    .map(String::toLowerCase)\n                    .orElse("no email");\nSystem.out.println(clean);  // ana@mail.com\n\nOptional.<String>empty().ifPresent(System.out::println);  // prints nothing` },
        { h: 'Records: data classes in one line', p: [
          'A `record` declares a class whose only purpose is to hold data. With `record Point(int x, int y) {}` Java generates the constructor, the accessors `x()` and `y()`, `equals`, `hashCode` and `toString`.',
          'The fields are `final`: a record is immutable. To "change" a value you create another record.' ],
          code: `record Point(int x, int y) {}\n\nPoint p = new Point(3, 4);\nSystem.out.println(p);                          // Point[x=3, y=4]\nSystem.out.println(p.x() + p.y());              // 7\nSystem.out.println(p.equals(new Point(3, 4)));  // true` },
        { h: 'Validating and adding methods', p: [
          'The compact constructor (with no parentheses) lets you validate the data before storing it: if something is wrong, it throws an exception and the object never exists.',
          'A record can have its own methods and static methods, and implement interfaces. What it cannot do is extend another class or have extra instance attributes.' ],
          code: `record Price(double amount, String currency) {\n    Price {\n        if (amount < 0) throw new IllegalArgumentException("Negative amount");\n    }\n\n    Price withVat() { return new Price(amount * 1.21, currency); }\n}\n\nSystem.out.println(new Price(100, "EUR").withVat());  // Price[amount=121.0, currency=EUR]` },
        { h: 'Real example: finding a user by email', real: true, p: [
          'A user repository returns `Optional<User>`: the caller sees in the signature that the user may not exist and decides what to answer, with no risk of `NullPointerException`.' ],
          code: `record User(String email, String name) {}\n\nclass UserRepository {\n    private final List<User> users = List.of(\n        new User("ana@mail.com", "Ana"),\n        new User("luis@mail.com", "Luis"));\n\n    Optional<User> findByEmail(String email) {\n        return users.stream().filter(u -> u.email().equals(email)).findFirst();\n    }\n}\n\nUserRepository repo = new UserRepository();\nSystem.out.println(repo.findByEmail("ana@mail.com").map(User::name).orElse("Guest"));  // Ana\nSystem.out.println(repo.findByEmail("eva@mail.com").map(User::name).orElse("Guest"));  // Guest` },
      ],
      x: [
        mc('What is `Optional` for?', ['Representing a value that may be missing without using null', 'Making method parameters optional', 'Catching exceptions', 'Creating empty lists'], 'The return type makes it clear the result may not exist.'),
        out(`Optional<String> o = Optional.empty();\nSystem.out.println(o.orElse("anonymous"));`, ['anonymous', 'null', 'Optional.empty', 'Error'], 'It is empty, so `orElse` returns the default value.'),
        out(`Optional<String> o = Optional.of("java");\nSystem.out.println(o.map(String::toUpperCase).orElse("-"));`, ['JAVA', 'java', '-', 'Optional[JAVA]'], '`map` transforms the content and `orElse` takes it out of the box.'),
        fill(`___ Point(int x, int y) {}`, ['record', 'class', 'struct', 'data'], '`record` generates the constructor, accessors, `equals`, `hashCode` and `toString`.'),
        out(`record Point(int x, int y) {}\nPoint p = new Point(3, 4);\nSystem.out.println(p);`, ['Point[x=3, y=4]', 'Point(3, 4)', 'Point@1b6d3586', '{x=3, y=4}'], 'A record’s `toString` shows the name and each field in square brackets.'),
        out(`record Point(int x, int y) {}\nSystem.out.println(new Point(1, 2).equals(new Point(1, 2)));`, ['true', 'false', 'Error', 'null'], 'Records compare by content: two points with the same values are equal.'),
        mc('How do you read the field `x` of a record `Point p`?', ['p.x()', 'p.getX()', 'p.x', 'p.get("x")'], 'A record’s accessors have the same name as the field, without the get prefix.'),
        out(`record Product(String name, double price) {\n    Product {\n        if (price < 0) throw new IllegalArgumentException("negative price");\n    }\n}\nList<Product> list = List.of(new Product("bread", 1.2), new Product("cheese", 4.5));\nOptional<Product> pricey = list.stream().filter(p -> p.price() > 5).findFirst();\nSystem.out.println(pricey.map(Product::name).orElse("none") + " " + list.get(1).price());`, ['none 4.5', 'cheese 4.5', 'null 4.5', 'none 1.2'], 'No product costs more than 5, so `findFirst` gives an empty Optional and "none" is used. The second product costs 4.5.'),
      ],
    },
    // ───────────── Day 25 ─────────────
    {
      id: 'java-enums',
      t: 'Enums and modern switch',
      d: 'enum with attributes and methods, values, ordinal and switch with arrows and yield.',
      guide: [
        { h: 'What is an enum', p: [
          'An `enum` is a type with a fixed set of values: the days of the week, the states of an order, the suits of a deck of cards. The compiler stops you from using a value that is not in the list.',
          '`values()` returns every value, `name()` its name as text, `ordinal()` its position (starting at 0) and `valueOf("TEXT")` turns a text into the enum value.' ],
          code: `enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }\n\nDay today = Day.FRIDAY;\nSystem.out.println(today);                  // FRIDAY\nSystem.out.println(today.ordinal());        // 4\nSystem.out.println(Day.values().length);    // 7\nSystem.out.println(Day.valueOf("MONDAY"));  // MONDAY` },
        { h: 'Enums with attributes and methods', p: [
          'Each enum value is an object, so it can have attributes, a constructor (always private) and methods. It is ideal for fixed data tied to each option.',
          'Compare enums with `==`: each value exists only once.' ],
          code: `enum Plan {\n    BASIC(5.99, 1), FAMILY(13.99, 4), PREMIUM(17.99, 6);\n\n    private final double price;\n    private final int screens;\n\n    Plan(double price, int screens) {\n        this.price = price;\n        this.screens = screens;\n    }\n\n    double pricePerScreen() { return price / screens; }\n}\n\nSystem.out.printf("%.2f%n", Plan.FAMILY.pricePerScreen());  // 3.50` },
        { h: 'switch with arrows', p: [
          'Since Java 14, `case X -> ...` runs only that branch: there is no "fall through" to the next case and no `break` is needed. One `case` accepts several values separated by commas.',
          'A switch can also be an expression that returns a value. If a branch needs several lines, open a block and return the value with `yield`. With enums, the compiler warns you if a case is missing.' ],
          code: `Day d = Day.SATURDAY;\nString type = switch (d) {\n    case SATURDAY, SUNDAY -> "weekend";\n    case FRIDAY -> {\n        System.out.println("Almost!");\n        yield "weekday";\n    }\n    default -> "weekday";\n};\nSystem.out.println(type);  // weekend` },
        { h: 'The classic switch and its trap', p: [
          'In the classic switch with colons, if a `case` does not end in `break`, execution continues into the next one (fall-through). It is a classic source of bugs.',
          'In new code use arrows. Since Java 21, `switch` also accepts type patterns: `case Integer i -> ...`.' ],
          code: `Object value = 42;\nString description = switch (value) {\n    case Integer i when i > 10 -> "large integer: " + i;\n    case Integer i -> "integer: " + i;\n    case String s -> "text of " + s.length() + " letters";\n    default -> "something else";\n};\nSystem.out.println(description);  // large integer: 42` },
        { h: 'Real example: the states of an order', real: true, p: [
          'An online shop tracks which state each order is in. The enum defines the possible states and a method decides the next one, so nobody can skip steps.' ],
          code: `enum Status {\n    PENDING, PAID, SHIPPED, DELIVERED;\n\n    Status next() {\n        return switch (this) {\n            case PENDING -> PAID;\n            case PAID -> SHIPPED;\n            case SHIPPED, DELIVERED -> DELIVERED;\n        };\n    }\n}\n\nStatus s = Status.PENDING;\nfor (int i = 0; i < 3; i++) {\n    s = s.next();\n    System.out.println(s);\n}\n// PAID\n// SHIPPED\n// DELIVERED` },
      ],
      x: [
        mc('What is an enum?', ['A type with a fixed set of values', 'A list that can grow', 'A kind of number', 'An interface'], 'The compiler only accepts the declared values.'),
        out(`enum Color { RED, GREEN, BLUE }\nSystem.out.println(Color.BLUE.ordinal());`, ['2', '3', '1', 'BLUE'], '`ordinal()` starts at 0: RED is 0, GREEN 1 and BLUE 2.'),
        out(`enum Color { RED, GREEN, BLUE }\nSystem.out.println(Color.values().length + " " + Color.valueOf("GREEN"));`, ['3 GREEN', '2 GREEN', '3 1', 'Error'], '`values()` has 3 items and `valueOf` turns the text into the enum value, which prints as its name.'),
        fill(`String type = switch (day) {\n    case SATURDAY, SUNDAY ___ "weekend";\n    default -> "weekday";\n};`, ['->', ':', '=>', '='], 'The modern switch uses arrows `->`. `=>` is JavaScript.'),
        out(`int month = 2;\nint days = switch (month) {\n    case 2 -> 28;\n    case 4, 6, 9, 11 -> 30;\n    default -> 31;\n};\nSystem.out.println(days);`, ['28', '30', '31', 'Error'], 'Month 2 goes into the first branch, and with arrows there is no fall-through to the others.'),
        mc('What sets the arrow switch apart from the classic one with colons?', ['There is no fall-through to the next case, so break is not needed', 'It only works with numbers', 'It is slower', 'It needs break in every case'], 'Each branch runs on its own, without carrying on into the next.'),
        typ('Return the value from a block inside a switch expression', `String r = switch (n) {\n    case 3 -> {\n        System.out.println("three");\n        ___ "odd";\n    }\n    default -> "other";\n};`, 'yield', 'Inside a `{ }` block of a switch expression the value is returned with `yield`, not `return`.'),
        out(`int n = 2;\nString r = "";\nswitch (n) {\n    case 1: r += "one ";\n    case 2: r += "two ";\n    case 3: r += "three ";\n        break;\n    default: r += "other";\n}\nSystem.out.println(r.trim());`, ['two three', 'two', 'two three other', 'one two three'], 'It is the classic switch: it enters `case 2` and, with no `break`, carries on into `case 3` until the `break`. It never reaches `default`.'),
      ],
    },
    // ───────────── Day 26 ─────────────
    {
      id: 'java-concurrency',
      t: 'Concurrency',
      d: 'Threads, race conditions, synchronized, AtomicInteger and ExecutorService.',
      guide: [
        { h: 'Threads', p: [
          'A thread is a line of execution. A Java program starts with the `main` thread, but it can launch others to do several things at once: download files while the interface keeps responding, serve many clients...',
          'You create a `Thread` with a lambda and start it with `start()`. Careful: calling `run()` runs the code on the current thread without creating any. `join()` waits for the thread to finish.' ],
          code: `Thread t = new Thread(() -> {\n    for (int i = 1; i <= 3; i++) System.out.println("Downloading part " + i);\n});\nt.start();          // starts in parallel\nt.join();           // waits for it to finish\nSystem.out.println("Download complete");` },
        { h: 'Race conditions', p: [
          'When two threads change the same data at the same time, the result depends on how they interleave. `counter++` looks like one operation, but it is three: read, add and write, and another thread can slip in between.',
          'The result is an intermittent bug: sometimes it works and sometimes it does not, which makes it very hard to debug.' ],
          code: `int[] counter = {0};\nRunnable add = () -> { for (int i = 0; i < 100_000; i++) counter[0]++; };\nThread a = new Thread(add), b = new Thread(add);\na.start(); b.start();\na.join(); b.join();\nSystem.out.println(counter[0]);  // almost never 200000` },
        { h: 'synchronized and atomic classes', p: [
          '`synchronized` marks a method or block that only one thread can run at a time on the same object. The others wait their turn.',
          'For counters `AtomicInteger` is simpler: `incrementAndGet()` adds safely without explicit locks. For shared collections there are `ConcurrentHashMap` and friends.' ],
          code: `AtomicInteger counter = new AtomicInteger();\nRunnable add = () -> { for (int i = 0; i < 100_000; i++) counter.incrementAndGet(); };\nThread a = new Thread(add), b = new Thread(add);\na.start(); b.start();\na.join(); b.join();\nSystem.out.println(counter.get());  // 200000, always` },
        { h: 'ExecutorService: thread pools', p: [
          'Creating threads by hand for every task is expensive. An `ExecutorService` keeps a pool of threads and hands out the tasks you send it with `submit`.',
          '`submit` returns a `Future`: its `get()` method waits for the task to finish and returns the result. When you are done, call `shutdown()`. Since Java 21, `Executors.newVirtualThreadPerTaskExecutor()` uses virtual threads, very lightweight, ideal for thousands of tasks waiting on the network.' ],
          code: `ExecutorService pool = Executors.newFixedThreadPool(2);\nFuture<Integer> f = pool.submit(() -> {\n    Thread.sleep(500);   // simulates a slow calculation\n    return 6 * 7;\n});\nSystem.out.println("Calculating...");\nSystem.out.println(f.get());  // 42\npool.shutdown();` },
        { h: 'Real example: querying several services at once', real: true, p: [
          'A travel site asks three airlines for a price. One after another it takes the sum of the times; in parallel, only as long as the slowest one.' ],
          code: `static int checkPrice(String airline) throws InterruptedException {\n    Thread.sleep(1000);                 // simulates the network call\n    return 80 + airline.length() * 5;\n}\n\nList<String> airlines = List.of("Iberia", "Vueling", "Ryanair");\ntry (ExecutorService pool = Executors.newVirtualThreadPerTaskExecutor()) {\n    List<Future<Integer>> prices = new ArrayList<>();\n    for (String a : airlines) prices.add(pool.submit(() -> checkPrice(a)));\n\n    int best = Integer.MAX_VALUE;\n    for (Future<Integer> p : prices) best = Math.min(best, p.get());\n    System.out.println("Best price: " + best + " €");  // in 1 second, not 3\n}` },
      ],
      x: [
        mc('Which method starts a new thread?', ['start()', 'run()', 'begin()', 'execute()'], '`run()` runs the code on the current thread; only `start()` creates a new one.'),
        mc('What is a race condition?', ['Two threads change data at the same time and the result depends on the order', 'A thread that runs faster than another', 'An infinite loop', 'A compile error'], 'That is why `counter++` from several threads can lose additions.'),
        fill(`AtomicInteger counter = new AtomicInteger();\ncounter.___();  // adds 1 safely`, ['incrementAndGet', '++', 'add', 'increment'], '`incrementAndGet` adds 1 and returns the new value atomically.'),
        out(`Thread t = new Thread(() -> System.out.println("thread"));\nt.start();\nt.join();\nSystem.out.println("main");`, ['thread\nmain', 'main\nthread', 'main', 'thread'], '`join()` makes `main` wait for the thread to finish, so "thread" always comes first.'),
        mc('What is `synchronized` for?', ['So only one thread at a time runs that method or block', 'To make the code faster', 'To create a new thread', 'To synchronise the system clock'], 'The other threads wait until the first one leaves.'),
        ord('Create a pool with 4 threads', ['ExecutorService', 'pool', '=', 'Executors', '.', 'newFixedThreadPool', '(', '4', ')', ';'], ['new', 'Thread'], 'Pools are created with the factory methods of `Executors`.'),
        mc('What does `future.get()` do?', ['Waits for the task to finish and returns its result', 'Cancels the task', 'Starts the task', 'Always returns null'], 'If the task threw an exception, `get()` rethrows it wrapped in an `ExecutionException`.'),
        out(`ExecutorService pool = Executors.newFixedThreadPool(3);\nList<Future<Integer>> futures = new ArrayList<>();\nfor (int i = 1; i <= 3; i++) {\n    int n = i;\n    futures.add(pool.submit(() -> n * n));\n}\nint total = 0;\nfor (Future<Integer> f : futures) total += f.get();\npool.shutdown();\nSystem.out.println(total);`, ['14', '6', '36', '9'], 'The tasks work out 1, 4 and 9 in parallel, but `get()` waits for each one: 1 + 4 + 9 = 14. `int n = i` is needed because the lambda can only use effectively final variables.'),
      ],
    },
    // ───────────── Day 27 ─────────────
    {
      id: 'java-build',
      t: 'Maven and Gradle',
      d: 'Build tools: project structure, dependencies, tests and packaging.',
      guide: [
        { h: 'Why a build tool', p: [
          'A real project has dozens of classes, external libraries, tests and a final file to deliver. Compiling all that with `javac` by hand is not workable.',
          'Maven and Gradle download the dependencies, compile, run the tests and package the result (usually a `.jar`) with a single command. They also impose a standard folder structure any developer recognises.' ],
          code: `my-project/\n├── pom.xml                (or build.gradle.kts)\n└── src/\n    ├── main/java/          application code\n    ├── main/resources/     configuration, templates...\n    └── test/java/          tests` },
        { h: 'Maven and pom.xml', p: [
          'Maven is configured in `pom.xml`. Each project and each library is identified by three coordinates: `groupId` (organisation), `artifactId` (name) and `version`.',
          'Commands follow a lifecycle: `mvn compile` compiles, `mvn test` also runs the tests and `mvn package` builds the `.jar` in the `target` folder.' ],
          code: `<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.mycompany</groupId>\n  <artifactId>shop</artifactId>\n  <version>1.0.0</version>\n\n  <dependencies>\n    <dependency>\n      <groupId>com.google.code.gson</groupId>\n      <artifactId>gson</artifactId>\n      <version>2.11.0</version>\n    </dependency>\n  </dependencies>\n</project>` },
        { h: 'Gradle', p: [
          'Gradle does the same with a script in Kotlin (`build.gradle.kts`) or Groovy, shorter than the XML. It is the standard on Android.',
          '`implementation` adds a dependency for the code and `testImplementation` one used only by the tests. The `./gradlew` wrapper downloads and uses the Gradle version fixed in the project, so the whole team builds the same way.' ],
          code: `plugins {\n    java\n    application\n}\n\nrepositories { mavenCentral() }\n\ndependencies {\n    implementation("com.google.code.gson:gson:2.11.0")\n    testImplementation("org.junit.jupiter:junit-jupiter:5.11.0")\n}\n\napplication { mainClass = "com.mycompany.shop.App" }\n\n// ./gradlew build   -> compiles, tests and packages\n// ./gradlew run     -> runs the application` },
        { h: 'Repositories and versions', p: [
          'Libraries are downloaded from Maven Central, Java’s big public repository, and kept in a local cache so they are not downloaded every time.',
          'Pin exact versions: that way the project builds the same today as in a year. Many libraries follow semantic versioning: a change in the first number (2.x to 3.x) can break your code.' ] },
        { h: 'Real example: a test with JUnit', real: true, p: [
          'With JUnit added as a test dependency, this test checks that the VAT calculation is correct. `mvn test` or `./gradlew test` run it together with all the others before packaging.' ],
          code: `// src/main/java/com/mycompany/shop/Prices.java\npublic class Prices {\n    public static double withVat(double base) {\n        return Math.round(base * 1.21 * 100) / 100.0;\n    }\n}\n\n// src/test/java/com/mycompany/shop/PricesTest.java\nimport org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\nclass PricesTest {\n    @Test\n    void addsVat() {\n        assertEquals(121.0, Prices.withVat(100));\n    }\n}` },
      ],
      x: [
        mc('Which file configures a Maven project?', ['pom.xml', 'build.gradle', 'package.json', 'maven.yml'], '`package.json` is npm (JavaScript).'),
        mc('Where does the application code go in the standard structure?', ['src/main/java', 'src/java', 'main/', 'java/src'], 'Tests go in `src/test/java`.'),
        fill(`<dependency>\n  <groupId>com.google.code.gson</groupId>\n  <___>gson</artifactId>\n  <version>2.11.0</version>\n</dependency>`, ['artifactId', 'name', 'packageId', 'module'], 'A dependency is identified by groupId, artifactId and version.'),
        ord('Clean the project and build the .jar with Maven', ['mvn', 'clean', 'package'], ['npm', 'gradle'], '`clean` deletes the `target` folder and `package` compiles, tests and packages.'),
        mc('What does `testImplementation` mean in Gradle?', ['The dependency is only available to the tests', 'It is only downloaded in production', 'It checks that the dependency works', 'It runs the tests automatically'], 'That way testing libraries do not end up inside the final `.jar`.'),
        mc('What is `./gradlew` for?', ['It runs Gradle with the version fixed in the project, without installing it separately', 'It deletes the project', 'It installs Java', 'It creates a Git repository'], 'It is the wrapper: the whole team uses the same Gradle version.'),
        typ('Add Gson as a dependency of the code', `dependencies {\n    ___("com.google.code.gson:gson:2.11.0")\n}`, 'implementation', '`implementation` is for the application code; `testImplementation`, only for tests.'),
        mc('A teammate clones your Maven project, compiles by hand with `javac` and gets "package com.google.gson does not exist". What is most likely?', ['javac does not read pom.xml or download dependencies: they should use mvn compile', 'Gson does not exist on Maven Central', 'They need to restart the computer', 'They should delete pom.xml'], 'Maven downloads the declared dependencies and puts them on the classpath when compiling; `javac` alone knows nothing about them.'),
      ],
    },
    // ───────────── Day 28 ─────────────
    {
      id: 'java-jdbc',
      t: 'JDBC and databases',
      d: 'Connections, PreparedStatement, ResultSet, SQL injection and transactions.',
      guide: [
        { h: 'What is JDBC', p: [
          'JDBC is Java’s standard API for talking to relational databases (PostgreSQL, MySQL, SQLite...). Each database provides a driver, which you add as a dependency with Maven or Gradle.',
          'The connection is opened with `DriverManager.getConnection(url, user, password)`. The URL states the database type, the server and its name. Always open the connection in a try-with-resources so it closes by itself.' ],
          code: `String url = "jdbc:postgresql://localhost:5432/shop";\ntry (Connection con = DriverManager.getConnection(url, "app", System.getenv("DB_PASSWORD"))) {\n    System.out.println("Connected: " + con.getMetaData().getDatabaseProductName());\n} catch (SQLException e) {\n    System.out.println("Connection error: " + e.getMessage());\n}` },
        { h: 'Querying with PreparedStatement', p: [
          'A `PreparedStatement` is a query with `?` placeholders filled with `setString`, `setInt`... Placeholders are numbered from 1.',
          '`executeQuery()` returns a `ResultSet`, a cursor that starts before the first row: each `next()` moves one row forward and returns `false` when there are no more. Values are read with `getString("column")`, `getInt`...' ],
          code: `String sql = "SELECT name, price FROM products WHERE price < ? ORDER BY price";\ntry (PreparedStatement ps = con.prepareStatement(sql)) {\n    ps.setDouble(1, 10.0);\n    try (ResultSet rs = ps.executeQuery()) {\n        while (rs.next()) {\n            System.out.println(rs.getString("name") + ": " + rs.getDouble("price"));\n        }\n    }\n}` },
        { h: 'Changing data and SQL injection', p: [
          '`executeUpdate()` runs INSERT, UPDATE or DELETE and returns how many rows it changed.',
          'Never build a query by concatenating text typed by the user. A name like `x\' OR \'1\'=\'1` would change the meaning of the query: that is SQL injection. With `?` the driver sends the data separately and it cannot become code.' ],
          code: `// BAD: vulnerable to SQL injection\n// String sql = "DELETE FROM users WHERE email = '" + email + "'";\n\n// GOOD\ntry (PreparedStatement ps = con.prepareStatement("UPDATE products SET price = price * 1.05 WHERE category = ?")) {\n    ps.setString(1, "drinks");\n    int rows = ps.executeUpdate();\n    System.out.println(rows + " products updated");\n}` },
        { h: 'Transactions', p: [
          'By default each statement is committed on its own (auto-commit). When several operations must all happen or none, turn it off with `setAutoCommit(false)`, confirm at the end with `commit()` and, if something fails, undo with `rollback()`.',
          'Large applications usually use JPA/Hibernate or Spring Data, which generate the SQL for you, but underneath they still use JDBC.' ] },
        { h: 'Real example: a bank transfer', real: true, p: [
          'Taking money out of one account and putting it into another has to happen completely or not at all. If the second UPDATE fails, the `rollback` gives the money back to the first account.' ],
          code: `static void transfer(Connection con, int from, int to, double amount) throws SQLException {\n    con.setAutoCommit(false);\n    try (PreparedStatement take = con.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ? AND balance >= ?");\n         PreparedStatement put = con.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?")) {\n        take.setDouble(1, amount); take.setInt(2, from); take.setDouble(3, amount);\n        if (take.executeUpdate() == 0) throw new SQLException("Insufficient funds");\n        put.setDouble(1, amount); put.setInt(2, to);\n        put.executeUpdate();\n        con.commit();\n    } catch (SQLException e) {\n        con.rollback();\n        throw e;\n    } finally {\n        con.setAutoCommit(true);\n    }\n}` },
      ],
      x: [
        mc('What is JDBC?', ['Java’s standard API for talking to relational databases', 'A database', 'A web framework', 'A query language'], 'Each database provides its own JDBC driver.'),
        fill(`PreparedStatement ps = con.prepareStatement(\n    "SELECT * FROM users WHERE email = ___");\nps.setString(1, email);`, ['?', '$email', ':email', '%s'], 'In JDBC placeholders are marked with `?` and filled with the `set...` methods.'),
        mc('Why use `PreparedStatement` instead of concatenating text into the query?', ['It prevents SQL injection by sending the data separately from the query', 'It is mandatory in MySQL', 'It makes the query asynchronous', 'For no particular reason'], 'The data is never interpreted as SQL.'),
        fill(`try (ResultSet rs = ps.executeQuery()) {\n    while (rs.___()) {\n        System.out.println(rs.getString("name"));\n    }\n}`, ['next', 'hasNext', 'read', 'fetch'], '`next()` moves to the next row and returns `false` when there are none left.'),
        mc('What does `executeUpdate()` return?', ['The number of rows affected', 'A ResultSet', 'true or false', 'Nothing'], 'It is used for INSERT, UPDATE and DELETE.'),
        ord('Fill the first placeholder of the query with the email', ['ps', '.', 'setString', '(', '1', ',', 'email', ')', ';'], ['setText', '0'], 'Placeholders are numbered from 1, not from 0.'),
        mc('What does `con.rollback()` do?', ['Undoes the changes of the current transaction', 'Confirms the changes', 'Closes the connection', 'Repeats the last query'], 'It is used in the `catch` when an operation in the transaction fails.'),
        mc('If `name` is `x\' OR \'1\'=\'1`, what happens when this query runs?', ['It returns every user: it is SQL injection', 'It always throws SQLException', 'It returns nothing', 'It looks for a user with that literal name'], 'The condition becomes `name = \'x\' OR \'1\'=\'1\'`, which is true for every row. With `PreparedStatement` and `?` this would not happen.', `String sql = "SELECT * FROM users WHERE name = '" + name + "'";\nResultSet rs = con.createStatement().executeQuery(sql);`),
      ],
    },
    // ───────────── Day 29 ─────────────
    {
      id: 'java-spring',
      t: 'REST APIs with Spring Boot',
      d: '@RestController, mappings, @PathVariable, @RequestBody, ResponseEntity and layers.',
      guide: [
        { h: 'What is Spring Boot', p: [
          'Spring is the most used framework for server-side Java applications, and Spring Boot configures almost everything for you: it brings an embedded web server, so your application starts with a simple `main`.',
          'A new project is generated at start.spring.io by choosing the "Spring Web" dependency. You run it with `./mvnw spring-boot:run` or `./gradlew bootRun` and it listens on http://localhost:8080.' ],
          code: `@SpringBootApplication\npublic class ShopApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(ShopApplication.class, args);\n    }\n}` },
        { h: 'Controllers and routes', p: [
          '`@RestController` marks a class that handles HTTP requests. Each method is mapped to a route with `@GetMapping`, `@PostMapping`, `@PutMapping` or `@DeleteMapping`.',
          'Whatever the method returns is turned into JSON automatically (with the Jackson library), using the getters or the record components.' ],
          code: `record Greeting(String message, int length) {}\n\n@RestController\npublic class GreetingController {\n    @GetMapping("/greeting")\n    public Greeting greeting(@RequestParam(defaultValue = "world") String name) {\n        String m = "Hello, " + name;\n        return new Greeting(m, m.length());\n    }\n}\n// GET /greeting?name=Ana  ->  {"message":"Hello, Ana","length":10}` },
        { h: 'Parameters, body and status codes', p: [
          '`@PathVariable` reads part of the route (`/tasks/{id}`), `@RequestParam` a URL parameter (`?q=bread`) and `@RequestBody` turns the JSON body of the request into a Java object.',
          'To choose the status code return a `ResponseEntity`: `ResponseEntity.ok(x)` gives 200, `ResponseEntity.status(HttpStatus.CREATED).body(x)` gives 201 and `ResponseEntity.notFound().build()` gives 404.' ] },
        { h: 'Layers and dependency injection', p: [
          'A tidy application separates responsibilities: the controller speaks HTTP, the service (`@Service`) holds the business logic and the repository accesses the data. With Spring Data JPA, a repository is just an interface.',
          'Spring creates those objects and wires them together: you only need to ask for them in the constructor. This constructor injection makes dependencies clear, lets them be `final` and makes them easy to replace in tests.' ],
          code: `@Service\npublic class PriceService {\n    public double withVat(double base) { return base * 1.21; }\n}\n\n@RestController\npublic class PriceController {\n    private final PriceService service;\n\n    public PriceController(PriceService service) {  // Spring injects it\n        this.service = service;\n    }\n\n    @GetMapping("/price/{base}")\n    public double price(@PathVariable double base) {\n        return service.withVat(base);\n    }\n}` },
        { h: 'Real example: a task API', real: true, p: [
          'A complete API for a to-do list: list, view one, create and delete. The data is kept in memory; moving it to a database would only affect the repository layer.' ],
          code: `record Task(long id, String title, boolean done) {}\nrecord NewTask(String title) {}\n\n@RestController\n@RequestMapping("/tasks")\npublic class TaskController {\n    private final Map<Long, Task> tasks = new ConcurrentHashMap<>();\n    private final AtomicLong nextId = new AtomicLong(1);\n\n    @GetMapping\n    public Collection<Task> list() { return tasks.values(); }\n\n    @GetMapping("/{id}")\n    public ResponseEntity<Task> show(@PathVariable long id) {\n        Task t = tasks.get(id);\n        return t == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(t);\n    }\n\n    @PostMapping\n    public ResponseEntity<Task> create(@RequestBody NewTask request) {\n        if (request.title() == null || request.title().isBlank()) return ResponseEntity.badRequest().build();\n        Task t = new Task(nextId.getAndIncrement(), request.title(), false);\n        tasks.put(t.id(), t);\n        return ResponseEntity.status(HttpStatus.CREATED).body(t);\n    }\n\n    @DeleteMapping("/{id}")\n    public ResponseEntity<Void> delete(@PathVariable long id) {\n        return tasks.remove(id) == null ? ResponseEntity.notFound().build() : ResponseEntity.noContent().build();\n    }\n}` },
      ],
      x: [
        mc('Which annotation marks a class that handles HTTP requests and answers with JSON?', ['@RestController', '@Service', '@Entity', '@Json'], '`@Service` is for business logic and `@Entity` for JPA tables.'),
        fill(`@___("/greeting")\npublic String greeting() {\n    return "Hello";\n}`, ['GetMapping', 'Get', 'Route', 'RequestGet'], '`@GetMapping` maps the method to GET requests on that route.'),
        mc('With `@GetMapping("/users/{id}")`, how does the method receive the `id`?', ['With a @PathVariable long id parameter', 'With @RequestBody long id', 'With @Param id', 'With request.get("id")'], '`@PathVariable` reads the part of the route in braces.'),
        mc('What does `@RequestBody` do?', ['Turns the JSON body of the request into a Java object', 'Returns the body as text', 'Validates the URL', 'Creates the table in the database'], 'It is used mainly on POST and PUT methods.'),
        fill(`return ResponseEntity.___(HttpStatus.CREATED).body(task);`, ['status', 'code', 'with', 'send'], '`status` sets the HTTP code and `body` the content of the response.'),
        mc('What is the advantage of constructor dependency injection?', ['Dependencies are explicit, can be final and are easy to replace in tests', 'The code runs faster', 'It does not need Spring', 'It creates each object twice'], 'Spring passes the constructor the objects the class needs.'),
        typ('Receive the q parameter from the URL /search?q=bread', `@GetMapping("/search")\npublic List<Product> search(@___ String q) {\n    return service.search(q);\n}`, 'RequestParam', '`@RequestParam` reads the parameters that come after `?` in the URL.'),
        mc('What JSON does the client get when calling GET /task?', ['{"title":"Review","done":false}', 'Task@1b6d3586', '{"getTitle":"Review","isDone":false}', '"Review"'], 'Jackson uses the getters: `getTitle()` gives the property "title" and `isDone()`, being a boolean, gives "done".', `public class Task {\n    private String title = "Review";\n    private boolean done = false;\n    public String getTitle() { return title; }\n    public boolean isDone() { return done; }\n}\n\n@GetMapping("/task")\npublic Task task() {\n    return new Task();\n}`),
      ],
    },
    // ───────────── Day 30 ─────────────
    {
      id: 'java-wrapup',
      t: 'Wrapping up',
      d: 'Final review of the challenge, good practices, classic mistakes and how to keep going.',
      guide: [
        { h: 'What you have learned', p: [
          'In 30 days you have gone from `System.out.println("Hello, world")` to building a REST API with Spring Boot. You have seen types, collections, classes, inheritance, interfaces, exceptions, generics, lambdas, streams, concurrency, files and databases.',
          'What matters is not memorising every method, but understanding the ideas: types the compiler checks, objects that encapsulate their state and code that reads like a description of the problem.' ] },
        { h: 'Good practices', p: [
          'Use names that explain intent, short methods that do one thing and `final` wherever you can: immutable objects (like records) avoid many bugs.',
          'Program against interfaces (`List`, not `ArrayList`), close resources with try-with-resources, never leave empty `catch` blocks and write JUnit tests for what matters.' ],
          code: `// Less clear\nArrayList<Object> l = new ArrayList<>();\nfor (int i = 0; i < orders.size(); i++) {\n    if (orders.get(i).total() > 100) l.add(orders.get(i).customer());\n}\n\n// Clearer\nList<String> vipCustomers = orders.stream()\n    .filter(o -> o.total() > 100)\n    .map(Order::customer)\n    .toList();` },
        { h: 'Classic mistakes', p: [
          'Comparing Strings with `==` compares references, not content: use `equals`. The same goes for `Integer` outside the range -128 to 127.',
          'Changing a list while you loop over it with for-each throws `ConcurrentModificationException`: use `removeIf`. And if you override `equals`, override `hashCode` too, or `HashMap` and `HashSet` will misbehave.' ],
          code: `String a = new String("hello");\nSystem.out.println(a == "hello");       // false\nSystem.out.println(a.equals("hello"));  // true\n\nList<Integer> nums = new ArrayList<>(List.of(3, -1, 4, -5));\nnums.removeIf(n -> n < 0);\nSystem.out.println(nums);  // [3, 4]` },
        { h: 'Where to go next', p: [
          'Pick a path: backend with Spring Boot and Spring Data, Android (mostly with Kotlin today, which runs on the same JVM) or data systems with Kafka or Spark.',
          'Read "Effective Java" by Joshua Bloch, practise with your own projects, publish them on GitHub and read code from open-source projects. You learn to program by programming.' ] },
        { h: 'Real example: your final project', real: true, p: [
          'A console expense tracker that brings much of the course together: records for the data, files to save it and streams for the summary. Extend it as you like with a database or a Spring Boot API.' ],
          code: `record Expense(LocalDate date, String category, double amount) {\n    String toCsv() { return date + "," + category + "," + amount; }\n    static Expense fromCsv(String line) {\n        String[] p = line.split(",");\n        return new Expense(LocalDate.parse(p[0]), p[1], Double.parseDouble(p[2]));\n    }\n}\n\npublic class Expenses {\n    public static void main(String[] args) throws IOException {\n        Path file = Path.of("expenses.csv");\n        List<Expense> expenses = List.of(\n            new Expense(LocalDate.of(2025, 3, 1), "food", 42.5),\n            new Expense(LocalDate.of(2025, 3, 2), "transport", 12.0),\n            new Expense(LocalDate.of(2025, 3, 5), "food", 18.3));\n        Files.write(file, expenses.stream().map(Expense::toCsv).toList());\n\n        Map<String, Double> summary = Files.readAllLines(file).stream()\n            .map(Expense::fromCsv)\n            .collect(Collectors.groupingBy(Expense::category, TreeMap::new,\n                     Collectors.summingDouble(Expense::amount)));\n        summary.forEach((cat, total) -> System.out.printf("%-12s %8.2f%n", cat, total));\n    }\n}` },
      ],
      x: [
        out(`String a = new String("hello");\nString b = "hello";\nSystem.out.println((a == b) + " " + a.equals(b));`, ['false true', 'true true', 'true false', 'false false'], '`new String` creates another object: `==` compares references and gives false, `equals` compares the content.'),
        out(`Integer x = 127, y = 127, m = 1000, n = 1000;\nSystem.out.println((x == y) + " " + (m == n));`, ['true false', 'true true', 'false false', 'false true'], 'Java reuses Integer objects between -128 and 127, so x and y are the same object. 1000 falls outside that cache. Always compare with `equals`.'),
        mc('What is thrown when you remove items from an ArrayList while looping over it with for-each?', ['ConcurrentModificationException', 'IndexOutOfBoundsException', 'NullPointerException', 'Nothing'], 'Use `removeIf` or an `Iterator` with its `remove()` method.'),
        fill(`List<Integer> nums = new ArrayList<>(List.of(3, -1, 4));\nnums.___(n -> n < 0);  // removes the negatives`, ['removeIf', 'removeAll', 'filter', 'delete'], '`removeIf` takes a predicate and removes the items that match it.'),
        out(`StringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 3; i++) sb.append(i).append(",");\nSystem.out.println(sb.reverse());`, [',2,1,0', '0,1,2,', '2,1,0,', ',0,1,2'], 'The text is "0,1,2," and `reverse()` turns it round character by character.'),
        out(`System.out.println(10 / 4 + " " + 10 / 4.0 + " " + 10 % 4);`, ['2 2.5 2', '2.5 2.5 2', '2 2 2', '2 2.5 2.5'], 'Between integers, `/` drops the decimals; with a `double` it does not. `%` gives the remainder: 2.'),
        mc('Which method must you always override whenever you override `equals`?', ['hashCode', 'toString', 'compareTo', 'clone'], 'Two equal objects must have the same hashCode, or `HashMap` and `HashSet` will not find them.'),
        out(`record Expense(String category, double amount) {}\nList<Expense> expenses = List.of(\n    new Expense("food", 12.5), new Expense("fun", 20.0),\n    new Expense("food", 8.5), new Expense("transport", 3.0));\nString biggest = expenses.stream()\n    .collect(Collectors.groupingBy(Expense::category, Collectors.summingDouble(Expense::amount)))\n    .entrySet().stream()\n    .max(Map.Entry.comparingByValue())\n    .map(Map.Entry::getKey)\n    .orElse("none");\nSystem.out.println(biggest);`, ['food', 'fun', 'transport', 'none'], 'Grouped, food adds up to 12.5 + 8.5 = 21.0, fun 20.0 and transport 3.0. `max` by value keeps the food entry and `getKey` gives its name.'),
      ],
    },
  ],
}))(Sintaxis);
