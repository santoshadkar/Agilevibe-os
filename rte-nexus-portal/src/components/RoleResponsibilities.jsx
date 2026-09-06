import React, { useState } from 'react';
import { RTE_ROLES_DATA } from '../data/rteData';
import { 
  HeartHandshake, 
  TrendingUp, 
  Calendar, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  Sparkles,
  Users,
  Award,
  BookOpen
} from 'lucide-react';

export default function RoleResponsibilities({ onNavigateToPillars }) {
  const [selectedAspect, setSelectedAspect] = useState(null);

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
      
      {/* Hero Header */}
      <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-indigo-500/20 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>SAFe 6.0 Role Blueprint</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            The Role & Responsibilities of a <span className="text-gradient">Release Train Engineer</span>
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {RTE_ROLES_DATA.overview}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button 
              onClick={onNavigateToPillars}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center space-x-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
            >
              <span>Explore 6 Operational Areas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars of RTE Role */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center space-x-2">
            <Award className="w-6 h-6 text-indigo-400" />
            <span>Core Pillars of the RTE Role</span>
          </h2>
          <p className="text-xs text-slate-400">Mastering these 4 operational dimensions ensures high ART predictability and psychological safety.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RTE_ROLES_DATA.corePillars.map((pillar) => {
            const Icon = getIcon(pillar.icon);
            return (
              <div 
                key={pillar.id}
                className="glass-panel p-6 rounded-2xl border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                      Primary Responsibility
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white">{pillar.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{pillar.description}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-indigo-300 flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Key Action:</strong> {pillar.keyAction}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Role Comparison Table: SM vs RTE vs STE */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <Users className="w-6 h-6 text-cyan-400" />
              <span>Agile Leadership Comparison: SM vs RTE vs STE</span>
            </h2>
            <p className="text-xs text-slate-400">Understanding boundaries and handoffs across SAFe leadership levels.</p>
          </div>
          <span className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20 w-fit">
            SAFe 6.0 Alignment
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-300 uppercase tracking-wider">
                <th className="p-4 rounded-tl-xl font-bold">Aspect</th>
                <th className="p-4 font-bold text-slate-300">Scrum Master (SM)</th>
                <th className="p-4 font-bold text-indigo-300 bg-indigo-500/10">Release Train Engineer (RTE)</th>
                <th className="p-4 rounded-tr-xl font-bold text-cyan-300">Solution Train Engineer (STE)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {RTE_ROLES_DATA.roleComparison.map((row, idx) => (
                <tr 
                  key={idx}
                  onClick={() => setSelectedAspect(selectedAspect === idx ? null : idx)}
                  className={`hover:bg-slate-900/50 cursor-pointer transition-colors ${selectedAspect === idx ? 'bg-indigo-950/20' : ''}`}
                >
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>{row.aspect}</span>
                  </td>
                  <td className="p-4 text-slate-300">{row.sm}</td>
                  <td className="p-4 text-indigo-200 font-semibold bg-indigo-500/5 border-x border-indigo-500/10">{row.rte}</td>
                  <td className="p-4 text-cyan-200">{row.ste}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Servant Leadership Mindset Guide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            01
          </div>
          <h3 className="text-base font-bold text-white">Ask, Don't Tell</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Instead of dictating solutions during PI Planning, an RTE asks powerful coaching questions to help Scrum Masters and teams self-discover options.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            02
          </div>
          <h3 className="text-base font-bold text-white">Shield the Train</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Protect teams from mid-PI executive scope injection and conflicting priorities while preserving relentless transparency.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            03
          </div>
          <h3 className="text-base font-bold text-white">Drive Relentless Improvement</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Treat failure as learning. Use Inspect & Adapt (I&A) workshops to tackle root systemic bottlenecks rather than placing blame.
          </p>
        </div>
      </div>

    </div>
  );
}
