import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  Compass, 
  Target, 
  Sparkles, 
  Layers,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activeRole, switchRole, setActiveTab, jiraConfig } = useApp();

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 px-4 lg:px-8 py-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 shadow-lg shadow-cyan-500/20">
              <Layers className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white tracking-wide">AgilePulse<span className="text-cyan-400">.AI</span></h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Single Source of Truth
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Unified Portal for Scrum Masters, Product Owners & Product Managers
              </p>
            </div>
          </div>
        </div>

        {/* 3-Role Practitioner Selector Tabs */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-2xl border border-slate-800 shadow-inner w-full md:w-auto justify-center">
          <button
            onClick={() => switchRole('scrum-master')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeRole === 'scrum-master'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Scrum Master (SM)</span>
          </button>

          <button
            onClick={() => switchRole('product-owner')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeRole === 'product-owner'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md shadow-purple-500/20 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Product Owner (PO)</span>
          </button>

          <button
            onClick={() => switchRole('product-manager')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeRole === 'product-manager'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Product Manager (PM)</span>
          </button>
        </div>

        {/* Right Status Actions & Quick Launch */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {/* Jira Live Status Badge */}
          <button
            onClick={() => setActiveTab('jira')}
            className={`hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs border transition-colors ${
              jiraConfig.connected
                ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
            }`}
            title="Jira Sync Hub"
          >
            {jiraConfig.connected ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            ) : (
              <RefreshCw className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            )}
            <span>Jira {jiraConfig.serverType === 'cloud' ? 'Cloud' : 'Data Center'}</span>
          </button>

          {/* AI Quick Launcher */}
          <button
            onClick={() => setActiveTab('ai-studio')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            <span>AI Studio</span>
          </button>
        </div>
      </div>
    </header>
  );
};
