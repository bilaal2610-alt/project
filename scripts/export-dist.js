import { rmSync, mkdirSync, copyFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const dist = join(root, 'dist');
const out = join(root, 'static');

function copyRecursive(src, dest) {
  const stat = statSync(src);
  if (stat.isDirectory()) {
    try {
      mkdirSync(dest, { recursive: true });
    } catch {}
    for (const child of readdirSync(src)) {
      copyRecursive(join(src, child), join(dest, child));
    }
  } else {
    copyFileSync(src, dest);
  }
}

try {
  rmSync(out, { recursive: true, force: true });
} catch (e) {}

mkdirSync(out, { recursive: true });
copyRecursive(dist, out);
console.log('Exported dist -> static');
