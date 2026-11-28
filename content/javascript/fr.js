/* JavaScript · Français */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('javascript', 'fr', {
  tag: 'Du premier console.log à une boutique en ligne avec données, tests et Node.js : quatre semaines, avec un projet à la fin de chacune.',
  days: [
    // Jour 1
    {
      id: 'js-intro',
      t: 'Ton premier programme et la console',
      d: 'Ce qu’est JavaScript, où il s’exécute, ton premier script et la console pour voir ce qui se passe.',
      guide: [
        { h: 'Qu’est-ce que JavaScript ?', p: [
          'JavaScript est le langage de programmation du web. Brendan Eich l’a créé en 1995 pour le navigateur Netscape et aujourd’hui tous les navigateurs du monde le comprennent.',
          'Le HTML définit le contenu d’une page, le CSS son apparence et JavaScript son comportement : des menus qui s’ouvrent, des formulaires qui se valident, des cartes qui bougent.',
          'Son nom officiel en tant que standard est ECMAScript. Quand tu lis « ES6 » ou « ES2015 », il s’agit de la grande mise à jour de 2015, qui a apporté `let`, `const`, les fonctions fléchées et les classes.' ] },
        { h: 'Où il s’exécute', p: [
          'Dans le navigateur : ouvre la console avec F12 (ou Ctrl+Maj+J) et écris du code directement. Pour une page, enregistre le code dans un fichier `.js` et relie-le depuis le HTML.',
          'En dehors du navigateur : Node.js exécute JavaScript sur des serveurs et dans ton terminal. Installe-le depuis nodejs.org et exécute un fichier avec `node app.js`.',
          'L’attribut `defer` fait que le script s’exécute une fois le HTML chargé, ce qui lui permet de trouver les éléments de la page.' ],
          code: `<!-- index.html -->\n<script src="app.js" defer></script>\n\n// Dans le terminal, avec Node.js :\n// node app.js` },
        { h: 'Ton premier programme', p: [
          '`console.log()` affiche dans la console ce que tu lui passes entre parenthèses. Tu peux lui passer plusieurs valeurs séparées par des virgules : il les affiche séparées par une espace.',
          'Les textes se mettent entre guillemets doubles ou simples. Le point-virgule final est facultatif, mais le mettre toujours évite les surprises.' ],
          code: `console.log("Bonjour, le monde");  // Bonjour, le monde\nconsole.log(2 + 3);                // 5\nconsole.log("Total:", 10 * 3);     // Total: 30` },
        { h: 'Variables et commentaires', p: [
          'Une variable est une boîte avec un nom dans laquelle tu ranges une valeur. Utilise `const` pour les valeurs que tu ne réaffecteras pas et `let` pour celles qui changent. Évite `var`, l’ancienne manière.',
          'Ce qui suit `//` est un commentaire d’une ligne ; `/* ... */` couvre plusieurs lignes. JavaScript les ignore : ils servent à expliquer le pourquoi du code.',
          'Erreur typique : réaffecter une `const`. JavaScript lève `TypeError: Assignment to constant variable`.' ],
          code: `const nom = "Eva";   // ne changera pas\nlet age = 30;        // peut changer\nage = age + 1;\n/* On affiche le résultat\n   sur une seule ligne */\nconsole.log(nom, age);  // Eva 31` },
        { h: 'Au-delà de console.log', p: [
          '`console.log` accepte plusieurs arguments et les sépare par une espace. Dans le navigateur, les objets s’affichent de façon interactive.',
          '`console.info`, `console.warn` et `console.error` fonctionnent pareil, mais le navigateur les marque de couleurs et d’icônes et on peut les filtrer. `error` écrit en plus dans la sortie d’erreurs.' ],
          code: `const utilisateur = { nom: "Ana", points: 40 };\nconsole.log("Utilisateur :", utilisateur, "actif");\nconsole.warn("Il reste peu d’essais");\nconsole.error("Impossible d’enregistrer");` },
        { h: 'Exemple réel : partager l’addition au restaurant', real: true, p: [
          'Avec quelques lignes, tu résous déjà un problème du quotidien : partager une addition avec 10 % de pourboire entre amis.',
          '`toFixed(2)` arrondit à deux décimales et renvoie un texte, parfait pour afficher de l’argent.' ],
          code: `const addition = 84.5;\nconst personnes = 3;\nconst pourboire = addition * 0.1;\nconst parPersonne = (addition + pourboire) / personnes;\nconsole.log("Chacun paie", parPersonne.toFixed(2));  // Chacun paie 30.98` },
      ],
      x: [
        mc('Comment affiche-t-on un message dans la console en JavaScript ?', ['console.log("Bonjour")', 'print("Bonjour")', 'System.out.println("Bonjour")', 'echo "Bonjour"'], '`console.log` est la manière standard d’écrire dans la console. `print` vient de Python.'),
        mc('Comment écrit-on un commentaire d’une ligne ?', ['// commentaire', '# commentaire', '<!-- commentaire -->', '-- commentaire'], 'Tout ce qui suit `//` sur cette ligne est ignoré. `/* */` sert pour plusieurs lignes.'),
        mc('Où peut-on exécuter JavaScript ?', ['Dans le navigateur et en dehors avec Node.js', 'Seulement dans le navigateur', 'Seulement sous Windows', 'Seulement dans Java'], 'Tous les navigateurs l’exécutent, et Node.js l’amène sur les serveurs et dans le terminal.'),
        out(`console.log(2 + 3 * 4);`, ['14', '20', '24', '9'], 'La multiplication se calcule avant l’addition : 3 * 4 = 12 et 2 + 12 = 14.'),
        ord('Écris la ligne qui affiche Bonjour, le monde dans la console', ['console', '.', 'log', '(', '"Bonjour, le monde"', ')'], ['print', 'echo'], 'On appelle la méthode `log` de l’objet `console` avec le texte entre parenthèses.'),
        mc('En quoi `console.error` diffère-t-il de `console.log` ?', ['Il écrit dans la sortie d’erreurs et le navigateur le marque comme erreur', 'Il arrête le programme', 'Il lève une exception', 'Il n’y a aucune différence'], 'Pour lever une vraie erreur, on utilise `throw`.'),
        out(`const n = 5;\nconsole.log("Total:", n, "articles");`, ['Total: 5 articles', 'Total:5articles', 'Total: n articles', 'Total: 5, articles'], 'Les arguments s’affichent séparés par une espace.'),
        out(`let prix = 10;\nprix = prix * 2;\nconst livraison = 5;\nconsole.log("Total:", prix + livraison);`, ['Total: 25', 'Total: 15', 'Total:25', 'Erreur'], '`prix` passe à 20 et on ajoute la livraison : 25. `console.log` sépare ses arguments par une espace.'),
      ],
    },
    // Jour 2
    {
      id: 'js-types',
      t: 'Variables et types',
      d: 'let et const, les types primitifs, le texte avec les gabarits et passer du texte au nombre.',
      guide: [
        { h: 'Primitifs et objets', p: [
          'JavaScript a sept types primitifs : `string` (texte), `number` (nombres entiers ou décimaux), `boolean` (`true`/`false`), `undefined`, `null`, `bigint` et `symbol`. Tout le reste, comme les tableaux et les fonctions, ce sont des objets.',
          '`typeof` te donne le type d’une valeur. Attention à deux bizarreries : `typeof null` renvoie « object » à cause d’une erreur historique, et `typeof []` renvoie aussi « object ».',
          '`undefined` signifie « n’a pas encore de valeur » ; `null`, c’est toi qui le mets exprès pour dire « vide ».' ],
          code: `console.log(typeof "salut");    // string\nconsole.log(typeof 3.14);       // number\nconsole.log(typeof true);       // boolean\nconsole.log(typeof undefined);  // undefined\nconsole.log(typeof null);       // object  (bizarrerie historique)\nconsole.log(typeof [1, 2]);     // object` },
        { h: 'let, const et var', p: [
          'Utilise `const` par défaut et `let` seulement quand tu dois réaffecter. Ainsi, qui lit le code sait quelles valeurs changent.',
          '`var` est la manière d’avant 2015 : elle ne respecte pas les blocs `{ }` et on peut l’utiliser avant de la déclarer (elle vaut `undefined`), ce qui provoque des bugs difficiles à voir.' ] },
        { h: 'Textes et gabarits', p: [
          'Les textes se mettent entre guillemets doubles, simples ou accents graves. Les accents graves créent des gabarits : ils insèrent des expressions avec `${...}` et acceptent plusieurs lignes.',
          'Méthodes utiles : `length` (longueur), `toUpperCase()`, `toLowerCase()`, `trim()` (enlève les espaces aux extrémités), `includes()`, `slice(début, fin)` et `replace()`. Aucune ne modifie le texte d’origine : elles en renvoient un nouveau.' ],
          code: 'const nom = "Eva";\nconst points = 15;\nconsole.log(`${nom} a ${points} points`);  // Eva a 15 points\n\nconst t = "  JavaScript  ".trim();\nconsole.log(t.length);           // 10\nconsole.log(t.slice(0, 4));      // Java\nconsole.log(t.toUpperCase());    // JAVASCRIPT\nconsole.log(t.includes("Script")); // true' },
        { h: 'Nombres et conversions', p: [
          'Si l’un des opérandes de `+` est un texte, JavaScript concatène : `"5" + 2` donne « 52 ». Les autres opérateurs (`-`, `*`, `/`) transforment le texte en nombre : `"5" - 2` donne 3.',
          'Convertis de façon explicite pour ne pas dépendre de ces règles : `Number("42")`, `parseInt("42px")`, `parseFloat("3.5")` et `String(42)`.',
          'Si la conversion échoue, tu obtiens `NaN` (« not a number »), qui, curieusement, est de type `number`. Vérifie-le avec `Number.isNaN()`.' ],
          code: `console.log("5" + 2);           // 52\nconsole.log("5" - 2);           // 3\nconsole.log(Number("42") + 1);  // 43\nconsole.log(parseInt("42px"));  // 42\nconsole.log(Number("salut"));   // NaN` },
        { h: 'Exemple réel : nettoyer un nom venant d’un formulaire', real: true, p: [
          'Les utilisateurs tapent avec des espaces en trop et des majuscules au hasard. Avant d’enregistrer un nom, mieux vaut le normaliser.',
          'Enchaîner les méthodes est courant : chacune renvoie un nouveau texte sur lequel on applique la suivante.' ],
          code: `const saisie = "   aNA  ";\nconst propre = saisie.trim().toLowerCase();\nconst nom = propre[0].toUpperCase() + propre.slice(1);\nconsole.log(nom);         // Ana\nconsole.log(nom.length);  // 3` },
      ],
      x: [
        mc('Quel mot déclare une variable qui ne peut pas être réaffectée ?', ['const', 'let', 'var', 'static'], 'Avec `const`, tu ne peux plus réaffecter la variable ; avec `let`, si.'),
        out(`console.log(typeof 42);`, ['number', 'int', 'integer', 'Number'], 'JavaScript a un seul type pour les entiers et les décimaux : `number`.'),
        out(`let x;\nconsole.log(x);`, ['undefined', 'null', '0', 'Erreur'], 'Une variable déclarée sans valeur vaut `undefined`.'),
        out(`let a = "5";\nlet b = 2;\nconsole.log(a + b);`, ['52', '7', 'Erreur', 'NaN'], 'Si l’un des opérandes est un texte, `+` concatène au lieu d’additionner.'),
        out(`console.log("5" - 2);`, ['3', '52', 'NaN', 'Erreur'], 'L’opérateur `-` ne travaille qu’avec des nombres, il transforme donc "5" en 5.'),
        fill(`const s = "  salut  ";\nconsole.log(s.___());  // salut`, ['trim', 'strip', 'clean', 'trimAll'], '`trim()` enlève les espaces du début et de la fin. `strip` vient de Python.'),
        out(`const t = "JavaScript";\nconsole.log(t.length, t.slice(0, 4), t.toUpperCase().includes("SCRIPT"));`, ['10 Java true', '10 Jav true', '9 Java true', '10 Java false'], 'Il y a 10 lettres, `slice(0, 4)` prend les indices 0 à 3 et en majuscules il contient bien "SCRIPT".'),
        out('const nom = "ana";\nconst age = "30";\nconsole.log(`${nom.toUpperCase()} a ${Number(age) + 1} ans`);', ['ANA a 31 ans', 'ANA a 301 ans', 'ana a 31 ans', '${nom.toUpperCase()} a ${Number(age) + 1} ans'], 'Le gabarit évalue chaque `${...}`. `Number(age)` transforme "30" en 30, donc on additionne au lieu de concaténer.'),
      ],
    },
    // Jour 3
    {
      id: 'js-booleans',
      t: 'Opérations et comparaisons',
      d: 'Calculer, comparer avec === et combiner des conditions avec &&, || et !, et quelles valeurs comptent comme fausses.',
      guide: [
        { h: 'Booléens et comparaisons', p: [
          'Un booléen ne peut valoir que `true` ou `false`. Tu en obtiens un en comparant : `>`, `<`, `>=`, `<=`, `===` (égal) et `!==` (différent).',
          '`===` compare la valeur et le type. `==` convertit les types avant de comparer et donne des résultats étranges comme `0 == ""` (true). Utilise toujours `===` et `!==`.' ],
          code: `console.log(5 === "5");  // false\nconsole.log(5 == "5");   // true  (convertit le texte)\nconsole.log(3 !== 4);    // true\nconsole.log(10 >= 10);   // true` },
        { h: 'Truthy et falsy', p: [
          'Dans un `if`, n’importe quelle valeur est convertie en booléen. Il n’y a que six valeurs falsy : `false`, `0`, `""` (texte vide), `null`, `undefined` et `NaN`.',
          'Tout le reste est truthy, y compris « 0 », « false », `[]` et `{}`. Croire qu’un tableau vide est faux est une erreur classique.' ],
          code: `console.log(Boolean(0));     // false\nconsole.log(Boolean(""));    // false\nconsole.log(Boolean("0"));   // true\nconsole.log(Boolean([]));    // true` },
        { h: 'Opérateurs arithmétiques et d’affectation', p: [
          'En plus de `+ - * /`, tu as `%` (reste de la division) et `**` (puissance). La priorité est celle des maths : d’abord `**`, puis `* / %` et enfin `+ -`.',
          'Raccourcis : `x += 2` équivaut à `x = x + 2`, et `x++` ajoute 1. Le reste `%` sert à savoir si un nombre est pair (`n % 2 === 0`).' ],
          code: `console.log(10 % 3);     // 1\nconsole.log(2 ** 3);     // 8\nlet x = 5;\nx += 2;   // 7\nx++;      // 8\nconsole.log(x);          // 8` },
        { h: 'Opérateurs logiques', p: [
          '`&&` (et) est vrai si les deux côtés le sont ; `||` (ou) si au moins un l’est ; `!` inverse.',
          'Ils s’évaluent en court-circuit : dans `a && b`, si `a` est falsy, on ne regarde même pas `b`. C’est pourquoi `utilisateur && utilisateur.nom` n’échoue pas si `utilisateur` vaut `null`.' ] },
        { h: 'Exemple réel : peut-on entrer au concert ?', real: true, p: [
          'Un billet est valable si la personne en a un et, en plus, est majeure ou accompagnée. Les parenthèses regroupent la partie « ou » pour qu’elle soit évaluée en premier.',
          'La jauge se contrôle avec des opérateurs d’affectation et une comparaison : si on vend plus de billets que de places, on sait combien il y en a en trop.' ],
          code: `const age = 17;\nconst accompagne = true;\nconst aUnBillet = true;\nconsole.log(aUnBillet && (age >= 18 || accompagne));  // true\n\nconst jauge = 500;\nlet vendus = 480;\nvendus += 25;\nconsole.log(vendus > jauge, vendus - jauge);  // true 5` },
      ],
      x: [
        mc('Laquelle de ces valeurs est falsy ?', ['0', '"0"', '[]', '"false"'], 'Le nombre 0 est falsy. Tout texte non vide et tout tableau, même vide, sont truthy.'),
        out(`console.log(5 == "5", 5 === "5");`, ['true false', 'true true', 'false false', 'false true'], '`==` transforme "5" en nombre et donne `true` ; `===` compare aussi le type et donne `false`.'),
        out(`console.log(10 % 3, 2 ** 3);`, ['1 8', '3 6', '1 6', '3 8'], '`%` est le reste (10 divisé par 3 donne 3, reste 1) et `**` la puissance (2³ = 8).'),
        out(`let x = 5;\nx += 2;\nx++;\nconsole.log(x);`, ['8', '7', '6', '52'], '5 + 2 = 7, et `x++` ajoute encore 1.'),
        fill(`const peutEntrer = age >= 18 ___ aUnBillet;`, ['&&', 'and', '||', '&&&'], 'Les deux conditions doivent être remplies, on utilise donc `&&`. `and` vient de Python.'),
        out(`console.log(Boolean(""), Boolean("0"));`, ['false true', 'true true', 'false false', 'true false'], 'Le texte vide est falsy ; "0" est un texte non vide, donc truthy.'),
        out(`console.log(7 > 3 && 2 > 5, 7 > 3 || 2 > 5, !(7 > 3));`, ['false true false', 'true true false', 'false false true', 'true false false'], '`&&` exige que les deux côtés soient vrais, `||` un seul, et `!` inverse le résultat.'),
        out(`const age = 20;\nconst membre = false;\nconst reduction = age < 25 || membre;\nconsole.log(reduction, !reduction && age > 18, 7 + 3 * 2 ** 2);`, ['true false 19', 'true true 19', 'true false 40', 'false false 19'], '`age < 25` est vrai, donc `||` donne true ; `!true` est false ; et 2 ** 2 = 4, 3 * 4 = 12, 7 + 12 = 19.'),
      ],
    },
    // Jour 4
    {
      id: 'js-conditionals',
      t: 'Prendre des décisions',
      d: 'if, else if et else, le ternaire, switch et les valeurs par défaut avec ?? et ?.',
      guide: [
        { h: 'if, else if et else', p: [
          '`if` exécute un bloc seulement si la condition est vraie. Tu peux enchaîner des alternatives avec `else if` et finir par un `else` pour les autres cas.',
          'Les conditions sont vérifiées dans l’ordre et seul le premier bloc qui correspond s’exécute. Il vaut donc mieux commencer par le cas le plus restrictif.' ],
          code: `const temperature = 28;\nif (temperature > 30) {\n  console.log("Il fait très chaud");\n} else if (temperature > 20) {\n  console.log("Il fait bon");\n} else {\n  console.log("Couvre-toi");\n}\n// Il fait bon` },
        { h: 'L’opérateur ternaire', p: [
          '`condition ? valeurSiOui : valeurSiNon` choisit entre deux valeurs en une seule expression. Il est idéal pour affecter une variable ou construire un texte.',
          'N’enchaîne pas trop de ternaires : s’il y a plus de deux cas, un `if` ou un `switch` se lit mieux.' ],
          code: `const age = 17;\nconst acces = age >= 18 ? "autorisé" : "refusé";\nconsole.log(acces);  // refusé` },
        { h: 'switch', p: [
          '`switch` compare une valeur à plusieurs `case` avec `===`. Chaque cas se termine par `break` ; si tu l’oublies, l’exécution continue dans le cas suivant.',
          'Ce passage au cas suivant sert à regrouper des valeurs, et `default` récupère ce qui ne correspond à aucun cas.' ],
          code: `const jour = "sam";\nswitch (jour) {\n  case "sam":\n  case "dim":\n    console.log("Week-end");\n    break;\n  default:\n    console.log("Jour de semaine");\n}\n// Week-end` },
        { h: 'Valeurs par défaut : ?? et ?.', p: [
          '`a ?? b` renvoie `b` seulement si `a` vaut `null` ou `undefined`. C’est mieux que `||` pour les valeurs par défaut, car `||` remplace aussi 0 et "", qui peuvent être des valeurs valables.',
          'Le chaînage optionnel `?.` lit une propriété sans échouer si ce qui précède vaut `null` ou `undefined` : il renvoie `undefined` au lieu de lever une `TypeError`.' ],
          code: `const stock = 0;\nconsole.log(stock || 10);  // 10  (on perd le 0 !)\nconsole.log(stock ?? 10);  // 0\n\nconst utilisateur = { profil: null };\nconsole.log(utilisateur.profil?.photo);  // undefined` },
        { h: 'Exemple réel : calculer la livraison d’une boutique en ligne', real: true, p: [
          'Les boutiques offrent souvent la livraison à partir d’un certain montant et facturent différemment selon le pays. C’est un cas parfait pour `if` / `else if`.' ],
          code: `const total = 42;\nconst pays = "FR";\nlet livraison;\nif (total >= 50) {\n  livraison = 0;\n} else if (pays === "FR") {\n  livraison = 4.99;\n} else {\n  livraison = 9.99;\n}\nconsole.log("Livraison :", livraison);  // Livraison : 4.99` },
      ],
      x: [
        out(`const age = 20;\nconst r = age >= 18 ? "adulte" : "mineur";\nconsole.log(r);`, ['adulte', 'mineur', 'true', '20'], 'La condition est vraie, donc le ternaire renvoie la première valeur.'),
        fill(`if (x > 10) {\n  console.log("beaucoup");\n} ___ (x > 5) {\n  console.log("un peu");\n}`, ['else if', 'elif', 'elseif', 'else'], 'En JavaScript, les alternatives s’enchaînent avec `else if`. `elif` vient de Python.'),
        out(`const n = 0;\nif (n) {\n  console.log("oui");\n} else {\n  console.log("non");\n}`, ['non', 'oui', '0', 'undefined'], '0 est falsy, donc c’est le `else` qui s’exécute.'),
        out(`console.log(null ?? "valeur", 0 || "autre");`, ['valeur autre', 'null autre', 'valeur 0', 'null 0'], '`??` remplace `null`. `||` remplace toute valeur falsy, y compris 0.'),
        out(`const jour = "sam";\nswitch (jour) {\n  case "sam":\n  case "dim":\n    console.log("week-end");\n    break;\n  default:\n    console.log("semaine");\n}`, ['week-end', 'semaine', 'week-end\nsemaine', 'sam'], 'Les `case` vides sont regroupés : "sam" tombe dans le bloc de "dim", et `break` évite d’arriver à `default`.'),
        out(`const obj = { a: 1 };\nconsole.log(obj.b?.c);`, ['undefined', 'Erreur', 'null', '""'], '`obj.b` vaut `undefined` et `?.` s’arrête là en renvoyant `undefined` au lieu de lever une erreur.'),
        typ('Utilise l’opérateur qui donne une valeur par défaut seulement si le nom vaut null ou undefined', `const nom = utilisateur.nom ___ "Anonyme";`, '??', '`??` respecte des valeurs comme "" ou 0 et ne remplace que `null` et `undefined`.'),
        out(`const note = 7.5;\nlet mention;\nif (note >= 9) mention = "Très bien";\nelse if (note >= 7) mention = "Bien";\nelse if (note >= 5) mention = "Passable";\nelse mention = "Insuffisant";\nconst extra = note > 7 ? "+" : "";\nconsole.log(mention + extra);`, ['Bien+', 'Bien', 'Très bien+', 'Passable+'], '7.5 n’atteint pas 9 mais atteint 7, donc c’est « Bien » ; en plus elle dépasse 7 et le ternaire ajoute « + ».'),
      ],
    },
    // Jour 5
    {
      id: 'js-loops',
      t: 'Boucles',
      d: 'for, while, for...of et for...in, break et continue : répéter un travail sans copier de code.',
      guide: [
        { h: 'La boucle for', p: [
          '`for (début; condition; pas)` répète un bloc un nombre connu de fois. Le plus courant est de compter avec `let i = 0` tant que `i < n`, en ajoutant 1 à chaque tour.',
          'Erreur typique : utiliser `i <= tableau.length`. Le dernier indice est `length - 1`, donc le dernier tour lirait `undefined`.' ],
          code: `for (let i = 0; i < 3; i++) {\n  console.log("Tour", i);\n}\n// Tour 0\n// Tour 1\n// Tour 2` },
        { h: 'while et do...while', p: [
          '`while` répète tant que la condition est vraie ; utilise-le quand tu ne sais pas combien de tours il y aura. Assure-toi que quelque chose change à l’intérieur, sinon tu auras une boucle infinie.',
          '`do...while` vérifie la condition à la fin, donc le bloc s’exécute au moins une fois.' ],
          code: `let solde = 100;\nlet mois = 0;\nwhile (solde > 0) {\n  solde -= 30;\n  mois++;\n}\nconsole.log(mois);  // 4` },
        { h: 'for...of et for...in', p: [
          'Les tableaux (des valeurs entre crochets) et les objets (des paires clé-valeur entre accolades) apparaissent ici pour la première fois. Pour l’instant, il suffit de savoir que `for...of` parcourt les valeurs et `for...in` les clés ; tu les verras en détail aux jours 8 et 9.',
          '`for...of` parcourt les valeurs de n’importe quel itérable : tableaux, textes, Set ou Map. C’est la manière la plus claire de parcourir un tableau.',
          '`for...in` parcourt les clés d’un objet. Avec un tableau, il te donnerait les indices sous forme de texte ("0", "1"...), ne l’utilise donc pas pour les tableaux.' ],
          code: `for (const lettre of "sol") console.log(lettre);  // s, o, l (une par ligne)\n\nconst ages = { Ana: 30, Leo: 8 };\nfor (const nom in ages) {\n  console.log(nom, ages[nom]);\n}\n// Ana 30\n// Leo 8` },
        { h: 'break et continue', p: [
          '`break` sort complètement de la boucle : utile quand tu as déjà trouvé ce que tu cherchais. `continue` saute le reste du tour actuel et passe au suivant.',
          'Utilise-les avec modération : une boucle pleine de `break` et de `continue` est difficile à suivre. Souvent, une méthode de tableau comme `find` ou `filter` (jour 10) l’exprime mieux.' ],
          code: `const notes = [7, 3, 9, 4];\nfor (const n of notes) {\n  if (n < 5) continue;   // saute les notes insuffisantes\n  console.log("Reçu :", n);\n}\n// Reçu : 7\n// Reçu : 9` },
        { h: 'Exemple réel : total d’un ticket et l’article le plus cher', real: true, p: [
          'Parcourir une liste en accumulant des résultats est l’usage le plus courant d’une boucle : additionner des montants, chercher un maximum, compter des cas.' ],
          code: `const prix = [3.5, 12, 7.25, 1.99];\nlet total = 0;\nlet plusCher = 0;\nfor (const p of prix) {\n  total += p;\n  if (p > plusCher) plusCher = p;\n}\nconsole.log(total.toFixed(2), plusCher);  // 24.74 12` },
      ],
      x: [
        out(`for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`, ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', '3'], '`i` commence à 0 et la boucle s’arrête quand il atteint 3, sans exécuter ce tour.'),
        fill(`for (const fruit ___ ["poire", "raisin"]) {\n  console.log(fruit);\n}`, ['of', 'in', 'from', 'at'], '`for...of` parcourt les valeurs du tableau.'),
        out(`let i = 0;\nwhile (i < 3) i++;\nconsole.log(i);`, ['3', '2', '4', '0'], 'La boucle s’arrête quand `i` vaut 3, et c’est cette valeur qui s’affiche.'),
        typ('Sors de la boucle dès que tu trouves le nombre cherché', `for (const n of nombres) {\n  if (n === cherche) ___;\n}`, ['break', 'break;'], '`break` termine la boucle immédiatement.'),
        out(`for (const i in ["a", "b"]) {\n  console.log(i);\n}`, ['0\n1', 'a\nb', '["a", "b"]', 'undefined'], '`for...in` parcourt les clés (les indices) ; `for...of` parcourt les valeurs.'),
        out(`let s = "";\nfor (const c of "abc") {\n  s = c + s;\n}\nconsole.log(s);`, ['cba', 'abc', 'c', 'bca'], 'Chaque lettre se place devant ce qui est accumulé, donc le texte finit inversé.'),
        out(`let s = 0;\nfor (let i = 1; i <= 10; i++) {\n  if (i % 2) continue;\n  s += i;\n}\nconsole.log(s);`, ['30', '25', '55', '10'], '`i % 2` vaut 1 (truthy) pour les impairs, qui sont sautés : 2 + 4 + 6 + 8 + 10 = 30.'),
        out(`const notes = [8, 3, 10, 6, 2];\nlet recus = 0;\nlet somme = 0;\nfor (const n of notes) {\n  if (n < 5) continue;\n  recus++;\n  somme += n;\n}\nconsole.log(recus, somme / recus);`, ['3 8', '5 5.8', '3 4.8', '2 9'], 'On saute le 3 et le 2. Il reste 8, 10 et 6 : trois reçus dont la somme est 24, et 24 / 3 = 8.'),
      ],
    },
    // Jour 6
    {
      id: 'js-functions',
      t: 'Fonctions',
      d: 'Déclarations de fonctions et fonctions fléchées, paramètres par défaut et rest, return et portée.',
      guide: [
        { h: 'Déclarer et appeler des fonctions', p: [
          'Une fonction est un bloc de code nommé que tu peux réutiliser. On la déclare avec `function nom(paramètres) { ... }` et on l’appelle avec `nom(arguments)`.',
          '`return` renvoie une valeur et termine la fonction. S’il n’y a pas de `return`, la fonction renvoie `undefined` : l’oublier est une erreur très courante.' ],
          code: `function aire(largeur, hauteur) {\n  return largeur * hauteur;\n}\nconsole.log(aire(3, 4));  // 12\n\nfunction saluer(nom) {\n  console.log("Bonjour " + nom);  // ne renvoie rien\n}\nconsole.log(saluer("Ana"));  // Bonjour Ana, puis undefined` },
        { h: 'Paramètres par défaut et rest', p: [
          'Un paramètre peut avoir une valeur par défaut, utilisée si tu ne passes pas cet argument : `function f(x = 1)`.',
          '`...reste` réunit tous les arguments restants dans un tableau. Ainsi, une fonction accepte n’importe quel nombre de valeurs.' ],
          code: 'function saluer(nom = "ami") {\n  return `Bonjour, ${nom}`;\n}\nconsole.log(saluer());       // Bonjour, ami\n\nfunction additionner(...nums) {\n  let total = 0;\n  for (const n of nums) total += n;\n  return total;\n}\nconsole.log(additionner(1, 2, 3));  // 6' },
        { h: 'Fonctions fléchées', p: [
          'Les fonctions fléchées sont une manière courte d’écrire des fonctions : `const double = (n) => n * 2`. Si le corps est une seule expression, le `return` est implicite.',
          'Avec des accolades, il faut un `return` explicite : `(n) => { return n * 2; }`. Elles sont parfaites pour les petites fonctions qu’on passe à d’autres (tu le verras au jour 10).' ],
          code: `const double = (n) => n * 2;\nconst coucou = () => "Salut !";\nconst max = (a, b) => {\n  if (a > b) return a;\n  return b;\n};\nconsole.log(double(5), coucou(), max(3, 8));  // 10 Salut ! 8` },
        { h: 'Portée et hoisting', p: [
          'Les variables déclarées dans une fonction (ou dans un bloc `{ }` avec `let`/`const`) n’existent que là. Une variable interne qui a le même nom qu’une externe la « masque » sans la modifier.',
          'Les déclarations `function` sont remontées (hoisting) : tu peux les appeler avant la ligne où elles sont écrites. Les fonctions rangées dans une `const`, non : les appeler avant lève une `ReferenceError`.' ],
          code: `console.log(carre(4));  // 16, ça marche grâce au hoisting\nfunction carre(n) {\n  return n * n;\n}\n\nlet x = 1;\nfunction changer() {\n  let x = 2;   // une autre variable, qui n’existe qu’ici\n  return x;\n}\nconsole.log(changer(), x);  // 2 1` },
        { h: 'Exemple réel : prix final avec remise et TVA', real: true, p: [
          'Une boutique doit calculer le prix final à de nombreux endroits : panier, facture, e-mail de confirmation. Une fonction évite de répéter la formule et de se tromper.',
          'Arrondir avec `Math.round(x * 100) / 100` laisse le résultat sous forme de nombre à deux décimales.' ],
          code: `function prixFinal(base, remise = 0, tva = 0.2) {\n  const apresRemise = base * (1 - remise);\n  return Math.round(apresRemise * (1 + tva) * 100) / 100;\n}\nconsole.log(prixFinal(100));        // 120\nconsole.log(prixFinal(100, 0.2));   // 96\nconsole.log(prixFinal(50, 0, 0.1)); // 55` },
      ],
      x: [
        fill(`const double = (n) ___ n * 2;`, ['=>', '->', '=', ':'], 'Les fonctions fléchées utilisent `=>`. Avec une seule expression, le `return` est implicite.'),
        out(`function saluer(n = "ami") {\n  return "Bonjour " + n;\n}\nconsole.log(saluer());`, ['Bonjour ami', 'Bonjour undefined', 'Bonjour', 'Erreur'], 'Si tu ne passes pas l’argument, la valeur par défaut est utilisée.'),
        typ('Fais en sorte que la fonction renvoie l’aire du cercle', `function aire(r) {\n  ___ Math.PI * r * r;\n}`, 'return', 'Sans `return`, la fonction calculerait la valeur mais renverrait `undefined`.'),
        out(`const f = function (x) {\n  return x * x;\n};\nconsole.log(f(4));`, ['16', '8', 'x * x', 'undefined'], 'C’est une expression de fonction rangée dans une variable : 4 * 4 = 16.'),
        out(`console.log(f());\n\nfunction f() {\n  return "prêt";\n}`, ['prêt', 'undefined', 'Erreur', 'f'], 'Les déclarations `function` sont remontées : on peut les utiliser avant qu’elles soient écrites.'),
        out(`let x = 1;\nfunction changer() {\n  let x = 2;\n  return x;\n}\nconsole.log(changer(), x);`, ['2 1', '2 2', '1 1', '1 2'], 'Le `x` intérieur est une autre variable locale ; le `x` extérieur vaut toujours 1.'),
        out(`function additionner(...n) {\n  let t = 0;\n  for (const v of n) t += v;\n  return t;\n}\nconsole.log(additionner(1, 2, 3), additionner());`, ['6 0', '6 undefined', '[1, 2, 3] 0', '123 0'], '`...n` réunit les arguments dans un tableau. Sans argument, le tableau est vide et le total reste à 0.'),
        out(`const remise = (prix, pct = 10) => prix - prix * pct / 100;\nfunction total(...prix) {\n  let t = 0;\n  for (const p of prix) t += remise(p);\n  return t;\n}\nconsole.log(total(100, 50), remise(200, 50));`, ['135 100', '150 100', '135 190', '15 100'], 'Avec les 10 % par défaut, 100 devient 90 et 50 devient 45 : total 135. Avec 50 %, 200 devient 100.'),
      ],
    },
    // Jour 7
    {
      id: 'js-workshop-register',
      t: 'L’atelier de Kibi : la caisse enregistreuse',
      d: 'Projet de la semaine 1 : une caisse dans le navigateur qui demande les prix, additionne, applique les remises et imprime le ticket dans la console.',
      guide: [
        { h: 'La commande', p: [
          'Kibi ouvre une boutique de graines et a besoin d’une caisse enregistreuse. On la fait dans le navigateur : elle demande les prix dans une boîte de dialogue, additionne, applique une remise quand il le faut et imprime le ticket dans la console.',
          'Cet atelier réunit toute la semaine : la console, les variables, les opérations, les décisions, les boucles et les fonctions. Chaque étape fonctionne seule : colle-la dans la console du navigateur (F12) et vérifie-la avant de continuer.' ] },
        { h: 'Étape 1 : une fonction par règle', p: [
          'La boutique fait 10 % de remise dès 50 € et 5 % dès 20 €. On l’écrit comme une fonction pour pouvoir l’essayer avec plusieurs totaux sans répéter de code.',
          'L’ordre des `if` compte : le palier le plus haut passe en premier, car 60 € respecte aussi `>= 20`. Chaque `return` sort de la fonction dès qu’il trouve son palier.' ],
          code: `function remise(total) {\n  if (total >= 50) return total * 0.1;\n  if (total >= 20) return total * 0.05;\n  return 0;\n}\n\nconsole.log(remise(42.8).toFixed(2));  // 2.14\nconsole.log(remise(10));               // 0` },
        { h: 'Étape 2 : demander des prix jusqu’à ce qu’on tape 0', p: [
          '`prompt()` ouvre une boîte dans le navigateur et renvoie ce qui a été tapé sous forme de texte, ou `null` si on clique sur Annuler. `Number()` le transforme en nombre et donne `NaN` s’il n’y arrive pas.',
          'On ne sait pas combien d’articles il y aura, donc on utilise `while (true)` et on sort avec `break`. Si ce qui est tapé n’est pas un prix, `continue` redemande sans rien ajouter.' ],
          code: `let total = 0;\nlet articles = 0;\nwhile (true) {\n  const texte = prompt("Prix (0 pour terminer)");\n  if (texte === null) break;\n  const prix = Number(texte.replace(",", "."));\n  if (Number.isNaN(prix) || prix < 0) {\n    console.warn("Ce n'est pas un prix :", texte);\n    continue;\n  }\n  if (prix === 0) break;\n  total += prix;\n  articles++;\n}` },
        { h: 'Étape 3 : un ticket aligné', p: [
          '`toFixed(2)` garde toujours deux décimales et renvoie un texte. `padEnd(10)` complète avec des espaces à droite jusqu’à 10 caractères et `padStart(8)`, à gauche : ainsi les chiffres forment une colonne.',
          'Une petite fonction par ligne évite d’écrire trois fois le même format.' ],
          code: `function ligne(libelle, montant) {\n  return libelle.padEnd(10) + montant.toFixed(2).padStart(8);\n}\n\nconst total = 32.5;\nconst r = remise(total);\nconsole.log(ligne("Total", total));        // Total        32.50\nconsole.log(ligne("Remise", r));           // Remise        1.63\nconsole.log(ligne("À payer", total - r));  // À payer      30.88` },
        { h: 'Exemple réel : la caisse complète', real: true, p: [
          'On réunit les trois étapes dans un seul script. Enregistre-le sous `caisse.js`, relie-le à une page avec `<script src="caisse.js"></script>` et ouvre-la : le ticket apparaît dans la console.',
          'Idées pour aller plus loin : demander aussi la quantité de chaque article, ou calculer la monnaie à rendre à partir de ce que donne le client.' ],
          code: `const remise = (total) => (total >= 50 ? total * 0.1 : total >= 20 ? total * 0.05 : 0);\nconst ligne = (libelle, montant) => libelle.padEnd(10) + montant.toFixed(2).padStart(8);\n\nlet total = 0;\nlet articles = 0;\nwhile (true) {\n  const texte = prompt("Prix (0 pour terminer)");\n  if (texte === null) break;\n  const prix = Number(texte.replace(",", "."));\n  if (Number.isNaN(prix) || prix < 0) continue;\n  if (prix === 0) break;\n  total += prix;\n  articles++;\n}\n\nconst r = remise(total);\nconsole.log("Articles".padEnd(10) + String(articles).padStart(8));\nconsole.log(ligne("Total", total));\nconsole.log(ligne("Remise", r));\nconsole.log(ligne("À payer", total - r));` },
      ],
      x: [
        mc('Tu tapes 12 dans la boîte de `prompt()`. Que renvoie-t-elle ?', ['Le texte "12"', 'Le nombre 12', 'undefined', 'true'], '`prompt()` renvoie toujours du texte (ou `null` si on annule). Pour calculer avec, il faut le convertir avec `Number()`.'),
        out(`let total = 0;\ntotal += 2.5;\ntotal += 1.25;\nconsole.log(total.toFixed(2));`, ['3.75', '3.8', '3.750', '375'], '`+=` ajoute au total à chaque fois, et `toFixed(2)` l’affiche avec exactement deux décimales.'),
        fill(`const prix = ___("4.5") * 2;\nconsole.log(prix);  // 9`, ['Number', 'String', 'parseInt', 'Boolean'], '`Number("4.5")` donne 4.5. `parseInt` ne garderait que la partie entière et donnerait 8.'),
        out(`function remise(total) {\n  if (total >= 50) return total * 0.1;\n  if (total >= 20) return total * 0.05;\n  return 0;\n}\nconsole.log(remise(25), remise(60), remise(5));`, ['1.25 6 0', '2.5 6 0', '1.25 0.6 0', '0 6 0'], '25 tombe dans le palier à 5 %, 60 dans celui à 10 % et 5 n’a pas de remise.'),
        out(`let n = 0;\nlet total = 0;\nwhile (total < 10) {\n  total += 4;\n  n++;\n}\nconsole.log(n, total);`, ['3 12', '2 8', '3 10', '4 16'], 'La boucle ajoute 4 tant que le total est inférieur à 10 : 4, 8 puis 12. À 12, la condition est fausse et la boucle a tourné 3 fois.'),
        typ('Écris le mot qui sort de la boucle quand le prix vaut 0', `while (true) {\n  const prix = Number(prompt("Prix"));\n  if (prix === 0) ___;\n  total += prix;\n}`, 'break', '`break` termine la boucle dès que la condition est remplie.'),
        out(`console.log("Total".padEnd(8) + "|" + (9.5).toFixed(2).padStart(6));`, ['Total   |  9.50', 'Total|9.50', '   Total|9.50  ', 'Total   |9.5'], '`padEnd(8)` complète le texte à droite jusqu’à 8 caractères ; `padStart(6)` complète à gauche le nombre, déjà avec deux décimales.'),
        out(`const avecTva = (prix) => prix * 1.21;\nlet total = 0;\nfor (let prix = 5; prix < 30; prix += 10) {\n  if (prix > 20) continue;\n  total += prix;\n}\nconsole.log(total, avecTva(total).toFixed(2), total >= 20 ? "remise" : "sans remise");`, ['20 24.20 remise', '45 54.45 remise', '20 24.2 remise', '20 24.20 sans remise'], 'La boucle passe par 5, 15 et 25 ; le 25 est sauté avec `continue`, donc le total vaut 20. Avec la TVA cela fait 24.20, et comme il atteint 20, il a droit à la remise.'),
      ],
    },
    // Jour 8
    {
      id: 'js-arrays',
      t: 'Tableaux',
      d: 'Des listes de valeurs : créer, lire, ajouter, retirer, chercher, copier et trier.',
      guide: [
        { h: 'Créer et accéder', p: [
          'Un tableau est une liste ordonnée de valeurs entre crochets : `const notes = [7, 9, 4]`. Il peut mélanger les types, même si en général ils sont tous du même type.',
          'Les indices commencent à 0 : le premier élément est `notes[0]` et le dernier `notes[notes.length - 1]` ou, plus court, `notes.at(-1)`. Lire un indice qui n’existe pas donne `undefined`, pas une erreur.' ],
          code: `const fruits = ["poire", "raisin", "kiwi"];\nconsole.log(fruits[0]);       // poire\nconsole.log(fruits.length);   // 3\nconsole.log(fruits.at(-1));   // kiwi\nconsole.log(fruits[10]);      // undefined` },
        { h: 'Ajouter et enlever des éléments', p: [
          '`push` ajoute à la fin et `pop` enlève le dernier. `unshift` ajoute au début et `shift` enlève le premier.',
          '`splice(début, combien, ...nouveaux)` supprime ou insère à n’importe quelle position. Toutes ces méthodes modifient le tableau d’origine.' ],
          code: `const taches = ["courses", "étudier"];\ntaches.push("courir");      // ["courses", "étudier", "courir"]\ntaches.unshift("se lever"); // ["se lever", "courses", "étudier", "courir"]\ntaches.pop();               // enlève "courir"\ntaches.splice(1, 1);        // enlève "courses"\nconsole.log(taches);        // ["se lever", "étudier"]` },
        { h: 'Chercher, copier et joindre', p: [
          '`indexOf` renvoie la position d’une valeur (ou -1 si elle n’y est pas) et `includes` renvoie true ou false. `slice(début, fin)` copie un morceau sans inclure la fin.',
          '`join(séparateur)` assemble les éléments en un texte et `concat` (ou le spread `[...a, ...b]`) réunit des tableaux. Ces méthodes ne modifient pas l’original.' ],
          code: `const nums = [10, 20, 30, 40];\nconsole.log(nums.indexOf(30));    // 2\nconsole.log(nums.includes(50));   // false\nconsole.log(nums.slice(1, 3));    // [20, 30]\nconsole.log(nums.join(" | "));    // 10 | 20 | 30 | 40` },
        { h: 'Trier et les références', p: [
          '`sort()` sans argument trie comme du texte : `[3, 1, 10].sort()` donne `[1, 10, 3]`. Pour des nombres, passe une fonction : `sort((a, b) => a - b)`.',
          'Un tableau rangé dans une `const` ne peut pas être réaffecté, mais il peut être modifié de l’intérieur. Et `const b = a` ne copie pas : les deux variables pointent vers le même tableau. Pour copier, utilise `[...a]`.' ],
          code: `const prix = [30, 5, 120];\nprix.sort((a, b) => a - b);\nconsole.log(prix);  // [5, 30, 120]\n\nconst a = [1, 2];\nconst b = a;       // même liste\nconst c = [...a];  // copie\nb.push(3);\nconsole.log(a, c); // [1, 2, 3] [1, 2]` },
        { h: 'Exemple réel : la liste de courses', real: true, p: [
          'Une liste de courses est un tableau qui grandit et rétrécit. Avant d’ajouter, on vérifie qu’il n’y a pas de doublon, et on retire ce qu’on a déjà acheté.' ],
          code: `const courses = ["lait", "pain"];\ncourses.push("œufs");\nif (!courses.includes("café")) courses.push("café");\ncourses.splice(courses.indexOf("pain"), 1);  // le pain est déjà acheté\nconsole.log(courses.length, courses.join(", "));  // 3 lait, œufs, café` },
      ],
      x: [
        out(`const fruits = ["poire", "raisin"];\nfruits.push("kiwi");\nconsole.log(fruits.length);`, ['3', '2', 'kiwi', 'Erreur'], '`push` ajoute à la fin et la taille passe à 3.'),
        ord('Ajoute 4 à la fin du tableau nums', ['nums', '.', 'push', '(', '4', ')'], ['append', 'add'], 'Les tableaux JavaScript utilisent `push`. `append` vient de Python.'),
        fill(`const notes = [7, 9, 4];\nconst derniere = notes[notes.___ - 1];`, ['length', 'size', 'count', 'length()'], '`length` est une propriété, pas une méthode : pas de parenthèses. Le dernier indice est `length - 1`.'),
        out(`const a = [1, 2, 3];\nconsole.log(a.indexOf(2), a.includes(5));`, ['1 false', '2 false', '1 true', '-1 false'], 'Le 2 est à l’indice 1 et le 5 n’y est pas.'),
        out(`const a = [1, 2, 3, 4, 5];\nconsole.log(a.slice(1, 3));`, ['[2, 3]', '[1, 2, 3]', '[2, 3, 4]', '[1, 2]'], '`slice(début, fin)` inclut le début mais pas la fin, et ne modifie pas l’original.'),
        out(`console.log([3, 1, 10].sort());`, ['[1, 10, 3]', '[1, 3, 10]', '[10, 3, 1]', '[3, 1, 10]'], 'Sans fonction de comparaison, `sort` trie comme du texte et "10" passe avant "3". Utilise `sort((a, b) => a - b)` pour les nombres.'),
        out(`const a = [1, 2, 3];\nconst b = a;\nb.pop();\nconsole.log(a);`, ['[1, 2]', '[1, 2, 3]', '[3]', 'Erreur'], '`b` n’est pas une copie : il pointe vers le même tableau que `a`.'),
        out(`const file = ["Ana", "Leo", "Eva"];\nfile.push("Sol");\nconst servi = file.shift();\nfile.splice(1, 1, "Iker");\nconsole.log(servi, file);`, ['Ana ["Leo", "Iker", "Sol"]', 'Sol ["Ana", "Iker", "Eva"]', 'Ana ["Leo", "Iker", "Eva", "Sol"]', 'Ana ["Iker", "Eva", "Sol"]'], '`shift` sort "Ana" du début ; il reste ["Leo", "Eva", "Sol"] et `splice(1, 1, "Iker")` remplace "Eva" par "Iker".'),
      ],
    },
    // Jour 9
    {
      id: 'js-objects',
      t: 'Objets',
      d: 'Regrouper des données nommées : propriétés, méthodes, this, parcourir des objets et les copier.',
      guide: [
        { h: 'Créer des objets et lire des propriétés', p: [
          'Un objet regroupe des données liées sous forme de paires clé-valeur : `const user = { nom: "Ana", age: 30 }`. C’est la structure la plus utilisée en JavaScript.',
          'Tu lis une propriété avec un point (`user.nom`) ou avec des crochets (`user["nom"]`). Les crochets sont nécessaires quand la clé est dans une variable ou contient des espaces.' ],
          code: `const user = { nom: "Ana", age: 30, "ville natale": "Québec" };\nconsole.log(user.nom);              // Ana\nconsole.log(user["ville natale"]);  // Québec\n\nconst champ = "age";\nconsole.log(user[champ]);           // 30\nconsole.log(user.email);            // undefined` },
        { h: 'Ajouter, modifier et supprimer', p: [
          'Affecter une propriété qui n’existe pas la crée ; affecter une propriété qui existe la modifie. `delete obj.cle` la supprime.',
          'Pour savoir si une propriété existe, utilise `"cle" in obj`. Vérifier `obj.cle` ne suffit pas : la propriété pourrait exister avec la valeur `0` ou `""`.' ],
          code: `const voiture = { marque: "Seat" };\nvoiture.couleur = "rouge";   // ajoute\nvoiture.marque = "Fiat";     // modifie\ndelete voiture.couleur;      // supprime\nconsole.log(voiture);        // { marque: "Fiat" }\nconsole.log("couleur" in voiture);  // false` },
        { h: 'Méthodes et this', p: [
          'Une fonction rangée dans un objet s’appelle une méthode. Dans une méthode, `this` est l’objet qui l’appelle, et c’est ainsi qu’elle accède à ses propres propriétés.',
          'Attention : les fonctions fléchées n’ont pas leur propre `this`. Pour les méthodes, utilise la forme courte `nom() { ... }`.' ],
          code: 'const compte = {\n  titulaire: "Leo",\n  solde: 50,\n  deposer(montant) {\n    this.solde += montant;\n    return `${this.titulaire} : ${this.solde} €`;\n  },\n};\nconsole.log(compte.deposer(20));  // Leo : 70 €' },
        { h: 'Parcourir et copier des objets', p: [
          '`Object.keys(obj)` renvoie les clés, `Object.values(obj)` les valeurs et `Object.entries(obj)` des paires `[clé, valeur]`, idéales pour `for...of`.',
          'Les objets s’affectent par référence, comme les tableaux. Copie avec `{ ...obj }` (copie superficielle) ou `structuredClone(obj)` (copie profonde, objets imbriqués compris).' ],
          code: `const prix = { pain: 1.2, lait: 0.9 };\nfor (const [produit, p] of Object.entries(prix)) {\n  console.log(produit, p);\n}\n// pain 1.2\n// lait 0.9\n\nconst copie = { ...prix };\ncopie.pain = 2;\nconsole.log(prix.pain);  // 1.2, l’original ne change pas` },
        { h: 'Exemple réel : total d’une commande', real: true, p: [
          'Dans une boutique, une commande est un objet avec des quantités par produit, à côté d’une table de prix. En parcourant les entrées, on calcule le montant.' ],
          code: `const commande = {\n  client: "Ana",\n  produits: { tshirt: 2, casquette: 1 },\n};\nconst prix = { tshirt: 15, casquette: 9 };\nlet total = 0;\nfor (const [produit, quantite] of Object.entries(commande.produits)) {\n  total += quantite * prix[produit];\n}\nconsole.log(commande.client, "paie", total);  // Ana paie 39` },
      ],
      x: [
        fill(`const user = { nom: "Sol" };\nconsole.log(user___);`, ['.nom', '->nom', '::nom', '(nom)'], 'On y accède avec un point ou avec des crochets : `user["nom"]`.'),
        out(`const p = { nom: "Ana" };\np.age = 30;\nconsole.log(Object.keys(p));`, ['["nom", "age"]', '["Ana", 30]', '2', '{ nom, age }'], '`Object.keys` renvoie les noms des propriétés dans l’ordre de création.'),
        mc('Que renvoie `Object.entries({ a: 1, b: 2 })` ?', ['[["a", 1], ["b", 2]]', '["a", "b"]', '[1, 2]', '{ a: 1, b: 2 }'], 'Il renvoie un tableau de paires `[clé, valeur]`, parfait pour un `for...of`.'),
        out(`const p = { a: 1 };\nconst q = p;\nq.a = 5;\nconsole.log(p.a);`, ['5', '1', 'undefined', 'Erreur'], 'Les objets s’affectent par référence : `p` et `q` sont le même objet.'),
        out(`const o = { a: 1 };\nconsole.log("a" in o, o.b);`, ['true undefined', 'true null', 'false undefined', 'Erreur'], '`in` vérifie que la propriété existe ; lire une propriété inexistante donne `undefined`.'),
        out(`const voiture = {\n  marque: "Seat",\n  info() { return "Marque: " + this.marque; }\n};\nconsole.log(voiture.info());`, ['Marque: Seat', 'Marque: undefined', 'Marque: this.marque', 'Erreur'], 'Dans une méthode, `this` est l’objet qui l’appelle.'),
        out(`const cle = "couleur";\nconst o = { [cle]: "rouge" };\nconsole.log(o.couleur, o.cle);`, ['rouge undefined', 'undefined rouge', 'rouge rouge', 'Erreur'], '`[cle]` utilise la valeur de la variable ("couleur") comme nom de propriété ; aucune propriété ne s’appelle "cle".'),
        out(`const stock = { pommes: 4, poires: 0, raisins: 12 };\nstock.kiwis = 3;\ndelete stock.poires;\nlet total = 0;\nfor (const k in stock) total += stock[k];\nconsole.log(Object.keys(stock).length, total);`, ['3 19', '4 19', '3 16', '4 7'], 'Après avoir ajouté les kiwis et supprimé les poires, il reste 3 clés : pommes, raisins et kiwis. 4 + 12 + 3 = 19.'),
      ],
    },
    // Jour 10
    {
      id: 'js-higher-order',
      t: 'Transformer des tableaux',
      d: 'Passer des fonctions à d’autres fonctions : forEach, map, filter, find, reduce, some, every et sort.',
      guide: [
        { h: 'Les fonctions sont des valeurs', p: [
          'En JavaScript, les fonctions sont des valeurs : on les range dans des variables, on les passe en argument et on les renvoie. Une fonction d’ordre supérieur est une fonction qui en reçoit ou en renvoie une autre.',
          'La fonction que tu passes en argument s’appelle un callback. Remarque qu’on la passe sans parenthèses : `appliquer(double)` passe la fonction ; `appliquer(double())` passerait son résultat.' ],
          code: `function appliquer(fn, valeur) {\n  return fn(valeur);\n}\nconst double = (n) => n * 2;\nconsole.log(appliquer(double, 5));         // 10\nconsole.log(appliquer((n) => n + 1, 5));   // 6` },
        { h: 'forEach et map', p: [
          '`forEach` exécute le callback avec chaque élément et ne renvoie rien : utilise-le pour des effets comme afficher à l’écran.',
          '`map` crée un nouveau tableau de même taille avec chaque élément transformé. L’original ne change pas. Erreur typique : oublier le `return` quand le callback a des accolades.' ],
          code: `const prix = [10, 20, 30];\nprix.forEach((p, i) => console.log(i, p));\n// 0 10\n// 1 20\n// 2 30\nconst avecTaxe = prix.map((p) => p * 1.5);\nconsole.log(avecTaxe);  // [15, 30, 45]` },
        { h: 'filter, find et findIndex', p: [
          '`filter` renvoie un nouveau tableau avec les éléments qui remplissent la condition (le callback renvoie true).',
          '`find` renvoie le premier élément qui la remplit, ou `undefined` ; `findIndex` renvoie sa position, ou -1.' ],
          code: `const ages = [12, 25, 17, 40];\nconsole.log(ages.filter((a) => a >= 18));    // [25, 40]\nconsole.log(ages.find((a) => a >= 18));      // 25\nconsole.log(ages.findIndex((a) => a > 50));  // -1` },
        { h: 'reduce, some, every et sort', p: [
          '`reduce((accumulé, élément) => ..., initial)` combine tout le tableau en une seule valeur : une somme, un maximum, un objet de comptage. Donne toujours la valeur initiale.',
          '`some` dit si au moins un élément remplit la condition et `every` si tous la remplissent. `sort` accepte un callback qui compare deux éléments : négatif si `a` passe avant, positif s’il passe après.',
          'Ces méthodes s’enchaînent : chacune renvoie un tableau sur lequel on applique la suivante.' ],
          code: `const nums = [4, 8, 15];\nconsole.log(nums.reduce((acc, n) => acc + n, 0));  // 27\nconsole.log(nums.some((n) => n > 10));             // true\nconsole.log(nums.every((n) => n % 2 === 0));       // false\nconsole.log([...nums].sort((a, b) => b - a));      // [15, 8, 4]` },
        { h: 'Exemple réel : rapport de commandes', real: true, p: [
          'Avec `filter`, `map` et `reduce`, tu peux résumer des données comme dans un tableur : combien a été encaissé et qui doit de l’argent.' ],
          code: `const commandes = [\n  { client: "Ana", total: 120, payee: true },\n  { client: "Leo", total: 45, payee: false },\n  { client: "Eva", total: 80, payee: true },\n];\nconst recettes = commandes\n  .filter((c) => c.payee)\n  .reduce((somme, c) => somme + c.total, 0);\nconst enAttente = commandes.filter((c) => !c.payee).map((c) => c.client);\nconsole.log(recettes, enAttente);  // 200 ["Leo"]` },
      ],
      x: [
        mc('Qu’est-ce qu’un callback ?', ['Une fonction passée en argument à une autre', 'Une fonction qui s’appelle elle-même', 'Une erreur dans une fonction', 'Une variable globale'], 'La fonction qui le reçoit décide quand l’appeler, comme le font `map` ou `addEventListener`.'),
        out(`const nums = [1, 2, 3];\nconsole.log(nums.map((n) => n * 10));`, ['[10, 20, 30]', '[1, 2, 3]', '60', '[10]'], '`map` crée un nouveau tableau avec chaque élément transformé.'),
        out(`console.log([5, 12, 8, 20].filter((n) => n > 10));`, ['[12, 20]', '[5, 8]', '2', '[true, false]'], '`filter` garde les éléments pour lesquels le callback renvoie true.'),
        fill(`const produits = [{ prix: 5 }, { prix: 9 }];\nconst prix = produits.___((p) => p.prix);  // [5, 9]`, ['map', 'filter', 'forEach', 'reduce'], '`map` transforme chaque objet en son prix. `forEach` ne renvoie rien.'),
        out(`const total = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);\nconsole.log(total);`, ['10', '24', '[1, 2, 3, 4]', '0'], '`reduce` accumule en partant de 0 : 0 + 1 + 2 + 3 + 4 = 10.'),
        out(`const nums = [1, 2, 3, 4];\nconsole.log(nums.find((n) => n > 2), nums.some((n) => n > 3));`, ['3 true', '[3, 4] true', '3 false', '4 true'], '`find` renvoie le premier élément qui remplit la condition ; `some` indique si au moins un la remplit.'),
        out(`const personnes = [{ n: "Ana", a: 30 }, { n: "Leo", a: 8 }, { n: "Eva", a: 45 }];\nconst ordre = personnes.sort((x, y) => y.a - x.a).map((p) => p.n);\nconsole.log(ordre.join(", "));`, ['Eva, Ana, Leo', 'Leo, Ana, Eva', 'Ana, Leo, Eva', 'Ana, Eva, Leo'], '`y.a - x.a` trie du plus âgé au plus jeune : 45, 30 et 8. Ensuite `map` garde les noms.'),
        out(`const mots = ["sol", "mer", "lune", "sol", "mer", "sol"];\nconst compte = mots.reduce((acc, m) => {\n  acc[m] = (acc[m] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(compte.sol, Object.keys(compte).length, mots.filter((m) => m.length > 3).length);`, ['3 3 1', '3 6 1', '1 3 1', '3 3 4'], '"sol" apparaît 3 fois, il y a 3 mots différents et seul "lune" a plus de 3 lettres.'),
      ],
    },
    // Jour 11
    {
      id: 'js-destructuring',
      t: 'Déstructuration et spread',
      d: 'Extraire des valeurs de tableaux et d’objets en une ligne, valeurs par défaut, spread et rest.',
      guide: [
        { h: 'Déstructurer des tableaux', p: [
          'La déstructuration sort des valeurs d’un tableau et les range dans des variables en une seule ligne : `const [a, b] = liste`. Elles sont affectées par position.',
          'Tu peux sauter des positions en laissant un trou entre les virgules. Elle permet aussi d’échanger deux variables sans variable temporaire : `[a, b] = [b, a]`.' ],
          code: `const couleurs = ["rouge", "vert", "bleu"];\nconst [premiere, , troisieme] = couleurs;\nconsole.log(premiere, troisieme);  // rouge bleu\n\nlet a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);  // 2 1` },
        { h: 'Déstructurer des objets', p: [
          'Avec les objets, on extrait par nom de propriété : `const { nom, age } = utilisateur`. L’ordre n’a pas d’importance.',
          'Tu peux renommer (`{ nom: n }`), donner des valeurs par défaut utilisées si la propriété vaut `undefined` (`{ role = "invité" }`) et entrer dans des objets imbriqués.' ],
          code: `const utilisateur = { nom: "Ana", age: 31, adresse: { ville: "Lyon" } };\nconst { nom: n, role = "invité", adresse: { ville } } = utilisateur;\nconsole.log(n, role, ville);  // Ana invité Lyon` },
        { h: 'Spread : étaler', p: [
          'Les trois points `...` devant un tableau ou un objet l’étalent. Ils servent à copier, réunir et passer des arguments : `Math.max(...nombres)`.',
          'Dans les objets, si une propriété se répète, c’est la dernière qui gagne. Attention : la copie est superficielle ; les objets intérieurs restent partagés.' ],
          code: `const a = [1, 2];\nconst b = [3, 4];\nconsole.log([...a, ...b]);        // [1, 2, 3, 4]\nconsole.log(Math.max(...b));      // 4\n\nconst base = { theme: "clair", langue: "fr" };\nconst mien = { ...base, theme: "sombre" };\nconsole.log(mien);  // { theme: "sombre", langue: "fr" }` },
        { h: 'Rest : regrouper ce qui reste', p: [
          'Les mêmes trois points du côté gauche, ou dans les paramètres, font l’inverse : ils regroupent le reste dans un tableau ou un objet.',
          'Une fonction peut déstructurer directement son paramètre. C’est la manière habituelle de recevoir des options nommées avec des valeurs par défaut.' ],
          code: `const [tete, ...queue] = [10, 20, 30];\nconsole.log(tete, queue);  // 10 [20, 30]\n\nconst { id, ...donnees } = { id: 7, nom: "Leo", age: 25 };\nconsole.log(donnees);  // { nom: "Leo", age: 25 }\n\nfunction creerBouton({ texte, couleur = "bleu" }) {\n  return texte + " (" + couleur + ")";\n}\nconsole.log(creerBouton({ texte: "Envoyer" }));  // Envoyer (bleu)` },
        { h: 'Exemple réel : préférences utilisateur', real: true, p: [
          'Une application a des réglages par défaut et chaque utilisateur n’enregistre que ceux qu’il a changés. Avec le spread, on les combine sans toucher aux originaux, et avec la déstructuration on les lit facilement.' ],
          code: `const parDefaut = { theme: "clair", langue: "fr", notifications: true };\nconst enregistres = { theme: "sombre" };\n\nconst reglages = { ...parDefaut, ...enregistres };\nconst { theme, langue, ...reste } = reglages;\n\nconsole.log(theme, langue);     // sombre fr\nconsole.log(reste);             // { notifications: true }\nconsole.log(parDefaut.theme);   // clair : l’original ne change pas` },
      ],
      x: [
        out(`const [a, , c] = [10, 20, 30];\nconsole.log(a, c);`, ['10 30', '10 20', '20 30', 'undefined'], 'Le trou entre les virgules saute la deuxième position.'),
        fill(`const liste = [1, 2, 3];\nconst copie = [___liste];`, ['...', '..', '*', '&'], 'Le spread `...` étale les éléments dans un nouveau tableau.'),
        out(`const { x, y = 5 } = { x: 1 };\nconsole.log(x + y);`, ['6', '1', 'NaN', 'undefined'], '`y` n’existe pas dans l’objet, il prend donc sa valeur par défaut : 1 + 5 = 6.'),
        out(`const base = { couleur: "rouge", taille: "M" };\nconst nouveau = { ...base, taille: "L" };\nconsole.log(nouveau.taille, base.taille);`, ['L M', 'L L', 'M M', 'M L'], 'Dans le nouvel objet, c’est la dernière `taille` qui gagne. L’original n’est pas modifié.'),
        typ('Échange les valeurs de a et b', `let a = 1, b = 2;\n[a, b] = [___];`, ['b, a', 'b,a'], 'Le tableau de droite est créé avec les valeurs actuelles, puis réparti dans l’ordre.'),
        mc('Quelle est la différence entre spread et rest ?', ['Spread étale des éléments ; rest regroupe ceux qui restent dans un tableau ou un objet', 'C’est la même chose avec un nom différent', 'Spread ne marche qu’avec les objets et rest avec les tableaux', 'Rest fait une copie profonde'], 'Ils s’écrivent pareil (`...`). Ce qui change, c’est le côté : à droite il étale, à gauche ou dans les paramètres il regroupe.'),
        out(`const [premiere, ...reste] = "salut";\nconsole.log(premiere, reste.length);`, ['s 4', 's 5', 'salut 0', 'Erreur'], 'Les textes sont itérables : `premiere` vaut "s" et `reste` vaut ["a", "l", "u", "t"].'),
        out(`const commande = { id: 7, client: { nom: "Ana", ville: "Lima" }, articles: [3, 5, 2] };\nconst { client: { ville }, articles: [premier, ...autres], ...reste } = commande;\nconsole.log(ville, autres.length, Math.max(premier, ...autres), Object.keys(reste).join());`, ['Lima 2 5 id', 'Lima 3 5 id', 'Lima 2 5 id,client,articles', 'Ana 2 5 id'], '`ville` vient de l’objet imbriqué. `autres` vaut [5, 2]. Le maximum de 3, 5 et 2 est 5. Dans `reste`, il ne reste que `id`, car `client` et `articles` ont déjà été extraits.'),
      ],
    },
    // Jour 12
    {
      id: 'js-sets-maps',
      t: 'Set et Map',
      d: 'Des valeurs sans doublons avec Set et des dictionnaires avec des clés de tout type avec Map.',
      guide: [
        { h: 'Set : des valeurs uniques', p: [
          'Un `Set` est une collection où chaque valeur n’apparaît qu’une fois. Si tu ajoutes un doublon, il est simplement ignoré.',
          'Méthodes : `add`, `has`, `delete` et `clear` ; `size` (sans parenthèses) donne le nombre d’éléments. Vérifier avec `has` est bien plus rapide que `includes` sur de grandes listes.' ],
          code: `const etiquettes = new Set(["js", "web"]);\netiquettes.add("js");      // doublon : rien ne change\netiquettes.add("node");\nconsole.log(etiquettes.size);       // 3\nconsole.log(etiquettes.has("web")); // true\netiquettes.delete("web");\nconsole.log([...etiquettes]);       // ["js", "node"]` },
        { h: 'Opérations d’ensembles', p: [
          'L’astuce la plus utilisée : `[...new Set(tableau)]` supprime les doublons d’un tableau en gardant l’ordre de première apparition.',
          'Union : `new Set([...a, ...b])`. Intersection : `[...a].filter((x) => b.has(x))`. Différence : `[...a].filter((x) => !b.has(x))`.' ],
          code: `const emails = ["ana@x.com", "leo@x.com", "ana@x.com"];\nconst uniques = [...new Set(emails)];\nconsole.log(uniques);  // ["ana@x.com", "leo@x.com"]` },
        { h: 'Map : des clés de tout type', p: [
          'Une `Map` associe des clés à des valeurs, comme un objet, mais les clés peuvent être de n’importe quel type (nombres, objets...) et elle garde l’ordre d’insertion.',
          'Méthodes : `set(clé, valeur)`, `get(clé)`, `has`, `delete` et la propriété `size`. `set` renvoie la Map elle-même, on peut donc enchaîner.' ],
          code: `const stock = new Map();\nstock.set("pain", 4).set("lait", 0);\nconsole.log(stock.get("pain"));  // 4\nconsole.log(stock.get("riz"));   // undefined\nconsole.log(stock.size);         // 2` },
        { h: 'Parcourir et choisir entre Map et objet', p: [
          '`for (const [cle, valeur] of map)` parcourt une Map. Elle a aussi `keys()`, `values()` et `entries()`. `new Map(Object.entries(obj))` et `Object.fromEntries(map)` convertissent de l’un à l’autre.',
          'Utilise un objet pour des données à la forme fixe (un utilisateur avec un nom et un âge). Utilise une Map quand les clés arrivent pendant l’exécution, sont souvent ajoutées et retirées ou ne sont pas des textes.' ],
          code: `const notes = new Map([["Ana", 9], ["Leo", 6]]);\nfor (const [eleve, note] of notes) {\n  console.log(eleve, note);\n}\n// Ana 9\n// Leo 6\nconsole.log(Object.fromEntries(notes));  // { Ana: 9, Leo: 6 }` },
        { h: 'Exemple réel : compter des votes', real: true, p: [
          'Dans un sondage, des votes répétés arrivent. Une Map compte combien en a chaque option et un Set dit combien d’options différentes il y a eu.' ],
          code: `const votes = ["Ana", "Leo", "Ana", "Eva", "Ana", "Leo", "Sol"];\nconst decompte = new Map();\nfor (const v of votes) {\n  decompte.set(v, (decompte.get(v) || 0) + 1);\n}\nconsole.log(decompte.get("Ana"), decompte.size);  // 3 4\nconsole.log(new Set(votes).size);                 // 4` },
      ],
      x: [
        out(`const s = new Set([1, 2, 2, 3]);\nconsole.log(s.size);`, ['3', '4', '2', 'undefined'], 'Le Set ignore le 2 en double.'),
        fill(`const s = new Set(["js"]);\nconsole.log(s.___("js"));  // true`, ['has', 'includes', 'contains', 'get'], '`has` vérifie si une valeur est dans le Set. `includes` appartient aux tableaux.'),
        mc('Quel avantage une Map a-t-elle sur un objet classique ?', ['Elle accepte des clés de tout type et garde l’ordre d’insertion', 'Elle est plus courte à écrire', 'Elle se convertit seule en JSON', 'Aucun'], 'Un objet n’accepte que des clés de type texte ou symbole.'),
        out(`console.log([...new Set([3, 1, 3, 2, 1])]);`, ['[3, 1, 2]', '[1, 2, 3]', '[3, 1, 3, 2, 1]', '3'], 'Le Set garde l’ordre de première apparition et supprime les doublons ; il ne trie pas.'),
        out(`const m = new Map();\nm.set("a", 1).set("b", 2);\nconsole.log(m.get("b"), m.get("c"));`, ['2 undefined', '2 null', '1 undefined', 'Erreur'], '`set` renvoie la Map elle-même, on peut donc enchaîner. Une clé inexistante donne `undefined`.'),
        out(`const m = new Map([["x", 1], ["y", 2]]);\nconsole.log([...m.keys()]);`, ['["x", "y"]', '[1, 2]', '[["x", 1], ["y", 2]]', '2'], '`keys()` renvoie les clés dans l’ordre d’insertion.'),
        out(`const s = new Set([1, 2, 3]);\ns.add(2);\ns.delete(1);\nconsole.log(s.size, s.has(1));`, ['2 false', '3 false', '3 true', '2 true'], 'Ajouter le 2 ne change rien car il y était déjà ; après avoir supprimé le 1, il reste 2 éléments.'),
        out(`const a = new Set(["js", "py", "go"]);\nconst b = new Set(["py", "rs", "js"]);\nconst communs = [...a].filter((x) => b.has(x));\nconst tous = new Set([...a, ...b]);\nconsole.log(communs, tous.size);`, ['["js", "py"] 4', '["py", "js"] 4', '["js", "py"] 6', '["go", "rs"] 4'], 'L’intersection suit l’ordre de `a` : "js" et "py". L’union sans doublon contient js, py, go et rs.'),
      ],
    },
    // Jour 13
    {
      id: 'js-regex',
      t: 'Texte, dates et regex',
      d: 'Chercher, valider et remplacer du texte avec les expressions régulières, et travailler avec les dates avec Date.',
      guide: [
        { h: 'Ce qu’est une expression régulière', p: [
          'Une expression régulière décrit un motif de texte. Elle s’écrit entre barres obliques, `/motif/drapeaux`, ou avec `new RegExp("motif")` quand le motif est construit à partir d’une variable.',
          '`regex.test(texte)` renvoie `true` si le motif apparaît dans le texte. C’est la manière la plus rapide de valider.' ],
          code: `const aUnChiffre = /\\d/;\nconsole.log(aUnChiffre.test("motdepasse1"));  // true\nconsole.log(aUnChiffre.test("motdepasse"));   // false` },
        { h: 'Classes de caractères et quantificateurs', p: [
          '`\\d` est un chiffre, `\\w` une lettre, un chiffre ou un tiret bas, `\\s` un espace blanc et `.` n’importe quel caractère. `[aeiou]` accepte un caractère de la liste et `[^0-9]` tout ce qui n’est pas un chiffre.',
          'Les quantificateurs disent combien de fois : `+` une ou plusieurs, `*` zéro ou plusieurs, `?` zéro ou une, `{3}` exactement trois et `{2,4}` entre deux et quatre.',
          '`^` marque le début du texte et `$` la fin. Sans eux, le motif peut apparaître n’importe où.' ],
          code: `const cp = /^\\d{5}$/;           // exactement 5 chiffres\nconsole.log(cp.test("75001"));   // true\nconsole.log(cp.test("7500"));    // false\nconsole.log(cp.test("750012"));  // false` },
        { h: 'Drapeaux, match et groupes', p: [
          'Les drapeaux se placent après la dernière barre : `i` ignore la casse, `g` cherche toutes les correspondances et `m` fait fonctionner `^` et `$` ligne par ligne.',
          '`texte.match(/.../g)` renvoie un tableau avec toutes les correspondances, ou `null` s’il n’y en a aucune. Les parenthèses créent des groupes qu’on peut récupérer séparément ; avec `(?<nom>...)`, ils ont un nom.' ],
          code: `console.log("a1 b22 c333".match(/\\d+/g));  // ["1", "22", "333"]\n\nconst m = "2024-05-17".match(/(?<annee>\\d{4})-(?<mois>\\d{2})/);\nconsole.log(m.groups.annee, m.groups.mois);  // 2024 05` },
        { h: 'replace et split', p: [
          '`replace(regex, nouveau)` remplace la première correspondance, ou toutes si l’expression a `g`. Dans le texte de remplacement, `$1` est le premier groupe.',
          '`split` accepte aussi une expression régulière, pratique quand le séparateur varie.' ],
          code: `console.log("1-2-3".replace(/-/g, "+"));                    // 1+2+3\nconsole.log("Ana Ruiz".replace(/(\\w+) (\\w+)/, "$2, $1"));   // Ruiz, Ana\nconsole.log("un, deux,trois".split(/,\\s*/));               // ["un", "deux", "trois"]` },
        { h: 'Les dates avec Date', p: [
          '`new Date()` crée la date et l’heure actuelles ; `new Date(2024, 0, 15)` crée une date précise. Attention : les mois commencent à 0 (janvier) et finissent à 11 (décembre).',
          '`getFullYear()`, `getMonth()`, `getDate()` (jour du mois) et `getDay()` (jour de la semaine, 0 est dimanche) lisent ses parties. Soustraire deux dates donne la différence en millisecondes.' ],
          code: `const d = new Date(2024, 0, 15);  // 15 janvier 2024\nconsole.log(d.getFullYear(), d.getMonth(), d.getDate());  // 2024 0 15\nconsole.log(d.getDay());  // 1 (lundi)` },
        { h: 'Exemple réel : combien de jours avant les vacances', real: true, p: [
          'Un compte à rebours est un classique des sites d’événements. On soustrait les dates et on convertit les millisecondes en jours.',
          '`Math.round` évite les erreurs d’une heure quand il y a un changement d’heure entre les deux dates.' ],
          code: `const aujourdhui = new Date(2024, 5, 1);  // 1er juin\nconst voyage = new Date(2024, 6, 15);     // 15 juillet\nconst MS_PAR_JOUR = 1000 * 60 * 60 * 24;\nconst jours = Math.round((voyage - aujourdhui) / MS_PAR_JOUR);\nconsole.log("Plus que", jours, "jours");  // Plus que 44 jours` },
      ],
      x: [
        out(`console.log(/^\\d{3}$/.test("123"), /^\\d{3}$/.test("1234"));`, ['true false', 'true true', 'false false', 'false true'], 'Avec `^` et `$`, le texte entier doit avoir exactement trois chiffres.'),
        fill(`const r = /bonjour/___;\nconsole.log(r.test("BONJOUR"));  // true`, ['i', 'g', 'm', 'u'], 'Le drapeau `i` ignore la différence entre majuscules et minuscules.'),
        out(`console.log("a1b22c333".match(/\\d+/g));`, ['["1", "22", "333"]', '["1"]', '["1", "2", "2", "3", "3", "3"]', 'null'], '`\\d+` prend autant de chiffres consécutifs que possible, et `g` renvoie toutes les correspondances.'),
        out(`console.log("2024-05-01".replace(/-/g, "/"));`, ['2024/05/01', '2024/05-01', '2024-05-01', '/'], 'Avec `g`, tous les tirets sont remplacés, pas seulement le premier.'),
        mc('Que représente `\\s` dans une expression régulière ?', ['Un espace blanc : espace, tabulation ou saut de ligne', 'La lettre s', 'N’importe quel caractère', 'Un chiffre'], 'Son contraire est `\\S` : tout caractère qui n’est pas un espace.'),
        out(`const d = new Date(2024, 0, 15);\nconsole.log(d.getMonth());`, ['0', '1', '15', '2024'], 'Dans `Date`, les mois commencent à 0 : janvier vaut 0.'),
        out(`console.log("un, deux,trois".split(/,\\s*/));`, ['["un", "deux", "trois"]', '["un", " deux", "trois"]', '["un, deux,trois"]'], 'Le séparateur est une virgule suivie de zéro ou plusieurs espaces, donc aucun morceau ne garde d’espace.'),
        out(`const texte = "Commandes : A-12, B-7, A-30, C-5";\nconst codes = texte.match(/A-\\d+/g);\nconst somme = codes.map((c) => Number(c.slice(2))).reduce((a, b) => a + b, 0);\nconsole.log(codes.length, somme, /c-5/i.test(texte));`, ['2 42 true', '2 42 false', '4 54 true', '3 42 true'], 'Seuls "A-12" et "A-30" commencent par A. `slice(2)` enlève "A-" : 12 + 30 = 42. Avec `i`, "c-5" trouve "C-5".'),
      ],
    },
    // Jour 14
    {
      id: 'js-workshop-contacts',
      t: 'L’atelier de Kibi : le carnet de clients',
      d: 'Projet de la semaine 2 : ranger les clients dans un tableau d’objets, les chercher, les valider et les résumer avec map, filter et reduce.',
      guide: [
        { h: 'La commande', p: [
          'La boutique de Kibi a maintenant des habitués et veut s’en souvenir : nom, téléphone, nombre d’achats et depuis quand ils sont clients, pour récompenser les plus fidèles.',
          'Cet atelier réunit la semaine 2 : tableaux, objets, méthodes qui transforment les tableaux, déstructuration, spread, Map, dates et expressions régulières.' ] },
        { h: 'Étape 1 : les données', p: [
          'Chaque client est un objet avec les mêmes propriétés, et tous vont dans un tableau. C’est comme une table : le tableau contient les lignes et les propriétés sont les colonnes.',
          'Pour lire une donnée, on combine les deux accès : d’abord la position dans le tableau, puis la propriété.' ],
          code: `const clients = [\n  { nom: "Lucía", telephone: "600111222", achats: 12, depuis: "2025-01-10" },\n  { nom: "Marco", telephone: "600333444", achats: 3, depuis: "2025-06-02" },\n  { nom: "Aiko", telephone: "600555666", achats: 7, depuis: "2026-02-20" },\n];\nconsole.log(clients.length, clients[0].nom);  // 3 Lucía` },
        { h: 'Étape 2 : chercher et ajouter sans doublons', p: [
          '`find()` renvoie le premier client qui correspond, ou `undefined` s’il n’y en a aucun. On compare en minuscules pour que « aiko » trouve « Aiko ».',
          '`ajouter()` vérifie avec une expression régulière que le téléphone a 9 chiffres et renvoie un nouveau tableau avec spread, sans modifier l’original. Si quelque chose ne va pas, elle renvoie la liste telle quelle.' ],
          code: `const chercher = (liste, nom) =>\n  liste.find((c) => c.nom.toLowerCase() === nom.toLowerCase());\n\nfunction ajouter(liste, nom, telephone) {\n  if (!/^\\d{9}$/.test(telephone) || chercher(liste, nom)) return liste;\n  const depuis = new Date().toISOString().slice(0, 10);\n  return [...liste, { nom, telephone, achats: 0, depuis }];\n}\n\nconsole.log(chercher(clients, "aiko").telephone);  // 600555666` },
        { h: 'Étape 3 : filtrer et résumer', p: [
          '`filter()` garde les clients fidèles et `map()` ne prend que leur nom. `reduce()` parcourt le tableau en accumulant un résultat : ici, le total des achats.',
          'Dans le paramètre de `reduce`, on déstructure `{ achats }` pour ne pas écrire `c.achats`.' ],
          code: `const fideles = clients.filter((c) => c.achats >= 5).map((c) => c.nom);\nconsole.log(fideles.join(", "));  // Lucía, Aiko\n\nconst total = clients.reduce((somme, { achats }) => somme + achats, 0);\nconsole.log(total);  // 22` },
        { h: 'Étape 4 : un index par téléphone', p: [
          'Si tu cherches souvent par téléphone, une `Map` le trouve instantanément sans parcourir le tableau. Elle se crée à partir de paires `[clé, valeur]`.',
          'Avec `Date`, on obtient l’année d’inscription de chaque client pour savoir depuis combien de temps il fréquente la boutique.' ],
          code: `const parTelephone = new Map(clients.map((c) => [c.telephone, c]));\nconsole.log(parTelephone.get("600333444").nom);  // Marco\n\nconst annee = (c) => new Date(c.depuis).getFullYear();\nconsole.log(annee(clients[2]));  // 2026` },
        { h: 'Exemple réel : la fiche de chaque client', real: true, p: [
          'Une fonction qui reçoit un client déstructuré et renvoie une ligne prête à afficher : le niveau selon ses achats et le téléphone groupé par trois avec `replace` et les groupes de l’expression régulière.' ],
          code: `function fiche({ nom, telephone, achats }) {\n  const niveau = achats >= 10 ? "or" : achats >= 5 ? "argent" : "nouveau";\n  const tel = telephone.replace(/(\\d{3})(\\d{3})(\\d{3})/, "$1 $2 $3");\n  return \`\${nom.padEnd(6)} \${tel}  \${niveau}\`;\n}\n\nclients.forEach((c) => console.log(fiche(c)));\n// Lucía  600 111 222  or\n// Marco  600 333 444  nouveau\n// Aiko   600 555 666  argent` },
      ],
      x: [
        out(`const c = { nom: "Aiko", achats: 7 };\nconsole.log(c.achats + 1);`, ['8', '71', '7', 'undefined'], '`c.achats` est le nombre 7 ; en ajoutant 1, on obtient 8.'),
        out(`const clients = [{ n: "Ana" }, { n: "Leo" }];\nconsole.log(clients[1].n);`, ['Leo', 'Ana', 'undefined', '[object Object]'], '`clients[1]` est le deuxième objet et `.n` lit son nom.'),
        fill(`const liste = [{ n: "Ana" }];\nconst autre = [___liste, { n: "Eva" }];\nconsole.log(autre.length);  // 2`, ['...', '..', '*', '&'], 'Les trois points du spread copient les éléments de `liste` dans le nouveau tableau.'),
        out(`const clients = [{ k: 2 }, { k: 5 }];\nconsole.log(clients.reduce((s, c) => s + c.k, 0));`, ['7', '25', '[2, 5]', 'NaN'], '`reduce` part de 0 et ajoute le `k` de chaque client : 2 + 5.'),
        out(`const clients = [{ n: "Ana", k: 9 }, { n: "Leo", k: 2 }, { n: "Eva", k: 5 }];\nconsole.log(clients.filter((c) => c.k > 4).map((c) => c.n).join(", "));`, ['Ana, Eva', 'Leo', 'Ana, Leo, Eva', '9, 5'], '`filter` garde les clients dont `k` est supérieur à 4 et `map` prend leur nom.'),
        mc('Pourquoi `ajouter()` renvoie-t-elle `[...liste, nouveau]` au lieu d’utiliser `push` ?', ['Pour créer un nouveau tableau sans modifier l’original', 'Parce que les tableaux n’ont pas de push', 'Parce que le spread est toujours plus rapide', 'Pour trier les clients'], '`push` modifierait le tableau reçu par la fonction. En renvoyer un nouveau évite les surprises dans le code qui l’utilisait.'),
        typ('Complète la vérification que le téléphone a 9 chiffres', `const valide = /^\\d{9}$/.___(telephone);`, 'test', '`test()` renvoie `true` si le texte correspond à l’expression régulière.'),
        out(`const liste = [{ nom: "Ana", achats: 3 }];\nfunction ajouter(liste, nom) {\n  if (liste.some((c) => c.nom === nom)) return liste;\n  return [...liste, { nom, achats: 0 }];\n}\nconst a = ajouter(liste, "Leo");\nconst b = ajouter(a, "Ana");\nconsole.log(a.length, b === a, liste.length);`, ['2 true 1', '3 false 2', '2 false 1', '2 true 2'], 'Leo est ajouté dans un nouveau tableau de 2 clients. Ana y était déjà, donc on renvoie le même tableau (`b === a`). L’original ne change pas.'),
      ],
    },
    // Jour 15
    {
      id: 'js-dom',
      t: 'Le DOM',
      d: 'La page comme un arbre : sélectionner des éléments et lire leur texte, leurs valeurs et leurs attributs.',
      guide: [
        { h: 'L’arbre du document', p: [
          'Quand le navigateur charge une page, il transforme le HTML en un arbre d’objets appelé DOM (Document Object Model). Chaque balise est un nœud élément avec des parents, des enfants et des frères.',
          'Depuis JavaScript, on accède à cet arbre avec l’objet `document`. Ce que tu changes dans le DOM se voit immédiatement sur la page.' ],
          code: `<!-- index.html -->\n<body>\n  <h1 id="titre">Ma boutique</h1>\n  <ul class="produits">\n    <li>Tasse</li>\n    <li>Carnet</li>\n  </ul>\n  <script src="app.js" defer></script>\n</body>` },
        { h: 'Sélectionner des éléments', p: [
          '`document.querySelector(sélecteur)` renvoie le premier élément qui correspond à un sélecteur CSS, ou `null` s’il n’y en a aucun. `querySelectorAll` les renvoie tous dans une `NodeList`, qu’on parcourt avec `forEach` ou `for...of`.',
          '`getElementById("id")` est la manière classique de chercher par id. Tu peux aussi chercher à l’intérieur d’un élément : `liste.querySelector("li")`.' ],
          code: `const titre = document.querySelector("#titre");\nconst items = document.querySelectorAll(".produits li");\nconsole.log(items.length);  // 2\nitems.forEach((li) => console.log(li.textContent));\n// Tasse\n// Carnet\nconsole.log(document.querySelector(".inexistant"));  // null` },
        { h: 'Lire le contenu et les valeurs', p: [
          '`textContent` renvoie le texte d’un élément et de ses enfants, sans balises. `innerHTML` renvoie le HTML intérieur, avec les balises.',
          'Dans les champs de formulaire, la donnée est dans `value` (toujours du texte) et dans les cases à cocher, dans `checked`.' ],
          code: `<!-- <p id="avis">Livraison <b>gratuite</b></p>\n     <input id="age" value="31"> -->\nconst avis = document.querySelector("#avis");\nconsole.log(avis.textContent);  // Livraison gratuite\nconsole.log(avis.innerHTML);    // Livraison <b>gratuite</b>\nconsole.log(Number(document.querySelector("#age").value) + 1);  // 32` },
        { h: 'Attributs, dataset et parcours de l’arbre', p: [
          '`getAttribute("href")` lit un attribut. Les attributs `data-*` se lisent avec `dataset` : `data-prix` devient `el.dataset.prix`, toujours sous forme de texte.',
          'Pour se déplacer dans l’arbre : `parentElement`, `children`, `firstElementChild`, `nextElementSibling` et `closest(sélecteur)`, qui cherche l’ancêtre le plus proche qui correspond.' ],
          code: `<!-- <li class="produit" data-id="7" data-prix="12.5"><span>Tasse</span></li> -->\nconst span = document.querySelector(".produit span");\nconst li = span.closest(".produit");\nconsole.log(li.dataset.id, Number(li.dataset.prix) * 2);  // 7 25\nconsole.log(li.children.length);  // 1` },
        { h: 'Exemple réel : résumé d’une liste de tâches', real: true, p: [
          'Une application de tâches affiche dans son en-tête combien il en reste. Elle n’a qu’à lire le DOM : compter les éléments et vérifier leur classe.' ],
          code: `<!-- <ul id="taches">\n       <li class="faite">Acheter du pain</li>\n       <li>Appeler la banque</li>\n       <li>Étudier JS</li>\n     </ul> -->\nconst taches = [...document.querySelectorAll("#taches li")];\nconst enAttente = taches.filter((li) => !li.classList.contains("faite"));\nconsole.log(enAttente.length + " sur " + taches.length + " en attente");  // 2 sur 3 en attente\nconsole.log(enAttente.map((li) => li.textContent));  // ["Appeler la banque", "Étudier JS"]` },
      ],
      x: [
        mc('Que renvoie `document.querySelector` s’il ne trouve aucun élément ?', ['null', 'undefined', 'Un tableau vide', 'Il lève une erreur'], 'C’est pourquoi il vaut mieux vérifier le résultat avant de l’utiliser.'),
        fill(`const titre = document.___("#titre");`, ['querySelector', 'getElement', 'select', 'find'], '`querySelector` accepte n’importe quel sélecteur CSS.'),
        out(`// <ul id="liste"><li>a</li><li class="faite">b</li><li class="faite">c</li></ul>\nconst faites = document.querySelectorAll("#liste .faite");\nconsole.log(faites.length, faites[0].textContent);`, ['2 b', '3 a', '2 c', '1 b'], 'Seuls deux `li` ont la classe `faite`, et le premier contient "b".'),
        mc('Quelle est la différence entre `textContent` et `innerHTML` ?', ['textContent donne seulement le texte ; innerHTML donne aussi les balises', 'Ils sont exactement pareils', 'innerHTML ne marche que dans les formulaires', 'textContent inclut les commentaires'], 'Pour lire ou écrire du texte sans interpréter le HTML, utilise `textContent`.'),
        typ('Lis ce que l’utilisateur a tapé dans le champ', `const email = document.querySelector("#email").___;`, 'value', 'Le contenu d’un `input` est dans `value` et c’est toujours du texte.'),
        out(`// <button data-id="42" data-type="supprimer">X</button>\nconst b = document.querySelector("button");\nconsole.log(b.dataset.id, typeof b.dataset.id);`, ['42 string', '42 number', 'undefined undefined', 'data-id string'], '`dataset` transforme `data-id` en `id` et renvoie toujours du texte.'),
        ord('Sélectionne tous les paragraphes de classe note', ['document', '.querySelectorAll(', '"p.note"', ')'], ['.getElementById(', '"#note"'], '`querySelectorAll` avec le sélecteur CSS `p.note` renvoie tous ceux qui correspondent.'),
        out(`// <section id="boutique">\n//   <article class="produit" data-prix="12"><h2>Tasse</h2></article>\n//   <article class="produit epuise" data-prix="30"><h2>Lampe</h2></article>\n//   <article class="produit" data-prix="8"><h2>Carnet</h2></article>\n// </section>\nconst produits = [...document.querySelectorAll("#boutique .produit:not(.epuise)")];\nconst total = produits.reduce((s, p) => s + Number(p.dataset.prix), 0);\nconst noms = produits.map((p) => p.querySelector("h2").textContent);\nconsole.log(produits.length, total, noms.join("+"));`, ['2 20 Tasse+Carnet', '3 50 Tasse+Lampe+Carnet', '2 20 Tasse+Lampe', '2 128 Tasse+Carnet'], '`:not(.epuise)` écarte la lampe. `Number` convertit les prix avant d’additionner : 12 + 8 = 20. Sans `Number`, ils seraient concaténés.'),
      ],
    },
    // Jour 16
    {
      id: 'js-dom-edit',
      t: 'Modifier la page',
      d: 'Changer du texte, créer et insérer des éléments, et modifier classes, styles et attributs.',
      guide: [
        { h: 'Changer le contenu', p: [
          'Affecter `textContent` remplace le texte d’un élément. C’est l’option sûre pour afficher des données qui viennent de l’utilisateur.',
          '`innerHTML` interprète le texte comme du HTML. Ne l’utilise jamais avec des données utilisateur : quelqu’un pourrait injecter un script (attaque XSS).' ],
          code: `const salut = document.querySelector("#salut");\nconst nom = "<img src=x onerror=alert(1)>";\n\nsalut.textContent = "Bonjour, " + nom;   // affiché tel quel, sans danger\n// salut.innerHTML = "Bonjour, " + nom;  // exécuterait du code !` },
        { h: 'Créer, insérer et supprimer', p: [
          '`document.createElement("li")` crée un élément qui n’est pas encore sur la page. On l’insère avec `append` (à la fin), `prepend` (au début), `before` ou `after`.',
          '`element.remove()` le retire de la page. Pour beaucoup d’éléments, crée un `DocumentFragment` et insère-le en une fois.' ],
          code: `const liste = document.querySelector("#liste");\nconst li = document.createElement("li");\nli.textContent = "Nouvelle tâche";\nliste.append(li);\n\nconst premier = liste.firstElementChild;\npremier.remove();` },
        { h: 'Classes et styles', p: [
          '`classList` gère les classes : `add`, `remove`, `contains` et `toggle`, qui met la classe si elle n’y est pas et l’enlève si elle y est. Avec un deuxième argument booléen, `toggle` la force.',
          'Changer des classes et laisser le design au CSS vaut mieux que toucher directement `style`. Si tu le fais, les propriétés s’écrivent en camelCase : `style.backgroundColor`.' ],
          code: `const bouton = document.querySelector("#menu");\nbouton.classList.add("actif");\nbouton.classList.toggle("ouvert");         // la met\nbouton.classList.toggle("ouvert");         // l’enlève\nbouton.classList.toggle("sombre", true);   // la force\n\nbouton.style.backgroundColor = "tomato";\ndocument.documentElement.style.setProperty("--couleur-principale", "teal");` },
        { h: 'Attributs', p: [
          '`setAttribute(nom, valeur)` et `removeAttribute(nom)` changent les attributs. Beaucoup ont une propriété directe : `img.src`, `a.href`, `input.disabled`.',
          'L’attribut `hidden` cache un élément sans CSS : `avis.hidden = true`.' ],
          code: `const photo = document.createElement("img");\nphoto.src = "chat.jpg";\nphoto.alt = "Un chat qui dort";\nphoto.setAttribute("loading", "lazy");\n\nconst envoyer = document.querySelector("#envoyer");\nenvoyer.disabled = true;\ndocument.querySelector("#avis").hidden = false;` },
        { h: 'Exemple réel : dessiner une liste de tâches à partir de données', real: true, p: [
          'Les tâches vivent dans un tableau et la liste de la page est redessinée à partir de lui à chaque changement. C’est l’idée qu’utilisent des bibliothèques comme React.' ],
          code: `const taches = [\n  { texte: "Acheter du pain", faite: true },\n  { texte: "Étudier JS", faite: false },\n];\n\nfunction dessiner() {\n  const liste = document.querySelector("#taches");\n  const fragment = document.createDocumentFragment();\n  for (const t of taches) {\n    const li = document.createElement("li");\n    li.textContent = t.texte;\n    li.classList.toggle("faite", t.faite);\n    fragment.append(li);\n  }\n  liste.replaceChildren(fragment);   // vide la liste et ajoute les nouveaux\n  document.querySelector("#compteur").textContent =\n    taches.filter((t) => !t.faite).length + " en attente";\n}\n\ndessiner();` },
      ],
      x: [
        fill(`const li = document.___("li");\nli.textContent = "Pain";`, ['createElement', 'newElement', 'create', 'makeElement'], '`createElement` crée l’élément ; il faut ensuite l’insérer.'),
        mc('Pourquoi utiliser `textContent` et pas `innerHTML` pour afficher ce que tape un utilisateur ?', ['innerHTML interpréterait son texte comme du HTML et pourrait exécuter du code malveillant', 'textContent est plus joli', 'innerHTML ne marche pas avec les longs textes', 'Il n’y a aucune raison'], 'C’est la défense de base contre les attaques XSS.'),
        out(`const p = document.createElement("p");\np.classList.add("avis", "grand");\np.classList.toggle("grand");\np.classList.toggle("actif");\nconsole.log(p.className);`, ['avis actif', 'avis grand actif', 'avis', 'actif'], 'Le premier `toggle` enlève `grand` car elle y était ; le second ajoute `actif` car elle n’y était pas.'),
        out(`const ul = document.createElement("ul");\nfor (const t of ["a", "b"]) {\n  const li = document.createElement("li");\n  li.textContent = t;\n  ul.append(li);\n}\nul.prepend(document.createElement("li"));\nconsole.log(ul.children.length, ul.lastElementChild.textContent);`, ['3 b', '2 b', '3 a', '3 '], '`prepend` ajoute un `li` vide au début, donc "b" reste le dernier.'),
        typ('Retire l’avis de la page', `document.querySelector(".avis").___();`, 'remove', '`remove()` sort l’élément du DOM.'),
        out(`const boite = document.createElement("div");\nboite.style.backgroundColor = "red";\nboite.style.fontSize = "20px";\nconsole.log(boite.getAttribute("style"));`, ['background-color: red; font-size: 20px;', 'backgroundColor: red; fontSize: 20px', 'null'], 'En JavaScript, on écrit en camelCase, mais l’attribut `style` garde les noms CSS.'),
        mc('Que fait `element.classList.toggle("actif")` ?', ['Elle ajoute la classe si elle n’y est pas et l’enlève si elle y est', 'Elle l’ajoute toujours', 'Elle l’enlève toujours', 'Elle renvoie le nombre de classes'], 'Avec `toggle("actif", true)`, on force l’ajout.'),
        out(`const taches = [{ texte: "Acheter du pain", faite: true }, { texte: "Étudier <b>JS</b>", faite: false }];\nconst ul = document.createElement("ul");\nfor (const t of taches) {\n  const li = document.createElement("li");\n  li.textContent = t.texte;\n  li.classList.toggle("faite", t.faite);\n  ul.append(li);\n}\nul.firstElementChild.remove();\nconsole.log(ul.children.length, ul.innerHTML);`, ['1 <li>Étudier &lt;b&gt;JS&lt;/b&gt;</li>', '1 <li>Étudier <b>JS</b></li>', '2 <li class="faite">Acheter du pain</li>'], 'La première tâche est supprimée. Comme le texte a été mis avec `textContent`, les balises ne sont pas interprétées et apparaissent échappées dans le HTML. `toggle` avec `false` n’ajoute pas la classe.'),
      ],
    },
    // Jour 17
    {
      id: 'js-events',
      t: 'Événements',
      d: 'Réagir aux clics et aux formulaires avec addEventListener, l’objet événement, preventDefault et la délégation.',
      guide: [
        { h: 'Écouter des événements', p: [
          'Un événement est quelque chose qui se passe sur la page : un clic, une touche, un formulaire envoyé. `element.addEventListener("click", fonction)` exécute la fonction chaque fois que ça se produit.',
          'Événements courants : `click`, `input` (chaque changement dans un champ), `change`, `submit`, `keydown` et `DOMContentLoaded`. L’option `{ once: true }` fait que l’écouteur ne s’exécute qu’une fois.' ],
          code: `const bouton = document.querySelector("#saluer");\nbouton.addEventListener("click", () => {\n  console.log("Salut !");\n});\n\nconst recherche = document.querySelector("#recherche");\nrecherche.addEventListener("input", (e) => {\n  console.log("Recherche :", e.target.value);\n});` },
        { h: 'L’objet événement', p: [
          'La fonction reçoit un objet avec des informations : `type` (le type), `target` (l’élément où ça s’est produit), `currentTarget` (celui qui a l’écouteur) et, pour le clavier, `key`.',
          '`preventDefault()` annule ce que le navigateur ferait par défaut, comme recharger la page à l’envoi d’un formulaire ou suivre un lien.' ],
          code: `const form = document.querySelector("#inscription");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();   // ne recharge pas la page\n  const email = form.querySelector("#email").value;\n  console.log("Envoyer", email);\n});\n\ndocument.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") fermerFenetre();\n});` },
        { h: 'La propagation', p: [
          'Un événement commence sur l’élément où il s’est produit, puis remonte par ses ancêtres : c’est le bouillonnement. Un clic sur un bouton est aussi un clic sur le `div` qui le contient.',
          '`e.stopPropagation()` arrête la remontée. Utilise-le avec prudence : les autres écouteurs plus haut ne seront plus prévenus.' ],
          code: `<!-- <div id="carte"><button id="jaime">♥</button></div> -->\ndocument.querySelector("#carte").addEventListener("click", () => {\n  console.log("Ouvrir la carte");\n});\ndocument.querySelector("#jaime").addEventListener("click", (e) => {\n  e.stopPropagation();   // le clic n’ouvre pas la carte\n  console.log("J’aime");\n});` },
        { h: 'La délégation d’événements', p: [
          'Au lieu de mettre un écouteur sur chaque élément d’une liste, on en met un seul sur le conteneur et on regarde avec `e.target.closest(...)` quel élément a été cliqué.',
          'Ça marche aussi avec les éléments ajoutés plus tard et ça consomme moins de mémoire.' ],
          code: `const liste = document.querySelector("#liste");\nliste.addEventListener("click", (e) => {\n  const bouton = e.target.closest(".supprimer");\n  if (!bouton) return;            // clic ailleurs\n  bouton.closest("li").remove();\n});` },
        { h: 'Exemple réel : un formulaire de tâches', real: true, p: [
          'Un formulaire ajoute des tâches sans recharger la page et la liste utilise la délégation pour les marquer comme faites, y compris celles ajoutées plus tard.' ],
          code: `const form = document.querySelector("#nouvelle");\nconst input = form.querySelector("input");\nconst liste = document.querySelector("#taches");\n\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const texte = input.value.trim();\n  if (!texte) return;\n  const li = document.createElement("li");\n  li.textContent = texte;\n  liste.append(li);\n  input.value = "";\n  input.focus();\n});\n\nliste.addEventListener("click", (e) => {\n  const li = e.target.closest("li");\n  if (li) li.classList.toggle("faite");\n});` },
      ],
      x: [
        fill(`bouton.___("click", () => console.log("Salut !"));`, ['addEventListener', 'onEvent', 'listen', 'on'], '`addEventListener(type, fonction)` enregistre un écouteur.'),
        mc('Que fait `e.preventDefault()` dans l’événement `submit` d’un formulaire ?', ['Il empêche le navigateur d’envoyer le formulaire et de recharger la page', 'Il vide les champs', 'Il arrête la propagation de l’événement', 'Il désactive le bouton'], 'Tu peux ainsi valider et envoyer les données avec JavaScript.'),
        out(`// <div id="boite"><button id="btn">OK</button></div>\nconst journal = [];\ndocument.querySelector("#boite").addEventListener("click", () => journal.push("boite"));\ndocument.querySelector("#btn").addEventListener("click", () => journal.push("btn"));\ndocument.querySelector("#btn").click();\nconsole.log(journal.join(" > "));`, ['btn > boite', 'boite > btn', 'btn', 'boite'], 'L’événement commence sur le bouton puis remonte jusqu’au `div`.'),
        out(`// <ul id="menu"><li>Accueil</li><li>Contact</li></ul>\nconst menu = document.querySelector("#menu");\nmenu.addEventListener("click", (e) => {\n  console.log(e.target.textContent, e.currentTarget.id);\n});\nmenu.children[1].click();`, ['Contact menu', 'AccueilContact menu', 'Contact ', 'menu Contact'], '`target` est le `li` cliqué ; `currentTarget` est la liste, qui a l’écouteur.'),
        typ('Vérifie si la touche Entrée a été pressée', `input.addEventListener("keydown", (e) => {\n  if (e.___ === "Enter") envoyer();\n});`, 'key', '`e.key` contient le nom de la touche.'),
        mc('Qu’est-ce que la délégation d’événements ?', ['Mettre un seul écouteur sur le conteneur et trouver quel enfant a été cliqué', 'Passer un événement à une autre page', 'Exécuter deux écouteurs à la fois', 'Annuler un événement'], 'Elle fonctionne même avec les éléments ajoutés plus tard.'),
        out(`// <button>+</button>\nlet n = 0;\nconst b = document.querySelector("button");\nb.addEventListener("click", () => n++, { once: true });\nb.addEventListener("click", () => (n += 10));\nb.click();\nb.click();\nconsole.log(n);`, ['21', '22', '11', '20'], 'Le premier écouteur ne s’exécute qu’au premier clic (+1) ; le second aux deux (+20).'),
        out(`// <ul id="liste"><li><button class="supprimer">x</button> Pain</li><li><button class="supprimer">x</button> Lait</li></ul>\nconst liste = document.querySelector("#liste");\nconst journal = [];\nliste.addEventListener("click", (e) => {\n  const bouton = e.target.closest(".supprimer");\n  if (!bouton) return journal.push("dehors");\n  bouton.closest("li").remove();\n  journal.push("supprimé");\n});\nliste.querySelector("li").click();\nliste.querySelector(".supprimer").click();\nconsole.log(journal.join(","), liste.children.length, liste.textContent.trim());`, ['dehors,supprimé 1 x Lait', 'supprimé,supprimé 0', 'dehors,supprimé 1 Lait', 'supprimé,dehors 1 x Pain'], 'Le premier clic est sur le `li`, pas sur un bouton : `closest` renvoie `null`. Le second appuie sur le bouton de "Pain" et supprime son `li`. Il reste "x Lait", car le bouton est toujours dedans.'),
      ],
    },
    // Jour 18
    {
      id: 'js-json',
      t: 'JSON et enregistrer des données',
      d: 'Transformer des données en texte et inversement avec JSON, et les garder dans le navigateur avec localStorage.',
      guide: [
        { h: 'Ce qu’est JSON', p: [
          'JSON est un format texte pour échanger des données. Presque toutes les API web l’utilisent, ainsi que de nombreux fichiers de configuration comme `package.json`.',
          'Il ressemble à un objet JavaScript, mais il est plus strict : les clés et les textes vont entre guillemets doubles, il n’accepte ni commentaires ni virgules finales, et il ne stocke que des textes, des nombres, des booléens, `null`, des tableaux et des objets.' ],
          code: `{\n  "nom": "Ana",\n  "age": 31,\n  "active": true,\n  "cours": ["js", "python"],\n  "adresse": { "ville": "Nantes" },\n  "telephone": null\n}` },
        { h: 'JSON.stringify : de l’objet au texte', p: [
          '`JSON.stringify(valeur)` transforme une valeur en texte JSON. Le troisième argument ajoute une indentation pour le rendre lisible : `JSON.stringify(obj, null, 2)`.',
          'Les propriétés avec `undefined` ou des fonctions sont omises, et les dates sont converties en texte au format ISO.' ],
          code: `const utilisateur = { nom: "Leo", age: 25, saluer() {}, surnom: undefined };\nconsole.log(JSON.stringify(utilisateur));  // {"nom":"Leo","age":25}\nconsole.log(JSON.stringify({ a: 1, b: [2, 3] }, null, 2));\n// {\n//   "a": 1,\n//   "b": [\n//     2,\n//     3\n//   ]\n// }` },
        { h: 'JSON.parse : du texte à l’objet', p: [
          '`JSON.parse(texte)` fait l’inverse : il lit un texte JSON et renvoie la valeur JavaScript.',
          'Si le texte n’est pas un JSON valide, il lève une `SyntaxError` : avec des données venant de l’extérieur, mieux vaut utiliser `try...catch`.' ],
          code: `const texte = '{"produit":"Tasse","prix":8.5}';\nconst obj = JSON.parse(texte);\nconsole.log(obj.prix * 2);  // 17\n\ntry {\n  JSON.parse("{prix: 8.5}");  // clés sans guillemets\n} catch (e) {\n  console.log(e.name);  // SyntaxError\n}` },
        { h: 'Enregistrer, lire et supprimer', p: [
          '`setItem(clé, valeur)` enregistre, `getItem(clé)` lit (renvoie `null` si la clé n’existe pas), `removeItem(clé)` supprime une clé et `clear()` efface tout.',
          '`length` indique combien de clés il y a. Toute valeur est convertie en texte : si tu enregistres le nombre 5, tu liras « 5 ».' ],
          code: `localStorage.setItem("theme", "sombre");\nconsole.log(localStorage.getItem("theme"));   // sombre\nconsole.log(localStorage.getItem("langue"));  // null\n\nlocalStorage.setItem("visites", 3);\nconsole.log(typeof localStorage.getItem("visites"));  // string\nlocalStorage.removeItem("theme");` },
        { h: 'Enregistrer des objets avec JSON', p: [
          'Si tu enregistres un objet directement, il devient le texte « [object Object] » et les données sont perdues. Il faut le passer par `JSON.stringify` à l’enregistrement et par `JSON.parse` à la lecture.',
          'Comme `JSON.parse(null)` renvoie `null`, avec `??` tu peux donner une valeur par défaut quand la clé n’existe pas encore.' ],
          code: `const panier = [{ produit: "Tasse", unites: 2 }];\nlocalStorage.setItem("panier", JSON.stringify(panier));\n\nconst lu = JSON.parse(localStorage.getItem("panier")) ?? [];\nconsole.log(lu[0].produit);  // Tasse` },
        { h: 'Exemple réel : se souvenir du mode sombre', real: true, p: [
          'Un site enregistre la préférence de thème de l’utilisateur. Quand il revient des jours plus tard, la page s’ouvre avec le thème qu’il a choisi.' ],
          code: `const CLE = "preferences";\n\nfunction lirePreferences() {\n  return JSON.parse(localStorage.getItem(CLE)) ?? { theme: "clair", police: 16 };\n}\n\nfunction changerTheme(theme) {\n  const prefs = { ...lirePreferences(), theme };\n  localStorage.setItem(CLE, JSON.stringify(prefs));\n  document.body.dataset.theme = theme;\n}\n\ndocument.body.dataset.theme = lirePreferences().theme;  // au chargement de la page` },
      ],
      x: [
        mc('Lequel de ces textes est un JSON valide ?', ['{"nom": "Ana", "age": 30}', '{nom: "Ana"}', "{'nom': 'Ana'}", '{"age": 30,}'], 'JSON exige des guillemets doubles pour les clés et les textes et n’accepte pas de virgule finale.'),
        out(`console.log(JSON.stringify({ a: 1, b: "x" }));`, ['{"a":1,"b":"x"}', '{ a: 1, b: "x" }', '{"a": 1, "b": "x"}', '[object Object]'], 'Sans indentation, `stringify` ne laisse aucune espace.'),
        out(`const o = JSON.parse('{"n": 5}');\nconsole.log(o.n + 1, typeof o);`, ['6 object', '51 object', '6 string', 'NaN object'], '`parse` renvoie un objet et `n` est un vrai nombre.'),
        fill(`const utilisateur = { nom: "Ana" };\nconst texte = JSON.___(utilisateur);`, ['stringify', 'parse', 'toString', 'encode'], '`stringify` transforme l’objet en texte JSON.'),
        fill(`localStorage.___("theme", "sombre");`, ['setItem', 'set', 'save', 'put'], '`setItem(clé, valeur)` enregistre une valeur.'),
        out(`console.log(localStorage.getItem("inexistant"));`, ['null', 'undefined', '""', 'Erreur'], 'Une clé qui n’existe pas renvoie `null`.'),
        mc('Que ne faut-il PAS enregistrer dans localStorage ?', ['Des mots de passe ou des données sensibles', 'La langue choisie', 'Le thème clair ou sombre', 'Un brouillon de commentaire'], 'N’importe quel script exécuté sur la page peut lire le magasin.'),
        out(`localStorage.clear();\nconst enregistrer = (k, v) => localStorage.setItem(k, JSON.stringify(v));\nconst charger = (k, def) => JSON.parse(localStorage.getItem(k)) ?? def;\nenregistrer("taches", ["pain", "lait"]);\nconst taches = charger("taches", []);\ntaches.push("café");\nenregistrer("taches", taches);\nlocalStorage.removeItem("theme");\nconsole.log(charger("taches", []).length, charger("theme", "clair"), localStorage.length);`, ['3 clair 1', '2 clair 1', '3 null 1', '3 clair 2'], 'Les tâches sont lues, complétées et réenregistrées : 3. "theme" n’existe pas, donc `charger` renvoie la valeur par défaut. Il ne reste qu’une clé.'),
      ],
    },
    // Jour 19
    {
      id: 'js-errors',
      t: 'Erreurs',
      d: 'Gérer les échecs avec try, catch et finally, lever les tiennes avec throw et créer tes propres types d’erreur.',
      guide: [
        { h: 'try et catch', p: [
          'Quand quelque chose échoue, JavaScript lève une erreur et, si personne ne l’attrape, le script s’arrête. Le code qui peut échouer va dans `try` ; s’il échoue, `catch` s’exécute avec l’erreur.',
          'L’objet erreur a `name` (le type) et `message` (la description). Si tu n’as pas besoin de l’erreur, tu peux écrire simplement `catch { ... }`.' ],
          code: `try {\n  const donnees = JSON.parse("{mauvais json}");\n} catch (erreur) {\n  console.log(erreur.name);     // SyntaxError\n  console.log("Impossible de lire le fichier");\n}\nconsole.log("Le programme continue");` },
        { h: 'Lever des erreurs avec throw', p: [
          '`throw new Error("message")` lève une erreur personnalisée. La fonction s’arrête à cet endroit et l’erreur remonte jusqu’au `catch` le plus proche.',
          'Lève des erreurs quand une fonction reçoit des données avec lesquelles elle ne peut pas travailler, au lieu de renvoyer une valeur bizarre qui échouera plus tard.' ],
          code: `function diviser(a, b) {\n  if (b === 0) throw new Error("Impossible de diviser par zéro");\n  return a / b;\n}\n\ntry {\n  console.log(diviser(10, 2));  // 5\n  console.log(diviser(1, 0));   // lève : rien n’est affiché\n} catch (e) {\n  console.log(e.message);       // Impossible de diviser par zéro\n}` },
        { h: 'finally et types d’erreurs', p: [
          '`finally` s’exécute toujours, qu’il y ait une erreur ou non, même si le `try` fait un `return`. Il sert à fermer ou à nettoyer : cacher un indicateur de chargement, fermer une connexion.',
          'Types courants : `TypeError` (mauvaise utilisation d’une valeur, comme lire une propriété de `null`), `ReferenceError` (variable inexistante), `SyntaxError` (code ou JSON mal écrit) et `RangeError` (nombre hors limites).' ],
          code: `try {\n  const utilisateur = null;\n  utilisateur.nom;\n} catch (e) {\n  console.log(e instanceof TypeError);  // true\n} finally {\n  console.log("Nettoyage terminé");\n}` },
        { h: 'Erreurs personnalisées', p: [
          'Tu peux créer tes propres types en héritant de `Error`. Ainsi, le `catch` peut distinguer une erreur de validation d’un échec inattendu avec `instanceof`.',
          'Si un `catch` reçoit une erreur qu’il ne sait pas traiter, le mieux est de la relancer avec `throw e` pour ne pas la cacher.' ],
          code: `class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}\n\ntry {\n  throw new ValidationError("L’e-mail est vide");\n} catch (e) {\n  if (e instanceof ValidationError) console.log("Vérifie :", e.message);\n  else throw e;\n}` },
        { h: 'Exemple réel : lire une configuration', real: true, p: [
          'Une application lit sa configuration enregistrée sous forme de texte. Si le texte est cassé ou qu’il manque une donnée, elle prévient et utilise des valeurs par défaut au lieu de planter.' ],
          code: `function lireConfig(texte) {\n  try {\n    const cfg = JSON.parse(texte);\n    if (!cfg.langue) throw new Error("La langue manque");\n    return cfg;\n  } catch (erreur) {\n    console.warn("Configuration invalide :", erreur.message);\n    return { langue: "fr" };\n  }\n}\n\nconsole.log(lireConfig('{"langue":"es"}').langue);  // es\nconsole.log(lireConfig("{}").langue);               // fr (avec avertissement)\nconsole.log(lireConfig("cassé").langue);            // fr (avec avertissement)` },
      ],
      x: [
        out(`let r = "";\ntry {\n  r += "A";\n  throw new Error("x");\n  r += "B";\n} catch {\n  r += "C";\n} finally {\n  r += "D";\n}\nconsole.log(r);`, ['ACD', 'ABCD', 'AD', 'AC'], 'Après le `throw`, le reste du `try` ne s’exécute pas. Viennent ensuite `catch` et `finally`.'),
        fill(`if (solde < montant) {\n  ___ new Error("Solde insuffisant");\n}`, ['throw', 'raise', 'error', 'catch'], 'En JavaScript, les erreurs se lèvent avec `throw`. `raise` vient de Python.'),
        out(`try {\n  null.length;\n} catch (e) {\n  console.log(e.name);\n}`, ['TypeError', 'ReferenceError', 'SyntaxError', 'RangeError'], 'Lire une propriété de `null`, c’est mal utiliser une valeur : `TypeError`.'),
        out(`try {\n  console.log(nExistePas);\n} catch (e) {\n  console.log(e instanceof ReferenceError);\n}`, ['true', 'false', 'undefined'], 'Utiliser une variable qui n’a pas été déclarée lève une `ReferenceError`.'),
        mc('Quand le bloc `finally` s’exécute-t-il ?', ['Toujours, qu’il y ait une erreur ou non', 'Seulement s’il y a une erreur', 'Seulement s’il n’y a pas d’erreur', 'Jamais si le try fait un return'], 'C’est pourquoi on s’en sert pour nettoyer, quoi qu’il arrive.'),
        typ('Crée ton propre type d’erreur', `class ValidationError ___ Error {}`, 'extends', 'Hériter de `Error` permet ensuite de la distinguer avec `instanceof`.'),
        out(`function f() {\n  try {\n    return "try";\n  } finally {\n    console.log("finally");\n  }\n}\nconsole.log(f());`, ['finally\ntry', 'try\nfinally', 'try', 'finally'], 'Le `return` attend que `finally` se termine : on voit d’abord "finally", puis la valeur renvoyée.'),
        out('class ValidationError extends Error {\n  constructor(champ) {\n    super(`${champ} n’est pas valide`);\n    this.name = "ValidationError";\n  }\n}\nfunction valider(age) {\n  if (typeof age !== "number") throw new TypeError("l’âge doit être un nombre");\n  if (age < 0) throw new ValidationError("age");\n  return age;\n}\nconst journal = [];\nfor (const v of [30, -1, "x"]) {\n  try {\n    journal.push(valider(v));\n  } catch (e) {\n    journal.push(e instanceof ValidationError ? e.message : e.name);\n  } finally {\n    journal.push("|");\n  }\n}\nconsole.log(journal.join(" "));', ['30 | age n’est pas valide | TypeError |', '30 | age n’est pas valide | l’âge doit être un nombre |', '30 | ValidationError | TypeError |', '30 age n’est pas valide TypeError'], '30 est valide. -1 lève `ValidationError` et on garde son message. "x" lève `TypeError`, qui n’est pas une `ValidationError`, on garde donc son `name`. `finally` ajoute "|" à chacun des trois tours.'),
      ],
    },
    // Jour 20
    {
      id: 'js-closures',
      t: 'Portée et closures',
      d: 'Des fonctions qui se souviennent des variables de l’endroit où elles sont nées : fabriques de fonctions et données privées.',
      guide: [
        { h: 'La portée lexicale', p: [
          'Une fonction peut utiliser les variables de l’endroit où elle a été écrite, pas de l’endroit d’où on l’appelle. C’est la portée lexicale.',
          'Les fonctions intérieures voient les variables des fonctions extérieures, mais pas l’inverse.' ],
          code: `const salutation = "Bonjour";\nfunction exterieure() {\n  const nom = "Ana";\n  function interieure() {\n    return salutation + ", " + nom;  // voit les deux variables\n  }\n  return interieure();\n}\nconsole.log(exterieure());  // Bonjour, Ana` },
        { h: 'Ce qu’est une closure', p: [
          'Une closure est une fonction qui se souvient des variables de sa portée même quand la fonction qui les a créées est terminée.',
          'Chaque appel à la fonction extérieure crée une nouvelle portée, donc chaque closure a ses propres variables.' ],
          code: `function creerCompteur() {\n  let compte = 0;\n  return () => ++compte;\n}\n\nconst a = creerCompteur();\nconst b = creerCompteur();\na();\na();\nconsole.log(a(), b());  // 3 1` },
        { h: 'Fabriques de fonctions et données privées', p: [
          'Une fabrique de fonctions renvoie des fonctions configurées avec les données qu’elle reçoit : `multiplicateur(3)` crée une fonction qui triple.',
          'Les variables de la closure sont privées : personne ne peut y toucher de l’extérieur, sauf à travers les fonctions renvoyées.' ],
          code: `function multiplicateur(k) {\n  return (n) => n * k;\n}\nconst triple = multiplicateur(3);\nconsole.log(triple(5));  // 15\n\nfunction creerPorteMonnaie() {\n  let solde = 0;\n  return {\n    deposer: (c) => (solde += c),\n    consulter: () => solde,\n  };\n}\nconst pm = creerPorteMonnaie();\npm.deposer(10);\nconsole.log(pm.consulter(), pm.solde);  // 10 undefined` },
        { h: 'Closures dans les boucles', p: [
          'Avec `let`, chaque tour de boucle a sa propre variable, donc chaque closure se souvient d’une valeur différente.',
          'Avec `var`, il n’existe qu’une variable pour toute la boucle et toutes les closures voient sa valeur finale. C’est une erreur classique ; utiliser `let` l’évite.' ],
          code: `for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log("let:", i), 0);   // 0, 1, 2\n}\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log("var:", j), 0);   // 3, 3, 3\n}` },
        { h: 'Exemple réel : limiter les tentatives de connexion', real: true, p: [
          'Un formulaire de connexion autorise trois tentatives. Le compteur vit dans une closure, donc aucun autre code de la page ne peut le remettre à zéro.' ],
          code: `function creerLimiteur(maximum) {\n  let tentatives = 0;\n  return function essayer(correct) {\n    if (tentatives >= maximum) return "Bloqué";\n    tentatives++;\n    return correct ? "Bienvenue" : "Il en reste " + (maximum - tentatives);\n  };\n}\n\nconst connexion = creerLimiteur(3);\nconsole.log(connexion(false));  // Il en reste 2\nconsole.log(connexion(false));  // Il en reste 1\nconsole.log(connexion(false));  // Il en reste 0\nconsole.log(connexion(true));   // Bloqué` },
      ],
      x: [
        out(`function creer() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = creer();\na();\na();\nconsole.log(a());`, ['3', '1', '0', 'undefined'], 'La fonction renvoyée se souvient de `n` entre les appels.'),
        out(`function creer() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = creer();\nconst b = creer();\na();\na();\nconsole.log(a(), b());`, ['3 1', '3 4', '1 1', '3 3'], 'Chaque appel à `creer` a son propre `n`.'),
        mc('Qu’est-ce qu’une closure ?', ['Une fonction qui se souvient des variables de la portée où elle a été créée', 'Une fonction qui se ferme toute seule', 'Une boucle qui se termine', 'Un objet sans propriétés'], 'Elle s’en souvient même quand la fonction qui l’a créée est terminée.'),
        out(`const fs = [];\nfor (var i = 0; i < 3; i++) fs.push(() => i);\nconsole.log(fs.map((f) => f()).join(""));`, ['333', '012', '222', 'undefined'], 'Avec `var`, il n’y a qu’un seul `i` pour toute la boucle et à la fin il vaut 3.'),
        fill(`const fs = [];\nfor (___ i = 0; i < 3; i++) fs.push(() => i);\nconsole.log(fs.map((f) => f()).join(""));  // 012`, ['let', 'var', 'global', 'static'], 'Avec `let`, chaque tour a sa propre variable.'),
        typ('Complète la fabrique de fonctions', `function multiplicateur(k) {\n  return (n) => n * ___;\n}\nconsole.log(multiplicateur(4)(5));  // 20`, 'k', 'La fonction renvoyée se souvient du `k` avec lequel elle a été créée.'),
        out(`function uneFois(fn) {\n  let fait = false, r;\n  return (...args) => {\n    if (!fait) {\n      fait = true;\n      r = fn(...args);\n    }\n    return r;\n  };\n}\nconst init = uneFois((x) => x * 10);\nconsole.log(init(2), init(5));`, ['20 20', '20 50', '20 undefined', '50 50'], 'Le deuxième appel n’exécute plus `fn` : il renvoie le résultat mémorisé.'),
        out(`function creerBanque(soldeInitial) {\n  let solde = soldeInitial;\n  const historique = [];\n  return {\n    deposer(c) { solde += c; historique.push("+" + c); return this; },\n    retirer(c) { if (c <= solde) { solde -= c; historique.push("-" + c); } return this; },\n    resume: () => solde + " [" + historique.join(",") + "]",\n  };\n}\nconst compte = creerBanque(10);\ncompte.deposer(5).retirer(20).retirer(8);\nconst autre = creerBanque(0);\nconsole.log(compte.resume(), autre.resume(), compte.solde);`, ['7 [+5,-8] 0 [] undefined', '7 [+5,-20,-8] 0 [] undefined', '7 [+5,-8] 7 [+5,-8] 7', '-13 [+5,-20,-8] 0 [] undefined'], '10 + 5 = 15 ; retirer 20 n’est pas autorisé ; retirer 8 laisse 7. `autre` a son propre solde et son propre historique. `solde` est privé : ce n’est pas une propriété de l’objet.'),
      ],
    },
    // Jour 21
    {
      id: 'js-workshop-sales',
      t: 'L’atelier de Kibi : le rapport des ventes sur le web',
      d: 'Projet de la semaine 3 : une page qui lit les ventes collées dans une zone de texte, signale les erreurs, affiche les totaux par mois et se souvient du dernier rapport.',
      guide: [
        { h: 'La commande', p: [
          'Kibi note les ventes dans un tableur et veut les coller dans une page pour voir combien la boutique vend chaque mois. Si une ligne est fausse, la page doit dire laquelle, et au retour elle doit afficher le dernier rapport.',
          'Cet atelier réunit la semaine 3 : le DOM, modifier la page, les événements, JSON et localStorage, les erreurs et les closures. Voici la page de départ :' ],
          code: `<textarea id="donnees" rows="6">date,produit,montant\n2026-03-02,graines,4.50\n2026-03-15,foin,7.25\n2026-04-01,graines,4.50</textarea>\n<button id="calculer">Calculer</button>\n<p id="erreur" hidden></p>\n<table id="rapport"></table>\n<script src="rapport.js"></script>` },
        { h: 'Étape 1 : lire le texte et signaler les erreurs', p: [
          'On découpe le texte en lignes, on retire l’en-tête et on transforme chaque ligne en objet. Si une date n’a pas la forme `AAAA-MM-JJ` ou si le montant n’est pas un nombre, on lève une erreur qui indique quelle ligne pose problème.',
          'Lever l’erreur ici et l’attraper là où la page est affichée sépare le « qu’est-ce qui ne va pas » du « comment je le montre à l’utilisateur ».' ],
          code: `function lireVentes(texte) {\n  const lignes = texte.trim().split("\\n").slice(1);\n  return lignes.map((ligne, i) => {\n    const [date, produit, montant] = ligne.split(",");\n    const n = Number(montant);\n    if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(date) || Number.isNaN(n)) {\n      throw new Error(\`Ligne \${i + 2} non valide : \${ligne}\`);\n    }\n    return { date, produit, montant: n };\n  });\n}` },
        { h: 'Étape 2 : les totaux par mois', p: [
          '`reduce` part d’un objet vide et ajoute chaque vente à la clé de son mois. `?? 0` donne 0 la première fois qu’un mois apparaît.' ],
          code: `function parMois(ventes) {\n  return ventes.reduce((totaux, v) => {\n    const mois = v.date.slice(0, 7);\n    totaux[mois] = (totaux[mois] ?? 0) + v.montant;\n    return totaux;\n  }, {});\n}\n\nconsole.log(JSON.stringify(parMois([{ date: "2026-03-02", montant: 4.5 }, { date: "2026-03-15", montant: 7.25 }])));\n// {"2026-03":11.75}` },
        { h: 'Étape 3 : afficher le tableau au clic', p: [
          'Chaque ligne du tableau se crée avec `insertRow()` et ses cellules avec `insertCell()`. On utilise `textContent`, jamais `innerHTML`, car le texte vient de l’utilisateur et pourrait contenir du HTML.',
          'Le clic appelle les deux fonctions dans un `try`. Si `lireVentes` lève une erreur, le `catch` affiche son message au lieu de casser la page.' ],
          code: `const $ = (selecteur) => document.querySelector(selecteur);\n\nfunction afficher(totaux) {\n  const table = $("#rapport");\n  table.replaceChildren();\n  for (const [mois, total] of Object.entries(totaux)) {\n    const ligne = table.insertRow();\n    ligne.insertCell().textContent = mois;\n    ligne.insertCell().textContent = total.toFixed(2) + " €";\n  }\n}\n\n$("#calculer").addEventListener("click", () => {\n  try {\n    const totaux = parMois(lireVentes($("#donnees").value));\n    afficher(totaux);\n    localStorage.setItem("kibi.rapport", JSON.stringify(totaux));\n    $("#erreur").hidden = true;\n  } catch (erreur) {\n    $("#erreur").textContent = erreur.message;\n    $("#erreur").hidden = false;\n  }\n});` },
        { h: 'Étape 4 : se souvenir du dernier rapport', p: [
          'À l’enregistrement, l’objet des totaux devient du texte avec `JSON.stringify`. À l’ouverture de la page, on le relit avec `JSON.parse` ; s’il n’y a rien ou si le texte est abîmé, on n’affiche rien.' ],
          code: `function chargerDernier() {\n  try {\n    return JSON.parse(localStorage.getItem("kibi.rapport"));\n  } catch {\n    return null;\n  }\n}\n\nconst dernier = chargerDernier();\nif (dernier) afficher(dernier);` },
        { h: 'Exemple réel : recalculer pendant la saisie', real: true, p: [
          'Recalculer à chaque touche serait du gaspillage. `retarder()` renvoie une fonction qui se souvient, grâce à une closure, du minuteur en attente : chaque touche le relance, et le rapport n’est calculé que lorsque Kibi arrête de taper pendant 400 ms.' ],
          code: `function retarder(fn, ms) {\n  let attente;\n  return () => {\n    clearTimeout(attente);\n    attente = setTimeout(fn, ms);\n  };\n}\n\n$("#donnees").addEventListener("input", retarder(() => $("#calculer").click(), 400));` },
      ],
      x: [
        mc('Pourquoi remplit-on les cellules avec `textContent` et pas `innerHTML` ?', ['Parce que le texte vient de l’utilisateur et qu’innerHTML pourrait injecter du HTML ou des scripts', 'Parce qu’innerHTML ne marche pas dans les tableaux', 'Parce que textContent est plus court à écrire', 'Parce qu’innerHTML supprime les événements de toute la page'], '`textContent` traite tout comme du texte. `innerHTML` interprète les balises, ce qui ouvre la porte à l’injection de code.'),
        out(`const [date, produit, montant] = "2026-03-02,graines,4.50".split(",");\nconsole.log(produit, Number(montant) * 2);`, ['graines 9', 'graines 9.00', '4.50 9', 'graines NaN'], '`split(",")` donne trois textes déstructurés dans l’ordre. `Number("4.50") * 2` vaut 9.'),
        fill(`document.querySelector("#calculer").___("click", calculer);`, ['addEventListener', 'onClick', 'listen', 'addEvent'], '`addEventListener(type, fonction)` exécute la fonction chaque fois que l’événement se produit.'),
        out(`try {\n  throw new Error("Ligne 3 non valide");\n} catch (e) {\n  console.log(e.message);\n}`, ['Ligne 3 non valide', 'Error', 'Error: Ligne 3 non valide', 'undefined'], '`e.message` ne contient que le texte passé à la création de l’erreur.'),
        out(`const ventes = [{ date: "2026-03-02", montant: 4.5 }, { date: "2026-04-01", montant: 3 }, { date: "2026-03-31", montant: 1.5 }];\nconst totaux = {};\nfor (const v of ventes) {\n  const mois = v.date.slice(0, 7);\n  totaux[mois] = (totaux[mois] ?? 0) + v.montant;\n}\nconsole.log(JSON.stringify(totaux));`, ['{"2026-03":6,"2026-04":3}', '{"2026-03":4.5,"2026-04":3}', '{"2026-03":6}', '[object Object]'], 'Mars fait 4.5 + 1.5 = 6 et avril, 3. `JSON.stringify` écrit l’objet sous forme de texte JSON.'),
        out(`localStorage.setItem("rapport", JSON.stringify({ total: 9 }));\nconst lu = JSON.parse(localStorage.getItem("rapport"));\nconsole.log(lu.total + 1, typeof lu);`, ['10 object', '91 string', '10 string', 'NaN object'], 'On l’enregistre en texte JSON et `JSON.parse` le retransforme en objet, avec `total` comme nombre.'),
        typ('Empêche le formulaire de recharger la page quand on l’envoie', `formulaire.addEventListener("submit", (e) => {\n  e.___();\n  calculer();\n});`, 'preventDefault', '`preventDefault()` annule ce que le navigateur ferait par défaut, ici envoyer le formulaire et recharger.'),
        out(`function lecteur() {\n  let erreurs = 0;\n  return (texte) => {\n    try {\n      if (Number.isNaN(Number(texte))) throw new Error("pas un nombre");\n      return Number(texte);\n    } catch {\n      erreurs++;\n      return -erreurs;\n    }\n  };\n}\nconst lire = lecteur();\nconsole.log(lire("4.5"), lire("abc"), lire("x"), lire("2"));`, ['4.5 -1 -2 2', '4.5 -1 -1 2', '4.5 NaN NaN 2', '4.5 0 0 2'], 'La fonction renvoyée se souvient d’`erreurs` grâce à la closure : chaque texte non numérique l’augmente, donc le deuxième échec renvoie -2.'),
      ],
    },
    // Jour 22
    {
      id: 'js-classes',
      t: 'Classes',
      d: 'class, constructor, méthodes, getters, héritage avec extends, static et champs privés.',
      guide: [
        { h: 'Déclarer une classe', p: [
          'Une classe est un moule pour créer des objets de même forme. Le `constructor` s’exécute avec `new` et prépare les propriétés de l’objet avec `this`.',
          'Les méthodes s’écrivent dans la classe sans le mot `function` et sont partagées par tous les objets créés avec elle.' ],
          code: `class Produit {\n  constructor(nom, prix) {\n    this.nom = nom;\n    this.prix = prix;\n  }\n  avecTva() {\n    return this.prix * 1.2;\n  }\n}\n\nconst livre = new Produit("Livre", 20);\nconsole.log(livre.nom, livre.avecTva());  // Livre 24` },
        { h: 'Getters, setters et champs privés', p: [
          'Un champ qui commence par `#` est privé : on ne peut l’utiliser qu’à l’intérieur de la classe. Essayer de le lire depuis l’extérieur est une erreur de syntaxe.',
          '`get` définit une propriété calculée qu’on lit sans parenthèses et `set` une propriété qui valide avant d’enregistrer.' ],
          code: `class Thermostat {\n  #degres = 20;\n  get degres() {\n    return this.#degres;\n  }\n  set degres(valeur) {\n    this.#degres = Math.min(30, Math.max(15, valeur));\n  }\n}\n\nconst t = new Thermostat();\nt.degres = 42;\nconsole.log(t.degres);  // 30` },
        { h: 'Héritage avec extends et super', p: [
          '`class Fille extends Mere` crée une classe qui hérite des propriétés et méthodes d’une autre. Elle peut ajouter les siennes et redéfinir celles héritées.',
          'Dans le constructeur de la fille, il faut appeler `super(...)` avant d’utiliser `this`. Dans une méthode, `super.methode()` appelle la version de la mère.' ],
          code: `class Animal {\n  constructor(nom) {\n    this.nom = nom;\n  }\n  parler() {\n    return this.nom + " fait un bruit";\n  }\n}\n\nclass Chien extends Animal {\n  parler() {\n    return super.parler() + " : ouaf !";\n  }\n}\n\nconsole.log(new Chien("Toby").parler());  // Toby fait un bruit : ouaf !` },
        { h: 'Membres static et instanceof', p: [
          'Une méthode ou propriété `static` appartient à la classe, pas à chaque objet : on l’utilise comme `Classe.methode()`. Elle sert pour les utilitaires et les compteurs partagés.',
          '`objet instanceof Classe` vérifie si un objet a été créé avec cette classe ou avec une classe qui en hérite. Au fond, une classe reste une fonction : `typeof Classe` vaut « function ».' ],
          code: `class Utilisateur {\n  static crees = 0;\n  constructor(nom) {\n    this.nom = nom;\n    Utilisateur.crees++;\n  }\n  static invite() {\n    return new Utilisateur("invité");\n  }\n}\n\nconst u = Utilisateur.invite();\nnew Utilisateur("Ana");\nconsole.log(Utilisateur.crees, u instanceof Utilisateur);  // 2 true` },
        { h: 'Exemple réel : un panier d’achat', real: true, p: [
          'Une boutique en ligne garde les lignes du panier dans un champ privé. De l’extérieur, on ne peut qu’ajouter des produits et lire le total, donc personne ne peut laisser le panier dans un état incorrect.' ],
          code: `class Panier {\n  #lignes = [];\n  ajouter(produit, prix, unites = 1) {\n    if (unites <= 0) throw new Error("Unités invalides");\n    this.#lignes.push({ produit, prix, unites });\n    return this;   // permet d’enchaîner\n  }\n  get total() {\n    return this.#lignes.reduce((s, l) => s + l.prix * l.unites, 0);\n  }\n  get nombre() {\n    return this.#lignes.length;\n  }\n}\n\nconst p = new Panier().ajouter("Tasse", 8, 2).ajouter("Café", 12);\nconsole.log(p.nombre, p.total);  // 2 28` },
      ],
      x: [
        fill(`class Chien ___ Animal {\n  aboyer() { return "ouaf"; }\n}`, ['extends', 'inherits', 'implements', ':'], 'En JavaScript, l’héritage s’écrit avec `extends`.'),
        out(`class Compteur {\n  #n = 0;\n  inc() {\n    this.#n++;\n    return this;\n  }\n  get valeur() {\n    return this.#n;\n  }\n}\nconst c = new Compteur();\nc.inc().inc().inc();\nconsole.log(c.valeur);`, ['3', '1', 'undefined', 'Erreur'], '`inc` renvoie `this`, on peut donc enchaîner. Le getter se lit sans parenthèses.'),
        mc('Que fait `super(...)` dans le constructeur d’une classe fille ?', ['Il appelle le constructeur de la classe mère', 'Il crée une copie de l’objet', 'Il rend la méthode statique', 'Il supprime la classe mère'], 'Il est obligatoire de l’appeler avant d’utiliser `this` dans une classe qui utilise `extends`.'),
        out(`class A {\n  salut() { return "A"; }\n}\nclass B extends A {\n  salut() { return "B" + super.salut(); }\n}\nconsole.log(new B().salut());`, ['BA', 'B', 'A', 'AB'], '`B` redéfinit `salut`, mais appelle la version de `A` avec `super.salut()`.'),
        typ('Fais en sorte que la méthode s’utilise depuis la classe, sans créer d’objet', `class Maths {\n  ___ double(n) { return n * 2; }\n}\nconsole.log(Maths.double(4));`, 'static', 'Les méthodes `static` appartiennent à la classe.'),
        out(`class Point {\n  constructor(x) { this.x = x; }\n}\nconst p = new Point(2);\nconsole.log(typeof Point, p instanceof Point);`, ['function true', 'class true', 'object true', 'function false'], 'Au fond, une classe est une fonction spéciale.'),
        mc('Que se passe-t-il si on écrit `panier.#lignes` en dehors de la classe ?', ['Erreur de syntaxe : les champs privés ne s’utilisent que dans la classe', 'Ça renvoie undefined', 'Ça renvoie le tableau', 'Ça renvoie null'], 'Les champs `#` sont protégés par le langage lui-même, pas seulement par convention.'),
        out(`class Compte {\n  static total = 0;\n  #solde;\n  constructor(titulaire, solde = 0) {\n    this.titulaire = titulaire;\n    this.#solde = solde;\n    Compte.total++;\n  }\n  retirer(c) {\n    if (c > this.#solde) throw new Error("Fonds insuffisants");\n    this.#solde -= c;\n  }\n  get solde() { return this.#solde; }\n}\nclass Epargne extends Compte {\n  retirer(c) { super.retirer(c + 1); }\n}\nconst a = new Compte("Ana", 50);\nconst b = new Epargne("Leo", 20);\na.retirer(30);\ntry { b.retirer(20); } catch (e) { console.log(e.message); }\nconsole.log(a.solde, b.solde, Compte.total);`, ['Fonds insuffisants\n20 20 2', 'Fonds insuffisants\n20 0 2', '20 0 2', 'Fonds insuffisants\n20 20 1'], '`a` passe de 50 à 20. `Epargne` prélève 1 de frais : retirer 20 demande 21, plus que ce qu’il a, et lève l’erreur sans toucher au solde. Deux comptes ont été créés.'),
      ],
    },
    // Jour 23
    {
      id: 'js-promises',
      t: 'Promesses',
      d: 'Du code qui finit plus tard : Promise, then, catch, Promise.all et l’ordre dans lequel tout s’exécute.',
      guide: [
        { h: 'Le code asynchrone', p: [
          'Certaines tâches prennent du temps : demander des données à un serveur, lire un fichier, attendre un minuteur. JavaScript ne reste pas bloqué à attendre : il continue avec le reste du code et traite le résultat quand il arrive.',
          '`setTimeout(fn, ms)` est l’exemple le plus simple : il programme une fonction pour plus tard. Même avec 0 ms, elle s’exécute après le code déjà en cours.' ],
          code: `console.log("1. Je demande les données");\nsetTimeout(() => console.log("3. Les données arrivent"), 1000);\nconsole.log("2. Je continue à travailler");` },
        { h: 'Créer et utiliser des promesses', p: [
          'Une promesse représente une valeur qui arrivera dans le futur. Elle est en attente, puis elle est tenue (resolve) ou rejetée (reject).',
          '`then` reçoit la valeur quand elle est tenue, `catch` l’erreur quand elle est rejetée et `finally` s’exécute dans les deux cas.' ],
          code: `function lancerDe() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const n = Math.ceil(Math.random() * 6);\n      if (n === 1) reject(new Error("Tu as fait un 1"));\n      else resolve(n);\n    }, 500);\n  });\n}\n\nlancerDe()\n  .then((n) => console.log("Tu as fait", n))\n  .catch((e) => console.log(e.message))\n  .finally(() => console.log("Fin du lancer"));` },
        { h: 'Enchaîner', p: [
          'Ce que renvoie un `then` est la valeur que reçoit le suivant. S’il renvoie une autre promesse, la chaîne attend qu’elle soit tenue.',
          'Un seul `catch` à la fin attrape l’erreur de n’importe quelle étape précédente.' ],
          code: `Promise.resolve(2)\n  .then((n) => n * 10)\n  .then((n) => {\n    if (n > 100) throw new Error("Trop grand");\n    return n + 1;\n  })\n  .then((n) => console.log(n))   // 21\n  .catch((e) => console.log(e.message));` },
        { h: 'Plusieurs promesses et l’ordre d’exécution', p: [
          '`Promise.all([...])` attend qu’elles soient toutes tenues et renvoie leurs valeurs dans l’ordre ; si une échoue, tout échoue. `Promise.allSettled` les attend toutes et dit comment chacune s’est terminée. `Promise.race` garde la première qui se termine.',
          'L’ordre : d’abord tout le code synchrone, ensuite les promesses tenues (microtâches) et enfin les minuteurs (macrotâches).' ],
          code: `console.log("A");\nsetTimeout(() => console.log("D"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("B");\n// A B C D` },
        { h: 'Exemple réel : charger un tableau de bord en parallèle', real: true, p: [
          'Un tableau de bord a besoin de l’utilisateur, de ses commandes et de ses notifications. On les demande en même temps avec `Promise.all` : le temps total est celui de la requête la plus lente, pas la somme de toutes.' ],
          code: `const attendre = (ms, valeur) => new Promise((r) => setTimeout(() => r(valeur), ms));\n\nconst demanderUtilisateur = () => attendre(300, { nom: "Ana" });\nconst demanderCommandes = () => attendre(500, [101, 102]);\nconst demanderAvis = () => attendre(200, ["Colis en route"]);\n\nconsole.time("tableau");\nPromise.all([demanderUtilisateur(), demanderCommandes(), demanderAvis()])\n  .then(([utilisateur, commandes, avis]) => {\n    console.log(utilisateur.nom, commandes.length, avis[0]);  // Ana 2 Colis en route\n    console.timeEnd("tableau");  // environ 500 ms, pas 1000\n  })\n  .catch((e) => console.log("Impossible de charger le tableau :", e.message));` },
      ],
      x: [
        out(`console.log("A");\nsetTimeout(() => console.log("B"), 0);\nconsole.log("C");`, ['A\nC\nB', 'A\nB\nC', 'B\nA\nC', 'C\nA\nB'], 'Le minuteur s’exécute quand le code synchrone est terminé, même avec 0 ms.'),
        out(`console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);`, ['1\n4\n3\n2', '1\n2\n3\n4', '1\n4\n2\n3', '1\n3\n4\n2'], 'D’abord le code synchrone (1 et 4), ensuite les promesses (3) et enfin les minuteurs (2).'),
        fill(`const p = Promise.___(new Error("raté"));\np.catch((e) => console.log(e.message));  // raté`, ['reject', 'fail', 'error', 'catch'], '`Promise.reject` crée une promesse déjà rejetée, comme `Promise.resolve` en crée une déjà tenue.'),
        out(`Promise.resolve(2)\n  .then((n) => n * 3)\n  .then((n) => console.log(n + 1));`, ['7', '6', '3', 'undefined'], 'Le premier `then` renvoie 6 et le second le reçoit : 6 + 1 = 7.'),
        mc('Que fait `Promise.all` si l’une des promesses est rejetée ?', ['Elle est rejetée dès qu’une échoue', 'Elle ignore celle qui échoue', 'Elle les attend toutes et renvoie les erreurs', 'Elle la relance'], 'Si tu as besoin du résultat de toutes, même en cas d’échec, utilise `Promise.allSettled`.'),
        typ('Attrape l’erreur de la chaîne', `demanderDonnees()\n  .then(afficher)\n  .___((erreur) => console.log(erreur.message));`, 'catch', 'Un `catch` à la fin attrape l’erreur de n’importe quelle étape précédente.'),
        out(`Promise.reject(new Error("x"))\n  .then(() => console.log("A"))\n  .catch((e) => console.log("B", e.message))\n  .finally(() => console.log("C"));`, ['B x\nC', 'A\nB x\nC', 'B x', 'A\nC'], 'La promesse rejetée saute le `then` et arrive au `catch`. `finally` s’exécute toujours.'),
        out(`const attendre = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms));\nconst journal = [];\nPromise.all([attendre(30, "a"), attendre(10, "b"), 5]).then((r) => journal.push(r.join("")));\nPromise.race([attendre(20, "x"), attendre(5, "y")]).then((v) => journal.push(v));\nPromise.allSettled([Promise.reject(new Error("non")), 1]).then((r) => journal.push(r.map((s) => s.status[0]).join("")));\nsetTimeout(() => console.log(journal.join(" ")), 50);`, ['rf y ab5', 'ab5 y rf', 'y rf ab5', 'rf x ab5'], '`allSettled` n’attend aucun minuteur : il finit en premier avec "rejected" et "fulfilled" (rf). `race` garde celle de 5 ms (y). `all` attend la plus lente et respecte l’ordre d’origine : ab5.'),
      ],
    },
    // Jour 24
    {
      id: 'js-async',
      t: 'async/await et fetch',
      d: 'Écrire du code asynchrone qui se lit de haut en bas et demander des données à une API avec fetch.',
      guide: [
        { h: 'async et await', p: [
          'Une fonction `async` renvoie toujours une promesse. À l’intérieur, `await` attend qu’une promesse soit tenue et renvoie sa valeur, comme si le code était synchrone.',
          '`await` ne met en pause que cette fonction : le reste du programme continue de fonctionner. Dans les modules, on peut aussi utiliser `await` en dehors des fonctions.' ],
          code: `const attendre = (ms) => new Promise((r) => setTimeout(r, ms));\n\nasync function compteARebours() {\n  for (let i = 3; i > 0; i--) {\n    console.log(i);\n    await attendre(1000);\n  }\n  return "Décollage !";\n}\n\ncompteARebours().then(console.log);  // 3, 2, 1, Décollage !` },
        { h: 'Erreurs avec try...catch', p: [
          'Si la promesse attendue est rejetée, `await` lève l’erreur. On l’attrape avec un `try...catch` normal, comme les erreurs synchrones.',
          'Ainsi, le code asynchrone se lit de haut en bas, sans chaînes de `then`.' ],
          code: `async function chargerProfil(id) {\n  try {\n    const utilisateur = await demanderUtilisateur(id);\n    const commandes = await demanderCommandes(utilisateur.id);\n    return { utilisateur, commandes };\n  } catch (erreur) {\n    console.log("Impossible de charger :", erreur.message);\n    return null;\n  }\n}` },
        { h: 'fetch : demander des données à une API', p: [
          '`fetch(url)` fait une requête HTTP et renvoie une promesse avec la réponse. `reponse.json()` lit le corps et le convertit depuis JSON, et renvoie lui aussi une promesse.',
          'Attention : `fetch` n’est rejeté que si le réseau échoue. Un 404 ou un 500 tiennent la promesse, il faut donc vérifier `reponse.ok`.' ],
          code: `async function chercherUtilisateur(id) {\n  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);\n  if (!res.ok) throw new Error("Erreur HTTP " + res.status);\n  const utilisateur = await res.json();\n  return utilisateur.name;\n}\n\nchercherUtilisateur(1).then(console.log);  // Leanne Graham` },
        { h: 'Envoyer des données et requêtes en parallèle', p: [
          'Pour envoyer des données, on passe un deuxième argument avec `method`, `headers` et `body`. Le corps est converti en texte avec `JSON.stringify`.',
          'Deux `await` à la suite attendent l’un après l’autre. Si les requêtes ne dépendent pas l’une de l’autre, lance-les en même temps avec `await Promise.all([...])`.' ],
          code: `const res = await fetch("/api/commandes", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ produit: "Tasse", unites: 2 }),\n});\n\n// En parallèle : ça dure autant que la plus lente\nconst [utilisateurs, produits] = await Promise.all([\n  fetch("/api/utilisateurs").then((r) => r.json()),\n  fetch("/api/produits").then((r) => r.json()),\n]);` },
        { h: 'Exemple réel : un moteur de recherche avec une API', real: true, p: [
          'Un champ de recherche affiche les utilisateurs d’une API dont le nom contient le texte tapé. Il indique le chargement et affiche un message clair si quelque chose échoue.' ],
          code: `const input = document.querySelector("#recherche");\nconst resultats = document.querySelector("#resultats");\n\nasync function rechercher(texte) {\n  resultats.textContent = "Chargement...";\n  try {\n    const res = await fetch("https://jsonplaceholder.typicode.com/users");\n    if (!res.ok) throw new Error("Erreur HTTP " + res.status);\n    const utilisateurs = await res.json();\n    const trouves = utilisateurs.filter((u) =>\n      u.name.toLowerCase().includes(texte.toLowerCase())\n    );\n    resultats.textContent = trouves.map((u) => u.name).join(", ") || "Aucun résultat";\n  } catch (erreur) {\n    resultats.textContent = "La recherche a échoué : " + erreur.message;\n  }\n}\n\ninput.addEventListener("change", () => rechercher(input.value));` },
      ],
      x: [
        out(`async function f() {\n  return 5;\n}\nconsole.log(f() instanceof Promise);`, ['true', 'false', '5', 'undefined'], 'Une fonction `async` renvoie toujours une promesse, même si elle renvoie une valeur normale.'),
        out(`async function tache() {\n  console.log("B");\n  await null;\n  console.log("D");\n}\nconsole.log("A");\ntache();\nconsole.log("C");`, ['A\nB\nC\nD', 'A\nB\nD\nC', 'A\nC\nB\nD', 'B\nA\nC\nD'], 'La fonction s’exécute jusqu’au premier `await` ; elle rend alors la main et reprend quand le code synchrone est terminé.'),
        fill(`async function charger() {\n  const res = ___ fetch("/api/produits");\n  return res.json();\n}`, ['await', 'async', 'then', 'wait'], '`await` attend que la promesse de `fetch` soit tenue.'),
        mc('Si le serveur répond avec une erreur 404, que fait la promesse de `fetch` ?', ['Elle est tenue ; il faut vérifier reponse.ok', 'Elle est toujours rejetée', 'Elle renvoie null', 'Elle lève une SyntaxError'], '`fetch` n’est rejeté que quand le réseau échoue.'),
        typ('Convertis le corps de la réponse de JSON en objet', `const res = await fetch("/api/utilisateur");\nconst donnees = await res.___();`, 'json', '`res.json()` lit le corps et le convertit ; il faut aussi l’attendre.'),
        out(`const echouer = () => Promise.reject(new Error("pas de réseau"));\nasync function charger() {\n  try {\n    await echouer();\n    return "ok";\n  } catch (e) {\n    return "erreur: " + e.message;\n  }\n}\ncharger().then((r) => console.log(r));`, ['erreur: pas de réseau', 'ok', 'pas de réseau', 'undefined'], 'Le `await` d’une promesse rejetée lève l’erreur, qui est attrapée dans le `catch`.'),
        mc('Comment attendre deux requêtes indépendantes sans perdre de temps ?', ['await Promise.all([demanderA(), demanderB()])', 'await demanderA(); await demanderB();', 'demanderA().await + demanderB().await', 'async Promise.race([demanderA()])'], 'Avec deux `await` à la suite, la deuxième requête ne commence qu’une fois la première terminée.'),
        out(`const journal = [];\nconst attendre = (ms, v) => new Promise((r) => setTimeout(() => { journal.push(v); r(v); }, ms));\nasync function sequentiel() {\n  const a = await attendre(30, "s1");\n  const b = await attendre(30, "s2");\n  return a + b;\n}\nasync function parallele() {\n  const [a, b] = await Promise.all([attendre(40, "p1"), attendre(10, "p2")]);\n  return a + b;\n}\nPromise.all([sequentiel(), parallele()]).then(([s, p]) => console.log(journal.join(" "), "|", s, p));`, ['p2 s1 p1 s2 | s1s2 p1p2', 's1 s2 p1 p2 | s1s2 p1p2', 'p2 s1 p1 s2 | s1s2 p2p1', 'p2 p1 s1 s2 | s1s2 p1p2'], 'p2 se termine à 10 ms, s1 à 30 et p1 à 40. s2 ne commence qu’après s1, il se termine donc à 60. `Promise.all` renvoie les valeurs dans l’ordre de la demande, pas dans l’ordre de fin.'),
      ],
    },
    // Jour 25
    {
      id: 'js-modules',
      t: 'Modules',
      d: 'Répartir le code en fichiers avec export et import, et les utiliser dans le navigateur.',
      guide: [
        { h: 'Pourquoi utiliser des modules', p: [
          'Un module est un fichier avec sa propre portée : ses variables ne se mélangent pas avec celles des autres fichiers. Il ne partage que ce qu’il exporte.',
          'Découper le code en petits modules (prix, panier, interface...) le rend plus facile à comprendre, à tester et à réutiliser.' ] },
        { h: 'Exports nommés', p: [
          '`export` devant une déclaration la rend visible de l’extérieur. Un module peut avoir autant d’exports nommés qu’il veut.',
          'On les importe entre accolades et avec le même nom : `import { additionner } from "./maths.js"`. Avec `as`, tu peux les renommer, et avec `import * as M` tu les reçois tous dans un objet.' ],
          code: `// maths.js\nexport const PI = 3.14159;\nexport function additionner(a, b) {\n  return a + b;\n}\n\n// main.js\nimport { additionner, PI as pi } from "./maths.js";\nimport * as M from "./maths.js";\nconsole.log(additionner(2, 3), pi, M.PI);  // 5 3.14159 3.14159` },
        { h: 'Export par défaut', p: [
          'Chaque module peut avoir un seul export par défaut, en général l’élément principal du fichier. On l’importe sans accolades et avec le nom qu’on veut.',
          'On peut les combiner : `import Panier, { formater } from "./panier.js"`.' ],
          code: `// panier.js\nexport default class Panier {\n  lignes = [];\n}\nexport const formater = (n) => n.toFixed(2) + " €";\n\n// main.js\nimport MonPanier, { formater } from "./panier.js";\nconst p = new MonPanier();\nconsole.log(formater(3.5));  // 3.50 €` },
        { h: 'Les utiliser dans le navigateur', p: [
          'Le script principal se charge avec `<script type="module" src="main.js">`. Les modules s’exécutent en mode strict, sont différés comme avec `defer` et ne se chargent qu’une fois même s’ils sont importés plusieurs fois.',
          'Dans le navigateur, les chemins ont une extension (`./maths.js`) et la page doit être servie par un serveur, pas ouverte comme un fichier. `await import("./graphique.js")` charge un module seulement quand on en a besoin.' ],
          code: `<script type="module" src="main.js"></script>\n\n// main.js : charge l’éditeur seulement si l’utilisateur l’ouvre\ndocument.querySelector("#editer").addEventListener("click", async () => {\n  const { ouvrirEditeur } = await import("./editeur.js");\n  ouvrirEditeur();\n});` },
        { h: 'Exemple réel : une boutique découpée en modules', real: true, p: [
          'La boutique sépare le calcul des prix, le panier et l’interface. Les prix se testent sans navigateur et l’interface ne sait pas comment on calcule la TVA.' ],
          code: `// prix.js\nexport const TVA = 0.2;\nexport const avecTva = (n) => n * (1 + TVA);\nexport const formater = (n) => n.toFixed(2) + " €";\n\n// panier.js\nimport { avecTva } from "./prix.js";\nexport default function total(lignes) {\n  return avecTva(lignes.reduce((s, l) => s + l.prix * l.unites, 0));\n}\n\n// main.js\nimport total from "./panier.js";\nimport { formater } from "./prix.js";\nconst lignes = [{ prix: 10, unites: 2 }];\ndocument.querySelector("#total").textContent = formater(total(lignes));  // 24.00 €` },
      ],
      x: [
        fill(`// maths.js\n___ function additionner(a, b) {\n  return a + b;\n}`, ['export', 'public', 'module', 'exports'], '`export` rend la fonction visible pour les autres modules.'),
        mc('Que reçoit `import calculer from "./prix.js"` ?', ['L’export par défaut de prix.js', 'Un export nommé calculer', 'Tous les exports', 'Rien : il manque les accolades'], 'Sans accolades, on importe l’export par défaut, avec le nom qu’on choisit.'),
        typ('Importe formater sous le nom fmt', `import { formater ___ fmt } from "./utils.js";`, 'as', '`as` renomme ce qu’on importe.'),
        mc('De quoi la balise script a-t-elle besoin pour charger un module dans le navigateur ?', ['type="module"', 'module="true"', 'async', 'lang="es6"'], 'En plus, la page doit être servie par un serveur.'),
        ord('Importe prix et tva depuis boutique.js', ['import', '{ prix, tva }', 'from', '"./boutique.js";'], ['require(', 'export'], 'Les exports nommés s’importent entre accolades.'),
        mc('Combien d’exports par défaut un module peut-il avoir ?', ['Un au maximum', 'Aucun', 'Deux', 'Autant qu’il veut'], 'Les exports nommés, eux, n’ont pas de limite.'),
        fill(`<script ___="module" src="main.js"></script>`, ['type', 'lang', 'kind', 'mode'], 'Sans `type="module"`, le navigateur n’autorise ni `import` ni `export`.'),
        out(`// compteur.js\nlet compte = 0;\nexport const incrementer = () => ++compte;\nexport default compte;\n\n// main.js\nimport valeur, { incrementer } from "./compteur.js";\nimport * as C from "./compteur.js";\nincrementer();\nincrementer();\nconsole.log(valeur, C.default, typeof C.incrementer);`, ['0 0 function', '2 2 function', '0 2 function', '2 0 undefined'], '`export default compte` exporte la valeur qu’avait la variable à ce moment-là : 0. Appeler `incrementer` change `compte`, mais pas l’export par défaut. `C.incrementer` est la fonction.'),
      ],
    },
    // Jour 26
    {
      id: 'js-iterators',
      t: 'Itérateurs et générateurs',
      d: 'Ce qui permet de parcourir quelque chose avec for...of, et les générateurs avec function* et yield.',
      guide: [
        { h: 'Itérables et itérateurs', p: [
          'Un itérable est tout ce qu’on peut parcourir avec `for...of` ou étaler avec `...` : tableaux, textes, Map, Set. Les objets classiques ne le sont pas.',
          'Au fond, un itérable a une méthode `[Symbol.iterator]()` qui renvoie un itérateur. L’itérateur a `next()`, qui renvoie `{ value, done }` à chaque appel jusqu’à ce que `done` vaille `true`.' ],
          code: `const it = ["a", "b"][Symbol.iterator]();\nconsole.log(it.next());  // { value: "a", done: false }\nconsole.log(it.next());  // { value: "b", done: false }\nconsole.log(it.next());  // { value: undefined, done: true }\n\nfor (const x of { a: 1 }) {}  // TypeError : pas itérable` },
        { h: 'Les générateurs', p: [
          'Une fonction génératrice se déclare avec `function*`. L’appeler ne l’exécute pas : elle renvoie un itérateur. Chaque `next()` l’exécute jusqu’au `yield` suivant, qui livre une valeur et la met en pause.',
          'La valeur du `return` final arrive avec `done: true`, donc `for...of` et le spread l’ignorent.' ],
          code: `function* feu() {\n  yield "vert";\n  yield "orange";\n  yield "rouge";\n}\n\nconst f = feu();\nconsole.log(f.next().value);  // vert\nconsole.log([...feu()]);      // ["vert", "orange", "rouge"]` },
        { h: 'Séquences paresseuses et infinies', p: [
          'Un générateur calcule chaque valeur seulement quand on la demande. C’est pourquoi il peut représenter des séquences infinies sans bloquer le programme, tant qu’on ne demande que quelques valeurs.',
          '`next(valeur)` envoie une valeur au générateur : c’est ce que renvoie le `yield` sur lequel il était en pause.' ],
          code: `function* ids(prefixe) {\n  let n = 1;\n  while (true) yield prefixe + "-" + n++;\n}\n\nconst commandes = ids("CMD");\nconsole.log(commandes.next().value);  // CMD-1\nconsole.log(commandes.next().value);  // CMD-2` },
        { h: 'Rendre tes classes itérables', p: [
          'Si une classe définit `*[Symbol.iterator]()`, ses objets fonctionnent avec `for...of`, le spread et la déstructuration.',
          '`yield*` délègue à un autre itérable et livre toutes ses valeurs une à une.' ],
          code: `class Playlist {\n  constructor(...morceaux) {\n    this.morceaux = morceaux;\n  }\n  *[Symbol.iterator]() {\n    yield* this.morceaux;\n  }\n}\n\nconst liste = new Playlist("Intro", "Morceau 1", "Final");\nfor (const m of liste) console.log(m);\nconst [premier] = liste;\nconsole.log(premier);  // Intro` },
        { h: 'Exemple réel : lire des résultats page par page', real: true, p: [
          'Une API renvoie les produits 2 par 2. Un générateur cache la pagination : celui qui l’utilise parcourt les produits un par un et seules les pages nécessaires sont demandées.' ],
          code: `const catalogue = ["Tasse", "Carnet", "Crayon", "Sac à dos", "Agenda"];\nfunction demanderPage(n) {          // simule une API\n  return catalogue.slice(n * 2, n * 2 + 2);\n}\n\nfunction* tousLesProduits() {\n  let page = 0;\n  while (true) {\n    const items = demanderPage(page++);\n    if (items.length === 0) return;\n    console.log("(page " + page + ")");\n    yield* items;\n  }\n}\n\nfor (const p of tousLesProduits()) {\n  if (p === "Crayon") break;   // la page 3 n’est jamais demandée\n  console.log(p);\n}` },
      ],
      x: [
        out(`const it = [10, 20][Symbol.iterator]();\nconsole.log(it.next().value, it.next().value, it.next().done);`, ['10 20 true', '10 20 false', '10 10 false', 'undefined undefined true'], 'Chaque `next()` avance d’une position ; après le dernier élément, `done` vaut `true`.'),
        fill(`function___ compter() {\n  yield 1;\n  yield 2;\n}`, ['*', '&', '#', '!'], 'Les fonctions génératrices se déclarent avec `function*`.'),
        out(`function* g() {\n  yield "a";\n  yield "b";\n  return "c";\n}\nconsole.log([...g()]);`, ['["a", "b"]', '["a", "b", "c"]', '["c"]', '[]'], 'La valeur du `return` arrive avec `done: true` et le spread l’écarte.'),
        mc('Que se passe-t-il en exécutant `for (const x of { a: 1 }) {}` ?', ['Une TypeError est levée : les objets classiques ne sont pas itérables', 'Il parcourt les clés', 'Il parcourt les valeurs', 'Il ne fait rien'], 'Pour parcourir un objet, utilise `Object.keys`, `Object.values` ou `Object.entries`.'),
        out(`function* naturels() {\n  let n = 1;\n  while (true) yield n++;\n}\nconst it = naturels();\nit.next();\nconsole.log(it.next().value, it.next().value);`, ['2 3', '1 2', '3 4', 'Le programme se bloque'], 'La boucle infinie n’est pas un problème : le générateur n’avance que quand on le lui demande. La première valeur (1) a déjà été consommée.'),
        typ('Livre chaque nombre pair', `function* pairs() {\n  for (let i = 0; i < 6; i += 2) ___ i;\n}`, 'yield', '`yield` livre la valeur et met le générateur en pause jusqu’au `next()` suivant.'),
        out(`function* discussion() {\n  const nom = yield "Comment tu t’appelles ?";\n  yield "Bonjour, " + nom;\n}\nconst d = discussion();\nconsole.log(d.next().value);\nconsole.log(d.next("Ana").value);`, ['Comment tu t’appelles ?\nBonjour, Ana', 'Comment tu t’appelles ?\nBonjour, undefined', 'Bonjour, Ana', 'Comment tu t’appelles ?\nComment tu t’appelles ?'], 'La valeur passée au deuxième `next` est ce que renvoie le premier `yield`.'),
        out(`class Intervalle {\n  constructor(de, a, pas = 1) {\n    Object.assign(this, { de, a, pas });\n  }\n  *[Symbol.iterator]() {\n    for (let i = this.de; i <= this.a; i += this.pas) yield i;\n  }\n}\nfunction* prendre(iterable, n) {\n  for (const x of iterable) {\n    if (n-- <= 0) return;\n    yield x;\n  }\n}\nconst r = new Intervalle(1, 10, 3);\nconsole.log([...r].join(","), [...prendre(r, 2)].join(","), Math.max(...r));`, ['1,4,7,10 1,4 10', '1,4,7 1,4 7', '1,4,7,10 1,4,7 10', '1,3,6,9 1,3 9'], 'De 1 à 10 de 3 en 3 : 1, 4, 7 et 10. `prendre` s’arrête après deux valeurs. Chaque spread demande un nouvel itérateur, donc on peut parcourir l’intervalle plusieurs fois.'),
      ],
    },
    // Jour 27
    {
      id: 'js-node',
      t: 'Node.js',
      d: 'JavaScript hors du navigateur : process, les modules de Node, npm et un serveur avec Express.',
      guide: [
        { h: 'Ce qu’est Node.js', p: [
          'Node.js exécute JavaScript en dehors du navigateur, avec le même moteur V8 que Chrome. Il sert pour les serveurs, les outils en ligne de commande et les scripts.',
          'Dans Node, il n’y a ni `document` ni `window`, mais il y a d’autres choses : `process` (arguments, variables d’environnement), l’accès aux fichiers, le réseau et plus. On l’exécute avec `node fichier.js`.' ],
          code: `// salut.js → node salut.js Ana\nconst nom = process.argv[2] ?? "le monde";\nconsole.log("Bonjour, " + nom);          // Bonjour, Ana\nconsole.log(process.env.NODE_ENV);       // la variable d’environnement, si elle existe` },
        { h: 'Les modules de Node', p: [
          'Node apporte des modules pour presque tout : `node:fs/promises` pour les fichiers, `node:path` pour les chemins, `node:http` pour les serveurs. On les importe avec le préfixe `node:`.',
          'Avec `"type": "module"` dans `package.json`, on utilise `import`. L’ancien système, CommonJS, utilise `require` et `module.exports` ; tu le verras dans beaucoup de code existant.' ],
          code: `import { readFile, writeFile } from "node:fs/promises";\nimport path from "node:path";\n\nconst fichier = path.join("donnees", "notes.json");\nconst notes = JSON.parse(await readFile(fichier, "utf8"));\nnotes.push({ eleve: "Eva", note: 9 });\nawait writeFile(fichier, JSON.stringify(notes, null, 2));\nconsole.log(path.extname(fichier));  // .json` },
        { h: 'npm et package.json', p: [
          'npm est le gestionnaire de paquets de Node. `npm init -y` crée `package.json`, qui décrit le projet, ses dépendances et ses scripts.',
          '`npm install express` télécharge le paquet dans `node_modules` et l’inscrit dans `package.json`. `package-lock.json` fixe les versions exactes. `node_modules` ne se met pas dans Git : on le recrée avec `npm install`.' ],
          code: `{\n  "name": "mon-api",\n  "type": "module",\n  "scripts": {\n    "start": "node server.js",\n    "dev": "node --watch server.js",\n    "test": "vitest"\n  },\n  "dependencies": {\n    "express": "^4.19.2"\n  }\n}` },
        { h: 'Un serveur avec Express', p: [
          'Express est le framework le plus utilisé pour créer des serveurs web avec Node. Chaque route associe une méthode HTTP et une URL à une fonction qui reçoit la requête (`req`) et la réponse (`res`).',
          '`res.json()` envoie des données en JSON et `res.status(code)` fixe le code HTTP : 200 bien, 201 créé, 400 requête incorrecte, 404 introuvable.' ],
          code: `import express from "express";\n\nconst app = express();\napp.use(express.json());   // pour lire les corps JSON\n\napp.get("/api/salut", (req, res) => {\n  res.json({ message: "Bonjour depuis Node" });\n});\n\napp.listen(3000, () => console.log("Serveur sur http://localhost:3000"));` },
        { h: 'Exemple réel : une API de tâches', real: true, p: [
          'Une petite API garde des tâches en mémoire. Elle valide les données reçues et répond avec les bons codes HTTP, que le front-end peut demander avec `fetch`.' ],
          code: `import express from "express";\n\nconst app = express();\napp.use(express.json());\nconst taches = [];\n\napp.get("/api/taches", (req, res) => res.json(taches));\n\napp.post("/api/taches", (req, res) => {\n  const texte = req.body.texte?.trim();\n  if (!texte) return res.status(400).json({ erreur: "Le texte manque" });\n  const tache = { id: taches.length + 1, texte, faite: false };\n  taches.push(tache);\n  res.status(201).json(tache);\n});\n\napp.delete("/api/taches/:id", (req, res) => {\n  const i = taches.findIndex((t) => t.id === Number(req.params.id));\n  if (i === -1) return res.status(404).json({ erreur: "Introuvable" });\n  taches.splice(i, 1);\n  res.status(204).end();\n});\n\napp.listen(3000);` },
      ],
      x: [
        mc('Lequel de ces éléments n’existe PAS dans Node.js ?', ['document', 'console', 'setTimeout', 'process'], 'Node n’a pas de page à afficher, il n’y a donc pas de DOM.'),
        fill(`import { readFile } from "node:___/promises";`, ['fs', 'file', 'os', 'path'], '`fs` (file system) est le module pour travailler avec les fichiers.'),
        out(`// Terminal : node salut.js Ana 30\nconst [, , nom, age] = process.argv;\nconsole.log(nom, typeof age);`, ['Ana string', 'Ana number', 'node string', 'salut.js Ana'], 'Les deux premières positions sont le chemin de Node et celui du script. Les arguments arrivent toujours sous forme de texte.'),
        mc('Quel fichier décrit les dépendances et les scripts d’un projet ?', ['package.json', 'node_modules', 'index.html', '.gitignore'], '`node_modules` contient les paquets téléchargés et ne se met pas dans Git.'),
        typ('Installe le paquet express', `npm ___ express`, ['install', 'i'], '`npm install` (ou `npm i`) télécharge le paquet et l’ajoute à `package.json`.'),
        out(`import path from "node:path";\nconsole.log(path.extname("rapport.final.pdf"), path.basename("/photos/chat.jpg", ".jpg"));`, ['.pdf chat', '.final.pdf chat', 'pdf chat.jpg', '.pdf /photos/chat'], '`extname` ne prend que la dernière extension ; `basename` enlève le dossier et, si on l’indique, l’extension.'),
        ord('Crée une route GET qui répond en JSON', ['app.get(', '"/api/salut",', '(req, res) =>', 'res.json({ ok: true })', ');'], ['app.listen(', 'document.'], 'Méthode, route et la fonction qui reçoit la requête et la réponse.'),
        mc('Le serveur reçoit trois requêtes à la suite : `POST {"texte":"pain"}`, `POST {}` et `POST {"texte":"lait"}`. Quels codes renvoie-t-il et quel id a la dernière tâche ?', ['201, 400 et 201 ; id 2', '201, 400 et 201 ; id 3', '200, 400 et 200 ; id 2', '201, 201 et 201 ; id 3'], 'La requête sans texte est refusée avec 400 et n’est pas enregistrée, donc la tâche "lait" est la deuxième : id 2. Créer une ressource répond 201.', `const taches = [];\napp.post("/taches", (req, res) => {\n  if (!req.body.texte) return res.status(400).json({ erreur: "Texte manquant" });\n  const tache = { id: taches.length + 1, texte: req.body.texte };\n  taches.push(tache);\n  res.status(201).json(tache);\n});`),
      ],
    },
    // Jour 28
    {
      id: 'js-testing',
      t: 'Tests',
      d: 'Des tests automatiques avec Vitest ou Jest : test, expect, cas limites et mocks.',
      guide: [
        { h: 'Pourquoi écrire des tests', p: [
          'Un test est du code qui vérifie qu’un autre code fonctionne. Il s’exécute en quelques secondes et te prévient si un changement casse quelque chose qui marchait.',
          'Les outils les plus utilisés sont Vitest et Jest, presque identiques. On les installe avec `npm install --save-dev vitest` et on les lance avec `npm test`.' ] },
        { h: 'test et expect', p: [
          '`test("description", () => { ... })` définit un cas. À l’intérieur, `expect(valeur)` avec un comparateur vérifie le résultat : `toBe` compare avec `===`, `toEqual` compare le contenu des objets et des tableaux.',
          '`describe` regroupe des tests liés. Les fichiers s’appellent en général `quelquechose.test.js`.' ],
          code: `// prix.test.js\nimport { describe, test, expect } from "vitest";\nimport { avecTva, appliquerRemise } from "./prix.js";\n\ndescribe("prix", () => {\n  test("ajoute 20 % de TVA", () => {\n    expect(avecTva(100)).toBe(120);\n  });\n  test("renvoie un nouvel objet avec la remise", () => {\n    expect(appliquerRemise({ prix: 50 }, 0.1)).toEqual({ prix: 45 });\n  });\n});` },
        { h: 'Cas limites et erreurs', p: [
          'Ne teste pas seulement le cas normal : teste des listes vides, zéro, des négatifs, des textes bizarres. C’est là que se cachent les bugs.',
          'Pour vérifier que quelque chose lève une erreur, on passe une fonction : `expect(() => diviser(1, 0)).toThrow()`. Avec des nombres décimaux, utilise `toBeCloseTo`.' ],
          code: `test("une liste vide donne 0", () => {\n  expect(moyenne([])).toBe(0);\n});\ntest("interdit de diviser par zéro", () => {\n  expect(() => diviser(1, 0)).toThrow("par zéro");\n});\ntest("0.1 + 0.2", () => {\n  expect(0.1 + 0.2).toBeCloseTo(0.3);\n});` },
        { h: 'Mocks et TDD', p: [
          'Un mock remplace une dépendance (envoyer un e-mail, appeler une API) par une fausse fonction qui enregistre comment on l’a appelée. `vi.fn()` dans Vitest ou `jest.fn()` dans Jest.',
          'TDD (développement piloté par les tests) : d’abord tu écris un test qui échoue, puis le code minimum pour qu’il passe, et ensuite tu améliores le code avec les tests comme filet de sécurité.' ],
          code: `import { vi, test, expect } from "vitest";\n\ntest("prévient les clients qui ont une dette", () => {\n  const envoyer = vi.fn();\n  prevenirDebiteurs([{ email: "a@x.com", dette: 20 }, { email: "b@x.com", dette: 0 }], envoyer);\n  expect(envoyer).toHaveBeenCalledTimes(1);\n  expect(envoyer).toHaveBeenCalledWith("a@x.com", expect.any(String));\n});` },
        { h: 'Exemple réel : protéger le calcul d’un panier', real: true, p: [
          'Avant de changer ses règles de livraison, une boutique écrit des tests pour la fonction actuelle. Si quelqu’un casse un cas, `npm test` le dit avant que ça n’arrive aux clients.' ],
          code: `// panier.js\nexport function total(lignes, livraisonGratuiteDes = 50) {\n  const sousTotal = lignes.reduce((s, l) => s + l.prix * l.unites, 0);\n  return sousTotal >= livraisonGratuiteDes || sousTotal === 0 ? sousTotal : sousTotal + 4.99;\n}\n\n// panier.test.js\nimport { test, expect } from "vitest";\nimport { total } from "./panier.js";\n\ntest("un panier vide coûte 0", () => expect(total([])).toBe(0));\ntest("facture la livraison sous 50", () =>\n  expect(total([{ prix: 10, unites: 2 }])).toBeCloseTo(24.99));\ntest("livraison gratuite dès 50", () =>\n  expect(total([{ prix: 25, unites: 2 }])).toBe(50));\n\n// $ npm test\n// ✓ panier.test.js (3 tests)` },
      ],
      x: [
        mc('Quelle est la différence entre `toBe` et `toEqual` ?', ['toBe compare avec === ; toEqual compare le contenu des objets et des tableaux', 'Ils sont identiques', 'toEqual ne sert qu’aux nombres', 'toBe compare le type et toEqual la valeur'], 'Deux objets avec le même contenu ne sont pas `===`, on utilise donc `toEqual` pour eux.'),
        fill(`test("addition", () => {\n  expect(additionner(2, 3)).___(5);\n});`, ['toBe', 'equals', 'is', 'toBeEqual'], '`toBe` vérifie que la valeur est exactement celle attendue.'),
        out(`const resultats = [];\nfunction test(nom, fn) {\n  try {\n    fn();\n    resultats.push("✓ " + nom);\n  } catch {\n    resultats.push("✗ " + nom);\n  }\n}\nconst expect = (reel) => ({\n  toBe: (attendu) => {\n    if (reel !== attendu) throw new Error();\n  },\n});\nconst double = (n) => n * 2;\ntest("double de 2", () => expect(double(2)).toBe(4));\ntest("double de -1", () => expect(double(-1)).toBe(2));\nconsole.log(resultats.join(" | "));`, ['✓ double de 2 | ✗ double de -1', '✓ double de 2 | ✓ double de -1', '✗ double de 2 | ✗ double de -1', '✓ double de 2'], 'Voilà comment fonctionne un test au fond : `expect` lève une erreur si ça ne correspond pas et `test` l’attrape. `double(-1)` vaut -2, pas 2.'),
        out(`const a = { x: 1 };\nconsole.log(a === { x: 1 }, JSON.stringify(a) === JSON.stringify({ x: 1 }));`, ['false true', 'true true', 'false false', 'true false'], 'Ce sont deux objets différents même s’ils ont le même contenu. C’est pour ça que `toEqual` existe.'),
        typ('Vérifie que la fonction lève une erreur', `expect(() => diviser(1, 0)).___("par zéro");`, 'toThrow', 'On passe une fonction pour que `expect` puisse l’exécuter et attraper l’erreur.'),
        mc('Quel est l’ordre du TDD ?', ['Écrire un test qui échoue, le faire passer et améliorer le code', 'Écrire le code, le tester à la main et écrire des tests', 'Écrire tous les tests à la fin', 'Améliorer le code puis écrire des tests'], 'On le résume par rouge, vert, refactoriser.'),
        ord('Écris un test qui vérifie que additionner(2, 3) vaut 5', ['test("additionne deux nombres",', '() => {', 'expect(additionner(2, 3))', '.toBe(5);', '});'], ['assert(', 'console.log('], 'Description, fonction avec le `expect` et le comparateur.'),
        out(`function fn() {\n  const f = (...args) => {\n    f.appels.push(args);\n  };\n  f.appels = [];\n  return f;\n}\nfunction prevenirDebiteurs(clients, envoyer) {\n  let n = 0;\n  for (const c of clients) {\n    if (c.dette > 0) {\n      envoyer(c.email, "Tu dois " + c.dette + " €");\n      n++;\n    }\n  }\n  return n;\n}\nconst envoyer = fn();\nconst total = prevenirDebiteurs([{ email: "a@x.com", dette: 20 }, { email: "b@x.com", dette: 0 }, { email: "c@x.com", dette: 5 }], envoyer);\nconsole.log(total, envoyer.appels.length, envoyer.appels[1][0]);`, ['2 2 c@x.com', '3 3 b@x.com', '2 2 b@x.com', '2 3 c@x.com'], 'C’est un mock fait maison : il garde les arguments de chaque appel. Seuls deux clients ont une dette, et le deuxième appel était pour c@x.com.'),
      ],
    },
    // Jour 29
    {
      id: 'js-clean-code',
      t: 'Code propre et performance',
      d: 'Des noms clairs, de petites fonctions et des retours anticipés, et mesurer avant d’optimiser avec debounce et throttle.',
      guide: [
        { h: 'Des noms qui s’expliquent tout seuls', p: [
          'Le code est lu bien plus souvent qu’il n’est écrit. Un bon nom évite un commentaire : `utilisateursActifs` en dit plus que `arr2`.',
          'Conventions de JavaScript : `camelCase` pour les variables et les fonctions, `PascalCase` pour les classes et `MAJUSCULES_AVEC_TIRETS` pour les constantes fixes. Les booléens sonnent comme une question : `estActif`, `aLaPermission`.' ],
          code: `// Difficile à lire\nconst d = u.filter((x) => x.a && x.e > 17);\n\n// Clair\nconst utilisateursAdultesActifs = utilisateurs.filter(\n  (utilisateur) => utilisateur.actif && utilisateur.age >= 18\n);` },
        { h: 'De petites fonctions, sans nombres magiques', p: [
          'Chaque fonction devrait faire une seule chose et avoir un nom qui la décrit. Si tu as besoin du mot « et » pour l’expliquer, ce sont sûrement deux fonctions.',
          'Un nombre magique est une valeur sans explication au milieu du code, comme `0.2` ou `86400000`. Donne-lui un nom avec une constante.' ],
          code: `const TVA = 0.2;\nconst MS_PAR_JOUR = 24 * 60 * 60 * 1000;\n\nconst avecTva = (prix) => prix * (1 + TVA);\nconst joursEntre = (a, b) => Math.round((b - a) / MS_PAR_JOUR);` },
        { h: 'Les retours anticipés', p: [
          'Beaucoup de `if` imbriqués obligent à retenir toutes les conditions à la fois. Vérifie d’abord les cas particuliers et sors de la fonction avec `return`.',
          'Le chemin principal reste à la fin, sans indentation et facile à suivre.' ],
          code: `// Imbriqué\nfunction remise(utilisateur) {\n  if (utilisateur) {\n    if (utilisateur.estMembre) {\n      return 0.1;\n    } else {\n      return 0;\n    }\n  } else {\n    return 0;\n  }\n}\n\n// Avec des retours anticipés\nfunction remise(utilisateur) {\n  if (!utilisateur?.estMembre) return 0;\n  return 0.1;\n}` },
        { h: 'D’abord, mesurer', p: [
          'N’optimise pas à l’aveugle : mesure où part le temps. `performance.now()` donne un horodatage précis en millisecondes et l’onglet Performance des DevTools montre ce qui est lent.',
          'Le problème se trouve presque toujours à quelques endroits : une boucle qui se répète trop, trop de requêtes ou des changements du DOM un par un.' ],
          code: `const debut = performance.now();\nconst tries = [...donnees].sort((a, b) => a.prix - b.prix);\nconsole.log("Tri :", (performance.now() - debut).toFixed(1), "ms");` },
        { h: 'Debounce et throttle', p: [
          'Le debounce attend qu’une action arrête de se répéter pendant un moment avant d’exécuter la fonction : idéal pour rechercher pendant que l’utilisateur tape.',
          'Le throttle exécute la fonction au plus une fois par intervalle de temps, même si l’événement se déclenche des centaines de fois : idéal pour `scroll` ou `resize`.' ],
          code: `function debounce(fn, ms) {\n  let minuteur;\n  return (...args) => {\n    clearTimeout(minuteur);\n    minuteur = setTimeout(() => fn(...args), ms);\n  };\n}\n\nfunction throttle(fn, ms) {\n  let dernier = 0;\n  return (...args) => {\n    const maintenant = Date.now();\n    if (maintenant - dernier >= ms) {\n      dernier = maintenant;\n      fn(...args);\n    }\n  };\n}\n\nwindow.addEventListener("scroll", throttle(() => console.log(scrollY), 100));` },
        { h: 'Exemple réel : une recherche qui ne sature pas l’API', real: true, p: [
          'Sans précaution, chercher « javascript » lettre par lettre fait dix requêtes. Avec un debounce, on ne demande que quand l’utilisateur s’arrête, et un cache évite de refaire des recherches déjà faites.' ],
          code: `const cache = new Map();\n\nasync function rechercher(texte) {\n  if (cache.has(texte)) return cache.get(texte);\n  const res = await fetch("/api/recherche?q=" + encodeURIComponent(texte));\n  const donnees = await res.json();\n  cache.set(texte, donnees);\n  return donnees;\n}\n\nconst input = document.querySelector("#recherche");\ninput.addEventListener("input", debounce(async () => {\n  const texte = input.value.trim();\n  if (texte.length < 2) return;\n  const resultats = await rechercher(texte);\n  afficherResultats(resultats);\n}, 300));` },
      ],
      x: [
        mc('Quel nom est le plus clair pour un tableau d’utilisateurs actifs ?', ['utilisateursActifs', 'arr', 'donnees2', 'x'], 'Un bon nom dit ce que contient la variable sans devoir lire le reste du code.'),
        mc('Qu’est-ce qu’un nombre magique ?', ['Une valeur sans explication au milieu du code', 'Un nombre aléatoire', 'Un très grand nombre', 'Un nombre négatif'], 'On le corrige en lui donnant un nom avec une constante, comme `TVA`.'),
        fill(`___ TVA = 0.2;  // ne change jamais`, ['const', 'let', 'var', 'static'], 'Ce qui n’est pas réaffecté se déclare avec `const`.'),
        out(`function prixLivraison(total, estMembre) {\n  if (estMembre) return 0;\n  if (total >= 50) return 0;\n  return 4.99;\n}\nconsole.log(prixLivraison(30, false), prixLivraison(30, true), prixLivraison(60, false));`, ['4.99 0 0', '0 0 4.99', '4.99 4.99 0', '4.99 0 4.99'], 'Chaque cas particulier sort tôt ; seul le cas normal arrive à la fin.'),
        mc('Quelle différence y a-t-il entre debounce et throttle ?', ['Le debounce attend que l’action s’arrête ; le throttle limite combien de fois elle s’exécute dans le temps', 'C’est la même chose', 'Le throttle ne marche qu’avec le clavier', 'Le debounce exécute la fonction immédiatement'], 'Debounce pour les recherches pendant la saisie ; throttle pour `scroll` ou `resize`.'),
        fill(`const debut = performance.___();\nfaireQuelqueChose();\nconsole.log(performance.now() - debut, "ms");`, ['now', 'time', 'start', 'clock'], '`performance.now()` donne un horodatage précis.'),
        out(`function debounce(fn, ms) {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), ms);\n  };\n}\nconst journal = [];\nconst rechercher = debounce((txt) => journal.push(txt), 20);\nrechercher("j");\nrechercher("ja");\nrechercher("jav");\nsetTimeout(() => rechercher("java"), 50);\nsetTimeout(() => console.log(journal.join(",")), 100);`, ['jav,java', 'j,ja,jav,java', 'java', 'j,java'], 'Les trois premiers appels arrivent d’affilée : chacun annule le précédent et seul "jav" s’exécute. "java" arrive plus tard et s’exécute aussi.'),
        out(`const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));\nlet appels = 0;\nconst cache = {};\nfunction fibMemo(n) {\n  appels++;\n  if (n in cache) return cache[n];\n  return (cache[n] = n < 2 ? n : fibMemo(n - 1) + fibMemo(n - 2));\n}\nconsole.log(fib(10), fibMemo(10), appels);`, ['55 55 19', '55 55 177', '55 55 11', '89 89 19'], 'Les deux donnent le même résultat, mais la version avec cache calcule chaque nombre une seule fois : 11 calculs (de 10 à 0) plus 8 lectures du cache. La version sans cache ferait 177 appels.'),
      ],
    },
    // Jour 30
    {
      id: 'js-workshop-shop',
      t: 'L’atelier de Kibi : la boutique complète',
      d: 'Projet final : la boutique de Kibi avec une classe Produit, un catalogue chargé avec fetch, des modules, un générateur et des tests Vitest.',
      guide: [
        { h: 'La commande', p: [
          'Quatre semaines plus tard, la boutique de Kibi passe vraiment en ligne : un catalogue qui arrive en JSON, une page qui montre les produits en stock et des tests qui préviennent si quelque chose casse.',
          'On réunit la dernière semaine avec tout ce qui précède. Chaque fichier est un module avec une seule tâche : c’est plus facile à comprendre et à tester morceau par morceau. Node.js et npm s’occupent d’installer et de lancer les tests.' ],
          code: `boutique/\n├── package.json         # "type": "module" et vitest\n├── index.html\n├── catalogue.json\n├── src/\n│   ├── produit.js       # la classe Produit\n│   ├── catalogue.js     # charger le catalogue avec fetch\n│   └── app.js           # la page\n└── test/\n    └── produit.test.js` },
        { h: 'Étape 1 : la classe Produit', p: [
          'Le stock est un champ privé (`#stock`) : seule la classe peut le modifier, et de l’extérieur on le lit avec un getter. `vendre()` lève une `RangeError` s’il n’y en a pas assez, au lieu de laisser le stock en négatif.',
          '`export` permet d’importer la classe depuis d’autres fichiers.' ],
          code: `// src/produit.js\nexport class Produit {\n  #stock;\n\n  constructor(nom, prix, stock = 0) {\n    this.nom = nom;\n    this.prix = prix;\n    this.#stock = stock;\n  }\n\n  get stock() {\n    return this.#stock;\n  }\n\n  disponible(quantite) {\n    return quantite > 0 && quantite <= this.#stock;\n  }\n\n  vendre(quantite) {\n    if (!this.disponible(quantite)) throw new RangeError("Pas de stock");\n    this.#stock -= quantite;\n    return Math.round(this.prix * quantite * 100) / 100;\n  }\n}` },
        { h: 'Étape 2 : charger le catalogue avec fetch', p: [
          'Une fonction `async` demande le JSON avec `fetch` et attend la réponse avec `await`. Si le serveur répond par une erreur, `reponse.ok` vaut `false` et on en lève une nous-mêmes.',
          'Chaque objet du JSON devient un `Produit` avec `map`, ainsi le reste du code travaille avec des objets qui savent vendre.' ],
          code: `// src/catalogue.js\nimport { Produit } from "./produit.js";\n\nexport async function chargerCatalogue(url = "catalogue.json") {\n  const reponse = await fetch(url);\n  if (!reponse.ok) throw new Error("HTTP " + reponse.status);\n  const donnees = await reponse.json();\n  return donnees.map((d) => new Produit(d.nom, d.prix, d.stock));\n}` },
        { h: 'Étape 3 : la page', p: [
          'Un générateur (`function*`) ne fournit que les produits en stock, un par un, sans créer de tableau intermédiaire. `for...of` le parcourt comme n’importe quel itérable.',
          'Dans un module, on peut utiliser `await` hors d’une fonction : la page attend le catalogue puis affiche la liste.' ],
          code: `// src/app.js\nimport { chargerCatalogue } from "./catalogue.js";\n\nfunction* disponibles(catalogue) {\n  for (const p of catalogue) if (p.stock > 0) yield p;\n}\n\nconst liste = document.querySelector("#produits");\nfor (const p of disponibles(await chargerCatalogue())) {\n  const li = document.createElement("li");\n  li.textContent = \`\${p.nom} · \${p.prix.toFixed(2)} €\`;\n  liste.append(li);\n}` },
        { h: 'Exemple réel : tester la boutique avant l’ouverture', real: true, p: [
          'Avec `npm install -D vitest` et `npx vitest`, Node.js lance les tests en une seconde à chaque modification. Le premier vérifie que vendre diminue le stock ; le second, qu’on ne peut pas vendre plus que ce qu’il y a.' ],
          code: `// test/produit.test.js\nimport { describe, test, expect } from "vitest";\nimport { Produit } from "../src/produit.js";\n\ndescribe("Produit", () => {\n  test("vend et diminue le stock", () => {\n    const graines = new Produit("Graines", 4.5, 10);\n    expect(graines.vendre(3)).toBe(13.5);\n    expect(graines.stock).toBe(7);\n  });\n\n  test("ne vend pas plus que ce qu'il y a", () => {\n    expect(() => new Produit("Foin", 7.25, 2).vendre(3)).toThrow(RangeError);\n  });\n});` },
        { h: 'Et maintenant ?', p: [
          'En quatre semaines, tu as fait le chemin de `console.log("Bonjour, le monde")` à une application web avec des classes, des données asynchrones, des modules et des tests. C’est la même structure que beaucoup de projets professionnels, en plus petit.',
          'Prochaines étapes : mets le projet dans Git, ajoute ESLint et Prettier, crée avec Express l’API qui sert `catalogue.json` et publie la page chez un hébergeur. Choisis un problème à toi et résous-le avec ce que tu sais : c’est la façon la plus rapide de continuer à apprendre.' ] },
      ],
      x: [
        mc('Que signifie le dièse de `#stock` dans la classe ?', ['Que c’est un champ privé : on ne peut le modifier que depuis la classe', 'Que c’est un commentaire', 'Que le nombre doit être entier', 'Que le navigateur l’exige pour exporter la classe'], 'Les champs avec `#` ne peuvent être ni lus ni modifiés de l’extérieur ; c’est pourquoi la classe propose le getter `stock`.'),
        out(`class Produit {\n  #stock;\n  constructor(nom, stock) {\n    this.nom = nom;\n    this.#stock = stock;\n  }\n  disponible(n) {\n    return n > 0 && n <= this.#stock;\n  }\n}\nconst p = new Produit("Graines", 3);\nconsole.log(p.disponible(3), p.disponible(0), p.disponible(4));`, ['true false false', 'true true false', 'false false false', 'true false true'], '3 est dans le stock ; 0 n’est pas une quantité positive et 4 dépasse le stock.'),
        fill(`const reponse = ___ fetch("catalogue.json");`, ['await', 'async', 'then', 'yield'], '`await` attend que la promesse de `fetch` soit résolue et donne son résultat.'),
        mc('Une fonction `async` se termine par `return donnees`. Que reçoit celui qui l’appelle sans `await` ?', ['Une promesse résolue avec donnees', 'Les données directement', 'undefined', 'Une erreur'], 'Une fonction `async` renvoie toujours une promesse ; `await` ou `then` en extraient la valeur.'),
        out(`function* disponibles(stocks) {\n  for (const s of stocks) if (s > 0) yield s;\n}\nconsole.log([...disponibles([3, 0, 5, 0, 1])].join("-"));`, ['3-5-1', '3-0-5-0-1', '3', '0-0'], 'Le générateur ne fournit que les valeurs supérieures à 0, et le spread les rassemble dans un tableau.'),
        typ('Complète la ligne pour que d’autres fichiers puissent importer la classe', `___ class Produit {\n  // ...\n}`, 'export', '`export` rend la classe publique ; les autres modules la récupèrent avec `import { Produit } from "./produit.js"`.'),
        mc('Pourquoi le test écrit-il `expect(() => p.vendre(3)).toThrow()` avec une fonction fléchée ?', ['Pour qu’expect exécute l’appel et attrape l’erreur ; sinon, l’erreur serait levée avant', 'Parce que les fonctions fléchées sont plus rapides', 'Parce que vendre est asynchrone', 'Pour ne pas avoir à importer Produit'], 'Sans la flèche, `p.vendre(3)` s’exécuterait en préparant les arguments et l’erreur casserait le test avant d’atteindre `toThrow`.'),
        out(`class Produit {\n  #stock;\n  constructor(nom, prix, stock = 0) {\n    this.nom = nom;\n    this.prix = prix;\n    this.#stock = stock;\n  }\n  get stock() {\n    return this.#stock;\n  }\n  vendre(n) {\n    if (n <= 0 || n > this.#stock) throw new RangeError("Pas de stock");\n    this.#stock -= n;\n    return this.prix * n;\n  }\n}\nconst graines = new Produit("Graines", 4.5, 5);\nlet caisse = 0;\nfor (const n of [2, 4, 3]) {\n  try {\n    caisse += graines.vendre(n);\n  } catch (e) {\n    console.log(e.name);\n  }\n}\nconsole.log(caisse, graines.stock);`, ['RangeError\n22.5 0', 'RangeError\n40.5 0', '22.5 0', 'RangeError\n9 3'], 'On en vend 2 (9 €, il en reste 3). En demander 4 lève `RangeError` et ne change rien. Puis on en vend 3 (13.5 €) : 22.5 en caisse et un stock de 0.'),
      ],
    },
  ],
}))(Sintaxis);
