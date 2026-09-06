import React from 'react';
import { Target, Search, Sparkles } from 'lucide-react';
import type { EnterpriseRole, MetricCategory } from '../../types/metrics';

interface NavbarProps {
  selectedRole: EnterpriseRole | 'all';
  onRoleSelect: (role: EnterpriseRole | 'all') => void;
  selectedCategory: MetricCategory | 'all';
  onCategorySelect: (cat: MetricCategory | 'all') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeView: 'foundations' | 'casestudy' | 'future2027' | 'explorer' | 'matrix' | 'timeline' | 'governance' | 'simulator';
  onViewChange: (view: 'foundations' | 'casestudy' | 'future2027' | 'explorer' | 'matrix' | 'timeline' | 'governance' | 'simulator') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  activeView,
  onViewChange
}) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 shadow-lg shadow-cyan-500/20">
            <Target className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-white tracking-wide">Enterprise<span className="text-cyan-400">Metrics</span></h1>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
                Nexus v3.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Dedicated OKRs, KPIs, KRAs & KRIs Knowledge & Telemetry Portal
            </p>
          </div>
        </div>

        {/* Global Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search OKRs, KPIs, KRAs, KRIs across 8 roles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-950/80 text-slate-100 text-xs rounded-xl pl-9 pr-4 py-2 border border-slate-800 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        {/* Top Quick Actions / Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <button
            onClick={() => onViewChange('foundations')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeView === 'foundations'
                ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
            }`}
          >
            Foundations & 101/201
          </button>
          <button
            onClick={() => onViewChange('casestudy')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeView === 'casestudy'
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500 font-bold'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
            }`}
          >
            PBWM Banking Case Study
          </button>
          <button
            onClick={() => onViewChange('future2027')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeView === 'future2027'
                ? 'bg-violet-500/20 text-violet-300 border-violet-500 font-bold'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
            }`}
          >
            2027 AI Future
          </button>
          <button
            onClick={() => onViewChange('explorer')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeView === 'explorer'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 font-bold'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            Role Explorer
          </button>
          <button
            onClick={() => onViewChange('matrix')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeView === 'matrix'
                ? 'bg-purple-500/20 text-purple-300 border-purple-500 font-bold'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            Matrix
          </button>
          <button
            onClick={() => onViewChange('governance')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeView === 'governance'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold shadow-md shadow-emerald-500/10'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
            }`}
          >
            Governance & Cadences
          </button>
          <button
            onClick={() => onViewChange('timeline')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeView === 'timeline'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500 font-bold'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            History Timeline
          </button>
          <button
            onClick={() => onViewChange('simulator')}
            className={`px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold shadow-md shadow-indigo-500/20 transition-all flex items-center gap-1.5`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>Simulator</span>
          </button>
        </div>
      </div>
    </header>
  );
};
