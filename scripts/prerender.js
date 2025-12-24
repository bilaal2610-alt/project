import http from 'http';
import path from 'path';
import fs from 'fs';

const PORT = process.env.PORT || 5174;
const root = path.join(process.cwd(), 'static');
const out = path.join(process.cwd(), 'prerendered');

// dynamic import of puppeteer/pupeteer-core so users can either install puppeteer
// (which downloads Chromium) or puppeteer-core and point to a local Chrome
async function getPuppeteer() {
  try {
    const mod = await import('puppeteer');
    return mod.default ?? mod;
  } catch (e) {
    try {
      const mod = await import('puppeteer-core');
      return mod.default ?? mod;
    } catch (e2) {
      console.error('Please install puppeteer (npm i -D puppeteer) or puppeteer-core and set PUPPETEER_EXECUTABLE_PATH');
      process.exit(1);
    }
  }
}

function contentType(file) {
  const ext = path.extname(file).toLowerCase();
  switch (ext) {
    case '.html': return 'text/html; charset=utf-8';
    case '.js': return 'application/javascript; charset=utf-8';
    case '.css': return 'text/css; charset=utf-8';
    case '.png': return 'image/png';
    case '.jpg': return 'image/jpeg';
    case '.svg': return 'image/svg+xml';
    case '.json': return 'application/json';
    default: return 'application/octet-stream';
  }
}

const server = http.createServer((req, res) => {
  try {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
    const filePath = path.join(root, reqPath);
    if (!filePath.startsWith(root)) return (res.statusCode = 403, res.end('Forbidden'));
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.setHeader('Content-Type', contentType(filePath));
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.statusCode = 404;
      res.end('Not found');
    }
  } catch (err) {
    res.statusCode = 500;
    res.end('Server error');
  }
});

async function prerender() {
  await new Promise((r) => server.listen(PORT, r));
  console.log('Static server started at http://localhost:' + PORT);

  const puppeteer = await getPuppeteer();
  const launchOpts = { args: ['--no-sandbox', '--disable-setuid-sandbox'], headless: true };
  if (process.env.PUPPETEER_EXECUTABLE_PATH) launchOpts.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  const browser = await puppeteer.launch(launchOpts);
  const page = await browser.newPage();

  const routes = [
    { url: '/index.html', out: 'index.html' },
    { url: '/about.html', out: 'about.html' },
    { url: '/projects.html', out: 'projects.html' },
    { url: '/services.html', out: 'services.html' },
    { url: '/contact.html', out: 'contact.html' },
  ];

  // ensure output folder
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });

  for (const r of routes) {
    const url = `http://localhost:${PORT}${r.url}`;
    console.log('Loading', url);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait for the root to render
    try {
      await page.waitForFunction(() => {
        const root = document.querySelector('#root');
        return root && root.innerHTML.trim().length > 0;
      }, { timeout: 10000 });
    } catch (e) {
      console.warn('Timed out waiting for #root content; continuing anyway');
    }

    // Remove script tags that reference the app bundle so the output is static
    const html = await page.evaluate(() => {
      const doc = document.documentElement.cloneNode(true);
      const scripts = doc.querySelectorAll('script');
      scripts.forEach(s => s.remove());
      // remove modulepreload links (not necessary for static)
      const links = doc.querySelectorAll('link[rel="modulepreload"]');
      links.forEach(l => l.remove());
      return '<!doctype html>' + doc.outerHTML;
    });

    fs.writeFileSync(path.join(out, r.out), html, 'utf8');
    console.log('Wrote', path.join(out, r.out));
  }

  // copy assets
  const assetsSrc = path.join(root, 'assets');
  const assetsDest = path.join(out, 'assets');
  if (fs.existsSync(assetsSrc)) {
    fs.cpSync(assetsSrc, assetsDest, { recursive: true });
    console.log('Copied assets to', assetsDest);
  }

  await browser.close();
  server.close();
  console.log('Prerender complete. Static files are in:', out);
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});