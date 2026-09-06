# Production Deployment Guide - AgileMind RAG

AgileMind RAG is built as a static Single Page Application (SPA) with a client-side vector engine and optional Gemini API integration. Because it has zero server dependencies, it can be deployed to any static hosting provider or container platform.

---

## ⚡ Option 1: Vercel (Recommended - Free & Fast)

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository. Vercel will automatically detect Vite.
4. Click **Deploy**.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

*Alternatively, deploy via CLI:*
```bash
npm install -g vercel
vercel
```

---

## 🚀 Option 2: Netlify

1. Go to [Netlify App](https://app.netlify.com/).
2. Drag & drop the `dist/` folder after running `npm run build`, or connect your Git repository.
3. Build settings are pre-configured in `netlify.toml`.

---

## 🐳 Option 3: Docker Container Deployment (AWS / Cloud Run / DigitalOcean)

The project includes a multi-stage `Dockerfile` and `nginx.conf`.

### 1. Build Docker Image
```bash
docker build -t agilemind-rag:latest .
```

### 2. Run Docker Container Locally
```bash
docker run -d -p 8080:80 --name agilemind agilemind-rag:latest
```
Access the application at `http://localhost:8080`.

### 3. Deploy to Google Cloud Run
```bash
gcloud run deploy agilemind-rag --source . --platform managed --allow-unauthenticated
```

---

## 🐙 Option 4: GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`.

---

## 🔒 Security & Environment Notes

- **API Keys**: No API key is hardcoded. Users provide their own Gemini API key directly in browser settings via local storage.
- **Data Persistence**: Custom documents and vector indices are stored securely in the user's browser `localStorage`.
