import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { ChatMessage } from '../../types';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User 
} from 'lucide-react';

export const LiveAIAssistant: React.FC = () => {
  const { activeRole } = useApp();

  const initialMessages: ChatMessage[] = [
    {
      id: 'msg_init',
      sender: 'assistant',
      text: `Hello! I am your Live AI Agile & Product Assistant scoped for ${activeRole.toUpperCase().replace('-', ' ')}s. Ask me any question about Scrum 2020, Kanban flow metrics, BDD Gherkin user stories, WSJF prioritization, SAFe PI Planning, OKR roadmaps, or team conflict resolution!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedTerms: ['Empiricism', 'INVEST Criteria', 'WSJF', 'Cycle Time', 'Definition of Done', 'OKRs']
    }
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg_u_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let aiText = '';
      const lower = query.toLowerCase();

      if (lower.includes('retro') || lower.includes('retrospective')) {
        aiText = `For Sprint Retrospectives as a ${activeRole}, switch up formats to prevent retro fatigue! Use Sailboat (Wind/Anchors/Rocks/Sun) or Racecar (Engine/Brakes/Pitstop) themes. Always limit action items to top 1-2 high-impact committed experiments per sprint.`;
      } else if (lower.includes('wsjf') || lower.includes('priorit')) {
        aiText = `Weighted Shortest Job First (WSJF) calculates Cost of Delay (User Value + Time Criticality + Risk Reduction) divided by Job Size / Duration. It replaces subjective executive battles with empirical economic prioritization.`;
      } else if (lower.includes('gherkin') || lower.includes('bdd') || lower.includes('story')) {
        aiText = `BDD Gherkin acceptance criteria format:
• Given (Context/Pre-condition)
• When (User action or system trigger)
• Then (Expected verifiable outcome)
Ensure user stories meet INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable) before Sprint Planning.`;
      } else if (lower.includes('okr') || lower.includes('roadmap')) {
        aiText = `Modern Product Managers use outcome-based "Now / Next / Later" roadmaps tied to company OKRs (Objectives & Key Results) instead of hard calendar release feature dates. This keeps teams agile while communicating strategic intent.`;
      } else if (lower.includes('cycle time') || lower.includes('wip') || lower.includes('flow')) {
        aiText = `Work In Progress (WIP) limits shorten Cycle Time according to Little's Law. Monitor Cumulative Flow Diagrams (CFDs) to spot widening inventory bands in review or QA stages.`;
      } else {
        aiText = `Based on empirical Agile best practices for ${activeRole}s: Ensure Definition of Done is adhered to, maintain transparent backlog ordering, protect team capacity during sprint execution, and track flow metrics for continuous improvement.`;
      }

      const aiMsg: ChatMessage = {
        id: `msg_a_${Date.now()}`,
        sender: 'assistant',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-950/40 via-slate-900 to-indigo-950/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-violet-500/20 text-violet-400 border border-violet-500/40 shadow-lg shadow-violet-500/20">
              <Bot className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white">Live AI Agile & Product Assistant</h2>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40">
                  Role: {activeRole.toUpperCase().replace('-', ' ')}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Ask any question on Scrum theory, Kanban flow metrics, INVEST user stories, WSJF prioritization, SAFe PI Planning, or OKR roadmaps.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col h-[550px]">
        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div className={`p-2 rounded-xl border shrink-0 ${
                msg.sender === 'user'
                  ? 'bg-blue-600 border-blue-500 text-white'
                  : 'bg-violet-600/20 border-violet-500 text-violet-400'
              }`}>
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-2xl space-y-2 p-4 rounded-2xl border text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-blue-600/20 border-blue-500/40 text-blue-100 rounded-tr-none'
                  : 'bg-slate-900 border-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                  <span className="font-bold capitalize">{msg.sender}</span>
                  <span>{msg.timestamp}</span>
                </div>
                <p>{msg.text}</p>

                {msg.suggestedTerms && (
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-800">
                    <span className="text-[10px] text-slate-400 block w-full">Quick Topic Questions:</span>
                    {msg.suggestedTerms.map((term, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(`Explain ${term} best practices for a ${activeRole}`)}
                        className="px-2 py-1 text-[10px] rounded-lg bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 border border-violet-500/30 font-semibold"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-violet-400 italic">
              <Sparkles className="w-4 h-4 animate-spin text-amber-300" />
              <span>AI Assistant reasoning...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
          className="flex items-center gap-2 pt-3 border-t border-slate-800"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Ask AI Assistant any ${activeRole.replace('-', ' ')} question...`}
            className="flex-1 p-3 bg-slate-950 text-xs text-slate-200 rounded-xl border border-slate-800 focus:border-violet-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isTyping}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-violet-500/25 transition-all"
          >
            <Send className="w-4 h-4 text-amber-300" />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
