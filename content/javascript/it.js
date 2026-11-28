/* JavaScript · Italiano */
(({ mc, out, fill, ord, typ, addCourse }) => addCourse('javascript', 'it', {
  tag: 'Dal primo console.log a un negozio sul web con dati, test e Node.js: quattro settimane, con un progetto alla fine di ognuna.',
  days: [
    // Giorno 1
    {
      id: 'js-intro',
      t: 'Il tuo primo programma e la console',
      d: 'Che cos’è JavaScript, dove si esegue, il tuo primo script e la console per vedere cosa succede.',
      guide: [
        { h: 'Cos’è JavaScript?', p: [
          'JavaScript è il linguaggio di programmazione del web. Brendan Eich lo creò nel 1995 per il browser Netscape e oggi lo capiscono tutti i browser del mondo.',
          'L’HTML definisce il contenuto di una pagina, il CSS il suo aspetto e JavaScript il suo comportamento: menu che si aprono, moduli che si validano, mappe che si muovono.',
          'Il suo nome ufficiale come standard è ECMAScript. Quando leggi “ES6” o “ES2015” si parla del grande aggiornamento del 2015, che ha introdotto `let`, `const`, le funzioni freccia e le classi.' ] },
        { h: 'Dove si esegue', p: [
          'Nel browser: apri la console con F12 (o Ctrl+Maiusc+J) e scrivi codice direttamente. Per una pagina, salva il codice in un file `.js` e collegalo dall’HTML.',
          'Fuori dal browser: Node.js esegue JavaScript sui server e nel tuo terminale. Installalo da nodejs.org ed esegui un file con `node app.js`.',
          'L’attributo `defer` fa sì che lo script venga eseguito quando l’HTML è già caricato, così può trovare gli elementi della pagina.' ],
          code: `<!-- index.html -->\n<script src="app.js" defer></script>\n\n// Nel terminale, con Node.js:\n// node app.js` },
        { h: 'Il tuo primo programma', p: [
          '`console.log()` mostra nella console ciò che gli passi tra parentesi. Puoi passargli più valori separati da virgole e li mostrerà separati da uno spazio.',
          'I testi vanno tra virgolette doppie o singole. Il punto e virgola finale è facoltativo, ma metterlo sempre evita sorprese.' ],
          code: `console.log("Ciao, mondo");       // Ciao, mondo\nconsole.log(2 + 3);               // 5\nconsole.log("Totale:", 10 * 3);   // Totale: 30` },
        { h: 'Variabili e commenti', p: [
          'Una variabile è una scatola con un nome in cui conservi un valore. Usa `const` per i valori che non riassegnerai e `let` per quelli che cambiano. Evita `var`, il modo vecchio.',
          'Ciò che segue `//` è un commento di una riga; `/* ... */` copre più righe. JavaScript li ignora: servono a spiegare il perché del codice.',
          'Errore tipico: riassegnare una `const`. JavaScript lancia `TypeError: Assignment to constant variable`.' ],
          code: `const nome = "Eva";   // non cambierà\nlet eta = 30;         // può cambiare\neta = eta + 1;\n/* Mostriamo il risultato\n   su una sola riga */\nconsole.log(nome, eta);  // Eva 31` },
        { h: 'Oltre console.log', p: [
          '`console.log` accetta più argomenti e li separa con uno spazio. Nel browser gli oggetti si mostrano in modo interattivo.',
          '`console.info`, `console.warn` e `console.error` funzionano allo stesso modo, ma il browser li segna con colori e icone e si possono filtrare. `error` scrive inoltre nell’output degli errori.' ],
          code: `const utente = { nome: "Ana", punti: 40 };\nconsole.log("Utente:", utente, "attivo");\nconsole.warn("Restano pochi tentativi");\nconsole.error("Impossibile salvare");` },
        { h: 'Esempio reale: dividere il conto al ristorante', real: true, p: [
          'Con poche righe risolvi già un problema quotidiano: dividere un conto con il 10 % di mancia tra amici.',
          '`toFixed(2)` arrotonda a due decimali e restituisce un testo, perfetto per mostrare soldi.' ],
          code: `const conto = 84.5;\nconst persone = 3;\nconst mancia = conto * 0.1;\nconst aTesta = (conto + mancia) / persone;\nconsole.log("Ognuno paga", aTesta.toFixed(2));  // Ognuno paga 30.98` },
      ],
      x: [
        mc('Come si mostra un messaggio nella console in JavaScript?', ['console.log("Ciao")', 'print("Ciao")', 'System.out.println("Ciao")', 'echo "Ciao"'], '`console.log` è il modo standard di scrivere nella console. `print` è di Python.'),
        mc('Come si scrive un commento di una riga?', ['// commento', '# commento', '<!-- commento -->', '-- commento'], 'Tutto ciò che segue `//` su quella riga viene ignorato. `/* */` serve per più righe.'),
        mc('Dove si può eseguire JavaScript?', ['Nel browser e fuori con Node.js', 'Solo nel browser', 'Solo su Windows', 'Solo dentro Java'], 'Tutti i browser lo eseguono, e Node.js lo porta sui server e nel terminale.'),
        out(`console.log(2 + 3 * 4);`, ['14', '20', '24', '9'], 'La moltiplicazione si calcola prima dell’addizione: 3 * 4 = 12 e 2 + 12 = 14.'),
        ord('Scrivi la riga che mostra Ciao, mondo nella console', ['console', '.', 'log', '(', '"Ciao, mondo"', ')'], ['print', 'echo'], 'Si chiama il metodo `log` dell’oggetto `console` con il testo tra parentesi.'),
        mc('In cosa si differenzia `console.error` da `console.log`?', ['Scrive nell’output degli errori e il browser lo segna come errore', 'Ferma il programma', 'Lancia un’eccezione', 'Non c’è nessuna differenza'], 'Per lanciare davvero un errore si usa `throw`.'),
        out(`const n = 5;\nconsole.log("Totale:", n, "articoli");`, ['Totale: 5 articoli', 'Totale:5articoli', 'Totale: n articoli', 'Totale: 5, articoli'], 'Gli argomenti si mostrano separati da uno spazio.'),
        out(`let prezzo = 10;\nprezzo = prezzo * 2;\nconst spedizione = 5;\nconsole.log("Totale:", prezzo + spedizione);`, ['Totale: 25', 'Totale: 15', 'Totale:25', 'Errore'], '`prezzo` diventa 20 e si aggiunge la spedizione: 25. `console.log` separa i suoi argomenti con uno spazio.'),
      ],
    },
    // Giorno 2
    {
      id: 'js-types',
      t: 'Variabili e tipi',
      d: 'let e const, i tipi primitivi, il testo con i template literal e passare dal testo ai numeri.',
      guide: [
        { h: 'Primitivi e oggetti', p: [
          'JavaScript ha sette tipi primitivi: `string` (testo), `number` (numeri interi o decimali), `boolean` (`true`/`false`), `undefined`, `null`, `bigint` e `symbol`. Tutto il resto, come array e funzioni, sono oggetti.',
          '`typeof` ti dice il tipo di un valore. Attenzione a due stranezze: `typeof null` restituisce “object” per un errore storico, e anche `typeof []` restituisce “object”.',
          '`undefined` significa “non ha ancora un valore”; `null` lo metti tu apposta per dire “vuoto”.' ],
          code: `console.log(typeof "ciao");     // string\nconsole.log(typeof 3.14);       // number\nconsole.log(typeof true);       // boolean\nconsole.log(typeof undefined);  // undefined\nconsole.log(typeof null);       // object  (stranezza storica)\nconsole.log(typeof [1, 2]);     // object` },
        { h: 'let, const e var', p: [
          'Usa `const` per impostazione predefinita e `let` solo quando devi riassegnare. Così chi legge il codice sa quali valori cambiano.',
          '`var` è il modo precedente al 2015: non rispetta i blocchi `{ }` e si può usare prima di dichiararla (vale `undefined`), il che provoca errori difficili da vedere.' ] },
        { h: 'Testi e template', p: [
          'I testi vanno tra virgolette doppie, singole o apici inversi. Gli apici inversi creano template: inseriscono espressioni con `${...}` e ammettono più righe.',
          'Metodi utili: `length` (lunghezza), `toUpperCase()`, `toLowerCase()`, `trim()` (toglie gli spazi agli estremi), `includes()`, `slice(inizio, fine)` e `replace()`. Nessuno modifica il testo originale: ne restituiscono uno nuovo.' ],
          code: 'const nome = "Eva";\nconst punti = 15;\nconsole.log(`${nome} ha ${punti} punti`);  // Eva ha 15 punti\n\nconst t = "  JavaScript  ".trim();\nconsole.log(t.length);           // 10\nconsole.log(t.slice(0, 4));      // Java\nconsole.log(t.toUpperCase());    // JAVASCRIPT\nconsole.log(t.includes("Script")); // true' },
        { h: 'Numeri e conversioni', p: [
          'Se uno degli operandi di `+` è un testo, JavaScript concatena: `"5" + 2` dà “52”. Gli altri operatori (`-`, `*`, `/`) convertono il testo in numero: `"5" - 2` dà 3.',
          'Converti in modo esplicito per non dipendere da queste regole: `Number("42")`, `parseInt("42px")`, `parseFloat("3.5")` e `String(42)`.',
          'Se la conversione fallisce ottieni `NaN` (“not a number”), che curiosamente è di tipo `number`. Controllalo con `Number.isNaN()`.' ],
          code: `console.log("5" + 2);           // 52\nconsole.log("5" - 2);           // 3\nconsole.log(Number("42") + 1);  // 43\nconsole.log(parseInt("42px"));  // 42\nconsole.log(Number("ciao"));    // NaN` },
        { h: 'Esempio reale: pulire un nome da un modulo', real: true, p: [
          'Gli utenti scrivono con spazi di troppo e maiuscole a caso. Prima di salvare un nome conviene normalizzarlo.',
          'Concatenare i metodi è comune: ognuno restituisce un nuovo testo su cui si applica il successivo.' ],
          code: `const input = "   aNA  ";\nconst pulito = input.trim().toLowerCase();\nconst nome = pulito[0].toUpperCase() + pulito.slice(1);\nconsole.log(nome);         // Ana\nconsole.log(nome.length);  // 3` },
      ],
      x: [
        mc('Quale parola dichiara una variabile che non si può riassegnare?', ['const', 'let', 'var', 'static'], 'Con `const` non puoi riassegnare la variabile; con `let` sì.'),
        out(`console.log(typeof 42);`, ['number', 'int', 'integer', 'Number'], 'JavaScript ha un solo tipo per interi e decimali: `number`.'),
        out(`let x;\nconsole.log(x);`, ['undefined', 'null', '0', 'Errore'], 'Una variabile dichiarata senza valore vale `undefined`.'),
        out(`let a = "5";\nlet b = 2;\nconsole.log(a + b);`, ['52', '7', 'Errore', 'NaN'], 'Se uno degli operandi è un testo, `+` concatena invece di sommare.'),
        out(`console.log("5" - 2);`, ['3', '52', 'NaN', 'Errore'], 'L’operatore `-` lavora solo con numeri, quindi converte "5" in 5.'),
        fill(`const s = "  ciao  ";\nconsole.log(s.___());  // ciao`, ['trim', 'strip', 'clean', 'trimAll'], '`trim()` toglie gli spazi all’inizio e alla fine. `strip` è di Python.'),
        out(`const t = "JavaScript";\nconsole.log(t.length, t.slice(0, 4), t.toUpperCase().includes("SCRIPT"));`, ['10 Java true', '10 Jav true', '9 Java true', '10 Java false'], 'Ha 10 lettere, `slice(0, 4)` prende gli indici da 0 a 3 e in maiuscolo contiene davvero "SCRIPT".'),
        out('const nome = "ana";\nconst eta = "30";\nconsole.log(`${nome.toUpperCase()} ha ${Number(eta) + 1} anni`);', ['ANA ha 31 anni', 'ANA ha 301 anni', 'ana ha 31 anni', '${nome.toUpperCase()} ha ${Number(eta) + 1} anni'], 'Il template valuta ogni `${...}`. `Number(eta)` converte "30" in 30, quindi somma invece di concatenare.'),
      ],
    },
    // Giorno 3
    {
      id: 'js-booleans',
      t: 'Operazioni e confronti',
      d: 'Calcolare, confrontare con === e combinare condizioni con &&, || e !, e quali valori contano come falsi.',
      guide: [
        { h: 'Booleani e confronti', p: [
          'Un booleano può valere solo `true` o `false`. Lo ottieni confrontando: `>`, `<`, `>=`, `<=`, `===` (uguale) e `!==` (diverso).',
          '`===` confronta valore e tipo. `==` converte i tipi prima di confrontare e dà risultati strani come `0 == ""` (true). Usa sempre `===` e `!==`.' ],
          code: `console.log(5 === "5");  // false\nconsole.log(5 == "5");   // true  (converte il testo)\nconsole.log(3 !== 4);    // true\nconsole.log(10 >= 10);   // true` },
        { h: 'Truthy e falsy', p: [
          'In un `if`, qualsiasi valore viene convertito in booleano. Esistono solo sei valori falsy: `false`, `0`, `""` (testo vuoto), `null`, `undefined` e `NaN`.',
          'Tutto il resto è truthy, compresi “0”, “false”, `[]` e `{}`. Pensare che un array vuoto sia falso è un errore tipico.' ],
          code: `console.log(Boolean(0));     // false\nconsole.log(Boolean(""));    // false\nconsole.log(Boolean("0"));   // true\nconsole.log(Boolean([]));    // true` },
        { h: 'Operatori aritmetici e di assegnazione', p: [
          'Oltre a `+ - * /` hai `%` (resto della divisione) e `**` (potenza). La precedenza è quella della matematica: prima `**`, poi `* / %` e infine `+ -`.',
          'Scorciatoie: `x += 2` equivale a `x = x + 2`, e `x++` somma 1. Il resto `%` serve a sapere se un numero è pari (`n % 2 === 0`).' ],
          code: `console.log(10 % 3);     // 1\nconsole.log(2 ** 3);     // 8\nlet x = 5;\nx += 2;   // 7\nx++;      // 8\nconsole.log(x);          // 8` },
        { h: 'Operatori logici', p: [
          '`&&` (e) è vero se entrambi i lati lo sono; `||` (o) se almeno uno lo è; `!` nega.',
          'Si valutano in cortocircuito: in `a && b`, se `a` è falsy non si guarda nemmeno `b`. Per questo `utente && utente.nome` non fallisce se `utente` è `null`.' ] },
        { h: 'Esempio reale: si può entrare al concerto?', real: true, p: [
          'Un biglietto vale se la persona ce l’ha e, inoltre, è maggiorenne o accompagnata. Le parentesi raggruppano la parte con «o» perché venga valutata per prima.',
          'La capienza si controlla con operatori di assegnazione e un confronto: se si vendono più biglietti dei posti, sappiamo quanti sono di troppo.' ],
          code: `const eta = 17;\nconst accompagnato = true;\nconst haBiglietto = true;\nconsole.log(haBiglietto && (eta >= 18 || accompagnato));  // true\n\nconst capienza = 500;\nlet venduti = 480;\nvenduti += 25;\nconsole.log(venduti > capienza, venduti - capienza);  // true 5` },
      ],
      x: [
        mc('Quale di questi valori è falsy?', ['0', '"0"', '[]', '"false"'], 'Il numero 0 è falsy. Qualsiasi testo non vuoto e qualsiasi array, anche vuoto, sono truthy.'),
        out(`console.log(5 == "5", 5 === "5");`, ['true false', 'true true', 'false false', 'false true'], '`==` converte "5" in numero e dà `true`; `===` confronta anche il tipo e dà `false`.'),
        out(`console.log(10 % 3, 2 ** 3);`, ['1 8', '3 6', '1 6', '3 8'], '`%` è il resto (10 diviso 3 fa 3 con resto 1) e `**` la potenza (2³ = 8).'),
        out(`let x = 5;\nx += 2;\nx++;\nconsole.log(x);`, ['8', '7', '6', '52'], '5 + 2 = 7, e `x++` aggiunge ancora 1.'),
        fill(`const puoEntrare = eta >= 18 ___ haBiglietto;`, ['&&', 'and', '||', '&&&'], 'Devono valere entrambe le condizioni, quindi si usa `&&`. `and` è di Python.'),
        out(`console.log(Boolean(""), Boolean("0"));`, ['false true', 'true true', 'false false', 'true false'], 'Il testo vuoto è falsy; "0" è un testo non vuoto, quindi è truthy.'),
        out(`console.log(7 > 3 && 2 > 5, 7 > 3 || 2 > 5, !(7 > 3));`, ['false true false', 'true true false', 'false false true', 'true false false'], '`&&` richiede che entrambi i lati siano veri, `||` solo uno, e `!` inverte il risultato.'),
        out(`const eta = 20;\nconst socio = false;\nconst sconto = eta < 25 || socio;\nconsole.log(sconto, !sconto && eta > 18, 7 + 3 * 2 ** 2);`, ['true false 19', 'true true 19', 'true false 40', 'false false 19'], '`eta < 25` è vero, quindi `||` dà true; `!true` è false; e 2 ** 2 = 4, 3 * 4 = 12, 7 + 12 = 19.'),
      ],
    },
    // Giorno 4
    {
      id: 'js-conditionals',
      t: 'Prendere decisioni',
      d: 'if, else if ed else, il ternario, switch e i valori predefiniti con ?? e ?.',
      guide: [
        { h: 'if, else if ed else', p: [
          '`if` esegue un blocco solo se la condizione è vera. Puoi concatenare alternative con `else if` e chiudere con un `else` per gli altri casi.',
          'Le condizioni si controllano in ordine e si esegue solo il primo blocco che corrisponde. Per questo conviene iniziare dal caso più restrittivo.' ],
          code: `const temperatura = 28;\nif (temperatura > 30) {\n  console.log("Fa molto caldo");\n} else if (temperatura > 20) {\n  console.log("Si sta bene");\n} else {\n  console.log("Copriti");\n}\n// Si sta bene` },
        { h: 'L’operatore ternario', p: [
          '`condizione ? valoreSeSì : valoreSeNo` sceglie tra due valori in una sola espressione. È ideale per assegnare una variabile o comporre un testo.',
          'Non concatenare troppi ternari: se ci sono più di due casi, un `if` o uno `switch` si legge meglio.' ],
          code: `const eta = 17;\nconst accesso = eta >= 18 ? "consentito" : "negato";\nconsole.log(accesso);  // negato` },
        { h: 'switch', p: [
          '`switch` confronta un valore con vari `case` usando `===`. Ogni caso termina con `break`; se lo dimentichi, l’esecuzione prosegue nel caso successivo.',
          'Questo “cadere” nel caso successivo si sfrutta per raggruppare valori, e `default` raccoglie ciò che non corrisponde a nessuno.' ],
          code: `const giorno = "sab";\nswitch (giorno) {\n  case "sab":\n  case "dom":\n    console.log("Fine settimana");\n    break;\n  default:\n    console.log("Giorno feriale");\n}\n// Fine settimana` },
        { h: 'Valori predefiniti: ?? e ?.', p: [
          '`a ?? b` restituisce `b` solo se `a` è `null` o `undefined`. È meglio di `||` per i valori predefiniti, perché `||` sostituisce anche 0 e "", che possono essere valori validi.',
          'La concatenazione opzionale `?.` legge una proprietà senza fallire se ciò che precede è `null` o `undefined`: restituisce `undefined` invece di lanciare un `TypeError`.' ],
          code: `const scorte = 0;\nconsole.log(scorte || 10);  // 10  (perdiamo lo 0!)\nconsole.log(scorte ?? 10);  // 0\n\nconst utente = { profilo: null };\nconsole.log(utente.profilo?.foto);  // undefined` },
        { h: 'Esempio reale: calcolare la spedizione di un negozio online', real: true, p: [
          'I negozi di solito offrono la spedizione gratuita sopra un certo importo e fanno pagare in modo diverso a seconda del paese. È un caso perfetto per `if` / `else if`.' ],
          code: `const totale = 42;\nconst paese = "IT";\nlet spedizione;\nif (totale >= 50) {\n  spedizione = 0;\n} else if (paese === "IT") {\n  spedizione = 4.99;\n} else {\n  spedizione = 9.99;\n}\nconsole.log("Spedizione:", spedizione);  // Spedizione: 4.99` },
      ],
      x: [
        out(`const eta = 20;\nconst r = eta >= 18 ? "adulto" : "minore";\nconsole.log(r);`, ['adulto', 'minore', 'true', '20'], 'La condizione è vera, quindi il ternario restituisce il primo valore.'),
        fill(`if (x > 10) {\n  console.log("tanto");\n} ___ (x > 5) {\n  console.log("abbastanza");\n}`, ['else if', 'elif', 'elseif', 'else'], 'In JavaScript le alternative si concatenano con `else if`. `elif` è di Python.'),
        out(`const n = 0;\nif (n) {\n  console.log("sì");\n} else {\n  console.log("no");\n}`, ['no', 'sì', '0', 'undefined'], '0 è falsy, quindi si esegue l’`else`.'),
        out(`console.log(null ?? "valore", 0 || "altro");`, ['valore altro', 'null altro', 'valore 0', 'null 0'], '`??` sostituisce `null`. `||` sostituisce qualsiasi falsy, compreso 0.'),
        out(`const giorno = "sab";\nswitch (giorno) {\n  case "sab":\n  case "dom":\n    console.log("weekend");\n    break;\n  default:\n    console.log("feriale");\n}`, ['weekend', 'feriale', 'weekend\nferiale', 'sab'], 'I `case` vuoti si raggruppano: "sab" cade nel blocco di "dom", e `break` evita di arrivare a `default`.'),
        out(`const obj = { a: 1 };\nconsole.log(obj.b?.c);`, ['undefined', 'Errore', 'null', '""'], '`obj.b` è `undefined` e `?.` si ferma lì restituendo `undefined` invece di lanciare un errore.'),
        typ('Usa l’operatore che dà un valore predefinito solo se il nome è null o undefined', `const nome = utente.nome ___ "Anonimo";`, '??', '`??` rispetta valori come "" o 0 e sostituisce solo `null` e `undefined`.'),
        out(`const voto = 7.5;\nlet giudizio;\nif (voto >= 9) giudizio = "Ottimo";\nelse if (voto >= 7) giudizio = "Buono";\nelse if (voto >= 5) giudizio = "Sufficiente";\nelse giudizio = "Insufficiente";\nconst extra = voto > 7 ? "+" : "";\nconsole.log(giudizio + extra);`, ['Buono+', 'Buono', 'Ottimo+', 'Sufficiente+'], '7.5 non arriva a 9 ma arriva a 7, quindi è “Buono”; inoltre supera 7 e il ternario aggiunge “+”.'),
      ],
    },
    // Giorno 5
    {
      id: 'js-loops',
      t: 'Cicli',
      d: 'for, while, for...of e for...in, break e continue: ripetere un lavoro senza copiare codice.',
      guide: [
        { h: 'Il ciclo for', p: [
          '`for (inizio; condizione; passo)` ripete un blocco un numero noto di volte. La cosa tipica è contare con `let i = 0` finché `i < n`, sommando 1 a ogni giro.',
          'Errore tipico: usare `i <= array.length`. L’ultimo indice è `length - 1`, quindi l’ultimo giro leggerebbe `undefined`.' ],
          code: `for (let i = 0; i < 3; i++) {\n  console.log("Giro", i);\n}\n// Giro 0\n// Giro 1\n// Giro 2` },
        { h: 'while e do...while', p: [
          '`while` ripete finché la condizione è vera; usalo quando non sai quanti giri ci saranno. Assicurati che qualcosa cambi dentro, altrimenti avrai un ciclo infinito.',
          '`do...while` controlla la condizione alla fine, quindi il blocco si esegue almeno una volta.' ],
          code: `let saldo = 100;\nlet mesi = 0;\nwhile (saldo > 0) {\n  saldo -= 30;\n  mesi++;\n}\nconsole.log(mesi);  // 4` },
        { h: 'for...of e for...in', p: [
          'Qui compaiono per la prima volta gli array (valori tra parentesi quadre) e gli oggetti (coppie chiave-valore tra parentesi graffe). Per ora basta sapere che `for...of` scorre i valori e `for...in` le chiavi; li vedrai a fondo nei giorni 8 e 9.',
          '`for...of` scorre i valori di qualsiasi iterabile: array, testi, Set o Map. È il modo più chiaro di scorrere un array.',
          '`for...in` scorre le chiavi di un oggetto. Con un array ti darebbe gli indici come testo ("0", "1"...), quindi non usarlo per gli array.' ],
          code: `for (const lettera of "sol") console.log(lettera);  // s, o, l (una per riga)\n\nconst eta = { Ana: 30, Leo: 8 };\nfor (const nome in eta) {\n  console.log(nome, eta[nome]);\n}\n// Ana 30\n// Leo 8` },
        { h: 'break e continue', p: [
          '`break` esce del tutto dal ciclo: utile quando hai già trovato ciò che cercavi. `continue` salta il resto del giro attuale e passa al successivo.',
          'Usali con moderazione: un ciclo pieno di `break` e `continue` è difficile da seguire. Spesso un metodo degli array come `find` o `filter` (giorno 9) lo esprime meglio.' ],
          code: `const voti = [7, 3, 9, 4];\nfor (const v of voti) {\n  if (v < 5) continue;   // salta le insufficienze\n  console.log("Promosso:", v);\n}\n// Promosso: 7\n// Promosso: 9` },
        { h: 'Esempio reale: totale di uno scontrino e articolo più caro', real: true, p: [
          'Scorrere una lista accumulando risultati è l’uso più comune di un ciclo: sommare importi, cercare massimi, contare casi.' ],
          code: `const prezzi = [3.5, 12, 7.25, 1.99];\nlet totale = 0;\nlet piuCaro = 0;\nfor (const p of prezzi) {\n  totale += p;\n  if (p > piuCaro) piuCaro = p;\n}\nconsole.log(totale.toFixed(2), piuCaro);  // 24.74 12` },
      ],
      x: [
        out(`for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`, ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', '3'], '`i` inizia da 0 e il ciclo si ferma quando arriva a 3, senza eseguire quel giro.'),
        fill(`for (const frutto ___ ["pera", "uva"]) {\n  console.log(frutto);\n}`, ['of', 'in', 'from', 'at'], '`for...of` scorre i valori dell’array.'),
        out(`let i = 0;\nwhile (i < 3) i++;\nconsole.log(i);`, ['3', '2', '4', '0'], 'Il ciclo termina quando `i` vale 3, ed è quel valore che si stampa.'),
        typ('Esci dal ciclo appena trovi il numero cercato', `for (const n of numeri) {\n  if (n === cercato) ___;\n}`, ['break', 'break;'], '`break` termina il ciclo immediatamente.'),
        out(`for (const i in ["a", "b"]) {\n  console.log(i);\n}`, ['0\n1', 'a\nb', '["a", "b"]', 'undefined'], '`for...in` scorre le chiavi (gli indici); `for...of` scorre i valori.'),
        out(`let s = "";\nfor (const c of "abc") {\n  s = c + s;\n}\nconsole.log(s);`, ['cba', 'abc', 'c', 'bca'], 'Ogni lettera si mette davanti a ciò che è stato accumulato, quindi il testo risulta invertito.'),
        out(`let s = 0;\nfor (let i = 1; i <= 10; i++) {\n  if (i % 2) continue;\n  s += i;\n}\nconsole.log(s);`, ['30', '25', '55', '10'], '`i % 2` vale 1 (truthy) per i dispari, che vengono saltati: 2 + 4 + 6 + 8 + 10 = 30.'),
        out(`const voti = [8, 3, 10, 6, 2];\nlet promossi = 0;\nlet somma = 0;\nfor (const v of voti) {\n  if (v < 5) continue;\n  promossi++;\n  somma += v;\n}\nconsole.log(promossi, somma / promossi);`, ['3 8', '5 5.8', '3 4.8', '2 9'], 'Si saltano il 3 e il 2. Restano 8, 10 e 6: tre promossi che sommano 24, e 24 / 3 = 8.'),
      ],
    },
    // Giorno 6
    {
      id: 'js-functions',
      t: 'Funzioni',
      d: 'Dichiarazioni di funzione e arrow function, parametri predefiniti e rest, return e ambito.',
      guide: [
        { h: 'Dichiarare e chiamare funzioni', p: [
          'Una funzione è un blocco di codice con un nome che puoi riutilizzare. Si dichiara con `function nome(parametri) { ... }` e si chiama con `nome(argomenti)`.',
          '`return` restituisce un valore e termina la funzione. Se non c’è `return`, la funzione restituisce `undefined`: dimenticarlo è un errore molto comune.' ],
          code: `function area(larghezza, altezza) {\n  return larghezza * altezza;\n}\nconsole.log(area(3, 4));  // 12\n\nfunction saluta(nome) {\n  console.log("Ciao " + nome);  // non restituisce nulla\n}\nconsole.log(saluta("Ana"));  // Ciao Ana, e poi undefined` },
        { h: 'Parametri predefiniti e rest', p: [
          'Un parametro può avere un valore predefinito che si usa se non passi quell’argomento: `function f(x = 1)`.',
          '`...resto` riunisce tutti gli argomenti in più in un array. Così una funzione accetta qualsiasi quantità di valori.' ],
          code: 'function saluta(nome = "amico") {\n  return `Ciao, ${nome}`;\n}\nconsole.log(saluta());       // Ciao, amico\n\nfunction somma(...nums) {\n  let totale = 0;\n  for (const n of nums) totale += n;\n  return totale;\n}\nconsole.log(somma(1, 2, 3));  // 6' },
        { h: 'Funzioni freccia', p: [
          'Le funzioni freccia sono un modo breve di scrivere funzioni: `const doppio = (n) => n * 2`. Se il corpo è una sola espressione, il `return` è implicito.',
          'Con le graffe serve un `return` esplicito: `(n) => { return n * 2; }`. Sono perfette per piccole funzioni da passare ad altre (lo vedrai il giorno 9).' ],
          code: `const doppio = (n) => n * 2;\nconst saluto = () => "Ciao!";\nconst max = (a, b) => {\n  if (a > b) return a;\n  return b;\n};\nconsole.log(doppio(5), saluto(), max(3, 8));  // 10 Ciao! 8` },
        { h: 'Ambito e hoisting', p: [
          'Le variabili dichiarate dentro una funzione (o dentro un blocco `{ }` con `let`/`const`) esistono solo lì. Una variabile interna con lo stesso nome di una esterna la “copre” senza modificarla.',
          'Le dichiarazioni `function` vengono sollevate (hoisting): puoi chiamarle prima della riga in cui sono scritte. Le funzioni salvate in una `const` no: chiamarle prima lancia `ReferenceError`.' ],
          code: `console.log(quadrato(4));  // 16, funziona grazie all’hoisting\nfunction quadrato(n) {\n  return n * n;\n}\n\nlet x = 1;\nfunction cambia() {\n  let x = 2;   // un’altra variabile, esiste solo qui\n  return x;\n}\nconsole.log(cambia(), x);  // 2 1` },
        { h: 'Esempio reale: prezzo finale con sconto e IVA', real: true, p: [
          'Un negozio deve calcolare il prezzo finale in molti punti: carrello, fattura, email di conferma. Una funzione evita di ripetere la formula e di sbagliare.',
          'Arrotondare con `Math.round(x * 100) / 100` lascia il risultato come numero con due decimali.' ],
          code: `function prezzoFinale(base, sconto = 0, iva = 0.22) {\n  const scontato = base * (1 - sconto);\n  return Math.round(scontato * (1 + iva) * 100) / 100;\n}\nconsole.log(prezzoFinale(100));        // 122\nconsole.log(prezzoFinale(100, 0.2));   // 97.6\nconsole.log(prezzoFinale(50, 0, 0.1)); // 55` },
      ],
      x: [
        fill(`const doppio = (n) ___ n * 2;`, ['=>', '->', '=', ':'], 'Le funzioni freccia usano `=>`. Con una sola espressione, il `return` è implicito.'),
        out(`function saluta(n = "amico") {\n  return "Ciao " + n;\n}\nconsole.log(saluta());`, ['Ciao amico', 'Ciao undefined', 'Ciao', 'Errore'], 'Se non passi l’argomento, si usa il valore predefinito.'),
        typ('Fai in modo che la funzione restituisca l’area del cerchio', `function area(r) {\n  ___ Math.PI * r * r;\n}`, 'return', 'Senza `return`, la funzione calcolerebbe il valore ma restituirebbe `undefined`.'),
        out(`const f = function (x) {\n  return x * x;\n};\nconsole.log(f(4));`, ['16', '8', 'x * x', 'undefined'], 'È un’espressione di funzione salvata in una variabile: 4 * 4 = 16.'),
        out(`console.log(f());\n\nfunction f() {\n  return "pronto";\n}`, ['pronto', 'undefined', 'Errore', 'f'], 'Le dichiarazioni `function` vengono sollevate: si possono usare prima di essere scritte.'),
        out(`let x = 1;\nfunction cambia() {\n  let x = 2;\n  return x;\n}\nconsole.log(cambia(), x);`, ['2 1', '2 2', '1 1', '1 2'], 'La `x` interna è un’altra variabile locale; la `x` esterna vale ancora 1.'),
        out(`function somma(...n) {\n  let t = 0;\n  for (const v of n) t += v;\n  return t;\n}\nconsole.log(somma(1, 2, 3), somma());`, ['6 0', '6 undefined', '[1, 2, 3] 0', '123 0'], '`...n` riunisce gli argomenti in un array. Senza argomenti l’array è vuoto e il totale resta 0.'),
        out(`const sconto = (prezzo, pct = 10) => prezzo - prezzo * pct / 100;\nfunction totale(...prezzi) {\n  let t = 0;\n  for (const p of prezzi) t += sconto(p);\n  return t;\n}\nconsole.log(totale(100, 50), sconto(200, 50));`, ['135 100', '150 100', '135 190', '15 100'], 'Con il 10 % predefinito, 100 diventa 90 e 50 diventa 45: totale 135. Con il 50 %, 200 diventa 100.'),
      ],
    },
    // Giorno 7
    {
      id: 'js-workshop-register',
      t: 'Il laboratorio di Kibi: il registratore di cassa',
      d: 'Progetto della settimana 1: una cassa nel browser che chiede i prezzi, somma, applica gli sconti e stampa lo scontrino nella console.',
      guide: [
        { h: 'L’incarico', p: [
          'Kibi apre un negozio di semi e ha bisogno di un registratore di cassa. Lo facciamo nel browser: chiede i prezzi con una finestra di dialogo, somma, applica uno sconto quando serve e stampa lo scontrino nella console.',
          'Questo laboratorio mette insieme tutta la settimana: la console, le variabili, le operazioni, le decisioni, i cicli e le funzioni. Ogni passo funziona da solo: incollalo nella console del browser (F12) e controllalo prima di andare avanti.' ] },
        { h: 'Passo 1: una funzione per ogni regola', p: [
          'Il negozio sconta il 10 % da 50 € e il 5 % da 20 €. Lo scriviamo come funzione per poterla provare con vari totali senza ripetere codice.',
          'L’ordine degli `if` conta: la fascia più alta va per prima, perché anche 60 € soddisfa `>= 20`. Ogni `return` esce dalla funzione appena trova la sua fascia.' ],
          code: `function sconto(totale) {\n  if (totale >= 50) return totale * 0.1;\n  if (totale >= 20) return totale * 0.05;\n  return 0;\n}\n\nconsole.log(sconto(42.8).toFixed(2));  // 2.14\nconsole.log(sconto(10));               // 0` },
        { h: 'Passo 2: chiedere prezzi finché non si scrive 0', p: [
          '`prompt()` apre una finestra nel browser e restituisce ciò che è stato scritto come testo, o `null` se si preme Annulla. `Number()` lo trasforma in numero e dà `NaN` se non ci riesce.',
          'Non sappiamo quanti articoli ci saranno, quindi usiamo `while (true)` e usciamo con `break`. Se ciò che è stato scritto non è un prezzo, `continue` lo richiede senza sommare nulla.' ],
          code: `let totale = 0;\nlet articoli = 0;\nwhile (true) {\n  const testo = prompt("Prezzo (0 per finire)");\n  if (testo === null) break;\n  const prezzo = Number(testo.replace(",", "."));\n  if (Number.isNaN(prezzo) || prezzo < 0) {\n    console.warn("Questo non è un prezzo:", testo);\n    continue;\n  }\n  if (prezzo === 0) break;\n  totale += prezzo;\n  articoli++;\n}` },
        { h: 'Passo 3: uno scontrino allineato', p: [
          '`toFixed(2)` tiene sempre due decimali e restituisce un testo. `padEnd(10)` riempie di spazi a destra fino a 10 caratteri e `padStart(8)` a sinistra: così le cifre restano in colonna.',
          'Una piccola funzione per ogni riga evita di scrivere tre volte lo stesso formato.' ],
          code: `function riga(etichetta, importo) {\n  return etichetta.padEnd(10) + importo.toFixed(2).padStart(8);\n}\n\nconst totale = 32.5;\nconst s = sconto(totale);\nconsole.log(riga("Totale", totale));         // Totale       32.50\nconsole.log(riga("Sconto", s));              // Sconto        1.63\nconsole.log(riga("Da pagare", totale - s));  // Da pagare    30.88` },
        { h: 'Esempio reale: la cassa completa', real: true, p: [
          'Mettiamo i tre passi in un solo script. Salvalo come `cassa.js`, collegalo a una pagina con `<script src="cassa.js"></script>` e aprila: lo scontrino compare nella console.',
          'Idee per ampliarlo: chiedere anche la quantità di ogni articolo, o calcolare il resto a partire da quello che consegna il cliente.' ],
          code: `const sconto = (totale) => (totale >= 50 ? totale * 0.1 : totale >= 20 ? totale * 0.05 : 0);\nconst riga = (etichetta, importo) => etichetta.padEnd(10) + importo.toFixed(2).padStart(8);\n\nlet totale = 0;\nlet articoli = 0;\nwhile (true) {\n  const testo = prompt("Prezzo (0 per finire)");\n  if (testo === null) break;\n  const prezzo = Number(testo.replace(",", "."));\n  if (Number.isNaN(prezzo) || prezzo < 0) continue;\n  if (prezzo === 0) break;\n  totale += prezzo;\n  articoli++;\n}\n\nconst s = sconto(totale);\nconsole.log("Articoli".padEnd(10) + String(articoli).padStart(8));\nconsole.log(riga("Totale", totale));\nconsole.log(riga("Sconto", s));\nconsole.log(riga("Da pagare", totale - s));` },
      ],
      x: [
        mc('Scrivi 12 nella finestra di `prompt()`. Che cosa restituisce?', ['Il testo "12"', 'Il numero 12', 'undefined', 'true'], '`prompt()` restituisce sempre testo (o `null` se si annulla). Per farci dei conti bisogna convertirlo con `Number()`.'),
        out(`let totale = 0;\ntotale += 2.5;\ntotale += 1.25;\nconsole.log(totale.toFixed(2));`, ['3.75', '3.8', '3.750', '375'], '`+=` continua a sommare al totale, e `toFixed(2)` lo mostra con esattamente due decimali.'),
        fill(`const prezzo = ___("4.5") * 2;\nconsole.log(prezzo);  // 9`, ['Number', 'String', 'parseInt', 'Boolean'], '`Number("4.5")` dà 4.5. `parseInt` terrebbe solo la parte intera e darebbe 8.'),
        out(`function sconto(totale) {\n  if (totale >= 50) return totale * 0.1;\n  if (totale >= 20) return totale * 0.05;\n  return 0;\n}\nconsole.log(sconto(25), sconto(60), sconto(5));`, ['1.25 6 0', '2.5 6 0', '1.25 0.6 0', '0 6 0'], '25 rientra nella fascia del 5 %, 60 in quella del 10 % e 5 non ha sconto.'),
        out(`let n = 0;\nlet totale = 0;\nwhile (totale < 10) {\n  totale += 4;\n  n++;\n}\nconsole.log(n, totale);`, ['3 12', '2 8', '3 10', '4 16'], 'Il ciclo somma 4 finché il totale è minore di 10: 4, 8 e 12. A 12 la condizione è falsa e i giri sono stati 3.'),
        typ('Scrivi la parola che esce dal ciclo quando il prezzo è 0', `while (true) {\n  const prezzo = Number(prompt("Prezzo"));\n  if (prezzo === 0) ___;\n  totale += prezzo;\n}`, 'break', '`break` termina il ciclo non appena la condizione è vera.'),
        out(`console.log("Total".padEnd(8) + "|" + (9.5).toFixed(2).padStart(6));`, ['Total   |  9.50', 'Total|9.50', '   Total|9.50  ', 'Total   |9.5'], '`padEnd(8)` riempie il testo a destra fino a 8 caratteri; `padStart(6)` riempie a sinistra il numero, già con due decimali.'),
        out(`const conIva = (prezzo) => prezzo * 1.21;\nlet totale = 0;\nfor (let prezzo = 5; prezzo < 30; prezzo += 10) {\n  if (prezzo > 20) continue;\n  totale += prezzo;\n}\nconsole.log(totale, conIva(totale).toFixed(2), totale >= 20 ? "sconto" : "senza sconto");`, ['20 24.20 sconto', '45 54.45 sconto', '20 24.2 sconto', '20 24.20 senza sconto'], 'Il ciclo passa per 5, 15 e 25; il 25 si salta con `continue`, quindi il totale è 20. Con l’IVA sono 24.20, e siccome arriva a 20 ha lo sconto.'),
      ],
    },
    // Giorno 8
    {
      id: 'js-arrays',
      t: 'Array',
      d: 'Liste di valori: creare, leggere, aggiungere, togliere, cercare, copiare e ordinare.',
      guide: [
        { h: 'Creare e accedere', p: [
          'Un array è una lista ordinata di valori tra parentesi quadre: `const voti = [7, 9, 4]`. Può mescolare tipi, anche se di solito sono tutti uguali.',
          'Gli indici iniziano da 0: il primo elemento è `voti[0]` e l’ultimo `voti[voti.length - 1]` o, più breve, `voti.at(-1)`. Leggere un indice che non esiste dà `undefined`, non un errore.' ],
          code: `const frutti = ["pera", "uva", "kiwi"];\nconsole.log(frutti[0]);       // pera\nconsole.log(frutti.length);   // 3\nconsole.log(frutti.at(-1));   // kiwi\nconsole.log(frutti[10]);      // undefined` },
        { h: 'Aggiungere e togliere elementi', p: [
          '`push` aggiunge alla fine e `pop` toglie l’ultimo. `unshift` aggiunge all’inizio e `shift` toglie il primo.',
          '`splice(inizio, quanti, ...nuovi)` elimina o inserisce in qualsiasi posizione. Tutti questi metodi modificano l’array originale.' ],
          code: `const compiti = ["spesa", "studiare"];\ncompiti.push("correre");      // ["spesa", "studiare", "correre"]\ncompiti.unshift("svegliarsi"); // ["svegliarsi", "spesa", "studiare", "correre"]\ncompiti.pop();               // toglie "correre"\ncompiti.splice(1, 1);        // toglie "spesa"\nconsole.log(compiti);        // ["svegliarsi", "studiare"]` },
        { h: 'Cercare, copiare e unire', p: [
          '`indexOf` restituisce la posizione di un valore (o -1 se non c’è) e `includes` restituisce true o false. `slice(inizio, fine)` copia un pezzo senza includere la fine.',
          '`join(separatore)` unisce gli elementi in un testo e `concat` (o lo spread `[...a, ...b]`) unisce array. Questi metodi non modificano l’originale.' ],
          code: `const nums = [10, 20, 30, 40];\nconsole.log(nums.indexOf(30));    // 2\nconsole.log(nums.includes(50));   // false\nconsole.log(nums.slice(1, 3));    // [20, 30]\nconsole.log(nums.join(" | "));    // 10 | 20 | 30 | 40` },
        { h: 'Ordinare e i riferimenti', p: [
          '`sort()` senza argomenti ordina come testo: `[3, 1, 10].sort()` dà `[1, 10, 3]`. Per i numeri passa una funzione: `sort((a, b) => a - b)`.',
          'Un array salvato in una `const` non si può riassegnare, ma si può modificare dentro. E con `const b = a` non copi: entrambe le variabili puntano allo stesso array. Per copiare usa `[...a]`.' ],
          code: `const prezzi = [30, 5, 120];\nprezzi.sort((a, b) => a - b);\nconsole.log(prezzi);  // [5, 30, 120]\n\nconst a = [1, 2];\nconst b = a;       // stessa lista\nconst c = [...a];  // copia\nb.push(3);\nconsole.log(a, c); // [1, 2, 3] [1, 2]` },
        { h: 'Esempio reale: la lista della spesa', real: true, p: [
          'Una lista della spesa è un array che cresce e si accorcia. Prima di aggiungere controlliamo che non sia ripetuto, e togliamo ciò che abbiamo già comprato.' ],
          code: `const spesa = ["latte", "pane"];\nspesa.push("uova");\nif (!spesa.includes("caffè")) spesa.push("caffè");\nspesa.splice(spesa.indexOf("pane"), 1);  // il pane l’abbiamo già comprato\nconsole.log(spesa.length, spesa.join(", "));  // 3 latte, uova, caffè` },
      ],
      x: [
        out(`const frutti = ["pera", "uva"];\nfrutti.push("kiwi");\nconsole.log(frutti.length);`, ['3', '2', 'kiwi', 'Errore'], '`push` aggiunge alla fine e la dimensione diventa 3.'),
        ord('Aggiungi il 4 alla fine dell’array nums', ['nums', '.', 'push', '(', '4', ')'], ['append', 'add'], 'Gli array di JavaScript usano `push`. `append` è di Python.'),
        fill(`const voti = [7, 9, 4];\nconst ultimo = voti[voti.___ - 1];`, ['length', 'size', 'count', 'length()'], '`length` è una proprietà, non un metodo: va senza parentesi. L’ultimo indice è `length - 1`.'),
        out(`const a = [1, 2, 3];\nconsole.log(a.indexOf(2), a.includes(5));`, ['1 false', '2 false', '1 true', '-1 false'], 'Il 2 è all’indice 1 e il 5 non c’è.'),
        out(`const a = [1, 2, 3, 4, 5];\nconsole.log(a.slice(1, 3));`, ['[2, 3]', '[1, 2, 3]', '[2, 3, 4]', '[1, 2]'], '`slice(inizio, fine)` include l’inizio ma non la fine, e non modifica l’originale.'),
        out(`console.log([3, 1, 10].sort());`, ['[1, 10, 3]', '[1, 3, 10]', '[10, 3, 1]', '[3, 1, 10]'], 'Senza funzione di confronto, `sort` ordina come testo e "10" va prima di "3". Usa `sort((a, b) => a - b)` per i numeri.'),
        out(`const a = [1, 2, 3];\nconst b = a;\nb.pop();\nconsole.log(a);`, ['[1, 2]', '[1, 2, 3]', '[3]', 'Errore'], '`b` non è una copia: punta allo stesso array di `a`.'),
        out(`const coda = ["Ana", "Leo", "Eva"];\ncoda.push("Sol");\nconst servito = coda.shift();\ncoda.splice(1, 1, "Iker");\nconsole.log(servito, coda);`, ['Ana ["Leo", "Iker", "Sol"]', 'Sol ["Ana", "Iker", "Eva"]', 'Ana ["Leo", "Iker", "Eva", "Sol"]', 'Ana ["Iker", "Eva", "Sol"]'], '`shift` toglie "Ana" dall’inizio; resta ["Leo", "Eva", "Sol"] e `splice(1, 1, "Iker")` sostituisce "Eva" con "Iker".'),
      ],
    },
    // Giorno 9
    {
      id: 'js-objects',
      t: 'Oggetti',
      d: 'Raggruppare dati con un nome: proprietà, metodi, this, scorrere gli oggetti e copiarli.',
      guide: [
        { h: 'Creare oggetti e leggere proprietà', p: [
          'Un oggetto raggruppa dati correlati in coppie chiave-valore: `const user = { nome: "Ana", eta: 30 }`. È la struttura più usata in JavaScript.',
          'Leggi una proprietà con il punto (`user.nome`) o con le parentesi quadre (`user["nome"]`). Le parentesi servono quando la chiave è in una variabile o contiene spazi.' ],
          code: `const user = { nome: "Ana", eta: 30, "città natale": "Bari" };\nconsole.log(user.nome);             // Ana\nconsole.log(user["città natale"]);  // Bari\n\nconst campo = "eta";\nconsole.log(user[campo]);           // 30\nconsole.log(user.email);            // undefined` },
        { h: 'Aggiungere, modificare ed eliminare', p: [
          'Assegnare una proprietà che non esiste la crea; assegnarne una che esiste la modifica. `delete obj.chiave` la elimina.',
          'Per sapere se una proprietà esiste usa `"chiave" in obj`. Controllare `obj.chiave` non basta: la proprietà potrebbe esistere con valore `0` o `""`.' ],
          code: `const auto = { marca: "Seat" };\nauto.colore = "rosso";   // aggiunge\nauto.marca = "Fiat";     // modifica\ndelete auto.colore;      // elimina\nconsole.log(auto);       // { marca: "Fiat" }\nconsole.log("colore" in auto);  // false` },
        { h: 'Metodi e this', p: [
          'Una funzione salvata in un oggetto si chiama metodo. Dentro un metodo, `this` è l’oggetto che lo chiama, ed è così che accede alle proprie proprietà.',
          'Attenzione: le funzioni freccia non hanno un proprio `this`. Per i metodi usa la forma breve `nome() { ... }`.' ],
          code: 'const conto = {\n  titolare: "Leo",\n  saldo: 50,\n  versa(importo) {\n    this.saldo += importo;\n    return `${this.titolare}: ${this.saldo} €`;\n  },\n};\nconsole.log(conto.versa(20));  // Leo: 70 €' },
        { h: 'Scorrere e copiare oggetti', p: [
          '`Object.keys(obj)` restituisce le chiavi, `Object.values(obj)` i valori e `Object.entries(obj)` coppie `[chiave, valore]`, ideali per `for...of`.',
          'Gli oggetti si assegnano per riferimento, come gli array. Copia con `{ ...obj }` (copia superficiale) o `structuredClone(obj)` (copia profonda, oggetti annidati compresi).' ],
          code: `const prezzi = { pane: 1.2, latte: 0.9 };\nfor (const [prodotto, prezzo] of Object.entries(prezzi)) {\n  console.log(prodotto, prezzo);\n}\n// pane 1.2\n// latte 0.9\n\nconst copia = { ...prezzi };\ncopia.pane = 2;\nconsole.log(prezzi.pane);  // 1.2, l’originale non cambia` },
        { h: 'Esempio reale: totale di un ordine', real: true, p: [
          'In un negozio, un ordine è un oggetto con le quantità per prodotto, accanto a una tabella di prezzi. Scorrendo le voci calcoliamo l’importo.' ],
          code: `const ordine = {\n  cliente: "Ana",\n  prodotti: { maglietta: 2, cappello: 1 },\n};\nconst prezzi = { maglietta: 15, cappello: 9 };\nlet totale = 0;\nfor (const [prodotto, quantita] of Object.entries(ordine.prodotti)) {\n  totale += quantita * prezzi[prodotto];\n}\nconsole.log(ordine.cliente, "paga", totale);  // Ana paga 39` },
      ],
      x: [
        fill(`const user = { nome: "Sol" };\nconsole.log(user___);`, ['.nome', '->nome', '::nome', '(nome)'], 'Si accede con il punto o con le parentesi quadre: `user["nome"]`.'),
        out(`const p = { nome: "Ana" };\np.eta = 30;\nconsole.log(Object.keys(p));`, ['["nome", "eta"]', '["Ana", 30]', '2', '{ nome, eta }'], '`Object.keys` restituisce i nomi delle proprietà nell’ordine di creazione.'),
        mc('Cosa restituisce `Object.entries({ a: 1, b: 2 })`?', ['[["a", 1], ["b", 2]]', '["a", "b"]', '[1, 2]', '{ a: 1, b: 2 }'], 'Restituisce un array di coppie `[chiave, valore]`, perfetto da scorrere con `for...of`.'),
        out(`const p = { a: 1 };\nconst q = p;\nq.a = 5;\nconsole.log(p.a);`, ['5', '1', 'undefined', 'Errore'], 'Gli oggetti si assegnano per riferimento: `p` e `q` sono lo stesso oggetto.'),
        out(`const o = { a: 1 };\nconsole.log("a" in o, o.b);`, ['true undefined', 'true null', 'false undefined', 'Errore'], '`in` controlla se la proprietà esiste; leggerne una che non esiste dà `undefined`.'),
        out(`const auto = {\n  marca: "Seat",\n  info() { return "Marca: " + this.marca; }\n};\nconsole.log(auto.info());`, ['Marca: Seat', 'Marca: undefined', 'Marca: this.marca', 'Errore'], 'Dentro un metodo, `this` è l’oggetto che lo chiama.'),
        out(`const chiave = "colore";\nconst o = { [chiave]: "rosso" };\nconsole.log(o.colore, o.chiave);`, ['rosso undefined', 'undefined rosso', 'rosso rosso', 'Errore'], '`[chiave]` usa il valore della variabile ("colore") come nome della proprietà; non esiste nessuna proprietà chiamata "chiave".'),
        out(`const magazzino = { mele: 4, pere: 0, uva: 12 };\nmagazzino.kiwi = 3;\ndelete magazzino.pere;\nlet totale = 0;\nfor (const k in magazzino) totale += magazzino[k];\nconsole.log(Object.keys(magazzino).length, totale);`, ['3 19', '4 19', '3 16', '4 7'], 'Dopo aver aggiunto i kiwi e tolto le pere restano 3 chiavi: mele, uva e kiwi. 4 + 12 + 3 = 19.'),
      ],
    },
    // Giorno 10
    {
      id: 'js-higher-order',
      t: 'Trasformare gli array',
      d: 'Passare funzioni ad altre funzioni: forEach, map, filter, find, reduce, some, every e sort.',
      guide: [
        { h: 'Le funzioni sono valori', p: [
          'In JavaScript le funzioni sono valori: si salvano in variabili, si passano come argomento e si restituiscono. Una funzione di ordine superiore è quella che riceve o restituisce un’altra funzione.',
          'La funzione che passi come argomento si chiama callback. Nota che si passa senza parentesi: `applica(doppio)` passa la funzione; `applica(doppio())` passerebbe il suo risultato.' ],
          code: `function applica(fn, valore) {\n  return fn(valore);\n}\nconst doppio = (n) => n * 2;\nconsole.log(applica(doppio, 5));         // 10\nconsole.log(applica((n) => n + 1, 5));   // 6` },
        { h: 'forEach e map', p: [
          '`forEach` esegue il callback con ogni elemento e non restituisce nulla: usalo per effetti come mostrare a schermo.',
          '`map` crea un nuovo array della stessa dimensione con ogni elemento trasformato. L’originale non cambia. Errore tipico: dimenticare il `return` quando il callback ha le graffe.' ],
          code: `const prezzi = [10, 20, 30];\nprezzi.forEach((p, i) => console.log(i, p));\n// 0 10\n// 1 20\n// 2 30\nconst conTassa = prezzi.map((p) => p * 1.5);\nconsole.log(conTassa);  // [15, 30, 45]` },
        { h: 'filter, find e findIndex', p: [
          '`filter` restituisce un nuovo array con gli elementi che soddisfano la condizione (il callback restituisce true).',
          '`find` restituisce il primo elemento che la soddisfa, o `undefined`; `findIndex` restituisce la sua posizione, o -1.' ],
          code: `const eta = [12, 25, 17, 40];\nconsole.log(eta.filter((e) => e >= 18));    // [25, 40]\nconsole.log(eta.find((e) => e >= 18));      // 25\nconsole.log(eta.findIndex((e) => e > 50));  // -1` },
        { h: 'reduce, some, every e sort', p: [
          '`reduce((accumulato, elemento) => ..., iniziale)` combina tutto l’array in un solo valore: una somma, un massimo, un oggetto di conteggi. Indica sempre il valore iniziale.',
          '`some` dice se almeno uno soddisfa la condizione ed `every` se la soddisfano tutti. `sort` accetta un callback che confronta due elementi: negativo se `a` va prima, positivo se va dopo.',
          'Questi metodi si concatenano: ognuno restituisce un array su cui si applica il successivo.' ],
          code: `const nums = [4, 8, 15];\nconsole.log(nums.reduce((acc, n) => acc + n, 0));  // 27\nconsole.log(nums.some((n) => n > 10));             // true\nconsole.log(nums.every((n) => n % 2 === 0));       // false\nconsole.log([...nums].sort((a, b) => b - a));      // [15, 8, 4]` },
        { h: 'Esempio reale: report degli ordini', real: true, p: [
          'Con `filter`, `map` e `reduce` puoi riassumere dati come in un foglio di calcolo: quanto è stato incassato e chi deve ancora pagare.' ],
          code: `const ordini = [\n  { cliente: "Ana", totale: 120, pagato: true },\n  { cliente: "Leo", totale: 45, pagato: false },\n  { cliente: "Eva", totale: 80, pagato: true },\n];\nconst incassi = ordini\n  .filter((o) => o.pagato)\n  .reduce((somma, o) => somma + o.totale, 0);\nconst inSospeso = ordini.filter((o) => !o.pagato).map((o) => o.cliente);\nconsole.log(incassi, inSospeso);  // 200 ["Leo"]` },
      ],
      x: [
        mc('Cos’è un callback?', ['Una funzione passata come argomento a un’altra', 'Una funzione che chiama se stessa', 'Un errore di una funzione', 'Una variabile globale'], 'La funzione che lo riceve decide quando chiamarlo, come fanno `map` o `addEventListener`.'),
        out(`const nums = [1, 2, 3];\nconsole.log(nums.map((n) => n * 10));`, ['[10, 20, 30]', '[1, 2, 3]', '60', '[10]'], '`map` crea un nuovo array con ogni elemento trasformato.'),
        out(`console.log([5, 12, 8, 20].filter((n) => n > 10));`, ['[12, 20]', '[5, 8]', '2', '[true, false]'], '`filter` tiene gli elementi per cui il callback restituisce true.'),
        fill(`const prodotti = [{ prezzo: 5 }, { prezzo: 9 }];\nconst prezzi = prodotti.___((p) => p.prezzo);  // [5, 9]`, ['map', 'filter', 'forEach', 'reduce'], '`map` trasforma ogni oggetto nel suo prezzo. `forEach` non restituisce nulla.'),
        out(`const totale = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);\nconsole.log(totale);`, ['10', '24', '[1, 2, 3, 4]', '0'], '`reduce` accumula partendo da 0: 0 + 1 + 2 + 3 + 4 = 10.'),
        out(`const nums = [1, 2, 3, 4];\nconsole.log(nums.find((n) => n > 2), nums.some((n) => n > 3));`, ['3 true', '[3, 4] true', '3 false', '4 true'], '`find` restituisce il primo elemento che soddisfa la condizione; `some` indica se almeno uno la soddisfa.'),
        out(`const persone = [{ n: "Ana", e: 30 }, { n: "Leo", e: 8 }, { n: "Eva", e: 45 }];\nconst ordine = persone.sort((a, b) => b.e - a.e).map((p) => p.n);\nconsole.log(ordine.join(", "));`, ['Eva, Ana, Leo', 'Leo, Ana, Eva', 'Ana, Leo, Eva', 'Ana, Eva, Leo'], '`b.e - a.e` ordina dal più grande al più giovane: 45, 30 e 8. Poi `map` tiene i nomi.'),
        out(`const parole = ["blu", "re", "luna", "blu", "re", "blu"];\nconst conta = parole.reduce((acc, p) => {\n  acc[p] = (acc[p] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(conta.blu, Object.keys(conta).length, parole.filter((p) => p.length > 3).length);`, ['3 3 1', '3 6 1', '1 3 1', '3 3 4'], '"blu" compare 3 volte, ci sono 3 parole diverse e solo "luna" ha più di 3 lettere.'),
      ],
    },
    // Giorno 11
    {
      id: 'js-destructuring',
      t: 'Destrutturazione e spread',
      d: 'Estrarre valori da array e oggetti in una riga, valori predefiniti, spread e rest.',
      guide: [
        { h: 'Destrutturare array', p: [
          'La destrutturazione estrae valori da un array e li salva in variabili in una sola riga: `const [a, b] = lista`. Si assegnano per posizione.',
          'Puoi saltare posizioni lasciando un buco tra le virgole. E serve a scambiare due variabili senza una di appoggio: `[a, b] = [b, a]`.' ],
          code: `const colori = ["rosso", "verde", "blu"];\nconst [primo, , terzo] = colori;\nconsole.log(primo, terzo);  // rosso blu\n\nlet a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);  // 2 1` },
        { h: 'Destrutturare oggetti', p: [
          'Con gli oggetti si estrae per nome di proprietà: `const { nome, eta } = utente`. L’ordine non conta.',
          'Puoi rinominare (`{ nome: n }`), dare valori predefiniti che si usano se la proprietà è `undefined` (`{ ruolo = "ospite" }`) ed entrare in oggetti annidati.' ],
          code: `const utente = { nome: "Ana", eta: 31, indirizzo: { citta: "Torino" } };\nconst { nome: n, ruolo = "ospite", indirizzo: { citta } } = utente;\nconsole.log(n, ruolo, citta);  // Ana ospite Torino` },
        { h: 'Spread: espandere', p: [
          'I tre punti `...` davanti a un array o a un oggetto lo espandono. Servono a copiare, unire e passare argomenti: `Math.max(...numeri)`.',
          'Negli oggetti, se una proprietà si ripete vince l’ultima. Attenzione: la copia è superficiale; gli oggetti interni restano condivisi.' ],
          code: `const a = [1, 2];\nconst b = [3, 4];\nconsole.log([...a, ...b]);        // [1, 2, 3, 4]\nconsole.log(Math.max(...b));      // 4\n\nconst base = { tema: "chiaro", lingua: "it" };\nconst mio = { ...base, tema: "scuro" };\nconsole.log(mio);  // { tema: "scuro", lingua: "it" }` },
        { h: 'Rest: raccogliere ciò che resta', p: [
          'Gli stessi tre punti sul lato sinistro, o nei parametri, fanno il contrario: raccolgono il resto in un array o in un oggetto.',
          'Una funzione può destrutturare direttamente il suo parametro. È il modo abituale di ricevere opzioni con nome e valori predefiniti.' ],
          code: `const [testa, ...coda] = [10, 20, 30];\nconsole.log(testa, coda);  // 10 [20, 30]\n\nconst { id, ...dati } = { id: 7, nome: "Leo", eta: 25 };\nconsole.log(dati);  // { nome: "Leo", eta: 25 }\n\nfunction creaBottone({ testo, colore = "blu" }) {\n  return testo + " (" + colore + ")";\n}\nconsole.log(creaBottone({ testo: "Invia" }));  // Invia (blu)` },
        { h: 'Esempio reale: preferenze dell’utente', real: true, p: [
          'Un’applicazione ha impostazioni predefinite e ogni utente salva solo quelle che ha cambiato. Con lo spread si combinano senza toccare gli originali e con la destrutturazione si leggono comodamente.' ],
          code: `const predefinite = { tema: "chiaro", lingua: "it", notifiche: true };\nconst salvate = { tema: "scuro" };\n\nconst impostazioni = { ...predefinite, ...salvate };\nconst { tema, lingua, ...resto } = impostazioni;\n\nconsole.log(tema, lingua);       // scuro it\nconsole.log(resto);              // { notifiche: true }\nconsole.log(predefinite.tema);   // chiaro: l’originale non cambia` },
      ],
      x: [
        out(`const [a, , c] = [10, 20, 30];\nconsole.log(a, c);`, ['10 30', '10 20', '20 30', 'undefined'], 'Il buco tra le virgole salta la seconda posizione.'),
        fill(`const lista = [1, 2, 3];\nconst copia = [___lista];`, ['...', '..', '*', '&'], 'Lo spread `...` espande gli elementi dentro un nuovo array.'),
        out(`const { x, y = 5 } = { x: 1 };\nconsole.log(x + y);`, ['6', '1', 'NaN', 'undefined'], '`y` non esiste nell’oggetto, quindi prende il valore predefinito: 1 + 5 = 6.'),
        out(`const base = { colore: "rosso", taglia: "M" };\nconst nuovo = { ...base, taglia: "L" };\nconsole.log(nuovo.taglia, base.taglia);`, ['L M', 'L L', 'M M', 'M L'], 'Nel nuovo oggetto vince l’ultima `taglia`. L’originale non viene modificato.'),
        typ('Scambia i valori di a e b', `let a = 1, b = 2;\n[a, b] = [___];`, ['b, a', 'b,a'], 'L’array a destra si crea con i valori attuali e poi si distribuisce in ordine.'),
        mc('Qual è la differenza tra spread e rest?', ['Lo spread espande elementi; il rest raccoglie quelli che avanzano in un array o in un oggetto', 'Sono la stessa cosa con nomi diversi', 'Lo spread funziona solo con oggetti e il rest con array', 'Il rest fa una copia profonda'], 'Si scrivono uguali (`...`). Cambia il lato: a destra espande, a sinistra o nei parametri raccoglie.'),
        out(`const [prima, ...resto] = "ciao";\nconsole.log(prima, resto.length);`, ['c 3', 'c 4', 'ciao 0', 'Errore'], 'I testi sono iterabili: `prima` è "c" e `resto` è ["i", "a", "o"].'),
        out(`const ordine = { id: 7, cliente: { nome: "Ana", citta: "Lima" }, articoli: [3, 5, 2] };\nconst { cliente: { citta }, articoli: [primo, ...altri], ...resto } = ordine;\nconsole.log(citta, altri.length, Math.max(primo, ...altri), Object.keys(resto).join());`, ['Lima 2 5 id', 'Lima 3 5 id', 'Lima 2 5 id,cliente,articoli', 'Ana 2 5 id'], '`citta` esce dall’oggetto annidato. `altri` è [5, 2]. Il massimo tra 3, 5 e 2 è 5. In `resto` resta solo `id`, perché `cliente` e `articoli` sono già stati estratti.'),
      ],
    },
    // Giorno 12
    {
      id: 'js-sets-maps',
      t: 'Set e Map',
      d: 'Valori senza ripetizioni con Set e dizionari con chiavi di qualsiasi tipo con Map.',
      guide: [
        { h: 'Set: valori unici', p: [
          'Un `Set` è una collezione in cui ogni valore compare una sola volta. Se ne aggiungi uno ripetuto, viene semplicemente ignorato.',
          'Metodi: `add`, `has`, `delete` e `clear`; `size` (senza parentesi) dice quanti elementi ha. Controllare con `has` è molto più veloce di `includes` nelle liste grandi.' ],
          code: `const etichette = new Set(["js", "web"]);\netichette.add("js");      // ripetuto: non cambia nulla\netichette.add("node");\nconsole.log(etichette.size);       // 3\nconsole.log(etichette.has("web")); // true\netichette.delete("web");\nconsole.log([...etichette]);       // ["js", "node"]` },
        { h: 'Operazioni tra insiemi', p: [
          'Il trucco più usato: `[...new Set(array)]` elimina i duplicati di un array mantenendo l’ordine della prima comparsa.',
          'Unione: `new Set([...a, ...b])`. Intersezione: `[...a].filter((x) => b.has(x))`. Differenza: `[...a].filter((x) => !b.has(x))`.' ],
          code: `const email = ["ana@x.com", "leo@x.com", "ana@x.com"];\nconst uniche = [...new Set(email)];\nconsole.log(uniche);  // ["ana@x.com", "leo@x.com"]` },
        { h: 'Map: chiavi di qualsiasi tipo', p: [
          'Una `Map` associa chiavi a valori, come un oggetto, ma le chiavi possono essere di qualsiasi tipo (numeri, oggetti...) e mantiene l’ordine di inserimento.',
          'Metodi: `set(chiave, valore)`, `get(chiave)`, `has`, `delete` e la proprietà `size`. `set` restituisce la Map stessa, quindi si può concatenare.' ],
          code: `const scorte = new Map();\nscorte.set("pane", 4).set("latte", 0);\nconsole.log(scorte.get("pane"));  // 4\nconsole.log(scorte.get("riso"));  // undefined\nconsole.log(scorte.size);         // 2` },
        { h: 'Scorrere e scegliere tra Map e oggetto', p: [
          '`for (const [chiave, valore] of mappa)` scorre una Map. Ha anche `keys()`, `values()` ed `entries()`. `new Map(Object.entries(obj))` e `Object.fromEntries(mappa)` convertono tra le due.',
          'Usa un oggetto per dati con forma fissa (un utente con nome ed età). Usa una Map quando le chiavi arrivano durante l’esecuzione, si aggiungono e tolgono spesso o non sono testi.' ],
          code: `const voti = new Map([["Ana", 9], ["Leo", 6]]);\nfor (const [studente, voto] of voti) {\n  console.log(studente, voto);\n}\n// Ana 9\n// Leo 6\nconsole.log(Object.fromEntries(voti));  // { Ana: 9, Leo: 6 }` },
        { h: 'Esempio reale: contare i voti', real: true, p: [
          'In un sondaggio arrivano voti ripetuti. Una Map conta quanti ne ha ogni opzione e un Set dice quante opzioni diverse ci sono state.' ],
          code: `const voti = ["Ana", "Leo", "Ana", "Eva", "Ana", "Leo", "Sol"];\nconst conteggio = new Map();\nfor (const v of voti) {\n  conteggio.set(v, (conteggio.get(v) || 0) + 1);\n}\nconsole.log(conteggio.get("Ana"), conteggio.size);  // 3 4\nconsole.log(new Set(voti).size);                    // 4` },
      ],
      x: [
        out(`const s = new Set([1, 2, 2, 3]);\nconsole.log(s.size);`, ['3', '4', '2', 'undefined'], 'Il Set ignora il 2 ripetuto.'),
        fill(`const s = new Set(["js"]);\nconsole.log(s.___("js"));  // true`, ['has', 'includes', 'contains', 'get'], '`has` controlla se un valore è nel Set. `includes` è degli array.'),
        mc('Che vantaggio ha una Map rispetto a un oggetto normale?', ['Ammette chiavi di qualsiasi tipo e mantiene l’ordine di inserimento', 'È più breve da scrivere', 'Si converte da sola in JSON', 'Nessuno'], 'Un oggetto ammette solo chiavi di tipo testo o simbolo.'),
        out(`console.log([...new Set([3, 1, 3, 2, 1])]);`, ['[3, 1, 2]', '[1, 2, 3]', '[3, 1, 3, 2, 1]', '3'], 'Il Set rispetta l’ordine della prima comparsa ed elimina i ripetuti; non ordina.'),
        out(`const m = new Map();\nm.set("a", 1).set("b", 2);\nconsole.log(m.get("b"), m.get("c"));`, ['2 undefined', '2 null', '1 undefined', 'Errore'], '`set` restituisce la Map stessa, quindi si concatena. Una chiave che non esiste dà `undefined`.'),
        out(`const m = new Map([["x", 1], ["y", 2]]);\nconsole.log([...m.keys()]);`, ['["x", "y"]', '[1, 2]', '[["x", 1], ["y", 2]]', '2'], '`keys()` restituisce le chiavi in ordine di inserimento.'),
        out(`const s = new Set([1, 2, 3]);\ns.add(2);\ns.delete(1);\nconsole.log(s.size, s.has(1));`, ['2 false', '3 false', '3 true', '2 true'], 'Aggiungere il 2 non cambia nulla perché c’era già; tolto l’1 restano 2 elementi.'),
        out(`const a = new Set(["js", "py", "go"]);\nconst b = new Set(["py", "rs", "js"]);\nconst comuni = [...a].filter((x) => b.has(x));\nconst tutti = new Set([...a, ...b]);\nconsole.log(comuni, tutti.size);`, ['["js", "py"] 4', '["py", "js"] 4', '["js", "py"] 6', '["go", "rs"] 4'], 'L’intersezione segue l’ordine di `a`: "js" e "py". L’unione senza ripetuti ha js, py, go e rs.'),
      ],
    },
    // Giorno 13
    {
      id: 'js-regex',
      t: 'Testo, date e regex',
      d: 'Cercare, validare e sostituire testo con le espressioni regolari, e lavorare con le date con Date.',
      guide: [
        { h: 'Cos’è un’espressione regolare', p: [
          'Un’espressione regolare descrive uno schema di testo. Si scrive tra barre, `/schema/modificatori`, oppure con `new RegExp("schema")` quando lo schema si costruisce a partire da una variabile.',
          '`regex.test(testo)` restituisce `true` se lo schema compare nel testo. È il modo più rapido per validare.' ],
          code: `const haNumero = /\\d/;\nconsole.log(haNumero.test("password1"));  // true\nconsole.log(haNumero.test("password"));   // false` },
        { h: 'Classi di caratteri e quantificatori', p: [
          '`\\d` è una cifra, `\\w` una lettera, cifra o trattino basso, `\\s` uno spazio bianco e `.` qualsiasi carattere. `[aeiou]` accetta uno della lista e `[^0-9]` qualsiasi carattere che non sia una cifra.',
          'I quantificatori dicono quante volte: `+` una o più, `*` zero o più, `?` zero o una, `{3}` esattamente tre e `{2,4}` tra due e quattro.',
          '`^` indica l’inizio del testo e `$` la fine. Senza di essi, lo schema può comparire in qualsiasi punto.' ],
          code: `const cap = /^\\d{5}$/;           // esattamente 5 cifre\nconsole.log(cap.test("00184"));   // true\nconsole.log(cap.test("0018"));    // false\nconsole.log(cap.test("001845"));  // false` },
        { h: 'Modificatori, match e gruppi', p: [
          'I modificatori vanno dopo l’ultima barra: `i` ignora maiuscole e minuscole, `g` cerca tutte le corrispondenze e `m` fa funzionare `^` e `$` riga per riga.',
          '`testo.match(/.../g)` restituisce un array con tutte le corrispondenze, o `null` se non ce ne sono. Le parentesi creano gruppi che si possono recuperare separatamente; con `(?<nome>...)` hanno un nome.' ],
          code: `console.log("a1 b22 c333".match(/\\d+/g));  // ["1", "22", "333"]\n\nconst m = "2024-05-17".match(/(?<anno>\\d{4})-(?<mese>\\d{2})/);\nconsole.log(m.groups.anno, m.groups.mese);  // 2024 05` },
        { h: 'replace e split', p: [
          '`replace(regex, nuovo)` sostituisce la prima corrispondenza, o tutte se l’espressione ha `g`. Nel testo nuovo, `$1` è il primo gruppo.',
          'Anche `split` accetta un’espressione regolare, utile quando il separatore varia.' ],
          code: `console.log("1-2-3".replace(/-/g, "+"));                    // 1+2+3\nconsole.log("Ana Ruiz".replace(/(\\w+) (\\w+)/, "$2, $1"));   // Ruiz, Ana\nconsole.log("uno, due,tre".split(/,\\s*/));                 // ["uno", "due", "tre"]` },
        { h: 'Le date con Date', p: [
          '`new Date()` crea la data e l’ora attuali; `new Date(2024, 0, 15)` crea una data precisa. Attenzione: i mesi iniziano da 0 (gennaio) e finiscono a 11 (dicembre).',
          '`getFullYear()`, `getMonth()`, `getDate()` (giorno del mese) e `getDay()` (giorno della settimana, 0 è domenica) leggono le sue parti. Sottrarre due date dà la differenza in millisecondi.' ],
          code: `const d = new Date(2024, 0, 15);  // 15 gennaio 2024\nconsole.log(d.getFullYear(), d.getMonth(), d.getDate());  // 2024 0 15\nconsole.log(d.getDay());  // 1 (lunedì)` },
        { h: 'Esempio reale: quanti giorni mancano alle vacanze', real: true, p: [
          'Un conto alla rovescia è un classico nei siti di eventi. Sottraiamo le date e convertiamo i millisecondi in giorni.',
          '`Math.round` evita errori di un’ora quando c’è il cambio dell’ora tra le due date.' ],
          code: `const oggi = new Date(2024, 5, 1);     // 1 giugno\nconst viaggio = new Date(2024, 6, 15); // 15 luglio\nconst MS_AL_GIORNO = 1000 * 60 * 60 * 24;\nconst giorni = Math.round((viaggio - oggi) / MS_AL_GIORNO);\nconsole.log("Mancano", giorni, "giorni");  // Mancano 44 giorni` },
      ],
      x: [
        out(`console.log(/^\\d{3}$/.test("123"), /^\\d{3}$/.test("1234"));`, ['true false', 'true true', 'false false', 'false true'], 'Con `^` e `$` tutto il testo deve avere esattamente tre cifre.'),
        fill(`const r = /ciao/___;\nconsole.log(r.test("CIAO"));  // true`, ['i', 'g', 'm', 'u'], 'Il modificatore `i` ignora la differenza tra maiuscole e minuscole.'),
        out(`console.log("a1b22c333".match(/\\d+/g));`, ['["1", "22", "333"]', '["1"]', '["1", "2", "2", "3", "3", "3"]', 'null'], '`\\d+` prende tutte le cifre consecutive che può, e `g` restituisce tutte le corrispondenze.'),
        out(`console.log("2024-05-01".replace(/-/g, "/"));`, ['2024/05/01', '2024/05-01', '2024-05-01', '/'], 'Con `g` si sostituiscono tutti i trattini, non solo il primo.'),
        mc('Cosa rappresenta `\\s` in un’espressione regolare?', ['Uno spazio bianco: spazio, tabulazione o a capo', 'La lettera s', 'Qualsiasi carattere', 'Una cifra'], 'Il suo opposto è `\\S`: qualsiasi carattere che non sia uno spazio.'),
        out(`const d = new Date(2024, 0, 15);\nconsole.log(d.getMonth());`, ['0', '1', '15', '2024'], 'In `Date` i mesi iniziano da 0: gennaio è 0.'),
        out(`console.log("uno, due,tre".split(/,\\s*/));`, ['["uno", "due", "tre"]', '["uno", " due", "tre"]', '["uno, due,tre"]'], 'Il separatore è una virgola seguita da zero o più spazi, quindi nessun pezzo conserva spazi.'),
        out(`const testo = "Ordini: A-12, B-7, A-30, C-5";\nconst codici = testo.match(/A-\\d+/g);\nconst somma = codici.map((c) => Number(c.slice(2))).reduce((a, b) => a + b, 0);\nconsole.log(codici.length, somma, /c-5/i.test(testo));`, ['2 42 true', '2 42 false', '4 54 true', '3 42 true'], 'Solo "A-12" e "A-30" iniziano con A. `slice(2)` toglie "A-": 12 + 30 = 42. Con `i`, "c-5" trova "C-5".'),
      ],
    },
    // Giorno 14
    {
      id: 'js-workshop-contacts',
      t: 'Il laboratorio di Kibi: la rubrica dei clienti',
      d: 'Progetto della settimana 2: salvare i clienti in un array di oggetti, cercarli, validarli e riassumerli con map, filter e reduce.',
      guide: [
        { h: 'L’incarico', p: [
          'Il negozio di Kibi ha ormai clienti abituali e vuole ricordarli: nome, telefono, quanti acquisti hanno fatto e da quando sono clienti, per premiare i più fedeli.',
          'Questo laboratorio mette insieme la settimana 2: array, oggetti, metodi che trasformano gli array, destrutturazione, spread, Map, date ed espressioni regolari.' ] },
        { h: 'Passo 1: i dati', p: [
          'Ogni cliente è un oggetto con le stesse proprietà, e tutti stanno in un array. È come una tabella: l’array contiene le righe e le proprietà sono le colonne.',
          'Per leggere un dato si combinano i due accessi: prima la posizione nell’array, poi la proprietà.' ],
          code: `const clienti = [\n  { nome: "Lucía", telefono: "600111222", acquisti: 12, dal: "2025-01-10" },\n  { nome: "Marco", telefono: "600333444", acquisti: 3, dal: "2025-06-02" },\n  { nome: "Aiko", telefono: "600555666", acquisti: 7, dal: "2026-02-20" },\n];\nconsole.log(clienti.length, clienti[0].nome);  // 3 Lucía` },
        { h: 'Passo 2: cercare e aggiungere senza duplicati', p: [
          '`find()` restituisce il primo cliente che corrisponde, o `undefined` se non ce n’è nessuno. Confrontiamo in minuscolo perché «aiko» trovi «Aiko».',
          '`aggiungi()` controlla con un’espressione regolare che il telefono abbia 9 cifre e restituisce un array nuovo con lo spread, senza modificare l’originale. Se qualcosa non va, restituisce la lista com’era.' ],
          code: `const cerca = (lista, nome) =>\n  lista.find((c) => c.nome.toLowerCase() === nome.toLowerCase());\n\nfunction aggiungi(lista, nome, telefono) {\n  if (!/^\\d{9}$/.test(telefono) || cerca(lista, nome)) return lista;\n  const dal = new Date().toISOString().slice(0, 10);\n  return [...lista, { nome, telefono, acquisti: 0, dal }];\n}\n\nconsole.log(cerca(clienti, "aiko").telefono);  // 600555666` },
        { h: 'Passo 3: filtrare e riassumere', p: [
          '`filter()` tiene i clienti fedeli e `map()` ne prende solo il nome. `reduce()` scorre l’array accumulando un risultato: qui, il totale degli acquisti.',
          'Nel parametro di `reduce` destrutturiamo `{ acquisti }` per non scrivere `c.acquisti`.' ],
          code: `const fedeli = clienti.filter((c) => c.acquisti >= 5).map((c) => c.nome);\nconsole.log(fedeli.join(", "));  // Lucía, Aiko\n\nconst totale = clienti.reduce((somma, { acquisti }) => somma + acquisti, 0);\nconsole.log(totale);  // 22` },
        { h: 'Passo 4: un indice per telefono', p: [
          'Se cerchi spesso per telefono, una `Map` lo trova subito senza scorrere l’array. Si crea a partire da coppie `[chiave, valore]`.',
          'Con `Date` ricaviamo l’anno in cui ogni cliente si è registrato, per sapere da quanto tempo frequenta il negozio.' ],
          code: `const perTelefono = new Map(clienti.map((c) => [c.telefono, c]));\nconsole.log(perTelefono.get("600333444").nome);  // Marco\n\nconst anno = (c) => new Date(c.dal).getFullYear();\nconsole.log(anno(clienti[2]));  // 2026` },
        { h: 'Esempio reale: la scheda di ogni cliente', real: true, p: [
          'Una funzione che riceve un cliente destrutturato e restituisce una riga pronta da mostrare: il livello in base agli acquisti e il telefono raggruppato a tre a tre con `replace` e i gruppi dell’espressione regolare.' ],
          code: `function scheda({ nome, telefono, acquisti }) {\n  const livello = acquisti >= 10 ? "oro" : acquisti >= 5 ? "argento" : "nuovo";\n  const tel = telefono.replace(/(\\d{3})(\\d{3})(\\d{3})/, "$1 $2 $3");\n  return \`\${nome.padEnd(6)} \${tel}  \${livello}\`;\n}\n\nclienti.forEach((c) => console.log(scheda(c)));\n// Lucía  600 111 222  oro\n// Marco  600 333 444  nuovo\n// Aiko   600 555 666  argento` },
      ],
      x: [
        out(`const c = { nome: "Aiko", acquisti: 7 };\nconsole.log(c.acquisti + 1);`, ['8', '71', '7', 'undefined'], '`c.acquisti` è il numero 7; aggiungendo 1 si ottiene 8.'),
        out(`const clienti = [{ n: "Ana" }, { n: "Leo" }];\nconsole.log(clienti[1].n);`, ['Leo', 'Ana', 'undefined', '[object Object]'], '`clienti[1]` è il secondo oggetto e `.n` legge il suo nome.'),
        fill(`const lista = [{ n: "Ana" }];\nconst altra = [___lista, { n: "Eva" }];\nconsole.log(altra.length);  // 2`, ['...', '..', '*', '&'], 'I tre punti dello spread copiano gli elementi di `lista` nel nuovo array.'),
        out(`const clienti = [{ k: 2 }, { k: 5 }];\nconsole.log(clienti.reduce((s, c) => s + c.k, 0));`, ['7', '25', '[2, 5]', 'NaN'], '`reduce` parte da 0 e somma il `k` di ogni cliente: 2 + 5.'),
        out(`const clienti = [{ n: "Ana", k: 9 }, { n: "Leo", k: 2 }, { n: "Eva", k: 5 }];\nconsole.log(clienti.filter((c) => c.k > 4).map((c) => c.n).join(", "));`, ['Ana, Eva', 'Leo', 'Ana, Leo, Eva', '9, 5'], '`filter` tiene i clienti con `k` maggiore di 4 e `map` ne prende il nome.'),
        mc('Perché `aggiungi()` restituisce `[...lista, nuovo]` invece di usare `push`?', ['Per creare un array nuovo senza modificare l’originale', 'Perché gli array non hanno push', 'Perché lo spread è sempre più veloce', 'Per ordinare i clienti'], '`push` cambierebbe l’array ricevuto dalla funzione. Restituirne uno nuovo evita sorprese nel codice che lo usava.'),
        typ('Completa il controllo che il telefono abbia 9 cifre', `const valido = /^\\d{9}$/.___(telefono);`, 'test', '`test()` restituisce `true` se il testo corrisponde all’espressione regolare.'),
        out(`const lista = [{ nome: "Ana", acquisti: 3 }];\nfunction aggiungi(lista, nome) {\n  if (lista.some((c) => c.nome === nome)) return lista;\n  return [...lista, { nome, acquisti: 0 }];\n}\nconst a = aggiungi(lista, "Leo");\nconst b = aggiungi(a, "Ana");\nconsole.log(a.length, b === a, lista.length);`, ['2 true 1', '3 false 2', '2 false 1', '2 true 2'], 'Leo viene aggiunto in un nuovo array di 2 clienti. Ana c’era già, quindi si restituisce lo stesso array (`b === a`). L’originale non cambia.'),
      ],
    },
    // Giorno 15
    {
      id: 'js-dom',
      t: 'Il DOM',
      d: 'La pagina come un albero: selezionare elementi e leggerne il testo, i valori e gli attributi.',
      guide: [
        { h: 'L’albero del documento', p: [
          'Quando il browser carica una pagina, converte l’HTML in un albero di oggetti chiamato DOM (Document Object Model). Ogni tag è un nodo elemento con genitori, figli e fratelli.',
          'Da JavaScript si accede a quell’albero con l’oggetto `document`. Ciò che cambi nel DOM si vede subito nella pagina.' ],
          code: `<!-- index.html -->\n<body>\n  <h1 id="titolo">Il mio negozio</h1>\n  <ul class="prodotti">\n    <li>Tazza</li>\n    <li>Quaderno</li>\n  </ul>\n  <script src="app.js" defer></script>\n</body>` },
        { h: 'Selezionare elementi', p: [
          '`document.querySelector(selettore)` restituisce il primo elemento che corrisponde a un selettore CSS, o `null` se non ce n’è nessuno. `querySelectorAll` li restituisce tutti in una `NodeList`, che si scorre con `forEach` o `for...of`.',
          '`getElementById("id")` è il modo classico di cercare per id. Puoi anche cercare dentro un elemento: `lista.querySelector("li")`.' ],
          code: `const titolo = document.querySelector("#titolo");\nconst voci = document.querySelectorAll(".prodotti li");\nconsole.log(voci.length);  // 2\nvoci.forEach((li) => console.log(li.textContent));\n// Tazza\n// Quaderno\nconsole.log(document.querySelector(".non-esiste"));  // null` },
        { h: 'Leggere contenuto e valori', p: [
          '`textContent` restituisce il testo di un elemento e dei suoi figli, senza tag. `innerHTML` restituisce l’HTML interno, con i tag.',
          'Nei campi dei moduli il dato è in `value` (sempre testo) e nelle caselle di spunta in `checked`.' ],
          code: `<!-- <p id="avviso">Spedizione <b>gratuita</b></p>\n     <input id="eta" value="31"> -->\nconst avviso = document.querySelector("#avviso");\nconsole.log(avviso.textContent);  // Spedizione gratuita\nconsole.log(avviso.innerHTML);    // Spedizione <b>gratuita</b>\nconsole.log(Number(document.querySelector("#eta").value) + 1);  // 32` },
        { h: 'Attributi, dataset e muoversi nell’albero', p: [
          '`getAttribute("href")` legge un attributo. Gli attributi `data-*` si leggono con `dataset`: `data-prezzo` è `el.dataset.prezzo`, sempre come testo.',
          'Per muoversi nell’albero: `parentElement`, `children`, `firstElementChild`, `nextElementSibling` e `closest(selettore)`, che cerca l’antenato più vicino che corrisponde.' ],
          code: `<!-- <li class="prodotto" data-id="7" data-prezzo="12.5"><span>Tazza</span></li> -->\nconst span = document.querySelector(".prodotto span");\nconst li = span.closest(".prodotto");\nconsole.log(li.dataset.id, Number(li.dataset.prezzo) * 2);  // 7 25\nconsole.log(li.children.length);  // 1` },
        { h: 'Esempio reale: riepilogo di una lista di attività', real: true, p: [
          'Un’app di attività mostra nell’intestazione quante ne restano da fare. Le basta leggere il DOM: contare gli elementi e controllarne la classe.' ],
          code: `<!-- <ul id="attivita">\n       <li class="fatta">Comprare il pane</li>\n       <li>Chiamare la banca</li>\n       <li>Studiare JS</li>\n     </ul> -->\nconst attivita = [...document.querySelectorAll("#attivita li")];\nconst daFare = attivita.filter((li) => !li.classList.contains("fatta"));\nconsole.log(daFare.length + " su " + attivita.length + " da fare");  // 2 su 3 da fare\nconsole.log(daFare.map((li) => li.textContent));  // ["Chiamare la banca", "Studiare JS"]` },
      ],
      x: [
        mc('Cosa restituisce `document.querySelector` se non trova nessun elemento?', ['null', 'undefined', 'Un array vuoto', 'Lancia un errore'], 'Per questo conviene controllare il risultato prima di usarlo.'),
        fill(`const titolo = document.___("#titolo");`, ['querySelector', 'getElement', 'select', 'find'], '`querySelector` accetta qualsiasi selettore CSS.'),
        out(`// <ul id="lista"><li>a</li><li class="fatta">b</li><li class="fatta">c</li></ul>\nconst fatte = document.querySelectorAll("#lista .fatta");\nconsole.log(fatte.length, fatte[0].textContent);`, ['2 b', '3 a', '2 c', '1 b'], 'Solo due `li` hanno la classe `fatta`, e il primo contiene "b".'),
        mc('In cosa si differenziano `textContent` e `innerHTML`?', ['textContent dà solo il testo; innerHTML dà anche i tag', 'Sono identici', 'innerHTML funziona solo nei moduli', 'textContent include i commenti'], 'Per leggere o scrivere testo senza interpretare HTML, usa `textContent`.'),
        typ('Leggi ciò che l’utente ha scritto nel campo', `const email = document.querySelector("#email").___;`, 'value', 'Il contenuto di un `input` è in `value` ed è sempre testo.'),
        out(`// <button data-id="42" data-tipo="elimina">X</button>\nconst b = document.querySelector("button");\nconsole.log(b.dataset.id, typeof b.dataset.id);`, ['42 string', '42 number', 'undefined undefined', 'data-id string'], '`dataset` converte `data-id` in `id` e restituisce sempre testo.'),
        ord('Seleziona tutti i paragrafi con la classe nota', ['document', '.querySelectorAll(', '"p.nota"', ')'], ['.getElementById(', '"#nota"'], '`querySelectorAll` con il selettore CSS `p.nota` restituisce tutti quelli che corrispondono.'),
        out(`// <section id="negozio">\n//   <article class="prodotto" data-prezzo="12"><h2>Tazza</h2></article>\n//   <article class="prodotto esaurito" data-prezzo="30"><h2>Lampada</h2></article>\n//   <article class="prodotto" data-prezzo="8"><h2>Quaderno</h2></article>\n// </section>\nconst prodotti = [...document.querySelectorAll("#negozio .prodotto:not(.esaurito)")];\nconst totale = prodotti.reduce((s, p) => s + Number(p.dataset.prezzo), 0);\nconst nomi = prodotti.map((p) => p.querySelector("h2").textContent);\nconsole.log(prodotti.length, totale, nomi.join("+"));`, ['2 20 Tazza+Quaderno', '3 50 Tazza+Lampada+Quaderno', '2 20 Tazza+Lampada', '2 128 Tazza+Quaderno'], '`:not(.esaurito)` scarta la lampada. `Number` converte i prezzi prima di sommare: 12 + 8 = 20. Senza `Number` verrebbero concatenati.'),
      ],
    },
    // Giorno 16
    {
      id: 'js-dom-edit',
      t: 'Modificare la pagina',
      d: 'Cambiare testi, creare e inserire elementi, e modificare classi, stili e attributi.',
      guide: [
        { h: 'Cambiare il contenuto', p: [
          'Assegnare `textContent` sostituisce il testo di un elemento. È l’opzione sicura per mostrare dati che arrivano dall’utente.',
          '`innerHTML` interpreta il testo come HTML. Non usarlo mai con dati dell’utente: qualcuno potrebbe iniettare uno script (attacco XSS).' ],
          code: `const saluto = document.querySelector("#saluto");\nconst nome = "<img src=x onerror=alert(1)>";\n\nsaluto.textContent = "Ciao, " + nome;   // si mostra così com’è, senza pericolo\n// saluto.innerHTML = "Ciao, " + nome;  // eseguirebbe codice!` },
        { h: 'Creare, inserire ed eliminare', p: [
          '`document.createElement("li")` crea un elemento che non è ancora nella pagina. Si inserisce con `append` (alla fine), `prepend` (all’inizio), `before` o `after`.',
          '`elemento.remove()` lo toglie dalla pagina. Per molti elementi, crea un `DocumentFragment` e inseriscilo in una volta sola.' ],
          code: `const lista = document.querySelector("#lista");\nconst li = document.createElement("li");\nli.textContent = "Nuova attività";\nlista.append(li);\n\nconst primo = lista.firstElementChild;\nprimo.remove();` },
        { h: 'Classi e stili', p: [
          '`classList` gestisce le classi: `add`, `remove`, `contains` e `toggle`, che mette la classe se non c’è e la toglie se c’è. Con un secondo argomento booleano, `toggle` la forza.',
          'Cambiare classi e lasciare il design al CSS è meglio che toccare direttamente `style`. Se lo fai, le proprietà vanno in camelCase: `style.backgroundColor`.' ],
          code: `const bottone = document.querySelector("#menu");\nbottone.classList.add("attivo");\nbottone.classList.toggle("aperto");         // la mette\nbottone.classList.toggle("aperto");         // la toglie\nbottone.classList.toggle("scuro", true);    // la forza\n\nbottone.style.backgroundColor = "tomato";\ndocument.documentElement.style.setProperty("--colore-principale", "teal");` },
        { h: 'Attributi', p: [
          '`setAttribute(nome, valore)` e `removeAttribute(nome)` cambiano gli attributi. Molti hanno una proprietà diretta: `img.src`, `a.href`, `input.disabled`.',
          'L’attributo `hidden` nasconde un elemento senza CSS: `avviso.hidden = true`.' ],
          code: `const foto = document.createElement("img");\nfoto.src = "gatto.jpg";\nfoto.alt = "Un gatto che dorme";\nfoto.setAttribute("loading", "lazy");\n\nconst invia = document.querySelector("#invia");\ninvia.disabled = true;\ndocument.querySelector("#avviso").hidden = false;` },
        { h: 'Esempio reale: disegnare una lista di attività dai dati', real: true, p: [
          'Le attività vivono in un array e la lista della pagina si ridisegna a partire da esso ogni volta che cambia. È l’idea su cui si basano librerie come React.' ],
          code: `const attivita = [\n  { testo: "Comprare il pane", fatta: true },\n  { testo: "Studiare JS", fatta: false },\n];\n\nfunction disegna() {\n  const lista = document.querySelector("#attivita");\n  const frammento = document.createDocumentFragment();\n  for (const a of attivita) {\n    const li = document.createElement("li");\n    li.textContent = a.testo;\n    li.classList.toggle("fatta", a.fatta);\n    frammento.append(li);\n  }\n  lista.replaceChildren(frammento);   // svuota la lista e aggiunge i nuovi\n  document.querySelector("#contatore").textContent =\n    attivita.filter((a) => !a.fatta).length + " da fare";\n}\n\ndisegna();` },
      ],
      x: [
        fill(`const li = document.___("li");\nli.textContent = "Pane";`, ['createElement', 'newElement', 'create', 'makeElement'], '`createElement` crea l’elemento; poi bisogna inserirlo.'),
        mc('Perché usare `textContent` e non `innerHTML` per mostrare ciò che scrive un utente?', ['innerHTML interpreterebbe il suo testo come HTML e potrebbe eseguire codice malevolo', 'textContent è più bello', 'innerHTML non funziona con testi lunghi', 'Non c’è nessun motivo'], 'È la difesa di base contro gli attacchi XSS.'),
        out(`const p = document.createElement("p");\np.classList.add("avviso", "grande");\np.classList.toggle("grande");\np.classList.toggle("attivo");\nconsole.log(p.className);`, ['avviso attivo', 'avviso grande attivo', 'avviso', 'attivo'], 'Il primo `toggle` toglie `grande` perché c’era; il secondo aggiunge `attivo` perché non c’era.'),
        out(`const ul = document.createElement("ul");\nfor (const t of ["a", "b"]) {\n  const li = document.createElement("li");\n  li.textContent = t;\n  ul.append(li);\n}\nul.prepend(document.createElement("li"));\nconsole.log(ul.children.length, ul.lastElementChild.textContent);`, ['3 b', '2 b', '3 a', '3 '], '`prepend` aggiunge un `li` vuoto all’inizio, quindi "b" resta l’ultimo.'),
        typ('Togli l’avviso dalla pagina', `document.querySelector(".avviso").___();`, 'remove', '`remove()` toglie l’elemento dal DOM.'),
        out(`const scatola = document.createElement("div");\nscatola.style.backgroundColor = "red";\nscatola.style.fontSize = "20px";\nconsole.log(scatola.getAttribute("style"));`, ['background-color: red; font-size: 20px;', 'backgroundColor: red; fontSize: 20px', 'null'], 'In JavaScript si scrive in camelCase, ma l’attributo `style` conserva i nomi del CSS.'),
        mc('Cosa fa `elemento.classList.toggle("attivo")`?', ['Aggiunge la classe se non c’è e la toglie se c’è', 'La aggiunge sempre', 'La toglie sempre', 'Restituisce il numero di classi'], 'Con `toggle("attivo", true)` si forza l’aggiunta.'),
        out(`const attivita = [{ testo: "Comprare il pane", fatta: true }, { testo: "Studiare <b>JS</b>", fatta: false }];\nconst ul = document.createElement("ul");\nfor (const a of attivita) {\n  const li = document.createElement("li");\n  li.textContent = a.testo;\n  li.classList.toggle("fatta", a.fatta);\n  ul.append(li);\n}\nul.firstElementChild.remove();\nconsole.log(ul.children.length, ul.innerHTML);`, ['1 <li>Studiare &lt;b&gt;JS&lt;/b&gt;</li>', '1 <li>Studiare <b>JS</b></li>', '2 <li class="fatta">Comprare il pane</li>'], 'Si elimina la prima attività. Dato che il testo è stato messo con `textContent`, i tag non vengono interpretati e nell’HTML compaiono con l’escape. `toggle` con `false` non aggiunge la classe.'),
      ],
    },
    // Giorno 17
    {
      id: 'js-events',
      t: 'Eventi',
      d: 'Rispondere a clic e moduli con addEventListener, l’oggetto evento, preventDefault e la delega.',
      guide: [
        { h: 'Ascoltare eventi', p: [
          'Un evento è qualcosa che succede nella pagina: un clic, un tasto, un modulo inviato. `elemento.addEventListener("click", funzione)` esegue la funzione ogni volta che succede.',
          'Eventi comuni: `click`, `input` (ogni modifica in un campo), `change`, `submit`, `keydown` e `DOMContentLoaded`. L’opzione `{ once: true }` fa sì che l’ascoltatore si esegua una sola volta.' ],
          code: `const bottone = document.querySelector("#saluta");\nbottone.addEventListener("click", () => {\n  console.log("Ciao!");\n});\n\nconst ricerca = document.querySelector("#cerca");\nricerca.addEventListener("input", (e) => {\n  console.log("Cerco:", e.target.value);\n});` },
        { h: 'L’oggetto evento', p: [
          'La funzione riceve un oggetto con informazioni: `type` (il tipo), `target` (l’elemento dove è successo), `currentTarget` (quello che ha l’ascoltatore) e, per la tastiera, `key`.',
          '`preventDefault()` annulla ciò che il browser farebbe per impostazione predefinita, come ricaricare la pagina all’invio di un modulo o seguire un link.' ],
          code: `const modulo = document.querySelector("#registrazione");\nmodulo.addEventListener("submit", (e) => {\n  e.preventDefault();   // non ricarica la pagina\n  const email = modulo.querySelector("#email").value;\n  console.log("Invia", email);\n});\n\ndocument.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") chiudiFinestra();\n});` },
        { h: 'Propagazione', p: [
          'Un evento inizia nell’elemento dove è successo e poi risale attraverso i suoi antenati: è il bubbling. Un clic su un bottone è anche un clic sul `div` che lo contiene.',
          '`e.stopPropagation()` ferma la risalita. Usalo con cautela: gli altri ascoltatori più in alto non ne verranno a sapere.' ],
          code: `<!-- <div id="scheda"><button id="mi-piace">♥</button></div> -->\ndocument.querySelector("#scheda").addEventListener("click", () => {\n  console.log("Apri la scheda");\n});\ndocument.querySelector("#mi-piace").addEventListener("click", (e) => {\n  e.stopPropagation();   // il clic non apre la scheda\n  console.log("Mi piace");\n});` },
        { h: 'Delega degli eventi', p: [
          'Invece di mettere un ascoltatore su ogni elemento di una lista, se ne mette uno solo sul contenitore e si guarda con `e.target.closest(...)` quale elemento è stato cliccato.',
          'Funziona anche con gli elementi aggiunti dopo e consuma meno memoria.' ],
          code: `const lista = document.querySelector("#lista");\nlista.addEventListener("click", (e) => {\n  const bottone = e.target.closest(".elimina");\n  if (!bottone) return;            // clic altrove\n  bottone.closest("li").remove();\n});` },
        { h: 'Esempio reale: un modulo di attività', real: true, p: [
          'Un modulo aggiunge attività senza ricaricare la pagina e la lista usa la delega per segnarle come fatte, anche quelle aggiunte più tardi.' ],
          code: `const modulo = document.querySelector("#nuova");\nconst input = modulo.querySelector("input");\nconst lista = document.querySelector("#attivita");\n\nmodulo.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const testo = input.value.trim();\n  if (!testo) return;\n  const li = document.createElement("li");\n  li.textContent = testo;\n  lista.append(li);\n  input.value = "";\n  input.focus();\n});\n\nlista.addEventListener("click", (e) => {\n  const li = e.target.closest("li");\n  if (li) li.classList.toggle("fatta");\n});` },
      ],
      x: [
        fill(`bottone.___("click", () => console.log("Ciao!"));`, ['addEventListener', 'onEvent', 'listen', 'on'], '`addEventListener(tipo, funzione)` registra un ascoltatore.'),
        mc('Cosa fa `e.preventDefault()` nell’evento `submit` di un modulo?', ['Impedisce al browser di inviare il modulo e ricaricare la pagina', 'Svuota i campi', 'Ferma la propagazione dell’evento', 'Disattiva il bottone'], 'Così puoi validare e inviare i dati con JavaScript.'),
        out(`// <div id="scatola"><button id="btn">OK</button></div>\nconst log = [];\ndocument.querySelector("#scatola").addEventListener("click", () => log.push("scatola"));\ndocument.querySelector("#btn").addEventListener("click", () => log.push("btn"));\ndocument.querySelector("#btn").click();\nconsole.log(log.join(" > "));`, ['btn > scatola', 'scatola > btn', 'btn', 'scatola'], 'L’evento inizia nel bottone e poi risale al `div`.'),
        out(`// <ul id="menu"><li>Home</li><li>Contatti</li></ul>\nconst menu = document.querySelector("#menu");\nmenu.addEventListener("click", (e) => {\n  console.log(e.target.textContent, e.currentTarget.id);\n});\nmenu.children[1].click();`, ['Contatti menu', 'HomeContatti menu', 'Contatti ', 'menu Contatti'], '`target` è il `li` cliccato; `currentTarget` è la lista, che ha l’ascoltatore.'),
        typ('Controlla se è stato premuto il tasto Invio', `input.addEventListener("keydown", (e) => {\n  if (e.___ === "Enter") invia();\n});`, 'key', '`e.key` contiene il nome del tasto.'),
        mc('Cos’è la delega degli eventi?', ['Mettere un solo ascoltatore sul contenitore e scoprire quale figlio è stato cliccato', 'Passare un evento a un’altra pagina', 'Eseguire due ascoltatori insieme', 'Annullare un evento'], 'Funziona anche con gli elementi aggiunti dopo.'),
        out(`// <button>+</button>\nlet n = 0;\nconst b = document.querySelector("button");\nb.addEventListener("click", () => n++, { once: true });\nb.addEventListener("click", () => (n += 10));\nb.click();\nb.click();\nconsole.log(n);`, ['21', '22', '11', '20'], 'Il primo ascoltatore si esegue solo al primo clic (+1); il secondo in entrambi (+20).'),
        out(`// <ul id="lista"><li><button class="elimina">x</button> Pane</li><li><button class="elimina">x</button> Latte</li></ul>\nconst lista = document.querySelector("#lista");\nconst log = [];\nlista.addEventListener("click", (e) => {\n  const bottone = e.target.closest(".elimina");\n  if (!bottone) return log.push("fuori");\n  bottone.closest("li").remove();\n  log.push("eliminato");\n});\nlista.querySelector("li").click();\nlista.querySelector(".elimina").click();\nconsole.log(log.join(","), lista.children.length, lista.textContent.trim());`, ['fuori,eliminato 1 x Latte', 'eliminato,eliminato 0', 'fuori,eliminato 1 Latte', 'eliminato,fuori 1 x Pane'], 'Il primo clic è sul `li`, non su un bottone: `closest` restituisce `null`. Il secondo preme il bottone di "Pane" ed elimina il suo `li`. Resta "x Latte", perché il bottone è ancora dentro.'),
      ],
    },
    // Giorno 18
    {
      id: 'js-json',
      t: 'JSON e salvare i dati',
      d: 'Trasformare i dati in testo e viceversa con JSON, e salvarli nel browser con localStorage.',
      guide: [
        { h: 'Cos’è JSON', p: [
          'JSON è un formato di testo per scambiare dati. Lo usano quasi tutte le API web e molti file di configurazione, come `package.json`.',
          'Somiglia a un oggetto di JavaScript, ma è più rigido: chiavi e testi vanno tra virgolette doppie, non ammette commenti né virgole finali, e conserva solo testi, numeri, booleani, `null`, array e oggetti.' ],
          code: `{\n  "nome": "Ana",\n  "eta": 31,\n  "attiva": true,\n  "corsi": ["js", "python"],\n  "indirizzo": { "citta": "Bologna" },\n  "telefono": null\n}` },
        { h: 'JSON.stringify: da oggetto a testo', p: [
          '`JSON.stringify(valore)` converte un valore in un testo JSON. Il terzo argomento aggiunge un rientro per renderlo leggibile: `JSON.stringify(obj, null, 2)`.',
          'Le proprietà con `undefined` o funzioni vengono omesse, e le date si convertono in testo con formato ISO.' ],
          code: `const utente = { nome: "Leo", eta: 25, saluta() {}, soprannome: undefined };\nconsole.log(JSON.stringify(utente));  // {"nome":"Leo","eta":25}\nconsole.log(JSON.stringify({ a: 1, b: [2, 3] }, null, 2));\n// {\n//   "a": 1,\n//   "b": [\n//     2,\n//     3\n//   ]\n// }` },
        { h: 'JSON.parse: da testo a oggetto', p: [
          '`JSON.parse(testo)` fa il contrario: legge un testo JSON e restituisce il valore di JavaScript.',
          'Se il testo non è JSON valido lancia un `SyntaxError`, quindi con dati che arrivano da fuori conviene usare `try...catch`.' ],
          code: `const testo = '{"prodotto":"Tazza","prezzo":8.5}';\nconst obj = JSON.parse(testo);\nconsole.log(obj.prezzo * 2);  // 17\n\ntry {\n  JSON.parse("{prezzo: 8.5}");  // chiavi senza virgolette\n} catch (e) {\n  console.log(e.name);  // SyntaxError\n}` },
        { h: 'Salvare, leggere ed eliminare', p: [
          '`setItem(chiave, valore)` salva, `getItem(chiave)` legge (restituisce `null` se non esiste), `removeItem(chiave)` elimina una chiave e `clear()` cancella tutto.',
          '`length` dice quante chiavi ci sono. Ogni valore si converte in testo: se salvi il numero 5, leggerai “5”.' ],
          code: `localStorage.setItem("tema", "scuro");\nconsole.log(localStorage.getItem("tema"));    // scuro\nconsole.log(localStorage.getItem("lingua"));  // null\n\nlocalStorage.setItem("visite", 3);\nconsole.log(typeof localStorage.getItem("visite"));  // string\nlocalStorage.removeItem("tema");` },
        { h: 'Salvare oggetti con JSON', p: [
          'Se salvi un oggetto direttamente, si converte nel testo “[object Object]” e i dati si perdono. Bisogna passarlo per `JSON.stringify` quando si salva e per `JSON.parse` quando si legge.',
          'Dato che `JSON.parse(null)` restituisce `null`, con `??` puoi dare un valore predefinito quando la chiave non esiste ancora.' ],
          code: `const carrello = [{ prodotto: "Tazza", unita: 2 }];\nlocalStorage.setItem("carrello", JSON.stringify(carrello));\n\nconst letto = JSON.parse(localStorage.getItem("carrello")) ?? [];\nconsole.log(letto[0].prodotto);  // Tazza` },
        { h: 'Esempio reale: ricordare la modalità scura', real: true, p: [
          'Un sito salva la preferenza di tema dell’utente. Quando torna giorni dopo, la pagina si apre con il tema che aveva scelto.' ],
          code: `const CHIAVE = "preferenze";\n\nfunction leggiPreferenze() {\n  return JSON.parse(localStorage.getItem(CHIAVE)) ?? { tema: "chiaro", carattere: 16 };\n}\n\nfunction cambiaTema(tema) {\n  const prefs = { ...leggiPreferenze(), tema };\n  localStorage.setItem(CHIAVE, JSON.stringify(prefs));\n  document.body.dataset.tema = tema;\n}\n\ndocument.body.dataset.tema = leggiPreferenze().tema;  // al caricamento della pagina` },
      ],
      x: [
        mc('Quale di questi testi è JSON valido?', ['{"nome": "Ana", "eta": 30}', '{nome: "Ana"}', "{'nome': 'Ana'}", '{"eta": 30,}'], 'JSON esige virgolette doppie in chiavi e testi e non ammette virgole finali.'),
        out(`console.log(JSON.stringify({ a: 1, b: "x" }));`, ['{"a":1,"b":"x"}', '{ a: 1, b: "x" }', '{"a": 1, "b": "x"}', '[object Object]'], 'Senza rientro, `stringify` non lascia spazi.'),
        out(`const o = JSON.parse('{"n": 5}');\nconsole.log(o.n + 1, typeof o);`, ['6 object', '51 object', '6 string', 'NaN object'], '`parse` restituisce un oggetto e `n` è un numero vero.'),
        fill(`const utente = { nome: "Ana" };\nconst testo = JSON.___(utente);`, ['stringify', 'parse', 'toString', 'encode'], '`stringify` converte l’oggetto in testo JSON.'),
        fill(`localStorage.___("tema", "scuro");`, ['setItem', 'set', 'save', 'put'], '`setItem(chiave, valore)` salva un valore.'),
        out(`console.log(localStorage.getItem("nonEsiste"));`, ['null', 'undefined', '""', 'Errore'], 'Una chiave che non esiste restituisce `null`.'),
        mc('Cosa NON dovresti salvare in localStorage?', ['Password o dati sensibili', 'La lingua scelta', 'Il tema chiaro o scuro', 'La bozza di un commento'], 'Qualsiasi script eseguito nella pagina può leggere l’archivio.'),
        out(`localStorage.clear();\nconst salva = (k, v) => localStorage.setItem(k, JSON.stringify(v));\nconst carica = (k, def) => JSON.parse(localStorage.getItem(k)) ?? def;\nsalva("compiti", ["pane", "latte"]);\nconst compiti = carica("compiti", []);\ncompiti.push("caffè");\nsalva("compiti", compiti);\nlocalStorage.removeItem("tema");\nconsole.log(carica("compiti", []).length, carica("tema", "chiaro"), localStorage.length);`, ['3 chiaro 1', '2 chiaro 1', '3 null 1', '3 chiaro 2'], 'I compiti si leggono, si ampliano e si salvano di nuovo: 3. "tema" non esiste, quindi `carica` restituisce il valore predefinito. Resta una sola chiave.'),
      ],
    },
    // Giorno 19
    {
      id: 'js-errors',
      t: 'Errori',
      d: 'Gestire i problemi con try, catch e finally, sollevare i tuoi con throw e creare tipi di errore propri.',
      guide: [
        { h: 'try e catch', p: [
          'Quando qualcosa fallisce, JavaScript lancia un errore e, se nessuno lo cattura, lo script si ferma. Il codice che può fallire va dentro `try`; se fallisce, si esegue `catch` con l’errore.',
          'L’oggetto errore ha `name` (il tipo) e `message` (la descrizione). Se l’errore non ti serve, puoi scrivere solo `catch { ... }`.' ],
          code: `try {\n  const dati = JSON.parse("{json sbagliato}");\n} catch (errore) {\n  console.log(errore.name);     // SyntaxError\n  console.log("Impossibile leggere il file");\n}\nconsole.log("Il programma continua");` },
        { h: 'Lanciare errori con throw', p: [
          '`throw new Error("messaggio")` lancia un errore personalizzato. La funzione si ferma in quel punto e l’errore risale fino al `catch` più vicino.',
          'Lancia errori quando una funzione riceve dati con cui non può lavorare, invece di restituire un valore strano che fallirà più tardi.' ],
          code: `function dividi(a, b) {\n  if (b === 0) throw new Error("Impossibile dividere per zero");\n  return a / b;\n}\n\ntry {\n  console.log(dividi(10, 2));  // 5\n  console.log(dividi(1, 0));   // lancia: non si mostra\n} catch (e) {\n  console.log(e.message);      // Impossibile dividere per zero\n}` },
        { h: 'finally e tipi di errore', p: [
          '`finally` si esegue sempre, che ci sia un errore o no, anche se il `try` fa `return`. Si usa per chiudere o pulire: nascondere un indicatore di caricamento, chiudere una connessione.',
          'Tipi comuni: `TypeError` (usare male un valore, come leggere proprietà di `null`), `ReferenceError` (variabile che non esiste), `SyntaxError` (codice o JSON scritto male) e `RangeError` (numero fuori intervallo).' ],
          code: `try {\n  const utente = null;\n  utente.nome;\n} catch (e) {\n  console.log(e instanceof TypeError);  // true\n} finally {\n  console.log("Pulizia completata");\n}` },
        { h: 'Errori personalizzati', p: [
          'Puoi creare i tuoi tipi ereditando da `Error`. Così il `catch` può distinguere un errore di validazione da un guasto inatteso con `instanceof`.',
          'Se un `catch` riceve un errore che non sa gestire, la cosa migliore è rilanciarlo con `throw e` per non nasconderlo.' ],
          code: `class ValidationError extends Error {\n  constructor(messaggio) {\n    super(messaggio);\n    this.name = "ValidationError";\n  }\n}\n\ntry {\n  throw new ValidationError("L’email è vuota");\n} catch (e) {\n  if (e instanceof ValidationError) console.log("Controlla:", e.message);\n  else throw e;\n}` },
        { h: 'Esempio reale: leggere una configurazione', real: true, p: [
          'Un’applicazione legge la sua configurazione salvata come testo. Se il testo è rotto o manca un dato, avvisa e usa valori predefiniti invece di bloccarsi.' ],
          code: `function leggiConfig(testo) {\n  try {\n    const cfg = JSON.parse(testo);\n    if (!cfg.lingua) throw new Error("Manca la lingua");\n    return cfg;\n  } catch (errore) {\n    console.warn("Configurazione non valida:", errore.message);\n    return { lingua: "it" };\n  }\n}\n\nconsole.log(leggiConfig('{"lingua":"fr"}').lingua);  // fr\nconsole.log(leggiConfig("{}").lingua);               // it (con avviso)\nconsole.log(leggiConfig("rotto").lingua);            // it (con avviso)` },
      ],
      x: [
        out(`let r = "";\ntry {\n  r += "A";\n  throw new Error("x");\n  r += "B";\n} catch {\n  r += "C";\n} finally {\n  r += "D";\n}\nconsole.log(r);`, ['ACD', 'ABCD', 'AD', 'AC'], 'Dopo il `throw` il resto del `try` non si esegue. Poi vengono `catch` e `finally`.'),
        fill(`if (saldo < importo) {\n  ___ new Error("Saldo insufficiente");\n}`, ['throw', 'raise', 'error', 'catch'], 'In JavaScript gli errori si lanciano con `throw`. `raise` è di Python.'),
        out(`try {\n  null.length;\n} catch (e) {\n  console.log(e.name);\n}`, ['TypeError', 'ReferenceError', 'SyntaxError', 'RangeError'], 'Leggere una proprietà di `null` significa usare male un valore: `TypeError`.'),
        out(`try {\n  console.log(nonEsiste);\n} catch (e) {\n  console.log(e instanceof ReferenceError);\n}`, ['true', 'false', 'undefined'], 'Usare una variabile non dichiarata lancia `ReferenceError`.'),
        mc('Quando si esegue il blocco `finally`?', ['Sempre, che ci sia un errore o no', 'Solo se c’è un errore', 'Solo se non c’è errore', 'Mai se il try fa return'], 'Per questo si usa per pulire, qualunque cosa succeda.'),
        typ('Crea un tipo di errore personalizzato', `class ValidationError ___ Error {}`, 'extends', 'Ereditare da `Error` permette poi di distinguerlo con `instanceof`.'),
        out(`function f() {\n  try {\n    return "try";\n  } finally {\n    console.log("finally");\n  }\n}\nconsole.log(f());`, ['finally\ntry', 'try\nfinally', 'try', 'finally'], 'Il `return` aspetta che finisca `finally`, quindi prima si mostra "finally" e poi il valore restituito.'),
        out('class ValidationError extends Error {\n  constructor(campo) {\n    super(`${campo} non è valido`);\n    this.name = "ValidationError";\n  }\n}\nfunction valida(eta) {\n  if (typeof eta !== "number") throw new TypeError("l’età deve essere un numero");\n  if (eta < 0) throw new ValidationError("eta");\n  return eta;\n}\nconst log = [];\nfor (const v of [30, -1, "x"]) {\n  try {\n    log.push(valida(v));\n  } catch (e) {\n    log.push(e instanceof ValidationError ? e.message : e.name);\n  } finally {\n    log.push("|");\n  }\n}\nconsole.log(log.join(" "));', ['30 | eta non è valido | TypeError |', '30 | eta non è valido | l’età deve essere un numero |', '30 | ValidationError | TypeError |', '30 eta non è valido TypeError'], '30 è valido. -1 lancia `ValidationError` e si salva il suo messaggio. "x" lancia `TypeError`, che non è un `ValidationError`, quindi si salva il suo `name`. `finally` aggiunge "|" in tutti e tre i giri.'),
      ],
    },
    // Giorno 20
    {
      id: 'js-closures',
      t: 'Ambito e closure',
      d: 'Funzioni che ricordano le variabili del punto in cui sono nate: fabbriche di funzioni e dati privati.',
      guide: [
        { h: 'Ambito lessicale', p: [
          'Una funzione può usare le variabili del punto in cui è stata scritta, non del punto da cui viene chiamata. È l’ambito lessicale.',
          'Le funzioni interne vedono le variabili di quelle esterne, ma non il contrario.' ],
          code: `const saluto = "Ciao";\nfunction esterna() {\n  const nome = "Ana";\n  function interna() {\n    return saluto + ", " + nome;  // vede entrambe le variabili\n  }\n  return interna();\n}\nconsole.log(esterna());  // Ciao, Ana` },
        { h: 'Cos’è una closure', p: [
          'Una closure è una funzione che ricorda le variabili del suo ambito anche quando la funzione che le ha create è già terminata.',
          'Ogni chiamata alla funzione esterna crea un nuovo ambito, quindi ogni closure ha le proprie variabili.' ],
          code: `function creaContatore() {\n  let conteggio = 0;\n  return () => ++conteggio;\n}\n\nconst a = creaContatore();\nconst b = creaContatore();\na();\na();\nconsole.log(a(), b());  // 3 1` },
        { h: 'Fabbriche di funzioni e dati privati', p: [
          'Una fabbrica di funzioni restituisce funzioni configurate con i dati che riceve: `moltiplicatore(3)` crea una funzione che triplica.',
          'Le variabili della closure sono private: nessuno può toccarle da fuori se non attraverso le funzioni restituite.' ],
          code: `function moltiplicatore(k) {\n  return (n) => n * k;\n}\nconst triplo = moltiplicatore(3);\nconsole.log(triplo(5));  // 15\n\nfunction creaPortafoglio() {\n  let saldo = 0;\n  return {\n    versa: (c) => (saldo += c),\n    consulta: () => saldo,\n  };\n}\nconst p = creaPortafoglio();\np.versa(10);\nconsole.log(p.consulta(), p.saldo);  // 10 undefined` },
        { h: 'Closure nei cicli', p: [
          'Con `let`, ogni giro del ciclo ha la propria variabile, quindi ogni closure ricorda un valore diverso.',
          'Con `var` esiste una sola variabile per tutto il ciclo e tutte le closure vedono il suo valore finale. È un errore classico; usare `let` lo evita.' ],
          code: `for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log("let:", i), 0);   // 0, 1, 2\n}\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log("var:", j), 0);   // 3, 3, 3\n}` },
        { h: 'Esempio reale: limitare i tentativi di accesso', real: true, p: [
          'Un modulo di accesso permette tre tentativi. Il contatore vive in una closure, quindi nessun altro codice della pagina può azzerarlo.' ],
          code: `function creaLimitatore(massimo) {\n  let tentativi = 0;\n  return function prova(corretto) {\n    if (tentativi >= massimo) return "Bloccato";\n    tentativi++;\n    return corretto ? "Benvenuto" : "Restano " + (massimo - tentativi);\n  };\n}\n\nconst accesso = creaLimitatore(3);\nconsole.log(accesso(false));  // Restano 2\nconsole.log(accesso(false));  // Restano 1\nconsole.log(accesso(false));  // Restano 0\nconsole.log(accesso(true));   // Bloccato` },
      ],
      x: [
        out(`function crea() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = crea();\na();\na();\nconsole.log(a());`, ['3', '1', '0', 'undefined'], 'La funzione restituita ricorda `n` tra una chiamata e l’altra.'),
        out(`function crea() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = crea();\nconst b = crea();\na();\na();\nconsole.log(a(), b());`, ['3 1', '3 4', '1 1', '3 3'], 'Ogni chiamata a `crea` ha la propria `n`.'),
        mc('Cos’è una closure?', ['Una funzione che ricorda le variabili dell’ambito in cui è stata creata', 'Una funzione che si chiude da sola', 'Un ciclo che termina', 'Un oggetto senza proprietà'], 'Le ricorda anche quando la funzione che l’ha creata è già terminata.'),
        out(`const fs = [];\nfor (var i = 0; i < 3; i++) fs.push(() => i);\nconsole.log(fs.map((f) => f()).join(""));`, ['333', '012', '222', 'undefined'], 'Con `var` c’è una sola `i` per tutto il ciclo e alla fine vale 3.'),
        fill(`const fs = [];\nfor (___ i = 0; i < 3; i++) fs.push(() => i);\nconsole.log(fs.map((f) => f()).join(""));  // 012`, ['let', 'var', 'global', 'static'], 'Con `let` ogni giro ha la propria variabile.'),
        typ('Completa la fabbrica di funzioni', `function moltiplicatore(k) {\n  return (n) => n * ___;\n}\nconsole.log(moltiplicatore(4)(5));  // 20`, 'k', 'La funzione restituita ricorda il `k` con cui è stata creata.'),
        out(`function unaVolta(fn) {\n  let fatto = false, r;\n  return (...args) => {\n    if (!fatto) {\n      fatto = true;\n      r = fn(...args);\n    }\n    return r;\n  };\n}\nconst avvia = unaVolta((x) => x * 10);\nconsole.log(avvia(2), avvia(5));`, ['20 20', '20 50', '20 undefined', '50 50'], 'La seconda chiamata non esegue più `fn`: restituisce il risultato salvato.'),
        out(`function creaBanca(saldoIniziale) {\n  let saldo = saldoIniziale;\n  const storico = [];\n  return {\n    versa(c) { saldo += c; storico.push("+" + c); return this; },\n    preleva(c) { if (c <= saldo) { saldo -= c; storico.push("-" + c); } return this; },\n    riepilogo: () => saldo + " [" + storico.join(",") + "]",\n  };\n}\nconst conto = creaBanca(10);\nconto.versa(5).preleva(20).preleva(8);\nconst altro = creaBanca(0);\nconsole.log(conto.riepilogo(), altro.riepilogo(), conto.saldo);`, ['7 [+5,-8] 0 [] undefined', '7 [+5,-20,-8] 0 [] undefined', '7 [+5,-8] 7 [+5,-8] 7', '-13 [+5,-20,-8] 0 [] undefined'], '10 + 5 = 15; prelevare 20 non è permesso; prelevare 8 lascia 7. `altro` ha saldo e storico propri. `saldo` è privato: non è una proprietà dell’oggetto.'),
      ],
    },
    // Giorno 21
    {
      id: 'js-workshop-sales',
      t: 'Il laboratorio di Kibi: il report delle vendite sul web',
      d: 'Progetto della settimana 3: una pagina che legge le vendite incollate in una casella di testo, segnala gli errori, mostra i totali per mese e ricorda l’ultimo report.',
      guide: [
        { h: 'L’incarico', p: [
          'Kibi annota le vendite in un foglio di calcolo e vuole incollarle in una pagina per vedere quanto vende ogni mese. Se una riga è sbagliata, la pagina deve dire quale, e al ritorno deve mostrare l’ultimo report.',
          'Questo laboratorio mette insieme la settimana 3: il DOM, modificare la pagina, eventi, JSON e localStorage, errori e closure. Questa è la pagina di partenza:' ],
          code: `<textarea id="dati" rows="6">data,prodotto,importo\n2026-03-02,semi,4.50\n2026-03-15,fieno,7.25\n2026-04-01,semi,4.50</textarea>\n<button id="calcola">Calcola</button>\n<p id="errore" hidden></p>\n<table id="report"></table>\n<script src="report.js"></script>` },
        { h: 'Passo 1: leggere il testo e segnalare gli errori', p: [
          'Dividiamo il testo in righe, togliamo l’intestazione e trasformiamo ogni riga in un oggetto. Se una data non ha la forma `AAAA-MM-GG` o l’importo non è un numero, solleviamo un errore che dice quale riga non va.',
          'Sollevare l’errore qui e catturarlo dove si disegna la pagina separa il «cosa non va» dal «come lo mostro all’utente».' ],
          code: `function leggiVendite(testo) {\n  const righe = testo.trim().split("\\n").slice(1);\n  return righe.map((riga, i) => {\n    const [data, prodotto, importo] = riga.split(",");\n    const n = Number(importo);\n    if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(data) || Number.isNaN(n)) {\n      throw new Error(\`Riga \${i + 2} non valida: \${riga}\`);\n    }\n    return { data, prodotto, importo: n };\n  });\n}` },
        { h: 'Passo 2: i totali per mese', p: [
          '`reduce` parte da un oggetto vuoto e somma ogni vendita nella chiave del suo mese. `?? 0` dà 0 la prima volta che compare un mese.' ],
          code: `function perMese(vendite) {\n  return vendite.reduce((totali, v) => {\n    const mese = v.data.slice(0, 7);\n    totali[mese] = (totali[mese] ?? 0) + v.importo;\n    return totali;\n  }, {});\n}\n\nconsole.log(JSON.stringify(perMese([{ data: "2026-03-02", importo: 4.5 }, { data: "2026-03-15", importo: 7.25 }])));\n// {"2026-03":11.75}` },
        { h: 'Passo 3: disegnare la tabella al clic', p: [
          'Ogni riga della tabella si crea con `insertRow()` e le sue celle con `insertCell()`. Usiamo `textContent`, mai `innerHTML`, perché il testo arriva dall’utente e potrebbe contenere HTML.',
          'Il clic chiama le due funzioni dentro un `try`. Se `leggiVendite` solleva un errore, il `catch` ne mostra il messaggio invece di rompere la pagina.' ],
          code: `const $ = (selettore) => document.querySelector(selettore);\n\nfunction disegna(totali) {\n  const tabella = $("#report");\n  tabella.replaceChildren();\n  for (const [mese, totale] of Object.entries(totali)) {\n    const riga = tabella.insertRow();\n    riga.insertCell().textContent = mese;\n    riga.insertCell().textContent = totale.toFixed(2) + " €";\n  }\n}\n\n$("#calcola").addEventListener("click", () => {\n  try {\n    const totali = perMese(leggiVendite($("#dati").value));\n    disegna(totali);\n    localStorage.setItem("kibi.report", JSON.stringify(totali));\n    $("#errore").hidden = true;\n  } catch (errore) {\n    $("#errore").textContent = errore.message;\n    $("#errore").hidden = false;\n  }\n});` },
        { h: 'Passo 4: ricordare l’ultimo report', p: [
          'Al salvataggio, l’oggetto dei totali diventa testo con `JSON.stringify`. All’apertura della pagina lo rileggiamo con `JSON.parse`; se non c’è niente o il testo è danneggiato, non disegniamo nulla.' ],
          code: `function caricaUltimo() {\n  try {\n    return JSON.parse(localStorage.getItem("kibi.report"));\n  } catch {\n    return null;\n  }\n}\n\nconst ultimo = caricaUltimo();\nif (ultimo) disegna(ultimo);` },
        { h: 'Esempio reale: ricalcolare mentre scrivi', real: true, p: [
          'Ricalcolare a ogni tasto sarebbe uno spreco. `ritarda()` restituisce una funzione che ricorda, grazie a una closure, il timer in attesa: ogni tasto lo fa ripartire, e il report si calcola solo quando Kibi smette di scrivere per 400 ms.' ],
          code: `function ritarda(fn, ms) {\n  let attesa;\n  return () => {\n    clearTimeout(attesa);\n    attesa = setTimeout(fn, ms);\n  };\n}\n\n$("#dati").addEventListener("input", ritarda(() => $("#calcola").click(), 400));` },
      ],
      x: [
        mc('Perché le celle si riempiono con `textContent` e non con `innerHTML`?', ['Perché il testo arriva dall’utente e con innerHTML si potrebbe iniettare HTML o script', 'Perché innerHTML non funziona nelle tabelle', 'Perché textContent è più corto da scrivere', 'Perché innerHTML cancella gli eventi di tutta la pagina'], '`textContent` tratta tutto come testo. `innerHTML` interpreta i tag, e questo apre la porta all’iniezione di codice.'),
        out(`const [data, prodotto, importo] = "2026-03-02,semi,4.50".split(",");\nconsole.log(prodotto, Number(importo) * 2);`, ['semi 9', 'semi 9.00', '4.50 9', 'semi NaN'], '`split(",")` dà tre testi che si destrutturano in ordine. `Number("4.50") * 2` è 9.'),
        fill(`document.querySelector("#calcola").___("click", calcola);`, ['addEventListener', 'onClick', 'listen', 'addEvent'], '`addEventListener(tipo, funzione)` esegue la funzione ogni volta che si verifica l’evento.'),
        out(`try {\n  throw new Error("Riga 3 non valida");\n} catch (e) {\n  console.log(e.message);\n}`, ['Riga 3 non valida', 'Error', 'Error: Riga 3 non valida', 'undefined'], '`e.message` contiene solo il testo passato alla creazione dell’errore.'),
        out(`const vendite = [{ data: "2026-03-02", importo: 4.5 }, { data: "2026-04-01", importo: 3 }, { data: "2026-03-31", importo: 1.5 }];\nconst totali = {};\nfor (const v of vendite) {\n  const mese = v.data.slice(0, 7);\n  totali[mese] = (totali[mese] ?? 0) + v.importo;\n}\nconsole.log(JSON.stringify(totali));`, ['{"2026-03":6,"2026-04":3}', '{"2026-03":4.5,"2026-04":3}', '{"2026-03":6}', '[object Object]'], 'Marzo somma 4.5 + 1.5 = 6 e aprile, 3. `JSON.stringify` scrive l’oggetto come testo JSON.'),
        out(`localStorage.setItem("report", JSON.stringify({ totale: 9 }));\nconst letto = JSON.parse(localStorage.getItem("report"));\nconsole.log(letto.totale + 1, typeof letto);`, ['10 object', '91 string', '10 string', 'NaN object'], 'Si salva come testo JSON e `JSON.parse` lo riporta a un oggetto, con `totale` come numero.'),
        typ('Evita che il modulo ricarichi la pagina quando viene inviato', `modulo.addEventListener("submit", (e) => {\n  e.___();\n  calcola();\n});`, 'preventDefault', '`preventDefault()` annulla quello che il browser farebbe di default, qui inviare il modulo e ricaricare.'),
        out(`function lettore() {\n  let errori = 0;\n  return (testo) => {\n    try {\n      if (Number.isNaN(Number(testo))) throw new Error("non è un numero");\n      return Number(testo);\n    } catch {\n      errori++;\n      return -errori;\n    }\n  };\n}\nconst leggi = lettore();\nconsole.log(leggi("4.5"), leggi("abc"), leggi("x"), leggi("2"));`, ['4.5 -1 -2 2', '4.5 -1 -1 2', '4.5 NaN NaN 2', '4.5 0 0 2'], 'La funzione restituita ricorda `errori` grazie alla closure: ogni testo non numerico lo aumenta, quindi il secondo errore restituisce -2.'),
      ],
    },
    // Giorno 22
    {
      id: 'js-classes',
      t: 'Classi',
      d: 'class, constructor, metodi, getter, ereditarietà con extends, static e campi privati.',
      guide: [
        { h: 'Dichiarare una classe', p: [
          'Una classe è uno stampo per creare oggetti con la stessa forma. Il `constructor` si esegue con `new` e prepara le proprietà dell’oggetto con `this`.',
          'I metodi si scrivono dentro la classe senza la parola `function` e sono condivisi da tutti gli oggetti creati con essa.' ],
          code: `class Prodotto {\n  constructor(nome, prezzo) {\n    this.nome = nome;\n    this.prezzo = prezzo;\n  }\n  conIva() {\n    return this.prezzo * 1.22;\n  }\n}\n\nconst libro = new Prodotto("Libro", 20);\nconsole.log(libro.nome, libro.conIva());  // Libro 24.4` },
        { h: 'Getter, setter e campi privati', p: [
          'Un campo che inizia con `#` è privato: si può usare solo dentro la classe. Provare a leggerlo da fuori è un errore di sintassi.',
          '`get` definisce una proprietà calcolata che si legge senza parentesi e `set` una che valida prima di salvare.' ],
          code: `class Termostato {\n  #gradi = 20;\n  get gradi() {\n    return this.#gradi;\n  }\n  set gradi(valore) {\n    this.#gradi = Math.min(30, Math.max(15, valore));\n  }\n}\n\nconst t = new Termostato();\nt.gradi = 42;\nconsole.log(t.gradi);  // 30` },
        { h: 'Ereditarietà con extends e super', p: [
          '`class Figlia extends Madre` crea una classe che eredita proprietà e metodi di un’altra. Può aggiungere i propri e ridefinire quelli ereditati.',
          'Nel costruttore della figlia bisogna chiamare `super(...)` prima di usare `this`. Dentro un metodo, `super.metodo()` chiama la versione della madre.' ],
          code: `class Animale {\n  constructor(nome) {\n    this.nome = nome;\n  }\n  parla() {\n    return this.nome + " fa un verso";\n  }\n}\n\nclass Cane extends Animale {\n  parla() {\n    return super.parla() + ": bau!";\n  }\n}\n\nconsole.log(new Cane("Toby").parla());  // Toby fa un verso: bau!` },
        { h: 'Membri static e instanceof', p: [
          'Un metodo o una proprietà `static` appartiene alla classe, non a ogni oggetto: si usa come `Classe.metodo()`. Serve per utilità e contatori condivisi.',
          '`oggetto instanceof Classe` controlla se un oggetto è stato creato con quella classe o con una che eredita da essa. In fondo, una classe resta una funzione: `typeof Classe` è “function”.' ],
          code: `class Utente {\n  static creati = 0;\n  constructor(nome) {\n    this.nome = nome;\n    Utente.creati++;\n  }\n  static ospite() {\n    return new Utente("ospite");\n  }\n}\n\nconst u = Utente.ospite();\nnew Utente("Ana");\nconsole.log(Utente.creati, u instanceof Utente);  // 2 true` },
        { h: 'Esempio reale: un carrello della spesa', real: true, p: [
          'Un negozio online conserva le righe del carrello in un campo privato. Da fuori si possono solo aggiungere prodotti e leggere il totale, così nessuno può lasciare il carrello in uno stato sbagliato.' ],
          code: `class Carrello {\n  #righe = [];\n  aggiungi(prodotto, prezzo, unita = 1) {\n    if (unita <= 0) throw new Error("Unità non valide");\n    this.#righe.push({ prodotto, prezzo, unita });\n    return this;   // permette di concatenare\n  }\n  get totale() {\n    return this.#righe.reduce((s, r) => s + r.prezzo * r.unita, 0);\n  }\n  get quantita() {\n    return this.#righe.length;\n  }\n}\n\nconst c = new Carrello().aggiungi("Tazza", 8, 2).aggiungi("Caffè", 12);\nconsole.log(c.quantita, c.totale);  // 2 28` },
      ],
      x: [
        fill(`class Cane ___ Animale {\n  abbaia() { return "bau"; }\n}`, ['extends', 'inherits', 'implements', ':'], 'L’ereditarietà in JavaScript si scrive con `extends`.'),
        out(`class Contatore {\n  #n = 0;\n  inc() {\n    this.#n++;\n    return this;\n  }\n  get valore() {\n    return this.#n;\n  }\n}\nconst c = new Contatore();\nc.inc().inc().inc();\nconsole.log(c.valore);`, ['3', '1', 'undefined', 'Errore'], '`inc` restituisce `this`, quindi si può concatenare. Il getter si legge senza parentesi.'),
        mc('Cosa fa `super(...)` nel costruttore di una classe figlia?', ['Chiama il costruttore della classe madre', 'Crea una copia dell’oggetto', 'Rende statico il metodo', 'Elimina la classe madre'], 'È obbligatorio chiamarlo prima di usare `this` in una classe che usa `extends`.'),
        out(`class A {\n  saluto() { return "A"; }\n}\nclass B extends A {\n  saluto() { return "B" + super.saluto(); }\n}\nconsole.log(new B().saluto());`, ['BA', 'B', 'A', 'AB'], '`B` ridefinisce `saluto`, ma chiama la versione di `A` con `super.saluto()`.'),
        typ('Fai in modo che il metodo si usi dalla classe, senza creare oggetti', `class Matematica {\n  ___ doppio(n) { return n * 2; }\n}\nconsole.log(Matematica.doppio(4));`, 'static', 'I metodi `static` appartengono alla classe.'),
        out(`class Punto {\n  constructor(x) { this.x = x; }\n}\nconst p = new Punto(2);\nconsole.log(typeof Punto, p instanceof Punto);`, ['function true', 'class true', 'object true', 'function false'], 'In fondo una classe è una funzione speciale.'),
        mc('Cosa succede scrivendo `carrello.#righe` fuori dalla classe?', ['Errore di sintassi: i campi privati si usano solo dentro la classe', 'Restituisce undefined', 'Restituisce l’array', 'Restituisce null'], 'I campi `#` sono protetti dal linguaggio stesso, non solo per convenzione.'),
        out(`class Conto {\n  static totale = 0;\n  #saldo;\n  constructor(titolare, saldo = 0) {\n    this.titolare = titolare;\n    this.#saldo = saldo;\n    Conto.totale++;\n  }\n  preleva(c) {\n    if (c > this.#saldo) throw new Error("Fondi insufficienti");\n    this.#saldo -= c;\n  }\n  get saldo() { return this.#saldo; }\n}\nclass Risparmio extends Conto {\n  preleva(c) { super.preleva(c + 1); }\n}\nconst a = new Conto("Ana", 50);\nconst b = new Risparmio("Leo", 20);\na.preleva(30);\ntry { b.preleva(20); } catch (e) { console.log(e.message); }\nconsole.log(a.saldo, b.saldo, Conto.totale);`, ['Fondi insufficienti\n20 20 2', 'Fondi insufficienti\n20 0 2', '20 0 2', 'Fondi insufficienti\n20 20 1'], '`a` passa da 50 a 20. `Risparmio` addebita 1 di commissione: prelevare 20 chiede 21, più di quanto ha, e lancia l’errore senza toccare il saldo. Sono stati creati due conti.'),
      ],
    },
    // Giorno 23
    {
      id: 'js-promises',
      t: 'Promise',
      d: 'Codice che finisce più tardi: Promise, then, catch, Promise.all e l’ordine in cui si esegue tutto.',
      guide: [
        { h: 'Codice asincrono', p: [
          'Alcuni compiti richiedono tempo: chiedere dati a un server, leggere un file, aspettare un timer. JavaScript non resta fermo ad aspettare: continua con il resto del codice e gestisce il risultato quando arriva.',
          '`setTimeout(fn, ms)` è l’esempio più semplice: programma una funzione per dopo. Anche con 0 ms, si esegue dopo il codice che era già in corso.' ],
          code: `console.log("1. Chiedo i dati");\nsetTimeout(() => console.log("3. Arrivano i dati"), 1000);\nconsole.log("2. Continuo a lavorare");` },
        { h: 'Creare e usare promise', p: [
          'Una promise rappresenta un valore che arriverà in futuro. È in attesa, poi viene mantenuta (resolve) o rifiutata (reject).',
          '`then` riceve il valore quando è mantenuta, `catch` l’errore quando è rifiutata e `finally` si esegue in entrambi i casi.' ],
          code: `function lanciaDado() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const n = Math.ceil(Math.random() * 6);\n      if (n === 1) reject(new Error("È uscito un 1"));\n      else resolve(n);\n    }, 500);\n  });\n}\n\nlanciaDado()\n  .then((n) => console.log("È uscito", n))\n  .catch((e) => console.log(e.message))\n  .finally(() => console.log("Fine del lancio"));` },
        { h: 'Concatenare', p: [
          'Ciò che restituisce un `then` è il valore che riceve il successivo. Se restituisce un’altra promise, la catena aspetta che venga mantenuta.',
          'Un solo `catch` alla fine cattura l’errore di qualsiasi passaggio precedente.' ],
          code: `Promise.resolve(2)\n  .then((n) => n * 10)\n  .then((n) => {\n    if (n > 100) throw new Error("Troppo grande");\n    return n + 1;\n  })\n  .then((n) => console.log(n))   // 21\n  .catch((e) => console.log(e.message));` },
        { h: 'Più promise e l’ordine di esecuzione', p: [
          '`Promise.all([...])` aspetta tutte e restituisce i loro valori in ordine; se una fallisce, fallisce tutto. `Promise.allSettled` le aspetta tutte e dice come è finita ognuna. `Promise.race` tiene la prima che termina.',
          'L’ordine: prima tutto il codice sincrono, poi le promise mantenute (microtask) e infine i timer (macrotask).' ],
          code: `console.log("A");\nsetTimeout(() => console.log("D"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("B");\n// A B C D` },
        { h: 'Esempio reale: caricare un pannello in parallelo', real: true, p: [
          'Un pannello ha bisogno dell’utente, dei suoi ordini e delle sue notifiche. Si chiedono insieme con `Promise.all`, così il tempo totale è quello della richiesta più lenta e non la somma di tutte.' ],
          code: `const attendi = (ms, valore) => new Promise((r) => setTimeout(() => r(valore), ms));\n\nconst chiediUtente = () => attendi(300, { nome: "Ana" });\nconst chiediOrdini = () => attendi(500, [101, 102]);\nconst chiediAvvisi = () => attendi(200, ["Pacco in arrivo"]);\n\nconsole.time("pannello");\nPromise.all([chiediUtente(), chiediOrdini(), chiediAvvisi()])\n  .then(([utente, ordini, avvisi]) => {\n    console.log(utente.nome, ordini.length, avvisi[0]);  // Ana 2 Pacco in arrivo\n    console.timeEnd("pannello");  // circa 500 ms, non 1000\n  })\n  .catch((e) => console.log("Impossibile caricare il pannello:", e.message));` },
      ],
      x: [
        out(`console.log("A");\nsetTimeout(() => console.log("B"), 0);\nconsole.log("C");`, ['A\nC\nB', 'A\nB\nC', 'B\nA\nC', 'C\nA\nB'], 'Il timer si esegue quando termina il codice sincrono, anche con 0 ms.'),
        out(`console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);`, ['1\n4\n3\n2', '1\n2\n3\n4', '1\n4\n2\n3', '1\n3\n4\n2'], 'Prima il codice sincrono (1 e 4), poi le promise (3) e infine i timer (2).'),
        fill(`const p = Promise.___(new Error("ko"));\np.catch((e) => console.log(e.message));  // ko`, ['reject', 'fail', 'error', 'catch'], '`Promise.reject` crea una promise già rifiutata, come `Promise.resolve` ne crea una già mantenuta.'),
        out(`Promise.resolve(2)\n  .then((n) => n * 3)\n  .then((n) => console.log(n + 1));`, ['7', '6', '3', 'undefined'], 'Il primo `then` restituisce 6 e il secondo lo riceve: 6 + 1 = 7.'),
        mc('Cosa fa `Promise.all` se una delle promise viene rifiutata?', ['Viene rifiutata appena una fallisce', 'Ignora quella che fallisce', 'Le aspetta tutte e restituisce gli errori', 'La riprova'], 'Se ti serve il risultato di tutte anche quando falliscono, usa `Promise.allSettled`.'),
        typ('Cattura l’errore della catena', `chiediDati()\n  .then(mostra)\n  .___((errore) => console.log(errore.message));`, 'catch', 'Un `catch` alla fine cattura l’errore di qualsiasi passaggio precedente.'),
        out(`Promise.reject(new Error("x"))\n  .then(() => console.log("A"))\n  .catch((e) => console.log("B", e.message))\n  .finally(() => console.log("C"));`, ['B x\nC', 'A\nB x\nC', 'B x', 'A\nC'], 'La promise rifiutata salta il `then` e arriva al `catch`. `finally` si esegue sempre.'),
        out(`const attendi = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms));\nconst log = [];\nPromise.all([attendi(30, "a"), attendi(10, "b"), 5]).then((r) => log.push(r.join("")));\nPromise.race([attendi(20, "x"), attendi(5, "y")]).then((v) => log.push(v));\nPromise.allSettled([Promise.reject(new Error("no")), 1]).then((r) => log.push(r.map((s) => s.status[0]).join("")));\nsetTimeout(() => console.log(log.join(" ")), 50);`, ['rf y ab5', 'ab5 y rf', 'y rf ab5', 'rf x ab5'], '`allSettled` non aspetta nessun timer: termina per prima con "rejected" e "fulfilled" (rf). `race` tiene quella da 5 ms (y). `all` aspetta la più lenta e rispetta l’ordine originale: ab5.'),
      ],
    },
    // Giorno 24
    {
      id: 'js-async',
      t: 'async/await e fetch',
      d: 'Scrivere codice asincrono che si legge dall’alto in basso e chiedere dati a un’API con fetch.',
      guide: [
        { h: 'async e await', p: [
          'Una funzione `async` restituisce sempre una promise. Dentro, `await` aspetta che una promise venga mantenuta e ne restituisce il valore, come se il codice fosse sincrono.',
          '`await` mette in pausa solo quella funzione: il resto del programma continua a funzionare. Nei moduli si può usare `await` anche fuori dalle funzioni.' ],
          code: `const attendi = (ms) => new Promise((r) => setTimeout(r, ms));\n\nasync function contoAllaRovescia() {\n  for (let i = 3; i > 0; i--) {\n    console.log(i);\n    await attendi(1000);\n  }\n  return "Decollo!";\n}\n\ncontoAllaRovescia().then(console.log);  // 3, 2, 1, Decollo!` },
        { h: 'Errori con try...catch', p: [
          'Se la promise attesa viene rifiutata, `await` lancia l’errore. Si cattura con un normale `try...catch`, come gli errori sincroni.',
          'Così il codice asincrono si legge dall’alto in basso, senza catene di `then`.' ],
          code: `async function caricaProfilo(id) {\n  try {\n    const utente = await chiediUtente(id);\n    const ordini = await chiediOrdini(utente.id);\n    return { utente, ordini };\n  } catch (errore) {\n    console.log("Impossibile caricare:", errore.message);\n    return null;\n  }\n}` },
        { h: 'fetch: chiedere dati a un’API', p: [
          '`fetch(url)` fa una richiesta HTTP e restituisce una promise con la risposta. `risposta.json()` legge il corpo e lo converte da JSON, e anch’esso restituisce una promise.',
          'Attenzione: `fetch` viene rifiutato solo se fallisce la rete. Un 404 o un 500 mantengono la promise, quindi bisogna controllare `risposta.ok`.' ],
          code: `async function cercaUtente(id) {\n  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);\n  if (!res.ok) throw new Error("Errore HTTP " + res.status);\n  const utente = await res.json();\n  return utente.name;\n}\n\ncercaUtente(1).then(console.log);  // Leanne Graham` },
        { h: 'Inviare dati e richieste in parallelo', p: [
          'Per inviare dati si passa un secondo argomento con `method`, `headers` e `body`. Il corpo si converte in testo con `JSON.stringify`.',
          'Due `await` di seguito aspettano uno dopo l’altro. Se le richieste non dipendono tra loro, lanciale insieme con `await Promise.all([...])`.' ],
          code: `const res = await fetch("/api/ordini", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ prodotto: "Tazza", unita: 2 }),\n});\n\n// In parallelo: dura quanto la più lenta\nconst [utenti, prodotti] = await Promise.all([\n  fetch("/api/utenti").then((r) => r.json()),\n  fetch("/api/prodotti").then((r) => r.json()),\n]);` },
        { h: 'Esempio reale: una ricerca con API', real: true, p: [
          'Un campo di ricerca mostra gli utenti di un’API il cui nome contiene il testo scritto. Avvisa mentre carica e mostra un messaggio chiaro se qualcosa fallisce.' ],
          code: `const input = document.querySelector("#cerca");\nconst risultati = document.querySelector("#risultati");\n\nasync function cerca(testo) {\n  risultati.textContent = "Caricamento...";\n  try {\n    const res = await fetch("https://jsonplaceholder.typicode.com/users");\n    if (!res.ok) throw new Error("Errore HTTP " + res.status);\n    const utenti = await res.json();\n    const trovati = utenti.filter((u) =>\n      u.name.toLowerCase().includes(testo.toLowerCase())\n    );\n    risultati.textContent = trovati.map((u) => u.name).join(", ") || "Nessun risultato";\n  } catch (errore) {\n    risultati.textContent = "Ricerca non riuscita: " + errore.message;\n  }\n}\n\ninput.addEventListener("change", () => cerca(input.value));` },
      ],
      x: [
        out(`async function f() {\n  return 5;\n}\nconsole.log(f() instanceof Promise);`, ['true', 'false', '5', 'undefined'], 'Una funzione `async` restituisce sempre una promise, anche se restituisce un valore normale.'),
        out(`async function compito() {\n  console.log("B");\n  await null;\n  console.log("D");\n}\nconsole.log("A");\ncompito();\nconsole.log("C");`, ['A\nB\nC\nD', 'A\nB\nD\nC', 'A\nC\nB\nD', 'B\nA\nC\nD'], 'La funzione si esegue fino al primo `await`; allora cede il controllo e riprende quando termina il codice sincrono.'),
        fill(`async function carica() {\n  const res = ___ fetch("/api/prodotti");\n  return res.json();\n}`, ['await', 'async', 'then', 'wait'], '`await` aspetta che la promise di `fetch` venga mantenuta.'),
        mc('Se il server risponde con un errore 404, cosa fa la promise di `fetch`?', ['Viene mantenuta; bisogna controllare risposta.ok', 'Viene sempre rifiutata', 'Restituisce null', 'Lancia un SyntaxError'], '`fetch` viene rifiutato solo quando fallisce la rete.'),
        typ('Converti il corpo della risposta da JSON a oggetto', `const res = await fetch("/api/utente");\nconst dati = await res.___();`, 'json', '`res.json()` legge il corpo e lo converte; anche questo va atteso.'),
        out(`const fallisci = () => Promise.reject(new Error("niente rete"));\nasync function carica() {\n  try {\n    await fallisci();\n    return "ok";\n  } catch (e) {\n    return "errore: " + e.message;\n  }\n}\ncarica().then((r) => console.log(r));`, ['errore: niente rete', 'ok', 'niente rete', 'undefined'], 'L’`await` di una promise rifiutata lancia l’errore, che si cattura nel `catch`.'),
        mc('Come aspetti due richieste indipendenti senza perdere tempo?', ['await Promise.all([chiediA(), chiediB()])', 'await chiediA(); await chiediB();', 'chiediA().await + chiediB().await', 'async Promise.race([chiediA()])'], 'Con due `await` di seguito, la seconda richiesta non parte finché non finisce la prima.'),
        out(`const log = [];\nconst attendi = (ms, v) => new Promise((r) => setTimeout(() => { log.push(v); r(v); }, ms));\nasync function sequenziale() {\n  const a = await attendi(30, "s1");\n  const b = await attendi(30, "s2");\n  return a + b;\n}\nasync function parallelo() {\n  const [a, b] = await Promise.all([attendi(40, "p1"), attendi(10, "p2")]);\n  return a + b;\n}\nPromise.all([sequenziale(), parallelo()]).then(([s, p]) => console.log(log.join(" "), "|", s, p));`, ['p2 s1 p1 s2 | s1s2 p1p2', 's1 s2 p1 p2 | s1s2 p1p2', 'p2 s1 p1 s2 | s1s2 p2p1', 'p2 p1 s1 s2 | s1s2 p1p2'], 'p2 termina a 10 ms, s1 a 30 e p1 a 40. s2 non parte finché non finisce s1, quindi termina a 60. `Promise.all` restituisce i valori nell’ordine in cui sono stati chiesti, non in quello in cui sono finiti.'),
      ],
    },
    // Giorno 25
    {
      id: 'js-modules',
      t: 'Moduli',
      d: 'Dividere il codice in file con export e import, e usarli nel browser.',
      guide: [
        { h: 'Perché usare i moduli', p: [
          'Un modulo è un file con il proprio ambito: le sue variabili non si mescolano con quelle di altri file. Condivide solo ciò che esporta.',
          'Dividere il codice in piccoli moduli (prezzi, carrello, interfaccia...) lo rende più facile da capire, testare e riutilizzare.' ] },
        { h: 'Esportazioni con nome', p: [
          '`export` davanti a una dichiarazione la rende visibile da fuori. Un modulo può avere quante esportazioni con nome vuole.',
          'Si importano tra graffe e con lo stesso nome: `import { somma } from "./mate.js"`. Con `as` puoi rinominarle, e con `import * as M` le ricevi tutte in un oggetto.' ],
          code: `// mate.js\nexport const PI = 3.14159;\nexport function somma(a, b) {\n  return a + b;\n}\n\n// main.js\nimport { somma, PI as pi } from "./mate.js";\nimport * as M from "./mate.js";\nconsole.log(somma(2, 3), pi, M.PI);  // 5 3.14159 3.14159` },
        { h: 'Esportazione predefinita', p: [
          'Ogni modulo può avere una sola esportazione predefinita, che di solito è la cosa principale del file. Si importa senza graffe e con il nome che vuoi.',
          'Si possono combinare: `import Carrello, { formatta } from "./carrello.js"`.' ],
          code: `// carrello.js\nexport default class Carrello {\n  righe = [];\n}\nexport const formatta = (n) => n.toFixed(2) + " €";\n\n// main.js\nimport MioCarrello, { formatta } from "./carrello.js";\nconst c = new MioCarrello();\nconsole.log(formatta(3.5));  // 3.50 €` },
        { h: 'Usarli nel browser', p: [
          'Lo script principale si carica con `<script type="module" src="main.js">`. I moduli si eseguono in modalità strict, vengono rimandati come con `defer` e si caricano una sola volta anche se importati più volte.',
          'Nel browser i percorsi hanno l’estensione (`./mate.js`) e la pagina deve essere servita da un server, non aperta come file. `await import("./grafico.js")` carica un modulo solo quando serve.' ],
          code: `<script type="module" src="main.js"></script>\n\n// main.js: carica l’editor solo se l’utente lo apre\ndocument.querySelector("#modifica").addEventListener("click", async () => {\n  const { apriEditor } = await import("./editor.js");\n  apriEditor();\n});` },
        { h: 'Esempio reale: un negozio diviso in moduli', real: true, p: [
          'Il negozio separa il calcolo dei prezzi, il carrello e l’interfaccia. I prezzi si possono testare senza browser e l’interfaccia non sa come si calcola l’IVA.' ],
          code: `// prezzi.js\nexport const IVA = 0.22;\nexport const conIva = (n) => n * (1 + IVA);\nexport const formatta = (n) => n.toFixed(2) + " €";\n\n// carrello.js\nimport { conIva } from "./prezzi.js";\nexport default function totale(righe) {\n  return conIva(righe.reduce((s, r) => s + r.prezzo * r.unita, 0));\n}\n\n// main.js\nimport totale from "./carrello.js";\nimport { formatta } from "./prezzi.js";\nconst righe = [{ prezzo: 10, unita: 2 }];\ndocument.querySelector("#totale").textContent = formatta(totale(righe));  // 24.40 €` },
      ],
      x: [
        fill(`// mate.js\n___ function somma(a, b) {\n  return a + b;\n}`, ['export', 'public', 'module', 'exports'], '`export` rende la funzione visibile agli altri moduli.'),
        mc('Cosa riceve `import calcola from "./prezzi.js"`?', ['L’esportazione predefinita di prezzi.js', 'Un’esportazione chiamata calcola', 'Tutte le esportazioni', 'Niente: mancano le graffe'], 'Senza graffe si importa l’esportazione predefinita, con il nome che scegli.'),
        typ('Importa formatta con il nome fmt', `import { formatta ___ fmt } from "./utils.js";`, 'as', '`as` rinomina ciò che si importa.'),
        mc('Di cosa ha bisogno il tag script per caricare un modulo nel browser?', ['type="module"', 'module="true"', 'async', 'lang="es6"'], 'Inoltre la pagina deve essere servita da un server.'),
        ord('Importa prezzo e iva da negozio.js', ['import', '{ prezzo, iva }', 'from', '"./negozio.js";'], ['require(', 'export'], 'Le esportazioni con nome si importano tra graffe.'),
        mc('Quante esportazioni predefinite può avere un modulo?', ['Al massimo una', 'Nessuna', 'Due', 'Quante vuole'], 'Le esportazioni con nome, invece, non hanno limite.'),
        fill(`<script ___="module" src="main.js"></script>`, ['type', 'lang', 'kind', 'mode'], 'Senza `type="module"`, il browser non permette `import` né `export`.'),
        out(`// contatore.js\nlet conteggio = 0;\nexport const incrementa = () => ++conteggio;\nexport default conteggio;\n\n// main.js\nimport valore, { incrementa } from "./contatore.js";\nimport * as C from "./contatore.js";\nincrementa();\nincrementa();\nconsole.log(valore, C.default, typeof C.incrementa);`, ['0 0 function', '2 2 function', '0 2 function', '2 0 undefined'], '`export default conteggio` esporta il valore che aveva la variabile in quel momento: 0. Chiamare `incrementa` cambia `conteggio`, ma non l’esportazione predefinita. `C.incrementa` è la funzione.'),
      ],
    },
    // Giorno 26
    {
      id: 'js-iterators',
      t: 'Iteratori e generatori',
      d: 'Cosa rende qualcosa percorribile con for...of, e i generatori con function* e yield.',
      guide: [
        { h: 'Iterabili e iteratori', p: [
          'Un iterabile è qualsiasi cosa si possa scorrere con `for...of` o espandere con `...`: array, testi, Map, Set. Gli oggetti normali non lo sono.',
          'In fondo, un iterabile ha un metodo `[Symbol.iterator]()` che restituisce un iteratore. L’iteratore ha `next()`, che restituisce `{ value, done }` a ogni chiamata finché `done` non è `true`.' ],
          code: `const it = ["a", "b"][Symbol.iterator]();\nconsole.log(it.next());  // { value: "a", done: false }\nconsole.log(it.next());  // { value: "b", done: false }\nconsole.log(it.next());  // { value: undefined, done: true }\n\nfor (const x of { a: 1 }) {}  // TypeError: non è iterabile` },
        { h: 'Generatori', p: [
          'Una funzione generatrice si dichiara con `function*`. Chiamarla non la esegue: restituisce un iteratore. Ogni `next()` la esegue fino al `yield` successivo, che consegna un valore e la mette in pausa.',
          'Il valore del `return` finale arriva con `done: true`, quindi `for...of` e lo spread lo ignorano.' ],
          code: `function* semaforo() {\n  yield "verde";\n  yield "giallo";\n  yield "rosso";\n}\n\nconst s = semaforo();\nconsole.log(s.next().value);  // verde\nconsole.log([...semaforo()]); // ["verde", "giallo", "rosso"]` },
        { h: 'Sequenze pigre e infinite', p: [
          'Un generatore calcola ogni valore solo quando gli viene chiesto. Per questo può rappresentare sequenze infinite senza bloccare il programma, purché si chiedano solo alcuni valori.',
          '`next(valore)` invia un valore al generatore: è ciò che restituisce lo `yield` su cui era in pausa.' ],
          code: `function* ids(prefisso) {\n  let n = 1;\n  while (true) yield prefisso + "-" + n++;\n}\n\nconst ordini = ids("ORD");\nconsole.log(ordini.next().value);  // ORD-1\nconsole.log(ordini.next().value);  // ORD-2` },
        { h: 'Rendere iterabili le tue classi', p: [
          'Se una classe definisce `*[Symbol.iterator]()`, i suoi oggetti funzionano con `for...of`, lo spread e la destrutturazione.',
          '`yield*` delega a un altro iterabile e ne consegna tutti i valori uno per uno.' ],
          code: `class Playlist {\n  constructor(...brani) {\n    this.brani = brani;\n  }\n  *[Symbol.iterator]() {\n    yield* this.brani;\n  }\n}\n\nconst lista = new Playlist("Intro", "Brano 1", "Finale");\nfor (const b of lista) console.log(b);\nconst [primo] = lista;\nconsole.log(primo);  // Intro` },
        { h: 'Esempio reale: leggere risultati a pagine', real: true, p: [
          'Un’API restituisce i prodotti 2 alla volta. Un generatore nasconde la paginazione: chi lo usa scorre i prodotti uno per uno e si chiedono solo le pagine necessarie.' ],
          code: `const catalogo = ["Tazza", "Quaderno", "Matita", "Zaino", "Agenda"];\nfunction chiediPagina(n) {          // simula un’API\n  return catalogo.slice(n * 2, n * 2 + 2);\n}\n\nfunction* tuttiIProdotti() {\n  let pagina = 0;\n  while (true) {\n    const voci = chiediPagina(pagina++);\n    if (voci.length === 0) return;\n    console.log("(pagina " + pagina + ")");\n    yield* voci;\n  }\n}\n\nfor (const p of tuttiIProdotti()) {\n  if (p === "Matita") break;   // la pagina 3 non si chiede mai\n  console.log(p);\n}` },
      ],
      x: [
        out(`const it = [10, 20][Symbol.iterator]();\nconsole.log(it.next().value, it.next().value, it.next().done);`, ['10 20 true', '10 20 false', '10 10 false', 'undefined undefined true'], 'Ogni `next()` avanza di una posizione; dopo l’ultimo elemento, `done` è `true`.'),
        fill(`function___ conta() {\n  yield 1;\n  yield 2;\n}`, ['*', '&', '#', '!'], 'Le funzioni generatrici si dichiarano con `function*`.'),
        out(`function* g() {\n  yield "a";\n  yield "b";\n  return "c";\n}\nconsole.log([...g()]);`, ['["a", "b"]', '["a", "b", "c"]', '["c"]', '[]'], 'Il valore del `return` arriva con `done: true` e lo spread lo scarta.'),
        mc('Cosa succede eseguendo `for (const x of { a: 1 }) {}`?', ['Lancia TypeError: gli oggetti normali non sono iterabili', 'Scorre le chiavi', 'Scorre i valori', 'Non fa nulla'], 'Per scorrere un oggetto usa `Object.keys`, `Object.values` o `Object.entries`.'),
        out(`function* naturali() {\n  let n = 1;\n  while (true) yield n++;\n}\nconst it = naturali();\nit.next();\nconsole.log(it.next().value, it.next().value);`, ['2 3', '1 2', '3 4', 'Il programma si blocca'], 'Il ciclo infinito non è un problema: il generatore avanza solo quando glielo chiedi. Il primo valore (1) è già stato consumato.'),
        typ('Consegna ogni numero pari', `function* pari() {\n  for (let i = 0; i < 6; i += 2) ___ i;\n}`, 'yield', '`yield` consegna il valore e mette in pausa il generatore fino al `next()` successivo.'),
        out(`function* chat() {\n  const nome = yield "Come ti chiami?";\n  yield "Ciao, " + nome;\n}\nconst c = chat();\nconsole.log(c.next().value);\nconsole.log(c.next("Ana").value);`, ['Come ti chiami?\nCiao, Ana', 'Come ti chiami?\nCiao, undefined', 'Ciao, Ana', 'Come ti chiami?\nCome ti chiami?'], 'Il valore passato al secondo `next` è ciò che restituisce il primo `yield`.'),
        out(`class Intervallo {\n  constructor(da, a, passo = 1) {\n    Object.assign(this, { da, a, passo });\n  }\n  *[Symbol.iterator]() {\n    for (let i = this.da; i <= this.a; i += this.passo) yield i;\n  }\n}\nfunction* prendi(iterabile, n) {\n  for (const x of iterabile) {\n    if (n-- <= 0) return;\n    yield x;\n  }\n}\nconst r = new Intervallo(1, 10, 3);\nconsole.log([...r].join(","), [...prendi(r, 2)].join(","), Math.max(...r));`, ['1,4,7,10 1,4 10', '1,4,7 1,4 7', '1,4,7,10 1,4,7 10', '1,3,6,9 1,3 9'], 'Da 1 a 10 di 3 in 3: 1, 4, 7 e 10. `prendi` si ferma dopo due valori. Ogni spread chiede un nuovo iteratore, quindi l’intervallo si può scorrere più volte.'),
      ],
    },
    // Giorno 27
    {
      id: 'js-node',
      t: 'Node.js',
      d: 'JavaScript fuori dal browser: process, i moduli di Node, npm e un server con Express.',
      guide: [
        { h: 'Cos’è Node.js', p: [
          'Node.js esegue JavaScript fuori dal browser, con lo stesso motore V8 di Chrome. Serve per server, strumenti da riga di comando e script.',
          'In Node non esistono `document` né `window`, ma ci sono altre cose: `process` (argomenti, variabili d’ambiente), accesso ai file, rete e altro. Si esegue con `node file.js`.' ],
          code: `// ciao.js → node ciao.js Ana\nconst nome = process.argv[2] ?? "mondo";\nconsole.log("Ciao, " + nome);           // Ciao, Ana\nconsole.log(process.env.NODE_ENV);      // la variabile d’ambiente, se esiste` },
        { h: 'Moduli di Node', p: [
          'Node include moduli per quasi tutto: `node:fs/promises` per i file, `node:path` per i percorsi, `node:http` per i server. Si importano con il prefisso `node:`.',
          'Con `"type": "module"` in `package.json` si usa `import`. Il sistema vecchio, CommonJS, usa `require` e `module.exports`; lo vedrai in molto codice esistente.' ],
          code: `import { readFile, writeFile } from "node:fs/promises";\nimport path from "node:path";\n\nconst file = path.join("dati", "voti.json");\nconst voti = JSON.parse(await readFile(file, "utf8"));\nvoti.push({ studente: "Eva", voto: 9 });\nawait writeFile(file, JSON.stringify(voti, null, 2));\nconsole.log(path.extname(file));  // .json` },
        { h: 'npm e package.json', p: [
          'npm è il gestore di pacchetti di Node. `npm init -y` crea `package.json`, che descrive il progetto, le sue dipendenze e i suoi script.',
          '`npm install express` scarica il pacchetto in `node_modules` e lo annota in `package.json`. `package-lock.json` fissa le versioni esatte. `node_modules` non si carica su Git: si ricrea con `npm install`.' ],
          code: `{\n  "name": "mia-api",\n  "type": "module",\n  "scripts": {\n    "start": "node server.js",\n    "dev": "node --watch server.js",\n    "test": "vitest"\n  },\n  "dependencies": {\n    "express": "^4.19.2"\n  }\n}` },
        { h: 'Un server con Express', p: [
          'Express è il framework più usato per creare server web con Node. Ogni rotta associa un metodo HTTP e un URL a una funzione che riceve la richiesta (`req`) e la risposta (`res`).',
          '`res.json()` invia dati in JSON e `res.status(codice)` imposta il codice HTTP: 200 ok, 201 creato, 400 richiesta errata, 404 non trovato.' ],
          code: `import express from "express";\n\nconst app = express();\napp.use(express.json());   // per leggere corpi JSON\n\napp.get("/api/ciao", (req, res) => {\n  res.json({ messaggio: "Ciao da Node" });\n});\n\napp.listen(3000, () => console.log("Server su http://localhost:3000"));` },
        { h: 'Esempio reale: un’API di attività', real: true, p: [
          'Una piccola API conserva le attività in memoria. Valida i dati che arrivano e risponde con i codici HTTP corretti, che il frontend può chiedere con `fetch`.' ],
          code: `import express from "express";\n\nconst app = express();\napp.use(express.json());\nconst attivita = [];\n\napp.get("/api/attivita", (req, res) => res.json(attivita));\n\napp.post("/api/attivita", (req, res) => {\n  const testo = req.body.testo?.trim();\n  if (!testo) return res.status(400).json({ errore: "Manca il testo" });\n  const nuova = { id: attivita.length + 1, testo, fatta: false };\n  attivita.push(nuova);\n  res.status(201).json(nuova);\n});\n\napp.delete("/api/attivita/:id", (req, res) => {\n  const i = attivita.findIndex((a) => a.id === Number(req.params.id));\n  if (i === -1) return res.status(404).json({ errore: "Non esiste" });\n  attivita.splice(i, 1);\n  res.status(204).end();\n});\n\napp.listen(3000);` },
      ],
      x: [
        mc('Quale di questi NON esiste in Node.js?', ['document', 'console', 'setTimeout', 'process'], 'Node non ha una pagina da mostrare, quindi non c’è il DOM.'),
        fill(`import { readFile } from "node:___/promises";`, ['fs', 'file', 'os', 'path'], '`fs` (file system) è il modulo per lavorare con i file.'),
        out(`// Terminale: node ciao.js Ana 30\nconst [, , nome, eta] = process.argv;\nconsole.log(nome, typeof eta);`, ['Ana string', 'Ana number', 'node string', 'ciao.js Ana'], 'Le prime due posizioni sono il percorso di Node e quello dello script. Gli argomenti arrivano sempre come testo.'),
        mc('Quale file descrive le dipendenze e gli script di un progetto?', ['package.json', 'node_modules', 'index.html', '.gitignore'], '`node_modules` contiene i pacchetti scaricati e non si carica su Git.'),
        typ('Installa il pacchetto express', `npm ___ express`, ['install', 'i'], '`npm install` (o `npm i`) scarica il pacchetto e lo aggiunge a `package.json`.'),
        out(`import path from "node:path";\nconsole.log(path.extname("relazione.finale.pdf"), path.basename("/foto/gatto.jpg", ".jpg"));`, ['.pdf gatto', '.finale.pdf gatto', 'pdf gatto.jpg', '.pdf /foto/gatto'], '`extname` prende solo l’ultima estensione; `basename` toglie la cartella e, se indicata, l’estensione.'),
        ord('Crea una rotta GET che risponda con JSON', ['app.get(', '"/api/ciao",', '(req, res) =>', 'res.json({ ok: true })', ');'], ['app.listen(', 'document.'], 'Metodo, rotta e la funzione che riceve la richiesta e la risposta.'),
        mc('Il server riceve tre richieste di seguito: `POST {"testo":"pane"}`, `POST {}` e `POST {"testo":"latte"}`. Quali codici restituisce e che id ha l’ultima attività?', ['201, 400 e 201; id 2', '201, 400 e 201; id 3', '200, 400 e 200; id 2', '201, 201 e 201; id 3'], 'La richiesta senza testo viene rifiutata con 400 e non si salva, quindi l’attività "latte" è la seconda: id 2. Creare una risorsa risponde 201.', `const attivita = [];\napp.post("/attivita", (req, res) => {\n  if (!req.body.testo) return res.status(400).json({ errore: "Manca il testo" });\n  const nuova = { id: attivita.length + 1, testo: req.body.testo };\n  attivita.push(nuova);\n  res.status(201).json(nuova);\n});`),
      ],
    },
    // Giorno 28
    {
      id: 'js-testing',
      t: 'Test',
      d: 'Test automatici con Vitest o Jest: test, expect, casi limite e mock.',
      guide: [
        { h: 'Perché scrivere test', p: [
          'Un test è codice che controlla che altro codice funzioni. Si esegue in pochi secondi e ti avvisa se una modifica rompe qualcosa che prima funzionava.',
          'Gli strumenti più usati sono Vitest e Jest, quasi identici. Si installano con `npm install --save-dev vitest` e si eseguono con `npm test`.' ] },
        { h: 'test ed expect', p: [
          '`test("descrizione", () => { ... })` definisce un caso. Dentro, `expect(valore)` con un comparatore controlla il risultato: `toBe` confronta con `===`, `toEqual` confronta il contenuto di oggetti e array.',
          '`describe` raggruppa test correlati. I file di solito si chiamano `qualcosa.test.js`.' ],
          code: `// prezzi.test.js\nimport { describe, test, expect } from "vitest";\nimport { conIva, applicaSconto } from "./prezzi.js";\n\ndescribe("prezzi", () => {\n  test("aggiunge il 22 % di IVA", () => {\n    expect(conIva(100)).toBe(122);\n  });\n  test("restituisce un oggetto nuovo con lo sconto", () => {\n    expect(applicaSconto({ prezzo: 50 }, 0.1)).toEqual({ prezzo: 45 });\n  });\n});` },
        { h: 'Casi limite ed errori', p: [
          'Non provare solo il caso felice: prova liste vuote, zero, negativi, testi strani. È lì che si nascondono gli errori.',
          'Per controllare che qualcosa lanci un errore, si passa una funzione: `expect(() => dividi(1, 0)).toThrow()`. Con i numeri decimali usa `toBeCloseTo`.' ],
          code: `test("una lista vuota dà 0", () => {\n  expect(media([])).toBe(0);\n});\ntest("non permette di dividere per zero", () => {\n  expect(() => dividi(1, 0)).toThrow("per zero");\n});\ntest("0.1 + 0.2", () => {\n  expect(0.1 + 0.2).toBeCloseTo(0.3);\n});` },
        { h: 'Mock e TDD', p: [
          'Un mock sostituisce una dipendenza (inviare un’email, chiamare un’API) con una funzione finta che registra come è stata chiamata. `vi.fn()` in Vitest o `jest.fn()` in Jest.',
          'TDD (sviluppo guidato dai test): prima scrivi un test che fallisce, poi il codice minimo perché passi e infine migliori il codice con i test come rete di sicurezza.' ],
          code: `import { vi, test, expect } from "vitest";\n\ntest("avvisa i clienti con debiti", () => {\n  const invia = vi.fn();\n  avvisaMorosi([{ email: "a@x.com", debito: 20 }, { email: "b@x.com", debito: 0 }], invia);\n  expect(invia).toHaveBeenCalledTimes(1);\n  expect(invia).toHaveBeenCalledWith("a@x.com", expect.any(String));\n});` },
        { h: 'Esempio reale: proteggere il calcolo di un carrello', real: true, p: [
          'Prima di cambiare le regole di spedizione, un negozio scrive test per la funzione attuale. Se qualcuno rompe un caso, `npm test` lo dice prima che arrivi ai clienti.' ],
          code: `// carrello.js\nexport function totale(righe, spedizioneGratisDa = 50) {\n  const subtotale = righe.reduce((s, r) => s + r.prezzo * r.unita, 0);\n  return subtotale >= spedizioneGratisDa || subtotale === 0 ? subtotale : subtotale + 4.99;\n}\n\n// carrello.test.js\nimport { test, expect } from "vitest";\nimport { totale } from "./carrello.js";\n\ntest("un carrello vuoto costa 0", () => expect(totale([])).toBe(0));\ntest("fa pagare la spedizione sotto i 50", () =>\n  expect(totale([{ prezzo: 10, unita: 2 }])).toBeCloseTo(24.99));\ntest("spedizione gratuita da 50", () =>\n  expect(totale([{ prezzo: 25, unita: 2 }])).toBe(50));\n\n// $ npm test\n// ✓ carrello.test.js (3 tests)` },
      ],
      x: [
        mc('In cosa si differenziano `toBe` e `toEqual`?', ['toBe confronta con ===; toEqual confronta il contenuto di oggetti e array', 'Sono uguali', 'toEqual serve solo per i numeri', 'toBe confronta il tipo e toEqual il valore'], 'Due oggetti con lo stesso contenuto non sono `===`, quindi per loro si usa `toEqual`.'),
        fill(`test("somma", () => {\n  expect(somma(2, 3)).___(5);\n});`, ['toBe', 'equals', 'is', 'toBeEqual'], '`toBe` controlla che il valore sia esattamente quello atteso.'),
        out(`const risultati = [];\nfunction test(nome, fn) {\n  try {\n    fn();\n    risultati.push("✓ " + nome);\n  } catch {\n    risultati.push("✗ " + nome);\n  }\n}\nconst expect = (reale) => ({\n  toBe: (atteso) => {\n    if (reale !== atteso) throw new Error();\n  },\n});\nconst doppio = (n) => n * 2;\ntest("doppio di 2", () => expect(doppio(2)).toBe(4));\ntest("doppio di -1", () => expect(doppio(-1)).toBe(2));\nconsole.log(risultati.join(" | "));`, ['✓ doppio di 2 | ✗ doppio di -1', '✓ doppio di 2 | ✓ doppio di -1', '✗ doppio di 2 | ✗ doppio di -1', '✓ doppio di 2'], 'Ecco come funziona un test dentro: `expect` lancia un errore se non coincide e `test` lo cattura. `doppio(-1)` è -2, non 2.'),
        out(`const a = { x: 1 };\nconsole.log(a === { x: 1 }, JSON.stringify(a) === JSON.stringify({ x: 1 }));`, ['false true', 'true true', 'false false', 'true false'], 'Sono due oggetti diversi anche se hanno lo stesso contenuto. Per questo esiste `toEqual`.'),
        typ('Controlla che la funzione lanci un errore', `expect(() => dividi(1, 0)).___("per zero");`, 'toThrow', 'Si passa una funzione perché `expect` possa eseguirla e catturare l’errore.'),
        mc('Qual è l’ordine del TDD?', ['Scrivere un test che fallisce, farlo passare e migliorare il codice', 'Scrivere il codice, provarlo a mano e scrivere i test', 'Scrivere tutti i test alla fine', 'Migliorare il codice e poi scrivere i test'], 'Si riassume in rosso, verde, rifattorizzare.'),
        ord('Scrivi un test che controlli che somma(2, 3) sia 5', ['test("somma due numeri",', '() => {', 'expect(somma(2, 3))', '.toBe(5);', '});'], ['assert(', 'console.log('], 'Descrizione, funzione con l’`expect` e il comparatore.'),
        out(`function fn() {\n  const f = (...args) => {\n    f.chiamate.push(args);\n  };\n  f.chiamate = [];\n  return f;\n}\nfunction avvisaMorosi(clienti, invia) {\n  let n = 0;\n  for (const c of clienti) {\n    if (c.debito > 0) {\n      invia(c.email, "Devi " + c.debito + " €");\n      n++;\n    }\n  }\n  return n;\n}\nconst invia = fn();\nconst totale = avvisaMorosi([{ email: "a@x.com", debito: 20 }, { email: "b@x.com", debito: 0 }, { email: "c@x.com", debito: 5 }], invia);\nconsole.log(totale, invia.chiamate.length, invia.chiamate[1][0]);`, ['2 2 c@x.com', '3 3 b@x.com', '2 2 b@x.com', '2 3 c@x.com'], 'È un mock fatto in casa: salva gli argomenti di ogni chiamata. Solo due clienti hanno debiti, e la seconda chiamata era per c@x.com.'),
      ],
    },
    // Giorno 29
    {
      id: 'js-clean-code',
      t: 'Codice pulito e prestazioni',
      d: 'Nomi chiari, funzioni piccole e ritorni anticipati, e misurare prima di ottimizzare con debounce e throttle.',
      guide: [
        { h: 'Nomi che si spiegano da soli', p: [
          'Il codice si legge molte più volte di quante si scrive. Un buon nome risparmia un commento: `utentiAttivi` dice più di `arr2`.',
          'Convenzioni di JavaScript: `camelCase` per variabili e funzioni, `PascalCase` per le classi e `MAIUSCOLE_CON_TRATTINI` per le costanti fisse. I booleani suonano come una domanda: `eAttivo`, `haPermesso`.' ],
          code: `// Difficile da leggere\nconst d = u.filter((x) => x.a && x.e > 17);\n\n// Chiaro\nconst utentiAdultiAttivi = utenti.filter(\n  (utente) => utente.attivo && utente.eta >= 18\n);` },
        { h: 'Funzioni piccole e niente numeri magici', p: [
          'Ogni funzione dovrebbe fare una sola cosa e avere un nome che la descriva. Se ti serve la parola “e” per spiegarla, probabilmente sono due funzioni.',
          'Un numero magico è un valore senza spiegazione in mezzo al codice, come `0.22` o `86400000`. Dagli un nome con una costante.' ],
          code: `const IVA = 0.22;\nconst MS_AL_GIORNO = 24 * 60 * 60 * 1000;\n\nconst conIva = (prezzo) => prezzo * (1 + IVA);\nconst giorniTra = (a, b) => Math.round((b - a) / MS_AL_GIORNO);` },
        { h: 'Ritorni anticipati', p: [
          'Molti `if` annidati obbligano a ricordare tutte le condizioni contemporaneamente. Controlla prima i casi speciali ed esci dalla funzione con `return`.',
          'Il percorso principale resta alla fine, senza rientri e facile da seguire.' ],
          code: `// Annidato\nfunction sconto(utente) {\n  if (utente) {\n    if (utente.eSocio) {\n      return 0.1;\n    } else {\n      return 0;\n    }\n  } else {\n    return 0;\n  }\n}\n\n// Con ritorni anticipati\nfunction sconto(utente) {\n  if (!utente?.eSocio) return 0;\n  return 0.1;\n}` },
        { h: 'Prima di tutto, misura', p: [
          'Non ottimizzare alla cieca: misura dove va il tempo. `performance.now()` dà un timestamp preciso in millisecondi e la scheda Prestazioni dei DevTools mostra cosa è lento.',
          'Quasi sempre il problema sta in pochi punti: un ciclo che si ripete troppo, richieste di troppo o modifiche al DOM una per una.' ],
          code: `const inizio = performance.now();\nconst ordinati = [...dati].sort((a, b) => a.prezzo - b.prezzo);\nconsole.log("Ordinamento:", (performance.now() - inizio).toFixed(1), "ms");` },
        { h: 'Debounce e throttle', p: [
          'Il debounce aspetta che un’azione smetta di ripetersi per un certo tempo prima di eseguire la funzione: ideale per cercare mentre l’utente scrive.',
          'Il throttle esegue la funzione al massimo una volta ogni tanto, anche se l’evento scatta centinaia di volte: ideale per `scroll` o `resize`.' ],
          code: `function debounce(fn, ms) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), ms);\n  };\n}\n\nfunction throttle(fn, ms) {\n  let ultima = 0;\n  return (...args) => {\n    const ora = Date.now();\n    if (ora - ultima >= ms) {\n      ultima = ora;\n      fn(...args);\n    }\n  };\n}\n\nwindow.addEventListener("scroll", throttle(() => console.log(scrollY), 100));` },
        { h: 'Esempio reale: una ricerca che non intasa l’API', real: true, p: [
          'Senza attenzione, cercare “javascript” lettera per lettera fa dieci richieste. Con il debounce si chiede solo quando l’utente si ferma, e una cache evita di ripetere ricerche già fatte.' ],
          code: `const cache = new Map();\n\nasync function cerca(testo) {\n  if (cache.has(testo)) return cache.get(testo);\n  const res = await fetch("/api/cerca?q=" + encodeURIComponent(testo));\n  const dati = await res.json();\n  cache.set(testo, dati);\n  return dati;\n}\n\nconst input = document.querySelector("#cerca");\ninput.addEventListener("input", debounce(async () => {\n  const testo = input.value.trim();\n  if (testo.length < 2) return;\n  const risultati = await cerca(testo);\n  mostraRisultati(risultati);\n}, 300));` },
      ],
      x: [
        mc('Quale nome è più chiaro per un array di utenti attivi?', ['utentiAttivi', 'arr', 'dati2', 'x'], 'Un buon nome dice cosa contiene la variabile senza dover leggere il resto del codice.'),
        mc('Cos’è un numero magico?', ['Un valore senza spiegazione in mezzo al codice', 'Un numero casuale', 'Un numero molto grande', 'Un numero negativo'], 'Si risolve dandogli un nome con una costante, come `IVA`.'),
        fill(`___ IVA = 0.22;  // non cambia mai`, ['const', 'let', 'var', 'static'], 'Ciò che non si riassegna si dichiara con `const`.'),
        out(`function prezzoSpedizione(totale, eSocio) {\n  if (eSocio) return 0;\n  if (totale >= 50) return 0;\n  return 4.99;\n}\nconsole.log(prezzoSpedizione(30, false), prezzoSpedizione(30, true), prezzoSpedizione(60, false));`, ['4.99 0 0', '0 0 4.99', '4.99 4.99 0', '4.99 0 4.99'], 'Ogni caso speciale esce subito; solo il caso normale arriva alla fine.'),
        mc('Che differenza c’è tra debounce e throttle?', ['Il debounce aspetta che l’azione si fermi; il throttle limita quante volte si esegue nel tempo', 'Sono la stessa cosa', 'Il throttle funziona solo con la tastiera', 'Il debounce esegue subito la funzione'], 'Debounce per le ricerche mentre si scrive; throttle per `scroll` o `resize`.'),
        fill(`const inizio = performance.___();\nfaiQualcosa();\nconsole.log(performance.now() - inizio, "ms");`, ['now', 'time', 'start', 'clock'], '`performance.now()` dà un timestamp preciso.'),
        out(`function debounce(fn, ms) {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), ms);\n  };\n}\nconst log = [];\nconst cerca = debounce((txt) => log.push(txt), 20);\ncerca("j");\ncerca("ja");\ncerca("jav");\nsetTimeout(() => cerca("java"), 50);\nsetTimeout(() => console.log(log.join(",")), 100);`, ['jav,java', 'j,ja,jav,java', 'java', 'j,java'], 'Le prime tre chiamate arrivano di seguito: ognuna annulla la precedente e si esegue solo "jav". "java" arriva più tardi e si esegue anche lei.'),
        out(`const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));\nlet chiamate = 0;\nconst cache = {};\nfunction fibMemo(n) {\n  chiamate++;\n  if (n in cache) return cache[n];\n  return (cache[n] = n < 2 ? n : fibMemo(n - 1) + fibMemo(n - 2));\n}\nconsole.log(fib(10), fibMemo(10), chiamate);`, ['55 55 19', '55 55 177', '55 55 11', '89 89 19'], 'Entrambe danno lo stesso risultato, ma la versione con cache calcola ogni numero una sola volta: 11 calcoli (da 10 a 0) più 8 letture della cache. La versione senza cache farebbe 177 chiamate.'),
      ],
    },
    // Giorno 30
    {
      id: 'js-workshop-shop',
      t: 'Il laboratorio di Kibi: il negozio completo',
      d: 'Progetto finale: il negozio di Kibi con una classe Prodotto, un catalogo caricato con fetch, moduli, un generatore e test con Vitest.',
      guide: [
        { h: 'L’incarico', p: [
          'Quattro settimane dopo, il negozio di Kibi va davvero sul web: un catalogo che arriva in JSON, una pagina che mostra i prodotti disponibili e test che avvisano se qualcosa si rompe.',
          'Mettiamo insieme l’ultima settimana con tutto quello che c’era prima. Ogni file è un modulo con un solo compito, così si capisce meglio e si può testare pezzo per pezzo. Node.js e npm si occupano di installare ed eseguire i test.' ],
          code: `negozio/\n├── package.json         # "type": "module" e vitest\n├── index.html\n├── catalogo.json\n├── src/\n│   ├── prodotto.js      # la classe Prodotto\n│   ├── catalogo.js      # caricare il catalogo con fetch\n│   └── app.js           # la pagina\n└── test/\n    └── prodotto.test.js` },
        { h: 'Passo 1: la classe Prodotto', p: [
          'Le scorte sono un campo privato (`#scorte`): solo la classe può cambiarle, e da fuori si leggono con un getter. `vendi()` solleva un `RangeError` se non bastano, invece di lasciare le scorte in negativo.',
          '`export` permette di importare la classe da altri file.' ],
          code: `// src/prodotto.js\nexport class Prodotto {\n  #scorte;\n\n  constructor(nome, prezzo, scorte = 0) {\n    this.nome = nome;\n    this.prezzo = prezzo;\n    this.#scorte = scorte;\n  }\n\n  get scorte() {\n    return this.#scorte;\n  }\n\n  disponibile(quantita) {\n    return quantita > 0 && quantita <= this.#scorte;\n  }\n\n  vendi(quantita) {\n    if (!this.disponibile(quantita)) throw new RangeError("Scorte esaurite");\n    this.#scorte -= quantita;\n    return Math.round(this.prezzo * quantita * 100) / 100;\n  }\n}` },
        { h: 'Passo 2: caricare il catalogo con fetch', p: [
          'Una funzione `async` chiede il JSON con `fetch` e aspetta la risposta con `await`. Se il server risponde con un errore, `risposta.ok` è `false` e ne solleviamo uno noi.',
          'Ogni oggetto del JSON diventa un `Prodotto` con `map`, così il resto del codice lavora con oggetti che sanno vendere.' ],
          code: `// src/catalogo.js\nimport { Prodotto } from "./prodotto.js";\n\nexport async function caricaCatalogo(url = "catalogo.json") {\n  const risposta = await fetch(url);\n  if (!risposta.ok) throw new Error("HTTP " + risposta.status);\n  const dati = await risposta.json();\n  return dati.map((d) => new Prodotto(d.nome, d.prezzo, d.scorte));\n}` },
        { h: 'Passo 3: la pagina', p: [
          'Un generatore (`function*`) consegna solo i prodotti disponibili, uno alla volta, senza creare un array intermedio. `for...of` lo scorre come qualsiasi altro iterabile.',
          'In un modulo si può usare `await` fuori da una funzione: la pagina aspetta il catalogo e poi disegna la lista.' ],
          code: `// src/app.js\nimport { caricaCatalogo } from "./catalogo.js";\n\nfunction* disponibili(catalogo) {\n  for (const p of catalogo) if (p.scorte > 0) yield p;\n}\n\nconst lista = document.querySelector("#prodotti");\nfor (const p of disponibili(await caricaCatalogo())) {\n  const li = document.createElement("li");\n  li.textContent = \`\${p.nome} · \${p.prezzo.toFixed(2)} €\`;\n  lista.append(li);\n}` },
        { h: 'Esempio reale: testare il negozio prima di aprirlo', real: true, p: [
          'Con `npm install -D vitest` e `npx vitest`, Node.js esegue i test in un secondo a ogni modifica. Il primo controlla che vendere riduca le scorte; il secondo, che non si possa vendere più di quello che c’è.' ],
          code: `// test/prodotto.test.js\nimport { describe, test, expect } from "vitest";\nimport { Prodotto } from "../src/prodotto.js";\n\ndescribe("Prodotto", () => {\n  test("vende e riduce le scorte", () => {\n    const semi = new Prodotto("Semi", 4.5, 10);\n    expect(semi.vendi(3)).toBe(13.5);\n    expect(semi.scorte).toBe(7);\n  });\n\n  test("non vende più di quello che c'è", () => {\n    expect(() => new Prodotto("Fieno", 7.25, 2).vendi(3)).toThrow(RangeError);\n  });\n});` },
        { h: 'Come continuare', p: [
          'In quattro settimane hai fatto tutta la strada da `console.log("Ciao, mondo")` a un’applicazione web con classi, dati asincroni, moduli e test. È la stessa struttura di molti progetti professionali, solo più piccola.',
          'Prossimi passi: metti il progetto su Git, aggiungi ESLint e Prettier, crea con Express l’API che serve `catalogo.json` e pubblica la pagina su un servizio di hosting. Scegli un tuo problema e risolvilo con ciò che sai: è il modo più veloce per continuare a imparare.' ] },
      ],
      x: [
        mc('Che cosa significa il cancelletto di `#scorte` nella classe?', ['Che è un campo privato: si può cambiare solo dall’interno della classe', 'Che è un commento', 'Che il numero deve essere intero', 'Che il browser lo richiede per esportare la classe'], 'I campi con `#` non si possono leggere né cambiare da fuori; per questo la classe offre il getter `scorte`.'),
        out(`class Prodotto {\n  #scorte;\n  constructor(nome, scorte) {\n    this.nome = nome;\n    this.#scorte = scorte;\n  }\n  disponibile(n) {\n    return n > 0 && n <= this.#scorte;\n  }\n}\nconst p = new Prodotto("Semi", 3);\nconsole.log(p.disponibile(3), p.disponibile(0), p.disponibile(4));`, ['true false false', 'true true false', 'false false false', 'true false true'], '3 rientra nelle scorte; 0 non è una quantità positiva e 4 supera le scorte.'),
        fill(`const risposta = ___ fetch("catalogo.json");`, ['await', 'async', 'then', 'yield'], '`await` aspetta che la promise di `fetch` si risolva e ne dà il risultato.'),
        mc('Una funzione `async` termina con `return dati`. Che cosa riceve chi la chiama senza `await`?', ['Una promise che si risolve con dati', 'I dati direttamente', 'undefined', 'Un errore'], 'Una funzione `async` restituisce sempre una promise; `await` o `then` ne estraggono il valore.'),
        out(`function* disponibili(scorte) {\n  for (const s of scorte) if (s > 0) yield s;\n}\nconsole.log([...disponibili([3, 0, 5, 0, 1])].join("-"));`, ['3-5-1', '3-0-5-0-1', '3', '0-0'], 'Il generatore consegna solo i valori maggiori di 0, e lo spread li raccoglie in un array.'),
        typ('Completa la riga perché altri file possano importare la classe', `___ class Prodotto {\n  // ...\n}`, 'export', '`export` rende pubblica la classe; gli altri moduli la importano con `import { Prodotto } from "./prodotto.js"`.'),
        mc('Perché il test scrive `expect(() => p.vendi(3)).toThrow()` con una arrow function?', ['Perché expect esegua la chiamata e catturi l’errore; altrimenti l’errore verrebbe sollevato prima', 'Perché le arrow function sono più veloci', 'Perché vendi è asincrona', 'Per non dover importare Prodotto'], 'Senza la freccia, `p.vendi(3)` verrebbe eseguita mentre si preparano gli argomenti e l’errore romperebbe il test prima di arrivare a `toThrow`.'),
        out(`class Prodotto {\n  #scorte;\n  constructor(nome, prezzo, scorte = 0) {\n    this.nome = nome;\n    this.prezzo = prezzo;\n    this.#scorte = scorte;\n  }\n  get scorte() {\n    return this.#scorte;\n  }\n  vendi(n) {\n    if (n <= 0 || n > this.#scorte) throw new RangeError("Scorte esaurite");\n    this.#scorte -= n;\n    return this.prezzo * n;\n  }\n}\nconst semi = new Prodotto("Semi", 4.5, 5);\nlet cassa = 0;\nfor (const n of [2, 4, 3]) {\n  try {\n    cassa += semi.vendi(n);\n  } catch (e) {\n    console.log(e.name);\n  }\n}\nconsole.log(cassa, semi.scorte);`, ['RangeError\n22.5 0', 'RangeError\n40.5 0', '22.5 0', 'RangeError\n9 3'], 'Se ne vendono 2 (9 €, ne restano 3). Chiederne 4 solleva `RangeError` e non cambia nulla. Poi se ne vendono 3 (13.5 €): 22.5 in cassa e scorte a 0.'),
      ],
    },
  ],
}))(Sintaxis);
