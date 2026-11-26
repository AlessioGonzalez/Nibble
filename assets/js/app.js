/* Nibble: interfaz. Depende de content-api.js, i18n.js y store.js. */
(function () {
'use strict';
const VERSION = '3.0.0';
const Store = window.SintaxisStore;
const t = (k, v) => window.I18N.t(k, v);
const MAXH = Store.MAXH, HEART_MS = 2 * 60 * 1000, EXTRA_HEARTS = MAXH /* el nivel extra rellena todas las vidas */, DAYS = 30, PER_DAY = 8, RETO = 7;
const LOCALES = ['es', 'en', 'fr', 'it'];
const COURSES = ['python', 'java', 'javascript', 'cpp'];
const META = {
  python: { name: 'Python', short: 'Py', color: '#3672B0', dark: '#244F7D', ink: '#FFFFFF' },
  java: { name: 'Java', short: 'Java', color: '#D9601A', dark: '#A24611', ink: '#FFFFFF' },
  javascript: { name: 'JavaScript', short: 'JS', color: '#E3B30F', dark: '#A98404', ink: '#2B2205' },
  cpp: { name: 'C++', short: 'C++', color: '#16877F', dark: '#0D5E58', ink: '#FFFFFF' },
};
const KW = {
  python: 'def return if elif else for while in not and or is None True False class import from as with try except finally raise lambda yield pass break continue global nonlocal self async await match case',
  java: 'public private protected static void int double float long char boolean byte short class interface enum new return if else for while do switch case break default continue extends implements this super true false null try catch finally throw throws final var record import package abstract synchronized',
  javascript: 'const let var function return if else for of in while do switch case break continue new class extends this true false null undefined typeof instanceof async await try catch finally throw import export default static get set yield',
  cpp: 'int double float char bool void auto const return if else for while do switch case break continue class struct enum public private protected virtual override new delete nullptr true false template typename namespace using static this mutable default operator noexcept constexpr explicit friend inline throw try catch sizeof unsigned long short',
};
for (const k in KW) KW[k] = new Set(KW[k].split(' '));

let S = Store.state;          // estado del usuario (se reasigna tras login)
let CUR = null;               // { course, loc, data, fallback } contenido cargado
let route = { v: 'map' };
let openPop = null, justDone = null, justUnlock = null, firstRender = true, confirmReset = false, L = null;

/* ---------- utilidades ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const rich = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');
const shuffle = (a, rnd = Math.random) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const reduceMotion = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const dayStr = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const today = () => dayStr(new Date());
const yesterday = () => { const d = new Date(); d.setDate(d.getDate() - 1); return dayStr(d); };
const fmtMs = ms => { const s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
function toast(msg) { const el = document.createElement('div'); el.className = 'toast'; el.textContent = msg; document.body.appendChild(el); setTimeout(() => el.remove(), 2200); }

// Cada token se queda en su línea (sin \n dentro) porque codeBlock envuelve cada línea en un <span>.
const HL = {
  python: /(#.*$)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/gm,
  // C++: # es el preprocesador; (?<!\d) evita tomar 1'000'000 como un char.
  cpp: /(\/\/.*$|^[ \t]*#.*$)|("(?:\\.|[^"\\\n])*"|(?<!\d)'(?:\\.|[^'\\\n])*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/gm,
  // Java y JavaScript: una línea que empieza por # (un campo privado #saldo) no es preprocesador.
  other: /(\/\/.*$)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\\n])*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/gm,
};
function hl(code, lang) {
  const re = HL[lang] || HL.other;
  re.lastIndex = 0;
  let o = '', last = 0, m;
  while ((m = re.exec(code))) {
    o += esc(code.slice(last, m.index));
    const tk = m[0]; let cls = '';
    if (m[1]) cls = (tk.trim().startsWith('#') && lang !== 'python') ? 'pp' : 'cm';
    else if (m[2]) cls = 'st'; else if (m[3]) cls = 'nu';
    else if (KW[lang].has(tk)) cls = 'kw';
    else if (/^\s*\(/.test(code.slice(re.lastIndex))) cls = 'fn';
    else if (lang !== 'python' && /^[A-Z]/.test(tk)) cls = 'ty';
    o += cls ? `<span class="${cls}">${esc(tk)}</span>` : esc(tk);
    last = re.lastIndex;
  }
  return o + esc(code.slice(last));
}
function codeBlock(code, lang, blank) {
  const html = code.split('___').map(p => hl(p, lang)).join('\u0001');
  const lines = html.split('\n').map(l => `<span class="line">${l.replace('\u0001', blank || '___') || ' '}</span>`).join('');
  return `<pre class="code"><code>${lines}</code></pre>`;
}
const joinTokens = ts => { let s = ''; ts.forEach((x, i) => { const p = ts[i - 1]; if (i > 0 && !/^[().;:,\]]/.test(x) && !/[(.\[]$/.test(p)) s += ' '; s += x; }); return s; };
// Los teclados de iOS y Android cambian comillas, guiones y puntos ("puntuación inteligente"): se deshace antes de comparar.
const plain = s => s.replace(/[“”„‟″«»]/g, '"').replace(/[‘’‚‛′]/g, "'")
  .replace(/—/g, '--').replace(/–/g, '-').replace(/…/g, '...').replace(/[  ]/g, ' ');
const norm = s => plain(s).trim().replace(/\s+/g, ' ').replace(/;$/, '');

/* ---------- iconos ---------- */
const sv = (p, f) => `<svg viewBox="0 0 24 24" width="24" height="24" ${f ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"'} aria-hidden="true">${p}</svg>`;
const I = {
  flame: sv('<path d="M12 2.5c.7 3.4 4.8 5.6 4.8 10.6A4.8 4.8 0 0 1 12 18a4.8 4.8 0 0 1-4.8-4.9c0-2 .9-3.4 2-4.4 0 1.9.9 2.9 1.9 2.9 0-2.8-.9-5.8.9-9.1zM12 21.5a7 7 0 0 1-7-7c0-.6.1-1.2.2-1.7a6.8 6.8 0 0 0 13.6 0c.1.5.2 1.1.2 1.7a7 7 0 0 1-7 7z"/>', 1),
  heart: sv('<path d="M12 21s-8.5-5.3-8.5-11.3A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8.5 2.7C20.5 15.7 12 21 12 21z"/>', 1),
  lock: sv('<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>'),
  check: sv('<path d="M4.5 12.5l5 5 10-11"/>'),
  code: sv('<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15"/>'),
  play: sv('<path d="M8 5.5v13l10.5-6.5z"/>', 1),
  map: sv('<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6zM9 4v14M15 6v14"/>'),
  plus: sv('<path d="M12 5v14M5 12h14"/>'),
  book: sv('<path d="M4 19.5V5a2 2 0 0 1 2-2h14v15H6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h14"/>'),
  grid: sv('<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>'),
  user: sv('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  x: sv('<path d="M6 6l12 12M18 6 6 18"/>'),
  star: sv('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9z"/>', 1),
  trophy: sv('<path d="M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 5M17 6h3a3 3 0 0 1-3 5M12 14v4M8 21h8M9 18h6"/>'),
  crown: sv('<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z"/>', 1),
  target: sv('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>'),
  bolt: sv('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>', 1),
  cal: sv('<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
  sound: sv('<path d="M4 9v6h4l5 4V5L8 9zM16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>'),
  globe: sv('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
  search: sv('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  caret: sv('<path d="m6 9 6 6 6-6"/>').replace('<svg', '<svg class="caret"'),
  left: sv('<path d="m15 6-6 6 6 6"/>'),
  right: sv('<path d="m9 6 6 6-6 6"/>'),
  logout: sv('<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 17l-5-5 5-5M5 12h11"/>'),
  chat: sv('<path d="M20 12.5a7.5 7.5 0 0 1-11 6.6L4 20.5l1.4-4.6A7.5 7.5 0 1 1 20 12.5zM9 11h6M9 14.5h4"/>'),
  bulb: sv('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>'),
};

/* ---------- Kibi, la mascota: un hámster que aprende código a mordiscos ---------- */
const KB = { fur: '#EBA45E', line: '#B86F32', cream: '#FCE8CC', pink: '#F3A99C', ink: '#2B1A10', nose: '#8E4A35' };
function kibi(mood = 'idle', size = 64, extra = '') {
  let face;
  if (mood === 'happy') face = `<path d="M26 41q4-6 8 0M46 41q4-6 8 0" stroke="${KB.ink}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    <path d="M34 50q6 9 12 0z" fill="${KB.nose}"/><path d="M37.5 53.5q2.5 2.5 5 0" stroke="${KB.pink}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  else if (mood === 'sad') face = `<path d="M25 35l8 3M55 35l-8 3" stroke="${KB.line}" stroke-width="2.4" stroke-linecap="round"/>
    <circle class="eye" cx="30" cy="42" r="3.6" fill="${KB.ink}"/><circle class="eye" cx="50" cy="42" r="3.6" fill="${KB.ink}"/>
    <path d="M36 55q4-4 8 0" stroke="${KB.nose}" stroke-width="2.4" fill="none" stroke-linecap="round"/><path class="tear" d="M55 46q2.5 4 0 5.5q-2.5-1.5 0-5.5z" fill="#7CC4F2"/>`;
  else face = `<g class="eye"><circle cx="30" cy="40" r="4.4" fill="${KB.ink}"/><circle cx="31.5" cy="38.5" r="1.4" fill="#fff"/></g>
    <g class="eye"><circle cx="50" cy="40" r="4.4" fill="${KB.ink}"/><circle cx="51.5" cy="38.5" r="1.4" fill="#fff"/></g>
    <path d="M36.5 50.5q3.5 3 3.5 0q0 3 3.5 0" stroke="${KB.nose}" stroke-width="2" fill="none" stroke-linecap="round"/><rect x="38.4" y="51.6" width="3.2" height="3.2" rx=".8" fill="#fff"/>`;
  return `<svg class="kibi ${mood} ${extra}" width="${size}" height="${size}" viewBox="0 0 80 80" aria-hidden="true">
    <ellipse cx="40" cy="76" rx="21" ry="3" fill="#000" opacity=".12"/>
    <g class="ears"><circle cx="21" cy="21" r="9" fill="${KB.fur}" stroke="${KB.line}" stroke-width="1.6"/><circle cx="21" cy="21" r="4.8" fill="${KB.pink}"/>
    <circle cx="59" cy="21" r="9" fill="${KB.fur}" stroke="${KB.line}" stroke-width="1.6"/><circle cx="59" cy="21" r="4.8" fill="${KB.pink}"/></g>
    <g class="body"><ellipse cx="28" cy="73" rx="6.5" ry="3.4" fill="${KB.cream}" stroke="${KB.line}" stroke-width="1.4"/><ellipse cx="52" cy="73" rx="6.5" ry="3.4" fill="${KB.cream}" stroke="${KB.line}" stroke-width="1.4"/>
    <path d="M40 15C59 15 70 30 70 47S58 74 40 74 10 64 10 47 21 15 40 15z" fill="${KB.fur}" stroke="${KB.line}" stroke-width="1.6"/>
    <path d="M40 34c13 0 21 8 21 19s-9 19-21 19-21-8-21-19 8-19 21-19z" fill="${KB.cream}"/>
    <path d="M36 17q4 7 8 0" stroke="${KB.line}" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".7"/>
    <ellipse cx="22" cy="50" rx="5.5" ry="3.4" fill="${KB.pink}" opacity=".75"/><ellipse cx="58" cy="50" rx="5.5" ry="3.4" fill="${KB.pink}" opacity=".75"/>
    <ellipse cx="40" cy="46.5" rx="2.8" ry="2" fill="${KB.nose}"/>${face}
    <g class="card"><rect x="29" y="58" width="22" height="13" rx="3.5" fill="var(--lang)" stroke="var(--lang-dark)" stroke-width="1.6"/>
    <path d="M36 62l-3 2.5 3 2.5M44 62l3 2.5-3 2.5M41.5 61l-3 7" stroke="var(--lang-ink)" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
    <ellipse cx="29" cy="63" rx="4.2" ry="3.6" fill="${KB.cream}" stroke="${KB.line}" stroke-width="1.4"/><ellipse cx="51" cy="63" rx="4.2" ry="3.6" fill="${KB.cream}" stroke="${KB.line}" stroke-width="1.4"/></g></svg>`;
}

/* ---------- sonido ---------- */
let AC = null;
function sfx(kind) {
  if (!S.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume(); // iOS lo crea en pausa hasta que se reanuda tras un toque
    const seq = { ok: [[660, 0], [990, .09]], bad: [[220, 0], [165, .12]], combo: [[784, 0], [988, .07], [1319, .14]], win: [[523, 0], [659, .1], [784, .2], [1046, .32], [1319, .44]], heart: [[880, 0], [1175, .1]] }[kind];
    seq.forEach(([f, tt]) => {
      const o = AC.createOscillator(), gn = AC.createGain(), t0 = AC.currentTime + tt;
      o.type = kind === 'bad' ? 'square' : 'triangle'; o.frequency.value = f;
      gn.gain.setValueAtTime(0.0001, t0);
      gn.gain.exponentialRampToValueAtTime(kind === 'bad' ? 0.045 : 0.12, t0 + 0.02);
      gn.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.24);
      o.connect(gn).connect(AC.destination); o.start(t0); o.stop(t0 + 0.26);
    });
  } catch (e) { /* sin audio */ }
}

/* ---------- vidas, racha y meta ---------- */
function normalizeDay() {
  if (S.lastDay && S.lastDay !== today() && S.lastDay !== yesterday()) S.streak = 0;
  if (S.daily.day !== today()) S.daily = { day: today(), xp: 0 };
}
function regen() {
  if (S.hearts >= MAXH) { S.hearts = MAXH; return 0; }
  if (!S.heartsTs) S.heartsTs = Date.now();
  const n = Math.floor((Date.now() - S.heartsTs) / HEART_MS);
  if (n > 0) { const b = S.hearts; S.hearts = Math.min(MAXH, S.hearts + n); S.heartsTs += n * HEART_MS; if (S.hearts >= MAXH) S.heartsTs = 0; return S.hearts - b; }
  return 0;
}
const loseHeart = () => { if (S.hearts >= MAXH) S.heartsTs = Date.now(); S.hearts = Math.max(0, S.hearts - 1); };
const addHearts = n => { const b = S.hearts; S.hearts = Math.min(MAXH, S.hearts + n); if (S.hearts >= MAXH) S.heartsTs = 0; return S.hearts - b; };
const nextHeartMs = () => S.hearts >= MAXH ? 0 : Math.max(0, HEART_MS - (Date.now() - S.heartsTs));
const timerText = () => S.hearts >= MAXH ? t('hearts.full') : t('hearts.next', { t: fmtMs(nextHeartMs()) });
function bumpStreak() {
  const d = today(); if (S.lastDay === d) return false;
  S.streak = S.lastDay === yesterday() ? S.streak + 1 : 1; S.lastDay = d; S.maxStreak = Math.max(S.maxStreak || 0, S.streak); return true;
}

/* ---------- progreso ---------- */
const nodeKey = (c, d, k) => `${c}:${d}:${k}`;
function currentIndex(c) { for (let i = 0; i < DAYS * PER_DAY; i++) if (!S.done[nodeKey(c, Math.floor(i / PER_DAY), i % PER_DAY)]) return i; return DAYS * PER_DAY; }
const doneCount = c => { let n = 0; for (let i = 0; i < DAYS * PER_DAY; i++) if (S.done[nodeKey(c, Math.floor(i / PER_DAY), i % PER_DAY)]) n++; return n; };
const dayDone = (c, d) => { let n = 0; for (let k = 0; k < PER_DAY; k++) if (S.done[nodeKey(c, d, k)]) n++; return n; };
const currentDay = c => Math.min(DAYS - 1, Math.floor(currentIndex(c) / PER_DAY));
const dayUnlocked = (c, d) => d * PER_DAY <= currentIndex(c);
const phase = d => (d >= 20 ? 2 : d >= 10 ? 1 : 0);

/* ---------- contenido ---------- */
const pending = {};
function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => { s.remove(); rej(new Error(src)); }; document.head.appendChild(s); }); }
async function getContent(course, loc) {
  const C = window.Sintaxis.content;
  if (C[course]?.[loc]) return { course, loc, data: C[course][loc], fallback: false };
  const k = course + '/' + loc;
  if (!pending[k]) pending[k] = loadScript(`content/${course}/${loc}.js?v=${VERSION}`).catch(() => null);
  await pending[k];
  if (C[course]?.[loc]) return { course, loc, data: C[course][loc], fallback: false };
  if (loc !== 'es') { const r = await getContent(course, 'es'); return r && Object.assign({}, r, { fallback: true }); }
  return null;
}
async function loadCurrent() {
  const r = await getContent(S.course, S.locale);
  CUR = r ? r : { course: S.course, loc: S.locale, data: null, fallback: false };
}
const dayData = d => CUR && CUR.data && CUR.data.days[d];
// Un curso puede estar a medio escribir: los días que faltan se muestran como "Próximamente".
const dayTitle = d => (dayData(d) ? dayData(d).t : t('day.soon'));

/* ---------- navegación ---------- */
function parseHash() {
  const h = location.hash.replace(/^#/, '');
  let m;
  if ((m = h.match(/^day-(\d+)(?:-(guide|practice))?$/))) return { v: 'day', d: Math.max(0, Math.min(DAYS - 1, +m[1] - 1)), tab: m[2] || null };
  if (h === 'courses' || h === 'profile') return { v: h };
  if (h === 'sugerencias') return { v: 'suggest' };
  return { v: 'map' };
}
function go(hash) { if (location.hash === '#' + hash) render(true); else location.hash = hash; }
const dayHash = (d, tab) => `day-${d + 1}${tab ? '-' + tab : ''}`;

/* ---------- piezas comunes ---------- */
function applyTheme() {
  const m = META[S.course], r = document.documentElement.style;
  r.setProperty('--lang', m.color); r.setProperty('--lang-dark', m.dark); r.setProperty('--lang-ink', m.ink);
  document.documentElement.lang = S.locale;
}
const badge = c => { const m = META[c]; return `<span class="badge" style="--c:${m.color};--cd:${m.dark};--ci:${m.ink}">${esc(m.short)}</span>`; };
function heartsRow(big) { let h = ''; for (let i = 0; i < MAXH; i++) h += I.heart.replace('<svg', `<svg class="${i < S.hearts ? '' : 'off'}"`); return `<div class="hearts-row ${big ? 'big' : ''}" aria-label="${t('hearts.aria', { n: S.hearts, m: MAXH })}">${h}</div>`; }
function langPick() { return `<div class="langpick" role="group" aria-label="${t('profile.lang')}">${LOCALES.map(l => `<button class="${S.locale === l ? 'on' : ''}" data-locale="${l}" aria-pressed="${S.locale === l}" title="${t('lang.' + l)}">${l}</button>`).join('')}</div>`; }
function syncHTML() {
  const st = Store.sync;
  return `<div class="sync ${st === 'ok' ? 'ok' : st === 'busy' ? 'busy' : st === 'err' ? 'err' : ''}" data-sync><i></i>${t('sync.' + st)}</div>`;
}

function navItems() {
  const cd = currentDay(S.course);
  return [
    ['map', t('nav.map'), I.map, '#map'],
    ['today', t('nav.today'), I.play, '#' + dayHash(cd)],
    ['extra', t('nav.extra'), I.plus, null],
    ['courses', t('nav.courses'), I.grid, '#courses'],
    ['profile', t('nav.profile'), I.user, '#profile'],
    ['suggest', t('nav.suggest'), I.chat, '#sugerencias'],
  ];
}
function navHTML(compact) {
  const cd = currentDay(S.course);
  // En el menú inferior del móvil no cabe: allí se llega desde el perfil.
  return navItems().filter(([id]) => !compact || id !== 'suggest').map(([id, label, ic, href]) => {
    if (id === 'extra') return `<button class="navbtn extra" data-act="extra" title="${t('hearts.extraBtn', { n: EXTRA_HEARTS })}">${ic}<span class="lbl">${label}</span></button>`;
    const on = (id === 'map' && route.v === 'map') || (id === 'today' && route.v === 'day' && route.d === cd) || id === route.v;
    return `<button class="navbtn ${on ? 'on' : ''}" data-go="${href.slice(1)}" ${on ? 'aria-current="page"' : ''}>${ic}<span class="lbl">${label}</span></button>`;
  }).join('') + (compact ? '' : `<button class="navbtn" data-act="palette">${I.search}<span class="lbl">${t('nav.search')}</span><span class="kbd">Ctrl K</span></button>`);
}
function statsHTML() {
  const on = S.lastDay === today();
  return `<span class="stat flame ${on ? 'on' : ''}" title="${t('stat.streak')}">${I.flame}<b>${S.streak}</b></span>
  <span class="stat xp" title="${t('stat.xp')}">${I.bolt}<b>${S.xp}</b></span>
  <button class="stat heart" data-act="hearts" title="${timerText()}" aria-label="${t('hearts.aria', { n: S.hearts, m: MAXH })}">${I.heart}<b>${S.hearts}</b></button>`;
}
function courseMenu() {
  return `<div class="dropdown" role="menu"><p class="dh">${t('top.courses')}</p>${COURSES.map(c => {
    const p = Math.round(doneCount(c) / (DAYS * PER_DAY) * 100);
    return `<button class="ditem ${c === S.course ? 'on' : ''}" role="menuitem" data-course="${c}">${badge(c)}<span><b>${META[c].name}</b><div class="meter lang" style="--c:${META[c].color}"><i style="width:${p}%"></i></div></span><small>${p}%</small></button>`;
  }).join('')}</div>`;
}
let menuOpen = false;
function topbarHTML() {
  return `<div class="dropwrap"><button class="cswitch" data-act="coursemenu" aria-haspopup="menu" aria-expanded="${menuOpen}">${badge(S.course)}<span class="cname">${META[S.course].name}</span>${I.caret}</button>${menuOpen ? courseMenu() : ''}</div>
  <button class="searchbtn" data-act="palette" aria-label="${t('nav.search')}">${I.search}<span class="lbl">${t('nav.search')}</span><span class="kbd">Ctrl K</span></button>
  <span class="grow"></span><div class="stats">${statsHTML()}</div>`;
}
function railHTML() {
  const dx = S.daily.day === today() ? S.daily.xp : 0, pct = Math.min(100, dx / S.goal * 100);
  return `<div class="card"><div class="goal-h"><h3>${t('hearts.title')}</h3><span class="timer" data-timer>${timerText()}</span></div>${heartsRow()}
    <p>${t('hearts.desc', { n: EXTRA_HEARTS })}</p><button class="btn gold small" data-act="extra">${I.plus}${t('hearts.extraBtn', { n: EXTRA_HEARTS })}</button></div>
  <div class="card"><div class="goal-h"><h3>${t('goal.title')}</h3><span>${dx}/${S.goal} XP</span></div>
    <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${S.goal}" aria-valuenow="${dx}"><i style="width:${pct}%"></i></div>
    <p>${dx >= S.goal ? t('goal.done') : t('goal.left', { n: S.goal - dx })}</p></div>
  <div class="card">${syncHTML()}${Store.user ? `<p class="note">${esc(Store.user.email || '')}</p>` : ''}</div>`;
}
function renderChrome() {
  $('#brand').innerHTML = `${kibi('idle', 38)}<span class="lbl">Nibble</span>`;
  $('#sidenav').innerHTML = navHTML();
  $('#bottomnav').innerHTML = navHTML(true);
  $('#topbar').innerHTML = topbarHTML();
  $('#rail').innerHTML = railHTML();
  const who = Store.user ? `<div class="who"><span class="av">${esc((Store.user.email || '?')[0].toUpperCase())}</span><span>${esc(Store.user.email || '')}</span><button class="iconbtn" data-act="signout" title="${t('profile.signout')}" aria-label="${t('profile.signout')}">${I.logout}</button></div>` : syncHTML();
  $('#sidefoot').innerHTML = langPick() + who;
}

/* ---------- vista: mapa ---------- */
function renderMap() {
  const c = S.course, data = CUR.data, cur = currentIndex(c), cd = currentDay(c), dn = doneCount(c);
  let h = `<div class="wrap">`;
  if (CUR.fallback) h += `<p class="notice">${t('content.fallback')}</p>`;
  h += `<section class="hero">${kibi('idle', 96, 'float')}<div>
    <h1>${t('map.title', { c: META[c].name })}</h1>
    <p>${cur >= DAYS * PER_DAY ? t('map.allDone') : t('map.dayOf', { d: cd + 1, t: esc(dayTitle(cd)) })}</p>
    <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${DAYS * PER_DAY}" aria-valuenow="${dn}"><i style="width:${dn / (DAYS * PER_DAY) * 100}%"></i></div>
    <div class="row"><button class="btn small" data-go="${dayHash(cd)}">${I.play}${dn ? t('map.continue', { d: cd + 1 }) : t('map.start')}</button><small>${t('map.levels', { n: dn, m: DAYS * PER_DAY })}</small></div></div></section>`;
  if (S.stats.lessons === 0) h += `<div class="welcome">${kibi('idle', 56)}<div><b>${t('map.welcomeTitle')}</b><p>${t('map.welcome')}</p></div></div>`;
  for (let p = 0; p < 3; p++) {
    h += `<div class="phase-h"><h2>${t('phase.' + p)}</h2><span>${t('phase.days', { a: p * 10 + 1, b: p * 10 + 10 })}</span></div><div class="daygrid">`;
    for (let d = p * 10; d < p * 10 + 10; d++) {
      const n = dayDone(c, d), unlocked = dayUnlocked(c, d), isCur = d === cd && cur < DAYS * PER_DAY, done = n === PER_DAY;
      const soon = !dayData(d);
      const cls = soon ? 'lock' : done ? 'done' : isCur ? 'cur' : !unlocked ? 'lock' : '';
      const ic = soon ? I.lock : done ? I.check : !unlocked ? I.lock : isCur ? I.play : '';
      h += `<button class="daycard ${cls}" style="--i:${d % 10}" data-go="${dayHash(d)}" aria-label="${t('day.n', { d: d + 1 })}: ${esc(dayTitle(d))}">
        ${ic ? ic.replace('<svg', '<svg class="ic"') : ''}<span class="n">${t('day.n', { d: d + 1 })}</span><b>${esc(dayTitle(d))}</b>
        <span class="ring" style="--p:${n / PER_DAY * 100}" data-v="${n}/${PER_DAY}"></span></button>`;
    }
    h += `</div>`;
  }
  return h + `</div>`;
}

/* ---------- vista: día ---------- */
function renderDay() {
  const c = S.course, d = route.d, day = dayData(d), cur = currentIndex(c), unlocked = dayUnlocked(c, d), n = dayDone(c, d);
  if (!day) return `<div class="wrap"><div class="nextday">${kibi('idle', 90, 'float')}<h2>${t('day.n', { d: d + 1 })}: ${t('day.soon')}</h2><p>${t('day.soonDesc')}</p>
    <button class="btn primary" data-go="map">${t('nav.map')}</button></div></div>`;
  const tab = route.tab || (unlocked && n > 0 ? 'practice' : unlocked ? 'guide' : 'guide');
  let dots = ''; for (let k = 0; k < PER_DAY; k++) dots += `<i class="${S.done[nodeKey(c, d, k)] ? 'on' : ''} ${k === RETO ? 'reto' : ''}"></i>`;
  let h = `<div class="wrap">${CUR.fallback ? `<p class="notice">${t('content.fallback')}</p>` : ''}
   <header class="dayhead"><div class="top"><button class="crumb" data-go="map">${I.left}${t('nav.map')}</button><span class="lvl">${t('lvl.' + phase(d))}</span>
     <div class="nav2"><button data-go="${dayHash(d - 1)}" ${d === 0 ? 'disabled' : ''} aria-label="${t('day.prev')}">${I.left}</button><button data-go="${dayHash(d + 1)}" ${d === DAYS - 1 ? 'disabled' : ''} aria-label="${t('day.next')}">${I.right}</button></div></div>
     <div><p class="n">${t('day.nOf', { d: d + 1 })}</p><h1>${esc(day.t)}</h1><p>${esc(day.d)}</p></div><div class="dots" aria-label="${n}/${PER_DAY}">${dots}</div></header>
   <div class="tabs" role="tablist" data-tab="${tab}"><span class="slider"></span>
     <button role="tab" aria-selected="${tab === 'guide'}" class="${tab === 'guide' ? 'on' : ''}" data-go="${dayHash(d, 'guide')}">${I.book}${t('day.guide')}</button>
     <button role="tab" aria-selected="${tab === 'practice'}" class="${tab === 'practice' ? 'on' : ''}" data-go="${dayHash(d, 'practice')}">${I.target}${t('day.practice')}</button></div>`;
  if (tab === 'guide') {
    h += `<div class="guide">${day.guide.map((s, i) => `<section class="gsec ${s.real ? 'real' : ''}">
      <h2>${esc(s.h)}${s.real ? `<span class="tag-real">${I.bulb}${t('day.real')}</span>` : ''}</h2>
      ${s.p.map(p => `<p>${rich(p)}</p>`).join('')}
      ${s.code ? codeBlock(s.code, c) + `<button class="copybtn" data-copy="${d}:${i}">${t('day.copy')}</button>` : ''}</section>`).join('')}
      <div class="guide-end"><button class="btn primary" data-go="${dayHash(d, 'practice')}">${I.target}${t('day.startPractice')}</button></div></div>`;
  } else if (!unlocked) {
    h += `<div class="nextday">${I.lock.replace('<svg', '<svg style="width:40px;height:40px"')}<h2>${t('day.locked')}</h2><p>${t('day.lockedDesc')}</p>
      <button class="btn gold" data-jump="${d}">${t('day.jump')}</button></div>`;
  } else {
    h += `<div class="path">`;
    for (let k = 0; k < PER_DAY; k++) {
      const gi = d * PER_DAY + k, key = nodeKey(c, d, k), st = S.done[key] ? 'done' : gi === cur ? 'current' : 'locked';
      const off = k === RETO ? 0 : Math.round(Math.sin(k * 1.2) * 56), open = openPop === key, isReto = k === RETO;
      const icon = st === 'done' ? I.check : st === 'locked' ? I.lock : isReto ? I.crown : I.code;
      h += `<div class="nwrap ${st} ${open ? 'open' : ''} ${justDone === key ? 'just' : ''} ${justUnlock === key ? 'unlock' : ''}" style="--off:${off}px">
        ${st === 'current' && !open ? `<span class="start-tag">${isReto ? t('node.retoTag') : t('node.start')}</span>` : ''}
        <button class="node ${isReto ? 'reto' : ''} ${st === 'locked' ? 'locked' : ''}" data-node="${key}" aria-expanded="${open}" aria-label="${isReto ? t('node.reto') : t('node.practice', { n: k + 1 })}">${icon}${!isReto && st !== 'done' ? `<span class="num">${k + 1}</span>` : ''}</button>
        ${st === 'current' ? `<span class="ring ${isReto ? 'sq' : ''}"></span>` : ''}${open ? popHTML(d, k, st) : ''}</div>`;
    }
    h += `<div class="path-kibi ${Math.sin(3 * 1.2) > 0 ? 'l' : 'r'}">${kibi('idle', 88, 'float')}</div></div>`;
    if (S.done[nodeKey(c, d, RETO)]) h += `<div class="nextday">${I.trophy.replace('<svg', '<svg style="width:44px;height:44px;color:var(--gold)"')}<h2>${d === DAYS - 1 ? t('day.allDone') : t('day.complete')}</h2>${d < DAYS - 1 ? `<button class="btn primary" data-go="${dayHash(d + 1)}">${t('day.goNext', { d: d + 2 })}</button>` : ''}</div>`;
  }
  return h + `</div>`;
}
function popHTML(d, k, st) {
  const isReto = k === RETO, title = isReto ? t('node.reto') : t('node.practice', { n: k + 1 });
  if (st === 'locked') return `<div class="pop locked" role="dialog"><h3>${title}</h3><p>${t('node.lockedDesc')}</p></div>`;
  const xp = isReto ? 20 : 5, rxp = isReto ? 5 : 2;
  return `<div class="pop ${isReto ? 'reto' : ''}" role="dialog"><h3>${title}</h3><p>${t(isReto ? 'node.retoDesc' : 'node.practiceDesc', { n: sectionsOf(k) })}${st === 'done' ? ' ' + t('node.done') : ''}</p>
    <button class="btn" data-start="${nodeKey(S.course, d, k)}">${st === 'done' ? t('node.replay', { xp: rxp }) : t('node.go', { xp })}</button></div>`;
}

/* ---------- vista: cursos ---------- */
function renderCourses() {
  let h = `<div class="page"><h1>${t('courses.title')}</h1><p class="lead">${t('courses.lead')}</p><div class="ccards">`;
  for (const c of COURSES) {
    const m = META[c], dn = doneCount(c), p = Math.round(dn / (DAYS * PER_DAY) * 100);
    h += `<article class="ccard ${c === S.course ? 'on' : ''}" style="--c:${m.color};--cd:${m.dark};--ci:${m.ink}">
      <div class="top">${badge(c)}<h3>${m.name}</h3></div><p>${t('course.' + c)}</p>
      <p>${dn === DAYS * PER_DAY ? t('courses.done') : t('courses.next', { d: currentDay(c) + 1 })}</p>
      <div class="meter lang"><i style="width:${p}%"></i></div>
      <div class="foot"><small>${t('map.levels', { n: dn, m: DAYS * PER_DAY })}</small><button class="btn small ${c === S.course ? 'primary' : 'ghost'}" data-course="${c}" data-open="1">${dn ? t('courses.continue') : t('courses.start')}</button></div></article>`;
  }
  return h + `</div></div>`;
}

/* ---------- vista: perfil ---------- */
const ACH = [
  ['first', () => S.stats.lessons >= 1, I.code],
  ['perfect', () => S.stats.perfect >= 1, I.star],
  ['reto', () => S.stats.retos >= 1, I.crown],
  ['extra', () => S.stats.extras >= 1, I.heart],
  ['streak3', () => (S.maxStreak || 0) >= 3, I.flame],
  ['week', () => COURSES.some(c => currentIndex(c) >= 7 * PER_DAY), I.cal],
  ['half', () => COURSES.some(c => currentIndex(c) >= 15 * PER_DAY), I.target],
  ['poly', () => COURSES.filter(c => doneCount(c) > 0).length >= 2, I.globe],
  ['xp1000', () => S.xp >= 1000, I.bolt],
  ['course', () => COURSES.some(c => doneCount(c) === DAYS * PER_DAY), I.trophy],
];
function renderProfile() {
  const acc = S.stats.answered ? Math.round(S.stats.correct / S.stats.answered * 100) : 0;
  let h = `<div class="page"><h1>${t('profile.title')}</h1>
   <div class="ptiles">
    <div class="ptile" style="color:var(--flame)">${I.flame}<div><b>${S.streak}</b><span>${t('profile.streak', { n: S.streak })}</span></div></div>
    <div class="ptile" style="color:var(--gold)">${I.bolt}<div><b>${S.xp}</b><span>${t('profile.xp')}</span></div></div>
    <div class="ptile" style="color:var(--ok)">${I.check}<div><b>${S.stats.lessons}</b><span>${t('profile.levels')}</span></div></div>
    <div class="ptile" style="color:var(--gem)">${I.target}<div><b>${acc}%</b><span>${t('profile.acc')}</span></div></div>
   </div><h2>${t('profile.courses')}</h2><div class="plist">`;
  for (const c of COURSES) {
    const p = Math.round(doneCount(c) / (DAYS * PER_DAY) * 100);
    h += `<div class="prow">${badge(c)}<div><b>${META[c].name}</b><p>${p === 100 ? t('courses.done') : t('courses.next', { d: currentDay(c) + 1 })}</p><div class="meter lang" style="--c:${META[c].color};margin-top:8px;height:8px"><i style="width:${p}%"></i></div></div><small>${p}%</small></div>`;
  }
  h += `</div><h2>${t('profile.ach')}</h2><div class="plist">`;
  ACH.forEach(([id, f, ic]) => { const on = f(); h += `<div class="prow ${on ? '' : 'off'}"><span class="medal ${on ? 'on' : ''}">${ic}</span><div><b>${t('ach.' + id)}</b><p>${t('ach.' + id + '.d')}</p></div><small>${on ? t('profile.achieved') : t('profile.pending')}</small></div>`; });
  h += `</div><h2>${t('profile.settings')}</h2><div class="plist">
    <div class="prow"><span class="medal">${I.globe}</span><div><b>${t('profile.lang')}</b><p>${t('profile.langDesc')}</p></div>${langPick()}</div>
    <div class="prow"><span class="medal">${I.target}</span><div><b>${t('goal.title')}</b><p>${t('profile.goalDesc')}</p></div>
      <div class="seg" role="group" aria-label="${t('goal.title')}">${[10, 20, 30, 50].map(gl => `<button class="${S.goal === gl ? 'on' : ''}" data-goal="${gl}" aria-pressed="${S.goal === gl}">${gl}</button>`).join('')}</div></div>
    <div class="prow"><span class="medal">${I.sound}</span><div><b>${t('profile.sound')}</b><p>${t('profile.soundDesc')}</p></div>
      <button class="switch" role="switch" id="soundSwitch" aria-checked="${S.sound}" aria-label="${t('profile.sound')}" data-act="sound"></button></div>
    <div class="prow"><span class="medal">${I.x}</span><div><b>${t('profile.reset')}</b><p>${confirmReset ? t('profile.resetConfirm') : t('profile.resetDesc')}</p></div>
      ${confirmReset ? `<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end"><button class="btn small ghost" data-act="reset-cancel">${t('common.cancel')}</button><button class="btn small danger" data-act="reset-yes">${t('profile.resetBtn')}</button></div>` : `<button class="btn small ghost" data-act="reset">${t('profile.resetBtn')}</button>`}</div>
    <div class="prow"><span class="medal">${I.chat}</span><div><b>${t('nav.suggest')}</b><p>${t('sug.lead')}</p></div><button class="btn small ghost" data-go="sugerencias">${t('sug.send')}</button></div>
   </div><h2>${t('profile.account')}</h2><div class="plist">
    ${Store.user ? `<div class="prow"><span class="medal">${I.user}</span><div><b>${esc(Store.user.email || '')}</b>${syncHTML()}</div><button class="btn small ghost" data-act="signout">${t('profile.signout')}</button></div>`
      : `<div class="prow"><span class="medal">${I.user}</span><div><b>${t('profile.localTitle')}</b><p>${t('profile.localMode')}</p></div><span></span></div>`}
   </div></div>`;
  return h;
}

/* ---------- vista: sugerencias ---------- */
const SUG_KINDS = ['idea', 'bug', 'content', 'other'], SUG_MAX = 2000, SUG_WAIT = 60 * 1000;
let sug = { kind: 'idea', msg: '', ctx: true, state: '', err: '', url: '' };
function renderSuggest() {
  if (sug.state === 'ok') return `<div class="page"><div class="sug-done">${kibi('happy', 110)}<h1>${t('sug.ok')}</h1><p>${t('sug.okDesc')}</p>
    <button class="btn primary" data-act="sug-again">${t('sug.again')}</button></div></div>`;
  if (sug.state === 'github') return `<div class="page"><div class="sug-done">${kibi('idle', 110)}<h1>${t('sug.ok')}</h1><p>${t('sug.github')}</p>
    <a class="btn primary" href="${esc(sug.url)}" target="_blank" rel="noopener">${t('sug.openGithub')}</a><button class="btn ghost" data-act="sug-again">${t('sug.again')}</button></div></div>`;
  const where = Store.user ? 'sug.noteDb' : Store.cfg.feedbackUrl ? 'sug.noteGithub' : 'sug.off';
  return `<div class="page"><h1>${t('sug.title')}</h1><p class="lead">${t('sug.lead')}</p>
   <form id="sugForm" class="sugcard" novalidate>
    <div class="field"><span class="flabel" id="sugKindL">${t('sug.kind')}</span><div class="seg sugkinds" role="group" aria-labelledby="sugKindL">${SUG_KINDS.map(k => `<button type="button" class="${sug.kind === k ? 'on' : ''}" data-sugkind="${k}" aria-pressed="${sug.kind === k}">${t('sug.kind.' + k)}</button>`).join('')}</div></div>
    <div class="field"><label for="sugMsg">${t('sug.msg')}</label><textarea id="sugMsg" rows="6" maxlength="${SUG_MAX}" placeholder="${esc(t('sug.msgPh'))}">${esc(sug.msg)}</textarea><small class="count" id="sugCount">${sug.msg.length}/${SUG_MAX}</small></div>
    <label class="check"><input type="checkbox" id="sugCtx" ${sug.ctx ? 'checked' : ''}> ${t('sug.context', { c: META[S.course].name, d: currentDay(S.course) + 1 })}</label>
    ${sug.err ? `<p class="msg err" role="alert">${esc(sug.err)}</p>` : ''}
    <div class="sug-foot"><p class="note">${t(where)}</p><button class="btn primary" type="submit" ${sug.state === 'sending' || where === 'sug.off' ? 'disabled' : ''}>${I.chat}${t(sug.state === 'sending' ? 'sug.sending' : 'sug.send')}</button></div>
   </form></div>`;
}
async function sendSuggestion() {
  const msg = $('#sugMsg').value.trim();
  sug.msg = msg; sug.ctx = $('#sugCtx').checked; sug.err = '';
  let last = 0; try { last = +localStorage.getItem('nibble.sugAt') || 0; } catch (e) { /* */ }
  if (msg.length < 10) sug.err = t('sug.short');
  else if (Date.now() - last < SUG_WAIT) sug.err = t('sug.wait');
  if (sug.err) { render(); $('#sugMsg').focus(); return; }
  sug.state = 'sending'; render();
  const row = { kind: sug.kind, message: msg, locale: S.locale, course: sug.ctx ? S.course : null, day: sug.ctx ? currentDay(S.course) + 1 : null };
  try {
    const r = await Store.sendSuggestion(row);
    sug = { kind: sug.kind, msg: '', ctx: sug.ctx, state: r.via === 'github' ? 'github' : 'ok', err: '', url: r.url || '' };
    try { localStorage.setItem('nibble.sugAt', String(Date.now())); } catch (e) { /* */ }
  } catch (err) {
    sug.state = ''; sug.err = err && err.message === 'off' ? t('sug.off') : t('sug.err');
  }
  if (route.v === 'suggest') render();
}

/* ---------- render principal ---------- */
function render(swap) {
  if (!CUR) return;
  normalizeDay(); regen(); applyTheme(); renderChrome();
  const m = $('#main');
  m.classList.toggle('swap', !!swap && !firstRender);
  if (!CUR.data && !['profile', 'courses', 'suggest'].includes(route.v)) m.innerHTML = `<div class="wrap"><div class="nextday">${kibi('sad', 90)}<h2>${t('content.missing')}</h2><button class="btn primary" data-go="courses">${t('nav.courses')}</button></div></div>`;
  else m.innerHTML = route.v === 'day' ? renderDay() : route.v === 'courses' ? renderCourses() : route.v === 'profile' ? renderProfile() : route.v === 'suggest' ? renderSuggest() : renderMap();
  firstRender = false;
}
async function onRoute() {
  route = parseHash(); openPop = null; menuOpen = false;
  render(true);
  window.scrollTo(0, 0);
}
function scrollToCurrent() {
  const el = document.querySelector('.nwrap.current') || document.querySelector('.daycard.cur');
  if (el) el.scrollIntoView({ block: 'center', behavior: reduceMotion() ? 'auto' : 'smooth' });
}

/* ---------- modales ---------- */
function openModal(html, cls = 'dialog') {
  const m = $('#modal'); m.innerHTML = `<div class="${cls}" role="dialog" aria-modal="true">${html}</div>`; m.hidden = false;
  const f = m.querySelector('input, .acts .btn, button'); f && f.focus();
}
function closeModal() { const m = $('#modal'); m.hidden = true; m.innerHTML = ''; }
function heartsModal() {
  regen();
  openModal(`<div class="center">${heartsRow(true)}<h2>${S.hearts === 0 ? t('hearts.none') : t('hearts.have', { n: S.hearts, m: MAXH })}</h2>
   <p>${t('hearts.modal', { n: EXTRA_HEARTS })}</p><p class="timer" data-timer>${timerText()}</p></div>
   <div class="acts"><button class="btn gold" data-act="extra">${I.plus}${t('hearts.extraBtn', { n: EXTRA_HEARTS })}</button><button class="btn ghost" data-act="close">${t('common.close')}</button></div>`);
}
function jumpModal(d) {
  openModal(`<p class="note">${t('jump.label')}</p><h2>${t('jump.title', { d: d + 1 })}</h2><p>${t('jump.desc', { t: esc(dayTitle(d)) })}</p>
   <div class="acts"><button class="btn ghost" data-act="close">${t('common.cancel')}</button><button class="btn primary" data-test="${d}">${t('jump.start')}</button></div>`);
}
function pwModal() {
  openModal(`<h2>${t('auth.newPw')}</h2><form id="pwForm" class="field"><label for="newpw">${t('auth.password')}</label><input id="newpw" type="password" minlength="6" autocomplete="new-password" required><div id="pwMsg"></div>
   <div class="acts"><button class="btn primary" type="submit">${t('auth.savePw')}</button></div></form>`);
  $('#pwForm').addEventListener('submit', async e => {
    e.preventDefault();
    try { await Store.updatePassword($('#newpw').value); $('#pwMsg').innerHTML = `<p class="msg ok">${t('auth.pwSaved')}</p>`; setTimeout(closeModal, 1200); }
    catch (err) { $('#pwMsg').innerHTML = `<p class="msg err">${esc(authError(err))}</p>`; }
  });
}

/* ---------- paleta de comandos (Ctrl K) ---------- */
let palSel = 0, palItems = [];
function paletteItems(q) {
  q = q.trim().toLowerCase();
  const items = [];
  const match = s => !q || s.toLowerCase().includes(q);
  if (CUR.data) CUR.data.days.forEach((d, i) => {
    const label = `${t('day.n', { d: i + 1 })}: ${d.t}`;
    if (match(label) || match(d.d) || q === String(i + 1)) items.push({ g: 'days', ic: dayUnlocked(S.course, i) ? I.book : I.lock, label, sub: `${dayDone(S.course, i)}/${PER_DAY}`, run: () => go(dayHash(i)) });
  });
  COURSES.forEach(c => { if (match(META[c].name)) items.push({ g: 'courses', ic: I.grid, label: META[c].name, sub: `${Math.round(doneCount(c) / (DAYS * PER_DAY) * 100)}%`, run: () => switchCourse(c, true) }); });
  const acts = [
    [t('nav.map'), I.map, () => go('map')], [t('nav.today'), I.play, () => go(dayHash(currentDay(S.course)))],
    [t('hearts.extraBtn', { n: EXTRA_HEARTS }), I.plus, () => startExtra()], [t('nav.profile'), I.user, () => go('profile')], [t('nav.suggest'), I.chat, () => go('sugerencias')], [t('act.home'), I.star, () => go('inicio')],
    ...LOCALES.filter(l => l !== S.locale).map(l => [t('act.lang', { l: t('lang.' + l) }), I.globe, () => setLocale(l)]),
  ];
  if (Store.user) acts.push([t('profile.signout'), I.logout, () => doSignOut()]);
  acts.forEach(([label, ic, run]) => { if (match(label)) items.push({ g: 'actions', ic, label, run }); });
  return items.slice(0, 40);
}
function openPalette() {
  openModal(`<div class="q">${I.search}<input id="palq" type="search" placeholder="${t('palette.placeholder')}" autocomplete="off" autocorrect="off" autocapitalize="off" enterkeyhint="go" aria-label="${t('nav.search')}"></div><ul id="pallist" role="listbox"></ul>`, 'palette');
  const inp = $('#palq');
  const draw = () => {
    palItems = paletteItems(inp.value); palSel = Math.min(palSel, Math.max(0, palItems.length - 1));
    let h = '', g = '';
    palItems.forEach((it, i) => { if (it.g !== g) { g = it.g; h += `<li class="grp">${t('palette.' + g)}</li>`; } h += `<li><button class="${i === palSel ? 'active' : ''}" data-pal="${i}" role="option" aria-selected="${i === palSel}">${it.ic}<b>${esc(it.label)}</b>${it.sub ? `<small>${esc(it.sub)}</small>` : ''}</button></li>`; });
    $('#pallist').innerHTML = h || `<li class="empty">${t('palette.empty')}</li>`;
    const a = $('#pallist .active'); a && a.scrollIntoView({ block: 'nearest' });
  };
  inp.addEventListener('input', () => { palSel = 0; draw(); });
  inp.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { palSel = Math.min(palItems.length - 1, palSel + 1); draw(); e.preventDefault(); }
    if (e.key === 'ArrowUp') { palSel = Math.max(0, palSel - 1); draw(); e.preventDefault(); }
    if (e.key === 'Enter' && palItems[palSel]) { const it = palItems[palSel]; closeModal(); it.run(); }
  });
  palSel = 0; draw(); inp.focus();
}

/* ---------- cambios de curso e idioma ---------- */
async function switchCourse(c, open) {
  S.course = c; Store.save(); menuOpen = false;
  await loadCurrent();
  if (open || route.v === 'day') go('map'); else render(true);
}
async function setLocale(l) {
  S.locale = l; window.I18N.set(l); try { localStorage.setItem('sintaxis.locale', l); } catch (e) { /* */ }
  Store.save();
  if (!$('#landing').hidden) { renderLanding(); return; }
  if (!$('#auth').hidden) { renderAuth(); return; }
  await loadCurrent(); render(); toast(t('toast.lang'));
}

/* ---------- motor de lecciones ---------- */
const LS = $('#lesson');
/* iOS: con el teclado abierto la pantalla no se encoge y el teclado es translúcido. La lección sigue
   cubriendo toda la pantalla (así no se ve el mapa por detrás) y solo sube su contenido con --kb.
   Si iOS desplaza la vista para enseñar el campo, la lección la sigue con translateY.
   En Android el navegador encoge la pantalla (interactive-widget en index.html) y --kb queda en 0. */
function fitLesson() {
  const vv = window.visualViewport; if (!vv || LS.hidden) return;
  LS.style.setProperty('--kb', Math.max(0, Math.round(window.innerHeight - vv.height)) + 'px');
  LS.style.transform = vv.offsetTop > 0 ? `translateY(${Math.round(vv.offsetTop)}px)` : '';
}
if (window.visualViewport) { visualViewport.addEventListener('resize', fitLesson); visualViewport.addEventListener('scroll', fitLesson); }
// Bloquea la página de fondo mientras hay una lección abierta (iOS ignora overflow:hidden en body).
let lockY = 0;
function lockPage(on) {
  const b = document.body;
  if (on) { if (b.classList.contains('noscroll')) return; lockY = window.scrollY; b.style.top = `-${lockY}px`; b.classList.add('noscroll'); }
  else if (b.classList.contains('noscroll')) { b.classList.remove('noscroll'); b.style.top = ''; window.scrollTo(0, lockY); LS.style.removeProperty('--kb'); LS.style.transform = ''; }
}
function prep(ex) {
  const r = Object.assign({}, ex, { src: ex });
  if (ex.o) r.opts = shuffle(ex.o.map((o, i) => ({ t: o, ok: i === 0 })));
  if (ex.t === 'order') { r.bank = shuffle([...ex.w, ...(ex.x || [])]).map((o, i) => ({ t: o, id: i, used: false })); r.picked = []; }
  return r;
}
function startLesson(opts) {
  regen();
  if ((opts.mode === 'practice' || opts.mode === 'reto') && S.hearts <= 0) { heartsModal(); return; }
  closeModal(); openPop = null;
  L = Object.assign({}, opts, { course: S.course, queue: opts.ex.map(prep), total: opts.ex.length, correct: 0, mistakes: 0, answered: 0, firstOk: 0, start: Date.now(), prog: 0, combo: 0 });
  LS.hidden = false; lockPage(true); fitLesson();
  renderEx();
}
/* Secciones de cada nivel: el nivel 1 tiene 8, el 2 tiene 7, el 3 otra vez 8... (el reto, nivel 8, tiene 7).
   Cada nivel alterna secciones de elegir (mc, out, fill, order) con secciones de escribir código. */
const sectionsOf = k => (k % 2 ? 7 : 8);
const ORDER_Q = /^(ordena|order|arrange|put |remets|ordonne|ordina|metti)/i;
// Versión "escríbelo tú" de un ejercicio de opciones, o null si la respuesta no cabe en una línea.
function asTyped(ex) {
  if (ex.t === 'type') return ex;
  if (ex.t === 'fill') return { t: 'type', q: ex.q, c: ex.c, a: [ex.o[0]], e: ex.e };
  if (ex.t === 'out' && !ex.o[0].includes('\n') && ex.o[0].length <= 40) return { t: 'type', q: t('ex.q.outType'), c: ex.c, a: [ex.o[0]], e: ex.e, line: 'out' };
  if (ex.t === 'order' && !ORDER_Q.test(ex.q)) { const s = joinTokens(ex.w); if (s.length <= 70) return { t: 'type', q: ex.q, c: '', a: [s], e: ex.e, line: 'code' }; }
  return null;
}
/* Elige n secciones de `list` (en orden de preferencia) y usa cada ejercicio UNA sola vez,
   alternando elegir y escribir. Solo si no hay bastantes ejercicios distintos (el día 1 no tiene repaso)
   repite alguno, al final y en la otra forma. */
function mixSections(list, n, write = false) {
  const pool = [...new Set(list)], out = [], used = [];
  while (out.length < n && pool.length) {
    let i = pool.findIndex(ex => (write ? asTyped(ex) : ex.t !== 'type'));
    if (i < 0) i = 0;
    const ex = pool.splice(i, 1)[0], ty = write || ex.t === 'type' ? asTyped(ex) : null;
    out.push(ty || ex); used.push([ex, !!ty]);
    write = !write;
  }
  for (const [ex, typed] of used) {
    if (out.length >= n) break;
    const other = typed ? (ex.t !== 'type' ? ex : null) : asTyped(ex);
    if (other) out.push(other);
  }
  for (let i = 0; out.length < n && used.length; i++) out.push(out[i]);
  return out;
}
// Aleatorio con semilla: el repaso de un día se baraja siempre igual y cada nivel recibe un trozo distinto.
const hash = s => { let h = 2166136261; for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return h >>> 0; };
const rng = seed => () => { seed = (seed + 0x6D2B79F5) | 0; let x = Math.imul(seed ^ (seed >>> 15), 1 | seed); x ^= x + Math.imul(x ^ (x >>> 7), 61 | x); return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
function buildLevel(d, k, replay) {
  const days = CUR.data.days, own = days[d].x.slice(0, RETO), n = sectionsOf(k);
  const rnd = replay ? Math.random : rng(hash(`${CUR.course}:${CUR.loc}:${d}`));
  if (k === RETO) return mixSections([...shuffle(own.slice(), rnd).slice(0, 3), ...fresh(d, 8)], n - 1).concat(days[d].x[RETO]);
  /* Cada nivel: su práctica del día (x[k], que solo sale en este nivel), 1 o 2 de repaso de días
     anteriores (un trozo distinto para cada nivel) y el resto, ejercicios nuevos generados al azar
     sobre los temas ya vistos (practice.js): no se repiten entre niveles ni al volver a jugar. */
  const near = d > 3 ? days.slice(d - 3, d) : days.slice(0, d), far = d > 3 ? days.slice(0, d - 3) : [];
  const prev = [...shuffle(near.flatMap(x => x.x.slice(0, RETO)), rnd), ...shuffle(far.flatMap(x => x.x.slice(0, RETO)), rnd)];
  const start = replay ? Math.floor(Math.random() * Math.max(1, prev.length)) : k * 2;
  const rev = Array.from({ length: Math.min(n >= 8 ? 2 : 1, prev.length) }, (_, i) => prev[(start + i) % prev.length]);
  const list = [own[k], ...fresh(d, n + 6)];
  rev.forEach((ex, i) => list.splice(2 + i * 3, 0, ex));
  // Si el generador no está disponible, completa con las demás prácticas del día.
  if (list.length < n) list.push(...[0, 2, 4, 6, 1, 3, 5].map(j => own[(k + j) % RETO]));
  return mixSections(list, n, k % 2 === 1);
}
const fresh = (d, count) => (window.NibblePractice ? window.NibblePractice.generate(CUR.course, d + 1, count, Math.random, t) : []);
function startNode(key) {
  const [, d, k] = key.split(':').map((v, i) => i ? +v : v), replay = !!S.done[key];
  startLesson({ mode: k === RETO ? 'reto' : 'practice', d, k, key, replay, ex: buildLevel(d, k, replay) });
}
function startExtra() {
  if (!CUR.data) return;
  closeModal();
  if (L) { LS.hidden = true; LS.innerHTML = ''; L = null; lockPage(false); }
  const pool = CUR.data.days.slice(0, currentDay(S.course) + 1).flatMap(d => d.x);
  startLesson({ mode: 'extra', ex: mixSections(shuffle([...shuffle(pool.slice()).slice(0, 3), ...fresh(currentDay(S.course), 4)]), 5) });
}
function startTest(d) {
  const pool = CUR.data.days.slice(Math.max(0, d - 6), d).flatMap(x => x.x);
  startLesson({ mode: 'test', d, ex: mixSections(shuffle(pool.slice()), 8) });
}
const progress = () => (L.mode === 'test' || L.mode === 'reto') ? L.answered / L.total : L.correct / L.total;
const maxMistakes = () => L.mode === 'reto' ? 1 : L.mode === 'test' ? 2 : Infinity;
function topHTML() {
  let meta;
  if (L.mode === 'test') meta = `<div class="ls-meta">${t('ex.mistakes', { n: L.mistakes, m: 2 })}</div>`;
  else if (L.mode === 'extra') meta = `<div class="ls-meta">${t('ex.extraTag', { n: EXTRA_HEARTS })}</div>`;
  else meta = `${L.mode === 'reto' ? `<div class="ls-meta reto">${t('ex.mistakes', { n: L.mistakes, m: 1 })}</div>` : ''}<div class="ls-hearts" id="lsHearts" aria-label="${t('hearts.aria', { n: S.hearts, m: MAXH })}">${I.heart}<b>${S.hearts}</b></div>`;
  return `<button class="iconbtn" data-act="quit" aria-label="${t('quit.title')}">${I.x}</button>
   <div class="barwrap"><div class="bar ${L.mode === 'reto' ? 'reto' : L.combo >= 3 ? 'hot' : ''}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress() * 100)}"><i style="width:${L.prog * 100}%"></i></div>
   ${L.combo >= 3 ? `<span class="combo">${I.flame}${t('ex.comboTag', { n: L.combo })}</span>` : ''}</div>${meta}`;
}
function setBar(shine) {
  const p = progress(), bar = LS.querySelector('.bar'), i = bar && bar.querySelector('i');
  if (i) requestAnimationFrame(() => { i.style.width = (p * 100) + '%'; if (shine) { bar.classList.remove('shine'); void bar.offsetWidth; bar.classList.add('shine'); } });
  L.prog = p;
}
const isMono = s => !/\s/.test(s) || s.includes('(');
function exHTML(ex) {
  const isRetoQ = L.mode === 'reto' && ex.src === dayData(L.d).x[RETO];
  const write = ex.t === 'type', inp = cls => `<input class="${cls}" id="typeIn" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="${t('ex.answer')}">`;
  let h = `<div class="ex-tags"><span class="ex-sec">${t('ex.section', { n: L.total - L.queue.length + 1, m: L.total })}</span>`;
  h += isRetoQ ? `<span class="ex-kind">${I.crown}${t('node.reto')}</span>` : `<span class="ex-kind ${write ? 'write' : 'pick'}">${write ? I.code : I.target}${t(write ? 'ex.kind.write' : 'ex.kind.pick')}</span>`;
  h += `</div><div class="ex-head">${kibi('idle', 56)}<h2 class="ex-q">${rich(ex.q || t('ex.q.' + ex.t))}</h2></div>`;
  if (ex.c) h += codeBlock(ex.c, L.course, ex.t === 'fill' ? `<span class="blank" id="blank">&nbsp;</span>` : write && !ex.line ? inp('blank-in') : '');
  if (ex.t === 'mc' || ex.t === 'out') h += `<div class="opts" role="group">${ex.opts.map((o, i) => `<button class="opt ${ex.t === 'out' || isMono(o.t) ? 'mono' : ''}" data-opt="${i}"><span class="k">${i + 1}</span><span class="t">${esc(o.t)}</span></button>`).join('')}</div>`;
  if (ex.t === 'fill') h += `<div class="chips" role="group">${ex.opts.map((o, i) => `<button class="chip" data-opt="${i}">${esc(o.t)}</button>`).join('')}</div>`;
  if (ex.t === 'order') h += `<div class="answer-line" id="aline" aria-label="${t('ex.answer')}"></div><div class="chips" id="bank"></div>`;
  if (write && ex.line) h += `<label class="term ${ex.line}"><span class="pr">${ex.line === 'out' ? '$ ' + t('ex.output') : '&gt;'}</span>${inp('line-in')}</label>`;
  if (write) h += `<p class="hint">${t(ex.line === 'out' ? 'ex.hintOut' : ex.line ? 'ex.hintWrite' : 'ex.hintType')}</p>`;
  return h;
}
function renderEx() {
  const ex = L.queue[0]; L.sel = null; L.phase = 'answer';
  LS.innerHTML = `<div class="ls-top">${topHTML()}</div><div class="ls-body"><div class="ex">${exHTML(ex)}</div></div>
   <div class="ls-foot" id="foot"><div class="foot-in"><button class="btn ghost" data-act="skip">${t('ex.skip')}</button><div class="fb" id="fb"></div><button class="btn primary" id="checkBtn" data-act="check" disabled>${t('ex.check')}</button></div></div>`;
  setBar(false);
  if (ex.t === 'order') renderOrder();
  if (ex.t === 'type') { const inp = $('#typeIn'); inp.addEventListener('input', () => { if (!ex.line) inp.style.width = Math.max(6, inp.value.length + 2) + 'ch'; $('#checkBtn').disabled = !inp.value.trim(); });
    // Con el teclado ya abierto, deja el campo a la vista dentro de la lección.
    inp.addEventListener('focus', () => setTimeout(() => { fitLesson(); inp.scrollIntoView({ block: 'center' }); }, 320));
    setTimeout(() => inp.focus(), 60); }
}
function renderOrder() {
  const ex = L.queue[0];
  $('#aline').innerHTML = ex.picked.map(id => `<button class="chip" data-pick="${id}">${esc(ex.bank.find(b => b.id === id).t)}</button>`).join('');
  $('#bank').innerHTML = ex.bank.map(b => `<button class="chip ${b.used ? 'used' : ''}" data-bank="${b.id}" ${b.used ? 'tabindex="-1" aria-hidden="true"' : ''}>${esc(b.t)}</button>`).join('');
  $('#checkBtn').disabled = !ex.picked.length;
}
function selectOpt(i) {
  const ex = L.queue[0]; if (L.phase !== 'answer' || !ex.opts || i < 0 || i >= ex.opts.length) return;
  L.sel = i; LS.querySelectorAll('[data-opt]').forEach(b => b.classList.toggle('sel', +b.dataset.opt === i));
  if (ex.t === 'fill') { const bl = $('#blank'); bl.textContent = ex.opts[i].t; bl.classList.remove('filled'); void bl.offsetWidth; bl.classList.add('filled'); }
  $('#checkBtn').disabled = false;
}
function check(skipped) {
  const ex = L.queue[0]; if (L.phase !== 'answer') return;
  let ok = false, sol = '';
  if (ex.opts) { sol = ex.o[0]; ok = !skipped && L.sel !== null && ex.opts[L.sel].ok; }
  else if (ex.t === 'order') { sol = joinTokens(ex.w); const seq = ex.picked.map(id => ex.bank.find(b => b.id === id).t); ok = !skipped && seq.join('\u0001') === ex.w.join('\u0001'); }
  else if (ex.t === 'type') { sol = ex.a[0]; const inp = $('#typeIn'), v = inp.value; ok = !skipped && (ex.a.some(a => norm(a) === norm(v) || norm(a).replace(/\s/g, '') === norm(v).replace(/\s/g, '')) || (!!ex.re && ex.re.test(norm(v).replace(/\s/g, '')))); inp.readOnly = true; if (!ok) inp.classList.add('wrong'); }
  L.phase = 'feedback'; L.answered++; S.stats.answered++;
  let lost = false;
  if (ok) { S.stats.correct++; L.correct++; if (!ex.retry) L.firstOk++; L.queue.shift(); L.combo++; sfx(L.combo >= 3 && L.combo % 3 === 0 ? 'combo' : 'ok'); }
  else {
    L.mistakes++; L.combo = 0; sfx('bad'); const f = L.queue.shift();
    if (L.mode === 'practice' || L.mode === 'extra') { const r = prep(f.src); r.retry = true; L.queue.push(r); }
    if (L.mode === 'practice' || L.mode === 'reto') { loseHeart(); lost = true; }
  }
  Store.save();
  if (ex.opts) LS.querySelectorAll('[data-opt]').forEach(b => { const o = ex.opts[+b.dataset.opt]; b.disabled = true; if (o.ok) b.classList.add('right'); else if (+b.dataset.opt === L.sel) b.classList.add('wrong'); });
  if (ex.t === 'fill' && !ok) $('#blank').classList.add('wrong');
  if (ex.t === 'order') { LS.querySelectorAll('#aline .chip,#bank .chip').forEach(b => { b.disabled = true; }); $('#aline').classList.add(ok ? 'ok' : 'bad'); }
  const foot = $('#foot'); foot.classList.add(ok ? 'ok' : 'bad');
  const oks = window.I18N.list('ex.ok');
  const sparks = ok && !reduceMotion() ? Array.from({ length: 10 }, (_, i) => `<i style="--a:${i * 36}deg;--c:var(${['--gold', '--ok', '--lang', '--heart', '--gem'][i % 5]})"></i>`).join('') : '';
  $('#fb').innerHTML = `<span class="sparks">${kibi(ok ? 'happy' : 'sad', 60)}${sparks}</span><div><p class="fb-t">${ok ? (L.combo >= 3 ? t('ex.combo', { n: L.combo }) : oks[Math.floor(Math.random() * oks.length)]) : (skipped ? t('ex.skipped') : t('ex.wrong'))}</p>
    ${!ok ? `<p class="fb-sol">${t('ex.solution')} <code>${esc(sol)}</code></p>` : ''}<p class="fb-e">${rich(ex.e)}</p></div>`;
  foot.querySelector('[data-act="skip"]').hidden = true;
  const btn = $('#checkBtn'); btn.disabled = false; btn.textContent = t('ex.continue'); btn.dataset.act = 'next'; btn.className = 'btn ' + (ok ? 'good' : 'danger'); btn.focus();
  LS.querySelector('.ls-top').innerHTML = topHTML(); setBar(ok);
  if (lost) { const hh = $('#lsHearts'); if (hh) { hh.classList.add('hit'); const s = document.createElement('span'); s.className = 'lost'; s.innerHTML = `-1${I.heart}`; hh.appendChild(s); } }
}
function next() {
  if (L.phase !== 'feedback') return;
  if ((L.mode === 'practice' || L.mode === 'reto') && S.hearts === 0 && L.queue.length) return failScreen('hearts');
  if (L.mistakes > maxMistakes()) return failScreen(L.mode);
  if (!L.queue.length) return finish();
  const ex = LS.querySelector('.ex');
  if (!ex || reduceMotion()) return renderEx();
  L.phase = 'leaving'; ex.classList.add('leave');
  const cur = L; setTimeout(() => { if (L === cur) renderEx(); }, 190);
}
function closeLesson() {
  const was = L; LS.hidden = true; LS.innerHTML = ''; L = null; lockPage(false);
  if (was && was.mode === 'test' && was.passed) { go(dayHash(was.d, 'practice')); }
  else if (was && (was.mode === 'practice' || was.mode === 'reto')) { route = { v: 'day', d: was.d, tab: 'practice' }; if (location.hash !== '#' + dayHash(was.d, 'practice')) history.replaceState(null, '', '#' + dayHash(was.d, 'practice')); render(); }
  else render();
  if (justDone || justUnlock) setTimeout(scrollToCurrent, 80);
  setTimeout(() => { justDone = null; justUnlock = null; }, 1600);
}
function quitLesson() {
  if (!L || L.phase === 'end') { closeLesson(); return; }
  openModal(`<div class="center">${kibi('sad', 84)}<h2>${t('quit.title')}</h2><p>${t('quit.desc')}</p></div>
   <div class="acts"><button class="btn primary" data-act="close">${t('quit.stay')}</button><button class="btn ghost" data-act="quit-yes">${t('quit.leave')}</button></div>`);
}
function countUp(el, to) {
  const pre = el.dataset.pre, post = el.dataset.post;
  if (reduceMotion()) { el.textContent = pre + to + post; return; }
  const t0 = performance.now();
  (function f(now) { const k = Math.min(1, (now - t0) / 900); el.textContent = pre + Math.round(to * (1 - Math.pow(1 - k, 3))) + post; if (k < 1) requestAnimationFrame(f); })(t0);
}
function finish() {
  L.phase = 'end';
  const perfect = L.mistakes === 0, c = L.course, rewards = [];
  let xp = 0, title;
  if (L.mode === 'practice' || L.mode === 'reto') {
    const reto = L.mode === 'reto';
    xp = L.replay ? (reto ? 5 : 2) : reto ? 20 + (perfect ? 5 : 0) : 5;
    if (!L.replay) {
      justDone = L.key;
      const nk = L.k < RETO ? nodeKey(c, L.d, L.k + 1) : L.d < DAYS - 1 ? nodeKey(c, L.d + 1, 0) : null;
      justUnlock = nk;
      if (reto) { S.stats.retos++; if (L.d < DAYS - 1) rewards.push(`<p class="reward gold">${I.star}${t('done.unlocked', { d: L.d + 2 })}</p>`); }
    }
    S.done[L.key] = true;
    title = reto ? t('done.reto') : perfect ? t('done.perfect') : t('done.practice');
  } else if (L.mode === 'extra') {
    xp = 10; S.stats.extras++; const g = addHearts(EXTRA_HEARTS);
    rewards.push(`<p class="reward heart">${I.heart}${g > 0 ? t('done.hearts', { n: g }) : t('done.heartsFull')}</p>`); sfx('heart');
    title = t('done.extra');
  } else {
    xp = 20; L.passed = true;
    for (let d = 0; d < L.d; d++) for (let k = 0; k < PER_DAY; k++) S.done[nodeKey(c, d, k)] = true;
    justUnlock = nodeKey(c, L.d, 0);
    rewards.push(`<p class="reward gold">${I.star}${t('done.unlocked', { d: L.d + 1 })}</p>`);
    title = t('done.test');
  }
  normalizeDay();
  S.xp += xp; S.daily.xp += xp; S.stats.lessons++; if (perfect) S.stats.perfect++;
  S.courseXp[c] = (S.courseXp[c] || 0) + xp;
  if (bumpStreak()) rewards.unshift(`<p class="reward flame">${I.flame}${t('done.streak', { n: S.streak })}</p>`);
  Store.save();
  const acc = Math.round(L.firstOk / L.total * 100), secs = Math.round((Date.now() - L.start) / 1000);
  Store.logResult({ course: c, locale: S.locale, mode: L.mode, day: L.d === undefined ? null : L.d + 1, level: L.k === undefined ? null : L.k + 1,
    sections: L.total, correct: L.firstOk, mistakes: L.mistakes, xp, seconds: Math.min(86400, secs) });
  sfx('win');
  LS.querySelector('.ls-top').innerHTML = `<button class="iconbtn" data-act="quit" aria-label="${t('common.close')}">${I.x}</button><div class="barwrap"><div class="bar ${L.mode === 'reto' ? 'reto' : ''}"><i style="width:100%"></i></div></div>`;
  LS.querySelector('.ls-body').innerHTML = `<div class="done-screen"><div class="halo">${kibi('happy', 130)}</div><h2>${title}</h2>
    <span class="exitcode">${t('done.exit0')}</span>
    <div class="dtiles">
      <div class="dtile" style="--tc:var(--gold);--tink:var(--gold-ink)"><span>${t('done.xp')}</span><b data-count="${xp}" data-pre="+" data-post="">+0</b></div>
      <div class="dtile" style="--tc:var(--ok);--tink:var(--on-color)"><span>${t('done.acc')}</span><b data-count="${acc}" data-pre="" data-post="%">0%</b></div>
      <div class="dtile" style="--tc:var(--gem);--tink:var(--on-color)"><span>${t('done.time')}</span><b>${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}</b></div>
    </div>${rewards.join('')}</div>`;
  setTimeout(() => LS.querySelectorAll('[data-count]').forEach(b => countUp(b, +b.dataset.count)), 350);
  const foot = $('#foot'); foot.className = 'ls-foot';
  foot.innerHTML = `<div class="foot-in"><div class="fb"></div><button class="btn primary" id="checkBtn" data-act="end">${t('ex.continue')}</button></div>`;
  $('#checkBtn').focus();
  confetti();
}
function failScreen(kind) {
  L.phase = 'end';
  const desc = kind === 'hearts' ? t('fail.heartsDesc', { t: timerText(), n: EXTRA_HEARTS }) : kind === 'reto' ? t('fail.retoDesc') : t('fail.testDesc');
  const title = kind === 'hearts' ? t('fail.hearts') : kind === 'reto' ? t('fail.reto') : t('fail.test');
  LS.querySelector('.ls-body').innerHTML = `<div class="done-screen fail"><div class="halo">${kibi('sad', 120)}</div><h2>${title}</h2><span class="exitcode">${t('done.exit1')}</span><p>${desc}</p></div>`;
  const foot = $('#foot'); foot.className = 'ls-foot';
  foot.innerHTML = `<div class="foot-in"><div class="fb"></div>${kind === 'hearts' ? `<button class="btn gold" data-act="extra">${I.plus}${t('hearts.extraBtn', { n: EXTRA_HEARTS })}</button>` : ''}<button class="btn ${kind === 'hearts' ? 'ghost' : 'primary'}" id="checkBtn" data-act="end">${t('fail.back')}</button></div>`;
  Store.save();
}
function confetti() {
  if (reduceMotion()) return;
  const cv = document.createElement('canvas'); cv.id = 'confetti'; LS.appendChild(cv);
  const ctx = cv.getContext('2d'), dpr = window.devicePixelRatio || 1, W = cv.width = innerWidth * dpr, H = cv.height = innerHeight * dpr;
  const cs = getComputedStyle(document.documentElement);
  const cols = ['--lang', '--gold', '--ok', '--heart', '--gem', '--phosphor'].map(v => cs.getPropertyValue(v).trim() || '#E89B00');
  const mk = (x, y, a, sp) => ({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, s: (Math.random() * 7 + 5) * dpr, r: Math.random() * 6, vr: (Math.random() - .5) * .35, w: Math.random() * 10, sh: Math.floor(Math.random() * 3), c: cols[Math.floor(Math.random() * cols.length)] });
  const ps = [];
  for (let i = 0; i < 90; i++) ps.push(mk(0, H * .9, -Math.PI / 2.6 + (Math.random() - .5) * .6, (Math.random() * 14 + 16) * dpr));
  for (let i = 0; i < 90; i++) ps.push(mk(W, H * .9, -Math.PI + Math.PI / 2.6 + (Math.random() - .5) * .6, (Math.random() * 14 + 16) * dpr));
  for (let i = 0; i < 60; i++) ps.push(mk(W / 2, H * .32, Math.random() * Math.PI * 2, (Math.random() * 9 + 4) * dpr));
  const t0 = performance.now(), DUR = 3000;
  (function f(now) {
    const k = now - t0; ctx.clearRect(0, 0, W, H);
    ps.forEach(p => {
      p.vy += .42 * dpr; p.vx *= .985; p.vy *= .985; p.x += p.vx + Math.sin(k / 180 + p.w) * .8 * dpr; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.globalAlpha = Math.max(0, 1 - k / DUR); ctx.fillStyle = p.c;
      if (p.sh === 0) ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
      else if (p.sh === 1) { ctx.beginPath(); ctx.arc(0, 0, p.s / 3, 0, Math.PI * 2); ctx.fill(); }
      else { ctx.scale(1, Math.abs(Math.sin(k / 120 + p.w))); ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s); }
      ctx.restore();
    });
    if (k < DUR) requestAnimationFrame(f); else cv.remove();
  })(t0);
}

/* ---------- pantalla inicial ---------- */
const SEEN = 'nibble.seen';
const SNIPS = {
  python: ['bits = 4', 'print("nibble =", bits, "bits")'],
  javascript: ['const bits = 4;', 'console.log("nibble = " + bits + " bits");'],
  java: ['int bits = 4;', 'System.out.println("nibble = " + bits + " bits");'],
  cpp: ['int bits = 4;', 'std::cout << "nibble = " << bits << " bits";'],
};
let typerTimer = null;
function seenLanding() { try { return !!localStorage.getItem(SEEN); } catch (e) { return true; } }
function renderLanding() {
  const login = Store.configured && !Store.user;
  const startBtn = `<button class="btn primary big" data-land="start">${t('land.start')}</button>`;
  $('#landing').innerHTML = `<header class="lnav"><div class="lbrand">${kibi('idle', 40)}<b>Nibble</b></div><span class="grow"></span>${langPick()}
    ${login ? `<button class="btn small ghost" data-land="signin">${t('land.signin')}</button>` : ''}</header>
   <section class="lhero"><div class="lcopy">
     <p class="eyebrow">Python · Java · JavaScript · C++</p><h1>${t('land.title')}</h1><p class="lead">${t('land.lead')}</p>
     <div class="lcta">${startBtn}${login ? `<button class="btn ghost big" data-land="signin">${t('land.signin')}</button>` : ''}</div><p class="note">${t('land.free')}</p></div>
     <div class="lart"><div class="lcode" id="lcode"><div class="lcode-top"><i></i><i></i><i></i><span id="lfile"></span></div><div id="typer"></div>
       <div class="lout" id="lout"><span>${t('land.output')}</span><code>nibble = 4 bits</code>${I.check}</div></div>
       <div class="lkibi">${kibi('idle', 150, 'float')}</div></div></section>
   <section class="lsec reveal"><h2>${t('land.coursesTitle')}</h2><div class="lcourses">${COURSES.map((c, i) => { const m = META[c]; return `<button class="lcourse" data-land="start" data-lc="${c}" style="--c:${m.color};--cd:${m.dark};--ci:${m.ink};--i:${i}">${badge(c)}<b>${m.name}</b><p>${t('course.' + c)}</p><small>${t('land.days')}</small></button>`; }).join('')}</div></section>
   <section class="lsec reveal"><h2>${t('land.featTitle')}</h2><div class="lfeat">${[[I.code, 1], [I.book, 2], [I.flame, 3], [I.globe, 4]].map(([ic, n]) => `<div class="fcard" style="--i:${n}">${ic}<b>${t('land.f' + n)}</b><p>${t('land.f' + n + '.d')}</p></div>`).join('')}</div></section>
   <section class="lsec reveal"><h2>${t('land.howTitle')}</h2><ol class="lsteps">${[1, 2, 3].map(n => `<li style="--i:${n}"><span>${n}</span><b>${t('land.s' + n)}</b><p>${t('land.s' + n + '.d')}</p></li>`).join('')}</ol></section>
   <section class="lsec lfinal reveal">${kibi('happy', 96)}<h2>${t('land.finalTitle')}</h2>${startBtn}</section>
   <footer class="lfoot">${t('land.foot')}</footer>`;
  const io = 'IntersectionObserver' in window && new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  document.querySelectorAll('#landing .reveal').forEach(el => (io ? io.observe(el) : el.classList.add('in')));
  startTyper();
}
// Escribe el mismo programa en los 4 lenguajes, uno tras otro, con el color de cada curso.
function startTyper() {
  clearTimeout(typerTimer);
  let ci = 0, pos = 0;
  const ext = { python: 'nibble.py', javascript: 'nibble.js', java: 'Nibble.java', cpp: 'nibble.cpp' };
  const step = () => {
    const box = $('#typer'); if (!box || $('#landing').hidden) return;
    const c = COURSES[ci], code = SNIPS[c].join('\n'), out = $('#lout');
    if (pos === 0) { $('#lfile').textContent = ext[c]; const m = META[c]; $('#lcode').style.cssText = `--c:${m.color}`; out.classList.remove('show'); }
    pos = reduceMotion() ? code.length : pos + 1;
    box.innerHTML = codeBlock(code.slice(0, pos), c).replace(/<\/span><\/code>/, '<span class="tcaret"></span></span></code>');
    if (pos < code.length) { typerTimer = setTimeout(step, code[pos - 1] === '\n' ? 260 : 38); return; }
    out.classList.add('show');
    if (reduceMotion()) return;
    ci = (ci + 1) % COURSES.length; pos = 0; typerTimer = setTimeout(step, 2600);
  };
  step();
}
function showLanding() {
  applyTheme(); document.documentElement.lang = window.I18N.get();
  $('#shell').hidden = true; $('#bottomnav').hidden = true; $('#auth').hidden = true;
  $('#landing').hidden = false; renderLanding(); window.scrollTo(0, 0);
}
async function leaveLanding(mode, course) {
  try { localStorage.setItem(SEEN, '1'); } catch (e) { /* */ }
  clearTimeout(typerTimer); $('#landing').hidden = true; $('#landing').innerHTML = '';
  if (course && COURSES.includes(course)) { S.course = course; Store.save(); }
  if (location.hash === '#inicio') history.replaceState(null, '', location.pathname + location.search);
  if (Store.configured && !Store.user) { authMode = mode === 'signin' ? 'signin' : 'signup'; authMsg = ''; showAuth(); }
  else await enterApp();
}

/* ---------- acceso ---------- */
let authMode = 'signin', authMsg = '';
function authError(err) {
  const m = (err && err.message) || '';
  if (/invalid login/i.test(m)) return t('auth.err.invalid');
  if (/already registered/i.test(m)) return t('auth.err.exists');
  if (/password should be|at least 6/i.test(m)) return t('auth.err.short');
  if (/email not confirmed/i.test(m)) return t('auth.confirm');
  return t('auth.err.generic', { m });
}
function renderAuth() {
  const a = $('#auth');
  const reset = authMode === 'reset';
  a.innerHTML = `<div class="authcard"><div class="brand">${kibi('idle', 44, 'float')}<span>Nibble</span></div>
    <h1>${reset ? t('auth.forgot') : authMode === 'signup' ? t('auth.signupTitle') : t('auth.title')}</h1><p class="sub">${t('auth.sub')}</p>
    <form id="authForm" style="display:flex;flex-direction:column;gap:14px">
      <div class="field"><label for="aemail">${t('auth.email')}</label><input id="aemail" type="email" autocomplete="email" required></div>
      ${reset ? '' : `<div class="field"><label for="apw">${t('auth.password')}</label><input id="apw" type="password" minlength="6" autocomplete="${authMode === 'signup' ? 'new-password' : 'current-password'}" required></div>`}
      <div id="authMsg">${authMsg}</div>
      <button class="btn primary block" type="submit">${reset ? t('auth.sendReset') : authMode === 'signup' ? t('auth.signup') : t('auth.signin')}</button>
    </form>
    ${reset ? `<button class="linkbtn" data-auth="signin">${t('auth.toSignin')}</button>` : `<button class="linkbtn" data-auth="${authMode === 'signup' ? 'signin' : 'signup'}">${authMode === 'signup' ? t('auth.toSignin') : t('auth.toSignup')}</button>
    ${authMode === 'signin' ? `<button class="linkbtn" data-auth="reset">${t('auth.forgot')}</button>` : ''}`}
    ${langPick()}</div>`;
  $('#authForm').addEventListener('submit', async e => {
    e.preventDefault();
    const email = $('#aemail').value.trim(), pw = $('#apw') ? $('#apw').value : '', btn = e.target.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = t('auth.loading');
    try {
      if (authMode === 'reset') { await Store.sendReset(email); authMsg = `<p class="msg ok">${t('auth.resetSent')}</p>`; renderAuth(); return; }
      if (authMode === 'signup') { const r = await Store.signUp(email, pw); if (r === 'confirm') { authMsg = `<p class="msg ok">${t('auth.confirm')}</p>`; authMode = 'signin'; renderAuth(); return; } }
      else await Store.signIn(email, pw);
      authMsg = ''; await enterApp();
    } catch (err) { authMsg = `<p class="msg err">${esc(authError(err))}</p>`; renderAuth(); $('#aemail').value = email; }
  });
}
function showAuth() { $('#landing').hidden = true; $('#shell').hidden = true; $('#bottomnav').hidden = true; $('#auth').hidden = false; renderAuth(); }
async function doSignOut() { await Store.signOut(); S = Store.state; showAuth(); }

/* ---------- arranque ---------- */
function detectLocale() {
  try { const l = localStorage.getItem('sintaxis.locale'); if (LOCALES.includes(l)) return l; } catch (e) { /* */ }
  const n = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return LOCALES.includes(n) ? n : 'es';
}
async function enterApp() {
  S = Store.state;
  if (!S.locale) S.locale = detectLocale();
  if (!COURSES.includes(S.course)) S.course = 'python';
  window.I18N.set(S.locale);
  $('#auth').hidden = true; $('#landing').hidden = true; $('#shell').hidden = false; $('#bottomnav').hidden = false;
  $('#main').innerHTML = `<div class="wrap"><p class="notice">${t('content.loading')}</p></div>`;
  await loadCurrent();
  route = parseHash();
  render();
  if (route.v === 'map' && currentIndex(S.course) > 0) setTimeout(scrollToCurrent, 100);
}
async function boot() {
  const loc = detectLocale(); window.I18N.set(loc);
  Store.on(ev => {
    if (ev === 'sync') document.querySelectorAll('[data-sync]').forEach(el => { el.outerHTML = syncHTML(); });
    if (ev === 'recovery') pwModal();
    if (ev === 'signedout' && !$('#shell').hidden) { S = Store.state; showAuth(); }
  });
  const r = await Store.init();
  S = Store.state;
  if (location.hash === '#inicio' || (!seenLanding() && !Store.user && !S.stats.lessons)) { window.I18N.set(S.locale || loc); showLanding(); return; }
  if (r.needsAuth) { window.I18N.set(Store.state.locale || loc); showAuth(); return; }
  await enterApp();
}

/* ---------- eventos ---------- */
document.addEventListener('click', async e => {
  const b = e.target.closest('button');
  if (!b) {
    if (e.target.id === 'modal') { closeModal(); return; }
    let changed = false;
    if (openPop && !e.target.closest('.pop')) { openPop = null; changed = true; }
    if (menuOpen && !e.target.closest('.dropwrap')) { menuOpen = false; changed = true; }
    if (changed) render();
    return;
  }
  const d = b.dataset;
  if (d.go !== undefined) { closeModal(); go(d.go); return; }
  if (d.course) { closeModal(); await switchCourse(d.course, !!d.open); return; }
  if (d.locale) { await setLocale(d.locale); return; }
  if (d.node) { openPop = openPop === d.node ? null : d.node; render(); return; }
  if (d.start) { startNode(d.start); return; }
  if (d.jump !== undefined) { jumpModal(+d.jump); return; }
  if (d.test !== undefined) { startTest(+d.test); return; }
  if (d.goal) { S.goal = +d.goal; Store.save(); render(); return; }
  if (d.pal !== undefined) { const it = palItems[+d.pal]; closeModal(); it && it.run(); return; }
  if (d.auth) { authMode = d.auth; authMsg = ''; renderAuth(); return; }
  if (d.land) { await leaveLanding(d.land, d.lc); return; }
  if (d.sugkind) { sug.kind = d.sugkind; sug.msg = $('#sugMsg').value; sug.ctx = $('#sugCtx').checked; render(); return; }
  if (d.act === 'sug-again') { sug.state = ''; render(); return; }
  if (d.copy) {
    const [dd, i] = d.copy.split(':').map(Number), code = dayData(dd).guide[i].code;
    try { await navigator.clipboard.writeText(code); toast(t('day.copied')); } catch (err) { toast(t('day.copyFail')); }
    return;
  }
  if (d.opt !== undefined && L) { selectOpt(+d.opt); return; }
  if (d.bank !== undefined && L && L.phase === 'answer') { const ex = L.queue[0], bb = ex.bank.find(x => x.id === +d.bank); if (bb && !bb.used) { bb.used = true; ex.picked.push(bb.id); renderOrder(); } return; }
  if (d.pick !== undefined && L && L.phase === 'answer') { const ex = L.queue[0], id = +d.pick; ex.picked = ex.picked.filter(x => x !== id); ex.bank.find(x => x.id === id).used = false; renderOrder(); return; }
  switch (d.act) {
    case 'coursemenu': menuOpen = !menuOpen; renderChrome(); break;
    case 'palette': openPalette(); break;
    case 'extra': startExtra(); break;
    case 'hearts': heartsModal(); break;
    case 'close': closeModal(); break;
    case 'check': check(false); break;
    case 'skip': check(true); break;
    case 'next': next(); break;
    case 'end': closeLesson(); break;
    case 'quit': quitLesson(); break;
    case 'quit-yes': closeModal(); closeLesson(); break;
    case 'sound': S.sound = !S.sound; Store.save(); render(); break;
    case 'reset': confirmReset = true; render(); break;
    case 'reset-cancel': confirmReset = false; render(); break;
    case 'reset-yes': confirmReset = false; Store.reset(); S = Store.state; go('map'); break;
    case 'signout': await doSignOut(); break;
  }
});
document.addEventListener('submit', e => { if (e.target.id === 'sugForm') { e.preventDefault(); if (sug.state !== 'sending') sendSuggestion(); } });
document.addEventListener('input', e => {
  if (e.target.id === 'sugCtx') sug.ctx = e.target.checked;
  if (e.target.id === 'sugMsg') { sug.msg = e.target.value; $('#sugCount').textContent = `${e.target.value.length}/${SUG_MAX}`; } });
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && !L && !$('#shell').hidden) { e.preventDefault(); openPalette(); return; }
  if (e.key === '/' && !L && $('#modal').hidden && !$('#shell').hidden && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); openPalette(); return; }
  if (e.key === 'Escape') {
    if (!$('#modal').hidden) { closeModal(); return; }
    if (L) { quitLesson(); return; }
    if (openPop || menuOpen) { openPop = null; menuOpen = false; render(); }
    return;
  }
  if (!L || !$('#modal').hidden) return;
  if (e.key === 'Enter') { const btn = $('#checkBtn'); if (!btn || btn.disabled || document.activeElement === btn) return; e.preventDefault(); btn.click(); return; }
  if (L.phase === 'answer' && /^[1-9]$/.test(e.key) && document.activeElement.tagName !== 'INPUT') { const ex = L.queue[0]; if (ex.opts) selectOpt(+e.key - 1); }
});
window.addEventListener('hashchange', () => {
  if (location.hash === '#inicio') { if (L) closeLesson(); closeModal(); showLanding(); return; }
  if (!$('#shell').hidden && CUR) onRoute();
});
setInterval(() => {
  if ($('#shell').hidden) return;
  const g = regen();
  if (g > 0) {
    Store.save();
    if (L) { const hh = $('#lsHearts'); if (hh) { hh.querySelector('b').textContent = S.hearts; hh.classList.remove('gain'); void hh.offsetWidth; hh.classList.add('gain'); } }
    else { renderChrome(); document.querySelectorAll('.stat.heart').forEach(s => s.classList.add('bump')); }
    if (!$('#modal').hidden && $('#modal .hearts-row')) heartsModal();
  }
  document.querySelectorAll('[data-timer]').forEach(el => { el.textContent = timerText(); });
}, 1000);

boot();
})();
