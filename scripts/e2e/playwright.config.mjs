// Pruebas de interfaz: npm run e2e (instala antes los navegadores con: npx playwright install chromium firefox webkit).
// Firefox y WebKit (el motor de Safari) solo pasan las pruebas marcadas con @motores: lo que depende del navegador.
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  timeout: 60_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'list' : [['list']],
  use: { baseURL: 'http://127.0.0.1:4173', serviceWorkers: 'block', trace: 'retain-on-failure' },
  projects: [
    { name: 'movil-375', use: { browserName: 'chromium', viewport: { width: 375, height: 812 }, hasTouch: true } },
    { name: 'escritorio-1280', use: { browserName: 'chromium', viewport: { width: 1280, height: 800 } } },
    { name: 'firefox', grep: /@motores/, use: { browserName: 'firefox', viewport: { width: 1280, height: 800 } } },
    { name: 'webkit', grep: /@motores/, use: { browserName: 'webkit', viewport: { width: 1280, height: 800 } } },
  ],
  webServer: { command: 'node scripts/e2e/serve.mjs', url: 'http://127.0.0.1:4173/index.html', reuseExistingServer: !process.env.CI, cwd: '../..' },
});
