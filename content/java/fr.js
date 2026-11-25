/* Java · Français */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('java', 'fr', {
  tag: 'Orienté objet et fortement typé, d’Android aux serveurs.',
  days: [
    // ───────────── Jour 1 ─────────────
    {
      t: 'Introduction',
      d: 'La JVM, javac, la méthode main et System.out.println.',
      guide: [
        { h: 'Qu’est-ce que Java ?', p: [
          'Java est un langage de programmation créé par James Gosling chez Sun Microsystems et publié en 1995. Aujourd’hui, Oracle le maintient et une nouvelle version sort tous les six mois.',
          'Sa devise est « écrire une fois, exécuter partout » : le même programme fonctionne sous Windows, macOS ou Linux sans changer une ligne.',
          'Les banques l’utilisent pour leurs systèmes de paiement, Android pour ses applis, des entreprises comme Netflix ou LinkedIn sur leurs serveurs, et Minecraft dans son édition Java.' ] },
        { h: 'Compiler et exécuter : javac et la JVM', p: [
          'Java ne s’exécute pas directement. D’abord, `javac` traduit ton fichier `.java` en bytecode, un fichier `.class`. Ensuite, la JVM (Java Virtual Machine) lit ce bytecode et l’exécute sur ta machine.',
          'Pour programmer, il te faut le JDK (Java Development Kit), qui contient `javac`, la JVM et les bibliothèques standard. Télécharge-le sur adoptium.net ou oracle.com.',
          'Depuis Java 11, tu peux sauter l’étape de compilation pour les programmes d’un seul fichier : `java Bonjour.java` compile et exécute d’un coup.' ],
          code: `// Dans le terminal :\n// javac Bonjour.java   -> crée Bonjour.class (bytecode)\n// java Bonjour         -> la JVM l'exécute\n// java Bonjour.java    -> compile et exécute en une étape (Java 11+)` },
        { h: 'Ton premier programme', p: [
          'Tout le code Java vit dans une classe. Le fichier doit porter le même nom que la classe publique : la classe `Bonjour` va dans `Bonjour.java`.',
          'L’exécution commence toujours dans la méthode `public static void main(String[] args)`. Si tu changes cette signature, la JVM ne sait pas par où commencer.',
          'Chaque instruction se termine par `;` et les blocs vont entre accolades `{ }`. Java distingue les majuscules : `system.out` ne marche pas, il faut `System.out`.' ],
          code: `public class Bonjour {\n    public static void main(String[] args) {\n        System.out.println("Bonjour, le monde");\n    }\n}` },
        { h: 'print, println et commentaires', p: [
          '`System.out.println()` écrit et ajoute un saut de ligne ; `System.out.print()` écrit sans saut. Avec `+`, tu joins textes et valeurs : `"Total : " + 5` donne `Total : 5`.',
          'Les commentaires expliquent le code et Java les ignore : `//` pour une ligne, `/* ... */` pour plusieurs et `/** ... */` pour la documentation (Javadoc).' ],
          code: `// Commentaire d'une ligne\n/* Commentaire\n   sur plusieurs lignes */\nSystem.out.print("Un ");\nSystem.out.print("Deux");\nSystem.out.println();      // saute seulement une ligne\nSystem.out.println("Trois");\n// Sortie :\n// Un Deux\n// Trois` },
        { h: 'Exemple réel : le ticket d’un café', real: true, p: [
          'Avec ce que tu sais déjà, tu peux imprimer le ticket d’un café. Les calculs entre parenthèses sont faits avant d’être joints au texte.' ],
          code: `public class Ticket {\n    public static void main(String[] args) {\n        System.out.println("Café du Soleil");\n        System.out.println("2 x Café : " + 2 * 1.5);\n        System.out.println("1 x Tartine : " + 2.25);\n        System.out.println("Total : " + (2 * 1.5 + 2.25) + " €");\n    }\n}\n// Café du Soleil\n// 2 x Café : 3.0\n// 1 x Tartine : 2.25\n// Total : 5.25 €` },
      ],
      x: [
        mc('Quelle instruction affiche un texte et passe à la ligne en Java ?', ['System.out.println()', 'console.log()', 'print()', 'echo()'], '`System.out.println()` écrit dans la console et ajoute un saut de ligne. `console.log()` appartient à JavaScript.'),
        mc('Par quel symbole se termine chaque instruction en Java ?', [';', '.', ':', 'Un saut de ligne'], 'Java exige `;` à la fin de chaque instruction ; s’il manque, le code ne compile pas.'),
        mc('Qu’est-ce qui exécute le bytecode d’un fichier .class ?', ['La JVM (Java Virtual Machine)', 'Le compilateur javac', 'Le navigateur', 'Le système d’exploitation directement'], '`javac` crée le bytecode et la JVM l’exécute sur chaque système.'),
        mc('Quelle commande compile le fichier Bonjour.java ?', ['javac Bonjour.java', 'java Bonjour.class', 'run Bonjour.java', 'compile Bonjour'], '`javac` génère `Bonjour.class` ; ensuite `java Bonjour` l’exécute.'),
        ord('Écris l’instruction qui affiche Bonjour et passe à la ligne', ['System', '.', 'out', '.', 'println', '(', '"Bonjour"', ')', ';'], ['console', 'log'], '`System.out.println` écrit le texte et ajoute un saut de ligne. N’oublie pas le `;` final.'),
        out(`System.out.print("A");\nSystem.out.println("B");\nSystem.out.print("C");`, ['AB\nC', 'A\nB\nC', 'ABC', 'A\nBC'], '`print` ne saute pas de ligne, donc A et B restent collés ; `println` saute après le B.'),
        typ('Complète la ligne pour afficher le prix et passer à la ligne', `double prix = 9.99;\nSystem.out.___(prix);`, 'println', '`println` affiche et ajoute un saut de ligne ; `print` ne l’ajoute pas.'),
        out(`System.out.println("Total : " + 2 + 3);\nSystem.out.println(2 + 3 + " total");`, ['Total : 23\n5 total', 'Total : 5\n5 total', 'Total : 23\n23 total', 'Total : 5\n23 total'], 'Java évalue de gauche à droite : dans la première ligne le texte vient d’abord et tout est concaténé ; dans la seconde, 2 + 3 est additionné avant d’arriver au texte.'),
      ],
    },
    // ───────────── Jour 2 ─────────────
    {
      t: 'Variables et types',
      d: 'Types primitifs, String, var, final et conversions.',
      guide: [
        { h: 'Déclarer une variable', p: [
          'Une variable est un nom qui garde une valeur. En Java, on écrit d’abord le type puis le nom : `int age = 20;`.',
          'Java a un typage statique : le type est décidé en écrivant le code et ne change pas. Si tu essaies de mettre `"bonjour"` dans un `int`, le programme ne compile pas. Ainsi, beaucoup d’erreurs apparaissent avant l’exécution.',
          'Les noms s’écrivent en camelCase (`prixTotal`, `nombreEleves`), commencent par une lettre et ne peuvent pas être des mots réservés comme `class` ou `int`.' ],
          code: `int age = 20;\nage = 21;           // la valeur peut changer\n// age = "vingt";  // erreur : un int ne garde pas de texte\nint eleves;         // déclarée sans valeur\neleves = 30;        // affectée ensuite` },
        { h: 'Les 8 types primitifs', p: [
          'Entiers : `byte`, `short`, `int` (le plus courant) et `long` pour les très grands nombres, qui portent un `L` à la fin.',
          'Décimaux : `double` (le plus courant) et `float`, qui porte un `f` à la fin. Un caractère seul est un `char` et va entre apostrophes. Vrai ou faux est un `boolean`.',
          'Utilise `int` et `double` sauf raison particulière : c’est ce qu’attend presque tout le code.' ],
          code: `byte b = 100;               // -128 à 127\nint population = 68_000_000; // le _ aide seulement à lire\nlong distance = 9_460_730_472_580L;\ndouble prix = 19.99;\nfloat poids = 72.5f;\nchar initiale = 'J';\nboolean actif = true;` },
        { h: 'String, var et final', p: [
          '`String` garde du texte entre guillemets doubles. Ce n’est pas un primitif mais une classe, d’où la majuscule.',
          'Depuis Java 10, `var` déduit le type d’une variable locale à partir de sa valeur : `var ville = "Paris";` est un `String`. Le type reste fixe.',
          '`final` crée une constante qu’on ne peut pas réaffecter. Par convention, elle s’écrit en MAJUSCULES : `final double TVA = 0.20;`.' ],
          code: `String nom = "Ana";\nvar ville = "Paris";     // le compilateur déduit String\nvar visites = 0;         // déduit int\nfinal double TVA = 0.20;\n// TVA = 0.10;           // erreur : TVA est final` },
        { h: 'Conversions entre types', p: [
          'D’un petit type vers un grand, la conversion est automatique : un `int` tient dans un `double`. Dans l’autre sens, il faut la demander avec un cast, `(int) 9.99`, et les décimales sont perdues (pas d’arrondi).',
          'Pour transformer un texte en nombre, utilise `Integer.parseInt("42")` ou `Double.parseDouble("3.5")`. Si le texte n’est pas un nombre, une `NumberFormatException` est levée.' ],
          code: `int entier = 7;\ndouble d = entier;           // 7.0, automatique\nint tronque = (int) 9.99;    // 9\nint n = Integer.parseInt("42");\ndouble x = Double.parseDouble("3.5");\nString s = String.valueOf(n);  // "42"` },
        { h: 'Exemple réel : la fiche d’un produit', real: true, p: [
          'Une boutique en ligne garde pour chaque produit son nom, son prix, son stock et s’il est disponible. Chaque donnée a son type naturel.',
          'Pour afficher le prix TTC arrondi à 2 décimales, on multiplie par 100, on arrondit avec `Math.round` et on divise par `100.0`.' ],
          code: `String nom = "Écouteurs Bluetooth";\ndouble prix = 39.90;\nint stock = 12;\nboolean disponible = stock > 0;\nfinal double TVA = 0.21;\n\ndouble ttc = Math.round(prix * (1 + TVA) * 100) / 100.0;\nSystem.out.println(nom + " : " + ttc + " €");          // Écouteurs Bluetooth : 48.28 €\nSystem.out.println("Disponible : " + disponible);    // Disponible : true` },
      ],
      x: [
        fill(`___ age = 20;`, ['int', 'integer', 'Int', 'num'], '`int` est le type primitif des nombres entiers. Java distingue les majuscules, donc `Int` n’existe pas.'),
        mc('Quel type primitif garde `true` ou `false` ?', ['boolean', 'bool', 'bit', 'logic'], 'En Java, le type logique primitif est `boolean` ; `bool` vient du C++ et du C#.'),
        mc('Laquelle de ces valeurs est un `char` valide ?', ["'J'", '"J"', "'Java'", 'J'], 'Un `char` est un seul caractère entre apostrophes. Avec des guillemets doubles, ce serait un `String`.'),
        out(`int a = 7;\nint b = 2;\nSystem.out.println(a / b);`, ['3', '3.5', '4', '3.0'], 'Diviser deux `int` donne un autre `int` : la partie décimale est supprimée.'),
        out(`double prix = 9.99;\nint n = (int) prix;\nSystem.out.println(n);`, ['9', '10', '9.99', '9.0'], 'Le cast en `int` coupe les décimales, il n’arrondit pas.'),
        out(`String s = "Java";\nSystem.out.println(s + 1 + 2);`, ['Java12', 'Java3', '3Java', 'Erreur'], 'On évalue de gauche à droite : "Java" + 1 donne "Java1", et + 2 donne "Java12".'),
        mc('Que se passe-t-il avec ce code ?', ['Il ne compile pas : une variable final ne peut pas être réaffectée', 'MAX passe à 20', 'MAX reste à 10 sans prévenir', 'Il échoue seulement à l’exécution'], 'Le compilateur empêche de réaffecter une variable `final`.', `final int MAX = 10;\nMAX = 20;`),
        out(`char c = 'A';\nint n = c + 2;\nchar d = (char) n;\nSystem.out.println(n + " " + d);`, ['67 C', 'C 67', 'A2 C', '67 67'], 'Un `char` est un nombre : A vaut 65, donc n vaut 67. En le reconvertissant en `char`, on obtient le C.'),
      ],
    },
    // ───────────── Jour 3 ─────────────
    {
      t: 'Opérateurs',
      d: 'Arithmétiques, comparaison, logiques, incréments et priorité.',
      guide: [
        { h: 'Opérateurs arithmétiques', p: [
          'Java a `+`, `-`, `*`, `/` et `%`. L’opérateur `%` donne le reste de la division et sert à savoir si un nombre est pair (`n % 2 == 0`) ou à répéter des cycles.',
          'Attention à la division entre entiers : `7 / 2` donne `3`, car les deux opérandes sont des `int`. Si l’un est un `double`, le résultat l’est aussi : `7 / 2.0` donne `3.5`.',
          'Diviser un entier par zéro lève `ArithmeticException` ; avec un `double`, le résultat est `Infinity`.' ],
          code: `int a = 7, b = 2;\nSystem.out.println(a + b);    // 9\nSystem.out.println(a / b);    // 3\nSystem.out.println(a % b);    // 1\nSystem.out.println(a / 2.0);  // 3.5` },
        { h: 'Affectation composée et incréments', p: [
          '`x += 3` équivaut à `x = x + 3`. Il existe aussi `-=`, `*=`, `/=` et `%=`.',
          '`x++` ajoute 1 et `x--` retire 1. Seuls sur une ligne, peu importe s’ils sont avant ou après, mais dans une expression ça change : `x++` utilise l’ancienne valeur puis ajoute ; `++x` ajoute d’abord et utilise la nouvelle.' ],
          code: `int points = 10;\npoints += 5;   // 15\npoints *= 2;   // 30\nint i = 5;\nint a = i++;   // a = 5, i = 6\nint b = ++i;   // i = 7, b = 7` },
        { h: 'Comparaison et logique', p: [
          'Les comparateurs `==`, `!=`, `>`, `<`, `>=` et `<=` renvoient un `boolean`. Ne confonds pas `==` (comparer) et `=` (affecter).',
          'Les opérateurs logiques sont `&&` (et), `||` (ou) et `!` (non). Ils sont évalués en court-circuit : si la partie gauche suffit à connaître le résultat, la droite n’est pas exécutée. Ainsi, `n != 0 && 10 / n > 1` ne divise jamais par zéro.' ],
          code: `int age = 25;\nboolean majeur = age >= 18;               // true\nboolean jeune = age >= 18 && age < 30;    // true\nboolean weekend = false;\nSystem.out.println(!weekend || majeur);   // true` },
        { h: 'Priorité, casts et Math', p: [
          'Comme en mathématiques, `*`, `/` et `%` passent avant `+` et `-`. En cas de doute, ajoute des parenthèses : elles rendent aussi le code plus lisible.',
          'Le cast `(double) a / b` convertit `a` avant de diviser. La classe `Math` propose des fonctions prêtes : `Math.pow`, `Math.sqrt`, `Math.max`, `Math.abs` et `Math.round`.' ],
          code: `System.out.println(2 + 3 * 4);        // 14\nSystem.out.println((2 + 3) * 4);      // 20\nSystem.out.println((double) 7 / 2);   // 3.5\nSystem.out.println(Math.pow(2, 10));  // 1024.0\nSystem.out.println(Math.sqrt(81));    // 9.0\nSystem.out.println(Math.round(4.6));  // 5` },
        { h: 'Exemple réel : livraison gratuite et délai', real: true, p: [
          'Une boutique offre la livraison si la commande dépasse 50 € ou si le client est membre. Le livreur a aussi besoin du temps de trajet en heures et minutes.',
          'Avec `/` et `%` entre entiers, on transforme des minutes en heures et minutes sans décimales.' ],
          code: `double sousTotal = 47.50;\nboolean estMembre = true;\nboolean livraisonGratuite = sousTotal >= 50 || estMembre;\n\nint minutes = 135;\nSystem.out.println("Livraison gratuite : " + livraisonGratuite);  // Livraison gratuite : true\nSystem.out.println(minutes / 60 + " h " + minutes % 60 + " min");   // 2 h 15 min` },
      ],
      x: [
        out(`System.out.println(10 % 4);`, ['2', '2.5', '0', '4'], '`%` donne le reste : 4 va deux fois dans 10 et il reste 2.'),
        out(`int x = 5;\nx += 3;\nSystem.out.println(x);`, ['8', '5', '53', '3'], '`x += 3` équivaut à `x = x + 3`.'),
        mc('Quel opérateur signifie « ou » logique en Java ?', ['||', '&&', '!', 'or'], '`||` est OU, `&&` est ET et `!` est NON. Java n’utilise pas le mot `or`.'),
        out(`System.out.println(2 + 3 * 4);`, ['14', '20', '24', '9'], 'La multiplication passe d’abord : 3 × 4 = 12 puis 2 + 12 = 14.'),
        out(`System.out.println((double) 7 / 2);`, ['3.5', '3', '3.0', '4'], 'Le cast transforme le 7 en 7.0 avant la division, qui devient décimale.'),
        typ('Ajoute 1 aux visites avec l’opérateur d’incrément', `int visites = 41;\nvisites___;`, ['++', '+= 1', '+=1'], '`visites++` ajoute 1 à la variable ; c’est la forme courte de `visites = visites + 1`.'),
        out(`int c = 0;\nSystem.out.println(c != 0 && 10 / c > 1);`, ['false', 'true', 'ArithmeticException', '0'], 'Court-circuit : `c != 0` est faux, donc `&&` n’évalue jamais la division par zéro.'),
        out(`int i = 5;\nint j = i++ + ++i;\nSystem.out.println(j + " " + i);`, ['12 7', '11 7', '12 6', '10 7'], '`i++` utilise 5 et laisse `i` à 6 ; `++i` le monte à 7 et utilise 7. La somme vaut 12 et `i` finit à 7.'),
      ],
    },
    // ───────────── Jour 4 ─────────────
    {
      t: 'Chaînes de caractères',
      d: 'length, charAt, substring, equals, split et StringBuilder.',
      guide: [
        { h: 'Qu’est-ce qu’un String', p: [
          '`String` garde du texte entre guillemets doubles. C’est une classe, donc elle a des méthodes qu’on appelle avec un point : `nom.length()`.',
          'Les String sont immuables : aucune méthode ne change le texte d’origine, toutes en renvoient un nouveau. Si tu ne gardes pas le résultat, il est perdu.',
          'Les indices des caractères commencent à 0 : dans `"Java"`, le `J` est à la position 0 et le `a` final à la 3.' ],
          code: `String s = "bonjour";\ns.toUpperCase();          // renvoie "BONJOUR", mais rien n'est gardé\nSystem.out.println(s);    // bonjour\ns = s.toUpperCase();      // cette fois oui\nSystem.out.println(s);    // BONJOUR` },
        { h: 'Méthodes essentielles', p: [
          '`length()` compte les caractères, `charAt(i)` renvoie celui de la position `i` et `indexOf()` cherche où apparaît quelque chose (renvoie -1 s’il n’y est pas).',
          '`substring(debut, fin)` découpe : inclut `debut` et exclut `fin`. `trim()` enlève les espaces aux extrémités ; `replace()`, `contains()`, `startsWith()` et `endsWith()` font ce que leur nom indique.' ],
          code: `String s = "Hola Java";\nSystem.out.println(s.length());          // 9\nSystem.out.println(s.charAt(0));         // H\nSystem.out.println(s.indexOf("Java"));   // 5\nSystem.out.println(s.substring(0, 4));   // Hola\nSystem.out.println(s.replace("a", "4")); // Hol4 J4v4\nSystem.out.println(s.contains("Ja"));    // true` },
        { h: 'Comparer des textes : equals, pas ==', p: [
          '`==` vérifie si deux variables pointent vers le même objet en mémoire, pas si le texte est égal. Pour comparer le contenu, utilise toujours `equals()`.',
          '`equalsIgnoreCase()` ignore les majuscules, pratique pour comparer des réponses d’utilisateurs. `compareTo()` sert à trier par ordre alphabétique : il renvoie un nombre négatif, zéro ou positif.' ],
          code: `String a = "java";\nString b = new String("java");\nSystem.out.println(a == b);                     // false\nSystem.out.println(a.equals(b));                // true\nSystem.out.println("JAVA".equalsIgnoreCase(a)); // true` },
        { h: 'Découper, joindre et StringBuilder', p: [
          '`split(",")` coupe un texte en un tableau de morceaux et `String.join(", ", ...)` les réunit. `"ab".repeat(3)` répète le texte.',
          'Concaténer avec `+` dans une boucle crée un nouveau String à chaque tour. Pour construire de longs textes, utilise `StringBuilder`, qui se modifie : `append()`, `insert()`, `reverse()` et à la fin `toString()`.' ],
          code: `String[] morceaux = "rouge,vert,bleu".split(",");\nSystem.out.println(morceaux[1]);                   // vert\nSystem.out.println(String.join(" | ", morceaux));  // rouge | vert | bleu\n\nStringBuilder sb = new StringBuilder();\nsb.append("Bonjour").append(", ").append("Java");\nSystem.out.println(sb.toString());                 // Bonjour, Java` },
        { h: 'Exemple réel : nettoyer un e-mail de formulaire', real: true, p: [
          'Les gens tapent leur e-mail avec des espaces et des majuscules. Avant de l’enregistrer, il faut le normaliser, et parfois séparer l’utilisateur du domaine.' ],
          code: `String saisie = "  Ana.Martin@Gmail.COM ";\nString email = saisie.trim().toLowerCase();\nint arobase = email.indexOf('@');\nString utilisateur = email.substring(0, arobase);\nString domaine = email.substring(arobase + 1);\n\nSystem.out.println(email);        // ana.martin@gmail.com\nSystem.out.println(utilisateur);  // ana.martin\nSystem.out.println(domaine);      // gmail.com` },
      ],
      x: [
        out(`String s = "Java";\nSystem.out.println(s.length());`, ['4', '3', '5'], '`length()` renvoie le nombre de caractères : J, a, v, a.'),
        out(`System.out.println("Bonjour".charAt(1));`, ['o', 'B', 'n'], 'Les indices commencent à 0, donc 1 est la deuxième lettre.'),
        mc('Comment compare-t-on correctement le contenu de deux String ?', ['s1.equals(s2)', 's1 == s2', 's1 === s2', 's1.compare(s2)'], '`==` vérifie s’il s’agit du même objet en mémoire. `equals()` compare le texte.'),
        out(`String s = "programmer";\nSystem.out.println(s.substring(0, 3));`, ['pro', 'prog', 'rog', 'ogr'], '`substring(debut, fin)` inclut le début et exclut la fin : positions 0, 1 et 2.'),
        out(`String s = "bonjour";\ns.toUpperCase();\nSystem.out.println(s);`, ['bonjour', 'BONJOUR', 'Bonjour'], 'Les String sont immuables : `toUpperCase()` renvoie un autre String, qui n’est pas gardé ici.'),
        typ('Enlève les espaces au début et à la fin', `String saisie = "  ana@mail.com ";\nString propre = saisie.___();`, ['trim', 'strip'], '`trim()` (ou `strip()`) renvoie le texte sans espaces aux extrémités.'),
        out(`String[] morceaux = "rouge,vert,bleu".split(",");\nSystem.out.println(morceaux.length + " " + morceaux[1]);`, ['3 vert', '2 vert', '3 rouge', '3 ,vert'], '`split(",")` donne 3 morceaux et celui d’indice 1 est "vert".'),
        out(`StringBuilder sb = new StringBuilder("ab");\nsb.append("cd").reverse();\nString s = sb.toString().toUpperCase();\nSystem.out.println(s.indexOf("B") + s);`, ['2DCBA', '1DCBA', '2ABCD', 'DCBA2'], '`append` donne "abcd", `reverse` le transforme en "dcba" et en majuscules c’est "DCBA". Le B est à la position 2 et le nombre est concaténé devant.'),
      ],
    },
    // ───────────── Jour 5 ─────────────
    {
      t: 'Tableaux',
      d: 'Tableaux de taille fixe, indices, la classe Arrays et matrices.',
      guide: [
        { h: 'Qu’est-ce qu’un tableau', p: [
          'Un tableau (array) garde plusieurs valeurs du même type sous un seul nom. Sa taille est fixée à la création et ne change plus.',
          'Tu peux le créer avec des valeurs, `int[] notes = {7, 9, 5};`, ou vide avec une taille, `new int[5]`. Les vides sont remplis de valeurs par défaut : `0` pour les nombres, `false` pour les `boolean` et `null` pour les objets comme `String`.' ],
          code: `int[] notes = {7, 9, 5};\nString[] noms = new String[3];      // [null, null, null]\ndouble[] prix = new double[2];      // [0.0, 0.0]\nnoms[0] = "Ana";` },
        { h: 'Indices et length', p: [
          'Les indices vont de `0` à `length - 1`. Le dernier élément est `a[a.length - 1]`. `length` est une propriété, sans parenthèses (contrairement à `length()` des String).',
          'Si tu utilises un indice hors limites, Java lève `ArrayIndexOutOfBoundsException`. C’est l’une des erreurs les plus courantes au début, surtout avec `<=` au lieu de `<` dans les boucles.' ],
          code: `int[] a = {10, 20, 30};\nSystem.out.println(a.length);          // 3\nSystem.out.println(a[a.length - 1]);   // 30\n// System.out.println(a[3]);           // ArrayIndexOutOfBoundsException` },
        { h: 'Parcourir un tableau', p: [
          'Avec un `for` classique, tu as l’indice ; avec le for-each (`for (int n : notes)`), tu parcours directement les valeurs. Tu les verras en détail le jour des boucles.',
          'Un tableau est un objet : si tu écris `int[] b = a;`, `b` et `a` pointent vers le même tableau. Pour une copie indépendante, utilise `a.clone()` ou `Arrays.copyOf(a, a.length)`.' ],
          code: `int[] notes = {7, 9, 5};\nfor (int i = 0; i < notes.length; i++) {\n    System.out.println("Note " + i + " : " + notes[i]);\n}\nint somme = 0;\nfor (int n : notes) {\n    somme += n;\n}\nSystem.out.println(somme);  // 21` },
        { h: 'La classe Arrays et les matrices', p: [
          'Si tu affiches un tableau directement, tu verras quelque chose comme `[I@1b6d3586`, sa référence. Utilise `Arrays.toString()` pour voir le contenu. N’oublie pas `import java.util.Arrays;`.',
          '`Arrays.sort()` trie, `Arrays.fill()` remplit et `Arrays.copyOf()` copie. Une matrice est un tableau de tableaux : `m[ligne][colonne]`.' ],
          code: `int[] a = {3, 1, 2};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a));  // [1, 2, 3]\n\nint[][] plateau = {{1, 2, 3}, {4, 5, 6}};\nSystem.out.println(plateau[1][2]);        // 6\nSystem.out.println(plateau.length);       // 2 lignes` },
        { h: 'Exemple réel : les températures de la semaine', real: true, p: [
          'Une appli météo garde les maximales des 7 jours de la semaine et affiche la plus haute et la moyenne.' ],
          code: `double[] temps = {18.5, 21.0, 19.5, 23.0, 22.5, 24.0, 18.5};\ndouble somme = 0;\ndouble max = temps[0];\nfor (double t : temps) {\n    somme += t;\n    if (t > max) max = t;\n}\nSystem.out.println("Maximale : " + max);                // Maximale : 24.0\nSystem.out.println("Moyenne : " + somme / temps.length); // Moyenne : 21.0` },
      ],
      x: [
        out(`int[] tab = new int[3];\nSystem.out.println(tab[0]);`, ['0', 'null', '3', 'Erreur'], 'Les tableaux d’`int` sont remplis de zéros à la création.'),
        out(`int[] tab = {1, 2, 3};\nSystem.out.println(tab.length);`, ['3', '2', '4'], '`length` est le nombre d’éléments, pas le dernier indice.'),
        typ('Affiche combien il y a de noms', `String[] noms = {"Ana", "Bea"};\nSystem.out.println(noms.___);`, 'length', 'Pour les tableaux, `length` est une propriété et s’écrit sans parenthèses.'),
        mc('Si `tab` a 3 éléments, que se passe-t-il en lisant `tab[3]` ?', ['ArrayIndexOutOfBoundsException est levée', 'Il renvoie 0', 'Il renvoie null', 'Il renvoie le dernier élément'], 'Les indices valides vont de 0 à 2 ; le 3 est hors limites.'),
        out(`int[] a = {3, 1, 2};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a));`, ['[1, 2, 3]', '[3, 1, 2]', '123', '[I@1b6d3586'], '`Arrays.toString` donne un texte lisible ; afficher le tableau directement montrerait sa référence.'),
        out(`int[][] m = {{1, 2}, {3, 4}};\nSystem.out.println(m[1][0]);`, ['3', '2', '4', '1'], 'Ligne 1 (la deuxième) et colonne 0 (la première).'),
        out(`int[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 9;\nSystem.out.println(a[0]);`, ['9', '1', '0'], '`b = a` ne copie pas le tableau : les deux variables pointent vers le même, donc le changement se voit depuis `a`.'),
        out(`int[] v = {4, 7, 1, 9};\nint[] c = Arrays.copyOf(v, 3);\nArrays.sort(c);\nSystem.out.println(c[c.length - 1] + v[3]);`, ['16', '18', '10', '79'], '`copyOf(v, 3)` copie {4, 7, 1} ; trié, cela donne {1, 4, 7}. Le dernier vaut 7, et 7 + 9 = 16. `v` ne change pas.'),
      ],
    },
    // ───────────── Jour 6 ─────────────
    {
      t: 'ArrayList',
      d: 'Listes dynamiques : add, get, set, remove, size et classes enveloppes.',
      guide: [
        { h: 'Pourquoi une liste', p: [
          'Un tableau a une taille fixe. Si tu ne sais pas combien d’éléments tu auras (les produits d’un panier, les messages d’un chat), utilise `ArrayList`, qui grandit et rétrécit toute seule.',
          'On la déclare avec le type de ses éléments entre chevrons : `List<String> noms = new ArrayList<>();`. Il faut `import java.util.ArrayList;` et `import java.util.List;`.',
          'Déclarer la variable comme `List` (l’interface) et la créer comme `ArrayList` est la pratique habituelle : tu peux ainsi changer d’implémentation sans toucher au reste du code.' ] },
        { h: 'Méthodes de base', p: [
          '`add()` ajoute à la fin (ou à une position avec `add(i, x)`), `get(i)` lit, `set(i, x)` remplace et `remove()` retire. `size()` donne combien il y en a.',
          '`contains()` et `indexOf()` cherchent, `isEmpty()` dit si elle est vide et `clear()` la vide. Afficher une liste montre son contenu : `[a, b, c]`.' ],
          code: `List<String> fruits = new ArrayList<>();\nfruits.add("pomme");\nfruits.add("poire");\nfruits.add(0, "kiwi");      // [kiwi, pomme, poire]\nfruits.set(1, "mangue");    // [kiwi, mangue, poire]\nfruits.remove("poire");     // [kiwi, mangue]\nSystem.out.println(fruits.get(0));             // kiwi\nSystem.out.println(fruits.size());             // 2\nSystem.out.println(fruits.contains("mangue")); // true` },
        { h: 'Classes enveloppes et autoboxing', p: [
          'Les listes ne gardent que des objets, pas des primitifs. C’est pourquoi `List<int>` ne compile pas : on utilise la classe enveloppe, `List<Integer>`. Chaque primitif a la sienne : `Integer`, `Double`, `Boolean`, `Character`...',
          'Java convertit automatiquement entre `int` et `Integer` (autoboxing). Attention à `remove` : dans une `List<Integer>`, `remove(1)` retire l’indice 1, et `remove(Integer.valueOf(1))` retire la valeur 1.' ],
          code: `List<Integer> nums = new ArrayList<>(List.of(5, 1, 8));\nnums.remove(1);                   // retire l'indice 1 -> [5, 8]\nnums.remove(Integer.valueOf(8));  // retire la valeur 8 -> [5]\nSystem.out.println(nums);         // [5]` },
        { h: 'Parcourir, trier et listes immuables', p: [
          'Parcours une liste avec for-each. `Collections.sort(liste)` la trie et `Collections.max(liste)` donne le plus grand élément.',
          '`List.of(...)` crée une liste immuable : rapide à écrire, mais `add` ou `remove` lèvent `UnsupportedOperationException`. Si tu dois la modifier, enveloppe-la : `new ArrayList<>(List.of(...))`.' ],
          code: `List<Integer> ages = new ArrayList<>(List.of(34, 19, 27));\nCollections.sort(ages);\nSystem.out.println(ages);                   // [19, 27, 34]\nSystem.out.println(Collections.max(ages));  // 34\nfor (int a : ages) {\n    System.out.print(a + ";");              // 19;27;34;\n}` },
        { h: 'Exemple réel : la liste de courses', real: true, p: [
          'Une appli de liste de courses ajoute des produits, raye ceux qui sont achetés et met l’urgent en premier.' ],
          code: `List<String> courses = new ArrayList<>();\ncourses.add("lait");\ncourses.add("pain");\ncourses.add("œufs");\ncourses.remove("pain");         // déjà acheté\ncourses.add(0, "café");         // l'urgent d'abord\nSystem.out.println(courses);    // [café, lait, œufs]\nSystem.out.println("Il reste " + courses.size() + " articles");  // Il reste 3 articles` },
      ],
      x: [
        out(`List<String> liste = new ArrayList<>();\nliste.add("a");\nliste.add("b");\nSystem.out.println(liste.size());`, ['2', '1', '0'], '`size()` renvoie le nombre d’éléments de la liste.'),
        typ('Ajoute "Luis" à la fin de la liste', `List<String> noms = new ArrayList<>();\nnoms.___("Luis");`, 'add', '`add` insère un élément à la fin de la liste.'),
        fill(`List<String> villes = new ArrayList<>(List.of("Lima", "Quito"));\nString premiere = villes.___(0);`, ['get', 'at', 'first', 'index'], '`get(i)` renvoie l’élément à la position `i`. Les crochets `[0]` ne marchent qu’avec les tableaux.'),
        out(`List<String> l = List.of("x", "y");\nSystem.out.println(l.contains("y"));`, ['true', 'false', '1'], '`contains` indique si l’élément est dans la liste.'),
        mc('Pourquoi `List<int>` ne compile-t-il pas ?', ['Les génériques exigent des types objet : il faut List<Integer>', 'Il manque l’import de int', 'List n’accepte pas les nombres', 'Il faut écrire List[int]'], '`Integer` est la classe enveloppe de `int` et Java convertit automatiquement entre les deux.'),
        out(`List<String> l = new ArrayList<>(List.of("a", "b", "c"));\nl.remove(1);\nSystem.out.println(l);`, ['[a, c]', '[b, c]', '[a, b]'], '`remove(1)` retire l’élément d’indice 1, le "b".'),
        out(`List<Integer> l = new ArrayList<>();\nl.add(5);\nl.add(0, 9);\nSystem.out.println(l.get(0) + l.get(1));`, ['14', '95', '9', '5'], '`add(0, 9)` insère le 9 au début : [9, 5]. Ce sont des `Integer`, donc ils s’additionnent : 14.'),
        out(`List<Integer> l = new ArrayList<>(List.of(10, 20, 30));\nl.remove(Integer.valueOf(10));\nl.remove(0);\nl.add(5);\nSystem.out.println(l + " " + l.size());`, ['[30, 5] 2', '[20, 5] 2', '[10, 30, 5] 3', '[30, 5] 3'], 'On retire d’abord la valeur 10 ([20, 30]), puis l’indice 0 ([30]) et on ajoute 5 : [30, 5], avec 2 éléments.'),
      ],
    },
    // ───────────── Jour 7 ─────────────
    {
      t: 'Ensembles',
      d: 'HashSet, TreeSet, LinkedHashSet et opérations ensemblistes.',
      guide: [
        { h: 'Qu’est-ce qu’un Set', p: [
          'Un `Set` est une collection sans doublons : si tu ajoutes un élément déjà présent, rien ne se passe. Parfait pour des étiquettes, des utilisateurs uniques ou des mots distincts.',
          'Vérifier si quelque chose est dans un `HashSet` avec `contains()` est presque instantané, même avec des millions d’éléments ; dans une liste, il faudrait tout parcourir.' ],
          code: `Set<String> etiquettes = new HashSet<>();\netiquettes.add("java");\netiquettes.add("poo");\netiquettes.add("java");                          // déjà présent\nSystem.out.println(etiquettes.size());           // 2\nSystem.out.println(etiquettes.contains("poo"));  // true` },
        { h: 'Trois implémentations', p: [
          '`HashSet` est le plus rapide, mais il ne garantit aucun ordre au parcours.',
          '`LinkedHashSet` se souvient de l’ordre d’insertion et `TreeSet` garde les éléments triés (nombres du plus petit au plus grand, textes par ordre alphabétique).',
          'Choisis `HashSet` par défaut et change seulement si tu as besoin d’un ordre précis.' ],
          code: `List<Integer> donnees = List.of(5, 1, 3, 1);\nSystem.out.println(new LinkedHashSet<>(donnees)); // [5, 1, 3]\nSystem.out.println(new TreeSet<>(donnees));       // [1, 3, 5]` },
        { h: 'add, remove et leur résultat', p: [
          '`add()` renvoie `true` si l’élément était nouveau et `false` s’il était déjà là. Tu peux ainsi détecter les doublons en insérant.',
          '`remove()` renvoie aussi si l’ensemble a changé. Un `Set` n’a pas d’indices : `get(0)` n’existe pas.' ],
          code: `Set<String> vus = new HashSet<>();\nSystem.out.println(vus.add("ana"));     // true\nSystem.out.println(vus.add("ana"));     // false, doublon\nSystem.out.println(vus.remove("eva"));  // false, absent` },
        { h: 'Union, intersection et différence', p: [
          '`addAll` fait l’union, `retainAll` l’intersection (ne garde que les communs) et `removeAll` la différence.',
          'Les trois modifient l’ensemble sur lequel tu les appelles. Si tu veux garder l’original, fais d’abord une copie : `new HashSet<>(a)`.' ],
          code: `Set<String> lundi = Set.of("Ana", "Luis", "Eva");\nSet<String> mardi = Set.of("Eva", "Teo");\n\nSet<String> lesDeux = new TreeSet<>(lundi);\nlesDeux.retainAll(mardi);\nSystem.out.println(lesDeux);  // [Eva]\n\nSet<String> tous = new TreeSet<>(lundi);\ntous.addAll(mardi);\nSystem.out.println(tous);     // [Ana, Eva, Luis, Teo]` },
        { h: 'Exemple réel : supprimer les e-mails en double', real: true, p: [
          'Une newsletter reçoit des inscriptions depuis plusieurs formulaires et certains e-mails arrivent deux fois. Un `LinkedHashSet` supprime les doublons et respecte l’ordre d’arrivée.' ],
          code: `List<String> inscrits = List.of(\n    "ana@mail.com", "luis@mail.com", "ana@mail.com",\n    "eva@mail.com", "luis@mail.com");\nSet<String> uniques = new LinkedHashSet<>(inscrits);\nSystem.out.println(uniques.size());  // 3\nSystem.out.println(uniques);         // [ana@mail.com, luis@mail.com, eva@mail.com]` },
      ],
      x: [
        mc('Quelle collection n’accepte pas de doublons ?', ['HashSet', 'ArrayList', 'LinkedList', 'int[]'], 'Un `Set` garde chaque élément une seule fois.'),
        out(`Set<String> s = new HashSet<>();\ns.add("a");\ns.add("a");\ns.add("b");\nSystem.out.println(s.size());`, ['2', '3', '1'], 'Le deuxième "a" est ignoré car il était déjà là.'),
        mc('Que renvoie `set.add(x)` si x était déjà dans l’ensemble ?', ['false', 'true', 'null', 'Il lève une exception'], '`add` renvoie si l’ensemble a changé ; si x était déjà là, il ne change pas.'),
        out(`Set<Integer> s = new TreeSet<>(List.of(5, 1, 3));\nSystem.out.println(s);`, ['[1, 3, 5]', '[5, 1, 3]', '[5, 3, 1]', '{1, 3, 5}'], '`TreeSet` garde les éléments triés du plus petit au plus grand.'),
        mc('Quel Set conserve l’ordre dans lequel les éléments ont été ajoutés ?', ['LinkedHashSet', 'HashSet', 'TreeSet', 'SortedSet'], '`TreeSet` trie par valeur ; `LinkedHashSet` respecte l’ordre d’arrivée.'),
        fill(`Set<String> tous = new TreeSet<>(groupeA);\ntous.___(groupeB);  // union des deux groupes`, ['addAll', 'retainAll', 'removeAll', 'union'], '`addAll` ajoute tous les éléments de l’autre ensemble : c’est l’union.'),
        out(`Set<Integer> a = new TreeSet<>(List.of(1, 2, 3));\na.retainAll(List.of(2, 3, 4));\nSystem.out.println(a);`, ['[2, 3]', '[1, 2, 3, 4]', '[1]', '[4]'], '`retainAll` ne garde que les éléments communs : c’est l’intersection.'),
        out(`Set<String> s = new TreeSet<>(List.of("poire", "kiwi", "raisin"));\nboolean b = s.add("kiwi");\ns.removeAll(Set.of("raisin", "mangue"));\nSystem.out.println(b + " " + s);`, ['false [kiwi, poire]', 'true [kiwi, poire]', 'false [poire, kiwi]', 'false [kiwi, poire, raisin]'], '"kiwi" était déjà là, donc `add` donne false. `removeAll` retire "raisin" (mangue n’y était pas) et le `TreeSet` affiche le reste par ordre alphabétique.'),
      ],
    },
    // ───────────── Jour 8 ─────────────
    {
      t: 'Maps',
      d: 'HashMap et TreeMap : put, get, getOrDefault, merge et parcours.',
      guide: [
        { h: 'Qu’est-ce qu’une Map', p: [
          'Une `Map` associe des clés uniques à des valeurs, comme un dictionnaire : le code postal de chaque ville, le stock de chaque produit, la note de chaque élève.',
          'On la déclare avec deux types : `Map<String, Integer> stock = new HashMap<>();`. Les clés ne se répètent pas ; si tu fais `put` avec une clé existante, tu remplaces sa valeur.' ] },
        { h: 'Ajouter, lire et supprimer', p: [
          '`put(k, v)` ajoute ou remplace et `get(k)` lit. Si la clé n’existe pas, `get` renvoie `null`, et l’utiliser comme nombre lève `NullPointerException`.',
          '`getOrDefault(k, valeur)` renvoie une valeur de secours quand la clé manque. `containsKey()` vérifie si elle existe et `remove()` la supprime.' ],
          code: `Map<String, Integer> stock = new HashMap<>();\nstock.put("pommes", 12);\nstock.put("poires", 5);\nstock.put("poires", 8);                               // remplace\nSystem.out.println(stock.get("poires"));              // 8\nSystem.out.println(stock.get("raisins"));             // null\nSystem.out.println(stock.getOrDefault("raisins", 0)); // 0\nSystem.out.println(stock.containsKey("pommes"));      // true` },
        { h: 'Parcourir une Map et choisir une implémentation', p: [
          '`keySet()` donne les clés, `values()` les valeurs et `entrySet()` les paires ; chaque `Map.Entry` a `getKey()` et `getValue()`.',
          '`HashMap` ne garantit aucun ordre, `LinkedHashMap` respecte l’ordre d’insertion et `TreeMap` trie par clé.' ],
          code: `Map<String, Double> notes = new TreeMap<>();\nnotes.put("Luis", 6.5);\nnotes.put("Ana", 9.0);\nfor (Map.Entry<String, Double> e : notes.entrySet()) {\n    System.out.println(e.getKey() + " -> " + e.getValue());\n}\n// Ana -> 9.0\n// Luis -> 6.5` },
        { h: 'Compter avec merge', p: [
          'Compter combien de fois quelque chose apparaît est très courant. `merge(cle, 1, Integer::sum)` met 1 si la clé est nouvelle et, si elle existe déjà, lui ajoute 1.',
          'L’alternative classique est `m.put(k, m.getOrDefault(k, 0) + 1)`. Les deux font la même chose ; `merge` est plus court.' ],
          code: `Map<String, Integer> votes = new HashMap<>();\nfor (String v : new String[] {"oui", "non", "oui"}) {\n    votes.merge(v, 1, Integer::sum);\n}\nSystem.out.println(votes.get("oui"));  // 2` },
        { h: 'Exemple réel : compter les mots d’un texte', real: true, p: [
          'Un analyseur de texte compte combien de fois apparaît chaque mot, par exemple pour trouver les plus fréquents dans les avis clients. Le `TreeMap` les affiche par ordre alphabétique.' ],
          code: `String texte = "le chat et le chien et le poisson";\nMap<String, Integer> compte = new TreeMap<>();\nfor (String mot : texte.split(" ")) {\n    compte.merge(mot, 1, Integer::sum);\n}\nSystem.out.println(compte);  // {chat=1, chien=1, et=2, le=3, poisson=1}` },
      ],
      x: [
        out(`Map<String, Integer> m = new HashMap<>();\nm.put("x", 1);\nm.put("x", 5);\nSystem.out.println(m.get("x"));`, ['5', '1', '6', '[1, 5]'], 'Les clés sont uniques : le deuxième `put` remplace la valeur.'),
        out(`Map<String, Integer> m = new HashMap<>();\nSystem.out.println(m.get("z"));`, ['null', '0', 'Erreur'], '`get` renvoie `null` si la clé n’existe pas.'),
        out(`Map<String, Integer> m = new HashMap<>();\nSystem.out.println(m.getOrDefault("z", 0));`, ['0', 'null', 'z'], '`getOrDefault` renvoie la valeur de secours car la clé n’existe pas.'),
        typ('Vérifie si la map contient la clé "poires"', `if (stock.___("poires")) {\n    System.out.println("Il y a des poires");\n}`, 'containsKey', '`containsKey` renvoie `true` si la clé existe dans la map.'),
        fill(`for (Map.Entry<String, Integer> e : map.___()) {\n    System.out.println(e.getKey() + "=" + e.getValue());\n}`, ['entrySet', 'entries', 'items', 'keySet'], '`entrySet` donne les paires clé-valeur ; `keySet` donnerait seulement les clés.'),
        out(`Map<String, Integer> m = new TreeMap<>();\nm.put("b", 2);\nm.put("a", 1);\nSystem.out.println(m);`, ['{a=1, b=2}', '{b=2, a=1}', '[a, b]', '{1, 2}'], '`TreeMap` trie par clé et s’affiche avec des accolades.'),
        mc('Quelle Map parcourt les clés dans l’ordre où elles ont été ajoutées ?', ['LinkedHashMap', 'HashMap', 'TreeMap', 'SortedMap'], '`HashMap` ne garantit aucun ordre et `TreeMap` trie par clé.'),
        out(`Map<Character, Integer> c = new TreeMap<>();\nfor (char ch : "banana".toCharArray()) {\n    c.merge(ch, 1, Integer::sum);\n}\nSystem.out.println(c);`, ['{a=3, b=1, n=2}', '{b=1, a=3, n=2}', '{a=1, b=1, n=1}', '{a=3, n=2, b=1}'], '`merge` compte chaque lettre : trois a, un b et deux n. Le `TreeMap` les trie par ordre alphabétique.'),
      ],
    },
    // ───────────── Jour 9 ─────────────
    {
      t: 'Conditions',
      d: 'if, else if, else, l’opérateur ternaire et switch.',
      guide: [
        { h: 'if et else', p: [
          '`if (condition) { ... }` exécute le bloc seulement si la condition vaut `true`. La condition doit être un `boolean` : en Java, un nombre ne convient pas.',
          'Une erreur classique est d’écrire `if (x = 5)` : avec un `int`, ça ne compile pas, car `=` affecte au lieu de comparer. Utilise `==`. Et mets toujours des accolades, même si le bloc tient en une ligne.' ],
          code: `int age = 16;\nif (age >= 18) {\n    System.out.println("Tu peux voter");\n} else {\n    System.out.println("Tu ne peux pas encore voter");\n}\n// Tu ne peux pas encore voter` },
        { h: 'else if : plusieurs options', p: [
          'Avec `else if`, tu enchaînes les conditions. Java les vérifie dans l’ordre et n’exécute que la première qui est vraie ; les autres sont ignorées.',
          'C’est pourquoi l’ordre compte : mets d’abord les conditions les plus strictes. Si tu testais `note >= 5` avant `note >= 9`, un 10 sortirait en « Passable ».' ],
          code: `double note = 7.5;\nif (note >= 9) {\n    System.out.println("Excellent");\n} else if (note >= 7) {\n    System.out.println("Bien");\n} else if (note >= 5) {\n    System.out.println("Passable");\n} else {\n    System.out.println("Insuffisant");\n}\n// Bien` },
        { h: 'L’opérateur ternaire', p: [
          '`condition ? valeurSiVrai : valeurSiFaux` renvoie une valeur en une seule ligne. Il est idéal pour choisir entre deux textes ou deux nombres.',
          'Ne l’enchaîne pas trop : trois ternaires à la suite sont difficiles à lire, et un `if` vaut mieux.' ],
          code: `int stock = 0;\nString etat = stock > 0 ? "Disponible" : "Épuisé";\nSystem.out.println(etat);  // Épuisé` },
        { h: 'Le switch classique', p: [
          '`switch` compare une valeur (entier, `char`, `String` ou enum) à plusieurs `case`. `default` récupère tous les autres cas.',
          'Dans le switch classique, si tu oublies `break`, l’exécution « tombe » dans le cas suivant. On s’en sert parfois exprès pour grouper des cas, mais c’est presque toujours un bug. Au jour 25, tu verras le switch moderne avec des flèches, qui n’a pas ce problème.' ],
          code: `String jour = "samedi";\nswitch (jour) {\n    case "samedi":\n    case "dimanche":\n        System.out.println("Week-end");\n        break;\n    default:\n        System.out.println("Jour ouvré");\n}\n// Week-end` },
        { h: 'Exemple réel : le coût d’une livraison', real: true, p: [
          'Une boutique calcule la livraison par tranches de poids et ajoute un supplément pour les îles. Remarque que le texte est comparé avec `equals`, jamais avec `==`.' ],
          code: `double kg = 3.2;\nString zone = "continent";\ndouble cout;\nif (kg <= 1) {\n    cout = 4.50;\n} else if (kg <= 5) {\n    cout = 6.90;\n} else {\n    cout = 6.90 + (kg - 5) * 1.20;\n}\nif (zone.equals("iles")) {\n    cout += 8;\n}\nSystem.out.println("Livraison : " + cout + " €");  // Livraison : 6.9 €` },
      ],
      x: [
        fill(`if (age >= 18) {\n    System.out.println("majeur");\n} ___ {\n    System.out.println("mineur");\n}`, ['else', 'elif', 'otherwise', 'default'], 'Le bloc alternatif s’écrit avec `else`. `elif` appartient à Python.'),
        out(`int x = 10;\nif (x > 5 && x < 20) {\n    System.out.println("dans");\n} else {\n    System.out.println("hors");\n}`, ['dans', 'hors', 'dans\nhors'], '10 remplit les deux conditions réunies par `&&`, et un seul bloc s’exécute.'),
        mc('Si `x` est un `int`, que se passe-t-il avec `if (x = 5)` ?', ['Il ne compile pas : = affecte et la condition doit être un boolean', 'Il compare x à 5', 'Il est toujours vrai', 'Il est toujours faux'], 'Pour comparer, on utilise `==`. Java exige que la condition soit un `boolean`.'),
        out(`int x = 5;\nString r = (x % 2 == 0) ? "pair" : "impair";\nSystem.out.println(r);`, ['impair', 'pair', 'true'], 'Le ternaire choisit "impair" car 5 % 2 vaut 1, pas 0.'),
        ord('Écris l’en-tête du if : « si age est supérieur ou égal à 18 »', ['if', '(', 'age', '>=', '18', ')'], ['=>', 'then'], 'La condition va entre parenthèses et l’opérateur est `>=`. Java n’utilise pas `then`.'),
        out(`int note = 75;\nif (note >= 90) System.out.println("A");\nelse if (note >= 70) System.out.println("B");\nelse System.out.println("C");`, ['B', 'A', 'C', 'B\nC'], '75 n’atteint pas 90 mais atteint 70, et après la première réussite les autres sont ignorés.'),
        out(`int jour = 2;\nswitch (jour) {\n    case 1: System.out.print("L");\n    case 2: System.out.print("Ma");\n    case 3: System.out.print("Me");\n        break;\n    default: System.out.print("?");\n}`, ['MaMe', 'Ma', 'MaMe?', 'LMaMe'], 'Il entre dans `case 2` et, sans `break`, continue dans `case 3` jusqu’à en trouver un.'),
        out(`int age = 70;\nboolean etudiant = false;\ndouble prix = 10;\nif (age < 12 || age >= 65) {\n    prix = prix / 2;\n} else if (etudiant) {\n    prix = prix * 0.8;\n}\nString tarif = prix < 10 ? "réduit" : "normal";\nSystem.out.println(tarif + " " + prix);`, ['réduit 5.0', 'normal 10.0', 'réduit 8.0', 'réduit 5'], '70 remplit `age >= 65`, donc le prix baisse à 5.0 et le else if n’est même pas regardé. Comme c’est un `double`, il s’affiche avec une décimale.'),
      ],
    },
    // ───────────── Jour 10 ─────────────
    {
      t: 'Boucles',
      d: 'for, for-each, while, do-while, break et continue.',
      guide: [
        { h: 'La boucle for', p: [
          '`for (int i = 0; i < n; i++)` a trois parties : le départ, la condition vérifiée avant chaque tour et le pas exécuté à la fin de chaque tour.',
          'Utilise-la quand tu sais combien de fois répéter. L’erreur la plus typique est le « un de trop » : avec `i <= tableau.length`, tu sors du tableau.' ],
          code: `for (int i = 1; i <= 3; i++) {\n    System.out.println("Tour " + i);\n}\n// Tour 1\n// Tour 2\n// Tour 3\n\nfor (int i = 10; i > 0; i -= 5) {\n    System.out.println(i);   // 10 et 5\n}` },
        { h: 'Le for-each', p: [
          '`for (String nom : noms)` parcourt tous les éléments d’un tableau ou d’une collection sans manipuler d’indices. C’est plus court et ça évite de sortir des limites.',
          'Utilise-le chaque fois que tu n’as pas besoin de la position. Si tu en as besoin, ou si tu modifies le tableau par indice, utilise le `for` classique.' ],
          code: `String[] invites = {"Ana", "Luis", "Eva"};\nfor (String nom : invites) {\n    System.out.println("Bonjour, " + nom);\n}` },
        { h: 'while et do-while', p: [
          '`while (condition)` répète tant que la condition est vraie. Utilise-la quand tu ne sais pas combien de tours il y aura, par exemple en lisant des données jusqu’à la fin.',
          '`do { ... } while (condition);` vérifie à la fin, donc s’exécute au moins une fois : pratique pour les menus affichés avant de demander.',
          'Si la condition ne devient jamais fausse, tu as une boucle infinie. Assure-toi que quelque chose dans la boucle la rapproche de sa fin.' ],
          code: `int compte = 3;\nwhile (compte > 0) {\n    System.out.println(compte);\n    compte--;\n}\nSystem.out.println("Décollage !");` },
        { h: 'break, continue et boucles imbriquées', p: [
          '`break` sort de la boucle immédiatement ; `continue` saute le reste du tour en cours et passe au suivant.',
          'Une boucle dans une autre parcourt des combinaisons : lignes et colonnes, chaque produit avec chaque magasin. Les deux compteurs ont besoin de noms différents (`i` et `j`).' ],
          code: `for (int i = 1; i <= 3; i++) {\n    String ligne = "";\n    for (int j = 1; j <= 3; j++) {\n        ligne += i * j + " ";\n    }\n    System.out.println(ligne.trim());\n}\n// 1 2 3\n// 2 4 6\n// 3 6 9` },
        { h: 'Exemple réel : le temps pour faire fructifier une épargne', real: true, p: [
          'Tu as 1000 € sur un compte à 5 % par an et tu veux savoir en combien d’années tu atteins 1200 €. Tu ne sais pas combien de tours il y aura, donc tu utilises `while`.' ],
          code: `double epargne = 1000;\nint annees = 0;\nwhile (epargne < 1200) {\n    epargne = epargne * 1.05;\n    annees++;\n}\nSystem.out.println("Années nécessaires : " + annees);  // Années nécessaires : 4` },
      ],
      x: [
        fill(`___ (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}`, ['for', 'foreach', 'loop', 'while'], 'La boucle avec départ, condition et pas est `for`.'),
        out(`for (int i = 1; i <= 3; i++) {\n    System.out.println(i * 2);\n}`, ['2\n4\n6', '1\n2\n3', '2\n4\n6\n8', '0\n2\n4'], '`i` vaut 1, 2 et 3 ; à chaque fois, le double s’affiche sur une ligne.'),
        out(`int n = 3;\nwhile (n > 0) {\n    System.out.print(n);\n    n--;\n}`, ['321', '3210', '123', '33'], 'On affiche 3, 2 et 1. Quand `n` arrive à 0, la condition échoue et la boucle s’arrête.'),
        out(`int[] nums = {4, 8, 15};\nint somme = 0;\nfor (int n : nums) {\n    somme += n;\n}\nSystem.out.println(somme);`, ['27', '3', '4815', '15'], 'Le for-each parcourt chaque nombre et les additionne : 4 + 8 + 15 = 27.'),
        out(`int i = 0;\ndo {\n    i++;\n} while (i < 0);\nSystem.out.println(i);`, ['1', '0', '-1', 'Boucle infinie'], '`do-while` exécute le bloc une fois avant de vérifier la condition.'),
        out(`for (int i = 0; i < 5; i++) {\n    if (i == 3) break;\n    System.out.print(i);\n}`, ['012', '0123', '01234', '3'], 'Arrivé à 3, `break` sort de la boucle avant d’afficher.'),
        typ('Saute les nombres négatifs et passe au suivant', `for (int n : nums) {\n    if (n < 0) ___;\n    somme += n;\n}`, 'continue', '`continue` termine le tour en cours et passe à l’élément suivant ; `break` sortirait de la boucle.'),
        out(`int total = 0;\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (j == i) continue;\n        total += i * j;\n    }\n}\nSystem.out.println(total);`, ['22', '36', '14', '18'], 'On additionne tous les produits i × j sauf quand i et j sont égaux : 36 au total moins 1 + 4 + 9 = 22.'),
      ],
    },
    // ───────────── Jour 11 ─────────────
    {
      t: 'Méthodes',
      d: 'Types de retour, void, paramètres, surcharge et récursion.',
      guide: [
        { h: 'Qu’est-ce qu’une méthode', p: [
          'Une méthode est un bloc de code nommé que tu peux appeler autant de fois que tu veux. Elle évite de répéter du code et donne à chaque partie du programme une seule tâche.',
          'Son en-tête indique les modificateurs, le type renvoyé, le nom et les paramètres : `static int additionner(int a, int b)`. Pour l’instant, on les déclare `static` pour les appeler directement depuis `main` ; au jour 13, tu verras les méthodes d’objet.' ],
          code: `public class Calculatrice {\n    static int additionner(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        int r = additionner(4, 6);\n        System.out.println(r);                // 10\n        System.out.println(additionner(1, 1)); // 2\n    }\n}` },
        { h: 'return et void', p: [
          '`return` termine la méthode et renvoie une valeur du type déclaré. Si la méthode renvoie un `int`, tous les chemins doivent finir par un `return` avec un entier, sinon ça ne compile pas.',
          'Une méthode `void` ne renvoie rien : elle fait quelque chose (afficher, enregistrer, envoyer) et se termine. Elle peut utiliser `return;` sans valeur pour sortir plus tôt.' ],
          code: `static void saluer(String nom) {\n    if (nom.isEmpty()) {\n        return;               // sort sans rien faire\n    }\n    System.out.println("Bonjour, " + nom);\n}\n\nstatic boolean estPair(int n) {\n    return n % 2 == 0;\n}` },
        { h: 'Passage par valeur', p: [
          'Java passe toujours les arguments par valeur : la méthode reçoit une copie. Si tu changes un paramètre `int` dans la méthode, la variable d’origine ne change pas.',
          'Avec les objets et les tableaux, c’est la référence qui est copiée, pas l’objet. C’est pourquoi la méthode peut modifier le contenu d’un tableau reçu, même si elle ne peut pas faire pointer la variable d’origine ailleurs.' ],
          code: `static void essayerDeChanger(int x) { x = 99; }\nstatic void viderPremier(int[] a) { a[0] = 0; }\n\nint n = 5;\nessayerDeChanger(n);\nSystem.out.println(n);         // 5\n\nint[] donnees = {7, 8};\nviderPremier(donnees);\nSystem.out.println(donnees[0]); // 0` },
        { h: 'Surcharge et varargs', p: [
          'Tu peux avoir plusieurs méthodes du même nom si leurs paramètres diffèrent : c’est la surcharge. Java choisit laquelle appeler d’après les arguments. `System.out.println` est surchargé pour chaque type.',
          'Avec `int... nums` (varargs), une méthode accepte n’importe quel nombre d’arguments, qu’on utilise comme un tableau à l’intérieur.' ],
          code: `static int max(int a, int b) { return a > b ? a : b; }\nstatic double max(double a, double b) { return a > b ? a : b; }\n\nstatic int somme(int... nums) {\n    int total = 0;\n    for (int n : nums) total += n;\n    return total;\n}\n\nSystem.out.println(max(3, 8));          // 8\nSystem.out.println(max(2.5, 1.0));      // 2.5\nSystem.out.println(somme(1, 2, 3, 4));  // 10` },
        { h: 'Récursion', p: [
          'Une méthode récursive s’appelle elle-même avec un problème plus petit. Elle a besoin d’un cas de base qui arrête les appels ; sans lui, la pile se remplit et Java lève `StackOverflowError`.',
          'Elle est naturelle pour les structures qui se répètent en elles-mêmes, comme des dossiers avec sous-dossiers. Pour des calculs simples, une boucle est souvent plus efficace.' ],
          code: `static int factorielle(int n) {\n    if (n <= 1) return 1;            // cas de base\n    return n * factorielle(n - 1);   // cas récursif\n}\n\nSystem.out.println(factorielle(5));  // 120` },
        { h: 'Exemple réel : le prix final d’une commande', real: true, p: [
          'Une boutique applique une remise puis la TVA. Séparer chaque étape dans une méthode bien nommée fait que le calcul se lit comme une phrase et peut être réutilisé.' ],
          code: `static double appliquerRemise(double prix, int pourcentage) {\n    return prix - prix * pourcentage / 100;\n}\n\nstatic double arrondir(double valeur) {\n    return Math.round(valeur * 100) / 100.0;\n}\n\ndouble remise = appliquerRemise(80.0, 15);\nSystem.out.println(remise);                   // 68.0\nSystem.out.println(arrondir(remise * 1.21));  // 82.28` },
      ],
      x: [
        fill(`public static ___ additionner(int a, int b) {\n    return a + b;\n}`, ['int', 'void', 'return', 'function'], 'La méthode renvoie la somme de deux entiers, donc son type de retour est `int`.'),
        mc('Que signifie `void` dans l’en-tête d’une méthode ?', ['Qu’elle ne renvoie aucune valeur', 'Qu’elle ne reçoit aucun paramètre', 'Qu’elle est privée', 'Qu’elle est statique'], '`void` indique que la méthode n’a pas de valeur de retour.'),
        typ('Complète la méthode pour qu’elle renvoie le double', `static int fois2(int n) {\n    ___ n * 2;\n}`, 'return', '`return` renvoie la valeur et termine la méthode.'),
        out(`static int carre(int n) {\n    return n * n;\n}\n\nSystem.out.println(carre(carre(2)));`, ['16', '8', '4', '2'], 'D’abord `carre(2)` donne 4, puis `carre(4)` donne 16.'),
        mc('`int max(int a, int b)` et `double max(double a, double b)` dans la même classe, c’est...', ['De la surcharge de méthodes', 'Une erreur de compilation', 'De l’héritage', 'De la redéfinition'], 'Même nom, paramètres différents : Java choisit laquelle utiliser selon le type des arguments.'),
        out(`static void changer(int x) { x = 99; }\n\nint n = 1;\nchanger(n);\nSystem.out.println(n);`, ['1', '99', '0', 'Erreur'], 'Java passe les primitifs par valeur : la méthode modifie une copie.'),
        out(`static void doubler(int[] a) { a[0] *= 2; }\n\nint[] v = {5, 1};\ndoubler(v);\nSystem.out.println(v[0]);`, ['10', '5', '0', 'Erreur'], 'La référence au tableau est copiée, donc la méthode modifie le même tableau que voit `main`.'),
        out(`static int somme(int... nums) {\n    int t = 0;\n    for (int n : nums) t += n;\n    return t;\n}\nstatic int fact(int n) {\n    return n <= 1 ? 1 : n * fact(n - 1);\n}\n\nSystem.out.println(somme(1, 2, 3) + fact(4));`, ['30', '10', '33', '624'], '`somme(1, 2, 3)` donne 6 et `fact(4)` donne 4 × 3 × 2 × 1 = 24. Les deux sont des `int`, donc ils s’additionnent : 30.'),
      ],
    },
    // ───────────── Jour 12 ─────────────
    {
      t: 'Paquetages et imports',
      d: 'package, import, java.lang et modificateurs d’accès.',
      guide: [
        { h: 'Paquetages', p: [
          'Un paquetage (package) regroupe des classes liées, comme un dossier regroupe des fichiers. D’ailleurs, chaque paquetage correspond à un dossier : `com.boutique.modele` vit dans `com/boutique/modele/`.',
          'Par convention, on utilise le domaine de l’entreprise à l’envers (`com.entreprise.projet`), tout en minuscules. Ainsi, deux bibliothèques différentes peuvent avoir une classe `Utilisateur` sans conflit.',
          'La ligne `package` va en premier dans le fichier ; seuls des commentaires peuvent la précéder.' ],
          code: `// Fichier : src/com/boutique/modele/Produit.java\npackage com.boutique.modele;\n\npublic class Produit {\n    // ...\n}` },
        { h: 'import', p: [
          'Pour utiliser une classe d’un autre paquetage, tu l’importes : `import java.util.List;`. Le joker `import java.util.*;` importe toutes les classes de ce paquetage, mais pas ses sous-paquetages.',
          'Le paquetage `java.lang` s’importe tout seul : c’est pourquoi tu utilises `String`, `Math`, `Integer` ou `System` sans rien écrire. Avec `import static`, tu peux utiliser des membres statiques sans le nom de la classe.' ],
          code: `import java.util.ArrayList;\nimport java.util.List;\nimport java.time.LocalDate;\nimport static java.lang.Math.PI;\n\ndouble aire = PI * 2 * 2;   // sans écrire Math.PI` },
        { h: 'Modificateurs d’accès', p: [
          '`public` : visible depuis n’importe quelle classe. `protected` : depuis le même paquetage et depuis les sous-classes. Sans modificateur (package-private) : seulement depuis le même paquetage. `private` : seulement dans la classe elle-même.',
          'La règle pratique : commence par le plus restrictif (`private`) et n’ouvre que ce dont les autres classes ont vraiment besoin. Moins tu exposes, moins de choses peuvent casser quand tu changes le code.' ] },
        { h: 'La bibliothèque standard', p: [
          'Java fournit des milliers de classes prêtes à l’emploi. Celles que tu importeras le plus : `java.util` (collections, `Scanner`, `Random`), `java.time` (dates), `java.nio.file` (fichiers) et `java.util.stream` (streams).',
          '`Scanner` lit ce que l’utilisateur tape dans la console, et `Random` génère des nombres aléatoires.' ],
          code: `import java.util.Random;\nimport java.util.Scanner;\n\nScanner clavier = new Scanner(System.in);\nSystem.out.print("Comment t'appelles-tu ? ");\nString nom = clavier.nextLine();\n\nRandom hasard = new Random();\nint de = hasard.nextInt(6) + 1;   // de 1 à 6\nSystem.out.println(nom + " a fait un " + de);` },
        { h: 'Exemple réel : organiser le projet d’une boutique', real: true, p: [
          'Dans un vrai projet, chaque couche va dans son paquetage : le modèle de données dans l’un et l’application dans l’autre. Les modificateurs décident ce que chaque partie peut utiliser.' ],
          code: `// Fichier : src/com/boutique/modele/Produit.java\npackage com.boutique.modele;\n\npublic class Produit {\n    public String nom;\n    double prix;   // package-private : seulement com.boutique.modele\n}\n\n// Fichier : src/com/boutique/app/Main.java\npackage com.boutique.app;\n\nimport com.boutique.modele.Produit;\n\npublic class Main {\n    public static void main(String[] args) {\n        Produit p = new Produit();\n        p.nom = "Clavier";   // public : autorisé\n        // p.prix = 25;      // erreur : pas visible depuis un autre paquetage\n    }\n}` },
      ],
      x: [
        fill(`___ java.util.Scanner;`, ['import', 'include', 'using', 'require'], '`import` fait venir des classes d’autres paquetages. `include` est du C et `using` du C#.'),
        mc('Quel paquetage est importé automatiquement dans tout programme Java ?', ['java.lang', 'java.util', 'java.io', 'java.main'], 'C’est pourquoi tu peux utiliser `String`, `Math` ou `System` sans les importer.'),
        mc('Où s’écrit la déclaration `package` ?', ['Sur la première ligne du fichier', 'À la fin du fichier', 'Dans la méthode main', 'N’importe où'], 'Seuls des commentaires peuvent la précéder.'),
        out(`System.out.println(Math.max(3, 8) + Math.abs(-2));`, ['10', '6', '11', '5'], '`Math.max(3, 8)` vaut 8 et `Math.abs(-2)` vaut 2. `Math` est dans `java.lang`, inutile de l’importer.'),
        ord('Écris l’import de la classe Scanner', ['import', 'java', '.', 'util', '.', 'Scanner', ';'], ['include', '#'], '`Scanner` est dans le paquetage `java.util` et la ligne se termine par `;`.'),
        mc('Un attribut sans modificateur d’accès est visible...', ['Seulement depuis son propre paquetage', 'Depuis n’importe quelle classe', 'Seulement dans sa classe', 'Seulement depuis les sous-classes'], 'C’est l’accès package-private, celui par défaut.'),
        mc('Qu’importe `import java.util.*;` ?', ['Toutes les classes du paquetage java.util, sans ses sous-paquetages', 'Tous les paquetages de Java', 'java.util et aussi java.util.function', 'Rien, c’est une erreur'], 'Le joker n’inclut pas les sous-paquetages comme `java.util.function`, qui s’importent à part.'),
        mc('`Panneau` est dans un autre paquetage et n’hérite pas de `Compte`. Quelle ligne compile dans `Panneau` ?', ['c.titulaire = "Ana";', 'c.solde = 100;', 'c.numero = 7;', 'c.pin = "1234";'], 'Depuis un autre paquetage et sans héritage, seul ce qui est `public` est visible. `protected` exige d’être une sous-classe, l’accès par défaut exige le même paquetage et `private` ne vaut que dans `Compte`.', `package com.app.modele;\n\npublic class Compte {\n    public String titulaire;\n    protected double solde;\n    int numero;\n    private String pin;\n}\n\n// Dans com.app.web.Panneau :\nCompte c = new Compte();`),
      ],
    },
    // ───────────── Jour 13 ─────────────
    {
      t: 'Classes et objets',
      d: 'Attributs, méthodes, constructeurs, new et this.',
      guide: [
        { h: 'Classes et objets', p: [
          'Une classe est un moule : elle décrit quelles données a une chose (attributs) et ce qu’elle sait faire (méthodes). Un objet est une instance concrète de ce moule, créée avec `new`.',
          'La classe `Voiture` dit que toute voiture a une marque et une vitesse ; ta voiture et celle de ta voisine sont deux objets différents, chacun avec ses valeurs.',
          'Penser en objets aide à modéliser le monde réel : une commande, un utilisateur, une facture. Chacun garde ses données et les opérations qui les utilisent.' ],
          code: `class Voiture {\n    String marque;\n    int vitesse;\n\n    void accelerer(int kmh) {\n        vitesse += kmh;\n    }\n}\n\nVoiture v = new Voiture();\nv.marque = "Seat";\nv.accelerer(50);\nSystem.out.println(v.marque + " à " + v.vitesse);  // Seat à 50` },
        { h: 'Constructeurs', p: [
          'Le constructeur prépare l’objet à sa création. Il porte le même nom que la classe et ne déclare pas de type de retour, pas même `void`.',
          'Si tu n’en écris aucun, Java en crée un vide. Mais si tu en écris un avec des paramètres, le vide disparaît : `new Voiture()` ne compilerait plus.',
          'Tu peux avoir plusieurs constructeurs (surcharge), et l’un peut appeler l’autre avec `this(...)`.' ],
          code: `class Voiture {\n    String marque;\n    int vitesse;\n\n    Voiture(String marque) {\n        this(marque, 0);           // appelle l'autre constructeur\n    }\n\n    Voiture(String marque, int vitesse) {\n        this.marque = marque;\n        this.vitesse = vitesse;\n    }\n}` },
        { h: 'this', p: [
          '`this` est une référence à l’objet courant. On s’en sert surtout pour distinguer un attribut d’un paramètre du même nom : `this.marque = marque;`.',
          'Si tu oublies `this` dans ce cas, tu affectes le paramètre à lui-même et l’attribut reste à `null`. Le code compile, mais il ne fait pas ce que tu voulais.' ] },
        { h: 'Références et null', p: [
          'Une variable de type objet ne garde pas l’objet, elle garde une référence vers lui. Si tu écris `Voiture b = a;`, les deux variables pointent vers la même voiture.',
          'Une référence qui ne pointe vers rien vaut `null`. Appeler une méthode sur `null` lève `NullPointerException`, l’erreur la plus célèbre de Java.' ],
          code: `Voiture a = new Voiture("Seat");\nVoiture b = a;          // même objet\nb.vitesse = 120;\nSystem.out.println(a.vitesse);  // 120\n\nVoiture c = null;\n// c.accelerer(10);     // NullPointerException` },
        { h: 'Exemple réel : les lignes d’une commande', real: true, p: [
          'Chaque ligne d’une commande en ligne a un produit, un prix et une quantité, et sait calculer son sous-total. L’objet regroupe les données et l’opération qui les utilise.' ],
          code: `class LigneCommande {\n    String produit;\n    double prix;\n    int quantite;\n\n    LigneCommande(String produit, double prix, int quantite) {\n        this.produit = produit;\n        this.prix = prix;\n        this.quantite = quantite;\n    }\n\n    double sousTotal() {\n        return prix * quantite;\n    }\n}\n\nLigneCommande a = new LigneCommande("T-shirt", 12.5, 2);\nLigneCommande b = new LigneCommande("Casquette", 9.0, 1);\nSystem.out.println(a.sousTotal() + b.sousTotal());  // 34.0` },
      ],
      x: [
        mc('Qu’est-ce qu’un objet ?', ['Une instance concrète créée à partir d’une classe', 'Un type primitif', 'Une méthode statique', 'Un paquetage'], 'La classe est le moule ; l’objet, ce qui en sort avec `new`.'),
        fill(`public class Voiture {\n    private String marque;\n\n    public ___(String marque) {\n        this.marque = marque;\n    }\n}`, ['Voiture', 'constructor', 'void Voiture', 'new'], 'Le constructeur porte le même nom que la classe et n’a pas de type de retour.'),
        ord('Crée un objet Voiture de marque Seat', ['Voiture', 'v', '=', 'new', 'Voiture', '(', '"Seat"', ')', ';'], ['create', 'make'], '`new` crée l’objet et appelle le constructeur avec les arguments.'),
        mc('Dans une méthode, qu’est-ce que `this` ?', ['Une référence à l’objet courant', 'La classe parente', 'Une méthode statique', 'Le paquetage courant'], '`this.marque` est l’attribut de l’objet ; `marque` tout seul serait le paramètre.'),
        out(`class Point {\n    int x, y;\n    Point(int x, int y) { this.x = x; this.y = y; }\n}\n\nPoint p = new Point(2, 3);\nSystem.out.println(p.x + p.y);`, ['5', '23', '2', 'Erreur'], 'Le constructeur range 2 et 3 dans les attributs ; ce sont des `int`, donc ils s’additionnent : 5.'),
        out(`class C { int v = 1; }\n\nC a = new C();\nC b = a;\nb.v = 7;\nSystem.out.println(a.v);`, ['7', '1', '0', 'Erreur'], '`a` et `b` pointent vers le même objet : le modifier par l’une se voit par l’autre.'),
        mc('Que se passe-t-il quand ce code s’exécute ?', ['NullPointerException est levée', 'Il affiche null', 'Il affiche une chaîne vide', 'Il ne compile pas'], 'La variable ne pointe vers aucun objet, donc on ne peut pas appeler ses méthodes. Ça compile, mais ça échoue à l’exécution.', `Voiture v = null;\nSystem.out.println(v.getMarque());`),
        out(`class Compteur {\n    int valeur;\n    Compteur() { this(10); }\n    Compteur(int debut) { valeur = debut; }\n    void ajouter() { valeur++; }\n}\n\nCompteur a = new Compteur();\nCompteur b = new Compteur(3);\nCompteur c = a;\nc.ajouter();\nb.ajouter();\nSystem.out.println(a.valeur + " " + b.valeur);`, ['11 4', '10 4', '11 3', '10 3'], 'Le constructeur vide appelle `this(10)`. `c` pointe vers le même objet que `a`, donc `a` arrive à 11 ; `b` passe de 3 à 4.'),
      ],
    },
    // ───────────── Jour 14 ─────────────
    {
      t: 'Encapsulation',
      d: 'private, getters, setters avec validation, static et final.',
      guide: [
        { h: 'Pourquoi encapsuler', p: [
          'Si n’importe qui peut écrire `compte.solde = -500;`, ton programme aura des comptes impossibles. Encapsuler, c’est cacher l’état interne avec `private` et ne permettre de le modifier qu’à travers des méthodes qui vérifient les règles.',
          'Ainsi, la classe se protège elle-même : peu importe qui l’utilise, elle ne sera jamais dans un état invalide. Et tu peux changer son fonctionnement interne sans casser ceux qui l’utilisent.' ] },
        { h: 'Getters et setters', p: [
          'Un getter renvoie un attribut privé (`getNom()`, ou `isActif()` pour un `boolean`). Un setter le modifie (`setAge(int age)`) et c’est l’endroit idéal pour valider.',
          'Ne crée pas de setters par habitude : si une donnée ne doit pas changer après la création de l’objet, ne lui en donne pas.' ],
          code: `public class Eleve {\n    private String nom;\n    private int age;\n\n    public String getNom() { return nom; }\n\n    public void setAge(int age) {\n        if (age < 0) {\n            throw new IllegalArgumentException("Âge négatif");\n        }\n        this.age = age;\n    }\n}` },
        { h: 'static : de la classe, pas de l’objet', p: [
          'Un attribut `static` existe une seule fois, dans la classe, et tous les objets le partagent. Il sert pour des compteurs globaux ou une configuration commune.',
          'Une méthode `static` s’appelle avec le nom de la classe (`Math.max(3, 8)`) et ne peut pas utiliser d’attributs d’instance, car elle n’appartient à aucun objet précis.' ],
          code: `class Utilisateur {\n    static int total = 0;   // partagé\n    String nom;             // un par objet\n\n    Utilisateur(String nom) {\n        this.nom = nom;\n        total++;\n    }\n}\n\nnew Utilisateur("Ana");\nnew Utilisateur("Luis");\nSystem.out.println(Utilisateur.total);  // 2` },
        { h: 'final et objets immuables', p: [
          'Un attribut `final` s’affecte une fois (à la déclaration ou dans le constructeur) et ne change plus. Si tous les attributs sont `private final` et qu’il n’y a pas de setters, l’objet est immuable, comme `String`.',
          'Les objets immuables sont plus faciles à comprendre et sûrs entre threads. Les constantes se déclarent `static final` et en MAJUSCULES : `static final int MAX_ESSAIS = 3;`.' ] },
        { h: 'Exemple réel : un compte bancaire sûr', real: true, p: [
          'Le solde est privé et ne change qu’avec `deposer` et `retirer`, qui refusent les montants invalides. L’IBAN est `final` : un compte ne change pas de numéro.' ],
          code: `public class CompteBancaire {\n    private final String iban;\n    private double solde;\n\n    public CompteBancaire(String iban) {\n        this.iban = iban;\n    }\n\n    public void deposer(double montant) {\n        if (montant > 0) solde += montant;\n    }\n\n    public boolean retirer(double montant) {\n        if (montant <= 0 || montant > solde) return false;\n        solde -= montant;\n        return true;\n    }\n\n    public double getSolde() { return solde; }\n}\n\nCompteBancaire c = new CompteBancaire("FR76 3456");\nc.deposer(100);\nSystem.out.println(c.retirer(150));  // false\nSystem.out.println(c.retirer(40));   // true\nSystem.out.println(c.getSolde());    // 60.0` },
      ],
      x: [
        mc('À quoi sert `private` sur un attribut ?', ['À ce qu’il ne soit accessible que dans sa classe', 'À empêcher de créer des objets', 'À le rendre constant', 'À le partager entre objets'], 'Depuis l’extérieur, on n’y accède qu’à travers les méthodes publiques que la classe choisit d’offrir.'),
        typ('Écris le modificateur qui cache l’attribut hors de la classe', `public class Compte {\n    ___ double solde;\n}`, 'private', '`private` limite l’accès à la classe elle-même.'),
        fill(`public String ___() {\n    return nom;\n}`, ['getNom', 'nom', 'get', 'Nom'], 'Par convention, les getters s’appellent `get` suivi du nom de l’attribut avec une majuscule.'),
        mc('Que fait `final` sur un attribut ?', ['Il empêche de changer sa valeur après l’affectation', 'Il le rend privé', 'Il le partage entre objets', 'Il l’efface à la fin du programme'], 'On l’utilise pour les constantes et les objets immuables.'),
        mc('Que signifie qu’un attribut soit `static` ?', ['Il appartient à la classe et toutes les instances le partagent', 'Sa valeur ne peut pas changer', 'Il n’est visible que dans la classe', 'Il est effacé à la sortie de la méthode'], 'Il existe une seule fois, dans la classe, et non une fois par objet.'),
        out(`class Ticket {\n    static int emis = 0;\n    Ticket() { emis++; }\n}\n\nnew Ticket();\nnew Ticket();\nnew Ticket();\nSystem.out.println(Ticket.emis);`, ['3', '1', '0', 'Erreur'], 'Les trois objets partagent le même compteur `static`, et chaque constructeur l’incrémente.'),
        mc('Pourquoi valider dans un setter ?', ['Pour empêcher les états invalides, comme un âge négatif', 'Pour que le code soit plus rapide', 'Parce que Java l’exige', 'Pour pouvoir hériter de l’attribut'], 'La classe protège ses propres règles, quel que soit l’utilisateur.'),
        out(`class Thermostat {\n    private int degres = 20;\n    private static final int MAX = 30;\n    void monter(int n) {\n        if (degres + n <= MAX) degres += n;\n    }\n    int getDegres() { return degres; }\n}\n\nThermostat t = new Thermostat();\nt.monter(5);\nt.monter(8);\nt.monter(5);\nSystem.out.println(t.getDegres());`, ['30', '38', '25', '33'], '20 + 5 = 25. Monter de 8 donnerait 33 et dépasse le maximum, donc c’est ignoré. 25 + 5 = 30 est autorisé.'),
      ],
    },
    // ───────────── Jour 15 ─────────────
    {
      t: 'Héritage',
      d: 'extends, super, @Override et la classe Object.',
      guide: [
        { h: 'extends : hériter d’une autre classe', p: [
          'Avec `extends`, une classe fille hérite des attributs et méthodes d’une classe mère et peut ajouter les siens. Ainsi, tu ne répètes pas le code commun.',
          'L’héritage exprime une relation « est un » : un `Chien` est un `Animal`. Si la relation est « a un » (une voiture a un moteur), utilise un attribut plutôt que l’héritage.',
          'Java ne permet d’hériter que d’une seule classe. Pour combiner des comportements de plusieurs sources, il y a les interfaces (jour 16).' ],
          code: `class Animal {\n    protected String nom;\n\n    Animal(String nom) { this.nom = nom; }\n\n    String manger() { return nom + " mange"; }\n}\n\nclass Chien extends Animal {\n    Chien(String nom) { super(nom); }\n\n    String aboyer() { return nom + " : ouaf !"; }\n}\n\nChien c = new Chien("Toby");\nSystem.out.println(c.manger());  // Toby mange\nSystem.out.println(c.aboyer());  // Toby : ouaf !` },
        { h: 'super', p: [
          '`super(...)` appelle le constructeur de la mère et doit être la première ligne du constructeur de la fille. Si la mère n’a pas de constructeur vide, tu es obligé de l’appeler.',
          'Avant d’exécuter le constructeur de la fille, la partie de la mère est toujours construite. `super.methode()` appelle la version de la mère d’une méthode.' ] },
        { h: 'Redéfinir des méthodes avec @Override', p: [
          'Une classe fille peut redéfinir une méthode de la mère avec la même signature : c’est la redéfinition. Mets toujours `@Override` au-dessus : si tu te trompes de nom ou de paramètres, le compilateur te prévient.',
          'Sans `@Override`, une faute de frappe créerait une nouvelle méthode en silence et celle de la mère continuerait de s’exécuter.' ],
          code: `class Animal {\n    String cri() { return "..."; }\n}\n\nclass Chat extends Animal {\n    @Override\n    String cri() { return "Miaou"; }\n}\n\nSystem.out.println(new Chat().cri());  // Miaou` },
        { h: 'La classe Object', p: [
          'Toutes les classes héritent, directement ou non, de `Object`. C’est de là que viennent `toString()`, `equals()` et `hashCode()`.',
          'Le `toString()` par défaut affiche quelque chose comme `Livre@1b6d3586`. Redéfinis-le pour que tes objets se lisent bien dans les logs et au débogage.' ],
          code: `class Livre {\n    String titre = "Dune";\n\n    @Override\n    public String toString() {\n        return "Livre : " + titre;\n    }\n}\n\nSystem.out.println(new Livre());  // Livre : Dune` },
        { h: 'Exemple réel : la paie des employés et des managers', real: true, p: [
          'Tous les employés touchent leur salaire annuel en 12 mensualités ; les managers reçoivent en plus une prime mensuelle. Le manager réutilise le calcul de la mère avec `super` et ajoute la prime.' ],
          code: `class Employe {\n    protected String nom;\n    protected double salaireAnnuel;\n\n    Employe(String nom, double salaireAnnuel) {\n        this.nom = nom;\n        this.salaireAnnuel = salaireAnnuel;\n    }\n\n    double salaireMensuel() { return salaireAnnuel / 12; }\n}\n\nclass Manager extends Employe {\n    private double prime;\n\n    Manager(String nom, double salaireAnnuel, double prime) {\n        super(nom, salaireAnnuel);\n        this.prime = prime;\n    }\n\n    @Override\n    double salaireMensuel() { return super.salaireMensuel() + prime; }\n}\n\nSystem.out.println(new Employe("Ana", 30000).salaireMensuel());      // 2500.0\nSystem.out.println(new Manager("Luis", 48000, 500).salaireMensuel()); // 4500.0` },
      ],
      x: [
        fill(`class Chien ___ Animal {\n}`, ['extends', 'implements', 'inherits', ':'], 'En Java, on hérite d’une classe avec `extends`. Les deux-points viennent du C++ et du C#.'),
        mc('De combien de classes une classe Java peut-elle hériter directement ?', ['D’une seule', 'De deux', 'D’autant qu’elle veut', 'D’aucune'], 'Java n’a pas d’héritage multiple de classes ; c’est le rôle des interfaces.'),
        out(`class A { String salut() { return "A"; } }\nclass B extends A { }\n\nSystem.out.println(new B().salut());`, ['A', 'B', 'null', 'Erreur'], 'B ne définit pas `salut`, donc il utilise celle héritée de A.'),
        mc('Que fait `super(nom)` dans un constructeur ?', ['Il appelle le constructeur de la classe mère', 'Il crée une copie de l’objet', 'Il rappelle le même constructeur', 'Il supprime l’objet parent'], 'Ce doit être la première instruction du constructeur de la fille.'),
        out(`class A { A() { System.out.print("A"); } }\nclass B extends A { B() { System.out.print("B"); } }\n\nnew B();`, ['AB', 'BA', 'B', 'A'], 'Avant d’exécuter le constructeur de la fille, la partie de la mère est construite.'),
        mc('À quoi sert `@Override` ?', ['Il indique que la méthode redéfinit une méthode de la mère, et le compilateur le vérifie', 'Il crée une nouvelle méthode', 'Il rend la méthode statique', 'Il empêche d’hériter de la méthode'], 'Si la signature ne correspond à aucune méthode de la mère, le code ne compile pas.'),
        out(`class Livre {\n    String titre = "Dune";\n    @Override\n    public String toString() { return "Livre : " + titre; }\n}\n\nSystem.out.println(new Livre());`, ['Livre : Dune', 'Dune', 'Livre@1b6d3586', 'null'], '`println` appelle `toString()`, qui est redéfini ici.'),
        out(`class Vehicule {\n    String info() { return "Véhicule"; }\n    String decrire() { return "Je suis " + info(); }\n}\nclass Moto extends Vehicule {\n    @Override\n    String info() { return "Moto, " + super.info(); }\n}\n\nSystem.out.println(new Moto().decrire());`, ['Je suis Moto, Véhicule', 'Je suis Véhicule', 'Je suis Moto', 'Moto, Je suis Véhicule'], '`decrire` est héritée, mais elle appelle `info()` de l’objet réel, qui est une Moto. Sa version ajoute "Moto, " et utilise `super.info()`.'),
      ],
    },
    // ───────────── Jour 16 ─────────────
    {
      t: 'Polymorphisme et interfaces',
      d: 'interface, implements, classes abstraites et méthodes default.',
      guide: [
        { h: 'Interfaces : un contrat', p: [
          'Une interface déclare quelles méthodes une classe doit avoir, sans dire comment elles fonctionnent. La classe la respecte avec `implements` et écrit ces méthodes.',
          'Une classe n’hérite que d’une classe, mais peut implémenter plusieurs interfaces : `class Canard implements Volant, Nageur`.',
          'Les méthodes d’une interface sont publiques, donc en les implémentant tu dois les marquer `public`.' ],
          code: `interface Volant {\n    void voler();\n}\n\nclass Canard implements Volant {\n    public void voler() { System.out.println("Le canard bat des ailes"); }\n}\n\nclass Avion implements Volant {\n    public void voler() { System.out.println("L'avion décolle"); }\n}` },
        { h: 'Polymorphisme', p: [
          'Une variable de type interface (ou de classe mère) peut contenir n’importe quel objet qui la respecte. Quand on appelle une méthode, c’est la version de la classe réelle de l’objet qui s’exécute, pas celle du type de la variable.',
          'Ainsi, tu écris du code général (`for (Volant v : volants) v.voler();`) qui fonctionne avec des classes qui n’existent pas encore. Ajouter un `Drone` ne t’oblige pas à toucher cette boucle.' ],
          code: `List<Volant> volants = List.of(new Canard(), new Avion());\nfor (Volant v : volants) {\n    v.voler();\n}\n// Le canard bat des ailes\n// L'avion décolle` },
        { h: 'Classes abstraites', p: [
          'Une classe `abstract` ne peut pas être instanciée. Elle peut avoir des méthodes abstraites (sans corps) que les filles doivent écrire et des méthodes normales dont elles héritent.',
          'Interface ou classe abstraite ? Utilise une interface pour décrire une capacité (« peut être payé », « peut être trié »). Utilise une classe abstraite quand les filles partagent un état (attributs) ou un constructeur.' ],
          code: `abstract class Figure {\n    abstract double aire();\n\n    String decrire() {\n        return "Aire : " + aire();\n    }\n}\n\nclass Cercle extends Figure {\n    double r;\n    Cercle(double r) { this.r = r; }\n    double aire() { return Math.PI * r * r; }\n}` },
        { h: 'Méthodes default et instanceof', p: [
          'Depuis Java 8, une interface peut apporter des méthodes `default` avec une implémentation par défaut. Les classes en héritent et peuvent les redéfinir.',
          'Avec `instanceof`, tu vérifies le type réel d’un objet. Depuis Java 16, tu peux déclarer la variable dans la même vérification : `if (f instanceof Cercle c)`.' ],
          code: `Figure f = new Cercle(1);\nif (f instanceof Cercle c) {\n    System.out.println("Rayon : " + c.r);  // Rayon : 1.0\n}` },
        { h: 'Exemple réel : les moyens de paiement d’une boutique', real: true, p: [
          'Une boutique accepte la carte et le virement, et chaque moyen prend une commission différente. La caisse travaille avec l’interface `MoyenPaiement` et n’a pas besoin de savoir lequel est lequel.' ],
          code: `interface MoyenPaiement {\n    double commission(double montant);\n\n    default double total(double montant) {\n        return montant + commission(montant);\n    }\n}\n\nclass Carte implements MoyenPaiement {\n    public double commission(double montant) { return montant * 0.02; }\n}\n\nclass Virement implements MoyenPaiement {\n    public double commission(double montant) { return 0.50; }\n}\n\nfor (MoyenPaiement m : List.of(new Carte(), new Virement())) {\n    System.out.println(m.total(100));\n}\n// 102.0\n// 100.5` },
      ],
      x: [
        fill(`interface Volant {\n    void voler();\n}\n\nclass Oiseau ___ Volant {\n    public void voler() { }\n}`, ['implements', 'extends', 'uses', 'with'], 'Les classes respectent les interfaces avec `implements` ; `extends` sert à hériter de classes.'),
        mc('Qu’est-ce que le polymorphisme ?', ['Utiliser des objets de classes différentes à travers un type commun', 'Avoir beaucoup de constructeurs', 'Copier des objets', 'Hériter de plusieurs classes'], 'Le même code fonctionne avec des implémentations différentes.'),
        out(`class Animal {\n    String cri() { return "..."; }\n}\nclass Chat extends Animal {\n    @Override\n    String cri() { return "Miaou"; }\n}\n\nAnimal a = new Chat();\nSystem.out.println(a.cri());`, ['Miaou', '...', 'null', 'Erreur'], 'Même si la variable est un `Animal`, l’objet est un `Chat` et c’est sa méthode qui s’exécute.'),
        fill(`___ class Figure {\n    abstract double aire();\n}`, ['abstract', 'interface', 'virtual', 'static'], 'Une classe avec des méthodes abstraites doit être `abstract`.'),
        mc('Si `Figure` est abstraite, que se passe-t-il avec `Figure f = new Figure();` ?', ['Ça ne compile pas : une classe abstraite ne peut pas être instanciée', 'Ça crée une figure vide', 'Ça lève une exception à l’exécution', 'Ça crée un objet de la première sous-classe'], 'Tu ne peux créer que des objets de ses sous-classes concrètes.'),
        mc('Que peut avoir une classe abstraite qu’une interface ne peut pas avoir ?', ['Des attributs d’instance et des constructeurs', 'Des méthodes publiques', 'Des constantes', 'Des méthodes default'], 'Les interfaces ne gardent pas d’état propre à chaque objet.'),
        out(`interface Salut {\n    default String bonjour() { return "salut"; }\n}\nclass S implements Salut { }\n\nSystem.out.println(new S().bonjour());`, ['salut', 'null', 'Erreur de compilation', 'S'], 'Les méthodes `default` donnent une implémentation dont la classe hérite sans rien écrire.'),
        out(`interface Forme { double aire(); }\n\nclass Carre implements Forme {\n    double cote;\n    Carre(double cote) { this.cote = cote; }\n    public double aire() { return cote * cote; }\n}\nclass Rectangle implements Forme {\n    double b, h;\n    Rectangle(double b, double h) { this.b = b; this.h = h; }\n    public double aire() { return b * h; }\n}\n\ndouble total = 0;\nfor (Forme f : List.of(new Carre(3), new Rectangle(2, 5))) {\n    total += f.aire();\n}\nSystem.out.println(total);`, ['19.0', '19', '14.0', 'Erreur'], 'Chaque objet utilise sa propre `aire()` : 3 × 3 = 9 et 2 × 5 = 10. Ce sont des `double`, donc on affiche 19.0.'),
      ],
    },
    // ───────────── Jour 17 ─────────────
    {
      t: 'Exceptions',
      d: 'try, catch, finally, throw et checked face à unchecked.',
      guide: [
        { h: 'Qu’est-ce qu’une exception', p: [
          'Une exception est un objet que Java lève quand quelque chose tourne mal : diviser par zéro, lire un fichier inexistant, transformer "abc" en nombre. Si personne ne la capture, le programme s’arrête et affiche la pile d’appels (stack trace).',
          'La stack trace n’est pas ton ennemie : la première ligne donne le type d’erreur et le message, et les suivantes, à quelle ligne de quel fichier c’est arrivé. Lis-la de haut en bas.' ] },
        { h: 'try, catch et finally', p: [
          '`try` entoure le code qui peut échouer et `catch` capture un type précis d’exception. Tu peux mettre plusieurs `catch`, du plus spécifique au plus général, ou réunir des types avec `|`.',
          '`finally` s’exécute toujours, erreur ou pas : c’est l’endroit pour fermer des connexions ou libérer des ressources. Ne laisse jamais un `catch` vide : il cache l’erreur et tu ne sauras plus ce qui s’est passé.' ],
          code: `try {\n    int n = Integer.parseInt("42a");\n    System.out.println(n);\n} catch (NumberFormatException e) {\n    System.out.println("Format invalide : " + e.getMessage());\n} finally {\n    System.out.println("Fin");\n}\n// Format invalide : For input string: "42a"\n// Fin` },
        { h: 'Checked et unchecked', p: [
          'Les exceptions checked (comme `IOException`) représentent des problèmes externes prévisibles. Le compilateur t’oblige à les capturer ou à les déclarer dans la méthode avec `throws`.',
          'Les unchecked héritent de `RuntimeException` (comme `NullPointerException` ou `IllegalArgumentException`) et signalent souvent un bug de programmation. Les capturer n’est pas obligatoire : mieux vaut les éviter.' ],
          code: `// checked : à déclarer ou à capturer\nstatic String lire(Path chemin) throws IOException {\n    return Files.readString(chemin);\n}\n\n// unchecked : signale une mauvaise utilisation\nstatic double racine(double x) {\n    if (x < 0) throw new IllegalArgumentException("x négatif");\n    return Math.sqrt(x);\n}` },
        { h: 'throw et exceptions personnalisées', p: [
          '`throw new Type("message")` lève une exception. Ne confonds pas `throw` (lever, dans le code) et `throws` (prévenir, dans l’en-tête de la méthode).',
          'Tu peux créer tes propres exceptions en héritant de `Exception` (checked) ou de `RuntimeException` (unchecked). Un nom clair comme `SoldeInsuffisantException` explique le problème rien qu’en le lisant.' ],
          code: `class SoldeInsuffisantException extends Exception {\n    SoldeInsuffisantException(String msg) { super(msg); }\n}\n\nstatic void retirer(double solde, double montant) throws SoldeInsuffisantException {\n    if (montant > solde) {\n        throw new SoldeInsuffisantException("Il manque " + (montant - solde) + " €");\n    }\n}` },
        { h: 'try-with-resources', p: [
          'Les ressources à fermer (fichiers, connexions) s’ouvrent entre parenthèses après `try`. Java les ferme à la fin du bloc, même en cas d’exception.',
          'Ça fonctionne avec toute classe qui implémente `AutoCloseable`, et ça évite les longs `finally` sources d’erreurs.' ],
          code: `try (BufferedReader br = Files.newBufferedReader(Path.of("donnees.txt"))) {\n    System.out.println(br.readLine());\n} catch (IOException e) {\n    System.out.println("Lecture impossible : " + e.getMessage());\n}` },
        { h: 'Exemple réel : lire l’âge d’un formulaire', real: true, p: [
          'Ce que tape un utilisateur n’est pas fiable. Cette méthode transforme le texte en nombre, refuse les âges impossibles et ne laisse pas une erreur faire tomber l’application.' ],
          code: `static int lireAge(String texte) {\n    try {\n        int age = Integer.parseInt(texte.trim());\n        if (age < 0 || age > 120) {\n            throw new IllegalArgumentException("Âge hors limites : " + age);\n        }\n        return age;\n    } catch (NumberFormatException e) {\n        System.out.println("Ce n'est pas un nombre : " + texte);\n        return -1;\n    }\n}\n\nSystem.out.println(lireAge(" 34 "));    // 34\nSystem.out.println(lireAge("trente"));\n// Ce n'est pas un nombre : trente\n// -1` },
      ],
      x: [
        fill(`___ {\n    int n = Integer.parseInt("abc");\n} catch (NumberFormatException e) {\n    System.out.println("Pas un nombre");\n}`, ['try', 'do', 'attempt', 'check'], 'Le code qui peut échouer va dans `try`.'),
        out(`try {\n    String s = null;\n    s.length();\n} catch (NullPointerException e) {\n    System.out.println("nul");\n}`, ['nul', '0', 'null', 'Erreur non capturée'], 'Appeler une méthode sur `null` lève `NullPointerException`, et ici elle est capturée.'),
        fill(`if (age < 0) {\n    ___ new IllegalArgumentException("Âge négatif");\n}`, ['throw', 'throws', 'raise', 'error'], '`throw` lève une exception ; `throws` la déclare dans l’en-tête de la méthode. `raise` appartient à Python.'),
        out(`try {\n    int[] a = new int[2];\n    a[5] = 1;\n    System.out.println("ok");\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("dehors");\n} finally {\n    System.out.println("fin");\n}`, ['dehors\nfin', 'ok\nfin', 'fin', 'dehors'], '`a[5]` lève l’exception avant d’afficher "ok". `finally` s’exécute toujours.'),
        mc('Qu’est-ce qui caractérise une exception checked, comme IOException ?', ['Le compilateur oblige à la capturer ou à la déclarer avec throws', 'Java l’ignore automatiquement', 'Elle n’apparaît qu’à l’exécution, sans avertissement', 'C’est une erreur de syntaxe'], 'Si tu ne la gères pas, le code ne compile pas.'),
        mc('Que fait `try (var br = Files.newBufferedReader(chemin)) { ... }` ?', ['Il ferme la ressource automatiquement à la fin du bloc', 'Il réessaie la lecture en cas d’échec', 'Il ignore toutes les exceptions', 'Il ouvre le fichier deux fois'], 'C’est le try-with-resources : il ferme le lecteur même en cas d’erreur.'),
        mc('Pourquoi mettre `catch (Exception e)` avant `catch (NumberFormatException e)` ne compile-t-il pas ?', ['Le second catch ne serait jamais atteint, car Exception capture déjà tout', 'Exception n’existe pas en Java', 'Un seul catch est permis par try', 'NumberFormatException est checked'], 'Les `catch` vont du plus spécifique au plus général.'),
        out(`static int diviser(int a, int b) {\n    try {\n        return a / b;\n    } catch (ArithmeticException e) {\n        System.out.print("erreur ");\n        return 0;\n    } finally {\n        System.out.print("fin ");\n    }\n}\n\nSystem.out.println(diviser(10, 0) + diviser(9, 3));`, ['erreur fin fin 3', 'erreur fin 3', 'fin erreur fin 3', 'erreur 0 fin fin 3'], 'Le premier appel affiche "erreur " puis "fin " et renvoie 0. Le second affiche "fin " et renvoie 3. Enfin, 0 + 3 s’affiche.'),
      ],
    },
    // ───────────── Jour 18 ─────────────
    {
      t: 'Génériques',
      d: 'Classes et méthodes génériques, l’opérateur diamant et les jokers.',
      guide: [
        { h: 'Pourquoi les génériques existent', p: [
          'Avant Java 5, une liste gardait des `Object` et il fallait convertir chaque élément avec un cast. Si quelqu’un mettait un nombre dans une liste de noms, l’erreur apparaissait à l’exécution sous forme de `ClassCastException`.',
          'Avec les génériques, tu écris `List<String>` et le compilateur vérifie les types : ajouter un nombre ne compile même pas, et à la lecture, aucun cast n’est nécessaire.' ],
          code: `List<String> noms = new ArrayList<>();\nnoms.add("Ana");\n// noms.add(42);            // erreur de compilation\nString premier = noms.get(0);  // sans cast` },
        { h: 'Classes génériques', p: [
          'Une classe générique déclare un ou plusieurs paramètres de type entre chevrons : `class Boite<T>`. À l’intérieur, `T` s’utilise comme n’importe quel type.',
          'Par convention, on utilise des lettres : `T` (type), `E` (élément), `K` et `V` (clé et valeur). Dans `new Boite<>("salut")`, l’opérateur diamant `<>` laisse le compilateur déduire le type.' ],
          code: `class Paire<K, V> {\n    private final K cle;\n    private final V valeur;\n\n    Paire(K cle, V valeur) {\n        this.cle = cle;\n        this.valeur = valeur;\n    }\n\n    K getCle() { return cle; }\n    V getValeur() { return valeur; }\n}\n\nPaire<String, Integer> p = new Paire<>("age", 30);\nSystem.out.println(p.getCle() + "=" + p.getValeur());  // age=30` },
        { h: 'Méthodes génériques', p: [
          'Une méthode peut aussi être générique : elle déclare `<T>` avant le type de retour et l’utilise dans ses paramètres. Le type est déduit des arguments à l’appel.',
          'Les génériques n’acceptent que des types objet : `List<int>` n’existe pas, on utilise `List<Integer>`.' ],
          code: `static <T> T dernier(List<T> liste) {\n    return liste.get(liste.size() - 1);\n}\n\nString s = dernier(List.of("a", "b", "c"));  // "c"\nInteger n = dernier(List.of(4, 5));          // 5` },
        { h: 'Bornes et jokers', p: [
          '`<T extends Comparable<T>>` limite `T` aux types comparables, ce qui permet d’appeler `compareTo` à l’intérieur.',
          '`List<? extends Number>` accepte des listes de `Number` ou de n’importe quelle sous-classe (`Integer`, `Double`) pour y lire. `List<? super Integer>` accepte des listes où l’on peut mettre des `Integer`. Pour s’en souvenir : extends pour lire, super pour écrire.' ],
          code: `static double somme(List<? extends Number> nums) {\n    double total = 0;\n    for (Number n : nums) total += n.doubleValue();\n    return total;\n}\n\nSystem.out.println(somme(List.of(1, 2, 3)));    // 6.0\nSystem.out.println(somme(List.of(1.5, 2.5)));   // 4.0` },
        { h: 'Exemple réel : la réponse d’une API', real: true, p: [
          'Beaucoup d’applications renvoient toujours la même enveloppe : la donnée si tout s’est bien passé ou un message d’erreur. Avec un générique, la même classe sert pour les utilisateurs, les commandes ou n’importe quoi.' ],
          code: `class Resultat<T> {\n    private final T donnee;\n    private final String erreur;\n\n    private Resultat(T donnee, String erreur) {\n        this.donnee = donnee;\n        this.erreur = erreur;\n    }\n\n    static <T> Resultat<T> ok(T donnee) { return new Resultat<>(donnee, null); }\n    static <T> Resultat<T> echec(String erreur) { return new Resultat<>(null, erreur); }\n\n    boolean estOk() { return erreur == null; }\n    T getDonnee() { return donnee; }\n    String getErreur() { return erreur; }\n}\n\nResultat<Integer> r1 = Resultat.ok(42);\nResultat<Integer> r2 = Resultat.echec("Utilisateur introuvable");\nSystem.out.println(r1.estOk() + " " + r1.getDonnee());  // true 42\nSystem.out.println(r2.estOk() + " " + r2.getErreur());  // false Utilisateur introuvable` },
      ],
      x: [
        mc('Qu’apportent les génériques ?', ['Vérifier les types à la compilation et éviter les casts', 'Écrire plus vite sans types', 'Permettre les types primitifs dans les listes', 'Rien, ils sont facultatifs'], 'Les erreurs de type apparaissent à la compilation et non à l’exécution.'),
        mc('Que signifie `<>` dans `new ArrayList<>()` ?', ['Le compilateur déduit le type générique (opérateur diamant)', 'La liste est vide', 'La liste n’a pas de type', 'C’est une erreur'], 'Le type est déduit de la déclaration de la variable.'),
        typ('Déclare le paramètre de type de la classe', `class Boite<___> {\n    private T contenu;\n}`, 'T', 'Le paramètre de type se déclare entre chevrons puis s’utilise dans la classe.'),
        out(`class Boite<T> {\n    T valeur;\n    Boite(T v) { valeur = v; }\n}\n\nBoite<String> b = new Boite<>("bonjour");\nSystem.out.println(b.valeur.length());`, ['7', 'bonjour', 'T', 'Erreur'], '`T` est `String`, donc `valeur.length()` fonctionne sans cast.'),
        fill(`class Paire<___, V> {\n    K cle;\n    V valeur;\n}`, ['K', 'T[]', 'int', '?'], 'Chaque paramètre de type utilisé à l’intérieur se déclare entre les chevrons.'),
        fill(`static <T> T premier(List<___> liste) {\n    return liste.get(0);\n}`, ['T', '?', 'Object', 'E'], 'La méthode déclare `<T>` et l’utilise dans ses paramètres et son retour.'),
        mc('Quelles listes accepte un paramètre `List<? extends Number>` ?', ['Des listes de Number ou d’une sous-classe, comme Integer ou Double', 'Seulement List<Number>', 'N’importe quelle liste', 'Des listes de String'], '`? extends` est un joker borné par le haut.'),
        out(`static <T extends Comparable<T>> T plusGrand(List<T> liste) {\n    T max = liste.get(0);\n    for (T x : liste) {\n        if (x.compareTo(max) > 0) max = x;\n    }\n    return max;\n}\n\nSystem.out.println(plusGrand(List.of(3, 9, 4)) + plusGrand(List.of("poire", "raisin", "kiwi")));`, ['9raisin', '3kiwi', '9poire', '13'], 'Le plus grand nombre est 9 et le plus grand texte par ordre alphabétique est "raisin". Un `Integer` plus un `String` se concatène : "9raisin".'),
      ],
    },
    // ───────────── Jour 19 ─────────────
    {
      t: 'Date et heure',
      d: 'java.time : LocalDate, plusDays, ChronoUnit et formats.',
      guide: [
        { h: 'Le paquetage java.time', p: [
          'Depuis Java 8, les dates se gèrent avec `java.time`. `LocalDate` est une date (année, mois, jour), `LocalTime` une heure et `LocalDateTime` les deux ensemble.',
          'Les anciennes classes `Date` et `Calendar` sont déroutantes (les mois commençaient à 0) et ne doivent pas être utilisées dans du code neuf.',
          'Crée des dates avec `LocalDate.of(2025, 3, 14)` ou celle du jour avec `LocalDate.now()`. Affichées, elles sortent au format ISO : `2025-03-14`.' ],
          code: `LocalDate date = LocalDate.of(2025, 3, 14);\nLocalTime heure = LocalTime.of(9, 30);\nLocalDateTime rdv = LocalDateTime.of(2025, 3, 14, 9, 30);\nSystem.out.println(date);  // 2025-03-14\nSystem.out.println(rdv);   // 2025-03-14T09:30\nSystem.out.println(date.getDayOfWeek());  // FRIDAY` },
        { h: 'Ajouter et retirer : des dates immuables', p: [
          '`plusDays()`, `plusMonths()`, `minusWeeks()` et compagnie renvoient une nouvelle date ; l’originale ne change pas. Si tu ne gardes pas le résultat, il est perdu (comme avec les String).',
          'java.time gère les changements de mois et les années bissextiles : le 31 janvier plus un mois donne le dernier jour de février.' ],
          code: `LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusDays(1));    // 2024-02-01\nSystem.out.println(d.plusMonths(1));  // 2024-02-29\nd.plusYears(1);                       // résultat perdu\nSystem.out.println(d);                // 2024-01-31` },
        { h: 'Écarts entre dates', p: [
          '`ChronoUnit.DAYS.between(a, b)` donne le nombre de jours de `a` à `b` (négatif si `b` est avant). Il existe aussi `MONTHS`, `YEARS`, `HOURS`...',
          '`Period.between(a, b)` donne l’écart en années, mois et jours, pratique pour calculer un âge. Pour les heures et minutes, on utilise `Duration`.' ],
          code: `LocalDate naissance = LocalDate.of(1995, 6, 20);\nLocalDate aujourdhui = LocalDate.of(2025, 3, 14);\nSystem.out.println(Period.between(naissance, aujourdhui).getYears());  // 29\nSystem.out.println(ChronoUnit.DAYS.between(\n    LocalDate.of(2025, 1, 1), LocalDate.of(2025, 2, 1)));              // 31` },
        { h: 'Formater et lire des dates', p: [
          '`DateTimeFormatter.ofPattern("dd/MM/yyyy")` définit un format : `dd` jour, `MM` mois (`mm` serait les minutes), `yyyy` année, `HH` heure.',
          '`date.format(f)` transforme la date en texte et `LocalDate.parse(texte, f)` fait l’inverse.' ],
          code: `DateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nLocalDate d = LocalDate.parse("25/12/2025", f);\nSystem.out.println(d);            // 2025-12-25\nSystem.out.println(d.format(f));  // 25/12/2025` },
        { h: 'Exemple réel : l’échéance d’une facture', real: true, p: [
          'Une facture se paie à 30 jours après son émission. Le programme calcule la date d’échéance et le nombre de jours de retard du paiement.' ],
          code: `LocalDate emission = LocalDate.of(2025, 3, 14);\nLocalDate echeance = emission.plusDays(30);\nLocalDate aujourdhui = LocalDate.of(2025, 4, 20);\nlong retard = ChronoUnit.DAYS.between(echeance, aujourdhui);\n\nDateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nSystem.out.println("Échéance le " + echeance.format(f));  // Échéance le 13/04/2025\nSystem.out.println("Jours de retard : " + retard);        // Jours de retard : 7` },
      ],
      x: [
        mc('Quelle classe représente seulement une date, sans heure ?', ['LocalDate', 'LocalTime', 'LocalDateTime', 'Calendar'], '`LocalDate` garde l’année, le mois et le jour.'),
        out(`LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusDays(1));`, ['2024-02-01', '2024-01-32', '2024-01-01', 'Erreur'], 'java.time gère le changement de mois automatiquement.'),
        out(`LocalDate d = LocalDate.of(2024, 5, 9);\nSystem.out.println(d.getMonthValue());`, ['5', '9', 'MAY', '2024'], '`getMonthValue()` donne le numéro du mois ; `getMonth()` donnerait MAY.'),
        fill(`DateTimeFormatter f = DateTimeFormatter.___("dd/MM/yyyy");`, ['ofPattern', 'format', 'pattern', 'of'], '`ofPattern` crée un formateur à partir d’un motif.'),
        out(`LocalDate d = LocalDate.of(2024, 3, 1);\nd.plusDays(5);\nSystem.out.println(d);`, ['2024-03-01', '2024-03-06', '2024-03-05', 'Erreur'], 'Les dates sont immuables : `plusDays` renvoie une autre date qui n’est pas gardée ici.'),
        out(`long n = ChronoUnit.DAYS.between(\n    LocalDate.of(2024, 1, 1),\n    LocalDate.of(2024, 1, 11));\nSystem.out.println(n);`, ['10', '11', '1', 'Erreur'], 'Du 1er au 11 janvier, il y a 10 jours : le premier compte et le dernier non.'),
        out(`LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusMonths(1));`, ['2024-02-29', '2024-02-31', '2024-03-02', '2024-03-01'], 'Le 31 février n’existe pas, donc on ajuste au dernier jour du mois. 2024 est bissextile : 29.'),
        out(`LocalDate debut = LocalDate.of(2025, 12, 30);\nLocalDate fin = debut.plusDays(5);\nDateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nSystem.out.println(fin.format(f) + " " + fin.getYear());`, ['04/01/2026 2026', '35/12/2025 2025', '04/01/2026 2025', '01/04/2026 2026'], 'Cinq jours après le 30 décembre, c’est le 4 janvier de l’année suivante. Le motif met le jour en premier.'),
      ],
    },
    // ───────────── Jour 20 ─────────────
    {
      t: 'Expressions régulières',
      d: 'Pattern, Matcher, matches, replaceAll et split.',
      guide: [
        { h: 'Qu’est-ce qu’une expression régulière', p: [
          'Une expression régulière (regex) décrit un motif de texte : « cinq chiffres », « quelque chose avec un arobase au milieu », « un mot qui commence par une majuscule ». Elle sert à valider, chercher et remplacer.',
          '`texte.matches(regex)` renvoie `true` seulement si le texte entier correspond au motif, pas s’il le contient quelque part.' ],
          code: `System.out.println("75001".matches("\\\\d{5}"));    // true\nSystem.out.println("750".matches("\\\\d{5}"));      // false\nSystem.out.println("CP 75001".matches("\\\\d{5}")); // false : "CP " est en trop` },
        { h: 'La syntaxe de base', p: [
          '`.` est n’importe quel caractère, `\\d` un chiffre, `\\w` une lettre, un chiffre ou un tiret bas et `\\s` un espace. `[abc]` est l’un de ces caractères et `[a-z]` une plage.',
          'Les quantificateurs disent combien de fois : `+` une ou plusieurs, `*` zéro ou plusieurs, `?` zéro ou une et `{2,4}` entre deux et quatre.',
          'Dans un String Java, la barre oblique inverse est un caractère d’échappement, donc elle s’écrit en double : la regex `\\d+` s’écrit `"\\\\d+"`.' ] },
        { h: 'Pattern et Matcher : chercher des correspondances', p: [
          '`Pattern.compile(regex)` prépare le motif et `pattern.matcher(texte)` crée un `Matcher` qui le parcourt. Chaque `find()` avance à la correspondance suivante et `group()` la renvoie.',
          'Les parenthèses créent des groupes que tu peux lire séparément avec `group(1)`, `group(2)`... Compile le `Pattern` une fois et réutilise-le si tu t’en sers souvent.' ],
          code: `Pattern p = Pattern.compile("(\\\\d{2}):(\\\\d{2})");\nMatcher m = p.matcher("Ouvre à 09:30 et ferme à 21:00");\nwhile (m.find()) {\n    System.out.println(m.group() + " -> heure " + m.group(1));\n}\n// 09:30 -> heure 09\n// 21:00 -> heure 21` },
        { h: 'replaceAll et split', p: [
          '`replaceAll(regex, remplacement)` remplace chaque correspondance et `split(regex)` coupe le texte selon le motif.',
          'Attention : `split(".")` ne coupe pas aux points, car `.` signifie « n’importe quel caractère ». Pour un point littéral, écris `split("\\\\.")`.' ],
          code: `String tel = "06-12 34-56";\nSystem.out.println(tel.replaceAll("[^0-9]", ""));  // 06123456\n\nString[] morceaux = "un, deux,trois".split(",\\\\s*");\nSystem.out.println(morceaux.length);               // 3` },
        { h: 'Exemple réel : valider et extraire des données d’un texte', real: true, p: [
          'Un formulaire vérifie que le code postal a 5 chiffres, et un lecteur de tickets additionne les montants qui apparaissent dans le texte au format « 1,50 € ».' ],
          code: `String cp = "75001";\nSystem.out.println(cp.matches("\\\\d{5}"));   // true\n\nPattern prix = Pattern.compile("(\\\\d+),(\\\\d{2}) €");\nMatcher m = prix.matcher("Café 1,50 € et tartine 2,25 €");\ndouble total = 0;\nwhile (m.find()) {\n    total += Double.parseDouble(m.group(1) + "." + m.group(2));\n}\nSystem.out.println(total);  // 3.75` },
      ],
      x: [
        mc('Quelle classe compile une expression régulière en Java ?', ['Pattern', 'Regex', 'RegExp', 'Matcher'], '`Pattern.compile` crée le motif ; le `Matcher` s’obtient ensuite avec `pattern.matcher(texte)`.'),
        out(`System.out.println("12345".matches("\\\\d+"));`, ['true', 'false', '12345', 'Erreur'], '`\\d+` exige que tout le texte soit composé d’un ou plusieurs chiffres, et c’est le cas.'),
        out(`System.out.println("Java".matches("[A-Z].*"));`, ['true', 'false', 'J', 'Erreur'], 'Il commence par une majuscule et `.*` accepte le reste.'),
        mc('Pourquoi l’expression `\\d+` s’écrit-elle `"\\\\d+"` en Java ?', ['Parce que la barre oblique inverse est le caractère d’échappement des String et qu’il faut la doubler', 'Parce que les regex de Java utilisent deux barres', 'Parce qu’ainsi on cherche deux chiffres', 'C’est facultatif, les deux formes sont identiques'], 'Le String `"\\\\d+"` contient le texte `\\d+`, et c’est ce que reçoit le moteur de regex.'),
        out(`System.out.println("a1b22c".replaceAll("\\\\d+", "-"));`, ['a-b-c', 'a-b--c', 'abc', 'a1b22c'], 'Chaque groupe de chiffres consécutifs est remplacé par un seul tiret.'),
        out(`String[] p = "un, deux,trois".split(",\\\\s*");\nSystem.out.println(p.length);`, ['3', '2', '4', '1'], 'On coupe à chaque virgule suivie de zéro ou plusieurs espaces.'),
        fill(`Matcher m = Pattern.compile("[a-z]+").matcher("Bonjour Monde");\nwhile (m.___()) {\n    System.out.println(m.group());\n}`, ['find', 'next', 'matches', 'search'], '`find()` avance à la correspondance suivante et `group()` la renvoie.'),
        out(`Matcher m = Pattern.compile("(\\\\w+)@(\\\\w+)\\\\.com")\n    .matcher("ana@gmail.com, luis@yahoo.com");\nString r = "";\nwhile (m.find()) {\n    r += m.group(2).toUpperCase() + " ";\n}\nSystem.out.println(r.trim());`, ['GMAIL YAHOO', 'ANA LUIS', 'gmail yahoo', 'GMAIL'], 'Il y a deux correspondances et le groupe 2 est le domaine, sans ".com". On les met en majuscules et `trim` enlève l’espace final.'),
      ],
    },
    // ───────────── Jour 21 ─────────────
    {
      t: 'Fichiers',
      d: 'java.nio : Path, Files, lire, écrire et parcourir de gros fichiers.',
      guide: [
        { h: 'Des chemins avec Path', p: [
          'Depuis Java 7, les fichiers se gèrent avec le paquetage `java.nio.file`. Un chemin est représenté par `Path` et se crée avec `Path.of(...)`, qui joint les parties avec le bon séparateur du système (`/` ou `\\`).',
          '`getFileName()` donne le nom du fichier, `getParent()` le dossier qui le contient et `toAbsolutePath()` le chemin complet. Créer un `Path` ne crée aucun fichier : il décrit seulement où il serait.' ],
          code: `Path chemin = Path.of("donnees", "2025", "ventes.csv");\nSystem.out.println(chemin);                // donnees/2025/ventes.csv\nSystem.out.println(chemin.getFileName());  // ventes.csv\nSystem.out.println(chemin.getParent());    // donnees/2025` },
        { h: 'Lire et écrire du texte avec Files', p: [
          'La classe `Files` a des méthodes statiques pour presque tout : `writeString` écrit un texte, `readString` le lit en entier et `readAllLines` renvoie une `List<String>` avec chaque ligne.',
          'Par défaut, `writeString` écrase le fichier. Pour ajouter à la fin, passe `StandardOpenOption.APPEND`. Presque toutes les méthodes lèvent `IOException`, une exception checked à capturer ou à déclarer avec `throws`.' ],
          code: `Path notes = Path.of("notes.txt");\nFiles.writeString(notes, "Acheter du pain\\n");\nFiles.writeString(notes, "Appeler le médecin\\n", StandardOpenOption.APPEND);\n\nList<String> lignes = Files.readAllLines(notes);\nSystem.out.println(lignes.size());  // 2\nSystem.out.println(lignes.get(1));  // Appeler le médecin` },
        { h: 'Gros fichiers : ligne par ligne', p: [
          '`readAllLines` charge tout le fichier en mémoire. Avec un log de plusieurs gigaoctets, c’est un problème : utilise `Files.lines(chemin)`, qui renvoie un `Stream<String>` et lit les lignes au fur et à mesure.',
          'Ce stream garde le fichier ouvert, donc il va toujours dans un try-with-resources pour être fermé à la fin.' ],
          code: `try (Stream<String> lignes = Files.lines(Path.of("serveur.log"))) {\n    long erreurs = lignes.filter(l -> l.contains("ERROR")).count();\n    System.out.println("Erreurs : " + erreurs);\n} catch (IOException e) {\n    System.out.println("Impossible de lire le log : " + e.getMessage());\n}` },
        { h: 'Dossiers et vérifications', p: [
          '`Files.exists(chemin)` dit si quelque chose existe, `Files.isDirectory(chemin)` si c’est un dossier et `Files.size(chemin)` combien d’octets il occupe.',
          '`Files.createDirectories(chemin)` crée le dossier et tous les dossiers intermédiaires manquants, sans échouer s’ils existent déjà. `Files.copy`, `Files.move` et `Files.delete` font ce que leur nom indique.' ],
          code: `Path dossier = Path.of("rapports", "2025", "mars");\nFiles.createDirectories(dossier);\nPath rapport = dossier.resolve("resume.txt");\nFiles.writeString(rapport, "Ventes : 1200 €");\nSystem.out.println(Files.exists(rapport));  // true\nSystem.out.println(Files.size(rapport));    // octets occupés` },
        { h: 'Exemple réel : additionner les dépenses d’un CSV', real: true, p: [
          'Ta banque te permet de télécharger tes opérations dans un CSV avec l’en-tête `poste,montant`. Le programme saute l’en-tête, coupe chaque ligne à la virgule et additionne les montants.' ],
          code: `Path csv = Path.of("depenses.csv");\nFiles.writeString(csv, "poste,montant\\nloyer,650\\nélectricité,48.30\\ncourses,212.45\\n");\n\ndouble total = 0;\nList<String> lignes = Files.readAllLines(csv);\nfor (String ligne : lignes.subList(1, lignes.size())) {\n    String[] parties = ligne.split(",");\n    total += Double.parseDouble(parties[1]);\n}\nSystem.out.printf("Dépenses du mois : %.2f €%n", total);  // Dépenses du mois : 910,75 € (selon la langue du système)` },
      ],
      x: [
        mc('Quel type représente un chemin de fichier dans `java.nio.file` ?', ['Path', 'Route', 'FilePath', 'Directory'], '`Path.of("a", "b.txt")` crée un chemin en joignant les parties avec le séparateur du système.'),
        fill(`String texte = Files.___(Path.of("notes.txt"));  // tout le contenu`, ['readString', 'read', 'readAll', 'open'], '`readString` renvoie tout le contenu du fichier sous forme de `String`.'),
        mc('Quelle exception checked lèvent presque toutes les méthodes de `Files` ?', ['IOException', 'FileException', 'NullPointerException', 'RuntimeException'], 'Comme elle est checked, il faut la capturer avec `try/catch` ou la déclarer avec `throws IOException`.'),
        out(`Path p = Path.of("docs", "2025", "rapport.pdf");\nSystem.out.println(p.getFileName());`, ['rapport.pdf', 'docs', '2025/rapport.pdf', 'rapport'], '`getFileName()` renvoie le dernier élément du chemin, avec son extension.'),
        mc('Que fait `Files.writeString(chemin, texte, StandardOpenOption.APPEND)` ?', ['Il ajoute le texte à la fin sans effacer ce qu’il y avait', 'Il écrase le fichier', 'Il lève une erreur si le fichier existe', 'Il crée une copie du fichier'], 'Sans `APPEND`, `writeString` remplace le contenu précédent.'),
        typ('Crée le dossier et tous les dossiers intermédiaires manquants', `Files.___(Path.of("rapports", "2025", "mars"));`, 'createDirectories', '`createDirectories` crée tout le chemin et n’échoue pas s’il existe. `createDirectory`, au singulier, ne crée que le dernier.'),
        ord('Lis toutes les lignes du fichier dans une liste', ['List<String>', 'lignes', '=', 'Files', '.', 'readAllLines', '(', 'chemin', ')', ';'], ['readLines', 'File'], '`Files.readAllLines(chemin)` renvoie une `List<String>` avec une entrée par ligne.'),
        out(`Path p = Path.of("t.txt");\nFiles.writeString(p, "un\\ndeux\\n");\nFiles.writeString(p, "trois\\n", StandardOpenOption.APPEND);\nList<String> lignes = Files.readAllLines(p);\nSystem.out.println(lignes.size() + " " + lignes.get(lignes.size() - 1));`, ['3 trois', '2 trois', '1 trois', '3 un'], 'La première écriture laisse deux lignes et la seconde ajoute "trois" à la fin. `readAllLines` enlève les sauts de ligne.'),
      ],
    },
    // ───────────── Jour 22 ─────────────
    {
      t: 'Lambdas',
      d: 'Interfaces fonctionnelles, Function, Predicate, Consumer, Supplier et références de méthodes.',
      guide: [
        { h: 'Qu’est-ce qu’une lambda', p: [
          'Une lambda est une fonction sans nom que tu peux ranger dans une variable ou passer en argument. Elle s’écrit `(paramètres) -> expression` : `x -> x * 2` reçoit un nombre et renvoie son double.',
          'Avant Java 8, il fallait écrire une classe anonyme entière pour la même chose. Avec les lambdas, trier une liste par longueur tient en une ligne.' ],
          code: `List<String> noms = new ArrayList<>(List.of("Eva", "Alexandre", "Luis"));\n\n// Avant : classe anonyme\nnoms.sort(new Comparator<String>() {\n    public int compare(String a, String b) { return a.length() - b.length(); }\n});\n\n// Maintenant : lambda\nnoms.sort((a, b) -> a.length() - b.length());\nSystem.out.println(noms);  // [Eva, Luis, Alexandre]` },
        { h: 'Interfaces fonctionnelles', p: [
          'Une lambda implémente toujours une interface fonctionnelle : une interface avec une seule méthode abstraite. `Comparator`, `Runnable` et celles de `java.util.function` en sont.',
          'Les plus utilisées : `Function<T, R>` reçoit un T et renvoie un R (`apply`), `Predicate<T>` renvoie un boolean (`test`), `Consumer<T>` reçoit et ne renvoie rien (`accept`) et `Supplier<T>` ne reçoit rien et renvoie un T (`get`).' ],
          code: `Function<String, Integer> longueur = s -> s.length();\nPredicate<Integer> estPair = n -> n % 2 == 0;\nConsumer<String> saluer = s -> System.out.println("Bonjour, " + s);\nSupplier<Double> hasard = () -> Math.random();\n\nSystem.out.println(longueur.apply("Java"));  // 4\nSystem.out.println(estPair.test(7));         // false\nsaluer.accept("Ana");                        // Bonjour, Ana` },
        { h: 'Références de méthodes', p: [
          'Quand la lambda ne fait qu’appeler une méthode existante, tu peux écrire une référence avec `::`. `s -> s.toUpperCase()` devient `String::toUpperCase`.',
          'Il y a quatre formes : méthode statique (`Integer::parseInt`), méthode d’un objet précis (`System.out::println`), méthode d’instance du type (`String::length`) et constructeur (`ArrayList::new`).' ],
          code: `List<String> nombres = List.of("3", "10", "7");\nnombres.stream()\n       .map(Integer::parseInt)\n       .forEach(System.out::println);\n// 3\n// 10\n// 7` },
        { h: 'Variables capturées et composition', p: [
          'Une lambda peut utiliser des variables locales extérieures, mais seulement si elles sont effectivement finales : elles ne changent pas après leur affectation. C’est pourquoi `total += x` dans une lambda ne compile pas.',
          'Les fonctions s’enchaînent : `f.andThen(g)` applique d’abord `f` puis `g` ; `f.compose(g)` applique d’abord `g`. Les prédicats se combinent avec `and`, `or` et `negate`.' ],
          code: `Predicate<String> long6 = s -> s.length() > 5;\nPredicate<String> commenceParA = s -> s.startsWith("A");\nPredicate<String> lesDeux = long6.and(commenceParA);\n\nSystem.out.println(lesDeux.test("Alexandre"));  // true\nSystem.out.println(lesDeux.test("Ana"));        // false` },
        { h: 'Exemple réel : trier un catalogue', real: true, p: [
          'Une boutique affiche ses produits triés par prix et, en cas d’égalité, par nom. `Comparator.comparing` avec des références de méthodes le dit presque comme une phrase.' ],
          code: `record Produit(String nom, double prix) {}\n\nList<Produit> catalogue = new ArrayList<>(List.of(\n    new Produit("Clavier", 25.0),\n    new Produit("Tapis de souris", 9.9),\n    new Produit("Souris", 25.0)));\n\ncatalogue.sort(Comparator.comparing(Produit::prix)\n                         .thenComparing(Produit::nom));\ncatalogue.forEach(p -> System.out.println(p.nom() + " " + p.prix()));\n// Tapis de souris 9.9\n// Clavier 25.0\n// Souris 25.0` },
      ],
      x: [
        mc('Qu’est-ce qu’une interface fonctionnelle ?', ['Une interface avec une seule méthode abstraite', 'Une interface sans méthodes', 'Une classe avec des méthodes statiques', 'N’importe quelle interface qui hérite de Function'], 'C’est pourquoi une lambda peut l’implémenter : il n’y a qu’une méthode à remplir.'),
        out(`Function<Integer, Integer> double2 = x -> x * 2;\nSystem.out.println(double2.apply(7));`, ['14', '7', 'x * 2', 'Erreur'], '`apply` exécute la fonction avec l’argument 7.'),
        out(`Predicate<String> long4 = s -> s.length() > 4;\nSystem.out.println(long4.test("Java") + " " + long4.test("Python"));`, ['false true', 'true true', 'true false', 'false false'], '"Java" a 4 lettres (pas plus de 4) et "Python" en a 6.'),
        fill(`List.of("a", "b").forEach(System.out___println);`, ['::', '.', '->', ':'], '`System.out::println` est une référence à la méthode `println` de l’objet `System.out`.'),
        mc('Quelle interface ne reçoit rien et renvoie une valeur ?', ['Supplier<T>', 'Consumer<T>', 'Predicate<T>', 'Function<T, R>'], '`Supplier` a la méthode `get()`. `Consumer` fait exactement l’inverse : il reçoit et ne renvoie rien.'),
        out(`BiFunction<Integer, Integer, Integer> puissance = (b, e) -> (int) Math.pow(b, e);\nSystem.out.println(puissance.apply(2, 5));`, ['32', '10', '25', '7'], '`BiFunction` reçoit deux arguments : 2 puissance 5 vaut 32.'),
        mc('Pourquoi `int total = 0; liste.forEach(x -> total += x);` ne compile-t-il pas ?', ['Les lambdas ne peuvent utiliser que des variables locales effectivement finales', 'forEach n’accepte pas les lambdas', 'total devrait être un long', 'Il manque un return'], 'Pour additionner, utilise un stream : `liste.stream().mapToInt(Integer::intValue).sum()`.'),
        out(`Function<Integer, Integer> plus3 = x -> x + 3;\nFunction<Integer, Integer> double2 = x -> x * 2;\nSystem.out.println(plus3.andThen(double2).apply(4) + " " + plus3.compose(double2).apply(4));`, ['14 11', '11 14', '14 14', '25'], '`andThen` ajoute d’abord puis double : (4 + 3) * 2 = 14. `compose` double d’abord : 4 * 2 + 3 = 11.'),
      ],
    },
    // ───────────── Jour 23 ─────────────
    {
      t: 'Streams',
      d: 'filter, map, sorted, reduce, collect, regroupements et évaluation paresseuse.',
      guide: [
        { h: 'Qu’est-ce qu’un stream', p: [
          'Un stream est un pipeline d’opérations sur une suite de données : une source (`liste.stream()`), zéro ou plusieurs opérations intermédiaires (`filter`, `map`...) et une opération terminale qui produit le résultat (`toList`, `count`...).',
          'Un stream ne modifie pas la collection d’origine et ne se parcourt qu’une fois. Il décrit ce que tu veux obtenir au lieu de comment parcourir les données pas à pas.' ],
          code: `List<Integer> nombres = List.of(5, 12, 8, 21, 3);\nList<Integer> resultat = nombres.stream()\n    .filter(n -> n > 4)    // 5, 12, 8, 21\n    .map(n -> n * 10)      // 50, 120, 80, 210\n    .sorted()\n    .toList();\nSystem.out.println(resultat);  // [50, 80, 120, 210]\nSystem.out.println(nombres);   // [5, 12, 8, 21, 3]` },
        { h: 'Opérations intermédiaires', p: [
          '`filter` garde les éléments qui vérifient un prédicat, `map` transforme chacun, `sorted` trie, `distinct` enlève les doublons, `limit(n)` garde les n premiers et `skip(n)` saute les n premiers.',
          'Elles sont paresseuses : elles ne font rien tant que l’opération terminale n’arrive pas. Grâce à cela, `limit` peut couper un stream énorme sans tout traiter.' ],
          code: `List<String> top = Stream.of("poire", "kiwi", "poire", "raisin", "melon", "kiwi")\n    .distinct()\n    .sorted()\n    .limit(3)\n    .toList();\nSystem.out.println(top);  // [kiwi, melon, poire]` },
        { h: 'Opérations terminales', p: [
          '`count()` compte, `toList()` crée une liste, `forEach` fait quelque chose pour chaque élément et `anyMatch`/`allMatch` vérifient des conditions.',
          'Pour les nombres, utilise `mapToInt` et tu obtiens `sum()`, `average()` et `max()`. `reduce` combine tous les éléments en un seul avec l’opération que tu choisis.' ],
          code: `List<Integer> notes = List.of(7, 4, 9, 6);\nint somme = notes.stream().mapToInt(Integer::intValue).sum();\ndouble moyenne = notes.stream().mapToInt(Integer::intValue).average().orElse(0);\nint produit = notes.stream().reduce(1, (a, b) -> a * b);\nboolean tousAdmis = notes.stream().allMatch(n -> n >= 5);\nSystem.out.println(somme + " " + moyenne + " " + produit + " " + tousAdmis);\n// 26 6.5 1512 false` },
        { h: 'Collectors : joindre et regrouper', p: [
          '`collect` avec la classe `Collectors` construit des résultats plus riches : `joining(", ")` joint des textes, `groupingBy` regroupe dans une `Map` et `counting()` ou `summingInt` résument chaque groupe.',
          'Si tu veux la map triée par clé, demande un `TreeMap` dans `groupingBy`.' ],
          code: `List<String> villes = List.of("Lyon", "Lille", "Bordeaux", "Marseille", "Brest");\nMap<Character, List<String>> parInitiale = villes.stream()\n    .collect(Collectors.groupingBy(v -> v.charAt(0), TreeMap::new, Collectors.toList()));\nSystem.out.println(parInitiale);\n// {B=[Bordeaux, Brest], L=[Lyon, Lille], M=[Marseille]}\n\nSystem.out.println(String.join(" | ", villes.subList(0, 2)));  // Lyon | Lille` },
        { h: 'Exemple réel : le bilan des commandes d’une boutique', real: true, p: [
          'À partir de la liste des commandes du jour, la boutique veut savoir combien chaque client a dépensé et qui est le meilleur client. Avec les streams, ce sont deux expressions.' ],
          code: `record Commande(String client, double montant) {}\n\nList<Commande> commandes = List.of(\n    new Commande("Ana", 30.0), new Commande("Luis", 12.5),\n    new Commande("Ana", 18.0), new Commande("Eva", 45.0));\n\nMap<String, Double> parClient = commandes.stream()\n    .collect(Collectors.groupingBy(Commande::client, TreeMap::new,\n             Collectors.summingDouble(Commande::montant)));\nSystem.out.println(parClient);  // {Ana=48.0, Eva=45.0, Luis=12.5}\n\nString meilleur = parClient.entrySet().stream()\n    .max(Map.Entry.comparingByValue())\n    .map(Map.Entry::getKey)\n    .orElse("personne");\nSystem.out.println("Meilleur client : " + meilleur);  // Meilleur client : Ana` },
      ],
      x: [
        mc('Que fait `filter` dans un stream ?', ['Il garde les éléments qui remplissent une condition', 'Il transforme chaque élément', 'Il trie les éléments', 'Il additionne les éléments'], 'Pour transformer, on utilise `map`.'),
        out(`List<Integer> r = List.of(1, 2, 3, 4).stream()\n    .map(n -> n * n)\n    .toList();\nSystem.out.println(r);`, ['[1, 4, 9, 16]', '[1, 2, 3, 4]', '[2, 4, 6, 8]', '30'], '`map` met chaque nombre au carré et `toList` récupère le résultat.'),
        out(`long n = Stream.of("ana", "luis", "eva", "leo")\n    .filter(s -> s.length() == 3)\n    .count();\nSystem.out.println(n);`, ['3', '4', '1', '2'], 'Seul "luis" a plus de 3 lettres.'),
        fill(`int total = List.of(5, 10, 15).stream()\n    .mapToInt(Integer::intValue)\n    .___();`, ['sum', 'total', 'add', 'reduce'], '`mapToInt` donne un `IntStream`, qui a `sum()`. `reduce` marcherait aussi, mais il faut des arguments.'),
        out(`String s = Stream.of("a", "b", "c").collect(Collectors.joining("-"));\nSystem.out.println(s);`, ['a-b-c', 'abc', '[a, b, c]', 'a-b-c-'], '`joining` met le séparateur seulement entre les éléments, pas à la fin.'),
        mc('Que se passe-t-il avec un stream qui n’a que des opérations intermédiaires, sans terminale ?', ['Rien ne s’exécute : les intermédiaires sont paresseuses', 'Il s’exécute quand même', 'Il lève une exception', 'Il renvoie null'], 'Le travail commence quand l’opération terminale arrive.'),
        out(`System.out.println(Stream.of(3, 1, 3, 2, 1).distinct().sorted().toList());`, ['[1, 2, 3]', '[3, 1, 2]', '[1, 1, 2, 3, 3]', '[3, 2, 1]'], '`distinct` laisse 3, 1 et 2 et `sorted` les met dans l’ordre.'),
        out(`List<String> mots = List.of("mer", "sol", "lune", "ciel", "étoile");\nMap<Integer, Long> parLongueur = mots.stream()\n    .collect(Collectors.groupingBy(String::length, TreeMap::new, Collectors.counting()));\nSystem.out.println(parLongueur);`, ['{3=2, 4=2, 6=1}', '{3=3, 4=1, 6=1}', '{mer=3, sol=3, lune=4, ciel=4, étoile=6}', '[3, 4, 6]'], '"mer" et "sol" ont 3 lettres, "lune" et "ciel" 4 et "étoile" 6. `counting()` compte combien il y en a dans chaque groupe et le `TreeMap` trie les clés.'),
      ],
    },
    // ───────────── Jour 24 ─────────────
    {
      t: 'Optional et records',
      d: 'Des valeurs qui peuvent manquer sans null, et des classes de données immuables en une ligne.',
      guide: [
        { h: 'Le problème de null', p: [
          'Une méthode qui cherche quelque chose peut ne pas le trouver. Si elle renvoie `null` et que l’appelant ne vérifie pas, le programme échoue avec `NullPointerException`, l’erreur la plus courante de Java.',
          '`Optional<T>` est une boîte qui contient une valeur ou qui est vide. Le type de retour prévient déjà que le résultat peut manquer, et le compilateur t’oblige à décider quoi faire.' ],
          code: `Optional<String> plein = Optional.of("Ana");\nOptional<String> vide = Optional.empty();\nOptional<String> peutEtre = Optional.ofNullable(null);  // vide\n\nSystem.out.println(plein.isPresent());    // true\nSystem.out.println(peutEtre.isEmpty());   // true` },
        { h: 'Utiliser un Optional sans get()', p: [
          '`orElse(valeur)` donne le contenu ou une valeur par défaut, `orElseGet(() -> ...)` calcule la valeur par défaut seulement si besoin et `orElseThrow()` lève une exception s’il est vide.',
          '`map` transforme le contenu s’il existe et `ifPresent` exécute quelque chose seulement s’il y a une valeur. Évite `get()` sans vérifier : c’est revenir au problème de null. Optional sert de type de retour, pas pour les attributs ni les paramètres.' ],
          code: `Optional<String> email = Optional.of("  ANA@MAIL.COM ");\nString propre = email.map(String::trim)\n                     .map(String::toLowerCase)\n                     .orElse("sans e-mail");\nSystem.out.println(propre);  // ana@mail.com\n\nOptional.<String>empty().ifPresent(System.out::println);  // n'affiche rien` },
        { h: 'Records : des classes de données en une ligne', p: [
          'Un `record` déclare une classe dont le seul but est de garder des données. Avec `record Point(int x, int y) {}`, Java génère le constructeur, les accesseurs `x()` et `y()`, `equals`, `hashCode` et `toString`.',
          'Les champs sont `final` : un record est immuable. Pour « changer » une valeur, on crée un autre record.' ],
          code: `record Point(int x, int y) {}\n\nPoint p = new Point(3, 4);\nSystem.out.println(p);                          // Point[x=3, y=4]\nSystem.out.println(p.x() + p.y());              // 7\nSystem.out.println(p.equals(new Point(3, 4)));  // true` },
        { h: 'Valider et ajouter des méthodes', p: [
          'Le constructeur compact (sans parenthèses) permet de valider les données avant de les garder : si quelque chose cloche, il lève une exception et l’objet n’existe jamais.',
          'Un record peut avoir ses propres méthodes et des méthodes statiques, et implémenter des interfaces. Il ne peut pas hériter d’une autre classe ni avoir d’attributs d’instance supplémentaires.' ],
          code: `record Prix(double montant, String devise) {\n    Prix {\n        if (montant < 0) throw new IllegalArgumentException("Montant négatif");\n    }\n\n    Prix avecTva() { return new Prix(montant * 1.21, devise); }\n}\n\nSystem.out.println(new Prix(100, "EUR").avecTva());  // Prix[montant=121.0, devise=EUR]` },
        { h: 'Exemple réel : chercher un utilisateur par e-mail', real: true, p: [
          'Un dépôt d’utilisateurs renvoie `Optional<Utilisateur>` : l’appelant voit dans la signature que l’utilisateur peut ne pas exister et décide quoi répondre, sans risque de `NullPointerException`.' ],
          code: `record Utilisateur(String email, String nom) {}\n\nclass DepotUtilisateurs {\n    private final List<Utilisateur> utilisateurs = List.of(\n        new Utilisateur("ana@mail.com", "Ana"),\n        new Utilisateur("luis@mail.com", "Luis"));\n\n    Optional<Utilisateur> chercherParEmail(String email) {\n        return utilisateurs.stream().filter(u -> u.email().equals(email)).findFirst();\n    }\n}\n\nDepotUtilisateurs depot = new DepotUtilisateurs();\nSystem.out.println(depot.chercherParEmail("ana@mail.com").map(Utilisateur::nom).orElse("Invité"));  // Ana\nSystem.out.println(depot.chercherParEmail("eva@mail.com").map(Utilisateur::nom).orElse("Invité"));  // Invité` },
      ],
      x: [
        mc('À quoi sert `Optional` ?', ['À représenter une valeur qui peut manquer sans utiliser null', 'À rendre facultatifs les paramètres d’une méthode', 'À capturer des exceptions', 'À créer des listes vides'], 'Le type de retour indique clairement que le résultat peut ne pas exister.'),
        out(`Optional<String> o = Optional.empty();\nSystem.out.println(o.orElse("anonyme"));`, ['anonyme', 'null', 'Optional.empty', 'Erreur'], 'Il est vide, donc `orElse` renvoie la valeur par défaut.'),
        out(`Optional<String> o = Optional.of("java");\nSystem.out.println(o.map(String::toUpperCase).orElse("-"));`, ['JAVA', 'java', '-', 'Optional[JAVA]'], '`map` transforme le contenu et `orElse` le sort de la boîte.'),
        fill(`___ Point(int x, int y) {}`, ['record', 'class', 'struct', 'data'], '`record` génère constructeur, accesseurs, `equals`, `hashCode` et `toString`.'),
        out(`record Point(int x, int y) {}\nPoint p = new Point(3, 4);\nSystem.out.println(p);`, ['Point[x=3, y=4]', 'Point(3, 4)', 'Point@1b6d3586', '{x=3, y=4}'], 'Le `toString` d’un record affiche le nom et chaque champ entre crochets.'),
        out(`record Point(int x, int y) {}\nSystem.out.println(new Point(1, 2).equals(new Point(1, 2)));`, ['true', 'false', 'Erreur', 'null'], 'Les records se comparent par contenu : deux points avec les mêmes valeurs sont égaux.'),
        mc('Comment lit-on le champ `x` d’un record `Point p` ?', ['p.x()', 'p.getX()', 'p.x', 'p.get("x")'], 'Les accesseurs d’un record portent le même nom que le champ, sans le préfixe get.'),
        out(`record Produit(String nom, double prix) {\n    Produit {\n        if (prix < 0) throw new IllegalArgumentException("prix négatif");\n    }\n}\nList<Produit> liste = List.of(new Produit("pain", 1.2), new Produit("fromage", 4.5));\nOptional<Produit> cher = liste.stream().filter(p -> p.prix() > 5).findFirst();\nSystem.out.println(cher.map(Produit::nom).orElse("aucun") + " " + liste.get(1).prix());`, ['aucun 4.5', 'fromage 4.5', 'null 4.5', 'aucun 1.2'], 'Aucun produit ne coûte plus de 5, donc `findFirst` donne un Optional vide et on utilise "aucun". Le second produit coûte 4.5.'),
      ],
    },
    // ───────────── Jour 25 ─────────────
    {
      t: 'Enums et switch moderne',
      d: 'enum avec attributs et méthodes, values, ordinal et switch avec flèches et yield.',
      guide: [
        { h: 'Qu’est-ce qu’un enum', p: [
          'Un `enum` est un type avec un ensemble fixe de valeurs : les jours de la semaine, les états d’une commande, les couleurs d’un jeu de cartes. Le compilateur empêche d’utiliser une valeur qui n’est pas dans la liste.',
          '`values()` renvoie toutes les valeurs, `name()` son nom en texte, `ordinal()` sa position (à partir de 0) et `valueOf("TEXTE")` transforme un texte en valeur de l’enum.' ],
          code: `enum Jour { LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI, DIMANCHE }\n\nJour aujourdhui = Jour.VENDREDI;\nSystem.out.println(aujourdhui);             // VENDREDI\nSystem.out.println(aujourdhui.ordinal());   // 4\nSystem.out.println(Jour.values().length);   // 7\nSystem.out.println(Jour.valueOf("LUNDI"));  // LUNDI` },
        { h: 'Enums avec attributs et méthodes', p: [
          'Chaque valeur d’un enum est un objet, donc elle peut avoir des attributs, un constructeur (toujours privé) et des méthodes. C’est idéal pour des données fixes liées à chaque option.',
          'Compare les enums avec `==` : chaque valeur n’existe qu’une fois.' ],
          code: `enum Offre {\n    BASIQUE(5.99, 1), FAMILLE(13.99, 4), PREMIUM(17.99, 6);\n\n    private final double prix;\n    private final int ecrans;\n\n    Offre(double prix, int ecrans) {\n        this.prix = prix;\n        this.ecrans = ecrans;\n    }\n\n    double prixParEcran() { return prix / ecrans; }\n}\n\nSystem.out.printf("%.2f%n", Offre.FAMILLE.prixParEcran());  // 3,50 (selon la langue du système)` },
        { h: 'switch avec des flèches', p: [
          'Depuis Java 14, `case X -> ...` n’exécute que cette branche : pas de « chute » dans le cas suivant et pas besoin de `break`. Un même `case` accepte plusieurs valeurs séparées par des virgules.',
          'Le switch peut aussi être une expression qui renvoie une valeur. Si une branche a besoin de plusieurs lignes, ouvre un bloc et renvoie la valeur avec `yield`. Avec les enums, le compilateur prévient s’il manque un cas.' ],
          code: `Jour j = Jour.SAMEDI;\nString type = switch (j) {\n    case SAMEDI, DIMANCHE -> "week-end";\n    case VENDREDI -> {\n        System.out.println("Presque !");\n        yield "jour ouvré";\n    }\n    default -> "jour ouvré";\n};\nSystem.out.println(type);  // week-end` },
        { h: 'Le switch classique et son piège', p: [
          'Dans le switch classique avec deux-points, si un `case` ne finit pas par `break`, l’exécution continue dans le suivant (fall-through). C’est une source classique de bugs.',
          'Dans du code neuf, utilise les flèches. Depuis Java 21, `switch` accepte aussi des motifs de type : `case Integer i -> ...`.' ],
          code: `Object valeur = 42;\nString description = switch (valeur) {\n    case Integer i when i > 10 -> "grand entier : " + i;\n    case Integer i -> "entier : " + i;\n    case String s -> "texte de " + s.length() + " lettres";\n    default -> "autre chose";\n};\nSystem.out.println(description);  // grand entier : 42` },
        { h: 'Exemple réel : les états d’une commande', real: true, p: [
          'Une boutique en ligne suit l’état de chaque commande. L’enum définit les états possibles et une méthode décide du suivant, ainsi personne ne peut sauter d’étape.' ],
          code: `enum Statut {\n    EN_ATTENTE, PAYEE, EXPEDIEE, LIVREE;\n\n    Statut suivant() {\n        return switch (this) {\n            case EN_ATTENTE -> PAYEE;\n            case PAYEE -> EXPEDIEE;\n            case EXPEDIEE, LIVREE -> LIVREE;\n        };\n    }\n}\n\nStatut s = Statut.EN_ATTENTE;\nfor (int i = 0; i < 3; i++) {\n    s = s.suivant();\n    System.out.println(s);\n}\n// PAYEE\n// EXPEDIEE\n// LIVREE` },
      ],
      x: [
        mc('Qu’est-ce qu’un enum ?', ['Un type avec un ensemble fixe de valeurs', 'Une liste qui peut grandir', 'Un type de nombre', 'Une interface'], 'Le compilateur n’accepte que les valeurs déclarées.'),
        out(`enum Couleur { ROUGE, VERT, BLEU }\nSystem.out.println(Couleur.BLEU.ordinal());`, ['2', '3', '1', 'BLEU'], '`ordinal()` commence à 0 : ROUGE vaut 0, VERT 1 et BLEU 2.'),
        out(`enum Couleur { ROUGE, VERT, BLEU }\nSystem.out.println(Couleur.values().length + " " + Couleur.valueOf("VERT"));`, ['3 VERT', '2 VERT', '3 1', 'Erreur'], '`values()` a 3 éléments et `valueOf` transforme le texte en valeur de l’enum, qui s’affiche par son nom.'),
        fill(`String type = switch (jour) {\n    case SAMEDI, DIMANCHE ___ "week-end";\n    default -> "jour ouvré";\n};`, ['->', ':', '=>', '='], 'Le switch moderne utilise des flèches `->`. `=>` appartient à JavaScript.'),
        out(`int mois = 2;\nint jours = switch (mois) {\n    case 2 -> 28;\n    case 4, 6, 9, 11 -> 30;\n    default -> 31;\n};\nSystem.out.println(jours);`, ['28', '30', '31', 'Erreur'], 'Le mois 2 entre dans la première branche, et avec les flèches il n’y a pas de chute dans les suivantes.'),
        mc('Qu’est-ce qui distingue le switch à flèches du classique à deux-points ?', ['Il n’y a pas de chute dans le case suivant, donc pas besoin de break', 'Il ne marche qu’avec des nombres', 'Il est plus lent', 'Il faut un break dans chaque case'], 'Chaque branche s’exécute seule, sans continuer dans la suivante.'),
        typ('Renvoie la valeur depuis un bloc dans un switch expression', `String r = switch (n) {\n    case 3 -> {\n        System.out.println("trois");\n        ___ "impair";\n    }\n    default -> "autre";\n};`, 'yield', 'Dans un bloc `{ }` d’un switch expression, la valeur se renvoie avec `yield`, pas avec `return`.'),
        out(`int n = 2;\nString r = "";\nswitch (n) {\n    case 1: r += "un ";\n    case 2: r += "deux ";\n    case 3: r += "trois ";\n        break;\n    default: r += "autre";\n}\nSystem.out.println(r.trim());`, ['deux trois', 'deux', 'deux trois autre', 'un deux trois'], 'C’est le switch classique : il entre dans `case 2` et, sans `break`, continue dans `case 3` jusqu’au `break`. Il n’atteint pas `default`.'),
      ],
    },
    // ───────────── Jour 26 ─────────────
    {
      t: 'Concurrence',
      d: 'Threads, conditions de course, synchronized, AtomicInteger et ExecutorService.',
      guide: [
        { h: 'Les threads', p: [
          'Un thread (fil d’exécution) est une ligne d’exécution. Un programme Java démarre avec le thread `main`, mais peut en lancer d’autres pour faire plusieurs choses à la fois : télécharger des fichiers pendant que l’interface reste réactive, servir de nombreux clients...',
          'On crée un `Thread` avec une lambda et on le démarre avec `start()`. Attention : appeler `run()` exécute le code dans le thread courant, sans en créer. `join()` attend la fin du thread.' ],
          code: `Thread t = new Thread(() -> {\n    for (int i = 1; i <= 3; i++) System.out.println("Téléchargement partie " + i);\n});\nt.start();          // démarre en parallèle\nt.join();           // attend la fin\nSystem.out.println("Téléchargement terminé");` },
        { h: 'Conditions de course', p: [
          'Quand deux threads modifient la même donnée en même temps, le résultat dépend de leur entrelacement. `compteur++` ressemble à une opération, mais il y en a trois : lire, ajouter et écrire, et un autre thread peut se glisser entre les deux.',
          'Le résultat est un bug intermittent : parfois ça marche, parfois non, ce qui le rend très difficile à déboguer.' ],
          code: `int[] compteur = {0};\nRunnable ajouter = () -> { for (int i = 0; i < 100_000; i++) compteur[0]++; };\nThread a = new Thread(ajouter), b = new Thread(ajouter);\na.start(); b.start();\na.join(); b.join();\nSystem.out.println(compteur[0]);  // presque jamais 200000` },
        { h: 'synchronized et classes atomiques', p: [
          '`synchronized` marque une méthode ou un bloc qu’un seul thread à la fois peut exécuter sur le même objet. Les autres attendent leur tour.',
          'Pour les compteurs, `AtomicInteger` est plus simple : `incrementAndGet()` ajoute en toute sécurité sans verrou explicite. Pour les collections partagées, il existe `ConcurrentHashMap` et compagnie.' ],
          code: `AtomicInteger compteur = new AtomicInteger();\nRunnable ajouter = () -> { for (int i = 0; i < 100_000; i++) compteur.incrementAndGet(); };\nThread a = new Thread(ajouter), b = new Thread(ajouter);\na.start(); b.start();\na.join(); b.join();\nSystem.out.println(compteur.get());  // 200000, toujours` },
        { h: 'ExecutorService : des groupes de threads', p: [
          'Créer des threads à la main pour chaque tâche coûte cher. Un `ExecutorService` garde un groupe (pool) de threads et leur distribue les tâches que tu lui envoies avec `submit`.',
          '`submit` renvoie un `Future` : sa méthode `get()` attend la fin de la tâche et renvoie le résultat. À la fin, appelle `shutdown()`. Depuis Java 21, `Executors.newVirtualThreadPerTaskExecutor()` utilise des threads virtuels, très légers, idéaux pour des milliers de tâches qui attendent le réseau.' ],
          code: `ExecutorService pool = Executors.newFixedThreadPool(2);\nFuture<Integer> f = pool.submit(() -> {\n    Thread.sleep(500);   // simule un calcul lent\n    return 6 * 7;\n});\nSystem.out.println("Calcul en cours...");\nSystem.out.println(f.get());  // 42\npool.shutdown();` },
        { h: 'Exemple réel : interroger plusieurs services à la fois', real: true, p: [
          'Un site de voyages demande le prix à trois compagnies aériennes. L’une après l’autre, cela prend la somme des temps ; en parallèle, seulement le temps de la plus lente.' ],
          code: `static int consulterPrix(String compagnie) throws InterruptedException {\n    Thread.sleep(1000);                 // simule l'appel réseau\n    return 80 + compagnie.length() * 5;\n}\n\nList<String> compagnies = List.of("Iberia", "Vueling", "Ryanair");\ntry (ExecutorService pool = Executors.newVirtualThreadPerTaskExecutor()) {\n    List<Future<Integer>> prix = new ArrayList<>();\n    for (String c : compagnies) prix.add(pool.submit(() -> consulterPrix(c)));\n\n    int meilleur = Integer.MAX_VALUE;\n    for (Future<Integer> p : prix) meilleur = Math.min(meilleur, p.get());\n    System.out.println("Meilleur prix : " + meilleur + " €");  // en 1 seconde, pas 3\n}` },
      ],
      x: [
        mc('Quelle méthode démarre un nouveau thread ?', ['start()', 'run()', 'begin()', 'execute()'], '`run()` exécute le code dans le thread courant ; seul `start()` en crée un nouveau.'),
        mc('Qu’est-ce qu’une condition de course ?', ['Deux threads modifient une donnée en même temps et le résultat dépend de l’ordre', 'Un thread qui va plus vite qu’un autre', 'Une boucle infinie', 'Une erreur de compilation'], 'C’est pourquoi `compteur++` depuis plusieurs threads peut perdre des additions.'),
        fill(`AtomicInteger compteur = new AtomicInteger();\ncompteur.___();  // ajoute 1 en toute sécurité`, ['incrementAndGet', '++', 'add', 'increment'], '`incrementAndGet` ajoute 1 et renvoie la nouvelle valeur de façon atomique.'),
        out(`Thread t = new Thread(() -> System.out.println("fil"));\nt.start();\nt.join();\nSystem.out.println("main");`, ['fil\nmain', 'main\nfil', 'main', 'fil'], '`join()` fait attendre `main` jusqu’à la fin du thread, donc "fil" sort toujours en premier.'),
        mc('À quoi sert `synchronized` ?', ['À ce qu’un seul thread à la fois exécute cette méthode ou ce bloc', 'À rendre le code plus rapide', 'À créer un nouveau thread', 'À synchroniser l’horloge du système'], 'Les autres threads attendent que le premier sorte.'),
        ord('Crée un pool de 4 threads', ['ExecutorService', 'pool', '=', 'Executors', '.', 'newFixedThreadPool', '(', '4', ')', ';'], ['new', 'Thread'], 'Les pools se créent avec les méthodes de fabrique de `Executors`.'),
        mc('Que fait `future.get()` ?', ['Il attend la fin de la tâche et renvoie son résultat', 'Il annule la tâche', 'Il démarre la tâche', 'Il renvoie toujours null'], 'Si la tâche a levé une exception, `get()` la relance enveloppée dans une `ExecutionException`.'),
        out(`ExecutorService pool = Executors.newFixedThreadPool(3);\nList<Future<Integer>> futurs = new ArrayList<>();\nfor (int i = 1; i <= 3; i++) {\n    int n = i;\n    futurs.add(pool.submit(() -> n * n));\n}\nint total = 0;\nfor (Future<Integer> f : futurs) total += f.get();\npool.shutdown();\nSystem.out.println(total);`, ['14', '6', '36', '9'], 'Les tâches calculent 1, 4 et 9 en parallèle, mais `get()` attend chacune : 1 + 4 + 9 = 14. `int n = i` est nécessaire car la lambda ne peut utiliser que des variables effectivement finales.'),
      ],
    },
    // ───────────── Jour 27 ─────────────
    {
      t: 'Maven et Gradle',
      d: 'Outils de build : structure du projet, dépendances, tests et packaging.',
      guide: [
        { h: 'Pourquoi un outil de build', p: [
          'Un vrai projet a des dizaines de classes, des bibliothèques externes, des tests et un fichier final à livrer. Compiler tout ça avec `javac` à la main est impossible.',
          'Maven et Gradle téléchargent les dépendances, compilent, lancent les tests et empaquettent le résultat (en général un `.jar`) en une seule commande. Ils imposent aussi une structure de dossiers standard que tout développeur reconnaît.' ],
          code: `mon-projet/\n├── pom.xml                (ou build.gradle.kts)\n└── src/\n    ├── main/java/          code de l'application\n    ├── main/resources/     configuration, gabarits...\n    └── test/java/          tests` },
        { h: 'Maven et le pom.xml', p: [
          'Maven se configure dans `pom.xml`. Chaque projet et chaque bibliothèque s’identifient par trois coordonnées : `groupId` (organisation), `artifactId` (nom) et `version`.',
          'Les commandes suivent un cycle de vie : `mvn compile` compile, `mvn test` lance aussi les tests et `mvn package` génère le `.jar` dans le dossier `target`.' ],
          code: `<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.monentreprise</groupId>\n  <artifactId>boutique</artifactId>\n  <version>1.0.0</version>\n\n  <dependencies>\n    <dependency>\n      <groupId>com.google.code.gson</groupId>\n      <artifactId>gson</artifactId>\n      <version>2.11.0</version>\n    </dependency>\n  </dependencies>\n</project>` },
        { h: 'Gradle', p: [
          'Gradle fait la même chose avec un script en Kotlin (`build.gradle.kts`) ou en Groovy, plus court que le XML. C’est le standard sur Android.',
          '`implementation` ajoute une dépendance pour le code et `testImplementation` une dépendance utilisée seulement par les tests. Le wrapper `./gradlew` télécharge et utilise la version de Gradle fixée dans le projet, ainsi toute l’équipe compile pareil.' ],
          code: `plugins {\n    java\n    application\n}\n\nrepositories { mavenCentral() }\n\ndependencies {\n    implementation("com.google.code.gson:gson:2.11.0")\n    testImplementation("org.junit.jupiter:junit-jupiter:5.11.0")\n}\n\napplication { mainClass = "com.monentreprise.boutique.App" }\n\n// ./gradlew build   -> compile, teste et empaquette\n// ./gradlew run     -> lance l'application` },
        { h: 'Dépôts et versions', p: [
          'Les bibliothèques se téléchargent depuis Maven Central, le grand dépôt public de Java, et sont gardées dans un cache local pour ne pas les télécharger à chaque fois.',
          'Fixe des versions exactes : ainsi le projet compile pareil aujourd’hui que dans un an. Beaucoup de bibliothèques suivent le versionnage sémantique : un changement du premier chiffre (2.x vers 3.x) peut casser ton code.' ] },
        { h: 'Exemple réel : un test avec JUnit', real: true, p: [
          'Avec JUnit ajouté en dépendance de test, ce test vérifie que le calcul de la TVA est correct. `mvn test` ou `./gradlew test` le lancent avec tous les autres avant d’empaqueter.' ],
          code: `// src/main/java/com/monentreprise/boutique/Prix.java\npublic class Prix {\n    public static double avecTva(double base) {\n        return Math.round(base * 1.21 * 100) / 100.0;\n    }\n}\n\n// src/test/java/com/monentreprise/boutique/PrixTest.java\nimport org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\nclass PrixTest {\n    @Test\n    void ajouteLaTva() {\n        assertEquals(121.0, Prix.avecTva(100));\n    }\n}` },
      ],
      x: [
        mc('Quel fichier configure un projet Maven ?', ['pom.xml', 'build.gradle', 'package.json', 'maven.yml'], '`package.json` appartient à npm (JavaScript).'),
        mc('Où va le code de l’application dans la structure standard ?', ['src/main/java', 'src/java', 'main/', 'java/src'], 'Les tests vont dans `src/test/java`.'),
        fill(`<dependency>\n  <groupId>com.google.code.gson</groupId>\n  <___>gson</artifactId>\n  <version>2.11.0</version>\n</dependency>`, ['artifactId', 'name', 'packageId', 'module'], 'Une dépendance s’identifie par groupId, artifactId et version.'),
        ord('Nettoie le projet et génère le .jar avec Maven', ['mvn', 'clean', 'package'], ['npm', 'gradle'], '`clean` supprime le dossier `target` et `package` compile, teste et empaquette.'),
        mc('Que signifie `testImplementation` dans Gradle ?', ['La dépendance n’est disponible que pour les tests', 'Elle n’est téléchargée qu’en production', 'Elle vérifie que la dépendance fonctionne', 'Elle lance les tests automatiquement'], 'Ainsi, les bibliothèques de test ne finissent pas dans le `.jar` final.'),
        mc('À quoi sert `./gradlew` ?', ['À lancer Gradle avec la version fixée dans le projet, sans l’installer à part', 'À supprimer le projet', 'À installer Java', 'À créer un dépôt Git'], 'C’est le wrapper : toute l’équipe utilise la même version de Gradle.'),
        typ('Ajoute Gson comme dépendance du code', `dependencies {\n    ___("com.google.code.gson:gson:2.11.0")\n}`, 'implementation', '`implementation` sert au code de l’application ; `testImplementation`, seulement aux tests.'),
        mc('Une collègue clone ton projet Maven, compile à la main avec `javac` et obtient "package com.google.gson does not exist". Quelle est la cause la plus probable ?', ['javac ne lit pas le pom.xml et ne télécharge pas les dépendances : elle doit utiliser mvn compile', 'Gson n’existe pas sur Maven Central', 'Elle doit redémarrer l’ordinateur', 'Elle doit supprimer le pom.xml'], 'Maven télécharge les dépendances déclarées et les met dans le classpath à la compilation ; `javac` seul n’en sait rien.'),
      ],
    },
    // ───────────── Jour 28 ─────────────
    {
      t: 'JDBC et bases de données',
      d: 'Connexions, PreparedStatement, ResultSet, injection SQL et transactions.',
      guide: [
        { h: 'Qu’est-ce que JDBC', p: [
          'JDBC est l’API standard de Java pour parler aux bases de données relationnelles (PostgreSQL, MySQL, SQLite...). Chaque base fournit un pilote (driver), que l’on ajoute comme dépendance avec Maven ou Gradle.',
          'La connexion s’ouvre avec `DriverManager.getConnection(url, utilisateur, motDePasse)`. L’URL indique le type de base, le serveur et son nom. Ouvre toujours la connexion dans un try-with-resources pour qu’elle se ferme toute seule.' ],
          code: `String url = "jdbc:postgresql://localhost:5432/boutique";\ntry (Connection con = DriverManager.getConnection(url, "app", System.getenv("DB_PASSWORD"))) {\n    System.out.println("Connecté : " + con.getMetaData().getDatabaseProductName());\n} catch (SQLException e) {\n    System.out.println("Erreur de connexion : " + e.getMessage());\n}` },
        { h: 'Interroger avec PreparedStatement', p: [
          'Un `PreparedStatement` est une requête avec des trous `?` que l’on remplit avec `setString`, `setInt`... Les trous sont numérotés à partir de 1.',
          '`executeQuery()` renvoie un `ResultSet`, un curseur qui commence avant la première ligne : chaque `next()` avance d’une ligne et renvoie `false` quand il n’y en a plus. Les valeurs se lisent avec `getString("colonne")`, `getInt`...' ],
          code: `String sql = "SELECT nom, prix FROM produits WHERE prix < ? ORDER BY prix";\ntry (PreparedStatement ps = con.prepareStatement(sql)) {\n    ps.setDouble(1, 10.0);\n    try (ResultSet rs = ps.executeQuery()) {\n        while (rs.next()) {\n            System.out.println(rs.getString("nom") + " : " + rs.getDouble("prix"));\n        }\n    }\n}` },
        { h: 'Modifier des données et injection SQL', p: [
          '`executeUpdate()` exécute INSERT, UPDATE ou DELETE et renvoie combien de lignes ont changé.',
          'Ne construis jamais une requête en concaténant du texte tapé par l’utilisateur. Un nom comme `x\' OR \'1\'=\'1` changerait le sens de la requête : c’est l’injection SQL. Avec `?`, le pilote envoie les données à part et elles ne peuvent pas devenir du code.' ],
          code: `// MAUVAIS : vulnérable à l'injection SQL\n// String sql = "DELETE FROM utilisateurs WHERE email = '" + email + "'";\n\n// BON\ntry (PreparedStatement ps = con.prepareStatement("UPDATE produits SET prix = prix * 1.05 WHERE categorie = ?")) {\n    ps.setString(1, "boissons");\n    int lignes = ps.executeUpdate();\n    System.out.println(lignes + " produits mis à jour");\n}` },
        { h: 'Transactions', p: [
          'Par défaut, chaque instruction se valide toute seule (auto-commit). Quand plusieurs opérations doivent toutes réussir ou aucune, désactive-le avec `setAutoCommit(false)`, valide à la fin avec `commit()` et, si quelque chose échoue, annule avec `rollback()`.',
          'Les grandes applications utilisent souvent JPA/Hibernate ou Spring Data, qui génèrent le SQL pour toi, mais elles utilisent toujours JDBC en dessous.' ] },
        { h: 'Exemple réel : un virement bancaire', real: true, p: [
          'Retirer de l’argent d’un compte et le mettre sur un autre doit se faire entièrement ou pas du tout. Si le second UPDATE échoue, le `rollback` rend l’argent au premier compte.' ],
          code: `static void virer(Connection con, int source, int cible, double montant) throws SQLException {\n    con.setAutoCommit(false);\n    try (PreparedStatement retirer = con.prepareStatement("UPDATE comptes SET solde = solde - ? WHERE id = ? AND solde >= ?");\n         PreparedStatement crediter = con.prepareStatement("UPDATE comptes SET solde = solde + ? WHERE id = ?")) {\n        retirer.setDouble(1, montant); retirer.setInt(2, source); retirer.setDouble(3, montant);\n        if (retirer.executeUpdate() == 0) throw new SQLException("Solde insuffisant");\n        crediter.setDouble(1, montant); crediter.setInt(2, cible);\n        crediter.executeUpdate();\n        con.commit();\n    } catch (SQLException e) {\n        con.rollback();\n        throw e;\n    } finally {\n        con.setAutoCommit(true);\n    }\n}` },
      ],
      x: [
        mc('Qu’est-ce que JDBC ?', ['L’API standard de Java pour parler aux bases de données relationnelles', 'Une base de données', 'Un framework web', 'Un langage de requêtes'], 'Chaque base de données fournit son pilote JDBC.'),
        fill(`PreparedStatement ps = con.prepareStatement(\n    "SELECT * FROM utilisateurs WHERE email = ___");\nps.setString(1, email);`, ['?', '$email', ':email', '%s'], 'En JDBC, les trous se marquent avec `?` et se remplissent avec les méthodes `set...`.'),
        mc('Pourquoi utiliser `PreparedStatement` au lieu de concaténer du texte dans la requête ?', ['Il évite l’injection SQL en envoyant les données à part de la requête', 'Il est obligatoire dans MySQL', 'Il rend la requête asynchrone', 'Pour aucune raison particulière'], 'Les données ne sont jamais interprétées comme du SQL.'),
        fill(`try (ResultSet rs = ps.executeQuery()) {\n    while (rs.___()) {\n        System.out.println(rs.getString("nom"));\n    }\n}`, ['next', 'hasNext', 'read', 'fetch'], '`next()` avance à la ligne suivante et renvoie `false` quand il n’en reste plus.'),
        mc('Que renvoie `executeUpdate()` ?', ['Le nombre de lignes affectées', 'Un ResultSet', 'true ou false', 'Rien'], 'Il sert pour INSERT, UPDATE et DELETE.'),
        ord('Remplis le premier trou de la requête avec l’e-mail', ['ps', '.', 'setString', '(', '1', ',', 'email', ')', ';'], ['setText', '0'], 'Les trous sont numérotés à partir de 1, pas de 0.'),
        mc('Que fait `con.rollback()` ?', ['Il annule les changements de la transaction en cours', 'Il valide les changements', 'Il ferme la connexion', 'Il répète la dernière requête'], 'On l’utilise dans le `catch` quand une opération de la transaction échoue.'),
        mc('Si `nom` vaut `x\' OR \'1\'=\'1`, que se passe-t-il quand cette requête s’exécute ?', ['Elle renvoie tous les utilisateurs : c’est une injection SQL', 'Elle lève toujours SQLException', 'Elle ne renvoie rien', 'Elle cherche un utilisateur avec ce nom littéral'], 'La condition devient `nom = \'x\' OR \'1\'=\'1\'`, vraie pour toutes les lignes. Avec `PreparedStatement` et `?`, ça n’arriverait pas.', `String sql = "SELECT * FROM utilisateurs WHERE nom = '" + nom + "'";\nResultSet rs = con.createStatement().executeQuery(sql);`),
      ],
    },
    // ───────────── Jour 29 ─────────────
    {
      t: 'API REST avec Spring Boot',
      d: '@RestController, mappings, @PathVariable, @RequestBody, ResponseEntity et couches.',
      guide: [
        { h: 'Qu’est-ce que Spring Boot', p: [
          'Spring est le framework le plus utilisé pour les applications Java côté serveur, et Spring Boot configure presque tout pour toi : il apporte un serveur web intégré, donc ton application démarre avec un simple `main`.',
          'Un nouveau projet se génère sur start.spring.io en choisissant la dépendance « Spring Web ». On le lance avec `./mvnw spring-boot:run` ou `./gradlew bootRun` et il écoute sur http://localhost:8080.' ],
          code: `@SpringBootApplication\npublic class BoutiqueApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(BoutiqueApplication.class, args);\n    }\n}` },
        { h: 'Contrôleurs et routes', p: [
          '`@RestController` marque une classe qui répond aux requêtes HTTP. Chaque méthode est associée à une route avec `@GetMapping`, `@PostMapping`, `@PutMapping` ou `@DeleteMapping`.',
          'Ce que renvoie la méthode est converti automatiquement en JSON (avec la bibliothèque Jackson), à partir des getters ou des composants du record.' ],
          code: `record Salutation(String message, int longueur) {}\n\n@RestController\npublic class SalutationController {\n    @GetMapping("/salutation")\n    public Salutation salutation(@RequestParam(defaultValue = "le monde") String nom) {\n        String m = "Bonjour, " + nom;\n        return new Salutation(m, m.length());\n    }\n}\n// GET /salutation?nom=Ana  ->  {"message":"Bonjour, Ana","longueur":12}` },
        { h: 'Paramètres, corps et codes de statut', p: [
          '`@PathVariable` lit une partie de la route (`/taches/{id}`), `@RequestParam` un paramètre de l’URL (`?q=pain`) et `@RequestBody` transforme le JSON du corps de la requête en objet Java.',
          'Pour choisir le code de statut, renvoie un `ResponseEntity` : `ResponseEntity.ok(x)` donne 200, `ResponseEntity.status(HttpStatus.CREATED).body(x)` donne 201 et `ResponseEntity.notFound().build()` donne 404.' ] },
        { h: 'Couches et injection de dépendances', p: [
          'Une application bien rangée sépare les responsabilités : le contrôleur parle HTTP, le service (`@Service`) contient la logique métier et le dépôt accède aux données. Avec Spring Data JPA, un dépôt n’est qu’une interface.',
          'Spring crée ces objets et les relie : il suffit de les demander dans le constructeur. Cette injection par constructeur rend les dépendances claires, permet qu’elles soient `final` et facilite leur remplacement dans les tests.' ],
          code: `@Service\npublic class PrixService {\n    public double avecTva(double base) { return base * 1.21; }\n}\n\n@RestController\npublic class PrixController {\n    private final PrixService service;\n\n    public PrixController(PrixService service) {  // Spring l'injecte\n        this.service = service;\n    }\n\n    @GetMapping("/prix/{base}")\n    public double prix(@PathVariable double base) {\n        return service.avecTva(base);\n    }\n}` },
        { h: 'Exemple réel : une API de tâches', real: true, p: [
          'Une API complète pour une liste de tâches : lister, consulter une tâche, créer et supprimer. Les données sont gardées en mémoire ; les passer dans une base de données ne toucherait que la couche dépôt.' ],
          code: `record Tache(long id, String titre, boolean faite) {}\nrecord NouvelleTache(String titre) {}\n\n@RestController\n@RequestMapping("/taches")\npublic class TacheController {\n    private final Map<Long, Tache> taches = new ConcurrentHashMap<>();\n    private final AtomicLong prochainId = new AtomicLong(1);\n\n    @GetMapping\n    public Collection<Tache> lister() { return taches.values(); }\n\n    @GetMapping("/{id}")\n    public ResponseEntity<Tache> voir(@PathVariable long id) {\n        Tache t = taches.get(id);\n        return t == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(t);\n    }\n\n    @PostMapping\n    public ResponseEntity<Tache> creer(@RequestBody NouvelleTache demande) {\n        if (demande.titre() == null || demande.titre().isBlank()) return ResponseEntity.badRequest().build();\n        Tache t = new Tache(prochainId.getAndIncrement(), demande.titre(), false);\n        taches.put(t.id(), t);\n        return ResponseEntity.status(HttpStatus.CREATED).body(t);\n    }\n\n    @DeleteMapping("/{id}")\n    public ResponseEntity<Void> supprimer(@PathVariable long id) {\n        return taches.remove(id) == null ? ResponseEntity.notFound().build() : ResponseEntity.noContent().build();\n    }\n}` },
      ],
      x: [
        mc('Quelle annotation marque une classe qui répond aux requêtes HTTP avec du JSON ?', ['@RestController', '@Service', '@Entity', '@Json'], '`@Service` sert à la logique métier et `@Entity` aux tables JPA.'),
        fill(`@___("/salutation")\npublic String salutation() {\n    return "Bonjour";\n}`, ['GetMapping', 'Get', 'Route', 'RequestGet'], '`@GetMapping` associe la méthode aux requêtes GET sur cette route.'),
        mc('Avec `@GetMapping("/utilisateurs/{id}")`, comment la méthode reçoit-elle l’`id` ?', ['Avec un paramètre @PathVariable long id', 'Avec @RequestBody long id', 'Avec @Param id', 'Avec request.get("id")'], '`@PathVariable` lit la partie de la route entre accolades.'),
        mc('Que fait `@RequestBody` ?', ['Il transforme le JSON du corps de la requête en objet Java', 'Il renvoie le corps en texte', 'Il valide l’URL', 'Il crée la table dans la base'], 'On l’utilise surtout dans les méthodes POST et PUT.'),
        fill(`return ResponseEntity.___(HttpStatus.CREATED).body(tache);`, ['status', 'code', 'with', 'send'], '`status` fixe le code HTTP et `body` le contenu de la réponse.'),
        mc('Quel avantage a l’injection de dépendances par constructeur ?', ['Les dépendances sont explicites, peuvent être final et se remplacent facilement dans les tests', 'Le code va plus vite', 'Elle n’a pas besoin de Spring', 'Elle crée chaque objet deux fois'], 'Spring passe au constructeur les objets dont la classe a besoin.'),
        typ('Reçois le paramètre q de l’URL /chercher?q=pain', `@GetMapping("/chercher")\npublic List<Produit> chercher(@___ String q) {\n    return service.chercher(q);\n}`, 'RequestParam', '`@RequestParam` lit les paramètres qui suivent `?` dans l’URL.'),
        mc('Quel JSON reçoit le client en appelant GET /tache ?', ['{"titre":"Réviser","faite":false}', 'Tache@1b6d3586', '{"getTitre":"Réviser","isFaite":false}', '"Réviser"'], 'Jackson utilise les getters : `getTitre()` donne la propriété "titre" et `isFaite()`, comme c’est un boolean, donne "faite".', `public class Tache {\n    private String titre = "Réviser";\n    private boolean faite = false;\n    public String getTitre() { return titre; }\n    public boolean isFaite() { return faite; }\n}\n\n@GetMapping("/tache")\npublic Tache tache() {\n    return new Tache();\n}`),
      ],
    },
    // ───────────── Jour 30 ─────────────
    {
      t: 'Conclusion',
      d: 'Révision finale du défi, bonnes pratiques, erreurs classiques et comment continuer.',
      guide: [
        { h: 'Ce que tu as appris', p: [
          'En 30 jours, tu es passé de `System.out.println("Bonjour, le monde")` à la création d’une API REST avec Spring Boot. Tu as vu les types, les collections, les classes, l’héritage, les interfaces, les exceptions, les génériques, les lambdas, les streams, la concurrence, les fichiers et les bases de données.',
          'L’important n’est pas de mémoriser chaque méthode, mais de comprendre les idées : des types vérifiés par le compilateur, des objets qui encapsulent leur état et du code qui se lit comme une description du problème.' ] },
        { h: 'Bonnes pratiques', p: [
          'Utilise des noms qui expliquent l’intention, des méthodes courtes qui font une seule chose et `final` chaque fois que possible : les objets immuables (comme les records) évitent beaucoup d’erreurs.',
          'Programme pour des interfaces (`List`, pas `ArrayList`), ferme les ressources avec try-with-resources, ne laisse jamais de `catch` vide et écris des tests JUnit pour ce qui compte.' ],
          code: `// Moins clair\nArrayList<Object> l = new ArrayList<>();\nfor (int i = 0; i < commandes.size(); i++) {\n    if (commandes.get(i).total() > 100) l.add(commandes.get(i).client());\n}\n\n// Plus clair\nList<String> clientsVip = commandes.stream()\n    .filter(c -> c.total() > 100)\n    .map(Commande::client)\n    .toList();` },
        { h: 'Erreurs classiques', p: [
          'Comparer des String avec `==` compare des références, pas le contenu : utilise `equals`. Pareil avec les `Integer` hors de l’intervalle -128 à 127.',
          'Modifier une liste pendant qu’on la parcourt avec for-each lève `ConcurrentModificationException` : utilise `removeIf`. Et si tu redéfinis `equals`, redéfinis aussi `hashCode`, sinon les `HashMap` et `HashSet` se comporteront mal.' ],
          code: `String a = new String("bonjour");\nSystem.out.println(a == "bonjour");       // false\nSystem.out.println(a.equals("bonjour"));  // true\n\nList<Integer> nums = new ArrayList<>(List.of(3, -1, 4, -5));\nnums.removeIf(n -> n < 0);\nSystem.out.println(nums);  // [3, 4]` },
        { h: 'Et maintenant ?', p: [
          'Choisis une voie : backend avec Spring Boot et Spring Data, Android (surtout avec Kotlin aujourd’hui, qui tourne sur la même JVM) ou systèmes de données avec Kafka ou Spark.',
          'Lis « Effective Java » de Joshua Bloch, entraîne-toi sur tes propres projets, publie-les sur GitHub et lis le code de projets open source. On apprend à programmer en programmant.' ] },
        { h: 'Exemple réel : ton projet final', real: true, p: [
          'Un gestionnaire de dépenses en console qui réunit une bonne partie du cours : des records pour les données, des fichiers pour les enregistrer et des streams pour le bilan. Enrichis-le à ta guise avec une base de données ou une API Spring Boot.' ],
          code: `record Depense(LocalDate date, String categorie, double montant) {\n    String versCsv() { return date + "," + categorie + "," + montant; }\n    static Depense depuisCsv(String ligne) {\n        String[] p = ligne.split(",");\n        return new Depense(LocalDate.parse(p[0]), p[1], Double.parseDouble(p[2]));\n    }\n}\n\npublic class Depenses {\n    public static void main(String[] args) throws IOException {\n        Path fichier = Path.of("depenses.csv");\n        List<Depense> depenses = List.of(\n            new Depense(LocalDate.of(2025, 3, 1), "repas", 42.5),\n            new Depense(LocalDate.of(2025, 3, 2), "transport", 12.0),\n            new Depense(LocalDate.of(2025, 3, 5), "repas", 18.3));\n        Files.write(fichier, depenses.stream().map(Depense::versCsv).toList());\n\n        Map<String, Double> bilan = Files.readAllLines(fichier).stream()\n            .map(Depense::depuisCsv)\n            .collect(Collectors.groupingBy(Depense::categorie, TreeMap::new,\n                     Collectors.summingDouble(Depense::montant)));\n        bilan.forEach((cat, total) -> System.out.printf("%-12s %8.2f%n", cat, total));\n    }\n}` },
      ],
      x: [
        out(`String a = new String("bonjour");\nString b = "bonjour";\nSystem.out.println((a == b) + " " + a.equals(b));`, ['false true', 'true true', 'true false', 'false false'], '`new String` crée un autre objet : `==` compare les références et donne false, `equals` compare le contenu.'),
        out(`Integer x = 127, y = 127, m = 1000, n = 1000;\nSystem.out.println((x == y) + " " + (m == n));`, ['true false', 'true true', 'false false', 'false true'], 'Java réutilise les objets Integer entre -128 et 127, donc x et y sont le même objet. 1000 est hors de ce cache. Compare toujours avec `equals`.'),
        mc('Que lève la suppression d’éléments d’une ArrayList pendant qu’on la parcourt avec for-each ?', ['ConcurrentModificationException', 'IndexOutOfBoundsException', 'NullPointerException', 'Rien'], 'Utilise `removeIf` ou un `Iterator` avec sa méthode `remove()`.'),
        fill(`List<Integer> nums = new ArrayList<>(List.of(3, -1, 4));\nnums.___(n -> n < 0);  // supprime les négatifs`, ['removeIf', 'removeAll', 'filter', 'delete'], '`removeIf` reçoit un prédicat et supprime les éléments qui le remplissent.'),
        out(`StringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 3; i++) sb.append(i).append(",");\nSystem.out.println(sb.reverse());`, [',2,1,0', '0,1,2,', '2,1,0,', ',0,1,2'], 'Le texte est "0,1,2," et `reverse()` l’inverse caractère par caractère.'),
        out(`System.out.println(10 / 4 + " " + 10 / 4.0 + " " + 10 % 4);`, ['2 2.5 2', '2.5 2.5 2', '2 2 2', '2 2.5 2.5'], 'Entre entiers, `/` supprime les décimales ; avec un `double`, non. `%` donne le reste : 2.'),
        mc('Quelle méthode faut-il toujours redéfinir quand on redéfinit `equals` ?', ['hashCode', 'toString', 'compareTo', 'clone'], 'Deux objets égaux doivent avoir le même hashCode, sinon `HashMap` et `HashSet` ne les trouveront pas.'),
        out(`record Depense(String categorie, double montant) {}\nList<Depense> depenses = List.of(\n    new Depense("repas", 12.5), new Depense("loisirs", 20.0),\n    new Depense("repas", 8.5), new Depense("transport", 3.0));\nString plusGrosse = depenses.stream()\n    .collect(Collectors.groupingBy(Depense::categorie, Collectors.summingDouble(Depense::montant)))\n    .entrySet().stream()\n    .max(Map.Entry.comparingByValue())\n    .map(Map.Entry::getKey)\n    .orElse("aucune");\nSystem.out.println(plusGrosse);`, ['repas', 'loisirs', 'transport', 'aucune'], 'En regroupant, repas fait 12.5 + 8.5 = 21.0, loisirs 20.0 et transport 3.0. `max` par valeur garde l’entrée repas et `getKey` donne son nom.'),
      ],
    },
  ],
}))(Sintaxis);
