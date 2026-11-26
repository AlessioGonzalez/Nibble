/* Nibble: lógica del progreso, sin interfaz. La usan store.js y app.js, y se prueba en Node
   (scripts/test-progress.mjs).

   - Contadores por dispositivo (state.dev): cada navegador suma en su propia cuenta y al unir dos copias
     se toma el máximo de cada cuenta. Así, si juegas en el móvil y en el PC sin conexión, al sincronizar
     se suman los dos (con un único total, el máximo perdía lo de uno de ellos). Los totales que lee la
     interfaz (xp, stats, courseXp, daily) se recalculan con totals().
     La cuenta "base" guarda lo que había antes de esta versión y se une como antes (máximo).
   - Racha de secciones (state.run): secciones aprobadas seguidas, global entre cursos y niveles.
     Fallar una sección la pone a 0. Una sección ya aprobada (state.passed, o su nivel completado) no suma.
   - Borrar el progreso (resetAt): al unir copias, la copia anterior al último borrado se descarta.
   - Conceptos (dev[].k): aciertos y respuestas por tema, con clave 'curso:día' (el día que enseña el tema).
   - Repaso (state.review): ejercicios del temario fallados, { 'curso:día:índice': [fallado, arreglado] }
     con las fechas de cada cosa; está pendiente mientras la última vez fue un fallo.
   - Logros (state.ach): fecha en que se consiguió cada uno. */
(function (g) {
  'use strict';
  const MAXH = 10;
  const STATS = ['answered', 'correct', 'lessons', 'perfect', 'extras', 'retos'];
  const KEEP_DAYS = 120; // días de actividad que se guardan por dispositivo

  const clone = o => JSON.parse(JSON.stringify(o));
  const zeroStats = () => Object.fromEntries(STATS.map(k => [k, 0]));
  const bucket = () => ({ xp: 0, c: {}, s: {}, d: {}, k: {} });
  const dayStr = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const today = () => dayStr(new Date());

  const fresh = () => ({
    v: 3, course: 'python', locale: null, theme: 'auto', xp: 0, hearts: MAXH, heartsTs: 0,
    streak: 0, maxStreak: 0, lastDay: null, daily: { day: null, xp: 0 }, goal: 30,
    done: {}, courseXp: {}, sound: true, savedAt: 0, resetAt: 0,
    stats: zeroStats(), dev: {}, run: { cur: 0, best: 0, at: 0 }, passed: {}, review: {}, ach: {}, skill: {},
  });

  // Completa una copia del estado (de cualquier versión anterior) con los campos que falten.
  function upgrade(s) {
    const st = Object.assign(fresh(), s ? clone(s) : {});
    st.stats = Object.assign(zeroStats(), st.stats);
    st.run = Object.assign({ cur: 0, best: 0, at: 0 }, st.run);
    for (const k of ['passed', 'review', 'ach']) if (!st[k] || typeof st[k] !== 'object') st[k] = {};
    if (!s || !s.dev || typeof s.dev !== 'object') {
      // Estado de antes de los contadores por dispositivo: lo que había pasa a la cuenta "base".
      st.dev = {};
      const had = st.xp || STATS.some(k => st.stats[k]);
      if (had) {
        const b = bucket();
        b.xp = st.xp || 0; b.c = Object.assign({}, st.courseXp); b.s = Object.assign({}, st.stats);
        if (st.daily && st.daily.day) b.d[st.daily.day] = { xp: st.daily.xp || 0 };
        st.dev.base = b;
      }
    }
    return st;
  }

  // Recalcula los totales a partir de las cuentas de cada dispositivo.
  function totals(s, day = today()) {
    s.xp = 0; s.courseXp = {}; s.stats = zeroStats(); s.skill = {};
    let dx = 0;
    for (const id in s.dev) {
      const b = s.dev[id];
      s.xp += b.xp || 0;
      for (const c in b.c) s.courseXp[c] = (s.courseXp[c] || 0) + b.c[c];
      for (const k of STATS) s.stats[k] += (b.s && b.s[k]) || 0;
      dx += (b.d && b.d[day] && b.d[day].xp) || 0;
      for (const c in b.k) { const a = s.skill[c] || (s.skill[c] = [0, 0]); a[0] += b.k[c][0]; a[1] += b.k[c][1]; }
    }
    s.daily = { day, xp: dx };
    return s;
  }

  const maxMap = (x = {}, y = {}) => { const m = Object.assign({}, x); for (const k in y) m[k] = Math.max(m[k] || 0, y[k] || 0); return m; };
  // Une mapas de pares [a, b] tomando el máximo de cada posición.
  const maxPairs = (x = {}, y = {}) => { const m = {}; for (const k of new Set([...Object.keys(x), ...Object.keys(y)])) { const a = x[k] || [0, 0], b = y[k] || [0, 0]; m[k] = [Math.max(a[0], b[0]), Math.max(a[1], b[1])]; } return m; };
  function trimDays(d) {
    const keys = Object.keys(d).sort();
    for (const k of keys.slice(0, Math.max(0, keys.length - KEEP_DAYS))) delete d[k];
    return d;
  }
  function mergeBucket(x = bucket(), y = bucket()) {
    const d = {};
    for (const k of new Set([...Object.keys(x.d || {}), ...Object.keys(y.d || {})])) d[k] = maxMap(x.d && x.d[k], y.d && y.d[k]);
    return { xp: Math.max(x.xp || 0, y.xp || 0), c: maxMap(x.c, y.c), s: maxMap(x.s, y.s), d: trimDays(d), k: maxPairs(x.k, y.k) };
  }

  // Une dos copias del progreso del mismo usuario (la local y la de la nube) sin perder nada.
  function merge(a, b) {
    if (!b || b.v !== 3) return a;
    if (!a || !a.savedAt) return totals(upgrade(b));
    const A = upgrade(a), B = upgrade(b);
    // Si una copia es de antes del último "Borrar progreso", no se une: se queda la borrada.
    if ((A.resetAt || 0) !== (B.resetAt || 0)) return totals((A.resetAt || 0) > (B.resetAt || 0) ? A : B);
    const newer = (A.savedAt || 0) >= (B.savedAt || 0) ? A : B, older = newer === A ? B : A;
    const m = clone(newer);
    m.done = Object.assign({}, older.done, newer.done);
    m.dev = {};
    for (const id of new Set([...Object.keys(A.dev), ...Object.keys(B.dev)])) m.dev[id] = mergeBucket(A.dev[id], B.dev[id]);
    m.passed = {};
    for (const k of new Set([...Object.keys(A.passed), ...Object.keys(B.passed)])) if (!m.done[k]) m.passed[k] = (A.passed[k] || 0) | (B.passed[k] || 0);
    m.run = clone((A.run.at || 0) >= (B.run.at || 0) ? A.run : B.run);
    m.run.best = Math.max(A.run.best || 0, B.run.best || 0, m.run.cur || 0);
    m.maxStreak = Math.max(A.maxStreak || 0, B.maxStreak || 0);
    m.review = maxPairs(A.review, B.review);
    m.ach = {};
    for (const k of new Set([...Object.keys(A.ach), ...Object.keys(B.ach)])) m.ach[k] = Math.min(A.ach[k] || Infinity, B.ach[k] || Infinity);
    const s = (A.lastDay || '') >= (B.lastDay || '') ? A : B;
    m.streak = s.streak; m.lastDay = s.lastDay;
    return totals(m);
  }

  /* Suma en la cuenta de este dispositivo.
     inc: { xp, course, sec, answered, correct, lessons, perfect, extras, retos, concept ('curso:día') } */
  function add(s, dev, inc, day = today()) {
    const b = s.dev[dev] || (s.dev[dev] = bucket());
    if (!b.k) b.k = {};
    if (inc.concept && inc.answered) { const k = b.k[inc.concept] || (b.k[inc.concept] = [0, 0]); k[0] += inc.correct || 0; k[1] += inc.answered; }
    const d = b.d[day] || (b.d[day] = {});
    if (inc.xp) {
      b.xp += inc.xp; d.xp = (d.xp || 0) + inc.xp;
      if (inc.course) b.c[inc.course] = (b.c[inc.course] || 0) + inc.xp;
    }
    for (const k of STATS) if (inc[k]) b.s[k] = (b.s[k] || 0) + inc[k];
    if (inc.answered) d.n = (d.n || 0) + inc.answered;
    if (inc.correct) d.ok = (d.ok || 0) + inc.correct;
    if (inc.sec) d.sec = (d.sec || 0) + inc.sec;
    trimDays(b.d);
    return totals(s, day);
  }

  /* Racha de secciones. key: 'curso:día:nivel' (como state.done), idx: posición de la sección en el nivel.
     Devuelve 'add' (sumó 1), 'same' (ya estaba aprobada) o 'reset' (fallo: racha a 0). */
  function section(s, key, idx, ok, now = Date.now()) {
    const r = s.run;
    if (!ok) { r.cur = 0; r.at = now; return 'reset'; }
    const bit = 1 << idx;
    if (s.done[key] || ((s.passed[key] || 0) & bit)) return 'same';
    s.passed[key] = (s.passed[key] || 0) | bit;
    r.cur += 1; r.best = Math.max(r.best || 0, r.cur); r.at = now;
    return 'add';
  }
  // Al completar un nivel, state.done ya dice que todas sus secciones están aprobadas.
  function levelDone(s, key) { s.done[key] = true; delete s.passed[key]; }

  /* ---------- repaso de fallos ---------- */
  const REVIEW_MAX = 300;
  function miss(s, ref, now = Date.now()) {
    const r = s.review[ref] || (s.review[ref] = [0, 0]); r[0] = now;
    const keys = Object.keys(s.review);
    if (keys.length > REVIEW_MAX) keys.sort((a, b) => Math.max(...s.review[a]) - Math.max(...s.review[b])).slice(0, keys.length - REVIEW_MAX).forEach(k => delete s.review[k]);
  }
  function fix(s, ref, now = Date.now()) { if (s.review[ref]) s.review[ref][1] = now; }
  // Fallos pendientes de un curso, del más antiguo al más reciente.
  const pending = (s, course) => Object.keys(s.review).filter(k => k.startsWith(course + ':') && s.review[k][0] > s.review[k][1])
    .sort((a, b) => s.review[a][0] - s.review[b][0]);
  const fixedCount = s => Object.values(s.review).filter(r => r[1] > r[0]).length;

  // Temas con menos aciertos de un curso: [{ day, ok, n, acc }], solo con al menos `min` respuestas.
  function weak(s, course, min = 4, below = 0.7) {
    return Object.entries(s.skill).filter(([k, v]) => k.startsWith(course + ':') && v[1] >= min && v[0] / v[1] < below)
      .map(([k, v]) => ({ day: +k.split(':')[1], ok: v[0], n: v[1], acc: v[0] / v[1] })).sort((a, b) => a.acc - b.acc);
  }
  // Actividad de los últimos n días (suma de todos los dispositivos), del más antiguo a hoy.
  function history(s, n = 14, end = new Date()) {
    const out = [];
    for (let i = n - 1; i >= 0; i--) {
      const d = new Date(end); d.setDate(d.getDate() - i);
      const key = dayStr(d), row = { day: key, xp: 0, sec: 0, n: 0, ok: 0 };
      for (const id in s.dev) { const x = s.dev[id].d && s.dev[id].d[key]; if (x) for (const f of ['xp', 'sec', 'n', 'ok']) row[f] += x[f] || 0; }
      out.push(row);
    }
    return out;
  }
  const studySeconds = s => { let t = 0; for (const id in s.dev) for (const k in s.dev[id].d || {}) t += s.dev[id].d[k].sec || 0; return t; };
  // Guarda la fecha de los logros que se cumplen ahora y no tenían fecha. Devuelve los nuevos.
  function unlock(s, ids, now = Date.now()) { const fresh = ids.filter(id => !s.ach[id]); fresh.forEach(id => { s.ach[id] = now; }); return fresh; }

  g.NibbleProgress = { MAXH, STATS, fresh, upgrade, totals, merge, add, section, levelDone, dayStr, today,
    miss, fix, pending, fixedCount, weak, history, studySeconds, unlock };
})(typeof window !== 'undefined' ? window : globalThis);
