import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  FileText,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';

export const MasterOverview = ({ papers, onSelectPaper, masterIndexContent }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI Architecture & Protocols', 'Societal & Human Policy', 'Software Engineering & DevOps', 'Cybersecurity & Compliance', 'Cloud Ops & FinOps', 'Executive Leadership & Strategy', 'Culture & Transformation'];

  const filteredPapers = selectedCategory === 'All' 
    ? papers 
    : papers.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 pb-32">
      {/* Executive Suite Banner */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 mb-12 border border-slate-800 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 7 of 7 Executive Whitepapers Completed
          </span>
          <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            Cumulative ~160 Pages
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-4 leading-tight tracking-tight">
          Enterprise AI Research & Executive Whitepaper Suite
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8 font-light">
          A publication-grade research collection covering frontier AI engineering, agentic systems, human agency, agile transformation, cybersecurity governance, financial operations (FinOps), executive decision science, and organizational culture.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-800/80">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white font-heading">Comprehensive Architectures</div>
              <div className="text-xs text-slate-400 leading-normal mt-0.5">Mermaid diagrams, sequence flows & runnable Python code</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white font-heading">Regulatory Compliance</div>
              <div className="text-xs text-slate-400 leading-normal mt-0.5">EU AI Act, NIST AI RMF 1.0, ISO 42001 & SOC 2</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white font-heading">Empirical Metrics & ROI</div>
              <div className="text-xs text-slate-400 leading-normal mt-0.5">Fortune 500 benchmarks & 90-day C-Suite roadmaps</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
          <FileText className="w-6 h-6 text-cyan-400" />
          Research Paper Library
        </h2>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 max-w-full">
          <Filter className="w-4 h-4 text-slate-400 mr-1 shrink-0" />
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat === 'All' ? 'All Papers (7)' : cat.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Paper Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {filteredPapers.map((paper) => (
          <div
            key={paper.id}
            onClick={() => onSelectPaper(paper.id)}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between cursor-pointer group border border-slate-800/80 hover:border-cyan-500/40 shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {paper.documentId}
                </span>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" /> {paper.readTime}
                </span>
              </div>

              <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                Paper {paper.id}: {paper.title}
              </h3>

              <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed font-light">
                {paper.subtitle}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {paper.tags.slice(0, 4).map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>Read Full Whitepaper (~20-25 Pages)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render Master Index Markdown */}
      {masterIndexContent && (
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800">
          <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" /> Master Executive Index Documentation (`index.md`)
          </h2>
          <div className="prose-custom">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {masterIndexContent}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};
