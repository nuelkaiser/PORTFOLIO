import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targets = [
  {
    file: "abode.jpg",
    url: "https://www.abodeflex.ng/",
    waitMs: 4000,
  },
  {
    file: "abode-academy.jpg",
    url: "https://abodeacademy.abodeflex.ng/",
    waitMs: 4000,
  },
  {
    file: "city-spaces.jpg",
    url: "https://cityspacesandbookings.com/",
    waitMs: 5000,
    dismissCookies: true,
  },
];

async function dismissOverlays(page) {
  const labels = [
    "Accept cookies",
    "Accept",
    "Accept all",
    "Got it",
    "Close",
  ];
  for (const label of labels) {
    try {
      const btn = page.getByRole("button", { name: new RegExp(label, "i") });
      if (await btn.first().isVisible({ timeout: 1500 })) {
        await btn.first().click({ timeout: 2000 });
        await page.waitForTimeout(500);
        break;
      }
    } catch {
      // ignore
    }
  }
}

async function main() {
  const outDir = path.join(__dirname, "..", "public", "work");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  });

  for (const target of targets) {
    const page = await context.newPage();
    console.log(`Capturing ${target.url}`);
    try {
      await page.goto(target.url, {
        waitUntil: "domcontentloaded",
        timeout: 90000,
      });
      await page.waitForTimeout(target.waitMs);
      if (target.dismissCookies) {
        await dismissOverlays(page);
        await page.waitForTimeout(800);
      }
      await page.addStyleTag({
        content: `
          [id*="cookie" i], [class*="cookie" i], [id*="consent" i],
          [class*="consent" i], #onetrust-banner-sdk, .ot-sdk-container,
          iframe[title*="chat" i] { display: none !important; visibility: hidden !important; }
        `,
      });
      await page.waitForTimeout(400);
      const out = path.join(outDir, target.file);
      await page.screenshot({
        path: out,
        type: "jpeg",
        quality: 88,
        fullPage: false,
      });
      console.log(`Saved ${out}`);
    } catch (err) {
      console.error(`Failed ${target.url}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
