import React, { useState } from "react";
import { X, UploadCloud, FileText, CheckCircle2, Sparkles, Database } from "lucide-react";

export default function IngestionModal({ isOpen, onClose, onIngestDocument }) {
  const [docTitle, setDocTitle] = useState("");
  const [category, setCategory] = useState("Custom Knowledge Base");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("custom, threat-intel, rag");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!docTitle || !content) return;

    onIngestDocument({
      id: `custom-${Date.now()}`,
      title: docTitle,
      category,
      tags: tags.split(",").map((t) => t.trim()),
      content,
      score: 0.99
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setDocTitle("");
      setContent("");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-5 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <UploadCloud className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-lg text-slate-100">
              Ingest Document into RAG Vector Store
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-bounce" />
            <h4 className="text-lg font-bold text-slate-100">Document Successfully Vectorized!</h4>
            <p className="text-xs text-slate-400">
              Added to local vector index with real-time TF-IDF & Cosine Similarity mapping.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Document Title
              </label>
              <input
                type="text"
                required
                value={docTitle}
                onChange={(e) => setDocTitle(e.target.value)}
                placeholder="e.g., Incident Report 2026: Prompt Injection Vulnerability"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="Cybersecurity Threat Intel">Cybersecurity Threat Intel</option>
                  <option value="AI Security & Compliance">AI Security & Compliance</option>
                  <option value="SLM Architecture">SLM Architecture</option>
                  <option value="NotebookLLM Studio">NotebookLLM Studio</option>
                  <option value="Custom Knowledge Base">Custom Knowledge Base</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Tags (Comma Separated)
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="zero-day, log, cve-2026"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Document Payload / Text Body
              </label>
              <textarea
                required
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste threat intelligence reports, CVE vulnerability logs, or SLM benchmark data..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-200 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition flex items-center space-x-1.5"
              >
                <Database className="w-4 h-4" />
                <span>Chunk & Index Document</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
