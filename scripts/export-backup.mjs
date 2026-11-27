// Copia de seguridad de la base de datos de Nibble, para ejecutarla tú en tu ordenador (por ejemplo, cada semana).
// Usa la clave service_role, que salta la seguridad por filas: NUNCA la pongas en el repositorio, en config.js
// ni en GitHub. Pásala solo por variables de entorno en tu terminal:
//
//   PowerShell:
//     $env:SUPABASE_URL = "https://<id>.supabase.co"
//     $env:SUPABASE_SERVICE_ROLE_KEY = "<clave service_role de Supabase > Project Settings > API>"
//     node scripts/export-backup.mjs
//
// Guarda un JSON por tabla (y las cuentas: id, correo y fechas) en backups/AAAA-MM-DD/. La carpeta backups/
// está en .gitignore: contiene datos personales, guárdala en un sitio seguro y borra las copias viejas.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const BASE = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const TABLES = [['progress', 'user_id'], ['level_results', 'id'], ['suggestions', 'id'], ['events', 'id']];
const PAGE = 1000;

function fail(msg) { console.error('Error: ' + msg); process.exit(1); }
if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(BASE)) fail('SUPABASE_URL debe ser https://<id>.supabase.co (sin /rest/v1).');
if (!KEY) fail('falta SUPABASE_SERVICE_ROLE_KEY.');
// Con la clave anon (o la publicable) solo saldrían tablas vacías por la seguridad por filas: se avisa antes.
const role = (() => { try { return JSON.parse(Buffer.from(KEY.split('.')[1], 'base64url').toString()).role; } catch (e) { return null; } })();
if (KEY.startsWith('sb_publishable_') || role === 'anon') fail('esa es la clave pública (anon). Hace falta la service_role (o una sb_secret_).');

const headers = { apikey: KEY, Authorization: `Bearer ${KEY}` };
async function get(url, extra = {}) {
  const r = await fetch(url, { headers: { ...headers, ...extra } });
  if (!r.ok) fail(`${r.status} al leer ${url.replace(BASE, '')}: ${(await r.text()).slice(0, 200)}`);
  return r.json();
}
async function table(name, order) {
  const rows = [];
  for (let from = 0; ; from += PAGE) {
    const page = await get(`${BASE}/rest/v1/${name}?select=*&order=${order}.asc`, { Range: `${from}-${from + PAGE - 1}`, 'Range-Unit': 'items' });
    rows.push(...page);
    if (page.length < PAGE) return rows;
  }
}
async function users() {
  const out = [];
  for (let page = 1; ; page++) {
    const j = await get(`${BASE}/auth/v1/admin/users?page=${page}&per_page=${PAGE}`);
    const list = j.users || [];
    out.push(...list.map(u => ({ id: u.id, email: u.email, created_at: u.created_at, last_sign_in_at: u.last_sign_in_at, confirmed_at: u.confirmed_at })));
    if (list.length < PAGE) return out;
  }
}

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'backups', new Date().toISOString().slice(0, 10));
mkdirSync(dir, { recursive: true });
for (const [name, order] of TABLES) {
  const rows = await table(name, order);
  writeFileSync(path.join(dir, name + '.json'), JSON.stringify(rows));
  console.log(`${name}: ${rows.length} filas`);
}
const us = await users();
writeFileSync(path.join(dir, 'users.json'), JSON.stringify(us));
console.log(`users: ${us.length} cuentas`);
console.log('Copia guardada en ' + dir);
