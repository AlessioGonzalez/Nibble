/* Se carga antes de pintar (en el <head>), sin depender de nada más.
   1. Aplica el tema guardado (claro/oscuro), el tamaño de letra y las animaciones reducidas para que la página
      no parpadee. app.js los mantiene.
   2. Anti-clickjacking: GitHub Pages no deja enviar la cabecera frame-ancestors, así que si la web se carga
      dentro de un iframe de otro dominio, no se muestra y se intenta abrir fuera. */
(function () {
  var de = document.documentElement;
  try {
    var th = localStorage.getItem('nibble.theme');
    if (th === 'light' || th === 'dark') de.dataset.theme = th;
    var fs = localStorage.getItem('nibble.font');
    if (fs === 's' || fs === 'l') de.dataset.font = fs;
    if (localStorage.getItem('nibble.motion') === 'reduce') de.dataset.motion = 'reduce';
    var dark = th === 'dark' || (th !== 'light' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && dark) meta.content = '#0F1014';
  } catch (e) { /* sin almacenamiento */ }
  var framed = false;
  try { framed = window.top !== window.self && window.top.location.origin !== location.origin; } catch (e) { framed = true; }
  if (framed) {
    de.style.display = 'none';
    try { window.top.location = location.href; } catch (e) { /* el marco lo impide: la página sigue oculta */ }
  }
})();
