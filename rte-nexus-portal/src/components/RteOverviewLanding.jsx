import React from 'react';
import { RTE_ROLES_DATA } from '../data/rteData';
import { 
  Sparkles, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Layers, 
  ShieldAlert, 
  TrendingUp, 
  Calendar,
  HeartHandshake
} from 'lucide-react';

export default function RteOverviewLanding({ onNavigateTab }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'HeartHandshake': return HeartHandshake;
      case 'TrendingUp': return TrendingUp;
      case 'Calendar': return Calendar;
      case 'ShieldAlert': return ShieldAlert;
      default: return HeartHandshake;
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* IMPRESSIVE HERO BANNER - Direct hit to RTE */}
      <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-sapphire-500/30 overflow-hidden bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-sapphire-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 -mb-12 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-sapphire-400" />
            <span>The Ultimate One-Stop RTE Portal</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Welcome to <span className="text-gradient">RTE Nexus</span>: The Chief Command Center for Release Train Engineers
          </h1>

          {/* Definition Box */}
          <div className="p-6 rounded-2xl bg-navy-950/90 border border-slate-800 space-y-3 shadow-xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sapphire-400 flex items-center space-x-1.5">
              <Compass className="w-4 h-4" />
              <span>What is a Release Train Engineer (RTE)?</span>
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
              In the Scaled Agile Framework (SAFe), the <strong>Release Train Engineer (RTE)</strong> is the chief servant leader, master coach, and operational facilitator for an <strong>Agile Release Train (ART)</strong>—a cross-functional team of 50 to 125+ practitioners delivering continuous value stream outcomes.
            </p>
          </div>

          {/* Quick Action Launchpad */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button 
              onClick={() => onNavigateTab('servant-leadership')}
              className="px-6 py-3.5 rounded-2xl bg-sapphire-600 hover:bg-sapphire-500 text-white font-bold text-xs flex items-center space-x-2 shadow-glow-sapphire transition-all transform hover:scale-105"
            >
              <span>Servant Leadership & Fresh ART</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigateTab('day-in-life')}
              className="px-6 py-3.5 rounded-2xl bg-navy-900 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800 flex items-center space-x-2 transition-all"
            >
              <span>Day in the Life Playbook</span>
            </button>
            <button 
              onClick={() => onNavigateTab('ai-copilot')}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs shadow-md flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch AI Suite</span>
            </button>
          </div>
        </div>
      </div>

      {/* CORE RTE RESPONSIBILITIES GRID */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center space-x-2">
            <Award className="w-6 h-6 text-sapphire-400" />
            <span>4 Core Responsibilities of an RTE</span>
          </h2>
          <p className="text-xs text-slate-400">The essential operational pillars that define the RTE role.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RTE_ROLES_DATA.corePillars.map((pillar) => {
            const Icon = getIcon(pillar.icon);
            return (
              <div 
                key={pillar.id}
                className="glass-panel p-6 rounded-3xl border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-navy-950 border border-slate-800 text-slate-400">
                      Core Duty
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white">{pillar.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{pillar.description}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-navy-950 border border-slate-800 text-xs text-sapphire-300 flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Primary Impact:</strong> {pillar.keyAction}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ROLE COMPARISON MATRIX: SM vs RTE vs STE */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <Users className="w-6 h-6 text-sky-400" />
              <span>Agile Leadership Comparison: SM vs RTE vs STE</span>
            </h2>
            <p className="text-xs text-slate-400">Understanding exact boundaries and handoffs across SAFe leadership roles.</p>
          </div>
          <span className="text-xs font-bold text-sapphire-300 bg-sapphire-500/10 px-3 py-1.5 rounded-full border border-sapphire-500/30 w-fit">
            SAFe 6.0 Role Architecture
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-navy-950 text-slate-300 uppercase tracking-wider">
                <th className="p-4 rounded-tl-xl font-bold">Aspect</th>
                <th className="p-4 font-bold text-slate-300">Scrum Master (SM)</th>
                <th className="p-4 font-bold text-sapphire-300 bg-sapphire-500/10">Release Train Engineer (RTE)</th>
                <th className="p-4 rounded-tr-xl font-bold text-sky-300">Solution Train Engineer (STE)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {RTE_ROLES_DATA.roleComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-navy-900/60 transition-colors">
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sapphire-400"></span>
                    <span>{row.aspect}</span>
                  </td>
                  <td className="p-4 text-slate-300">{row.sm}</td>
                  <td className="p-4 text-sapphire-200 font-semibold bg-sapphire-500/5 border-x border-sapphire-500/10">{row.rte}</td>
                  <td className="p-4 text-sky-200">{row.ste}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
