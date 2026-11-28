// Valida los archivos de contenido.
// Uso: node scripts/validate.mjs                -> todos los cursos e idiomas
//      node scripts/validate.mjs python         -> solo un curso
//      node scripts/validate.mjs python es      -> un curso y un idioma
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const COURSES = ['python', 'java', 'javascript', 'cpp'];
const LOCALES = ['es', 'en', 'fr', 'it'];
// --allow-missing: los archivos que aún no existen no cuentan como error (útil mientras se escribe el contenido).
const allowMissing = process.argv.includes('--allow-missing');
const [onlyCourse, onlyLocale] = process.argv.slice(2).filter(a => !a.startsWith('--'));
const courses = onlyCourse ? [onlyCourse] : COURSES;
const locales = onlyLocale ? [onlyLocale] : LOCALES;

const ctx = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/content-api.js'), 'utf8'), ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/order.js'), 'utf8'), ctx);
const ORDER = ctx.NibbleOrder;

const errors = [];
for (const c of COURSES) {
  const ids = ORDER[c] || [];
  if (ids.length !== 30) errors.push(`order.js: ${c} tiene ${ids.length} días`);
  if (new Set(ids).size !== ids.length) errors.push(`order.js: ${c} tiene ids repetidos`);
}
if (new Set(COURSES.flatMap(c => ORDER[c] || [])).size !== COURSES.reduce((n, c) => n + (ORDER[c] || []).length, 0)) errors.push('order.js: un id se repite entre cursos');
// Un día fusionado (NibbleAlias) ya no está en el temario, y el día que lo contiene sí.
const allIds = new Set(COURSES.flatMap(c => ORDER[c] || []));
for (const [from, to] of Object.entries(ctx.NibbleAlias || {})) {
  if (allIds.has(from)) errors.push(`order.js: ${from} es un alias pero sigue en el temario`);
  if (!allIds.has(to)) errors.push(`order.js: el alias ${from} apunta a ${to}, que no está en el temario`);
}
const missing = [];
let exercises = 0;
const err = (where, msg) => errors.push(`${where}: ${msg}`);

for (const course of courses) {
  for (const loc of locales) {
    const file = path.join(root, 'content', course, `${loc}.js`);
    if (!fs.existsSync(file)) { missing.push(`content/${course}/${loc}.js`); continue; }
    try { vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file }); }
    catch (e) { err(`${course}/${loc}`, `no se puede ejecutar: ${e.message}`); continue; }
    const data = ctx.Sintaxis.content[course]?.[loc];
    if (!data) { err(`${course}/${loc}`, 'el archivo no llama a Sintaxis.addCourse con ese curso e idioma'); continue; }
    if (typeof data.tag !== 'string' || !data.tag) err(`${course}/${loc}`, 'falta tag');
    if (!Array.isArray(data.days) || !data.days.length) { err(`${course}/${loc}`, 'no tiene días'); continue; }
    if (data.days.length > 30) err(`${course}/${loc}`, `tiene ${data.days.length} días; el máximo es 30`);
    else if (data.days.length < 30) {
      if (allowMissing) console.log(`Aviso: ${course}/${loc} tiene ${data.days.length} de 30 días.`);
      else err(`${course}/${loc}`, `debe tener 30 días (tiene ${data.days.length})`);
    }
    data.days.forEach((d, i) => {
      const w = `${course}/${loc} día ${i + 1}`;
      // Identificador estable del día: el de order.js en esa posición (igual en los 4 idiomas).
      if (!/^[a-z]+(-[a-z]+)*$/.test(d.id || '')) err(w, `id no válido: ${d.id}`);
      else if (d.id !== ORDER[course]?.[i]) err(w, `id ${d.id}, pero order.js tiene ${ORDER[course]?.[i]} en esa posición`);
      if (!d.t || !d.d) err(w, 'falta título (t) o descripción (d)');
      const g = d.guide;
      if (!Array.isArray(g) || g.length < 4) err(w, 'la guía necesita al menos 4 secciones');
      else {
        g.forEach((s, k) => { if (!s.h || !Array.isArray(s.p) || !s.p.length) err(w, `sección ${k + 1} sin h o sin párrafos p`); });
        if (g.filter(s => s.code).length < 2) err(w, 'la guía necesita al menos 2 secciones con código');
        if (!g.some(s => s.real)) err(w, 'la guía necesita al menos una sección con real: true');
      }
      if (!Array.isArray(d.x) || d.x.length !== 8) { err(w, `debe tener 8 ejercicios: 7 prácticas + 1 reto (tiene ${d.x?.length})`); return; }
      if (new Set(d.x.map(e => e.t)).size < 3) err(w, 'usa al menos 3 tipos de ejercicio distintos');
      d.x.forEach((e, j) => {
        exercises++;
        const we = `${w} ej ${j + 1}`;
        if (!e.e) err(we, 'sin explicación');
        if (['mc', 'out', 'fill'].includes(e.t)) {
          if (!Array.isArray(e.o) || e.o.length < 3 || e.o.length > 4) err(we, 'necesita 3 o 4 opciones');
          else if (new Set(e.o).size !== e.o.length) err(we, 'opciones repetidas');
        }
        if ((e.t === 'fill' || e.t === 'type') && !(e.c || '').includes('___')) err(we, 'el código no tiene el hueco ___');
        if (e.t === 'mc' && !e.q) err(we, 'mc sin pregunta');
        if (e.t === 'order' && (!Array.isArray(e.w) || e.w.length < 2)) err(we, 'order sin piezas');
        if (e.t === 'order' && !e.q) err(we, 'order sin pregunta');
        if (e.t === 'type' && (!Array.isArray(e.a) || !e.a.length)) err(we, 'type sin respuestas');
      });
    });
  }
  // Todas las traducciones deben tener la misma estructura que la versión en español.
  const base = ctx.Sintaxis.content[course]?.es;
  if (base) for (const loc of locales) {
    const other = ctx.Sintaxis.content[course]?.[loc];
    if (!other || loc === 'es' || !Array.isArray(other.days)) continue;
    other.days.forEach((d, i) => (d.x || []).forEach((e, j) => {
      const b = base.days[i]?.x?.[j];
      if (!b) return;
      if (b.t !== e.t) err(`${course}/${loc} día ${i + 1} ej ${j + 1}`, `tipo ${e.t} distinto del español (${b.t})`);
      if ((b.o || []).length !== (e.o || []).length) err(`${course}/${loc} día ${i + 1} ej ${j + 1}`, 'número de opciones distinto del español');
    }));
  }
}

if (missing.length) {
  console.log(`Faltan ${missing.length} archivos:\n  ${missing.join('\n  ')}`);
  if (!allowMissing) errors.push(`faltan ${missing.length} archivos de contenido (usa --allow-missing para ignorarlo)`);
}
if (errors.length) {
  console.error(`\n${errors.length} problemas:\n  ${errors.slice(0, 200).join('\n  ')}`);
  process.exit(1);
}
console.log(`OK: ${exercises} ejercicios válidos.`);
