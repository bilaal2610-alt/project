Static export of the site (prerendered).

Usage:
- Serve the `static-site/` folder with any static host (GitHub Pages, Netlify, Surge, etc.).
- Each route is a standalone HTML file (index.html, about.html, services.html, projects.html, contact.html).
- Assets are in `assets/` (CSS and JS). Keep these files together with the HTML files.

Notes:
- This folder is intended as a self-contained static site. It was generated from the Vite build and prerendered output.
- To update: run the normal build + prerender workflow (`npm run build`, `npm run export`, `npm run prerender`) and then copy `prerendered/*` into `static-site/` again.
- I can create a git branch named `static-site` and commit these files if you enable `git` in the environment or run the provided git commands locally.

If you'd like, I can:
- Create a zip archive (`static-site.zip`) ready for download.
- Create the `static-site` git branch and commit (requires git availability).
- Remove Vite/dev files in a separate branch (destructive; confirm first).
