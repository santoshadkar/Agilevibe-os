// SoftSkills Nexus - Interactive Case Studies Vault Engine

class SoftSkillsCaseStudies {
  constructor() {
    this.currentCaseIndex = 0;
    this.revealedAnswers = {};
    this.init();
  }

  init() {
    this.renderCaseSelector();
    this.renderActiveCase();
  }

  renderCaseSelector() {
    const container = document.getElementById('case-selector-container');
    if (!container) return;

    let html = '';
    SOFT_SKILLS_DATA.caseStudies.forEach((cs, idx) => {
      const isActive = idx === this.currentCaseIndex;
      html += `
        <button class="pathway-btn ${isActive ? 'active' : ''}" onclick="window.caseStudiesApp.selectCase(${idx})">
          <span>${cs.icon}</span>
          <span>${cs.title}</span>
        </button>
      `;
    });
    container.innerHTML = html;
  }

  selectCase(index) {
    this.currentCaseIndex = index;
    this.revealedAnswers = {};
    this.renderCaseSelector();
    this.renderActiveCase();
  }

  renderActiveCase() {
    const container = document.getElementById('case-display-box');
    if (!container) return;

    const cs = SOFT_SKILLS_DATA.caseStudies[this.currentCaseIndex];
    if (!cs) return;

    let html = `
      <div class="card" style="margin-bottom: 2rem; border-color: var(--border-accent);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <span class="badge" style="background: rgba(99, 102, 241, 0.2); color: var(--primary);">${cs.category}</span>
          <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald);">${cs.stage}</span>
        </div>

        <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.75rem;">
          ${cs.icon} ${cs.title}
        </h3>

        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.5rem;">
          ${cs.summary}
        </p>

        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem;">
          <h4 style="color: var(--accent-cyan); font-size: 1.1rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📋</span> Background & Organizational Dilemma
          </h4>
          <div style="color: var(--text-main); font-size: 0.95rem; line-height: 1.7; white-space: pre-line;">
            ${cs.background}
          </div>
        </div>

        <!-- Reflection Questions Accordion -->
        <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--text-main); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🤔</span> Guided Reflection & Case Questions
        </h4>

        <div class="reflection-questions-group">
    `;

    cs.reflectionQuestions.forEach((rq, qIdx) => {
      const isRevealed = this.revealedAnswers[qIdx];
      html += `
        <div style="background: rgba(18, 24, 38, 0.9); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1rem;">
          <h5 style="font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.75rem;">
            ${rq.q}
          </h5>
          
          <div style="margin-bottom: 0.75rem;">
            <button class="btn btn-secondary" style="padding: 0.4rem 0.9rem; font-size: 0.85rem;" 
              onclick="window.caseStudiesApp.toggleAnswer(${qIdx})">
              ${isRevealed ? '🙈 Hide Expert Solution' : '💡 Reveal Expert Model Answer'}
            </button>
          </div>

          ${isRevealed ? `
            <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid var(--accent-emerald); padding: 1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 0.92rem; color: #d1fae5; line-height: 1.6; white-space: pre-line; animation: fadeIn 0.3s ease;">
              <strong style="color: var(--accent-emerald); display: block; margin-bottom: 0.3rem;">Model Answer & Soft Skill Analysis:</strong>
              ${rq.modelAnswer}
            </div>
          ` : ''}
        </div>
      `;
    });

    html += `
        </div>

        <!-- Key Takeaways & Checklist -->
        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 1px solid var(--border-accent); border-radius: var(--radius-md); padding: 1.5rem; margin-top: 1.5rem;">
          <h4 style="color: var(--accent-purple); font-size: 1.1rem; margin-bottom: 0.75rem;">⚡ Core Execution Takeaways</h4>
          <ul style="padding-left: 1.2rem; color: var(--text-main); font-size: 0.95rem; line-height: 1.6;">
            ${cs.keyTakeaways.map(kt => `<li style="margin-bottom: 0.4rem;">${kt}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  toggleAnswer(qIdx) {
    this.revealedAnswers[qIdx] = !this.revealedAnswers[qIdx];
    this.renderActiveCase();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.caseStudiesApp = new SoftSkillsCaseStudies();
});
