/**
 * Client Application Logic for AI Job Intelligence Portal & Auto-Apply Agent
 */

let state = {
  jobs: [],
  cv: null,
  settings: null,
  activeTab: 'feed',
  filters: {
    search: '',
    category: 'All',
    location: 'All',
    workType: 'All',
    minScore: 0,
    highMatchOnly: false
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  await fetchCandidateCV();
  await fetchSettings();
  await fetchJobsFeed();
  await loadStatsAndLogs();
  await fetchTrackerData();
  await fetchEmailLogs();
}

async function fetchCandidateCV() {
  try {
    const res = await fetch('/api/cv');
    const data = await res.json();
    if (data.success && data.cv) {
      state.cv = data.cv;
      populateCVForm(data.cv);
    }
  } catch (err) {
    console.error("Error fetching CV:", err);
  }
}

function populateCVForm(cv) {
  document.getElementById('cv-name').value = cv.name || '';
  document.getElementById('cv-title').value = cv.title || '';
  document.getElementById('cv-summary').value = cv.summary || '';
  document.getElementById('cv-skills').value = (cv.skills || []).join(', ');
  document.getElementById('cv-certifications').value = (cv.certifications || []).join(', ');
}

async function saveCVProfile() {
  const name = document.getElementById('cv-name').value;
  const title = document.getElementById('cv-title').value;
  const summary = document.getElementById('cv-summary').value;
  const skillsRaw = document.getElementById('cv-skills').value;
  const certsRaw = document.getElementById('cv-certifications').value;

  const cvData = {
    ...state.cv,
    name,
    title,
    summary,
    skills: skillsRaw.split(',').map(s => s.trim()).filter(Boolean),
    certifications: certsRaw.split(',').map(s => s.trim()).filter(Boolean)
  };

  try {
    const res = await fetch('/api/cv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cvData)
    });
    const data = await res.json();
    if (data.success) {
      alert("✅ CV Profile saved! Re-evaluating interview match scores...");
      await fetchJobsFeed();
      await loadStatsAndLogs();
      switchTab('feed');
    }
  } catch (err) {
    alert("Error saving CV: " + err.message);
  }
}

async function fetchSettings() {
  try {
    const res = await fetch('/api/settings');
    const data = await res.json();
    if (data.success && data.settings) {
      state.settings = data.settings;
      populateSettingsForm(data.settings);
    }
  } catch (err) {
    console.error("Error fetching settings:", err);
  }
}

function populateSettingsForm(s) {
  document.getElementById('setting-user-email').value = s.userEmail || '';
  document.getElementById('setting-auto-apply-enabled').checked = s.autoApplyEnabled !== false;
  document.getElementById('setting-min-score').value = String(s.minAutoApplyScore || 80);
  document.getElementById('setting-smtp-host').value = s.smtpHost || '';
  document.getElementById('setting-smtp-port').value = s.smtpPort || 587;
  document.getElementById('setting-smtp-user').value = s.smtpUser || '';
  document.getElementById('setting-smtp-pass').value = s.smtpPass || '';
}

async function saveSettingsForm() {
  const userEmail = document.getElementById('setting-user-email').value;
  const autoApplyEnabled = document.getElementById('setting-auto-apply-enabled').checked;
  const minAutoApplyScore = parseInt(document.getElementById('setting-min-score').value, 10) || 80;
  const smtpHost = document.getElementById('setting-smtp-host').value;
  const smtpPort = parseInt(document.getElementById('setting-smtp-port').value, 10) || 587;
  const smtpUser = document.getElementById('setting-smtp-user').value;
  const smtpPass = document.getElementById('setting-smtp-pass').value;

  const newSettings = {
    ...state.settings,
    userEmail,
    autoApplyEnabled,
    minAutoApplyScore,
    smtpConfigured: Boolean(smtpUser && smtpPass),
    smtpHost,
    smtpPort,
    smtpUser,
    smtpPass
  };

  try {
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSettings)
    });
    const data = await res.json();
    if (data.success) {
      alert("✅ Settings saved! Recipient email alerts configured for " + userEmail);
      state.settings = data.settings;
    }
  } catch (err) {
    alert("Error saving settings: " + err.message);
  }
}

async function fetchJobsFeed() {
  try {
    const queryParams = new URLSearchParams();
    if (state.filters.category !== 'All') queryParams.append('category', state.filters.category);
    if (state.filters.location !== 'All') queryParams.append('location', state.filters.location);
    if (state.filters.workType !== 'All') queryParams.append('workType', state.filters.workType);
    if (state.filters.search) queryParams.append('search', state.filters.search);
    if (state.filters.minScore > 0) queryParams.append('minScore', state.filters.minScore);
    if (state.filters.highMatchOnly) queryParams.append('highMatchOnly', 'true');

    const res = await fetch(`/api/jobs?${queryParams.toString()}`);
    const data = await res.json();

    if (data.success) {
      state.jobs = data.jobs;
      renderJobsGrid(state.jobs);
    }
  } catch (err) {
    console.error("Error fetching jobs:", err);
  }
}

async function loadStatsAndLogs() {
  try {
    const res = await fetch('/api/stats');
    const data = await res.json();
    if (data.success) {
      document.getElementById('metric-total-jobs').innerText = data.totalJobs;
      document.getElementById('metric-high-match').innerText = data.highMatchCount;
      document.getElementById('metric-auto-applied').innerText = data.autoAppliedCount || data.appliedCount;

      if (data.lastScrapeTime) {
        const d = new Date(data.lastScrapeTime);
        document.getElementById('metric-last-run').innerText = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }

      renderLogsTable(data.recentLogs || []);
      renderEmailLogsTable(data.recentEmailLogs || []);
    }
  } catch (err) {
    console.error("Error loading stats:", err);
  }
}

async function triggerScraperRun() {
  const btn = document.querySelector('.header-actions .btn-secondary');
  const originalText = btn.innerText;
  btn.innerText = "⏳ Scraping India Portals...";
  btn.disabled = true;

  try {
    const res = await fetch('/api/jobs/scrape', { method: 'POST' });
    const data = await res.json();
    if (data.success) {
      let msg = `🎉 Scraping complete! Found ${data.newJobsScraped} new postings across LinkedIn India, Naukri, Foundit & Glassdoor.`;
      if (data.autoApplyResult && data.autoApplyResult.totalAutoApplied > 0) {
        msg += `\n🤖 Auto-applied for ${data.autoApplyResult.totalAutoApplied} high-match jobs and dispatched confirmation emails!`;
      }
      alert(msg);
      await fetchJobsFeed();
      await loadStatsAndLogs();
      await fetchTrackerData();
      await fetchEmailLogs();
    }
  } catch (err) {
    alert("Error executing scraper: " + err.message);
  } finally {
    btn.innerText = originalText;
    btn.disabled = false;
  }
}

async function triggerAutoApplyRun() {
  const btn = document.querySelector('.header-actions .btn-primary');
  const originalText = btn.innerText;
  btn.innerText = "⏳ AI Auto-Applying...";
  btn.disabled = true;

  try {
    const res = await fetch('/api/auto-apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ minScore: state.settings ? state.settings.minAutoApplyScore : 80 })
    });
    const data = await res.json();
    if (data.success) {
      if (data.totalAutoApplied > 0) {
        alert(`🤖 Auto-Apply Success!\nApplied on your behalf for ${data.totalAutoApplied} high-probability jobs!\nConfirmation emails logged and sent to ${state.settings.userEmail || 'your inbox'}.`);
      } else {
        alert("ℹ️ All high-match jobs have already been applied for! No pending high-match jobs.");
      }
      await fetchJobsFeed();
      await loadStatsAndLogs();
      await fetchTrackerData();
      await fetchEmailLogs();
    }
  } catch (err) {
    alert("Error executing auto-apply: " + err.message);
  } finally {
    btn.innerText = originalText;
    btn.disabled = false;
  }
}

function applyFilters() {
  state.filters.search = document.getElementById('input-search').value;
  state.filters.category = document.getElementById('select-category').value;
  state.filters.location = document.getElementById('select-location') ? document.getElementById('select-location').value : 'All';
  state.filters.workType = document.getElementById('select-worktype').value;
  state.filters.minScore = parseInt(document.getElementById('select-minscore').value, 10) || 0;

  fetchJobsFeed();
}

function switchTab(tabName) {
  state.activeTab = tabName;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
  });

  const jobsSec = document.getElementById('tab-jobs-section');
  const cvSec = document.getElementById('tab-cv-section');
  const trackerSec = document.getElementById('tab-tracker-section');
  const emailSec = document.getElementById('tab-email-config-section');
  const schedulerSec = document.getElementById('tab-scheduler-section');

  jobsSec.classList.add('hidden');
  cvSec.classList.add('hidden');
  trackerSec.classList.add('hidden');
  emailSec.classList.add('hidden');
  schedulerSec.classList.add('hidden');

  if (tabName === 'feed') {
    state.filters.highMatchOnly = false;
    document.getElementById('select-minscore').value = "0";
    jobsSec.classList.remove('hidden');
    fetchJobsFeed();
  } else if (tabName === 'high-match') {
    state.filters.highMatchOnly = true;
    document.getElementById('select-minscore').value = "80";
    jobsSec.classList.remove('hidden');
    fetchJobsFeed();
  } else if (tabName === 'cv') {
    cvSec.classList.remove('hidden');
  } else if (tabName === 'tracker') {
    trackerSec.classList.remove('hidden');
    fetchTrackerData();
  } else if (tabName === 'email-config') {
    emailSec.classList.remove('hidden');
    fetchEmailLogs();
  } else if (tabName === 'scheduler') {
    schedulerSec.classList.remove('hidden');
    loadStatsAndLogs();
  }
}

function renderJobsGrid(jobs) {
  const container = document.getElementById('jobs-container');
  if (!jobs || jobs.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍 No matching job postings found</p>
        <p style="font-size: 0.9rem;">Try clearing search filters or click <strong>'Refresh Jobs'</strong> to trigger the aggregator scraper.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = jobs.map(job => {
    const match = job.match || {};
    const scoreColor = match.probabilityColor || '#10b981';
    const isHigh = match.isHighMatch;

    const matchedTags = (match.matchedSkills || []).slice(0, 4).map(s => `<span class="skill-tag">${s}</span>`).join('');
    const missingTags = (match.missingSkills || []).slice(0, 2).map(s => `<span class="skill-tag missing">Need: ${s}</span>`).join('');

    const adviceSnippet = isHigh && match.recommendations && match.recommendations.length > 0
      ? `<div class="advice-box">💡 <strong>Interview Call Tip:</strong> ${match.recommendations[0]}</div>`
      : '';

    const isApplied = job.userStatus === 'Applied';

    return `
      <div class="job-card">
        <div>
          <div class="job-card-header">
            <div>
              <div class="job-title">${escapeHtml(job.title)}</div>
              <div class="job-company">
                <span>🏢 ${escapeHtml(job.company)}</span>
                <span class="portal-tag">${escapeHtml(job.portal)}</span>
              </div>
            </div>

            <div class="match-score-badge">
              <div class="score-circle" style="background: ${scoreColor};">
                ${match.matchScore || 0}%
              </div>
              <span class="probability-label" style="background: ${scoreColor}22; color: ${scoreColor}; border: 1px solid ${scoreColor}44;">
                ${match.callProbability || 'Match'} Call
              </span>
            </div>
          </div>

          <div class="job-meta">
            <span class="meta-pill">📌 ${escapeHtml(job.category)}</span>
            <span class="meta-pill">📍 ${escapeHtml(job.location)}</span>
            <span class="meta-pill">💵 ${escapeHtml(job.salary || 'Competitive')}</span>
          </div>

          ${adviceSnippet}

          <div class="job-skills">
            ${matchedTags}
            ${missingTags}
          </div>
        </div>

        <div class="job-card-footer">
          <select class="status-selector" onchange="updateJobStatus('${job.id}', this.value)">
            <option value="New" ${job.userStatus === 'New' ? 'selected' : ''}>Status: New</option>
            <option value="Saved" ${job.userStatus === 'Saved' ? 'selected' : ''}>⭐ Saved</option>
            <option value="Applied" ${job.userStatus === 'Applied' ? 'selected' : ''}>🚀 Applied</option>
            <option value="Interviewing" ${job.userStatus === 'Interviewing' ? 'selected' : ''}>🎯 Interviewing</option>
            <option value="Offered" ${job.userStatus === 'Offered' ? 'selected' : ''}>🎉 Offered</option>
          </select>

          <div style="display: flex; gap: 0.4rem;">
            ${!isApplied ? `
              <button class="btn btn-primary" style="padding: 0.35rem 0.65rem; font-size: 0.78rem;" onclick="applyOnBehalf('${job.id}')">
                ⚡ Auto-Apply
              </button>
            ` : `
              <span style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700; align-self: center;">
                ✓ Applied & Emailed
              </span>
            `}
            <button class="btn btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.78rem;" onclick="openJobModal('${job.id}')">
              Details
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

async function applyOnBehalf(jobId) {
  try {
    const res = await fetch('/api/tracker', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobId, newStatus: 'Applied', triggerEmail: true })
    });
    const data = await res.json();
    if (data.success) {
      const email = state.settings ? state.settings.userEmail : 'your inbox';
      alert(`🤖 Application Submitted!\nThe AI Agent applied for this job using your CV profile.\nA confirmation email has been logged and sent to ${email}.`);
      await fetchJobsFeed();
      await loadStatsAndLogs();
      await fetchEmailLogs();
    }
  } catch (err) {
    alert("Error applying: " + err.message);
  }
}

async function updateJobStatus(jobId, newStatus) {
  try {
    const res = await fetch('/api/tracker', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobId, newStatus, triggerEmail: newStatus === 'Applied' })
    });
    const data = await res.json();
    if (data.success) {
      await loadStatsAndLogs();
      if (state.activeTab === 'tracker') {
        await fetchTrackerData();
      }
    }
  } catch (err) {
    console.error("Error updating status:", err);
  }
}

async function fetchTrackerData() {
  try {
    const res = await fetch('/api/tracker');
    const data = await res.json();
    if (data.success && data.jobsByStatus) {
      renderKanbanColumn('col-saved', 'count-saved', data.jobsByStatus.saved);
      renderKanbanColumn('col-applied', 'count-applied', data.jobsByStatus.applied);
      renderKanbanColumn('col-interviewing', 'count-interviewing', data.jobsByStatus.interviewing);
      renderKanbanColumn('col-offered', 'count-offered', data.jobsByStatus.offered);
    }
  } catch (err) {
    console.error("Error fetching tracker:", err);
  }
}

function renderKanbanColumn(containerId, countId, jobs) {
  document.getElementById(countId).innerText = jobs.length;
  const container = document.getElementById(containerId);

  if (jobs.length === 0) {
    container.innerHTML = `<div style="padding: 1.5rem 0.5rem; text-align: center; color: var(--text-dim); font-size: 0.8rem;">No jobs added yet</div>`;
    return;
  }

  container.innerHTML = jobs.map(job => `
    <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-glass); border-radius: 8px; padding: 0.85rem; margin-bottom: 0.75rem;">
      <div style="font-weight: 700; font-size: 0.9rem; color: #fff;">${escapeHtml(job.title)}</div>
      <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.5rem;">${escapeHtml(job.company)}</div>
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem;">
        <span style="color: ${job.match.probabilityColor}; font-weight: 700;">${job.match.matchScore}% Match</span>
        <a href="${job.url}" target="_blank" style="color: var(--primary-light); text-decoration: none;">Apply ↗</a>
      </div>
    </div>
  `).join('');
}

async function fetchEmailLogs() {
  try {
    const res = await fetch('/api/email-logs');
    const data = await res.json();
    if (data.success) {
      renderEmailLogsTable(data.logs || []);
    }
  } catch (err) {
    console.error("Error fetching email logs:", err);
  }
}

function renderEmailLogsTable(logs) {
  const tbody = document.getElementById('email-logs-table-body');
  if (!tbody) return;

  if (!logs || logs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-dim);">No auto-apply confirmation emails logged yet</td></tr>`;
    return;
  }

  tbody.innerHTML = logs.map(log => {
    const timeStr = new Date(log.timestamp).toLocaleString();
    return `
      <tr>
        <td>${timeStr}</td>
        <td><strong>${escapeHtml(log.jobTitle)}</strong><br><span style="font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(log.company)}</span></td>
        <td><span style="color: var(--accent-emerald); font-weight: 800;">${log.matchScore}%</span></td>
        <td>${escapeHtml(log.recipient)}</td>
        <td style="font-size: 0.8rem; color: var(--primary-light);">${escapeHtml(log.subject)}</td>
      </tr>
    `;
  }).join('');
}

function renderLogsTable(logs) {
  const tbody = document.getElementById('logs-table-body');
  if (!tbody) return;

  if (!logs || logs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-dim);">No scraper logs recorded yet</td></tr>`;
    return;
  }

  tbody.innerHTML = logs.map(log => {
    const timeStr = new Date(log.timestamp).toLocaleString();
    return `
      <tr>
        <td>${timeStr}</td>
        <td>${escapeHtml(log.message)}</td>
        <td><span class="portal-tag">${escapeHtml(log.type || 'info')}</span></td>
      </tr>
    `;
  }).join('');
}

function openJobModal(jobId) {
  const job = state.jobs.find(j => j.id === jobId);
  if (!job) return;

  const match = job.match || {};
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem;">
      <div>
        <h2 style="font-size: 1.4rem; color: #fff;">${escapeHtml(job.title)}</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.25rem;">
          🏢 <strong>${escapeHtml(job.company)}</strong> • 📍 ${escapeHtml(job.location)} • Source: <span class="portal-tag">${escapeHtml(job.portal)}</span>
        </p>
      </div>
      <div style="text-align: right;">
        <div style="font-size: 1.8rem; font-weight: 800; color: ${match.probabilityColor};">${match.matchScore}%</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">${match.callProbability} Call Probability</div>
      </div>
    </div>

    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.25rem;">
      <h4 style="font-size: 0.95rem; color: var(--primary-light); margin-bottom: 0.5rem;">🤖 AI Candidate Match Breakdown & Interview Optimization</h4>
      
      <div style="margin-bottom: 0.75rem;">
        <strong style="font-size: 0.82rem; color: var(--accent-emerald);">✅ Matched Key Skills:</strong>
        <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.3rem;">
          ${(match.matchedSkills || []).map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom: 0.75rem;">
        <strong style="font-size: 0.82rem; color: var(--accent-rose);">⚠️ Skills / Keyword Gaps:</strong>
        <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.3rem;">
          ${(match.missingSkills || []).length > 0 
            ? (match.missingSkills || []).map(s => `<span class="skill-tag missing">${s}</span>`).join('') 
            : `<span style="font-size: 0.8rem; color: var(--text-muted);">None! Full key skill coverage.</span>`}
        </div>
      </div>

      <div>
        <strong style="font-size: 0.82rem; color: var(--accent-amber);">💡 AI Tailoring Recommendations:</strong>
        <ul style="margin-top: 0.3rem; padding-left: 1.2rem; font-size: 0.82rem; color: var(--text-main);">
          ${(match.recommendations || []).map(r => `<li style="margin-bottom: 0.25rem;">${escapeHtml(r)}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div style="margin-bottom: 1.25rem;">
      <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem;">Job Description</h3>
      <p style="font-size: 0.88rem; color: var(--text-main); line-height: 1.6;">${escapeHtml(job.description)}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem;">Requirements</h3>
      <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">${escapeHtml(job.requirements || 'Standard enterprise qualifications.')}</p>
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; border-top: 1px solid var(--border-glass); padding-top: 1rem;">
      <button class="btn btn-secondary" onclick="closeModal()">Close</button>
      <button class="btn btn-primary" onclick="applyOnBehalf('${job.id}'); closeModal();">⚡ Auto-Apply on My Behalf</button>
      <a href="${job.url}" target="_blank" class="btn btn-secondary" style="text-decoration: none;">
        View on ${escapeHtml(job.portal)} ↗
      </a>
    </div>
  `;

  document.getElementById('job-modal').classList.add('active');
}

function closeModal() {
  document.getElementById('job-modal').classList.remove('active');
}

function closeModalOnOverlay(e) {
  if (e.target.id === 'job-modal') closeModal();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
