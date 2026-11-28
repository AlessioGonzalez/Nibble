// Pruebas de assets/js/progress.js: racha de secciones, contadores por dispositivo, unión de copias y borrado.
//   node scripts/test-progress.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
globalThis.window = globalThis;
await import(pathToFileURL(path.join(ROOT, 'assets/js/order.js')));
await import(pathToFileURL(path.join(ROOT, 'assets/js/progress.js')));
const P = globalThis.NibbleProgress;
const reload = s => P.totals(P.upgrade(JSON.parse(JSON.stringify(s))));
let clock = 1000;
const sec = (s, key, i, ok) => P.section(s, key, i, ok, ++clock);

test('la tabla de ejemplo de la racha', () => {
  const s = P.totals(P.upgrade(null));
  const L1 = 'python:0:0', L2 = 'python:0:1';
  for (let i = 0; i < 5; i++) sec(s, L1, i, true);
  assert.equal(s.run.cur, 5);
  sec(s, L1, 5, false); assert.equal(s.run.cur, 0);
  sec(s, L1, 5, true); assert.equal(s.run.cur, 1);
  sec(s, L1, 6, true); assert.equal(s.run.cur, 2);
  sec(s, L1, 7, true); assert.equal(s.run.cur, 3);
  P.levelDone(s, L1);
  sec(s, L2, 0, true); assert.equal(s.run.cur, 4);
  sec(s, L2, 1, true); assert.equal(s.run.cur, 5);
  assert.equal(s.run.best, 5);
});

test('cambiar de lenguaje no reinicia la racha', () => {
  const s = P.totals(P.upgrade(null));
  sec(s, 'python:0:0', 0, true); sec(s, 'java:0:0', 0, true); sec(s, 'cpp:3:2', 4, true);
  assert.equal(s.run.cur, 3);
});

test('una sección ya aprobada no suma otra vez, ni tras recargar', () => {
  let s = P.totals(P.upgrade(null));
  assert.equal(sec(s, 'js:1:0', 2, true), 'add');
  assert.equal(sec(s, 'js:1:0', 2, true), 'same');
  s = reload(s);
  assert.equal(sec(s, 'js:1:0', 2, true), 'same');
  assert.equal(s.run.cur, 1);
  // Un nivel completado cuenta como todas sus secciones aprobadas (también los de antes de esta versión).
  s.done['js:1:1'] = true;
  assert.equal(sec(s, 'js:1:1', 0, true), 'same');
  // Repetir un nivel y fallar sí reinicia.
  assert.equal(sec(s, 'js:1:1', 0, false), 'reset');
  assert.equal(s.run.cur, 0);
  assert.equal(s.run.best, 1);
});

test('dos dispositivos suman sus contadores al unirse', () => {
  const base = P.totals(P.upgrade(null)); base.savedAt = 1;
  const a = reload(base), b = reload(base);
  P.add(a, 'devA', { xp: 10, course: 'python', answered: 4, correct: 3, lessons: 1 }, '2026-11-26'); a.savedAt = 5;
  P.add(b, 'devB', { xp: 5, course: 'java', answered: 2, correct: 2, lessons: 1 }, '2026-11-26'); b.savedAt = 6;
  const m = P.merge(a, b);
  assert.equal(m.xp, 15);
  assert.deepEqual(m.courseXp, { python: 10, java: 5 });
  assert.equal(m.stats.answered, 6);
  assert.equal(m.stats.lessons, 2);
  // Unir otra vez lo mismo no cambia nada (idempotente), en cualquier orden.
  assert.equal(P.merge(m, a).xp, 15);
  assert.equal(P.merge(b, m).xp, 15);
  assert.equal(P.merge(m, m).stats.correct, 5);
});

test('estado de antes de esta versión: la cuenta base no se duplica', () => {
  const old = { v: 3, xp: 100, savedAt: 10, stats: { answered: 20, correct: 15, lessons: 4 }, courseXp: { python: 100 }, done: { 'python:0:0': true } };
  const a = P.totals(P.upgrade(old)), b = P.totals(P.upgrade(Object.assign({}, old, { savedAt: 11 })));
  assert.equal(a.xp, 100);
  assert.equal(P.merge(a, b).xp, 100);
  P.add(a, 'devA', { xp: 5 }); a.savedAt = 12;
  assert.equal(P.merge(a, old).xp, 105);
});

test('borrar el progreso no vuelve con la copia de otro dispositivo', () => {
  const old = P.totals(P.upgrade(null));
  P.add(old, 'devB', { xp: 50, lessons: 3 }); old.done = { 'python:0:0': true }; old.savedAt = 100;
  const reset = Object.assign(P.fresh(), { resetAt: 200, savedAt: 200 });
  for (const m of [P.merge(reset, old), P.merge(old, reset)]) {
    assert.equal(m.xp, 0);
    assert.deepEqual(m.done, {});
    assert.equal(m.resetAt, 200);
  }
});

test('la racha que gana es la del último cambio; el récord es el mayor', () => {
  const a = P.totals(P.upgrade(null)), b = P.totals(P.upgrade(null));
  a.savedAt = b.savedAt = 1;
  for (let i = 0; i < 6; i++) sec(a, 'python:2:0', i, true);
  sec(b, 'java:0:0', 0, true); sec(b, 'java:0:0', 1, false);
  const m = P.merge(a, b);
  assert.equal(m.run.cur, 0);
  assert.equal(m.run.best, 6);
  assert.equal(m.passed['python:2:0'], 0b111111);
  assert.equal(m.passed['java:0:0'], 1);
});

test('la meta diaria suma la XP de hoy de todos los dispositivos', () => {
  const s = P.totals(P.upgrade(null));
  P.add(s, 'a', { xp: 7 }, '2026-11-25');
  P.add(s, 'a', { xp: 4 }, '2026-11-26');
  P.add(s, 'b', { xp: 6 }, '2026-11-26');
  assert.deepEqual(s.daily, { day: '2026-11-26', xp: 10 });
  assert.equal(s.xp, 17);
});

test('conceptos: aciertos por tema, sumados entre dispositivos', () => {
  const base = P.totals(P.upgrade(null)); base.savedAt = 1;
  const a = reload(base), b = reload(base);
  P.add(a, 'A', { answered: 1, correct: 0, concept: 'python:py-dicts' });
  P.add(a, 'A', { answered: 1, correct: 0, concept: 'python:py-dicts' });
  P.add(b, 'B', { answered: 1, correct: 1, concept: 'python:py-dicts' });
  P.add(b, 'B', { answered: 3, correct: 3, concept: 'python:py-vars' });
  a.savedAt = 2; b.savedAt = 3;
  const m = P.merge(a, b);
  assert.deepEqual(m.skill['python:py-dicts'], [1, 3]);
  // weak() da el id y el número actual del día (py-dicts es el día 10).
  assert.deepEqual(P.weak(m, 'python', 3).map(w => [w.id, w.day]), [['py-dicts', 10]]);
  assert.deepEqual(P.weak(m, 'java', 1), []);
});

test('repaso: un fallo queda pendiente hasta acertarlo, y se une entre dispositivos', () => {
  const a = P.totals(P.upgrade(null)), b = P.totals(P.upgrade(null));
  a.savedAt = b.savedAt = 1;
  P.miss(a, 'python:3:2', 100);
  P.miss(a, 'java:1:0', 110);
  assert.deepEqual(P.pending(a, 'python'), ['python:3:2']);
  P.fix(b, 'python:3:2', 200); // b no lo tenía: no inventa nada
  assert.deepEqual(P.pending(P.merge(a, b), 'python'), ['python:3:2']);
  P.fix(a, 'python:3:2', 150);
  assert.deepEqual(P.pending(a, 'python'), []);
  assert.equal(P.fixedCount(a), 1);
  // Otro dispositivo lo vuelve a fallar más tarde: vuelve a estar pendiente.
  P.miss(b, 'python:3:2', 300);
  assert.deepEqual(P.pending(P.merge(a, b), 'python'), ['python:3:2']);
});

test('historial de actividad, tiempo y fechas de logros', () => {
  const s = P.totals(P.upgrade(null));
  P.add(s, 'A', { xp: 5, sec: 60, answered: 4, correct: 3 }, '2026-11-25');
  P.add(s, 'B', { xp: 2, sec: 30 }, '2026-11-26');
  const h = P.history(s, 3, new Date(2026, 10, 26));
  assert.deepEqual(h.map(r => r.xp), [0, 5, 2]);
  assert.equal(h[1].ok, 3);
  assert.equal(P.studySeconds(s), 90);
  assert.deepEqual(P.unlock(s, ['first', 'run10'], 500), ['first', 'run10']);
  assert.deepEqual(P.unlock(s, ['first'], 900), []);
  const other = P.totals(P.upgrade(null)); other.savedAt = 2; s.savedAt = 1; other.ach = { first: 300 };
  assert.equal(P.merge(s, other).ach.first, 300);
});

/* ---------- v4: progreso por identificador de día ---------- */
// Copia v3 realista: claves con el número de día (0-29) y temas con el día de 1 a 30.
const v3State = () => ({
  v: 3, course: 'python', xp: 70, savedAt: 10, resetAt: 0, lastDay: '2026-11-20', streak: 2,
  done: Object.fromEntries([...Array(8).keys()].map(k => [`python:0:${k}`, true]).concat([['python:1:0', true], ['java:0:0', true]])),
  passed: { 'python:1:1': 5 }, review: { 'python:2:4': [100, 0], 'java:0:3': [50, 60] },
  dev: { A: { xp: 70, c: { python: 65, java: 5 }, s: { lessons: 10 }, d: {}, k: { 'python:3': [1, 4], 'java:1': [2, 2] } } },
  run: { cur: 3, best: 9, at: 5 }, ach: { first: 1 },
});
const doneIn = (s, c) => Object.keys(s.done).filter(k => k.startsWith(c + ':') && s.done[k]).length;

test('v4: una copia v3 migrada muestra exactamente el mismo progreso', () => {
  const old = v3State(), m = P.totals(P.upgrade(old));
  assert.equal(m.v, 4);
  assert.equal(doneIn(m, 'python'), doneIn(old, 'python'));
  assert.equal(doneIn(m, 'java'), 1);
  assert.ok(m.done['python:py-intro:7'] && m.done['python:py-vars:0'] && m.done['java:java-intro:0']);
  assert.deepEqual(m.passed, { 'python:py-vars:1': 5 });
  assert.deepEqual(P.pending(m, 'python'), ['python:py-operators:4']);
  assert.deepEqual(P.pending(m, 'java'), []);
  // Los temas usaban el día de 1 a 30: 'python:3' es el día 3 (py-operators).
  assert.deepEqual(m.skill['python:py-operators'], [1, 4]);
  assert.deepEqual(m.skill['java:java-intro'], [2, 2]);
  assert.deepEqual(P.weak(m, 'python', 1).map(w => [w.id, w.day]), [['py-operators', 3]]);
  assert.equal(m.xp, 70); assert.equal(m.run.best, 9); assert.equal(m.streak, 2);
  // Volver a convertir no cambia nada.
  assert.deepEqual(P.upgrade(m).done, m.done);
});

test('v4: unir una copia v3 de otro dispositivo con una v4 no pierde nada', () => {
  const nuevo = P.totals(P.upgrade(v3State()));
  P.levelDone(nuevo, 'python:py-vars:1'); nuevo.savedAt = 20;
  const viejo = v3State(); viejo.done['python:1:2'] = true; viejo.savedAt = 15;
  for (const m of [P.merge(nuevo, viejo), P.merge(viejo, nuevo)]) {
    assert.equal(m.v, 4);
    for (const k of ['python:py-intro:0', 'python:py-vars:0', 'python:py-vars:1', 'python:py-vars:2', 'java:java-intro:0']) assert.ok(m.done[k], k);
    assert.ok(!Object.keys(m.done).some(k => /:\d+:/.test(k)), 'quedan claves con número de día');
    assert.deepEqual(P.pending(m, 'python'), ['python:py-operators:4']);
  }
});

test('v4: una copia v3 se convierte con el orden de entonces, no con el actual', () => {
  // En la v3, py-dicts era el día 8 (índice 7) y py-conditionals el 9 (índice 8); ahora son el 10 y el 5.
  const m = P.upgrade({ v: 3, savedAt: 1, done: { 'python:7:0': true, 'python:8:3': true }, dev: {} });
  assert.deepEqual(Object.keys(m.done).sort(), ['python:py-conditionals:3', 'python:py-dicts:0']);
});

test('días fusionados: su progreso pasa al día que los contiene', () => {
  // v3: py-tuples era el índice 5 y py-sets el 6; ahora py-sets forma parte de py-tuples.
  const m = P.totals(P.upgrade({
    v: 3, savedAt: 1, done: { 'python:5:0': true, 'python:6:0': true, 'python:6:1': true },
    passed: { 'python:6:2': 3, 'python:5:2': 4 }, review: { 'python:6:1': [5, 0], 'python:5:3': [5, 0] },
    dev: { A: { xp: 0, c: {}, s: {}, d: {}, k: { 'python:6': [1, 2], 'python:7': [3, 4] } } },
  }));
  assert.deepEqual(Object.keys(m.done).sort(), ['python:py-tuples:0', 'python:py-tuples:1']);
  assert.deepEqual(m.passed, { 'python:py-tuples:2': 7 });
  // El repaso del día fusionado apunta a ejercicios que ya no están: se descarta.
  assert.deepEqual(P.pending(m, 'python'), ['python:py-tuples:3']);
  assert.deepEqual(m.skill['python:py-tuples'], [4, 6]);
  assert.ok(!JSON.stringify(m).includes('py-sets'));
  // Una copia v4 con el id antiguo (un dispositivo sin actualizar) también se une sin perder nada.
  const v4 = { v: 4, savedAt: 2, done: { 'python:py-sets:5': true }, dev: {} };
  const u = P.merge(m, v4);
  assert.ok(u.done['python:py-tuples:5'] && u.done['python:py-tuples:0']);
  assert.deepEqual(P.upgrade(u).done, u.done);
});

test('JavaScript: las copias v3 usan el orden de entonces y los días fusionados pasan al que los contiene', () => {
  // v3: js-arrays era el índice 4, js-console el 12 y js-storage el 16.
  const m = P.upgrade({ v: 3, savedAt: 1, done: { 'javascript:4:0': true, 'javascript:12:3': true, 'javascript:16:1': true }, dev: {} });
  assert.deepEqual(Object.keys(m.done).sort(), ['javascript:js-arrays:0', 'javascript:js-intro:3', 'javascript:js-json:1']);
  for (const c of ['python', 'javascript', 'java', 'cpp']) assert.equal(new Set(globalThis.NibbleOrderV3[c]).size, 30, c);
});

test('v4: los ids de order.js son únicos y hay 30 por curso', () => {
  for (const c of ['python', 'javascript', 'java', 'cpp']) {
    const ids = globalThis.NibbleOrder[c];
    assert.equal(ids.length, 30); assert.equal(new Set(ids).size, 30);
  }
});
