// Compila y ejecuta los ejercicios generados de Java y C++ (los de Python y JavaScript los ejecuta
// check-practice.mjs). Necesita javac/java y g++; si no están, lo dice y no falla.
//   node scripts/check-compiled.mjs [ejercicios por día]   (por defecto 40)
// Cada fragmento va en su propia clase (Java) o namespace (C++): las funciones y clases que define
// quedan fuera de run() y el resto del código dentro. Se comprueba la salida de los "out" y la
// primera opción de los "fill" (las opciones incorrectas pueden no compilar, y eso también vale).
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
globalThis.window = globalThis;
await import(pathToFileURL(path.join(ROOT, 'assets/js/practice.js')));
const P = globalThis.NibblePractice;
const PER_DAY = +process.argv[2] || 40;
const t = (k, v) => (v && v.r !== undefined ? String(v.r) : k);
const has = (bin, arg) => spawnSync(bin, [arg]).status === 0;

// Separa las definiciones (funciones, clases) del código que va dentro de run().
// Convención del generador: una definición empieza en la columna 0 y acaba en una línea "}" o "};".
const DEF = {
  java: /^(static |class |interface |record |enum )/,
  cpp: /^(class |struct |enum |template)|^(?!(if|for|while|switch|else|return)\b)[\w:<>]+[\s*&]+\w+\([^;]*\)\s*(const\s*)?\{$/,
};
export function split(code, lang) {
  const defs = [], body = [];
  let inDef = false;
  for (const line of code.split('\n')) {
    if (!inDef && DEF[lang].test(line)) inDef = true;
    (inDef ? defs : body).push(line);
    if (inDef && /^\};?$/.test(line)) inDef = false;
  }
  return { defs: defs.join('\n'), body: body.join('\n') };
}

function cases(course) {
  const list = [];
  for (let day = 1; day <= 30; day++) {
    for (const ex of P.generate(course, day, PER_DAY, Math.random, t)) {
      const where = `${course} día ${day} ${ex.fam}`;
      if (ex.t === 'out') list.push({ where, code: ex.c, want: ex.o[0] });
      if (ex.t === 'fill') list.push({ where, code: ex.c.replace('___', ex.o[0]), want: ex.q });
    }
  }
  return list;
}

const SEP = '\\u0001';
export function javaSource(list) {
  const parts = list.map((c, i) => { const { defs, body } = split(c.code, 'java'); return `static class S${i} {\n${defs}\nstatic void run() throws Exception {\n${body}\n}\n}`; });
  const calls = list.map((_, i) => `run(() -> S${i}.run());`).join('\n');
  return `import java.util.*;\nimport java.util.stream.*;\npublic class Main {\ninterface R { void go() throws Exception; }\nstatic void run(R r) {\n  java.io.PrintStream real = System.out;\n  java.io.ByteArrayOutputStream buf = new java.io.ByteArrayOutputStream();\n  System.setOut(new java.io.PrintStream(buf, true));\n  try { r.go(); } catch (Exception e) { System.out.print("EXC " + e); }\n  System.setOut(real);\n  real.print(buf.toString().replace("\\r\\n", "\\n") + "${SEP}");\n}\n${parts.join('\n')}\npublic static void main(String[] a) {\n${calls}\n}\n}\n`;
}
export function cppSource(list) {
  const parts = list.map((c, i) => { const { defs, body } = split(c.code, 'cpp'); return `namespace s${i} {\n${defs}\nvoid run() {\n${body}\n}\n}`; });
  const calls = list.map((_, i) => `cap(s${i}::run);`).join('\n');
  return `#include <iostream>\n#include <sstream>\n#include <string>\n#include <vector>\n#include <map>\n#include <set>\n#include <algorithm>\n#include <stdexcept>\nvoid cap(void (*f)()) {\n  std::ostringstream o; auto* old = std::cout.rdbuf(o.rdbuf());\n  try { f(); } catch (const std::exception& e) { std::cout << "EXC " << e.what(); }\n  std::cout.rdbuf(old); std::cout << o.str() << "\\x01";\n}\n${parts.join('\n')}\nint main() {\n${calls}\n}\n`;
}
function java(list, dir) {
  writeFileSync(path.join(dir, 'Main.java'), javaSource(list));
  const c = spawnSync('javac', ['-nowarn', '-d', dir, path.join(dir, 'Main.java')], { encoding: 'utf8' });
  if (c.status !== 0) return { error: c.stderr.slice(0, 3000) };
  const r = spawnSync('java', ['-cp', dir, 'Main'], { encoding: 'utf8', maxBuffer: 1 << 26 });
  return { outs: r.stdout.split('\u0001') };
}
function cpp(list, dir) {
  writeFileSync(path.join(dir, 'main.cpp'), cppSource(list));
  const exe = path.join(dir, process.platform === 'win32' ? 'main.exe' : 'main');
  const c = spawnSync('g++', ['-std=c++17', '-w', '-O0', '-o', exe, path.join(dir, 'main.cpp')], { encoding: 'utf8' });
  if (c.status !== 0) return { error: c.stderr.slice(0, 3000) };
  const r = spawnSync(exe, [], { encoding: 'utf8', maxBuffer: 1 << 26 });
  return { outs: r.stdout.split('\u0001') };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const errors = [];
  let ran = 0;
  for (const [course, ok, fn] of [['java', has('javac', '-version') && has('java', '-version'), java], ['cpp', has('g++', '--version'), cpp]]) {
    if (!ok) { console.log(`${course}: no hay compilador, no se comprueba.`); continue; }
    const list = cases(course), dir = mkdtempSync(path.join(tmpdir(), 'nibble-'));
    try {
      const r = fn(list, dir);
      if (r.error) { errors.push(`${course}: no compila\n${r.error}`); continue; }
      list.forEach((c, i) => {
        const got = (r.outs[i] || '').replace(/\n$/, '');
        if (got !== c.want) errors.push(`${c.where}: sale "${got}", la respuesta dice "${c.want}"\n${c.code}`);
      });
      ran += list.length;
    } finally { rmSync(dir, { recursive: true, force: true }); }
  }
  if (errors.length) { console.error(errors.slice(0, 30).join('\n\n')); console.error(`\n${errors.length} errores.`); process.exit(1); }
  console.log(`OK: ${ran} fragmentos de Java y C++ compilados y ejecutados.`);
}
