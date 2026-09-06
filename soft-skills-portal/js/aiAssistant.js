// SoftSkills Nexus - Live AI Soft Skills Assistant ("Nexus AI Coach") - Clean Formatting

class NexusAIAssistant {
  constructor() {
    this.messages = [
      {
        sender: 'ai',
        text: '👋 Hello! I am your Nexus AI Soft Skills Coach. Ask me anything about handling difficult conversations, drafting feedback scripts, overcoming public speaking fear, or managing team conflict!'
      }
    ];
    this.init();
  }

  init() {
    this.renderChatWindow();
    this.bindEvents();
  }

  renderChatWindow() {
    const container = document.getElementById('ai-assistant-container');
    if (!container) return;

    let html = `
      <div class="card" style="max-width: 900px; margin: 0 auto; border-color: var(--border-accent); box-shadow: 0 10px 40px rgba(99,102,241,0.15);">
        <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--accent-cyan)); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 0 15px rgba(99,102,241,0.5);">
              🤖
            </div>
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">Nexus AI Soft Skills Coach</h3>
              <span class="badge" style="background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald); padding: 0.15rem 0.6rem; font-size: 0.75rem;">
                ● Live AI Ready
              </span>
            </div>
          </div>

          <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="window.aiCoachApp.clearHistory()">
            🗑️ Clear Chat
          </button>
        </div>

        <!-- Suggestion Chips -->
        <div style="margin-bottom: 1rem;">
          <strong style="color: var(--text-dim); font-size: 0.8rem; display: block; margin-bottom: 0.4rem;">QUICK COACHING PROMPTS:</strong>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="tag-item" style="cursor: pointer; background: rgba(99,102,241,0.15); border-color: var(--primary); color: #fff;" onclick="window.aiCoachApp.sendPrompt('How do I deliver difficult feedback using the SBI model?')">
              💬 Draft SBI Feedback Script
            </button>
            <button class="tag-item" style="cursor: pointer; background: rgba(6,182,212,0.15); border-color: var(--accent-cyan); color: #fff;" onclick="window.aiCoachApp.sendPrompt('How do I handle an aggressive interruption in an executive meeting?')">
              👔 Executive Interruption Cue
            </button>
            <button class="tag-item" style="cursor: pointer; background: rgba(236,72,153,0.15); border-color: var(--accent-pink); color: #fff;" onclick="window.aiCoachApp.sendPrompt('How do I ask my manager for a salary raise and promotion?')">
              💰 Salary Raise Pitch Script
            </button>
            <button class="tag-item" style="cursor: pointer; background: rgba(16,185,129,0.15); border-color: var(--accent-emerald); color: #fff;" onclick="window.aiCoachApp.sendPrompt('How do I overcome stage fright and public speaking anxiety?')">
              🎤 Public Speaking Anxiety Tips
            </button>
          </div>
        </div>

        <!-- Chat Output Messages Scroll Area -->
        <div id="ai-chat-history" style="height: 380px; overflow-y: auto; background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">
    `;

    this.messages.forEach(msg => {
      const isAI = msg.sender === 'ai';
      // Format any bold text cleanly into <strong> tags without raw asterisks
      const formattedText = msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      html += `
        <div style="display: flex; gap: 0.75rem; align-items: flex-start; justify-content: ${isAI ? 'flex-start' : 'flex-end'};">
          ${isAI ? `
            <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;">🤖</div>
          ` : ''}

          <div style="max-width: 80%; background: ${isAI ? 'rgba(18, 24, 38, 0.95)' : 'linear-gradient(135deg, var(--primary), var(--accent-purple))'}; border: 1px solid ${isAI ? 'var(--border-color)' : 'transparent'}; padding: 0.9rem 1.2rem; border-radius: var(--radius-md); color: #fff; font-size: 0.93rem; line-height: 1.6; white-space: pre-line; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
            ${formattedText}
          </div>

          ${!isAI ? `
            <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--accent-cyan); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;">👤</div>
          ` : ''}
        </div>
      `;
    });

    html += `
        </div>

        <!-- Input Box -->
        <div style="display: flex; gap: 0.75rem;">
          <input type="text" id="ai-user-input" placeholder="Ask your AI Soft Skills Coach (e.g. 'How do I handle a disengaged teammate?')..." 
            style="flex-grow: 1; padding: 0.85rem 1.2rem; border-radius: var(--radius-md); background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: #fff; font-family: inherit; font-size: 0.95rem;"
            onkeypress="if(event.key==='Enter') window.aiCoachApp.handleSend()">
          <button class="btn btn-primary" onclick="window.aiCoachApp.handleSend()">
            Send Message ➔
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;
    this.scrollToBottom();
  }

  bindEvents() {
    // Registered on window.aiCoachApp
  }

  sendPrompt(promptText) {
    const inputEl = document.getElementById('ai-user-input');
    if (inputEl) {
      inputEl.value = promptText;
      this.handleSend();
    }
  }

  handleSend() {
    const inputEl = document.getElementById('ai-user-input');
    if (!inputEl) return;
    const text = inputEl.value.trim();
    if (!text) return;

    // User message
    this.messages.push({ sender: 'user', text });
    inputEl.value = '';
    this.renderChatWindow();

    // Show typing state
    setTimeout(() => {
      const responseText = this.generateAIResponse(text);
      this.messages.push({ sender: 'ai', text: responseText });
      this.renderChatWindow();
    }, 500);
  }

  generateAIResponse(userText) {
    const lower = userText.toLowerCase();

    if (lower.includes('sbi') || lower.includes('difficult feedback') || lower.includes('constructive feedback')) {
      return `🎯 <strong>SBI Feedback Framework Guide</strong>

<strong>Situation</strong>: Specify exact time and place without vague generalizations.
<strong>Behavior</strong>: Describe observable, non-judgmental action.
<strong>Impact</strong>: Explain outcome on team/project.

💬 <strong>Word-for-Word Script Example</strong>:
"In yesterday's client presentation (Situation), when you changed slide 4 without team sync (Behavior), it created confusion for the client and delayed decisions (Impact). Next time, let's align slide changes prior to client calls."

🧍 <strong>Vocal Cue</strong>: Use a calm, steady vocal tone in a private 1-on-1 setting.
⚠️ <strong>Avoid</strong>: Subjective labels like "You were unprofessional".`;
    }

    if (lower.includes('interrupt') || lower.includes('meeting') || lower.includes('executive')) {
      return `👔 <strong>Executive Interruption De-escalation Strategy</strong>

1. <strong>Acknowledge & Validate</strong>: Never argue publicly. Validate their concern immediately.
2. <strong>Anchor in Data</strong>: Pivot to verified metrics or slide data.
3. <strong>Bridge Back</strong>: Smoothly transition back to presentation flow.

💬 <strong>Word-for-Word Script Example</strong>:
"That is a critical question. This ROI calculation was audited by Finance on Thursday using primary SQL logs. I have the raw audit table on slide 14, or we can deep-dive right after this overview."

🧍 <strong>Body Language</strong>: Upright posture, steady eye contact, unhurried cadence.`;
    }

    if (lower.includes('salary') || lower.includes('raise') || lower.includes('promotion') || lower.includes('negotiat')) {
      return `💰 <strong>Salary Raise & Promotion Negotiation Strategy</strong>

1. <strong>Prepare Value Portfolio</strong>: Document quantifiable contributions (revenue impact, saved hours, team leadership) rather than personal expenses.
2. <strong>Benchmark Market Data</strong>: Ground your salary target in objective industry standards.
3. <strong>Handle Budget Pushback</strong>: If budget is frozen, secure a written Q3 milestone commitment and explore non-cash perks today (title, conference budget).

💬 <strong>Word-for-Word Script Example</strong>:
"Over the last 12 months, I delivered project X ($120K impact) and reduced sprint latency by 25%. Based on market benchmarks for Senior Lead roles, I am requesting a salary adjustment to $115K. How can we align on this target?"`;
    }

    if (lower.includes('stage fright') || lower.includes('public speaking') || lower.includes('anxiety') || lower.includes('fear')) {
      return `🎤 <strong>Overcoming Public Speaking & Stage Anxiety</strong>

1. <strong>Physiological Regulation</strong>: Perform 3-2-1 diaphragmatic breathing before speaking (lowers cortisol and steadying voice pitch).
2. <strong>3-Part Story Structure</strong>: Opening Hook -> Context/Conflict -> Clear Resolution.
3. <strong>Rule of Three</strong>: Make eye contact with 3 friendly faces across different sections of the room.

💬 <strong>Practice Ritual</strong>: Record 2 minutes of yourself speaking on your phone. Count filler words ("um", "like") and practice silent 2-second pauses instead.`;
    }

    // Default response
    return `💡 <strong>Soft Skills Coach Analysis</strong>

To excel in this scenario, apply the core <strong>3-Step Human Leadership Formula</strong>:

1. <strong>Active Listening (EQ)</strong>: Count to 3 silently after the speaker finishes before replying. Paraphrase: "What I hear you saying is X, am I understanding correctly?"
2. <strong>Bottom Line Up Front (BLUF / IQ)</strong>: State your core request, conclusion, or recommendation in the first two sentences.
3. <strong>Mutual Purpose Alignment (SQ)</strong>: Re-anchor the discussion on shared team goals rather than personal friction.

What specific outcome or script would you like me to draft for you?`;
  }

  clearHistory() {
    this.messages = [
      {
        sender: 'ai',
        text: '👋 Chat history cleared. How can I help you elevate your soft skills today?'
      }
    ];
    this.renderChatWindow();
  }

  scrollToBottom() {
    const chatHistory = document.getElementById('ai-chat-history');
    if (chatHistory) {
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.aiCoachApp = new NexusAIAssistant();
});
