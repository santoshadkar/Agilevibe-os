import React, { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, ArrowRight, CornerDownLeft } from 'lucide-react';

export const SearchModal = ({ isOpen, onClose, papers, onSelectPaper }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const matches = [];

    papers.forEach(paper => {
      const titleMatch = paper.title.toLowerCase().includes(searchTerm);
      const subtitleMatch = paper.subtitle.toLowerCase().includes(searchTerm);
      const tagMatch = paper.tags.some(t => t.toLowerCase().includes(searchTerm));
      
      // Search content snippet
      const contentIndex = paper.content.toLowerCase().indexOf(searchTerm);
      let snippet = '';

      if (contentIndex !== -1) {
        const start = Math.max(0, contentIndex - 40);
        const end = Math.min(paper.content.length, contentIndex + 100);
        snippet = '...' + paper.content.substring(start, end).replace(/\n/g, ' ') + '...';
      }

      if (titleMatch || subtitleMatch || tagMatch || contentIndex !== -1) {
        matches.push({
          paper,
          titleMatch,
          snippet: snippet || paper.subtitle
        });
      }
    });

    setResults(matches);
  }, [query, papers]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 7 whitepapers (e.g. MCP, ZTAGA, FinOps, EU AI Act, GraphRAG)..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-500 hover:text-slate-300">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded border border-slate-700">
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {query && results.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-sm">
              No matching research sections found for "{query}". Try keywords like <code className="text-cyan-400">RAG</code>, <code className="text-cyan-400">Governance</code>, or <code className="text-cyan-400">Agile</code>.
            </div>
          )}

          {!query && (
            <div className="py-6 text-center text-xs text-slate-500">
              Type any keyword, technical term, or regulatory framework to search across 160+ pages.
            </div>
          )}

          {results.map(({ paper, snippet }, idx) => (
            <div
              key={idx}
              onClick={() => {
                onSelectPaper(paper.id);
                onClose();
              }}
              className="p-3 rounded-xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700/80 cursor-pointer transition-all flex items-start justify-between gap-3 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 text-slate-400 group-hover:text-cyan-400 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-cyan-400">Paper {paper.id} • {paper.documentId}</span>
                    <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">{paper.shortTitle}</span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1 font-mono">
                    {snippet}
                  </p>
                </div>
              </div>
              <CornerDownLeft className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0 mt-2" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950/60 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
          <span>Searching 7 Enterprise Executive Whitepapers</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
