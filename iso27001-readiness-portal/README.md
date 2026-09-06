# 🛡️ ISO / IEC 27001:2022 Certification Readiness & Self-Assessment Portal

An interactive, high-impact web application designed to guide organizations through the ISO/IEC 27001:2022 certification journey. Featuring an interactive self-assessment questionnaire, 10-phase readiness roadmap, Annex A 93 controls explorer, Statement of Applicability (SoA) generator, mandatory document tracker, live AI compliance advisor chatbot, and printable executive audit reports.

---

## ✨ Key Features

- **ISO 27001 Standard Overview**: Deep breakdown of Clauses 4–10, CIA Triad, and PDCA Cycle.
- **Interactive Self-Assessment**: 5-point maturity scale (0 to 4) across mandatory clauses with real-time score calculation.
- **10-Phase Readiness Roadmap**: Step-by-step checklist from Executive Sponsorship through Stage 1 & Stage 2 Audits.
- **Annex A 93 Controls & SoA Builder**: Searchable database of ISO 27001:2022 controls with Included/Excluded toggles, justification notes, and CSV export.
- **Mandatory Documentation Tracker**: Governance checklist for all 16 mandatory ISMS policy documents with structure guides.
- **Live AI Compliance Advisor Chatbot**: Embedded assistant answering ISO 27001 questions, audit tips, and control guidance.
- **Executive Audit Dashboard**: Weighted readiness index %, clause progress charts, gap remediation priorities, and PDF/Print exporter.

---

## 🛠️ Local Development Setup

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🚀 Production Deployment Guide

### Step 1: Push to GitHub

The local Git repository is already initialized and committed! To push to your GitHub account:

1. Create a new repository on GitHub at [https://github.com/new](https://github.com/new) (e.g., named `iso27001-readiness-portal`).
2. Run the following commands in terminal:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/iso27001-readiness-portal.git
git branch -M main
git push -u origin main
```

*(Or if you use GitHub CLI: `gh repo create iso27001-readiness-portal --public --source=. --push`)*

---

### Step 2: Deploy to Vercel

#### Option A: Automatic Git Integration (Recommended)
1. Go to [https://vercel.com/new](https://vercel.com/new).
2. Import your GitHub repository (`iso27001-readiness-portal`).
3. Vercel will automatically detect **Vite** and use:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Any future commits pushed to GitHub will automatically trigger continuous production deployments!

#### Option B: Deploy via Vercel CLI
Run the following command in your terminal:

```bash
npx vercel
```
Follow the interactive prompts to log in and deploy directly to Vercel.
