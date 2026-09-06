/**
 * ICF Credentials Hub Main Application Controller
 * Handles Navigation, Eligibility Calculator, Mock Exam Suite, Resources, Focus Areas & Assessor Rubric Modals.
 */

let examInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderOverview();
  renderCompetencies();
  renderCaseStudies();
  renderPathways();
  renderExamInfo();
  renderStudyResources();
  renderMentorCoachingOverview();
  renderCoachingFocusAreas();
  initCalculator();
  initExamSimulator();
});

/* ----------------------------------------------------
 * Tab Navigation
 * ---------------------------------------------------- */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeContent = document.getElementById(`tab-${targetTab}`);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });
}

/* ----------------------------------------------------
 * Render Overview & Comparison Table
 * ---------------------------------------------------- */
function renderOverview() {
  const credGrid = document.getElementById('cred-cards-grid');
  const tableBody = document.getElementById('comparison-table-body');

  if (!credGrid || !ICF_DATA.credentials) return;

  // Cards
  credGrid.innerHTML = ICF_DATA.credentials.map(c => `
    <div class="glass-card cred-card ${c.id}-card">
      <div class="cred-header">
        <div>
          <h3 class="cred-title" style="color: ${c.color}">${c.title}</h3>
          <span class="cred-badge" style="background: ${c.color}20; color: ${c.color}">${c.badge}</span>
        </div>
      </div>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">${c.heroDesc}</p>

      <ul class="spec-list">
        <li class="spec-item">
          <span class="spec-label">Coach Training</span>
          <span class="spec-value">${c.education}</span>
        </li>
        <li class="spec-item">
          <span class="spec-label">Coaching Experience</span>
          <span class="spec-value">${c.coachingHours}</span>
        </li>
        <li class="spec-item">
          <span class="spec-label">Mentor Coaching</span>
          <span class="spec-value">${c.mentorHours}</span>
        </li>
        <li class="spec-item">
          <span class="spec-label">Performance Evaluation</span>
          <span class="spec-value">${c.performanceEval}</span>
        </li>
        <li class="spec-item">
          <span class="spec-label">Fees (Approx)</span>
          <span class="spec-value">${c.fees}</span>
        </li>
      </ul>

      <div style="background: rgba(15,23,42,0.6); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; border-left: 3px solid ${c.color}">
        <strong>Core Distinction:</strong> ${c.keyDifference}
      </div>
    </div>
  `).join('');

  // Comparison Table
  if (tableBody) {
    tableBody.innerHTML = `
      <tr>
        <td><strong>Prerequisites</strong></td>
        <td>${ICF_DATA.credentials[0].prerequisites}</td>
        <td>${ICF_DATA.credentials[1].prerequisites}</td>
        <td>${ICF_DATA.credentials[2].prerequisites}</td>
      </tr>
      <tr>
        <td><strong>Training Education Hours</strong></td>
        <td>60+ Hours</td>
        <td>125+ Hours</td>
        <td>200+ Hours</td>
      </tr>
      <tr>
        <td><strong>Client Experience Hours</strong></td>
        <td>100+ Total (75+ Paid)</td>
        <td>500+ Total (450+ Paid)</td>
        <td>2,500+ Total (2,250+ Paid)</td>
      </tr>
      <tr>
        <td><strong>Minimum Client Count</strong></td>
        <td>8 Clients</td>
        <td>25 Clients</td>
        <td>35 Clients</td>
      </tr>
      <tr>
        <td><strong>Mentor Coaching</strong></td>
        <td>10 Hours over 3+ months</td>
        <td>10 Hours over 3+ months</td>
        <td>10 Hours with MCC mentor</td>
      </tr>
      <tr>
        <td><strong>Performance Eval Submission</strong></td>
        <td>1 Audio & Transcript</td>
        <td>2 Audios & Transcripts</td>
        <td>2 Audios & Transcripts (MCC level)</td>
      </tr>
      <tr>
        <td><strong>Official Exam</strong></td>
        <td>ICF Exam (81 SJT items)</td>
        <td>ICF Exam (81 SJT items)</td>
        <td>ICF Exam (81 SJT items)</td>
      </tr>
      <tr>
        <td><strong>Credential Renewal</strong></td>
        <td>3 Years (40 CCE + 10 Mentor)</td>
        <td>3 Years (40 CCE)</td>
        <td>3 Years (40 CCE)</td>
      </tr>
    `;
  }
}

/* ----------------------------------------------------
 * Calculator Integration
 * ---------------------------------------------------- */
function initCalculator() {
  const calcForm = document.getElementById('calc-form');
  const calcOutput = document.getElementById('calc-output');

  if (!calcForm) return;

  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const targetCredential = document.getElementById('calc-target').value;
    const trainingHours = parseInt(document.getElementById('calc-training').value) || 0;
    const totalHours = parseInt(document.getElementById('calc-total-hours').value) || 0;
    const paidHours = parseInt(document.getElementById('calc-paid-hours').value) || 0;
    const mentorHours = parseInt(document.getElementById('calc-mentor').value) || 0;
    const hasPcc = document.getElementById('calc-has-pcc').checked;

    const res = calculateEligibility(trainingHours, totalHours, paidHours, mentorHours, targetCredential, hasPcc);

    if (!res) return;

    let html = `
      <div style="margin-bottom: 20px; text-align: center;">
        <span class="cred-badge" style="background: ${res.eligible ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; color: ${res.eligible ? '#10b981' : '#ef4444'}; font-size: 14px; padding: 6px 16px;">
          ${res.eligible ? '✓ ELIGIBLE TO APPLY' : '⚠️ GAPS IDENTIFIED'}
        </span>
        <h3 style="margin-top: 12px; font-size: 20px;">Target Credential: ICF ${res.target}</h3>
      </div>

      <div style="margin-bottom: 24px;">
        <div class="progress-bar-container">
          <div class="progress-info">
            <span>Education Hours (${res.progress.training.current} / ${res.progress.training.required} hrs)</span>
            <span>${res.progress.training.percentage}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${res.progress.training.percentage}%"></div>
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-info">
            <span>Total Coaching Hours (${res.progress.totalHours.current} / ${res.progress.totalHours.required} hrs)</span>
            <span>${res.progress.totalHours.percentage}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${res.progress.totalHours.percentage}%"></div>
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-info">
            <span>Paid Experience Hours (${res.progress.paidHours.current} / ${res.progress.paidHours.required} hrs)</span>
            <span>${res.progress.paidHours.percentage}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${res.progress.paidHours.percentage}%"></div>
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-info">
            <span>Mentor Coaching Hours (${res.progress.mentorHours.current} / ${res.progress.mentorHours.required} hrs)</span>
            <span>${res.progress.mentorHours.percentage}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${res.progress.mentorHours.percentage}%"></div>
          </div>
        </div>
      </div>
    `;

    if (res.gaps.length > 0) {
      html += `<div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
        <h4 style="color: #f87171; margin-bottom: 8px;">Action Items to Fulfill:</h4>
        <ul style="padding-left: 20px; font-size: 13px; color: var(--text-muted);">
          ${res.gaps.map(g => `<li style="margin-bottom: 6px;"><strong>${g.item}:</strong> ${g.missing}</li>`).join('')}
        </ul>
      </div>`;
    }

    html += `
      <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: var(--radius-md); padding: 16px; font-size: 13px; color: var(--text-main);">
        💡 <strong>Coach Guidance:</strong> ${res.recommendation}
      </div>
    `;

    calcOutput.innerHTML = html;
  });
}

/* ----------------------------------------------------
 * Interactive Mock Exam Suite Controller
 * ---------------------------------------------------- */
function initExamSimulator() {
  examInstance = new ICFExamEngine(ICF_DATA.mockQuestions);
  renderExamQuestion();
}

function renderExamQuestion() {
  const container = document.getElementById('exam-render-area');
  if (!container || !examInstance) return;

  const q = examInstance.getCurrentQuestion();
  const isSubmitted = examInstance.examSubmitted;

  // Level selector buttons
  const levelButtonsHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; background: rgba(15,23,42,0.8); padding: 12px 18px; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
      <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
        <span style="font-size: 13px; font-weight: 700; color: var(--text-muted);">Select Exam Mode:</span>
        <button class="btn-tag ${examInstance.currentLevel === 'all' ? 'best selected' : ''}" onclick="handleLevelChange('all')">🌐 All Questions Mock</button>
        <button class="btn-tag ${examInstance.currentLevel === 'acc' ? 'best selected' : ''}" onclick="handleLevelChange('acc')">📘 ACC Exam Mode</button>
        <button class="btn-tag ${examInstance.currentLevel === 'pcc' ? 'best selected' : ''}" onclick="handleLevelChange('pcc')">🔮 PCC Exam Mode</button>
        <button class="btn-tag ${examInstance.currentLevel === 'mcc' ? 'best selected' : ''}" onclick="handleLevelChange('mcc')">💎 MCC Exam Mode</button>
      </div>
      <div>
        <span style="font-size: 12px; color: #818cf8; font-weight: 600;">Format: ICF BEST & WORST SJT</span>
      </div>
    </div>
  `;

  // Question Navigator Matrix Grid
  let gridHTML = '';
  if (examInstance.questions && examInstance.questions.length > 0) {
    gridHTML = `
      <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px; padding: 10px; background: rgba(15,23,42,0.4); border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
        <span style="font-size: 12px; font-weight: 600; color: var(--text-muted); align-self: center; margin-right: 8px;">Question Navigator:</span>
        ${examInstance.questions.map((item, idx) => {
          const uAns = examInstance.userAnswers[item.id] || { best: null, worst: null };
          const isComplete = uAns.best && uAns.worst;
          const isFlagged = examInstance.flaggedQuestions.has(item.id);
          const isCurrent = idx === examInstance.currentIndex;

          let btnBg = 'rgba(255,255,255,0.08)';
          let borderStyle = isCurrent ? '2px solid #6366f1' : '1px solid var(--border-glass)';
          
          if (isFlagged) {
            btnBg = '#f59e0b';
          } else if (isComplete) {
            btnBg = '#10b981';
          }

          return `
            <button onclick="handleGoToQuestion(${idx})" style="width: 28px; height: 28px; border-radius: 6px; border: ${borderStyle}; background: ${btnBg}; color: #fff; font-size: 12px; font-weight: 700; cursor: pointer;">
              ${idx + 1}
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  if (!q) {
    container.innerHTML = `
      ${levelButtonsHTML}
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        No questions available in this specific exam mode. Select another mode above.
      </div>
    `;
    return;
  }

  const uAns = examInstance.userAnswers[q.id] || { best: null, worst: null };
  const isFlagged = examInstance.flaggedQuestions.has(q.id);

  let optionsHTML = q.options.map(opt => {
    const isBestSelected = uAns.best === opt.key;
    const isWorstSelected = uAns.worst === opt.key;

    return `
      <div class="option-card" style="border-color: ${isBestSelected ? '#10b981' : isWorstSelected ? '#ef4444' : 'var(--border-glass)'}">
        <div class="option-key" style="background: ${isBestSelected ? '#10b981' : isWorstSelected ? '#ef4444' : 'rgba(255,255,255,0.08)'}">
          ${opt.key}
        </div>
        <div class="option-text">${opt.text}</div>
        <div class="option-actions">
          <button class="btn-tag best ${isBestSelected ? 'selected' : ''}" 
                  onclick="handleExamSelect(${q.id}, '${opt.key}', 'best')"
                  ${isSubmitted ? 'disabled' : ''}>
            ${isBestSelected ? '✓ BEST' : 'BEST'}
          </button>
          <button class="btn-tag worst ${isWorstSelected ? 'selected' : ''}" 
                  onclick="handleExamSelect(${q.id}, '${opt.key}', 'worst')"
                  ${isSubmitted ? 'disabled' : ''}>
            ${isWorstSelected ? '✕ WORST' : 'WORST'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  let rationaleHTML = '';
  if (isSubmitted) {
    rationaleHTML = `
      <div class="rationale-box">
        <h4 style="color: #10b981; margin-bottom: 8px;">ICF Expert Rationale & Scoring Analysis</h4>
        <p><strong>Official BEST Answer:</strong> Option ${q.bestKey} | <strong>Official WORST Answer:</strong> Option ${q.worstKey}</p>
        <p style="margin-top: 10px; font-size: 13px; color: var(--text-main); white-space: pre-line;">${q.rationale}</p>
      </div>
    `;
  }

  let scoreCardHTML = '';
  if (isSubmitted && examInstance.score) {
    const s = examInstance.score;
    scoreCardHTML = `
      <div class="glass-card" style="background: linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.9)); border: 2px solid ${s.passed ? '#10b981' : '#ef4444'}; margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <h3 style="font-size: 22px; color: ${s.passed ? '#10b981' : '#ef4444'};">
              ${s.passed ? '🎉 EXAM PASSED (Exceeds ICF Cut Score)' : '⚠️ NEEDS FURTHER PRACTICE'}
            </h3>
            <p style="font-size: 13px; color: var(--text-muted);">Scaled Score Cutoff: 460 / 500 (Minimum ~70% required)</p>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 32px; font-weight: 800; color: ${s.passed ? '#10b981' : '#ef4444'};">${s.scaledScore} / 500</div>
            <div style="font-size: 13px; color: var(--text-muted);">${s.total} / ${s.max} points (${s.percentage}%)</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-top: 16px;">
          <div style="background: rgba(15,23,42,0.6); padding: 12px; border-radius: var(--radius-sm);">
            <div style="font-size: 11px; color: var(--text-muted);">BEST Answers Correct</div>
            <div style="font-size: 18px; font-weight: 700; color: #10b981;">${s.bestCount} / ${examInstance.questions.length}</div>
          </div>
          <div style="background: rgba(15,23,42,0.6); padding: 12px; border-radius: var(--radius-sm);">
            <div style="font-size: 11px; color: var(--text-muted);">WORST Answers Correct</div>
            <div style="font-size: 18px; font-weight: 700; color: #ef4444;">${s.worstCount} / ${examInstance.questions.length}</div>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    ${levelButtonsHTML}
    ${scoreCardHTML}
    ${gridHTML}

    <div class="exam-nav">
      <span class="question-counter">Scenario ${examInstance.currentIndex + 1} of ${examInstance.questions.length} (${q.level.toUpperCase()} Level)</span>
      <div style="display: flex; gap: 8px;">
        <span class="badge-tag" style="background: rgba(99,102,241,0.2); color: #818cf8;">${q.competencyName}</span>
        <button class="btn-tag" style="background: ${isFlagged ? '#f59e0b' : 'rgba(255,255,255,0.08)'}; color: #fff;" onclick="handleToggleFlag(${q.id})">
          ${isFlagged ? '🚩 Flagged' : '🏳️ Flag for Review'}
        </button>
      </div>
    </div>

    <div class="scenario-box">
      <strong>Client Scenario:</strong> ${q.scenario}
    </div>

    <div class="options-list">
      ${optionsHTML}
    </div>

    ${rationaleHTML}

    <div class="exam-controls" style="margin-top: 24px;">
      <button class="btn-secondary" onclick="handleExamPrev()" ${examInstance.currentIndex === 0 ? 'disabled' : ''}>
        ← Previous
      </button>

      ${!isSubmitted ? `
        <button class="btn-primary" style="width: auto; padding: 12px 28px;" onclick="handleExamSubmit()">
          Grade & Submit Practice Exam
        </button>
      ` : `
        <button class="btn-primary" style="width: auto; padding: 12px 28px;" onclick="handleExamReset()">
          Retake Exam Simulator
        </button>
      `}

      <button class="btn-secondary" onclick="handleExamNext()" ${examInstance.currentIndex === examInstance.questions.length - 1 ? 'disabled' : ''}>
        Next →
      </button>
    </div>
  `;
}

window.handleLevelChange = function(level) {
  examInstance.setLevel(level);
  renderExamQuestion();
};

window.handleGoToQuestion = function(idx) {
  examInstance.goToQuestion(idx);
  renderExamQuestion();
};

window.handleToggleFlag = function(qId) {
  examInstance.toggleFlag(qId);
  renderExamQuestion();
};

window.handleExamSelect = function(qId, key, type) {
  examInstance.selectOption(qId, key, type);
  renderExamQuestion();
};

window.handleExamNext = function() {
  examInstance.nextQuestion();
  renderExamQuestion();
};

window.handleExamPrev = function() {
  examInstance.prevQuestion();
  renderExamQuestion();
};

window.handleExamSubmit = function() {
  const result = examInstance.submitExam();
  renderExamQuestion();
};

window.handleExamReset = function() {
  examInstance.resetExam();
  renderExamQuestion();
};

/* ----------------------------------------------------
 * Render Competencies & Case Studies
 * ---------------------------------------------------- */
function renderCompetencies() {
  const grid = document.getElementById('competency-grid');
  if (!grid || !ICF_DATA.competencies) return;

  grid.innerHTML = ICF_DATA.competencies.map(c => `
    <div class="glass-card" style="margin-bottom: 24px; border-left: 4px solid #8b5cf6;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div>
          <span class="comp-number">Competency #${c.id} • ${c.domain} Domain</span>
          <h3 style="font-size: 20px; font-weight: 700; color: #f8fafc; margin-top: 2px;">${c.name}</h3>
        </div>
        <span class="badge-tag" style="background: rgba(139,92,246,0.2); color: #a78bfa;">Official Standard</span>
      </div>

      <p style="font-size: 14px; font-weight: 600; color: #818cf8; margin-bottom: 10px;">Summary: ${c.summary}</p>
      <p style="font-size: 13px; color: var(--text-main); margin-bottom: 18px; line-height: 1.6;">${c.details}</p>

      <!-- Level Performance Markers -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin-bottom: 18px;">
        <div style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-size: 11px; font-weight: 700; color: #3b82f6; text-transform: uppercase;">ACC Level Marker</div>
          <div style="font-size: 12px; color: var(--text-main); margin-top: 4px;">${c.accMarkers || 'Focuses on basic application and foundational agreement.'}</div>
        </div>
        <div style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-size: 11px; font-weight: 700; color: #8b5cf6; text-transform: uppercase;">PCC Level Marker</div>
          <div style="font-size: 12px; color: var(--text-main); margin-top: 4px;">${c.pccMarkers || 'Coaches the person vs problem and evokes deep client insight.'}</div>
        </div>
        <div style="background: rgba(236,72,153,0.1); border: 1px solid rgba(236,72,153,0.25); border-radius: var(--radius-sm); padding: 12px;">
          <div style="font-size: 11px; font-weight: 700; color: #ec4899; text-transform: uppercase;">MCC Level Marker</div>
          <div style="font-size: 12px; color: var(--text-main); margin-top: 4px;">${c.mccMarkers || 'Effortless presence, complete surrender of agenda, and mastery.'}</div>
        </div>
      </div>

      <!-- Exam Trap Warning Box -->
      ${c.examTraps ? `
        <div style="background: rgba(239,68,68,0.1); border-left: 3px solid #ef4444; padding: 12px 16px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 13px; margin-bottom: 14px;">
          <strong style="color: #f87171;">⚠️ Common Exam Trap to Avoid:</strong> ${c.examTraps}
        </div>
      ` : ''}

      <!-- Key Evocative Question Example -->
      ${c.keyQuestions ? `
        <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25); padding: 10px 14px; border-radius: var(--radius-sm); font-size: 13px; color: #34d399;">
          💡 <strong>Evocative Question Example:</strong> ${c.keyQuestions}
        </div>
      ` : ''}
    </div>
  `).join('');
}

function renderCaseStudies() {
  const container = document.getElementById('case-studies-container');
  if (!container || !ICF_DATA.caseStudies) return;

  container.innerHTML = ICF_DATA.caseStudies.map(cs => `
    <div class="glass-card case-study-card">
      <div class="case-meta">
        <span class="badge-tag">${cs.credentialLevel}</span>
        ${cs.competencies.map(cid => `<span class="badge-tag" style="background: rgba(236,72,153,0.15); color: #ec4899;">Competency #${cid}</span>`).join('')}
      </div>
      <h3 style="font-size: 18px; margin-bottom: 8px;">${cs.title}</h3>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px;">${cs.summary}</p>
      
      <div style="background: rgba(15,23,42,0.6); padding: 14px; border-radius: var(--radius-md); font-size: 13px; margin-bottom: 14px;">
        <strong style="color: #6366f1;">Background Narrative:</strong> ${cs.background}
      </div>

      <div style="background: rgba(239,68,68,0.1); border-left: 3px solid #ef4444; padding: 12px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 13px; margin-bottom: 14px;">
        <strong style="color: #f87171;">The Coaching Dilemma:</strong> ${cs.dilemma}
      </div>

      <div style="background: rgba(16,185,129,0.1); border-left: 3px solid #10b981; padding: 12px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 13px; margin-bottom: 14px;">
        <strong style="color: #34d399;">Recommended ICF Action:</strong> ${cs.recommendedAction}
      </div>

      <div style="font-size: 12px; color: var(--text-muted);">
        <strong>Key Master Takeaways:</strong>
        <ul style="padding-left: 18px; margin-top: 4px;">
          ${cs.takeaways.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ----------------------------------------------------
 * Render Deeply Enhanced Books & Official ICF Guidelines
 * ---------------------------------------------------- */
function renderStudyResources() {
  const booksContainer = document.getElementById('books-resources-grid');
  const articlesContainer = document.getElementById('articles-resources-list');
  if (!ICF_DATA.studyResources) return;

  if (booksContainer) {
    booksContainer.innerHTML = ICF_DATA.studyResources.books.map(b => `
      <div class="competency-card" style="border-top: 3px solid #8b5cf6;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <span class="badge-tag" style="background: rgba(139,92,246,0.15); color: #a78bfa;">${b.target}</span>
        </div>
        <h4 style="font-size: 17px; margin-bottom: 2px; color: #f8fafc;">📖 ${b.title}</h4>
        <div style="font-size: 12px; color: #818cf8; font-weight: 600; margin-bottom: 10px;">Author: ${b.author}</div>
        
        <p style="font-size: 13px; color: var(--text-main); margin-bottom: 12px; line-height: 1.5;">${b.desc}</p>
        
        <div style="background: rgba(15,23,42,0.6); padding: 10px; border-radius: var(--radius-sm); font-size: 12px; margin-bottom: 10px;">
          <strong style="color: #34d399;">ICF Competencies Covered:</strong> ${b.competenciesCovered}
        </div>

        <div style="background: rgba(139,92,246,0.1); border: 1px dashed rgba(139,92,246,0.3); padding: 10px; border-radius: var(--radius-sm); font-size: 12px; color: #c084fc;">
          💡 <strong>Key Takeaway:</strong> ${b.takeaway}
        </div>
      </div>
    `).join('');
  }

  if (articlesContainer) {
    articlesContainer.innerHTML = ICF_DATA.studyResources.articles.map(a => `
      <div style="background: rgba(15,23,42,0.7); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
        <div style="flex: 1; min-width: 280px;">
          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-bottom: 6px;">
            <span class="badge-tag" style="background: rgba(139,92,246,0.2); color: #a78bfa;">${a.type}</span>
            <span style="font-size: 12px; color: var(--text-muted);">Source: ${a.source}</span>
          </div>
          <h4 style="font-size: 17px; color: #f8fafc; font-weight: 700; margin-bottom: 6px;">📄 ${a.title}</h4>
          <p style="font-size: 13px; color: var(--text-main); margin-bottom: 12px;">${a.desc}</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px; min-width: 200px;">
          <button class="btn-primary" style="padding: 10px 16px; font-size: 13px; width: 100%;" onclick="openResourceModal('${a.id}')">
            📋 View Assessor Rubric & Breakdown
          </button>
          ${a.officialUrl ? `
            <a href="${a.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 10px 16px; font-size: 12px; width: 100%; text-align: center; text-decoration: none; display: inline-block;">
              🌐 Visit Official ICF Portal ↗
            </a>
          ` : ''}
        </div>
      </div>
    `).join('');
  }
}

/* ----------------------------------------------------
 * Interactive Assessor Rubric & Guideline Modal
 * ---------------------------------------------------- */
window.openResourceModal = function(articleId) {
  const article = ICF_DATA.studyResources.articles.find(a => a.id === articleId);
  if (!article || !article.modalContent) return;

  const modal = document.getElementById('resource-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modal || !modalBody) return;

  const mc = article.modalContent;

  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="badge-tag" style="background: rgba(139,92,246,0.2); color: #a78bfa; font-size: 12px;">${article.type}</span>
      <h2 style="font-size: 22px; color: #f8fafc; margin-top: 8px; margin-bottom: 4px;">${article.title}</h2>
      <p style="font-size: 14px; color: #818cf8; font-weight: 600;">${mc.subtitle}</p>
    </div>

    ${mc.sections.map(sec => `
      <div style="background: rgba(15,23,42,0.6); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
        <h3 style="font-size: 16px; color: #34d399; margin-bottom: 10px; border-bottom: 1px solid var(--border-glass); padding-bottom: 6px;">
          ${sec.heading}
        </h3>
        <ul style="padding-left: 20px; font-size: 13px; color: var(--text-main); display: flex; flex-direction: column; gap: 8px;">
          ${sec.items.map(item => `<li style="line-height: 1.5;">${item}</li>`).join('')}
        </ul>
      </div>
    `).join('')}

    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border-glass); flex-wrap: wrap; gap: 12px;">
      ${article.officialUrl ? `
        <a href="${article.officialUrl}" target="_blank" rel="noopener noreferrer" style="color: #818cf8; font-size: 13px; text-decoration: underline;">
          🌐 View official document directly on coachingfederation.org ↗
        </a>
      ` : '<span></span>'}
      <button class="btn-secondary" style="width: auto; padding: 10px 24px;" onclick="closeResourceModal()">Close Modal</button>
    </div>
  `;

  modal.classList.add('open');
};

window.closeResourceModal = function() {
  const modal = document.getElementById('resource-modal');
  if (modal) modal.classList.remove('open');
};

/* ----------------------------------------------------
 * Render Official Mentor Coaching Overview Rules
 * ---------------------------------------------------- */
function renderMentorCoachingOverview() {
  const box = document.getElementById('mentor-rules-overview');
  if (!box || !ICF_DATA.mentorCoachingOverview) return;

  const m = ICF_DATA.mentorCoachingOverview;
  box.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">
      <div style="background: rgba(15,23,42,0.7); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Total Mentor Hours</div>
        <div style="font-size: 22px; font-weight: 800; color: #818cf8;">${m.totalHoursRequired} Hours Required</div>
      </div>
      <div style="background: rgba(15,23,42,0.7); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Timeframe Limit</div>
        <div style="font-size: 18px; font-weight: 700; color: #34d399;">${m.minTimeframe}</div>
      </div>
      <div style="background: rgba(15,23,42,0.7); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Group vs 1-on-1 Split</div>
        <div style="font-size: 13px; font-weight: 600; color: #fbbf24;">${m.groupVsIndividual}</div>
      </div>
    </div>

    <div style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.3); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px;">
      <h4 style="font-size: 15px; color: #a78bfa; margin-bottom: 8px;">What Actually Happens in Mentor Coaching Sessions?</h4>
      <ul style="padding-left: 20px; font-size: 13px; color: var(--text-main); display: flex; flex-direction: column; gap: 6px;">
        ${m.whatHappensInSessions.map(s => `<li>${s}</li>`).join('')}
      </ul>
      <p style="font-size: 12px; color: var(--text-muted); margin-top: 10px;">
        <strong>Eligible Mentor Coach Rules:</strong> ${m.eligibleMentors}
      </p>
    </div>
  `;
}

/* ----------------------------------------------------
 * Render 7-Skill Mastery Curriculum for Mentor Coaching
 * ---------------------------------------------------- */
function renderCoachingFocusAreas() {
  const container = document.getElementById('coaching-focus-container');
  if (!container || !ICF_DATA.coachingFocusAreas) return;

  container.innerHTML = ICF_DATA.coachingFocusAreas.map(item => `
    <div class="glass-card" style="margin-bottom: 24px; border-left: 4px solid #8b5cf6;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
        <div>
          <h3 style="font-size: 19px; font-weight: 700; color: #f8fafc;">${item.title}</h3>
          <div style="font-size: 13px; color: #818cf8; font-weight: 600; margin-top: 2px;">${item.subtitle}</div>
        </div>
        <span class="badge-tag" style="background: rgba(139,92,246,0.2); color: #a78bfa;">${item.markerRef || 'ICF Marker'}</span>
      </div>

      <!-- Why Candidates Struggle -->
      <div style="background: rgba(239,68,68,0.1); border-left: 3px solid #ef4444; padding: 12px 16px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 13px; margin-bottom: 16px;">
        <strong style="color: #f87171;">⚠️ Why Candidates Struggle & Fail Assessor Evals:</strong> ${item.whyStruggle}
      </div>

      <!-- ACC vs PCC vs MCC Demonstration Standards -->
      ${item.demonstrationStandards ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; margin-bottom: 16px;">
          <div style="background: rgba(59,130,246,0.1); padding: 10px; border-radius: var(--radius-sm); font-size: 12px;">
            <strong style="color: #3b82f6;">ACC Standard:</strong> ${item.demonstrationStandards.acc}
          </div>
          <div style="background: rgba(139,92,246,0.1); padding: 10px; border-radius: var(--radius-sm); font-size: 12px;">
            <strong style="color: #8b5cf6;">PCC Standard:</strong> ${item.demonstrationStandards.pcc}
          </div>
          <div style="background: rgba(236,72,153,0.1); padding: 10px; border-radius: var(--radius-sm); font-size: 12px;">
            <strong style="color: #ec4899;">MCC Standard:</strong> ${item.demonstrationStandards.mcc}
          </div>
        </div>
      ` : ''}

      <!-- Mentor Coaching Roleplay Drill -->
      <div style="background: rgba(139,92,246,0.12); border: 1px solid rgba(139,92,246,0.3); padding: 14px; border-radius: var(--radius-md); font-size: 13px; margin-bottom: 16px; color: #c084fc;">
        🎯 <strong>Mentor Coaching Practice Drill:</strong> ${item.mentorExercise}
      </div>

      <!-- Dialogue Comparison (Failing vs Passing) -->
      ${item.dialogueComparison ? `
        <div style="background: rgba(15,23,42,0.8); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 14px;">
          <div style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Real Audio Transcript Dialogue Comparison:</div>
          <div style="color: #f87171; font-size: 12px; margin-bottom: 8px; background: rgba(239,68,68,0.1); padding: 8px; border-radius: 4px;">
            ❌ <strong>Failing / Non-Compliant Response:</strong> ${item.dialogueComparison.failing}
          </div>
          <div style="color: #34d399; font-size: 12px; background: rgba(16,185,129,0.1); padding: 8px; border-radius: 4px;">
            ✅ <strong>Passing / ICF Competent Response:</strong> ${item.dialogueComparison.passing}
          </div>
        </div>
      ` : ''}
    </div>
  `).join('');
}

function renderPathways() {
  const container = document.getElementById('pathways-container');
  if (!container || !ICF_DATA.pathways) return;

  container.innerHTML = ICF_DATA.pathways.map(p => `
    <div class="glass-card" style="margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
        <h3 style="font-size: 18px;">${p.name}</h3>
        <span class="cred-badge" style="background: rgba(99,102,241,0.2); color: #818cf8;">Target: ${p.target}</span>
      </div>
      <ol style="padding-left: 20px; font-size: 14px; color: var(--text-main); display: flex; flex-direction: column; gap: 8px;">
        ${p.steps.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>
  `).join('');
}

function renderExamInfo() {
  const box = document.getElementById('exam-info-box');
  if (!box || !ICF_DATA.examInfo) return;

  const info = ICF_DATA.examInfo;
  box.innerHTML = `
    <h3 style="font-size: 20px; margin-bottom: 12px;">${info.title}</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 20px;">
      <div style="background: rgba(15,23,42,0.6); padding: 12px; border-radius: var(--radius-md);">
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Total Questions</div>
        <div style="font-size: 22px; font-weight: 700; color: #818cf8;">${info.totalQuestions} Scenarios</div>
      </div>
      <div style="background: rgba(15,23,42,0.6); padding: 12px; border-radius: var(--radius-md);">
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Exam Duration</div>
        <div style="font-size: 22px; font-weight: 700; color: #34d399;">${info.durationMinutes} Minutes</div>
      </div>
      <div style="background: rgba(15,23,42,0.6); padding: 12px; border-radius: var(--radius-md);">
        <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Passing Scaled Score</div>
        <div style="font-size: 22px; font-weight: 700; color: #fbbf24;">460 / 500</div>
      </div>
    </div>

    <div style="margin-bottom: 16px;">
      <h4 style="font-size: 14px; margin-bottom: 6px;">Key Official Rules:</h4>
      <ul style="padding-left: 20px; font-size: 13px; color: var(--text-muted);">
        ${info.keyRules.map(r => `<li style="margin-bottom: 4px;">${r}</li>`).join('')}
      </ul>
    </div>
  `;
}
