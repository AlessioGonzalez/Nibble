// Empaqueta CodeMirror 6 en un solo archivo para la web, que no tiene paso de compilación.
// Uso: node scripts/build-vendor.mjs   ->  assets/vendor/codemirror-<versión>.js (se sube al repositorio).
// Al cambiar de versión, actualiza CM_SRC en assets/js/app.js y THIRD_PARTY_NOTICES.md.
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
