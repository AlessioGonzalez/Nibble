# Componentes de terceros

Nibble incluye estos componentes, que conservan sus propias licencias. La licencia de Nibble (ver `LICENSE`) no se aplica a ellos.

| Componente | Archivo | Licencia |
|---|---|---|
| [supabase-js](https://github.com/supabase/supabase-js) 2.45.4 | `assets/vendor/supabase-js-2.45.4.min.js` | MIT, © Supabase |
| [CodeMirror](https://codemirror.net) 6.44.2 y sus paquetes de lenguaje (Python, JavaScript, Java, C++), con Lezer | `assets/vendor/codemirror-6.44.2.js` (generado con `scripts/build-vendor.mjs`) | MIT, © Marijn Haverbeke y colaboradores |
| [Pyodide](https://pyodide.org) 314.0.7, con CPython y su biblioteca estándar | `assets/vendor/pyodide-314.0.7/` (copiado sin cambios por `scripts/build-vendor.mjs`; código fuente en [github.com/pyodide/pyodide](https://github.com/pyodide/pyodide)) | Pyodide: Mozilla Public License 2.0, © Pyodide contributors y Mozilla. CPython y su biblioteca estándar (`python_stdlib.zip`): Python Software Foundation License |
| [Figtree](https://github.com/erikdkennedy/figtree) | `assets/fonts/figtree-latin.woff2` | SIL Open Font License 1.1 (texto completo en `assets/fonts/OFL-Figtree.txt`), © The Figtree Project Authors |
| [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) | `assets/fonts/jetbrains-mono-latin.woff2` | SIL Open Font License 1.1 (texto completo en `assets/fonts/OFL-JetBrainsMono.txt`), © The JetBrains Mono Project Authors |

## supabase-js: licencia MIT

Copyright (c) 2020 Supabase

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
