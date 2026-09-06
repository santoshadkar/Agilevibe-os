/* ==========================================================================
   AI Leadership & Consulting Masterclass Portal - Single Clean App Core
   ========================================================================== */

// Global State
window.portalState = {
  currentTab: 'landing',
  userXP: 150,
  wizardStep: 1,
  activeCaseId: 'case-5',
  caseStageIndex: 0,
  lifecyclePhaseIndex: 0,
  caseScores: { roi: 0, risk: 0, alignment: 0 },
  activePersonaId: 'cfo-defense',
  activeScenarioIndex: 0,
  activeModalDoc: ''
};

window.updateDocumentTitle = function(tabName, extraDetail = '') {
  const tabTitles = {
    'landing': 'Home | AI Leadership & Consulting Masterclass',
    'curriculum': extraDetail ? `${extraDetail} | AI Leadership Masterclass` : 'Masterclass Curriculum | AI Leadership Masterclass',
    'lexicon': 'AI Leader Dictionary & Technical Lexicon (100+ Terms) | AI Leadership Masterclass',
    'calc': 'Enterprise AI TCO & Financial ROI Calculator | AI Leadership Masterclass',
    'cases': extraDetail ? `${extraDetail} | AI Leadership Masterclass` : 'Enterprise Scenarios & Lifecycle Simulator | AI Leadership Masterclass',
    'wizard': 'Enterprise AI Audit & Roadmap Wizard | AI Leadership Masterclass',
    'csuite': 'C-Suite Persona Veto Defense Matrix | AI Leadership Masterclass',
    'assistant': 'Live AI Executive Assistant & Copilot | AI Leadership Masterclass',
    'toolkit': 'Executive AI Consulting Deliverables & Toolkit | AI Leadership Masterclass'
  };

  document.title = tabTitles[tabName] || (extraDetail ? `${extraDetail} | AI Leadership Masterclass` : 'AI Leadership & Consulting Masterclass Portal');
};

// Global Case Switcher (Callable from anywhere)
window.switchCase = function(caseId) {
  window.portalState.activeCaseId = caseId;
  window.portalState.caseStageIndex = 0;

  if (window.updateDocumentTitle) {
    if (caseId === 'case-5') {
      window.updateDocumentTitle('cases', '10-Phase Enterprise AI Lifecycle Simulator');
    } else {
      window.updateDocumentTitle('cases', `Case Scenario: ${caseId.toUpperCase()}`);
    }
  }

  document.querySelectorAll('.case-sector-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-secondary');

    if (btn.getAttribute('data-case-id') === caseId || btn.id === `case-btn-${caseId.replace('case-', '')}`) {
      btn.classList.add('active');
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');
    }
  });

  const playbookContainer = document.getElementById('lifecycle-playbook-view');
  const sectorContainer = document.getElementById('case-study-container');

  if (caseId === 'case-5') {
    if (playbookContainer) playbookContainer.style.display = 'block';
    if (sectorContainer) sectorContainer.style.display = 'none';
    window.renderLifecyclePlaybook(window.portalState.lifecyclePhaseIndex || 0);
  } else {
    if (playbookContainer) playbookContainer.style.display = 'none';
    if (sectorContainer) sectorContainer.style.display = 'block';
    window.renderCaseStudy(caseId);
  }
};

window.renderLifecyclePlaybook = function(phaseIdx = 0) {
  const container = document.getElementById('lifecycle-playbook-view');
  if (!container || !window.AI_LIFECYCLE_PLAYBOOK) return;

  const playbook = window.AI_LIFECYCLE_PLAYBOOK;
  window.portalState.lifecyclePhaseIndex = phaseIdx;
  const activePhase = playbook[phaseIdx] || playbook[0];

  container.style.display = 'block';
  container.innerHTML = `
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <span class="reader-tag" style="background: rgba(0, 210, 255, 0.15); color: var(--accent-cyan);">END-TO-END ENTERPRISE LIFECYCLE SIMULATOR</span>
          <h2 style="color: #fff; font-size: 1.8rem; margin-top: 0.4rem;">${activePhase.phaseName}</h2>
        </div>
        <div style="color: var(--accent-amber); font-weight: 700; font-size: 0.95rem; background: rgba(245, 158, 11, 0.1); padding: 0.4rem 0.8rem; border-radius: 8px; border: 1px solid var(--accent-amber);">
          PHASE ${activePhase.phaseNumber} OF 10
        </div>
      </div>

      <!-- 10-Phase Interactive Stepper Header -->
      <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color);">
        ${playbook.map((p, idx) => `
          <button class="btn-secondary phase-step-btn ${idx === phaseIdx ? 'active' : ''}" data-pidx="${idx}" style="padding: 0.4rem 0.75rem; font-size: 0.78rem; white-space: nowrap; ${idx === phaseIdx ? 'background: var(--accent-cyan); color: #000; font-weight: 700; border-color: transparent;' : ''}">
            P${p.phaseNumber}: ${p.phaseNameShort || p.phaseName.split(':')[1] || p.phaseName}
          </button>
        `).join('')}
      </div>

      <!-- Phase Objective Banner -->
      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent-cyan); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
        <strong style="color: var(--accent-cyan); text-transform: uppercase; font-size: 0.8rem;">🎯 Phase Primary Goal & Objective:</strong>
        <p style="color: #fff; font-size: 1.05rem; margin-top: 0.3rem;">${activePhase.goal}</p>
      </div>

      <!-- Dual Perspectives: AI Leader vs AI Consultant -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
        <!-- AI Leader Perspective -->
        <div style="background: rgba(0, 210, 255, 0.04); border: 1px solid var(--accent-cyan); border-radius: var(--radius-md); padding: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
            <span style="font-size: 1.5rem;">👑</span>
            <h3 style="color: var(--accent-cyan); margin: 0; font-size: 1.15rem;">Internal AI Leader Role & Strategy</h3>
          </div>
          <div style="color: var(--text-primary); font-size: 0.95rem; line-height: 1.6;">${activePhase.aiLeaderRole}</div>
        </div>

        <!-- AI Consultant Perspective -->
        <div style="background: rgba(16, 185, 129, 0.04); border: 1px solid var(--accent-emerald); border-radius: var(--radius-md); padding: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
            <span style="font-size: 1.5rem;">💼</span>
            <h3 style="color: var(--accent-emerald); margin: 0; font-size: 1.15rem;">External AI Consultant Advisory Playbook</h3>
          </div>
          <div style="color: var(--text-primary); font-size: 0.95rem; line-height: 1.6;">${activePhase.aiConsultantRole}</div>
        </div>
      </div>

      <!-- Tools & Financial Strategy Row -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
        <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.5;">${activePhase.toolsDeliverables}</p>
        </div>

        <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.5;">${activePhase.financialStrategy}</p>
        </div>
      </div>

      <!-- Phase Navigation -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
        <button id="btn-prev-phase" class="btn-secondary" ${phaseIdx === 0 ? 'disabled style="opacity: 0.4;"' : ''}>← Previous Phase</button>
        <button id="btn-next-phase" class="btn-primary" ${phaseIdx === playbook.length - 1 ? 'disabled style="opacity: 0.4;"' : ''}>
          ${phaseIdx < playbook.length - 1 ? `Proceed to Phase ${phaseIdx + 2}: ${playbook[phaseIdx + 1].phaseName.split(':')[1] || ''} →` : 'Completed 10-Phase Transformation! 🏆'}
        </button>
      </div>
    </div>
  `;

  container.querySelectorAll('.phase-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pIdx = parseInt(btn.getAttribute('data-pidx'));
      window.renderLifecyclePlaybook(pIdx);
    });
  });

  const nextBtn = document.getElementById('btn-next-phase');
  if (nextBtn && phaseIdx < playbook.length - 1) {
    nextBtn.addEventListener('click', () => {
      window.renderLifecyclePlaybook(phaseIdx + 1);
    });
  }

  const prevBtn = document.getElementById('btn-prev-phase');
  if (prevBtn && phaseIdx > 0) {
    prevBtn.addEventListener('click', () => {
      window.renderLifecyclePlaybook(phaseIdx - 1);
    });
  }
};

window.renderCaseStudy = function(caseId) {
  const container = document.getElementById('case-study-container');
  if (!container) return;

  const caseData = (window.AI_CASE_STUDIES_DATA || []).find(c => c.id === caseId);

  if (!caseData) {
    container.innerHTML = `<div style="padding: 2rem; color: var(--accent-rose);">Error: Case study scenario (${caseId}) not found in dataset.</div>`;
    return;
  }

  if (window.portalState.activeCaseId !== caseId) {
    window.portalState.activeCaseId = caseId;
    window.portalState.caseStageIndex = 0;
  }

  if (!caseData.stages || window.portalState.caseStageIndex >= caseData.stages.length) {
    window.portalState.caseStageIndex = 0;
  }

  const stage = caseData.stages[window.portalState.caseStageIndex] || caseData.stages[0];

  container.innerHTML = `
    <div class="case-card">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <span class="case-badge">${caseData.industry} • PHASE ${stage.stageNumber} OF ${caseData.stages.length}</span>
        <span style="color: var(--accent-cyan); font-weight: 700; font-size: 0.85rem;">Target Timeline: ${caseData.timeline}</span>
      </div>
      
      <h2 style="font-size: 1.6rem; color: #fff; margin-bottom: 0.5rem;">${caseData.title}</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.25rem;"><strong>Client Profile:</strong> ${caseData.company} | <strong>Capital Budget:</strong> ${caseData.initialBudget}</p>
      
      <div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
        <strong style="color: var(--accent-cyan); text-transform: uppercase; font-size: 0.8rem;">Enterprise Operational Bottleneck:</strong>
        <p style="color: #fff; margin-top: 0.4rem; font-size: 0.95rem;">${caseData.challenge}</p>
      </div>

      <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid var(--border-highlight); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
        <h3 style="color: #fff; margin-bottom: 0.5rem;">📌 ${stage.title}</h3>
        <p style="font-size: 1.05rem; color: #fff;">${stage.prompt}</p>
      </div>

      <p style="font-weight: 700; color: #fff; margin-bottom: 1rem;">Select your Strategic Advisory Strategy:</p>
      <div class="case-options-list">
        ${stage.options.map(opt => `
          <div class="case-option-card" data-opt-id="${opt.id}">
            <strong style="color: #fff; font-size: 0.98rem;">${opt.label}</strong>
          </div>
        `).join('')}
      </div>

      <div id="case-feedback-area"></div>
    </div>
  `;

  container.querySelectorAll('.case-option-card').forEach(card => {
    card.addEventListener('click', () => {
      const optId = card.getAttribute('data-opt-id');
      const selectedOpt = stage.options.find(o => o.id === optId);
      if (selectedOpt) {
        window.evaluateCaseOption(selectedOpt, caseData);
      }
    });
  });
};

window.evaluateCaseOption = function(option, caseData) {
  const feedbackArea = document.getElementById('case-feedback-area');
  if (!feedbackArea) return;

  const imp = option.impact;
  window.portalState.caseScores.roi += imp.roi;
  window.portalState.caseScores.risk += imp.risk;
  window.portalState.caseScores.alignment += imp.alignment;

  const isLastStage = window.portalState.caseStageIndex >= caseData.stages.length - 1;

  feedbackArea.innerHTML = `
    <div class="feedback-box" style="background: ${imp.risk > 50 ? 'rgba(244, 63, 94, 0.15)' : 'rgba(16, 185, 129, 0.15)'}; border: 1px solid ${imp.risk > 50 ? 'var(--accent-rose)' : 'var(--accent-emerald)'}; color: #fff; margin-top: 1.5rem;">
      <div>${option.feedback}</div>
      <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-secondary); display: flex; gap: 1.5rem; flex-wrap: wrap;">
        <span>Financial ROI Score: <strong style="color: var(--accent-emerald);">${imp.roi > 0 ? '+' : ''}${imp.roi}</strong></span>
        <span>Risk Exposure: <strong style="color: ${imp.risk > 50 ? 'var(--accent-rose)' : 'var(--accent-cyan)'};">${imp.risk}%</strong></span>
        <span>C-Suite Alignment: <strong style="color: var(--accent-cyan);">${imp.alignment}%</strong></span>
      </div>

      ${!isLastStage ? `
        <button id="btn-next-case-stage" class="btn-primary" style="margin-top: 1.25rem;">Proceed to Phase ${window.portalState.caseStageIndex + 2} →</button>
      ` : `
        <div style="margin-top: 1.5rem; background: rgba(0, 210, 255, 0.1); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--accent-cyan);">
          <h4 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">🏆 Enterprise Engagement Completed!</h4>
          <p style="font-size: 0.95rem; margin: 0;">You have completed all advisory phases for ${caseData.title}. Select another sector scenario above to continue your consultant training!</p>
        </div>
      `}
    </div>
  `;

  const nextBtn = document.getElementById('btn-next-case-stage');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      window.portalState.caseStageIndex++;
      window.renderCaseStudy(caseData.id);
    });
  }
};

window.renderCSuiteDefense = function() {
  const container = document.getElementById('csuite-defense-container');
  if (!container || !window.AI_ASSESSMENTS_DATA) return;

  const personas = window.AI_ASSESSMENTS_DATA.csuiteDefense || [];
  const activePersona = personas.find(p => p.id === window.portalState.activePersonaId) || personas[0];
  const activeScenario = (activePersona && activePersona.scenarios) ? (activePersona.scenarios[window.portalState.activeScenarioIndex || 0] || activePersona.scenarios[0]) : null;

  if (!activePersona || !activeScenario) return;

  container.innerHTML = `
    <div style="background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
      <!-- Persona Tabs -->
      <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
        ${personas.map(p => `
          <button class="btn-secondary persona-tab-btn ${p.id === activePersona.id ? 'active' : ''}" data-pid="${p.id}" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; ${p.id === activePersona.id ? 'background: var(--accent-blue); border-color: transparent;' : ''}">
            ${p.avatar} ${p.role.split(' ')[0]}
          </button>
        `).join('')}
      </div>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
        <div style="font-size: 2.5rem;">${activePersona.avatar}</div>
        <div>
          <h3 style="color: #fff; margin: 0;">${activePersona.name} (${activePersona.role})</h3>
          <span style="color: var(--accent-amber); font-size: 0.85rem; font-weight: 700;">Priority Focus: ${activePersona.concern}</span>
        </div>
      </div>

      <div style="background: rgba(0, 210, 255, 0.05); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-highlight); margin-bottom: 1.25rem;">
        <strong style="color: var(--accent-cyan); font-size: 0.85rem;">🧠 Executive Mindset & Key Priorities:</strong>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.3rem;">${activePersona.mindset}</p>
      </div>

      <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid var(--accent-amber); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
        <strong style="color: var(--accent-amber); font-size: 0.8rem; text-transform: uppercase;">Real-World C-Suite Question:</strong>
        <p style="font-size: 1.05rem; color: #fff; font-style: italic; margin-top: 0.4rem;">${activeScenario.question}</p>
      </div>

      <p style="font-weight: 700; color: #fff; margin-bottom: 1rem;">Select your Executive Advisory Response:</p>
      ${activeScenario.responses.map((resp, rIdx) => `
        <div class="case-option-card" data-ridx="${rIdx}">
          <p style="color: #fff; margin: 0; font-size: 0.95rem;">${resp.text}</p>
        </div>
      `).join('')}

      <div id="csuite-feedback-area"></div>
    </div>
  `;

  container.querySelectorAll('.persona-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.portalState.activePersonaId = btn.getAttribute('data-pid');
      window.portalState.activeScenarioIndex = 0;
      window.renderCSuiteDefense();
    });
  });

  container.querySelectorAll('.case-option-card').forEach(card => {
    card.addEventListener('click', () => {
      const rIdx = parseInt(card.getAttribute('data-ridx'));
      const respData = activeScenario.responses[rIdx];

      const feedbackArea = document.getElementById('csuite-feedback-area');
      if (feedbackArea) {
        feedbackArea.innerHTML = `
          <div class="feedback-box" style="background: ${respData.score >= 80 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)'}; border: 1px solid ${respData.score >= 80 ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; color: #fff; margin-top: 1.5rem;">
            <div>${respData.feedback}</div>
            <div style="margin-top: 0.75rem; font-weight: 700; color: var(--accent-cyan); font-size: 1.05rem;">Defense Score: ${respData.score}/100</div>
          </div>
        `;
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // Global Event Listener for Case Sector Buttons (Delegation)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.case-sector-btn');
    if (btn) {
      const caseId = btn.getAttribute('data-case-id') || btn.id.replace('case-btn-', 'case-');
      window.switchCase(caseId);
    }
  });

  initNavTabs();
  renderCurriculumList();
  renderCurriculumReader('module-1');
  initLexiconSearch();
  initWizard();
  initHighScaleFinancialCalc();
  window.switchCase('case-5'); // Default Tab 5 view to 10-Phase Lifecycle Master Playbook
  renderQuizzes();
  window.renderCSuiteDefense();
  initAICopilot();
  initToolkitDownloads();

  function initNavTabs() {
    const navButtons = document.querySelectorAll('.nav-btn');

    const switchTab = (targetTab) => {
      navButtons.forEach(b => {
        b.classList.remove('active');
        if (b.getAttribute('data-tab') === targetTab) b.classList.add('active');
      });

      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      const activeContent = document.getElementById(`tab-${targetTab}`);
      if (activeContent) {
        activeContent.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.portalState.currentTab = targetTab;
      if (window.updateDocumentTitle) {
        window.updateDocumentTitle(targetTab);
      }
    };

    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        switchTab(targetTab);
      });
    });

    document.addEventListener('click', (e) => {
      const jumpBtn = e.target.closest('[data-jump-tab]');
      if (jumpBtn) {
        const targetTab = jumpBtn.getAttribute('data-jump-tab');
        switchTab(targetTab);
      }
    });
  }

  function renderCurriculumList() {
    const listContainer = document.getElementById('curriculum-module-list');
    if (!listContainer || !window.AI_CURRICULUM_DATA) return;

    listContainer.innerHTML = window.AI_CURRICULUM_DATA.map((mod, idx) => `
      <div class="module-card-item ${idx === 0 ? 'active' : ''}" data-mod-id="${mod.id}">
        <div class="module-meta">
          <span>MODULE ${mod.number}</span>
          <span>${mod.duration}</span>
        </div>
        <div class="module-item-title">${mod.title}</div>
      </div>
    `).join('');

    listContainer.querySelectorAll('.module-card-item').forEach(item => {
      item.addEventListener('click', () => {
        listContainer.querySelectorAll('.module-card-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const modId = item.getAttribute('data-mod-id');
        renderCurriculumReader(modId);
      });
    });
  }

  function renderCurriculumReader(modId, activeTopicIdx = -1) {
    const readerContainer = document.getElementById('curriculum-reader-view');
    if (!readerContainer || !window.AI_CURRICULUM_DATA) return;

    const moduleData = window.AI_CURRICULUM_DATA.find(m => m.id === modId);
    if (!moduleData) return;

    const topics = moduleData.topics || [];
    const isSingleTopicView = activeTopicIdx >= 0 && activeTopicIdx < topics.length;
    const activeTopic = isSingleTopicView ? topics[activeTopicIdx] : null;

    if (window.updateDocumentTitle) {
      if (isSingleTopicView && activeTopic) {
        window.updateDocumentTitle('curriculum', `Sub-Module ${moduleData.number}.${activeTopicIdx + 1}: ${activeTopic.title.replace(/^\d+\.\s*/, '')}`);
      } else {
        window.updateDocumentTitle('curriculum', `Module ${moduleData.number}: ${moduleData.title}`);
      }
    }

    readerContainer.innerHTML = `
      <div class="reader-header" style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span class="reader-tag">${moduleData.level} • MODULE ${moduleData.number}</span>
          <span style="color: var(--accent-amber); font-weight: 700; font-size: 0.85rem; background: rgba(245, 158, 11, 0.1); padding: 0.25rem 0.6rem; border-radius: 6px; border: 1px solid var(--accent-amber);">
            ⏱️ ${moduleData.duration}
          </span>
        </div>
        <h1 class="reader-title">${moduleData.title}</h1>
        <p class="reader-subtitle">${moduleData.subtitle}</p>
      </div>

      <!-- Sub-Module Navigation Tab Bar (Dedicated Page Switcher) -->
      <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-highlight); border-radius: var(--radius-md); padding: 0.75rem; margin-bottom: 2rem;">
        <div style="font-size: 0.78rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.5rem; padding-left: 0.25rem;">
          📌 SUB-MODULE NAVIGATION PAGES:
        </div>
        <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.25rem;">
          <button class="btn-secondary submodule-nav-btn ${!isSingleTopicView ? 'active' : ''}" data-modid="${moduleData.id}" data-tidx="-1" style="padding: 0.4rem 0.85rem; font-size: 0.82rem; white-space: nowrap; ${!isSingleTopicView ? 'background: var(--accent-cyan); color: #000; font-weight: 700; border-color: transparent;' : ''}">
            📖 Full Module View (${topics.length} Topics)
          </button>
          ${topics.map((t, tIdx) => `
            <button class="btn-secondary submodule-nav-btn ${isSingleTopicView && activeTopicIdx === tIdx ? 'active' : ''}" data-modid="${moduleData.id}" data-tidx="${tIdx}" style="padding: 0.4rem 0.85rem; font-size: 0.82rem; white-space: nowrap; ${isSingleTopicView && activeTopicIdx === tIdx ? 'background: var(--accent-cyan); color: #000; font-weight: 700; border-color: transparent;' : ''}">
              Sub-Module ${moduleData.number}.${tIdx + 1}: ${t.title.replace(/^\d+\.\s*/, '').substring(0, 24)}...
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Executive Summary Banner -->
      <div class="consultant-tip mb-4" style="margin-bottom: 2rem;">
        <strong>Executive Module Overview:</strong> ${moduleData.summary}
      </div>

      <!-- Render Single Topic Page OR Full Module View -->
      ${isSingleTopicView ? `
        <!-- DEDICATED SUB-MODULE PAGE VIEW -->
        <div class="topic-block" style="background: var(--bg-card); border: 1px solid var(--border-highlight); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem;">
            <span style="font-weight: 800; color: var(--accent-cyan); font-size: 0.85rem; text-transform: uppercase;">
              MODULE ${moduleData.number} • SUB-MODULE ${activeTopicIdx + 1} OF ${topics.length}
            </span>
            <span style="color: var(--text-secondary); font-size: 0.85rem;">Dedicated Sub-Page View</span>
          </div>

          <h2 class="topic-title" style="color: #fff; font-size: 1.6rem; margin-bottom: 1.25rem;">📌 ${activeTopic.title}</h2>
          <div class="topic-body">${activeTopic.content}</div>

          ${activeTopic.keyQuestions ? `
            <div class="consultant-questions" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-highlight); margin-top: 2rem;">
              <strong style="color: var(--accent-cyan); font-size: 0.95rem;">❓ Critical Advisory Questions for Enterprise Leaders:</strong>
              <ul style="margin-left: 1.25rem; margin-top: 0.75rem; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">
                ${activeTopic.keyQuestions.map(q => `<li style="margin-bottom: 0.4rem;">${q}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- Sub-Module Stepper Controls -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
            <button class="btn-secondary submodule-nav-btn" data-modid="${moduleData.id}" data-tidx="${activeTopicIdx - 1}" ${activeTopicIdx === 0 ? 'disabled style="opacity: 0.3;"' : ''}>
              ← Previous Sub-Module
            </button>
            <button class="btn-primary submodule-nav-btn" data-modid="${moduleData.id}" data-tidx="${activeTopicIdx + 1}" ${activeTopicIdx === topics.length - 1 ? 'disabled style="opacity: 0.3;"' : ''}>
              ${activeTopicIdx < topics.length - 1 ? `Proceed to Sub-Module ${activeTopicIdx + 2} →` : 'Completed All Sub-Modules! 🏆'}
            </button>
          </div>
        </div>
      ` : `
        <!-- FULL MODULE COMBINED VIEW -->
        ${topics.map((topic, tIdx) => `
          <div class="topic-block" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2rem;">
            <h2 class="topic-title" style="color: #fff; font-size: 1.5rem; margin-bottom: 1.25rem;">📌 ${topic.title}</h2>
            <div class="topic-body">${topic.content}</div>
            ${topic.keyQuestions ? `
              <div class="consultant-questions" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-highlight); margin-top: 1.5rem;">
                <strong style="color: var(--accent-cyan); font-size: 0.9rem;">❓ Critical Questions to Ask Enterprise Clients:</strong>
                <ul style="margin-left: 1.25rem; margin-top: 0.5rem; color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5;">
                  ${topic.keyQuestions.map(q => `<li>${q}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        `).join('')}
      `}

      <!-- Recommended Research Documents & PDF Guides -->
      ${moduleData.resources && moduleData.resources.length > 0 ? `
        <div style="background: rgba(99, 102, 241, 0.08); border: 1px solid var(--border-highlight); padding: 1.75rem; border-radius: var(--radius-lg); margin-top: 2rem;">
          <h3 style="color: var(--accent-cyan); margin-bottom: 0.75rem; font-size: 1.2rem;">📚 Recommended Deep-Dive Research Papers, Documentation & PDF Guides</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.25rem;">Explore official research papers, historical archives, and regulatory PDF standards for this module:</p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${moduleData.resources.map(res => `
              <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.3); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); flex-wrap: wrap; gap: 0.5rem;">
                <div>
                  <strong style="color: #fff; font-size: 0.95rem;">${res.name}</strong>
                  <span style="font-size: 0.75rem; color: var(--accent-amber); background: rgba(245, 158, 11, 0.15); padding: 0.15rem 0.5rem; border-radius: 6px; margin-left: 0.5rem;">${res.type}</span>
                </div>
                <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 0.4rem 0.9rem; font-size: 0.82rem; text-decoration: none;">🔗 Open Document / PDF →</a>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;

    // Attach event listeners to sub-module navigation buttons
    readerContainer.querySelectorAll('.submodule-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mId = btn.getAttribute('data-modid');
        const tIdx = parseInt(btn.getAttribute('data-tidx'));
        renderCurriculumReader(mId, tIdx);
        window.scrollTo({ top: 120, behavior: 'smooth' });
      });
    });
  }

  // --------------------------------------------------------------------------
  // Deep Multi-Field Technical Lexicon Renderer (Clean Defensive UI)
  // --------------------------------------------------------------------------
  function initLexiconSearch() {
    const searchInput = document.getElementById('lexicon-search-input');
    if (!searchInput) return;

    renderLexiconGrid(window.AI_LEXICON_DATA || []);

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = (window.AI_LEXICON_DATA || []).filter(item => 
        item.term.toLowerCase().includes(query) || 
        item.definition.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        (item.deepDive && item.deepDive.toLowerCase().includes(query)) ||
        (item.executiveImpact && item.executiveImpact.toLowerCase().includes(query)) ||
        (item.consultantPlaybook && item.consultantPlaybook.toLowerCase().includes(query))
      );
      renderLexiconGrid(filtered);
    });
  }

  function renderLexiconGrid(items) {
    const container = document.getElementById('lexicon-results-grid');
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `<div style="color: var(--text-secondary); padding: 2rem;">No matching terms found.</div>`;
      return;
    }

    container.innerHTML = items.map((item) => {
      const hasExtraDetails = item.deepDive || item.executiveImpact || item.consultantPlaybook;

      return `
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; background: rgba(0, 210, 255, 0.1); padding: 0.25rem 0.6rem; border-radius: 8px;">${item.category}</span>
          </div>
          <h3 style="color: #fff; font-size: 1.25rem; margin: 0.5rem 0; font-weight: 700;">${item.term}</h3>
          <p style="color: var(--text-primary); font-size: 0.95rem; line-height: 1.5; margin-bottom: ${hasExtraDetails ? '1.25rem' : '0'};">${item.definition}</p>

          ${hasExtraDetails ? `
            <div style="background: rgba(0,0,0,0.35); border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 1rem;">
              ${item.deepDive ? `
                <div>
                  <strong style="color: var(--accent-cyan); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">🔬 Deep Technical Mechanics & Calculus:</strong>
                  <p style="color: var(--text-secondary); font-size: 0.88rem; margin-top: 0.3rem; line-height: 1.5;">${item.deepDive}</p>
                </div>
              ` : ''}

              ${item.executiveImpact ? `
                <div>
                  <strong style="color: var(--accent-amber); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">💼 C-Suite Executive Impact:</strong>
                  <p style="color: var(--text-secondary); font-size: 0.88rem; margin-top: 0.3rem; line-height: 1.5;">${item.executiveImpact}</p>
                </div>
              ` : ''}

              ${item.consultantPlaybook ? `
                <div>
                  <strong style="color: var(--accent-emerald); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">🎯 Consultant Advisory Playbook:</strong>
                  <p style="color: var(--text-secondary); font-size: 0.88rem; margin-top: 0.3rem; line-height: 1.5;">${item.consultantPlaybook}</p>
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // Deep Enterprise Financial TCO Engine (with FDE & SRE Staffing)
  // --------------------------------------------------------------------------
  function initHighScaleFinancialCalc() {
    const usersInput = document.getElementById('tco-users');
    const queriesInput = document.getElementById('tco-queries');
    const contextInput = document.getElementById('tco-context');
    const cacheInput = document.getElementById('tco-cache');
    const modelSelect = document.getElementById('tco-model-select');
    const fdeInput = document.getElementById('tco-fde');
    const sreInput = document.getElementById('tco-sre');
    const fteInput = document.getElementById('tco-fte');

    if (!usersInput || !queriesInput || !modelSelect) return;

    const formatCurrency = (amount) => {
      return '$' + Math.round(amount).toLocaleString();
    };

    const formatShortTokens = (num) => {
      if (num >= 1000000000) return (num / 1000000000).toFixed(1) + ' Billion';
      if (num >= 1000000) return (num / 1000000).toFixed(1) + ' Million';
      if (num >= 1000) return (num / 1000).toFixed(0) + ' K';
      return num.toString();
    };

    const updateCalc = () => {
      const users = parseInt(usersInput.value);
      const queries = parseInt(queriesInput.value);
      const contextTokens = parseInt(contextInput?.value || 3500);
      const cacheRate = parseInt(cacheInput?.value || 35);
      const fdeCount = parseInt(fdeInput?.value || 1);
      const sreCount = parseInt(sreInput?.value || 1);
      const fteCount = parseInt(fteInput?.value || 2);

      // Display Labels
      document.getElementById('tco-users-val').textContent = users.toLocaleString();
      document.getElementById('tco-queries-val').textContent = queries.toString();
      if (document.getElementById('tco-context-val')) document.getElementById('tco-context-val').textContent = contextTokens.toLocaleString();
      if (document.getElementById('tco-cache-val')) document.getElementById('tco-cache-val').textContent = cacheRate + '%';
      if (document.getElementById('tco-fde-val')) document.getElementById('tco-fde-val').textContent = fdeCount + ' FDEs';
      if (document.getElementById('tco-sre-val')) document.getElementById('tco-sre-val').textContent = sreCount + ' SREs';
      if (document.getElementById('tco-fte-val')) document.getElementById('tco-fte-val').textContent = fteCount + ' FTEs';

      // Token Calculations
      const uncachedFraction = 1 - (cacheRate / 100);
      const totalDailyQueries = users * queries;
      const totalDailyTokens = totalDailyQueries * (contextTokens + 300); // 300 output tokens avg
      
      const uncachedQueries = totalDailyQueries * uncachedFraction;
      const dailyInputTokens = uncachedQueries * contextTokens;
      const dailyOutputTokens = uncachedQueries * 300;

      // Model Pricing Math
      const selectedOpt = modelSelect.options[modelSelect.selectedIndex];
      const isGpu = selectedOpt.getAttribute('data-type') === 'gpu';
      
      let annualComputeCost = 0;
      if (isGpu) {
        const hourlyRate = parseFloat(selectedOpt.getAttribute('data-cost') || 28.00);
        annualComputeCost = hourlyRate * 24 * 365;
      } else {
        const rateIn = parseFloat(selectedOpt.getAttribute('data-in') || 3.00);
        const rateOut = parseFloat(selectedOpt.getAttribute('data-out') || 15.00);

        const dailyCost = (dailyInputTokens / 1000000 * rateIn) + (dailyOutputTokens / 1000000 * rateOut);
        annualComputeCost = dailyCost * 365;
      }

      // Infrastructure & Staffing Math
      const annualVdbCost = (300 + (users * 0.05)) * 12; // Base $300/mo + scale factor
      
      // Specialized Human Staffing Line Items
      const annualFdeCost = fdeCount * 220000; // $220k/yr per Forward Deployed Engineer
      const annualSreCost = sreCount * 195000; // $195k/yr per AI Reliability Engineer
      const annualStaffCost = fteCount * 180000; // $180k/yr per MLOps Engineer

      // 3-Year Outflow Schedule
      const y1Compute = annualComputeCost;
      const y2Compute = annualComputeCost * 1.15; // 15% YoY growth
      const y3Compute = annualComputeCost * 1.30; // 30% YoY growth
      const totCompute = y1Compute + y2Compute + y3Compute;

      const y1Vdb = annualVdbCost;
      const y2Vdb = annualVdbCost * 1.10;
      const y3Vdb = annualVdbCost * 1.20;
      const totVdb = y1Vdb + y2Vdb + y3Vdb;

      // FDEs scale back post-Year 1 as integration matures
      const y1Fde = annualFdeCost;
      const y2Fde = annualFdeCost * 0.70; 
      const y3Fde = annualFdeCost * 0.50; 
      const totFde = y1Fde + y2Fde + y3Fde;

      const y1Sre = annualSreCost;
      const y2Sre = annualSreCost * 1.05;
      const y3Sre = annualSreCost * 1.10;
      const totSre = y1Sre + y2Sre + y3Sre;

      const y1Staff = annualStaffCost;
      const y2Staff = annualStaffCost * 1.05;
      const y3Staff = annualStaffCost * 1.10;
      const totStaff = y1Staff + y2Staff + y3Staff;

      const y1Tco = y1Compute + y1Vdb + y1Fde + y1Sre + y1Staff;
      const y2Tco = y2Compute + y2Vdb + y2Fde + y2Sre + y2Staff;
      const y3Tco = y3Compute + y3Vdb + y3Fde + y3Sre + y3Staff;
      const totTco = y1Tco + y2Tco + y3Tco;

      // Labor Savings & ROI Math
      const annualOpHoursSaved = (totalDailyQueries * 365 * 6) / 60; // 6 mins saved per query
      const annualLaborSavings = annualOpHoursSaved * 35; // $35/hr burdened rate
      const y1Savings = annualLaborSavings;
      const y2Savings = annualLaborSavings * 1.15;
      const y3Savings = annualLaborSavings * 1.30;
      const totSavings = y1Savings + y2Savings + y3Savings;

      const net3YrRoi = totTco > 0 ? Math.round(((totSavings - totTco) / totTco) * 100) : 0;

      // Update Header Cards
      document.getElementById('tco-daily-tokens').textContent = formatShortTokens(totalDailyTokens);
      document.getElementById('tco-annual-compute').textContent = formatCurrency(annualComputeCost);
      document.getElementById('tco-3yr-total').textContent = formatCurrency(totTco);
      document.getElementById('tco-3yr-roi').textContent = `${net3YrRoi > 0 ? '+' : ''}${net3YrRoi}%`;

      // Update Breakdown Table
      if (document.getElementById('tbl-y1-compute')) {
        document.getElementById('tbl-y1-compute').textContent = formatCurrency(y1Compute);
        document.getElementById('tbl-y2-compute').textContent = formatCurrency(y2Compute);
        document.getElementById('tbl-y3-compute').textContent = formatCurrency(y3Compute);
        document.getElementById('tbl-tot-compute').textContent = formatCurrency(totCompute);

        document.getElementById('tbl-y1-vdb').textContent = formatCurrency(y1Vdb);
        document.getElementById('tbl-y2-vdb').textContent = formatCurrency(y2Vdb);
        document.getElementById('tbl-y3-vdb').textContent = formatCurrency(y3Vdb);
        document.getElementById('tbl-tot-vdb').textContent = formatCurrency(totVdb);

        document.getElementById('tbl-y1-fde').textContent = formatCurrency(y1Fde);
        document.getElementById('tbl-y2-fde').textContent = formatCurrency(y2Fde);
        document.getElementById('tbl-y3-fde').textContent = formatCurrency(y3Fde);
        document.getElementById('tbl-tot-fde').textContent = formatCurrency(totFde);

        document.getElementById('tbl-y1-sre').textContent = formatCurrency(y1Sre);
        document.getElementById('tbl-y2-sre').textContent = formatCurrency(y2Sre);
        document.getElementById('tbl-y3-sre').textContent = formatCurrency(y3Sre);
        document.getElementById('tbl-tot-sre').textContent = formatCurrency(totSre);

        document.getElementById('tbl-y1-staff').textContent = formatCurrency(y1Staff);
        document.getElementById('tbl-y2-staff').textContent = formatCurrency(y2Staff);
        document.getElementById('tbl-y3-staff').textContent = formatCurrency(y3Staff);
        document.getElementById('tbl-tot-staff').textContent = formatCurrency(totStaff);

        document.getElementById('tbl-y1-tco').textContent = formatCurrency(y1Tco);
        document.getElementById('tbl-y2-tco').textContent = formatCurrency(y2Tco);
        document.getElementById('tbl-y3-tco').textContent = formatCurrency(y3Tco);
        document.getElementById('tbl-tot-tco').textContent = formatCurrency(totTco);

        document.getElementById('tbl-y1-savings').textContent = formatCurrency(y1Savings);
        document.getElementById('tbl-y2-savings').textContent = formatCurrency(y2Savings);
        document.getElementById('tbl-y3-savings').textContent = formatCurrency(y3Savings);
        document.getElementById('tbl-tot-savings').textContent = formatCurrency(totSavings);
      }
    };

    [usersInput, queriesInput, contextInput, cacheInput, fdeInput, sreInput, fteInput].forEach(elem => {
      if (elem) elem.addEventListener('input', updateCalc);
    });
    if (modelSelect) modelSelect.addEventListener('change', updateCalc);

    updateCalc();
  }

  // --------------------------------------------------------------------------
  // Deep Enterprise Implementation Wizard & Deliverable Engine
  // --------------------------------------------------------------------------
  function initWizard() {
    const stepButtons = document.querySelectorAll('.wizard-step-btn');
    stepButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const stepNum = parseInt(btn.getAttribute('data-step'));
        setWizardStep(stepNum);
      });
    });

    const nextBtn = document.getElementById('wizard-next-btn');
    const prevBtn = document.getElementById('wizard-prev-btn');
    const generateBtn = document.getElementById('wizard-generate-btn');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (window.portalState.wizardStep < 7) {
          setWizardStep(window.portalState.wizardStep + 1);
        }
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (window.portalState.wizardStep > 1) {
          setWizardStep(window.portalState.wizardStep - 1);
        }
      });
    }
    if (generateBtn) {
      generateBtn.addEventListener('click', () => {
        generateWizardReport();
      });
    }

    // Dynamic Live Label Updates
    document.getElementById('wiz-data-mat')?.addEventListener('input', (e) => {
      document.getElementById('wiz-data-val').textContent = e.target.value + '/5';
    });
    document.getElementById('wiz-cloud-mat')?.addEventListener('input', (e) => {
      document.getElementById('wiz-cloud-val').textContent = e.target.value + '/5';
    });
    document.getElementById('wiz-gov-mat')?.addEventListener('input', (e) => {
      document.getElementById('wiz-gov-val').textContent = e.target.value + '/5';
    });
  }

  function setWizardStep(stepNum) {
    window.portalState.wizardStep = stepNum;

    // Hide Report Container when editing steps
    const reportOutput = document.getElementById('wizard-report-output');
    if (reportOutput) reportOutput.style.display = 'none';

    // Show Step Stepper & Nav Container
    document.querySelector('.wizard-stepper').style.display = 'flex';
    document.getElementById('wizard-nav-container').style.display = 'flex';

    document.querySelectorAll('.wizard-step-btn').forEach(btn => {
      const bStep = parseInt(btn.getAttribute('data-step'));
      btn.classList.remove('active');
      if (bStep === stepNum) btn.classList.add('active');
      if (bStep < stepNum) btn.classList.add('completed');
    });

    document.querySelectorAll('.wizard-panel-step').forEach(panel => {
      panel.style.display = 'none';
    });
    const activePanel = document.getElementById(`wizard-step-${stepNum}`);
    if (activePanel) activePanel.style.display = 'block';

    const nextBtn = document.getElementById('wizard-next-btn');
    if (nextBtn) {
      if (stepNum === 7) {
        document.getElementById('wizard-nav-container').style.display = 'none'; // Hide generic nav on step 7
      } else {
        nextBtn.textContent = 'Next Step →';
      }
    }
  }

  function generateWizardReport() {
    const orgName = document.getElementById('wiz-org-name')?.value || 'Apex Global Financial';
    const industry = document.getElementById('wiz-industry')?.value || 'FinTech & Financial Services';
    const goal = document.getElementById('wiz-goal')?.value || 'Operational Cost Deflection';
    const budget = document.getElementById('wiz-budget')?.value || '$500,000 (Mid-Scale Enterprise Rollout)';
    
    const dataMat = parseInt(document.getElementById('wiz-data-mat')?.value || 3);
    const cloudMat = parseInt(document.getElementById('wiz-cloud-mat')?.value || 4);
    const govMat = parseInt(document.getElementById('wiz-gov-mat')?.value || 2);

    const llmTier = document.getElementById('wiz-llm-tier')?.value || 'Azure OpenAI Enterprise (Zero Data Retention)';
    const vectorDb = document.getElementById('wiz-vector-db')?.value || 'Qdrant Enterprise (HNSW Hybrid Search)';
    const agentFramework = document.getElementById('wiz-agent-framework')?.value || 'LangGraph State Machine Workflows';
    const euTier = document.getElementById('wiz-eu-tier')?.value || 'Minimal Risk Tier';

    const overallScore = Math.round(((dataMat + cloudMat + govMat) / 15) * 100);

    // Hide steps 1-7 and stepper to show pure, clean executive report
    document.querySelectorAll('.wizard-panel-step').forEach(p => p.style.display = 'none');
    document.querySelector('.wizard-stepper').style.display = 'none';
    document.getElementById('wizard-nav-container').style.display = 'none';

    const reportContainer = document.getElementById('wizard-report-output');
    if (reportContainer) {
      reportContainer.style.display = 'block';
      
      const docMarkdown = `# STRATEGIC AI IMPLEMENTATION CHARTER & MASTER ROADMAP

**Client Organization:** ${orgName}
**Industry Sector:** ${industry}
**Primary Transformation Objective:** ${goal}
**Allocated Capital Budget:** ${budget}
**Enterprise AI Readiness Score:** ${overallScore}/100

---

## 1. Executive Summary & Readiness Audit Scorecard
- **Data Infrastructure Maturity:** ${dataMat}/5 (${dataMat < 3 ? 'Requires Decoupled RAG ETL' : 'Lakehouse Ready'})
- **Cloud & MLOps Infrastructure:** ${cloudMat}/5 (${cloudMat >= 4 ? 'Kubernetes Native' : 'Requires Cloud Gateway Setup'})
- **Security & Governance Rating:** ${govMat}/5 (${govMat < 3 ? 'High Audit Priority - ISO 42001 Action Needed' : 'Compliant'})

---

## 2. Target AI Architecture Blueprint & Technology Stack
- **Foundation LLM Tier:** ${llmTier}
- **Vector Database Engine:** ${vectorDb}
- **Agent Orchestration Framework:** ${agentFramework}
- **Security & Privacy Boundary:** Contractual Zero Data Retention (ZDR) + Local Presidio PII Anonymization

---

## 3. 180-Day 3-Phase Implementation Master Timeline
- **Phase 1 (Days 1 - 30): Foundation & Governance**
  - Establish Hub-and-Spoke AI Center of Excellence (CoE) charter.
  - Deploy Private Cloud API Endpoint with contractual Zero Data Retention.
  - Embed Forward Deployed Engineers (FDE) to map legacy database connectors.

- **Phase 2 (Days 31 - 90): High-Impact RAG Knowledge Pilot**
  - Deploy Knowledge Search RAG over internal document repositories (Temp = 0.0, Citation Enforced).
  - Provision LiteLLM API Gateway with Redis Semantic Caching (target 35% token cost reduction).

- **Phase 3 (Days 91 - 180): Agentic Automation & Scale**
  - Launch LangGraph agentic tool execution for automated ERP/CRM workflows with Human-in-the-Loop gates.
  - Onboard Site Reliability Engineers (SRE) to enforce 99.99% uptime and <500ms latency SLAs.

---

## 4. Regulatory Compliance & Risk Charter
- **EU AI Act Classification:** ${euTier}
- **Governance Framework:** NIST AI Risk Management Framework (NIST AI RMF 1.0)
- **IP Protection:** Vendor Commercial IP Indemnification Clause Enforced
`;

      reportContainer.innerHTML = `
        <div class="hero-banner" style="background: rgba(16, 185, 129, 0.08); border-color: var(--accent-emerald); padding: 2.5rem; text-align: left;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <span class="reader-tag" style="background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald);">PRODUCTION ADVISORY DELIVERABLE</span>
              <h1 style="color: #fff; font-size: 2rem; margin-top: 0.5rem;">Strategic AI Audit & Master Roadmap Charter</h1>
              <p style="color: var(--text-secondary); margin: 0;">Prepared for: <strong>${orgName}</strong> (${industry})</p>
            </div>
            <div class="xp-badge" style="background: rgba(0, 210, 255, 0.15); border: 1px solid var(--accent-cyan);">
              <span style="color: var(--accent-cyan); font-weight: 800; font-size: 1.1rem;">Readiness Score: ${overallScore}/100</span>
            </div>
          </div>

          <div class="hero-stats" style="margin-bottom: 2rem;">
            <div class="stat-card">
              <div class="stat-number">${dataMat}/5</div>
              <div class="stat-label">Data Infrastructure</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">${cloudMat}/5</div>
              <div class="stat-label">Cloud & MLOps</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">${govMat}/5</div>
              <div class="stat-label">Security & Risk Governance</div>
            </div>
          </div>

          <div style="background: rgba(0,0,0,0.4); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 2rem;">
            <h3 style="color: var(--accent-cyan); margin-bottom: 1rem;">🏛️ Recommended Enterprise Stack & Governance</h3>
            <ul style="color: var(--text-primary); line-height: 1.8; margin-left: 1.25rem;">
              <li><strong>Foundation Model Tier:</strong> ${llmTier}</li>
              <li><strong>Vector Database:</strong> ${vectorDb}</li>
              <li><strong>Agent Framework:</strong> ${agentFramework}</li>
              <li><strong>Regulatory Category:</strong> ${euTier}</li>
              <li><strong>Transformation Goal:</strong> ${goal} (${budget})</li>
            </ul>
          </div>

          <div style="background: rgba(0,0,0,0.4); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 2rem;">
            <h3 style="color: var(--accent-emerald); margin-bottom: 1rem;">📅 180-Day 3-Phase Implementation Master Plan</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
              <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-cyan);">
                <strong style="color: var(--accent-cyan);">Phase 1 (Days 1-30): Foundation</strong>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.3rem;">Hub-and-Spoke CoE setup, Private Endpoint deployment, FDE data mapping.</p>
              </div>
              <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-amber);">
                <strong style="color: var(--accent-amber);">Phase 2 (Days 31-90): RAG Pilot</strong>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.3rem;">Knowledge Search RAG deployment, LiteLLM gateway, Redis semantic caching.</p>
              </div>
              <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-emerald);">
                <strong style="color: var(--accent-emerald);">Phase 3 (Days 91-180): Agentic Scale</strong>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.3rem;">LangGraph tool execution, SRE latency SLAs (&lt;500ms), Human-in-the-loop gates.</p>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button id="btn-dl-wizard-md" class="btn-primary">⬇️ Download Executive Charter (.md)</button>
            <button onclick="window.print()" class="btn-secondary">🖨️ Print Roadmap Deliverable (PDF)</button>
            <button id="btn-restart-wizard" class="btn-secondary">🔄 Restart Audit & Wizard</button>
          </div>
        </div>
      `;

      // Event Listeners for Report Actions
      document.getElementById('btn-dl-wizard-md')?.addEventListener('click', () => {
        const blob = new Blob([docMarkdown], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${orgName.replace(/\s+/g, '_')}_Strategic_AI_Master_Roadmap.md`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });

      document.getElementById('btn-restart-wizard')?.addEventListener('click', () => {
        setWizardStep(1);
      });

      reportContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function renderQuizzes() {
    const container = document.getElementById('assessment-quiz-container');
    if (!container || !window.AI_ASSESSMENTS_DATA) return;

    const quiz = window.AI_ASSESSMENTS_DATA.quizzes[0];
    container.innerHTML = `
      <div style="background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <h2 style="color: #fff; margin-bottom: 0.5rem;">${quiz.title}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${quiz.subtitle}</p>

        ${quiz.questions.map((q, qIdx) => `
          <div style="margin-bottom: 2rem;">
            <p style="font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.75rem;">Q${qIdx + 1}. ${q.question}</p>
            ${q.options.map((opt, oIdx) => `
              <div class="quiz-option" data-qidx="${qIdx}" data-oidx="${oIdx}">${opt}</div>
            `).join('')}
            <div id="quiz-explain-${qIdx}" style="display:none; margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary); padding: 0.75rem; background: rgba(255,255,255,0.03); border-radius: var(--radius-sm);"></div>
          </div>
        `).join('')}
      </div>
    `;

    container.querySelectorAll('.quiz-option').forEach(optionEl => {
      optionEl.addEventListener('click', () => {
        const qIdx = parseInt(optionEl.getAttribute('data-qidx'));
        const oIdx = parseInt(optionEl.getAttribute('data-oidx'));
        const questionData = quiz.questions[qIdx];

        const siblingOptions = container.querySelectorAll(`.quiz-option[data-qidx="${qIdx}"]`);
        siblingOptions.forEach(opt => opt.style.pointerEvents = 'none');

        const explainDiv = document.getElementById(`quiz-explain-${qIdx}`);
        if (oIdx === questionData.correctIndex) {
          optionEl.classList.add('correct');
          window.portalState.userXP += 50;
          document.getElementById('user-xp-display').textContent = `${window.portalState.userXP} XP`;
          if (explainDiv) {
            explainDiv.style.display = 'block';
            explainDiv.innerHTML = `<strong style="color: var(--accent-emerald);">Correct! (+50 XP)</strong> ${questionData.explanation}`;
          }
        } else {
          optionEl.classList.add('incorrect');
          siblingOptions[questionData.correctIndex].classList.add('correct');
          if (explainDiv) {
            explainDiv.style.display = 'block';
            explainDiv.innerHTML = `<strong style="color: var(--accent-rose);">Incorrect.</strong> ${questionData.explanation}`;
          }
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // Smart Multi-Word Scoring Live AI Copilot Engine
  // --------------------------------------------------------------------------
  function initAICopilot() {
    const input = document.getElementById('assistant-user-input');
    const sendBtn = document.getElementById('assistant-send-btn');
    const responseArea = document.getElementById('assistant-response-area');
    const chipBtns = document.querySelectorAll('.chip-btn');

    if (!input || !sendBtn || !responseArea) return;

    const handleQuery = (queryText) => {
      const q = queryText.toLowerCase().trim();
      if (!q) return;

      const kb = window.AI_ASSISTANT_KB || [];
      const queryWords = q.split(/\s+/).filter(w => w.length > 2);

      // Score each KB item based on keyword matches & topic/body word matches
      let bestItem = null;
      let maxScore = 0;

      kb.forEach(item => {
        let score = 0;
        
        // Exact keyword array hits (high weight)
        item.keywords.forEach(kw => {
          if (q.includes(kw.toLowerCase())) {
            score += 10 + kw.length; // longer matching keywords score higher
          }
        });

        // Individual word hits in topic title (medium weight)
        queryWords.forEach(word => {
          if (item.topic.toLowerCase().includes(word)) score += 3;
          if (item.response.toLowerCase().includes(word)) score += 1;
        });

        if (score > maxScore) {
          maxScore = score;
          bestItem = item;
        }
      });

      if (bestItem && maxScore >= 4) {
        responseArea.innerHTML = bestItem.response;
      } else {
        // Dynamic Executive Response Generator if no direct match score
        responseArea.innerHTML = `
          <div style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-highlight);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span style="font-size: 1.5rem;">🧠</span>
              <h4 style="color: var(--accent-cyan); margin: 0; font-size: 1.2rem;">Executive Advisory Analysis: "${queryText}"</h4>
            </div>
            <p style="color: var(--text-primary); font-size: 0.95rem; line-height: 1.6;">
              As an AI Leader and Executive Consultant, here is how you frame this scenario for senior leadership:
            </p>
            <ul class="curriculum-list" style="margin-top: 0.75rem; line-height: 1.7;">
              <li><strong>1. Connect Business Value to Financial ROI:</strong> Translate technical decisions into 3-Year TCO, labor hours saved, and cost deflection metrics.</li>
              <li><strong>2. Establish Privacy & Governance Boundaries First:</strong> Guarantee contractual Zero Data Retention (ZDR) cloud SLAs and local PII anonymization before discussing model capabilities.</li>
              <li><strong>3. Deploy 90-Day Gated Milestones:</strong> Structure implementation into 30-day foundation, 60-day RAG pilot, and 90-day Stop/Go KPI evaluation gates.</li>
              <li><strong>4. Mitigate C-Suite Persona Risk:</strong> Address CFO budget caps, CISO zero-retention mandates, CTO legacy API integrations, and Legal IP indemnifications.</li>
            </ul>
            <div style="margin-top: 1.25rem; font-size: 0.85rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: var(--radius-sm);">
              💡 <em>Try asking about specific executive topics: "Explain RAG to CFO", "LoRA vs QLoRA", "EU AI Act High Risk", "Pitching to CTO", "Token Cost TCO", "CISO Security", "Vector DB Qdrant vs Pinecone", or "FDE and SRE staffing".</em>
            </div>
          </div>
        `;
      }
    };

    sendBtn.addEventListener('click', () => {
      handleQuery(input.value);
    });

    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleQuery(input.value);
    });

    chipBtns.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        input.value = query;
        handleQuery(query);
      });
    });
  }

  function initToolkitDownloads() {
    const dlDeckBtn = document.getElementById('btn-dl-deck');
    const previewDeckBtn = document.getElementById('btn-preview-deck');

    const dlPolicyBtn = document.getElementById('btn-dl-policy');
    const previewPolicyBtn = document.getElementById('btn-preview-policy');

    const modal = document.getElementById('deliverable-modal');
    const closeModalBtn = document.getElementById('btn-close-modal');
    const modalBody = document.getElementById('modal-document-body');
    const modalPrintBtn = document.getElementById('btn-modal-print');
    const modalDlBtn = document.getElementById('btn-modal-dl');

    const triggerDownload = (filename, content) => {
      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    const openModal = (title, content, filename) => {
      window.portalState.activeModalDoc = content;
      if (modalBody) modalBody.textContent = content;
      if (modal) modal.style.display = 'block';

      if (modalDlBtn) {
        modalDlBtn.onclick = () => triggerDownload(filename, content);
      }
    };

    if (dlDeckBtn) {
      dlDeckBtn.addEventListener('click', () => {
        triggerDownload('Enterprise_AI_Discovery_Deck_Outline.md', window.AI_TOOLKIT_DATA?.deckTemplate || '');
      });
    }

    if (previewDeckBtn) {
      previewDeckBtn.addEventListener('click', () => {
        openModal('Discovery Deck Template', window.AI_TOOLKIT_DATA?.deckTemplate || '', 'Enterprise_AI_Discovery_Deck_Outline.md');
      });
    }

    if (dlPolicyBtn) {
      dlPolicyBtn.addEventListener('click', () => {
        triggerDownload('Corporate_AI_Risk_Ethics_Policy.md', window.AI_TOOLKIT_DATA?.policyCharter || '');
      });
    }

    if (previewPolicyBtn) {
      previewPolicyBtn.addEventListener('click', () => {
        openModal('Corporate AI Risk Policy', window.AI_TOOLKIT_DATA?.policyCharter || '', 'Corporate_AI_Risk_Ethics_Policy.md');
      });
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        if (modal) modal.style.display = 'none';
      });
    }

    if (modalPrintBtn) {
      modalPrintBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }
});
