/* JavaScript · Français */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('javascript', 'fr', {
  tag: 'Le langage du web, du navigateur à Node.js, en 30 jours.',
  days: [
    // Jour 1
    {
      id: 'js-intro',
      t: 'Introduction',
      d: 'Ce qu’est JavaScript, où il s’exécute, la console et ton premier script.',
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
        { h: 'Exemple réel : partager l’addition au restaurant', real: true, p: [
          'Avec quelques lignes, tu résous déjà un problème du quotidien : partager une addition avec 10 % de pourboire entre amis.',
          '`toFixed(2)` arrondit à deux décimales et renvoie un texte, parfait pour afficher de l’argent.' ],
          code: `const addition = 84.5;\nconst personnes = 3;\nconst pourboire = addition * 0.1;\nconst parPersonne = (addition + pourboire) / personnes;\nconsole.log("Chacun paie", parPersonne.toFixed(2));  // Chacun paie 30.98` },
      ],
      x: [
        mc('Comment affiche-t-on un message dans la console en JavaScript ?', ['console.log("Bonjour")', 'print("Bonjour")', 'System.out.println("Bonjour")', 'echo "Bonjour"'], '`console.log` est la manière standard d’écrire dans la console. `print` vient de Python.'),
        mc('Comment écrit-on un commentaire d’une ligne ?', ['// commentaire', '# commentaire', '<!-- commentaire -->', '-- commentaire'], 'Tout ce qui suit `//` sur cette ligne est ignoré. `/* */` sert pour plusieurs lignes.'),
        mc('Où peut-on exécuter JavaScript ?', ['Dans le navigateur et en dehors avec Node.js', 'Seulement dans le navigateur', 'Seulement sous Windows', 'Seulement dans Java'], 'Tous les navigateurs l’exécutent, et Node.js l’amène sur les serveurs et dans le terminal.'),
        fill(`<script ___="app.js" defer></script>`, ['src', 'href', 'file', 'link'], 'L’attribut `src` relie un fichier JavaScript externe. `href` sert aux liens et aux feuilles de style.'),
        out(`console.log(2 + 3 * 4);`, ['14', '20', '24', '9'], 'La multiplication se calcule avant l’addition : 3 * 4 = 12 et 2 + 12 = 14.'),
        ord('Écris la ligne qui affiche Bonjour, le monde dans la console', ['console', '.', 'log', '(', '"Bonjour, le monde"', ')'], ['print', 'echo'], 'On appelle la méthode `log` de l’objet `console` avec le texte entre parenthèses.'),
        typ('Déclare une variable qui peut être réaffectée', `___ age = 30;\nage = 31;`, ['let', 'var'], '`let` permet de réaffecter. Avec `const`, la deuxième ligne lèverait une `TypeError`.'),
        out(`let prix = 10;\nprix = prix * 2;\nconst livraison = 5;\nconsole.log("Total:", prix + livraison);`, ['Total: 25', 'Total: 15', 'Total:25', 'Erreur'], '`prix` passe à 20 et on ajoute la livraison : 25. `console.log` sépare ses arguments par une espace.'),
      ],
    },
    // Jour 2
    {
      id: 'js-types',
      t: 'Types de données',
      d: 'Primitifs, typeof, textes, nombres et conversions entre types.',
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
      t: 'Booléens, opérateurs et dates',
      d: '=== contre ==, truthy et falsy, opérateurs arithmétiques et logiques, et Date.',
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
        mc('Laquelle de ces valeurs est falsy ?', ['0', '"0"', '[]', '"false"'], 'Le nombre 0 est falsy. Tout texte non vide et tout tableau, même vide, sont truthy.'),
        out(`console.log(5 == "5", 5 === "5");`, ['true false', 'true true', 'false false', 'false true'], '`==` transforme "5" en nombre et donne `true` ; `===` compare aussi le type et donne `false`.'),
        out(`console.log(10 % 3, 2 ** 3);`, ['1 8', '3 6', '1 6', '3 8'], '`%` est le reste (10 divisé par 3 donne 3, reste 1) et `**` la puissance (2³ = 8).'),
        out(`let x = 5;\nx += 2;\nx++;\nconsole.log(x);`, ['8', '7', '6', '52'], '5 + 2 = 7, et `x++` ajoute encore 1.'),
        fill(`const peutEntrer = age >= 18 ___ aUnBillet;`, ['&&', 'and', '||', '&&&'], 'Les deux conditions doivent être remplies, on utilise donc `&&`. `and` vient de Python.'),
        out(`console.log(Boolean(""), Boolean("0"));`, ['false true', 'true true', 'false false', 'true false'], 'Le texte vide est falsy ; "0" est un texte non vide, donc truthy.'),
        out(`const d = new Date(2024, 0, 15);\nconsole.log(d.getMonth());`, ['0', '1', '15', '2024'], 'Dans `Date`, les mois commencent à 0 : janvier vaut 0.'),
        out(`const age = 20;\nconst membre = false;\nconst reduction = age < 25 || membre;\nconsole.log(reduction, !reduction && age > 18, 7 + 3 * 2 ** 2);`, ['true false 19', 'true true 19', 'true false 40', 'false false 19'], '`age < 25` est vrai, donc `||` donne true ; `!true` est false ; et 2 ** 2 = 4, 3 * 4 = 12, 7 + 12 = 19.'),
      ],
    },
    // Jour 4
    {
      id: 'js-conditionals',
      t: 'Conditions',
      d: 'if, else if, l’opérateur ternaire, switch, ?? et ?.',
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
      id: 'js-arrays',
      t: 'Tableaux',
      d: 'Créer, lire, modifier, chercher et trier des listes de valeurs.',
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
    // Jour 6
    {
      id: 'js-loops',
      t: 'Boucles',
      d: 'for, while, do...while, for...of, for...in, break et continue.',
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
          '`for...of` parcourt les valeurs de n’importe quel itérable : tableaux, textes, Set ou Map. C’est la manière la plus claire de parcourir un tableau.',
          '`for...in` parcourt les clés d’un objet. Avec un tableau, il te donnerait les indices sous forme de texte ("0", "1"...), ne l’utilise donc pas pour les tableaux.' ],
          code: `for (const lettre of "sol") console.log(lettre);  // s, o, l (une par ligne)\n\nconst ages = { Ana: 30, Leo: 8 };\nfor (const nom in ages) {\n  console.log(nom, ages[nom]);\n}\n// Ana 30\n// Leo 8` },
        { h: 'break et continue', p: [
          '`break` sort complètement de la boucle : utile quand tu as déjà trouvé ce que tu cherchais. `continue` saute le reste du tour actuel et passe au suivant.',
          'Utilise-les avec modération : une boucle pleine de `break` et de `continue` est difficile à suivre. Souvent, une méthode de tableau comme `find` ou `filter` (jour 9) l’exprime mieux.' ],
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
    // Jour 7
    {
      id: 'js-functions',
      t: 'Fonctions',
      d: 'Déclarations, fonctions fléchées, paramètres, return, portée et hoisting.',
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
          'Avec des accolades, il faut un `return` explicite : `(n) => { return n * 2; }`. Elles sont parfaites pour les petites fonctions qu’on passe à d’autres (tu le verras au jour 9).' ],
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
    // Jour 8
    {
      id: 'js-objects',
      t: 'Objets',
      d: 'Propriétés, méthodes, this, parcourir des objets et les copier.',
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
    // Jour 9
    {
      id: 'js-higher-order',
      t: 'Fonctions d’ordre supérieur',
      d: 'Callbacks, forEach, map, filter, reduce, find, some, every et sort.',
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
    // Jour 10
    {
      id: 'js-sets-maps',
      t: 'Set et Map',
      d: 'Des valeurs uniques avec Set et des dictionnaires aux clés de tout type avec Map.',
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
    // Jour 11
    {
      id: 'js-destructuring',
      t: 'Déstructuration et spread',
      d: 'Extraire des valeurs de tableaux et d’objets, valeurs par défaut, spread et rest.',
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
      id: 'js-regex',
      t: 'Expressions régulières',
      d: 'Littéraux /.../, classes de caractères, test, match, replace et drapeaux.',
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
        { h: 'Exemple réel : valider un formulaire', real: true, p: [
          'Un formulaire d’inscription vérifie l’e-mail et le code postal avant de les envoyer, et nettoie le numéro de téléphone que l’utilisateur a tapé avec des espaces et des tirets.' ],
          code: `const regles = {\n  email: /^[\\w.-]+@[\\w-]+\\.[a-z]{2,}$/i,\n  cp: /^\\d{5}$/,\n};\n\nfunction valider(donnees) {\n  const erreurs = [];\n  if (!regles.email.test(donnees.email)) erreurs.push("email");\n  if (!regles.cp.test(donnees.cp)) erreurs.push("code postal");\n  return erreurs;\n}\n\nconsole.log(valider({ email: "ana@mail.com", cp: "75001" }));  // []\nconsole.log(valider({ email: "ana@mail", cp: "750" }));       // ["email", "code postal"]\nconsole.log("06 12-34 56 78".replace(/\\D/g, ""));            // 0612345678` },
      ],
      x: [
        out(`console.log(/^\\d{3}$/.test("123"), /^\\d{3}$/.test("1234"));`, ['true false', 'true true', 'false false', 'false true'], 'Avec `^` et `$`, le texte entier doit avoir exactement trois chiffres.'),
        fill(`const r = /bonjour/___;\nconsole.log(r.test("BONJOUR"));  // true`, ['i', 'g', 'm', 'u'], 'Le drapeau `i` ignore la différence entre majuscules et minuscules.'),
        out(`console.log("a1b22c333".match(/\\d+/g));`, ['["1", "22", "333"]', '["1"]', '["1", "2", "2", "3", "3", "3"]', 'null'], '`\\d+` prend autant de chiffres consécutifs que possible, et `g` renvoie toutes les correspondances.'),
        out(`console.log("2024-05-01".replace(/-/g, "/"));`, ['2024/05/01', '2024/05-01', '2024-05-01', '/'], 'Avec `g`, tous les tirets sont remplacés, pas seulement le premier.'),
        mc('Que représente `\\s` dans une expression régulière ?', ['Un espace blanc : espace, tabulation ou saut de ligne', 'La lettre s', 'N’importe quel caractère', 'Un chiffre'], 'Son contraire est `\\S` : tout caractère qui n’est pas un espace.'),
        typ('Fais-lui accepter une ou plusieurs lettres', `const seulementLettres = /^[a-z]___$/i;`, '+', '`+` signifie une ou plusieurs fois. Avec `*`, il accepterait aussi le texte vide.'),
        out(`console.log("un, deux,trois".split(/,\\s*/));`, ['["un", "deux", "trois"]', '["un", " deux", "trois"]', '["un, deux,trois"]'], 'Le séparateur est une virgule suivie de zéro ou plusieurs espaces, donc aucun morceau ne garde d’espace.'),
        out(`const texte = "Commandes : A-12, B-7, A-30, C-5";\nconst codes = texte.match(/A-\\d+/g);\nconst somme = codes.map((c) => Number(c.slice(2))).reduce((a, b) => a + b, 0);\nconsole.log(codes.length, somme, /c-5/i.test(texte));`, ['2 42 true', '2 42 false', '4 54 true', '3 42 true'], 'Seuls "A-12" et "A-30" commencent par A. `slice(2)` enlève "A-" : 12 + 30 = 42. Avec `i`, "c-5" trouve "C-5".'),
      ],
    },
    // Jour 13
    {
      id: 'js-console',
      t: 'Méthodes de console',
      d: 'log, error, warn, table, time, count, group et assert pour déboguer.',
      guide: [
        { h: 'Au-delà de console.log', p: [
          '`console.log` accepte plusieurs arguments et les sépare par une espace. Dans le navigateur, les objets s’affichent de façon interactive.',
          '`console.info`, `console.warn` et `console.error` fonctionnent pareil, mais le navigateur les marque de couleurs et d’icônes et on peut les filtrer. `error` écrit en plus dans la sortie d’erreurs.' ],
          code: `const utilisateur = { nom: "Ana", points: 40 };\nconsole.log("Utilisateur :", utilisateur, "actif");\nconsole.warn("Il reste peu d’essais");\nconsole.error("Impossible d’enregistrer");` },
        { h: 'console.table', p: [
          '`console.table` affiche un tableau d’objets sous forme de table, avec une ligne par élément et une colonne par propriété.',
          'Un deuxième argument choisit les colonnes : `console.table(donnees, ["nom"])`. C’est idéal pour vérifier des données qui viennent d’une API.' ],
          code: `const eleves = [\n  { nom: "Ana", note: 9 },\n  { nom: "Leo", note: 6 },\n];\nconsole.table(eleves);\n// ┌─────────┬───────┬──────┐\n// │ (index) │ nom   │ note │\n// │    0    │ "Ana" │  9   │\n// │    1    │ "Leo" │  6   │` },
        { h: 'Mesurer et compter', p: [
          '`console.time("étiquette")` lance un chronomètre et `console.timeEnd("étiquette")` affiche le temps écoulé. Tu sais ainsi quelle partie du code est lente.',
          '`console.count("étiquette")` affiche combien de fois il a été appelé avec cette étiquette, et `console.countReset` remet le compteur à zéro.' ],
          code: `console.time("boucle");\nlet s = 0;\nfor (let i = 0; i < 1e6; i++) s += i;\nconsole.timeEnd("boucle");  // boucle: 3.2 ms (variable)\n\nconsole.count("clic");  // clic: 1\nconsole.count("clic");  // clic: 2` },
        { h: 'Regrouper et vérifier', p: [
          '`console.group("titre")` met en retrait les messages suivants jusqu’à `console.groupEnd()`. Cela aide à lire la sortie des traitements en plusieurs étapes.',
          '`console.assert(condition, message)` n’affiche le message, comme une erreur, que si la condition est fausse. Il n’arrête pas le programme.' ],
          code: `console.group("Commande 42");\nconsole.log("Client : Ana");\nconsole.log("Total : 30 €");\nconsole.groupEnd();\n\nconsole.assert(1 + 1 === 2, "ne s’affiche pas");\nconsole.assert([].length > 0, "La liste est vide");  // Assertion failed: La liste est vide` },
        { h: 'Exemple réel : déboguer un panier', real: true, p: [
          'Un panier calcule un total faux. Avec quelques appels à console, on voit son contenu, on vérifie chaque étape et on mesure le calcul sans utiliser le débogueur.' ],
          code: `const panier = [\n  { produit: "Livre", prix: 15, unites: 2 },\n  { produit: "Étui", prix: 8, unites: 0 },\n];\n\nconsole.table(panier);\nconsole.time("total");\nconst total = panier.reduce((s, l) => {\n  console.assert(l.unites > 0, "Ligne sans unités :", l.produit);\n  return s + l.prix * l.unites;\n}, 0);\nconsole.timeEnd("total");\nconsole.log("Total :", total);  // Total : 30` },
      ],
      x: [
        mc('Quelle méthode affiche un tableau d’objets sous forme de table ?', ['console.table', 'console.grid', 'console.list', 'console.dir'], 'Chaque objet est une ligne et chaque propriété une colonne.'),
        mc('Après `console.count("clic")` deux fois et `console.count("autre")` une fois, qu’affiche le dernier appel ?', ['autre: 1', 'autre: 3', 'clic: 3', '3'], 'Chaque étiquette a son propre compteur.'),
        fill(`console.___("chargement");\nchargerDonnees();\nconsole.timeEnd("chargement");`, ['time', 'timer', 'start', 'clock'], '`console.time` et `console.timeEnd` doivent utiliser la même étiquette.'),
        out(`console.assert(2 + 2 === 4, "échec");\nconsole.log("fin");`, ['fin', 'Assertion failed: échec\nfin', 'échec\nfin', 'Erreur'], 'La condition est vraie, donc `assert` n’affiche rien.'),
        mc('En quoi `console.error` diffère-t-il de `console.log` ?', ['Il écrit dans la sortie d’erreurs et le navigateur le marque comme erreur', 'Il arrête le programme', 'Il lève une exception', 'Il n’y a aucune différence'], 'Pour lever une vraie erreur, on utilise `throw`.'),
        typ('Ferme le groupe de messages', `console.group("Utilisateur");\nconsole.log("Ana");\nconsole.___();`, 'groupEnd', 'Chaque `group` se ferme avec son `groupEnd`.'),
        out(`const n = 5;\nconsole.log("Total:", n, "articles");`, ['Total: 5 articles', 'Total:5articles', 'Total: n articles', 'Total: 5, articles'], 'Les arguments s’affichent séparés par une espace.'),
        out(`for (let i = 0; i < 3; i++) console.count("étape");\nconsole.countReset("étape");\nconsole.count("étape");\nconsole.assert(false, "vérifier");`, ['étape: 1\nétape: 2\nétape: 3\nétape: 1\nAssertion failed: vérifier', 'étape: 1\nétape: 2\nétape: 3\nétape: 4\nAssertion failed: vérifier', 'étape: 1\nétape: 2\nétape: 3\nétape: 1', 'étape: 3\nétape: 1\nAssertion failed: vérifier'], 'La boucle compte jusqu’à 3, `countReset` remet le compteur à zéro et l’appel suivant repart à 1. `assert` avec `false` affiche son message.'),
      ],
    },
    // Jour 14
    {
      id: 'js-errors',
      t: 'Gestion des erreurs',
      d: 'try, catch, finally, throw, types d’erreurs et erreurs personnalisées.',
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
    // Jour 15
    {
      id: 'js-classes',
      t: 'Classes',
      d: 'class, constructor, méthodes, getters, extends, super, static et champs privés.',
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
    // Jour 16
    {
      id: 'js-json',
      t: 'JSON',
      d: 'JSON.stringify, JSON.parse, les règles du format et les copies de données.',
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
        { h: 'Copies et dates', p: [
          '`JSON.parse(JSON.stringify(obj))` crée une copie profonde : les objets intérieurs ne sont plus partagés. Mais elle perd les dates, `undefined` et les fonctions.',
          'Pour des copies profondes fiables, il existe `structuredClone(obj)`, qui conserve les dates. En lisant du JSON, les dates arrivent sous forme de texte : reconvertis-les avec `new Date(texte)`.' ],
          code: `const original = { date: new Date(2024, 0, 1), etiquettes: ["a"] };\nconst viaJson = JSON.parse(JSON.stringify(original));\nconst clone = structuredClone(original);\nconsole.log(typeof viaJson.date);         // string\nconsole.log(clone.date instanceof Date);   // true` },
        { h: 'Exemple réel : envoyer et recevoir une commande', real: true, p: [
          'Une boutique envoie la commande à son serveur sous forme de texte JSON et reçoit la réponse en JSON aussi. Les dates sont reconverties à la lecture.' ],
          code: `const commande = { client: "Eva", lignes: [{ produit: "Livre", unites: 2 }], date: new Date() };\nconst corps = JSON.stringify(commande);   // serait envoyé avec fetch\n\nconst reponse = '{"id":981,"statut":"payée","date":"2024-03-10T09:30:00.000Z"}';\nconst donnees = JSON.parse(reponse);\nconst date = new Date(donnees.date);\nconsole.log(donnees.id, donnees.statut, date.getUTCHours());  // 981 payée 9` },
      ],
      x: [
        mc('Lequel de ces textes est un JSON valide ?', ['{"nom": "Ana", "age": 30}', '{nom: "Ana"}', "{'nom': 'Ana'}", '{"age": 30,}'], 'JSON exige des guillemets doubles pour les clés et les textes et n’accepte pas de virgule finale.'),
        out(`console.log(JSON.stringify({ a: 1, b: "x" }));`, ['{"a":1,"b":"x"}', '{ a: 1, b: "x" }', '{"a": 1, "b": "x"}', '[object Object]'], 'Sans indentation, `stringify` ne laisse aucune espace.'),
        out(`const o = JSON.parse('{"n": 5}');\nconsole.log(o.n + 1, typeof o);`, ['6 object', '51 object', '6 string', 'NaN object'], '`parse` renvoie un objet et `n` est un vrai nombre.'),
        fill(`const utilisateur = { nom: "Ana" };\nconst texte = JSON.___(utilisateur);`, ['stringify', 'parse', 'toString', 'encode'], '`stringify` transforme l’objet en texte JSON.'),
        out(`console.log(JSON.stringify({ a: undefined, b: () => 1, c: null }));`, ['{"c":null}', '{"a":undefined,"b":null,"c":null}', '{"a":null,"b":null,"c":null}', '{}'], 'Les propriétés avec `undefined` ou des fonctions sont omises ; `null`, lui, est gardé.'),
        typ('Transforme le texte JSON en objet', `const texte = '{"actif":true}';\nconst donnees = JSON.___(texte);`, 'parse', '`JSON.parse` lit le texte et renvoie la valeur.'),
        out(`const original = { liste: [1, 2] };\nconst copie = JSON.parse(JSON.stringify(original));\ncopie.liste.push(3);\nconsole.log(original.liste.length, copie.liste.length);`, ['2 3', '3 3', '2 2', '3 2'], 'La copie faite avec JSON est profonde : le tableau intérieur n’est plus partagé.'),
        out(`const commande = { id: 3, date: new Date(Date.UTC(2024, 0, 15)), articles: [{ p: "thé", n: 2 }], note: undefined };\nconst texte = JSON.stringify(commande);\nconst retour = JSON.parse(texte);\nconsole.log(typeof retour.date, "note" in retour, retour.articles[0].n * 2, texte.includes("2024-01-15"));`, ['string false 4 true', 'object false 4 true', 'string true 4 true', 'object true 4 false'], 'La date est enregistrée en texte ISO et revient en texte. `note` valait `undefined`, elle n’a donc pas été enregistrée. Les tableaux et objets intérieurs sont conservés.'),
      ],
    },
    // Jour 17
    {
      id: 'js-storage',
      t: 'Web Storage',
      d: 'Enregistrer des données dans le navigateur avec localStorage et sessionStorage.',
      guide: [
        { h: 'Ce qu’est Web Storage', p: [
          'Le navigateur offre deux magasins de paires clé-valeur : `localStorage`, qui garde les données même si tu fermes le navigateur, et `sessionStorage`, qui les efface à la fermeture de l’onglet.',
          'Chaque site web a son propre magasin et ne peut lire que le sien. On peut y stocker environ 5 Mo et tout est enregistré sous forme de texte.' ] },
        { h: 'Enregistrer, lire et supprimer', p: [
          '`setItem(clé, valeur)` enregistre, `getItem(clé)` lit (renvoie `null` si la clé n’existe pas), `removeItem(clé)` supprime une clé et `clear()` efface tout.',
          '`length` indique combien de clés il y a. Toute valeur est convertie en texte : si tu enregistres le nombre 5, tu liras « 5 ».' ],
          code: `localStorage.setItem("theme", "sombre");\nconsole.log(localStorage.getItem("theme"));   // sombre\nconsole.log(localStorage.getItem("langue"));  // null\n\nlocalStorage.setItem("visites", 3);\nconsole.log(typeof localStorage.getItem("visites"));  // string\nlocalStorage.removeItem("theme");` },
        { h: 'Enregistrer des objets avec JSON', p: [
          'Si tu enregistres un objet directement, il devient le texte « [object Object] » et les données sont perdues. Il faut le passer par `JSON.stringify` à l’enregistrement et par `JSON.parse` à la lecture.',
          'Comme `JSON.parse(null)` renvoie `null`, avec `??` tu peux donner une valeur par défaut quand la clé n’existe pas encore.' ],
          code: `const panier = [{ produit: "Tasse", unites: 2 }];\nlocalStorage.setItem("panier", JSON.stringify(panier));\n\nconst lu = JSON.parse(localStorage.getItem("panier")) ?? [];\nconsole.log(lu[0].produit);  // Tasse` },
        { h: 'sessionStorage, événements et sécurité', p: [
          '`sessionStorage` a les mêmes méthodes. Utilise-le pour des données temporaires, comme un formulaire à moitié rempli.',
          'Quand un autre onglet du même site modifie `localStorage`, l’événement `storage` se déclenche, pratique pour synchroniser les onglets.',
          'N’enregistre pas de mots de passe ni de données sensibles : n’importe quel script exécuté sur ta page peut lire le magasin.' ],
          code: `sessionStorage.setItem("brouillon", "Bonjour, je voulais demander...");\n\nwindow.addEventListener("storage", (e) => {\n  if (e.key === "theme") appliquerTheme(e.newValue);\n});` },
        { h: 'Exemple réel : se souvenir du mode sombre', real: true, p: [
          'Un site enregistre la préférence de thème de l’utilisateur. Quand il revient des jours plus tard, la page s’ouvre avec le thème qu’il a choisi.' ],
          code: `const CLE = "preferences";\n\nfunction lirePreferences() {\n  return JSON.parse(localStorage.getItem(CLE)) ?? { theme: "clair", police: 16 };\n}\n\nfunction changerTheme(theme) {\n  const prefs = { ...lirePreferences(), theme };\n  localStorage.setItem(CLE, JSON.stringify(prefs));\n  document.body.dataset.theme = theme;\n}\n\ndocument.body.dataset.theme = lirePreferences().theme;  // au chargement de la page` },
      ],
      x: [
        mc('Quelle est la différence entre `localStorage` et `sessionStorage` ?', ['localStorage garde les données à la fermeture du navigateur ; sessionStorage les efface à la fermeture de l’onglet', 'sessionStorage stocke plus de données', 'localStorage ne stocke que des nombres', 'Il n’y a aucune différence'], 'Les deux ont les mêmes méthodes et ne stockent que du texte.'),
        fill(`localStorage.___("theme", "sombre");`, ['setItem', 'set', 'save', 'put'], '`setItem(clé, valeur)` enregistre une valeur.'),
        out(`localStorage.setItem("visites", 5);\nconst v = localStorage.getItem("visites");\nconsole.log(typeof v, v + 1);`, ['string 51', 'number 6', 'string 6', 'number 51'], 'Tout est enregistré en texte, donc `+` concatène.'),
        out(`console.log(localStorage.getItem("inexistant"));`, ['null', 'undefined', '""', 'Erreur'], 'Une clé qui n’existe pas renvoie `null`.'),
        out(`localStorage.setItem("u", { nom: "Ana" });\nconsole.log(localStorage.getItem("u"));`, ['[object Object]', '{"nom":"Ana"}', '{ nom: "Ana" }', 'null'], 'Sans `JSON.stringify`, l’objet devient un texte inutile.'),
        typ('Donne un objet vide par défaut si la clé n’existe pas', `const prefs = JSON.parse(localStorage.getItem("prefs")) ___ {};`, ['??', '||'], '`JSON.parse(null)` vaut `null`, et `??` le remplace par `{}`.'),
        mc('Que ne faut-il PAS enregistrer dans localStorage ?', ['Des mots de passe ou des données sensibles', 'La langue choisie', 'Le thème clair ou sombre', 'Un brouillon de commentaire'], 'N’importe quel script exécuté sur la page peut lire le magasin.'),
        out(`localStorage.clear();\nconst enregistrer = (k, v) => localStorage.setItem(k, JSON.stringify(v));\nconst charger = (k, def) => JSON.parse(localStorage.getItem(k)) ?? def;\nenregistrer("taches", ["pain", "lait"]);\nconst taches = charger("taches", []);\ntaches.push("café");\nenregistrer("taches", taches);\nlocalStorage.removeItem("theme");\nconsole.log(charger("taches", []).length, charger("theme", "clair"), localStorage.length);`, ['3 clair 1', '2 clair 1', '3 null 1', '3 clair 2'], 'Les tâches sont lues, complétées et réenregistrées : 3. "theme" n’existe pas, donc `charger` renvoie la valeur par défaut. Il ne reste qu’une clé.'),
      ],
    },
    // Jour 18
    {
      id: 'js-promises',
      t: 'Promesses',
      d: 'Code asynchrone, Promise, then, catch, Promise.all et l’ordre d’exécution.',
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
    // Jour 19
    {
      id: 'js-closures',
      t: 'Closures',
      d: 'Des fonctions qui se souviennent de leur portée, des fabriques de fonctions et des données privées.',
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
    // Jour 20
    {
      id: 'js-clean-code',
      t: 'Code propre',
      d: 'Des noms clairs, de petites fonctions, des constantes et des outils de qualité.',
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
        { h: 'Bonnes habitudes et outils', p: [
          'Utilise `const` par défaut et `let` seulement si tu vas réaffecter. Compare toujours avec `===`. Ne modifie pas les paramètres que tu reçois : renvoie une nouvelle valeur.',
          'ESLint analyse le code sans l’exécuter et signale les erreurs et les mauvaises pratiques. Prettier le formate automatiquement pour que toute l’équipe écrive pareil. Les commentaires doivent expliquer le pourquoi, pas le quoi.' ],
          code: `// npm install --save-dev eslint prettier\n// npx eslint src/\n// npx prettier --write src/\n\n// Mal : le commentaire répète le code\ni++;  // ajoute un à i\n\n// Bien : il explique une décision\nconst ESSAIS = 3;  // l’API échoue parfois au premier essai` },
        { h: 'Exemple réel : refactoriser le calcul d’une commande', real: true, p: [
          'Une boutique avait une seule longue fonction pleine de nombres isolés. Découpée en petites fonctions avec des constantes, chaque règle métier se comprend et se teste séparément.' ],
          code: `const REMISE_MEMBRE = 0.1;\nconst LIVRAISON_GRATUITE_DES = 50;\nconst FRAIS_LIVRAISON = 5;\n\nconst sousTotal = (lignes) => lignes.reduce((s, l) => s + l.prix * l.unites, 0);\nconst remise = (montant, estMembre) => (estMembre ? montant * REMISE_MEMBRE : 0);\nconst livraison = (montant) => (montant >= LIVRAISON_GRATUITE_DES ? 0 : FRAIS_LIVRAISON);\n\nfunction totalCommande(lignes, estMembre) {\n  const base = sousTotal(lignes);\n  const apresRemise = base - remise(base, estMembre);\n  return apresRemise + livraison(apresRemise);\n}\n\nconsole.log(totalCommande([{ prix: 30, unites: 1 }], false));  // 35` },
      ],
      x: [
        mc('Quel nom est le plus clair pour un tableau d’utilisateurs actifs ?', ['utilisateursActifs', 'arr', 'donnees2', 'x'], 'Un bon nom dit ce que contient la variable sans devoir lire le reste du code.'),
        mc('Qu’est-ce qu’un nombre magique ?', ['Une valeur sans explication au milieu du code', 'Un nombre aléatoire', 'Un très grand nombre', 'Un nombre négatif'], 'On le corrige en lui donnant un nom avec une constante, comme `TVA`.'),
        out(`function prixLivraison(total, estMembre) {\n  if (estMembre) return 0;\n  if (total >= 50) return 0;\n  return 4.99;\n}\nconsole.log(prixLivraison(30, false), prixLivraison(30, true), prixLivraison(60, false));`, ['4.99 0 0', '0 0 4.99', '4.99 4.99 0', '4.99 0 4.99'], 'Chaque cas particulier sort tôt ; seul le cas normal arrive à la fin.'),
        fill(`___ TVA = 0.2;  // ne change jamais`, ['const', 'let', 'var', 'static'], 'Ce qui n’est pas réaffecté se déclare avec `const`.'),
        mc('Quel outil analyse le code sans l’exécuter et signale les erreurs et les mauvaises pratiques ?', ['ESLint', 'Prettier', 'Node.js', 'npm'], 'Prettier ne fait que formater ; ESLint analyse.'),
        out(`function avecRemise(produits) {\n  return produits.map((p) => ({ ...p, prix: p.prix * 0.9 }));\n}\nconst liste = [{ prix: 100 }];\nconst soldee = avecRemise(liste);\nconsole.log(liste[0].prix, soldee[0].prix);`, ['100 90', '90 90', '100 100', '90 100'], 'La fonction crée de nouveaux objets avec le spread, donc le tableau d’origine ne change pas.'),
        ord('Remets la fonction dans l’ordre pour qu’elle utilise un retour anticipé', ['function nom(utilisateur) {', 'if (!utilisateur) return "Anonyme";', 'return utilisateur.nom;', '}'], ['else {', 'if (utilisateur) {'], 'On écarte d’abord le cas particulier ; le cas normal reste à la fin sans imbrication.'),
        out(`const REMISE_MEMBRE = 0.1;\nconst LIVRAISON_GRATUITE_DES = 50;\nconst FRAIS_LIVRAISON = 5;\nconst sousTotal = (articles) => articles.reduce((s, a) => s + a.prix * a.unites, 0);\nconst remise = (montant, estMembre) => (estMembre ? montant * REMISE_MEMBRE : 0);\nconst livraison = (montant) => (montant >= LIVRAISON_GRATUITE_DES ? 0 : FRAIS_LIVRAISON);\nfunction totalCommande(articles, estMembre) {\n  const base = sousTotal(articles);\n  const apresRemise = base - remise(base, estMembre);\n  return apresRemise + livraison(apresRemise);\n}\nconst articles = [{ prix: 20, unites: 2 }, { prix: 15, unites: 1 }];\nconsole.log(totalCommande(articles, false), totalCommande(articles, true));`, ['55 54.5', '55 49.5', '60 54.5', '55 55'], 'Le sous-total est 55. Sans remise, la livraison est gratuite : 55. Le membre paie 49.5, qui n’atteint pas 50, donc on ajoute la livraison : 54.5.'),
      ],
    },
    // Jour 21
    {
      id: 'js-dom',
      t: 'DOM',
      d: 'L’arbre de la page, sélectionner des éléments et lire leur contenu.',
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
    // Jour 22
    {
      id: 'js-dom-edit',
      t: 'Modifier le DOM',
      d: 'Changer le texte, créer et insérer des éléments, classes, styles et attributs.',
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
    // Jour 23
    {
      id: 'js-events',
      t: 'Événements',
      d: 'addEventListener, l’objet événement, preventDefault, propagation et délégation.',
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
    // Jour 24
    {
      id: 'js-async',
      t: 'Async/await et fetch',
      d: 'Fonctions async, await, erreurs avec try...catch et requêtes vers des API avec fetch.',
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
      t: 'Modules ES',
      d: 'export, import, exports par défaut, type="module" et import dynamique.',
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
      d: 'Le protocole itérable, Symbol.iterator, function*, yield et next().',
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
      d: 'JavaScript côté serveur : process, modules de Node, npm et Express.',
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
      id: 'js-performance',
      t: 'Performance et patterns',
      d: 'Mesurer, debounce, throttle, mémoïsation, un DOM efficace et Web Workers.',
      guide: [
        { h: 'D’abord, mesurer', p: [
          'N’optimise pas à l’aveugle : mesure où part le temps. `performance.now()` donne un horodatage précis en millisecondes et l’onglet Performance des DevTools montre ce qui est lent.',
          'Le problème se trouve presque toujours à quelques endroits : une boucle qui se répète trop, trop de requêtes ou des changements du DOM un par un.' ],
          code: `const debut = performance.now();\nconst tries = [...donnees].sort((a, b) => a.prix - b.prix);\nconsole.log("Tri :", (performance.now() - debut).toFixed(1), "ms");` },
        { h: 'Debounce et throttle', p: [
          'Le debounce attend qu’une action arrête de se répéter pendant un moment avant d’exécuter la fonction : idéal pour rechercher pendant que l’utilisateur tape.',
          'Le throttle exécute la fonction au plus une fois par intervalle de temps, même si l’événement se déclenche des centaines de fois : idéal pour `scroll` ou `resize`.' ],
          code: `function debounce(fn, ms) {\n  let minuteur;\n  return (...args) => {\n    clearTimeout(minuteur);\n    minuteur = setTimeout(() => fn(...args), ms);\n  };\n}\n\nfunction throttle(fn, ms) {\n  let dernier = 0;\n  return (...args) => {\n    const maintenant = Date.now();\n    if (maintenant - dernier >= ms) {\n      dernier = maintenant;\n      fn(...args);\n    }\n  };\n}\n\nwindow.addEventListener("scroll", throttle(() => console.log(scrollY), 100));` },
        { h: 'La mémoïsation', p: [
          'Mémoïser, c’est garder le résultat d’une fonction pour ne pas le recalculer quand les mêmes arguments reviennent. Ça marche avec les fonctions pures : même argument, même résultat.',
          'Une `Map` comme cache est la façon la plus simple. Attention à la mémoire si les arguments possibles sont infinis.' ],
          code: `function memo(fn) {\n  const cache = new Map();\n  return (n) => {\n    if (!cache.has(n)) cache.set(n, fn(n));\n    return cache.get(n);\n  };\n}\n\nconst lent = (n) => { for (let i = 0; i < 1e8; i++); return n * 2; };\nconst rapide = memo(lent);\nrapide(21);  // prend du temps\nrapide(21);  // instantané : sort du cache` },
        { h: 'DOM efficace et Web Workers', p: [
          'Chaque changement du DOM peut obliger le navigateur à recalculer la mise en page. Regroupe les changements : crée les éléments dans un `DocumentFragment` et ajoute-les en une fois, ou change une classe au lieu de nombreux styles.',
          'Un calcul lourd bloque la page. Un Web Worker l’exécute dans un autre fil et communique par messages : `postMessage` pour envoyer et l’événement `message` pour recevoir. `loading="lazy"` sur les images retarde leur chargement jusqu’à ce qu’elles soient visibles.' ],
          code: `// main.js\nconst worker = new Worker("premiers.js");\nworker.postMessage(5_000_000);\nworker.addEventListener("message", (e) => {\n  console.log("Nombres premiers trouvés :", e.data);\n});\n\n// premiers.js (autre fil : la page continue de répondre)\nself.addEventListener("message", (e) => {\n  let compte = 0;\n  for (let n = 2; n < e.data; n++) if (estPremier(n)) compte++;\n  self.postMessage(compte);\n});` },
        { h: 'Exemple réel : une recherche qui ne sature pas l’API', real: true, p: [
          'Sans précaution, chercher « javascript » lettre par lettre fait dix requêtes. Avec un debounce, on ne demande que quand l’utilisateur s’arrête, et un cache évite de refaire des recherches déjà faites.' ],
          code: `const cache = new Map();\n\nasync function rechercher(texte) {\n  if (cache.has(texte)) return cache.get(texte);\n  const res = await fetch("/api/recherche?q=" + encodeURIComponent(texte));\n  const donnees = await res.json();\n  cache.set(texte, donnees);\n  return donnees;\n}\n\nconst input = document.querySelector("#recherche");\ninput.addEventListener("input", debounce(async () => {\n  const texte = input.value.trim();\n  if (texte.length < 2) return;\n  const resultats = await rechercher(texte);\n  afficherResultats(resultats);\n}, 300));` },
      ],
      x: [
        mc('Quelle différence y a-t-il entre debounce et throttle ?', ['Le debounce attend que l’action s’arrête ; le throttle limite combien de fois elle s’exécute dans le temps', 'C’est la même chose', 'Le throttle ne marche qu’avec le clavier', 'Le debounce exécute la fonction immédiatement'], 'Debounce pour les recherches pendant la saisie ; throttle pour `scroll` ou `resize`.'),
        out(`function memo(fn) {\n  const cache = new Map();\n  return (n) => {\n    if (!cache.has(n)) cache.set(n, fn(n));\n    return cache.get(n);\n  };\n}\nlet calculs = 0;\nconst carre = memo((n) => {\n  calculs++;\n  return n * n;\n});\ncarre(4);\ncarre(4);\ncarre(5);\nconsole.log(calculs, carre(5));`, ['2 25', '3 25', '4 25', '2 16'], 'Le deuxième `carre(4)` et le dernier `carre(5)` sortent du cache : seuls 4 et 5 ont été calculés.'),
        fill(`const debut = performance.___();\nfaireQuelqueChose();\nconsole.log(performance.now() - debut, "ms");`, ['now', 'time', 'start', 'clock'], '`performance.now()` donne un horodatage précis.'),
        out(`function debounce(fn, ms) {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), ms);\n  };\n}\nconst journal = [];\nconst rechercher = debounce((txt) => journal.push(txt), 20);\nrechercher("j");\nrechercher("ja");\nrechercher("jav");\nsetTimeout(() => rechercher("java"), 50);\nsetTimeout(() => console.log(journal.join(",")), 100);`, ['jav,java', 'j,ja,jav,java', 'java', 'j,java'], 'Les trois premiers appels arrivent d’affilée : chacun annule le précédent et seul "jav" s’exécute. "java" arrive plus tard et s’exécute aussi.'),
        typ('Crée un fil séparé pour un calcul lourd', `const worker = new ___("calcul.js");`, 'Worker', 'Un Web Worker exécute le script dans un autre fil et communique par messages.'),
        mc('Pourquoi vaut-il mieux regrouper les changements du DOM ?', ['Chaque changement peut obliger à recalculer la mise en page', 'Parce que le DOM n’accepte qu’un changement par seconde', 'Pour utiliser moins de mémoire sur le serveur', 'Ce n’est pas utile : mieux vaut les faire un par un'], 'Un `DocumentFragment` ou le changement d’une classe permet de tout faire en une fois.'),
        mc('Quelle technique utiliserais-tu pour qu’une fonction liée au `scroll` s’exécute au plus toutes les 100 ms ?', ['throttle', 'debounce', 'la mémoïsation', 'Un Web Worker'], 'Avec un debounce, elle ne s’exécuterait qu’à l’arrêt du défilement.'),
        out(`const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));\nlet appels = 0;\nconst cache = {};\nfunction fibMemo(n) {\n  appels++;\n  if (n in cache) return cache[n];\n  return (cache[n] = n < 2 ? n : fibMemo(n - 1) + fibMemo(n - 2));\n}\nconsole.log(fib(10), fibMemo(10), appels);`, ['55 55 19', '55 55 177', '55 55 11', '89 89 19'], 'Les deux donnent le même résultat, mais la version avec cache calcule chaque nombre une seule fois : 11 calculs (de 10 à 0) plus 8 lectures du cache. La version sans cache ferait 177 appels.'),
      ],
    },
    // Jour 30
    {
      id: 'js-wrapup',
      t: 'Conclusions',
      d: 'Révision finale, outils du quotidien et prochaines étapes.',
      guide: [
        { h: 'Ce que tu as appris', p: [
          'Tu as parcouru JavaScript de `console.log` jusqu’aux serveurs : types, conditions, boucles, fonctions, objets, tableaux et leurs méthodes, classes, erreurs, JSON, le DOM et les événements, promesses et `async/await`, modules, générateurs, Node.js et tests.',
          'L’idée qui relie tout : JavaScript est un langage de fonctions et d’objets qui réagit à des événements. Presque tout ce que fait un site moderne se construit avec ces pièces.' ] },
        { h: 'JavaScript moderne en quelques lignes', p: [
          'Ce fragment réunit plusieurs pièces du cours : déstructuration, méthodes de tableaux, fonctions fléchées, gabarits de texte, `??` et `async/await`.',
          'Remarque ce qui manque : ni `var`, ni boucles avec indices, ni `==`.' ],
          code: 'const commandes = [\n  { client: "Ana", total: 40, payee: true },\n  { client: "Leo", total: 25, payee: false },\n  { client: "Eva", total: 60, payee: true },\n];\n\nconst encaisse = commandes\n  .filter(({ payee }) => payee)\n  .reduce((somme, { total }) => somme + total, 0);\n\nconst enAttente = commandes.filter((c) => !c.payee).map((c) => c.client);\nconsole.log(`Encaissé : ${encaisse} €. En attente : ${enAttente.join(", ") || "aucune"}`);\n// Encaissé : 100 €. En attente : Leo' },
        { h: 'Outils du quotidien', p: [
          'Les DevTools du navigateur (console, débogueur, réseau, performance) sont tes meilleurs alliés. Vite crée et sert des projets en quelques secondes, ESLint et Prettier gardent le code propre et Git conserve l’historique.',
          'TypeScript ajoute des types à JavaScript et détecte beaucoup d’erreurs avant l’exécution. C’est l’étape suivante naturelle.' ],
          code: `# Créer un nouveau projet avec Vite\nnpm create vite@latest mon-app\ncd mon-app\nnpm install\nnpm run dev\n\n# Vérifier et formater\nnpx eslint .\nnpx prettier --write .` },
        { h: 'Erreurs typiques et prochaines étapes', p: [
          'Les bugs les plus courants : utiliser `==` au lieu de `===`, oublier un `await`, perdre le `this` en passant une méthode comme callback, modifier des tableaux ou objets partagés et comparer des décimaux avec `===`.',
          'Pour continuer : construis de petits projets (une liste de tâches avec localStorage, une recherche avec une API, un jeu en canvas), consulte MDN et javascript.info, apprends TypeScript puis un framework comme React, Vue ou Svelte, ou Node.js avec une base de données pour le back-end.' ] },
        { h: 'Exemple réel : un gestionnaire de dépenses', real: true, p: [
          'Une petite application réunit ce que tu as appris : une classe avec un champ privé, une validation avec des erreurs, `reduce` pour regrouper, `localStorage` avec JSON pour enregistrer et `Intl.NumberFormat` pour afficher des euros.' ],
          code: `class Depenses {\n  #liste;\n  constructor(liste = []) {\n    this.#liste = liste;\n  }\n  ajouter(libelle, montant, categorie = "autres") {\n    if (!(montant > 0)) throw new RangeError("Montant invalide");\n    this.#liste.push({ libelle, montant, categorie, date: new Date().toISOString() });\n    return this;\n  }\n  parCategorie() {\n    return this.#liste.reduce((acc, { categorie, montant }) => {\n      acc[categorie] = (acc[categorie] ?? 0) + montant;\n      return acc;\n    }, {});\n  }\n  enregistrer() {\n    localStorage.setItem("depenses", JSON.stringify(this.#liste));\n  }\n  static charger() {\n    return new Depenses(JSON.parse(localStorage.getItem("depenses")) ?? []);\n  }\n}\n\nconst euros = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });\nconst d = Depenses.charger().ajouter("Cinéma", 9, "loisirs").ajouter("Fruits", 6.5, "alimentation");\nd.enregistrer();\nfor (const [cat, total] of Object.entries(d.parCategorie())) {\n  console.log(cat, euros.format(total));   // loisirs 9,00 €  ·  alimentation 6,50 €\n}` },
      ],
      x: [
        out(`console.log(0.1 + 0.2 === 0.3, [] == false, null ?? "x");`, ['false true x', 'true false x', 'false false null', 'true true x'], 'Les décimaux ne sont pas exacts. Avec `==`, `[]` et `false` sont convertis en 0, d’où la recommandation d’utiliser `===`. `??` remplace `null`.'),
        mc('Avec quel mot déclares-tu une variable qui ne sera pas réaffectée ?', ['const', 'let', 'var', 'static'], 'Utilise `const` par défaut et `let` seulement si tu dois réaffecter.'),
        out(`const o = {\n  n: "Ana",\n  saluer() {\n    return this.n;\n  },\n};\nconst f = o.saluer;\nconsole.log(o.saluer(), f.call({ n: "Leo" }));`, ['Ana Leo', 'Ana Ana', 'Ana undefined', 'Leo Leo'], '`this` dépend de la façon dont la fonction est appelée, pas de l’endroit où elle a été écrite. `call` fixe le `this`.'),
        fill(`const prix = [5, 10, 15];\nconst total = prix.___((s, p) => s + p, 0);`, ['reduce', 'map', 'filter', 'sum'], '`reduce` combine le tableau en une seule valeur.'),
        typ('Attends que les données arrivent', `async function charger(url) {\n  const donnees = ___ fetch(url).then((r) => r.json());\n  return donnees;\n}`, 'await', 'Sans `await`, `donnees` serait une promesse en attente.'),
        out(`const [a, ...b] = new Set([3, 3, 1, 2]);\nconsole.log(a, b.length, Array.isArray(b));`, ['3 2 true', '3 3 true', '3 2 false', '1 2 true'], 'Le Set vaut {3, 1, 2}. La déstructuration marche avec n’importe quel itérable et le rest crée toujours un tableau.'),
        ord('Garde seulement les personnes majeures', ['const majeurs', '=', 'personnes.filter(', '(p) => p.age >= 18', ');'], ['.map(', 'function'], '`filter` renvoie un nouveau tableau avec les éléments qui remplissent la condition.'),
        out(`class Depenses {\n  #liste = [];\n  ajouter(libelle, montant, categorie = "autres") {\n    if (montant <= 0) throw new RangeError("Montant invalide");\n    this.#liste.push({ libelle, montant, categorie });\n    return this;\n  }\n  parCategorie() {\n    return this.#liste.reduce((acc, { categorie, montant }) => {\n      acc[categorie] = (acc[categorie] ?? 0) + montant;\n      return acc;\n    }, {});\n  }\n}\nconst d = new Depenses().ajouter("Pain", 2).ajouter("Cinéma", 9, "loisirs").ajouter("Fruits", 6, "alimentation");\ntry {\n  d.ajouter("Erreur", -1);\n} catch (e) {\n  console.log(e.name);\n}\nconst resume = Object.entries(d.parCategorie()).sort((a, b) => b[1] - a[1]);\nconsole.log(resume.map(([c, t]) => c + ":" + t).join(" "), JSON.stringify(d));`, ['RangeError\nloisirs:9 alimentation:6 autres:2 {}', 'Error\nloisirs:9 alimentation:6 autres:2 {}', 'RangeError\nautres:2 loisirs:9 alimentation:6 {}', 'RangeError\nloisirs:9 alimentation:6 autres:2 {"#liste":[]}'], 'Le montant négatif lève une `RangeError`. On regroupe par catégorie et on trie du plus grand au plus petit. `JSON.stringify` ignore les champs privés, il donne donc "{}".'),
      ],
    },
  ],
}))(Sintaxis);
