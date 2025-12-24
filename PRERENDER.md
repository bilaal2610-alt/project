Pre-render (generate fully static pages)

This project includes a script that can visit the built SPA pages and save fully static HTML (no app JS) to `prerendered/`.

Setup
1. Build and export the current production build into `static/`:
   - npm run build
   - npm run export

2. Install a headless browser tool (choose one):
   - Recommended (convenient): npm i -D puppeteer
     - Puppeteer bundles Chromium automatically (large download).
   - Alternative (smaller): npm i -D puppeteer-core and set `PUPPETEER_EXECUTABLE_PATH` to your local Chrome/Chromium executable.

Run
- npm run prerender

What it does
- Starts a small static server that serves `static/` on localhost
- Uses Puppeteer (or puppeteer-core + your Chrome) to open each route page and waits until the app renders
- Saves the resulting HTML (with script tags removed) into `prerendered/` and copies the `assets/` folder

Notes
- The generated HTML files are fully static (no app JS). Styling is preserved (CSS files are copied).
- If you want the pages to keep some client-side behavior, do not remove the app scripts; instead edit the prerender script to preserve them.
