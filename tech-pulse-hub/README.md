# ⚡ TechPulse Nexus: AI, Security, Cybersecurity & Agile Morning Portal

> **One-Stop Daily Intelligence Portal with Automated 08:00 AM Batch Aggregation**

TechPulse Nexus is a modern, high-performance executive intelligence portal covering **9 strategic technology pillars**. It aggregates news daily at **08:00 AM**, generates AI key takeaways, provides audio briefings, and exports structured executive summaries for team updates.

---

## 🌐 9 Technology Pillars

1. **🤖 Artificial Intelligence & GenAI**: Multi-step reasoning models, autonomous agent frameworks, hallucination mitigation.
2. **🛡️ Cybersecurity & Threat Intel**: CISA emergency advisories, zero-day threat intelligence, OAuth bypass alerts.
3. **🔐 Security & Governance (InfoSec)**: NIST finalized post-quantum encryption standards (FIPS 203/204/205), Zero Trust maturity models.
4. **⚡ Agile & DevSecOps**: AI-augmented Scrum planning, shift-left security threat modeling in standups.
5. **☁️ Cloud Native & Platform Engineering**: Internal Developer Platforms (IDPs), Backstage golden paths, OpenTelemetry.
6. **⚖️ AI Policy & Governance**: EU AI Act compliance, mandatory red-teaming for foundation models, training data provenance.
7. **🗄️ Data Engineering & Vector DBs**: Hybrid GraphRAG architectures (dense vectors + Knowledge Graphs), real-time data mesh.
8. **⚛️ Quantum & DeepTech**: Fault-tolerant logical qubit processors, quantum chemistry, post-quantum readiness.
9. **🌱 Green Tech & Sustainable IT**: Carbon-neutral cloud data centers, 4-bit model quantization, green software engineering.

---

## 🌟 Key Portal Features

- **⚡ 08:00 AM Automated Morning Batch Engine**: Node.js + `node-cron` daemon pulling live feeds every morning at 08:00 AM.
- **🔊 Morning Digest Audio Briefing**: Built-in Text-to-Speech audio player for hands-free morning news listening.
- **📋 Daily Executive Exporter**: One-click Markdown briefing copyable for Slack, Microsoft Teams, or Email.
- **🖥️ Live Batch Control Center**: Terminal drawer showing live cron daemon logs, status indicator, and manual trigger button.
- **🔖 Saved Reading List**: Save favorite articles locally to review later.

---

## 🚀 Quick Start

### 1. Local Development
```bash
# Clone the repository
git clone https://github.com/santoshadkar/Tech-Pulse-Nexus.git
cd Tech-Pulse-Nexus

# Install dependencies
npm install

# Start Express 08:00 AM Cron server & Vite Dev UI
npm run server & npm run dev
```

- **Frontend Portal**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`

### 2. Docker Deployment
```bash
docker-compose up -d --build
```

### 3. Production Build
```bash
npm run build
```

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Lucide Icons, Vanilla CSS Design System with Glassmorphism & Cyber Theme.
- **Backend Daemon**: Express.js, `node-cron` (configured for `0 8 * * *`), `rss-parser`.
- **Deployment**: Docker, Docker Compose, PM2 (`ecosystem.config.cjs`).
