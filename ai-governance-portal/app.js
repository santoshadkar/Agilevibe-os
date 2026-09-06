// State
let currentTab = 'roadmap';
let activeCategoryFilter = 'all';
let activeExamFilter = 'all';
let filteredQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentScenarioIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderRoadmap();
  renderCertifications();
  renderResources();
  initExamSimulator();
  renderScenarioStudio();
});

// Tab Switching
function switchTab(tabId) {
  currentTab = tabId;
  document.querySelectorAll('.tab-view').forEach(view => view.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));

  const activeView = document.getElementById(`view-${tabId}`);
  if (activeView) activeView.classList.add('active');

  const activeBtn = Array.from(document.querySelectorAll('.nav-tab')).find(btn => btn.getAttribute('onclick').includes(tabId));
  if (activeBtn) activeBtn.classList.add('active');
}

// Render Sequential Pathways & Interdependencies
function renderRoadmap() {
  const container = document.getElementById('pathways-container');
  const tbody = document.getElementById('interdependencies-tbody');
  if (!container || !window.roadmapData) return;

  container.innerHTML = window.roadmapData.map(pathway => `
    <div style="background: var(--surface-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.75rem;">
      <div style="margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
        <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--text-main);">${pathway.pathwayName}</h3>
        <div style="font-size: 0.85rem; color: var(--primary-cyan); margin-top: 2px;">
          <i class="fa-solid fa-user-gear"></i> Target Roles: <strong>${pathway.targetRoles}</strong>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; position: relative;">
        ${pathway.steps.map(step => `
          <div style="background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; position: relative;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="badge" style="background: rgba(139, 92, 246, 0.2); color: var(--primary-violet);">STEP ${step.stepNumber}</span>
                <span style="font-size: 0.75rem; color: var(--text-dim);">${step.prereqs}</span>
              </div>
              <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">${step.certName}</h4>
              <div style="font-size: 0.85rem; font-weight: 600; color: var(--primary-cyan); margin-bottom: 8px;">${step.title}</div>
              <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 10px;">${step.purpose}</p>
            </div>
            <div style="background: rgba(16, 185, 129, 0.08); border-left: 2px solid var(--primary-emerald); padding: 6px 10px; border-radius: 0 6px 6px 0; font-size: 0.8rem; color: var(--text-main);">
              <strong>Unlocks:</strong> ${step.unlocks}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  if (tbody && window.interdependenciesData) {
    tbody.innerHTML = window.interdependenciesData.map(row => `
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 12px 10px; font-weight: 700; color: var(--primary-violet);">${row.from}</td>
        <td style="padding: 12px 10px; font-weight: 700; color: var(--primary-cyan);">${row.to}</td>
        <td style="padding: 12px 10px;">
          <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: var(--primary-emerald);">${row.strength}</span>
        </td>
        <td style="padding: 12px 10px; color: var(--text-muted); font-size: 0.85rem;">${row.description}</td>
      </tr>
    `).join('');
  }
}

// Render Certification Cards
function renderCertifications(certsToRender = window.certificationsData) {
  const container = document.getElementById('certs-container');
  if (!container) return;

  if (certsToRender.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No certifications match your criteria.</div>`;
    return;
  }

  container.innerHTML = certsToRender.map(cert => `
    <div class="card">
      <div>
        <div class="card-header">
          <div class="card-title-group">
            <h3>${cert.name}</h3>
            <div class="card-subtitle">${cert.fullTitle}</div>
          </div>
          <span class="badge" style="background: ${cert.badgeColor}20; color: ${cert.badgeColor}; border: 1px solid ${cert.badgeColor}50;">${cert.category}</span>
        </div>

        <div class="card-body">
          ${cert.description}
        </div>

        <div class="prereq-box">
          <div class="prereq-title"><i class="fa-solid fa-lock"></i> Prerequisites & Experience:</div>
          <div style="color: var(--text-main); font-weight: 500;">${cert.prerequisites}</div>
        </div>

        <div style="background: rgba(11, 15, 25, 0.4); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">
          <div><i class="fa-solid fa-coins" style="color: var(--primary-amber);"></i> <strong>Cost:</strong> ${cert.examCost}</div>
          <div style="margin-top: 2px;"><i class="fa-solid fa-arrows-rotate" style="color: var(--primary-cyan);"></i> <strong>Recertification:</strong> ${cert.recertification}</div>
        </div>

        ${cert.connectedTo && cert.connectedTo.length > 0 ? `
          <div class="connected-box">
            <strong style="color: var(--primary-violet);">Bridge Pathway:</strong> ${cert.connectionReason}
          </div>
        ` : ''}

        <!-- Expandable Syllabus Domains -->
        <details style="margin-bottom: 1.25rem; font-size: 0.82rem; color: var(--text-muted);">
          <summary style="cursor: pointer; font-weight: 700; color: var(--primary-cyan);"><i class="fa-solid fa-list-check"></i> View Full Exam Syllabus Domains (${cert.domains.length})</summary>
          <ul style="margin-top: 8px; padding-left: 18px; line-height: 1.5;">
            ${cert.domains.map(d => `<li style="margin-bottom: 4px;">${d}</li>`).join('')}
          </ul>
        </details>
      </div>

      <div>
        <div style="font-size: 0.82rem; color: var(--text-dim); margin-bottom: 0.75rem;">
          <i class="fa-solid fa-graduation-cap"></i> <strong>Exam Format:</strong> ${cert.examStructure}
        </div>
        <div class="card-footer" style="flex-direction: column; gap: 8px; align-items: stretch;">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <a href="${cert.officialUrl}" target="_blank" class="btn" style="flex: 1; text-align: center; text-decoration: none; font-size: 0.8rem; background: rgba(255,255,255,0.05);">
              Official Site <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a href="${cert.handbookUrl}" target="_blank" class="btn" style="flex: 1; text-align: center; text-decoration: none; font-size: 0.8rem; background: rgba(255,255,255,0.05);">
              Handbook <i class="fa-solid fa-book-open"></i>
            </a>
          </div>
          <button class="btn btn-primary" onclick="startExamForCert('${cert.id}')">Practice Sample Questions</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Filtering Certifications
function filterCerts(category, btnElement) {
  activeCategoryFilter = category;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const filtered = category === 'all' 
    ? window.certificationsData 
    : window.certificationsData.filter(c => c.category.toLowerCase() === category.toLowerCase());

  renderCertifications(filtered);
}

function searchCerts() {
  const query = document.getElementById('cert-search').value.toLowerCase();
  const filtered = window.certificationsData.filter(c => 
    c.name.toLowerCase().includes(query) ||
    c.fullTitle.toLowerCase().includes(query) ||
    c.description.toLowerCase().includes(query) ||
    c.prerequisites.toLowerCase().includes(query)
  );
  renderCertifications(filtered);
}

// Render Resources
function renderResources() {
  const container = document.getElementById('resources-container');
  if (!container) return;

  container.innerHTML = window.resourcesData.map(res => `
    <div class="card video-card">
      <div>
        ${res.type === 'video' ? `
          <div class="video-thumbnail">
            <img src="https://img.youtube.com/vi/${res.youtubeId}/hqdefault.jpg" alt="${res.title}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80'">
            <div class="play-icon" onclick="openVideoModal('${res.youtubeId}')"><i class="fa-solid fa-play"></i></div>
          </div>
        ` : `
          <div style="background: rgba(139, 92, 246, 0.1); padding: 1rem; border-radius: var(--radius-md); text-align: center; margin-bottom: 1rem;">
            <i class="fa-solid ${res.type === 'framework' ? 'fa-file-pdf' : 'fa-book'}" style="font-size: 2.5rem; color: var(--primary-violet);"></i>
          </div>
        `}
        <div style="display: flex; gap: 6px; margin-bottom: 6px; flex-wrap: wrap;">
          <span class="badge" style="background: rgba(6, 182, 212, 0.15); color: var(--primary-cyan);">${res.category}</span>
          <span style="font-size: 0.75rem; color: var(--text-dim);">${res.author}</span>
        </div>
        <h3 style="font-size: 1.05rem; margin-bottom: 8px; font-weight: 700;">${res.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5; margin-bottom: 1rem;">${res.description}</p>
      </div>

      <div class="card-footer" style="padding-top: 0.75rem;">
        <span style="font-size: 0.8rem; color: var(--text-dim);">${res.tags.join(' • ')}</span>
        <a href="${res.link}" target="_blank" class="btn" style="text-decoration: none; font-size: 0.8rem;">
          ${res.type === 'video' ? 'Watch Video <i class="fa-solid fa-arrow-up-right-from-square"></i>' : 'Access Resource <i class="fa-solid fa-arrow-up-right-from-square"></i>'}
        </a>
      </div>
    </div>
  `).join('');
}

function openVideoModal(youtubeId) {
  window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
}

// Scenario Studio Engine
function renderScenarioStudio() {
  const box = document.getElementById('scenario-studio-box');
  if (!box || !window.scenariosData) return;

  const sc = window.scenariosData[currentScenarioIndex];

  box.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
      <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: var(--primary-emerald);">${sc.category}</span>
      <span style="font-size: 0.85rem; color: var(--text-muted);">Scenario ${currentScenarioIndex + 1} of ${window.scenariosData.length}</span>
    </div>

    <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-main);">${sc.title}</h3>
    <div style="background: rgba(11, 15, 25, 0.6); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--primary-cyan); margin-bottom: 1rem; font-size: 0.9rem; line-height: 1.5; color: var(--text-muted);">
      <strong>Context:</strong> ${sc.context}
    </div>

    <div style="font-size: 0.95rem; font-weight: 600; margin-bottom: 1.25rem; color: var(--text-main);">
      <strong>Governance Dilemma:</strong> ${sc.dilemma}
    </div>

    <div class="options-list" id="scenario-options">
      ${sc.choices.map((choice, idx) => `
        <button class="option-btn" onclick="evaluateScenarioChoice(${idx})">
          ${choice.text}
        </button>
      `).join('')}
    </div>

    <div id="scenario-feedback" class="explanation-box" style="margin-top: 1rem;"></div>

    <div style="display: flex; justify-content: space-between; margin-top: 1.5rem;">
      <button class="btn" onclick="prevScenario()" ${currentScenarioIndex === 0 ? 'disabled style="opacity:0.5"' : ''}><i class="fa-solid fa-arrow-left"></i> Previous Case</button>
      <button class="btn btn-primary" onclick="nextScenario()" ${currentScenarioIndex === window.scenariosData.length - 1 ? 'disabled style="opacity:0.5"' : ''}>Next Case <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;
}

function evaluateScenarioChoice(choiceIdx) {
  const sc = window.scenariosData[currentScenarioIndex];
  const choice = sc.choices[choiceIdx];
  const feedbackBox = document.getElementById('scenario-feedback');

  const btns = document.querySelectorAll('#scenario-options .option-btn');
  btns.forEach(b => b.style.pointerEvents = 'none');

  if (choice.isCorrect) {
    btns[choiceIdx].classList.add('correct');
  } else {
    btns[choiceIdx].classList.add('incorrect');
  }

  feedbackBox.style.display = 'block';
  feedbackBox.innerHTML = `
    <div class="explanation-title"><i class="fa-solid fa-scale-balanced"></i> Board Assessment & Impact:</div>
    <div style="font-size: 0.9rem; line-height: 1.5; color: var(--text-main); margin-top: 4px;">${choice.feedback}</div>
  `;
}

function nextScenario() {
  if (currentScenarioIndex < window.scenariosData.length - 1) {
    currentScenarioIndex++;
    renderScenarioStudio();
  }
}

function prevScenario() {
  if (currentScenarioIndex > 0) {
    currentScenarioIndex--;
    renderScenarioStudio();
  }
}

// Exam Simulator Engine
function initExamSimulator() {
  currentQuestionIndex = 0;
  score = 0;
  filterExamByCert();
}

function filterExamByCert() {
  const selector = document.getElementById('exam-cert-selector');
  activeExamFilter = selector ? selector.value : 'all';

  if (activeExamFilter === 'all') {
    filteredQuestions = window.questionsData;
  } else {
    filteredQuestions = window.questionsData.filter(q => q.certId === activeExamFilter);
  }

  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
}

function loadQuestion() {
  if (!filteredQuestions || filteredQuestions.length === 0) {
    document.getElementById('quiz-question-text').innerText = 'No sample questions available for this specific certification filter.';
    document.getElementById('quiz-options-container').innerHTML = '';
    return;
  }

  if (currentQuestionIndex >= filteredQuestions.length) {
    showExamResults();
    return;
  }

  const q = filteredQuestions[currentQuestionIndex];
  document.getElementById('quiz-cert-badge').innerText = q.certName;
  document.getElementById('quiz-progress-text').innerText = `Question ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;
  document.getElementById('quiz-score-tracker').innerText = `Score: ${score}`;
  document.getElementById('quiz-question-text').innerText = q.question;

  const optionsContainer = document.getElementById('quiz-options-container');
  optionsContainer.innerHTML = q.options.map((opt, idx) => `
    <button class="option-btn" onclick="selectOption(${idx})">${String.fromCharCode(65 + idx)}. ${opt}</button>
  `).join('');

  document.getElementById('quiz-explanation-box').style.display = 'none';
  document.getElementById('btn-next-question').style.display = 'none';
}

function selectOption(selectedIndex) {
  const q = filteredQuestions[currentQuestionIndex];
  const optionBtns = document.querySelectorAll('.option-btn');

  // Disable buttons
  optionBtns.forEach(btn => btn.style.pointerEvents = 'none');

  if (selectedIndex === q.correctIndex) {
    optionBtns[selectedIndex].classList.add('correct');
    score += 100;
  } else {
    optionBtns[selectedIndex].classList.add('incorrect');
    optionBtns[q.correctIndex].classList.add('correct');
  }

  document.getElementById('quiz-score-tracker').innerText = `Score: ${score}`;
  document.getElementById('quiz-explanation-text').innerHTML = `
    <p style="margin-bottom: 6px;">${q.explanation}</p>
    <div style="font-size: 0.8rem; color: var(--primary-cyan); font-weight: 600;">Reference: ${q.reference}</div>
  `;
  document.getElementById('quiz-explanation-box').style.display = 'block';
  document.getElementById('btn-next-question').style.display = 'block';
}

function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  filterExamByCert();
}

function startExamForCert(certId) {
  const selector = document.getElementById('exam-cert-selector');
  if (selector) selector.value = certId;
  switchTab('exam');
  filterExamByCert();
}

function showExamResults() {
  const container = document.getElementById('quiz-options-container');
  document.getElementById('quiz-question-text').innerText = 'Quiz Completed!';
  document.getElementById('quiz-explanation-box').style.display = 'none';
  document.getElementById('btn-next-question').style.display = 'none';

  container.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <h3 style="font-size: 1.5rem; color: var(--primary-emerald); margin-bottom: 8px;">Great Effort!</h3>
      <p style="color: var(--text-muted); margin-bottom: 1.5rem;">You scored <strong>${score} points</strong> out of ${filteredQuestions.length * 100} max points.</p>
      <button class="btn btn-primary" onclick="resetQuiz()">Retake Exam Simulator</button>
    </div>
  `;
}

// Readiness Calculator Engine
function calculateReadiness() {
  const exp = parseInt(document.getElementById('eval-exp').value);
  const certs = document.getElementById('eval-certs').value;
  const goal = document.getElementById('eval-goal').value;

  let readinessScore = 50;
  let targetCert = 'IAPP AIGP';
  let recommendation = '';

  if (exp >= 5) readinessScore += 25;
  else if (exp >= 3) readinessScore += 15;

  if (certs !== 'none') readinessScore += 20;

  if (goal === 'aigp') {
    targetCert = 'IAPP AIGP (Artificial Intelligence Governance Professional)';
    recommendation = certs === 'cipp' 
      ? 'Outstanding match! Your CIPP privacy foundation gives you an immediate head start on AIGP EU AI Act requirements. Estimated preparation time: 4-6 weeks.'
      : 'Great starting choice! AIGP has no hard experience prerequisite and provides comprehensive legal/policy coverage for AI risk. Estimated study: 6-8 weeks.';
  } else if (goal === 'iso42001') {
    targetCert = 'ISO/IEC 42001 Lead Implementer / Auditor';
    recommendation = exp >= 3 
      ? 'Strong candidacy! Your experience fulfills the 3+ year governance baseline. Focus on ISO 42001 Annex A controls and Clause 6 planning. Estimated preparation: 3-5 weeks.'
      : 'Consider starting with IAPP AIGP or CRISC first to build governance audit experience before sitting for ISO 42001 Lead Auditor.';
  } else if (goal === 'aaism') {
    targetCert = 'ISACA AAISM (Advanced AI Security Management)';
    recommendation = certs === 'cissp' 
      ? 'Perfect progression! CISSP covers infrastructure security, while AAISM tackles adversarial AI attack vectors (LLM prompt injection, model poisoning).'
      : 'We recommend completing CISSP or CISM first to fulfill recommended security prerequisites before attempting AAISM.';
  } else {
    targetCert = 'Foundational Governance Trifecta (CISSP / CIPP / CRISC)';
    recommendation = 'Build your foundational security, privacy, or risk credentials first. CISSP for cybersecurity, CIPP for data privacy, or CRISC for IT risk.';
  }

  document.getElementById('result-title').innerText = `Target Recommendation: ${targetCert}`;
  document.getElementById('result-score').innerText = `${Math.min(readinessScore, 98)}% Readiness Score`;
  document.getElementById('result-desc').innerText = recommendation;
  document.getElementById('readiness-result').style.display = 'block';
}
