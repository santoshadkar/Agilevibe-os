import React from 'react';
import { Cpu, Database, Plug, ShieldAlert, RefreshCw, Zap } from 'lucide-react';

export default function Navbar({ hitlCount, activeTab, setActiveTab }) {
  return (
    <nav className="glass-panel mx-4 mt-4 px-6 py-3 flex items-center justify-between z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg glow-indigo animate-pulse-subtle">
          <Cpu className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-gradient">OmniAgent OS</h1>
          <p className="text-xs text-slate-400 font-mono">Autonomous Personal Operations Engine v1.0</p>
        </div>
      </div>

      <div className="flex items-center bg-slate-950/60 p-1.5 rounded-xl border border-white/5 gap-1">
        <button
          onClick={() => setActiveTab('chat')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'chat'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Zap className="w-4 h-4" /> Agent Console
        </button>
        <button
          onClick={() => setActiveTab('graph')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'graph'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <RefreshCw className="w-4 h-4" /> LangGraph Workflow
        </button>
        <button
          onClick={() => setActiveTab('vault')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'vault'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Database className="w-4 h-4" /> RAG Vault
        </button>
        <button
          onClick={() => setActiveTab('mcp')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'mcp'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Plug className="w-4 h-4" /> MCP Servers
        </button>
        <button
          onClick={() => setActiveTab('webhooks')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'webhooks'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Zap className="w-4 h-4 text-cyan-400" /> Webhooks & Loops
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveTab('hitl')}
          className={`relative px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-2 transition-all ${
            hitlCount > 0
              ? 'border-amber-500/50 bg-amber-500/10 text-amber-300 animate-pulse'
              : 'border-white/10 bg-slate-900/40 text-slate-400'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>HITL Approvals</span>
          {hitlCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center justify-center">
              {hitlCount}
            </span>
          )}
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Engine Online
        </div>
      </div>
    </nav>
  );
}
