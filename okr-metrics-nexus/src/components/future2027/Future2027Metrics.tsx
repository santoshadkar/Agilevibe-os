import React from 'react';
import { FUTURE_2027_METRICS_PARADIGM } from '../../data/conceptsData';
import { Sparkles, Cpu, Bot } from 'lucide-react';

export const Future2027Metrics: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-violet-500/30 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-bold uppercase tracking-wider border border-violet-500/40">
                Future-Forward Vision
              </span>
              <span className="text-xs text-slate-400 font-mono">Horizon 2027</span>
            </div>
            <h2 className="text-xl font-extrabold text-white mt-1">
              {FUTURE_2027_METRICS_PARADIGM.title}
            </h2>
            <p className="text-xs text-slate-300 mt-0.5 max-w-3xl">
              {FUTURE_2027_METRICS_PARADIGM.subtitle}
            </p>
          </div>
        </div>

        {/* 2027 Key Trend Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {FUTURE_2027_METRICS_PARADIGM.trends.map((trend: { trendName: string; description: string }, idx: number) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-violet-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{trend.trendName}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive 2027 AI Agent Cascading Simulator Preview */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyan-400" />
              Automated 2027 AI Metric Telemetry Circuit
            </h3>
            <p className="text-xs text-slate-400">Live AI agent telemetry connecting C-Suite Strategic Themes directly to CI/CD pipeline deployments.</p>
          </div>
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-full border border-cyan-500/40">
            Real-Time AI Telemetry
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-2">
            <span className="text-[10px] font-bold uppercase text-cyan-400 block">1. Dynamic C-Suite Goal Input</span>
            <h4 className="text-xs font-bold text-white">CEO Strategic Objective</h4>
            <p className="text-slate-300 text-[11px]">"Capture \$15B AUM via GenAI Advisory App."</p>
            <div className="p-2 bg-slate-900 rounded font-mono text-[10px] text-cyan-300">
              AI Agent Auto-Decomposes to 8 ART Epics
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/30 space-y-2">
            <span className="text-[10px] font-bold uppercase text-purple-400 block">2. LLM Synthetic Test Evaluator</span>
            <h4 className="text-xs font-bold text-white">Automated KRI Radar</h4>
            <p className="text-slate-300 text-[11px]">"Model hallucination rate checked via 10,000 synthetic test prompts daily."</p>
            <div className="p-2 bg-slate-900 rounded font-mono text-[10px] text-emerald-400">
              Status: 0.2% Hallucination (GREEN)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2">
            <span className="text-[10px] font-bold uppercase text-emerald-400 block">3. Autonomous Pipeline Circuit</span>
            <h4 className="text-xs font-bold text-white">Continuous Deployment</h4>
            <p className="text-slate-300 text-[11px]">"If PR review staleness &gt; 24h, AI agent pairs developers &amp; initiates auto-merge test."</p>
            <div className="p-2 bg-slate-900 rounded font-mono text-[10px] text-emerald-300">
              Deployment Frequency: 14 Deploys / Day
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
