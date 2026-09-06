import React, { useState } from "react";
import { 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  Radio, 
  Layers, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  FileText,
  UploadCloud,
  Award,
  Sparkles,
  GitBranch,
  Cpu,
  Server,
  Lock,
  Search,
  Check,
  ChevronRight,
  Workflow,
  Globe,
  TrendingUp,
  Flame,
  Compass,
  Rocket
} from "lucide-react";

export default function OverviewPage({ onNavigateTab, setSelectedDomain, onOpenIngest }) {
  const [activeParadigm, setActiveParadigm] = useState("naive");

  const handleLaunchAgileRAG = () => {
    if (setSelectedDomain) setSelectedDomain("agileCoach");
    onNavigateTab("workbench");
  };

  return (
    <div className="space-y-10 py-2">
      
      {/* Hero Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 p-8 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Welcome to Cyber & Agile RAG Studio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Master <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Retrieval-Augmented Generation</span> for AI, Cybersecurity & Agile
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Cyber & Agile RAG Studio is your single one-stop interactive portal designed to demonstrate how RAG bridges Large Language Models (LLMs), Edge Small Language Models (SLMs), NotebookLLMs, Enterprise Cybersecurity Threat Intelligence, AND Agile Coaching & Product Management.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleLaunchAgileRAG}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-600 hover:from-emerald-300 hover:to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/25 transition flex items-center space-x-2 cursor-pointer"
            >
              <Rocket className="w-4 h-4" />
              <span>Launch Agile & Scrum RAG</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => onNavigateTab("workbench")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition flex items-center space-x-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Threat RAG Workbench</span>
            </button>

            <button
              onClick={() => onNavigateTab("arena")}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs transition flex items-center space-x-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-purple-400" />
              <span>LLMs vs SLMs Arena</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Banner: Agile Coaching & Scrum Mastery One-Stop Integration */}
      <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 p-6 rounded-2xl border border-emerald-500/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30">
              FEATURED DOMAIN INTEGRATION
            </span>
            <span className="text-xs text-slate-400 font-mono">100% Grounded</span>
          </div>
          <h3 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
            <span>🚀 Agile Coaching, Scrum Mastery & Product Ownership RAG</span>
          </h3>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Full reference corpus integrated! Query Lyssa Adkins Coaching Framework, Patrick Lencioni's 5 Dysfunctions, WSJF & RICE Prioritization, 2020 Scrum Guide Rules, XP Engineering TDD/CI-CD, and Liberating Structures.
          </p>
        </div>

        <button
          onClick={handleLaunchAgileRAG}
          className="px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition shadow-lg shadow-emerald-400/20 whitespace-nowrap cursor-pointer flex items-center space-x-2"
        >
          <span>Query Agile Knowledge Base</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Section 1: What is RAG? (Core Concept) */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <BookOpen className="w-6 h-6 text-cyan-400" />
          <div>
            <h2 className="text-xl font-bold text-slate-100">What is RAG (Retrieval-Augmented Generation)?</h2>
            <p className="text-xs text-slate-400">Understanding how RAG grounds generative AI models in verified factual data.</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          Standard AI models (like GPT-4 or Claude) generate responses based solely on what they learned during training. While powerful, they can suffer from <strong>hallucinations</strong> (inventing false details) and lack knowledge of proprietary or real-time enterprise documents.
          <br /><br />
          <strong>RAG solves this by introducing a 2-step process:</strong> First, it <em>retrieves</em> exact relevant passages from a trusted knowledge base (such as MITRE ATT&CK logs, OWASP security standards, or Agile frameworks). Second, it feeds these exact passages into the language model to <em>generate</em> a verified, source-cited answer.
        </p>
      </div>

      {/* Section 2: Latest Innovations in RAG & Evolution Timeline */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <TrendingUp className="w-6 h-6 text-purple-400" />
          <div>
            <h2 className="text-xl font-bold text-slate-100">Latest Innovations & Evolution of RAG (2020 ➔ 2026+)</h2>
            <p className="text-xs text-slate-400">How RAG evolved from basic vector lookup to GraphRAG, Agentic Self-RAG, and Edge SLM execution.</p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">2020 - 2022</div>
            <h4 className="text-sm font-bold text-cyan-400">Phase 1: Naive Vector RAG</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Simple text chunking + dense vector embeddings. Basic Cosine Similarity retrieval directly injected into LLM context window. High risk of context noise.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">2023 - 2024</div>
            <h4 className="text-sm font-bold text-purple-400">Phase 2: Advanced Hybrid RAG</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Dense Vector + Sparse BM25 Keyword Search combined via Reciprocal Rank Fusion (RRF). Cross-Encoder Re-ranking (Cohere/BGE) and prompt compression.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">2025 - 2026 (NOW)</div>
            <h4 className="text-sm font-bold text-emerald-400">Phase 3: GraphRAG & Agentic Self-RAG</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Knowledge Graph entity relationship extraction (Microsoft GraphRAG) combined with Agentic Self-Reflection (Corrective RAG) and NotebookLLM Audio Synthesis.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/30 space-y-2 bg-amber-950/10">
            <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">2026+ FUTURE HORIZON</div>
            <h4 className="text-sm font-bold text-amber-400">Phase 4: Air-Gapped Edge SLM RAG</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Zero-cloud telemetry on-device 4-bit SLMs (Phi-3, Gemma) executing sub-100ms RAG locally, plus Zero-Knowledge Federated RAG across microservices.
            </p>
          </div>

        </div>

        {/* 4 Deep Dive Cutting-Edge RAG Innovations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
          
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs">
              <Flame className="w-4 h-4" />
              <span>1. GraphRAG (Knowledge Graph Augmented Generation)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Traditional vector search finds passages similar to a query, but fails at high-level thematic questions (*"What are the global security vulnerabilities across all our products?"*). GraphRAG extracts entities, relationships, and semantic communities, enabling global document understanding.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-purple-400 font-bold text-xs">
              <Sparkles className="w-4 h-4" />
              <span>2. Agentic RAG & Dynamic Self-Correction (Self-RAG)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Instead of fixed sequential pipelines, AI agents evaluate retrieved context quality before answering. If information is missing or noisy, the agent autonomously executes query expansion, web search tools, or code execution before delivering the final grounded response.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs">
              <Lock className="w-4 h-4" />
              <span>3. Edge SLM RAG with Zero Cloud Telemetry</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Small Language Models (1B–7B parameters) running 4-bit quantized (GGUF/AWQ) on local devices allow military SOCs, healthcare providers, and financial firms to run RAG completely air-gapped without sending sensitive corporate context to third-party cloud APIs.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs">
              <Radio className="w-4 h-4" />
              <span>4. Multimodal Audio & Studio Overview (NotebookLLM)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              RAG has expanded beyond plain text into multi-modal synthesis. Systems can ingest raw PDFs, code repositories, and audio transcripts to generate interactive 2-host audio podcasts, study guides, and executive briefing audio streams on demand.
            </p>
          </div>

        </div>
      </div>

      {/* Section 3: End-to-End RAG Architecture Diagram */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <Workflow className="w-6 h-6 text-indigo-400" />
          <div>
            <h2 className="text-xl font-bold text-slate-100">End-to-End RAG System Architecture Diagram</h2>
            <p className="text-xs text-slate-400">Visual dataflow across Offline Ingestion Phase and Online Query Execution Phase.</p>
          </div>
        </div>

        {/* Visual Architecture Diagram Graphic */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-8 overflow-x-auto scrollbar-thin">
          
          {/* Phase 1: Ingestion Pipeline */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>PHASE 1: Offline Document Ingestion Pipeline</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <FileText className="w-7 h-7 text-cyan-400" />
                <span className="text-xs font-bold text-slate-200">1. Enterprise Data</span>
                <span className="text-[10px] text-slate-400">PDFs, JSON logs, Agile Playbooks, CVEs</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2 relative">
                <Layers className="w-7 h-7 text-amber-400" />
                <span className="text-xs font-bold text-slate-200">2. Text Chunking</span>
                <span className="text-[10px] text-slate-400">Fixed/Semantic Tokens + Overlap</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <Cpu className="w-7 h-7 text-purple-400" />
                <span className="text-xs font-bold text-slate-200">3. Embedding Model</span>
                <span className="text-[10px] text-slate-400">Dense Vectors & TF-IDF Maps</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-cyan-500/40 flex flex-col items-center justify-center space-y-2 bg-cyan-950/20">
                <Database className="w-7 h-7 text-cyan-300" />
                <span className="text-xs font-bold text-cyan-300">4. Vector Store</span>
                <span className="text-[10px] text-slate-400">Indexed Embedding Space</span>
              </div>

            </div>
          </div>

          {/* Connection Divider Arrow */}
          <div className="flex items-center justify-center py-1">
            <div className="h-px bg-slate-800 flex-1" />
            <div className="px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono">
              ⬇️ User Query Initiation Phase ⬇️
            </div>
            <div className="h-px bg-slate-800 flex-1" />
          </div>

          {/* Phase 2: Online Query Execution Pipeline */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>PHASE 2: Online Query Execution & Generation Pipeline</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <Search className="w-7 h-7 text-emerald-400" />
                <span className="text-xs font-bold text-slate-200">1. User Query</span>
                <span className="text-[10px] text-slate-400">Natural language threat/Agile question</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <GitBranch className="w-7 h-7 text-indigo-400" />
                <span className="text-xs font-bold text-slate-200">2. Hybrid Retrieval</span>
                <span className="text-[10px] text-slate-400">Dense Cosine + Sparse BM25 + RRF</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <FileText className="w-7 h-7 text-amber-400" />
                <span className="text-xs font-bold text-slate-200">3. Context Prompt</span>
                <span className="text-[10px] text-slate-400">System Instructions + Top-K Chunks</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-emerald-500/40 flex flex-col items-center justify-center space-y-2 bg-emerald-950/20">
                <Award className="w-7 h-7 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-400">4. Grounded Output</span>
                <span className="text-[10px] text-slate-400">Verified Answer + Source Citations</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Section 4: How to Use This Portal & Available Tools */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <Layers className="w-6 h-6 text-emerald-400" />
          <div>
            <h2 className="text-xl font-bold text-slate-100">How to Use This Portal & Available Tools</h2>
            <p className="text-xs text-slate-400">Guide to navigating the interactive workspaces in Cyber & Agile RAG Studio.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div 
            onClick={handleLaunchAgileRAG}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-emerald-500/40 hover:border-emerald-400 transition cursor-pointer space-y-2 group shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-emerald-400 flex items-center space-x-2">
                <Rocket className="w-4 h-4" />
                <span>1. Agile Coaching & Scrum RAG</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Query SAFe 6.0, LeSS, Lyssa Adkins Coaching Framework, Patrick Lencioni 5 Dysfunctions, WSJF/RICE prioritization, and 2020 Scrum Rules with source grounding.
            </p>
          </div>

          <div 
            onClick={() => onNavigateTab("workbench")}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-cyan-400 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4" />
                <span>2. Cybersecurity & AI Threat Workbench</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Execute natural language queries across MITRE ATT&CK, OWASP Top 10 for LLMs, and CVE databases with similarity scores and citations.
            </p>
          </div>

          <div 
            onClick={() => onNavigateTab("arena")}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-purple-500/40 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-purple-400 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>3. LLM vs SLM Arena</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Compare Cloud Frontier Models (GPT-4o) against Edge Small Language Models (Phi-3, Gemma) on latency (0.14s), throughput, VRAM, and cost.
            </p>
          </div>

          <div 
            onClick={() => onNavigateTab("notebook")}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-emerald-400 flex items-center space-x-2">
                <Radio className="w-4 h-4" />
                <span>4. NotebookLLM Studio</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Listen to AI-synthesized audio podcasts featuring two AI hosts debating technical security and agile documents, complete with voice playback.
            </p>
          </div>

          <div 
            onClick={() => onNavigateTab("chunking")}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-amber-500/40 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-amber-400 flex items-center space-x-2">
                <Layers className="w-4 h-4" />
                <span>5. Chunking & Token Lab</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Adjust chunk size (10–100 tokens) and sliding window overlap sliders to inspect how document text is tokenized into vectors live.
            </p>
          </div>

          <div 
            onClick={onOpenIngest}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-cyan-300 flex items-center space-x-2">
                <UploadCloud className="w-4 h-4" />
                <span>6. Ingest Custom Documents</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Click the "+ Ingest Document" button in the top bar to paste or upload your own TXT / MD / JSON logs directly into the vector store!
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
