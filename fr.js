/* C++ · Français */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('cpp', 'fr', {
  tag: 'Performance et contrôle direct de la mémoire.',
  days: [
    // ───────────── Jour 1 ─────────────
    {
      t: 'Introduction',
      d: 'Ce qu’est C++, compiler, main, iostream et std::cout.',
      guide: [
        { h: 'Qu’est-ce que C++ ?', p: [
          'C++ est un langage compilé créé par Bjarne Stroustrup à partir de 1979 comme une extension de C. Il combine la vitesse de C avec des outils modernes comme les classes, les templates et une grande bibliothèque standard.',
          'On le trouve dans des navigateurs comme Chrome, des moteurs de jeu comme Unreal Engine, des bases de données comme MySQL et des systèmes de trading où chaque microseconde compte.',
          'Le langage évolue par versions : C++11 l’a modernisé, puis sont arrivés C++14, C++17, C++20 et C++23. Dans ce cours, on utilise C++17/20.' ] },
        { h: 'Ton premier programme', p: [
          'Enregistre ce code dans `bonjour.cpp`. Tout programme commence à s’exécuter dans la fonction `int main()`.',
          'Contrairement à Python, C++ ne s’exécute pas directement : le compilateur traduit d’abord le code en exécutable. Avec GCC : `g++ -std=c++20 bonjour.cpp -o bonjour` puis `./bonjour`.' ],
          code: `#include <iostream>\n\nint main() {\n    std::cout << "Bonjour, le monde\\n";\n    return 0;\n}` },
        { h: 'Anatomie du programme', p: [
          '`#include <iostream>` importe la partie de la bibliothèque standard qui gère l’entrée et la sortie. `std::cout` est la sortie standard et `<<` lui envoie des données ; tu peux enchaîner plusieurs `<<`.',
          '`std::` indique que `cout` appartient à l’espace de noms de la bibliothèque standard. `"\\n"` est un saut de ligne.',
          'Chaque instruction se termine par `;`. L’oublier est l’erreur la plus fréquente au début. `return 0;` indique au système que tout s’est bien passé (dans `main`, tu peux l’omettre).' ],
          code: `#include <iostream>\n\nint main() {\n    // Commentaire sur une ligne\n    /* Commentaire\n       sur plusieurs lignes */\n    std::cout << "J’ai " << 25 << " ans" << "\\n";  // J’ai 25 ans\n    std::cout << 3 + 4 << "\\n";                   // 7\n}` },
        { h: 'Lire au clavier', p: [
          '`std::cin` est l’entrée standard et utilise `>>` dans l’autre sens : il amène la donnée du clavier vers une variable.',
          'Astuce pour s’en souvenir : les flèches pointent vers l’endroit où va la donnée. `cout << x` envoie `x` à l’écran ; `cin >> x` met ce qui est tapé dans `x`.' ],
          code: `#include <iostream>\n\nint main() {\n    int age;\n    std::cout << "Quel âge as-tu ? ";\n    std::cin >> age;\n    std::cout << "L’an prochain tu auras " << age + 1 << " ans\\n";\n}` },
        { h: 'Exemple réel : prix TTC', real: true, p: [
          'Une boutique en ligne doit afficher le prix final d’un produit. En quelques lignes, tu calcules le total avec une TVA de 21 %.',
          '`std::cout` affiche autant de décimales que nécessaire (jusqu’à 6 chiffres significatifs par défaut). Le jour 28, tu verras comment afficher exactement deux décimales.' ],
          code: `#include <iostream>\n\nint main() {\n    double prix = 49.99;\n    double tva = 0.21;\n    std::cout << "Total : " << prix * (1 + tva) << " euros\\n";  // Total : 60.4879 euros\n}` },
      ],
      x: [
        mc('Quel en-tête faut-il pour utiliser `std::cout` ?', ['<iostream>', '<console>', '<output>', '<stdio>'], '`<iostream>` déclare les flux standard `std::cout` et `std::cin`.'),
        mc('Dans quelle fonction un programme C++ commence-t-il à s’exécuter ?', ['main', 'start', 'init', 'run'], 'Le système d’exploitation appelle toujours `main` au démarrage du programme.'),
        mc('Comment écrit-on un commentaire sur une ligne en C++ ?', ['// commentaire', '# commentaire', '-- commentaire', '<!-- commentaire -->'], 'Tout ce qui suit `//` jusqu’à la fin de la ligne est ignoré. `#`, c’est Python.'),
        ord('Écris l’instruction qui affiche Bonjour', ['std::cout', '<<', '"Bonjour"', ';'], ['>>', 'print'], '`<<` envoie le texte au flux de sortie et l’instruction se termine par `;`.'),
        mc('Que fait le compilateur C++ ?', ['Il traduit le code source en programme exécutable', 'Il exécute le code ligne par ligne', 'Il télécharge des bibliothèques sur Internet', 'Il corrige les erreurs automatiquement'], 'Par exemple, `g++ bonjour.cpp -o bonjour` produit l’exécutable `bonjour`.'),
        out(`std::cout << "A" << "B" << "\\n" << "C";`, ['AB\nC', 'A B C', 'ABC', 'AB\\nC'], '`<<` enchaîne sans ajouter d’espaces et `"\\n"` produit un vrai saut de ligne.'),
        typ('Écris l’opérateur qui place la saisie dans la variable', `int age;\nstd::cin ___ age;`, '>>', '`std::cin` utilise `>>` : la donnée va du clavier vers la variable.'),
        // Défi final
        out(`std::cout << 3 + 4 << " " << "3 + 4" << "\\n";\nstd::cout << 10 / 4;`, ['7 3 + 4\n2', '7 7\n2.5', '3 + 4 3 + 4\n2', '7 3 + 4\n2.5'], 'Sans guillemets, `3 + 4` est calculé ; entre guillemets, c’est du texte. `10 / 4` entre entiers supprime les décimales : 2.'),
      ],
    },
    // ───────────── Jour 2 ─────────────
    {
      t: 'Variables et types',
      d: 'int, double, char, bool, auto, const et conversions.',
      guide: [
        { h: 'Déclarer des variables', p: [
          'En C++, chaque variable a un type fixe indiqué à la déclaration : `int age = 30;`. Le compilateur s’en sert pour réserver la mémoire et détecter les erreurs avant l’exécution.',
          'Tu peux initialiser avec `=` ou avec des accolades : `int age{30};`. Les accolades sont plus sûres car elles interdisent les conversions qui perdent des données : `int x{3.7};` ne compile pas.',
          'Une variable locale non initialisée contient n’importe quoi. Initialise toujours tes variables.' ],
          code: `int age = 30;\ndouble taille{1.75};\nint points;        // valeur indéterminée ! ne la lis pas avant de lui donner une valeur\npoints = 0;        // maintenant, oui` },
        { h: 'Les types de base', p: [
          '`int` pour les entiers, `double` pour les décimaux, `char` pour un caractère entre apostrophes, `bool` pour `true`/`false` et `long long` pour les très grands entiers.',
          '`sizeof(type)` indique combien d’octets il occupe. Sur la plupart des PC, `int` occupe 4 octets (jusqu’à environ 2,1 milliards) et `long long` 8 octets.' ],
          code: `int habitants = 3300000;\nlong long population_mondiale = 8100000000LL;\ndouble prix = 19.95;\nchar initiale = 'M';\nbool actif = true;\nstd::cout << sizeof(char) << " " << sizeof(double);  // 1 8` },
        { h: 'auto, const et constexpr', p: [
          '`auto` laisse le compilateur déduire le type à partir de la valeur : `auto x = 3.5;` est un `double`. Utilise-le quand le type est évident ou très long à écrire.',
          '`const` empêche de modifier la variable après sa création. `constexpr` va plus loin : la valeur est calculée à la compilation.',
          'Bonne pratique : marque comme `const` tout ce qui ne doit pas changer. Le compilateur te préviendra si tu le modifies par erreur.' ],
          code: `auto total = 2 * 9.99;      // double\nauto unites = 3;            // int\nconst double TVA = 0.21;\nconstexpr int JOURS_SEMAINE = 7;\n// TVA = 0.10;  // erreur : TVA est const` },
        { h: 'Conversions et static_cast', p: [
          'C++ convertit les types automatiquement, et perd parfois de l’information : ranger `3.9` dans un `int` donne `3` (il tronque, il n’arrondit pas).',
          'La division entre deux entiers est entière : `7 / 2` vaut `3`. Pour garder les décimales, convertis un des opérandes avec `static_cast<double>(x)`.',
          '`static_cast` rend la conversion explicite et visible. Évite l’ancien style `(double)x`.' ],
          code: `int total = 7, n = 2;\nstd::cout << total / n << "\\n";                          // 3\nstd::cout << static_cast<double>(total) / n << "\\n";     // 3.5\nint tronque = 3.9;\nstd::cout << tronque;                                    // 3` },
        { h: 'Exemple réel : consommation d’une voiture', real: true, p: [
          'Après un trajet, tu veux savoir combien de litres ta voiture consomme aux 100 km. Remarque qu’on utilise `double` car les litres ont des décimales.',
          'Si tu avais déclaré `litres` en `int`, 29.4 serait devenu 29 et le résultat serait faux.' ],
          code: `#include <iostream>\n\nint main() {\n    const double km = 420;\n    const double litres = 29.4;\n    std::cout << "Consommation : " << litres / km * 100 << " L/100 km\\n";  // Consommation : 7 L/100 km\n}` },
      ],
      x: [
        mc('Quel type utiliserais-tu pour savoir si un utilisateur est connecté ?', ['bool', 'boolean', 'bit', 'int8'], 'Le type logique de C++ est `bool` et vaut `true` ou `false`.'),
        mc('Dans `auto x = 3.5;`, quel type le compilateur déduit-il ?', ['double', 'float', 'int', 'auto'], 'Les littéraux décimaux sans suffixe sont des `double`. `3.5f` serait un `float`.'),
        out(`int a = 7, b = 2;\nstd::cout << a / b;`, ['3', '3.5', '4', '3.0'], 'La division entre deux `int` supprime les décimales.'),
        out(`std::cout << 7.0 / 2;`, ['3.5', '3', '4', '3.50'], 'Si un opérande est un `double`, la division garde les décimales.'),
        out(`int x = 3.9;\nstd::cout << x;`, ['3', '3.9', '4', 'Erreur'], 'Ranger un décimal dans un `int` tronque la partie décimale ; il n’y a pas d’arrondi.'),
        fill(`int somme = 17, n = 4;\ndouble moyenne = static_cast<___>(somme) / n;  // 4.25`, ['double', 'int', 'char', 'bool'], 'En convertissant `somme` en `double`, la division n’est plus entière.'),
        out(`char c = 'A';\nc = c + 2;\nstd::cout << c;`, ['C', 'A2', '67', 'B'], 'Un `char` est un nombre : A (65) + 2 = 67, c’est-à-dire la lettre C.'),
        // Défi final
        out(`int a = 9;\ndouble b = a / 2;\ndouble c = a / 2.0;\nstd::cout << b << " " << c;`, ['4 4.5', '4.5 4.5', '4 4', '4.5 4'], '`a / 2` est calculé entre entiers (4) avant d’être rangé dans `b` ; `a / 2.0` est déjà une division décimale (4.5).'),
      ],
    },
    // ───────────── Jour 3 ─────────────
    {
      t: 'Opérateurs',
      d: 'Arithmétiques, comparaison, logiques, incréments et priorité.',
      guide: [
        { h: 'Opérateurs arithmétiques', p: [
          'C++ propose `+ - * /` et `%` (reste). Entre entiers, `/` supprime les décimales et `%` donne ce qui reste : `17 / 5` vaut 3 et `17 % 5` vaut 2.',
          '`%` ne fonctionne qu’avec des entiers. Il est très utile pour savoir si un nombre est pair (`n % 2 == 0`) ou pour récupérer le dernier chiffre (`n % 10`).' ],
          code: `int a = 17, b = 5;\nstd::cout << a + b << " " << a - b << " " << a * b << "\\n";  // 22 12 85\nstd::cout << a / b << " " << a % b << "\\n";                  // 3 2\nstd::cout << 17.0 / 5;                                       // 3.4` },
        { h: 'Affectation composée et incréments', p: [
          '`x += 3` équivaut à `x = x + 3` ; il existe aussi `-=`, `*=`, `/=` et `%=`.',
          '`++x` incrémente et renvoie la nouvelle valeur ; `x++` renvoie l’ancienne valeur puis incrémente. Ça ne compte que si tu utilises le résultat dans la même expression.',
          'Ne modifie pas la même variable deux fois dans une expression (`i = i++ + ++i`) : le résultat n’est pas bien défini.' ],
          code: `int x = 5;\nint a = x++;   // a = 5, x = 6\nint b = ++x;   // x = 7, b = 7\nx *= 2;        // 14\nstd::cout << a << " " << b << " " << x;  // 5 7 14` },
        { h: 'Comparaison et logique', p: [
          'Les comparateurs `== != < > <= >=` et les opérateurs logiques `&&` (et), `||` (ou) et `!` (non) produisent un `bool`.',
          '`std::cout` affiche les `bool` comme `1` et `0`. Si tu préfères `true`/`false`, envoie d’abord `std::boolalpha`.',
          '`&&` et `||` sont évalués en court-circuit : dans `a && b`, si `a` est faux, `b` n’est même pas calculé. C’est pourquoi `v.size() > 0 && v[0] == 1` est sûr.' ],
          code: `int age = 20;\nbool a_un_billet = true;\nstd::cout << (age >= 18) << "\\n";                          // 1\nstd::cout << std::boolalpha << (age >= 18 && !a_un_billet);  // false` },
        { h: 'Priorité', p: [
          '`*`, `/` et `%` passent avant `+` et `-` ; les comparaisons viennent après l’arithmétique, et `&&` avant `||`.',
          'Attention à `std::cout << a < b;` : `<<` est prioritaire sur `<`, donc ça ne compile pas. Mets des parenthèses : `std::cout << (a < b);`.',
          'Dans le doute, utilise des parenthèses : le code est plus clair et sans surprise.' ] },
        { h: 'Exemple réel : année bissextile et monnaie', real: true, p: [
          'Un calendrier doit savoir si février a 29 jours : une année est bissextile si elle est divisible par 4 et pas par 100, sauf si elle est divisible par 400.',
          'Et une caisse enregistreuse convertit des centimes en euros et centimes avec `/` et `%`.' ],
          code: `#include <iostream>\n\nint main() {\n    int annee = 2024;\n    bool bissextile = (annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0;\n    std::cout << std::boolalpha << annee << " bissextile : " << bissextile << "\\n";  // 2024 bissextile : true\n\n    int centimes = 387;\n    std::cout << centimes / 100 << " euros et " << centimes % 100 << " centimes\\n";  // 3 euros et 87 centimes\n}` },
      ],
      x: [
        typ('Écris l’opérateur qui donne le reste de la division', `int reste = 17 ___ 5;  // 2`, '%', '`%` renvoie ce qui reste : 17 contient 3 fois 5 et il reste 2.'),
        out(`int x = 10;\nx -= 3;\nx *= 2;\nstd::cout << x;`, ['14', '7', '20', '17'], '10 - 3 = 7 et 7 * 2 = 14.'),
        mc('Dans `v.size() > 0 && v[0] == 1`, que se passe-t-il si le vecteur est vide ?', ['`v[0]` n’est jamais évalué', 'Le programme plante en lisant `v[0]`', 'Les deux parties sont évaluées quand même', 'Ça ne compile pas'], '`&&` fonctionne en court-circuit : si la première partie est fausse, la seconde n’est pas calculée.'),
        out(`int x = 5;\nint y = x++;\nstd::cout << x << " " << y;`, ['6 5', '6 6', '5 6', '5 5'], '`x++` renvoie l’ancienne valeur (5) puis incrémente `x` à 6.'),
        fill(`std::cout << std::___ << (2 < 3);  // affiche : true`, ['boolalpha', 'booltext', 'showbool', 'truefalse'], '`std::boolalpha` fait afficher les `bool` comme `true` et `false`.'),
        out(`bool a = true, b = false;\nstd::cout << (a && !b) << (a && b);`, ['10', '11', '01', 'truefalse'], '`a && !b` est vrai (1) et `a && b` est faux (0).'),
        out(`std::cout << 2 + 3 * 4 % 5;`, ['4', '0', '2', '14'], '`*` et `%` passent d’abord, de gauche à droite : 3 * 4 = 12, 12 % 5 = 2, et 2 + 2 = 4.'),
        // Défi final
        out(`int a = 1900, b = 2024;\nbool ba = (a % 4 == 0 && a % 100 != 0) || a % 400 == 0;\nbool bb = (b % 4 == 0 && b % 100 != 0) || b % 400 == 0;\nstd::cout << ba << bb << " " << 387 / 100 << ":" << 387 % 100;`, ['01 3:87', '11 3:87', '01 3.87:87', '10 3:87'], '1900 est divisible par 100 mais pas par 400, donc ce n’est pas une année bissextile (0) ; 2024 l’est (1). Ensuite, 387 / 100 = 3 et 387 % 100 = 87.'),
      ],
    },
    // ───────────── Jour 4 ─────────────
    {
      t: 'Chaînes',
      d: 'std::string : concaténer, size, substr, find et conversions.',
      guide: [
        { h: 'std::string', p: [
          '`std::string` (en-tête `<string>`) stocke du texte et gère sa mémoire tout seul : il peut grandir et rétrécir sans que tu fasses quoi que ce soit.',
          'On concatène avec `+` et `+=`, et on compare avec `==`, `<` et `>` (ordre alphabétique).',
          'Les textes entre guillemets comme `"Bonjour"` sont des littéraux C, pas des `std::string`. C’est pourquoi `"Bonjour" + " monde"` ne compile pas, alors que `std::string("Bonjour") + " monde"` fonctionne.' ],
          code: `#include <string>\n\nstd::string nom = "Ada";\nstd::string salut = "Bonjour, " + nom;  // string + littéral : correct\nsalut += "!";\nstd::cout << salut << "\\n";             // Bonjour, Ada!\nstd::cout << (nom == "Ada");           // 1` },
        { h: 'Les méthodes les plus utilisées', p: [
          '`size()` (ou `length()`) compte les caractères, `empty()` dit si la chaîne est vide et `s[i]` accède au caractère `i` en partant de 0.',
          '`substr(pos, n)` renvoie `n` caractères à partir de `pos` ; sans `n`, elle va jusqu’à la fin. `find(texte)` renvoie la position de la première occurrence, ou `std::string::npos` si elle est absente.',
          'Contrairement à Python ou Java, un `std::string` peut être modifié : `s[0] = \'X\';`.' ],
          code: `std::string s = "programmation";\nstd::cout << s.size() << "\\n";        // 13\nstd::cout << s.substr(3, 4) << "\\n";  // gram\nstd::cout << s.find("tion") << "\\n";  // 9\nif (s.find("z") == std::string::npos)\n    std::cout << "pas de z\\n";\ns[0] = 'P';\nstd::cout << s;                       // Programmation` },
        { h: 'Convertir entre nombres et texte', p: [
          '`std::to_string(42)` transforme un nombre en texte. `std::stoi("42")` transforme du texte en `int` et `std::stod("3.5")` en `double`.',
          'Si le texte n’est pas un nombre, `stoi` lance une exception `std::invalid_argument`. Tu le verras le jour 23.' ],
          code: `std::string age = "29";\nint n = std::stoi(age) + 1;\nstd::string msg = "Tu auras " + std::to_string(n) + " ans";\nstd::cout << msg << "\\n";                 // Tu auras 30 ans\nstd::cout << std::stod("2.5") * 2;       // 5` },
        { h: 'Lire des lignes entières', p: [
          '`std::cin >> s` ne lit que jusqu’au premier espace. Pour lire une phrase entière, utilise `std::getline(std::cin, s)`.',
          'Si tu mélanges `cin >>` et `getline`, le saut de ligne en attente fait lire une ligne vide à `getline`. Appelle `std::cin.ignore()` avant.' ],
          code: `std::string ville;\nstd::cout << "Où habites-tu ? ";\nstd::getline(std::cin, ville);   // accepte "Saint-Malo"\nstd::cout << "Tu habites à " << ville;` },
        { h: 'Exemple réel : découper un e-mail', real: true, p: [
          'Un formulaire d’inscription enregistre séparément l’utilisateur et le domaine d’un e-mail. Avec `find`, tu repères l’arobase et avec `substr`, tu découpes les deux parties.' ],
          code: `#include <iostream>\n#include <string>\n\nint main() {\n    std::string email = "lucie.martin@entreprise.fr";\n    auto arobase = email.find('@');\n    if (arobase == std::string::npos) {\n        std::cout << "E-mail invalide\\n";\n        return 1;\n    }\n    std::cout << "Utilisateur : " << email.substr(0, arobase) << "\\n";  // lucie.martin\n    std::cout << "Domaine : " << email.substr(arobase + 1) << "\\n";    // entreprise.fr\n}` },
      ],
      x: [
        out(`std::string s = "C++";\nstd::cout << s.size();`, ['3', '2', '4', 'Erreur'], '`size()` compte les caractères : C, + et +.'),
        out(`std::string a = "Bonjour", b = "Monde";\nstd::cout << a + " " + b;`, ['Bonjour Monde', 'BonjourMonde', 'Bonjour + Monde', 'Erreur'], '`+` concatène les chaînes, et l’espace va entre elles.'),
        fill(`int n = std::___("123");`, ['stoi', 'to_int', 'parseInt', 'toInt'], '`stoi` vient de « string to int ».'),
        out(`std::string s = "programmation";\nstd::cout << s.substr(3, 4);`, ['gram', 'gra', 'rogr', 'gramm'], '`substr(pos, n)` prend 4 caractères à partir de la position 3 (le premier g).'),
        out(`std::string s = "banana";\nstd::cout << s.find("na");`, ['2', '4', '1', '3'], '`find` renvoie la position de la première occurrence : b(0) a(1) n(2).'),
        mc('Que se passe-t-il avec `std::string s = "Bonjour" + " monde";` ?', ['Ça ne compile pas : ce sont deux littéraux C, pas des std::string', 'Ça stocke "Bonjour monde"', 'Ça stocke seulement "Bonjour"', 'Une exception est lancée à l’exécution'], 'Au moins un des opérandes de `+` doit être un `std::string`.'),
        out(`std::string s = "zoe";\ns += std::to_string(7 * 3);\nstd::cout << s << s.size();`, ['zoe215', 'zoe213', 'zoe7*35', 'zoe2121'], '`to_string(21)` ajoute "21" et le texte "zoe21" a 5 caractères.'),
        // Défi final
        out(`std::string email = "eva.diaz@mail.fr";\nauto pos = email.find('@');\nstd::string user = email.substr(0, pos);\nuser[0] = 'E';\nstd::cout << user << " " << email.size() - pos - 1;`, ['Eva.diaz 7', 'eva.diaz 7', 'Eva.diaz 8', 'Eva.diaz@ 7'], 'L’arobase est en position 8 : l’utilisateur correspond aux 8 premiers caractères et on modifie son initiale. L’e-mail fait 16 caractères, donc le domaine en a 16 - 8 - 1 = 7.'),
      ],
    },
    // ───────────── Jour 5 ─────────────
    {
      t: 'Tableaux',
      d: 'Tableaux classiques, std::array, limites et matrices.',
      guide: [
        { h: 'Tableaux de taille fixe', p: [
          'Un tableau stocke plusieurs valeurs du même type à la suite en mémoire : `int notes[3] = {7, 9, 5};`. Sa taille est fixée à la compilation et ne peut pas changer.',
          'Les indices vont de 0 à n-1. Si tu donnes moins de valeurs que la taille, le reste est rempli de zéros : `int a[5] = {1, 2};` donne `{1, 2, 0, 0, 0}`.' ],
          code: `int notes[3] = {7, 9, 5};\nnotes[1] = 10;\nstd::cout << notes[0] + notes[1] << "\\n";  // 17\nint zeros[4] = {};                          // {0, 0, 0, 0}` },
        { h: 'C++ ne vérifie pas les limites', p: [
          'Lire ou écrire `notes[3]` dans un tableau de 3 éléments est un comportement indéfini : le programme peut donner des valeurs aléatoires, planter ou sembler fonctionner.',
          'C’est l’une des sources de failles de sécurité les plus connues. C’est pourquoi le C++ moderne préfère `std::array` ou `std::vector`, qui proposent `at()` avec vérification.' ] },
        { h: 'std::array', p: [
          '`std::array<int, 3>` (en-tête `<array>`) est un tableau de taille fixe avec des avantages : il connaît sa taille grâce à `size()`, il se copie avec `=` et `at(i)` lance une exception si l’indice n’existe pas.',
          'Avec la boucle range-for `for (int x : arr)`, tu le parcours sans te soucier des indices.' ],
          code: `#include <array>\n\nstd::array<int, 4> v = {3, 1, 4, 1};\nfor (int x : v) std::cout << x << " ";  // 3 1 4 1\nstd::cout << "\\n" << v.size();          // 4\n// v.at(10);  // lance std::out_of_range` },
        { h: 'Matrices', p: [
          'Un tableau de tableaux forme une grille : `int m[2][3]` a 2 lignes et 3 colonnes. `m[ligne][colonne]` accède à une case.',
          'Pour la parcourir, on imbrique deux boucles : l’extérieure parcourt les lignes et l’intérieure les colonnes.' ],
          code: `int m[2][3] = {{1, 2, 3},\n               {4, 5, 6}};\nstd::cout << m[1][2] << "\\n";  // 6\nint somme = 0;\nfor (auto& ligne : m)\n    for (int x : ligne) somme += x;\nstd::cout << somme;            // 21` },
        { h: 'Exemple réel : températures de la semaine', real: true, p: [
          'Une appli météo stocke les maximales des 7 jours et affiche la moyenne et le jour le plus chaud. Comme une semaine a toujours 7 jours, `std::array` est idéal.' ],
          code: `#include <array>\n#include <iostream>\n\nint main() {\n    std::array<double, 7> temps = {18.5, 21.0, 19.5, 23.0, 25.5, 24.0, 20.5};\n    double somme = 0, maximum = temps[0];\n    for (double t : temps) {\n        somme += t;\n        if (t > maximum) maximum = t;\n    }\n    std::cout << "Moyenne : " << somme / temps.size() << "\\n";  // Moyenne : 21.7143\n    std::cout << "Maximum : " << maximum << "\\n";              // Maximum : 25.5\n}` },
      ],
      x: [
        out(`int a[4] = {5, 6, 7, 8};\nstd::cout << a[2];`, ['7', '6', '8', 'Erreur'], 'Les indices commencent à 0 : l’indice 2 est le troisième élément.'),
        out(`int a[5] = {1, 2};\nstd::cout << a[3];`, ['0', '2', 'Valeur aléatoire', 'Erreur'], 'Les éléments manquants à l’initialisation sont remplis de zéros.'),
        out(`int a[] = {3, 1, 2};\nint s = 0;\nfor (int x : a) s += x;\nstd::cout << s;`, ['6', '3', '312', 'Erreur'], 'La boucle range-for additionne 3 + 1 + 2.'),
        mc('Que se passe-t-il si on lit `a[10]` dans un tableau classique de 5 éléments ?', ['Comportement indéfini : C++ ne vérifie pas les limites', 'Une exception est lancée', 'Ça renvoie 0', 'Ça ne compile pas'], 'Avec `std::array` ou `std::vector`, tu peux utiliser `at()`, qui vérifie.'),
        fill(`std::array<int, 3> a = {1, 2, 3};\nstd::cout << a.___();  // 3`, ['size', 'length', 'count', 'len'], '`size()` renvoie le nombre d’éléments de n’importe quel conteneur standard.'),
        out(`int m[2][2] = {{1, 2}, {3, 4}};\nstd::cout << m[1][0];`, ['3', '2', '4', '1'], 'Ligne 1 (la deuxième) et colonne 0 (la première) : le 3.'),
        out(`int a[] = {4, 8, 15, 16};\nstd::cout << sizeof(a) / sizeof(a[0]);`, ['4', '16', '1', '8'], '`sizeof(a)` est la taille de tout le tableau en octets et `sizeof(a[0])` celle d’un élément : le quotient est le nombre d’éléments.'),
        // Défi final
        out(`std::array<int, 5> v = {3, 8, 1, 9, 4};\nint mx = v[0], pos = 0;\nfor (int i = 1; i < 5; i++)\n    if (v[i] > mx) { mx = v[i]; pos = i; }\nstd::cout << mx << " à " << pos;`, ['9 à 3', '9 à 4', '8 à 1', '9 à 2'], 'La boucle garde la plus grande valeur vue et son indice. Le 9 est à l’indice 3 car on compte à partir de 0.'),
      ],
    },
    // ───────────── Jour 6 ─────────────
    {
      t: 'Vecteurs',
      d: 'std::vector : push_back, pop_back, insert, erase, at et parcours.',
      guide: [
        { h: 'Un tableau qui grandit', p: [
          '`std::vector` (en-tête `<vector>`) est le conteneur le plus utilisé en C++ : un tableau dynamique qui grandit quand tu ajoutes des éléments et libère sa mémoire tout seul.',
          'Si tu ne sais pas combien d’éléments tu auras, utilise `std::vector`. C’est le choix par défaut pour les listes de données.' ],
          code: `#include <vector>\n\nstd::vector<int> v;          // vide\nstd::vector<int> w = {4, 8};  // avec des valeurs\nstd::vector<int> z(3, 7);    // {7, 7, 7}\nv.push_back(15);\nstd::cout << v.size() << w.size() << z.size();  // 123` },
        { h: 'Ajouter et retirer', p: [
          '`push_back(x)` ajoute à la fin et `pop_back()` retire le dernier. `front()` et `back()` donnent le premier et le dernier.',
          '`insert(v.begin() + i, x)` insère à la position `i` et `erase(v.begin() + i)` la supprime. Les deux décalent les éléments suivants, donc ils sont plus lents sur de très grands vecteurs.',
          '`clear()` vide le vecteur et `empty()` dit s’il est vide.' ],
          code: `std::vector<int> v = {10, 20, 30};\nv.push_back(40);            // 10 20 30 40\nv.insert(v.begin(), 5);     // 5 10 20 30 40\nv.erase(v.begin() + 2);     // 5 10 30 40\nv.pop_back();               // 5 10 30\nstd::cout << v.front() << " " << v.back();  // 5 30` },
        { h: '[] ou at()', p: [
          '`v[i]` est rapide mais ne vérifie rien : un indice hors limites est un comportement indéfini.',
          '`v.at(i)` vérifie l’indice et lance `std::out_of_range` s’il n’existe pas. Utilise-le quand l’indice vient de l’extérieur (de l’utilisateur, d’un fichier…).' ] },
        { h: 'Parcourir un vecteur', p: [
          '`for (int x : v)` parcourt des copies des éléments. Pour les modifier, utilise une référence : `for (int& x : v)`.',
          'Avec de gros objets (comme `std::string`), utilise `for (const auto& x : v)` : pas de copie, et on voit clairement que tu ne fais que lire.' ],
          code: `std::vector<int> prix = {10, 20, 30};\nfor (int& p : prix) p = p * 2;        // modifie l’original\nfor (const auto& p : prix)\n    std::cout << p << " ";              // 20 40 60` },
        { h: 'Exemple réel : le panier d’achat', real: true, p: [
          'Une boutique en ligne garde les prix du panier dans un vecteur : le client ajoute des produits avec `push_back` et le total se calcule en parcourant le vecteur.' ],
          code: `#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<double> panier = {12.99, 4.50, 7.25};\n    panier.push_back(3.10);   // ajoute un autre produit\n    double total = 0;\n    for (double prix : panier) total += prix;\n    std::cout << panier.size() << " articles, total " << total << " euros\\n";\n    // 4 articles, total 27.84 euros\n}` },
      ],
      x: [
        out(`std::vector<int> v = {1, 2, 3};\nv.push_back(4);\nstd::cout << v.size();`, ['4', '3', '5', 'Erreur'], '`push_back` ajoute un élément à la fin.'),
        fill(`std::vector<std::string> noms;\nnoms.___("Léa");`, ['push_back', 'add', 'append', 'push'], 'En C++, on ajoute à la fin d’un vecteur avec `push_back`.'),
        out(`std::vector<int> v = {2, 4, 6};\nint s = 0;\nfor (int n : v) s += n;\nstd::cout << s;`, ['12', '246', '6', '3'], 'La boucle range-for parcourt chaque élément : 2 + 4 + 6 = 12.'),
        out(`std::vector<int> v = {1, 2, 3};\nv.pop_back();\nstd::cout << v.back();`, ['2', '3', '1', 'Erreur'], '`pop_back` retire le 3 et `back` renvoie le nouveau dernier élément.'),
        out(`std::vector<int> v(3, 7);\nstd::cout << v[0] + v[2];`, ['14', '7', '10', '21'], '`v(3, 7)` crée 3 éléments valant 7, donc 7 + 7 = 14.'),
        mc('Quelle est la différence entre `v[i]` et `v.at(i)` ?', ['at() vérifie l’indice et lance une exception s’il n’existe pas', 'Aucune', '[] est plus sûr', 'at() renvoie une copie'], '`[]` ne vérifie rien et est un peu plus rapide ; `at()` lance `std::out_of_range`.'),
        out(`std::vector<int> v = {10, 20, 30, 40};\nv.erase(v.begin() + 1);\nstd::cout << v[1] << " " << v.size();`, ['30 3', '20 3', '30 4', '40 3'], '`erase` supprime l’indice 1 (le 20) et les suivants se décalent : il reste {10, 30, 40}.'),
        // Défi final
        out(`std::vector<int> v = {5, 3, 8};\nfor (auto& x : v) x *= 2;\nv.insert(v.begin(), 1);\nv.pop_back();\nstd::cout << v.front() + v.back() << " " << v.size();`, ['7 3', '17 3', '1 3', '7 4'], 'Avec `auto&`, les originaux sont doublés : {10, 6, 16}. Après l’insertion du 1 et le retrait du dernier, il reste {1, 10, 6} : 1 + 6 = 7 et taille 3.'),
      ],
    },
    // ───────────── Jour 7 ─────────────
    {
      t: 'Ensembles',
      d: 'std::set et std::unordered_set : éléments uniques.',
      guide: [
        { h: 'Des éléments uniques et triés', p: [
          '`std::set` (en-tête `<set>`) stocke chaque valeur une seule fois et les garde triées du plus petit au plus grand. Si tu insères un doublon, il est simplement ignoré.',
          'C’est parfait pour des questions comme « l’ai-je déjà vu ? » ou « combien de valeurs différentes y a-t-il ? ».' ],
          code: `#include <set>\n\nstd::set<int> s = {5, 1, 5, 3};\ns.insert(2);\ns.insert(3);               // doublon : ne fait rien\nfor (int x : s) std::cout << x << " ";  // 1 2 3 5\nstd::cout << "\\n" << s.size();          // 4` },
        { h: 'Chercher et supprimer', p: [
          '`count(x)` renvoie 1 si `x` est présent et 0 sinon. En C++20, tu as `contains(x)`, qui renvoie un `bool` et se lit mieux.',
          '`erase(x)` supprime la valeur. `insert` renvoie une paire dont `.second` vaut `true` si l’élément était nouveau.',
          'Chercher dans un `std::set` est très rapide (logarithmique), bien plus que de parcourir un grand vecteur élément par élément.' ],
          code: `std::set<std::string> etiquettes = {"c++", "stl"};\nstd::cout << etiquettes.count("stl") << "\\n";    // 1\nstd::cout << etiquettes.contains("go") << "\\n";  // 0 (C++20)\nauto r = etiquettes.insert("c++");\nstd::cout << r.second << "\\n";                   // 0 : il existait déjà\netiquettes.erase("stl");` },
        { h: 'std::unordered_set', p: [
          '`std::unordered_set` (en-tête `<unordered_set>`) fait la même chose avec une table de hachage : chercher et insérer est encore plus rapide en moyenne, mais aucun ordre n’est conservé.',
          'Règle pratique : si tu dois parcourir les valeurs dans l’ordre, utilise `std::set` ; si tu demandes seulement si quelque chose existe, `std::unordered_set`.' ] },
        { h: 'Créer un set à partir d’un vecteur', p: [
          'Tu peux construire un set à partir de n’importe quelle plage : `std::set<int> s(v.begin(), v.end());`. C’est le moyen le plus simple de supprimer les doublons.',
          'Tu peux aussi ajouter toute une plage à un set existant avec `s.insert(autre.begin(), autre.end())`.' ],
          code: `std::vector<int> v = {3, 1, 3, 2, 1};\nstd::set<int> uniques(v.begin(), v.end());\nstd::cout << uniques.size();  // 3` },
        { h: 'Exemple réel : visiteurs uniques d’un site', real: true, p: [
          'Le journal d’un site web note l’utilisateur à chaque visite. Le rapport quotidien veut savoir combien de personnes différentes sont venues, pas combien de visites il y a eu.' ],
          code: `#include <iostream>\n#include <set>\n#include <string>\n#include <vector>\n\nint main() {\n    std::vector<std::string> visites = {"anna", "hugo", "anna", "marie", "hugo", "anna"};\n    std::set<std::string> uniques(visites.begin(), visites.end());\n    std::cout << visites.size() << " visites, " << uniques.size() << " visiteurs\\n";\n    // 6 visites, 3 visiteurs\n    for (const auto& u : uniques) std::cout << u << " ";  // anna hugo marie\n}` },
      ],
      x: [
        out(`std::set<int> s = {3, 1, 3, 2};\nstd::cout << s.size();`, ['3', '4', '2', 'Erreur'], 'Le 3 répété est ignoré : il reste 1, 2 et 3.'),
        fill(`std::set<int> s;\ns.___(7);`, ['insert', 'push_back', 'add', 'append'], 'Un set n’a pas de « fin » ; on ajoute avec `insert`.'),
        out(`std::set<int> s = {5, 1, 4};\nfor (int x : s) std::cout << x;`, ['145', '514', '541', '154'], '`std::set` garde ses éléments triés du plus petit au plus grand.'),
        out(`std::set<std::string> s = {"b", "a"};\nstd::cout << s.count("a");`, ['1', '0', '2', 'a'], '`count` renvoie 1 si l’élément existe et 0 sinon.'),
        out(`std::set<int> s = {1, 2, 3};\ns.erase(2);\nstd::cout << s.size();`, ['2', '3', '1', '0'], '`erase` supprime le 2 et il reste deux éléments.'),
        mc('Quel conteneur stocke des valeurs uniques sans ordre, avec une recherche très rapide ?', ['std::unordered_set', 'std::set', 'std::vector', 'std::array'], 'Il utilise une table de hachage en interne, donc il ne garde aucun ordre.'),
        out(`std::set<int> s = {1, 2};\nauto r = s.insert(2);\nstd::cout << r.second << s.size();`, ['02', '13', '12', '03'], 'Le 2 existait déjà : `insert` renvoie `second == false` (0) et la taille reste à 2.'),
        // Défi final
        out(`std::set<int> a = {1, 3, 5, 7};\nstd::set<int> b = {3, 4, 5};\nint communs = 0;\nfor (int x : b) if (a.count(x)) communs++;\na.insert(b.begin(), b.end());\nstd::cout << communs << " " << a.size();`, ['2 5', '2 7', '3 5', '1 5'], 'Les valeurs communes sont 3 et 5. En insérant `b` dans `a`, seul le 4 entre : {1, 3, 4, 5, 7}, cinq éléments.'),
      ],
    },
    // ───────────── Jour 8 ─────────────
    {
      t: 'Maps',
      d: 'std::map et std::unordered_map : paires clé-valeur.',
      guide: [
        { h: 'Des dictionnaires en C++', p: [
          '`std::map<Clé, Valeur>` (en-tête `<map>`) associe des clés uniques à des valeurs, comme un répertoire qui relie des noms à des numéros.',
          'Les clés restent triées. `m[clé] = valeur` ajoute la paire ou change la valeur si la clé existait déjà.' ],
          code: `#include <map>\n\nstd::map<std::string, int> ages;\nages["Léa"] = 31;\nages["Hugo"] = 28;\nages["Léa"] = 32;           // remplace la valeur\nstd::cout << ages["Léa"] << " " << ages.size();  // 32 2` },
        { h: 'Le piège de []', p: [
          'Lire avec `m["clé"]` une clé qui n’existe pas la crée avec une valeur par défaut (0 pour les nombres, texte vide pour les chaînes). C’est ainsi que s’invitent des clés dont personne ne voulait.',
          'Pour lire sans créer, utilise `m.at("clé")`, qui lance `std::out_of_range` si elle n’existe pas, ou vérifie d’abord avec `count`, `contains` (C++20) ou `find`.' ],
          code: `std::map<std::string, int> stock = {{"pain", 4}};\nif (stock.contains("lait"))           // C++20\n    std::cout << stock.at("lait");\nauto it = stock.find("pain");\nif (it != stock.end())\n    std::cout << it->first << ": " << it->second;  // pain: 4` },
        { h: 'Parcourir une map', p: [
          'Chaque élément est une paire avec `.first` (clé) et `.second` (valeur). Depuis C++17, tu peux la décomposer avec `for (const auto& [cle, valeur] : m)`.',
          'Le parcours se fait dans l’ordre des clés. `m.begin()->first` est la plus petite clé.' ],
          code: `std::map<std::string, double> prix = {{"poire", 2.1}, {"kiwi", 3.4}, {"raisin", 2.8}};\nfor (const auto& [fruit, p] : prix)\n    std::cout << fruit << " " << p << "\\n";\n// kiwi 3.4\n// poire 2.1\n// raisin 2.8` },
        { h: 'std::unordered_map', p: [
          '`std::unordered_map` (en-tête `<unordered_map>`) a la même interface mais utilise une table de hachage : plus rapide en moyenne et sans ordre.',
          'Utilise `std::map` quand tu veux parcourir les clés dans l’ordre et `std::unordered_map` quand tu cherches seulement par clé.' ] },
        { h: 'Exemple réel : compter les mots d’un texte', real: true, p: [
          'Un analyseur d’avis veut savoir quels mots reviennent le plus. `std::istringstream` (en-tête `<sstream>`) découpe le texte sur les espaces, et `frequence[mot]++` profite du fait que `[]` crée la clé avec 0 la première fois.' ],
          code: `#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\n\nint main() {\n    std::string texte = "le chat et le chien et le poisson";\n    std::istringstream in(texte);\n    std::map<std::string, int> frequence;\n    std::string mot;\n    while (in >> mot) frequence[mot]++;\n    for (const auto& [m, n] : frequence)\n        std::cout << m << ": " << n << "\\n";\n    // chat: 1, chien: 1, et: 2, le: 3, poisson: 1 (un par ligne)\n}` },
      ],
      x: [
        out(`std::map<std::string, int> m;\nm["a"] = 1;\nm["a"] = 5;\nstd::cout << m["a"];`, ['5', '1', '6', 'Erreur'], 'Les clés sont uniques : la seconde affectation remplace la valeur.'),
        out(`std::map<int, char> m = {{2, 'b'}, {1, 'a'}};\nfor (auto& [k, v] : m) std::cout << v;`, ['ab', 'ba', '12', 'a'], '`std::map` parcourt ses éléments dans l’ordre des clés : 1 puis 2.'),
        fill(`if (m.___("cle")) {\n    std::cout << "existe";\n}`, ['count', 'has', 'exists', 'includes'], '`count` renvoie 1 si la clé existe. En C++20, il existe aussi `contains`.'),
        out(`std::map<std::string, int> m;\nstd::cout << m["x"] << m.size();`, ['01', '00', 'Erreur', 'x1'], 'Lire `m["x"]` crée la clé avec la valeur 0, donc la taille passe à 1.'),
        mc('Que fait `m.at("z")` si la clé n’existe pas ?', ['Il lance std::out_of_range', 'Il crée la clé avec 0', 'Il renvoie 0', 'Ça ne compile pas'], '`at` est la façon sûre de lire sans créer de clés.'),
        mc('Pour compter des mots sans besoin d’ordre et le plus vite possible, quel conteneur utiliserais-tu ?', ['std::unordered_map', 'std::map', 'std::vector', 'std::set'], 'Ses recherches prennent un temps constant en moyenne.'),
        out(`std::map<char, int> c;\nfor (char ch : std::string("data bat"))\n    if (ch != ' ') c[ch]++;\nstd::cout << c['a'] << c['t'] << c.size();`, ['324', '314', '325', '323'], '"a" apparaît trois fois, "t" deux fois, et "d" et "b" une fois : a=3, t=2 et il y a 4 clés différentes.'),
        // Défi final
        out(`std::map<std::string, int> stock = {{"pain", 3}, {"lait", 0}};\nstock["pain"] -= 1;\nstock["oeufs"] += 12;\nint total = 0;\nfor (const auto& [p, n] : stock) total += n;\nstd::cout << stock.size() << " " << total << " " << stock.begin()->first;`, ['3 14 lait', '2 14 lait', '3 15 lait', '3 14 oeufs'], '`stock["oeufs"]` crée la clé avec 0 et lui ajoute 12. Total : 2 + 0 + 12 = 14. La plus petite clé dans l’ordre alphabétique est "lait".'),
      ],
    },
    // ───────────── Jour 9 ─────────────
    {
      t: 'Conditions',
      d: 'if, else if, switch, l’opérateur ternaire et FizzBuzz.',
      guide: [
        { h: 'if, else if et else', p: [
          '`if (condition)` exécute un bloc seulement si la condition est vraie. `else if` enchaîne d’autres cas et `else` récupère tout le reste.',
          'Mets toujours des accolades `{ }`, même si le bloc n’a qu’une ligne : ça évite des erreurs quand tu ajoutes des lignes plus tard.' ],
          code: `int note = 7;\nif (note >= 9) {\n    std::cout << "Très bien";\n} else if (note >= 7) {\n    std::cout << "Bien";        // celui-ci s’exécute\n} else if (note >= 5) {\n    std::cout << "Passable";\n} else {\n    std::cout << "Insuffisant";\n}` },
        { h: 'Vrai, faux et l’erreur du =', p: [
          'En C++, tout nombre différent de 0 compte comme vrai et 0 compte comme faux.',
          'Erreur classique : `if (x = 5)` affecte 5 à `x` (au lieu de comparer) et c’est toujours vrai. Pour comparer, on utilise `==`. Compile avec `-Wall` et le compilateur te préviendra.',
          'Depuis C++17, tu peux déclarer une variable dans le `if` : `if (auto pos = s.find(\'@\'); pos != std::string::npos)`. Elle n’existe alors que là où elle sert.' ] },
        { h: 'switch', p: [
          '`switch` compare un entier, un `char` ou un `enum` avec plusieurs `case`. Il ne fonctionne pas avec `std::string`.',
          'Chaque `case` doit se terminer par `break` ; sinon, l’exécution « tombe » dans le cas suivant. On le fait parfois exprès pour regrouper des cas.',
          '`default` s’exécute quand aucun cas ne correspond.' ],
          code: `char option = 'b';\nswitch (option) {\n    case 'a':\n        std::cout << "Nouvelle partie";\n        break;\n    case 'b':\n    case 'c':                   // b et c font la même chose\n        std::cout << "Charger une partie";\n        break;\n    default:\n        std::cout << "Option invalide";\n}` },
        { h: 'L’opérateur ternaire', p: [
          '`condition ? valeur_si_vrai : valeur_si_faux` choisit une valeur à l’intérieur d’une expression. Il est idéal pour les cas courts.',
          'On peut les imbriquer, mais au-delà de deux niveaux, c’est difficile à lire ; dans ce cas, reviens au `if`.' ],
          code: `int age = 16;\nstd::string type = age >= 18 ? "adulte" : "mineur";\nstd::cout << type;  // mineur` },
        { h: 'Exemple réel : frais de livraison', real: true, p: [
          'Une boutique facture la livraison par tranche de poids et ajoute 50 % si c’est urgent. Les `else if` vérifient les tranches dans l’ordre et le ternaire applique le supplément.' ],
          code: `#include <iostream>\n\ndouble frais_livraison(double kg, bool urgent) {\n    double prix;\n    if (kg <= 1) prix = 4.5;\n    else if (kg <= 5) prix = 7.9;\n    else prix = 7.9 + (kg - 5) * 1.2;   // 1,20 € par kilo supplémentaire\n    return urgent ? prix * 1.5 : prix;\n}\n\nint main() {\n    std::cout << frais_livraison(3, false) << "\\n";  // 7.9\n    std::cout << frais_livraison(8, true) << "\\n";   // 17.25\n}` },
      ],
      x: [
        out(`int x = 4;\nif (x % 2 == 0)\n    std::cout << "pair";\nelse\n    std::cout << "impair";`, ['pair', 'impair', 'pairimpair', '0'], '4 divisé par 2 donne un reste de 0, donc la condition est remplie.'),
        fill(`if (x > 0) {\n    std::cout << "positif";\n} ___ if (x < 0) {\n    std::cout << "négatif";\n}`, ['else', 'elif', 'elseif', 'or'], 'C++ enchaîne les conditions avec `else if`, en deux mots.'),
        out(`int en_attente = 0;\nif (!en_attente) std::cout << "à jour";`, ['à jour', '0', 'Rien', 'Erreur'], '0 équivaut à `false`, et `!false` vaut `true`.'),
        mc('Quel type de valeurs un `switch` accepte-t-il en C++ ?', ['Entiers, char et enums', 'Chaînes', 'Doubles', 'N’importe quel objet'], 'Pour comparer des `std::string`, utilise une suite de `if`/`else if`.'),
        out(`int x = 0;\nif (x = 5) std::cout << "oui";\nelse std::cout << "non";`, ['oui', 'non', 'Erreur de compilation'], '`x = 5` affecte (il ne compare pas) et le résultat, 5, compte comme vrai.'),
        out(`int d = 2;\nswitch (d) {\n    case 1: std::cout << "L";\n    case 2: std::cout << "M";\n    case 3: std::cout << "X"; break;\n    default: std::cout << "?";\n}`, ['MX', 'M', 'MX?', 'LMX'], 'On entre dans `case 2` et, comme il n’y a pas de `break`, on continue jusqu’au `break` de `case 3`.'),
        out(`int note = 7;\nstd::cout << (note >= 9 ? "A" : note >= 7 ? "B" : "C");`, ['B', 'A', 'C', 'AB'], 'La première condition échoue, donc le second ternaire est évalué : 7 >= 7 est vrai.'),
        // Défi final
        out(`int n = 30;\nstd::string r;\nif (n % 3 == 0) r += "Fizz";\nif (n % 5 == 0) r += "Buzz";\nif (r.empty()) r = std::to_string(n);\nswitch (n % 4) {\n    case 2: r += "!";\n    case 3: r += "?"; break;\n    default: r += ".";\n}\nstd::cout << r;`, ['FizzBuzz!?', 'FizzBuzz!', 'Fizz!?', 'FizzBuzz.'], '30 est multiple de 3 et de 5, donc les deux `if` s’exécutent. 30 % 4 = 2 : on ajoute "!" et, sans `break`, aussi "?".'),
      ],
    },
    // ───────────── Jour 10 ─────────────
    {
      t: 'Boucles',
      d: 'for, while, do-while, range-for, break et continue.',
      guide: [
        { h: 'La boucle for', p: [
          '`for (début; condition; pas)` est idéale quand tu sais combien de tours faire. La variable déclarée au début n’existe qu’à l’intérieur de la boucle.',
          'Erreur typique : utiliser `<=` au lieu de `<` en parcourant des indices et dépasser le conteneur d’une position.' ],
          code: `for (int i = 1; i <= 5; i++) {\n    std::cout << i << " ";   // 1 2 3 4 5\n}\nfor (int i = 10; i > 0; i -= 3) {\n    std::cout << i << " ";   // 10 7 4 1\n}` },
        { h: 'while et do-while', p: [
          '`while (condition)` répète tant que la condition est vraie. Utilise-la quand tu ne sais pas à l’avance combien de tours il y aura.',
          '`do { ... } while (condition);` vérifie à la fin, donc le bloc s’exécute au moins une fois. C’est très pratique pour les menus et pour redemander une donnée jusqu’à ce qu’elle soit valide.' ],
          code: `int note;\ndo {\n    std::cout << "Note (0-10) : ";\n    std::cin >> note;\n} while (note < 0 || note > 10);   // recommence tant qu’elle n’est pas valide` },
        { h: 'La boucle range-for', p: [
          '`for (type x : conteneur)` parcourt tous les éléments d’un vector, array, set, map ou string sans indices.',
          'Rappel : `for (auto x : v)` travaille sur des copies ; `for (auto& x : v)` modifie les originaux et `for (const auto& x : v)` lit sans copier.' ],
          code: `std::string mot = "bonjour";\nint voyelles = 0;\nfor (char c : mot)\n    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') voyelles++;\nstd::cout << voyelles;  // 3` },
        { h: 'break, continue et boucles imbriquées', p: [
          '`break` sort immédiatement de la boucle et `continue` passe au tour suivant.',
          'Avec des boucles imbriquées, `break` ne sort que de la boucle la plus intérieure. Pour sortir de toutes, place le code dans une fonction et utilise `return`.' ],
          code: `for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) continue;   // saute les pairs\n    if (i > 7) break;           // s’arrête à 9\n    std::cout << i << " ";       // 1 3 5 7\n}` },
        { h: 'Exemple réel : combien de temps pour faire grossir ton épargne ?', real: true, p: [
          'Tu places 1 000 € sur un compte à 5 % par an et tu veux savoir combien d’années il faudra pour atteindre 1 500 €. Tu ne sais pas combien de tours il y aura, donc `while` est l’outil adapté.' ],
          code: `#include <iostream>\n\nint main() {\n    double solde = 1000;\n    int annees = 0;\n    while (solde < 1500) {\n        solde *= 1.05;   // intérêts de l’année\n        annees++;\n    }\n    std::cout << "Années : " << annees << ", solde : " << solde << "\\n";\n    // Années : 9, solde : 1551.33\n}` },
      ],
      x: [
        out(`for (int i = 0; i < 4; i += 2)\n    std::cout << i;`, ['02', '0123', '024', '24'], '`i` vaut 0 puis 2 ; quand il atteint 4, la condition échoue.'),
        typ('Complète la condition pour afficher 1 2 3 4 5', `for (int i = 1; i ___ 5; i++)\n    std::cout << i << " ";`, '<=', 'Avec `<=`, la boucle inclut le 5 ; avec `<`, elle s’arrêterait à 4.'),
        fill(`std::vector<int> v = {1, 2, 3};\nfor (int x ___ v) std::cout << x;`, [':', 'in', 'of', '->'], 'La boucle range-for utilise deux-points : `for (type x : conteneur)`.'),
        out(`int n = 0;\ndo {\n    n++;\n} while (n < 0);\nstd::cout << n;`, ['1', '0', 'Boucle infinie', '-1'], '`do-while` exécute le bloc une fois avant de vérifier la condition.'),
        mc('Avec deux boucles imbriquées, de quoi sort un `break` écrit dans la boucle intérieure ?', ['Seulement de la boucle intérieure', 'Des deux boucles', 'De la boucle extérieure', 'De toute la fonction'], '`break` ne sort que de la boucle la plus proche. Pour sortir de toutes, place le code dans une fonction et utilise `return`.'),
        out(`for (int i = 0; i < 5; i++) {\n    if (i % 2 == 0) continue;\n    std::cout << i;\n}`, ['13', '024', '01234', '1'], '`continue` saute les pairs, donc seuls 1 et 3 sont affichés.'),
        out(`int c = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = i; j < 3; j++) c++;\nstd::cout << c;`, ['6', '9', '3', '5'], 'La boucle intérieure fait 3, 2 puis 1 tours : 3 + 2 + 1 = 6.'),
        // Défi final
        out(`int n = 1234, somme = 0, chiffres = 0;\nwhile (n > 0) {\n    somme += n % 10;\n    n /= 10;\n    chiffres++;\n}\nstd::cout << somme << " " << chiffres;`, ['10 4', '4 10', '10 3', '1234 4'], '`n % 10` extrait le dernier chiffre et `n /= 10` le retire. On additionne 4 + 3 + 2 + 1 = 10 en 4 tours.'),
      ],
    },
    // ───────────── Jour 11 ─────────────
    {
      t: 'Fonctions',
      d: 'Déclaration, prototypes, valeurs par défaut, surcharge et récursivité.',
      guide: [
        { h: 'Déclarer et appeler des fonctions', p: [
          'Une fonction regroupe du code sous un nom pour le réutiliser : `type_retour nom(paramètres) { ... }`.',
          '`return` renvoie le résultat et termine la fonction. Si elle ne renvoie rien, le type de retour est `void`.',
          'Chaque paramètre a son type : `int additionner(int a, int b)`. Le compilateur vérifie que tu appelles la fonction avec les bons types.' ],
          code: `#include <iostream>\n#include <string>\n\nint carre(int n) {\n    return n * n;\n}\n\nvoid saluer(std::string nom) {\n    std::cout << "Bonjour, " << nom << "\\n";\n}\n\nint main() {\n    std::cout << carre(4) << "\\n";  // 16\n    saluer("Ada");                  // Bonjour, Ada\n}` },
        { h: 'Prototypes', p: [
          'Le compilateur lit le fichier de haut en bas : une fonction doit être déclarée avant d’être utilisée.',
          'Si tu préfères écrire `main` en premier, déclare d’abord le prototype : l’en-tête de la fonction terminé par `;`. La définition complète peut venir plus bas.' ],
          code: `int cube(int n);   // prototype\n\nint main() {\n    std::cout << cube(3);  // 27\n}\n\nint cube(int n) {  // définition\n    return n * n * n;\n}` },
        { h: 'Valeurs par défaut et surcharge', p: [
          'Un paramètre peut avoir une valeur par défaut, utilisée si tu ne le passes pas. Les paramètres avec une valeur par défaut vont toujours à la fin.',
          'La surcharge permet plusieurs fonctions du même nom avec des paramètres différents. Le compilateur choisit la version selon les arguments.' ],
          code: `double aire(double cote) { return cote * cote; }\ndouble aire(double base, double hauteur) { return base * hauteur; }\n\nvoid avertir(std::string msg, int fois = 1) {\n    for (int i = 0; i < fois; i++) std::cout << msg << "\\n";\n}\n\nstd::cout << aire(3) << " " << aire(2, 5) << "\\n";  // 9 10\navertir("Enregistré");     // une fois\navertir("Erreur !", 2);    // deux fois` },
        { h: 'Récursivité', p: [
          'Une fonction récursive s’appelle elle-même avec un problème plus petit. Elle a toujours besoin d’un cas de base qui arrête les appels.',
          'Sans cas de base, les appels s’empilent jusqu’à ce que le programme plante (stack overflow).' ],
          code: `int factorielle(int n) {\n    if (n <= 1) return 1;            // cas de base\n    return n * factorielle(n - 1);   // cas récursif\n}\n\nstd::cout << factorielle(5);  // 120` },
        { h: 'Exemple réel : prix final avec remise', real: true, p: [
          'Une boutique calcule le prix final de nombreux produits. Grâce aux valeurs par défaut, la même fonction sert avec ou sans remise et avec la TVA normale de 21 %.' ],
          code: `#include <iostream>\n\ndouble prix_final(double prix, double remise = 0, double tva = 0.21) {\n    return prix * (1 - remise) * (1 + tva);\n}\n\nint main() {\n    std::cout << prix_final(100) << "\\n";            // 121\n    std::cout << prix_final(100, 0.2) << "\\n";       // 96.8\n    std::cout << prix_final(100, 0, 0.10) << "\\n";   // 110\n}` },
      ],
      x: [
        out(`int fois2(int x) { return x * 2; }\nstd::cout << fois2(fois2(3));`, ['12', '6', '9', 'Erreur'], '`fois2(3)` vaut 6 et `fois2(6)` vaut 12.'),
        mc('Quel type de retour utilise une fonction qui ne renvoie rien ?', ['void', 'null', 'none', 'empty'], '`void` indique que la fonction ne renvoie aucune valeur.'),
        fill(`int additionner(int a, int b) {\n    ___ a + b;\n}`, ['return', 'yield', 'give', 'break'], '`return` renvoie le résultat au code qui a appelé la fonction.'),
        out(`void f(int a, int b = 10) {\n    std::cout << a + b;\n}\nf(5);`, ['15', '5', '510', 'Erreur'], 'Comme `b` n’est pas passé, il prend sa valeur par défaut : 5 + 10 = 15.'),
        out(`void genre(int) { std::cout << "int "; }\nvoid genre(double) { std::cout << "double "; }\ngenre(3);\ngenre(3.0);`, ['int double ', 'int int ', 'double double ', 'Erreur'], 'Surcharge : `3` est un `int` et `3.0` un `double`, donc une version différente est appelée à chaque fois.'),
        typ('Complète le cas de base de la factorielle', `int fact(int n) {\n    if (n <= 1) return ___;\n    return n * fact(n - 1);\n}`, '1', 'La factorielle de 0 et de 1 vaut 1. Sans ce cas de base, la récursivité ne s’arrêterait jamais.'),
        mc('Où doivent se trouver les paramètres avec une valeur par défaut ?', ['À la fin de la liste', 'Au début de la liste', 'N’importe où', 'Seulement dans les fonctions void'], 'Si un paramètre a une valeur par défaut, tous ceux qui le suivent doivent en avoir une aussi.'),
        // Défi final
        out(`int f(int n) {\n    if (n == 0) return 0;\n    return n % 10 + f(n / 10);\n}\nint g(int a, int b = 2) { return a * b; }\n\nstd::cout << f(492) << " " << g(f(31));`, ['15 8', '15 4', '492 8', '15 6'], '`f` additionne les chiffres de façon récursive : 4 + 9 + 2 = 15 et 3 + 1 = 4. Ensuite, `g(4)` utilise `b = 2` : 8.'),
      ],
    },
    // ───────────── Jour 12 ─────────────
    {
      t: 'En-têtes et namespaces',
      d: 'Fichiers .h et .cpp, #include, #pragma once et namespace.',
      guide: [
        { h: 'Répartir le code en fichiers', p: [
          'Dans les vrais projets, le code est réparti sur plusieurs fichiers. Le fichier d’en-tête (`.h` ou `.hpp`) déclare ce qui existe et le `.cpp` contient l’implémentation.',
          'Les autres fichiers incluent l’en-tête pour utiliser ces fonctions. Tous les `.cpp` sont compilés ensemble : `g++ main.cpp maths.cpp -o app`.' ],
          code: `// maths.h\n#pragma once\nint additionner(int a, int b);\ndouble moyenne(int a, int b);\n\n// maths.cpp\n#include "maths.h"\nint additionner(int a, int b) { return a + b; }\ndouble moyenne(int a, int b) { return (a + b) / 2.0; }\n\n// main.cpp\n#include <iostream>\n#include "maths.h"\nint main() {\n    std::cout << additionner(2, 3) << " " << moyenne(2, 3);  // 5 2.5\n}` },
        { h: '#include et #pragma once', p: [
          '`#include` copie littéralement le contenu du fichier à cet endroit. Avec `< >`, on cherche dans les en-têtes du système et de la bibliothèque standard ; avec `" "`, on cherche d’abord dans ton projet.',
          'Si un en-tête est inclus deux fois, ses définitions sont répétées et des erreurs apparaissent. `#pragma once` l’empêche. L’équivalent classique, ce sont les gardes avec `#ifndef`.' ],
          code: `// forme classique : gardes d’inclusion\n#ifndef MATHS_H\n#define MATHS_H\n\nint additionner(int a, int b);\n\n#endif` },
        { h: 'namespace', p: [
          'Un `namespace` regroupe des noms pour qu’ils n’entrent pas en conflit avec ceux d’autres bibliothèques. C’est pourquoi la bibliothèque standard vit dans `std`.',
          'De l’extérieur, on y accède avec l’opérateur `::` : `geometrie::aire_cercle(2)`. Les namespaces peuvent être imbriqués.' ],
          code: `namespace geometrie {\n    const double PI = 3.14159;\n    double aire_cercle(double r) { return PI * r * r; }\n}\n\nstd::cout << geometrie::aire_cercle(2);  // 12.5664` },
        { h: 'using et alias', p: [
          '`using std::cout;` importe un seul nom. `using namespace std;` les importe tous : pratique dans de petits exercices, mais ça peut provoquer des conflits de noms.',
          'N’écris jamais `using namespace` dans un fichier `.h` : il s’imposerait à tous les fichiers qui l’incluent.',
          'Pour les noms longs, tu peux créer un alias : `namespace fs = std::filesystem;`.' ],
          code: `#include <filesystem>\nnamespace fs = std::filesystem;\nusing std::cout;\n\ncout << fs::current_path();  // le dossier courant` },
        { h: 'Exemple réel : les utilitaires d’une boutique', real: true, p: [
          'L’équipe d’une boutique en ligne regroupe ses calculs dans son propre namespace, avec l’en-tête séparé de l’implémentation. Ainsi, n’importe quelle partie du programme peut les utiliser sans conflit avec d’autres bibliothèques.' ],
          code: `// boutique.h\n#pragma once\nnamespace boutique {\n    double avec_tva(double prix);\n    bool livraison_gratuite(double total);\n}\n\n// boutique.cpp\n#include "boutique.h"\nnamespace boutique {\n    double avec_tva(double prix) { return prix * 1.21; }\n    bool livraison_gratuite(double total) { return total >= 50; }\n}\n\n// main.cpp\n#include <iostream>\n#include "boutique.h"\nint main() {\n    double total = boutique::avec_tva(45);\n    std::cout << total << " " << boutique::livraison_gratuite(total);  // 54.45 1\n}` },
      ],
      x: [
        mc('Que contient généralement un fichier `.h` ?', ['Des déclarations de fonctions et de classes', 'La fonction main', 'Le programme déjà compilé', 'Seulement des commentaires'], 'L’en-tête dit ce qui existe ; le `.cpp` contient comment ça fonctionne.'),
        fill(`// utilitaires.h\n#___ once\nint maximum(int a, int b);`, ['pragma', 'define', 'include', 'ifndef'], '`#pragma once` empêche l’en-tête d’être inclus deux fois dans le même fichier.'),
        out(`namespace a { int x = 1; }\nnamespace b { int x = 2; }\nstd::cout << a::x + b::x;`, ['3', '12', '2', 'Erreur'], 'Chaque `x` vit dans son namespace, donc pas de conflit : 1 + 2 = 3.'),
        mc('Quelle différence entre `#include <vector>` et `#include "utils.h"` ?', ['Avec < >, on cherche les en-têtes du système ; avec " ", on cherche d’abord dans ton projet', 'Aucune', 'Avec " ", on n’inclut que des en-têtes de la STL', 'Avec < >, le fichier est inclus deux fois'], 'Utilise les guillemets pour tes propres en-têtes et `< >` pour ceux de la bibliothèque standard.'),
        typ('Écris l’opérateur qui accède à un nom d’un namespace', `std___cout << "Bonjour";`, '::', '`::` est l’opérateur de portée : `std::cout` est le `cout` du namespace `std`.'),
        mc('Pourquoi éviter `using namespace std;` dans un fichier `.h` ?', ['Il s’impose à tous les fichiers qui l’incluent et peut provoquer des conflits de noms', 'Il ralentit le programme', 'Il ne compile pas dans un .h', 'Il efface tes propres namespaces'], 'Quiconque inclut ton en-tête recevrait tous les noms de `std` sans l’avoir demandé.'),
        ord('Ordonne la commande qui compile deux fichiers en un exécutable nommé app', ['g++', 'main.cpp', 'util.cpp', '-o', 'app'], ['#include', 'util.h'], 'On passe tous les `.cpp` au compilateur ; pas les en-têtes, car les `.cpp` les incluent déjà.'),
        // Défi final
        out(`namespace app {\n    int v = 2;\n    namespace beta {\n        int v = 3;\n        int fois2() { return v * 2; }\n    }\n    int somme() { return v + beta::v; }\n}\nint v = 1;\n\nstd::cout << v << app::somme() << app::beta::fois2() << ::v;`, ['1561', '2561', '1531', '1562'], 'Hors des namespaces, `v` est la variable globale (1). Dans `app`, `v` vaut 2 et `beta::v` vaut 3, donc `somme()` donne 5. Dans `beta`, `v` vaut 3 et `fois2()` donne 6. `::v` est la globale : 1.'),
      ],
    },
    // ───────────── Jour 13 ─────────────
    {
      t: 'Références',
      d: 'Passage par valeur, références, passage par référence et const&.',
      guide: [
        { h: 'Passage par valeur', p: [
          'Par défaut, C++ passe aux fonctions une copie de chaque argument. Si la fonction modifie le paramètre, l’original n’en sait rien.',
          'Copier un `int` ne coûte rien, mais copier un vecteur d’un million d’éléments, si.' ],
          code: `void incrementer(int n) {\n    n++;               // modifie la copie\n}\n\nint x = 5;\nincrementer(x);\nstd::cout << x;        // 5` },
        { h: 'Références', p: [
          'Une référence est un autre nom pour une variable qui existe déjà : `int& r = x;`. Tout ce que tu fais avec `r` arrive à `x`.',
          'Une référence est initialisée à sa création et ne peut plus ensuite désigner une autre variable.',
          'Ne renvoie jamais une référence vers une variable locale d’une fonction : la variable disparaît à la sortie et la référence pointe dans le vide.' ],
          code: `int x = 10;\nint& r = x;    // r est un alias de x\nr = 25;\nstd::cout << x << "\\n";  // 25\nx++;\nstd::cout << r;           // 26` },
        { h: 'Passage par référence', p: [
          'Si le paramètre est une référence (`int& n`), la fonction travaille directement sur la variable d’origine.',
          'Ainsi, une fonction peut modifier plusieurs valeurs du code appelant, comme dans cet échange.' ],
          code: `void echanger(int& a, int& b) {\n    int tmp = a;\n    a = b;\n    b = tmp;\n}\n\nint x = 1, y = 2;\nechanger(x, y);\nstd::cout << x << y;  // 21` },
        { h: 'const& : lire sans copier', p: [
          '`const T&` passe l’original sans le copier et, grâce à `const`, la fonction ne peut pas le modifier.',
          'Règle pratique : les petits types (`int`, `double`, `char`) par valeur ; les gros objets en lecture seule (`std::string`, `std::vector`) par `const&` ; et ce que la fonction doit modifier, par `&`.' ],
          code: `double moyenne(const std::vector<double>& notes) {\n    double somme = 0;\n    for (double n : notes) somme += n;\n    // notes.push_back(10);  // erreur : c’est const\n    return somme / notes.size();\n}` },
        { h: 'Exemple réel : remises dans le panier', real: true, p: [
          'Une boutique applique une remise à tout le panier puis calcule le total. La première fonction modifie le vecteur (`&`) ; la seconde ne fait que le lire (`const&`).' ],
          code: `#include <iostream>\n#include <vector>\n\nvoid appliquer_remise(std::vector<double>& prix, double pct) {\n    for (double& p : prix) p *= 1 - pct;\n}\n\ndouble total(const std::vector<double>& prix) {\n    double t = 0;\n    for (double p : prix) t += p;\n    return t;\n}\n\nint main() {\n    std::vector<double> panier = {20, 50, 30};\n    appliquer_remise(panier, 0.10);\n    std::cout << "Total : " << total(panier) << "\\n";  // Total : 90\n}` },
      ],
      x: [
        out(`void f(int n) { n = 10; }\n\nint x = 1;\nf(x);\nstd::cout << x;`, ['1', '10', '11', 'Erreur'], 'Par valeur, la fonction reçoit une copie et l’original ne change pas.'),
        out(`void f(int& n) { n = 10; }\n\nint x = 1;\nf(x);\nstd::cout << x;`, ['10', '1', '11', 'Erreur'], 'Avec `int&`, la fonction travaille sur la variable d’origine.'),
        fill(`void doubler(int___ n) {\n    n *= 2;\n}`, ['&', '*', '#', '@'], 'Avec `&`, le paramètre est une référence et la modification atteint l’original.'),
        out(`int a = 3;\nint& r = a;\nr += 4;\nstd::cout << a;`, ['7', '3', '4', 'Erreur'], '`r` est un autre nom de `a`, donc `r += 4` modifie `a`.'),
        mc('Quelle est la meilleure façon de passer un gros vecteur que la fonction va seulement lire ?', ['const std::vector<int>&', 'std::vector<int>', 'std::vector<int>&', 'std::vector<int>*'], '`const&` évite la copie et garantit qu’il ne sera pas modifié.'),
        mc('Que se passe-t-il avec `int& r;` sans initialisation ?', ['Ça ne compile pas : une référence doit être initialisée', 'Elle vaut 0', 'Elle désigne nullptr', 'Elle contient une valeur aléatoire'], 'Une référence doit toujours désigner quelque chose dès sa création.'),
        typ('Fais en sorte que la boucle modifie les éléments d’origine', `std::vector<int> v = {1, 2, 3};\nfor (auto___ x : v) x *= 2;`, '&', 'Avec `auto&`, `x` est une référence vers chaque élément et non une copie.'),
        // Défi final
        out(`void f(int a, int& b, const int& c) {\n    a++;\n    b += c;\n}\n\nint x = 1, y = 2, z = 3;\nf(x, y, z);\nf(y, z, x);\nstd::cout << x << y << z;`, ['154', '254', '153', '264'], 'Premier appel : `a` est une copie de `x` (qui ne change pas) et `y` passe à 2 + 3 = 5. Second appel : `a` est une copie de `y` et `z` passe à 3 + 1 = 4.'),
      ],
    },
    // ───────────── Jour 14 ─────────────
    {
      t: 'Pointeurs',
      d: 'Adresses, *, &, nullptr et arithmétique des pointeurs.',
      guide: [
        { h: 'Adresses mémoire', p: [
          'Chaque variable vit à un emplacement mémoire qui a une adresse. `&x` renvoie l’adresse de `x`.',
          'Un pointeur est une variable qui stocke une adresse. `int* p = &x;` se lit « p est un pointeur vers int qui pointe sur x ».' ],
          code: `int x = 42;\nint* p = &x;\nstd::cout << p << "\\n";   // une adresse, par ex. 0x7ffd5e8c\nstd::cout << *p << "\\n";  // 42` },
        { h: 'Déréférencer avec *', p: [
          '`*p` accède à la valeur pointée par `p` : ça sert aussi bien à lire qu’à écrire.',
          'Attention aux deux usages de `*` : dans une déclaration (`int* p`), il indique un pointeur ; dans une expression (`*p`), il accède à la valeur. Et `&` a aussi deux usages : adresse (`&x`) et référence (`int& r`).' ],
          code: `int x = 5;\nint* p = &x;\n*p = 20;          // modifie x via le pointeur\nstd::cout << x;   // 20` },
        { h: 'nullptr', p: [
          'Un pointeur qui ne pointe sur rien doit valoir `nullptr`. Déréférencer un pointeur nul est un comportement indéfini et fait généralement planter le programme.',
          'Vérifie toujours les pointeurs qui pourraient être nuls avant de les utiliser. Un pointeur non initialisé est encore pire : il pointe n’importe où.' ],
          code: `int* p = nullptr;\nif (p != nullptr) {\n    std::cout << *p;\n} else {\n    std::cout << "Ne pointe sur rien";\n}` },
        { h: 'Pointeurs et tableaux', p: [
          'Le nom d’un tableau se convertit en pointeur vers son premier élément. Ajouter 1 à un pointeur l’avance d’un élément, pas d’un octet.',
          '`p[i]` équivaut à `*(p + i)`. Soustraire deux pointeurs du même tableau donne le nombre d’éléments qui les séparent.' ],
          code: `int a[] = {10, 20, 30};\nint* p = a;               // pointe sur a[0]\nstd::cout << *(p + 1) << " " << p[2] << "\\n";  // 20 30\np++;                      // pointe maintenant sur a[1]\nstd::cout << *p;          // 20` },
        { h: 'Exemple réel : chercher un code produit', real: true, p: [
          'Un entrepôt cherche un code dans son inventaire. La fonction renvoie un pointeur vers l’élément trouvé ou `nullptr` s’il n’existe pas, et l’appelant vérifie le résultat.' ],
          code: `#include <iostream>\n#include <vector>\n\nconst int* chercher_code(const std::vector<int>& codes, int cible) {\n    for (const int& c : codes)\n        if (c == cible) return &c;\n    return nullptr;\n}\n\nint main() {\n    std::vector<int> stock = {1201, 3307, 4410};\n    if (const int* p = chercher_code(stock, 3307))\n        std::cout << "Trouvé : " << *p << "\\n";   // Trouvé : 3307\n    if (chercher_code(stock, 9999) == nullptr)\n        std::cout << "Introuvable\\n";            // Introuvable\n}` },
      ],
      x: [
        mc('Que stocke un pointeur ?', ['L’adresse mémoire d’une autre donnée', 'Une copie de la donnée', 'La taille de la donnée', 'Le nom de la variable'], 'Un pointeur contient une adresse ; avec `*`, tu accèdes à la donnée qui s’y trouve.'),
        fill(`int x = 5;\nint* p = ___x;`, ['&', '*', '#', '->'], '`&x` obtient l’adresse de `x`.'),
        out(`int x = 5;\nint* p = &x;\n*p = 9;\nstd::cout << x;`, ['9', '5', 'Une adresse', 'Erreur'], '`*p = 9` écrit dans la variable pointée par `p`, c’est-à-dire `x`.'),
        out(`int a[] = {2, 4, 6, 8};\nint* p = a;\np += 2;\nstd::cout << *p;`, ['6', '4', '2', '8'], '`p` part de `a[0]` et avance de deux éléments jusqu’à `a[2]`.'),
        typ('Écris la valeur d’un pointeur qui ne pointe sur rien', `int* p = ___;`, 'nullptr', '`nullptr` est le pointeur nul du C++ moderne.'),
        mc('Que se passe-t-il si on fait `*p` alors que `p` vaut `nullptr` ?', ['Comportement indéfini ; le programme plante généralement', 'Ça renvoie 0', 'Une exception est lancée', 'Ça ne compile pas'], 'C’est pourquoi on vérifie `p != nullptr` avant de déréférencer.'),
        out(`int x = 3, y = 7;\nint* p = &x;\np = &y;\n*p += 1;\nstd::cout << x << y;`, ['38', '47', '37', '48'], 'Un pointeur peut changer de cible : après `p = &y`, le `+= 1` touche `y`.'),
        // Défi final
        out(`int v[] = {5, 1, 4, 2};\nint* p = v;\nint* q = v + 3;\nstd::swap(*p, *q);\np++;\n*p = *q * 10;\nstd::cout << v[0] << v[1] << " " << q - p;`, ['250 2', '250 3', '510 2', '210 2'], 'Le swap donne {2, 1, 4, 5}. `p` avance sur `v[1]`, qui passe à 5 * 10 = 50. `q` pointe sur `v[3]` et `p` sur `v[1]` : 2 éléments les séparent.'),
      ],
    },
    // ───────────── Jour 15 ─────────────
    {
      t: 'Mémoire dynamique',
      d: 'Pile et tas, new, delete, fuites et pointeurs pendants.',
      guide: [
        { h: 'Pile et tas', p: [
          'Les variables locales vivent sur la pile (stack) : elles sont créées à l’entrée de leur bloc et détruites automatiquement à la sortie. C’est rapide, mais sa taille est limitée.',
          'Le tas (heap) stocke les données dont la taille ou la durée de vie se décide pendant l’exécution. Cette mémoire se réserve et se libère à la main.' ] },
        { h: 'new et delete', p: [
          '`new` réserve de la mémoire sur le tas et renvoie un pointeur. `delete` la libère.',
          'Pour les tableaux, on utilise `new T[n]` et `delete[]`. Les mélanger (`new[]` avec `delete`) est un comportement indéfini.',
          'Après la libération, mieux vaut remettre le pointeur à `nullptr` pour ne pas l’utiliser par erreur.' ],
          code: `int* p = new int(42);       // un int sur le tas\nstd::cout << *p << "\\n";     // 42\ndelete p;\np = nullptr;\n\nint n = 5;\nint* donnees = new int[n];  // tableau dont la taille se décide à l’exécution\ndonnees[0] = 7;\ndelete[] donnees;` },
        { h: 'Fuites de mémoire', p: [
          'Si tu perds le pointeur sans faire `delete`, cette mémoire reste réservée jusqu’à la fin du programme : c’est une fuite.',
          'Dans un programme qui tourne pendant des jours, comme un serveur, les fuites finissent par épuiser la mémoire.' ],
          code: `void traiter() {\n    int* tampon = new int[1000];\n    // ... travail ...\n    if (true) return;   // fuite ! on sort sans delete[]\n    delete[] tampon;\n}` },
        { h: 'Pointeurs pendants et double delete', p: [
          'Un pointeur pendant pointe vers une mémoire déjà libérée. Le lire ou y écrire est un comportement indéfini.',
          'Faire `delete` deux fois sur la même mémoire aussi. Remettre le pointeur à `nullptr` après la libération évite les deux erreurs, car `delete nullptr` ne fait rien.' ] },
        { h: 'Exemple réel : notes d’une classe de taille variable', real: true, p: [
          'Un programme de lycée ne sait pas combien d’élèves aura chaque classe avant l’exécution. On le résout d’abord avec `new[]` et `delete[]`.',
          'En C++ moderne, on utilise plutôt `std::vector`, qui réserve et libère tout seul. Le jour 26, tu verras les smart pointers, qui font la même chose avec des objets isolés.' ],
          code: `#include <iostream>\n#include <vector>\n\nint main() {\n    int n = 4;\n    double* notes = new double[n]{6.5, 8, 9.5, 7};\n    double somme = 0;\n    for (int i = 0; i < n; i++) somme += notes[i];\n    std::cout << "Moyenne : " << somme / n << "\\n";   // Moyenne : 7.75\n    delete[] notes;   // indispensable\n\n    // La même chose, sans new ni delete :\n    std::vector<double> v = {6.5, 8, 9.5, 7};\n}` },
      ],
      x: [
        mc('Où sont stockées les variables locales d’une fonction ?', ['Sur la pile (stack)', 'Sur le tas (heap)', 'Sur le disque', 'Dans un fichier temporaire'], 'Elles sont créées à l’entrée du bloc et détruites automatiquement à la sortie.'),
        fill(`int* donnees = new int[100];\n// ...\n___ donnees;`, ['delete[]', 'delete', 'free', 'remove'], 'Ce qui est réservé avec `new[]` se libère avec `delete[]`.'),
        mc('Qu’est-ce qu’une fuite de mémoire ?', ['De la mémoire réservée avec new qui n’est jamais libérée', 'Lire au-delà d’un tableau', 'Un pointeur qui vaut nullptr', 'Une variable non initialisée'], 'La mémoire reste occupée alors que personne ne peut l’utiliser.'),
        out(`int* p = new int(7);\n*p *= 3;\nint r = *p;\ndelete p;\nstd::cout << r;`, ['21', '7', 'Valeur aléatoire', 'Erreur'], '`r` garde une copie de la valeur (21) avant la libération, donc on peut l’utiliser sans problème.'),
        typ('Libère l’entier réservé avec new', `int* p = new int(5);\n___ p;`, 'delete', 'Un objet isolé créé avec `new` se libère avec `delete` (sans crochets).'),
        mc('Qu’est-ce qu’un pointeur pendant ?', ['Un pointeur vers une mémoire déjà libérée', 'Un pointeur qui vaut nullptr', 'Un pointeur vers un autre pointeur', 'Un pointeur vers une constante'], 'L’utiliser est un comportement indéfini.'),
        ord('Réserve sur le tas un tableau de n entiers', ['int*', 'donnees', '=', 'new', 'int[n]', ';'], ['malloc', 'delete'], '`new int[n]` réserve `n` entiers et renvoie un pointeur vers le premier.'),
        // Défi final
        out(`int n = 4;\nint* a = new int[n];\nfor (int i = 0; i < n; i++) a[i] = i * i;\nint* b = a + 1;\nint s = 0;\nfor (int i = 0; i < 3; i++) s += b[i];\ndelete[] a;\nstd::cout << s;`, ['14', '13', '5', 'Erreur'], 'Le tableau vaut {0, 1, 4, 9}. `b` pointe sur `a[1]`, donc on additionne 1 + 4 + 9 = 14. `s` est calculé avant la libération.'),
      ],
    },
    // ───────────── Jour 16 ─────────────
    {
      t: 'Structs et enums',
      d: 'Regrouper des données avec struct et définir des constantes avec enum class.',
      guide: [
        { h: 'struct : regrouper des données', p: [
          'Un `struct` rassemble plusieurs données liées sous un même type. Chaque donnée est un membre auquel on accède avec un point : `p.x`.',
          'La définition se termine par `;` après l’accolade fermante. L’oublier provoque des erreurs déroutantes à la ligne suivante.' ],
          code: `struct Point {\n    double x;\n    double y;\n};\n\nPoint p{3, 4};\np.x = 5;\nstd::cout << p.x << "," << p.y;  // 5,4` },
        { h: 'Valeurs par défaut et fonctions', p: [
          'Les membres peuvent avoir une valeur par défaut, utilisée si tu n’en donnes pas d’autre à la création de l’objet.',
          'Pour passer un struct à une fonction qui ne fait que le lire, utilise `const&` et tu éviteras de le copier.' ],
          code: `struct Produit {\n    std::string nom;\n    double prix = 0;\n    int stock = 0;\n};\n\ndouble valeur_stock(const Produit& p) {\n    return p.prix * p.stock;\n}\n\nProduit clavier{"Clavier", 25.5, 4};\nstd::cout << valeur_stock(clavier);  // 102` },
        { h: 'Vecteurs de structs et structured bindings', p: [
          'Un `std::vector<Produit>` fonctionne comme un petit tableau : chaque élément est une ligne.',
          'Depuis C++17, tu peux décomposer les membres en variables : `auto [nom, prix, stock] = p;`. Ça marche aussi dans la boucle range-for.' ],
          code: `std::vector<Point> trajet = {{0, 0}, {3, 4}, {6, 8}};\nfor (const auto& [x, y] : trajet)\n    std::cout << "(" << x << ", " << y << ") ";\n// (0, 0) (3, 4) (6, 8)` },
        { h: 'enum class', p: [
          'Un `enum class` définit un type avec un ensemble fermé de valeurs nommées. On les écrit avec le nom du type devant : `Couleur::Vert`.',
          'L’`enum` classique place ses noms dans la portée extérieure et se convertit en `int` sans prévenir. `enum class` évite ces deux problèmes ; si tu as besoin du nombre, convertis-le avec `static_cast<int>`.',
          'Par défaut, la première valeur vaut 0, la deuxième 1, et ainsi de suite.' ],
          code: `enum class Couleur { Rouge, Vert, Bleu };\n\nCouleur c = Couleur::Vert;\nif (c == Couleur::Vert) std::cout << "En avant\\n";\nstd::cout << static_cast<int>(c);  // 1` },
        { h: 'Exemple réel : les commandes d’une boutique', real: true, p: [
          'Une boutique stocke chaque commande dans un struct et son statut dans un `enum class`. Impossible ainsi d’écrire un statut inventé comme `"expedi"`, et un `switch` traduit chaque statut en texte.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nenum class Statut { EnAttente, Expediee, Livree };\n\nstruct Commande {\n    int id;\n    double total;\n    Statut statut;\n};\n\nstd::string texte(Statut s) {\n    switch (s) {\n        case Statut::EnAttente: return "en attente";\n        case Statut::Expediee:  return "expédiée";\n        case Statut::Livree:    return "livrée";\n    }\n    return "?";\n}\n\nint main() {\n    std::vector<Commande> commandes = {\n        {101, 35.5, Statut::Expediee},\n        {102, 12.0, Statut::EnAttente},\n        {103, 80.0, Statut::EnAttente}};\n    double a_expedier = 0;\n    for (const auto& c : commandes) {\n        std::cout << c.id << ": " << texte(c.statut) << "\\n";\n        if (c.statut == Statut::EnAttente) a_expedier += c.total;\n    }\n    std::cout << "À expédier : " << a_expedier << " euros\\n";  // 92 euros\n}` },
      ],
      x: [
        fill(`struct Point {\n    int x, y;\n}___`, [';', ':', ',', '.'], 'La définition d’un struct se termine par un point-virgule après l’accolade.'),
        out(`struct P { int x; int y; };\n\nP p{2, 5};\np.y += p.x;\nstd::cout << p.y;`, ['7', '5', '2', '25'], '`p{2, 5}` donne x = 2 et y = 5 ; ensuite y passe à 5 + 2 = 7.'),
        mc('Quel avantage a `enum class` sur l’`enum` classique ?', ['Ses noms ne se mélangent pas aux autres et il ne devient pas un int par accident', 'Il occupe moins de mémoire', 'Il accepte des valeurs décimales', 'On peut l’utiliser comme un std::string'], 'C’est pourquoi on écrit `Couleur::Rouge` et on utilise `static_cast<int>` pour obtenir le nombre.'),
        out(`enum class Taille { S, M, L, XL };\nstd::cout << static_cast<int>(Taille::L);`, ['2', '3', 'L', 'Erreur'], 'Les valeurs sont numérotées à partir de 0 : S = 0, M = 1, L = 2.'),
        typ('Accède à la valeur Vert de l’enum class', `enum class Feu { Rouge, Orange, Vert };\nFeu f = Feu___Vert;`, '::', 'Les valeurs d’un `enum class` s’écrivent avec l’opérateur de portée : `Feu::Vert`.'),
        out(`struct Config {\n    int volume = 50;\n    bool muet = false;\n};\n\nConfig c;\nc.volume += 10;\nstd::cout << c.volume << c.muet;`, ['600', '60false', '500', '6001'], 'Les valeurs par défaut donnent 50 et `false`. 50 + 10 = 60 et le `bool` s’affiche 0.'),
        out(`struct Paire { std::string k; int v; };\n\nPaire p{"age", 30};\nauto [cle, valeur] = p;\nstd::cout << cle << "=" << valeur;`, ['age=30', 'k=v', '30=age', 'Erreur'], 'Le structured binding copie les membres dans l’ordre : `cle` reçoit "age" et `valeur` reçoit 30.'),
        // Défi final
        out(`struct Article { std::string nom; double prix; int qte; };\n\nstd::vector<Article> panier = {{"pain", 1.5, 2}, {"lait", 0.9, 6}, {"fromage", 4.0, 1}};\ndouble total = 0, max_ligne = 0;\nstd::string plus_cher;\nfor (const auto& [n, p, q] : panier) {\n    total += p * q;\n    if (p * q > max_ligne) { max_ligne = p * q; plus_cher = n; }\n}\nstd::cout << total << " " << plus_cher;`, ['12.4 lait', '12.4 fromage', '6.4 fromage', '9 lait'], 'Les lignes valent 3, 5.4 et 4, soit 12.4 au total. La ligne la plus chère est celle du lait (5.4), même si le fromage a le prix unitaire le plus élevé.'),
      ],
    },
    // ───────────── Jour 17 ─────────────
    {
      t: 'Classes',
      d: 'class, public, private, méthodes const, this et ->.',
      guide: [
        { h: 'Données et comportement ensemble', p: [
          'Une `class` regroupe des données (attributs) et les fonctions qui les manipulent (méthodes). Chaque objet créé à partir de la classe a ses propres données.',
          'La différence avec `struct`, c’est l’accès par défaut : dans une `class`, tout est privé sauf indication contraire ; dans un `struct`, public.' ],
          code: `class Compteur {\npublic:\n    void incrementer() { valeur++; }\n    int obtenir() const { return valeur; }\nprivate:\n    int valeur = 0;\n};\n\nCompteur c;\nc.incrementer();\nc.incrementer();\nstd::cout << c.obtenir();  // 2\n// c.valeur = 10;  // erreur : valeur est privé` },
        { h: 'Encapsulation', p: [
          'On laisse généralement les attributs en `private` et on propose des méthodes `public` pour les manipuler. Ainsi, la classe garantit que ses données sont toujours valides.',
          'Si demain tu changes la façon dont la donnée est stockée en interne, le code qui utilise la classe n’a pas à changer.' ],
          code: `class Thermostat {\npublic:\n    void regler(int d) {\n        if (d < 15) d = 15;   // la classe impose ses limites\n        if (d > 30) d = 30;\n        degres = d;\n    }\n    int lire() const { return degres; }\nprivate:\n    int degres = 20;\n};` },
        { h: 'Méthodes const', p: [
          'Une méthode marquée `const` à la fin promet de ne pas modifier l’objet. Le compilateur le vérifie.',
          'Seules les méthodes `const` peuvent être appelées sur des objets `const` ou des références `const&`. Marque comme `const` toutes les méthodes qui ne font que consulter.' ] },
        { h: 'this et ->', p: [
          'Dans une méthode, `this` est un pointeur vers l’objet courant. Il sert par exemple quand un paramètre porte le même nom qu’un attribut.',
          'Avec un pointeur vers un objet, `p->methode()` est la forme courte de `(*p).methode()`.' ],
          code: `class Joueur {\npublic:\n    void fixer_nom(std::string nom) { this->nom = nom; }\n    std::string lire() const { return nom; }\nprivate:\n    std::string nom;\n};\n\nJoueur j;\nJoueur* p = &j;\np->fixer_nom("Leo");\nstd::cout << j.lire();  // Leo` },
        { h: 'Exemple réel : un compte bancaire', real: true, p: [
          'Une banque ne laisserait jamais n’importe quelle partie du programme changer directement le solde. La classe permet seulement de déposer et de retirer des montants valides, et renvoie un `bool` pour signaler un refus.' ],
          code: `#include <iostream>\n\nclass Compte {\npublic:\n    bool deposer(double montant) {\n        if (montant <= 0) return false;\n        solde += montant;\n        return true;\n    }\n    bool retirer(double montant) {\n        if (montant <= 0 || montant > solde) return false;\n        solde -= montant;\n        return true;\n    }\n    double lire_solde() const { return solde; }\nprivate:\n    double solde = 0;\n};\n\nint main() {\n    Compte c;\n    c.deposer(200);\n    std::cout << c.retirer(500) << " " << c.retirer(50) << "\\n";  // 0 1\n    std::cout << c.lire_solde() << "\\n";                        // 150\n}` },
      ],
      x: [
        mc('Quel est l’accès par défaut des membres d’une `class` ?', ['private', 'public', 'protected', 'Aucun'], 'Dans une `class`, tout est privé sauf indication contraire ; dans un `struct`, public.'),
        fill(`class Chat {\n___:\n    void miauler() { std::cout << "Miaou"; }\n};`, ['public', 'open', 'export', 'global'], '`public:` rend ce qui suit utilisable depuis l’extérieur de la classe.'),
        out(`class C {\npublic:\n    void ajouter(int n) { total += n; }\n    int lire() const { return total; }\nprivate:\n    int total = 0;\n};\n\nC c;\nc.ajouter(4);\nc.ajouter(-1);\nstd::cout << c.lire();`, ['3', '4', '5', 'Erreur'], 'L’objet conserve son `total` entre les appels : 0 + 4 - 1 = 3.'),
        mc('Que signifie le `const` final dans `int lire() const` ?', ['La méthode ne modifie pas l’objet', 'Elle renvoie une constante', 'Elle ne peut pas être redéfinie', 'Elle ne peut être appelée qu’une fois'], 'Ainsi, la méthode peut aussi être utilisée avec des objets `const`.'),
        typ('Appelle la méthode via un pointeur', `Compte c;\nCompte* p = &c;\np___deposer(50);`, '->', '`p->deposer(50)` équivaut à `(*p).deposer(50)`.'),
        mc('Que se passe-t-il avec `c.total = 99;` si `total` est privé ?', ['Ça ne compile pas', 'La valeur change', 'Une exception est lancée', 'C’est ignoré en silence'], 'Le compilateur interdit l’accès aux membres privés depuis l’extérieur de la classe.'),
        out(`class Thermostat {\npublic:\n    void regler(int d) { degres = d < 15 ? 15 : (d > 30 ? 30 : d); }\n    int lire() const { return degres; }\nprivate:\n    int degres = 20;\n};\n\nThermostat t;\nt.regler(42);\nstd::cout << t.lire();`, ['30', '42', '20', '15'], 'La méthode limite la valeur à la plage 15-30, donc 42 devient 30.'),
        // Défi final
        out(`class Compte {\npublic:\n    bool deposer(double x) {\n        if (x <= 0) return false;\n        solde += x;\n        return true;\n    }\n    bool retirer(double x) {\n        if (x > solde) return false;\n        solde -= x;\n        return true;\n    }\n    double lire() const { return solde; }\nprivate:\n    double solde = 0;\n};\n\nCompte c;\nc.deposer(100);\nc.deposer(-20);\nbool a = c.retirer(30);\nbool b = c.retirer(80);\nstd::cout << a << b << " " << c.lire();`, ['10 70', '11 -10', '10 50', '11 70'], 'Le dépôt négatif est refusé : le solde vaut 100. Retirer 30 fonctionne (1) et laisse 70 ; retirer 80 échoue (0) car cela dépasse le solde.'),
      ],
    },
    // ───────────── Jour 18 ─────────────
    {
      t: 'Constructeurs et destructeurs',
      d: 'Initialisation, listes d’initialisation, explicit, destructeurs et RAII.',
      guide: [
        { h: 'Constructeurs', p: [
          'Un constructeur est une méthode spéciale exécutée à la création de l’objet. Il porte le nom de la classe et n’a pas de type de retour, pas même `void`.',
          'Il permet à l’objet de naître avec des données valides, sans avoir à le configurer ensuite.' ],
          code: `class Produit {\npublic:\n    Produit(std::string n, double p) {\n        nom = n;\n        prix = p;\n    }\n    void afficher() const { std::cout << nom << ": " << prix << "\\n"; }\nprivate:\n    std::string nom;\n    double prix;\n};\n\nProduit p("Souris", 19.9);\np.afficher();  // Souris: 19.9` },
        { h: 'Liste d’initialisation', p: [
          'La façon préférée de donner une valeur aux attributs est la liste d’initialisation, placée après `:` avant le corps. Elle initialise directement au lieu de créer puis d’affecter.',
          'Elle est obligatoire pour les attributs `const` et les références. Les attributs sont initialisés dans l’ordre de leur déclaration dans la classe, pas dans celui de la liste.' ],
          code: `class Produit {\npublic:\n    Produit(std::string n, double p) : nom(n), prix(p) {}\nprivate:\n    std::string nom;\n    double prix;\n};` },
        { h: 'Plusieurs constructeurs et explicit', p: [
          'Une classe peut avoir plusieurs constructeurs (surcharge). Celui qui ne prend aucun paramètre est le constructeur par défaut.',
          'Un constructeur à un seul paramètre permet des conversions implicites : `Temperature t = 30;`. Marque-le `explicit` pour les interdire et éviter les surprises.' ],
          code: `class Temperature {\npublic:\n    Temperature() : degres(20) {}\n    explicit Temperature(double d) : degres(d) {}\n    double lire() const { return degres; }\nprivate:\n    double degres;\n};\n\nTemperature a;          // 20\nTemperature b(25.5);    // 25.5\n// Temperature c = 30;  // erreur grâce à explicit` },
        { h: 'Destructeurs et RAII', p: [
          'Le destructeur (`~Classe()`) s’exécute automatiquement quand l’objet est détruit, par exemple à la sortie de son bloc. Les objets sont détruits dans l’ordre inverse de leur création.',
          'Le RAII est l’idée centrale du C++ : le constructeur acquiert une ressource (mémoire, fichier, connexion) et le destructeur la libère. Ainsi, on n’oublie jamais de la libérer, même en cas d’erreur.' ],
          code: `class Trace {\npublic:\n    Trace(std::string n) : nom(n) { std::cout << "entre " << nom << "\\n"; }\n    ~Trace() { std::cout << "sort " << nom << "\\n"; }\nprivate:\n    std::string nom;\n};\n\nint main() {\n    Trace a("A");\n    {\n        Trace b("B");\n    }                       // B est détruit ici\n    std::cout << "fin\\n";\n}                           // A est détruit ici\n// entre A, entre B, sort B, fin, sort A` },
        { h: 'Exemple réel : mesurer la durée d’une tâche', real: true, p: [
          'Une équipe veut savoir quelles fonctions de son programme sont lentes. Ce chronomètre démarre dans le constructeur et affiche le temps dans le destructeur : il suffit de le créer au début de la fonction.' ],
          code: `#include <chrono>\n#include <iostream>\n#include <string>\n\nclass Chronometre {\npublic:\n    explicit Chronometre(std::string tache)\n        : tache(tache), debut(std::chrono::steady_clock::now()) {}\n    ~Chronometre() {\n        auto fin = std::chrono::steady_clock::now();\n        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(fin - debut).count();\n        std::cout << tache << " a pris " << ms << " ms\\n";\n    }\nprivate:\n    std::string tache;\n    std::chrono::steady_clock::time_point debut;\n};\n\nvoid exporter_rapport() {\n    Chronometre c("exporter_rapport");\n    // ... travail ...\n}   // à la sortie, le destructeur affiche le temps` },
      ],
      x: [
        mc('Quel type de retour a un constructeur ?', ['Aucun, pas même void', 'void', 'Le type de la classe', 'int'], 'Les constructeurs ne déclarent pas de type de retour.'),
        fill(`class Fichier {\npublic:\n    ___Fichier() { std::cout << "fermé"; }\n};`, ['~', '!', '-', '#'], 'Le destructeur s’écrit avec `~` devant le nom de la classe.'),
        out(`struct T {\n    char c;\n    T(char c) : c(c) { std::cout << c; }\n    ~T() { std::cout << c; }\n};\n\nint main() {\n    T a('x');\n    { T b('y'); }\n    T c('z');\n}`, ['xyyzzx', 'xyzzyx', 'xyzxyz', 'xyyzxz'], '`b` est créé et détruit dans son bloc (yy). À la fin de `main`, `c` puis `a` sont détruits dans l’ordre inverse de leur création (zx).'),
        typ('Complète la liste d’initialisation', `class Point {\npublic:\n    Point(int x, int y) ___ x(x), y(y) {}\nprivate:\n    int x, y;\n};`, ':', 'La liste d’initialisation commence par deux-points après les paramètres.'),
        mc('Qu’empêche `explicit` sur un constructeur à un paramètre ?', ['Les conversions implicites comme `Temperature t = 30;`', 'L’appel du constructeur', 'La copie de l’objet', 'L’exécution du destructeur'], 'Avec `explicit`, il faut écrire `Temperature t(30);`.'),
        mc('Que signifie RAII ?', ['Le constructeur acquiert une ressource et le destructeur la libère', 'Toutes les classes doivent hériter d’une autre', 'La mémoire est libérée par un ramasse-miettes', 'Les attributs doivent être publics'], 'Comme le destructeur s’exécute toujours, la ressource n’est jamais oubliée.'),
        out(`class Boite {\npublic:\n    Boite() : largeur(1), hauteur(1) {}\n    Boite(int l, int h) : largeur(l), hauteur(h) {}\n    int aire() const { return largeur * hauteur; }\nprivate:\n    int largeur, hauteur;\n};\n\nBoite a;\nBoite b(3, 4);\nstd::cout << a.aire() + b.aire();`, ['13', '12', '7', 'Erreur'], '`a` utilise le constructeur par défaut (1 × 1) et `b` celui à deux paramètres (3 × 4) : 1 + 12 = 13.'),
        // Défi final
        out(`struct P {\n    char id;\n    P(char id) : id(id) { std::cout << "+" << id; }\n    ~P() { std::cout << "-" << id; }\n};\n\nstruct Voiture {\n    P moteur{'m'};\n    P roues{'r'};\n    Voiture() { std::cout << "+C"; }\n    ~Voiture() { std::cout << "-C"; }\n};\n\nint main() {\n    Voiture v;\n}`, ['+m+r+C-C-r-m', '+C+m+r-r-m-C', '+m+r+C-C-m-r', '+C+m+r-C-r-m'], 'Les attributs sont construits dans l’ordre de déclaration avant le corps du constructeur. À la destruction, le corps du destructeur s’exécute d’abord, puis les attributs dans l’ordre inverse.'),
      ],
    },
    // ───────────── Jour 19 ─────────────
    {
      t: 'Héritage',
      d: 'Classes dérivées, protected, constructeurs de la base et ordre de construction.',
      guide: [
        { h: 'Classes dérivées', p: [
          'L’héritage crée une nouvelle classe à partir d’une autre : `class Chien : public Animal`. La classe dérivée reçoit les attributs et méthodes de la base et ajoute les siens.',
          'Utilise-le quand il y a une relation « est un » : un chien est un animal. Si la relation est « a un » (une voiture a un moteur), utilise un attribut.' ],
          code: `class Animal {\npublic:\n    std::string nom;\n    void manger() const { std::cout << nom << " mange\\n"; }\n};\n\nclass Chien : public Animal {\npublic:\n    void aboyer() const { std::cout << nom << " aboie\\n"; }\n};\n\nChien c;\nc.nom = "Toby";\nc.manger();   // Toby mange\nc.aboyer();   // Toby aboie` },
        { h: 'protected', p: [
          '`private` : seulement la classe elle-même. `protected` : la classe elle-même et ses dérivées. `public` : tout le monde.',
          'Utilise `protected` pour ce dont les classes filles ont besoin mais que le reste du programme ne doit pas toucher.' ] },
        { h: 'Constructeurs et héritage', p: [
          'La classe dérivée appelle le constructeur de la base dans sa liste d’initialisation : `Directeur(...) : Employe(n, s)`.',
          'La partie de la base est construite d’abord, puis la partie dérivée. À la destruction, l’ordre est inversé.' ],
          code: `class Employe {\npublic:\n    Employe(std::string n, double s) : nom(n), salaire(s) {}\nprotected:\n    std::string nom;\n    double salaire;\n};\n\nclass Directeur : public Employe {\npublic:\n    Directeur(std::string n, double s, double prime)\n        : Employe(n, s), prime(prime) {}\n    double total() const { return salaire + prime; }  // salaire est protected\nprivate:\n    double prime;\n};\n\nDirecteur d("Marthe", 3000, 500);\nstd::cout << d.total();  // 3500` },
        { h: 'Redéfinir des méthodes et appeler la base', p: [
          'Si la dérivée définit une méthode du même nom que la base, elle masque la version de la base.',
          'Depuis la dérivée, tu peux toujours appeler la version d’origine avec `Base::methode()`. Tu étends ainsi le comportement au lieu de le répéter.' ] },
        { h: 'Exemple réel : les véhicules d’une flotte', real: true, p: [
          'Une entreprise de transport gère des voitures et des camions. Tous ont une immatriculation et un kilométrage ; les camions ajoutent leur charge maximale. La fiche du camion réutilise celle de la base et y ajoute sa donnée.' ],
          code: `#include <iostream>\n#include <string>\n\nclass Vehicule {\npublic:\n    Vehicule(std::string immat, int km) : immat(immat), km(km) {}\n    std::string fiche() const {\n        return immat + " (" + std::to_string(km) + " km)";\n    }\nprotected:\n    std::string immat;\n    int km;\n};\n\nclass Camion : public Vehicule {\npublic:\n    Camion(std::string immat, int km, int charge)\n        : Vehicule(immat, km), charge(charge) {}\n    std::string fiche() const {\n        return Vehicule::fiche() + ", charge " + std::to_string(charge) + " kg";\n    }\nprivate:\n    int charge;\n};\n\nint main() {\n    Camion c("AB-123-CD", 85000, 12000);\n    std::cout << c.fiche() << "\\n";  // AB-123-CD (85000 km), charge 12000 kg\n}` },
      ],
      x: [
        fill(`class Chat ___ public Animal {\n    // ...\n};`, [':', '->', 'extends', '::'], 'En C++, l’héritage s’indique avec deux-points : `class Chat : public Animal`.'),
        mc('D’où peut-on accéder à un membre `protected` ?', ['Depuis la classe elle-même et ses dérivées', 'Depuis n’importe où', 'Seulement depuis la classe elle-même', 'Seulement depuis main'], '`protected` se situe entre `private` et `public`.'),
        out(`struct A {\n    A() { std::cout << "A"; }\n    ~A() { std::cout << "a"; }\n};\nstruct B : A {\n    B() { std::cout << "B"; }\n    ~B() { std::cout << "b"; }\n};\n\nint main() { B obj; }`, ['ABba', 'BAab', 'ABab', 'BAba'], 'La base est construite d’abord, puis la dérivée ; à la destruction, l’ordre est inversé.'),
        out(`struct Base {\n    std::string salut() const { return "base"; }\n};\nstruct Fille : Base {\n    std::string salut() const { return "fille+" + Base::salut(); }\n};\n\nFille f;\nstd::cout << f.salut();`, ['fille+base', 'base', 'fille', 'base+fille'], '`Fille::salut` masque la version de la base, mais l’appelle explicitement avec `Base::salut()`.'),
        typ('Appelle le constructeur de la classe de base', `class Directeur : public Employe {\npublic:\n    Directeur(std::string n) : ___(n) {}\n};`, 'Employe', 'La base est initialisée dans la liste d’initialisation à l’aide de son nom.'),
        mc('Quelle relation l’héritage public représente-t-il bien ?', ['« Est un » : un chien est un animal', '« A un » : une voiture a un moteur', '« Utilise un » : un programme utilise un fichier', '« Contient plusieurs » : une liste contient des nombres'], 'Pour « a un », on utilise un attribut, pas l’héritage.'),
        ord('Déclare une classe Moto qui hérite publiquement de Vehicule', ['class', 'Moto', ':', 'public', 'Vehicule', '{', '};'], ['extends', 'private'], 'D’abord le nom de la nouvelle classe, puis `: public` et la classe de base.'),
        // Défi final
        out(`class Compte {\npublic:\n    Compte(double s) : solde(s) {}\n    double lire() const { return solde; }\nprotected:\n    double solde;\n};\n\nclass Epargne : public Compte {\npublic:\n    Epargne(double s, double taux) : Compte(s), taux(taux) {}\n    void annee() { solde += solde * taux; }\nprivate:\n    double taux;\n};\n\nEpargne e(1000, 0.1);\ne.annee();\ne.annee();\nstd::cout << e.lire();`, ['1210', '1200', '1100', '1000'], '`Epargne` peut modifier `solde` car il est `protected`. Les intérêts sont composés : 1000 → 1100 → 1210.'),
      ],
    },
    // ───────────── Jour 20 ─────────────
    {
      t: 'Polymorphisme',
      d: 'virtual, override, classes abstraites et destructeur virtuel.',
      guide: [
        { h: 'Le problème', p: [
          'Un pointeur ou une référence vers la classe de base peut désigner un objet dérivé. Mais par défaut, C++ choisit la méthode à appeler selon le type du pointeur, pas celui de l’objet réel.',
          'Si tu ranges un `Cercle` dans une `Forme&`, c’est donc la méthode de `Forme` qui serait appelée.' ] },
        { h: 'virtual et override', p: [
          'Une méthode `virtual` est choisie pendant l’exécution, selon le type réel de l’objet. C’est ce qu’on appelle le polymorphisme.',
          'Dans la dérivée, marque la méthode avec `override` : le compilateur vérifiera qu’elle remplace bien une méthode virtuelle de la base et te préviendra si tu te trompes de nom ou de paramètres.' ],
          code: `class Forme {\npublic:\n    virtual double aire() const { return 0; }\n    virtual ~Forme() = default;\n};\n\nclass Cercle : public Forme {\npublic:\n    explicit Cercle(double r) : r(r) {}\n    double aire() const override { return 3.14159 * r * r; }\nprivate:\n    double r;\n};\n\nclass Carre : public Forme {\npublic:\n    explicit Carre(double c) : c(c) {}\n    double aire() const override { return c * c; }\nprivate:\n    double c;\n};\n\nCercle ce(1);\nCarre ca(2);\nconst Forme& f = ca;\nstd::cout << f.aire();  // 4 : c’est l’aire du Carre qui est utilisée` },
        { h: 'Classes abstraites', p: [
          'Une méthode virtuelle pure (`= 0`) n’a pas d’implémentation dans la base : elle oblige les dérivées à l’écrire.',
          'Une classe avec au moins une méthode virtuelle pure est abstraite et on ne peut pas créer d’objets de ce type. Elle sert de contrat : elle définit ce que ses dérivées doivent savoir faire.' ],
          code: `class Notificateur {\npublic:\n    virtual void envoyer(const std::string& msg) const = 0;\n    virtual ~Notificateur() = default;\n};\n\n// Notificateur n;  // erreur : c’est une classe abstraite` },
        { h: 'Destructeur virtuel', p: [
          'Si tu détruis un objet dérivé avec `delete` via un pointeur vers la base et que le destructeur de la base n’est pas virtuel, le destructeur de la dérivée ne s’exécute pas : c’est un comportement indéfini.',
          'Règle : toute classe destinée à être utilisée de façon polymorphe a besoin de `virtual ~Base() = default;`.' ] },
        { h: 'Exemple réel : notifications par e-mail et par SMS', real: true, p: [
          'Une boutique prévient ses clients par plusieurs canaux. Le code qui envoie les notifications ne connaît que `Notificateur` ; ajouter un nouveau canal (par exemple des notifications push) n’oblige pas à le modifier.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nclass Notificateur {\npublic:\n    virtual void envoyer(const std::string& msg) const = 0;\n    virtual ~Notificateur() = default;\n};\n\nclass Email : public Notificateur {\npublic:\n    void envoyer(const std::string& msg) const override { std::cout << "[email] " << msg << "\\n"; }\n};\n\nclass Sms : public Notificateur {\npublic:\n    void envoyer(const std::string& msg) const override { std::cout << "[sms] " << msg << "\\n"; }\n};\n\nvoid prevenir_tous(const std::vector<const Notificateur*>& canaux, const std::string& msg) {\n    for (const Notificateur* c : canaux) c->envoyer(msg);\n}\n\nint main() {\n    Email e;\n    Sms s;\n    prevenir_tous({&e, &s}, "Ta commande est partie");\n    // [email] Ta commande est partie\n    // [sms] Ta commande est partie\n}` },
      ],
      x: [
        mc('Quel mot-clé fait choisir une méthode selon le type réel de l’objet ?', ['virtual', 'override', 'static', 'dynamic'], '`override` vérifie seulement que tu remplaces une méthode déjà virtuelle.'),
        out(`struct A { void salut() const { std::cout << "A"; } };\nstruct B : A { void salut() const { std::cout << "B"; } };\n\nB b;\nA& r = b;\nr.salut();\nb.salut();`, ['AB', 'BB', 'AA', 'BA'], 'Sans `virtual`, l’appel via `A&` utilise la méthode de `A`.'),
        out(`struct A { virtual void salut() const { std::cout << "A"; } };\nstruct B : A { void salut() const override { std::cout << "B"; } };\n\nB b;\nA& r = b;\nr.salut();`, ['B', 'A', 'AB', 'Erreur'], 'Avec `virtual`, c’est la méthode du type réel de l’objet qui est appelée, ici `B`.'),
        fill(`class Forme {\npublic:\n    virtual double aire() const ___ 0;\n};`, ['=', '==', ':', '->'], '`= 0` rend la méthode virtuelle pure et la classe abstraite.'),
        mc('Si `Forme` a une méthode virtuelle pure, que se passe-t-il avec `Forme f;` ?', ['Ça ne compile pas : on ne peut pas créer d’objet d’une classe abstraite', 'Elle est créée avec une aire de 0', 'Une exception est lancée', 'Elle devient un Cercle'], 'On ne peut créer que des objets des dérivées qui implémentent toutes les méthodes pures.'),
        typ('Indique que la méthode remplace une méthode virtuelle de la base', `class Carre : public Forme {\n    double c = 2;\npublic:\n    double aire() const ___ { return c * c; }\n};`, 'override', '`override` fait vérifier au compilateur que la méthode existe et est virtuelle dans la base.'),
        mc('Pourquoi une classe de base polymorphe a-t-elle besoin d’un destructeur virtuel ?', ['Pour que `delete` via un pointeur vers la base exécute aussi le destructeur de la dérivée', 'Pour rendre la classe abstraite', 'Pour pouvoir copier l’objet', 'Pour accélérer le programme'], 'Sans lui, détruire via la base est un comportement indéfini.'),
        // Défi final
        out(`struct Forme {\n    virtual double aire() const = 0;\n    virtual std::string nom() const { return "forme"; }\n    virtual ~Forme() = default;\n};\nstruct Rect : Forme {\n    double a, b;\n    Rect(double a, double b) : a(a), b(b) {}\n    double aire() const override { return a * b; }\n    std::string nom() const override { return "rect"; }\n};\nstruct Carre : Rect {\n    Carre(double c) : Rect(c, c) {}\n};\n\nRect r(2, 3);\nCarre c(4);\nstd::vector<const Forme*> v = {&r, &c};\ndouble total = 0;\nfor (auto f : v) total += f->aire();\nstd::cout << total << " " << v[1]->nom();`, ['22 rect', '22 forme', '22 carre', '10 rect'], 'Les aires valent 2 × 3 = 6 et 4 × 4 = 16. `Carre` ne redéfinit pas `nom()`, il hérite donc de la version de `Rect`.'),
      ],
    },
    // ───────────── Jour 21 ─────────────
    {
      t: 'Surcharge d’opérateurs',
      d: 'operator+, operator==, operator<, operator<< et foncteurs.',
      guide: [
        { h: 'Des opérateurs pour tes propres types', p: [
          'C++ permet de définir ce que font `+`, `==`, `<`, `<<` et presque tous les opérateurs avec tes classes. Ainsi, un vecteur mathématique s’additionne avec `a + b` au lieu de `a.additionner(b)`.',
          'On définit une fonction appelée `operator` suivie du symbole. Ne l’utilise que si le sens est évident : un `+` qui soustrait embrouillerait tout le monde.' ],
          code: `struct Vec2 {\n    double x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n    Vec2 operator*(double k) const { return {x * k, y * k}; }\n};\n\nVec2 a{1, 2}, b{3, 4};\nVec2 c = a + b * 2;   // {7, 10}` },
        { h: 'Comparer : operator== et operator<', p: [
          '`operator==` compare deux objets. En C++20, tu peux demander au compilateur de le générer en comparant tous les membres avec `= default`.',
          '`operator<` définit un ordre. Grâce à lui, `std::sort` et `std::set` savent déjà trier tes objets.' ],
          code: `struct Date {\n    int annee, mois, jour;\n    bool operator==(const Date&) const = default;   // C++20\n    bool operator<(const Date& o) const {\n        if (annee != o.annee) return annee < o.annee;\n        if (mois != o.mois) return mois < o.mois;\n        return jour < o.jour;\n    }\n};\n\nDate a{2024, 5, 1}, b{2024, 3, 9};\nstd::cout << (a == b) << (b < a);  // 01` },
        { h: 'Afficher avec operator<<', p: [
          'Pour écrire `std::cout << objet`, définis une fonction libre `operator<<` qui reçoit le flux et l’objet, écrit dans le flux et le renvoie.',
          'Renvoyer le `std::ostream&` permet d’enchaîner plusieurs `<<`. Si la fonction a besoin des membres privés, on la déclare `friend` dans la classe.' ],
          code: `std::ostream& operator<<(std::ostream& os, const Vec2& v) {\n    return os << "(" << v.x << ", " << v.y << ")";\n}\n\nstd::cout << Vec2{7, 10} << "\\n";  // (7, 10)` },
        { h: 'Foncteurs : operator()', p: [
          'Si une classe définit `operator()`, ses objets peuvent être appelés comme des fonctions. On les appelle foncteurs et, contrairement à une fonction normale, ils peuvent garder des données.',
          'Les opérateurs composés comme `+=` modifient l’objet et renvoient `*this` par référence.' ],
          code: `struct Multiplicateur {\n    int facteur;\n    int operator()(int x) const { return x * facteur; }\n};\n\nMultiplicateur triple{3};\nstd::cout << triple(5);  // 15` },
        { h: 'Exemple réel : des montants sans erreurs d’arrondi', real: true, p: [
          'Un café additionne des montants. Avec `double`, `0.1 + 0.2` ne donne pas exactement `0.3` ; l’argent est donc stocké en centimes entiers. Les opérateurs permettent d’utiliser la classe comme un nombre.' ],
          code: `#include <iostream>\n\nclass Argent {\npublic:\n    explicit Argent(long long centimes) : centimes(centimes) {}\n    Argent operator+(const Argent& o) const { return Argent(centimes + o.centimes); }\n    Argent operator*(int n) const { return Argent(centimes * n); }\n    bool operator<(const Argent& o) const { return centimes < o.centimes; }\n    friend std::ostream& operator<<(std::ostream& os, const Argent& a) {\n        long long c = a.centimes % 100;\n        return os << a.centimes / 100 << "," << (c < 10 ? "0" : "") << c << " €";\n    }\nprivate:\n    long long centimes;\n};\n\nint main() {\n    Argent cafe(150), tartine(225);\n    Argent total = cafe * 2 + tartine;\n    std::cout << total << "\\n";             // 5,25 €\n    std::cout << (total < Argent(500));     // 0\n}` },
      ],
      x: [
        mc('Comment s’appelle la fonction qui définit l’opérateur `+` d’une classe ?', ['operator+', 'plus', 'add', '__add__'], 'On écrit `operator` suivi du symbole. `__add__`, c’est Python.'),
        out(`struct Vec2 {\n    int x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n};\n\nVec2 a{1, 2}, b{3, 4};\nVec2 c = a + b;\nstd::cout << c.x << c.y;`, ['46', '13', '24', 'Erreur'], '`a + b` appelle `operator+` : x = 1 + 3 = 4 et y = 2 + 4 = 6.'),
        fill(`std::ostream& operator___(std::ostream& os, const Point& p) {\n    return os << p.x << "," << p.y;\n}`, ['<<', '>>', '+', '()'], 'Pour écrire `std::cout << p`, il faut surcharger `operator<<`.'),
        out(`struct Additionneur {\n    int base;\n    int operator()(int x) const { return base + x; }\n};\n\nAdditionneur a{10};\nstd::cout << a(5) << a(a(1));`, ['1521', '1511', '1520', 'Erreur'], '`a(5)` = 15. `a(1)` = 11 et `a(11)` = 21. Ils s’affichent à la suite : 1521.'),
        mc('Pourquoi `operator<<` renvoie-t-il `std::ostream&` ?', ['Pour pouvoir enchaîner plusieurs <<', 'Parce que le compilateur l’exige toujours', 'Pour aller plus vite', 'Pour lire au clavier'], '`std::cout << a << b` fonctionne parce que `(std::cout << a)` renvoie de nouveau le flux.'),
        typ('Demande au compilateur de générer la comparaison == (C++20)', `struct P {\n    int x, y;\n    bool operator==(const P&) const = ___;\n};`, 'default', '`= default` génère une comparaison membre par membre.'),
        out(`struct Tache {\n    std::string nom;\n    int priorite;\n    bool operator<(const Tache& o) const { return priorite < o.priorite; }\n};\n\nstd::vector<Tache> v = {{"b", 3}, {"a", 1}, {"c", 2}};\nstd::sort(v.begin(), v.end());\nfor (const auto& t : v) std::cout << t.nom;`, ['acb', 'abc', 'bca', 'cab'], '`std::sort` utilise `operator<`, qui trie par priorité : 1 (a), 2 (c), 3 (b).'),
        // Défi final
        out(`struct Euros {\n    int cent;\n    Euros operator+(const Euros& o) const { return {cent + o.cent}; }\n    Euros& operator+=(const Euros& o) { cent += o.cent; return *this; }\n    bool operator<(const Euros& o) const { return cent < o.cent; }\n};\n\nEuros a{250}, b{199};\nEuros c = a + b;\nc += Euros{51};\nstd::cout << c.cent / 100 << "." << c.cent % 100 << " " << (a < b) << (b < c);`, ['5.0 01', '5.00 01', '5.0 10', '4.99 01'], '250 + 199 + 51 = 500 centimes. 500 % 100 vaut 0 et s’affiche "0", pas "00". `a < b` est faux (0) et `b < c` est vrai (1).'),
      ],
    },
    // ───────────── Jour 22 ─────────────
    {
      t: 'Templates',
      d: 'template, typename, templates de fonctions et de classes.',
      guide: [
        { h: 'Le problème du code répété', p: [
          'Si tu veux une fonction `plus_grand` pour `int`, une autre pour `double` et une autre pour `std::string`, tu finirais par écrire trois fois la même chose.',
          'Les templates permettent d’écrire le code une seule fois avec un type générique. Le compilateur génère la version concrète pour chaque type utilisé.' ] },
        { h: 'Templates de fonctions', p: [
          '`template <typename T>` déclare un paramètre de type nommé `T`. À l’appel, le compilateur déduit `T` à partir des arguments.',
          'Si les arguments ne concordent pas (`plus_grand(3, 2.5)` : `T` est-il `int` ou `double` ?), ça ne compile pas. Tu peux indiquer le type à la main : `plus_grand<double>(3, 2.5)`.' ],
          code: `template <typename T>\nT plus_grand(T a, T b) {\n    return a > b ? a : b;\n}\n\nstd::cout << plus_grand(3, 7) << "\\n";        // 7\nstd::cout << plus_grand(2.5, 1.5) << "\\n";    // 2.5\nstd::cout << plus_grand<double>(3, 2.5);      // 3` },
        { h: 'Templates de classes', p: [
          'Une classe peut aussi être un template. En l’utilisant, on indique le type entre `< >` : `Boite<int>`.',
          'Tu en connais déjà : `std::vector<int>`, `std::map<std::string, int>` et `std::array<double, 7>` sont des templates de la bibliothèque standard.' ],
          code: `template <typename T>\nclass Boite {\npublic:\n    explicit Boite(T valeur) : valeur(valeur) {}\n    T lire() const { return valeur; }\nprivate:\n    T valeur;\n};\n\nBoite<int> a(42);\nBoite<std::string> b("salut");\nstd::cout << a.lire() << " " << b.lire();  // 42 salut` },
        { h: 'Plusieurs paramètres et valeurs constantes', p: [
          'Un template peut avoir plusieurs types (`template <typename K, typename V>`) et aussi des valeurs constantes connues à la compilation, comme une taille.',
          'Le code d’un template est généré à la compilation : il ne coûte rien à l’exécution. C’est pourquoi les templates s’écrivent généralement entièrement dans les fichiers `.h`.' ],
          code: `template <typename T, int N>\nclass Tampon {\npublic:\n    int capacite() const { return N; }\nprivate:\n    T donnees[N];\n};\n\nTampon<double, 8> t;\nstd::cout << t.capacite();  // 8` },
        { h: 'Exemple réel : des statistiques pour n’importe quel type', real: true, p: [
          'Un tableau de bord calcule la moyenne des visites (entiers) et des températures (décimaux). Un seul template sert dans les deux cas et pour tout futur type numérique.' ],
          code: `#include <iostream>\n#include <vector>\n\ntemplate <typename T>\ndouble moyenne(const std::vector<T>& v) {\n    if (v.empty()) return 0;\n    T somme{};\n    for (const T& x : v) somme += x;\n    return static_cast<double>(somme) / v.size();\n}\n\nint main() {\n    std::vector<int> visites = {120, 95, 143};\n    std::vector<double> temperatures = {21.5, 23.0, 19.5};\n    std::cout << moyenne(visites) << "\\n";       // 119.333\n    std::cout << moyenne(temperatures) << "\\n";  // 21.3333\n}` },
      ],
      x: [
        fill(`___ <typename T>\nT fois2(T x) {\n    return x * 2;\n}`, ['template', 'generic', 'typename', 'auto'], 'Les templates commencent par `template <typename T>`.'),
        out(`template <typename T>\nT plus_grand(T a, T b) { return a > b ? a : b; }\n\nstd::cout << plus_grand(4, 9) << plus_grand('a', 'z');`, ['9z', '4a', '9a', 'Erreur'], 'Une version est générée pour `int` (9) et une autre pour `char` (\'z\' vient après \'a\').'),
        mc('Avec `template <typename T> T plus_grand(T a, T b)`, que se passe-t-il avec `plus_grand(3, 2.5)` ?', ['Ça ne compile pas : T ne peut pas être int et double à la fois', 'Ça renvoie 3', 'Ça renvoie 2.5', 'Les deux sont convertis en int'], 'On corrige en précisant le type : `plus_grand<double>(3, 2.5)`.'),
        typ('Crée une Boite qui stocke un double', `template <typename T>\nclass Boite { /* ... */ };\n\nBoite<___> b(3.14);`, 'double', 'Le type concret s’indique entre `< >` quand on utilise le template de classe.'),
        out(`template <typename T>\nT somme3(T a, T b, T c) { return a + b + c; }\n\nstd::cout << somme3(1, 2, 3) << " " << somme3<std::string>("a", "b", "c");`, ['6 abc', '6 6', '123 abc', 'Erreur'], 'Avec `int`, on additionne des nombres ; avec `std::string`, `+` concatène.'),
        mc('Quand le compilateur génère-t-il le code d’un template ?', ['Quand il est utilisé avec un type concret', 'En lisant le mot template', 'Pendant l’exécution du programme', 'Jamais : les templates sont interprétés'], 'Pour chaque type différent avec lequel tu l’utilises, il génère une version.'),
        out(`template <int N>\nint puissance(int base) {\n    int r = 1;\n    for (int i = 0; i < N; i++) r *= base;\n    return r;\n}\n\nstd::cout << puissance<3>(2) + puissance<2>(5);`, ['33', '13', '31', 'Erreur'], '`puissance<3>(2)` = 8 et `puissance<2>(5)` = 25 : total 33.'),
        // Défi final
        out(`template <typename T>\nclass Pile {\npublic:\n    void empiler(T x) { donnees.push_back(x); }\n    T depiler() { T x = donnees.back(); donnees.pop_back(); return x; }\n    bool vide() const { return donnees.empty(); }\nprivate:\n    std::vector<T> donnees;\n};\n\nPile<std::string> p;\np.empiler("a");\np.empiler("b");\np.empiler("c");\nstd::string r;\nwhile (!p.vide()) r += p.depiler();\nPile<int> q;\nq.empiler(r.size());\nstd::cout << r << q.depiler();`, ['cba3', 'abc3', 'cba0', 'abc0'], 'Une pile rend d’abord ce qui est entré en dernier : c, b, a. Le texte "cba" a 3 caractères, stockés dans la `Pile<int>`.'),
      ],
    },
    // ───────────── Jour 23 ─────────────
    {
      t: 'Exceptions',
      d: 'throw, try, catch, exceptions standard et exceptions personnalisées.',
      guide: [
        { h: 'Des erreurs qu’on ne peut pas ignorer', p: [
          'Quand une fonction ne peut pas faire son travail, elle peut lancer une exception avec `throw`. L’exécution saute au `catch` le plus proche qui l’accepte.',
          'Le code qui peut échouer va dans `try`. Si personne ne capture l’exception, le programme s’arrête.' ],
          code: `#include <stdexcept>\n\ndouble diviser(double a, double b) {\n    if (b == 0) throw std::invalid_argument("division par zéro");\n    return a / b;\n}\n\ntry {\n    std::cout << diviser(10, 2) << "\\n";  // 5\n    std::cout << diviser(1, 0) << "\\n";   // lance : cette ligne n’affiche rien\n} catch (const std::invalid_argument& e) {\n    std::cout << "Erreur : " << e.what() << "\\n";\n}` },
        { h: 'Exceptions standard', p: [
          'L’en-tête `<stdexcept>` propose `std::runtime_error`, `std::invalid_argument` et `std::out_of_range`, entre autres. Toutes héritent de `std::exception`, dont la méthode `what()` renvoie le message.',
          'La bibliothèque standard les utilise : `std::stoi("salut")` lance `std::invalid_argument` et `v.at(10)` lance `std::out_of_range`.' ],
          code: `try {\n    int n = std::stoi("salut");\n} catch (const std::invalid_argument&) {\n    std::cout << "Ce n’est pas un nombre\\n";\n}\n\nstd::vector<int> v = {1, 2, 3};\ntry {\n    v.at(10);\n} catch (const std::out_of_range&) {\n    std::cout << "Indice hors limites\\n";\n}` },
        { h: 'Plusieurs catch et leur ordre', p: [
          'Un `try` peut avoir plusieurs `catch`. Le premier qui correspond est utilisé, de haut en bas : les types les plus précis vont donc avant `std::exception`.',
          '`catch (...)` capture n’importe quoi et doit venir en dernier. Capture toujours par référence constante (`const std::exception& e`) pour ne pas copier l’objet ni perdre d’information.' ] },
        { h: 'Exceptions personnalisées et RAII', p: [
          'Tu peux créer tes exceptions en héritant d’une exception standard. Ainsi, celui qui les capture sait exactement ce qui a échoué.',
          'Quand une exception est lancée, les objets locaux de chaque fonction traversée sont détruits. Grâce au RAII, les ressources sont quand même libérées.',
          '`noexcept` marque les fonctions qui promettent de ne rien lancer, comme les destructeurs.' ],
          code: `class SoldeInsuffisant : public std::runtime_error {\npublic:\n    SoldeInsuffisant() : std::runtime_error("solde insuffisant") {}\n};\n\nvoid retirer(double& solde, double montant) {\n    if (montant > solde) throw SoldeInsuffisant();\n    solde -= montant;\n}` },
        { h: 'Exemple réel : valider l’âge saisi par un utilisateur', real: true, p: [
          'Un formulaire reçoit l’âge sous forme de texte. Ce n’est peut-être pas un nombre, ou il est hors limites, et chaque cas mérite un message différent.',
          'Remarque que l’âge est d’abord calculé puis affiché : ainsi, aucun « Âge : » ne reste à moitié écrit si la conversion échoue.' ],
          code: `#include <iostream>\n#include <stdexcept>\n#include <string>\n\nint lire_age(const std::string& texte) {\n    int age = std::stoi(texte);            // peut lancer invalid_argument\n    if (age < 0 || age > 120)\n        throw std::out_of_range("âge hors limites");\n    return age;\n}\n\nint main() {\n    for (std::string saisie : {"34", "abc", "200"}) {\n        try {\n            int age = lire_age(saisie);\n            std::cout << "Âge : " << age << "\\n";\n        } catch (const std::invalid_argument&) {\n            std::cout << "'" << saisie << "' n’est pas un nombre\\n";\n        } catch (const std::out_of_range& e) {\n            std::cout << e.what() << "\\n";\n        }\n    }\n}\n// Âge : 34\n// 'abc' n’est pas un nombre\n// âge hors limites` },
      ],
      x: [
        fill(`if (b == 0)\n    ___ std::invalid_argument("b vaut zéro");`, ['throw', 'raise', 'catch', 'error'], 'En C++, les exceptions se lancent avec `throw`. `raise`, c’est Python.'),
        mc('Quelle méthode de `std::exception` renvoie le message d’erreur ?', ['what()', 'message()', 'getMessage()', 'error()'], 'Toutes les exceptions standard ont `what()`.'),
        out(`try {\n    std::cout << "A";\n    throw std::runtime_error("x");\n    std::cout << "B";\n} catch (const std::exception& e) {\n    std::cout << "C";\n}\nstd::cout << "D";`, ['ACD', 'ABCD', 'AC', 'ABD'], 'Après le `throw`, le reste du `try` ne s’exécute pas. Le `catch` s’exécute et le programme continue ensuite.'),
        out(`std::vector<int> v = {1, 2, 3};\ntry {\n    std::cout << v.at(5);\n} catch (const std::out_of_range&) {\n    std::cout << "hors";\n}`, ['hors', '0', 'Valeur aléatoire', 'Erreur de compilation'], '`at` vérifie l’indice et lance `std::out_of_range`.'),
        mc('Comment faut-il capturer les exceptions ?', ['Par référence constante : catch (const std::exception& e)', 'Par valeur : catch (std::exception e)', 'Avec un pointeur : catch (std::exception* e)', 'Peu importe'], 'Par référence, l’objet n’est pas copié et la partie dérivée n’est pas perdue.'),
        typ('Écris le catch qui capture n’importe quelle exception', `try {\n    traiter();\n} catch (___) {\n    std::cout << "Erreur inconnue";\n}`, '...', '`catch (...)` capture tout et doit venir en dernier.'),
        out(`try {\n    throw std::out_of_range("x");\n} catch (const std::invalid_argument&) {\n    std::cout << 1;\n} catch (const std::exception&) {\n    std::cout << 2;\n} catch (...) {\n    std::cout << 3;\n}`, ['2', '1', '3', '23'], '`out_of_range` n’est pas un `invalid_argument`, mais hérite bien de `std::exception`. Seul le premier `catch` qui correspond s’exécute.'),
        // Défi final
        out(`struct R {\n    char c;\n    R(char c) : c(c) {}\n    ~R() { std::cout << c; }\n};\n\nvoid f(int n) {\n    R r('f');\n    if (n > 1) throw std::runtime_error("grand");\n    std::cout << "ok";\n}\n\nint main() {\n    try {\n        R a('a');\n        f(1);\n        f(2);\n        std::cout << "fin";\n    } catch (const std::exception& e) {\n        std::cout << "[" << e.what() << "]";\n    }\n}`, ['okffa[grand]', 'okf[grand]fa', 'okff[grand]a', 'okffafin'], '`f(1)` affiche "ok" et détruit `r` en sortant (f). `f(2)` lance : `r` (f) puis `a` (a) sont détruits avant d’entrer dans le `catch`, qui affiche [grand]. "fin" n’est jamais affiché.'),
      ],
    },
    // ───────────── Jour 24 ─────────────
    {
      t: 'Algorithmes de la STL',
      d: 'sort, reverse, find, count, max_element et accumulate.',
      guide: [
        { h: '<algorithm> : ne réinvente pas la roue', p: [
          'La bibliothèque standard fournit des dizaines d’algorithmes testés et optimisés. Ils travaillent sur une plage indiquée par deux itérateurs : `v.begin()` et `v.end()`.',
          '`std::sort` trie du plus petit au plus grand ; avec `std::greater<int>()`, il trie dans l’autre sens. `std::reverse` inverse les éléments.' ],
          code: `#include <algorithm>\n\nstd::vector<int> v = {5, 2, 8, 1};\nstd::sort(v.begin(), v.end());                       // 1 2 5 8\nstd::sort(v.begin(), v.end(), std::greater<int>());  // 8 5 2 1\nstd::reverse(v.begin(), v.end());                    // 1 2 5 8` },
        { h: 'Chercher et compter', p: [
          '`std::find` renvoie un itérateur vers le premier élément égal à celui cherché, ou `end()` s’il ne le trouve pas. En soustrayant `begin()`, tu obtiens sa position.',
          '`std::count` compte les occurrences. `std::max_element` et `std::min_element` renvoient un itérateur : utilise `*` pour lire la valeur.' ],
          code: `std::vector<int> notes = {7, 9, 4, 9, 6};\nauto it = std::find(notes.begin(), notes.end(), 4);\nif (it != notes.end())\n    std::cout << "4 en position " << it - notes.begin() << "\\n";  // 2\nstd::cout << std::count(notes.begin(), notes.end(), 9) << "\\n";   // 2\nstd::cout << *std::max_element(notes.begin(), notes.end());       // 9` },
        { h: 'accumulate et <numeric>', p: [
          '`std::accumulate` (en-tête `<numeric>`) additionne tous les éléments à partir d’une valeur initiale.',
          'Attention : le type du résultat est celui de la valeur initiale. Avec `0`, l’addition se fait en `int` et perd les décimales ; avec `0.0`, elle se fait en `double`.' ],
          code: `#include <numeric>\n\nstd::vector<double> prix = {1.5, 2.5, 3.0};\nstd::cout << std::accumulate(prix.begin(), prix.end(), 0.0) << "\\n";  // 7\nstd::cout << std::accumulate(prix.begin(), prix.end(), 0);           // 6 : addition en int !` },
        { h: 'Ranges (C++20)', p: [
          'C++20 ajoute des versions dans `std::ranges` qui prennent le conteneur entier, sans `begin()` ni `end()` : `std::ranges::sort(v)`.',
          'Elles sont plus courtes et plus difficiles à mal utiliser. Demain, tu verras comment les combiner avec des lambdas pour filtrer et transformer.' ],
          code: `std::vector<int> v = {3, 1, 2};\nstd::ranges::sort(v);                  // 1 2 3\nauto it = std::ranges::find(v, 2);\nstd::cout << *std::ranges::max_element(v);  // 3` },
        { h: 'Exemple réel : classement des ventes', real: true, p: [
          'Le gérant d’une boutique passe en revue les ventes de la semaine : total, meilleur jour, nombre de jours avec exactement le même montant et les trois meilleurs montants. Sans écrire une seule boucle à la main.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <numeric>\n#include <vector>\n\nint main() {\n    std::vector<int> ventes = {320, 150, 480, 150, 275};\n    int total = std::accumulate(ventes.begin(), ventes.end(), 0);\n    auto meilleur = std::max_element(ventes.begin(), ventes.end());\n    std::cout << "Total : " << total << "\\n";                                   // 1375\n    std::cout << "Meilleur jour : " << (meilleur - ventes.begin()) + 1 << "\\n";  // 3\n    std::cout << "Jours à 150 : " << std::count(ventes.begin(), ventes.end(), 150) << "\\n";  // 2\n    std::sort(ventes.begin(), ventes.end(), std::greater<int>());\n    std::cout << "Top 3 : " << ventes[0] << " " << ventes[1] << " " << ventes[2] << "\\n";  // 480 320 275\n}` },
      ],
      x: [
        mc('Quel en-tête contient `std::sort` ?', ['<algorithm>', '<vector>', '<sort>', '<numeric>'], '`<numeric>` contient `accumulate` ; `<algorithm>`, presque tout le reste.'),
        out(`std::vector<int> v = {3, 1, 2};\nstd::sort(v.begin(), v.end());\nstd::cout << v[0] << v[2];`, ['13', '32', '31', '12'], 'Une fois trié, on a {1, 2, 3} : le premier est 1 et le dernier 3.'),
        fill(`std::vector<int> v = {4, 5, 6};\nint total = std::___(v.begin(), v.end(), 0);  // 15`, ['accumulate', 'sum', 'add_all', 'total'], '`std::accumulate` additionne la plage à partir de la valeur initiale.'),
        out(`std::vector<int> v = {4, 9, 2, 9};\nauto it = std::max_element(v.begin(), v.end());\nstd::cout << *it << " " << it - v.begin();`, ['9 1', '9 3', '4 0', '9 2'], 'En cas d’égalité, `max_element` renvoie le premier : le 9 en position 1.'),
        out(`std::vector<double> v = {0.5, 0.5, 0.5};\nstd::cout << std::accumulate(v.begin(), v.end(), 0);`, ['0', '1.5', '1', 'Erreur'], 'La valeur initiale `0` est un `int` : chaque somme partielle (0 + 0.5) est tronquée à 0.'),
        typ('Vérifie si find n’a pas trouvé la valeur', `auto it = std::find(v.begin(), v.end(), 7);\nif (it == v.___()) std::cout << "absent";`, 'end', 'S’il ne trouve pas la valeur, `find` renvoie `end()`.'),
        out(`std::string s = "radar";\nstd::string r = s;\nstd::reverse(r.begin(), r.end());\nstd::cout << (r == s) << std::count(s.begin(), s.end(), 'a');`, ['12', '02', '11', 'Erreur'], '"radar" est un palindrome : à l’envers, il est identique (1). Il contient deux lettres a.'),
        // Défi final
        out(`std::vector<int> v = {5, 3, 8, 3, 1};\nstd::sort(v.begin(), v.end(), std::greater<int>());\nstd::reverse(v.begin(), v.begin() + 2);\nint s = std::accumulate(v.begin() + 1, v.end(), 0);\nauto it = std::find(v.begin(), v.end(), 3);\nstd::cout << v[0] << " " << s << " " << (it - v.begin());`, ['5 15 2', '8 15 2', '5 20 2', '5 15 3'], 'Ordre décroissant : {8, 5, 3, 3, 1}. On inverse les deux premiers : {5, 8, 3, 3, 1}. La somme à partir de la position 1 vaut 8 + 3 + 3 + 1 = 15 et le premier 3 est en position 2.'),
      ],
    },
    // ───────────── Jour 25 ─────────────
    {
      t: 'Itérateurs et lambdas',
      d: 'begin, end, lambdas, captures par copie et par référence.',
      guide: [
        { h: 'Itérateurs', p: [
          'Un itérateur désigne une position dans un conteneur, comme un pointeur généralisé. `*it` lit l’élément et `++it` avance.',
          '`begin()` pointe sur le premier élément et `end()` sur la position qui suit le dernier : il ne faut jamais déréférencer `end()`.',
          'Ils fonctionnent de la même façon avec `vector`, `list`, `set` ou `map`. Dans une map, `it->first` est la clé et `it->second` la valeur.' ],
          code: `std::vector<std::string> noms = {"Léa", "Hugo", "Eva"};\nfor (auto it = noms.begin(); it != noms.end(); ++it)\n    std::cout << *it << " ";   // Léa Hugo Eva\nauto dernier = noms.end() - 1;\nstd::cout << *dernier;         // Eva` },
        { h: 'Lambdas', p: [
          'Une lambda est une fonction sans nom écrite là où on en a besoin : `[](paramètres) { corps }`.',
          'On peut la ranger dans une variable avec `auto` ou la passer directement à un algorithme, par exemple pour indiquer à `std::sort` comment trier.' ],
          code: `auto carre = [](int x) { return x * x; };\nstd::cout << carre(5) << "\\n";  // 25\n\nstd::vector<int> v = {5, -2, 8, -1};\nstd::sort(v.begin(), v.end(), [](int a, int b) {\n    return std::abs(a) < std::abs(b);   // trier par valeur absolue\n});\n// -1 -2 5 8` },
        { h: 'Captures', p: [
          'Les crochets indiquent quelles variables extérieures la lambda peut utiliser. `[x]` copie `x` au moment de créer la lambda ; `[&x]` l’utilise par référence et peut la modifier.',
          '`[=]` capture par copie tout ce qui est utilisé et `[&]` tout par référence. Mieux vaut capturer seulement ce dont tu as besoin : le code est plus clair.' ],
          code: `int limite = 10;\nint compteur = 0;\nauto compter = [limite, &compteur](int x) {\n    if (x > limite) compteur++;\n};\nfor (int x : {4, 15, 22, 9}) compter(x);\nstd::cout << compteur;  // 2` },
        { h: 'Algorithmes avec des lambdas', p: [
          '`std::count_if` compte les éléments qui remplissent une condition et `std::find_if` cherche le premier qui la remplit.',
          '`std::transform` applique une fonction à chaque élément. `std::erase_if` (C++20) supprime ceux qui remplissent une condition.' ],
          code: `std::vector<int> v = {3, 8, 12, 5, 20};\nint grands = std::count_if(v.begin(), v.end(), [](int x) { return x > 6; });   // 3\nauto pair = std::find_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });  // pointe sur 8\nstd::transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });\n// 30 80 120 50 200\nstd::erase_if(v, [](int x) { return x > 100; });   // 30 80 50` },
        { h: 'Exemple réel : filtrer et trier un catalogue', real: true, p: [
          'Une boutique en ligne retire les produits en rupture, trie le reste par prix et compte combien entrent dans le budget du client. La lambda `abordable` capture le budget par copie.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <string>\n#include <vector>\n\nstruct Produit { std::string nom; double prix; int stock; };\n\nint main() {\n    std::vector<Produit> catalogue = {\n        {"Casque", 59.9, 12}, {"Câble USB", 7.5, 0},\n        {"Clavier", 35.0, 4}, {"Écran", 189.0, 2}};\n    double budget = 100;\n\n    std::erase_if(catalogue, [](const Produit& p) { return p.stock == 0; });\n    std::sort(catalogue.begin(), catalogue.end(),\n              [](const Produit& a, const Produit& b) { return a.prix < b.prix; });\n    auto abordable = [budget](const Produit& p) { return p.prix <= budget; };\n\n    for (const auto& p : catalogue) std::cout << p.nom << " ";  // Clavier Casque Écran\n    std::cout << "\\nAbordables : " << std::count_if(catalogue.begin(), catalogue.end(), abordable);  // 2\n}` },
      ],
      x: [
        mc('Sur quoi pointe `v.end()` ?', ['Sur la position qui suit le dernier élément', 'Sur le dernier élément', 'Sur le premier élément', 'Sur nullptr'], 'C’est pourquoi les boucles utilisent `it != v.end()` et qu’on ne lit jamais `*v.end()`.'),
        out(`auto somme = [](int a, int b) { return a + b; };\nstd::cout << somme(2, 3) * 2;`, ['10', '7', '8', 'Erreur'], 'La lambda renvoie 5, multiplié ensuite par 2.'),
        fill(`int total = 0;\nauto ajouter = [___total](int x) { total += x; };`, ['&', '=', '*', 'this'], 'Pour modifier `total`, il faut le capturer par référence.'),
        out(`int x = 1;\nauto f = [x]() { return x * 10; };\nx = 5;\nstd::cout << f();`, ['10', '50', '1', 'Erreur'], 'La capture par copie garde la valeur qu’avait `x` à la création de la lambda : 1.'),
        out(`std::vector<int> v = {1, 4, 7, 10, 13};\nstd::cout << std::count_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });`, ['2', '3', '5', '14'], 'Seuls 4 et 10 sont pairs.'),
        typ('Cherche le premier élément négatif', `auto it = std::___(v.begin(), v.end(), [](int x) { return x < 0; });`, 'find_if', '`find_if` renvoie le premier élément qui remplit la condition.'),
        ord('Écris une lambda qui renvoie le double de x', ['[]', '(int x)', '{', 'return', 'x * 2;', '}'], ['def', '=>'], 'Crochets de capture, paramètres, puis le corps entre accolades.'),
        // Défi final
        out(`std::vector<int> v = {4, 1, 7, 2, 9};\nint seuil = 3, appels = 0;\nstd::sort(v.begin(), v.end(), [&appels](int a, int b) { appels++; return a > b; });\nstd::erase_if(v, [seuil](int x) { return x < seuil; });\nstd::transform(v.begin(), v.end(), v.begin(), [](int x) { return x - 1; });\nstd::cout << v.size() << " " << v.front() << v.back() << " " << (appels > 0);`, ['3 83 1', '3 93 1', '5 83 1', '3 38 1'], 'Ordre décroissant : {9, 7, 4, 2, 1}. On supprime ceux qui sont inférieurs à 3 : {9, 7, 4}. On retire 1 : {8, 6, 3}. `appels` a été modifié par référence, il est donc supérieur à 0.'),
      ],
    },
    // ───────────── Jour 26 ─────────────
    {
      t: 'Smart pointers',
      d: 'unique_ptr, shared_ptr, weak_ptr et RAII.',
      guide: [
        { h: 'Adieu delete', p: [
          'Les smart pointers (en-tête `<memory>`) sont des objets qui se comportent comme des pointeurs et libèrent la mémoire dans leur destructeur. C’est le RAII appliqué à la mémoire dynamique.',
          'En C++ moderne, on n’écrit presque jamais `new` ni `delete` : on utilise `std::make_unique` et `std::make_shared`.' ] },
        { h: 'unique_ptr : un seul propriétaire', p: [
          '`std::unique_ptr` est le propriétaire exclusif d’un objet. Quand il est détruit, il libère l’objet.',
          'Il ne peut pas être copié (il y aurait deux propriétaires), mais il peut être déplacé avec `std::move` : la propriété passe au nouveau pointeur et l’ancien vaut `nullptr`. C’est le choix par défaut.' ],
          code: `#include <memory>\n\nauto p = std::make_unique<int>(42);\nstd::cout << *p << "\\n";              // 42\n// auto q = p;                        // erreur : il ne peut pas être copié\nauto q = std::move(p);                // la propriété passe à q\nstd::cout << (p == nullptr) << "\\n";  // 1\n// à la sortie du bloc, q libère la mémoire` },
        { h: 'shared_ptr : propriété partagée', p: [
          '`std::shared_ptr` autorise plusieurs propriétaires. Il compte combien il y en a (`use_count()`) et libère l’objet quand le dernier disparaît.',
          'Il est un peu plus lent que `unique_ptr` : utilise-le seulement quand la propriété est vraiment partagée.' ],
          code: `auto a = std::make_shared<std::string>("rapport.pdf");\n{\n    auto b = a;                          // deux propriétaires\n    std::cout << a.use_count() << "\\n";  // 2\n}                                        // b disparaît\nstd::cout << a.use_count() << "\\n";      // 1` },
        { h: 'weak_ptr et les cycles', p: [
          'Si deux objets se pointent mutuellement avec des `shared_ptr`, le compteur n’atteint jamais 0 et aucun n’est libéré : c’est une fuite.',
          '`std::weak_ptr` observe un objet partagé sans en être propriétaire. Pour l’utiliser, on appelle `lock()`, qui renvoie un `shared_ptr` (vide si l’objet n’existe plus).' ],
          code: `std::weak_ptr<int> w;\n{\n    auto s = std::make_shared<int>(7);\n    w = s;\n    if (auto p = w.lock()) std::cout << *p << "\\n";  // 7\n}\nstd::cout << w.expired();  // 1 : l’objet n’existe plus` },
        { h: 'Exemple réel : des formes polymorphes sans fuites', real: true, p: [
          'Un logiciel de plans stocke des formes de types différents dans un même vecteur. Avec `unique_ptr`, chaque forme est libérée toute seule quand le vecteur est détruit, sans un seul `delete`.' ],
          code: `#include <iostream>\n#include <memory>\n#include <vector>\n\nstruct Forme {\n    virtual double aire() const = 0;\n    virtual ~Forme() = default;\n};\nstruct Cercle : Forme {\n    double r;\n    explicit Cercle(double r) : r(r) {}\n    double aire() const override { return 3.14159 * r * r; }\n};\nstruct Rect : Forme {\n    double a, b;\n    Rect(double a, double b) : a(a), b(b) {}\n    double aire() const override { return a * b; }\n};\n\nint main() {\n    std::vector<std::unique_ptr<Forme>> plan;\n    plan.push_back(std::make_unique<Cercle>(1));\n    plan.push_back(std::make_unique<Rect>(4, 5));\n    double total = 0;\n    for (const auto& f : plan) total += f->aire();\n    std::cout << "Surface : " << total << " m2\\n";  // Surface : 23.1416 m2\n}   // le vecteur est détruit et libère chaque forme` },
      ],
      x: [
        mc('Quel smart pointer utiliserais-tu pour un objet qui n’a qu’un seul propriétaire ?', ['std::unique_ptr', 'std::shared_ptr', 'std::weak_ptr', 'Un pointeur brut avec new'], '`unique_ptr` est le choix par défaut : il n’a aucun coût supplémentaire.'),
        fill(`auto p = std::___<int>(5);`, ['make_unique', 'new_unique', 'unique', 'create'], '`std::make_unique<T>(args)` crée l’objet et le `unique_ptr` en même temps.'),
        out(`auto a = std::make_shared<int>(1);\nauto b = a;\nauto c = b;\nstd::cout << a.use_count();`, ['3', '1', '2', '0'], '`a`, `b` et `c` partagent le même objet : trois propriétaires.'),
        mc('Si `p` est un `std::unique_ptr`, que se passe-t-il avec `auto q = p;` ?', ['Ça ne compile pas : un unique_ptr ne peut pas être copié', 'Les deux partagent l’objet', 'L’objet pointé est copié', 'p passe à nullptr'], 'Pour changer de propriétaire, il faut le déplacer : `auto q = std::move(p);`.'),
        typ('Transfère la propriété de p à q', `auto p = std::make_unique<int>(3);\nauto q = std::___(p);`, 'move', 'Après `std::move`, `q` est le propriétaire et `p` vaut `nullptr`.'),
        out(`struct T {\n    ~T() { std::cout << "x"; }\n};\n\nint main() {\n    auto a = std::make_shared<T>();\n    {\n        auto b = a;\n        std::cout << "1";\n    }\n    std::cout << "2";\n    a.reset();\n    std::cout << "3";\n}`, ['12x3', '1x23', '123x', 'x123'], 'À la sortie du bloc, `b` disparaît, mais `a` reste propriétaire. `a.reset()` libère le dernier propriétaire et l’objet est détruit à ce moment-là.'),
        mc('À quoi sert `std::weak_ptr` ?', ['À observer un objet partagé sans le garder en vie, et à casser les cycles', 'À avoir un seul propriétaire', 'À avoir des pointeurs jamais nuls', 'À réserver des tableaux'], 'Un `weak_ptr` ne compte pas dans `use_count()`.'),
        // Défi final
        out(`auto s = std::make_shared<int>(10);\nstd::weak_ptr<int> w = s;\nauto s2 = s;\n*s2 += 5;\nstd::cout << *s << s.use_count();\ns.reset();\nstd::cout << " " << w.expired();\ns2.reset();\nstd::cout << w.expired();`, ['152 01', '153 01', '152 11', '152 00'], '`s` et `s2` partagent l’entier, qui passe à 15 ; le `weak_ptr` ne compte pas, il y a donc 2 propriétaires. Après avoir libéré `s`, il reste `s2` (0) ; après avoir libéré `s2`, l’objet est détruit (1).'),
      ],
    },
    // ───────────── Jour 27 ─────────────
    {
      t: 'Sémantique de déplacement',
      d: 'lvalues, rvalues, std::move, constructeur de déplacement et règle du zéro.',
      guide: [
        { h: 'Copier coûte cher', p: [
          'Copier un vecteur d’un million d’éléments copie le million d’éléments. Mais si l’original ne servira plus, il suffit de récupérer sa mémoire interne : c’est le déplacement.',
          'Déplacer un `std::vector` ou un `std::string` ne copie que quelques pointeurs, quelle que soit sa taille.' ] },
        { h: 'lvalues et rvalues', p: [
          'Une lvalue est quelque chose qui a un nom et une adresse, comme une variable. Une rvalue est une valeur temporaire, comme le résultat de `a + b`, qui disparaît à la fin de l’instruction.',
          'Une référence vers une rvalue (`T&&`) ne peut se lier qu’à des temporaires. Une fonction sait ainsi qu’elle peut « voler » le contenu sans que personne ne s’en aperçoive.' ],
          code: `std::string a = "bonjour";\nstd::string& r1 = a;          // lvalue : a a un nom\nstd::string&& r2 = a + "!";   // rvalue : un temporaire\n// std::string&& r3 = a;      // erreur : a n’est pas un temporaire` },
        { h: 'std::move', p: [
          '`std::move(x)` ne déplace rien à lui seul : il transforme `x` en rvalue pour que la version qui déplace soit choisie.',
          'Après un déplacement, l’objet d’origine reste valide mais son contenu n’est pas garanti (un vecteur déplacé est vide). Ne le réutilise qu’après lui avoir donné une nouvelle valeur.' ],
          code: `std::vector<int> grand(1'000'000, 7);\nstd::vector<int> cible = std::move(grand);  // récupère la mémoire, sans copie\nstd::cout << cible.size() << " " << grand.size();  // 1000000 0` },
        { h: 'Constructeur de déplacement et règle du zéro', p: [
          'Si ta classe gère une ressource à la main (un `new[]`), elle a besoin d’un destructeur, d’une copie et d’un déplacement écrits par toi : c’est la règle des cinq. Le constructeur de déplacement prend la ressource et laisse l’original vide.',
          'Bien mieux : la règle du zéro. Si les membres se gèrent tout seuls (`std::string`, `std::vector`, `std::unique_ptr`), n’écris rien de tout ça. Le compilateur génère la bonne copie et le bon déplacement.' ],
          code: `class Tampon {   // gère la mémoire à la main : règle des cinq\npublic:\n    explicit Tampon(std::size_t n) : donnees(new int[n]), n(n) {}\n    Tampon(Tampon&& autre) noexcept : donnees(autre.donnees), n(autre.n) {\n        autre.donnees = nullptr;   // l’original n’est plus propriétaire\n        autre.n = 0;\n    }\n    ~Tampon() { delete[] donnees; }\n    // ... il manquerait la copie et les affectations\nprivate:\n    int* donnees;\n    std::size_t n;\n};\n\nclass Playlist {   // règle du zéro : rien à écrire\n    std::string nom;\n    std::vector<std::string> titres;\n};` },
        { h: 'Exemple réel : générer des enregistrements sans copies', real: true, p: [
          'Un service génère cent mille enregistrements de commandes. Chaque ligne est déplacée dans le vecteur au lieu d’être copiée, et le vecteur entier est renvoyé par valeur : le compilateur le déplace ou supprime la copie.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nstd::vector<std::string> generer_enregistrements(int n) {\n    std::vector<std::string> enregistrements;\n    enregistrements.reserve(n);\n    for (int i = 1; i <= n; i++) {\n        std::string ligne = "commande-" + std::to_string(i);\n        enregistrements.push_back(std::move(ligne));   // déplace au lieu de copier\n    }\n    return enregistrements;   // le vecteur n’est pas copié\n}\n\nint main() {\n    auto enr = generer_enregistrements(100000);\n    std::cout << enr.size() << " " << enr.back() << "\\n";  // 100000 commande-100000\n}` },
      ],
      x: [
        mc('Que fait réellement `std::move(x)` ?', ['Il transforme x en rvalue pour qu’il puisse être déplacé ; il ne déplace rien à lui seul', 'Il copie x à un autre endroit de la mémoire', 'Il supprime x', 'Il déplace x sur le tas'], 'Le déplacement est fait par le constructeur ou l’affectation de déplacement choisis grâce à cette conversion.'),
        out(`std::vector<int> a = {1, 2, 3};\nstd::vector<int> b = std::move(a);\nstd::cout << b.size() << a.size();`, ['30', '33', '03', 'Erreur'], '`b` récupère la mémoire de `a`, et un vecteur déplacé est vide.'),
        fill(`void stocker(std::string___ s);  // n’accepte que des temporaires`, ['&&', '&', '*', '**'], '`T&&` est une référence vers une rvalue : elle se lie à des valeurs temporaires.'),
        mc('Que dit la règle du zéro ?', ['Si tes membres gèrent leurs ressources, n’écris ni destructeur, ni copie, ni déplacement', 'Les classes ne doivent pas avoir d’attributs publics', 'Les pointeurs doivent être initialisés à zéro', 'Il ne faut jamais utiliser new'], 'Le compilateur génère des versions correctes à partir de celles des membres.'),
        typ('Ajoute le texte au vecteur sans le copier', `std::string ligne = "donnee";\nstd::vector<std::string> v;\nv.push_back(std::___(ligne));`, 'move', 'Avec `std::move`, `push_back` utilise la version qui déplace.'),
        mc('Laquelle de ces expressions est une rvalue ?', ['a + b', 'a', 'v[0]', '*p'], '`a + b` produit une valeur temporaire sans nom ; les autres désignent des objets qui existent déjà.'),
        out(`std::string a = "bonjour";\nstd::string b = a;\nstd::string c = std::move(b);\nc += "!";\nstd::cout << a << " " << c;`, ['bonjour bonjour!', 'bonjour! bonjour!', 'bonjour bonjour', 'Erreur'], '`b` est une copie de `a` ; ensuite, `c` récupère le contenu de `b`. Ni `a` ni son contenu ne sont touchés.'),
        // Défi final
        out(`struct S {\n    S() {}\n    S(const S&) { std::cout << "C"; }\n    S(S&&) noexcept { std::cout << "M"; }\n};\n\nS a;\nS b = a;\nS c = std::move(a);\nS d = S(b);\nstd::vector<S> v;\nv.reserve(2);\nv.push_back(b);\nv.push_back(std::move(c));`, ['CMCCM', 'CMCMCM', 'CCCCM', 'CMCMM'], '`b = a` copie (C) et `std::move(a)` déplace (M). `S(b)` copie (C) et, depuis C++17, le temporaire est construit directement dans `d`, sans déplacement. Avec l’espace réservé, `push_back(b)` copie (C) et `push_back(std::move(c))` déplace (M).'),
      ],
    },
    // ───────────── Jour 28 ─────────────
    {
      t: 'Fichiers',
      d: 'ofstream, ifstream, getline, modes d’ouverture et format des nombres.',
      guide: [
        { h: 'Écrire avec ofstream', p: [
          '`std::ofstream` (en-tête `<fstream>`) ouvre un fichier en écriture et s’utilise exactement comme `std::cout`.',
          'Vérifie toujours qu’il s’est ouvert : `if (!sortie)`. Le fichier se ferme tout seul quand l’objet est détruit (RAII).' ],
          code: `#include <fstream>\n\nstd::ofstream sortie("notes.txt");\nif (!sortie) {\n    std::cerr << "Impossible d’ouvrir le fichier\\n";\n    return 1;\n}\nsortie << "Léa 8.5\\n";\nsortie << "Hugo 6\\n";\n// à la sortie du bloc, le fichier est fermé` },
        { h: 'Lire avec ifstream et getline', p: [
          '`std::ifstream` ouvre un fichier en lecture. Avec `>>`, tu lis valeur par valeur, séparées par des espaces ; avec `std::getline`, tu lis des lignes entières.',
          'Place la lecture dans la condition du `while` : la boucle s’arrête toute seule à la fin du fichier ou si une valeur ne correspond pas.' ],
          code: `std::ifstream entree("notes.txt");\nstd::string nom;\ndouble note;\nwhile (entree >> nom >> note)\n    std::cout << nom << ": " << note << "\\n";\n\nstd::ifstream journal("app.log");\nstd::string ligne;\nint erreurs = 0;\nwhile (std::getline(journal, ligne))\n    if (ligne.find("ERROR") != std::string::npos) erreurs++;` },
        { h: 'Modes d’ouverture', p: [
          'Par défaut, `std::ofstream` efface le contenu du fichier à l’ouverture (`std::ios::trunc`). Pour ajouter à la fin, utilise `std::ios::app`.',
          '`std::ios::binary` empêche la transformation des sauts de ligne, indispensable pour des images ou des données binaires.' ],
          code: `std::ofstream journal("app.log", std::ios::app);   // ajoute sans effacer\njournal << "Utilisateur connecté\\n";` },
        { h: 'Formater les nombres', p: [
          'L’en-tête `<iomanip>` contrôle l’écriture des nombres, à l’écran comme dans les fichiers. `std::fixed` avec `std::setprecision(2)` affiche exactement deux décimales, idéal pour les prix.',
          '`std::setw(n)` réserve `n` caractères pour la valeur suivante, pratique pour aligner des colonnes. `fixed` et `setprecision` restent actifs jusqu’à ce que tu les changes ; `setw` ne touche que la valeur suivante.' ],
          code: `#include <iomanip>\n\ndouble total = 60.4879;\nstd::cout << std::fixed << std::setprecision(2) << total << "\\n";  // 60.49\nstd::cout << std::setw(8) << 3.5 << "|\\n";                        //     3.50|` },
        { h: 'Exemple réel : traiter un CSV de dépenses', real: true, p: [
          'Tu exportes les dépenses de ta banque dans un CSV (`date,libelle,montant`). Le programme saute l’en-tête, découpe chaque ligne sur les virgules avec `std::getline` et écrit un rapport avec deux décimales.' ],
          code: `#include <fstream>\n#include <iomanip>\n#include <iostream>\n#include <sstream>\n#include <string>\n\nint main() {\n    std::ifstream csv("depenses.csv");\n    if (!csv) { std::cerr << "depenses.csv est introuvable\\n"; return 1; }\n    std::string ligne;\n    std::getline(csv, ligne);            // saute l’en-tête\n    double total = 0;\n    int lignes = 0;\n    while (std::getline(csv, ligne)) {\n        std::istringstream ss(ligne);\n        std::string date, libelle, montant;\n        std::getline(ss, date, ',');\n        std::getline(ss, libelle, ',');\n        std::getline(ss, montant, ',');\n        total += std::stod(montant);\n        lignes++;\n    }\n    std::ofstream rapport("rapport.txt");\n    rapport << std::fixed << std::setprecision(2)\n            << lignes << " dépenses, total " << total << " euros\\n";\n}` },
      ],
      x: [
        mc('Quelle classe sert à écrire dans un fichier ?', ['std::ofstream', 'std::ifstream', 'std::istream', 'std::filestream'], 'Le o vient de output (sortie) et le i de input (entrée).'),
        fill(`std::ifstream f("donnees.txt");\nstd::string ligne;\nwhile (std::___(f, ligne)) {\n    std::cout << ligne << "\\n";\n}`, ['getline', 'readline', 'read', 'nextLine'], '`std::getline` lit une ligne entière et renvoie le flux, qui est faux à la fin du fichier.'),
        out(`std::cout << std::fixed << std::setprecision(2) << 3.14159;`, ['3.14', '3.1', '3.14159', '3.142'], 'Avec `std::fixed`, `setprecision(2)` fixe deux décimales.'),
        mc('Quel mode ajoute du texte à la fin du fichier sans effacer son contenu ?', ['std::ios::app', 'std::ios::trunc', 'std::ios::in', 'std::ios::binary'], '`app` vient de append (ajouter).'),
        typ('Vérifie si le fichier n’a pas pu être ouvert', `std::ifstream f("config.txt");\nif (___f) {\n    std::cerr << "Introuvable";\n}`, '!', 'Un flux qui n’a pas pu s’ouvrir vaut faux, donc `!f` est vrai.'),
        out(`std::istringstream ss("lea,32,Lyon");\nstd::string champ;\nint n = 0;\nwhile (std::getline(ss, champ, ',')) n++;\nstd::cout << n << " " << champ;`, ['3 Lyon', '2 Lyon', '3 lea', '1 lea,32,Lyon'], 'Avec la virgule comme séparateur, il y a trois champs, et `champ` garde le dernier lu.'),
        ord('Ouvre log.txt pour ajouter à la fin', ['std::ofstream', 'log(', '"log.txt",', 'std::ios::app', ');'], ['std::ifstream', 'std::ios::trunc'], 'On écrit avec `ofstream` et le mode `std::ios::app`.'),
        // Défi final
        out(`{\n    std::ofstream f("t.txt");\n    f << "3 4\\n5";\n}\n{\n    std::ofstream f("t.txt", std::ios::app);\n    f << " 6";\n}\nstd::ifstream in("t.txt");\nint x, somme = 0, n = 0;\nwhile (in >> x) { somme += x; n++; }\nstd::cout << n << " " << std::fixed << std::setprecision(1) << somme / static_cast<double>(n);`, ['4 4.5', '3 4.0', '2 3.5', '4 4.50'], 'Le premier bloc écrit "3 4", un saut de ligne et "5" ; le second ajoute " 6" sans effacer. `>>` saute les espaces et les sauts de ligne : il lit 4 nombres dont la somme vaut 18. La moyenne, avec une décimale, vaut 4.5.'),
      ],
    },
    // ───────────── Jour 29 ─────────────
    {
      t: 'Concurrence',
      d: 'std::thread, join, mutex, atomic et async.',
      guide: [
        { h: 'Plusieurs threads à la fois', p: [
          'Un thread (`std::thread`, en-tête `<thread>`) exécute une fonction en parallèle du reste du programme. On profite ainsi des différents cœurs du processeur.',
          '`join()` attend la fin du thread. Si un `std::thread` est détruit sans `join()` ni `detach()`, le programme s’arrête avec `std::terminate`. `std::jthread` (C++20) fait le `join` tout seul.',
          'L’ordre d’exécution des threads n’est pas garanti : chaque exécution peut être différente.' ],
          code: `#include <thread>\n\nvoid tache(int id) {\n    std::cout << "Thread " << id << "\\n";\n}\n\nint main() {\n    std::thread a(tache, 1);\n    std::thread b(tache, 2);\n    a.join();\n    b.join();   // attend la fin des deux\n}` },
        { h: 'Conditions de course', p: [
          'Si deux threads modifient la même donnée en même temps sans se coordonner, il y a une condition de course : le résultat est imprévisible et c’est techniquement un comportement indéfini.',
          '`compteur++` ressemble à une seule opération, mais il y en a trois : lire, additionner et écrire. Deux threads peuvent lire la même valeur et perdre un incrément.' ] },
        { h: 'mutex et lock_guard', p: [
          'Un `std::mutex` (en-tête `<mutex>`) ne laisse passer qu’un thread à la fois dans la section protégée.',
          '`std::lock_guard` verrouille le mutex à sa création et le libère à sa destruction (RAII). Tu n’oublies jamais de le libérer, même si une exception est lancée.' ],
          code: `std::mutex m;\nint compteur = 0;\n\nvoid ajouter() {\n    for (int i = 0; i < 100000; i++) {\n        std::lock_guard<std::mutex> verrou(m);\n        compteur++;\n    }\n}\n// avec deux threads qui exécutent ajouter(), compteur finit à 200000` },
        { h: 'atomic, async et future', p: [
          'Pour un simple compteur, `std::atomic<int>` (en-tête `<atomic>`) suffit : ses opérations ne peuvent pas être interrompues à moitié.',
          '`std::async` (en-tête `<future>`) lance une tâche et renvoie un `std::future`. `get()` attend le résultat et le renvoie. C’est la façon la plus simple de calculer quelque chose en parallèle.' ],
          code: `std::atomic<int> visites{0};\nvisites++;   // sûr entre threads\n\nauto f = std::async(std::launch::async, [] { return 6 * 7; });\n// ... le thread principal fait autre chose ...\nstd::cout << f.get();  // 42` },
        { h: 'Exemple réel : additionner un énorme vecteur en deux moitiés', real: true, p: [
          'Une analyse de données additionne dix millions de valeurs. Une moitié est calculée dans un autre thread avec `std::async` pendant que le thread principal additionne l’autre. `std::cref` passe le vecteur par référence pour ne pas le copier.' ],
          code: `#include <functional>\n#include <future>\n#include <iostream>\n#include <numeric>\n#include <vector>\n\nlong long somme(const std::vector<int>& v, std::size_t debut, std::size_t fin) {\n    return std::accumulate(v.begin() + debut, v.begin() + fin, 0LL);\n}\n\nint main() {\n    std::vector<int> donnees(10'000'000, 1);\n    std::size_t moitie = donnees.size() / 2;\n    auto partie1 = std::async(std::launch::async, somme, std::cref(donnees), 0, moitie);\n    long long partie2 = somme(donnees, moitie, donnees.size());\n    std::cout << partie1.get() + partie2 << "\\n";  // 10000000\n}` },
      ],
      x: [
        mc('Que fait `t.join()` ?', ['Il attend la fin du thread t', 'Il démarre le thread', 'Il arrête le thread de force', 'Il fusionne deux threads'], 'Le thread démarre à la construction du `std::thread` ; `join` attend qu’il se termine.'),
        fill(`std::mutex m;\nint compteur = 0;\n\nvoid ajouter() {\n    std::___<std::mutex> verrou(m);\n    compteur++;\n}`, ['lock_guard', 'mutex_lock', 'guard', 'synchronized'], '`std::lock_guard` verrouille le mutex et le libère à la sortie du bloc.'),
        mc('Qu’est-ce qu’une condition de course ?', ['Plusieurs threads accèdent en même temps à la même donnée, au moins un la modifie et ils ne se synchronisent pas', 'Un thread qui se termine avant un autre', 'Une boucle trop rapide', 'Un thread qui en attend un autre avec join'], 'On l’évite avec `std::mutex`, `std::atomic` ou en ne partageant pas les données.'),
        out(`std::atomic<int> c{0};\nstd::thread a([&] { for (int i = 0; i < 1000; i++) c++; });\nstd::thread b([&] { for (int i = 0; i < 1000; i++) c++; });\na.join();\nb.join();\nstd::cout << c;`, ['2000', '1000', 'Une valeur imprévisible', '0'], 'Avec `std::atomic`, aucun incrément n’est perdu.'),
        typ('Récupère le résultat de la tâche', `auto f = std::async(std::launch::async, [] { return 6 * 7; });\nint r = f.___();`, 'get', '`get()` attend la fin de la tâche et renvoie son résultat.'),
        mc('Que se passe-t-il si un `std::thread` est détruit sans `join()` ni `detach()` ?', ['Le programme s’arrête avec std::terminate', 'Le thread est joint automatiquement', 'Rien', 'Le thread recommence'], '`std::jthread` (C++20) évite le problème car il fait `join` dans son destructeur.'),
        out(`auto fois2 = [](int x) { return x * 2; };\nauto f1 = std::async(std::launch::async, fois2, 10);\nauto f2 = std::async(std::launch::async, fois2, 21);\nstd::cout << f1.get() + f2.get();`, ['62', '31', '2042', 'Erreur'], 'Les tâches renvoient 20 et 42, et `get()` attend chacune avant l’addition.'),
        // Défi final
        out(`std::vector<int> r(3);\nstd::vector<std::thread> threads;\nfor (int i = 0; i < 3; i++)\n    threads.emplace_back([&r, i] { r[i] = (i + 1) * (i + 1); });\nfor (auto& t : threads) t.join();\nstd::cout << r[0] + r[1] + r[2] << " " << threads.size();`, ['14 3', '6 3', '14 0', 'Une valeur imprévisible'], 'Chaque thread écrit dans sa propre case, donc pas de condition de course. `i` est capturé par copie ; par référence, ce serait une erreur, car il change pendant que les threads démarrent. Après les `join` : 1 + 4 + 9 = 14.'),
      ],
    },
    // ───────────── Jour 30 ─────────────
    {
      t: 'Conclusion',
      d: 'Révision finale, outils du quotidien et prochaines étapes.',
      guide: [
        { h: 'Ce que tu as appris', p: [
          'Tu as parcouru C++ de `std::cout` jusqu’aux threads : types, conteneurs de la STL, fonctions, références et pointeurs, mémoire dynamique, classes, héritage, polymorphisme, templates, exceptions, algorithmes, lambdas, smart pointers, déplacement, fichiers et concurrence.',
          'L’idée qui relie tout, c’est le RAII : chaque ressource a un propriétaire qui la libère dans son destructeur. Si tu l’appliques, ton code C++ sera à la fois sûr et rapide.' ] },
        { h: 'Le C++ moderne en quelques lignes', p: [
          'Cet extrait rassemble plusieurs pièces du cours : un struct, un vecteur, `std::sort` avec une lambda, des structured bindings et `std::accumulate`.',
          'Remarque ce qui n’apparaît pas : ni `new`, ni `delete`, ni boucles à indices sources d’erreurs.' ],
          code: `struct Eleve { std::string nom; double note; };\n\nstd::vector<Eleve> classe = {{"Eva", 8.5}, {"Leo", 6.0}, {"Léa", 9.2}};\nstd::sort(classe.begin(), classe.end(),\n          [](const Eleve& a, const Eleve& b) { return a.note > b.note; });\nfor (const auto& [nom, note] : classe)\n    std::cout << nom << " " << note << "\\n";   // Léa 9.2, Eva 8.5, Leo 6\ndouble moyenne = std::accumulate(classe.begin(), classe.end(), 0.0,\n    [](double s, const Eleve& e) { return s + e.note; }) / classe.size();` },
        { h: 'Les outils du quotidien', p: [
          'Compile avec les avertissements : `g++ -std=c++20 -Wall -Wextra -O2`. Les sanitizers (`-fsanitize=address,undefined`) détectent les accès hors limites et les comportements indéfinis pendant tes tests.',
          'Les projets à nombreux fichiers utilisent CMake pour décrire la compilation. Un débogueur (gdb, lldb ou celui de ton éditeur) et `clang-format` complètent la boîte à outils.' ],
          code: `# CMakeLists.txt\ncmake_minimum_required(VERSION 3.20)\nproject(MonApp CXX)\nset(CMAKE_CXX_STANDARD 20)\nadd_executable(monapp src/main.cpp src/boutique.cpp)\n\n# Dans le terminal :\n# cmake -B build && cmake --build build` },
        { h: 'Erreurs typiques et prochaines étapes', p: [
          'Les bugs les plus fréquents : variables non initialisées, division entière inattendue, indices hors limites, `=` au lieu de `==`, références ou pointeurs pendants et données partagées entre threads sans protection.',
          'Pour continuer : entraîne-toi avec de petits projets (un gestionnaire de tâches, un jeu en console, un analyseur de logs), utilise cppreference.com comme référence et lis « A Tour of C++ » de Bjarne Stroustrup. Explore ensuite Qt pour les interfaces, Unreal Engine pour les jeux ou la programmation système.' ] },
        { h: 'Exemple réel : un mini gestionnaire d’inventaire', real: true, p: [
          'Un entrepôt enregistre les entrées et les sorties de matériel. La classe protège ses données, utilise une `std::map`, lance des exceptions quand une opération n’est pas valide, et un algorithme avec une lambda compte les produits en rupture.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <map>\n#include <stdexcept>\n#include <string>\n\nclass Inventaire {\npublic:\n    void entree(const std::string& produit, int qte) {\n        if (qte <= 0) throw std::invalid_argument("quantité invalide");\n        stock[produit] += qte;\n    }\n    void sortie(const std::string& produit, int qte) {\n        auto it = stock.find(produit);\n        if (it == stock.end() || it->second < qte)\n            throw std::runtime_error("stock insuffisant de " + produit);\n        it->second -= qte;\n    }\n    int en_rupture() const {\n        return std::count_if(stock.begin(), stock.end(),\n                             [](const auto& paire) { return paire.second == 0; });\n    }\nprivate:\n    std::map<std::string, int> stock;\n};\n\nint main() {\n    Inventaire inv;\n    inv.entree("vis", 500);\n    inv.entree("ecrous", 20);\n    inv.sortie("ecrous", 20);\n    try {\n        inv.sortie("rondelles", 5);\n    } catch (const std::exception& e) {\n        std::cout << "Attention : " << e.what() << "\\n";   // Attention : stock insuffisant de rondelles\n    }\n    std::cout << "En rupture : " << inv.en_rupture() << "\\n";  // En rupture : 1\n}` },
      ],
      x: [
        mc('Quelle option de g++ active la plupart des avertissements utiles ?', ['-Wall', '-O2', '-g', '-o'], '`-Wall` (et `-Wextra`) signalent des erreurs comme les variables inutilisées ou un `=` dans une condition.'),
        out(`int a = 2;\nint& r = a;\nint* p = &a;\nr *= 3;\n*p += 1;\nstd::cout << a;`, ['7', '6', '3', '9'], '`r` et `*p` désignent tous deux `a` : 2 × 3 = 6 et 6 + 1 = 7.'),
        mc('Quel conteneur utiliserais-tu pour compter combien de fois apparaît chaque mot, triés par ordre alphabétique ?', ['std::map<std::string, int>', 'std::vector<std::string>', 'std::set<std::string>', 'std::array<int, 26>'], 'Une `map` relie chaque mot à son compteur et garde les clés triées.'),
        fill(`auto p = std::make_unique<Cercle>(2.0);\nstd::cout << p___aire();`, ['->', '.', '::', '*'], 'Avec un pointeur (intelligent ou non), on accède aux méthodes avec `->`.'),
        typ('Trie le vecteur du plus grand au plus petit', `std::sort(v.begin(), v.end(), [](int a, int b) { return a ___ b; });`, '>', 'La lambda doit renvoyer `true` quand `a` doit passer avant `b`.'),
        out(`struct A {\n    virtual int f() const { return 1; }\n    virtual ~A() = default;\n};\nstruct B : A {\n    int f() const override { return 2; }\n};\n\nstd::unique_ptr<A> p = std::make_unique<B>();\nstd::cout << p->f() + A().f();`, ['3', '2', '4', 'Erreur'], '`p` pointe sur un `B`, donc `f()` vaut 2. `A().f()` crée un `A` temporaire et vaut 1.'),
        ord('Déclare un vecteur de unique_ptr vers Forme nommé plan', ['std::vector<', 'std::unique_ptr<', 'Forme', '>>', 'plan;'], ['std::shared_ptr<', '*'], 'Le type des éléments se place entre les chevrons de `std::vector`.'),
        // Défi final
        out(`struct Commande { std::string client; double total; };\n\nstd::vector<Commande> v = {{"lea", 30}, {"hugo", 120}, {"eva", 75}, {"lea", 45}};\nstd::map<std::string, double> par_client;\nfor (const auto& [c, t] : v) par_client[c] += t;\nauto meilleur = std::max_element(par_client.begin(), par_client.end(),\n    [](const auto& a, const auto& b) { return a.second < b.second; });\nint grosses = std::count_if(v.begin(), v.end(),\n    [](const Commande& c) { return c.total > 50; });\nstd::cout << par_client.size() << " " << meilleur->first << " " << grosses;`, ['3 hugo 2', '4 hugo 2', '3 lea 2', '3 hugo 3'], 'Par client : eva 75, hugo 120 et lea 75, soit trois clés. Le plus gros total est celui de hugo. Seules deux commandes dépassent 50 : 120 et 75.'),
      ],
    },
  ],
}))(Sintaxis);
