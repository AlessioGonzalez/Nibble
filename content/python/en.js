/* Python · English */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('python', 'en', {
  tag: 'From zero to analysing data and building APIs in 30 days, with the easiest language to read.',
  days: [
    // ───────────── Day 1 ─────────────
    {
      t: 'Introduction',
      d: 'What Python is, your first program, indentation and comments.',
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
      t: 'Variables and built-in functions',
      d: 'Storing data in variables, naming them well and using input(), len() and type conversions.',
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
      t: 'Operators',
      d: 'Arithmetic, comparison, logical and assignment operators, and the order they run in.',
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
      t: 'Strings',
      d: 'Text in Python: quotes, indexes, slicing, f-strings and the most useful methods.',
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
      t: 'Lists',
      d: 'Creating, looping over, changing, slicing and sorting lists, and the trap of copies.',
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
    // ───────────── Day 6 ─────────────
    {
      t: 'Tuples',
      d: 'Immutable collections, unpacking and when to prefer a tuple over a list.',
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
        { h: 'Functions that return several things', p: [
          'When a function returns several values, it actually returns a tuple. `divmod(a, b)` is a built-in example: it gives the quotient and the remainder at once.' ],
          code: `quotient, remainder = divmod(17, 5)\nprint(quotient, remainder)  # 3 2\nprint(divmod(17, 5))        # (3, 2)` },
        { h: 'Real example: order lines', real: true, p: [
          'Each line of an order has a name, a price and a quantity. Storing it as a tuple stops it from being changed by mistake after it has been invoiced.' ],
          code: `line1 = ("Keyboard", 25.0, 2)\nline2 = ("Mouse", 12.5, 1)\nname, price, units = line1\nprint(name, price * units)      # Keyboard 50.0\ntotal = line1[1] * line1[2] + line2[1] * line2[2]\nprint("Order total:", total)    # Order total: 62.5` },
      ],
      x: [
        mc('Which collection is immutable?', ['tuple', 'list', 'dict', 'set'], 'A tuple cannot be modified after it is created.'),
        out(`t = (10, 20, 30)\nprint(t[1])`, ['20', '10', '30', 'Error'], 'Tuples are indexed just like lists, starting at 0.'),
        out(`x, y = (3, 4)\nprint(x * y)`, ['12', '7', '(3, 4)', 'Error'], 'Unpacking assigns 3 to `x` and 4 to `y`.'),
        fill(`point = (3, 4)\n___ = point\nprint(x, y)  # 3 4`, ['x, y', 'x y', 'x; y', 'x & y'], 'To unpack, write the variables separated by commas on the left of `=`.'),
        out(`t = (1, 2, 3)\nt[0] = 9\nprint(t)`, ['TypeError', '(9, 2, 3)', '(1, 2, 3)', 'None'], 'Tuples do not allow item assignment, so Python raises `TypeError`.'),
        out(`print(type((5)), type((5,)))`, ["<class 'int'> <class 'tuple'>", "<class 'tuple'> <class 'tuple'>", "<class 'int'> <class 'int'>", 'Error'], 'Parentheses alone do not create a tuple; the comma does.'),
        out(`t = (1, 2) + (3,)\nprint(t)`, ['(1, 2, 3)', '(1, 2, (3,))', 'Error', '(4, 2)'], '`+` concatenates tuples and creates a new one; the originals do not change.'),
        out(`data = (10, 20, 30, 40)\na, *b, c = data\nprint(a + c, len(b), data.index(30))`, ['50 2 2', '50 2 3', '30 3 2', 'Error'], '`a` takes 10, `c` takes 40 and `*b` collects [20, 30]. The 30 is at index 2.'),
      ],
    },
    // ───────────── Day 7 ─────────────
    {
      t: 'Sets',
      d: 'Collections without duplicates: creating, changing and combining them with union, intersection and difference.',
      guide: [
        { h: 'What is a set?', p: [
          'A set is an unordered collection with no repeated items. It is written with braces: `{1, 2, 3}`. If you add duplicates, only one is kept.',
          'An empty set is created with `set()`: `{}` creates an empty dictionary.',
          'Checking whether something is in a set with `in` is very fast, even with millions of items. That is why sets are used for "already seen" lists.' ],
          code: `tags = {"python", "web", "python", "data"}\nprint(len(tags))      # 3\nprint("web" in tags)  # True\nempty = set()\nprint(type({}))       # <class 'dict'>` },
        { h: 'Adding and removing', p: [
          '`add()` adds an item. To remove one, `remove()` raises `KeyError` if it does not exist, whereas `discard()` does nothing. Use `discard()` when you are not sure.',
          'Because they have no order, sets do not support indexes: `s[0]` is an error.' ],
          code: `s = {1, 2, 3}\ns.add(4)\ns.discard(10)   # not there: nothing happens\ns.remove(1)\nprint(s)        # {2, 3, 4}\n# s.remove(10)  # KeyError: 10` },
        { h: 'Set operations', p: [
          'Union `|` (all), intersection `&` (the shared ones), difference `-` (those in one but not the other) and symmetric difference `^` (those in only one of them).',
          '`issubset()` checks whether every item of one set is in another.' ],
          code: `a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(a | b)  # {1, 2, 3, 4, 5}\nprint(a & b)  # {3, 4}\nprint(a - b)  # {1, 2}\nprint(a ^ b)  # {1, 2, 5}\nprint({1, 2}.issubset(a))  # True` },
        { h: 'Removing duplicates from a list', p: [
          'Turning a list into a set removes repeated items instantly. Because sets have no order, use `sorted()` if you want a stable, ordered result.' ],
          code: `emails = ["ana@x.com", "luis@x.com", "ana@x.com"]\nunique = sorted(set(emails))\nprint(unique)  # ['ana@x.com', 'luis@x.com']` },
        { h: 'Real example: returning customers', real: true, p: [
          'A shop wants to know which customers bought in January and in February, which ones stopped buying and which ones are new. That is three set operations.' ],
          code: `january = {"Ana", "Luis", "Eva", "Marta"}\nfebruary = {"Luis", "Marta", "Pedro"}\nloyal = january & february\nlost = january - february\nnew = february - january\nprint(sorted(loyal))  # ['Luis', 'Marta']\nprint(sorted(lost))   # ['Ana', 'Eva']\nprint(sorted(new))    # ['Pedro']` },
      ],
      x: [
        out(`s = {1, 2, 2, 3, 3, 3}\nprint(len(s))`, ['3', '6', '4', '1'], 'A set removes duplicates: {1, 2, 3} is left.'),
        mc('How do you create an empty set?', ['set()', '{}', '[]', 'set[]'], '`{}` creates an empty dictionary, not a set.'),
        out(`s = {1, 2}\ns.add(2)\ns.add(5)\nprint(len(s))`, ['3', '4', '2', 'Error'], 'Adding a 2 that already exists changes nothing; the 5 is added.'),
        out(`a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)`, ['{2, 3}', '{1, 2, 3, 4}', '{1}', '{4}'], '`&` is the intersection: the items found in both.'),
        fill(`a = {1, 2, 3}\nb = {3, 4}\nprint(a ___ b)  # {1, 2, 3, 4}`, ['|', '&', '-', '^'], '`|` is the union: it combines every item of both sets without repeats.'),
        out(`a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a - b)`, ['{1}', '{4}', '{1, 4}', '{2, 3}'], 'The difference keeps the items of `a` that are not in `b`.'),
        out(`print(sorted(set("banana")))`, ["['a', 'b', 'n']", "['b', 'a', 'n', 'a', 'n', 'a']", "{'a', 'b', 'n'}", 'abn'], 'The set removes duplicates and `sorted()` returns an ordered list.'),
        out(`a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(len(a | b), sorted(a ^ b), {3}.issubset(a & b))`, ['5 [1, 2, 5] True', '7 [1, 2, 5] True', '5 [3, 4] True', '5 [1, 2, 5] False'], 'The union has 5 items, the symmetric difference leaves 1, 2 and 5, and 3 is in the intersection {3, 4}.'),
      ],
    },
    // ───────────── Day 8 ─────────────
    {
      t: 'Dictionaries',
      d: 'Key-value pairs: accessing, adding, deleting, looping and nesting data.',
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
          '`keys()` gives the keys, `values()` the values and `items()` the pairs. With `for key, value in d.items()` you go through everything at once (you will look at loops in depth on day 10).',
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
    // ───────────── Day 9 ─────────────
    {
      t: 'Conditionals',
      d: 'Making decisions with if, elif and else, truthy and falsy values, and the ternary operator.',
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
    // ───────────── Day 10 ─────────────
    {
      t: 'Loops',
      d: 'Repeating tasks with for and while, range(), enumerate(), break and continue.',
      guide: [
        { h: 'The for loop', p: [
          '`for` goes through the items of any sequence: a list, a string, a dictionary... On each pass, the variable takes the next item.',
          'Use it when you know what you are going to loop over. It is the loop you will use most in Python.' ],
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
    // ───────────── Day 11 ─────────────
    {
      t: 'Functions',
      d: 'Define functions with def, return results, default parameters, *args, **kwargs and scope.',
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
      t: 'Modules',
      d: 'Organize code into modules, the ways to import, and the standard library: math, random and more.',
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
        { h: 'if __name__ == "__main__"', p: [
          'When you run a file directly, the variable `__name__` is `"__main__"`. When another file imports it, it holds the module name.',
          'That is why test code or the entry point goes inside that `if`: importing the module then runs nothing by surprise.' ],
          code: `def main():\n    print("Running the program")\n\nif __name__ == "__main__":\n    main()` },
        { h: 'Real example: generating a strong password', real: true, p: [
          'Do not use `random` for passwords and tokens, because it is predictable. The standard `secrets` module is built for this, and `string` provides the letters and digits ready to use.' ],
          code: `import secrets\nimport string\n\ndef generate_password(length=12):\n    characters = string.ascii_letters + string.digits + "!@#$%"\n    password = ""\n    for _ in range(length):\n        password += secrets.choice(characters)\n    return password\n\nprint(generate_password())  # e.g. k7R!x2Qm@9Lz` },
      ],
      x: [
        fill(`___ math\nprint(math.pi)`, ['import', 'include', 'using', 'require'], '`import` loads a module in Python.'),
        out(`import math\nprint(math.sqrt(25))`, ['5.0', '5', '25', 'Error'], '`math.sqrt` always returns a `float`.'),
        mc('What does `from math import pi` do?', ['Imports only the name pi so you can use it directly', 'Imports the whole module under the name pi', 'Creates a variable pi inside math', 'Downloads the math module'], 'Afterwards you can write `pi` without the `math.` prefix.'),
        fill(`import statistics ___ st\nprint(st.mean([1, 2, 3]))`, ['as', 'to', '=', 'alias'], '`as` gives the imported module an alias.'),
        mc('What does `random.randint(1, 6)` return?', ['An integer between 1 and 6, both included', 'An integer between 1 and 5', 'A decimal between 1 and 6', 'Always 1'], 'Unlike `range`, `randint` includes the upper limit.'),
        out(`from math import floor, ceil\nprint(floor(2.5), ceil(2.1))`, ['2 3', '3 3', '2 2', '3 2'], '`floor` rounds down and `ceil` rounds up, whatever the decimals.'),
        mc('What is `if __name__ == "__main__":` for?', ['To run code only when the file is run directly, not when it is imported', 'To declare the mandatory main function', 'To import the main module', 'To check the Python version'], 'When the file is imported, `__name__` holds the module name and that block does not run.'),
        out(`import math as m\nfrom statistics import mean\nsides = [3, 4]\nhypotenuse = m.sqrt(sides[0] ** 2 + sides[1] ** 2)\nprint(hypotenuse, mean(sides + [hypotenuse]))`, ['5.0 4.0', '5 4', '5.0 4', '25.0 4.0'], '√(9 + 16) = 5.0, a `float`. The mean of [3, 4, 5.0] is 4.0: since there is a `float`, the result is one too.'),
      ],
    },
    // ───────────── Day 13 ─────────────
    {
      t: 'List comprehension',
      d: 'Build lists, dictionaries and sets in one line, with filters and transformations.',
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
    // ───────────── Day 14 ─────────────
    {
      t: 'Higher-order functions',
      d: 'Functions as values: lambda, map, filter, sorted with key, closures and decorators.',
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
          'They are used to log calls, measure time, check permissions or cache results without touching the original function. Flask, which you will see on day 26, uses them for routes.' ],
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
    // ───────────── Day 15 ─────────────
    {
      t: 'Type errors',
      d: 'Read a traceback and recognize the most common errors: SyntaxError, NameError, TypeError, ValueError...',
      guide: [
        { h: 'How to read a traceback', p: [
          'When something fails, Python shows a traceback. Read it from the bottom up: the last line gives the error type and its message; right above it you see the file, the line and the code that failed.',
          'Pasting that last line into a search engine often takes you straight to the solution.' ],
          code: `Traceback (most recent call last):\n  File "shop.py", line 3, in <module>\n    total = price * quantity\nNameError: name 'quantity' is not defined` },
        { h: 'SyntaxError and IndentationError', p: [
          'A `SyntaxError` means the code is badly written and Python does not even start running it: a missing colon, parenthesis or quote.',
          '`IndentationError` is a special case: the indentation does not line up. Do not mix tabs and spaces; set your editor to use 4 spaces.' ],
          code: `if age >= 18      # SyntaxError: expected ':'\n    print("adult")\n\ndef greet():\nprint("hello")    # IndentationError: expected an indented block` },
        { h: 'NameError, TypeError and ValueError', p: [
          '`NameError`: you use a name that does not exist (a typo or a variable you have not created yet).',
          '`TypeError`: the operation makes no sense for that type, like adding text and a number. `ValueError`: the type is right but the value is not, like `int("thirty")`.' ],
          code: `print(name)      # NameError: name 'name' is not defined\n"Age: " + 30     # TypeError: can only concatenate str (not "int") to str\nint("thirty")    # ValueError: invalid literal for int() with base 10: 'thirty'\nlen(5)           # TypeError: object of type 'int' has no len()` },
        { h: 'Other common errors', p: [
          '`IndexError`: index outside the list. `KeyError`: key that is not in the dictionary. `AttributeError`: a method or attribute that object does not have.',
          '`ZeroDivisionError`: division by zero. `ModuleNotFoundError`: the module does not exist or is not installed (or is misspelled).' ],
          code: `colors = ["red", "green"]\ncolors[2]         # IndexError: list index out of range\n{"a": 1}["b"]     # KeyError: 'b'\n"hello".push("!") # AttributeError: 'str' object has no attribute 'push'\n10 / 0            # ZeroDivisionError: division by zero\nimport numpi      # ModuleNotFoundError: No module named 'numpi'` },
        { h: 'Real example: debugging an average', real: true, p: [
          'The grades arrive from a form as text. Adding them directly raises a `TypeError`, and the traceback makes it clear: `sum()` tries to add an `int` and a `str`. The fix is to convert them first.' ],
          code: `grades = ["7", "8.5", "6"]\n# average = sum(grades) / len(grades)\n# TypeError: unsupported operand type(s) for +: 'int' and 'str'\nnumbers = [float(g) for g in grades]\naverage = sum(numbers) / len(numbers)\nprint(round(average, 2))  # 7.17` },
      ],
      x: [
        mc('Which error does `print(name)` raise if `name` does not exist?', ['NameError', 'TypeError', 'SyntaxError', 'ValueError'], 'Python cannot find any variable with that name.'),
        mc('Which error does `"5" + 5` raise?', ['TypeError', 'ValueError', 'NameError', 'No error'], 'You cannot add a `str` and an `int`; convert one of them first.'),
        mc('Which error does `[1, 2, 3][5]` raise?', ['IndexError', 'KeyError', 'ValueError', 'TypeError'], 'Index 5 does not exist in a list of 3 items.'),
        mc('Which error does `int("hello")` raise?', ['ValueError', 'TypeError', 'NameError', 'SyntaxError'], 'The type is right (a text), but its value cannot be turned into a number.'),
        out(`print(1 / 0)`, ['ZeroDivisionError', '0', 'inf', 'None'], 'Dividing by zero raises `ZeroDivisionError`.'),
        mc('Which error does `"hello".push("!")` raise?', ['AttributeError', 'TypeError', 'NameError', 'SyntaxError'], 'Strings have no method called `push`.'),
        typ('Write the type of error this code raises', `x = 5\nif x > 3\n    print(x)\n# Error: ___`, 'SyntaxError', 'The `:` at the end of the `if` is missing, so the code is badly written and Python never runs it.'),
        mc('Which error is raised first when this code runs?', ['TypeError', 'ZeroDivisionError', 'KeyError', 'ValueError'], 'The second line already fails: `"1.20"` is a text and cannot be added to the `float` 0.95. The division by zero never runs.', `prices = {"bread": "1.20", "milk": 0.95}\ntotal = prices["bread"] + prices["milk"]\nprint(total / 0)`),
      ],
    },
    // ───────────── Day 16 ─────────────
    {
      t: 'Date and time',
      d: 'The datetime module: create dates, format them, parse text and work out differences.',
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
    // ───────────── Day 17 ─────────────
    {
      t: 'Exception handling',
      d: 'Handle errors with try, except, else and finally, and raise your own with raise.',
      guide: [
        { h: 'try and except', p: [
          'Some errors are out of your hands: the user types letters where you expected a number, a file does not exist or the network goes down. `try` runs the code that may fail and `except` decides what to do if it does, instead of the program stopping.',
          'Always catch the specific type (`except ValueError`). A bare `except:` also catches errors you did not expect and hides real bugs.' ],
          code: `text = "twelve"\ntry:\n    number = int(text)\nexcept ValueError:\n    print("That is not a number")\n    number = 0\nprint(number)  # 0` },
        { h: 'Several exceptions and as', p: [
          'You can chain several `except` blocks, one per error type. Python uses the first one that matches.',
          'With `except ErrorType as e` you store the exception in `e` to show or log its message.' ],
          code: `def divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "Cannot divide by zero"\n    except TypeError as e:\n        return f"Wrong type: {e}"\n\nprint(divide(10, 2))  # 5.0\nprint(divide(10, 0))  # Cannot divide by zero` },
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
        fill(`___:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("error")`, ['try', 'do', 'catch', 'test'], 'The block that may fail goes inside `try`.'),
        out(`try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("error")\nfinally:\n    print("end")`, ['error\nend', 'end', 'error', 'inf\nend'], 'Dividing by zero raises `ZeroDivisionError`, which is caught. `finally` always runs.'),
        mc('When does the `finally` block run?', ['Always, error or not', 'Only if there is an error', 'Only if there are no errors', 'Never, it is optional'], 'It is used to release resources such as files or connections.'),
        out(`try:\n    n = int("abc")\nexcept ValueError:\n    n = -1\nprint(n)`, ['-1', 'abc', '0', 'Error'], 'The conversion fails, `ValueError` is caught and -1 is assigned.'),
        out(`try:\n    print("a")\nexcept ValueError:\n    print("b")\nelse:\n    print("c")`, ['a\nc', 'a\nb', 'a', 'a\nb\nc'], 'There was no error, so after the `try` the `else` runs.'),
        fill(`def divide(a, b):\n    if b == 0:\n        ___ ValueError("b cannot be 0")\n    return a / b`, ['raise', 'throw', 'except', 'error'], 'In Python exceptions are raised with `raise`. `throw` belongs to Java and JavaScript.'),
        out(`try:\n    x = [1, 2][5]\nexcept KeyError:\n    print("key")\nexcept IndexError:\n    print("index")`, ['index', 'key', 'key\nindex', 'IndexError'], 'Index 5 does not exist, so `IndexError` is raised and the second `except` catches it.'),
        out(`def convert(values):\n    total = 0\n    for v in values:\n        try:\n            total += int(v)\n        except ValueError:\n            total -= 1\n        finally:\n            total += 10\n    return total\n\nprint(convert(["5", "a", "2"]))`, ['36', '6', '26', '37'], '"5" adds 5, "a" takes away 1 and "2" adds 2, and `finally` adds 10 on every pass: 5 - 1 + 2 + 30 = 36.'),
      ],
    },
    // ───────────── Day 18 ─────────────
    {
      t: 'Regular expressions',
      d: 'Search, validate and replace text patterns with the re module.',
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
      t: 'File handling',
      d: 'Read and write text files with open() and with, and work with CSV and JSON.',
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
    // ───────────── Day 20 ─────────────
    {
      t: 'The pip package manager',
      d: 'Install, upgrade and pin PyPI libraries with pip and requirements.txt.',
      guide: [
        { h: 'pip and PyPI', p: [
          'The standard library is large, but Python’s real power lies in PyPI (the Python Package Index), a repository with hundreds of thousands of packages: `requests`, `pandas`, `flask`, `numpy`...',
          'pip is the program that downloads and installs them. It ships with Python. If you have several Python versions, `python -m pip` makes sure you install into the same one you run.' ],
          code: `pip --version\npip install requests\npip install requests==2.32.3   # an exact version\npip install --upgrade requests\npip uninstall requests\npython -m pip install requests  # the pip of THIS Python` },
        { h: 'Seeing what you have installed', p: [
          '`pip list` shows every package with its version and `pip show name` gives details about one: version, dependencies and where it is installed.' ],
          code: `pip list\npip show requests\n# Name: requests\n# Version: 2.32.3\n# Requires: certifi, charset-normalizer, idna, urllib3` },
        { h: 'requirements.txt', p: [
          '`pip freeze > requirements.txt` saves the exact list of packages and versions in the project. It goes into the repository next to the code.',
          'Anyone who clones the project runs `pip install -r requirements.txt` and gets exactly the same versions. That way you avoid the classic "it works on my machine".' ],
          code: `# requirements.txt\nrequests==2.32.3\npython-dateutil==2.9.0\n\n# on another computer\npip install -r requirements.txt` },
        { h: 'Common mistakes', p: [
          '`ModuleNotFoundError` usually means the package is not installed in the Python you are using.',
          'The name you install is not always the name you import: `pip install beautifulsoup4` is imported as `bs4` and `pip install Pillow` as `PIL`.',
          'Only install well-known packages and check the name: there are malicious packages with names almost identical to popular ones.' ],
          code: `pip install beautifulsoup4   # installed like this...\n\nfrom bs4 import BeautifulSoup  # ...and imported like this` },
        { h: 'Real example: exchange rates with requests', real: true, p: [
          'With `requests` you can query a public currency API in three lines. `timeout` stops the program from hanging and `raise_for_status()` raises an error if the response is not OK.' ],
          code: `# pip install requests\nimport requests\n\nr = requests.get("https://api.frankfurter.app/latest?from=EUR&to=USD", timeout=10)\nr.raise_for_status()\ndata = r.json()\nprint("1 EUR =", data["rates"]["USD"], "USD")` },
      ],
      x: [
        mc('What is pip?', ['Python’s package manager', 'A code editor', 'A data type', 'A web framework'], 'pip installs and manages third-party libraries.'),
        ord('Install the requests package', ['pip', 'install', 'requests'], ['get', 'npm'], 'The command is `pip install` followed by the package name.'),
        mc('Where does pip download packages from by default?', ['From PyPI, the Python Package Index', 'From GitHub', 'From npm', 'From the Windows store'], 'PyPI hosts hundreds of thousands of Python packages.'),
        mc('What does `pip freeze > requirements.txt` do?', ['Saves the installed packages and their versions to a file', 'Stops Python from updating', 'Deletes the packages', 'Installs the packages in the file'], 'That way other people can reproduce your environment.'),
        typ('Install the dependencies listed in the file', `pip install ___ requirements.txt`, '-r', '`-r` tells pip to read the list of packages from a file.'),
        mc('Which command shows the installed packages?', ['pip list', 'pip show-all', 'pip ls', 'pip installed'], '`pip show name` gives the details of one specific package.'),
        mc('You run `pip install beautifulsoup4`. How do you import it?', ['from bs4 import BeautifulSoup', 'import beautifulsoup4', 'from beautifulsoup4 import BeautifulSoup', 'import soup'], 'The PyPI package is called beautifulsoup4, but the module it installs is called `bs4`.'),
        mc('Your script fails with `ModuleNotFoundError: No module named \'requests\'`, but `pip install requests` says it is already installed. What is most likely?', ['pip installs into a different Python from the one running the script: use python -m pip install requests', 'requests does not exist on PyPI', 'You have to write import Requests with a capital letter', 'You have to restart the computer'], 'With several Python installations, `pip` and `python` may not match. `python -m pip` uses the pip of the same interpreter.'),
      ],
    },
    // ───────────── Day 21 ─────────────
    {
      t: 'Classes and objects',
      d: 'class, __init__, self, attributes, inheritance, super() and dataclasses.',
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
    // ───────────── Day 22 ─────────────
    {
      t: 'Web scraping',
      d: 'Download pages with requests and extract data with BeautifulSoup.',
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
    // ───────────── Day 23 ─────────────
    {
      t: 'Virtual environments',
      d: 'venv: keep each project’s dependencies isolated.',
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
    // ───────────── Day 24 ─────────────
    {
      t: 'Statistics',
      d: 'statistics and NumPy: mean, median, mode, spread and arrays.',
      guide: [
        { h: 'Measures of central tendency', p: [
          'The mean is the sum divided by the count, the median is the middle value of the sorted data and the mode is the value that appears most often.',
          'The median copes better with extreme values: with salaries, a few very high ones push the mean up but barely move the median.' ],
          code: `import statistics as st\n\nsalaries = [1200, 1300, 1250, 1400, 9000]\nprint(st.mean(salaries))    # 2830\nprint(st.median(salaries))  # 1300` },
        { h: 'Spread: the standard deviation', p: [
          'The standard deviation measures how far the data sits from the mean. Two classes can have the same average grade and very different spreads.',
          '`statistics.pstdev()` computes the deviation of a whole population and `stdev()` that of a sample.' ],
          code: `import statistics as st\n\nclass_a = [5, 5, 5, 5]\nclass_b = [0, 10, 0, 10]\nprint(st.mean(class_a), st.mean(class_b))      # 5 5\nprint(st.pstdev(class_a), st.pstdev(class_b))  # 0.0 5.0` },
        { h: 'NumPy: calculations with arrays', p: [
          'NumPy works with arrays of numbers very fast. Operations apply to every item at once, without loops: that is vectorization.',
          'Careful: with a normal list, `list * 2` repeats it; with an array, it multiplies each item.' ],
          code: `import numpy as np\n\ntemps = np.array([18.5, 21.0, 23.5, 19.0])\nprint(temps.mean())              # 20.5\nprint(temps.max(), temps.min())  # 23.5 18.5\nprint(temps * 9 / 5 + 32)        # the same temperatures in Fahrenheit` },
        { h: 'Filtering with conditions', p: [
          'With NumPy you can use a condition as an index: `arr[arr > 20]` returns the items that meet it.',
          '`np.percentile(data, 90)` gives the value below which 90 % of the data falls, handy for spotting extreme cases.' ],
          code: `import numpy as np\n\nsales = np.array([120, 80, 300, 95, 150])\nprint(sales[sales > 100])  # [120 300 150]\nprint(sales.sum())         # 745` },
        { h: 'Real example: analysing a class’s grades', real: true, p: [
          'A teacher wants a quick summary of the group: the mean, the median and how many passed (grades from 0 to 10).' ],
          code: `import statistics as st\n\ngrades = {"Ana": 8.5, "Luis": 6.0, "Eva": 9.5, "Leo": 4.5, "Sara": 7.0}\nvalues = list(grades.values())\n\nprint("Mean:", st.mean(values))      # Mean: 7.1\nprint("Median:", st.median(values))  # Median: 7.0\npassed = [n for n, g in grades.items() if g >= 5]\nprint(f"Passed: {len(passed)} of {len(grades)}")  # Passed: 4 of 5` },
      ],
      x: [
        out(`import statistics as st\nprint(st.mean([2, 4, 6]))`, ['4', '12', '6', '3'], 'The mean is the sum (12) divided by the count (3).'),
        mc('Which measure is the middle value of the sorted data?', ['The median', 'The mean', 'The mode', 'The standard deviation'], 'With [1, 3, 9], the median is 3.'),
        fill(`import statistics as st\nprint(st.___([1, 2, 2, 3]))  # 2, the most repeated value`, ['mode', 'mean', 'median', 'max'], '`mode` returns the most frequent value.'),
        out(`import numpy as np\na = np.array([1, 2, 3])\nprint(a * 2)`, ['[2 4 6]', '[1, 2, 3, 1, 2, 3]', '[1 2 3 1 2 3]', 'Error'], 'NumPy multiplies each item. With a normal list, `* 2` would repeat it.'),
        out(`import numpy as np\nprint(np.arange(0, 10, 3))`, ['[0 3 6 9]', '[0 3 6]', '[3 6 9]', '[0, 3, 6, 9, 10]'], '`arange` works like `range`, but returns an array.'),
        out(`import numpy as np\nm = np.zeros((2, 3))\nprint(m.shape)`, ['(2, 3)', '(3, 2)', '6', '[2, 3]'], '`shape` gives the rows and columns.'),
        out(`import numpy as np\na = np.array([3, 8, 1, 9])\nprint(a[a > 2])`, ['[3 8 9]', '[8 9]', '[True True False True]', '[3, 8, 9]'], 'A condition used as an index filters the array and keeps the items that meet it.'),
        out(`import statistics as st\ndata = [2, 4, 4, 4, 100]\nprint(st.median(data), st.mode(data), st.mean(data) > 20)`, ['4 4 True', '4 4 False', '22.8 4 True', '4 100 True'], 'The median and the mode are 4, but the 100 pushes the mean up to 22.8. That is why the median is more reliable with extreme values.'),
      ],
    },
    // ───────────── Day 25 ─────────────
    {
      t: 'Pandas',
      d: 'Series, DataFrames, reading CSV, filtering, creating columns and grouping.',
      guide: [
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
        mc('Which pandas structure represents a table with rows and columns?', ['DataFrame', 'Series', 'Array', 'Table'], 'A `Series` is a single column.'),
        fill(`import pandas as pd\ndf = pd.___("sales.csv")`, ['read_csv', 'open_csv', 'load', 'csv'], '`read_csv` loads a CSV file into a DataFrame.'),
        mc('What does `df.head()` show?', ['The first 5 rows', 'The column names', 'The last row', 'The statistics'], 'You can pass another number: `df.head(10)`.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"x": [1, 2, 3]})\nprint(df["x"].sum())`, ['6', '3', '[1, 2, 3]', 'x'], 'You select the column as a Series and add it up.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"age": [20, 35, 50]})\nprint(len(df[df["age"] > 30]))`, ['2', '1', '3', '0'], 'The filter keeps the rows with 35 and 50.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"a": [1, 2], "b": [3, 4]})\nprint(df.shape)`, ['(2, 2)', '(4,)', '2', '(1, 2)'], '2 rows and 2 columns.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"a": [1, 2, 3]})\ndf["b"] = df["a"] * 10\nprint(df["b"].tolist())`, ['[10, 20, 30]', '[1, 2, 3]', '[10]', '60'], 'The operation applies to the whole column and creates a new one.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"shop": ["A", "B", "A", "B"], "total": [10, 5, 20, 1]})\nr = df.groupby("shop")["total"].sum()\nprint(r["A"], r["B"])`, ['30 6', '10 5', '15 3', '36'], '`groupby` groups the rows by shop and `sum` adds up each group: A = 10 + 20 and B = 5 + 1.'),
      ],
    },
    // ───────────── Day 26 ─────────────
    {
      t: 'Python for the web',
      d: 'Flask: routes, parameters, templates and forms.',
      guide: [
        { h: 'Web frameworks in Python', p: [
          'A web framework receives the browser’s HTTP requests and decides what to answer. In Python the most popular are Flask (small and flexible), Django (complete, with an ORM and an admin panel) and FastAPI (fast and built for APIs).',
          'Today we use Flask: `pip install flask`.' ] },
        { h: 'Your first Flask app', p: [
          'Each route is linked to a function with the `@app.route()` decorator. Whatever the function returns is what the browser shows.',
          'Start the development server with `flask --app app run --debug` and open http://127.0.0.1:5000 in your browser.' ],
          code: `# app.py\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef home():\n    return "<h1>Hello from Flask</h1>"\n\n@app.route("/hello/<name>")\ndef hello(name):\n    return f"Hello, {name}"` },
        { h: 'HTML templates', p: [
          'For full pages, Flask uses Jinja templates stored in the `templates` folder. `render_template()` fills them with your data.',
          'In the template, `{{ variable }}` shows a value and `{% for %}` loops over lists. Jinja escapes HTML automatically, which protects against code injection.' ],
          code: `# app.py\nfrom flask import Flask, render_template\n\napp = Flask(__name__)\n\n@app.route("/tasks")\ndef tasks():\n    items = ["Buy bread", "Study Python"]\n    return render_template("tasks.html", tasks=items)\n\n# templates/tasks.html\n# <ul>{% for t in tasks %}<li>{{ t }}</li>{% endfor %}</ul>` },
        { h: 'Forms and HTTP methods', p: [
          'A route can accept several methods: `GET` to show and `POST` to receive data. The form fields arrive in `request.form`.',
          'After handling a POST, redirect with `redirect()` so reloading the page does not resend the form.' ],
          code: `from flask import Flask, request, redirect\n\napp = Flask(__name__)\nmessages = []\n\n@app.route("/contact", methods=["GET", "POST"])\ndef contact():\n    if request.method == "POST":\n        messages.append(request.form["message"])\n        return redirect("/contact")\n    return f"Messages received: {len(messages)}"` },
        { h: 'Real example: a café’s menu', real: true, p: [
          'A café wants to publish its menu on a website that updates by changing a Python list, without touching the HTML.' ],
          code: `from flask import Flask, render_template_string\n\napp = Flask(__name__)\nMENU = [("Coffee", 1.80), ("Tea", 1.50), ("Toast", 2.20)]\n\nTEMPLATE = """\n<h1>Menu</h1>\n<ul>{% for name, price in menu %}\n  <li>{{ name }}: €{{ "%.2f"|format(price) }}</li>\n{% endfor %}</ul>\n"""\n\n@app.route("/")\ndef menu():\n    return render_template_string(TEMPLATE, menu=MENU)` },
      ],
      x: [
        mc('What is Flask?', ['A microframework for building web applications', 'A database', 'A code editor', 'A package manager'], 'Flask is lightweight and grows with extensions.'),
        fill(`@app.___("/")\ndef home():\n    return "Hello"`, ['route', 'get_route', 'path', 'url'], '`@app.route` links a URL to the function.'),
        mc('With the route `/hello/<name>`, what value does `name` get when you visit `/hello/Ana`?', ['"Ana"', '"<name>"', '"hello"', 'None'], 'The parts between `< >` are URL variables.'),
        mc('Which function fills an HTML template from the templates folder?', ['render_template()', 'show_html()', 'template()', 'render()'], 'Templates use Jinja syntax.'),
        fill(`@app.route("/contact", methods=[___])\ndef contact():\n    ...`, ['"GET", "POST"', 'GET, POST', '"get()", "post()"', 'ALL'], '`methods` is a list of strings with the allowed HTTP methods.'),
        mc('Which Python framework is more complete and includes an ORM and an admin panel?', ['Django', 'Flask', 'NumPy', 'Requests'], 'Django follows the "batteries included" philosophy.'),
        mc('After handling a form with POST, why should you return `redirect()`?', ['So reloading the page does not resend the form', 'So the page loads faster', 'Because Flask requires it', 'To clear the form data'], 'It is the Post/Redirect/Get pattern.'),
        out(`from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/double/<int:n>")\ndef double(n):\n    return str(n * 2)\n\nwith app.test_client() as c:\n    print(c.get("/double/21").text)`, ['42', '2121', '21', 'Error'], 'The `<int:n>` converter turns "21" into an integer, so the result is 42 and not "2121". `test_client()` lets you test routes without starting the server.'),
      ],
    },
    // ───────────── Day 27 ─────────────
    {
      t: 'Python with MongoDB',
      d: 'pymongo: insert, find, update and delete documents.',
      guide: [
        { h: 'Document databases', p: [
          'MongoDB is a NoSQL database: instead of tables with fixed columns, it stores JSON-like documents grouped into collections.',
          'Each document can have different fields, which makes it flexible for data that changes often. To try it without installing anything there is MongoDB Atlas, which has a free tier.' ] },
        { h: 'Connecting with pymongo', p: [
          '`pip install pymongo` installs the official driver. `MongoClient` opens the connection; then you pick the database and the collection as if they were dictionaries.',
          'Do not write the password in the code: keep it in an environment variable.' ],
          code: `import os\nfrom pymongo import MongoClient\n\nclient = MongoClient(os.environ["MONGO_URL"])\ndb = client["school"]\nstudents = db["students"]` },
        { h: 'Creating and reading documents', p: [
          '`insert_one()` and `insert_many()` add documents. `find()` returns a cursor with the ones that match the filter and `find_one()` the first one.',
          'Filters are dictionaries. Operators like `$gt` (greater than), `$lt` (less than) or `$in` (inside a list) allow richer queries.' ],
          code: `students.insert_many([\n    {"name": "Ana", "age": 22, "courses": ["python"]},\n    {"name": "Luis", "age": 19, "courses": ["java", "python"]},\n])\n\nfor s in students.find({"age": {"$gt": 20}}):\n    print(s["name"])  # Ana\n\nprint(students.count_documents({"courses": "python"}))  # 2` },
        { h: 'Updating and deleting', p: [
          '`update_one(filter, changes)` modifies the first matching document. Use `$set` to change fields and `$inc` to add to a number.',
          '`delete_one()` and `delete_many()` remove documents. Check the filter carefully: an empty filter `{}` affects the whole collection.' ],
          code: `students.update_one({"name": "Luis"}, {"$set": {"age": 20}})\nstudents.update_one({"name": "Ana"}, {"$inc": {"age": 1}})\nstudents.delete_one({"name": "Luis"})` },
        { h: 'Real example: storing a shop’s orders', real: true, p: [
          'An online shop’s orders fit documents well: each one carries its products inside, with no need for several tables.' ],
          code: `from datetime import datetime\n\norders = db["orders"]\norders.insert_one({\n    "customer": "ana@example.com",\n    "date": datetime.now(),\n    "products": [\n        {"name": "Book", "price": 12.5, "quantity": 1},\n        {"name": "Mug", "price": 6.0, "quantity": 2},\n    ],\n    "status": "pending",\n})\n\npending = orders.count_documents({"status": "pending"})\nprint("Pending orders:", pending)` },
      ],
      x: [
        mc('What kind of database is MongoDB?', ['A document-oriented NoSQL database', 'A relational database with SQL tables', 'A spreadsheet', 'A CSV file'], 'It stores flexible documents instead of rows with fixed columns.'),
        mc('Which library connects Python to MongoDB?', ['pymongo', 'mongopy', 'sqlite3', 'pandas'], '`pymongo` is the official driver.'),
        fill(`db.users.___({"name": "Luis"})  # adds a document`, ['insert_one', 'add', 'push', 'create'], '`insert_one` inserts one document; `insert_many`, several.'),
        mc('What does the filter `{"age": {"$gt": 30}}` look for?', ['Documents with an age greater than 30', 'Age equal to 30', 'Age less than 30', 'Ages between 0 and 30'], '`$gt` means "greater than". Other operators: `$lt`, `$gte` and `$ne`.'),
        mc('What does `collection.find()` return with no filter?', ['A cursor with every document', 'Only the first document', 'The number of documents', 'None'], 'To get just one there is `find_one()`.'),
        fill(`db.users.update_one(\n    {"name": "Luis"},\n    {___: {"age": 31}}\n)`, ['"$set"', '"$update"', '"$put"', '"set"'], '`$set` changes only the fields you give.'),
        typ('Complete the operator that adds 1 to the visits field', `pages.update_one({"url": "/"}, {"___": {"visits": 1}})`, '$inc', '`$inc` increases a numeric field by the given amount.'),
        mc('With the documents `{"name": "Ana", "courses": ["python"]}` and `{"name": "Luis", "courses": ["java", "python"]}`, what does `count_documents({"courses": "python"})` return?', ['2', '1', '0', 'An error, because courses is a list'], 'When the field is a list, MongoDB looks inside it: both documents contain "python".'),
      ],
    },
    // ───────────── Day 28 ─────────────
    {
      t: 'APIs',
      d: 'HTTP, methods, status codes and consuming APIs with requests.',
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
    // ───────────── Day 29 ─────────────
    {
      t: 'Building an API',
      d: 'A REST API with Flask: routes, jsonify, status codes and validation.',
      guide: [
        { h: 'From consuming to creating', p: [
          'Now you are on the other side: building an API that other programs can use. With Flask, each route returns JSON with `jsonify()`.',
          'A REST API organizes URLs by resource (`/tasks`, `/tasks/3`) and uses the HTTP method to state the action.' ] },
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
        fill(`from flask import Flask, ___\n\napp = Flask(__name__)\n\n@app.route("/api")\ndef api():\n    return jsonify({"ok": True})`, ['jsonify', 'json', 'dumps', 'JSON'], '`jsonify` creates an HTTP response with JSON content.'),
        mc('How do you read the JSON sent in a POST request with Flask?', ['request.get_json()', 'request.body', 'request.json_read()', 'input()'], 'It returns the body already turned into a dictionary.'),
        mc('In `return jsonify(task), 201`, what is the 201?', ['The HTTP status code of the response', 'The task id', 'The server port', 'The size of the response'], '201 means the resource was created.'),
        mc('Which method and route follow the REST convention to delete task 5?', ['DELETE /tasks/5', 'GET /delete/5', 'POST /tasks/delete', 'PUT /tasks'], 'The URL names the resource and the method states the action.'),
        fill(`@app.___("/tasks")\ndef create():\n    data = request.get_json()\n    ...`, ['post', 'get', 'put', 'delete'], 'Since Flask 2.0, `@app.post` is a shortcut for `@app.route(..., methods=["POST"])`, the method for creating resources.'),
        mc('What advantage does FastAPI offer?', ['It validates data with types and generates documentation automatically', 'It does not need Python', 'It replaces the database', 'It only works with HTML'], 'Its interactive documentation lives at `/docs`.'),
        mc('A POST arrives without the required "title" field. What should you answer?', ['400 with a message explaining what is missing', '500 Server error', '200 with an empty object', '404 Not found'], '400 Bad Request means the client’s request is wrong, and the message helps them fix it.'),
        out(`from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.get("/tasks/<int:id>")\ndef show(id):\n    if id > 3:\n        return jsonify(error="Not found"), 404\n    return jsonify(id=id)\n\nwith app.test_client() as c:\n    r = c.get("/tasks/7")\n    print(r.status_code, r.get_json()["error"])`, ['404 Not found', '200 Not found', '404 None', '500 Error'], '7 is greater than 3, so the route returns the error JSON with code 404, and `get_json()` turns it into a dictionary.'),
      ],
    },
    // ───────────── Day 30 ─────────────
    {
      t: 'Wrapping up',
      d: 'Final review of the challenge, good practices and how to keep learning.',
      guide: [
        { h: 'What you have learned', p: [
          'In 30 days you have gone from `print("Hello, world")` to analysing data with pandas, consuming APIs and building your own web service. You have seen types, collections, functions, classes, exceptions, files, regular expressions and the package ecosystem.',
          'The most important thing is not remembering every function, but knowing how to split a problem into parts and look up what you need in the documentation.' ] },
        { h: 'Pythonic code', p: [
          'The Zen of Python (`import this`) sums up the language’s style: beautiful is better than ugly, explicit is better than implicit and simple is better than complex.',
          'Follow the PEP 8 style guide and use tools such as `ruff` or `black` to format your code automatically.' ],
          code: `names = ["Ana", "Luis", "Eva", "Carla"]\n\n# Less pythonic\nresult = []\nfor i in range(len(names)):\n    if len(names[i]) > 3:\n        result.append(names[i].upper())\n\n# Pythonic\nresult = [n.upper() for n in names if len(n) > 3]\nprint(result)  # ['LUIS', 'CARLA']` },
        { h: 'Mistakes worth avoiding', p: [
          'Using lists or dictionaries as a parameter’s default value: they are shared between calls. Use `None` and create the object inside the function.',
          'Catching exceptions with a bare `except:`, which hides real errors. Always catch the specific type.' ],
          code: `# Bad: the list is shared between calls\ndef add(x, items=[]):\n    items.append(x)\n    return items\n\n# Good\ndef add(x, items=None):\n    if items is None:\n        items = []\n    items.append(x)\n    return items` },
        { h: 'Where to go next', p: [
          'Pick an area and build projects: data analysis with pandas and Jupyter, web development with Django or FastAPI, task automation, or artificial intelligence with scikit-learn and PyTorch.',
          'Read code from open-source projects, publish yours on GitHub and ask for reviews. You learn to program by programming.' ] },
        { h: 'Real example: your final project', real: true, p: [
          'A project that brings the whole course together: it downloads data from an API, saves it to a CSV and builds a summary with pandas. Extend it as you like with a chart, a Flask website or an email alert.' ],
          code: `import csv\nimport requests\nimport pandas as pd\n\ndef download_weather(lat, lon):\n    r = requests.get("https://api.open-meteo.com/v1/forecast",\n                     params={"latitude": lat, "longitude": lon,\n                             "daily": "temperature_2m_max", "timezone": "auto"},\n                     timeout=10)\n    r.raise_for_status()\n    return r.json()["daily"]\n\ndata = download_weather(51.51, -0.13)\nwith open("weather.csv", "w", newline="", encoding="utf-8") as f:\n    w = csv.writer(f)\n    w.writerow(["date", "max_temp"])\n    w.writerows(zip(data["time"], data["temperature_2m_max"]))\n\ndf = pd.read_csv("weather.csv")\nprint(df.describe())` },
      ],
      x: [
        out(`def count():\n    yield 1\n    yield 2\n\nprint(list(count()))`, ['[1, 2]', '1', '[1]', 'Error'], 'A function with `yield` is a generator; `list()` collects all its values.'),
        out(`print(sum(n for n in range(5) if n % 2))`, ['4', '10', '6', '2'], 'It adds the odd numbers from 0 to 4: 1 + 3 = 4.'),
        fill(`print(", ".___(["a", "b", "c"]))  # a, b, c`, ['join', 'split', 'concat', 'append'], '`join` joins the items using the text as a separator.'),
        out(`def f(x, items=[]):\n    items.append(x)\n    return items\n\nf(1)\nprint(f(2))`, ['[1, 2]', '[2]', '[1]', 'Error'], 'The mutable default value is created only once and shared between calls. Use `None` as the default.'),
        out(`x = [1, 2, 3]\nprint(x[::-1], x)`, ['[3, 2, 1] [1, 2, 3]', '[3, 2, 1] [3, 2, 1]', '[1, 2, 3] [3, 2, 1]', 'Error'], 'Slicing creates a new list; the original does not change.'),
        out(`print(bool([]), bool([0]))`, ['False True', 'True True', 'False False', 'True False'], 'An empty list is falsy; a list with any item, even 0, is truthy.'),
        mc('Which guide describes the recommended style for writing Python code?', ['PEP 8', 'PEP 20', 'ISO 9001', 'RFC 2616'], 'PEP 8 is the style guide; PEP 20 is the Zen of Python shown by `import this`.'),
        out(`def f(n, memo={}):\n    if n in memo:\n        return memo[n]\n    memo[n] = n if n < 2 else f(n - 1) + f(n - 2)\n    return memo[n]\n\nprint(f(10), len(f.__defaults__[0]))`, ['55 11', '55 10', '89 11', 'Error'], 'It is Fibonacci with memory: f(10) is 55. The default dictionary is shared between calls and ends up with the keys 0 to 10, that is, 11 entries. Here that behaviour is used on purpose as a cache.'),
      ],
    },
  ],
}))(Sintaxis);
