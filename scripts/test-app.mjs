// Pruebas de los textos (4 idiomas) y del reparto de ejercicios del generador.
//   node --test scripts/test-app.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
globalThis.window = globalThis;
await import(pathToFileURL(path.join(ROOT, 'assets/js/i18n.js')));
await import(pathToFileURL(path.join(ROOT, 'assets/js/practice.js')));
const D = globalThis.I18N._dict, G = globalThis.NibblePractice;
const COURSES = ['python', 'javascript', 'java', 'cpp'];
const vars = s => [...new Set([...String(s).matchAll(/\{(\w+)\}/g)].map(m => m[1]))].sort().join(',');
// Generador con semilla, para que la prueba sea siempre igual.
const seeded = seed => () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const key = ex => ex.t + '|' + ex.c + '|' + ex.q;

test('los 4 idiomas tienen los mismos textos y las mismas variables', () => {
  for (const l of ['en', 'fr', 'it']) {
    assert.deepEqual(Object.keys(D[l]).sort(), Object.keys(D.es).sort(), `claves distintas en ${l}`);
    for (const k of Object.keys(D.es)) {
      if (Array.isArray(D.es[k])) { assert.ok(Array.isArray(D[l][k]) && D[l][k].length, `${l}.${k} debería ser una lista`); continue; }
      assert.equal(vars(D[l][k]), vars(D.es[k]), `variables distintas en ${l}.${k}`);
      assert.ok(String(D[l][k]).trim(), `${l}.${k} está vacío`);
    }
  }
});

test('cambiar de idioma cambia los textos y vuelve al español si falta uno', () => {
  const I = globalThis.I18N;
  I.set('fr'); const fr = I.t('nav.map');
  I.set('it'); const it = I.t('nav.map');
  I.set('xx'); assert.equal(I.get(), 'es');
  assert.notEqual(fr, it);
  assert.equal(I.t('ex.run', { n: 1 }), 'Racha: 1 sección seguida');
});

test('el generador no usa un tema antes del día en que se enseña', () => {
  for (const c of COURSES) for (let day = 1; day <= 30; day++) {
    for (const ex of G.generate(c, day, 40, seeded(day))) {
      assert.ok(G.UNLOCK[c][ex.fam] <= day, `${c} día ${day}: ${ex.fam} se enseña el día ${G.UNLOCK[c][ex.fam]}`);
    }
  }
});

test('cada nivel tiene ejercicios distintos y repetir da otros', () => {
  for (const c of COURSES) for (const day of [1, 5, 15, 30]) {
    const a = G.generate(c, day, 12, seeded(1 + day)), b = G.generate(c, day, 12, seeded(99 + day));
    assert.equal(new Set(a.map(key)).size, a.length, `${c} día ${day}: ejercicios repetidos en un mismo nivel`);
    const same = b.filter(ex => a.some(x => key(x) === key(ex))).length;
    assert.ok(same <= 3, `${c} día ${day}: al repetir salen ${same} de 12 iguales`);
  }
});

test('la dificultad sube: con los días pesan más los temas nuevos', () => {
  for (const c of COURSES) {
    const share = day => { const xs = G.generate(c, day, 200, seeded(7)); return xs.filter(ex => G.UNLOCK[c][ex.fam] === 1).length / xs.length; };
    assert.ok(share(30) < share(3), `${c}: los temas del día 1 no pierden peso`);
    assert.ok(share(30) < 0.3, `${c}: el día 30 todavía es ${Math.round(share(30) * 100)}% de temas del día 1`);
  }
});

test('los temas que se fallan salen más (boost)', () => {
  const xs = G.generate('python', 20, 300, seeded(3)), ys = G.generate('python', 20, 300, seeded(3), k => k, [8]);
  const dict = list => list.filter(ex => G.UNLOCK.python[ex.fam] === 8).length;
  assert.ok(dict(ys) > dict(xs), 'boost no aumenta los ejercicios del tema 8');
});
