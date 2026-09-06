import React from "react";
import { 
  ShieldCheck, 
  Cpu, 
  Database, 
  Radio, 
  Layers, 
  GitCompare, 
  Sparkles,
  Zap,
  PlusCircle,
  FileText,
  BookOpen
} from "lucide-react";

export default function Navigation({ 
  activeTab, 
  setActiveTab, 
  selectedDomain, 
  setSelectedDomain,
  onOpenIngest
}) {
  const tabs = [
    { id: "overview", label: "Overview & Getting Started", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
    { id: "workbench", label: "Cyber & Agile RAG Workbench", icon: ShieldCheck, color: "from-cyan-500 to-blue-600" },
    { id: "arena", label: "LLM vs SLM Arena", icon: GitCompare, color: "from-purple-500 to-pink-600" },
    { id: "notebook", label: "NotebookLLM Studio", icon: Radio, color: "from-emerald-400 to-teal-600" },
    { id: "chunking", label: "Chunking & Token Lab", icon: Layers, color: "from-amber-400 to-orange-600" },
    { id: "vectorspace", label: "Vector Space Canvas", icon: Database, color: "from-indigo-500 to-purple-600" }
  ];


  const domains = [
    { id: "all", label: "⚡ All Knowledge Domains" },
    { id: "cybersecurity", label: "🛡️ Cybersecurity Threat Intel" },
    { id: "aiSecurity", label: "🔒 AI & LLM Security" },
    { id: "slmVsLlm", label: "⚡ SLMs vs LLMs Architecture" },
    { id: "notebookLlm", label: "🎙️ NotebookLLM Studio" },
    { id: "agileCoach", label: "🚀 Agile Coaching & Scrum Mastery" }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab("overview")}>

            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Cyber & Agile RAG Studio
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 rounded-full">
                  v3.0 All-In-One
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                AI · LLMs · SLMs · NotebookLLM · Cybersecurity · Agile Coaching
              </p>
            </div>
          </div>


          {/* Center Domain Knowledge Selector (Visible on ALL devices) */}
          <div className="flex items-center space-x-2 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-cyan-500/30">
            <span className="text-xs text-cyan-400 font-bold hidden sm:inline">Domain:</span>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="bg-transparent text-slate-100 text-xs focus:outline-none cursor-pointer font-semibold"
            >
              {domains.map((d) => (
                <option key={d.id} value={d.id} className="bg-slate-900 text-slate-100">
                  {d.label}
                </option>
              ))}
            </select>
          </div>


          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenIngest}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Ingest Document</span>
            </button>
            <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-[11px]">RAG Ready</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 overflow-x-auto py-2 scrollbar-none border-t border-slate-900">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-slate-800 text-white shadow-lg border border-slate-700 text-cyan-400"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
                <span>{tab.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}
