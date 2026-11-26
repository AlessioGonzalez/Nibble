// Pruebas de assets/js/progress.js: racha de secciones, contadores por dispositivo, unión de copias y borrado.
//   node scripts/test-progress.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
globalThis.window = globalThis;
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
  P.add(a, 'A', { answered: 1, correct: 0, concept: 'python:8' });
  P.add(a, 'A', { answered: 1, correct: 0, concept: 'python:8' });
  P.add(b, 'B', { answered: 1, correct: 1, concept: 'python:8' });
  P.add(b, 'B', { answered: 3, correct: 3, concept: 'python:2' });
  a.savedAt = 2; b.savedAt = 3;
  const m = P.merge(a, b);
  assert.deepEqual(m.skill['python:8'], [1, 3]);
  assert.deepEqual(P.weak(m, 'python', 3).map(w => w.day), [8]);
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
