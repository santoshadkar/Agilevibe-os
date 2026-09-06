import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Building dist bundle via Vite API...');

try {
  await build({
    root: __dirname,
    build: {
      outDir: path.join(__dirname, 'dist'),
      emptyOutDir: true
    }
  });
  console.log('Build completed successfully!');
} catch (err) {
  console.error('Build error:', err);
  process.exit(1);
}
