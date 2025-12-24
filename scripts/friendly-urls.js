import fs from 'fs';
import path from 'path';

const root = path.join(process.cwd(), 'prerendered');

function ensureDir(p) {
  try { fs.mkdirSync(p, { recursive: true }); } catch (e) {}
}

function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
}

const files = fs.readdirSync(root).filter(f => f.endsWith('.html'));
for (const file of files) {
  if (file === 'index.html') continue;
  const name = path.basename(file, '.html');
  const dir = path.join(root, name);
  const dest = path.join(dir, 'index.html');
  ensureDir(dir);
  copyFile(path.join(root, file), dest);
  console.log(`Created ${dest}`);
}
console.log('Friendly URLs generated.');
