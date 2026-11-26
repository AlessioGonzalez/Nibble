/* Python · Français */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('python', 'fr', {
  tag: 'De zéro à l’analyse de données et à la création d’API en 30 jours, avec le langage le plus facile à lire.',
  days: [
    // ───────────── Jour 1 ─────────────
    {
      t: 'Introduction',
      d: 'Ce qu’est Python, ton premier programme, l’indentation et les commentaires.',
      guide: [
        { h: 'Qu’est-ce que Python ?', p: [
          'Python est un langage de programmation de haut niveau créé par Guido van Rossum et publié en 1991. Il se lit presque comme de l’anglais, c’est pourquoi c’est l’un des premiers langages les plus populaires.',
          'Aujourd’hui, Instagram et Spotify l’utilisent sur leurs serveurs, la NASA s’en sert pour ses analyses scientifiques et presque toutes les équipes d’intelligence artificielle reposent sur lui.',
          'C’est un langage interprété : il n’y a pas d’étape de compilation. Tu écris le code et Python l’exécute ligne par ligne, de haut en bas.' ] },
        { h: 'Ton premier programme', p: [
          'Installe Python depuis python.org et enregistre ceci dans un fichier `bonjour.py`. Lance-le avec `python bonjour.py` dans le terminal.',
          '`print()` affiche ce que tu mets entre les parenthèses. Le texte va entre guillemets ; les nombres, non.',
          'Tu peux aussi taper `python` dans le terminal pour ouvrir la console interactive et tester des lignes isolées. Quitte-la avec `exit()`.' ],
          code: `print("Bonjour, le monde")\nprint(3 + 4)  # 7` },
        { h: 'Python comme calculatrice', p: [
          'Les opérateurs de base sont `+`, `-`, `*` et `/`. Les puissances s’écrivent `**`.',
          'Chaque valeur a un type : `int` pour les entiers, `float` pour les décimaux et `str` pour le texte. `type()` te dit lequel c’est. Attention : les décimales s’écrivent avec un point.' ],
          code: `print(10 - 3)           # 7\nprint(10 / 4)           # 2.5\nprint(2 ** 3)           # 8\nprint(type(10))         # <class 'int'>\nprint(type(2.5))        # <class 'float'>\nprint(type("bonjour"))  # <class 'str'>` },
        { h: 'Indentation et commentaires', p: [
          'Python n’utilise pas d’accolades : une indentation de 4 espaces indique quelles lignes appartiennent à un bloc. Si elle n’est pas alignée, Python lève `IndentationError`.',
          'Tout ce qui suit `#` est un commentaire : Python l’ignore, et il explique le code aux autres (ou à toi dans un mois).' ],
          code: `# Vérifier si quelqu'un peut voter\nage = 20\nif age >= 18:\n    print("Tu peux voter")  # dans le if\nprint("Terminé")            # hors du if` },
        { h: 'Exemple réel : partager l’addition au restaurant', real: true, p: [
          'Quatre lignes suffisent pour régler un problème du quotidien : partager l’addition et le pourboire entre amis.',
          '`round(nombre, 2)` arrondit à deux décimales, exactement ce qu’il faut avec de l’argent.' ],
          code: `addition = 84.50\npersonnes = 3\npourboire = addition * 0.10\nprint("Chacun paie :", round((addition + pourboire) / personnes, 2))  # Chacun paie : 30.98` },
      ],
      x: [
        mc('Quelle fonction affiche du texte à l’écran en Python ?', ['print()', 'echo()', 'console.log()', 'printf()'], '`print()` écrit sur la sortie standard. `console.log()` appartient à JavaScript.'),
        mc('Comment écrit-on un commentaire en Python ?', ['# commentaire', '// commentaire', '/* commentaire */', '-- commentaire'], 'Tout ce qui suit `#` sur une ligne est un commentaire.'),
        out(`print(2 ** 3)`, ['8', '6', '9', '23'], '`**` est l’opérateur de puissance : 2 puissance 3 vaut 8.'),
        mc('Qu’est-ce qui délimite les blocs de code en Python ?', ['L’indentation', 'Les accolades { }', 'Les mots begin et end', 'Les points-virgules'], 'Python utilise l’indentation ; si elle n’est pas alignée, il lève `IndentationError`.'),
        out(`print(type("7"))`, ["<class 'str'>", "<class 'int'>", "<class 'float'>"], 'Les guillemets transforment le 7 en texte, un `str`.'),
        ord('Écris le code qui affiche Bonjour, le monde', ['print', '(', '"Bonjour, le monde"', ')'], ['echo', '{'], 'On appelle `print` avec le texte entre guillemets à l’intérieur des parenthèses.'),
        out(`print("Salut" * 3)`, ['SalutSalutSalut', 'Salut 3', 'Erreur', 'Salut*3'], 'Multiplier une chaîne par un entier la répète.'),
        out(`a = 10\nb = 3\nprint(a + b * 2, (a + b) * 2)`, ['16 26', '26 16', '16 16', '26 26'], 'La multiplication passe avant l’addition ; les parenthèses changent l’ordre. `print` sépare les valeurs par un espace.'),
      ],
    },
    // ───────────── Jour 2 ─────────────
    {
      t: 'Variables et fonctions intégrées',
      d: 'Stocker des données dans des variables, bien les nommer et utiliser input(), len() et les conversions de type.',
      guide: [
        { h: 'Qu’est-ce qu’une variable ?', p: [
          'Une variable est un nom qui pointe vers une valeur. On la crée avec `=`, qui en Python signifie « affecter », pas « égal ».',
          'Inutile de déclarer le type : Python le déduit de la valeur. Tu peux réaffecter la variable quand tu veux, même avec une valeur d’un autre type.' ],
          code: `nom = "Ana"\nage = 25\nprint(nom, age)  # Ana 25\nage = 26         # réaffecter change la valeur\nprint(age)       # 26` },
        { h: 'Nommer les variables', p: [
          'Utilise le snake_case : des mots en minuscules séparés par des tirets bas (`prix_total`). Un nom ne peut pas commencer par un chiffre ni contenir de tirets ou d’espaces.',
          'Python distingue les majuscules : `age` et `Age` sont deux variables différentes. Par convention, les constantes s’écrivent en MAJUSCULES.',
          'Tu ne peux pas utiliser les mots réservés comme `if`, `for`, `class` ou `def`. Choisis des noms qui expliquent leur contenu : `prix` vaut mieux que `p`.' ],
          code: `prix_total = 99.9   # bien : snake_case\nPI = 3.14159        # une constante par convention\nAge = 30            # différent de age\n# 2prix = 5         # SyntaxError : ne peut pas commencer par un chiffre\n# mon-prix = 5      # erreur : le tiret est lu comme un moins` },
        { h: 'Affectation multiple', p: [
          'Tu peux affecter plusieurs variables sur une seule ligne en les séparant par des virgules. Python associe chaque nom à sa valeur.',
          'C’est la façon la plus propre d’échanger deux valeurs : pas besoin de variable temporaire.' ],
          code: `x, y, z = 1, 2, 3\na = b = 0          # les deux valent 0\nx, y = y, x        # échange\nprint(x, y)        # 2 1` },
        { h: 'Fonctions intégrées', p: [
          'Python fournit des fonctions prêtes à l’emploi : `print()`, `len()` (longueur), `type()`, `int()`, `float()` et `str()` (conversions), `round()`, `abs()`, `min()` et `max()`.',
          'Les conversions sont essentielles : `"7" + "7"` donne `"77"`, mais `int("7") + 7` donne 14.' ],
          code: `print(len("Python"))      # 6\nprint(type(3.5))          # <class 'float'>\nprint(int("42") + 1)      # 43\nprint(str(7) + "7")       # 77\nprint(round(3.14159, 2))  # 3.14\nprint(max(4, 9, 2))       # 9` },
        { h: 'input() renvoie toujours du texte', p: [
          '`input()` affiche un message, attend que l’utilisateur tape et renvoie ce qu’il a tapé sous forme de `str`, même s’il n’y a que des chiffres.',
          'L’erreur classique est `input() + 1` : Python lève `TypeError` car il ne peut pas additionner du texte et un nombre. Convertis d’abord avec `int()` ou `float()`.' ],
          code: `texte = input("Quel âge as-tu ? ")  # l'utilisateur tape 30\nage = int(texte)                     # "30" -> 30\nprint("L'an prochain tu auras", age + 1)  # L'an prochain tu auras 31` },
        { h: 'Exemple réel : calculer l’IMC', real: true, p: [
          'L’indice de masse corporelle est le poids divisé par la taille au carré. On demande les données, on les convertit en `float` et on arrondit le résultat.' ],
          code: `nom = input("Prénom : ")                  # Lucie\npoids = float(input("Poids en kg : "))    # 62.5\ntaille = float(input("Taille en m : "))   # 1.68\nimc = poids / taille ** 2\nprint(nom, "a un IMC de", round(imc, 1))  # Lucie a un IMC de 22.1` },
      ],
      x: [
        out(`x = 5\ny = 3\nprint(x + y)`, ['8', '53', 'x + y', 'Erreur'], 'Les deux variables sont des entiers, donc `+` les additionne.'),
        mc('Quel nom de variable est valide ?', ['nom_complet', '2nom', 'nom-complet', 'class'], 'Un nom ne peut pas commencer par un chiffre, contenir de tirets ni être un mot réservé comme `class`.'),
        out(`print(len("Python"))`, ['6', '5', '7', 'Erreur'], '`len()` compte les caractères du texte.'),
        typ('Convertis le texte "25" en entier', `age = ___("25")`, 'int', '`int()` transforme un texte composé de chiffres en entier. `float()` le transformerait en décimal.'),
        out(`a, b = 1, 2\na, b = b, a\nprint(a, b)`, ['2 1', '1 2', '2 2', 'Erreur'], 'L’affectation multiple échange les valeurs en une seule ligne.'),
        out(`print(round(7.456, 1), abs(-3))`, ['7.5 3', '7.4 3', '7.5 -3', '7.46 3'], '`round(7.456, 1)` garde une décimale et arrondit vers le haut ; `abs()` enlève le signe.'),
        out(`age = input("Âge : ")  # l'utilisateur tape 20\nprint(type(age))`, ["<class 'str'>", "<class 'int'>", "<class 'float'>", '20'], '`input()` renvoie toujours du texte. Pour faire des calculs, convertis-le avec `int()`.'),
        out(`prix = "19.99"\nquantite = 3\ntotal = float(prix) * quantite\nprint(round(total, 2), type(total).__name__)`, ['59.97 float', '19.9919.9919.99 str', '59.97 int', 'Erreur'], '`float("19.99")` transforme le texte en nombre avant de multiplier. Un `float` multiplié par un `int` donne un `float`.'),
      ],
    },
    // ───────────── Jour 3 ─────────────
    {
      t: 'Opérateurs',
      d: 'Opérateurs arithmétiques, de comparaison, logiques et d’affectation, et leur ordre d’exécution.',
      guide: [
        { h: 'Opérateurs arithmétiques', p: [
          'En plus de `+ - * /`, Python a la division entière `//` (supprime les décimales), le reste `%` et la puissance `**`.',
          '`/` renvoie toujours un `float`, même si la division tombe juste. Si tu veux un entier, utilise `//`.',
          '`%` est plus utile qu’il n’y paraît : `n % 2 == 0` te dit si un nombre est pair, et `n % 60` te donne les minutes restantes.' ],
          code: `print(7 + 2)    # 9\nprint(7 / 2)    # 3.5\nprint(7 // 2)   # 3\nprint(7 % 2)    # 1\nprint(2 ** 10)  # 1024\nprint(6 / 3)    # 2.0` },
        { h: 'Priorité : ce qui passe en premier', p: [
          'Python suit l’ordre des mathématiques : d’abord `**`, puis `* / // %` et enfin `+ -`. En cas de doute, ajoute des parenthèses : le code devient aussi plus clair.',
          'Attention à `-2 ** 2` : la puissance est calculée avant le signe, donc cela donne -4.' ],
          code: `print(2 + 3 * 4)    # 14\nprint((2 + 3) * 4)  # 20\nprint(-2 ** 2)      # -4\nprint((-2) ** 2)    # 4` },
        { h: 'Comparaison et logique', p: [
          'Les opérateurs de comparaison `== != > < >= <=` renvoient `True` ou `False`. Ne confonds pas `=` (affecter) et `==` (comparer).',
          '`and` exige que les deux conditions soient vraies, `or` qu’au moins une le soit, et `not` inverse le résultat.',
          'Python permet d’enchaîner les comparaisons : `18 <= age < 65` se lit comme en mathématiques.' ],
          code: `age = 20\nprint(age >= 18)              # True\nprint(age == 18)              # False\nprint(18 <= age < 65)         # True\nprint(age > 18 and age < 21)  # True\nprint(not age > 18)           # False` },
        { h: 'Affectation composée et décimaux', p: [
          '`x += 1` équivaut à `x = x + 1`. Il existe aussi `-=`, `*=`, `/=`, `//=` et `%=`.',
          'Les `float` sont stockés en binaire et ne sont parfois pas exacts : `0.1 + 0.2` ne vaut pas exactement 0.3. Pour afficher de l’argent, arrondis avec `round()`.' ],
          code: `solde = 100\nsolde -= 30   # 70\nsolde *= 2    # 140\nprint(solde)  # 140\nprint(0.1 + 0.2)            # 0.30000000000000004\nprint(round(0.1 + 0.2, 2))  # 0.3` },
        { h: 'Exemple réel : durée d’un film et prix soldé', real: true, p: [
          'Une plateforme de streaming stocke la durée d’un film en minutes mais l’affiche en heures et minutes. `//` et `%` font le travail.',
          'Et une boutique qui applique une remise de 25 % n’a qu’à multiplier par `1 - remise`.' ],
          code: `minutes = 135\nheures = minutes // 60\nreste = minutes % 60\nprint(heures, "h", reste, "min")  # 2 h 15 min\n\nprix = 80\nremise = 0.25\nprint("Tu paies :", prix * (1 - remise))  # Tu paies : 60.0` },
      ],
      x: [
        out(`print(7 // 2)`, ['3', '3.5', '4', '1'], '`//` est la division entière : elle supprime les décimales.'),
        out(`print(10 % 3)`, ['1', '3', '0', '3.33'], '`%` renvoie le reste : 3 va trois fois dans 10 et il reste 1.'),
        out(`print(6 / 2)`, ['3.0', '3', '2', 'Erreur'], 'La division avec `/` renvoie toujours un `float`, même si le résultat tombe juste.'),
        mc('Quel opérateur vérifie si deux valeurs sont égales ?', ['==', '=', '===', 'equals'], '`=` affecte une valeur ; `==` compare. `===` n’existe pas en Python.'),
        out(`print(5 > 3 and 2 > 4)`, ['False', 'True', 'None', 'Erreur'], '`and` n’est vrai que si les deux conditions le sont, et 2 > 4 est faux.'),
        out(`x = 10\nx += 5\nx *= 2\nprint(x)`, ['30', '25', '20', '15'], 'D’abord 10 + 5 = 15, puis 15 * 2 = 30.'),
        fill(`n = 17\nest_pair = n ___ 2 == 0\nprint(est_pair)  # False`, ['%', '//', '/', '**'], 'Un nombre est pair quand le reste de sa division par 2 vaut 0, et le reste se calcule avec `%`.', 'Complète le code pour vérifier si n est pair'),
        out(`print(2 + 3 * 4 ** 2 // 10, not 3 == 3 or 1 < 2)`, ['6 True', '8 True', '6 False', '20 True'], '4 ** 2 = 16, 3 * 16 = 48, 48 // 10 = 4 et 2 + 4 = 6. `not 3 == 3` vaut False, mais `or 1 < 2` donne True.'),
      ],
    },
    // ───────────── Jour 4 ─────────────
    {
      t: 'Chaînes de caractères',
      d: 'Le texte en Python : guillemets, indices, découpage, f-strings et les méthodes les plus utiles.',
      guide: [
        { h: 'Créer du texte', p: [
          'Une chaîne (`str`) est une suite de caractères entre guillemets simples ou doubles. Utilise le type de guillemets qui n’apparaît pas dans le texte.',
          'Les triples guillemets permettent d’écrire sur plusieurs lignes. Dans une chaîne, `\\n` est un saut de ligne et `\\t` une tabulation.',
          'Les chaînes sont immuables : les méthodes ne modifient pas le texte d’origine, elles en renvoient un nouveau.' ],
          code: `salut = "Bonjour"\nphrase = 'Elle a dit "ok" et est partie'\npoeme = """Ligne un\nLigne deux"""\nprint(len(salut))  # 7\nprint("Un\\tDeux\\nTrois")` },
        { h: 'Indices et découpage', p: [
          'Chaque caractère a une position qui commence à 0. Les indices négatifs comptent depuis la fin : `-1` est le dernier.',
          '`s[debut:fin]` découpe de `debut` jusqu’à `fin` sans l’inclure. Si tu en omets un, on va jusqu’au bout. `s[::-1]` inverse le texte.' ],
          code: `langage = "Python"\nprint(langage[0])     # P\nprint(langage[-1])    # n\nprint(langage[1:4])   # yth\nprint(langage[:2])    # Py\nprint(langage[::-1])  # nohtyP` },
        { h: 'f-strings : insérer des variables dans le texte', p: [
          'Une f-string a un `f` devant les guillemets et remplace ce qui est entre accolades par sa valeur. C’est la façon moderne et la plus lisible.',
          'Tu peux formater les valeurs : `{prix:.2f}` affiche deux décimales. Tu peux aussi concaténer avec `+`, mais tout doit être un `str` : convertis les nombres avec `str()`.' ],
          code: `nom = "Ana"\nage = 30\nprix = 4.5\nprint(f"{nom} a {age} ans")         # Ana a 30 ans\nprint(f"Total : {prix * 3:.2f} €")  # Total : 13.50 €\nprint("Âge : " + str(age))          # Âge : 30` },
        { h: 'Méthodes des chaînes', p: [
          '`strip()` supprime les espaces aux deux bouts, `lower()` et `upper()` changent la casse, `title()` met une majuscule à chaque mot et `replace()` remplace du texte.',
          '`split()` découpe le texte en liste et `join()` fait l’inverse. `count()`, `find()`, `startswith()`, `endswith()` et `isdigit()` aident à chercher et à vérifier.' ],
          code: `texte = "  Bonjour le Monde  "\nprint(texte.strip())                       # Bonjour le Monde\nprint(texte.strip().lower())               # bonjour le monde\nprint("a-b-c".split("-"))                  # ['a', 'b', 'c']\nprint(" ".join(["J'aime", "bien", "Python"]))  # J'aime bien Python\nprint("banana".count("a"))                 # 3\nprint("2024".isdigit())                    # True` },
        { h: 'Exemple réel : nettoyer un e-mail de formulaire', real: true, p: [
          'Les gens tapent leur e-mail avec des espaces et des majuscules. Avant de l’enregistrer, normalise-le, et crée au passage un nom d’utilisateur.',
          'Enchaîner les méthodes (`strip().lower()`) est courant : chacune travaille sur le résultat de la précédente.' ],
          code: `email = "  Lucie.Martin@Gmail.COM "\nemail = email.strip().lower()\nutilisateur = email.split("@")[0].replace(".", "_")\nprint(email)                         # lucie.martin@gmail.com\nprint(utilisateur)                   # lucie_martin\nprint(email.endswith("@gmail.com"))  # True` },
      ],
      x: [
        out(`print("3" + "4")`, ['34', '7', 'Erreur', '3 + 4'], 'Avec des chaînes, `+` concatène : il colle "3" et "4".'),
        fill(`nom = "Ana"\nprint(___"Bonjour {nom}")`, ['f', 's', '$', '%'], 'Le `f` devant les guillemets crée une f-string, qui remplace `{nom}` par sa valeur.'),
        out(`s = "Python"\nprint(s[0], s[-1])`, ['P n', 'P o', 'y n', 'Erreur'], 'L’indice 0 est le premier caractère et -1 le dernier.'),
        out(`print("bonjour le monde".title())`, ['Bonjour Le Monde', 'BONJOUR LE MONDE', 'Bonjour le monde', 'bonjour Le Monde'], '`title()` met en majuscule la première lettre de chaque mot.'),
        out(`print("Python"[1:4])`, ['yth', 'ytho', 'Pyt', 'pyth'], 'Le découpage commence à l’indice 1 (`y`) et s’arrête avant l’indice 4.'),
        out(`print("a,b,c".split(","))`, ["['a', 'b', 'c']", 'abc', 'a b c', "('a', 'b', 'c')"], '`split(",")` coupe le texte à chaque virgule et renvoie une liste.'),
        typ('Supprime les espaces au début et à la fin', `propre = "  bonjour  ".___()`, 'strip', '`strip()` supprime les espaces (et les sauts de ligne) aux deux bouts.'),
        out(`nom = "  ada lovelace "\npropre = nom.strip().title()\nprint(f"{propre[:3]}-{len(propre)}")`, ['Ada-12', 'ada-15', 'Ada-15', 'Ada -12'], 'Après `strip()` il reste 12 caractères ("ada lovelace") et `title()` donne "Ada Lovelace". `[:3]` prend "Ada".'),
      ],
    },
    // ───────────── Jour 5 ─────────────
    {
      t: 'Listes',
      d: 'Créer, parcourir, modifier, découper et trier des listes, et le piège des copies.',
      guide: [
        { h: 'Créer et accéder', p: [
          'Une liste est une collection ordonnée et modifiable. Elle s’écrit entre crochets et peut mélanger les types, même si en général tous les éléments sont du même type.',
          'On accède aux éléments par leur indice, comme avec les chaînes. Un indice inexistant lève `IndexError`. Contrairement aux chaînes, tu peux modifier un élément en lui affectant une valeur.' ],
          code: `courses = ["lait", "pain", "œufs"]\nprint(courses[0])    # lait\nprint(courses[-1])   # œufs\nprint(len(courses))  # 3\ncourses[1] = "pain complet"\nprint(courses)       # ['lait', 'pain complet', 'œufs']` },
        { h: 'Ajouter et retirer des éléments', p: [
          '`append()` ajoute à la fin, `insert(i, x)` à une position et `extend()` en ajoute plusieurs. `remove(x)` supprime le premier élément égal à `x`, et `pop()` retire et renvoie le dernier (ou celui de l’indice que tu passes).',
          '`in` vérifie si un élément est dans la liste.' ],
          code: `taches = ["étudier"]\ntaches.append("courir")\ntaches.insert(0, "petit-déj")\ntaches.extend(["lire", "dormir"])\nprint(taches)  # ['petit-déj', 'étudier', 'courir', 'lire', 'dormir']\ntaches.remove("courir")\nderniere = taches.pop()\nprint(derniere, taches)   # dormir ['petit-déj', 'étudier', 'lire']\nprint("lire" in taches)   # True` },
        { h: 'Découper et trier', p: [
          'Le découpage fonctionne exactement comme avec les chaînes et renvoie une nouvelle liste.',
          '`sort()` trie la liste sur place et renvoie `None` ; `sorted()` renvoie une nouvelle liste et ne touche pas à l’originale. Une erreur classique est d’écrire `ma_liste = ma_liste.sort()` et de se retrouver avec `None`.',
          '`sum()`, `min()` et `max()` fonctionnent directement sur des listes de nombres.' ],
          code: `notes = [7, 4, 9, 6]\nprint(sorted(notes))  # [4, 6, 7, 9]\nprint(notes)          # [7, 4, 9, 6]\nnotes.sort(reverse=True)\nprint(notes)          # [9, 7, 6, 4]\nprint(notes[:2])      # [9, 7]\nprint(sum(notes) / len(notes))  # 6.5` },
        { h: 'Copies et références', p: [
          '`b = a` ne copie pas la liste : cela crée un autre nom pour le même objet. Si tu modifies `b`, tu modifies `a`.',
          'Pour une copie indépendante, utilise `a.copy()`, `list(a)` ou `a[:]`.' ],
          code: `a = [1, 2, 3]\nb = a           # même objet\nc = a.copy()    # copie indépendante\na.append(4)\nprint(b)  # [1, 2, 3, 4]\nprint(c)  # [1, 2, 3]` },
        { h: 'Exemple réel : un ticket de caisse', real: true, p: [
          'Avec une liste de prix, tu obtiens déjà le nombre d’articles, le total et le produit le plus cher d’un ticket.' ],
          code: `prix = [2.35, 1.20, 4.99, 0.89]\ntotal = sum(prix)\nprint("Articles :", len(prix))         # Articles : 4\nprint("Total :", round(total, 2))      # Total : 9.43\nprint("Le plus cher :", max(prix))     # Le plus cher : 4.99` },
      ],
      x: [
        out(`fruits = ["pomme", "poire", "raisin"]\nprint(fruits[1])`, ['poire', 'pomme', 'raisin', 'Erreur'], 'Les indices commencent à 0 : `fruits[1]` est le deuxième élément.'),
        ord('Ajoute 4 à la fin de la liste nums', ['nums', '.', 'append', '(', '4', ')'], ['push', 'add'], 'Les listes Python utilisent `.append()`. `push` appartient à JavaScript.'),
        out(`nums = [10, 20, 30, 40, 50]\nprint(nums[1:3])`, ['[20, 30]', '[10, 20, 30]', '[20, 30, 40]', '[20]'], 'Le découpage va de l’indice 1 jusqu’à l’indice 3 sans l’inclure.'),
        out(`nums = [3, 1, 2]\nnums.sort()\nprint(nums)`, ['[1, 2, 3]', '[3, 2, 1]', 'None', '[3, 1, 2]'], '`sort()` trie la liste sur place, du plus petit au plus grand.'),
        out(`nums = [1, 2, 3]\ndernier = nums.pop()\nprint(dernier, nums)`, ['3 [1, 2]', '1 [2, 3]', '3 [1, 2, 3]', '[1, 2] 3'], '`pop()` sans argument retire et renvoie le dernier élément.'),
        mc('Que renvoie `nums.sort()` ?', ['None', 'La liste triée', 'Une copie triée', 'True'], '`sort()` trie sur place et renvoie `None`. Pour une nouvelle liste, utilise `sorted(nums)`.'),
        out(`a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)`, ['[1, 2, 3, 4]', '[1, 2, 3]', '[4]', 'Erreur'], '`b = a` ne copie pas la liste : les deux noms pointent vers le même objet. Utilise `a.copy()` pour la dupliquer.'),
        out(`nums = [5, 3, 8, 1]\ntriee = sorted(nums)\nnums.append(triee[0] + triee[-1])\nprint(nums[-1], len(nums), nums[:2])`, ['9 5 [5, 3]', '6 5 [5, 3]', '9 4 [1, 3]', '9 5 [1, 3]'], '`sorted()` ne touche pas à `nums` ; `triee` vaut [1, 3, 5, 8], donc 1 + 8 = 9 est ajouté à `nums`.'),
      ],
    },
    // ───────────── Jour 6 ─────────────
    {
      t: 'Tuples',
      d: 'Collections immuables, déballage et quand préférer un tuple à une liste.',
      guide: [
        { h: 'Qu’est-ce qu’un tuple ?', p: [
          'Un tuple ressemble à une liste, mais il est immuable : une fois créé, tu ne peux ni ajouter, ni retirer, ni modifier d’éléments. Il s’écrit entre parenthèses.',
          'Utilise-le pour des données qui vont ensemble et ne doivent pas changer : des coordonnées, une couleur RVB, une date. Comme il est immuable, il peut aussi servir de clé de dictionnaire.',
          'On l’indexe et on le découpe comme une liste, et il a deux méthodes : `count()` et `index()`.' ],
          code: `couleur = (255, 128, 0)\nprint(couleur[0])          # 255\nprint(len(couleur))        # 3\nprint(couleur.count(0))    # 1\nprint(couleur.index(128))  # 1` },
        { h: 'Immuabilité', p: [
          'Essayer de modifier un élément lève `TypeError`. Si tu dois vraiment le changer, convertis-le en liste, modifie-la et reconvertis-la.',
          'Cette protection est son avantage : personne ne peut altérer les données par accident ailleurs dans le programme.' ],
          code: `jours = ("lun", "mar", "mer")\n# jours[0] = "dim"  # TypeError: 'tuple' object does not support item assignment\nelements = list(jours)\nelements.append("jeu")\njours = tuple(elements)\nprint(jours)  # ('lun', 'mar', 'mer', 'jeu')` },
        { h: 'Déballage', p: [
          'Tu peux répartir les éléments d’un tuple dans des variables : `x, y = point`. Le nombre de variables doit correspondre au nombre d’éléments, sauf si tu utilises `*` pour récupérer le reste dans une liste.',
          'Attention : des parenthèses seules ne créent pas de tuple. Un tuple d’un seul élément a besoin d’une virgule : `(5,)`.' ],
          code: `point = (3, 4)\nx, y = point\nprint(x, y)          # 3 4\npremier, *reste = (1, 2, 3, 4)\nprint(premier, reste)  # 1 [2, 3, 4]\nprint(type((5,)), type((5)))  # <class 'tuple'> <class 'int'>` },
        { h: 'Fonctions qui renvoient plusieurs valeurs', p: [
          'Quand une fonction renvoie plusieurs valeurs, elle renvoie en réalité un tuple. `divmod(a, b)` en est un exemple intégré : il donne le quotient et le reste d’un coup.' ],
          code: `quotient, reste = divmod(17, 5)\nprint(quotient, reste)  # 3 2\nprint(divmod(17, 5))    # (3, 2)` },
        { h: 'Exemple réel : les lignes d’une commande', real: true, p: [
          'Chaque ligne d’une commande a un nom, un prix et une quantité. La stocker dans un tuple évite qu’elle soit modifiée par erreur une fois facturée.' ],
          code: `ligne1 = ("Clavier", 25.0, 2)\nligne2 = ("Souris", 12.5, 1)\nnom, prix, unites = ligne1\nprint(nom, prix * unites)       # Clavier 50.0\ntotal = ligne1[1] * ligne1[2] + ligne2[1] * ligne2[2]\nprint("Total de la commande :", total)  # Total de la commande : 62.5` },
      ],
      x: [
        mc('Quelle collection est immuable ?', ['tuple', 'list', 'dict', 'set'], 'Un tuple ne peut pas être modifié après sa création.'),
        out(`t = (10, 20, 30)\nprint(t[1])`, ['20', '10', '30', 'Erreur'], 'Les tuples s’indexent comme les listes, en commençant à 0.'),
        out(`x, y = (3, 4)\nprint(x * y)`, ['12', '7', '(3, 4)', 'Erreur'], 'Le déballage affecte 3 à `x` et 4 à `y`.'),
        fill(`point = (3, 4)\n___ = point\nprint(x, y)  # 3 4`, ['x, y', 'x y', 'x; y', 'x & y'], 'Pour déballer, écris les variables séparées par des virgules à gauche du `=`.'),
        out(`t = (1, 2, 3)\nt[0] = 9\nprint(t)`, ['TypeError', '(9, 2, 3)', '(1, 2, 3)', 'None'], 'Les tuples n’acceptent pas l’affectation d’éléments, donc Python lève `TypeError`.'),
        out(`print(type((5)), type((5,)))`, ["<class 'int'> <class 'tuple'>", "<class 'tuple'> <class 'tuple'>", "<class 'int'> <class 'int'>", 'Erreur'], 'Les parenthèses seules ne créent pas de tuple ; c’est la virgule qui le fait.'),
        out(`t = (1, 2) + (3,)\nprint(t)`, ['(1, 2, 3)', '(1, 2, (3,))', 'Erreur', '(4, 2)'], '`+` concatène les tuples et en crée un nouveau ; les originaux ne changent pas.'),
        out(`donnees = (10, 20, 30, 40)\na, *b, c = donnees\nprint(a + c, len(b), donnees.index(30))`, ['50 2 2', '50 2 3', '30 3 2', 'Erreur'], '`a` prend 10, `c` prend 40 et `*b` récupère [20, 30]. Le 30 est à l’indice 2.'),
      ],
    },
    // ───────────── Jour 7 ─────────────
    {
      t: 'Ensembles',
      d: 'Collections sans doublons : les créer, les modifier et les combiner par union, intersection et différence.',
      guide: [
        { h: 'Qu’est-ce qu’un ensemble ?', p: [
          'Un ensemble (`set`) est une collection non ordonnée sans éléments répétés. Il s’écrit avec des accolades : `{1, 2, 3}`. Si tu ajoutes des doublons, un seul est conservé.',
          'Un ensemble vide se crée avec `set()` : `{}` crée un dictionnaire vide.',
          'Vérifier si quelque chose est dans un ensemble avec `in` est très rapide, même avec des millions d’éléments. C’est pourquoi on les utilise pour les listes « déjà vus ».' ],
          code: `tags = {"python", "web", "python", "data"}\nprint(len(tags))      # 3\nprint("web" in tags)  # True\nvide = set()\nprint(type({}))       # <class 'dict'>` },
        { h: 'Ajouter et retirer', p: [
          '`add()` ajoute un élément. Pour en retirer un, `remove()` lève `KeyError` s’il n’existe pas, alors que `discard()` ne fait rien. Utilise `discard()` quand tu n’es pas sûr.',
          'Comme ils n’ont pas d’ordre, les ensembles n’acceptent pas d’indices : `s[0]` est une erreur.' ],
          code: `s = {1, 2, 3}\ns.add(4)\ns.discard(10)   # absent : rien ne se passe\ns.remove(1)\nprint(s)        # {2, 3, 4}\n# s.remove(10)  # KeyError: 10` },
        { h: 'Opérations sur les ensembles', p: [
          'Union `|` (tous), intersection `&` (les communs), différence `-` (ceux de l’un mais pas de l’autre) et différence symétrique `^` (ceux qui ne sont que dans l’un des deux).',
          '`issubset()` vérifie si tous les éléments d’un ensemble sont dans un autre.' ],
          code: `a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(a | b)  # {1, 2, 3, 4, 5}\nprint(a & b)  # {3, 4}\nprint(a - b)  # {1, 2}\nprint(a ^ b)  # {1, 2, 5}\nprint({1, 2}.issubset(a))  # True` },
        { h: 'Supprimer les doublons d’une liste', p: [
          'Transformer une liste en ensemble supprime instantanément les éléments répétés. Comme les ensembles n’ont pas d’ordre, utilise `sorted()` si tu veux un résultat stable et trié.' ],
          code: `emails = ["ana@x.com", "luis@x.com", "ana@x.com"]\nuniques = sorted(set(emails))\nprint(uniques)  # ['ana@x.com', 'luis@x.com']` },
        { h: 'Exemple réel : les clients fidèles', real: true, p: [
          'Une boutique veut savoir quels clients ont acheté en janvier et en février, lesquels ont arrêté et lesquels sont nouveaux. Ce sont trois opérations d’ensembles.' ],
          code: `janvier = {"Ana", "Luis", "Eva", "Marta"}\nfevrier = {"Luis", "Marta", "Pedro"}\nfideles = janvier & fevrier\nperdus = janvier - fevrier\nnouveaux = fevrier - janvier\nprint(sorted(fideles))   # ['Luis', 'Marta']\nprint(sorted(perdus))    # ['Ana', 'Eva']\nprint(sorted(nouveaux))  # ['Pedro']` },
      ],
      x: [
        out(`s = {1, 2, 2, 3, 3, 3}\nprint(len(s))`, ['3', '6', '4', '1'], 'Un ensemble supprime les doublons : il reste {1, 2, 3}.'),
        mc('Comment crée-t-on un ensemble vide ?', ['set()', '{}', '[]', 'set[]'], '`{}` crée un dictionnaire vide, pas un ensemble.'),
        out(`s = {1, 2}\ns.add(2)\ns.add(5)\nprint(len(s))`, ['3', '4', '2', 'Erreur'], 'Ajouter un 2 déjà présent ne change rien ; le 5 est ajouté.'),
        out(`a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)`, ['{2, 3}', '{1, 2, 3, 4}', '{1}', '{4}'], '`&` est l’intersection : les éléments présents dans les deux.'),
        fill(`a = {1, 2, 3}\nb = {3, 4}\nprint(a ___ b)  # {1, 2, 3, 4}`, ['|', '&', '-', '^'], '`|` est l’union : elle réunit tous les éléments des deux ensembles sans répétition.'),
        out(`a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a - b)`, ['{1}', '{4}', '{1, 4}', '{2, 3}'], 'La différence garde les éléments de `a` qui ne sont pas dans `b`.'),
        out(`print(sorted(set("banana")))`, ["['a', 'b', 'n']", "['b', 'a', 'n', 'a', 'n', 'a']", "{'a', 'b', 'n'}", 'abn'], 'L’ensemble supprime les doublons et `sorted()` renvoie une liste triée.'),
        out(`a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(len(a | b), sorted(a ^ b), {3}.issubset(a & b))`, ['5 [1, 2, 5] True', '7 [1, 2, 5] True', '5 [3, 4] True', '5 [1, 2, 5] False'], 'L’union a 5 éléments, la différence symétrique laisse 1, 2 et 5, et 3 est dans l’intersection {3, 4}.'),
      ],
    },
    // ───────────── Jour 8 ─────────────
    {
      t: 'Dictionnaires',
      d: 'Paires clé-valeur : accéder, ajouter, supprimer, parcourir et imbriquer des données.',
      guide: [
        { h: 'Créer et accéder', p: [
          'Un dictionnaire associe des clés uniques à des valeurs, comme un carnet d’adresses : tu cherches un nom et tu obtiens le numéro. Il s’écrit `{clé: valeur}`.',
          '`d["clé"]` renvoie la valeur mais lève `KeyError` si la clé n’existe pas. `d.get("clé", défaut)` est plus sûr : il renvoie la valeur par défaut (ou `None`).' ],
          code: `personne = {"nom": "Ana", "age": 30, "ville": "Lyon"}\nprint(personne["nom"])                     # Ana\nprint(personne.get("email"))               # None\nprint(personne.get("email", "sans email"))  # sans email` },
        { h: 'Ajouter, modifier et supprimer', p: [
          'Affecter une valeur à une clé la crée si elle n’existe pas, ou change sa valeur si elle existe. `update()` fusionne un autre dictionnaire.',
          '`pop(clé)` supprime et renvoie la valeur ; `del d[clé]` supprime seulement. `in` vérifie si une clé existe (pas une valeur).' ],
          code: `stock = {"pommes": 10}\nstock["poires"] = 5        # ajouter\nstock["pommes"] -= 3       # modifier\nstock.update({"raisins": 8})\ndel stock["poires"]\nprint(stock)               # {'pommes': 7, 'raisins': 8}\nprint("raisins" in stock)  # True` },
        { h: 'Parcourir un dictionnaire', p: [
          '`keys()` donne les clés, `values()` les valeurs et `items()` les paires. Avec `for cle, valeur in d.items()` tu parcours tout d’un coup (tu verras les boucles en détail au jour 10).',
          'Depuis Python 3.7, les dictionnaires conservent l’ordre d’insertion des clés.' ],
          code: `notes = {"Ana": 9, "Luis": 6, "Eva": 8}\nfor eleve, note in notes.items():\n    print(eleve, "->", note)\nprint(list(notes.keys()))  # ['Ana', 'Luis', 'Eva']\nprint(sum(notes.values()) / len(notes))  # 7.666666666666667` },
        { h: 'Données imbriquées', p: [
          'Les valeurs peuvent être des listes ou d’autres dictionnaires. C’est ainsi que presque toutes les données réelles sont représentées, et c’est exactement la forme du JSON renvoyé par les API.',
          'Les clés doivent être immuables : chaînes, nombres ou tuples. Une liste ne peut pas être une clé.' ],
          code: `utilisateur = {\n    "nom": "Eva",\n    "langues": ["fr", "en"],\n    "adresse": {"ville": "Lille", "code_postal": "59000"},\n}\nprint(utilisateur["adresse"]["ville"])  # Lille\nprint(utilisateur["langues"][-1])       # en` },
        { h: 'Exemple réel : compter les mots d’un texte', real: true, p: [
          'Compter combien de fois chaque mot apparaît est la base des moteurs de recherche et de l’analyse de sentiments. L’astuce est `get(mot, 0) + 1` : un nouveau mot démarre à 0.' ],
          code: `texte = "le chat et le chien et le poisson"\ncompte = {}\nfor mot in texte.split():\n    compte[mot] = compte.get(mot, 0) + 1\nprint(compte)  # {'le': 3, 'chat': 1, 'et': 2, 'chien': 1, 'poisson': 1}` },
      ],
      x: [
        fill(`ages = {"ana": 30, "luis": 25}\nprint(ages___)  # 30`, ['["ana"]', '.ana', '("ana")', '{ana}'], 'On accède à une valeur de dictionnaire avec des crochets et la clé.'),
        out(`d = {"a": 1}\nd["b"] = 2\nprint(len(d))`, ['2', '1', '3', 'Erreur'], 'Affecter une valeur à une nouvelle clé l’ajoute au dictionnaire.'),
        out(`d = {"x": 1}\nprint(d.get("y", 0))`, ['0', 'None', 'KeyError', '1'], '`get()` renvoie la valeur par défaut quand la clé n’existe pas.'),
        out(`d = {"a": 1, "b": 2}\nprint(list(d.keys()))`, ["['a', 'b']", '[1, 2]', "[('a', 1), ('b', 2)]", 'ab'], '`keys()` renvoie les clés du dictionnaire.'),
        out(`d = {"a": 1}\nprint(d["z"])`, ['KeyError', 'None', '0', 'Rien'], 'Utiliser des crochets avec une clé inexistante lève `KeyError`.'),
        typ('Supprime la clé "pain" et garde sa valeur', `panier = {"pain": 1.2, "lait": 0.9}\nprix = panier.___("pain")`, 'pop', '`pop(clé)` retire la clé et renvoie sa valeur.'),
        out(`prix = {"pain": 1, "lait": 2}\nprint(sum(prix.values()))`, ['3', '2', 'pain lait', 'Erreur'], '`values()` donne les valeurs et `sum()` les additionne.'),
        out(`stock = {"pain": 2, "lait": 0}\nstock["oeufs"] = stock.get("oeufs", 0) + 12\nstock["pain"] += 1\nprint(len(stock), stock["pain"] + stock["oeufs"], "lait" in stock)`, ['3 15 True', '2 15 True', '3 14 True', '3 15 False'], '"oeufs" est ajouté avec 12 et "pain" passe à 3 : il y a 3 clés et 3 + 12 = 15. "lait" reste une clé même s’il vaut 0.'),
      ],
    },
    // ───────────── Jour 9 ─────────────
    {
      t: 'Conditions',
      d: 'Prendre des décisions avec if, elif et else, les valeurs vraies et fausses, et l’opérateur ternaire.',
      guide: [
        { h: 'if et else', p: [
          '`if` exécute un bloc seulement si la condition est vraie. `else` couvre le cas contraire. La condition est suivie de deux-points et le bloc est indenté de 4 espaces.',
          'Oublier les deux-points est l’erreur de débutant la plus courante : Python répond par `SyntaxError`.' ],
          code: `temperature = 31\nif temperature > 30:\n    print("Il fait chaud")\n    print("Bois de l'eau")\nelse:\n    print("Température agréable")` },
        { h: 'Plusieurs options avec elif', p: [
          '`elif` (sinon si) teste une autre condition si la précédente a échoué. Python prend la première qui est vraie et ignore les autres.',
          'C’est pourquoi l’ordre compte : va de la condition la plus stricte à la plus large.' ],
          code: `note = 78\nif note >= 90:\n    mention = "Excellent"\nelif note >= 70:\n    mention = "Très bien"\nelif note >= 50:\n    mention = "Passable"\nelse:\n    mention = "Insuffisant"\nprint(mention)  # Très bien` },
        { h: 'Vrai et faux', p: [
          'N’importe quelle valeur peut servir de condition. Sont fausses : `0`, `0.0`, `""`, `[]`, `{}`, `set()` et `None`. Tout le reste est vrai.',
          'Ainsi, `if not panier:` est la façon idiomatique de demander si une liste est vide.',
          'Combine les conditions avec `and`, `or` et `not`, et utilise `in` pour vérifier si une valeur fait partie de plusieurs.' ],
          code: `panier = []\nif not panier:\n    print("Le panier est vide")\n\nutilisateur = "admin"\nif utilisateur in ("admin", "root") and len(utilisateur) > 3:\n    print("Accès complet")` },
        { h: 'Conditions imbriquées et opérateur ternaire', p: [
          'Tu peux mettre un `if` dans un autre, mais plus de deux niveaux devient difficile à lire : `and` ou `elif` simplifient souvent les choses.',
          'L’opérateur ternaire écrit un if/else qui renvoie une valeur en une ligne : `valeur_si_vrai if condition else valeur_si_faux`.' ],
          code: `age = 16\nmessage = "majeur" if age >= 18 else "mineur"\nprint(message)  # mineur` },
        { h: 'Exemple réel : le prix d’une place de cinéma', real: true, p: [
          'Un cinéma fait payer 5 € aux moins de 12 ans, 6 € aux plus de 65 ans et 9 € aux autres. Le mercredi, jour du cinéma, il retire encore 2 €.' ],
          code: `age = 67\nest_mercredi = True\nif age < 12:\n    prix = 5\nelif age >= 65:\n    prix = 6\nelse:\n    prix = 9\nif est_mercredi:\n    prix -= 2\nprint("Place :", prix, "€")  # Place : 4 €` },
      ],
      x: [
        out(`x = 7\nif x > 5:\n    print("grand")\nelse:\n    print("petit")`, ['grand', 'petit', 'grand\npetit', 'Rien'], '7 est plus grand que 5, donc le bloc `if` s’exécute et le `else` est ignoré.'),
        fill(`if note >= 90:\n    print("A")\n___ note >= 70:\n    print("B")`, ['elif', 'else if', 'elseif', 'case'], 'En Python, « sinon, si... » s’écrit `elif`.'),
        ord('Écris la condition : si x est pair', ['if', 'x', '%', '2', '==', '0', ':'], ['=', '/'], '`%` donne le reste. Si le reste de la division par 2 vaut 0, le nombre est pair. Compare avec `==`, pas avec `=`.'),
        out(`n = 0\nif n:\n    print("oui")\nelse:\n    print("non")`, ['non', 'oui', '0', 'Erreur'], '0 compte comme faux dans une condition.'),
        out(`age = 15\nr = "majeur" if age >= 18 else "mineur"\nprint(r)`, ['mineur', 'majeur', 'True', '15'], 'C’est un ternaire : comme 15 est inférieur à 18, c’est la valeur du `else` qui est utilisée.'),
        mc('Laquelle de ces valeurs est vraie dans un `if` ?', ['[0]', '""', '[]', 'None'], 'Une liste avec un élément est vraie, même si cet élément vaut 0. Les collections vides et `None` sont fausses.'),
        out(`x = 5\nif x > 2:\n    if x > 10:\n        print("A")\n    else:\n        print("B")`, ['B', 'A', 'A\nB', 'Rien'], 'On entre dans le premier `if`, mais 5 n’est pas plus grand que 10, donc on passe au `else` intérieur.'),
        out(`points = 85\nvip = False\nif points >= 90 or vip:\n    niveau = "or"\nelif points >= 80 and not vip:\n    niveau = "argent"\nelse:\n    niveau = "bronze"\nprint(niveau.upper() if points % 2 else niveau)`, ['ARGENT', 'argent', 'OR', 'bronze'], '85 n’atteint pas 90 et ce n’est pas un VIP, mais il remplit le `elif` : "argent". 85 % 2 vaut 1, qui est vrai, donc il s’affiche en majuscules.'),
      ],
    },
    // ───────────── Jour 10 ─────────────
    {
      t: 'Boucles',
      d: 'Répéter des tâches avec for et while, range(), enumerate(), break et continue.',
      guide: [
        { h: 'La boucle for', p: [
          '`for` parcourt les éléments de n’importe quelle séquence : une liste, une chaîne, un dictionnaire... À chaque tour, la variable prend l’élément suivant.',
          'Utilise-la quand tu sais ce que tu vas parcourir. C’est la boucle que tu utiliseras le plus en Python.' ],
          code: `fruits = ["pomme", "poire", "kiwi"]\nfor fruit in fruits:\n    print(fruit.upper())\n\nfor lettre in "sol":\n    print(lettre)` },
        { h: 'range()', p: [
          '`range(n)` génère les nombres de 0 à n-1. `range(debut, fin)` commence où tu veux, et `range(debut, fin, pas)` avance de `pas` en `pas` ; avec un pas négatif, il compte à rebours.',
          'La fin n’est jamais incluse. C’est la même règle que pour le découpage.' ],
          code: `print(list(range(5)))          # [0, 1, 2, 3, 4]\nprint(list(range(2, 6)))       # [2, 3, 4, 5]\nprint(list(range(10, 0, -3)))  # [10, 7, 4, 1]\nfor i in range(3):\n    print("Tour", i)` },
        { h: 'La boucle while', p: [
          '`while` répète tant que la condition est vraie. Utilise-la quand tu ne sais pas combien de tours il te faudra.',
          'Assure-toi que quelque chose dans la boucle finit par rendre la condition fausse ; sinon tu auras une boucle infinie (arrête-la avec Ctrl+C).' ],
          code: `solde = 1000\nannees = 0\nwhile solde < 1500:\n    solde *= 1.10   # 10 % d'intérêt par an\n    annees += 1\nprint(annees)  # 5` },
        { h: 'break, continue et enumerate', p: [
          '`break` quitte la boucle immédiatement ; `continue` saute le reste du tour en cours et passe au suivant.',
          '`enumerate()` te donne l’indice et l’élément ensemble, sans tenir un compteur à la main.' ],
          code: `for i, lettre in enumerate("abc"):\n    print(i, lettre)\n\nfor n in range(1, 10):\n    if n % 2 == 0:\n        continue   # saute les pairs\n    if n > 7:\n        break      # s'arrête en arrivant à 9\n    print(n, end=" ")  # 1 3 5 7` },
        { h: 'Exemple réel : le bilan des ventes de la semaine', real: true, p: [
          'Un café note ce qu’il vend chaque jour. Une boucle calcule le total et compte combien de jours ont dépassé 100 €.' ],
          code: `ventes = [120.5, 98.0, 143.25, 87.75, 210.0]\ntotal = 0\nbons_jours = 0\nfor montant in ventes:\n    total += montant\n    if montant >= 100:\n        bons_jours += 1\nprint("Total :", total)                     # Total : 659.5\nprint("Jours au-dessus de 100 € :", bons_jours)  # Jours au-dessus de 100 € : 3` },
      ],
      x: [
        out(`for i in range(3):\n    print(i)`, ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', '3'], '`range(3)` produit 0, 1 et 2 : il commence à 0 et n’inclut pas 3.'),
        mc('Quels nombres produit `range(2, 10, 3)` ?', ['2, 5, 8', '2, 4, 6, 8', '3, 6, 9', '2, 5, 8, 11'], 'Il commence à 2, ajoute 3 à chaque fois et s’arrête avant d’atteindre 10.'),
        out(`n = 0\nwhile n < 3:\n    n += 1\nprint(n)`, ['3', '2', '4', '0'], 'La boucle se répète tant que `n < 3`. Quand `n` vaut 3, la condition échoue et 3 est affiché.'),
        mc('Que fait `break` dans une boucle ?', ['Il quitte la boucle immédiatement', 'Il passe au tour suivant', 'Il termine tout le programme', 'Il relance la boucle'], '`break` arrête la boucle. Pour sauter seulement le tour en cours, utilise `continue`.'),
        out(`for c in "salut":\n    if c == "l":\n        continue\n    print(c, end="")`, ['saut', 'salut', 'sa', 'l'], '`continue` saute le "l". `end=""` évite le saut de ligne, donc tout s’affiche collé.'),
        out(`total = 0\nfor n in range(1, 5):\n    total += n\nprint(total)`, ['10', '15', '4', '5'], 'On additionne 1 + 2 + 3 + 4 = 10 ; `range(1, 5)` n’inclut pas 5.'),
        typ('Parcours la position et le nom en même temps', `noms = ["Ana", "Luis"]\nfor i, nom in ___(noms):\n    print(i, nom)`, 'enumerate', '`enumerate()` renvoie des paires (indice, élément) à chaque tour.'),
        out(`total = 0\nfor i in range(1, 4):\n    for j in range(i):\n        total += j\nprint(total)`, ['4', '6', '10', '3'], 'Avec i = 1 on ajoute 0 ; avec i = 2, 0 + 1 ; avec i = 3, 0 + 1 + 2. Au total 0 + 1 + 3 = 4.'),
      ],
    },
    // ───────────── Jour 11 ─────────────
    {
      t: 'Fonctions',
      d: 'Définir des fonctions avec def, renvoyer des résultats, paramètres par défaut, *args, **kwargs et portée.',
      guide: [
        { h: 'Définir et appeler une fonction', p: [
          'Une fonction est un bloc de code nommé que tu peux réutiliser. On la définit avec `def`, elle reçoit des paramètres entre parenthèses et renvoie un résultat avec `return`.',
          'Si tu te surprends à copier-coller le même code, il est temps d’en faire une fonction : en cas de bug, tu le corriges à un seul endroit.' ],
          code: `def saluer(nom):\n    return f"Bonjour, {nom}"\n\nprint(saluer("Ana"))   # Bonjour, Ana\nprint(saluer("Luis"))  # Bonjour, Luis` },
        { h: 'return n’est pas print', p: [
          '`print()` affiche seulement une valeur à l’écran ; `return` la renvoie pour que tu puisses la stocker et continuer à t’en servir.',
          'Une fonction sans `return` renvoie `None`. Si tu essaies d’y ajouter quelque chose, tu obtiens `TypeError`.' ],
          code: `def double_print(n):\n    print(n * 2)\n\ndef double_return(n):\n    return n * 2\n\nresultat = double_return(5) + 1\nprint(resultat)          # 11\nprint(double_print(5))   # affiche 10 puis None` },
        { h: 'Paramètres par défaut et nommés', p: [
          'Un paramètre peut avoir une valeur par défaut (`tva=0.20`) utilisée si tu ne le passes pas. Les paramètres avec défaut viennent toujours après les obligatoires.',
          'À l’appel, tu peux nommer les arguments (`remise=0.1`) : le code se lit mieux et l’ordre n’a plus d’importance.' ],
          code: `def prix_final(prix, tva=0.20, remise=0):\n    return round(prix * (1 - remise) * (1 + tva), 2)\n\nprint(prix_final(100))              # 120.0\nprint(prix_final(100, remise=0.1))  # 108.0\nprint(prix_final(100, tva=0.055))   # 105.5` },
        { h: '*args, **kwargs et plusieurs résultats', p: [
          '`*args` regroupe n’importe quel nombre d’arguments positionnels dans un tuple ; `**kwargs` regroupe les arguments nommés dans un dictionnaire.',
          'Pour renvoyer plusieurs valeurs, sépare-les par des virgules : la fonction renvoie un tuple que tu peux déballer.' ],
          code: `def stats(*nombres):\n    return min(nombres), max(nombres), sum(nombres) / len(nombres)\n\nmini, maxi, moyenne = stats(4, 8, 6)\nprint(mini, maxi, moyenne)  # 4 8 6.0\n\ndef profil(**donnees):\n    return donnees\n\nprint(profil(nom="Eva", age=28))  # {'nom': 'Eva', 'age': 28}` },
        { h: 'Portée des variables', p: [
          'Les variables créées dans une fonction sont locales : elles naissent à l’appel et disparaissent à la fin. Affecter dans une fonction crée une nouvelle variable locale, même si une autre du même nom existe dehors.',
          'Bonne pratique : une fonction reçoit ce dont elle a besoin par ses paramètres et renvoie le résultat, au lieu de toucher aux variables globales.' ],
          code: `compteur = 0\n\ndef incrementer():\n    compteur = 1   # variable locale, ne touche pas celle de dehors\n\nincrementer()\nprint(compteur)  # 0` },
        { h: 'Exemple réel : la note finale d’une matière', real: true, p: [
          'Un professeur compte l’examen à 60 % et le contrôle continu à 40 % (notes sur 10), même si certaines années le poids change. Une fonction avec un paramètre par défaut règle cela et renvoie la note et le résultat.' ],
          code: `def note_finale(examen, controle, poids_examen=0.6):\n    note = examen * poids_examen + controle * (1 - poids_examen)\n    resultat = "admis" if note >= 5 else "ajourné"\n    return round(note, 2), resultat\n\nprint(note_finale(4.5, 7))     # (5.5, 'admis')\nprint(note_finale(3, 6, 0.8))  # (3.6, 'ajourné')` },
      ],
      x: [
        fill(`___ saluer(nom):\n    return "Bonjour " + nom`, ['def', 'function', 'fun', 'func'], 'En Python, les fonctions se définissent avec `def`.'),
        out(`def double(n):\n    return n * 2\n\nprint(double(4))`, ['8', '44', 'n * 2', 'None'], 'La fonction renvoie 4 * 2, soit 8.'),
        typ('Complète la fonction pour qu’elle renvoie l’aire du triangle', `def aire(base, hauteur):\n    ___ base * hauteur / 2`, 'return', '`return` renvoie le résultat à celui qui a appelé la fonction.'),
        out(`def f(a, b=10):\n    return a + b\n\nprint(f(5))`, ['15', '5', 'Erreur', '510'], 'Comme on ne passe pas `b`, il prend sa valeur par défaut, 10.'),
        out(`def f():\n    print("salut")\n\nr = f()\nprint(r)`, ['salut\nNone', 'salut', 'None', 'Erreur'], '`f()` affiche "salut" mais n’a pas de `return`, donc elle renvoie `None`.'),
        out(`def somme(*nums):\n    return sum(nums)\n\nprint(somme(1, 2, 3))`, ['6', '(1, 2, 3)', '123', 'Erreur'], '`*nums` regroupe les arguments dans un tuple et `sum()` les additionne.'),
        out(`def f(a, b=2, c=3):\n    return a * b + c\n\nprint(f(1, c=10))`, ['12', '13', '5', 'Erreur'], '`b` garde sa valeur par défaut (2) et `c` vaut 10 : 1 * 2 + 10 = 12.'),
        out(`def bilan(*notes, minimum=5):\n    admis = 0\n    for n in notes:\n        if n >= minimum:\n            admis += 1\n    return admis, len(notes)\n\na, t = bilan(4, 7, 5, 9, minimum=6)\nprint(f"{a}/{t}")`, ['2/4', '3/4', '2/5', '3/5'], '`*notes` récupère (4, 7, 5, 9) et `minimum` vaut 6 : seuls 7 et 9 passent. La fonction renvoie un tuple qui est déballé.'),
      ],
    },
    // ───────────── Jour 12 ─────────────
    {
      t: 'Modules',
      d: 'Organiser le code en modules, les façons d’importer et la bibliothèque standard : math, random et plus.',
      guide: [
        { h: 'Qu’est-ce qu’un module ?', p: [
          'Un module est tout simplement un fichier `.py`. Tout ce que tu y définis (fonctions, variables, classes) peut être utilisé depuis un autre fichier avec `import`.',
          'Découper un programme en modules le rend plus facile à maintenir : chaque fichier s’occupe d’une seule chose.' ],
          code: `# fichier : outils.py\nTVA = 0.20\n\ndef avec_tva(prix):\n    return round(prix * (1 + TVA), 2)\n\n# fichier : main.py (dans le même dossier)\nimport outils\nprint(outils.avec_tva(50))  # 60.0` },
        { h: 'Façons d’importer', p: [
          '`import math` charge le module et tu utilises ses noms avec le préfixe : `math.sqrt()`. `from math import sqrt` n’importe que ce nom et tu l’utilises sans préfixe.',
          '`import statistics as st` lui donne un alias court. Évite `from module import *` : cela remplit ton code de noms et tu ne sauras plus d’où vient chacun.' ],
          code: `import math\nfrom math import sqrt, pi\nimport statistics as st\n\nprint(math.floor(3.7))     # 3\nprint(sqrt(81))            # 9.0\nprint(round(pi, 2))        # 3.14\nprint(st.mean([2, 4, 9]))  # 5` },
        { h: 'La bibliothèque standard', p: [
          'Python est livré « piles incluses » : `math` (mathématiques), `random` (hasard), `datetime` (dates), `os` et `pathlib` (fichiers), `json`, `csv`, `re`, `statistics`... Rien à installer.',
          '`random` sert aux jeux et aux simulations : `randint(a, b)` inclut les deux bornes, `choice()` choisit un élément et `shuffle()` mélange une liste sur place.' ],
          code: `import random\n\nprint(random.randint(1, 6))  # un nombre de 1 à 6\nprint(random.choice(["pierre", "feuille", "ciseaux"]))\ncartes = [1, 2, 3, 4]\nrandom.shuffle(cartes)       # mélange la liste sur place\nprint(cartes)` },
        { h: 'if __name__ == "__main__"', p: [
          'Quand tu exécutes un fichier directement, la variable `__name__` vaut `"__main__"`. Quand un autre fichier l’importe, elle contient le nom du module.',
          'C’est pourquoi le code de test ou le point d’entrée va dans ce `if` : importer le module n’exécute alors rien par surprise.' ],
          code: `def main():\n    print("Exécution du programme")\n\nif __name__ == "__main__":\n    main()` },
        { h: 'Exemple réel : générer un mot de passe sûr', real: true, p: [
          'N’utilise pas `random` pour les mots de passe et les jetons : il est prévisible. Le module standard `secrets` est conçu pour cela, et `string` fournit les lettres et chiffres prêts à l’emploi.' ],
          code: `import secrets\nimport string\n\ndef generer_mot_de_passe(longueur=12):\n    caracteres = string.ascii_letters + string.digits + "!@#$%"\n    mdp = ""\n    for _ in range(longueur):\n        mdp += secrets.choice(caracteres)\n    return mdp\n\nprint(generer_mot_de_passe())  # p. ex. k7R!x2Qm@9Lz` },
      ],
      x: [
        fill(`___ math\nprint(math.pi)`, ['import', 'include', 'using', 'require'], '`import` charge un module en Python.'),
        out(`import math\nprint(math.sqrt(25))`, ['5.0', '5', '25', 'Erreur'], '`math.sqrt` renvoie toujours un `float`.'),
        mc('Que fait `from math import pi` ?', ['Il importe seulement le nom pi pour l’utiliser directement', 'Il importe tout le module sous le nom pi', 'Il crée une variable pi dans math', 'Il télécharge le module math'], 'Ensuite tu peux écrire `pi` sans le préfixe `math.`.'),
        fill(`import statistics ___ st\nprint(st.mean([1, 2, 3]))`, ['as', 'to', '=', 'alias'], '`as` donne un alias au module importé.'),
        mc('Que renvoie `random.randint(1, 6)` ?', ['Un entier entre 1 et 6, bornes incluses', 'Un entier entre 1 et 5', 'Un décimal entre 1 et 6', 'Toujours 1'], 'Contrairement à `range`, `randint` inclut la borne supérieure.'),
        out(`from math import floor, ceil\nprint(floor(2.5), ceil(2.1))`, ['2 3', '3 3', '2 2', '3 2'], '`floor` arrondit vers le bas et `ceil` vers le haut, quelles que soient les décimales.'),
        mc('À quoi sert `if __name__ == "__main__":` ?', ['À exécuter du code seulement quand le fichier est lancé directement, pas quand il est importé', 'À déclarer la fonction principale obligatoire', 'À importer le module main', 'À vérifier la version de Python'], 'Quand le fichier est importé, `__name__` contient le nom du module et ce bloc ne s’exécute pas.'),
        out(`import math as m\nfrom statistics import mean\ncotes = [3, 4]\nhypotenuse = m.sqrt(cotes[0] ** 2 + cotes[1] ** 2)\nprint(hypotenuse, mean(cotes + [hypotenuse]))`, ['5.0 4.0', '5 4', '5.0 4', '25.0 4.0'], '√(9 + 16) = 5.0, un `float`. La moyenne de [3, 4, 5.0] vaut 4.0 : comme il y a un `float`, le résultat en est un aussi.'),
      ],
    },
    // ───────────── Jour 13 ─────────────
    {
      t: 'Compréhensions de liste',
      d: 'Créer des listes, des dictionnaires et des ensembles en une ligne, avec filtres et transformations.',
      guide: [
        { h: 'De la boucle à la compréhension', p: [
          'Une compréhension de liste crée une nouvelle liste en appliquant une expression à chaque élément : `[expression for element in iterable]`.',
          'Elle fait la même chose qu’une boucle avec `append()`, mais en une ligne et généralement plus vite.' ],
          code: `prix = [10, 20, 40]\navec_tva = []\nfor p in prix:\n    avec_tva.append(p * 1.2)\n\navec_tva = [p * 1.2 for p in prix]   # la même chose en une ligne\nprint([round(p, 1) for p in avec_tva])  # [12.0, 24.0, 48.0]` },
        { h: 'Filtrer et choisir', p: [
          'Un `if` à la fin filtre : seuls les éléments qui remplissent la condition entrent.',
          'Si tu veux choisir entre deux valeurs pour chaque élément, le `if ... else` se place avant le `for` (c’est un ternaire).' ],
          code: `nums = [3, -1, 8, 0, -5]\npositifs = [n for n in nums if n > 0]\netiquettes = ["pair" if n % 2 == 0 else "impair" for n in nums]\nprint(positifs)    # [3, 8]\nprint(etiquettes)  # ['impair', 'impair', 'pair', 'pair', 'impair']` },
        { h: 'Compréhensions de dictionnaire et d’ensemble', p: [
          'Avec des accolades et `clé: valeur`, tu crées un dictionnaire ; avec des accolades et une seule valeur, un ensemble.',
          'Elles sont idéales pour construire des tables de recherche rapides à partir d’une liste.' ],
          code: `noms = ["ana", "luis", "eva"]\nlongueurs = {n: len(n) for n in noms}\ninitiales = {n[0].upper() for n in ["ana", "alba", "luis"]}\nprint(longueurs)          # {'ana': 3, 'luis': 4, 'eva': 3}\nprint(sorted(initiales))  # ['A', 'L']` },
        { h: 'Imbriquées, et quand ne pas les utiliser', p: [
          'Tu peux enchaîner plusieurs `for` pour aplatir une liste de listes. Ils se lisent dans le même ordre que des boucles normales.',
          'Si une compréhension ne tient pas sur une ligne ou demande plusieurs conditions, une boucle normale sera plus lisible. La clarté l’emporte.' ],
          code: `matrice = [[1, 2], [3, 4], [5, 6]]\nplate = [x for ligne in matrice for x in ligne]\nprint(plate)  # [1, 2, 3, 4, 5, 6]` },
        { h: 'Exemple réel : nettoyer les e-mails d’un formulaire', real: true, p: [
          'Un formulaire d’inscription enregistre les e-mails tels que les gens les ont tapés : avec des espaces, des majuscules, des vides ou sans @. Une compréhension les nettoie et les filtre d’un coup.' ],
          code: `saisies = [" Ana@Mail.com", "", "luis@mail.com ", "sans-arobase", "EVA@mail.com"]\nemails = [s.strip().lower() for s in saisies if "@" in s]\nprint(emails)  # ['ana@mail.com', 'luis@mail.com', 'eva@mail.com']` },
      ],
      x: [
        out(`carres = [x * x for x in range(4)]\nprint(carres)`, ['[0, 1, 4, 9]', '[1, 4, 9, 16]', '[0, 2, 4, 6]', '[0, 1, 4, 9, 16]'], 'On applique `x * x` à chaque valeur de 0 à 3.'),
        fill(`majuscules = [m.upper() ___ m in ["a", "b"]]`, ['for', 'in', 'with', 'each'], 'La structure est `[expression for element in iterable]`.'),
        out(`pairs = [n for n in range(10) if n % 2 == 0]\nprint(pairs)`, ['[0, 2, 4, 6, 8]', '[2, 4, 6, 8, 10]', '[0, 2, 4, 6, 8, 10]', '[1, 3, 5, 7, 9]'], 'Le `if` garde les nombres pairs de 0 à 9.'),
        out(`carres = {n: n * n for n in range(3)}\nprint(carres)`, ['{0: 0, 1: 1, 2: 4}', '[0, 1, 4]', '{0, 1, 4}', '{1: 1, 2: 4}'], 'C’est une compréhension de dictionnaire : chaque clé `n` est associée à `n * n`.'),
        out(`print([c for c in "bonjour" if c != "o"])`, ["['b', 'n', 'j', 'u', 'r']", 'bnjur', "['b', 'o', 'n', 'j', 'o', 'u', 'r']", "['o', 'o']"], 'On parcourt chaque lettre et on écarte les "o".'),
        ord('Écris une compréhension qui double chaque nombre de nums', ['[', 'n * 2', 'for', 'n', 'in', 'nums', ']'], ['(', 'each'], 'D’abord l’expression, puis `for` variable `in` iterable, le tout entre crochets.'),
        out(`print(["A" if n > 5 else "B" for n in [3, 7, 5]])`, ["['B', 'A', 'B']", "['A']", "['B', 'A', 'A']", "['A', 'B', 'A']"], 'Le ternaire choisit "A" ou "B" pour chaque nombre. 5 n’est pas plus grand que 5, donc il obtient "B".'),
        out(`ventes = {"lun": 120, "mar": 80, "mer": 150}\nbons = {j: v * 2 for j, v in ventes.items() if v >= 100}\nprint(bons, sum(bons.values()))`, ["{'lun': 240, 'mer': 300} 540", "{'lun': 120, 'mer': 150} 270", "{'lun': 240, 'mar': 160, 'mer': 300} 700", '[240, 300] 540'], 'Le filtre laisse le mardi (80) de côté et l’expression double les autres : 240 + 300 = 540.'),
      ],
    },
    // ───────────── Jour 14 ─────────────
    {
      t: 'Fonctions d’ordre supérieur',
      d: 'Les fonctions comme valeurs : lambda, map, filter, sorted avec key, closures et décorateurs.',
      guide: [
        { h: 'Les fonctions sont aussi des valeurs', p: [
          'En Python, une fonction est un objet comme un autre : tu peux la stocker dans une variable, la passer en argument ou la renvoyer depuis une autre fonction.',
          'Une fonction d’ordre supérieur reçoit ou renvoie d’autres fonctions. Elle permet d’écrire du code générique qui s’adapte à ce que tu lui passes.' ],
          code: `def crier(texte):\n    return texte.upper() + " !"\n\ndef appliquer(fonction, valeur):\n    return fonction(valeur)\n\nprint(appliquer(crier, "salut"))  # SALUT !\nprint(appliquer(len, "salut"))    # 5` },
        { h: 'lambda : des fonctions d’une ligne', p: [
          '`lambda parametres: expression` crée une petite fonction anonyme. On l’utilise surtout comme argument de `sorted`, `map`, `filter`, `max`...',
          'Si la logique demande plus d’une expression, définis une fonction normale avec `def`.' ],
          code: `double = lambda x: x * 2\nprint(double(7))  # 14\n\nproduits = [("pain", 1.2), ("fromage", 4.5), ("lait", 0.9)]\nproduits.sort(key=lambda p: p[1])\nprint(produits[0])  # ('lait', 0.9)` },
        { h: 'map, filter et reduce', p: [
          '`map(f, donnees)` applique `f` à chaque élément ; `filter(f, donnees)` garde ceux pour lesquels `f` est vraie. Ils renvoient des itérateurs : entoure-les de `list()` pour voir le résultat.',
          '`reduce` (du module `functools`) combine tous les éléments en une seule valeur. Une compréhension de liste est souvent plus lisible que `map` et `filter`.' ],
          code: `from functools import reduce\n\nnums = [1, 2, 3, 4, 5]\nprint(list(map(lambda n: n ** 2, nums)))         # [1, 4, 9, 16, 25]\nprint(list(filter(lambda n: n % 2 == 1, nums)))  # [1, 3, 5]\nprint(reduce(lambda a, b: a * b, nums))          # 120` },
        { h: 'Closures', p: [
          'Une fonction définie dans une autre se souvient des variables de la fonction extérieure, même une fois celle-ci terminée. C’est une closure.',
          'Cela sert à fabriquer des fonctions configurées : ici, une fonction de remise pour chaque pourcentage.' ],
          code: `def creer_remise(pourcentage):\n    def appliquer(prix):\n        return prix * (1 - pourcentage / 100)\n    return appliquer\n\nsoldes = creer_remise(20)\nprint(soldes(50))  # 40.0` },
        { h: 'Décorateurs', p: [
          'Un décorateur est une fonction qui en reçoit une autre et renvoie une version enrichie. On l’applique avec `@nom` au-dessus du `def`.',
          'On s’en sert pour journaliser les appels, mesurer le temps, vérifier des droits ou mettre en cache des résultats sans toucher à la fonction d’origine. Flask, que tu verras au jour 26, les utilise pour les routes.' ],
          code: `def journaliser(fonction):\n    def enveloppe(*args):\n        print("Appel de", fonction.__name__)\n        return fonction(*args)\n    return enveloppe\n\n@journaliser\ndef additionner(a, b):\n    return a + b\n\nprint(additionner(2, 3))\n# Appel de additionner\n# 5` },
        { h: 'Exemple réel : le catalogue d’une boutique', real: true, p: [
          'Avec `filter`, `map`, `sorted` et `max` avec `key`, tu peux répondre à des questions sur un catalogue : quels produits coûtent moins de 20 € et lequel est le plus cher.' ],
          code: `produits = [\n    {"nom": "Casque", "prix": 59.9},\n    {"nom": "Câble USB", "prix": 7.5},\n    {"nom": "Souris", "prix": 19.9},\n]\npas_chers = filter(lambda p: p["prix"] < 20, produits)\nnoms = sorted(map(lambda p: p["nom"], pas_chers))\nprint(noms)  # ['Câble USB', 'Souris']\nplus_cher = max(produits, key=lambda p: p["prix"])\nprint(plus_cher["nom"])  # Casque` },
      ],
      x: [
        mc('Qu’est-ce qu’une fonction d’ordre supérieur ?', ['Une fonction qui reçoit ou renvoie d’autres fonctions', 'Une fonction définie dans une classe', 'Une fonction avec plus de trois paramètres', 'Une fonction qui s’exécute plus vite'], '`map`, `filter` et `sorted(key=...)` en sont des exemples : ils reçoivent une fonction en argument.'),
        out(`carre = lambda x: x ** 2\nprint(carre(3))`, ['9', '6', '27', '8'], '`**` est la puissance : 3 au carré vaut 9.'),
        fill(`double = ___ x: x * 2\nprint(double(5))  # 10`, ['lambda', 'def', 'fn', 'func'], 'Les fonctions anonymes d’une ligne se créent avec `lambda`.'),
        out(`print(list(map(lambda n: n + 1, [1, 2, 3])))`, ['[2, 3, 4]', '[1, 2, 3]', '6', '<map object>'], '`map` applique la fonction à chaque élément et `list()` affiche le résultat.'),
        out(`print(list(filter(lambda n: n > 2, [1, 2, 3, 4])))`, ['[3, 4]', '[1, 2]', '[False, False, True, True]', '2'], '`filter` garde les éléments pour lesquels la fonction renvoie `True`.'),
        out(`def multiplicateur(n):\n    def f(x):\n        return x * n\n    return f\n\ntriple = multiplicateur(3)\nprint(triple(5))`, ['15', '8', '3', 'Erreur'], '`f` est une closure : elle se souvient de la valeur de `n` même si `multiplicateur` est déjà terminée.'),
        out(`def crier(f):\n    def enveloppe():\n        return f().upper()\n    return enveloppe\n\n@crier\ndef salutation():\n    return "bonjour"\n\nprint(salutation())`, ['BONJOUR', 'bonjour', 'enveloppe', 'Erreur'], '`@crier` remplace `salutation` par `enveloppe`, qui met le résultat en majuscules.'),
        out(`from functools import reduce\nnums = [3, 8, 1, 6]\nr = reduce(lambda a, b: a + b, map(lambda n: n * 10, filter(lambda n: n > 2, nums)))\nprint(r)`, ['170', '180', '17', '[30, 80, 60]'], '`filter` garde 3, 8 et 6 ; `map` les multiplie par 10 et `reduce` les additionne : 30 + 80 + 60 = 170.'),
      ],
    },
    // ───────────── Jour 15 ─────────────
    {
      t: 'Erreurs de type',
      d: 'Lire un traceback et reconnaître les erreurs les plus courantes : SyntaxError, NameError, TypeError, ValueError...',
      guide: [
        { h: 'Comment lire un traceback', p: [
          'Quand quelque chose échoue, Python affiche un traceback. Lis-le de bas en haut : la dernière ligne donne le type d’erreur et son message ; juste au-dessus apparaissent le fichier, la ligne et le code qui a échoué.',
          'Copier cette dernière ligne dans un moteur de recherche mène souvent directement à la solution.' ],
          code: `Traceback (most recent call last):\n  File "boutique.py", line 3, in <module>\n    total = prix * quantite\nNameError: name 'quantite' is not defined` },
        { h: 'SyntaxError et IndentationError', p: [
          'Une `SyntaxError` signifie que le code est mal écrit et que Python ne commence même pas à l’exécuter : il manque deux-points, une parenthèse ou des guillemets.',
          '`IndentationError` est un cas particulier : l’indentation ne colle pas. Ne mélange pas tabulations et espaces ; règle ton éditeur sur 4 espaces.' ],
          code: `if age >= 18      # SyntaxError: expected ':'\n    print("majeur")\n\ndef saluer():\nprint("salut")    # IndentationError: expected an indented block` },
        { h: 'NameError, TypeError et ValueError', p: [
          '`NameError` : tu utilises un nom qui n’existe pas (une faute de frappe ou une variable pas encore créée).',
          '`TypeError` : l’opération n’a pas de sens avec ce type, comme additionner du texte et un nombre. `ValueError` : le type est bon mais pas la valeur, comme `int("trente")`.' ],
          code: `print(nom)       # NameError: name 'nom' is not defined\n"Âge : " + 30    # TypeError: can only concatenate str (not "int") to str\nint("trente")    # ValueError: invalid literal for int() with base 10: 'trente'\nlen(5)           # TypeError: object of type 'int' has no len()` },
        { h: 'Autres erreurs fréquentes', p: [
          '`IndexError` : indice hors de la liste. `KeyError` : clé absente du dictionnaire. `AttributeError` : méthode ou attribut que cet objet n’a pas.',
          '`ZeroDivisionError` : division par zéro. `ModuleNotFoundError` : le module n’existe pas ou n’est pas installé (ou il est mal orthographié).' ],
          code: `couleurs = ["rouge", "vert"]\ncouleurs[2]       # IndexError: list index out of range\n{"a": 1}["b"]     # KeyError: 'b'\n"salut".push("!") # AttributeError: 'str' object has no attribute 'push'\n10 / 0            # ZeroDivisionError: division by zero\nimport numpi      # ModuleNotFoundError: No module named 'numpi'` },
        { h: 'Exemple réel : déboguer le calcul d’une moyenne', real: true, p: [
          'Les notes arrivent d’un formulaire sous forme de texte. Les additionner directement lève `TypeError`, et le traceback est clair : `sum()` essaie d’additionner un `int` et un `str`. La solution est de les convertir avant.' ],
          code: `notes = ["7", "8.5", "6"]\n# moyenne = sum(notes) / len(notes)\n# TypeError: unsupported operand type(s) for +: 'int' and 'str'\nnombres = [float(n) for n in notes]\nmoyenne = sum(nombres) / len(nombres)\nprint(round(moyenne, 2))  # 7.17` },
      ],
      x: [
        mc('Quelle erreur produit `print(nom)` si `nom` n’existe pas ?', ['NameError', 'TypeError', 'SyntaxError', 'ValueError'], 'Python ne trouve aucune variable portant ce nom.'),
        mc('Quelle erreur produit `"5" + 5` ?', ['TypeError', 'ValueError', 'NameError', 'Aucune'], 'On ne peut pas additionner un `str` et un `int` ; convertis l’un des deux d’abord.'),
        mc('Quelle erreur produit `[1, 2, 3][5]` ?', ['IndexError', 'KeyError', 'ValueError', 'TypeError'], 'L’indice 5 n’existe pas dans une liste de 3 éléments.'),
        mc('Quelle erreur produit `int("salut")` ?', ['ValueError', 'TypeError', 'NameError', 'SyntaxError'], 'Le type est bon (un texte), mais sa valeur ne peut pas devenir un nombre.'),
        out(`print(1 / 0)`, ['ZeroDivisionError', '0', 'inf', 'None'], 'Diviser par zéro lève `ZeroDivisionError`.'),
        mc('Quelle erreur produit `"salut".push("!")` ?', ['AttributeError', 'TypeError', 'NameError', 'SyntaxError'], 'Les chaînes n’ont aucune méthode appelée `push`.'),
        typ('Écris le type d’erreur que produit ce code', `x = 5\nif x > 3\n    print(x)\n# Erreur : ___`, 'SyntaxError', 'Il manque `:` à la fin du `if`, donc le code est mal écrit et Python ne l’exécute jamais.'),
        mc('Quelle erreur est levée en premier quand ce code s’exécute ?', ['TypeError', 'ZeroDivisionError', 'KeyError', 'ValueError'], 'La deuxième ligne échoue déjà : `"1.20"` est un texte et ne peut pas s’additionner au `float` 0.95. La division par zéro ne s’exécute jamais.', `prix = {"pain": "1.20", "lait": 0.95}\ntotal = prix["pain"] + prix["lait"]\nprint(total / 0)`),
      ],
    },
    // ───────────── Jour 16 ─────────────
    {
      t: 'Date et heure',
      d: 'Le module datetime : créer des dates, les formater, lire du texte et calculer des écarts.',
      guide: [
        { h: 'Le module datetime', p: [
          '`datetime` a plusieurs classes : `date` (date seule), `time` (heure seule), `datetime` (date et heure) et `timedelta` (une durée).',
          '`datetime.now()` donne l’instant présent et `date.today()` la date du jour. Leurs attributs `year`, `month`, `day`, `hour`... te donnent chaque partie.' ],
          code: `from datetime import datetime, date\n\nmaintenant = datetime.now()\nprint(maintenant.year, maintenant.month, maintenant.day)\naujourdhui = date.today()\nprint(aujourdhui)  # p. ex. 2025-03-14` },
        { h: 'Créer des dates précises', p: [
          'Passe l’année, le mois et le jour (et si tu veux l’heure et les minutes) au constructeur. Une date affichée apparaît au format ISO : année-mois-jour.',
          '`weekday()` renvoie le jour de la semaine sous forme de nombre : 0 est lundi et 6 dimanche.' ],
          code: `from datetime import date, datetime\n\nanniv = date(1995, 8, 21)\nprint(anniv.year)       # 1995\nprint(anniv.weekday())  # 0\nrdv = datetime(2025, 6, 3, 17, 30)\nprint(rdv)              # 2025-06-03 17:30:00` },
        { h: 'De la date au texte et du texte à la date', p: [
          '`strftime()` (string format time) transforme une date en texte au format voulu : `%d` jour, `%m` mois, `%Y` année, `%H` heure et `%M` minutes.',
          '`strptime()` (string parse time) fait l’inverse : il lit un texte dans ce format et renvoie un `datetime`. Si le texte ne correspond pas, il lève `ValueError`.' ],
          code: `from datetime import datetime\n\nrdv = datetime(2025, 6, 3, 17, 30)\nprint(rdv.strftime("%d/%m/%Y %H:%M"))  # 03/06/2025 17:30\nnoel = datetime.strptime("25/12/2025", "%d/%m/%Y")\nprint(noel.month)                      # 12` },
        { h: 'Ajouter et retirer du temps', p: [
          'Ajouter un `timedelta` à une date l’avance ; le retirer la recule. Python sait déjà combien de jours a chaque mois et quelles années sont bissextiles.',
          'Soustraire deux dates donne un `timedelta` ; son attribut `days` est l’écart en jours.' ],
          code: `from datetime import date, timedelta\n\ndebut = date(2025, 1, 30)\nprint(debut + timedelta(days=7))  # 2025-02-06\nfin = date(2025, 12, 31)\nprint((fin - debut).days)         # 335` },
        { h: 'Exemple réel : calculer l’âge de quelqu’un', real: true, p: [
          'Soustraire les années ne suffit pas : si la personne n’a pas encore eu son anniversaire cette année, il faut en retirer une. Comparer des tuples `(mois, jour)` le règle en une ligne.',
          'Recevoir `aujourdhui` en paramètre, au lieu d’appeler `date.today()` dedans, rend la fonction facile à tester.' ],
          code: `from datetime import date\n\ndef age(naissance, aujourdhui):\n    annees = aujourdhui.year - naissance.year\n    if (aujourdhui.month, aujourdhui.day) < (naissance.month, naissance.day):\n        annees -= 1   # pas encore d'anniversaire cette année\n    return annees\n\nprint(age(date(1990, 11, 5), date(2025, 3, 14)))  # 34` },
      ],
      x: [
        fill(`from datetime ___ datetime\nprint(datetime.now())`, ['import', 'include', 'use', 'from'], '`from module import nom` importe un nom précis du module.'),
        out(`from datetime import date\nd = date(2024, 5, 9)\nprint(d.year)`, ['2024', '5', '9', '2024-05-09'], '`year` est l’attribut qui contient l’année.'),
        out(`from datetime import date\nd = date(2024, 5, 9)\nprint(d.strftime("%d/%m/%Y"))`, ['09/05/2024', '2024/05/09', '9/5/2024', '05/09/2024'], '`%d` est le jour sur deux chiffres, `%m` le mois et `%Y` l’année sur quatre.'),
        out(`from datetime import date\na = date(2024, 1, 1)\nb = date(2024, 1, 31)\nprint((b - a).days)`, ['30', '31', '1', 'Erreur'], 'Soustraire deux dates donne un `timedelta` ; du 1er au 31, il y a 30 jours.'),
        out(`from datetime import date, timedelta\nd = date(2024, 2, 28) + timedelta(days=1)\nprint(d)`, ['2024-02-29', '2024-03-01', '2024-02-28', 'Erreur'], '2024 est bissextile, donc le 28 février est suivi du 29.'),
        mc('Que fait `datetime.strptime("10/03/2024", "%d/%m/%Y")` ?', ['Il transforme le texte en objet datetime', 'Il transforme une date en texte', 'Il renvoie la date du jour', 'Il calcule l’écart en jours'], 'strptime vient de « string parse time » : du texte vers la date. `strftime` fait l’inverse.'),
        typ('Ajoute deux semaines à la date', `from datetime import date, timedelta\nnouvelle = date(2025, 1, 1) + timedelta(___=2)`, 'weeks', '`timedelta` accepte `days`, `weeks`, `hours`, `minutes` et `seconds`.'),
        out(`from datetime import date, timedelta\nfacture = date(2025, 1, 31)\nechance = facture + timedelta(days=30)\nprint(echance.strftime("%d/%m"), (echance - facture).days, echance > facture)`, ['02/03 30 True', '28/02 30 True', '03/02 30 True', '02/03 28 True'], 'Février 2025 a 28 jours : 30 jours après le 31 janvier, c’est le 2 mars. Les dates se comparent avec `>`.'),
      ],
    },
    // ───────────── Jour 17 ─────────────
    {
      t: 'Gestion des exceptions',
      d: 'Gérer les erreurs avec try, except, else et finally, et lever les tiennes avec raise.',
      guide: [
        { h: 'try et except', p: [
          'Certaines erreurs ne dépendent pas de toi : l’utilisateur tape des lettres là où tu attendais un nombre, un fichier n’existe pas ou le réseau tombe. `try` exécute le code qui peut échouer et `except` décide quoi faire s’il échoue, au lieu que le programme s’arrête.',
          'Capture toujours le type précis (`except ValueError`). Un `except:` tout seul attrape aussi des erreurs inattendues et cache de vrais bugs.' ],
          code: `texte = "douze"\ntry:\n    nombre = int(texte)\nexcept ValueError:\n    print("Ce n'est pas un nombre")\n    nombre = 0\nprint(nombre)  # 0` },
        { h: 'Plusieurs exceptions et as', p: [
          'Tu peux enchaîner plusieurs `except`, un par type d’erreur. Python utilise le premier qui correspond.',
          'Avec `except TypeErreur as e`, tu stockes l’exception dans `e` pour afficher ou journaliser son message.' ],
          code: `def diviser(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "Impossible de diviser par zéro"\n    except TypeError as e:\n        return f"Mauvais type : {e}"\n\nprint(diviser(10, 2))  # 5.0\nprint(diviser(10, 0))  # Impossible de diviser par zéro` },
        { h: 'else et finally', p: [
          '`else` ne s’exécute que si le `try` n’a levé aucune erreur : c’est là que va le code qui dépend du bon déroulement.',
          '`finally` s’exécute toujours, erreur ou pas. On l’utilise pour libérer des ressources : fermer des fichiers ou des connexions.' ],
          code: `try:\n    resultat = 10 / 2\nexcept ZeroDivisionError:\n    print("Erreur")\nelse:\n    print("Résultat :", resultat)  # seulement s'il n'y a pas eu d'erreur\nfinally:\n    print("Calcul terminé")         # toujours` },
        { h: 'Lever des erreurs avec raise', p: [
          'Avec `raise`, tu lèves toi-même une exception quand les données n’ont pas de sens pour ta fonction. Mieux vaut échouer tôt avec un message clair que renvoyer un résultat faux.',
          'C’est celui qui appelle la fonction qui décide s’il capture l’erreur et comment.' ],
          code: `def retirer(solde, montant):\n    if montant > solde:\n        raise ValueError("Solde insuffisant")\n    return solde - montant\n\ntry:\n    retirer(50, 80)\nexcept ValueError as e:\n    print("Erreur :", e)  # Erreur : Solde insuffisant` },
        { h: 'Exemple réel : demander l’âge jusqu’à ce qu’il soit valide', real: true, p: [
          'Dans un programme en console, tu ne peux pas te fier à ce que tape l’utilisateur. Cette boucle repose la question jusqu’à obtenir un entier positif, sans que le programme plante.' ],
          code: `while True:\n    try:\n        age = int(input("Âge : "))\n        if age < 0:\n            raise ValueError("négatif")\n        break\n    except ValueError:\n        print("Saisis un nombre entier positif")\nprint("Âge enregistré :", age)` },
      ],
      x: [
        fill(`___:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("erreur")`, ['try', 'do', 'catch', 'test'], 'Le bloc qui peut échouer va dans `try`.'),
        out(`try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("erreur")\nfinally:\n    print("fin")`, ['erreur\nfin', 'fin', 'erreur', 'inf\nfin'], 'Diviser par zéro lève `ZeroDivisionError`, qui est capturée. `finally` s’exécute toujours.'),
        mc('Quand le bloc `finally` s’exécute-t-il ?', ['Toujours, erreur ou pas', 'Seulement s’il y a une erreur', 'Seulement s’il n’y a pas d’erreur', 'Jamais, il est facultatif'], 'On l’utilise pour libérer des ressources comme des fichiers ou des connexions.'),
        out(`try:\n    n = int("abc")\nexcept ValueError:\n    n = -1\nprint(n)`, ['-1', 'abc', '0', 'Erreur'], 'La conversion échoue, `ValueError` est capturée et -1 est affecté.'),
        out(`try:\n    print("a")\nexcept ValueError:\n    print("b")\nelse:\n    print("c")`, ['a\nc', 'a\nb', 'a', 'a\nb\nc'], 'Il n’y a pas eu d’erreur, donc après le `try` c’est le `else` qui s’exécute.'),
        fill(`def diviser(a, b):\n    if b == 0:\n        ___ ValueError("b ne peut pas valoir 0")\n    return a / b`, ['raise', 'throw', 'except', 'error'], 'En Python, les exceptions se lèvent avec `raise`. `throw` appartient à Java et JavaScript.'),
        out(`try:\n    x = [1, 2][5]\nexcept KeyError:\n    print("clé")\nexcept IndexError:\n    print("indice")`, ['indice', 'clé', 'clé\nindice', 'IndexError'], 'L’indice 5 n’existe pas, donc `IndexError` est levée et le deuxième `except` la capture.'),
        out(`def convertir(valeurs):\n    total = 0\n    for v in valeurs:\n        try:\n            total += int(v)\n        except ValueError:\n            total -= 1\n        finally:\n            total += 10\n    return total\n\nprint(convertir(["5", "a", "2"]))`, ['36', '6', '26', '37'], '"5" ajoute 5, "a" retire 1 et "2" ajoute 2, et `finally` ajoute 10 à chaque tour : 5 - 1 + 2 + 30 = 36.'),
      ],
    },
    // ───────────── Jour 18 ─────────────
    {
      t: 'Expressions régulières',
      d: 'Chercher, valider et remplacer des motifs de texte avec le module re.',
      guide: [
        { h: 'Qu’est-ce qu’une expression régulière ?', p: [
          'Une expression régulière (regex) est un motif qui décrit un type de texte : « trois chiffres », « quelque chose qui ressemble à un e-mail »... Le module `re` cherche ces motifs.',
          'Écris les motifs comme des chaînes brutes, avec un `r` devant (`r"\\d+"`), pour que Python n’interprète pas les barres obliques inverses.',
          '`re.search()` renvoie la première correspondance (ou `None`) et `re.findall()` une liste de toutes.' ],
          code: `import re\n\ntexte = "Commande 4521 expédiée le 12/03"\nprint(re.search(r"\\d+", texte).group())  # 4521\nprint(re.findall(r"\\d+", texte))         # ['4521', '12', '03']` },
        { h: 'Les symboles de base', p: [
          '`\\d` est un chiffre, `\\w` une lettre, un chiffre ou un tiret bas, `\\s` un espace et `.` n’importe quel caractère. `[aeiou]` est l’un de ces caractères et `[^0-9]` tout ce qui n’est pas un chiffre.',
          'Quantificateurs : `+` une fois ou plus, `*` zéro fois ou plus, `?` facultatif et `{5}` exactement cinq. `^` marque le début, `$` la fin et `\\b` une limite de mot.',
          'Attention : `[aeiou]` n’inclut pas les voyelles accentuées.' ],
          code: `import re\n\nprint(re.findall(r"[aeiou]", "éducation"))                  # ['u', 'a', 'i', 'o']\nprint(re.findall(r"\\b\\w{5}\\b", "le chien mange du pain"))  # ['chien', 'mange']\nprint(bool(re.fullmatch(r"\\d{5}", "75001")))               # True` },
        { h: 'search, match, fullmatch et groupes', p: [
          '`match()` ne cherche qu’au début du texte, `fullmatch()` exige que tout le texte corresponde et `search()` cherche n’importe où.',
          'Les parenthèses créent des groupes que tu peux extraire séparément avec `group(n)` ou tous ensemble avec `groups()`.' ],
          code: `import re\n\ndate = "Date : 2025-03-14"\nm = re.search(r"(\\d{4})-(\\d{2})-(\\d{2})", date)\nprint(m.group(1))             # 2025\nprint(m.groups())             # ('2025', '03', '14')\nprint(re.match(r"\\d", date))  # None` },
        { h: 'Remplacer et découper', p: [
          '`re.sub(motif, remplacement, texte)` remplace toutes les correspondances. `re.split()` coupe le texte selon un motif, plus souple que `str.split()`.' ],
          code: `import re\n\nprint(re.sub(r"\\s+", " ", "beaucoup    trop   d'espaces"))  # beaucoup trop d'espaces\nprint(re.split(r"[,;]\\s*", "rouge, vert;bleu"))             # ['rouge', 'vert', 'bleu']` },
        { h: 'Exemple réel : valider des e-mails et extraire des téléphones', real: true, p: [
          'Un formulaire doit refuser les e-mails mal écrits, et un CRM veut récupérer les numéros de téléphone dans des notes prises à la main, avec ou sans espaces.',
          'Aucun motif d’e-mail n’est parfait ; celui-ci couvre les cas habituels. Pour vraiment valider une adresse, on envoie un e-mail de confirmation.' ],
          code: `import re\n\nmotif_email = r"^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"\nfor email in ["ana@mail.com", "faux@", "luis.p@entreprise.fr"]:\n    print(email, bool(re.match(motif_email, email)))\n\nnotes = "Appeler Ana au 06 12 34 56 78 ou Luis au 0699112233"\nprint(re.findall(r"0\\d(?:\\s?\\d{2}){4}", notes))  # ['06 12 34 56 78', '0699112233']` },
      ],
      x: [
        mc('Quel module Python travaille avec les expressions régulières ?', ['re', 'regex', 'regexp', 'match'], 'Le module standard s’appelle `re`.'),
        mc('Que représente `\\d` dans une expression régulière ?', ['Un chiffre de 0 à 9', 'N’importe quelle lettre', 'Un espace', 'La fin du texte'], '`\\d` équivaut à `[0-9]`.'),
        out(`import re\nprint(re.findall(r"\\d+", "a12b3"))`, ["['12', '3']", "['1', '2', '3']", '12, 3', '[12, 3]'], '`\\d+` cherche des suites d’un ou plusieurs chiffres consécutifs, et renvoie des chaînes.'),
        out(`import re\nprint(re.sub(r"\\s+", "-", "bonjour  le monde"))`, ['bonjour-le-monde', 'bonjour--le-monde', 'bonjourlemonde', 'bonjour le monde'], '`\\s+` regroupe les espaces consécutifs en une seule correspondance.'),
        out(`import re\nprint(bool(re.match(r"^[A-Z]", "python")))`, ['False', 'True', 'None', 'P'], '`^[A-Z]` exige que le texte commence par une majuscule, et "python" commence par une minuscule.'),
        fill(`import re\ntexte = "ana@web.com et luis@web.com"\nemails = re.___(r"\\w+@\\w+\\.com", texte)  # toutes les correspondances`, ['findall', 'search', 'match', 'find'], '`findall` renvoie une liste avec toutes les correspondances.'),
        out(`import re\nm = re.search(r"(\\w+)@(\\w+)", "écris à ana@mail demain")\nprint(m.group(2))`, ['mail', 'ana', 'ana@mail', '@'], 'Le motif a deux groupes : le premier capture "ana" et le second "mail".'),
        out(`import re\nlog = "ERROR 404 sur /login, ERROR 500 sur /paiement, OK 200 sur /"\nerreurs = re.findall(r"ERROR (\\d{3})", log)\nprint(erreurs, re.sub(r"\\d", "#", erreurs[0]))`, ["['404', '500'] ###", "['ERROR 404', 'ERROR 500'] ###", "['404', '500', '200'] ###", "['404', '500'] #"], 'Avec un groupe, `findall` ne renvoie que ce qui est capturé, et 200 n’est pas précédé de ERROR. `sub` remplace chaque chiffre de "404" par #.'),
      ],
    },
    // ───────────── Jour 19 ─────────────
    {
      t: 'Gestion des fichiers',
      d: 'Lire et écrire des fichiers texte avec open() et with, et travailler avec CSV et JSON.',
      guide: [
        { h: 'Ouvrir et écrire', p: [
          '`open(chemin, mode)` ouvre un fichier. Modes : `"r"` lire (par défaut), `"w"` écrire en effaçant ce qu’il y avait, `"a"` ajouter à la fin et `"x"` créer (échoue s’il existe déjà).',
          'Utilise toujours `with open(...) as f:` : le fichier se ferme tout seul à la fin du bloc, même en cas d’erreur. Indique `encoding="utf-8"` pour que les accents soient bien enregistrés sur n’importe quel système.' ],
          code: `with open("notes.txt", "w", encoding="utf-8") as f:\n    f.write("Acheter du pain\\n")\n    f.write("Appeler le médecin\\n")\n\nwith open("notes.txt", "a", encoding="utf-8") as f:\n    f.write("Payer l'électricité\\n")` },
        { h: 'Lire', p: [
          '`read()` renvoie tout le contenu dans une chaîne, `readline()` une ligne et `readlines()` une liste de lignes (chacune avec son `\\n` final).',
          'Pour les gros fichiers, parcours le fichier avec `for` : il lit ligne par ligne sans tout charger en mémoire.' ],
          code: `with open("notes.txt", encoding="utf-8") as f:\n    for numero, ligne in enumerate(f, start=1):\n        print(numero, ligne.strip())\n# 1 Acheter du pain\n# 2 Appeler le médecin\n# 3 Payer l'électricité` },
        { h: 'Chemins et fichiers inexistants', p: [
          'Ouvrir en lecture un fichier qui n’existe pas lève `FileNotFoundError` ; capture-la si cela peut arriver.',
          '`pathlib.Path` gère les chemins sans te soucier de savoir si le système utilise `/` ou `\\`, et te donne l’extension, le nom ou l’existence du fichier.' ],
          code: `from pathlib import Path\n\nchemin = Path("donnees") / "clients.csv"\nprint(chemin.suffix)    # .csv\nprint(chemin.name)      # clients.csv\nprint(chemin.exists())  # False s'il n'existe pas encore` },
        { h: 'JSON', p: [
          'JSON est le format standard pour stocker et échanger des données structurées. `json.dump()` écrit un objet Python dans un fichier et `json.load()` le relit.',
          '`json.dumps()` et `json.loads()` (avec un s pour string) font la même chose avec du texte. Remarque que le `True` de Python devient `true` en JSON.' ],
          code: `import json\n\nreglages = {"theme": "sombre", "langue": "fr", "alertes": True}\nwith open("reglages.json", "w", encoding="utf-8") as f:\n    json.dump(reglages, f, indent=2)\n\nwith open("reglages.json", encoding="utf-8") as f:\n    charges = json.load(f)\nprint(charges["theme"])          # sombre\nprint(json.dumps({"ok": True}))  # {"ok": true}` },
        { h: 'Exemple réel : additionner les dépenses d’un CSV', real: true, p: [
          'Ta banque te permet de télécharger tes opérations en CSV. `csv.DictReader` lit chaque ligne comme un dictionnaire dont les clés sont les noms de l’en-tête.',
          'Ouvre les CSV avec `newline=""`, comme le recommande la documentation du module `csv`.' ],
          code: `import csv\n\nwith open("depenses.csv", "w", newline="", encoding="utf-8") as f:\n    f.write("poste,montant\\nloyer,650\\nélectricité,48.30\\ncourses,212.45\\n")\n\ntotal = 0\nwith open("depenses.csv", newline="", encoding="utf-8") as f:\n    for ligne in csv.DictReader(f):\n        total += float(ligne["montant"])\nprint(f"Dépenses du mois : {total:.2f} €")  # Dépenses du mois : 910.75 €` },
      ],
      x: [
        fill(`___ open("donnees.txt") as f:\n    texte = f.read()`, ['with', 'using', 'try', 'open'], '`with` ferme le fichier automatiquement à la fin du bloc, même en cas d’erreur.'),
        mc('Quel mode de `open()` ajoute du texte à la fin sans effacer ce qu’il y a ?', ['"a"', '"w"', '"r"', '"x"'], '`"w"` écrase tout le fichier ; `"a"` (append) ajoute à la fin.'),
        mc('Que se passe-t-il si tu ouvres avec `"r"` un fichier qui n’existe pas ?', ['FileNotFoundError est levée', 'Un fichier vide est créé', 'Il renvoie None', 'Il s’ouvre en mode écriture'], 'Seuls les modes d’écriture créent le fichier.'),
        out(`import json\ntexte = json.dumps({"a": 1})\nprint(type(texte))`, ["<class 'str'>", "<class 'dict'>", "<class 'json'>", '{"a": 1}'], '`dumps` (dump string) transforme un objet Python en texte JSON.'),
        out(`import json\nd = json.loads('{"x": [1, 2]}')\nprint(d["x"][1])`, ['2', '1', '[1, 2]', 'Erreur'], '`loads` transforme le texte JSON en dictionnaire.'),
        mc('Que renvoie `f.readlines()` ?', ['Une liste avec chaque ligne du fichier', 'Seulement la première ligne', 'Tout le texte dans une chaîne', 'Le nombre de lignes'], 'Chaque élément de la liste inclut le saut de ligne final.'),
        typ('Ouvre le fichier pour écrire à partir de zéro', `with open("log.txt", "___") as f:\n    f.write("début")`, 'w', '`"w"` crée le fichier ou efface son contenu avant d’écrire.'),
        out(`with open("t.txt", "w") as f:\n    f.write("un\\ndeux\\n")\nwith open("t.txt", "a") as f:\n    f.write("trois\\n")\nwith open("t.txt") as f:\n    lignes = f.readlines()\nprint(len(lignes), lignes[-1].strip())`, ['3 trois', '2 trois', '1 trois', '3 un'], '`"w"` écrit deux lignes et `"a"` ajoute la troisième sans effacer. `strip()` enlève le saut de ligne de "trois\\n".'),
      ],
    },
    // ───────────── Jour 20 ─────────────
    {
      t: 'Le gestionnaire de paquets pip',
      d: 'Installer, mettre à jour et figer des bibliothèques de PyPI avec pip et requirements.txt.',
      guide: [
        { h: 'pip et PyPI', p: [
          'La bibliothèque standard est vaste, mais la vraie puissance de Python se trouve sur PyPI (Python Package Index), un dépôt de centaines de milliers de paquets : `requests`, `pandas`, `flask`, `numpy`...',
          'pip est le programme qui les télécharge et les installe. Il est fourni avec Python. Si tu as plusieurs versions de Python, `python -m pip` garantit que tu installes dans celle que tu exécutes.' ],
          code: `pip --version\npip install requests\npip install requests==2.32.3   # une version exacte\npip install --upgrade requests\npip uninstall requests\npython -m pip install requests  # le pip de CE Python` },
        { h: 'Voir ce qui est installé', p: [
          '`pip list` affiche tous les paquets avec leur version et `pip show nom` donne les détails d’un paquet : version, dépendances et emplacement.' ],
          code: `pip list\npip show requests\n# Name: requests\n# Version: 2.32.3\n# Requires: certifi, charset-normalizer, idna, urllib3` },
        { h: 'requirements.txt', p: [
          '`pip freeze > requirements.txt` enregistre la liste exacte des paquets et versions du projet. Ce fichier va dans le dépôt avec le code.',
          'Quiconque clone le projet lance `pip install -r requirements.txt` et obtient exactement les mêmes versions. Tu évites ainsi le classique « ça marche sur ma machine ».' ],
          code: `# requirements.txt\nrequests==2.32.3\npython-dateutil==2.9.0\n\n# sur un autre ordinateur\npip install -r requirements.txt` },
        { h: 'Erreurs fréquentes', p: [
          '`ModuleNotFoundError` signifie en général que le paquet n’est pas installé dans le Python que tu utilises.',
          'Le nom pour installer ne correspond pas toujours au nom pour importer : `pip install beautifulsoup4` s’importe comme `bs4` et `pip install Pillow` comme `PIL`.',
          'N’installe que des paquets connus et vérifie le nom : il existe des paquets malveillants aux noms presque identiques à ceux des paquets populaires.' ],
          code: `pip install beautifulsoup4   # on l'installe ainsi...\n\nfrom bs4 import BeautifulSoup  # ...et on l'importe ainsi` },
        { h: 'Exemple réel : taux de change avec requests', real: true, p: [
          'Avec `requests`, tu peux interroger une API publique de devises en trois lignes. `timeout` évite que le programme reste bloqué et `raise_for_status()` lève une erreur si la réponse n’est pas correcte.' ],
          code: `# pip install requests\nimport requests\n\nr = requests.get("https://api.frankfurter.app/latest?from=EUR&to=USD", timeout=10)\nr.raise_for_status()\ndonnees = r.json()\nprint("1 EUR =", donnees["rates"]["USD"], "USD")` },
      ],
      x: [
        mc('Qu’est-ce que pip ?', ['Le gestionnaire de paquets de Python', 'Un éditeur de code', 'Un type de données', 'Un framework web'], 'pip installe et gère les bibliothèques tierces.'),
        ord('Installe le paquet requests', ['pip', 'install', 'requests'], ['get', 'npm'], 'La commande est `pip install` suivie du nom du paquet.'),
        mc('D’où pip télécharge-t-il les paquets par défaut ?', ['De PyPI, le Python Package Index', 'De GitHub', 'De npm', 'Du Microsoft Store'], 'PyPI héberge des centaines de milliers de paquets Python.'),
        mc('Que fait `pip freeze > requirements.txt` ?', ['Il enregistre les paquets installés et leurs versions dans un fichier', 'Il empêche Python de se mettre à jour', 'Il supprime les paquets', 'Il installe les paquets du fichier'], 'Ainsi, d’autres personnes peuvent reproduire ton environnement.'),
        typ('Installe les dépendances listées dans le fichier', `pip install ___ requirements.txt`, '-r', '`-r` indique à pip de lire la liste des paquets dans un fichier.'),
        mc('Quelle commande affiche les paquets installés ?', ['pip list', 'pip show-all', 'pip ls', 'pip installed'], '`pip show nom` donne les détails d’un paquet précis.'),
        mc('Tu lances `pip install beautifulsoup4`. Comment l’importes-tu ?', ['from bs4 import BeautifulSoup', 'import beautifulsoup4', 'from beautifulsoup4 import BeautifulSoup', 'import soup'], 'Le paquet PyPI s’appelle beautifulsoup4, mais le module qu’il installe s’appelle `bs4`.'),
        mc('Ton script échoue avec `ModuleNotFoundError: No module named \'requests\'`, mais `pip install requests` dit qu’il est déjà installé. Quelle est la cause la plus probable ?', ['pip installe dans un autre Python que celui qui exécute le script : utilise python -m pip install requests', 'requests n’existe pas sur PyPI', 'Il faut écrire import Requests avec une majuscule', 'Il faut redémarrer l’ordinateur'], 'Avec plusieurs installations de Python, `pip` et `python` peuvent ne pas correspondre. `python -m pip` utilise le pip du même interpréteur.'),
      ],
    },
    // ───────────── Jour 21 ─────────────
    {
      t: 'Classes et objets',
      d: 'class, __init__, self, attributs, héritage, super() et dataclasses.',
      guide: [
        { h: 'Classes et objets', p: [
          'Une classe est un modèle qui décrit des données (attributs) et un comportement (méthodes). Chaque objet créé à partir d’elle est une instance avec ses propres valeurs.',
          '`__init__` s’exécute à la création de l’objet et prépare ses attributs. `self` est l’instance elle-même : avec `self.nom`, tu y stockes une donnée.' ],
          code: `class Chien:\n    def __init__(self, nom, age):\n        self.nom = nom\n        self.age = age\n\n    def aboyer(self):\n        return f"{self.nom} fait ouaf"\n\nrex = Chien("Rex", 3)\nprint(rex.aboyer())  # Rex fait ouaf\nprint(rex.age)       # 3` },
        { h: 'Attributs de classe et d’instance', p: [
          'Un attribut d’instance (`self.x`) est propre à chaque objet. Un attribut de classe est défini dans le corps de la classe et partagé par toutes les instances.',
          'Utilise-les pour des constantes ou des compteurs communs. Attention aux listes : si une liste est un attribut de classe, toutes les instances modifient la même.' ],
          code: `class Compteur:\n    total = 0  # de classe : partagé\n\n    def __init__(self):\n        Compteur.total += 1\n        self.id = Compteur.total  # d'instance\n\na = Compteur()\nb = Compteur()\nprint(a.id, b.id, Compteur.total)  # 1 2 2` },
        { h: 'Héritage et super()', p: [
          'Avec `class Enfant(Parent)`, la classe enfant reçoit toutes les méthodes du parent et peut les redéfinir.',
          '`super()` appelle la méthode du parent. On l’utilise surtout dans `__init__` pour réutiliser l’initialisation.' ],
          code: `class Animal:\n    def __init__(self, nom):\n        self.nom = nom\n\n    def parler(self):\n        return "..."\n\nclass Chat(Animal):\n    def __init__(self, nom, interieur):\n        super().__init__(nom)\n        self.interieur = interieur\n\n    def parler(self):\n        return "miaou"\n\nminou = Chat("Minou", True)\nprint(minou.nom, minou.parler())  # Minou miaou` },
        { h: 'Méthodes spéciales et dataclasses', p: [
          'Les méthodes à double tiret bas changent le comportement de l’objet avec les outils de Python : `__str__` à l’affichage, `__len__` avec `len()` et `__eq__` lors d’une comparaison avec `==`.',
          'Le décorateur `@dataclass` génère automatiquement `__init__`, `__repr__` et `__eq__` pour les classes qui ne font que stocker des données.' ],
          code: `from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\np = Point(1, 2)\nprint(p)                 # Point(x=1, y=2)\nprint(p == Point(1, 2))  # True` },
        { h: 'Exemple réel : un panier d’achat', real: true, p: [
          'Une boutique en ligne doit garder les produits du panier et calculer le total. Une classe regroupe les données et les opérations au même endroit.' ],
          code: `class Panier:\n    def __init__(self):\n        self.articles = []\n\n    def ajouter(self, produit, prix, quantite=1):\n        self.articles.append((produit, prix, quantite))\n\n    def total(self):\n        return sum(prix * qte for _, prix, qte in self.articles)\n\n    def __str__(self):\n        return f"Panier de {len(self.articles)} produits : {self.total():.2f} €"\n\np = Panier()\np.ajouter("Livre", 12.50)\np.ajouter("Stylo", 1.20, 3)\nprint(p)  # Panier de 2 produits : 16.10 €` },
      ],
      x: [
        fill(`class Chien:\n    def ___(self, nom):\n        self.nom = nom`, ['__init__', 'constructor', 'init', '__new__'], '`__init__` est la méthode qui s’exécute à la création de l’objet.'),
        mc('Que représente `self` dans une méthode ?', ['L’instance actuelle de l’objet', 'La classe parente', 'Une variable globale', 'Le module actuel'], '`self` est l’objet précis sur lequel la méthode est appelée.'),
        out(`class Chat:\n    def __init__(self, n):\n        self.n = n\n\n    def parler(self):\n        return self.n + " dit miaou"\n\nprint(Chat("Tom").parler())`, ['Tom dit miaou', 'miaou', 'n dit miaou', 'Erreur'], 'L’objet stocke "Tom" dans `self.n` et `parler()` l’utilise.'),
        fill(`class Animal:\n    pass\n\nclass Poisson(___):\n    pass`, ['Animal', 'extends Animal', ':Animal', '<Animal>'], 'Pour hériter, on met la classe parente entre parenthèses.'),
        out(`class A:\n    def salut(self):\n        return "A"\n\nclass B(A):\n    def salut(self):\n        return "B" + super().salut()\n\nprint(B().salut())`, ['BA', 'B', 'A', 'AB'], 'B renvoie "B" et y ajoute ce que renvoie la méthode du parent, "A".'),
        out(`class Compteur:\n    total = 0\n\n    def __init__(self):\n        Compteur.total += 1\n\nCompteur()\nCompteur()\nprint(Compteur.total)`, ['2', '0', '1', 'Erreur'], '`total` est un attribut de classe, partagé par toutes les instances, et deux ont été créées.'),
        mc('Quelle méthode définit le texte affiché par `print(objet)` ?', ['__str__', '__print__', 'toString', '__text__'], '`__str__` renvoie la représentation lisible de l’objet.'),
        out(`class Compte:\n    def __init__(self, solde=0):\n        self.solde = solde\n\n    def deposer(self, x):\n        self.solde += x\n        return self\n\nc = Compte(10).deposer(5).deposer(20)\nprint(c.solde)`, ['35', '10', '25', 'Erreur'], 'Chaque `deposer` renvoie `self`, donc les appels s’enchaînent sur le même objet : 10 + 5 + 20 = 35.'),
      ],
    },
    // ───────────── Jour 22 ─────────────
    {
      t: 'Web scraping',
      d: 'Télécharger des pages avec requests et extraire des données avec BeautifulSoup.',
      guide: [
        { h: 'Qu’est-ce que le web scraping ?', p: [
          'Le web scraping consiste à télécharger des pages web et à extraire de leur HTML les données qui t’intéressent : prix, titres, horaires...',
          'On l’utilise quand un site ne propose pas d’API. S’il existe une API, utilise-la : elle est plus stable et conçue pour les programmes.' ] },
        { h: 'Télécharger le HTML avec requests', p: [
          '`requests.get(url)` télécharge la page. `status_code` indique si tout s’est bien passé (200) et `.text` contient le HTML.',
          'Indique toujours un `timeout` pour que le programme n’attende pas indéfiniment si le serveur ne répond pas.' ],
          code: `import requests\n\nr = requests.get("https://example.com", timeout=10)\nprint(r.status_code)  # 200\nprint(r.text[:15])    # <!doctype html>` },
        { h: 'Analyser le HTML avec BeautifulSoup', p: [
          'BeautifulSoup (`pip install beautifulsoup4`) transforme le HTML en un arbre que tu peux parcourir. `find()` renvoie le premier élément, `find_all()` tous et `select()` accepte des sélecteurs CSS.',
          '`.text` ou `.get_text(strip=True)` donnent le texte, et `element["href"]` lit un attribut.' ],
          code: `from bs4 import BeautifulSoup\n\nhtml = """<ul>\n  <li class="p">Café <span>1.80</span></li>\n  <li class="p">Thé <span>1.50</span></li>\n</ul>"""\nsoup = BeautifulSoup(html, "html.parser")\nfor li in soup.select("li.p"):\n    nom = li.contents[0].strip()\n    prix = float(li.span.text)\n    print(nom, prix)\n# Café 1.8\n# Thé 1.5` },
        { h: 'Le faire de façon responsable', p: [
          'Consulte le fichier `robots.txt` et les conditions d’utilisation du site, ne collecte pas de données personnelles et attends entre les requêtes avec `time.sleep(1)` pour ne pas surcharger le serveur.',
          'Les pages changent : si le HTML change, ton scraper ne marche plus. Vérifie que `find()` n’a pas renvoyé `None` avant d’utiliser le résultat.' ] },
        { h: 'Exemple réel : les titres d’un site d’actualités', real: true, p: [
          'Un script qui lit les cinq premiers titres de Hacker News avec leurs liens. C’est la base de toute revue de presse automatique.' ],
          code: `import time\nimport requests\nfrom bs4 import BeautifulSoup\n\nurl = "https://news.ycombinator.com/"\nr = requests.get(url, timeout=10, headers={"User-Agent": "cours-sintaxis/1.0"})\nsoup = BeautifulSoup(r.text, "html.parser")\n\nfor lien in soup.select(".titleline > a")[:5]:\n    print("-", lien.get_text(strip=True))\n    print("  ", lien["href"])\ntime.sleep(1)  # pause avant la requête suivante` },
      ],
      x: [
        mc('Quelle bibliothèque utilise-t-on couramment pour analyser du HTML en Python ?', ['BeautifulSoup', 'NumPy', 'Flask', 'Pygame'], 'BeautifulSoup transforme le HTML en un arbre facile à parcourir.'),
        mc('Que renvoie `requests.get(url).text` ?', ['Le contenu de la réponse sous forme de texte', 'Un objet BeautifulSoup', 'Le code de statut', 'Une liste de liens'], '`.status_code` donnerait le code HTTP, comme 200.'),
        fill(`soup = BeautifulSoup(html, "html.parser")\ntitres = soup.___("h2")  # tous les h2`, ['find_all', 'find', 'get', 'select_one'], '`find_all` renvoie tous les éléments ; `find` seulement le premier.'),
        out(`from bs4 import BeautifulSoup\nsoup = BeautifulSoup("<p>Bonjour</p>", "html.parser")\nprint(soup.p.text)`, ['Bonjour', '<p>Bonjour</p>', 'p', 'None'], '`.text` extrait le texte sans les balises.'),
        mc('Comment obtiens-tu l’URL d’un lien `a` avec BeautifulSoup ?', ['lien["href"]', 'lien.url', 'lien.text', 'lien.link()'], 'Les attributs HTML se lisent comme les clés d’un dictionnaire.'),
        mc('Quel fichier indique quelles parties d’un site peuvent être explorées ?', ['robots.txt', 'sitemap.css', 'index.html', '.htaccess'], 'Respecter robots.txt fait partie d’un scraping responsable.'),
        out(`from bs4 import BeautifulSoup\nhtml = '<a href="/a">A</a><a href="/b">B</a>'\nsoup = BeautifulSoup(html, "html.parser")\nprint([a["href"] for a in soup.find_all("a")])`, ["['/a', '/b']", "['A', 'B']", '/a', "['/a']"], '`find_all` renvoie tous les liens et `a["href"]` lit l’attribut de chacun.'),
        out(`from bs4 import BeautifulSoup\nhtml = "<div><p>Bonjour</p></div>"\nsoup = BeautifulSoup(html, "html.parser")\nprint(soup.find("span") is None, soup.div.p.text)`, ['True Bonjour', 'False Bonjour', 'None Bonjour', 'Erreur'], '`find` renvoie `None` s’il n’y a aucune correspondance (il n’y a pas de span). `soup.div.p` descend jusqu’au paragraphe dans le div.'),
      ],
    },
    // ───────────── Jour 23 ─────────────
    {
      t: 'Environnements virtuels',
      d: 'venv : isoler les dépendances de chaque projet.',
      guide: [
        { h: 'Le problème qu’ils résolvent', p: [
          'Imagine deux projets : l’un a besoin de Django 4 et l’autre de Django 5. Si tu installes tout dans le Python du système, l’un des deux casse.',
          'Un environnement virtuel est un dossier avec son propre Python et ses propres paquets. Chaque projet a le sien et ils ne se marchent pas dessus.' ] },
        { h: 'Créer et activer un environnement', p: [
          '`python -m venv .venv` crée l’environnement dans le dossier `.venv`. Ensuite il faut l’activer ; l’invite du terminal affichera `(.venv)` au début.' ],
          code: `# créer\npython -m venv .venv\n\n# activer sous macOS et Linux\nsource .venv/bin/activate\n\n# activer sous Windows (PowerShell)\n.venv\\Scripts\\Activate.ps1\n\n# sortir de l'environnement\ndeactivate` },
        { h: 'Installer et partager les dépendances', p: [
          'Avec l’environnement actif, `pip install` installe seulement à l’intérieur. À la fin, enregistre la liste avec `pip freeze > requirements.txt`.',
          'Le dossier `.venv` ne va pas dans Git : on l’ajoute à `.gitignore` et chacun le recrée avec `pip install -r requirements.txt`.' ],
          code: `pip install flask requests\npip freeze > requirements.txt\n\n# dans .gitignore\n.venv/` },
        { h: 'Vérifier quel Python est utilisé', p: [
          'Si un paquet ne s’importe pas, vérifie quel interpréteur tu utilises. Avec un environnement actif, `sys.prefix` pointe vers le dossier de l’environnement.',
          'Les éditeurs comme VS Code permettent de choisir l’interpréteur de l’environnement pour que l’autocomplétion et l’exécution utilisent les mêmes paquets.' ],
          code: `import sys\nprint(sys.executable)                 # chemin du Python utilisé\nprint(sys.prefix != sys.base_prefix)  # True si un environnement est actif` },
        { h: 'Exemple réel : préparer un nouveau projet', real: true, p: [
          'Voici les étapes que tu suivrais au début de tout projet Python professionnel, par exemple une appli qui consulte la météo.' ],
          code: `mkdir appli-meteo\ncd appli-meteo\npython -m venv .venv\nsource .venv/bin/activate\npip install requests\npip freeze > requirements.txt\necho ".venv/" > .gitignore\ngit init` },
      ],
      x: [
        mc('À quoi sert un environnement virtuel ?', ['À isoler les dépendances de chaque projet', 'À exécuter Python dans le navigateur', 'À rendre le code plus rapide', 'À créer des machines virtuelles'], 'Chaque projet peut utiliser des versions différentes des mêmes bibliothèques.'),
        ord('Crée un environnement virtuel dans le dossier .venv', ['python', '-m', 'venv', '.venv'], ['pip', 'new'], '`-m venv` exécute le module venv ; le dernier argument est le dossier.'),
        mc('Sous Windows avec PowerShell, comment active-t-on l’environnement `.venv` ?', ['.venv\\Scripts\\Activate.ps1', 'source .venv/bin/activate', 'activate .venv', 'python .venv'], 'Sous macOS et Linux, on utilise `source .venv/bin/activate`.'),
        mc('Faut-il mettre le dossier de l’environnement virtuel dans Git ?', ['Non : on l’ajoute à .gitignore et on partage requirements.txt', 'Oui, toujours', 'Seulement dans les gros projets', 'Seulement les fichiers .py qu’il contient'], 'L’environnement se recrée avec `pip install -r requirements.txt`.'),
        mc('Avec l’environnement actif, où `pip install flask` installe-t-il ?', ['Dans l’environnement virtuel du projet', 'Dans tout le système', 'Dans le dossier de l’utilisateur', 'Dans le cloud'], 'C’est pourquoi cela n’affecte pas les autres projets.'),
        typ('Écris la commande qui désactive l’environnement virtuel', `(.venv) $ ___`, 'deactivate', '`deactivate` te ramène au Python du système.'),
        mc('Qu’affiche `print(sys.prefix != sys.base_prefix)` avec un environnement virtuel actif ?', ['True', 'False', 'La version de Python', 'None'], 'Dans un environnement, `sys.prefix` pointe vers son dossier et diffère de `sys.base_prefix`.'),
        ord('Enregistre les dépendances de l’environnement dans requirements.txt', ['pip', 'freeze', '>', 'requirements.txt'], ['install', '-r'], '`pip freeze` liste les paquets avec leur version et `>` redirige cette sortie vers un fichier.'),
      ],
    },
    // ───────────── Jour 24 ─────────────
    {
      t: 'Statistiques',
      d: 'statistics et NumPy : moyenne, médiane, mode, dispersion et tableaux.',
      guide: [
        { h: 'Mesures de tendance centrale', p: [
          'La moyenne est la somme divisée par le nombre de valeurs, la médiane est la valeur centrale des données triées et le mode est la valeur la plus fréquente.',
          'La médiane résiste mieux aux valeurs extrêmes : avec des salaires, quelques très hauts font grimper la moyenne mais bougent à peine la médiane.' ],
          code: `import statistics as st\n\nsalaires = [1200, 1300, 1250, 1400, 9000]\nprint(st.mean(salaires))    # 2830\nprint(st.median(salaires))  # 1300` },
        { h: 'Dispersion : l’écart type', p: [
          'L’écart type mesure à quel point les données s’éloignent de la moyenne. Deux classes peuvent avoir la même moyenne et une dispersion très différente.',
          '`statistics.pstdev()` calcule l’écart type d’une population entière et `stdev()` celui d’un échantillon.' ],
          code: `import statistics as st\n\nclasse_a = [5, 5, 5, 5]\nclasse_b = [0, 10, 0, 10]\nprint(st.mean(classe_a), st.mean(classe_b))      # 5 5\nprint(st.pstdev(classe_a), st.pstdev(classe_b))  # 0.0 5.0` },
        { h: 'NumPy : calculer avec des tableaux', p: [
          'NumPy travaille très vite avec des tableaux de nombres. Les opérations s’appliquent à tous les éléments à la fois, sans boucle : c’est la vectorisation.',
          'Attention : avec une liste normale, `liste * 2` la répète ; avec un tableau, cela multiplie chaque élément.' ],
          code: `import numpy as np\n\ntemps = np.array([18.5, 21.0, 23.5, 19.0])\nprint(temps.mean())              # 20.5\nprint(temps.max(), temps.min())  # 23.5 18.5\nprint(temps * 9 / 5 + 32)        # les mêmes températures en Fahrenheit` },
        { h: 'Filtrer avec des conditions', p: [
          'Avec NumPy, tu peux utiliser une condition comme indice : `arr[arr > 20]` renvoie les éléments qui la remplissent.',
          '`np.percentile(donnees, 90)` donne la valeur sous laquelle se trouvent 90 % des données, pratique pour repérer les cas extrêmes.' ],
          code: `import numpy as np\n\nventes = np.array([120, 80, 300, 95, 150])\nprint(ventes[ventes > 100])  # [120 300 150]\nprint(ventes.sum())          # 745` },
        { h: 'Exemple réel : analyser les notes d’une classe', real: true, p: [
          'Un professeur veut un résumé rapide de son groupe : la moyenne, la médiane et combien ont réussi (notes sur 10).' ],
          code: `import statistics as st\n\nnotes = {"Ana": 8.5, "Luis": 6.0, "Eva": 9.5, "Léo": 4.5, "Sara": 7.0}\nvaleurs = list(notes.values())\n\nprint("Moyenne :", st.mean(valeurs))   # Moyenne : 7.1\nprint("Médiane :", st.median(valeurs))  # Médiane : 7.0\nadmis = [n for n, v in notes.items() if v >= 5]\nprint(f"Admis : {len(admis)} sur {len(notes)}")  # Admis : 4 sur 5` },
      ],
      x: [
        out(`import statistics as st\nprint(st.mean([2, 4, 6]))`, ['4', '12', '6', '3'], 'La moyenne est la somme (12) divisée par le nombre de valeurs (3).'),
        mc('Quelle mesure est la valeur centrale des données triées ?', ['La médiane', 'La moyenne', 'Le mode', 'L’écart type'], 'Avec [1, 3, 9], la médiane est 3.'),
        fill(`import statistics as st\nprint(st.___([1, 2, 2, 3]))  # 2, la valeur la plus répétée`, ['mode', 'mean', 'median', 'max'], '`mode` renvoie la valeur la plus fréquente.'),
        out(`import numpy as np\na = np.array([1, 2, 3])\nprint(a * 2)`, ['[2 4 6]', '[1, 2, 3, 1, 2, 3]', '[1 2 3 1 2 3]', 'Erreur'], 'NumPy multiplie chaque élément. Avec une liste normale, `* 2` la répéterait.'),
        out(`import numpy as np\nprint(np.arange(0, 10, 3))`, ['[0 3 6 9]', '[0 3 6]', '[3 6 9]', '[0, 3, 6, 9, 10]'], '`arange` fonctionne comme `range`, mais renvoie un tableau.'),
        out(`import numpy as np\nm = np.zeros((2, 3))\nprint(m.shape)`, ['(2, 3)', '(3, 2)', '6', '[2, 3]'], '`shape` indique les lignes et les colonnes.'),
        out(`import numpy as np\na = np.array([3, 8, 1, 9])\nprint(a[a > 2])`, ['[3 8 9]', '[8 9]', '[True True False True]', '[3, 8, 9]'], 'Une condition utilisée comme indice filtre le tableau et garde les éléments qui la remplissent.'),
        out(`import statistics as st\ndonnees = [2, 4, 4, 4, 100]\nprint(st.median(donnees), st.mode(donnees), st.mean(donnees) > 20)`, ['4 4 True', '4 4 False', '22.8 4 True', '4 100 True'], 'La médiane et le mode valent 4, mais le 100 fait monter la moyenne à 22.8. C’est pourquoi la médiane est plus fiable avec des valeurs extrêmes.'),
      ],
    },
    // ───────────── Jour 25 ─────────────
    {
      t: 'Pandas',
      d: 'Series, DataFrames, lire un CSV, filtrer, créer des colonnes et regrouper.',
      guide: [
        { h: 'Series et DataFrames', p: [
          'Pandas est la bibliothèque de référence pour analyser des données en tableaux. Une `Series` est une colonne avec un index et un `DataFrame` est un tableau à plusieurs colonnes.',
          'Par convention, on l’importe sous le nom `pd`.' ],
          code: `import pandas as pd\n\ndf = pd.DataFrame({\n    "produit": ["café", "thé", "jus"],\n    "prix": [1.8, 1.5, 2.5],\n    "vendus": [120, 45, 60],\n})\nprint(df.shape)          # (3, 3)\nprint(df["prix"].max())  # 2.5` },
        { h: 'Lire et explorer des données', p: [
          '`pd.read_csv("ventes.csv")` charge un CSV. Pour l’explorer, `head()` montre les premières lignes, `info()` les types et les valeurs manquantes, et `describe()` les statistiques de chaque colonne numérique.' ],
          code: `df = pd.read_csv("ventes.csv")\nprint(df.head())      # 5 premières lignes\ndf.info()             # colonnes, types et valeurs manquantes\nprint(df.describe())  # moyenne, minimum, maximum...` },
        { h: 'Sélectionner et filtrer', p: [
          '`df["col"]` sélectionne une colonne et `df[["a", "b"]]` plusieurs. Pour filtrer des lignes, utilise une condition : `df[df["prix"] > 2]`.',
          'Combine les conditions avec `&` (et) et `|` (ou), chacune entre parenthèses.' ],
          code: `pas_chers = df[df["prix"] < 2]\nprint(pas_chers["produit"].tolist())  # ['café', 'thé']\n\npopulaires = df[(df["prix"] < 2) & (df["vendus"] > 100)]\nprint(len(populaires))  # 1` },
        { h: 'Nouvelles colonnes et regroupements', p: [
          'Tu peux créer des colonnes calculées à partir d’autres. `groupby()` regroupe les lignes selon une colonne et permet de sommer, compter ou faire la moyenne de chaque groupe.' ],
          code: `df["recettes"] = df["prix"] * df["vendus"]\nprint(df["recettes"].sum())  # 433.5\n\nventes = pd.DataFrame({"magasin": ["A", "B", "A"], "total": [100, 50, 30]})\nprint(ventes.groupby("magasin")["total"].sum().to_dict())  # {'A': 130, 'B': 50}` },
        { h: 'Exemple réel : un rapport de ventes mensuel', real: true, p: [
          'Une tâche typique en entreprise : à partir d’un CSV avec toutes les ventes de l’année, calculer le total, le nombre de ventes et le panier moyen de chaque mois, puis l’exporter vers Excel.' ],
          code: `import pandas as pd\n\nventes = pd.read_csv("ventes_2025.csv", parse_dates=["date"])\nventes["mois"] = ventes["date"].dt.month\n\nrapport = (ventes.groupby("mois")["montant"]\n                 .agg(["sum", "count", "mean"])\n                 .round(2))\nprint(rapport)\nrapport.to_excel("rapport_mensuel.xlsx")` },
      ],
      x: [
        mc('Quelle structure pandas représente un tableau avec des lignes et des colonnes ?', ['DataFrame', 'Series', 'Array', 'Table'], 'Une `Series` est une seule colonne.'),
        fill(`import pandas as pd\ndf = pd.___("ventes.csv")`, ['read_csv', 'open_csv', 'load', 'csv'], '`read_csv` charge un fichier CSV dans un DataFrame.'),
        mc('Qu’affiche `df.head()` ?', ['Les 5 premières lignes', 'Les noms des colonnes', 'La dernière ligne', 'Les statistiques'], 'Tu peux passer un autre nombre : `df.head(10)`.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"x": [1, 2, 3]})\nprint(df["x"].sum())`, ['6', '3', '[1, 2, 3]', 'x'], 'Tu sélectionnes la colonne sous forme de Series et tu l’additionnes.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"age": [20, 35, 50]})\nprint(len(df[df["age"] > 30]))`, ['2', '1', '3', '0'], 'Le filtre garde les lignes avec 35 et 50.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"a": [1, 2], "b": [3, 4]})\nprint(df.shape)`, ['(2, 2)', '(4,)', '2', '(1, 2)'], '2 lignes et 2 colonnes.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"a": [1, 2, 3]})\ndf["b"] = df["a"] * 10\nprint(df["b"].tolist())`, ['[10, 20, 30]', '[1, 2, 3]', '[10]', '60'], 'L’opération s’applique à toute la colonne et en crée une nouvelle.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"magasin": ["A", "B", "A", "B"], "total": [10, 5, 20, 1]})\nr = df.groupby("magasin")["total"].sum()\nprint(r["A"], r["B"])`, ['30 6', '10 5', '15 3', '36'], '`groupby` regroupe les lignes par magasin et `sum` additionne chaque groupe : A = 10 + 20 et B = 5 + 1.'),
      ],
    },
    // ───────────── Jour 26 ─────────────
    {
      t: 'Python pour le web',
      d: 'Flask : routes, paramètres, gabarits et formulaires.',
      guide: [
        { h: 'Les frameworks web en Python', p: [
          'Un framework web reçoit les requêtes HTTP du navigateur et décide quoi répondre. En Python, les plus utilisés sont Flask (petit et souple), Django (complet, avec ORM et interface d’administration) et FastAPI (rapide et pensé pour les API).',
          'Aujourd’hui, on utilise Flask : `pip install flask`.' ] },
        { h: 'Ta première application Flask', p: [
          'Chaque route est associée à une fonction avec le décorateur `@app.route()`. Ce que renvoie la fonction est ce que voit le navigateur.',
          'Lance le serveur de développement avec `flask --app app run --debug` et ouvre http://127.0.0.1:5000 dans ton navigateur.' ],
          code: `# app.py\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef accueil():\n    return "<h1>Bonjour depuis Flask</h1>"\n\n@app.route("/bonjour/<nom>")\ndef bonjour(nom):\n    return f"Bonjour, {nom}"` },
        { h: 'Gabarits HTML', p: [
          'Pour des pages complètes, Flask utilise des gabarits Jinja rangés dans le dossier `templates`. `render_template()` les remplit avec tes données.',
          'Dans le gabarit, `{{ variable }}` affiche une valeur et `{% for %}` parcourt des listes. Jinja échappe le HTML automatiquement, ce qui protège contre l’injection de code.' ],
          code: `# app.py\nfrom flask import Flask, render_template\n\napp = Flask(__name__)\n\n@app.route("/taches")\ndef taches():\n    liste = ["Acheter du pain", "Étudier Python"]\n    return render_template("taches.html", taches=liste)\n\n# templates/taches.html\n# <ul>{% for t in taches %}<li>{{ t }}</li>{% endfor %}</ul>` },
        { h: 'Formulaires et méthodes HTTP', p: [
          'Une route peut accepter plusieurs méthodes : `GET` pour afficher et `POST` pour recevoir des données. Les champs du formulaire arrivent dans `request.form`.',
          'Après avoir traité un POST, redirige avec `redirect()` pour que recharger la page ne renvoie pas le formulaire.' ],
          code: `from flask import Flask, request, redirect\n\napp = Flask(__name__)\nmessages = []\n\n@app.route("/contact", methods=["GET", "POST"])\ndef contact():\n    if request.method == "POST":\n        messages.append(request.form["message"])\n        return redirect("/contact")\n    return f"Messages reçus : {len(messages)}"` },
        { h: 'Exemple réel : la carte d’un café', real: true, p: [
          'Un café veut publier sa carte sur un site qui se met à jour en modifiant une liste Python, sans toucher au HTML.' ],
          code: `from flask import Flask, render_template_string\n\napp = Flask(__name__)\nCARTE = [("Café", 1.80), ("Thé", 1.50), ("Tartine", 2.20)]\n\nGABARIT = """\n<h1>Carte</h1>\n<ul>{% for nom, prix in carte %}\n  <li>{{ nom }} : {{ "%.2f"|format(prix) }} €</li>\n{% endfor %}</ul>\n"""\n\n@app.route("/")\ndef carte():\n    return render_template_string(GABARIT, carte=CARTE)` },
      ],
      x: [
        mc('Qu’est-ce que Flask ?', ['Un microframework pour créer des applications web', 'Une base de données', 'Un éditeur de code', 'Un gestionnaire de paquets'], 'Flask est léger et s’enrichit avec des extensions.'),
        fill(`@app.___("/")\ndef accueil():\n    return "Bonjour"`, ['route', 'get_route', 'path', 'url'], '`@app.route` associe une URL à la fonction.'),
        mc('Avec la route `/bonjour/<nom>`, quelle valeur reçoit `nom` quand on visite `/bonjour/Ana` ?', ['"Ana"', '"<nom>"', '"bonjour"', 'None'], 'Les parties entre `< >` sont des variables de l’URL.'),
        mc('Quelle fonction remplit un gabarit HTML du dossier templates ?', ['render_template()', 'show_html()', 'template()', 'render()'], 'Les gabarits utilisent la syntaxe Jinja.'),
        fill(`@app.route("/contact", methods=[___])\ndef contact():\n    ...`, ['"GET", "POST"', 'GET, POST', '"get()", "post()"', 'ALL'], '`methods` est une liste de chaînes avec les méthodes HTTP autorisées.'),
        mc('Quel framework Python est plus complet et inclut un ORM et une interface d’administration ?', ['Django', 'Flask', 'NumPy', 'Requests'], 'Django suit la philosophie « piles incluses ».'),
        mc('Après avoir traité un formulaire en POST, pourquoi renvoyer `redirect()` ?', ['Pour que recharger la page ne renvoie pas le formulaire', 'Pour que la page charge plus vite', 'Parce que Flask l’exige', 'Pour effacer les données du formulaire'], 'C’est le modèle Post/Redirect/Get.'),
        out(`from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/double/<int:n>")\ndef double(n):\n    return str(n * 2)\n\nwith app.test_client() as c:\n    print(c.get("/double/21").text)`, ['42', '2121', '21', 'Erreur'], 'Le convertisseur `<int:n>` transforme "21" en entier, donc le résultat est 42 et non "2121". `test_client()` permet de tester les routes sans lancer le serveur.'),
      ],
    },
    // ───────────── Jour 27 ─────────────
    {
      t: 'Python avec MongoDB',
      d: 'pymongo : insérer, chercher, mettre à jour et supprimer des documents.',
      guide: [
        { h: 'Bases de données de documents', p: [
          'MongoDB est une base de données NoSQL : au lieu de tables aux colonnes fixes, elle stocke des documents de type JSON regroupés en collections.',
          'Chaque document peut avoir des champs différents, ce qui la rend souple pour des données qui changent souvent. Pour essayer sans rien installer, il existe MongoDB Atlas, qui propose une offre gratuite.' ] },
        { h: 'Se connecter avec pymongo', p: [
          '`pip install pymongo` installe le pilote officiel. `MongoClient` ouvre la connexion ; ensuite tu choisis la base et la collection comme s’il s’agissait de dictionnaires.',
          'N’écris pas le mot de passe dans le code : garde-le dans une variable d’environnement.' ],
          code: `import os\nfrom pymongo import MongoClient\n\nclient = MongoClient(os.environ["MONGO_URL"])\ndb = client["ecole"]\neleves = db["eleves"]` },
        { h: 'Créer et lire des documents', p: [
          '`insert_one()` et `insert_many()` ajoutent des documents. `find()` renvoie un curseur avec ceux qui correspondent au filtre et `find_one()` le premier.',
          'Les filtres sont des dictionnaires. Des opérateurs comme `$gt` (supérieur à), `$lt` (inférieur à) ou `$in` (dans une liste) permettent des requêtes plus riches.' ],
          code: `eleves.insert_many([\n    {"nom": "Ana", "age": 22, "cours": ["python"]},\n    {"nom": "Luis", "age": 19, "cours": ["java", "python"]},\n])\n\nfor e in eleves.find({"age": {"$gt": 20}}):\n    print(e["nom"])  # Ana\n\nprint(eleves.count_documents({"cours": "python"}))  # 2` },
        { h: 'Mettre à jour et supprimer', p: [
          '`update_one(filtre, changements)` modifie le premier document qui correspond. Utilise `$set` pour changer des champs et `$inc` pour ajouter à un nombre.',
          '`delete_one()` et `delete_many()` suppriment des documents. Vérifie bien le filtre : un filtre vide `{}` touche toute la collection.' ],
          code: `eleves.update_one({"nom": "Luis"}, {"$set": {"age": 20}})\neleves.update_one({"nom": "Ana"}, {"$inc": {"age": 1}})\neleves.delete_one({"nom": "Luis"})` },
        { h: 'Exemple réel : enregistrer les commandes d’une boutique', real: true, p: [
          'Les commandes d’une boutique en ligne se prêtent bien aux documents : chacune contient ses produits, sans besoin de plusieurs tables.' ],
          code: `from datetime import datetime\n\ncommandes = db["commandes"]\ncommandes.insert_one({\n    "client": "ana@example.com",\n    "date": datetime.now(),\n    "produits": [\n        {"nom": "Livre", "prix": 12.5, "quantite": 1},\n        {"nom": "Tasse", "prix": 6.0, "quantite": 2},\n    ],\n    "statut": "en attente",\n})\n\nen_attente = commandes.count_documents({"statut": "en attente"})\nprint("Commandes en attente :", en_attente)` },
      ],
      x: [
        mc('Quel type de base de données est MongoDB ?', ['NoSQL orientée documents', 'Relationnelle avec des tables SQL', 'Un tableur', 'Un fichier CSV'], 'Elle stocke des documents souples au lieu de lignes aux colonnes fixes.'),
        mc('Quelle bibliothèque connecte Python à MongoDB ?', ['pymongo', 'mongopy', 'sqlite3', 'pandas'], '`pymongo` est le pilote officiel.'),
        fill(`db.utilisateurs.___({"nom": "Luis"})  # ajoute un document`, ['insert_one', 'add', 'push', 'create'], '`insert_one` insère un document ; `insert_many`, plusieurs.'),
        mc('Que cherche le filtre `{"age": {"$gt": 30}}` ?', ['Les documents dont l’âge est supérieur à 30', 'Un âge égal à 30', 'Un âge inférieur à 30', 'Les âges entre 0 et 30'], '`$gt` signifie « greater than ». Autres opérateurs : `$lt`, `$gte` et `$ne`.'),
        mc('Que renvoie `collection.find()` sans filtre ?', ['Un curseur avec tous les documents', 'Seulement le premier document', 'Le nombre de documents', 'None'], 'Pour n’en obtenir qu’un, il existe `find_one()`.'),
        fill(`db.utilisateurs.update_one(\n    {"nom": "Luis"},\n    {___: {"age": 31}}\n)`, ['"$set"', '"$update"', '"$put"', '"set"'], '`$set` ne change que les champs indiqués.'),
        typ('Complète l’opérateur qui ajoute 1 au champ visites', `pages.update_one({"url": "/"}, {"___": {"visites": 1}})`, '$inc', '`$inc` augmente un champ numérique de la quantité indiquée.'),
        mc('Avec les documents `{"nom": "Ana", "cours": ["python"]}` et `{"nom": "Luis", "cours": ["java", "python"]}`, que renvoie `count_documents({"cours": "python"})` ?', ['2', '1', '0', 'Une erreur, car cours est une liste'], 'Quand le champ est une liste, MongoDB cherche à l’intérieur : les deux documents contiennent "python".'),
      ],
    },
    // ───────────── Jour 28 ─────────────
    {
      t: 'API',
      d: 'HTTP, méthodes, codes de statut et consommer des API avec requests.',
      guide: [
        { h: 'Qu’est-ce qu’une API ?', p: [
          'Une API est un contrat qui permet à deux programmes de communiquer. Les API web reçoivent des requêtes HTTP sur une URL et répondent avec des données, presque toujours en JSON.',
          'C’est ainsi que ton programme obtient la météo, des cours de bourse, des cartes ou des traductions sans rien copier à la main.' ] },
        { h: 'Méthodes et codes de statut', p: [
          'La méthode indique l’action : GET lit, POST crée, PUT ou PATCH mettent à jour et DELETE supprime.',
          'Le code de statut résume le résultat : 200 OK, 201 créé, 400 requête incorrecte, 401 non autorisé, 404 introuvable et 500 erreur du serveur.' ],
          code: `import requests\n\nr = requests.get("https://api.github.com/users/octocat", timeout=10)\nprint(r.status_code)              # 200\nprint(r.headers["Content-Type"])  # application/json; charset=utf-8` },
        { h: 'Paramètres, en-têtes et JSON', p: [
          'Les paramètres de recherche se passent avec `params` et requests construit l’URL pour toi. Beaucoup d’API demandent une clé dans les en-têtes, avec `headers`.',
          '`r.json()` transforme la réponse en dictionnaires et listes Python.' ],
          code: `import requests\n\nr = requests.get(\n    "https://api.github.com/search/repositories",\n    params={"q": "language:python", "sort": "stars", "per_page": 3},\n    timeout=10,\n)\nfor depot in r.json()["items"]:\n    print(depot["full_name"], depot["stargazers_count"])` },
        { h: 'Erreurs et limites', p: [
          'Les requêtes réseau peuvent échouer : le serveur ne répond pas, renvoie une erreur ou te limite parce que tu fais trop de requêtes (code 429).',
          '`raise_for_status()` lève une exception si le code est une erreur, et `try/except` te permet de réagir sans que le programme s’arrête.' ],
          code: `import requests\n\ntry:\n    r = requests.get("https://api.github.com/users/n-existe-pas-12345", timeout=10)\n    r.raise_for_status()\nexcept requests.HTTPError as e:\n    print("Erreur HTTP :", e.response.status_code)  # Erreur HTTP : 404\nexcept requests.RequestException:\n    print("Connexion impossible")` },
        { h: 'Exemple réel : la météo de demain', real: true, p: [
          'Open-Meteo est une API météo gratuite qui ne demande pas de clé. En quelques lignes, tu obtiens les prévisions de n’importe quelle ville à partir de ses coordonnées.' ],
          code: `import requests\n\nr = requests.get(\n    "https://api.open-meteo.com/v1/forecast",\n    params={"latitude": 48.86, "longitude": 2.35,\n            "daily": "temperature_2m_max,temperature_2m_min", "timezone": "auto"},\n    timeout=10,\n)\nr.raise_for_status()\nd = r.json()["daily"]\nprint(f"Demain à Paris : de {d['temperature_2m_min'][1]} à {d['temperature_2m_max'][1]} °C")` },
      ],
      x: [
        mc('Quelle méthode HTTP sert à lire des données ?', ['GET', 'POST', 'DELETE', 'PUT'], 'GET demande une ressource sans la modifier.'),
        mc('Que signifie le code de statut 404 ?', ['Ressource introuvable', 'Tout est correct', 'Erreur du serveur', 'Créé'], 'Les codes 4xx sont des erreurs du client.'),
        mc('Quelle méthode HTTP crée une nouvelle ressource ?', ['POST', 'GET', 'HEAD', 'OPTIONS'], 'POST envoie des données au serveur pour créer quelque chose.'),
        fill(`r = requests.get(url, timeout=10)\ndonnees = r.___()`, ['json', 'text', 'parse', 'dict'], '`.json()` transforme le corps JSON de la réponse en dictionnaires et listes.'),
        mc('Quel code une API renvoie-t-elle normalement quand elle crée une ressource ?', ['201', '200', '204', '301'], '201 Created indique que quelque chose de nouveau a été créé.'),
        mc('Quel format de données utilisent presque toutes les API REST ?', ['JSON', 'CSV', 'Texte brut', 'Binaire'], 'JSON est léger et facile à lire depuis n’importe quel langage.'),
        out(`import requests\nr = requests.get(\n    "https://example.com/recherche",\n    params={"q": "python", "page": 2},\n)\nprint(r.url)`, ['https://example.com/recherche?q=python&page=2', 'https://example.com/recherche', 'https://example.com/recherche?python&2', 'Erreur'], 'requests ajoute les paramètres à l’URL et les encode pour toi.'),
        mc('Une API répond avec le code 429. Que dois-tu faire ?', ['Attendre et réessayer avec moins de requêtes : tu as dépassé la limite', 'Répéter la requête immédiatement dans une boucle', 'Remplacer GET par POST', 'Rien : 429 veut dire que tout s’est bien passé'], '429 Too Many Requests indique que tu as dépassé la limite. Beaucoup d’API disent combien attendre dans l’en-tête Retry-After.'),
      ],
    },
    // ───────────── Jour 29 ─────────────
    {
      t: 'Construire une API',
      d: 'Une API REST avec Flask : routes, jsonify, codes de statut et validation.',
      guide: [
        { h: 'De consommer à créer', p: [
          'Te voilà de l’autre côté : créer une API que d’autres programmes peuvent utiliser. Avec Flask, chaque route renvoie du JSON avec `jsonify()`.',
          'Une API REST organise les URL par ressource (`/taches`, `/taches/3`) et utilise la méthode HTTP pour indiquer l’action.' ] },
        { h: 'Lire et créer des ressources', p: [
          '`GET /taches` les liste toutes et `GET /taches/<id>` en renvoie une. `POST /taches` en crée une nouvelle à partir du JSON du corps, que tu lis avec `request.get_json()`.',
          'Renvoie le bon code : 201 à la création et 404 si la ressource n’existe pas.' ],
          code: `from flask import Flask, jsonify, request, abort\n\napp = Flask(__name__)\ntaches = [{"id": 1, "titre": "Apprendre Flask", "faite": False}]\n\n@app.get("/taches")\ndef lister():\n    return jsonify(taches)\n\n@app.get("/taches/<int:id>")\ndef voir(id):\n    tache = next((t for t in taches if t["id"] == id), None)\n    if tache is None:\n        abort(404)\n    return jsonify(tache)\n\n@app.post("/taches")\ndef creer():\n    donnees = request.get_json()\n    tache = {"id": len(taches) + 1, "titre": donnees["titre"], "faite": False}\n    taches.append(tache)\n    return jsonify(tache), 201` },
        { h: 'Mettre à jour, supprimer et valider', p: [
          '`PUT` ou `PATCH` mettent à jour et `DELETE` supprime. Valide toujours ce qui arrive : s’il manque un champ, réponds 400 avec un message clair au lieu de laisser le serveur échouer avec un 500.' ],
          code: `@app.delete("/taches/<int:id>")\ndef supprimer(id):\n    global taches\n    taches = [t for t in taches if t["id"] != id]\n    return "", 204\n\n@app.post("/notes")\ndef creer_note():\n    donnees = request.get_json(silent=True) or {}\n    if "texte" not in donnees:\n        return jsonify(erreur="Le champ texte est manquant"), 400\n    return jsonify(texte=donnees["texte"]), 201` },
        { h: 'Tester l’API', p: [
          'Tu peux la tester avec `curl` depuis le terminal, avec des outils comme Postman ou avec le client de test de Flask, qui n’a pas besoin de lancer le serveur.',
          'FastAPI est une alternative moderne : il valide les données grâce aux annotations de type et génère une documentation interactive sur `/docs`.' ],
          code: `# dans le terminal\ncurl -X POST http://127.0.0.1:5000/taches \\\n     -H "Content-Type: application/json" \\\n     -d '{"titre": "Réviser"}'\n\n# dans un test\nwith app.test_client() as c:\n    r = c.post("/taches", json={"titre": "Réviser"})\n    print(r.status_code)  # 201` },
        { h: 'Exemple réel : un raccourcisseur de liens', real: true, p: [
          'Un mini service à la bit.ly : il reçoit une URL longue, génère un code court et redirige quiconque visite ce code.' ],
          code: `import secrets\nfrom flask import Flask, jsonify, request, redirect, abort\n\napp = Flask(__name__)\nliens = {}\n\n@app.post("/raccourcir")\ndef raccourcir():\n    url = (request.get_json(silent=True) or {}).get("url")\n    if not url or not url.startswith("http"):\n        return jsonify(erreur="URL invalide"), 400\n    code = secrets.token_urlsafe(4)\n    liens[code] = url\n    return jsonify(court=f"{request.host_url}{code}"), 201\n\n@app.get("/<code>")\ndef aller(code):\n    if code not in liens:\n        abort(404)\n    return redirect(liens[code])` },
      ],
      x: [
        fill(`from flask import Flask, ___\n\napp = Flask(__name__)\n\n@app.route("/api")\ndef api():\n    return jsonify({"ok": True})`, ['jsonify', 'json', 'dumps', 'JSON'], '`jsonify` crée une réponse HTTP avec un contenu JSON.'),
        mc('Comment lis-tu le JSON envoyé dans une requête POST avec Flask ?', ['request.get_json()', 'request.body', 'request.json_read()', 'input()'], 'Il renvoie le corps déjà converti en dictionnaire.'),
        mc('Dans `return jsonify(tache), 201`, que représente 201 ?', ['Le code de statut HTTP de la réponse', 'L’id de la tâche', 'Le port du serveur', 'La taille de la réponse'], '201 indique que la ressource a été créée.'),
        mc('Quelle méthode et quelle route suivent la convention REST pour supprimer la tâche 5 ?', ['DELETE /taches/5', 'GET /supprimer/5', 'POST /taches/delete', 'PUT /taches'], 'L’URL nomme la ressource et la méthode indique l’action.'),
        fill(`@app.___("/taches")\ndef creer():\n    donnees = request.get_json()\n    ...`, ['post', 'get', 'put', 'delete'], 'Depuis Flask 2.0, `@app.post` est un raccourci de `@app.route(..., methods=["POST"])`, la méthode pour créer des ressources.'),
        mc('Quel avantage offre FastAPI ?', ['Il valide les données avec les types et génère une documentation automatique', 'Il n’a pas besoin de Python', 'Il remplace la base de données', 'Il ne fonctionne qu’avec du HTML'], 'Sa documentation interactive se trouve sur `/docs`.'),
        mc('Un POST arrive sans le champ obligatoire "titre". Que dois-tu répondre ?', ['400 avec un message qui explique ce qui manque', '500 Erreur du serveur', '200 avec un objet vide', '404 Introuvable'], '400 Bad Request indique que la requête du client est incorrecte, et le message l’aide à la corriger.'),
        out(`from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.get("/taches/<int:id>")\ndef voir(id):\n    if id > 3:\n        return jsonify(erreur="Introuvable"), 404\n    return jsonify(id=id)\n\nwith app.test_client() as c:\n    r = c.get("/taches/7")\n    print(r.status_code, r.get_json()["erreur"])`, ['404 Introuvable', '200 Introuvable', '404 None', '500 Erreur'], '7 est supérieur à 3, donc la route renvoie le JSON d’erreur avec le code 404, et `get_json()` le transforme en dictionnaire.'),
      ],
    },
    // ───────────── Jour 30 ─────────────
    {
      t: 'Conclusion',
      d: 'Révision finale du défi, bonnes pratiques et comment continuer à apprendre.',
      guide: [
        { h: 'Ce que tu as appris', p: [
          'En 30 jours, tu es passé de `print("Bonjour, le monde")` à l’analyse de données avec pandas, à la consommation d’API et à la création de ton propre service web. Tu as vu les types, les collections, les fonctions, les classes, les exceptions, les fichiers, les expressions régulières et l’écosystème des paquets.',
          'Le plus important n’est pas de te souvenir de chaque fonction, mais de savoir découper un problème en parties et chercher dans la documentation ce dont tu as besoin.' ] },
        { h: 'Du code pythonique', p: [
          'Le Zen de Python (`import this`) résume le style du langage : le beau vaut mieux que le laid, l’explicite mieux que l’implicite et le simple mieux que le complexe.',
          'Suis le guide de style PEP 8 et utilise des outils comme `ruff` ou `black` pour formater le code automatiquement.' ],
          code: `noms = ["Ana", "Luis", "Eva", "Carla"]\n\n# Moins pythonique\nresultat = []\nfor i in range(len(noms)):\n    if len(noms[i]) > 3:\n        resultat.append(noms[i].upper())\n\n# Pythonique\nresultat = [n.upper() for n in noms if len(n) > 3]\nprint(resultat)  # ['LUIS', 'CARLA']` },
        { h: 'Erreurs à éviter', p: [
          'Utiliser des listes ou des dictionnaires comme valeur par défaut d’un paramètre : ils sont partagés entre les appels. Utilise `None` et crée l’objet dans la fonction.',
          'Capturer les exceptions avec un `except:` vide, qui cache de vraies erreurs. Capture toujours le type précis.' ],
          code: `# Mauvais : la liste est partagée entre les appels\ndef ajouter(x, liste=[]):\n    liste.append(x)\n    return liste\n\n# Bon\ndef ajouter(x, liste=None):\n    if liste is None:\n        liste = []\n    liste.append(x)\n    return liste` },
        { h: 'Et maintenant ?', p: [
          'Choisis un domaine et construis des projets : analyse de données avec pandas et Jupyter, développement web avec Django ou FastAPI, automatisation de tâches ou intelligence artificielle avec scikit-learn et PyTorch.',
          'Lis le code de projets open source, publie le tien sur GitHub et demande des relectures. On apprend à programmer en programmant.' ] },
        { h: 'Exemple réel : ton projet final', real: true, p: [
          'Un projet qui réunit tout le cours : il télécharge des données d’une API, les enregistre dans un CSV et produit un résumé avec pandas. Enrichis-le à ta guise avec un graphique, un site Flask ou une alerte par e-mail.' ],
          code: `import csv\nimport requests\nimport pandas as pd\n\ndef telecharger_meteo(lat, lon):\n    r = requests.get("https://api.open-meteo.com/v1/forecast",\n                     params={"latitude": lat, "longitude": lon,\n                             "daily": "temperature_2m_max", "timezone": "auto"},\n                     timeout=10)\n    r.raise_for_status()\n    return r.json()["daily"]\n\ndonnees = telecharger_meteo(48.86, 2.35)\nwith open("meteo.csv", "w", newline="", encoding="utf-8") as f:\n    w = csv.writer(f)\n    w.writerow(["date", "max"])\n    w.writerows(zip(donnees["time"], donnees["temperature_2m_max"]))\n\ndf = pd.read_csv("meteo.csv")\nprint(df.describe())` },
      ],
      x: [
        out(`def compter():\n    yield 1\n    yield 2\n\nprint(list(compter()))`, ['[1, 2]', '1', '[1]', 'Erreur'], 'Une fonction avec `yield` est un générateur ; `list()` récupère toutes ses valeurs.'),
        out(`print(sum(n for n in range(5) if n % 2))`, ['4', '10', '6', '2'], 'On additionne les impairs de 0 à 4 : 1 + 3 = 4.'),
        fill(`print(", ".___(["a", "b", "c"]))  # a, b, c`, ['join', 'split', 'concat', 'append'], '`join` réunit les éléments en utilisant le texte comme séparateur.'),
        out(`def f(x, liste=[]):\n    liste.append(x)\n    return liste\n\nf(1)\nprint(f(2))`, ['[1, 2]', '[2]', '[1]', 'Erreur'], 'La valeur par défaut mutable n’est créée qu’une fois et partagée entre les appels. Utilise `None` comme défaut.'),
        out(`x = [1, 2, 3]\nprint(x[::-1], x)`, ['[3, 2, 1] [1, 2, 3]', '[3, 2, 1] [3, 2, 1]', '[1, 2, 3] [3, 2, 1]', 'Erreur'], 'Le découpage crée une nouvelle liste ; l’originale ne change pas.'),
        out(`print(bool([]), bool([0]))`, ['False True', 'True True', 'False False', 'True False'], 'Une liste vide est fausse ; une liste avec n’importe quel élément, même 0, est vraie.'),
        mc('Quel guide décrit le style recommandé pour écrire du code Python ?', ['PEP 8', 'PEP 20', 'ISO 9001', 'RFC 2616'], 'PEP 8 est le guide de style ; PEP 20 est le Zen de Python qu’affiche `import this`.'),
        out(`def f(n, memo={}):\n    if n in memo:\n        return memo[n]\n    memo[n] = n if n < 2 else f(n - 1) + f(n - 2)\n    return memo[n]\n\nprint(f(10), len(f.__defaults__[0]))`, ['55 11', '55 10', '89 11', 'Erreur'], 'C’est Fibonacci avec mémoire : f(10) vaut 55. Le dictionnaire par défaut est partagé entre les appels et finit avec les clés de 0 à 10, soit 11 entrées. Ici, ce comportement sert volontairement de cache.'),
      ],
    },
  ],
}))(Sintaxis);
