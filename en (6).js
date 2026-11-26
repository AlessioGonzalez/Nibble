/* JavaScript · English */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('javascript', 'en', {
  tag: 'The language of the web, from the browser to Node.js, in 30 days.',
  days: [
    // Day 1
    {
      t: 'Introduction',
      d: 'What JavaScript is, where it runs, the console and your first script.',
      guide: [
        { h: 'What is JavaScript?', p: [
          'JavaScript is the programming language of the web. Brendan Eich created it in 1995 for the Netscape browser and today every browser in the world understands it.',
          'HTML defines the content of a page, CSS its look and JavaScript its behaviour: menus that open, forms that are validated, maps that move.',
          'Its official name as a standard is ECMAScript. When you read "ES6" or "ES2015" it refers to the big 2015 update, which brought `let`, `const`, arrow functions and classes.' ] },
        { h: 'Where it runs', p: [
          'In the browser: open the console with F12 (or Ctrl+Shift+J) and type code directly. For a page, save the code in a `.js` file and link it from the HTML.',
          'Outside the browser: Node.js runs JavaScript on servers and in your terminal. Install it from nodejs.org and run a file with `node app.js`.',
          'The `defer` attribute makes the script run once the HTML has loaded, so it can find the elements of the page.' ],
          code: `<!-- index.html -->\n<script src="app.js" defer></script>\n\n// In the terminal, with Node.js:\n// node app.js` },
        { h: 'Your first program', p: [
          '`console.log()` shows in the console whatever you pass between the brackets. You can pass several values separated by commas and it shows them separated by a space.',
          'Text goes between double or single quotes. The final semicolon is optional, but always writing it avoids surprises.' ],
          code: `console.log("Hello, world");    // Hello, world\nconsole.log(2 + 3);             // 5\nconsole.log("Total:", 10 * 3);  // Total: 30` },
        { h: 'Variables and comments', p: [
          'A variable is a named box where you store a value. Use `const` for values you will not reassign and `let` for those that do change. Avoid `var`, which is the old way.',
          'Whatever follows `//` is a one-line comment; `/* ... */` spans several lines. JavaScript ignores them: they are there to explain the why of the code.',
          'Typical mistake: reassigning a `const`. JavaScript throws `TypeError: Assignment to constant variable`.' ],
          code: `const name = "Eva";   // will not change\nlet age = 30;         // can change\nage = age + 1;\n/* We show the result\n   on a single line */\nconsole.log(name, age);  // Eva 31` },
        { h: 'Real example: splitting the restaurant bill', real: true, p: [
          'With a few lines you already solve an everyday problem: sharing a bill with a 10 % tip between friends.',
          '`toFixed(2)` rounds to two decimals and returns a string, perfect for showing money.' ],
          code: `const bill = 84.5;\nconst people = 3;\nconst tip = bill * 0.1;\nconst perPerson = (bill + tip) / people;\nconsole.log("Each person pays:", perPerson.toFixed(2));  // Each person pays: 30.98` },
      ],
      x: [
        mc('How do you show a message in the console in JavaScript?', ['console.log("Hello")', 'print("Hello")', 'System.out.println("Hello")', 'echo "Hello"'], '`console.log` is the standard way to write to the console. `print` is Python.'),
        mc('How do you write a one-line comment?', ['// comment', '# comment', '<!-- comment -->', '-- comment'], 'Everything after `//` on that line is ignored. `/* */` is for several lines.'),
        mc('Where can JavaScript run?', ['In the browser and outside it with Node.js', 'Only in the browser', 'Only on Windows', 'Only inside Java'], 'Every browser runs it, and Node.js takes it to servers and the terminal.'),
        fill(`<script ___="app.js" defer></script>`, ['src', 'href', 'file', 'link'], 'The `src` attribute links an external JavaScript file. `href` is used for links and stylesheets.'),
        out(`console.log(2 + 3 * 4);`, ['14', '20', '24', '9'], 'Multiplication is calculated before addition: 3 * 4 = 12 and 2 + 12 = 14.'),
        ord('Write the line that shows Hello, world in the console', ['console', '.', 'log', '(', '"Hello, world"', ')'], ['print', 'echo'], 'You call the `log` method of the `console` object with the text between brackets.'),
        typ('Declare a variable that can be reassigned', `___ age = 30;\nage = 31;`, ['let', 'var'], '`let` allows reassignment. With `const` the second line would throw a `TypeError`.'),
        out(`let price = 10;\nprice = price * 2;\nconst shipping = 5;\nconsole.log("Total:", price + shipping);`, ['Total: 25', 'Total: 15', 'Total:25', 'Error'], '`price` becomes 20 and the shipping is added: 25. `console.log` separates its arguments with a space.'),
      ],
    },
    // Day 2
    {
      t: 'Data types',
      d: 'Primitives, typeof, strings, numbers and conversions between types.',
      guide: [
        { h: 'Primitives and objects', p: [
          'JavaScript has seven primitive types: `string` (text), `number` (whole or decimal numbers), `boolean` (`true`/`false`), `undefined`, `null`, `bigint` and `symbol`. Everything else, such as arrays and functions, is an object.',
          '`typeof` tells you the type of a value. Watch out for two quirks: `typeof null` returns "object" because of a historical bug, and `typeof []` also returns "object".',
          '`undefined` means "does not have a value yet"; `null` is something you set on purpose to say "empty".' ],
          code: `console.log(typeof "hello");    // string\nconsole.log(typeof 3.14);       // number\nconsole.log(typeof true);       // boolean\nconsole.log(typeof undefined);  // undefined\nconsole.log(typeof null);       // object  (historical quirk)\nconsole.log(typeof [1, 2]);     // object` },
        { h: 'let, const and var', p: [
          'Use `const` by default and `let` only when you need to reassign. That way whoever reads the code knows which values change.',
          '`var` is the pre-2015 way: it ignores `{ }` blocks and can be used before it is declared (its value is `undefined`), which causes bugs that are hard to spot.' ] },
        { h: 'Strings and templates', p: [
          'Strings go between double, single or back quotes. Back quotes create templates: they insert expressions with `${...}` and allow several lines.',
          'Useful methods: `length`, `toUpperCase()`, `toLowerCase()`, `trim()` (removes spaces at both ends), `includes()`, `slice(start, end)` and `replace()`. None of them modifies the original string: they return a new one.' ],
          code: 'const name = "Eva";\nconst points = 15;\nconsole.log(`${name} has ${points} points`);  // Eva has 15 points\n\nconst t = "  JavaScript  ".trim();\nconsole.log(t.length);           // 10\nconsole.log(t.slice(0, 4));      // Java\nconsole.log(t.toUpperCase());    // JAVASCRIPT\nconsole.log(t.includes("Script")); // true' },
        { h: 'Numbers and conversions', p: [
          'If one of the operands of `+` is a string, JavaScript concatenates: `"5" + 2` gives "52". The other operators (`-`, `*`, `/`) turn the string into a number: `"5" - 2` gives 3.',
          'Convert explicitly so you don’t depend on those rules: `Number("42")`, `parseInt("42px")`, `parseFloat("3.5")` and `String(42)`.',
          'If the conversion fails you get `NaN` ("not a number"), which, oddly, is of type `number`. Check for it with `Number.isNaN()`.' ],
          code: `console.log("5" + 2);           // 52\nconsole.log("5" - 2);           // 3\nconsole.log(Number("42") + 1);  // 43\nconsole.log(parseInt("42px"));  // 42\nconsole.log(Number("hello"));   // NaN` },
        { h: 'Real example: cleaning a name from a form', real: true, p: [
          'Users type with extra spaces and random capital letters. Before saving a name it is a good idea to normalise it.',
          'Chaining methods is common: each one returns a new string on which the next one is applied.' ],
          code: `const input = "   aNA  ";\nconst clean = input.trim().toLowerCase();\nconst name = clean[0].toUpperCase() + clean.slice(1);\nconsole.log(name);         // Ana\nconsole.log(name.length);  // 3` },
      ],
      x: [
        mc('Which keyword declares a variable that cannot be reassigned?', ['const', 'let', 'var', 'static'], 'With `const` you cannot assign the variable again; with `let` you can.'),
        out(`console.log(typeof 42);`, ['number', 'int', 'integer', 'Number'], 'JavaScript has a single type for whole and decimal numbers: `number`.'),
        out(`let x;\nconsole.log(x);`, ['undefined', 'null', '0', 'Error'], 'A variable declared without a value is `undefined`.'),
        out(`let a = "5";\nlet b = 2;\nconsole.log(a + b);`, ['52', '7', 'Error', 'NaN'], 'If one of the operands is a string, `+` concatenates instead of adding.'),
        out(`console.log("5" - 2);`, ['3', '52', 'NaN', 'Error'], 'The `-` operator only works with numbers, so it turns "5" into 5.'),
        fill(`const s = "  hello  ";\nconsole.log(s.___());  // hello`, ['trim', 'strip', 'clean', 'trimAll'], '`trim()` removes the spaces at the start and the end. `strip` is Python.'),
        out(`const t = "JavaScript";\nconsole.log(t.length, t.slice(0, 4), t.toUpperCase().includes("SCRIPT"));`, ['10 Java true', '10 Jav true', '9 Java true', '10 Java false'], 'It has 10 letters, `slice(0, 4)` takes indexes 0 to 3 and in capitals it does contain "SCRIPT".'),
        out('const name = "ana";\nconst age = "30";\nconsole.log(`${name.toUpperCase()} is ${Number(age) + 1} years old`);', ['ANA is 31 years old', 'ANA is 301 years old', 'ana is 31 years old', '${name.toUpperCase()} is ${Number(age) + 1} years old'], 'The template evaluates each `${...}`. `Number(age)` turns "30" into 30, so it adds instead of concatenating.'),
      ],
    },
    // Day 3
    {
      t: 'Booleans, operators and dates',
      d: '=== versus ==, truthy and falsy, arithmetic and logical operators, and Date.',
      guide: [
        { h: 'Booleans and comparisons', p: [
          'A boolean can only be `true` or `false`. You get one when comparing: `>`, `<`, `>=`, `<=`, `===` (equal) and `!==` (not equal).',
          '`===` compares value and type. `==` converts the types before comparing and gives odd results like `0 == ""` (true). Always use `===` and `!==`.' ],
          code: `console.log(5 === "5");  // false\nconsole.log(5 == "5");   // true  (converts the string)\nconsole.log(3 !== 4);    // true\nconsole.log(10 >= 10);   // true` },
        { h: 'Truthy and falsy', p: [
          'In an `if`, any value is turned into a boolean. There are only six falsy values: `false`, `0`, `""` (empty string), `null`, `undefined` and `NaN`.',
          'Everything else is truthy, including "0", "false", `[]` and `{}`. Thinking that an empty array is false is a typical mistake.' ],
          code: `console.log(Boolean(0));     // false\nconsole.log(Boolean(""));    // false\nconsole.log(Boolean("0"));   // true\nconsole.log(Boolean([]));    // true` },
        { h: 'Arithmetic and assignment operators', p: [
          'Besides `+ - * /` you have `%` (remainder of the division) and `**` (power). Precedence is the same as in maths: first `**`, then `* / %` and finally `+ -`.',
          'Shortcuts: `x += 2` is the same as `x = x + 2`, and `x++` adds 1. The remainder `%` tells you whether a number is even (`n % 2 === 0`).' ],
          code: `console.log(10 % 3);     // 1\nconsole.log(2 ** 3);     // 8\nlet x = 5;\nx += 2;   // 7\nx++;      // 8\nconsole.log(x);          // 8` },
        { h: 'Logical operators', p: [
          '`&&` (and) is true if both sides are; `||` (or) if at least one is; `!` negates.',
          'They short-circuit: in `a && b`, if `a` is falsy `b` is not even looked at. That is why `user && user.name` does not fail if `user` is `null`.' ] },
        { h: 'Dates with Date', p: [
          '`new Date()` creates the current date and time; `new Date(2024, 0, 15)` creates a specific date. Careful: months start at 0 (January) and end at 11 (December).',
          '`getFullYear()`, `getMonth()`, `getDate()` (day of the month) and `getDay()` (day of the week, 0 is Sunday) read its parts. Subtracting two dates gives the difference in milliseconds.' ],
          code: `const d = new Date(2024, 0, 15);  // 15 January 2024\nconsole.log(d.getFullYear(), d.getMonth(), d.getDate());  // 2024 0 15\nconsole.log(d.getDay());  // 1 (Monday)` },
        { h: 'Real example: how many days until the holidays', real: true, p: [
          'A countdown is a classic on event websites. We subtract the dates and turn the milliseconds into days.',
          '`Math.round` avoids one-hour errors when the clocks change between the two dates.' ],
          code: `const today = new Date(2024, 5, 1);   // 1 June\nconst trip = new Date(2024, 6, 15);   // 15 July\nconst MS_PER_DAY = 1000 * 60 * 60 * 24;\nconst days = Math.round((trip - today) / MS_PER_DAY);\nconsole.log(days, "days to go");  // 44 days to go` },
      ],
      x: [
        mc('Which of these values is falsy?', ['0', '"0"', '[]', '"false"'], 'The number 0 is falsy. Any non-empty string and any array, even an empty one, are truthy.'),
        out(`console.log(5 == "5", 5 === "5");`, ['true false', 'true true', 'false false', 'false true'], '`==` turns "5" into a number and gives `true`; `===` also compares the type and gives `false`.'),
        out(`console.log(10 % 3, 2 ** 3);`, ['1 8', '3 6', '1 6', '3 8'], '`%` is the remainder (10 divided by 3 is 3 with 1 left over) and `**` is the power (2³ = 8).'),
        out(`let x = 5;\nx += 2;\nx++;\nconsole.log(x);`, ['8', '7', '6', '52'], '5 + 2 = 7, and `x++` adds 1 more.'),
        fill(`const canEnter = age >= 18 ___ hasTicket;`, ['&&', 'and', '||', '&&&'], 'Both conditions must be met, so `&&` is used. `and` is Python.'),
        out(`console.log(Boolean(""), Boolean("0"));`, ['false true', 'true true', 'false false', 'true false'], 'The empty string is falsy; "0" is a non-empty string, so it is truthy.'),
        out(`const d = new Date(2024, 0, 15);\nconsole.log(d.getMonth());`, ['0', '1', '15', '2024'], 'Months in `Date` start at 0: January is 0.'),
        out(`const age = 20;\nconst member = false;\nconst discount = age < 25 || member;\nconsole.log(discount, !discount && age > 18, 7 + 3 * 2 ** 2);`, ['true false 19', 'true true 19', 'true false 40', 'false false 19'], '`age < 25` is true, so `||` gives true; `!true` is false; and 2 ** 2 = 4, 3 * 4 = 12, 7 + 12 = 19.'),
      ],
    },
    // Day 4
    {
      t: 'Conditionals',
      d: 'if, else if, the ternary operator, switch, ?? and ?.',
      guide: [
        { h: 'if, else if and else', p: [
          '`if` runs a block only if the condition is true. You can chain alternatives with `else if` and finish with an `else` for the remaining cases.',
          'The conditions are checked in order and only the first block that matches runs. That is why it is best to start with the most restrictive case.' ],
          code: `const temperature = 28;\nif (temperature > 30) {\n  console.log("It is very hot");\n} else if (temperature > 20) {\n  console.log("It is nice");\n} else {\n  console.log("Wrap up warm");\n}\n// It is nice` },
        { h: 'The ternary operator', p: [
          '`condition ? valueIfYes : valueIfNo` chooses between two values in a single expression. It is ideal for assigning a variable or building a string.',
          'Don’t chain many ternaries: if there are more than two cases, an `if` or a `switch` reads better.' ],
          code: `const age = 17;\nconst access = age >= 18 ? "allowed" : "denied";\nconsole.log(access);  // denied` },
        { h: 'switch', p: [
          '`switch` compares a value with several `case`s using `===`. Each case ends with `break`; if you forget it, execution carries on into the next case.',
          'That "falling through" to the next case is used to group values, and `default` catches whatever matches none of them.' ],
          code: `const day = "sat";\nswitch (day) {\n  case "sat":\n  case "sun":\n    console.log("Weekend");\n    break;\n  default:\n    console.log("Weekday");\n}\n// Weekend` },
        { h: 'Default values: ?? and ?.', p: [
          '`a ?? b` returns `b` only if `a` is `null` or `undefined`. It is better than `||` for default values, because `||` also replaces 0 and "", which may be valid values.',
          'Optional chaining `?.` reads a property without failing if what comes before is `null` or `undefined`: it returns `undefined` instead of throwing a `TypeError`.' ],
          code: `const stock = 0;\nconsole.log(stock || 10);  // 10  (we lose the 0!)\nconsole.log(stock ?? 10);  // 0\n\nconst user = { profile: null };\nconsole.log(user.profile?.photo);  // undefined` },
        { h: 'Real example: shipping costs in an online shop', real: true, p: [
          'Shops usually offer free shipping above a certain amount and charge differently depending on the country. It is a perfect case for `if` / `else if`.' ],
          code: `const total = 42;\nconst country = "UK";\nlet shipping;\nif (total >= 50) {\n  shipping = 0;\n} else if (country === "UK") {\n  shipping = 4.99;\n} else {\n  shipping = 9.99;\n}\nconsole.log("Shipping:", shipping);  // Shipping: 4.99` },
      ],
      x: [
        out(`const age = 20;\nconst r = age >= 18 ? "adult" : "minor";\nconsole.log(r);`, ['adult', 'minor', 'true', '20'], 'The condition is true, so the ternary returns the first value.'),
        fill(`if (x > 10) {\n  console.log("lots");\n} ___ (x > 5) {\n  console.log("some");\n}`, ['else if', 'elif', 'elseif', 'else'], 'In JavaScript alternatives are chained with `else if`. `elif` is Python.'),
        out(`const n = 0;\nif (n) {\n  console.log("yes");\n} else {\n  console.log("no");\n}`, ['no', 'yes', '0', 'undefined'], '0 is falsy, so the `else` runs.'),
        out(`console.log(null ?? "value", 0 || "other");`, ['value other', 'null other', 'value 0', 'null 0'], '`??` replaces `null`. `||` replaces any falsy value, including 0.'),
        out(`const day = "sat";\nswitch (day) {\n  case "sat":\n  case "sun":\n    console.log("weekend");\n    break;\n  default:\n    console.log("weekday");\n}`, ['weekend', 'weekday', 'weekend\nweekday', 'sat'], 'Empty `case`s are grouped: "sat" falls into the "sun" block, and `break` stops it reaching `default`.'),
        out(`const obj = { a: 1 };\nconsole.log(obj.b?.c);`, ['undefined', 'Error', 'null', '""'], '`obj.b` is `undefined` and `?.` stops there, returning `undefined` instead of throwing an error.'),
        typ('Use the operator that gives a default value only if the name is null or undefined', `const name = user.name ___ "Anonymous";`, '??', '`??` respects values like "" or 0 and only replaces `null` and `undefined`.'),
        out(`const mark = 7.5;\nlet grade;\nif (mark >= 9) grade = "A";\nelse if (mark >= 7) grade = "B";\nelse if (mark >= 5) grade = "C";\nelse grade = "F";\nconst extra = mark > 7 ? "+" : "";\nconsole.log(grade + extra);`, ['B+', 'B', 'A+', 'C+'], '7.5 does not reach 9 but does reach 7, so it is a "B"; it is also greater than 7, so the ternary adds "+".'),
      ],
    },
    // Day 5
    {
      t: 'Arrays',
      d: 'Creating, reading, changing, searching and sorting lists of values.',
      guide: [
        { h: 'Creating and accessing', p: [
          'An array is an ordered list of values between square brackets: `const marks = [7, 9, 4]`. It can mix types, although usually they are all the same.',
          'Indexes start at 0: the first element is `marks[0]` and the last one `marks[marks.length - 1]` or, shorter, `marks.at(-1)`. Reading an index that does not exist gives `undefined`, not an error.' ],
          code: `const fruits = ["pear", "grape", "kiwi"];\nconsole.log(fruits[0]);       // pear\nconsole.log(fruits.length);   // 3\nconsole.log(fruits.at(-1));   // kiwi\nconsole.log(fruits[10]);      // undefined` },
        { h: 'Adding and removing elements', p: [
          '`push` adds to the end and `pop` removes the last one. `unshift` adds to the start and `shift` removes the first one.',
          '`splice(start, howMany, ...new)` deletes or inserts at any position. All these methods modify the original array.' ],
          code: `const tasks = ["shop", "study"];\ntasks.push("run");          // ["shop", "study", "run"]\ntasks.unshift("wake up");   // ["wake up", "shop", "study", "run"]\ntasks.pop();                // removes "run"\ntasks.splice(1, 1);         // removes "shop"\nconsole.log(tasks);         // ["wake up", "study"]` },
        { h: 'Searching, copying and joining', p: [
          '`indexOf` returns the position of a value (or -1 if it is not there) and `includes` returns true or false. `slice(start, end)` copies a piece, not including the end.',
          '`join(separator)` joins the elements into a string and `concat` (or the spread `[...a, ...b]`) joins arrays. These methods don’t modify the original.' ],
          code: `const nums = [10, 20, 30, 40];\nconsole.log(nums.indexOf(30));    // 2\nconsole.log(nums.includes(50));   // false\nconsole.log(nums.slice(1, 3));    // [20, 30]\nconsole.log(nums.join(" | "));    // 10 | 20 | 30 | 40` },
        { h: 'Sorting and references', p: [
          '`sort()` without arguments sorts as text: `[3, 1, 10].sort()` gives `[1, 10, 3]`. For numbers pass a function: `sort((a, b) => a - b)`.',
          'An array stored in a `const` cannot be reassigned, but it can be changed inside. And `const b = a` does not copy: both variables point to the same array. To copy use `[...a]`.' ],
          code: `const prices = [30, 5, 120];\nprices.sort((a, b) => a - b);\nconsole.log(prices);  // [5, 30, 120]\n\nconst a = [1, 2];\nconst b = a;       // same list\nconst c = [...a];  // copy\nb.push(3);\nconsole.log(a, c); // [1, 2, 3] [1, 2]` },
        { h: 'Real example: the shopping list', real: true, p: [
          'A shopping list is an array that grows and shrinks. Before adding we check it is not repeated, and we remove what we already bought.' ],
          code: `const shopping = ["milk", "bread"];\nshopping.push("eggs");\nif (!shopping.includes("coffee")) shopping.push("coffee");\nshopping.splice(shopping.indexOf("bread"), 1);  // we already bought the bread\nconsole.log(shopping.length, shopping.join(", "));  // 3 milk, eggs, coffee` },
      ],
      x: [
        out(`const fruits = ["pear", "grape"];\nfruits.push("kiwi");\nconsole.log(fruits.length);`, ['3', '2', 'kiwi', 'Error'], '`push` adds to the end and the size becomes 3.'),
        ord('Add 4 to the end of the nums array', ['nums', '.', 'push', '(', '4', ')'], ['append', 'add'], 'JavaScript arrays use `push`. `append` is Python.'),
        fill(`const marks = [7, 9, 4];\nconst last = marks[marks.___ - 1];`, ['length', 'size', 'count', 'length()'], '`length` is a property, not a method: no brackets. The last index is `length - 1`.'),
        out(`const a = [1, 2, 3];\nconsole.log(a.indexOf(2), a.includes(5));`, ['1 false', '2 false', '1 true', '-1 false'], 'The 2 is at index 1 and the 5 is not there.'),
        out(`const a = [1, 2, 3, 4, 5];\nconsole.log(a.slice(1, 3));`, ['[2, 3]', '[1, 2, 3]', '[2, 3, 4]', '[1, 2]'], '`slice(start, end)` includes the start but not the end, and does not modify the original.'),
        out(`console.log([3, 1, 10].sort());`, ['[1, 10, 3]', '[1, 3, 10]', '[10, 3, 1]', '[3, 1, 10]'], 'Without a compare function, `sort` sorts as text and "10" comes before "3". Use `sort((a, b) => a - b)` for numbers.'),
        out(`const a = [1, 2, 3];\nconst b = a;\nb.pop();\nconsole.log(a);`, ['[1, 2]', '[1, 2, 3]', '[3]', 'Error'], '`b` is not a copy: it points to the same array as `a`.'),
        out(`const queue = ["Ana", "Leo", "Eva"];\nqueue.push("Sol");\nconst served = queue.shift();\nqueue.splice(1, 1, "Iker");\nconsole.log(served, queue);`, ['Ana ["Leo", "Iker", "Sol"]', 'Sol ["Ana", "Iker", "Eva"]', 'Ana ["Leo", "Iker", "Eva", "Sol"]', 'Ana ["Iker", "Eva", "Sol"]'], '`shift` takes "Ana" from the start; ["Leo", "Eva", "Sol"] is left and `splice(1, 1, "Iker")` swaps "Eva" for "Iker".'),
      ],
    },
    // Day 6
    {
      t: 'Loops',
      d: 'for, while, do...while, for...of, for...in, break and continue.',
      guide: [
        { h: 'The for loop', p: [
          '`for (start; condition; step)` repeats a block a known number of times. The usual thing is to count with `let i = 0` while `i < n`, adding 1 on each pass.',
          'Typical mistake: using `i <= array.length`. The last index is `length - 1`, so the last pass would read `undefined`.' ],
          code: `for (let i = 0; i < 3; i++) {\n  console.log("Pass", i);\n}\n// Pass 0\n// Pass 1\n// Pass 2` },
        { h: 'while and do...while', p: [
          '`while` repeats while the condition is true; use it when you don’t know how many passes there will be. Make sure something changes inside or you will get an infinite loop.',
          '`do...while` checks the condition at the end, so the block runs at least once.' ],
          code: `let balance = 100;\nlet months = 0;\nwhile (balance > 0) {\n  balance -= 30;\n  months++;\n}\nconsole.log(months);  // 4` },
        { h: 'for...of and for...in', p: [
          '`for...of` goes through the values of any iterable: arrays, strings, Sets or Maps. It is the clearest way to go through an array.',
          '`for...in` goes through the keys of an object. With an array it would give you the indexes as strings ("0", "1"...), so don’t use it for arrays.' ],
          code: `for (const letter of "sun") console.log(letter);  // s, u, n (one per line)\n\nconst ages = { Ana: 30, Leo: 8 };\nfor (const name in ages) {\n  console.log(name, ages[name]);\n}\n// Ana 30\n// Leo 8` },
        { h: 'break and continue', p: [
          '`break` leaves the loop completely: useful when you already found what you were looking for. `continue` skips the rest of the current pass and moves on to the next one.',
          'Use them sparingly: a loop full of `break` and `continue` is hard to follow. Often an array method such as `find` or `filter` (day 9) expresses it better.' ],
          code: `const marks = [7, 3, 9, 4];\nfor (const m of marks) {\n  if (m < 5) continue;   // skips the fails\n  console.log("Passed:", m);\n}\n// Passed: 7\n// Passed: 9` },
        { h: 'Real example: receipt total and the most expensive item', real: true, p: [
          'Going through a list while accumulating results is the most common use of a loop: adding amounts, finding maximums, counting cases.' ],
          code: `const prices = [3.5, 12, 7.25, 1.99];\nlet total = 0;\nlet priciest = 0;\nfor (const p of prices) {\n  total += p;\n  if (p > priciest) priciest = p;\n}\nconsole.log(total.toFixed(2), priciest);  // 24.74 12` },
      ],
      x: [
        out(`for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`, ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', '3'], '`i` starts at 0 and the loop stops when it reaches 3, without running that pass.'),
        fill(`for (const fruit ___ ["pear", "grape"]) {\n  console.log(fruit);\n}`, ['of', 'in', 'from', 'at'], '`for...of` goes through the values of the array.'),
        out(`let i = 0;\nwhile (i < 3) i++;\nconsole.log(i);`, ['3', '2', '4', '0'], 'The loop ends when `i` is 3, and that is the value printed.'),
        typ('Leave the loop as soon as you find the number you are looking for', `for (const n of numbers) {\n  if (n === target) ___;\n}`, ['break', 'break;'], '`break` ends the loop immediately.'),
        out(`for (const i in ["a", "b"]) {\n  console.log(i);\n}`, ['0\n1', 'a\nb', '["a", "b"]', 'undefined'], '`for...in` goes through the keys (the indexes); `for...of` goes through the values.'),
        out(`let s = "";\nfor (const c of "abc") {\n  s = c + s;\n}\nconsole.log(s);`, ['cba', 'abc', 'c', 'bca'], 'Each letter is put in front of what has been accumulated, so the string ends up reversed.'),
        out(`let s = 0;\nfor (let i = 1; i <= 10; i++) {\n  if (i % 2) continue;\n  s += i;\n}\nconsole.log(s);`, ['30', '25', '55', '10'], '`i % 2` is 1 (truthy) for odd numbers, which are skipped: 2 + 4 + 6 + 8 + 10 = 30.'),
        out(`const marks = [8, 3, 10, 6, 2];\nlet passed = 0;\nlet sum = 0;\nfor (const m of marks) {\n  if (m < 5) continue;\n  passed++;\n  sum += m;\n}\nconsole.log(passed, sum / passed);`, ['3 8', '5 5.8', '3 4.8', '2 9'], 'The 3 and the 2 are skipped. 8, 10 and 6 are left: three passes that add up to 24, and 24 / 3 = 8.'),
      ],
    },
    // Day 7
    {
      t: 'Functions',
      d: 'Declarations, arrow functions, parameters, return, scope and hoisting.',
      guide: [
        { h: 'Declaring and calling functions', p: [
          'A function is a named block of code you can reuse. It is declared with `function name(parameters) { ... }` and called with `name(arguments)`.',
          '`return` gives back a value and ends the function. If there is no `return`, the function returns `undefined`: forgetting it is a very common mistake.' ],
          code: `function area(width, height) {\n  return width * height;\n}\nconsole.log(area(3, 4));  // 12\n\nfunction greet(name) {\n  console.log("Hello " + name);  // returns nothing\n}\nconsole.log(greet("Ana"));  // Hello Ana, and then undefined` },
        { h: 'Default and rest parameters', p: [
          'A parameter can have a default value that is used if you don’t pass that argument: `function f(x = 1)`.',
          '`...rest` gathers all the remaining arguments into an array. That way a function accepts any number of values.' ],
          code: 'function greet(name = "friend") {\n  return `Hello, ${name}`;\n}\nconsole.log(greet());       // Hello, friend\n\nfunction add(...nums) {\n  let total = 0;\n  for (const n of nums) total += n;\n  return total;\n}\nconsole.log(add(1, 2, 3));  // 6' },
        { h: 'Arrow functions', p: [
          'Arrow functions are a short way to write functions: `const double = (n) => n * 2`. If the body is a single expression, the `return` is implicit.',
          'With braces you need an explicit `return`: `(n) => { return n * 2; }`. They are perfect for small functions that are passed to others (you will see this on day 9).' ],
          code: `const double = (n) => n * 2;\nconst hello = () => "Hi!";\nconst max = (a, b) => {\n  if (a > b) return a;\n  return b;\n};\nconsole.log(double(5), hello(), max(3, 8));  // 10 Hi! 8` },
        { h: 'Scope and hoisting', p: [
          'Variables declared inside a function (or inside a `{ }` block with `let`/`const`) only exist in there. An inner variable with the same name as an outer one "hides" it without changing it.',
          '`function` declarations are hoisted: you can call them before the line where they are written. Functions stored in a `const` are not: calling them earlier throws `ReferenceError`.' ],
          code: `console.log(square(4));  // 16, works thanks to hoisting\nfunction square(n) {\n  return n * n;\n}\n\nlet x = 1;\nfunction change() {\n  let x = 2;   // another variable, it only exists here\n  return x;\n}\nconsole.log(change(), x);  // 2 1` },
        { h: 'Real example: final price with discount and VAT', real: true, p: [
          'A shop needs to calculate the final price in many places: cart, invoice, confirmation email. A function avoids repeating the formula and getting it wrong.',
          'Rounding with `Math.round(x * 100) / 100` leaves the result as a number with two decimals.' ],
          code: `function finalPrice(base, discount = 0, vat = 0.21) {\n  const discounted = base * (1 - discount);\n  return Math.round(discounted * (1 + vat) * 100) / 100;\n}\nconsole.log(finalPrice(100));        // 121\nconsole.log(finalPrice(100, 0.2));   // 96.8\nconsole.log(finalPrice(50, 0, 0.1)); // 55` },
      ],
      x: [
        fill(`const double = (n) ___ n * 2;`, ['=>', '->', '=', ':'], 'Arrow functions use `=>`. With a single expression, the `return` is implicit.'),
        out(`function greet(n = "friend") {\n  return "Hello " + n;\n}\nconsole.log(greet());`, ['Hello friend', 'Hello undefined', 'Hello', 'Error'], 'If you don’t pass the argument, the default value is used.'),
        typ('Make the function return the area of the circle', `function area(r) {\n  ___ Math.PI * r * r;\n}`, 'return', 'Without `return`, the function would calculate the value but return `undefined`.'),
        out(`const f = function (x) {\n  return x * x;\n};\nconsole.log(f(4));`, ['16', '8', 'x * x', 'undefined'], 'It is a function expression stored in a variable: 4 * 4 = 16.'),
        out(`console.log(f());\n\nfunction f() {\n  return "done";\n}`, ['done', 'undefined', 'Error', 'f'], '`function` declarations are hoisted: they can be used before they are written.'),
        out(`let x = 1;\nfunction change() {\n  let x = 2;\n  return x;\n}\nconsole.log(change(), x);`, ['2 1', '2 2', '1 1', '1 2'], 'The inner `x` is another local variable; the outer `x` is still 1.'),
        out(`function add(...n) {\n  let t = 0;\n  for (const v of n) t += v;\n  return t;\n}\nconsole.log(add(1, 2, 3), add());`, ['6 0', '6 undefined', '[1, 2, 3] 0', '123 0'], '`...n` gathers the arguments into an array. With no arguments the array is empty and the total stays at 0.'),
        out(`const discount = (price, pct = 10) => price - price * pct / 100;\nfunction total(...prices) {\n  let t = 0;\n  for (const p of prices) t += discount(p);\n  return t;\n}\nconsole.log(total(100, 50), discount(200, 50));`, ['135 100', '150 100', '135 190', '15 100'], 'With the default 10 %, 100 becomes 90 and 50 becomes 45: total 135. With 50 %, 200 becomes 100.'),
      ],
    },
    // Day 8
    {
      t: 'Objects',
      d: 'Properties, methods, this, going through objects and copying them.',
      guide: [
        { h: 'Creating objects and reading properties', p: [
          'An object groups related data in key-value pairs: `const user = { name: "Ana", age: 30 }`. It is the most used structure in JavaScript.',
          'You read a property with a dot (`user.name`) or with brackets (`user["name"]`). Brackets are needed when the key is in a variable or has spaces.' ],
          code: `const user = { name: "Ana", age: 30, "home town": "Quito" };\nconsole.log(user.name);          // Ana\nconsole.log(user["home town"]);  // Quito\n\nconst field = "age";\nconsole.log(user[field]);        // 30\nconsole.log(user.email);         // undefined` },
        { h: 'Adding, changing and deleting', p: [
          'Assigning to a property that does not exist creates it; assigning to one that exists changes it. `delete obj.key` removes it.',
          'To know whether a property exists use `"key" in obj`. Checking `obj.key` is not enough: the property might exist with the value `0` or `""`.' ],
          code: `const car = { brand: "Seat" };\ncar.colour = "red";   // adds\ncar.brand = "Fiat";   // changes\ndelete car.colour;    // deletes\nconsole.log(car);     // { brand: "Fiat" }\nconsole.log("colour" in car);  // false` },
        { h: 'Methods and this', p: [
          'A function stored in an object is called a method. Inside a method, `this` is the object that calls it, and that is how it reaches its own properties.',
          'Careful: arrow functions don’t have their own `this`. For methods use the short form `name() { ... }`.' ],
          code: 'const account = {\n  owner: "Leo",\n  balance: 50,\n  deposit(amount) {\n    this.balance += amount;\n    return `${this.owner}: ${this.balance} €`;\n  },\n};\nconsole.log(account.deposit(20));  // Leo: 70 €' },
        { h: 'Going through and copying objects', p: [
          '`Object.keys(obj)` returns the keys, `Object.values(obj)` the values and `Object.entries(obj)` `[key, value]` pairs, ideal for `for...of`.',
          'Objects are assigned by reference, just like arrays. Copy with `{ ...obj }` (shallow copy) or `structuredClone(obj)` (deep copy, including nested objects).' ],
          code: `const prices = { bread: 1.2, milk: 0.9 };\nfor (const [product, price] of Object.entries(prices)) {\n  console.log(product, price);\n}\n// bread 1.2\n// milk 0.9\n\nconst copy = { ...prices };\ncopy.bread = 2;\nconsole.log(prices.bread);  // 1.2, the original does not change` },
        { h: 'Real example: total of an order', real: true, p: [
          'In a shop, an order is an object with quantities per product, plus a price table. Going through the entries we calculate the amount.' ],
          code: `const order = {\n  customer: "Ana",\n  products: { tshirt: 2, cap: 1 },\n};\nconst prices = { tshirt: 15, cap: 9 };\nlet total = 0;\nfor (const [product, quantity] of Object.entries(order.products)) {\n  total += quantity * prices[product];\n}\nconsole.log(order.customer, "pays", total);  // Ana pays 39` },
      ],
      x: [
        fill(`const user = { name: "Sol" };\nconsole.log(user___);`, ['.name', '->name', '::name', '(name)'], 'You access it with a dot or with brackets: `user["name"]`.'),
        out(`const p = { name: "Ana" };\np.age = 30;\nconsole.log(Object.keys(p));`, ['["name", "age"]', '["Ana", 30]', '2', '{ name, age }'], '`Object.keys` returns the property names in the order they were created.'),
        mc('What does `Object.entries({ a: 1, b: 2 })` return?', ['[["a", 1], ["b", 2]]', '["a", "b"]', '[1, 2]', '{ a: 1, b: 2 }'], 'It returns an array of `[key, value]` pairs, perfect for going through with `for...of`.'),
        out(`const p = { a: 1 };\nconst q = p;\nq.a = 5;\nconsole.log(p.a);`, ['5', '1', 'undefined', 'Error'], 'Objects are assigned by reference: `p` and `q` are the same object.'),
        out(`const o = { a: 1 };\nconsole.log("a" in o, o.b);`, ['true undefined', 'true null', 'false undefined', 'Error'], '`in` checks whether the property exists; reading one that does not exist gives `undefined`.'),
        out(`const car = {\n  brand: "Seat",\n  info() { return "Brand: " + this.brand; }\n};\nconsole.log(car.info());`, ['Brand: Seat', 'Brand: undefined', 'Brand: this.brand', 'Error'], 'Inside a method, `this` is the object that calls it.'),
        out(`const key = "colour";\nconst o = { [key]: "red" };\nconsole.log(o.colour, o.key);`, ['red undefined', 'undefined red', 'red red', 'Error'], '`[key]` uses the value of the variable ("colour") as the property name; there is no property called "key".'),
        out(`const stock = { apples: 4, pears: 0, grapes: 12 };\nstock.kiwis = 3;\ndelete stock.pears;\nlet total = 0;\nfor (const k in stock) total += stock[k];\nconsole.log(Object.keys(stock).length, total);`, ['3 19', '4 19', '3 16', '4 7'], 'After adding kiwis and deleting pears there are 3 keys: apples, grapes and kiwis. 4 + 12 + 3 = 19.'),
      ],
    },
    // Day 9
    {
      t: 'Higher-order functions',
      d: 'Callbacks, forEach, map, filter, reduce, find, some, every and sort.',
      guide: [
        { h: 'Functions as values', p: [
          'In JavaScript functions are values: they are stored in variables, passed as arguments and returned. A higher-order function is one that receives or returns another function.',
          'The function you pass as an argument is called a callback. Notice that it is passed without brackets: `apply(double)` passes the function; `apply(double())` would pass its result.' ],
          code: `function apply(fn, value) {\n  return fn(value);\n}\nconst double = (n) => n * 2;\nconsole.log(apply(double, 5));         // 10\nconsole.log(apply((n) => n + 1, 5));   // 6` },
        { h: 'forEach and map', p: [
          '`forEach` runs the callback with each element and returns nothing: use it for effects such as showing something on screen.',
          '`map` creates a new array of the same size with each element transformed. The original does not change. Typical mistake: forgetting the `return` when the callback has braces.' ],
          code: `const prices = [10, 20, 30];\nprices.forEach((p, i) => console.log(i, p));\n// 0 10\n// 1 20\n// 2 30\nconst withTax = prices.map((p) => p * 1.5);\nconsole.log(withTax);  // [15, 30, 45]` },
        { h: 'filter, find and findIndex', p: [
          '`filter` returns a new array with the elements that meet the condition (the callback returns true).',
          '`find` returns the first element that meets it, or `undefined`; `findIndex` returns its position, or -1.' ],
          code: `const ages = [12, 25, 17, 40];\nconsole.log(ages.filter((a) => a >= 18));    // [25, 40]\nconsole.log(ages.find((a) => a >= 18));      // 25\nconsole.log(ages.findIndex((a) => a > 50));  // -1` },
        { h: 'reduce, some, every and sort', p: [
          '`reduce((accumulated, element) => ..., initial)` combines the whole array into a single value: a sum, a maximum, an object of counts. Always give the initial value.',
          '`some` says whether any element meets the condition and `every` whether all of them do. `sort` accepts a callback that compares two elements: negative if `a` goes first, positive if it goes after.',
          'These methods can be chained: each one returns an array to which the next one is applied.' ],
          code: `const nums = [4, 8, 15];\nconsole.log(nums.reduce((acc, n) => acc + n, 0));  // 27\nconsole.log(nums.some((n) => n > 10));             // true\nconsole.log(nums.every((n) => n % 2 === 0));       // false\nconsole.log([...nums].sort((a, b) => b - a));      // [15, 8, 4]` },
        { h: 'Real example: orders report', real: true, p: [
          'With `filter`, `map` and `reduce` you can summarise data as in a spreadsheet: how much has been collected and who owes money.' ],
          code: `const orders = [\n  { customer: "Ana", total: 120, paid: true },\n  { customer: "Leo", total: 45, paid: false },\n  { customer: "Eva", total: 80, paid: true },\n];\nconst income = orders\n  .filter((o) => o.paid)\n  .reduce((sum, o) => sum + o.total, 0);\nconst pending = orders.filter((o) => !o.paid).map((o) => o.customer);\nconsole.log(income, pending);  // 200 ["Leo"]` },
      ],
      x: [
        mc('What is a callback?', ['A function passed as an argument to another one', 'A function that calls itself', 'An error in a function', 'A global variable'], 'The function that receives it decides when to call it, as `map` or `addEventListener` do.'),
        out(`const nums = [1, 2, 3];\nconsole.log(nums.map((n) => n * 10));`, ['[10, 20, 30]', '[1, 2, 3]', '60', '[10]'], '`map` creates a new array with each element transformed.'),
        out(`console.log([5, 12, 8, 20].filter((n) => n > 10));`, ['[12, 20]', '[5, 8]', '2', '[true, false]'], '`filter` keeps the elements for which the callback returns true.'),
        fill(`const products = [{ price: 5 }, { price: 9 }];\nconst prices = products.___((p) => p.price);  // [5, 9]`, ['map', 'filter', 'forEach', 'reduce'], '`map` turns each object into its price. `forEach` returns nothing.'),
        out(`const total = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);\nconsole.log(total);`, ['10', '24', '[1, 2, 3, 4]', '0'], '`reduce` accumulates starting from 0: 0 + 1 + 2 + 3 + 4 = 10.'),
        out(`const nums = [1, 2, 3, 4];\nconsole.log(nums.find((n) => n > 2), nums.some((n) => n > 3));`, ['3 true', '[3, 4] true', '3 false', '4 true'], '`find` returns the first element that meets the condition; `some` says whether any element does.'),
        out(`const people = [{ n: "Ana", a: 30 }, { n: "Leo", a: 8 }, { n: "Eva", a: 45 }];\nconst order = people.sort((x, y) => y.a - x.a).map((p) => p.n);\nconsole.log(order.join(", "));`, ['Eva, Ana, Leo', 'Leo, Ana, Eva', 'Ana, Leo, Eva', 'Ana, Eva, Leo'], '`y.a - x.a` sorts from oldest to youngest: 45, 30 and 8. Then `map` keeps the names.'),
        out(`const words = ["sun", "sea", "moon", "sun", "sea", "sun"];\nconst count = words.reduce((acc, w) => {\n  acc[w] = (acc[w] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(count.sun, Object.keys(count).length, words.filter((w) => w.length > 3).length);`, ['3 3 1', '3 6 1', '1 3 1', '3 3 4'], '"sun" appears 3 times, there are 3 different words and only "moon" has more than 3 letters.'),
      ],
    },
    // Day 10
    {
      t: 'Sets and Maps',
      d: 'Unique values with Set and dictionaries with keys of any type with Map.',
      guide: [
        { h: 'Set: unique values', p: [
          'A `Set` is a collection where each value appears only once. If you add a repeated one, it is simply ignored.',
          'Methods: `add`, `has`, `delete` and `clear`; `size` (no brackets) tells you how many elements it has. Checking with `has` is much faster than `includes` on large lists.' ],
          code: `const tags = new Set(["js", "web"]);\ntags.add("js");      // repeated: nothing changes\ntags.add("node");\nconsole.log(tags.size);       // 3\nconsole.log(tags.has("web")); // true\ntags.delete("web");\nconsole.log([...tags]);       // ["js", "node"]` },
        { h: 'Set operations', p: [
          'The most used trick: `[...new Set(array)]` removes the duplicates from an array, keeping the order of first appearance.',
          'Union: `new Set([...a, ...b])`. Intersection: `[...a].filter((x) => b.has(x))`. Difference: `[...a].filter((x) => !b.has(x))`.' ],
          code: `const emails = ["ana@x.com", "leo@x.com", "ana@x.com"];\nconst unique = [...new Set(emails)];\nconsole.log(unique);  // ["ana@x.com", "leo@x.com"]` },
        { h: 'Map: keys of any type', p: [
          'A `Map` links keys with values, like an object, but the keys can be of any type (numbers, objects...) and it keeps the insertion order.',
          'Methods: `set(key, value)`, `get(key)`, `has`, `delete` and the `size` property. `set` returns the Map itself, so calls can be chained.' ],
          code: `const stock = new Map();\nstock.set("bread", 4).set("milk", 0);\nconsole.log(stock.get("bread"));  // 4\nconsole.log(stock.get("rice"));   // undefined\nconsole.log(stock.size);          // 2` },
        { h: 'Going through them and choosing between Map and object', p: [
          '`for (const [key, value] of map)` goes through a Map. It also has `keys()`, `values()` and `entries()`. `new Map(Object.entries(obj))` and `Object.fromEntries(map)` convert between the two.',
          'Use an object for data with a fixed shape (a user with a name and an age). Use a Map when the keys arrive at run time, are added and removed often or are not strings.' ],
          code: `const marks = new Map([["Ana", 9], ["Leo", 6]]);\nfor (const [student, mark] of marks) {\n  console.log(student, mark);\n}\n// Ana 9\n// Leo 6\nconsole.log(Object.fromEntries(marks));  // { Ana: 9, Leo: 6 }` },
        { h: 'Real example: counting votes', real: true, p: [
          'In a survey, repeated votes come in. A Map counts how many each option has and a Set says how many different options there were.' ],
          code: `const votes = ["Ana", "Leo", "Ana", "Eva", "Ana", "Leo", "Sol"];\nconst tally = new Map();\nfor (const v of votes) {\n  tally.set(v, (tally.get(v) || 0) + 1);\n}\nconsole.log(tally.get("Ana"), tally.size);  // 3 4\nconsole.log(new Set(votes).size);           // 4` },
      ],
      x: [
        out(`const s = new Set([1, 2, 2, 3]);\nconsole.log(s.size);`, ['3', '4', '2', 'undefined'], 'The Set ignores the repeated 2.'),
        fill(`const s = new Set(["js"]);\nconsole.log(s.___("js"));  // true`, ['has', 'includes', 'contains', 'get'], '`has` checks whether a value is in the Set. `includes` belongs to arrays.'),
        mc('What advantage does a Map have over a plain object?', ['It accepts keys of any type and keeps the insertion order', 'It is shorter to write', 'It turns into JSON by itself', 'None at all'], 'An object only accepts string or symbol keys.'),
        out(`console.log([...new Set([3, 1, 3, 2, 1])]);`, ['[3, 1, 2]', '[1, 2, 3]', '[3, 1, 3, 2, 1]', '3'], 'The Set keeps the order of first appearance and removes the repeats; it does not sort.'),
        out(`const m = new Map();\nm.set("a", 1).set("b", 2);\nconsole.log(m.get("b"), m.get("c"));`, ['2 undefined', '2 null', '1 undefined', 'Error'], '`set` returns the Map itself, so it can be chained. A key that does not exist gives `undefined`.'),
        out(`const m = new Map([["x", 1], ["y", 2]]);\nconsole.log([...m.keys()]);`, ['["x", "y"]', '[1, 2]', '[["x", 1], ["y", 2]]', '2'], '`keys()` returns the keys in insertion order.'),
        out(`const s = new Set([1, 2, 3]);\ns.add(2);\ns.delete(1);\nconsole.log(s.size, s.has(1));`, ['2 false', '3 false', '3 true', '2 true'], 'Adding the 2 changes nothing because it was already there; after deleting the 1, 2 elements are left.'),
        out(`const a = new Set(["js", "py", "go"]);\nconst b = new Set(["py", "rs", "js"]);\nconst common = [...a].filter((x) => b.has(x));\nconst all = new Set([...a, ...b]);\nconsole.log(common, all.size);`, ['["js", "py"] 4', '["py", "js"] 4', '["js", "py"] 6', '["go", "rs"] 4'], 'The intersection follows the order of `a`: "js" and "py". The union without repeats has js, py, go and rs.'),
      ],
    },
    // Day 11
    {
      t: 'Destructuring and spread',
      d: 'Pulling values out of arrays and objects, default values, spread and rest.',
      guide: [
        { h: 'Destructuring arrays', p: [
          'Destructuring takes values out of an array and stores them in variables in a single line: `const [a, b] = list`. They are assigned by position.',
          'You can skip positions by leaving a gap between commas. It also lets you swap two variables without a temporary one: `[a, b] = [b, a]`.' ],
          code: `const colours = ["red", "green", "blue"];\nconst [first, , third] = colours;\nconsole.log(first, third);  // red blue\n\nlet a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);  // 2 1` },
        { h: 'Destructuring objects', p: [
          'With objects you extract by property name: `const { name, age } = user`. The order does not matter.',
          'You can rename (`{ name: n }`), give default values that are used if the property is `undefined` (`{ role = "guest" }`) and go into nested objects.' ],
          code: `const user = { name: "Ana", age: 31, address: { city: "Seville" } };\nconst { name: n, role = "guest", address: { city } } = user;\nconsole.log(n, role, city);  // Ana guest Seville` },
        { h: 'Spread: expanding', p: [
          'The three dots `...` in front of an array or object expand it. They are used to copy, join and pass arguments: `Math.max(...numbers)`.',
          'In objects, if a property is repeated the last one wins. Careful: the copy is shallow; the objects inside are still shared.' ],
          code: `const a = [1, 2];\nconst b = [3, 4];\nconsole.log([...a, ...b]);        // [1, 2, 3, 4]\nconsole.log(Math.max(...b));      // 4\n\nconst base = { theme: "light", language: "en" };\nconst mine = { ...base, theme: "dark" };\nconsole.log(mine);  // { theme: "dark", language: "en" }` },
        { h: 'Rest: gathering what is left', p: [
          'The same three dots on the left-hand side, or in the parameters, do the opposite: they gather the rest into an array or object.',
          'A function can destructure its parameter directly. It is the usual way to receive named options with default values.' ],
          code: `const [head, ...tail] = [10, 20, 30];\nconsole.log(head, tail);  // 10 [20, 30]\n\nconst { id, ...data } = { id: 7, name: "Leo", age: 25 };\nconsole.log(data);  // { name: "Leo", age: 25 }\n\nfunction createButton({ text, colour = "blue" }) {\n  return text + " (" + colour + ")";\n}\nconsole.log(createButton({ text: "Send" }));  // Send (blue)` },
        { h: 'Real example: user preferences', real: true, p: [
          'An app has default settings and each user only saves the ones they changed. With spread they are combined without touching the originals, and with destructuring they are easy to read.' ],
          code: `const defaults = { theme: "light", language: "en", notifications: true };\nconst saved = { theme: "dark" };\n\nconst settings = { ...defaults, ...saved };\nconst { theme, language, ...rest } = settings;\n\nconsole.log(theme, language);  // dark en\nconsole.log(rest);             // { notifications: true }\nconsole.log(defaults.theme);   // light: the original does not change` },
      ],
      x: [
        out(`const [a, , c] = [10, 20, 30];\nconsole.log(a, c);`, ['10 30', '10 20', '20 30', 'undefined'], 'The gap between commas skips the second position.'),
        fill(`const list = [1, 2, 3];\nconst copy = [___list];`, ['...', '..', '*', '&'], 'The spread `...` expands the elements inside a new array.'),
        out(`const { x, y = 5 } = { x: 1 };\nconsole.log(x + y);`, ['6', '1', 'NaN', 'undefined'], '`y` does not exist in the object, so it takes its default value: 1 + 5 = 6.'),
        out(`const base = { colour: "red", size: "M" };\nconst next = { ...base, size: "L" };\nconsole.log(next.size, base.size);`, ['L M', 'L L', 'M M', 'M L'], 'In the new object the last `size` wins. The original is not modified.'),
        typ('Swap the values of a and b', `let a = 1, b = 2;\n[a, b] = [___];`, ['b, a', 'b,a'], 'The array on the right is created with the current values and then shared out in order.'),
        mc('What is the difference between spread and rest?', ['Spread expands elements; rest gathers the leftover ones into an array or object', 'They are the same thing with different names', 'Spread only works with objects and rest with arrays', 'Rest makes a deep copy'], 'They are written the same way (`...`). What changes is the side: on the right it expands, on the left or in parameters it gathers.'),
        out(`const [first, ...rest] = "hello";\nconsole.log(first, rest.length);`, ['h 4', 'h 5', 'hello 0', 'Error'], 'Strings are iterable: `first` is "h" and `rest` is ["e", "l", "l", "o"].'),
        out(`const order = { id: 7, customer: { name: "Ana", city: "Lima" }, items: [3, 5, 2] };\nconst { customer: { city }, items: [first, ...others], ...rest } = order;\nconsole.log(city, others.length, Math.max(first, ...others), Object.keys(rest).join());`, ['Lima 2 5 id', 'Lima 3 5 id', 'Lima 2 5 id,customer,items', 'Ana 2 5 id'], '`city` comes from the nested object. `others` is [5, 2]. The maximum of 3, 5 and 2 is 5. Only `id` is left in `rest`, because `customer` and `items` were already extracted.'),
      ],
    },
    // Day 12
    {
      t: 'Regular expressions',
      d: '/.../ literals, character classes, test, match, replace and flags.',
      guide: [
        { h: 'What a regular expression is', p: [
          'A regular expression describes a text pattern. It is written between slashes, `/pattern/flags`, or with `new RegExp("pattern")` when the pattern is built from a variable.',
          '`regex.test(text)` returns `true` if the pattern appears in the text. It is the quickest way to validate.' ],
          code: `const hasNumber = /\\d/;\nconsole.log(hasNumber.test("password1"));  // true\nconsole.log(hasNumber.test("password"));   // false` },
        { h: 'Character classes and quantifiers', p: [
          '`\\d` is a digit, `\\w` a letter, digit or underscore, `\\s` a whitespace character and `.` any character. `[aeiou]` accepts one from the list and `[^0-9]` anything that is not a digit.',
          'Quantifiers say how many times: `+` one or more, `*` zero or more, `?` zero or one, `{3}` exactly three and `{2,4}` between two and four.',
          '`^` marks the start of the text and `$` the end. Without them, the pattern can appear anywhere.' ],
          code: `const zip = /^\\d{5}$/;           // exactly 5 digits\nconsole.log(zip.test("10001"));    // true\nconsole.log(zip.test("1000"));     // false\nconsole.log(zip.test("100012"));   // false` },
        { h: 'Flags, match and groups', p: [
          'Flags go after the last slash: `i` ignores case, `g` finds every match and `m` makes `^` and `$` work line by line.',
          '`text.match(/.../g)` returns an array with every match, or `null` if there are none. Brackets create groups that can be read separately; with `(?<name>...)` they have a name.' ],
          code: `console.log("a1 b22 c333".match(/\\d+/g));  // ["1", "22", "333"]\n\nconst m = "2024-05-17".match(/(?<year>\\d{4})-(?<month>\\d{2})/);\nconsole.log(m.groups.year, m.groups.month);  // 2024 05` },
        { h: 'replace and split', p: [
          '`replace(regex, replacement)` replaces the first match, or all of them if the expression has `g`. In the replacement, `$1` is the first group.',
          '`split` also accepts a regular expression, useful when the separator varies.' ],
          code: `console.log("1-2-3".replace(/-/g, "+"));                    // 1+2+3\nconsole.log("Ana Ruiz".replace(/(\\w+) (\\w+)/, "$2, $1"));   // Ruiz, Ana\nconsole.log("one, two,three".split(/,\\s*/));               // ["one", "two", "three"]` },
        { h: 'Real example: validating a form', real: true, p: [
          'A sign-up form checks the email and the postcode before sending them, and cleans up the phone number that the user typed with spaces and dashes.' ],
          code: `const rules = {\n  email: /^[\\w.-]+@[\\w-]+\\.[a-z]{2,}$/i,\n  zip: /^\\d{5}$/,\n};\n\nfunction validate(data) {\n  const errors = [];\n  if (!rules.email.test(data.email)) errors.push("email");\n  if (!rules.zip.test(data.zip)) errors.push("postcode");\n  return errors;\n}\n\nconsole.log(validate({ email: "ana@mail.com", zip: "10001" }));  // []\nconsole.log(validate({ email: "ana@mail", zip: "100" }));        // ["email", "postcode"]\nconsole.log("600 12-34 56".replace(/\\D/g, ""));                // 600123456` },
      ],
      x: [
        out(`console.log(/^\\d{3}$/.test("123"), /^\\d{3}$/.test("1234"));`, ['true false', 'true true', 'false false', 'false true'], 'With `^` and `$` the whole text must have exactly three digits.'),
        fill(`const r = /hello/___;\nconsole.log(r.test("HELLO"));  // true`, ['i', 'g', 'm', 'u'], 'The `i` flag ignores the difference between capital and small letters.'),
        out(`console.log("a1b22c333".match(/\\d+/g));`, ['["1", "22", "333"]', '["1"]', '["1", "2", "2", "3", "3", "3"]', 'null'], '`\\d+` takes as many consecutive digits as it can, and `g` returns every match.'),
        out(`console.log("2024-05-01".replace(/-/g, "/"));`, ['2024/05/01', '2024/05-01', '2024-05-01', '/'], 'With `g` every dash is replaced, not only the first one.'),
        mc('What does `\\s` stand for in a regular expression?', ['A whitespace character: space, tab or line break', 'The letter s', 'Any character', 'A digit'], 'Its opposite is `\\S`: any character that is not whitespace.'),
        typ('Make it accept one or more letters', `const onlyLetters = /^[a-z]___$/i;`, '+', '`+` means one or more times. With `*` it would also accept the empty string.'),
        out(`console.log("one, two,three".split(/,\\s*/));`, ['["one", "two", "three"]', '["one", " two", "three"]', '["one, two,three"]'], 'The separator is a comma followed by zero or more spaces, so no piece keeps any spaces.'),
        out(`const text = "Orders: A-12, B-7, A-30, C-5";\nconst codes = text.match(/A-\\d+/g);\nconst sum = codes.map((c) => Number(c.slice(2))).reduce((a, b) => a + b, 0);\nconsole.log(codes.length, sum, /c-5/i.test(text));`, ['2 42 true', '2 42 false', '4 54 true', '3 42 true'], 'Only "A-12" and "A-30" start with A. `slice(2)` removes "A-": 12 + 30 = 42. With `i`, "c-5" finds "C-5".'),
      ],
    },
    // Day 13
    {
      t: 'Console methods',
      d: 'log, error, warn, table, time, count, group and assert for debugging.',
      guide: [
        { h: 'Beyond console.log', p: [
          '`console.log` accepts several arguments and separates them with a space. Objects are shown interactively in the browser.',
          '`console.info`, `console.warn` and `console.error` work the same way, but the browser marks them with colours and icons and they can be filtered. `error` also writes to the error output.' ],
          code: `const user = { name: "Ana", points: 40 };\nconsole.log("User:", user, "active");\nconsole.warn("Few attempts left");\nconsole.error("Could not save");` },
        { h: 'console.table', p: [
          '`console.table` shows an array of objects as a table, with one row per element and one column per property.',
          'A second argument picks the columns: `console.table(data, ["name"])`. It is ideal for checking data that comes from an API.' ],
          code: `const students = [\n  { name: "Ana", mark: 9 },\n  { name: "Leo", mark: 6 },\n];\nconsole.table(students);\n// ┌─────────┬───────┬──────┐\n// │ (index) │ name  │ mark │\n// │    0    │ "Ana" │  9   │\n// │    1    │ "Leo" │  6   │` },
        { h: 'Timing and counting', p: [
          '`console.time("label")` starts a stopwatch and `console.timeEnd("label")` shows how long it took. That way you know which part of the code is slow.',
          '`console.count("label")` shows how many times it has been called with that label, and `console.countReset` sets the counter back to zero.' ],
          code: `console.time("loop");\nlet s = 0;\nfor (let i = 0; i < 1e6; i++) s += i;\nconsole.timeEnd("loop");  // loop: 3.2 ms (varies)\n\nconsole.count("click");  // click: 1\nconsole.count("click");  // click: 2` },
        { h: 'Grouping and checking', p: [
          '`console.group("title")` indents the following messages until `console.groupEnd()`. It helps to read the output of processes with several steps.',
          '`console.assert(condition, message)` only shows the message, as an error, if the condition is false. It does not stop the program.' ],
          code: `console.group("Order 42");\nconsole.log("Customer: Ana");\nconsole.log("Total: 30 €");\nconsole.groupEnd();\n\nconsole.assert(1 + 1 === 2, "not shown");\nconsole.assert([].length > 0, "The list is empty");  // Assertion failed: The list is empty` },
        { h: 'Real example: debugging a cart', real: true, p: [
          'A cart calculates the wrong total. With a few console calls you can see its content, check each step and time the calculation without using the debugger.' ],
          code: `const cart = [\n  { product: "Book", price: 15, units: 2 },\n  { product: "Case", price: 8, units: 0 },\n];\n\nconsole.table(cart);\nconsole.time("total");\nconst total = cart.reduce((s, line) => {\n  console.assert(line.units > 0, "Line without units:", line.product);\n  return s + line.price * line.units;\n}, 0);\nconsole.timeEnd("total");\nconsole.log("Total:", total);  // Total: 30` },
      ],
      x: [
        mc('Which method shows an array of objects as a table?', ['console.table', 'console.grid', 'console.list', 'console.dir'], 'Each object is a row and each property a column.'),
        mc('After calling `console.count("click")` twice and `console.count("other")` once, what does the last call show?', ['other: 1', 'other: 3', 'click: 3', '3'], 'Each label has its own counter.'),
        fill(`console.___("load");\nloadData();\nconsole.timeEnd("load");`, ['time', 'timer', 'start', 'clock'], '`console.time` and `console.timeEnd` must use the same label.'),
        out(`console.assert(2 + 2 === 4, "failure");\nconsole.log("end");`, ['end', 'Assertion failed: failure\nend', 'failure\nend', 'Error'], 'The condition is true, so `assert` shows nothing.'),
        mc('How is `console.error` different from `console.log`?', ['It writes to the error output and the browser marks it as an error', 'It stops the program', 'It throws an exception', 'There is no difference'], 'To really throw an error you use `throw`.'),
        typ('Close the group of messages', `console.group("User");\nconsole.log("Ana");\nconsole.___();`, 'groupEnd', 'Each `group` is closed with its `groupEnd`.'),
        out(`const n = 5;\nconsole.log("Total:", n, "items");`, ['Total: 5 items', 'Total:5items', 'Total: n items', 'Total: 5, items'], 'The arguments are shown separated by a space.'),
        out(`for (let i = 0; i < 3; i++) console.count("step");\nconsole.countReset("step");\nconsole.count("step");\nconsole.assert(false, "check");`, ['step: 1\nstep: 2\nstep: 3\nstep: 1\nAssertion failed: check', 'step: 1\nstep: 2\nstep: 3\nstep: 4\nAssertion failed: check', 'step: 1\nstep: 2\nstep: 3\nstep: 1', 'step: 3\nstep: 1\nAssertion failed: check'], 'The loop counts to 3, `countReset` resets the counter and the next call goes back to 1. `assert` with `false` shows its message.'),
      ],
    },
    // Day 14
    {
      t: 'Error handling',
      d: 'try, catch, finally, throw, error types and your own errors.',
      guide: [
        { h: 'try and catch', p: [
          'When something fails, JavaScript throws an error and, if nobody catches it, the script stops. The code that may fail goes inside `try`; if it fails, `catch` runs with the error.',
          'The error object has `name` (the type) and `message` (the description). If you don’t need the error, you can just write `catch { ... }`.' ],
          code: `try {\n  const data = JSON.parse("{bad json}");\n} catch (error) {\n  console.log(error.name);     // SyntaxError\n  console.log("The file could not be read");\n}\nconsole.log("The program carries on");` },
        { h: 'Throwing errors with throw', p: [
          '`throw new Error("message")` throws your own error. The function stops at that point and the error travels up to the nearest `catch`.',
          'Throw errors when a function receives data it cannot work with, instead of returning a strange value that fails later on.' ],
          code: `function divide(a, b) {\n  if (b === 0) throw new Error("Cannot divide by zero");\n  return a / b;\n}\n\ntry {\n  console.log(divide(10, 2));  // 5\n  console.log(divide(1, 0));   // throws: not shown\n} catch (e) {\n  console.log(e.message);      // Cannot divide by zero\n}` },
        { h: 'finally and error types', p: [
          '`finally` always runs, whether there is an error or not, even if the `try` does a `return`. It is used to close or clean up: hiding a loading spinner, closing a connection.',
          'Common types: `TypeError` (misusing a value, such as reading properties of `null`), `ReferenceError` (a variable that does not exist), `SyntaxError` (badly written code or JSON) and `RangeError` (a number out of range).' ],
          code: `try {\n  const user = null;\n  user.name;\n} catch (e) {\n  console.log(e instanceof TypeError);  // true\n} finally {\n  console.log("Cleanup done");\n}` },
        { h: 'Your own errors', p: [
          'You can create your own types by inheriting from `Error`. That way `catch` can tell a validation error apart from an unexpected failure with `instanceof`.',
          'If a `catch` receives an error it does not know how to handle, the best thing is to throw it again with `throw e` so it is not hidden.' ],
          code: `class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}\n\ntry {\n  throw new ValidationError("The email is empty");\n} catch (e) {\n  if (e instanceof ValidationError) console.log("Check:", e.message);\n  else throw e;\n}` },
        { h: 'Real example: reading a configuration', real: true, p: [
          'An app reads its configuration stored as text. If the text is broken or a value is missing, it warns and uses default values instead of breaking.' ],
          code: `function readConfig(text) {\n  try {\n    const cfg = JSON.parse(text);\n    if (!cfg.language) throw new Error("The language is missing");\n    return cfg;\n  } catch (error) {\n    console.warn("Invalid configuration:", error.message);\n    return { language: "en" };\n  }\n}\n\nconsole.log(readConfig('{"language":"fr"}').language);  // fr\nconsole.log(readConfig("{}").language);                 // en (with a warning)\nconsole.log(readConfig("broken").language);             // en (with a warning)` },
      ],
      x: [
        out(`let r = "";\ntry {\n  r += "A";\n  throw new Error("x");\n  r += "B";\n} catch {\n  r += "C";\n} finally {\n  r += "D";\n}\nconsole.log(r);`, ['ACD', 'ABCD', 'AD', 'AC'], 'After the `throw` the rest of the `try` does not run. Then come `catch` and `finally`.'),
        fill(`if (balance < amount) {\n  ___ new Error("Insufficient balance");\n}`, ['throw', 'raise', 'error', 'catch'], 'In JavaScript errors are thrown with `throw`. `raise` is Python.'),
        out(`try {\n  null.length;\n} catch (e) {\n  console.log(e.name);\n}`, ['TypeError', 'ReferenceError', 'SyntaxError', 'RangeError'], 'Reading a property of `null` is misusing a value: `TypeError`.'),
        out(`try {\n  console.log(doesNotExist);\n} catch (e) {\n  console.log(e instanceof ReferenceError);\n}`, ['true', 'false', 'undefined'], 'Using a variable that has not been declared throws `ReferenceError`.'),
        mc('When does the `finally` block run?', ['Always, whether there is an error or not', 'Only if there is an error', 'Only if there is no error', 'Never if the try does a return'], 'That is why it is used for cleaning up, whatever happens.'),
        typ('Create your own error type', `class ValidationError ___ Error {}`, 'extends', 'Inheriting from `Error` lets you tell it apart later with `instanceof`.'),
        out(`function f() {\n  try {\n    return "try";\n  } finally {\n    console.log("finally");\n  }\n}\nconsole.log(f());`, ['finally\ntry', 'try\nfinally', 'try', 'finally'], 'The `return` waits for `finally` to finish, so "finally" is shown first and then the returned value.'),
        out('class ValidationError extends Error {\n  constructor(field) {\n    super(`${field} is not valid`);\n    this.name = "ValidationError";\n  }\n}\nfunction validate(age) {\n  if (typeof age !== "number") throw new TypeError("age must be a number");\n  if (age < 0) throw new ValidationError("age");\n  return age;\n}\nconst log = [];\nfor (const v of [30, -1, "x"]) {\n  try {\n    log.push(validate(v));\n  } catch (e) {\n    log.push(e instanceof ValidationError ? e.message : e.name);\n  } finally {\n    log.push("|");\n  }\n}\nconsole.log(log.join(" "));', ['30 | age is not valid | TypeError |', '30 | age is not valid | age must be a number |', '30 | ValidationError | TypeError |', '30 age is not valid TypeError'], '30 is valid. -1 throws `ValidationError` and its message is stored. "x" throws `TypeError`, which is not a `ValidationError`, so its `name` is stored. `finally` adds "|" on all three passes.'),
      ],
    },
    // Day 15
    {
      t: 'Classes',
      d: 'class, constructor, methods, getters, extends, super, static and private fields.',
      guide: [
        { h: 'Declaring a class', p: [
          'A class is a mould for creating objects with the same shape. The `constructor` runs with `new` and sets up the properties of the object with `this`.',
          'Methods are written inside the class without the word `function` and are shared by every object created with it.' ],
          code: `class Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n  withVat() {\n    return this.price * 1.21;\n  }\n}\n\nconst book = new Product("Book", 20);\nconsole.log(book.name, book.withVat());  // Book 24.2` },
        { h: 'Getters, setters and private fields', p: [
          'A field that starts with `#` is private: it can only be used inside the class. Trying to read it from outside is a syntax error.',
          '`get` defines a calculated property that is read without brackets and `set` one that validates before storing.' ],
          code: `class Thermostat {\n  #degrees = 20;\n  get degrees() {\n    return this.#degrees;\n  }\n  set degrees(value) {\n    this.#degrees = Math.min(30, Math.max(15, value));\n  }\n}\n\nconst t = new Thermostat();\nt.degrees = 42;\nconsole.log(t.degrees);  // 30` },
        { h: 'Inheritance with extends and super', p: [
          '`class Child extends Parent` creates a class that inherits the properties and methods of another. It can add its own and redefine the inherited ones.',
          'In the child’s constructor you must call `super(...)` before using `this`. Inside a method, `super.method()` calls the parent’s version.' ],
          code: `class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return this.name + " makes a sound";\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return super.speak() + ": woof!";\n  }\n}\n\nconsole.log(new Dog("Toby").speak());  // Toby makes a sound: woof!` },
        { h: 'static members and instanceof', p: [
          'A `static` method or property belongs to the class, not to each object: it is used as `Class.method()`. It is useful for utilities and shared counters.',
          '`object instanceof Class` checks whether an object was created with that class or with one that inherits from it. Underneath, a class is still a function: `typeof Class` is "function".' ],
          code: `class User {\n  static created = 0;\n  constructor(name) {\n    this.name = name;\n    User.created++;\n  }\n  static guest() {\n    return new User("guest");\n  }\n}\n\nconst u = User.guest();\nnew User("Ana");\nconsole.log(User.created, u instanceof User);  // 2 true` },
        { h: 'Real example: a shopping cart', real: true, p: [
          'An online shop keeps the lines of the cart in a private field. From outside you can only add products and read the total, so nobody can leave the cart in a wrong state.' ],
          code: `class Cart {\n  #lines = [];\n  add(product, price, units = 1) {\n    if (units <= 0) throw new Error("Invalid units");\n    this.#lines.push({ product, price, units });\n    return this;   // allows chaining\n  }\n  get total() {\n    return this.#lines.reduce((s, l) => s + l.price * l.units, 0);\n  }\n  get count() {\n    return this.#lines.length;\n  }\n}\n\nconst c = new Cart().add("Mug", 8, 2).add("Coffee", 12);\nconsole.log(c.count, c.total);  // 2 28` },
      ],
      x: [
        fill(`class Dog ___ Animal {\n  bark() { return "woof"; }\n}`, ['extends', 'inherits', 'implements', ':'], 'Inheritance in JavaScript is written with `extends`.'),
        out(`class Counter {\n  #n = 0;\n  inc() {\n    this.#n++;\n    return this;\n  }\n  get value() {\n    return this.#n;\n  }\n}\nconst c = new Counter();\nc.inc().inc().inc();\nconsole.log(c.value);`, ['3', '1', 'undefined', 'Error'], '`inc` returns `this`, so calls can be chained. The getter is read without brackets.'),
        mc('What does `super(...)` do in the constructor of a child class?', ['It calls the constructor of the parent class', 'It creates a copy of the object', 'It turns the method into a static one', 'It deletes the parent class'], 'You must call it before using `this` in a class that uses `extends`.'),
        out(`class A {\n  greeting() { return "A"; }\n}\nclass B extends A {\n  greeting() { return "B" + super.greeting(); }\n}\nconsole.log(new B().greeting());`, ['BA', 'B', 'A', 'AB'], '`B` redefines `greeting`, but calls the version from `A` with `super.greeting()`.'),
        typ('Make the method usable from the class, without creating objects', `class MathUtils {\n  ___ double(n) { return n * 2; }\n}\nconsole.log(MathUtils.double(4));`, 'static', '`static` methods belong to the class.'),
        out(`class Point {\n  constructor(x) { this.x = x; }\n}\nconst p = new Point(2);\nconsole.log(typeof Point, p instanceof Point);`, ['function true', 'class true', 'object true', 'function false'], 'Underneath, a class is a special function.'),
        mc('What happens when you write `cart.#lines` outside the class?', ['Syntax error: private fields can only be used inside the class', 'It returns undefined', 'It returns the array', 'It returns null'], '`#` fields are protected by the language itself, not just by convention.'),
        out(`class Account {\n  static total = 0;\n  #balance;\n  constructor(owner, balance = 0) {\n    this.owner = owner;\n    this.#balance = balance;\n    Account.total++;\n  }\n  withdraw(c) {\n    if (c > this.#balance) throw new Error("No funds");\n    this.#balance -= c;\n  }\n  get balance() { return this.#balance; }\n}\nclass Savings extends Account {\n  withdraw(c) { super.withdraw(c + 1); }\n}\nconst a = new Account("Ana", 50);\nconst b = new Savings("Leo", 20);\na.withdraw(30);\ntry { b.withdraw(20); } catch (e) { console.log(e.message); }\nconsole.log(a.balance, b.balance, Account.total);`, ['No funds\n20 20 2', 'No funds\n20 0 2', '20 0 2', 'No funds\n20 20 1'], '`a` goes from 50 to 20. `Savings` charges a fee of 1: withdrawing 20 asks for 21, more than it has, and throws the error without touching the balance. Two accounts were created.'),
      ],
    },
    // Day 16
    {
      t: 'JSON',
      d: 'JSON.stringify, JSON.parse, the rules of the format and copying data.',
      guide: [
        { h: 'What JSON is', p: [
          'JSON is a text format for exchanging data. Almost every web API uses it, as do many configuration files, such as `package.json`.',
          'It looks like a JavaScript object, but it is stricter: keys and strings go between double quotes, it allows no comments or trailing commas, and it only stores strings, numbers, booleans, `null`, arrays and objects.' ],
          code: `{\n  "name": "Ana",\n  "age": 31,\n  "active": true,\n  "courses": ["js", "python"],\n  "address": { "city": "Bristol" },\n  "phone": null\n}` },
        { h: 'JSON.stringify: from object to text', p: [
          '`JSON.stringify(value)` turns a value into a JSON string. The third argument adds indentation so it is readable: `JSON.stringify(obj, null, 2)`.',
          'Properties with `undefined` or functions are left out, and dates are turned into ISO-formatted text.' ],
          code: `const user = { name: "Leo", age: 25, greet() {}, nickname: undefined };\nconsole.log(JSON.stringify(user));  // {"name":"Leo","age":25}\nconsole.log(JSON.stringify({ a: 1, b: [2, 3] }, null, 2));\n// {\n//   "a": 1,\n//   "b": [\n//     2,\n//     3\n//   ]\n// }` },
        { h: 'JSON.parse: from text to object', p: [
          '`JSON.parse(text)` does the opposite: it reads a JSON string and returns the JavaScript value.',
          'If the text is not valid JSON it throws a `SyntaxError`, so with data that comes from outside it is a good idea to use `try...catch`.' ],
          code: `const text = '{"product":"Mug","price":8.5}';\nconst obj = JSON.parse(text);\nconsole.log(obj.price * 2);  // 17\n\ntry {\n  JSON.parse("{price: 8.5}");  // keys without quotes\n} catch (e) {\n  console.log(e.name);  // SyntaxError\n}` },
        { h: 'Copies and dates', p: [
          '`JSON.parse(JSON.stringify(obj))` creates a deep copy: the objects inside are no longer shared. But it loses dates, `undefined` and functions.',
          'For reliable deep copies there is `structuredClone(obj)`, which keeps dates. When reading JSON, dates arrive as text: turn them back with `new Date(text)`.' ],
          code: `const original = { date: new Date(2024, 0, 1), tags: ["a"] };\nconst viaJson = JSON.parse(JSON.stringify(original));\nconst clone = structuredClone(original);\nconsole.log(typeof viaJson.date);         // string\nconsole.log(clone.date instanceof Date);   // true` },
        { h: 'Real example: sending and receiving an order', real: true, p: [
          'A shop sends the order to its server as JSON text and receives the reply in JSON too. Dates are converted back when they are read.' ],
          code: `const order = { customer: "Eva", lines: [{ product: "Book", units: 2 }], date: new Date() };\nconst body = JSON.stringify(order);   // it would be sent with fetch\n\nconst reply = '{"id":981,"status":"paid","date":"2024-03-10T09:30:00.000Z"}';\nconst data = JSON.parse(reply);\nconst date = new Date(data.date);\nconsole.log(data.id, data.status, date.getUTCHours());  // 981 paid 9` },
      ],
      x: [
        mc('Which of these strings is valid JSON?', ['{"name": "Ana", "age": 30}', '{name: "Ana"}', "{'name': 'Ana'}", '{"age": 30,}'], 'JSON requires double quotes on keys and strings and allows no trailing commas.'),
        out(`console.log(JSON.stringify({ a: 1, b: "x" }));`, ['{"a":1,"b":"x"}', '{ a: 1, b: "x" }', '{"a": 1, "b": "x"}', '[object Object]'], 'Without indentation, `stringify` leaves no spaces.'),
        out(`const o = JSON.parse('{"n": 5}');\nconsole.log(o.n + 1, typeof o);`, ['6 object', '51 object', '6 string', 'NaN object'], '`parse` returns an object and `n` is a real number.'),
        fill(`const user = { name: "Ana" };\nconst text = JSON.___(user);`, ['stringify', 'parse', 'toString', 'encode'], '`stringify` turns the object into JSON text.'),
        out(`console.log(JSON.stringify({ a: undefined, b: () => 1, c: null }));`, ['{"c":null}', '{"a":undefined,"b":null,"c":null}', '{"a":null,"b":null,"c":null}', '{}'], 'Properties with `undefined` or functions are left out; `null` is kept.'),
        typ('Turn the JSON text into an object', `const text = '{"active":true}';\nconst data = JSON.___(text);`, 'parse', '`JSON.parse` reads the text and returns the value.'),
        out(`const original = { list: [1, 2] };\nconst copy = JSON.parse(JSON.stringify(original));\ncopy.list.push(3);\nconsole.log(original.list.length, copy.list.length);`, ['2 3', '3 3', '2 2', '3 2'], 'A copy made with JSON is deep: the array inside is no longer shared.'),
        out(`const order = { id: 3, date: new Date(Date.UTC(2024, 0, 15)), items: [{ p: "tea", n: 2 }], note: undefined };\nconst text = JSON.stringify(order);\nconst back = JSON.parse(text);\nconsole.log(typeof back.date, "note" in back, back.items[0].n * 2, text.includes("2024-01-15"));`, ['string false 4 true', 'object false 4 true', 'string true 4 true', 'object true 4 false'], 'The date is stored as ISO text and comes back as text. `note` was `undefined`, so it was not stored. The arrays and objects inside are kept.'),
      ],
    },
    // Day 17
    {
      t: 'Web Storage',
      d: 'Saving data in the browser with localStorage and sessionStorage.',
      guide: [
        { h: 'What Web Storage is', p: [
          'The browser offers two stores of key-value pairs: `localStorage`, which keeps the data even if you close the browser, and `sessionStorage`, which deletes it when the tab is closed.',
          'Each website has its own store and can only read its own. About 5 MB fit in it and everything is stored as text.' ] },
        { h: 'Saving, reading and deleting', p: [
          '`setItem(key, value)` saves, `getItem(key)` reads (it returns `null` if the key does not exist), `removeItem(key)` deletes one key and `clear()` deletes everything.',
          '`length` says how many keys there are. Every value is turned into text: if you save the number 5, you will read "5".' ],
          code: `localStorage.setItem("theme", "dark");\nconsole.log(localStorage.getItem("theme"));     // dark\nconsole.log(localStorage.getItem("language"));  // null\n\nlocalStorage.setItem("visits", 3);\nconsole.log(typeof localStorage.getItem("visits"));  // string\nlocalStorage.removeItem("theme");` },
        { h: 'Saving objects with JSON', p: [
          'If you save an object directly, it turns into the text "[object Object]" and the data is lost. You have to pass it through `JSON.stringify` when saving and `JSON.parse` when reading.',
          'Since `JSON.parse(null)` returns `null`, with `??` you can give a default value when the key does not exist yet.' ],
          code: `const cart = [{ product: "Mug", units: 2 }];\nlocalStorage.setItem("cart", JSON.stringify(cart));\n\nconst loaded = JSON.parse(localStorage.getItem("cart")) ?? [];\nconsole.log(loaded[0].product);  // Mug` },
        { h: 'sessionStorage, events and security', p: [
          '`sessionStorage` has the same methods. Use it for temporary data, such as a half-filled form.',
          'When another tab of the same site changes `localStorage`, the `storage` event fires, which is useful for keeping tabs in sync.',
          'Don’t save passwords or sensitive data: any script that runs on your page can read the store.' ],
          code: `sessionStorage.setItem("draft", "Hi, I wanted to ask...");\n\nwindow.addEventListener("storage", (e) => {\n  if (e.key === "theme") applyTheme(e.newValue);\n});` },
        { h: 'Real example: remembering dark mode', real: true, p: [
          'A website saves the user’s theme preference. When they come back days later, the page opens with the theme they chose.' ],
          code: `const KEY = "preferences";\n\nfunction readPreferences() {\n  return JSON.parse(localStorage.getItem(KEY)) ?? { theme: "light", fontSize: 16 };\n}\n\nfunction changeTheme(theme) {\n  const prefs = { ...readPreferences(), theme };\n  localStorage.setItem(KEY, JSON.stringify(prefs));\n  document.body.dataset.theme = theme;\n}\n\ndocument.body.dataset.theme = readPreferences().theme;  // when the page loads` },
      ],
      x: [
        mc('How are `localStorage` and `sessionStorage` different?', ['localStorage keeps the data when the browser is closed; sessionStorage deletes it when the tab is closed', 'sessionStorage stores more data', 'localStorage only stores numbers', 'There is no difference'], 'Both have the same methods and only store text.'),
        fill(`localStorage.___("theme", "dark");`, ['setItem', 'set', 'save', 'put'], '`setItem(key, value)` saves a value.'),
        out(`localStorage.setItem("visits", 5);\nconst v = localStorage.getItem("visits");\nconsole.log(typeof v, v + 1);`, ['string 51', 'number 6', 'string 6', 'number 51'], 'Everything is stored as text, so `+` concatenates.'),
        out(`console.log(localStorage.getItem("missing"));`, ['null', 'undefined', '""', 'Error'], 'A key that does not exist returns `null`.'),
        out(`localStorage.setItem("u", { name: "Ana" });\nconsole.log(localStorage.getItem("u"));`, ['[object Object]', '{"name":"Ana"}', '{ name: "Ana" }', 'null'], 'Without `JSON.stringify`, the object is turned into useless text.'),
        typ('Give an empty object by default if the key does not exist', `const prefs = JSON.parse(localStorage.getItem("prefs")) ___ {};`, ['??', '||'], '`JSON.parse(null)` is `null`, and `??` replaces it with `{}`.'),
        mc('What should you NOT save in localStorage?', ['Passwords or sensitive data', 'The chosen language', 'The light or dark theme', 'A draft comment'], 'Any script that runs on the page can read the store.'),
        out(`localStorage.clear();\nconst save = (k, v) => localStorage.setItem(k, JSON.stringify(v));\nconst load = (k, def) => JSON.parse(localStorage.getItem(k)) ?? def;\nsave("tasks", ["bread", "milk"]);\nconst tasks = load("tasks", []);\ntasks.push("coffee");\nsave("tasks", tasks);\nlocalStorage.removeItem("theme");\nconsole.log(load("tasks", []).length, load("theme", "light"), localStorage.length);`, ['3 light 1', '2 light 1', '3 null 1', '3 light 2'], 'The tasks are read, extended and saved again: 3. "theme" does not exist, so `load` returns the default value. Only one key is left.'),
      ],
    },
    // Day 18
    {
      t: 'Promises',
      d: 'Asynchronous code, Promise, then, catch, Promise.all and the order of execution.',
      guide: [
        { h: 'Asynchronous code', p: [
          'Some tasks take time: asking a server for data, reading a file, waiting for a timer. JavaScript does not sit there waiting: it carries on with the rest of the code and deals with the result when it arrives.',
          '`setTimeout(fn, ms)` is the simplest example: it schedules a function for later. Even with 0 ms, it runs after the code that was already running.' ],
          code: `console.log("1. I ask for the data");\nsetTimeout(() => console.log("3. The data arrives"), 1000);\nconsole.log("2. I keep working");` },
        { h: 'Creating and using promises', p: [
          'A promise represents a value that will arrive in the future. It is pending, and then it is fulfilled (resolve) or rejected (reject).',
          '`then` receives the value when it is fulfilled, `catch` the error when it is rejected and `finally` runs in both cases.' ],
          code: `function rollDie() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const n = Math.ceil(Math.random() * 6);\n      if (n === 1) reject(new Error("You rolled a 1"));\n      else resolve(n);\n    }, 500);\n  });\n}\n\nrollDie()\n  .then((n) => console.log("You rolled", n))\n  .catch((e) => console.log(e.message))\n  .finally(() => console.log("End of the roll"));` },
        { h: 'Chaining', p: [
          'Whatever a `then` returns is the value the next one receives. If it returns another promise, the chain waits for it to be fulfilled.',
          'A single `catch` at the end catches the error from any earlier step.' ],
          code: `Promise.resolve(2)\n  .then((n) => n * 10)\n  .then((n) => {\n    if (n > 100) throw new Error("Too big");\n    return n + 1;\n  })\n  .then((n) => console.log(n))   // 21\n  .catch((e) => console.log(e.message));` },
        { h: 'Several promises and the order of execution', p: [
          '`Promise.all([...])` waits for all of them and returns their values in order; if one fails, the whole thing fails. `Promise.allSettled` waits for all of them and says how each one ended. `Promise.race` keeps the first one to finish.',
          'The order: first all the synchronous code, then the fulfilled promises (microtasks) and finally the timers (macrotasks).' ],
          code: `console.log("A");\nsetTimeout(() => console.log("D"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("B");\n// A B C D` },
        { h: 'Real example: loading a dashboard in parallel', real: true, p: [
          'A dashboard needs the user, their orders and their notifications. They are requested at the same time with `Promise.all`, so the total time is that of the slowest request and not the sum of all of them.' ],
          code: `const wait = (ms, value) => new Promise((r) => setTimeout(() => r(value), ms));\n\nconst getUser = () => wait(300, { name: "Ana" });\nconst getOrders = () => wait(500, [101, 102]);\nconst getNotices = () => wait(200, ["Parcel on its way"]);\n\nconsole.time("dashboard");\nPromise.all([getUser(), getOrders(), getNotices()])\n  .then(([user, orders, notices]) => {\n    console.log(user.name, orders.length, notices[0]);  // Ana 2 Parcel on its way\n    console.timeEnd("dashboard");  // about 500 ms, not 1000\n  })\n  .catch((e) => console.log("The dashboard could not be loaded:", e.message));` },
      ],
      x: [
        out(`console.log("A");\nsetTimeout(() => console.log("B"), 0);\nconsole.log("C");`, ['A\nC\nB', 'A\nB\nC', 'B\nA\nC', 'C\nA\nB'], 'The timer runs when the synchronous code finishes, even if it is 0 ms.'),
        out(`console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);`, ['1\n4\n3\n2', '1\n2\n3\n4', '1\n4\n2\n3', '1\n3\n4\n2'], 'First the synchronous code (1 and 4), then the promises (3) and finally the timers (2).'),
        fill(`const p = Promise.___(new Error("bad"));\np.catch((e) => console.log(e.message));  // bad`, ['reject', 'fail', 'error', 'catch'], '`Promise.reject` creates an already rejected promise, just as `Promise.resolve` creates an already fulfilled one.'),
        out(`Promise.resolve(2)\n  .then((n) => n * 3)\n  .then((n) => console.log(n + 1));`, ['7', '6', '3', 'undefined'], 'The first `then` returns 6 and the second receives it: 6 + 1 = 7.'),
        mc('What does `Promise.all` do if one of the promises is rejected?', ['It is rejected as soon as one fails', 'It ignores the one that fails', 'It waits for all of them and returns the errors', 'It tries it again'], 'If you need the result of all of them even when they fail, use `Promise.allSettled`.'),
        typ('Catch the error of the chain', `fetchData()\n  .then(show)\n  .___((error) => console.log(error.message));`, 'catch', 'A `catch` at the end catches the error from any earlier step.'),
        out(`Promise.reject(new Error("x"))\n  .then(() => console.log("A"))\n  .catch((e) => console.log("B", e.message))\n  .finally(() => console.log("C"));`, ['B x\nC', 'A\nB x\nC', 'B x', 'A\nC'], 'The rejected promise skips the `then` and reaches the `catch`. `finally` always runs.'),
        out(`const wait = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms));\nconst log = [];\nPromise.all([wait(30, "a"), wait(10, "b"), 5]).then((r) => log.push(r.join("")));\nPromise.race([wait(20, "x"), wait(5, "y")]).then((v) => log.push(v));\nPromise.allSettled([Promise.reject(new Error("no")), 1]).then((r) => log.push(r.map((s) => s.status[0]).join("")));\nsetTimeout(() => console.log(log.join(" ")), 50);`, ['rf y ab5', 'ab5 y rf', 'y rf ab5', 'rf x ab5'], '`allSettled` does not wait for any timer: it finishes first with "rejected" and "fulfilled" (rf). `race` keeps the 5 ms one (y). `all` waits for the slowest and keeps the original order: ab5.'),
      ],
    },
    // Day 19
    {
      t: 'Closures',
      d: 'Functions that remember their scope, function factories and private data.',
      guide: [
        { h: 'Lexical scope', p: [
          'A function can use the variables of the place where it was written, not of the place it is called from. That is lexical scope.',
          'Inner functions see the variables of outer ones, but not the other way round.' ],
          code: `const greeting = "Hello";\nfunction outer() {\n  const name = "Ana";\n  function inner() {\n    return greeting + ", " + name;  // sees both variables\n  }\n  return inner();\n}\nconsole.log(outer());  // Hello, Ana` },
        { h: 'What a closure is', p: [
          'A closure is a function that remembers the variables of its scope even after the function that created them has finished.',
          'Each call to the outer function creates a new scope, so each closure has its own variables.' ],
          code: `function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\n\nconst a = createCounter();\nconst b = createCounter();\na();\na();\nconsole.log(a(), b());  // 3 1` },
        { h: 'Function factories and private data', p: [
          'A function factory returns functions configured with the data it receives: `multiplier(3)` creates a function that triples.',
          'The variables of the closure are private: nobody can touch them from outside except through the returned functions.' ],
          code: `function multiplier(k) {\n  return (n) => n * k;\n}\nconst triple = multiplier(3);\nconsole.log(triple(5));  // 15\n\nfunction createWallet() {\n  let balance = 0;\n  return {\n    deposit: (c) => (balance += c),\n    check: () => balance,\n  };\n}\nconst w = createWallet();\nw.deposit(10);\nconsole.log(w.check(), w.balance);  // 10 undefined` },
        { h: 'Closures in loops', p: [
          'With `let`, each pass of the loop has its own variable, so each closure remembers a different value.',
          'With `var` there is only one variable for the whole loop and every closure sees its final value. It is a classic mistake; using `let` avoids it.' ],
          code: `for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log("let:", i), 0);   // 0, 1, 2\n}\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log("var:", j), 0);   // 3, 3, 3\n}` },
        { h: 'Real example: limiting login attempts', real: true, p: [
          'A login form allows three attempts. The counter lives in a closure, so no other code on the page can reset it.' ],
          code: `function createLimiter(max) {\n  let attempts = 0;\n  return function attempt(correct) {\n    if (attempts >= max) return "Locked";\n    attempts++;\n    return correct ? "Welcome" : (max - attempts) + " left";\n  };\n}\n\nconst login = createLimiter(3);\nconsole.log(login(false));  // 2 left\nconsole.log(login(false));  // 1 left\nconsole.log(login(false));  // 0 left\nconsole.log(login(true));   // Locked` },
      ],
      x: [
        out(`function create() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = create();\na();\na();\nconsole.log(a());`, ['3', '1', '0', 'undefined'], 'The returned function remembers `n` between calls.'),
        out(`function create() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = create();\nconst b = create();\na();\na();\nconsole.log(a(), b());`, ['3 1', '3 4', '1 1', '3 3'], 'Each call to `create` has its own `n`.'),
        mc('What is a closure?', ['A function that remembers the variables of the scope where it was created', 'A function that closes itself', 'A loop that ends', 'An object without properties'], 'It remembers them even after the function that created it has finished.'),
        out(`const fs = [];\nfor (var i = 0; i < 3; i++) fs.push(() => i);\nconsole.log(fs.map((f) => f()).join(""));`, ['333', '012', '222', 'undefined'], 'With `var` there is only one `i` for the whole loop and at the end it is 3.'),
        fill(`const fs = [];\nfor (___ i = 0; i < 3; i++) fs.push(() => i);\nconsole.log(fs.map((f) => f()).join(""));  // 012`, ['let', 'var', 'global', 'static'], 'With `let` each pass has its own variable.'),
        typ('Complete the function factory', `function multiplier(k) {\n  return (n) => n * ___;\n}\nconsole.log(multiplier(4)(5));  // 20`, 'k', 'The returned function remembers the `k` it was created with.'),
        out(`function once(fn) {\n  let done = false, r;\n  return (...args) => {\n    if (!done) {\n      done = true;\n      r = fn(...args);\n    }\n    return r;\n  };\n}\nconst init = once((x) => x * 10);\nconsole.log(init(2), init(5));`, ['20 20', '20 50', '20 undefined', '50 50'], 'The second call no longer runs `fn`: it returns the stored result.'),
        out(`function createBank(initialBalance) {\n  let balance = initialBalance;\n  const history = [];\n  return {\n    deposit(c) { balance += c; history.push("+" + c); return this; },\n    withdraw(c) { if (c <= balance) { balance -= c; history.push("-" + c); } return this; },\n    summary: () => balance + " [" + history.join(",") + "]",\n  };\n}\nconst account = createBank(10);\naccount.deposit(5).withdraw(20).withdraw(8);\nconst other = createBank(0);\nconsole.log(account.summary(), other.summary(), account.balance);`, ['7 [+5,-8] 0 [] undefined', '7 [+5,-20,-8] 0 [] undefined', '7 [+5,-8] 7 [+5,-8] 7', '-13 [+5,-20,-8] 0 [] undefined'], '10 + 5 = 15; withdrawing 20 is not allowed; withdrawing 8 leaves 7. `other` has its own balance and history. `balance` is private: it is not a property of the object.'),
      ],
    },
    // Day 20
    {
      t: 'Clean code',
      d: 'Clear names, small functions, constants and quality tools.',
      guide: [
        { h: 'Names that explain themselves', p: [
          'Code is read many more times than it is written. A good name saves a comment: `activeUsers` says more than `arr2`.',
          'JavaScript conventions: `camelCase` for variables and functions, `PascalCase` for classes and `UPPER_CASE_WITH_UNDERSCORES` for fixed constants. Booleans sound like a question: `isActive`, `hasPermission`.' ],
          code: `// Hard to read\nconst d = u.filter((x) => x.a && x.e > 17);\n\n// Clear\nconst activeAdultUsers = users.filter(\n  (user) => user.active && user.age >= 18\n);` },
        { h: 'Small functions and no magic numbers', p: [
          'Each function should do one thing and have a name that describes it. If you need the word "and" to explain it, it is probably two functions.',
          'A magic number is an unexplained value in the middle of the code, such as `0.21` or `86400000`. Give it a name with a constant.' ],
          code: `const VAT = 0.21;\nconst MS_PER_DAY = 24 * 60 * 60 * 1000;\n\nconst withVat = (price) => price * (1 + VAT);\nconst daysBetween = (a, b) => Math.round((b - a) / MS_PER_DAY);` },
        { h: 'Early returns', p: [
          'Lots of nested `if`s force you to remember every condition at once. Check the special cases first and leave the function with `return`.',
          'The main path is left at the end, without indentation and easy to follow.' ],
          code: `// Nested\nfunction discount(user) {\n  if (user) {\n    if (user.isMember) {\n      return 0.1;\n    } else {\n      return 0;\n    }\n  } else {\n    return 0;\n  }\n}\n\n// With early returns\nfunction discount(user) {\n  if (!user?.isMember) return 0;\n  return 0.1;\n}` },
        { h: 'Good habits and tools', p: [
          'Use `const` by default and `let` only if you are going to reassign. Always compare with `===`. Don’t modify the parameters you receive: return a new value.',
          'ESLint checks the code without running it and warns about errors and bad practices. Prettier formats it automatically so the whole team writes the same way. Comments should explain the why, not the what.' ],
          code: `// npm install --save-dev eslint prettier\n// npx eslint src/\n// npx prettier --write src/\n\n// Bad: the comment repeats the code\ni++;  // adds one to i\n\n// Good: it explains a decision\nconst RETRIES = 3;  // the API sometimes fails on the first attempt` },
        { h: 'Real example: refactoring an order calculation', real: true, p: [
          'A shop had a single long function full of loose numbers. Split into small functions with constants, each business rule can be understood and tested separately.' ],
          code: `const MEMBER_DISCOUNT = 0.1;\nconst FREE_SHIPPING_FROM = 50;\nconst SHIPPING_COST = 5;\n\nconst subtotal = (lines) => lines.reduce((s, l) => s + l.price * l.units, 0);\nconst discount = (amount, isMember) => (isMember ? amount * MEMBER_DISCOUNT : 0);\nconst shipping = (amount) => (amount >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST);\n\nfunction orderTotal(lines, isMember) {\n  const base = subtotal(lines);\n  const discounted = base - discount(base, isMember);\n  return discounted + shipping(discounted);\n}\n\nconsole.log(orderTotal([{ price: 30, units: 1 }], false));  // 35` },
      ],
      x: [
        mc('Which name is clearest for an array of active users?', ['activeUsers', 'arr', 'data2', 'x'], 'A good name says what the variable holds without having to read the rest of the code.'),
        mc('What is a magic number?', ['An unexplained value in the middle of the code', 'A random number', 'A very big number', 'A negative number'], 'It is fixed by giving it a name with a constant, such as `VAT`.'),
        out(`function shippingPrice(total, isMember) {\n  if (isMember) return 0;\n  if (total >= 50) return 0;\n  return 4.99;\n}\nconsole.log(shippingPrice(30, false), shippingPrice(30, true), shippingPrice(60, false));`, ['4.99 0 0', '0 0 4.99', '4.99 4.99 0', '4.99 0 4.99'], 'Each special case leaves early; only the normal case reaches the end.'),
        fill(`___ VAT = 0.21;  // never changes`, ['const', 'let', 'var', 'static'], 'What is not reassigned is declared with `const`.'),
        mc('Which tool checks the code without running it and warns about errors and bad practices?', ['ESLint', 'Prettier', 'Node.js', 'npm'], 'Prettier only formats; ESLint analyses.'),
        out(`function withDiscount(products) {\n  return products.map((p) => ({ ...p, price: p.price * 0.9 }));\n}\nconst list = [{ price: 100 }];\nconst reduced = withDiscount(list);\nconsole.log(list[0].price, reduced[0].price);`, ['100 90', '90 90', '100 100', '90 100'], 'The function creates new objects with spread, so the original array does not change.'),
        ord('Put the function in order so that it uses an early return', ['function name(user) {', 'if (!user) return "Anonymous";', 'return user.name;', '}'], ['else {', 'if (user) {'], 'The special case is ruled out first; the normal case stays at the end without nesting.'),
        out(`const MEMBER_DISCOUNT = 0.1;\nconst FREE_SHIPPING_FROM = 50;\nconst SHIPPING_COST = 5;\nconst subtotal = (items) => items.reduce((s, i) => s + i.price * i.units, 0);\nconst discount = (amount, isMember) => (isMember ? amount * MEMBER_DISCOUNT : 0);\nconst shipping = (amount) => (amount >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST);\nfunction orderTotal(items, isMember) {\n  const base = subtotal(items);\n  const discounted = base - discount(base, isMember);\n  return discounted + shipping(discounted);\n}\nconst items = [{ price: 20, units: 2 }, { price: 15, units: 1 }];\nconsole.log(orderTotal(items, false), orderTotal(items, true));`, ['55 54.5', '55 49.5', '60 54.5', '55 55'], 'The subtotal is 55. Without a discount, shipping is free: 55. The member pays 49.5, which does not reach 50, so shipping is added: 54.5.'),
      ],
    },
    // Day 21
    {
      t: 'DOM',
      d: 'The page tree, selecting elements and reading their content.',
      guide: [
        { h: 'The document tree', p: [
          'When the browser loads a page, it turns the HTML into a tree of objects called the DOM (Document Object Model). Each tag is an element node with parents, children and siblings.',
          'From JavaScript you reach that tree with the `document` object. Whatever you change in the DOM is visible on the page straight away.' ],
          code: `<!-- index.html -->\n<body>\n  <h1 id="title">My shop</h1>\n  <ul class="products">\n    <li>Mug</li>\n    <li>Notebook</li>\n  </ul>\n  <script src="app.js" defer></script>\n</body>` },
        { h: 'Selecting elements', p: [
          '`document.querySelector(selector)` returns the first element that matches a CSS selector, or `null` if there is none. `querySelectorAll` returns all of them in a `NodeList`, which you go through with `forEach` or `for...of`.',
          '`getElementById("id")` is the classic way to search by id. You can also search inside an element: `list.querySelector("li")`.' ],
          code: `const title = document.querySelector("#title");\nconst items = document.querySelectorAll(".products li");\nconsole.log(items.length);  // 2\nitems.forEach((li) => console.log(li.textContent));\n// Mug\n// Notebook\nconsole.log(document.querySelector(".missing"));  // null` },
        { h: 'Reading content and values', p: [
          '`textContent` returns the text of an element and its children, without tags. `innerHTML` returns the HTML inside, with tags.',
          'In form fields the data is in `value` (always text) and in checkboxes, in `checked`.' ],
          code: `<!-- <p id="notice">Free <b>shipping</b></p>\n     <input id="age" value="31"> -->\nconst notice = document.querySelector("#notice");\nconsole.log(notice.textContent);  // Free shipping\nconsole.log(notice.innerHTML);    // Free <b>shipping</b>\nconsole.log(Number(document.querySelector("#age").value) + 1);  // 32` },
        { h: 'Attributes, dataset and moving around the tree', p: [
          '`getAttribute("href")` reads an attribute. `data-*` attributes are read with `dataset`: `data-price` is `el.dataset.price`, always as text.',
          'To move around the tree: `parentElement`, `children`, `firstElementChild`, `nextElementSibling` and `closest(selector)`, which looks for the nearest ancestor that matches.' ],
          code: `<!-- <li class="product" data-id="7" data-price="12.5"><span>Mug</span></li> -->\nconst span = document.querySelector(".product span");\nconst li = span.closest(".product");\nconsole.log(li.dataset.id, Number(li.dataset.price) * 2);  // 7 25\nconsole.log(li.children.length);  // 1` },
        { h: 'Real example: summary of a to-do list', real: true, p: [
          'A to-do app shows in its header how many tasks are still pending. It only needs to read the DOM: count the elements and check their class.' ],
          code: `<!-- <ul id="tasks">\n       <li class="done">Buy bread</li>\n       <li>Call the bank</li>\n       <li>Study JS</li>\n     </ul> -->\nconst tasks = [...document.querySelectorAll("#tasks li")];\nconst pending = tasks.filter((li) => !li.classList.contains("done"));\nconsole.log(pending.length + " of " + tasks.length + " pending");  // 2 of 3 pending\nconsole.log(pending.map((li) => li.textContent));  // ["Call the bank", "Study JS"]` },
      ],
      x: [
        mc('What does `document.querySelector` return if it finds no element?', ['null', 'undefined', 'An empty array', 'It throws an error'], 'That is why it is a good idea to check the result before using it.'),
        fill(`const title = document.___("#title");`, ['querySelector', 'getElement', 'select', 'find'], '`querySelector` accepts any CSS selector.'),
        out(`// <ul id="list"><li>a</li><li class="done">b</li><li class="done">c</li></ul>\nconst done = document.querySelectorAll("#list .done");\nconsole.log(done.length, done[0].textContent);`, ['2 b', '3 a', '2 c', '1 b'], 'Only two `li`s have the `done` class, and the first of them contains "b".'),
        mc('How are `textContent` and `innerHTML` different?', ['textContent gives only the text; innerHTML gives the tags too', 'They are exactly the same', 'innerHTML only works in forms', 'textContent includes the comments'], 'To read or write text without interpreting HTML, use `textContent`.'),
        typ('Read what the user typed in the field', `const email = document.querySelector("#email").___;`, 'value', 'The content of an `input` is in `value` and it is always text.'),
        out(`// <button data-id="42" data-type="delete">X</button>\nconst b = document.querySelector("button");\nconsole.log(b.dataset.id, typeof b.dataset.id);`, ['42 string', '42 number', 'undefined undefined', 'data-id string'], '`dataset` turns `data-id` into `id` and always returns text.'),
        ord('Select every paragraph with the note class', ['document', '.querySelectorAll(', '"p.note"', ')'], ['.getElementById(', '"#note"'], '`querySelectorAll` with the CSS selector `p.note` returns all the matches.'),
        out(`// <section id="shop">\n//   <article class="product" data-price="12"><h2>Mug</h2></article>\n//   <article class="product sold-out" data-price="30"><h2>Lamp</h2></article>\n//   <article class="product" data-price="8"><h2>Notebook</h2></article>\n// </section>\nconst products = [...document.querySelectorAll("#shop .product:not(.sold-out)")];\nconst total = products.reduce((s, p) => s + Number(p.dataset.price), 0);\nconst names = products.map((p) => p.querySelector("h2").textContent);\nconsole.log(products.length, total, names.join("+"));`, ['2 20 Mug+Notebook', '3 50 Mug+Lamp+Notebook', '2 20 Mug+Lamp', '2 128 Mug+Notebook'], '`:not(.sold-out)` leaves out the lamp. `Number` turns the prices into numbers before adding: 12 + 8 = 20. Without `Number` they would be concatenated.'),
      ],
    },
    // Day 22
    {
      t: 'Changing the DOM',
      d: 'Changing text, creating and inserting elements, classes, styles and attributes.',
      guide: [
        { h: 'Changing the content', p: [
          'Assigning `textContent` replaces the text of an element. It is the safe option for showing data that comes from the user.',
          '`innerHTML` interprets the text as HTML. Never use it with user data: someone could inject a script (an XSS attack).' ],
          code: `const greeting = document.querySelector("#greeting");\nconst name = "<img src=x onerror=alert(1)>";\n\ngreeting.textContent = "Hello, " + name;   // shown as it is, no danger\n// greeting.innerHTML = "Hello, " + name;  // would run code!` },
        { h: 'Creating, inserting and deleting', p: [
          '`document.createElement("li")` creates an element that is not on the page yet. It is inserted with `append` (at the end), `prepend` (at the start), `before` or `after`.',
          '`element.remove()` takes it off the page. For many elements, create a `DocumentFragment` and insert it in one go.' ],
          code: `const list = document.querySelector("#list");\nconst li = document.createElement("li");\nli.textContent = "New task";\nlist.append(li);\n\nconst first = list.firstElementChild;\nfirst.remove();` },
        { h: 'Classes and styles', p: [
          '`classList` handles the classes: `add`, `remove`, `contains` and `toggle`, which adds the class if it is not there and removes it if it is. With a second boolean argument, `toggle` forces it.',
          'Changing classes and leaving the design to the CSS is better than touching `style` directly. If you do, the properties are in camelCase: `style.backgroundColor`.' ],
          code: `const button = document.querySelector("#menu");\nbutton.classList.add("active");\nbutton.classList.toggle("open");          // adds it\nbutton.classList.toggle("open");          // removes it\nbutton.classList.toggle("dark", true);    // forces it\n\nbutton.style.backgroundColor = "tomato";\ndocument.documentElement.style.setProperty("--main-colour", "teal");` },
        { h: 'Attributes', p: [
          '`setAttribute(name, value)` and `removeAttribute(name)` change attributes. Many have a direct property: `img.src`, `a.href`, `input.disabled`.',
          'The `hidden` attribute hides an element without CSS: `notice.hidden = true`.' ],
          code: `const photo = document.createElement("img");\nphoto.src = "cat.jpg";\nphoto.alt = "A sleeping cat";\nphoto.setAttribute("loading", "lazy");\n\nconst send = document.querySelector("#send");\nsend.disabled = true;\ndocument.querySelector("#notice").hidden = false;` },
        { h: 'Real example: drawing a to-do list from data', real: true, p: [
          'The tasks live in an array and the list on the page is redrawn from it every time it changes. It is the idea behind libraries such as React.' ],
          code: `const tasks = [\n  { text: "Buy bread", done: true },\n  { text: "Study JS", done: false },\n];\n\nfunction render() {\n  const list = document.querySelector("#tasks");\n  const fragment = document.createDocumentFragment();\n  for (const t of tasks) {\n    const li = document.createElement("li");\n    li.textContent = t.text;\n    li.classList.toggle("done", t.done);\n    fragment.append(li);\n  }\n  list.replaceChildren(fragment);   // empties the list and adds the new ones\n  document.querySelector("#counter").textContent =\n    tasks.filter((t) => !t.done).length + " pending";\n}\n\nrender();` },
      ],
      x: [
        fill(`const li = document.___("li");\nli.textContent = "Bread";`, ['createElement', 'newElement', 'create', 'makeElement'], '`createElement` creates the element; then it has to be inserted.'),
        mc('Why use `textContent` and not `innerHTML` to show what a user typed?', ['innerHTML would interpret their text as HTML and could run malicious code', 'textContent looks nicer', 'innerHTML does not work with long texts', 'There is no reason'], 'It is the basic defence against XSS attacks.'),
        out(`const p = document.createElement("p");\np.classList.add("notice", "big");\np.classList.toggle("big");\np.classList.toggle("active");\nconsole.log(p.className);`, ['notice active', 'notice big active', 'notice', 'active'], 'The first `toggle` removes `big` because it was there; the second adds `active` because it was not.'),
        out(`const ul = document.createElement("ul");\nfor (const t of ["a", "b"]) {\n  const li = document.createElement("li");\n  li.textContent = t;\n  ul.append(li);\n}\nul.prepend(document.createElement("li"));\nconsole.log(ul.children.length, ul.lastElementChild.textContent);`, ['3 b', '2 b', '3 a', '3 '], '`prepend` adds an empty `li` at the start, so "b" is still the last one.'),
        typ('Take the notice off the page', `document.querySelector(".notice").___();`, 'remove', '`remove()` takes the element out of the DOM.'),
        out(`const box = document.createElement("div");\nbox.style.backgroundColor = "red";\nbox.style.fontSize = "20px";\nconsole.log(box.getAttribute("style"));`, ['background-color: red; font-size: 20px;', 'backgroundColor: red; fontSize: 20px', 'null'], 'In JavaScript it is written in camelCase, but the `style` attribute stores the CSS names.'),
        mc('What does `element.classList.toggle("active")` do?', ['It adds the class if it is not there and removes it if it is', 'It always adds it', 'It always removes it', 'It returns the number of classes'], 'With `toggle("active", true)` it is forced to add it.'),
        out(`const tasks = [{ text: "Buy bread", done: true }, { text: "Study <b>JS</b>", done: false }];\nconst ul = document.createElement("ul");\nfor (const t of tasks) {\n  const li = document.createElement("li");\n  li.textContent = t.text;\n  li.classList.toggle("done", t.done);\n  ul.append(li);\n}\nul.firstElementChild.remove();\nconsole.log(ul.children.length, ul.innerHTML);`, ['1 <li>Study &lt;b&gt;JS&lt;/b&gt;</li>', '1 <li>Study <b>JS</b></li>', '2 <li class="done">Buy bread</li>'], 'The first task is deleted. Since the text was set with `textContent`, the tags are not interpreted and appear escaped in the HTML. `toggle` with `false` does not add the class.'),
      ],
    },
    // Day 23
    {
      t: 'Events',
      d: 'addEventListener, the event object, preventDefault, propagation and delegation.',
      guide: [
        { h: 'Listening to events', p: [
          'An event is something that happens on the page: a click, a key press, a form being sent. `element.addEventListener("click", function)` runs the function every time it happens.',
          'Common events: `click`, `input` (every change in a field), `change`, `submit`, `keydown` and `DOMContentLoaded`. The `{ once: true }` option makes the listener run only once.' ],
          code: `const button = document.querySelector("#greet");\nbutton.addEventListener("click", () => {\n  console.log("Hello!");\n});\n\nconst search = document.querySelector("#search");\nsearch.addEventListener("input", (e) => {\n  console.log("Searching:", e.target.value);\n});` },
        { h: 'The event object', p: [
          'The function receives an object with information: `type` (the type), `target` (the element where it happened), `currentTarget` (the one that has the listener) and, for the keyboard, `key`.',
          '`preventDefault()` cancels what the browser would do by default, such as reloading the page when a form is sent or following a link.' ],
          code: `const form = document.querySelector("#signup");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();   // does not reload the page\n  const email = form.querySelector("#email").value;\n  console.log("Send", email);\n});\n\ndocument.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") closeModal();\n});` },
        { h: 'Propagation', p: [
          'An event starts at the element where it happened and then travels up through its ancestors: this is bubbling. A click on a button is also a click on the `div` that contains it.',
          '`e.stopPropagation()` stops it going up. Use it carefully: other listeners further up will no longer find out.' ],
          code: `<!-- <div id="card"><button id="like">♥</button></div> -->\ndocument.querySelector("#card").addEventListener("click", () => {\n  console.log("Open card");\n});\ndocument.querySelector("#like").addEventListener("click", (e) => {\n  e.stopPropagation();   // the click does not open the card\n  console.log("Like");\n});` },
        { h: 'Event delegation', p: [
          'Instead of putting a listener on each element of a list, you put a single one on the container and use `e.target.closest(...)` to see which element was clicked.',
          'It also works with elements added later and uses less memory.' ],
          code: `const list = document.querySelector("#list");\nlist.addEventListener("click", (e) => {\n  const button = e.target.closest(".delete");\n  if (!button) return;            // click somewhere else\n  button.closest("li").remove();\n});` },
        { h: 'Real example: a to-do form', real: true, p: [
          'A form adds tasks without reloading the page and the list uses delegation to mark them as done, including those added later.' ],
          code: `const form = document.querySelector("#new");\nconst input = form.querySelector("input");\nconst list = document.querySelector("#tasks");\n\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const text = input.value.trim();\n  if (!text) return;\n  const li = document.createElement("li");\n  li.textContent = text;\n  list.append(li);\n  input.value = "";\n  input.focus();\n});\n\nlist.addEventListener("click", (e) => {\n  const li = e.target.closest("li");\n  if (li) li.classList.toggle("done");\n});` },
      ],
      x: [
        fill(`button.___("click", () => console.log("Hello!"));`, ['addEventListener', 'onEvent', 'listen', 'on'], '`addEventListener(type, function)` registers a listener.'),
        mc('What does `e.preventDefault()` do in the `submit` event of a form?', ['It stops the browser from sending the form and reloading the page', 'It clears the fields', 'It stops the event from propagating', 'It disables the button'], 'That way you can validate and send the data with JavaScript.'),
        out(`// <div id="box"><button id="btn">OK</button></div>\nconst log = [];\ndocument.querySelector("#box").addEventListener("click", () => log.push("box"));\ndocument.querySelector("#btn").addEventListener("click", () => log.push("btn"));\ndocument.querySelector("#btn").click();\nconsole.log(log.join(" > "));`, ['btn > box', 'box > btn', 'btn', 'box'], 'The event starts at the button and then goes up to the `div`.'),
        out(`// <ul id="menu"><li>Home</li><li>Contact</li></ul>\nconst menu = document.querySelector("#menu");\nmenu.addEventListener("click", (e) => {\n  console.log(e.target.textContent, e.currentTarget.id);\n});\nmenu.children[1].click();`, ['Contact menu', 'HomeContact menu', 'Contact ', 'menu Contact'], '`target` is the `li` that was clicked; `currentTarget` is the list, which has the listener.'),
        typ('Check whether the Enter key was pressed', `input.addEventListener("keydown", (e) => {\n  if (e.___ === "Enter") send();\n});`, 'key', '`e.key` holds the name of the key.'),
        mc('What is event delegation?', ['Putting a single listener on the container and working out which child was clicked', 'Passing an event to another page', 'Running two listeners at once', 'Cancelling an event'], 'It works even with elements added later.'),
        out(`// <button>+</button>\nlet n = 0;\nconst b = document.querySelector("button");\nb.addEventListener("click", () => n++, { once: true });\nb.addEventListener("click", () => (n += 10));\nb.click();\nb.click();\nconsole.log(n);`, ['21', '22', '11', '20'], 'The first listener only runs on the first click (+1); the second on both (+20).'),
        out(`// <ul id="list"><li><button class="delete">x</button> Bread</li><li><button class="delete">x</button> Milk</li></ul>\nconst list = document.querySelector("#list");\nconst log = [];\nlist.addEventListener("click", (e) => {\n  const button = e.target.closest(".delete");\n  if (!button) return log.push("outside");\n  button.closest("li").remove();\n  log.push("deleted");\n});\nlist.querySelector("li").click();\nlist.querySelector(".delete").click();\nconsole.log(log.join(","), list.children.length, list.textContent.trim());`, ['outside,deleted 1 x Milk', 'deleted,deleted 0', 'outside,deleted 1 Milk', 'deleted,outside 1 x Bread'], 'The first click is on the `li`, not on a button: `closest` returns `null`. The second presses the "Bread" button and deletes its `li`. "x Milk" is left, because the button is still inside.'),
      ],
    },
    // Day 24
    {
      t: 'Async/await and fetch',
      d: 'async functions, await, errors with try...catch and API requests with fetch.',
      guide: [
        { h: 'async and await', p: [
          'An `async` function always returns a promise. Inside it, `await` waits for a promise to be fulfilled and returns its value, as if the code were synchronous.',
          '`await` only pauses that function: the rest of the program keeps working. In modules `await` can also be used outside functions.' ],
          code: `const wait = (ms) => new Promise((r) => setTimeout(r, ms));\n\nasync function countdown() {\n  for (let i = 3; i > 0; i--) {\n    console.log(i);\n    await wait(1000);\n  }\n  return "Lift-off!";\n}\n\ncountdown().then(console.log);  // 3, 2, 1, Lift-off!` },
        { h: 'Errors with try...catch', p: [
          'If the awaited promise is rejected, `await` throws the error. It is caught with a normal `try...catch`, just like synchronous errors.',
          'That way asynchronous code reads from top to bottom, without chains of `then`.' ],
          code: `async function loadProfile(id) {\n  try {\n    const user = await getUser(id);\n    const orders = await getOrders(user.id);\n    return { user, orders };\n  } catch (error) {\n    console.log("Could not load:", error.message);\n    return null;\n  }\n}` },
        { h: 'fetch: asking an API for data', p: [
          '`fetch(url)` makes an HTTP request and returns a promise with the response. `response.json()` reads the body and converts it from JSON, and it also returns a promise.',
          'Careful: `fetch` is only rejected if the network fails. A 404 or a 500 fulfils the promise, so you have to check `response.ok`.' ],
          code: `async function findUser(id) {\n  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);\n  if (!res.ok) throw new Error("HTTP error " + res.status);\n  const user = await res.json();\n  return user.name;\n}\n\nfindUser(1).then(console.log);  // Leanne Graham` },
        { h: 'Sending data and parallel requests', p: [
          'To send data you pass a second argument with `method`, `headers` and `body`. The body is turned into text with `JSON.stringify`.',
          'Two `await`s in a row wait one after the other. If the requests don’t depend on each other, start them at the same time with `await Promise.all([...])`.' ],
          code: `const res = await fetch("/api/orders", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ product: "Mug", units: 2 }),\n});\n\n// In parallel: takes as long as the slowest\nconst [users, products] = await Promise.all([\n  fetch("/api/users").then((r) => r.json()),\n  fetch("/api/products").then((r) => r.json()),\n]);` },
        { h: 'Real example: search box with an API', real: true, p: [
          'A search box shows the users from an API whose name contains the typed text. It says when it is loading and shows a clear message if something fails.' ],
          code: `const input = document.querySelector("#search");\nconst results = document.querySelector("#results");\n\nasync function search(text) {\n  results.textContent = "Loading...";\n  try {\n    const res = await fetch("https://jsonplaceholder.typicode.com/users");\n    if (!res.ok) throw new Error("HTTP error " + res.status);\n    const users = await res.json();\n    const found = users.filter((u) =>\n      u.name.toLowerCase().includes(text.toLowerCase())\n    );\n    results.textContent = found.map((u) => u.name).join(", ") || "No results";\n  } catch (error) {\n    results.textContent = "The search failed: " + error.message;\n  }\n}\n\ninput.addEventListener("change", () => search(input.value));` },
      ],
      x: [
        out(`async function f() {\n  return 5;\n}\nconsole.log(f() instanceof Promise);`, ['true', 'false', '5', 'undefined'], 'An `async` function always returns a promise, even if it returns a normal value.'),
        out(`async function task() {\n  console.log("B");\n  await null;\n  console.log("D");\n}\nconsole.log("A");\ntask();\nconsole.log("C");`, ['A\nB\nC\nD', 'A\nB\nD\nC', 'A\nC\nB\nD', 'B\nA\nC\nD'], 'The function runs until the first `await`; then it hands back control and continues when the synchronous code finishes.'),
        fill(`async function load() {\n  const res = ___ fetch("/api/products");\n  return res.json();\n}`, ['await', 'async', 'then', 'wait'], '`await` waits for the `fetch` promise to be fulfilled.'),
        mc('If the server replies with a 404 error, what does the `fetch` promise do?', ['It is fulfilled; you have to check response.ok', 'It is always rejected', 'It returns null', 'It throws a SyntaxError'], '`fetch` is only rejected when the network fails.'),
        typ('Convert the body of the response from JSON to an object', `const res = await fetch("/api/user");\nconst data = await res.___();`, 'json', '`res.json()` reads the body and converts it; it has to be awaited too.'),
        out(`const fail = () => Promise.reject(new Error("no network"));\nasync function load() {\n  try {\n    await fail();\n    return "ok";\n  } catch (e) {\n    return "error: " + e.message;\n  }\n}\nload().then((r) => console.log(r));`, ['error: no network', 'ok', 'no network', 'undefined'], 'Awaiting a rejected promise throws the error, which is caught in the `catch`.'),
        mc('How do you wait for two requests that don’t depend on each other without wasting time?', ['await Promise.all([getA(), getB()])', 'await getA(); await getB();', 'getA().await + getB().await', 'async Promise.race([getA()])'], 'With two `await`s in a row, the second request does not start until the first one finishes.'),
        out(`const log = [];\nconst wait = (ms, v) => new Promise((r) => setTimeout(() => { log.push(v); r(v); }, ms));\nasync function sequential() {\n  const a = await wait(30, "s1");\n  const b = await wait(30, "s2");\n  return a + b;\n}\nasync function parallel() {\n  const [a, b] = await Promise.all([wait(40, "p1"), wait(10, "p2")]);\n  return a + b;\n}\nPromise.all([sequential(), parallel()]).then(([s, p]) => console.log(log.join(" "), "|", s, p));`, ['p2 s1 p1 s2 | s1s2 p1p2', 's1 s2 p1 p2 | s1s2 p1p2', 'p2 s1 p1 s2 | s1s2 p2p1', 'p2 p1 s1 s2 | s1s2 p1p2'], 'p2 finishes at 10 ms, s1 at 30 and p1 at 40. s2 does not start until s1 finishes, so it ends at 60. `Promise.all` returns the values in the order they were requested, not the order they finished.'),
      ],
    },
    // Day 25
    {
      t: 'ES modules',
      d: 'export, import, default exports, type="module" and dynamic import.',
      guide: [
        { h: 'Why use modules', p: [
          'A module is a file with its own scope: its variables don’t mix with those of other files. It only shares what it exports.',
          'Splitting code into small modules (prices, cart, interface...) makes it easier to understand, test and reuse.' ] },
        { h: 'Named exports', p: [
          '`export` in front of a declaration makes it visible from outside. A module can have as many named exports as it wants.',
          'They are imported between braces and with the same name: `import { add } from "./maths.js"`. With `as` you can rename them, and with `import * as M` you receive them all in an object.' ],
          code: `// maths.js\nexport const PI = 3.14159;\nexport function add(a, b) {\n  return a + b;\n}\n\n// main.js\nimport { add, PI as pi } from "./maths.js";\nimport * as M from "./maths.js";\nconsole.log(add(2, 3), pi, M.PI);  // 5 3.14159 3.14159` },
        { h: 'Default export', p: [
          'Each module can have a single default export, which is usually the main thing in the file. It is imported without braces and with whatever name you like.',
          'They can be combined: `import Cart, { format } from "./cart.js"`.' ],
          code: `// cart.js\nexport default class Cart {\n  lines = [];\n}\nexport const format = (n) => n.toFixed(2) + " €";\n\n// main.js\nimport MyCart, { format } from "./cart.js";\nconst c = new MyCart();\nconsole.log(format(3.5));  // 3.50 €` },
        { h: 'Using them in the browser', p: [
          'The main script is loaded with `<script type="module" src="main.js">`. Modules run in strict mode, are deferred as with `defer` and are loaded only once even if they are imported several times.',
          'In the browser paths include the extension (`./maths.js`) and the page must be served from a server, not opened as a file. `await import("./chart.js")` loads a module only when it is needed.' ],
          code: `<script type="module" src="main.js"></script>\n\n// main.js: loads the editor only if the user opens it\ndocument.querySelector("#edit").addEventListener("click", async () => {\n  const { openEditor } = await import("./editor.js");\n  openEditor();\n});` },
        { h: 'Real example: a shop split into modules', real: true, p: [
          'The shop separates the price calculations, the cart and the interface. The prices can be tested without a browser and the interface does not know how VAT is calculated.' ],
          code: `// prices.js\nexport const VAT = 0.21;\nexport const withVat = (n) => n * (1 + VAT);\nexport const format = (n) => n.toFixed(2) + " €";\n\n// cart.js\nimport { withVat } from "./prices.js";\nexport default function total(lines) {\n  return withVat(lines.reduce((s, l) => s + l.price * l.units, 0));\n}\n\n// main.js\nimport total from "./cart.js";\nimport { format } from "./prices.js";\nconst lines = [{ price: 10, units: 2 }];\ndocument.querySelector("#total").textContent = format(total(lines));  // 24.20 €` },
      ],
      x: [
        fill(`// maths.js\n___ function add(a, b) {\n  return a + b;\n}`, ['export', 'public', 'module', 'exports'], '`export` makes the function visible to other modules.'),
        mc('What does `import calculate from "./prices.js"` receive?', ['The default export of prices.js', 'An export called calculate', 'All the exports', 'Nothing: braces are missing'], 'Without braces you import the default export, with the name you choose.'),
        typ('Import format with the name fmt', `import { format ___ fmt } from "./utils.js";`, 'as', '`as` renames what you import.'),
        mc('What does the script tag need to load a module in the browser?', ['type="module"', 'module="true"', 'async', 'lang="es6"'], 'Also, the page must be served from a server.'),
        ord('Import price and vat from shop.js', ['import', '{ price, vat }', 'from', '"./shop.js";'], ['require(', 'export'], 'Named exports are imported between braces.'),
        mc('How many default exports can a module have?', ['One at most', 'None', 'Two', 'As many as it likes'], 'Named exports, on the other hand, have no limit.'),
        fill(`<script ___="module" src="main.js"></script>`, ['type', 'lang', 'kind', 'mode'], 'Without `type="module"`, the browser does not allow `import` or `export`.'),
        out(`// counter.js\nlet count = 0;\nexport const increment = () => ++count;\nexport default count;\n\n// main.js\nimport value, { increment } from "./counter.js";\nimport * as C from "./counter.js";\nincrement();\nincrement();\nconsole.log(value, C.default, typeof C.increment);`, ['0 0 function', '2 2 function', '0 2 function', '2 0 undefined'], '`export default count` exports the value the variable had at that moment: 0. Calling `increment` changes `count`, but not the default export. `C.increment` is the function.'),
      ],
    },
    // Day 26
    {
      t: 'Iterators and generators',
      d: 'The iterable protocol, Symbol.iterator, function*, yield and next().',
      guide: [
        { h: 'Iterables and iterators', p: [
          'An iterable is anything that can be gone through with `for...of` or expanded with `...`: arrays, strings, Map, Set. Plain objects are not.',
          'Underneath, an iterable has a `[Symbol.iterator]()` method that returns an iterator. The iterator has `next()`, which returns `{ value, done }` on each call until `done` is `true`.' ],
          code: `const it = ["a", "b"][Symbol.iterator]();\nconsole.log(it.next());  // { value: "a", done: false }\nconsole.log(it.next());  // { value: "b", done: false }\nconsole.log(it.next());  // { value: undefined, done: true }\n\nfor (const x of { a: 1 }) {}  // TypeError: not iterable` },
        { h: 'Generators', p: [
          'A generator function is declared with `function*`. Calling it does not run it: it returns an iterator. Each `next()` runs it until the next `yield`, which hands over a value and pauses it.',
          'The value of the final `return` arrives with `done: true`, so `for...of` and the spread ignore it.' ],
          code: `function* trafficLight() {\n  yield "green";\n  yield "amber";\n  yield "red";\n}\n\nconst t = trafficLight();\nconsole.log(t.next().value);       // green\nconsole.log([...trafficLight()]);  // ["green", "amber", "red"]` },
        { h: 'Lazy and infinite sequences', p: [
          'A generator calculates each value only when it is asked for. That is why it can represent infinite sequences without freezing the program, as long as only some values are requested.',
          '`next(value)` sends a value into the generator: it is what the `yield` it was paused on returns.' ],
          code: `function* ids(prefix) {\n  let n = 1;\n  while (true) yield prefix + "-" + n++;\n}\n\nconst orders = ids("ORD");\nconsole.log(orders.next().value);  // ORD-1\nconsole.log(orders.next().value);  // ORD-2` },
        { h: 'Making your classes iterable', p: [
          'If a class defines `*[Symbol.iterator]()`, its objects work with `for...of`, the spread and destructuring.',
          '`yield*` delegates to another iterable and hands over all its values one by one.' ],
          code: `class Playlist {\n  constructor(...songs) {\n    this.songs = songs;\n  }\n  *[Symbol.iterator]() {\n    yield* this.songs;\n  }\n}\n\nconst list = new Playlist("Intro", "Track 1", "Ending");\nfor (const s of list) console.log(s);\nconst [first] = list;\nconsole.log(first);  // Intro` },
        { h: 'Real example: reading results page by page', real: true, p: [
          'An API returns products 2 at a time. A generator hides the pagination: whoever uses it goes through the products one by one and only the pages that are needed are requested.' ],
          code: `const catalogue = ["Mug", "Notebook", "Pencil", "Backpack", "Diary"];\nfunction getPage(n) {              // simulates an API\n  return catalogue.slice(n * 2, n * 2 + 2);\n}\n\nfunction* allProducts() {\n  let page = 0;\n  while (true) {\n    const items = getPage(page++);\n    if (items.length === 0) return;\n    console.log("(page " + page + ")");\n    yield* items;\n  }\n}\n\nfor (const p of allProducts()) {\n  if (p === "Pencil") break;   // page 3 is never requested\n  console.log(p);\n}` },
      ],
      x: [
        out(`const it = [10, 20][Symbol.iterator]();\nconsole.log(it.next().value, it.next().value, it.next().done);`, ['10 20 true', '10 20 false', '10 10 false', 'undefined undefined true'], 'Each `next()` moves forward one position; after the last element, `done` is `true`.'),
        fill(`function___ count() {\n  yield 1;\n  yield 2;\n}`, ['*', '&', '#', '!'], 'Generator functions are declared with `function*`.'),
        out(`function* g() {\n  yield "a";\n  yield "b";\n  return "c";\n}\nconsole.log([...g()]);`, ['["a", "b"]', '["a", "b", "c"]', '["c"]', '[]'], 'The value of the `return` arrives with `done: true` and the spread drops it.'),
        mc('What happens when you run `for (const x of { a: 1 }) {}`?', ['It throws TypeError: plain objects are not iterable', 'It goes through the keys', 'It goes through the values', 'It does nothing'], 'To go through an object use `Object.keys`, `Object.values` or `Object.entries`.'),
        out(`function* naturals() {\n  let n = 1;\n  while (true) yield n++;\n}\nconst it = naturals();\nit.next();\nconsole.log(it.next().value, it.next().value);`, ['2 3', '1 2', '3 4', 'The program freezes'], 'The infinite loop is not a problem: the generator only moves forward when asked. The first value (1) was already used up.'),
        typ('Hand over each even number', `function* evens() {\n  for (let i = 0; i < 6; i += 2) ___ i;\n}`, 'yield', '`yield` hands over the value and pauses the generator until the next `next()`.'),
        out(`function* chat() {\n  const name = yield "What is your name?";\n  yield "Hello, " + name;\n}\nconst c = chat();\nconsole.log(c.next().value);\nconsole.log(c.next("Ana").value);`, ['What is your name?\nHello, Ana', 'What is your name?\nHello, undefined', 'Hello, Ana', 'What is your name?\nWhat is your name?'], 'The value passed to the second `next` is what the first `yield` returns.'),
        out(`class Range {\n  constructor(from, to, step = 1) {\n    Object.assign(this, { from, to, step });\n  }\n  *[Symbol.iterator]() {\n    for (let i = this.from; i <= this.to; i += this.step) yield i;\n  }\n}\nfunction* take(iterable, n) {\n  for (const x of iterable) {\n    if (n-- <= 0) return;\n    yield x;\n  }\n}\nconst r = new Range(1, 10, 3);\nconsole.log([...r].join(","), [...take(r, 2)].join(","), Math.max(...r));`, ['1,4,7,10 1,4 10', '1,4,7 1,4 7', '1,4,7,10 1,4,7 10', '1,3,6,9 1,3 9'], 'From 1 to 10 in steps of 3: 1, 4, 7 and 10. `take` stops after two values. Each spread asks for a new iterator, so the range can be gone through several times.'),
      ],
    },
    // Day 27
    {
      t: 'Node.js',
      d: 'JavaScript on the server: process, Node modules, npm and Express.',
      guide: [
        { h: 'What Node.js is', p: [
          'Node.js runs JavaScript outside the browser, with the same V8 engine as Chrome. It is used for servers, command-line tools and scripts.',
          'In Node there is no `document` or `window`, but there are other things: `process` (arguments, environment variables), access to files, the network and more. You run it with `node file.js`.' ],
          code: `// hello.js → node hello.js Ana\nconst name = process.argv[2] ?? "world";\nconsole.log("Hello, " + name);          // Hello, Ana\nconsole.log(process.env.NODE_ENV);      // the environment variable, if it exists` },
        { h: 'Node modules', p: [
          'Node comes with modules for almost everything: `node:fs/promises` for files, `node:path` for paths, `node:http` for servers. They are imported with the `node:` prefix.',
          'With `"type": "module"` in `package.json` you use `import`. The old system, CommonJS, uses `require` and `module.exports`; you will see it in a lot of existing code.' ],
          code: `import { readFile, writeFile } from "node:fs/promises";\nimport path from "node:path";\n\nconst file = path.join("data", "marks.json");\nconst marks = JSON.parse(await readFile(file, "utf8"));\nmarks.push({ student: "Eva", mark: 9 });\nawait writeFile(file, JSON.stringify(marks, null, 2));\nconsole.log(path.extname(file));  // .json` },
        { h: 'npm and package.json', p: [
          'npm is Node’s package manager. `npm init -y` creates `package.json`, which describes the project, its dependencies and its scripts.',
          '`npm install express` downloads the package into `node_modules` and records it in `package.json`. `package-lock.json` pins the exact versions. `node_modules` is not pushed to Git: it is recreated with `npm install`.' ],
          code: `{\n  "name": "my-api",\n  "type": "module",\n  "scripts": {\n    "start": "node server.js",\n    "dev": "node --watch server.js",\n    "test": "vitest"\n  },\n  "dependencies": {\n    "express": "^4.19.2"\n  }\n}` },
        { h: 'A server with Express', p: [
          'Express is the most used framework for creating web servers with Node. Each route links an HTTP method and a URL to a function that receives the request (`req`) and the response (`res`).',
          '`res.json()` sends data as JSON and `res.status(code)` sets the HTTP code: 200 fine, 201 created, 400 bad request, 404 not found.' ],
          code: `import express from "express";\n\nconst app = express();\napp.use(express.json());   // to read JSON bodies\n\napp.get("/api/hello", (req, res) => {\n  res.json({ message: "Hello from Node" });\n});\n\napp.listen(3000, () => console.log("Server on http://localhost:3000"));` },
        { h: 'Real example: a tasks API', real: true, p: [
          'A small API keeps tasks in memory. It validates the incoming data and replies with the right HTTP codes, which the front end can request with `fetch`.' ],
          code: `import express from "express";\n\nconst app = express();\napp.use(express.json());\nconst tasks = [];\n\napp.get("/api/tasks", (req, res) => res.json(tasks));\n\napp.post("/api/tasks", (req, res) => {\n  const text = req.body.text?.trim();\n  if (!text) return res.status(400).json({ error: "The text is missing" });\n  const task = { id: tasks.length + 1, text, done: false };\n  tasks.push(task);\n  res.status(201).json(task);\n});\n\napp.delete("/api/tasks/:id", (req, res) => {\n  const i = tasks.findIndex((t) => t.id === Number(req.params.id));\n  if (i === -1) return res.status(404).json({ error: "Not found" });\n  tasks.splice(i, 1);\n  res.status(204).end();\n});\n\napp.listen(3000);` },
      ],
      x: [
        mc('Which of these does NOT exist in Node.js?', ['document', 'console', 'setTimeout', 'process'], 'Node has no page to show, so there is no DOM.'),
        fill(`import { readFile } from "node:___/promises";`, ['fs', 'file', 'os', 'path'], '`fs` (file system) is the module for working with files.'),
        out(`// Terminal: node hello.js Ana 30\nconst [, , name, age] = process.argv;\nconsole.log(name, typeof age);`, ['Ana string', 'Ana number', 'node string', 'hello.js Ana'], 'The first two positions are the path of Node and that of the script. Arguments always arrive as text.'),
        mc('Which file describes the dependencies and scripts of a project?', ['package.json', 'node_modules', 'index.html', '.gitignore'], '`node_modules` holds the downloaded packages and is not pushed to Git.'),
        typ('Install the express package', `npm ___ express`, ['install', 'i'], '`npm install` (or `npm i`) downloads the package and adds it to `package.json`.'),
        out(`import path from "node:path";\nconsole.log(path.extname("report.final.pdf"), path.basename("/photos/cat.jpg", ".jpg"));`, ['.pdf cat', '.final.pdf cat', 'pdf cat.jpg', '.pdf /photos/cat'], '`extname` only takes the last extension; `basename` removes the folder and, if given, the extension.'),
        ord('Create a GET route that replies with JSON', ['app.get(', '"/api/hello",', '(req, res) =>', 'res.json({ ok: true })', ');'], ['app.listen(', 'document.'], 'Method, route and the function that receives the request and the response.'),
        mc('The server receives three requests in a row: `POST {"text":"bread"}`, `POST {}` and `POST {"text":"milk"}`. Which codes does it return and what id does the last task have?', ['201, 400 and 201; id 2', '201, 400 and 201; id 3', '200, 400 and 200; id 2', '201, 201 and 201; id 3'], 'The request without text is rejected with 400 and not stored, so the "milk" task is the second one: id 2. Creating a resource replies with 201.', `const tasks = [];\napp.post("/tasks", (req, res) => {\n  if (!req.body.text) return res.status(400).json({ error: "Text missing" });\n  const task = { id: tasks.length + 1, text: req.body.text };\n  tasks.push(task);\n  res.status(201).json(task);\n});`),
      ],
    },
    // Day 28
    {
      t: 'Testing',
      d: 'Automated tests with Vitest or Jest: test, expect, edge cases and mocks.',
      guide: [
        { h: 'Why write tests', p: [
          'A test is code that checks that other code works. It runs in seconds and warns you if a change breaks something that used to work.',
          'The most used tools are Vitest and Jest, which are almost identical. They are installed with `npm install --save-dev vitest` and run with `npm test`.' ] },
        { h: 'test and expect', p: [
          '`test("description", () => { ... })` defines a case. Inside, `expect(value)` with a matcher checks the result: `toBe` compares with `===`, `toEqual` compares the content of objects and arrays.',
          '`describe` groups related tests. The files are usually called `something.test.js`.' ],
          code: `// prices.test.js\nimport { describe, test, expect } from "vitest";\nimport { withVat, applyDiscount } from "./prices.js";\n\ndescribe("prices", () => {\n  test("adds 21 % VAT", () => {\n    expect(withVat(100)).toBe(121);\n  });\n  test("returns a new object with the discount", () => {\n    expect(applyDiscount({ price: 50 }, 0.1)).toEqual({ price: 45 });\n  });\n});` },
        { h: 'Edge cases and errors', p: [
          'Don’t only test the happy path: test empty lists, zero, negatives, odd strings. That is where bugs hide.',
          'To check that something throws an error, you pass a function: `expect(() => divide(1, 0)).toThrow()`. With decimal numbers use `toBeCloseTo`.' ],
          code: `test("an empty list gives 0", () => {\n  expect(average([])).toBe(0);\n});\ntest("does not allow dividing by zero", () => {\n  expect(() => divide(1, 0)).toThrow("by zero");\n});\ntest("0.1 + 0.2", () => {\n  expect(0.1 + 0.2).toBeCloseTo(0.3);\n});` },
        { h: 'Mocks and TDD', p: [
          'A mock replaces a dependency (sending an email, calling an API) with a fake function that records how it was called. `vi.fn()` in Vitest or `jest.fn()` in Jest.',
          'TDD (test-driven development): first you write a test that fails, then the minimum code to make it pass, and then you improve the code with the tests as a safety net.' ],
          code: `import { vi, test, expect } from "vitest";\n\ntest("warns the customers who owe money", () => {\n  const send = vi.fn();\n  warnDebtors([{ email: "a@x.com", debt: 20 }, { email: "b@x.com", debt: 0 }], send);\n  expect(send).toHaveBeenCalledTimes(1);\n  expect(send).toHaveBeenCalledWith("a@x.com", expect.any(String));\n});` },
        { h: 'Real example: protecting a cart calculation', real: true, p: [
          'Before changing its shipping rules, a shop writes tests for the current function. If someone breaks a case, `npm test` says so before it reaches the customers.' ],
          code: `// cart.js\nexport function total(lines, freeShippingFrom = 50) {\n  const subtotal = lines.reduce((s, l) => s + l.price * l.units, 0);\n  return subtotal >= freeShippingFrom || subtotal === 0 ? subtotal : subtotal + 4.99;\n}\n\n// cart.test.js\nimport { test, expect } from "vitest";\nimport { total } from "./cart.js";\n\ntest("an empty cart costs 0", () => expect(total([])).toBe(0));\ntest("charges shipping below 50", () =>\n  expect(total([{ price: 10, units: 2 }])).toBeCloseTo(24.99));\ntest("free shipping from 50", () =>\n  expect(total([{ price: 25, units: 2 }])).toBe(50));\n\n// $ npm test\n// ✓ cart.test.js (3 tests)` },
      ],
      x: [
        mc('How are `toBe` and `toEqual` different?', ['toBe compares with ===; toEqual compares the content of objects and arrays', 'They are the same', 'toEqual only works with numbers', 'toBe compares the type and toEqual the value'], 'Two objects with the same content are not `===`, so `toEqual` is used for them.'),
        fill(`test("addition", () => {\n  expect(add(2, 3)).___(5);\n});`, ['toBe', 'equals', 'is', 'toBeEqual'], '`toBe` checks that the value is exactly the expected one.'),
        out(`const results = [];\nfunction test(name, fn) {\n  try {\n    fn();\n    results.push("✓ " + name);\n  } catch {\n    results.push("✗ " + name);\n  }\n}\nconst expect = (actual) => ({\n  toBe: (expected) => {\n    if (actual !== expected) throw new Error();\n  },\n});\nconst double = (n) => n * 2;\ntest("double of 2", () => expect(double(2)).toBe(4));\ntest("double of -1", () => expect(double(-1)).toBe(2));\nconsole.log(results.join(" | "));`, ['✓ double of 2 | ✗ double of -1', '✓ double of 2 | ✓ double of -1', '✗ double of 2 | ✗ double of -1', '✓ double of 2'], 'This is how a test works underneath: `expect` throws an error if the values don’t match and `test` catches it. `double(-1)` is -2, not 2.'),
        out(`const a = { x: 1 };\nconsole.log(a === { x: 1 }, JSON.stringify(a) === JSON.stringify({ x: 1 }));`, ['false true', 'true true', 'false false', 'true false'], 'They are two different objects even though they have the same content. That is why `toEqual` exists.'),
        typ('Check that the function throws an error', `expect(() => divide(1, 0)).___("by zero");`, 'toThrow', 'You pass a function so that `expect` can run it and catch the error.'),
        mc('What is the order in TDD?', ['Write a failing test, make it pass and improve the code', 'Write the code, test it by hand and write tests', 'Write all the tests at the end', 'Improve the code and then write tests'], 'It is summed up as red, green, refactor.'),
        ord('Write a test that checks that add(2, 3) is 5', ['test("adds two numbers",', '() => {', 'expect(add(2, 3))', '.toBe(5);', '});'], ['assert(', 'console.log('], 'Description, function with the `expect` and the matcher.'),
        out(`function fn() {\n  const f = (...args) => {\n    f.calls.push(args);\n  };\n  f.calls = [];\n  return f;\n}\nfunction warnDebtors(customers, send) {\n  let n = 0;\n  for (const c of customers) {\n    if (c.debt > 0) {\n      send(c.email, "You owe " + c.debt + " €");\n      n++;\n    }\n  }\n  return n;\n}\nconst send = fn();\nconst total = warnDebtors([{ email: "a@x.com", debt: 20 }, { email: "b@x.com", debt: 0 }, { email: "c@x.com", debt: 5 }], send);\nconsole.log(total, send.calls.length, send.calls[1][0]);`, ['2 2 c@x.com', '3 3 b@x.com', '2 2 b@x.com', '2 3 c@x.com'], 'It is a home-made mock: it stores the arguments of each call. Only two customers owe money, and the second call was for c@x.com.'),
      ],
    },
    // Day 29
    {
      t: 'Performance and patterns',
      d: 'Measuring, debounce, throttle, memoization, an efficient DOM and Web Workers.',
      guide: [
        { h: 'Measure first', p: [
          'Don’t optimise blindly: measure where the time goes. `performance.now()` gives a precise timestamp in milliseconds and the Performance tab of the DevTools shows what is slow.',
          'The problem is almost always in a few places: a loop that repeats too much, too many requests or changing the DOM one element at a time.' ],
          code: `const start = performance.now();\nconst sorted = [...data].sort((a, b) => a.price - b.price);\nconsole.log("Sorting:", (performance.now() - start).toFixed(1), "ms");` },
        { h: 'Debounce and throttle', p: [
          'Debounce waits until an action stops repeating for a while before running the function: ideal for searching while the user types.',
          'Throttle runs the function at most once every so often, even if the event fires hundreds of times: ideal for `scroll` or `resize`.' ],
          code: `function debounce(fn, ms) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), ms);\n  };\n}\n\nfunction throttle(fn, ms) {\n  let last = 0;\n  return (...args) => {\n    const now = Date.now();\n    if (now - last >= ms) {\n      last = now;\n      fn(...args);\n    }\n  };\n}\n\nwindow.addEventListener("scroll", throttle(() => console.log(scrollY), 100));` },
        { h: 'Memoization', p: [
          'Memoizing means storing the result of a function so it is not recalculated when the same arguments come again. It works with pure functions: same argument, same result.',
          'A `Map` as a cache is the simplest way. Watch the memory if the possible arguments are endless.' ],
          code: `function memo(fn) {\n  const cache = new Map();\n  return (n) => {\n    if (!cache.has(n)) cache.set(n, fn(n));\n    return cache.get(n);\n  };\n}\n\nconst slow = (n) => { for (let i = 0; i < 1e8; i++); return n * 2; };\nconst fast = memo(slow);\nfast(21);  // takes a while\nfast(21);  // instant: it comes from the cache` },
        { h: 'Efficient DOM and Web Workers', p: [
          'Each change to the DOM can force the browser to recalculate the layout. Group the changes: create the elements in a `DocumentFragment` and add them in one go, or change one class instead of many styles.',
          'A heavy calculation blocks the page. A Web Worker runs it in another thread and communicates with messages: `postMessage` to send and the `message` event to receive. `loading="lazy"` on images delays loading them until they are visible.' ],
          code: `// main.js\nconst worker = new Worker("primes.js");\nworker.postMessage(5_000_000);\nworker.addEventListener("message", (e) => {\n  console.log("Primes found:", e.data);\n});\n\n// primes.js (another thread: the page keeps responding)\nself.addEventListener("message", (e) => {\n  let count = 0;\n  for (let n = 2; n < e.data; n++) if (isPrime(n)) count++;\n  self.postMessage(count);\n});` },
        { h: 'Real example: a search box that does not flood the API', real: true, p: [
          'Without care, searching for "javascript" letter by letter makes ten requests. With debounce it only asks when the user stops, and a cache avoids repeating searches already made.' ],
          code: `const cache = new Map();\n\nasync function search(text) {\n  if (cache.has(text)) return cache.get(text);\n  const res = await fetch("/api/search?q=" + encodeURIComponent(text));\n  const data = await res.json();\n  cache.set(text, data);\n  return data;\n}\n\nconst input = document.querySelector("#search");\ninput.addEventListener("input", debounce(async () => {\n  const text = input.value.trim();\n  if (text.length < 2) return;\n  const results = await search(text);\n  renderResults(results);\n}, 300));` },
      ],
      x: [
        mc('What is the difference between debounce and throttle?', ['Debounce waits for the action to stop; throttle limits how often it runs over time', 'They are the same', 'Throttle only works with the keyboard', 'Debounce runs the function immediately'], 'Debounce for searching while typing; throttle for `scroll` or `resize`.'),
        out(`function memo(fn) {\n  const cache = new Map();\n  return (n) => {\n    if (!cache.has(n)) cache.set(n, fn(n));\n    return cache.get(n);\n  };\n}\nlet calculations = 0;\nconst square = memo((n) => {\n  calculations++;\n  return n * n;\n});\nsquare(4);\nsquare(4);\nsquare(5);\nconsole.log(calculations, square(5));`, ['2 25', '3 25', '4 25', '2 16'], 'The second `square(4)` and the last `square(5)` come from the cache: only 4 and 5 were calculated.'),
        fill(`const start = performance.___();\ndoSomething();\nconsole.log(performance.now() - start, "ms");`, ['now', 'time', 'start', 'clock'], '`performance.now()` gives a precise timestamp.'),
        out(`function debounce(fn, ms) {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), ms);\n  };\n}\nconst log = [];\nconst search = debounce((txt) => log.push(txt), 20);\nsearch("j");\nsearch("ja");\nsearch("jav");\nsetTimeout(() => search("java"), 50);\nsetTimeout(() => console.log(log.join(",")), 100);`, ['jav,java', 'j,ja,jav,java', 'java', 'j,java'], 'The first three calls arrive together: each one cancels the previous one and only "jav" runs. "java" arrives later and also runs.'),
        typ('Create a separate thread for a heavy calculation', `const worker = new ___("calc.js");`, 'Worker', 'A Web Worker runs the script in another thread and communicates with messages.'),
        mc('Why is it a good idea to group changes to the DOM?', ['Each change can force the page layout to be recalculated', 'Because the DOM only allows one change per second', 'To use less memory on the server', 'It is not: it is better to make them one by one'], 'A `DocumentFragment` or changing a class lets you do it in one go.'),
        mc('Which technique would you use so that a function tied to `scroll` runs at most every 100 ms?', ['throttle', 'debounce', 'memoization', 'A Web Worker'], 'With debounce it would only run when scrolling stops.'),
        out(`const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));\nlet calls = 0;\nconst cache = {};\nfunction fibMemo(n) {\n  calls++;\n  if (n in cache) return cache[n];\n  return (cache[n] = n < 2 ? n : fibMemo(n - 1) + fibMemo(n - 2));\n}\nconsole.log(fib(10), fibMemo(10), calls);`, ['55 55 19', '55 55 177', '55 55 11', '89 89 19'], 'Both give the same result, but the cached version calculates each number only once: 11 calculations (from 10 down to 0) plus 8 cache lookups. The version without a cache would make 177 calls.'),
      ],
    },
    // Day 30
    {
      t: 'Wrap-up',
      d: 'Final review, everyday tools and next steps.',
      guide: [
        { h: 'What you have learned', p: [
          'You have gone through JavaScript from `console.log` to servers: types, conditionals, loops, functions, objects, arrays and their methods, classes, errors, JSON, the DOM and events, promises and `async/await`, modules, generators, Node.js and tests.',
          'The idea that ties it all together: JavaScript is a language of functions and objects that reacts to events. Almost everything a modern website does is built with those pieces.' ] },
        { h: 'Modern JavaScript in a few lines', p: [
          'This snippet brings together several pieces of the course: destructuring, array methods, arrow functions, template strings, `??` and `async/await`.',
          'Notice what is missing: no `var`, no index loops and no `==`.' ],
          code: 'const orders = [\n  { customer: "Ana", total: 40, paid: true },\n  { customer: "Leo", total: 25, paid: false },\n  { customer: "Eva", total: 60, paid: true },\n];\n\nconst collected = orders\n  .filter(({ paid }) => paid)\n  .reduce((sum, { total }) => sum + total, 0);\n\nconst pending = orders.filter((o) => !o.paid).map((o) => o.customer);\nconsole.log(`Collected: ${collected} €. Pending: ${pending.join(", ") || "none"}`);\n// Collected: 100 €. Pending: Leo' },
        { h: 'Everyday tools', p: [
          'The browser DevTools (console, debugger, network, performance) are your best friend. Vite creates and serves projects in seconds, ESLint and Prettier keep the code clean and Git stores the history.',
          'TypeScript adds types to JavaScript and catches many errors before running. It is the natural next step.' ],
          code: `# Create a new project with Vite\nnpm create vite@latest my-app\ncd my-app\nnpm install\nnpm run dev\n\n# Check and format\nnpx eslint .\nnpx prettier --write .` },
        { h: 'Typical mistakes and next steps', p: [
          'The most common bugs: using `==` instead of `===`, forgetting an `await`, losing `this` when passing a method as a callback, modifying shared arrays or objects and comparing decimals with `===`.',
          'To keep going: build small projects (a to-do list with localStorage, a search box with an API, a canvas game), use MDN and javascript.info, learn TypeScript and then a framework such as React, Vue or Svelte, or Node.js with a database for the back end.' ] },
        { h: 'Real example: an expense tracker', real: true, p: [
          'A small app brings together what you have learned: a class with a private field, validation with errors, `reduce` to group, `localStorage` with JSON to save and `Intl.NumberFormat` to show euros.' ],
          code: `class Expenses {\n  #list;\n  constructor(list = []) {\n    this.#list = list;\n  }\n  add(concept, amount, category = "other") {\n    if (!(amount > 0)) throw new RangeError("Invalid amount");\n    this.#list.push({ concept, amount, category, date: new Date().toISOString() });\n    return this;\n  }\n  byCategory() {\n    return this.#list.reduce((acc, { category, amount }) => {\n      acc[category] = (acc[category] ?? 0) + amount;\n      return acc;\n    }, {});\n  }\n  save() {\n    localStorage.setItem("expenses", JSON.stringify(this.#list));\n  }\n  static load() {\n    return new Expenses(JSON.parse(localStorage.getItem("expenses")) ?? []);\n  }\n}\n\nconst euros = new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR" });\nconst e = Expenses.load().add("Cinema", 9, "leisure").add("Fruit", 6.5, "food");\ne.save();\nfor (const [cat, total] of Object.entries(e.byCategory())) {\n  console.log(cat, euros.format(total));   // leisure €9.00  ·  food €6.50\n}` },
      ],
      x: [
        out(`console.log(0.1 + 0.2 === 0.3, [] == false, null ?? "x");`, ['false true x', 'true false x', 'false false null', 'true true x'], 'Decimals are not exact. With `==`, `[]` and `false` are both turned into 0, which is why `===` is recommended. `??` replaces `null`.'),
        mc('Which keyword declares a variable that will not be reassigned?', ['const', 'let', 'var', 'static'], 'Use `const` by default and `let` only if you need to reassign.'),
        out(`const o = {\n  n: "Ana",\n  greet() {\n    return this.n;\n  },\n};\nconst f = o.greet;\nconsole.log(o.greet(), f.call({ n: "Leo" }));`, ['Ana Leo', 'Ana Ana', 'Ana undefined', 'Leo Leo'], '`this` depends on how the function is called, not on where it was written. `call` sets the `this`.'),
        fill(`const prices = [5, 10, 15];\nconst total = prices.___((s, p) => s + p, 0);`, ['reduce', 'map', 'filter', 'sum'], '`reduce` combines the array into a single value.'),
        typ('Wait for the data to arrive', `async function load(url) {\n  const data = ___ fetch(url).then((r) => r.json());\n  return data;\n}`, 'await', 'Without `await`, `data` would be a pending promise.'),
        out(`const [a, ...b] = new Set([3, 3, 1, 2]);\nconsole.log(a, b.length, Array.isArray(b));`, ['3 2 true', '3 3 true', '3 2 false', '1 2 true'], 'The Set is {3, 1, 2}. Destructuring works with any iterable and rest always creates an array.'),
        ord('Keep only the people who are adults', ['const adults', '=', 'people.filter(', '(p) => p.age >= 18', ');'], ['.map(', 'function'], '`filter` returns a new array with the elements that meet the condition.'),
        out(`class Expenses {\n  #list = [];\n  add(concept, amount, category = "other") {\n    if (amount <= 0) throw new RangeError("Invalid amount");\n    this.#list.push({ concept, amount, category });\n    return this;\n  }\n  byCategory() {\n    return this.#list.reduce((acc, { category, amount }) => {\n      acc[category] = (acc[category] ?? 0) + amount;\n      return acc;\n    }, {});\n  }\n}\nconst e = new Expenses().add("Bread", 2).add("Cinema", 9, "leisure").add("Fruit", 6, "food");\ntry {\n  e.add("Error", -1);\n} catch (err) {\n  console.log(err.name);\n}\nconst summary = Object.entries(e.byCategory()).sort((a, b) => b[1] - a[1]);\nconsole.log(summary.map(([c, t]) => c + ":" + t).join(" "), JSON.stringify(e));`, ['RangeError\nleisure:9 food:6 other:2 {}', 'Error\nleisure:9 food:6 other:2 {}', 'RangeError\nother:2 leisure:9 food:6 {}', 'RangeError\nleisure:9 food:6 other:2 {"#list":[]}'], 'The negative amount throws `RangeError`. It is grouped by category and sorted from highest to lowest. `JSON.stringify` ignores private fields, so it gives "{}".'),
      ],
    },
  ],
}))(Sintaxis);
