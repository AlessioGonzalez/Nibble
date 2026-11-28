/* Nibble: service worker para usar la web sin conexión.
   - Todo se sirve desde la propia web (sin CDN): página, estilos, fuentes, código, supabase-js, iconos y lecciones.
     Se sirve desde la caché al momento y se actualiza por detrás cuando hay red (stale-while-revalidate).
   - La caché lleva la versión de la app (VERSION en app.js): al publicar una versión nueva, cambia el nombre
     y la caché anterior se borra al activarse.
   - assets/vendor/ (CodeMirror, Pyodide: unos 13 MB) va a otra caché que no se borra al cambiar de versión: sus archivos
     llevan la versión en el nombre y no cambian. Se guardan la primera vez que se piden; después funcionan sin conexión.
   - Todo lo demás (la API de Supabase, inicio de sesión, envíos) va siempre a la red y nunca se guarda. */
const VERSION = '4.11.0';
const CACHE = 'nibble-' + VERSION;
// shortcut: las versiones viejas de assets/vendor/ se quedan en esta caché; si se actualiza Pyodide a menudo, borrar las que no usa la app.
const VENDOR = 'nibble-vendor';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'assets/css/app.css', 'assets/icon.svg',
  'assets/fonts/figtree-latin.woff2', 'assets/fonts/jetbrains-mono-latin.woff2',
  'assets/js/theme.js', 'assets/js/config.js', 'assets/js/content-api.js', 'assets/js/i18n.js', 'assets/js/order.js', 'assets/js/progress.js',
  'assets/js/store.js', 'assets/js/practice.js', 'assets/js/app.js', 'assets/js/py-worker.js', 'sandbox.html', 'assets/js/sandbox.js', 'assets/vendor/supabase-js-2.45.4.min.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== VENDOR).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.pathname.includes('/assets/vendor/')) {
    e.respondWith(caches.open(VENDOR).then(async cache => (await cache.match(req)) || fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; })));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: req.mode === 'navigate' });
    const net = fetch(req).then(res => {
      if (res.ok) cache.put(req, res.clone());
      return res;
    }).catch(() => hit || (req.mode === 'navigate' ? cache.match('index.html') : Response.error()));
    return hit || net;
  }));
});
