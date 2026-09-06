// SoftSkills Nexus - Main Controller with Homepage Integration

class SoftSkillsApp {
  constructor() {
    this.activeTab = 'home';
    this.activePathwayId = 'school';
    this.init();
  }

  init() {
    this.bindTabNavigation();
    this.renderPathways();
    this.renderPillars();
    this.renderRoadmap();
    this.renderBooks();
    this.renderVideos();
    this.renderTemplates();
    this.bindSearchFilter();
  }

  // Tab Navigation
  bindTabNavigation() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetTab = btn.getAttribute('data-tab');
        if (!targetTab) return;
        this.navigateToTab(targetTab);
      });
    });
  }

  navigateToTab(tabName) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(b => {
      if (b.getAttribute('data-tab') === tabName) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    const targetContent = document.getElementById(`tab-${tabName}`);
    if (targetContent) {
      targetContent.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    this.activeTab = tabName;
  }

  // 1. Render Pathways Section (with IQ, EQ & SQ Triad)
  renderPathways() {
    const selectorContainer = document.getElementById('pathway-selector-buttons');
    const contentContainer = document.getElementById('pathway-content-display');

    if (!selectorContainer || !contentContainer) return;

    let buttonsHtml = '';
    SOFT_SKILLS_DATA.pathways.forEach(p => {
      const isActive = p.id === this.activePathwayId;
      buttonsHtml += `
        <button class="pathway-btn ${isActive ? 'active' : ''}" onclick="window.nexusApp.switchPathway('${p.id}')">
          <span>${p.title}</span>
        </button>
      `;
    });
    selectorContainer.innerHTML = buttonsHtml;

    const pathway = SOFT_SKILLS_DATA.pathways.find(p => p.id === this.activePathwayId);
    if (!pathway) return;

    let contentHtml = `
      <div style="margin-bottom: 2rem;">
        <span class="badge" style="background: ${pathway.badgeColor}22; color: ${pathway.badgeColor}; border: 1px solid ${pathway.badgeColor}55;">
          ${pathway.targetAudience}
        </span>
        <h3 style="font-size: 1.8rem; font-weight: 800; margin-top: 0.5rem; color: var(--text-main);">
          ${pathway.title}
        </h3>
        <p style="color: var(--text-muted); font-size: 1.05rem;">${pathway.subtitle}</p>
      </div>

      <!-- IQ, EQ & SQ Triad Breakdown Cards -->
      <h4 style="font-size: 1.3rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>🔺</span> IQ, EQ & SQ Enhancement Triad
      </h4>

      <div class="grid-3" style="margin-bottom: 2.5rem;">
        <!-- IQ Card -->
        <div class="card" style="border-top: 4px solid var(--primary);">
          <div class="card-header">
            <div class="card-icon" style="background: rgba(99, 102, 241, 0.15); color: var(--primary);">🧠</div>
            <div>
              <div class="card-title" style="font-size: 1.1rem;">${pathway.triad.iq.title}</div>
              <span class="badge" style="background: rgba(99, 102, 241, 0.2); color: var(--primary);">Cognitive Intelligence</span>
            </div>
          </div>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${pathway.triad.iq.desc}</p>
          <div style="background: rgba(99, 102, 241, 0.08); border-left: 3px solid var(--primary); padding: 0.6rem 0.8rem; border-radius: 0 4px 4px 0; font-size: 0.85rem; color: #c7d2fe; margin-bottom: 0.8rem;">
            🎯 Strategy: ${pathway.triad.iq.enhancementStrategy}
          </div>
          <strong style="color: var(--text-main); font-size: 0.82rem; display: block; margin-bottom: 0.3rem;">Core Daily Practices:</strong>
          <ul style="padding-left: 1.1rem; color: var(--text-muted); font-size: 0.85rem;">
            ${pathway.triad.iq.keyPractices.map(kp => `<li>${kp}</li>`).join('')}
          </ul>
        </div>

        <!-- EQ Card -->
        <div class="card" style="border-top: 4px solid var(--accent-pink);">
          <div class="card-header">
            <div class="card-icon" style="background: rgba(236, 72, 153, 0.15); color: var(--accent-pink);">🫀</div>
            <div>
              <div class="card-title" style="font-size: 1.1rem;">${pathway.triad.eq.title}</div>
              <span class="badge" style="background: rgba(236, 72, 153, 0.2); color: var(--accent-pink);">Emotional Intelligence</span>
            </div>
          </div>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${pathway.triad.eq.desc}</p>
          <div style="background: rgba(236, 72, 153, 0.08); border-left: 3px solid var(--accent-pink); padding: 0.6rem 0.8rem; border-radius: 0 4px 4px 0; font-size: 0.85rem; color: #fbcfe8; margin-bottom: 0.8rem;">
            🎯 Strategy: ${pathway.triad.eq.enhancementStrategy}
          </div>
          <strong style="color: var(--text-main); font-size: 0.82rem; display: block; margin-bottom: 0.3rem;">Core Daily Practices:</strong>
          <ul style="padding-left: 1.1rem; color: var(--text-muted); font-size: 0.85rem;">
            ${pathway.triad.eq.keyPractices.map(kp => `<li>${kp}</li>`).join('')}
          </ul>
        </div>

        <!-- SQ Card -->
        <div class="card" style="border-top: 4px solid var(--accent-emerald);">
          <div class="card-header">
            <div class="card-icon" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald);">🕊️</div>
            <div>
              <div class="card-title" style="font-size: 1.1rem;">${pathway.triad.sq.title}</div>
              <span class="badge" style="background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald);">Social & Spiritual Quotient</span>
            </div>
          </div>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${pathway.triad.sq.desc}</p>
          <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid var(--accent-emerald); padding: 0.6rem 0.8rem; border-radius: 0 4px 4px 0; font-size: 0.85rem; color: #a7f3d0; margin-bottom: 0.8rem;">
            🎯 Strategy: ${pathway.triad.sq.enhancementStrategy}
          </div>
          <strong style="color: var(--text-main); font-size: 0.82rem; display: block; margin-bottom: 0.3rem;">Core Daily Practices:</strong>
          <ul style="padding-left: 1.1rem; color: var(--text-muted); font-size: 0.85rem;">
            ${pathway.triad.sq.keyPractices.map(kp => `<li>${kp}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Action Habits & Dialogue Scripts -->
      <h4 style="font-size: 1.3rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>🎯</span> Core Action Habits & Dialogue Scripts
      </h4>

      <div class="grid-2">
    `;

    pathway.skills.forEach(skill => {
      contentHtml += `
        <div class="skill-list-item">
          <div class="card-icon" style="font-size: 1.8rem;">${skill.icon}</div>
          <div style="flex-grow: 1;">
            <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.3rem;">
              ${skill.name}
            </h4>
            <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.5; margin-bottom: 0.5rem;">${skill.desc}</p>
            
            <div class="skill-action-tag">
              ⚡ Action Habit: ${skill.keyAction}
            </div>

            ${skill.dialogueScript ? `
              <div style="margin-top: 0.75rem; background: rgba(0,0,0,0.3); border-left: 3px solid var(--accent-cyan); padding: 0.5rem 0.8rem; border-radius: 0 4px 4px 0; font-size: 0.83rem; color: #a5f3fc;">
                🗣️ <strong>Word-for-Word Script:</strong> "${skill.dialogueScript}"
              </div>
            ` : ''}
          </div>
        </div>
      `;
    });

    contentHtml += `</div>`;
    contentContainer.innerHTML = contentHtml;
  }

  switchPathway(pathwayId) {
    this.activePathwayId = pathwayId;
    this.renderPathways();
  }

  // 2. Render Pillars Matrix
  renderPillars() {
    const pillarsContainer = document.getElementById('pillars-grid');
    if (!pillarsContainer) return;

    let html = '';
    SOFT_SKILLS_DATA.pillars.forEach(pillar => {
      html += `
        <div class="card pillar-card" style="--accent-color: ${pillar.accent};">
          <div class="card-header">
            <div class="card-icon">${pillar.icon}</div>
            <div>
              <div class="card-title">${pillar.name}</div>
              <div class="card-subtitle">${pillar.tagline}</div>
            </div>
          </div>

          <div class="card-body">
            <strong style="color: var(--text-main); font-size: 0.85rem; display: block; margin-bottom: 0.4rem;">
              Core Frameworks:
            </strong>
            <div class="tag-cloud">
      `;

      pillar.keyFrameworks.forEach(fw => {
        html += `<span class="tag-item">${fw}</span>`;
      });

      html += `
            </div>
          </div>

          <div class="card-footer">
            <span style="font-size: 0.8rem; color: var(--text-dim);">${pillar.detailedSkills.length} Deep Modules</span>
            <button class="btn btn-secondary" style="padding: 0.4rem 0.9rem; font-size: 0.85rem;" 
              onclick="window.nexusApp.openPillarModal('${pillar.id}')">
              Explore Deep Dive ➔
            </button>
          </div>
        </div>
      `;
    });

    pillarsContainer.innerHTML = html;
  }

  openPillarModal(pillarId) {
    const pillar = SOFT_SKILLS_DATA.pillars.find(p => p.id === pillarId);
    if (!pillar) return;

    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');

    if (modalTitle) modalTitle.innerText = `${pillar.icon} ${pillar.name}`;

    let html = `
      <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 1.5rem;">${pillar.tagline}</p>
    `;

    pillar.detailedSkills.forEach(ds => {
      html += `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main);">${ds.title}</h4>
            <span class="badge" style="background: rgba(99,102,241,0.2); color: var(--primary);">${ds.level}</span>
          </div>
          <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 0.75rem;">${ds.summary}</p>
          
          <strong style="color: var(--accent-emerald); font-size: 0.85rem; display: block; margin-bottom: 0.3rem;">
            ✅ Actionable Execution Steps:
          </strong>
          <ul style="padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem; margin-bottom: 0.75rem;">
            ${ds.actionableSteps.map(step => `<li>${step}</li>`).join('')}
          </ul>

          ${ds.scriptExample ? `
            <div style="background: rgba(6,182,212,0.08); border-left: 3px solid var(--accent-cyan); padding: 0.6rem 0.9rem; border-radius: 0 4px 4px 0; font-size: 0.88rem; color: #cffafe; margin-bottom: 0.75rem;">
              💬 <strong>Exact Dialogue Script:</strong> ${ds.scriptExample}
            </div>
          ` : ''}

          ${ds.bodyLanguageCue ? `
            <div style="background: rgba(139,92,246,0.08); border-left: 3px solid var(--accent-purple); padding: 0.5rem 0.8rem; border-radius: 0 4px 4px 0; font-size: 0.85rem; color: #ddd6fe; margin-bottom: 0.75rem;">
              🧍 <strong>Vocal & Body Language Cue:</strong> ${ds.bodyLanguageCue}
            </div>
          ` : ''}

          ${ds.reflectionExercise ? `
            <div style="background: rgba(245,158,11,0.08); border-left: 3px solid var(--accent-amber); padding: 0.5rem 0.8rem; border-radius: 0 4px 4px 0; font-size: 0.85rem; color: #fef08a; margin-bottom: 0.75rem;">
              🤔 <strong>Personal Reflection Exercise:</strong> ${ds.reflectionExercise}
            </div>
          ` : ''}

          <div style="background: rgba(239,68,68,0.1); border-left: 3px solid #ef4444; padding: 0.5rem 0.8rem; border-radius: 0 4px 4px 0; font-size: 0.85rem; color: #fca5a5;">
            ⚠️ <strong>Common Pitfall:</strong> ${ds.pitfall}
          </div>
        </div>
      `;
    });

    if (modalBody) modalBody.innerHTML = html;

    const overlay = document.getElementById('global-modal-overlay');
    if (overlay) overlay.classList.add('active');
  }

  closeModal() {
    const overlay = document.getElementById('global-modal-overlay');
    if (overlay) overlay.classList.remove('active');
    
    const modalBody = document.getElementById('modal-body-content');
    if (modalBody) modalBody.innerHTML = '';
  }

  // 3. Render Career Elevation Roadmap
  renderRoadmap() {
    const container = document.getElementById('roadmap-content-display');
    if (!container) return;

    const data = SOFT_SKILLS_DATA.roadmap;
    let html = `
      <div style="text-align: center; margin-bottom: 2.5rem;">
        <h3 style="font-size: 2rem; font-weight: 800; color: var(--text-main);">${data.title}</h3>
        <p style="color: var(--text-muted); font-size: 1.05rem;">${data.subtitle}</p>
      </div>

      <div class="grid-2">
    `;

    data.levels.forEach(lvl => {
      html += `
        <div class="card" style="border-top: 4px solid ${lvl.color};">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span class="badge" style="background: ${lvl.color}22; color: ${lvl.color}; font-size: 0.85rem;">Level ${lvl.level}</span>
            <span style="font-size: 0.8rem; color: var(--text-dim);">${lvl.stageTarget}</span>
          </div>

          <h4 style="font-size: 1.3rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem;">
            ${lvl.icon} ${lvl.name}
          </h4>

          <div style="margin-bottom: 1rem;">
            <strong style="color: var(--accent-emerald); font-size: 0.85rem; display: block; margin-bottom: 0.3rem;">🎯 What You Achieve (Outcomes):</strong>
            <ul style="padding-left: 1.2rem; color: var(--text-main); font-size: 0.88rem;">
              ${lvl.outcomes.map(o => `<li>${o}</li>`).join('')}
            </ul>
          </div>

          <div style="margin-bottom: 1rem;">
            <strong style="color: var(--accent-cyan); font-size: 0.85rem; display: block; margin-bottom: 0.3rem;">🛠️ Enabling Frameworks:</strong>
            <ul style="padding-left: 1.2rem; color: var(--text-muted); font-size: 0.85rem;">
              ${lvl.enablers.map(e => `<li>${e}</li>`).join('')}
            </ul>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <strong style="color: var(--accent-amber); font-size: 0.85rem; display: block; margin-bottom: 0.3rem;">⚡ Required Deliberate Practices:</strong>
            <ul style="padding-left: 1.2rem; color: var(--text-main); font-size: 0.85rem;">
              ${lvl.practices.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>

          <!-- Recommended Books & Articles Section -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
            <strong style="color: var(--primary); font-size: 0.85rem; display: block; margin-bottom: 0.4rem;">📚 Recommended Reading & Masterclass Links:</strong>
            
            <div style="margin-bottom: 0.6rem;">
              <span style="font-size: 0.8rem; color: var(--text-dim); font-weight: 700;">BOOKS:</span>
              <ul style="padding-left: 1.1rem; color: var(--text-main); font-size: 0.82rem;">
                ${lvl.recommendedBooks.map(b => `<li><strong>${b.title}</strong> by ${b.author} - <em>${b.desc}</em></li>`).join('')}
              </ul>
            </div>

            <div>
              <span style="font-size: 0.8rem; color: var(--text-dim); font-weight: 700;">ARTICLES & GUIDES:</span>
              <ul style="padding-left: 1.1rem; color: var(--accent-cyan); font-size: 0.82rem;">
                ${lvl.recommendedArticles.map(a => `<li><a href="${a.url}" target="_blank" style="color: var(--accent-cyan); text-decoration: underline;">${a.title}</a></li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }

  // 4. Render Books Vault
  renderBooks() {
    const container = document.getElementById('books-grid');
    if (!container) return;

    let html = '';
    SOFT_SKILLS_DATA.books.forEach(book => {
      html += `
        <div class="card book-card">
          <div class="book-cover-art" style="background: linear-gradient(135deg, ${book.coverColor}, #111827);">
            <span>${book.icon}</span>
            <span style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; margin-top: 0.5rem; letter-spacing: 0.5px;">BESTSELLER</span>
          </div>

          <div style="flex-grow: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.3rem;">
              <span class="badge" style="background: rgba(255,255,255,0.06); color: var(--text-muted);">${book.category}</span>
              <span style="font-size: 0.85rem; color: var(--accent-amber); font-weight: 700;">★ ${book.rating}</span>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.2rem;">
              ${book.title}
            </h4>
            <div style="font-size: 0.85rem; color: var(--primary); font-weight: 600; margin-bottom: 0.6rem;">By ${book.author}</div>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.75rem;">${book.summary}</p>
            
            <strong style="font-size: 0.82rem; color: var(--accent-cyan); display: block; margin-bottom: 0.3rem;">Key Takeaways:</strong>
            <ul style="padding-left: 1.1rem; color: var(--text-main); font-size: 0.85rem;">
              ${book.keyTakeaways.map(kt => `<li>${kt}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // 5. Render Video Learning Hub
  renderVideos() {
    const container = document.getElementById('videos-grid');
    if (!container) return;

    let html = '';
    SOFT_SKILLS_DATA.videos.forEach(vid => {
      html += `
        <div class="card">
          <div class="video-card-thumb" onclick="window.nexusApp.openVideoModal('${vid.id}')">
            <span>${vid.thumbnail}</span>
            <div class="play-badge">▶</div>
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
              <span class="badge" style="background: rgba(6,182,212,0.15); color: var(--accent-cyan);">${vid.platform}</span>
              <span style="font-size: 0.8rem; color: var(--text-dim);">${vid.duration}</span>
            </div>
            <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.3rem;">
              ${vid.title}
            </h4>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.8rem;">By ${vid.speaker}</div>
            
            <button class="btn btn-secondary" style="width: 100%; justify-content: center; font-size: 0.9rem;"
              onclick="window.nexusApp.openVideoModal('${vid.id}')">
              Watch & Study Key Points ➔
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  openVideoModal(videoId) {
    const vid = SOFT_SKILLS_DATA.videos.find(v => v.id === videoId);
    if (!vid) return;

    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');

    if (modalTitle) modalTitle.innerText = `🎥 ${vid.title}`;

    let html = `
      <div class="video-container">
        <iframe src="${vid.embedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div style="margin-bottom: 1rem;">
        <span class="badge" style="background: rgba(139,92,246,0.2); color: var(--accent-purple);">${vid.speaker}</span>
        <span class="badge" style="background: rgba(255,255,255,0.06); color: var(--text-muted);">${vid.duration}</span>
      </div>

      <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.5rem;">
        📝 Key Learning Synthesis:
      </h4>
      <ul style="padding-left: 1.2rem; color: var(--text-main); font-size: 0.95rem; line-height: 1.6;">
        ${vid.keyPoints.map(kp => `<li style="margin-bottom: 0.4rem;">${kp}</li>`).join('')}
      </ul>
    `;

    if (modalBody) modalBody.innerHTML = html;

    const overlay = document.getElementById('global-modal-overlay');
    if (overlay) overlay.classList.add('active');
  }

  // 6. Render Templates & Scripts
  renderTemplates() {
    const container = document.getElementById('templates-grid');
    if (!container) return;

    let html = '';
    SOFT_SKILLS_DATA.templates.forEach((tpl, idx) => {
      html += `
        <div class="card">
          <div class="card-header">
            <div class="card-icon">📄</div>
            <div>
              <div class="card-title" style="font-size: 1.1rem;">${tpl.title}</div>
              <span class="badge" style="background: rgba(16,185,129,0.15); color: var(--accent-emerald);">${tpl.category}</span>
            </div>
          </div>
          <pre style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; color: var(--text-muted); font-size: 0.85rem; overflow-x: auto; white-space: pre-wrap; font-family: inherit; margin-bottom: 1rem;">${tpl.content}</pre>
          
          <button class="btn btn-secondary" style="width: 100%; justify-content: center; font-size: 0.88rem;"
            onclick="window.nexusApp.copyTemplateText(${idx})">
            📋 Copy Template Script
          </button>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  copyTemplateText(idx) {
    const tpl = SOFT_SKILLS_DATA.templates[idx];
    if (!tpl) return;

    navigator.clipboard.writeText(tpl.content).then(() => {
      alert(`✅ Copied "${tpl.title}" to clipboard!`);
    }).catch(() => {
      alert("Template copied.");
    });
  }

  // Search Filter
  bindSearchFilter() {
    const searchInput = document.getElementById('global-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (!term) return;

      document.querySelectorAll('#pillars-grid .card').forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.nexusApp = new SoftSkillsApp();
});
