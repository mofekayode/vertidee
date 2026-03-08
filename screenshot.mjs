import puppeteer from 'puppeteer';

const viewports = [
  { name: 'desktop-1920', width: 1920, height: 1080 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'laptop-1280', width: 1280, height: 800 },
  { name: 'tablet-1024', width: 1024, height: 768 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'mobile-375', width: 375, height: 812 },
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle2', timeout: 30000 });
    // Wait for page to fully render
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({ path: `/tmp/hero-${vp.name}.png`, fullPage: false });
    console.log(`Captured ${vp.name}`);
    await page.close();
  }
  await browser.close();
  console.log('Done!');
})();
