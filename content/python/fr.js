/* Python · Français */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('python', 'fr', {
  tag: 'De ton premier print() à une boutique avec base de données, API et tests : quatre semaines, avec un projet à la fin de chacune.',
  days: [
    // ───────────── Jour 1 ─────────────
    {
      id: 'py-intro',
      t: 'Ton premier programme',
      d: 'Ce qu’est Python, comment exécuter un fichier, print(), l’indentation et les commentaires.',
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
      id: 'py-vars',
      t: 'Variables et types',
      d: 'Ranger des données sous un nom, les types de base, input() et passer du texte au nombre.',
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
      id: 'py-operators',
      t: 'Opérations et comparaisons',
      d: 'Calculer, comparer et combiner des conditions avec and, or et not, et dans quel ordre Python évalue tout.',
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
      id: 'py-strings',
      t: 'Travailler avec du texte',
      d: 'Indices, tranches, f-strings et les méthodes qui nettoient et transforment le texte.',
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
      id: 'py-conditionals',
      t: 'Prendre des décisions',
      d: 'if, elif et else, ce qui compte comme vrai et le if sur une seule ligne.',
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
    // ───────────── Jour 6 ─────────────
    {
      id: 'py-loops',
      t: 'Répéter avec des boucles',
      d: 'for et while, range(), break et continue : laisse le programme répéter le travail à ta place.',
      guide: [
        { h: 'La boucle for', p: [
          '`for` parcourt les éléments de n’importe quelle séquence : une liste, une chaîne, un dictionnaire... À chaque tour, la variable prend l’élément suivant.',
          'Utilise-la quand tu sais ce que tu vas parcourir. C’est la boucle que tu utiliseras le plus en Python.',
          'Certains exemples utilisent une liste, plusieurs valeurs entre crochets. Pour l’instant, il suffit de savoir que `for` les parcourt une par une ; tu verras les listes en détail au jour 8.' ],
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
    // ───────────── Jour 7 ─────────────
    {
      id: 'py-workshop-register',
      t: 'L’atelier de Kibi : la caisse enregistreuse',
      d: 'Projet de la semaine 1 : une caisse qui demande les prix, additionne le total, applique des remises et imprime le ticket.',
      guide: [
        { h: 'La commande', p: [
          'Kibi ouvre une boutique de graines et a besoin d’une caisse enregistreuse dans le terminal. Tu tapes le prix de chaque article, la caisse additionne, applique une remise quand il le faut et imprime le ticket.',
          'Cet atelier réunit toute la semaine : variables, `input()`, conversions, conditions, boucles et f-strings. On le construit étape par étape et chaque étape fonctionne déjà seule, pour que tu puisses l’exécuter et la vérifier avant de continuer.' ] },
        { h: 'Étape 1 : demander des prix jusqu’à ce qu’on tape 0', p: [
          'On ne sait pas combien d’articles il y aura, donc on utilise `while True` et on sort avec `break` quand le caissier tape 0.',
          'On tient deux comptes à la fois : le total en euros et le nombre d’articles. `+=` ajoute à la valeur qui était déjà là.' ],
          code: `total = 0\narticles = 0\nwhile True:\n    prix = float(input("Prix (0 pour terminer) : "))\n    if prix == 0:\n        break\n    total += prix\n    articles += 1\nprint(f"{articles} articles, total {total:.2f} €")` },
        { h: 'Étape 2 : résister à ce que les gens tapent', p: [
          'Si le caissier tape `2,50` ou `bonjour`, `float()` échoue et le programme s’arrête. D’abord on remplace la virgule par un point, puis on vérifie qu’il ne reste que des chiffres avec au plus un point.',
          '`continue` revient au début de la boucle sans rien ajouter. Au jour 15, tu verras `try` et `except`, la façon habituelle de gérer ces erreurs.' ],
          code: `while True:\n    texte = input("Prix (0 pour terminer) : ").replace(",", ".")\n    if not texte.replace(".", "", 1).isdigit():\n        print("Ce n'est pas un prix, réessaie")\n        continue\n    prix = float(texte)\n    if prix == 0:\n        break` },
        { h: 'Étape 3 : des remises par paliers', p: [
          'La boutique fait 10 % de remise dès 50 € et 5 % dès 20 €. Avec `elif`, l’ordre compte : on vérifie d’abord le palier le plus haut, car 60 € respecte aussi `>= 20`.',
          'Le format `:.2f` affiche toujours deux décimales, comme sur n’importe quel ticket.' ],
          code: `total = 42.8\nif total >= 50:\n    remise = total * 0.10\nelif total >= 20:\n    remise = total * 0.05\nelse:\n    remise = 0\nprint(f"Remise : {remise:.2f} €")       # Remise : 2.14 €\nprint(f"À payer : {total - remise:.2f} €")  # À payer : 40.66 €` },
        { h: 'Exemple réel : le ticket complet', real: true, p: [
          'On assemble les trois étapes. `:<10` aligne le texte à gauche sur 10 caractères et `:>8.2f` aligne le nombre à droite, pour que les chiffres forment une colonne.',
          'Idées pour aller plus loin : demander aussi la quantité de chaque article, ou calculer la monnaie à rendre à partir de ce que donne le client.' ],
          code: `total = 0\narticles = 0\nwhile True:\n    texte = input("Prix (0 pour terminer) : ").replace(",", ".")\n    if not texte.replace(".", "", 1).isdigit():\n        print("Ce n'est pas un prix")\n        continue\n    prix = float(texte)\n    if prix == 0:\n        break\n    total += prix\n    articles += 1\n\nremise = total * 0.10 if total >= 50 else total * 0.05 if total >= 20 else 0\nprint("-" * 18)\nprint(f"{'Articles':<10}{articles:>8}")\nprint(f"{'Total':<10}{total:>8.2f}")\nprint(f"{'Remise':<10}{remise:>8.2f}")\nprint(f"{'À payer':<10}{total - remise:>8.2f}")` },
      ],
      x: [
        mc('Que fait `break` dans le `while True` de la caisse ?', ['Il sort de la boucle et continue avec ce qui suit', 'Il revient au début de la boucle', 'Il ferme tout le programme', 'Il saute seulement le tour en cours'], '`break` termine la boucle ; le programme reprend à la première ligne après elle. Sauter le tour en cours, c’est ce que fait `continue`.'),
        out(`total = 0\ntotal += 2.5\ntotal += 1.25\nprint(f"{total:.2f}")`, ['3.75', '3.8', '3.750', '375'], '`+=` ajoute au total à chaque fois, et `:.2f` affiche exactement deux décimales.'),
        fill(`prix = ___(input("Prix : "))`, ['float', 'str', 'print', 'len'], '`input()` renvoie du texte. Pour calculer avec des décimales, il faut le convertir avec `float()`.'),
        out(`total = 25\nif total >= 50:\n    print("10%")\nelif total >= 20:\n    print("5%")\nelse:\n    print("0%")`, ['5%', '10%', '0%', '5%\n0%'], '25 n’atteint pas 50, mais atteint 20. Avec `elif`, seule la première branche vraie s’exécute.'),
        out(`n = 0\ntotal = 0\nwhile total < 10:\n    total += 4\n    n += 1\nprint(n, total)`, ['3 12', '2 8', '3 10', '4 16'], 'La boucle ajoute 4 tant que le total est inférieur à 10 : 4, 8 puis 12. À 12, la condition est fausse et la boucle a tourné 3 fois.'),
        typ('Écris le mot qui sort de la boucle quand le prix vaut 0', `while True:\n    prix = float(input())\n    if prix == 0:\n        ___\n    total += prix`, 'break', '`break` termine la boucle dès que la condition est remplie.'),
        out(`print(f"{'Total':<8}|{9.5:>6.2f}")`, ['Total   |  9.50', 'Total|9.50', '   Total|9.50  ', 'Total   |9.5'], '`:<8` complète le texte avec des espaces à droite jusqu’à 8 caractères ; `:>6.2f` place le nombre avec deux décimales, aligné à droite sur 6.'),
        out(`total = 0\nfor prix in range(5, 30, 10):\n    if prix > 20:\n        continue\n    total += prix\nremise = total * 0.1 if total >= 20 else 0\nprint(total, round(total - remise, 2))`, ['20 18.0', '45 40.5', '20 20', '20 18'], '`range(5, 30, 10)` donne 5, 15 et 25 ; le 25 est sauté avec `continue`, donc le total vaut 20. Il atteint 20, il y a donc 10 % de remise, et le résultat est un décimal : 18.0.'),
      ],
    },
    // ───────────── Jour 8 ─────────────
    {
      id: 'py-lists',
      t: 'Listes',
      d: 'Garder plusieurs valeurs dans l’ordre : ajouter, retirer, découper, trier et copier sans surprises.',
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
    // ───────────── Jour 9 ─────────────
    {
      id: 'py-tuples',
      t: 'Tuples et ensembles',
      d: 'Des tuples qui ne changent pas, le déballage, et les sets pour enlever les doublons et comparer des groupes.',
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
        { h: 'Qu’est-ce qu’un ensemble ?', p: [
          'Un ensemble (`set`) est une collection non ordonnée sans éléments répétés. Il s’écrit avec des accolades : `{1, 2, 3}`. Si tu ajoutes des doublons, un seul est conservé.',
          'Un ensemble vide se crée avec `set()` : `{}` crée un dictionnaire vide.',
          'Vérifier si quelque chose est dans un ensemble avec `in` est très rapide, même avec des millions d’éléments. C’est pourquoi on les utilise pour les listes « déjà vus ».' ],
          code: `tags = {"python", "web", "python", "data"}\nprint(len(tags))      # 3\nprint("web" in tags)  # True\nvide = set()\nprint(type({}))       # <class 'dict'>` },
        { h: 'Opérations sur les ensembles', p: [
          'Union `|` (tous), intersection `&` (les communs), différence `-` (ceux de l’un mais pas de l’autre) et différence symétrique `^` (ceux qui ne sont que dans l’un des deux).',
          '`issubset()` vérifie si tous les éléments d’un ensemble sont dans un autre.' ],
          code: `a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(a | b)  # {1, 2, 3, 4, 5}\nprint(a & b)  # {3, 4}\nprint(a - b)  # {1, 2}\nprint(a ^ b)  # {1, 2, 5}\nprint({1, 2}.issubset(a))  # True` },
        { h: 'Exemple réel : les clients fidèles', real: true, p: [
          'Une boutique veut savoir quels clients ont acheté en janvier et en février, lesquels ont arrêté et lesquels sont nouveaux. Ce sont trois opérations d’ensembles.' ],
          code: `janvier = {"Ana", "Luis", "Eva", "Marta"}\nfevrier = {"Luis", "Marta", "Pedro"}\nfideles = janvier & fevrier\nperdus = janvier - fevrier\nnouveaux = fevrier - janvier\nprint(sorted(fideles))   # ['Luis', 'Marta']\nprint(sorted(perdus))    # ['Ana', 'Eva']\nprint(sorted(nouveaux))  # ['Pedro']` },
      ],
      x: [
        mc('Quelle collection est immuable ?', ['tuple', 'list', 'dict', 'set'], 'Un tuple ne peut pas être modifié après sa création.'),
        out(`t = (10, 20, 30)\nprint(t[1])`, ['20', '10', '30', 'Erreur'], 'Les tuples s’indexent comme les listes, en commençant à 0.'),
        fill(`point = (3, 4)\n___ = point\nprint(x, y)  # 3 4`, ['x, y', 'x y', 'x; y', 'x & y'], 'Pour déballer, écris les variables séparées par des virgules à gauche du `=`.'),
        out(`t = (1, 2, 3)\nt[0] = 9\nprint(t)`, ['TypeError', '(9, 2, 3)', '(1, 2, 3)', 'None'], 'Les tuples n’acceptent pas l’affectation d’éléments, donc Python lève `TypeError`.'),
        out(`s = {1, 2, 2, 3, 3, 3}\nprint(len(s))`, ['3', '6', '4', '1'], 'Un ensemble supprime les doublons : il reste {1, 2, 3}.'),
        out(`s = {1, 2}\ns.add(2)\ns.add(5)\nprint(len(s))`, ['3', '4', '2', 'Erreur'], 'Ajouter un 2 déjà présent ne change rien ; le 5 est ajouté.'),
        out(`a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)`, ['{2, 3}', '{1, 2, 3, 4}', '{1}', '{4}'], '`&` est l’intersection : les éléments présents dans les deux.'),
        out(`a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(len(a | b), sorted(a ^ b), {3}.issubset(a & b))`, ['5 [1, 2, 5] True', '7 [1, 2, 5] True', '5 [3, 4] True', '5 [1, 2, 5] False'], 'L’union a 5 éléments, la différence symétrique laisse 1, 2 et 5, et 3 est dans l’intersection {3, 4}.'),
      ],
    },
    // ───────────── Jour 10 ─────────────
    {
      id: 'py-dicts',
      t: 'Dictionnaires',
      d: 'Retrouver des valeurs par leur clé : créer, modifier, parcourir et imbriquer des données.',
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
    // ───────────── Jour 11 ─────────────
    {
      id: 'py-functions',
      t: 'Fonctions',
      d: 'Regrouper du code avec def : paramètres, return, valeurs par défaut, *args, **kwargs et portée.',
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
      id: 'py-comprehensions',
      t: 'Compréhensions',
      d: 'Créer des listes, des dictionnaires et des sets en une ligne, en filtrant et en transformant à la fois.',
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
    // ───────────── Jour 13 ─────────────
    {
      id: 'py-modules',
      t: 'Modules et paquets avec pip',
      d: 'Importer ton propre code et la bibliothèque standard, et installer des paquets de PyPI avec pip.',
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
        { h: 'pip et PyPI', p: [
          'La bibliothèque standard est vaste, mais la vraie puissance de Python se trouve sur PyPI (Python Package Index), un dépôt de centaines de milliers de paquets : `requests`, `pandas`, `flask`, `numpy`...',
          'pip est le programme qui les télécharge et les installe. Il est fourni avec Python. Si tu as plusieurs versions de Python, `python -m pip` garantit que tu installes dans celle que tu exécutes.' ],
          code: `pip --version\npip install requests\npip install requests==2.32.3   # une version exacte\npip install --upgrade requests\npip uninstall requests\npython -m pip install requests  # le pip de CE Python` },
        { h: 'requirements.txt', p: [
          '`pip freeze > requirements.txt` enregistre la liste exacte des paquets et versions du projet. Ce fichier va dans le dépôt avec le code.',
          'Quiconque clone le projet lance `pip install -r requirements.txt` et obtient exactement les mêmes versions. Tu évites ainsi le classique « ça marche sur ma machine ».' ],
          code: `# requirements.txt\nrequests==2.32.3\npython-dateutil==2.9.0\n\n# sur un autre ordinateur\npip install -r requirements.txt` },
        { h: 'Exemple réel : taux de change avec requests', real: true, p: [
          'Avec `requests`, tu peux interroger une API publique de devises en trois lignes. `timeout` évite que le programme reste bloqué et `raise_for_status()` lève une erreur si la réponse n’est pas correcte.' ],
          code: `# pip install requests\nimport requests\n\nr = requests.get("https://api.frankfurter.app/latest?from=EUR&to=USD", timeout=10)\nr.raise_for_status()\ndonnees = r.json()\nprint("1 EUR =", donnees["rates"]["USD"], "USD")` },
      ],
      x: [
        fill(`___ math\nprint(math.pi)`, ['import', 'include', 'using', 'require'], '`import` charge un module en Python.'),
        out(`import math\nprint(math.sqrt(25))`, ['5.0', '5', '25', 'Erreur'], '`math.sqrt` renvoie toujours un `float`.'),
        fill(`import statistics ___ st\nprint(st.mean([1, 2, 3]))`, ['as', 'to', '=', 'alias'], '`as` donne un alias au module importé.'),
        out(`from math import floor, ceil\nprint(floor(2.5), ceil(2.1))`, ['2 3', '3 3', '2 2', '3 2'], '`floor` arrondit vers le bas et `ceil` vers le haut, quelles que soient les décimales.'),
        mc('Qu’est-ce que pip ?', ['Le gestionnaire de paquets de Python', 'Un éditeur de code', 'Un type de données', 'Un framework web'], 'pip installe et gère les bibliothèques tierces.'),
        ord('Installe le paquet requests', ['pip', 'install', 'requests'], ['get', 'npm'], 'La commande est `pip install` suivie du nom du paquet.'),
        mc('Que fait `pip freeze > requirements.txt` ?', ['Il enregistre les paquets installés et leurs versions dans un fichier', 'Il empêche Python de se mettre à jour', 'Il supprime les paquets', 'Il installe les paquets du fichier'], 'Ainsi, d’autres personnes peuvent reproduire ton environnement.'),
        mc('Ton script échoue avec `ModuleNotFoundError: No module named \'requests\'`, mais `pip install requests` dit qu’il est déjà installé. Quelle est la cause la plus probable ?', ['pip installe dans un autre Python que celui qui exécute le script : utilise python -m pip install requests', 'requests n’existe pas sur PyPI', 'Il faut écrire import Requests avec une majuscule', 'Il faut redémarrer l’ordinateur'], 'Avec plusieurs installations de Python, `pip` et `python` peuvent ne pas correspondre. `python -m pip` utilise le pip du même interpréteur.'),
      ],
    },
    // ───────────── Jour 14 ─────────────
    {
      id: 'py-workshop-contacts',
      t: 'L’atelier de Kibi : le carnet de clients',
      d: 'Projet de la semaine 2 : ranger les clients dans une liste de dictionnaires, les chercher et les filtrer avec des fonctions dans ton propre module.',
      guide: [
        { h: 'La commande', p: [
          'La boutique de Kibi a maintenant des habitués et veut s’en souvenir : nom, téléphone et nombre d’achats, pour récompenser les plus fidèles.',
          'Cet atelier réunit la semaine 2 : listes, dictionnaires, fonctions, compréhensions et modules. À la fin, tu auras un carnet de clients avec un menu, utilisable pour de vrai.' ] },
        { h: 'Étape 1 : les données', p: [
          'Chaque client est un dictionnaire avec les mêmes clés, et tous vont dans une liste. C’est comme un tableau : la liste contient les lignes et les clés sont les colonnes.',
          'Pour lire une donnée, on combine les deux accès : d’abord la position dans la liste, puis la clé.' ],
          code: `clients = [\n    {"nom": "Lucía", "telephone": "600111222", "achats": 12},\n    {"nom": "Marco", "telephone": "600333444", "achats": 3},\n    {"nom": "Aiko", "telephone": "600555666", "achats": 7},\n]\nprint(len(clients), clients[0]["nom"])  # 3 Lucía` },
        { h: 'Étape 2 : une fonction par tâche', p: [
          '`chercher()` parcourt la liste et renvoie le premier client qui porte ce nom, sans tenir compte des majuscules. Si la boucle se termine sans le trouver, elle renvoie `None`.',
          '`ajouter()` réutilise `chercher()` pour éviter les doublons et renvoie `True` ou `False`, pour que celui qui l’appelle sache ce qui s’est passé.' ],
          code: `def chercher(clients, nom):\n    for c in clients:\n        if c["nom"].lower() == nom.lower():\n            return c\n    return None\n\ndef ajouter(clients, nom, telephone):\n    if chercher(clients, nom):\n        return False\n    clients.append({"nom": nom, "telephone": telephone, "achats": 0})\n    return True\n\nprint(chercher(clients, "aiko")["telephone"])  # 600555666` },
        { h: 'Étape 3 : filtrer avec des compréhensions', p: [
          'Une compréhension de liste extrait les clients fidèles en une ligne. Une compréhension de dictionnaire crée un annuaire pour trouver un numéro instantanément à partir du nom.' ],
          code: `fideles = [c["nom"] for c in clients if c["achats"] >= 5]\nprint(fideles)  # ['Lucía', 'Aiko']\n\ntelephones = {c["nom"]: c["telephone"] for c in clients}\nprint(telephones["Marco"])  # 600333444` },
        { h: 'Étape 4 : ton propre module', p: [
          'Enregistre `chercher()` et `ajouter()` dans un fichier `carnet.py`. Depuis un autre fichier du même dossier, tu les récupères avec `from carnet import chercher, ajouter`.',
          'Ainsi, le menu est dans un fichier et la logique dans un autre, et tu peux réutiliser le carnet dans d’autres programmes sans copier de code.' ],
          code: `# main.py\nfrom carnet import chercher, ajouter\n\nclients = []\najouter(clients, "Eva", "600777888")\nprint(chercher(clients, "EVA"))  # {'nom': 'Eva', 'telephone': '600777888', 'achats': 0}` },
        { h: 'Exemple réel : le menu du carnet', real: true, p: [
          'Une boucle avec un menu d’options est la base de nombreux outils en terminal. Chaque option appelle une fonction de `carnet.py`.' ],
          code: `from carnet import chercher, ajouter\n\nclients = []\nwhile True:\n    option = input("1 Chercher · 2 Ajouter · 3 Fidèles · 0 Quitter : ")\n    if option == "0":\n        break\n    elif option == "1":\n        c = chercher(clients, input("Nom : "))\n        print(c if c else "Absent du carnet")\n    elif option == "2":\n        ok = ajouter(clients, input("Nom : "), input("Téléphone : "))\n        print("Enregistré" if ok else "Existe déjà")\n    elif option == "3":\n        print([c["nom"] for c in clients if c["achats"] >= 5])` },
      ],
      x: [
        out(`c = {"nom": "Aiko", "achats": 7}\nprint(c["achats"] + 1)`, ['8', '71', '7', 'Error'], '`c["achats"]` est l’entier 7 ; en ajoutant 1, on obtient 8.'),
        out(`clients = [{"n": "Ana"}, {"n": "Leo"}]\nprint(clients[1]["n"])`, ['Leo', 'Ana', '{"n": "Leo"}', 'Error'], '`clients[1]` est le deuxième dictionnaire et `["n"]` lit son nom.'),
        fill(`clients.___({"nom": "Eva", "achats": 0})`, ['append', 'add', 'insert', 'push'], '`append()` ajoute un élément à la fin d’une liste. `add()` appartient aux sets et `push()` n’existe pas en Python.'),
        out(`def total_achats(clients):\n    return sum(c["achats"] for c in clients)\n\nprint(total_achats([{"achats": 2}, {"achats": 5}]))`, ['7', '25', '[2, 5]', 'Error'], 'L’expression parcourt les clients, prend leurs achats et `sum()` les additionne : 2 + 5.'),
        out(`clients = [{"n": "Ana", "k": 9}, {"n": "Leo", "k": 2}, {"n": "Eva", "k": 5}]\nprint([c["n"] for c in clients if c["k"] > 4])`, ["['Ana', 'Eva']", "['Leo']", "['Ana', 'Leo', 'Eva']", '[9, 5]'], 'La compréhension garde les clients dont `k` est supérieur à 4 et conserve leur nom.'),
        mc('Pourquoi `chercher()` se termine-t-elle par `return None`, hors de la boucle ?', ['Pour indiquer qu’elle n’a trouvé personne après avoir vu tous les clients', 'Parce que toute fonction a besoin d’un return à la fin', 'Pour sortir de la boucle plus tôt', 'Pour vider la liste des clients'], 'Si un client correspond, le `return` dans la boucle sort avant. On n’arrive à la fin que si personne ne correspond.'),
        typ('Complète la ligne qui récupère la fonction chercher depuis carnet.py', `from carnet ___ chercher`, 'import', '`from module import nom` récupère seulement ce nom pour l’utiliser directement.'),
        out(`def ajouter(clients, nom):\n    if nom in [c["nom"] for c in clients]:\n        return False\n    clients.append({"nom": nom, "achats": 0})\n    return True\n\ncarnet = [{"nom": "Ana", "achats": 3}]\nprint(ajouter(carnet, "Leo"), ajouter(carnet, "Ana"), len(carnet))`, ['True False 2', 'True True 3', 'False False 1', 'True False 3'], 'Leo n’y était pas et il est ajouté (`True`) ; Ana y était déjà et n’est pas répétée (`False`). Le carnet finit avec 2 clients.'),
      ],
    },
    // ───────────── Jour 15 ─────────────
    {
      id: 'py-exceptions',
      t: 'Erreurs et exceptions',
      d: 'Lire un traceback, reconnaître les erreurs courantes et les gérer avec try, except, else, finally et raise.',
      guide: [
        { h: 'Comment lire un traceback', p: [
          'Quand quelque chose échoue, Python affiche un traceback. Lis-le de bas en haut : la dernière ligne donne le type d’erreur et son message ; juste au-dessus apparaissent le fichier, la ligne et le code qui a échoué.',
          'Copier cette dernière ligne dans un moteur de recherche mène souvent directement à la solution.' ],
          code: `Traceback (most recent call last):\n  File "boutique.py", line 3, in <module>\n    total = prix * quantite\nNameError: name 'quantite' is not defined` },
        { h: 'NameError, TypeError et ValueError', p: [
          '`NameError` : tu utilises un nom qui n’existe pas (une faute de frappe ou une variable pas encore créée).',
          '`TypeError` : l’opération n’a pas de sens avec ce type, comme additionner du texte et un nombre. `ValueError` : le type est bon mais pas la valeur, comme `int("trente")`.' ],
          code: `print(nom)       # NameError: name 'nom' is not defined\n"Âge : " + 30    # TypeError: can only concatenate str (not "int") to str\nint("trente")    # ValueError: invalid literal for int() with base 10: 'trente'\nlen(5)           # TypeError: object of type 'int' has no len()` },
        { h: 'try et except', p: [
          'Certaines erreurs ne dépendent pas de toi : l’utilisateur tape des lettres là où tu attendais un nombre, un fichier n’existe pas ou le réseau tombe. `try` exécute le code qui peut échouer et `except` décide quoi faire s’il échoue, au lieu que le programme s’arrête.',
          'Capture toujours le type précis (`except ValueError`). Un `except:` tout seul attrape aussi des erreurs inattendues et cache de vrais bugs.' ],
          code: `texte = "douze"\ntry:\n    nombre = int(texte)\nexcept ValueError:\n    print("Ce n'est pas un nombre")\n    nombre = 0\nprint(nombre)  # 0` },
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
        mc('Quelle erreur produit `print(nom)` si `nom` n’existe pas ?', ['NameError', 'TypeError', 'SyntaxError', 'ValueError'], 'Python ne trouve aucune variable portant ce nom.'),
        mc('Quelle erreur produit `"5" + 5` ?', ['TypeError', 'ValueError', 'NameError', 'Aucune'], 'On ne peut pas additionner un `str` et un `int` ; convertis l’un des deux d’abord.'),
        mc('Quelle erreur produit `int("salut")` ?', ['ValueError', 'TypeError', 'NameError', 'SyntaxError'], 'Le type est bon (un texte), mais sa valeur ne peut pas devenir un nombre.'),
        fill(`___:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("erreur")`, ['try', 'do', 'catch', 'test'], 'Le bloc qui peut échouer va dans `try`.'),
        out(`try:\n    n = int("abc")\nexcept ValueError:\n    n = -1\nprint(n)`, ['-1', 'abc', '0', 'Erreur'], 'La conversion échoue, `ValueError` est capturée et -1 est affecté.'),
        out(`try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("erreur")\nfinally:\n    print("fin")`, ['erreur\nfin', 'fin', 'erreur', 'inf\nfin'], 'Diviser par zéro lève `ZeroDivisionError`, qui est capturée. `finally` s’exécute toujours.'),
        fill(`def diviser(a, b):\n    if b == 0:\n        ___ ValueError("b ne peut pas valoir 0")\n    return a / b`, ['raise', 'throw', 'except', 'error'], 'En Python, les exceptions se lèvent avec `raise`. `throw` appartient à Java et JavaScript.'),
        out(`def convertir(valeurs):\n    total = 0\n    for v in valeurs:\n        try:\n            total += int(v)\n        except ValueError:\n            total -= 1\n        finally:\n            total += 10\n    return total\n\nprint(convertir(["5", "a", "2"]))`, ['36', '6', '26', '37'], '"5" ajoute 5, "a" retire 1 et "2" ajoute 2, et `finally` ajoute 10 à chaque tour : 5 - 1 + 2 + 30 = 36.'),
      ],
    },
    // ───────────── Jour 16 ─────────────
    {
      id: 'py-files',
      t: 'Lire et écrire des fichiers',
      d: 'open() et with, chemins, fichiers qui n’existent pas, CSV et JSON.',
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
    // ───────────── Jour 17 ─────────────
    {
      id: 'py-datetime',
      t: 'Dates et heures',
      d: 'Créer des dates, les transformer en texte et inversement, et calculer le temps entre deux dates.',
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
    // ───────────── Jour 18 ─────────────
    {
      id: 'py-regex',
      t: 'Chercher des motifs avec les regex',
      d: 'Valider, chercher et remplacer du texte avec les expressions régulières et le module re.',
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
      id: 'py-higher-order',
      t: 'Les fonctions comme valeurs',
      d: 'Passer des fonctions à d’autres fonctions : lambda, map, filter, sorted avec key, closures et décorateurs.',
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
    // ───────────── Jour 20 ─────────────
    {
      id: 'py-venv',
      t: 'Environnements virtuels',
      d: 'Un environnement par projet avec venv, pour que les dépendances de l’un ne cassent pas l’autre.',
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
    // ───────────── Jour 21 ─────────────
    {
      id: 'py-workshop-sales',
      t: 'L’atelier de Kibi : le rapport des ventes',
      d: 'Projet de la semaine 3 : lire les ventes d’un CSV, ignorer les lignes en erreur, regrouper par mois et enregistrer un rapport en JSON.',
      guide: [
        { h: 'La commande', p: [
          'Kibi note chaque vente dans `ventes.csv` : date, produit et montant. Kibi veut savoir combien la boutique vend chaque mois et quel est son produit vedette, même si le fichier contient quelques lignes mal écrites.',
          'Cet atelier réunit la semaine 3 : fichiers, exceptions, dates, expressions régulières et fonctions comme valeurs. Crée un dossier pour le projet avec son environnement (`python -m venv .venv`) : il n’utilise que la bibliothèque standard, mais il est ainsi prêt.' ],
          code: `date,produit,montant\n2026-03-02,graines,4.50\n2026-03-15,foin,7.25\n2026-04-01,graines,4.50\n2026-04-09,carotte,abc` },
        { h: 'Étape 1 : lire le CSV sans planter', p: [
          '`csv.DictReader` transforme chaque ligne en dictionnaire, avec les noms de l’en-tête comme clés. Toutes les valeurs arrivent sous forme de texte.',
          'La dernière ligne a `abc` comme montant : `float()` lève `ValueError`, on l’attrape, on le signale et on passe à la ligne suivante avec `continue`.' ],
          code: `import csv\n\nventes = []\nwith open("ventes.csv", encoding="utf-8") as f:\n    for ligne in csv.DictReader(f):\n        try:\n            ligne["montant"] = float(ligne["montant"])\n        except ValueError:\n            print("Ligne ignorée :", ligne["date"], ligne["produit"])\n            continue\n        ventes.append(ligne)\nprint(len(ventes))  # 3` },
        { h: 'Étape 2 : regrouper par mois', p: [
          '`strptime()` transforme le texte en date et `strftime("%Y-%m")` le réduit à l’année et au mois, qu’on utilise comme clé.',
          '`dict.get(clé, 0)` renvoie 0 la première fois qu’un mois apparaît, donc pas besoin de vérifier si la clé existe.' ],
          code: `from datetime import datetime\n\npar_mois = {}\nfor v in ventes:\n    mois = datetime.strptime(v["date"], "%Y-%m-%d").strftime("%Y-%m")\n    par_mois[mois] = par_mois.get(mois, 0) + v["montant"]\nprint(par_mois)  # {'2026-03': 11.75, '2026-04': 4.5}` },
        { h: 'Étape 3 : valider les dates et trouver le produit vedette', p: [
          'Une expression régulière écarte les lignes dont la date n’a pas la forme `AAAA-MM-JJ` avant de faire les calculs.',
          '`max()` avec `key` reçoit une fonction : elle compare les produits par leur total et renvoie le produit, pas le chiffre.' ],
          code: `import re\n\nDATE = re.compile(r"\\d{4}-\\d{2}-\\d{2}")\nventes = [v for v in ventes if DATE.fullmatch(v["date"])]\n\ntotaux = {}\nfor v in ventes:\n    totaux[v["produit"]] = totaux.get(v["produit"], 0) + v["montant"]\nmeilleur = max(totaux, key=lambda p: totaux[p])\nprint(meilleur, totaux[meilleur])  # graines 9.0` },
        { h: 'Exemple réel : enregistrer le rapport', real: true, p: [
          'Le rapport est enregistré en JSON pour qu’un autre programme, un tableur ou un site puisse le lire. `ensure_ascii=False` garde les accents et `indent=2` le rend lisible.',
          'Si un nouveau CSV arrive chaque mois, le même programme produit le rapport en quelques secondes. C’est exactement le genre de travail que la programmation fait à ta place.' ],
          code: `import json\n\nrapport = {"par_mois": par_mois, "produit_vedette": meilleur, "ventes_valides": len(ventes)}\nwith open("rapport.json", "w", encoding="utf-8") as f:\n    json.dump(rapport, f, ensure_ascii=False, indent=2)` },
      ],
      x: [
        mc('Que fait `with open("ventes.csv") as f:` à la fin du bloc ?', ['Il ferme le fichier, même s’il y a eu une erreur', 'Il supprime le fichier', 'Il enregistre une copie du fichier', 'Rien : il faut le fermer soi-même avec close()'], '`with` ferme le fichier en sortant du bloc, même si une exception est levée à l’intérieur.'),
        out(`try:\n    montant = float("abc")\nexcept ValueError:\n    montant = 0\nprint(montant)`, ['0', 'abc', 'ValueError', '0.0'], '`float("abc")` lève `ValueError` ; le `except` l’attrape et affecte l’entier 0.'),
        fill(`from datetime import datetime\nd = datetime.___("2026-03-15", "%Y-%m-%d")\nprint(d.month)  # 3`, ['strptime', 'strftime', 'parse', 'fromtext'], '`strptime` lit un texte et le transforme en date (p comme parse). `strftime` fait l’inverse.'),
        out(`from datetime import datetime\nd = datetime(2026, 4, 9)\nprint(d.strftime("%Y-%m"))`, ['2026-04', '2026-4', '04-2026', '2026-04-09'], '`%m` écrit toujours le mois sur deux chiffres, et le format ne demande que l’année et le mois.'),
        out(`totaux = {}\nfor p in ["graines", "foin", "graines"]:\n    totaux[p] = totaux.get(p, 0) + 1\nprint(totaux)`, ["{'graines': 2, 'foin': 1}", "{'graines': 1, 'foin': 1}", "{'foin': 1, 'graines': 2}", 'KeyError'], '`get(p, 0)` donne 0 la première fois, donc pas de `KeyError`. Le dictionnaire garde les clés dans l’ordre où elles apparaissent.'),
        out(`import re\nprint(bool(re.fullmatch(r"\\d{4}-\\d{2}", "2026-3")))`, ['False', 'True', 'None', '2026-3'], '`\\d{2}` exige deux chiffres et le mois n’en a qu’un. `fullmatch` demande que tout le texte corresponde.'),
        out(`totaux = {"graines": 9.0, "foin": 7.25}\nprint(max(totaux, key=lambda p: totaux[p]))`, ['graines', '9.0', 'foin', '7.25'], 'Parcourir un dictionnaire, c’est parcourir ses clés. `key` compare par total, mais `max()` renvoie la clé.'),
        out(`lignes = ["2026-03-02;4.50", "2026-03-20;x", "2026-04-01;3.00", "2026-03-31;1.50"]\npar_mois = {}\nfor ligne in lignes:\n    date, montant = ligne.split(";")\n    try:\n        par_mois[date[:7]] = par_mois.get(date[:7], 0) + float(montant)\n    except ValueError:\n        continue\nprint(par_mois)`, ["{'2026-03': 6.0, '2026-04': 3.0}", "{'2026-03': 4.5, '2026-04': 3.0}", 'ValueError', "{'2026-03': 6.0}"], 'La ligne avec `x` échoue dans `float()` avant toute affectation et elle est sautée. Mars fait 4.50 + 1.50 = 6.0 et avril, 3.0.'),
      ],
    },
    // ───────────── Jour 22 ─────────────
    {
      id: 'py-classes',
      t: 'Classes et objets',
      d: 'Créer tes propres types avec class : __init__, self, attributs, méthodes et méthodes spéciales.',
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
    // ───────────── Jour 23 ─────────────
    {
      id: 'py-inheritance',
      t: 'Héritage et dataclasses',
      d: 'Réutiliser des classes avec l’héritage et super(), savoir quand préférer la composition et économiser du code avec @dataclass.',
      guide: [
        { h: 'Hériter d’une autre classe', p: [
          'Une classe fille hérite des attributs et des méthodes de sa classe mère, et peut modifier ceux dont elle a besoin. `Offre` est un `Produit` avec une remise : inutile de répéter ce que fait déjà `Produit`.',
          '`super().__init__(...)` exécute le `__init__` de la mère pour qu’il prépare toujours les attributs communs. Sans cette ligne, `self.nom` et `self.prix` n’existeraient pas.' ],
          code: `class Produit:\n    def __init__(self, nom, prix):\n        self.nom = nom\n        self.prix = prix\n\n    def prix_final(self):\n        return self.prix\n\nclass Offre(Produit):\n    def __init__(self, nom, prix, remise):\n        super().__init__(nom, prix)\n        self.remise = remise\n\n    def prix_final(self):\n        return round(self.prix * (1 - self.remise), 2)\n\nprint(Offre("Foin", 8.0, 0.25).prix_final())  # 6.0` },
        { h: 'isinstance et l’ordre de recherche', p: [
          'Une `Offre` est aussi un `Produit`, mais pas l’inverse. `isinstance()` le vérifie et c’est la bonne façon de demander le type d’un objet.',
          'Quand tu appelles une méthode, Python la cherche d’abord dans la classe de l’objet puis, si elle n’y est pas, dans sa mère. Cet ordre s’appelle le MRO et tu peux le voir dans `__mro__`.' ],
          code: `o = Offre("Foin", 8.0, 0.25)\nprint(isinstance(o, Produit))                    # True\nprint(isinstance(Produit("Graines", 4.5), Offre))  # False\nprint(Offre.__mro__[1].__name__)                 # Produit` },
        { h: 'Héritage ou composition ?', p: [
          'Utilise l’héritage quand la phrase « est un » a du sens : une offre est un produit. Si « a un » semble plus naturel, utilise la composition : un panier a des produits, il garde donc une liste de produits.',
          'Les hiérarchies profondes deviennent difficiles à modifier. Dans le doute, la composition est généralement l’option la plus souple.' ],
          code: `class Panier:\n    def __init__(self):\n        self.produits = []  # a des produits : composition\n\n    def total(self):\n        return sum(p.prix_final() for p in self.produits)` },
        { h: '@dataclass : des classes de données sans répétition', p: [
          'Beaucoup de classes ne font que contenir des données. `@dataclass` écrit pour toi `__init__`, `__repr__` (ce qu’affiche `print`) et `__eq__` (la comparaison avec `==`) à partir des attributs et de leur type.',
          'Une liste comme valeur par défaut s’écrit avec `field(default_factory=list)` ; sinon, tous les objets partageraient la même liste, comme avec les paramètres par défaut des fonctions.' ],
          code: `from dataclasses import dataclass, field\n\n@dataclass\nclass Client:\n    nom: str\n    achats: int = 0\n    etiquettes: list = field(default_factory=list)\n\nana = Client("Ana")\nprint(ana)                   # Client(nom='Ana', achats=0, etiquettes=[])\nprint(ana == Client("Ana"))  # True` },
        { h: 'frozen et order', p: [
          'Avec `frozen=True`, l’objet ne peut plus être modifié après sa création, comme un tuple avec des noms. Avec `order=True`, on peut comparer les objets avec `<` et `>`, champ par champ et dans l’ordre.' ],
          code: `from dataclasses import dataclass\n\n@dataclass(frozen=True, order=True)\nclass Version:\n    majeure: int\n    mineure: int\n\nprint(Version(1, 10) > Version(1, 2))  # True\n# Version(2, 0).majeure = 3 lèverait FrozenInstanceError` },
        { h: 'Exemple réel : le catalogue de la boutique', real: true, p: [
          'Les dataclasses s’héritent aussi. Le catalogue mélange des produits normaux et des offres, et la boucle appelle `prix_final()` sans demander le type de chacun : chaque objet sait calculer son prix.' ],
          code: `from dataclasses import dataclass\n\n@dataclass\nclass Produit:\n    nom: str\n    prix: float\n\n    def prix_final(self):\n        return self.prix\n\n@dataclass\nclass Offre(Produit):\n    remise: float = 0.1\n\n    def prix_final(self):\n        return round(self.prix * (1 - self.remise), 2)\n\ncatalogue = [Produit("Graines", 4.5), Offre("Foin", 8.0, 0.25)]\nfor p in catalogue:\n    print(f"{p.nom} : {p.prix_final():.2f} €")\n# Graines : 4.50 €\n# Foin : 6.00 €` },
      ],
      x: [
        fill(`class Produit:\n    pass\n\nclass Offre(___):\n    pass  # Offre hérite de Produit`, ['Produit', 'super', 'self', 'Produit()'], 'La classe mère se met entre parenthèses, par son nom et sans l’appeler.'),
        mc('À quoi sert `super().__init__(nom, prix)` dans une classe fille ?', ['À exécuter le __init__ de la classe mère au lieu de répéter son code', 'À créer un deuxième objet', 'À supprimer les attributs de la mère', 'À empêcher d’autres classes d’en hériter'], '`super()` donne accès à la classe mère ; son `__init__` prépare les attributs communs.'),
        out(`class A:\n    def bonjour(self):\n        return "A"\n\nclass B(A):\n    pass\n\nprint(B().bonjour())`, ['A', 'B', 'None', 'AttributeError'], '`B` ne définit pas `bonjour`, donc Python la cherche dans sa mère `A`.'),
        out(`class A:\n    pass\n\nclass B(A):\n    pass\n\nprint(isinstance(B(), A), isinstance(A(), B))`, ['True False', 'True True', 'False True', 'False False'], 'Un objet de la fille est aussi un objet de la mère, mais pas l’inverse.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int = 0\n\nprint(Point(3))`, ['Point(x=3, y=0)', 'Point(3)', '<__main__.Point object>', '(3, 0)'], '`@dataclass` génère un `__repr__` avec le nom et la valeur de chaque champ, y compris les valeurs par défaut.'),
        mc('Un `Panier` garde les produits qu’on va acheter. Quelle relation convient ?', ['La composition : le panier a une liste de produits', 'L’héritage : Panier hérite de Produit', 'L’héritage : Produit hérite de Panier', 'Aucune : mieux vaut une variable globale'], 'Un panier n’est pas un produit : il a des produits. « A un » appelle la composition.'),
        fill(`from dataclasses import dataclass, field\n\n@dataclass\nclass Commande:\n    lignes: list = ___(default_factory=list)`, ['field', 'list', 'dataclass', 'default'], '`field(default_factory=list)` crée une nouvelle liste pour chaque commande au lieu d’en partager une.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Produit:\n    nom: str\n    prix: float\n\n    def final(self):\n        return self.prix\n\n@dataclass\nclass Offre(Produit):\n    remise: float = 0.5\n\n    def final(self):\n        return super().final() * (1 - self.remise)\n\narticles = [Produit("a", 4.0), Offre("b", 6.0), Offre("c", 10.0, 0.1)]\nprint(sum(p.final() for p in articles), Offre("b", 6.0) == articles[1])`, ['16.0 True', '20.0 True', '16.0 False', '13.0 True'], '4.0 + 6.0 × 0.5 + 10.0 × 0.9 = 16.0. Les dataclasses se comparent par leurs champs, donc deux offres avec les mêmes données sont égales.'),
      ],
    },
    // ───────────── Jour 24 ─────────────
    {
      id: 'py-pandas',
      t: 'Analyse de données avec pandas',
      d: 'Moyenne et médiane avec statistics, et tableaux avec pandas : lire un CSV, filtrer, créer des colonnes et regrouper.',
      guide: [
        { h: 'Mesures de tendance centrale', p: [
          'La moyenne est la somme divisée par le nombre de valeurs, la médiane est la valeur centrale des données triées et le mode est la valeur la plus fréquente.',
          'La médiane résiste mieux aux valeurs extrêmes : avec des salaires, quelques très hauts font grimper la moyenne mais bougent à peine la médiane.' ],
          code: `import statistics as st\n\nsalaires = [1200, 1300, 1250, 1400, 9000]\nprint(st.mean(salaires))    # 2830\nprint(st.median(salaires))  # 1300` },
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
        out(`import statistics as st\nprint(st.mean([2, 4, 6]))`, ['4', '12', '6', '3'], 'La moyenne est la somme (12) divisée par le nombre de valeurs (3).'),
        mc('Quelle mesure est la valeur centrale des données triées ?', ['La médiane', 'La moyenne', 'Le mode', 'L’écart type'], 'Avec [1, 3, 9], la médiane est 3.'),
        mc('Quelle structure pandas représente un tableau avec des lignes et des colonnes ?', ['DataFrame', 'Series', 'Array', 'Table'], 'Une `Series` est une seule colonne.'),
        fill(`import pandas as pd\ndf = pd.___("ventes.csv")`, ['read_csv', 'open_csv', 'load', 'csv'], '`read_csv` charge un fichier CSV dans un DataFrame.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"x": [1, 2, 3]})\nprint(df["x"].sum())`, ['6', '3', '[1, 2, 3]', 'x'], 'Tu sélectionnes la colonne sous forme de Series et tu l’additionnes.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"age": [20, 35, 50]})\nprint(len(df[df["age"] > 30]))`, ['2', '1', '3', '0'], 'Le filtre garde les lignes avec 35 et 50.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"a": [1, 2, 3]})\ndf["b"] = df["a"] * 10\nprint(df["b"].tolist())`, ['[10, 20, 30]', '[1, 2, 3]', '[10]', '60'], 'L’opération s’applique à toute la colonne et en crée une nouvelle.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"magasin": ["A", "B", "A", "B"], "total": [10, 5, 20, 1]})\nr = df.groupby("magasin")["total"].sum()\nprint(r["A"], r["B"])`, ['30 6', '10 5', '15 3', '36'], '`groupby` regroupe les lignes par magasin et `sum` additionne chaque groupe : A = 10 + 20 et B = 5 + 1.'),
      ],
    },
    // ───────────── Jour 25 ─────────────
    {
      id: 'py-apis',
      t: 'Utiliser des API',
      d: 'Demander des données à d’autres services en HTTP avec requests : méthodes, codes d’état, JSON et erreurs.',
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
    // ───────────── Jour 26 ─────────────
    {
      id: 'py-scraping',
      t: 'Extraire des données du web',
      d: 'Télécharger des pages et extraire des données du HTML avec BeautifulSoup, sans abuser du site.',
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
    // ───────────── Jour 27 ─────────────
    {
      id: 'py-build-api',
      t: 'Créer ta propre API',
      d: 'Une API REST avec Flask : routes, JSON, codes d’état et validation de ce qui arrive.',
      guide: [
        { h: 'Les frameworks web en Python', p: [
          'Un framework web reçoit les requêtes HTTP du navigateur et décide quoi répondre. En Python, les plus utilisés sont Flask (petit et souple), Django (complet, avec ORM et interface d’administration) et FastAPI (rapide et pensé pour les API).',
          'Aujourd’hui, on utilise Flask : `pip install flask`.' ] },
        { h: 'Ta première application Flask', p: [
          'Chaque route est associée à une fonction avec le décorateur `@app.route()`. Ce que renvoie la fonction est ce que voit le navigateur.',
          'Lance le serveur de développement avec `flask --app app run --debug` et ouvre http://127.0.0.1:5000 dans ton navigateur.' ],
          code: `# app.py\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef accueil():\n    return "<h1>Bonjour depuis Flask</h1>"\n\n@app.route("/bonjour/<nom>")\ndef bonjour(nom):\n    return f"Bonjour, {nom}"` },
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
        mc('Qu’est-ce que Flask ?', ['Un microframework pour créer des applications web', 'Une base de données', 'Un éditeur de code', 'Un gestionnaire de paquets'], 'Flask est léger et s’enrichit avec des extensions.'),
        fill(`@app.___("/")\ndef accueil():\n    return "Bonjour"`, ['route', 'get_route', 'path', 'url'], '`@app.route` associe une URL à la fonction.'),
        mc('Avec la route `/bonjour/<nom>`, quelle valeur reçoit `nom` quand on visite `/bonjour/Ana` ?', ['"Ana"', '"<nom>"', '"bonjour"', 'None'], 'Les parties entre `< >` sont des variables de l’URL.'),
        fill(`from flask import Flask, ___\n\napp = Flask(__name__)\n\n@app.route("/api")\ndef api():\n    return jsonify({"ok": True})`, ['jsonify', 'json', 'dumps', 'JSON'], '`jsonify` crée une réponse HTTP avec un contenu JSON.'),
        mc('Comment lis-tu le JSON envoyé dans une requête POST avec Flask ?', ['request.get_json()', 'request.body', 'request.json_read()', 'input()'], 'Il renvoie le corps déjà converti en dictionnaire.'),
        mc('Dans `return jsonify(tache), 201`, que représente 201 ?', ['Le code de statut HTTP de la réponse', 'L’id de la tâche', 'Le port du serveur', 'La taille de la réponse'], '201 indique que la ressource a été créée.'),
        mc('Un POST arrive sans le champ obligatoire "titre". Que dois-tu répondre ?', ['400 avec un message qui explique ce qui manque', '500 Erreur du serveur', '200 avec un objet vide', '404 Introuvable'], '400 Bad Request indique que la requête du client est incorrecte, et le message l’aide à la corriger.'),
        out(`from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.get("/taches/<int:id>")\ndef voir(id):\n    if id > 3:\n        return jsonify(erreur="Introuvable"), 404\n    return jsonify(id=id)\n\nwith app.test_client() as c:\n    r = c.get("/taches/7")\n    print(r.status_code, r.get_json()["erreur"])`, ['404 Introuvable', '200 Introuvable', '404 None', '500 Erreur'], '7 est supérieur à 3, donc la route renvoie le JSON d’erreur avec le code 404, et `get_json()` le transforme en dictionnaire.'),
      ],
    },
    // ───────────── Jour 28 ─────────────
    {
      id: 'py-sqlite',
      t: 'Bases de données avec SQLite',
      d: 'Enregistrer des données dans une vraie base de données avec sqlite3 : tables, INSERT, SELECT, paramètres sûrs et transactions.',
      guide: [
        { h: 'Pourquoi une base de données ?', p: [
          'Un CSV ou un JSON conviennent pour peu de données. Quand il y a des milliers de lignes, plusieurs personnes qui écrivent en même temps ou des questions comme « combien a dépensé chaque client ? », une base de données est plus rapide et plus sûre.',
          'SQLite garde toute la base dans un seul fichier et est fourni avec Python sous la forme du module `sqlite3` : rien à installer. Les téléphones, les navigateurs et énormément d’applications l’utilisent.',
          'Les requêtes s’écrivent en SQL, un langage conçu pour les données. Les bases s’apprennent en un après-midi et fonctionnent de la même façon dans PostgreSQL ou MySQL.' ] },
        { h: 'Se connecter et créer une table', p: [
          '`connect()` ouvre le fichier (ou le crée) et `":memory:"` crée une base temporaire qui disparaît à la fermeture, parfaite pour les tests.',
          'Une table définit des colonnes avec leur type. `INTEGER PRIMARY KEY` numérote chaque ligne automatiquement et `NOT NULL` empêche de laisser cette donnée vide.' ],
          code: `import sqlite3\n\ncon = sqlite3.connect("boutique.db")  # ":memory:" pour une base temporaire\ncon.execute("""\n    CREATE TABLE IF NOT EXISTS produits (\n        id INTEGER PRIMARY KEY,\n        nom TEXT NOT NULL,\n        prix REAL NOT NULL\n    )\n""")` },
        { h: 'Insérer avec des paramètres', p: [
          'Les valeurs vont dans la requête sous forme de `?` et sont passées à part dans un tuple. N’insère jamais les données de l’utilisateur avec une f-string : quelqu’un pourrait écrire du SQL qui modifie la requête (injection SQL).',
          '`executemany()` insère plusieurs lignes d’un coup. Les changements ne sont enregistrés qu’avec `commit()`.' ],
          code: `con.execute("INSERT INTO produits (nom, prix) VALUES (?, ?)", ("Graines", 4.5))\ncon.executemany(\n    "INSERT INTO produits (nom, prix) VALUES (?, ?)",\n    [("Foin", 7.25), ("Carotte", 1.25)],\n)\ncon.commit()` },
        { h: 'Interroger', p: [
          '`SELECT` choisit les colonnes, `WHERE` filtre et `ORDER BY` trie. Parcourir le résultat donne un tuple par ligne.',
          '`fetchone()` ne renvoie que la première ligne, pratique pour des calculs comme `COUNT(*)` ou `SUM()`.' ],
          code: `requete = "SELECT nom, prix FROM produits WHERE prix > ? ORDER BY prix"\nfor nom, prix in con.execute(requete, (2,)):\n    print(nom, prix)\n# Graines 4.5\n# Foin 7.25\nprint(con.execute("SELECT COUNT(*), SUM(prix) FROM produits").fetchone())  # (3, 13.0)` },
        { h: 'Les transactions avec with', p: [
          'Utiliser la connexion avec `with` regroupe les changements dans une transaction : si tout va bien ils sont enregistrés, et en cas d’erreur ils sont tous annulés. Ainsi, une opération ne reste jamais à moitié faite.' ],
          code: `with con:  # commit si tout va bien, rollback en cas d'erreur\n    con.execute("UPDATE produits SET prix = prix * 0.9 WHERE nom = ?", ("Foin",))\ncon.close()` },
        { h: 'Exemple réel : combien dépense chaque client', real: true, p: [
          '`GROUP BY` rassemble les lignes de chaque client et `SUM()` additionne leurs montants. Ce qui serait en Python une boucle avec un dictionnaire tient en une ligne de SQL, et fonctionne aussi bien avec un million de commandes.' ],
          code: `import sqlite3\n\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE commandes (client TEXT, montant REAL)")\nwith con:\n    con.executemany(\n        "INSERT INTO commandes VALUES (?, ?)",\n        [("Ana", 12.5), ("Leo", 4.0), ("Ana", 7.5)],\n    )\nrequete = "SELECT client, SUM(montant) FROM commandes GROUP BY client ORDER BY 2 DESC"\nfor client, total in con.execute(requete):\n    print(f"{client} : {total:.2f} €")\n# Ana : 20.00 €\n# Leo : 4.00 €` },
      ],
      x: [
        mc('Quel module fournit SQLite avec Python, sans rien installer ?', ['sqlite3', 'pymongo', 'sqlalchemy', 'sqlite'], 'Le module `sqlite3` fait partie de la bibliothèque standard.'),
        mc('Que fait `con.commit()` ?', ['Il enregistre définitivement les changements en attente', 'Il ferme la connexion', 'Il annule les derniers changements', 'Il crée la base de données'], 'Jusqu’au `commit()`, les changements font partie d’une transaction ouverte et ne sont pas enregistrés.'),
        fill(`con.execute("INSERT INTO produits (nom, prix) VALUES (___, ?)", ("Graines", 4.5))`, ['?', '%s', '{}', '$1'], 'Dans `sqlite3`, chaque valeur est marquée par `?` et passée à part. `%s` et `$1` appartiennent à d’autres connecteurs.'),
        mc('Pourquoi ne faut-il pas mettre le texte tapé par l’utilisateur dans la requête avec une f-string ?', ['Parce que cela permet une injection SQL : l’utilisateur pourrait modifier la requête', 'Parce que les f-strings ne marchent pas avec SQLite', 'Parce que la requête est plus lente', 'Parce que SQLite n’accepte pas le texte'], 'Avec `?`, SQLite traite toujours la donnée comme une valeur, jamais comme du SQL.'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE t (n INTEGER)")\ncon.executemany("INSERT INTO t VALUES (?)", [(1,), (2,), (3,)])\nprint(con.execute("SELECT SUM(n) FROM t").fetchone())`, ['(6,)', '6', '[6]', '(1, 2, 3)'], '`fetchone()` renvoie une ligne sous forme de tuple, même avec une seule colonne.'),
        typ('Complète la requête qui lit toutes les colonnes de la table produits', `SELECT ___ FROM produits`, '*', 'L’astérisque signifie « toutes les colonnes ».'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE p (nom TEXT, prix REAL)")\ncon.executemany("INSERT INTO p VALUES (?, ?)", [("a", 3.0), ("b", 1.0), ("c", 2.0)])\nprint([n for (n,) in con.execute("SELECT nom FROM p ORDER BY prix")])`, ["['b', 'c', 'a']", "['a', 'b', 'c']", "['a', 'c', 'b']", "[('b',), ('c',), ('a',)]"], '`ORDER BY prix` trie du moins cher au plus cher, et `(n,)` déballe le tuple de chaque ligne.'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE commandes (client TEXT, montant REAL)")\ntry:\n    with con:\n        con.execute("INSERT INTO commandes VALUES (?, ?)", ("Ana", 10.0))\n        con.execute("INSERT INTO commandes VALUES (?, ?, ?)", ("Leo", 5.0, 1))\nexcept sqlite3.OperationalError:\n    pass\nprint(con.execute("SELECT COUNT(*) FROM commandes").fetchone()[0])`, ['0', '1', '2', 'OperationalError'], 'La deuxième insertion passe 3 valeurs à une table de 2 colonnes et échoue. `with con` annule toute la transaction, y compris la première insertion.'),
      ],
    },
    // ───────────── Jour 29 ─────────────
    {
      id: 'py-pytest',
      t: 'Tester ton code avec pytest',
      d: 'Écrire des tests automatiques avec assert et pytest : cas normaux, cas limites, exceptions et fixtures.',
      guide: [
        { h: 'Pourquoi écrire des tests ?', p: [
          'Un test est du code qui vérifie qu’un autre code fait ce qu’il doit. Il s’exécute en une seconde à chaque modification et te prévient si tu as cassé quelque chose qui marchait.',
          '`assert` vérifie une condition : si elle est vraie, rien ne se passe et, si elle est fausse, il lève `AssertionError`. C’est la brique de base de tout test.' ],
          code: `def prix_ttc(prix):\n    return round(prix * 1.21, 2)\n\nassert prix_ttc(100) == 121.0\nassert prix_ttc(0) == 0\nprint("Tout est bon")  # Tout est bon` },
        { h: 'Ton premier test avec pytest', p: [
          'Installe pytest avec `pip install pytest` dans l’environnement du projet. Il ne regarde que les fichiers `test_*.py` et, à l’intérieur, les fonctions qui commencent par `test_`.',
          'Lance-le avec `pytest` dans le dossier du projet. Il affiche un point par test réussi et un `F` par échec, avec la valeur attendue et celle obtenue.' ],
          code: `# test_prix.py\nfrom prix import prix_ttc\n\ndef test_prix_normal():\n    assert prix_ttc(100) == 121.0\n\ndef test_prix_zero():\n    assert prix_ttc(0) == 0` },
        { h: 'Cas limites et exceptions', p: [
          'Les bugs aiment se cacher aux limites : le zéro, les négatifs, une liste vide. Teste-les exprès.',
          '`pytest.raises` vérifie qu’une exception est levée. Les décimaux ne sont pas exacts, on les compare donc avec `pytest.approx`.' ],
          code: `import pytest\nfrom prix import prix_ttc\n\ndef test_prix_negatif():\n    with pytest.raises(ValueError):\n        prix_ttc(-5)  # la fonction doit lever ValueError\n\ndef test_decimaux():\n    assert 0.1 + 0.2 == pytest.approx(0.3)` },
        { h: 'Plusieurs cas avec parametrize', p: [
          'Au lieu de copier le même test avec d’autres nombres, `@pytest.mark.parametrize` l’exécute une fois par cas de la liste et, si l’un échoue, te dit lequel.' ],
          code: `import pytest\nfrom prix import prix_ttc\n\n@pytest.mark.parametrize("prix, attendu", [(100, 121.0), (10, 12.1), (0, 0)])\ndef test_prix_ttc(prix, attendu):\n    assert prix_ttc(prix) == attendu` },
        { h: 'Exemple réel : tester la base de données de la boutique', real: true, p: [
          'Une fixture prépare ce dont les tests ont besoin. pytest l’exécute avant chaque test qui la demande en la nommant comme paramètre.',
          'Ici, chaque test reçoit une base vide en mémoire : aucun ne dépend d’un autre ni ne touche aux vraies données. Ce qui suit le `yield` s’exécute à la fin, pour nettoyer.' ],
          code: `import sqlite3\nimport pytest\n\n@pytest.fixture\ndef con():\n    con = sqlite3.connect(":memory:")\n    con.execute("CREATE TABLE produits (nom TEXT, prix REAL)")\n    yield con\n    con.close()\n\ndef test_inserer(con):\n    con.execute("INSERT INTO produits VALUES (?, ?)", ("Graines", 4.5))\n    assert con.execute("SELECT COUNT(*) FROM produits").fetchone()[0] == 1\n\ndef test_commence_vide(con):\n    assert con.execute("SELECT COUNT(*) FROM produits").fetchone()[0] == 0` },
      ],
      x: [
        mc('Que se passe-t-il avec `assert prix_ttc(100) == 121.0` si la fonction renvoie 120 ?', ['Il lève AssertionError', 'Il affiche False et continue', 'Il renvoie 120', 'Rien'], 'Si la condition de `assert` est fausse, `AssertionError` est levée ; pytest l’affiche comme un test échoué.'),
        mc('Comment pytest trouve-t-il les tests ?', ['Il cherche les fichiers test_*.py et les fonctions qui commencent par test_', 'Il exécute toutes les fonctions du projet', 'Il lit une liste dans requirements.txt', 'Il n’exécute que main.py'], 'pytest suit une convention de nommage : fichiers `test_*.py` et fonctions `test_*`.'),
        out(`def double(n):\n    return n * 2\n\ntry:\n    assert double(3) == 5\n    print("ok")\nexcept AssertionError:\n    print("échec")`, ['échec', 'ok', '6', 'AssertionError'], '`double(3)` vaut 6, pas 5 : le `assert` lève `AssertionError` avant d’arriver au `print("ok")`.'),
        fill(`import pytest\n\ndef test_division():\n    with pytest.___(ZeroDivisionError):\n        1 / 0`, ['raises', 'catch', 'expect', 'error'], '`pytest.raises` fait réussir le test seulement si cette exception est levée dans le bloc.'),
        mc('Pourquoi `assert 0.1 + 0.2 == 0.3` échoue-t-il ?', ['Parce que les nombres à virgule flottante ne sont pas exacts : la somme donne 0.30000000000000004', 'Parce que assert n’accepte pas les additions', 'Parce que 0.3 est un texte', 'Parce qu’il faut utiliser is au lieu de =='], 'Les `float` sont stockés en binaire avec une petite erreur. Pour les comparer, on utilise `pytest.approx` ou `math.isclose`.'),
        typ('Écris le décorateur qui transforme la fonction en fixture', `import pytest\n\n@pytest.___\ndef panier():\n    return []`, 'fixture', '`@pytest.fixture` marque la fonction ; les tests la reçoivent en indiquant `panier` comme paramètre.'),
        out(`import math\nprint(0.1 + 0.2 == 0.3, math.isclose(0.1 + 0.2, 0.3))`, ['False True', 'True True', 'False False', 'True False'], '`==` compare la valeur exacte, qui ne correspond pas. `math.isclose` tolère une différence infime, comme `pytest.approx`.'),
        out(`def remise(total):\n    if total < 0:\n        raise ValueError("total négatif")\n    return total * 0.1 if total >= 50 else 0\n\ncas = [(100, 10.0), (49, 0), (50, 0), (-1, None)]\nechecs = 0\nfor total, attendu in cas:\n    try:\n        if remise(total) != attendu:\n            echecs += 1\n    except ValueError:\n        pass\nprint(echecs)`, ['1', '0', '2', 'ValueError'], 'Seul le cas (50, 0) échoue : dès 50 il y a une remise et la fonction donne 5.0. -1 lève `ValueError`, qui est attrapée et ne compte pas comme échec.'),
      ],
    },
    // ───────────── Jour 30 ─────────────
    {
      id: 'py-workshop-shop',
      t: 'L’atelier de Kibi : la boutique complète',
      d: 'Projet final : la boutique de Kibi avec des dataclasses, une base SQLite, une API Flask et des tests pytest.',
      guide: [
        { h: 'La commande', p: [
          'Quatre semaines plus tard, la boutique de Kibi a besoin de quelque chose de sérieux : un catalogue enregistré dans une base de données et une API pour qu’un site ou une appli puisse consulter les produits et passer des commandes.',
          'On réunit la dernière semaine avec tout ce qui précède. Chaque fichier a une seule tâche : c’est plus facile à comprendre et à tester morceau par morceau.' ],
          code: `boutique/\n├── .venv/\n├── requirements.txt   # flask, pytest\n├── modele.py          # la classe Produit\n├── donnees.py         # les fonctions qui parlent à SQLite\n├── api.py             # les routes Flask\n└── test_boutique.py   # les tests` },
        { h: 'Étape 1 : le modèle', p: [
          'Une dataclass décrit un produit. La méthode `disponible()` contient la règle métier : on peut commander une quantité positive qui ne dépasse pas le stock.' ],
          code: `# modele.py\nfrom dataclasses import dataclass\n\n@dataclass\nclass Produit:\n    nom: str\n    prix: float\n    stock: int = 0\n\n    def disponible(self, quantite):\n        return 0 < quantite <= self.stock` },
        { h: 'Étape 2 : les données dans SQLite', p: [
          '`donnees.py` est le seul fichier qui connaît le SQL. Si un jour tu changes de base de données, tu ne touches qu’à ce fichier.',
          '`INSERT OR REPLACE` met à jour le produit s’il en existait déjà un du même nom, car le nom est la clé primaire.' ],
          code: `# donnees.py\nimport sqlite3\nfrom modele import Produit\n\ndef connecter(chemin="boutique.db"):\n    con = sqlite3.connect(chemin)\n    con.execute("CREATE TABLE IF NOT EXISTS produits (nom TEXT PRIMARY KEY, prix REAL, stock INTEGER)")\n    return con\n\ndef enregistrer(con, p):\n    with con:\n        con.execute("INSERT OR REPLACE INTO produits VALUES (?, ?, ?)", (p.nom, p.prix, p.stock))\n\ndef chercher(con, nom):\n    ligne = con.execute("SELECT nom, prix, stock FROM produits WHERE nom = ?", (nom,)).fetchone()\n    return Produit(*ligne) if ligne else None` },
        { h: 'Étape 3 : l’API', p: [
          'Deux routes : une pour voir un produit et une pour le commander. Chaque réponse porte son code d’état : 404 s’il n’existe pas, 400 s’il n’y a pas de stock et 201 si la commande est créée.',
          'Il te reste une amélioration : retirer du stock la quantité commandée et l’enregistrer avec `enregistrer()`.' ],
          code: `# api.py\nfrom flask import Flask, jsonify, request\nfrom donnees import connecter, chercher\n\napp = Flask(__name__)\n\n@app.get("/produits/<nom>")\ndef voir(nom):\n    p = chercher(connecter(), nom)\n    if p is None:\n        return jsonify(erreur="Introuvable"), 404\n    return jsonify(nom=p.nom, prix=p.prix, stock=p.stock)\n\n@app.post("/commandes")\ndef commander():\n    corps = request.get_json()\n    p = chercher(connecter(), corps.get("produit", ""))\n    if p is None or not p.disponible(corps.get("quantite", 0)):\n        return jsonify(erreur="Pas de stock"), 400\n    return jsonify(total=round(p.prix * corps["quantite"], 2)), 201` },
        { h: 'Exemple réel : tester la boutique avant l’ouverture', real: true, p: [
          'Les tests utilisent une base en mémoire : ils peuvent tourner mille fois sans toucher à `boutique.db`. Avec `pytest` dans le terminal, tu sais en une seconde si la boutique marche encore après chaque changement.' ],
          code: `# test_boutique.py\nimport pytest\nfrom modele import Produit\nfrom donnees import connecter, enregistrer, chercher\n\n@pytest.fixture\ndef con():\n    return connecter(":memory:")\n\ndef test_enregistrer_et_chercher(con):\n    enregistrer(con, Produit("Graines", 4.5, 10))\n    assert chercher(con, "Graines") == Produit("Graines", 4.5, 10)\n\ndef test_introuvable(con):\n    assert chercher(con, "Kiwi") is None\n\ndef test_sans_stock():\n    assert not Produit("Foin", 7.25, 2).disponible(3)` },
        { h: 'Et maintenant ?', p: [
          'En quatre semaines, tu as fait le chemin de `print("Bonjour, le monde")` à une application avec un modèle, une base de données, une API et des tests. C’est la même structure que beaucoup de projets professionnels, en plus petit.',
          'Prochaines étapes : mets le projet dans Git, passe un formateur comme `ruff` ou `black`, ajoute une page web qui appelle l’API et publie-la chez un hébergeur. Choisis un problème à toi et résous-le avec ce que tu sais : c’est la façon la plus rapide de continuer à apprendre.' ] },
      ],
      x: [
        mc('Pourquoi la boutique sépare-t-elle modele.py, donnees.py et api.py ?', ['Pour que chaque fichier ait une seule tâche et puisse être testé à part', 'Parce que Python n’accepte pas les longs fichiers', 'Pour que le programme soit plus rapide', 'Parce que Flask l’exige'], 'Séparer les responsabilités rend le code plus facile à comprendre, à modifier et à tester.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Produit:\n    nom: str\n    prix: float\n    stock: int = 0\n\n    def disponible(self, quantite):\n        return 0 < quantite <= self.stock\n\np = Produit("Graines", 4.5, 3)\nprint(p.disponible(3), p.disponible(0), p.disponible(4))`, ['True False False', 'True True False', 'False False False', 'True False True'], '3 est dans le stock ; 0 n’est pas une quantité positive et 4 dépasse le stock.'),
        fill(`con.execute("SELECT prix FROM produits WHERE nom = ?", (___,))`, ['nom', '"nom"', 'f"{nom}"', '*nom'], 'La valeur va dans un tuple à part. `"nom"` chercherait littéralement le mot « nom ».'),
        mc('L’API répond `404` à `GET /produits/Kiwi`. Qu’est-ce que cela signifie ?', ['Qu’il n’y a aucun produit appelé Kiwi', 'Que le serveur est en panne', 'Que le corps JSON manque', 'Que la commande a été créée'], '404 veut dire « introuvable ». Un serveur en panne donnerait une erreur 5xx.'),
        out(`def total(prix, quantite):\n    return round(prix * quantite, 2)\n\nprint(total(4.5, 3), total(7.25, 2))`, ['13.5 14.5', '13.50 14.50', '13 14', '7.5 9.25'], '4.5 × 3 = 13.5 et 7.25 × 2 = 14.5. `round` n’ajoute pas de zéros à la fin : un format comme `:.2f` le ferait.'),
        mc('Quel avantage y a-t-il à ce que la fixture utilise `connecter(":memory:")` ?', ['Chaque test commence avec une base vide et ne touche jamais à la vraie', 'Les tests sont enregistrés dans boutique.db', 'Il n’est pas nécessaire de créer la table', 'La base est partagée entre tous les tests'], 'Une nouvelle base en mémoire pour chaque test rend les tests indépendants et reproductibles.'),
        typ('Écris le code d’état que renvoie l’API quand une commande est créée', `return jsonify(total=13.5), ___`, '201', '201 signifie « créé ». 200 est un « OK » générique.'),
        out(`import sqlite3\nfrom dataclasses import dataclass\n\n@dataclass\nclass Produit:\n    nom: str\n    prix: float\n    stock: int = 0\n\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE produits (nom TEXT PRIMARY KEY, prix REAL, stock INTEGER)")\nfor p in [Produit("Graines", 4.5, 10), Produit("Foin", 7.25), Produit("Graines", 4.0, 8)]:\n    with con:\n        con.execute("INSERT OR REPLACE INTO produits VALUES (?, ?, ?)", (p.nom, p.prix, p.stock))\nligne = con.execute("SELECT COUNT(*), SUM(stock) FROM produits").fetchone()\nprint(ligne, Produit(*con.execute("SELECT * FROM produits WHERE nom = 'Graines'").fetchone()))`, ["(2, 8) Produit(nom='Graines', prix=4.0, stock=8)", "(3, 18) Produit(nom='Graines', prix=4.5, stock=10)", "(2, 18) Produit(nom='Graines', prix=4.0, stock=8)", 'sqlite3.IntegrityError'], 'Le deuxième « Graines » remplace le premier car le nom est la clé primaire. Il reste 2 produits : Graines avec un stock de 8 et Foin avec 0.'),
      ],
    },
  ],
}))(Sintaxis);
