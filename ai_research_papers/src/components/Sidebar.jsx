import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  BookMarked,
  Cpu,
  HeartHandshake,
  GitBranch,
  Shield,
  Coins,
  TrendingUp,
  BrainCircuit,
  LayoutList
} from 'lucide-react';

const categoryIcons = {
  1: Cpu,
  2: HeartHandshake,
  3: GitBranch,
  4: Shield,
  5: Coins,
  6: TrendingUp,
  7: BrainCircuit
};

export const Sidebar = ({ 
  papers, 
  activePaperId, 
  onSelectPaper, 
  isOverview, 
  onSelectOverview,
  tableOfContents = []
}) => {
  return (
    <aside className="w-80 border-r border-slate-800 glass-panel h-[calc(100vh-4rem)] sticky top-16 flex flex-col shrink-0 overflow-hidden">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-slate-800/80 bg-slate-900/40">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Research Papers Suite</span>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> 7/7 Complete
          </span>
        </div>
        <p className="text-[11px] text-slate-500">20-25 Pages Each • Total ~160 Pages</p>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {/* Master Index item */}
        <button
          onClick={onSelectOverview}
          className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between group ${
            isOverview
              ? 'nav-item-active'
              : 'hover:bg-slate-900/60 text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              isOverview ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
            }`}>
              <LayoutList className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Master Index & Overview</div>
              <div className="text-[10px] text-slate-400">Executive Summary Hub</div>
            </div>
          </div>
          <ChevronRight className={`w-4 h-4 transition-transform ${isOverview ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'}`} />
        </button>

        <div className="py-2 px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
          Whitepaper Collection
        </div>

        {papers.map((paper) => {
          const Icon = categoryIcons[paper.id] || FileText;
          const isActive = !isOverview && activePaperId === paper.id;

          return (
            <button
              key={paper.id}
              onClick={() => onSelectPaper(paper.id)}
              className={`w-full text-left p-3 rounded-xl transition-all flex flex-col gap-2 group ${
                isActive
                  ? 'nav-item-active'
                  : 'hover:bg-slate-900/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-cyan-400/80 font-medium">
                      Paper {paper.id} • {paper.documentId}
                    </div>
                    <div className={`text-xs font-semibold line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {paper.shortTitle}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pl-9">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" /> {paper.readTime}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                  Completed
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Table of Contents for Active Paper */}
      {!isOverview && tableOfContents.length > 0 && (
        <div className="p-3 border-t border-slate-800/80 bg-slate-950/60 max-h-48 overflow-y-auto">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            <BookMarked className="w-3 h-3 text-cyan-400" /> On This Page
          </div>
          <ul className="space-y-1">
            {tableOfContents.map((toc, idx) => (
              <li key={idx}>
                <a
                  href={`#${toc.id}`}
                  className="text-[11px] text-slate-400 hover:text-cyan-400 transition-colors line-clamp-1 block pl-2 border-l border-slate-800 hover:border-cyan-500"
                >
                  {toc.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};
