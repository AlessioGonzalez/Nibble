/* C++ · Italiano */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('cpp', 'it', {
  tag: 'Prestazioni e controllo diretto della memoria.',
  days: [
    // ───────────── Giorno 1 ─────────────
    {
      id: 'cpp-intro',
      t: 'Introduzione',
      d: 'Che cos’è C++, compilare, main, iostream e std::cout.',
      guide: [
        { h: 'Che cos’è C++?', p: [
          'C++ è un linguaggio compilato creato da Bjarne Stroustrup a partire dal 1979 come estensione del C. Unisce la velocità del C a strumenti moderni come classi, template e una grande libreria standard.',
          'Lo trovi nei browser come Chrome, nei motori di gioco come Unreal Engine, nei database come MySQL e nei sistemi di trading dove ogni microsecondo conta.',
          'Il linguaggio evolve per versioni: C++11 lo ha modernizzato e poi sono arrivati C++14, C++17, C++20 e C++23. In questo corso usiamo C++17/20.' ] },
        { h: 'Il tuo primo programma', p: [
          'Salva questo codice in `ciao.cpp`. Ogni programma inizia a eseguirsi dalla funzione `int main()`.',
          'A differenza di Python, C++ non si esegue direttamente: prima il compilatore traduce il codice in un eseguibile. Con GCC: `g++ -std=c++20 ciao.cpp -o ciao` e poi `./ciao`.' ],
          code: `#include <iostream>\n\nint main() {\n    std::cout << "Ciao, mondo\\n";\n    return 0;\n}` },
        { h: 'Anatomia del programma', p: [
          '`#include <iostream>` importa la parte della libreria standard che gestisce input e output. `std::cout` è l’output standard e `<<` gli invia dati; puoi concatenare più `<<` di seguito.',
          '`std::` indica che `cout` appartiene allo spazio dei nomi della libreria standard. `"\\n"` è un a capo.',
          'Ogni istruzione termina con `;`. Dimenticarlo è l’errore più comune all’inizio. `return 0;` comunica al sistema che è andato tutto bene (in `main` puoi ometterlo).' ],
          code: `#include <iostream>\n\nint main() {\n    // Commento su una riga\n    /* Commento\n       su più righe */\n    std::cout << "Ho " << 25 << " anni" << "\\n";  // Ho 25 anni\n    std::cout << 3 + 4 << "\\n";                  // 7\n}` },
        { h: 'Leggere dalla tastiera', p: [
          '`std::cin` è l’input standard e usa `>>` nel verso opposto: porta il dato dalla tastiera a una variabile.',
          'Trucco per ricordarlo: le frecce indicano dove va il dato. `cout << x` manda `x` sullo schermo; `cin >> x` mette in `x` ciò che è stato digitato.' ],
          code: `#include <iostream>\n\nint main() {\n    int eta;\n    std::cout << "Quanti anni hai? ";\n    std::cin >> eta;\n    std::cout << "L’anno prossimo ne avrai " << eta + 1 << "\\n";\n}` },
        { h: 'Esempio reale: prezzo con IVA', real: true, p: [
          'Un negozio online deve mostrare il prezzo finale di un prodotto. Con poche righe calcoli il totale con un’IVA del 21 %.',
          '`std::cout` mostra tutti i decimali necessari (fino a 6 cifre significative per impostazione predefinita). Nel giorno 28 vedrai come mostrare esattamente due decimali.' ],
          code: `#include <iostream>\n\nint main() {\n    double prezzo = 49.99;\n    double iva = 0.21;\n    std::cout << "Totale: " << prezzo * (1 + iva) << " euro\\n";  // Totale: 60.4879 euro\n}` },
      ],
      x: [
        mc('Quale header serve per usare `std::cout`?', ['<iostream>', '<console>', '<output>', '<stdio>'], '`<iostream>` dichiara gli stream standard `std::cout` e `std::cin`.'),
        mc('Da quale funzione inizia l’esecuzione di un programma C++?', ['main', 'start', 'init', 'run'], 'Il sistema operativo chiama sempre `main` all’avvio del programma.'),
        mc('Come si scrive un commento su una riga in C++?', ['// commento', '# commento', '-- commento', '<!-- commento -->'], 'Tutto ciò che segue `//` fino a fine riga viene ignorato. `#` è di Python.'),
        ord('Scrivi l’istruzione che mostra Ciao', ['std::cout', '<<', '"Ciao"', ';'], ['>>', 'print'], '`<<` invia il testo allo stream di output e l’istruzione termina con `;`.'),
        mc('Che cosa fa il compilatore C++?', ['Traduce il codice sorgente in un programma eseguibile', 'Esegue il codice riga per riga', 'Scarica librerie da Internet', 'Corregge gli errori automaticamente'], 'Per esempio, `g++ ciao.cpp -o ciao` produce l’eseguibile `ciao`.'),
        out(`std::cout << "A" << "B" << "\\n" << "C";`, ['AB\nC', 'A B C', 'ABC', 'AB\\nC'], '`<<` concatena senza aggiungere spazi e `"\\n"` produce un vero a capo.'),
        typ('Scrivi l’operatore che porta il valore digitato nella variabile', `int eta;\nstd::cin ___ eta;`, '>>', '`std::cin` usa `>>`: il dato va dalla tastiera alla variabile.'),
        // Sfida finale
        out(`std::cout << 3 + 4 << " " << "3 + 4" << "\\n";\nstd::cout << 10 / 4;`, ['7 3 + 4\n2', '7 7\n2.5', '3 + 4 3 + 4\n2', '7 3 + 4\n2.5'], 'Senza virgolette, `3 + 4` viene calcolato; tra virgolette è testo. `10 / 4` tra interi scarta i decimali: 2.'),
      ],
    },
    // ───────────── Giorno 2 ─────────────
    {
      id: 'cpp-vars',
      t: 'Variabili e tipi',
      d: 'int, double, char, bool, auto, const e conversioni.',
      guide: [
        { h: 'Dichiarare variabili', p: [
          'In C++ ogni variabile ha un tipo fisso indicato nella dichiarazione: `int eta = 30;`. Il compilatore usa quel tipo per riservare memoria e trovare errori prima dell’esecuzione.',
          'Puoi inizializzare con `=` o con le graffe: `int eta{30};`. Le graffe sono più sicure perché vietano le conversioni che perdono dati: `int x{3.7};` non compila.',
          'Una variabile locale non inizializzata contiene valori a caso. Inizializza sempre le tue variabili.' ],
          code: `int eta = 30;\ndouble altezza{1.75};\nint punti;        // valore a caso! non leggerla prima di darle un valore\npunti = 0;        // ora sì` },
        { h: 'I tipi di base', p: [
          '`int` per gli interi, `double` per i decimali, `char` per un carattere tra apici singoli, `bool` per `true`/`false` e `long long` per interi molto grandi.',
          '`sizeof(tipo)` dice quanti byte occupa. Sulla maggior parte dei PC `int` occupa 4 byte (fino a circa 2,1 miliardi) e `long long` 8 byte.' ],
          code: `int abitanti = 3300000;\nlong long popolazione_mondiale = 8100000000LL;\ndouble prezzo = 19.95;\nchar iniziale = 'M';\nbool attivo = true;\nstd::cout << sizeof(char) << " " << sizeof(double);  // 1 8` },
        { h: 'auto, const e constexpr', p: [
          '`auto` lascia che il compilatore deduca il tipo dal valore: `auto x = 3.5;` è un `double`. Usalo quando il tipo è evidente o molto lungo da scrivere.',
          '`const` impedisce di modificare la variabile dopo averla creata. `constexpr` va oltre: il valore viene calcolato in fase di compilazione.',
          'Buona pratica: segna come `const` tutto ciò che non deve cambiare. Il compilatore ti avviserà se lo modifichi per errore.' ],
          code: `auto totale = 2 * 9.99;     // double\nauto unita = 3;             // int\nconst double IVA = 0.21;\nconstexpr int GIORNI_SETTIMANA = 7;\n// IVA = 0.10;  // errore: IVA è const` },
        { h: 'Conversioni e static_cast', p: [
          'C++ converte i tipi automaticamente, e a volte perde informazioni: salvare `3.9` in un `int` dà `3` (tronca, non arrotonda).',
          'La divisione tra due interi è intera: `7 / 2` vale `3`. Se vuoi i decimali, converti uno degli operandi con `static_cast<double>(x)`.',
          '`static_cast` rende la conversione esplicita e visibile. Evita il vecchio stile `(double)x`.' ],
          code: `int totale = 7, n = 2;\nstd::cout << totale / n << "\\n";                          // 3\nstd::cout << static_cast<double>(totale) / n << "\\n";     // 3.5\nint troncato = 3.9;\nstd::cout << troncato;                                    // 3` },
        { h: 'Esempio reale: consumo di un’auto', real: true, p: [
          'Dopo un viaggio vuoi sapere quanti litri consuma la tua auto ogni 100 km. Nota che usiamo `double` perché i litri hanno decimali.',
          'Se avessi dichiarato `litri` come `int`, 29.4 sarebbe diventato 29 e il risultato sarebbe sbagliato.' ],
          code: `#include <iostream>\n\nint main() {\n    const double km = 420;\n    const double litri = 29.4;\n    std::cout << "Consumo: " << litri / km * 100 << " L/100 km\\n";  // Consumo: 7 L/100 km\n}` },
      ],
      x: [
        mc('Quale tipo useresti per sapere se un utente è connesso?', ['bool', 'boolean', 'bit', 'int8'], 'Il tipo logico di C++ è `bool` e vale `true` o `false`.'),
        mc('In `auto x = 3.5;`, quale tipo deduce il compilatore?', ['double', 'float', 'int', 'auto'], 'I letterali decimali senza suffisso sono `double`. `3.5f` sarebbe `float`.'),
        out(`int a = 7, b = 2;\nstd::cout << a / b;`, ['3', '3.5', '4', '3.0'], 'La divisione tra due `int` scarta i decimali.'),
        out(`std::cout << 7.0 / 2;`, ['3.5', '3', '4', '3.50'], 'Se un operando è `double`, la divisione mantiene i decimali.'),
        out(`int x = 3.9;\nstd::cout << x;`, ['3', '3.9', '4', 'Errore'], 'Salvare un decimale in un `int` tronca la parte decimale; non arrotonda.'),
        fill(`int somma = 17, n = 4;\ndouble media = static_cast<___>(somma) / n;  // 4.25`, ['double', 'int', 'char', 'bool'], 'Convertendo `somma` in `double`, la divisione non è più intera.'),
        out(`char c = 'A';\nc = c + 2;\nstd::cout << c;`, ['C', 'A2', '67', 'B'], 'Un `char` è un numero: A (65) + 2 = 67, cioè la lettera C.'),
        // Sfida finale
        out(`int a = 9;\ndouble b = a / 2;\ndouble c = a / 2.0;\nstd::cout << b << " " << c;`, ['4 4.5', '4.5 4.5', '4 4', '4.5 4'], '`a / 2` viene calcolato tra interi (4) prima di essere salvato in `b`; `a / 2.0` è già una divisione decimale (4.5).'),
      ],
    },
    // ───────────── Giorno 3 ─────────────
    {
      id: 'cpp-operators',
      t: 'Operatori',
      d: 'Aritmetici, di confronto, logici, incrementi e precedenza.',
      guide: [
        { h: 'Operatori aritmetici', p: [
          'C++ ha `+ - * /` e `%` (resto). Tra interi, `/` scarta i decimali e `%` restituisce ciò che avanza: `17 / 5` vale 3 e `17 % 5` vale 2.',
          '`%` funziona solo con gli interi. È utilissimo per sapere se un numero è pari (`n % 2 == 0`) o per prendere l’ultima cifra (`n % 10`).' ],
          code: `int a = 17, b = 5;\nstd::cout << a + b << " " << a - b << " " << a * b << "\\n";  // 22 12 85\nstd::cout << a / b << " " << a % b << "\\n";                  // 3 2\nstd::cout << 17.0 / 5;                                       // 3.4` },
        { h: 'Assegnazione composta e incrementi', p: [
          '`x += 3` equivale a `x = x + 3`; esistono anche `-=`, `*=`, `/=` e `%=`.',
          '`++x` incrementa e restituisce il nuovo valore; `x++` restituisce il valore vecchio e poi incrementa. Conta solo se usi il risultato nella stessa espressione.',
          'Non modificare la stessa variabile due volte in un’espressione (`i = i++ + ++i`): il risultato non è ben definito.' ],
          code: `int x = 5;\nint a = x++;   // a = 5, x = 6\nint b = ++x;   // x = 7, b = 7\nx *= 2;        // 14\nstd::cout << a << " " << b << " " << x;  // 5 7 14` },
        { h: 'Confronto e logica', p: [
          'Gli operatori di confronto `== != < > <= >=` e quelli logici `&&` (e), `||` (o) e `!` (non) producono un `bool`.',
          '`std::cout` mostra i `bool` come `1` e `0`. Se preferisci `true`/`false`, invia prima `std::boolalpha`.',
          '`&&` e `||` si valutano in cortocircuito: in `a && b`, se `a` è falso, `b` non viene nemmeno calcolato. Per questo `v.size() > 0 && v[0] == 1` è sicuro.' ],
          code: `int eta = 20;\nbool ha_biglietto = true;\nstd::cout << (eta >= 18) << "\\n";                          // 1\nstd::cout << std::boolalpha << (eta >= 18 && !ha_biglietto);  // false` },
        { h: 'Precedenza', p: [
          '`*`, `/` e `%` vengono prima di `+` e `-`; i confronti vengono dopo l’aritmetica, e `&&` prima di `||`.',
          'Attenzione a `std::cout << a < b;`: `<<` ha più priorità di `<`, quindi non compila. Metti le parentesi: `std::cout << (a < b);`.',
          'Nel dubbio, usa le parentesi: rendono il codice più chiaro ed evitano sorprese.' ] },
        { h: 'Esempio reale: anno bisestile e resto in monete', real: true, p: [
          'Un calendario deve sapere se febbraio ha 29 giorni: un anno è bisestile se è divisibile per 4 e non per 100, a meno che non sia divisibile per 400.',
          'E un registratore di cassa converte i centesimi in euro e centesimi con `/` e `%`.' ],
          code: `#include <iostream>\n\nint main() {\n    int anno = 2024;\n    bool bisestile = (anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0;\n    std::cout << std::boolalpha << anno << " bisestile: " << bisestile << "\\n";  // 2024 bisestile: true\n\n    int centesimi = 387;\n    std::cout << centesimi / 100 << " euro e " << centesimi % 100 << " centesimi\\n";  // 3 euro e 87 centesimi\n}` },
      ],
      x: [
        typ('Scrivi l’operatore che dà il resto della divisione', `int resto = 17 ___ 5;  // 2`, '%', '`%` restituisce ciò che avanza: il 5 sta nel 17 tre volte e avanza 2.'),
        out(`int x = 10;\nx -= 3;\nx *= 2;\nstd::cout << x;`, ['14', '7', '20', '17'], '10 - 3 = 7 e 7 * 2 = 14.'),
        mc('In `v.size() > 0 && v[0] == 1`, che cosa succede se il vettore è vuoto?', ['`v[0]` non viene valutato', 'Il programma va in crash leggendo `v[0]`', 'Vengono valutate comunque entrambe le parti', 'Non compila'], '`&&` usa il cortocircuito: se la prima parte è falsa, la seconda non viene calcolata.'),
        out(`int x = 5;\nint y = x++;\nstd::cout << x << " " << y;`, ['6 5', '6 6', '5 6', '5 5'], '`x++` restituisce il valore vecchio (5) e poi porta `x` a 6.'),
        fill(`std::cout << std::___ << (2 < 3);  // mostra: true`, ['boolalpha', 'booltext', 'showbool', 'truefalse'], '`std::boolalpha` fa stampare i `bool` come `true` e `false`.'),
        out(`bool a = true, b = false;\nstd::cout << (a && !b) << (a && b);`, ['10', '11', '01', 'truefalse'], '`a && !b` è vero (1) e `a && b` è falso (0).'),
        out(`std::cout << 2 + 3 * 4 % 5;`, ['4', '0', '2', '14'], '`*` e `%` vengono prima, da sinistra a destra: 3 * 4 = 12, 12 % 5 = 2, e 2 + 2 = 4.'),
        // Sfida finale
        out(`int a = 1900, b = 2024;\nbool ba = (a % 4 == 0 && a % 100 != 0) || a % 400 == 0;\nbool bb = (b % 4 == 0 && b % 100 != 0) || b % 400 == 0;\nstd::cout << ba << bb << " " << 387 / 100 << ":" << 387 % 100;`, ['01 3:87', '11 3:87', '01 3.87:87', '10 3:87'], 'Il 1900 è divisibile per 100 ma non per 400, quindi non è bisestile (0); il 2024 sì (1). Poi 387 / 100 = 3 e 387 % 100 = 87.'),
      ],
    },
    // ───────────── Giorno 4 ─────────────
    {
      id: 'cpp-conditionals',
      t: 'Condizioni',
      d: 'if, else if, switch, l’operatore ternario e FizzBuzz.',
      guide: [
        { h: 'if, else if ed else', p: [
          '`if (condizione)` esegue un blocco solo se la condizione è vera. `else if` concatena altri casi ed `else` raccoglie tutto il resto.',
          'Usa sempre le graffe `{ }`, anche se il blocco ha una sola riga: eviti errori quando in seguito aggiungi righe.' ],
          code: `int voto = 7;\nif (voto >= 9) {\n    std::cout << "Ottimo";\n} else if (voto >= 7) {\n    std::cout << "Buono";        // viene eseguito questo\n} else if (voto >= 5) {\n    std::cout << "Sufficiente";\n} else {\n    std::cout << "Insufficiente";\n}` },
        { h: 'Vero, falso e l’errore dell’=', p: [
          'In C++ qualsiasi numero diverso da 0 conta come vero e lo 0 come falso.',
          'Errore classico: `if (x = 5)` assegna 5 a `x` (invece di confrontare) ed è sempre vero. Per confrontare si usa `==`. Compila con `-Wall` e il compilatore ti avviserà.',
          'Da C++17 puoi dichiarare una variabile dentro l’`if`: `if (auto pos = s.find(\'@\'); pos != std::string::npos)`. Così esiste solo dove serve.' ] },
        { h: 'switch', p: [
          '`switch` confronta un intero, un `char` o un `enum` con vari `case`. Non funziona con `std::string`.',
          'Ogni `case` deve terminare con `break`; altrimenti l’esecuzione «cade» nel caso successivo. A volte lo si fa apposta per raggruppare casi.',
          '`default` viene eseguito quando nessun caso corrisponde.' ],
          code: `char opzione = 'b';\nswitch (opzione) {\n    case 'a':\n        std::cout << "Nuova partita";\n        break;\n    case 'b':\n    case 'c':                   // b e c fanno la stessa cosa\n        std::cout << "Carica partita";\n        break;\n    default:\n        std::cout << "Opzione non valida";\n}` },
        { h: 'L’operatore ternario', p: [
          '`std::string` è il tipo di C++ per memorizzare testo; lo vedrai a fondo nel giorno 6.',
          '`condizione ? valore_se_vero : valore_se_falso` sceglie un valore dentro un’espressione. È ideale per i casi brevi.',
          'Si possono annidare, ma oltre due livelli diventa difficile da leggere; in quel caso torna all’`if`.' ],
          code: `int eta = 16;\nstd::string tipo = eta >= 18 ? "adulto" : "minorenne";\nstd::cout << tipo;  // minorenne` },
        { h: 'Esempio reale: tariffa di spedizione', real: true, p: [
          'Un negozio fa pagare la spedizione per fasce di peso e aggiunge il 50 % se è urgente. Gli `else if` controllano le fasce in ordine e il ternario applica il sovrapprezzo.' ],
          code: `#include <iostream>\n\ndouble tariffa_spedizione(double kg, bool urgente) {\n    double prezzo;\n    if (kg <= 1) prezzo = 4.5;\n    else if (kg <= 5) prezzo = 7.9;\n    else prezzo = 7.9 + (kg - 5) * 1.2;   // 1,20 € per ogni kg in più\n    return urgente ? prezzo * 1.5 : prezzo;\n}\n\nint main() {\n    std::cout << tariffa_spedizione(3, false) << "\\n";  // 7.9\n    std::cout << tariffa_spedizione(8, true) << "\\n";   // 17.25\n}` },
      ],
      x: [
        out(`int x = 4;\nif (x % 2 == 0)\n    std::cout << "pari";\nelse\n    std::cout << "dispari";`, ['pari', 'dispari', 'paridispari', '0'], '4 diviso 2 dà resto 0, quindi la condizione è vera.'),
        fill(`if (x > 0) {\n    std::cout << "positivo";\n} ___ if (x < 0) {\n    std::cout << "negativo";\n}`, ['else', 'elif', 'elseif', 'or'], 'C++ concatena le condizioni con `else if`, in due parole.'),
        out(`int in_sospeso = 0;\nif (!in_sospeso) std::cout << "in regola";`, ['in regola', '0', 'Niente', 'Errore'], '0 equivale a `false`, e `!false` è `true`.'),
        mc('Che tipo di valori accetta uno `switch` in C++?', ['Interi, char ed enum', 'Stringhe', 'Double', 'Qualsiasi oggetto'], 'Per confrontare `std::string` usa una catena di `if`/`else if`.'),
        out(`int x = 0;\nif (x = 5) std::cout << "sì";\nelse std::cout << "no";`, ['sì', 'no', 'Errore di compilazione'], '`x = 5` assegna (non confronta) e il risultato, 5, conta come vero.'),
        out(`int d = 2;\nswitch (d) {\n    case 1: std::cout << "L";\n    case 2: std::cout << "M";\n    case 3: std::cout << "X"; break;\n    default: std::cout << "?";\n}`, ['MX', 'M', 'MX?', 'LMX'], 'Entra in `case 2` e, senza `break`, prosegue fino al `break` di `case 3`.'),
        out(`int voto = 7;\nstd::cout << (voto >= 9 ? "A" : voto >= 7 ? "B" : "C");`, ['B', 'A', 'C', 'AB'], 'La prima condizione fallisce, quindi si valuta il secondo ternario: 7 >= 7 è vero.'),
        // Sfida finale
        out(`int n = 30;\nstd::string r;\nif (n % 3 == 0) r += "Fizz";\nif (n % 5 == 0) r += "Buzz";\nif (r.empty()) r = std::to_string(n);\nswitch (n % 4) {\n    case 2: r += "!";\n    case 3: r += "?"; break;\n    default: r += ".";\n}\nstd::cout << r;`, ['FizzBuzz!?', 'FizzBuzz!', 'Fizz!?', 'FizzBuzz.'], '30 è multiplo di 3 e di 5, quindi si eseguono entrambi gli `if`. 30 % 4 = 2: si aggiunge "!" e, senza `break`, anche "?".'),
      ],
    },
    // ───────────── Giorno 5 ─────────────
    {
      id: 'cpp-loops',
      t: 'Cicli',
      d: 'for, while, do-while, range-for, break e continue.',
      guide: [
        { h: 'Il ciclo for', p: [
          '`for (inizio; condizione; passo)` è ideale quando sai quanti giri fare. La variabile dichiarata all’inizio esiste solo dentro il ciclo.',
          'Errore tipico: usare `<=` invece di `<` scorrendo gli indici e uscire dal contenitore di una posizione.' ],
          code: `for (int i = 1; i <= 5; i++) {\n    std::cout << i << " ";   // 1 2 3 4 5\n}\nfor (int i = 10; i > 0; i -= 3) {\n    std::cout << i << " ";   // 10 7 4 1\n}` },
        { h: 'while e do-while', p: [
          '`while (condizione)` ripete finché la condizione è vera. Usalo quando non sai in anticipo quanti giri ci saranno.',
          '`do { ... } while (condizione);` controlla alla fine, quindi il blocco viene eseguito almeno una volta. È perfetto per i menu e per chiedere dati finché non sono validi.' ],
          code: `int voto;\ndo {\n    std::cout << "Voto (0-10): ";\n    std::cin >> voto;\n} while (voto < 0 || voto > 10);   // ripete finché non è valido` },
        { h: 'Il range-for', p: [
          'Negli esempi compaiono `std::string` (testo) e `std::vector` (una lista di valori). Per ora basta sapere che il range-for li scorre elemento per elemento; li vedrai a fondo nei giorni 6 e 8.',
          '`for (tipo x : contenitore)` scorre tutti gli elementi di un vector, array, set, map o string senza indici.',
          'Ricorda: `for (auto x : v)` lavora su copie; `for (auto& x : v)` modifica gli originali e `for (const auto& x : v)` legge senza copiare.' ],
          code: `std::string parola = "ciao";\nint vocali = 0;\nfor (char c : parola)\n    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') vocali++;\nstd::cout << vocali;  // 3` },
        { h: 'break, continue e cicli annidati', p: [
          '`break` esce subito dal ciclo e `continue` passa al giro successivo.',
          'Con cicli annidati, `break` esce solo dal ciclo più interno. Se devi uscire da tutti, sposta il codice in una funzione e usa `return`.' ],
          code: `for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) continue;   // salta i pari\n    if (i > 7) break;           // si ferma al 9\n    std::cout << i << " ";       // 1 3 5 7\n}` },
        { h: 'Esempio reale: quanto ci mettono a crescere i tuoi risparmi?', real: true, p: [
          'Versi 1.000 € su un conto al 5 % annuo e vuoi sapere quanti anni servono per arrivare a 1.500 €. Non sai quanti giri ci saranno, quindi `while` è lo strumento giusto.' ],
          code: `#include <iostream>\n\nint main() {\n    double saldo = 1000;\n    int anni = 0;\n    while (saldo < 1500) {\n        saldo *= 1.05;   // interessi dell’anno\n        anni++;\n    }\n    std::cout << "Anni: " << anni << ", saldo: " << saldo << "\\n";\n    // Anni: 9, saldo: 1551.33\n}` },
      ],
      x: [
        out(`for (int i = 0; i < 4; i += 2)\n    std::cout << i;`, ['02', '0123', '024', '24'], '`i` vale 0 e poi 2; arrivato a 4 la condizione fallisce.'),
        typ('Completa la condizione perché stampi 1 2 3 4 5', `for (int i = 1; i ___ 5; i++)\n    std::cout << i << " ";`, '<=', 'Con `<=` il ciclo include il 5; con `<` si fermerebbe al 4.'),
        fill(`std::vector<int> v = {1, 2, 3};\nfor (int x ___ v) std::cout << x;`, [':', 'in', 'of', '->'], 'Il range-for usa i due punti: `for (tipo x : contenitore)`.'),
        out(`int n = 0;\ndo {\n    n++;\n} while (n < 0);\nstd::cout << n;`, ['1', '0', 'Ciclo infinito', '-1'], '`do-while` esegue il blocco una volta prima di controllare la condizione.'),
        mc('Con due cicli annidati, da dove esce un `break` scritto in quello interno?', ['Solo dal ciclo interno', 'Da entrambi i cicli', 'Dal ciclo esterno', 'Dall’intera funzione'], '`break` esce solo dal ciclo più vicino. Per uscire da tutti, sposta il codice in una funzione e usa `return`.'),
        out(`for (int i = 0; i < 5; i++) {\n    if (i % 2 == 0) continue;\n    std::cout << i;\n}`, ['13', '024', '01234', '1'], '`continue` salta i pari, quindi si stampano solo 1 e 3.'),
        out(`int c = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = i; j < 3; j++) c++;\nstd::cout << c;`, ['6', '9', '3', '5'], 'Il ciclo interno fa 3, 2 e 1 giri: 3 + 2 + 1 = 6.'),
        // Sfida finale
        out(`int n = 1234, somma = 0, cifre = 0;\nwhile (n > 0) {\n    somma += n % 10;\n    n /= 10;\n    cifre++;\n}\nstd::cout << somma << " " << cifre;`, ['10 4', '4 10', '10 3', '1234 4'], '`n % 10` estrae l’ultima cifra e `n /= 10` la toglie. Si sommano 4 + 3 + 2 + 1 = 10 in 4 giri.'),
      ],
    },
    // ───────────── Giorno 6 ─────────────
    {
      id: 'cpp-strings',
      t: 'Stringhe',
      d: 'std::string: concatenare, size, substr, find e conversioni.',
      guide: [
        { h: 'std::string', p: [
          '`std::string` (header `<string>`) contiene testo e gestisce la propria memoria da solo: può crescere e ridursi senza che tu faccia nulla.',
          'Si concatena con `+` e `+=`, e si confronta con `==`, `<` e `>` (ordine alfabetico).',
          'I testi tra virgolette come `"Ciao"` sono letterali C, non `std::string`. Per questo `"Ciao" + " mondo"` non compila, mentre `std::string("Ciao") + " mondo"` sì.' ],
          code: `#include <string>\n\nstd::string nome = "Ada";\nstd::string saluto = "Ciao, " + nome;  // string + letterale: corretto\nsaluto += "!";\nstd::cout << saluto << "\\n";           // Ciao, Ada!\nstd::cout << (nome == "Ada");         // 1` },
        { h: 'I metodi più usati', p: [
          '`size()` (o `length()`) conta i caratteri, `empty()` dice se è vuota e `s[i]` accede al carattere `i` partendo da 0.',
          '`substr(pos, n)` restituisce `n` caratteri a partire da `pos`; senza `n` arriva fino alla fine. `find(testo)` restituisce la posizione della prima occorrenza, oppure `std::string::npos` se non c’è.',
          'A differenza di Python o Java, una `std::string` si può modificare: `s[0] = \'X\';`.' ],
          code: `std::string s = "programmazione";\nstd::cout << s.size() << "\\n";         // 14\nstd::cout << s.substr(3, 4) << "\\n";   // gram\nstd::cout << s.find("zione") << "\\n";  // 9\nif (s.find("k") == std::string::npos)\n    std::cout << "nessuna k\\n";\ns[0] = 'P';\nstd::cout << s;                        // Programmazione` },
        { h: 'Convertire tra numeri e testo', p: [
          '`std::to_string(42)` trasforma un numero in testo. `std::stoi("42")` trasforma il testo in `int` e `std::stod("3.5")` in `double`.',
          'Se il testo non è un numero, `stoi` lancia un’eccezione `std::invalid_argument`. La vedrai nel giorno 23.' ],
          code: `std::string eta = "29";\nint n = std::stoi(eta) + 1;\nstd::string msg = "Compirai " + std::to_string(n) + " anni";\nstd::cout << msg << "\\n";                 // Compirai 30 anni\nstd::cout << std::stod("2.5") * 2;       // 5` },
        { h: 'Leggere righe intere', p: [
          '`std::cin >> s` legge solo fino al primo spazio. Per leggere una frase intera usa `std::getline(std::cin, s)`.',
          'Se mescoli `cin >>` e `getline`, l’a capo rimasto in sospeso fa leggere a `getline` una riga vuota. Chiama prima `std::cin.ignore()`.' ],
          code: `std::string citta;\nstd::cout << "Dove abiti? ";\nstd::getline(std::cin, citta);   // accetta "Reggio Emilia"\nstd::cout << "Abiti a " << citta;` },
        { h: 'Esempio reale: dividere un’email', real: true, p: [
          'Un modulo di registrazione salva separatamente l’utente e il dominio di un’email. Con `find` trovi la chiocciola e con `substr` tagli le due parti.' ],
          code: `#include <iostream>\n#include <string>\n\nint main() {\n    std::string email = "lucia.bianchi@azienda.it";\n    auto chiocciola = email.find('@');\n    if (chiocciola == std::string::npos) {\n        std::cout << "Email non valida\\n";\n        return 1;\n    }\n    std::cout << "Utente: " << email.substr(0, chiocciola) << "\\n";    // lucia.bianchi\n    std::cout << "Dominio: " << email.substr(chiocciola + 1) << "\\n";  // azienda.it\n}` },
      ],
      x: [
        out(`std::string s = "C++";\nstd::cout << s.size();`, ['3', '2', '4', 'Errore'], '`size()` conta i caratteri: C, + e +.'),
        out(`std::string a = "Ciao", b = "Mondo";\nstd::cout << a + " " + b;`, ['Ciao Mondo', 'CiaoMondo', 'Ciao + Mondo', 'Errore'], '`+` concatena le stringhe, e lo spazio va in mezzo.'),
        fill(`int n = std::___("123");`, ['stoi', 'to_int', 'parseInt', 'toInt'], '`stoi` viene da "string to int".'),
        out(`std::string s = "programmazione";\nstd::cout << s.substr(3, 4);`, ['gram', 'gra', 'rogr', 'gramm'], '`substr(pos, n)` prende 4 caratteri dalla posizione 3 (la prima g).'),
        out(`std::string s = "banana";\nstd::cout << s.find("na");`, ['2', '4', '1', '3'], '`find` restituisce la posizione della prima occorrenza: b(0) a(1) n(2).'),
        mc('Che cosa succede con `std::string s = "Ciao" + " mondo";`?', ['Non compila: sono due letterali C, non std::string', 'Salva "Ciao mondo"', 'Salva solo "Ciao"', 'Lancia un’eccezione durante l’esecuzione'], 'Almeno uno degli operandi di `+` deve essere una `std::string`.'),
        out(`std::string s = "ugo";\ns += std::to_string(7 * 3);\nstd::cout << s << s.size();`, ['ugo215', 'ugo213', 'ugo7*35', 'ugo2121'], '`to_string(21)` aggiunge "21" e il testo "ugo21" ha 5 caratteri.'),
        // Sfida finale
        out(`std::string email = "eva.rossi@posta.it";\nauto pos = email.find('@');\nstd::string user = email.substr(0, pos);\nuser[0] = 'E';\nstd::cout << user << " " << email.size() - pos - 1;`, ['Eva.rossi 8', 'eva.rossi 8', 'Eva.rossi 9', 'Eva.rossi@ 8'], 'La @ è in posizione 9: l’utente sono i primi 9 caratteri e se ne modifica l’iniziale. L’email è lunga 18, quindi il dominio ha 18 - 9 - 1 = 8 caratteri.'),
      ],
    },
    // ───────────── Giorno 7 ─────────────
    {
      id: 'cpp-arrays',
      t: 'Array',
      d: 'Array classici, std::array, limiti e matrici.',
      guide: [
        { h: 'Array di dimensione fissa', p: [
          'Un array contiene più valori dello stesso tipo uno dopo l’altro in memoria: `int voti[3] = {7, 9, 5};`. La sua dimensione è fissata in compilazione e non può cambiare.',
          'Gli indici vanno da 0 a n-1. Se dai meno valori della dimensione, il resto viene riempito di zeri: `int a[5] = {1, 2};` è `{1, 2, 0, 0, 0}`.' ],
          code: `int voti[3] = {7, 9, 5};\nvoti[1] = 10;\nstd::cout << voti[0] + voti[1] << "\\n";  // 17\nint zeri[4] = {};                         // {0, 0, 0, 0}` },
        { h: 'C++ non controlla i limiti', p: [
          'Leggere o scrivere `voti[3]` in un array di 3 elementi è comportamento indefinito: il programma può dare valori a caso, andare in crash o sembrare funzionare.',
          'È una delle fonti di falle di sicurezza più note. Per questo il C++ moderno preferisce `std::array` o `std::vector`, che offrono `at()` con il controllo.' ] },
        { h: 'std::array', p: [
          '`std::array<int, 3>` (header `<array>`) è un array di dimensione fissa con dei vantaggi: conosce la propria dimensione con `size()`, si può copiare con `=` e `at(i)` lancia un’eccezione se l’indice non esiste.',
          'Con il range-for `for (int x : arr)` lo percorri senza preoccuparti degli indici.' ],
          code: `#include <array>\n\nstd::array<int, 4> v = {3, 1, 4, 1};\nfor (int x : v) std::cout << x << " ";  // 3 1 4 1\nstd::cout << "\\n" << v.size();          // 4\n// v.at(10);  // lancia std::out_of_range` },
        { h: 'Matrici', p: [
          'Un array di array forma una tabella: `int m[2][3]` ha 2 righe e 3 colonne. `m[riga][colonna]` accede a una cella.',
          'Per percorrerla si annidano due cicli: quello esterno scorre le righe e quello interno le colonne.' ],
          code: `int m[2][3] = {{1, 2, 3},\n               {4, 5, 6}};\nstd::cout << m[1][2] << "\\n";  // 6\nint somma = 0;\nfor (auto& riga : m)\n    for (int x : riga) somma += x;\nstd::cout << somma;            // 21` },
        { h: 'Esempio reale: temperature della settimana', real: true, p: [
          'Un’app meteo salva le massime dei 7 giorni e mostra la media e il giorno più caldo. Dato che una settimana ha sempre 7 giorni, `std::array` è ideale.' ],
          code: `#include <array>\n#include <iostream>\n\nint main() {\n    std::array<double, 7> temp = {18.5, 21.0, 19.5, 23.0, 25.5, 24.0, 20.5};\n    double somma = 0, massima = temp[0];\n    for (double t : temp) {\n        somma += t;\n        if (t > massima) massima = t;\n    }\n    std::cout << "Media: " << somma / temp.size() << "\\n";  // Media: 21.7143\n    std::cout << "Massima: " << massima << "\\n";           // Massima: 25.5\n}` },
      ],
      x: [
        out(`int a[4] = {5, 6, 7, 8};\nstd::cout << a[2];`, ['7', '6', '8', 'Errore'], 'Gli indici partono da 0: l’indice 2 è il terzo elemento.'),
        out(`int a[5] = {1, 2};\nstd::cout << a[3];`, ['0', '2', 'Valore a caso', 'Errore'], 'Gli elementi mancanti nell’inizializzazione vengono riempiti di zeri.'),
        out(`int a[] = {3, 1, 2};\nint s = 0;\nfor (int x : a) s += x;\nstd::cout << s;`, ['6', '3', '312', 'Errore'], 'Il range-for somma 3 + 1 + 2.'),
        mc('Che cosa succede leggendo `a[10]` in un array classico di 5 elementi?', ['Comportamento indefinito: C++ non controlla i limiti', 'Viene lanciata un’eccezione', 'Restituisce 0', 'Non compila'], 'Con `std::array` o `std::vector` puoi usare `at()`, che controlla.'),
        fill(`std::array<int, 3> a = {1, 2, 3};\nstd::cout << a.___();  // 3`, ['size', 'length', 'count', 'len'], '`size()` restituisce il numero di elementi di qualsiasi contenitore standard.'),
        out(`int m[2][2] = {{1, 2}, {3, 4}};\nstd::cout << m[1][0];`, ['3', '2', '4', '1'], 'Riga 1 (la seconda) e colonna 0 (la prima): il 3.'),
        out(`int a[] = {4, 8, 15, 16};\nstd::cout << sizeof(a) / sizeof(a[0]);`, ['4', '16', '1', '8'], '`sizeof(a)` sono i byte di tutto l’array e `sizeof(a[0])` quelli di un elemento: il quoziente è il numero di elementi.'),
        // Sfida finale
        out(`std::array<int, 5> v = {3, 8, 1, 9, 4};\nint mx = v[0], pos = 0;\nfor (int i = 1; i < 5; i++)\n    if (v[i] > mx) { mx = v[i]; pos = i; }\nstd::cout << mx << " in " << pos;`, ['9 in 3', '9 in 4', '8 in 1', '9 in 2'], 'Il ciclo tiene il valore più grande visto e il suo indice. Il 9 è all’indice 3 perché si conta da 0.'),
      ],
    },
    // ───────────── Giorno 8 ─────────────
    {
      id: 'cpp-vectors',
      t: 'Vettori',
      d: 'std::vector: push_back, pop_back, insert, erase, at e cicli.',
      guide: [
        { h: 'Un array che cresce', p: [
          '`std::vector` (header `<vector>`) è il contenitore più usato del C++: un array dinamico che cresce quando aggiungi elementi e libera la sua memoria da solo.',
          'Se non sai quanti elementi avrai, usa `std::vector`. È la scelta predefinita per le liste di dati.' ],
          code: `#include <vector>\n\nstd::vector<int> v;          // vuoto\nstd::vector<int> w = {4, 8};  // con valori\nstd::vector<int> z(3, 7);    // {7, 7, 7}\nv.push_back(15);\nstd::cout << v.size() << w.size() << z.size();  // 123` },
        { h: 'Aggiungere e togliere', p: [
          '`push_back(x)` aggiunge in fondo e `pop_back()` toglie l’ultimo. `front()` e `back()` danno il primo e l’ultimo.',
          '`insert(v.begin() + i, x)` inserisce nella posizione `i` ed `erase(v.begin() + i)` la elimina. Entrambi spostano gli elementi successivi, quindi sono più lenti con vettori enormi.',
          '`clear()` svuota il vettore ed `empty()` dice se è vuoto.' ],
          code: `std::vector<int> v = {10, 20, 30};\nv.push_back(40);            // 10 20 30 40\nv.insert(v.begin(), 5);     // 5 10 20 30 40\nv.erase(v.begin() + 2);     // 5 10 30 40\nv.pop_back();               // 5 10 30\nstd::cout << v.front() << " " << v.back();  // 5 30` },
        { h: '[] oppure at()', p: [
          '`v[i]` è veloce ma non controlla nulla: un indice fuori intervallo è comportamento indefinito.',
          '`v.at(i)` controlla l’indice e lancia `std::out_of_range` se non esiste. Usalo quando l’indice arriva dall’esterno (dall’utente, da un file...).' ] },
        { h: 'Scorrere un vettore', p: [
          '`for (int x : v)` scorre copie degli elementi. Per modificarli usa un riferimento: `for (int& x : v)`.',
          'Con oggetti grandi (come `std::string`) usa `for (const auto& x : v)`: non copia e rende chiaro che stai solo leggendo.' ],
          code: `std::vector<int> prezzi = {10, 20, 30};\nfor (int& p : prezzi) p = p * 2;      // modifica l’originale\nfor (const auto& p : prezzi)\n    std::cout << p << " ";              // 20 40 60` },
        { h: 'Esempio reale: il carrello della spesa', real: true, p: [
          'Un negozio online salva i prezzi del carrello in un vettore: il cliente aggiunge prodotti con `push_back` e il totale si calcola scorrendo il vettore.' ],
          code: `#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<double> carrello = {12.99, 4.50, 7.25};\n    carrello.push_back(3.10);   // aggiunge un altro prodotto\n    double totale = 0;\n    for (double prezzo : carrello) totale += prezzo;\n    std::cout << carrello.size() << " articoli, totale " << totale << " euro\\n";\n    // 4 articoli, totale 27.84 euro\n}` },
      ],
      x: [
        out(`std::vector<int> v = {1, 2, 3};\nv.push_back(4);\nstd::cout << v.size();`, ['4', '3', '5', 'Errore'], '`push_back` aggiunge un elemento in fondo.'),
        fill(`std::vector<std::string> nomi;\nnomi.___("Anna");`, ['push_back', 'add', 'append', 'push'], 'In C++ si aggiunge in fondo a un vettore con `push_back`.'),
        out(`std::vector<int> v = {2, 4, 6};\nint s = 0;\nfor (int n : v) s += n;\nstd::cout << s;`, ['12', '246', '6', '3'], 'Il range-for scorre ogni elemento: 2 + 4 + 6 = 12.'),
        out(`std::vector<int> v = {1, 2, 3};\nv.pop_back();\nstd::cout << v.back();`, ['2', '3', '1', 'Errore'], '`pop_back` toglie il 3 e `back` restituisce il nuovo ultimo.'),
        out(`std::vector<int> v(3, 7);\nstd::cout << v[0] + v[2];`, ['14', '7', '10', '21'], '`v(3, 7)` crea 3 elementi che valgono 7, quindi 7 + 7 = 14.'),
        mc('Che differenza c’è tra `v[i]` e `v.at(i)`?', ['at() controlla l’indice e lancia un’eccezione se non esiste', 'Nessuna', '[] è più sicuro', 'at() restituisce una copia'], '`[]` non controlla nulla ed è un po’ più veloce; `at()` lancia `std::out_of_range`.'),
        out(`std::vector<int> v = {10, 20, 30, 40};\nv.erase(v.begin() + 1);\nstd::cout << v[1] << " " << v.size();`, ['30 3', '20 3', '30 4', '40 3'], '`erase` elimina l’indice 1 (il 20) e i successivi scorrono: resta {10, 30, 40}.'),
        // Sfida finale
        out(`std::vector<int> v = {5, 3, 8};\nfor (auto& x : v) x *= 2;\nv.insert(v.begin(), 1);\nv.pop_back();\nstd::cout << v.front() + v.back() << " " << v.size();`, ['7 3', '17 3', '1 3', '7 4'], 'Con `auto&` gli originali raddoppiano: {10, 6, 16}. Dopo aver inserito l’1 e tolto l’ultimo resta {1, 10, 6}: 1 + 6 = 7 e dimensione 3.'),
      ],
    },
    // ───────────── Giorno 9 ─────────────
    {
      id: 'cpp-sets',
      t: 'Insiemi',
      d: 'std::set e std::unordered_set: elementi unici.',
      guide: [
        { h: 'Elementi unici e ordinati', p: [
          '`std::set` (header `<set>`) salva ogni valore una sola volta e li tiene ordinati dal più piccolo al più grande. Se inserisci un doppione, viene semplicemente ignorato.',
          'È perfetto per domande come «l’ho già visto?» o «quanti valori diversi ci sono?».' ],
          code: `#include <set>\n\nstd::set<int> s = {5, 1, 5, 3};\ns.insert(2);\ns.insert(3);               // doppione: non fa nulla\nfor (int x : s) std::cout << x << " ";  // 1 2 3 5\nstd::cout << "\\n" << s.size();          // 4` },
        { h: 'Cercare ed eliminare', p: [
          '`count(x)` restituisce 1 se `x` c’è e 0 se non c’è. In C++20 hai `contains(x)`, che restituisce un `bool` e si legge meglio.',
          '`erase(x)` elimina il valore. `insert` restituisce una coppia il cui `.second` è `true` se l’elemento era nuovo.',
          'Cercare in un `std::set` è molto veloce (logaritmico), molto più che scorrere un grande vettore elemento per elemento.' ],
          code: `std::set<std::string> etichette = {"c++", "stl"};\nstd::cout << etichette.count("stl") << "\\n";    // 1\nstd::cout << etichette.contains("go") << "\\n";  // 0 (C++20)\nauto r = etichette.insert("c++");\nstd::cout << r.second << "\\n";                  // 0: esisteva già\netichette.erase("stl");` },
        { h: 'std::unordered_set', p: [
          '`std::unordered_set` (header `<unordered_set>`) fa lo stesso ma usa una tabella hash: cercare e inserire è ancora più veloce in media, in cambio non mantiene alcun ordine.',
          'Regola pratica: se devi scorrere i valori in ordine, usa `std::set`; se chiedi solo se qualcosa esiste, `std::unordered_set`.' ] },
        { h: 'Creare un set da un vettore', p: [
          'Puoi costruire un set da qualsiasi intervallo: `std::set<int> s(v.begin(), v.end());`. È il modo più semplice per togliere i doppioni.',
          'Puoi anche aggiungere un intero intervallo a un set esistente con `s.insert(altro.begin(), altro.end())`.' ],
          code: `std::vector<int> v = {3, 1, 3, 2, 1};\nstd::set<int> unici(v.begin(), v.end());\nstd::cout << unici.size();  // 3` },
        { h: 'Esempio reale: visitatori unici di un sito', real: true, p: [
          'Il registro di un sito web annota l’utente a ogni visita. Il report giornaliero vuole sapere quante persone diverse sono entrate, non quante visite ci sono state.' ],
          code: `#include <iostream>\n#include <set>\n#include <string>\n#include <vector>\n\nint main() {\n    std::vector<std::string> visite = {"anna", "luca", "anna", "marta", "luca", "anna"};\n    std::set<std::string> unici(visite.begin(), visite.end());\n    std::cout << visite.size() << " visite, " << unici.size() << " visitatori\\n";\n    // 6 visite, 3 visitatori\n    for (const auto& u : unici) std::cout << u << " ";  // anna luca marta\n}` },
      ],
      x: [
        out(`std::set<int> s = {3, 1, 3, 2};\nstd::cout << s.size();`, ['3', '4', '2', 'Errore'], 'Il 3 ripetuto viene ignorato: restano 1, 2 e 3.'),
        fill(`std::set<int> s;\ns.___(7);`, ['insert', 'push_back', 'add', 'append'], 'I set non hanno una «fine»; si aggiunge con `insert`.'),
        out(`std::set<int> s = {5, 1, 4};\nfor (int x : s) std::cout << x;`, ['145', '514', '541', '154'], '`std::set` mantiene gli elementi ordinati dal più piccolo al più grande.'),
        out(`std::set<std::string> s = {"b", "a"};\nstd::cout << s.count("a");`, ['1', '0', '2', 'a'], '`count` restituisce 1 se l’elemento esiste e 0 se non esiste.'),
        out(`std::set<int> s = {1, 2, 3};\ns.erase(2);\nstd::cout << s.size();`, ['2', '3', '1', '0'], '`erase` elimina il 2 e restano due elementi.'),
        mc('Quale contenitore salva valori unici senza ordine e con ricerca velocissima?', ['std::unordered_set', 'std::set', 'std::vector', 'std::array'], 'Usa internamente una tabella hash, quindi non mantiene alcun ordine.'),
        out(`std::set<int> s = {1, 2};\nauto r = s.insert(2);\nstd::cout << r.second << s.size();`, ['02', '13', '12', '03'], 'Il 2 esisteva già: `insert` restituisce `second == false` (0) e la dimensione resta 2.'),
        // Sfida finale
        out(`std::set<int> a = {1, 3, 5, 7};\nstd::set<int> b = {3, 4, 5};\nint comuni = 0;\nfor (int x : b) if (a.count(x)) comuni++;\na.insert(b.begin(), b.end());\nstd::cout << comuni << " " << a.size();`, ['2 5', '2 7', '3 5', '1 5'], 'I valori comuni sono 3 e 5. Inserendo `b` in `a` entra solo il 4: {1, 3, 4, 5, 7}, cinque elementi.'),
      ],
    },
    // ───────────── Giorno 10 ─────────────
    {
      id: 'cpp-maps',
      t: 'Mappe',
      d: 'std::map e std::unordered_map: coppie chiave-valore.',
      guide: [
        { h: 'Dizionari in C++', p: [
          '`std::map<Chiave, Valore>` (header `<map>`) associa chiavi uniche a valori, come una rubrica che collega nomi e numeri di telefono.',
          'Le chiavi restano ordinate. `m[chiave] = valore` aggiunge la coppia o cambia il valore se la chiave esisteva già.' ],
          code: `#include <map>\n\nstd::map<std::string, int> eta;\neta["Anna"] = 31;\neta["Luca"] = 28;\neta["Anna"] = 32;           // sostituisce il valore\nstd::cout << eta["Anna"] << " " << eta.size();  // 32 2` },
        { h: 'La trappola di []', p: [
          'Leggere con `m["chiave"]` una chiave che non esiste la crea con un valore predefinito (0 per i numeri, testo vuoto per le stringhe). Così si infilano chiavi che nessuno voleva.',
          'Per leggere senza creare, usa `m.at("chiave")`, che lancia `std::out_of_range` se non esiste, oppure controlla prima con `count`, `contains` (C++20) o `find`.' ],
          code: `std::map<std::string, int> scorte = {{"pane", 4}};\nif (scorte.contains("latte"))           // C++20\n    std::cout << scorte.at("latte");\nauto it = scorte.find("pane");\nif (it != scorte.end())\n    std::cout << it->first << ": " << it->second;  // pane: 4` },
        { h: 'Scorrere una mappa', p: [
          'Ogni elemento è una coppia con `.first` (chiave) e `.second` (valore). Da C++17 puoi scomporla con `for (const auto& [chiave, valore] : m)`.',
          'Lo scorrimento avviene in ordine di chiave. `m.begin()->first` è la chiave più piccola.' ],
          code: `std::map<std::string, double> prezzi = {{"pera", 2.1}, {"kiwi", 3.4}, {"uva", 2.8}};\nfor (const auto& [frutto, prezzo] : prezzi)\n    std::cout << frutto << " " << prezzo << "\\n";\n// kiwi 3.4\n// pera 2.1\n// uva 2.8` },
        { h: 'std::unordered_map', p: [
          '`std::unordered_map` (header `<unordered_map>`) ha la stessa interfaccia ma usa una tabella hash: più veloce in media e senza ordine.',
          'Usa `std::map` quando vuoi scorrere le chiavi in ordine e `std::unordered_map` quando cerchi solo per chiave.' ] },
        { h: 'Esempio reale: contare le parole di un testo', real: true, p: [
          'Un analizzatore di recensioni vuole sapere quali parole si ripetono di più. `std::istringstream` (header `<sstream>`) divide il testo sugli spazi, e `frequenza[parola]++` sfrutta il fatto che `[]` crea la chiave con 0 la prima volta.' ],
          code: `#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\n\nint main() {\n    std::string testo = "il gatto e il cane e il pesce";\n    std::istringstream in(testo);\n    std::map<std::string, int> frequenza;\n    std::string parola;\n    while (in >> parola) frequenza[parola]++;\n    for (const auto& [p, n] : frequenza)\n        std::cout << p << ": " << n << "\\n";\n    // cane: 1, e: 2, gatto: 1, il: 3, pesce: 1 (una per riga)\n}` },
      ],
      x: [
        out(`std::map<std::string, int> m;\nm["a"] = 1;\nm["a"] = 5;\nstd::cout << m["a"];`, ['5', '1', '6', 'Errore'], 'Le chiavi sono uniche: la seconda assegnazione sostituisce il valore.'),
        out(`std::map<int, char> m = {{2, 'b'}, {1, 'a'}};\nfor (auto& [k, v] : m) std::cout << v;`, ['ab', 'ba', '12', 'a'], '`std::map` scorre gli elementi in ordine di chiave: 1 e poi 2.'),
        fill(`if (m.___("chiave")) {\n    std::cout << "esiste";\n}`, ['count', 'has', 'exists', 'includes'], '`count` restituisce 1 se la chiave esiste. In C++20 c’è anche `contains`.'),
        out(`std::map<std::string, int> m;\nstd::cout << m["x"] << m.size();`, ['01', '00', 'Errore', 'x1'], 'Leggere `m["x"]` crea la chiave con valore 0, quindi la dimensione diventa 1.'),
        mc('Che cosa fa `m.at("z")` se la chiave non esiste?', ['Lancia std::out_of_range', 'Crea la chiave con 0', 'Restituisce 0', 'Non compila'], '`at` è il modo sicuro di leggere senza creare chiavi.'),
        mc('Per contare parole senza bisogno di ordine e alla massima velocità, quale contenitore useresti?', ['std::unordered_map', 'std::map', 'std::vector', 'std::set'], 'Le sue ricerche richiedono in media un tempo costante.'),
        out(`std::map<char, int> c;\nfor (char ch : std::string("data bat"))\n    if (ch != ' ') c[ch]++;\nstd::cout << c['a'] << c['t'] << c.size();`, ['324', '314', '325', '323'], '"a" compare tre volte, "t" due, e "d" e "b" una: a=3, t=2 e ci sono 4 chiavi diverse.'),
        // Sfida finale
        out(`std::map<std::string, int> scorte = {{"pane", 3}, {"latte", 0}};\nscorte["pane"] -= 1;\nscorte["uova"] += 12;\nint totale = 0;\nfor (const auto& [p, n] : scorte) totale += n;\nstd::cout << scorte.size() << " " << totale << " " << scorte.begin()->first;`, ['3 14 latte', '2 14 latte', '3 15 latte', '3 14 uova'], '`scorte["uova"]` crea la chiave con 0 e le somma 12. Totale: 2 + 0 + 12 = 14. La chiave più piccola in ordine alfabetico è "latte".'),
      ],
    },
    // ───────────── Giorno 11 ─────────────
    {
      id: 'cpp-functions',
      t: 'Funzioni',
      d: 'Dichiarazione, prototipi, valori predefiniti, overloading e ricorsione.',
      guide: [
        { h: 'Dichiarare e chiamare funzioni', p: [
          'Una funzione raggruppa del codice sotto un nome per poterlo riutilizzare: `tipo_ritorno nome(parametri) { ... }`.',
          '`return` restituisce il risultato e termina la funzione. Se non restituisce nulla, il tipo di ritorno è `void`.',
          'Ogni parametro ha il suo tipo: `int somma(int a, int b)`. Il compilatore controlla che tu chiami la funzione con i tipi corretti.' ],
          code: `#include <iostream>\n#include <string>\n\nint quadrato(int n) {\n    return n * n;\n}\n\nvoid saluta(std::string nome) {\n    std::cout << "Ciao, " << nome << "\\n";\n}\n\nint main() {\n    std::cout << quadrato(4) << "\\n";  // 16\n    saluta("Ada");                      // Ciao, Ada\n}` },
        { h: 'Prototipi', p: [
          'Il compilatore legge il file dall’alto verso il basso: una funzione deve essere dichiarata prima di essere usata.',
          'Se preferisci scrivere prima `main`, dichiara il prototipo prima: l’intestazione della funzione terminata da `;`. La definizione completa può venire più in basso.' ],
          code: `int cubo(int n);   // prototipo\n\nint main() {\n    std::cout << cubo(3);  // 27\n}\n\nint cubo(int n) {  // definizione\n    return n * n * n;\n}` },
        { h: 'Valori predefiniti e overloading', p: [
          'Un parametro può avere un valore predefinito che si usa se non lo passi. I parametri con valore predefinito vanno sempre alla fine.',
          'L’overloading permette più funzioni con lo stesso nome e parametri diversi. Il compilatore sceglie la versione in base agli argomenti.' ],
          code: `double area(double lato) { return lato * lato; }\ndouble area(double base, double altezza) { return base * altezza; }\n\nvoid avvisa(std::string msg, int volte = 1) {\n    for (int i = 0; i < volte; i++) std::cout << msg << "\\n";\n}\n\nstd::cout << area(3) << " " << area(2, 5) << "\\n";  // 9 10\navvisa("Salvato");      // una volta\navvisa("Errore!", 2);   // due volte` },
        { h: 'Ricorsione', p: [
          'Una funzione ricorsiva chiama se stessa con un problema più piccolo. Ha sempre bisogno di un caso base che fermi le chiamate.',
          'Senza caso base, le chiamate si accumulano sullo stack finché il programma si blocca (stack overflow).' ],
          code: `int fattoriale(int n) {\n    if (n <= 1) return 1;            // caso base\n    return n * fattoriale(n - 1);    // caso ricorsivo\n}\n\nstd::cout << fattoriale(5);  // 120` },
        { h: 'Esempio reale: prezzo finale con sconto', real: true, p: [
          'Un negozio calcola il prezzo finale di molti prodotti. Con i valori predefiniti, la stessa funzione serve con o senza sconto e con l’IVA standard del 21 %.' ],
          code: `#include <iostream>\n\ndouble prezzo_finale(double prezzo, double sconto = 0, double iva = 0.21) {\n    return prezzo * (1 - sconto) * (1 + iva);\n}\n\nint main() {\n    std::cout << prezzo_finale(100) << "\\n";            // 121\n    std::cout << prezzo_finale(100, 0.2) << "\\n";       // 96.8\n    std::cout << prezzo_finale(100, 0, 0.10) << "\\n";   // 110\n}` },
      ],
      x: [
        out(`int doppio(int x) { return x * 2; }\nstd::cout << doppio(doppio(3));`, ['12', '6', '9', 'Errore'], '`doppio(3)` vale 6 e `doppio(6)` vale 12.'),
        mc('Che tipo di ritorno usa una funzione che non restituisce nulla?', ['void', 'null', 'none', 'empty'], '`void` significa che la funzione non restituisce alcun valore.'),
        fill(`int somma(int a, int b) {\n    ___ a + b;\n}`, ['return', 'yield', 'give', 'break'], '`return` restituisce il risultato al codice che ha chiamato la funzione.'),
        out(`void f(int a, int b = 10) {\n    std::cout << a + b;\n}\nf(5);`, ['15', '5', '510', 'Errore'], 'Dato che `b` non viene passato, prende il valore predefinito: 5 + 10 = 15.'),
        out(`void tipo(int) { std::cout << "int "; }\nvoid tipo(double) { std::cout << "double "; }\ntipo(3);\ntipo(3.0);`, ['int double ', 'int int ', 'double double ', 'Errore'], 'Overloading: `3` è un `int` e `3.0` un `double`, quindi ogni volta si chiama una versione diversa.'),
        typ('Completa il caso base del fattoriale', `int fatt(int n) {\n    if (n <= 1) return ___;\n    return n * fatt(n - 1);\n}`, '1', 'Il fattoriale di 0 e di 1 è 1. Senza questo caso base la ricorsione non finirebbe mai.'),
        mc('Dove devono andare i parametri con valore predefinito?', ['Alla fine della lista', 'All’inizio della lista', 'In qualsiasi posizione', 'Solo nelle funzioni void'], 'Se un parametro ha un valore predefinito, anche tutti quelli dopo devono averlo.'),
        // Sfida finale
        out(`int f(int n) {\n    if (n == 0) return 0;\n    return n % 10 + f(n / 10);\n}\nint g(int a, int b = 2) { return a * b; }\n\nstd::cout << f(492) << " " << g(f(31));`, ['15 8', '15 4', '492 8', '15 6'], '`f` somma le cifre in modo ricorsivo: 4 + 9 + 2 = 15 e 3 + 1 = 4. Poi `g(4)` usa `b = 2`: 8.'),
      ],
    },
    // ───────────── Giorno 12 ─────────────
    {
      id: 'cpp-headers',
      t: 'Header e namespace',
      d: 'File .h e .cpp, #include, #pragma once e namespace.',
      guide: [
        { h: 'Dividere il codice in file', p: [
          'Nei progetti reali il codice è distribuito su più file. Il file header (`.h` o `.hpp`) dichiara cosa esiste e il file `.cpp` contiene l’implementazione.',
          'Gli altri file includono l’header per usare quelle funzioni. Tutti i `.cpp` vengono compilati insieme: `g++ main.cpp matematica.cpp -o app`.' ],
          code: `// matematica.h\n#pragma once\nint somma(int a, int b);\ndouble media(int a, int b);\n\n// matematica.cpp\n#include "matematica.h"\nint somma(int a, int b) { return a + b; }\ndouble media(int a, int b) { return (a + b) / 2.0; }\n\n// main.cpp\n#include <iostream>\n#include "matematica.h"\nint main() {\n    std::cout << somma(2, 3) << " " << media(2, 3);  // 5 2.5\n}` },
        { h: '#include e #pragma once', p: [
          '`#include` copia letteralmente il contenuto del file in quel punto. Con `< >` si cercano gli header di sistema e della libreria standard; con `" "` si cerca prima nel tuo progetto.',
          'Se un header viene incluso due volte, le sue definizioni si ripetono e compaiono errori. `#pragma once` lo evita. L’equivalente classico sono le include guard con `#ifndef`.' ],
          code: `// forma classica: include guard\n#ifndef MATEMATICA_H\n#define MATEMATICA_H\n\nint somma(int a, int b);\n\n#endif` },
        { h: 'namespace', p: [
          'Un `namespace` raggruppa dei nomi perché non si scontrino con quelli di altre librerie. Per questo la libreria standard vive dentro `std`.',
          'Da fuori vi si accede con l’operatore `::`: `geometria::area_cerchio(2)`. I namespace si possono annidare.' ],
          code: `namespace geometria {\n    const double PI = 3.14159;\n    double area_cerchio(double r) { return PI * r * r; }\n}\n\nstd::cout << geometria::area_cerchio(2);  // 12.5664` },
        { h: 'using e alias', p: [
          '`using std::cout;` importa un solo nome. `using namespace std;` li importa tutti: comodo negli esercizi brevi, ma può causare conflitti di nomi.',
          'Non scrivere mai `using namespace` in un file `.h`: verrebbe imposto a tutti i file che lo includono.',
          'Per i nomi lunghi puoi creare un alias: `namespace fs = std::filesystem;`.' ],
          code: `#include <filesystem>\nnamespace fs = std::filesystem;\nusing std::cout;\n\ncout << fs::current_path();  // la cartella corrente` },
        { h: 'Esempio reale: utilità per un negozio', real: true, p: [
          'Il team di un negozio online mette i suoi calcoli in un namespace proprio, con l’header separato dall’implementazione. Così qualsiasi parte del programma può usarli senza scontrarsi con altre librerie.' ],
          code: `// negozio.h\n#pragma once\nnamespace negozio {\n    double con_iva(double prezzo);\n    bool spedizione_gratis(double totale);\n}\n\n// negozio.cpp\n#include "negozio.h"\nnamespace negozio {\n    double con_iva(double prezzo) { return prezzo * 1.21; }\n    bool spedizione_gratis(double totale) { return totale >= 50; }\n}\n\n// main.cpp\n#include <iostream>\n#include "negozio.h"\nint main() {\n    double totale = negozio::con_iva(45);\n    std::cout << totale << " " << negozio::spedizione_gratis(totale);  // 54.45 1\n}` },
      ],
      x: [
        mc('Cosa contiene di solito un file `.h`?', ['Dichiarazioni di funzioni e classi', 'La funzione main', 'Il programma già compilato', 'Solo commenti'], 'L’header dice cosa esiste; il `.cpp` contiene come funziona.'),
        fill(`// utils.h\n#___ once\nint massimo(int a, int b);`, ['pragma', 'define', 'include', 'ifndef'], '`#pragma once` evita che l’header venga incluso due volte nello stesso file.'),
        out(`namespace a { int x = 1; }\nnamespace b { int x = 2; }\nstd::cout << a::x + b::x;`, ['3', '12', '2', 'Errore'], 'Ogni `x` vive nel suo namespace, quindi non si scontrano: 1 + 2 = 3.'),
        mc('Qual è la differenza tra `#include <vector>` e `#include "utils.h"`?', ['Con < > si cercano gli header di sistema; con " " si cerca prima nel tuo progetto', 'Nessuna', 'Con " " si includono solo header della STL', 'Con < > il file viene incluso due volte'], 'Usa le virgolette per i tuoi header e `< >` per quelli della libreria standard.'),
        typ('Scrivi l’operatore che accede a un nome di un namespace', `std___cout << "Ciao";`, '::', '`::` è l’operatore di ambito: `std::cout` è il `cout` del namespace `std`.'),
        mc('Perché è una cattiva idea scrivere `using namespace std;` in un file `.h`?', ['Viene imposto a tutti i file che lo includono e può causare conflitti di nomi', 'Rende il programma più lento', 'Non compila dentro un .h', 'Cancella i tuoi namespace'], 'Chi include il tuo header si ritroverebbe tutto `std` senza averlo chiesto.'),
        ord('Ordina il comando che compila due file in un eseguibile chiamato app', ['g++', 'main.cpp', 'util.cpp', '-o', 'app'], ['#include', 'util.h'], 'Al compilatore si passano tutti i `.cpp`; gli header no, perché i `.cpp` li includono già.'),
        // Sfida finale
        out(`namespace app {\n    int v = 2;\n    namespace beta {\n        int v = 3;\n        int doppio() { return v * 2; }\n    }\n    int somma() { return v + beta::v; }\n}\nint v = 1;\n\nstd::cout << v << app::somma() << app::beta::doppio() << ::v;`, ['1561', '2561', '1531', '1562'], 'Fuori dai namespace, `v` è quella globale (1). Dentro `app`, `v` vale 2 e `beta::v` vale 3, quindi `somma()` dà 5. Dentro `beta`, `v` vale 3 e `doppio()` dà 6. `::v` è quella globale: 1.'),
      ],
    },
    // ───────────── Giorno 13 ─────────────
    {
      id: 'cpp-references',
      t: 'Riferimenti',
      d: 'Passaggio per valore, riferimenti, passaggio per riferimento e const&.',
      guide: [
        { h: 'Passaggio per valore', p: [
          'Per impostazione predefinita, C++ passa alle funzioni una copia di ogni argomento. Se la funzione modifica il parametro, l’originale non se ne accorge.',
          'Copiare un `int` costa poco, ma copiare un vector con un milione di elementi no.' ],
          code: `void incrementa(int n) {\n    n++;               // modifica la copia\n}\n\nint x = 5;\nincrementa(x);\nstd::cout << x;        // 5` },
        { h: 'Riferimenti', p: [
          'Un riferimento è un altro nome per una variabile che esiste già: `int& r = x;`. Tutto ciò che fai con `r` succede a `x`.',
          'Un riferimento si inizializza quando viene creato e non può mai essere fatto puntare a un’altra variabile.',
          'Non restituire mai un riferimento a una variabile locale di una funzione: la variabile scompare all’uscita e il riferimento resta pendente.' ],
          code: `int x = 10;\nint& r = x;    // r è un alias di x\nr = 25;\nstd::cout << x << "\\n";  // 25\nx++;\nstd::cout << r;           // 26` },
        { h: 'Passaggio per riferimento', p: [
          'Se il parametro è un riferimento (`int& n`), la funzione lavora direttamente con la variabile originale.',
          'Così una funzione può modificare più valori del codice chiamante, come in questo scambio.' ],
          code: `void scambia(int& a, int& b) {\n    int tmp = a;\n    a = b;\n    b = tmp;\n}\n\nint x = 1, y = 2;\nscambia(x, y);\nstd::cout << x << y;  // 21` },
        { h: 'const&: leggere senza copiare', p: [
          '`const T&` passa l’originale senza copiarlo e, grazie a `const`, la funzione non può modificarlo.',
          'Regola pratica: tipi piccoli (`int`, `double`, `char`) per valore; oggetti grandi che si leggono soltanto (`std::string`, `std::vector`) per `const&`; e ciò che la funzione deve modificare, per `&`.' ],
          code: `double media(const std::vector<double>& voti) {\n    double somma = 0;\n    for (double v : voti) somma += v;\n    // voti.push_back(10);  // errore: è const\n    return somma / voti.size();\n}` },
        { h: 'Esempio reale: sconti nel carrello', real: true, p: [
          'Un negozio applica uno sconto a tutto il carrello e poi calcola il totale. La prima funzione modifica il vector (`&`); la seconda lo legge soltanto (`const&`).' ],
          code: `#include <iostream>\n#include <vector>\n\nvoid applica_sconto(std::vector<double>& prezzi, double pct) {\n    for (double& p : prezzi) p *= 1 - pct;\n}\n\ndouble totale(const std::vector<double>& prezzi) {\n    double t = 0;\n    for (double p : prezzi) t += p;\n    return t;\n}\n\nint main() {\n    std::vector<double> carrello = {20, 50, 30};\n    applica_sconto(carrello, 0.10);\n    std::cout << "Totale: " << totale(carrello) << "\\n";  // Totale: 90\n}` },
      ],
      x: [
        out(`void f(int n) { n = 10; }\n\nint x = 1;\nf(x);\nstd::cout << x;`, ['1', '10', '11', 'Errore'], 'Per valore, la funzione riceve una copia e l’originale non cambia.'),
        out(`void f(int& n) { n = 10; }\n\nint x = 1;\nf(x);\nstd::cout << x;`, ['10', '1', '11', 'Errore'], 'Con `int&` la funzione lavora con la variabile originale.'),
        fill(`void raddoppia(int___ n) {\n    n *= 2;\n}`, ['&', '*', '#', '@'], 'Con `&` il parametro è un riferimento e la modifica arriva all’originale.'),
        out(`int a = 3;\nint& r = a;\nr += 4;\nstd::cout << a;`, ['7', '3', '4', 'Errore'], '`r` è un altro nome di `a`, quindi `r += 4` modifica `a`.'),
        mc('Qual è il modo migliore di passare un vector grande che la funzione leggerà soltanto?', ['const std::vector<int>&', 'std::vector<int>', 'std::vector<int>&', 'std::vector<int>*'], '`const&` evita la copia e garantisce che non verrà modificato.'),
        mc('Cosa succede con `int& r;` senza inizializzazione?', ['Non compila: un riferimento deve essere inizializzato', 'Vale 0', 'Punta a nullptr', 'Contiene dati casuali'], 'Un riferimento deve sempre riferirsi a qualcosa fin dal momento in cui viene creato.'),
        typ('Fai in modo che il ciclo modifichi gli elementi originali', `std::vector<int> v = {1, 2, 3};\nfor (auto___ x : v) x *= 2;`, '&', 'Con `auto&`, `x` è un riferimento a ogni elemento, non una copia.'),
        // Sfida finale
        out(`void f(int a, int& b, const int& c) {\n    a++;\n    b += c;\n}\n\nint x = 1, y = 2, z = 3;\nf(x, y, z);\nf(y, z, x);\nstd::cout << x << y << z;`, ['154', '254', '153', '264'], 'Prima chiamata: `a` è una copia di `x` (non cambia) e `y` diventa 2 + 3 = 5. Seconda: `a` è una copia di `y` e `z` diventa 3 + 1 = 4.'),
      ],
    },
    // ───────────── Giorno 14 ─────────────
    {
      id: 'cpp-pointers',
      t: 'Puntatori',
      d: 'Indirizzi, *, &, nullptr e aritmetica dei puntatori.',
      guide: [
        { h: 'Indirizzi di memoria', p: [
          'Ogni variabile vive in una posizione di memoria con un indirizzo. `&x` restituisce l’indirizzo di `x`.',
          'Un puntatore è una variabile che memorizza un indirizzo. `int* p = &x;` si legge "p è un puntatore a int che punta a x".' ],
          code: `int x = 42;\nint* p = &x;\nstd::cout << p << "\\n";   // un indirizzo, es. 0x7ffd5e8c\nstd::cout << *p << "\\n";  // 42` },
        { h: 'Dereferenziare con *', p: [
          '`*p` accede al valore a cui punta `p`: funziona sia in lettura sia in scrittura.',
          'Attenzione ai due usi di `*`: in una dichiarazione (`int* p`) indica che è un puntatore; in un’espressione (`*p`) accede al valore. Anche `&` ha due usi: indirizzo (`&x`) e riferimento (`int& r`).' ],
          code: `int x = 5;\nint* p = &x;\n*p = 20;          // modifica x attraverso il puntatore\nstd::cout << x;   // 20` },
        { h: 'nullptr', p: [
          'Un puntatore che non punta a nulla dovrebbe valere `nullptr`. Dereferenziare un puntatore nullo è comportamento indefinito e di solito fa crashare il programma.',
          'Controlla sempre i puntatori che potrebbero essere nulli prima di usarli. Un puntatore non inizializzato è ancora peggio: punta in un punto qualsiasi.' ],
          code: `int* p = nullptr;\nif (p != nullptr) {\n    std::cout << *p;\n} else {\n    std::cout << "Non punta a nulla";\n}` },
        { h: 'Puntatori e array', p: [
          'Il nome di un array si converte in un puntatore al suo primo elemento. Sommare 1 a un puntatore lo sposta avanti di un elemento, non di un byte.',
          '`p[i]` equivale a `*(p + i)`. Sottrarre due puntatori allo stesso array indica quanti elementi li separano.' ],
          code: `int a[] = {10, 20, 30};\nint* p = a;               // punta ad a[0]\nstd::cout << *(p + 1) << " " << p[2] << "\\n";  // 20 30\np++;                      // ora punta ad a[1]\nstd::cout << *p;          // 20` },
        { h: 'Esempio reale: cercare il codice di un prodotto', real: true, p: [
          'Un magazzino cerca un codice nel suo inventario. La funzione restituisce un puntatore all’elemento trovato oppure `nullptr` se non esiste, e chi la chiama controlla il risultato.' ],
          code: `#include <iostream>\n#include <vector>\n\nconst int* trova_codice(const std::vector<int>& codici, int cercato) {\n    for (const int& c : codici)\n        if (c == cercato) return &c;\n    return nullptr;\n}\n\nint main() {\n    std::vector<int> scorte = {1201, 3307, 4410};\n    if (const int* p = trova_codice(scorte, 3307))\n        std::cout << "Trovato: " << *p << "\\n";     // Trovato: 3307\n    if (trova_codice(scorte, 9999) == nullptr)\n        std::cout << "Non trovato\\n";               // Non trovato\n}` },
      ],
      x: [
        mc('Cosa memorizza un puntatore?', ['L’indirizzo di memoria di un altro dato', 'Una copia del dato', 'La dimensione del dato', 'Il nome della variabile'], 'Un puntatore contiene un indirizzo; con `*` accedi al dato che si trova lì.'),
        fill(`int x = 5;\nint* p = ___x;`, ['&', '*', '#', '->'], '`&x` ottiene l’indirizzo di `x`.'),
        out(`int x = 5;\nint* p = &x;\n*p = 9;\nstd::cout << x;`, ['9', '5', 'Un indirizzo', 'Errore'], '`*p = 9` scrive nella variabile a cui punta `p`, cioè `x`.'),
        out(`int a[] = {2, 4, 6, 8};\nint* p = a;\np += 2;\nstd::cout << *p;`, ['6', '4', '2', '8'], '`p` parte da `a[0]` e avanza di due elementi fino ad `a[2]`.'),
        typ('Scrivi il valore di un puntatore che non punta a nulla', `int* p = ___;`, 'nullptr', '`nullptr` è il puntatore nullo del C++ moderno.'),
        mc('Cosa succede se fai `*p` quando `p` è `nullptr`?', ['Comportamento indefinito; di solito il programma crasha', 'Restituisce 0', 'Lancia un’eccezione', 'Non compila'], 'Per questo si controlla `p != nullptr` prima di dereferenziare.'),
        out(`int x = 3, y = 7;\nint* p = &x;\np = &y;\n*p += 1;\nstd::cout << x << y;`, ['38', '47', '37', '48'], 'Un puntatore può cambiare destinazione: dopo `p = &y`, il `+= 1` agisce su `y`.'),
        // Sfida finale
        out(`int v[] = {5, 1, 4, 2};\nint* p = v;\nint* q = v + 3;\nstd::swap(*p, *q);\np++;\n*p = *q * 10;\nstd::cout << v[0] << v[1] << " " << q - p;`, ['250 2', '250 3', '510 2', '210 2'], 'Lo swap lascia {2, 1, 4, 5}. `p` passa a `v[1]`, che diventa 5 * 10 = 50. `q` punta a `v[3]` e `p` a `v[1]`: distano 2 elementi.'),
      ],
    },
    // ───────────── Giorno 15 ─────────────
    {
      id: 'cpp-memory',
      t: 'Memoria dinamica',
      d: 'Stack e heap, new, delete, memory leak e puntatori pendenti.',
      guide: [
        { h: 'Stack e heap', p: [
          'Le variabili locali vivono sullo stack: si creano quando inizia il loro blocco e si distruggono automaticamente quando finisce. È veloce, ma la sua dimensione è limitata.',
          'L’heap memorizza i dati la cui dimensione o durata si decide mentre il programma è in esecuzione. Quella memoria si alloca e si libera a mano.' ] },
        { h: 'new e delete', p: [
          '`new` alloca memoria sull’heap e restituisce un puntatore. `delete` la libera.',
          'Per gli array si usano `new T[n]` e `delete[]`. Mescolarli (`new[]` con `delete`) è comportamento indefinito.',
          'Dopo aver liberato, conviene impostare il puntatore a `nullptr` per non usarlo per sbaglio.' ],
          code: `int* p = new int(42);       // un int sull’heap\nstd::cout << *p << "\\n";     // 42\ndelete p;\np = nullptr;\n\nint n = 5;\nint* dati = new int[n];     // array la cui dimensione si decide in esecuzione\ndati[0] = 7;\ndelete[] dati;` },
        { h: 'Memory leak', p: [
          'Se perdi il puntatore senza chiamare `delete`, quella memoria resta occupata fino alla fine del programma: è un leak.',
          'In un programma che resta attivo per giorni, come un server, i leak finiscono per esaurire la memoria.' ],
          code: `void elabora() {\n    int* buffer = new int[1000];\n    // ... lavoro ...\n    if (true) return;   // leak! esce senza delete[]\n    delete[] buffer;\n}` },
        { h: 'Puntatori pendenti e doppio delete', p: [
          'Un puntatore pendente (dangling) punta a memoria già liberata. Leggere o scrivere attraverso di esso è comportamento indefinito.',
          'Anche chiamare `delete` due volte sulla stessa memoria lo è. Impostare il puntatore a `nullptr` dopo averlo liberato evita entrambi gli errori, perché `delete nullptr` non fa nulla.' ] },
        { h: 'Esempio reale: voti di una classe di dimensione variabile', real: true, p: [
          'Il programma di una scuola non sa quanti studenti avrà ogni classe finché non viene eseguito. Prima lo risolviamo con `new[]` e `delete[]`.',
          'Nel C++ moderno la scelta abituale è `std::vector`, che alloca e libera da solo. Il giorno 26 vedrai gli smart pointer, che fanno lo stesso con oggetti singoli.' ],
          code: `#include <iostream>\n#include <vector>\n\nint main() {\n    int n = 4;\n    double* voti = new double[n]{6.5, 8, 9.5, 7};\n    double somma = 0;\n    for (int i = 0; i < n; i++) somma += voti[i];\n    std::cout << "Media: " << somma / n << "\\n";   // Media: 7.75\n    delete[] voti;   // indispensabile\n\n    // Lo stesso, senza new né delete:\n    std::vector<double> v = {6.5, 8, 9.5, 7};\n}` },
      ],
      x: [
        mc('Dove si memorizzano le variabili locali di una funzione?', ['Sullo stack', 'Sull’heap', 'Sul disco', 'In un file temporaneo'], 'Si creano quando inizia il blocco e si distruggono automaticamente quando finisce.'),
        fill(`int* dati = new int[100];\n// ...\n___ dati;`, ['delete[]', 'delete', 'free', 'remove'], 'Ciò che è stato allocato con `new[]` si libera con `delete[]`.'),
        mc('Cos’è un memory leak?', ['Memoria allocata con new che non viene mai liberata', 'Leggere oltre la fine di un array', 'Un puntatore che vale nullptr', 'Una variabile non inizializzata'], 'La memoria resta occupata anche se nessuno può usarla.'),
        out(`int* p = new int(7);\n*p *= 3;\nint r = *p;\ndelete p;\nstd::cout << r;`, ['21', '7', 'Dati casuali', 'Errore'], '`r` memorizza una copia del valore (21) prima di liberare, quindi si può usare senza problemi.'),
        typ('Libera l’intero allocato con new', `int* p = new int(5);\n___ p;`, 'delete', 'Un singolo oggetto creato con `new` si libera con `delete` (senza parentesi quadre).'),
        mc('Cos’è un puntatore pendente?', ['Un puntatore a memoria già liberata', 'Un puntatore che vale nullptr', 'Un puntatore a un altro puntatore', 'Un puntatore a una costante'], 'Usarlo è comportamento indefinito.'),
        ord('Alloca sull’heap un array di n interi', ['int*', 'dati', '=', 'new', 'int[n]', ';'], ['malloc', 'delete'], '`new int[n]` alloca `n` interi e restituisce un puntatore al primo.'),
        // Sfida finale
        out(`int n = 4;\nint* a = new int[n];\nfor (int i = 0; i < n; i++) a[i] = i * i;\nint* b = a + 1;\nint s = 0;\nfor (int i = 0; i < 3; i++) s += b[i];\ndelete[] a;\nstd::cout << s;`, ['14', '13', '5', 'Errore'], 'L’array è {0, 1, 4, 9}. `b` punta ad `a[1]`, quindi somma 1 + 4 + 9 = 14. `s` si calcola prima di liberare.'),
      ],
    },
    // ───────────── Giorno 16 ─────────────
    {
      id: 'cpp-structs',
      t: 'Struct ed enum',
      d: 'Raggruppare dati con struct e definire costanti con enum class.',
      guide: [
        { h: 'struct: raggruppare dati', p: [
          'Una `struct` riunisce più dati correlati sotto un unico tipo. Ogni dato è un membro e vi si accede con il punto: `p.x`.',
          'La definizione termina con `;` dopo la parentesi graffa di chiusura. Dimenticarlo produce errori confusi sulla riga successiva.' ],
          code: `struct Punto {\n    double x;\n    double y;\n};\n\nPunto p{3, 4};\np.x = 5;\nstd::cout << p.x << "," << p.y;  // 5,4` },
        { h: 'Valori predefiniti e funzioni', p: [
          'I membri possono avere un valore predefinito che si usa se non ne dai un altro quando crei l’oggetto.',
          'Per passare una struct a una funzione che la legge soltanto, usa `const&` per evitare di copiarla.' ],
          code: `struct Prodotto {\n    std::string nome;\n    double prezzo = 0;\n    int scorte = 0;\n};\n\ndouble valore_scorte(const Prodotto& p) {\n    return p.prezzo * p.scorte;\n}\n\nProdotto tastiera{"Tastiera", 25.5, 4};\nstd::cout << valore_scorte(tastiera);  // 102` },
        { h: 'Vector di struct e structured binding', p: [
          'Un `std::vector<Prodotto>` funziona come una piccola tabella: ogni elemento è una riga.',
          'Dal C++17 puoi scomporre i membri in variabili: `auto [nome, prezzo, scorte] = p;`. Funziona anche nel range-for.' ],
          code: `std::vector<Punto> percorso = {{0, 0}, {3, 4}, {6, 8}};\nfor (const auto& [x, y] : percorso)\n    std::cout << "(" << x << ", " << y << ") ";\n// (0, 0) (3, 4) (6, 8)` },
        { h: 'enum class', p: [
          'Una `enum class` definisce un tipo con un insieme chiuso di valori con nome. Si scrivono con il nome del tipo davanti: `Colore::Verde`.',
          'L’`enum` classico mette i suoi nomi nell’ambito esterno e si converte in `int` senza avvisare. `enum class` evita entrambi i problemi; se ti serve il numero, convertilo con `static_cast<int>`.',
          'Per impostazione predefinita, il primo valore è 0, il secondo 1 e così via.' ],
          code: `enum class Colore { Rosso, Verde, Blu };\n\nColore c = Colore::Verde;\nif (c == Colore::Verde) std::cout << "Avanti\\n";\nstd::cout << static_cast<int>(c);  // 1` },
        { h: 'Esempio reale: ordini di un negozio', real: true, p: [
          'Un negozio memorizza ogni ordine in una struct e il suo stato in una `enum class`. Così è impossibile scrivere uno stato inventato come `"spedto"`, e uno `switch` trasforma ogni stato in testo.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nenum class Stato { InAttesa, Spedito, Consegnato };\n\nstruct Ordine {\n    int id;\n    double totale;\n    Stato stato;\n};\n\nstd::string testo(Stato s) {\n    switch (s) {\n        case Stato::InAttesa:   return "in attesa";\n        case Stato::Spedito:    return "spedito";\n        case Stato::Consegnato: return "consegnato";\n    }\n    return "?";\n}\n\nint main() {\n    std::vector<Ordine> ordini = {\n        {101, 35.5, Stato::Spedito},\n        {102, 12.0, Stato::InAttesa},\n        {103, 80.0, Stato::InAttesa}};\n    double da_spedire = 0;\n    for (const auto& o : ordini) {\n        std::cout << o.id << ": " << testo(o.stato) << "\\n";\n        if (o.stato == Stato::InAttesa) da_spedire += o.totale;\n    }\n    std::cout << "Da spedire: " << da_spedire << " euro\\n";  // 92 euro\n}` },
      ],
      x: [
        fill(`struct Punto {\n    int x, y;\n}___`, [';', ':', ',', '.'], 'La definizione di una struct termina con un punto e virgola dopo la graffa.'),
        out(`struct P { int x; int y; };\n\nP p{2, 5};\np.y += p.x;\nstd::cout << p.y;`, ['7', '5', '2', '25'], '`p{2, 5}` assegna x = 2 e y = 5; poi y diventa 5 + 2 = 7.'),
        mc('Che vantaggio ha `enum class` rispetto all’`enum` classico?', ['I suoi nomi non si mescolano con gli altri e non diventa un int per sbaglio', 'Usa meno memoria', 'Permette valori decimali', 'Si può usare come std::string'], 'Per questo si scrive `Colore::Rosso` e si usa `static_cast<int>` per ottenere il numero.'),
        out(`enum class Taglia { S, M, L, XL };\nstd::cout << static_cast<int>(Taglia::L);`, ['2', '3', 'L', 'Errore'], 'I valori si numerano da 0: S = 0, M = 1, L = 2.'),
        typ('Accedi al valore Verde della enum class', `enum class Semaforo { Rosso, Giallo, Verde };\nSemaforo s = Semaforo___Verde;`, '::', 'I valori di una `enum class` si scrivono con l’operatore di ambito: `Semaforo::Verde`.'),
        out(`struct Config {\n    int volume = 50;\n    bool muto = false;\n};\n\nConfig c;\nc.volume += 10;\nstd::cout << c.volume << c.muto;`, ['600', '60false', '500', '6001'], 'I valori predefiniti danno 50 e `false`. 50 + 10 = 60 e il `bool` si stampa come 0.'),
        out(`struct Coppia { std::string k; int v; };\n\nCoppia c{"eta", 30};\nauto [chiave, valore] = c;\nstd::cout << chiave << "=" << valore;`, ['eta=30', 'k=v', '30=eta', 'Errore'], 'Lo structured binding copia i membri in ordine: `chiave` riceve "eta" e `valore` riceve 30.'),
        // Sfida finale
        out(`struct Articolo { std::string nome; double prezzo; int unita; };\n\nstd::vector<Articolo> carrello = {{"pane", 1.5, 2}, {"latte", 0.9, 6}, {"formaggio", 4.0, 1}};\ndouble totale = 0, riga_max = 0;\nstd::string piu_cara;\nfor (const auto& [n, p, u] : carrello) {\n    totale += p * u;\n    if (p * u > riga_max) { riga_max = p * u; piu_cara = n; }\n}\nstd::cout << totale << " " << piu_cara;`, ['12.4 latte', '12.4 formaggio', '6.4 formaggio', '9 latte'], 'Le righe valgono 3, 5.4 e 4, che sommano 12.4. La riga più cara è quella del latte (5.4), anche se il formaggio ha il prezzo unitario più alto.'),
      ],
    },
    // ───────────── Giorno 17 ─────────────
    {
      id: 'cpp-classes',
      t: 'Classi',
      d: 'class, public, private, metodi const, this e ->.',
      guide: [
        { h: 'Dati e comportamento insieme', p: [
          'Una `class` raggruppa dati (attributi) e le funzioni che lavorano con essi (metodi). Ogni oggetto creato dalla classe ha i propri dati.',
          'La differenza con `struct` è l’accesso predefinito: in una `class` tutto è privato se non dici altrimenti; in una `struct`, pubblico.' ],
          code: `class Contatore {\npublic:\n    void incrementa() { valore++; }\n    int get() const { return valore; }\nprivate:\n    int valore = 0;\n};\n\nContatore c;\nc.incrementa();\nc.incrementa();\nstd::cout << c.get();  // 2\n// c.valore = 10;  // errore: valore è privato` },
        { h: 'Incapsulamento', p: [
          'La prassi è tenere gli attributi `private` e offrire metodi `public` che li gestiscono. Così la classe garantisce che i suoi dati siano sempre validi.',
          'Se domani cambi il modo in cui i dati sono memorizzati dentro, il codice che usa la classe non deve cambiare.' ],
          code: `class Termostato {\npublic:\n    void imposta(int g) {\n        if (g < 15) g = 15;   // la classe fa rispettare i suoi limiti\n        if (g > 30) g = 30;\n        gradi = g;\n    }\n    int get() const { return gradi; }\nprivate:\n    int gradi = 20;\n};` },
        { h: 'Metodi const', p: [
          'Un metodo marcato `const` alla fine promette di non modificare l’oggetto. Il compilatore lo verifica.',
          'Solo i metodi `const` si possono chiamare su oggetti `const` o riferimenti `const&`. Marca come `const` ogni metodo che legge soltanto.' ] },
        { h: 'this e ->', p: [
          'Dentro un metodo, `this` è un puntatore all’oggetto corrente. È utile, per esempio, quando un parametro ha lo stesso nome di un attributo.',
          'Con un puntatore a un oggetto, `p->metodo()` è la forma breve di `(*p).metodo()`.' ],
          code: `class Giocatore {\npublic:\n    void set_nome(std::string nome) { this->nome = nome; }\n    std::string get() const { return nome; }\nprivate:\n    std::string nome;\n};\n\nGiocatore g;\nGiocatore* p = &g;\np->set_nome("Leo");\nstd::cout << g.get();  // Leo` },
        { h: 'Esempio reale: un conto bancario', real: true, p: [
          'Una banca non lascerebbe mai che una parte qualsiasi del programma cambiasse direttamente il saldo. La classe permette solo di versare e prelevare importi validi e restituisce un `bool` per indicare se l’operazione è stata rifiutata.' ],
          code: `#include <iostream>\n\nclass Conto {\npublic:\n    bool versa(double importo) {\n        if (importo <= 0) return false;\n        saldo += importo;\n        return true;\n    }\n    bool preleva(double importo) {\n        if (importo <= 0 || importo > saldo) return false;\n        saldo -= importo;\n        return true;\n    }\n    double get_saldo() const { return saldo; }\nprivate:\n    double saldo = 0;\n};\n\nint main() {\n    Conto c;\n    c.versa(200);\n    std::cout << c.preleva(500) << " " << c.preleva(50) << "\\n";  // 0 1\n    std::cout << c.get_saldo() << "\\n";                         // 150\n}` },
      ],
      x: [
        mc('Qual è l’accesso predefinito dei membri di una `class`?', ['private', 'public', 'protected', 'Non ne ha'], 'In una `class` tutto è privato se non si indica altro; in una `struct`, pubblico.'),
        fill(`class Gatto {\n___:\n    void miagola() { std::cout << "Miao"; }\n};`, ['public', 'open', 'export', 'global'], '`public:` rende utilizzabile dall’esterno della classe ciò che segue.'),
        out(`class C {\npublic:\n    void somma(int n) { totale += n; }\n    int get() const { return totale; }\nprivate:\n    int totale = 0;\n};\n\nC c;\nc.somma(4);\nc.somma(-1);\nstd::cout << c.get();`, ['3', '4', '5', 'Errore'], 'L’oggetto conserva il suo `totale` tra una chiamata e l’altra: 0 + 4 - 1 = 3.'),
        mc('Cosa significa il `const` finale in `int get() const`?', ['Il metodo non modifica l’oggetto', 'Restituisce una costante', 'Non si può ridefinire', 'Si può chiamare una sola volta'], 'Così il metodo si può usare anche con oggetti `const`.'),
        typ('Chiama il metodo attraverso un puntatore', `Conto c;\nConto* p = &c;\np___versa(50);`, '->', '`p->versa(50)` equivale a `(*p).versa(50)`.'),
        mc('Cosa succede con `c.totale = 99;` se `totale` è privato?', ['Non compila', 'Il valore cambia', 'Lancia un’eccezione', 'Viene ignorato senza avvisi'], 'Il compilatore blocca l’accesso ai membri privati dall’esterno della classe.'),
        out(`class Termostato {\npublic:\n    void imposta(int g) { gradi = g < 15 ? 15 : (g > 30 ? 30 : g); }\n    int get() const { return gradi; }\nprivate:\n    int gradi = 20;\n};\n\nTermostato t;\nt.imposta(42);\nstd::cout << t.get();`, ['30', '42', '20', '15'], 'Il metodo limita il valore all’intervallo 15-30, quindi 42 diventa 30.'),
        // Sfida finale
        out(`class Conto {\npublic:\n    bool versa(double x) {\n        if (x <= 0) return false;\n        saldo += x;\n        return true;\n    }\n    bool preleva(double x) {\n        if (x > saldo) return false;\n        saldo -= x;\n        return true;\n    }\n    double get() const { return saldo; }\nprivate:\n    double saldo = 0;\n};\n\nConto c;\nc.versa(100);\nc.versa(-20);\nbool a = c.preleva(30);\nbool b = c.preleva(80);\nstd::cout << a << b << " " << c.get();`, ['10 70', '11 -10', '10 50', '11 70'], 'Il versamento negativo viene rifiutato: il saldo è 100. Prelevare 30 funziona (1) e lascia 70; prelevare 80 no (0) perché supera il saldo.'),
      ],
    },
    // ───────────── Giorno 18 ─────────────
    {
      id: 'cpp-constructors',
      t: 'Costruttori e distruttori',
      d: 'Inizializzazione, liste di inizializzazione, explicit, distruttori e RAII.',
      guide: [
        { h: 'Costruttori', p: [
          'Un costruttore è un metodo speciale che viene eseguito quando si crea l’oggetto. Ha lo stesso nome della classe e nessun tipo di ritorno, nemmeno `void`.',
          'Fa sì che l’oggetto nasca con dati validi, così non devi configurarlo dopo.' ],
          code: `class Prodotto {\npublic:\n    Prodotto(std::string n, double p) {\n        nome = n;\n        prezzo = p;\n    }\n    void mostra() const { std::cout << nome << ": " << prezzo << "\\n"; }\nprivate:\n    std::string nome;\n    double prezzo;\n};\n\nProdotto p("Mouse", 19.9);\np.mostra();  // Mouse: 19.9` },
        { h: 'Lista di inizializzazione', p: [
          'Il modo preferito per dare un valore agli attributi è la lista di inizializzazione, che va dopo `:` prima del corpo. Inizializza direttamente invece di creare e poi assegnare.',
          'È obbligatoria per attributi `const` e riferimenti. Gli attributi si inizializzano nell’ordine in cui sono dichiarati nella classe, non in quello della lista.' ],
          code: `class Prodotto {\npublic:\n    Prodotto(std::string n, double p) : nome(n), prezzo(p) {}\nprivate:\n    std::string nome;\n    double prezzo;\n};` },
        { h: 'Più costruttori ed explicit', p: [
          'Una classe può avere più costruttori (overloading). Quello senza parametri è il costruttore predefinito.',
          'Un costruttore con un solo parametro permette conversioni implicite: `Temperatura t = 30;`. Marcalo `explicit` per impedirle ed evitare sorprese.' ],
          code: `class Temperatura {\npublic:\n    Temperatura() : gradi(20) {}\n    explicit Temperatura(double g) : gradi(g) {}\n    double get() const { return gradi; }\nprivate:\n    double gradi;\n};\n\nTemperatura a;          // 20\nTemperatura b(25.5);    // 25.5\n// Temperatura c = 30;  // errore grazie a explicit` },
        { h: 'Distruttori e RAII', p: [
          'Il distruttore (`~Classe()`) viene eseguito automaticamente quando l’oggetto viene distrutto, per esempio alla fine del suo blocco. Gli oggetti si distruggono in ordine inverso rispetto alla creazione.',
          'RAII è l’idea centrale del C++: il costruttore acquisisce una risorsa (memoria, un file, una connessione) e il distruttore la rilascia. Così non dimentichi mai di rilasciarla, nemmeno quando si verificano errori.' ],
          code: `class Traccia {\npublic:\n    Traccia(std::string n) : nome(n) { std::cout << "entra " << nome << "\\n"; }\n    ~Traccia() { std::cout << "esce " << nome << "\\n"; }\nprivate:\n    std::string nome;\n};\n\nint main() {\n    Traccia a("A");\n    {\n        Traccia b("B");\n    }                       // qui si distrugge B\n    std::cout << "fine\\n";\n}                           // qui si distrugge A\n// entra A, entra B, esce B, fine, esce A` },
        { h: 'Esempio reale: cronometrare un’attività', real: true, p: [
          'Un team vuole sapere quali funzioni del suo programma sono lente. Questo cronometro inizia a contare nel costruttore e mostra il tempo nel distruttore: basta crearlo all’inizio della funzione.' ],
          code: `#include <chrono>\n#include <iostream>\n#include <string>\n\nclass Cronometro {\npublic:\n    explicit Cronometro(std::string attivita)\n        : attivita(attivita), inizio(std::chrono::steady_clock::now()) {}\n    ~Cronometro() {\n        auto fine = std::chrono::steady_clock::now();\n        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(fine - inizio).count();\n        std::cout << attivita << " ha impiegato " << ms << " ms\\n";\n    }\nprivate:\n    std::string attivita;\n    std::chrono::steady_clock::time_point inizio;\n};\n\nvoid esporta_report() {\n    Cronometro c("esporta_report");\n    // ... lavoro ...\n}   // all’uscita, il distruttore mostra il tempo` },
      ],
      x: [
        mc('Che tipo di ritorno ha un costruttore?', ['Nessuno, nemmeno void', 'void', 'Il tipo della classe', 'int'], 'I costruttori non dichiarano un tipo di ritorno.'),
        fill(`class File {\npublic:\n    ___File() { std::cout << "chiuso"; }\n};`, ['~', '!', '-', '#'], 'Il distruttore si scrive con `~` davanti al nome della classe.'),
        out(`struct T {\n    char c;\n    T(char c) : c(c) { std::cout << c; }\n    ~T() { std::cout << c; }\n};\n\nint main() {\n    T a('x');\n    { T b('y'); }\n    T c('z');\n}`, ['xyyzzx', 'xyzzyx', 'xyzxyz', 'xyyzxz'], '`b` si crea e si distrugge dentro il suo blocco (yy). Alla fine di `main`, `c` e `a` si distruggono in ordine inverso alla creazione (zx).'),
        typ('Completa la lista di inizializzazione', `class Punto {\npublic:\n    Punto(int x, int y) ___ x(x), y(y) {}\nprivate:\n    int x, y;\n};`, ':', 'La lista di inizializzazione inizia con i due punti dopo i parametri.'),
        mc('Cosa impedisce `explicit` in un costruttore con un solo parametro?', ['Conversioni implicite come `Temperatura t = 30;`', 'Chiamare il costruttore', 'Copiare l’oggetto', 'Eseguire il distruttore'], 'Con `explicit` devi scrivere `Temperatura t(30);`.'),
        mc('Cosa significa RAII?', ['Il costruttore acquisisce una risorsa e il distruttore la rilascia', 'Ogni classe deve ereditare da un’altra', 'La memoria viene liberata da un garbage collector', 'Gli attributi devono essere pubblici'], 'Dato che il distruttore viene sempre eseguito, la risorsa non resta mai senza essere rilasciata.'),
        out(`class Scatola {\npublic:\n    Scatola() : larghezza(1), altezza(1) {}\n    Scatola(int l, int a) : larghezza(l), altezza(a) {}\n    int area() const { return larghezza * altezza; }\nprivate:\n    int larghezza, altezza;\n};\n\nScatola a;\nScatola b(3, 4);\nstd::cout << a.area() + b.area();`, ['13', '12', '7', 'Errore'], '`a` usa il costruttore predefinito (1 × 1) e `b` quello con due parametri (3 × 4): 1 + 12 = 13.'),
        // Sfida finale
        out(`struct P {\n    char id;\n    P(char id) : id(id) { std::cout << "+" << id; }\n    ~P() { std::cout << "-" << id; }\n};\n\nstruct Auto {\n    P motore{'m'};\n    P ruote{'r'};\n    Auto() { std::cout << "+C"; }\n    ~Auto() { std::cout << "-C"; }\n};\n\nint main() {\n    Auto a;\n}`, ['+m+r+C-C-r-m', '+C+m+r-r-m-C', '+m+r+C-C-m-r', '+C+m+r-C-r-m'], 'Gli attributi si costruiscono nell’ordine di dichiarazione prima del corpo del costruttore. Nella distruzione, prima si esegue il corpo del distruttore e poi gli attributi in ordine inverso.'),
      ],
    },
    // ───────────── Giorno 19 ─────────────
    {
      id: 'cpp-inheritance',
      t: 'Ereditarietà',
      d: 'Classi derivate, protected, costruttori della base e ordine di costruzione.',
      guide: [
        { h: 'Classi derivate', p: [
          'L’ereditarietà crea una nuova classe a partire da un’altra: `class Cane : public Animale`. La classe derivata riceve gli attributi e i metodi della base e aggiunge i propri.',
          'Usala quando c’è una relazione "è un": un cane è un animale. Se la relazione è "ha un" (un’auto ha un motore), usa un attributo.' ],
          code: `class Animale {\npublic:\n    std::string nome;\n    void mangia() const { std::cout << nome << " mangia\\n"; }\n};\n\nclass Cane : public Animale {\npublic:\n    void abbaia() const { std::cout << nome << " abbaia\\n"; }\n};\n\nCane c;\nc.nome = "Toby";\nc.mangia();   // Toby mangia\nc.abbaia();   // Toby abbaia` },
        { h: 'protected', p: [
          '`private`: solo la classe stessa. `protected`: la classe stessa e le sue derivate. `public`: chiunque.',
          'Usa `protected` per ciò che le classi figlie devono toccare ma il resto del programma no.' ] },
        { h: 'Costruttori ed ereditarietà', p: [
          'La classe derivata chiama il costruttore della base nella sua lista di inizializzazione: `Responsabile(...) : Impiegato(n, s)`.',
          'Prima si costruisce la parte della base e poi quella derivata. Nella distruzione, l’ordine si inverte.' ],
          code: `class Impiegato {\npublic:\n    Impiegato(std::string n, double s) : nome(n), stipendio(s) {}\nprotected:\n    std::string nome;\n    double stipendio;\n};\n\nclass Responsabile : public Impiegato {\npublic:\n    Responsabile(std::string n, double s, double bonus)\n        : Impiegato(n, s), bonus(bonus) {}\n    double totale() const { return stipendio + bonus; }  // stipendio è protected\nprivate:\n    double bonus;\n};\n\nResponsabile r("Marta", 3000, 500);\nstd::cout << r.totale();  // 3500` },
        { h: 'Ridefinire metodi e chiamare la base', p: [
          'Se la classe derivata definisce un metodo con lo stesso nome della base, nasconde la versione della base.',
          'Dalla derivata puoi comunque chiamare la versione originale con `Base::metodo()`. Così estendi il comportamento invece di ripeterlo.' ] },
        { h: 'Esempio reale: i veicoli di una flotta', real: true, p: [
          'Un’azienda di trasporti gestisce auto e camion. Tutti hanno una targa e un chilometraggio; i camion aggiungono il carico massimo. La descrizione del camion riutilizza quella della base e aggiunge i propri dati.' ],
          code: `#include <iostream>\n#include <string>\n\nclass Veicolo {\npublic:\n    Veicolo(std::string targa, int km) : targa(targa), km(km) {}\n    std::string descrivi() const {\n        return targa + " (" + std::to_string(km) + " km)";\n    }\nprotected:\n    std::string targa;\n    int km;\n};\n\nclass Camion : public Veicolo {\npublic:\n    Camion(std::string targa, int km, int carico)\n        : Veicolo(targa, km), carico(carico) {}\n    std::string descrivi() const {\n        return Veicolo::descrivi() + ", carico " + std::to_string(carico) + " kg";\n    }\nprivate:\n    int carico;\n};\n\nint main() {\n    Camion c("AB123CD", 85000, 12000);\n    std::cout << c.descrivi() << "\\n";  // AB123CD (85000 km), carico 12000 kg\n}` },
      ],
      x: [
        fill(`class Gatto ___ public Animale {\n    // ...\n};`, [':', '->', 'extends', '::'], 'In C++ l’ereditarietà si scrive con i due punti: `class Gatto : public Animale`.'),
        mc('Da dove si può accedere a un membro `protected`?', ['Dalla classe stessa e dalle sue derivate', 'Da qualsiasi punto', 'Solo dalla classe stessa', 'Solo da main'], '`protected` sta a metà strada tra `private` e `public`.'),
        out(`struct A {\n    A() { std::cout << "A"; }\n    ~A() { std::cout << "a"; }\n};\nstruct B : A {\n    B() { std::cout << "B"; }\n    ~B() { std::cout << "b"; }\n};\n\nint main() { B obj; }`, ['ABba', 'BAab', 'ABab', 'BAba'], 'Prima si costruisce la base e poi la derivata; nella distruzione l’ordine si inverte.'),
        out(`struct Base {\n    std::string ciao() const { return "base"; }\n};\nstruct Figlia : Base {\n    std::string ciao() const { return "figlia+" + Base::ciao(); }\n};\n\nFiglia f;\nstd::cout << f.ciao();`, ['figlia+base', 'base', 'figlia', 'base+figlia'], '`Figlia::ciao` nasconde la versione della base, ma la chiama esplicitamente con `Base::ciao()`.'),
        typ('Chiama il costruttore della classe base', `class Responsabile : public Impiegato {\npublic:\n    Responsabile(std::string n) : ___(n) {}\n};`, 'Impiegato', 'La base si inizializza nella lista di inizializzazione usando il suo nome.'),
        mc('Quale relazione rappresenta bene l’ereditarietà pubblica?', ['"È un": un cane è un animale', '"Ha un": un’auto ha un motore', '"Usa un": un programma usa un file', '"Contiene vari": una lista contiene numeri'], 'Per "ha un" si usa un attributo, non l’ereditarietà.'),
        ord('Dichiara una classe Moto che eredita pubblicamente da Veicolo', ['class', 'Moto', ':', 'public', 'Veicolo', '{', '};'], ['extends', 'private'], 'Prima il nome della nuova classe, poi `: public` e la classe base.'),
        // Sfida finale
        out(`class Conto {\npublic:\n    Conto(double s) : saldo(s) {}\n    double get() const { return saldo; }\nprotected:\n    double saldo;\n};\n\nclass Risparmio : public Conto {\npublic:\n    Risparmio(double s, double tasso) : Conto(s), tasso(tasso) {}\n    void anno() { saldo += saldo * tasso; }\nprivate:\n    double tasso;\n};\n\nRisparmio r(1000, 0.1);\nr.anno();\nr.anno();\nstd::cout << r.get();`, ['1210', '1200', '1100', '1000'], '`Risparmio` può modificare `saldo` perché è `protected`. Gli interessi si accumulano: 1000 → 1100 → 1210.'),
      ],
    },
    // ───────────── Giorno 20 ─────────────
    {
      id: 'cpp-polymorphism',
      t: 'Polimorfismo',
      d: 'virtual, override, classi astratte e distruttori virtuali.',
      guide: [
        { h: 'Il problema', p: [
          'Un puntatore o riferimento alla classe base può puntare a un oggetto derivato. Ma per impostazione predefinita, C++ decide quale metodo chiamare in base al tipo del puntatore, non dell’oggetto reale.',
          'Quindi se memorizzi un `Cerchio` in una `Forma&`, verrebbe chiamato il metodo di `Forma`.' ] },
        { h: 'virtual e override', p: [
          'Un metodo `virtual` viene scelto mentre il programma è in esecuzione, in base al tipo reale dell’oggetto. È questo il polimorfismo.',
          'Nella classe derivata, marca il metodo con `override`: il compilatore controllerà che sostituisca davvero un metodo virtuale della base e ti avviserà se hai sbagliato nome o parametri.' ],
          code: `class Forma {\npublic:\n    virtual double area() const { return 0; }\n    virtual ~Forma() = default;\n};\n\nclass Cerchio : public Forma {\npublic:\n    explicit Cerchio(double r) : r(r) {}\n    double area() const override { return 3.14159 * r * r; }\nprivate:\n    double r;\n};\n\nclass Quadrato : public Forma {\npublic:\n    explicit Quadrato(double l) : l(l) {}\n    double area() const override { return l * l; }\nprivate:\n    double l;\n};\n\nCerchio c(1);\nQuadrato q(2);\nconst Forma& f = q;\nstd::cout << f.area();  // 4: si usa l’area di Quadrato` },
        { h: 'Classi astratte', p: [
          'Un metodo virtuale puro (`= 0`) non ha implementazione nella base: obbliga le classi derivate a scriverne una.',
          'Una classe con almeno un metodo virtuale puro è astratta e non se ne possono creare oggetti. Funziona come un contratto: definisce cosa devono saper fare le sue derivate.' ],
          code: `class Notificatore {\npublic:\n    virtual void invia(const std::string& msg) const = 0;\n    virtual ~Notificatore() = default;\n};\n\n// Notificatore n;  // errore: è una classe astratta` },
        { h: 'Distruttore virtuale', p: [
          'Se fai `delete` di un oggetto derivato attraverso un puntatore alla base e il distruttore della base non è virtuale, il distruttore derivato non viene eseguito: è comportamento indefinito.',
          'Regola: ogni classe pensata per essere usata in modo polimorfico ha bisogno di `virtual ~Base() = default;`.' ] },
        { h: 'Esempio reale: notifiche via email e SMS', real: true, p: [
          'Un negozio avvisa i clienti attraverso più canali. Il codice che invia le notifiche conosce solo `Notificatore`; aggiungere un nuovo canale (le notifiche push, per esempio) non richiede di modificarlo.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nclass Notificatore {\npublic:\n    virtual void invia(const std::string& msg) const = 0;\n    virtual ~Notificatore() = default;\n};\n\nclass Email : public Notificatore {\npublic:\n    void invia(const std::string& msg) const override { std::cout << "[email] " << msg << "\\n"; }\n};\n\nclass Sms : public Notificatore {\npublic:\n    void invia(const std::string& msg) const override { std::cout << "[sms] " << msg << "\\n"; }\n};\n\nvoid avvisa_tutti(const std::vector<const Notificatore*>& canali, const std::string& msg) {\n    for (const Notificatore* c : canali) c->invia(msg);\n}\n\nint main() {\n    Email e;\n    Sms s;\n    avvisa_tutti({&e, &s}, "Il tuo ordine è stato spedito");\n    // [email] Il tuo ordine è stato spedito\n    // [sms] Il tuo ordine è stato spedito\n}` },
      ],
      x: [
        mc('Quale parola chiave fa sì che un metodo venga scelto in base al tipo reale dell’oggetto?', ['virtual', 'override', 'static', 'dynamic'], '`override` controlla soltanto che tu sostituisca un metodo che è già virtuale.'),
        out(`struct A { void ciao() const { std::cout << "A"; } };\nstruct B : A { void ciao() const { std::cout << "B"; } };\n\nB b;\nA& r = b;\nr.ciao();\nb.ciao();`, ['AB', 'BB', 'AA', 'BA'], 'Senza `virtual`, la chiamata attraverso `A&` usa il metodo di `A`.'),
        out(`struct A { virtual void ciao() const { std::cout << "A"; } };\nstruct B : A { void ciao() const override { std::cout << "B"; } };\n\nB b;\nA& r = b;\nr.ciao();`, ['B', 'A', 'AB', 'Errore'], 'Con `virtual`, si chiama il metodo del tipo reale dell’oggetto, cioè `B`.'),
        fill(`class Forma {\npublic:\n    virtual double area() const ___ 0;\n};`, ['=', '==', ':', '->'], '`= 0` rende il metodo virtuale puro e la classe astratta.'),
        mc('Se `Forma` ha un metodo virtuale puro, cosa succede con `Forma f;`?', ['Non compila: non si possono creare oggetti di una classe astratta', 'Si crea con area 0', 'Lancia un’eccezione', 'Diventa un Cerchio'], 'Puoi creare solo oggetti delle classi derivate che implementano tutti i metodi puri.'),
        typ('Indica che il metodo sostituisce uno virtuale della base', `class Quadrato : public Forma {\n    double l = 2;\npublic:\n    double area() const ___ { return l * l; }\n};`, 'override', '`override` fa controllare al compilatore che il metodo esista e sia virtuale nella base.'),
        mc('Perché una classe base polimorfica ha bisogno di un distruttore virtuale?', ['Perché `delete` attraverso un puntatore alla base esegua anche il distruttore derivato', 'Per rendere la classe astratta', 'Perché l’oggetto si possa copiare', 'Per rendere il programma più veloce'], 'Senza di esso, eliminare attraverso la base è comportamento indefinito.'),
        // Sfida finale
        out(`struct Forma {\n    virtual double area() const = 0;\n    virtual std::string nome() const { return "forma"; }\n    virtual ~Forma() = default;\n};\nstruct Rett : Forma {\n    double a, b;\n    Rett(double a, double b) : a(a), b(b) {}\n    double area() const override { return a * b; }\n    std::string nome() const override { return "rect"; }\n};\nstruct Quad : Rett {\n    Quad(double l) : Rett(l, l) {}\n};\n\nRett r(2, 3);\nQuad q(4);\nstd::vector<const Forma*> v = {&r, &q};\ndouble totale = 0;\nfor (auto f : v) totale += f->area();\nstd::cout << totale << " " << v[1]->nome();`, ['22 rect', '22 forma', '22 quadrato', '10 rect'], 'Le aree sono 2 × 3 = 6 e 4 × 4 = 16. `Quad` non ridefinisce `nome()`, quindi eredita la versione di `Rett`.'),
      ],
    },
    // ───────────── Giorno 21 ─────────────
    {
      id: 'cpp-overloading',
      t: 'Overloading degli operatori',
      d: 'operator+, operator==, operator<, operator<< e funtori.',
      guide: [
        { h: 'Operatori per i tuoi tipi', p: [
          'C++ ti permette di definire cosa fanno `+`, `==`, `<`, `<<` e quasi tutti gli operatori con le tue classi. Così un vettore matematico si somma con `a + b` invece di `a.somma(b)`.',
          'Si definisce una funzione chiamata `operator` seguita dal simbolo. Usalo solo quando il significato è ovvio: un `+` che sottrae confonderebbe chiunque.' ],
          code: `struct Vec2 {\n    double x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n    Vec2 operator*(double k) const { return {x * k, y * k}; }\n};\n\nVec2 a{1, 2}, b{3, 4};\nVec2 c = a + b * 2;   // {7, 10}` },
        { h: 'Confrontare: operator== e operator<', p: [
          '`operator==` confronta due oggetti. In C++20 puoi chiedere al compilatore di generarlo, confrontando tutti i membri, con `= default`.',
          '`operator<` definisce un ordine. Con esso, `std::sort` e `std::set` sanno già ordinare i tuoi oggetti.' ],
          code: `struct Data {\n    int anno, mese, giorno;\n    bool operator==(const Data&) const = default;   // C++20\n    bool operator<(const Data& o) const {\n        if (anno != o.anno) return anno < o.anno;\n        if (mese != o.mese) return mese < o.mese;\n        return giorno < o.giorno;\n    }\n};\n\nData a{2024, 5, 1}, b{2024, 3, 9};\nstd::cout << (a == b) << (b < a);  // 01` },
        { h: 'Stampare con operator<<', p: [
          'Per usare `std::cout << oggetto`, definisci una funzione libera `operator<<` che riceve lo stream e l’oggetto, scrive sullo stream e lo restituisce.',
          'Restituire lo `std::ostream&` permette di concatenare più `<<`. Se la funzione ha bisogno dei membri privati, si dichiara `friend` dentro la classe.' ],
          code: `std::ostream& operator<<(std::ostream& os, const Vec2& v) {\n    return os << "(" << v.x << ", " << v.y << ")";\n}\n\nstd::cout << Vec2{7, 10} << "\\n";  // (7, 10)` },
        { h: 'Funtori: operator()', p: [
          'Se una classe definisce `operator()`, i suoi oggetti si possono chiamare come funzioni. Si chiamano funtori e, a differenza di una funzione normale, possono memorizzare dati.',
          'Gli operatori composti come `+=` modificano l’oggetto e restituiscono `*this` per riferimento.' ],
          code: `struct Moltiplicatore {\n    int fattore;\n    int operator()(int x) const { return x * fattore; }\n};\n\nMoltiplicatore triplo{3};\nstd::cout << triplo(5);  // 15` },
        { h: 'Esempio reale: importi senza errori di arrotondamento', real: true, p: [
          'Un bar somma importi. Con `double`, `0.1 + 0.2` non è esattamente `0.3`, quindi il denaro si memorizza in centesimi interi. Gli operatori permettono di usare la classe come qualsiasi altro numero.' ],
          code: `#include <iostream>\n\nclass Denaro {\npublic:\n    explicit Denaro(long long centesimi) : centesimi(centesimi) {}\n    Denaro operator+(const Denaro& o) const { return Denaro(centesimi + o.centesimi); }\n    Denaro operator*(int n) const { return Denaro(centesimi * n); }\n    bool operator<(const Denaro& o) const { return centesimi < o.centesimi; }\n    friend std::ostream& operator<<(std::ostream& os, const Denaro& d) {\n        long long c = d.centesimi % 100;\n        return os << d.centesimi / 100 << "," << (c < 10 ? "0" : "") << c << " €";\n    }\nprivate:\n    long long centesimi;\n};\n\nint main() {\n    Denaro caffe(150), toast(225);\n    Denaro totale = caffe * 2 + toast;\n    std::cout << totale << "\\n";             // 5,25 €\n    std::cout << (totale < Denaro(500));     // 0\n}` },
      ],
      x: [
        mc('Come si chiama la funzione che definisce l’operatore `+` di una classe?', ['operator+', 'plus', 'add', '__add__'], 'Si scrive `operator` seguito dal simbolo. `__add__` è Python.'),
        out(`struct Vec2 {\n    int x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n};\n\nVec2 a{1, 2}, b{3, 4};\nVec2 c = a + b;\nstd::cout << c.x << c.y;`, ['46', '13', '24', 'Errore'], '`a + b` chiama `operator+`: x = 1 + 3 = 4 e y = 2 + 4 = 6.'),
        fill(`std::ostream& operator___(std::ostream& os, const Punto& p) {\n    return os << p.x << "," << p.y;\n}`, ['<<', '>>', '+', '()'], 'Per usare `std::cout << p` si fa l’overloading di `operator<<`.'),
        out(`struct Sommatore {\n    int base;\n    int operator()(int x) const { return base + x; }\n};\n\nSommatore s{10};\nstd::cout << s(5) << s(s(1));`, ['1521', '1511', '1520', 'Errore'], '`s(5)` = 15. `s(1)` = 11 e `s(11)` = 21. Si stampano attaccati: 1521.'),
        mc('Perché `operator<<` restituisce `std::ostream&`?', ['Per poter concatenare più <<', 'Perché il compilatore lo richiede sempre', 'Per renderlo più veloce', 'Per leggere dalla tastiera'], '`std::cout << a << b` funziona perché `(std::cout << a)` restituisce di nuovo lo stream.'),
        typ('Chiedi al compilatore di generare il confronto == (C++20)', `struct P {\n    int x, y;\n    bool operator==(const P&) const = ___;\n};`, 'default', '`= default` genera un confronto membro per membro.'),
        out(`struct Compito {\n    std::string nome;\n    int priorita;\n    bool operator<(const Compito& o) const { return priorita < o.priorita; }\n};\n\nstd::vector<Compito> v = {{"b", 3}, {"a", 1}, {"c", 2}};\nstd::sort(v.begin(), v.end());\nfor (const auto& c : v) std::cout << c.nome;`, ['acb', 'abc', 'bca', 'cab'], '`std::sort` usa `operator<`, che ordina per priorità: 1 (a), 2 (c), 3 (b).'),
        // Sfida finale
        out(`struct Euro {\n    int cent;\n    Euro operator+(const Euro& o) const { return {cent + o.cent}; }\n    Euro& operator+=(const Euro& o) { cent += o.cent; return *this; }\n    bool operator<(const Euro& o) const { return cent < o.cent; }\n};\n\nEuro a{250}, b{199};\nEuro c = a + b;\nc += Euro{51};\nstd::cout << c.cent / 100 << "." << c.cent % 100 << " " << (a < b) << (b < c);`, ['5.0 01', '5.00 01', '5.0 10', '4.99 01'], '250 + 199 + 51 = 500 centesimi. 500 % 100 vale 0 e si stampa come "0", non "00". `a < b` è falso (0) e `b < c` è vero (1).'),
      ],
    },
    // ───────────── Giorno 22 ─────────────
    {
      id: 'cpp-templates',
      t: 'Template',
      d: 'template, typename, template di funzione e template di classe.',
      guide: [
        { h: 'Il problema del codice ripetuto', p: [
          'Se vuoi una funzione `maggiore` per `int`, un’altra per `double` e un’altra per `std::string`, finiresti per scrivere tre volte la stessa cosa.',
          'I template permettono di scrivere il codice una sola volta con un tipo generico. Il compilatore genera la versione concreta per ogni tipo che usi.' ] },
        { h: 'Template di funzione', p: [
          '`template <typename T>` dichiara un parametro di tipo chiamato `T`. Quando chiami la funzione, il compilatore deduce `T` dagli argomenti.',
          'Se gli argomenti non coincidono (`maggiore(3, 2.5)`: `T` è `int` o `double`?), non compila. Puoi indicare il tipo a mano: `maggiore<double>(3, 2.5)`.' ],
          code: `template <typename T>\nT maggiore(T a, T b) {\n    return a > b ? a : b;\n}\n\nstd::cout << maggiore(3, 7) << "\\n";        // 7\nstd::cout << maggiore(2.5, 1.5) << "\\n";    // 2.5\nstd::cout << maggiore<double>(3, 2.5);      // 3` },
        { h: 'Template di classe', p: [
          'Anche una classe può essere un template. Quando la usi indichi il tipo tra `< >`: `Scatola<int>`.',
          'Ne conosci già alcuni: `std::vector<int>`, `std::map<std::string, int>` e `std::array<double, 7>` sono template della libreria standard.' ],
          code: `template <typename T>\nclass Scatola {\npublic:\n    explicit Scatola(T valore) : valore(valore) {}\n    T get() const { return valore; }\nprivate:\n    T valore;\n};\n\nScatola<int> a(42);\nScatola<std::string> b("ciao");\nstd::cout << a.get() << " " << b.get();  // 42 ciao` },
        { h: 'Più parametri e valori costanti', p: [
          'Un template può avere più tipi (`template <typename K, typename V>`) e anche valori costanti noti in fase di compilazione, come una dimensione.',
          'Il codice dei template si genera in fase di compilazione, quindi non costa nulla durante l’esecuzione. Per questo di solito i template si scrivono interamente nei file `.h`.' ],
          code: `template <typename T, int N>\nclass Buffer {\npublic:\n    int capacita() const { return N; }\nprivate:\n    T dati[N];\n};\n\nBuffer<double, 8> b;\nstd::cout << b.capacita();  // 8` },
        { h: 'Esempio reale: statistiche per qualsiasi tipo di dato', real: true, p: [
          'Una dashboard di metriche calcola medie di visite (interi) e temperature (decimali). Un solo template serve per entrambi i casi e per qualsiasi tipo numerico futuro.' ],
          code: `#include <iostream>\n#include <vector>\n\ntemplate <typename T>\ndouble media(const std::vector<T>& v) {\n    if (v.empty()) return 0;\n    T somma{};\n    for (const T& x : v) somma += x;\n    return static_cast<double>(somma) / v.size();\n}\n\nint main() {\n    std::vector<int> visite = {120, 95, 143};\n    std::vector<double> temperature = {21.5, 23.0, 19.5};\n    std::cout << media(visite) << "\\n";        // 119.333\n    std::cout << media(temperature) << "\\n";   // 21.3333\n}` },
      ],
      x: [
        fill(`___ <typename T>\nT doppio(T x) {\n    return x * 2;\n}`, ['template', 'generic', 'typename', 'auto'], 'I template iniziano con `template <typename T>`.'),
        out(`template <typename T>\nT maggiore(T a, T b) { return a > b ? a : b; }\n\nstd::cout << maggiore(4, 9) << maggiore('a', 'z');`, ['9z', '4a', '9a', 'Errore'], 'Si genera una versione per `int` (9) e un’altra per `char` (\'z\' viene dopo \'a\').'),
        mc('Con `template <typename T> T maggiore(T a, T b)`, cosa succede con `maggiore(3, 2.5)`?', ['Non compila: T non può essere int e double allo stesso tempo', 'Restituisce 3', 'Restituisce 2.5', 'Converte entrambi in int'], 'Si risolve indicando il tipo: `maggiore<double>(3, 2.5)`.'),
        typ('Crea una Scatola che memorizza un double', `template <typename T>\nclass Scatola { /* ... */ };\n\nScatola<___> s(3.14);`, 'double', 'Il tipo concreto va tra `< >` quando usi il template di classe.'),
        out(`template <typename T>\nT somma3(T a, T b, T c) { return a + b + c; }\n\nstd::cout << somma3(1, 2, 3) << " " << somma3<std::string>("a", "b", "c");`, ['6 abc', '6 6', '123 abc', 'Errore'], 'Con `int` i numeri si sommano; con `std::string`, `+` concatena.'),
        mc('Quando genera il compilatore il codice di un template?', ['Quando viene usato con un tipo concreto', 'Quando legge la parola template', 'Mentre il programma è in esecuzione', 'Mai: i template vengono interpretati'], 'Per ogni tipo diverso con cui lo usi, genera una versione.'),
        out(`template <int N>\nint potenza(int base) {\n    int r = 1;\n    for (int i = 0; i < N; i++) r *= base;\n    return r;\n}\n\nstd::cout << potenza<3>(2) + potenza<2>(5);`, ['33', '13', '31', 'Errore'], '`potenza<3>(2)` = 8 e `potenza<2>(5)` = 25: sommano 33.'),
        // Sfida finale
        out(`template <typename T>\nclass Pila {\npublic:\n    void push(T x) { dati.push_back(x); }\n    T pop() { T x = dati.back(); dati.pop_back(); return x; }\n    bool vuota() const { return dati.empty(); }\nprivate:\n    std::vector<T> dati;\n};\n\nPila<std::string> p;\np.push("a");\np.push("b");\np.push("c");\nstd::string r;\nwhile (!p.vuota()) r += p.pop();\nPila<int> q;\nq.push(r.size());\nstd::cout << r << q.pop();`, ['cba3', 'abc3', 'cba0', 'abc0'], 'Una pila restituisce per primo l’ultimo elemento entrato: c, b, a. Il testo "cba" ha 3 caratteri e si memorizza nella `Pila<int>`.'),
      ],
    },
    // ───────────── Giorno 23 ─────────────
    {
      id: 'cpp-exceptions',
      t: 'Eccezioni',
      d: 'throw, try, catch, eccezioni standard ed eccezioni proprie.',
      guide: [
        { h: 'Errori che non si possono ignorare', p: [
          'Quando una funzione non può svolgere il suo compito, può lanciare un’eccezione con `throw`. L’esecuzione salta al `catch` più vicino che la accetta.',
          'Il codice che può fallire va dentro `try`. Se nessuno cattura l’eccezione, il programma termina.' ],
          code: `#include <stdexcept>\n\ndouble dividi(double a, double b) {\n    if (b == 0) throw std::invalid_argument("divisione per zero");\n    return a / b;\n}\n\ntry {\n    std::cout << dividi(10, 2) << "\\n";  // 5\n    std::cout << dividi(1, 0) << "\\n";   // lancia: questa riga non stampa nulla\n} catch (const std::invalid_argument& e) {\n    std::cout << "Errore: " << e.what() << "\\n";\n}` },
        { h: 'Eccezioni standard', p: [
          'L’header `<stdexcept>` offre `std::runtime_error`, `std::invalid_argument` e `std::out_of_range`, tra le altre. Tutte ereditano da `std::exception`, il cui metodo `what()` restituisce il messaggio.',
          'La libreria standard le usa: `std::stoi("ciao")` lancia `std::invalid_argument` e `v.at(10)` lancia `std::out_of_range`.' ],
          code: `try {\n    int n = std::stoi("ciao");\n} catch (const std::invalid_argument&) {\n    std::cout << "Non è un numero\\n";\n}\n\nstd::vector<int> v = {1, 2, 3};\ntry {\n    v.at(10);\n} catch (const std::out_of_range&) {\n    std::cout << "Indice fuori intervallo\\n";\n}` },
        { h: 'Più catch e il loro ordine', p: [
          'Un `try` può avere più blocchi `catch`. Si usa il primo che coincide, dall’alto verso il basso, quindi i tipi più specifici vanno prima di `std::exception`.',
          '`catch (...)` cattura qualsiasi cosa e deve andare per ultimo. Cattura sempre per riferimento costante (`const std::exception& e`) per non copiare l’oggetto né perdere informazioni.' ] },
        { h: 'Eccezioni proprie e RAII', p: [
          'Puoi creare le tue eccezioni ereditando da una standard. Così chi le cattura sa esattamente cosa è andato storto.',
          'Quando si lancia un’eccezione, si distruggono gli oggetti locali di ogni funzione che attraversa. Grazie a RAII, le risorse vengono rilasciate comunque.',
          '`noexcept` marca le funzioni che promettono di non lanciare nulla, come i distruttori.' ],
          code: `class FondiInsufficienti : public std::runtime_error {\npublic:\n    FondiInsufficienti() : std::runtime_error("fondi insufficienti") {}\n};\n\nvoid preleva(double& saldo, double importo) {\n    if (importo > saldo) throw FondiInsufficienti();\n    saldo -= importo;\n}` },
        { h: 'Esempio reale: validare l’età che scrive un utente', real: true, p: [
          'Un modulo riceve l’età come testo. Potrebbe non essere un numero o essere fuori intervallo, e ogni caso merita un messaggio diverso.',
          'Nota che prima si calcola l’età e poi si stampa: così non resta un "Età:" stampato a metà se la conversione fallisce.' ],
          code: `#include <iostream>\n#include <stdexcept>\n#include <string>\n\nint leggi_eta(const std::string& testo) {\n    int eta = std::stoi(testo);             // può lanciare invalid_argument\n    if (eta < 0 || eta > 120)\n        throw std::out_of_range("età fuori intervallo");\n    return eta;\n}\n\nint main() {\n    for (std::string input : {"34", "abc", "200"}) {\n        try {\n            int eta = leggi_eta(input);\n            std::cout << "Età: " << eta << "\\n";\n        } catch (const std::invalid_argument&) {\n            std::cout << "'" << input << "' non è un numero\\n";\n        } catch (const std::out_of_range& e) {\n            std::cout << e.what() << "\\n";\n        }\n    }\n}\n// Età: 34\n// 'abc' non è un numero\n// età fuori intervallo` },
      ],
      x: [
        fill(`if (b == 0)\n    ___ std::invalid_argument("b vale zero");`, ['throw', 'raise', 'catch', 'error'], 'In C++ le eccezioni si lanciano con `throw`. `raise` è Python.'),
        mc('Quale metodo di `std::exception` restituisce il messaggio di errore?', ['what()', 'message()', 'getMessage()', 'error()'], 'Tutte le eccezioni standard hanno `what()`.'),
        out(`try {\n    std::cout << "A";\n    throw std::runtime_error("x");\n    std::cout << "B";\n} catch (const std::exception& e) {\n    std::cout << "C";\n}\nstd::cout << "D";`, ['ACD', 'ABCD', 'AC', 'ABD'], 'Dopo il `throw` il resto del `try` non viene eseguito. Si esegue il `catch` e il programma continua dopo.'),
        out(`std::vector<int> v = {1, 2, 3};\ntry {\n    std::cout << v.at(5);\n} catch (const std::out_of_range&) {\n    std::cout << "fuori";\n}`, ['fuori', '0', 'Dati casuali', 'Errore di compilazione'], '`at` controlla l’indice e lancia `std::out_of_range`.'),
        mc('Come si devono catturare le eccezioni?', ['Per riferimento costante: catch (const std::exception& e)', 'Per valore: catch (std::exception e)', 'Con un puntatore: catch (std::exception* e)', 'Non importa'], 'Per riferimento l’oggetto non si copia e non si perde la parte derivata.'),
        typ('Scrivi il catch che cattura qualsiasi eccezione', `try {\n    elabora();\n} catch (___) {\n    std::cout << "Errore sconosciuto";\n}`, '...', '`catch (...)` cattura tutto e deve andare per ultimo.'),
        out(`try {\n    throw std::out_of_range("x");\n} catch (const std::invalid_argument&) {\n    std::cout << 1;\n} catch (const std::exception&) {\n    std::cout << 2;\n} catch (...) {\n    std::cout << 3;\n}`, ['2', '1', '3', '23'], '`out_of_range` non è un `invalid_argument`, ma eredita da `std::exception`. Si esegue solo il primo `catch` che coincide.'),
        // Sfida finale
        out(`struct R {\n    char c;\n    R(char c) : c(c) {}\n    ~R() { std::cout << c; }\n};\n\nvoid f(int n) {\n    R r('f');\n    if (n > 1) throw std::runtime_error("grande");\n    std::cout << "ok";\n}\n\nint main() {\n    try {\n        R a('a');\n        f(1);\n        f(2);\n        std::cout << "fine";\n    } catch (const std::exception& e) {\n        std::cout << "[" << e.what() << "]";\n    }\n}`, ['okffa[grande]', 'okf[grande]fa', 'okff[grande]a', 'okffafine'], '`f(1)` stampa "ok" e distrugge `r` all’uscita (f). `f(2)` lancia: `r` (f) e `a` (a) si distruggono prima di entrare nel `catch`, che stampa [grande]. "fine" non si stampa mai.'),
      ],
    },
    // ───────────── Giorno 24 ─────────────
    {
      id: 'cpp-stl',
      t: 'Algoritmi della STL',
      d: 'sort, reverse, find, count, max_element e accumulate.',
      guide: [
        { h: '<algorithm>: non reinventare la ruota', p: [
          'La libreria standard include decine di algoritmi collaudati e ottimizzati. Lavorano su un intervallo indicato da due iteratori: `v.begin()` e `v.end()`.',
          '`std::sort` ordina dal più piccolo al più grande; con `std::greater<int>()` ordina al contrario. `std::reverse` inverte gli elementi.' ],
          code: `#include <algorithm>\n\nstd::vector<int> v = {5, 2, 8, 1};\nstd::sort(v.begin(), v.end());                       // 1 2 5 8\nstd::sort(v.begin(), v.end(), std::greater<int>());  // 8 5 2 1\nstd::reverse(v.begin(), v.end());                    // 1 2 5 8` },
        { h: 'Cercare e contare', p: [
          '`std::find` restituisce un iteratore al primo elemento uguale a quello cercato, oppure `end()` se non lo trova. Sottraendo `begin()` ottieni la sua posizione.',
          '`std::count` conta le occorrenze. `std::max_element` e `std::min_element` restituiscono un iteratore: usa `*` per leggere il valore.' ],
          code: `std::vector<int> voti = {7, 9, 4, 9, 6};\nauto it = std::find(voti.begin(), voti.end(), 4);\nif (it != voti.end())\n    std::cout << "4 in posizione " << it - voti.begin() << "\\n";  // 2\nstd::cout << std::count(voti.begin(), voti.end(), 9) << "\\n";     // 2\nstd::cout << *std::max_element(voti.begin(), voti.end());         // 9` },
        { h: 'accumulate e <numeric>', p: [
          '`std::accumulate` (header `<numeric>`) somma tutti gli elementi partendo da un valore iniziale.',
          'Attenzione: il tipo del risultato è quello del valore iniziale. Con `0` somma in `int` e perde i decimali; con `0.0` somma in `double`.' ],
          code: `#include <numeric>\n\nstd::vector<double> prezzi = {1.5, 2.5, 3.0};\nstd::cout << std::accumulate(prezzi.begin(), prezzi.end(), 0.0) << "\\n";  // 7\nstd::cout << std::accumulate(prezzi.begin(), prezzi.end(), 0);           // 6: somma in int!` },
        { h: 'Ranges (C++20)', p: [
          'C++20 aggiunge versioni in `std::ranges` che ricevono il contenitore intero, senza `begin()` né `end()`: `std::ranges::sort(v)`.',
          'Sono più brevi e più difficili da usare male. Domani vedrai come combinarle con le lambda per filtrare e trasformare.' ],
          code: `std::vector<int> v = {3, 1, 2};\nstd::ranges::sort(v);                  // 1 2 3\nauto it = std::ranges::find(v, 2);\nstd::cout << *std::ranges::max_element(v);  // 3` },
        { h: 'Esempio reale: classifica delle vendite', real: true, p: [
          'Il responsabile di un negozio rivede le vendite della settimana: totale, giorno migliore, quanti giorni hanno avuto esattamente le stesse vendite e i tre importi migliori. Senza scrivere a mano nemmeno un ciclo.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <numeric>\n#include <vector>\n\nint main() {\n    std::vector<int> vendite = {320, 150, 480, 150, 275};\n    int totale = std::accumulate(vendite.begin(), vendite.end(), 0);\n    auto migliore = std::max_element(vendite.begin(), vendite.end());\n    std::cout << "Totale: " << totale << "\\n";                                   // 1375\n    std::cout << "Giorno migliore: " << (migliore - vendite.begin()) + 1 << "\\n"; // 3\n    std::cout << "Giorni con 150: " << std::count(vendite.begin(), vendite.end(), 150) << "\\n";  // 2\n    std::sort(vendite.begin(), vendite.end(), std::greater<int>());\n    std::cout << "Top 3: " << vendite[0] << " " << vendite[1] << " " << vendite[2] << "\\n";  // 480 320 275\n}` },
      ],
      x: [
        mc('Quale header contiene `std::sort`?', ['<algorithm>', '<vector>', '<sort>', '<numeric>'], '`<numeric>` contiene `accumulate`; `<algorithm>`, quasi tutto il resto.'),
        out(`std::vector<int> v = {3, 1, 2};\nstd::sort(v.begin(), v.end());\nstd::cout << v[0] << v[2];`, ['13', '32', '31', '12'], 'Ordinato diventa {1, 2, 3}: il primo è 1 e l’ultimo 3.'),
        fill(`std::vector<int> v = {4, 5, 6};\nint totale = std::___(v.begin(), v.end(), 0);  // 15`, ['accumulate', 'sum', 'add_all', 'total'], '`std::accumulate` somma l’intervallo partendo dal valore iniziale.'),
        out(`std::vector<int> v = {4, 9, 2, 9};\nauto it = std::max_element(v.begin(), v.end());\nstd::cout << *it << " " << it - v.begin();`, ['9 1', '9 3', '4 0', '9 2'], 'In caso di parità, `max_element` restituisce il primo: il 9 in posizione 1.'),
        out(`std::vector<double> v = {0.5, 0.5, 0.5};\nstd::cout << std::accumulate(v.begin(), v.end(), 0);`, ['0', '1.5', '1', 'Errore'], 'Il valore iniziale `0` è un `int`: ogni somma parziale (0 + 0.5) viene troncata a 0.'),
        typ('Controlla se find non ha trovato il valore', `auto it = std::find(v.begin(), v.end(), 7);\nif (it == v.___()) std::cout << "non trovato";`, 'end', 'Se non trova il valore, `find` restituisce `end()`.'),
        out(`std::string s = "radar";\nstd::string r = s;\nstd::reverse(r.begin(), r.end());\nstd::cout << (r == s) << std::count(s.begin(), s.end(), 'a');`, ['12', '02', '11', 'Errore'], '"radar" è palindromo: invertito è uguale (1). Ha due lettere a.'),
        // Sfida finale
        out(`std::vector<int> v = {5, 3, 8, 3, 1};\nstd::sort(v.begin(), v.end(), std::greater<int>());\nstd::reverse(v.begin(), v.begin() + 2);\nint s = std::accumulate(v.begin() + 1, v.end(), 0);\nauto it = std::find(v.begin(), v.end(), 3);\nstd::cout << v[0] << " " << s << " " << (it - v.begin());`, ['5 15 2', '8 15 2', '5 20 2', '5 15 3'], 'Ordine decrescente: {8, 5, 3, 3, 1}. Invertendo i primi due: {5, 8, 3, 3, 1}. La somma dalla posizione 1 è 8 + 3 + 3 + 1 = 15 e il primo 3 è in posizione 2.'),
      ],
    },
    // ───────────── Giorno 25 ─────────────
    {
      id: 'cpp-iterators',
      t: 'Iteratori e lambda',
      d: 'begin, end, lambda, cattura per copia e per riferimento.',
      guide: [
        { h: 'Iteratori', p: [
          'Un iteratore indica una posizione dentro un contenitore, come un puntatore generalizzato. `*it` legge l’elemento e `++it` avanza.',
          '`begin()` punta al primo elemento e `end()` alla posizione dopo l’ultimo: non bisogna mai dereferenziare `end()`.',
          'Funzionano allo stesso modo con `vector`, `list`, `set` o `map`. In una mappa, `it->first` è la chiave e `it->second` il valore.' ],
          code: `std::vector<std::string> nomi = {"Anna", "Luca", "Eva"};\nfor (auto it = nomi.begin(); it != nomi.end(); ++it)\n    std::cout << *it << " ";   // Anna Luca Eva\nauto ultimo = nomi.end() - 1;\nstd::cout << *ultimo;          // Eva` },
        { h: 'Lambda', p: [
          'Una lambda è una funzione senza nome scritta proprio dove serve: `[](parametri) { corpo }`.',
          'Si può memorizzare in una variabile con `auto` o passare direttamente a un algoritmo, per esempio per dire a `std::sort` come ordinare.' ],
          code: `auto quadrato = [](int x) { return x * x; };\nstd::cout << quadrato(5) << "\\n";  // 25\n\nstd::vector<int> v = {5, -2, 8, -1};\nstd::sort(v.begin(), v.end(), [](int a, int b) {\n    return std::abs(a) < std::abs(b);   // ordina per valore assoluto\n});\n// -1 -2 5 8` },
        { h: 'Catture', p: [
          'Le parentesi quadre indicano quali variabili esterne può usare la lambda. `[x]` copia `x` quando si crea la lambda; `[&x]` la usa per riferimento e può modificarla.',
          '`[=]` cattura per copia tutto ciò che usa e `[&]` tutto per riferimento. Meglio catturare solo ciò che serve: il codice è più chiaro.' ],
          code: `int limite = 10;\nint contatore = 0;\nauto conta = [limite, &contatore](int x) {\n    if (x > limite) contatore++;\n};\nfor (int x : {4, 15, 22, 9}) conta(x);\nstd::cout << contatore;  // 2` },
        { h: 'Algoritmi con lambda', p: [
          '`std::count_if` conta gli elementi che soddisfano una condizione e `std::find_if` trova il primo che la soddisfa.',
          '`std::transform` applica una funzione a ogni elemento. `std::erase_if` (C++20) elimina quelli che soddisfano una condizione.' ],
          code: `std::vector<int> v = {3, 8, 12, 5, 20};\nint grandi = std::count_if(v.begin(), v.end(), [](int x) { return x > 6; });   // 3\nauto pari = std::find_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });  // punta all’8\nstd::transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 10; });\n// 30 80 120 50 200\nstd::erase_if(v, [](int x) { return x > 100; });   // 30 80 50` },
        { h: 'Esempio reale: filtrare e ordinare un catalogo', real: true, p: [
          'Un negozio online elimina i prodotti esauriti, ordina il resto per prezzo e conta quanti rientrano nel budget del cliente. La lambda `abbordabile` cattura il budget per copia.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <string>\n#include <vector>\n\nstruct Prodotto { std::string nome; double prezzo; int scorte; };\n\nint main() {\n    std::vector<Prodotto> catalogo = {\n        {"Cuffie", 59.9, 12}, {"Cavo USB", 7.5, 0},\n        {"Tastiera", 35.0, 4}, {"Monitor", 189.0, 2}};\n    double budget = 100;\n\n    std::erase_if(catalogo, [](const Prodotto& p) { return p.scorte == 0; });\n    std::sort(catalogo.begin(), catalogo.end(),\n              [](const Prodotto& a, const Prodotto& b) { return a.prezzo < b.prezzo; });\n    auto abbordabile = [budget](const Prodotto& p) { return p.prezzo <= budget; };\n\n    for (const auto& p : catalogo) std::cout << p.nome << " ";  // Tastiera Cuffie Monitor\n    std::cout << "\\nAbbordabili: " << std::count_if(catalogo.begin(), catalogo.end(), abbordabile);  // 2\n}` },
      ],
      x: [
        mc('A cosa punta `v.end()`?', ['Alla posizione dopo l’ultimo elemento', 'All’ultimo elemento', 'Al primo elemento', 'A nullptr'], 'Per questo i cicli usano `it != v.end()` e non si legge mai `*v.end()`.'),
        out(`auto somma = [](int a, int b) { return a + b; };\nstd::cout << somma(2, 3) * 2;`, ['10', '7', '8', 'Errore'], 'La lambda restituisce 5 e si moltiplica per 2.'),
        fill(`int totale = 0;\nauto aggiungi = [___totale](int x) { totale += x; };`, ['&', '=', '*', 'this'], 'Per modificare `totale` bisogna catturarlo per riferimento.'),
        out(`int x = 1;\nauto f = [x]() { return x * 10; };\nx = 5;\nstd::cout << f();`, ['10', '50', '1', 'Errore'], 'La cattura per copia conserva il valore che aveva `x` quando è stata creata la lambda: 1.'),
        out(`std::vector<int> v = {1, 4, 7, 10, 13};\nstd::cout << std::count_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });`, ['2', '3', '5', '14'], 'Solo 4 e 10 sono pari.'),
        typ('Trova il primo elemento negativo', `auto it = std::___(v.begin(), v.end(), [](int x) { return x < 0; });`, 'find_if', '`find_if` restituisce il primo elemento che soddisfa la condizione.'),
        ord('Scrivi una lambda che restituisce il doppio di x', ['[]', '(int x)', '{', 'return', 'x * 2;', '}'], ['def', '=>'], 'Parentesi quadre di cattura, parametri e corpo tra graffe.'),
        // Sfida finale
        out(`std::vector<int> v = {4, 1, 7, 2, 9};\nint soglia = 3, chiamate = 0;\nstd::sort(v.begin(), v.end(), [&chiamate](int a, int b) { chiamate++; return a > b; });\nstd::erase_if(v, [soglia](int x) { return x < soglia; });\nstd::transform(v.begin(), v.end(), v.begin(), [](int x) { return x - 1; });\nstd::cout << v.size() << " " << v.front() << v.back() << " " << (chiamate > 0);`, ['3 83 1', '3 93 1', '5 83 1', '3 38 1'], 'Ordine decrescente: {9, 7, 4, 2, 1}. Si eliminano i valori minori di 3: {9, 7, 4}. Si sottrae 1: {8, 6, 3}. `chiamate` è stata modificata per riferimento, quindi è maggiore di 0.'),
      ],
    },
    // ───────────── Giorno 26 ─────────────
    {
      id: 'cpp-smart-pointers',
      t: 'Smart pointer',
      d: 'unique_ptr, shared_ptr, weak_ptr e RAII.',
      guide: [
        { h: 'Addio a delete', p: [
          'Gli smart pointer (header `<memory>`) sono oggetti che si comportano come puntatori e liberano la memoria nel loro distruttore. È RAII applicato alla memoria dinamica.',
          'Nel C++ moderno non si scrive quasi mai `new` o `delete`: si usano `std::make_unique` e `std::make_shared`.' ] },
        { h: 'unique_ptr: un solo proprietario', p: [
          '`std::unique_ptr` è il proprietario esclusivo di un oggetto. Quando viene distrutto, libera l’oggetto.',
          'Non si può copiare (ci sarebbero due proprietari), ma si può spostare con `std::move`: la proprietà passa al nuovo puntatore e il vecchio resta `nullptr`. È la scelta predefinita.' ],
          code: `#include <memory>\n\nauto p = std::make_unique<int>(42);\nstd::cout << *p << "\\n";              // 42\n// auto q = p;                        // errore: non si può copiare\nauto q = std::move(p);                // la proprietà passa a q\nstd::cout << (p == nullptr) << "\\n";  // 1\n// alla fine del blocco, q libera la memoria` },
        { h: 'shared_ptr: proprietà condivisa', p: [
          '`std::shared_ptr` permette più proprietari. Tiene il conto di quanti ce ne sono (`use_count()`) e libera l’oggetto quando scompare l’ultimo.',
          'È un po’ più lento di `unique_ptr`: usalo solo quando la proprietà è davvero condivisa.' ],
          code: `auto a = std::make_shared<std::string>("report.pdf");\n{\n    auto b = a;                          // due proprietari\n    std::cout << a.use_count() << "\\n";  // 2\n}                                        // b scompare\nstd::cout << a.use_count() << "\\n";      // 1` },
        { h: 'weak_ptr e cicli', p: [
          'Se due oggetti si puntano a vicenda con `shared_ptr`, il contatore non arriva mai a 0 e nessuno dei due viene liberato: è un leak.',
          '`std::weak_ptr` osserva un oggetto condiviso senza esserne proprietario. Per usarlo si chiama `lock()`, che restituisce uno `shared_ptr` (vuoto se l’oggetto non esiste più).' ],
          code: `std::weak_ptr<int> w;\n{\n    auto s = std::make_shared<int>(7);\n    w = s;\n    if (auto p = w.lock()) std::cout << *p << "\\n";  // 7\n}\nstd::cout << w.expired();  // 1: l’oggetto non esiste più` },
        { h: 'Esempio reale: figure polimorfiche senza leak', real: true, p: [
          'Un programma di planimetrie memorizza figure di tipi diversi nello stesso vector. Con `unique_ptr` ogni figura si libera da sola quando il vector viene distrutto, senza un solo `delete`.' ],
          code: `#include <iostream>\n#include <memory>\n#include <vector>\n\nstruct Forma {\n    virtual double area() const = 0;\n    virtual ~Forma() = default;\n};\nstruct Cerchio : Forma {\n    double r;\n    explicit Cerchio(double r) : r(r) {}\n    double area() const override { return 3.14159 * r * r; }\n};\nstruct Rett : Forma {\n    double a, b;\n    Rett(double a, double b) : a(a), b(b) {}\n    double area() const override { return a * b; }\n};\n\nint main() {\n    std::vector<std::unique_ptr<Forma>> pianta;\n    pianta.push_back(std::make_unique<Cerchio>(1));\n    pianta.push_back(std::make_unique<Rett>(4, 5));\n    double totale = 0;\n    for (const auto& f : pianta) totale += f->area();\n    std::cout << "Superficie: " << totale << " m2\\n";  // Superficie: 23.1416 m2\n}   // il vector si distrugge e libera tutte le figure` },
      ],
      x: [
        mc('Quale smart pointer useresti per un oggetto con un solo proprietario?', ['std::unique_ptr', 'std::shared_ptr', 'std::weak_ptr', 'Un puntatore normale con new'], '`unique_ptr` è la scelta predefinita: non ha costi aggiuntivi.'),
        fill(`auto p = std::___<int>(5);`, ['make_unique', 'new_unique', 'unique', 'create'], '`std::make_unique<T>(args)` crea l’oggetto e lo `unique_ptr` in un solo passo.'),
        out(`auto a = std::make_shared<int>(1);\nauto b = a;\nauto c = b;\nstd::cout << a.use_count();`, ['3', '1', '2', '0'], '`a`, `b` e `c` condividono lo stesso oggetto: tre proprietari.'),
        mc('Se `p` è uno `std::unique_ptr`, cosa succede con `auto q = p;`?', ['Non compila: uno unique_ptr non si può copiare', 'Entrambi condividono l’oggetto', 'Si copia l’oggetto puntato', 'p diventa nullptr'], 'Per cambiare proprietario bisogna spostarlo: `auto q = std::move(p);`.'),
        typ('Trasferisci la proprietà da p a q', `auto p = std::make_unique<int>(3);\nauto q = std::___(p);`, 'move', 'Dopo `std::move`, `q` è il proprietario e `p` resta `nullptr`.'),
        out(`struct T {\n    ~T() { std::cout << "x"; }\n};\n\nint main() {\n    auto a = std::make_shared<T>();\n    {\n        auto b = a;\n        std::cout << "1";\n    }\n    std::cout << "2";\n    a.reset();\n    std::cout << "3";\n}`, ['12x3', '1x23', '123x', 'x123'], 'Alla fine del blocco `b` scompare, ma `a` è ancora proprietario. `a.reset()` rilascia l’ultimo proprietario e l’oggetto si distrugge in quel momento.'),
        mc('A cosa serve `std::weak_ptr`?', ['A osservare un oggetto condiviso senza tenerlo in vita, e a rompere i cicli', 'Ad avere un solo proprietario', 'A puntatori che non sono mai nulli', 'Ad allocare array'], 'Un `weak_ptr` non conta in `use_count()`.'),
        // Sfida finale
        out(`auto s = std::make_shared<int>(10);\nstd::weak_ptr<int> w = s;\nauto s2 = s;\n*s2 += 5;\nstd::cout << *s << s.use_count();\ns.reset();\nstd::cout << " " << w.expired();\ns2.reset();\nstd::cout << w.expired();`, ['152 01', '153 01', '152 11', '152 00'], '`s` e `s2` condividono l’intero, che diventa 15; il `weak_ptr` non conta, quindi ci sono 2 proprietari. Dopo aver rilasciato `s`, resta `s2` (0); dopo aver rilasciato `s2` l’oggetto si distrugge (1).'),
      ],
    },
    // ───────────── Giorno 27 ─────────────
    {
      id: 'cpp-move',
      t: 'Semantica di spostamento',
      d: 'lvalue, rvalue, std::move, costruttori di spostamento e regola dello zero.',
      guide: [
        { h: 'Copiare costa', p: [
          'Copiare un vector con un milione di elementi copia il milione di elementi. Ma se l’originale non verrà più usato, basta impadronirsi della sua memoria interna: questo è spostare.',
          'Spostare un `std::vector` o una `std::string` copia solo qualche puntatore, qualunque sia la sua dimensione.' ] },
        { h: 'lvalue e rvalue', p: [
          'Un lvalue è qualcosa con un nome e un indirizzo, come una variabile. Un rvalue è un valore temporaneo, come il risultato di `a + b`, che scompare alla fine dell’istruzione.',
          'Un riferimento rvalue (`T&&`) si può legare solo a temporanei. Così una funzione sa che può "rubare" il contenuto senza che nessuno se ne accorga.' ],
          code: `std::string a = "ciao";\nstd::string& r1 = a;          // lvalue: a ha un nome\nstd::string&& r2 = a + "!";   // rvalue: un temporaneo\n// std::string&& r3 = a;      // errore: a non è un temporaneo` },
        { h: 'std::move', p: [
          '`std::move(x)` di per sé non sposta nulla: converte `x` in un rvalue perché venga scelta la versione che sposta.',
          'Dopo essere stato spostato, l’oggetto originale resta valido ma il suo contenuto non è garantito (un vector spostato resta vuoto). Riusalo solo dopo avergli assegnato un nuovo valore.' ],
          code: `std::vector<int> grande(1'000'000, 7);\nstd::vector<int> destinazione = std::move(grande);  // prende la memoria, senza copia\nstd::cout << destinazione.size() << " " << grande.size();  // 1000000 0` },
        { h: 'Costruttori di spostamento e regola dello zero', p: [
          'Se la tua classe gestisce una risorsa a mano (un `new[]`), ha bisogno di distruttore, copia e spostamento scritti da te: la regola del cinque. Il costruttore di spostamento prende la risorsa e lascia vuoto l’originale.',
          'Molto meglio la regola dello zero: se i membri si gestiscono da soli (`std::string`, `std::vector`, `std::unique_ptr`), non scrivere nulla di tutto ciò. Il compilatore genera copia e spostamento corretti.' ],
          code: `class Buffer {   // gestisce la memoria a mano: regola del cinque\npublic:\n    explicit Buffer(std::size_t n) : dati(new int[n]), n(n) {}\n    Buffer(Buffer&& altro) noexcept : dati(altro.dati), n(altro.n) {\n        altro.dati = nullptr;   // l’originale non è più proprietario\n        altro.n = 0;\n    }\n    ~Buffer() { delete[] dati; }\n    // ... mancherebbero ancora la copia e le assegnazioni\nprivate:\n    int* dati;\n    std::size_t n;\n};\n\nclass Playlist {   // regola dello zero: niente da scrivere\n    std::string nome;\n    std::vector<std::string> brani;\n};` },
        { h: 'Esempio reale: generare record senza copie', real: true, p: [
          'Un servizio genera centomila record di ordini. Ogni riga si sposta nel vector invece di essere copiata, e il vector intero si restituisce per valore: il compilatore lo sposta o elimina la copia.' ],
          code: `#include <iostream>\n#include <string>\n#include <vector>\n\nstd::vector<std::string> genera_record(int n) {\n    std::vector<std::string> record;\n    record.reserve(n);\n    for (int i = 1; i <= n; i++) {\n        std::string riga = "ordine-" + std::to_string(i);\n        record.push_back(std::move(riga));   // sposta invece di copiare\n    }\n    return record;   // il vector non si copia\n}\n\nint main() {\n    auto record = genera_record(100000);\n    std::cout << record.size() << " " << record.back() << "\\n";  // 100000 ordine-100000\n}` },
      ],
      x: [
        mc('Cosa fa davvero `std::move(x)`?', ['Converte x in un rvalue perché possa essere spostato; di per sé non sposta nulla', 'Copia x in un’altra posizione di memoria', 'Elimina x', 'Sposta x sull’heap'], 'Lo spostamento vero lo fa il costruttore o l’assegnazione di spostamento scelti grazie a quella conversione.'),
        out(`std::vector<int> a = {1, 2, 3};\nstd::vector<int> b = std::move(a);\nstd::cout << b.size() << a.size();`, ['30', '33', '03', 'Errore'], '`b` si impadronisce della memoria di `a`, e un vector spostato resta vuoto.'),
        fill(`void memorizza(std::string___ s);  // accetta solo temporanei`, ['&&', '&', '*', '**'], '`T&&` è un riferimento rvalue: si lega a valori temporanei.'),
        mc('Cosa dice la regola dello zero?', ['Se i tuoi membri gestiscono le proprie risorse, non scrivere distruttore, copia né spostamento', 'Le classi non devono avere attributi pubblici', 'I puntatori vanno inizializzati a zero', 'Non bisogna mai usare new'], 'Il compilatore genera versioni corrette a partire da quelle dei membri.'),
        typ('Aggiungi il testo al vector senza copiarlo', `std::string riga = "dati";\nstd::vector<std::string> v;\nv.push_back(std::___(riga));`, 'move', 'Con `std::move`, `push_back` usa la versione che sposta.'),
        mc('Quale di queste espressioni è un rvalue?', ['a + b', 'a', 'v[0]', '*p'], '`a + b` produce un valore temporaneo senza nome; le altre si riferiscono a oggetti che esistono già.'),
        out(`std::string a = "ciao";\nstd::string b = a;\nstd::string c = std::move(b);\nc += "!";\nstd::cout << a << " " << c;`, ['ciao ciao!', 'ciao! ciao!', 'ciao ciao', 'Errore'], '`b` è una copia di `a`; poi `c` prende il contenuto di `b`. Né `a` né il suo contenuto vengono toccati.'),
        // Sfida finale
        out(`struct S {\n    S() {}\n    S(const S&) { std::cout << "C"; }\n    S(S&&) noexcept { std::cout << "M"; }\n};\n\nS a;\nS b = a;\nS c = std::move(a);\nS d = S(b);\nstd::vector<S> v;\nv.reserve(2);\nv.push_back(b);\nv.push_back(std::move(c));`, ['CMCCM', 'CMCMCM', 'CCCCM', 'CMCMM'], '`b = a` copia (C) e `std::move(a)` sposta (M). `S(b)` copia (C) e, dal C++17, il temporaneo si costruisce direttamente in `d`, senza spostamento. Con lo spazio riservato, `push_back(b)` copia (C) e `push_back(std::move(c))` sposta (M).'),
      ],
    },
    // ───────────── Giorno 28 ─────────────
    {
      id: 'cpp-files',
      t: 'File',
      d: 'ofstream, ifstream, getline, modalità di apertura e formato dei numeri.',
      guide: [
        { h: 'Scrivere con ofstream', p: [
          '`std::ofstream` (header `<fstream>`) apre un file in scrittura e si usa proprio come `std::cout`.',
          'Controlla sempre che si sia aperto: `if (!out)`. Il file si chiude da solo quando l’oggetto viene distrutto (RAII).' ],
          code: `#include <fstream>\n\nstd::ofstream out("voti.txt");\nif (!out) {\n    std::cerr << "Impossibile aprire il file\\n";\n    return 1;\n}\nout << "Anna 8.5\\n";\nout << "Luca 6\\n";\n// alla fine del blocco, il file si chiude` },
        { h: 'Leggere con ifstream e getline', p: [
          '`std::ifstream` apre un file in lettura. Con `>>` leggi valore per valore, separati da spazi; con `std::getline` leggi righe intere.',
          'Metti la lettura nella condizione del `while`: il ciclo termina da solo alla fine del file o se un valore non è compatibile.' ],
          code: `std::ifstream in("voti.txt");\nstd::string nome;\ndouble voto;\nwhile (in >> nome >> voto)\n    std::cout << nome << ": " << voto << "\\n";\n\nstd::ifstream log("app.log");\nstd::string riga;\nint errori = 0;\nwhile (std::getline(log, riga))\n    if (riga.find("ERROR") != std::string::npos) errori++;` },
        { h: 'Modalità di apertura', p: [
          'Per impostazione predefinita, `std::ofstream` cancella il contenuto del file quando lo apre (`std::ios::trunc`). Per aggiungere alla fine usa `std::ios::app`.',
          '`std::ios::binary` evita che gli a capo vengano trasformati, cosa necessaria per immagini o dati binari.' ],
          code: `std::ofstream log("app.log", std::ios::app);   // aggiunge senza cancellare\nlog << "Utente connesso\\n";` },
        { h: 'Formattare i numeri', p: [
          'L’header `<iomanip>` controlla come si scrivono i numeri, sia a schermo sia nei file. `std::fixed` con `std::setprecision(2)` mostra esattamente due decimali, ideale per i prezzi.',
          '`std::setw(n)` riserva `n` caratteri per il valore successivo, utile per allineare colonne. `fixed` e `setprecision` restano finché non li cambi; `setw` riguarda solo il valore successivo.' ],
          code: `#include <iomanip>\n\ndouble totale = 60.4879;\nstd::cout << std::fixed << std::setprecision(2) << totale << "\\n";  // 60.49\nstd::cout << std::setw(8) << 3.5 << "|\\n";                         //     3.50|` },
        { h: 'Esempio reale: elaborare un CSV di spese', real: true, p: [
          'Esporti le tue spese bancarie in un CSV (`data,descrizione,importo`). Il programma salta l’intestazione, divide ogni riga per virgole con `std::getline` e scrive un resoconto con due decimali.' ],
          code: `#include <fstream>\n#include <iomanip>\n#include <iostream>\n#include <sstream>\n#include <string>\n\nint main() {\n    std::ifstream csv("spese.csv");\n    if (!csv) { std::cerr << "Manca spese.csv\\n"; return 1; }\n    std::string riga;\n    std::getline(csv, riga);            // salta l’intestazione\n    double totale = 0;\n    int righe = 0;\n    while (std::getline(csv, riga)) {\n        std::istringstream ss(riga);\n        std::string data, descrizione, importo;\n        std::getline(ss, data, ',');\n        std::getline(ss, descrizione, ',');\n        std::getline(ss, importo, ',');\n        totale += std::stod(importo);\n        righe++;\n    }\n    std::ofstream resoconto("resoconto.txt");\n    resoconto << std::fixed << std::setprecision(2)\n              << righe << " spese, totale " << totale << " euro\\n";\n}` },
      ],
      x: [
        mc('Quale classe si usa per scrivere in un file?', ['std::ofstream', 'std::ifstream', 'std::istream', 'std::filestream'], 'La o sta per output e la i per input.'),
        fill(`std::ifstream f("dati.txt");\nstd::string riga;\nwhile (std::___(f, riga)) {\n    std::cout << riga << "\\n";\n}`, ['getline', 'readline', 'read', 'nextLine'], '`std::getline` legge una riga intera e restituisce lo stream, che vale falso alla fine del file.'),
        out(`std::cout << std::fixed << std::setprecision(2) << 3.14159;`, ['3.14', '3.1', '3.14159', '3.142'], 'Con `std::fixed`, `setprecision(2)` fissa due decimali.'),
        mc('Quale modalità aggiunge testo alla fine del file senza cancellare quello che c’era?', ['std::ios::app', 'std::ios::trunc', 'std::ios::in', 'std::ios::binary'], '`app` sta per append (aggiungere).'),
        typ('Controlla se il file non si è potuto aprire', `std::ifstream f("config.txt");\nif (___f) {\n    std::cerr << "Non esiste";\n}`, '!', 'Uno stream che non si è potuto aprire vale falso, quindi `!f` è vero.'),
        out(`std::istringstream ss("ugo,32,Roma");\nstd::string campo;\nint n = 0;\nwhile (std::getline(ss, campo, ',')) n++;\nstd::cout << n << " " << campo;`, ['3 Roma', '2 Roma', '3 ugo', '1 ugo,32,Roma'], 'Con la virgola come separatore ci sono tre campi, e `campo` conserva l’ultimo letto.'),
        ord('Apri log.txt per aggiungere alla fine', ['std::ofstream', 'log(', '"log.txt",', 'std::ios::app', ');'], ['std::ifstream', 'std::ios::trunc'], 'Si scrive con `ofstream` e la modalità `std::ios::app`.'),
        // Sfida finale
        out(`{\n    std::ofstream f("t.txt");\n    f << "3 4\\n5";\n}\n{\n    std::ofstream f("t.txt", std::ios::app);\n    f << " 6";\n}\nstd::ifstream in("t.txt");\nint x, somma = 0, n = 0;\nwhile (in >> x) { somma += x; n++; }\nstd::cout << n << " " << std::fixed << std::setprecision(1) << somma / static_cast<double>(n);`, ['4 4.5', '3 4.0', '2 3.5', '4 4.50'], 'Il primo blocco scrive "3 4", un a capo e "5"; il secondo aggiunge " 6" senza cancellare. `>>` salta spazi e a capo: legge 4 numeri che sommano 18. La media, con un decimale, è 4.5.'),
      ],
    },
    // ───────────── Giorno 29 ─────────────
    {
      id: 'cpp-concurrency',
      t: 'Concorrenza',
      d: 'std::thread, join, mutex, atomic e async.',
      guide: [
        { h: 'Più thread contemporaneamente', p: [
          'Un thread (`std::thread`, header `<thread>`) esegue una funzione in parallelo al resto del programma. Così si sfruttano i vari core del processore.',
          '`join()` aspetta che il thread finisca. Se uno `std::thread` viene distrutto senza `join()` né `detach()`, il programma termina con `std::terminate`. `std::jthread` (C++20) fa il join da solo.',
          'L’ordine in cui vengono eseguiti i thread non è garantito: ogni esecuzione può essere diversa.' ],
          code: `#include <thread>\n\nvoid compito(int id) {\n    std::cout << "Thread " << id << "\\n";\n}\n\nint main() {\n    std::thread a(compito, 1);\n    std::thread b(compito, 2);\n    a.join();\n    b.join();   // aspetta che finiscano entrambi\n}` },
        { h: 'Race condition', p: [
          'Se due thread modificano lo stesso dato contemporaneamente senza coordinarsi, c’è una race condition: il risultato è imprevedibile e tecnicamente è comportamento indefinito.',
          '`contatore++` sembra un’operazione sola, ma sono tre: leggere, sommare e scrivere. Due thread possono leggere lo stesso valore e perdere un incremento.' ] },
        { h: 'mutex e lock_guard', p: [
          'Uno `std::mutex` (header `<mutex>`) fa passare un solo thread alla volta nella sezione protetta.',
          '`std::lock_guard` blocca il mutex quando viene creato e lo rilascia quando viene distrutto (RAII). Così non dimentichi mai di rilasciarlo, nemmeno se viene lanciata un’eccezione.' ],
          code: `std::mutex m;\nint contatore = 0;\n\nvoid aggiungi() {\n    for (int i = 0; i < 100000; i++) {\n        std::lock_guard<std::mutex> lock(m);\n        contatore++;\n    }\n}\n// con due thread che eseguono aggiungi(), contatore finisce a 200000` },
        { h: 'atomic, async e future', p: [
          'Per un contatore semplice basta `std::atomic<int>` (header `<atomic>`): le sue operazioni non si possono interrompere a metà.',
          '`std::async` (header `<future>`) lancia un compito e restituisce un `std::future`. `get()` aspetta il risultato e lo restituisce. È il modo più comodo di calcolare qualcosa in parallelo.' ],
          code: `std::atomic<int> visite{0};\nvisite++;   // sicuro tra thread\n\nauto f = std::async(std::launch::async, [] { return 6 * 7; });\n// ... il thread principale fa altre cose ...\nstd::cout << f.get();  // 42` },
        { h: 'Esempio reale: sommare un vector enorme in due metà', real: true, p: [
          'Un’analisi di dati somma dieci milioni di valori. Una metà si calcola in un altro thread con `std::async` mentre il thread principale somma l’altra. `std::cref` passa il vector per riferimento perché non venga copiato.' ],
          code: `#include <functional>\n#include <future>\n#include <iostream>\n#include <numeric>\n#include <vector>\n\nlong long somma(const std::vector<int>& v, std::size_t da, std::size_t a) {\n    return std::accumulate(v.begin() + da, v.begin() + a, 0LL);\n}\n\nint main() {\n    std::vector<int> dati(10'000'000, 1);\n    std::size_t meta = dati.size() / 2;\n    auto parte1 = std::async(std::launch::async, somma, std::cref(dati), 0, meta);\n    long long parte2 = somma(dati, meta, dati.size());\n    std::cout << parte1.get() + parte2 << "\\n";  // 10000000\n}` },
      ],
      x: [
        mc('Cosa fa `t.join()`?', ['Aspetta che il thread t finisca', 'Avvia il thread', 'Ferma il thread con la forza', 'Unisce due thread in uno'], 'Il thread parte quando si costruisce lo `std::thread`; `join` aspetta che termini.'),
        fill(`std::mutex m;\nint contatore = 0;\n\nvoid aggiungi() {\n    std::___<std::mutex> lock(m);\n    contatore++;\n}`, ['lock_guard', 'mutex_lock', 'guard', 'synchronized'], '`std::lock_guard` blocca il mutex e lo rilascia alla fine del blocco.'),
        mc('Cos’è una race condition?', ['Più thread accedono allo stesso dato contemporaneamente, almeno uno lo modifica e non si sincronizzano', 'Un thread che finisce prima di un altro', 'Un ciclo troppo veloce', 'Un thread che aspetta un altro con join'], 'Si evita con `std::mutex`, `std::atomic` o non condividendo dati.'),
        out(`std::atomic<int> c{0};\nstd::thread a([&] { for (int i = 0; i < 1000; i++) c++; });\nstd::thread b([&] { for (int i = 0; i < 1000; i++) c++; });\na.join();\nb.join();\nstd::cout << c;`, ['2000', '1000', 'Un valore imprevedibile', '0'], 'Con `std::atomic` non si perde nessun incremento.'),
        typ('Raccogli il risultato del compito', `auto f = std::async(std::launch::async, [] { return 6 * 7; });\nint r = f.___();`, 'get', '`get()` aspetta che il compito finisca e restituisce il suo risultato.'),
        mc('Cosa succede se uno `std::thread` viene distrutto senza `join()` né `detach()`?', ['Il programma termina con std::terminate', 'Il thread si unisce automaticamente', 'Non succede nulla', 'Il thread ricomincia'], '`std::jthread` (C++20) evita il problema perché fa il join nel suo distruttore.'),
        out(`auto doppio = [](int x) { return x * 2; };\nauto f1 = std::async(std::launch::async, doppio, 10);\nauto f2 = std::async(std::launch::async, doppio, 21);\nstd::cout << f1.get() + f2.get();`, ['62', '31', '2042', 'Errore'], 'I compiti restituiscono 20 e 42, e `get()` aspetta ciascuno prima di sommare.'),
        // Sfida finale
        out(`std::vector<int> r(3);\nstd::vector<std::thread> lavoratori;\nfor (int i = 0; i < 3; i++)\n    lavoratori.emplace_back([&r, i] { r[i] = (i + 1) * (i + 1); });\nfor (auto& t : lavoratori) t.join();\nstd::cout << r[0] + r[1] + r[2] << " " << lavoratori.size();`, ['14 3', '6 3', '14 0', 'Un valore imprevedibile'], 'Ogni thread scrive nella sua posizione, quindi non c’è race condition. `i` si cattura per copia; per riferimento sarebbe un bug, perché cambia mentre i thread partono. Dopo i `join`: 1 + 4 + 9 = 14.'),
      ],
    },
    // ───────────── Giorno 30 ─────────────
    {
      id: 'cpp-wrapup',
      t: 'Conclusioni',
      d: 'Ripasso finale, strumenti di tutti i giorni e prossimi passi.',
      guide: [
        { h: 'Cosa hai imparato', p: [
          'Hai percorso il C++ da `std::cout` ai thread: tipi, contenitori della STL, funzioni, riferimenti e puntatori, memoria dinamica, classi, ereditarietà, polimorfismo, template, eccezioni, algoritmi, lambda, smart pointer, semantica di spostamento, file e concorrenza.',
          'L’idea che unisce tutto è RAII: ogni risorsa ha un proprietario che la rilascia nel suo distruttore. Se la applichi, il tuo codice C++ sarà sicuro e veloce allo stesso tempo.' ] },
        { h: 'C++ moderno in poche righe', p: [
          'Questo frammento riunisce diversi pezzi del corso: una struct, un vector, `std::sort` con una lambda, structured binding e `std::accumulate`.',
          'Nota cosa manca: niente `new`, niente `delete` e niente cicli con indici soggetti a errori.' ],
          code: `struct Studente { std::string nome; double voto; };\n\nstd::vector<Studente> gruppo = {{"Eva", 8.5}, {"Leo", 6.0}, {"Anna", 9.2}};\nstd::sort(gruppo.begin(), gruppo.end(),\n          [](const Studente& a, const Studente& b) { return a.voto > b.voto; });\nfor (const auto& [nome, voto] : gruppo)\n    std::cout << nome << " " << voto << "\\n";   // Anna 9.2, Eva 8.5, Leo 6\ndouble media = std::accumulate(gruppo.begin(), gruppo.end(), 0.0,\n    [](double s, const Studente& st) { return s + st.voto; }) / gruppo.size();` },
        { h: 'Strumenti di tutti i giorni', p: [
          'Compila con gli avvisi: `g++ -std=c++20 -Wall -Wextra -O2`. I sanitizer (`-fsanitize=address,undefined`) rilevano accessi fuori intervallo e comportamenti indefiniti mentre fai i test.',
          'I progetti con molti file usano CMake per descrivere come compilare. Un debugger (gdb, lldb o quello del tuo editor) e `clang-format` completano la cassetta degli attrezzi.' ],
          code: `# CMakeLists.txt\ncmake_minimum_required(VERSION 3.20)\nproject(MiaApp CXX)\nset(CMAKE_CXX_STANDARD 20)\nadd_executable(miaapp src/main.cpp src/negozio.cpp)\n\n# Nel terminale:\n# cmake -B build && cmake --build build` },
        { h: 'Errori tipici e prossimi passi', p: [
          'I bug più comuni: variabili non inizializzate, divisione intera inattesa, indici fuori intervallo, `=` invece di `==`, riferimenti o puntatori pendenti e dati condivisi tra thread senza protezione.',
          'Per continuare: esercitati con piccoli progetti (un gestore di attività, un gioco da console, un analizzatore di log), usa cppreference.com come riferimento e leggi "A Tour of C++" di Bjarne Stroustrup. Poi esplora Qt per le interfacce grafiche, Unreal Engine per i videogiochi o la programmazione di sistema.' ] },
        { h: 'Esempio reale: un mini gestore di magazzino', real: true, p: [
          'Un magazzino registra entrate e uscite di merce. La classe protegge i suoi dati, usa una `std::map`, lancia eccezioni quando un’operazione non è valida e un algoritmo con una lambda conta i prodotti esauriti.' ],
          code: `#include <algorithm>\n#include <iostream>\n#include <map>\n#include <stdexcept>\n#include <string>\n\nclass Magazzino {\npublic:\n    void entrata(const std::string& prodotto, int unita) {\n        if (unita <= 0) throw std::invalid_argument("unità non valide");\n        scorte[prodotto] += unita;\n    }\n    void uscita(const std::string& prodotto, int unita) {\n        auto it = scorte.find(prodotto);\n        if (it == scorte.end() || it->second < unita)\n            throw std::runtime_error("scorte insufficienti di " + prodotto);\n        it->second -= unita;\n    }\n    int esauriti() const {\n        return std::count_if(scorte.begin(), scorte.end(),\n                             [](const auto& coppia) { return coppia.second == 0; });\n    }\nprivate:\n    std::map<std::string, int> scorte;\n};\n\nint main() {\n    Magazzino m;\n    m.entrata("viti", 500);\n    m.entrata("dadi", 20);\n    m.uscita("dadi", 20);\n    try {\n        m.uscita("rondelle", 5);\n    } catch (const std::exception& e) {\n        std::cout << "Avviso: " << e.what() << "\\n";   // Avviso: scorte insufficienti di rondelle\n    }\n    std::cout << "Esauriti: " << m.esauriti() << "\\n";  // Esauriti: 1\n}` },
      ],
      x: [
        mc('Quale opzione di g++ attiva la maggior parte degli avvisi utili?', ['-Wall', '-O2', '-g', '-o'], '`-Wall` (e `-Wextra`) avvisano di errori come variabili inutilizzate o `=` in una condizione.'),
        out(`int a = 2;\nint& r = a;\nint* p = &a;\nr *= 3;\n*p += 1;\nstd::cout << a;`, ['7', '6', '3', '9'], '`r` e `*p` si riferiscono entrambi ad `a`: 2 × 3 = 6 e 6 + 1 = 7.'),
        mc('Quale contenitore useresti per contare quante volte compare ogni parola, in ordine alfabetico?', ['std::map<std::string, int>', 'std::vector<std::string>', 'std::set<std::string>', 'std::array<int, 26>'], 'Una `map` associa ogni parola al suo contatore e mantiene le chiavi ordinate.'),
        fill(`auto p = std::make_unique<Cerchio>(2.0);\nstd::cout << p___area();`, ['->', '.', '::', '*'], 'Con un puntatore (anche smart) si accede ai metodi con `->`.'),
        typ('Ordina il vector dal più grande al più piccolo', `std::sort(v.begin(), v.end(), [](int a, int b) { return a ___ b; });`, '>', 'La lambda deve restituire `true` quando `a` deve andare prima di `b`.'),
        out(`struct A {\n    virtual int f() const { return 1; }\n    virtual ~A() = default;\n};\nstruct B : A {\n    int f() const override { return 2; }\n};\n\nstd::unique_ptr<A> p = std::make_unique<B>();\nstd::cout << p->f() + A().f();`, ['3', '2', '4', 'Errore'], '`p` punta a un `B`, quindi `f()` vale 2. `A().f()` crea un `A` temporaneo e vale 1.'),
        ord('Dichiara un vector di unique_ptr a Forma chiamato pianta', ['std::vector<', 'std::unique_ptr<', 'Forma', '>>', 'pianta;'], ['std::shared_ptr<', '*'], 'Il tipo degli elementi va dentro le parentesi angolari di `std::vector`.'),
        // Sfida finale
        out(`struct Ordine { std::string cliente; double totale; };\n\nstd::vector<Ordine> v = {{"anna", 30}, {"luca", 120}, {"eva", 75}, {"anna", 45}};\nstd::map<std::string, double> per_cliente;\nfor (const auto& [c, t] : v) per_cliente[c] += t;\nauto migliore = std::max_element(per_cliente.begin(), per_cliente.end(),\n    [](const auto& a, const auto& b) { return a.second < b.second; });\nint grandi = std::count_if(v.begin(), v.end(),\n    [](const Ordine& o) { return o.totale > 50; });\nstd::cout << per_cliente.size() << " " << migliore->first << " " << grandi;`, ['3 luca 2', '4 luca 2', '3 anna 2', '3 luca 3'], 'Per cliente: anna 75, eva 75 e luca 120, tre chiavi. Il totale più alto è quello di luca. Solo due ordini superano 50: 120 e 75.'),
      ],
    },
  ],
}))(Sintaxis);
