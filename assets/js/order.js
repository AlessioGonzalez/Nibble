/* Orden de los días de cada curso. Cada día tiene un identificador fijo (el mismo en los 4 idiomas y en
   content/<curso>/<idioma>.js); su posición en la lista es su número de día (la primera, el día 1).
   El progreso se guarda por identificador (progress.js v4), así que reordenar el temario aquí no mueve el
   progreso de nadie de un día a otro. Un identificador nunca se reutiliza para otro tema. */
(function (g) {
  g.NibbleOrder = {
    python: ['py-intro', 'py-vars', 'py-operators', 'py-strings', 'py-lists', 'py-tuples', 'py-sets', 'py-dicts', 'py-conditionals', 'py-loops',
      'py-functions', 'py-modules', 'py-comprehensions', 'py-higher-order', 'py-type-errors', 'py-datetime', 'py-exceptions', 'py-regex', 'py-files', 'py-pip',
      'py-classes', 'py-scraping', 'py-venv', 'py-statistics', 'py-pandas', 'py-web', 'py-mongodb', 'py-apis', 'py-build-api', 'py-wrapup'],
    javascript: ['js-intro', 'js-types', 'js-booleans', 'js-conditionals', 'js-arrays', 'js-loops', 'js-functions', 'js-objects', 'js-higher-order', 'js-sets-maps',
      'js-destructuring', 'js-regex', 'js-console', 'js-errors', 'js-classes', 'js-json', 'js-storage', 'js-promises', 'js-closures', 'js-clean-code',
      'js-dom', 'js-dom-edit', 'js-events', 'js-async', 'js-modules', 'js-iterators', 'js-node', 'js-testing', 'js-performance', 'js-wrapup'],
    java: ['java-intro', 'java-vars', 'java-operators', 'java-strings', 'java-arrays', 'java-arraylist', 'java-sets', 'java-maps', 'java-conditionals', 'java-loops',
      'java-methods', 'java-packages', 'java-classes', 'java-encapsulation', 'java-inheritance', 'java-polymorphism', 'java-exceptions', 'java-generics', 'java-datetime', 'java-regex',
      'java-files', 'java-lambdas', 'java-streams', 'java-optional', 'java-enums', 'java-concurrency', 'java-build', 'java-jdbc', 'java-spring', 'java-wrapup'],
    cpp: ['cpp-intro', 'cpp-vars', 'cpp-operators', 'cpp-strings', 'cpp-arrays', 'cpp-vectors', 'cpp-sets', 'cpp-maps', 'cpp-conditionals', 'cpp-loops',
      'cpp-functions', 'cpp-headers', 'cpp-references', 'cpp-pointers', 'cpp-memory', 'cpp-structs', 'cpp-classes', 'cpp-constructors', 'cpp-inheritance', 'cpp-polymorphism',
      'cpp-overloading', 'cpp-templates', 'cpp-exceptions', 'cpp-stl', 'cpp-iterators', 'cpp-smart-pointers', 'cpp-move', 'cpp-files', 'cpp-concurrency', 'cpp-wrapup'],
  };
})(typeof window !== 'undefined' ? window : globalThis);
