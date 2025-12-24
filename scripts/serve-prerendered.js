import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 5174;
const HOST = process.env.HOST || '127.0.0.1';
const root = path.join(process.cwd(), 'prerendered');

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
    if (reqPath === '' || reqPath === '/') reqPath = '/index.html';

    // try direct path
    let filePath = path.join(root, reqPath);

    const safe = path.normalize(filePath).startsWith(root);
    if (!safe) return (res.statusCode = 403, res.end('Forbidden'));

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.setHeader('Content-Type', contentType(filePath));
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // try directory index
    const dirIndex = path.join(root, reqPath, 'index.html');
    if (fs.existsSync(dirIndex) && fs.statSync(dirIndex).isFile()) {
      res.setHeader('Content-Type', contentType(dirIndex));
      fs.createReadStream(dirIndex).pipe(res);
      return;
    }

    // try adding .html
    const htmlPath = path.join(root, reqPath + '.html');
    if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
      res.setHeader('Content-Type', contentType(htmlPath));
      fs.createReadStream(htmlPath).pipe(res);
      return;
    }

    res.statusCode = 404;
    res.end('Not found');
  } catch (err) {
    res.statusCode = 500;
    res.end('Server error');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Serving prerendered site at http://${HOST}:${PORT}`);
});

// graceful shutdown
process.on('SIGINT', () => {
  server.close(() => process.exit(0));
});
