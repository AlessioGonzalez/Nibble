/* C++ · English */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('cpp', 'en', {
  tag: 'Performance and direct control of memory.',
  days: [
    // ───────────── Day 1 ─────────────
    {
      id: 'cpp-intro',
      t: 'Introduction',
      d: 'What C++ is, compiling, main, iostream and std::cout.',
      guide: [
        { h: 'What is C++?', p: [
          'C++ is a compiled language created by Bjarne Stroustrup starting in 1979 as an extension of C. It combines the speed of C with modern tools such as classes, templates and a large standard library.',
          'It powers browsers like Chrome, game engines like Unreal Engine, databases like MySQL and trading systems where every microsecond counts.',
          'The language evolves in versions: C++11 modernised it, followed by C++14, C++17, C++20 and C++23. This course uses C++17/20.' ] },
        { h: 'Your first program', p: [
          'Save this code as `hello.cpp`. Every program starts running in the `int main()` function.',
          'Unlike Python, C++ does not run directly: first the compiler translates the code into an executable. With GCC: `g++ -std=c++20 hello.cpp -o hello` and then `./hello`.' ],
          code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, world\\n";\n    return 0;\n}` },
        { h: 'Anatomy of the program', p: [
          '`#include <iostream>` brings in the part of the standard library that handles input and output. `std::cout` is standard output and `<<` sends data to it; you can chain several `<<` in a row.',
          '`std::` says that `cout` belongs to the standard library namespace. `"\\n"` is a line break.',
          'Every statement ends with `;`. Forgetting it is the most common beginner mistake. `return 0;` tells the system that everything went well (in `main` you can leave it out).' ],
          code: `#include <iostream>\n\nint main() {\n    // Single-line comment\n    /* Multi-line\n       comment */\n    std::cout << "I am " << 25 << " years old" << "\\n";  // I am 25 years old\n    std::cout << 3 + 4 << "\\n";                           // 7\n}` },
        { h: 'Reading from the keyboard', p: [
          '`std::cin` is standard input and uses `>>` in the opposite direction: it moves the typed data into a variable.',
          'A trick to remember it: the arrows point to where the data goes. `cout << x` sends `x` to the screen; `cin >> x` puts what was typed into `x`.' ],
          code: `#include <iostream>\n\nint main() {\n    int age;\n    std::cout << "How old are you? ";\n    std::cin >> age;\n    std::cout << "Next year you will be " << age + 1 << "\\n";\n}` },
        { h: 'Real example: price with VAT', real: true, p: [
          'An online shop needs to show the final price of a product. With just a few lines you can calculate the total with 21 % VAT.',
          '`std::cout` shows as many decimals as needed (up to 6 significant digits by default). On day 28 you will see how to show exactly two decimals.' ],
          code: `#include <iostream>\n\nint main() {\n    double price = 49.99;\n    double vat = 0.21;\n    std::cout << "Total: " << price * (1 + vat) << " euros\\n";  // Total: 60.4879 euros\n}` },
      ],
      x: [
        mc('Which header do you need to use `std::cout`?', ['<iostream>', '<console>', '<output>', '<stdio>'], '`<iostream>` declares the standard streams `std::cout` and `std::cin`.'),
        mc('In which function does a C++ program start running?', ['main', 'start', 'init', 'run'], 'The operating system always calls `main` when the program starts.'),
        mc('How do you write a single-line comment in C++?', ['// comment', '# comment', '-- comment', '<!-- comment -->'], 'Everything after `//` up to the end of the line is ignored. `#` is Python.'),
        ord('Write the statement that prints Hello', ['std::cout', '<<', '"Hello"', ';'], ['>>', 'print'], '`<<` sends the text to the output stream and the statement ends with `;`.'),
        mc('What does the C++ compiler do?', ['Translates the source code into an executable program', 'Runs the code line by line', 'Downloads libraries from the internet', 'Fixes errors automatically'], 'For example, `g++ hello.cpp -o hello` produces the executable `hello`.'),
        out(`std::cout << "A" << "B" << "\\n" << "C";`, ['AB\nC', 'A B C', 'ABC', 'AB\\nC'], '`<<` chains without adding spaces and `"\\n"` produces a real line break.'),
        typ('Write the operator that moves the typed value into the variable', `int age;\nstd::cin ___ age;`, '>>', '`std::cin` uses `>>`: the data goes from the keyboard into the variable.'),
        // Final challenge
        out(`std::cout << 3 + 4 << " " << "3 + 4" << "\\n";\nstd::cout << 10 / 4;`, ['7 3 + 4\n2', '7 7\n2.5', '3 + 4 3 + 4\n2', '7 3 + 4\n2.5'], 'Without quotes, `3 + 4` is calculated; in quotes it is text. `10 / 4` between integers drops the decimals: 2.'),
      ],
    },
    // ───────────── Day 2 ─────────────
    {
      id: 'cpp-vars',
      t: 'Variables and types',
      d: 'int, double, char, bool, auto, const and conversions.',
      guide: [
        { h: 'Declaring variables', p: [
          'In C++ every variable has a fixed type that you state when you declare it: `int age = 30;`. The compiler uses that type to reserve memory and catch errors before the program runs.',
          'You can initialise with `=` or with braces: `int age{30};`. Braces are safer because they forbid conversions that lose data: `int x{3.7};` does not compile.',
          'An uninitialised local variable contains garbage. Always initialise your variables.' ],
          code: `int age = 30;\ndouble height{1.75};\nint points;        // garbage! don’t read it before giving it a value\npoints = 0;        // now it’s fine` },
        { h: 'The basic types', p: [
          '`int` for whole numbers, `double` for decimals, `char` for a single character in single quotes, `bool` for `true`/`false` and `long long` for very large integers.',
          '`sizeof(type)` tells you how many bytes it takes. On most PCs `int` takes 4 bytes (up to about 2.1 billion) and `long long` 8 bytes.' ],
          code: `int inhabitants = 3300000;\nlong long world_population = 8100000000LL;\ndouble price = 19.95;\nchar initial = 'M';\nbool active = true;\nstd::cout << sizeof(char) << " " << sizeof(double);  // 1 8` },
        { h: 'auto, const and constexpr', p: [
          '`auto` lets the compiler deduce the type from the value: `auto x = 3.5;` is a `double`. Use it when the type is obvious or very long to write.',
          '`const` prevents changing the variable after it is created. `constexpr` goes further: the value is calculated at compile time.',
          'Good practice: mark as `const` everything that will not change. The compiler will warn you if you modify it by mistake.' ],
          code: `auto total = 2 * 9.99;      // double\nauto units = 3;             // int\nconst double VAT = 0.21;\nconstexpr int DAYS_PER_WEEK = 7;\n// VAT = 0.10;  // error: VAT is const` },
        { h: 'Conversions and static_cast', p: [
          'C++ converts types automatically, and sometimes loses information: storing `3.9` in an `int` gives `3` (it truncates, it does not round).',
          'Division between two integers is integer division: `7 / 2` is `3`. If you want decimals, convert one of the operands with `static_cast<double>(x)`.',
          '`static_cast` makes the conversion explicit and visible. Avoid the old style `(double)x`.' ],
          code: `int total = 7, n = 2;\nstd::cout << total / n << "\\n";                          // 3\nstd::cout << static_cast<double>(total) / n << "\\n";     // 3.5\nint truncated = 3.9;\nstd::cout << truncated;                                  // 3` },
        { h: 'Real example: fuel consumption', real: true, p: [
          'After a trip you want to know how many litres your car uses every 100 km. Note that we use `double` because litres have decimals.',
          'If you had declared `litres` as `int`, 29.4 would have become 29 and the result would be wrong.' ],
          code: `#include <iostream>\n\nint main() {\n    const double km = 420;\n    const double litres = 29.4;\n    std::cout << "Consumption: " << litres / km * 100 << " L/100 km\\n";  // Consumption: 7 L/100 km\n}` },
      ],
      x: [
        mc('Which type would you use to store whether a user is logged in?', ['bool', 'boolean', 'bit', 'int8'], 'The C++ logical type is `bool` and its values are `true` or `false`.'),
        mc('In `auto x = 3.5;`, which type does the compiler deduce?', ['double', 'float', 'int', 'auto'], 'Decimal literals without a suffix are `double`. `3.5f` would be `float`.'),
        out(`int a = 7, b = 2;\nstd::cout << a / b;`, ['3', '3.5', '4', '3.0'], 'Division between two `int` values drops the decimals.'),
        out(`std::cout << 7.0 / 2;`, ['3.5', '3', '4', '3.50'], 'If one operand is a `double`, the division keeps the decimals.'),
        out(`int x = 3.9;\nstd::cout << x;`, ['3', '3.9', '4', 'Error'], 'Storing a decimal in an `int` truncates the decimal part; it does not round.'),
        fill(`int sum = 17, n = 4;\ndouble average = static_cast<___>(sum) / n;  // 4.25`, ['double', 'int', 'char', 'bool'], 'Converting `sum` to `double` stops the division from being an integer division.'),
        out(`char c = 'A';\nc = c + 2;\nstd::cout << c;`, ['C', 'A2', '67', 'B'], 'A `char` is a number: A (65) + 2 = 67, which is the letter C.'),
        // Final challenge
        out(`int a = 9;\ndouble b = a / 2;\ndouble c = a / 2.0;\nstd::cout << b << " " << c;`, ['4 4.5', '4.5 4.5', '4 4', '4.5 4'], '`a / 2` is calculated between integers (4) before being stored in `b`; `a / 2.0` is already a decimal division (4.5).'),
      ],
    },
    // ───────────── Day 3 ─────────────
    {
      id: 'cpp-operators',
      t: 'Operators',
      d: 'Arithmetic, comparison, logical, increments and precedence.',
      guide: [
        { h: 'Arithmetic operators', p: [
          'C++ has `+ - * /` and `%` (remainder). Between integers, `/` drops decimals and `%` returns what is left over: `17 / 5` is 3 and `17 % 5` is 2.',
          '`%` only works with integers. It is very handy to check whether a number is even (`n % 2 == 0`) or to get the last digit (`n % 10`).' ],
          code: `int a = 17, b = 5;\nstd::cout << a + b << " " << a - b << " " << a * b << "\\n";  // 22 12 85\nstd::cout << a / b << " " << a % b << "\\n";                  // 3 2\nstd::cout << 17.0 / 5;                                       // 3.4` },
        { h: 'Compound assignment and increments', p: [
          '`x += 3` is the same as `x = x + 3`; there are also `-=`, `*=`, `/=` and `%=`.',
          '`++x` increments and returns the new value; `x++` returns the old value and then increments. It only matters if you use the result in the same expression.',
          'Don’t modify the same variable twice in one expression (`i = i++ + ++i`): the result is not well defined.' ],
          code: `int x = 5;\nint a = x++;   // a = 5, x = 6\nint b = ++x;   // x = 7, b = 7\nx *= 2;        // 14\nstd::cout << a << " " << b << " " << x;  // 5 7 14` },
        { h: 'Comparison and logic', p: [
          'The comparison operators `== != < > <= >=` and the logical ones `&&` (and), `||` (or) and `!` (not) produce a `bool`.',
          '`std::cout` prints `bool` values as `1` and `0`. If you prefer `true`/`false`, send `std::boolalpha` first.',
          '`&&` and `||` short-circuit: in `a && b`, if `a` is false, `b` is not even evaluated. That is why `v.size() > 0 && v[0] == 1` is safe.' ],
          code: `int age = 20;\nbool has_ticket = true;\nstd::cout << (age >= 18) << "\\n";                       // 1\nstd::cout << std::boolalpha << (age >= 18 && !has_ticket);  // false` },
        { h: 'Precedence', p: [
          '`*`, `/` and `%` come before `+` and `-`; comparisons come after arithmetic, and `&&` before `||`.',
          'Watch out for `std::cout << a < b;`: `<<` has higher priority than `<`, so it does not compile. Add parentheses: `std::cout << (a < b);`.',
          'When in doubt, use parentheses: they make the code clearer and avoid surprises.' ] },
        { h: 'Real example: leap year and change in coins', real: true, p: [
          'A calendar needs to know whether February has 29 days: a year is a leap year if it is divisible by 4 and not by 100, unless it is divisible by 400.',
          'And a cash register turns cents into euros and cents with `/` and `%`.' ],
          code: `#include <iostream>\n\nint main() {\n    int year = 2024;\n    bool leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;\n    std::cout << std::boolalpha << year << " leap: " << leap << "\\n";  // 2024 leap: true\n\n    int cents = 387;\n    std::cout << cents / 100 << " euros and " << cents % 100 << " cents\\n";  // 3 euros and 87 cents\n}` },
      ],
      x: [
        typ('Write the operator that gives the remainder of a division', `int remainder = 17 ___ 5;  // 2`, '%', '`%` returns what is left over: 5 goes into 17 three times with 2 left over.'),
        out(`int x = 10;\nx -= 3;\nx *= 2;\nstd::cout << x;`, ['14', '7', '20', '17'], '10 - 3 = 7 and 7 * 2 = 14.'),
        mc('In `v.size() > 0 && v[0] == 1`, what happens if the vector is empty?', ['`v[0]` is never evaluated', 'The program crashes when reading `v[0]`', 'Both parts are evaluated anyway', 'It does not compile'], '`&&` short-circuits: if the first part is false, the second one is not calculated.'),
        out(`int x = 5;\nint y = x++;\nstd::cout << x << " " << y;`, ['6 5', '6 6', '5 6', '5 5'], '`x++` returns the old value (5) and then increments `x` to 6.'),
        fill(`std::cout << std::___ << (2 < 3);  // prints: true`, ['boolalpha', 'booltext', 'showbool', 'truefalse'], '`std::boolalpha` makes `bool` values print as `true` and `false`.'),
        out(`bool a = true, b = false;\nstd::cout << (a && !b) << (a && b);`, ['10', '11', '01', 'truefalse'], '`a && !b` is true (1) and `a && b` is false (0).'),
        out(`std::cout << 2 + 3 * 4 % 5;`, ['4', '0', '2', '14'], '`*` and `%` go first, left to right: 3 * 4 = 12, 12 % 5 = 2, and 2 + 2 = 4.'),
        // Final challenge
        out(`int a = 1900, b = 2024;\nbool la = (a % 4 == 0 && a % 100 != 0) || a % 400 == 0;\nbool lb = (b % 4 == 0 && b % 100 != 0) || b % 400 == 0;\nstd::cout << la << lb << " " << 387 / 100 << ":" << 387 % 100;`, ['01 3:87', '11 3:87', '01 3.87:87', '10 3:87'], '1900 is divisible by 100 but not by 400, so it is not a leap year (0); 2024 is (1). Then 387 / 100 = 3 and 387 % 100 = 87.'),
      ],
    },
    // ───────────── Day 4 ─────────────
    {
      id: 'cpp-conditionals',
      t: 'Conditionals',
      d: 'if, else if, switch, the ternary operator and FizzBuzz.',
      guide: [
        { h: 'if, else if and else', p: [
          '`if (condition)` runs a block only if the condition is true. `else if` chains more cases and `else` catches everything else.',
          'Always use braces `{ }`, even if the block has a single line: it avoids mistakes when you add lines later.' ],
          code: `int grade = 7;\nif (grade >= 9) {\n    std::cout << "Excellent";\n} else if (grade >= 7) {\n    std::cout << "Good";        // this one runs\n} else if (grade >= 5) {\n    std::cout << "Pass";\n} else {\n    std::cout << "Fail";\n}` },
        { h: 'True, false and the = mistake', p: [
          'In C++ any number other than 0 counts as true and 0 counts as false.',
          'Classic mistake: `if (x = 5)` assigns 5 to `x` (instead of comparing) and is always true. Comparison uses `==`. Compile with `-Wall` and the compiler will warn you.',
          'Since C++17 you can declare a variable inside the `if`: `if (auto pos = s.find(\'@\'); pos != std::string::npos)`. That way it only exists where it is used.' ] },
        { h: 'switch', p: [
          '`switch` compares an integer, `char` or `enum` with several `case` labels. It does not work with `std::string`.',
          'Each `case` must end with `break`; otherwise execution "falls through" into the next case. Sometimes this is done on purpose to group cases.',
          '`default` runs when no case matches.' ],
          code: `char option = 'b';\nswitch (option) {\n    case 'a':\n        std::cout << "New game";\n        break;\n    case 'b':\n    case 'c':                   // b and c do the same\n        std::cout << "Load game";\n        break;\n    default:\n        std::cout << "Invalid option";\n}` },
        { h: 'The ternary operator', p: [
          '`std::string` is the C++ type for storing text; you will study it properly on day 6.',
          '`condition ? value_if_true : value_if_false` picks a value inside an expression. It is ideal for short cases.',
          'They can be nested, but more than two levels is hard to read; in that case go back to `if`.' ],
          code: `int age = 16;\nstd::string type = age >= 18 ? "adult" : "minor";\nstd::cout << type;  // minor` },
        { h: 'Real example: shipping rate', real: true, p: [
          'A shop charges shipping by weight band and adds 50 % if it is urgent. The `else if` chain checks the bands in order and the ternary applies the surcharge.' ],
          code: `#include <iostream>\n\ndouble shipping_rate(double kg, bool urgent) {\n    double price;\n    if (kg <= 1) price = 4.5;\n    else if (kg <= 5) price = 7.9;\n    else price = 7.9 + (kg - 5) * 1.2;   // 1.20 per extra kilo\n    return urgent ? price * 1.5 : price;\n}\n\nint main() {\n    std::cout << shipping_rate(3, false) << "\\n";  // 7.9\n    std::cout << shipping_rate(8, true) << "\\n";   // 17.25\n}` },
      ],
      x: [
        out(`int x = 4;\nif (x % 2 == 0)\n    std::cout << "even";\nelse\n    std::cout << "odd";`, ['even', 'odd', 'evenodd', '0'], '4 divided by 2 leaves remainder 0, so the condition holds.'),
        fill(`if (x > 0) {\n    std::cout << "positive";\n} ___ if (x < 0) {\n    std::cout << "negative";\n}`, ['else', 'elif', 'elseif', 'or'], 'C++ chains conditions with `else if`, as two words.'),
        out(`int pending = 0;\nif (!pending) std::cout << "up to date";`, ['up to date', '0', 'Nothing', 'Error'], '0 is equivalent to `false`, and `!false` is `true`.'),
        mc('What kind of values does a C++ `switch` accept?', ['Integers, char and enums', 'Strings', 'Doubles', 'Any object'], 'To compare `std::string` values use an `if`/`else if` chain.'),
        out(`int x = 0;\nif (x = 5) std::cout << "yes";\nelse std::cout << "no";`, ['yes', 'no', 'Compile error'], '`x = 5` assigns (it does not compare) and the result, 5, counts as true.'),
        out(`int d = 2;\nswitch (d) {\n    case 1: std::cout << "L";\n    case 2: std::cout << "M";\n    case 3: std::cout << "X"; break;\n    default: std::cout << "?";\n}`, ['MX', 'M', 'MX?', 'LMX'], 'It enters `case 2` and, since there is no `break`, carries on until the `break` in `case 3`.'),
        out(`int grade = 7;\nstd::cout << (grade >= 9 ? "A" : grade >= 7 ? "B" : "C");`, ['B', 'A', 'C', 'AB'], 'The first condition fails, so the second ternary is evaluated: 7 >= 7 is true.'),
        // Final challenge
        out(`int n = 30;\nstd::string r;\nif (n % 3 == 0) r += "Fizz";\nif (n % 5 == 0) r += "Buzz";\nif (r.empty()) r = std::to_string(n);\nswitch (n % 4) {\n    case 2: r += "!";\n    case 3: r += "?"; break;\n    default: r += ".";\n}\nstd::cout << r;`, ['FizzBuzz!?', 'FizzBuzz!', 'Fizz!?', 'FizzBuzz.'], '30 is a multiple of 3 and of 5, so both `if` statements run. 30 % 4 = 2: "!" is added and, with no `break`, "?" too.'),
      ],
    },
    // ───────────── Day 5 ─────────────
    {
      id: 'cpp-loops',
      t: 'Loops',
      d: 'for, while, do-while, range-for, break and continue.',
      guide: [
        { h: 'The for loop', p: [
          '`for (start; condition; step)` is ideal when you know how many iterations you need. The variable declared in the start part only exists inside the loop.',
          'Typical mistake: using `<=` instead of `<` when going through indexes and running one position past the end of the container.' ],
          code: `for (int i = 1; i <= 5; i++) {\n    std::cout << i << " ";   // 1 2 3 4 5\n}\nfor (int i = 10; i > 0; i -= 3) {\n    std::cout << i << " ";   // 10 7 4 1\n}` },
        { h: 'while and do-while', p: [
          '`while (condition)` repeats while the condition is true. Use it when you don’t know in advance how many iterations there will be.',
          '`do { ... } while (condition);` checks at the end, so the block runs at least once. It works great for menus and for asking for data until it is valid.' ],
          code: `int grade;\ndo {\n    std::cout << "Grade (0-10): ";\n    std::cin >> grade;\n} while (grade < 0 || grade > 10);   // repeats until it is valid` },
        { h: 'The range-for', p: [
          'The examples use `std::string` (text) and `std::vector` (a list of values). For now it is enough to know that the range-for goes through them element by element; you will study them properly on days 6 and 8.',
          '`for (type x : container)` goes through all the elements of a vector, array, set, map or string without indexes.',
          'Remember: `for (auto x : v)` works with copies; `for (auto& x : v)` modifies the originals and `for (const auto& x : v)` reads without copying.' ],
          code: `std::string word = "hello";\nint vowels = 0;\nfor (char c : word)\n    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') vowels++;\nstd::cout << vowels;  // 2` },
        { h: 'break, continue and nested loops', p: [
          '`break` leaves the loop immediately and `continue` jumps to the next iteration.',
          'With nested loops, `break` only leaves the innermost loop. If you need to leave all of them, move the code into a function and use `return`.' ],
          code: `for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) continue;   // skips even numbers\n    if (i > 7) break;           // stops at 9\n    std::cout << i << " ";       // 1 3 5 7\n}` },
        { h: 'Real example: how long until your savings grow?', real: true, p: [
          'You put 1,000 € in an account at 5 % a year and want to know how many years it will take to reach 1,500 €. You don’t know how many iterations there will be, so `while` is the right tool.' ],
          code: `#include <iostream>\n\nint main() {\n    double balance = 1000;\n    int years = 0;\n    while (balance < 1500) {\n        balance *= 1.05;   // interest for the year\n        years++;\n    }\n    std::cout << "Years: " << years << ", balance: " << balance << "\\n";\n    // Years: 9, balance: 1551.33\n}` },
      ],
      x: [
        out(`for (int i = 0; i < 4; i += 2)\n    std::cout << i;`, ['02', '0123', '024', '24'], '`i` is 0 and then 2; when it reaches 4 the condition fails.'),
        typ('Complete the condition so it prints 1 2 3 4 5', `for (int i = 1; i ___ 5; i++)\n    std::cout << i << " ";`, '<=', 'With `<=` the loop includes 5; with `<` it would stop at 4.'),
        fill(`std::vector<int> v = {1, 2, 3};\nfor (int x ___ v) std::cout << x;`, [':', 'in', 'of', '->'], 'The range-for uses a colon: `for (type x : container)`.'),
        out(`int n = 0;\ndo {\n    n++;\n} while (n < 0);\nstd::cout << n;`, ['1', '0', 'Infinite loop', '-1'], '`do-while` runs the block once before checking the condition.'),
        mc('With two nested loops, where does a `break` written in the inner loop jump out of?', ['Only the inner loop', 'Both loops', 'The outer loop', 'The whole function'], '`break` only leaves the nearest loop. To leave all of them, move the code into a function and use `return`.'),
        out(`for (int i = 0; i < 5; i++) {\n    if (i % 2 == 0) continue;\n    std::cout << i;\n}`, ['13', '024', '01234', '1'], '`continue` skips the even numbers, so only 1 and 3 are printed.'),
        out(`int c = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = i; j < 3; j++) c++;\nstd::cout << c;`, ['6', '9', '3', '5'], 'The inner loop runs 3, 2 and 1 times: 3 + 2 + 1 = 6.'),
        // Final challenge
        out(`int n = 1234, sum = 0, digits = 0;\nwhile (n > 0) {\n    sum += n % 10;\n    n /= 10;\n    digits++;\n}\nstd::cout << sum << " " << digits;`, ['10 4', '4 10', '10 3', '1234 4'], '`n % 10` takes the last digit and `n /= 10` removes it. 4 + 3 + 2 + 1 = 10 is added up over 4 iterations.'),
      ],
    },
    // ───────────── Day 6 ─────────────
    {
      id: 'cpp-strings',
      t: 'Strings',
      d: 'std::string: concatenation, size, substr, find and conversions.',
      guide: [
        { h: 'std::string', p: [
          '`std::string` (header `<string>`) stores text and manages its own memory: it can grow and shrink without you doing anything.',
          'You concatenate with `+` and `+=`, and compare with `==`, `<` and `>` (alphabetical order).',
          'Text in quotes such as `"Hello"` is a C literal, not a `std::string`. That is why `"Hello" + " world"` does not compile, while `std::string("Hello") + " world"` does.' ],
          code: `#include <string>\n\nstd::string name = "Ada";\nstd::string greeting = "Hello, " + name;  // string + literal: fine\ngreeting += "!";\nstd::cout << greeting << "\\n";            // Hello, Ada!\nstd::cout << (name == "Ada");            // 1` },
        { h: 'Most used methods', p: [
          '`size()` (or `length()`) counts characters, `empty()` tells you whether it is empty and `s[i]` accesses character `i`, starting at 0.',
          '`substr(pos, n)` returns `n` characters from `pos`; without `n` it goes to the end. `find(text)` returns the position of the first occurrence, or `std::string::npos` if it is not there.',
          'Unlike in Python or Java, a `std::string` can be modified: `s[0] = \'X\';`.' ],
          code: `std::string s = "programming";\nstd::cout << s.size() << "\\n";        // 11\nstd::cout << s.substr(3, 4) << "\\n";  // gram\nstd::cout << s.find("ing") << "\\n";   // 8\nif (s.find("z") == std::string::npos)\n    std::cout << "no z\\n";\ns[0] = 'P';\nstd::cout << s;                       // Programming` },
        { h: 'Converting between numbers and text', p: [
          '`std::to_string(42)` turns a number into text. `std::stoi("42")` turns text into an `int` and `std::stod("3.5")` into a `double`.',
          'If the text is not a number, `stoi` throws a `std::invalid_argument` exception. You will see this on day 23.' ],
          code: `std::string age = "29";\nint n = std::stoi(age) + 1;\nstd::string msg = "You will turn " + std::to_string(n);\nstd::cout << msg << "\\n";                 // You will turn 30\nstd::cout << std::stod("2.5") * 2;       // 5` },
        { h: 'Reading whole lines', p: [
          '`std::cin >> s` only reads up to the first space. To read a whole sentence use `std::getline(std::cin, s)`.',
          'If you mix `cin >>` and `getline`, the pending line break makes `getline` read an empty line. Call `std::cin.ignore()` first.' ],
          code: `std::string city;\nstd::cout << "Where do you live? ";\nstd::getline(std::cin, city);   // accepts "New York"\nstd::cout << "You live in " << city;` },
        { h: 'Real example: splitting an email', real: true, p: [
          'A sign-up form stores the user name and the domain of an email separately. With `find` you locate the at sign and with `substr` you cut out both parts.' ],
          code: `#include <iostream>\n#include <string>\n\nint main() {\n    std::string email = "lucy.martin@company.com";\n    auto at = email.find('@');\n    if (at == std::string::npos) {\n        std::cout << "Invalid email\\n";\n        return 1;\n    }\n    std::cout << "User: " << email.substr(0, at) << "\\n";     // lucy.martin\n    std::cout << "Domain: " << email.substr(at + 1) << "\\n";  // company.com\n}` },
      ],
      x: [
        out(`std::string s = "C++";\nstd::cout << s.size();`, ['3', '2', '4', 'Error'], '`size()` counts the characters: C, + and +.'),
        out(`std::string a = "Hello", b = "World";\nstd::cout << a + " " + b;`, ['Hello World', 'HelloWorld', 'Hello + World', 'Error'], '`+` concatenates strings, and the space goes between them.'),
        fill(`int n = std::___("123");`, ['stoi', 'to_int', 'parseInt', 'toInt'], '`stoi` stands for "string to int".'),
        out(`std::string s = "programming";\nstd::cout << s.substr(3, 4);`, ['gram', 'gra', 'rogr', 'gramm'], '`substr(pos, n)` takes 4 characters from position 3 (the first g).'),
        out(`std::string s = "banana";\nstd::cout << s.find("na");`, ['2', '4', '1', '3'], '`find` returns the position of the first occurrence: b(0) a(1) n(2).'),
        mc('What happens with `std::string s = "Hello" + " world";`?', ['It does not compile: they are two C literals, not std::string', 'It stores "Hello world"', 'It stores only "Hello"', 'It throws an exception at run time'], 'At least one of the operands of `+` must be a `std::string`.'),
        out(`std::string s = "ann";\ns += std::to_string(7 * 3);\nstd::cout << s << s.size();`, ['ann215', 'ann213', 'ann7*35', 'ann2121'], '`to_string(21)` appends "21" and the text "ann21" has 5 characters.'),
        // Final challenge
        out(`std::string email = "ann.diaz@mail.com";\nauto pos = email.find('@');\nstd::string user = email.substr(0, pos);\nuser[0] = 'A';\nstd::cout << user << " " << email.size() - pos - 1;`, ['Ann.diaz 8', 'ann.diaz 8', 'Ann.diaz 9', 'Ann.diaz@ 8'], 'The @ is at position 8: the user is the first 8 characters and its initial is changed. The email is 17 characters long, so the domain has 17 - 8 - 1 = 8.'),
      ],
    },
    // ───────────── Day 7 ─────────────
    {
      id: 'cpp-arrays',
      t: 'Arrays',
      d: 'Classic arrays, std::array, bounds and matrices.',
      guide: [
        { h: 'Fixed-size arrays', p: [
          'An array stores several values of the same type one after another in memory: `int grades[3] = {7, 9, 5};`. Its size is fixed at compile time and cannot change.',
          'Indexes go from 0 to n-1. If you give fewer values than the size, the rest is filled with zeros: `int a[5] = {1, 2};` is `{1, 2, 0, 0, 0}`.' ],
          code: `int grades[3] = {7, 9, 5};\ngrades[1] = 10;\nstd::cout << grades[0] + grades[1] << "\\n";  // 17\nint zeros[4] = {};                           // {0, 0, 0, 0}` },
        { h: 'C++ does not check bounds', p: [
          'Reading or writing `grades[3]` in a 3-element array is undefined behaviour: the program may give garbage values, crash or seem to work.',
          'It is one of the best-known sources of security bugs. That is why modern C++ prefers `std::array` or `std::vector`, which offer `at()` with bounds checking.' ] },
        { h: 'std::array', p: [
          '`std::array<int, 3>` (header `<array>`) is a fixed-size array with extras: it knows its size with `size()`, can be copied with `=` and `at(i)` throws an exception if the index does not exist.',
          'With the range-for `for (int x : arr)` you go through it without worrying about indexes.' ],
          code: `#include <array>\n\nstd::array<int, 4> v = {3, 1, 4, 1};\nfor (int x : v) std::cout << x << " ";  // 3 1 4 1\nstd::cout << "\\n" << v.size();          // 4\n// v.at(10);  // throws std::out_of_range` },
        { h: 'Matrices', p: [
          'An array of arrays forms a table: `int m[2][3]` has 2 rows and 3 columns. `m[row][column]` accesses a cell.',
          'To go through it you nest two loops: the outer one goes through rows and the inner one through columns.' ],
          code: `int m[2][3] = {{1, 2, 3},\n               {4, 5, 6}};\nstd::cout << m[1][2] << "\\n";  // 6\nint sum = 0;\nfor (auto& row : m)\n    for (int x : row) sum += x;\nstd::cout << sum;              // 21` },
        { h: 'Real example: temperatures of the week', real: true, p: [
          'A weather app stores the highs of the 7 days and shows the average and the hottest day. Since a week always has 7 days, `std::array` is ideal.' ],
          code: `#include <array>\n#include <iostream>\n\nint main() {\n    std::array<double, 7> temps = {18.5, 21.0, 19.5, 23.0, 25.5, 24.0, 20.5};\n    double sum = 0, highest = temps[0];\n    for (double t : temps) {\n        sum += t;\n        if (t > highest) highest = t;\n    }\n    std::cout << "Average: " << sum / temps.size() << "\\n";  // Average: 21.7143\n    std::cout << "Highest: " << highest << "\\n";            // Highest: 25.5\n}` },
      ],
      x: [
        out(`int a[4] = {5, 6, 7, 8};\nstd::cout << a[2];`, ['7', '6', '8', 'Error'], 'Indexes start at 0: index 2 is the third element.'),
        out(`int a[5] = {1, 2};\nstd::cout << a[3];`, ['0', '2', 'Garbage', 'Error'], 'Missing elements in the initialisation are filled with zeros.'),
        out(`int a[] = {3, 1, 2};\nint s = 0;\nfor (int x : a) s += x;\nstd::cout << s;`, ['6', '3', '312', 'Error'], 'The range-for adds 3 + 1 + 2.'),
        mc('What happens when you read `a[10]` in a classic 5-element array?', ['Undefined behaviour: C++ does not check bounds', 'It throws an exception', 'It returns 0', 'It does not compile'], 'With `std::array` or `std::vector` you can use `at()`, which does check.'),
        fill(`std::array<int, 3> a = {1, 2, 3};\nstd::cout << a.___();  // 3`, ['size', 'length', 'count', 'len'], '`size()` returns the number of elements of any standard container.'),
        out(`int m[2][2] = {{1, 2}, {3, 4}};\nstd::cout << m[1][0];`, ['3', '2', '4', '1'], 'Row 1 (the second) and column 0 (the first): 3.'),
        out(`int a[] = {4, 8, 15, 16};\nstd::cout << sizeof(a) / sizeof(a[0]);`, ['4', '16', '1', '8'], '`sizeof(a)` is the size of the whole array in bytes and `sizeof(a[0])` that of one element: the quotient is the number of elements.'),
        // Final challenge
        out(`std::array<int, 5> v = {3, 8, 1, 9, 4};\nint mx = v[0], pos = 0;\nfor (int i = 1; i < 5; i++)\n    if (v[i] > mx) { mx = v[i]; pos = i; }\nstd::cout << mx << " at " << pos;`, ['9 at 3', '9 at 4', '8 at 1', '9 at 2'], 'The loop keeps the largest value seen and its index. The 9 is at index 3 because counting starts at 0.'),
      ],
    },
    // ───────────── Day 8 ─────────────
    {
      id: 'cpp-vectors',
      t: 'Vectors',
      d: 'std::vector: push_back, pop_back, insert, erase, at and loops.',
      guide: [
        { h: 'An array that grows', p: [
          '`std::vector` (header `<vector>`) is the most used C++ container: a dynamic array that grows when you add elements and frees its memory by itself.',
          'If you don’t know how many elements you will have, use `std::vector`. It is the default choice for lists of data.' ],
          code: `#include <vector>\n\nstd::vector<int> v;          // empty\nstd::vector<int> w = {4, 8};  // with values\nstd::vector<int> z(3, 7);    // {7, 7, 7}\nv.push_back(15);\nstd::cout << v.size() << w.size() << z.size();  // 123` },
        { h: 'Adding and removing', p: [
          '`push_back(x)` adds to the end and `pop_back()` removes the last element. `front()` and `back()` give the first and the last.',
          '`insert(v.begin() + i, x)` inserts at position `i` and `erase(v.begin() + i)` deletes it. Both shift the remaining elements, so they are slower on huge vectors.',
          '`clear()` empties the vector and `empty()` tells you whether it is empty.' ],
          code: `std::vector<int> v = {10, 20, 30};\nv.push_back(40);            // 10 20 30 40\nv.insert(v.begin(), 5);     // 5 10 20 30 40\nv.erase(v.begin() + 2);     // 5 10 30 40\nv.pop_back();               // 5 10 30\nstd::cout << v.front() << " " << v.back();  // 5 30` },
        { h: '[] versus at()', p: [
          '`v[i]` is fast but checks nothing: an out-of-range index is undefined behaviour.',
          '`v.at(i)` checks the index and throws `std::out_of_range` if it does not exist. Use it when the index comes from outside (from the user, from a file...).' ] },
        { h: 'Looping over a vector', p: [
          '`for (int x : v)` goes through copies of the elements. To modify them use a reference: `for (int& x : v)`.',
          'With large objects (like `std::string`) use `for (const auto& x : v)`: it does not copy and makes clear that you only read.' ],
          code: `std::vector<int> prices = {10, 20, 30};\nfor (int& p : prices) p = p * 2;      // modifies the original\nfor (const auto& p : prices)\n    std::cout << p << " ";              // 20 40 60` },
        { h: 'Real example: the shopping cart', real: true, p: [
          'An online shop stores the prices in the cart in a vector: the customer adds products with `push_back` and the total is calculated by going through the vector.' ],
          code: `#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<double> cart = {12.99, 4.50, 7.25};\n    cart.push_back(3.10);   // adds another product\n    double total = 0;\n    for (double price : cart) total += price;\n    std::cout << cart.size() << " items, total " << total << " euros\\n";\n    // 4 items, total 27.84 euros\n}` },
      ],
      x: [
        out(`std::vector<int> v = {1, 2, 3};\nv.push_back(4);\nstd::cout << v.size();`, ['4', '3', '5', 'Error'], '`push_back` adds an element at the end.'),
        fill(`std::vector<std::string> names;\nnames.___("Ann");`, ['push_back', 'add', 'append', 'push'], 'In C++ you add to the end of a vector with `push_back`.'),
        out(`std::vector<int> v = {2, 4, 6};\nint s = 0;\nfor (int n : v) s += n;\nstd::cout << s;`, ['12', '246', '6', '3'], 'The range-for goes through each element: 2 + 4 + 6 = 12.'),
        out(`std::vector<int> v = {1, 2, 3};\nv.pop_back();\nstd::cout << v.back();`, ['2', '3', '1', 'Error'], '`pop_back` removes the 3 and `back` returns the new last element.'),
        out(`std::vector<int> v(3, 7);\nstd::cout << v[0] + v[2];`, ['14', '7', '10', '21'], '`v(3, 7)` creates 3 elements with value 7, so 7 + 7 = 14.'),
        mc('What is the difference between `v[i]` and `v.at(i)`?', ['at() checks the index and throws an exception if it does not exist', 'None', '[] is safer', 'at() returns a copy'], '`[]` checks nothing and is slightly faster; `at()` throws `std::out_of_range`.'),
        out(`std::vector<int> v = {10, 20, 30, 40};\nv.erase(v.begin() + 1);\nstd::cout << v[1] << " " << v.size();`, ['30 3', '20 3', '30 4', '40 3'], '`erase` deletes index 1 (the 20) and the following elements shift: {10, 30, 40} remains.'),
        // Final challenge
        out(`std::vector<int> v = {5, 3, 8};\nfor (auto& x : v) x *= 2;\nv.insert(v.begin(), 1);\nv.pop_back();\nstd::cout << v.front() + v.back() << " " << v.size();`, ['7 3', '17 3', '1 3', '7 4'], 'With `auto&` the originals are doubled: {10, 6, 16}. After inserting the 1 and removing the last one, {1, 10, 6} remains: 1 + 6 = 7 and size 3.'),
      ],
    },
    // ───────────── Day 9 ─────────────
    {
      id: 'cpp-sets',
      t: 'Sets',
      d: 'std::set and std::unordered_set: unique elements.',
      guide: [
        { h: 'Unique, ordered elements', p: [
          '`std::set` (header `<set>`) stores each value only once and keeps them sorted from smallest to largest. If you insert a duplicate, it is simply ignored.',
          'It is perfect for questions like "have I seen this already?" or "how many different values are there?".' ],
          code: `#include <set>\n\nstd::set<int> s = {5, 1, 5, 3};\ns.insert(2);\ns.insert(3);               // duplicate: does nothing\nfor (int x : s) std::cout << x << " ";  // 1 2 3 5\nstd::cout << "\\n" << s.size();          // 4` },
        { h: 'Finding and erasing', p: [
          '`count(x)` returns 1 if `x` is there and 0 if not. In C++20 you have `contains(x)`, which returns a `bool` and reads better.',
          '`erase(x)` removes the value. `insert` returns a pair whose `.second` is `true` if the element was new.',
          'Searching a `std::set` is very fast (logarithmic), much faster than checking a large vector element by element.' ],
          code: `std::set<std::string> tags = {"c++", "stl"};\nstd::cout << tags.count("stl") << "\\n";    // 1\nstd::cout << tags.contains("go") << "\\n";  // 0 (C++20)\nauto r = tags.insert("c++");\nstd::cout << r.second << "\\n";             // 0: it already existed\ntags.erase("stl");` },
        { h: 'std::unordered_set', p: [
          '`std::unordered_set` (header `<unordered_set>`) does the same but uses a hash table: searching and inserting are even faster on average, in exchange for not keeping any order.',
          'Rule of thumb: if you need to go through the values in order, use `std::set`; if you only ask whether something exists, `std::unordered_set`.' ] },
        { h: 'Building a set from a vector', p: [
          'You can build a set from any range: `std::set<int> s(v.begin(), v.end());`. It is the simplest way to remove duplicates.',
          'You can also add a whole range to an existing set with `s.insert(other.begin(), other.end())`.' ],
          code: `std::vector<int> v = {3, 1, 3, 2, 1};\nstd::set<int> unique(v.begin(), v.end());\nstd::cout << unique.size();  // 3` },
        { h: 'Real example: unique visitors of a website', real: true, p: [
          'A website log records the user on every visit. The daily report needs to know how many different people came in, not how many visits there were.' ],
          code: `#include <iostream>\n#include <set>\n#include <string>\n#include <vector>\n\nint main() {\n    std::vector<std::string> visits = {"ann", "luke", "ann", "martha", "luke", "ann"};\n    std::set<std::string> unique(visits.begin(), visits.end());\n    std::cout << visits.size() << " visits, " << unique.size() << " visitors\\n";\n    // 6 visits, 3 visitors\n    for (const auto& u : unique) std::cout << u << " ";  // ann luke martha\n}` },
      ],
      x: [
        out(`std::set<int> s = {3, 1, 3, 2};\nstd::cout << s.size();`, ['3', '4', '2', 'Error'], 'The repeated 3 is ignored: 1, 2 and 3 remain.'),
        fill(`std::set<int> s;\ns.___(7);`, ['insert', 'push_back', 'add', 'append'], 'Sets have no "end"; you add with `insert`.'),
        out(`std::set<int> s = {5, 1, 4};\nfor (int x : s) std::cout << x;`, ['145', '514', '541', '154'], '`std::set` keeps its elements sorted from smallest to largest.'),
        out(`std::set<std::string> s = {"b", "a"};\nstd::cout << s.count("a");`, ['1', '0', '2', 'a'], '`count` returns 1 if the element exists and 0 if not.'),
        out(`std::set<int> s = {1, 2, 3};\ns.erase(2);\nstd::cout << s.size();`, ['2', '3', '1', '0'], '`erase` removes the 2 and two elements remain.'),
        mc('Which container stores unique values without order and with very fast lookup?', ['std::unordered_set', 'std::set', 'std::vector', 'std::array'], 'It uses a hash table internally, so it keeps no order.'),
        out(`std::set<int> s = {1, 2};\nauto r = s.insert(2);\nstd::cout << r.second << s.size();`, ['02', '13', '12', '03'], 'The 2 already existed: `insert` returns `second == false` (0) and the size stays at 2.'),
        // Final challenge
        out(`std::set<int> a = {1, 3, 5, 7};\nstd::set<int> b = {3, 4, 5};\nint common = 0;\nfor (int x : b) if (a.count(x)) common++;\na.insert(b.begin(), b.end());\nstd::cout << common << " " << a.size();`, ['2 5', '2 7', '3 5', '1 5'], 'The common values are 3 and 5. When `b` is inserted into `a`, only the 4 gets in: {1, 3, 4, 5, 7}, five elements.'),
      ],
    },
    // ───────────── Day 10 ─────────────
    {
      id: 'cpp-maps',
      t: 'Maps',
      d: 'std::map and std::unordered_map: key-value pairs.',
      guide: [
        { h: 'Dictionaries in C++', p: [
          '`std::map<Key, Value>` (header `<map>`) associates unique keys with values, like a phone book that links names to numbers.',
          'Keys are kept sorted. `m[key] = value` adds the pair or changes the value if the key already existed.' ],
          code: `#include <map>\n\nstd::map<std::string, int> ages;\nages["Ann"] = 31;\nages["Luke"] = 28;\nages["Ann"] = 32;           // replaces the value\nstd::cout << ages["Ann"] << " " << ages.size();  // 32 2` },
        { h: 'The [] trap', p: [
          'Reading a key that does not exist with `m["key"]` creates it with a default value (0 for numbers, empty text for strings). That is how keys nobody wanted sneak in.',
          'To read without creating, use `m.at("key")`, which throws `std::out_of_range` if it does not exist, or check first with `count`, `contains` (C++20) or `find`.' ],
          code: `std::map<std::string, int> stock = {{"bread", 4}};\nif (stock.contains("milk"))           // C++20\n    std::cout << stock.at("milk");\nauto it = stock.find("bread");\nif (it != stock.end())\n    std::cout << it->first << ": " << it->second;  // bread: 4` },
        { h: 'Looping over a map', p: [
          'Each element is a pair with `.first` (key) and `.second` (value). Since C++17 you can unpack it with `for (const auto& [key, value] : m)`.',
          'The loop goes in key order. `m.begin()->first` is the smallest key.' ],
          code: `std::map<std::string, double> prices = {{"pear", 2.1}, {"kiwi", 3.4}, {"grape", 2.8}};\nfor (const auto& [fruit, price] : prices)\n    std::cout << fruit << " " << price << "\\n";\n// grape 2.8\n// kiwi 3.4\n// pear 2.1` },
        { h: 'std::unordered_map', p: [
          '`std::unordered_map` (header `<unordered_map>`) has the same interface but uses a hash table: faster on average and without order.',
          'Use `std::map` when you want to go through the keys in order and `std::unordered_map` when you only look things up by key.' ] },
        { h: 'Real example: counting the words of a text', real: true, p: [
          'A review analyser wants to know which words are repeated most. `std::istringstream` (header `<sstream>`) splits the text on spaces, and `frequency[word]++` takes advantage of `[]` creating the key with 0 the first time.' ],
          code: `#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\n\nint main() {\n    std::string text = "the cat and the dog and the fish";\n    std::istringstream in(text);\n    std::map<std::string, int> frequency;\n    std::string word;\n    while (in >> word) frequency[word]++;\n    for (const auto& [w, n] : frequency)\n        std::cout << w << ": " << n << "\\n";\n    // and: 2, cat: 1, dog: 1, fish: 1, the: 3 (one per line)\n}` },
      ],
      x: [
        out(`std::map<std::string, int> m;\nm["a"] = 1;\nm["a"] = 5;\nstd::cout << m["a"];`, ['5', '1', '6', 'Error'], 'Keys are unique: the second assignment replaces the value.'),
        out(`std::map<int, char> m = {{2, 'b'}, {1, 'a'}};\nfor (auto& [k, v] : m) std::cout << v;`, ['ab', 'ba', '12', 'a'], '`std::map` goes through its elements in key order: 1 and then 2.'),
        fill(`if (m.___("key")) {\n    std::cout << "exists";\n}`, ['count', 'has', 'exists', 'includes'], '`count` returns 1 if the key exists. C++20 also has `contains`.'),
        out(`std::map<std::string, int> m;\nstd::cout << m["x"] << m.size();`, ['01', '00', 'Error', 'x1'], 'Reading `m["x"]` creates the key with value 0, so the size becomes 1.'),
        mc('What does `m.at("z")` do if the key does not exist?', ['Throws std::out_of_range', 'Creates the key with 0', 'Returns 0', 'It does not compile'], '`at` is the safe way to read without creating keys.'),
        mc('To count words without needing order and as fast as possible, which container would you use?', ['std::unordered_map', 'std::map', 'std::vector', 'std::set'], 'Its lookups take constant time on average.'),
        out(`std::map<char, int> c;\nfor (char ch : std::string("data bat"))\n    if (ch != ' ') c[ch]++;\nstd::cout << c['a'] << c['t'] << c.size();`, ['324', '314', '325', '323'], '"a" appears three times, "t" twice, and "d" and "b" once: a=3, t=2 and there are 4 different keys.'),
        // Final challenge
        out(`std::map<std::string, int> stock = {{"bread", 3}, {"milk", 0}};\nstock["bread"] -= 1;\nstock["eggs"] += 12;\nint total = 0;\nfor (const auto& [p, n] : stock) total += n;\nstd::cout << stock.size() << " " << total << " " << stock.begin()->first;`, ['3 14 bread', '2 14 bread', '3 15 bread', '3 14 eggs'], '`stock["eggs"]` creates the key with 0 and adds 12. Total: 2 + 0 + 12 = 14. The smallest key in alphabetical order is "bread".'),
      ],
    },
    // ───────────── Day 11 ─────────────
    {
      id: 'cpp-functions',
      t: 'Functions',
      d: 'Declaration, prototypes, default values, overloading and recursion.',
      guide: [
        { h: 'Declaring and calling functions', p: [
          'A function groups code under a name so you can reuse it: `return_type name(parameters) { ... }`.',
          '`return` hands back the result and ends the function. If it returns nothing, the return type is `void`.',
          'Each parameter has its type: `int add(int a, int b)`. The compiler checks that you call the function with the right types.' ],
          code: `#include <iostream>\n#include <string>\n\nint square(int n) {\n    return n * n;\n}\n\nvoid greet(std::string name) {\n    std::cout << "Hello, " << name << "\\n";\n}\n\nint main() {\n    std::cout << square(4) << "\\n";  // 16\n    greet("Ada");                    // Hello, Ada\n}` },
        { h: 'Prototypes', p: [
          'The compiler reads the file from top to bottom: a function must be declared before it is used.',
          'If you prefer to write `main` first, declare the prototype before it: the function header ending in `;`. The full definition can come further down.' ],
          code: `int cube(int n);   // prototype\n\nint main() {\n    std::cout << cube(3);  // 27\n}\n\nint cube(int n) {  // definition\n    return n * n * n;\n}` },
        { h: 'Default values and overloading', p: [
          'A parameter can have a default value that is used if you don’t pass it. Parameters with default values always go at the end.',
          'Overloading allows several functions with the same name and different parameters. The compiler picks the version based on the arguments.' ],
          code: `double area(double side) { return side * side; }\ndouble area(double base, double height) { return base * height; }\n\nvoid notify(std::string msg, int times = 1) {\n    for (int i = 0; i < times; i++) std::cout << msg << "\\n";\n}\n\nstd::cout << area(3) << " " << area(2, 5) << "\\n";  // 9 10\nnotify("Saved");        // once\nnotify("Error!", 2);    // twice` },
        { h: 'Recursion', p: [
          'A recursive function calls itself with a smaller problem. It always needs a base case that stops the calls.',
          'Without a base case, the calls pile up on the stack until the program crashes (stack overflow).' ],
          code: `int factorial(int n) {\n    if (n <= 1) return 1;          // base case\n    return n * factorial(n - 1);   // recursive case\n}\n\nstd::cout << factorial(5);  // 120` },
        { h: 'Real example: final price with a discount', real: true, p: [
          'A shop calculates the final price of many products. With default values, the same function works with or without a discount and with the standard 21 % VAT.' ],
          code: `#include <iostream>\n\ndouble final_price(double price, double discount = 0, double vat = 0.21) {\n    return price * (1 - discount) * (1 + vat);\n}\n\nint main() {\n    std::cout << final_price(100) << "\\n";            // 121\n    std::cout << final_price(100, 0.2) << "\\n";       // 96.8\n    std::cout << final_price(100, 0, 0.10) << "\\n";   // 110\n}` },
      ],
      x: [
        out(`int twice(int x) { return x * 2; }\nstd::cout << twice(twice(3));`, ['12', '6', '9', 'Error'], '`twice(3)` is 6 and `twice(6)` is 12.'),
        mc('Which return type does a function that returns nothing use?', ['void', 'null', 'none', 'empty'], '`void` means the function returns no value.'),
        fill(`int add(int a, int b) {\n    ___ a + b;\n}`, ['return', 'yield', 'give', 'break'], '`return` hands the result back to the code that called the function.'),
        out(`void f(int a, int b = 10) {\n    std::cout << a + b;\n}\nf(5);`, ['15', '5', '510', 'Error'], 'Since `b` is not passed, it takes its default value: 5 + 10 = 15.'),
        out(`void kind(int) { std::cout << "int "; }\nvoid kind(double) { std::cout << "double "; }\nkind(3);\nkind(3.0);`, ['int double ', 'int int ', 'double double ', 'Error'], 'Overloading: `3` is an `int` and `3.0` a `double`, so a different version is called each time.'),
        typ('Complete the base case of the factorial', `int fact(int n) {\n    if (n <= 1) return ___;\n    return n * fact(n - 1);\n}`, '1', 'The factorial of 0 and of 1 is 1. Without this base case the recursion would never end.'),
        mc('Where must parameters with default values go?', ['At the end of the list', 'At the start of the list', 'In any position', 'Only in void functions'], 'If a parameter has a default value, all the ones after it must have one too.'),
        // Final challenge
        out(`int f(int n) {\n    if (n == 0) return 0;\n    return n % 10 + f(n / 10);\n}\nint g(int a, int b = 2) { return a * b; }\n\nstd::cout << f(492) << " " << g(f(31));`, ['15 8', '15 4', '492 8', '15 6'], '`f` adds up the digits recursively: 4 + 9 + 2 = 15 and 3 + 1 = 4. Then `g(4)` uses `b = 2`: 8.'),
      ],
    },
    // ───────────── Day 12 ─────────────
    {
      id: 'cpp-headers',
      t: 'Headers and namespaces',
      d: '.h and .cpp files, #include, #pragma once and namespace.',
      guide: [
        { h: 'Splitting code into files', p: [
          'In real projects the code is spread over several files. The header file (`.h` or `.hpp`) declares what exists and the `.cpp` file contains the implementation.',
          'Other files include the header to use those functions. All the `.cpp` files are compiled together: `g++ main.cpp mathutils.cpp -o app`.' ],
          code: `// mathutils.h\n#pragma once\nint add(int a, int b);\ndouble average(int a, int b);\n\n// mathutils.cpp\n#include "mathutils.h"\nint add(int a, int b) { return a + b; }\ndouble average(int a, int b) { return (a + b) / 2.0; }\n\n// main.cpp\n#include <iostream>\n#include "mathutils.h"\nint main() {\n    std::cout << add(2, 3) << " " << average(2, 3);  // 5 2.5\n}` },
        { h: '#include and #pragma once', p: [
          '`#include` literally copies the content of the file at that point. With `< >` the system and standard library headers are searched; with `" "` your project is searched first.',
          'If a header is included twice, its definitions are repeated and errors appear. `#pragma once` prevents this. The classic equivalent is include guards with `#ifndef`.' ],
          code: `// classic form: include guards\n#ifndef MATHUTILS_H\n#define MATHUTILS_H\n\nint add(int a, int b);\n\n#endif` },
        { h: 'namespace', p: [
          'A `namespace` groups names so they don’t clash with those of other libraries. That is why the standard library lives inside `std`.',
          'From outside you access it with the `::` operator: `geometry::circle_area(2)`. Namespaces can be nested.' ],
          code: `namespace geometry {\n    const double PI = 3.14159;\n    double circle_area(double r) { return PI * r * r; }\n}\n\nstd::cout << geometry::circle_area(2);  // 12.5664` },
        { h: 'using and aliases', p: [
          '`using std::cout;` brings in a single name. `using namespace std;` brings in all of them: handy in small exercises, but it can cause name clashes.',
          'Never write `using namespace` in a `.h` file: it would be forced on every file that includes it.',
          'For long names you can create an alias: `namespace fs = std::filesystem;`.' ],
          code: `#include <filesystem>\nnamespace fs = std::filesystem;\nusing std::cout;\n\ncout << fs::current_path();  // the current folder` },
        { h: 'Real example: utilities for a shop', real: true, p: [
          'The team behind an online shop puts its calculations in its own namespace, with the header separate from the implementation. That way any part of the program can use them without clashing with other libraries.' ],
          code: `// shop.h\n#pragma once\nnamespace shop {\n    double with_vat(double price);\n    bool free_shipping(double total);\n}\n\n// shop.cpp\n#include "shop.h"\nnamespace shop {\n    double with_vat(double price) { return price * 1.21; }\n    bool free_shipping(double total) { return total >= 50; }\n}\n\n// main.cpp\n#include <iostream>\n#include "shop.h"\nint main() {\n    double total = shop::with_vat(45);\n    std::cout << total << " " << shop::free_shipping(total);  // 54.45 1\n}` },
      ],
      x: [
        mc('What does a `.h` file usually contain?', ['Declarations of functions and classes', 'The main function', 'The already compiled program', 'Only comments'], 'The header says what exists; the `.cpp` contains how it works.'),
        fill(`// utils.h\n#___ once\nint maximum(int a, int b);`, ['pragma', 'define', 'include', 'ifndef'], '`#pragma once` prevents the header from being included twice in the same file.'),
        out(`namespace a { int x = 1; }\nnamespace b { int x = 2; }\nstd::cout << a::x + b::x;`, ['3', '12', '2', 'Error'], 'Each `x` lives in its own namespace, so they don’t clash: 1 + 2 = 3.'),
        mc('What is the difference between `#include <vector>` and `#include "utils.h"`?', ['With < > system headers are searched; with " " your project is searched first', 'None', 'With " " only STL headers are included', 'With < > the file is included twice'], 'Use quotes for your own headers and `< >` for the standard library ones.'),
        typ('Write the operator that accesses a name in a namespace', `std___cout << "Hello";`, '::', '`::` is the scope operator: `std::cout` is the `cout` from the `std` namespace.'),
        mc('Why is it a bad idea to write `using namespace std;` in a `.h` file?', ['It is forced on every file that includes it and can cause name clashes', 'It makes the program slower', 'It does not compile inside a .h', 'It deletes your own namespaces'], 'Anyone including your header would get all of `std` without asking for it.'),
        ord('Order the command that compiles two files into an executable called app', ['g++', 'main.cpp', 'util.cpp', '-o', 'app'], ['#include', 'util.h'], 'All the `.cpp` files are passed to the compiler; the headers are not, because the `.cpp` files already include them.'),
        // Final challenge
        out(`namespace app {\n    int v = 2;\n    namespace beta {\n        int v = 3;\n        int twice() { return v * 2; }\n    }\n    int sum() { return v + beta::v; }\n}\nint v = 1;\n\nstd::cout << v << app::sum() << app::beta::twice() << ::v;`, ['1561', '2561', '1531', '1562'], 'Outside the namespaces, `v` is the global one (1). Inside `app`, `v` is 2 and `beta::v` is 3, so `sum()` gives 5. Inside `beta`, `v` is 3 and `twice()` gives 6. `::v` is the global one: 1.'),
      ],
    },
    // ───────────── Day 13 ─────────────
    {
      id: 'cpp-references',
      t: 'References',
      d: 'Pass by value, references, pass by reference and const&.',
      guide: [
        { h: 'Pass by value', p: [
          'By default, C++ passes functions a copy of each argument. If the function changes the parameter, the original never finds out.',
          'Copying an `int` is cheap, but copying a vector with a million elements is not.' ],
          code: `void increment(int n) {\n    n++;               // changes the copy\n}\n\nint x = 5;\nincrement(x);\nstd::cout << x;        // 5` },
        { h: 'References', p: [
          'A reference is another name for a variable that already exists: `int& r = x;`. Everything you do with `r` happens to `x`.',
          'A reference is initialised when it is created and can never be made to refer to another variable.',
          'Never return a reference to a local variable of a function: the variable disappears on exit and the reference is left dangling.' ],
          code: `int x = 10;\nint& r = x;    // r is an alias of x\nr = 25;\nstd::cout << x << "\\n";  // 25\nx++;\nstd::cout << r;           // 26` },
        { h: 'Pass by reference', p: [
          'If the parameter is a reference (`int& n`), the function works directly with the original variable.',
          'That way a function can modify several values of the calling code, as in this swap.' ],
          code: `void swap_values(int& a, int& b) {\n    int tmp = a;\n    a = b;\n    b = tmp;\n}\n\nint x = 1, y = 2;\nswap_values(x, y);\nstd::cout << x << y;  // 21` },
        { h: 'const&: reading without copying', p: [
          '`const T&` passes the original without copying it and, thanks to `const`, the function cannot modify it.',
          'Rule of thumb: small types (`int`, `double`, `char`) by value; large objects that are only read (`std::string`, `std::vector`) by `const&`; and whatever the function must modify, by `&`.' ],
          code: `double average(const std::vector<double>& grades) {\n    double sum = 0;\n    for (double g : grades) sum += g;\n    // grades.push_back(10);  // error: it is const\n    return sum / grades.size();\n}` },
        { h: 'Real example: discounts in the cart', real: true, p: [
          'A shop applies a discount to the whole cart and then calculates the total. The first function modifies the vector (`&`); the second only reads it (`const&`).' ],
          code: `#include <iostream>\n#include <vector>\n\nvoid apply_discount(std::vector<double>& prices, double pct) {\n    for (double& p : prices) p *= 1 - pct;\n}\n\ndouble total(const std::vector<double>& prices) {\n    double t = 0;\n    for (double p : prices) t += p;\n    return t;\n}\n\nint main() {\n    std::vector<double> cart = {20, 50, 30};\n    apply_discount(cart, 0.10);\n    std::cout << "Total: " << total(cart) << "\\n";  // Total: 90\n}` },
      ],
      x: [
        out(`void f(int n) { n = 10; }\n\nint x = 1;\nf(x);\nstd::cout << x;`, ['1', '10', '11', 'Error'], 'By value, the function receives a copy and the original does not change.'),
        out(`void f(int& n) { n = 10; }\n\nint x = 1;\nf(x);\nstd::cout << x;`, ['10', '1', '11', 'Error'], 'With `int&` the function works with the original variable.'),
        fill(`void double_it(int___ n) {\n    n *= 2;\n}`, ['&', '*', '#', '@'], 'With `&` the parameter is a reference and the change reaches the original.'),
        out(`int a = 3;\nint& r = a;\nr += 4;\nstd::cout << a;`, ['7', '3', '4', 'Error'], '`r` is another name for `a`, so `r += 4` modifies `a`.'),
        mc('What is the best way to pass a large vector that the function will only read?', ['const std::vector<int>&', 'std::vector<int>', 'std::vector<int>&', 'std::vector<int>*'], '`const&` avoids the copy and guarantees it will not be modified.'),
        mc('What happens with `int& r;` without initialisation?', ['It does not compile: a reference must be initialised', 'It is 0', 'It refers to nullptr', 'It contains garbage'], 'A reference must always refer to something from the moment it is created.'),
        typ('Make the loop modify the original elements', `std::vector<int> v = {1, 2, 3};\nfor (auto___ x : v) x *= 2;`, '&', 'With `auto&`, `x` is a reference to each element, not a copy.'),
        // Final challenge
        out(`void f(int a, int& b, const int& c) {\n    a++;\n    b += c;\n}\n\nint x = 1, y = 2, z = 3;\nf(x, y, z);\nf(y, z, x);\nstd::cout << x << y << z;`, ['154', '254', '153', '264'], 'First call: `a` is a copy of `x` (it does not change) and `y` becomes 2 + 3 = 5. Second: `a` is a copy of `y` and `z` becomes 3 + 1 = 4.'),
      ],
    },
    // ───────────── Day 14 ─────────────
    {
      id: 'cpp-pointers',
      t: 'Pointers',
      d: 'Addresses, *, &, nullptr and pointer arithmetic.',
      guide: [
        { h: 'Memory addresses', p: [
          'Every variable lives at a memory location with an address. `&x` returns the address of `x`.',
          'A pointer is a variable that stores an address. `int* p = &x;` reads as "p is a pointer to int that points to x".' ],
          code: `int x = 42;\nint* p = &x;\nstd::cout << p << "\\n";   // an address, e.g. 0x7ffd5e8c\nstd::cout << *p << "\\n";  // 42` },
        { h: 'Dereferencing with *', p: [
          '`*p` accesses the value `p` points to: it works both for reading and for writing.',
          'Watch out for the two uses of `*`: in a declaration (`int* p`) it says it is a pointer; in an expression (`*p`) it accesses the value. And `&` also has two uses: address (`&x`) and reference (`int& r`).' ],
          code: `int x = 5;\nint* p = &x;\n*p = 20;          // changes x through the pointer\nstd::cout << x;   // 20` },
        { h: 'nullptr', p: [
          'A pointer that points to nothing should be `nullptr`. Dereferencing a null pointer is undefined behaviour and usually crashes the program.',
          'Always check pointers that could be null before using them. An uninitialised pointer is even worse: it points anywhere.' ],
          code: `int* p = nullptr;\nif (p != nullptr) {\n    std::cout << *p;\n} else {\n    std::cout << "Points to nothing";\n}` },
        { h: 'Pointers and arrays', p: [
          'The name of an array turns into a pointer to its first element. Adding 1 to a pointer moves it one element forward, not one byte.',
          '`p[i]` is the same as `*(p + i)`. Subtracting two pointers into the same array tells you how many elements apart they are.' ],
          code: `int a[] = {10, 20, 30};\nint* p = a;               // points to a[0]\nstd::cout << *(p + 1) << " " << p[2] << "\\n";  // 20 30\np++;                      // now points to a[1]\nstd::cout << *p;          // 20` },
        { h: 'Real example: looking up a product code', real: true, p: [
          'A warehouse looks up a code in its inventory. The function returns a pointer to the element it found or `nullptr` if it does not exist, and the caller checks the result.' ],
          code: `#include <iostream>\n#include <vector>\n\nconst int* find_code(const std::vector<int>& codes, int target) {\n    for (const int& c : codes)\n        if (c == target) return &c;\n    return nullptr;\n}\n\nint main() {\n    std::vector<int> stock = {1201, 3307, 4410};\n    if (const int* p = find_code(stock, 3307))\n        std::cout << "Found: " << *p << "\\n";     // Found: 3307\n    if (find_code(stock, 9999) == nullptr)\n        std::cout << "Not found\\n";               // Not found\n}` },
      ],
      x: [
        mc('What does a pointer store?', ['The memory address of another piece of data', 'A copy of the data', 'The size of the data', 'The name of the variable'], 'A pointer holds an address; with `*` you access the data stored there.'),
        fill(`int x = 5;\nint* p = ___x;`, ['&', '*', '#', '->'], '`&x` gets the address of `x`.'),
        out(`int x = 5;\nint* p = &x;\n*p = 9;\nstd::cout << x;`, ['9', '5', 'An address', 'Error'], '`*p = 9` writes to the variable `p` points to, which is `x`.'),
        out(`int a[] = {2, 4, 6, 8};\nint* p = a;\np += 2;\nstd::cout << *p;`, ['6', '4', '2', '8'], '`p` starts at `a[0]` and moves two elements forward to `a[2]`.'),
        typ('Write the value of a pointer that points to nothing', `int* p = ___;`, 'nullptr', '`nullptr` is the null pointer of modern C++.'),
        mc('What happens when you do `*p` while `p` is `nullptr`?', ['Undefined behaviour; the program usually crashes', 'It returns 0', 'It throws an exception', 'It does not compile'], 'That is why you check `p != nullptr` before dereferencing.'),
        out(`int x = 3, y = 7;\nint* p = &x;\np = &y;\n*p += 1;\nstd::cout << x << y;`, ['38', '47', '37', '48'], 'A pointer can change its target: after `p = &y`, the `+= 1` affects `y`.'),
        // Final challenge
        out(`int v[] = {5, 1, 4, 2};\nint* p = v;\nint* q = v + 3;\nstd::swap(*p, *q);\np++;\n*p = *q * 10;\nstd::cout << v[0] << v[1] << " " << q - p;`, ['250 2', '250 3', '510 2', '210 2'], 'The swap leaves {2, 1, 4, 5}. `p` moves to `v[1]`, which becomes 5 * 10 = 50. `q` points to `v[3]` and `p` to `v[1]`: they are 2 elements apart.'),
      ],
    },
    // ───────────── Day 15 ─────────────
    {
      id: 'cpp-memory',
      t: 'Dynamic memory',
      d: 'Stack and heap, new, delete, leaks and dangling pointers.',
      guide: [
        { h: 'Stack and heap', p: [
          'Local variables live on the stack: they are created when their block starts and destroyed automatically when it ends. It is fast, but its size is limited.',
          'The heap stores data whose size or lifetime is decided while the program runs. That memory is allocated and freed by hand.' ] },
        { h: 'new and delete', p: [
          '`new` allocates memory on the heap and returns a pointer. `delete` frees it.',
          'For arrays you use `new T[n]` and `delete[]`. Mixing them (`new[]` with `delete`) is undefined behaviour.',
          'After freeing, it is a good idea to set the pointer to `nullptr` so you don’t use it by mistake.' ],
          code: `int* p = new int(42);       // an int on the heap\nstd::cout << *p << "\\n";     // 42\ndelete p;\np = nullptr;\n\nint n = 5;\nint* data = new int[n];     // array whose size is decided at run time\ndata[0] = 7;\ndelete[] data;` },
        { h: 'Memory leaks', p: [
          'If you lose the pointer without calling `delete`, that memory stays allocated until the program ends: it is a leak.',
          'In a program that runs for days, like a server, leaks end up exhausting the memory.' ],
          code: `void process() {\n    int* buffer = new int[1000];\n    // ... work ...\n    if (true) return;   // leak! it leaves without delete[]\n    delete[] buffer;\n}` },
        { h: 'Dangling pointers and double delete', p: [
          'A dangling pointer points to memory that has already been freed. Reading or writing through it is undefined behaviour.',
          'Calling `delete` twice on the same memory is too. Setting the pointer to `nullptr` after freeing avoids both errors, because `delete nullptr` does nothing.' ] },
        { h: 'Real example: grades of a class of variable size', real: true, p: [
          'A school program does not know how many students each class will have until it runs. First we solve it with `new[]` and `delete[]`.',
          'In modern C++ the usual choice is `std::vector`, which allocates and frees by itself. On day 26 you will see smart pointers, which do the same with single objects.' ],
          code: `#include <iostream>\n#include <vector>\n\nint main() {\n    int n = 4;\n    double* grades = new double[n]{6.5, 8, 9.5, 7};\n    double sum = 0;\n    for (int i = 0; i < n; i++) sum += grades[i];\n    std::cout << "Average: " << sum / n << "\\n";   // Average: 7.75\n    delete[] grades;   // essential\n\n    // The same, without new or delete:\n    std::vector<double> v = {6.5, 8, 9.5, 7};\n}` },
      ],
      x: [
        mc('Where are the local variables of a function stored?', ['On the stack', 'On the heap', 'On the disk', 'In a temporary file'], 'They are created when the block starts and destroyed automatically when it ends.'),
        fill(`int* data = new int[100];\n// ...\n___ data;`, ['delete[]', 'delete', 'free', 'remove'], 'What was allocated with `new[]` is freed with `delete[]`.'),
        mc('What is a memory leak?', ['Memory allocated with new that is never freed', 'Reading past the end of an array', 'A pointer that is nullptr', 'An uninitialised variable'], 'The memory stays taken even though nobody can use it.'),
        out(`int* p = new int(7);\n*p *= 3;\nint r = *p;\ndelete p;\nstd::cout << r;`, ['21', '7', 'Garbage', 'Error'], '`r` stores a copy of the value (21) before freeing, so it can be used without problems.'),
        typ('Free the integer allocated with new', `int* p = new int(5);\n___ p;`, 'delete', 'A single object created with `new` is freed with `delete` (no brackets).'),
        mc('What is a dangling pointer?', ['A pointer to memory that has already been freed', 'A pointer that is nullptr', 'A pointer to another pointer', 'A pointer to a constant'], 'Using it is undefined behaviour.'),
        ord('Allocate an array of n integers on the heap', ['int*', 'data', '=', 'new', 'int[n]', ';'], ['malloc', 'delete'], '`new int[n]` allocates `n` integers and returns a pointer to the first one.'),
        // Final challenge
        out(`int n = 4;\nint* a = new int[n];\nfor (int i = 0; i < n; i++) a[i] = i * i;\nint* b = a + 1;\nint s = 0;\nfor (int i = 0; i < 3; i++) s += b[i];\ndelete[] a;\nstd::cout << s;`, ['14', '13', '5', 'Error'], 'The array is {0, 1, 4, 9}. `b` points to `a[1]`, so it adds 1 + 4 + 9 = 14. `s` is calculated before freeing.'),
      ],
    },
    // ───────────── Day 16 ─────────────
    {
      id: 'cpp-structs',
      t: 'Structs and enums',
      d: 'Grouping data with struct and defining constants with enum class.',
      guide: [
        { h: 'struct: grouping data', p: [
          'A `struct` brings several related pieces of data together under one type. Each piece is a member and you access it with a dot: `p.x`.',
          'The definition ends with `;` after the closing brace. Forgetting it produces confusing errors on the next line.' ],
          code: `struct Point {\n    double x;\n    double y;\n};\n\nPoint p{3, 4};\np.x = 5;\nstd::cout << p.x << "," << p.y;  // 5,4` },
        { h: 'Default values and functions', p: [
          'Members can have a default value that is used if you don’t give another one when creating the object.',
          'To pass a struct to a function that only reads it, use `const&` to avoid copying it.' ],
          code: `struct Product {\n    std::string name;\n    double price = 0;\n    int stock = 0;\n};\n\ndouble stock_value(const Product& p) {\n    return p.price * p.stock;\n}\n\nProduct keyboard{"Keyboard", 25.5, 4};\nstd::cout << stock_value(keyboard);  // 102` },
        { h: 'Vectors of structs and structured bindings', p: [
          'A `std::vector<Product>` works like a small table: each element is a row.',
          'Since C++17 you can unpack the members into variables: `auto [name, price, stock] = p;`. It also works in the range-for.' ],
          code: `std::vector<Point> route = {{0, 0}, {3, 4}, {6, 8}};\nfor (const auto& [x, y] : route)\n    std::cout << "(" << x << ", " << y << ") ";\n// (0, 0) (3, 4) (6, 8)` },
        { h: 'enum class', p: [
          'An `enum class` defines a type with a closed set of named values. They are written with the type name in front: `Color::Green`.',
          'The classic `enum` puts its names in the outer scope and silently converts to `int`. `enum class` avoids both problems; if you need the number, convert it with `static_cast<int>`.',
          'By default, the first value is 0, the second 1, and so on.' ],
          code: `enum class Color { Red, Green, Blue };\n\nColor c = Color::Green;\nif (c == Color::Green) std::cout << "Go ahead\\n";\nstd::cout << static_cast<int>(c);  // 1` },
        { h: 'Real example: orders in a shop', real: true, p: [
          'A shop stores each order in a struct and its status in an `enum class`. That way it is impossible to write a made-up status like `"shiped"`, and a `switch` turns each status into text.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nenum class Status { Pending, Shipped, Delivered };\n\nstruct Order {\n    int id;\n    double total;\n    Status status;\n};\n\nstd::string text(Status s) {\n    switch (s) {\n        case Status::Pending:   return "pending";\n        case Status::Shipped:   return "shipped";\n        case Status::Delivered: return "delivered";\n    }\n    return "?";\n}\n\nint main() {\n    std::vector<Order> orders = {\n        {101, 35.5, Status::Shipped},\n        {102, 12.0, Status::Pending},\n        {103, 80.0, Status::Pending}};\n    double to_ship = 0;\n    for (const auto& o : orders) {\n        std::cout << o.id << ": " << text(o.status) << "\\n";\n        if (o.status == Status::Pending) to_ship += o.total;\n    }\n    std::cout << "Waiting to ship: " << to_ship << " euros\\n";  // 92 euros\n}` },
      ],
      x: [
        fill(`struct Point {\n    int x, y;\n}___`, [';', ':', ',', '.'], 'A struct definition ends with a semicolon after the brace.'),
        out(`struct P { int x; int y; };\n\nP p{2, 5};\np.y += p.x;\nstd::cout << p.y;`, ['7', '5', '2', '25'], '`p{2, 5}` sets x = 2 and y = 5; then y becomes 5 + 2 = 7.'),
        mc('What advantage does `enum class` have over the classic `enum`?', ['Its names don’t mix with the others and it does not turn into an int by accident', 'It uses less memory', 'It allows decimal values', 'It can be used as a std::string'], 'That is why you write `Color::Red` and use `static_cast<int>` to get the number.'),
        out(`enum class Size { S, M, L, XL };\nstd::cout << static_cast<int>(Size::L);`, ['2', '3', 'L', 'Error'], 'Values are numbered from 0: S = 0, M = 1, L = 2.'),
        typ('Access the Green value of the enum class', `enum class Light { Red, Amber, Green };\nLight l = Light___Green;`, '::', 'The values of an `enum class` are written with the scope operator: `Light::Green`.'),
        out(`struct Config {\n    int volume = 50;\n    bool muted = false;\n};\n\nConfig c;\nc.volume += 10;\nstd::cout << c.volume << c.muted;`, ['600', '60false', '500', '6001'], 'The default values give 50 and `false`. 50 + 10 = 60 and the `bool` prints as 0.'),
        out(`struct Pair { std::string k; int v; };\n\nPair p{"age", 30};\nauto [key, value] = p;\nstd::cout << key << "=" << value;`, ['age=30', 'k=v', '30=age', 'Error'], 'The structured binding copies the members in order: `key` gets "age" and `value` gets 30.'),
        // Final challenge
        out(`struct Item { std::string name; double price; int units; };\n\nstd::vector<Item> cart = {{"bread", 1.5, 2}, {"milk", 0.9, 6}, {"cheese", 4.0, 1}};\ndouble total = 0, max_line = 0;\nstd::string priciest;\nfor (const auto& [n, p, u] : cart) {\n    total += p * u;\n    if (p * u > max_line) { max_line = p * u; priciest = n; }\n}\nstd::cout << total << " " << priciest;`, ['12.4 milk', '12.4 cheese', '6.4 cheese', '9 milk'], 'The lines are worth 3, 5.4 and 4, which add up to 12.4. The most expensive line is the milk (5.4), even though the cheese has the highest unit price.'),
      ],
    },
    // ───────────── Day 17 ─────────────
    {
      id: 'cpp-classes',
      t: 'Classes',
      d: 'class, public, private, const methods, this and ->.',
      guide: [
        { h: 'Data and behaviour together', p: [
          'A `class` groups data (attributes) and the functions that work with them (methods). Each object created from the class has its own data.',
          'The difference from `struct` is the default access: in a `class` everything is private unless you say otherwise; in a `struct`, public.' ],
          code: `class Counter {\npublic:\n    void increment() { value++; }\n    int get() const { return value; }\nprivate:\n    int value = 0;\n};\n\nCounter c;\nc.increment();\nc.increment();\nstd::cout << c.get();  // 2\n// c.value = 10;  // error: value is private` },
        { h: 'Encapsulation', p: [
          'The usual approach is to keep the attributes `private` and offer `public` methods that handle them. That way the class makes sure its data is always valid.',
          'If tomorrow you change how the data is stored inside, the code that uses the class does not have to change.' ],
          code: `class Thermostat {\npublic:\n    void set(int d) {\n        if (d < 15) d = 15;   // the class enforces its limits\n        if (d > 30) d = 30;\n        degrees = d;\n    }\n    int get() const { return degrees; }\nprivate:\n    int degrees = 20;\n};` },
        { h: 'const methods', p: [
          'A method marked `const` at the end promises not to modify the object. The compiler checks it.',
          'Only `const` methods can be called on `const` objects or `const&` references. Mark as `const` every method that only reads.' ] },
        { h: 'this and ->', p: [
          'Inside a method, `this` is a pointer to the current object. It is useful, for example, when a parameter has the same name as an attribute.',
          'With a pointer to an object, `p->method()` is the short form of `(*p).method()`.' ],
          code: `class Player {\npublic:\n    void set_name(std::string name) { this->name = name; }\n    std::string get() const { return name; }\nprivate:\n    std::string name;\n};\n\nPlayer pl;\nPlayer* p = &pl;\np->set_name("Leo");\nstd::cout << pl.get();  // Leo` },
        { h: 'Real example: a bank account', real: true, p: [
          'A bank would never let any part of the program change the balance directly. The class only allows depositing and withdrawing valid amounts, and returns a `bool` to say whether the operation was rejected.' ],
          code: `#include <iostream>\n\nclass Account {\npublic:\n    bool deposit(double amount) {\n        if (amount <= 0) return false;\n        balance += amount;\n        return true;\n    }\n    bool withdraw(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        return true;\n    }\n    double get_balance() const { return balance; }\nprivate:\n    double balance = 0;\n};\n\nint main() {\n    Account a;\n    a.deposit(200);\n    std::cout << a.withdraw(500) << " " << a.withdraw(50) << "\\n";  // 0 1\n    std::cout << a.get_balance() << "\\n";                         // 150\n}` },
      ],
      x: [
        mc('What is the default access of the members of a `class`?', ['private', 'public', 'protected', 'It has none'], 'In a `class` everything is private unless stated otherwise; in a `struct`, public.'),
        fill(`class Cat {\n___:\n    void meow() { std::cout << "Meow"; }\n};`, ['public', 'open', 'export', 'global'], '`public:` makes whatever follows usable from outside the class.'),
        out(`class C {\npublic:\n    void add(int n) { total += n; }\n    int get() const { return total; }\nprivate:\n    int total = 0;\n};\n\nC c;\nc.add(4);\nc.add(-1);\nstd::cout << c.get();`, ['3', '4', '5', 'Error'], 'The object keeps its `total` between calls: 0 + 4 - 1 = 3.'),
        mc('What does the final `const` in `int get() const` mean?', ['The method does not modify the object', 'It returns a constant', 'It cannot be redefined', 'It can only be called once'], 'That way the method can also be used with `const` objects.'),
        typ('Call the method through a pointer', `Account a;\nAccount* p = &a;\np___deposit(50);`, '->', '`p->deposit(50)` is the same as `(*p).deposit(50)`.'),
        mc('What happens with `c.total = 99;` if `total` is private?', ['It does not compile', 'The value changes', 'It throws an exception', 'It is silently ignored'], 'The compiler blocks access to private members from outside the class.'),
        out(`class Thermostat {\npublic:\n    void set(int d) { degrees = d < 15 ? 15 : (d > 30 ? 30 : d); }\n    int get() const { return degrees; }\nprivate:\n    int degrees = 20;\n};\n\nThermostat t;\nt.set(42);\nstd::cout << t.get();`, ['30', '42', '20', '15'], 'The method limits the value to the 15-30 range, so 42 becomes 30.'),
        // Final challenge
        out(`class Account {\npublic:\n    bool deposit(double x) {\n        if (x <= 0) return false;\n        balance += x;\n        return true;\n    }\n    bool withdraw(double x) {\n        if (x > balance) return false;\n        balance -= x;\n        return true;\n    }\n    double get() const { return balance; }\nprivate:\n    double balance = 0;\n};\n\nAccount c;\nc.deposit(100);\nc.deposit(-20);\nbool a = c.withdraw(30);\nbool b = c.withdraw(80);\nstd::cout << a << b << " " << c.get();`, ['10 70', '11 -10', '10 50', '11 70'], 'The negative deposit is rejected: the balance is 100. Withdrawing 30 works (1) and leaves 70; withdrawing 80 does not (0) because it exceeds the balance.'),
      ],
    },
    // ───────────── Day 18 ─────────────
    {
      id: 'cpp-constructors',
      t: 'Constructors and destructors',
      d: 'Initialisation, initialiser lists, explicit, destructors and RAII.',
      guide: [
        { h: 'Constructors', p: [
          'A constructor is a special method that runs when the object is created. It has the same name as the class and no return type, not even `void`.',
          'It makes the object start life with valid data so you don’t have to set it up afterwards.' ],
          code: `class Product {\npublic:\n    Product(std::string n, double p) {\n        name = n;\n        price = p;\n    }\n    void show() const { std::cout << name << ": " << price << "\\n"; }\nprivate:\n    std::string name;\n    double price;\n};\n\nProduct p("Mouse", 19.9);\np.show();  // Mouse: 19.9` },
        { h: 'Initialiser list', p: [
          'The preferred way to give attributes their values is the initialiser list, which goes after `:` before the body. It initialises directly instead of creating and then assigning.',
          'It is required for `const` attributes and references. Attributes are initialised in the order they are declared in the class, not in the order of the list.' ],
          code: `class Product {\npublic:\n    Product(std::string n, double p) : name(n), price(p) {}\nprivate:\n    std::string name;\n    double price;\n};` },
        { h: 'Several constructors and explicit', p: [
          'A class can have several constructors (overloading). The one with no parameters is the default constructor.',
          'A one-parameter constructor allows implicit conversions: `Temperature t = 30;`. Mark it `explicit` to prevent them and avoid surprises.' ],
          code: `class Temperature {\npublic:\n    Temperature() : degrees(20) {}\n    explicit Temperature(double d) : degrees(d) {}\n    double get() const { return degrees; }\nprivate:\n    double degrees;\n};\n\nTemperature a;          // 20\nTemperature b(25.5);    // 25.5\n// Temperature c = 30;  // error thanks to explicit` },
        { h: 'Destructors and RAII', p: [
          'The destructor (`~Class()`) runs automatically when the object is destroyed, for example when its block ends. Objects are destroyed in the reverse order of creation.',
          'RAII is the central idea of C++: the constructor acquires a resource (memory, a file, a connection) and the destructor releases it. That way you never forget to release it, not even when errors happen.' ],
          code: `class Trace {\npublic:\n    Trace(std::string n) : name(n) { std::cout << "enter " << name << "\\n"; }\n    ~Trace() { std::cout << "leave " << name << "\\n"; }\nprivate:\n    std::string name;\n};\n\nint main() {\n    Trace a("A");\n    {\n        Trace b("B");\n    }                       // B is destroyed here\n    std::cout << "end\\n";\n}                           // A is destroyed here\n// enter A, enter B, leave B, end, leave A` },
        { h: 'Real example: timing a task', real: true, p: [
          'A team wants to know which functions in its program are slow. This stopwatch starts counting in the constructor and shows the time in the destructor: you just create it at the start of the function.' ],
          code: `#include <chrono>\n#include <iostream>\n#include <string>\n\nclass Stopwatch {\npublic:\n    explicit Stopwatch(std::string task)\n        : task(task), start(std::chrono::steady_clock::now()) {}\n    ~Stopwatch() {\n        auto end = std::chrono::steady_clock::now();\n        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();\n        std::cout << task << " took " << ms << " ms\\n";\n    }\nprivate:\n    std::string task;\n    std::chrono::steady_clock::time_point start;\n};\n\nvoid export_report() {\n    Stopwatch s("export_report");\n    // ... work ...\n}   // on exit, the destructor shows the time` },
      ],
      x: [
        mc('What return type does a constructor have?', ['None, not even void', 'void', 'The type of the class', 'int'], 'Constructors do not declare a return type.'),
        fill(`class File {\npublic:\n    ___File() { std::cout << "closed"; }\n};`, ['~', '!', '-', '#'], 'The destructor is written with `~` in front of the class name.'),
        out(`struct T {\n    char c;\n    T(char c) : c(c) { std::cout << c; }\n    ~T() { std::cout << c; }\n};\n\nint main() {\n    T a('x');\n    { T b('y'); }\n    T c('z');\n}`, ['xyyzzx', 'xyzzyx', 'xyzxyz', 'xyyzxz'], '`b` is created and destroyed inside its block (yy). At the end of `main`, `c` and `a` are destroyed in reverse order of creation (zx).'),
        typ('Complete the initialiser list', `class Point {\npublic:\n    Point(int x, int y) ___ x(x), y(y) {}\nprivate:\n    int x, y;\n};`, ':', 'The initialiser list starts with a colon after the parameters.'),
        mc('What does `explicit` prevent in a one-parameter constructor?', ['Implicit conversions like `Temperature t = 30;`', 'Calling the constructor', 'Copying the object', 'Running the destructor'], 'With `explicit` you have to write `Temperature t(30);`.'),
        mc('What does RAII mean?', ['The constructor acquires a resource and the destructor releases it', 'Every class must inherit from another', 'Memory is freed by a garbage collector', 'Attributes must be public'], 'Since the destructor always runs, the resource is never left unreleased.'),
        out(`class Box {\npublic:\n    Box() : width(1), height(1) {}\n    Box(int w, int h) : width(w), height(h) {}\n    int area() const { return width * height; }\nprivate:\n    int width, height;\n};\n\nBox a;\nBox b(3, 4);\nstd::cout << a.area() + b.area();`, ['13', '12', '7', 'Error'], '`a` uses the default constructor (1 × 1) and `b` the two-parameter one (3 × 4): 1 + 12 = 13.'),
        // Final challenge
        out(`struct P {\n    char id;\n    P(char id) : id(id) { std::cout << "+" << id; }\n    ~P() { std::cout << "-" << id; }\n};\n\nstruct Car {\n    P engine{'e'};\n    P wheels{'w'};\n    Car() { std::cout << "+C"; }\n    ~Car() { std::cout << "-C"; }\n};\n\nint main() {\n    Car c;\n}`, ['+e+w+C-C-w-e', '+C+e+w-w-e-C', '+e+w+C-C-e-w', '+C+e+w-C-w-e'], 'Attributes are built in declaration order before the constructor body. On destruction, the destructor body runs first and then the attributes in reverse order.'),
      ],
    },
    // ───────────── Day 19 ─────────────
    {
      id: 'cpp-inheritance',
      t: 'Inheritance',
      d: 'Derived classes, protected, base constructors and construction order.',
      guide: [
        { h: 'Derived classes', p: [
          'Inheritance creates a new class from another: `class Dog : public Animal`. The derived class receives the attributes and methods of the base and adds its own.',
          'Use it when there is an "is a" relationship: a dog is an animal. If the relationship is "has a" (a car has an engine), use an attribute.' ],
          code: `class Animal {\npublic:\n    std::string name;\n    void eat() const { std::cout << name << " eats\\n"; }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() const { std::cout << name << " barks\\n"; }\n};\n\nDog d;\nd.name = "Toby";\nd.eat();   // Toby eats\nd.bark();  // Toby barks` },
        { h: 'protected', p: [
          '`private`: only the class itself. `protected`: the class itself and its derived classes. `public`: anyone.',
          'Use `protected` for what the child classes need to touch but the rest of the program does not.' ] },
        { h: 'Constructors and inheritance', p: [
          'The derived class calls the base constructor in its initialiser list: `Manager(...) : Employee(n, s)`.',
          'The base part is built first and then the derived part. On destruction, the order is reversed.' ],
          code: `class Employee {\npublic:\n    Employee(std::string n, double s) : name(n), salary(s) {}\nprotected:\n    std::string name;\n    double salary;\n};\n\nclass Manager : public Employee {\npublic:\n    Manager(std::string n, double s, double bonus)\n        : Employee(n, s), bonus(bonus) {}\n    double total() const { return salary + bonus; }  // salary is protected\nprivate:\n    double bonus;\n};\n\nManager m("Martha", 3000, 500);\nstd::cout << m.total();  // 3500` },
        { h: 'Redefining methods and calling the base', p: [
          'If the derived class defines a method with the same name as the base, it hides the base version.',
          'From the derived class you can still call the original version with `Base::method()`. That way you extend the behaviour instead of repeating it.' ] },
        { h: 'Real example: vehicles in a fleet', real: true, p: [
          'A transport company manages cars and trucks. All of them have a number plate and a mileage; trucks add their maximum load. The truck’s description reuses the base one and adds its own data.' ],
          code: `#include <iostream>\n#include <string>\n\nclass Vehicle {\npublic:\n    Vehicle(std::string plate, int km) : plate(plate), km(km) {}\n    std::string describe() const {\n        return plate + " (" + std::to_string(km) + " km)";\n    }\nprotected:\n    std::string plate;\n    int km;\n};\n\nclass Truck : public Vehicle {\npublic:\n    Truck(std::string plate, int km, int load)\n        : Vehicle(plate, km), load(load) {}\n    std::string describe() const {\n        return Vehicle::describe() + ", load " + std::to_string(load) + " kg";\n    }\nprivate:\n    int load;\n};\n\nint main() {\n    Truck t("1234-BCD", 85000, 12000);\n    std::cout << t.describe() << "\\n";  // 1234-BCD (85000 km), load 12000 kg\n}` },
      ],
      x: [
        fill(`class Cat ___ public Animal {\n    // ...\n};`, [':', '->', 'extends', '::'], 'In C++ inheritance is written with a colon: `class Cat : public Animal`.'),
        mc('Where can a `protected` member be accessed from?', ['From the class itself and its derived classes', 'From anywhere', 'Only from the class itself', 'Only from main'], '`protected` sits halfway between `private` and `public`.'),
        out(`struct A {\n    A() { std::cout << "A"; }\n    ~A() { std::cout << "a"; }\n};\nstruct B : A {\n    B() { std::cout << "B"; }\n    ~B() { std::cout << "b"; }\n};\n\nint main() { B obj; }`, ['ABba', 'BAab', 'ABab', 'BAba'], 'The base is built first and then the derived class; on destruction the order is reversed.'),
        out(`struct Base {\n    std::string hi() const { return "base"; }\n};\nstruct Child : Base {\n    std::string hi() const { return "child+" + Base::hi(); }\n};\n\nChild c;\nstd::cout << c.hi();`, ['child+base', 'base', 'child', 'base+child'], '`Child::hi` hides the base version, but calls it explicitly with `Base::hi()`.'),
        typ('Call the constructor of the base class', `class Manager : public Employee {\npublic:\n    Manager(std::string n) : ___(n) {}\n};`, 'Employee', 'The base is initialised in the initialiser list using its name.'),
        mc('Which relationship does public inheritance represent well?', ['"Is a": a dog is an animal', '"Has a": a car has an engine', '"Uses a": a program uses a file', '"Contains several": a list contains numbers'], 'For "has a" you use an attribute, not inheritance.'),
        ord('Declare a class Motorbike that publicly inherits from Vehicle', ['class', 'Motorbike', ':', 'public', 'Vehicle', '{', '};'], ['extends', 'private'], 'First the name of the new class, then `: public` and the base class.'),
        // Final challenge
        out(`class Account {\npublic:\n    Account(double b) : balance(b) {}\n    double get() const { return balance; }\nprotected:\n    double balance;\n};\n\nclass Savings : public Account {\npublic:\n    Savings(double b, double rate) : Account(b), rate(rate) {}\n    void year() { balance += balance * rate; }\nprivate:\n    double rate;\n};\n\nSavings s(1000, 0.1);\ns.year();\ns.year();\nstd::cout << s.get();`, ['1210', '1200', '1100', '1000'], '`Savings` can modify `balance` because it is `protected`. Interest compounds: 1000 → 1100 → 1210.'),
      ],
    },
    // ───────────── Day 20 ─────────────
    {
      id: 'cpp-polymorphism',
      t: 'Polymorphism',
      d: 'virtual, override, abstract classes and virtual destructors.',
      guide: [
        { h: 'The problem', p: [
          'A pointer or reference to the base class can point to a derived object. But by default, C++ decides which method to call based on the type of the pointer, not the real object.',
          'So if you store a `Circle` in a `Shape&`, the `Shape` method would be called.' ] },
        { h: 'virtual and override', p: [
          'A `virtual` method is chosen while the program runs, based on the real type of the object. That is what polymorphism means.',
          'In the derived class, mark the method with `override`: the compiler will check that it really replaces a virtual method of the base and warn you if you got the name or parameters wrong.' ],
          code: `class Shape {\npublic:\n    virtual double area() const { return 0; }\n    virtual ~Shape() = default;\n};\n\nclass Circle : public Shape {\npublic:\n    explicit Circle(double r) : r(r) {}\n    double area() const override { return 3.14159 * r * r; }\nprivate:\n    double r;\n};\n\nclass Square : public Shape {\npublic:\n    explicit Square(double s) : s(s) {}\n    double area() const override { return s * s; }\nprivate:\n    double s;\n};\n\nCircle c(1);\nSquare q(2);\nconst Shape& sh = q;\nstd::cout << sh.area();  // 4: the Square area is used` },
        { h: 'Abstract classes', p: [
          'A pure virtual method (`= 0`) has no implementation in the base: it forces the derived classes to write one.',
          'A class with at least one pure virtual method is abstract and you cannot create objects of it. It works as a contract: it defines what its derived classes must be able to do.' ],
          code: `class Notifier {\npublic:\n    virtual void send(const std::string& msg) const = 0;\n    virtual ~Notifier() = default;\n};\n\n// Notifier n;  // error: it is an abstract class` },
        { h: 'Virtual destructor', p: [
          'If you `delete` a derived object through a pointer to the base and the base destructor is not virtual, the derived destructor does not run: it is undefined behaviour.',
          'Rule: every class meant to be used polymorphically needs `virtual ~Base() = default;`.' ] },
        { h: 'Real example: notifications by email and SMS', real: true, p: [
          'A shop notifies its customers through several channels. The code that sends the notifications only knows `Notifier`; adding a new channel (push notifications, for example) does not require changing it.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nclass Notifier {\npublic:\n    virtual void send(const std::string& msg) const = 0;\n    virtual ~Notifier() = default;\n};\n\nclass Email : public Notifier {\npublic:\n    void send(const std::string& msg) const override { std::cout << "[email] " << msg << "\\n"; }\n};\n\nclass Sms : public Notifier {\npublic:\n    void send(const std::string& msg) const override { std::cout << "[sms] " << msg << "\\n"; }\n};\n\nvoid notify_all(const std::vector<const Notifier*>& channels, const std::string& msg) {\n    for (const Notifier* c : channels) c->send(msg);\n}\n\nint main() {\n    Email e;\n    Sms s;\n    notify_all({&e, &s}, "Your order has shipped");\n    // [email] Your order has shipped\n    // [sms] Your order has shipped\n}` },
      ],
      x: [
        mc('Which keyword makes a method be chosen based on the real type of the object?', ['virtual', 'override', 'static', 'dynamic'], '`override` only checks that you replace a method that is already virtual.'),
        out(`struct A { void hi() const { std::cout << "A"; } };\nstruct B : A { void hi() const { std::cout << "B"; } };\n\nB b;\nA& r = b;\nr.hi();\nb.hi();`, ['AB', 'BB', 'AA', 'BA'], 'Without `virtual`, the call through `A&` uses the method of `A`.'),
        out(`struct A { virtual void hi() const { std::cout << "A"; } };\nstruct B : A { void hi() const override { std::cout << "B"; } };\n\nB b;\nA& r = b;\nr.hi();`, ['B', 'A', 'AB', 'Error'], 'With `virtual`, the method of the real type of the object is called, which is `B`.'),
        fill(`class Shape {\npublic:\n    virtual double area() const ___ 0;\n};`, ['=', '==', ':', '->'], '`= 0` makes the method pure virtual and the class abstract.'),
        mc('If `Shape` has a pure virtual method, what happens with `Shape s;`?', ['It does not compile: you cannot create an object of an abstract class', 'It is created with area 0', 'It throws an exception', 'It turns into a Circle'], 'You can only create objects of the derived classes that implement every pure method.'),
        typ('Say that the method replaces a virtual one from the base', `class Square : public Shape {\n    double s = 2;\npublic:\n    double area() const ___ { return s * s; }\n};`, 'override', '`override` makes the compiler check that the method exists and is virtual in the base.'),
        mc('Why does a polymorphic base class need a virtual destructor?', ['So that `delete` through a base pointer also runs the derived destructor', 'To make the class abstract', 'So the object can be copied', 'To make the program faster'], 'Without it, deleting through the base is undefined behaviour.'),
        // Final challenge
        out(`struct Shape {\n    virtual double area() const = 0;\n    virtual std::string name() const { return "shape"; }\n    virtual ~Shape() = default;\n};\nstruct Rect : Shape {\n    double a, b;\n    Rect(double a, double b) : a(a), b(b) {}\n    double area() const override { return a * b; }\n    std::string name() const override { return "rect"; }\n};\nstruct Sq : Rect {\n    Sq(double s) : Rect(s, s) {}\n};\n\nRect r(2, 3);\nSq q(4);\nstd::vector<const Shape*> v = {&r, &q};\ndouble total = 0;\nfor (auto s : v) total += s->area();\nstd::cout << total << " " << v[1]->name();`, ['22 rect', '22 shape', '22 square', '10 rect'], 'The areas are 2 × 3 = 6 and 4 × 4 = 16. `Sq` does not redefine `name()`, so it inherits the `Rect` version.'),
      ],
    },
    // ───────────── Day 21 ─────────────
    {
      id: 'cpp-overloading',
      t: 'Operator overloading',
      d: 'operator+, operator==, operator<, operator<< and functors.',
      guide: [
        { h: 'Operators for your own types', p: [
          'C++ lets you define what `+`, `==`, `<`, `<<` and almost every operator do with your classes. That way a maths vector is added with `a + b` instead of `a.add(b)`.',
          'You define a function called `operator` followed by the symbol. Only use it when the meaning is obvious: a `+` that subtracts would confuse anyone.' ],
          code: `struct Vec2 {\n    double x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n    Vec2 operator*(double k) const { return {x * k, y * k}; }\n};\n\nVec2 a{1, 2}, b{3, 4};\nVec2 c = a + b * 2;   // {7, 10}` },
        { h: 'Comparing: operator== and operator<', p: [
          '`operator==` compares two objects. In C++20 you can ask the compiler to generate it, comparing every member, with `= default`.',
          '`operator<` defines an order. With it, `std::sort` and `std::set` already know how to order your objects.' ],
          code: `struct Date {\n    int year, month, day;\n    bool operator==(const Date&) const = default;   // C++20\n    bool operator<(const Date& o) const {\n        if (year != o.year) return year < o.year;\n        if (month != o.month) return month < o.month;\n        return day < o.day;\n    }\n};\n\nDate a{2024, 5, 1}, b{2024, 3, 9};\nstd::cout << (a == b) << (b < a);  // 01` },
        { h: 'Printing with operator<<', p: [
          'To use `std::cout << object`, define a free function `operator<<` that receives the stream and the object, writes to the stream and returns it.',
          'Returning the `std::ostream&` lets you chain several `<<`. If the function needs private members, it is declared as a `friend` inside the class.' ],
          code: `std::ostream& operator<<(std::ostream& os, const Vec2& v) {\n    return os << "(" << v.x << ", " << v.y << ")";\n}\n\nstd::cout << Vec2{7, 10} << "\\n";  // (7, 10)` },
        { h: 'Functors: operator()', p: [
          'If a class defines `operator()`, its objects can be called like functions. They are called functors and, unlike a normal function, they can store data.',
          'Compound operators like `+=` modify the object and return `*this` by reference.' ],
          code: `struct Multiplier {\n    int factor;\n    int operator()(int x) const { return x * factor; }\n};\n\nMultiplier triple{3};\nstd::cout << triple(5);  // 15` },
        { h: 'Real example: amounts without rounding errors', real: true, p: [
          'A café adds up amounts. With `double`, `0.1 + 0.2` is not exactly `0.3`, so money is stored as whole cents. The operators let the class be used like any other number.' ],
          code: `#include <iostream>\n\nclass Money {\npublic:\n    explicit Money(long long cents) : cents(cents) {}\n    Money operator+(const Money& o) const { return Money(cents + o.cents); }\n    Money operator*(int n) const { return Money(cents * n); }\n    bool operator<(const Money& o) const { return cents < o.cents; }\n    friend std::ostream& operator<<(std::ostream& os, const Money& m) {\n        long long c = m.cents % 100;\n        return os << m.cents / 100 << "." << (c < 10 ? "0" : "") << c << " €";\n    }\nprivate:\n    long long cents;\n};\n\nint main() {\n    Money coffee(150), toast(225);\n    Money total = coffee * 2 + toast;\n    std::cout << total << "\\n";            // 5.25 €\n    std::cout << (total < Money(500));     // 0\n}` },
      ],
      x: [
        mc('What is the function that defines the `+` operator of a class called?', ['operator+', 'plus', 'add', '__add__'], 'You write `operator` followed by the symbol. `__add__` is Python.'),
        out(`struct Vec2 {\n    int x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n};\n\nVec2 a{1, 2}, b{3, 4};\nVec2 c = a + b;\nstd::cout << c.x << c.y;`, ['46', '13', '24', 'Error'], '`a + b` calls `operator+`: x = 1 + 3 = 4 and y = 2 + 4 = 6.'),
        fill(`std::ostream& operator___(std::ostream& os, const Point& p) {\n    return os << p.x << "," << p.y;\n}`, ['<<', '>>', '+', '()'], 'To use `std::cout << p` you overload `operator<<`.'),
        out(`struct Adder {\n    int base;\n    int operator()(int x) const { return base + x; }\n};\n\nAdder a{10};\nstd::cout << a(5) << a(a(1));`, ['1521', '1511', '1520', 'Error'], '`a(5)` = 15. `a(1)` = 11 and `a(11)` = 21. They are printed together: 1521.'),
        mc('Why does `operator<<` return `std::ostream&`?', ['So several << can be chained', 'Because the compiler always requires it', 'To make it faster', 'To read from the keyboard'], '`std::cout << a << b` works because `(std::cout << a)` returns the stream again.'),
        typ('Ask the compiler to generate the == comparison (C++20)', `struct P {\n    int x, y;\n    bool operator==(const P&) const = ___;\n};`, 'default', '`= default` generates a member-by-member comparison.'),
        out(`struct Task {\n    std::string name;\n    int priority;\n    bool operator<(const Task& o) const { return priority < o.priority; }\n};\n\nstd::vector<Task> v = {{"b", 3}, {"a", 1}, {"c", 2}};\nstd::sort(v.begin(), v.end());\nfor (const auto& t : v) std::cout << t.name;`, ['acb', 'abc', 'bca', 'cab'], '`std::sort` uses `operator<`, which orders by priority: 1 (a), 2 (c), 3 (b).'),
        // Final challenge
        out(`struct Euros {\n    int cent;\n    Euros operator+(const Euros& o) const { return {cent + o.cent}; }\n    Euros& operator+=(const Euros& o) { cent += o.cent; return *this; }\n    bool operator<(const Euros& o) const { return cent < o.cent; }\n};\n\nEuros a{250}, b{199};\nEuros c = a + b;\nc += Euros{51};\nstd::cout << c.cent / 100 << "." << c.cent % 100 << " " << (a < b) << (b < c);`, ['5.0 01', '5.00 01', '5.0 10', '4.99 01'], '250 + 199 + 51 = 500 cents. 500 % 100 is 0 and prints as "0", not "00". `a < b` is false (0) and `b < c` is true (1).'),
      ],
    },
    // ───────────── Day 22 ─────────────
    {
      id: 'cpp-templates',
      t: 'Templates',
      d: 'template, typename, function templates and class templates.',
      guide: [
        { h: 'The problem of repeated code', p: [
          'If you want a `bigger` function for `int`, another for `double` and another for `std::string`, you would end up writing the same thing three times.',
          'Templates let you write the code once with a generic type. The compiler generates the concrete version for each type you use.' ] },
        { h: 'Function templates', p: [
          '`template <typename T>` declares a type parameter called `T`. When you call the function, the compiler deduces `T` from the arguments.',
          'If the arguments don’t match (`bigger(3, 2.5)`: is `T` an `int` or a `double`?), it does not compile. You can state the type by hand: `bigger<double>(3, 2.5)`.' ],
          code: `template <typename T>\nT bigger(T a, T b) {\n    return a > b ? a : b;\n}\n\nstd::cout << bigger(3, 7) << "\\n";        // 7\nstd::cout << bigger(2.5, 1.5) << "\\n";    // 2.5\nstd::cout << bigger<double>(3, 2.5);      // 3` },
        { h: 'Class templates', p: [
          'A class can also be a template. When you use it you give the type between `< >`: `Box<int>`.',
          'You already know some: `std::vector<int>`, `std::map<std::string, int>` and `std::array<double, 7>` are standard library templates.' ],
          code: `template <typename T>\nclass Box {\npublic:\n    explicit Box(T value) : value(value) {}\n    T get() const { return value; }\nprivate:\n    T value;\n};\n\nBox<int> a(42);\nBox<std::string> b("hello");\nstd::cout << a.get() << " " << b.get();  // 42 hello` },
        { h: 'Several parameters and constant values', p: [
          'A template can have several types (`template <typename K, typename V>`) and also constant values known at compile time, such as a size.',
          'Template code is generated at compile time, so it costs nothing at run time. That is why templates are usually written entirely in `.h` files.' ],
          code: `template <typename T, int N>\nclass Buffer {\npublic:\n    int capacity() const { return N; }\nprivate:\n    T data[N];\n};\n\nBuffer<double, 8> b;\nstd::cout << b.capacity();  // 8` },
        { h: 'Real example: statistics for any data type', real: true, p: [
          'A metrics dashboard calculates averages of visits (integers) and temperatures (decimals). A single template works for both cases and for any future numeric type.' ],
          code: `#include <iostream>\n#include <vector>\n\ntemplate <typename T>\ndouble average(const std::vector<T>& v) {\n    if (v.empty()) return 0;\n    T sum{};\n    for (const T& x : v) sum += x;\n    return static_cast<double>(sum) / v.size();\n}\n\nint main() {\n    std::vector<int> visits = {120, 95, 143};\n    std::vector<double> temperatures = {21.5, 23.0, 19.5};\n    std::cout << average(visits) << "\\n";        // 119.333\n    std::cout << average(temperatures) << "\\n";  // 21.3333\n}` },
      ],
      x: [
        fill(`___ <typename T>\nT twice(T x) {\n    return x * 2;\n}`, ['template', 'generic', 'typename', 'auto'], 'Templates start with `template <typename T>`.'),
        out(`template <typename T>\nT bigger(T a, T b) { return a > b ? a : b; }\n\nstd::cout << bigger(4, 9) << bigger('a', 'z');`, ['9z', '4a', '9a', 'Error'], 'One version is generated for `int` (9) and another for `char` (\'z\' comes after \'a\').'),
        mc('With `template <typename T> T bigger(T a, T b)`, what happens with `bigger(3, 2.5)`?', ['It does not compile: T cannot be int and double at the same time', 'It returns 3', 'It returns 2.5', 'It converts both to int'], 'You fix it by giving the type: `bigger<double>(3, 2.5)`.'),
        typ('Create a Box that stores a double', `template <typename T>\nclass Box { /* ... */ };\n\nBox<___> b(3.14);`, 'double', 'The concrete type goes between `< >` when you use the class template.'),
        out(`template <typename T>\nT sum3(T a, T b, T c) { return a + b + c; }\n\nstd::cout << sum3(1, 2, 3) << " " << sum3<std::string>("a", "b", "c");`, ['6 abc', '6 6', '123 abc', 'Error'], 'With `int` numbers are added; with `std::string`, `+` concatenates.'),
        mc('When does the compiler generate the code of a template?', ['When it is used with a concrete type', 'When it reads the word template', 'While the program runs', 'Never: templates are interpreted'], 'For each different type you use it with, it generates one version.'),
        out(`template <int N>\nint power(int base) {\n    int r = 1;\n    for (int i = 0; i < N; i++) r *= base;\n    return r;\n}\n\nstd::cout << power<3>(2) + power<2>(5);`, ['33', '13', '31', 'Error'], '`power<3>(2)` = 8 and `power<2>(5)` = 25: they add up to 33.'),
        // Final challenge
        out(`template <typename T>\nclass Stack {\npublic:\n    void push(T x) { data.push_back(x); }\n    T pop() { T x = data.back(); data.pop_back(); return x; }\n    bool empty() const { return data.empty(); }\nprivate:\n    std::vector<T> data;\n};\n\nStack<std::string> s;\ns.push("a");\ns.push("b");\ns.push("c");\nstd::string r;\nwhile (!s.empty()) r += s.pop();\nStack<int> q;\nq.push(r.size());\nstd::cout << r << q.pop();`, ['cba3', 'abc3', 'cba0', 'abc0'], 'A stack gives back first what went in last: c, b, a. The text "cba" has 3 characters and it is stored in the `Stack<int>`.'),
      ],
    },
    // ───────────── Day 23 ─────────────
    {
      id: 'cpp-exceptions',
      t: 'Exceptions',
      d: 'throw, try, catch, standard exceptions and your own exceptions.',
      guide: [
        { h: 'Errors that cannot be ignored', p: [
          'When a function cannot do its job, it can throw an exception with `throw`. Execution jumps to the nearest `catch` that accepts it.',
          'The code that may fail goes inside `try`. If nobody catches the exception, the program ends.' ],
          code: `#include <stdexcept>\n\ndouble divide(double a, double b) {\n    if (b == 0) throw std::invalid_argument("division by zero");\n    return a / b;\n}\n\ntry {\n    std::cout << divide(10, 2) << "\\n";  // 5\n    std::cout << divide(1, 0) << "\\n";   // throws: this line prints nothing\n} catch (const std::invalid_argument& e) {\n    std::cout << "Error: " << e.what() << "\\n";\n}` },
        { h: 'Standard exceptions', p: [
          'The `<stdexcept>` header offers `std::runtime_error`, `std::invalid_argument` and `std::out_of_range`, among others. All of them inherit from `std::exception`, whose `what()` method returns the message.',
          'The standard library uses them: `std::stoi("hello")` throws `std::invalid_argument` and `v.at(10)` throws `std::out_of_range`.' ],
          code: `try {\n    int n = std::stoi("hello");\n} catch (const std::invalid_argument&) {\n    std::cout << "Not a number\\n";\n}\n\nstd::vector<int> v = {1, 2, 3};\ntry {\n    v.at(10);\n} catch (const std::out_of_range&) {\n    std::cout << "Index out of range\\n";\n}` },
        { h: 'Several catch blocks and their order', p: [
          'A `try` can have several `catch` blocks. The first one that matches is used, from top to bottom, so the most specific types go before `std::exception`.',
          '`catch (...)` catches anything and must go last. Always catch by const reference (`const std::exception& e`) so you neither copy the object nor lose information.' ] },
        { h: 'Your own exceptions and RAII', p: [
          'You can create your own exceptions by inheriting from a standard one. That way whoever catches them knows exactly what went wrong.',
          'When an exception is thrown, the local objects of every function it passes through are destroyed. Thanks to RAII, resources are released anyway.',
          '`noexcept` marks functions that promise not to throw anything, such as destructors.' ],
          code: `class InsufficientFunds : public std::runtime_error {\npublic:\n    InsufficientFunds() : std::runtime_error("insufficient funds") {}\n};\n\nvoid withdraw(double& balance, double amount) {\n    if (amount > balance) throw InsufficientFunds();\n    balance -= amount;\n}` },
        { h: 'Real example: validating the age a user types', real: true, p: [
          'A form receives the age as text. It may not be a number or it may be out of range, and each case deserves a different message.',
          'Note that the age is calculated first and printed afterwards: that way no half-printed "Age:" is left behind if the conversion fails.' ],
          code: `#include <iostream>\n#include <stdexcept>\n#include <string>\n\nint read_age(const std::string& text) {\n    int age = std::stoi(text);             // may throw invalid_argument\n    if (age < 0 || age > 120)\n        throw std::out_of_range("age out of range");\n    return age;\n}\n\nint main() {\n    for (std::string input : {"34", "abc", "200"}) {\n        try {\n            int age = read_age(input);\n            std::cout << "Age: " << age << "\\n";\n        } catch (const std::invalid_argument&) {\n            std::cout << "'" << input << "' is not a number\\n";\n        } catch (const std::out_of_range& e) {\n            std::cout << e.what() << "\\n";\n        }\n    }\n}\n// Age: 34\n// 'abc' is not a number\n// age out of range` },
      ],
      x: [
        fill(`if (b == 0)\n    ___ std::invalid_argument("b is zero");`, ['throw', 'raise', 'catch', 'error'], 'In C++ exceptions are thrown with `throw`. `raise` is Python.'),
        mc('Which `std::exception` method returns the error message?', ['what()', 'message()', 'getMessage()', 'error()'], 'Every standard exception has `what()`.'),
        out(`try {\n    std::cout << "A";\n    throw std::runtime_error("x");\n    std::cout << "B";\n} catch (const std::exception& e) {\n    std::cout << "C";\n}\nstd::cout << "D";`, ['ACD', 'ABCD', 'AC', 'ABD'], 'After the `throw` the rest of the `try` does not run. The `catch` runs and the program carries on afterwards.'),
        out(`std::vector<int> v = {1, 2, 3};\ntry {\n    std::cout << v.at(5);\n} catch (const std::out_of_range&) {\n    std::cout << "out";\n}`, ['out', '0', 'Garbage', 'Compile error'], '`at` checks the index and throws `std::out_of_range`.'),
        mc('How should exceptions be caught?', ['By const reference: catch (const std::exception& e)', 'By value: catch (std::exception e)', 'With a pointer: catch (std::exception* e)', 'It does not matter'], 'By reference the object is not copied and the derived part is not lost.'),
        typ('Write the catch that catches any exception', `try {\n    process();\n} catch (___) {\n    std::cout << "Unknown error";\n}`, '...', '`catch (...)` catches everything and must go last.'),
        out(`try {\n    throw std::out_of_range("x");\n} catch (const std::invalid_argument&) {\n    std::cout << 1;\n} catch (const std::exception&) {\n    std::cout << 2;\n} catch (...) {\n    std::cout << 3;\n}`, ['2', '1', '3', '23'], '`out_of_range` is not an `invalid_argument`, but it does inherit from `std::exception`. Only the first matching `catch` runs.'),
        // Final challenge
        out(`struct R {\n    char c;\n    R(char c) : c(c) {}\n    ~R() { std::cout << c; }\n};\n\nvoid f(int n) {\n    R r('f');\n    if (n > 1) throw std::runtime_error("big");\n    std::cout << "ok";\n}\n\nint main() {\n    try {\n        R a('a');\n        f(1);\n        f(2);\n        std::cout << "end";\n    } catch (const std::exception& e) {\n        std::cout << "[" << e.what() << "]";\n    }\n}`, ['okffa[big]', 'okf[big]fa', 'okff[big]a', 'okffaend'], '`f(1)` prints "ok" and destroys `r` on exit (f). `f(2)` throws: `r` (f) and `a` (a) are destroyed before entering the `catch`, which prints [big]. "end" is never printed.'),
      ],
    },
    // ───────────── Day 24 ─────────────
    {
      id: 'cpp-stl',
      t: 'STL algorithms',
      d: 'sort, reverse, find, count, max_element and accumulate.',
      guide: [
        { h: '<algorithm>: don’t reinvent the wheel', p: [
          'The standard library comes with dozens of tested, optimised algorithms. They work on a range given by two iterators: `v.begin()` and `v.end()`.',
          '`std::sort` sorts from smallest to largest; with `std::greater<int>()` it sorts the other way. `std::reverse` flips the elements around.' ],
          code: `#include <algorithm>\n\nstd::vector<int> v = {5, 2, 8, 1};\nstd::sort(v.begin(), v.end());                       // 1 2 5 8\nstd::sort(v.begin(), v.end(), std::greater<int>());  // 8 5 2 1\nstd::reverse(v.begin(), v.end());                    // 1 2 5 8` },
        { h: 'Finding and counting', p: [
          '`std::find` returns an iterator to the first element equal to the one you look for, or `end()` if it is not found. Subtracting `begin()` gives you its position.',
          '`std::count` counts occurrences. `std::max_element` and `std::min_element` return an iterator: use `*` to read the value.' ],
          code: `std::vector<int> grades = {7, 9, 4, 9, 6};\nauto it = std::find(grades.begin(), grades.end(), 4);\nif (it != grades.end())\n    std::cout << "4 at position " << it - grades.begin() << "\\n";  // 2\nstd::cout << std::count(grades.begin(), grades.end(), 9) << "\\n";   // 2\nstd::cout << *std::max_element(grades.begin(), grades.end());       // 9` },
        { h: 'accumulate and <numeric>', p: [
          '`std::accumulate` (header `<numeric>`) adds up all the elements starting from an initial value.',
          'Careful: the type of the result is the type of the initial value. With `0` it adds in `int` and loses the decimals; with `0.0` it adds in `double`.' ],
          code: `#include <numeric>\n\nstd::vector<double> prices = {1.5, 2.5, 3.0};\nstd::cout << std::accumulate(prices.begin(), prices.end(), 0.0) << "\\n";  // 7\nstd::cout << std::accumulate(prices.begin(), prices.end(), 0);           // 6: adds in int!` },
        { h: 'Ranges (C++20)', p: [
          'C++20 adds versions in `std::ranges` that take the whole container, with no `begin()` or `end()`: `std::ranges::sort(v)`.',
          'They are shorter and harder to misuse. Tomorrow you will see how to combine them with lambdas to filter and transform.' ],
          code: `std::vector<int> v = {3, 1, 2};\nstd::ranges::sort(v);                  // 1 2 3\nauto it = std::ranges::find(v, 2);\nstd::cout << *std::ranges::max_element(v);  // 3` },
        { h: 'Real example: sales ranking', real: true, p: [
          'A shop manager reviews the week’s sales: total, best day, how many days had exactly the same sales and the three best amounts. Without a single hand-written loop.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <numeric>\n#include <vector>\n\nint main() {\n    std::vector<int> sales = {320, 150, 480, 150, 275};\n    int total = std::accumulate(sales.begin(), sales.end(), 0);\n    auto best = std::max_element(sales.begin(), sales.end());\n    std::cout << "Total: " << total << "\\n";                                 // 1375\n    std::cout << "Best day: " << (best - sales.begin()) + 1 << "\\n";        // 3\n    std::cout << "Days with 150: " << std::count(sales.begin(), sales.end(), 150) << "\\n";  // 2\n    std::sort(sales.begin(), sales.end(), std::greater<int>());\n    std::cout << "Top 3: " << sales[0] << " " << sales[1] << " " << sales[2] << "\\n";  // 480 320 275\n}` },
      ],
      x: [
        mc('Which header contains `std::sort`?', ['<algorithm>', '<vector>', '<sort>', '<numeric>'], '`<numeric>` contains `accumulate`; `<algorithm>`, almost everything else.'),
        out(`std::vector<int> v = {3, 1, 2};\nstd::sort(v.begin(), v.end());\nstd::cout << v[0] << v[2];`, ['13', '32', '31', '12'], 'Sorted it becomes {1, 2, 3}: the first is 1 and the last 3.'),
        fill(`std::vector<int> v = {4, 5, 6};\nint total = std::___(v.begin(), v.end(), 0);  // 15`, ['accumulate', 'sum', 'add_all', 'total'], '`std::accumulate` adds up the range starting from the initial value.'),
        out(`std::vector<int> v = {4, 9, 2, 9};\nauto it = std::max_element(v.begin(), v.end());\nstd::cout << *it << " " << it - v.begin();`, ['9 1', '9 3', '4 0', '9 2'], 'On a tie, `max_element` returns the first one: the 9 at position 1.'),
        out(`std::vector<double> v = {0.5, 0.5, 0.5};\nstd::cout << std::accumulate(v.begin(), v.end(), 0);`, ['0', '1.5', '1', 'Error'], 'The initial value `0` is an `int`: each partial sum (0 + 0.5) is truncated to 0.'),
        typ('Check whether find did not find the value', `auto it = std::find(v.begin(), v.end(), 7);\nif (it == v.___()) std::cout << "not found";`, 'end', 'If it does not find the value, `find` returns `end()`.'),
        out(`std::string s = "radar";\nstd::string r = s;\nstd::reverse(r.begin(), r.end());\nstd::cout << (r == s) << std::count(s.begin(), s.end(), 'a');`, ['12', '02', '11', 'Error'], '"radar" is a palindrome: reversed it is the same (1). It has two letters a.'),
        // Final challenge
        out(`std::vector<int> v = {5, 3, 8, 3, 1};\nstd::sort(v.begin(), v.end(), std::greater<int>());\nstd::reverse(v.begin(), v.begin() + 2);\nint s = std::accumulate(v.begin() + 1, v.end(), 0);\nauto it = std::find(v.begin(), v.end(), 3);\nstd::cout << v[0] << " " << s << " " << (it - v.begin());`, ['5 15 2', '8 15 2', '5 20 2', '5 15 3'], 'Descending order: {8, 5, 3, 3, 1}. Reversing the first two: {5, 8, 3, 3, 1}. The sum from position 1 is 8 + 3 + 3 + 1 = 15 and the first 3 is at position 2.'),
      ],
    },
    // ───────────── Day 25 ─────────────
    {
      id: 'cpp-iterators',
      t: 'Iterators and lambdas',
      d: 'begin, end, lambdas, capture by copy and by reference.',
      guide: [
        { h: 'Iterators', p: [
          'An iterator marks a position inside a container, like a generalised pointer. `*it` reads the element and `++it` moves forward.',
          '`begin()` points to the first element and `end()` to the position after the last one: you must never dereference `end()`.',
          'They work the same with `vector`, `list`, `set` or `map`. In a map, `it->first` is the key and `it->second` the value.' ],
          code: `std::vector<std::string> names = {"Ann", "Luke", "Eve"};\nfor (auto it = names.begin(); it != names.end(); ++it)\n    std::cout << *it << " ";   // Ann Luke Eve\nauto last = names.end() - 1;\nstd::cout << *last;            // Eve` },
        { h: 'Lambdas', p: [
          'A lambda is a function with no name written right where it is needed: `[](parameters) { body }`.',
          'It can be stored in a variable with `auto` or passed straight to an algorithm, for example to tell `std::sort` how to order.' ],
          code: `auto square = [](int x) { return x * x; };\nstd::cout << square(5) << "\\n";  // 25\n\nstd::vector<int> v = {5, -2, 8, -1};\nstd::sort(v.begin(), v.end(), [](int a, int b) {\n    return std::abs(a) < std::abs(b);   // order by absolute value\n});\n// -1 -2 5 8` },
        { h: 'Captures', p: [
          'The brackets say which outside variables the lambda can use. `[x]` copies `x` when the lambda is created; `[&x]` uses it by reference and can modify it.',
          '`[=]` captures everything it uses by copy and `[&]` everything by reference. It is better to capture only what you need: the code is clearer.' ],
          code: `int limit = 10;\nint counter = 0;\nauto count = [limit, &counter](int x) {\n    if (x > limit) counter++;\n};\nfor (int x : {4, 15, 22, 9}) count(x);\nstd::cout << counter;  // 2` },
        { h: 'Algorithms with lambdas', p: [
          '`std::count_if` counts the elements that meet a condition and `std::find_if` finds the first one that meets it.',
          '`std::transform` applies a function to each element. `std::erase_if` (C++20) deletes the ones that meet a condition.' ],
          code: `std::vector<int> v = {3, 8, 12, 5, 20};\nint big = std::count_if(v.begin(), v.end(), [](int x) { return x > 6; });     // 3\nauto even = std::find_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });  // points to 8\nstd::transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });\n// 30 80 120 50 200\nstd::erase_if(v, [](int x) { return x > 100; });   // 30 80 50` },
        { h: 'Real example: filtering and sorting a catalogue', real: true, p: [
          'An online shop removes products that are out of stock, sorts the rest by price and counts how many fit the customer’s budget. The `affordable` lambda captures the budget by copy.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <string>\n#include <vector>\n\nstruct Product { std::string name; double price; int stock; };\n\nint main() {\n    std::vector<Product> catalogue = {\n        {"Headphones", 59.9, 12}, {"USB cable", 7.5, 0},\n        {"Keyboard", 35.0, 4}, {"Monitor", 189.0, 2}};\n    double budget = 100;\n\n    std::erase_if(catalogue, [](const Product& p) { return p.stock == 0; });\n    std::sort(catalogue.begin(), catalogue.end(),\n              [](const Product& a, const Product& b) { return a.price < b.price; });\n    auto affordable = [budget](const Product& p) { return p.price <= budget; };\n\n    for (const auto& p : catalogue) std::cout << p.name << " ";  // Keyboard Headphones Monitor\n    std::cout << "\\nAffordable: " << std::count_if(catalogue.begin(), catalogue.end(), affordable);  // 2\n}` },
      ],
      x: [
        mc('What does `v.end()` point to?', ['The position after the last element', 'The last element', 'The first element', 'nullptr'], 'That is why loops use `it != v.end()` and `*v.end()` is never read.'),
        out(`auto add = [](int a, int b) { return a + b; };\nstd::cout << add(2, 3) * 2;`, ['10', '7', '8', 'Error'], 'The lambda returns 5 and it is multiplied by 2.'),
        fill(`int total = 0;\nauto add = [___total](int x) { total += x; };`, ['&', '=', '*', 'this'], 'To modify `total` you have to capture it by reference.'),
        out(`int x = 1;\nauto f = [x]() { return x * 10; };\nx = 5;\nstd::cout << f();`, ['10', '50', '1', 'Error'], 'Capture by copy keeps the value `x` had when the lambda was created: 1.'),
        out(`std::vector<int> v = {1, 4, 7, 10, 13};\nstd::cout << std::count_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });`, ['2', '3', '5', '14'], 'Only 4 and 10 are even.'),
        typ('Find the first negative element', `auto it = std::___(v.begin(), v.end(), [](int x) { return x < 0; });`, 'find_if', '`find_if` returns the first element that meets the condition.'),
        ord('Write a lambda that returns twice x', ['[]', '(int x)', '{', 'return', 'x * 2;', '}'], ['def', '=>'], 'Capture brackets, parameters and the body in braces.'),
        // Final challenge
        out(`std::vector<int> v = {4, 1, 7, 2, 9};\nint threshold = 3, calls = 0;\nstd::sort(v.begin(), v.end(), [&calls](int a, int b) { calls++; return a > b; });\nstd::erase_if(v, [threshold](int x) { return x < threshold; });\nstd::transform(v.begin(), v.end(), v.begin(), [](int x) { return x - 1; });\nstd::cout << v.size() << " " << v.front() << v.back() << " " << (calls > 0);`, ['3 83 1', '3 93 1', '5 83 1', '3 38 1'], 'Descending order: {9, 7, 4, 2, 1}. Values below 3 are deleted: {9, 7, 4}. 1 is subtracted: {8, 6, 3}. `calls` was modified by reference, so it is greater than 0.'),
      ],
    },
    // ───────────── Day 26 ─────────────
    {
      id: 'cpp-smart-pointers',
      t: 'Smart pointers',
      d: 'unique_ptr, shared_ptr, weak_ptr and RAII.',
      guide: [
        { h: 'Goodbye to delete', p: [
          'Smart pointers (header `<memory>`) are objects that behave like pointers and free the memory in their destructor. It is RAII applied to dynamic memory.',
          'In modern C++ you almost never write `new` or `delete`: you use `std::make_unique` and `std::make_shared`.' ] },
        { h: 'unique_ptr: a single owner', p: [
          '`std::unique_ptr` is the exclusive owner of an object. When it is destroyed, it frees the object.',
          'It cannot be copied (there would be two owners), but it can be moved with `std::move`: ownership passes to the new pointer and the old one is left as `nullptr`. It is the default choice.' ],
          code: `#include <memory>\n\nauto p = std::make_unique<int>(42);\nstd::cout << *p << "\\n";              // 42\n// auto q = p;                        // error: it cannot be copied\nauto q = std::move(p);                // ownership passes to q\nstd::cout << (p == nullptr) << "\\n";  // 1\n// when the block ends, q frees the memory` },
        { h: 'shared_ptr: shared ownership', p: [
          '`std::shared_ptr` allows several owners. It keeps count of how many there are (`use_count()`) and frees the object when the last one disappears.',
          'It is a bit slower than `unique_ptr`: only use it when ownership is truly shared.' ],
          code: `auto a = std::make_shared<std::string>("report.pdf");\n{\n    auto b = a;                          // two owners\n    std::cout << a.use_count() << "\\n";  // 2\n}                                        // b disappears\nstd::cout << a.use_count() << "\\n";      // 1` },
        { h: 'weak_ptr and cycles', p: [
          'If two objects point to each other with `shared_ptr`, the count never reaches 0 and neither is freed: it is a leak.',
          '`std::weak_ptr` observes a shared object without owning it. To use it you call `lock()`, which returns a `shared_ptr` (empty if the object no longer exists).' ],
          code: `std::weak_ptr<int> w;\n{\n    auto s = std::make_shared<int>(7);\n    w = s;\n    if (auto p = w.lock()) std::cout << *p << "\\n";  // 7\n}\nstd::cout << w.expired();  // 1: the object no longer exists` },
        { h: 'Real example: polymorphic shapes without leaks', real: true, p: [
          'A floor-plan program stores shapes of different types in the same vector. With `unique_ptr` each shape is freed by itself when the vector is destroyed, without a single `delete`.' ],
          code: `#include <iostream>\n#include <memory>\n#include <vector>\n\nstruct Shape {\n    virtual double area() const = 0;\n    virtual ~Shape() = default;\n};\nstruct Circle : Shape {\n    double r;\n    explicit Circle(double r) : r(r) {}\n    double area() const override { return 3.14159 * r * r; }\n};\nstruct Rect : Shape {\n    double a, b;\n    Rect(double a, double b) : a(a), b(b) {}\n    double area() const override { return a * b; }\n};\n\nint main() {\n    std::vector<std::unique_ptr<Shape>> plan;\n    plan.push_back(std::make_unique<Circle>(1));\n    plan.push_back(std::make_unique<Rect>(4, 5));\n    double total = 0;\n    for (const auto& s : plan) total += s->area();\n    std::cout << "Surface: " << total << " m2\\n";  // Surface: 23.1416 m2\n}   // the vector is destroyed and frees every shape` },
      ],
      x: [
        mc('Which smart pointer would you use for an object with a single owner?', ['std::unique_ptr', 'std::shared_ptr', 'std::weak_ptr', 'A raw pointer with new'], '`unique_ptr` is the default choice: it has no extra cost.'),
        fill(`auto p = std::___<int>(5);`, ['make_unique', 'new_unique', 'unique', 'create'], '`std::make_unique<T>(args)` creates the object and the `unique_ptr` at once.'),
        out(`auto a = std::make_shared<int>(1);\nauto b = a;\nauto c = b;\nstd::cout << a.use_count();`, ['3', '1', '2', '0'], '`a`, `b` and `c` share the same object: three owners.'),
        mc('If `p` is a `std::unique_ptr`, what happens with `auto q = p;`?', ['It does not compile: a unique_ptr cannot be copied', 'Both share the object', 'The pointed-to object is copied', 'p becomes nullptr'], 'To change the owner you have to move it: `auto q = std::move(p);`.'),
        typ('Transfer ownership from p to q', `auto p = std::make_unique<int>(3);\nauto q = std::___(p);`, 'move', 'After `std::move`, `q` is the owner and `p` is left as `nullptr`.'),
        out(`struct T {\n    ~T() { std::cout << "x"; }\n};\n\nint main() {\n    auto a = std::make_shared<T>();\n    {\n        auto b = a;\n        std::cout << "1";\n    }\n    std::cout << "2";\n    a.reset();\n    std::cout << "3";\n}`, ['12x3', '1x23', '123x', 'x123'], 'When the block ends `b` disappears, but `a` is still an owner. `a.reset()` releases the last owner and the object is destroyed at that moment.'),
        mc('What is `std::weak_ptr` for?', ['Observing a shared object without keeping it alive, and breaking cycles', 'Having a single owner', 'Pointers that are never null', 'Allocating arrays'], 'A `weak_ptr` does not count in `use_count()`.'),
        // Final challenge
        out(`auto s = std::make_shared<int>(10);\nstd::weak_ptr<int> w = s;\nauto s2 = s;\n*s2 += 5;\nstd::cout << *s << s.use_count();\ns.reset();\nstd::cout << " " << w.expired();\ns2.reset();\nstd::cout << w.expired();`, ['152 01', '153 01', '152 11', '152 00'], '`s` and `s2` share the integer, which becomes 15; the `weak_ptr` does not count, so there are 2 owners. After releasing `s`, `s2` is still there (0); after releasing `s2` the object is destroyed (1).'),
      ],
    },
    // ───────────── Day 27 ─────────────
    {
      id: 'cpp-move',
      t: 'Move semantics',
      d: 'lvalues, rvalues, std::move, move constructors and the rule of zero.',
      guide: [
        { h: 'Copying is expensive', p: [
          'Copying a vector with a million elements copies the million elements. But if the original is not going to be used again, it is enough to take over its internal memory: that is moving.',
          'Moving a `std::vector` or a `std::string` only copies a few pointers, whatever its size.' ] },
        { h: 'lvalues and rvalues', p: [
          'An lvalue is something with a name and an address, like a variable. An rvalue is a temporary value, like the result of `a + b`, which disappears when the statement ends.',
          'An rvalue reference (`T&&`) can only bind to temporaries. That way a function knows it can "steal" the content without anyone noticing.' ],
          code: `std::string a = "hello";\nstd::string& r1 = a;          // lvalue: a has a name\nstd::string&& r2 = a + "!";   // rvalue: a temporary\n// std::string&& r3 = a;      // error: a is not a temporary` },
        { h: 'std::move', p: [
          '`std::move(x)` does not move anything by itself: it turns `x` into an rvalue so the moving version is chosen.',
          'After being moved from, the original object is still valid but its content is not guaranteed (a moved-from vector is left empty). Only use it again after assigning it a new value.' ],
          code: `std::vector<int> big(1'000'000, 7);\nstd::vector<int> target = std::move(big);  // takes the memory, no copy\nstd::cout << target.size() << " " << big.size();  // 1000000 0` },
        { h: 'Move constructors and the rule of zero', p: [
          'If your class manages a resource by hand (a `new[]`), it needs a destructor, copy and move written by you: the rule of five. The move constructor takes the resource and leaves the original empty.',
          'Much better is the rule of zero: if the members manage themselves (`std::string`, `std::vector`, `std::unique_ptr`), write none of that. The compiler generates the right copy and move.' ],
          code: `class Buffer {   // manages memory by hand: rule of five\npublic:\n    explicit Buffer(std::size_t n) : data(new int[n]), n(n) {}\n    Buffer(Buffer&& other) noexcept : data(other.data), n(other.n) {\n        other.data = nullptr;   // the original is no longer the owner\n        other.n = 0;\n    }\n    ~Buffer() { delete[] data; }\n    // ... copy and assignments would still be missing\nprivate:\n    int* data;\n    std::size_t n;\n};\n\nclass Playlist {   // rule of zero: nothing to write\n    std::string name;\n    std::vector<std::string> songs;\n};` },
        { h: 'Real example: generating records without copies', real: true, p: [
          'A service generates a hundred thousand order records. Each line is moved into the vector instead of being copied, and the whole vector is returned by value: the compiler moves it or removes the copy.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nstd::vector<std::string> generate_records(int n) {\n    std::vector<std::string> records;\n    records.reserve(n);\n    for (int i = 1; i <= n; i++) {\n        std::string line = "order-" + std::to_string(i);\n        records.push_back(std::move(line));   // moves instead of copying\n    }\n    return records;   // the vector is not copied\n}\n\nint main() {\n    auto records = generate_records(100000);\n    std::cout << records.size() << " " << records.back() << "\\n";  // 100000 order-100000\n}` },
      ],
      x: [
        mc('What does `std::move(x)` actually do?', ['It turns x into an rvalue so it can be moved; it does not move anything by itself', 'It copies x to another memory location', 'It deletes x', 'It moves x to the heap'], 'The move itself is done by the move constructor or move assignment chosen thanks to that conversion.'),
        out(`std::vector<int> a = {1, 2, 3};\nstd::vector<int> b = std::move(a);\nstd::cout << b.size() << a.size();`, ['30', '33', '03', 'Error'], '`b` takes over the memory of `a`, and a moved-from vector is left empty.'),
        fill(`void store(std::string___ s);  // only accepts temporaries`, ['&&', '&', '*', '**'], '`T&&` is an rvalue reference: it binds to temporary values.'),
        mc('What does the rule of zero say?', ['If your members manage their own resources, don’t write a destructor, copy or move', 'Classes must not have public attributes', 'Pointers must be initialised to zero', 'You must never use new'], 'The compiler generates correct versions from those of the members.'),
        typ('Add the text to the vector without copying it', `std::string line = "data";\nstd::vector<std::string> v;\nv.push_back(std::___(line));`, 'move', 'With `std::move`, `push_back` uses the moving version.'),
        mc('Which of these expressions is an rvalue?', ['a + b', 'a', 'v[0]', '*p'], '`a + b` produces a nameless temporary value; the others refer to objects that already exist.'),
        out(`std::string a = "hello";\nstd::string b = a;\nstd::string c = std::move(b);\nc += "!";\nstd::cout << a << " " << c;`, ['hello hello!', 'hello! hello!', 'hello hello', 'Error'], '`b` is a copy of `a`; then `c` takes the content of `b`. Neither `a` nor its content is affected.'),
        // Final challenge
        out(`struct S {\n    S() {}\n    S(const S&) { std::cout << "C"; }\n    S(S&&) noexcept { std::cout << "M"; }\n};\n\nS a;\nS b = a;\nS c = std::move(a);\nS d = S(b);\nstd::vector<S> v;\nv.reserve(2);\nv.push_back(b);\nv.push_back(std::move(c));`, ['CMCCM', 'CMCMCM', 'CCCCM', 'CMCMM'], '`b = a` copies (C) and `std::move(a)` moves (M). `S(b)` copies (C) and, since C++17, the temporary is built directly in `d`, with no move. With space reserved, `push_back(b)` copies (C) and `push_back(std::move(c))` moves (M).'),
      ],
    },
    // ───────────── Day 28 ─────────────
    {
      id: 'cpp-files',
      t: 'Files',
      d: 'ofstream, ifstream, getline, open modes and number formatting.',
      guide: [
        { h: 'Writing with ofstream', p: [
          '`std::ofstream` (header `<fstream>`) opens a file for writing and is used just like `std::cout`.',
          'Always check that it opened: `if (!out)`. The file closes by itself when the object is destroyed (RAII).' ],
          code: `#include <fstream>\n\nstd::ofstream out("grades.txt");\nif (!out) {\n    std::cerr << "Could not open the file\\n";\n    return 1;\n}\nout << "Ann 8.5\\n";\nout << "Luke 6\\n";\n// when the block ends, the file is closed` },
        { h: 'Reading with ifstream and getline', p: [
          '`std::ifstream` opens a file for reading. With `>>` you read value by value, separated by spaces; with `std::getline` you read whole lines.',
          'Put the read in the `while` condition: the loop ends by itself at the end of the file or if a value does not fit.' ],
          code: `std::ifstream in("grades.txt");\nstd::string name;\ndouble grade;\nwhile (in >> name >> grade)\n    std::cout << name << ": " << grade << "\\n";\n\nstd::ifstream log("app.log");\nstd::string line;\nint errors = 0;\nwhile (std::getline(log, line))\n    if (line.find("ERROR") != std::string::npos) errors++;` },
        { h: 'Open modes', p: [
          'By default, `std::ofstream` erases the content of the file when it opens it (`std::ios::trunc`). To add at the end use `std::ios::app`.',
          '`std::ios::binary` prevents line breaks from being transformed, which is needed for images or binary data.' ],
          code: `std::ofstream log("app.log", std::ios::app);   // appends without erasing\nlog << "User logged in\\n";` },
        { h: 'Formatting numbers', p: [
          'The `<iomanip>` header controls how numbers are written, both on screen and in files. `std::fixed` with `std::setprecision(2)` shows exactly two decimals, ideal for prices.',
          '`std::setw(n)` reserves `n` characters for the next value, handy for aligning columns. `fixed` and `setprecision` stay until you change them; `setw` only affects the next value.' ],
          code: `#include <iomanip>\n\ndouble total = 60.4879;\nstd::cout << std::fixed << std::setprecision(2) << total << "\\n";  // 60.49\nstd::cout << std::setw(8) << 3.5 << "|\\n";                        //     3.50|` },
        { h: 'Real example: processing a CSV of expenses', real: true, p: [
          'You export your bank expenses to a CSV (`date,description,amount`). The program skips the header, splits each line on commas with `std::getline` and writes a report with two decimals.' ],
          code: `#include <fstream>\n#include <iomanip>\n#include <iostream>\n#include <sstream>\n#include <string>\n\nint main() {\n    std::ifstream csv("expenses.csv");\n    if (!csv) { std::cerr << "expenses.csv is missing\\n"; return 1; }\n    std::string line;\n    std::getline(csv, line);            // skips the header\n    double total = 0;\n    int rows = 0;\n    while (std::getline(csv, line)) {\n        std::istringstream ss(line);\n        std::string date, description, amount;\n        std::getline(ss, date, ',');\n        std::getline(ss, description, ',');\n        std::getline(ss, amount, ',');\n        total += std::stod(amount);\n        rows++;\n    }\n    std::ofstream report("report.txt");\n    report << std::fixed << std::setprecision(2)\n           << rows << " expenses, total " << total << " euros\\n";\n}` },
      ],
      x: [
        mc('Which class is used to write to a file?', ['std::ofstream', 'std::ifstream', 'std::istream', 'std::filestream'], 'The o is for output and the i for input.'),
        fill(`std::ifstream f("data.txt");\nstd::string line;\nwhile (std::___(f, line)) {\n    std::cout << line << "\\n";\n}`, ['getline', 'readline', 'read', 'nextLine'], '`std::getline` reads a whole line and returns the stream, which is false at the end of the file.'),
        out(`std::cout << std::fixed << std::setprecision(2) << 3.14159;`, ['3.14', '3.1', '3.14159', '3.142'], 'With `std::fixed`, `setprecision(2)` sets two decimals.'),
        mc('Which mode adds text at the end of the file without erasing what it had?', ['std::ios::app', 'std::ios::trunc', 'std::ios::in', 'std::ios::binary'], '`app` stands for append.'),
        typ('Check whether the file could not be opened', `std::ifstream f("config.txt");\nif (___f) {\n    std::cerr << "Does not exist";\n}`, '!', 'A stream that could not be opened evaluates as false, so `!f` is true.'),
        out(`std::istringstream ss("ann,32,London");\nstd::string field;\nint n = 0;\nwhile (std::getline(ss, field, ',')) n++;\nstd::cout << n << " " << field;`, ['3 London', '2 London', '3 ann', '1 ann,32,London'], 'With a comma as separator there are three fields, and `field` keeps the last one read.'),
        ord('Open log.txt to add at the end', ['std::ofstream', 'log(', '"log.txt",', 'std::ios::app', ');'], ['std::ifstream', 'std::ios::trunc'], 'You write with `ofstream` and the `std::ios::app` mode.'),
        // Final challenge
        out(`{\n    std::ofstream f("t.txt");\n    f << "3 4\\n5";\n}\n{\n    std::ofstream f("t.txt", std::ios::app);\n    f << " 6";\n}\nstd::ifstream in("t.txt");\nint x, sum = 0, n = 0;\nwhile (in >> x) { sum += x; n++; }\nstd::cout << n << " " << std::fixed << std::setprecision(1) << sum / static_cast<double>(n);`, ['4 4.5', '3 4.0', '2 3.5', '4 4.50'], 'The first block writes "3 4", a line break and "5"; the second adds " 6" without erasing. `>>` skips spaces and line breaks: it reads 4 numbers that add up to 18. The average, with one decimal, is 4.5.'),
      ],
    },
    // ───────────── Day 29 ─────────────
    {
      id: 'cpp-concurrency',
      t: 'Concurrency',
      d: 'std::thread, join, mutex, atomic and async.',
      guide: [
        { h: 'Several threads at once', p: [
          'A thread (`std::thread`, header `<thread>`) runs a function in parallel with the rest of the program. That way the several cores of the processor are put to use.',
          '`join()` waits for the thread to finish. If a `std::thread` is destroyed without `join()` or `detach()`, the program ends with `std::terminate`. `std::jthread` (C++20) joins by itself.',
          'The order in which threads run is not guaranteed: every run can be different.' ],
          code: `#include <thread>\n\nvoid task(int id) {\n    std::cout << "Thread " << id << "\\n";\n}\n\nint main() {\n    std::thread a(task, 1);\n    std::thread b(task, 2);\n    a.join();\n    b.join();   // waits for both to finish\n}` },
        { h: 'Race conditions', p: [
          'If two threads modify the same data at the same time without coordinating, there is a race condition: the result is unpredictable and technically it is undefined behaviour.',
          '`counter++` looks like one operation, but it is three: read, add and write. Two threads can read the same value and lose an increment.' ] },
        { h: 'mutex and lock_guard', p: [
          'A `std::mutex` (header `<mutex>`) lets only one thread at a time through the protected section.',
          '`std::lock_guard` locks the mutex when it is created and releases it when it is destroyed (RAII). That way you never forget to release it, not even if an exception is thrown.' ],
          code: `std::mutex m;\nint counter = 0;\n\nvoid add() {\n    for (int i = 0; i < 100000; i++) {\n        std::lock_guard<std::mutex> lock(m);\n        counter++;\n    }\n}\n// with two threads running add(), counter ends at 200000` },
        { h: 'atomic, async and future', p: [
          'For a simple counter `std::atomic<int>` (header `<atomic>`) is enough: its operations cannot be interrupted halfway.',
          '`std::async` (header `<future>`) launches a task and returns a `std::future`. `get()` waits for the result and returns it. It is the most convenient way to compute something in parallel.' ],
          code: `std::atomic<int> visits{0};\nvisits++;   // safe across threads\n\nauto f = std::async(std::launch::async, [] { return 6 * 7; });\n// ... the main thread does other things ...\nstd::cout << f.get();  // 42` },
        { h: 'Real example: summing a huge vector in two halves', real: true, p: [
          'A data analysis adds up ten million values. One half is computed in another thread with `std::async` while the main thread adds up the other. `std::cref` passes the vector by reference so it is not copied.' ],
          code: `#include <functional>\n#include <future>\n#include <iostream>\n#include <numeric>\n#include <vector>\n\nlong long sum(const std::vector<int>& v, std::size_t from, std::size_t to) {\n    return std::accumulate(v.begin() + from, v.begin() + to, 0LL);\n}\n\nint main() {\n    std::vector<int> data(10'000'000, 1);\n    std::size_t half = data.size() / 2;\n    auto part1 = std::async(std::launch::async, sum, std::cref(data), 0, half);\n    long long part2 = sum(data, half, data.size());\n    std::cout << part1.get() + part2 << "\\n";  // 10000000\n}` },
      ],
      x: [
        mc('What does `t.join()` do?', ['Waits for thread t to finish', 'Starts the thread', 'Stops the thread by force', 'Merges two threads into one'], 'The thread starts when the `std::thread` is constructed; `join` waits for it to end.'),
        fill(`std::mutex m;\nint counter = 0;\n\nvoid add() {\n    std::___<std::mutex> lock(m);\n    counter++;\n}`, ['lock_guard', 'mutex_lock', 'guard', 'synchronized'], '`std::lock_guard` locks the mutex and releases it when the block ends.'),
        mc('What is a race condition?', ['Several threads access the same data at once, at least one modifies it and they don’t synchronise', 'A thread that finishes before another', 'A loop that is too fast', 'A thread that waits for another with join'], 'It is avoided with `std::mutex`, `std::atomic` or by not sharing data.'),
        out(`std::atomic<int> c{0};\nstd::thread a([&] { for (int i = 0; i < 1000; i++) c++; });\nstd::thread b([&] { for (int i = 0; i < 1000; i++) c++; });\na.join();\nb.join();\nstd::cout << c;`, ['2000', '1000', 'An unpredictable value', '0'], 'With `std::atomic` no increment is lost.'),
        typ('Collect the result of the task', `auto f = std::async(std::launch::async, [] { return 6 * 7; });\nint r = f.___();`, 'get', '`get()` waits for the task to finish and returns its result.'),
        mc('What happens if a `std::thread` is destroyed without `join()` or `detach()`?', ['The program ends with std::terminate', 'The thread is joined automatically', 'Nothing happens', 'The thread starts again'], '`std::jthread` (C++20) avoids the problem because it joins in its destructor.'),
        out(`auto twice = [](int x) { return x * 2; };\nauto f1 = std::async(std::launch::async, twice, 10);\nauto f2 = std::async(std::launch::async, twice, 21);\nstd::cout << f1.get() + f2.get();`, ['62', '31', '2042', 'Error'], 'The tasks return 20 and 42, and `get()` waits for each one before adding.'),
        // Final challenge
        out(`std::vector<int> r(3);\nstd::vector<std::thread> threads;\nfor (int i = 0; i < 3; i++)\n    threads.emplace_back([&r, i] { r[i] = (i + 1) * (i + 1); });\nfor (auto& t : threads) t.join();\nstd::cout << r[0] + r[1] + r[2] << " " << threads.size();`, ['14 3', '6 3', '14 0', 'An unpredictable value'], 'Each thread writes to its own position, so there is no race. `i` is captured by copy; by reference would be a bug, because it changes while the threads start. After the `join` calls: 1 + 4 + 9 = 14.'),
      ],
    },
    // ───────────── Day 30 ─────────────
    {
      id: 'cpp-wrapup',
      t: 'Wrap-up',
      d: 'Final review, everyday tools and next steps.',
      guide: [
        { h: 'What you have learned', p: [
          'You have gone through C++ from `std::cout` to threads: types, STL containers, functions, references and pointers, dynamic memory, classes, inheritance, polymorphism, templates, exceptions, algorithms, lambdas, smart pointers, move semantics, files and concurrency.',
          'The idea that ties it all together is RAII: every resource has an owner that releases it in its destructor. If you apply it, your C++ code will be safe and fast at the same time.' ] },
        { h: 'Modern C++ in a few lines', p: [
          'This snippet brings together several pieces of the course: a struct, a vector, `std::sort` with a lambda, structured bindings and `std::accumulate`.',
          'Notice what is missing: no `new`, no `delete` and no error-prone index loops.' ],
          code: `struct Student { std::string name; double grade; };\n\nstd::vector<Student> group = {{"Eve", 8.5}, {"Leo", 6.0}, {"Ann", 9.2}};\nstd::sort(group.begin(), group.end(),\n          [](const Student& a, const Student& b) { return a.grade > b.grade; });\nfor (const auto& [name, grade] : group)\n    std::cout << name << " " << grade << "\\n";   // Ann 9.2, Eve 8.5, Leo 6\ndouble average = std::accumulate(group.begin(), group.end(), 0.0,\n    [](double s, const Student& st) { return s + st.grade; }) / group.size();` },
        { h: 'Everyday tools', p: [
          'Compile with warnings: `g++ -std=c++20 -Wall -Wextra -O2`. Sanitizers (`-fsanitize=address,undefined`) detect out-of-range accesses and undefined behaviour while you test.',
          'Projects with many files use CMake to describe how to build. A debugger (gdb, lldb or your editor’s) and `clang-format` complete the toolbox.' ],
          code: `# CMakeLists.txt\ncmake_minimum_required(VERSION 3.20)\nproject(MyApp CXX)\nset(CMAKE_CXX_STANDARD 20)\nadd_executable(myapp src/main.cpp src/shop.cpp)\n\n# In the terminal:\n# cmake -B build && cmake --build build` },
        { h: 'Typical mistakes and next steps', p: [
          'The most common bugs: uninitialised variables, unexpected integer division, out-of-range indexes, `=` instead of `==`, dangling references or pointers and data shared between threads without protection.',
          'To keep going: practise with small projects (a task manager, a console game, a log analyser), use cppreference.com as your reference and read "A Tour of C++" by Bjarne Stroustrup. Then explore Qt for user interfaces, Unreal Engine for games or systems programming.' ] },
        { h: 'Real example: a mini inventory manager', real: true, p: [
          'A warehouse records stock coming in and going out. The class protects its data, uses a `std::map`, throws exceptions when an operation is not valid and an algorithm with a lambda counts the products that are out of stock.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <map>\n#include <stdexcept>\n#include <string>\n\nclass Inventory {\npublic:\n    void stock_in(const std::string& product, int units) {\n        if (units <= 0) throw std::invalid_argument("invalid units");\n        stock[product] += units;\n    }\n    void stock_out(const std::string& product, int units) {\n        auto it = stock.find(product);\n        if (it == stock.end() || it->second < units)\n            throw std::runtime_error("insufficient stock of " + product);\n        it->second -= units;\n    }\n    int out_of_stock() const {\n        return std::count_if(stock.begin(), stock.end(),\n                             [](const auto& pair) { return pair.second == 0; });\n    }\nprivate:\n    std::map<std::string, int> stock;\n};\n\nint main() {\n    Inventory inv;\n    inv.stock_in("screws", 500);\n    inv.stock_in("nuts", 20);\n    inv.stock_out("nuts", 20);\n    try {\n        inv.stock_out("washers", 5);\n    } catch (const std::exception& e) {\n        std::cout << "Warning: " << e.what() << "\\n";   // Warning: insufficient stock of washers\n    }\n    std::cout << "Out of stock: " << inv.out_of_stock() << "\\n";  // Out of stock: 1\n}` },
      ],
      x: [
        mc('Which g++ option turns on most of the useful warnings?', ['-Wall', '-O2', '-g', '-o'], '`-Wall` (and `-Wextra`) warn about mistakes such as unused variables or `=` in a condition.'),
        out(`int a = 2;\nint& r = a;\nint* p = &a;\nr *= 3;\n*p += 1;\nstd::cout << a;`, ['7', '6', '3', '9'], '`r` and `*p` both refer to `a`: 2 × 3 = 6 and 6 + 1 = 7.'),
        mc('Which container would you use to count how many times each word appears, sorted alphabetically?', ['std::map<std::string, int>', 'std::vector<std::string>', 'std::set<std::string>', 'std::array<int, 26>'], 'A `map` links each word to its counter and keeps the keys sorted.'),
        fill(`auto p = std::make_unique<Circle>(2.0);\nstd::cout << p___area();`, ['->', '.', '::', '*'], 'With a pointer (smart ones too) you access methods with `->`.'),
        typ('Sort the vector from largest to smallest', `std::sort(v.begin(), v.end(), [](int a, int b) { return a ___ b; });`, '>', 'The lambda must return `true` when `a` should go before `b`.'),
        out(`struct A {\n    virtual int f() const { return 1; }\n    virtual ~A() = default;\n};\nstruct B : A {\n    int f() const override { return 2; }\n};\n\nstd::unique_ptr<A> p = std::make_unique<B>();\nstd::cout << p->f() + A().f();`, ['3', '2', '4', 'Error'], '`p` points to a `B`, so `f()` is 2. `A().f()` creates a temporary `A` and is 1.'),
        ord('Declare a vector of unique_ptr to Shape called plan', ['std::vector<', 'std::unique_ptr<', 'Shape', '>>', 'plan;'], ['std::shared_ptr<', '*'], 'The type of the elements goes inside the angle brackets of `std::vector`.'),
        // Final challenge
        out(`struct Order { std::string customer; double total; };\n\nstd::vector<Order> v = {{"ann", 30}, {"luke", 120}, {"eve", 75}, {"ann", 45}};\nstd::map<std::string, double> by_customer;\nfor (const auto& [c, t] : v) by_customer[c] += t;\nauto best = std::max_element(by_customer.begin(), by_customer.end(),\n    [](const auto& a, const auto& b) { return a.second < b.second; });\nint big = std::count_if(v.begin(), v.end(),\n    [](const Order& o) { return o.total > 50; });\nstd::cout << by_customer.size() << " " << best->first << " " << big;`, ['3 luke 2', '4 luke 2', '3 ann 2', '3 luke 3'], 'By customer: ann 75, eve 75 and luke 120, three keys. The highest total is luke’s. Only two orders are above 50: 120 and 75.'),
      ],
    },
  ],
}))(Sintaxis);
