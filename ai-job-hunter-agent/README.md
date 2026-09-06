# AI Job Intelligence & Auto-Apply Matchmaker Agent 🇮🇳

An autonomous AI Agent system that aggregates job postings daily across multiple Indian job portals (**LinkedIn India, Naukri, Foundit, Glassdoor**) for **Agile Coach**, **AI Consultant**, **AI Leader**, and **Cyber Security Consultant** roles. 

The agent runs automatically every morning at 08:00 AM, evaluates candidate CV match scores (0–100%), calculates **interview call probability**, auto-applies on the user's behalf for high-match opportunities, and dispatches **instant email confirmation alerts**.

---

## 🌟 Key Features

- **🇮🇳 India Tech Hub Focus**: Automatically scrapes & aggregates opportunities in Bengaluru, Hyderabad, Mumbai, Gurugram/NCR, Pune, Chennai, and Remote (India) with salaries in **₹ LPA (Lakhs Per Annum)**.
- **⏰ Automated Morning Scheduler**: Powered by `node-cron` running at 08:00 AM every morning with deduplication logic.
- **🤖 AI CV Parsing & Match Scoring**: Evaluates candidate skills, experience, and certifications against job requirements to predict interview call probability (High 🔥, Medium ⚡, Low 💡).
- **✉️ Auto-Apply Agent & Email Alerts**: Automatically submits applications for high-match jobs (Score ≥ 80%) and dispatches formatted HTML confirmation emails to your inbox.
- **📋 Application Pipeline Tracker**: Kanban board managing Saved, Applied, Interviewing, and Offered stages.
- **📊 Glassmorphism Web Portal**: Modern dark-mode dashboard with real-time filters by role, location, work type, and minimum score threshold.

---

## 🚀 Quick Start

### 1. Installation
```bash
git clone https://github.com/santoshadkar/AI-Job-Intelligence-Agent.git
cd AI-Job-Intelligence-Agent
npm install
```

### 2. Run the Portal & Agent
```bash
npm start
```

Open your browser and navigate to **http://localhost:3000**.

---

## 📁 System Architecture

```
AI-Job-Intelligence-Agent/
├── public/                  # Modern Glassmorphism Web Portal (HTML5/CSS3/JS)
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── src/
│   └── services/
│       ├── jobAggregator.js  # Multi-portal scraper & deduplication engine
│       ├── aiMatcher.js      # CV scoring & call probability calculator
│       ├── emailNotifier.js  # HTML email notification & audit logger
│       └── autoApplier.js    # Automated job application dispatcher
├── data/                    # JSON persistence (Jobs, CV, Tracker, Settings)
└── server.js                # Express REST API & node-cron Morning Scheduler
```

---

## 📜 License
MIT License.
