/* Nibble: ejecuta el JavaScript del alumno dentro de sandbox.html (iframe sandbox="allow-scripts", origen opaco).
   Cada ejecución va en un Worker nuevo creado desde un blob (si el navegador no lo permite, en el propio iframe).
   Solo habla con la página que lo contiene, por postMessage:
     recibe { id, code, input } y responde { id, out, err, type, line, cut }; al cargar avisa { ready }.
   La página destruye el iframe si una ejecución pasa de 5 s. */
(function () {
  'use strict';
  // Solo funciona aislado: con el origen de la web (abierto directamente o metido en un iframe sin sandbox)
  // el código del alumno podría leer la sesión, así que no hace nada.
  if (self.origin !== 'null' || window.parent === window) return;

  // Prepara la ejecución en scope (el Worker o el iframe) y devuelve la función que ejecuta un mensaje.
  // Se convierte en texto para el blob del Worker, así que no puede usar nada de fuera.
  function runner(scope, send) {
    const MAX = 10 * 1024;
    const AsyncFunction = (async () => {}).constructor;
    const realTimeout = scope.setTimeout.bind(scope);
    const lineRe = /(?:<anonymous>|> (?:Async)?Function|> eval|anonymous):(\d+):\d+/;
    // Las funciones creadas con new Function no empiezan en la línea 1: se mide cuánto suman en este navegador.
    // Chrome y Firefox la ponen en la pila; Safari, en e.line (Firefox también en e.lineNumber).
    const rawLine = e => { const m = String(e && e.stack || '').match(lineRe); return m ? +m[1] : e && typeof e.line === 'number' ? e.line : e && typeof e.lineNumber === 'number' ? e.lineNumber : null; };
    let offset = 0;
    try { new AsyncFunction('throw new Error("x")')().catch(e => { const n = rawLine(e); if (n) offset = n - 1; }); } catch (e) { /* */ }
    const lineOf = e => { const n = rawLine(e); return n ? Math.max(1, n - offset) : null; };
    const key = k => /^[A-Za-z_$][\w$]*$/.test(k) ? k : `'${k}'`;
    // Como console.log de Node: textos tal cual arriba y entre comillas dentro de listas y objetos.
    function show(v, d = 0) {
      if (typeof v === 'string') return d ? `'${v}'` : v;
      if (v === null || typeof v !== 'object' && typeof v !== 'function') return typeof v === 'bigint' ? v + 'n' : String(v);
      if (typeof v === 'function') return `[${/^class\s/.test(Function.prototype.toString.call(v)) ? 'class' : 'Function'} ${v.name || '(anonymous)'}]`;
      if (v instanceof Error) return `${v.name}: ${v.message}`;
      if (v instanceof Date) return v.toISOString();
      if (d > 2) return Array.isArray(v) ? '[Array]' : '[Object]';
      if (Array.isArray(v)) return v.length ? `[ ${v.map(x => show(x, d + 1)).join(', ')} ]` : '[]';
      if (v instanceof Set) return `Set(${v.size}) {${v.size ? ' ' + [...v].map(x => show(x, d + 1)).join(', ') + ' ' : ''}}`;
      if (v instanceof Map) return `Map(${v.size}) {${v.size ? ' ' + [...v].map(([k, x]) => `${show(k, d + 1)} => ${show(x, d + 1)}`).join(', ') + ' ' : ''}}`;
      const ks = Object.keys(v), name = v.constructor && v.constructor !== Object && v.constructor.name ? v.constructor.name + ' ' : '';
      return ks.length ? `${name}{ ${ks.map(k => `${key(k)}: ${show(v[k], d + 1)}`).join(', ')} }` : `${name}{}`;
    }
    const clear = scope.clearTimeout.bind(scope), every = scope.setInterval.bind(scope), stop = scope.clearInterval.bind(scope);
    return async data => {
      let out = '', err = '', cut = false, type = null, line = null, pending = 0;
      const lines = String(data.input || '').split('\n'); if (lines[lines.length - 1] === '') lines.pop();
      const add = (s, toErr) => {
        s += '\n'; const room = MAX - out.length - err.length;
        if (room <= 0) { cut = true; return; }
        if (s.length > room) { s = s.slice(0, room); cut = true; }
        if (toErr) err += s; else out += s;
      };
      const fail = e => { if (!type) { type = (e && e.name) || 'Error'; line = lineOf(e); } add(e instanceof Error ? `${e.name}: ${e.message}` : `Uncaught ${show(e, 1)}`, true); };
      const log = (...a) => add(a.map(x => show(x)).join(' ')), warn = (...a) => add(a.map(x => show(x)).join(' '), true);
      scope.console = { log, info: log, debug: log, table: log, dir: log, warn, error: warn };
      scope.prompt = () => (lines.length ? lines.shift() : null); // la entrada del caso, línea a línea
      // Se cuentan los temporizadores para esperar a que terminen (la página corta a los 5 s).
      const timers = new Set();
      scope.setTimeout = (f, ms, ...a) => { pending++; const h = realTimeout(() => { timers.delete(h); pending--; try { typeof f === 'function' && f(...a); } catch (e) { fail(e); } }, ms); timers.add(h); return h; };
      scope.clearTimeout = h => { if (timers.delete(h)) pending--; clear(h); };
      scope.setInterval = (f, ms, ...a) => { pending++; const h = every(() => { try { f(...a); } catch (e) { fail(e); } }, ms); timers.add(h); return h; };
      scope.clearInterval = h => { if (timers.delete(h)) pending--; stop(h); };
      scope.onunhandledrejection = ev => { ev.preventDefault(); fail(ev.reason); };
      try { await new AsyncFunction(data.code)(); } catch (e) { fail(e); }
      while (pending > 0) await new Promise(r => realTimeout(r, 15));
      await new Promise(r => realTimeout(r, 0)); // promesas rechazadas al final
      send({ id: data.id, out, err, type, line, cut });
    };
  }

  const reply = r => window.parent.postMessage(r, '*');
  const blobURL = URL.createObjectURL(new Blob([`const run = (${runner})(self, m => self.postMessage(m)); self.onmessage = e => run(e.data);`], { type: 'text/javascript' }));
  let inFrame = null; // sin Workers: el mismo runner, en el iframe
  window.addEventListener('message', e => {
    if (e.source !== window.parent || !e.data || typeof e.data.code !== 'string') return;
    let w;
    try { w = new Worker(blobURL); } catch (err) { (inFrame = inFrame || runner(window, reply))(e.data); return; }
    w.onmessage = m => { reply(m.data); w.terminate(); };
    w.onerror = ev => { ev.preventDefault(); reply({ id: e.data.id, out: '', err: String(ev.message || 'Error'), type: 'Error', line: null, cut: false }); w.terminate(); };
    w.postMessage(e.data);
  });
  reply({ ready: true });
})();
