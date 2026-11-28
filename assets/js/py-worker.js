/* Nibble: ejecuta Python con Pyodide en un Worker (módulo), para no congelar la página.
   La página lo crea al pulsar Ejecutar por primera vez y lo termina (terminate) si un programa pasa de 5 s.
   Mensajes: el Worker avisa { ready } o { bootError }; luego recibe { id, code, input } y responde
   { id, out, err, type, line, cut }: salida y errores por separado, cada uno como mucho 10 KB. */
import { loadPyodide } from '../vendor/pyodide-314.0.7/pyodide.mjs';

const MAX = 10 * 1024;
let py = null;

// Junta los bytes que escribe Python hasta MAX; lo que sobra se descarta y se marca como cortado.
function sink() {
  const parts = []; let n = 0, cut = false;
  return {
    write(buf) { if (n < MAX) { const room = Math.min(buf.length, MAX - n); parts.push(buf.slice(0, room)); n += room; if (room < buf.length) cut = true; } else cut = true; return buf.length; },
    text() { const all = new Uint8Array(n); let o = 0; for (const p of parts) { all.set(p, o); o += p.length; } return new TextDecoder().decode(all); },
    get cut() { return cut; },
  };
}

// Del traceback, solo la parte del programa del alumno (desde su primer "File \"<exec>\"") y el tipo de error.
function explain(msg) {
  const lines = String(msg).trimEnd().split('\n');
  const first = lines.findIndex(l => l.includes('File "<exec>"'));
  const tb = first > 0 ? ['Traceback (most recent call last):', ...lines.slice(first)] : lines;
  const last = lines[lines.length - 1] || '';
  const type = (last.match(/^([A-Za-z_][\w.]*)(?::|$)/) || [])[1] || 'Error';
  let line = null;
  for (const l of tb) { const m = l.match(/File "<exec>", line (\d+)/); if (m) line = +m[1]; }
  return { err: tb.join('\n'), type: type.split('.').pop(), line };
}

async function boot() {
  try {
    py = await loadPyodide({ indexURL: new URL('../vendor/pyodide-314.0.7/', import.meta.url).href, env: { PYTHONINSPECT: '' } });
    self.postMessage({ ready: true });
  } catch (e) {
    self.postMessage({ bootError: String(e && e.message || e) });
  }
}
const booted = boot();

self.onmessage = async ({ data }) => {
  await booted;
  try { run(data); } catch (e) { self.postMessage({ id: data.id, out: '', err: String(e && e.message || e), type: 'Internal' }); }
};
function run({ id, code, input }) {
  if (!py) { self.postMessage({ id, out: '', err: 'Python is not available.', type: 'Boot' }); return; }
  const out = sink(), err = sink(), lines = String(input || '').split('\n');
  if (lines[lines.length - 1] === '') lines.pop();
  py.setStdout({ write: b => out.write(b) });
  py.setStderr({ write: b => err.write(b) });
  py.setStdin({ stdin: () => (lines.length ? lines.shift() : undefined) }); // sin más líneas: input() da EOFError
  const g = py.globals.get('dict')();
  g.set('__name__', '__main__');
  let res = { id };
  try {
    py.runPython(code, { globals: g, filename: '<exec>' });
  } catch (e) {
    res = Object.assign(res, explain(e.message));
  } finally {
    g.destroy();
    py.runPython('import sys\nsys.stdout.flush()\nsys.stderr.flush()'); // un print(..., end='') no debe salir en la ejecución siguiente
  }
  res.out = out.text();
  const se = err.text();
  if (se) res.err = res.err ? se + res.err : se;
  res.cut = out.cut || err.cut;
  self.postMessage(res);
}
