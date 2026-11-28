// Comprueba el generador de ejercicios (assets/js/practice.js).
//   node scripts/check-practice.mjs [ejercicios por día]   (por defecto 120)
// - Estructura: opciones distintas, la correcta primero, un solo hueco en fill, respuestas no vacías.
// - Python y JavaScript: ejecuta el código de verdad y compara la salida con la respuesta correcta.
//   En fill, solo la primera opción debe dar el resultado pedido. Las respuestas de escribir deben
//   ser código válido. (Java y C++ solo se comprueban por estructura: no hay compilador en el CI.)
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
globalThis.window = globalThis;
await import(pathToFileURL(path.join(ROOT, 'assets/js/order.js')));
await import(pathToFileURL(path.join(ROOT, 'assets/js/practice.js')));
const P = globalThis.NibblePractice;
const PER_DAY = +process.argv[2] || 120;
const errors = [];
const err = (where, msg) => { if (errors.length < 40) errors.push(`${where}: ${msg}`); };
// t() de prueba: devuelve el resultado pedido ({r}) para poder comprobarlo en fill.
const t = (k, v) => (v && v.r !== undefined ? String(v.r) : k);

// Contexto mínimo para comprobar que las respuestas de escribir son código válido.
const PRE = {
  python: { appendw: 'nums = []\n', callw: 'def area(w, h):\n    return w * h\n', ifw: 'x = score = level = speed = 1\n' },
  javascript: { appendw: 'const nums = [];\n', callw: 'function area(w, h) { return w * h; }\n', ifw: 'let x = 1, score = 1, level = 1, speed = 1;\n' },
};
// return solo es válido dentro de una función; la clave se guarda en un diccionario u objeto ya creado.
Object.assign(PRE.python, { retw: 'def f(a, b, w, h, x, y):\n    ', dictw: 'stock = {}\n' });
Object.assign(PRE.javascript, { retw: 'function f(a, b, w, h, x, y) {\n', dictw: 'const stock = {};\n' });
const POST = { javascript: { retw: '\n}' } };
const BODY = { python: '\n    pass', javascript: '\n}' };

const py = [], js = [];
let total = 0;
for (const course of ['python', 'javascript', 'java', 'cpp']) {
  for (let day = 1; day <= 30; day++) {
    const list = P.generate(course, day, PER_DAY, Math.random, t);
    if (list.length < Math.min(PER_DAY, 20)) err(`${course} día ${day}`, `solo genera ${list.length} ejercicios`);
    for (const ex of list) {
      total++;
      const where = `${course} día ${day} ${ex.fam}`;
      const all = JSON.stringify(ex);
      if (/undefined|NaN/.test(all)) err(where, 'contiene undefined o NaN: ' + all);
      if (ex.t === 'out' || ex.t === 'fill') {
        if (ex.o.length < 3) err(where, 'menos de 3 opciones');
        if (new Set(ex.o).size !== ex.o.length) err(where, 'opciones repetidas');
        if (ex.o.some(o => !String(o).length)) err(where, 'opción vacía');
      }
      if (ex.t === 'fill' && ex.c.split('___').length !== 2) err(where, 'fill sin un único hueco');
      if (ex.t === 'type') {
        if (!ex.a.length || ex.a.some(a => !a.trim())) err(where, 'respuesta vacía');
        if (ex.re && !ex.a.every(a => ex.re.test(a.trim().replace(/;$/, '').replace(/\s/g, '')))) err(where, `la expresión no acepta ${ex.a.join(' | ')}`);
      }
      if (course === 'python' || course === 'javascript') {
        const bucket = course === 'python' ? py : js;
        if (ex.t === 'out') bucket.push({ where, code: ex.c, want: ex.o[0] });
        if (ex.t === 'fill') ex.o.forEach((o, i) => bucket.push({ where, code: ex.c.replace('___', o), want: ex.q, first: i === 0, fill: true }));
        if (ex.t === 'type') for (const a of ex.a) {
          const tail = /[:{]$/.test(a.trim()) ? BODY[course] : /^(if|for)\b.*\)$/.test(a.trim()) ? ' {}' : '';
          bucket.push({ where, code: (PRE[course][ex.fam] || '') + a + tail + ((POST[course] || {})[ex.fam] || ''), syntax: true });
        }
      }
    }
  }
}

// Programas (t: 'run'): la solución tiene que dar exactamente la salida pedida, con la entrada del caso.
let progs = 0;
for (const course of ['python', 'javascript']) for (let day = 1; day <= 30; day++) for (const ex of P.programs(course, day, 12, Math.random, t)) {
  progs++;
  const where = `${course} día ${day} programa ${ex.fam}`;
  if (/undefined|NaN/.test(JSON.stringify(ex))) err(where, 'contiene undefined o NaN');
  if (!ex.q || !ex.out || !ex.sol || !ex.start) err(where, 'le falta q, out, sol o start');
  (course === 'python' ? py : js).push({ where, code: ex.sol, want: ex.out, stdin: ex.in || '' });
}
if (!progs) err('programas', 'no se ha generado ninguno');

// JavaScript: se ejecuta aquí mismo, capturando console.log.
for (const c of js) {
  let outp = [];
  const lines = (c.stdin || '').split('\n');
  const ctx = vm.createContext({ prompt: () => (lines.length ? lines.shift() : null), console: { log: (...a) => outp.push(a.map(x => (typeof x === 'string' ? x : String(x))).join(' ')) } });
  // Una opción incorrecta de fill puede dar error al ejecutarse: también vale, no da el resultado pedido.
  try { vm.runInContext(c.code, ctx, { timeout: 2000 }); } catch (e) { if (!(c.fill && !c.first)) err(c.where, `error al ejecutar: ${e.message}\n${c.code}`); continue; }
  if (c.syntax) continue;
  const got = outp.join('\n');
  if (c.fill) { if (c.first ? got !== c.want : got === c.want) err(c.where, `fill ambiguo o mal: con "${c.code}" sale ${got}, se pedía ${c.want}`); }
  else if (got !== c.want) err(c.where, `sale "${got}", la respuesta dice "${c.want}"\n${c.code}`);
}

// Python: un solo proceso ejecuta todos los fragmentos y devuelve la salida de cada uno.
const pyScript = `
import sys, json, io, contextlib
res = []
for item in json.load(sys.stdin):
    buf = io.StringIO()
    try:
        if item.get('syntax'):
            compile(item['code'], '<x>', 'exec')
        else:
            sys.stdin = io.StringIO(item.get('stdin', ''))
            with contextlib.redirect_stdout(buf):
                exec(item['code'], {})
        res.append({'ok': True, 'out': buf.getvalue()})
    except Exception as e:
        res.append({'ok': False, 'out': repr(e)})
print(json.dumps(res))
`;
const pyBin = ['python3', 'python'].find(b => spawnSync(b, ['--version']).status === 0);
if (!pyBin) err('python', 'no se encontró Python; no se han ejecutado los ejercicios de Python');
else {
  const r = spawnSync(pyBin, ['-c', pyScript], { input: JSON.stringify(py), encoding: 'utf8', maxBuffer: 1 << 28 });
  if (r.status !== 0) err('python', r.stderr.slice(0, 500));
  else JSON.parse(r.stdout).forEach((o, i) => {
    const c = py[i];
    if (!o.ok) return c.fill && !c.first ? undefined : err(c.where, `error al ejecutar: ${o.out}\n${c.code}`);
    if (c.syntax) return;
    const got = o.out.replace(/\n$/, '');
    if (c.fill) { if (c.first ? got !== c.want : got === c.want) err(c.where, `fill ambiguo o mal: con "${c.code}" sale ${got}, se pedía ${c.want}`); }
    else if (got !== c.want) err(c.where, `sale "${got}", la respuesta dice "${c.want}"\n${c.code}`);
  });
}

if (errors.length) { console.error(errors.join('\n\n')); console.error(`\n${errors.length}+ errores en ${total} ejercicios generados.`); process.exit(1); }
console.log(`OK: ${total} ejercicios generados y ${progs} programas; ${py.length} fragmentos de Python y ${js.length} de JavaScript ejecutados.`);
