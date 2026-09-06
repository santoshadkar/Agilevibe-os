import React, { useState } from 'react';
import { DAY_IN_LIFE_DATA } from '../data/rteData';
import { 
  Clock, 
  Calendar, 
  CheckCircle, 
  Play, 
  Sparkles, 
  ChevronRight, 
  FileText,
  AlertCircle
} from 'lucide-react';

export default function DayInTheLife() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const currentPhase = DAY_IN_LIFE_DATA[activePhaseIndex];

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-indigo-500/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>SAFe Execution Playbook</span>
          </div>
          <h1 className="text-3xl font-heading font-extrabold text-white">
            A Day & Cycle in the Life of an <span className="text-gradient">RTE</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Navigate through the 10-week SAFe Program Increment cycle. From Pre-PI preparation to Day 1 & Day 2 facilitation, Iteration execution syncs, and Inspect & Adapt workshops.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 shrink-0">
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Current Phase Selected:</span>
            <span className="text-sm font-bold text-indigo-400">{currentPhase.phaseName}</span>
          </div>
        </div>
      </div>

      {/* Interactive Phase Selector Slider / Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {DAY_IN_LIFE_DATA.map((phase, idx) => {
          const isActive = activePhaseIndex === idx;
          return (
            <button
              key={phase.phaseId}
              onClick={() => setActivePhaseIndex(idx)}
              className={`flex items-center space-x-3 px-5 py-3.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]'
                  : 'bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                isActive ? 'bg-white text-indigo-700' : 'bg-slate-800 text-slate-400'
              }`}>
                {idx + 1}
              </span>
              <span>{phase.phaseName}</span>
            </button>
          );
        })}
      </div>

      {/* Main Phase Detailed View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Interactive Activity Timeline */}
        <div className="lg:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentPhase.badgeColor}`}>
                {currentPhase.badge}
              </span>
              <h2 className="text-xl font-heading font-bold text-white mt-2">{currentPhase.phaseName}</h2>
            </div>
            <p className="text-xs text-slate-400 max-w-xs text-right hidden sm:block">{currentPhase.summary}</p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
            {currentPhase.activities.map((act, idx) => (
              <div key={idx} className="relative flex items-start space-x-4 group">
                {/* Timeline node */}
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 flex items-center justify-center shrink-0 font-bold text-xs group-hover:scale-110 group-hover:border-cyan-400 transition-transform">
                  {idx + 1}
                </div>

                {/* Content Box */}
                <div className="flex-1 glass-panel p-5 rounded-2xl border border-slate-800/80 group-hover:border-indigo-500/40 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-heading font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {act.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-[11px] font-mono font-semibold w-fit">
                      {act.time}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Facilitator Checklist & Pro-Tips */}
        <div className="space-y-6">
          
          <div className="glass-panel p-6 rounded-3xl border border-indigo-500/20 space-y-4">
            <h3 className="text-base font-heading font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>RTE Facilitator Golden Rules</span>
            </h3>
            
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Keep the timeboxes sacred during PI Breakouts. Extended breakouts hide dependency friction.</span>
              </li>
              <li className="flex items-start space-x-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Always ensure Business Owners score both Committed and Uncommitted PI Objectives on Day 2.</span>
              </li>
              <li className="flex items-start space-x-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Never run Scrum of Scrums (SoS) as a status report; focus strictly on program board dependencies and blockers.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-3">
            <h3 className="text-sm font-heading font-bold text-white flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Common Pitfall Warning</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If Scrum Masters report "all good, no blockers" for 3 consecutive SoS meetings while feature velocity is flat, team psychological safety is compromised. Walk the gemba.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
