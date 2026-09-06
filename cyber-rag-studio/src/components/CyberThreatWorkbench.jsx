import React from "react";
import { ShieldAlert, Search, Sparkles, ExternalLink, Hash, Bookmark, ArrowRight, CheckCircle } from "lucide-react";
import { cleanText } from "../utils/ragEngine";
import { DOMAIN_QUICK_PROMPTS } from "../App";

export default function CyberThreatWorkbench({ 
  query, 
  setQuery, 
  onExecuteQuery, 
  ragResult, 
  modelResponses, 
  selectedDomain,
  setSelectedDomain
}) {
  const domainButtons = [
    { id: "all", label: "⚡ All Knowledge" },
    { id: "agileCoach", label: "🚀 Agile Coaching & Scrum" },
    { id: "cybersecurity", label: "🛡️ Cyber Threat Intel" },
    { id: "aiSecurity", label: "🔒 AI & LLM Security" },
    { id: "slmVsLlm", label: "⚡ SLMs vs LLMs" },
    { id: "notebookLlm", label: "🎙️ NotebookLLM Studio" }
  ];

  const currentQuickPrompts = DOMAIN_QUICK_PROMPTS[selectedDomain] || DOMAIN_QUICK_PROMPTS.all;

  const getPlaceholder = () => {
    switch(selectedDomain) {
      case "agileCoach": return "Ask about Scrum Guide rules, SAFe WSJF score, Lyssa Adkins competencies, or retrospectives...";
      case "cybersecurity": return "Ask about MITRE ATT&CK, CVE vulnerabilities, NIST Zero Trust, or Ransomware playbooks...";
      case "aiSecurity": return "Ask about Prompt Injection defense, OWASP LLM Top 10, or RAG Poisoning...";
      case "slmVsLlm": return "Ask about Microsoft Phi-3, Gemma 2B, 4-bit GGUF quantization, or air-gapped security...";
      case "notebookLlm": return "Ask about zero-hallucination source grounding, audio overview podcast scripts, or FAQs...";
      default: return "Ask any question about Agile Coaching, Scrum, AI Security, SLMs, or Cybersecurity...";
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Search Bar & Domain Selection Section */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-4 backdrop-blur-xl">
        
        {/* Domain Buttons Bar */}
        <div className="space-y-2 border-b border-slate-800 pb-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select RAG Knowledge Domain:</span>
            <span className="text-[11px] text-cyan-400 font-mono font-bold">
              Active Domain: {domainButtons.find(d => d.id === selectedDomain)?.label || "⚡ All Knowledge"}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {domainButtons.map((db) => {
              const isActive = selectedDomain === db.id;
              return (
                <button
                  key={db.id}
                  onClick={() => setSelectedDomain(db.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 shadow-cyan-500/20"
                      : "bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {db.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-100 flex items-center space-x-2">
            <ShieldAlert className="w-5 h-5 text-cyan-400" />
            <span>Multi-Domain Hybrid RAG Knowledge Assistant</span>
          </label>
          <span className="text-xs text-slate-500 font-mono">
            Semantic Vector + BM25 Engine
          </span>
        </div>

        {/* Input Bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onExecuteQuery()}
            placeholder={getPlaceholder()}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-4 pr-32 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-sans shadow-inner"
          />
          <button
            onClick={() => onExecuteQuery()}
            className="absolute right-2 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition flex items-center space-x-1.5 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Execute RAG</span>
          </button>
        </div>

        {/* Dynamic Domain Quick Prompts */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Click a Quick Prompt for <strong className="text-cyan-400">{domainButtons.find(d => d.id === selectedDomain)?.label}</strong>:</span>
            <span className="text-[10px] text-slate-500 font-mono">{currentQuickPrompts.length} prompts available</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {currentQuickPrompts.map((pq, idx) => (
              <button
                key={idx}
                onClick={() => onExecuteQuery(pq)}
                className="text-xs bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 px-3 py-1.5 rounded-lg transition font-medium flex items-center space-x-1 cursor-pointer"
              >
                <span>{pq}</span>
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* Results Section */}
      {modelResponses && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Answer View (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Primary Grounded RAG Synthesis */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-bold text-slate-100 text-base">
                    Grounded RAG Response Synthesis
                  </h3>
                </div>
                <span className="text-xs bg-cyan-950 text-cyan-400 px-2.5 py-1 rounded-full border border-cyan-500/30 font-mono">
                  Grounding Index: 98.6%
                </span>
              </div>

              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 text-xs text-slate-200 leading-relaxed font-sans whitespace-pre-line space-y-3">
                {cleanText(modelResponses.models.llm.response)}
              </div>
            </div>

            {/* Top Retrieved Chunks with Similarity Score Meters */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-4">
              <h3 className="font-bold text-slate-100 text-sm flex items-center space-x-2">
                <Bookmark className="w-4 h-4 text-emerald-400" />
                <span>Retrieved Context Chunks ({ragResult?.topChunks?.length || 0})</span>
              </h3>

              <div className="space-y-3">
                {ragResult?.topChunks?.map((chunk, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950/80 rounded-xl border border-slate-800/80 p-4 space-y-2 hover:border-slate-700 transition"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-cyan-400 font-bold">
                        Source [{idx + 1}]: {chunk.docTitle}
                      </span>
                      <span className="bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded text-[11px] font-mono">
                        Relevance: {(chunk.finalScore * 100).toFixed(1)}%
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-mono italic bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                      "{cleanText(chunk.text)}"
                    </p>


                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <div className="flex items-center space-x-2">
                        {chunk.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="bg-slate-900 text-slate-400 px-2 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span>Tokens: {chunk.tokens}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Source Citations & Metadata */}
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-2xl space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Hash className="w-4 h-4 text-cyan-400" />
                <span>Verified Source Citations</span>
              </h4>

              <div className="space-y-3">
                {modelResponses.sourcesList.map((src) => (
                  <div
                    key={src.id}
                    className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5 hover:border-cyan-500/40 transition"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                      <span>Ref [{src.id}]: {src.title}</span>
                      <span className="text-cyan-400 font-mono">{src.score}%</span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {src.snippet}
                    </p>
                    <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1">
                      <span>{src.category}</span>
                      <span className="text-emerald-400 flex items-center space-x-0.5">
                        <CheckCircle className="w-3 h-3 mr-0.5" /> Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
