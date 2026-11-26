/* Nibble: service worker para usar la web sin conexión.
   - Archivos de la propia web (página, estilos, código, iconos, lecciones), fuentes de Google y el SDK de
     Supabase en jsDelivr: se sirven desde la caché al momento y se actualizan por detrás cuando hay red
     (stale-while-revalidate). Tras publicar una versión nueva, se ve en la siguiente visita.
   - Todo lo demás (la API de Supabase, inicio de sesión, envíos) va siempre a la red y nunca se guarda. */
const CACHE = 'nibble-v1';
const CDN = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com', 'https://cdn.jsdelivr.net'];
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'assets/css/app.css', 'assets/icon.svg',
  'assets/js/config.js', 'assets/js/content-api.js', 'assets/js/i18n.js', 'assets/js/progress.js',
  'assets/js/store.js', 'assets/js/practice.js', 'assets/js/app.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  const own = url.origin === self.location.origin;
  if (!own && !CDN.includes(url.origin)) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: own && req.mode === 'navigate' });
    const net = fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
      return res;
    }).catch(() => hit || (req.mode === 'navigate' ? cache.match('index.html') : Response.error()));
    return hit || net;
  }));
});
