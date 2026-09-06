import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, X, Minimize2, Maximize2, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestedChips?: string[];
}

export const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [inputQuery, setInputQuery] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg_welcome',
      sender: 'ai',
      text: '👋 **Hello! I am your Enterprise AI Metrics Assistant.**\n\nAsk me anything about **OKRs**, **KPIs**, **KRAs**, **KRIs**, the **PBWM Banking Case Study**, **Google 0.0–1.0 Scoring**, **DORA 4 DevOps Math**, or **Governance Cadences**!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedChips: [
        'Difference between OKR & KPI?',
        'How does Google 0.0-1.0 scoring work?',
        'Explain PBWM Tier 4 RTE metrics',
        'What are DORA 4 DevOps formulas?',
        'What is a KRI threshold escalation SLA?'
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, isTyping]);

  // AI Knowledge Search & Intent Handler Engine
  const generateAIResponse = (query: string): string => {
    const q = query.toLowerCase().trim();

    // 1. OKR vs KPI vs KRA vs KRI comparison
    if (q.includes('difference') || (q.includes('okr') && q.includes('kpi')) || q.includes('compare')) {
      return `💡 **Core Framework Differences & Relationships:**\n\n` +
        `• **OKR (Objectives & Key Results)**: Outcome-focused vector change (*"Where do we want to go?"*). Quarterly stretch targets (e.g., Increase Net AUM by +$15B).\n\n` +
        `• **KPI (Key Performance Indicators)**: Operational health dial (*"How well are we running?"*). Continuous SLA compliance (e.g., API Latency < 120ms, Availability > 99.99%).\n\n` +
        `• **KRA (Key Result Areas)**: Role boundary & scope of accountability (*"What domains am I responsible for?"*). (e.g., RTE ART Flow & PI Planning).\n\n` +
        `• **KRI (Key Risk Indicators)**: Early-warning risk radar (*"What failure threshold is approaching?"*). (e.g., Stale PRs > 48h or CVSS > 7.0 security bugs).`;
    }

    // 2. Google 0.0 to 1.0 Scoring Math
    if (q.includes('google') || q.includes('scoring') || q.includes('stretch') || q.includes('0.6') || q.includes('0.7')) {
      return `🎯 **The Google 0.0 to 1.0 OKR Grading System:**\n\n` +
        `Google grades Key Results on a scale from **0.0 to 1.0** at the end of every quarter:\n\n` +
        `• **0.7 – 0.8 (SWEET SPOT - GREEN)**: Ideal score for an aspirational stretch OKR! Shows the goal was ambitious and well executed.\n` +
        `• **0.4 – 0.6 (PROGRESS MADE - YELLOW)**: Solid effort, but fell short of the aspirational target. Delta is carried forward.\n` +
        `• **0.0 – 0.3 (NEEDS ATTENTION - RED)**: Real progress was not made. Requires immediate root cause analysis & resource reallocation.\n` +
        `• **0.9 – 1.0 (TARGET EXCEEDED - BLUE)**: Goal was either exceptionally hit OR set too easy (Sandbagged!). Next quarter's stretch target must be set significantly higher.`;
    }

    // 3. DORA 4 DevOps Metrics
    if (q.includes('dora') || q.includes('devops') || q.includes('lead time') || q.includes('mttr')) {
      return `🚀 **The DORA 4 DevOps Engineering Benchmark Metrics:**\n\n` +
        `1. **Deployment Frequency (DF)**: How often code is deployed to production. (Elite: Multiple deploys per day).\n` +
        `2. **Lead Time for Changes (LTC)**: Time from code commit to production release. (Elite: < 1 hour).\n` +
        `3. **Mean Time to Recovery (MTTR)**: Time required to restore service after an outage. (Elite: < 1 hour).\n` +
        `4. **Change Failure Rate (CFR)**: Percentage of deployments causing production defects. (Elite: 0% – 15%).`;
    }

    // 4. PBWM Banking Case Study Queries
    if (q.includes('pbwm') || q.includes('banking') || q.includes('wealth') || q.includes('rte') || q.includes('tier') || q.includes('csuite') || q.includes('ceo')) {
      return `🏦 **Global Horizon PBWM Case Study Overview ($248.5B AUM):**\n\n` +
        `The PBWM Banking scenario demonstrates a 7-tier cascading top-to-bottom alignment:\n\n` +
        `• **Tier 1 - CEO**: Objective: Grow Net New AUM by +$15.0B & Launch AI Advisor.\n` +
        `• **Tier 2 - CTO**: Cloud Modernization: Sub-120ms Latency & 99.99% Availability.\n` +
        `• **Tier 3 - CXO**: Client NPS +72 & Automate 80% Portfolio Rebalancing.\n` +
        `• **Tier 4 - RTE (Wealth ART)**: 94% ART PI Predictability Measure across 8 Squads.\n` +
        `• **Tier 5 - TSM (Tech Lead)**: DORA Elite Status & Zero CVSS > 7.0 Security Vulnerabilities.\n` +
        `• **Tier 6 - SM / PO Partnership**: 100% Backlog DoR & Sprint Commitment Reliability.\n` +
        `• **Tier 7 - Squad Developers**: Zero Escaped Production Defects & 100% DoD Compliance.`;
    }

    // 5. Governance Cadences & Escalation SLAs
    if (q.includes('governance') || q.includes('cadence') || q.includes('daily') || q.includes('weekly') || q.includes('monthly') || q.includes('quarterly') || q.includes('sla')) {
      return `📅 **Enterprise Governance Rhythm & Review Durations:**\n\n` +
        `• **Daily Standup (15 Mins)**: Focus on KRIs (stale PRs > 48h, broken builds) & Sprint burndown. Blocker SLA: < 2 hours.\n` +
        `• **Weekly Flow Sync (30–45 Mins)**: Focus on Lead KPIs (PR review turnaround < 4h) & Security KRIs. Escalation SLA: 24 hours.\n` +
        `• **Bi-Weekly / Sprint Review (60–90 Mins)**: Key Result progress deltas & accepted business value. Escalation SLA: Bi-weekly ART Sync.\n` +
        `• **Monthly ART Sync (60–120 Mins)**: ART PI Predictability Measure (80%–100% target) & ROAMed risk log. Escalation SLA: 48 hours.\n` +
        `• **Quarterly QBR (1–2 Days)**: Google 0.0–1.0 OKR scoring & Value Stream funding.\n` +
        `• **Annual Retreat (2–3 Days)**: Corporate Strategic Themes & Role KRA Charters.`;
    }

    // 6. Role Specific Questions (SM, PO, RTE, TSM, AI Leader)
    if (q.includes('scrum master') || q.includes('sm') || q.includes('po') || q.includes('product owner') || q.includes('tsm')) {
      return `👤 **Role Metrics & Accountability Charters:**\n\n` +
        `• **Scrum Master (SM)**: KRA: Ceremony Facilitation & Blocker Removal. KPI: Team Flow Efficiency & Velocity Stability. OKR: 95% Sprint Commitment Reliability.\n\n` +
        `• **Product Owner (PO)**: KRA: Sprint Backlog Ownership & Acceptance Criteria. KPI: Business Value Points Delivered per Sprint. OKR: 100% Backlog Definition of Ready (DoR).\n\n` +
        `• **Technical Scrum Master (TSM)**: KRA: CI/CD Pipeline & Code Quality. KPI: DORA Change Failure Rate < 3%. KRI: PR Staleness > 48h.`;
    }

    // 7. 2027 AI Future Telemetry
    if (q.includes('2027') || q.includes('ai future') || q.includes('telemetry') || q.includes('circuit breaker')) {
      return `🤖 **The 2027 AI-Augmented Metrics Paradigm:**\n\n` +
        `1. **Self-Adjusting Dynamic OKRs**: Production LLM telemetry automatically re-tunes Key Result targets based on market adoption vectors.\n` +
        `2. **Predictive KRI Circuit Breakers**: AI DevSecOps bots automatically pause deployment pipelines if risk thresholds are crossed.\n` +
        `3. **Automated Story Cascading**: CEO/CTO strategic objectives are automatically decomposed into Gherkin user stories by LLM agents.`;
    }

    // Default Fallback Response
    return `🤖 **I can help you explore any metric framework or concept!**\n\n` +
      `Try asking me about:\n` +
      `• *"What is the difference between OKR and KPI?"*\n` +
      `• *"How does Google grade aspirational stretch OKRs?"*\n` +
      `• *"Explain the PBWM Banking Case Study alignment"* \n` +
      `• *"What are the 6 Governance Cadence durations and SLAs?"*\n` +
      `• *"What are DORA 4 DevOps metrics formulas?"*`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    // Simulate AI thinking latency
    setTimeout(() => {
      const aiReplyText = generateAIResponse(text);
      const aiMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedChips: [
          'Google 0.0-1.0 scoring rules?',
          'PBWM Tier 4 RTE metrics',
          'Governance cadence durations & SLAs',
          'DORA 4 DevOps formulas'
        ]
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Helper to render text cleanly by converting **text** into <strong> tags without raw asterisks
  const renderFormattedMessageText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      const parts = line.split('**');
      return (
        <React.Fragment key={lineIdx}>
          {parts.map((part, partIdx) => {
            if (partIdx % 2 === 1) {
              return <strong key={partIdx} className="font-bold text-cyan-200">{part}</strong>;
            }
            return <span key={partIdx}>{part}</span>;
          })}
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Launcher Button when closed */}
      {!isOpen && (
        <button
          onClick={() => { setIsOpen(true); setIsMinimized(false); }}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold shadow-2xl hover:scale-105 transition-all border border-cyan-400/40"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
            </span>
          </div>
          <span className="text-xs font-extrabold tracking-wide">Ask AI Assistant</span>
        </button>
      )}

      {/* Floating Glassmorphic Chat Modal */}
      {isOpen && (
        <div
          className={`glass-panel bg-slate-900/95 border border-cyan-500/30 backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col transition-all duration-300 ${
            isMinimized ? 'w-80 h-16' : 'w-96 sm:w-[420px] h-[540px]'
          }`}
        >
          {/* Modal Header */}
          <div className="p-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80 rounded-t-2xl">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-md">
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-white flex items-center gap-1.5">
                  <span>AI Metrics Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </h3>
                <p className="text-[10px] text-slate-400">Enterprise Metrics & Governance Expert</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title={isMinimized ? "Expand" : "Minimize"}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                title="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Content Body (hidden when minimized) */}
          {!isMinimized && (
            <>
              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-center gap-1.5 mb-1 text-[10px] text-slate-400">
                      {msg.sender === 'ai' ? (
                        <>
                          <Bot className="w-3 h-3 text-cyan-400" />
                          <span className="font-bold text-cyan-300">AI Assistant</span>
                        </>
                      ) : (
                        <>
                          <User className="w-3 h-3 text-indigo-400" />
                          <span className="font-bold text-indigo-300">You</span>
                        </>
                      )}
                      <span>• {msg.timestamp}</span>
                    </div>

                    <div
                      className={`p-3 rounded-2xl max-w-[90%] leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-br-none shadow-md'
                          : 'bg-slate-950/90 border border-slate-800 text-slate-200 rounded-bl-none'
                      }`}
                    >
                      {renderFormattedMessageText(msg.text)}
                    </div>

                    {/* Suggested Chips */}
                    {msg.sender === 'ai' && msg.suggestedChips && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                        {msg.suggestedChips.map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(chip)}
                            className="px-2.5 py-1 rounded-full bg-slate-950 border border-cyan-500/30 text-cyan-300 text-[10px] font-medium hover:bg-cyan-500/20 transition-all text-left"
                          >
                            💡 {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-cyan-400 bg-slate-950 p-2.5 rounded-xl border border-slate-800 w-32">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                    <span className="text-[11px] font-semibold animate-pulse">Formulating...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 border-t border-slate-800 bg-slate-950/90 rounded-b-2xl">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about OKRs, KPIs, PBWM, DORA math..."
                    className="flex-1 bg-slate-900 text-slate-100 text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputQuery.trim()}
                    className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:hover:bg-cyan-500 text-slate-950 font-bold transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
