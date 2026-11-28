/* Python · English */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('python', 'en', {
  tag: 'From your first print() to a shop with a database, an API and tests: four weeks, with a project at the end of each one.',
  days: [
    // ───────────── Day 1 ─────────────
    {
      id: 'py-intro',
      t: 'Your first program',
      d: 'What Python is, how to run a file, print(), indentation and comments.',
      guide: [
        { h: 'What is Python?', p: [
          'Python is a high-level programming language created by Guido van Rossum and released in 1991. It reads almost like English, which is why it is one of the most popular first languages.',
          'Today Instagram and Spotify use it on their servers, NASA uses it for scientific analysis, and almost every artificial intelligence team relies on it.',
          'It is an interpreted language: there is no compile step. You write the code and Python runs it line by line, from top to bottom.' ] },
        { h: 'Your first program', p: [
          'Install Python from python.org and save this in a file called `hello.py`. Run it with `python hello.py` in the terminal.',
          '`print()` shows whatever you put between the parentheses. Text goes in quotes; numbers do not.',
          'You can also type `python` in the terminal to open the interactive console and try single lines. Leave it with `exit()`.' ],
          code: `print("Hello, world")\nprint(3 + 4)  # 7` },
        { h: 'Python as a calculator', p: [
          'The basic operators are `+`, `-`, `*` and `/`. Powers are written `**`.',
          'Every value has a type: `int` for whole numbers, `float` for decimals and `str` for text. `type()` tells you which one it is. Note that decimals use a dot.' ],
          code: `print(10 - 3)         # 7\nprint(10 / 4)         # 2.5\nprint(2 ** 3)         # 8\nprint(type(10))       # <class 'int'>\nprint(type(2.5))      # <class 'float'>\nprint(type("hello"))  # <class 'str'>` },
        { h: 'Indentation and comments', p: [
          'Python does not use braces: an indentation of 4 spaces marks which lines belong to a block. If it does not line up, Python raises `IndentationError`.',
          'Anything after `#` is a comment: Python ignores it, and it explains the code to other people (or to you in a month).' ],
          code: `# Check whether someone can vote\nage = 20\nif age >= 18:\n    print("You can vote")  # inside the if\nprint("Done")              # outside the if` },
        { h: 'Real example: splitting the restaurant bill', real: true, p: [
          'Four lines are enough to solve an everyday problem: sharing a bill and the tip among friends.',
          '`round(number, 2)` rounds to two decimals, exactly what you need with money.' ],
          code: `bill = 84.50\npeople = 3\ntip = bill * 0.10\nprint("Each person pays:", round((bill + tip) / people, 2))  # Each person pays: 30.98` },
      ],
      x: [
        mc('Which function displays text on screen in Python?', ['print()', 'echo()', 'console.log()', 'printf()'], '`print()` writes to standard output. `console.log()` is JavaScript.'),
        mc('How do you write a comment in Python?', ['# comment', '// comment', '/* comment */', '-- comment'], 'Everything after `#` on a line is a comment.'),
        out(`print(2 ** 3)`, ['8', '6', '9', '23'], '`**` is the power operator: 2 to the power of 3 is 8.'),
        mc('What marks code blocks in Python?', ['Indentation', 'Braces { }', 'The words begin and end', 'Semicolons'], 'Python uses indentation; if it does not line up, it raises `IndentationError`.'),
        out(`print(type("7"))`, ["<class 'str'>", "<class 'int'>", "<class 'float'>"], 'The quotes turn the 7 into text, a `str`.'),
        ord('Write the code that displays Hello, world', ['print', '(', '"Hello, world"', ')'], ['echo', '{'], 'You call `print` with the text in quotes inside the parentheses.'),
        out(`print("Hi" * 3)`, ['HiHiHi', 'Hi 3', 'Error', 'Hi*3'], 'Multiplying a string by an integer repeats it.'),
        out(`a = 10\nb = 3\nprint(a + b * 2, (a + b) * 2)`, ['16 26', '26 16', '16 16', '26 26'], 'Multiplication comes before addition; parentheses change the order. `print` separates values with a space.'),
      ],
    },
    // ───────────── Day 2 ─────────────
    {
      id: 'py-vars',
      t: 'Variables and types',
      d: 'Storing data under a name, the basic types, input() and turning text into numbers.',
      guide: [
        { h: 'What is a variable?', p: [
          'A variable is a name that points to a value. You create it with `=`, which in Python means "assign", not "equals".',
          'You do not need to declare the type: Python works it out from the value. You can reassign the variable whenever you like, even with a value of another type.' ],
          code: `name = "Ana"\nage = 25\nprint(name, age)  # Ana 25\nage = 26          # reassigning changes the value\nprint(age)        # 26` },
        { h: 'Naming variables', p: [
          'Use snake_case: lowercase words separated by underscores (`total_price`). A name cannot start with a digit or contain hyphens or spaces.',
          'Python is case-sensitive: `age` and `Age` are different variables. By convention, constants are written in UPPERCASE.',
          'You cannot use reserved words such as `if`, `for`, `class` or `def`. Choose names that explain what they hold: `price` is better than `p`.' ],
          code: `total_price = 99.9   # good: snake_case\nPI = 3.14159         # a constant by convention\nAge = 30             # different from age\n# 2price = 5         # SyntaxError: cannot start with a digit\n# my-price = 5       # error: the hyphen is read as a minus` },
        { h: 'Multiple assignment', p: [
          'You can assign several variables on one line by separating them with commas. Python pairs each name with its value.',
          'It is the cleanest way to swap two values: you do not need a temporary variable.' ],
          code: `x, y, z = 1, 2, 3\na = b = 0          # both are 0\nx, y = y, x        # swap\nprint(x, y)        # 2 1` },
        { h: 'Built-in functions', p: [
          'Python comes with ready-to-use functions: `print()`, `len()` (length), `type()`, `int()`, `float()` and `str()` (conversions), `round()`, `abs()`, `min()` and `max()`.',
          'Conversions are key: `"7" + "7"` gives `"77"`, but `int("7") + 7` gives 14.' ],
          code: `print(len("Python"))      # 6\nprint(type(3.5))          # <class 'float'>\nprint(int("42") + 1)      # 43\nprint(str(7) + "7")       # 77\nprint(round(3.14159, 2))  # 3.14\nprint(max(4, 9, 2))       # 9` },
        { h: 'input() always returns text', p: [
          '`input()` shows a message, waits for the user to type and returns what they typed as a `str`, even if it is all digits.',
          'The classic mistake is `input() + 1`: Python raises `TypeError` because it cannot add text and a number. Convert first with `int()` or `float()`.' ],
          code: `text = input("How old are you? ")  # the user types 30\nage = int(text)                     # "30" -> 30\nprint("Next year you will be", age + 1)  # Next year you will be 31` },
        { h: 'Real example: calculating BMI', real: true, p: [
          'Body mass index is weight divided by height squared. We ask for the data, convert it to `float` and round the result.' ],
          code: `name = input("Name: ")                    # Lucy\nweight = float(input("Weight in kg: "))  # 62.5\nheight = float(input("Height in m: "))  # 1.68\nbmi = weight / height ** 2\nprint(name, "has a BMI of", round(bmi, 1))  # Lucy has a BMI of 22.1` },
      ],
      x: [
        out(`x = 5\ny = 3\nprint(x + y)`, ['8', '53', 'x + y', 'Error'], 'Both variables are integers, so `+` adds them.'),
        mc('Which variable name is valid?', ['full_name', '2name', 'full-name', 'class'], 'A name cannot start with a digit, contain hyphens or be a reserved word such as `class`.'),
        out(`print(len("Python"))`, ['6', '5', '7', 'Error'], '`len()` counts the characters in the text.'),
        typ('Convert the text "25" into an integer', `age = ___("25")`, 'int', '`int()` turns text made of digits into an integer. `float()` would turn it into a decimal.'),
        out(`a, b = 1, 2\na, b = b, a\nprint(a, b)`, ['2 1', '1 2', '2 2', 'Error'], 'Multiple assignment swaps the values in a single line.'),
        out(`print(round(7.456, 1), abs(-3))`, ['7.5 3', '7.4 3', '7.5 -3', '7.46 3'], '`round(7.456, 1)` keeps one decimal and rounds up; `abs()` removes the sign.'),
        out(`age = input("Age: ")  # the user types 20\nprint(type(age))`, ["<class 'str'>", "<class 'int'>", "<class 'float'>", '20'], '`input()` always returns text. To do maths with it, convert it with `int()`.'),
        out(`price = "19.99"\nquantity = 3\ntotal = float(price) * quantity\nprint(round(total, 2), type(total).__name__)`, ['59.97 float', '19.9919.9919.99 str', '59.97 int', 'Error'], '`float("19.99")` turns the text into a number before multiplying. A `float` times an `int` gives a `float`.'),
      ],
    },
    // ───────────── Day 3 ─────────────
    {
      id: 'py-operators',
      t: 'Operations and comparisons',
      d: 'Calculating, comparing and combining conditions with and, or and not, and the order Python evaluates it all.',
      guide: [
        { h: 'Arithmetic operators', p: [
          'Besides `+ - * /`, Python has floor division `//` (drops the decimals), remainder `%` and power `**`.',
          '`/` always returns a `float`, even when the division is exact. If you need an integer, use `//`.',
          '`%` is more useful than it looks: `n % 2 == 0` tells you whether a number is even, and `n % 60` gives you the leftover minutes.' ],
          code: `print(7 + 2)    # 9\nprint(7 / 2)    # 3.5\nprint(7 // 2)   # 3\nprint(7 % 2)    # 1\nprint(2 ** 10)  # 1024\nprint(6 / 3)    # 2.0` },
        { h: 'Precedence: what goes first', p: [
          'Python follows the maths order: first `**`, then `* / // %` and finally `+ -`. When in doubt, add parentheses: they also make the code clearer.',
          'Watch out for `-2 ** 2`: the power is calculated before the sign, so it gives -4.' ],
          code: `print(2 + 3 * 4)    # 14\nprint((2 + 3) * 4)  # 20\nprint(-2 ** 2)      # -4\nprint((-2) ** 2)    # 4` },
        { h: 'Comparison and logic', p: [
          'The comparison operators `== != > < >= <=` return `True` or `False`. Do not confuse `=` (assign) with `==` (compare).',
          '`and` requires both conditions to be true, `or` requires at least one, and `not` flips the result.',
          'Python lets you chain comparisons: `18 <= age < 65` reads just like in maths.' ],
          code: `age = 20\nprint(age >= 18)              # True\nprint(age == 18)              # False\nprint(18 <= age < 65)         # True\nprint(age > 18 and age < 21)  # True\nprint(not age > 18)           # False` },
        { h: 'Compound assignment and decimals', p: [
          '`x += 1` is the same as `x = x + 1`. There are also `-=`, `*=`, `/=`, `//=` and `%=`.',
          'Floats are stored in binary and are sometimes not exact: `0.1 + 0.2` is not exactly 0.3. When you display money, round with `round()`.' ],
          code: `balance = 100\nbalance -= 30   # 70\nbalance *= 2    # 140\nprint(balance)  # 140\nprint(0.1 + 0.2)            # 0.30000000000000004\nprint(round(0.1 + 0.2, 2))  # 0.3` },
        { h: 'Real example: film length and sale price', real: true, p: [
          'A streaming platform stores a film’s length in minutes but shows it in hours and minutes. `//` and `%` do the job.',
          'And a shop applying a 25 % discount only needs to multiply by `1 - discount`.' ],
          code: `minutes = 135\nhours = minutes // 60\nrest = minutes % 60\nprint(hours, "h", rest, "min")  # 2 h 15 min\n\nprice = 80\ndiscount = 0.25\nprint("You pay:", price * (1 - discount))  # You pay: 60.0` },
      ],
      x: [
        out(`print(7 // 2)`, ['3', '3.5', '4', '1'], '`//` is floor division: it drops the decimals.'),
        out(`print(10 % 3)`, ['1', '3', '0', '3.33'], '`%` returns the remainder: 3 goes into 10 three times with 1 left over.'),
        out(`print(6 / 2)`, ['3.0', '3', '2', 'Error'], 'Division with `/` always returns a `float`, even when the result is exact.'),
        mc('Which operator checks whether two values are equal?', ['==', '=', '===', 'equals'], '`=` assigns a value; `==` compares. `===` does not exist in Python.'),
        out(`print(5 > 3 and 2 > 4)`, ['False', 'True', 'None', 'Error'], '`and` is only true if both conditions are, and 2 > 4 is false.'),
        out(`x = 10\nx += 5\nx *= 2\nprint(x)`, ['30', '25', '20', '15'], 'First 10 + 5 = 15, then 15 * 2 = 30.'),
        fill(`n = 17\nis_even = n ___ 2 == 0\nprint(is_even)  # False`, ['%', '//', '/', '**'], 'A number is even when the remainder of dividing it by 2 is 0, and the remainder is calculated with `%`.', 'Complete the code to check whether n is even'),
        out(`print(2 + 3 * 4 ** 2 // 10, not 3 == 3 or 1 < 2)`, ['6 True', '8 True', '6 False', '20 True'], '4 ** 2 = 16, 3 * 16 = 48, 48 // 10 = 4 and 2 + 4 = 6. `not 3 == 3` is False, but `or 1 < 2` gives True.'),
      ],
    },
    // ───────────── Day 4 ─────────────
    {
      id: 'py-strings',
      t: 'Working with text',
      d: 'Indexes, slices, f-strings and the methods that clean up and transform text.',
      guide: [
        { h: 'Creating text', p: [
          'A string (`str`) is a sequence of characters in single or double quotes. Use whichever kind does not appear inside the text.',
          'Triple quotes let you write several lines. Inside a string, `\\n` is a line break and `\\t` a tab.',
          'Strings are immutable: methods do not change the original text, they return a new one.' ],
          code: `greeting = "Hello"\nsentence = 'She said "fine" and left'\npoem = """Line one\nLine two"""\nprint(len(greeting))  # 5\nprint("One\\tTwo\\nThree")` },
        { h: 'Indexes and slicing', p: [
          'Every character has a position starting at 0. Negative indexes count from the end: `-1` is the last one.',
          '`s[start:end]` cuts from `start` up to `end` without including it. If you leave one out, it goes to that end. `s[::-1]` reverses the text.' ],
          code: `language = "Python"\nprint(language[0])     # P\nprint(language[-1])    # n\nprint(language[1:4])   # yth\nprint(language[:2])    # Py\nprint(language[::-1])  # nohtyP` },
        { h: 'f-strings: putting variables into text', p: [
          'An f-string has an `f` before the quotes and replaces whatever is inside braces with its value. It is the modern, most readable way.',
          'You can format values: `{price:.2f}` shows two decimals. You can also join text with `+`, but everything must be a `str`: convert numbers with `str()`.' ],
          code: `name = "Ana"\nage = 30\nprice = 4.5\nprint(f"{name} is {age} years old")  # Ana is 30 years old\nprint(f"Total: {price * 3:.2f} €")   # Total: 13.50 €\nprint("Age: " + str(age))            # Age: 30` },
        { h: 'String methods', p: [
          '`strip()` removes spaces at both ends, `lower()` and `upper()` change case, `title()` capitalises each word and `replace()` substitutes text.',
          '`split()` cuts the text into a list and `join()` does the opposite. `count()`, `find()`, `startswith()`, `endswith()` and `isdigit()` help you search and check.' ],
          code: `text = "  Hello World  "\nprint(text.strip())                       # Hello World\nprint(text.strip().lower())               # hello world\nprint("a-b-c".split("-"))                 # ['a', 'b', 'c']\nprint(" ".join(["I", "like", "Python"]))  # I like Python\nprint("banana".count("a"))                # 3\nprint("2024".isdigit())                   # True` },
        { h: 'Real example: cleaning an email from a form', real: true, p: [
          'People type their email with spaces and capital letters. Before saving it, normalise it, and create a username while you are at it.',
          'Chaining methods (`strip().lower()`) is common: each one works on the result of the previous one.' ],
          code: `email = "  Lucy.Smith@Gmail.COM "\nemail = email.strip().lower()\nusername = email.split("@")[0].replace(".", "_")\nprint(email)                         # lucy.smith@gmail.com\nprint(username)                      # lucy_smith\nprint(email.endswith("@gmail.com"))  # True` },
      ],
      x: [
        out(`print("3" + "4")`, ['34', '7', 'Error', '3 + 4'], 'With strings, `+` concatenates: it joins "3" and "4".'),
        fill(`name = "Ana"\nprint(___"Hello {name}")`, ['f', 's', '$', '%'], 'The `f` before the quotes creates an f-string, which replaces `{name}` with its value.'),
        out(`s = "Python"\nprint(s[0], s[-1])`, ['P n', 'P o', 'y n', 'Error'], 'Index 0 is the first character and -1 the last.'),
        out(`print("hello world".title())`, ['Hello World', 'HELLO WORLD', 'Hello world', 'hello World'], '`title()` capitalises the first letter of each word.'),
        out(`print("Python"[1:4])`, ['yth', 'ytho', 'Pyt', 'pyth'], 'The slice starts at index 1 (`y`) and stops before index 4.'),
        out(`print("a,b,c".split(","))`, ["['a', 'b', 'c']", 'abc', 'a b c', "('a', 'b', 'c')"], '`split(",")` cuts the text at every comma and returns a list.'),
        typ('Remove the spaces at the start and the end', `clean = "  hello  ".___()`, 'strip', '`strip()` removes spaces (and line breaks) from both ends.'),
        out(`name = "  ada lovelace "\nclean = name.strip().title()\nprint(f"{clean[:3]}-{len(clean)}")`, ['Ada-12', 'ada-15', 'Ada-15', 'Ada -12'], 'After `strip()` there are 12 characters ("ada lovelace") and `title()` gives "Ada Lovelace". `[:3]` takes "Ada".'),
      ],
    },
    // ───────────── Day 5 ─────────────
    {
      id: 'py-conditionals',
      t: 'Making decisions',
      d: 'if, elif and else, what counts as true and the one-line if.',
      guide: [
        { h: 'if and else', p: [
          '`if` runs a block only when the condition is true. `else` covers the opposite case. The condition is followed by a colon and the block is indented 4 spaces.',
          'Forgetting the colon is the most common beginner mistake: Python responds with `SyntaxError`.' ],
          code: `temperature = 31\nif temperature > 30:\n    print("It is hot")\n    print("Drink water")\nelse:\n    print("Pleasant temperature")` },
        { h: 'Several options with elif', p: [
          '`elif` (else if) tests another condition if the previous one failed. Python takes the first one that is true and skips the rest.',
          'That is why order matters: go from the strictest condition to the loosest.' ],
          code: `mark = 78\nif mark >= 90:\n    grade = "Excellent"\nelif mark >= 70:\n    grade = "Very good"\nelif mark >= 50:\n    grade = "Pass"\nelse:\n    grade = "Fail"\nprint(grade)  # Very good` },
        { h: 'True and false', p: [
          'Any value can be used as a condition. These are false: `0`, `0.0`, `""`, `[]`, `{}`, `set()` and `None`. Everything else is true.',
          'So `if not cart:` is the idiomatic way to ask whether a list is empty.',
          'Combine conditions with `and`, `or` and `not`, and use `in` to check whether a value is one of several.' ],
          code: `cart = []\nif not cart:\n    print("The cart is empty")\n\nuser = "admin"\nif user in ("admin", "root") and len(user) > 3:\n    print("Full access")` },
        { h: 'Nested conditions and the ternary operator', p: [
          'You can put one `if` inside another, but more than two levels is hard to read: `and` or `elif` often simplify it.',
          'The ternary operator writes an if/else that returns a value in one line: `value_if_true if condition else value_if_false`.' ],
          code: `age = 16\nmessage = "adult" if age >= 18 else "minor"\nprint(message)  # minor` },
        { h: 'Real example: the price of a cinema ticket', real: true, p: [
          'A cinema charges €5 for under-12s, €6 for over-65s and €9 for everyone else. On Wednesdays, cinema day, it takes off another €2.' ],
          code: `age = 67\nis_wednesday = True\nif age < 12:\n    price = 5\nelif age >= 65:\n    price = 6\nelse:\n    price = 9\nif is_wednesday:\n    price -= 2\nprint("Ticket:", price, "€")  # Ticket: 4 €` },
      ],
      x: [
        out(`x = 7\nif x > 5:\n    print("big")\nelse:\n    print("small")`, ['big', 'small', 'big\nsmall', 'Nothing'], '7 is greater than 5, so the `if` block runs and the `else` is skipped.'),
        fill(`if mark >= 90:\n    print("A")\n___ mark >= 70:\n    print("B")`, ['elif', 'else if', 'elseif', 'case'], 'In Python, "otherwise, if..." is written `elif`.'),
        ord('Write the condition: if x is even', ['if', 'x', '%', '2', '==', '0', ':'], ['=', '/'], '`%` gives the remainder. If the remainder after dividing by 2 is 0, the number is even. Compare with `==`, not `=`.'),
        out(`n = 0\nif n:\n    print("yes")\nelse:\n    print("no")`, ['no', 'yes', '0', 'Error'], '0 counts as false in a condition.'),
        out(`age = 15\nr = "adult" if age >= 18 else "minor"\nprint(r)`, ['minor', 'adult', 'True', '15'], 'It is a ternary: since 15 is less than 18, the `else` value is used.'),
        mc('Which of these values is true in an `if`?', ['[0]', '""', '[]', 'None'], 'A list with one item is true even if that item is 0. Empty collections and `None` are false.'),
        out(`x = 5\nif x > 2:\n    if x > 10:\n        print("A")\n    else:\n        print("B")`, ['B', 'A', 'A\nB', 'Nothing'], 'It enters the first `if`, but 5 is not greater than 10, so it goes to the inner `else`.'),
        out(`points = 85\nvip = False\nif points >= 90 or vip:\n    level = "gold"\nelif points >= 80 and not vip:\n    level = "silver"\nelse:\n    level = "bronze"\nprint(level.upper() if points % 2 else level)`, ['SILVER', 'silver', 'GOLD', 'bronze'], '85 does not reach 90 and is not VIP, but it meets the `elif`: "silver". 85 % 2 is 1, which is true, so it is printed in capitals.'),
      ],
    },
    // ───────────── Day 6 ─────────────
    {
      id: 'py-loops',
      t: 'Repeating with loops',
      d: 'for and while, range(), break and continue: let the program repeat the work for you.',
      guide: [
        { h: 'The for loop', p: [
          '`for` goes through the items of any sequence: a list, a string, a dictionary... On each pass, the variable takes the next item.',
          'Use it when you know what you are going to loop over. It is the loop you will use most in Python.',
          'Some examples use a list, several values between square brackets. For now it is enough to know that `for` goes through them one by one; you will study lists properly on day 8.' ],
          code: `fruits = ["apple", "pear", "kiwi"]\nfor fruit in fruits:\n    print(fruit.upper())\n\nfor letter in "sun":\n    print(letter)` },
        { h: 'range()', p: [
          '`range(n)` generates the numbers from 0 to n-1. `range(start, end)` starts wherever you say, and `range(start, end, step)` moves `step` at a time; with a negative step it counts down.',
          'The end is never included. It is the same rule as slicing.' ],
          code: `print(list(range(5)))          # [0, 1, 2, 3, 4]\nprint(list(range(2, 6)))       # [2, 3, 4, 5]\nprint(list(range(10, 0, -3)))  # [10, 7, 4, 1]\nfor i in range(3):\n    print("Lap", i)` },
        { h: 'The while loop', p: [
          '`while` repeats as long as the condition is true. Use it when you do not know how many passes you will need.',
          'Make sure something inside the loop eventually makes the condition false; otherwise you will have an infinite loop (stop it with Ctrl+C).' ],
          code: `balance = 1000\nyears = 0\nwhile balance < 1500:\n    balance *= 1.10   # 10 % annual interest\n    years += 1\nprint(years)  # 5` },
        { h: 'break, continue and enumerate', p: [
          '`break` leaves the loop immediately; `continue` skips the rest of the current pass and moves on to the next one.',
          '`enumerate()` gives you the index and the item together, without keeping a counter by hand.' ],
          code: `for i, letter in enumerate("abc"):\n    print(i, letter)\n\nfor n in range(1, 10):\n    if n % 2 == 0:\n        continue   # skip even numbers\n    if n > 7:\n        break      # stop when we reach 9\n    print(n, end=" ")  # 1 3 5 7` },
        { h: 'Real example: the week’s sales summary', real: true, p: [
          'A café writes down what it sells each day. A loop adds up the total and counts how many days went over €100.' ],
          code: `sales = [120.5, 98.0, 143.25, 87.75, 210.0]\ntotal = 0\ngood_days = 0\nfor amount in sales:\n    total += amount\n    if amount >= 100:\n        good_days += 1\nprint("Total:", total)                   # Total: 659.5\nprint("Days over €100:", good_days)      # Days over €100: 3` },
      ],
      x: [
        out(`for i in range(3):\n    print(i)`, ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', '3'], '`range(3)` produces 0, 1 and 2: it starts at 0 and does not include 3.'),
        mc('Which numbers does `range(2, 10, 3)` produce?', ['2, 5, 8', '2, 4, 6, 8', '3, 6, 9', '2, 5, 8, 11'], 'It starts at 2, adds 3 each time and stops before reaching 10.'),
        out(`n = 0\nwhile n < 3:\n    n += 1\nprint(n)`, ['3', '2', '4', '0'], 'The loop repeats while `n < 3`. When `n` is 3 the condition fails and 3 is printed.'),
        mc('What does `break` do inside a loop?', ['Leaves the loop immediately', 'Skips to the next iteration', 'Ends the whole program', 'Restarts the loop'], '`break` stops the loop. To skip only the current pass, use `continue`.'),
        out(`for c in "hello":\n    if c == "l":\n        continue\n    print(c, end="")`, ['heo', 'hello', 'he', 'l'], '`continue` skips both "l" letters. `end=""` avoids the line break, so everything comes out together.'),
        out(`total = 0\nfor n in range(1, 5):\n    total += n\nprint(total)`, ['10', '15', '4', '5'], 'It adds 1 + 2 + 3 + 4 = 10; `range(1, 5)` does not include 5.'),
        typ('Loop over the position and the name at the same time', `names = ["Ana", "Luis"]\nfor i, name in ___(names):\n    print(i, name)`, 'enumerate', '`enumerate()` returns (index, item) pairs on each pass.'),
        out(`total = 0\nfor i in range(1, 4):\n    for j in range(i):\n        total += j\nprint(total)`, ['4', '6', '10', '3'], 'With i = 1 it adds 0; with i = 2, 0 + 1; with i = 3, 0 + 1 + 2. In total 0 + 1 + 3 = 4.'),
      ],
    },
    // ───────────── Day 7 ─────────────
    {
      id: 'py-workshop-register',
      t: 'Kibi’s workshop: the cash register',
      d: 'Week 1 project: a till that asks for prices, adds up the total, applies discounts and prints the receipt.',
      guide: [
        { h: 'The brief', p: [
          'Kibi is opening a seed shop and needs a cash register in the terminal. You type the price of each item, the till adds it up, applies a discount when it should and prints the receipt.',
          'This workshop brings the whole week together: variables, `input()`, conversions, conditionals, loops and f-strings. We build it step by step and every step already works on its own, so you can run it and check it before moving on.' ] },
        { h: 'Step 1: ask for prices until someone types 0', p: [
          'We do not know how many items there will be, so we use `while True` and leave with `break` when the cashier types 0.',
          'We keep two counts at once: the total in euros and the number of items. `+=` adds to the value that was already there.' ],
          code: `total = 0\nitems = 0\nwhile True:\n    price = float(input("Price (0 to finish): "))\n    if price == 0:\n        break\n    total += price\n    items += 1\nprint(f"{items} items, total {total:.2f} €")` },
        { h: 'Step 2: survive whatever people type', p: [
          'If the cashier types `2,50` or `hello`, `float()` fails and the program stops. First we swap the comma for a dot and check that what is left is digits with at most one dot.',
          '`continue` jumps back to the top of the loop without adding anything. On day 15 you will meet `try` and `except`, the usual way to handle these errors.' ],
          code: `while True:\n    text = input("Price (0 to finish): ").replace(",", ".")\n    if not text.replace(".", "", 1).isdigit():\n        print("That is not a price, try again")\n        continue\n    price = float(text)\n    if price == 0:\n        break` },
        { h: 'Step 3: discount bands', p: [
          'The shop takes 10 % off from 50 € and 5 % off from 20 €. With `elif` the order matters: the highest band is checked first, because 60 € also passes `>= 20`.',
          'The `:.2f` format always shows two decimals, like any receipt.' ],
          code: `total = 42.8\nif total >= 50:\n    discount = total * 0.10\nelif total >= 20:\n    discount = total * 0.05\nelse:\n    discount = 0\nprint(f"Discount: {discount:.2f} €")      # Discount: 2.14 €\nprint(f"To pay: {total - discount:.2f} €")  # To pay: 40.66 €` },
        { h: 'Real example: the full receipt', real: true, p: [
          'We put the three steps together. `:<10` aligns the text to the left in 10 characters and `:>8.2f` aligns the number to the right, so the figures line up in a column.',
          'Ideas to extend it: also ask for the quantity of each item, or work out the change from what the customer hands over.' ],
          code: `total = 0\nitems = 0\nwhile True:\n    text = input("Price (0 to finish): ").replace(",", ".")\n    if not text.replace(".", "", 1).isdigit():\n        print("That is not a price")\n        continue\n    price = float(text)\n    if price == 0:\n        break\n    total += price\n    items += 1\n\ndiscount = total * 0.10 if total >= 50 else total * 0.05 if total >= 20 else 0\nprint("-" * 18)\nprint(f"{'Items':<10}{items:>8}")\nprint(f"{'Total':<10}{total:>8.2f}")\nprint(f"{'Discount':<10}{discount:>8.2f}")\nprint(f"{'To pay':<10}{total - discount:>8.2f}")` },
      ],
      x: [
        mc('What does `break` do inside the till’s `while True`?', ['Leaves the loop and carries on with what comes after it', 'Goes back to the top of the loop', 'Closes the whole program', 'Skips only the current round'], '`break` ends the loop; the program continues on the first line after it. Skipping the current round is what `continue` does.'),
        out(`total = 0\ntotal += 2.5\ntotal += 1.25\nprint(f"{total:.2f}")`, ['3.75', '3.8', '3.750', '375'], '`+=` keeps adding to the total, and `:.2f` shows exactly two decimals.'),
        fill(`price = ___(input("Price: "))`, ['float', 'str', 'print', 'len'], '`input()` returns text. To do sums with decimals you have to convert it with `float()`.'),
        out(`total = 25\nif total >= 50:\n    print("10%")\nelif total >= 20:\n    print("5%")\nelse:\n    print("0%")`, ['5%', '10%', '0%', '5%\n0%'], '25 does not reach 50, but it does reach 20. With `elif` only the first branch that matches runs.'),
        out(`n = 0\ntotal = 0\nwhile total < 10:\n    total += 4\n    n += 1\nprint(n, total)`, ['3 12', '2 8', '3 10', '4 16'], 'The loop adds 4 while the total is below 10: 4, 8 and 12. At 12 the condition is false and it has run 3 times.'),
        typ('Type the word that leaves the loop when the price is 0', `while True:\n    price = float(input())\n    if price == 0:\n        ___\n    total += price`, 'break', '`break` ends the loop as soon as the condition is met.'),
        out(`print(f"{'Total':<8}|{9.5:>6.2f}")`, ['Total   |  9.50', 'Total|9.50', '   Total|9.50  ', 'Total   |9.5'], '`:<8` pads the text with spaces on the right up to 8 characters; `:>6.2f` puts the number with two decimals right-aligned in 6.'),
        out(`total = 0\nfor price in range(5, 30, 10):\n    if price > 20:\n        continue\n    total += price\ndiscount = total * 0.1 if total >= 20 else 0\nprint(total, round(total - discount, 2))`, ['20 18.0', '45 40.5', '20 20', '20 18'], '`range(5, 30, 10)` gives 5, 15 and 25; 25 is skipped with `continue`, so the total is 20. It reaches 20, so there is a 10 % discount, and the result is a float: 18.0.'),
      ],
    },
    // ───────────── Day 8 ─────────────
    {
      id: 'py-lists',
      t: 'Lists',
      d: 'Keeping many values in order: adding, removing, slicing, sorting and copying without surprises.',
      guide: [
        { h: 'Creating and accessing', p: [
          'A list is an ordered, changeable collection. It is written in square brackets and can mix types, although usually all items have the same type.',
          'You access items by index, just like with strings. An index that does not exist raises `IndexError`. Unlike strings, you can change an item by assigning to it.' ],
          code: `shopping = ["milk", "bread", "eggs"]\nprint(shopping[0])    # milk\nprint(shopping[-1])   # eggs\nprint(len(shopping))  # 3\nshopping[1] = "wholemeal bread"\nprint(shopping)       # ['milk', 'wholemeal bread', 'eggs']` },
        { h: 'Adding and removing items', p: [
          '`append()` adds to the end, `insert(i, x)` at a position and `extend()` adds several. `remove(x)` deletes the first item equal to `x`, and `pop()` removes and returns the last one (or the one at the index you pass).',
          '`in` checks whether an item is in the list.' ],
          code: `tasks = ["study"]\ntasks.append("run")\ntasks.insert(0, "breakfast")\ntasks.extend(["read", "sleep"])\nprint(tasks)  # ['breakfast', 'study', 'run', 'read', 'sleep']\ntasks.remove("run")\nlast = tasks.pop()\nprint(last, tasks)      # sleep ['breakfast', 'study', 'read']\nprint("read" in tasks)  # True` },
        { h: 'Slicing and sorting', p: [
          'Slicing works exactly as with strings and returns a new list.',
          '`sort()` sorts the list in place and returns `None`; `sorted()` returns a new list and leaves the original alone. A classic mistake is writing `my_list = my_list.sort()` and ending up with `None`.',
          '`sum()`, `min()` and `max()` work directly on lists of numbers.' ],
          code: `marks = [7, 4, 9, 6]\nprint(sorted(marks))  # [4, 6, 7, 9]\nprint(marks)          # [7, 4, 9, 6]\nmarks.sort(reverse=True)\nprint(marks)          # [9, 7, 6, 4]\nprint(marks[:2])      # [9, 7]\nprint(sum(marks) / len(marks))  # 6.5` },
        { h: 'Copies and references', p: [
          '`b = a` does not copy the list: it creates another name for the same object. If you change `b`, you change `a`.',
          'For an independent copy use `a.copy()`, `list(a)` or `a[:]`.' ],
          code: `a = [1, 2, 3]\nb = a           # same object\nc = a.copy()    # independent copy\na.append(4)\nprint(b)  # [1, 2, 3, 4]\nprint(c)  # [1, 2, 3]` },
        { h: 'Real example: a shopping receipt', real: true, p: [
          'With a list of prices you can already get the number of items, the total and the most expensive product on a receipt.' ],
          code: `prices = [2.35, 1.20, 4.99, 0.89]\ntotal = sum(prices)\nprint("Items:", len(prices))              # Items: 4\nprint("Total:", round(total, 2))          # Total: 9.43\nprint("Most expensive:", max(prices))     # Most expensive: 4.99` },
      ],
      x: [
        out(`fruits = ["apple", "pear", "grape"]\nprint(fruits[1])`, ['pear', 'apple', 'grape', 'Error'], 'Indexes start at 0: `fruits[1]` is the second item.'),
        ord('Add 4 to the end of the list nums', ['nums', '.', 'append', '(', '4', ')'], ['push', 'add'], 'Python lists use `.append()`. `push` is JavaScript.'),
        out(`nums = [10, 20, 30, 40, 50]\nprint(nums[1:3])`, ['[20, 30]', '[10, 20, 30]', '[20, 30, 40]', '[20]'], 'The slice goes from index 1 up to index 3 without including it.'),
        out(`nums = [3, 1, 2]\nnums.sort()\nprint(nums)`, ['[1, 2, 3]', '[3, 2, 1]', 'None', '[3, 1, 2]'], '`sort()` sorts the list in place, from smallest to largest.'),
        out(`nums = [1, 2, 3]\nlast = nums.pop()\nprint(last, nums)`, ['3 [1, 2]', '1 [2, 3]', '3 [1, 2, 3]', '[1, 2] 3'], '`pop()` with no argument removes and returns the last item.'),
        mc('What does `nums.sort()` return?', ['None', 'The sorted list', 'A sorted copy', 'True'], '`sort()` sorts in place and returns `None`. If you want a new list, use `sorted(nums)`.'),
        out(`a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)`, ['[1, 2, 3, 4]', '[1, 2, 3]', '[4]', 'Error'], '`b = a` does not copy the list: both names point to the same object. Use `a.copy()` to duplicate it.'),
        out(`nums = [5, 3, 8, 1]\nordered = sorted(nums)\nnums.append(ordered[0] + ordered[-1])\nprint(nums[-1], len(nums), nums[:2])`, ['9 5 [5, 3]', '6 5 [5, 3]', '9 4 [1, 3]', '9 5 [1, 3]'], '`sorted()` does not touch `nums`; `ordered` is [1, 3, 5, 8], so 1 + 8 = 9 is appended to `nums`.'),
      ],
    },
    // ───────────── Day 9 ─────────────
    {
      id: 'py-tuples',
      t: 'Tuples and sets',
      d: 'Tuples that never change, unpacking, and sets to remove duplicates and compare groups.',
      guide: [
        { h: 'What is a tuple?', p: [
          'A tuple is like a list, but immutable: once created you cannot add, remove or change items. It is written with parentheses.',
          'Use it for data that belongs together and should not change: coordinates, an RGB colour, a date. Because it is immutable, it can also be a dictionary key.',
          'It is indexed and sliced like a list, and it has two methods: `count()` and `index()`.' ],
          code: `colour = (255, 128, 0)\nprint(colour[0])          # 255\nprint(len(colour))        # 3\nprint(colour.count(0))    # 1\nprint(colour.index(128))  # 1` },
        { h: 'Immutability', p: [
          'Trying to change an item raises `TypeError`. If you really need to modify it, convert it to a list, change it and convert it back.',
          'That protection is the advantage: nobody can alter the data by accident somewhere else in the program.' ],
          code: `days = ("mon", "tue", "wed")\n# days[0] = "sun"  # TypeError: 'tuple' object does not support item assignment\nitems = list(days)\nitems.append("thu")\ndays = tuple(items)\nprint(days)  # ('mon', 'tue', 'wed', 'thu')` },
        { h: 'Unpacking', p: [
          'You can spread the items of a tuple into variables: `x, y = point`. The number of variables must match the number of items, unless you use `*` to collect the rest into a list.',
          'Careful: parentheses alone do not create a tuple. A one-item tuple needs a comma: `(5,)`.' ],
          code: `point = (3, 4)\nx, y = point\nprint(x, y)          # 3 4\nfirst, *rest = (1, 2, 3, 4)\nprint(first, rest)   # 1 [2, 3, 4]\nprint(type((5,)), type((5)))  # <class 'tuple'> <class 'int'>` },
        { h: 'What is a set?', p: [
          'A set is an unordered collection with no repeated items. It is written with braces: `{1, 2, 3}`. If you add duplicates, only one is kept.',
          'An empty set is created with `set()`: `{}` creates an empty dictionary.',
          'Checking whether something is in a set with `in` is very fast, even with millions of items. That is why sets are used for "already seen" lists.' ],
          code: `tags = {"python", "web", "python", "data"}\nprint(len(tags))      # 3\nprint("web" in tags)  # True\nempty = set()\nprint(type({}))       # <class 'dict'>` },
        { h: 'Set operations', p: [
          'Union `|` (all), intersection `&` (the shared ones), difference `-` (those in one but not the other) and symmetric difference `^` (those in only one of them).',
          '`issubset()` checks whether every item of one set is in another.' ],
          code: `a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(a | b)  # {1, 2, 3, 4, 5}\nprint(a & b)  # {3, 4}\nprint(a - b)  # {1, 2}\nprint(a ^ b)  # {1, 2, 5}\nprint({1, 2}.issubset(a))  # True` },
        { h: 'Real example: returning customers', real: true, p: [
          'A shop wants to know which customers bought in January and in February, which ones stopped buying and which ones are new. That is three set operations.' ],
          code: `january = {"Ana", "Luis", "Eva", "Marta"}\nfebruary = {"Luis", "Marta", "Pedro"}\nloyal = january & february\nlost = january - february\nnew = february - january\nprint(sorted(loyal))  # ['Luis', 'Marta']\nprint(sorted(lost))   # ['Ana', 'Eva']\nprint(sorted(new))    # ['Pedro']` },
      ],
      x: [
        mc('Which collection is immutable?', ['tuple', 'list', 'dict', 'set'], 'A tuple cannot be modified after it is created.'),
        out(`t = (10, 20, 30)\nprint(t[1])`, ['20', '10', '30', 'Error'], 'Tuples are indexed just like lists, starting at 0.'),
        fill(`point = (3, 4)\n___ = point\nprint(x, y)  # 3 4`, ['x, y', 'x y', 'x; y', 'x & y'], 'To unpack, write the variables separated by commas on the left of `=`.'),
        out(`t = (1, 2, 3)\nt[0] = 9\nprint(t)`, ['TypeError', '(9, 2, 3)', '(1, 2, 3)', 'None'], 'Tuples do not allow item assignment, so Python raises `TypeError`.'),
        out(`s = {1, 2, 2, 3, 3, 3}\nprint(len(s))`, ['3', '6', '4', '1'], 'A set removes duplicates: {1, 2, 3} is left.'),
        out(`s = {1, 2}\ns.add(2)\ns.add(5)\nprint(len(s))`, ['3', '4', '2', 'Error'], 'Adding a 2 that already exists changes nothing; the 5 is added.'),
        out(`a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)`, ['{2, 3}', '{1, 2, 3, 4}', '{1}', '{4}'], '`&` is the intersection: the items found in both.'),
        out(`a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(len(a | b), sorted(a ^ b), {3}.issubset(a & b))`, ['5 [1, 2, 5] True', '7 [1, 2, 5] True', '5 [3, 4] True', '5 [1, 2, 5] False'], 'The union has 5 items, the symmetric difference leaves 1, 2 and 5, and 3 is in the intersection {3, 4}.'),
      ],
    },
    // ───────────── Day 10 ─────────────
    {
      id: 'py-dicts',
      t: 'Dictionaries',
      d: 'Looking values up by key: creating, changing, looping over and nesting data.',
      guide: [
        { h: 'Creating and accessing', p: [
          'A dictionary maps unique keys to values, like an address book: you look up a name and get the phone number. It is written `{key: value}`.',
          '`d["key"]` returns the value but raises `KeyError` if the key does not exist. `d.get("key", default)` is safer: it returns the default (or `None`).' ],
          code: `person = {"name": "Ana", "age": 30, "city": "Lima"}\nprint(person["name"])                 # Ana\nprint(person.get("email"))            # None\nprint(person.get("email", "no email"))  # no email` },
        { h: 'Adding, changing and deleting', p: [
          'Assigning to a key creates it if it does not exist, or changes its value if it does. `update()` merges in another dictionary.',
          '`pop(key)` deletes and returns the value; `del d[key]` only deletes. `in` checks whether a key exists (not a value).' ],
          code: `stock = {"apples": 10}\nstock["pears"] = 5        # add\nstock["apples"] -= 3      # change\nstock.update({"grapes": 8})\ndel stock["pears"]\nprint(stock)              # {'apples': 7, 'grapes': 8}\nprint("grapes" in stock)  # True` },
        { h: 'Looping over a dictionary', p: [
          '`keys()` gives the keys, `values()` the values and `items()` the pairs. With `for key, value in d.items()` you go through everything at once.',
          'Since Python 3.7, dictionaries keep the order in which you inserted the keys.' ],
          code: `marks = {"Ana": 9, "Luis": 6, "Eva": 8}\nfor student, mark in marks.items():\n    print(student, "->", mark)\nprint(list(marks.keys()))  # ['Ana', 'Luis', 'Eva']\nprint(sum(marks.values()) / len(marks))  # 7.666666666666667` },
        { h: 'Nested data', p: [
          'Values can be lists or other dictionaries. That is how almost any real data is represented, and it is exactly the shape of the JSON returned by APIs.',
          'Keys must be immutable: strings, numbers or tuples. A list cannot be a key.' ],
          code: `user = {\n    "name": "Eva",\n    "languages": ["es", "en"],\n    "address": {"city": "Seville", "postcode": "41001"},\n}\nprint(user["address"]["city"])  # Seville\nprint(user["languages"][-1])    # en` },
        { h: 'Real example: counting the words in a text', real: true, p: [
          'Counting how often each word appears is the basis of search engines and sentiment analysis. The trick is `get(word, 0) + 1`: a new word starts at 0.' ],
          code: `text = "the cat and the dog and the fish"\ncount = {}\nfor word in text.split():\n    count[word] = count.get(word, 0) + 1\nprint(count)  # {'the': 3, 'cat': 1, 'and': 2, 'dog': 1, 'fish': 1}` },
      ],
      x: [
        fill(`ages = {"ana": 30, "luis": 25}\nprint(ages___)  # 30`, ['["ana"]', '.ana', '("ana")', '{ana}'], 'You access a dictionary value with square brackets and the key.'),
        out(`d = {"a": 1}\nd["b"] = 2\nprint(len(d))`, ['2', '1', '3', 'Error'], 'Assigning to a new key adds it to the dictionary.'),
        out(`d = {"x": 1}\nprint(d.get("y", 0))`, ['0', 'None', 'KeyError', '1'], '`get()` returns the default value when the key does not exist.'),
        out(`d = {"a": 1, "b": 2}\nprint(list(d.keys()))`, ["['a', 'b']", '[1, 2]', "[('a', 1), ('b', 2)]", 'ab'], '`keys()` returns the dictionary’s keys.'),
        out(`d = {"a": 1}\nprint(d["z"])`, ['KeyError', 'None', '0', 'Nothing'], 'Using square brackets with a key that does not exist raises `KeyError`.'),
        typ('Delete the key "bread" and keep its value', `basket = {"bread": 1.2, "milk": 0.9}\nprice = basket.___("bread")`, 'pop', '`pop(key)` removes the key and returns its value.'),
        out(`prices = {"bread": 1, "milk": 2}\nprint(sum(prices.values()))`, ['3', '2', 'bread milk', 'Error'], '`values()` gives the values and `sum()` adds them up.'),
        out(`stock = {"bread": 2, "milk": 0}\nstock["eggs"] = stock.get("eggs", 0) + 12\nstock["bread"] += 1\nprint(len(stock), stock["bread"] + stock["eggs"], "milk" in stock)`, ['3 15 True', '2 15 True', '3 14 True', '3 15 False'], '"eggs" is added with 12 and "bread" becomes 3: there are 3 keys and 3 + 12 = 15. "milk" is still a key even though it is 0.'),
      ],
    },
    // ───────────── Day 11 ─────────────
    {
      id: 'py-functions',
      t: 'Functions',
      d: 'Grouping code with def: parameters, return, default values, *args, **kwargs and scope.',
      guide: [
        { h: 'Defining and calling a function', p: [
          'A function is a named block of code you can reuse. You define it with `def`, it takes parameters in parentheses and gives back a result with `return`.',
          'If you catch yourself copying and pasting the same code, it is time to turn it into a function: when there is a bug, you fix it in one place.' ],
          code: `def greet(name):\n    return f"Hello, {name}"\n\nprint(greet("Ana"))   # Hello, Ana\nprint(greet("Luis"))  # Hello, Luis` },
        { h: 'return is not print', p: [
          '`print()` only shows a value on screen; `return` hands it back so you can store it and keep working with it.',
          'A function without `return` returns `None`. If you try to add something to it, you get a `TypeError`.' ],
          code: `def double_print(n):\n    print(n * 2)\n\ndef double_return(n):\n    return n * 2\n\nresult = double_return(5) + 1\nprint(result)            # 11\nprint(double_print(5))   # prints 10 and then None` },
        { h: 'Default and keyword parameters', p: [
          'A parameter can have a default value (`vat=0.21`) that is used when you do not pass it. Parameters with defaults always go after the required ones.',
          'When calling, you can name the arguments (`discount=0.1`): the code is easier to read and the order no longer matters.' ],
          code: `def final_price(price, vat=0.21, discount=0):\n    return round(price * (1 - discount) * (1 + vat), 2)\n\nprint(final_price(100))                # 121.0\nprint(final_price(100, discount=0.1))  # 108.9\nprint(final_price(100, vat=0.10))      # 110.0` },
        { h: '*args, **kwargs and several results', p: [
          '`*args` collects any number of positional arguments into a tuple; `**kwargs` collects the keyword arguments into a dictionary.',
          'To return several values, separate them with commas: the function returns a tuple you can unpack.' ],
          code: `def stats(*numbers):\n    return min(numbers), max(numbers), sum(numbers) / len(numbers)\n\nlowest, highest, average = stats(4, 8, 6)\nprint(lowest, highest, average)  # 4 8 6.0\n\ndef profile(**data):\n    return data\n\nprint(profile(name="Eva", age=28))  # {'name': 'Eva', 'age': 28}` },
        { h: 'Variable scope', p: [
          'Variables created inside a function are local: they are born when you call it and disappear when it ends. Assigning inside a function creates a new local variable, even if another one with the same name exists outside.',
          'Good practice: a function receives what it needs through parameters and returns the result, instead of touching global variables.' ],
          code: `counter = 0\n\ndef add_one():\n    counter = 1   # local variable, does not touch the outer one\n\nadd_one()\nprint(counter)  # 0` },
        { h: 'Real example: a final course grade', real: true, p: [
          'A teacher weighs the exam at 60 % and the coursework at 40 % (grades from 0 to 10), although some years the weight changes. A function with a default parameter handles it and returns the grade and the status.' ],
          code: `def final_grade(exam, coursework, exam_weight=0.6):\n    grade = exam * exam_weight + coursework * (1 - exam_weight)\n    status = "pass" if grade >= 5 else "fail"\n    return round(grade, 2), status\n\nprint(final_grade(4.5, 7))     # (5.5, 'pass')\nprint(final_grade(3, 6, 0.8))  # (3.6, 'fail')` },
      ],
      x: [
        fill(`___ greet(name):\n    return "Hello " + name`, ['def', 'function', 'fun', 'func'], 'Functions in Python are defined with `def`.'),
        out(`def double(n):\n    return n * 2\n\nprint(double(4))`, ['8', '44', 'n * 2', 'None'], 'The function returns 4 * 2, which is 8.'),
        typ('Complete the function so it returns the area of the triangle', `def area(base, height):\n    ___ base * height / 2`, 'return', '`return` hands the result back to whoever called the function.'),
        out(`def f(a, b=10):\n    return a + b\n\nprint(f(5))`, ['15', '5', 'Error', '510'], 'Since we do not pass `b`, it takes its default value, 10.'),
        out(`def f():\n    print("hi")\n\nr = f()\nprint(r)`, ['hi\nNone', 'hi', 'None', 'Error'], '`f()` prints "hi" but has no `return`, so it returns `None`.'),
        out(`def total(*nums):\n    return sum(nums)\n\nprint(total(1, 2, 3))`, ['6', '(1, 2, 3)', '123', 'Error'], '`*nums` groups the arguments into a tuple and `sum()` adds them up.'),
        out(`def f(a, b=2, c=3):\n    return a * b + c\n\nprint(f(1, c=10))`, ['12', '13', '5', 'Error'], '`b` keeps its default (2) and `c` is 10: 1 * 2 + 10 = 12.'),
        out(`def summary(*grades, minimum=5):\n    passed = 0\n    for g in grades:\n        if g >= minimum:\n            passed += 1\n    return passed, len(grades)\n\np, t = summary(4, 7, 5, 9, minimum=6)\nprint(f"{p}/{t}")`, ['2/4', '3/4', '2/5', '3/5'], '`*grades` collects (4, 7, 5, 9) and `minimum` is 6: only 7 and 9 pass. The function returns a tuple that gets unpacked.'),
      ],
    },
    // ───────────── Day 12 ─────────────
    {
      id: 'py-comprehensions',
      t: 'Comprehensions',
      d: 'Building lists, dictionaries and sets in one line, filtering and transforming at the same time.',
      guide: [
        { h: 'From loop to comprehension', p: [
          'A list comprehension builds a new list by applying an expression to each item: `[expression for item in iterable]`.',
          'It does the same as a loop with `append()`, but in one line and usually faster.' ],
          code: `prices = [10, 20, 40]\nwith_vat = []\nfor p in prices:\n    with_vat.append(p * 1.21)\n\nwith_vat = [p * 1.21 for p in prices]  # the same in one line\nprint([round(p, 1) for p in with_vat])  # [12.1, 24.2, 48.4]` },
        { h: 'Filtering and choosing', p: [
          'An `if` at the end filters: only the items that meet the condition get in.',
          'If what you want is to choose between two values for each item, the `if ... else` goes before the `for` (it is a ternary).' ],
          code: `nums = [3, -1, 8, 0, -5]\npositives = [n for n in nums if n > 0]\nlabels = ["even" if n % 2 == 0 else "odd" for n in nums]\nprint(positives)  # [3, 8]\nprint(labels)     # ['odd', 'odd', 'even', 'even', 'odd']` },
        { h: 'Dictionary and set comprehensions', p: [
          'With braces and `key: value` you build a dictionary; with braces and a single value, a set.',
          'They are ideal for building fast lookup tables from a list.' ],
          code: `names = ["ana", "luis", "eva"]\nlengths = {n: len(n) for n in names}\ninitials = {n[0].upper() for n in ["ana", "alba", "luis"]}\nprint(lengths)          # {'ana': 3, 'luis': 4, 'eva': 3}\nprint(sorted(initials)) # ['A', 'L']` },
        { h: 'Nested, and when not to use them', p: [
          'You can chain several `for` clauses to flatten a list of lists. They read in the same order as normal loops.',
          'If a comprehension does not fit on one line or needs several conditions, a normal loop will be more readable. Clarity wins.' ],
          code: `matrix = [[1, 2], [3, 4], [5, 6]]\nflat = [x for row in matrix for x in row]\nprint(flat)  # [1, 2, 3, 4, 5, 6]` },
        { h: 'Real example: cleaning the emails from a form', real: true, p: [
          'A sign-up form stores emails exactly as people typed them: with spaces, capitals, blanks or no @ at all. One comprehension cleans and filters them at once.' ],
          code: `entries = [" Ana@Mail.com", "", "luis@mail.com ", "no-at-sign", "EVA@mail.com"]\nemails = [e.strip().lower() for e in entries if "@" in e]\nprint(emails)  # ['ana@mail.com', 'luis@mail.com', 'eva@mail.com']` },
      ],
      x: [
        out(`squares = [x * x for x in range(4)]\nprint(squares)`, ['[0, 1, 4, 9]', '[1, 4, 9, 16]', '[0, 2, 4, 6]', '[0, 1, 4, 9, 16]'], 'It applies `x * x` to each value from 0 to 3.'),
        fill(`upper = [w.upper() ___ w in ["a", "b"]]`, ['for', 'in', 'with', 'each'], 'The structure is `[expression for item in iterable]`.'),
        out(`evens = [n for n in range(10) if n % 2 == 0]\nprint(evens)`, ['[0, 2, 4, 6, 8]', '[2, 4, 6, 8, 10]', '[0, 2, 4, 6, 8, 10]', '[1, 3, 5, 7, 9]'], 'The `if` keeps the even numbers from 0 to 9.'),
        out(`squares = {n: n * n for n in range(3)}\nprint(squares)`, ['{0: 0, 1: 1, 2: 4}', '[0, 1, 4]', '{0, 1, 4}', '{1: 1, 2: 4}'], 'It is a dictionary comprehension: each key `n` is paired with `n * n`.'),
        out(`print([c for c in "hello" if c != "o"])`, ["['h', 'e', 'l', 'l']", 'hell', "['h', 'e', 'l', 'l', 'o']", "['o']"], 'It goes through each letter and drops the "o".'),
        ord('Write a comprehension that doubles each number in nums', ['[', 'n * 2', 'for', 'n', 'in', 'nums', ']'], ['(', 'each'], 'First the expression, then `for` variable `in` iterable, all inside square brackets.'),
        out(`print(["A" if n > 5 else "B" for n in [3, 7, 5]])`, ["['B', 'A', 'B']", "['A']", "['B', 'A', 'A']", "['A', 'B', 'A']"], 'The ternary picks "A" or "B" for each number. 5 is not greater than 5, so it gets "B".'),
        out(`sales = {"mon": 120, "tue": 80, "wed": 150}\ngood = {d: v * 2 for d, v in sales.items() if v >= 100}\nprint(good, sum(good.values()))`, ["{'mon': 240, 'wed': 300} 540", "{'mon': 120, 'wed': 150} 270", "{'mon': 240, 'tue': 160, 'wed': 300} 700", '[240, 300] 540'], 'The filter leaves Tuesday (80) out and the expression doubles the rest: 240 + 300 = 540.'),
      ],
    },
    // ───────────── Day 13 ─────────────
    {
      id: 'py-modules',
      t: 'Modules and packages with pip',
      d: 'Importing your own code and the standard library, and installing packages from PyPI with pip.',
      guide: [
        { h: 'What is a module?', p: [
          'A module is simply a `.py` file. Everything you define in it (functions, variables, classes) can be used from another file with `import`.',
          'Splitting a program into modules makes it easier to maintain: each file takes care of one thing.' ],
          code: `# file: utils.py\nVAT = 0.21\n\ndef with_vat(price):\n    return round(price * (1 + VAT), 2)\n\n# file: main.py (in the same folder)\nimport utils\nprint(utils.with_vat(50))  # 60.5` },
        { h: 'Ways to import', p: [
          '`import math` loads the module and you use its names with the prefix: `math.sqrt()`. `from math import sqrt` brings in just that name and you use it without a prefix.',
          '`import statistics as st` gives it a short alias. Avoid `from module import *`: it floods your code with names and you will not know where each one comes from.' ],
          code: `import math\nfrom math import sqrt, pi\nimport statistics as st\n\nprint(math.floor(3.7))     # 3\nprint(sqrt(81))            # 9.0\nprint(round(pi, 2))        # 3.14\nprint(st.mean([2, 4, 9]))  # 5` },
        { h: 'The standard library', p: [
          'Python comes "with batteries included": `math` (maths), `random` (chance), `datetime` (dates), `os` and `pathlib` (files), `json`, `csv`, `re`, `statistics`... Nothing to install.',
          '`random` is handy for games and simulations: `randint(a, b)` includes both ends, `choice()` picks an item and `shuffle()` shuffles a list in place.' ],
          code: `import random\n\nprint(random.randint(1, 6))  # a number from 1 to 6\nprint(random.choice(["rock", "paper", "scissors"]))\ncards = [1, 2, 3, 4]\nrandom.shuffle(cards)        # shuffles the list in place\nprint(cards)` },
        { h: 'pip and PyPI', p: [
          'The standard library is large, but Python’s real power lies in PyPI (the Python Package Index), a repository with hundreds of thousands of packages: `requests`, `pandas`, `flask`, `numpy`...',
          'pip is the program that downloads and installs them. It ships with Python. If you have several Python versions, `python -m pip` makes sure you install into the same one you run.' ],
          code: `pip --version\npip install requests\npip install requests==2.32.3   # an exact version\npip install --upgrade requests\npip uninstall requests\npython -m pip install requests  # the pip of THIS Python` },
        { h: 'requirements.txt', p: [
          '`pip freeze > requirements.txt` saves the exact list of packages and versions in the project. It goes into the repository next to the code.',
          'Anyone who clones the project runs `pip install -r requirements.txt` and gets exactly the same versions. That way you avoid the classic "it works on my machine".' ],
          code: `# requirements.txt\nrequests==2.32.3\npython-dateutil==2.9.0\n\n# on another computer\npip install -r requirements.txt` },
        { h: 'Real example: exchange rates with requests', real: true, p: [
          'With `requests` you can query a public currency API in three lines. `timeout` stops the program from hanging and `raise_for_status()` raises an error if the response is not OK.' ],
          code: `# pip install requests\nimport requests\n\nr = requests.get("https://api.frankfurter.app/latest?from=EUR&to=USD", timeout=10)\nr.raise_for_status()\ndata = r.json()\nprint("1 EUR =", data["rates"]["USD"], "USD")` },
      ],
      x: [
        fill(`___ math\nprint(math.pi)`, ['import', 'include', 'using', 'require'], '`import` loads a module in Python.'),
        out(`import math\nprint(math.sqrt(25))`, ['5.0', '5', '25', 'Error'], '`math.sqrt` always returns a `float`.'),
        fill(`import statistics ___ st\nprint(st.mean([1, 2, 3]))`, ['as', 'to', '=', 'alias'], '`as` gives the imported module an alias.'),
        out(`from math import floor, ceil\nprint(floor(2.5), ceil(2.1))`, ['2 3', '3 3', '2 2', '3 2'], '`floor` rounds down and `ceil` rounds up, whatever the decimals.'),
        mc('What is pip?', ['Python’s package manager', 'A code editor', 'A data type', 'A web framework'], 'pip installs and manages third-party libraries.'),
        ord('Install the requests package', ['pip', 'install', 'requests'], ['get', 'npm'], 'The command is `pip install` followed by the package name.'),
        mc('What does `pip freeze > requirements.txt` do?', ['Saves the installed packages and their versions to a file', 'Stops Python from updating', 'Deletes the packages', 'Installs the packages in the file'], 'That way other people can reproduce your environment.'),
        mc('Your script fails with `ModuleNotFoundError: No module named \'requests\'`, but `pip install requests` says it is already installed. What is most likely?', ['pip installs into a different Python from the one running the script: use python -m pip install requests', 'requests does not exist on PyPI', 'You have to write import Requests with a capital letter', 'You have to restart the computer'], 'With several Python installations, `pip` and `python` may not match. `python -m pip` uses the pip of the same interpreter.'),
      ],
    },
    // ───────────── Day 14 ─────────────
    {
      id: 'py-workshop-contacts',
      t: 'Kibi’s workshop: the customer book',
      d: 'Week 2 project: keep customers in a list of dictionaries, find and filter them with functions in a module of your own.',
      guide: [
        { h: 'The brief', p: [
          'Kibi’s shop has regulars now and wants to remember them: name, phone number and how many purchases they have made, to reward the most loyal ones.',
          'This workshop brings week 2 together: lists, dictionaries, functions, comprehensions and modules. By the end you will have a customer book with a menu that you can really use.' ] },
        { h: 'Step 1: the data', p: [
          'Each customer is a dictionary with the same keys, and they all go in a list. It works like a table: the list holds the rows and the keys are the columns.',
          'To read a value you combine both lookups: first the position in the list, then the key.' ],
          code: `customers = [\n    {"name": "Lucía", "phone": "600111222", "purchases": 12},\n    {"name": "Marco", "phone": "600333444", "purchases": 3},\n    {"name": "Aiko", "phone": "600555666", "purchases": 7},\n]\nprint(len(customers), customers[0]["name"])  # 3 Lucía` },
        { h: 'Step 2: one function per task', p: [
          '`find()` goes through the list and returns the first customer with that name, ignoring upper and lower case. If the loop ends without a match, it returns `None`.',
          '`add()` reuses `find()` to avoid duplicates and returns `True` or `False` so whoever calls it knows what happened.' ],
          code: `def find(customers, name):\n    for c in customers:\n        if c["name"].lower() == name.lower():\n            return c\n    return None\n\ndef add(customers, name, phone):\n    if find(customers, name):\n        return False\n    customers.append({"name": name, "phone": phone, "purchases": 0})\n    return True\n\nprint(find(customers, "aiko")["phone"])  # 600555666` },
        { h: 'Step 3: filtering with comprehensions', p: [
          'A list comprehension picks out the loyal customers in one line. A dictionary comprehension builds a phone book to find a number instantly by name.' ],
          code: `loyal = [c["name"] for c in customers if c["purchases"] >= 5]\nprint(loyal)  # ['Lucía', 'Aiko']\n\nphones = {c["name"]: c["phone"] for c in customers}\nprint(phones["Marco"])  # 600333444` },
        { h: 'Step 4: a module of your own', p: [
          'Save `find()` and `add()` in a file called `book.py`. From another file in the same folder you bring them in with `from book import find, add`.',
          'That way the menu lives in one file and the logic in another, and you can reuse the customer book in other programs without copying code.' ],
          code: `# main.py\nfrom book import find, add\n\ncustomers = []\nadd(customers, "Eva", "600777888")\nprint(find(customers, "EVA"))  # {'name': 'Eva', 'phone': '600777888', 'purchases': 0}` },
        { h: 'Real example: the customer book menu', real: true, p: [
          'A loop with a menu of options is the backbone of many terminal tools. Each option calls a function from `book.py`.' ],
          code: `from book import find, add\n\ncustomers = []\nwhile True:\n    option = input("1 Find · 2 Add · 3 Loyal · 0 Quit: ")\n    if option == "0":\n        break\n    elif option == "1":\n        c = find(customers, input("Name: "))\n        print(c if c else "Not in the book")\n    elif option == "2":\n        ok = add(customers, input("Name: "), input("Phone: "))\n        print("Saved" if ok else "Already there")\n    elif option == "3":\n        print([c["name"] for c in customers if c["purchases"] >= 5])` },
      ],
      x: [
        out(`c = {"name": "Aiko", "purchases": 7}\nprint(c["purchases"] + 1)`, ['8', '71', '7', 'Error'], '`c["purchases"]` is the integer 7; adding 1 gives 8.'),
        out(`customers = [{"n": "Ana"}, {"n": "Leo"}]\nprint(customers[1]["n"])`, ['Leo', 'Ana', '{"n": "Leo"}', 'Error'], '`customers[1]` is the second dictionary and `["n"]` reads its name.'),
        fill(`customers.___({"name": "Eva", "purchases": 0})`, ['append', 'add', 'insert', 'push'], '`append()` adds an item to the end of a list. `add()` belongs to sets and `push()` does not exist in Python.'),
        out(`def total_purchases(customers):\n    return sum(c["purchases"] for c in customers)\n\nprint(total_purchases([{"purchases": 2}, {"purchases": 5}]))`, ['7', '25', '[2, 5]', 'Error'], 'The expression goes through the customers, takes their purchases and `sum()` adds them: 2 + 5.'),
        out(`customers = [{"n": "Ana", "k": 9}, {"n": "Leo", "k": 2}, {"n": "Eva", "k": 5}]\nprint([c["n"] for c in customers if c["k"] > 4])`, ["['Ana', 'Eva']", "['Leo']", "['Ana', 'Leo', 'Eva']", '[9, 5]'], 'The comprehension keeps the customers whose `k` is greater than 4 and stores their name.'),
        mc('Why does `find()` end with `return None`, outside the loop?', ['To say it found nobody after checking every customer', 'Because every function needs a return at the end', 'To leave the loop early', 'To empty the customer list'], 'If a customer matches, the `return` inside the loop leaves earlier. The end is only reached when nobody matches.'),
        typ('Complete the line that brings the find function in from book.py', `from book ___ find`, 'import', '`from module import name` brings in just that name so you can use it directly.'),
        out(`def add(customers, name):\n    if name in [c["name"] for c in customers]:\n        return False\n    customers.append({"name": name, "purchases": 0})\n    return True\n\nbook = [{"name": "Ana", "purchases": 3}]\nprint(add(book, "Leo"), add(book, "Ana"), len(book))`, ['True False 2', 'True True 3', 'False False 1', 'True False 3'], 'Leo was not there and gets added (`True`); Ana was already there and is not repeated (`False`). The book ends with 2 customers.'),
      ],
    },
    // ───────────── Day 15 ─────────────
    {
      id: 'py-exceptions',
      t: 'Errors and exceptions',
      d: 'Reading a traceback, recognising the usual errors and handling them with try, except, else, finally and raise.',
      guide: [
        { h: 'How to read a traceback', p: [
          'When something fails, Python shows a traceback. Read it from the bottom up: the last line gives the error type and its message; right above it you see the file, the line and the code that failed.',
          'Pasting that last line into a search engine often takes you straight to the solution.' ],
          code: `Traceback (most recent call last):\n  File "shop.py", line 3, in <module>\n    total = price * quantity\nNameError: name 'quantity' is not defined` },
        { h: 'NameError, TypeError and ValueError', p: [
          '`NameError`: you use a name that does not exist (a typo or a variable you have not created yet).',
          '`TypeError`: the operation makes no sense for that type, like adding text and a number. `ValueError`: the type is right but the value is not, like `int("thirty")`.' ],
          code: `print(name)      # NameError: name 'name' is not defined\n"Age: " + 30     # TypeError: can only concatenate str (not "int") to str\nint("thirty")    # ValueError: invalid literal for int() with base 10: 'thirty'\nlen(5)           # TypeError: object of type 'int' has no len()` },
        { h: 'try and except', p: [
          'Some errors are out of your hands: the user types letters where you expected a number, a file does not exist or the network goes down. `try` runs the code that may fail and `except` decides what to do if it does, instead of the program stopping.',
          'Always catch the specific type (`except ValueError`). A bare `except:` also catches errors you did not expect and hides real bugs.' ],
          code: `text = "twelve"\ntry:\n    number = int(text)\nexcept ValueError:\n    print("That is not a number")\n    number = 0\nprint(number)  # 0` },
        { h: 'else and finally', p: [
          '`else` runs only if the `try` raised no error: that is where the code that depends on everything going well goes.',
          '`finally` always runs, error or not. It is used to release resources: closing files or connections.' ],
          code: `try:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print("Error")\nelse:\n    print("Result:", result)  # only if there was no error\nfinally:\n    print("Calculation done")  # always` },
        { h: 'Raising errors with raise', p: [
          'With `raise` you throw an exception yourself when the data makes no sense for your function. Failing early with a clear message is better than returning a wrong result.',
          'Whoever calls the function decides whether to catch the error and how.' ],
          code: `def withdraw(balance, amount):\n    if amount > balance:\n        raise ValueError("Insufficient funds")\n    return balance - amount\n\ntry:\n    withdraw(50, 80)\nexcept ValueError as e:\n    print("Error:", e)  # Error: Insufficient funds` },
        { h: 'Real example: asking for an age until it is valid', real: true, p: [
          'In a console program you cannot trust what the user types. This loop repeats the question until it gets a positive integer, without the program crashing.' ],
          code: `while True:\n    try:\n        age = int(input("Age: "))\n        if age < 0:\n            raise ValueError("negative")\n        break\n    except ValueError:\n        print("Enter a positive whole number")\nprint("Age saved:", age)` },
      ],
      x: [
        mc('Which error does `print(name)` raise if `name` does not exist?', ['NameError', 'TypeError', 'SyntaxError', 'ValueError'], 'Python cannot find any variable with that name.'),
        mc('Which error does `"5" + 5` raise?', ['TypeError', 'ValueError', 'NameError', 'No error'], 'You cannot add a `str` and an `int`; convert one of them first.'),
        mc('Which error does `int("hello")` raise?', ['ValueError', 'TypeError', 'NameError', 'SyntaxError'], 'The type is right (a text), but its value cannot be turned into a number.'),
        fill(`___:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("error")`, ['try', 'do', 'catch', 'test'], 'The block that may fail goes inside `try`.'),
        out(`try:\n    n = int("abc")\nexcept ValueError:\n    n = -1\nprint(n)`, ['-1', 'abc', '0', 'Error'], 'The conversion fails, `ValueError` is caught and -1 is assigned.'),
        out(`try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("error")\nfinally:\n    print("end")`, ['error\nend', 'end', 'error', 'inf\nend'], 'Dividing by zero raises `ZeroDivisionError`, which is caught. `finally` always runs.'),
        fill(`def divide(a, b):\n    if b == 0:\n        ___ ValueError("b cannot be 0")\n    return a / b`, ['raise', 'throw', 'except', 'error'], 'In Python exceptions are raised with `raise`. `throw` belongs to Java and JavaScript.'),
        out(`def convert(values):\n    total = 0\n    for v in values:\n        try:\n            total += int(v)\n        except ValueError:\n            total -= 1\n        finally:\n            total += 10\n    return total\n\nprint(convert(["5", "a", "2"]))`, ['36', '6', '26', '37'], '"5" adds 5, "a" takes away 1 and "2" adds 2, and `finally` adds 10 on every pass: 5 - 1 + 2 + 30 = 36.'),
      ],
    },
    // ───────────── Day 16 ─────────────
    {
      id: 'py-files',
      t: 'Reading and writing files',
      d: 'open() and with, paths, missing files, CSV and JSON.',
      guide: [
        { h: 'Opening and writing', p: [
          '`open(path, mode)` opens a file. Modes: `"r"` read (the default), `"w"` write, wiping whatever was there, `"a"` append to the end and `"x"` create (fails if it already exists).',
          'Always use `with open(...) as f:`: the file closes by itself when the block ends, even if there is an error. Pass `encoding="utf-8"` so accents and symbols are saved correctly on any system.' ],
          code: `with open("notes.txt", "w", encoding="utf-8") as f:\n    f.write("Buy bread\\n")\n    f.write("Call the doctor\\n")\n\nwith open("notes.txt", "a", encoding="utf-8") as f:\n    f.write("Pay the power bill\\n")` },
        { h: 'Reading', p: [
          '`read()` returns the whole content as a string, `readline()` one line and `readlines()` a list of lines (each with its trailing `\\n`).',
          'For large files, loop over the file with `for`: it reads line by line without loading it all into memory.' ],
          code: `with open("notes.txt", encoding="utf-8") as f:\n    for number, line in enumerate(f, start=1):\n        print(number, line.strip())\n# 1 Buy bread\n# 2 Call the doctor\n# 3 Pay the power bill` },
        { h: 'Paths and missing files', p: [
          'Opening a file that does not exist for reading raises `FileNotFoundError`; catch it if that can happen.',
          '`pathlib.Path` handles paths without you worrying about whether the system uses `/` or `\\`, and tells you the extension, the name or whether the file exists.' ],
          code: `from pathlib import Path\n\npath = Path("data") / "customers.csv"\nprint(path.suffix)    # .csv\nprint(path.name)      # customers.csv\nprint(path.exists())  # False if it does not exist yet` },
        { h: 'JSON', p: [
          'JSON is the standard format for storing and exchanging structured data. `json.dump()` writes a Python object to a file and `json.load()` reads it back.',
          '`json.dumps()` and `json.loads()` (with an s for string) do the same but with text. Notice that Python’s `True` becomes `true` in JSON.' ],
          code: `import json\n\nsettings = {"theme": "dark", "language": "en", "alerts": True}\nwith open("settings.json", "w", encoding="utf-8") as f:\n    json.dump(settings, f, indent=2)\n\nwith open("settings.json", encoding="utf-8") as f:\n    loaded = json.load(f)\nprint(loaded["theme"])           # dark\nprint(json.dumps({"ok": True}))  # {"ok": true}` },
        { h: 'Real example: adding up the expenses in a CSV', real: true, p: [
          'Your bank lets you download your transactions as CSV. `csv.DictReader` reads each row as a dictionary whose keys are the header names.',
          'Open CSV files with `newline=""`, as the `csv` module documentation recommends.' ],
          code: `import csv\n\nwith open("expenses.csv", "w", newline="", encoding="utf-8") as f:\n    f.write("item,amount\\nrent,650\\npower,48.30\\ngroceries,212.45\\n")\n\ntotal = 0\nwith open("expenses.csv", newline="", encoding="utf-8") as f:\n    for row in csv.DictReader(f):\n        total += float(row["amount"])\nprint(f"Spent this month: €{total:.2f}")  # Spent this month: €910.75` },
      ],
      x: [
        fill(`___ open("data.txt") as f:\n    text = f.read()`, ['with', 'using', 'try', 'open'], '`with` closes the file automatically when the block ends, even if there is an error.'),
        mc('Which `open()` mode adds text to the end without wiping what is there?', ['"a"', '"w"', '"r"', '"x"'], '`"w"` overwrites the whole file; `"a"` (append) adds to the end.'),
        mc('What happens if you open a file that does not exist with `"r"`?', ['FileNotFoundError is raised', 'An empty one is created', 'It returns None', 'It opens in write mode'], 'Only the write modes create the file.'),
        out(`import json\ntext = json.dumps({"a": 1})\nprint(type(text))`, ["<class 'str'>", "<class 'dict'>", "<class 'json'>", '{"a": 1}'], '`dumps` (dump string) turns a Python object into JSON text.'),
        out(`import json\nd = json.loads('{"x": [1, 2]}')\nprint(d["x"][1])`, ['2', '1', '[1, 2]', 'Error'], '`loads` turns the JSON text into a dictionary.'),
        mc('What does `f.readlines()` return?', ['A list with each line of the file', 'Only the first line', 'All the text in one string', 'The number of lines'], 'Each item in the list includes the trailing line break.'),
        typ('Open the file to write from scratch', `with open("log.txt", "___") as f:\n    f.write("start")`, 'w', '`"w"` creates the file or wipes its content before writing.'),
        out(`with open("t.txt", "w") as f:\n    f.write("one\\ntwo\\n")\nwith open("t.txt", "a") as f:\n    f.write("three\\n")\nwith open("t.txt") as f:\n    lines = f.readlines()\nprint(len(lines), lines[-1].strip())`, ['3 three', '2 three', '1 three', '3 one'], '`"w"` writes two lines and `"a"` adds the third without wiping. `strip()` removes the line break from "three\\n".'),
      ],
    },
    // ───────────── Day 17 ─────────────
    {
      id: 'py-datetime',
      t: 'Dates and times',
      d: 'Creating dates, turning them into text and back, and working out how much time lies between two.',
      guide: [
        { h: 'The datetime module', p: [
          '`datetime` has several classes: `date` (date only), `time` (time only), `datetime` (date and time) and `timedelta` (a duration).',
          '`datetime.now()` gives the current moment and `date.today()` today’s date. Their attributes `year`, `month`, `day`, `hour`... give you each part.' ],
          code: `from datetime import datetime, date\n\nnow = datetime.now()\nprint(now.year, now.month, now.day)\ntoday = date.today()\nprint(today)  # e.g. 2025-03-14` },
        { h: 'Creating specific dates', p: [
          'Pass the year, month and day (and, if you like, hour and minutes) to the constructor. A printed date shows in ISO format: year-month-day.',
          '`weekday()` returns the day of the week as a number: 0 is Monday and 6 is Sunday.' ],
          code: `from datetime import date, datetime\n\nbirthday = date(1995, 8, 21)\nprint(birthday.year)       # 1995\nprint(birthday.weekday())  # 0\nmeeting = datetime(2025, 6, 3, 17, 30)\nprint(meeting)             # 2025-06-03 17:30:00` },
        { h: 'From date to text and from text to date', p: [
          '`strftime()` (string format time) turns a date into text in the format you want: `%d` day, `%m` month, `%Y` year, `%H` hour and `%M` minutes.',
          '`strptime()` (string parse time) does the opposite: it reads a text in that format and returns a `datetime`. If the text does not match, it raises `ValueError`.' ],
          code: `from datetime import datetime\n\nmeeting = datetime(2025, 6, 3, 17, 30)\nprint(meeting.strftime("%d/%m/%Y %H:%M"))  # 03/06/2025 17:30\nchristmas = datetime.strptime("25/12/2025", "%d/%m/%Y")\nprint(christmas.month)                     # 12` },
        { h: 'Adding and subtracting time', p: [
          'Adding a `timedelta` to a date moves it forward; subtracting it moves it back. Python already knows how many days each month has and which years are leap years.',
          'Subtracting two dates gives a `timedelta`; its `days` attribute is the difference in days.' ],
          code: `from datetime import date, timedelta\n\nstart = date(2025, 1, 30)\nprint(start + timedelta(days=7))  # 2025-02-06\nend = date(2025, 12, 31)\nprint((end - start).days)         # 335` },
        { h: 'Real example: working out someone’s age', real: true, p: [
          'Subtracting years is not enough: if the person has not had their birthday yet this year, you have to take one off. Comparing `(month, day)` tuples solves it in one line.',
          'Taking `today` as a parameter, instead of calling `date.today()` inside, makes the function easy to test.' ],
          code: `from datetime import date\n\ndef age(birth, today):\n    years = today.year - birth.year\n    if (today.month, today.day) < (birth.month, birth.day):\n        years -= 1   # no birthday yet this year\n    return years\n\nprint(age(date(1990, 11, 5), date(2025, 3, 14)))  # 34` },
      ],
      x: [
        fill(`from datetime ___ datetime\nprint(datetime.now())`, ['import', 'include', 'use', 'from'], '`from module import name` brings a specific name from the module.'),
        out(`from datetime import date\nd = date(2024, 5, 9)\nprint(d.year)`, ['2024', '5', '9', '2024-05-09'], '`year` is the attribute holding the year.'),
        out(`from datetime import date\nd = date(2024, 5, 9)\nprint(d.strftime("%d/%m/%Y"))`, ['09/05/2024', '2024/05/09', '9/5/2024', '05/09/2024'], '`%d` is the two-digit day, `%m` the month and `%Y` the four-digit year.'),
        out(`from datetime import date\na = date(2024, 1, 1)\nb = date(2024, 1, 31)\nprint((b - a).days)`, ['30', '31', '1', 'Error'], 'Subtracting two dates gives a `timedelta`; from the 1st to the 31st there are 30 days.'),
        out(`from datetime import date, timedelta\nd = date(2024, 2, 28) + timedelta(days=1)\nprint(d)`, ['2024-02-29', '2024-03-01', '2024-02-28', 'Error'], '2024 is a leap year, so 28 February is followed by the 29th.'),
        mc('What does `datetime.strptime("10/03/2024", "%d/%m/%Y")` do?', ['Turns the text into a datetime object', 'Turns a date into text', 'Returns the current date', 'Works out the difference in days'], 'strptime comes from "string parse time": from text to date. `strftime` does the opposite.'),
        typ('Add two weeks to the date', `from datetime import date, timedelta\nnew = date(2025, 1, 1) + timedelta(___=2)`, 'weeks', '`timedelta` accepts `days`, `weeks`, `hours`, `minutes` and `seconds`.'),
        out(`from datetime import date, timedelta\ninvoice = date(2025, 1, 31)\ndue = invoice + timedelta(days=30)\nprint(due.strftime("%d/%m"), (due - invoice).days, due > invoice)`, ['02/03 30 True', '28/02 30 True', '03/02 30 True', '02/03 28 True'], 'February 2025 has 28 days: 30 days after 31 January is 2 March. Dates can be compared with `>`.'),
      ],
    },
    // ───────────── Day 18 ─────────────
    {
      id: 'py-regex',
      t: 'Finding patterns with regex',
      d: 'Validating, searching and replacing text with regular expressions and the re module.',
      guide: [
        { h: 'What is a regular expression?', p: [
          'A regular expression (regex) is a pattern that describes a kind of text: "three digits", "something that looks like an email"... The `re` module searches for those patterns.',
          'Write patterns as raw strings, with an `r` in front (`r"\\d+"`), so Python does not interpret the backslashes.',
          '`re.search()` returns the first match (or `None`) and `re.findall()` a list with all of them.' ],
          code: `import re\n\ntext = "Order 4521 shipped on 12/03"\nprint(re.search(r"\\d+", text).group())  # 4521\nprint(re.findall(r"\\d+", text))         # ['4521', '12', '03']` },
        { h: 'The basic symbols', p: [
          '`\\d` is a digit, `\\w` a letter, digit or underscore, `\\s` a space and `.` any character. `[aeiou]` is one of those characters and `[^0-9]` anything that is not a digit.',
          'Quantifiers: `+` one or more times, `*` zero or more, `?` optional and `{5}` exactly five. `^` marks the start, `$` the end and `\\b` a word boundary.',
          'Careful: `[aeiou]` only matches lowercase vowels without accents.' ],
          code: `import re\n\nprint(re.findall(r"[aeiou]", "education"))                 # ['e', 'u', 'a', 'i', 'o']\nprint(re.findall(r"\\b\\w{5}\\b", "the puppy eats bread"))  # ['puppy', 'bread']\nprint(bool(re.fullmatch(r"\\d{5}", "90210")))              # True` },
        { h: 'search, match, fullmatch and groups', p: [
          '`match()` only looks at the start of the text, `fullmatch()` requires the whole text to match and `search()` looks anywhere.',
          'Parentheses create groups you can extract separately with `group(n)` or all together with `groups()`.' ],
          code: `import re\n\ndate = "Date: 2025-03-14"\nm = re.search(r"(\\d{4})-(\\d{2})-(\\d{2})", date)\nprint(m.group(1))             # 2025\nprint(m.groups())             # ('2025', '03', '14')\nprint(re.match(r"\\d", date))  # None` },
        { h: 'Replacing and splitting', p: [
          '`re.sub(pattern, replacement, text)` replaces every match. `re.split()` cuts the text by a pattern, more flexible than `str.split()`.' ],
          code: `import re\n\nprint(re.sub(r"\\s+", " ", "too    many   spaces"))  # too many spaces\nprint(re.split(r"[,;]\\s*", "red, green;blue"))       # ['red', 'green', 'blue']` },
        { h: 'Real example: validating emails and extracting phone numbers', real: true, p: [
          'A form needs to reject badly written emails, and a CRM wants to pull the phone numbers out of handwritten notes, whether or not they have spaces.',
          'No email pattern is perfect; this one covers the usual cases. To really validate an address, send a confirmation email.' ],
          code: `import re\n\nemail_pattern = r"^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"\nfor email in ["ana@mail.com", "bad@", "luis.p@company.co.uk"]:\n    print(email, bool(re.match(email_pattern, email)))\n\nnotes = "Call Ana on 612 345 678 or Luis on 699112233"\nprint(re.findall(r"\\d{3}\\s?\\d{3}\\s?\\d{3}", notes))  # ['612 345 678', '699112233']` },
      ],
      x: [
        mc('Which Python module works with regular expressions?', ['re', 'regex', 'regexp', 'match'], 'The standard module is called `re`.'),
        mc('What does `\\d` stand for in a regular expression?', ['A digit from 0 to 9', 'Any letter', 'A space', 'The end of the text'], '`\\d` is the same as `[0-9]`.'),
        out(`import re\nprint(re.findall(r"\\d+", "a12b3"))`, ["['12', '3']", "['1', '2', '3']", '12, 3', '[12, 3]'], '`\\d+` looks for runs of one or more digits in a row, and returns strings.'),
        out(`import re\nprint(re.sub(r"\\s+", "-", "hello  big world"))`, ['hello-big-world', 'hello--big-world', 'hellobigworld', 'hello big world'], '`\\s+` groups consecutive spaces into a single match.'),
        out(`import re\nprint(bool(re.match(r"^[A-Z]", "python")))`, ['False', 'True', 'None', 'P'], '`^[A-Z]` requires the text to start with a capital letter, and "python" starts with a lowercase one.'),
        fill(`import re\ntext = "ana@web.com and luis@web.com"\nemails = re.___(r"\\w+@\\w+\\.com", text)  # every match`, ['findall', 'search', 'match', 'find'], '`findall` returns a list with every match.'),
        out(`import re\nm = re.search(r"(\\w+)@(\\w+)", "write to ana@mail today")\nprint(m.group(2))`, ['mail', 'ana', 'ana@mail', '@'], 'The pattern has two groups: the first captures "ana" and the second "mail".'),
        out(`import re\nlog = "ERROR 404 on /login, ERROR 500 on /pay, OK 200 on /"\nerrors = re.findall(r"ERROR (\\d{3})", log)\nprint(errors, re.sub(r"\\d", "#", errors[0]))`, ["['404', '500'] ###", "['ERROR 404', 'ERROR 500'] ###", "['404', '500', '200'] ###", "['404', '500'] #"], 'With a group, `findall` returns only what was captured, and 200 is not preceded by ERROR. `sub` changes each digit of "404" into #.'),
      ],
    },
    // ───────────── Day 19 ─────────────
    {
      id: 'py-higher-order',
      t: 'Functions as values',
      d: 'Passing functions to other functions: lambda, map, filter, sorted with key, closures and decorators.',
      guide: [
        { h: 'Functions are values too', p: [
          'In Python a function is just another object: you can store it in a variable, pass it as an argument or return it from another function.',
          'A higher-order function is one that takes or returns other functions. It lets you write generic code that adapts to whatever you pass it.' ],
          code: `def shout(text):\n    return text.upper() + "!"\n\ndef apply(function, value):\n    return function(value)\n\nprint(apply(shout, "hello"))  # HELLO!\nprint(apply(len, "hello"))    # 5` },
        { h: 'lambda: one-line functions', p: [
          '`lambda parameters: expression` creates a small anonymous function. It is mostly used as an argument to `sorted`, `map`, `filter`, `max`...',
          'If the logic needs more than one expression, define a normal function with `def`.' ],
          code: `double = lambda x: x * 2\nprint(double(7))  # 14\n\nproducts = [("bread", 1.2), ("cheese", 4.5), ("milk", 0.9)]\nproducts.sort(key=lambda p: p[1])\nprint(products[0])  # ('milk', 0.9)` },
        { h: 'map, filter and reduce', p: [
          '`map(f, data)` applies `f` to each item; `filter(f, data)` keeps the ones that make `f` true. They return iterators: wrap them in `list()` to see the result.',
          '`reduce` (from the `functools` module) combines all the items into a single value. A list comprehension is often more readable than `map` and `filter`.' ],
          code: `from functools import reduce\n\nnums = [1, 2, 3, 4, 5]\nprint(list(map(lambda n: n ** 2, nums)))         # [1, 4, 9, 16, 25]\nprint(list(filter(lambda n: n % 2 == 1, nums)))  # [1, 3, 5]\nprint(reduce(lambda a, b: a * b, nums))          # 120` },
        { h: 'Closures', p: [
          'A function defined inside another one remembers the outer function’s variables even after it has finished. That is a closure.',
          'It is useful for making configured functions: here, a discount function for each percentage.' ],
          code: `def make_discount(percent):\n    def apply(price):\n        return price * (1 - percent / 100)\n    return apply\n\nsale = make_discount(20)\nprint(sale(50))  # 40.0` },
        { h: 'Decorators', p: [
          'A decorator is a function that takes another one and returns an extended version. You apply it with `@name` above the `def`.',
          'They are used to log calls, measure time, check permissions or cache results without touching the original function. Flask, which you will see on day 27, uses them for routes.' ],
          code: `def log(function):\n    def wrapper(*args):\n        print("Calling", function.__name__)\n        return function(*args)\n    return wrapper\n\n@log\ndef add(a, b):\n    return a + b\n\nprint(add(2, 3))\n# Calling add\n# 5` },
        { h: 'Real example: a shop catalogue', real: true, p: [
          'With `filter`, `map`, `sorted` and `max` with `key` you can answer questions about a catalogue: which products cost less than €20 and which one is the most expensive.' ],
          code: `products = [\n    {"name": "Headphones", "price": 59.9},\n    {"name": "USB cable", "price": 7.5},\n    {"name": "Mouse", "price": 19.9},\n]\ncheap = filter(lambda p: p["price"] < 20, products)\nnames = sorted(map(lambda p: p["name"], cheap))\nprint(names)  # ['Mouse', 'USB cable']\npriciest = max(products, key=lambda p: p["price"])\nprint(priciest["name"])  # Headphones` },
      ],
      x: [
        mc('What is a higher-order function?', ['A function that takes or returns other functions', 'A function defined inside a class', 'A function with more than three parameters', 'A function that runs faster'], '`map`, `filter` and `sorted(key=...)` are examples: they take a function as an argument.'),
        out(`square = lambda x: x ** 2\nprint(square(3))`, ['9', '6', '27', '8'], '`**` is the power operator: 3 to the power of 2 is 9.'),
        fill(`double = ___ x: x * 2\nprint(double(5))  # 10`, ['lambda', 'def', 'fn', 'func'], 'One-line anonymous functions are created with `lambda`.'),
        out(`print(list(map(lambda n: n + 1, [1, 2, 3])))`, ['[2, 3, 4]', '[1, 2, 3]', '6', '<map object>'], '`map` applies the function to each item and `list()` shows the result.'),
        out(`print(list(filter(lambda n: n > 2, [1, 2, 3, 4])))`, ['[3, 4]', '[1, 2]', '[False, False, True, True]', '2'], '`filter` keeps the items for which the function returns `True`.'),
        out(`def multiplier(n):\n    def f(x):\n        return x * n\n    return f\n\ntriple = multiplier(3)\nprint(triple(5))`, ['15', '8', '3', 'Error'], '`f` is a closure: it remembers the value of `n` even though `multiplier` has already finished.'),
        out(`def shout(f):\n    def wrapper():\n        return f().upper()\n    return wrapper\n\n@shout\ndef greeting():\n    return "hello"\n\nprint(greeting())`, ['HELLO', 'hello', 'wrapper', 'Error'], '`@shout` replaces `greeting` with `wrapper`, which turns the result into capitals.'),
        out(`from functools import reduce\nnums = [3, 8, 1, 6]\nr = reduce(lambda a, b: a + b, map(lambda n: n * 10, filter(lambda n: n > 2, nums)))\nprint(r)`, ['170', '180', '17', '[30, 80, 60]'], '`filter` keeps 3, 8 and 6; `map` multiplies them by 10 and `reduce` adds them up: 30 + 80 + 60 = 170.'),
      ],
    },
    // ───────────── Day 20 ─────────────
    {
      id: 'py-venv',
      t: 'Virtual environments',
      d: 'One environment per project with venv, so one project’s dependencies never break another.',
      guide: [
        { h: 'The problem they solve', p: [
          'Picture two projects: one needs Django 4 and the other Django 5. If you install everything into the system Python, one of them breaks.',
          'A virtual environment is a folder with its own Python and its own packages. Each project has its own and they do not step on each other.' ] },
        { h: 'Creating and activating an environment', p: [
          '`python -m venv .venv` creates the environment in the `.venv` folder. Then you activate it; the terminal prompt will show `(.venv)` at the start.' ],
          code: `# create\npython -m venv .venv\n\n# activate on macOS and Linux\nsource .venv/bin/activate\n\n# activate on Windows (PowerShell)\n.venv\\Scripts\\Activate.ps1\n\n# leave the environment\ndeactivate` },
        { h: 'Installing and sharing dependencies', p: [
          'With the environment active, `pip install` installs only inside it. When you are done, save the list with `pip freeze > requirements.txt`.',
          'The `.venv` folder does not go into Git: add it to `.gitignore` and everyone recreates it with `pip install -r requirements.txt`.' ],
          code: `pip install flask requests\npip freeze > requirements.txt\n\n# in .gitignore\n.venv/` },
        { h: 'Checking which Python is in use', p: [
          'If a package will not import, check which interpreter you are using. With an environment active, `sys.prefix` points to the environment folder.',
          'Editors such as VS Code let you pick the environment’s interpreter so autocompletion and running use the same packages.' ],
          code: `import sys\nprint(sys.executable)                 # path of the Python in use\nprint(sys.prefix != sys.base_prefix)  # True if an environment is active` },
        { h: 'Real example: setting up a new project', real: true, p: [
          'These are the steps you would follow when starting any professional Python project, for example an app that checks the weather.' ],
          code: `mkdir weather-app\ncd weather-app\npython -m venv .venv\nsource .venv/bin/activate\npip install requests\npip freeze > requirements.txt\necho ".venv/" > .gitignore\ngit init` },
      ],
      x: [
        mc('What is a virtual environment for?', ['To isolate each project’s dependencies', 'To run Python in the browser', 'To make code faster', 'To create virtual machines'], 'Each project can use different versions of the same libraries.'),
        ord('Create a virtual environment in the .venv folder', ['python', '-m', 'venv', '.venv'], ['pip', 'new'], '`-m venv` runs the venv module; the last argument is the folder.'),
        mc('On Windows with PowerShell, how do you activate the `.venv` environment?', ['.venv\\Scripts\\Activate.ps1', 'source .venv/bin/activate', 'activate .venv', 'python .venv'], 'On macOS and Linux you use `source .venv/bin/activate`.'),
        mc('Should you commit the virtual environment folder to Git?', ['No: add it to .gitignore and share requirements.txt', 'Yes, always', 'Only in large projects', 'Only the .py files inside it'], 'The environment is recreated with `pip install -r requirements.txt`.'),
        mc('With the environment active, where does `pip install flask` install?', ['Inside the project’s virtual environment', 'System-wide', 'In the user folder', 'In the cloud'], 'That is why it does not affect other projects.'),
        typ('Type the command that deactivates the virtual environment', `(.venv) $ ___`, 'deactivate', '`deactivate` takes you back to the system Python.'),
        mc('What does `print(sys.prefix != sys.base_prefix)` show with a virtual environment active?', ['True', 'False', 'The Python version', 'None'], 'Inside an environment, `sys.prefix` points to its folder and differs from `sys.base_prefix`.'),
        ord('Save the environment’s dependencies to requirements.txt', ['pip', 'freeze', '>', 'requirements.txt'], ['install', '-r'], '`pip freeze` lists the packages with their versions and `>` redirects that output to a file.'),
      ],
    },
    // ───────────── Day 21 ─────────────
    {
      id: 'py-workshop-sales',
      t: 'Kibi’s workshop: the sales report',
      d: 'Week 3 project: read the sales from a CSV, skip the broken rows, group them by month and save a report as JSON.',
      guide: [
        { h: 'The brief', p: [
          'Kibi writes every sale down in `sales.csv`: date, product and amount. Kibi wants to know how much the shop sells each month and which product is the star, even if the file has the odd badly written row.',
          'This workshop brings week 3 together: files, exceptions, dates, regular expressions and functions as values. Create a folder for the project with its own environment (`python -m venv .venv`): it only uses the standard library, but this way it is ready.' ],
          code: `date,product,amount\n2026-03-02,seeds,4.50\n2026-03-15,hay,7.25\n2026-04-01,seeds,4.50\n2026-04-09,carrot,abc` },
        { h: 'Step 1: read the CSV without breaking', p: [
          '`csv.DictReader` turns each row into a dictionary with the header names as keys. Every value arrives as text.',
          'The last row has `abc` as its amount: `float()` raises `ValueError`, we catch it, report it and move on to the next row with `continue`.' ],
          code: `import csv\n\nsales = []\nwith open("sales.csv", encoding="utf-8") as f:\n    for row in csv.DictReader(f):\n        try:\n            row["amount"] = float(row["amount"])\n        except ValueError:\n            print("Row skipped:", row["date"], row["product"])\n            continue\n        sales.append(row)\nprint(len(sales))  # 3` },
        { h: 'Step 2: group by month', p: [
          '`strptime()` turns the text into a date and `strftime("%Y-%m")` reduces it to year and month, which we use as the key.',
          '`dict.get(key, 0)` returns 0 the first time a month appears, so there is no need to check whether the key exists.' ],
          code: `from datetime import datetime\n\nby_month = {}\nfor s in sales:\n    month = datetime.strptime(s["date"], "%Y-%m-%d").strftime("%Y-%m")\n    by_month[month] = by_month.get(month, 0) + s["amount"]\nprint(by_month)  # {'2026-03': 11.75, '2026-04': 4.5}` },
        { h: 'Step 3: validate dates and find the star product', p: [
          'A regular expression throws out the rows whose date is not in the `YYYY-MM-DD` shape before doing any sums.',
          '`max()` with `key` takes a function: it compares the products by their total and returns the product, not the figure.' ],
          code: `import re\n\nDATE = re.compile(r"\\d{4}-\\d{2}-\\d{2}")\nsales = [s for s in sales if DATE.fullmatch(s["date"])]\n\ntotals = {}\nfor s in sales:\n    totals[s["product"]] = totals.get(s["product"], 0) + s["amount"]\nbest = max(totals, key=lambda p: totals[p])\nprint(best, totals[best])  # seeds 9.0` },
        { h: 'Real example: save the report', real: true, p: [
          'The report is saved as JSON so another program, a spreadsheet or a website can read it. `ensure_ascii=False` keeps accented letters as they are and `indent=2` makes it readable.',
          'If a new CSV arrives every month, the same program produces the report in seconds. That is the kind of work programming takes off your hands.' ],
          code: `import json\n\nreport = {"by_month": by_month, "star_product": best, "valid_sales": len(sales)}\nwith open("report.json", "w", encoding="utf-8") as f:\n    json.dump(report, f, ensure_ascii=False, indent=2)` },
      ],
      x: [
        mc('What does `with open("sales.csv") as f:` do when the block ends?', ['Closes the file, even if there was an error', 'Deletes the file', 'Saves a copy of the file', 'Nothing: you have to close it yourself with close()'], '`with` closes the file when the block ends, also when an exception is raised inside it.'),
        out(`try:\n    amount = float("abc")\nexcept ValueError:\n    amount = 0\nprint(amount)`, ['0', 'abc', 'ValueError', '0.0'], '`float("abc")` raises `ValueError`; the `except` catches it and assigns the integer 0.'),
        fill(`from datetime import datetime\nd = datetime.___("2026-03-15", "%Y-%m-%d")\nprint(d.month)  # 3`, ['strptime', 'strftime', 'parse', 'fromtext'], '`strptime` reads text and turns it into a date (p for parse). `strftime` does the opposite.'),
        out(`from datetime import datetime\nd = datetime(2026, 4, 9)\nprint(d.strftime("%Y-%m"))`, ['2026-04', '2026-4', '04-2026', '2026-04-09'], '`%m` always writes the month with two digits, and the format only asks for year and month.'),
        out(`totals = {}\nfor p in ["seeds", "hay", "seeds"]:\n    totals[p] = totals.get(p, 0) + 1\nprint(totals)`, ["{'seeds': 2, 'hay': 1}", "{'seeds': 1, 'hay': 1}", "{'hay': 1, 'seeds': 2}", 'KeyError'], '`get(p, 0)` gives 0 the first time, so there is no `KeyError`. The dictionary keeps the keys in the order they appear.'),
        out(`import re\nprint(bool(re.fullmatch(r"\\d{4}-\\d{2}", "2026-3")))`, ['False', 'True', 'None', '2026-3'], '`\\d{2}` needs two digits and the month only has one. `fullmatch` needs the whole text to match.'),
        out(`totals = {"seeds": 9.0, "hay": 7.25}\nprint(max(totals, key=lambda p: totals[p]))`, ['seeds', '9.0', 'hay', '7.25'], 'Looping over a dictionary goes through its keys. `key` compares by total, but `max()` returns the key.'),
        out(`rows = ["2026-03-02;4.50", "2026-03-20;x", "2026-04-01;3.00", "2026-03-31;1.50"]\nby_month = {}\nfor row in rows:\n    date, amount = row.split(";")\n    try:\n        by_month[date[:7]] = by_month.get(date[:7], 0) + float(amount)\n    except ValueError:\n        continue\nprint(by_month)`, ["{'2026-03': 6.0, '2026-04': 3.0}", "{'2026-03': 4.5, '2026-04': 3.0}", 'ValueError', "{'2026-03': 6.0}"], 'The row with `x` fails in `float()` before anything is assigned, and it is skipped. March adds up 4.50 + 1.50 = 6.0 and April, 3.0.'),
      ],
    },
    // ───────────── Day 22 ─────────────
    {
      id: 'py-classes',
      t: 'Classes and objects',
      d: 'Creating your own types with class: __init__, self, attributes, methods and special methods.',
      guide: [
        { h: 'Classes and objects', p: [
          'A class is a blueprint that describes data (attributes) and behaviour (methods). Each object created from it is an instance with its own values.',
          '`__init__` runs when the object is created and sets up its attributes. `self` is the instance itself: with `self.name` you store a value on it.' ],
          code: `class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        return f"{self.name} says woof"\n\nrex = Dog("Rex", 3)\nprint(rex.bark())  # Rex says woof\nprint(rex.age)     # 3` },
        { h: 'Class and instance attributes', p: [
          'An instance attribute (`self.x`) belongs to each object. A class attribute is defined in the body of the class and is shared by every instance.',
          'Use them for shared constants or counters. Careful with lists: if a list is a class attribute, every instance modifies the same one.' ],
          code: `class Counter:\n    total = 0  # class attribute: shared\n\n    def __init__(self):\n        Counter.total += 1\n        self.id = Counter.total  # instance attribute\n\na = Counter()\nb = Counter()\nprint(a.id, b.id, Counter.total)  # 1 2 2` },
        { h: 'Inheritance and super()', p: [
          'With `class Child(Parent)` the child class gets all the parent’s methods and can override them.',
          '`super()` calls the parent’s method. It is most often used in `__init__` to reuse the setup.' ],
          code: `class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return "..."\n\nclass Cat(Animal):\n    def __init__(self, name, indoor):\n        super().__init__(name)\n        self.indoor = indoor\n\n    def speak(self):\n        return "meow"\n\nkitty = Cat("Kitty", True)\nprint(kitty.name, kitty.speak())  # Kitty meow` },
        { h: 'Special methods and dataclasses', p: [
          'Methods with double underscores change how the object behaves with Python’s tools: `__str__` when printing it, `__len__` with `len()` and `__eq__` when comparing with `==`.',
          'The `@dataclass` decorator generates `__init__`, `__repr__` and `__eq__` automatically for classes that only hold data.' ],
          code: `from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\np = Point(1, 2)\nprint(p)                 # Point(x=1, y=2)\nprint(p == Point(1, 2))  # True` },
        { h: 'Real example: a shopping cart', real: true, p: [
          'An online shop needs to store the products in the cart and work out the total. A class keeps the data and the operations in one place.' ],
          code: `class Cart:\n    def __init__(self):\n        self.items = []\n\n    def add(self, product, price, quantity=1):\n        self.items.append((product, price, quantity))\n\n    def total(self):\n        return sum(price * qty for _, price, qty in self.items)\n\n    def __str__(self):\n        return f"Cart with {len(self.items)} products: €{self.total():.2f}"\n\nc = Cart()\nc.add("Book", 12.50)\nc.add("Pen", 1.20, 3)\nprint(c)  # Cart with 2 products: €16.10` },
      ],
      x: [
        fill(`class Dog:\n    def ___(self, name):\n        self.name = name`, ['__init__', 'constructor', 'init', '__new__'], '`__init__` is the method that runs when the object is created.'),
        mc('What does `self` stand for inside a method?', ['The current instance of the object', 'The parent class', 'A global variable', 'The current module'], '`self` is the specific object the method is called on.'),
        out(`class Cat:\n    def __init__(self, n):\n        self.n = n\n\n    def speak(self):\n        return self.n + " says meow"\n\nprint(Cat("Tom").speak())`, ['Tom says meow', 'meow', 'n says meow', 'Error'], 'The object stores "Tom" in `self.n` and `speak()` uses it.'),
        fill(`class Animal:\n    pass\n\nclass Fish(___):\n    pass`, ['Animal', 'extends Animal', ':Animal', '<Animal>'], 'To inherit, you put the parent class in parentheses.'),
        out(`class A:\n    def hi(self):\n        return "A"\n\nclass B(A):\n    def hi(self):\n        return "B" + super().hi()\n\nprint(B().hi())`, ['BA', 'B', 'A', 'AB'], 'B returns "B" and adds what the parent’s method returns, "A".'),
        out(`class Counter:\n    total = 0\n\n    def __init__(self):\n        Counter.total += 1\n\nCounter()\nCounter()\nprint(Counter.total)`, ['2', '0', '1', 'Error'], '`total` is a class attribute, shared by every instance, and two were created.'),
        mc('Which method defines the text shown by `print(obj)`?', ['__str__', '__print__', 'toString', '__text__'], '`__str__` returns the readable representation of the object.'),
        out(`class Account:\n    def __init__(self, balance=0):\n        self.balance = balance\n\n    def deposit(self, x):\n        self.balance += x\n        return self\n\na = Account(10).deposit(5).deposit(20)\nprint(a.balance)`, ['35', '10', '25', 'Error'], 'Each `deposit` returns `self`, so the calls chain on the same object: 10 + 5 + 20 = 35.'),
      ],
    },
    // ───────────── Day 23 ─────────────
    {
      id: 'py-inheritance',
      t: 'Inheritance and dataclasses',
      d: 'Reusing classes with inheritance and super(), when to prefer composition and saving code with @dataclass.',
      guide: [
        { h: 'Inheriting from another class', p: [
          'A child class inherits the attributes and methods of its parent class and can change the ones it needs. `Offer` is a `Product` with a discount: there is no need to repeat what `Product` already does.',
          '`super().__init__(...)` runs the parent’s `__init__` so it still sets up the shared attributes. Without that line, `self.name` and `self.price` would not exist.' ],
          code: `class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def final_price(self):\n        return self.price\n\nclass Offer(Product):\n    def __init__(self, name, price, discount):\n        super().__init__(name, price)\n        self.discount = discount\n\n    def final_price(self):\n        return round(self.price * (1 - self.discount), 2)\n\nprint(Offer("Hay", 8.0, 0.25).final_price())  # 6.0` },
        { h: 'isinstance and the lookup order', p: [
          'An `Offer` is also a `Product`, but not the other way round. `isinstance()` checks this and is the right way to ask about an object’s type.',
          'When you call a method, Python looks for it first in the object’s class and, if it is not there, in its parent. That order is called the MRO and you can see it in `__mro__`.' ],
          code: `o = Offer("Hay", 8.0, 0.25)\nprint(isinstance(o, Product))                  # True\nprint(isinstance(Product("Seeds", 4.5), Offer))  # False\nprint(Offer.__mro__[1].__name__)               # Product` },
        { h: 'Inheritance or composition?', p: [
          'Use inheritance when the phrase "is a" makes sense: an offer is a product. If "has a" sounds more natural, use composition: a cart has products, so it keeps a list of them.',
          'Deep hierarchies become hard to change. When in doubt, composition is usually the more flexible choice.' ],
          code: `class Cart:\n    def __init__(self):\n        self.products = []  # has products: composition\n\n    def total(self):\n        return sum(p.final_price() for p in self.products)` },
        { h: '@dataclass: data classes without repeating yourself', p: [
          'Many classes only hold data. `@dataclass` writes `__init__`, `__repr__` (what `print` shows) and `__eq__` (comparison with `==`) for you, from the attributes and their types.',
          'A list as a default value is written with `field(default_factory=list)`; otherwise every object would share the same list, just like with default arguments in functions.' ],
          code: `from dataclasses import dataclass, field\n\n@dataclass\nclass Customer:\n    name: str\n    purchases: int = 0\n    tags: list = field(default_factory=list)\n\nana = Customer("Ana")\nprint(ana)                     # Customer(name='Ana', purchases=0, tags=[])\nprint(ana == Customer("Ana"))  # True` },
        { h: 'frozen and order', p: [
          'With `frozen=True` the object cannot be changed once it is created, like a tuple with names. With `order=True` objects can be compared with `<` and `>`, field by field and in order.' ],
          code: `from dataclasses import dataclass\n\n@dataclass(frozen=True, order=True)\nclass Version:\n    major: int\n    minor: int\n\nprint(Version(1, 10) > Version(1, 2))  # True\n# Version(2, 0).major = 3 would raise FrozenInstanceError` },
        { h: 'Real example: the shop catalogue', real: true, p: [
          'Dataclasses can be inherited too. The catalogue mixes normal products and offers, and the loop calls `final_price()` without asking what type each one is: every object knows how to work out its own price.' ],
          code: `from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n\n    def final_price(self):\n        return self.price\n\n@dataclass\nclass Offer(Product):\n    discount: float = 0.1\n\n    def final_price(self):\n        return round(self.price * (1 - self.discount), 2)\n\ncatalogue = [Product("Seeds", 4.5), Offer("Hay", 8.0, 0.25)]\nfor p in catalogue:\n    print(f"{p.name}: {p.final_price():.2f} €")\n# Seeds: 4.50 €\n# Hay: 6.00 €` },
      ],
      x: [
        fill(`class Product:\n    pass\n\nclass Offer(___):\n    pass  # Offer inherits from Product`, ['Product', 'super', 'self', 'Product()'], 'The parent class goes in brackets, by name and without calling it.'),
        mc('What is `super().__init__(name, price)` for in a child class?', ['To run the parent class’s __init__ instead of repeating its code', 'To create a second object', 'To delete the parent’s attributes', 'To stop other classes inheriting from it'], '`super()` gives access to the parent class; its `__init__` sets up the shared attributes.'),
        out(`class A:\n    def hello(self):\n        return "A"\n\nclass B(A):\n    pass\n\nprint(B().hello())`, ['A', 'B', 'None', 'AttributeError'], '`B` does not define `hello`, so Python looks for it in its parent `A`.'),
        out(`class A:\n    pass\n\nclass B(A):\n    pass\n\nprint(isinstance(B(), A), isinstance(A(), B))`, ['True False', 'True True', 'False True', 'False False'], 'An object of the child class is also an object of the parent, but not the other way round.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int = 0\n\nprint(Point(3))`, ['Point(x=3, y=0)', 'Point(3)', '<__main__.Point object>', '(3, 0)'], '`@dataclass` generates a `__repr__` with the name and value of every field, including the default ones.'),
        mc('A `Cart` keeps the products someone is going to buy. Which relationship fits?', ['Composition: the cart has a list of products', 'Inheritance: Cart inherits from Product', 'Inheritance: Product inherits from Cart', 'Neither: a global variable is better'], 'A cart is not a product: it has products. "Has a" calls for composition.'),
        fill(`from dataclasses import dataclass, field\n\n@dataclass\nclass Order:\n    lines: list = ___(default_factory=list)`, ['field', 'list', 'dataclass', 'default'], '`field(default_factory=list)` creates a new list for every order instead of sharing one.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n\n    def final(self):\n        return self.price\n\n@dataclass\nclass Offer(Product):\n    discount: float = 0.5\n\n    def final(self):\n        return super().final() * (1 - self.discount)\n\nitems = [Product("a", 4.0), Offer("b", 6.0), Offer("c", 10.0, 0.1)]\nprint(sum(p.final() for p in items), Offer("b", 6.0) == items[1])`, ['16.0 True', '20.0 True', '16.0 False', '13.0 True'], '4.0 + 6.0 × 0.5 + 10.0 × 0.9 = 16.0. Dataclasses are compared by their fields, so two offers with the same data are equal.'),
      ],
    },
    // ───────────── Day 24 ─────────────
    {
      id: 'py-pandas',
      t: 'Data analysis with pandas',
      d: 'Mean and median with statistics, and tables with pandas: reading a CSV, filtering, adding columns and grouping.',
      guide: [
        { h: 'Measures of central tendency', p: [
          'The mean is the sum divided by the count, the median is the middle value of the sorted data and the mode is the value that appears most often.',
          'The median copes better with extreme values: with salaries, a few very high ones push the mean up but barely move the median.' ],
          code: `import statistics as st\n\nsalaries = [1200, 1300, 1250, 1400, 9000]\nprint(st.mean(salaries))    # 2830\nprint(st.median(salaries))  # 1300` },
        { h: 'Series and DataFrames', p: [
          'Pandas is the go-to library for analysing tabular data. A `Series` is a column with an index and a `DataFrame` is a table with several columns.',
          'By convention it is imported as `pd`.' ],
          code: `import pandas as pd\n\ndf = pd.DataFrame({\n    "product": ["coffee", "tea", "juice"],\n    "price": [1.8, 1.5, 2.5],\n    "sold": [120, 45, 60],\n})\nprint(df.shape)           # (3, 3)\nprint(df["price"].max())  # 2.5` },
        { h: 'Reading and exploring data', p: [
          '`pd.read_csv("sales.csv")` loads a CSV. To explore it, `head()` shows the first rows, `info()` the types and missing values, and `describe()` the statistics of each numeric column.' ],
          code: `df = pd.read_csv("sales.csv")\nprint(df.head())      # first 5 rows\ndf.info()             # columns, types and missing values\nprint(df.describe())  # mean, min, max...` },
        { h: 'Selecting and filtering', p: [
          '`df["col"]` selects one column and `df[["a", "b"]]` several. To filter rows, use a condition: `df[df["price"] > 2]`.',
          'Combine conditions with `&` (and) and `|` (or), each one in parentheses.' ],
          code: `cheap = df[df["price"] < 2]\nprint(cheap["product"].tolist())  # ['coffee', 'tea']\n\npopular = df[(df["price"] < 2) & (df["sold"] > 100)]\nprint(len(popular))  # 1` },
        { h: 'New columns and grouping', p: [
          'You can create calculated columns from other ones. `groupby()` groups the rows by a column and lets you sum, count or average each group.' ],
          code: `df["revenue"] = df["price"] * df["sold"]\nprint(df["revenue"].sum())  # 433.5\n\nsales = pd.DataFrame({"shop": ["A", "B", "A"], "total": [100, 50, 30]})\nprint(sales.groupby("shop")["total"].sum().to_dict())  # {'A': 130, 'B': 50}` },
        { h: 'Real example: a monthly sales report', real: true, p: [
          'A typical business task: from a CSV with all the year’s sales, work out the total, the number of sales and the average ticket for each month, and export it to Excel.' ],
          code: `import pandas as pd\n\nsales = pd.read_csv("sales_2025.csv", parse_dates=["date"])\nsales["month"] = sales["date"].dt.month\n\nreport = (sales.groupby("month")["amount"]\n               .agg(["sum", "count", "mean"])\n               .round(2))\nprint(report)\nreport.to_excel("monthly_report.xlsx")` },
      ],
      x: [
        out(`import statistics as st\nprint(st.mean([2, 4, 6]))`, ['4', '12', '6', '3'], 'The mean is the sum (12) divided by the count (3).'),
        mc('Which measure is the middle value of the sorted data?', ['The median', 'The mean', 'The mode', 'The standard deviation'], 'With [1, 3, 9], the median is 3.'),
        mc('Which pandas structure represents a table with rows and columns?', ['DataFrame', 'Series', 'Array', 'Table'], 'A `Series` is a single column.'),
        fill(`import pandas as pd\ndf = pd.___("sales.csv")`, ['read_csv', 'open_csv', 'load', 'csv'], '`read_csv` loads a CSV file into a DataFrame.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"x": [1, 2, 3]})\nprint(df["x"].sum())`, ['6', '3', '[1, 2, 3]', 'x'], 'You select the column as a Series and add it up.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"age": [20, 35, 50]})\nprint(len(df[df["age"] > 30]))`, ['2', '1', '3', '0'], 'The filter keeps the rows with 35 and 50.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"a": [1, 2, 3]})\ndf["b"] = df["a"] * 10\nprint(df["b"].tolist())`, ['[10, 20, 30]', '[1, 2, 3]', '[10]', '60'], 'The operation applies to the whole column and creates a new one.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"shop": ["A", "B", "A", "B"], "total": [10, 5, 20, 1]})\nr = df.groupby("shop")["total"].sum()\nprint(r["A"], r["B"])`, ['30 6', '10 5', '15 3', '36'], '`groupby` groups the rows by shop and `sum` adds up each group: A = 10 + 20 and B = 5 + 1.'),
      ],
    },
    // ───────────── Day 25 ─────────────
    {
      id: 'py-apis',
      t: 'Using APIs',
      d: 'Asking other services for data over HTTP with requests: methods, status codes, JSON and errors.',
      guide: [
        { h: 'What is an API?', p: [
          'An API is a contract that lets two programs talk to each other. Web APIs receive HTTP requests at a URL and answer with data, almost always in JSON.',
          'That is how your program gets the weather, exchange rates, maps or translations without copying anything by hand.' ] },
        { h: 'Methods and status codes', p: [
          'The method states the action: GET reads, POST creates, PUT or PATCH update and DELETE deletes.',
          'The status code sums up the result: 200 OK, 201 created, 400 bad request, 401 unauthorized, 404 not found and 500 server error.' ],
          code: `import requests\n\nr = requests.get("https://api.github.com/users/octocat", timeout=10)\nprint(r.status_code)              # 200\nprint(r.headers["Content-Type"])  # application/json; charset=utf-8` },
        { h: 'Parameters, headers and JSON', p: [
          'Query parameters are passed with `params` and requests builds the URL for you. Many APIs ask for a key in the headers, with `headers`.',
          '`r.json()` turns the response into Python dictionaries and lists.' ],
          code: `import requests\n\nr = requests.get(\n    "https://api.github.com/search/repositories",\n    params={"q": "language:python", "sort": "stars", "per_page": 3},\n    timeout=10,\n)\nfor repo in r.json()["items"]:\n    print(repo["full_name"], repo["stargazers_count"])` },
        { h: 'Errors and limits', p: [
          'Network requests can fail: the server does not answer, returns an error or rate-limits you for making too many requests (code 429).',
          '`raise_for_status()` raises an exception if the code is an error, and `try/except` lets you react without the program stopping.' ],
          code: `import requests\n\ntry:\n    r = requests.get("https://api.github.com/users/does-not-exist-12345", timeout=10)\n    r.raise_for_status()\nexcept requests.HTTPError as e:\n    print("HTTP error:", e.response.status_code)  # HTTP error: 404\nexcept requests.RequestException:\n    print("Could not connect")` },
        { h: 'Real example: tomorrow’s weather', real: true, p: [
          'Open-Meteo is a free weather API that needs no key. With a few lines you get the forecast for any city from its coordinates.' ],
          code: `import requests\n\nr = requests.get(\n    "https://api.open-meteo.com/v1/forecast",\n    params={"latitude": 51.51, "longitude": -0.13,\n            "daily": "temperature_2m_max,temperature_2m_min", "timezone": "auto"},\n    timeout=10,\n)\nr.raise_for_status()\nd = r.json()["daily"]\nprint(f"Tomorrow in London: {d['temperature_2m_min'][1]} to {d['temperature_2m_max'][1]} °C")` },
      ],
      x: [
        mc('Which HTTP method is used to read data?', ['GET', 'POST', 'DELETE', 'PUT'], 'GET asks for a resource without changing it.'),
        mc('What does status code 404 mean?', ['Resource not found', 'All good', 'Server error', 'Created'], 'The 4xx codes are client errors.'),
        mc('Which HTTP method creates a new resource?', ['POST', 'GET', 'HEAD', 'OPTIONS'], 'POST sends data to the server to create something.'),
        fill(`r = requests.get(url, timeout=10)\ndata = r.___()`, ['json', 'text', 'parse', 'dict'], '`.json()` turns the JSON body of the response into dictionaries and lists.'),
        mc('Which code does an API usually return when it creates a resource?', ['201', '200', '204', '301'], '201 Created means something new was created.'),
        mc('Which data format do almost all REST APIs use?', ['JSON', 'CSV', 'Plain text', 'Binary'], 'JSON is lightweight and easy to read from any language.'),
        out(`import requests\nr = requests.get(\n    "https://example.com/search",\n    params={"q": "python", "page": 2},\n)\nprint(r.url)`, ['https://example.com/search?q=python&page=2', 'https://example.com/search', 'https://example.com/search?python&2', 'Error'], 'requests adds the parameters to the URL and encodes them for you.'),
        mc('An API answers with code 429. What should you do?', ['Wait and retry with fewer requests: you went over the limit', 'Repeat the request immediately in a loop', 'Switch GET for POST', 'Nothing: 429 means everything went fine'], '429 Too Many Requests means you went over the limit. Many APIs say how long to wait in the Retry-After header.'),
      ],
    },
    // ───────────── Day 26 ─────────────
    {
      id: 'py-scraping',
      t: 'Extracting data from websites',
      d: 'Downloading pages and pulling data out of the HTML with BeautifulSoup, without hammering the site.',
      guide: [
        { h: 'What is web scraping?', p: [
          'Web scraping means downloading web pages and pulling the data you care about out of their HTML: prices, headlines, timetables...',
          'It is used when a site does not offer an API. If there is an API, use it: it is more stable and designed for programs.' ] },
        { h: 'Downloading the HTML with requests', p: [
          '`requests.get(url)` downloads the page. `status_code` tells you whether it went well (200) and `.text` holds the HTML.',
          'Always set a `timeout` so the program does not wait forever if the server does not answer.' ],
          code: `import requests\n\nr = requests.get("https://example.com", timeout=10)\nprint(r.status_code)  # 200\nprint(r.text[:15])    # <!doctype html>` },
        { h: 'Parsing the HTML with BeautifulSoup', p: [
          'BeautifulSoup (`pip install beautifulsoup4`) turns the HTML into a tree you can walk through. `find()` returns the first element, `find_all()` all of them and `select()` accepts CSS selectors.',
          '`.text` or `.get_text(strip=True)` give the text, and `element["href"]` reads an attribute.' ],
          code: `from bs4 import BeautifulSoup\n\nhtml = """<ul>\n  <li class="p">Coffee <span>1.80</span></li>\n  <li class="p">Tea <span>1.50</span></li>\n</ul>"""\nsoup = BeautifulSoup(html, "html.parser")\nfor li in soup.select("li.p"):\n    name = li.contents[0].strip()\n    price = float(li.span.text)\n    print(name, price)\n# Coffee 1.8\n# Tea 1.5` },
        { h: 'Doing it responsibly', p: [
          'Check the site’s `robots.txt` file and terms of use, do not collect personal data and wait between requests with `time.sleep(1)` so you do not overload the server.',
          'Pages change: if the HTML changes, your scraper stops working. Check that `find()` did not return `None` before using the result.' ] },
        { h: 'Real example: the headlines of a news site', real: true, p: [
          'A script that reads the first five headlines on Hacker News with their links. It is the basis of any automatic news digest.' ],
          code: `import time\nimport requests\nfrom bs4 import BeautifulSoup\n\nurl = "https://news.ycombinator.com/"\nr = requests.get(url, timeout=10, headers={"User-Agent": "sintaxis-course/1.0"})\nsoup = BeautifulSoup(r.text, "html.parser")\n\nfor link in soup.select(".titleline > a")[:5]:\n    print("-", link.get_text(strip=True))\n    print("  ", link["href"])\ntime.sleep(1)  # pause before the next request` },
      ],
      x: [
        mc('Which library is commonly used to parse HTML in Python?', ['BeautifulSoup', 'NumPy', 'Flask', 'Pygame'], 'BeautifulSoup turns the HTML into a tree that is easy to walk through.'),
        mc('What does `requests.get(url).text` return?', ['The response content as text', 'A BeautifulSoup object', 'The status code', 'A list of links'], '`.status_code` would give the HTTP code, such as 200.'),
        fill(`soup = BeautifulSoup(html, "html.parser")\ntitles = soup.___("h2")  # every h2`, ['find_all', 'find', 'get', 'select_one'], '`find_all` returns every element; `find` only the first one.'),
        out(`from bs4 import BeautifulSoup\nsoup = BeautifulSoup("<p>Hello</p>", "html.parser")\nprint(soup.p.text)`, ['Hello', '<p>Hello</p>', 'p', 'None'], '`.text` extracts the text without the tags.'),
        mc('How do you get the URL of an `a` link with BeautifulSoup?', ['link["href"]', 'link.url', 'link.text', 'link.link()'], 'HTML attributes are read like dictionary keys.'),
        mc('Which file says which parts of a site may be crawled?', ['robots.txt', 'sitemap.css', 'index.html', '.htaccess'], 'Respecting robots.txt is part of responsible scraping.'),
        out(`from bs4 import BeautifulSoup\nhtml = '<a href="/a">A</a><a href="/b">B</a>'\nsoup = BeautifulSoup(html, "html.parser")\nprint([a["href"] for a in soup.find_all("a")])`, ["['/a', '/b']", "['A', 'B']", '/a', "['/a']"], '`find_all` returns every link and `a["href"]` reads the attribute of each one.'),
        out(`from bs4 import BeautifulSoup\nhtml = "<div><p>Hello</p></div>"\nsoup = BeautifulSoup(html, "html.parser")\nprint(soup.find("span") is None, soup.div.p.text)`, ['True Hello', 'False Hello', 'None Hello', 'Error'], '`find` returns `None` when nothing matches (there is no span). `soup.div.p` walks down to the paragraph inside the div.'),
      ],
    },
    // ───────────── Day 27 ─────────────
    {
      id: 'py-build-api',
      t: 'Building your own API',
      d: 'A REST API with Flask: routes, JSON, status codes and validating what comes in.',
      guide: [
        { h: 'Web frameworks in Python', p: [
          'A web framework receives the browser’s HTTP requests and decides what to answer. In Python the most popular are Flask (small and flexible), Django (complete, with an ORM and an admin panel) and FastAPI (fast and built for APIs).',
          'Today we use Flask: `pip install flask`.' ] },
        { h: 'Your first Flask app', p: [
          'Each route is linked to a function with the `@app.route()` decorator. Whatever the function returns is what the browser shows.',
          'Start the development server with `flask --app app run --debug` and open http://127.0.0.1:5000 in your browser.' ],
          code: `# app.py\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef home():\n    return "<h1>Hello from Flask</h1>"\n\n@app.route("/hello/<name>")\ndef hello(name):\n    return f"Hello, {name}"` },
        { h: 'Reading and creating resources', p: [
          '`GET /tasks` lists them all and `GET /tasks/<id>` returns one. `POST /tasks` creates a new one from the JSON body, which you read with `request.get_json()`.',
          'Return the right code: 201 when creating and 404 if the resource does not exist.' ],
          code: `from flask import Flask, jsonify, request, abort\n\napp = Flask(__name__)\ntasks = [{"id": 1, "title": "Learn Flask", "done": False}]\n\n@app.get("/tasks")\ndef list_tasks():\n    return jsonify(tasks)\n\n@app.get("/tasks/<int:id>")\ndef show(id):\n    task = next((t for t in tasks if t["id"] == id), None)\n    if task is None:\n        abort(404)\n    return jsonify(task)\n\n@app.post("/tasks")\ndef create():\n    data = request.get_json()\n    task = {"id": len(tasks) + 1, "title": data["title"], "done": False}\n    tasks.append(task)\n    return jsonify(task), 201` },
        { h: 'Updating, deleting and validating', p: [
          '`PUT` or `PATCH` update and `DELETE` deletes. Always validate what comes in: if a field is missing, answer 400 with a clear message instead of letting the server fail with a 500.' ],
          code: `@app.delete("/tasks/<int:id>")\ndef delete(id):\n    global tasks\n    tasks = [t for t in tasks if t["id"] != id]\n    return "", 204\n\n@app.post("/notes")\ndef create_note():\n    data = request.get_json(silent=True) or {}\n    if "text" not in data:\n        return jsonify(error="The text field is missing"), 400\n    return jsonify(text=data["text"]), 201` },
        { h: 'Testing the API', p: [
          'You can test it with `curl` from the terminal, with tools like Postman or with Flask’s test client, which does not need the server running.',
          'FastAPI is a modern alternative: it validates data with type hints and generates interactive documentation at `/docs`.' ],
          code: `# in the terminal\ncurl -X POST http://127.0.0.1:5000/tasks \\\n     -H "Content-Type: application/json" \\\n     -d '{"title": "Review"}'\n\n# in a test\nwith app.test_client() as c:\n    r = c.post("/tasks", json={"title": "Review"})\n    print(r.status_code)  # 201` },
        { h: 'Real example: a link shortener', real: true, p: [
          'A tiny bit.ly-style service: it receives a long URL, generates a short code and redirects whoever visits that code.' ],
          code: `import secrets\nfrom flask import Flask, jsonify, request, redirect, abort\n\napp = Flask(__name__)\nlinks = {}\n\n@app.post("/shorten")\ndef shorten():\n    url = (request.get_json(silent=True) or {}).get("url")\n    if not url or not url.startswith("http"):\n        return jsonify(error="Invalid URL"), 400\n    code = secrets.token_urlsafe(4)\n    links[code] = url\n    return jsonify(short=f"{request.host_url}{code}"), 201\n\n@app.get("/<code>")\ndef go(code):\n    if code not in links:\n        abort(404)\n    return redirect(links[code])` },
      ],
      x: [
        mc('What is Flask?', ['A microframework for building web applications', 'A database', 'A code editor', 'A package manager'], 'Flask is lightweight and grows with extensions.'),
        fill(`@app.___("/")\ndef home():\n    return "Hello"`, ['route', 'get_route', 'path', 'url'], '`@app.route` links a URL to the function.'),
        mc('With the route `/hello/<name>`, what value does `name` get when you visit `/hello/Ana`?', ['"Ana"', '"<name>"', '"hello"', 'None'], 'The parts between `< >` are URL variables.'),
        fill(`from flask import Flask, ___\n\napp = Flask(__name__)\n\n@app.route("/api")\ndef api():\n    return jsonify({"ok": True})`, ['jsonify', 'json', 'dumps', 'JSON'], '`jsonify` creates an HTTP response with JSON content.'),
        mc('How do you read the JSON sent in a POST request with Flask?', ['request.get_json()', 'request.body', 'request.json_read()', 'input()'], 'It returns the body already turned into a dictionary.'),
        mc('In `return jsonify(task), 201`, what is the 201?', ['The HTTP status code of the response', 'The task id', 'The server port', 'The size of the response'], '201 means the resource was created.'),
        mc('A POST arrives without the required "title" field. What should you answer?', ['400 with a message explaining what is missing', '500 Server error', '200 with an empty object', '404 Not found'], '400 Bad Request means the client’s request is wrong, and the message helps them fix it.'),
        out(`from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.get("/tasks/<int:id>")\ndef show(id):\n    if id > 3:\n        return jsonify(error="Not found"), 404\n    return jsonify(id=id)\n\nwith app.test_client() as c:\n    r = c.get("/tasks/7")\n    print(r.status_code, r.get_json()["error"])`, ['404 Not found', '200 Not found', '404 None', '500 Error'], '7 is greater than 3, so the route returns the error JSON with code 404, and `get_json()` turns it into a dictionary.'),
      ],
    },
    // ───────────── Day 28 ─────────────
    {
      id: 'py-sqlite',
      t: 'Databases with SQLite',
      d: 'Storing data in a real database with sqlite3: tables, INSERT, SELECT, safe parameters and transactions.',
      guide: [
        { h: 'Why a database?', p: [
          'A CSV or a JSON file is fine for a little data. When there are thousands of rows, several people writing at once or questions like "how much has each customer spent?", a database is faster and safer.',
          'SQLite keeps the whole database in a single file and comes with Python as the `sqlite3` module: nothing to install. Phones, browsers and a huge number of apps use it.',
          'Queries are written in SQL, a language made for data. The basics take an afternoon to learn and work the same way in PostgreSQL or MySQL.' ] },
        { h: 'Connecting and creating a table', p: [
          '`connect()` opens the file (or creates it) and `":memory:"` creates a temporary database that disappears when it is closed, perfect for tests.',
          'A table defines columns with their types. `INTEGER PRIMARY KEY` numbers each row automatically and `NOT NULL` stops that value being left empty.' ],
          code: `import sqlite3\n\ncon = sqlite3.connect("shop.db")  # ":memory:" for a temporary database\ncon.execute("""\n    CREATE TABLE IF NOT EXISTS products (\n        id INTEGER PRIMARY KEY,\n        name TEXT NOT NULL,\n        price REAL NOT NULL\n    )\n""")` },
        { h: 'Inserting with parameters', p: [
          'Values go into the query as `?` and are passed separately in a tuple. Never put user data in with an f-string: someone could type SQL that changes the query (SQL injection).',
          '`executemany()` inserts many rows at once. Changes are not saved until `commit()`.' ],
          code: `con.execute("INSERT INTO products (name, price) VALUES (?, ?)", ("Seeds", 4.5))\ncon.executemany(\n    "INSERT INTO products (name, price) VALUES (?, ?)",\n    [("Hay", 7.25), ("Carrot", 1.25)],\n)\ncon.commit()` },
        { h: 'Querying', p: [
          '`SELECT` picks columns, `WHERE` filters and `ORDER BY` sorts. Looping over the result gives one tuple per row.',
          '`fetchone()` returns just the first row, handy for counts like `COUNT(*)` or `SUM()`.' ],
          code: `query = "SELECT name, price FROM products WHERE price > ? ORDER BY price"\nfor name, price in con.execute(query, (2,)):\n    print(name, price)\n# Seeds 4.5\n# Hay 7.25\nprint(con.execute("SELECT COUNT(*), SUM(price) FROM products").fetchone())  # (3, 13.0)` },
        { h: 'Transactions with with', p: [
          'Using the connection with `with` groups the changes into a transaction: if everything goes well they are saved, and if there is an error they are all undone. That way an operation is never left half done.' ],
          code: `with con:  # commit if all goes well, rollback if there is an error\n    con.execute("UPDATE products SET price = price * 0.9 WHERE name = ?", ("Hay",))\ncon.close()` },
        { h: 'Real example: how much each customer spends', real: true, p: [
          '`GROUP BY` gathers each customer’s rows and `SUM()` adds up their amounts. What in Python would be a loop with a dictionary is one line in SQL, and it works just as well with a million orders.' ],
          code: `import sqlite3\n\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE orders (customer TEXT, amount REAL)")\nwith con:\n    con.executemany(\n        "INSERT INTO orders VALUES (?, ?)",\n        [("Ana", 12.5), ("Leo", 4.0), ("Ana", 7.5)],\n    )\nquery = "SELECT customer, SUM(amount) FROM orders GROUP BY customer ORDER BY 2 DESC"\nfor customer, total in con.execute(query):\n    print(f"{customer}: {total:.2f} €")\n# Ana: 20.00 €\n# Leo: 4.00 €` },
      ],
      x: [
        mc('Which module brings SQLite with Python, with nothing to install?', ['sqlite3', 'pymongo', 'sqlalchemy', 'sqlite'], 'The `sqlite3` module is part of the standard library.'),
        mc('What does `con.commit()` do?', ['Saves the pending changes for good', 'Closes the connection', 'Undoes the latest changes', 'Creates the database'], 'Until `commit()`, the changes belong to an open transaction and have not been saved.'),
        fill(`con.execute("INSERT INTO products (name, price) VALUES (___, ?)", ("Seeds", 4.5))`, ['?', '%s', '{}', '$1'], 'In `sqlite3` each value is marked with `?` and passed separately. `%s` and `$1` belong to other connectors.'),
        mc('Why should you not put the text a user types into the query with an f-string?', ['Because it allows SQL injection: the user could change the query', 'Because f-strings do not work with SQLite', 'Because the query is slower', 'Because SQLite does not accept text'], 'With `?`, SQLite always treats the data as a value and never as part of the SQL.'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE t (n INTEGER)")\ncon.executemany("INSERT INTO t VALUES (?)", [(1,), (2,), (3,)])\nprint(con.execute("SELECT SUM(n) FROM t").fetchone())`, ['(6,)', '6', '[6]', '(1, 2, 3)'], '`fetchone()` returns a row as a tuple, even when it has a single column.'),
        typ('Complete the query that reads every column of the products table', `SELECT ___ FROM products`, '*', 'The asterisk means "all columns".'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE p (name TEXT, price REAL)")\ncon.executemany("INSERT INTO p VALUES (?, ?)", [("a", 3.0), ("b", 1.0), ("c", 2.0)])\nprint([n for (n,) in con.execute("SELECT name FROM p ORDER BY price")])`, ["['b', 'c', 'a']", "['a', 'b', 'c']", "['a', 'c', 'b']", "[('b',), ('c',), ('a',)]"], '`ORDER BY price` sorts from cheapest to most expensive, and `(n,)` unpacks each row’s tuple.'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE orders (customer TEXT, amount REAL)")\ntry:\n    with con:\n        con.execute("INSERT INTO orders VALUES (?, ?)", ("Ana", 10.0))\n        con.execute("INSERT INTO orders VALUES (?, ?, ?)", ("Leo", 5.0, 1))\nexcept sqlite3.OperationalError:\n    pass\nprint(con.execute("SELECT COUNT(*) FROM orders").fetchone()[0])`, ['0', '1', '2', 'OperationalError'], 'The second insert passes 3 values to a 2-column table and fails. `with con` undoes the whole transaction, including the first insert.'),
      ],
    },
    // ───────────── Day 29 ─────────────
    {
      id: 'py-pytest',
      t: 'Testing your code with pytest',
      d: 'Writing automatic tests with assert and pytest: normal cases, edge cases, exceptions and fixtures.',
      guide: [
        { h: 'Why write tests?', p: [
          'A test is code that checks that other code does what it should. It runs in a second every time you change something and warns you if you broke something that used to work.',
          '`assert` checks a condition: if it is true nothing happens and, if it is false, it raises `AssertionError`. It is the basic building block of any test.' ],
          code: `def price_with_vat(price):\n    return round(price * 1.21, 2)\n\nassert price_with_vat(100) == 121.0\nassert price_with_vat(0) == 0\nprint("All good")  # All good` },
        { h: 'Your first test with pytest', p: [
          'Install pytest with `pip install pytest` inside the project’s environment. It only looks at files called `test_*.py` and, inside them, at functions whose names start with `test_`.',
          'Run it with `pytest` in the project folder. It shows a dot for every test that passes and an `F` for every failure, with the value you expected and the one you got.' ],
          code: `# test_prices.py\nfrom prices import price_with_vat\n\ndef test_normal_price():\n    assert price_with_vat(100) == 121.0\n\ndef test_zero_price():\n    assert price_with_vat(0) == 0` },
        { h: 'Edge cases and exceptions', p: [
          'Bugs like to hide at the edges: zero, negative numbers, an empty list. Test them on purpose.',
          '`pytest.raises` checks that an exception is raised. Decimals are not exact, so they are compared with `pytest.approx`.' ],
          code: `import pytest\nfrom prices import price_with_vat\n\ndef test_negative_price():\n    with pytest.raises(ValueError):\n        price_with_vat(-5)  # the function must raise ValueError\n\ndef test_decimals():\n    assert 0.1 + 0.2 == pytest.approx(0.3)` },
        { h: 'Many cases with parametrize', p: [
          'Instead of copying the same test with other numbers, `@pytest.mark.parametrize` runs it once for every case in the list and, if one fails, tells you which.' ],
          code: `import pytest\nfrom prices import price_with_vat\n\n@pytest.mark.parametrize("price, expected", [(100, 121.0), (10, 12.1), (0, 0)])\ndef test_price_with_vat(price, expected):\n    assert price_with_vat(price) == expected` },
        { h: 'Real example: testing the shop’s database', real: true, p: [
          'A fixture prepares what the tests need. pytest runs it before every test that asks for it by naming it as a parameter.',
          'Here every test gets an empty in-memory database, so no test depends on another or touches the real data. Whatever comes after `yield` runs at the end, to clean up.' ],
          code: `import sqlite3\nimport pytest\n\n@pytest.fixture\ndef con():\n    con = sqlite3.connect(":memory:")\n    con.execute("CREATE TABLE products (name TEXT, price REAL)")\n    yield con\n    con.close()\n\ndef test_insert(con):\n    con.execute("INSERT INTO products VALUES (?, ?)", ("Seeds", 4.5))\n    assert con.execute("SELECT COUNT(*) FROM products").fetchone()[0] == 1\n\ndef test_starts_empty(con):\n    assert con.execute("SELECT COUNT(*) FROM products").fetchone()[0] == 0` },
      ],
      x: [
        mc('What happens with `assert price_with_vat(100) == 121.0` if the function returns 120?', ['It raises AssertionError', 'It prints False and carries on', 'It returns 120', 'Nothing'], 'If the `assert` condition is false, `AssertionError` is raised; pytest shows it as a failed test.'),
        mc('How does pytest find the tests?', ['It looks for test_*.py files and functions starting with test_', 'It runs every function in the project', 'It reads a list in requirements.txt', 'It only runs main.py'], 'pytest follows a naming convention: `test_*.py` files and `test_*` functions.'),
        out(`def double(n):\n    return n * 2\n\ntry:\n    assert double(3) == 5\n    print("ok")\nexcept AssertionError:\n    print("fails")`, ['fails', 'ok', '6', 'AssertionError'], '`double(3)` is 6, not 5: the `assert` raises `AssertionError` before reaching `print("ok")`.'),
        fill(`import pytest\n\ndef test_division():\n    with pytest.___(ZeroDivisionError):\n        1 / 0`, ['raises', 'catch', 'expect', 'error'], '`pytest.raises` makes the test pass only if that exception is raised inside the block.'),
        mc('Why does `assert 0.1 + 0.2 == 0.3` fail?', ['Because floating-point decimals are not exact: the sum gives 0.30000000000000004', 'Because assert does not allow sums', 'Because 0.3 is a string', 'Because you have to use is instead of =='], '`float` values are stored in binary with a tiny error. To compare them you use `pytest.approx` or `math.isclose`.'),
        typ('Type the decorator that turns the function into a fixture', `import pytest\n\n@pytest.___\ndef cart():\n    return []`, 'fixture', '`@pytest.fixture` marks the function; tests receive it by listing `cart` as a parameter.'),
        out(`import math\nprint(0.1 + 0.2 == 0.3, math.isclose(0.1 + 0.2, 0.3))`, ['False True', 'True True', 'False False', 'True False'], '`==` compares the exact value, which does not match. `math.isclose` allows a tiny difference, like `pytest.approx`.'),
        out(`def discount(total):\n    if total < 0:\n        raise ValueError("negative total")\n    return total * 0.1 if total >= 50 else 0\n\ncases = [(100, 10.0), (49, 0), (50, 0), (-1, None)]\nfailures = 0\nfor total, expected in cases:\n    try:\n        if discount(total) != expected:\n            failures += 1\n    except ValueError:\n        pass\nprint(failures)`, ['1', '0', '2', 'ValueError'], 'Only the case (50, 0) fails: from 50 there is a discount and the function gives 5.0. -1 raises `ValueError`, which is caught and does not count as a failure.'),
      ],
    },
    // ───────────── Day 30 ─────────────
    {
      id: 'py-workshop-shop',
      t: 'Kibi’s workshop: the complete shop',
      d: 'Final project: Kibi’s shop with dataclasses, an SQLite database, a Flask API and pytest tests.',
      guide: [
        { h: 'The brief', p: [
          'Four weeks later, Kibi’s shop needs something serious: a catalogue stored in a database and an API so a website or an app can look up products and place orders.',
          'We put the last week together with everything before it. Each file has a single job, which makes it easier to understand and to test piece by piece.' ],
          code: `shop/\n├── .venv/\n├── requirements.txt   # flask, pytest\n├── model.py           # the Product class\n├── data.py            # functions that talk to SQLite\n├── api.py             # Flask routes\n└── test_shop.py       # tests` },
        { h: 'Step 1: the model', p: [
          'A dataclass describes a product. The `available()` method holds the business rule: you can order a positive quantity that does not exceed the stock.' ],
          code: `# model.py\nfrom dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n    stock: int = 0\n\n    def available(self, quantity):\n        return 0 < quantity <= self.stock` },
        { h: 'Step 2: the data in SQLite', p: [
          '`data.py` is the only file that knows SQL. If one day you switch databases, this is the only file you touch.',
          '`INSERT OR REPLACE` updates the product if one with the same name already existed, because the name is the primary key.' ],
          code: `# data.py\nimport sqlite3\nfrom model import Product\n\ndef connect(path="shop.db"):\n    con = sqlite3.connect(path)\n    con.execute("CREATE TABLE IF NOT EXISTS products (name TEXT PRIMARY KEY, price REAL, stock INTEGER)")\n    return con\n\ndef save(con, p):\n    with con:\n        con.execute("INSERT OR REPLACE INTO products VALUES (?, ?, ?)", (p.name, p.price, p.stock))\n\ndef find(con, name):\n    row = con.execute("SELECT name, price, stock FROM products WHERE name = ?", (name,)).fetchone()\n    return Product(*row) if row else None` },
        { h: 'Step 3: the API', p: [
          'Two routes: one to see a product and one to order it. Every response carries its status code: 404 if it does not exist, 400 if there is no stock and 201 if the order is created.',
          'One improvement is left for you: subtract the ordered quantity from the stock and store it with `save()`.' ],
          code: `# api.py\nfrom flask import Flask, jsonify, request\nfrom data import connect, find\n\napp = Flask(__name__)\n\n@app.get("/products/<name>")\ndef show(name):\n    p = find(connect(), name)\n    if p is None:\n        return jsonify(error="Not found"), 404\n    return jsonify(name=p.name, price=p.price, stock=p.stock)\n\n@app.post("/orders")\ndef order():\n    body = request.get_json()\n    p = find(connect(), body.get("product", ""))\n    if p is None or not p.available(body.get("quantity", 0)):\n        return jsonify(error="Out of stock"), 400\n    return jsonify(total=round(p.price * body["quantity"], 2)), 201` },
        { h: 'Real example: test the shop before opening it', real: true, p: [
          'The tests use an in-memory database, so they can run a thousand times without touching `shop.db`. With `pytest` in the terminal you know in a second whether the shop still works after every change.' ],
          code: `# test_shop.py\nimport pytest\nfrom model import Product\nfrom data import connect, save, find\n\n@pytest.fixture\ndef con():\n    return connect(":memory:")\n\ndef test_save_and_find(con):\n    save(con, Product("Seeds", 4.5, 10))\n    assert find(con, "Seeds") == Product("Seeds", 4.5, 10)\n\ndef test_missing(con):\n    assert find(con, "Kiwi") is None\n\ndef test_out_of_stock():\n    assert not Product("Hay", 7.25, 2).available(3)` },
        { h: 'Where to go next', p: [
          'You have gone from `print("Hello, world")` to an application with a model, a database, an API and tests. It is the same structure many professional projects use, just smaller.',
          'Next steps: put the project in Git, run a formatter such as `ruff` or `black`, add a web page that calls the API and publish it on a hosting service. Pick a problem of your own and solve it with what you know: it is the fastest way to keep learning.' ] },
      ],
      x: [
        mc('Why does the shop split model.py, data.py and api.py?', ['So each file has one job and can be tested on its own', 'Because Python does not allow long files', 'To make the program faster', 'Because Flask requires it'], 'Separating responsibilities makes code easier to understand, change and test.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n    stock: int = 0\n\n    def available(self, quantity):\n        return 0 < quantity <= self.stock\n\np = Product("Seeds", 4.5, 3)\nprint(p.available(3), p.available(0), p.available(4))`, ['True False False', 'True True False', 'False False False', 'True False True'], '3 is within the stock; 0 is not a positive quantity and 4 goes over the stock.'),
        fill(`con.execute("SELECT price FROM products WHERE name = ?", (___,))`, ['name', '"name"', 'f"{name}"', '*name'], 'The value goes in a separate tuple. `"name"` would look for the literal word "name".'),
        mc('The API answers `404` to `GET /products/Kiwi`. What does it mean?', ['That there is no product called Kiwi', 'That the server is down', 'That the JSON body is missing', 'That the order was created'], '404 means "not found". A server that is down would give a 5xx error.'),
        out(`def total(price, quantity):\n    return round(price * quantity, 2)\n\nprint(total(4.5, 3), total(7.25, 2))`, ['13.5 14.5', '13.50 14.50', '13 14', '7.5 9.25'], '4.5 × 3 = 13.5 and 7.25 × 2 = 14.5. `round` does not add trailing zeros: a format like `:.2f` would.'),
        mc('What is the advantage of the fixture using `connect(":memory:")`?', ['Every test starts with an empty database and never touches the real one', 'The tests are saved in shop.db', 'There is no need to create the table', 'The database is shared by all the tests'], 'A fresh in-memory database for each test makes the tests independent and repeatable.'),
        typ('Type the status code the API returns when an order is created', `return jsonify(total=13.5), ___`, '201', '201 means "created". 200 is a generic "OK".'),
        out(`import sqlite3\nfrom dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n    stock: int = 0\n\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE products (name TEXT PRIMARY KEY, price REAL, stock INTEGER)")\nfor p in [Product("Seeds", 4.5, 10), Product("Hay", 7.25), Product("Seeds", 4.0, 8)]:\n    with con:\n        con.execute("INSERT OR REPLACE INTO products VALUES (?, ?, ?)", (p.name, p.price, p.stock))\nrow = con.execute("SELECT COUNT(*), SUM(stock) FROM products").fetchone()\nprint(row, Product(*con.execute("SELECT * FROM products WHERE name = 'Seeds'").fetchone()))`, ["(2, 8) Product(name='Seeds', price=4.0, stock=8)", "(3, 18) Product(name='Seeds', price=4.5, stock=10)", "(2, 18) Product(name='Seeds', price=4.0, stock=8)", 'sqlite3.IntegrityError'], 'The second "Seeds" replaces the first because the name is the primary key. Two products are left: Seeds with stock 8 and Hay with 0.'),
      ],
    },
  ],
}))(Sintaxis);
