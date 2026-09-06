import React from 'react';
import { ArrowRight, CheckCircle2, Cpu, Database, ShieldAlert, Sparkles, Terminal } from 'lucide-react';

export default function GraphVisualizer({ currentNode, executionTrace = [] }) {
  const nodes = [
    { id: 'supervisor', label: 'Supervisor Agent', icon: Cpu, color: 'border-purple-500/50 bg-purple-500/10 text-purple-300', desc: 'Intent classification & goal planning' },
    { id: 'rag_agent', label: 'Knowledge RAG Agent', icon: Database, color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300', desc: 'Vector search & citation synthesis' },
    { id: 'mcp_tool_agent', label: 'MCP Tool Agent', icon: Terminal, color: 'border-indigo-500/50 bg-indigo-500/10 text-indigo-300', desc: 'Model Context Protocol execution' },
    { id: 'hitl_gate', label: 'HITL Security Gate', icon: ShieldAlert, color: 'border-amber-500/50 bg-amber-500/10 text-amber-300', desc: 'Human-in-the-Loop approval gate' },
    { id: 'reflection_agent', label: 'Reflection Agent', icon: Sparkles, color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300', desc: 'Self-correction & quality validation' }
  ];

  return (
    <div className="glass-panel p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" /> LangGraph Multi-Agent Topology State
          </h2>
          <p className="text-xs text-slate-400 font-mono">Live state machine execution graph & conditional routing matrix</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono">Active Node:</span>
          <span className="badge badge-cyan font-mono">{currentNode || 'supervisor'}</span>
        </div>
      </div>

      {/* Node Graph Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {nodes.map((n) => {
          const Icon = n.icon;
          const isActive = currentNode === n.id;
          const isVisited = executionTrace.some(t => t.node === n.id);

          return (
            <div
              key={n.id}
              className={`p-4 rounded-xl border transition-all relative flex flex-col justify-between ${
                isActive
                  ? `${n.color} ring-2 ring-indigo-500 shadow-lg glow-indigo scale-105 z-10`
                  : isVisited
                  ? 'border-emerald-500/30 bg-slate-900/60 text-slate-300'
                  : 'border-white/5 bg-slate-950/40 text-slate-500 opacity-60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-white/10' : 'bg-slate-900'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isVisited && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </div>
                <h3 className="font-semibold text-sm mb-1">{n.label}</h3>
                <p className="text-xs text-slate-400">{n.desc}</p>
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Node ID</span>
                <span>{n.id}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Execution Trace Timeline */}
      <div className="glass-card p-4 rounded-xl border border-white/5 space-y-3">
        <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">Graph Execution Step Trace</h3>
        {executionTrace.length === 0 ? (
          <p className="text-xs text-slate-500 italic">No graph executions logged for this session yet.</p>
        ) : (
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
            {executionTrace.map((t, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-950/60 border border-white/5">
                <div className="flex items-center gap-3 font-mono">
                  <span className="text-indigo-400 font-bold">Step #{t.step}</span>
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span className="text-slate-200 uppercase font-semibold">{t.node}</span>
                </div>
                <span className="text-slate-500 font-mono">{t.timestamp}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
