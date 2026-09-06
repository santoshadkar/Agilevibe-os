# 🏆 ICF Credentials Hub

> A comprehensive, modern, interactive web portal and exam preparation platform for International Coaching Federation (ICF) credential candidates pursuing **ACC**, **PCC**, and **MCC** certifications.

![ICF Credentials Hub Preview](https://raw.githubusercontent.com/santoshadkar/ICF-Credentials-Hub/main/assets/preview.png)

---

## 🌟 Overview & Features

The **ICF Credentials Hub** serves as a single-source digital platform providing candidate coaches with interactive tools, level-specific exam simulators, study resources, and detailed competency performance markers aligned with the official ICF 8 Core Competencies and Code of Ethics.

### 📊 1. Credentials & Readiness Hub
- **Tier Specifications**: Deep comparison of prerequisites, training hours, client hours (paid ratio), mentor hours, and evaluation standards for **Associate Certified Coach (ACC)**, **Professional Certified Coach (PCC)**, and **Master Certified Coach (MCC)**.
- **Interactive Readiness & Gap Analysis Calculator**: Input completed training, client, and mentor hours to generate progress bars and customized action plans.
- **Side-by-Side Comparison Matrix**: Detailed metric table comparing Level 1, Level 2, Level 3, and Portfolio pathways.

### 📝 2. Level-Specific Mock Exam Simulator
- **Situational Judgment Test (SJT) Format**: Modeled directly after the official 81-question ICF Credentialing Exam standard.
- **30-Scenario Question Bank**: Dedicated items filtering by **ACC**, **PCC**, and **MCC** exam difficulty levels.
- **Dual BEST & WORST Scoring Engine**: Candidates select 1 BEST action and 1 WORST action per scenario.
- **Interactive Question Navigator Matrix (1-30)**: Question status tracking, flagging for review, and instant grading.
- **Scaled Score Report Card**: Calculates scaled scores (200 - 500 range) against the official **460 cut score threshold**.
- **ICF Assessor Rationales**: Comprehensive expert explanations explaining official ICF BEST and WORST scoring logic.

### 📖 3. Books, Resources & Mentor Coaching Hub
- **Curated Study Library**: Textbooks mapped directly to ICF Core Competencies (Marion Franklin's *The HeART of Laser-Focused Coaching*, Kimsey-House's *Co-Active Coaching*, Marcia Reynolds' *The Discomfort Zone*, Michael Bungay Stanier's *The Coaching Habit*, Szabó & Meier's *Solution-Focused Coaching*, O'Neill's *Executive Coaching*).
- **Official ICF Guidelines & Assessor Rubrics**: Interactive modals and direct links to official ICF Code of Ethics, 11 PCC Performance Markers, MCC Pinnacle Indicators, and Boundary Decision Trees on `coachingfederation.org`.
- **Official 10-Hour Mentor Coaching Rules**: Explains the 90-day minimum timeframe, group vs 1-on-1 split (7 hrs max group / 3 hrs min 1-on-1), transcript audits, and mentor coach eligibility rules.
- **7-Skill Mentor Coaching Curriculum**: Exhaustive curriculum addressing why candidates struggle/fail assessor evals, ACC vs PCC vs MCC demonstration standards, mentor roleplay drills, and real audio transcript dialogue comparisons.

### 🎯 4. Competencies & Case Studies Hub
- **Enhanced ICF 8 Core Competencies Vault**: Full breakdown of all 8 competencies across 4 domains (*Foundation*, *Co-Creating the Relationship*, *Communicating Effectively*, *Cultivating Growth*). Includes level-specific ACC, PCC, and MCC performance markers, common exam traps to avoid, and powerful evocative questions.
- **Real-World Case Studies & Dilemmas**: Deep dives into corporate multi-party sponsor ethics and shifting focus from problem to person.
- **Step-by-Step Certification Pathways**: Roadmaps for Level 1, Level 2, Level 3, and Portfolio paths.

---

## 🌐 Vercel Deployment Troubleshooting (Fixing 404)

If `https://icf-credentials-hub.vercel.app/` shows a 404 error on Vercel:

1. **Trigger Manual Redeploy on Vercel**:
   - Go to [https://vercel.com/dashboard](https://vercel.com/dashboard).
   - Click on your project **`icf-credentials-hub`**.
   - Navigate to **Deployments** -> Click the **`...`** (three dots) icon next to the latest commit -> Click **Redeploy**.

2. **Verify Project Settings**:
   - Under **Settings** -> **General**:
     - **Framework Preset**: Select **`Other`**
     - **Root Directory**: Leave blank (or `./`)
     - **Build Command**: Leave blank
     - **Output Directory**: Leave blank
   - Click **Save** and **Redeploy**.

---

## 🛠️ Technology Stack

- **Frontend Architecture**: HTML5, Vanilla CSS3 (Dark Glassmorphism UI, Responsive Grid Layout system), Vanilla JavaScript (ES6+).
- **Server Environment**: Zero-dependency Node.js HTTP Server (`server.js`).
- **Design System**: Tailored HSL dark palette (`#0f172a`, `#1e293b`), glassmorphism backdrop blurs, crisp micro-interactions, and custom progress indicators.

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher) installed on your system.

### Running Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/santoshadkar/ICF-Credentials-Hub.git
   cd ICF-Credentials-Hub
   ```

2. **Start the HTTP Server**:
   ```bash
   node server.js
   ```

3. **Access the Portal**:
   Open your web browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 📁 Repository Directory Structure

```text
ICF-Credentials-Hub/
├── index.html              # Main Single-Page Application (4 Responsive Hubs)
├── server.js                # Zero-dependency Node.js HTTP Web Server (Port 3000)
├── vercel.json             # Vercel v2 Static SPA Routing Configuration
├── package.json            # Node.js Package Manifest & Start Script
├── css/
│   └── styles.css          # Glassmorphism Design System & Responsive Layouts
├── js/
│   ├── data.js             # Data Layer (ACC/PCC/MCC Specs, 30 SJT Scenarios, Competencies Vault)
│   ├── calculator.js       # Readiness & Gap Analysis Progress Calculator Logic
│   ├── examEngine.js       # Situational Judgment Exam Engine & Scaled Scoring Algorithm
│   └── app.js              # Application Controller (Tab Navigation, Modal Popups, Rendering)
└── README.md               # Documentation & Setup Guide
```

---

## 📄 License & Attribution

This project is created for professional coaching accreditation preparation and is aligned with the official standards of the **International Coaching Federation (ICF)**.

Created with ❤️ by Santosh Adkar & Antigravity AI.
