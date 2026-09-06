import React, { useState } from 'react';
import { 
  Database, 
  Plus, 
  Trash2, 
  RefreshCw, 
  FileText, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  Tag,
  BookOpen
} from 'lucide-react';
import { 
  getStoredCustomDocuments, 
  saveCustomDocument, 
  deleteCustomDocument, 
  refreshRagIndex 
} from '../utils/ragEngine';

export default function DocumentManager({ onIndexUpdated }) {
  const [customDocs, setCustomDocs] = useState(getStoredCustomDocuments());

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Scrum Mastery');
  const [tagsInput, setTagsInput] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddDocument = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const tags = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const newDoc = {
      id: `custom-doc-${Date.now()}`,
      title: title.trim(),
      category,
      tags: tags.length > 0 ? tags : ["Custom Ingestion"],
      summary: summary.trim() || "User ingested document chunk.",
      content: content.trim(),
      createdAt: new Date().toLocaleDateString()
    };

    const updated = saveCustomDocument(newDoc);
    setCustomDocs(updated);
    refreshRagIndex();
    if (onIndexUpdated) onIndexUpdated();

    // Reset Form
    setTitle('');
    setTagsInput('');
    setSummary('');
    setContent('');

    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 2000);
  };

  const handleDelete = (id) => {
    const updated = deleteCustomDocument(id);
    setCustomDocs(updated);
    refreshRagIndex();
    if (onIndexUpdated) onIndexUpdated();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      
      {/* Banner */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 bg-gradient-to-r from-slate-900 via-amber-950/20 to-indigo-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Custom Knowledge Ingestion & Indexing</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Upload team-specific Agile playbooks, Definition of Done guidelines, retrospective notes, or architecture charters into the live RAG vector index.
            </p>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              Custom Ingested: <strong className="text-amber-400">{customDocs.length}</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Ingestion Form (7 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-5 border border-slate-800 space-y-4">
          <div className="flex items-center space-x-2 text-sm font-bold text-white border-b border-slate-800 pb-3">
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Ingest New Agile Document</span>
          </div>

          <form onSubmit={handleAddDocument} className="space-y-4 text-xs">
            
            {/* Title & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Document Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Engineering Team Definition of Done 2026"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:border-amber-500"
                >
                  <option value="Agile Coaching">Agile Coaching</option>
                  <option value="Scrum Mastery">Scrum Mastery</option>
                  <option value="Product Management">Product Management</option>
                  <option value="Team Playbook">Team Playbook</option>
                </select>
              </div>
            </div>

            {/* Tags & Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Tags (Comma-separated)</label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="e.g., DoD, Code Review, CI/CD"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Summary</label>
                <input
                  type="text"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Brief description of the document scope"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Content Textarea */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Document Content (Markdown or Text) *</label>
              <textarea
                rows={6}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste the full guidelines, policy, retrospective action items, or team standards here..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-amber-500 leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-2">
              {isSuccess && (
                <div className="flex items-center space-x-1.5 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Document chunked & indexed into vector space!</span>
                </div>
              )}
              <button
                type="submit"
                className="ml-auto flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs shadow-lg shadow-amber-600/30 transition transform active:scale-95"
              >
                <Layers className="w-4 h-4" />
                <span>Chunk & Index Document</span>
              </button>
            </div>

          </form>
        </div>

        {/* Existing Custom Ingested Docs (5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-5 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="font-bold text-sm text-white">Ingested Custom Library</span>
            <span className="text-xs text-slate-400">{customDocs.length} custom docs</span>
          </div>

          {customDocs.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs space-y-2">
              <FileText className="w-8 h-8 mx-auto text-slate-600" />
              <p>No custom documents added yet.</p>
              <p className="text-[11px]">Add team agreements or retrospective notes to enrich the RAG index.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1 scrollbar-thin">
              {customDocs.map((doc) => (
                <div 
                  key={doc.id}
                  className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/30 transition space-y-2 text-xs"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-200">{doc.title}</h4>
                      <span className="text-[10px] px-2 py-0.2 rounded bg-slate-800 text-amber-300 font-medium">
                        {doc.category}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDelete(doc.id)}
                      className="p-1 rounded text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition"
                      title="Delete document from RAG index"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {doc.content}
                  </p>

                  <div className="flex flex-wrap gap-1 items-center pt-1 border-t border-slate-800/60">
                    {doc.tags?.map((t, idx) => (
                      <span key={idx} className="text-[9px] px-1.5 py-0.2 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
