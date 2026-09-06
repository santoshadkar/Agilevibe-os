// SoftSkills Nexus - Expanded Interactive Role Plays Engine

class SoftSkillsRoleplayHub {
  constructor() {
    this.currentRoleplayIndex = 0;
    this.currentStepId = 0;
    this.history = [];
    this.totalScore = 0;
    this.init();
  }

  init() {
    this.renderRoleplaySelector();
    this.renderActiveRoleplay();
  }

  renderRoleplaySelector() {
    const container = document.getElementById('roleplay-selector-container');
    if (!container) return;

    let html = '';
    SOFT_SKILLS_DATA.roleplays.forEach((rp, idx) => {
      const isActive = idx === this.currentRoleplayIndex;
      html += `
        <button class="pathway-btn ${isActive ? 'active' : ''}" onclick="window.roleplayHubApp.selectRoleplay(${idx})">
          <span>${rp.avatar}</span>
          <span>${rp.title}</span>
        </button>
      `;
    });
    container.innerHTML = html;
  }

  selectRoleplay(index) {
    this.currentRoleplayIndex = index;
    this.currentStepId = 0;
    this.history = [];
    this.totalScore = 0;
    this.renderRoleplaySelector();
    this.renderActiveRoleplay();
  }

  renderActiveRoleplay() {
    const container = document.getElementById('roleplay-display-box');
    if (!container) return;

    const rp = SOFT_SKILLS_DATA.roleplays[this.currentRoleplayIndex];
    if (!rp) return;

    const currentBranch = rp.branches.find(b => b.stepId === this.currentStepId);

    if (!currentBranch) {
      this.renderDebrief(rp);
      return;
    }

    let html = `
      <div class="card" style="border-color: var(--border-accent); margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <span class="badge" style="background: rgba(99,102,241,0.2); color: var(--primary);">${rp.category}</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Interactive Dialogue Step ${this.currentStepId + 1}</span>
        </div>

        <h3 style="font-size: 1.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.75rem;">
          ${rp.avatar} ${rp.title}
        </h3>

        <!-- Context & Partner Role Card -->
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--accent-purple); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">${rp.avatar}</div>
            <div>
              <strong style="color: var(--text-main); font-size: 1rem;">Roleplay Partner: ${rp.partnerName}</strong>
              <div style="font-size: 0.82rem; color: var(--text-muted);">${rp.context}</div>
            </div>
          </div>
        </div>

        <!-- Dialogue History Bubble Thread -->
        <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
          <div style="background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: var(--radius-md); color: #ddd6fe; font-size: 0.95rem; line-height: 1.5;">
            <strong>${rp.partnerName}:</strong> "${rp.initialMessage}"
          </div>

          ${this.history.map(item => `
            <div style="background: rgba(6,182,212,0.15); border: 1px solid rgba(6,182,212,0.3); padding: 1rem; border-radius: var(--radius-md); color: #cffafe; font-size: 0.95rem; align-self: flex-end; width: 90%;">
              <strong>You:</strong> "${item.chosen.text}"
            </div>
            ${item.chosen.partnerReply ? `
              <div style="background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3); padding: 1rem; border-radius: var(--radius-md); color: #ddd6fe; font-size: 0.95rem;">
                <strong>${rp.partnerName}:</strong> "${item.chosen.partnerReply}"
              </div>
            ` : ''}
          `).join('')}
        </div>

        <!-- Prompt & Choices -->
        <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 1rem;">
          ${currentBranch.prompt}
        </h4>

        <div class="options-group" id="roleplay-choices-group">
    `;

    currentBranch.choices.forEach((choice, cIdx) => {
      html += `
        <button class="quiz-option-btn" onclick="window.roleplayHubApp.chooseBranch(${cIdx})">
          <div style="font-weight: 500; font-size: 0.95rem; text-align: left; line-height: 1.5;">${choice.text}</div>
        </button>
      `;
    });

    html += `
        </div>
        <div id="roleplay-feedback-placeholder"></div>
      </div>
    `;

    container.innerHTML = html;
  }

  chooseBranch(choiceIdx) {
    const rp = SOFT_SKILLS_DATA.roleplays[this.currentRoleplayIndex];
    const currentBranch = rp.branches.find(b => b.stepId === this.currentStepId);
    const choice = currentBranch.choices[choiceIdx];

    if (choice.isOptimal) this.totalScore += 50;
    else this.totalScore += 20;

    this.history.push({ prompt: currentBranch.prompt, chosen: choice });

    const choicesGroup = document.getElementById('roleplay-choices-group');
    if (choicesGroup) {
      choicesGroup.style.pointerEvents = 'none';
      choicesGroup.style.opacity = '0.6';
    }

    const feedbackPlaceholder = document.getElementById('roleplay-feedback-placeholder');
    if (feedbackPlaceholder) {
      const bannerClass = choice.isOptimal ? 'success' : 'warning';
      const icon = choice.isOptimal ? '✅ Optimal Behavioral Choice!' : '⚠️ Sub-Optimal Response';

      const nextVal = choice.nextStepId !== undefined && choice.nextStepId !== null ? choice.nextStepId : 'null';

      feedbackPlaceholder.innerHTML = `
        <div class="feedback-banner ${bannerClass}" style="margin-top: 1.5rem; padding: 1.25rem; border-radius: var(--radius-md);">
          <strong style="display: block; margin-bottom: 0.35rem; font-size: 1.05rem;">${icon}</strong>
          <p style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 1rem;">${choice.feedback}</p>
          <div style="text-align: right;">
            <button class="btn btn-primary" onclick="window.roleplayHubApp.nextBranch(${nextVal})">
              Continue Dialogue ➔
            </button>
          </div>
        </div>
      `;
    }
  }

  nextBranch(nextStepId) {
    if (nextStepId === null || nextStepId === undefined || typeof nextStepId !== 'number') {
      this.currentStepId = 999;
    } else {
      this.currentStepId = nextStepId;
    }
    this.renderActiveRoleplay();
  }

  renderDebrief(rp) {
    const container = document.getElementById('roleplay-display-box');
    if (!container) return;

    let html = `
      <div class="card" style="text-align: center; border-color: var(--border-accent); animation: fadeIn 0.4s ease;">
        <span style="font-size: 3.5rem;">🎉</span>
        <h2 style="font-size: 2rem; font-weight: 800; color: var(--text-main); margin: 0.5rem 0;">Roleplay Mastered</h2>
        <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 2rem;">
          Interpersonal Effectiveness Score: <strong style="color: var(--accent-emerald); font-size: 1.4rem;">${this.totalScore} / 100 Points</strong>
        </p>

        <div style="text-align: left; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 2rem;">
          <h4 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 1rem;">📌 Dialogue Performance Log</h4>
    `;

    this.history.forEach((item, idx) => {
      html += `
        <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
          <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem; margin-bottom: 0.3rem;">
            Step ${idx + 1}: ${item.prompt}
          </div>
          <div style="color: ${item.chosen.isOptimal ? 'var(--accent-emerald)' : 'var(--accent-amber)'}; font-size: 0.9rem;">
            Your Selection: ${item.chosen.text}
          </div>
        </div>
      `;
    });

    html += `
        </div>

        <button class="btn btn-primary" onclick="window.roleplayHubApp.selectRoleplay(0)">
          🔄 Try Another Interactive Roleplay
        </button>
      </div>
    `;

    container.innerHTML = html;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.roleplayHubApp = new SoftSkillsRoleplayHub();
});
