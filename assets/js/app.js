/* Nibble: interfaz. Depende de content-api.js, i18n.js y store.js. */
(function () {
'use strict';
const VERSION = '4.8.0';
const Store = window.SintaxisStore;
const P = window.NibbleProgress;
const t = (k, v) => window.I18N.t(k, v);
const MAXH = Store.MAXH, HEART_MS = 2 * 60 * 1000, EXTRA_HEARTS = MAXH /* el nivel extra rellena todas las vidas */, DAYS = 30, PER_DAY = 8, RETO = 7;
const LOCALES = ['es', 'en', 'fr', 'it'];
const COURSES = ['python', 'java', 'javascript', 'cpp'];
const META = {
  // btn: el color del curso con contraste AA (4,5:1) para texto encima (botones, insignias, bits encendidos).
  python: { name: 'Python', short: 'Py', color: '#3672B0', dark: '#244F7D', ink: '#FFFFFF', btn: '#3672B0' },
  java: { name: 'Java', short: 'Java', color: '#D9601A', dark: '#A24611', ink: '#FFFFFF', btn: '#BB5216' },
  javascript: { name: 'JavaScript', short: 'JS', color: '#E3B30F', dark: '#A98404', ink: '#2B2205', btn: '#E3B30F' },
  cpp: { name: 'C++', short: 'C++', color: '#16877F', dark: '#0D5E58', ink: '#FFFFFF', btn: '#137A73' },
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
const reduceMotion = () => document.documentElement.dataset.motion === 'reduce' || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const dayStr = P.dayStr;
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
// Por qué una respuesta escrita casi correcta no vale: mayúsculas, comillas, dos puntos o paréntesis. '' si no se sabe.
function whyWrong(answers, v) {
  const sq = x => norm(x).replace(/\s/g, ''), mine = sq(v), count = (x, c) => x.split(c).length - 1;
  if (!mine) return '';
  for (const a of answers.map(sq)) {
    if (a.toLowerCase() === mine.toLowerCase()) return 'ex.why.case';
    if (a.replace(/'/g, '"') === mine.replace(/'/g, '"')) return 'ex.why.quotes';
    if (a.endsWith(':') && a.slice(0, -1) === mine) return 'ex.why.colon';
  }
  if (['()', '[]', '{}'].some(([o, c]) => count(mine, o) !== count(mine, c))) return 'ex.why.brackets';
  if (count(mine, '"') % 2 || count(mine, "'") % 2) return 'ex.why.unclosed';
  return '';
}

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
  chain: sv('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
  sun: sv('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>'),
  hanger: sv('<path d="M12 7.5a2.2 2.2 0 1 1 2.2-2.2c0 1.3-2.2 1.6-2.2 3.1V9l8.6 6.3a1.4 1.4 0 0 1-.8 2.6H4.2a1.4 1.4 0 0 1-.8-2.6L12 9"/>'),
  sparkle: sv('<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>', 1),
  bulb: sv('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>'),
};

/* ---------- Kibi, la mascota: un hámster que aprende código a mordiscos ---------- */
const KB = { fur: '#EBA45E', line: '#B86F32', cream: '#FCE8CC', pink: '#F3A99C', ink: '#2B1A10', nose: '#8E4A35' };
function kibi(mood = 'idle', size = 64, extra = '', fit) {
  const o = fit || wearing(), on = sl => (o[sl] && KIT[o[sl]]) || '';
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
    <ellipse cx="40" cy="76" rx="21" ry="3" fill="#000" opacity=".12"/>${o.neck === 'cape' ? KIT.cape : ''}
    <g class="ears"><circle cx="21" cy="21" r="9" fill="${KB.fur}" stroke="${KB.line}" stroke-width="1.6"/><circle cx="21" cy="21" r="4.8" fill="${KB.pink}"/>
    <circle cx="59" cy="21" r="9" fill="${KB.fur}" stroke="${KB.line}" stroke-width="1.6"/><circle cx="59" cy="21" r="4.8" fill="${KB.pink}"/></g>
    <g class="body"><ellipse cx="28" cy="73" rx="6.5" ry="3.4" fill="${KB.cream}" stroke="${KB.line}" stroke-width="1.4"/><ellipse cx="52" cy="73" rx="6.5" ry="3.4" fill="${KB.cream}" stroke="${KB.line}" stroke-width="1.4"/>
    <path d="M40 15C59 15 70 30 70 47S58 74 40 74 10 64 10 47 21 15 40 15z" fill="${KB.fur}" stroke="${KB.line}" stroke-width="1.6"/>
    <path d="M40 34c13 0 21 8 21 19s-9 19-21 19-21-8-21-19 8-19 21-19z" fill="${KB.cream}"/>
    <path d="M36 17q4 7 8 0" stroke="${KB.line}" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".7"/>
    <ellipse cx="22" cy="50" rx="5.5" ry="3.4" fill="${KB.pink}" opacity=".75"/><ellipse cx="58" cy="50" rx="5.5" ry="3.4" fill="${KB.pink}" opacity=".75"/>
    <ellipse cx="40" cy="46.5" rx="2.8" ry="2" fill="${KB.nose}"/>${face}${o.neck !== 'cape' ? on('neck') : ''}
    <g class="card"><rect x="29" y="58" width="22" height="13" rx="3.5" fill="var(--lang)" stroke="var(--lang-dark)" stroke-width="1.6"/>
    <path d="M36 62l-3 2.5 3 2.5M44 62l3 2.5-3 2.5M41.5 61l-3 7" stroke="var(--lang-ink)" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
    <ellipse cx="29" cy="63" rx="4.2" ry="3.6" fill="${KB.cream}" stroke="${KB.line}" stroke-width="1.4"/><ellipse cx="51" cy="63" rx="4.2" ry="3.6" fill="${KB.cream}" stroke="${KB.line}" stroke-width="1.4"/>${on('face')}${on('head')}</g></svg>`;
}

/* Disfraces de Kibi: piezas que se dibujan encima, sin cambiar su forma, su cara ni sus colores.
   [id, hueco, logro que lo desbloquea (null: libre desde el principio)]. La capa va detrás de Kibi. */
const OUTFITS = [
  ['cap', 'head', null], ['party', 'head', 'first'], ['flower', 'head', 'perfect'], ['beanie', 'head', 'streak3'], ['grad', 'head', 'week'],
  ['headphones', 'head', 'poly'], ['wizard', 'head', 'xp1000'], ['crown', 'head', 'course'],
  ['glasses', 'face', null], ['hearts', 'face', 'extra'], ['shades', 'face', 'run50'],
  ['scarf', 'neck', 'half'], ['chain', 'neck', 'run10'], ['cape', 'neck', 'reto'],
];
const SLOTS = ['head', 'face', 'neck'];
const outfitOpen = id => { const r = OUTFITS.find(([k]) => k === id); return !!r && (!r[2] || !!S.ach[r[2]]); };
// Lo que lleva puesto: solo piezas que existen, en su hueco y ya desbloqueadas (el estado puede venir de otra versión).
function wearing() {
  const o = (S && S.outfit) || {};
  return Object.fromEntries(SLOTS.map(sl => [sl, OUTFITS.some(([k, h]) => k === o[sl] && h === sl) && outfitOpen(o[sl]) ? o[sl] : null]));
}
const DARK = '#2B2F3A', GOLD = '#F2C230', GOLD_D = '#B8860B', RED = '#D9534F', RED_D = '#A23431';
const KIT = {
  cap: `<path d="M26.5 18.5Q27 6 40 6t13.5 12.5z" fill="var(--lang)" stroke="var(--lang-dark)" stroke-width="1.6" stroke-linejoin="round"/><path d="M51 17.5q8-1.5 13 2.5q-6 2-13.5.5z" fill="var(--lang-dark)"/><circle cx="40" cy="6.4" r="1.8" fill="var(--lang-dark)"/>`,
  party: `<g transform="rotate(-12 40 17)"><path d="M31 17.5 40-3l9 20.5z" fill="#F06EAA" stroke="#B8417A" stroke-width="1.4" stroke-linejoin="round"/><path d="M35.4 8h9.2M33.4 13h13.2" stroke="#FFD54A" stroke-width="2.4"/><circle cx="40" cy="-3.6" r="2.8" fill="#FFD54A"/></g>`,
  flower: `<g transform="translate(60 12)">${[0, 72, 144, 216, 288].map(a => `<ellipse rx="2.6" ry="4.4" cy="-4" fill="#fff" stroke="#E2C9A0" stroke-width=".8" transform="rotate(${a})"/>`).join('')}<circle r="2.6" fill="#FFC83D"/></g>`,
  beanie: `<path d="M24 19.5Q24 4 40 4t16 15.5z" fill="${RED}" stroke="${RED_D}" stroke-width="1.5"/><rect x="22.5" y="15" width="35" height="6.5" rx="3.2" fill="#E8716D" stroke="${RED_D}" stroke-width="1.5"/><circle cx="40" cy="3.4" r="3.8" fill="#FBEFE2" stroke="#D8C6B0"/>`,
  grad: `<path d="M31 11v6.5q9 4 18 0V11" fill="${DARK}"/><path d="M20 10 40 3l20 7-20 7z" fill="#383D4A" stroke="#1E2129" stroke-width="1.3" stroke-linejoin="round"/><path d="M40 10l15 3v8" stroke="${GOLD}" stroke-width="1.4" fill="none"/><path d="M53.6 20.5h2.8l.6 4h-4z" fill="${GOLD}"/><circle cx="40" cy="10" r="1.4" fill="${GOLD}"/>`,
  headphones: `<path d="M15 31Q15 6 40 6t25 25" stroke="${DARK}" stroke-width="3.4" fill="none" stroke-linecap="round"/><rect x="9" y="26" width="9" height="15" rx="4" fill="var(--lang)" stroke="var(--lang-dark)" stroke-width="1.6"/><rect x="62" y="26" width="9" height="15" rx="4" fill="var(--lang)" stroke="var(--lang-dark)" stroke-width="1.6"/>`,
  wizard: `<path d="M28 17.5 43-9l9 26.5z" fill="#6B4FBB" stroke="#47317F" stroke-width="1.5" stroke-linejoin="round"/><ellipse cx="40" cy="17.5" rx="17" ry="3.6" fill="#7D61CC" stroke="#47317F" stroke-width="1.5"/><path d="M41 3l1 2.2 2.4.3-1.8 1.6.5 2.4-2.1-1.2-2.1 1.2.5-2.4-1.8-1.6 2.4-.3z" fill="#FFD54A"/><circle cx="36.5" cy="12" r="1.1" fill="#FFD54A"/>`,
  crown: `<path d="M27.5 18 26 6l7.5 5.5L40 2l6.5 9.5L54 6l-1.5 12z" fill="${GOLD}" stroke="${GOLD_D}" stroke-width="1.5" stroke-linejoin="round"/><circle cx="40" cy="13" r="2" fill="#E0445A"/><circle cx="32" cy="14.5" r="1.4" fill="#5BA8E6"/><circle cx="48" cy="14.5" r="1.4" fill="#5BA8E6"/>`,
  glasses: `<g fill="rgba(255,255,255,.18)" stroke="${DARK}" stroke-width="2"><circle cx="30" cy="40" r="7.2"/><circle cx="50" cy="40" r="7.2"/></g><path d="M37.2 39q2.8-2 5.6 0M22.8 39 16 36.5M57.2 39 64 36.5" stroke="${DARK}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  hearts: `<g fill="#E0445A" fill-opacity=".5" stroke="#B52A40" stroke-width="1.6" stroke-linejoin="round"><path d="M30 46.5c-5-3.5-8-6-8-9.2a3.9 3.9 0 0 1 8-1.6 3.9 3.9 0 0 1 8 1.6c0 3.2-3 5.7-8 9.2z"/><path d="M50 46.5c-5-3.5-8-6-8-9.2a3.9 3.9 0 0 1 8-1.6 3.9 3.9 0 0 1 8 1.6c0 3.2-3 5.7-8 9.2z"/></g><path d="M38 38.5h4M22 37.5l-6-1.5M58 37.5l6-1.5" stroke="#B52A40" stroke-width="1.6" stroke-linecap="round"/>`,
  shades: `<path d="M21 35h16v5h-2v2H24v-2h-3zM43 35h16v5h-3v2H45v-2h-2zM37 35h6v2.4h-6zM16 35h5v2.4h-5zM59 35h5v2.4h-5z" fill="#15171D"/><path d="M24 37h3v1.6h-3zM46 37h3v1.6h-3z" fill="#fff" opacity=".85"/>`,
  scarf: `<path d="M15.5 52.5Q40 64 64.5 52.5l1.5 6Q40 71 14 58.5z" fill="${RED}" stroke="${RED_D}" stroke-width="1.4" stroke-linejoin="round"/><path d="M55 59.5l2 13h6.5L62 58z" fill="#E8716D" stroke="${RED_D}" stroke-width="1.4" stroke-linejoin="round"/>`,
  chain: `<path d="M20 53.5Q40 66 60 53.5" stroke="#E0A100" stroke-width="2.6" fill="none" stroke-dasharray="2.6 1.4" stroke-linecap="round"/>`,
  cape: `<path d="M24 26Q8 48 5 73.5h70Q72 48 56 26z" fill="#C8323C" stroke="#8E1F27" stroke-width="1.5" stroke-linejoin="round"/>`,
};
// Lo que dice Kibi: primero lo que importa ahora (vidas, meta, racha); si no, un saludo según la hora. poke: una frase al azar.
function kibiSays(poke) {
  if (poke) return t('kibi.quip.' + Math.floor(Math.random() * 8));
  if (S.hearts === 0) return t('kibi.say.noHearts');
  if (dailyXp() >= S.goal) return t('kibi.say.goalDone');
  if (S.streak >= 2 && S.lastDay !== today()) return t('kibi.say.keepStreak', { n: S.streak });
  const hr = new Date().getHours();
  return t(hr < 6 || hr >= 21 ? 'kibi.say.night' : hr < 13 ? 'kibi.say.morning' : 'kibi.say.afternoon');
}
const bubble = html => `<div class="bubble" aria-live="polite"><span class="bubble-tag">kibi.say()</span><p>${html}</p></div>`;
const pokeKibi = (mood, size, cls = '') => `<button class="kibi-poke ${cls}" data-act="poke" aria-label="${t('kibi.poke')}">${kibi(mood, size)}</button>`;

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
  if (S.daily.day !== today()) P.totals(S, today());
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
// El progreso se guarda por identificador de día (order.js); d es la posición del día (0-29) en el temario actual.
const ORDER = window.NibbleOrder;
const dayId = (c, d) => ORDER[c][d];
const dayPos = (c, id) => ORDER[c].indexOf(id);
const nodeKey = (c, d, k) => `${c}:${dayId(c, d)}:${k}`;
function currentIndex(c) { for (let i = 0; i < DAYS * PER_DAY; i++) if (!S.done[nodeKey(c, Math.floor(i / PER_DAY), i % PER_DAY)]) return i; return DAYS * PER_DAY; }
const doneCount = c => { let n = 0; for (let i = 0; i < DAYS * PER_DAY; i++) if (S.done[nodeKey(c, Math.floor(i / PER_DAY), i % PER_DAY)]) n++; return n; };
const dayDone = (c, d) => { let n = 0; for (let k = 0; k < PER_DAY; k++) if (S.done[nodeKey(c, d, k)]) n++; return n; };
const currentDay = c => Math.min(DAYS - 1, Math.floor(currentIndex(c) / PER_DAY));
// Un día con algún nivel hecho sigue abierto aunque el temario se haya reordenado y haya otro pendiente antes.
const dayUnlocked = (c, d) => d * PER_DAY <= currentIndex(c) || dayDone(c, d) > 0;
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
  if (CUR.data) CUR.data.days.forEach((day, di) => day.x.forEach((x, i) => { x.ref = `${CUR.course}:${dayId(CUR.course, di)}:${i}`; }));
}
const dayData = d => CUR && CUR.data && CUR.data.days[d];
// Un curso puede estar a medio escribir: los días que faltan se muestran como "Próximamente".
const dayTitle = d => (dayData(d) ? dayData(d).t : t('day.soon'));

/* ---------- navegación ---------- */
function parseHash() {
  const h = location.hash.replace(/^#/, '');
  let m;
  if ((m = h.match(/^day-(\d+)-code-(\d+)$/))) return { v: 'code', d: Math.max(0, Math.min(DAYS - 1, +m[1] - 1)), i: +m[2] };
  if ((m = h.match(/^day-(\d+)(?:-(guide|practice))?$/))) return { v: 'day', d: Math.max(0, Math.min(DAYS - 1, +m[1] - 1)), tab: m[2] || null };
  if (h === 'courses' || h === 'profile' || h === 'kibi') return { v: h };
  if (h === 'sugerencias') return { v: 'suggest' };
  return { v: 'map' };
}
function go(hash) { if (location.hash === '#' + hash) render(true); else location.hash = hash; }
const dayHash = (d, tab) => `day-${d + 1}${tab ? '-' + tab : ''}`;

/* ---------- piezas comunes ---------- */
const THEMES = ['auto', 'light', 'dark'];
const FONTS = ['s', 'm', 'l'];
// Temas de color del código: el primero está siempre; los demás se desbloquean con un logro.
const CODE_THEMES = [['ink', null], ['phosphor', 'streak3'], ['paper', 'week'], ['amber', 'run50']];
const codeThemeOpen = id => { const r = CODE_THEMES.find(([k]) => k === id); return !!r && (!r[1] || !!S.ach[r[1]]); };
const darkMQ = window.matchMedia && matchMedia('(prefers-color-scheme: dark)');
// Tema, tamaño de letra, animaciones y tema del código. theme.js los aplica antes de pintar para que no parpadee.
function applyColorScheme() {
  const th = THEMES.includes(S.theme) ? S.theme : 'auto', de = document.documentElement;
  if (th === 'auto') delete de.dataset.theme; else de.dataset.theme = th;
  const fs = FONTS.includes(S.font) ? S.font : 'm';
  if (fs === 'm') delete de.dataset.font; else de.dataset.font = fs;
  if (S.motion === 'reduce') de.dataset.motion = 'reduce'; else delete de.dataset.motion;
  de.dataset.code = codeThemeOpen(S.codeTheme) ? S.codeTheme : 'ink';
  try { localStorage.setItem('nibble.theme', th); localStorage.setItem('nibble.font', fs); localStorage.setItem('nibble.motion', S.motion === 'reduce' ? 'reduce' : ''); } catch (e) { /* */ }
  const dark = th === 'dark' || (th === 'auto' && darkMQ && darkMQ.matches);
  const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = dark ? '#0F1014' : '#F4F2EC';
}
if (darkMQ && darkMQ.addEventListener) darkMQ.addEventListener('change', () => applyColorScheme());
function applyTheme() {
  const m = META[S.course], r = document.documentElement.style;
  r.setProperty('--lang', m.color); r.setProperty('--lang-dark', m.dark); r.setProperty('--lang-ink', m.ink); r.setProperty('--lang-btn', m.btn);
  document.documentElement.lang = S.locale || window.I18N.get();
  applyColorScheme();
}
const badge = c => { const m = META[c]; return `<span class="badge" style="--c:${m.btn};--cd:${m.dark};--ci:${m.ink}">${esc(m.short)}</span>`; };
const dailyXp = () => (S.daily.day === today() ? S.daily.xp : 0);

/* Un día, un byte: cada nivel aprobado enciende un bit (el nivel 1 es el bit más alto). */
const byteOf = (c, d) => { let v = 0; for (let k = 0; k < PER_DAY; k++) if (S.done[nodeKey(c, d, k)]) v |= 128 >> k; return v; };
const hex = v => '0x' + v.toString(16).toUpperCase().padStart(2, '0');
function bitsHTML(c, d, cur = -1) {
  let h = '';
  for (let k = 0; k < PER_DAY; k++) h += `<i class="${S.done[nodeKey(c, d, k)] ? 'on' : ''}${k === cur ? ' cur' : ''}${k === RETO ? ' reto' : ''}"></i>`;
  return `<span class="bits" role="img" aria-label="${t('bits.aria', { n: dayDone(c, d), m: PER_DAY })}">${h}</span>`;
}
// Registro de 8 bits: el día como una placa con 8 luces (una por nivel, la 7 a la izquierda) y un visor con su byte.
// cur: nivel que toca ahora; just: nivel recién completado (su luz se enciende con una transición).
function registerHTML(c, d, o = {}) {
  const v = byteOf(c, d), bin = v.toString(2).padStart(8, '0');
  let leds = '';
  for (let k = 0; k < PER_DAY; k++) {
    const on = S.done[nodeKey(c, d, k)];
    leds += `<span class="led${on ? ' on' : ''}${k === RETO ? ' reto' : ''}${k === o.cur ? ' cur' : ''}${k === o.just ? ' just' : ''}"><i></i><small>${7 - k}</small></span>`;
  }
  return `<div class="register" role="img" aria-label="${t('bits.aria', { n: dayDone(c, d), m: PER_DAY })} · ${hex(v)}">
    <div class="reg-top"><span>${esc(META[c].short)}·${String(d + 1).padStart(2, '0')}</span><span class="screw"></span><span class="screw"></span><span>8 bit</span></div>
    <div class="reg-leds">${leds}</div>
    <div class="reg-lcd"><b>${hex(v)}</b><span>${bin.slice(0, 4)} ${bin.slice(4)}</span></div></div>`;
}
// Los 30 días de un curso en una tira: lleno, a medias o vacío.
function stripHTML(c) {
  let h = ''; for (let d = 0; d < DAYS; d++) { const n = dayDone(c, d); h += `<i class="${n === PER_DAY ? 'on' : n ? 'half' : ''}"></i>`; }
  return `<span class="strip" aria-hidden="true">${h}</span>`;
}
function heartsMeter(big) {
  return `<div class="hmeter ${big ? 'big' : ''}"><b>${I.heart}${S.hearts}<small>/${MAXH}</small></b>
    <span class="meter heart" role="meter" aria-valuemin="0" aria-valuemax="${MAXH}" aria-valuenow="${S.hearts}" aria-label="${t('hearts.aria', { n: S.hearts, m: MAXH })}"><i style="width:${S.hearts / MAXH * 100}%"></i></span></div>`;
}
function langPick() { return `<div class="langpick" role="group" aria-label="${t('profile.lang')}">${LOCALES.map(l => `<button class="${S.locale === l ? 'on' : ''}" data-locale="${l}" aria-pressed="${S.locale === l}" title="${t('lang.' + l)}">${l}</button>`).join('')}</div>`; }
function syncHTML() {
  const st = Store.sync;
  return `<div class="sync ${st === 'ok' ? 'ok' : st === 'busy' ? 'busy' : st === 'err' ? 'err' : ''}" data-sync><i></i>${t('sync.' + st)}</div>`;
}

// El nivel extra está en el panel de vidas y Sugerencias en el perfil (en el móvil no caben en el menú).
function navItems() {
  const cd = currentDay(S.course);
  return [
    ['map', t('nav.map'), I.map, '#map'],
    ['today', t('nav.today'), I.play, '#' + dayHash(cd)],
    ['courses', t('nav.courses'), I.grid, '#courses'],
    ['kibi', t('nav.kibi'), I.hanger, '#kibi'],
    ['profile', t('nav.profile'), I.user, '#profile'],
    ['suggest', t('nav.suggest'), I.chat, '#sugerencias'],
  ];
}
function navHTML(compact) {
  const cd = currentDay(S.course);
  return navItems().filter(([id]) => !compact || id !== 'suggest').map(([id, label, ic, href]) => {
    const on = (id === 'map' && route.v === 'map') || (id === 'today' && route.v === 'day' && route.d === cd) || id === route.v;
    return `<button class="navbtn ${on ? 'on' : ''}" data-go="${href.slice(1)}" ${on ? 'aria-current="page"' : ''}>${ic}<span class="lbl">${label}</span></button>`;
  }).join('') + (compact ? '' : `<button class="navbtn" data-act="palette">${I.search}<span class="lbl">${t('nav.search')}</span><span class="kbd">Ctrl K</span></button>`);
}

/* Indicadores de la barra superior: cada uno con su nombre accesible y una ficha al tocarlo que explica qué es. */
let statOpen = null;
function statsHTML() {
  return [['streak', I.flame, S.streak, S.lastDay === today()], ['run', I.chain, S.run.cur, S.run.cur > 0],
    ['xp', I.bolt, S.xp, true], ['hearts', I.heart, S.hearts, S.hearts > 0]].map(([id, ic, n, on]) => {
    const unit = id === 'xp' ? 'XP' : id === 'hearts' ? `/${MAXH}` : t('stat.u.' + id, { n });
    return `<button class="stat ${id} ${on ? 'on' : ''}" data-stat="${id}" aria-expanded="${statOpen === id}" aria-label="${esc(t('stat.' + id))}: ${n} ${esc(unit)}">${ic}<b>${n}</b><small>${esc(unit)}</small></button>`;
  }).join('');
}
function statPopHTML() {
  const id = statOpen; if (!id) return '';
  let body;
  if (id === 'hearts') body = `${heartsMeter()}<p>${t('hearts.desc', { n: EXTRA_HEARTS })}</p><p class="timer" data-timer>${timerText()}</p>
    <button class="btn gold small block" data-act="extra">${I.plus}${t('hearts.extraBtn', { n: EXTRA_HEARTS })}</button>`;
  else if (id === 'streak') body = `<p>${t('stat.streak.d')}</p><p class="note">${S.lastDay === today() ? t('stat.streak.on') : t('stat.streak.off')}</p>`;
  else if (id === 'run') body = `<p>${t('stat.run.d')}</p><p class="note">${t('stat.run.best', { n: S.run.best || 0 })}</p>`;
  else body = `<p>${t('stat.xp.d')}</p><p class="note">${t('goal.today', { n: dailyXp(), m: S.goal })}</p>`;
  return `<div class="statpop ${id}" role="dialog" aria-label="${esc(t('stat.' + id))}"><h3>${t('stat.' + id)}</h3>${body}</div>`;
}
function courseMenu() {
  return `<div class="dropdown" role="menu"><p class="dh">${t('top.courses')}</p>${COURSES.map(c => {
    const p = Math.round(doneCount(c) / (DAYS * PER_DAY) * 100);
    return `<button class="ditem ${c === S.course ? 'on' : ''}" role="menuitem" data-course="${c}">${badge(c)}<span><b>${META[c].name}</b><span class="meter lang" style="--c:${META[c].color}"><i style="width:${p}%"></i></span></span><small>${p}%</small></button>`;
  }).join('')}</div>`;
}
let menuOpen = false;
function topbarHTML() {
  return `<div class="dropwrap"><button class="cswitch" data-act="coursemenu" aria-haspopup="menu" aria-expanded="${menuOpen}">${badge(S.course)}<span class="cname">${META[S.course].name}</span>${I.caret}</button>${menuOpen ? courseMenu() : ''}</div>
  <button class="searchbtn" data-act="palette" aria-label="${t('nav.search')}">${I.search}<span class="lbl">${t('nav.search')}</span><span class="kbd">Ctrl K</span></button>
  <span class="grow"></span><div class="stats">${statsHTML()}${statPopHTML()}</div>`;
}
function railHTML() {
  const dx = dailyXp(), pct = Math.min(100, dx / S.goal * 100), n = OUTFITS.filter(([k]) => outfitOpen(k)).length;
  return `<section class="card kibicard"><button class="kibi-poke" data-go="kibi" aria-label="${t('kibi.dress')}">${kibi('idle', 56)}</button><div><h3>${t('kibi.title')}</h3><p class="note">${t('kibi.count', { n, m: OUTFITS.length })}</p></div></section>
  <section class="card"><div class="card-h"><h3>${t('hearts.title')}</h3><span class="timer" data-timer>${timerText()}</span></div>${heartsMeter()}
    <p class="note">${t('hearts.desc', { n: EXTRA_HEARTS })}</p><button class="btn gold small block" data-act="extra">${I.plus}${t('hearts.extraBtn', { n: EXTRA_HEARTS })}</button></section>
  <section class="card"><div class="card-h"><h3>${t('goal.title')}</h3><span class="mono">${dx}/${S.goal} XP</span></div>
    <span class="meter" role="progressbar" aria-label="${t('goal.title')}" aria-valuemin="0" aria-valuemax="${S.goal}" aria-valuenow="${dx}"><i style="width:${pct}%"></i></span>
    <p class="note">${dx >= S.goal ? t('goal.done') : t('goal.left', { n: S.goal - dx })}</p></section>
  <section class="card">${syncHTML()}${Store.user ? `<p class="note">${esc(Store.user.email || '')}</p>` : ''}</section>`;
}
function renderChrome() {
  $('#brand').innerHTML = `${kibi('idle', 36)}<span class="lbl">Nibble</span>`;
  $('#sidenav').innerHTML = navHTML();
  $('#bottomnav').innerHTML = navHTML(true);
  $('#topbar').innerHTML = topbarHTML();
  $('#rail').innerHTML = railHTML();
  // El estado del guardado está solo en el panel derecho (antes salía también aquí).
  const who = Store.user ? `<div class="who"><span class="av">${esc((Store.user.email || '?')[0].toUpperCase())}</span><span class="em">${esc(Store.user.email || '')}</span><button class="iconbtn" data-act="signout" title="${t('profile.signout')}" aria-label="${t('profile.signout')}">${I.logout}</button></div>` : '';
  $('#sidefoot').innerHTML = langPick() + who;
}

/* ---------- vista: mapa ---------- */
function dayRow(c, d, cur, cd) {
  const n = dayDone(c, d), soon = !dayData(d), done = n === PER_DAY, isCur = d === cd && cur < DAYS * PER_DAY;
  const st = soon ? 'soon' : done ? 'done' : isCur ? 'cur' : !dayUnlocked(c, d) ? 'lock' : 'open';
  const end = st === 'done' ? I.check : st === 'lock' || st === 'soon' ? I.lock : st === 'cur' ? `<span class="go">${t('map.go')}</span>` : I.right;
  return `<button class="dayrow ${st}" data-go="${dayHash(d)}" style="--i:${d % 10}" aria-label="${t('day.n', { d: d + 1 })}: ${esc(dayTitle(d))}. ${t('bits.aria', { n, m: PER_DAY })}">
    <span class="dnum">${st === 'cur' ? kibi('idle', 30, 'still') : String(d + 1).padStart(2, '0')}</span><span class="dtitle">${esc(dayTitle(d))}</span>${bitsHTML(c, d, st === 'cur' ? cur % PER_DAY : -1)}<code class="hex">${hex(byteOf(c, d))}</code><span class="dend">${end}</span></button>`;
}
function renderMap() {
  const c = S.course, cur = currentIndex(c), cd = currentDay(c), dn = doneCount(c), all = cur >= DAYS * PER_DAY;
  let h = `<div class="wrap">`;
  if (CUR.fallback) h += `<p class="notice">${t('content.fallback')}</p>`;
  h += `<section class="hero"><div class="hero-copy"><p class="eyebrow">${META[c].name} · ${t('map.dayOf2', { d: cd + 1 })}</p>
    <h1>${all ? t('map.allDone') : esc(dayTitle(cd))}</h1>
    <p class="lead">${all ? t('map.allDoneDesc') : esc(dayData(cd) ? dayData(cd).d : '')}</p>
    <div class="row"><button class="btn primary" data-go="${dayHash(cd)}">${I.play}${dn ? t('map.continue', { d: cd + 1 }) : t('map.start')}</button><small class="mono">${t('map.levels', { n: dn, m: DAYS * PER_DAY })}</small></div></div>
    <div class="hero-visual">${registerHTML(c, cd, { cur: all ? -1 : cur % PER_DAY })}</div>
    <span class="meter course" role="progressbar" aria-label="${t('map.title', { c: META[c].name })}" aria-valuemin="0" aria-valuemax="${DAYS * PER_DAY}" aria-valuenow="${dn}"><i style="width:${dn / (DAYS * PER_DAY) * 100}%"></i></span></section>`;
  h += `<div class="kibistrip">${pokeKibi('idle', 64)}${bubble(S.stats.lessons === 0 ? `<b>${t('map.welcomeTitle')}</b> ${t('map.welcome')}` : kibiSays())}<button class="btn small ghost" data-go="kibi">${I.hanger}<span>${t('kibi.dress')}</span></button></div>`;
  // Un curso con semanas (NibbleWeeks) se agrupa por semana; el resto, en tres bloques de 10 días.
  const weeks = window.NibbleWeeks && NibbleWeeks[c];
  const groups = weeks ? weeks.map((b, i) => [i ? weeks[i - 1] : 0, b, t('phase.week', { n: i + 1 })]) : [0, 1, 2].map(p => [p * 10, p * 10 + 10, t('phase.' + p)]);
  for (const [a, b, name] of groups) {
    let full = 0; for (let d = a; d < b; d++) if (dayDone(c, d) === PER_DAY) full++;
    h += `<section class="phase"><div class="phase-h"><h2>${name}</h2><span class="mono">${t('phase.days', { a: a + 1, b })} · ${full}/${b - a}</span></div><div class="dayrows">`;
    for (let d = a; d < b; d++) h += dayRow(c, d, cur, cd);
    h += `</div></section>`;
  }
  return h + `</div>`;
}

/* ---------- vista: día ---------- */
function renderDay() {
  const c = S.course, d = route.d, day = dayData(d), cur = currentIndex(c), unlocked = dayUnlocked(c, d), n = dayDone(c, d);
  if (!day) return `<div class="wrap"><div class="nextday">${kibi('idle', 90, 'float')}<h2>${t('day.n', { d: d + 1 })}: ${t('day.soon')}</h2><p>${t('day.soonDesc')}</p>
    <button class="btn primary" data-go="map">${t('nav.map')}</button></div></div>`;
  const tab = route.tab || (unlocked && n > 0 ? 'practice' : 'guide');
  const curK = cur >= d * PER_DAY && cur < (d + 1) * PER_DAY ? cur % PER_DAY : -1;
  let h = `<div class="wrap">${CUR.fallback ? `<p class="notice">${t('content.fallback')}</p>` : ''}
   <header class="dayhead"><div class="top"><button class="crumb" data-go="map">${I.left}${t('nav.map')}</button>
     <div class="nav2"><button class="iconbtn" data-go="${dayHash(d - 1)}" ${d === 0 ? 'disabled' : ''} aria-label="${t('day.prev')}">${I.left}</button><button class="iconbtn" data-go="${dayHash(d + 1)}" ${d === DAYS - 1 ? 'disabled' : ''} aria-label="${t('day.next')}">${I.right}</button></div></div>
     <p class="eyebrow">${t('day.nOf', { d: d + 1 })} · ${t('lvl.' + phase(d))}</p><h1>${esc(day.t)}</h1><p class="lead">${esc(day.d)}</p>
     <div class="daybyte">${bitsHTML(c, d, curK)}<code class="hex">${hex(byteOf(c, d))}</code><small>${t('bits.aria', { n, m: PER_DAY })}</small></div></header>
   <div class="tabs" role="tablist" data-tab="${tab}">
     <button role="tab" aria-selected="${tab === 'guide'}" class="${tab === 'guide' ? 'on' : ''}" data-go="${dayHash(d, 'guide')}">${I.book}${t('day.guide')}</button>
     <button role="tab" aria-selected="${tab === 'practice'}" class="${tab === 'practice' ? 'on' : ''}" data-go="${dayHash(d, 'practice')}">${I.target}${t('day.practice')}</button></div>`;
  if (tab === 'guide') {
    h += `<div class="readbar" aria-hidden="true"><i></i></div><div class="guide">${day.guide.map((s, i) => `<section class="gsec ${s.real ? 'real' : ''}">
      <h2>${esc(s.h)}${s.real ? `<span class="tag-real">${I.bulb}${t('day.real')}</span>` : ''}</h2>
      ${s.p.map(p => `<p>${rich(p)}</p>`).join('')}
      ${s.code ? `<div class="codewrap">${codeBlock(s.code, c)}<button class="copybtn" data-copy="${d}:${i}">${t('day.copy')}</button></div>` : ''}</section>`).join('')}
      ${(day.lab || []).map((ex, i) => `<section class="labcard"><span class="ex-kind write">${I.code}${t('code.kind')}</span><h2>${t('code.title')}</h2><p>${rich(ex.q)}</p>
        <button class="btn" data-go="${dayHash(d)}-code-${i}">${I.code}${t('code.open')}</button></section>`).join('')}
      <div class="guide-end">${kibi('happy', 64)}<p>${t('day.guideEnd')}</p><button class="btn primary" data-go="${dayHash(d, 'practice')}">${I.target}${t('day.startPractice')}</button></div></div>
      <div class="practice-fab" id="fab"><button class="btn primary block" data-go="${dayHash(d, 'practice')}">${I.target}${t('day.startPractice')}</button></div>`;
  } else if (!unlocked) {
    h += `<div class="nextday">${I.lock.replace('<svg', '<svg style="width:40px;height:40px"')}<h2>${t('day.locked')}</h2><p>${t('day.lockedDesc')}</p>
      <button class="btn gold" data-jump="${d}">${t('day.jump')}</button></div>`;
  } else {
    h += `<ol class="levels">`;
    for (let k = 0; k < PER_DAY; k++) {
      const gi = d * PER_DAY + k, key = nodeKey(c, d, k), st = S.done[key] ? 'done' : gi === cur ? 'current' : 'locked', isReto = k === RETO;
      const xp = st === 'done' ? (isReto ? 5 : 2) : isReto ? 20 : 5;
      const desc = st === 'locked' ? t('node.lockedDesc') : t(isReto ? 'node.retoDesc' : 'node.practiceDesc', { n: sectionsOf(k) }) + (st === 'done' ? ' ' + t('node.done') : '');
      h += `<li class="level ${st} ${isReto ? 'reto' : ''} ${justDone === key ? 'just' : ''} ${justUnlock === key ? 'unlock' : ''}">
        <span class="lbit" aria-hidden="true">${st === 'done' ? 1 : 0}</span>
        <div class="linfo"><span class="lk">${isReto ? I.crown : ''}${t('level.bit', { n: k + 1 })}</span><b>${isReto ? t('node.reto') : t('node.practice', { n: k + 1 })}</b><p>${desc}</p></div>
        ${st === 'locked' ? `<span class="lstate" role="img" aria-label="${t('node.locked')}">${I.lock}</span>` : `<button class="btn small ${st === 'current' ? (isReto ? 'gold' : 'primary') : 'ghost'}" data-start="${key}">${st === 'done' ? t('node.replay', { xp }) : t('node.go', { xp })}</button>`}</li>`;
    }
    h += `</ol>`;
    if (S.done[nodeKey(c, d, RETO)]) h += `<div class="nextday done">${kibi('happy', 80)}<h2>${d === DAYS - 1 ? t('day.allDone') : t('day.complete')}</h2><p class="mono">${t('day.byteWritten', { h: hex(byteOf(c, d)) })}</p>${d < DAYS - 1 ? `<button class="btn primary" data-go="${dayHash(d + 1)}">${t('day.goNext', { d: d + 2 })}</button>` : ''}</div>`;
  }
  return h + `</div>`;
}
/* ---------- vista: escribir un programa (day.lab) ---------- */
// CodeMirror solo se descarga al abrir esta vista. Al cambiar de versión: node scripts/build-vendor.mjs y actualiza CM_SRC.
const CM_SRC = 'assets/vendor/codemirror-6.44.2.js';
const SYMBOLS = ['(', ')', '[', ']', '{', '}', ':', ';', '"', "'", '=', '<', '>', '\t'];
let cm = null, cmLoad = null, cmPending = null, draftTimer = 0;
const labKey = (c, d, i) => `${c}:${dayId(c, d)}:lab:${i}`;
const labEx = () => { const day = dayData(route.d); return day && day.lab ? day.lab[route.i] : null; };
function loadCM() {
  if (window.NibbleCM) return Promise.resolve(window.NibbleCM);
  return cmLoad || (cmLoad = new Promise((ok, ko) => {
    const s = document.createElement('script'); s.src = CM_SRC;
    s.onload = () => ok(window.NibbleCM);
    s.onerror = () => { cmLoad = null; s.remove(); ko(new Error('cm')); };
    document.head.append(s);
  }));
}
// Guarda el borrador pendiente (al escribir se espera un momento; al salir de la vista, al instante).
function flushDraft() {
  clearTimeout(draftTimer);
  if (!cmPending) return;
  const [key, start, code] = cmPending; cmPending = null;
  let ok = true;
  if (code === start) P.dropDraft(S, key); else ok = P.saveDraft(S, key, code);
  Store.save();
  const note = $('#draftNote'); if (note) note.textContent = ok ? t('code.saved') : t('code.tooLong');
}
function renderCode() {
  const c = S.course, d = route.d, day = dayData(d), ex = labEx(), canRun = c === 'python';
  if (!ex) return renderDay();
  return `<div class="wrap codeview">
    <header class="dayhead"><div class="top"><button class="crumb" data-go="${dayHash(d, 'guide')}">${I.left}${esc(day.t)}</button></div>
      <p class="eyebrow">${t('day.nOf', { d: d + 1 })} · ${t('code.kind')}</p><h1>${t('code.title')}</h1><p class="lead">${rich(ex.q)}</p></header>
    <div class="expect"><span>${t('code.expected')}</span><pre>${esc(ex.tests[0].out)}</pre></div>
    <div class="editor" id="editor"><p class="editor-msg">${t('code.loading')}</p></div>
    <div class="symbar" role="toolbar" aria-label="${t('code.symbols')}">${SYMBOLS.map(s => `<button type="button" data-sym="${esc(s)}" aria-label="${s === '\t' ? t('code.tab') : esc(s)}">${s === '\t' ? '⇥' : esc(s)}</button>`).join('')}</div>
    <div class="code-actions"><small class="mono" id="draftNote" aria-live="polite">${P.draft(S, labKey(c, d, route.i)) !== null ? t('code.saved') : ''}</small>
      <button class="btn ghost" data-act="code-reset">${t('code.reset')}</button>
      ${canRun ? `<button class="btn ghost" data-act="code-check">${I.check}${t('code.check')}</button><button class="btn primary" data-act="code-run">${I.play}${t('code.run')}</button>`
        : `<button class="btn primary" disabled data-soon title="${t('code.soon')}">${I.play}${t('code.run')}<small>${t('code.soon')}</small></button>`}</div>
    <section class="outpanel" id="outpanel" aria-live="polite"><h2>${t('code.output')}</h2><p>${canRun ? t('run.hint') : t('code.outputSoon')}</p></section></div>`;
}
async function mountEditor() {
  const host = $('#editor'), ex = labEx(); if (!host || !ex) return;
  const key = labKey(S.course, route.d, route.i);
  try {
    const CM = await loadCM();
    if (!host.isConnected) return;
    host.replaceChildren();
    cm = CM.create(host, { doc: P.draft(S, key) ?? ex.start, lang: S.course, label: t('code.editor'),
      onChange: code => { cmPending = [key, ex.start, code]; clearTimeout(draftTimer); draftTimer = setTimeout(flushDraft, 700); } });
  } catch (e) {
    host.innerHTML = `<p class="editor-msg">${t('code.loadError')}</p>`;
  }
}

/* ---------- ejecutar Python: Pyodide en un Worker (assets/js/py-worker.js) ---------- */
// Se crea al pulsar Ejecutar o Comprobar por primera vez. Un programa que pasa de RUN_MS se corta con terminate()
// y se prepara otro Worker al momento; la página nunca se congela.
const PY_MB = 13, RUN_MS = 5000;
const PYERR = ['NameError', 'SyntaxError', 'IndentationError', 'TabError', 'TypeError', 'ValueError', 'IndexError', 'KeyError', 'ZeroDivisionError',
  'AttributeError', 'EOFError', 'ModuleNotFoundError', 'ImportError', 'RecursionError', 'UnboundLocalError', 'AssertionError', 'FileNotFoundError', 'OverflowError'];
let pyW = null, pyBoot = null, pySeq = 0, runBusy = false;
function pyWorker() {
  if (pyW) return pyBoot;
  const w = pyW = new Worker('assets/js/py-worker.js', { type: 'module' });
  pyBoot = new Promise((ok, ko) => {
    w.onmessage = e => { if (e.data.ready) ok(); else if (e.data.bootError) ko(new Error(e.data.bootError)); };
    w.onerror = e => ko(new Error(e.message || 'worker'));
  });
  pyBoot.catch(() => { w.terminate(); if (pyW === w) pyW = null; });
  return pyBoot;
}
async function pyRun(code, input) {
  await pyWorker();
  const w = pyW, id = ++pySeq;
  return new Promise(ok => {
    const timer = setTimeout(() => { w.terminate(); if (pyW === w) { pyW = null; pyWorker().catch(() => {}); } ok({ type: 'Timeout', out: '', err: '' }); }, RUN_MS);
    w.onmessage = e => { if (e.data.id === id) { clearTimeout(timer); ok(e.data); } };
    w.postMessage({ id, code, input });
  });
}
// Se compara la salida sin \r ni espacios al final de cada línea ni líneas vacías al final.
const normOut = s => String(s || '').replace(/\r\n?/g, '\n').split('\n').map(l => l.trimEnd()).join('\n').trimEnd();
const preOut = (txt, cls) => `<pre class="${cls}">${esc(txt)}</pre>`;
function errHelp(r) {
  const k = r.type === 'Timeout' ? 'Timeout' : PYERR.includes(r.type) ? r.type : 'other';
  return `<div class="runhelp">${kibi('sad', 44)}${bubble(`${r.line ? `<b>${t('run.line', { n: r.line })}</b> ` : ''}${esc(t('pyerr.' + k, { type: r.type }))}`)}</div>`;
}
function setOut(html) { const o = $('#outpanel'); if (o) o.innerHTML = `<h2>${t('code.output')}</h2>${html}`; }
function setRunBusy(on) { runBusy = on; document.querySelectorAll('.code-actions .btn').forEach(b => { if (!b.hasAttribute('data-soon')) b.disabled = on; }); }
// check: false ejecuta con la entrada del primer caso y enseña la salida; true pasa todos los casos y marca cada uno.
async function runCode(check) {
  const ex = labEx(); if (runBusy || !cm || !ex) return;
  setRunBusy(true); flushDraft();
  const code = cm.get();
  let first = true; try { first = !localStorage.getItem('nibble.py'); } catch (e) { /* */ }
  setOut(`<p class="runstate busy">${t(first && !pyW ? 'run.first' : 'run.loading', { mb: PY_MB })}</p>`);
  try { await pyWorker(); try { localStorage.setItem('nibble.py', '1'); } catch (e) { /* */ } }
  catch (e) { setOut(`<p class="runstate bad">${t('run.bootError')}</p>`); setRunBusy(false); return; }
  setOut(`<p class="runstate busy">${t('run.running')}</p>`);
  if (!check) {
    const t0 = performance.now(), r = await pyRun(code, ex.tests[0].in || ''), ms = Math.round(performance.now() - t0);
    setOut(`<p class="runstate ${r.type ? 'bad' : 'ok'}">${r.type ? t('run.failed') : t('run.done', { ms })}</p>${r.out ? preOut(r.out, 'stdout') : ''}${r.err ? preOut(r.err, 'stderr') : ''}
      ${r.cut ? `<p class="note">${t('run.cut')}</p>` : ''}${r.type ? errHelp(r) : r.out ? '' : `<p class="note">${t('run.empty')}</p>`}`);
  } else {
    const rows = [];
    for (const tc of ex.tests) { const r = await pyRun(code, tc.in || ''); rows.push({ tc, r, ok: !r.type && normOut(r.out) === normOut(tc.out) }); }
    const pass = rows.filter(x => x.ok).length, all = pass === rows.length;
    setOut(`<div class="runhelp">${kibi(all ? 'happy' : 'sad', 44)}${bubble(all ? t('run.allPass') : t('run.somePass', { n: pass, m: rows.length }))}</div>
      <ol class="cases">${rows.map(({ tc, r, ok }, i) => `<li class="case ${ok ? 'ok' : 'bad'}"><span class="mark">${ok ? I.check : I.x}</span><div><b>${t('run.case', { n: i + 1 })}</b>
        ${tc.in ? `<small>${t('run.input')}: <code>${esc(tc.in.trimEnd())}</code></small>` : ''}
        ${ok ? '' : `<div class="diff"><span>${t('run.expected')}</span>${preOut(tc.out, 'exp')}<span>${t('run.got')}</span>${preOut(r.out || ' ', 'got')}</div>${r.type ? errHelp(r) : ''}`}</div></li>`).join('')}</ol>`);
    sfx(all ? 'win' : 'bad');
  }
  setRunBusy(false);
}

// Indicador de lectura de la guía y botón fijo "Empezar la práctica" al acercarse al final.
function onScroll() {
  const g = document.querySelector('#main .guide'); if (!g) return;
  const r = g.getBoundingClientRect(), total = Math.max(1, r.height - innerHeight * 0.6), p = Math.min(1, Math.max(0, -r.top / total));
  const bar = document.querySelector('.readbar i'); if (bar) bar.style.transform = `scaleX(${p})`;
  const end = document.querySelector('#main .guide-end'), fab = $('#fab');
  if (fab && end) fab.classList.toggle('show', p > 0.4 && end.getBoundingClientRect().top > innerHeight - 40);
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- vista: cursos ---------- */
function renderCourses() {
  let h = `<div class="page"><p class="eyebrow">${t('nav.courses')}</p><h1>${t('courses.title')}</h1><p class="lead">${t('courses.lead')}</p><div class="ccards">`;
  for (const c of COURSES) {
    const m = META[c], dn = doneCount(c), p = Math.round(dn / (DAYS * PER_DAY) * 100);
    h += `<article class="ccard ${c === S.course ? 'on' : ''}" style="--c:${m.color};--cd:${m.dark};--ci:${m.ink}">
      <div class="top">${badge(c)}<h3>${m.name}</h3>${c === S.course ? `<span class="pill">${t('courses.current')}</span>` : ''}</div><p>${t('course.' + c)}</p>
      ${stripHTML(c)}
      <div class="foot"><small class="mono">${dn === DAYS * PER_DAY ? t('courses.done') : t('courses.next', { d: currentDay(c) + 1 })} · ${p}%</small><button class="btn small ${c === S.course ? 'primary' : 'ghost'}" data-course="${c}" data-open="1">${dn ? t('courses.continue') : t('courses.start')}</button></div></article>`;
  }
  return h + `</div></div>`;
}

/* ---------- vista: armario de Kibi ---------- */
function renderWardrobe() {
  const w = wearing(), n = OUTFITS.filter(([k]) => outfitOpen(k)).length;
  let h = `<div class="page wardrobe"><section class="stage"><div class="stage-kibi">${pokeKibi('idle', 168)}</div>
    <div class="stage-copy"><p class="eyebrow">${t('nav.kibi')}</p><h1>${t('kibi.title')}</h1><p class="lead">${t('kibi.lead')}</p>${bubble(kibiSays())}
    <div class="row"><button class="btn primary" data-act="outfit-random">${I.sparkle}${t('kibi.random')}</button><button class="btn ghost" data-act="outfit-clear">${t('kibi.clear')}</button>
    <small class="mono">${t('kibi.count', { n, m: OUTFITS.length })}</small></div></div></section>`;
  for (const sl of SLOTS) {
    h += `<h2>${t('kibi.slot.' + sl)}</h2><div class="wgrid">`;
    for (const [k, , a] of OUTFITS.filter(r => r[1] === sl)) {
      const on = w[sl] === k, op = outfitOpen(k);
      h += `<button class="wtile ${on ? 'on' : ''} ${op ? '' : 'locked'}" data-outfit="${k}" aria-pressed="${on}">
        ${kibi('idle', 76, 'still', { [sl]: k })}<b>${t('outfit.' + k)}</b><small>${op ? t(on ? 'kibi.wearing' : 'kibi.wear') : I.lock + esc(t('ach.' + a))}</small></button>`;
    }
    h += `</div>`;
  }
  return h + `</div>`;
}
// Ponerse o quitarse una pieza. Bloqueada: dice qué logro la trae.
function wearOutfit(id) {
  const r = OUTFITS.find(([k]) => k === id); if (!r) return;
  if (!outfitOpen(id)) { toast(t('kibi.locked', { a: t('ach.' + r[2]), d: t('ach.' + r[2] + '.d') })); return; }
  const o = Object.assign({}, wearing()); o[r[1]] = o[r[1]] === id ? null : id;
  S.outfit = o; Store.save(); render();
  const k = document.querySelector('.stage .kibi'); if (k) bounce(k);
}
function randomOutfit() {
  const o = {};
  for (const sl of SLOTS) { const opts = OUTFITS.filter(([k, h]) => h === sl && outfitOpen(k)).map(([k]) => k); o[sl] = Math.random() < .75 && opts.length ? opts[Math.floor(Math.random() * opts.length)] : null; }
  S.outfit = o; Store.save(); render();
  const k = document.querySelector('.stage .kibi'); if (k) bounce(k);
}
// Un salto de Kibi: se reinicia la animación quitando y poniendo la clase.
function bounce(svg) { svg.classList.remove('idle', 'happy'); void svg.getBoundingClientRect(); svg.classList.add('happy'); }
// Tocar a Kibi: salta y dice otra cosa en su bocadillo (si lo tiene cerca).
function pokeAt(btn) {
  const k = btn.querySelector('.kibi'); if (k) bounce(k);
  const p = btn.parentElement.closest('.kibistrip, .stage')?.querySelector('.bubble p');
  if (p) p.textContent = kibiSays(true);
  sfx('ok');
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
  ['run10', () => (S.run.best || 0) >= 10, I.chain],
  ['run50', () => (S.run.best || 0) >= 50, I.chain],
  ['fix10', () => P.fixedCount(S) >= 10, I.check],
];
// Guarda la fecha de los logros recién conseguidos. Los que ya se tenían antes de esta versión
// se guardan con fecha 1 ("antes del historial"): no se sabe cuándo se consiguieron.
const checkAch = (when = Date.now()) => P.unlock(S, ACH.filter(([, f]) => f()).map(([id]) => id), when);
const fmtDate = ts => new Date(ts).toLocaleDateString(S.locale || 'es', { day: 'numeric', month: 'short', year: 'numeric' });
const fmtTime = sec => { const h = Math.floor(sec / 3600), m = Math.round((sec % 3600) / 60); return h ? t('stats.hm', { h, m }) : t('stats.m', { m }); };
// Cuadrícula de actividad: 18 semanas (columnas) de lunes a domingo, con la XP de cada día de todos los dispositivos.
function activityHTML() {
  const hist = P.history(S, 126), first = new Date(hist[0].day + 'T12:00'), pad = (first.getDay() + 6) % 7;
  const lv = x => (x <= 0 ? 0 : x <= 10 ? 1 : x <= 25 ? 2 : x <= 50 ? 3 : 4), active = hist.filter(r => r.xp > 0).length;
  const cells = '<i class="pad"></i>'.repeat(pad) + hist.map(r => `<i class="l${lv(r.xp)}${r.day === today() ? ' today' : ''}" title="${esc(t('stats.xpDay', { d: fmtDate(new Date(r.day + 'T12:00')), xp: r.xp }))}"></i>`).join('');
  return `<div class="card wide"><div class="card-h"><h3>${t('stats.grid')}</h3><span class="mono">${t('stats.activeDays', { n: active })}</span></div>
    <div class="actgrid" role="img" aria-label="${t('stats.activeDays', { n: active })}">${cells}</div>
    <div class="actlegend" aria-hidden="true"><span>${t('stats.less')}</span><i class="l0"></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i><span>${t('stats.more')}</span></div></div>`;
}
// El curso como 30 bytes, en forma de volcado hexadecimal: una fila por cada fase de 10 días.
function hexdumpHTML(c) {
  let rows = '', full = 0;
  for (let r = 0; r < 3; r++) {
    rows += `<div class="hxrow"><span class="hxaddr">${String(r * 10 + 1).padStart(2, '0')}</span>`;
    for (let d = r * 10; d < r * 10 + 10; d++) { const v = byteOf(c, d); if (v === 255) full++; rows += `<span class="hx ${v === 255 ? 'full' : v ? 'part' : ''}" title="${t('day.n', { d: d + 1 })}: ${esc(dayTitle(d))}">${v.toString(16).toUpperCase().padStart(2, '0')}</span>`; }
    rows += `</div>`;
  }
  return `<div class="card wide"><div class="card-h"><h3>${t('profile.bytes', { c: META[c].name })}</h3><span class="mono">${full}/30</span></div>
    <div class="hexdump" role="img" aria-label="${t('profile.bytesAria', { n: full })}">${rows}</div><p class="note">${t('profile.bytesDesc')}</p></div>`;
}
function statsSection() {
  const td = P.history(S, 1)[0], weak = P.weak(S, S.course).slice(0, 4), due = P.pending(S, S.course).length;
  return `<h2>${t('stats.title')}</h2><div class="sgrid">${activityHTML()}${hexdumpHTML(S.course)}
    <div class="card"><h3>${t('stats.weak')} · ${META[S.course].name}</h3>${weak.length ? `<ul class="weak">${weak.map(w => `<li><button class="linkbtn" data-go="${dayHash(w.day - 1, 'guide')}">${t('day.n', { d: w.day })}: ${esc(dayTitle(w.day - 1))}</button><small>${t('stats.weakAcc', { p: Math.round(w.acc * 100), n: w.n })}</small></li>`).join('')}</ul>` : `<p class="note">${t('stats.weakNone')}</p>`}
      <p class="note">${due ? t('stats.review', { n: due }) : t('stats.reviewNone')}</p></div>
    <div class="card"><h3>${t('stats.time')}</h3><p class="bignum mono">${fmtTime(P.studySeconds(S))}</p>
      <p class="note">${t('stats.today')}: <b>${fmtTime(td.sec)}</b>, ${td.n ? Math.round(td.ok / td.n * 100) : 0}% ${t('profile.acc')}</p><p class="note">${t('stats.since')}</p></div></div>`;
}
const seg = (label, items, cur, attr) => `<div class="seg" role="group" aria-label="${esc(label)}">${items.map(([v, txt, off, tip]) => `<button class="${cur === v ? 'on' : ''}" data-${attr}="${v}" aria-pressed="${cur === v}" ${off ? `disabled title="${esc(tip)}"` : ''}>${off ? I.lock : ''}${txt}</button>`).join('')}</div>`;
function renderProfile() {
  const acc = S.stats.answered ? Math.round(S.stats.correct / S.stats.answered * 100) : 0;
  let h = `<div class="page"><header class="phead">${kibi('idle', 72)}<div><p class="eyebrow">${t('nav.profile')}</p><h1>${t('profile.title')}</h1>
    <p class="lead">${Store.user ? esc(Store.user.email || '') : t('profile.localTitle')}</p></div></header>
   <div class="ptiles">
    <div class="ptile"><span>${t('profile.streak', { n: S.streak })}</span><b>${S.streak}</b></div>
    <div class="ptile"><span>${t('profile.xp')}</span><b>${S.xp}</b></div>
    <div class="ptile"><span>${t('profile.levels')}</span><b>${S.stats.lessons}</b></div>
    <div class="ptile"><span>${t('profile.acc')}</span><b>${acc}%</b></div>
    <div class="ptile"><span>${t('profile.run')}</span><b>${S.run.cur}</b></div>
    <div class="ptile"><span>${t('profile.runBest')}</span><b>${S.run.best}</b></div>
   </div>${statsSection()}<h2>${t('profile.courses')}</h2><div class="plist">`;
  for (const c of COURSES) {
    const p = Math.round(doneCount(c) / (DAYS * PER_DAY) * 100);
    h += `<div class="prow">${badge(c)}<div><b>${META[c].name}</b><p>${p === 100 ? t('courses.done') : t('courses.next', { d: currentDay(c) + 1 })}</p>${stripHTML(c)}</div><small class="mono">${p}%<br>${S.courseXp[c] || 0} XP</small></div>`;
  }
  h += `</div><h2>${t('profile.ach')}</h2><div class="achgrid">`;
  ACH.forEach(([id, f, ic]) => { const on = f(); h += `<div class="ach ${on ? 'on' : ''}"><span class="medal">${ic}</span><b>${t('ach.' + id)}</b><p>${t('ach.' + id + '.d')}</p><small>${on ? (S.ach[id] > 1 ? t('profile.achAt', { d: fmtDate(S.ach[id]) }) : t('profile.achieved')) : t('profile.pending')}</small></div>`; });
  h += `</div><h2>${t('profile.settings')}</h2><div class="plist">
    <div class="prow"><span class="medal">${I.globe}</span><div><b>${t('profile.lang')}</b><p>${t('profile.langDesc')}</p></div>${langPick()}</div>
    <div class="prow"><span class="medal">${I.sun}</span><div><b>${t('profile.theme')}</b><p>${t('profile.themeDesc')}</p></div>
      ${seg(t('profile.theme'), THEMES.map(th => [th, t('theme.' + th)]), S.theme || 'auto', 'theme-set')}</div>
    <div class="prow"><span class="medal txt">Aa</span><div><b>${t('profile.font')}</b><p>${t('profile.fontDesc')}</p></div>
      ${seg(t('profile.font'), FONTS.map(f => [f, t('font.' + f)]), FONTS.includes(S.font) ? S.font : 'm', 'font')}</div>
    <div class="prow"><span class="medal">${I.code}</span><div><b>${t('profile.code')}</b><p>${t('profile.codeDesc')}</p></div>
      ${seg(t('profile.code'), CODE_THEMES.map(([k, a]) => [k, t('code.' + k), !codeThemeOpen(k), a ? t('code.lock', { a: t('ach.' + a) }) : '']), codeThemeOpen(S.codeTheme) ? S.codeTheme : 'ink', 'codetheme')}</div>
    <div class="prow"><span class="medal">${I.target}</span><div><b>${t('goal.title')}</b><p>${t('profile.goalDesc')}</p></div>
      ${seg(t('goal.title'), [10, 20, 30, 50].map(g => [g, String(g)]), S.goal, 'goal')}</div>
    <div class="prow"><span class="medal">${I.sound}</span><div><b>${t('profile.sound')}</b><p>${t('profile.soundDesc')}</p></div>
      <button class="switch" role="switch" aria-checked="${S.sound}" aria-label="${t('profile.sound')}" data-act="sound"></button></div>
    <div class="prow"><span class="medal">${I.bolt}</span><div><b>${t('profile.motion')}</b><p>${t('profile.motionDesc')}</p></div>
      <button class="switch" role="switch" aria-checked="${S.motion === 'reduce'}" aria-label="${t('profile.motion')}" data-act="motion"></button></div>
    <div class="prow"><span class="medal">${I.star}</span><div><b>${t('ob.again')}</b><p>${t('ob.againDesc')}</p></div><button class="btn small ghost" data-act="onboard">${t('ob.againBtn')}</button></div>
    <div class="prow"><span class="medal">${I.x}</span><div><b>${t('profile.reset')}</b><p>${confirmReset ? t('profile.resetConfirm') : t('profile.resetDesc')}</p></div>
      ${confirmReset ? `<div class="btnrow"><button class="btn small ghost" data-act="reset-cancel">${t('common.cancel')}</button><button class="btn small danger" data-act="reset-yes">${t('profile.resetBtn')}</button></div>` : `<button class="btn small ghost" data-act="reset">${t('profile.resetBtn')}</button>`}</div>
    <div class="prow"><span class="medal">${I.chat}</span><div><b>${t('nav.suggest')}</b><p>${t('sug.lead')}</p></div><button class="btn small ghost" data-go="sugerencias">${t('sug.send')}</button></div>
    <div class="prow"><span class="medal">${I.book}</span><div><b>${t('legal.title')}</b><p>${legalLinks()}</p></div><span></span></div>
   </div><h2>${t('profile.account')}</h2><div class="plist">
    ${Store.user ? `<div class="prow"><span class="medal">${I.user}</span><div><b>${esc(Store.user.email || '')}</b>${syncHTML()}</div><button class="btn small ghost" data-act="signout">${t('profile.signout')}</button></div>
      <div class="prow"><span class="medal">${I.logout}</span><div><b>${t('profile.signoutAll')}</b><p>${t('profile.signoutAllDesc')}</p></div><button class="btn small ghost" data-act="signout-all">${t('profile.signoutAllBtn')}</button></div>`
      : `<div class="prow"><span class="medal">${I.user}</span><div><b>${t('profile.localTitle')}</b><p>${t('profile.localMode')}</p>${syncHTML()}</div><span></span></div>`}
   </div></div>`;
  return h;
}

/* ---------- bienvenida en 3 pasos (la primera vez) ---------- */
// Objetivo diario en minutos, traducido a la meta de XP (state.goal). Un nivel son unos 3 minutos y 5 XP.
const OB_GOALS = [[5, 10], [10, 20], [20, 50]];
const OB_LEVELS = [0, 7, 14]; // día (índice) al que lleva la prueba de nivel; 0: empezar por el día 1
let ob = null;
function onboardHTML() {
  const s = ob.step, dots = [0, 1, 2].map(i => `<i class="${i <= s ? 'on' : ''}"></i>`).join('');
  let body;
  if (s === 0) body = `<h2 id="obT">${t('ob.goal')}</h2><p>${t('ob.goalDesc')}</p><div class="obopts">${OB_GOALS.map(([m, xp]) => `<button class="obopt ${ob.goal === xp ? 'on' : ''}" data-obgoal="${xp}" aria-pressed="${ob.goal === xp}"><b>${t('ob.min', { n: m })}</b><small class="mono">${xp} XP</small></button>`).join('')}</div>`;
  else if (s === 1) body = `<h2 id="obT">${t('ob.level')}</h2><p>${t('ob.levelDesc', { c: META[S.course].name })}</p><div class="obopts col">${OB_LEVELS.map((d, i) => `<button class="obopt ${ob.level === d ? 'on' : ''}" data-oblevel="${d}" aria-pressed="${ob.level === d}"><b>${t('ob.lv' + i)}</b><small>${t('ob.lv' + i + '.d', { d: d + 1 })}</small></button>`).join('')}</div>`;
  else body = `<h2 id="obT">${t('ob.remind')}</h2><p>${t('ob.remindDesc')}</p><div class="field"><label for="obtime">${t('ob.time')}</label><input id="obtime" type="time" value="${esc(ob.remind)}"></div><p class="note">${t('ob.remindNote')}</p>`;
  return `<div class="obhead">${kibi('idle', 60, 'float')}<span class="obdots" role="img" aria-label="${t('ob.step', { n: s + 1, m: 3 })}">${dots}</span></div>${body}
   <div class="acts">${s ? `<button class="btn ghost" data-ob="back">${t('ob.back')}</button>` : `<button class="btn ghost" data-ob="skip">${t('ob.skip')}</button>`}<button class="btn primary" data-ob="next">${s < 2 ? t('ob.next') : t('ob.finish')}</button></div>`;
}
function openOnboard(focusSel) {
  ob = ob || { step: 0, goal: OB_GOALS.some(([, x]) => x === S.goal) ? S.goal : 20, level: 0, remind: S.remind || '' };
  openModal(onboardHTML(), 'dialog onboard');
  $('#modal [role="dialog"]').setAttribute('aria-labelledby', 'obT');
  const f = focusSel && $('#modal ' + focusSel); if (f) f.focus();
}
function obAction(a) {
  const tm = $('#obtime'); if (tm) ob.remind = tm.value;
  if (a === 'back') { ob.step--; openOnboard(); return; }
  if (a === 'next' && ob.step < 2) { ob.step++; openOnboard(); return; }
  // El recordatorio se guarda para cuando la app tenga avisos: ahora no se envía nada.
  if (a === 'next') { S.goal = ob.goal; S.remind = ob.remind || ''; }
  S.onboarded = true; Store.save();
  const lvl = a === 'next' ? ob.level : 0; ob = null; closeModal(); render();
  if (lvl > 0 && CUR.data) jumpModal(lvl);
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
    sug.state = ''; sug.err = err && err.message === 'off' ? t('sug.off') : err && err.message === 'limit' ? t('sug.limit') : t('sug.err');
  }
  if (route.v === 'suggest') render();
}

/* ---------- render principal ---------- */
function render(swap) {
  if (!CUR) return;
  normalizeDay(); regen(); applyTheme(); renderChrome();
  const m = $('#main');
  if (cm) { flushDraft(); cm.destroy(); cm = null; }
  m.classList.toggle('swap', !!swap && !firstRender);
  if (!CUR.data && !['profile', 'courses', 'suggest', 'kibi'].includes(route.v)) m.innerHTML = `<div class="wrap"><div class="nextday">${kibi('sad', 90)}<h2>${t('content.missing')}</h2><button class="btn primary" data-go="courses">${t('nav.courses')}</button></div></div>`;
  else m.innerHTML = route.v === 'day' ? renderDay() : route.v === 'code' ? renderCode() : route.v === 'courses' ? renderCourses() : route.v === 'profile' ? renderProfile() : route.v === 'kibi' ? renderWardrobe() : route.v === 'suggest' ? renderSuggest() : renderMap();
  firstRender = false;
  if (route.v === 'code' && CUR.data) mountEditor();
}
async function onRoute() {
  route = parseHash(); openPop = null; menuOpen = false; statOpen = null;
  render(true);
  window.scrollTo(0, 0);
}
function scrollToCurrent() {
  const el = document.querySelector('.level.current') || document.querySelector('.dayrow.cur');
  if (el) el.scrollIntoView({ block: 'center', behavior: reduceMotion() ? 'auto' : 'smooth' });
}

/* ---------- modales ---------- */
let modalReturn = null;
function openModal(html, cls = 'dialog') {
  if ($('#modal').hidden) modalReturn = document.activeElement;
  const m = $('#modal'); m.innerHTML = `<div class="${cls}" role="dialog" aria-modal="true">${html}</div>`; m.hidden = false;
  const f = m.querySelector('input, .acts .btn, button'); f && f.focus();
}
function closeModal() {
  const m = $('#modal'), was = !m.hidden; m.hidden = true; m.innerHTML = '';
  if (was && modalReturn && document.contains(modalReturn)) modalReturn.focus();
  modalReturn = null;
}
// Tab no sale del modal ni de la lección abiertos (role="dialog" aria-modal).
function trapTab(e) {
  const box = !$('#modal').hidden ? $('#modal') : !LS.hidden ? LS : null;
  if (!box) return;
  const els = [...box.querySelectorAll('button:not([disabled]), input:not([readonly]), textarea, a[href], [tabindex]:not([tabindex="-1"])')].filter(el => el.offsetParent !== null);
  if (!els.length) return;
  const first = els[0], last = els[els.length - 1];
  if (e.shiftKey && (document.activeElement === first || !box.contains(document.activeElement))) { last.focus(); e.preventDefault(); }
  else if (!e.shiftKey && (document.activeElement === last || !box.contains(document.activeElement))) { first.focus(); e.preventDefault(); }
}
function heartsModal() {
  regen();
  openModal(`<div class="center">${heartsMeter(true)}<h2>${S.hearts === 0 ? t('hearts.none') : t('hearts.have', { n: S.hearts, m: MAXH })}</h2>
   <p>${t('hearts.modal', { n: EXTRA_HEARTS })}</p><p class="timer" data-timer>${timerText()}</p></div>
   <div class="acts"><button class="btn gold" data-act="extra">${I.plus}${t('hearts.extraBtn', { n: EXTRA_HEARTS })}</button><button class="btn ghost" data-act="close">${t('common.close')}</button></div>`);
}
function jumpModal(d) {
  openModal(`<p class="note">${t('jump.label')}</p><h2>${t('jump.title', { d: d + 1 })}</h2><p>${t('jump.desc', { t: esc(dayTitle(d)) })}</p>
   <div class="acts"><button class="btn ghost" data-act="close">${t('common.cancel')}</button><button class="btn primary" data-test="${d}">${t('jump.start')}</button></div>`);
}
function pwModal() {
  openModal(`<h2>${t('auth.newPw')}</h2><form id="pwForm" class="field"><label for="newpw">${t('auth.password')}</label><input id="newpw" type="password" minlength="8" autocomplete="new-password" required><div id="pwMsg"></div>
   <div class="acts"><button class="btn primary" type="submit">${t('auth.savePw')}</button></div></form>`);
  $('#pwForm').addEventListener('submit', async e => {
    e.preventDefault();
    if ($('#newpw').value.length < 8) { $('#pwMsg').innerHTML = `<p class="msg err">${t('auth.err.short')}</p>`; return; }
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
    const label = `${t('day.n', { d: i + 1 })}: ${d.t}`; // texto plano: se escapa al pintarlo (esc(it.label))
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
let lessonReturn = null;
function startLesson(opts) {
  regen();
  if ((opts.mode === 'practice' || opts.mode === 'reto') && S.hearts <= 0) { heartsModal(); return; }
  closeModal(); openPop = null;
  // pos: posición original de cada sección en el nivel (la usan la racha y el número de sección).
  L = Object.assign({}, opts, { course: S.course, queue: opts.ex.map((e, i) => Object.assign(prep(e), { pos: i })), total: opts.ex.length, correct: 0, mistakes: 0, answered: 0, firstOk: 0, start: Date.now(), prog: 0, combo: 0 });
  lessonReturn = document.activeElement;
  LS.setAttribute('aria-label', opts.mode === 'reto' ? t('node.reto') : opts.mode === 'practice' ? t('node.practice', { n: opts.k + 1 }) : opts.mode === 'extra' ? t('nav.extra') : t('jump.label'));
  LS.hidden = false; lockPage(true); fitLesson();
  renderEx();
}
/* Secciones de cada nivel: el nivel 1 tiene 8, el 2 tiene 7, el 3 otra vez 8... (el reto, nivel 8, tiene 7).
   Cada nivel alterna secciones de elegir (mc, out, fill, order) con secciones de escribir código. */
const sectionsOf = k => (k % 2 ? 7 : 8);
const ORDER_Q = /^(ordena|order|arrange|put |remets|ordonne|ordina|metti)/i;
// Versión "escríbelo tú" de un ejercicio de opciones, o null si la respuesta no cabe en una línea.
function typedForm(ex) {
  if (ex.t === 'type') return ex;
  if (ex.t === 'fill') return { t: 'type', q: ex.q, c: ex.c, a: [ex.o[0]], e: ex.e };
  if (ex.t === 'out' && !ex.o[0].includes('\n') && ex.o[0].length <= 40) return { t: 'type', q: t('ex.q.outType'), c: ex.c, a: [ex.o[0]], e: ex.e, line: 'out' };
  if (ex.t === 'order' && !ORDER_Q.test(ex.q)) { const s = joinTokens(ex.w); if (s.length <= 70) return { t: 'type', q: ex.q, c: '', a: [s], e: ex.e, line: 'code' }; }
  return null;
}
// La versión escrita conserva de dónde viene el ejercicio (ref) y su familia (fam).
const asTyped = ex => { const r = typedForm(ex); return r && r !== ex ? Object.assign(r, { ref: ex.ref, fam: ex.fam }) : r; };
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
  const due = dueExercises(d, own[k]), want = n >= 8 ? 2 : 1;
  const rev = [...due, ...Array.from({ length: Math.min(want, prev.length) }, (_, i) => prev[(start + i) % prev.length]).filter(x => !due.includes(x))].slice(0, want);
  const list = [own[k], ...fresh(d, n + 6)];
  rev.forEach((ex, i) => list.splice(2 + i * 3, 0, ex));
  // Si el generador no está disponible, completa con las demás prácticas del día.
  if (list.length < n) list.push(...[0, 2, 4, 6, 1, 3, 5].map(j => own[(k + j) % RETO]));
  return mixSections(list, n, k % 2 === 1);
}
// Ejercicios nuevos del generador; los temas con menos aciertos salen más a menudo.
const fresh = (d, count) => (window.NibblePractice ? window.NibblePractice.generate(CUR.course, d + 1, count, Math.random, t, P.weak(S, CUR.course).map(w => w.day)) : []);
// Fallos pendientes de repaso (del temario) de los días ya vistos, sin el ejercicio propio del nivel.
function dueExercises(d, skip) {
  return P.pending(S, CUR.course).map(ref => { const [c, id, i] = ref.split(':'), dd = dayPos(c, id); return dd >= 0 && dd <= d && CUR.data.days[dd] ? CUR.data.days[dd].x[+i] : null; })
    .filter(x => x && x !== skip);
}
// Tema de un ejercicio: el día del temario en que se enseña ('curso:día', día de 1 a 30).
const conceptOf = ex => ex.ref ? `${L.course}:${ex.ref.split(':')[1]}`
  : ex.fam && window.NibblePractice && NibblePractice.UNLOCK_ID[L.course][ex.fam] ? `${L.course}:${NibblePractice.UNLOCK_ID[L.course][ex.fam]}` : null;
function startNode(key) {
  const [c, id, kk] = key.split(':'), d = dayPos(c, id), k = +kk, replay = !!S.done[key];
  startLesson({ mode: k === RETO ? 'reto' : 'practice', d, k, key, replay, ex: buildLevel(d, k, replay) });
}
function startExtra() {
  if (!CUR.data) return;
  statOpen = null;
  closeModal();
  if (L) { LS.hidden = true; LS.innerHTML = ''; L = null; lockPage(false); }
  const pool = CUR.data.days.slice(0, currentDay(S.course) + 1).flatMap(d => d.x), due = dueExercises(currentDay(S.course)).slice(0, 2);
  startLesson({ mode: 'extra', ex: mixSections(shuffle([...due, ...shuffle(pool.filter(x => !due.includes(x))).slice(0, Math.max(1, 3 - due.length)), ...fresh(currentDay(S.course), 4)]), 5) });
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
  let h = `<div class="ex-tags"><span class="ex-sec">${t('ex.section', { n: ex.pos + 1, m: L.total })}</span>${ex.retry ? `<span class="ex-kind">${t('ex.retryTag')}</span>` : ''}`;
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
// Modo de pruebas (?e2e=1, scripts/e2e): la lección deja la solución en data-sol para que Playwright la conteste.
// No da ninguna ventaja real: el progreso y la XP ya viven en el navegador de cada uno.
const E2E = /[?&]e2e=1\b/.test(location.search);
const solutionOf = ex => ex.opts ? ex.opts.findIndex(o => o.ok) : ex.t === 'order' ? ex.w : ex.a[0];
function renderEx() {
  const ex = L.queue[0]; L.sel = null; L.phase = 'answer';
  if (E2E) LS.dataset.sol = JSON.stringify({ t: ex.t, sol: solutionOf(ex) });
  LS.innerHTML = `<div class="ls-top">${topHTML()}</div><div class="ls-body"><div class="ex">${exHTML(ex)}</div></div>
   <div class="ls-foot" id="foot"><div class="foot-in"><button class="btn ghost" data-act="skip">${t('ex.skip')}</button><div class="fb" id="fb" role="status" aria-live="polite"></div><button class="btn primary" id="checkBtn" data-act="check" disabled>${t('ex.check')}</button></div></div>`;
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
  let ok = false, sol = '', yours = '', why = '';
  if (ex.opts) { sol = ex.o[0]; ok = !skipped && L.sel !== null && ex.opts[L.sel].ok; if (L.sel !== null) yours = ex.opts[L.sel].t; }
  else if (ex.t === 'order') { sol = joinTokens(ex.w); const seq = ex.picked.map(id => ex.bank.find(b => b.id === id).t); ok = !skipped && seq.join('\u0001') === ex.w.join('\u0001'); yours = joinTokens(seq); }
  else if (ex.t === 'type') { sol = ex.a[0]; const inp = $('#typeIn'), v = inp.value; yours = v.trim(); why = whyWrong(ex.a, v); ok = !skipped && (ex.a.some(a => norm(a) === norm(v) || norm(a).replace(/\s/g, '') === norm(v).replace(/\s/g, '')) || (!!ex.re && ex.re.test(norm(v).replace(/\s/g, '')))); inp.readOnly = true; if (!ok) inp.classList.add('wrong'); }
  L.phase = 'feedback'; L.answered++;
  P.add(S, Store.dev, { answered: 1, correct: ok ? 1 : 0, concept: conceptOf(ex) }, today());
  // Un fallo de un ejercicio del temario vuelve en niveles posteriores hasta que se acierta.
  if (ex.ref && L.mode !== 'test') { if (ok) P.fix(S, ex.ref); else P.miss(S, ex.ref); }
  // Racha de secciones: solo en los niveles del camino (no en el nivel extra ni en la prueba de salto).
  const runBefore = S.run.cur, run = (L.mode === 'practice' || L.mode === 'reto') ? P.section(S, L.key, ex.pos, ok) : null;
  let lost = false;
  if (ok) { L.correct++; if (!ex.retry) L.firstOk++; L.queue.shift(); L.combo++; sfx(L.combo >= 3 && L.combo % 3 === 0 ? 'combo' : 'ok'); }
  else {
    L.mistakes++; L.combo = 0; sfx('bad'); const f = L.queue.shift();
    if (L.mode === 'practice' || L.mode === 'extra') { const r = prep(f.src); r.retry = true; r.pos = f.pos; L.queue.push(r); }
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
    ${!ok && !skipped && yours ? `<p class="fb-yours">${t('ex.yours')} <code>${esc(yours)}</code></p>` : ''}${!ok ? `<p class="fb-sol">${t('ex.solution')} <code>${esc(sol)}</code></p>` : ''}${!ok && !skipped && why ? `<p class="fb-why">${t(why)}</p>` : ''}<p class="fb-e">${rich(ex.e)}</p>${run === 'add' ? `<p class="fb-run">${I.chain}${t('ex.run', { n: S.run.cur })}</p>` : run === 'reset' && runBefore >= 3 ? `<p class="fb-run lost">${I.chain}${t('ex.runLost', { n: runBefore })}</p>` : ''}</div>`;
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
  setTimeout(() => { if (lessonReturn && document.contains(lessonReturn)) lessonReturn.focus(); else $('#main').focus({ preventScroll: true }); lessonReturn = null; }, 0);
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
  const perfect = L.mistakes === 0, c = L.course, rewards = [], inc = {}, secs = Math.min(86400, Math.round((Date.now() - L.start) / 1000));
  let xp = 0, title;
  if (L.mode === 'practice' || L.mode === 'reto') {
    const reto = L.mode === 'reto';
    xp = L.replay ? (reto ? 5 : 2) : reto ? 20 + (perfect ? 5 : 0) : 5;
    if (!L.replay) {
      justDone = L.key;
      const nk = L.k < RETO ? nodeKey(c, L.d, L.k + 1) : L.d < DAYS - 1 ? nodeKey(c, L.d + 1, 0) : null;
      justUnlock = nk;
      if (reto) { inc.retos = 1; if (L.d < DAYS - 1) rewards.push(`<p class="reward gold">${I.star}${t('done.unlocked', { d: L.d + 2 })}</p>`); }
    }
    P.levelDone(S, L.key); inc.lessons = 1;
    title = reto ? t('done.reto') : perfect ? t('done.perfect') : t('done.practice');
  } else if (L.mode === 'extra') {
    xp = 10; inc.extras = 1; const g = addHearts(EXTRA_HEARTS);
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
  // lessons cuenta solo los niveles del camino (antes también sumaban el nivel extra y la prueba de salto).
  Object.assign(inc, { xp, course: c, sec: secs, perfect: perfect && inc.lessons ? 1 : 0 });
  P.add(S, Store.dev, inc, today());
  if (bumpStreak()) rewards.unshift(`<p class="reward flame">${I.flame}${t('done.streak', { n: S.streak })}</p>`);
  checkAch().forEach(id => {
    rewards.push(`<p class="reward gold">${I.trophy}${t('done.ach', { a: t('ach.' + id) })}</p>`);
    const fit = OUTFITS.find(r => r[2] === id);
    if (fit) rewards.push(`<p class="reward outfit">${kibi('idle', 28, 'still', { [fit[1]]: fit[0] })}${t('kibi.new', { o: t('outfit.' + fit[0]) })}</p>`);
  });
  Store.save();
  const acc = Math.round(L.firstOk / L.total * 100);
  Store.logResult({ course: c, locale: S.locale, mode: L.mode, day: L.d === undefined ? null : L.d + 1, day_id: L.d === undefined ? null : dayId(c, L.d), level: L.k === undefined ? null : L.k + 1,
    sections: L.total, correct: L.firstOk, mistakes: L.mistakes, xp, seconds: secs });
  if (L.mode === 'practice' || L.mode === 'reto') Store.track('level', { course: c, day: L.d + 1, locale: S.locale });
  // Día desbloqueado: al superar el reto por primera vez o al aprobar la prueba de nivel.
  const reached = L.mode === 'reto' && !L.replay && L.d < DAYS - 1 ? L.d + 2 : L.mode === 'test' ? L.d + 1 : 0;
  if (reached) Store.track('day', { course: c, day: reached, locale: S.locale });
  sfx('win');
  LS.querySelector('.ls-top').innerHTML = `<button class="iconbtn" data-act="quit" aria-label="${t('common.close')}">${I.x}</button><div class="barwrap"><div class="bar ${L.mode === 'reto' ? 'reto' : ''}"><i style="width:100%"></i></div></div>`;
  const art = (L.mode === 'practice' || L.mode === 'reto') ? `<div class="done-reg"><div class="done-kibi">${kibi('happy', 92)}</div>${registerHTML(c, L.d, { just: L.replay ? -1 : L.k })}</div>` : `<div class="halo">${kibi('happy', 130)}</div>`;
  LS.querySelector('.ls-body').innerHTML = `<div class="done-screen">${art}<h2>${title}</h2>
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
// Enlaces a la política de privacidad y a las condiciones de uso (páginas en español).
const legalLinks = () => `<a href="privacidad.html">${t('legal.privacy')}</a> · <a href="terminos.html">${t('legal.terms')}</a>`;
/* Ejercicio de prueba en la portada, sin registrarse: el mismo tipo de pregunta que en los niveles.
   La respuesta se comprueba con la solución escrita aquí (no se ejecuta código). */
const TRIAL = { code: 'bits = 4\nprint(bits * 2)', opts: ['44', '8', 'bits * 2'], ok: '8' };
let trialSel = null;
function trialHTML() {
  const done = trialSel !== null, right = trialSel === TRIAL.ok;
  return `<div class="trial" id="trial"><div class="trial-h"><span class="badge" style="--c:${META.python.color};--cd:${META.python.dark};--ci:#fff">Py</span><b>${t('trial.tag')}</b></div>
    <h3>${t('trial.q')}</h3>${codeBlock(TRIAL.code, 'python')}
    <div class="opts" role="group" aria-label="${esc(t('trial.q'))}">${TRIAL.opts.map((o, i) => `<button class="opt mono ${done && o === TRIAL.ok ? 'right' : ''} ${done && o === trialSel && !right ? 'wrong' : ''}" data-trial="${i}" ${done ? 'disabled' : ''}><span class="k">${i + 1}</span><span class="t">${esc(o)}</span></button>`).join('')}</div>
    <p class="trial-fb ${done ? (right ? 'ok' : 'bad') : ''}" role="status" aria-live="polite">${done ? `<b>${t(right ? 'trial.ok' : 'trial.bad')}</b> ${t('trial.e')}` : ''}</p>
    ${done ? `<button class="btn primary" data-land="start" data-lc="python">${t('trial.more')}</button>` : ''}</div>`;
}
function renderLanding() {
  const login = Store.configured && !Store.user;
  const startBtn = `<button class="btn primary big" data-land="start">${t('land.start')}</button>`;
  const bits = [1, 1, 1, 1, 0, 0, 0, 0].map((b, i) => `<span class="lbbit ${b ? 'on' : ''}" style="--i:${i}"><b>${b}</b><small>${t('level.bit', { n: i + 1 })}</small></span>`).join('');
  $('#landing').innerHTML = `<header class="lnav"><div class="lbrand">${kibi('idle', 38)}<b>Nibble</b></div><span class="grow"></span>${langPick()}
    ${login ? `<button class="btn small ghost" data-land="signin">${t('land.signin')}</button>` : ''}</header>
   <main>
   <section class="lhero"><div class="lcopy">
     <p class="eyebrow">Python · Java · JavaScript · C++</p><h1>${t('land.title')}</h1><p class="lead">${t('land.lead')}</p>
     <div class="lcta">${startBtn}${login ? `<button class="btn ghost big" data-land="signin">${t('land.signin')}</button>` : ''}</div><p class="note">${t('land.free')}</p></div>
     <div class="lart"><div class="lcode" id="lcode"><div class="lcode-top"><i></i><i></i><i></i><span id="lfile"></span></div><div id="typer"></div>
       <div class="lout" id="lout"><span>${t('land.output')}</span><code>nibble = 4 bits</code>${I.check}</div></div>
       <button class="lkibi kibi-poke" data-act="poke-land" aria-label="${t('land.kibiTry')}" title="${t('land.kibiTry')}">${kibi('idle', 132, 'float')}</button></div></section>
   <section class="lsec lsplit reveal"><div><p class="eyebrow">${t('land.byteTag')}</p><h2>${t('land.byteTitle')}</h2><p class="lead">${t('land.byteDesc')}</p>
       <div class="lbyte" aria-hidden="true">${bits}<code class="hex">0xF0</code></div></div>${trialHTML()}</section>
   <section class="lsec reveal"><p class="eyebrow">${t('land.coursesTag')}</p><h2>${t('land.coursesTitle')}</h2><div class="lcourses">${COURSES.map((c, i) => { const m = META[c]; return `<article class="lcourse" style="--c:${m.color};--cd:${m.dark};--ci:${m.ink};--i:${i}">
       <div class="top">${badge(c)}<b>${m.name}</b></div><p>${t('course.' + c)}</p><small class="mono">${t('land.days')}</small>
       <details class="syl" data-syl="${c}"><summary>${t('land.syllabus')}</summary><ol class="syl-list"><li class="note">${t('land.loading')}</li></ol></details>
       <button class="btn small ghost" data-land="start" data-lc="${c}">${t('land.startCourse', { c: m.name })}</button></article>`; }).join('')}</div></section>
   <section class="lsec reveal"><p class="eyebrow">${t('land.featTag')}</p><h2>${t('land.featTitle')}</h2><div class="lhow">${dayPreview()}<ol class="lpoints">${[1, 2, 3, 4, 5].map(n => `<li><span class="mono">0${n}</span><div><b>${t('land.f' + n)}</b><p>${t('land.f' + n + '.d')}</p></div></li>`).join('')}</ol></div></section>
   <section class="lsec reveal"><p class="eyebrow">${t('land.faqTag')}</p><h2>${t('land.faqTitle')}</h2><div class="faq">${[1, 2, 3, 4, 5, 6].map(n => `<details><summary>${t('faq.q' + n)}</summary><p>${t('faq.a' + n)}</p></details>`).join('')}</div></section>
   <section class="lsec lfinal reveal">${kibi('happy', 96)}<h2>${t('land.finalTitle')}</h2>${startBtn}</section>
   </main>
   <footer class="lfoot"><p>${t('land.foot')}</p><p>${t('land.credit')}</p><p>${legalLinks()}</p></footer>`;
  const io = 'IntersectionObserver' in window && new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('#landing .reveal').forEach(el => (io ? io.observe(el) : el.classList.add('in')));
  startTyper();
}
// Vista de un día tal como se ve en la app (guía y niveles), con los componentes de la propia app.
function dayPreview() {
  const lv = (k, st, label) => `<li class="level ${st} ${k === RETO ? 'reto' : ''}"><span class="lbit">${st === 'done' ? 1 : 0}</span>
    <div class="linfo"><span class="lk">${k === RETO ? I.crown : ''}${t('level.bit', { n: k + 1 })}</span><b>${label}</b></div>
    ${st === 'current' ? `<span class="btn small primary">${t('node.go', { xp: 5 })}</span>` : st === 'locked' ? `<span class="lstate">${I.lock}</span>` : `<span class="lstate ok">${I.check}</span>`}</li>`;
  return `<div class="lpreview" aria-hidden="true" style="--lang:${META.python.color};--lang-btn:${META.python.btn};--lang-ink:#fff">
    <div class="lp-head">${badge('python')}<div><small class="mono">${t('day.nOf', { d: 1 })}</small><b>${t('day.guide')} · ${t('day.practice')}</b></div></div>
    ${codeBlock(SNIPS.python.join('\n'), 'python')}
    <ol class="levels">${lv(0, 'done', t('node.practice', { n: 1 }))}${lv(1, 'current', t('node.practice', { n: 2 }))}${lv(2, 'locked', t('node.practice', { n: 3 }))}${lv(RETO, 'locked', t('node.reto'))}</ol></div>`;
}
// Temario de un curso en la portada: se carga el contenido del curso solo al abrir su desplegable.
async function fillSyllabus(det) {
  const c = det.dataset.syl, list = det.querySelector('.syl-list');
  if (!COURSES.includes(c) || det.dataset.done) return;
  const r = await getContent(c, window.I18N.get());
  det.dataset.done = '1';
  list.innerHTML = r && r.data ? r.data.days.map((d, i) => `<li><span class="mono">${String(i + 1).padStart(2, '0')}</span>${esc(d.t)}</li>`).join('') : `<li class="note">${t('content.missing')}</li>`;
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
  if (/password should be|at least \d|weak_password/i.test(m)) return t('auth.err.short');
  if (/email not confirmed/i.test(m)) return t('auth.confirm');
  if (/captcha/i.test(m)) return t('auth.captcha');
  return t('auth.err.generic', { m });
}
// Logotipo de Google para su botón de acceso (los colores oficiales de la "G").
const GOOGLE_G = '<svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';
function renderAuth() {
  const a = $('#auth');
  const reset = authMode === 'reset';
  a.innerHTML = `<div class="authcard"><div class="brand">${kibi('idle', 44, 'float')}<span>Nibble</span></div>
    <h1>${reset ? t('auth.forgot') : authMode === 'signup' ? t('auth.signupTitle') : t('auth.title')}</h1><p class="sub">${t('auth.sub')}</p>
    ${!reset && Store.cfg.google !== false && (!Store.providers || Store.providers.google) ? `<button class="btn gbtn block" type="button" data-act="google">${GOOGLE_G}${t('auth.google')}</button><p class="or"><span>${t('auth.or')}</span></p>` : ''}
    <form id="authForm" style="display:flex;flex-direction:column;gap:14px">
      <div class="field"><label for="aemail">${t('auth.email')}</label><input id="aemail" type="email" autocomplete="email" required></div>
      ${reset ? '' : `<div class="field"><label for="apw">${t('auth.password')}</label><input id="apw" type="password" minlength="8" autocomplete="${authMode === 'signup' ? 'new-password' : 'current-password'}" required></div>`}
      ${Store.cfg.captchaSiteKey ? '<div id="captcha" class="captcha"></div>' : ''}
      <div id="authMsg">${authMsg}</div>
      <button class="btn primary block" type="submit">${reset ? t('auth.sendReset') : authMode === 'signup' ? t('auth.signup') : t('auth.signin')}</button>
    </form>
    ${reset ? `<button class="linkbtn" data-auth="signin">${t('auth.toSignin')}</button>` : `<button class="linkbtn" data-auth="${authMode === 'signup' ? 'signin' : 'signup'}">${authMode === 'signup' ? t('auth.toSignin') : t('auth.toSignup')}</button>
    ${authMode === 'signin' ? `<button class="linkbtn" data-auth="reset">${t('auth.forgot')}</button>` : ''}`}
    ${reset ? '' : `<p class="legal-note">${t('legal.accept', { t: `<a href="terminos.html">${t('legal.terms')}</a>`, p: `<a href="privacidad.html">${t('legal.privacy')}</a>` })}</p>`}
    ${langPick()}</div>`;
  $('#authForm').addEventListener('submit', async e => {
    e.preventDefault();
    const email = $('#aemail').value.trim(), pw = $('#apw') ? $('#apw').value : '', btn = e.target.querySelector('button[type="submit"]');
    if (authMode === 'signup' && pw.length < 8) { authMsg = `<p class="msg err">${t('auth.err.short')}</p>`; renderAuth(); $('#aemail').value = email; $('#apw').focus(); return; }
    if (Store.cfg.captchaSiteKey && !Store.captcha) { $('#authMsg').innerHTML = `<p class="msg err">${t('auth.captcha')}</p>`; return; }
    btn.disabled = true; btn.textContent = t('auth.loading');
    try {
      if (authMode === 'reset') { await Store.sendReset(email); authMsg = `<p class="msg ok">${t('auth.resetSent')}</p>`; renderAuth(); return; }
      if (authMode === 'signup') { const r = await Store.signUp(email, pw); Store.track('signup', { locale: S.locale || window.I18N.get() }); if (r === 'confirm') { authMsg = `<p class="msg ok">${t('auth.confirm')}</p>`; authMode = 'signin'; renderAuth(); return; } }
      else await Store.signIn(email, pw);
      authMsg = ''; await enterApp();
    } catch (err) { authMsg = `<p class="msg err">${esc(authError(err))}</p>`; renderAuth(); $('#aemail').value = email; }
  });
  mountCaptcha();
}
/* CAPTCHA (Cloudflare Turnstile) en registro, acceso y recuperación de contraseña. Solo si config.js trae
   captchaSiteKey (variable TURNSTILE_SITE_KEY del repositorio) y está activado en Supabase con la clave secreta.
   Es la única carga de otro dominio que permite la CSP. */
const TURNSTILE = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
let captchaLoad = null;
function mountCaptcha() {
  const key = Store.cfg.captchaSiteKey, box = $('#captcha');
  Store.captcha = null;
  if (!key || !box) return;
  captchaLoad = captchaLoad || loadScript(TURNSTILE).catch(() => { captchaLoad = null; });
  captchaLoad.then(() => {
    if (!window.turnstile || !document.contains(box)) return;
    window.turnstile.render(box, { sitekey: key, language: S.locale || window.I18N.get(), theme: 'auto',
      callback: tok => { Store.captcha = tok; }, 'expired-callback': () => { Store.captcha = null; }, 'error-callback': () => { Store.captcha = null; } });
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
  if (checkAch(1).length) Store.save();
  route = parseHash();
  render();
  if (route.v === 'map' && currentIndex(S.course) > 0) setTimeout(scrollToCurrent, 100);
  if (!S.onboarded && !S.stats.lessons && CUR.data) setTimeout(() => { if ($('#modal').hidden && !L) openOnboard(); }, 250);
}
async function boot() {
  const loc = detectLocale(); window.I18N.set(loc);
  const skip = document.querySelector('.skip'); if (skip) skip.textContent = t('a11y.skip');
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) navigator.serviceWorker.register('sw.js').catch(() => { /* sin modo sin conexión */ });
  Store.on(ev => {
    if (ev === 'sync') document.querySelectorAll('[data-sync]').forEach(el => { el.outerHTML = syncHTML(); });
    if (ev === 'recovery') pwModal();
    if (ev === 'signedout' && !$('#shell').hidden) { S = Store.state; showAuth(); }
  });
  const r = await Store.init();
  S = Store.state;
  // Vuelta de Google o de un enlace de correo: muestra el error si lo hay y quita los datos de la URL.
  const back = new URLSearchParams(location.hash.replace(/^#/, '') + '&' + location.search.slice(1));
  if (back.get('error_description')) authMsg = `<p class="msg err">${esc(t('auth.err.generic', { m: back.get('error_description') }))}</p>`;
  if (/(access_token|refresh_token|error_description|code)=/.test(location.hash + location.search)) history.replaceState(null, '', location.pathname);
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
    if (statOpen && !e.target.closest('.statpop')) { statOpen = null; changed = true; }
    if (menuOpen && !e.target.closest('.dropwrap')) { menuOpen = false; changed = true; }
    if (changed) render();
    return;
  }
  const d = b.dataset;
  if (d.go !== undefined) { closeModal(); go(d.go); return; }
  if (d.course) { closeModal(); await switchCourse(d.course, !!d.open); return; }
  if (d.locale) { await setLocale(d.locale); return; }
  if (d.stat) { statOpen = statOpen === d.stat ? null : d.stat; menuOpen = false; renderChrome(); return; }
  if (statOpen && !b.closest('.statpop')) { statOpen = null; renderChrome(); }
  if (d.start) { startNode(d.start); return; }
  if (d.jump !== undefined) { jumpModal(+d.jump); return; }
  if (d.test !== undefined) { startTest(+d.test); return; }
  if (d.themeSet) { S.theme = d.themeSet; Store.save(); render(); return; }
  if (d.goal) { S.goal = +d.goal; Store.save(); render(); return; }
  if (d.font) { S.font = d.font; Store.save(); render(); return; }
  if (d.outfit) { wearOutfit(d.outfit); return; }
  if (d.codetheme) { if (codeThemeOpen(d.codetheme)) { S.codeTheme = d.codetheme; Store.save(); render(); } return; }
  if (d.obgoal) { ob.goal = +d.obgoal; openOnboard(`[data-obgoal="${d.obgoal}"]`); return; }
  if (d.oblevel !== undefined) { ob.level = +d.oblevel; openOnboard(`[data-oblevel="${d.oblevel}"]`); return; }
  if (d.ob) { obAction(d.ob); return; }
  if (d.trial !== undefined) { if (trialSel === null) { trialSel = TRIAL.opts[+d.trial]; Store.track('trial', { course: 'python', locale: window.I18N.get() }); sfx(trialSel === TRIAL.ok ? 'ok' : 'bad'); $('#trial').outerHTML = trialHTML(); const f = $('#trial .trial-fb'); f && f.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'auto' : 'smooth' }); } return; }
  if (d.pal !== undefined) { const it = palItems[+d.pal]; closeModal(); it && it.run(); return; }
  if (d.auth) { authMode = d.auth; authMsg = ''; renderAuth(); return; }
  if (d.land) { if (d.land === 'start') Store.track('start', { course: COURSES.includes(d.lc) ? d.lc : null, locale: window.I18N.get() }); await leaveLanding(d.land, d.lc); return; }
  if (d.sugkind) { sug.kind = d.sugkind; sug.msg = $('#sugMsg').value; sug.ctx = $('#sugCtx').checked; render(); return; }
  if (d.act === 'sug-again') { sug.state = ''; render(); return; }
  if (d.copy) {
    const [dd, i] = d.copy.split(':').map(Number), code = dayData(dd).guide[i].code;
    try { await navigator.clipboard.writeText(code); toast(t('day.copied')); } catch (err) { toast(t('day.copyFail')); }
    return;
  }
  if (d.sym !== undefined) { if (cm) cm.insert(d.sym); return; }
  if (d.act === 'code-run' || d.act === 'code-check') { runCode(d.act === 'code-check'); return; }
  if (d.act === 'code-reset') { const ex = labEx(); if (cm && ex) { cm.set(ex.start); cmPending = [labKey(S.course, route.d, route.i), ex.start, ex.start]; flushDraft(); $('#draftNote').textContent = ''; cm.focus(); } return; }
  if (d.opt !== undefined && L) { selectOpt(+d.opt); return; }
  if (d.bank !== undefined && L && L.phase === 'answer') { const ex = L.queue[0], bb = ex.bank.find(x => x.id === +d.bank); if (bb && !bb.used) { bb.used = true; ex.picked.push(bb.id); renderOrder(); } return; }
  if (d.pick !== undefined && L && L.phase === 'answer') { const ex = L.queue[0], id = +d.pick; ex.picked = ex.picked.filter(x => x !== id); ex.bank.find(x => x.id === id).used = false; renderOrder(); return; }
  switch (d.act) {
    case 'coursemenu': menuOpen = !menuOpen; renderChrome(); break;
    case 'palette': openPalette(); break;
    case 'extra': startExtra(); break;
    case 'poke': pokeAt(b); break;
    case 'poke-land': { const all = {}; SLOTS.forEach(sl => { const o = OUTFITS.filter(r => r[1] === sl); all[sl] = Math.random() < .6 ? o[Math.floor(Math.random() * o.length)][0] : null; }); b.innerHTML = kibi('happy', 132, 'float', all); sfx('ok'); break; }
    case 'outfit-random': randomOutfit(); break;
    case 'outfit-clear': S.outfit = {}; Store.save(); render(); break;
    case 'hearts': heartsModal(); break;
    case 'close': closeModal(); break;
    case 'check': check(false); break;
    case 'skip': check(true); break;
    case 'next': next(); break;
    case 'end': closeLesson(); break;
    case 'quit': quitLesson(); break;
    case 'quit-yes': closeModal(); closeLesson(); break;
    case 'sound': S.sound = !S.sound; Store.save(); render(); break;
    case 'motion': S.motion = S.motion === 'reduce' ? '' : 'reduce'; Store.save(); render(); break;
    case 'onboard': ob = null; openOnboard(); break;
    case 'reset': confirmReset = true; render(); break;
    case 'reset-cancel': confirmReset = false; render(); break;
    case 'reset-yes': confirmReset = false; Store.reset(); S = Store.state; go('map'); break;
    case 'signout': await doSignOut(); break;
    case 'signout-all': b.disabled = true; try { await Store.signOut('global'); S = Store.state; showAuth(); } catch (err) { b.disabled = false; toast(t('sync.err')); } break;
    case 'google': b.disabled = true; try { await Store.signInGoogle(); } catch (err) { authMsg = `<p class="msg err">${esc(authError(err))}</p>`; renderAuth(); } break;
  }
});
// El temario de cada curso en la portada se carga al abrir su desplegable (toggle no burbujea: se escucha en captura).
document.addEventListener('toggle', e => { if (e.target.matches && e.target.matches('details[data-syl]') && e.target.open) fillSyllabus(e.target); }, true);
document.addEventListener('submit', e => { if (e.target.id === 'sugForm') { e.preventDefault(); if (sug.state !== 'sending') sendSuggestion(); } });
document.addEventListener('input', e => {
  if (e.target.id === 'sugCtx') sug.ctx = e.target.checked;
  if (e.target.id === 'sugMsg') { sug.msg = e.target.value; $('#sugCount').textContent = `${e.target.value.length}/${SUG_MAX}`; } });
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && !L && !$('#shell').hidden) { e.preventDefault(); openPalette(); return; }
  if (e.key === '/' && !L && $('#modal').hidden && !$('#shell').hidden && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); openPalette(); return; }
  if (e.key === 'Tab') { trapTab(e); return; }
  if (e.key === 'Escape') {
    if (!$('#modal').hidden) { closeModal(); return; }
    if (L) { quitLesson(); return; }
    if (openPop || menuOpen || statOpen) { const st = statOpen; openPop = null; menuOpen = false; statOpen = null; render(); if (st) { const b = document.querySelector(`[data-stat="${st}"]`); b && b.focus(); } }
    return;
  }
  if (!L || !$('#modal').hidden) return;
  if (e.key === 'Enter') { const btn = $('#checkBtn'); if (!btn || btn.disabled || document.activeElement === btn) return; e.preventDefault(); btn.click(); return; }
  if (L.phase === 'answer' && /^[1-9]$/.test(e.key) && document.activeElement.tagName !== 'INPUT') { const ex = L.queue[0]; if (ex.opts) selectOpt(+e.key - 1); }
});
// La barra de símbolos no se lleva el foco: el editor lo conserva y el teclado del móvil no se cierra.
for (const ev of ['pointerdown', 'mousedown']) document.addEventListener(ev, e => { if (e.target.closest('.symbar button')) e.preventDefault(); });
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
    if (!$('#modal').hidden && $('#modal .hmeter')) heartsModal();
  }
  document.querySelectorAll('[data-timer]').forEach(el => { el.textContent = timerText(); });
}, 1000);

boot();
})();
