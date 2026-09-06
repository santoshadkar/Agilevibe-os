import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;
const INDEX_PATH = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  try {
    const html = fs.readFileSync(INDEX_PATH, 'utf-8');
    res.writeHead(200, { 
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(html);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Error reading index.html: ${err.message}`);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`AI PM Portal running live on Node http://localhost:${PORT}`);
});
