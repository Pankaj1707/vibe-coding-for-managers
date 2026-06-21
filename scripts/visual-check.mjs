import { chromium } from "playwright-core";

const [baseUrl, outputDirectory, edgePath] = process.argv.slice(2);

if (!baseUrl || !outputDirectory || !edgePath) {
  throw new Error("Usage: node scripts/visual-check.mjs <url> <output-dir> <edge-path>");
}

const browser = await chromium.launch({ executablePath: edgePath, headless: true });

try {
  for (const viewport of [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "mobile", width: 390, height: 844 },
  ]) {
    const page = await browser.newPage({ viewport });
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.screenshot({ path: `${outputDirectory}/${viewport.name}.png`, fullPage: true });

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
    }));

    console.log(JSON.stringify({ viewport, dimensions }));
    await page.close();
  }
} finally {
  await browser.close();
}
