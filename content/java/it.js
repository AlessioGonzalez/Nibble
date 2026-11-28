/* Java · Italiano */
(({ mc, out, fill, ord, typ, code, addCourse }) => addCourse('java', 'it', {
  tag: 'Orientato agli oggetti e fortemente tipizzato, da Android ai server.',
  days: [
    // ───────────── Giorno 1 ─────────────
    {
      id: 'java-intro',
      t: 'Introduzione',
      d: 'La JVM, javac, il metodo main e System.out.println.',
      guide: [
        { h: 'Che cos’è Java?', p: [
          'Java è un linguaggio di programmazione creato da James Gosling in Sun Microsystems e pubblicato nel 1995. Oggi lo mantiene Oracle ed esce una nuova versione ogni sei mesi.',
          'Il suo motto è «scrivilo una volta, eseguilo ovunque»: lo stesso programma funziona su Windows, macOS o Linux senza cambiare una riga.',
          'Lo usano le banche per i sistemi di pagamento, Android per le sue app, aziende come Netflix o LinkedIn sui loro server e Minecraft nella sua edizione Java.' ] },
        { h: 'Compilare ed eseguire: javac e la JVM', p: [
          'Java non si esegue direttamente. Prima `javac` traduce il tuo file `.java` in bytecode, un file `.class`. Poi la JVM (Java Virtual Machine) legge quel bytecode e lo esegue sulla tua macchina.',
          'Per programmare ti serve il JDK (Java Development Kit), che include `javac`, la JVM e le librerie standard. Scaricalo da adoptium.net o da oracle.com.',
          'Da Java 11 puoi saltare la compilazione nei programmi di un solo file: `java Ciao.java` compila ed esegue in un colpo.' ],
          code: `// Nel terminale:\n// javac Ciao.java   -> crea Ciao.class (bytecode)\n// java Ciao         -> la JVM lo esegue\n// java Ciao.java    -> compila ed esegue in un passo (Java 11+)` },
        { h: 'Il tuo primo programma', p: [
          'Tutto il codice Java vive dentro una classe. Il file deve chiamarsi come la classe pubblica: la classe `Ciao` va in `Ciao.java`.',
          'L’esecuzione inizia sempre nel metodo `public static void main(String[] args)`. Se cambi quella firma, la JVM non sa da dove partire.',
          'Ogni istruzione termina con `;` e i blocchi vanno tra graffe `{ }`. Java distingue maiuscole e minuscole: `system.out` non funziona, serve `System.out`.' ],
          code: `public class Ciao {\n    public static void main(String[] args) {\n        System.out.println("Ciao, mondo");\n    }\n}` },
        { h: 'print, println e commenti', p: [
          '`System.out.println()` scrive e va a capo; `System.out.print()` scrive senza andare a capo. Con `+` unisci testi e valori: `"Totale: " + 5` dà `Totale: 5`.',
          'I commenti spiegano il codice e Java li ignora: `//` per una riga, `/* ... */` per più righe e `/** ... */` per la documentazione (Javadoc).' ],
          code: `// Commento di una riga\n/* Commento\n   su più righe */\nSystem.out.print("Uno ");\nSystem.out.print("Due");\nSystem.out.println();      // va solo a capo\nSystem.out.println("Tre");\n// Output:\n// Uno Due\n// Tre` },
        { h: 'Esempio reale: lo scontrino di un bar', real: true, p: [
          'Con quello che sai già puoi stampare lo scontrino di un bar. I calcoli tra parentesi si fanno prima di unirli al testo.' ],
          code: `public class Scontrino {\n    public static void main(String[] args) {\n        System.out.println("Bar del Sole");\n        System.out.println("2 x Caffè: " + 2 * 1.5);\n        System.out.println("1 x Toast: " + 2.25);\n        System.out.println("Totale: " + (2 * 1.5 + 2.25) + " €");\n    }\n}\n// Bar del Sole\n// 2 x Caffè: 3.0\n// 1 x Toast: 2.25\n// Totale: 5.25 €` },
      ],
      x: [
        mc('Quale istruzione mostra un testo e va a capo in Java?', ['System.out.println()', 'console.log()', 'print()', 'echo()'], '`System.out.println()` scrive nella console e va a capo. `console.log()` è di JavaScript.'),
        mc('Con quale simbolo termina ogni istruzione in Java?', [';', '.', ':', 'Con un a capo'], 'Java richiede `;` alla fine di ogni istruzione; se manca, il codice non compila.'),
        mc('Che cosa esegue il bytecode di un file .class?', ['La JVM (Java Virtual Machine)', 'Il compilatore javac', 'Il browser', 'Il sistema operativo direttamente'], '`javac` crea il bytecode e la JVM lo esegue su ogni sistema.'),
        mc('Quale comando compila il file Ciao.java?', ['javac Ciao.java', 'java Ciao.class', 'run Ciao.java', 'compile Ciao'], '`javac` genera `Ciao.class`; poi `java Ciao` lo esegue.'),
        ord('Scrivi l’istruzione che mostra Ciao e va a capo', ['System', '.', 'out', '.', 'println', '(', '"Ciao"', ')', ';'], ['console', 'log'], '`System.out.println` scrive il testo e va a capo. Non dimenticare il `;` finale.'),
        out(`System.out.print("A");\nSystem.out.println("B");\nSystem.out.print("C");`, ['AB\nC', 'A\nB\nC', 'ABC', 'A\nBC'], '`print` non va a capo, quindi A e B restano attaccate; `println` va a capo dopo la B.'),
        typ('Completa la riga per stampare il prezzo e andare a capo', `double prezzo = 9.99;\nSystem.out.___(prezzo);`, 'println', '`println` stampa e va a capo; `print` no.'),
        out(`System.out.println("Totale: " + 2 + 3);\nSystem.out.println(2 + 3 + " totale");`, ['Totale: 23\n5 totale', 'Totale: 5\n5 totale', 'Totale: 23\n23 totale', 'Totale: 5\n23 totale'], 'Java valuta da sinistra a destra: nella prima riga il testo viene prima e tutto si concatena; nella seconda, 2 + 3 si somma prima di arrivare al testo.'),
      ],
      lab: [
        code('Scrivi un programma che mostri `Ciao, Kibi` su una riga e, su quella dopo, il risultato di `7 * 6`.', `public class Main {\n    public static void main(String[] args) {\n        // Scrivi qui il tuo programma\n    }\n}\n`, [{ in: '', out: 'Ciao, Kibi\n42' }], `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Ciao, Kibi");\n        System.out.println(7 * 6);\n    }\n}`, '`System.out.println()` scrive ogni valore su una nuova riga: prima il testo tra virgolette e poi il risultato di `7 * 6`, che viene calcolato prima di mostrarlo.'),
      ],
    },
    // ───────────── Giorno 2 ─────────────
    {
      id: 'java-vars',
      t: 'Variabili e tipi',
      d: 'Tipi primitivi, String, var, final e conversioni.',
      guide: [
        { h: 'Dichiarare una variabile', p: [
          'Una variabile è un nome che conserva un valore. In Java scrivi prima il tipo e poi il nome: `int eta = 20;`.',
          'Java ha una tipizzazione statica: il tipo si decide scrivendo il codice e non cambia. Se provi a mettere `"ciao"` in un `int`, il programma non compila. Così molti errori emergono prima dell’esecuzione.',
          'I nomi vanno in camelCase (`prezzoTotale`, `numeroStudenti`), iniziano con una lettera e non possono essere parole riservate come `class` o `int`.' ],
          code: `int eta = 20;\neta = 21;           // il valore può cambiare\n// eta = "venti";  // errore: un int non contiene testo\nint studenti;       // dichiarata senza valore\nstudenti = 30;      // assegnata dopo` },
        { h: 'Gli 8 tipi primitivi', p: [
          'Interi: `byte`, `short`, `int` (il più usato) e `long` per numeri molto grandi, che portano una `L` alla fine.',
          'Decimali: `double` (il più usato) e `float`, che porta una `f` alla fine. Un singolo carattere è un `char` e va tra apici singoli. Vero o falso è un `boolean`.',
          'Usa `int` e `double` se non hai un motivo preciso: sono quelli che si aspetta quasi tutto il codice.' ],
          code: `byte b = 100;                // da -128 a 127\nint popolazione = 59_000_000; // il _ aiuta solo a leggere\nlong distanza = 9_460_730_472_580L;\ndouble prezzo = 19.99;\nfloat peso = 72.5f;\nchar iniziale = 'J';\nboolean attivo = true;` },
        { h: 'String, var e final', p: [
          '`String` contiene testo tra virgolette doppie. Non è un primitivo ma una classe, per questo inizia con la maiuscola.',
          'Da Java 10, `var` deduce il tipo di una variabile locale dal suo valore: `var citta = "Roma";` è uno `String`. Il tipo resta fisso.',
          '`final` crea una costante che non si può riassegnare. Per convenzione si scrive in MAIUSCOLO: `final double IVA = 0.22;`.' ],
          code: `String nome = "Ana";\nvar citta = "Roma";       // il compilatore deduce String\nvar visite = 0;           // deduce int\nfinal double IVA = 0.22;\n// IVA = 0.10;            // errore: IVA è final` },
        { h: 'Conversioni tra tipi', p: [
          'Da un tipo piccolo a uno grande la conversione è automatica: un `int` sta in un `double`. Al contrario bisogna chiederla con un cast, `(int) 9.99`, e si perdono i decimali (non arrotonda).',
          'Per trasformare un testo in numero usa `Integer.parseInt("42")` o `Double.parseDouble("3.5")`. Se il testo non è un numero, viene lanciata `NumberFormatException`.' ],
          code: `int intero = 7;\ndouble d = intero;           // 7.0, automatico\nint troncato = (int) 9.99;   // 9\nint n = Integer.parseInt("42");\ndouble x = Double.parseDouble("3.5");\nString s = String.valueOf(n);  // "42"` },
        { h: 'Esempio reale: la scheda di un prodotto', real: true, p: [
          'Un negozio online salva di ogni prodotto il nome, il prezzo, le scorte e se è disponibile. Ogni dato ha il suo tipo naturale.',
          'Per mostrare il prezzo con IVA arrotondato a 2 decimali, moltiplichiamo per 100, arrotondiamo con `Math.round` e dividiamo per `100.0`.' ],
          code: `String nome = "Cuffie Bluetooth";\ndouble prezzo = 39.90;\nint scorte = 12;\nboolean disponibile = scorte > 0;\nfinal double IVA = 0.21;\n\ndouble conIva = Math.round(prezzo * (1 + IVA) * 100) / 100.0;\nSystem.out.println(nome + ": " + conIva + " €");          // Cuffie Bluetooth: 48.28 €\nSystem.out.println("Disponibile: " + disponibile);      // Disponibile: true` },
      ],
      x: [
        fill(`___ eta = 20;`, ['int', 'integer', 'Int', 'num'], '`int` è il tipo primitivo per i numeri interi. Java distingue le maiuscole, quindi `Int` non esiste.'),
        mc('Quale tipo primitivo contiene `true` o `false`?', ['boolean', 'bool', 'bit', 'logic'], 'In Java il tipo logico primitivo è `boolean`; `bool` è di C++ e C#.'),
        mc('Quale di questi è un valore `char` valido?', ["'J'", '"J"', "'Java'", 'J'], 'Un `char` è un solo carattere tra apici singoli. Con le virgolette doppie sarebbe uno `String`.'),
        out(`int a = 7;\nint b = 2;\nSystem.out.println(a / b);`, ['3', '3.5', '4', '3.0'], 'Dividere due `int` dà un altro `int`: la parte decimale si scarta.'),
        out(`double prezzo = 9.99;\nint n = (int) prezzo;\nSystem.out.println(n);`, ['9', '10', '9.99', '9.0'], 'Il cast a `int` taglia i decimali, non arrotonda.'),
        out(`String s = "Java";\nSystem.out.println(s + 1 + 2);`, ['Java12', 'Java3', '3Java', 'Errore'], 'Si valuta da sinistra a destra: "Java" + 1 è "Java1", e + 2 dà "Java12".'),
        mc('Che cosa succede con questo codice?', ['Non compila: una variabile final non si può riassegnare', 'MAX diventa 20', 'MAX resta 10 senza avvisi', 'Fallisce solo in esecuzione'], 'Il compilatore impedisce di riassegnare una variabile `final`.', `final int MAX = 10;\nMAX = 20;`),
        out(`char c = 'A';\nint n = c + 2;\nchar d = (char) n;\nSystem.out.println(n + " " + d);`, ['67 C', 'C 67', 'A2 C', '67 67'], 'Un `char` è un numero: A vale 65, quindi n è 67. Riconvertendolo in `char` otteniamo la C.'),
      ],
    },
    // ───────────── Giorno 3 ─────────────
    {
      id: 'java-operators',
      t: 'Operatori',
      d: 'Aritmetici, di confronto, logici, incrementi e precedenza.',
      guide: [
        { h: 'Operatori aritmetici', p: [
          'Java ha `+`, `-`, `*`, `/` e `%`. L’operatore `%` dà il resto della divisione e serve a sapere se un numero è pari (`n % 2 == 0`) o a ripetere cicli.',
          'Attenzione alla divisione tra interi: `7 / 2` dà `3`, perché entrambi gli operandi sono `int`. Se uno è `double`, lo è anche il risultato: `7 / 2.0` dà `3.5`.',
          'Dividere un intero per zero lancia `ArithmeticException`; con `double` il risultato è `Infinity`.' ],
          code: `int a = 7, b = 2;\nSystem.out.println(a + b);    // 9\nSystem.out.println(a / b);    // 3\nSystem.out.println(a % b);    // 1\nSystem.out.println(a / 2.0);  // 3.5` },
        { h: 'Assegnazione composta e incrementi', p: [
          '`x += 3` equivale a `x = x + 3`. Esistono anche `-=`, `*=`, `/=` e `%=`.',
          '`x++` somma 1 e `x--` sottrae 1. Da soli su una riga è indifferente metterli prima o dopo, ma dentro un’espressione cambia: `x++` usa il valore vecchio e poi somma; `++x` somma prima e usa quello nuovo.' ],
          code: `int punti = 10;\npunti += 5;   // 15\npunti *= 2;   // 30\nint i = 5;\nint a = i++;  // a = 5, i = 6\nint b = ++i;  // i = 7, b = 7` },
        { h: 'Confronto e logica', p: [
          'I comparatori `==`, `!=`, `>`, `<`, `>=` e `<=` restituiscono un `boolean`. Non confondere `==` (confrontare) con `=` (assegnare).',
          'Gli operatori logici sono `&&` (e), `||` (o) e `!` (non). Si valutano in cortocircuito: se la parte sinistra basta a decidere il risultato, la destra non viene eseguita. Così `n != 0 && 10 / n > 1` non divide mai per zero.' ],
          code: `int eta = 25;\nboolean adulto = eta >= 18;               // true\nboolean giovane = eta >= 18 && eta < 30;  // true\nboolean weekend = false;\nSystem.out.println(!weekend || adulto);   // true` },
        { h: 'Precedenza, cast e Math', p: [
          'Come in matematica, `*`, `/` e `%` vengono prima di `+` e `-`. Nel dubbio usa le parentesi: rendono anche il codice più leggibile.',
          'Il cast `(double) a / b` converte `a` prima di dividere. La classe `Math` offre funzioni pronte: `Math.pow`, `Math.sqrt`, `Math.max`, `Math.abs` e `Math.round`.' ],
          code: `System.out.println(2 + 3 * 4);        // 14\nSystem.out.println((2 + 3) * 4);      // 20\nSystem.out.println((double) 7 / 2);   // 3.5\nSystem.out.println(Math.pow(2, 10));  // 1024.0\nSystem.out.println(Math.sqrt(81));    // 9.0\nSystem.out.println(Math.round(4.6));  // 5` },
        { h: 'Esempio reale: spedizione gratuita e tempi di consegna', real: true, p: [
          'Un negozio regala la spedizione se l’ordine supera i 50 € o se il cliente è socio. Il corriere ha poi bisogno del tempo di percorso in ore e minuti.',
          'Con `/` e `%` tra interi trasformiamo i minuti in ore e minuti senza decimali.' ],
          code: `double subtotale = 47.50;\nboolean socio = true;\nboolean spedizioneGratis = subtotale >= 50 || socio;\n\nint minuti = 135;\nSystem.out.println("Spedizione gratis: " + spedizioneGratis);   // Spedizione gratis: true\nSystem.out.println(minuti / 60 + " h " + minuti % 60 + " min"); // 2 h 15 min` },
      ],
      x: [
        out(`System.out.println(10 % 4);`, ['2', '2.5', '0', '4'], '`%` dà il resto: il 4 sta nel 10 due volte e avanza 2.'),
        out(`int x = 5;\nx += 3;\nSystem.out.println(x);`, ['8', '5', '53', '3'], '`x += 3` equivale a `x = x + 3`.'),
        mc('Quale operatore significa «o» logico in Java?', ['||', '&&', '!', 'or'], '`||` è O, `&&` è E e `!` è NON. Java non usa la parola `or`.'),
        out(`System.out.println(2 + 3 * 4);`, ['14', '20', '24', '9'], 'La moltiplicazione viene prima: 3 × 4 = 12 e poi 2 + 12 = 14.'),
        out(`System.out.println((double) 7 / 2);`, ['3.5', '3', '3.0', '4'], 'Il cast trasforma il 7 in 7.0 prima di dividere, quindi la divisione è decimale.'),
        typ('Somma 1 alle visite con l’operatore di incremento', `int visite = 41;\nvisite___;`, ['++', '+= 1', '+=1'], '`visite++` somma 1 alla variabile; è la forma breve di `visite = visite + 1`.'),
        out(`int c = 0;\nSystem.out.println(c != 0 && 10 / c > 1);`, ['false', 'true', 'ArithmeticException', '0'], 'Cortocircuito: `c != 0` è falso, quindi `&&` non valuta mai la divisione per zero.'),
        out(`int i = 5;\nint j = i++ + ++i;\nSystem.out.println(j + " " + i);`, ['12 7', '11 7', '12 6', '10 7'], '`i++` usa 5 e lascia `i` a 6; `++i` lo porta a 7 e usa 7. La somma è 12 e `i` finisce a 7.'),
      ],
    },
    // ───────────── Giorno 4 ─────────────
    {
      id: 'java-conditionals',
      t: 'Condizioni',
      d: 'if, else if, else, l’operatore ternario e switch.',
      guide: [
        { h: 'if ed else', p: [
          '`if (condizione) { ... }` esegue il blocco solo se la condizione è `true`. La condizione deve essere un `boolean`: in Java un numero non va bene.',
          'Un errore classico è scrivere `if (x = 5)`: con un `int` non compila, perché `=` assegna invece di confrontare. Usa `==`. E metti sempre le graffe, anche se il blocco ha una sola riga.' ],
          code: `int eta = 16;\nif (eta >= 18) {\n    System.out.println("Puoi votare");\n} else {\n    System.out.println("Non puoi ancora votare");\n}\n// Non puoi ancora votare` },
        { h: 'else if: più opzioni', p: [
          'Con `else if` concateni le condizioni. Java le controlla in ordine ed esegue solo la prima che si verifica; le altre vengono saltate.',
          'Per questo l’ordine conta: metti prima le condizioni più severe. Se controllassi `voto >= 5` prima di `voto >= 9`, un 10 uscirebbe come «Sufficiente».' ],
          code: `double voto = 7.5;\nif (voto >= 9) {\n    System.out.println("Ottimo");\n} else if (voto >= 7) {\n    System.out.println("Buono");\n} else if (voto >= 5) {\n    System.out.println("Sufficiente");\n} else {\n    System.out.println("Insufficiente");\n}\n// Buono` },
        { h: 'L’operatore ternario', p: [
          '`condizione ? valoreSeVero : valoreSeFalso` restituisce un valore in una sola riga. È ideale per scegliere tra due testi o due numeri.',
          'Non concatenarlo troppe volte: tre ternari di fila sono difficili da leggere, e lì è meglio un `if`.' ],
          code: `int scorte = 0;\nString stato = scorte > 0 ? "Disponibile" : "Esaurito";\nSystem.out.println(stato);  // Esaurito` },
        { h: 'Lo switch classico', p: [
          '`switch` confronta un valore (intero, `char`, `String` o enum) con diversi `case`. `default` raccoglie tutti gli altri casi.',
          'Nello switch classico, se dimentichi `break` l’esecuzione «cade» nel caso successivo. A volte si usa apposta per raggruppare casi, ma quasi sempre è un errore. Il giorno 25 vedrai lo switch moderno con le frecce, che non ha questo problema.' ],
          code: `String giorno = "sabato";\nswitch (giorno) {\n    case "sabato":\n    case "domenica":\n        System.out.println("Fine settimana");\n        break;\n    default:\n        System.out.println("Giorno feriale");\n}\n// Fine settimana` },
        { h: 'Esempio reale: il costo di una spedizione', real: true, p: [
          'Un negozio calcola la spedizione per fasce di peso e aggiunge un supplemento per le isole. Nota che il testo si confronta con `equals`, mai con `==`.' ],
          code: `double kg = 3.2;\nString zona = "continente";\ndouble costo;\nif (kg <= 1) {\n    costo = 4.50;\n} else if (kg <= 5) {\n    costo = 6.90;\n} else {\n    costo = 6.90 + (kg - 5) * 1.20;\n}\nif (zona.equals("isole")) {\n    costo += 8;\n}\nSystem.out.println("Spedizione: " + costo + " €");  // Spedizione: 6.9 €` },
      ],
      x: [
        fill(`if (eta >= 18) {\n    System.out.println("adulto");\n} ___ {\n    System.out.println("minore");\n}`, ['else', 'elif', 'otherwise', 'default'], 'Il blocco alternativo si scrive con `else`. `elif` è di Python.'),
        out(`int x = 10;\nif (x > 5 && x < 20) {\n    System.out.println("dentro");\n} else {\n    System.out.println("fuori");\n}`, ['dentro', 'fuori', 'dentro\nfuori'], '10 soddisfa entrambe le condizioni unite da `&&`, e si esegue un solo blocco.'),
        mc('Se `x` è un `int`, che cosa succede con `if (x = 5)`?', ['Non compila: = assegna e la condizione deve essere boolean', 'Confronta x con 5', 'È sempre vero', 'È sempre falso'], 'Per confrontare si usa `==`. Java richiede che la condizione sia un `boolean`.'),
        out(`int x = 5;\nString r = (x % 2 == 0) ? "pari" : "dispari";\nSystem.out.println(r);`, ['dispari', 'pari', 'true'], 'Il ternario sceglie "dispari" perché 5 % 2 vale 1, non 0.'),
        ord('Scrivi l’intestazione dell’if: «se eta è maggiore o uguale a 18»', ['if', '(', 'eta', '>=', '18', ')'], ['=>', 'then'], 'La condizione va tra parentesi e l’operatore è `>=`. Java non usa `then`.'),
        out(`int voto = 75;\nif (voto >= 90) System.out.println("A");\nelse if (voto >= 70) System.out.println("B");\nelse System.out.println("C");`, ['B', 'A', 'C', 'B\nC'], '75 non arriva a 90 ma arriva a 70, e dopo il primo successo gli altri si saltano.'),
        out(`int giorno = 2;\nswitch (giorno) {\n    case 1: System.out.print("L");\n    case 2: System.out.print("Ma");\n    case 3: System.out.print("Me");\n        break;\n    default: System.out.print("?");\n}`, ['MaMe', 'Ma', 'MaMe?', 'LMaMe'], 'Entra nel `case 2` e, senza `break`, continua nel `case 3` finché non ne trova uno.'),
        out(`int eta = 70;\nboolean studente = false;\ndouble prezzo = 10;\nif (eta < 12 || eta >= 65) {\n    prezzo = prezzo / 2;\n} else if (studente) {\n    prezzo = prezzo * 0.8;\n}\nString tariffa = prezzo < 10 ? "ridotto" : "intero";\nSystem.out.println(tariffa + " " + prezzo);`, ['ridotto 5.0', 'intero 10.0', 'ridotto 8.0', 'ridotto 5'], '70 soddisfa `eta >= 65`, quindi il prezzo scende a 5.0 e l’else if non viene nemmeno guardato. Essendo un `double`, si stampa con il decimale.'),
      ],
    },
    // ───────────── Giorno 5 ─────────────
    {
      id: 'java-loops',
      t: 'Cicli',
      d: 'for, for-each, while, do-while, break e continue.',
      guide: [
        { h: 'Il ciclo for', p: [
          '`for (int i = 0; i < n; i++)` ha tre parti: l’inizio, la condizione controllata prima di ogni giro e il passo eseguito alla fine di ogni giro.',
          'Usalo quando sai quante volte vuoi ripetere. L’errore più tipico è «uno in più»: con `i <= array.length` esci dall’array.' ],
          code: `for (int i = 1; i <= 3; i++) {\n    System.out.println("Giro " + i);\n}\n// Giro 1\n// Giro 2\n// Giro 3\n\nfor (int i = 10; i > 0; i -= 5) {\n    System.out.println(i);   // 10 e 5\n}` },
        { h: 'Il for-each', p: [
          'Qui compare per la prima volta un array, più valori tra parentesi graffe con un tipo come `String[]`. Per ora basta sapere che il for-each li percorre uno alla volta; array e collezioni arrivano dal giorno 7.',
          '`for (String nome : nomi)` percorre tutti gli elementi di un array o di una collezione senza gestire indici. È più corto ed evita di uscire dall’intervallo.',
          'Usalo ogni volta che non ti serve la posizione. Se ti serve, o devi modificare l’array per indice, usa il `for` classico.' ],
          code: `String[] invitati = {"Ana", "Luis", "Eva"};\nfor (String nome : invitati) {\n    System.out.println("Ciao, " + nome);\n}` },
        { h: 'while e do-while', p: [
          '`while (condizione)` ripete finché la condizione è vera. Usalo quando non sai quanti giri ci saranno, per esempio leggendo dati finché non finiscono.',
          '`do { ... } while (condizione);` controlla alla fine, quindi si esegue almeno una volta: utile per i menu mostrati prima di chiedere.',
          'Se la condizione non diventa mai falsa hai un ciclo infinito. Assicurati che qualcosa nel ciclo la avvicini alla fine.' ],
          code: `int conto = 3;\nwhile (conto > 0) {\n    System.out.println(conto);\n    conto--;\n}\nSystem.out.println("Decollo!");` },
        { h: 'break, continue e cicli annidati', p: [
          '`break` esce subito dal ciclo; `continue` salta il resto del giro attuale e passa al successivo.',
          'Un ciclo dentro un altro percorre combinazioni: righe e colonne, ogni prodotto con ogni negozio. I due contatori hanno bisogno di nomi diversi (`i` e `j`).' ],
          code: `for (int i = 1; i <= 3; i++) {\n    String riga = "";\n    for (int j = 1; j <= 3; j++) {\n        riga += i * j + " ";\n    }\n    System.out.println(riga.trim());\n}\n// 1 2 3\n// 2 4 6\n// 3 6 9` },
        { h: 'Esempio reale: quanto ci mette un risparmio a crescere', real: true, p: [
          'Hai 1000 € su un conto che rende il 5 % all’anno e vuoi sapere in quanti anni arrivi a 1200 €. Non sai quanti giri ci saranno, quindi usi `while`.' ],
          code: `double risparmio = 1000;\nint anni = 0;\nwhile (risparmio < 1200) {\n    risparmio = risparmio * 1.05;\n    anni++;\n}\nSystem.out.println("Anni necessari: " + anni);  // Anni necessari: 4` },
      ],
      x: [
        fill(`___ (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}`, ['for', 'foreach', 'loop', 'while'], 'Il ciclo con inizio, condizione e passo è `for`.'),
        out(`for (int i = 1; i <= 3; i++) {\n    System.out.println(i * 2);\n}`, ['2\n4\n6', '1\n2\n3', '2\n4\n6\n8', '0\n2\n4'], '`i` vale 1, 2 e 3; ogni volta si stampa il doppio su una riga.'),
        out(`int n = 3;\nwhile (n > 0) {\n    System.out.print(n);\n    n--;\n}`, ['321', '3210', '123', '33'], 'Si stampano 3, 2 e 1. Quando `n` arriva a 0 la condizione fallisce e il ciclo termina.'),
        out(`int[] nums = {4, 8, 15};\nint somma = 0;\nfor (int n : nums) {\n    somma += n;\n}\nSystem.out.println(somma);`, ['27', '3', '4815', '15'], 'Il for-each percorre ogni numero e li accumula: 4 + 8 + 15 = 27.'),
        out(`int i = 0;\ndo {\n    i++;\n} while (i < 0);\nSystem.out.println(i);`, ['1', '0', '-1', 'Ciclo infinito'], '`do-while` esegue il blocco una volta prima di controllare la condizione.'),
        out(`for (int i = 0; i < 5; i++) {\n    if (i == 3) break;\n    System.out.print(i);\n}`, ['012', '0123', '01234', '3'], 'Arrivato a 3, `break` esce dal ciclo prima di stampare.'),
        typ('Salta i numeri negativi e prosegui con il successivo', `for (int n : nums) {\n    if (n < 0) ___;\n    somma += n;\n}`, 'continue', '`continue` termina il giro attuale e passa all’elemento successivo; `break` uscirebbe dal ciclo.'),
        out(`int totale = 0;\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (j == i) continue;\n        totale += i * j;\n    }\n}\nSystem.out.println(totale);`, ['22', '36', '14', '18'], 'Si sommano tutti i prodotti i × j tranne quando i e j coincidono: 36 in totale meno 1 + 4 + 9 = 22.'),
      ],
    },
    // ───────────── Giorno 6 ─────────────
    {
      id: 'java-strings',
      t: 'Stringhe',
      d: 'length, charAt, substring, equals, split e StringBuilder.',
      guide: [
        { h: 'Che cos’è uno String', p: [
          '`String` contiene testo tra virgolette doppie. È una classe, quindi ha metodi che si chiamano con un punto: `nome.length()`.',
          'Gli String sono immutabili: nessun metodo cambia il testo originale, tutti ne restituiscono uno nuovo. Se non salvi il risultato, si perde.',
          'Gli indici dei caratteri partono da 0: in `"Java"` la `J` è nella posizione 0 e la `a` finale nella 3.' ],
          code: `String s = "ciao";\ns.toUpperCase();          // restituisce "CIAO", ma non si salva\nSystem.out.println(s);    // ciao\ns = s.toUpperCase();      // ora sì\nSystem.out.println(s);    // CIAO` },
        { h: 'Metodi essenziali', p: [
          '`length()` conta i caratteri, `charAt(i)` restituisce quello in posizione `i` e `indexOf()` cerca dove compare qualcosa (restituisce -1 se non c’è).',
          '`substring(inizio, fine)` taglia: include `inizio` ed esclude `fine`. `trim()` toglie gli spazi agli estremi; `replace()`, `contains()`, `startsWith()` ed `endsWith()` fanno quello che dice il nome.' ],
          code: `String s = "Hola Java";\nSystem.out.println(s.length());          // 9\nSystem.out.println(s.charAt(0));         // H\nSystem.out.println(s.indexOf("Java"));   // 5\nSystem.out.println(s.substring(0, 4));   // Hola\nSystem.out.println(s.replace("a", "4")); // Hol4 J4v4\nSystem.out.println(s.contains("Ja"));    // true` },
        { h: 'Confrontare testi: equals, non ==', p: [
          '`==` controlla se due variabili puntano allo stesso oggetto in memoria, non se il testo è uguale. Per confrontare il contenuto usa sempre `equals()`.',
          '`equalsIgnoreCase()` ignora maiuscole e minuscole, utile per confrontare le risposte degli utenti. `compareTo()` serve a ordinare alfabeticamente: restituisce un numero negativo, zero o positivo.' ],
          code: `String a = "java";\nString b = new String("java");\nSystem.out.println(a == b);                     // false\nSystem.out.println(a.equals(b));                // true\nSystem.out.println("JAVA".equalsIgnoreCase(a)); // true` },
        { h: 'Dividere, unire e StringBuilder', p: [
          '`split(",")` taglia un testo in un array di pezzi e `String.join(", ", ...)` li riunisce. `"ab".repeat(3)` ripete il testo.',
          'Concatenare con `+` dentro un ciclo crea un nuovo String a ogni giro. Per costruire testi lunghi usa `StringBuilder`, che si modifica: `append()`, `insert()`, `reverse()` e alla fine `toString()`.' ],
          code: `String[] parti = "rosso,verde,blu".split(",");\nSystem.out.println(parti[1]);                    // verde\nSystem.out.println(String.join(" | ", parti));   // rosso | verde | blu\n\nStringBuilder sb = new StringBuilder();\nsb.append("Ciao").append(", ").append("Java");\nSystem.out.println(sb.toString());               // Ciao, Java` },
        { h: 'Esempio reale: pulire un’e-mail da un modulo', real: true, p: [
          'Le persone scrivono la loro e-mail con spazi e maiuscole. Prima di salvarla bisogna normalizzarla, e a volte separare l’utente dal dominio.' ],
          code: `String inserita = "  Ana.Rossi@Gmail.COM ";\nString email = inserita.trim().toLowerCase();\nint chiocciola = email.indexOf('@');\nString utente = email.substring(0, chiocciola);\nString dominio = email.substring(chiocciola + 1);\n\nSystem.out.println(email);    // ana.rossi@gmail.com\nSystem.out.println(utente);   // ana.rossi\nSystem.out.println(dominio);  // gmail.com` },
      ],
      x: [
        out(`String s = "Java";\nSystem.out.println(s.length());`, ['4', '3', '5'], '`length()` restituisce il numero di caratteri: J, a, v, a.'),
        out(`System.out.println("Ciao".charAt(1));`, ['i', 'C', 'a'], 'Gli indici partono da 0, quindi 1 è la seconda lettera.'),
        mc('Come si confronta correttamente il contenuto di due String?', ['s1.equals(s2)', 's1 == s2', 's1 === s2', 's1.compare(s2)'], '`==` controlla se sono lo stesso oggetto in memoria. `equals()` confronta il testo.'),
        out(`String s = "programmare";\nSystem.out.println(s.substring(0, 3));`, ['pro', 'prog', 'rog', 'ogr'], '`substring(inizio, fine)` include l’inizio ed esclude la fine: posizioni 0, 1 e 2.'),
        out(`String s = "ciao";\ns.toUpperCase();\nSystem.out.println(s);`, ['ciao', 'CIAO', 'Ciao'], 'Gli String sono immutabili: `toUpperCase()` restituisce un altro String, che qui non si salva.'),
        typ('Togli gli spazi all’inizio e alla fine', `String inserita = "  ana@mail.com ";\nString pulita = inserita.___();`, ['trim', 'strip'], '`trim()` (o `strip()`) restituisce il testo senza spazi agli estremi.'),
        out(`String[] parti = "rosso,verde,blu".split(",");\nSystem.out.println(parti.length + " " + parti[1]);`, ['3 verde', '2 verde', '3 rosso', '3 ,verde'], '`split(",")` dà 3 pezzi e quello di indice 1 è "verde".'),
        out(`StringBuilder sb = new StringBuilder("ab");\nsb.append("cd").reverse();\nString s = sb.toString().toUpperCase();\nSystem.out.println(s.indexOf("B") + s);`, ['2DCBA', '1DCBA', '2ABCD', 'DCBA2'], '`append` lascia "abcd", `reverse` lo trasforma in "dcba" e in maiuscolo è "DCBA". La B è nella posizione 2 e il numero si concatena davanti.'),
      ],
    },
    // ───────────── Giorno 7 ─────────────
    {
      id: 'java-arrays',
      t: 'Array',
      d: 'Array di dimensione fissa, indici, la classe Arrays e matrici.',
      guide: [
        { h: 'Che cos’è un array', p: [
          'Un array conserva più valori dello stesso tipo sotto un solo nome. La sua dimensione si fissa alla creazione e non cambia più.',
          'Puoi crearlo con dei valori, `int[] voti = {7, 9, 5};`, o vuoto con una dimensione, `new int[5]`. Quelli vuoti si riempiono di valori predefiniti: `0` per i numeri, `false` per i `boolean` e `null` per gli oggetti come `String`.' ],
          code: `int[] voti = {7, 9, 5};\nString[] nomi = new String[3];      // [null, null, null]\ndouble[] prezzi = new double[2];    // [0.0, 0.0]\nnomi[0] = "Ana";` },
        { h: 'Indici e length', p: [
          'Gli indici vanno da `0` a `length - 1`. L’ultimo elemento è `a[a.length - 1]`. `length` è una proprietà, senza parentesi (a differenza di `length()` degli String).',
          'Se usi un indice fuori intervallo, Java lancia `ArrayIndexOutOfBoundsException`. È uno degli errori più comuni all’inizio, soprattutto con `<=` al posto di `<` nei cicli.' ],
          code: `int[] a = {10, 20, 30};\nSystem.out.println(a.length);          // 3\nSystem.out.println(a[a.length - 1]);   // 30\n// System.out.println(a[3]);           // ArrayIndexOutOfBoundsException` },
        { h: 'Percorrere un array', p: [
          'Con un `for` classico hai l’indice; con il for-each (`for (int n : voti)`) percorri direttamente i valori. Li vedrai a fondo il giorno dei cicli.',
          'Un array è un oggetto: se scrivi `int[] b = a;`, `b` e `a` puntano allo stesso array. Per una copia indipendente usa `a.clone()` o `Arrays.copyOf(a, a.length)`.' ],
          code: `int[] voti = {7, 9, 5};\nfor (int i = 0; i < voti.length; i++) {\n    System.out.println("Voto " + i + ": " + voti[i]);\n}\nint somma = 0;\nfor (int n : voti) {\n    somma += n;\n}\nSystem.out.println(somma);  // 21` },
        { h: 'La classe Arrays e le matrici', p: [
          'Se stampi direttamente un array vedrai qualcosa come `[I@1b6d3586`, il suo riferimento. Usa `Arrays.toString()` per vederne il contenuto. Ricorda `import java.util.Arrays;`.',
          '`Arrays.sort()` ordina, `Arrays.fill()` riempie e `Arrays.copyOf()` copia. Una matrice è un array di array: `m[riga][colonna]`.' ],
          code: `int[] a = {3, 1, 2};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a));  // [1, 2, 3]\n\nint[][] tabellone = {{1, 2, 3}, {4, 5, 6}};\nSystem.out.println(tabellone[1][2]);      // 6\nSystem.out.println(tabellone.length);     // 2 righe` },
        { h: 'Esempio reale: le temperature della settimana', real: true, p: [
          'Un’app meteo salva le massime dei 7 giorni della settimana e mostra la più alta e la media.' ],
          code: `double[] temp = {18.5, 21.0, 19.5, 23.0, 22.5, 24.0, 18.5};\ndouble somma = 0;\ndouble max = temp[0];\nfor (double t : temp) {\n    somma += t;\n    if (t > max) max = t;\n}\nSystem.out.println("Massima: " + max);              // Massima: 24.0\nSystem.out.println("Media: " + somma / temp.length); // Media: 21.0` },
      ],
      x: [
        out(`int[] arr = new int[3];\nSystem.out.println(arr[0]);`, ['0', 'null', '3', 'Errore'], 'Gli array di `int` si riempiono di zeri alla creazione.'),
        out(`int[] arr = {1, 2, 3};\nSystem.out.println(arr.length);`, ['3', '2', '4'], '`length` è il numero di elementi, non l’ultimo indice.'),
        typ('Stampa quanti nomi ci sono', `String[] nomi = {"Ana", "Bea"};\nSystem.out.println(nomi.___);`, 'length', 'Negli array, `length` è una proprietà e va senza parentesi.'),
        mc('Se `arr` ha 3 elementi, che cosa succede leggendo `arr[3]`?', ['Viene lanciata ArrayIndexOutOfBoundsException', 'Restituisce 0', 'Restituisce null', 'Restituisce l’ultimo elemento'], 'Gli indici validi vanno da 0 a 2; il 3 è fuori intervallo.'),
        out(`int[] a = {3, 1, 2};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a));`, ['[1, 2, 3]', '[3, 1, 2]', '123', '[I@1b6d3586'], '`Arrays.toString` dà un testo leggibile; stampare l’array direttamente mostrerebbe il suo riferimento.'),
        out(`int[][] m = {{1, 2}, {3, 4}};\nSystem.out.println(m[1][0]);`, ['3', '2', '4', '1'], 'Riga 1 (la seconda) e colonna 0 (la prima).'),
        out(`int[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 9;\nSystem.out.println(a[0]);`, ['9', '1', '0'], '`b = a` non copia l’array: entrambe le variabili puntano allo stesso, quindi il cambio si vede da `a`.'),
        out(`int[] v = {4, 7, 1, 9};\nint[] c = Arrays.copyOf(v, 3);\nArrays.sort(c);\nSystem.out.println(c[c.length - 1] + v[3]);`, ['16', '18', '10', '79'], '`copyOf(v, 3)` copia {4, 7, 1}; ordinato diventa {1, 4, 7}. L’ultimo è 7, e 7 + 9 = 16. `v` non cambia.'),
      ],
    },
    // ───────────── Giorno 8 ─────────────
    {
      id: 'java-arraylist',
      t: 'ArrayList',
      d: 'Liste dinamiche: add, get, set, remove, size e classi wrapper.',
      guide: [
        { h: 'Perché una lista', p: [
          'Un array ha dimensione fissa. Se non sai quanti elementi avrai (i prodotti di un carrello, i messaggi di una chat), usa `ArrayList`, che cresce e si restringe da sola.',
          'Si dichiara con il tipo degli elementi tra parentesi angolari: `List<String> nomi = new ArrayList<>();`. Servono `import java.util.ArrayList;` e `import java.util.List;`.',
          'Dichiarare la variabile come `List` (l’interfaccia) e crearla come `ArrayList` è la pratica abituale: così puoi cambiare implementazione senza toccare il resto del codice.' ] },
        { h: 'Metodi di base', p: [
          '`add()` aggiunge in fondo (o in una posizione con `add(i, x)`), `get(i)` legge, `set(i, x)` sostituisce e `remove()` toglie. `size()` dice quanti sono.',
          '`contains()` e `indexOf()` cercano, `isEmpty()` dice se è vuota e `clear()` la svuota. Stampare una lista ne mostra il contenuto: `[a, b, c]`.' ],
          code: `List<String> frutti = new ArrayList<>();\nfrutti.add("mela");\nfrutti.add("pera");\nfrutti.add(0, "kiwi");      // [kiwi, mela, pera]\nfrutti.set(1, "mango");     // [kiwi, mango, pera]\nfrutti.remove("pera");      // [kiwi, mango]\nSystem.out.println(frutti.get(0));            // kiwi\nSystem.out.println(frutti.size());            // 2\nSystem.out.println(frutti.contains("mango")); // true` },
        { h: 'Classi wrapper e autoboxing', p: [
          'Le liste contengono solo oggetti, non primitivi. Per questo `List<int>` non compila: si usa la classe wrapper, `List<Integer>`. Ogni primitivo ha la sua: `Integer`, `Double`, `Boolean`, `Character`...',
          'Java converte automaticamente tra `int` e `Integer` (autoboxing). Attenzione a `remove`: in una `List<Integer>`, `remove(1)` toglie l’indice 1, e `remove(Integer.valueOf(1))` toglie il valore 1.' ],
          code: `List<Integer> nums = new ArrayList<>(List.of(5, 1, 8));\nnums.remove(1);                   // toglie l'indice 1 -> [5, 8]\nnums.remove(Integer.valueOf(8));  // toglie il valore 8 -> [5]\nSystem.out.println(nums);         // [5]` },
        { h: 'Percorrere, ordinare e liste immutabili', p: [
          'Percorri una lista con il for-each. `Collections.sort(lista)` la ordina e `Collections.max(lista)` dà l’elemento più grande.',
          '`List.of(...)` crea una lista immutabile: è veloce da scrivere, ma `add` o `remove` lanciano `UnsupportedOperationException`. Se devi modificarla, avvolgila: `new ArrayList<>(List.of(...))`.' ],
          code: `List<Integer> eta = new ArrayList<>(List.of(34, 19, 27));\nCollections.sort(eta);\nSystem.out.println(eta);                   // [19, 27, 34]\nSystem.out.println(Collections.max(eta));  // 34\nfor (int e : eta) {\n    System.out.print(e + ";");             // 19;27;34;\n}` },
        { h: 'Esempio reale: la lista della spesa', real: true, p: [
          'Un’app per la lista della spesa aggiunge prodotti, cancella quelli comprati e mette per primo ciò che è urgente.' ],
          code: `List<String> spesa = new ArrayList<>();\nspesa.add("latte");\nspesa.add("pane");\nspesa.add("uova");\nspesa.remove("pane");          // già comprato\nspesa.add(0, "caffè");         // l'urgente per primo\nSystem.out.println(spesa);     // [caffè, latte, uova]\nSystem.out.println("Mancano " + spesa.size() + " cose");  // Mancano 3 cose` },
      ],
      x: [
        out(`List<String> lista = new ArrayList<>();\nlista.add("a");\nlista.add("b");\nSystem.out.println(lista.size());`, ['2', '1', '0'], '`size()` restituisce quanti elementi ci sono nella lista.'),
        typ('Aggiungi "Luis" in fondo alla lista', `List<String> nomi = new ArrayList<>();\nnomi.___("Luis");`, 'add', '`add` inserisce un elemento in fondo alla lista.'),
        fill(`List<String> citta = new ArrayList<>(List.of("Lima", "Quito"));\nString prima = citta.___(0);`, ['get', 'at', 'first', 'index'], '`get(i)` restituisce l’elemento in posizione `i`. Le parentesi quadre `[0]` funzionano solo con gli array.'),
        out(`List<String> l = List.of("x", "y");\nSystem.out.println(l.contains("y"));`, ['true', 'false', '1'], '`contains` indica se l’elemento è nella lista.'),
        mc('Perché `List<int>` non compila?', ['I generici richiedono tipi oggetto: bisogna usare List<Integer>', 'Manca l’import di int', 'List non accetta numeri', 'Bisogna scrivere List[int]'], '`Integer` è la classe wrapper di `int` e Java converte tra i due automaticamente.'),
        out(`List<String> l = new ArrayList<>(List.of("a", "b", "c"));\nl.remove(1);\nSystem.out.println(l);`, ['[a, c]', '[b, c]', '[a, b]'], '`remove(1)` toglie l’elemento di indice 1, la "b".'),
        out(`List<Integer> l = new ArrayList<>();\nl.add(5);\nl.add(0, 9);\nSystem.out.println(l.get(0) + l.get(1));`, ['14', '95', '9', '5'], '`add(0, 9)` inserisce il 9 all’inizio: [9, 5]. Sono `Integer`, quindi si sommano: 14.'),
        out(`List<Integer> l = new ArrayList<>(List.of(10, 20, 30));\nl.remove(Integer.valueOf(10));\nl.remove(0);\nl.add(5);\nSystem.out.println(l + " " + l.size());`, ['[30, 5] 2', '[20, 5] 2', '[10, 30, 5] 3', '[30, 5] 3'], 'Prima si toglie il valore 10 ([20, 30]), poi l’indice 0 ([30]) e si aggiunge 5: [30, 5], con 2 elementi.'),
      ],
    },
    // ───────────── Giorno 9 ─────────────
    {
      id: 'java-sets',
      t: 'Set',
      d: 'HashSet, TreeSet, LinkedHashSet e operazioni sugli insiemi.',
      guide: [
        { h: 'Che cos’è un Set', p: [
          'Un `Set` è una collezione senza duplicati: se aggiungi un elemento già presente, non succede nulla. È perfetto per etichette, utenti unici o parole distinte.',
          'Controllare se qualcosa è in un `HashSet` con `contains()` è quasi istantaneo anche con milioni di elementi; in una lista bisognerebbe percorrerla tutta.' ],
          code: `Set<String> etichette = new HashSet<>();\netichette.add("java");\netichette.add("oop");\netichette.add("java");                         // c'era già\nSystem.out.println(etichette.size());          // 2\nSystem.out.println(etichette.contains("oop")); // true` },
        { h: 'Tre implementazioni', p: [
          '`HashSet` è il più veloce, ma non garantisce alcun ordine quando lo percorri.',
          '`LinkedHashSet` ricorda l’ordine di inserimento e `TreeSet` mantiene gli elementi ordinati (numeri dal più piccolo al più grande, testi in ordine alfabetico).',
          'Scegli `HashSet` di default e cambia solo se ti serve un ordine preciso.' ],
          code: `List<Integer> dati = List.of(5, 1, 3, 1);\nSystem.out.println(new LinkedHashSet<>(dati)); // [5, 1, 3]\nSystem.out.println(new TreeSet<>(dati));       // [1, 3, 5]` },
        { h: 'add, remove e il loro risultato', p: [
          '`add()` restituisce `true` se l’elemento era nuovo e `false` se c’era già. Così puoi individuare i duplicati mentre inserisci.',
          'Anche `remove()` restituisce se l’insieme è cambiato. Un `Set` non ha indici: `get(0)` non esiste.' ],
          code: `Set<String> visti = new HashSet<>();\nSystem.out.println(visti.add("ana"));    // true\nSystem.out.println(visti.add("ana"));    // false, ripetuto\nSystem.out.println(visti.remove("eva")); // false, non c'era` },
        { h: 'Unione, intersezione e differenza', p: [
          '`addAll` fa l’unione, `retainAll` l’intersezione (lascia solo quelli in comune) e `removeAll` la differenza.',
          'Tutti e tre modificano l’insieme su cui li chiami. Se vuoi conservare l’originale, fai prima una copia: `new HashSet<>(a)`.' ],
          code: `Set<String> lunedi = Set.of("Ana", "Luis", "Eva");\nSet<String> martedi = Set.of("Eva", "Teo");\n\nSet<String> entrambi = new TreeSet<>(lunedi);\nentrambi.retainAll(martedi);\nSystem.out.println(entrambi);  // [Eva]\n\nSet<String> tutti = new TreeSet<>(lunedi);\ntutti.addAll(martedi);\nSystem.out.println(tutti);     // [Ana, Eva, Luis, Teo]` },
        { h: 'Esempio reale: togliere le e-mail ripetute', real: true, p: [
          'Una newsletter riceve iscrizioni da più moduli e alcune e-mail arrivano due volte. Con un `LinkedHashSet` si eliminano i duplicati e si rispetta l’ordine di arrivo.' ],
          code: `List<String> iscritti = List.of(\n    "ana@mail.com", "luis@mail.com", "ana@mail.com",\n    "eva@mail.com", "luis@mail.com");\nSet<String> unici = new LinkedHashSet<>(iscritti);\nSystem.out.println(unici.size());  // 3\nSystem.out.println(unici);         // [ana@mail.com, luis@mail.com, eva@mail.com]` },
      ],
      x: [
        mc('Quale collezione non ammette elementi duplicati?', ['HashSet', 'ArrayList', 'LinkedList', 'int[]'], 'Un `Set` conserva ogni elemento una sola volta.'),
        out(`Set<String> s = new HashSet<>();\ns.add("a");\ns.add("a");\ns.add("b");\nSystem.out.println(s.size());`, ['2', '3', '1'], 'La seconda "a" viene ignorata perché c’era già.'),
        mc('Che cosa restituisce `set.add(x)` se x era già nell’insieme?', ['false', 'true', 'null', 'Lancia un’eccezione'], '`add` restituisce se l’insieme è cambiato; se x c’era già, non cambia.'),
        out(`Set<Integer> s = new TreeSet<>(List.of(5, 1, 3));\nSystem.out.println(s);`, ['[1, 3, 5]', '[5, 1, 3]', '[5, 3, 1]', '{1, 3, 5}'], '`TreeSet` mantiene gli elementi ordinati dal più piccolo al più grande.'),
        mc('Quale Set conserva l’ordine in cui sono stati aggiunti gli elementi?', ['LinkedHashSet', 'HashSet', 'TreeSet', 'SortedSet'], '`TreeSet` ordina per valore; `LinkedHashSet` rispetta l’ordine di arrivo.'),
        fill(`Set<String> tutti = new TreeSet<>(gruppoA);\ntutti.___(gruppoB);  // unione dei due gruppi`, ['addAll', 'retainAll', 'removeAll', 'union'], '`addAll` aggiunge tutti gli elementi dell’altro insieme: è l’unione.'),
        out(`Set<Integer> a = new TreeSet<>(List.of(1, 2, 3));\na.retainAll(List.of(2, 3, 4));\nSystem.out.println(a);`, ['[2, 3]', '[1, 2, 3, 4]', '[1]', '[4]'], '`retainAll` lascia solo gli elementi in comune: è l’intersezione.'),
        out(`Set<String> s = new TreeSet<>(List.of("pera", "kiwi", "uva"));\nboolean b = s.add("kiwi");\ns.removeAll(Set.of("uva", "mango"));\nSystem.out.println(b + " " + s);`, ['false [kiwi, pera]', 'true [kiwi, pera]', 'false [pera, kiwi]', 'false [kiwi, pera, uva]'], '"kiwi" c’era già, quindi `add` dà false. `removeAll` toglie "uva" (mango non c’era) e il `TreeSet` mostra il resto in ordine alfabetico.'),
      ],
    },
    // ───────────── Giorno 10 ─────────────
    {
      id: 'java-maps',
      t: 'Map',
      d: 'HashMap e TreeMap: put, get, getOrDefault, merge e scorrimento.',
      guide: [
        { h: 'Che cos’è una Map', p: [
          'Una `Map` associa chiavi uniche a valori, come un dizionario: il CAP di ogni città, le scorte di ogni prodotto, il voto di ogni studente.',
          'Si dichiara con due tipi: `Map<String, Integer> scorte = new HashMap<>();`. Le chiavi non si ripetono; se fai `put` con una chiave esistente, ne sostituisci il valore.' ] },
        { h: 'Aggiungere, leggere ed eliminare', p: [
          '`put(k, v)` aggiunge o sostituisce e `get(k)` legge. Se la chiave non esiste, `get` restituisce `null`, e usarlo come numero lancia `NullPointerException`.',
          '`getOrDefault(k, valore)` restituisce un valore alternativo quando manca la chiave. `containsKey()` controlla se esiste e `remove()` la elimina.' ],
          code: `Map<String, Integer> scorte = new HashMap<>();\nscorte.put("mele", 12);\nscorte.put("pere", 5);\nscorte.put("pere", 8);                            // sostituisce\nSystem.out.println(scorte.get("pere"));            // 8\nSystem.out.println(scorte.get("uva"));             // null\nSystem.out.println(scorte.getOrDefault("uva", 0)); // 0\nSystem.out.println(scorte.containsKey("mele"));    // true` },
        { h: 'Percorrere una Map e scegliere l’implementazione', p: [
          '`keySet()` dà le chiavi, `values()` i valori e `entrySet()` le coppie; ogni `Map.Entry` ha `getKey()` e `getValue()`.',
          '`HashMap` non garantisce un ordine, `LinkedHashMap` rispetta quello di inserimento e `TreeMap` ordina per chiave.' ],
          code: `Map<String, Double> voti = new TreeMap<>();\nvoti.put("Luis", 6.5);\nvoti.put("Ana", 9.0);\nfor (Map.Entry<String, Double> e : voti.entrySet()) {\n    System.out.println(e.getKey() + " -> " + e.getValue());\n}\n// Ana -> 9.0\n// Luis -> 6.5` },
        { h: 'Contare con merge', p: [
          'Contare quante volte compare qualcosa è molto comune. `merge(chiave, 1, Integer::sum)` mette 1 se la chiave è nuova e, se esiste già, le somma 1.',
          'L’alternativa classica è `m.put(k, m.getOrDefault(k, 0) + 1)`. Fanno la stessa cosa; `merge` è più corta.' ],
          code: `Map<String, Integer> voti = new HashMap<>();\nfor (String v : new String[] {"sì", "no", "sì"}) {\n    voti.merge(v, 1, Integer::sum);\n}\nSystem.out.println(voti.get("sì"));  // 2` },
        { h: 'Esempio reale: contare le parole di un testo', real: true, p: [
          'Un analizzatore di testi conta quante volte compare ogni parola, per esempio per trovare le più ripetute nelle recensioni dei clienti. Il `TreeMap` le mostra in ordine alfabetico.' ],
          code: `String testo = "il gatto e il cane e il pesce";\nMap<String, Integer> conteggio = new TreeMap<>();\nfor (String parola : testo.split(" ")) {\n    conteggio.merge(parola, 1, Integer::sum);\n}\nSystem.out.println(conteggio);  // {cane=1, e=2, gatto=1, il=3, pesce=1}` },
      ],
      x: [
        out(`Map<String, Integer> m = new HashMap<>();\nm.put("x", 1);\nm.put("x", 5);\nSystem.out.println(m.get("x"));`, ['5', '1', '6', '[1, 5]'], 'Le chiavi sono uniche: il secondo `put` sostituisce il valore.'),
        out(`Map<String, Integer> m = new HashMap<>();\nSystem.out.println(m.get("z"));`, ['null', '0', 'Errore'], '`get` restituisce `null` se la chiave non esiste.'),
        out(`Map<String, Integer> m = new HashMap<>();\nSystem.out.println(m.getOrDefault("z", 0));`, ['0', 'null', 'z'], '`getOrDefault` restituisce il valore alternativo perché la chiave non esiste.'),
        typ('Controlla se la mappa ha la chiave "pere"', `if (scorte.___("pere")) {\n    System.out.println("Ci sono pere");\n}`, 'containsKey', '`containsKey` restituisce `true` se la chiave esiste nella mappa.'),
        fill(`for (Map.Entry<String, Integer> e : mappa.___()) {\n    System.out.println(e.getKey() + "=" + e.getValue());\n}`, ['entrySet', 'entries', 'items', 'keySet'], '`entrySet` dà le coppie chiave-valore; `keySet` darebbe solo le chiavi.'),
        out(`Map<String, Integer> m = new TreeMap<>();\nm.put("b", 2);\nm.put("a", 1);\nSystem.out.println(m);`, ['{a=1, b=2}', '{b=2, a=1}', '[a, b]', '{1, 2}'], '`TreeMap` ordina per chiave e si stampa con le graffe.'),
        mc('Quale Map percorre le chiavi nell’ordine in cui sono state aggiunte?', ['LinkedHashMap', 'HashMap', 'TreeMap', 'SortedMap'], '`HashMap` non garantisce un ordine e `TreeMap` ordina per chiave.'),
        out(`Map<Character, Integer> c = new TreeMap<>();\nfor (char ch : "banana".toCharArray()) {\n    c.merge(ch, 1, Integer::sum);\n}\nSystem.out.println(c);`, ['{a=3, b=1, n=2}', '{b=1, a=3, n=2}', '{a=1, b=1, n=1}', '{a=3, n=2, b=1}'], '`merge` conta ogni lettera: tre a, una b e due n. Il `TreeMap` le ordina alfabeticamente.'),
      ],
    },
    // ───────────── Giorno 11 ─────────────
    {
      id: 'java-methods',
      t: 'Metodi',
      d: 'Tipi di ritorno, void, parametri, overloading e ricorsione.',
      guide: [
        { h: 'Che cos’è un metodo', p: [
          'Un metodo è un blocco di codice con un nome che puoi chiamare quante volte vuoi. Evita di ripetere codice e dà a ogni parte del programma un solo compito.',
          'La sua intestazione indica i modificatori, il tipo restituito, il nome e i parametri: `static int somma(int a, int b)`. Per ora li dichiariamo `static` per chiamarli direttamente da `main`; il giorno 13 vedrai i metodi degli oggetti.' ],
          code: `public class Calcolatrice {\n    static int somma(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        int r = somma(4, 6);\n        System.out.println(r);           // 10\n        System.out.println(somma(1, 1)); // 2\n    }\n}` },
        { h: 'return e void', p: [
          '`return` termina il metodo e restituisce un valore del tipo dichiarato. Se il metodo restituisce `int`, tutti i percorsi devono finire con un `return` intero, altrimenti non compila.',
          'Un metodo `void` non restituisce niente: fa qualcosa (stampare, salvare, inviare) e termina. Può usare `return;` senza valore per uscire prima.' ],
          code: `static void saluta(String nome) {\n    if (nome.isEmpty()) {\n        return;               // esce senza fare nulla\n    }\n    System.out.println("Ciao, " + nome);\n}\n\nstatic boolean ePari(int n) {\n    return n % 2 == 0;\n}` },
        { h: 'Passaggio per valore', p: [
          'Java passa sempre gli argomenti per valore: il metodo riceve una copia. Se cambi un parametro `int` dentro il metodo, la variabile originale non cambia.',
          'Con oggetti e array si copia il riferimento, non l’oggetto. Per questo il metodo può modificare il contenuto di un array che riceve, anche se non può far puntare altrove la variabile originale.' ],
          code: `static void provaACambiare(int x) { x = 99; }\nstatic void azzeraPrimo(int[] a) { a[0] = 0; }\n\nint n = 5;\nprovaACambiare(n);\nSystem.out.println(n);      // 5\n\nint[] dati = {7, 8};\nazzeraPrimo(dati);\nSystem.out.println(dati[0]); // 0` },
        { h: 'Overloading e varargs', p: [
          'Puoi avere più metodi con lo stesso nome se cambiano i parametri: è l’overloading (sovraccarico). Java sceglie quale chiamare in base agli argomenti. `System.out.println` è sovraccaricato per ogni tipo.',
          'Con `int... nums` (varargs) un metodo accetta qualsiasi numero di argomenti, che all’interno si usano come un array.' ],
          code: `static int max(int a, int b) { return a > b ? a : b; }\nstatic double max(double a, double b) { return a > b ? a : b; }\n\nstatic int totale(int... nums) {\n    int t = 0;\n    for (int n : nums) t += n;\n    return t;\n}\n\nSystem.out.println(max(3, 8));          // 8\nSystem.out.println(max(2.5, 1.0));      // 2.5\nSystem.out.println(totale(1, 2, 3, 4)); // 10` },
        { h: 'Ricorsione', p: [
          'Un metodo ricorsivo chiama sé stesso con un problema più piccolo. Ha bisogno di un caso base che non si richiami più; se manca, lo stack si riempie e Java lancia `StackOverflowError`.',
          'È naturale per strutture che si ripetono dentro sé stesse, come cartelle con sottocartelle. Per calcoli semplici, un ciclo di solito è più efficiente.' ],
          code: `static int fattoriale(int n) {\n    if (n <= 1) return 1;            // caso base\n    return n * fattoriale(n - 1);    // caso ricorsivo\n}\n\nSystem.out.println(fattoriale(5));  // 120` },
        { h: 'Esempio reale: il prezzo finale di un ordine', real: true, p: [
          'Un negozio applica uno sconto e poi l’IVA. Separare ogni passo in un metodo con un buon nome fa sì che il calcolo si legga come una frase e si possa riutilizzare.' ],
          code: `static double applicaSconto(double prezzo, int percentuale) {\n    return prezzo - prezzo * percentuale / 100;\n}\n\nstatic double arrotonda(double valore) {\n    return Math.round(valore * 100) / 100.0;\n}\n\ndouble scontato = applicaSconto(80.0, 15);\nSystem.out.println(scontato);                    // 68.0\nSystem.out.println(arrotonda(scontato * 1.21));  // 82.28` },
      ],
      x: [
        fill(`public static ___ somma(int a, int b) {\n    return a + b;\n}`, ['int', 'void', 'return', 'function'], 'Il metodo restituisce la somma di due interi, quindi il tipo di ritorno è `int`.'),
        mc('Che cosa significa `void` nell’intestazione di un metodo?', ['Che non restituisce alcun valore', 'Che non riceve parametri', 'Che è privato', 'Che è statico'], '`void` indica che il metodo non ha valore di ritorno.'),
        typ('Completa il metodo perché restituisca il doppio', `static int doppio(int n) {\n    ___ n * 2;\n}`, 'return', '`return` restituisce il valore e termina il metodo.'),
        out(`static int quadrato(int n) {\n    return n * n;\n}\n\nSystem.out.println(quadrato(quadrato(2)));`, ['16', '8', '4', '2'], 'Prima `quadrato(2)` dà 4 e poi `quadrato(4)` dà 16.'),
        mc('`int max(int a, int b)` e `double max(double a, double b)` nella stessa classe sono...', ['Overloading di metodi', 'Un errore di compilazione', 'Ereditarietà', 'Override'], 'Stesso nome con parametri diversi: Java sceglie quale usare in base al tipo degli argomenti.'),
        out(`static void cambia(int x) { x = 99; }\n\nint n = 1;\ncambia(n);\nSystem.out.println(n);`, ['1', '99', '0', 'Errore'], 'Java passa i primitivi per valore: il metodo modifica una copia.'),
        out(`static void raddoppia(int[] a) { a[0] *= 2; }\n\nint[] v = {5, 1};\nraddoppia(v);\nSystem.out.println(v[0]);`, ['10', '5', '0', 'Errore'], 'Si copia il riferimento all’array, quindi il metodo modifica lo stesso array che vede `main`.'),
        out(`static int totale(int... nums) {\n    int t = 0;\n    for (int n : nums) t += n;\n    return t;\n}\nstatic int fatt(int n) {\n    return n <= 1 ? 1 : n * fatt(n - 1);\n}\n\nSystem.out.println(totale(1, 2, 3) + fatt(4));`, ['30', '10', '33', '624'], '`totale(1, 2, 3)` dà 6 e `fatt(4)` dà 4 × 3 × 2 × 1 = 24. Sono entrambi `int`, quindi si sommano: 30.'),
      ],
    },
    // ───────────── Giorno 12 ─────────────
    {
      id: 'java-packages',
      t: 'Package e import',
      d: 'package, import, java.lang e modificatori di accesso.',
      guide: [
        { h: 'Package', p: [
          'Un package raggruppa classi collegate, come una cartella raggruppa file. Infatti ogni package corrisponde a una cartella: `com.negozio.modello` vive in `com/negozio/modello/`.',
          'Per convenzione si usa il dominio dell’azienda al contrario (`com.azienda.progetto`), tutto in minuscolo. Così due librerie diverse possono avere una classe `Utente` senza scontrarsi.',
          'La riga `package` va per prima nel file; prima possono esserci solo commenti.' ],
          code: `// File: src/com/negozio/modello/Prodotto.java\npackage com.negozio.modello;\n\npublic class Prodotto {\n    // ...\n}` },
        { h: 'import', p: [
          'Per usare una classe di un altro package la importi: `import java.util.List;`. Il carattere jolly `import java.util.*;` importa tutte le classi di quel package, ma non i suoi sottopackage.',
          'Il package `java.lang` si importa da solo: per questo usi `String`, `Math`, `Integer` o `System` senza scrivere nulla. Con `import static` puoi usare membri statici senza il nome della classe.' ],
          code: `import java.util.ArrayList;\nimport java.util.List;\nimport java.time.LocalDate;\nimport static java.lang.Math.PI;\n\ndouble area = PI * 2 * 2;   // senza scrivere Math.PI` },
        { h: 'Modificatori di accesso', p: [
          '`public`: visibile da qualsiasi classe. `protected`: dallo stesso package e dalle sottoclassi. Senza modificatore (package-private): solo dallo stesso package. `private`: solo dentro la classe stessa.',
          'La regola pratica: parti dal più restrittivo (`private`) e apri solo ciò che alle altre classi serve davvero. Meno esponi, meno cose possono rompersi quando cambi il codice.' ] },
        { h: 'La libreria standard', p: [
          'Java porta con sé migliaia di classi pronte all’uso. Quelle che importerai di più: `java.util` (collezioni, `Scanner`, `Random`), `java.time` (date), `java.nio.file` (file) e `java.util.stream` (stream).',
          '`Scanner` legge ciò che l’utente scrive nella console, e `Random` genera numeri casuali.' ],
          code: `import java.util.Random;\nimport java.util.Scanner;\n\nScanner tastiera = new Scanner(System.in);\nSystem.out.print("Come ti chiami? ");\nString nome = tastiera.nextLine();\n\nRandom caso = new Random();\nint dado = caso.nextInt(6) + 1;   // da 1 a 6\nSystem.out.println(nome + " ha tirato un " + dado);` },
        { h: 'Esempio reale: organizzare il progetto di un negozio', real: true, p: [
          'In un progetto reale ogni livello va nel suo package: il modello dei dati in uno e l’applicazione in un altro. I modificatori decidono che cosa può usare ogni parte.' ],
          code: `// File: src/com/negozio/modello/Prodotto.java\npackage com.negozio.modello;\n\npublic class Prodotto {\n    public String nome;\n    double prezzo;   // package-private: solo com.negozio.modello\n}\n\n// File: src/com/negozio/app/Main.java\npackage com.negozio.app;\n\nimport com.negozio.modello.Prodotto;\n\npublic class Main {\n    public static void main(String[] args) {\n        Prodotto p = new Prodotto();\n        p.nome = "Tastiera";   // public: consentito\n        // p.prezzo = 25;      // errore: non visibile da un altro package\n    }\n}` },
      ],
      x: [
        fill(`___ java.util.Scanner;`, ['import', 'include', 'using', 'require'], '`import` porta classi da altri package. `include` è di C e `using` di C#.'),
        mc('Quale package si importa automaticamente in ogni programma Java?', ['java.lang', 'java.util', 'java.io', 'java.main'], 'Per questo puoi usare `String`, `Math` o `System` senza importarli.'),
        mc('Dove si scrive la dichiarazione `package`?', ['Nella prima riga del file', 'Alla fine del file', 'Dentro il metodo main', 'Dove si vuole'], 'Prima possono esserci solo commenti.'),
        out(`System.out.println(Math.max(3, 8) + Math.abs(-2));`, ['10', '6', '11', '5'], '`Math.max(3, 8)` vale 8 e `Math.abs(-2)` vale 2. `Math` è in `java.lang`, non serve importarla.'),
        ord('Scrivi l’import della classe Scanner', ['import', 'java', '.', 'util', '.', 'Scanner', ';'], ['include', '#'], '`Scanner` è nel package `java.util` e la riga termina con `;`.'),
        mc('Un attributo senza modificatore di accesso è visibile...', ['Solo dal suo stesso package', 'Da qualsiasi classe', 'Solo dentro la sua classe', 'Solo dalle sottoclassi'], 'È l’accesso package-private, quello predefinito.'),
        mc('Che cosa importa `import java.util.*;`?', ['Tutte le classi del package java.util, senza i sottopackage', 'Tutti i package di Java', 'java.util e anche java.util.function', 'Niente, è un errore'], 'Il carattere jolly non include sottopackage come `java.util.function`, che si importano a parte.'),
        mc('`Pannello` è in un altro package e non eredita da `Conto`. Quale riga compila dentro `Pannello`?', ['c.titolare = "Ana";', 'c.saldo = 100;', 'c.numero = 7;', 'c.pin = "1234";'], 'Da un altro package e senza ereditarietà si vede solo ciò che è `public`. `protected` richiede di essere sottoclasse, l’accesso predefinito richiede lo stesso package e `private` vale solo dentro `Conto`.', `package com.app.modello;\n\npublic class Conto {\n    public String titolare;\n    protected double saldo;\n    int numero;\n    private String pin;\n}\n\n// In com.app.web.Pannello:\nConto c = new Conto();`),
      ],
    },
    // ───────────── Giorno 13 ─────────────
    {
      id: 'java-classes',
      t: 'Classi e oggetti',
      d: 'Attributi, metodi, costruttori, new e this.',
      guide: [
        { h: 'Classi e oggetti', p: [
          'Una classe è uno stampo: descrive quali dati ha qualcosa (attributi) e cosa sa fare (metodi). Un oggetto è un’istanza concreta di quello stampo, creata con `new`.',
          'La classe `Auto` dice che ogni auto ha una marca e una velocità; la tua auto e quella della tua vicina sono due oggetti diversi, ognuno con i suoi valori.',
          'Pensare a oggetti aiuta a modellare il mondo reale: un ordine, un utente, una fattura. Ognuno conserva i suoi dati e le operazioni che li usano.' ],
          code: `class Auto {\n    String marca;\n    int velocita;\n\n    void accelera(int kmh) {\n        velocita += kmh;\n    }\n}\n\nAuto a = new Auto();\na.marca = "Fiat";\na.accelera(50);\nSystem.out.println(a.marca + " a " + a.velocita);  // Fiat a 50` },
        { h: 'Costruttori', p: [
          'Il costruttore prepara l’oggetto quando viene creato. Si chiama come la classe e non dichiara un tipo di ritorno, nemmeno `void`.',
          'Se non ne scrivi nessuno, Java ne crea uno vuoto. Ma se ne scrivi uno con parametri, quello vuoto scompare: `new Auto()` smetterebbe di compilare.',
          'Puoi avere più costruttori (overloading), e uno può chiamarne un altro con `this(...)`.' ],
          code: `class Auto {\n    String marca;\n    int velocita;\n\n    Auto(String marca) {\n        this(marca, 0);           // chiama l'altro costruttore\n    }\n\n    Auto(String marca, int velocita) {\n        this.marca = marca;\n        this.velocita = velocita;\n    }\n}` },
        { h: 'this', p: [
          '`this` è un riferimento all’oggetto corrente. Si usa soprattutto per distinguere un attributo da un parametro con lo stesso nome: `this.marca = marca;`.',
          'Se in quel caso dimentichi `this`, assegni il parametro a sé stesso e l’attributo resta `null`. Il codice compila, ma non fa quello che volevi.' ] },
        { h: 'Riferimenti e null', p: [
          'Una variabile di tipo oggetto non contiene l’oggetto, contiene un riferimento a esso. Se scrivi `Auto b = a;`, le due variabili puntano alla stessa auto.',
          'Un riferimento che non punta a nulla vale `null`. Chiamare un metodo su `null` lancia `NullPointerException`, l’errore più famoso di Java.' ],
          code: `Auto a = new Auto("Fiat");\nAuto b = a;             // stesso oggetto\nb.velocita = 120;\nSystem.out.println(a.velocita);  // 120\n\nAuto c = null;\n// c.accelera(10);      // NullPointerException` },
        { h: 'Esempio reale: le righe di un ordine', real: true, p: [
          'Ogni riga di un ordine online ha prodotto, prezzo e quantità, e sa calcolare il suo subtotale. L’oggetto raggruppa i dati con l’operazione che li usa.' ],
          code: `class RigaOrdine {\n    String prodotto;\n    double prezzo;\n    int quantita;\n\n    RigaOrdine(String prodotto, double prezzo, int quantita) {\n        this.prodotto = prodotto;\n        this.prezzo = prezzo;\n        this.quantita = quantita;\n    }\n\n    double subtotale() {\n        return prezzo * quantita;\n    }\n}\n\nRigaOrdine a = new RigaOrdine("Maglietta", 12.5, 2);\nRigaOrdine b = new RigaOrdine("Cappellino", 9.0, 1);\nSystem.out.println(a.subtotale() + b.subtotale());  // 34.0` },
      ],
      x: [
        mc('Che cos’è un oggetto?', ['Un’istanza concreta creata a partire da una classe', 'Un tipo primitivo', 'Un metodo statico', 'Un package'], 'La classe è lo stampo; l’oggetto, ciò che ne esce con `new`.'),
        fill(`public class Auto {\n    private String marca;\n\n    public ___(String marca) {\n        this.marca = marca;\n    }\n}`, ['Auto', 'constructor', 'void Auto', 'new'], 'Il costruttore si chiama come la classe e non ha tipo di ritorno.'),
        ord('Crea un oggetto Auto di marca Fiat', ['Auto', 'a', '=', 'new', 'Auto', '(', '"Fiat"', ')', ';'], ['create', 'make'], '`new` crea l’oggetto e chiama il costruttore con gli argomenti.'),
        mc('Dentro un metodo, che cos’è `this`?', ['Un riferimento all’oggetto corrente', 'La classe padre', 'Un metodo statico', 'Il package corrente'], '`this.marca` è l’attributo dell’oggetto; `marca` da solo sarebbe il parametro.'),
        out(`class Punto {\n    int x, y;\n    Punto(int x, int y) { this.x = x; this.y = y; }\n}\n\nPunto p = new Punto(2, 3);\nSystem.out.println(p.x + p.y);`, ['5', '23', '2', 'Errore'], 'Il costruttore salva 2 e 3 negli attributi; sono `int`, quindi si sommano: 5.'),
        out(`class C { int v = 1; }\n\nC a = new C();\nC b = a;\nb.v = 7;\nSystem.out.println(a.v);`, ['7', '1', '0', 'Errore'], '`a` e `b` puntano allo stesso oggetto: modificarlo da una si vede dall’altra.'),
        mc('Che cosa succede eseguendo questo codice?', ['Viene lanciata NullPointerException', 'Stampa null', 'Stampa una stringa vuota', 'Non compila'], 'La variabile non punta a nessun oggetto, quindi non si possono chiamare i suoi metodi. Compila, ma fallisce in esecuzione.', `Auto a = null;\nSystem.out.println(a.getMarca());`),
        out(`class Contatore {\n    int valore;\n    Contatore() { this(10); }\n    Contatore(int inizio) { valore = inizio; }\n    void aggiungi() { valore++; }\n}\n\nContatore a = new Contatore();\nContatore b = new Contatore(3);\nContatore c = a;\nc.aggiungi();\nb.aggiungi();\nSystem.out.println(a.valore + " " + b.valore);`, ['11 4', '10 4', '11 3', '10 3'], 'Il costruttore vuoto chiama `this(10)`. `c` punta allo stesso oggetto di `a`, quindi `a` arriva a 11; `b` passa da 3 a 4.'),
      ],
    },
    // ───────────── Giorno 14 ─────────────
    {
      id: 'java-encapsulation',
      t: 'Incapsulamento',
      d: 'private, getter, setter con validazione, static e final.',
      guide: [
        { h: 'Perché incapsulare', p: [
          'Se chiunque può scrivere `conto.saldo = -500;`, il tuo programma avrà conti impossibili. Incapsulare significa nascondere lo stato interno con `private` e permettere di cambiarlo solo tramite metodi che controllano le regole.',
          'Così la classe si protegge da sola: chiunque la usi, non resterà mai in uno stato non valido. E puoi cambiare come funziona dentro senza rompere chi la usa.' ] },
        { h: 'Getter e setter', p: [
          'Un getter restituisce un attributo privato (`getNome()`, o `isAttivo()` per un `boolean`). Un setter lo modifica (`setEta(int eta)`) ed è il posto perfetto per validare.',
          'Non creare setter per abitudine: se un dato non dovrebbe cambiare dopo la creazione dell’oggetto, non dargli un setter.' ],
          code: `public class Studente {\n    private String nome;\n    private int eta;\n\n    public String getNome() { return nome; }\n\n    public void setEta(int eta) {\n        if (eta < 0) {\n            throw new IllegalArgumentException("Età negativa");\n        }\n        this.eta = eta;\n    }\n}` },
        { h: 'static: della classe, non dell’oggetto', p: [
          'Un attributo `static` esiste una volta sola, nella classe, ed è condiviso da tutti gli oggetti. Serve per contatori globali o configurazione comune.',
          'Un metodo `static` si chiama con il nome della classe (`Math.max(3, 8)`) e non può usare attributi di istanza, perché non appartiene a nessun oggetto preciso.' ],
          code: `class Utente {\n    static int totale = 0;  // condiviso\n    String nome;            // uno per oggetto\n\n    Utente(String nome) {\n        this.nome = nome;\n        totale++;\n    }\n}\n\nnew Utente("Ana");\nnew Utente("Luis");\nSystem.out.println(Utente.totale);  // 2` },
        { h: 'final e oggetti immutabili', p: [
          'Un attributo `final` si assegna una volta (nella dichiarazione o nel costruttore) e non cambia più. Se tutti gli attributi sono `private final` e non ci sono setter, l’oggetto è immutabile, come `String`.',
          'Gli oggetti immutabili sono più facili da capire e sicuri tra thread. Le costanti si dichiarano `static final` e in MAIUSCOLO: `static final int MAX_TENTATIVI = 3;`.' ] },
        { h: 'Esempio reale: un conto bancario sicuro', real: true, p: [
          'Il saldo è privato e cambia solo con `versa` e `preleva`, che rifiutano importi non validi. L’IBAN è `final`: un conto non cambia numero.' ],
          code: `public class ContoBancario {\n    private final String iban;\n    private double saldo;\n\n    public ContoBancario(String iban) {\n        this.iban = iban;\n    }\n\n    public void versa(double importo) {\n        if (importo > 0) saldo += importo;\n    }\n\n    public boolean preleva(double importo) {\n        if (importo <= 0 || importo > saldo) return false;\n        saldo -= importo;\n        return true;\n    }\n\n    public double getSaldo() { return saldo; }\n}\n\nContoBancario c = new ContoBancario("IT60 3456");\nc.versa(100);\nSystem.out.println(c.preleva(150));  // false\nSystem.out.println(c.preleva(40));   // true\nSystem.out.println(c.getSaldo());    // 60.0` },
      ],
      x: [
        mc('A che cosa serve `private` su un attributo?', ['A renderlo accessibile solo dentro la sua classe', 'A impedire di creare oggetti', 'A renderlo costante', 'A condividerlo tra oggetti'], 'Da fuori ci si accede solo tramite i metodi pubblici che la classe decide di offrire.'),
        typ('Scrivi il modificatore che nasconde l’attributo fuori dalla classe', `public class Conto {\n    ___ double saldo;\n}`, 'private', '`private` limita l’accesso alla classe stessa.'),
        fill(`public String ___() {\n    return nome;\n}`, ['getNome', 'nome', 'get', 'Nome'], 'Per convenzione, i getter si chiamano `get` più il nome dell’attributo con la maiuscola.'),
        mc('Che cosa fa `final` su un attributo?', ['Impedisce di cambiarne il valore dopo l’assegnazione', 'Lo rende privato', 'Lo condivide tra oggetti', 'Lo cancella alla fine del programma'], 'Si usa per le costanti e per gli oggetti immutabili.'),
        mc('Che cosa significa che un attributo è `static`?', ['Appartiene alla classe ed è condiviso da tutte le istanze', 'Il suo valore non può cambiare', 'È visibile solo dentro la classe', 'Si cancella all’uscita dal metodo'], 'Esiste una sola volta, nella classe, e non una per oggetto.'),
        out(`class Biglietto {\n    static int emessi = 0;\n    Biglietto() { emessi++; }\n}\n\nnew Biglietto();\nnew Biglietto();\nnew Biglietto();\nSystem.out.println(Biglietto.emessi);`, ['3', '1', '0', 'Errore'], 'I tre oggetti condividono lo stesso contatore `static`, e ogni costruttore lo incrementa.'),
        mc('Perché conviene validare dentro un setter?', ['Per impedire stati non validi, come un’età negativa', 'Per rendere il codice più veloce', 'Perché Java lo richiede', 'Per poter ereditare l’attributo'], 'La classe protegge le proprie regole, chiunque la usi.'),
        out(`class Termostato {\n    private int gradi = 20;\n    private static final int MAX = 30;\n    void alza(int n) {\n        if (gradi + n <= MAX) gradi += n;\n    }\n    int getGradi() { return gradi; }\n}\n\nTermostato t = new Termostato();\nt.alza(5);\nt.alza(8);\nt.alza(5);\nSystem.out.println(t.getGradi());`, ['30', '38', '25', '33'], '20 + 5 = 25. Alzare di 8 darebbe 33 e supera il massimo, quindi si ignora. 25 + 5 = 30 è consentito.'),
      ],
    },
    // ───────────── Giorno 15 ─────────────
    {
      id: 'java-inheritance',
      t: 'Ereditarietà',
      d: 'extends, super, @Override e la classe Object.',
      guide: [
        { h: 'extends: ereditare da un’altra classe', p: [
          'Con `extends` una classe figlia eredita gli attributi e i metodi di una classe padre e può aggiungerne di propri. Così non ripeti il codice comune.',
          'L’ereditarietà esprime una relazione «è un»: un `Cane` è un `Animale`. Se la relazione è «ha un» (un’auto ha un motore), usa un attributo invece dell’ereditarietà.',
          'Java permette di ereditare da una sola classe. Per combinare comportamenti di più fonti ci sono le interfacce (giorno 16).' ],
          code: `class Animale {\n    protected String nome;\n\n    Animale(String nome) { this.nome = nome; }\n\n    String mangia() { return nome + " sta mangiando"; }\n}\n\nclass Cane extends Animale {\n    Cane(String nome) { super(nome); }\n\n    String abbaia() { return nome + ": bau!"; }\n}\n\nCane c = new Cane("Toby");\nSystem.out.println(c.mangia());  // Toby sta mangiando\nSystem.out.println(c.abbaia());  // Toby: bau!` },
        { h: 'super', p: [
          '`super(...)` chiama il costruttore del padre e deve essere la prima riga del costruttore figlio. Se il padre non ha un costruttore vuoto, sei obbligato a chiamarlo.',
          'Prima di eseguire il costruttore figlio si costruisce sempre la parte del padre. `super.metodo()` chiama la versione del padre di un metodo.' ] },
        { h: 'Sovrascrivere metodi con @Override', p: [
          'Una classe figlia può ridefinire un metodo del padre con la stessa firma: è l’override. Metti sempre `@Override` sopra: se sbagli il nome o i parametri, il compilatore ti avvisa.',
          'Senza `@Override`, un errore di battitura creerebbe in silenzio un metodo nuovo e quello del padre continuerebbe a essere eseguito.' ],
          code: `class Animale {\n    String verso() { return "..."; }\n}\n\nclass Gatto extends Animale {\n    @Override\n    String verso() { return "Miao"; }\n}\n\nSystem.out.println(new Gatto().verso());  // Miao` },
        { h: 'La classe Object', p: [
          'Tutte le classi ereditano, direttamente o indirettamente, da `Object`. Da lì vengono `toString()`, `equals()` e `hashCode()`.',
          'Il `toString()` predefinito stampa qualcosa come `Libro@1b6d3586`. Sovrascrivilo perché i tuoi oggetti si leggano bene nei log e durante il debug.' ],
          code: `class Libro {\n    String titolo = "Dune";\n\n    @Override\n    public String toString() {\n        return "Libro: " + titolo;\n    }\n}\n\nSystem.out.println(new Libro());  // Libro: Dune` },
        { h: 'Esempio reale: buste paga di impiegati e manager', real: true, p: [
          'Tutti gli impiegati ricevono lo stipendio annuo in 12 mensilità; i manager ricevono in più un bonus mensile. Il manager riusa il calcolo del padre con `super` e aggiunge il bonus.' ],
          code: `class Impiegato {\n    protected String nome;\n    protected double stipendioAnnuo;\n\n    Impiegato(String nome, double stipendioAnnuo) {\n        this.nome = nome;\n        this.stipendioAnnuo = stipendioAnnuo;\n    }\n\n    double stipendioMensile() { return stipendioAnnuo / 12; }\n}\n\nclass Manager extends Impiegato {\n    private double bonus;\n\n    Manager(String nome, double stipendioAnnuo, double bonus) {\n        super(nome, stipendioAnnuo);\n        this.bonus = bonus;\n    }\n\n    @Override\n    double stipendioMensile() { return super.stipendioMensile() + bonus; }\n}\n\nSystem.out.println(new Impiegato("Ana", 30000).stipendioMensile());     // 2500.0\nSystem.out.println(new Manager("Luis", 48000, 500).stipendioMensile()); // 4500.0` },
      ],
      x: [
        fill(`class Cane ___ Animale {\n}`, ['extends', 'implements', 'inherits', ':'], 'In Java si eredita da una classe con `extends`. I due punti sono di C++ e C#.'),
        mc('Da quante classi può ereditare direttamente una classe Java?', ['Da una sola', 'Da due', 'Da quante vuole', 'Da nessuna'], 'Java non ha ereditarietà multipla di classi; per questo ci sono le interfacce.'),
        out(`class A { String ciao() { return "A"; } }\nclass B extends A { }\n\nSystem.out.println(new B().ciao());`, ['A', 'B', 'null', 'Errore'], 'B non definisce `ciao`, quindi usa quello che eredita da A.'),
        mc('Che cosa fa `super(nome)` dentro un costruttore?', ['Chiama il costruttore della classe padre', 'Crea una copia dell’oggetto', 'Richiama lo stesso costruttore', 'Cancella l’oggetto padre'], 'Deve essere la prima istruzione del costruttore figlio.'),
        out(`class A { A() { System.out.print("A"); } }\nclass B extends A { B() { System.out.print("B"); } }\n\nnew B();`, ['AB', 'BA', 'B', 'A'], 'Prima di eseguire il costruttore figlio si costruisce la parte del padre.'),
        mc('A che cosa serve `@Override`?', ['Indica che il metodo sovrascrive uno del padre e il compilatore lo controlla', 'Crea un metodo nuovo', 'Rende il metodo statico', 'Impedisce di ereditare il metodo'], 'Se la firma non coincide con nessun metodo del padre, il codice non compila.'),
        out(`class Libro {\n    String titolo = "Dune";\n    @Override\n    public String toString() { return "Libro: " + titolo; }\n}\n\nSystem.out.println(new Libro());`, ['Libro: Dune', 'Dune', 'Libro@1b6d3586', 'null'], '`println` chiama `toString()`, che qui è sovrascritto.'),
        out(`class Veicolo {\n    String info() { return "Veicolo"; }\n    String descrivi() { return "Sono " + info(); }\n}\nclass Moto extends Veicolo {\n    @Override\n    String info() { return "Moto, " + super.info(); }\n}\n\nSystem.out.println(new Moto().descrivi());`, ['Sono Moto, Veicolo', 'Sono Veicolo', 'Sono Moto', 'Moto, Sono Veicolo'], '`descrivi` è ereditato, ma chiama `info()` dell’oggetto reale, che è una Moto. La sua versione aggiunge "Moto, " e usa `super.info()`.'),
      ],
    },
    // ───────────── Giorno 16 ─────────────
    {
      id: 'java-polymorphism',
      t: 'Polimorfismo e interfacce',
      d: 'interface, implements, classi astratte e metodi default.',
      guide: [
        { h: 'Interfacce: un contratto', p: [
          'Un’interfaccia dichiara quali metodi deve avere una classe, senza dire come funzionano. La classe la rispetta con `implements` e scrive quei metodi.',
          'Una classe eredita da una sola classe, ma può implementare più interfacce: `class Anatra implements Volante, Nuotatore`.',
          'I metodi di un’interfaccia sono pubblici, quindi implementandoli devi marcarli `public`.' ],
          code: `interface Volante {\n    void vola();\n}\n\nclass Anatra implements Volante {\n    public void vola() { System.out.println("L'anatra sbatte le ali"); }\n}\n\nclass Aereo implements Volante {\n    public void vola() { System.out.println("L'aereo decolla"); }\n}` },
        { h: 'Polimorfismo', p: [
          'Una variabile di tipo interfaccia (o di classe padre) può contenere qualsiasi oggetto che la rispetti. Chiamando un metodo si esegue la versione della classe reale dell’oggetto, non quella del tipo della variabile.',
          'Così scrivi codice generale (`for (Volante v : volanti) v.vola();`) che funziona con classi che ancora non esistono. Aggiungere un `Drone` non obbliga a toccare quel ciclo.' ],
          code: `List<Volante> volanti = List.of(new Anatra(), new Aereo());\nfor (Volante v : volanti) {\n    v.vola();\n}\n// L'anatra sbatte le ali\n// L'aereo decolla` },
        { h: 'Classi astratte', p: [
          'Una classe `abstract` non si può istanziare. Può avere metodi astratti (senza corpo) che le figlie devono scrivere e metodi normali che ereditano.',
          'Interfaccia o classe astratta? Usa un’interfaccia per descrivere una capacità («si può pagare», «si può ordinare»). Usa una classe astratta quando le figlie condividono uno stato (attributi) o un costruttore.' ],
          code: `abstract class Figura {\n    abstract double area();\n\n    String descrivi() {\n        return "Area: " + area();\n    }\n}\n\nclass Cerchio extends Figura {\n    double r;\n    Cerchio(double r) { this.r = r; }\n    double area() { return Math.PI * r * r; }\n}` },
        { h: 'Metodi default e instanceof', p: [
          'Da Java 8, un’interfaccia può portare metodi `default` con un’implementazione predefinita. Le classi li ereditano e possono sovrascriverli.',
          'Con `instanceof` controlli il tipo reale di un oggetto. Da Java 16 puoi dichiarare la variabile nello stesso controllo: `if (f instanceof Cerchio c)`.' ],
          code: `Figura f = new Cerchio(1);\nif (f instanceof Cerchio c) {\n    System.out.println("Raggio: " + c.r);  // Raggio: 1.0\n}` },
        { h: 'Esempio reale: metodi di pagamento in un negozio', real: true, p: [
          'Un negozio accetta carta e bonifico, e ogni metodo applica una commissione diversa. La cassa lavora con l’interfaccia `MetodoPagamento` e non ha bisogno di sapere quale sia quale.' ],
          code: `interface MetodoPagamento {\n    double commissione(double importo);\n\n    default double totale(double importo) {\n        return importo + commissione(importo);\n    }\n}\n\nclass Carta implements MetodoPagamento {\n    public double commissione(double importo) { return importo * 0.02; }\n}\n\nclass Bonifico implements MetodoPagamento {\n    public double commissione(double importo) { return 0.50; }\n}\n\nfor (MetodoPagamento m : List.of(new Carta(), new Bonifico())) {\n    System.out.println(m.totale(100));\n}\n// 102.0\n// 100.5` },
      ],
      x: [
        fill(`interface Volante {\n    void vola();\n}\n\nclass Uccello ___ Volante {\n    public void vola() { }\n}`, ['implements', 'extends', 'uses', 'with'], 'Le classi rispettano le interfacce con `implements`; `extends` serve per ereditare da classi.'),
        mc('Che cos’è il polimorfismo?', ['Usare oggetti di classi diverse attraverso un tipo comune', 'Avere molti costruttori', 'Copiare oggetti', 'Ereditare da più classi'], 'Lo stesso codice funziona con implementazioni diverse.'),
        out(`class Animale {\n    String verso() { return "..."; }\n}\nclass Gatto extends Animale {\n    @Override\n    String verso() { return "Miao"; }\n}\n\nAnimale a = new Gatto();\nSystem.out.println(a.verso());`, ['Miao', '...', 'null', 'Errore'], 'Anche se la variabile è `Animale`, l’oggetto è un `Gatto` e si esegue il suo metodo.'),
        fill(`___ class Figura {\n    abstract double area();\n}`, ['abstract', 'interface', 'virtual', 'static'], 'Una classe con metodi astratti deve essere `abstract`.'),
        mc('Se `Figura` è astratta, che cosa succede con `Figura f = new Figura();`?', ['Non compila: una classe astratta non si può istanziare', 'Crea una figura vuota', 'Lancia un’eccezione in esecuzione', 'Crea un oggetto della prima sottoclasse'], 'Puoi creare solo oggetti delle sue sottoclassi concrete.'),
        mc('Che cosa può avere una classe astratta che un’interfaccia non può avere?', ['Attributi di istanza e costruttori', 'Metodi pubblici', 'Costanti', 'Metodi default'], 'Le interfacce non conservano uno stato proprio di ogni oggetto.'),
        out(`interface Saluto {\n    default String ciao() { return "ciao"; }\n}\nclass S implements Saluto { }\n\nSystem.out.println(new S().ciao());`, ['ciao', 'null', 'Errore di compilazione', 'S'], 'I metodi `default` danno un’implementazione che la classe eredita senza scrivere nulla.'),
        out(`interface Forma { double area(); }\n\nclass Quadrato implements Forma {\n    double lato;\n    Quadrato(double lato) { this.lato = lato; }\n    public double area() { return lato * lato; }\n}\nclass Rettangolo implements Forma {\n    double b, h;\n    Rettangolo(double b, double h) { this.b = b; this.h = h; }\n    public double area() { return b * h; }\n}\n\ndouble totale = 0;\nfor (Forma f : List.of(new Quadrato(3), new Rettangolo(2, 5))) {\n    totale += f.area();\n}\nSystem.out.println(totale);`, ['19.0', '19', '14.0', 'Errore'], 'Ogni oggetto usa la propria `area()`: 3 × 3 = 9 e 2 × 5 = 10. Sono `double`, quindi si stampa 19.0.'),
      ],
    },
    // ───────────── Giorno 17 ─────────────
    {
      id: 'java-exceptions',
      t: 'Eccezioni',
      d: 'try, catch, finally, throw e checked contro unchecked.',
      guide: [
        { h: 'Che cos’è un’eccezione', p: [
          'Un’eccezione è un oggetto che Java lancia quando qualcosa va storto: dividere per zero, leggere un file che non esiste, trasformare "abc" in numero. Se nessuno la cattura, il programma si ferma e mostra lo stack trace.',
          'Lo stack trace non è tuo nemico: la prima riga dice il tipo di errore e il messaggio, e le successive in quale riga di quale file è successo. Leggilo dall’alto in basso.' ] },
        { h: 'try, catch e finally', p: [
          '`try` racchiude il codice che può fallire e `catch` cattura un tipo preciso di eccezione. Puoi mettere più `catch`, dal più specifico al più generale, o unire tipi con `|`.',
          '`finally` si esegue sempre, con o senza errore: è il posto per chiudere connessioni o liberare risorse. Non lasciare mai un `catch` vuoto: nasconde l’errore e poi non saprai che cosa è successo.' ],
          code: `try {\n    int n = Integer.parseInt("42a");\n    System.out.println(n);\n} catch (NumberFormatException e) {\n    System.out.println("Formato non valido: " + e.getMessage());\n} finally {\n    System.out.println("Fine");\n}\n// Formato non valido: For input string: "42a"\n// Fine` },
        { h: 'Checked e unchecked', p: [
          'Le eccezioni checked (come `IOException`) rappresentano problemi esterni prevedibili. Il compilatore ti obbliga a catturarle o a dichiararle nel metodo con `throws`.',
          'Le unchecked ereditano da `RuntimeException` (come `NullPointerException` o `IllegalArgumentException`) e di solito indicano un errore di programmazione. Non è obbligatorio catturarle: meglio evitarle.' ],
          code: `// checked: va dichiarata o catturata\nstatic String leggi(Path percorso) throws IOException {\n    return Files.readString(percorso);\n}\n\n// unchecked: indica un uso scorretto\nstatic double radice(double x) {\n    if (x < 0) throw new IllegalArgumentException("x negativo");\n    return Math.sqrt(x);\n}` },
        { h: 'throw ed eccezioni personalizzate', p: [
          '`throw new Tipo("messaggio")` lancia un’eccezione. Non confondere `throw` (lanciare, nel codice) con `throws` (avvisare, nell’intestazione del metodo).',
          'Puoi creare le tue eccezioni ereditando da `Exception` (checked) o da `RuntimeException` (unchecked). Un nome chiaro come `SaldoInsufficienteException` spiega il problema solo leggendolo.' ],
          code: `class SaldoInsufficienteException extends Exception {\n    SaldoInsufficienteException(String msg) { super(msg); }\n}\n\nstatic void preleva(double saldo, double importo) throws SaldoInsufficienteException {\n    if (importo > saldo) {\n        throw new SaldoInsufficienteException("Mancano " + (importo - saldo) + " €");\n    }\n}` },
        { h: 'try-with-resources', p: [
          'Le risorse da chiudere (file, connessioni) si aprono tra parentesi dopo `try`. Java le chiude alla fine del blocco, anche se c’è un’eccezione.',
          'Funziona con qualsiasi classe che implementi `AutoCloseable`, ed evita i `finally` lunghi e soggetti a errori.' ],
          code: `try (BufferedReader br = Files.newBufferedReader(Path.of("dati.txt"))) {\n    System.out.println(br.readLine());\n} catch (IOException e) {\n    System.out.println("Impossibile leggere: " + e.getMessage());\n}` },
        { h: 'Esempio reale: leggere l’età da un modulo', real: true, p: [
          'Quello che scrive un utente non è affidabile. Questo metodo trasforma il testo in numero, rifiuta età impossibili e non lascia che un errore faccia cadere l’applicazione.' ],
          code: `static int leggiEta(String testo) {\n    try {\n        int eta = Integer.parseInt(testo.trim());\n        if (eta < 0 || eta > 120) {\n            throw new IllegalArgumentException("Età fuori intervallo: " + eta);\n        }\n        return eta;\n    } catch (NumberFormatException e) {\n        System.out.println("Non è un numero: " + testo);\n        return -1;\n    }\n}\n\nSystem.out.println(leggiEta(" 34 "));     // 34\nSystem.out.println(leggiEta("trenta"));\n// Non è un numero: trenta\n// -1` },
      ],
      x: [
        fill(`___ {\n    int n = Integer.parseInt("abc");\n} catch (NumberFormatException e) {\n    System.out.println("Non è un numero");\n}`, ['try', 'do', 'attempt', 'check'], 'Il codice che può fallire va dentro `try`.'),
        out(`try {\n    String s = null;\n    s.length();\n} catch (NullPointerException e) {\n    System.out.println("nullo");\n}`, ['nullo', '0', 'null', 'Errore non catturato'], 'Chiamare un metodo su `null` lancia `NullPointerException`, e qui viene catturata.'),
        fill(`if (eta < 0) {\n    ___ new IllegalArgumentException("Età negativa");\n}`, ['throw', 'throws', 'raise', 'error'], '`throw` lancia un’eccezione; `throws` la dichiara nell’intestazione del metodo. `raise` è di Python.'),
        out(`try {\n    int[] a = new int[2];\n    a[5] = 1;\n    System.out.println("ok");\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("fuori");\n} finally {\n    System.out.println("fine");\n}`, ['fuori\nfine', 'ok\nfine', 'fine', 'fuori'], '`a[5]` lancia l’eccezione prima di stampare "ok". `finally` si esegue sempre.'),
        mc('Che cosa caratterizza un’eccezione checked, come IOException?', ['Il compilatore obbliga a catturarla o a dichiararla con throws', 'Java la ignora automaticamente', 'Compare solo in esecuzione, senza preavviso', 'È un errore di sintassi'], 'Se non la gestisci, il codice non compila.'),
        mc('Che cosa fa `try (var br = Files.newBufferedReader(percorso)) { ... }`?', ['Chiude la risorsa automaticamente alla fine del blocco', 'Riprova la lettura se fallisce', 'Ignora tutte le eccezioni', 'Apre il file due volte'], 'È il try-with-resources: chiude il lettore anche se c’è un errore.'),
        mc('Perché mettere `catch (Exception e)` prima di `catch (NumberFormatException e)` non compila?', ['Il secondo catch non verrebbe mai raggiunto, perché Exception cattura già tutto', 'Exception non esiste in Java', 'È ammesso un solo catch per try', 'NumberFormatException è checked'], 'I `catch` si ordinano dal più specifico al più generale.'),
        out(`static int dividi(int a, int b) {\n    try {\n        return a / b;\n    } catch (ArithmeticException e) {\n        System.out.print("errore ");\n        return 0;\n    } finally {\n        System.out.print("fine ");\n    }\n}\n\nSystem.out.println(dividi(10, 0) + dividi(9, 3));`, ['errore fine fine 3', 'errore fine 3', 'fine errore fine 3', 'errore 0 fine fine 3'], 'La prima chiamata stampa "errore " e poi "fine " e restituisce 0. La seconda stampa "fine " e restituisce 3. Alla fine si stampa 0 + 3.'),
      ],
    },
    // ───────────── Giorno 18 ─────────────
    {
      id: 'java-generics',
      t: 'Generici',
      d: 'Classi e metodi generici, l’operatore diamante e i caratteri jolly.',
      guide: [
        { h: 'Perché esistono i generici', p: [
          'Prima di Java 5 una lista conteneva `Object` e bisognava convertire ogni elemento con un cast. Se qualcuno metteva un numero in una lista di nomi, l’errore compariva in esecuzione come `ClassCastException`.',
          'Con i generici scrivi `List<String>` e il compilatore controlla i tipi: aggiungere un numero non compila nemmeno, e in lettura non serve alcun cast.' ],
          code: `List<String> nomi = new ArrayList<>();\nnomi.add("Ana");\n// nomi.add(42);           // errore di compilazione\nString primo = nomi.get(0);  // senza cast` },
        { h: 'Classi generiche', p: [
          'Una classe generica dichiara uno o più parametri di tipo tra parentesi angolari: `class Scatola<T>`. All’interno, `T` si usa come qualsiasi tipo.',
          'Per convenzione si usano lettere: `T` (tipo), `E` (elemento), `K` e `V` (chiave e valore). In `new Scatola<>("ciao")` l’operatore diamante `<>` lascia dedurre il tipo al compilatore.' ],
          code: `class Coppia<K, V> {\n    private final K chiave;\n    private final V valore;\n\n    Coppia(K chiave, V valore) {\n        this.chiave = chiave;\n        this.valore = valore;\n    }\n\n    K getChiave() { return chiave; }\n    V getValore() { return valore; }\n}\n\nCoppia<String, Integer> c = new Coppia<>("eta", 30);\nSystem.out.println(c.getChiave() + "=" + c.getValore());  // eta=30` },
        { h: 'Metodi generici', p: [
          'Anche un metodo può essere generico: dichiara `<T>` prima del tipo di ritorno e lo usa nei parametri. Il tipo si deduce dagli argomenti quando lo chiami.',
          'I generici accettano solo tipi oggetto: `List<int>` non esiste, si usa `List<Integer>`.' ],
          code: `static <T> T ultimo(List<T> lista) {\n    return lista.get(lista.size() - 1);\n}\n\nString s = ultimo(List.of("a", "b", "c"));  // "c"\nInteger n = ultimo(List.of(4, 5));          // 5` },
        { h: 'Limiti e caratteri jolly', p: [
          '`<T extends Comparable<T>>` limita `T` ai tipi confrontabili, così dentro puoi chiamare `compareTo`.',
          '`List<? extends Number>` accetta liste di `Number` o di qualsiasi sottoclasse (`Integer`, `Double`) da cui leggere. `List<? super Integer>` accetta liste in cui puoi mettere `Integer`. Regola per ricordarlo: extends per leggere, super per scrivere.' ],
          code: `static double somma(List<? extends Number> nums) {\n    double totale = 0;\n    for (Number n : nums) totale += n.doubleValue();\n    return totale;\n}\n\nSystem.out.println(somma(List.of(1, 2, 3)));    // 6.0\nSystem.out.println(somma(List.of(1.5, 2.5)));   // 4.0` },
        { h: 'Esempio reale: la risposta di un’API', real: true, p: [
          'Molte applicazioni restituiscono sempre lo stesso involucro: il dato se tutto è andato bene o un messaggio di errore. Con un generico, la stessa classe serve per utenti, ordini o qualsiasi cosa.' ],
          code: `class Risultato<T> {\n    private final T dato;\n    private final String errore;\n\n    private Risultato(T dato, String errore) {\n        this.dato = dato;\n        this.errore = errore;\n    }\n\n    static <T> Risultato<T> ok(T dato) { return new Risultato<>(dato, null); }\n    static <T> Risultato<T> fallito(String errore) { return new Risultato<>(null, errore); }\n\n    boolean eOk() { return errore == null; }\n    T getDato() { return dato; }\n    String getErrore() { return errore; }\n}\n\nRisultato<Integer> r1 = Risultato.ok(42);\nRisultato<Integer> r2 = Risultato.fallito("Utente non trovato");\nSystem.out.println(r1.eOk() + " " + r1.getDato());    // true 42\nSystem.out.println(r2.eOk() + " " + r2.getErrore());  // false Utente non trovato` },
      ],
      x: [
        mc('Che vantaggio portano i generici?', ['Controllare i tipi in compilazione ed evitare i cast', 'Scrivere più in fretta senza tipi', 'Permettere i tipi primitivi nelle liste', 'Nessuno, sono facoltativi'], 'Gli errori di tipo compaiono in compilazione e non in esecuzione.'),
        mc('Che cosa significa `<>` in `new ArrayList<>()`?', ['Il compilatore deduce il tipo generico (operatore diamante)', 'La lista è vuota', 'La lista non ha tipo', 'È un errore'], 'Il tipo si deduce dalla dichiarazione della variabile.'),
        typ('Dichiara il parametro di tipo della classe', `class Scatola<___> {\n    private T contenuto;\n}`, 'T', 'Il parametro di tipo si dichiara tra parentesi angolari e poi si usa dentro la classe.'),
        out(`class Scatola<T> {\n    T valore;\n    Scatola(T v) { valore = v; }\n}\n\nScatola<String> s = new Scatola<>("ciao");\nSystem.out.println(s.valore.length());`, ['4', 'ciao', 'T', 'Errore'], '`T` è `String`, quindi `valore.length()` funziona senza cast.'),
        fill(`class Coppia<___, V> {\n    K chiave;\n    V valore;\n}`, ['K', 'T[]', 'int', '?'], 'Ogni parametro di tipo usato dentro si dichiara tra le parentesi angolari.'),
        fill(`static <T> T primo(List<___> lista) {\n    return lista.get(0);\n}`, ['T', '?', 'Object', 'E'], 'Il metodo dichiara `<T>` e lo usa nei parametri e nel ritorno.'),
        mc('Quali liste accetta un parametro `List<? extends Number>`?', ['Liste di Number o di una sottoclasse, come Integer o Double', 'Solo List<Number>', 'Qualsiasi lista', 'Liste di String'], '`? extends` è un carattere jolly limitato superiormente.'),
        out(`static <T extends Comparable<T>> T maggiore(List<T> lista) {\n    T max = lista.get(0);\n    for (T x : lista) {\n        if (x.compareTo(max) > 0) max = x;\n    }\n    return max;\n}\n\nSystem.out.println(maggiore(List.of(3, 9, 4)) + maggiore(List.of("pera", "uva", "kiwi")));`, ['9uva', '3kiwi', '9pera', '13'], 'Il numero maggiore è 9 e il testo maggiore in ordine alfabetico è "uva". Un `Integer` più uno `String` si concatena: "9uva".'),
      ],
    },
    // ───────────── Giorno 19 ─────────────
    {
      id: 'java-datetime',
      t: 'Data e ora',
      d: 'java.time: LocalDate, plusDays, ChronoUnit e formati.',
      guide: [
        { h: 'Il package java.time', p: [
          'Da Java 8 le date si gestiscono con `java.time`. `LocalDate` è una data (anno, mese, giorno), `LocalTime` un’ora e `LocalDateTime` entrambe insieme.',
          'Le vecchie classi `Date` e `Calendar` sono confuse (i mesi partivano da 0) e non conviene usarle nel codice nuovo.',
          'Crea le date con `LocalDate.of(2025, 3, 14)` o quella di oggi con `LocalDate.now()`. Stampate escono in formato ISO: `2025-03-14`.' ],
          code: `LocalDate data = LocalDate.of(2025, 3, 14);\nLocalTime ora = LocalTime.of(9, 30);\nLocalDateTime appuntamento = LocalDateTime.of(2025, 3, 14, 9, 30);\nSystem.out.println(data);          // 2025-03-14\nSystem.out.println(appuntamento);  // 2025-03-14T09:30\nSystem.out.println(data.getDayOfWeek());  // FRIDAY` },
        { h: 'Sommare e sottrarre: date immutabili', p: [
          '`plusDays()`, `plusMonths()`, `minusWeeks()` e simili restituiscono una data nuova; l’originale non cambia. Se non salvi il risultato, si perde (come con gli String).',
          'java.time gestisce i cambi di mese e gli anni bisestili: il 31 gennaio più un mese dà l’ultimo giorno di febbraio.' ],
          code: `LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusDays(1));    // 2024-02-01\nSystem.out.println(d.plusMonths(1));  // 2024-02-29\nd.plusYears(1);                       // risultato perso\nSystem.out.println(d);                // 2024-01-31` },
        { h: 'Differenze tra date', p: [
          '`ChronoUnit.DAYS.between(a, b)` dà i giorni da `a` a `b` (negativo se `b` è precedente). Esistono anche `MONTHS`, `YEARS`, `HOURS`...',
          '`Period.between(a, b)` dà la differenza in anni, mesi e giorni, utile per calcolare l’età. Per ore e minuti si usa `Duration`.' ],
          code: `LocalDate nascita = LocalDate.of(1995, 6, 20);\nLocalDate oggi = LocalDate.of(2025, 3, 14);\nSystem.out.println(Period.between(nascita, oggi).getYears());  // 29\nSystem.out.println(ChronoUnit.DAYS.between(\n    LocalDate.of(2025, 1, 1), LocalDate.of(2025, 2, 1)));      // 31` },
        { h: 'Formattare e leggere date', p: [
          '`DateTimeFormatter.ofPattern("dd/MM/yyyy")` definisce un formato: `dd` giorno, `MM` mese (`mm` sarebbero i minuti), `yyyy` anno, `HH` ora.',
          '`data.format(f)` trasforma la data in testo e `LocalDate.parse(testo, f)` fa il contrario.' ],
          code: `DateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nLocalDate d = LocalDate.parse("25/12/2025", f);\nSystem.out.println(d);            // 2025-12-25\nSystem.out.println(d.format(f));  // 25/12/2025` },
        { h: 'Esempio reale: la scadenza di una fattura', real: true, p: [
          'Una fattura si paga a 30 giorni dall’emissione. Il programma calcola la data di scadenza e quanti giorni di ritardo ha il pagamento.' ],
          code: `LocalDate emissione = LocalDate.of(2025, 3, 14);\nLocalDate scadenza = emissione.plusDays(30);\nLocalDate oggi = LocalDate.of(2025, 4, 20);\nlong ritardo = ChronoUnit.DAYS.between(scadenza, oggi);\n\nDateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nSystem.out.println("Scade il " + scadenza.format(f));  // Scade il 13/04/2025\nSystem.out.println("Giorni di ritardo: " + ritardo);   // Giorni di ritardo: 7` },
      ],
      x: [
        mc('Quale classe rappresenta solo una data, senza ora?', ['LocalDate', 'LocalTime', 'LocalDateTime', 'Calendar'], '`LocalDate` conserva anno, mese e giorno.'),
        out(`LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusDays(1));`, ['2024-02-01', '2024-01-32', '2024-01-01', 'Errore'], 'java.time gestisce automaticamente il cambio di mese.'),
        out(`LocalDate d = LocalDate.of(2024, 5, 9);\nSystem.out.println(d.getMonthValue());`, ['5', '9', 'MAY', '2024'], '`getMonthValue()` dà il numero del mese; `getMonth()` darebbe MAY.'),
        fill(`DateTimeFormatter f = DateTimeFormatter.___("dd/MM/yyyy");`, ['ofPattern', 'format', 'pattern', 'of'], '`ofPattern` crea un formattatore a partire da uno schema.'),
        out(`LocalDate d = LocalDate.of(2024, 3, 1);\nd.plusDays(5);\nSystem.out.println(d);`, ['2024-03-01', '2024-03-06', '2024-03-05', 'Errore'], 'Le date sono immutabili: `plusDays` restituisce un’altra data che qui non si salva.'),
        out(`long n = ChronoUnit.DAYS.between(\n    LocalDate.of(2024, 1, 1),\n    LocalDate.of(2024, 1, 11));\nSystem.out.println(n);`, ['10', '11', '1', 'Errore'], 'Dall’1 all’11 gennaio ci sono 10 giorni: il primo conta e l’ultimo no.'),
        out(`LocalDate d = LocalDate.of(2024, 1, 31);\nSystem.out.println(d.plusMonths(1));`, ['2024-02-29', '2024-02-31', '2024-03-02', '2024-03-01'], 'Il 31 febbraio non esiste, quindi si adatta all’ultimo giorno del mese. Il 2024 è bisestile: 29.'),
        out(`LocalDate inizio = LocalDate.of(2025, 12, 30);\nLocalDate fine = inizio.plusDays(5);\nDateTimeFormatter f = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nSystem.out.println(fine.format(f) + " " + fine.getYear());`, ['04/01/2026 2026', '35/12/2025 2025', '04/01/2026 2025', '01/04/2026 2026'], 'Cinque giorni dopo il 30 dicembre è il 4 gennaio dell’anno successivo. Lo schema mette prima il giorno.'),
      ],
    },
    // ───────────── Giorno 20 ─────────────
    {
      id: 'java-regex',
      t: 'Espressioni regolari',
      d: 'Pattern, Matcher, matches, replaceAll e split.',
      guide: [
        { h: 'Che cos’è un’espressione regolare', p: [
          'Un’espressione regolare (regex) descrive uno schema di testo: «cinque cifre», «qualcosa con una chiocciola in mezzo», «una parola che inizia con la maiuscola». Serve a validare, cercare e sostituire.',
          '`testo.matches(regex)` restituisce `true` solo se tutto il testo corrisponde allo schema, non se lo contiene da qualche parte.' ],
          code: `System.out.println("00184".matches("\\\\d{5}"));     // true\nSystem.out.println("001".matches("\\\\d{5}"));       // false\nSystem.out.println("CAP 00184".matches("\\\\d{5}")); // false: "CAP " è di troppo` },
        { h: 'La sintassi di base', p: [
          '`.` è qualsiasi carattere, `\\d` una cifra, `\\w` una lettera, cifra o trattino basso e `\\s` uno spazio. `[abc]` è uno di quei caratteri e `[a-z]` un intervallo.',
          'I quantificatori dicono quante volte: `+` una o più, `*` zero o più, `?` zero o una e `{2,4}` da due a quattro.',
          'In uno String Java la barra rovesciata è un carattere di escape, quindi si scrive doppia: la regex `\\d+` si scrive `"\\\\d+"`.' ] },
        { h: 'Pattern e Matcher: cercare corrispondenze', p: [
          '`Pattern.compile(regex)` prepara lo schema e `pattern.matcher(testo)` crea un `Matcher` che lo percorre. Ogni `find()` avanza alla corrispondenza successiva e `group()` la restituisce.',
          'Le parentesi creano gruppi che puoi leggere separatamente con `group(1)`, `group(2)`... Compila il `Pattern` una volta e riutilizzalo se lo userai spesso.' ],
          code: `Pattern p = Pattern.compile("(\\\\d{2}):(\\\\d{2})");\nMatcher m = p.matcher("Apre alle 09:30 e chiude alle 21:00");\nwhile (m.find()) {\n    System.out.println(m.group() + " -> ora " + m.group(1));\n}\n// 09:30 -> ora 09\n// 21:00 -> ora 21` },
        { h: 'replaceAll e split', p: [
          '`replaceAll(regex, sostituto)` sostituisce ogni corrispondenza e `split(regex)` taglia il testo secondo lo schema.',
          'Attenzione: `split(".")` non taglia ai punti, perché `.` significa «qualsiasi carattere». Per un punto letterale scrivi `split("\\\\.")`.' ],
          code: `String tel = "333-12 34-56";\nSystem.out.println(tel.replaceAll("[^0-9]", ""));  // 333123456\n\nString[] parti = "uno, due,tre".split(",\\\\s*");\nSystem.out.println(parti.length);                  // 3` },
        { h: 'Esempio reale: validare ed estrarre dati da un testo', real: true, p: [
          'Un modulo controlla che il CAP abbia 5 cifre, e un lettore di scontrini somma gli importi che compaiono nel testo nel formato «1,50 €».' ],
          code: `String cap = "00184";\nSystem.out.println(cap.matches("\\\\d{5}"));   // true\n\nPattern prezzo = Pattern.compile("(\\\\d+),(\\\\d{2}) €");\nMatcher m = prezzo.matcher("Caffè 1,50 € e toast 2,25 €");\ndouble totale = 0;\nwhile (m.find()) {\n    totale += Double.parseDouble(m.group(1) + "." + m.group(2));\n}\nSystem.out.println(totale);  // 3.75` },
      ],
      x: [
        mc('Quale classe compila un’espressione regolare in Java?', ['Pattern', 'Regex', 'RegExp', 'Matcher'], '`Pattern.compile` crea lo schema; il `Matcher` si ottiene dopo con `pattern.matcher(testo)`.'),
        out(`System.out.println("12345".matches("\\\\d+"));`, ['true', 'false', '12345', 'Errore'], '`\\d+` richiede che tutto il testo sia fatto di una o più cifre, ed è così.'),
        out(`System.out.println("Java".matches("[A-Z].*"));`, ['true', 'false', 'J', 'Errore'], 'Inizia con una maiuscola e `.*` accetta il resto.'),
        mc('Perché in Java l’espressione `\\d+` si scrive `"\\\\d+"`?', ['Perché la barra rovesciata è il carattere di escape degli String e va raddoppiata', 'Perché le regex di Java usano due barre', 'Perché così si cercano due cifre', 'È facoltativo, le due forme sono uguali'], 'Lo String `"\\\\d+"` contiene il testo `\\d+`, che è ciò che riceve il motore delle regex.'),
        out(`System.out.println("a1b22c".replaceAll("\\\\d+", "-"));`, ['a-b-c', 'a-b--c', 'abc', 'a1b22c'], 'Ogni gruppo di cifre consecutive si sostituisce con un solo trattino.'),
        out(`String[] p = "uno, due,tre".split(",\\\\s*");\nSystem.out.println(p.length);`, ['3', '2', '4', '1'], 'Si taglia a ogni virgola seguita da zero o più spazi.'),
        fill(`Matcher m = Pattern.compile("[a-z]+").matcher("Ciao Mondo");\nwhile (m.___()) {\n    System.out.println(m.group());\n}`, ['find', 'next', 'matches', 'search'], '`find()` avanza alla corrispondenza successiva e `group()` la restituisce.'),
        out(`Matcher m = Pattern.compile("(\\\\w+)@(\\\\w+)\\\\.com")\n    .matcher("ana@gmail.com, luis@yahoo.com");\nString r = "";\nwhile (m.find()) {\n    r += m.group(2).toUpperCase() + " ";\n}\nSystem.out.println(r.trim());`, ['GMAIL YAHOO', 'ANA LUIS', 'gmail yahoo', 'GMAIL'], 'Ci sono due corrispondenze e il gruppo 2 è il dominio, senza ".com". Si mettono in maiuscolo e `trim` toglie lo spazio finale.'),
      ],
    },
    // ───────────── Giorno 21 ─────────────
    {
      id: 'java-files',
      t: 'File',
      d: 'java.nio: Path, Files, leggere, scrivere e percorrere file grandi.',
      guide: [
        { h: 'Percorsi con Path', p: [
          'Da Java 7 i file si gestiscono con il package `java.nio.file`. Un percorso si rappresenta con `Path` e si crea con `Path.of(...)`, che unisce le parti con il separatore giusto del sistema (`/` o `\\`).',
          '`getFileName()` dà il nome del file, `getParent()` la cartella che lo contiene e `toAbsolutePath()` il percorso completo. Creare un `Path` non crea alcun file: descrive solo dove sarebbe.' ],
          code: `Path percorso = Path.of("dati", "2025", "vendite.csv");\nSystem.out.println(percorso);                // dati/2025/vendite.csv\nSystem.out.println(percorso.getFileName());  // vendite.csv\nSystem.out.println(percorso.getParent());    // dati/2025` },
        { h: 'Leggere e scrivere testo con Files', p: [
          'La classe `Files` ha metodi statici per quasi tutto: `writeString` scrive un testo, `readString` lo legge tutto e `readAllLines` restituisce una `List<String>` con ogni riga.',
          'Per impostazione predefinita `writeString` sovrascrive il file. Per aggiungere in fondo passa `StandardOpenOption.APPEND`. Quasi tutti i metodi lanciano `IOException`, un’eccezione checked da catturare o dichiarare con `throws`.' ],
          code: `Path note = Path.of("note.txt");\nFiles.writeString(note, "Comprare il pane\\n");\nFiles.writeString(note, "Chiamare il medico\\n", StandardOpenOption.APPEND);\n\nList<String> righe = Files.readAllLines(note);\nSystem.out.println(righe.size());  // 2\nSystem.out.println(righe.get(1));  // Chiamare il medico` },
        { h: 'File grandi: riga per riga', p: [
          '`readAllLines` carica tutto il file in memoria. Con un log di diversi gigabyte è un problema: usa `Files.lines(percorso)`, che restituisce uno `Stream<String>` e legge le righe man mano che servono.',
          'Quello stream tiene il file aperto, quindi va sempre in un try-with-resources perché si chiuda alla fine.' ],
          code: `try (Stream<String> righe = Files.lines(Path.of("server.log"))) {\n    long errori = righe.filter(r -> r.contains("ERROR")).count();\n    System.out.println("Errori: " + errori);\n} catch (IOException e) {\n    System.out.println("Impossibile leggere il log: " + e.getMessage());\n}` },
        { h: 'Cartelle e controlli', p: [
          '`Files.exists(percorso)` dice se qualcosa esiste, `Files.isDirectory(percorso)` se è una cartella e `Files.size(percorso)` quanti byte occupa.',
          '`Files.createDirectories(percorso)` crea la cartella e tutte quelle intermedie che mancano, senza fallire se esistono già. `Files.copy`, `Files.move` e `Files.delete` fanno quello che dice il nome.' ],
          code: `Path cartella = Path.of("report", "2025", "marzo");\nFiles.createDirectories(cartella);\nPath report = cartella.resolve("riepilogo.txt");\nFiles.writeString(report, "Vendite: 1200 €");\nSystem.out.println(Files.exists(report));  // true\nSystem.out.println(Files.size(report));    // byte occupati` },
        { h: 'Esempio reale: sommare le spese di un CSV', real: true, p: [
          'La tua banca ti permette di scaricare i movimenti in un CSV con l’intestazione `voce,importo`. Il programma salta l’intestazione, divide ogni riga alla virgola e somma gli importi.' ],
          code: `Path csv = Path.of("spese.csv");\nFiles.writeString(csv, "voce,importo\\naffitto,650\\nluce,48.30\\nspesa,212.45\\n");\n\ndouble totale = 0;\nList<String> righe = Files.readAllLines(csv);\nfor (String riga : righe.subList(1, righe.size())) {\n    String[] parti = riga.split(",");\n    totale += Double.parseDouble(parti[1]);\n}\nSystem.out.printf("Spese del mese: %.2f €%n", totale);  // Spese del mese: 910,75 € (secondo la lingua del sistema)` },
      ],
      x: [
        mc('Quale tipo rappresenta un percorso di file in `java.nio.file`?', ['Path', 'Route', 'FilePath', 'Directory'], '`Path.of("a", "b.txt")` crea un percorso unendo le parti con il separatore del sistema.'),
        fill(`String testo = Files.___(Path.of("note.txt"));  // tutto il contenuto`, ['readString', 'read', 'readAll', 'open'], '`readString` restituisce tutto il contenuto del file come `String`.'),
        mc('Quale eccezione checked lanciano quasi tutti i metodi di `Files`?', ['IOException', 'FileException', 'NullPointerException', 'RuntimeException'], 'Essendo checked, va catturata con `try/catch` o dichiarata con `throws IOException`.'),
        out(`Path p = Path.of("documenti", "2025", "report.pdf");\nSystem.out.println(p.getFileName());`, ['report.pdf', 'documenti', '2025/report.pdf', 'report'], '`getFileName()` restituisce l’ultimo elemento del percorso, con l’estensione.'),
        mc('Che cosa fa `Files.writeString(percorso, testo, StandardOpenOption.APPEND)`?', ['Aggiunge il testo in fondo senza cancellare ciò che c’era', 'Sovrascrive il file', 'Lancia un errore se il file esiste', 'Crea una copia del file'], 'Senza `APPEND`, `writeString` sostituisce il contenuto precedente.'),
        typ('Crea la cartella e tutte quelle intermedie che mancano', `Files.___(Path.of("report", "2025", "marzo"));`, 'createDirectories', '`createDirectories` crea tutto il percorso e non fallisce se esiste. `createDirectory`, al singolare, crea solo l’ultima.'),
        ord('Leggi tutte le righe del file in una lista', ['List<String>', 'righe', '=', 'Files', '.', 'readAllLines', '(', 'percorso', ')', ';'], ['readLines', 'File'], '`Files.readAllLines(percorso)` restituisce una `List<String>` con una voce per riga.'),
        out(`Path p = Path.of("t.txt");\nFiles.writeString(p, "uno\\ndue\\n");\nFiles.writeString(p, "tre\\n", StandardOpenOption.APPEND);\nList<String> righe = Files.readAllLines(p);\nSystem.out.println(righe.size() + " " + righe.get(righe.size() - 1));`, ['3 tre', '2 tre', '1 tre', '3 uno'], 'La prima scrittura lascia due righe e la seconda aggiunge "tre" in fondo. `readAllLines` toglie gli a capo.'),
      ],
    },
    // ───────────── Giorno 22 ─────────────
    {
      id: 'java-lambdas',
      t: 'Lambda',
      d: 'Interfacce funzionali, Function, Predicate, Consumer, Supplier e riferimenti a metodi.',
      guide: [
        { h: 'Che cos’è una lambda', p: [
          'Una lambda è una funzione senza nome che puoi salvare in una variabile o passare come argomento. Si scrive `(parametri) -> espressione`: `x -> x * 2` riceve un numero e ne restituisce il doppio.',
          'Prima di Java 8 bisognava scrivere un’intera classe anonima per la stessa cosa. Con le lambda, ordinare una lista per lunghezza sta in una riga.' ],
          code: `List<String> nomi = new ArrayList<>(List.of("Eva", "Alessandro", "Luis"));\n\n// Prima: classe anonima\nnomi.sort(new Comparator<String>() {\n    public int compare(String a, String b) { return a.length() - b.length(); }\n});\n\n// Ora: lambda\nnomi.sort((a, b) -> a.length() - b.length());\nSystem.out.println(nomi);  // [Eva, Luis, Alessandro]` },
        { h: 'Interfacce funzionali', p: [
          'Una lambda implementa sempre un’interfaccia funzionale: un’interfaccia con un solo metodo astratto. `Comparator`, `Runnable` e quelle di `java.util.function` lo sono.',
          'Le più usate: `Function<T, R>` riceve un T e restituisce un R (`apply`), `Predicate<T>` restituisce un boolean (`test`), `Consumer<T>` riceve e non restituisce nulla (`accept`) e `Supplier<T>` non riceve nulla e restituisce un T (`get`).' ],
          code: `Function<String, Integer> lunghezza = s -> s.length();\nPredicate<Integer> ePari = n -> n % 2 == 0;\nConsumer<String> saluta = s -> System.out.println("Ciao, " + s);\nSupplier<Double> caso = () -> Math.random();\n\nSystem.out.println(lunghezza.apply("Java"));  // 4\nSystem.out.println(ePari.test(7));            // false\nsaluta.accept("Ana");                         // Ciao, Ana` },
        { h: 'Riferimenti a metodi', p: [
          'Quando la lambda chiama solo un metodo che esiste già, puoi scrivere un riferimento con `::`. `s -> s.toUpperCase()` diventa `String::toUpperCase`.',
          'Ci sono quattro forme: metodo statico (`Integer::parseInt`), metodo di un oggetto preciso (`System.out::println`), metodo di istanza del tipo (`String::length`) e costruttore (`ArrayList::new`).' ],
          code: `List<String> numeri = List.of("3", "10", "7");\nnumeri.stream()\n      .map(Integer::parseInt)\n      .forEach(System.out::println);\n// 3\n// 10\n// 7` },
        { h: 'Variabili catturate e composizione', p: [
          'Una lambda può usare variabili locali esterne, ma solo se sono effettivamente final: non si modificano dopo l’assegnazione. Per questo `totale += x` dentro una lambda non compila.',
          'Le funzioni si concatenano: `f.andThen(g)` applica prima `f` e poi `g`; `f.compose(g)` applica prima `g`. I predicati si combinano con `and`, `or` e `negate`.' ],
          code: `Predicate<String> lungo = s -> s.length() > 5;\nPredicate<String> iniziaConA = s -> s.startsWith("A");\nPredicate<String> entrambi = lungo.and(iniziaConA);\n\nSystem.out.println(entrambi.test("Alessandro"));  // true\nSystem.out.println(entrambi.test("Ana"));         // false` },
        { h: 'Esempio reale: ordinare un catalogo', real: true, p: [
          'Un negozio mostra i prodotti ordinati per prezzo e, a parità, per nome. `Comparator.comparing` con i riferimenti a metodi lo dice quasi come una frase.' ],
          code: `record Prodotto(String nome, double prezzo) {}\n\nList<Prodotto> catalogo = new ArrayList<>(List.of(\n    new Prodotto("Tastiera", 25.0),\n    new Prodotto("Tappetino", 9.9),\n    new Prodotto("Mouse", 25.0)));\n\ncatalogo.sort(Comparator.comparing(Prodotto::prezzo)\n                        .thenComparing(Prodotto::nome));\ncatalogo.forEach(p -> System.out.println(p.nome() + " " + p.prezzo()));\n// Tappetino 9.9\n// Mouse 25.0\n// Tastiera 25.0` },
      ],
      x: [
        mc('Che cos’è un’interfaccia funzionale?', ['Un’interfaccia con un solo metodo astratto', 'Un’interfaccia senza metodi', 'Una classe con metodi statici', 'Qualsiasi interfaccia che erediti da Function'], 'Per questo una lambda può implementarla: c’è un solo metodo da riempire.'),
        out(`Function<Integer, Integer> doppio = x -> x * 2;\nSystem.out.println(doppio.apply(7));`, ['14', '7', 'x * 2', 'Errore'], '`apply` esegue la funzione con l’argomento 7.'),
        out(`Predicate<String> lungo = s -> s.length() > 4;\nSystem.out.println(lungo.test("Java") + " " + lungo.test("Python"));`, ['false true', 'true true', 'true false', 'false false'], '"Java" ha 4 lettere (non più di 4) e "Python" ne ha 6.'),
        fill(`List.of("a", "b").forEach(System.out___println);`, ['::', '.', '->', ':'], '`System.out::println` è un riferimento al metodo `println` dell’oggetto `System.out`.'),
        mc('Quale interfaccia non riceve nulla e restituisce un valore?', ['Supplier<T>', 'Consumer<T>', 'Predicate<T>', 'Function<T, R>'], '`Supplier` ha il metodo `get()`. `Consumer` fa esattamente il contrario: riceve e non restituisce.'),
        out(`BiFunction<Integer, Integer, Integer> potenza = (b, e) -> (int) Math.pow(b, e);\nSystem.out.println(potenza.apply(2, 5));`, ['32', '10', '25', '7'], '`BiFunction` riceve due argomenti: 2 elevato alla 5 fa 32.'),
        mc('Perché `int totale = 0; lista.forEach(x -> totale += x);` non compila?', ['Le lambda possono usare solo variabili locali effettivamente final', 'forEach non accetta lambda', 'totale dovrebbe essere long', 'Manca un return'], 'Per sommare usa uno stream: `lista.stream().mapToInt(Integer::intValue).sum()`.'),
        out(`Function<Integer, Integer> piu3 = x -> x + 3;\nFunction<Integer, Integer> doppio = x -> x * 2;\nSystem.out.println(piu3.andThen(doppio).apply(4) + " " + piu3.compose(doppio).apply(4));`, ['14 11', '11 14', '14 14', '25'], '`andThen` somma prima e raddoppia dopo: (4 + 3) * 2 = 14. `compose` raddoppia prima: 4 * 2 + 3 = 11.'),
      ],
    },
    // ───────────── Giorno 23 ─────────────
    {
      id: 'java-streams',
      t: 'Stream',
      d: 'filter, map, sorted, reduce, collect, raggruppamenti e valutazione pigra.',
      guide: [
        { h: 'Che cos’è uno stream', p: [
          'Uno stream è una catena di operazioni su una sequenza di dati: una sorgente (`lista.stream()`), zero o più operazioni intermedie (`filter`, `map`...) e un’operazione terminale che produce il risultato (`toList`, `count`...).',
          'Uno stream non modifica la collezione originale e si può percorrere una sola volta. Descrive che cosa vuoi ottenere invece di come percorrere i dati passo per passo.' ],
          code: `List<Integer> numeri = List.of(5, 12, 8, 21, 3);\nList<Integer> risultato = numeri.stream()\n    .filter(n -> n > 4)    // 5, 12, 8, 21\n    .map(n -> n * 10)      // 50, 120, 80, 210\n    .sorted()\n    .toList();\nSystem.out.println(risultato);  // [50, 80, 120, 210]\nSystem.out.println(numeri);     // [5, 12, 8, 21, 3]` },
        { h: 'Operazioni intermedie', p: [
          '`filter` tiene gli elementi che soddisfano un predicato, `map` trasforma ciascuno, `sorted` ordina, `distinct` toglie i ripetuti, `limit(n)` tiene i primi n e `skip(n)` salta i primi n.',
          'Sono pigre: non fanno nulla finché non arriva l’operazione terminale. Grazie a questo, `limit` può tagliare uno stream enorme senza elaborarlo tutto.' ],
          code: `List<String> top = Stream.of("pera", "kiwi", "pera", "uva", "melone", "kiwi")\n    .distinct()\n    .sorted()\n    .limit(3)\n    .toList();\nSystem.out.println(top);  // [kiwi, melone, pera]` },
        { h: 'Operazioni terminali', p: [
          '`count()` conta, `toList()` crea una lista, `forEach` esegue qualcosa per ogni elemento e `anyMatch`/`allMatch` controllano condizioni.',
          'Per i numeri usa `mapToInt` e otterrai `sum()`, `average()` e `max()`. `reduce` combina tutti gli elementi in uno con un’operazione scelta da te.' ],
          code: `List<Integer> voti = List.of(7, 4, 9, 6);\nint somma = voti.stream().mapToInt(Integer::intValue).sum();\ndouble media = voti.stream().mapToInt(Integer::intValue).average().orElse(0);\nint prodotto = voti.stream().reduce(1, (a, b) -> a * b);\nboolean tuttiPromossi = voti.stream().allMatch(n -> n >= 5);\nSystem.out.println(somma + " " + media + " " + prodotto + " " + tuttiPromossi);\n// 26 6.5 1512 false` },
        { h: 'Collectors: unire e raggruppare', p: [
          '`collect` con la classe `Collectors` costruisce risultati più ricchi: `joining(", ")` unisce testi, `groupingBy` raggruppa in una `Map` e `counting()` o `summingInt` riassumono ogni gruppo.',
          'Se vuoi la mappa ordinata per chiave, chiedi un `TreeMap` in `groupingBy`.' ],
          code: `List<String> citta = List.of("Milano", "Monza", "Bari", "Modena", "Bologna");\nMap<Character, List<String>> perIniziale = citta.stream()\n    .collect(Collectors.groupingBy(c -> c.charAt(0), TreeMap::new, Collectors.toList()));\nSystem.out.println(perIniziale);\n// {B=[Bari, Bologna], M=[Milano, Monza, Modena]}\n\nSystem.out.println(String.join(" | ", citta.subList(0, 2)));  // Milano | Monza` },
        { h: 'Esempio reale: il riepilogo degli ordini di un negozio', real: true, p: [
          'Dalla lista degli ordini del giorno, il negozio vuole sapere quanto ha speso ogni cliente e chi è il cliente migliore. Con gli stream sono due espressioni.' ],
          code: `record Ordine(String cliente, double importo) {}\n\nList<Ordine> ordini = List.of(\n    new Ordine("Ana", 30.0), new Ordine("Luis", 12.5),\n    new Ordine("Ana", 18.0), new Ordine("Eva", 45.0));\n\nMap<String, Double> perCliente = ordini.stream()\n    .collect(Collectors.groupingBy(Ordine::cliente, TreeMap::new,\n             Collectors.summingDouble(Ordine::importo)));\nSystem.out.println(perCliente);  // {Ana=48.0, Eva=45.0, Luis=12.5}\n\nString migliore = perCliente.entrySet().stream()\n    .max(Map.Entry.comparingByValue())\n    .map(Map.Entry::getKey)\n    .orElse("nessuno");\nSystem.out.println("Cliente migliore: " + migliore);  // Cliente migliore: Ana` },
      ],
      x: [
        mc('Che cosa fa `filter` in uno stream?', ['Tiene gli elementi che soddisfano una condizione', 'Trasforma ogni elemento', 'Ordina gli elementi', 'Somma gli elementi'], 'Per trasformare si usa `map`.'),
        out(`List<Integer> r = List.of(1, 2, 3, 4).stream()\n    .map(n -> n * n)\n    .toList();\nSystem.out.println(r);`, ['[1, 4, 9, 16]', '[1, 2, 3, 4]', '[2, 4, 6, 8]', '30'], '`map` eleva al quadrato ogni numero e `toList` raccoglie il risultato.'),
        out(`long n = Stream.of("ana", "luis", "eva", "leo")\n    .filter(s -> s.length() == 3)\n    .count();\nSystem.out.println(n);`, ['3', '4', '1', '2'], 'Solo "luis" ha più di 3 lettere.'),
        fill(`int totale = List.of(5, 10, 15).stream()\n    .mapToInt(Integer::intValue)\n    .___();`, ['sum', 'total', 'add', 'reduce'], '`mapToInt` dà un `IntStream`, che ha `sum()`. Anche `reduce` funzionerebbe, ma ha bisogno di argomenti.'),
        out(`String s = Stream.of("a", "b", "c").collect(Collectors.joining("-"));\nSystem.out.println(s);`, ['a-b-c', 'abc', '[a, b, c]', 'a-b-c-'], '`joining` mette il separatore solo tra gli elementi, non alla fine.'),
        mc('Che cosa succede a uno stream che ha solo operazioni intermedie, senza terminale?', ['Non si esegue nulla: le intermedie sono pigre', 'Si esegue comunque', 'Lancia un’eccezione', 'Restituisce null'], 'Il lavoro inizia quando arriva l’operazione terminale.'),
        out(`System.out.println(Stream.of(3, 1, 3, 2, 1).distinct().sorted().toList());`, ['[1, 2, 3]', '[3, 1, 2]', '[1, 1, 2, 3, 3]', '[3, 2, 1]'], '`distinct` lascia 3, 1 e 2 e `sorted` li mette in ordine.'),
        out(`List<String> parole = List.of("sole", "mare", "luna", "cielo", "re");\nMap<Integer, Long> perLunghezza = parole.stream()\n    .collect(Collectors.groupingBy(String::length, TreeMap::new, Collectors.counting()));\nSystem.out.println(perLunghezza);`, ['{2=1, 4=3, 5=1}', '{2=1, 4=2, 5=2}', '{sole=4, mare=4, luna=4, cielo=5, re=2}', '[2, 4, 5]'], '"re" ha 2 lettere, "sole", "mare" e "luna" 4 e "cielo" 5. `counting()` conta quanti ce ne sono in ogni gruppo e il `TreeMap` ordina le chiavi.'),
      ],
    },
    // ───────────── Giorno 24 ─────────────
    {
      id: 'java-optional',
      t: 'Optional e record',
      d: 'Valori che possono mancare senza null e classi di dati immutabili in una riga.',
      guide: [
        { h: 'Il problema di null', p: [
          'Un metodo che cerca qualcosa può non trovarlo. Se restituisce `null` e chi lo chiama non controlla, il programma fallisce con `NullPointerException`, l’errore più comune di Java.',
          '`Optional<T>` è una scatola che contiene un valore o è vuota. Il tipo di ritorno avvisa già che il risultato può mancare, e il compilatore ti obbliga a decidere cosa fare.' ],
          code: `Optional<String> pieno = Optional.of("Ana");\nOptional<String> vuoto = Optional.empty();\nOptional<String> forse = Optional.ofNullable(null);  // vuoto\n\nSystem.out.println(pieno.isPresent());  // true\nSystem.out.println(forse.isEmpty());    // true` },
        { h: 'Usare un Optional senza get()', p: [
          '`orElse(valore)` dà il contenuto o un valore predefinito, `orElseGet(() -> ...)` calcola il predefinito solo se serve e `orElseThrow()` lancia un’eccezione se è vuoto.',
          '`map` trasforma il contenuto se esiste e `ifPresent` esegue qualcosa solo se c’è un valore. Evita `get()` senza controllare: è tornare al problema di null. Optional si usa come tipo di ritorno, non per attributi né parametri.' ],
          code: `Optional<String> email = Optional.of("  ANA@MAIL.COM ");\nString pulita = email.map(String::trim)\n                     .map(String::toLowerCase)\n                     .orElse("senza email");\nSystem.out.println(pulita);  // ana@mail.com\n\nOptional.<String>empty().ifPresent(System.out::println);  // non stampa nulla` },
        { h: 'Record: classi di dati in una riga', p: [
          'Un `record` dichiara una classe il cui unico scopo è contenere dati. Con `record Punto(int x, int y) {}` Java genera il costruttore, i metodi di accesso `x()` e `y()`, `equals`, `hashCode` e `toString`.',
          'I campi sono `final`: un record è immutabile. Per «cambiare» un valore si crea un altro record.' ],
          code: `record Punto(int x, int y) {}\n\nPunto p = new Punto(3, 4);\nSystem.out.println(p);                          // Punto[x=3, y=4]\nSystem.out.println(p.x() + p.y());              // 7\nSystem.out.println(p.equals(new Punto(3, 4)));  // true` },
        { h: 'Validare e aggiungere metodi', p: [
          'Il costruttore compatto (senza parentesi) permette di validare i dati prima di salvarli: se qualcosa non torna, lancia un’eccezione e l’oggetto non esiste mai.',
          'Un record può avere metodi propri e metodi statici, e implementare interfacce. Non può ereditare da un’altra classe né avere attributi di istanza in più.' ],
          code: `record Prezzo(double importo, String valuta) {\n    Prezzo {\n        if (importo < 0) throw new IllegalArgumentException("Importo negativo");\n    }\n\n    Prezzo conIva() { return new Prezzo(importo * 1.21, valuta); }\n}\n\nSystem.out.println(new Prezzo(100, "EUR").conIva());  // Prezzo[importo=121.0, valuta=EUR]` },
        { h: 'Esempio reale: cercare un utente per e-mail', real: true, p: [
          'Un repository di utenti restituisce `Optional<Utente>`: chi chiama vede nella firma che l’utente può non esistere e decide cosa rispondere, senza rischio di `NullPointerException`.' ],
          code: `record Utente(String email, String nome) {}\n\nclass RepositoryUtenti {\n    private final List<Utente> utenti = List.of(\n        new Utente("ana@mail.com", "Ana"),\n        new Utente("luis@mail.com", "Luis"));\n\n    Optional<Utente> cercaPerEmail(String email) {\n        return utenti.stream().filter(u -> u.email().equals(email)).findFirst();\n    }\n}\n\nRepositoryUtenti repo = new RepositoryUtenti();\nSystem.out.println(repo.cercaPerEmail("ana@mail.com").map(Utente::nome).orElse("Ospite"));  // Ana\nSystem.out.println(repo.cercaPerEmail("eva@mail.com").map(Utente::nome).orElse("Ospite"));  // Ospite` },
      ],
      x: [
        mc('A che cosa serve `Optional`?', ['A rappresentare un valore che può mancare senza usare null', 'A rendere facoltativi i parametri di un metodo', 'A catturare eccezioni', 'A creare liste vuote'], 'Il tipo di ritorno chiarisce che il risultato può non esistere.'),
        out(`Optional<String> o = Optional.empty();\nSystem.out.println(o.orElse("anonimo"));`, ['anonimo', 'null', 'Optional.empty', 'Errore'], 'È vuoto, quindi `orElse` restituisce il valore predefinito.'),
        out(`Optional<String> o = Optional.of("java");\nSystem.out.println(o.map(String::toUpperCase).orElse("-"));`, ['JAVA', 'java', '-', 'Optional[JAVA]'], '`map` trasforma il contenuto e `orElse` lo tira fuori dalla scatola.'),
        fill(`___ Punto(int x, int y) {}`, ['record', 'class', 'struct', 'data'], '`record` genera costruttore, metodi di accesso, `equals`, `hashCode` e `toString`.'),
        out(`record Punto(int x, int y) {}\nPunto p = new Punto(3, 4);\nSystem.out.println(p);`, ['Punto[x=3, y=4]', 'Punto(3, 4)', 'Punto@1b6d3586', '{x=3, y=4}'], 'Il `toString` di un record mostra il nome e ogni campo tra parentesi quadre.'),
        out(`record Punto(int x, int y) {}\nSystem.out.println(new Punto(1, 2).equals(new Punto(1, 2)));`, ['true', 'false', 'Errore', 'null'], 'I record si confrontano per contenuto: due punti con gli stessi valori sono uguali.'),
        mc('Come si legge il campo `x` di un record `Punto p`?', ['p.x()', 'p.getX()', 'p.x', 'p.get("x")'], 'I metodi di accesso di un record si chiamano come il campo, senza il prefisso get.'),
        out(`record Prodotto(String nome, double prezzo) {\n    Prodotto {\n        if (prezzo < 0) throw new IllegalArgumentException("prezzo negativo");\n    }\n}\nList<Prodotto> lista = List.of(new Prodotto("pane", 1.2), new Prodotto("formaggio", 4.5));\nOptional<Prodotto> caro = lista.stream().filter(p -> p.prezzo() > 5).findFirst();\nSystem.out.println(caro.map(Prodotto::nome).orElse("nessuno") + " " + lista.get(1).prezzo());`, ['nessuno 4.5', 'formaggio 4.5', 'null 4.5', 'nessuno 1.2'], 'Nessun prodotto costa più di 5, quindi `findFirst` dà un Optional vuoto e si usa "nessuno". Il secondo prodotto costa 4.5.'),
      ],
    },
    // ───────────── Giorno 25 ─────────────
    {
      id: 'java-enums',
      t: 'Enum e switch moderno',
      d: 'enum con attributi e metodi, values, ordinal e switch con frecce e yield.',
      guide: [
        { h: 'Che cos’è un enum', p: [
          'Un `enum` è un tipo con un insieme fisso di valori: i giorni della settimana, gli stati di un ordine, i semi di un mazzo di carte. Il compilatore impedisce di usare un valore che non è nella lista.',
          '`values()` restituisce tutti i valori, `name()` il nome come testo, `ordinal()` la posizione (da 0) e `valueOf("TESTO")` trasforma un testo nel valore dell’enum.' ],
          code: `enum Giorno { LUNEDI, MARTEDI, MERCOLEDI, GIOVEDI, VENERDI, SABATO, DOMENICA }\n\nGiorno oggi = Giorno.VENERDI;\nSystem.out.println(oggi);                    // VENERDI\nSystem.out.println(oggi.ordinal());          // 4\nSystem.out.println(Giorno.values().length);  // 7\nSystem.out.println(Giorno.valueOf("LUNEDI")); // LUNEDI` },
        { h: 'Enum con attributi e metodi', p: [
          'Ogni valore di un enum è un oggetto, quindi può avere attributi, un costruttore (sempre privato) e metodi. È ideale per dati fissi legati a ciascuna opzione.',
          'Confronta gli enum con `==`: ogni valore esiste una sola volta.' ],
          code: `enum Piano {\n    BASE(5.99, 1), FAMIGLIA(13.99, 4), PREMIUM(17.99, 6);\n\n    private final double prezzo;\n    private final int schermi;\n\n    Piano(double prezzo, int schermi) {\n        this.prezzo = prezzo;\n        this.schermi = schermi;\n    }\n\n    double prezzoPerSchermo() { return prezzo / schermi; }\n}\n\nSystem.out.printf("%.2f%n", Piano.FAMIGLIA.prezzoPerSchermo());  // 3,50 (secondo la lingua del sistema)` },
        { h: 'switch con le frecce', p: [
          'Da Java 14, `case X -> ...` esegue solo quel ramo: non c’è «caduta» nel caso successivo e non serve `break`. Uno stesso `case` accetta più valori separati da virgole.',
          'Lo switch può anche essere un’espressione che restituisce un valore. Se un ramo ha bisogno di più righe, apri un blocco e restituisci il valore con `yield`. Con gli enum, il compilatore avvisa se manca un caso.' ],
          code: `Giorno g = Giorno.SABATO;\nString tipo = switch (g) {\n    case SABATO, DOMENICA -> "fine settimana";\n    case VENERDI -> {\n        System.out.println("Quasi!");\n        yield "feriale";\n    }\n    default -> "feriale";\n};\nSystem.out.println(tipo);  // fine settimana` },
        { h: 'Lo switch classico e la sua trappola', p: [
          'Nello switch classico con i due punti, se un `case` non termina con `break`, l’esecuzione continua nel successivo (fall-through). È una fonte classica di errori.',
          'Nel codice nuovo usa le frecce. Da Java 21, inoltre, `switch` accetta schemi di tipo: `case Integer i -> ...`.' ],
          code: `Object valore = 42;\nString descrizione = switch (valore) {\n    case Integer i when i > 10 -> "intero grande: " + i;\n    case Integer i -> "intero: " + i;\n    case String s -> "testo di " + s.length() + " lettere";\n    default -> "altro";\n};\nSystem.out.println(descrizione);  // intero grande: 42` },
        { h: 'Esempio reale: gli stati di un ordine', real: true, p: [
          'Un negozio online controlla in che stato si trova ogni ordine. L’enum definisce gli stati possibili e un metodo decide il successivo, così nessuno può saltare passaggi.' ],
          code: `enum Stato {\n    IN_ATTESA, PAGATO, SPEDITO, CONSEGNATO;\n\n    Stato successivo() {\n        return switch (this) {\n            case IN_ATTESA -> PAGATO;\n            case PAGATO -> SPEDITO;\n            case SPEDITO, CONSEGNATO -> CONSEGNATO;\n        };\n    }\n}\n\nStato s = Stato.IN_ATTESA;\nfor (int i = 0; i < 3; i++) {\n    s = s.successivo();\n    System.out.println(s);\n}\n// PAGATO\n// SPEDITO\n// CONSEGNATO` },
      ],
      x: [
        mc('Che cos’è un enum?', ['Un tipo con un insieme fisso di valori', 'Una lista che può crescere', 'Un tipo di numero', 'Un’interfaccia'], 'Il compilatore ammette solo i valori dichiarati.'),
        out(`enum Colore { ROSSO, VERDE, BLU }\nSystem.out.println(Colore.BLU.ordinal());`, ['2', '3', '1', 'BLU'], '`ordinal()` parte da 0: ROSSO è 0, VERDE 1 e BLU 2.'),
        out(`enum Colore { ROSSO, VERDE, BLU }\nSystem.out.println(Colore.values().length + " " + Colore.valueOf("VERDE"));`, ['3 VERDE', '2 VERDE', '3 1', 'Errore'], '`values()` ha 3 elementi e `valueOf` trasforma il testo nel valore dell’enum, che si stampa con il suo nome.'),
        fill(`String tipo = switch (giorno) {\n    case SABATO, DOMENICA ___ "fine settimana";\n    default -> "feriale";\n};`, ['->', ':', '=>', '='], 'Lo switch moderno usa le frecce `->`. `=>` è di JavaScript.'),
        out(`int mese = 2;\nint giorni = switch (mese) {\n    case 2 -> 28;\n    case 4, 6, 9, 11 -> 30;\n    default -> 31;\n};\nSystem.out.println(giorni);`, ['28', '30', '31', 'Errore'], 'Il mese 2 entra nel primo ramo, e con le frecce non c’è caduta nei successivi.'),
        mc('Che cosa distingue lo switch con le frecce da quello classico con i due punti?', ['Non c’è caduta nel case successivo, quindi non serve break', 'Funziona solo con i numeri', 'È più lento', 'Richiede break in ogni case'], 'Ogni ramo si esegue da solo, senza proseguire nel successivo.'),
        typ('Restituisci il valore da un blocco dentro uno switch espressione', `String r = switch (n) {\n    case 3 -> {\n        System.out.println("tre");\n        ___ "dispari";\n    }\n    default -> "altro";\n};`, 'yield', 'Dentro un blocco `{ }` di uno switch espressione il valore si restituisce con `yield`, non con `return`.'),
        out(`int n = 2;\nString r = "";\nswitch (n) {\n    case 1: r += "uno ";\n    case 2: r += "due ";\n    case 3: r += "tre ";\n        break;\n    default: r += "altro";\n}\nSystem.out.println(r.trim());`, ['due tre', 'due', 'due tre altro', 'uno due tre'], 'È lo switch classico: entra nel `case 2` e, senza `break`, prosegue nel `case 3` fino al `break`. Non arriva a `default`.'),
      ],
    },
    // ───────────── Giorno 26 ─────────────
    {
      id: 'java-concurrency',
      t: 'Concorrenza',
      d: 'Thread, race condition, synchronized, AtomicInteger ed ExecutorService.',
      guide: [
        { h: 'I thread', p: [
          'Un thread è una linea di esecuzione. Un programma Java parte con il thread `main`, ma può lanciarne altri per fare più cose insieme: scaricare file mentre l’interfaccia continua a rispondere, servire molti clienti...',
          'Si crea un `Thread` con una lambda e si avvia con `start()`. Attenzione: chiamare `run()` esegue il codice nel thread attuale, senza crearne uno. `join()` aspetta che il thread finisca.' ],
          code: `Thread t = new Thread(() -> {\n    for (int i = 1; i <= 3; i++) System.out.println("Scarico la parte " + i);\n});\nt.start();          // parte in parallelo\nt.join();           // aspetta che finisca\nSystem.out.println("Download completato");` },
        { h: 'Race condition', p: [
          'Quando due thread modificano lo stesso dato insieme, il risultato dipende da come si intrecciano. `contatore++` sembra un’operazione, ma sono tre: leggere, sommare e scrivere, e un altro thread può infilarsi in mezzo.',
          'Il risultato è un errore intermittente: a volte va bene e a volte no, il che lo rende molto difficile da correggere.' ],
          code: `int[] contatore = {0};\nRunnable somma = () -> { for (int i = 0; i < 100_000; i++) contatore[0]++; };\nThread a = new Thread(somma), b = new Thread(somma);\na.start(); b.start();\na.join(); b.join();\nSystem.out.println(contatore[0]);  // quasi mai 200000` },
        { h: 'synchronized e classi atomiche', p: [
          '`synchronized` marca un metodo o un blocco che un solo thread alla volta può eseguire sullo stesso oggetto. Gli altri aspettano il loro turno.',
          'Per i contatori è più semplice `AtomicInteger`: `incrementAndGet()` somma in modo sicuro senza lock espliciti. Per le collezioni condivise esistono `ConcurrentHashMap` e simili.' ],
          code: `AtomicInteger contatore = new AtomicInteger();\nRunnable somma = () -> { for (int i = 0; i < 100_000; i++) contatore.incrementAndGet(); };\nThread a = new Thread(somma), b = new Thread(somma);\na.start(); b.start();\na.join(); b.join();\nSystem.out.println(contatore.get());  // 200000, sempre` },
        { h: 'ExecutorService: gruppi di thread', p: [
          'Creare thread a mano per ogni compito è costoso. Un `ExecutorService` mantiene un gruppo (pool) di thread e distribuisce i compiti che gli invii con `submit`.',
          '`submit` restituisce un `Future`: il suo metodo `get()` aspetta che il compito finisca e ne restituisce il risultato. Alla fine chiama `shutdown()`. Da Java 21, `Executors.newVirtualThreadPerTaskExecutor()` usa i thread virtuali, leggerissimi, ideali per migliaia di compiti che aspettano la rete.' ],
          code: `ExecutorService pool = Executors.newFixedThreadPool(2);\nFuture<Integer> f = pool.submit(() -> {\n    Thread.sleep(500);   // simula un calcolo lento\n    return 6 * 7;\n});\nSystem.out.println("Sto calcolando...");\nSystem.out.println(f.get());  // 42\npool.shutdown();` },
        { h: 'Esempio reale: interrogare più servizi insieme', real: true, p: [
          'Un sito di viaggi chiede il prezzo a tre compagnie aeree. Una dopo l’altra ci mette la somma dei tempi; in parallelo, solo quanto la più lenta.' ],
          code: `static int chiediPrezzo(String compagnia) throws InterruptedException {\n    Thread.sleep(1000);                 // simula la chiamata di rete\n    return 80 + compagnia.length() * 5;\n}\n\nList<String> compagnie = List.of("ITA", "Vueling", "Ryanair");\ntry (ExecutorService pool = Executors.newVirtualThreadPerTaskExecutor()) {\n    List<Future<Integer>> prezzi = new ArrayList<>();\n    for (String c : compagnie) prezzi.add(pool.submit(() -> chiediPrezzo(c)));\n\n    int migliore = Integer.MAX_VALUE;\n    for (Future<Integer> p : prezzi) migliore = Math.min(migliore, p.get());\n    System.out.println("Prezzo migliore: " + migliore + " €");  // in 1 secondo, non in 3\n}` },
      ],
      x: [
        mc('Quale metodo avvia un nuovo thread?', ['start()', 'run()', 'begin()', 'execute()'], '`run()` esegue il codice nel thread attuale; solo `start()` ne crea uno nuovo.'),
        mc('Che cos’è una race condition?', ['Due thread modificano un dato insieme e il risultato dipende dall’ordine', 'Un thread più veloce di un altro', 'Un ciclo infinito', 'Un errore di compilazione'], 'Per questo `contatore++` da più thread può perdere somme.'),
        fill(`AtomicInteger contatore = new AtomicInteger();\ncontatore.___();  // somma 1 in modo sicuro`, ['incrementAndGet', '++', 'add', 'increment'], '`incrementAndGet` somma 1 e restituisce il nuovo valore in modo atomico.'),
        out(`Thread t = new Thread(() -> System.out.println("filo"));\nt.start();\nt.join();\nSystem.out.println("main");`, ['filo\nmain', 'main\nfilo', 'main', 'filo'], '`join()` fa aspettare `main` finché il thread non termina, quindi "filo" esce sempre per primo.'),
        mc('A che cosa serve `synchronized`?', ['A far sì che un solo thread alla volta esegua quel metodo o blocco', 'A rendere il codice più veloce', 'A creare un nuovo thread', 'A sincronizzare l’orologio di sistema'], 'Gli altri thread aspettano che il primo esca.'),
        ord('Crea un pool di 4 thread', ['ExecutorService', 'pool', '=', 'Executors', '.', 'newFixedThreadPool', '(', '4', ')', ';'], ['new', 'Thread'], 'I pool si creano con i metodi di fabbrica di `Executors`.'),
        mc('Che cosa fa `future.get()`?', ['Aspetta che il compito finisca e ne restituisce il risultato', 'Annulla il compito', 'Avvia il compito', 'Restituisce sempre null'], 'Se il compito ha lanciato un’eccezione, `get()` la rilancia avvolta in una `ExecutionException`.'),
        out(`ExecutorService pool = Executors.newFixedThreadPool(3);\nList<Future<Integer>> futuri = new ArrayList<>();\nfor (int i = 1; i <= 3; i++) {\n    int n = i;\n    futuri.add(pool.submit(() -> n * n));\n}\nint totale = 0;\nfor (Future<Integer> f : futuri) totale += f.get();\npool.shutdown();\nSystem.out.println(totale);`, ['14', '6', '36', '9'], 'I compiti calcolano 1, 4 e 9 in parallelo, ma `get()` aspetta ciascuno: 1 + 4 + 9 = 14. `int n = i` serve perché la lambda può usare solo variabili effettivamente final.'),
      ],
    },
    // ───────────── Giorno 27 ─────────────
    {
      id: 'java-build',
      t: 'Maven e Gradle',
      d: 'Strumenti di build: struttura del progetto, dipendenze, test e pacchettizzazione.',
      guide: [
        { h: 'Perché uno strumento di build', p: [
          'Un progetto reale ha decine di classi, librerie esterne, test e un file finale da consegnare. Compilare tutto questo con `javac` a mano non è praticabile.',
          'Maven e Gradle scaricano le dipendenze, compilano, eseguono i test e impacchettano il risultato (di solito un `.jar`) con un solo comando. In più impongono una struttura di cartelle standard che ogni sviluppatore riconosce.' ],
          code: `mio-progetto/\n├── pom.xml                (o build.gradle.kts)\n└── src/\n    ├── main/java/          codice dell'applicazione\n    ├── main/resources/     configurazione, template...\n    └── test/java/          test` },
        { h: 'Maven e il pom.xml', p: [
          'Maven si configura in `pom.xml`. Ogni progetto e ogni libreria si identificano con tre coordinate: `groupId` (organizzazione), `artifactId` (nome) e `version`.',
          'I comandi seguono un ciclo di vita: `mvn compile` compila, `mvn test` esegue anche i test e `mvn package` genera il `.jar` nella cartella `target`.' ],
          code: `<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.miazienda</groupId>\n  <artifactId>negozio</artifactId>\n  <version>1.0.0</version>\n\n  <dependencies>\n    <dependency>\n      <groupId>com.google.code.gson</groupId>\n      <artifactId>gson</artifactId>\n      <version>2.11.0</version>\n    </dependency>\n  </dependencies>\n</project>` },
        { h: 'Gradle', p: [
          'Gradle fa lo stesso con uno script in Kotlin (`build.gradle.kts`) o Groovy, più corto dell’XML. È lo standard su Android.',
          '`implementation` aggiunge una dipendenza per il codice e `testImplementation` una usata solo dai test. Il wrapper `./gradlew` scarica e usa la versione di Gradle fissata nel progetto, così tutto il team compila allo stesso modo.' ],
          code: `plugins {\n    java\n    application\n}\n\nrepositories { mavenCentral() }\n\ndependencies {\n    implementation("com.google.code.gson:gson:2.11.0")\n    testImplementation("org.junit.jupiter:junit-jupiter:5.11.0")\n}\n\napplication { mainClass = "com.miazienda.negozio.App" }\n\n// ./gradlew build   -> compila, testa e impacchetta\n// ./gradlew run     -> esegue l'applicazione` },
        { h: 'Repository e versioni', p: [
          'Le librerie si scaricano da Maven Central, il grande repository pubblico di Java, e si conservano in una cache locale per non scaricarle ogni volta.',
          'Fissa versioni esatte: così il progetto compila oggi come fra un anno. Molte librerie seguono il versionamento semantico: un cambio nel primo numero (da 2.x a 3.x) può rompere il tuo codice.' ] },
        { h: 'Esempio reale: un test con JUnit', real: true, p: [
          'Con JUnit aggiunto come dipendenza di test, questo test controlla che il calcolo dell’IVA sia corretto. `mvn test` o `./gradlew test` lo eseguono insieme a tutti gli altri prima di impacchettare.' ],
          code: `// src/main/java/com/miazienda/negozio/Prezzi.java\npublic class Prezzi {\n    public static double conIva(double base) {\n        return Math.round(base * 1.21 * 100) / 100.0;\n    }\n}\n\n// src/test/java/com/miazienda/negozio/PrezziTest.java\nimport org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\nclass PrezziTest {\n    @Test\n    void aggiungeIva() {\n        assertEquals(121.0, Prezzi.conIva(100));\n    }\n}` },
      ],
      x: [
        mc('Quale file configura un progetto Maven?', ['pom.xml', 'build.gradle', 'package.json', 'maven.yml'], '`package.json` è di npm (JavaScript).'),
        mc('Dove va il codice dell’applicazione nella struttura standard?', ['src/main/java', 'src/java', 'main/', 'java/src'], 'I test vanno in `src/test/java`.'),
        fill(`<dependency>\n  <groupId>com.google.code.gson</groupId>\n  <___>gson</artifactId>\n  <version>2.11.0</version>\n</dependency>`, ['artifactId', 'name', 'packageId', 'module'], 'Una dipendenza si identifica con groupId, artifactId e version.'),
        ord('Pulisci il progetto e genera il .jar con Maven', ['mvn', 'clean', 'package'], ['npm', 'gradle'], '`clean` cancella la cartella `target` e `package` compila, testa e impacchetta.'),
        mc('Che cosa significa `testImplementation` in Gradle?', ['La dipendenza è disponibile solo per i test', 'Si scarica solo in produzione', 'Controlla che la dipendenza funzioni', 'Esegue i test automaticamente'], 'Così le librerie di test non finiscono dentro il `.jar` finale.'),
        mc('A che cosa serve `./gradlew`?', ['Esegue Gradle con la versione fissata nel progetto, senza installarlo a parte', 'Cancella il progetto', 'Installa Java', 'Crea un repository Git'], 'È il wrapper: tutto il team usa la stessa versione di Gradle.'),
        typ('Aggiungi Gson come dipendenza del codice', `dependencies {\n    ___("com.google.code.gson:gson:2.11.0")\n}`, 'implementation', '`implementation` è per il codice dell’applicazione; `testImplementation`, solo per i test.'),
        mc('Una collega clona il tuo progetto Maven, compila a mano con `javac` e ottiene "package com.google.gson does not exist". Qual è la causa più probabile?', ['javac non legge il pom.xml né scarica le dipendenze: deve usare mvn compile', 'Gson non esiste su Maven Central', 'Deve riavviare il computer', 'Deve cancellare il pom.xml'], 'Maven scarica le dipendenze dichiarate e le mette nel classpath quando compila; `javac` da solo non ne sa nulla.'),
      ],
    },
    // ───────────── Giorno 28 ─────────────
    {
      id: 'java-jdbc',
      t: 'JDBC e database',
      d: 'Connessioni, PreparedStatement, ResultSet, SQL injection e transazioni.',
      guide: [
        { h: 'Che cos’è JDBC', p: [
          'JDBC è l’API standard di Java per parlare con i database relazionali (PostgreSQL, MySQL, SQLite...). Ogni database fornisce un driver, che si aggiunge come dipendenza con Maven o Gradle.',
          'La connessione si apre con `DriverManager.getConnection(url, utente, password)`. L’URL indica il tipo di database, il server e il suo nome. Apri sempre la connessione in un try-with-resources perché si chiuda da sola.' ],
          code: `String url = "jdbc:postgresql://localhost:5432/negozio";\ntry (Connection con = DriverManager.getConnection(url, "app", System.getenv("DB_PASSWORD"))) {\n    System.out.println("Connesso: " + con.getMetaData().getDatabaseProductName());\n} catch (SQLException e) {\n    System.out.println("Errore di connessione: " + e.getMessage());\n}` },
        { h: 'Interrogare con PreparedStatement', p: [
          'Un `PreparedStatement` è una query con segnaposto `?` che si riempiono con `setString`, `setInt`... I segnaposto si numerano da 1.',
          '`executeQuery()` restituisce un `ResultSet`, un cursore che parte prima della prima riga: ogni `next()` avanza di una riga e restituisce `false` quando non ce ne sono più. I valori si leggono con `getString("colonna")`, `getInt`...' ],
          code: `String sql = "SELECT nome, prezzo FROM prodotti WHERE prezzo < ? ORDER BY prezzo";\ntry (PreparedStatement ps = con.prepareStatement(sql)) {\n    ps.setDouble(1, 10.0);\n    try (ResultSet rs = ps.executeQuery()) {\n        while (rs.next()) {\n            System.out.println(rs.getString("nome") + ": " + rs.getDouble("prezzo"));\n        }\n    }\n}` },
        { h: 'Modificare dati e SQL injection', p: [
          '`executeUpdate()` esegue INSERT, UPDATE o DELETE e restituisce quante righe ha cambiato.',
          'Non costruire mai una query concatenando testo scritto dall’utente. Un nome come `x\' OR \'1\'=\'1` cambierebbe il significato della query: è la SQL injection. Con `?` il driver invia i dati a parte e non possono diventare codice.' ],
          code: `// SBAGLIATO: vulnerabile alla SQL injection\n// String sql = "DELETE FROM utenti WHERE email = '" + email + "'";\n\n// GIUSTO\ntry (PreparedStatement ps = con.prepareStatement("UPDATE prodotti SET prezzo = prezzo * 1.05 WHERE categoria = ?")) {\n    ps.setString(1, "bevande");\n    int righe = ps.executeUpdate();\n    System.out.println(righe + " prodotti aggiornati");\n}` },
        { h: 'Transazioni', p: [
          'Per impostazione predefinita ogni istruzione si conferma da sola (auto-commit). Quando più operazioni devono avvenire tutte o nessuna, disattivalo con `setAutoCommit(false)`, conferma alla fine con `commit()` e, se qualcosa fallisce, annulla con `rollback()`.',
          'Nelle applicazioni grandi si usano spesso JPA/Hibernate o Spring Data, che generano l’SQL per te, ma sotto usano comunque JDBC.' ] },
        { h: 'Esempio reale: un bonifico bancario', real: true, p: [
          'Togliere soldi da un conto e metterli in un altro deve avvenire per intero o per niente. Se il secondo UPDATE fallisce, il `rollback` restituisce i soldi al primo conto.' ],
          code: `static void bonifico(Connection con, int origine, int destinazione, double importo) throws SQLException {\n    con.setAutoCommit(false);\n    try (PreparedStatement preleva = con.prepareStatement("UPDATE conti SET saldo = saldo - ? WHERE id = ? AND saldo >= ?");\n         PreparedStatement accredita = con.prepareStatement("UPDATE conti SET saldo = saldo + ? WHERE id = ?")) {\n        preleva.setDouble(1, importo); preleva.setInt(2, origine); preleva.setDouble(3, importo);\n        if (preleva.executeUpdate() == 0) throw new SQLException("Saldo insufficiente");\n        accredita.setDouble(1, importo); accredita.setInt(2, destinazione);\n        accredita.executeUpdate();\n        con.commit();\n    } catch (SQLException e) {\n        con.rollback();\n        throw e;\n    } finally {\n        con.setAutoCommit(true);\n    }\n}` },
      ],
      x: [
        mc('Che cos’è JDBC?', ['L’API standard di Java per parlare con i database relazionali', 'Un database', 'Un framework web', 'Un linguaggio di query'], 'Ogni database fornisce il suo driver JDBC.'),
        fill(`PreparedStatement ps = con.prepareStatement(\n    "SELECT * FROM utenti WHERE email = ___");\nps.setString(1, email);`, ['?', '$email', ':email', '%s'], 'In JDBC i segnaposto si indicano con `?` e si riempiono con i metodi `set...`.'),
        mc('Perché usare `PreparedStatement` invece di concatenare testo nella query?', ['Evita la SQL injection inviando i dati separati dalla query', 'È obbligatorio in MySQL', 'Rende la query asincrona', 'Per nessun motivo particolare'], 'I dati non vengono mai interpretati come SQL.'),
        fill(`try (ResultSet rs = ps.executeQuery()) {\n    while (rs.___()) {\n        System.out.println(rs.getString("nome"));\n    }\n}`, ['next', 'hasNext', 'read', 'fetch'], '`next()` avanza alla riga successiva e restituisce `false` quando non ne restano.'),
        mc('Che cosa restituisce `executeUpdate()`?', ['Il numero di righe interessate', 'Un ResultSet', 'true o false', 'Niente'], 'Serve per INSERT, UPDATE e DELETE.'),
        ord('Riempi il primo segnaposto della query con l’e-mail', ['ps', '.', 'setString', '(', '1', ',', 'email', ')', ';'], ['setText', '0'], 'I segnaposto si numerano da 1, non da 0.'),
        mc('Che cosa fa `con.rollback()`?', ['Annulla le modifiche della transazione in corso', 'Conferma le modifiche', 'Chiude la connessione', 'Ripete l’ultima query'], 'Si usa nel `catch` quando un’operazione della transazione fallisce.'),
        mc('Se `nome` vale `x\' OR \'1\'=\'1`, che cosa succede eseguendo questa query?', ['Restituisce tutti gli utenti: è una SQL injection', 'Lancia sempre SQLException', 'Non restituisce niente', 'Cerca un utente con quel nome letterale'], 'La condizione diventa `nome = \'x\' OR \'1\'=\'1\'`, vera per tutte le righe. Con `PreparedStatement` e `?` non succederebbe.', `String sql = "SELECT * FROM utenti WHERE nome = '" + nome + "'";\nResultSet rs = con.createStatement().executeQuery(sql);`),
      ],
    },
    // ───────────── Giorno 29 ─────────────
    {
      id: 'java-spring',
      t: 'API REST con Spring Boot',
      d: '@RestController, mapping, @PathVariable, @RequestBody, ResponseEntity e livelli.',
      guide: [
        { h: 'Che cos’è Spring Boot', p: [
          'Spring è il framework più usato per le applicazioni Java lato server, e Spring Boot configura quasi tutto per te: porta un server web integrato, così la tua applicazione parte con un semplice `main`.',
          'Un nuovo progetto si genera su start.spring.io scegliendo la dipendenza «Spring Web». Si esegue con `./mvnw spring-boot:run` o `./gradlew bootRun` e resta in ascolto su http://localhost:8080.' ],
          code: `@SpringBootApplication\npublic class NegozioApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(NegozioApplication.class, args);\n    }\n}` },
        { h: 'Controller e rotte', p: [
          '`@RestController` marca una classe che risponde alle richieste HTTP. Ogni metodo si associa a una rotta con `@GetMapping`, `@PostMapping`, `@PutMapping` o `@DeleteMapping`.',
          'Ciò che restituisce il metodo si converte automaticamente in JSON (con la libreria Jackson), usando i getter o i componenti del record.' ],
          code: `record Saluto(String messaggio, int lunghezza) {}\n\n@RestController\npublic class SalutoController {\n    @GetMapping("/saluto")\n    public Saluto saluto(@RequestParam(defaultValue = "mondo") String nome) {\n        String m = "Ciao, " + nome;\n        return new Saluto(m, m.length());\n    }\n}\n// GET /saluto?nome=Ana  ->  {"messaggio":"Ciao, Ana","lunghezza":9}` },
        { h: 'Parametri, corpo e codici di stato', p: [
          '`@PathVariable` legge una parte della rotta (`/compiti/{id}`), `@RequestParam` un parametro dell’URL (`?q=pane`) e `@RequestBody` trasforma il JSON del corpo della richiesta in un oggetto Java.',
          'Per scegliere il codice di stato restituisci un `ResponseEntity`: `ResponseEntity.ok(x)` dà 200, `ResponseEntity.status(HttpStatus.CREATED).body(x)` dà 201 e `ResponseEntity.notFound().build()` dà 404.' ] },
        { h: 'Livelli e iniezione delle dipendenze', p: [
          'Un’applicazione ordinata separa le responsabilità: il controller parla HTTP, il servizio (`@Service`) contiene la logica di business e il repository accede ai dati. Con Spring Data JPA, un repository è solo un’interfaccia.',
          'Spring crea questi oggetti e li collega: basta chiederli nel costruttore. Questa iniezione tramite costruttore rende chiare le dipendenze, permette che siano `final` e facilita la loro sostituzione nei test.' ],
          code: `@Service\npublic class PrezzoService {\n    public double conIva(double base) { return base * 1.21; }\n}\n\n@RestController\npublic class PrezzoController {\n    private final PrezzoService service;\n\n    public PrezzoController(PrezzoService service) {  // Spring lo inietta\n        this.service = service;\n    }\n\n    @GetMapping("/prezzo/{base}")\n    public double prezzo(@PathVariable double base) {\n        return service.conIva(base);\n    }\n}` },
        { h: 'Esempio reale: un’API di compiti', real: true, p: [
          'Un’API completa per una lista di compiti: elencare, vederne uno, crearne e cancellarne. I dati restano in memoria; passarli a un database toccherebbe solo il livello del repository.' ],
          code: `record Compito(long id, String titolo, boolean fatto) {}\nrecord NuovoCompito(String titolo) {}\n\n@RestController\n@RequestMapping("/compiti")\npublic class CompitoController {\n    private final Map<Long, Compito> compiti = new ConcurrentHashMap<>();\n    private final AtomicLong prossimoId = new AtomicLong(1);\n\n    @GetMapping\n    public Collection<Compito> elenca() { return compiti.values(); }\n\n    @GetMapping("/{id}")\n    public ResponseEntity<Compito> mostra(@PathVariable long id) {\n        Compito c = compiti.get(id);\n        return c == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(c);\n    }\n\n    @PostMapping\n    public ResponseEntity<Compito> crea(@RequestBody NuovoCompito richiesta) {\n        if (richiesta.titolo() == null || richiesta.titolo().isBlank()) return ResponseEntity.badRequest().build();\n        Compito c = new Compito(prossimoId.getAndIncrement(), richiesta.titolo(), false);\n        compiti.put(c.id(), c);\n        return ResponseEntity.status(HttpStatus.CREATED).body(c);\n    }\n\n    @DeleteMapping("/{id}")\n    public ResponseEntity<Void> elimina(@PathVariable long id) {\n        return compiti.remove(id) == null ? ResponseEntity.notFound().build() : ResponseEntity.noContent().build();\n    }\n}` },
      ],
      x: [
        mc('Quale annotazione marca una classe che risponde alle richieste HTTP con JSON?', ['@RestController', '@Service', '@Entity', '@Json'], '`@Service` è per la logica di business e `@Entity` per le tabelle JPA.'),
        fill(`@___("/saluto")\npublic String saluto() {\n    return "Ciao";\n}`, ['GetMapping', 'Get', 'Route', 'RequestGet'], '`@GetMapping` associa il metodo alle richieste GET su quella rotta.'),
        mc('Con `@GetMapping("/utenti/{id}")`, come riceve il metodo l’`id`?', ['Con un parametro @PathVariable long id', 'Con @RequestBody long id', 'Con @Param id', 'Con request.get("id")'], '`@PathVariable` legge la parte della rotta tra graffe.'),
        mc('Che cosa fa `@RequestBody`?', ['Trasforma il JSON del corpo della richiesta in un oggetto Java', 'Restituisce il corpo come testo', 'Valida l’URL', 'Crea la tabella nel database'], 'Si usa soprattutto nei metodi POST e PUT.'),
        fill(`return ResponseEntity.___(HttpStatus.CREATED).body(compito);`, ['status', 'code', 'with', 'send'], '`status` fissa il codice HTTP e `body` il contenuto della risposta.'),
        mc('Che vantaggio ha l’iniezione delle dipendenze tramite costruttore?', ['Le dipendenze sono esplicite, possono essere final e si sostituiscono facilmente nei test', 'Il codice va più veloce', 'Non serve Spring', 'Crea ogni oggetto due volte'], 'Spring passa al costruttore gli oggetti di cui la classe ha bisogno.'),
        typ('Ricevi il parametro q dall’URL /cerca?q=pane', `@GetMapping("/cerca")\npublic List<Prodotto> cerca(@___ String q) {\n    return service.cerca(q);\n}`, 'RequestParam', '`@RequestParam` legge i parametri che vengono dopo `?` nell’URL.'),
        mc('Quale JSON riceve il client chiamando GET /compito?', ['{"titolo":"Ripassare","fatto":false}', 'Compito@1b6d3586', '{"getTitolo":"Ripassare","isFatto":false}', '"Ripassare"'], 'Jackson usa i getter: `getTitolo()` dà la proprietà "titolo" e `isFatto()`, essendo boolean, dà "fatto".', `public class Compito {\n    private String titolo = "Ripassare";\n    private boolean fatto = false;\n    public String getTitolo() { return titolo; }\n    public boolean isFatto() { return fatto; }\n}\n\n@GetMapping("/compito")\npublic Compito compito() {\n    return new Compito();\n}`),
      ],
    },
    // ───────────── Giorno 30 ─────────────
    {
      id: 'java-wrapup',
      t: 'Conclusioni',
      d: 'Ripasso finale della sfida, buone pratiche, errori classici e come continuare.',
      guide: [
        { h: 'Che cosa hai imparato', p: [
          'In 30 giorni sei passato da `System.out.println("Ciao, mondo")` alla creazione di un’API REST con Spring Boot. Hai visto tipi, collezioni, classi, ereditarietà, interfacce, eccezioni, generici, lambda, stream, concorrenza, file e database.',
          'L’importante non è memorizzare ogni metodo, ma capire le idee: tipi controllati dal compilatore, oggetti che incapsulano il proprio stato e codice che si legge come una descrizione del problema.' ] },
        { h: 'Buone pratiche', p: [
          'Usa nomi che spieghino l’intenzione, metodi brevi che facciano una cosa sola e `final` ogni volta che puoi: gli oggetti immutabili (come i record) evitano molti errori.',
          'Programma verso le interfacce (`List`, non `ArrayList`), chiudi le risorse con try-with-resources, non lasciare `catch` vuoti e scrivi test con JUnit per ciò che conta.' ],
          code: `// Meno chiaro\nArrayList<Object> l = new ArrayList<>();\nfor (int i = 0; i < ordini.size(); i++) {\n    if (ordini.get(i).totale() > 100) l.add(ordini.get(i).cliente());\n}\n\n// Più chiaro\nList<String> clientiVip = ordini.stream()\n    .filter(o -> o.totale() > 100)\n    .map(Ordine::cliente)\n    .toList();` },
        { h: 'Errori classici', p: [
          'Confrontare String con `==` confronta riferimenti, non il contenuto: usa `equals`. Lo stesso vale per `Integer` fuori dall’intervallo da -128 a 127.',
          'Modificare una lista mentre la percorri con il for-each lancia `ConcurrentModificationException`: usa `removeIf`. E se sovrascrivi `equals`, sovrascrivi anche `hashCode`, altrimenti `HashMap` e `HashSet` si comporteranno male.' ],
          code: `String a = new String("ciao");\nSystem.out.println(a == "ciao");       // false\nSystem.out.println(a.equals("ciao"));  // true\n\nList<Integer> nums = new ArrayList<>(List.of(3, -1, 4, -5));\nnums.removeIf(n -> n < 0);\nSystem.out.println(nums);  // [3, 4]` },
        { h: 'Come continuare', p: [
          'Scegli una strada: backend con Spring Boot e Spring Data, Android (oggi soprattutto con Kotlin, che gira sulla stessa JVM) o sistemi di dati con Kafka o Spark.',
          'Leggi «Effective Java» di Joshua Bloch, esercitati con progetti tuoi, pubblicali su GitHub e leggi il codice di progetti open source. A programmare si impara programmando.' ] },
        { h: 'Esempio reale: il tuo progetto finale', real: true, p: [
          'Un gestore di spese da console che mette insieme buona parte del corso: record per i dati, file per salvarli e stream per il riepilogo. Amplialo come vuoi con un database o un’API con Spring Boot.' ],
          code: `record Spesa(LocalDate data, String categoria, double importo) {\n    String inCsv() { return data + "," + categoria + "," + importo; }\n    static Spesa daCsv(String riga) {\n        String[] p = riga.split(",");\n        return new Spesa(LocalDate.parse(p[0]), p[1], Double.parseDouble(p[2]));\n    }\n}\n\npublic class Spese {\n    public static void main(String[] args) throws IOException {\n        Path file = Path.of("spese.csv");\n        List<Spesa> spese = List.of(\n            new Spesa(LocalDate.of(2025, 3, 1), "cibo", 42.5),\n            new Spesa(LocalDate.of(2025, 3, 2), "trasporti", 12.0),\n            new Spesa(LocalDate.of(2025, 3, 5), "cibo", 18.3));\n        Files.write(file, spese.stream().map(Spesa::inCsv).toList());\n\n        Map<String, Double> riepilogo = Files.readAllLines(file).stream()\n            .map(Spesa::daCsv)\n            .collect(Collectors.groupingBy(Spesa::categoria, TreeMap::new,\n                     Collectors.summingDouble(Spesa::importo)));\n        riepilogo.forEach((cat, totale) -> System.out.printf("%-12s %8.2f%n", cat, totale));\n    }\n}` },
      ],
      x: [
        out(`String a = new String("ciao");\nString b = "ciao";\nSystem.out.println((a == b) + " " + a.equals(b));`, ['false true', 'true true', 'true false', 'false false'], '`new String` crea un altro oggetto: `==` confronta i riferimenti e dà false, `equals` confronta il contenuto.'),
        out(`Integer x = 127, y = 127, m = 1000, n = 1000;\nSystem.out.println((x == y) + " " + (m == n));`, ['true false', 'true true', 'false false', 'false true'], 'Java riusa gli oggetti Integer tra -128 e 127, quindi x e y sono lo stesso oggetto. 1000 è fuori da quella cache. Confronta sempre con `equals`.'),
        mc('Che cosa si lancia togliendo elementi da un ArrayList mentre lo percorri con il for-each?', ['ConcurrentModificationException', 'IndexOutOfBoundsException', 'NullPointerException', 'Niente'], 'Usa `removeIf` o un `Iterator` con il suo metodo `remove()`.'),
        fill(`List<Integer> nums = new ArrayList<>(List.of(3, -1, 4));\nnums.___(n -> n < 0);  // toglie i negativi`, ['removeIf', 'removeAll', 'filter', 'delete'], '`removeIf` riceve un predicato e toglie gli elementi che lo soddisfano.'),
        out(`StringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 3; i++) sb.append(i).append(",");\nSystem.out.println(sb.reverse());`, [',2,1,0', '0,1,2,', '2,1,0,', ',0,1,2'], 'Il testo è "0,1,2," e `reverse()` lo capovolge carattere per carattere.'),
        out(`System.out.println(10 / 4 + " " + 10 / 4.0 + " " + 10 % 4);`, ['2 2.5 2', '2.5 2.5 2', '2 2 2', '2 2.5 2.5'], 'Tra interi, `/` scarta i decimali; con un `double` no. `%` dà il resto: 2.'),
        mc('Quale metodo devi sempre sovrascrivere quando sovrascrivi `equals`?', ['hashCode', 'toString', 'compareTo', 'clone'], 'Due oggetti uguali devono avere lo stesso hashCode, altrimenti `HashMap` e `HashSet` non li troveranno.'),
        out(`record Spesa(String categoria, double importo) {}\nList<Spesa> spese = List.of(\n    new Spesa("cibo", 12.5), new Spesa("svago", 20.0),\n    new Spesa("cibo", 8.5), new Spesa("trasporti", 3.0));\nString maggiore = spese.stream()\n    .collect(Collectors.groupingBy(Spesa::categoria, Collectors.summingDouble(Spesa::importo)))\n    .entrySet().stream()\n    .max(Map.Entry.comparingByValue())\n    .map(Map.Entry::getKey)\n    .orElse("nessuna");\nSystem.out.println(maggiore);`, ['cibo', 'svago', 'trasporti', 'nessuna'], 'Raggruppando, cibo somma 12.5 + 8.5 = 21.0, svago 20.0 e trasporti 3.0. `max` per valore tiene la voce cibo e `getKey` ne dà il nome.'),
      ],
    },
  ],
}))(Sintaxis);
