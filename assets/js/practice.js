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

  // Día del temario desde el que se usa cada familia de ejercicios (por eso strmul solo existe en Python: los otros
  // cursos no enseñan a repetir texto). Se escribe por identificador de día (order.js) y UNLOCK lo convierte a su
  // número actual (1-30): si el temario se reordena, cada familia sigue al día que la enseña.
  const UNLOCK_ID = {
    python: {
      print: 'py-intro', arith: 'py-intro', chain: 'py-intro', strmul: 'py-intro', concat: 'py-vars', vars: 'py-vars',
      varw: 'py-vars', arith2: 'py-operators', cmp: 'py-operators', str: 'py-strings', cond: 'py-conditionals', ifw: 'py-conditionals',
      cond3: 'py-conditionals', loop: 'py-loops', loopw: 'py-loops', loopif: 'py-loops', list: 'py-lists', appendw: 'py-lists',
      setf: 'py-tuples', dict: 'py-dicts', dictw: 'py-dicts', func: 'py-functions', callw: 'py-functions', retw: 'py-functions',
      hof: 'py-comprehensions', exc: 'py-exceptions', cls: 'py-classes', inh: 'py-inheritance',
    },
    javascript: {
      print: 'js-intro', arith: 'js-intro', chain: 'js-intro', concat: 'js-types', vars: 'js-types', varw: 'js-types',
      str: 'js-types', arith2: 'js-booleans', cmp: 'js-booleans', cond: 'js-conditionals', ifw: 'js-conditionals', cond3: 'js-conditionals',
      list: 'js-arrays', appendw: 'js-arrays', loop: 'js-loops', loopw: 'js-loops', loopif: 'js-loops', func: 'js-functions',
      callw: 'js-functions', retw: 'js-functions', dict: 'js-objects', dictw: 'js-objects', hof: 'js-higher-order', setf: 'js-sets-maps',
      exc: 'js-errors', cls: 'js-classes', inh: 'js-classes',
    },
    java: {
      print: 'java-intro', arith: 'java-intro', chain: 'java-intro', concat: 'java-intro', vars: 'java-vars', varw: 'java-vars',
      arith2: 'java-operators', cmp: 'java-operators', str: 'java-strings', list: 'java-arrays', appendw: 'java-arraylist', setf: 'java-sets',
      dict: 'java-maps', dictw: 'java-maps', cond: 'java-conditionals', ifw: 'java-conditionals', cond3: 'java-loops', loop: 'java-loops',
      loopw: 'java-loops', loopif: 'java-methods', func: 'java-methods', callw: 'java-methods', retw: 'java-methods', cls: 'java-classes',
      inh: 'java-polymorphism', exc: 'java-exceptions', hof: 'java-streams',
    },
    cpp: {
      print: 'cpp-intro', arith: 'cpp-intro', chain: 'cpp-intro', concat: 'cpp-vars', vars: 'cpp-vars', varw: 'cpp-vars',
      arith2: 'cpp-operators', cmp: 'cpp-operators', str: 'cpp-strings', list: 'cpp-arrays', appendw: 'cpp-vectors', setf: 'cpp-sets',
      dict: 'cpp-maps', dictw: 'cpp-maps', cond: 'cpp-conditionals', ifw: 'cpp-conditionals', cond3: 'cpp-loops', loop: 'cpp-loops',
      loopw: 'cpp-loops', loopif: 'cpp-functions', func: 'cpp-functions', callw: 'cpp-functions', retw: 'cpp-functions', ref: 'cpp-references',
      ptr: 'cpp-pointers', cls: 'cpp-classes', inh: 'cpp-polymorphism', exc: 'cpp-exceptions', hof: 'cpp-iterators',
    },
  };
  // Número actual (1-30) del día de cada familia, según order.js.
  const ORDER = g.NibbleOrder || {};
  const UNLOCK = {};
  for (const c in UNLOCK_ID) { UNLOCK[c] = {}; for (const f in UNLOCK_ID[c]) UNLOCK[c][f] = ORDER[c].indexOf(UNLOCK_ID[c][f]) + 1; }

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
    // Dificultad: 0 los días 1-10, 1 los días 11-20 y 2 los días 21-30 (números mayores y más pasos).
    const tier = day <= 10 ? 0 : day <= 20 ? 1 : 2;
    const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
    const pick = a => a[Math.floor(rnd() * a.length)];
    const out = (c, o, e, q = '') => ({ t: 'out', q, c, o: uniq(o).slice(0, 4), e, gen: 1 });
    const fill = (c, o, e, q) => ({ t: 'fill', q, c, o: uniq(o).slice(0, 4), e, gen: 1 });
    const write = (q, a, e, re) => ({ t: 'type', q, c: '', a, e, re, line: 'code', gen: 1 });
    const trace = r => t('gen.e.trace', { r });
    const show = e => Lg.show(course === 'cpp' ? `(${e})` : e);
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
        if (tier >= 1 && rnd() < 0.5) {
          const [a, b, c, d] = [ri(2, 9), ri(2, 9), ri(2, 5), ri(1, 9)], expr = `(${a} + ${b}) * ${c} - ${d}`, r = (a + b) * c - d;
          return out(show(expr), numOpts(r, [a + b * c - d, (a + b) * (c - d)]), t('gen.e.paren', { expr, r }));
        }
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
        } else if (kind === 'len' || (course === 'java' && kind === 'last' && rnd() < 0.5)) {
          code = { python: `nums = [${L}]\nnums.append(${add})\nprint(len(nums))`, javascript: `const nums = [${L}];\nnums.push(${add});\nconsole.log(nums.length);`, java: `int[] nums = {${L}};\nSystem.out.println(nums.length);`, cpp: day >= 6 ? `std::vector<int> nums = {${L}};\nnums.push_back(${add});\nstd::cout << nums.size() << "\\n";` : `int nums[] = {${L}};\nstd::cout << nums[0] + nums[${xs.length - 1}] << "\\n";` }[course];
          r = course === 'java' ? xs.length : course === 'cpp' && day < 6 ? xs[0] + xs[xs.length - 1] : xs.length + 1;
          wrong = [xs.length, xs.length + 2, xs.length - 1, add];
        } else {
          code = { python: `nums = [${L}]\nprint(nums[-1])`, javascript: `const nums = [${L}];\nconsole.log(nums[nums.length - 1]);`, java: `int[] nums = {${L}};\nSystem.out.println(nums[nums.length - 1]);`, cpp: `int nums[] = {${L}};\nstd::cout << nums[${xs.length - 1}] << "\\n";` }[course];
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
        const n = ri(3, [7, 10, 12][tier]), step = pick(tier ? [1, 2, 3] : [1, 2]);
        let r = 0; for (let i = 1; i <= n; i += step) r += i;
        const body = {
          python: step === 1 ? `total = 0\nfor i in range(1, ${n + 1}):\n    total += i\nprint(total)` : `total = 0\nfor i in range(1, ${n + 1}, ${step}):\n    total += i\nprint(total)`,
          javascript: `let total = 0;\nfor (let i = 1; i <= ${n}; i${step === 1 ? '++' : ' += ' + step}) {\n  total += i;\n}\nconsole.log(total);`,
          java: `int total = 0;\nfor (int i = 1; i <= ${n}; i${step === 1 ? '++' : ' += ' + step}) {\n    total += i;\n}\nSystem.out.println(total);`,
          cpp: `int total = 0;\nfor (int i = 1; i <= ${n}; i${step === 1 ? '++' : ' += ' + step}) {\n    total += i;\n}\nstd::cout << total << "\\n";`,
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
        const [a, b, c] = [ri(2, 9), ri(2, 9), ri(1, 5)];
        if (tier === 2 && rnd() < 0.5) {
          const [x, y] = [ri(1, 4), ri(2, 4)], inner = x * y + c, r2 = a * inner + c, call = `area(${a}, area(${x}, ${y}))`;
          const defs = {
            python: `def area(w, h):\n    return w * h + ${c}\n\nprint(${call})`,
            javascript: `function area(w, h) {\n  return w * h + ${c};\n}\nconsole.log(${call});`,
            java: `static int area(int w, int h) {\n    return w * h + ${c};\n}\n\nSystem.out.println(${call});`,
            cpp: `int area(int w, int h) {\n    return w * h + ${c};\n}\n\nstd::cout << ${call} << "\\n";`,
          }[course];
          return out(defs, numOpts(r2, [a * x * y + c, a * inner]), t('gen.e.nested', { inner, r: r2 }));
        }
        const r = a * b + c;
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
      // Condicional con tres ramas (elif / else if): solo se ejecuta la primera que se cumple.
      cond3() {
        const x = ri(1, 30), [k1, k2] = [ri(15, 25), ri(5, 12)];
        const r = x > k1 ? 'high' : x > k2 ? 'mid' : 'low';
        const body = {
          python: `x = ${x}\nif x > ${k1}:\n    print("high")\nelif x > ${k2}:\n    print("mid")\nelse:\n    print("low")`,
          javascript: `let x = ${x};\nif (x > ${k1}) {\n  console.log("high");\n} else if (x > ${k2}) {\n  console.log("mid");\n} else {\n  console.log("low");\n}`,
          java: `int x = ${x};\nif (x > ${k1}) {\n    System.out.println("high");\n} else if (x > ${k2}) {\n    System.out.println("mid");\n} else {\n    System.out.println("low");\n}`,
          cpp: `int x = ${x};\nif (x > ${k1}) {\n    std::cout << "high" << "\\n";\n} else if (x > ${k2}) {\n    std::cout << "mid" << "\\n";\n} else {\n    std::cout << "low" << "\\n";\n}`,
        }[course];
        return out(body, [r, ...['high', 'mid', 'low'].filter(o => o !== r), 'high\nmid'], t('gen.e.cond3', { r }));
      },
      // Bucle con un if dentro: cuenta solo las vueltas que cumplen la condición.
      loopif() {
        const n = ri(5, [9, 12, 15][tier]), m = pick([2, 3]);
        let r = 0; for (let i = 1; i <= n; i++) if (i % m === 0) r++;
        const body = {
          python: `count = 0\nfor i in range(1, ${n + 1}):\n    if i % ${m} == 0:\n        count += 1\nprint(count)`,
          javascript: `let count = 0;\nfor (let i = 1; i <= ${n}; i++) {\n  if (i % ${m} === 0) {\n    count++;\n  }\n}\nconsole.log(count);`,
          java: `int count = 0;\nfor (int i = 1; i <= ${n}; i++) {\n    if (i % ${m} == 0) {\n        count++;\n    }\n}\nSystem.out.println(count);`,
          cpp: `int count = 0;\nfor (int i = 1; i <= ${n}; i++) {\n    if (i % ${m} == 0) {\n        count++;\n    }\n}\nstd::cout << count << "\\n";`,
        }[course];
        return out(body, numOpts(r, [n, n - r, r + 1]), t('gen.e.loopif', { m, r }));
      },
      // Escribir la línea que devuelve un resultado.
      retw() {
        const [x, y] = pick([['a', 'b'], ['w', 'h'], ['x', 'y']]);
        const a = [course === 'python' ? `return ${x} + ${y}` : `return ${x} + ${y};`];
        const re = new RegExp(`^return\\(?(${x}\\+${y}|${y}\\+${x})\\)?;?$`);
        return write(t('gen.ret', { a: x, b: y }), a, t('gen.e.ret', { code: a[0] }), re);
      },
      // Conjuntos: no guardan repetidos.
      setf() {
        const base = [ri(1, 9), ri(10, 19), ri(20, 29)], xs = [...base, base[ri(0, 2)], ...(tier ? [base[ri(0, 2)], ri(30, 39)] : [])];
        const extra = rnd() < 0.5 ? base[ri(0, 2)] : ri(40, 49), r = new Set([...xs, extra]).size, L = xs.join(', ');
        const body = {
          python: `s = {${L}}\ns.add(${extra})\nprint(len(s))`,
          javascript: `const s = new Set([${L}]);\ns.add(${extra});\nconsole.log(s.size);`,
          java: `Set<Integer> s = new HashSet<>();\n${xs.map(x => `s.add(${x});`).join('\n')}\ns.add(${extra});\nSystem.out.println(s.size());`,
          cpp: `std::set<int> s = {${L}};\ns.insert(${extra});\nstd::cout << s.size() << "\\n";`,
        }[course];
        return out(body, numOpts(r, [xs.length + 1, xs.length, r + 1]), t('gen.e.set', { r }));
      },
      // Diccionarios, objetos y mapas: leer, cambiar y contar claves.
      dict() {
        const [k1, k2] = [pick(['apple', 'pear', 'kiwi']), pick(['milk', 'bread', 'rice'])], [v1, v2, d] = [ri(1, 9), ri(1, 9), ri(2, 6)];
        const kind = course === 'javascript' && day < 10 ? 'get' : pick(['get', 'len', 'same']);
        let code, r, wrong;
        if (kind === 'get') {
          r = v1 + d; wrong = [v1, d, v2 + d, v1 + d + 1];
          code = {
            python: `stock = {"${k1}": ${v1}, "${k2}": ${v2}}\nstock["${k1}"] += ${d}\nprint(stock["${k1}"])`,
            javascript: `const stock = { ${k1}: ${v1}, ${k2}: ${v2} };\nstock.${k1} += ${d};\nconsole.log(stock.${k1});`,
            java: `Map<String, Integer> stock = new HashMap<>();\nstock.put("${k1}", ${v1});\nstock.put("${k2}", ${v2});\nstock.put("${k1}", stock.get("${k1}") + ${d});\nSystem.out.println(stock.get("${k1}"));`,
            cpp: `std::map<std::string, int> stock = {{"${k1}", ${v1}}, {"${k2}", ${v2}}};\nstock["${k1}"] += ${d};\nstd::cout << stock["${k1}"] << "\\n";`,
          }[course];
        } else {
          // 'same': guardar otra vez una clave que ya existe cambia su valor, no añade otra.
          const key = kind === 'same' ? k1 : 'egg';
          r = kind === 'same' ? 2 : 3; wrong = [kind === 'same' ? 3 : 2, 1, 4];
          code = {
            python: `stock = {"${k1}": ${v1}, "${k2}": ${v2}}\nstock["${key}"] = ${d}\nprint(len(stock))`,
            javascript: `const stock = new Map([["${k1}", ${v1}], ["${k2}", ${v2}]]);\nstock.set("${key}", ${d});\nconsole.log(stock.size);`,
            java: `Map<String, Integer> stock = new HashMap<>();\nstock.put("${k1}", ${v1});\nstock.put("${k2}", ${v2});\nstock.put("${key}", ${d});\nSystem.out.println(stock.size());`,
            cpp: `std::map<std::string, int> stock = {{"${k1}", ${v1}}, {"${k2}", ${v2}}};\nstock["${key}"] = ${d};\nstd::cout << stock.size() << "\\n";`,
          }[course];
        }
        return out(code, uniq([r, ...wrong]).slice(0, 4), t(kind === 'get' ? 'gen.e.dict' : 'gen.e.dictLen', { k: k1, r }));
      },
      // Escribir la línea que guarda un valor con una clave.
      dictw() {
        const k = pick(['kiwi', 'lime', 'plum']), n = ri(1, 20);
        const a = {
          python: [`stock["${k}"] = ${n}`, `stock['${k}'] = ${n}`],
          javascript: [`stock.${k} = ${n};`, `stock["${k}"] = ${n};`, `stock['${k}'] = ${n};`],
          java: [`stock.put("${k}", ${n});`],
          cpp: [`stock["${k}"] = ${n};`],
        }[course];
        return write(t('gen.dict', { k, n, v: 'stock' }), a, t('gen.e.dictw', { code: a[0] }));
      },
      // Recorrer una lista con una función: comprensiones, filter, streams o algoritmos de la STL.
      hof() {
        const xs = [ri(1, 5), ri(6, 10), ri(11, 15), ri(16, 20), ri(21, 25)].slice(0, tier === 2 ? 5 : 4), k = ri(4, 16), L = xs.join(', ');
        const big = xs.filter(x => x > k);
        if (course === 'python') {
          const r = `[${big.map(x => x * 2).join(', ')}]`;
          return out(`nums = [${L}]\nprint([x * 2 for x in nums if x > ${k}])`,
            uniq([r, `[${xs.map(x => x * 2).join(', ')}]`, `[${big.join(', ')}]`, `[${xs.filter(x => x <= k).map(x => x * 2).join(', ')}]`, `[${big.map(x => x * 2 + 1).join(', ')}]`]).slice(0, 4), t('gen.e.hof', { r }));
        }
        const r = big.length, code = {
          javascript: `const nums = [${L}];\nconsole.log(nums.filter(x => x > ${k}).length);`,
          java: `List<Integer> nums = List.of(${L});\nSystem.out.println(nums.stream().filter(x -> x > ${k}).count());`,
          cpp: `std::vector<int> nums = {${L}};\nstd::cout << std::count_if(nums.begin(), nums.end(), [](int x) { return x > ${k}; }) << "\\n";`,
        }[course];
        return out(code, numOpts(r, [xs.length - r, xs.length]), t('gen.e.hof', { r }));
      },
      // Excepciones: qué se muestra cuando la función lanza un error y cuando no.
      exc() {
        const x = rnd() < 0.5 ? -ri(1, 9) : ri(1, 9), bad = x < 0, r = bad ? 'error' : String(x * 2);
        const code = {
          python: `def check(x):\n    if x < 0:\n        raise ValueError("neg")\n    return x * 2\n\ntry:\n    print(check(${x}))\nexcept ValueError:\n    print("error")`,
          javascript: `function check(x) {\n  if (x < 0) throw new Error("neg");\n  return x * 2;\n}\ntry {\n  console.log(check(${x}));\n} catch (e) {\n  console.log("error");\n}`,
          java: `static int check(int x) {\n    if (x < 0) throw new IllegalArgumentException("neg");\n    return x * 2;\n}\n\ntry {\n    System.out.println(check(${x}));\n} catch (IllegalArgumentException e) {\n    System.out.println("error");\n}`,
          cpp: `int check(int x) {\n    if (x < 0) throw std::invalid_argument("neg");\n    return x * 2;\n}\n\ntry {\n    std::cout << check(${x}) << "\\n";\n} catch (const std::invalid_argument& e) {\n    std::cout << "error" << "\\n";\n}`,
        }[course];
        return out(code, uniq([r, bad ? String(x * 2) : 'error', 'neg', `${x * 2}\nerror`]), t(bad ? 'gen.e.excThrow' : 'gen.e.excOk', { r }));
      },
      // Clases: un objeto guarda su estado entre llamadas a sus métodos.
      cls() {
        const [a, b, c] = [ri(1, 9), ri(1, 9), ri(1, 9)], r = a + b + c;
        const code = {
          python: `class Counter:\n    def __init__(self, start):\n        self.n = start\n\n    def add(self, k):\n        self.n += k\n\nc = Counter(${a})\nc.add(${b})\nc.add(${c})\nprint(c.n)`,
          javascript: `class Counter {\n  constructor(start) {\n    this.n = start;\n  }\n  add(k) {\n    this.n += k;\n  }\n}\nconst c = new Counter(${a});\nc.add(${b});\nc.add(${c});\nconsole.log(c.n);`,
          java: `static class Counter {\n    int n;\n    Counter(int start) {\n        n = start;\n    }\n    void add(int k) {\n        n += k;\n    }\n}\n\nCounter c = new Counter(${a});\nc.add(${b});\nc.add(${c});\nSystem.out.println(c.n);`,
          cpp: `class Counter {\npublic:\n    int n;\n    void add(int k) {\n        n += k;\n    }\n};\n\nCounter c;\nc.n = ${a};\nc.add(${b});\nc.add(${c});\nstd::cout << c.n << "\\n";`,
        }[course];
        return out(code, numOpts(r, [a + c, a, b + c]), t('gen.e.cls', { r }));
      },
      // Herencia: la clase hija sustituye un método y hereda el otro.
      inh() {
        const [P, C, s1, s2] = pick([['Animal', 'Dog', 'hmm', 'woof'], ['Robot', 'Kibi', 'beep', 'nibble'], ['Shape', 'Square', 'shape', 'square']]);
        const own = rnd() < 0.6, m = own ? 'sound' : 'kind', r = own ? s2 : 'base';
        const code = {
          python: `class ${P}:\n    def sound(self):\n        return "${s1}"\n\n    def kind(self):\n        return "base"\n\nclass ${C}(${P}):\n    def sound(self):\n        return "${s2}"\n\nx = ${C}()\nprint(x.${m}())`,
          javascript: `class ${P} {\n  sound() {\n    return "${s1}";\n  }\n  kind() {\n    return "base";\n  }\n}\nclass ${C} extends ${P} {\n  sound() {\n    return "${s2}";\n  }\n}\nconst x = new ${C}();\nconsole.log(x.${m}());`,
          java: `static class ${P} {\n    String sound() {\n        return "${s1}";\n    }\n    String kind() {\n        return "base";\n    }\n}\n\nstatic class ${C} extends ${P} {\n    @Override\n    String sound() {\n        return "${s2}";\n    }\n}\n\n${P} x = new ${C}();\nSystem.out.println(x.${m}());`,
          cpp: `class ${P} {\npublic:\n    virtual std::string sound() {\n        return "${s1}";\n    }\n    std::string kind() {\n        return "base";\n    }\n};\n\nclass ${C} : public ${P} {\npublic:\n    std::string sound() override {\n        return "${s2}";\n    }\n};\n\n${C} c;\n${P}& x = c;\nstd::cout << x.${m}() << "\\n";`,
        }[course];
        return out(code, uniq([r, own ? s1 : s2, own ? 'base' : s1, C]), t(own ? 'gen.e.inh' : 'gen.e.inh2', { m, r }));
      },
      // C++: paso por referencia frente a paso por valor.
      ref() {
        const [a, k] = [ri(1, 9), ri(2, 9)], byRef = rnd() < 0.5, r = byRef ? a + k : a;
        const code = `void bump(int${byRef ? '&' : ''} n) {\n    n += ${k};\n}\n\nint x = ${a};\nbump(x);\nstd::cout << x << "\\n";`;
        return out(code, numOpts(r, [byRef ? a : a + k, k]), t(byRef ? 'gen.e.ref' : 'gen.e.val', { r }));
      },
      // C++: cambiar una variable a través de un puntero.
      ptr() {
        const [a, m] = [ri(2, 9), ri(2, 4)], r = a * m;
        const code = `int x = ${a};\nint* p = &x;\n*p = *p * ${m};\nstd::cout << x << "\\n";`;
        return out(code, numOpts(r, [a, m]), t('gen.e.ptr', { r }));
      },
    };
    return F;
  }

  // boost: días (1-30) de los temas que el alumno falla más; sus familias salen el doble.
  function generate(course, day, count, rnd = Math.random, t = k => k, boost = []) {
    if (!LANG[course]) return [];
    const F = make(course, day, rnd, t), un = UNLOCK[course];
    const fams = Object.keys(un).filter(f => un[f] <= day && F[f]);
    if (!fams.length) return [];
    // Peso según la antigüedad del tema: lo de hoy y lo reciente sale más; lo de hace semanas, poco
    // (sigue apareciendo como repaso). Así la dificultad sube con los días.
    const weight = f => { const age = day - un[f]; return (age <= 1 ? 4 : age <= 4 ? 3 : age <= 9 ? 2 : age <= 19 ? 1 : 0.4) * (boost.includes(un[f]) ? 2 : 1); };
    const sum = fams.reduce((acc, f) => acc + weight(f), 0);
    const draw = () => { let x = rnd() * sum; for (const f of fams) { x -= weight(f); if (x < 0) return f; } return fams[fams.length - 1]; };
    const res = [], seen = new Set(), used = {};
    let last = '';
    // Primero, como mucho 2 de cada familia (así un nivel no es todo "muestra el texto…");
    // solo si faltan ejercicios se permiten más.
    for (const cap of [2, Infinity]) {
      for (let tries = 0; res.length < count && tries < count * 20; tries++) {
        const f = draw();
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

  g.NibblePractice = { generate, UNLOCK, UNLOCK_ID, families: course => Object.keys(UNLOCK[course] || {}) };
})(typeof window !== 'undefined' ? window : globalThis);
