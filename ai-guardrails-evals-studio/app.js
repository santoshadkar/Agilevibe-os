// Nexus GuardEval Studio - Core Application Logic

document.addEventListener('DOMContentLoaded', () => {
  const data = window.GuardEvalData;
  if (!data) return;

  // Track active tab and playground state
  let currentTab = 'intro';
  let activePreset = data.samplePrompts[0];

  // Tab Navigation Handler
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabTarget = item.getAttribute('data-tab');
      if (!tabTarget) return;

      navItems.forEach(n => n.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      item.classList.add('active');
      const targetPane = document.getElementById(`tab-${tabTarget}`);
      if (targetPane) targetPane.classList.add('active');

      currentTab = tabTarget;
    });
  });

  // Init Playground Presets
  const presetContainer = document.getElementById('preset-buttons');
  if (presetContainer) {
    presetContainer.innerHTML = '';
    data.samplePrompts.forEach((p, idx) => {
      const btn = document.createElement('button');
      btn.className = `preset-btn ${idx === 0 ? 'active' : ''}`;
      btn.innerText = p.title;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activePreset = p;
        loadPresetIntoPlayground(p);
      });
      presetContainer.appendChild(btn);
    });
  }

  function loadPresetIntoPlayground(preset) {
    const promptInput = document.getElementById('prompt-input');
    const contextInput = document.getElementById('context-input');
    if (promptInput) promptInput.value = preset.prompt;
    if (contextInput) contextInput.value = preset.context;
    executeGuardrailsPipeline(preset.prompt, preset.context);
  }

  // Execute Guardrail Engine Simulation
  const runBtn = document.getElementById('run-guardrails-btn');
  if (runBtn) {
    runBtn.addEventListener('click', () => {
      const promptInput = document.getElementById('prompt-input');
      const contextInput = document.getElementById('context-input');
      const prompt = promptInput ? promptInput.value : '';
      const context = contextInput ? contextInput.value : '';
      executeGuardrailsPipeline(prompt, context);
    });
  }

  function executeGuardrailsPipeline(promptText, contextText) {
    const pipelineContainer = document.getElementById('pipeline-nodes');
    const outcomeBox = document.getElementById('guardrail-outcome');
    if (!pipelineContainer || !outcomeBox) return;

    pipelineContainer.innerHTML = '';
    const lowerPrompt = promptText.toLowerCase();

    // Check rules
    let isBlocked = false;
    let isMasked = false;
    let blockedRule = '';
    let transformedText = promptText;
    const nodeResults = [];

    // 1. Prompt Injection
    const injectionMatch = data.guardrails.find(g => g.id === 'prompt_injection').patterns.some(pat => lowerPrompt.includes(pat));
    if (injectionMatch) {
      isBlocked = true;
      blockedRule = 'Prompt Injection Shield';
      nodeResults.push({ name: 'Prompt Injection Shield', icon: '🛡️', status: 'block', desc: 'Detected jailbreak attempt pattern' });
    } else {
      nodeResults.push({ name: 'Prompt Injection Shield', icon: '🛡️', status: 'pass', desc: 'Passed pattern & embedding check' });
    }

    // 2. PII Redactor
    if (lowerPrompt.includes('ssn') || lowerPrompt.includes('123-45-6789') || lowerPrompt.includes('email')) {
      isMasked = true;
      transformedText = transformedText
        .replace(/123-45-6789/g, '[REDACTED_SSN]')
        .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[REDACTED_EMAIL]')
        .replace(/\+1\s\d{3}-\d{4}/g, '[REDACTED_PHONE]');
      nodeResults.push({ name: 'PII Redactor & Masker', icon: '🔒', status: 'mask', desc: 'Anonymized sensitive PII data' });
    } else {
      nodeResults.push({ name: 'PII Redactor & Masker', icon: '🔒', status: 'pass', desc: 'No sensitive PII detected' });
    }

    // 3. Hallucination check (if RAG)
    if (lowerPrompt.includes('q4 2025 revenue')) {
      nodeResults.push({ name: 'Factuality & Hallucination Guard', icon: '🧠', status: 'block', desc: 'Claim unverified by provided context' });
      isBlocked = true;
      blockedRule = 'Factuality & Hallucination Guard';
    } else {
      nodeResults.push({ name: 'Factuality & Hallucination Guard', icon: '🧠', status: 'pass', desc: 'Entailment score 0.94' });
    }

    // 4. Schema Validator
    nodeResults.push({ name: 'JSON Schema Enforcer', icon: '📄', status: 'pass', desc: 'Valid output format' });

    // Render pipeline nodes UI
    nodeResults.forEach(res => {
      const div = document.createElement('div');
      div.className = `pipeline-node ${res.status}`;
      div.innerHTML = `
        <div class="node-info">
          <span class="node-icon">${res.icon}</span>
          <div>
            <div class="node-name">${res.name}</div>
            <div class="node-desc">${res.desc}</div>
          </div>
        </div>
        <span class="node-badge ${res.status}">${res.status.toUpperCase()}</span>
      `;
      pipelineContainer.appendChild(div);
    });

    // Render Final Outcome
    if (isBlocked) {
      outcomeBox.className = 'outcome-box blocked';
      outcomeBox.innerHTML = `
        <div style="color: var(--accent-rose); font-weight: 700; margin-bottom: 6px;">⛔ REQUEST REFUSED BY GUARDRAILS PIPELINE</div>
        <div><strong>Triggered Guard:</strong> ${blockedRule}</div>
        <div><strong>Action:</strong> Request terminated. Latency overhead: 12ms.</div>
        <div style="margin-top: 8px; color: var(--text-muted); font-size: 12px;">Refusal Message: "I am unable to process this request as it violates safety and security policies."</div>
      `;
    } else if (isMasked) {
      outcomeBox.className = 'outcome-box passed';
      outcomeBox.innerHTML = `
        <div style="color: var(--accent-amber); font-weight: 700; margin-bottom: 6px;">⚠️ PASSED WITH PII MASKING MODIFICATION</div>
        <div><strong>Sanitized Input Payload:</strong></div>
        <div style="color: var(--accent-cyan); margin-top: 4px;">"${transformedText}"</div>
        <div style="margin-top: 8px; color: var(--text-muted); font-size: 12px;">Model received anonymized context. Total Latency: 16ms.</div>
      `;
    } else {
      outcomeBox.className = 'outcome-box passed';
      outcomeBox.innerHTML = `
        <div style="color: var(--accent-emerald); font-weight: 700; margin-bottom: 6px;">✅ PASSED ALL GUARDRAIL CHECKS</div>
        <div><strong>Clean Payload Executed:</strong></div>
        <div style="color: #ffffff; margin-top: 4px;">"${promptText}"</div>
        <div style="margin-top: 8px; color: var(--text-muted); font-size: 12px;">Passed to LLM engine cleanly. Total Overhead Latency: 9ms.</div>
      `;
    }
  }

  // Load initial preset
  if (data.samplePrompts.length > 0) {
    loadPresetIntoPlayground(data.samplePrompts[0]);
  }

  // Render Evals Tables & Benchmarks
  renderIntroPage();
  renderEvalsTab();
  renderPolicyRules();
  renderCodeExporter();
  renderTelemetry();

  function renderIntroPage() {
    const intro = data.introData;
    if (!intro) return;

    // 1. Render Analogies Container
    const analogiesContainer = document.getElementById('analogies-container');
    if (analogiesContainer && intro.analogies) {
      analogiesContainer.innerHTML = '';
      intro.analogies.forEach(a => {
        const card = document.createElement('div');
        card.className = 'card pillar-card';
        card.innerHTML = `
          <div>
            <div class="pillar-header">
              <div class="card-title">
                <span style="font-size: 24px;">${a.icon}</span>
                <span style="font-size: 18px; font-weight: 700;">${a.concept}</span>
              </div>
              <span class="pillar-badge">${a.analogyTitle}</span>
            </div>
            <p style="color: var(--text-muted); font-size: 14px; line-height: 1.6;">${a.analogyText}</p>
          </div>
        `;
        analogiesContainer.appendChild(card);
      });
    }

    // 2. Render Side-by-Side Comparison Table
    const tableBody = document.getElementById('comparison-table-body');
    if (tableBody && intro.comparisonMatrix) {
      tableBody.innerHTML = '';
      intro.comparisonMatrix.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td style="font-weight: 700; color: #ffffff;">${row.feature}</td>
          <td style="color: var(--accent-cyan); font-weight: 500;">${row.guardrails}</td>
          <td style="color: #b76eff; font-weight: 500;">${row.evals}</td>
        `;
        tableBody.appendChild(tr);
      });
    }

    // 3. Render Guardrail Anatomy Deep Dive
    const inputGuardsList = document.getElementById('input-guards-list');
    const outputGuardsList = document.getElementById('output-guards-list');

    if (inputGuardsList && intro.guardrailDeepDive) {
      inputGuardsList.innerHTML = '';
      intro.guardrailDeepDive.inputGuards.forEach(g => {
        const div = document.createElement('div');
        div.style.cssText = 'background: rgba(10, 14, 23, 0.8); border: 1px solid var(--border-subtle); padding: 14px; border-radius: var(--radius-sm);';
        div.innerHTML = `
          <div style="font-weight: 700; font-size: 14px; color: var(--accent-cyan); margin-bottom: 4px;">${g.icon} ${g.name}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">${g.whatItIs}</div>
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--text-dim); background: rgba(0,0,0,0.4); padding: 6px 10px; border-radius: 4px; margin-bottom: 4px;"><strong>Input:</strong> ${g.exampleBefore}</div>
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-emerald);"><strong>Action:</strong> ${g.actionTaken}</div>
        `;
        inputGuardsList.appendChild(div);
      });
    }

    if (outputGuardsList && intro.guardrailDeepDive) {
      outputGuardsList.innerHTML = '';
      intro.guardrailDeepDive.outputGuards.forEach(g => {
        const div = document.createElement('div');
        div.style.cssText = 'background: rgba(10, 14, 23, 0.8); border: 1px solid var(--border-subtle); padding: 14px; border-radius: var(--radius-sm);';
        div.innerHTML = `
          <div style="font-weight: 700; font-size: 14px; color: #b76eff; margin-bottom: 4px;">${g.icon} ${g.name}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">${g.whatItIs}</div>
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--text-dim); background: rgba(0,0,0,0.4); padding: 6px 10px; border-radius: 4px; margin-bottom: 4px;"><strong>Output:</strong> ${g.exampleBefore}</div>
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-amber);"><strong>Action:</strong> ${g.actionTaken}</div>
        `;
        outputGuardsList.appendChild(div);
      });
    }

    // 4. Render RAG Triad Grid
    const ragGrid = document.getElementById('rag-triad-grid');
    if (ragGrid && intro.evalsDeepDive) {
      ragGrid.innerHTML = '';
      intro.evalsDeepDive.ragTriad.forEach(tri => {
        const card = document.createElement('div');
        card.className = 'card metric-widget';
        card.innerHTML = `
          <div style="font-size: 26px; margin-bottom: 6px;">${tri.icon}</div>
          <div style="font-size: 15px; font-weight: 700; color: #ffffff;">${tri.name}</div>
          <div style="font-size: 13px; color: var(--text-muted); margin: 6px 0;">${tri.question}</div>
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-cyan); background: rgba(0,242,254,0.08); padding: 6px 10px; border-radius: 4px;">Formula: ${tri.formula}</div>
          <div style="font-size: 12px; color: var(--accent-emerald); font-weight: 700; margin-top: 8px;">Target Goal: ${tri.target}</div>
        `;
        ragGrid.appendChild(card);
      });
    }

    // 5. Render Eval Methods Grid
    const methodsGrid = document.getElementById('eval-methods-grid');
    if (methodsGrid && intro.evalsDeepDive) {
      methodsGrid.innerHTML = '';
      intro.evalsDeepDive.evalMethods.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card metric-widget';
        card.innerHTML = `
          <div style="font-size: 26px; margin-bottom: 6px;">${m.icon}</div>
          <div style="font-size: 15px; font-weight: 700; color: #ffffff; margin-bottom: 6px;">${m.title}</div>
          <div style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">${m.desc}</div>
        `;
        methodsGrid.appendChild(card);
      });
    }

    // 6. Render Why Used Grid
    const whyGrid = document.getElementById('why-used-grid');
    if (whyGrid) {
      whyGrid.innerHTML = '';
      intro.whyUsed.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card metric-widget';
        card.innerHTML = `
          <div style="font-size: 28px; margin-bottom: 8px;">${item.icon}</div>
          <div style="font-size: 15px; font-weight: 700; color: #ffffff; margin-bottom: 6px;">${item.title}</div>
          <div style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">${item.desc}</div>
        `;
        whyGrid.appendChild(card);
      });
    }

    // 7. Render Industry Use Cases Grid
    const useCaseGrid = document.getElementById('use-cases-grid');
    if (useCaseGrid) {
      useCaseGrid.innerHTML = '';
      intro.useCases.forEach(uc => {
        const card = document.createElement('div');
        card.className = 'usecase-card';
        card.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 24px;">${uc.icon}</span>
              <div>
                <div style="font-weight: 700; font-size: 15px; color: #ffffff;">${uc.domain}</div>
                <div style="font-size: 12px; color: var(--accent-cyan); font-weight: 600;">${uc.scenario}</div>
              </div>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; margin-top: 12px;">
            <div style="background: rgba(0, 242, 254, 0.06); padding: 10px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-cyan);">
              <strong style="color: var(--accent-cyan);">Guardrails Role:</strong> ${uc.guardrailsRole}
            </div>
            <div style="background: rgba(127, 0, 255, 0.06); padding: 10px; border-radius: var(--radius-sm); border-left: 3px solid #b76eff;">
              <strong style="color: #b76eff;">Evals Role:</strong> ${uc.evalsRole}
            </div>
          </div>
        `;
        useCaseGrid.appendChild(card);
      });
    }
  }

  function renderEvalsTab() {
    const evalsContainer = document.getElementById('evals-content');
    if (!evalsContainer) return;

    evalsContainer.innerHTML = '';
    data.evalSuites.forEach(suite => {
      const card = document.createElement('div');
      card.className = `card`;
      card.style.marginBottom = '24px';

      let bodyHTML = `
        <div class="card-header">
          <div>
            <h3 class="card-title">${suite.name}</h3>
            <p style="color: var(--text-muted); font-size: 13px; margin-top: 4px;">${suite.description}</p>
          </div>
        </div>
      `;

      if (suite.metrics) {
        bodyHTML += `
          <table class="eval-table">
            <thead>
              <tr>
                <th>Metric Name</th>
                <th>Measured Score</th>
                <th>Target Threshold</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
        `;
        suite.metrics.forEach(m => {
          bodyHTML += `
            <tr>
              <td style="font-weight: 600;">${m.name}</td>
              <td>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="font-family: var(--font-mono); font-weight: 700;">${m.score}${m.unit}</span>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${Math.min(m.score, 100)}%;"></div>
                  </div>
                </div>
              </td>
              <td style="color: var(--text-dim); font-family: var(--font-mono);">${m.target}${m.unit}</td>
              <td><span class="node-badge ${m.status}">${m.status.toUpperCase()}</span></td>
            </tr>
          `;
        });
        bodyHTML += `</tbody></table>`;
      } else if (suite.models) {
        bodyHTML += `
          <table class="eval-table">
            <thead>
              <tr>
                <th>LLM Candidate</th>
                <th>Accuracy Score</th>
                <th>Avg Latency</th>
                <th>Cost / 1k Tokens</th>
                <th>Judge Grade</th>
              </tr>
            </thead>
            <tbody>
        `;
        suite.models.forEach(mod => {
          bodyHTML += `
            <tr>
              <td style="font-weight: 700; color: var(--accent-cyan);">${mod.name}</td>
              <td style="font-family: var(--font-mono);">${mod.accuracy}%</td>
              <td style="font-family: var(--font-mono);">${mod.latency}</td>
              <td style="font-family: var(--font-mono);">${mod.costPer1k}</td>
              <td><span class="node-badge pass" style="font-size: 14px;">${mod.overallGrade}</span></td>
            </tr>
          `;
        });
        bodyHTML += `</tbody></table>`;
      }

      card.innerHTML = bodyHTML;
      evalsContainer.appendChild(card);
    });
  }

  function renderPolicyRules() {
    const rulesContainer = document.getElementById('policy-rules-list');
    if (!rulesContainer) return;

    rulesContainer.innerHTML = '';
    data.guardrails.forEach(g => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-header">
          <div class="card-title">
            <span>${g.icon}</span>
            <span>${g.name}</span>
          </div>
          <span class="node-badge pass">${g.category}</span>
        </div>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">${g.description}</p>
        <div class="input-group">
          <label>Confidence Threshold Cutoff</label>
          <div class="slider-container">
            <input type="range" class="custom-slider" min="0.5" max="1.0" step="0.05" value="${g.threshold}" id="slider-${g.id}">
            <span class="slider-val" id="val-${g.id}">${g.threshold}</span>
          </div>
        </div>
      `;
      rulesContainer.appendChild(card);

      const slider = card.querySelector(`#slider-${g.id}`);
      const valSpan = card.querySelector(`#val-${g.id}`);
      if (slider && valSpan) {
        slider.addEventListener('input', (e) => {
          valSpan.innerText = e.target.value;
          g.threshold = parseFloat(e.target.value);
        });
      }
    });
  }

  function renderCodeExporter() {
    const codeEl = document.getElementById('export-code-snippet');
    if (!codeEl) return;

    codeEl.textContent = `
# GuardEval Studio - Enterprise Guardrails Integration
# Install: pip install guardrails-ai langchain-google-genai

from guardrails import Guard
from guardrails.hub import PromptInjection, PIIMasking, HallucinationChecker

# Initialize Enterprise Guardrail Pipeline
guard = Guard().use_many(
    PromptInjection(threshold=0.85, on_fail="exception"),
    PIIMasking(mask_pattern="[REDACTED_PII]", on_fail="fix"),
    HallucinationChecker(threshold=0.75, on_fail="refuse")
)

def run_protected_llm_pipeline(user_prompt: str, context: str):
    try:
        # Validate Input Prompt
        validated_prompt = guard.validate(user_prompt)
        print("✅ Input Guardrails Passed:", validated_prompt)
        
        # Execute LLM Call (e.g. Gemini 1.5 Pro)
        # response = model.generate_content(validated_prompt)
        
        return {"status": "success", "data": "Protected LLM response"}
        
    except Exception as e:
        return {"status": "blocked", "reason": str(e)}
`;
  }

  function renderTelemetry() {
    const t = data.telemetry;
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.innerText = val;
    };

    setVal('stat-total-req', t.totalRequests.toLocaleString());
    setVal('stat-blocked', t.blockedAttacks.toLocaleString());
    setVal('stat-pii', t.maskedPiiCount.toLocaleString());
    setVal('stat-latency', `${t.avgLatencyAddedMs} ms`);
    setVal('stat-pass-rate', `${t.passRate}%`);
  }
});
