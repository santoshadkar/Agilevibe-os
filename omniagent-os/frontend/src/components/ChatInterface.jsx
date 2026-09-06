import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Terminal, Database, ShieldAlert, Cpu, RefreshCcw, CheckCircle2 } from 'lucide-react';

export default function ChatInterface({ messages = [], onSendMessage, isLoading, supervisorPlan = [], pendingApproval }) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSendMessage(input);
    setInput('');
  };

  const getSenderIcon = (sender) => {
    switch (sender) {
      case 'user':
        return <User className="w-4 h-4 text-cyan-400" />;
      case 'supervisor':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'rag_agent':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'mcp_tool_agent':
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      case 'reflection_agent':
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
      default:
        return <Bot className="w-4 h-4 text-indigo-400" />;
    }
  };

  const getSenderBadge = (sender) => {
    switch (sender) {
      case 'supervisor':
        return <span className="badge badge-purple font-mono">Supervisor Router</span>;
      case 'rag_agent':
        return <span className="badge badge-cyan font-mono">Knowledge RAG Agent</span>;
      case 'mcp_tool_agent':
        return <span className="badge badge-indigo font-mono">MCP Tool Agent</span>;
      case 'reflection_agent':
        return <span className="badge badge-emerald font-mono">Reflection Agent</span>;
      case 'system':
        return <span className="badge badge-emerald font-mono flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Verified</span>;
      default:
        return null;
    }
  };

  // Helper to render basic markdown formatting cleanly
  const renderFormattedContent = (content) => {
    if (!content) return null;

    // Split lines
    const lines = content.split('\n');

    return lines.map((line, idx) => {
      let formattedLine = line;

      // Handle bold **text**
      const parts = line.split(/(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g);

      return (
        <div key={idx} className="min-h-[1.25rem] my-0.5">
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-bold text-cyan-200">{part.slice(2, -2)}</strong>;
            } else if (part.startsWith('`') && part.endsWith('`')) {
              return <code key={pIdx} className="bg-slate-900 px-1.5 py-0.5 rounded text-xs font-mono text-indigo-300 border border-white/10">{part.slice(1, -1)}</code>;
            } else if (part.startsWith('[') && part.includes('](')) {
              const match = part.match(/\[(.*?)\]\((.*?)\)/);
              if (match) {
                return (
                  <span key={pIdx} className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 text-xs font-mono my-0.5">
                    <Database className="w-3 h-3 text-cyan-400" />
                    {match[1]}
                  </span>
                );
              }
            }
            return part;
          })}
        </div>
      );
    });
  };

  return (
    <div className="glass-panel h-[calc(100vh-140px)] flex flex-col justify-between p-6">
      {/* Active Goal Plan Header */}
      {supervisorPlan.length > 0 && (
        <div className="glass-card p-3.5 mb-4 rounded-xl border border-purple-500/30 bg-purple-500/10 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2 text-xs text-purple-300 font-mono font-semibold">
            <Cpu className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Active Goal Execution Plan:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {supervisorPlan.map((step, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg bg-purple-950/80 text-[11px] text-purple-200 border border-purple-500/30 font-mono shadow-sm">
                <span className="text-purple-400 font-bold mr-1">{idx + 1}.</span> {step}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl glow-cyan animate-pulse-subtle">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">OmniAgent OS Ready</h3>
              <p className="text-xs text-slate-400 max-w-md mt-1">
                Ask anything, request document lookups, execute MCP tools, trigger reflection loops, or schedule automated background tasks.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center pt-2">
              <button
                onClick={() => onSendMessage("What is the OmniAgent architecture overview according to Knowledge Vault?")}
                className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all shadow-md"
              >
                🔍 Search Knowledge Vault
              </button>
              <button
                onClick={() => onSendMessage("Run shell script tool to check workspace build status")}
                className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-300 hover:border-indigo-500/50 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all shadow-md"
              >
                ⚙️ Run Shell Script (HITL Safety Test)
              </button>
              <button
                onClick={() => onSendMessage("Perform web search for recent LangGraph agentic loop tutorials")}
                className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-300 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-500/5 transition-all shadow-md"
              >
                🌐 Web Search via MCP
              </button>
            </div>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender !== 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center shrink-0 shadow-md">
                  {getSenderIcon(msg.sender)}
                </div>
              )}

              <div
                className={`max-w-2xl p-4 rounded-2xl border text-sm space-y-2 shadow-lg ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent'
                    : msg.sender === 'system'
                    ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                    : 'glass-card border-white/10 text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    {getSenderBadge(msg.sender)}
                    <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">{msg.sender}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">{msg.timestamp}</span>
                </div>

                <div className="leading-relaxed font-sans">{renderFormattedContent(msg.content)}</div>

                {msg.metadata?.hitl_required && (
                  <div className="p-3 mt-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Execution paused pending HITL approval in the queue tab.</span>
                    </div>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-md">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Console Bar */}
      <form onSubmit={handleSubmit} className="mt-4 pt-4 border-t border-white/10 flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Command OmniAgent OS (e.g. 'Search vault for workflows' or 'Run script tool')..."
          disabled={isLoading}
          className="flex-1 bg-slate-950/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm flex items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all shadow-lg glow-indigo"
        >
          {isLoading ? (
            <RefreshCcw className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <span>Execute</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
