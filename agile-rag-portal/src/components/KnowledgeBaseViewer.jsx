import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Tag, 
  Layers, 
  ChevronRight, 
  ExternalLink,
  Filter
} from 'lucide-react';
import { INITIAL_KNOWLEDGE_BASE } from '../data/agileKnowledgeBase';

export default function KnowledgeBaseViewer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDoc, setSelectedDoc] = useState(null);

  const filteredDocs = INITIAL_KNOWLEDGE_BASE.filter(doc => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const term = searchTerm.toLowerCase();
    const matchesSearch = !term || 
      doc.title.toLowerCase().includes(term) ||
      doc.summary.toLowerCase().includes(term) ||
      doc.content.toLowerCase().includes(term) ||
      doc.tags.some(t => t.toLowerCase().includes(term));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 bg-gradient-to-r from-slate-900 via-sky-950/20 to-indigo-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Indexed Agile Knowledge Library</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Browse the foundational Agile standards, Scrum 2020 rules, product prioritization frameworks, and coaching models pre-indexed in our RAG vector store.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              Total Corpus Modules: <strong className="text-sky-400">{INITIAL_KNOWLEDGE_BASE.length}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-panel rounded-2xl p-4 border border-slate-800 flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search knowledge corpus by keyword or tag (e.g. 'Lyssa Adkins', 'INVEST', 'WIP')..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          >
            <option value="All">All Categories</option>
            <option value="Agile Coaching">Agile Coaching</option>
            <option value="Scrum Mastery">Scrum Mastery</option>
            <option value="Product Management">Product Management</option>
          </select>
        </div>
      </div>

      {/* Grid of Knowledge Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDocs.map((doc) => (
          <div 
            key={doc.id}
            onClick={() => setSelectedDoc(doc)}
            className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-sky-500/40 cursor-pointer transition-all duration-200 space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30">
                  {doc.category}
                </span>
                <span className="text-[10px] font-mono text-slate-500">{doc.id}</span>
              </div>

              <h3 className="font-bold text-sm text-white hover:text-sky-300 transition">
                {doc.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                {doc.summary}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
              <div className="flex flex-wrap gap-1">
                {doc.tags.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="text-[9px] px-1.5 py-0.2 rounded bg-slate-900 text-slate-400">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-1 text-sky-400 font-medium">
                <span>Inspect Module</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full document detail */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto glass-panel rounded-2xl p-6 border border-slate-700 bg-slate-900 text-slate-100 space-y-4 shadow-2xl">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  {selectedDoc.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{selectedDoc.title}</h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-slate-300 italic bg-slate-950 p-3 rounded-xl border border-slate-800">
              {selectedDoc.summary}
            </p>

            <div className="whitespace-pre-wrap font-sans text-xs text-slate-200 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800 font-mono">
              {selectedDoc.content}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {selectedDoc.tags.map((t, idx) => (
                <span key={idx} className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono">
                  #{t}
                </span>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
