/**
 * SecureBank — Manya AI Assistant & Agentic Banking Engine
 * High-Reliability Version with Session History Persistence & Account Opening Handler.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Manya DOM HTML
    injectManyaWidgetHTML();

    // 2. Element References
    const widgetWrapper = document.getElementById('manya-widget');
    const autoChip = document.getElementById('manya-auto-chip');
    const chipText = document.getElementById('manya-chip-text');
    const chipClose = document.getElementById('manya-chip-close');
    const triggerBtn = document.getElementById('manya-trigger-btn');
    const drawer = document.getElementById('manya-drawer');
    const closeDrawerBtn = document.getElementById('manya-close-drawer');
    const chatBody = document.getElementById('manya-body');
    const chipsContainer = document.getElementById('manya-chips');
    const inputField = document.getElementById('manya-input');
    const sendBtn = document.getElementById('manya-send');

    let isDrawerOpen = false;
    let messageHistory = []; // { sender: 'user'|'bot', text: '', actionData: {}, timestamp: '' }
    let lastQuickChips = [];

    // Detect current page context
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

    // Check if coming to index.html with #register-form or action
    if (currentPage === 'index' && (window.location.hash === '#register' || window.location.search.includes('action=register'))) {
        setTimeout(() => {
            const regForm = document.getElementById('register-form');
            const landingActions = document.getElementById('landing-actions');
            if (regForm) regForm.style.display = 'block';
            if (landingActions) landingActions.style.display = 'none';
        }, 300);
    }

    // Get Auth Token
    function getAuthHeaders() {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        return token ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } : { 'Content-Type': 'application/json' };
    }

    // Restore Chat History from Session Storage
    function restoreSessionHistory() {
        try {
            const savedHistory = sessionStorage.getItem('manya_chat_history');
            const savedDrawerState = sessionStorage.getItem('manya_drawer_open');
            const savedChips = sessionStorage.getItem('manya_quick_chips');

            if (savedHistory) {
                messageHistory = JSON.parse(savedHistory);
                messageHistory.forEach(item => {
                    if (item.sender === 'user') {
                        renderUserBubble(item.text, item.timestamp);
                    } else {
                        renderBotBubble(item.text, item.actionData, item.timestamp);
                    }
                });

                if (savedChips) {
                    lastQuickChips = JSON.parse(savedChips);
                    renderQuickChips(lastQuickChips);
                }

                if (savedDrawerState === 'true') {
                    openDrawer(false); // don't re-save state unnecessarily
                }
                return true;
            }
        } catch (e) {
            console.warn('Could not restore Manya history:', e);
        }
        return false;
    }

    function saveSessionState() {
        try {
            sessionStorage.setItem('manya_chat_history', JSON.stringify(messageHistory));
            sessionStorage.setItem('manya_drawer_open', isDrawerOpen ? 'true' : 'false');
            sessionStorage.setItem('manya_quick_chips', JSON.stringify(lastQuickChips));
        } catch (e) {
            console.warn('Could not save Manya state:', e);
        }
    }

    // Initialize Widget
    const hasRestored = restoreSessionHistory();

    if (!hasRestored) {
        // Auto-Initiation Call to /api/manya/welcome
        fetch(`/api/manya/welcome?contextPage=${currentPage}`, { headers: getAuthHeaders() })
            .then(res => res.json())
            .then(data => {
                if (data && data.success && data.data) {
                    const resp = data.data;
                    
                    // Show auto-chip after 1 second delay
                    setTimeout(() => {
                        if (!isDrawerOpen && autoChip) {
                            chipText.innerHTML = formatMarkdown(resp.reply);
                            autoChip.style.display = 'flex';
                        }
                    }, 1000);

                    // Add welcome message to chat body
                    appendBotMessage(resp.reply, resp.actionData);
                    renderQuickChips(resp.quickReplies);
                }
            })
            .catch(err => {
                console.warn('Manya AI welcome request failed:', err);
                appendBotMessage("Hello! I'm **Manya**, your AI Assistant. How can I help you today?");
                renderQuickChips(["📝 Open Account Guide", "🔑 How to Login", "📈 FD Rates", "🛡️ Fraud Check"]);
            });
    }

    // Event Listeners
    if (triggerBtn) triggerBtn.addEventListener('click', toggleDrawer);
    if (autoChip) {
        autoChip.addEventListener('click', (e) => {
            if (e.target !== chipClose) {
                autoChip.style.display = 'none';
                openDrawer();
            }
        });
    }
    if (chipClose) {
        chipClose.addEventListener('click', (e) => {
            e.stopPropagation();
            autoChip.style.display = 'none';
        });
    }
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
    if (sendBtn) sendBtn.addEventListener('click', handleSendMessage);
    if (inputField) {
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSendMessage();
        });
    }

    function toggleDrawer() {
        if (isDrawerOpen) closeDrawer();
        else openDrawer();
    }

    function openDrawer(shouldSave = true) {
        isDrawerOpen = true;
        drawer.classList.add('open');
        if (autoChip) autoChip.style.display = 'none';
        if (inputField) inputField.focus();
        scrollToBottom();
        if (shouldSave) saveSessionState();
    }

    function closeDrawer() {
        isDrawerOpen = false;
        drawer.classList.remove('open');
        saveSessionState();
    }

    function handleSendMessage() {
        const text = inputField.value.trim();
        if (!text) return;

        appendUserMessage(text);
        inputField.value = '';
        renderQuickChips([]);

        // Show typing indicator
        const typingId = appendTypingIndicator();

        sendChatMessageApi(text, currentPage, true)
            .then(data => {
                removeTypingIndicator(typingId);
                if (data && data.success && data.data) {
                    const resp = data.data;
                    appendBotMessage(resp.reply, resp.actionData);
                    renderQuickChips(resp.quickReplies);
                    handleAgentAction(resp.actionType, resp.actionData);
                } else {
                    fallbackOfflineResponse(text, typingId);
                }
            })
            .catch(err => {
                removeTypingIndicator(typingId);
                fallbackOfflineResponse(text);
            });
    }

    function sendChatMessageApi(text, contextPage, withAuth = true) {
        const headers = withAuth ? getAuthHeaders() : { 'Content-Type': 'application/json' };
        return fetch('/api/manya/chat', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ message: text, contextPage: contextPage })
        }).then(res => {
            if (!res.ok && withAuth) {
                // If 401/403 with auth header, retry cleanly without auth header
                return sendChatMessageApi(text, contextPage, false);
            }
            return res.json();
        });
    }

    function fallbackOfflineResponse(queryText, typingId) {
        if (typingId) removeTypingIndicator(typingId);
        const q = queryText.toLowerCase();

        if (q.includes('account') || q.includes('open') || q.includes('register') || q.includes('step')) {
            appendBotMessage("📝 **Steps to Open a SecureBank Account**:\n\n1️⃣ Click **'Open Account'** on the main page.\n2️⃣ Fill in your Name, Email, Phone & Address.\n3️⃣ Complete PAN & Aadhaar KYC verification.\n4️⃣ Select Savings or Current account and initial deposit.\n5️⃣ Receive your instant Customer ID!");
            renderQuickChips(["🚀 Open Account Page", "🔑 How to Login", "📈 FD Rates"]);
            handleAgentAction("NAVIGATE_REGISTER", {});
        } else if (q.includes('fd') || q.includes('rate') || q.includes('interest') || q.includes('invest')) {
            appendBotMessage("📈 **SecureBank FD Rates**:\n• **6 Months**: 6.75% p.a.\n• **1 Year (Best Value)**: 7.50% p.a.\n• **3 Years**: 8.25% p.a.");
            renderQuickChips(["⚡ Create FD", "💰 Balance", "📝 Open Account Guide"]);
        } else if (q.includes('security') || q.includes('safe') || q.includes('fraud')) {
            appendBotMessage("🛡️ **SecureBank Protection**: 24/7 AI Risk Scoring, TLS 1.3 Encryption, and 2FA OTP security enabled.");
            renderQuickChips(["🔑 Login", "💰 Balance", "📞 Support"]);
        } else {
            appendBotMessage("I'm **Manya**, your AI Banking Assistant. How can I assist you today?");
            renderQuickChips(["📝 Account Opening Guide", "🔑 How to Login", "📈 FD Rates", "🛡️ Security Status"]);
        }
    }

    function appendUserMessage(text) {
        const time = getCurrentTime();
        renderUserBubble(text, time);
        messageHistory.push({ sender: 'user', text, timestamp: time });
        saveSessionState();
    }

    function renderUserBubble(text, time) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'manya-msg user';
        msgDiv.innerHTML = `
            <div class="manya-bubble">${escapeHtml(text)}</div>
            <div class="manya-time">${time}</div>
        `;
        chatBody.appendChild(msgDiv);
        scrollToBottom();
    }

    function appendBotMessage(text, actionData) {
        const time = getCurrentTime();
        renderBotBubble(text, actionData, time);
        messageHistory.push({ sender: 'bot', text, actionData, timestamp: time });
        saveSessionState();
    }

    function renderBotBubble(text, actionData, time) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'manya-msg bot';
        
        let cardWidgetHtml = '';
        if (actionData && actionData.tip) {
            cardWidgetHtml = `
                <div class="manya-card-widget">
                    ${formatMarkdown(actionData.tip)}
                </div>
            `;
        }

        msgDiv.innerHTML = `
            <div class="manya-bubble">
                ${formatMarkdown(text)}
                ${cardWidgetHtml}
            </div>
            <div class="manya-time">Manya • ${time}</div>
        `;
        chatBody.appendChild(msgDiv);
        scrollToBottom();
    }

    function renderQuickChips(chips) {
        lastQuickChips = chips || [];
        chipsContainer.innerHTML = '';
        if (!chips || chips.length === 0) return;

        chips.forEach(chipTextStr => {
            const btn = document.createElement('button');
            btn.className = 'manya-chip';
            btn.textContent = chipTextStr;
            btn.addEventListener('click', () => {
                inputField.value = chipTextStr;
                handleSendMessage();
            });
            chipsContainer.appendChild(btn);
        });
        saveSessionState();
    }

    function appendTypingIndicator() {
        const id = 'typing-' + Date.now();
        const msgDiv = document.createElement('div');
        msgDiv.className = 'manya-msg bot';
        msgDiv.id = id;
        msgDiv.innerHTML = `
            <div class="manya-bubble" style="opacity:0.7">
                <span class="manya-dots">Manya is thinking... 💭</span>
            </div>
        `;
        chatBody.appendChild(msgDiv);
        scrollToBottom();
        return id;
    }

    function removeTypingIndicator(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }

    function handleAgentAction(actionType, actionData) {
        if (!actionType) return;

        if (actionType === 'NAVIGATE_REGISTER') {
            setTimeout(() => {
                if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
                    const regForm = document.getElementById('register-form');
                    const landingActions = document.getElementById('landing-actions');
                    if (regForm) regForm.style.display = 'block';
                    if (landingActions) landingActions.style.display = 'none';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    window.location.href = '/index.html#register';
                }
            }, 1200);
        } else if (actionType === 'PREFILL_TRANSFER') {
            if (window.location.pathname.includes('transfer.html')) {
                if (actionData && actionData.suggestedAmount) {
                    const amtInput = document.getElementById('amount');
                    if (amtInput) amtInput.value = actionData.suggestedAmount;
                }
            } else {
                setTimeout(() => { window.location.href = '/transfer.html'; }, 1500);
            }
        } else if (actionType === 'PROMPT_LOGIN') {
            setTimeout(() => {
                if (actionData && actionData.redirect) {
                    window.location.href = actionData.redirect;
                }
            }, 1500);
        }
    }

    function scrollToBottom() {
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getCurrentTime() {
        const d = new Date();
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function formatMarkdown(txt) {
        if (!txt) return '';
        let formatted = txt
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
        return formatted;
    }

    function escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function injectManyaWidgetHTML() {
        if (document.getElementById('manya-widget')) return;

        const widgetDiv = document.createElement('div');
        widgetDiv.id = 'manya-widget';
        widgetDiv.className = 'manya-widget-wrapper';
        widgetDiv.innerHTML = `
            <!-- Auto-Initiating Greeting Pop-up Chip -->
            <div id="manya-auto-chip" class="manya-auto-chip" style="display: none;">
                <div style="font-size:1.3rem;">✨</div>
                <div style="flex:1;">
                    <div style="font-weight:600; color:var(--accent-gold); font-size:0.78rem;">MANYA AI ASSISTANT</div>
                    <div id="manya-chip-text" style="font-size:0.82rem; margin-top:2px;">Hello! I'm Manya, your personal AI Banking Assistant. How can I help?</div>
                </div>
                <button id="manya-chip-close" class="manya-auto-chip-close">&times;</button>
            </div>

            <!-- Floating Action Trigger Button -->
            <button id="manya-trigger-btn" class="manya-trigger-btn" title="Chat with Manya AI">
                <div class="manya-pulse-ring"></div>
                <div class="manya-online-badge"></div>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>

            <!-- Glassmorphism Chat Drawer -->
            <div id="manya-drawer" class="manya-drawer">
                <!-- Header -->
                <div class="manya-header">
                    <div class="manya-profile-info">
                        <div class="manya-avatar">M</div>
                        <div>
                            <div class="manya-name">Manya</div>
                            <div class="manya-subtitle">
                                <span style="width:6px;height:6px;background:var(--success);border-radius:50%;display:inline-block;"></span>
                                Agentic AI Engine • SecureBank
                            </div>
                        </div>
                    </div>
                    <button id="manya-close-drawer" class="manya-close-btn">&times;</button>
                </div>

                <!-- Chat Body -->
                <div id="manya-body" class="manya-body"></div>

                <!-- Quick Action Chips -->
                <div id="manya-chips" class="manya-chips"></div>

                <!-- Input Footer -->
                <div class="manya-footer">
                    <input type="text" id="manya-input" class="manya-input" placeholder="Ask Manya (e.g. Open account, check balance...)" />
                    <button id="manya-send" class="manya-send-btn" title="Send message">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(widgetDiv);
    }
});
