import React, { useState } from 'react';
import { Database, Plus, Search, Trash2, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

export default function KnowledgeVault({ documents = [], onAddDocument, onDeleteDocument, onSearch }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAddDocument({ title, content, category });
    setTitle('');
    setContent('');
    setShowAddModal(false);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const res = await onSearch(searchQuery);
    setSearchResults(res);
  };

  return (
    <div className="glass-panel p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-400" /> RAG Knowledge Vault Manager
          </h2>
          <p className="text-xs text-slate-400 font-mono">Vector index store powering grounded agent retrieval & citations</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs flex items-center gap-2 shadow-lg glow-cyan hover:opacity-90 transition-all"
        >
          <Plus className="w-4 h-4" /> Add Document to Vault
        </button>
      </div>

      {/* RAG Search Playground */}
      <div className="glass-card p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 space-y-3">
        <h3 className="text-xs font-semibold text-cyan-300 uppercase tracking-wider font-mono flex items-center gap-2">
          <Search className="w-4 h-4 text-cyan-400" /> Vector Similarity Playground
        </h3>
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Test vector retrieval query..."
            className="flex-1 bg-slate-950/80 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-xs font-semibold hover:bg-cyan-500 transition-all"
          >
            Query Vault
          </button>
        </form>

        {searchResults && (
          <div className="mt-3 space-y-2">
            <p className="text-[11px] text-slate-400 font-mono">Query Results for "{searchResults.query}":</p>
            {searchResults.results.map((res, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-white/5 text-xs space-y-1">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-cyan-400 font-semibold">{res.citation}</span>
                  <span className="badge badge-emerald text-[10px]">Score: {res.score}</span>
                </div>
                <p className="text-slate-300">{res.document.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stored Documents List */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Indexed Vault Records ({documents.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <div key={doc.id} className="glass-card p-4 rounded-xl border border-white/10 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h4 className="font-semibold text-sm text-slate-200 line-clamp-1">{doc.title}</h4>
                  </div>
                  <span className="badge badge-indigo text-[10px] shrink-0">{doc.category}</span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{doc.content}</p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>{doc.source}</span>
                <button
                  onClick={() => onDeleteDocument(doc.id)}
                  className="text-rose-400 hover:text-rose-300 p-1 rounded hover:bg-rose-500/10 transition-all"
                  title="Delete Document"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Document Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="glass-panel p-6 max-w-lg w-full rounded-2xl border border-white/15 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" /> Index New Document into RAG Vault
            </h3>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-mono">Document Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Project Architecture Guidelines"
                  className="w-full bg-slate-900 border border-white/10 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-mono">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-cyan-500"
                >
                  <option value="General">General</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Workflows">Workflows</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-mono">Document Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Paste raw text or documentation here..."
                  rows={5}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-md"
                >
                  Index Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
