// Prepara las librerías que la web sirve ella misma (no tiene paso de compilación). Lo generado se sube al repositorio.
// Uso: node scripts/build-vendor.mjs
//  - CodeMirror 6 en un solo archivo: assets/vendor/codemirror-<versión>.js (CM_SRC en assets/js/app.js).
//  - Pyodide, copiado tal cual: assets/vendor/pyodide-<versión>/ (PY_VER en assets/js/py-worker.js).
// Al cambiar de versión, actualiza esas constantes y THIRD_PARTY_NOTICES.md.
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const version = JSON.parse(fs.readFileSync(path.join(root, 'node_modules/@codemirror/view/package.json'), 'utf8')).version;
const outfile = path.join(root, 'assets/vendor', `codemirror-${version}.js`);

await build({
  entryPoints: [path.join(root, 'scripts/vendor/codemirror-entry.mjs')],
  bundle: true, minify: true, format: 'iife', target: 'es2020', outfile, legalComments: 'none',
  banner: { js: `/* CodeMirror ${version} y sus lenguajes (MIT, https://codemirror.net). Generado por scripts/build-vendor.mjs. */` },
});
console.log(`${path.relative(root, outfile)}: ${(fs.statSync(outfile).size / 1024).toFixed(0)} KB`);

// Pyodide: solo los archivos que carga loadPyodide() (sin mapas de código ni la versión clásica, que no funciona en un Worker).
const pyVer = JSON.parse(fs.readFileSync(path.join(root, 'node_modules/pyodide/package.json'), 'utf8')).version;
const pyDir = path.join(root, 'assets/vendor', `pyodide-${pyVer}`);
fs.mkdirSync(pyDir, { recursive: true });
let pySize = 0;
for (const f of ['pyodide.mjs', 'pyodide.asm.mjs', 'pyodide.asm.wasm', 'python_stdlib.zip', 'pyodide-lock.json']) {
  fs.copyFileSync(path.join(root, 'node_modules/pyodide', f), path.join(pyDir, f));
  pySize += fs.statSync(path.join(pyDir, f)).size;
}
console.log(`${path.relative(root, pyDir)}: ${(pySize / 1048576).toFixed(1)} MB`);
