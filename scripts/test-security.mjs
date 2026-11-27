// Pruebas de seguridad de la web (sin navegador):
//   - ningún dato que venga del usuario, de la URL, de un error o del contenido entra en el HTML sin escapar;
//   - la web no carga nada de otros dominios (sin CDN) y tiene su Content-Security-Policy;
//   - theme.js impide mostrar la web dentro de un iframe de otro dominio.
//   node --test scripts/test-security.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = f => readFileSync(path.join(ROOT, f), 'utf8');
const APP = read('assets/js/app.js');

// Todas las interpolaciones ${...} de app.js, con su expresión completa (llaves equilibradas).
function interpolations(src) {
  const out = [];
  for (let i = src.indexOf('${'); i >= 0; i = src.indexOf('${', i + 2)) {
    let depth = 1, j = i + 2;
    while (j < src.length && depth) { if (src[j] === '{') depth++; else if (src[j] === '}') depth--; j++; }
    const line = src.slice(0, i).split('\n').length, text = src.split('\n')[line - 1];
    // Una línea marcada "texto plano" construye texto que se escapa más tarde, al pintarlo.
    if (!/\/\/ texto plano/.test(text)) out.push({ expr: src.slice(i + 2, j - 1).trim(), line });
  }
  return out;
}
// Fuentes de datos que no escribe la app: la cuenta, el formulario de sugerencias, la URL, los errores
// y los textos de las lecciones (content/*.js).
const TAINTED = [/Store\.user\.\w+/, /\bsug\.(msg|err|url)\b/, /\bauthError\(/, /error_description/, /\berr(or)?\.message\b/,
  /\bdayTitle\(/, /\bday\.(t|d|h)\b/, /\bdayData\([^)]*\)\.(t|d)\b/, /\bs\.h\b/, /\bit\.(label|sub)\b/, /\bex\.(q|e)\b/, /\bo\.t\b/, /\bd\.t\b/];
// Quita de una expresión lo que es seguro: textos entre comillas, longitudes y llamadas a funciones que escapan
// (esc y las que lo usan por dentro: rich, codeBlock, hl) o que solo eligen una clase (isMono).
function stripSafe(expr) {
  let s = expr.replace(/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g, "''").replace(/[\w.]+\.length\b/g, '0');
  for (let m; (m = /\b(esc|rich|codeBlock|hl|isMono)\(/.exec(s));) {
    let depth = 1, j = m.index + m[0].length;
    while (j < s.length && depth) { if (s[j] === '(') depth++; else if (s[j] === ')') depth--; j++; }
    s = s.slice(0, m.index) + "''" + s.slice(j);
  }
  return s;
}
const tainted = expr => TAINTED.some(re => re.test(stripSafe(expr)));

test('la comprobación distingue lo escapado de lo que no', () => {
  assert.ok(tainted('Store.user.email'));
  assert.ok(tainted('x ? esc(day.t) : day.t'));
  assert.ok(!tainted("x ? t('map.allDone') : esc(dayTitle(cd))"));
  assert.ok(!tainted('sug.msg.length'));
});

test('los datos que no escribe la app se escapan antes de entrar en el HTML', () => {
  const bad = [];
  for (const { expr, line } of interpolations(APP)) {
    // Una interpolación con plantillas anidadas se revisa por dentro: sus ${} ya están en la lista.
    if (expr.includes('`')) continue;
    if (tainted(expr)) bad.push(`app.js:${line}: \${${expr}}`);
  }
  assert.deepEqual(bad, [], 'Interpolaciones sin escapar:\n' + bad.join('\n'));
});

test('esc() escapa los caracteres de HTML', () => {
  const m = APP.match(/const esc = (s => [^\n]+);/);
  assert.ok(m, 'no se encuentra esc() en app.js');
  const esc = eval(m[1]);
  assert.equal(esc(`<img src=x onerror="a('b')">&`), '&lt;img src=x onerror=&quot;a(&#39;b&#39;)&quot;&gt;&amp;');
});

test('sin CDN: las páginas, el service worker y la app solo cargan archivos propios', () => {
  for (const f of ['index.html', 'privacidad.html', 'terminos.html']) {
    const html = read(f);
    const ext = [...html.matchAll(/<(script|link)\b[^>]*\b(src|href)="(https?:)?\/\/[^"]+"/g)].map(m => m[0]);
    assert.deepEqual(ext, [], `${f} carga archivos de otro dominio`);
    assert.ok(/<script src="assets\/js\/theme\.js"><\/script>/.test(html), `${f} no carga theme.js`);
    assert.ok(!/<script>(?!<\/script>)/.test(html), `${f} tiene un script en línea (lo bloquearía la CSP)`);
  }
  assert.ok(!/https?:\/\//.test(read('sw.js').replace(/\/\*[\s\S]*?\*\//g, '')), 'sw.js menciona otro dominio');
  assert.ok(!/cdn\.|jsdelivr|unpkg|googleapis/.test(read('assets/js/store.js') + APP), 'store.js o app.js cargan algo de un CDN');
});

test('todos los scripts de la web son JavaScript válido', () => {
  for (const f of ['theme.js', 'config.js', 'content-api.js', 'i18n.js', 'order.js', 'progress.js', 'store.js', 'practice.js', 'app.js']) {
    assert.doesNotThrow(() => new Function(read('assets/js/' + f)), `assets/js/${f} tiene un error de sintaxis`);
  }
  assert.doesNotThrow(() => new Function(read('sw.js')), 'sw.js tiene un error de sintaxis');
});

test('la caché del service worker lleva la misma versión que la app', () => {
  const v = f => (read(f).match(/const VERSION = '([^']+)'/) || [])[1];
  assert.ok(v('assets/js/app.js'), 'falta VERSION en app.js');
  assert.equal(v('sw.js'), v('assets/js/app.js'), 'cambia VERSION en sw.js y en app.js a la vez: si no, los usuarios siguen con la caché vieja');
});

test('index.html tiene una CSP estricta para scripts', () => {
  const m = read('index.html').match(/http-equiv="Content-Security-Policy" content="([^"]+)"/);
  assert.ok(m, 'falta la meta Content-Security-Policy');
  const csp = m[1];
  assert.match(csp, /default-src 'self'/);
  // Solo la propia web y el CAPTCHA (Cloudflare Turnstile): ningún otro dominio puede ejecutar código.
  assert.match(csp, /script-src 'self'( https:\/\/challenges\.cloudflare\.com)?(;|$)/, "script-src debe ser 'self' (y como mucho el CAPTCHA)");
  assert.doesNotMatch(csp, /unsafe-eval/);
  assert.match(csp, /object-src 'none'/);
  assert.match(csp, /base-uri 'self'/);
});

test('theme.js impide mostrar la web dentro de un iframe de otro dominio', () => {
  const src = read('assets/js/theme.js');
  const run = (top, self) => {
    const de = { dataset: {}, style: {} };
    const win = { top, self, matchMedia: null };
    new Function('window', 'document', 'localStorage', 'location', 'matchMedia', src)(
      win, { documentElement: de, querySelector: () => null }, { getItem: () => null }, { origin: 'https://nibble.test', href: 'https://nibble.test/' }, null);
    return de.style.display;
  };
  const me = { location: { origin: 'https://nibble.test' } };
  assert.equal(run(me, me), undefined, 'sin iframe, la página se muestra');
  const foreign = { get location() { throw new Error('cross-origin'); } };
  assert.equal(run(foreign, {}), 'none', 'dentro de un iframe ajeno, la página se oculta');
});
