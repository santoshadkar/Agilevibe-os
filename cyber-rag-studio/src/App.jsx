import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import OverviewPage from "./components/OverviewPage";
import CyberThreatWorkbench from "./components/CyberThreatWorkbench";
import ModelArena from "./components/ModelArena";
import NotebookStudio from "./components/NotebookStudio";
import ChunkingLab from "./components/ChunkingLab";
import VectorSpaceCanvas from "./components/VectorSpaceCanvas";
import IngestionModal from "./components/IngestionModal";
import { executeRAGQuery, generateModelResponses } from "./utils/ragEngine";
import { ShieldCheck, Cpu, Database, Radio, Layers, Sparkles, Terminal, Activity } from "lucide-react";

export const DOMAIN_QUICK_PROMPTS = {
  all: [
    "How to prevent Prompt Injection & RAG Poisoning?",
    "How to calculate WSJF prioritization score in SAFe?",
    "What are Lyssa Adkins 8 Agile Coaching competencies?",
    "Compare SLMs (Phi-3, Gemma) vs Cloud LLMs (GPT-4o)",
    "Explain 1-2-4-All Liberating Structure for Retrospectives",
    "OWASP LLM Top 10 vulnerabilities & MITRE ATT&CK T1190"
  ],
  agileCoach: [
    "What are Lyssa Adkins 8 Agile Coaching competencies?",
    "How to calculate WSJF prioritization score in SAFe 6.0?",
    "Explain Patrick Lencioni's 5 Dysfunctions of a Team & coaching remedies",
    "What is 1-2-4-All & TRIZ Liberating Structures for retrospectives?",
    "How to measure Cycle Time, Lead Time & Flow Efficiency?",
    "What are the core 2020 Scrum Guide rules & accountabilities?",
    "How to write User Stories using INVEST criteria and Gherkin format?",
    "How to handle Technical Debt using XP practices (TDD, CI/CD)?"
  ],
  cybersecurity: [
    "How to mitigate MITRE ATT&CK T1190 Initial Access exploits?",
    "Explain CVE-2024-30078 MSMQ & CVE-2024-6387 regreSSHion vulnerabilities",
    "How to implement NIST SP 800-207 Zero Trust Architecture?",
    "What is the ransomware incident response & DFIR playbook?",
    "How to monitor Event ID 4624/4625 and PowerShell Event ID 4104?"
  ],
  aiSecurity: [
    "How to prevent Direct & Indirect Prompt Injection in RAG pipelines?",
    "Explain OWASP LLM01 Prompt Injection to LLM10 Unbounded Consumption",
    "How to protect against Embedding Space & Vector Store Poisoning?",
    "What are Agentic AI tool execution sandboxing guardrails?",
    "How to enforce dual-LLM architectural segregation & canary tokens?"
  ],
  slmVsLlm: [
    "Compare Microsoft Phi-3 & Gemma 2B SLMs vs GPT-4o on air-gapped endpoints",
    "How does 4-bit quantization (GGUF Q4_K_M, AWQ) optimize VRAM?",
    "Why do local SLMs eliminate cloud telemetry data leakage?",
    "What are latency & throughput benchmarks for 3.8B SLMs (158 tok/s)?"
  ],
  notebookLlm: [
    "How does NotebookLLM guarantee zero-hallucination source grounding?",
    "How to generate 2-voice AI audio podcast scripts from raw PDFs?",
    "What are executive threat briefings and study guide flashcards?",
    "How to perform multi-source correlation across PDFs and JSON logs?"
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [query, setQuery] = useState("");
  
  const [ragResult, setRagResult] = useState(null);
  const [modelResponses, setModelResponses] = useState(null);
  const [isIngestOpen, setIsIngestOpen] = useState(false);

  // Handle clean domain switching (Clears previous search query & history results)
  const handleSelectDomain = (domainId) => {
    setSelectedDomain(domainId);
    setQuery("");
    setRagResult(null);
    setModelResponses(null);
  };

  // Execute RAG Search
  const handleExecuteQuery = (targetQuery) => {
    const queryToRun = targetQuery || query;
    if (!queryToRun.trim()) return;

    if (targetQuery) {
      setQuery(targetQuery);
    }

    const result = executeRAGQuery(queryToRun, selectedDomain, {
      topK: 3,
      strategy: "hybrid",
      chunkSize: 280,
      overlap: 40
    });

    const responses = generateModelResponses(queryToRun, result.topChunks);

    setRagResult(result);
    setModelResponses(responses);
  };

  const handleIngestDocument = (newDoc) => {
    handleExecuteQuery();
  };


  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      
      {/* Top Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedDomain={selectedDomain}
        setSelectedDomain={handleSelectDomain}
        onOpenIngest={() => setIsIngestOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Banner Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Domain Dataset</div>
              <div className="text-sm font-bold text-slate-100">Cyber & AI Intel</div>
            </div>
          </div>

          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Models Tested</div>
              <div className="text-sm font-bold text-slate-100">LLMs & SLMs</div>
            </div>
          </div>

          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Notebook Studio</div>
              <div className="text-sm font-bold text-slate-100">Audio Podcast</div>
            </div>
          </div>

          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Vector Index</div>
              <div className="text-sm font-bold text-slate-100">TF-IDF + Cosine</div>
            </div>
          </div>
        </div>

        {/* Tab 0: Overview & Getting Started */}
        {activeTab === "overview" && (
          <OverviewPage
            onNavigateTab={(tabId) => setActiveTab(tabId)}
            setSelectedDomain={handleSelectDomain}
            onOpenIngest={() => setIsIngestOpen(true)}
          />
        )}

        {/* Tab 1: Cybersecurity & AI Threat Workbench */}
        {activeTab === "workbench" && (
          <CyberThreatWorkbench
            query={query}
            setQuery={setQuery}
            onExecuteQuery={handleExecuteQuery}
            ragResult={ragResult}
            modelResponses={modelResponses}
            selectedDomain={selectedDomain}
            setSelectedDomain={handleSelectDomain}
          />
        )}



        {/* Tab 2: LLMs vs SLMs Arena */}
        {activeTab === "arena" && (
          <ModelArena
            modelResponses={modelResponses}
            query={query}
          />
        )}

        {/* Tab 3: NotebookLLM Studio */}
        {activeTab === "notebook" && (
          <NotebookStudio
            modelResponses={modelResponses}
          />
        )}

        {/* Tab 4: Text Chunking Lab */}
        {activeTab === "chunking" && (
          <ChunkingLab />
        )}

        {/* Tab 5: Vector Space Canvas */}
        {activeTab === "vectorspace" && (
          <VectorSpaceCanvas
            ragResult={ragResult}
            query={query}
          />
        )}


      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-slate-300">CyberRAG Studio</span>
            <span>— RAG Platform for AI, LLMs, SLMs, NotebookLLMs & Cybersecurity</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400 cursor-pointer">MITRE ATT&CK</span>
            <span className="hover:text-slate-400 cursor-pointer">OWASP LLM Top 10</span>
            <span className="hover:text-slate-400 cursor-pointer">Phi-3 / Gemma 2B</span>
          </div>
        </div>
      </footer>

      {/* Ingest Modal */}
      <IngestionModal
        isOpen={isIngestOpen}
        onClose={() => setIsIngestOpen(false)}
        onIngestDocument={handleIngestDocument}
      />
    </div>
  );
}
