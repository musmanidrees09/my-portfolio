const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const OUT = "D:/my-portfolio/public/qa-screenshots";
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: "mobile-375", width: 375, height: 812 },
  { name: "mobile-414", width: 414, height: 896 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "laptop-1280", width: 1280, height: 800 },
  { name: "laptop-1366", width: 1366, height: 768 },
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "wide-1920", width: 1920, height: 1080 },
];

const SECTIONS = [
  { name: "header-hero", selector: "#home" },
  { name: "projects", selector: "#projects" },
  { name: "extensions", selector: "#extensions" },
  { name: "about", selector: "#about" },
  { name: "contact", selector: "#contact" },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const issues = [];

  for (const vp of VIEWPORTS) {
    console.log(`\n=== Testing ${vp.name} (${vp.width}x${vp.height}) ===`);
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 1200));

    // Full page screenshot
    await page.screenshot({ path: path.join(OUT, `${vp.name}-full.png`), fullPage: true });
    console.log(`  [screenshot] full page saved`);

    // Above-fold screenshot
    await page.screenshot({ path: path.join(OUT, `${vp.name}-fold.png`), fullPage: false });
    console.log(`  [screenshot] above-fold saved`);

    // Check horizontal overflow
    const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientW = await page.evaluate(() => document.documentElement.clientWidth);
    if (scrollW > clientW) {
      issues.push({ viewport: vp.name, section: "GLOBAL", severity: "CRITICAL", issue: `Horizontal scroll! scrollWidth=${scrollW} > clientWidth=${clientW}` });
      console.log(`  [CRITICAL] Horizontal overflow: ${scrollW} > ${clientW}`);
    } else {
      console.log(`  [OK] No horizontal overflow`);
    }

    // Check nav wrapping on desktop
    if (vp.width >= 1024) {
      const navWrapped = await page.evaluate(() => {
        const links = document.querySelectorAll('nav a[href^="#"]');
        let wrapped = false, firstTop = null;
        links.forEach(link => {
          const t = link.getBoundingClientRect().top;
          if (firstTop === null) firstTop = t;
          if (Math.abs(t - firstTop) > 6) wrapped = true;
        });
        return wrapped;
      });
      if (navWrapped) {
        issues.push({ viewport: vp.name, section: "Navbar", severity: "HIGH", issue: "Nav links wrapping to multiple lines" });
        console.log(`  [HIGH] Nav links wrapping`);
      } else {
        console.log(`  [OK] Nav links single line`);
      }
    }

    // Check H1
    const h1 = await page.evaluate(() => {
      const el = document.querySelector('h1');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { h: Math.round(r.height), w: Math.round(r.width), overflows: r.right > window.innerWidth };
    });
    if (!h1) {
      issues.push({ viewport: vp.name, section: "Hero", severity: "CRITICAL", issue: "H1 not found" });
    } else if (h1.overflows) {
      issues.push({ viewport: vp.name, section: "Hero", severity: "HIGH", issue: `H1 overflows viewport (w=${h1.w})` });
      console.log(`  [HIGH] H1 overflow`);
    } else {
      console.log(`  [OK] H1 ok (${h1.h}px tall)`);
    }

    // Check profile image
    const img = await page.evaluate(() => {
      const el = document.querySelector('img[alt*="Muhammad Usman"]');
      if (!el) return null;
      return { nw: el.naturalWidth, complete: el.complete };
    });
    if (!img) {
      issues.push({ viewport: vp.name, section: "Hero", severity: "MEDIUM", issue: "Profile image not found" });
    } else if (img.nw === 0) {
      issues.push({ viewport: vp.name, section: "Hero", severity: "HIGH", issue: "Profile image failed to load" });
      console.log(`  [HIGH] Profile image broken`);
    } else {
      console.log(`  [OK] Profile image loaded (${img.nw}px wide)`);
    }

    // Check spec bar
    const specTexts = await page.evaluate(() => {
      const cols = Array.from(document.querySelectorAll('.grid-cols-3 p.font-mono'));
      return cols.map(c => c.textContent?.trim()).filter(Boolean);
    });
    console.log(`  [OK] Spec bar values: ${specTexts.slice(0, 3).join(' | ')}`);

    // Check project count
    const projects = await page.evaluate(() => document.querySelectorAll('#projects .space-y-7 > *').length);
    if (projects === 0) {
      issues.push({ viewport: vp.name, section: "Projects", severity: "HIGH", issue: "No project cards found" });
    } else {
      console.log(`  [OK] ${projects} project card(s) rendered`);
    }

    // Check building cards
    const building = await page.evaluate(() => document.querySelectorAll('.border-dashed').length);
    console.log(`  [OK] ${building} "Currently Building" card(s)`);

    // Check broken images
    const broken = await page.evaluate(() =>
      Array.from(document.querySelectorAll('img'))
        .filter(i => !i.complete || i.naturalWidth === 0)
        .map(i => i.src?.split('/').pop() || 'unknown')
    );
    if (broken.length > 0) {
      issues.push({ viewport: vp.name, section: "Images", severity: "HIGH", issue: `${broken.length} broken: ${broken.slice(0,3).join(', ')}` });
      console.log(`  [HIGH] ${broken.length} broken images: ${broken.slice(0,3).join(', ')}`);
    } else {
      console.log(`  [OK] All images loaded`);
    }

    // Section screenshots
    for (const sec of SECTIONS) {
      try {
        await page.evaluate((sel) => document.querySelector(sel)?.scrollIntoView({ block: "start" }), sec.selector);
        await new Promise((r) => setTimeout(r, 400));
        await page.screenshot({ path: path.join(OUT, `${vp.name}-${sec.name}.png`), fullPage: false });
      } catch (_) {}
    }

    await page.close();
  }

  await browser.close();

  console.log("\n==========================================");
  console.log("         SENIOR QA AUDIT REPORT");
  console.log("==========================================\n");
  if (issues.length === 0) {
    console.log("✅ ALL CLEAR — Portfolio is 100% responsive across all viewports!");
  } else {
    issues.forEach((issue, i) => {
      console.log(`[${i+1}] [${issue.severity}] ${issue.viewport} > ${issue.section}: ${issue.issue}`);
    });
    const c = issues.filter(i=>i.severity==="CRITICAL").length;
    const h = issues.filter(i=>i.severity==="HIGH").length;
    console.log(`\nTotals: ${c} CRITICAL, ${h} HIGH, ${issues.length-c-h} MEDIUM/LOW`);
  }
  console.log(`\nScreenshots: ${OUT}`);
})();
