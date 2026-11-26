/* Nibble: generador de ejercicios de práctica.
   Crea ejercicios nuevos con valores al azar sobre los temas que el alumno ya ha visto, para que cada
   nivel tenga secciones distintas y no se repitan entre niveles. Cada ejercicio calcula su respuesta,
   así que siempre es correcta. Funciona en el navegador y en Node (scripts/check-practice.mjs).

   NibblePractice.generate(curso, día (1-30), cuántos, rnd, t) -> [ejercicio, ...]
   Los ejercicios tienen la misma forma que los de content/ (mc/out/fill/type). Los de escribir pueden
   llevar `re`: una expresión regular que acepta otras formas válidas de escribir lo mismo. */
(function (g) {
  'use strict';

  /* ---------- sintaxis de cada lenguaje ---------- */
  const LANG = {
    python: {
      show: e => `print(${e})`,
      decl: (v, x) => `${v} = ${x}`, set: (v, x) => `${v} = ${x}`, add: (v, x) => `${v} += ${x}`,
      bool: b => (b ? 'True' : 'False'), boolOpts: b => [b ? 'True' : 'False', b ? 'False' : 'True', b ? 'true' : 'false', b ? '1' : '0'],
      and: 'and', or: 'or', idiv: '//', pow: '**',
    },
    javascript: {
      show: e => `console.log(${e});`,
      decl: (v, x) => `let ${v} = ${x};`, set: (v, x) => `${v} = ${x};`, add: (v, x) => `${v} += ${x};`,
      bool: b => String(b), boolOpts: b => [String(b), String(!b), b ? 'True' : 'False', b ? '1' : '0'],
      and: '&&', or: '||', idiv: null, pow: '**',
    },
    java: {
      show: e => `System.out.println(${e});`,
      decl: (v, x) => `int ${v} = ${x};`, set: (v, x) => `${v} = ${x};`, add: (v, x) => `${v} += ${x};`,
      bool: b => String(b), boolOpts: b => [String(b), String(!b), b ? 'True' : 'False', b ? '1' : '0'],
      and: '&&', or: '||', idiv: '/', pow: null,
    },
    cpp: {
      // << tiene menos prioridad que + - * / %, pero más que las comparaciones: estas van entre paréntesis.
      show: e => `std::cout << ${e} << "\\n";`,
      decl: (v, x) => `int ${v} = ${x};`, set: (v, x) => `${v} = ${x};`, add: (v, x) => `${v} += ${x};`,
      bool: b => (b ? '1' : '0'), boolOpts: b => [b ? '1' : '0', b ? '0' : '1', String(b), String(!b)],
      and: '&&', or: '||', idiv: '/', pow: null,
    },
  };

  // Día (1-30) desde el que se usa cada familia de ejercicios, según el temario de cada curso.
  const UNLOCK = {
    python: { print: 1, arith: 1, chain: 1, strmul: 1, concat: 2, vars: 2, varw: 2, arith2: 3, cmp: 3, str: 4, list: 5, appendw: 5, cond: 9, ifw: 9, loop: 10, loopw: 10, func: 11, callw: 11 },
    javascript: { print: 1, arith: 1, chain: 1, concat: 2, vars: 2, varw: 2, str: 2, arith2: 3, cmp: 3, cond: 4, ifw: 4, list: 5, appendw: 5, loop: 6, loopw: 6, func: 7, callw: 7 },
    java: { print: 1, arith: 1, chain: 1, concat: 1, vars: 2, varw: 2, arith2: 3, cmp: 3, str: 4, list: 5, appendw: 6, cond: 9, ifw: 9, loop: 10, loopw: 10, func: 11, callw: 11 },
    cpp: { print: 1, arith: 1, chain: 1, concat: 2, vars: 2, varw: 2, arith2: 3, cmp: 3, str: 4, list: 5, appendw: 6, cond: 9, ifw: 9, loop: 10, loopw: 10, func: 11, callw: 11 },
  };

  const TEXTS = ['Kibi', 'Nibble', 'bits', 'byte', 'OK', 'Kibi 2.0', 'debug', 'code', 'A1', 'x = 5', 'loop', 'Game over', 'Level up!',
    'v1.0.3', '3 + 4', 'Error 404', 'Hi, Kibi', 'Score: 100', 'ON', 'OFF', 'Ready', 'Bot-7', 'Unit 42', '#1', '50%', 'start', 'stop', 'pause'];
  const WORDS = ['kibi', 'nibble', 'pixel', 'robot', 'laser', 'radio', 'metal', 'piano', 'delta', 'orbit'];
  const VARS = ['x', 'y', 'total', 'score', 'level', 'count', 'points', 'speed'];

  /* ---------- utilidades ---------- */
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const uniq = a => [...new Set(a.map(String))];
  // Opciones de una respuesta numérica: la correcta primero y tres errores típicos distintos.
  function numOpts(r, near = []) {
    const s = new Set([String(r)]);
    for (const x of [...near, r + 1, r - 1, r * 2, r + 10, r + 2, r - 2, r * 3]) {
      if (s.size >= 4) break;
      if (Number.isInteger(x) && x >= 0) s.add(String(x));
    }
    return [...s];
  }

  function make(course, day, rnd, t) {
    const Lg = LANG[course];
    const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
    const pick = a => a[Math.floor(rnd() * a.length)];
    const out = (c, o, e, q = '') => ({ t: 'out', q, c, o: uniq(o).slice(0, 4), e, gen: 1 });
    const fill = (c, o, e, q) => ({ t: 'fill', q, c, o: uniq(o).slice(0, 4), e, gen: 1 });
    const write = (q, a, e, re) => ({ t: 'type', q, c: '', a, e, re, line: 'code', gen: 1 });
    const trace = r => t('gen.e.trace', { r });
    // Ejercicio de "¿qué muestra?" o, a veces, de completar el hueco del operador.
    const arithLike = (exprOf, ops, cmpt) => {
      const [a, b, op] = [ri(2, 12), ri(2, 9), pick(ops)];
      const r = cmpt(a, b, op), expr = exprOf(a, b, op);
      if (rnd() < 0.4) {
        const others = ops.filter(o => o !== op && cmpt(a, b, o) !== r);
        if (others.length >= 2) return fill(Lg.show(exprOf(a, b, '___')), [op, ...others.slice(0, 3)], t('gen.e.arith', { expr, r }), t('gen.fillFor', { r }));
      }
      return out(Lg.show(course === 'cpp' ? `(${expr})` : expr), numOpts(r, [cmpt(a, b, ops.find(o => o !== op))]), t('gen.e.arith', { expr, r }));
    };
    const calc = (a, b, op) => ({ '+': a + b, '-': a - b, '*': a * b, '%': a % b, '//': Math.floor(a / b), '/': Math.floor(a / b), '**': a ** b }[op]);

    const F = {
      // Escribir la instrucción que muestra un texto.
      print() {
        const s = pick(TEXTS);
        const a = {
          python: [`print("${s}")`, `print('${s}')`],
          javascript: [`console.log("${s}");`, `console.log('${s}');`],
          java: [`System.out.println("${s}");`],
          cpp: [`std::cout << "${s}";`, `std::cout << "${s}\\n";`, `std::cout << "${s}" << "\\n";`, `std::cout << "${s}" << std::endl;`],
        }[course];
        const re = course === 'cpp' ? new RegExp(`^(std::)?cout<<"${esc(s.replace(/\s/g, ''))}(\\\\n)?"(<<("\\\\n"|(std::)?endl))?;?$`) : null;
        return write(t('gen.print', { s }), a, t('gen.e.print', { code: a[0] }), re);
      },
      // Operaciones básicas, con prioridad de * sobre + y -.
      arith() {
        if (rnd() < 0.5) return arithLike((a, b, op) => `${a} ${op} ${b}`, ['+', '-', '*'], calc);
        const [a, b, c] = [ri(1, 9), ri(2, 6), ri(2, 6)], expr = `${a} + ${b} * ${c}`, r = a + b * c;
        return out(Lg.show(course === 'cpp' ? `(${expr})` : expr), numOpts(r, [(a + b) * c]), t('gen.e.arith', { expr, r }));
      },
      // División entera, resto y potencias.
      arith2() {
        const ops = ['%', Lg.idiv, Lg.pow].filter(Boolean);
        const [a, b] = [ri(7, 30), ri(2, 5)], op = pick(ops), bb = op === '**' ? ri(2, 3) : b, aa = op === '**' ? ri(2, 5) : a;
        const r = calc(aa, bb, op), expr = `${aa} ${op} ${bb}`;
        return out(Lg.show(course === 'cpp' ? `(${expr})` : expr), numOpts(r, [op === '%' ? Math.floor(aa / bb) : aa % bb, aa * bb]), t('gen.e.arith', { expr, r }));
      },
      // Varias cosas en la misma salida.
      chain() {
        const w1 = pick(WORDS), w2 = pick(WORDS.filter(w => w !== w1)), n = ri(1, 99);
        const v = {
          python: rnd() < 0.5 ? [`print("${w1}", ${n})`, `${w1} ${n}`, [`${w1}${n}`, `"${w1}" ${n}`, `${w1}, ${n}`]]
            : [`print("${w1}", "${w2}", sep="-")`, `${w1}-${w2}`, [`${w1} ${w2}`, `${w1}${w2}`, `${w1}-${w2}-`]],
          javascript: [`console.log("${w1}", ${n});`, `${w1} ${n}`, [`${w1}${n}`, `"${w1}" ${n}`, `${w1}, ${n}`]],
          java: [`System.out.print("${w1}");\nSystem.out.println(${n});`, `${w1}${n}`, [`${w1} ${n}`, `${w1}\n${n}`, `${n}${w1}`]],
          cpp: [`std::cout << "${w1}" << ${n} << "${w2}";`, `${w1}${n}${w2}`, [`${w1} ${n} ${w2}`, `${w1}${w2}${n}`, `${w1} << ${n}`]],
        }[course];
        return out(v[0], [v[1], ...v[2]], trace(v[1]));
      },
      // Repetir texto con * (solo Python).
      strmul() {
        const [w, n] = [pick(['ja', 'ok', 'na', 'bit', 'go']), ri(2, 4)], r = w.repeat(n);
        return out(Lg.show(`"${w}" * ${n}`), [r, `${w}${n}`, `${w} * ${n}`, w.repeat(n + 1)], t('gen.e.strmul', { r }));
      },
      // + entre texto y números.
      concat() {
        const [a, b] = [ri(1, 9), ri(1, 9)];
        if (course === 'python') return out(Lg.show(`"Total:", ${a} + ${b}`), [`Total: ${a + b}`, `Total: ${a}${b}`, `Total:${a + b}`, `"Total:" ${a + b}`], trace(`Total: ${a + b}`));
        if (course === 'cpp') return out(`std::cout << "Total: " << ${a} + ${b} << "\\n";`, [`Total: ${a + b}`, `Total: ${a}${b}`, `Total: ${a} + ${b}`, `${a + b}`], trace(`Total: ${a + b}`));
        if (rnd() < 0.5) return out(Lg.show(`"Total: " + ${a} + ${b}`), [`Total: ${a}${b}`, `Total: ${a + b}`, `Total: ${a} + ${b}`, `${a}${b}`], t('gen.e.concat', { r: `Total: ${a}${b}` }));
        return out(Lg.show(`${a} + ${b} + " total"`), [`${a + b} total`, `${a}${b} total`, `${a} + ${b} total`, `total ${a + b}`], t('gen.e.concat2', { r: `${a + b} total` }));
      },
      // Seguir el valor de variables.
      vars() {
        const [v1, v2] = [pick(VARS), pick(VARS)].map((v, i, arr) => (i && v === arr[0] ? 'y' + 2 : v));
        const n1 = ri(2, 12), n2 = ri(2, 9), mode = ri(0, 2);
        const lines = [Lg.decl(v1, n1), Lg.decl(v2, n2)];
        let r;
        if (mode === 0) { lines.push(Lg.set(v1, `${v1} + ${v2}`)); r = n1 + n2; }
        else if (mode === 1) { lines.push(Lg.add(v1, n2)); lines.push(Lg.set(v2, `${v1} * 2`)); r = (n1 + n2) * 2; lines.push(Lg.show(v2)); return out(lines.join('\n'), numOpts(r, [n2 * 2, n1 * 2]), trace(r)); }
        else { lines.push(Lg.set(v2, v1)); lines.push(Lg.set(v1, n2 + 1)); r = n1; lines.push(Lg.show(v2)); return out(lines.join('\n'), numOpts(r, [n2 + 1, n2]), trace(r)); }
        lines.push(Lg.show(v1));
        return out(lines.join('\n'), numOpts(r, [n1, n2]), trace(r));
      },
      // Escribir la declaración de una variable.
      varw() {
        const v = pick(VARS), n = ri(1, 99);
        const a = {
          python: [`${v} = ${n}`],
          javascript: [`let ${v} = ${n};`, `const ${v} = ${n};`, `var ${v} = ${n};`],
          java: [`int ${v} = ${n};`, `var ${v} = ${n};`],
          cpp: [`int ${v} = ${n};`, `auto ${v} = ${n};`, `int ${v}{${n}};`, `int ${v}(${n});`],
        }[course];
        return write(t('gen.var', { v, n }), a, t('gen.e.var', { code: a[0] }));
      },
      // Comparaciones y lógica: True/False, true/false o 1/0 según el lenguaje.
      cmp() {
        const [a, b, c] = [ri(1, 20), ri(1, 20), ri(1, 20)];
        let expr, r;
        if (rnd() < 0.6) { const op = pick(['>', '<', '>=', '==', '!=']); expr = `${a} ${op} ${b}`; r = { '>': a > b, '<': a < b, '>=': a >= b, '==': a === b, '!=': a !== b }[op]; }
        else { const op = pick([Lg.and, Lg.or]); expr = `${a} > ${b} ${op} ${c} > ${b}`; r = op === Lg.and ? a > b && c > b : a > b || c > b; }
        return out(Lg.show(course === 'cpp' ? `(${expr})` : expr), Lg.boolOpts(r), t('gen.e.bool', { expr, r: Lg.bool(r) }));
      },
      // Métodos de texto: longitud, mayúsculas, un carácter o un trozo.
      str() {
        const w = pick(WORDS), i = ri(0, w.length - 2), kind = pick(course === 'cpp' ? ['len', 'at', 'sub'] : ['len', 'up', 'at', 'sub']);
        const S = `"${w}"`;
        const code = {
          len: { python: `print(len(${S}))`, javascript: `console.log(${S}.length);`, java: `System.out.println(${S}.length());`, cpp: `std::string s = ${S};\nstd::cout << s.size() << "\\n";` },
          up: { python: `print(${S}.upper())`, javascript: `console.log(${S}.toUpperCase());`, java: `System.out.println(${S}.toUpperCase());` },
          at: { python: `print(${S}[${i}])`, javascript: `console.log(${S}[${i}]);`, java: `System.out.println(${S}.charAt(${i}));`, cpp: `std::string s = ${S};\nstd::cout << s[${i}] << "\\n";` },
          sub: { python: `print(${S}[${i}:${i + 2}])`, javascript: `console.log(${S}.slice(${i}, ${i + 2}));`, java: `System.out.println(${S}.substring(${i}, ${i + 2}));`, cpp: `std::string s = ${S};\nstd::cout << s.substr(${i}, 2) << "\\n";` },
        }[kind][course];
        const r = { len: String(w.length), up: w.toUpperCase(), at: w[i], sub: w.slice(i, i + 2) }[kind];
        const wrong = { len: [w.length - 1, w.length + 1, w.length * 2].map(String), up: [w, w[0].toUpperCase() + w.slice(1), w.toUpperCase().slice(0, -1)], at: [w[i + 1], w[i - 1] || w[w.length - 1], String(i)], sub: [w.slice(i, i + 3), w.slice(i + 1, i + 3), w.slice(i - 1 < 0 ? 0 : i - 1, i + 1)] }[kind];
        if (kind === 'len' && rnd() < 0.4) {
          const fc = { python: [`print(___(${S}))`, ['len', 'size', 'length', 'count']], javascript: [`console.log(${S}.___);`, ['length', 'size', 'len', 'count']], java: [`System.out.println(${S}.___());`, ['length', 'size', 'len', 'count']], cpp: [`std::string s = ${S};\nstd::cout << s.___() << "\\n";`, ['size', 'len', 'count', 'lenght']] }[course];
          return fill(fc[0], fc[1], t('gen.e.trace', { r }), t('gen.fillFor', { r }));
        }
        return out(code, [r, ...wrong].filter(x => x !== undefined && x !== ''), trace(r));
      },
      // Listas, arrays y vectores: índices, longitud y añadir al final.
      list() {
        const xs = [ri(1, 9), ri(10, 19), ri(20, 29), ri(30, 39)].slice(0, ri(3, 4)), i = ri(0, xs.length - 1), add = ri(40, 49);
        const kind = pick(['index', 'len', 'last']);
        const L = xs.join(', ');
        let code, r, wrong;
        if (kind === 'index') {
          code = { python: `nums = [${L}]\nprint(nums[${i}])`, javascript: `const nums = [${L}];\nconsole.log(nums[${i}]);`, java: `int[] nums = {${L}};\nSystem.out.println(nums[${i}]);`, cpp: `int nums[] = {${L}};\nstd::cout << nums[${i}] << "\\n";` }[course];
          r = xs[i]; wrong = [xs[i + 1], xs[i - 1], i].filter(x => x !== undefined);
        } else if (kind === 'len' || course === 'java') {
          code = { python: `nums = [${L}]\nnums.append(${add})\nprint(len(nums))`, javascript: `const nums = [${L}];\nnums.push(${add});\nconsole.log(nums.length);`, java: `int[] nums = {${L}};\nSystem.out.println(nums.length);`, cpp: day >= 6 ? `std::vector<int> nums = {${L}};\nnums.push_back(${add});\nstd::cout << nums.size() << "\\n";` : `int nums[] = {${L}};\nstd::cout << nums[0] + nums[${xs.length - 1}] << "\\n";` }[course];
          r = course === 'java' ? xs.length : course === 'cpp' && day < 6 ? xs[0] + xs[xs.length - 1] : xs.length + 1;
          wrong = [xs.length, xs.length + 2, xs.length - 1, add];
        } else {
          code = { python: `nums = [${L}]\nprint(nums[-1])`, javascript: `const nums = [${L}];\nconsole.log(nums[nums.length - 1]);`, cpp: `int nums[] = {${L}};\nstd::cout << nums[${xs.length - 1}] << "\\n";` }[course];
          r = xs[xs.length - 1]; wrong = [xs[0], xs[xs.length - 2], xs.length];
        }
        return out(code, uniq([r, ...wrong]).slice(0, 4).length >= 3 ? [r, ...wrong] : numOpts(r), trace(r));
      },
      // Escribir la línea que añade un elemento al final.
      appendw() {
        const n = ri(1, 99);
        const a = { python: [`nums.append(${n})`], javascript: [`nums.push(${n});`], java: [`nums.add(${n});`], cpp: [`nums.push_back(${n});`] }[course];
        return write(t('gen.append', { n, v: 'nums' }), a, t('gen.e.append', { code: a[0] }));
      },
      // Condicionales: qué rama se ejecuta.
      cond() {
        const x = ri(1, 20), k = ri(5, 15), m = ri(2, 4), p = ri(1, 9);
        const big = x > k, r = big ? x * m : x + p;
        const body = {
          python: `x = ${x}\nif x > ${k}:\n    print(x * ${m})\nelse:\n    print(x + ${p})`,
          javascript: `let x = ${x};\nif (x > ${k}) {\n  console.log(x * ${m});\n} else {\n  console.log(x + ${p});\n}`,
          java: `int x = ${x};\nif (x > ${k}) {\n    System.out.println(x * ${m});\n} else {\n    System.out.println(x + ${p});\n}`,
          cpp: `int x = ${x};\nif (x > ${k}) {\n    std::cout << x * ${m} << "\\n";\n} else {\n    std::cout << x + ${p} << "\\n";\n}`,
        }[course];
        return out(body, numOpts(r, [big ? x + p : x * m]), t('gen.e.cond', { r }));
      },
      // Escribir la cabecera de un if.
      ifw() {
        const v = pick(['x', 'score', 'level', 'speed']), n = ri(1, 50);
        const a = course === 'python' ? [`if ${v} > ${n}:`] : [`if (${v} > ${n}) {`, `if (${v} > ${n})`];
        const re = course === 'python' ? new RegExp(`^if\\(?${v}>${n}\\)?:$`) : new RegExp(`^if\\(${v}>${n}\\)\\{?$`);
        return write(t('gen.if', { v, n }), a, t('gen.e.if', { code: a[0] }), re);
      },
      // Bucles: sumas, cuentas y saltos de 2.
      loop() {
        const n = ri(3, 7), step = pick([1, 2]);
        let r = 0; for (let i = 1; i <= n; i += step) r += i;
        const body = {
          python: step === 1 ? `total = 0\nfor i in range(1, ${n + 1}):\n    total += i\nprint(total)` : `total = 0\nfor i in range(1, ${n + 1}, 2):\n    total += i\nprint(total)`,
          javascript: `let total = 0;\nfor (let i = 1; i <= ${n}; i${step === 1 ? '++' : ' += 2'}) {\n  total += i;\n}\nconsole.log(total);`,
          java: `int total = 0;\nfor (int i = 1; i <= ${n}; i${step === 1 ? '++' : ' += 2'}) {\n    total += i;\n}\nSystem.out.println(total);`,
          cpp: `int total = 0;\nfor (int i = 1; i <= ${n}; i${step === 1 ? '++' : ' += 2'}) {\n    total += i;\n}\nstd::cout << total << "\\n";`,
        }[course];
        let r2 = 0; for (let i = 1; i < n; i += step) r2 += i;
        return out(body, numOpts(r, [r2, r + n + 1]), t('gen.e.loop', { r }));
      },
      // Escribir la cabecera de un bucle que se repite n veces.
      loopw() {
        const n = ri(3, 12);
        const a = {
          python: [`for i in range(${n}):`],
          javascript: [`for (let i = 0; i < ${n}; i++) {`],
          java: [`for (int i = 0; i < ${n}; i++) {`],
          cpp: [`for (int i = 0; i < ${n}; i++) {`],
        }[course];
        const re = course === 'python'
          ? new RegExp(`^for([a-z_]\\w*)inrange\\((0,)?${n}\\):$`, 'i')
          : new RegExp(`^for\\((${course === 'javascript' ? 'let|var' : 'int'})([a-z_]\\w*)=0;\\2<${n};(\\2\\+\\+|\\+\\+\\2|\\2\\+=1)\\)\\{?$`, 'i');
        return write(t('gen.loop', { n }), a, t('gen.e.loop2', { code: a[0], n }), re);
      },
      // Funciones: qué devuelven.
      func() {
        const [a, b, c] = [ri(2, 9), ri(2, 9), ri(1, 5)], r = a * b + c;
        const body = {
          python: `def area(w, h):\n    return w * h + ${c}\n\nprint(area(${a}, ${b}))`,
          javascript: `function area(w, h) {\n  return w * h + ${c};\n}\nconsole.log(area(${a}, ${b}));`,
          java: `static int area(int w, int h) {\n    return w * h + ${c};\n}\n\nSystem.out.println(area(${a}, ${b}));`,
          cpp: `int area(int w, int h) {\n    return w * h + ${c};\n}\n\nstd::cout << area(${a}, ${b}) << "\\n";`,
        }[course];
        if (rnd() < 0.35) {
          const ops = ['*', '+', '-'].filter(o => calc(a, b, o) + c !== r || o === '*');
          if (ops.length === 3) return fill(body.replace('w * h', 'w ___ h'), ops, t('gen.e.func', { r }), t('gen.fillFor', { r }));
        }
        return out(body, numOpts(r, [a * b, a + b + c, a * (b + c)]), t('gen.e.func', { r }));
      },
      // Escribir la llamada a una función y mostrar lo que devuelve.
      callw() {
        const [a, b] = [ri(1, 20), ri(1, 20)], call = `area(${a}, ${b})`;
        const ans = [Lg.show(call)];
        const re = course === 'cpp' ? new RegExp(`^(std::)?cout<<area\\(${a},${b}\\)(<<("\\\\n"|(std::)?endl))?;?$`) : null;
        return write(t('gen.call', { f: 'area', a, b }), ans, t('gen.e.call', { code: ans[0] }), re);
      },
    };
    return F;
  }

  function generate(course, day, count, rnd = Math.random, t = k => k) {
    if (!LANG[course]) return [];
    const F = make(course, day, rnd, t), un = UNLOCK[course];
    const fams = Object.keys(un).filter(f => un[f] <= day && F[f]);
    if (!fams.length) return [];
    // Las familias del tema de hoy (o las últimas que se han visto) salen más a menudo.
    const newest = Math.max(...fams.map(f => un[f]));
    const bag = fams.flatMap(f => (un[f] === newest ? [f, f, f] : un[f] >= newest - 2 ? [f, f] : [f]));
    const res = [], seen = new Set(), used = {};
    let last = '';
    // Primero, como mucho 2 de cada familia (así un nivel no es todo "muestra el texto…");
    // solo si faltan ejercicios se permiten más.
    for (const cap of [2, Infinity]) {
      for (let tries = 0; res.length < count && tries < count * 20; tries++) {
        const f = bag[Math.floor(rnd() * bag.length)];
        if ((f === last && fams.length > 1) || (used[f] || 0) >= cap) continue;
        const ex = F[f]();
        const key = ex.t + '|' + ex.c + '|' + ex.q;
        if (seen.has(key)) continue;
        if ((ex.t === 'out' || ex.t === 'fill') && ex.o.length < 3) continue;
        seen.add(key); last = f; used[f] = (used[f] || 0) + 1; ex.fam = f; res.push(ex);
      }
    }
    return res;
  }

  g.NibblePractice = { generate, UNLOCK, families: course => Object.keys(UNLOCK[course] || {}) };
})(typeof window !== 'undefined' ? window : globalThis);
