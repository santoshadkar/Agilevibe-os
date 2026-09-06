// SoftSkills Nexus - Overhauled & Bug-Free Roleplay Simulator Engine

class SoftSkillsSimulator {
  constructor() {
    this.currentScenarioIndex = 0;
    this.currentStepIndex = 0;
    this.history = [];
    this.init();
  }

  init() {
    this.renderScenarioSelector();
    this.renderActiveScenario();
  }

  renderScenarioSelector() {
    const selectorContainer = document.getElementById('scenario-selector-container');
    if (!selectorContainer) return;

    let html = '';
    SOFT_SKILLS_DATA.scenarios.forEach((sc, idx) => {
      const isActive = idx === this.currentScenarioIndex;
      html += `
        <button class="pathway-btn ${isActive ? 'active' : ''}" onclick="window.simulatorApp.selectScenario(${idx})">
          <span>${sc.icon}</span>
          <span>${sc.title}</span>
        </button>
      `;
    });
    selectorContainer.innerHTML = html;
  }

  selectScenario(index) {
    this.currentScenarioIndex = index;
    this.currentStepIndex = 0;
    this.history = [];
    this.renderScenarioSelector();
    this.renderActiveScenario();
  }

  renderActiveScenario() {
    const simulatorBox = document.getElementById('simulator-box');
    if (!simulatorBox) return;

    const scenario = SOFT_SKILLS_DATA.scenarios[this.currentScenarioIndex];
    if (!scenario) return;

    const step = scenario.steps[this.currentStepIndex];

    if (!step) {
      this.renderDebrief(scenario);
      return;
    }

    let html = `
      <div class="simulator-container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <span class="badge" style="background: rgba(245, 158, 11, 0.2); color: var(--accent-amber);">${scenario.stage}</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Step ${this.currentStepIndex + 1} of ${scenario.steps.length}</span>
        </div>

        <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.75rem; color: var(--text-main);">
          ${scenario.icon} ${scenario.title}
        </h3>

        <div class="scenario-setup-box" style="background: rgba(99, 102, 241, 0.08); border-left: 4px solid var(--primary); padding: 1.25rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 2rem;">
          <strong style="color: var(--primary); display: block; margin-bottom: 0.3rem;">📋 Scenario Context & Background:</strong>
          <p style="color: var(--text-main); font-size: 0.95rem; line-height: 1.5;">${scenario.setup}</p>
        </div>

        <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--text-main);">
          ${step.question}
        </h4>

        <div class="options-group" id="simulator-options-list">
    `;

    step.options.forEach((opt, idx) => {
      html += `
        <button class="quiz-option-btn" onclick="window.simulatorApp.chooseOption(${idx})">
          <div style="font-weight: 500; font-size: 0.95rem; text-align: left; line-height: 1.5;">${opt.label}</div>
        </button>
      `;
    });

    html += `
        </div>
        <div id="step-feedback-placeholder"></div>
      </div>
    `;

    simulatorBox.innerHTML = html;
  }

  chooseOption(optionIdx) {
    const scenario = SOFT_SKILLS_DATA.scenarios[this.currentScenarioIndex];
    const step = scenario.steps[this.currentStepIndex];
    const option = step.options[optionIdx];

    // Record choice
    this.history.push({ step: step.question, chosen: option });

    const feedbackContainer = document.getElementById('step-feedback-placeholder');
    const optionsList = document.getElementById('simulator-options-list');
    
    if (optionsList) {
      // Disable options after selection
      optionsList.style.pointerEvents = 'none';
      optionsList.style.opacity = '0.6';
    }

    if (feedbackContainer) {
      const bannerClass = option.isOptimal ? 'success' : 'warning';
      const icon = option.isOptimal ? '✅ Great Choice!' : '⚠️ Caution / Sub-Optimal Choice';

      const nextVal = option.nextStep !== undefined && option.nextStep !== null ? option.nextStep : 'null';

      feedbackContainer.innerHTML = `
        <div class="feedback-banner ${bannerClass}" style="margin-top: 1.5rem; padding: 1.25rem; border-radius: var(--radius-md);">
          <strong style="display: block; margin-bottom: 0.35rem; font-size: 1.05rem;">${icon}</strong>
          <p style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 1rem;">${option.feedback}</p>
          <div style="text-align: right;">
            <button class="btn btn-primary" onclick="window.simulatorApp.nextStep(${nextVal})">
              Continue Simulation ➔
            </button>
          </div>
        </div>
      `;
    }
  }

  nextStep(nextStepIdx) {
    if (nextStepIdx === null || nextStepIdx === undefined || typeof nextStepIdx !== 'number') {
      this.currentStepIndex = 999; // trigger debrief
    } else {
      this.currentStepIndex = nextStepIdx;
    }
    this.renderActiveScenario();
  }

  renderDebrief(scenario) {
    const simulatorBox = document.getElementById('simulator-box');
    if (!simulatorBox) return;

    let totalScore = 0;
    this.history.forEach(item => {
      if (item.chosen.isOptimal) totalScore += 50;
      else totalScore += 20;
    });

    let html = `
      <div class="simulator-container" style="text-align: center; animation: fadeIn 0.4s ease;">
        <span style="font-size: 3.5rem;">🎉</span>
        <h2 style="font-size: 2rem; font-weight: 800; margin: 0.5rem 0;">Simulation Complete</h2>
        <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 2rem;">
          Roleplay Score: <strong style="color: var(--accent-emerald); font-size: 1.4rem;">${totalScore} / 100 Points</strong>
        </p>

        <div style="text-align: left; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 2rem;">
          <h4 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 1rem;">📌 Decision Sequence Breakdown</h4>
    `;

    this.history.forEach((item, idx) => {
      html += `
        <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
          <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem; margin-bottom: 0.3rem;">
            Step ${idx + 1}: ${item.step}
          </div>
          <div style="color: ${item.chosen.isOptimal ? 'var(--accent-emerald)' : 'var(--accent-amber)'}; font-size: 0.9rem;">
            Selected: ${item.chosen.label}
          </div>
        </div>
      `;
    });

    html += `
        </div>

        <button class="btn btn-primary" onclick="window.simulatorApp.selectScenario(0)">
          🔄 Try Another Roleplay Scenario
        </button>
      </div>
    `;

    simulatorBox.innerHTML = html;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.simulatorApp = new SoftSkillsSimulator();
});
