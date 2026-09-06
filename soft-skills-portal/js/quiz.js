// SoftSkills Nexus - Upgraded 15-Question Diagnostic Quiz Logic

class SoftSkillsQuiz {
  constructor() {
    this.currentQuestionIndex = 0;
    this.scores = {
      comm: 0,
      eq: 0,
      leadership: 0,
      cognitive: 0,
      resilience: 0
    };
    this.maxScorePerCategory = 9; // 3 questions x 3 points max
    this.init();
  }

  init() {
    this.renderQuestion();
  }

  renderQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    const questions = SOFT_SKILLS_DATA.diagnosticQuiz;
    const total = questions.length;

    if (this.currentQuestionIndex >= total) {
      this.renderResults();
      return;
    }

    const currentQ = questions[this.currentQuestionIndex];
    const progressPct = ((this.currentQuestionIndex) / total) * 100;

    const categoryNames = {
      comm: "Communication & Expressiveness",
      eq: "Emotional Intelligence & EQ",
      leadership: "Leadership & Strategic Influence",
      cognitive: "Cognitive & Problem Solving",
      resilience: "Personal Resilience & Prioritization"
    };

    let html = `
      <div class="quiz-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Question ${this.currentQuestionIndex + 1} of ${total}</span>
          <span class="badge" style="background: rgba(99, 102, 241, 0.2); color: var(--primary);">
            Dimension: ${categoryNames[currentQ.category]}
          </span>
        </div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progressPct}%;"></div>
        </div>

        <h3 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); line-height: 1.4;">
          ${currentQ.question}
        </h3>

        <div class="options-group">
    `;

    currentQ.options.forEach((opt, idx) => {
      html += `
        <button class="quiz-option-btn" onclick="window.quizApp.selectOption('${currentQ.category}', ${opt.points})">
          <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
            <span style="width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; flex-shrink: 0; margin-top: 0.1rem;">
              ${String.fromCharCode(65 + idx)}
            </span>
            <span style="line-height: 1.5;">${opt.text}</span>
          </div>
        </button>
      `;
    });

    html += `
        </div>
      </div>
    `;

    quizContainer.innerHTML = html;
  }

  selectOption(category, points) {
    this.scores[category] = (this.scores[category] || 0) + points;
    this.currentQuestionIndex++;
    this.renderQuestion();
  }

  renderResults() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    const pillarMap = {
      comm: { name: "Communication & Expressiveness", color: "#3b82f6" },
      eq: { name: "Emotional Intelligence & EQ", color: "#ec4899" },
      leadership: { name: "Leadership & Influence", color: "#10b981" },
      cognitive: { name: "Cognitive & Problem Solving", color: "#8b5cf6" },
      resilience: { name: "Personal Resilience & Time", color: "#f59e0b" }
    };

    let totalScore = 0;
    let maxPossible = SOFT_SKILLS_DATA.diagnosticQuiz.length * 3; // 45 points max
    let highestCat = null;
    let lowestCat = null;
    let maxVal = -1;
    let minVal = 999;

    Object.keys(this.scores).forEach(key => {
      const val = this.scores[key];
      totalScore += val;
      if (val > maxVal) { maxVal = val; highestCat = key; }
      if (val < minVal) { minVal = val; lowestCat = key; }
    });

    const overallPct = Math.round((totalScore / maxPossible) * 100);

    let html = `
      <div class="quiz-box" style="animation: fadeIn 0.4s ease;">
        <div style="text-align: center; margin-bottom: 2rem;">
          <span class="badge" style="background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald);">Comprehensive Assessment Complete</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; margin-top: 0.5rem;">Your 15-Point Soft Skills Profile</h2>
          <p style="color: var(--text-muted); font-size: 1.05rem;">Overall Soft Skill Index: <strong style="color: var(--accent-cyan); font-size: 1.4rem;">${overallPct}%</strong> (${totalScore} / ${maxPossible} pts)</p>
        </div>

        <div class="score-radar-grid">
    `;

    Object.keys(this.scores).forEach(key => {
      const score = this.scores[key];
      const pct = Math.round((score / this.maxScorePerCategory) * 100);
      const info = pillarMap[key];

      html += `
        <div class="score-row">
          <div class="score-label">${info.name}</div>
          <div class="score-bar-bg">
            <div class="score-bar-fill" style="width: ${pct}%; background: ${info.color};"></div>
          </div>
          <div style="font-weight: 700; width: 45px; text-align: right; color: ${info.color};">${pct}%</div>
        </div>
      `;
    });

    html += `
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 2rem;">
          <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); padding: 1.25rem;">
            <h4 style="color: var(--accent-emerald); font-size: 1.1rem; margin-bottom: 0.4rem;">💪 Core Superpower</h4>
            <p style="color: var(--text-main); font-weight: 600; font-size: 0.95rem;">${pillarMap[highestCat]?.name || "Balanced"}</p>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.3rem;">You possess strong natural instincts in this dimension. Anchor team collaborations around this strength.</p>
          </div>

          <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-md); padding: 1.25rem;">
            <h4 style="color: var(--accent-amber); font-size: 1.1rem; margin-bottom: 0.4rem;">🚀 Priority Development Area</h4>
            <p style="color: var(--text-main); font-weight: 600; font-size: 0.95rem;">${pillarMap[lowestCat]?.name || "Balanced"}</p>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.3rem;">Focus your 30-day micro-habits and case study readings on this pillar for exponential growth.</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 2.5rem;">
          <button class="btn btn-primary" onclick="window.quizApp.reset()">
            🔄 Retake 15-Question Assessment
          </button>
        </div>
      </div>
    `;

    quizContainer.innerHTML = html;
  }

  reset() {
    this.currentQuestionIndex = 0;
    this.scores = { comm: 0, eq: 0, leadership: 0, cognitive: 0, resilience: 0 };
    this.renderQuestion();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.quizApp = new SoftSkillsQuiz();
});
