/* Python · Italiano */
(({ mc, out, fill, ord, typ, code, addCourse }) => addCourse('python', 'it', {
  tag: 'Dal tuo primo print() a un negozio con database, API e test: quattro settimane, con un progetto alla fine di ognuna.',
  days: [
    // ───────────── Giorno 1 ─────────────
    {
      id: 'py-intro',
      t: 'Il tuo primo programma',
      d: 'Che cos’è Python, come eseguire un file, print(), l’indentazione e i commenti.',
      guide: [
        { h: 'Che cos’è Python?', p: [
          'Python è un linguaggio di programmazione di alto livello creato da Guido van Rossum e pubblicato nel 1991. Si legge quasi come l’inglese, ed è per questo che è uno dei primi linguaggi più popolari.',
          'Oggi Instagram e Spotify lo usano sui loro server, la NASA lo usa per le analisi scientifiche e quasi tutti i team di intelligenza artificiale si affidano a lui.',
          'È un linguaggio interpretato: non c’è una fase di compilazione. Scrivi il codice e Python lo esegue riga per riga, dall’alto verso il basso.' ] },
        { h: 'Il tuo primo programma', p: [
          'Installa Python da python.org e salva questo in un file chiamato `ciao.py`. Eseguilo con `python ciao.py` nel terminale.',
          '`print()` mostra quello che metti tra le parentesi. Il testo va tra virgolette; i numeri no.',
          'Puoi anche scrivere `python` nel terminale per aprire la console interattiva e provare singole righe. Esci con `exit()`.' ],
          code: `print("Ciao, mondo")\nprint(3 + 4)  # 7` },
        { h: 'Python come calcolatrice', p: [
          'Gli operatori di base sono `+`, `-`, `*` e `/`. Le potenze si scrivono `**`.',
          'Ogni valore ha un tipo: `int` per i numeri interi, `float` per i decimali e `str` per il testo. `type()` ti dice quale. Attenzione: i decimali si scrivono con il punto.' ],
          code: `print(10 - 3)        # 7\nprint(10 / 4)        # 2.5\nprint(2 ** 3)        # 8\nprint(type(10))      # <class 'int'>\nprint(type(2.5))     # <class 'float'>\nprint(type("ciao"))  # <class 'str'>` },
        { h: 'Indentazione e commenti', p: [
          'Python non usa le parentesi graffe: un’indentazione di 4 spazi indica quali righe appartengono a un blocco. Se non è allineata, Python solleva `IndentationError`.',
          'Tutto ciò che segue `#` è un commento: Python lo ignora, e serve a spiegare il codice agli altri (o a te tra un mese).' ],
          code: `# Controllare se qualcuno può votare\neta = 20\nif eta >= 18:\n    print("Puoi votare")  # dentro l'if\nprint("Fatto")            # fuori dall'if` },
        { h: 'Esempio reale: dividere il conto al ristorante', real: true, p: [
          'Bastano quattro righe per risolvere un problema quotidiano: dividere il conto e la mancia tra amici.',
          '`round(numero, 2)` arrotonda a due decimali, esattamente quello che serve con i soldi.' ],
          code: `conto = 84.50\npersone = 3\nmancia = conto * 0.10\nprint("Ognuno paga:", round((conto + mancia) / persone, 2))  # Ognuno paga: 30.98` },
      ],
      x: [
        mc('Quale funzione mostra del testo sullo schermo in Python?', ['print()', 'echo()', 'console.log()', 'printf()'], '`print()` scrive sull’output standard. `console.log()` è di JavaScript.'),
        mc('Come si scrive un commento in Python?', ['# commento', '// commento', '/* commento */', '-- commento'], 'Tutto ciò che segue `#` su una riga è un commento.'),
        out(`print(2 ** 3)`, ['8', '6', '9', '23'], '`**` è l’operatore di potenza: 2 elevato alla 3 fa 8.'),
        mc('Che cosa delimita i blocchi di codice in Python?', ['L’indentazione', 'Le parentesi graffe { }', 'Le parole begin ed end', 'I punti e virgola'], 'Python usa l’indentazione; se non è allineata, solleva `IndentationError`.'),
        out(`print(type("7"))`, ["<class 'str'>", "<class 'int'>", "<class 'float'>"], 'Le virgolette trasformano il 7 in testo, uno `str`.'),
        ord('Scrivi il codice che mostra Ciao, mondo', ['print', '(', '"Ciao, mondo"', ')'], ['echo', '{'], 'Si chiama `print` con il testo tra virgolette dentro le parentesi.'),
        out(`print("Ciao" * 3)`, ['CiaoCiaoCiao', 'Ciao 3', 'Errore', 'Ciao*3'], 'Moltiplicare una stringa per un intero la ripete.'),
        out(`a = 10\nb = 3\nprint(a + b * 2, (a + b) * 2)`, ['16 26', '26 16', '16 16', '26 26'], 'La moltiplicazione viene prima dell’addizione; le parentesi cambiano l’ordine. `print` separa i valori con uno spazio.'),
      ],
      lab: [
        code('Scrivi un programma che mostri `Ciao, Kibi` su una riga e, su quella dopo, il risultato di `7 * 6`.', `# Scrivi qui il tuo programma\n`, [{ in: '', out: 'Ciao, Kibi\n42' }], `print("Ciao, Kibi")\nprint(7 * 6)`, '`print()` scrive ogni valore su una nuova riga: prima il testo tra virgolette e poi il risultato di `7 * 6`, che viene calcolato prima di mostrarlo.'),
      ],
    },
    // ───────────── Giorno 2 ─────────────
    {
      id: 'py-vars',
      t: 'Variabili e tipi',
      d: 'Salvare dati con un nome, i tipi di base, input() e passare dal testo ai numeri.',
      guide: [
        { h: 'Che cos’è una variabile?', p: [
          'Una variabile è un nome che punta a un valore. La crei con `=`, che in Python significa «assegnare», non «uguale».',
          'Non serve dichiarare il tipo: Python lo deduce dal valore. Puoi riassegnare la variabile quando vuoi, anche con un valore di un altro tipo.' ],
          code: `nome = "Ana"\neta = 25\nprint(nome, eta)  # Ana 25\neta = 26          # riassegnare cambia il valore\nprint(eta)        # 26` },
        { h: 'Dare un nome alle variabili', p: [
          'Usa lo snake_case: parole minuscole separate da trattini bassi (`prezzo_totale`). Un nome non può iniziare con una cifra né contenere trattini o spazi.',
          'Python distingue maiuscole e minuscole: `eta` ed `Eta` sono variabili diverse. Per convenzione, le costanti si scrivono in MAIUSCOLO.',
          'Non puoi usare parole riservate come `if`, `for`, `class` o `def`. Scegli nomi che spieghino cosa contengono: `prezzo` è meglio di `p`.' ],
          code: `prezzo_totale = 99.9   # bene: snake_case\nPI = 3.14159           # una costante per convenzione\nEta = 30               # diversa da eta\n# 2prezzo = 5          # SyntaxError: non può iniziare con una cifra\n# mio-prezzo = 5       # errore: il trattino viene letto come meno` },
        { h: 'Assegnazione multipla', p: [
          'Puoi assegnare più variabili in una sola riga separandole con virgole. Python abbina ogni nome al suo valore.',
          'È il modo più pulito per scambiare due valori: non serve una variabile temporanea.' ],
          code: `x, y, z = 1, 2, 3\na = b = 0          # valgono entrambe 0\nx, y = y, x        # scambio\nprint(x, y)        # 2 1` },
        { h: 'Funzioni integrate', p: [
          'Python offre funzioni pronte all’uso: `print()`, `len()` (lunghezza), `type()`, `int()`, `float()` e `str()` (conversioni), `round()`, `abs()`, `min()` e `max()`.',
          'Le conversioni sono fondamentali: `"7" + "7"` dà `"77"`, ma `int("7") + 7` dà 14.' ],
          code: `print(len("Python"))      # 6\nprint(type(3.5))          # <class 'float'>\nprint(int("42") + 1)      # 43\nprint(str(7) + "7")       # 77\nprint(round(3.14159, 2))  # 3.14\nprint(max(4, 9, 2))       # 9` },
        { h: 'input() restituisce sempre testo', p: [
          '`input()` mostra un messaggio, aspetta che l’utente scriva e restituisce ciò che ha scritto come `str`, anche se sono solo cifre.',
          'L’errore classico è `input() + 1`: Python solleva `TypeError` perché non può sommare testo e un numero. Converti prima con `int()` o `float()`.' ],
          code: `testo = input("Quanti anni hai? ")  # l'utente scrive 30\neta = int(testo)                     # "30" -> 30\nprint("L'anno prossimo avrai", eta + 1)  # L'anno prossimo avrai 31` },
        { h: 'Esempio reale: calcolare l’IMC', real: true, p: [
          'L’indice di massa corporea è il peso diviso l’altezza al quadrato. Chiediamo i dati, li convertiamo in `float` e arrotondiamo il risultato.' ],
          code: `nome = input("Nome: ")                       # Lucia\npeso = float(input("Peso in kg: "))          # 62.5\naltezza = float(input("Altezza in m: "))     # 1.68\nimc = peso / altezza ** 2\nprint(nome, "ha un IMC di", round(imc, 1))  # Lucia ha un IMC di 22.1` },
      ],
      x: [
        out(`x = 5\ny = 3\nprint(x + y)`, ['8', '53', 'x + y', 'Errore'], 'Entrambe le variabili sono intere, quindi `+` le somma.'),
        mc('Quale nome di variabile è valido?', ['nome_completo', '2nome', 'nome-completo', 'class'], 'Un nome non può iniziare con una cifra, contenere trattini né essere una parola riservata come `class`.'),
        out(`print(len("Python"))`, ['6', '5', '7', 'Errore'], '`len()` conta i caratteri del testo.'),
        typ('Converti il testo "25" in un intero', `eta = ___("25")`, 'int', '`int()` trasforma un testo fatto di cifre in un intero. `float()` lo trasformerebbe in un decimale.'),
        out(`a, b = 1, 2\na, b = b, a\nprint(a, b)`, ['2 1', '1 2', '2 2', 'Errore'], 'L’assegnazione multipla scambia i valori in una sola riga.'),
        out(`print(round(7.456, 1), abs(-3))`, ['7.5 3', '7.4 3', '7.5 -3', '7.46 3'], '`round(7.456, 1)` tiene un decimale e arrotonda per eccesso; `abs()` toglie il segno.'),
        out(`eta = input("Età: ")  # l'utente scrive 20\nprint(type(eta))`, ["<class 'str'>", "<class 'int'>", "<class 'float'>", '20'], '`input()` restituisce sempre testo. Per farci dei calcoli, convertilo con `int()`.'),
        out(`prezzo = "19.99"\nquantita = 3\ntotale = float(prezzo) * quantita\nprint(round(totale, 2), type(totale).__name__)`, ['59.97 float', '19.9919.9919.99 str', '59.97 int', 'Errore'], '`float("19.99")` trasforma il testo in numero prima di moltiplicare. Un `float` per un `int` dà un `float`.'),
      ],
    },
    // ───────────── Giorno 3 ─────────────
    {
      id: 'py-operators',
      t: 'Operazioni e confronti',
      d: 'Calcolare, confrontare e combinare condizioni con and, or e not, e in che ordine Python valuta tutto.',
      guide: [
        { h: 'Operatori aritmetici', p: [
          'Oltre a `+ - * /`, Python ha la divisione intera `//` (scarta i decimali), il resto `%` e la potenza `**`.',
          '`/` restituisce sempre un `float`, anche quando la divisione è esatta. Se ti serve un intero, usa `//`.',
          '`%` è più utile di quanto sembri: `n % 2 == 0` ti dice se un numero è pari, e `n % 60` ti dà i minuti avanzati.' ],
          code: `print(7 + 2)    # 9\nprint(7 / 2)    # 3.5\nprint(7 // 2)   # 3\nprint(7 % 2)    # 1\nprint(2 ** 10)  # 1024\nprint(6 / 3)    # 2.0` },
        { h: 'Precedenza: cosa viene prima', p: [
          'Python segue l’ordine della matematica: prima `**`, poi `* / // %` e infine `+ -`. Nel dubbio, aggiungi parentesi: rendono anche il codice più chiaro.',
          'Attenzione a `-2 ** 2`: la potenza si calcola prima del segno, quindi dà -4.' ],
          code: `print(2 + 3 * 4)    # 14\nprint((2 + 3) * 4)  # 20\nprint(-2 ** 2)      # -4\nprint((-2) ** 2)    # 4` },
        { h: 'Confronto e logica', p: [
          'Gli operatori di confronto `== != > < >= <=` restituiscono `True` o `False`. Non confondere `=` (assegnare) con `==` (confrontare).',
          '`and` richiede che entrambe le condizioni siano vere, `or` che almeno una lo sia, e `not` inverte il risultato.',
          'Python permette di concatenare i confronti: `18 <= eta < 65` si legge come in matematica.' ],
          code: `eta = 20\nprint(eta >= 18)              # True\nprint(eta == 18)              # False\nprint(18 <= eta < 65)         # True\nprint(eta > 18 and eta < 21)  # True\nprint(not eta > 18)           # False` },
        { h: 'Assegnazione composta e decimali', p: [
          '`x += 1` equivale a `x = x + 1`. Esistono anche `-=`, `*=`, `/=`, `//=` e `%=`.',
          'I `float` sono memorizzati in binario e a volte non sono esatti: `0.1 + 0.2` non fa esattamente 0.3. Quando mostri dei soldi, arrotonda con `round()`.' ],
          code: `saldo = 100\nsaldo -= 30   # 70\nsaldo *= 2    # 140\nprint(saldo)  # 140\nprint(0.1 + 0.2)            # 0.30000000000000004\nprint(round(0.1 + 0.2, 2))  # 0.3` },
        { h: 'Esempio reale: durata di un film e prezzo scontato', real: true, p: [
          'Una piattaforma di streaming salva la durata di un film in minuti ma la mostra in ore e minuti. `//` e `%` fanno il lavoro.',
          'E un negozio che applica uno sconto del 25 % deve solo moltiplicare per `1 - sconto`.' ],
          code: `minuti = 135\nore = minuti // 60\nresto = minuti % 60\nprint(ore, "h", resto, "min")  # 2 h 15 min\n\nprezzo = 80\nsconto = 0.25\nprint("Paghi:", prezzo * (1 - sconto))  # Paghi: 60.0` },
      ],
      x: [
        out(`print(7 // 2)`, ['3', '3.5', '4', '1'], '`//` è la divisione intera: scarta i decimali.'),
        out(`print(10 % 3)`, ['1', '3', '0', '3.33'], '`%` restituisce il resto: il 3 sta nel 10 tre volte e avanza 1.'),
        out(`print(6 / 2)`, ['3.0', '3', '2', 'Errore'], 'La divisione con `/` restituisce sempre un `float`, anche se il risultato è esatto.'),
        mc('Quale operatore controlla se due valori sono uguali?', ['==', '=', '===', 'equals'], '`=` assegna un valore; `==` confronta. `===` non esiste in Python.'),
        out(`print(5 > 3 and 2 > 4)`, ['False', 'True', 'None', 'Errore'], '`and` è vero solo se lo sono entrambe le condizioni, e 2 > 4 è falso.'),
        out(`x = 10\nx += 5\nx *= 2\nprint(x)`, ['30', '25', '20', '15'], 'Prima 10 + 5 = 15, poi 15 * 2 = 30.'),
        fill(`n = 17\ne_pari = n ___ 2 == 0\nprint(e_pari)  # False`, ['%', '//', '/', '**'], 'Un numero è pari quando il resto della divisione per 2 è 0, e il resto si calcola con `%`.', 'Completa il codice per controllare se n è pari'),
        out(`print(2 + 3 * 4 ** 2 // 10, not 3 == 3 or 1 < 2)`, ['6 True', '8 True', '6 False', '20 True'], '4 ** 2 = 16, 3 * 16 = 48, 48 // 10 = 4 e 2 + 4 = 6. `not 3 == 3` è False, ma `or 1 < 2` dà True.'),
      ],
    },
    // ───────────── Giorno 4 ─────────────
    {
      id: 'py-strings',
      t: 'Lavorare con il testo',
      d: 'Indici, slicing, f-string e i metodi che puliscono e trasformano il testo.',
      guide: [
        { h: 'Creare testo', p: [
          'Una stringa (`str`) è una sequenza di caratteri tra virgolette singole o doppie. Usa il tipo di virgolette che non compare nel testo.',
          'Le virgolette triple permettono di scrivere su più righe. In una stringa, `\\n` è un a capo e `\\t` una tabulazione.',
          'Le stringhe sono immutabili: i metodi non cambiano il testo originale, ne restituiscono uno nuovo.' ],
          code: `saluto = "Ciao"\nfrase = 'Ha detto "va bene" e se ne è andata'\npoesia = """Riga uno\nRiga due"""\nprint(len(saluto))  # 4\nprint("Uno\\tDue\\nTre")` },
        { h: 'Indici e slicing', p: [
          'Ogni carattere ha una posizione che parte da 0. Gli indici negativi contano dalla fine: `-1` è l’ultimo.',
          '`s[inizio:fine]` taglia da `inizio` fino a `fine` senza includerla. Se ne ometti uno, si arriva fino in fondo. `s[::-1]` inverte il testo.' ],
          code: `linguaggio = "Python"\nprint(linguaggio[0])     # P\nprint(linguaggio[-1])    # n\nprint(linguaggio[1:4])   # yth\nprint(linguaggio[:2])    # Py\nprint(linguaggio[::-1])  # nohtyP` },
        { h: 'f-string: inserire variabili nel testo', p: [
          'Una f-string ha una `f` prima delle virgolette e sostituisce ciò che sta tra graffe con il suo valore. È il modo moderno e più leggibile.',
          'Puoi formattare i valori: `{prezzo:.2f}` mostra due decimali. Puoi anche unire testo con `+`, ma tutto deve essere `str`: converti i numeri con `str()`.' ],
          code: `nome = "Ana"\neta = 30\nprezzo = 4.5\nprint(f"{nome} ha {eta} anni")         # Ana ha 30 anni\nprint(f"Totale: {prezzo * 3:.2f} €")  # Totale: 13.50 €\nprint("Età: " + str(eta))             # Età: 30` },
        { h: 'Metodi delle stringhe', p: [
          '`strip()` toglie gli spazi alle due estremità, `lower()` e `upper()` cambiano maiuscole e minuscole, `title()` mette la maiuscola a ogni parola e `replace()` sostituisce del testo.',
          '`split()` taglia il testo in una lista e `join()` fa il contrario. `count()`, `find()`, `startswith()`, `endswith()` e `isdigit()` aiutano a cercare e verificare.' ],
          code: `testo = "  Ciao Mondo  "\nprint(testo.strip())                     # Ciao Mondo\nprint(testo.strip().lower())             # ciao mondo\nprint("a-b-c".split("-"))                # ['a', 'b', 'c']\nprint(" ".join(["Mi", "piace", "Python"]))  # Mi piace Python\nprint("banana".count("a"))               # 3\nprint("2024".isdigit())                  # True` },
        { h: 'Esempio reale: pulire un’e-mail da un modulo', real: true, p: [
          'Le persone scrivono la loro e-mail con spazi e maiuscole. Prima di salvarla, normalizzala e, già che ci sei, crea un nome utente.',
          'Concatenare metodi (`strip().lower()`) è comune: ognuno lavora sul risultato del precedente.' ],
          code: `email = "  Lucia.Rossi@Gmail.COM "\nemail = email.strip().lower()\nutente = email.split("@")[0].replace(".", "_")\nprint(email)                         # lucia.rossi@gmail.com\nprint(utente)                        # lucia_rossi\nprint(email.endswith("@gmail.com"))  # True` },
      ],
      x: [
        out(`print("3" + "4")`, ['34', '7', 'Errore', '3 + 4'], 'Con le stringhe, `+` concatena: unisce "3" e "4".'),
        fill(`nome = "Ana"\nprint(___"Ciao {nome}")`, ['f', 's', '$', '%'], 'La `f` prima delle virgolette crea una f-string, che sostituisce `{nome}` con il suo valore.'),
        out(`s = "Python"\nprint(s[0], s[-1])`, ['P n', 'P o', 'y n', 'Errore'], 'L’indice 0 è il primo carattere e -1 l’ultimo.'),
        out(`print("ciao mondo".title())`, ['Ciao Mondo', 'CIAO MONDO', 'Ciao mondo', 'ciao Mondo'], '`title()` mette in maiuscolo la prima lettera di ogni parola.'),
        out(`print("Python"[1:4])`, ['yth', 'ytho', 'Pyt', 'pyth'], 'Lo slicing parte dall’indice 1 (`y`) e si ferma prima dell’indice 4.'),
        out(`print("a,b,c".split(","))`, ["['a', 'b', 'c']", 'abc', 'a b c', "('a', 'b', 'c')"], '`split(",")` taglia il testo a ogni virgola e restituisce una lista.'),
        typ('Togli gli spazi all’inizio e alla fine', `pulito = "  ciao  ".___()`, 'strip', '`strip()` toglie gli spazi (e gli a capo) alle due estremità.'),
        out(`nome = "  ada lovelace "\npulito = nome.strip().title()\nprint(f"{pulito[:3]}-{len(pulito)}")`, ['Ada-12', 'ada-15', 'Ada-15', 'Ada -12'], 'Dopo `strip()` restano 12 caratteri ("ada lovelace") e `title()` dà "Ada Lovelace". `[:3]` prende "Ada".'),
      ],
    },
    // ───────────── Giorno 5 ─────────────
    {
      id: 'py-conditionals',
      t: 'Prendere decisioni',
      d: 'if, elif ed else, cosa conta come vero e l’if su una riga.',
      guide: [
        { h: 'if ed else', p: [
          '`if` esegue un blocco solo quando la condizione è vera. `else` copre il caso contrario. La condizione è seguita dai due punti e il blocco è indentato di 4 spazi.',
          'Dimenticare i due punti è l’errore più comune dei principianti: Python risponde con `SyntaxError`.' ],
          code: `temperatura = 31\nif temperatura > 30:\n    print("Fa caldo")\n    print("Bevi acqua")\nelse:\n    print("Temperatura piacevole")` },
        { h: 'Più opzioni con elif', p: [
          '`elif` (altrimenti se) prova un’altra condizione se la precedente è fallita. Python prende la prima che è vera e salta le altre.',
          'Per questo l’ordine conta: vai dalla condizione più rigida alla più larga.' ],
          code: `voto = 78\nif voto >= 90:\n    giudizio = "Ottimo"\nelif voto >= 70:\n    giudizio = "Molto buono"\nelif voto >= 50:\n    giudizio = "Sufficiente"\nelse:\n    giudizio = "Insufficiente"\nprint(giudizio)  # Molto buono` },
        { h: 'Vero e falso', p: [
          'Qualsiasi valore può fare da condizione. Sono falsi: `0`, `0.0`, `""`, `[]`, `{}`, `set()` e `None`. Tutto il resto è vero.',
          'Così `if not carrello:` è il modo idiomatico per chiedere se una lista è vuota.',
          'Combina le condizioni con `and`, `or` e `not`, e usa `in` per controllare se un valore è uno tra tanti.' ],
          code: `carrello = []\nif not carrello:\n    print("Il carrello è vuoto")\n\nutente = "admin"\nif utente in ("admin", "root") and len(utente) > 3:\n    print("Accesso completo")` },
        { h: 'Condizioni annidate e operatore ternario', p: [
          'Puoi mettere un `if` dentro un altro, ma più di due livelli diventano difficili da leggere: spesso `and` o `elif` semplificano.',
          'L’operatore ternario scrive un if/else che restituisce un valore in una riga: `valore_se_vero if condizione else valore_se_falso`.' ],
          code: `eta = 16\nmessaggio = "maggiorenne" if eta >= 18 else "minorenne"\nprint(messaggio)  # minorenne` },
        { h: 'Esempio reale: il prezzo di un biglietto del cinema', real: true, p: [
          'Un cinema fa pagare 5 € ai minori di 12 anni, 6 € agli over 65 e 9 € a tutti gli altri. Il mercoledì, giorno del cinema, toglie altri 2 €.' ],
          code: `eta = 67\ne_mercoledi = True\nif eta < 12:\n    prezzo = 5\nelif eta >= 65:\n    prezzo = 6\nelse:\n    prezzo = 9\nif e_mercoledi:\n    prezzo -= 2\nprint("Biglietto:", prezzo, "€")  # Biglietto: 4 €` },
      ],
      x: [
        out(`x = 7\nif x > 5:\n    print("grande")\nelse:\n    print("piccolo")`, ['grande', 'piccolo', 'grande\npiccolo', 'Niente'], '7 è maggiore di 5, quindi si esegue il blocco `if` e si salta l’`else`.'),
        fill(`if voto >= 90:\n    print("A")\n___ voto >= 70:\n    print("B")`, ['elif', 'else if', 'elseif', 'case'], 'In Python, «altrimenti, se...» si scrive `elif`.'),
        ord('Scrivi la condizione: se x è pari', ['if', 'x', '%', '2', '==', '0', ':'], ['=', '/'], '`%` dà il resto. Se il resto della divisione per 2 è 0, il numero è pari. Confronta con `==`, non con `=`.'),
        out(`n = 0\nif n:\n    print("sì")\nelse:\n    print("no")`, ['no', 'sì', '0', 'Errore'], 'Lo 0 conta come falso in una condizione.'),
        out(`eta = 15\nr = "maggiorenne" if eta >= 18 else "minorenne"\nprint(r)`, ['minorenne', 'maggiorenne', 'True', '15'], 'È un ternario: siccome 15 è minore di 18, si usa il valore dell’`else`.'),
        mc('Quale di questi valori è vero in un `if`?', ['[0]', '""', '[]', 'None'], 'Una lista con un elemento è vera anche se quell’elemento è 0. Le collezioni vuote e `None` sono false.'),
        out(`x = 5\nif x > 2:\n    if x > 10:\n        print("A")\n    else:\n        print("B")`, ['B', 'A', 'A\nB', 'Niente'], 'Entra nel primo `if`, ma 5 non è maggiore di 10, quindi passa all’`else` interno.'),
        out(`punti = 85\nvip = False\nif punti >= 90 or vip:\n    livello = "oro"\nelif punti >= 80 and not vip:\n    livello = "argento"\nelse:\n    livello = "bronzo"\nprint(livello.upper() if punti % 2 else livello)`, ['ARGENTO', 'argento', 'ORO', 'bronzo'], '85 non arriva a 90 e non è VIP, ma soddisfa l’`elif`: "argento". 85 % 2 vale 1, che è vero, quindi viene stampato in maiuscolo.'),
      ],
    },
    // ───────────── Giorno 6 ─────────────
    {
      id: 'py-loops',
      t: 'Ripetere con i cicli',
      d: 'for e while, range(), break e continue: lascia che il programma ripeta il lavoro al posto tuo.',
      guide: [
        { h: 'Il ciclo for', p: [
          '`for` percorre gli elementi di qualsiasi sequenza: una lista, una stringa, un dizionario... A ogni giro, la variabile prende l’elemento successivo.',
          'Usalo quando sai cosa devi percorrere. È il ciclo che userai di più in Python.',
          'In alcuni esempi compare una lista, più valori tra parentesi quadre. Per ora basta sapere che `for` li percorre uno alla volta; vedrai le liste a fondo nel giorno 8.' ],
          code: `frutti = ["mela", "pera", "kiwi"]\nfor frutto in frutti:\n    print(frutto.upper())\n\nfor lettera in "sole":\n    print(lettera)` },
        { h: 'range()', p: [
          '`range(n)` genera i numeri da 0 a n-1. `range(inizio, fine)` parte da dove dici tu, e `range(inizio, fine, passo)` avanza di `passo` alla volta; con un passo negativo conta all’indietro.',
          'La fine non è mai inclusa. È la stessa regola dello slicing.' ],
          code: `print(list(range(5)))          # [0, 1, 2, 3, 4]\nprint(list(range(2, 6)))       # [2, 3, 4, 5]\nprint(list(range(10, 0, -3)))  # [10, 7, 4, 1]\nfor i in range(3):\n    print("Giro", i)` },
        { h: 'Il ciclo while', p: [
          '`while` ripete finché la condizione è vera. Usalo quando non sai quanti giri ti serviranno.',
          'Assicurati che qualcosa nel ciclo prima o poi renda falsa la condizione; altrimenti avrai un ciclo infinito (fermalo con Ctrl+C).' ],
          code: `saldo = 1000\nanni = 0\nwhile saldo < 1500:\n    saldo *= 1.10   # 10 % di interesse annuo\n    anni += 1\nprint(anni)  # 5` },
        { h: 'break, continue ed enumerate', p: [
          '`break` esce subito dal ciclo; `continue` salta il resto del giro attuale e passa al successivo.',
          '`enumerate()` ti dà l’indice e l’elemento insieme, senza tenere un contatore a mano.' ],
          code: `for i, lettera in enumerate("abc"):\n    print(i, lettera)\n\nfor n in range(1, 10):\n    if n % 2 == 0:\n        continue   # salta i pari\n    if n > 7:\n        break      # si ferma arrivato a 9\n    print(n, end=" ")  # 1 3 5 7` },
        { h: 'Esempio reale: il riepilogo delle vendite della settimana', real: true, p: [
          'Un bar annota quanto vende ogni giorno. Un ciclo calcola il totale e conta quanti giorni hanno superato i 100 €.' ],
          code: `vendite = [120.5, 98.0, 143.25, 87.75, 210.0]\ntotale = 0\ngiorni_buoni = 0\nfor importo in vendite:\n    totale += importo\n    if importo >= 100:\n        giorni_buoni += 1\nprint("Totale:", totale)                    # Totale: 659.5\nprint("Giorni sopra i 100 €:", giorni_buoni)  # Giorni sopra i 100 €: 3` },
      ],
      x: [
        out(`for i in range(3):\n    print(i)`, ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', '3'], '`range(3)` produce 0, 1 e 2: parte da 0 e non include il 3.'),
        mc('Quali numeri produce `range(2, 10, 3)`?', ['2, 5, 8', '2, 4, 6, 8', '3, 6, 9', '2, 5, 8, 11'], 'Parte da 2, aggiunge 3 ogni volta e si ferma prima di arrivare a 10.'),
        out(`n = 0\nwhile n < 3:\n    n += 1\nprint(n)`, ['3', '2', '4', '0'], 'Il ciclo si ripete finché `n < 3`. Quando `n` vale 3 la condizione fallisce e si stampa 3.'),
        mc('Che cosa fa `break` dentro un ciclo?', ['Esce subito dal ciclo', 'Passa al giro successivo', 'Termina tutto il programma', 'Riavvia il ciclo'], '`break` ferma il ciclo. Per saltare solo il giro attuale, usa `continue`.'),
        out(`for c in "palla":\n    if c == "l":\n        continue\n    print(c, end="")`, ['paa', 'palla', 'pa', 'l'], '`continue` salta entrambe le "l". `end=""` evita l’a capo, quindi tutto esce attaccato.'),
        out(`totale = 0\nfor n in range(1, 5):\n    totale += n\nprint(totale)`, ['10', '15', '4', '5'], 'Somma 1 + 2 + 3 + 4 = 10; `range(1, 5)` non include il 5.'),
        typ('Percorri la posizione e il nome allo stesso tempo', `nomi = ["Ana", "Luis"]\nfor i, nome in ___(nomi):\n    print(i, nome)`, 'enumerate', '`enumerate()` restituisce coppie (indice, elemento) a ogni giro.'),
        out(`totale = 0\nfor i in range(1, 4):\n    for j in range(i):\n        totale += j\nprint(totale)`, ['4', '6', '10', '3'], 'Con i = 1 somma 0; con i = 2, 0 + 1; con i = 3, 0 + 1 + 2. In totale 0 + 1 + 3 = 4.'),
      ],
    },
    // ───────────── Giorno 7 ─────────────
    {
      id: 'py-workshop-register',
      t: 'Il laboratorio di Kibi: il registratore di cassa',
      d: 'Progetto della settimana 1: una cassa che chiede i prezzi, somma il totale, applica gli sconti e stampa lo scontrino.',
      guide: [
        { h: 'L’incarico', p: [
          'Kibi apre un negozio di semi e ha bisogno di un registratore di cassa nel terminale. Scrivi il prezzo di ogni articolo, la cassa somma, applica uno sconto quando serve e stampa lo scontrino.',
          'Questo laboratorio mette insieme tutta la settimana: variabili, `input()`, conversioni, condizioni, cicli e f-string. Lo costruiamo passo dopo passo e ogni passo funziona già da solo, così puoi eseguirlo e controllarlo prima di andare avanti.' ] },
        { h: 'Passo 1: chiedere prezzi finché non si scrive 0', p: [
          'Non sappiamo quanti articoli ci saranno, quindi usiamo `while True` e usciamo con `break` quando il cassiere scrive 0.',
          'Teniamo due conti insieme: il totale in euro e il numero di articoli. `+=` aggiunge al valore che c’era già.' ],
          code: `totale = 0\narticoli = 0\nwhile True:\n    prezzo = float(input("Prezzo (0 per finire): "))\n    if prezzo == 0:\n        break\n    totale += prezzo\n    articoli += 1\nprint(f"{articoli} articoli, totale {totale:.2f} €")` },
        { h: 'Passo 2: resistere a ciò che si scrive', p: [
          'Se il cassiere scrive `2,50` o `ciao`, `float()` fallisce e il programma si ferma. Prima sostituiamo la virgola con un punto e poi controlliamo che restino solo cifre con al massimo un punto.',
          '`continue` torna all’inizio del ciclo senza sommare nulla. Nel giorno 15 vedrai `try` ed `except`, il modo abituale di gestire questi errori.' ],
          code: `while True:\n    testo = input("Prezzo (0 per finire): ").replace(",", ".")\n    if not testo.replace(".", "", 1).isdigit():\n        print("Questo non è un prezzo, riprova")\n        continue\n    prezzo = float(testo)\n    if prezzo == 0:\n        break` },
        { h: 'Passo 3: sconti a fasce', p: [
          'Il negozio sconta il 10 % da 50 € e il 5 % da 20 €. Con `elif` l’ordine conta: si controlla prima la fascia più alta, perché anche 60 € soddisfa `>= 20`.',
          'Il formato `:.2f` mostra sempre due decimali, come su qualsiasi scontrino.' ],
          code: `totale = 42.8\nif totale >= 50:\n    sconto = totale * 0.10\nelif totale >= 20:\n    sconto = totale * 0.05\nelse:\n    sconto = 0\nprint(f"Sconto: {sconto:.2f} €")         # Sconto: 2.14 €\nprint(f"Da pagare: {totale - sconto:.2f} €")  # Da pagare: 40.66 €` },
        { h: 'Esempio reale: lo scontrino completo', real: true, p: [
          'Mettiamo insieme i tre passi. `:<10` allinea il testo a sinistra su 10 caratteri e `:>8.2f` allinea il numero a destra, così le cifre restano in colonna.',
          'Idee per ampliarlo: chiedere anche la quantità di ogni articolo, o calcolare il resto a partire da quello che consegna il cliente.' ],
          code: `totale = 0\narticoli = 0\nwhile True:\n    testo = input("Prezzo (0 per finire): ").replace(",", ".")\n    if not testo.replace(".", "", 1).isdigit():\n        print("Questo non è un prezzo")\n        continue\n    prezzo = float(testo)\n    if prezzo == 0:\n        break\n    totale += prezzo\n    articoli += 1\n\nsconto = totale * 0.10 if totale >= 50 else totale * 0.05 if totale >= 20 else 0\nprint("-" * 18)\nprint(f"{'Articoli':<10}{articoli:>8}")\nprint(f"{'Totale':<10}{totale:>8.2f}")\nprint(f"{'Sconto':<10}{sconto:>8.2f}")\nprint(f"{'Da pagare':<10}{totale - sconto:>8.2f}")` },
      ],
      x: [
        mc('Che cosa fa `break` dentro il `while True` della cassa?', ['Esce dal ciclo e continua con quello che viene dopo', 'Torna all’inizio del ciclo', 'Chiude tutto il programma', 'Salta solo il giro attuale'], '`break` termina il ciclo; il programma continua dalla prima riga dopo. Saltare il giro attuale è quello che fa `continue`.'),
        out(`totale = 0\ntotale += 2.5\ntotale += 1.25\nprint(f"{totale:.2f}")`, ['3.75', '3.8', '3.750', '375'], '`+=` continua a sommare al totale, e `:.2f` mostra esattamente due decimali.'),
        fill(`prezzo = ___(input("Prezzo: "))`, ['float', 'str', 'print', 'len'], '`input()` restituisce testo. Per fare conti con i decimali bisogna convertirlo con `float()`.'),
        out(`totale = 25\nif totale >= 50:\n    print("10%")\nelif totale >= 20:\n    print("5%")\nelse:\n    print("0%")`, ['5%', '10%', '0%', '5%\n0%'], '25 non arriva a 50, ma arriva a 20. Con `elif` si esegue solo il primo ramo vero.'),
        out(`n = 0\ntotale = 0\nwhile totale < 10:\n    totale += 4\n    n += 1\nprint(n, totale)`, ['3 12', '2 8', '3 10', '4 16'], 'Il ciclo somma 4 finché il totale è minore di 10: 4, 8 e 12. A 12 la condizione è falsa e i giri sono stati 3.'),
        typ('Scrivi la parola che esce dal ciclo quando il prezzo è 0', `while True:\n    prezzo = float(input())\n    if prezzo == 0:\n        ___\n    totale += prezzo`, 'break', '`break` termina il ciclo non appena la condizione è vera.'),
        out(`print(f"{'Total':<8}|{9.5:>6.2f}")`, ['Total   |  9.50', 'Total|9.50', '   Total|9.50  ', 'Total   |9.5'], '`:<8` riempie il testo di spazi a destra fino a 8 caratteri; `:>6.2f` mette il numero con due decimali allineato a destra su 6.'),
        out(`totale = 0\nfor prezzo in range(5, 30, 10):\n    if prezzo > 20:\n        continue\n    totale += prezzo\nsconto = totale * 0.1 if totale >= 20 else 0\nprint(totale, round(totale - sconto, 2))`, ['20 18.0', '45 40.5', '20 20', '20 18'], '`range(5, 30, 10)` dà 5, 15 e 25; il 25 si salta con `continue`, quindi il totale è 20. Arriva a 20, perciò c’è il 10 % di sconto, e il risultato è un decimale: 18.0.'),
      ],
    },
    // ───────────── Giorno 8 ─────────────
    {
      id: 'py-lists',
      t: 'Liste',
      d: 'Tenere molti valori in ordine: aggiungere, togliere, tagliare, ordinare e copiare senza sorprese.',
      guide: [
        { h: 'Creare e accedere', p: [
          'Una lista è una collezione ordinata e modificabile. Si scrive tra parentesi quadre e può mescolare tipi, anche se di solito tutti gli elementi sono dello stesso tipo.',
          'Accedi agli elementi tramite l’indice, come con le stringhe. Un indice inesistente solleva `IndexError`. A differenza delle stringhe, puoi cambiare un elemento assegnandogli un valore.' ],
          code: `spesa = ["latte", "pane", "uova"]\nprint(spesa[0])    # latte\nprint(spesa[-1])   # uova\nprint(len(spesa))  # 3\nspesa[1] = "pane integrale"\nprint(spesa)       # ['latte', 'pane integrale', 'uova']` },
        { h: 'Aggiungere e togliere elementi', p: [
          '`append()` aggiunge in fondo, `insert(i, x)` in una posizione ed `extend()` ne aggiunge diversi. `remove(x)` elimina il primo elemento uguale a `x`, e `pop()` toglie e restituisce l’ultimo (o quello all’indice che passi).',
          '`in` controlla se un elemento è nella lista.' ],
          code: `compiti = ["studiare"]\ncompiti.append("correre")\ncompiti.insert(0, "colazione")\ncompiti.extend(["leggere", "dormire"])\nprint(compiti)  # ['colazione', 'studiare', 'correre', 'leggere', 'dormire']\ncompiti.remove("correre")\nultimo = compiti.pop()\nprint(ultimo, compiti)     # dormire ['colazione', 'studiare', 'leggere']\nprint("leggere" in compiti)  # True` },
        { h: 'Slicing e ordinamento', p: [
          'Lo slicing funziona esattamente come con le stringhe e restituisce una nuova lista.',
          '`sort()` ordina la lista sul posto e restituisce `None`; `sorted()` restituisce una nuova lista e lascia intatta l’originale. Un errore classico è scrivere `lista = lista.sort()` e ritrovarsi con `None`.',
          '`sum()`, `min()` e `max()` funzionano direttamente sulle liste di numeri.' ],
          code: `voti = [7, 4, 9, 6]\nprint(sorted(voti))  # [4, 6, 7, 9]\nprint(voti)          # [7, 4, 9, 6]\nvoti.sort(reverse=True)\nprint(voti)          # [9, 7, 6, 4]\nprint(voti[:2])      # [9, 7]\nprint(sum(voti) / len(voti))  # 6.5` },
        { h: 'Copie e riferimenti', p: [
          '`b = a` non copia la lista: crea un altro nome per lo stesso oggetto. Se modifichi `b`, modifichi `a`.',
          'Per una copia indipendente usa `a.copy()`, `list(a)` o `a[:]`.' ],
          code: `a = [1, 2, 3]\nb = a           # stesso oggetto\nc = a.copy()    # copia indipendente\na.append(4)\nprint(b)  # [1, 2, 3, 4]\nprint(c)  # [1, 2, 3]` },
        { h: 'Esempio reale: lo scontrino della spesa', real: true, p: [
          'Con una lista di prezzi hai già il numero di articoli, il totale e il prodotto più caro di uno scontrino.' ],
          code: `prezzi = [2.35, 1.20, 4.99, 0.89]\ntotale = sum(prezzi)\nprint("Articoli:", len(prezzi))        # Articoli: 4\nprint("Totale:", round(totale, 2))     # Totale: 9.43\nprint("Il più caro:", max(prezzi))     # Il più caro: 4.99` },
      ],
      x: [
        out(`frutti = ["mela", "pera", "uva"]\nprint(frutti[1])`, ['pera', 'mela', 'uva', 'Errore'], 'Gli indici partono da 0: `frutti[1]` è il secondo elemento.'),
        ord('Aggiungi 4 in fondo alla lista nums', ['nums', '.', 'append', '(', '4', ')'], ['push', 'add'], 'Le liste di Python usano `.append()`. `push` è di JavaScript.'),
        out(`nums = [10, 20, 30, 40, 50]\nprint(nums[1:3])`, ['[20, 30]', '[10, 20, 30]', '[20, 30, 40]', '[20]'], 'Lo slicing va dall’indice 1 fino all’indice 3 senza includerlo.'),
        out(`nums = [3, 1, 2]\nnums.sort()\nprint(nums)`, ['[1, 2, 3]', '[3, 2, 1]', 'None', '[3, 1, 2]'], '`sort()` ordina la lista sul posto, dal più piccolo al più grande.'),
        out(`nums = [1, 2, 3]\nultimo = nums.pop()\nprint(ultimo, nums)`, ['3 [1, 2]', '1 [2, 3]', '3 [1, 2, 3]', '[1, 2] 3'], '`pop()` senza argomenti toglie e restituisce l’ultimo elemento.'),
        mc('Che cosa restituisce `nums.sort()`?', ['None', 'La lista ordinata', 'Una copia ordinata', 'True'], '`sort()` ordina sul posto e restituisce `None`. Se vuoi una nuova lista, usa `sorted(nums)`.'),
        out(`a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)`, ['[1, 2, 3, 4]', '[1, 2, 3]', '[4]', 'Errore'], '`b = a` non copia la lista: entrambi i nomi puntano allo stesso oggetto. Usa `a.copy()` per duplicarla.'),
        out(`nums = [5, 3, 8, 1]\nordinata = sorted(nums)\nnums.append(ordinata[0] + ordinata[-1])\nprint(nums[-1], len(nums), nums[:2])`, ['9 5 [5, 3]', '6 5 [5, 3]', '9 4 [1, 3]', '9 5 [1, 3]'], '`sorted()` non tocca `nums`; `ordinata` è [1, 3, 5, 8], quindi 1 + 8 = 9 viene aggiunto a `nums`.'),
      ],
    },
    // ───────────── Giorno 9 ─────────────
    {
      id: 'py-tuples',
      t: 'Tuple e insiemi',
      d: 'Tuple che non cambiano, lo spacchettamento e i set per eliminare i duplicati e confrontare gruppi.',
      guide: [
        { h: 'Che cos’è una tupla?', p: [
          'Una tupla è come una lista, ma immutabile: una volta creata non puoi aggiungere, togliere o cambiare elementi. Si scrive tra parentesi tonde.',
          'Usala per dati che vanno insieme e non devono cambiare: coordinate, un colore RGB, una data. Essendo immutabile, può anche fare da chiave di un dizionario.',
          'Si indicizza e si taglia come una lista, e ha due metodi: `count()` e `index()`.' ],
          code: `colore = (255, 128, 0)\nprint(colore[0])          # 255\nprint(len(colore))        # 3\nprint(colore.count(0))    # 1\nprint(colore.index(128))  # 1` },
        { h: 'Immutabilità', p: [
          'Provare a cambiare un elemento solleva `TypeError`. Se proprio devi modificarla, convertila in lista, cambiala e riconvertila.',
          'Questa protezione è il suo vantaggio: nessuno può alterare i dati per sbaglio in un’altra parte del programma.' ],
          code: `giorni = ("lun", "mar", "mer")\n# giorni[0] = "dom"  # TypeError: 'tuple' object does not support item assignment\nelementi = list(giorni)\nelementi.append("gio")\ngiorni = tuple(elementi)\nprint(giorni)  # ('lun', 'mar', 'mer', 'gio')` },
        { h: 'Spacchettamento', p: [
          'Puoi distribuire gli elementi di una tupla in variabili: `x, y = punto`. Il numero di variabili deve coincidere con quello degli elementi, a meno che usi `*` per raccogliere il resto in una lista.',
          'Attenzione: le parentesi da sole non creano una tupla. Una tupla di un solo elemento ha bisogno della virgola: `(5,)`.' ],
          code: `punto = (3, 4)\nx, y = punto\nprint(x, y)          # 3 4\nprimo, *resto = (1, 2, 3, 4)\nprint(primo, resto)  # 1 [2, 3, 4]\nprint(type((5,)), type((5)))  # <class 'tuple'> <class 'int'>` },
        { h: 'Che cos’è un insieme?', p: [
          'Un insieme (`set`) è una collezione non ordinata senza elementi ripetuti. Si scrive con le graffe: `{1, 2, 3}`. Se aggiungi duplicati, ne resta solo uno.',
          'Un insieme vuoto si crea con `set()`: `{}` crea un dizionario vuoto.',
          'Controllare se qualcosa è in un insieme con `in` è velocissimo, anche con milioni di elementi. Per questo si usano per le liste di «già visti».' ],
          code: `tag = {"python", "web", "python", "dati"}\nprint(len(tag))      # 3\nprint("web" in tag)  # True\nvuoto = set()\nprint(type({}))      # <class 'dict'>` },
        { h: 'Operazioni sugli insiemi', p: [
          'Unione `|` (tutti), intersezione `&` (quelli in comune), differenza `-` (quelli di uno ma non dell’altro) e differenza simmetrica `^` (quelli che stanno in uno solo dei due).',
          '`issubset()` controlla se tutti gli elementi di un insieme stanno in un altro.' ],
          code: `a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(a | b)  # {1, 2, 3, 4, 5}\nprint(a & b)  # {3, 4}\nprint(a - b)  # {1, 2}\nprint(a ^ b)  # {1, 2, 5}\nprint({1, 2}.issubset(a))  # True` },
        { h: 'Esempio reale: i clienti fedeli', real: true, p: [
          'Un negozio vuole sapere quali clienti hanno comprato a gennaio e a febbraio, quali hanno smesso e quali sono nuovi. Sono tre operazioni sugli insiemi.' ],
          code: `gennaio = {"Ana", "Luis", "Eva", "Marta"}\nfebbraio = {"Luis", "Marta", "Pedro"}\nfedeli = gennaio & febbraio\npersi = gennaio - febbraio\nnuovi = febbraio - gennaio\nprint(sorted(fedeli))  # ['Luis', 'Marta']\nprint(sorted(persi))   # ['Ana', 'Eva']\nprint(sorted(nuovi))   # ['Pedro']` },
      ],
      x: [
        mc('Quale collezione è immutabile?', ['tuple', 'list', 'dict', 'set'], 'Una tupla non può essere modificata dopo la creazione.'),
        out(`t = (10, 20, 30)\nprint(t[1])`, ['20', '10', '30', 'Errore'], 'Le tuple si indicizzano come le liste, partendo da 0.'),
        fill(`punto = (3, 4)\n___ = punto\nprint(x, y)  # 3 4`, ['x, y', 'x y', 'x; y', 'x & y'], 'Per spacchettare, scrivi le variabili separate da virgole a sinistra dell’`=`.'),
        out(`t = (1, 2, 3)\nt[0] = 9\nprint(t)`, ['TypeError', '(9, 2, 3)', '(1, 2, 3)', 'None'], 'Le tuple non permettono di assegnare elementi, quindi Python solleva `TypeError`.'),
        out(`s = {1, 2, 2, 3, 3, 3}\nprint(len(s))`, ['3', '6', '4', '1'], 'Un insieme elimina i duplicati: resta {1, 2, 3}.'),
        out(`s = {1, 2}\ns.add(2)\ns.add(5)\nprint(len(s))`, ['3', '4', '2', 'Errore'], 'Aggiungere un 2 già presente non cambia nulla; il 5 viene aggiunto.'),
        out(`a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)`, ['{2, 3}', '{1, 2, 3, 4}', '{1}', '{4}'], '`&` è l’intersezione: gli elementi presenti in entrambi.'),
        out(`a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(len(a | b), sorted(a ^ b), {3}.issubset(a & b))`, ['5 [1, 2, 5] True', '7 [1, 2, 5] True', '5 [3, 4] True', '5 [1, 2, 5] False'], 'L’unione ha 5 elementi, la differenza simmetrica lascia 1, 2 e 5, e il 3 è nell’intersezione {3, 4}.'),
      ],
    },
    // ───────────── Giorno 10 ─────────────
    {
      id: 'py-dicts',
      t: 'Dizionari',
      d: 'Cercare valori per chiave: creare, modificare, scorrere e annidare dati.',
      guide: [
        { h: 'Creare e accedere', p: [
          'Un dizionario associa chiavi uniche a valori, come una rubrica: cerchi un nome e ottieni il numero. Si scrive `{chiave: valore}`.',
          '`d["chiave"]` restituisce il valore ma solleva `KeyError` se la chiave non esiste. `d.get("chiave", predefinito)` è più sicuro: restituisce il valore predefinito (o `None`).' ],
          code: `persona = {"nome": "Ana", "eta": 30, "citta": "Bologna"}\nprint(persona["nome"])                     # Ana\nprint(persona.get("email"))                # None\nprint(persona.get("email", "senza email"))  # senza email` },
        { h: 'Aggiungere, modificare ed eliminare', p: [
          'Assegnare un valore a una chiave la crea se non esiste, o ne cambia il valore se esiste. `update()` unisce un altro dizionario.',
          '`pop(chiave)` elimina e restituisce il valore; `del d[chiave]` elimina soltanto. `in` controlla se esiste una chiave (non un valore).' ],
          code: `magazzino = {"mele": 10}\nmagazzino["pere"] = 5        # aggiungere\nmagazzino["mele"] -= 3       # modificare\nmagazzino.update({"uva": 8})\ndel magazzino["pere"]\nprint(magazzino)             # {'mele': 7, 'uva': 8}\nprint("uva" in magazzino)    # True` },
        { h: 'Percorrere un dizionario', p: [
          '`keys()` dà le chiavi, `values()` i valori e `items()` le coppie. Con `for chiave, valore in d.items()` percorri tutto in una volta.',
          'Da Python 3.7 i dizionari mantengono l’ordine in cui hai inserito le chiavi.' ],
          code: `voti = {"Ana": 9, "Luis": 6, "Eva": 8}\nfor studente, voto in voti.items():\n    print(studente, "->", voto)\nprint(list(voti.keys()))  # ['Ana', 'Luis', 'Eva']\nprint(sum(voti.values()) / len(voti))  # 7.666666666666667` },
        { h: 'Dati annidati', p: [
          'I valori possono essere liste o altri dizionari. È così che si rappresentano quasi tutti i dati reali, ed è proprio la forma del JSON che restituiscono le API.',
          'Le chiavi devono essere immutabili: stringhe, numeri o tuple. Una lista non può essere una chiave.' ],
          code: `utente = {\n    "nome": "Eva",\n    "lingue": ["it", "en"],\n    "indirizzo": {"citta": "Torino", "cap": "10121"},\n}\nprint(utente["indirizzo"]["citta"])  # Torino\nprint(utente["lingue"][-1])          # en` },
        { h: 'Esempio reale: contare le parole di un testo', real: true, p: [
          'Contare quante volte compare ogni parola è la base dei motori di ricerca e dell’analisi del sentiment. Il trucco è `get(parola, 0) + 1`: una parola nuova parte da 0.' ],
          code: `testo = "il gatto e il cane e il pesce"\nconteggio = {}\nfor parola in testo.split():\n    conteggio[parola] = conteggio.get(parola, 0) + 1\nprint(conteggio)  # {'il': 3, 'gatto': 1, 'e': 2, 'cane': 1, 'pesce': 1}` },
      ],
      x: [
        fill(`eta = {"ana": 30, "luis": 25}\nprint(eta___)  # 30`, ['["ana"]', '.ana', '("ana")', '{ana}'], 'Si accede a un valore del dizionario con le parentesi quadre e la chiave.'),
        out(`d = {"a": 1}\nd["b"] = 2\nprint(len(d))`, ['2', '1', '3', 'Errore'], 'Assegnare un valore a una nuova chiave la aggiunge al dizionario.'),
        out(`d = {"x": 1}\nprint(d.get("y", 0))`, ['0', 'None', 'KeyError', '1'], '`get()` restituisce il valore predefinito quando la chiave non esiste.'),
        out(`d = {"a": 1, "b": 2}\nprint(list(d.keys()))`, ["['a', 'b']", '[1, 2]', "[('a', 1), ('b', 2)]", 'ab'], '`keys()` restituisce le chiavi del dizionario.'),
        out(`d = {"a": 1}\nprint(d["z"])`, ['KeyError', 'None', '0', 'Niente'], 'Usare le parentesi quadre con una chiave inesistente solleva `KeyError`.'),
        typ('Elimina la chiave "pane" e conserva il suo valore', `carrello = {"pane": 1.2, "latte": 0.9}\nprezzo = carrello.___("pane")`, 'pop', '`pop(chiave)` toglie la chiave e restituisce il suo valore.'),
        out(`prezzi = {"pane": 1, "latte": 2}\nprint(sum(prezzi.values()))`, ['3', '2', 'pane latte', 'Errore'], '`values()` dà i valori e `sum()` li somma.'),
        out(`magazzino = {"pane": 2, "latte": 0}\nmagazzino["uova"] = magazzino.get("uova", 0) + 12\nmagazzino["pane"] += 1\nprint(len(magazzino), magazzino["pane"] + magazzino["uova"], "latte" in magazzino)`, ['3 15 True', '2 15 True', '3 14 True', '3 15 False'], '"uova" viene aggiunto con 12 e "pane" diventa 3: ci sono 3 chiavi e 3 + 12 = 15. "latte" resta una chiave anche se vale 0.'),
      ],
    },
    // ───────────── Giorno 11 ─────────────
    {
      id: 'py-functions',
      t: 'Funzioni',
      d: 'Raggruppare codice con def: parametri, return, valori predefiniti, *args, **kwargs e ambito.',
      guide: [
        { h: 'Definire e chiamare una funzione', p: [
          'Una funzione è un blocco di codice con un nome che puoi riutilizzare. Si definisce con `def`, riceve parametri tra parentesi e restituisce un risultato con `return`.',
          'Se ti accorgi di copiare e incollare lo stesso codice, è il momento di trasformarlo in funzione: se c’è un errore, lo correggi in un solo punto.' ],
          code: `def saluta(nome):\n    return f"Ciao, {nome}"\n\nprint(saluta("Ana"))   # Ciao, Ana\nprint(saluta("Luis"))  # Ciao, Luis` },
        { h: 'return non è print', p: [
          '`print()` mostra soltanto un valore sullo schermo; `return` lo restituisce perché tu possa salvarlo e continuare a usarlo.',
          'Una funzione senza `return` restituisce `None`. Se provi a sommarci qualcosa, ottieni `TypeError`.' ],
          code: `def doppio_print(n):\n    print(n * 2)\n\ndef doppio_return(n):\n    return n * 2\n\nrisultato = doppio_return(5) + 1\nprint(risultato)         # 11\nprint(doppio_print(5))   # stampa 10 e poi None` },
        { h: 'Parametri predefiniti e con nome', p: [
          'Un parametro può avere un valore predefinito (`iva=0.22`) usato se non lo passi. I parametri con valore predefinito vanno sempre dopo quelli obbligatori.',
          'Nella chiamata puoi dare un nome agli argomenti (`sconto=0.1`): il codice si capisce meglio e l’ordine non conta più.' ],
          code: `def prezzo_finale(prezzo, iva=0.22, sconto=0):\n    return round(prezzo * (1 - sconto) * (1 + iva), 2)\n\nprint(prezzo_finale(100))              # 122.0\nprint(prezzo_finale(100, sconto=0.1))  # 109.8\nprint(prezzo_finale(100, iva=0.10))    # 110.0` },
        { h: '*args, **kwargs e più risultati', p: [
          '`*args` raccoglie un numero qualsiasi di argomenti posizionali in una tupla; `**kwargs` raccoglie gli argomenti con nome in un dizionario.',
          'Per restituire più valori, separali con virgole: la funzione restituisce una tupla che puoi spacchettare.' ],
          code: `def statistiche(*numeri):\n    return min(numeri), max(numeri), sum(numeri) / len(numeri)\n\nminimo, massimo, media = statistiche(4, 8, 6)\nprint(minimo, massimo, media)  # 4 8 6.0\n\ndef profilo(**dati):\n    return dati\n\nprint(profilo(nome="Eva", eta=28))  # {'nome': 'Eva', 'eta': 28}` },
        { h: 'Visibilità delle variabili', p: [
          'Le variabili create dentro una funzione sono locali: nascono quando la chiami e spariscono quando finisce. Assegnare dentro una funzione crea una nuova variabile locale, anche se fuori ne esiste un’altra con lo stesso nome.',
          'Buona pratica: una funzione riceve ciò che le serve tramite i parametri e restituisce il risultato, invece di toccare le variabili globali.' ],
          code: `contatore = 0\n\ndef incrementa():\n    contatore = 1   # variabile locale, non tocca quella esterna\n\nincrementa()\nprint(contatore)  # 0` },
        { h: 'Esempio reale: il voto finale di una materia', real: true, p: [
          'Un professore pesa l’esame al 60 % e le esercitazioni al 40 % (voti da 0 a 10), anche se in alcuni anni il peso cambia. Una funzione con un parametro predefinito lo risolve e restituisce il voto e l’esito.' ],
          code: `def voto_finale(esame, esercitazioni, peso_esame=0.6):\n    voto = esame * peso_esame + esercitazioni * (1 - peso_esame)\n    esito = "promosso" if voto >= 5 else "bocciato"\n    return round(voto, 2), esito\n\nprint(voto_finale(4.5, 7))     # (5.5, 'promosso')\nprint(voto_finale(3, 6, 0.8))  # (3.6, 'bocciato')` },
      ],
      x: [
        fill(`___ saluta(nome):\n    return "Ciao " + nome`, ['def', 'function', 'fun', 'func'], 'In Python le funzioni si definiscono con `def`.'),
        out(`def doppio(n):\n    return n * 2\n\nprint(doppio(4))`, ['8', '44', 'n * 2', 'None'], 'La funzione restituisce 4 * 2, cioè 8.'),
        typ('Completa la funzione perché restituisca l’area del triangolo', `def area(base, altezza):\n    ___ base * altezza / 2`, 'return', '`return` restituisce il risultato a chi ha chiamato la funzione.'),
        out(`def f(a, b=10):\n    return a + b\n\nprint(f(5))`, ['15', '5', 'Errore', '510'], 'Siccome non passiamo `b`, prende il suo valore predefinito, 10.'),
        out(`def f():\n    print("ciao")\n\nr = f()\nprint(r)`, ['ciao\nNone', 'ciao', 'None', 'Errore'], '`f()` stampa "ciao" ma non ha `return`, quindi restituisce `None`.'),
        out(`def somma(*nums):\n    return sum(nums)\n\nprint(somma(1, 2, 3))`, ['6', '(1, 2, 3)', '123', 'Errore'], '`*nums` raggruppa gli argomenti in una tupla e `sum()` li somma.'),
        out(`def f(a, b=2, c=3):\n    return a * b + c\n\nprint(f(1, c=10))`, ['12', '13', '5', 'Errore'], '`b` mantiene il suo valore predefinito (2) e `c` vale 10: 1 * 2 + 10 = 12.'),
        out(`def riepilogo(*voti, minimo=5):\n    promossi = 0\n    for v in voti:\n        if v >= minimo:\n            promossi += 1\n    return promossi, len(voti)\n\np, t = riepilogo(4, 7, 5, 9, minimo=6)\nprint(f"{p}/{t}")`, ['2/4', '3/4', '2/5', '3/5'], '`*voti` raccoglie (4, 7, 5, 9) e `minimo` vale 6: passano solo 7 e 9. La funzione restituisce una tupla che viene spacchettata.'),
      ],
    },
    // ───────────── Giorno 12 ─────────────
    {
      id: 'py-comprehensions',
      t: 'Comprehension',
      d: 'Creare liste, dizionari e set in una riga, filtrando e trasformando allo stesso tempo.',
      guide: [
        { h: 'Dal ciclo alla comprehension', p: [
          'Una list comprehension crea una nuova lista applicando un’espressione a ogni elemento: `[espressione for elemento in iterabile]`.',
          'Fa lo stesso di un ciclo con `append()`, ma in una riga e di solito più velocemente.' ],
          code: `prezzi = [10, 20, 40]\ncon_iva = []\nfor p in prezzi:\n    con_iva.append(p * 1.22)\n\ncon_iva = [p * 1.22 for p in prezzi]   # lo stesso in una riga\nprint([round(p, 1) for p in con_iva])  # [12.2, 24.4, 48.8]` },
        { h: 'Filtrare e scegliere', p: [
          'Un `if` alla fine filtra: entrano solo gli elementi che soddisfano la condizione.',
          'Se invece vuoi scegliere tra due valori per ogni elemento, l’`if ... else` va prima del `for` (è un ternario).' ],
          code: `nums = [3, -1, 8, 0, -5]\npositivi = [n for n in nums if n > 0]\netichette = ["pari" if n % 2 == 0 else "dispari" for n in nums]\nprint(positivi)   # [3, 8]\nprint(etichette)  # ['dispari', 'dispari', 'pari', 'pari', 'dispari']` },
        { h: 'Comprehension di dizionari e insiemi', p: [
          'Con le graffe e `chiave: valore` crei un dizionario; con le graffe e un solo valore, un insieme.',
          'Sono ideali per costruire tabelle di ricerca veloci a partire da una lista.' ],
          code: `nomi = ["ana", "luis", "eva"]\nlunghezze = {n: len(n) for n in nomi}\niniziali = {n[0].upper() for n in ["ana", "alba", "luis"]}\nprint(lunghezze)         # {'ana': 3, 'luis': 4, 'eva': 3}\nprint(sorted(iniziali))  # ['A', 'L']` },
        { h: 'Annidate, e quando non usarle', p: [
          'Puoi concatenare più `for` per appiattire una lista di liste. Si leggono nello stesso ordine dei cicli normali.',
          'Se una comprehension non sta in una riga o richiede più condizioni, un ciclo normale sarà più leggibile. Vince la chiarezza.' ],
          code: `matrice = [[1, 2], [3, 4], [5, 6]]\npiatta = [x for riga in matrice for x in riga]\nprint(piatta)  # [1, 2, 3, 4, 5, 6]` },
        { h: 'Esempio reale: pulire le e-mail di un modulo', real: true, p: [
          'Un modulo di registrazione salva le e-mail così come le hanno scritte le persone: con spazi, maiuscole, vuote o senza chiocciola. Una comprehension le pulisce e le filtra in un colpo.' ],
          code: `inserite = [" Ana@Mail.com", "", "luis@mail.com ", "senza-chiocciola", "EVA@mail.com"]\nemail = [e.strip().lower() for e in inserite if "@" in e]\nprint(email)  # ['ana@mail.com', 'luis@mail.com', 'eva@mail.com']` },
      ],
      x: [
        out(`quadrati = [x * x for x in range(4)]\nprint(quadrati)`, ['[0, 1, 4, 9]', '[1, 4, 9, 16]', '[0, 2, 4, 6]', '[0, 1, 4, 9, 16]'], 'Applica `x * x` a ogni valore da 0 a 3.'),
        fill(`maiuscole = [p.upper() ___ p in ["a", "b"]]`, ['for', 'in', 'with', 'each'], 'La struttura è `[espressione for elemento in iterabile]`.'),
        out(`pari = [n for n in range(10) if n % 2 == 0]\nprint(pari)`, ['[0, 2, 4, 6, 8]', '[2, 4, 6, 8, 10]', '[0, 2, 4, 6, 8, 10]', '[1, 3, 5, 7, 9]'], 'L’`if` tiene i numeri pari da 0 a 9.'),
        out(`quadrati = {n: n * n for n in range(3)}\nprint(quadrati)`, ['{0: 0, 1: 1, 2: 4}', '[0, 1, 4]', '{0, 1, 4}', '{1: 1, 2: 4}'], 'È una comprehension di dizionario: ogni chiave `n` è associata a `n * n`.'),
        out(`print([c for c in "ciao" if c != "o"])`, ["['c', 'i', 'a']", 'cia', "['c', 'i', 'a', 'o']", "['o']"], 'Percorre ogni lettera e scarta la "o".'),
        ord('Scrivi una comprehension che raddoppi ogni numero di nums', ['[', 'n * 2', 'for', 'n', 'in', 'nums', ']'], ['(', 'each'], 'Prima l’espressione, poi `for` variabile `in` iterabile, tutto tra parentesi quadre.'),
        out(`print(["A" if n > 5 else "B" for n in [3, 7, 5]])`, ["['B', 'A', 'B']", "['A']", "['B', 'A', 'A']", "['A', 'B', 'A']"], 'Il ternario sceglie "A" o "B" per ogni numero. 5 non è maggiore di 5, quindi ottiene "B".'),
        out(`vendite = {"lun": 120, "mar": 80, "mer": 150}\nbuoni = {g: v * 2 for g, v in vendite.items() if v >= 100}\nprint(buoni, sum(buoni.values()))`, ["{'lun': 240, 'mer': 300} 540", "{'lun': 120, 'mer': 150} 270", "{'lun': 240, 'mar': 160, 'mer': 300} 700", '[240, 300] 540'], 'Il filtro lascia fuori il martedì (80) e l’espressione raddoppia gli altri: 240 + 300 = 540.'),
      ],
    },
    // ───────────── Giorno 13 ─────────────
    {
      id: 'py-modules',
      t: 'Moduli e pacchetti con pip',
      d: 'Importare il tuo codice e la libreria standard, e installare pacchetti da PyPI con pip.',
      guide: [
        { h: 'Che cos’è un modulo?', p: [
          'Un modulo è semplicemente un file `.py`. Tutto ciò che vi definisci (funzioni, variabili, classi) si può usare da un altro file con `import`.',
          'Dividere un programma in moduli lo rende più facile da mantenere: ogni file si occupa di una cosa sola.' ],
          code: `# file: strumenti.py\nIVA = 0.22\n\ndef con_iva(prezzo):\n    return round(prezzo * (1 + IVA), 2)\n\n# file: main.py (nella stessa cartella)\nimport strumenti\nprint(strumenti.con_iva(50))  # 61.0` },
        { h: 'Modi di importare', p: [
          '`import math` carica il modulo e usi i suoi nomi con il prefisso: `math.sqrt()`. `from math import sqrt` porta solo quel nome e lo usi senza prefisso.',
          '`import statistics as st` gli dà un alias breve. Evita `from modulo import *`: riempie il codice di nomi e non saprai più da dove viene ciascuno.' ],
          code: `import math\nfrom math import sqrt, pi\nimport statistics as st\n\nprint(math.floor(3.7))     # 3\nprint(sqrt(81))            # 9.0\nprint(round(pi, 2))        # 3.14\nprint(st.mean([2, 4, 9]))  # 5` },
        { h: 'La libreria standard', p: [
          'Python arriva «con le batterie incluse»: `math` (matematica), `random` (caso), `datetime` (date), `os` e `pathlib` (file), `json`, `csv`, `re`, `statistics`... Non c’è niente da installare.',
          '`random` serve per giochi e simulazioni: `randint(a, b)` include entrambi gli estremi, `choice()` sceglie un elemento e `shuffle()` mescola una lista sul posto.' ],
          code: `import random\n\nprint(random.randint(1, 6))  # un numero da 1 a 6\nprint(random.choice(["sasso", "carta", "forbici"]))\ncarte = [1, 2, 3, 4]\nrandom.shuffle(carte)        # mescola la lista sul posto\nprint(carte)` },
        { h: 'pip e PyPI', p: [
          'La libreria standard è ampia, ma la vera forza di Python sta in PyPI (Python Package Index), un archivio con centinaia di migliaia di pacchetti: `requests`, `pandas`, `flask`, `numpy`...',
          'pip è il programma che li scarica e li installa. È incluso in Python. Se hai più versioni di Python, `python -m pip` garantisce che installi in quella che esegui.' ],
          code: `pip --version\npip install requests\npip install requests==2.32.3   # una versione esatta\npip install --upgrade requests\npip uninstall requests\npython -m pip install requests  # il pip di QUESTO Python` },
        { h: 'requirements.txt', p: [
          '`pip freeze > requirements.txt` salva l’elenco esatto di pacchetti e versioni del progetto. Va nel repository insieme al codice.',
          'Chi clona il progetto esegue `pip install -r requirements.txt` e ottiene esattamente le stesse versioni. Così eviti il classico «sul mio computer funziona».' ],
          code: `# requirements.txt\nrequests==2.32.3\npython-dateutil==2.9.0\n\n# su un altro computer\npip install -r requirements.txt` },
        { h: 'Esempio reale: il tasso di cambio con requests', real: true, p: [
          'Con `requests` puoi interrogare un’API pubblica di valute in tre righe. `timeout` evita che il programma resti bloccato e `raise_for_status()` solleva un errore se la risposta non è corretta.' ],
          code: `# pip install requests\nimport requests\n\nr = requests.get("https://api.frankfurter.app/latest?from=EUR&to=USD", timeout=10)\nr.raise_for_status()\ndati = r.json()\nprint("1 EUR =", dati["rates"]["USD"], "USD")` },
      ],
      x: [
        fill(`___ math\nprint(math.pi)`, ['import', 'include', 'using', 'require'], '`import` carica un modulo in Python.'),
        out(`import math\nprint(math.sqrt(25))`, ['5.0', '5', '25', 'Errore'], '`math.sqrt` restituisce sempre un `float`.'),
        fill(`import statistics ___ st\nprint(st.mean([1, 2, 3]))`, ['as', 'to', '=', 'alias'], '`as` dà un alias al modulo importato.'),
        out(`from math import floor, ceil\nprint(floor(2.5), ceil(2.1))`, ['2 3', '3 3', '2 2', '3 2'], '`floor` arrotonda per difetto e `ceil` per eccesso, qualunque siano i decimali.'),
        mc('Che cos’è pip?', ['Il gestore di pacchetti di Python', 'Un editor di codice', 'Un tipo di dato', 'Un framework web'], 'pip installa e gestisce le librerie di terze parti.'),
        ord('Installa il pacchetto requests', ['pip', 'install', 'requests'], ['get', 'npm'], 'Il comando è `pip install` seguito dal nome del pacchetto.'),
        mc('Che cosa fa `pip freeze > requirements.txt`?', ['Salva i pacchetti installati e le loro versioni in un file', 'Impedisce a Python di aggiornarsi', 'Cancella i pacchetti', 'Installa i pacchetti del file'], 'Così altre persone possono riprodurre il tuo ambiente.'),
        mc('Il tuo script fallisce con `ModuleNotFoundError: No module named \'requests\'`, ma `pip install requests` dice che è già installato. Qual è la causa più probabile?', ['pip installa in un Python diverso da quello che esegue lo script: usa python -m pip install requests', 'requests non esiste su PyPI', 'Bisogna scrivere import Requests con la maiuscola', 'Bisogna riavviare il computer'], 'Con più installazioni di Python, `pip` e `python` possono non corrispondere. `python -m pip` usa il pip dello stesso interprete.'),
      ],
    },
    // ───────────── Giorno 14 ─────────────
    {
      id: 'py-workshop-contacts',
      t: 'Il laboratorio di Kibi: la rubrica dei clienti',
      d: 'Progetto della settimana 2: salvare i clienti in una lista di dizionari, cercarli e filtrarli con funzioni in un modulo tutto tuo.',
      guide: [
        { h: 'L’incarico', p: [
          'Il negozio di Kibi ha ormai clienti abituali e vuole ricordarli: nome, telefono e quanti acquisti hanno fatto, per premiare i più fedeli.',
          'Questo laboratorio mette insieme la settimana 2: liste, dizionari, funzioni, comprehension e moduli. Alla fine avrai una rubrica con menu da usare davvero.' ] },
        { h: 'Passo 1: i dati', p: [
          'Ogni cliente è un dizionario con le stesse chiavi, e tutti stanno in una lista. È come una tabella: la lista contiene le righe e le chiavi sono le colonne.',
          'Per leggere un dato si combinano i due accessi: prima la posizione nella lista, poi la chiave.' ],
          code: `clienti = [\n    {"nome": "Lucía", "telefono": "600111222", "acquisti": 12},\n    {"nome": "Marco", "telefono": "600333444", "acquisti": 3},\n    {"nome": "Aiko", "telefono": "600555666", "acquisti": 7},\n]\nprint(len(clienti), clienti[0]["nome"])  # 3 Lucía` },
        { h: 'Passo 2: una funzione per ogni compito', p: [
          '`cerca()` scorre la lista e restituisce il primo cliente con quel nome, senza distinguere maiuscole e minuscole. Se il ciclo finisce senza trovarlo, restituisce `None`.',
          '`aggiungi()` riusa `cerca()` per non duplicare i clienti e restituisce `True` o `False`, così chi la chiama sa cosa è successo.' ],
          code: `def cerca(clienti, nome):\n    for c in clienti:\n        if c["nome"].lower() == nome.lower():\n            return c\n    return None\n\ndef aggiungi(clienti, nome, telefono):\n    if cerca(clienti, nome):\n        return False\n    clienti.append({"nome": nome, "telefono": telefono, "acquisti": 0})\n    return True\n\nprint(cerca(clienti, "aiko")["telefono"])  # 600555666` },
        { h: 'Passo 3: filtrare con le comprehension', p: [
          'Una list comprehension estrae i clienti fedeli in una riga. Una dict comprehension crea un elenco telefonico per trovare subito un numero partendo dal nome.' ],
          code: `fedeli = [c["nome"] for c in clienti if c["acquisti"] >= 5]\nprint(fedeli)  # ['Lucía', 'Aiko']\n\ntelefoni = {c["nome"]: c["telefono"] for c in clienti}\nprint(telefoni["Marco"])  # 600333444` },
        { h: 'Passo 4: un modulo tutto tuo', p: [
          'Salva `cerca()` e `aggiungi()` in un file `rubrica.py`. Da un altro file della stessa cartella le importi con `from rubrica import cerca, aggiungi`.',
          'Così il menu sta in un file e la logica in un altro, e puoi riusare la rubrica in altri programmi senza copiare codice.' ],
          code: `# main.py\nfrom rubrica import cerca, aggiungi\n\nclienti = []\naggiungi(clienti, "Eva", "600777888")\nprint(cerca(clienti, "EVA"))  # {'nome': 'Eva', 'telefono': '600777888', 'acquisti': 0}` },
        { h: 'Esempio reale: il menu della rubrica', real: true, p: [
          'Un ciclo con un menu di opzioni è la base di molti strumenti da terminale. Ogni opzione chiama una funzione di `rubrica.py`.' ],
          code: `from rubrica import cerca, aggiungi\n\nclienti = []\nwhile True:\n    opzione = input("1 Cerca · 2 Aggiungi · 3 Fedeli · 0 Esci: ")\n    if opzione == "0":\n        break\n    elif opzione == "1":\n        c = cerca(clienti, input("Nome: "))\n        print(c if c else "Non è in rubrica")\n    elif opzione == "2":\n        ok = aggiungi(clienti, input("Nome: "), input("Telefono: "))\n        print("Salvato" if ok else "Esiste già")\n    elif opzione == "3":\n        print([c["nome"] for c in clienti if c["acquisti"] >= 5])` },
      ],
      x: [
        out(`c = {"nome": "Aiko", "acquisti": 7}\nprint(c["acquisti"] + 1)`, ['8', '71', '7', 'Error'], '`c["acquisti"]` è l’intero 7; aggiungendo 1 si ottiene 8.'),
        out(`clienti = [{"n": "Ana"}, {"n": "Leo"}]\nprint(clienti[1]["n"])`, ['Leo', 'Ana', '{"n": "Leo"}', 'Error'], '`clienti[1]` è il secondo dizionario e `["n"]` legge il suo nome.'),
        fill(`clienti.___({"nome": "Eva", "acquisti": 0})`, ['append', 'add', 'insert', 'push'], '`append()` aggiunge un elemento alla fine di una lista. `add()` è dei set e `push()` in Python non esiste.'),
        out(`def totale_acquisti(clienti):\n    return sum(c["acquisti"] for c in clienti)\n\nprint(totale_acquisti([{"acquisti": 2}, {"acquisti": 5}]))`, ['7', '25', '[2, 5]', 'Error'], 'L’espressione scorre i clienti, prende i loro acquisti e `sum()` li somma: 2 + 5.'),
        out(`clienti = [{"n": "Ana", "k": 9}, {"n": "Leo", "k": 2}, {"n": "Eva", "k": 5}]\nprint([c["n"] for c in clienti if c["k"] > 4])`, ["['Ana', 'Eva']", "['Leo']", "['Ana', 'Leo', 'Eva']", '[9, 5]'], 'La comprehension tiene i clienti con `k` maggiore di 4 e ne conserva il nome.'),
        mc('Perché `cerca()` finisce con `return None`, fuori dal ciclo?', ['Per indicare che non ha trovato nessuno dopo aver guardato tutti i clienti', 'Perché ogni funzione ha bisogno di un return alla fine', 'Per uscire dal ciclo prima del tempo', 'Per svuotare la lista dei clienti'], 'Se un cliente corrisponde, il `return` dentro il ciclo esce prima. Si arriva alla fine solo se non corrisponde nessuno.'),
        typ('Completa la riga che importa la funzione cerca da rubrica.py', `from rubrica ___ cerca`, 'import', '`from modulo import nome` importa solo quel nome per usarlo direttamente.'),
        out(`def aggiungi(clienti, nome):\n    if nome in [c["nome"] for c in clienti]:\n        return False\n    clienti.append({"nome": nome, "acquisti": 0})\n    return True\n\nrubrica = [{"nome": "Ana", "acquisti": 3}]\nprint(aggiungi(rubrica, "Leo"), aggiungi(rubrica, "Ana"), len(rubrica))`, ['True False 2', 'True True 3', 'False False 1', 'True False 3'], 'Leo non c’era e viene aggiunto (`True`); Ana c’era già e non si ripete (`False`). La rubrica finisce con 2 clienti.'),
      ],
    },
    // ───────────── Giorno 15 ─────────────
    {
      id: 'py-exceptions',
      t: 'Errori ed eccezioni',
      d: 'Leggere un traceback, riconoscere gli errori tipici e gestirli con try, except, else, finally e raise.',
      guide: [
        { h: 'Come leggere un traceback', p: [
          'Quando qualcosa va storto, Python mostra un traceback. Leggilo dal basso verso l’alto: l’ultima riga dice il tipo di errore e il messaggio; subito sopra compaiono il file, la riga e il codice che ha fallito.',
          'Copiare l’ultima riga in un motore di ricerca spesso porta dritto alla soluzione.' ],
          code: `Traceback (most recent call last):\n  File "negozio.py", line 3, in <module>\n    totale = prezzo * quantita\nNameError: name 'quantita' is not defined` },
        { h: 'NameError, TypeError e ValueError', p: [
          '`NameError`: usi un nome che non esiste (un errore di battitura o una variabile non ancora creata).',
          '`TypeError`: l’operazione non ha senso con quel tipo, come sommare testo e numero. `ValueError`: il tipo è giusto ma il valore no, come `int("trenta")`.' ],
          code: `print(nome)      # NameError: name 'nome' is not defined\n"Età: " + 30     # TypeError: can only concatenate str (not "int") to str\nint("trenta")    # ValueError: invalid literal for int() with base 10: 'trenta'\nlen(5)           # TypeError: object of type 'int' has no len()` },
        { h: 'try ed except', p: [
          'Alcuni errori non dipendono da te: l’utente scrive lettere dove ti aspettavi un numero, un file non esiste o la rete cade. `try` esegue il codice che può fallire ed `except` decide cosa fare se fallisce, invece di fermare il programma.',
          'Cattura sempre il tipo preciso (`except ValueError`). Un `except:` da solo cattura anche errori che non ti aspettavi e nasconde veri bug.' ],
          code: `testo = "dodici"\ntry:\n    numero = int(testo)\nexcept ValueError:\n    print("Questo non è un numero")\n    numero = 0\nprint(numero)  # 0` },
        { h: 'else e finally', p: [
          '`else` si esegue solo se il `try` non ha sollevato errori: lì va il codice che dipende dal fatto che tutto sia andato bene.',
          '`finally` si esegue sempre, con o senza errore. Si usa per liberare risorse: chiudere file o connessioni.' ],
          code: `try:\n    risultato = 10 / 2\nexcept ZeroDivisionError:\n    print("Errore")\nelse:\n    print("Risultato:", risultato)  # solo se non ci sono stati errori\nfinally:\n    print("Calcolo terminato")      # sempre` },
        { h: 'Sollevare errori con raise', p: [
          'Con `raise` sollevi tu un’eccezione quando i dati non hanno senso per la tua funzione. Meglio fallire presto con un messaggio chiaro che restituire un risultato sbagliato.',
          'Chi chiama la funzione deciderà se catturare l’errore e come.' ],
          code: `def preleva(saldo, importo):\n    if importo > saldo:\n        raise ValueError("Saldo insufficiente")\n    return saldo - importo\n\ntry:\n    preleva(50, 80)\nexcept ValueError as e:\n    print("Errore:", e)  # Errore: Saldo insufficiente` },
        { h: 'Esempio reale: chiedere l’età finché non è valida', real: true, p: [
          'In un programma da console non puoi fidarti di quello che scrive l’utente. Questo ciclo ripete la domanda finché non riceve un intero positivo, senza che il programma si blocchi.' ],
          code: `while True:\n    try:\n        eta = int(input("Età: "))\n        if eta < 0:\n            raise ValueError("negativa")\n        break\n    except ValueError:\n        print("Inserisci un numero intero positivo")\nprint("Età registrata:", eta)` },
      ],
      x: [
        mc('Quale errore produce `print(nome)` se `nome` non esiste?', ['NameError', 'TypeError', 'SyntaxError', 'ValueError'], 'Python non trova nessuna variabile con quel nome.'),
        mc('Quale errore produce `"5" + 5`?', ['TypeError', 'ValueError', 'NameError', 'Nessuno'], 'Non si può sommare uno `str` e un `int`; converti prima uno dei due.'),
        mc('Quale errore produce `int("ciao")`?', ['ValueError', 'TypeError', 'NameError', 'SyntaxError'], 'Il tipo è giusto (un testo), ma il suo valore non si può trasformare in numero.'),
        fill(`___:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("errore")`, ['try', 'do', 'catch', 'test'], 'Il blocco che può fallire va dentro `try`.'),
        out(`try:\n    n = int("abc")\nexcept ValueError:\n    n = -1\nprint(n)`, ['-1', 'abc', '0', 'Errore'], 'La conversione fallisce, si cattura `ValueError` e si assegna -1.'),
        out(`try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("errore")\nfinally:\n    print("fine")`, ['errore\nfine', 'fine', 'errore', 'inf\nfine'], 'Dividere per zero solleva `ZeroDivisionError`, che viene catturata. `finally` si esegue sempre.'),
        fill(`def dividi(a, b):\n    if b == 0:\n        ___ ValueError("b non può essere 0")\n    return a / b`, ['raise', 'throw', 'except', 'error'], 'In Python le eccezioni si sollevano con `raise`. `throw` è di Java e JavaScript.'),
        out(`def converti(valori):\n    totale = 0\n    for v in valori:\n        try:\n            totale += int(v)\n        except ValueError:\n            totale -= 1\n        finally:\n            totale += 10\n    return totale\n\nprint(converti(["5", "a", "2"]))`, ['36', '6', '26', '37'], '"5" somma 5, "a" toglie 1 e "2" somma 2, e `finally` aggiunge 10 a ogni giro: 5 - 1 + 2 + 30 = 36.'),
      ],
    },
    // ───────────── Giorno 16 ─────────────
    {
      id: 'py-files',
      t: 'Leggere e scrivere file',
      d: 'open() e with, percorsi, file che non esistono, CSV e JSON.',
      guide: [
        { h: 'Aprire e scrivere', p: [
          '`open(percorso, modalita)` apre un file. Modalità: `"r"` leggere (predefinita), `"w"` scrivere cancellando ciò che c’era, `"a"` aggiungere in fondo e `"x"` creare (fallisce se esiste già).',
          'Usa sempre `with open(...) as f:`: il file si chiude da solo alla fine del blocco, anche in caso di errore. Indica `encoding="utf-8"` perché le lettere accentate si salvino bene su qualsiasi sistema.' ],
          code: `with open("note.txt", "w", encoding="utf-8") as f:\n    f.write("Comprare il pane\\n")\n    f.write("Chiamare il medico\\n")\n\nwith open("note.txt", "a", encoding="utf-8") as f:\n    f.write("Pagare la luce\\n")` },
        { h: 'Leggere', p: [
          '`read()` restituisce tutto il contenuto in una stringa, `readline()` una riga e `readlines()` una lista di righe (ognuna con il suo `\\n` finale).',
          'Per i file grandi, percorri il file con `for`: legge riga per riga senza caricarlo tutto in memoria.' ],
          code: `with open("note.txt", encoding="utf-8") as f:\n    for numero, riga in enumerate(f, start=1):\n        print(numero, riga.strip())\n# 1 Comprare il pane\n# 2 Chiamare il medico\n# 3 Pagare la luce` },
        { h: 'Percorsi e file inesistenti', p: [
          'Aprire in lettura un file che non esiste solleva `FileNotFoundError`; catturala se è una cosa che può succedere.',
          '`pathlib.Path` gestisce i percorsi senza preoccuparti che il sistema usi `/` o `\\`, e ti dice l’estensione, il nome o se il file esiste.' ],
          code: `from pathlib import Path\n\npercorso = Path("dati") / "clienti.csv"\nprint(percorso.suffix)    # .csv\nprint(percorso.name)      # clienti.csv\nprint(percorso.exists())  # False se non esiste ancora` },
        { h: 'JSON', p: [
          'JSON è il formato standard per salvare e scambiare dati strutturati. `json.dump()` scrive un oggetto Python in un file e `json.load()` lo rilegge.',
          '`json.dumps()` e `json.loads()` (con la s di string) fanno lo stesso ma con testi. Nota che il `True` di Python diventa `true` in JSON.' ],
          code: `import json\n\nimpostazioni = {"tema": "scuro", "lingua": "it", "avvisi": True}\nwith open("impostazioni.json", "w", encoding="utf-8") as f:\n    json.dump(impostazioni, f, indent=2)\n\nwith open("impostazioni.json", encoding="utf-8") as f:\n    caricate = json.load(f)\nprint(caricate["tema"])          # scuro\nprint(json.dumps({"ok": True}))  # {"ok": true}` },
        { h: 'Esempio reale: sommare le spese di un CSV', real: true, p: [
          'La tua banca ti permette di scaricare i movimenti in CSV. `csv.DictReader` legge ogni riga come un dizionario le cui chiavi sono i nomi dell’intestazione.',
          'Apri i CSV con `newline=""`, come consiglia la documentazione del modulo `csv`.' ],
          code: `import csv\n\nwith open("spese.csv", "w", newline="", encoding="utf-8") as f:\n    f.write("voce,importo\\naffitto,650\\nluce,48.30\\nspesa,212.45\\n")\n\ntotale = 0\nwith open("spese.csv", newline="", encoding="utf-8") as f:\n    for riga in csv.DictReader(f):\n        totale += float(riga["importo"])\nprint(f"Spese del mese: {totale:.2f} €")  # Spese del mese: 910.75 €` },
      ],
      x: [
        fill(`___ open("dati.txt") as f:\n    testo = f.read()`, ['with', 'using', 'try', 'open'], '`with` chiude il file automaticamente alla fine del blocco, anche in caso di errore.'),
        mc('Quale modalità di `open()` aggiunge testo in fondo senza cancellare ciò che c’è?', ['"a"', '"w"', '"r"', '"x"'], '`"w"` sovrascrive tutto il file; `"a"` (append) aggiunge in fondo.'),
        mc('Che cosa succede se apri con `"r"` un file che non esiste?', ['Si solleva FileNotFoundError', 'Se ne crea uno vuoto', 'Restituisce None', 'Si apre in scrittura'], 'Solo le modalità di scrittura creano il file.'),
        out(`import json\ntesto = json.dumps({"a": 1})\nprint(type(testo))`, ["<class 'str'>", "<class 'dict'>", "<class 'json'>", '{"a": 1}'], '`dumps` (dump string) trasforma un oggetto Python in testo JSON.'),
        out(`import json\nd = json.loads('{"x": [1, 2]}')\nprint(d["x"][1])`, ['2', '1', '[1, 2]', 'Errore'], '`loads` trasforma il testo JSON in un dizionario.'),
        mc('Che cosa restituisce `f.readlines()`?', ['Una lista con ogni riga del file', 'Solo la prima riga', 'Tutto il testo in una stringa', 'Il numero di righe'], 'Ogni elemento della lista include l’a capo finale.'),
        typ('Apri il file per scrivere da zero', `with open("log.txt", "___") as f:\n    f.write("inizio")`, 'w', '`"w"` crea il file o ne cancella il contenuto prima di scrivere.'),
        out(`with open("t.txt", "w") as f:\n    f.write("uno\\ndue\\n")\nwith open("t.txt", "a") as f:\n    f.write("tre\\n")\nwith open("t.txt") as f:\n    righe = f.readlines()\nprint(len(righe), righe[-1].strip())`, ['3 tre', '2 tre', '1 tre', '3 uno'], '`"w"` scrive due righe e `"a"` aggiunge la terza senza cancellare. `strip()` toglie l’a capo da "tre\\n".'),
      ],
    },
    // ───────────── Giorno 17 ─────────────
    {
      id: 'py-datetime',
      t: 'Date e ore',
      d: 'Creare date, trasformarle in testo e viceversa, e calcolare quanto tempo passa tra due date.',
      guide: [
        { h: 'Il modulo datetime', p: [
          '`datetime` ha diverse classi: `date` (solo data), `time` (solo ora), `datetime` (data e ora) e `timedelta` (una durata).',
          '`datetime.now()` dà il momento attuale e `date.today()` la data di oggi. I loro attributi `year`, `month`, `day`, `hour`... ti danno ogni parte.' ],
          code: `from datetime import datetime, date\n\nadesso = datetime.now()\nprint(adesso.year, adesso.month, adesso.day)\noggi = date.today()\nprint(oggi)  # es. 2025-03-14` },
        { h: 'Creare date precise', p: [
          'Passa anno, mese e giorno (e se vuoi ora e minuti) al costruttore. Una data stampata appare in formato ISO: anno-mese-giorno.',
          '`weekday()` restituisce il giorno della settimana come numero: 0 è lunedì e 6 domenica.' ],
          code: `from datetime import date, datetime\n\ncompleanno = date(1995, 8, 21)\nprint(compleanno.year)       # 1995\nprint(compleanno.weekday())  # 0\nappuntamento = datetime(2025, 6, 3, 17, 30)\nprint(appuntamento)           # 2025-06-03 17:30:00` },
        { h: 'Dalla data al testo e dal testo alla data', p: [
          '`strftime()` (string format time) trasforma una data in testo nel formato che vuoi: `%d` giorno, `%m` mese, `%Y` anno, `%H` ora e `%M` minuti.',
          '`strptime()` (string parse time) fa il contrario: legge un testo in quel formato e restituisce un `datetime`. Se il testo non corrisponde, solleva `ValueError`.' ],
          code: `from datetime import datetime\n\nappuntamento = datetime(2025, 6, 3, 17, 30)\nprint(appuntamento.strftime("%d/%m/%Y %H:%M"))  # 03/06/2025 17:30\nnatale = datetime.strptime("25/12/2025", "%d/%m/%Y")\nprint(natale.month)                             # 12` },
        { h: 'Sommare e sottrarre tempo', p: [
          'Sommare un `timedelta` a una data la sposta in avanti; sottrarlo, indietro. Python sa già quanti giorni ha ogni mese e quali anni sono bisestili.',
          'Sottrarre due date dà un `timedelta`; il suo attributo `days` è la differenza in giorni.' ],
          code: `from datetime import date, timedelta\n\ninizio = date(2025, 1, 30)\nprint(inizio + timedelta(days=7))  # 2025-02-06\nfine = date(2025, 12, 31)\nprint((fine - inizio).days)        # 335` },
        { h: 'Esempio reale: calcolare l’età di una persona', real: true, p: [
          'Sottrarre gli anni non basta: se la persona non ha ancora compiuto gli anni quest’anno, bisogna toglierne uno. Confrontare tuple `(mese, giorno)` lo risolve in una riga.',
          'Ricevere `oggi` come parametro, invece di chiamare `date.today()` dentro, rende la funzione facile da provare.' ],
          code: `from datetime import date\n\ndef eta(nascita, oggi):\n    anni = oggi.year - nascita.year\n    if (oggi.month, oggi.day) < (nascita.month, nascita.day):\n        anni -= 1   # non ha ancora compiuto gli anni\n    return anni\n\nprint(eta(date(1990, 11, 5), date(2025, 3, 14)))  # 34` },
      ],
      x: [
        fill(`from datetime ___ datetime\nprint(datetime.now())`, ['import', 'include', 'use', 'from'], '`from modulo import nome` porta un nome preciso dal modulo.'),
        out(`from datetime import date\nd = date(2024, 5, 9)\nprint(d.year)`, ['2024', '5', '9', '2024-05-09'], '`year` è l’attributo con l’anno.'),
        out(`from datetime import date\nd = date(2024, 5, 9)\nprint(d.strftime("%d/%m/%Y"))`, ['09/05/2024', '2024/05/09', '9/5/2024', '05/09/2024'], '`%d` è il giorno a due cifre, `%m` il mese e `%Y` l’anno a quattro.'),
        out(`from datetime import date\na = date(2024, 1, 1)\nb = date(2024, 1, 31)\nprint((b - a).days)`, ['30', '31', '1', 'Errore'], 'Sottrarre due date dà un `timedelta`; dall’1 al 31 ci sono 30 giorni.'),
        out(`from datetime import date, timedelta\nd = date(2024, 2, 28) + timedelta(days=1)\nprint(d)`, ['2024-02-29', '2024-03-01', '2024-02-28', 'Errore'], 'Il 2024 è bisestile, quindi dopo il 28 febbraio viene il 29.'),
        mc('Che cosa fa `datetime.strptime("10/03/2024", "%d/%m/%Y")`?', ['Trasforma il testo in un oggetto datetime', 'Trasforma una data in testo', 'Restituisce la data di oggi', 'Calcola la differenza in giorni'], 'strptime viene da «string parse time»: dal testo alla data. `strftime` fa il contrario.'),
        typ('Aggiungi due settimane alla data', `from datetime import date, timedelta\nnuova = date(2025, 1, 1) + timedelta(___=2)`, 'weeks', '`timedelta` accetta `days`, `weeks`, `hours`, `minutes` e `seconds`.'),
        out(`from datetime import date, timedelta\nfattura = date(2025, 1, 31)\nscadenza = fattura + timedelta(days=30)\nprint(scadenza.strftime("%d/%m"), (scadenza - fattura).days, scadenza > fattura)`, ['02/03 30 True', '28/02 30 True', '03/02 30 True', '02/03 28 True'], 'Febbraio 2025 ha 28 giorni: 30 giorni dopo il 31 gennaio è il 2 marzo. Le date si confrontano con `>`.'),
      ],
    },
    // ───────────── Giorno 18 ─────────────
    {
      id: 'py-regex',
      t: 'Cercare schemi con le regex',
      d: 'Validare, cercare e sostituire testo con le espressioni regolari e il modulo re.',
      guide: [
        { h: 'Che cos’è un’espressione regolare?', p: [
          'Un’espressione regolare (regex) è uno schema che descrive un tipo di testo: «tre cifre», «qualcosa che sembra un’e-mail»... Il modulo `re` cerca questi schemi.',
          'Scrivi gli schemi come stringhe raw, con una `r` davanti (`r"\\d+"`), così Python non interpreta le barre rovesciate.',
          '`re.search()` restituisce la prima corrispondenza (o `None`) e `re.findall()` una lista con tutte.' ],
          code: `import re\n\ntesto = "Ordine 4521 spedito il 12/03"\nprint(re.search(r"\\d+", testo).group())  # 4521\nprint(re.findall(r"\\d+", testo))         # ['4521', '12', '03']` },
        { h: 'I simboli di base', p: [
          '`\\d` è una cifra, `\\w` una lettera, cifra o trattino basso, `\\s` uno spazio e `.` qualsiasi carattere. `[aeiou]` è uno di quei caratteri e `[^0-9]` qualsiasi cosa non sia una cifra.',
          'Quantificatori: `+` una o più volte, `*` zero o più, `?` facoltativo e `{5}` esattamente cinque. `^` indica l’inizio, `$` la fine e `\\b` il confine di una parola.',
          'Attenzione: `[aeiou]` non include le vocali accentate.' ],
          code: `import re\n\nprint(re.findall(r"[aeiou]", "università"))               # ['u', 'i', 'e', 'i']\nprint(re.findall(r"\\b\\w{5}\\b", "il gatto beve latte"))  # ['gatto', 'latte']\nprint(bool(re.fullmatch(r"\\d{5}", "00184")))             # True` },
        { h: 'search, match, fullmatch e gruppi', p: [
          '`match()` cerca solo all’inizio del testo, `fullmatch()` esige che corrisponda tutto il testo e `search()` cerca ovunque.',
          'Le parentesi creano gruppi che puoi estrarre separatamente con `group(n)` o tutti insieme con `groups()`.' ],
          code: `import re\n\ndata = "Data: 2025-03-14"\nm = re.search(r"(\\d{4})-(\\d{2})-(\\d{2})", data)\nprint(m.group(1))             # 2025\nprint(m.groups())             # ('2025', '03', '14')\nprint(re.match(r"\\d", data))  # None` },
        { h: 'Sostituire e dividere', p: [
          '`re.sub(schema, sostituzione, testo)` sostituisce tutte le corrispondenze. `re.split()` taglia il testo secondo uno schema, più flessibile di `str.split()`.' ],
          code: `import re\n\nprint(re.sub(r"\\s+", " ", "troppi    spazi   qui"))  # troppi spazi qui\nprint(re.split(r"[,;]\\s*", "rosso, verde;blu"))     # ['rosso', 'verde', 'blu']` },
        { h: 'Esempio reale: validare e-mail ed estrarre numeri di telefono', real: true, p: [
          'Un modulo deve rifiutare le e-mail scritte male, e un CRM vuole estrarre i numeri di telefono da appunti scritti a mano, con o senza spazi.',
          'Nessuno schema di e-mail è perfetto; questo copre i casi abituali. Per una vera verifica si invia un’e-mail di conferma.' ],
          code: `import re\n\nschema_email = r"^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"\nfor email in ["ana@mail.com", "sbagliata@", "luis.p@azienda.it"]:\n    print(email, bool(re.match(schema_email, email)))\n\nappunti = "Chiamare Ana al 333 123 4567 o Luis al 3401122334"\nprint(re.findall(r"3\\d{2}\\s?\\d{3}\\s?\\d{4}", appunti))  # ['333 123 4567', '3401122334']` },
      ],
      x: [
        mc('Quale modulo di Python lavora con le espressioni regolari?', ['re', 'regex', 'regexp', 'match'], 'Il modulo standard si chiama `re`.'),
        mc('Che cosa rappresenta `\\d` in un’espressione regolare?', ['Una cifra da 0 a 9', 'Qualsiasi lettera', 'Uno spazio', 'La fine del testo'], '`\\d` equivale a `[0-9]`.'),
        out(`import re\nprint(re.findall(r"\\d+", "a12b3"))`, ["['12', '3']", "['1', '2', '3']", '12, 3', '[12, 3]'], '`\\d+` cerca sequenze di una o più cifre consecutive, e restituisce stringhe.'),
        out(`import re\nprint(re.sub(r"\\s+", "-", "ciao  bel mondo"))`, ['ciao-bel-mondo', 'ciao--bel-mondo', 'ciaobelmondo', 'ciao bel mondo'], '`\\s+` raggruppa gli spazi consecutivi in un’unica corrispondenza.'),
        out(`import re\nprint(bool(re.match(r"^[A-Z]", "python")))`, ['False', 'True', 'None', 'P'], '`^[A-Z]` esige che il testo inizi con una maiuscola, e "python" inizia con una minuscola.'),
        fill(`import re\ntesto = "ana@web.com e luis@web.com"\nemail = re.___(r"\\w+@\\w+\\.com", testo)  # tutte le corrispondenze`, ['findall', 'search', 'match', 'find'], '`findall` restituisce una lista con tutte le corrispondenze.'),
        out(`import re\nm = re.search(r"(\\w+)@(\\w+)", "scrivi ad ana@posta oggi")\nprint(m.group(2))`, ['posta', 'ana', 'ana@posta', '@'], 'Lo schema ha due gruppi: il primo cattura "ana" e il secondo "posta".'),
        out(`import re\nlog = "ERROR 404 su /login, ERROR 500 su /pagamento, OK 200 su /"\nerrori = re.findall(r"ERROR (\\d{3})", log)\nprint(errori, re.sub(r"\\d", "#", errori[0]))`, ["['404', '500'] ###", "['ERROR 404', 'ERROR 500'] ###", "['404', '500', '200'] ###", "['404', '500'] #"], 'Con un gruppo, `findall` restituisce solo ciò che è catturato, e il 200 non è preceduto da ERROR. `sub` cambia ogni cifra di "404" in #.'),
      ],
    },
    // ───────────── Giorno 19 ─────────────
    {
      id: 'py-higher-order',
      t: 'Le funzioni come valori',
      d: 'Passare funzioni ad altre funzioni: lambda, map, filter, sorted con key, closure e decoratori.',
      guide: [
        { h: 'Anche le funzioni sono valori', p: [
          'In Python una funzione è un oggetto come gli altri: puoi salvarla in una variabile, passarla come argomento o restituirla da un’altra funzione.',
          'Una funzione di ordine superiore riceve o restituisce altre funzioni. Permette di scrivere codice generico che si adatta a ciò che le passi.' ],
          code: `def urla(testo):\n    return testo.upper() + "!"\n\ndef applica(funzione, valore):\n    return funzione(valore)\n\nprint(applica(urla, "ciao"))  # CIAO!\nprint(applica(len, "ciao"))   # 4` },
        { h: 'lambda: funzioni di una riga', p: [
          '`lambda parametri: espressione` crea una piccola funzione anonima. Si usa soprattutto come argomento di `sorted`, `map`, `filter`, `max`...',
          'Se la logica richiede più di un’espressione, definisci una funzione normale con `def`.' ],
          code: `doppio = lambda x: x * 2\nprint(doppio(7))  # 14\n\nprodotti = [("pane", 1.2), ("formaggio", 4.5), ("latte", 0.9)]\nprodotti.sort(key=lambda p: p[1])\nprint(prodotti[0])  # ('latte', 0.9)` },
        { h: 'map, filter e reduce', p: [
          '`map(f, dati)` applica `f` a ogni elemento; `filter(f, dati)` tiene quelli per cui `f` è vera. Restituiscono iteratori: avvolgili in `list()` per vedere il risultato.',
          '`reduce` (dal modulo `functools`) combina tutti gli elementi in un solo valore. Spesso una list comprehension è più leggibile di `map` e `filter`.' ],
          code: `from functools import reduce\n\nnums = [1, 2, 3, 4, 5]\nprint(list(map(lambda n: n ** 2, nums)))         # [1, 4, 9, 16, 25]\nprint(list(filter(lambda n: n % 2 == 1, nums)))  # [1, 3, 5]\nprint(reduce(lambda a, b: a * b, nums))          # 120` },
        { h: 'Closure', p: [
          'Una funzione definita dentro un’altra ricorda le variabili della funzione esterna anche quando questa è già terminata. Questa è una closure.',
          'Serve a fabbricare funzioni configurate: qui, una funzione di sconto per ogni percentuale.' ],
          code: `def crea_sconto(percentuale):\n    def applica(prezzo):\n        return prezzo * (1 - percentuale / 100)\n    return applica\n\nsaldi = crea_sconto(20)\nprint(saldi(50))  # 40.0` },
        { h: 'Decoratori', p: [
          'Un decoratore è una funzione che ne riceve un’altra e ne restituisce una versione arricchita. Si applica con `@nome` sopra il `def`.',
          'Si usano per registrare le chiamate, misurare i tempi, controllare i permessi o mettere in cache i risultati senza toccare la funzione originale. Flask, che vedrai il giorno 27, li usa per le rotte.' ],
          code: `def registra(funzione):\n    def involucro(*args):\n        print("Chiamata a", funzione.__name__)\n        return funzione(*args)\n    return involucro\n\n@registra\ndef somma(a, b):\n    return a + b\n\nprint(somma(2, 3))\n# Chiamata a somma\n# 5` },
        { h: 'Esempio reale: il catalogo di un negozio', real: true, p: [
          'Con `filter`, `map`, `sorted` e `max` con `key` puoi rispondere a domande su un catalogo: quali prodotti costano meno di 20 € e qual è il più caro.' ],
          code: `prodotti = [\n    {"nome": "Cuffie", "prezzo": 59.9},\n    {"nome": "Cavo USB", "prezzo": 7.5},\n    {"nome": "Mouse", "prezzo": 19.9},\n]\neconomici = filter(lambda p: p["prezzo"] < 20, prodotti)\nnomi = sorted(map(lambda p: p["nome"], economici))\nprint(nomi)  # ['Cavo USB', 'Mouse']\npiu_caro = max(prodotti, key=lambda p: p["prezzo"])\nprint(piu_caro["nome"])  # Cuffie` },
      ],
      x: [
        mc('Che cos’è una funzione di ordine superiore?', ['Una funzione che riceve o restituisce altre funzioni', 'Una funzione definita dentro una classe', 'Una funzione con più di tre parametri', 'Una funzione che si esegue più in fretta'], '`map`, `filter` e `sorted(key=...)` ne sono esempi: ricevono una funzione come argomento.'),
        out(`quadrato = lambda x: x ** 2\nprint(quadrato(3))`, ['9', '6', '27', '8'], '`**` è la potenza: 3 alla seconda fa 9.'),
        fill(`doppio = ___ x: x * 2\nprint(doppio(5))  # 10`, ['lambda', 'def', 'fn', 'func'], 'Le funzioni anonime di una riga si creano con `lambda`.'),
        out(`print(list(map(lambda n: n + 1, [1, 2, 3])))`, ['[2, 3, 4]', '[1, 2, 3]', '6', '<map object>'], '`map` applica la funzione a ogni elemento e `list()` mostra il risultato.'),
        out(`print(list(filter(lambda n: n > 2, [1, 2, 3, 4])))`, ['[3, 4]', '[1, 2]', '[False, False, True, True]', '2'], '`filter` tiene gli elementi per cui la funzione restituisce `True`.'),
        out(`def moltiplicatore(n):\n    def f(x):\n        return x * n\n    return f\n\ntriplo = moltiplicatore(3)\nprint(triplo(5))`, ['15', '8', '3', 'Errore'], '`f` è una closure: ricorda il valore di `n` anche se `moltiplicatore` è già terminata.'),
        out(`def urla(f):\n    def involucro():\n        return f().upper()\n    return involucro\n\n@urla\ndef saluto():\n    return "ciao"\n\nprint(saluto())`, ['CIAO', 'ciao', 'involucro', 'Errore'], '`@urla` sostituisce `saluto` con `involucro`, che mette il risultato in maiuscolo.'),
        out(`from functools import reduce\nnums = [3, 8, 1, 6]\nr = reduce(lambda a, b: a + b, map(lambda n: n * 10, filter(lambda n: n > 2, nums)))\nprint(r)`, ['170', '180', '17', '[30, 80, 60]'], '`filter` tiene 3, 8 e 6; `map` li moltiplica per 10 e `reduce` li somma: 30 + 80 + 60 = 170.'),
      ],
    },
    // ───────────── Giorno 20 ─────────────
    {
      id: 'py-venv',
      t: 'Ambienti virtuali',
      d: 'Un ambiente per progetto con venv, perché le dipendenze di uno non rompano un altro.',
      guide: [
        { h: 'Il problema che risolvono', p: [
          'Immagina due progetti: uno ha bisogno di Django 4 e l’altro di Django 5. Se installi tutto nel Python di sistema, uno dei due si rompe.',
          'Un ambiente virtuale è una cartella con il proprio Python e i propri pacchetti. Ogni progetto ha il suo e non si pestano i piedi.' ] },
        { h: 'Creare e attivare un ambiente', p: [
          '`python -m venv .venv` crea l’ambiente nella cartella `.venv`. Poi bisogna attivarlo; il prompt del terminale mostrerà `(.venv)` all’inizio.' ],
          code: `# creare\npython -m venv .venv\n\n# attivare su macOS e Linux\nsource .venv/bin/activate\n\n# attivare su Windows (PowerShell)\n.venv\\Scripts\\Activate.ps1\n\n# uscire dall'ambiente\ndeactivate` },
        { h: 'Installare e condividere le dipendenze', p: [
          'Con l’ambiente attivo, `pip install` installa solo al suo interno. Alla fine, salva l’elenco con `pip freeze > requirements.txt`.',
          'La cartella `.venv` non va su Git: si aggiunge a `.gitignore` e ognuno la ricrea con `pip install -r requirements.txt`.' ],
          code: `pip install flask requests\npip freeze > requirements.txt\n\n# in .gitignore\n.venv/` },
        { h: 'Controllare quale Python si sta usando', p: [
          'Se un pacchetto non si importa, controlla quale interprete stai usando. Con un ambiente attivo, `sys.prefix` punta alla cartella dell’ambiente.',
          'Editor come VS Code permettono di scegliere l’interprete dell’ambiente, così completamento automatico ed esecuzione usano gli stessi pacchetti.' ],
          code: `import sys\nprint(sys.executable)                 # percorso del Python in uso\nprint(sys.prefix != sys.base_prefix)  # True se c'è un ambiente attivo` },
        { h: 'Esempio reale: preparare un nuovo progetto', real: true, p: [
          'Questi sono i passi che seguiresti all’inizio di qualsiasi progetto Python professionale, per esempio un’app che consulta il meteo.' ],
          code: `mkdir app-meteo\ncd app-meteo\npython -m venv .venv\nsource .venv/bin/activate\npip install requests\npip freeze > requirements.txt\necho ".venv/" > .gitignore\ngit init` },
      ],
      x: [
        mc('A che cosa serve un ambiente virtuale?', ['A isolare le dipendenze di ogni progetto', 'A eseguire Python nel browser', 'A rendere il codice più veloce', 'A creare macchine virtuali'], 'Ogni progetto può usare versioni diverse delle stesse librerie.'),
        ord('Crea un ambiente virtuale nella cartella .venv', ['python', '-m', 'venv', '.venv'], ['pip', 'new'], '`-m venv` esegue il modulo venv; l’ultimo argomento è la cartella.'),
        mc('Su Windows con PowerShell, come si attiva l’ambiente `.venv`?', ['.venv\\Scripts\\Activate.ps1', 'source .venv/bin/activate', 'activate .venv', 'python .venv'], 'Su macOS e Linux si usa `source .venv/bin/activate`.'),
        mc('Devi caricare su Git la cartella dell’ambiente virtuale?', ['No: si aggiunge a .gitignore e si condivide requirements.txt', 'Sì, sempre', 'Solo nei progetti grandi', 'Solo i file .py al suo interno'], 'L’ambiente si ricrea con `pip install -r requirements.txt`.'),
        mc('Con l’ambiente attivo, dove installa `pip install flask`?', ['Nell’ambiente virtuale del progetto', 'In tutto il sistema', 'Nella cartella dell’utente', 'Nel cloud'], 'Per questo non influisce sugli altri progetti.'),
        typ('Scrivi il comando che disattiva l’ambiente virtuale', `(.venv) $ ___`, 'deactivate', '`deactivate` ti riporta al Python di sistema.'),
        mc('Che cosa mostra `print(sys.prefix != sys.base_prefix)` con un ambiente virtuale attivo?', ['True', 'False', 'La versione di Python', 'None'], 'Dentro un ambiente, `sys.prefix` punta alla sua cartella ed è diverso da `sys.base_prefix`.'),
        ord('Salva le dipendenze dell’ambiente in requirements.txt', ['pip', 'freeze', '>', 'requirements.txt'], ['install', '-r'], '`pip freeze` elenca i pacchetti con la loro versione e `>` reindirizza quell’output in un file.'),
      ],
    },
    // ───────────── Giorno 21 ─────────────
    {
      id: 'py-workshop-sales',
      t: 'Il laboratorio di Kibi: il report delle vendite',
      d: 'Progetto della settimana 3: leggere le vendite da un CSV, saltare le righe con errori, raggruppare per mese e salvare un report in JSON.',
      guide: [
        { h: 'L’incarico', p: [
          'Kibi annota ogni vendita in `vendite.csv`: data, prodotto e importo. Vuole sapere quanto vende il negozio ogni mese e qual è il prodotto di punta, anche se il file ha qualche riga scritta male.',
          'Questo laboratorio mette insieme la settimana 3: file, eccezioni, date, espressioni regolari e funzioni come valori. Crea una cartella per il progetto con il suo ambiente (`python -m venv .venv`): usa solo la libreria standard, ma così è già pronta.' ],
          code: `data,prodotto,importo\n2026-03-02,semi,4.50\n2026-03-15,fieno,7.25\n2026-04-01,semi,4.50\n2026-04-09,carota,abc` },
        { h: 'Passo 1: leggere il CSV senza bloccarsi', p: [
          '`csv.DictReader` trasforma ogni riga in un dizionario con i nomi dell’intestazione come chiavi. Tutti i valori arrivano come testo.',
          'L’ultima riga ha `abc` come importo: `float()` solleva `ValueError`, la catturiamo, avvisiamo e passiamo alla riga successiva con `continue`.' ],
          code: `import csv\n\nvendite = []\nwith open("vendite.csv", encoding="utf-8") as f:\n    for riga in csv.DictReader(f):\n        try:\n            riga["importo"] = float(riga["importo"])\n        except ValueError:\n            print("Riga ignorata:", riga["data"], riga["prodotto"])\n            continue\n        vendite.append(riga)\nprint(len(vendite))  # 3` },
        { h: 'Passo 2: raggruppare per mese', p: [
          '`strptime()` trasforma il testo in una data e `strftime("%Y-%m")` la riduce ad anno e mese, che usiamo come chiave.',
          '`dict.get(chiave, 0)` restituisce 0 la prima volta che compare un mese, così non serve controllare se la chiave esiste.' ],
          code: `from datetime import datetime\n\nper_mese = {}\nfor v in vendite:\n    mese = datetime.strptime(v["data"], "%Y-%m-%d").strftime("%Y-%m")\n    per_mese[mese] = per_mese.get(mese, 0) + v["importo"]\nprint(per_mese)  # {'2026-03': 11.75, '2026-04': 4.5}` },
        { h: 'Passo 3: validare le date e trovare il prodotto di punta', p: [
          'Un’espressione regolare scarta le righe la cui data non ha la forma `AAAA-MM-GG` prima di fare i conti.',
          '`max()` con `key` riceve una funzione: confronta i prodotti in base al totale e restituisce il prodotto, non la cifra.' ],
          code: `import re\n\nDATA = re.compile(r"\\d{4}-\\d{2}-\\d{2}")\nvendite = [v for v in vendite if DATA.fullmatch(v["data"])]\n\ntotali = {}\nfor v in vendite:\n    totali[v["prodotto"]] = totali.get(v["prodotto"], 0) + v["importo"]\nmigliore = max(totali, key=lambda p: totali[p])\nprint(migliore, totali[migliore])  # semi 9.0` },
        { h: 'Esempio reale: salvare il report', real: true, p: [
          'Il report si salva in JSON perché un altro programma, un foglio di calcolo o un sito possano leggerlo. `ensure_ascii=False` conserva gli accenti e `indent=2` lo rende leggibile.',
          'Se ogni mese arriva un CSV nuovo, lo stesso programma prepara il report in pochi secondi. È proprio il tipo di lavoro che la programmazione ti toglie.' ],
          code: `import json\n\nreport = {"per_mese": per_mese, "prodotto_di_punta": migliore, "vendite_valide": len(vendite)}\nwith open("report.json", "w", encoding="utf-8") as f:\n    json.dump(report, f, ensure_ascii=False, indent=2)` },
      ],
      x: [
        mc('Che cosa fa `with open("vendite.csv") as f:` alla fine del blocco?', ['Chiude il file, anche se c’è stato un errore', 'Cancella il file', 'Salva una copia del file', 'Niente: bisogna chiuderlo a mano con close()'], '`with` chiude il file all’uscita dal blocco, anche se dentro viene sollevata un’eccezione.'),
        out(`try:\n    importo = float("abc")\nexcept ValueError:\n    importo = 0\nprint(importo)`, ['0', 'abc', 'ValueError', '0.0'], '`float("abc")` solleva `ValueError`; l’`except` la cattura e assegna l’intero 0.'),
        fill(`from datetime import datetime\nd = datetime.___("2026-03-15", "%Y-%m-%d")\nprint(d.month)  # 3`, ['strptime', 'strftime', 'parse', 'fromtext'], '`strptime` legge un testo e lo trasforma in data (p come parse). `strftime` fa il contrario.'),
        out(`from datetime import datetime\nd = datetime(2026, 4, 9)\nprint(d.strftime("%Y-%m"))`, ['2026-04', '2026-4', '04-2026', '2026-04-09'], '`%m` scrive sempre il mese con due cifre, e il formato chiede solo anno e mese.'),
        out(`totali = {}\nfor p in ["semi", "fieno", "semi"]:\n    totali[p] = totali.get(p, 0) + 1\nprint(totali)`, ["{'semi': 2, 'fieno': 1}", "{'semi': 1, 'fieno': 1}", "{'fieno': 1, 'semi': 2}", 'KeyError'], '`get(p, 0)` dà 0 la prima volta, quindi niente `KeyError`. Il dizionario conserva le chiavi nell’ordine in cui compaiono.'),
        out(`import re\nprint(bool(re.fullmatch(r"\\d{4}-\\d{2}", "2026-3")))`, ['False', 'True', 'None', '2026-3'], '`\\d{2}` richiede due cifre e il mese ne ha una sola. `fullmatch` vuole che corrisponda tutto il testo.'),
        out(`totali = {"semi": 9.0, "fieno": 7.25}\nprint(max(totali, key=lambda p: totali[p]))`, ['semi', '9.0', 'fieno', '7.25'], 'Scorrere un dizionario significa scorrerne le chiavi. `key` confronta per totale, ma `max()` restituisce la chiave.'),
        out(`righe = ["2026-03-02;4.50", "2026-03-20;x", "2026-04-01;3.00", "2026-03-31;1.50"]\nper_mese = {}\nfor riga in righe:\n    data, importo = riga.split(";")\n    try:\n        per_mese[data[:7]] = per_mese.get(data[:7], 0) + float(importo)\n    except ValueError:\n        continue\nprint(per_mese)`, ["{'2026-03': 6.0, '2026-04': 3.0}", "{'2026-03': 4.5, '2026-04': 3.0}", 'ValueError', "{'2026-03': 6.0}"], 'La riga con `x` fallisce in `float()` prima di qualsiasi assegnazione e si salta. Marzo somma 4.50 + 1.50 = 6.0 e aprile, 3.0.'),
      ],
    },
    // ───────────── Giorno 22 ─────────────
    {
      id: 'py-classes',
      t: 'Classi e oggetti',
      d: 'Creare i tuoi tipi con class: __init__, self, attributi, metodi e metodi speciali.',
      guide: [
        { h: 'Classi e oggetti', p: [
          'Una classe è uno stampo che descrive dati (attributi) e comportamento (metodi). Ogni oggetto creato da essa è un’istanza con i propri valori.',
          '`__init__` si esegue quando si crea l’oggetto e ne prepara gli attributi. `self` è l’istanza stessa: con `self.nome` ci salvi un dato.' ],
          code: `class Cane:\n    def __init__(self, nome, eta):\n        self.nome = nome\n        self.eta = eta\n\n    def abbaia(self):\n        return f"{self.nome} fa bau"\n\nrex = Cane("Rex", 3)\nprint(rex.abbaia())  # Rex fa bau\nprint(rex.eta)       # 3` },
        { h: 'Attributi di classe e di istanza', p: [
          'Un attributo di istanza (`self.x`) appartiene a ogni singolo oggetto. Un attributo di classe si definisce nel corpo della classe ed è condiviso da tutte le istanze.',
          'Usali per costanti o contatori comuni. Attenzione alle liste: se una lista è un attributo di classe, tutte le istanze modificano la stessa.' ],
          code: `class Contatore:\n    totale = 0  # di classe: condiviso\n\n    def __init__(self):\n        Contatore.totale += 1\n        self.id = Contatore.totale  # di istanza\n\na = Contatore()\nb = Contatore()\nprint(a.id, b.id, Contatore.totale)  # 1 2 2` },
        { h: 'Ereditarietà e super()', p: [
          'Con `class Figlia(Genitore)` la classe figlia riceve tutti i metodi del genitore e può ridefinirli.',
          '`super()` chiama il metodo del genitore. Di solito si usa in `__init__` per riutilizzare l’inizializzazione.' ],
          code: `class Animale:\n    def __init__(self, nome):\n        self.nome = nome\n\n    def parla(self):\n        return "..."\n\nclass Gatto(Animale):\n    def __init__(self, nome, casalingo):\n        super().__init__(nome)\n        self.casalingo = casalingo\n\n    def parla(self):\n        return "miao"\n\nmicio = Gatto("Micio", True)\nprint(micio.nome, micio.parla())  # Micio miao` },
        { h: 'Metodi speciali e dataclass', p: [
          'I metodi con il doppio trattino basso cambiano il comportamento dell’oggetto con gli strumenti di Python: `__str__` quando lo stampi, `__len__` con `len()` e `__eq__` quando lo confronti con `==`.',
          'Il decoratore `@dataclass` genera automaticamente `__init__`, `__repr__` e `__eq__` per le classi che servono solo a contenere dati.' ],
          code: `from dataclasses import dataclass\n\n@dataclass\nclass Punto:\n    x: int\n    y: int\n\np = Punto(1, 2)\nprint(p)                 # Punto(x=1, y=2)\nprint(p == Punto(1, 2))  # True` },
        { h: 'Esempio reale: un carrello della spesa', real: true, p: [
          'Un negozio online deve tenere i prodotti del carrello e calcolare il totale. Una classe raccoglie dati e operazioni in un unico posto.' ],
          code: `class Carrello:\n    def __init__(self):\n        self.articoli = []\n\n    def aggiungi(self, prodotto, prezzo, quantita=1):\n        self.articoli.append((prodotto, prezzo, quantita))\n\n    def totale(self):\n        return sum(prezzo * qta for _, prezzo, qta in self.articoli)\n\n    def __str__(self):\n        return f"Carrello con {len(self.articoli)} prodotti: {self.totale():.2f} €"\n\nc = Carrello()\nc.aggiungi("Libro", 12.50)\nc.aggiungi("Penna", 1.20, 3)\nprint(c)  # Carrello con 2 prodotti: 16.10 €` },
      ],
      x: [
        fill(`class Cane:\n    def ___(self, nome):\n        self.nome = nome`, ['__init__', 'constructor', 'init', '__new__'], '`__init__` è il metodo che si esegue quando si crea l’oggetto.'),
        mc('Che cosa rappresenta `self` dentro un metodo?', ['L’istanza attuale dell’oggetto', 'La classe genitore', 'Una variabile globale', 'Il modulo attuale'], '`self` è l’oggetto preciso su cui si chiama il metodo.'),
        out(`class Gatto:\n    def __init__(self, n):\n        self.n = n\n\n    def parla(self):\n        return self.n + " dice miao"\n\nprint(Gatto("Tom").parla())`, ['Tom dice miao', 'miao', 'n dice miao', 'Errore'], 'L’oggetto salva "Tom" in `self.n` e `parla()` lo usa.'),
        fill(`class Animale:\n    pass\n\nclass Pesce(___):\n    pass`, ['Animale', 'extends Animale', ':Animale', '<Animale>'], 'Per ereditare, metti la classe genitore tra parentesi.'),
        out(`class A:\n    def ciao(self):\n        return "A"\n\nclass B(A):\n    def ciao(self):\n        return "B" + super().ciao()\n\nprint(B().ciao())`, ['BA', 'B', 'A', 'AB'], 'B restituisce "B" e ci aggiunge ciò che restituisce il metodo del genitore, "A".'),
        out(`class Contatore:\n    totale = 0\n\n    def __init__(self):\n        Contatore.totale += 1\n\nContatore()\nContatore()\nprint(Contatore.totale)`, ['2', '0', '1', 'Errore'], '`totale` è un attributo di classe, condiviso da tutte le istanze, e ne sono state create due.'),
        mc('Quale metodo definisce il testo mostrato da `print(oggetto)`?', ['__str__', '__print__', 'toString', '__text__'], '`__str__` restituisce la rappresentazione leggibile dell’oggetto.'),
        out(`class Conto:\n    def __init__(self, saldo=0):\n        self.saldo = saldo\n\n    def versa(self, x):\n        self.saldo += x\n        return self\n\nc = Conto(10).versa(5).versa(20)\nprint(c.saldo)`, ['35', '10', '25', 'Errore'], 'Ogni `versa` restituisce `self`, quindi le chiamate si concatenano sullo stesso oggetto: 10 + 5 + 20 = 35.'),
      ],
    },
    // ───────────── Giorno 23 ─────────────
    {
      id: 'py-inheritance',
      t: 'Ereditarietà e dataclass',
      d: 'Riutilizzare le classi con l’ereditarietà e super(), quando preferire la composizione e risparmiare codice con @dataclass.',
      guide: [
        { h: 'Ereditare da un’altra classe', p: [
          'Una classe figlia eredita attributi e metodi dalla classe madre e può cambiare quelli che le servono. `Offerta` è un `Prodotto` con sconto: non serve ripetere quello che fa già `Prodotto`.',
          '`super().__init__(...)` esegue l’`__init__` della madre, che continua a preparare gli attributi comuni. Senza quella riga, `self.nome` e `self.prezzo` non esisterebbero.' ],
          code: `class Prodotto:\n    def __init__(self, nome, prezzo):\n        self.nome = nome\n        self.prezzo = prezzo\n\n    def prezzo_finale(self):\n        return self.prezzo\n\nclass Offerta(Prodotto):\n    def __init__(self, nome, prezzo, sconto):\n        super().__init__(nome, prezzo)\n        self.sconto = sconto\n\n    def prezzo_finale(self):\n        return round(self.prezzo * (1 - self.sconto), 2)\n\nprint(Offerta("Fieno", 8.0, 0.25).prezzo_finale())  # 6.0` },
        { h: 'isinstance e l’ordine di ricerca', p: [
          'Un’`Offerta` è anche un `Prodotto`, ma non il contrario. `isinstance()` lo verifica ed è il modo corretto di chiedere il tipo di un oggetto.',
          'Quando chiami un metodo, Python lo cerca prima nella classe dell’oggetto e, se non c’è, nella madre. Quell’ordine si chiama MRO e puoi vederlo in `__mro__`.' ],
          code: `o = Offerta("Fieno", 8.0, 0.25)\nprint(isinstance(o, Prodotto))                   # True\nprint(isinstance(Prodotto("Semi", 4.5), Offerta))  # False\nprint(Offerta.__mro__[1].__name__)               # Prodotto` },
        { h: 'Ereditarietà o composizione?', p: [
          'Usa l’ereditarietà quando la frase «è un» ha senso: un’offerta è un prodotto. Se viene più naturale «ha un», usa la composizione: un carrello ha dei prodotti, quindi ne tiene una lista.',
          'Le gerarchie profonde diventano difficili da cambiare. Nel dubbio, la composizione è di solito la scelta più flessibile.' ],
          code: `class Carrello:\n    def __init__(self):\n        self.prodotti = []  # ha dei prodotti: composizione\n\n    def totale(self):\n        return sum(p.prezzo_finale() for p in self.prodotti)` },
        { h: '@dataclass: classi di dati senza ripetere codice', p: [
          'Molte classi contengono solo dati. `@dataclass` scrive per te `__init__`, `__repr__` (ciò che mostra `print`) e `__eq__` (il confronto con `==`) a partire dagli attributi e dal loro tipo.',
          'Una lista come valore predefinito si scrive con `field(default_factory=list)`; altrimenti tutti gli oggetti condividerebbero la stessa lista, come con i parametri predefiniti delle funzioni.' ],
          code: `from dataclasses import dataclass, field\n\n@dataclass\nclass Cliente:\n    nome: str\n    acquisti: int = 0\n    etichette: list = field(default_factory=list)\n\nana = Cliente("Ana")\nprint(ana)                    # Cliente(nome='Ana', acquisti=0, etichette=[])\nprint(ana == Cliente("Ana"))  # True` },
        { h: 'frozen e order', p: [
          'Con `frozen=True` l’oggetto non si può modificare dopo averlo creato, come una tupla con i nomi. Con `order=True` gli oggetti si possono confrontare con `<` e `>`, campo per campo e in ordine.' ],
          code: `from dataclasses import dataclass\n\n@dataclass(frozen=True, order=True)\nclass Versione:\n    maggiore: int\n    minore: int\n\nprint(Versione(1, 10) > Versione(1, 2))  # True\n# Versione(2, 0).maggiore = 3 solleverebbe FrozenInstanceError` },
        { h: 'Esempio reale: il catalogo del negozio', real: true, p: [
          'Anche le dataclass si ereditano. Il catalogo mescola prodotti normali e offerte, e il ciclo chiama `prezzo_finale()` senza chiedere di che tipo sia ognuno: ogni oggetto sa calcolare il proprio prezzo.' ],
          code: `from dataclasses import dataclass\n\n@dataclass\nclass Prodotto:\n    nome: str\n    prezzo: float\n\n    def prezzo_finale(self):\n        return self.prezzo\n\n@dataclass\nclass Offerta(Prodotto):\n    sconto: float = 0.1\n\n    def prezzo_finale(self):\n        return round(self.prezzo * (1 - self.sconto), 2)\n\ncatalogo = [Prodotto("Semi", 4.5), Offerta("Fieno", 8.0, 0.25)]\nfor p in catalogo:\n    print(f"{p.nome}: {p.prezzo_finale():.2f} €")\n# Semi: 4.50 €\n# Fieno: 6.00 €` },
      ],
      x: [
        fill(`class Prodotto:\n    pass\n\nclass Offerta(___):\n    pass  # Offerta eredita da Prodotto`, ['Prodotto', 'super', 'self', 'Prodotto()'], 'La classe madre va tra parentesi, con il suo nome e senza chiamarla.'),
        mc('A cosa serve `super().__init__(nome, prezzo)` in una classe figlia?', ['A eseguire l’__init__ della classe madre invece di ripeterne il codice', 'A creare un secondo oggetto', 'A cancellare gli attributi della madre', 'A impedire che altre classi ereditino da lei'], '`super()` dà accesso alla classe madre; il suo `__init__` prepara gli attributi comuni.'),
        out(`class A:\n    def ciao(self):\n        return "A"\n\nclass B(A):\n    pass\n\nprint(B().ciao())`, ['A', 'B', 'None', 'AttributeError'], '`B` non definisce `ciao`, quindi Python lo cerca nella madre `A`.'),
        out(`class A:\n    pass\n\nclass B(A):\n    pass\n\nprint(isinstance(B(), A), isinstance(A(), B))`, ['True False', 'True True', 'False True', 'False False'], 'Un oggetto della figlia è anche della madre, ma uno della madre non è della figlia.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Punto:\n    x: int\n    y: int = 0\n\nprint(Punto(3))`, ['Punto(x=3, y=0)', 'Punto(3)', '<__main__.Punto object>', '(3, 0)'], '`@dataclass` genera un `__repr__` con il nome e il valore di ogni campo, compresi quelli predefiniti.'),
        mc('Un `Carrello` tiene i prodotti da comprare. Quale relazione conviene?', ['Composizione: il carrello ha una lista di prodotti', 'Ereditarietà: Carrello eredita da Prodotto', 'Ereditarietà: Prodotto eredita da Carrello', 'Nessuna: meglio una variabile globale'], 'Un carrello non è un prodotto: ha dei prodotti. «Ha un» chiede la composizione.'),
        fill(`from dataclasses import dataclass, field\n\n@dataclass\nclass Ordine:\n    righe: list = ___(default_factory=list)`, ['field', 'list', 'dataclass', 'default'], '`field(default_factory=list)` crea una lista nuova per ogni ordine invece di condividerne una.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Prodotto:\n    nome: str\n    prezzo: float\n\n    def finale(self):\n        return self.prezzo\n\n@dataclass\nclass Offerta(Prodotto):\n    sconto: float = 0.5\n\n    def finale(self):\n        return super().finale() * (1 - self.sconto)\n\narticoli = [Prodotto("a", 4.0), Offerta("b", 6.0), Offerta("c", 10.0, 0.1)]\nprint(sum(p.finale() for p in articoli), Offerta("b", 6.0) == articoli[1])`, ['16.0 True', '20.0 True', '16.0 False', '13.0 True'], '4.0 + 6.0 × 0.5 + 10.0 × 0.9 = 16.0. Le dataclass si confrontano per campi, quindi due offerte con gli stessi dati sono uguali.'),
      ],
    },
    // ───────────── Giorno 24 ─────────────
    {
      id: 'py-pandas',
      t: 'Analisi dei dati con pandas',
      d: 'Media e mediana con statistics, e tabelle con pandas: leggere un CSV, filtrare, creare colonne e raggruppare.',
      guide: [
        { h: 'Misure di tendenza centrale', p: [
          'La media è la somma divisa per il numero di valori, la mediana è il valore centrale dei dati ordinati e la moda è il valore che si ripete di più.',
          'La mediana resiste meglio ai valori estremi: con gli stipendi, pochi molto alti fanno schizzare la media ma spostano appena la mediana.' ],
          code: `import statistics as st\n\nstipendi = [1200, 1300, 1250, 1400, 9000]\nprint(st.mean(stipendi))    # 2830\nprint(st.median(stipendi))  # 1300` },
        { h: 'Series e DataFrame', p: [
          'Pandas è la libreria di riferimento per analizzare dati in tabelle. Una `Series` è una colonna con un indice e un `DataFrame` è una tabella con più colonne.',
          'Per convenzione si importa come `pd`.' ],
          code: `import pandas as pd\n\ndf = pd.DataFrame({\n    "prodotto": ["caffè", "tè", "succo"],\n    "prezzo": [1.8, 1.5, 2.5],\n    "venduti": [120, 45, 60],\n})\nprint(df.shape)            # (3, 3)\nprint(df["prezzo"].max())  # 2.5` },
        { h: 'Leggere ed esplorare i dati', p: [
          '`pd.read_csv("vendite.csv")` carica un CSV. Per esplorarlo, `head()` mostra le prime righe, `info()` i tipi e i valori mancanti, e `describe()` le statistiche di ogni colonna numerica.' ],
          code: `df = pd.read_csv("vendite.csv")\nprint(df.head())      # prime 5 righe\ndf.info()             # colonne, tipi e valori mancanti\nprint(df.describe())  # media, minimo, massimo...` },
        { h: 'Selezionare e filtrare', p: [
          '`df["col"]` seleziona una colonna e `df[["a", "b"]]` più colonne. Per filtrare righe, usa una condizione: `df[df["prezzo"] > 2]`.',
          'Combina le condizioni con `&` (e) e `|` (o), ognuna tra parentesi.' ],
          code: `economici = df[df["prezzo"] < 2]\nprint(economici["prodotto"].tolist())  # ['caffè', 'tè']\n\npopolari = df[(df["prezzo"] < 2) & (df["venduti"] > 100)]\nprint(len(popolari))  # 1` },
        { h: 'Nuove colonne e raggruppamenti', p: [
          'Puoi creare colonne calcolate a partire da altre. `groupby()` raggruppa le righe secondo una colonna e permette di sommare, contare o fare la media di ogni gruppo.' ],
          code: `df["ricavi"] = df["prezzo"] * df["venduti"]\nprint(df["ricavi"].sum())  # 433.5\n\nvendite = pd.DataFrame({"negozio": ["A", "B", "A"], "totale": [100, 50, 30]})\nprint(vendite.groupby("negozio")["totale"].sum().to_dict())  # {'A': 130, 'B': 50}` },
        { h: 'Esempio reale: un report mensile delle vendite', real: true, p: [
          'Un compito tipico in azienda: da un CSV con tutte le vendite dell’anno, calcolare il totale, il numero di vendite e lo scontrino medio di ogni mese, ed esportarlo in Excel.' ],
          code: `import pandas as pd\n\nvendite = pd.read_csv("vendite_2025.csv", parse_dates=["data"])\nvendite["mese"] = vendite["data"].dt.month\n\nreport = (vendite.groupby("mese")["importo"]\n                 .agg(["sum", "count", "mean"])\n                 .round(2))\nprint(report)\nreport.to_excel("report_mensile.xlsx")` },
      ],
      x: [
        out(`import statistics as st\nprint(st.mean([2, 4, 6]))`, ['4', '12', '6', '3'], 'La media è la somma (12) divisa per il numero di valori (3).'),
        mc('Quale misura è il valore centrale dei dati ordinati?', ['La mediana', 'La media', 'La moda', 'La deviazione standard'], 'Con [1, 3, 9], la mediana è 3.'),
        mc('Quale struttura di pandas rappresenta una tabella con righe e colonne?', ['DataFrame', 'Series', 'Array', 'Table'], 'Una `Series` è una sola colonna.'),
        fill(`import pandas as pd\ndf = pd.___("vendite.csv")`, ['read_csv', 'open_csv', 'load', 'csv'], '`read_csv` carica un file CSV in un DataFrame.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"x": [1, 2, 3]})\nprint(df["x"].sum())`, ['6', '3', '[1, 2, 3]', 'x'], 'Selezioni la colonna come Series e la sommi.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"eta": [20, 35, 50]})\nprint(len(df[df["eta"] > 30]))`, ['2', '1', '3', '0'], 'Il filtro lascia le righe con 35 e 50.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"a": [1, 2, 3]})\ndf["b"] = df["a"] * 10\nprint(df["b"].tolist())`, ['[10, 20, 30]', '[1, 2, 3]', '[10]', '60'], 'L’operazione si applica a tutta la colonna e ne crea una nuova.'),
        out(`import pandas as pd\ndf = pd.DataFrame({"negozio": ["A", "B", "A", "B"], "totale": [10, 5, 20, 1]})\nr = df.groupby("negozio")["totale"].sum()\nprint(r["A"], r["B"])`, ['30 6', '10 5', '15 3', '36'], '`groupby` raggruppa le righe per negozio e `sum` somma ogni gruppo: A = 10 + 20 e B = 5 + 1.'),
      ],
    },
    // ───────────── Giorno 25 ─────────────
    {
      id: 'py-apis',
      t: 'Usare le API',
      d: 'Chiedere dati ad altri servizi via HTTP con requests: metodi, codici di stato, JSON ed errori.',
      guide: [
        { h: 'Che cos’è un’API?', p: [
          'Un’API è un contratto che permette a due programmi di comunicare. Le API web ricevono richieste HTTP su un URL e rispondono con dati, quasi sempre in JSON.',
          'È così che il tuo programma ottiene il meteo, i cambi, le mappe o le traduzioni senza copiare nulla a mano.' ] },
        { h: 'Metodi e codici di stato', p: [
          'Il metodo indica l’azione: GET legge, POST crea, PUT o PATCH aggiornano e DELETE elimina.',
          'Il codice di stato riassume il risultato: 200 OK, 201 creato, 400 richiesta errata, 401 non autorizzato, 404 non trovato e 500 errore del server.' ],
          code: `import requests\n\nr = requests.get("https://api.github.com/users/octocat", timeout=10)\nprint(r.status_code)              # 200\nprint(r.headers["Content-Type"])  # application/json; charset=utf-8` },
        { h: 'Parametri, intestazioni e JSON', p: [
          'I parametri di ricerca si passano con `params` e requests costruisce l’URL per te. Molte API chiedono una chiave nelle intestazioni, con `headers`.',
          '`r.json()` trasforma la risposta in dizionari e liste di Python.' ],
          code: `import requests\n\nr = requests.get(\n    "https://api.github.com/search/repositories",\n    params={"q": "language:python", "sort": "stars", "per_page": 3},\n    timeout=10,\n)\nfor repo in r.json()["items"]:\n    print(repo["full_name"], repo["stargazers_count"])` },
        { h: 'Errori e limiti', p: [
          'Le richieste di rete possono fallire: il server non risponde, restituisce un errore o ti limita perché fai troppe richieste (codice 429).',
          '`raise_for_status()` solleva un’eccezione se il codice è di errore, e `try/except` ti permette di reagire senza fermare il programma.' ],
          code: `import requests\n\ntry:\n    r = requests.get("https://api.github.com/users/non-esiste-12345", timeout=10)\n    r.raise_for_status()\nexcept requests.HTTPError as e:\n    print("Errore HTTP:", e.response.status_code)  # Errore HTTP: 404\nexcept requests.RequestException:\n    print("Impossibile connettersi")` },
        { h: 'Esempio reale: il meteo di domani', real: true, p: [
          'Open-Meteo è un’API meteo gratuita che non richiede chiave. Con poche righe ottieni le previsioni di qualsiasi città a partire dalle coordinate.' ],
          code: `import requests\n\nr = requests.get(\n    "https://api.open-meteo.com/v1/forecast",\n    params={"latitude": 41.90, "longitude": 12.50,\n            "daily": "temperature_2m_max,temperature_2m_min", "timezone": "auto"},\n    timeout=10,\n)\nr.raise_for_status()\nd = r.json()["daily"]\nprint(f"Domani a Roma: da {d['temperature_2m_min'][1]} a {d['temperature_2m_max'][1]} °C")` },
      ],
      x: [
        mc('Quale metodo HTTP si usa per leggere dati?', ['GET', 'POST', 'DELETE', 'PUT'], 'GET chiede una risorsa senza modificarla.'),
        mc('Che cosa significa il codice di stato 404?', ['Risorsa non trovata', 'Tutto corretto', 'Errore del server', 'Creato'], 'I codici 4xx sono errori del client.'),
        mc('Quale metodo HTTP crea una nuova risorsa?', ['POST', 'GET', 'HEAD', 'OPTIONS'], 'POST invia dati al server per creare qualcosa.'),
        fill(`r = requests.get(url, timeout=10)\ndati = r.___()`, ['json', 'text', 'parse', 'dict'], '`.json()` trasforma il corpo JSON della risposta in dizionari e liste.'),
        mc('Quale codice restituisce di solito un’API quando crea una risorsa?', ['201', '200', '204', '301'], '201 Created indica che è stato creato qualcosa di nuovo.'),
        mc('Quale formato di dati usano quasi tutte le API REST?', ['JSON', 'CSV', 'Testo semplice', 'Binario'], 'JSON è leggero e facile da leggere da qualsiasi linguaggio.'),
        out(`import requests\nr = requests.get(\n    "https://example.com/cerca",\n    params={"q": "python", "page": 2},\n)\nprint(r.url)`, ['https://example.com/cerca?q=python&page=2', 'https://example.com/cerca', 'https://example.com/cerca?python&2', 'Errore'], 'requests aggiunge i parametri all’URL e li codifica per te.'),
        mc('Un’API risponde con il codice 429. Che cosa dovresti fare?', ['Aspettare e riprovare con meno richieste: hai superato il limite', 'Ripetere subito la richiesta in un ciclo', 'Cambiare GET con POST', 'Niente: 429 significa che è andato tutto bene'], '429 Too Many Requests indica che hai superato il limite. Molte API dicono quanto aspettare nell’intestazione Retry-After.'),
      ],
    },
    // ───────────── Giorno 26 ─────────────
    {
      id: 'py-scraping',
      t: 'Estrarre dati dal web',
      d: 'Scaricare pagine ed estrarre dati dall’HTML con BeautifulSoup, senza sovraccaricare il sito.',
      guide: [
        { h: 'Che cos’è il web scraping?', p: [
          'Il web scraping consiste nello scaricare pagine web ed estrarre dal loro HTML i dati che ti interessano: prezzi, titoli, orari...',
          'Si usa quando un sito non offre un’API. Se esiste un’API, usala: è più stabile e pensata per i programmi.' ] },
        { h: 'Scaricare l’HTML con requests', p: [
          '`requests.get(url)` scarica la pagina. `status_code` indica se è andata bene (200) e `.text` contiene l’HTML.',
          'Indica sempre un `timeout`, così il programma non resta in attesa per sempre se il server non risponde.' ],
          code: `import requests\n\nr = requests.get("https://example.com", timeout=10)\nprint(r.status_code)  # 200\nprint(r.text[:15])    # <!doctype html>` },
        { h: 'Analizzare l’HTML con BeautifulSoup', p: [
          'BeautifulSoup (`pip install beautifulsoup4`) trasforma l’HTML in un albero che puoi percorrere. `find()` restituisce il primo elemento, `find_all()` tutti e `select()` accetta selettori CSS.',
          '`.text` o `.get_text(strip=True)` danno il testo, ed `elemento["href"]` legge un attributo.' ],
          code: `from bs4 import BeautifulSoup\n\nhtml = """<ul>\n  <li class="p">Caffè <span>1.80</span></li>\n  <li class="p">Tè <span>1.50</span></li>\n</ul>"""\nsoup = BeautifulSoup(html, "html.parser")\nfor li in soup.select("li.p"):\n    nome = li.contents[0].strip()\n    prezzo = float(li.span.text)\n    print(nome, prezzo)\n# Caffè 1.8\n# Tè 1.5` },
        { h: 'Farlo in modo responsabile', p: [
          'Controlla il file `robots.txt` e le condizioni d’uso del sito, non raccogliere dati personali e aspetta tra una richiesta e l’altra con `time.sleep(1)` per non sovraccaricare il server.',
          'Le pagine cambiano: se cambia l’HTML, il tuo scraper smette di funzionare. Controlla che `find()` non abbia restituito `None` prima di usare il risultato.' ] },
        { h: 'Esempio reale: i titoli di un sito di notizie', real: true, p: [
          'Uno script che legge i primi cinque titoli di Hacker News con i loro link. È la base di qualsiasi rassegna stampa automatica.' ],
          code: `import time\nimport requests\nfrom bs4 import BeautifulSoup\n\nurl = "https://news.ycombinator.com/"\nr = requests.get(url, timeout=10, headers={"User-Agent": "corso-sintaxis/1.0"})\nsoup = BeautifulSoup(r.text, "html.parser")\n\nfor link in soup.select(".titleline > a")[:5]:\n    print("-", link.get_text(strip=True))\n    print("  ", link["href"])\ntime.sleep(1)  # pausa prima della richiesta successiva` },
      ],
      x: [
        mc('Quale libreria si usa di solito per analizzare l’HTML in Python?', ['BeautifulSoup', 'NumPy', 'Flask', 'Pygame'], 'BeautifulSoup trasforma l’HTML in un albero facile da percorrere.'),
        mc('Che cosa restituisce `requests.get(url).text`?', ['Il contenuto della risposta come testo', 'Un oggetto BeautifulSoup', 'Il codice di stato', 'Una lista di link'], '`.status_code` darebbe il codice HTTP, come 200.'),
        fill(`soup = BeautifulSoup(html, "html.parser")\ntitoli = soup.___("h2")  # tutti gli h2`, ['find_all', 'find', 'get', 'select_one'], '`find_all` restituisce tutti gli elementi; `find` solo il primo.'),
        out(`from bs4 import BeautifulSoup\nsoup = BeautifulSoup("<p>Ciao</p>", "html.parser")\nprint(soup.p.text)`, ['Ciao', '<p>Ciao</p>', 'p', 'None'], '`.text` estrae il testo senza i tag.'),
        mc('Come ottieni l’URL di un link `a` con BeautifulSoup?', ['link["href"]', 'link.url', 'link.text', 'link.link()'], 'Gli attributi HTML si leggono come le chiavi di un dizionario.'),
        mc('Quale file indica quali parti di un sito si possono esplorare?', ['robots.txt', 'sitemap.css', 'index.html', '.htaccess'], 'Rispettare robots.txt fa parte di uno scraping responsabile.'),
        out(`from bs4 import BeautifulSoup\nhtml = '<a href="/a">A</a><a href="/b">B</a>'\nsoup = BeautifulSoup(html, "html.parser")\nprint([a["href"] for a in soup.find_all("a")])`, ["['/a', '/b']", "['A', 'B']", '/a', "['/a']"], '`find_all` restituisce tutti i link e `a["href"]` legge l’attributo di ciascuno.'),
        out(`from bs4 import BeautifulSoup\nhtml = "<div><p>Ciao</p></div>"\nsoup = BeautifulSoup(html, "html.parser")\nprint(soup.find("span") is None, soup.div.p.text)`, ['True Ciao', 'False Ciao', 'None Ciao', 'Errore'], '`find` restituisce `None` se non ci sono corrispondenze (non c’è nessuno span). `soup.div.p` scende fino al paragrafo dentro il div.'),
      ],
    },
    // ───────────── Giorno 27 ─────────────
    {
      id: 'py-build-api',
      t: 'Creare la tua API',
      d: 'Un’API REST con Flask: rotte, JSON, codici di stato e validazione di ciò che arriva.',
      guide: [
        { h: 'Framework web in Python', p: [
          'Un framework web riceve le richieste HTTP del browser e decide cosa rispondere. In Python i più usati sono Flask (piccolo e flessibile), Django (completo, con ORM e pannello di amministrazione) e FastAPI (veloce e pensato per le API).',
          'Oggi usiamo Flask: `pip install flask`.' ] },
        { h: 'La tua prima applicazione Flask', p: [
          'Ogni rotta è associata a una funzione con il decoratore `@app.route()`. Ciò che restituisce la funzione è ciò che vede il browser.',
          'Avvia il server di sviluppo con `flask --app app run --debug` e apri http://127.0.0.1:5000 nel browser.' ],
          code: `# app.py\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef home():\n    return "<h1>Ciao da Flask</h1>"\n\n@app.route("/ciao/<nome>")\ndef ciao(nome):\n    return f"Ciao, {nome}"` },
        { h: 'Leggere e creare risorse', p: [
          '`GET /compiti` li elenca tutti e `GET /compiti/<id>` ne restituisce uno. `POST /compiti` ne crea uno nuovo con il JSON del corpo, che leggi con `request.get_json()`.',
          'Restituisci il codice giusto: 201 quando crei e 404 se la risorsa non esiste.' ],
          code: `from flask import Flask, jsonify, request, abort\n\napp = Flask(__name__)\ncompiti = [{"id": 1, "titolo": "Imparare Flask", "fatto": False}]\n\n@app.get("/compiti")\ndef elenca():\n    return jsonify(compiti)\n\n@app.get("/compiti/<int:id>")\ndef mostra(id):\n    compito = next((c for c in compiti if c["id"] == id), None)\n    if compito is None:\n        abort(404)\n    return jsonify(compito)\n\n@app.post("/compiti")\ndef crea():\n    dati = request.get_json()\n    compito = {"id": len(compiti) + 1, "titolo": dati["titolo"], "fatto": False}\n    compiti.append(compito)\n    return jsonify(compito), 201` },
        { h: 'Aggiornare, eliminare e validare', p: [
          '`PUT` o `PATCH` aggiornano e `DELETE` elimina. Valida sempre ciò che arriva: se manca un campo, rispondi 400 con un messaggio chiaro invece di lasciare che il server fallisca con un 500.' ],
          code: `@app.delete("/compiti/<int:id>")\ndef elimina(id):\n    global compiti\n    compiti = [c for c in compiti if c["id"] != id]\n    return "", 204\n\n@app.post("/note")\ndef crea_nota():\n    dati = request.get_json(silent=True) or {}\n    if "testo" not in dati:\n        return jsonify(errore="Manca il campo testo"), 400\n    return jsonify(testo=dati["testo"]), 201` },
        { h: 'Provare l’API', p: [
          'Puoi provarla con `curl` dal terminale, con strumenti come Postman o con il client di test di Flask, che non ha bisogno di avviare il server.',
          'FastAPI è un’alternativa moderna: valida i dati con le annotazioni di tipo e genera documentazione interattiva su `/docs`.' ],
          code: `# nel terminale\ncurl -X POST http://127.0.0.1:5000/compiti \\\n     -H "Content-Type: application/json" \\\n     -d '{"titolo": "Ripassare"}'\n\n# in un test\nwith app.test_client() as c:\n    r = c.post("/compiti", json={"titolo": "Ripassare"})\n    print(r.status_code)  # 201` },
        { h: 'Esempio reale: un accorciatore di link', real: true, p: [
          'Un piccolo servizio in stile bit.ly: riceve un URL lungo, genera un codice corto e reindirizza chi visita quel codice.' ],
          code: `import secrets\nfrom flask import Flask, jsonify, request, redirect, abort\n\napp = Flask(__name__)\nlink = {}\n\n@app.post("/accorcia")\ndef accorcia():\n    url = (request.get_json(silent=True) or {}).get("url")\n    if not url or not url.startswith("http"):\n        return jsonify(errore="URL non valido"), 400\n    codice = secrets.token_urlsafe(4)\n    link[codice] = url\n    return jsonify(corto=f"{request.host_url}{codice}"), 201\n\n@app.get("/<codice>")\ndef vai(codice):\n    if codice not in link:\n        abort(404)\n    return redirect(link[codice])` },
      ],
      x: [
        mc('Che cos’è Flask?', ['Un microframework per creare applicazioni web', 'Un database', 'Un editor di codice', 'Un gestore di pacchetti'], 'Flask è leggero e si amplia con le estensioni.'),
        fill(`@app.___("/")\ndef home():\n    return "Ciao"`, ['route', 'get_route', 'path', 'url'], '`@app.route` associa un URL alla funzione.'),
        mc('Con la rotta `/ciao/<nome>`, quale valore riceve `nome` visitando `/ciao/Ana`?', ['"Ana"', '"<nome>"', '"ciao"', 'None'], 'Le parti tra `< >` sono variabili dell’URL.'),
        fill(`from flask import Flask, ___\n\napp = Flask(__name__)\n\n@app.route("/api")\ndef api():\n    return jsonify({"ok": True})`, ['jsonify', 'json', 'dumps', 'JSON'], '`jsonify` crea una risposta HTTP con contenuto JSON.'),
        mc('Come leggi il JSON inviato in una richiesta POST con Flask?', ['request.get_json()', 'request.body', 'request.json_read()', 'input()'], 'Restituisce il corpo già trasformato in dizionario.'),
        mc('In `return jsonify(compito), 201`, che cos’è il 201?', ['Il codice di stato HTTP della risposta', 'L’id del compito', 'La porta del server', 'La dimensione della risposta'], '201 indica che la risorsa è stata creata.'),
        mc('Arriva un POST senza il campo obbligatorio "titolo". Che cosa dovresti rispondere?', ['400 con un messaggio che spiega cosa manca', '500 Errore del server', '200 con un oggetto vuoto', '404 Non trovato'], '400 Bad Request indica che la richiesta del client è sbagliata, e il messaggio lo aiuta a correggerla.'),
        out(`from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.get("/compiti/<int:id>")\ndef mostra(id):\n    if id > 3:\n        return jsonify(errore="Non trovato"), 404\n    return jsonify(id=id)\n\nwith app.test_client() as c:\n    r = c.get("/compiti/7")\n    print(r.status_code, r.get_json()["errore"])`, ['404 Non trovato', '200 Non trovato', '404 None', '500 Errore'], '7 è maggiore di 3, quindi la rotta restituisce il JSON di errore con il codice 404, e `get_json()` lo trasforma in dizionario.'),
      ],
    },
    // ───────────── Giorno 28 ─────────────
    {
      id: 'py-sqlite',
      t: 'Database con SQLite',
      d: 'Salvare dati in un vero database con sqlite3: tabelle, INSERT, SELECT, parametri sicuri e transazioni.',
      guide: [
        { h: 'Perché un database?', p: [
          'Un CSV o un JSON vanno bene con pochi dati. Quando ci sono migliaia di righe, più persone che scrivono insieme o domande come «quanto ha speso ogni cliente?», un database è più veloce e più sicuro.',
          'SQLite tiene tutto il database in un solo file ed è incluso in Python con il modulo `sqlite3`: non c’è niente da installare. Lo usano i telefoni, i browser e tantissime applicazioni.',
          'Le query si scrivono in SQL, un linguaggio pensato per i dati. Le basi si imparano in un pomeriggio e funzionano allo stesso modo in PostgreSQL o MySQL.' ] },
        { h: 'Connettersi e creare una tabella', p: [
          '`connect()` apre il file (o lo crea) e `":memory:"` crea un database temporaneo che sparisce alla chiusura, perfetto per i test.',
          'Una tabella definisce colonne con il loro tipo. `INTEGER PRIMARY KEY` numera ogni riga da sola e `NOT NULL` impedisce di lasciare vuoto quel dato.' ],
          code: `import sqlite3\n\ncon = sqlite3.connect("negozio.db")  # ":memory:" per un database temporaneo\ncon.execute("""\n    CREATE TABLE IF NOT EXISTS prodotti (\n        id INTEGER PRIMARY KEY,\n        nome TEXT NOT NULL,\n        prezzo REAL NOT NULL\n    )\n""")` },
        { h: 'Inserire con i parametri', p: [
          'I valori vanno nella query come `?` e si passano a parte in una tupla. Non inserire mai i dati dell’utente con una f-string: qualcuno potrebbe scrivere SQL che cambia la query (SQL injection).',
          '`executemany()` inserisce molte righe in una volta. Le modifiche non si salvano fino a `commit()`.' ],
          code: `con.execute("INSERT INTO prodotti (nome, prezzo) VALUES (?, ?)", ("Semi", 4.5))\ncon.executemany(\n    "INSERT INTO prodotti (nome, prezzo) VALUES (?, ?)",\n    [("Fieno", 7.25), ("Carota", 1.25)],\n)\ncon.commit()` },
        { h: 'Interrogare', p: [
          '`SELECT` sceglie le colonne, `WHERE` filtra e `ORDER BY` ordina. Scorrere il risultato dà una tupla per riga.',
          '`fetchone()` restituisce solo la prima riga, comodo per conti come `COUNT(*)` o `SUM()`.' ],
          code: `query = "SELECT nome, prezzo FROM prodotti WHERE prezzo > ? ORDER BY prezzo"\nfor nome, prezzo in con.execute(query, (2,)):\n    print(nome, prezzo)\n# Semi 4.5\n# Fieno 7.25\nprint(con.execute("SELECT COUNT(*), SUM(prezzo) FROM prodotti").fetchone())  # (3, 13.0)` },
        { h: 'Transazioni con with', p: [
          'Usare la connessione con `with` raggruppa le modifiche in una transazione: se va tutto bene si salvano, e se c’è un errore si annullano tutte. Così un’operazione non resta mai a metà.' ],
          code: `with con:  # commit se va tutto bene, rollback se c'è un errore\n    con.execute("UPDATE prodotti SET prezzo = prezzo * 0.9 WHERE nome = ?", ("Fieno",))\ncon.close()` },
        { h: 'Esempio reale: quanto spende ogni cliente', real: true, p: [
          '`GROUP BY` riunisce le righe di ogni cliente e `SUM()` ne somma gli importi. Quello che in Python sarebbe un ciclo con un dizionario in SQL è una riga, e funziona allo stesso modo con un milione di ordini.' ],
          code: `import sqlite3\n\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE ordini (cliente TEXT, importo REAL)")\nwith con:\n    con.executemany(\n        "INSERT INTO ordini VALUES (?, ?)",\n        [("Ana", 12.5), ("Leo", 4.0), ("Ana", 7.5)],\n    )\nquery = "SELECT cliente, SUM(importo) FROM ordini GROUP BY cliente ORDER BY 2 DESC"\nfor cliente, totale in con.execute(query):\n    print(f"{cliente}: {totale:.2f} €")\n# Ana: 20.00 €\n# Leo: 4.00 €` },
      ],
      x: [
        mc('Quale modulo porta SQLite con Python, senza installare niente?', ['sqlite3', 'pymongo', 'sqlalchemy', 'sqlite'], 'Il modulo `sqlite3` fa parte della libreria standard.'),
        mc('Che cosa fa `con.commit()`?', ['Salva in modo definitivo le modifiche in sospeso', 'Chiude la connessione', 'Annulla le ultime modifiche', 'Crea il database'], 'Fino al `commit()`, le modifiche fanno parte di una transazione aperta e non sono salvate.'),
        fill(`con.execute("INSERT INTO prodotti (nome, prezzo) VALUES (___, ?)", ("Semi", 4.5))`, ['?', '%s', '{}', '$1'], 'In `sqlite3` ogni valore si indica con `?` e si passa a parte. `%s` e `$1` sono di altri connettori.'),
        mc('Perché non bisogna mettere nella query il testo scritto dall’utente con una f-string?', ['Perché permette una SQL injection: l’utente potrebbe cambiare la query', 'Perché le f-string non funzionano con SQLite', 'Perché la query è più lenta', 'Perché SQLite non accetta testo'], 'Con `?`, SQLite tratta sempre il dato come un valore e mai come parte dell’SQL.'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE t (n INTEGER)")\ncon.executemany("INSERT INTO t VALUES (?)", [(1,), (2,), (3,)])\nprint(con.execute("SELECT SUM(n) FROM t").fetchone())`, ['(6,)', '6', '[6]', '(1, 2, 3)'], '`fetchone()` restituisce una riga come tupla, anche se ha una sola colonna.'),
        typ('Completa la query che legge tutte le colonne della tabella prodotti', `SELECT ___ FROM prodotti`, '*', 'L’asterisco significa «tutte le colonne».'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE p (nome TEXT, prezzo REAL)")\ncon.executemany("INSERT INTO p VALUES (?, ?)", [("a", 3.0), ("b", 1.0), ("c", 2.0)])\nprint([n for (n,) in con.execute("SELECT nome FROM p ORDER BY prezzo")])`, ["['b', 'c', 'a']", "['a', 'b', 'c']", "['a', 'c', 'b']", "[('b',), ('c',), ('a',)]"], '`ORDER BY prezzo` ordina dal più economico al più caro, e `(n,)` spacchetta la tupla di ogni riga.'),
        out(`import sqlite3\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE ordini (cliente TEXT, importo REAL)")\ntry:\n    with con:\n        con.execute("INSERT INTO ordini VALUES (?, ?)", ("Ana", 10.0))\n        con.execute("INSERT INTO ordini VALUES (?, ?, ?)", ("Leo", 5.0, 1))\nexcept sqlite3.OperationalError:\n    pass\nprint(con.execute("SELECT COUNT(*) FROM ordini").fetchone()[0])`, ['0', '1', '2', 'OperationalError'], 'Il secondo inserimento passa 3 valori a una tabella di 2 colonne e fallisce. `with con` annulla tutta la transazione, anche il primo inserimento.'),
      ],
    },
    // ───────────── Giorno 29 ─────────────
    {
      id: 'py-pytest',
      t: 'Testare il codice con pytest',
      d: 'Scrivere test automatici con assert e pytest: casi normali, casi limite, eccezioni e fixture.',
      guide: [
        { h: 'Perché scrivere test?', p: [
          'Un test è codice che controlla che un altro codice faccia ciò che deve. Si esegue in un secondo ogni volta che cambi qualcosa e ti avvisa se hai rotto qualcosa che funzionava.',
          '`assert` controlla una condizione: se è vera non succede nulla e, se è falsa, solleva `AssertionError`. È il mattone di base di qualsiasi test.' ],
          code: `def prezzo_con_iva(prezzo):\n    return round(prezzo * 1.21, 2)\n\nassert prezzo_con_iva(100) == 121.0\nassert prezzo_con_iva(0) == 0\nprint("Tutto corretto")  # Tutto corretto` },
        { h: 'Il tuo primo test con pytest', p: [
          'Installa pytest con `pip install pytest` nell’ambiente del progetto. Cerca solo i file `test_*.py` e, al loro interno, le funzioni che iniziano con `test_`.',
          'Eseguilo con `pytest` nella cartella del progetto. Mostra un punto per ogni test superato e una `F` per ogni fallimento, con il valore atteso e quello ottenuto.' ],
          code: `# test_prezzi.py\nfrom prezzi import prezzo_con_iva\n\ndef test_prezzo_normale():\n    assert prezzo_con_iva(100) == 121.0\n\ndef test_prezzo_zero():\n    assert prezzo_con_iva(0) == 0` },
        { h: 'Casi limite ed eccezioni', p: [
          'Gli errori amano nascondersi ai bordi: lo zero, i negativi, una lista vuota. Provali di proposito.',
          '`pytest.raises` controlla che venga sollevata un’eccezione. I decimali non sono esatti, quindi si confrontano con `pytest.approx`.' ],
          code: `import pytest\nfrom prezzi import prezzo_con_iva\n\ndef test_prezzo_negativo():\n    with pytest.raises(ValueError):\n        prezzo_con_iva(-5)  # la funzione deve sollevare ValueError\n\ndef test_decimali():\n    assert 0.1 + 0.2 == pytest.approx(0.3)` },
        { h: 'Molti casi con parametrize', p: [
          'Invece di copiare lo stesso test con altri numeri, `@pytest.mark.parametrize` lo esegue una volta per ogni caso della lista e, se uno fallisce, ti dice quale.' ],
          code: `import pytest\nfrom prezzi import prezzo_con_iva\n\n@pytest.mark.parametrize("prezzo, atteso", [(100, 121.0), (10, 12.1), (0, 0)])\ndef test_prezzo_con_iva(prezzo, atteso):\n    assert prezzo_con_iva(prezzo) == atteso` },
        { h: 'Esempio reale: testare il database del negozio', real: true, p: [
          'Una fixture prepara ciò che serve ai test. pytest la esegue prima di ogni test che la chiede indicandola come parametro.',
          'Qui ogni test riceve un database vuoto in memoria, così nessuno dipende da un altro né tocca i dati veri. Quello che viene dopo `yield` si esegue alla fine, per fare pulizia.' ],
          code: `import sqlite3\nimport pytest\n\n@pytest.fixture\ndef con():\n    con = sqlite3.connect(":memory:")\n    con.execute("CREATE TABLE prodotti (nome TEXT, prezzo REAL)")\n    yield con\n    con.close()\n\ndef test_inserire(con):\n    con.execute("INSERT INTO prodotti VALUES (?, ?)", ("Semi", 4.5))\n    assert con.execute("SELECT COUNT(*) FROM prodotti").fetchone()[0] == 1\n\ndef test_inizia_vuoto(con):\n    assert con.execute("SELECT COUNT(*) FROM prodotti").fetchone()[0] == 0` },
      ],
      x: [
        mc('Che cosa succede con `assert prezzo_con_iva(100) == 121.0` se la funzione restituisce 120?', ['Solleva AssertionError', 'Stampa False e continua', 'Restituisce 120', 'Niente'], 'Se la condizione di `assert` è falsa, viene sollevata `AssertionError`; pytest la mostra come test fallito.'),
        mc('Come trova pytest i test?', ['Cerca i file test_*.py e le funzioni che iniziano con test_', 'Esegue tutte le funzioni del progetto', 'Legge un elenco in requirements.txt', 'Esegue solo main.py'], 'pytest segue una convenzione sui nomi: file `test_*.py` e funzioni `test_*`.'),
        out(`def doppio(n):\n    return n * 2\n\ntry:\n    assert doppio(3) == 5\n    print("ok")\nexcept AssertionError:\n    print("fallito")`, ['fallito', 'ok', '6', 'AssertionError'], '`doppio(3)` vale 6, non 5: l’`assert` solleva `AssertionError` prima di arrivare al `print("ok")`.'),
        fill(`import pytest\n\ndef test_divisione():\n    with pytest.___(ZeroDivisionError):\n        1 / 0`, ['raises', 'catch', 'expect', 'error'], '`pytest.raises` fa passare il test solo se dentro il blocco viene sollevata quell’eccezione.'),
        mc('Perché `assert 0.1 + 0.2 == 0.3` fallisce?', ['Perché i numeri in virgola mobile non sono esatti: la somma dà 0.30000000000000004', 'Perché assert non accetta le somme', 'Perché 0.3 è un testo', 'Perché bisogna usare is invece di =='], 'I `float` si salvano in binario con un piccolo errore. Per confrontarli si usa `pytest.approx` o `math.isclose`.'),
        typ('Scrivi il decoratore che trasforma la funzione in una fixture', `import pytest\n\n@pytest.___\ndef carrello():\n    return []`, 'fixture', '`@pytest.fixture` marca la funzione; i test la ricevono indicando `carrello` come parametro.'),
        out(`import math\nprint(0.1 + 0.2 == 0.3, math.isclose(0.1 + 0.2, 0.3))`, ['False True', 'True True', 'False False', 'True False'], '`==` confronta il valore esatto, che non coincide. `math.isclose` accetta una differenza minima, come `pytest.approx`.'),
        out(`def sconto(totale):\n    if totale < 0:\n        raise ValueError("totale negativo")\n    return totale * 0.1 if totale >= 50 else 0\n\ncasi = [(100, 10.0), (49, 0), (50, 0), (-1, None)]\nfallimenti = 0\nfor totale, atteso in casi:\n    try:\n        if sconto(totale) != atteso:\n            fallimenti += 1\n    except ValueError:\n        pass\nprint(fallimenti)`, ['1', '0', '2', 'ValueError'], 'Fallisce solo il caso (50, 0): da 50 c’è già lo sconto e la funzione dà 5.0. -1 solleva `ValueError`, che viene catturata e non conta come fallimento.'),
      ],
    },
    // ───────────── Giorno 30 ─────────────
    {
      id: 'py-workshop-shop',
      t: 'Il laboratorio di Kibi: il negozio completo',
      d: 'Progetto finale: il negozio di Kibi con dataclass, un database SQLite, un’API con Flask e test con pytest.',
      guide: [
        { h: 'L’incarico', p: [
          'Quattro settimane dopo, il negozio di Kibi ha bisogno di qualcosa di serio: un catalogo salvato in un database e un’API perché un sito o un’app possano consultare i prodotti e fare ordini.',
          'Mettiamo insieme l’ultima settimana con tutto quello che c’era prima. Ogni file ha un solo compito, così si capisce meglio e si può testare pezzo per pezzo.' ],
          code: `negozio/\n├── .venv/\n├── requirements.txt   # flask, pytest\n├── modello.py         # la classe Prodotto\n├── dati.py            # funzioni che parlano con SQLite\n├── api.py             # rotte di Flask\n└── test_negozio.py    # test` },
        { h: 'Passo 1: il modello', p: [
          'Una dataclass descrive un prodotto. Il metodo `disponibile()` contiene la regola di business: si può ordinare una quantità positiva che non superi le scorte.' ],
          code: `# modello.py\nfrom dataclasses import dataclass\n\n@dataclass\nclass Prodotto:\n    nome: str\n    prezzo: float\n    scorte: int = 0\n\n    def disponibile(self, quantita):\n        return 0 < quantita <= self.scorte` },
        { h: 'Passo 2: i dati in SQLite', p: [
          '`dati.py` è l’unico file che conosce l’SQL. Se un giorno cambi database, tocchi solo questo file.',
          '`INSERT OR REPLACE` aggiorna il prodotto se ne esisteva già uno con lo stesso nome, perché il nome è la chiave primaria.' ],
          code: `# dati.py\nimport sqlite3\nfrom modello import Prodotto\n\ndef connetti(percorso="negozio.db"):\n    con = sqlite3.connect(percorso)\n    con.execute("CREATE TABLE IF NOT EXISTS prodotti (nome TEXT PRIMARY KEY, prezzo REAL, scorte INTEGER)")\n    return con\n\ndef salva(con, p):\n    with con:\n        con.execute("INSERT OR REPLACE INTO prodotti VALUES (?, ?, ?)", (p.nome, p.prezzo, p.scorte))\n\ndef cerca(con, nome):\n    riga = con.execute("SELECT nome, prezzo, scorte FROM prodotti WHERE nome = ?", (nome,)).fetchone()\n    return Prodotto(*riga) if riga else None` },
        { h: 'Passo 3: l’API', p: [
          'Due rotte: una per vedere un prodotto e una per ordinarlo. Ogni risposta ha il suo codice di stato: 404 se non esiste, 400 se non ci sono scorte e 201 se l’ordine viene creato.',
          'Ti resta un miglioramento: togliere dalle scorte la quantità ordinata e salvarla con `salva()`.' ],
          code: `# api.py\nfrom flask import Flask, jsonify, request\nfrom dati import connetti, cerca\n\napp = Flask(__name__)\n\n@app.get("/prodotti/<nome>")\ndef mostra(nome):\n    p = cerca(connetti(), nome)\n    if p is None:\n        return jsonify(errore="Non esiste"), 404\n    return jsonify(nome=p.nome, prezzo=p.prezzo, scorte=p.scorte)\n\n@app.post("/ordini")\ndef ordina():\n    corpo = request.get_json()\n    p = cerca(connetti(), corpo.get("prodotto", ""))\n    if p is None or not p.disponibile(corpo.get("quantita", 0)):\n        return jsonify(errore="Scorte esaurite"), 400\n    return jsonify(totale=round(p.prezzo * corpo["quantita"], 2)), 201` },
        { h: 'Esempio reale: testare il negozio prima di aprirlo', real: true, p: [
          'I test usano un database in memoria, così si possono eseguire mille volte senza toccare `negozio.db`. Con `pytest` nel terminale sai in un secondo se il negozio funziona ancora dopo ogni modifica.' ],
          code: `# test_negozio.py\nimport pytest\nfrom modello import Prodotto\nfrom dati import connetti, salva, cerca\n\n@pytest.fixture\ndef con():\n    return connetti(":memory:")\n\ndef test_salva_e_cerca(con):\n    salva(con, Prodotto("Semi", 4.5, 10))\n    assert cerca(con, "Semi") == Prodotto("Semi", 4.5, 10)\n\ndef test_non_esiste(con):\n    assert cerca(con, "Kiwi") is None\n\ndef test_senza_scorte():\n    assert not Prodotto("Fieno", 7.25, 2).disponibile(3)` },
        { h: 'Come continuare', p: [
          'In quattro settimane hai fatto tutta la strada da `print("Ciao, mondo")` a un’applicazione con modello, database, API e test. È la stessa struttura di molti progetti professionali, solo più piccola.',
          'Prossimi passi: metti il progetto su Git, usa un formattatore come `ruff` o `black`, aggiungi una pagina web che chiami l’API e pubblicala su un servizio di hosting. Scegli un tuo problema e risolvilo con ciò che sai: è il modo più veloce per continuare a imparare.' ] },
      ],
      x: [
        mc('Perché il negozio separa modello.py, dati.py e api.py?', ['Perché ogni file abbia un solo compito e si possa testare da solo', 'Perché Python non accetta file lunghi', 'Perché il programma sia più veloce', 'Perché lo richiede Flask'], 'Separare le responsabilità rende il codice più facile da capire, cambiare e testare.'),
        out(`from dataclasses import dataclass\n\n@dataclass\nclass Prodotto:\n    nome: str\n    prezzo: float\n    scorte: int = 0\n\n    def disponibile(self, quantita):\n        return 0 < quantita <= self.scorte\n\np = Prodotto("Semi", 4.5, 3)\nprint(p.disponibile(3), p.disponibile(0), p.disponibile(4))`, ['True False False', 'True True False', 'False False False', 'True False True'], '3 rientra nelle scorte; 0 non è una quantità positiva e 4 supera le scorte.'),
        fill(`con.execute("SELECT prezzo FROM prodotti WHERE nome = ?", (___,))`, ['nome', '"nome"', 'f"{nome}"', '*nome'], 'Il valore va in una tupla a parte. `"nome"` cercherebbe letteralmente la parola «nome».'),
        mc('L’API risponde `404` a `GET /prodotti/Kiwi`. Che cosa significa?', ['Che non esiste nessun prodotto chiamato Kiwi', 'Che il server è caduto', 'Che manca il corpo JSON', 'Che l’ordine è stato creato'], '404 significa «non trovato». Un server caduto darebbe un errore 5xx.'),
        out(`def totale(prezzo, quantita):\n    return round(prezzo * quantita, 2)\n\nprint(totale(4.5, 3), totale(7.25, 2))`, ['13.5 14.5', '13.50 14.50', '13 14', '7.5 9.25'], '4.5 × 3 = 13.5 e 7.25 × 2 = 14.5. `round` non aggiunge zeri finali: lo farebbe un formato come `:.2f`.'),
        mc('Che vantaggio ha la fixture che usa `connetti(":memory:")`?', ['Ogni test parte con un database vuoto e non tocca quello vero', 'I test si salvano in negozio.db', 'Non serve creare la tabella', 'Il database è condiviso da tutti i test'], 'Un database nuovo in memoria per ogni test rende i test indipendenti e ripetibili.'),
        typ('Scrivi il codice di stato che restituisce l’API quando crea un ordine', `return jsonify(totale=13.5), ___`, '201', '201 significa «creato». 200 è un «OK» generico.'),
        out(`import sqlite3\nfrom dataclasses import dataclass\n\n@dataclass\nclass Prodotto:\n    nome: str\n    prezzo: float\n    scorte: int = 0\n\ncon = sqlite3.connect(":memory:")\ncon.execute("CREATE TABLE prodotti (nome TEXT PRIMARY KEY, prezzo REAL, scorte INTEGER)")\nfor p in [Prodotto("Semi", 4.5, 10), Prodotto("Fieno", 7.25), Prodotto("Semi", 4.0, 8)]:\n    with con:\n        con.execute("INSERT OR REPLACE INTO prodotti VALUES (?, ?, ?)", (p.nome, p.prezzo, p.scorte))\nriga = con.execute("SELECT COUNT(*), SUM(scorte) FROM prodotti").fetchone()\nprint(riga, Prodotto(*con.execute("SELECT * FROM prodotti WHERE nome = 'Semi'").fetchone()))`, ["(2, 8) Prodotto(nome='Semi', prezzo=4.0, scorte=8)", "(3, 18) Prodotto(nome='Semi', prezzo=4.5, scorte=10)", "(2, 18) Prodotto(nome='Semi', prezzo=4.0, scorte=8)", 'sqlite3.IntegrityError'], 'Il secondo «Semi» sostituisce il primo perché il nome è la chiave primaria. Restano 2 prodotti: Semi con 8 di scorte e Fieno con 0.'),
      ],
    },
  ],
}))(Sintaxis);
