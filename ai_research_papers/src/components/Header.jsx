import React from 'react';
import { Search, BookOpen, ExternalLink, Download, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const Header = ({ activePaper, onOpenSearch, onSelectOverview, isOverview }) => {
  return (
    <header className="h-16 border-b border-slate-800 glass-panel sticky top-0 z-30 px-6 flex items-center justify-between">
      {/* Left: Brand / Title */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-heading font-bold text-base text-slate-100 flex items-center gap-2">
            Enterprise AI Research Suite
            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              7 Whitepapers
            </span>
          </h1>
          <p className="text-xs text-slate-400">Publication-Grade Executive Research Portal</p>
        </div>
      </div>

      {/* Center: Quick Search Trigger */}
      <div className="hidden md:flex items-center">
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-slate-200 text-xs transition-all w-72 justify-between group shadow-inner"
        >
          <span className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            Search all 7 whitepapers...
          </span>
          <kbd className="px-1.5 py-0.5 bg-slate-800 text-[10px] text-slate-400 rounded border border-slate-700 font-mono">⌘K</kbd>
        </button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={onSelectOverview}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            isOverview
              ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          Master Index
        </button>

        <a
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Deploy Online
        </a>
      </div>
    </header>
  );
};
