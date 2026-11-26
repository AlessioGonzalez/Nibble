/* API mínima que usan los archivos de contenido (content/<curso>/<idioma>.js).
   Cada archivo llama a Sintaxis.addCourse(curso, idioma, datos). Funciona en el navegador y en Node (scripts/validate.mjs). */
(function (g) {
  const S = (g.Sintaxis = g.Sintaxis || {});
  S.content = S.content || {};
  // En mc / out / fill la opción correcta es SIEMPRE la primera; la app las baraja al mostrarlas.
  S.mc = (q, o, e, c = '') => ({ t: 'mc', q, o, e, c });
  S.out = (c, o, e, q = '') => ({ t: 'out', q, c, o, e });
  S.fill = (c, o, e, q = '') => ({ t: 'fill', q, c, o, e });
  S.ord = (q, w, x, e) => ({ t: 'order', q, w, x, e });
  S.typ = (q, c, a, e) => ({ t: 'type', q, c, a: Array.isArray(a) ? a : [a], e });
  S.addCourse = (course, locale, data) => {
    (S.content[course] = S.content[course] || {})[locale] = data;
    if (typeof S.onContent === 'function') S.onContent(course, locale);
  };
})(typeof window !== 'undefined' ? window : globalThis);
