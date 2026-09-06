# ⚡ TaskPulse - End-to-End Full-Stack App with CI/CD & Production Deployment

Welcome to **TaskPulse**! This project is a complete, beginner-friendly full-stack application designed to teach you coding, database management, automated testing, CI/CD pipelines, and cloud production deployment from scratch.

---

## 🛠️ Tech Stack Overview

- **Language**: Python 3.12+
- **Backend Framework**: FastAPI (High-performance API framework with interactive OpenAPI documentation)
- **Database**: SQLite (Local Development) / PostgreSQL (Production) with SQLAlchemy ORM
- **Frontend**: HTML5, Vanilla CSS (Dark Glassmorphism Design System), JavaScript (Fetch API)
- **IDE**: Visual Studio Code (VS Code)
- **Testing**: Pytest & FastAPI TestClient
- **CI/CD Pipeline**: GitHub Actions
- **Production Cloud Hosting**: Render / Railway / Vercel / Neon DB (Free Tier Compatible)

---

## 📁 Project Structure

```
taskpulse_app/
├── app/
│   ├── __init__.py
│   ├── database.py     # Database engine & session management
│   ├── models.py       # SQLAlchemy database schemas
│   ├── schemas.py      # Pydantic data validation
│   ├── crud.py         # Database query functions (Create, Read, Update, Delete)
│   └── main.py         # FastAPI endpoints & static file server
├── static/
│   ├── index.html      # Responsive Dark Mode User Interface
│   ├── style.css       # Glassmorphism design system & micro-animations
│   └── app.js          # REST API connector & dynamic UI state
├── tests/
│   └── test_api.py     # Pytest automated unit test suite
├── .github/
│   └── workflows/
│       └── ci-cd.yml   # GitHub Actions continuous integration & deployment workflow
├── requirements.txt    # Project dependencies
└── README.md           # Step-by-step setup & deployment guide
```

---

## 🚀 Step 1: Open Project in Free VS Code IDE

1. Open **VS Code**.
2. Click **File > Open Folder...** and select:
   `C:\Users\anany\.gemini\antigravity\scratch\taskpulse_app`
3. Install recommended VS Code Extensions:
   - **Python** (by Microsoft)
   - **Prettier - Code formatter**
   - **GitLens** (optional, for viewing git history)

---

## 💻 Step 2: Run the Application Locally

1. Open terminal in VS Code (`Ctrl + ~` or `Terminal > New Terminal`).
2. Activate virtual environment and install requirements:
   ```bash
   python -m venv venv
   .\venv\Scripts\activate
   pip install -r requirements.txt
   ```
3. Start the live development server:
   ```bash
   uvicorn app.main:app --reload
   ```
4. Open your web browser:
   - **Web App Interface**: `http://127.0.0.1:8000`
   - **Interactive API Docs (Swagger UI)**: `http://127.0.0.1:8000/docs`

---

## 🧪 Step 3: Run Automated Tests

To test backend database CRUD operations before pushing code:
```bash
pytest -v tests/
```

---

## 🔄 Step 4: Set Up Git & GitHub CI/CD Pipeline

1. Create a free account at [GitHub.com](https://github.com).
2. Create a new repository named `taskpulse-app`.
3. In your VS Code terminal, initialize Git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TaskPulse app with DB and CI/CD"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/taskpulse-app.git
   git push -u origin main
   ```
4. Click on the **Actions** tab in your GitHub repository!
   - You will see your **GitHub Actions CI/CD Pipeline** running live!
   - It will checkout code, install dependencies, run `ruff` linting, and execute all `pytest` unit tests automatically.

---

## 🌐 Step 5: Deploy to Production (Free Cloud Hosting)

### Method A: Deploy on Render.com (Recommended Free Hosting)
1. Sign up for free at [Render.com](https://render.com).
2. Click **New + > Web Service**.
3. Connect your GitHub repository `taskpulse-app`.
4. Configure settings:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
5. Click **Create Web Service**!
6. Render will give you a live production URL (e.g. `https://taskpulse.onrender.com`)! Every time you `git push` new code to GitHub, your CI/CD pipeline runs and automatically updates the live website!

---

## 🎯 Step 6: Learning Exercise - Resolving a CI/CD Pipeline Issue!

1. Open `app/main.py` in VS Code.
2. Intentionally make a typo or change a status code (e.g., change `201` to `500` in `create_new_task`).
3. Push to GitHub:
   ```bash
   git commit -am "Experiment: change status code"
   git push
   ```
4. Go to **GitHub Actions** tab:
   - Watch the pipeline **FAIL** (turn Red) because `pytest` caught the broken code!
   - Notice that the broken code was **BLOCKED** from going into production.
5. Fix the typo in VS Code, commit, and `git push` again:
   - Watch the pipeline turn **GREEN** and successfully deploy to production!
