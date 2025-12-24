Project static export and prerender instructions

Quick workflow

1) Build site:
   npm run build

2) Export build to `static/`:
   npm run export

3) (Optional) Generate fully static HTML pages (no app JS):
   - Install Puppeteer: npm i -D puppeteer
     or install puppeteer-core and set PUPPETEER_EXECUTABLE_PATH to your Chrome
   - Run: npm run prerender
   - Output will be in `prerendered/` (fully static HTML + `assets/`)

Notes
- If `npm run prerender` fails with a message about puppeteer installation, run `npm i -D puppeteer` and re-run the script.
- The prerender script removes app JS from generated pages; if you'd rather keep specific scripts, I can update the script to preserve them.