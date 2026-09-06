import React, { useState } from "react";

import { GitCompare, Cpu, ShieldCheck, Zap, DollarSign, Award, Clock, HardDrive, CheckCircle2 } from "lucide-react";
import { cleanText } from "../utils/ragEngine";

export default function ModelArena({ modelResponses, query }) {
  const [activeTab, setActiveTab] = useState("compare");

  const defaultResponses = {
    models: {
      llm: {
        name: "GPT-4o / Claude 3.5 Sonnet (Frontier LLM)",
        badge: "CLOUD LLM",
        response: "Based on enterprise Agile & Cybersecurity intelligence:\n\n1. Architectural Guardrails: Enforce strict isolation as specified in zero-trust guidelines and Lyssa Adkins coaching framework.\n2. Mitigation Strategy: Implement dual-LLM validation, continuous SIEM telemetry monitoring, and SAFe WSJF prioritization.\n3. Grounding Verification: High confidence score across retrieved knowledge bases.",
        latency: "0.85s",
        tokensPerSec: "75 tok/s",
        cost: "$0.0042",
        accuracyScore: 98.4
      },
      slm: {
        name: "Microsoft Phi-3 Mini / Gemma 2B (Local SLM)",
        badge: "LOCAL SLM",
        response: "[Local SLM - Phi-3 Mini 3.8B execution output]:\n\nAnalysis of Agile & Security Architecture:\n- Main finding: Deploy 4-bit quantized edge models for air-gapped security operations and Scrum team story estimation.\n- Execution Stats: 0.14s latency, 158 tokens/sec, 3.4 GB VRAM used.",
        latency: "0.14s",
        tokensPerSec: "158 tok/s",
        cost: "$0.0000 (Local)",
        accuracyScore: 94.2
      }
    }
  };

  const activeData = modelResponses || defaultResponses;
  const activeQuery = query || "Agile Coaching & AI Security Architecture Benchmark";
  const { llm, slm } = activeData.models;


  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <GitCompare className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-slate-100">
              RAG Execution Arena: LLMs vs SLMs Side-by-Side
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Compare Cloud Frontier Models against Edge Small Language Models on RAG grounding fidelity, latency, and cost.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-slate-300">
          <span className="text-slate-400">Query Target:</span>
          <span className="font-semibold text-purple-300 italic max-w-xs truncate">"{query}"</span>
        </div>
      </div>

      {/* Benchmark Metrics Comparison Table */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 uppercase font-semibold flex items-center justify-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Inference Latency</span>
          </div>
          <div className="flex items-center justify-around mt-2">
            <div>
              <div className="text-xs text-slate-500 font-mono">LLM</div>
              <div className="text-sm font-bold text-slate-300 font-mono">{llm.latency}</div>
            </div>
            <div className="text-xs font-bold text-cyan-400 font-mono">vs</div>
            <div>
              <div className="text-xs text-cyan-400 font-mono">SLM (Edge)</div>
              <div className="text-sm font-bold text-cyan-400 font-mono">{slm.latency} ⚡</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 uppercase font-semibold flex items-center justify-center space-x-1">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Token Throughput</span>
          </div>
          <div className="flex items-center justify-around mt-2">
            <div>
              <div className="text-xs text-slate-500 font-mono">LLM</div>
              <div className="text-sm font-bold text-slate-300 font-mono">{llm.tokensPerSec}</div>
            </div>
            <div className="text-xs font-bold text-emerald-400 font-mono">vs</div>
            <div>
              <div className="text-xs text-emerald-400 font-mono">SLM</div>
              <div className="text-sm font-bold text-emerald-400 font-mono">{slm.tokensPerSec} 🚀</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 uppercase font-semibold flex items-center justify-center space-x-1">
            <HardDrive className="w-3.5 h-3.5 text-purple-400" />
            <span>VRAM / Memory</span>
          </div>
          <div className="flex items-center justify-around mt-2">
            <div>
              <div className="text-xs text-slate-500 font-mono">Cloud LLM</div>
              <div className="text-sm font-bold text-slate-300 font-mono">API Server</div>
            </div>
            <div className="text-xs font-bold text-purple-400 font-mono">vs</div>
            <div>
              <div className="text-xs text-purple-400 font-mono">SLM (4-bit)</div>
              <div className="text-sm font-bold text-purple-400 font-mono">3.4 GB 💻</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 uppercase font-semibold flex items-center justify-center space-x-1">
            <DollarSign className="w-3.5 h-3.5 text-amber-400" />
            <span>Cost / 1M Tokens</span>
          </div>
          <div className="flex items-center justify-around mt-2">
            <div>
              <div className="text-xs text-slate-500 font-mono">Cloud LLM</div>
              <div className="text-sm font-bold text-amber-400 font-mono">{llm.cost}</div>
            </div>
            <div className="text-xs font-bold text-amber-400 font-mono">vs</div>
            <div>
              <div className="text-xs text-emerald-400 font-mono">SLM Edge</div>
              <div className="text-sm font-bold text-emerald-400 font-mono">$0.00 FREE</div>
            </div>
          </div>
        </div>

      </div>

      {/* Side-by-Side Model Output Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LLM Card */}
        <div className="bg-slate-950/90 rounded-xl border border-indigo-500/30 p-5 space-y-3 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-indigo-500/20 text-indigo-300 text-[10px] font-mono px-3 py-1 rounded-bl-xl font-bold">
            {llm.badge}
          </div>
          
          <div className="flex items-center space-x-2">
            <Cpu className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-slate-100 text-sm">{llm.name}</h3>
          </div>

          <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 text-xs text-slate-200 leading-relaxed font-mono whitespace-pre-line">
            {cleanText(llm.response)}
          </div>

          <div className="flex items-center justify-between text-xs pt-2 text-slate-400 border-t border-slate-900">
            <span className="flex items-center space-x-1">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              <span>Grounding Accuracy: <strong className="text-indigo-400">{llm.accuracyScore}%</strong></span>
            </span>
            <span className="text-[11px] text-slate-500 font-mono">Tokens: ~420</span>
          </div>
        </div>

        {/* SLM Card */}
        <div className="bg-slate-950/90 rounded-xl border border-cyan-500/30 p-5 space-y-3 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-cyan-500/20 text-cyan-300 text-[10px] font-mono px-3 py-1 rounded-bl-xl font-bold">
            {slm.badge}
          </div>

          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-slate-100 text-sm">{slm.name}</h3>
          </div>

          <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 text-xs text-slate-200 leading-relaxed font-mono whitespace-pre-line">
            {cleanText(slm.response)}
          </div>


          <div className="flex items-center justify-between text-xs pt-2 text-slate-400 border-t border-slate-900">
            <span className="flex items-center space-x-1">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Grounding Accuracy: <strong className="text-cyan-400">{slm.accuracyScore}%</strong></span>
            </span>
            <span className="text-[11px] text-cyan-400 font-mono">Zero Telemetry (Air-Gapped)</span>
          </div>
        </div>

      </div>

    </div>
  );
}
