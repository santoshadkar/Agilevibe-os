import { ROLES_ELEVATION_DATA, INDUSTRIES_DATA, BASELINE_15_QUESTIONS } from './data.js';

// State Management
let currentTab = 'roles';
let selectedIndustryId = 'tech';
let selectedRoleId = 'project_manager';
let quizAnswers = {};
let currentQuizIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  setupTabNavigation();
  renderTab1Roles();
  renderTab2Pathways();
  renderTab3Roadmaps();
  renderTab4BaselineQuiz();
  setupSecurityModal();
});

// ==========================================
// Navigation & Tab Switcher
// ==========================================
function setupTabNavigation() {
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = e.currentTarget.dataset.tab;
      switchTab(targetTab);
    });
  });

  // Brand Logo Click -> Return to Tab 1 (Roles & Elevation Vision)
  const brandLogo = document.querySelector('.brand-logo');
  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('roles');
    });
  }
}

function switchTab(tabId) {
  currentTab = tabId;
  
  // Update Navbar Active State
  document.querySelectorAll('.nav-tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabId);
  });

  // Update Main View Containers
  document.querySelectorAll('.tab-view-section').forEach(sec => {
    sec.style.display = (sec.id === `view-${tabId}`) ? 'block' : 'none';
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// Enterprise Security & Compliance Modal
// ==========================================
function setupSecurityModal() {
  const modal = document.getElementById('security-explainer-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const badgeBtns = document.querySelectorAll('.security-badge-btn');

  if (!modal) return;

  badgeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const term = btn.dataset.term;
      highlightSecurityTerm(term);
      modal.style.display = 'flex';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function highlightSecurityTerm(term) {
  document.querySelectorAll('.explainer-term-box').forEach(box => {
    if (box.dataset.term === term) {
      box.style.borderColor = 'var(--secondary)';
      box.style.background = 'rgba(6, 182, 212, 0.1)';
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      box.style.borderColor = 'var(--border-glass)';
      box.style.background = 'rgba(255, 255, 255, 0.03)';
    }
  });
}

// ==========================================
// TAB 1: Standalone Roles & Accredited Certifications
// ==========================================
function renderTab1Roles() {
  const container = document.getElementById('roles-cards-container');
  if (!container) return;

  container.innerHTML = ROLES_ELEVATION_DATA.map(role => `
    <div class="glass-panel role-elevation-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
          <div class="role-icon" style="color: ${role.accent}">
            <i class="fa-solid ${role.icon}"></i>
          </div>
          <span style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: var(--accent-green); padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; font-weight: 700;">
            ${role.badge}
          </span>
        </div>
        
        <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.3rem;">${role.title}</h3>
        <div style="color: var(--text-dim); font-size: 0.82rem; margin-bottom: 1rem;">${role.industry}</div>

        <!-- Dedicated Roles & Responsibilities Panel -->
        <div style="margin-bottom: 1.2rem; background: rgba(6, 182, 212, 0.06); border: 1px solid rgba(6, 182, 212, 0.2); padding: 1rem; border-radius: var(--radius-sm);">
          <strong style="color: var(--secondary); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 0.3rem;">
            📋 Industry Roles & Responsibilities
          </strong>
          <p style="font-size: 0.86rem; color: var(--text-main); line-height: 1.4; margin-bottom: 0.5rem;">
            <em>${role.rolesAndResponsibilities.purpose}</em>
          </p>
          <ul style="list-style-type: disc; padding-left: 1.2rem; font-size: 0.8rem; color: var(--text-muted);">
            ${role.rolesAndResponsibilities.keyTasks.map(task => `<li>${task}</li>`).join('')}
          </ul>
        </div>

        <!-- Accredited Industry Certifications & CV Boosters -->
        <div style="margin-bottom: 1.2rem; background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.3); padding: 0.9rem; border-radius: var(--radius-sm);">
          <strong style="color: var(--accent-amber); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 0.4rem;">
            🏆 Recognized CV Certifications (Standards Bodies)
          </strong>
          <div style="display: flex; flex-direction: column; gap: 0.35rem;">
            ${role.certifications.map(c => `
              <a href="${c.link}" target="_blank" style="color: var(--text-main); font-size: 0.82rem; font-weight: 600; text-decoration: none; display: flex; align-items: center; justify-content: space-between;">
                <span>• ${c.name}</span>
                <span style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-glass); padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.72rem; color: var(--secondary);">${c.body}</span>
              </a>
            `).join('')}
          </div>
        </div>

        <!-- Before / After Contrast -->
        <div style="margin-bottom: 1rem; background: rgba(239, 68, 68, 0.08); border-left: 3px solid #EF4444; padding: 0.8rem; border-radius: var(--radius-sm);">
          <strong style="color: #F87171; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 0.2rem;">
            ⚠️ Current Administrative Friction
          </strong>
          <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.4;">${role.currentReality}</p>
        </div>

        <div style="margin-bottom: 1.2rem; background: rgba(16, 185, 129, 0.08); border-left: 3px solid var(--accent-green); padding: 0.8rem; border-radius: var(--radius-sm);">
          <strong style="color: var(--accent-green); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 0.2rem;">
            ⚡ How Our Portal Elevates This Role
          </strong>
          <p style="color: var(--text-main); font-size: 0.85rem; line-height: 1.4;">${role.portalElevation}</p>
        </div>

        <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px dashed var(--border-glass); margin-bottom: 1.5rem;">
          <strong style="color: var(--secondary); font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">🔑 Core AI Capability Unlocked:</strong>
          <span style="font-size: 0.83rem; color: var(--text-main);">${role.keyCapability}</span>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-glass); padding-top: 1rem;">
        <div>
          <div style="font-weight: 700; color: var(--accent-green); font-size: 0.88rem;">${role.timeSavings}</div>
          <div style="font-size: 0.76rem; color: var(--text-dim);">${role.salaryBoost}</div>
        </div>
        <button class="cta-btn explore-role-btn" data-role-id="${role.id}" style="padding: 0.45rem 1rem; font-size: 0.83rem;">
          Explore Roadmap <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.explore-role-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const roleId = e.currentTarget.dataset.roleId;
      for (const ind of INDUSTRIES_DATA) {
        const found = ind.roles.find(r => r.id === roleId);
        if (found) {
          selectedIndustryId = ind.id;
          selectedRoleId = roleId;
          break;
        }
      }
      switchTab('roadmaps');
      renderTab3Roadmaps();
    });
  });
}

// ==========================================
// TAB 2: Explore Pathways
// ==========================================
function renderTab2Pathways() {
  const container = document.getElementById('pathways-grid-container');
  if (!container) return;

  container.innerHTML = INDUSTRIES_DATA.map(ind => `
    <div class="glass-panel industry-card ${ind.id === selectedIndustryId ? 'active' : ''}" data-ind-id="${ind.id}">
      <div>
        <div class="ind-icon">
          <i class="fa-solid ${ind.icon}"></i>
        </div>
        <h3 class="ind-title">${ind.title}</h3>
        <div class="ind-tagline">${ind.tagline}</div>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.2rem;">
          <strong>Distinct Standalone Roles:</strong><br>
          ${ind.roles.map(r => `• ${r.title}`).join('<br>')}
        </p>
      </div>
      <button class="cta-btn select-ind-btn" data-ind-id="${ind.id}" style="width: 100%; justify-content: center;">
        View Standalone Role Roadmaps <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  `).join('');

  document.querySelectorAll('.select-ind-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const indId = e.currentTarget.dataset.indId;
      selectedIndustryId = indId;
      const ind = INDUSTRIES_DATA.find(i => i.id === indId);
      selectedRoleId = ind ? ind.roles[0].id : '';
      switchTab('roadmaps');
      renderTab3Roadmaps();
    });
  });
}

// ==========================================
// TAB 3: Standalone Role Roadmaps & Resource Hub
// ==========================================
function renderTab3Roadmaps() {
  const ind = INDUSTRIES_DATA.find(i => i.id === selectedIndustryId) || INDUSTRIES_DATA[0];
  let role = ind.roles.find(r => r.id === selectedRoleId);
  if (!role) {
    role = ind.roles[0];
    selectedRoleId = role.id;
  }

  // Lookup full details from master ROLES_ELEVATION_DATA
  const fullRoleDetails = ROLES_ELEVATION_DATA.find(r => r.id === role.id) || ROLES_ELEVATION_DATA[0];

  const container = document.getElementById('roadmaps-detail-container');
  if (!container) return;

  container.innerHTML = `
    <!-- Header with Standalone Role Selector -->
    <div style="margin-bottom: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <span style="background: rgba(124, 58, 237, 0.2); border: 1px solid var(--border-glow); padding: 0.3rem 0.8rem; border-radius: 20px; color: var(--secondary); font-size: 0.85rem; font-weight: 700;">
          <i class="fa-solid ${ind.icon}"></i> ${ind.title}
        </span>

        <!-- Standalone Role Selector Dropdown -->
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <label style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Select Standalone Role:</label>
          <select id="standalone-role-selector" style="background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-glow); padding: 0.4rem 0.8rem; border-radius: var(--radius-sm); font-weight: 600; font-size: 0.88rem; cursor: pointer;">
            ${ind.roles.map(r => `<option value="${r.id}" ${r.id === role.id ? 'selected' : ''}>${r.title}</option>`).join('')}
          </select>
        </div>
      </div>

      <h2 style="font-size: 2.2rem; font-family: var(--font-heading); margin: 0.8rem 0 0.3rem;">
        ${role.title} AI Roadmap & Learning Resource Hub
      </h2>

      <!-- Explicit Roles & Responsibilities Section -->
      <div style="background: rgba(6, 182, 212, 0.08); border: 1px solid rgba(6, 182, 212, 0.3); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.2rem 0 1.5rem;">
        <h4 style="color: var(--secondary); font-size: 1rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-clipboard-list"></i> STANDALONE ROLES & RESPONSIBILITIES BREAKDOWN:
        </h4>
        <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.5; margin-bottom: 0.8rem;">
          <strong>Core Corporate Purpose:</strong> ${fullRoleDetails.rolesAndResponsibilities.purpose}
        </p>
        <strong style="color: var(--text-muted); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 0.4rem;">
          Daily Key Responsibilities & Deliverables:
        </strong>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.6rem;">
          ${fullRoleDetails.rolesAndResponsibilities.keyTasks.map(task => `
            <div style="font-size: 0.88rem; color: var(--text-main); background: rgba(0,0,0,0.3); padding: 0.5rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-glass);">
              • ${task}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Accredited Industry Certifications & CV Boosters Panel -->
      <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.3); padding: 1.2rem; border-radius: var(--radius-md); margin-bottom: 1.8rem;">
        <h4 style="color: var(--accent-amber); font-size: 0.95rem; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-award"></i> RECOGNIZED CV CERTIFICATIONS FROM STANDARD BODIES (PMI, SHRM, ASCM, IMA, ETC.):
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.8rem;">
          ${fullRoleDetails.certifications.map(c => `
            <a href="${c.link}" target="_blank" style="background: rgba(0,0,0,0.4); border: 1px solid rgba(245, 158, 11, 0.4); color: var(--text-main); text-decoration: none; padding: 0.5rem 0.9rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem; transition: var(--transition);">
              <i class="fa-solid fa-certificate" style="color: var(--accent-amber);"></i> ${c.name} 
              <span style="color: var(--secondary); font-size: 0.75rem;">(${c.body})</span>
              <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.7rem; color: var(--text-dim);"></i>
            </a>
          `).join('')}
        </div>
      </div>
      
      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
        <span style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); padding: 0.4rem 1rem; border-radius: 20px; font-weight: 600; color: var(--accent-green); font-size: 0.9rem;">
          <i class="fa-solid fa-clock"></i> Reclaims ${role.hoursSaved}
        </span>
        <span style="background: rgba(6, 182, 212, 0.15); border: 1px solid rgba(6, 182, 212, 0.3); padding: 0.4rem 1rem; border-radius: 20px; font-weight: 600; color: var(--secondary); font-size: 0.9rem;">
          <i class="fa-solid fa-chart-line"></i> ${role.salaryBoost}
        </span>
      </div>
    </div>

    <!-- Step-by-Step Value Addition Roadmap -->
    <div class="roadmap-timeline">
      ${role.roadmap.map(step => `
        <div class="roadmap-step-card">
          <div class="step-header">
            <span class="step-badge">STEP 0${step.stepNumber}: ${step.title}</span>
            <span class="step-duration"><i class="fa-regular fa-calendar"></i> Target Timeline: ${step.duration}</span>
          </div>

          <!-- Explicit Value Added Callout -->
          <div class="value-added-box">
            <div class="value-added-header">
              <i class="fa-solid fa-circle-check"></i> HOW THIS STEP ADDS VALUE TO WHAT YOU ARE DOING
            </div>
            <div class="value-added-text">${step.valueAdded}</div>
          </div>

          <div style="margin-bottom: 1.5rem; background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
            <strong style="color: var(--secondary); font-size: 0.9rem;">🎯 Key Actionable Objective:</strong>
            <span style="color: var(--text-main); font-size: 0.92rem; margin-left: 0.5rem;">${step.keyActionable}</span>
          </div>

          <!-- Curated Resources Grid -->
          <h4 style="font-size: 1.05rem; font-family: var(--font-heading); margin-bottom: 1rem; color: var(--text-main);">
            📚 Recommended Learning Resources for ${role.title} — Step 0${step.stepNumber}
          </h4>

          <div class="resources-grid">
            <!-- Courses -->
            <div class="resource-category-box">
              <h5><i class="fa-solid fa-graduation-cap"></i> Courses & Certifications</h5>
              ${step.resources.courses.map(c => `
                <div class="resource-item">
                  <a href="${c.link}" target="_blank" class="resource-link">${c.title} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i></a>
                  <div class="resource-meta">Platform: ${c.platform} • Duration: ${c.duration} ${c.badge ? `• <span style="color: var(--accent-green);">${c.badge}</span>` : ''}</div>
                </div>
              `).join('')}
            </div>

            <!-- Videos -->
            <div class="resource-category-box">
              <h5><i class="fa-solid fa-video"></i> Videos & Lectures</h5>
              ${step.resources.videos.map(v => `
                <div class="resource-item">
                  <a href="${v.link}" target="_blank" class="resource-link">${v.title} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i></a>
                  <div class="resource-meta">Speaker: ${v.speaker} • ${v.duration}</div>
                </div>
              `).join('')}
            </div>

            <!-- Books & Articles -->
            <div class="resource-category-box">
              <h5><i class="fa-solid fa-book-open"></i> Books & Articles</h5>
              ${step.resources.books.map(b => `
                <div class="resource-item">
                  <a href="${b.link}" target="_blank" class="resource-link">${b.title} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i></a>
                  <div class="resource-meta">Author: ${b.author}</div>
                  <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.2rem;">${b.description}</div>
                </div>
              `).join('')}
              ${step.resources.articles.map(a => `
                <div class="resource-item" style="margin-top: 0.8rem;">
                  <a href="${a.link}" target="_blank" class="resource-link">${a.title} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i></a>
                  <div class="resource-meta">Publication: ${a.publication} • ${a.readTime}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Attach listener to standalone role selector
  const roleSelector = document.getElementById('standalone-role-selector');
  if (roleSelector) {
    roleSelector.addEventListener('change', (e) => {
      selectedRoleId = e.target.value;
      renderTab3Roadmaps();
    });
  }
}

// ==========================================
// TAB 4: 15-Question Baseline Assessment Engine
// ==========================================
function renderTab4BaselineQuiz() {
  const container = document.getElementById('baseline-quiz-container');
  if (!container) return;

  const q = BASELINE_15_QUESTIONS[currentQuizIndex];
  const progressPct = ((currentQuizIndex + 1) / BASELINE_15_QUESTIONS.length) * 100;

  container.innerHTML = `
    <div style="max-width: 850px; margin: 0 auto;" class="glass-panel wizard-card">
      <div id="baseline-quiz-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span style="color: var(--secondary); font-weight: 700; font-size: 0.85rem; text-transform: uppercase;">
            Pillar ${Math.ceil((currentQuizIndex + 1) / 3)}: ${q.pillar}
          </span>
          <span style="color: var(--text-dim); font-size: 0.85rem;">Question ${currentQuizIndex + 1} of ${BASELINE_15_QUESTIONS.length}</span>
        </div>

        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progressPct}%;"></div>
        </div>

        <div class="question-title">${q.question}</div>

        <div class="options-list">
          ${q.options.map((opt, idx) => `
            <div class="option-item ${quizAnswers[q.id] === opt.score ? 'selected' : ''}" data-score="${opt.score}">
              <div class="option-radio">
                ${quizAnswers[q.id] === opt.score ? '<div style="width: 10px; height: 10px; border-radius: 50%; background: white;"></div>' : ''}
              </div>
              <div style="font-size: 0.95rem; color: var(--text-main);">${opt.label}</div>
            </div>
          `).join('')}
        </div>

        ${currentQuizIndex > 0 ? `
          <button id="prev-quiz-btn" style="background: transparent; border: 1px solid var(--border-glass); color: var(--text-muted); padding: 0.5rem 1rem; border-radius: var(--radius-sm); font-size: 0.85rem; cursor: pointer;">
            <i class="fa-solid fa-arrow-left"></i> Previous Question
          </button>
        ` : ''}
      </div>

      <!-- Comprehensive Results Box -->
      <div id="baseline-result-box" style="display: none;" class="assessment-result">
        <div class="result-score-circle">
          <div class="score-val gradient-text" id="baseline-score-num">0%</div>
          <div class="score-max">Baseline Score</div>
        </div>

        <h3 id="baseline-tier-title" style="font-size: 1.6rem; margin-bottom: 0.5rem;" class="gradient-text"></h3>
        <p id="baseline-tier-desc" style="color: var(--text-muted); max-width: 680px; margin: 0 auto 2rem; line-height: 1.6;"></p>

        <!-- Pillar Score Breakdown -->
        <h4 style="text-align: left; font-size: 1.05rem; font-family: var(--font-heading); margin-bottom: 0.8rem; color: var(--text-main);">
          📊 Your Competency Score Breakdown by Pillar:
        </h4>
        <div class="pillar-score-grid" id="pillar-breakdown-container">
          <!-- Rendered dynamically -->
        </div>

        <!-- Score-Connected Customized Recommendations -->
        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); padding: 1.8rem; border-radius: var(--radius-lg); text-align: left; margin-bottom: 2rem;">
          <h4 style="color: var(--accent-green); font-size: 1.1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-compass"></i> CUSTOMIZED 30-60-90 DAY KNOWLEDGE BLUEPRINT FOR YOU:
          </h4>
          <ul class="phase-list" id="baseline-recommendations-list">
            <!-- Dynamic recommendations -->
          </ul>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="cta-btn" id="goto-roadmaps-btn"><i class="fa-solid fa-book-open"></i> View Full Role Roadmap & Learning Resources</button>
          <button id="retake-baseline-btn" style="background: transparent; border: 1px solid var(--border-glass); color: var(--text-main); padding: 0.7rem 1.4rem; border-radius: var(--radius-md); font-weight: 600; cursor: pointer;">Retake Baseline Assessment</button>
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('.option-item').forEach(item => {
    item.addEventListener('click', () => {
      const score = parseInt(item.dataset.score);
      quizAnswers[q.id] = score;

      if (currentQuizIndex < BASELINE_15_QUESTIONS.length - 1) {
        currentQuizIndex++;
        renderTab4BaselineQuiz();
      } else {
        calculateBaselineResult();
      }
    });
  });

  const prevBtn = document.getElementById('prev-quiz-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentQuizIndex > 0) {
        currentQuizIndex--;
        renderTab4BaselineQuiz();
      }
    });
  }

  const retakeBtn = document.getElementById('retake-baseline-btn');
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      quizAnswers = {};
      currentQuizIndex = 0;
      renderTab4BaselineQuiz();
    });
  }

  const gotoBtn = document.getElementById('goto-roadmaps-btn');
  if (gotoBtn) {
    gotoBtn.addEventListener('click', () => {
      switchTab('roadmaps');
    });
  }
}

function calculateBaselineResult() {
  const totalScore = Object.values(quizAnswers).reduce((a, b) => a + b, 0);
  const maxScore = BASELINE_15_QUESTIONS.length * 3;
  const pct = Math.round((totalScore / maxScore) * 100);

  // Pillar scores (3 questions per pillar)
  const pillars = [
    { name: "Mindset & Literacy", qIds: ["q1", "q2", "q3"] },
    { name: "Prompt Engineering", qIds: ["q4", "q5", "q6"] },
    { name: "Security & Governance", qIds: ["q7", "q8", "q9"] },
    { name: "Workflow Automation", qIds: ["q10", "q11", "q12"] },
    { name: "Strategic ROI Leadership", qIds: ["q13", "q14", "q15"] }
  ];

  const pillarScores = pillars.map(p => {
    const pScore = p.qIds.reduce((sum, qId) => sum + (quizAnswers[qId] || 0), 0);
    const pPct = Math.round((pScore / 9) * 100);
    return { name: p.name, score: pScore, pct: pPct };
  });

  document.getElementById('baseline-quiz-box').style.display = 'none';
  const resultBox = document.getElementById('baseline-result-box');
  resultBox.style.display = 'block';

  document.getElementById('baseline-score-num').textContent = `${pct}%`;

  let title = "Siloed AI Practitioner (Entry Baseline)";
  let desc = "You rely heavily on traditional manual execution with basic AI usage. You have immense opportunity to reclaim 10-14 hours per week through structured prompting and security sandboxing.";
  let recs = [
    "<strong>Priority 1: Mindset & Security</strong> — Complete 'AI for Everyone' by Andrew Ng and establish zero-data-retention sandboxes for client/company data.",
    "<strong>Priority 2: Prompt Templates</strong> — Adopt structured multi-shot prompts for status reports and RAID risk logs to save 5+ hours weekly.",
    "<strong>Priority 3: Automation SOPs</strong> — Connect meeting bots (Otter/Fireflies) to your sprint board to eliminate manual action-item typing."
  ];

  if (pct >= 80) {
    title = "AI-Amplified Strategic Leader (Advanced Baseline)";
    desc = "Outstanding! You possess strong AI literacy, security habits, and prompt engineering skills. Our portal will help you build custom department GPTs and quantify ROI for VP/Director promotion.";
    recs = [
      "<strong>Priority 1: Department Scale</strong> — Build custom GPTs pre-loaded with team style guides, PRD rubrics, and SOP templates.",
      "<strong>Priority 2: Executive ROI Dashboards</strong> — Present a quarterly AI productivity ROI metric report to executive steering committees.",
      "<strong>Priority 3: Team Enablement</strong> — Mentor junior managers and establish department-wide enterprise AI guidelines."
    ];
  } else if (pct >= 50) {
    title = "Developing AI Manager (Intermediate Baseline)";
    desc = "You use AI tools occasionally, but lack systematic prompt engineering templates, document intelligence workflows, and security sandboxes.";
    recs = [
      "<strong>Priority 1: Prompt Mastery</strong> — Take Vanderbilt's 'Prompt Engineering for ChatGPT' course linked in Tab 3 to master multi-shot executive prompts.",
      "<strong>Priority 2: Document Intelligence</strong> — Use ChatPDF / Claude 3.5 to run side-by-side vendor RFP comparisons and contract penalty reviews.",
      "<strong>Priority 3: Governance SOPs</strong> — Create a formal enterprise acceptable AI policy for your team."
    ];
  }

  document.getElementById('baseline-tier-title').textContent = title;
  document.getElementById('baseline-tier-desc').textContent = desc;

  // Render Pillar Cards
  const pillarContainer = document.getElementById('pillar-breakdown-container');
  if (pillarContainer) {
    pillarContainer.innerHTML = pillarScores.map(p => `
      <div class="pillar-score-card">
        <div style="font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase;">${p.name}</div>
        <div style="font-size: 1.4rem; font-weight: 700; color: ${p.pct >= 75 ? 'var(--accent-green)' : p.pct >= 50 ? 'var(--secondary)' : 'var(--accent-amber)'}">
          ${p.pct}%
        </div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">${p.score}/9 points</div>
      </div>
    `).join('');
  }

  // Render Recommendations
  const recList = document.getElementById('baseline-recommendations-list');
  if (recList) {
    recList.innerHTML = recs.map(r => `<li>${r}</li>`).join('');
  }
}
