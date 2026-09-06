# SEED Exam Preparation Portal 🎓

A comprehensive, interactive, self-study learning portal built for students preparing for the **SEED (Symbiosis Entrance Exam for Design)** conducted by Symbiosis International University (SID Pune).

---

## 🌟 Key Features

- **Full Coverage of All 5 SEED Syllabus Domains**:
  1. **Creative Visualization**: 2D & 3D shapes, 11 cube nets, orthographic projections, isometric block counting, shadow physics, tessellations.
  2. **Observation & Perception**: Gestalt principles, brand logo anatomy, typography anatomy, everyday object mechanics.
  3. **Critical Thinking & Problem-Solving**: Stanford 5-stage Design Thinking, SCAMPER innovation framework, ergonomic accessibility.
  4. **Art, Craft, Culture & Design**: Indian folk traditions (Madhubani, Warli, Gond, Dokra lost-wax casting, Kalamkari), global art movements (Bauhaus, Pop Art), iconic global & Indian designers.
  5. **Scholastic Science & Math**: Applied physics (Levers Class 1/2/3, gear ratios, center of gravity stability, prism dispersion), Golden Ratio ($\Phi = 1.618$), Fibonacci spiral, ISO paper scale geometry.

- **Student-First Study Experience**:
  - **High-Yield Formula & Rule Cheat Sheet Box** at the top of every topic.
  - **Candidate Exam Trap Warnings** highlighting where applicants lose marks.
  - **Multiple Solved Examples** per topic with step-by-step reasoning.
  - **Interactive 3D Visual Simulators**: 3D paper net cube folding simulator, Gestalt illusion models, lever mechanics.
  - **Practice Quizzes & Timed 60-Minute Mock Test Engine** with score analytics, flag for review, and confetti celebrations.
  - **SEED Daily Sketching Prompt & HTML5 Drawing Studio** for PRT Studio Test prep.
  - **Active External Links**: Working links to recommended books, curated articles, and YouTube video tutorials.
  - **Personal Notes & Bookmarks**: Auto-saved to local storage.

---

## 🚀 Quick Start (Local Development)

```bash
# Clone the repository
git clone https://github.com/santoshadkar/seed-prep-portal.git

# Navigate into project directory
cd seed-prep-portal

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## 📦 Production Build & Deployment

To build the production static bundle:
```bash
npm run build
```
The output files will be generated in the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**.

---

## 🛠️ Tech Stack

- **Frontend**: React 18+ & Vite
- **Styling**: Tailwind CSS v4 & Lucide Icons
- **Interactive Tools**: HTML5 Canvas & SVG Math Models
- **State & Storage**: React Hooks & LocalStorage API
