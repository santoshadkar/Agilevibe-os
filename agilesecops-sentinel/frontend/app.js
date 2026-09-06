document.addEventListener('DOMContentLoaded', () => {
    // --- State Variables ---
    let currentScanId = null;
    let currentScanState = null;
    let sampleRepos = {};

    // DOM Elements
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const repoSelect = document.getElementById('repo-select');
    const runScanBtn = document.getElementById('run-scan-btn');
    const logStream = document.getElementById('log-stream');
    const logCountBadge = document.getElementById('log-count-badge');

    // --- Tab Switching Logic ---
    function switchTab(targetTab) {
        tabBtns.forEach(b => {
            if (b.getAttribute('data-tab') === targetTab) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        tabContents.forEach(c => {
            if (c.id === `${targetTab}-view`) {
                c.classList.add('active');
            } else {
                c.classList.remove('active');
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // Landing Page Hero & CTA Buttons Handlers
    const launchDemoBtn = document.querySelector('.launch-demo-btn');
    if (launchDemoBtn) {
        launchDemoBtn.addEventListener('click', () => switchTab('workflow'));
    }

    const exploreArchBtn = document.querySelector('.explore-arch-btn');
    if (exploreArchBtn) {
        exploreArchBtn.addEventListener('click', () => switchTab('guide'));
    }

    // Quick-Start Case Study Card Buttons Handler
    document.querySelectorAll('.quick-scan-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetRepo = btn.getAttribute('data-repo');
            if (targetRepo) {
                repoSelect.value = targetRepo;
                switchTab('workflow');
                runScanBtn.click();
            }
        });
    });

    // --- Fetch Repositories on Startup ---
    async function loadRepositories() {
        try {
            const res = await fetch('/api/repos');
            const data = await res.json();
            sampleRepos = data.data;

            repoSelect.innerHTML = '';
            data.repositories.forEach(repoName => {
                const opt = document.createElement('option');
                opt.value = repoName;
                opt.textContent = repoName;
                repoSelect.appendChild(opt);
            });
        } catch (err) {
            console.error('Failed to load repositories:', err);
        }
    }
    loadRepositories();

    // --- Trigger Security Scan ---
    runScanBtn.addEventListener('click', async () => {
        const selectedRepo = repoSelect.value;
        if (!selectedRepo) return;

        runScanBtn.disabled = true;
        runScanBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Running LangGraph Agents...';

        // Reset visualizer nodes
        resetNodeHighlights();
        highlightNode('START', 'active-running');

        try {
            const response = await fetch('/api/scan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ repo_name: selectedRepo })
            });

            const result = await response.json();
            currentScanId = result.scan_id;
            currentScanState = result.state;

            // Animate node pipeline progression
            await animateNodeProgress(currentScanState);

            // Update UI components
            updateLogsUI(currentScanState.logs);
            updateVulnerabilitiesUI(currentScanState.vulnerabilities);
            updateAgileBoardUI(currentScanState.agile_stories);
            updateApprovalUI(currentScanState);

        } catch (err) {
            alert('Error running security scan: ' + err.message);
        } finally {
            runScanBtn.disabled = false;
            runScanBtn.innerHTML = '<i class="fa-solid fa-bolt"></i> Trigger LangGraph Security Scan';
        }
    });

    // --- Node Visualizer Highlight Helpers ---
    function resetNodeHighlights() {
        document.querySelectorAll('.graph-node').forEach(node => {
            node.classList.remove('active-running', 'completed-node');
        });
    }

    function highlightNode(nodeId, className) {
        const node = document.getElementById(`node-${nodeId}`);
        if (node) {
            node.classList.add(className);
        }
    }

    async function animateNodeProgress(state) {
        const sequence = [
            { id: 'IngestScanNode', delay: 400 },
            { id: 'AgileBacklogNode', delay: 400 },
            { id: 'PatchGeneratorNode', delay: 500 },
            { id: 'HumanApprovalNode', delay: 400 }
        ];

        for (const item of sequence) {
            highlightNode(item.id, 'active-running');
            await new Promise(r => setTimeout(r, item.delay));
            highlightNode(item.id, 'completed-node');
        }
    }

    // --- Logs UI Renderer ---
    function updateLogsUI(logs) {
        logStream.innerHTML = '';
        if (!logs) return;

        logs.forEach(log => {
            const entry = document.createElement('div');
            entry.className = `log-entry ${log.level || 'INFO'}`;
            entry.innerHTML = `
                <span class="log-time">[${log.timestamp}]</span>
                <span class="log-node">${log.node}</span>
                <span class="log-msg">${log.message}</span>
            `;
            logStream.appendChild(entry);
        });
        logStream.scrollTop = logStream.scrollHeight;
        logCountBadge.textContent = `${logs.length} logs`;
    }

    // --- SAST Vulnerabilities Table Renderer ---
    function updateVulnerabilitiesUI(vulnerabilities) {
        const tbody = document.querySelector('#findings-table tbody');
        tbody.innerHTML = '';

        let crit = 0, high = 0, med = 0;

        if (!vulnerabilities || vulnerabilities.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="text-center empty-msg">No vulnerabilities detected.</td></tr>';
            document.getElementById('stat-critical').textContent = '0';
            document.getElementById('stat-high').textContent = '0';
            document.getElementById('stat-medium').textContent = '0';
            document.getElementById('stat-total').textContent = '0';
            return;
        }

        vulnerabilities.forEach(v => {
            if (v.severity === 'Critical') crit++;
            else if (v.severity === 'High') high++;
            else med++;

            const badgeClass = v.severity === 'Critical' ? 'badge-critical' : (v.severity === 'High' ? 'badge-high' : 'badge-medium');

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><code>${v.id}</code></td>
                <td><span class="badge ${badgeClass}">${v.severity}</span></td>
                <td>
                    <strong>${v.title}</strong><br>
                    <small class="sub-text">${v.owasp_category} (${v.cve_id})</small>
                </td>
                <td><code>${v.filename}:${v.line_number}</code></td>
                <td><code>${escapeHtml(v.vulnerable_code)}</code></td>
                <td><strong>${v.cvss_score}</strong> / 10</td>
            `;
            tbody.appendChild(tr);
        });

        document.getElementById('stat-critical').textContent = crit;
        document.getElementById('stat-high').textContent = high;
        document.getElementById('stat-medium').textContent = med;
        document.getElementById('stat-total').textContent = vulnerabilities.length;
    }

    // --- Agile Kanban Renderer ---
    function updateAgileBoardUI(stories) {
        const todoBox = document.getElementById('cards-todo');
        const inProgressBox = document.getElementById('cards-in-progress');
        const reviewBox = document.getElementById('cards-review');
        const doneBox = document.getElementById('cards-done');

        todoBox.innerHTML = '';
        inProgressBox.innerHTML = '';
        reviewBox.innerHTML = '';
        doneBox.innerHTML = '';

        let counts = { todo: 0, inprogress: 0, review: 0, done: 0 };

        if (!stories) return;

        stories.forEach(s => {
            const card = document.createElement('div');
            card.className = 'kanban-card';
            card.innerHTML = `
                <div class="card-story-id">${s.story_id} • ${s.priority}</div>
                <div class="card-story-title">${s.title}</div>
                <div class="card-story-meta">
                    <span><i class="fa-regular fa-user"></i> ${s.assignee_role}</span>
                    <span class="sp-badge">${s.story_points} SP</span>
                </div>
            `;

            if (s.status === 'To Do' || s.status.includes('To Do')) { todoBox.appendChild(card); counts.todo++; }
            else if (s.status === 'In Progress') { inProgressBox.appendChild(card); counts.inprogress++; }
            else if (s.status === 'In Review') { reviewBox.appendChild(card); counts.review++; }
            else { doneBox.appendChild(card); counts.done++; }
        });

        document.getElementById('todo-count').textContent = counts.todo;
        document.getElementById('in-progress-count').textContent = counts.inprogress;
        document.getElementById('review-count').textContent = counts.review;
        document.getElementById('done-count').textContent = counts.done;
        document.getElementById('backlog-count').textContent = stories.length;
    }

    // --- Human-in-the-Loop Approval UI Renderer ---
    function updateApprovalUI(state) {
        const noApprovalMsg = document.getElementById('no-approval-msg');
        const noApprovalSubText = document.getElementById('no-approval-sub-text');
        const approvalPanel = document.getElementById('approval-panel');
        const prResultBox = document.getElementById('pr-result-box');
        const approvalBadge = document.getElementById('approval-count');

        const patches = state.patch_proposals;
        const status = state.status;

        if (status === 'rejected') {
            noApprovalMsg.classList.remove('hidden');
            approvalPanel.classList.add('hidden');
            prResultBox.classList.add('hidden');
            approvalBadge.textContent = '0';
            if (noApprovalSubText) {
                noApprovalSubText.innerHTML = '<strong style="color: var(--accent-red);"><i class="fa-solid fa-ban"></i> Security Patch REJECTED by Human Security Lead.</strong><br>Pull Request creation aborted. All stories retained in Agile Backlog (To Do).';
            }
            return;
        }

        if (!patches || patches.length === 0 || status === 'completed') {
            noApprovalMsg.classList.remove('hidden');
            approvalPanel.classList.add('hidden');
            approvalBadge.textContent = '0';

            if (state.git_pr) {
                prResultBox.classList.remove('hidden');
                document.getElementById('pr-banner-title').textContent = state.git_pr.pr_title;
                document.getElementById('pr-banner-sub').textContent = `Pull Request #${state.git_pr.pr_number} created on branch '${state.git_pr.branch}'`;
                document.getElementById('pr-banner-link').href = state.git_pr.pr_url;
            }
            return;
        }

        noApprovalMsg.classList.add('hidden');
        approvalPanel.classList.remove('hidden');
        prResultBox.classList.add('hidden');
        approvalBadge.textContent = '1';

        const p = patches[0];
        document.getElementById('patch-title').textContent = `Security Remediation for ${p.filename}`;
        document.getElementById('patch-explanation').textContent = p.explanation;
        document.getElementById('patch-filename').textContent = p.filename;

        // Render Syntax Highlighted Diff
        renderDiff(p.diff);

        // Guardrails
        const gList = document.getElementById('guardrails-list');
        gList.innerHTML = '';
        p.guardrail_checks.forEach(g => {
            const li = document.createElement('li');
            li.innerHTML = `
                <i class="fa-solid ${g.passed ? 'fa-circle-check check-pass' : 'fa-circle-xmark check-fail'}"></i>
                <strong>${g.check}:</strong> ${g.details}
            `;
            gList.appendChild(li);
        });
    }

    function renderDiff(diffText) {
        const diffCode = document.getElementById('diff-content');
        diffCode.innerHTML = '';

        const lines = diffText.split('\n');
        lines.forEach(line => {
            const span = document.createElement('span');
            if (line.startsWith('+') && !line.startsWith('+++')) {
                span.className = 'diff-add';
            } else if (line.startsWith('-') && !line.startsWith('---')) {
                span.className = 'diff-remove';
            }
            span.textContent = line + '\n';
            diffCode.appendChild(span);
        });
    }

    // --- Approval Actions Handlers ---
    document.getElementById('btn-approve').addEventListener('click', () => sendApprovalAction('approve'));
    document.getElementById('btn-modify').addEventListener('click', () => sendApprovalAction('modify'));
    document.getElementById('btn-reject').addEventListener('click', () => sendApprovalAction('reject'));

    async function sendApprovalAction(action) {
        if (!currentScanId) return;

        const feedbackInput = document.getElementById('human-feedback-input').value;

        try {
            const res = await fetch('/api/approval', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    scan_id: currentScanId,
                    action: action,
                    feedback: feedbackInput
                })
            });

            const result = await res.json();
            currentScanState = result.state;

            if (action === 'approve') {
                highlightNode('GitPRCreatorNode', 'active-running');
                await new Promise(r => setTimeout(r, 400));
                highlightNode('GitPRCreatorNode', 'completed-node');
                highlightNode('END', 'completed-node');
            } else if (action === 'reject') {
                highlightNode('END', 'completed-node');
            }

            updateLogsUI(currentScanState.logs);
            updateAgileBoardUI(currentScanState.agile_stories);
            updateApprovalUI(currentScanState);

        } catch (err) {
            alert('Approval action failed: ' + err.message);
        }
    }

    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
});
