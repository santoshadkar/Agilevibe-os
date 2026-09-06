import React, { useState } from "react";
import { Layers, Sliders, Hash, Scissors, AlertTriangle, FileText, Check } from "lucide-react";
import { chunkDocument } from "../utils/ragEngine";

export default function ChunkingLab() {
  const [sampleText, setSampleText] = useState(
    `The MITRE ATT&CK framework categorizes adversary tactics and techniques based on real-world observations. Initial Access (Tactics TA0001) consists of techniques that adversaries use to gain an initial foothold within a network. Key techniques include T1190 (Exploit Public-Facing Application) and T1078 (Valid Accounts). Once access is achieved, attackers establish Persistence (TA0003) via registry keys (T1547.001) and compromised Web Shells (T1505.003). Small Language Models (SLMs) running locally like Microsoft Phi-3 and Gemma 2B enable zero-telemetry cybersecurity threat hunting on air-gapped endpoints.`
  );

  const [chunkSize, setChunkSize] = useState(30); // in words/tokens
  const [overlap, setOverlap] = useState(10); // in words/tokens
  const [strategy, setStrategy] = useState("fixed"); // fixed, sentence, markdown

  const chunks = chunkDocument(sampleText, chunkSize, overlap);
  const totalWords = sampleText.split(/\s+/).filter(Boolean).length;

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Layers className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl font-bold text-slate-100">
              Interactive Text Chunking & Tokenization Lab
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulate document preprocessing, sliding window chunk overlaps, and boundary tokenization.
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
          <div className="text-slate-400">
            Total Words: <span className="text-amber-400 font-mono font-bold">{totalWords}</span>
          </div>
          <div className="h-4 w-px bg-slate-800" />
          <div className="text-slate-400">
            Generated Chunks: <span className="text-cyan-400 font-mono font-bold">{chunks.length}</span>
          </div>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
        
        {/* Chunk Size Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-300 flex items-center space-x-1">
              <Hash className="w-3.5 h-3.5 text-amber-400" />
              <span>Chunk Size (Tokens/Words)</span>
            </span>
            <span className="text-amber-400 font-mono">{chunkSize} tokens</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            step="5"
            value={chunkSize}
            onChange={(e) => setChunkSize(Number(e.target.value))}
            className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer"
          />
          <p className="text-[11px] text-slate-500">
            Smaller chunks preserve precision; larger chunks provide richer context.
          </p>
        </div>

        {/* Overlap Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-300 flex items-center space-x-1">
              <Scissors className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sliding Window Overlap</span>
            </span>
            <span className="text-cyan-400 font-mono">{overlap} tokens</span>
          </div>
          <input
            type="range"
            min="0"
            max={Math.min(30, chunkSize - 5)}
            step="2"
            value={overlap}
            onChange={(e) => setOverlap(Number(e.target.value))}
            className="w-full accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer"
          />
          <p className="text-[11px] text-slate-500">
            Overlap prevents semantic truncation at sentence boundaries.
          </p>
        </div>

        {/* Strategy Selector */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-300 flex items-center space-x-1">
            <Sliders className="w-3.5 h-3.5 text-purple-400" />
            <span>Chunking Strategy</span>
          </div>
          <select
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer font-medium"
          >
            <option value="fixed">Fixed Token Window + Overlap</option>
            <option value="sentence">Semantic Sentence Splitter</option>
            <option value="markdown">Markdown & Code Structure Aware</option>
          </select>
          <p className="text-[11px] text-slate-500">
            Select semantic splitting logic for unstructured enterprise text.
          </p>
        </div>
      </div>

      {/* Input Text Area */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
          <span className="flex items-center space-x-1.5">
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Document Input Payload</span>
          </span>
          <span className="text-[11px] text-slate-500">Editable Sample Document</span>
        </label>
        <textarea
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
          rows={3}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono leading-relaxed"
        />
      </div>

      {/* Live Chunk Visualization Cards */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-200 flex items-center space-x-2">
          <span>Generated Vector Chunks</span>
          <span className="text-xs bg-amber-950 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/30 font-mono">
            {chunks.length} total
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chunks.map((chunk, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 rounded-xl border border-slate-800 hover:border-amber-500/50 p-4 transition-all duration-200 shadow-md relative group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2 border-b border-slate-800/80 pb-2">
                <span className="flex items-center space-x-1 text-amber-400 font-bold">
                  <span>Chunk #{idx + 1}</span>
                </span>
                <span className="bg-slate-900 px-2 py-0.5 rounded text-[11px]">
                  Tokens: {chunk.tokens} | Range: [{chunk.startIndex} - {chunk.endIndex}]
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                "{chunk.text}"
              </p>

              {overlap > 0 && idx < chunks.length - 1 && (
                <div className="mt-3 pt-2 border-t border-slate-900 flex items-center space-x-1 text-[10px] text-cyan-400">
                  <Scissors className="w-3 h-3" />
                  <span>Next chunk overlaps by {overlap} tokens</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
