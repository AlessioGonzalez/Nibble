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
