// Recorridos principales de Nibble en el navegador (móvil 375 px y escritorio 1280 px), sin Supabase.
// La app se abre con ?e2e=1: cada sección de la lección deja su solución en #lesson[data-sol].
import { test, expect } from '@playwright/test';

const exact = w => new RegExp('^' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$');

// Entra desde la portada, salta la bienvenida y deja el mapa a la vista.
async function start(page) {
  await page.goto('/?e2e=1');
  await expect(page.locator('#landing h1')).toBeVisible();
  await page.locator('#landing [data-land="start"]').first().click();
  await page.locator('[data-ob="skip"]').click();
  await expect(page.locator('#modal')).toBeHidden();
  await expect(page.locator('.dayrow')).toHaveCount(30);
}

// Contesta la sección actual, bien o mal, y pulsa Continuar.
async function answer(page, right) {
  const lesson = page.locator('#lesson');
  const raw = await lesson.getAttribute('data-sol');
  const { t, sol } = JSON.parse(raw);
  if (t === 'order') {
    if (right) for (const w of sol) await page.locator('#bank .chip:not(.used)').filter({ hasText: exact(w) }).first().click();
    else await page.locator('[data-act="skip"]').click();
  } else if (t === 'type') {
    await page.locator('#typeIn').fill(right ? sol : 'respuesta_equivocada_123');
  } else {
    const n = await page.locator('[data-opt]').count();
    await page.locator(`[data-opt="${right ? sol : (sol + 1) % n}"]`).click();
  }
  const btn = page.locator('#checkBtn');
  if (await btn.getAttribute('data-act') === 'check') await btn.click();
  await expect(btn).toHaveAttribute('data-act', 'next');
  await btn.click();
  // Espera a que cambie la sección o a que aparezca la pantalla final.
  await expect.poll(async () => (await page.locator('.done-screen').count()) > 0 || (await lesson.getAttribute('data-sol')) !== raw
    || (await page.locator('#lesson .ex').count()) === 0).toBe(true);
}

async function completeLevel(page) {
  for (let i = 0; i < 40 && !(await page.locator('.done-screen').count()); i++) await answer(page, true);
  await expect(page.locator('.done-screen:not(.fail)')).toBeVisible();
  await page.locator('[data-act="end"]').click();
  await expect(page.locator('#lesson')).toBeHidden();
}

test('1. portada, ejercicio de prueba y bienvenida', async ({ page }) => {
  await page.goto('/?e2e=1');
  await expect(page.locator('#landing h1')).toBeVisible();
  await page.locator('[data-trial="1"]').click();
  await expect(page.locator('.trial-fb.ok')).toBeVisible();
  await page.locator('#landing [data-land="start"]').first().click();
  await page.locator('[data-obgoal="10"]').click();
  await page.locator('[data-ob="next"]').click();
  await page.locator('[data-ob="next"]').click();
  await page.locator('#obtime').fill('19:30');
  await page.locator('[data-ob="next"]').click();
  await expect(page.locator('#modal')).toBeHidden();
  await expect(page.locator('.hero h1')).toBeVisible();
  const st = await page.evaluate(() => JSON.parse(localStorage.getItem('sintaxis.v3.local')));
  expect(st.goal).toBe(10);
  expect(st.remind).toBe('19:30');
});

test('2. completar el nivel 1 de Python', async ({ page }) => {
  await start(page);
  await page.goto('/?e2e=1#day-1-practice');
  await page.locator('.level.current [data-start]').click();
  await expect(page.locator('#lesson')).toBeVisible();
  await completeLevel(page);
  await expect(page.locator('.level.done')).toHaveCount(1);
  await expect(page.locator('.daybyte .hex')).toHaveText('0x80');
  await expect(page.locator('.stat.xp b')).toHaveText('5');
});

test('3. fallar hasta quedarse sin vidas', async ({ page }) => {
  await start(page);
  await page.goto('/?e2e=1#day-1-practice');
  await page.locator('.level.current [data-start]').click();
  for (let i = 0; i < 10; i++) await answer(page, false);
  await expect(page.locator('.done-screen.fail')).toBeVisible();
  await expect(page.locator('#foot [data-act="extra"]')).toBeVisible();
});

test('4. cambiar a francés y a tema oscuro', async ({ page }) => {
  await start(page);
  await page.goto('/?e2e=1#profile');
  await page.locator('.prow [data-locale="fr"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await expect(page.locator('.page h1')).toHaveText('Ta progression');
  await page.locator('[data-theme-set="dark"]').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(15, 16, 20)');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
});

test('5. el progreso sigue ahí al recargar', async ({ page }) => {
  await start(page);
  await page.goto('/?e2e=1#day-1-practice');
  await page.locator('.level.current [data-start]').click();
  await completeLevel(page);
  await page.reload();
  await expect(page.locator('.level.done')).toHaveCount(1);
  await page.goto('/?e2e=1#map');
  await expect(page.locator('.dayrow').first().locator('.hex')).toHaveText('0x80');
});

test('6. el editor se carga solo al abrirlo y el borrador sigue tras recargar', async ({ page }) => {
  const vendor = [];
  page.on('request', r => { if (r.url().includes('/assets/vendor/codemirror-')) vendor.push(r.url()); });
  await start(page);
  await page.goto('/?e2e=1#day-1-guide');
  await page.locator('.labcard [data-go]').click();
  await expect(page.locator('#editor .cm-content')).toBeVisible();
  expect(vendor.length).toBe(1);
  await page.locator('#editor .cm-content').click();
  await page.keyboard.press('Control+End');
  await page.keyboard.type('print(42)');
  await expect(page.locator('#draftNote')).not.toBeEmpty();
  await page.reload();
  await expect(page.locator('#editor .cm-content')).toContainText('print(42)');
  await page.locator('[data-act="code-reset"]').click();
  await expect(page.locator('#editor .cm-content')).not.toContainText('print(42)');
});

test('7. vestir a Kibi: lo libre se pone, lo bloqueado no, y se guarda al recargar', async ({ page }) => {
  await start(page);
  await page.locator('.kibistrip [data-go="kibi"]').click();
  await expect(page.locator('.wtile')).toHaveCount(14);
  await page.locator('[data-outfit="cap"]').click();
  await expect(page.locator('[data-outfit="cap"]')).toHaveAttribute('aria-pressed', 'true');
  await page.locator('[data-outfit="crown"]').click();
  await expect(page.locator('.toast')).toBeVisible();
  await expect(page.locator('[data-outfit="crown"]')).toHaveAttribute('aria-pressed', 'false');
  await page.reload();
  await expect(page.locator('[data-outfit="cap"]')).toHaveAttribute('aria-pressed', 'true');
  await page.locator('.stage [data-act="poke"]').click();
  await expect(page.locator('.stage .bubble p')).not.toBeEmpty();
});

test('8. Python: Comprobar marca los casos, un error se explica y un bucle infinito se corta en 5 s', async ({ page }) => {
  test.setTimeout(90000);
  await start(page);
  await page.goto('/?e2e=1#day-1-code-0');
  const editor = page.locator('#editor .cm-content'), out = page.locator('#outpanel');
  const write = async code => { await editor.click(); await page.keyboard.press('Control+A'); await page.keyboard.press('Delete'); await page.keyboard.insertText(code); };
  // El texto esperado depende del idioma del navegador: se lee de la propia página.
  const greet = (await page.locator('.expect pre').innerText()).split('\n')[0];
  await write(`print(${JSON.stringify(greet)})\nprint(7 * 6)\n`);
  await page.locator('[data-act="code-check"]').click();
  await expect(out.locator('.case.ok')).toHaveCount(1, { timeout: 60000 });
  await write('print(nombre)\n');
  await page.locator('[data-act="code-run"]').click();
  await expect(out.locator('.stderr')).toContainText('NameError');
  await expect(out.locator('.runhelp')).toBeVisible();
  await write('while True:\n    pass\n');
  await page.locator('[data-act="code-run"]').click();
  await expect(out.locator('.runstate.busy')).toBeVisible();
  // La página sigue respondiendo mientras corre el bucle.
  expect(await page.evaluate(() => 1 + 1)).toBe(2);
  await expect(out.locator('.runhelp')).toBeVisible({ timeout: 9000 });
  await write("print('otra vez')\n");
  await page.locator('[data-act="code-run"]').click();
  await expect(out.locator('.stdout')).toHaveText('otra vez', { timeout: 30000 });
});
