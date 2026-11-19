// The Spanish page's share images (Eric, 2026-11-19): one 1200x630 card per visitor language, the preview Facebook,
// WhatsApp and LinkedIn show when someone posts /spanish/<lang>. Same look as the page: paper, the Spanish flag,
// the hero title in Fraunces (a line per sentence), the free-week note in Inter. Writes public/og-spanish-<lang>.png.
//
// Run after changing a hero title or note:  node --experimental-strip-types scripts/spanish-share-images.mjs
// Needs Playwright with Chromium (npx playwright install chromium) and network access to Google Fonts.
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LANGS = ['en', 'de', 'da', 'sv', 'no', 'nl', 'fi'];
const wordmark = `data:image/png;base64,${readFileSync(join(root, 'public/polyngual-wordmark-dark.png')).toString('base64')}`;
const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function card(t) {
  return `<!doctype html><html lang="${t.htmlLang}"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,100..900,0..100&family=Inter:wght@400..700&display=block" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; }
  body { background: #fbf8f3; color: #021940; font-family: Inter, sans-serif; position: relative; overflow: hidden;
         padding: 74px 84px 64px; display: flex; flex-direction: column; }
  .band { position: absolute; inset: 0 0 auto 0; height: 10px;
          background: linear-gradient(to bottom, #c60b1e 0 25%, #ffc400 25% 75%, #c60b1e 75% 100%); }
  .glow { position: absolute; right: -180px; top: -220px; width: 640px; height: 640px; border-radius: 50%;
          background: radial-gradient(closest-side, rgba(255, 196, 0, 0.16), rgba(255, 196, 0, 0)); }
  .flag { width: 84px; height: 56px; border-radius: 9px; flex: none;
          background: linear-gradient(to bottom, #c60b1e 0 25%, #ffc400 25% 75%, #c60b1e 75% 100%);
          box-shadow: inset 0 0 0 0.5px rgba(2, 25, 64, 0.14), 0 18px 36px -16px rgba(198, 11, 30, 0.55), 0 5px 12px -7px rgba(2, 25, 64, 0.25); }
  h1 { font-family: Fraunces, Georgia, serif; font-weight: 560; font-variation-settings: 'SOFT' 50, 'opsz' 144;
       font-size: 84px; line-height: 1.02; letter-spacing: -0.03em; max-width: 1000px; margin-top: 34px; }
  h1 span { display: block; text-wrap: balance; }
  .foot { margin-top: auto; display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; }
  .note { font-size: 27px; color: rgba(2, 25, 64, 0.64); line-height: 1.3; }
  .note b { color: #c60b1e; font-weight: 600; }
  .mark { height: 40px; width: auto; flex: none; }
</style></head><body>
<div class="band"></div><div class="glow"></div>
<div class="flag"></div>
<h1>${t.hero.title.split(/(?<=[.!?])\s+/).map((sentence) => `<span>${escape(sentence)}</span>`).join('')}</h1>
<div class="foot"><p class="note"><b>Costa del Sol</b> · ${escape(t.hero.note)}</p><img class="mark" src="${wordmark}" alt=""></div>
</body></html>`;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const lang of LANGS) {
  const t = (await import(join(root, `src/content/spanish/${lang}.ts`)))[lang];
  await page.setContent(card(t), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const overflow = await page.evaluate(() => document.querySelector('h1').getBoundingClientRect().bottom > document.querySelector('.foot').getBoundingClientRect().top - 24);
  if (overflow) throw new Error(`${lang}: the title runs into the footer`);
  await page.screenshot({ path: join(root, `public/og-spanish-${lang}.png`) });
  console.log(`public/og-spanish-${lang}.png`);
}
await browser.close();
