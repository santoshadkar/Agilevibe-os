import React, { useState } from 'react';
import { FileText, Download, Copy, Sparkles, Check, RefreshCw } from 'lucide-react';

export default function PrdGenerator() {
  const [productName, setProductName] = useState('Enterprise Knowledge Copilot');
  const [domain, setDomain] = useState('Customer Support & Internal Docs');
  const [primaryModel, setPrimaryModel] = useState('Claude 3.5 Sonnet (RAG Pipeline)');
  const [targetLatency, setTargetLatency] = useState('1.5s p95 (TTFT < 400ms)');
  const [maxCostPerQuery, setMaxCostPerQuery] = useState('$0.005');
  const [confidenceThreshold, setConfidenceThreshold] = useState('0.75');
  const [fallbackStrategy, setFallbackStrategy] = useState('Elasticsearch Keyword Search + Human Handoff');
  const [copied, setCopied] = useState(false);

  const generatedMarkdown = `# AI Product Requirements Document (PRD)

## 1. Product Overview & Objective
- **Product Name:** ${productName}
- **Target Domain:** ${domain}
- **Primary AI Architecture:** ${primaryModel}

## 2. Non-Functional SLAs
- **p95 Latency Threshold:** ${targetLatency}
- **Max Cost SLA:** ${maxCostPerQuery} per user request
- **Grounding Confidence Gate:** >= ${confidenceThreshold}

## 3. Fallback & Graceful Degradation Strategy
- **Low Confidence Action (< ${confidenceThreshold}):** ${fallbackStrategy}
- **API Timeout Fallback:** Switch to Tier-2 SLM cached response after 2.5 seconds.
- **Safety Violation:** Strip response text and display standard security warning badge.

## 4. Telemetry & Continuous Evals
- **Implicit Feedback:** Monitor copy-to-clipboard rate and edit retention.
- **Continuous Evaluation:** Run daily 100-sample Golden Dataset eval measuring Answer Relevance and Groundedness.
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${productName.toLowerCase().replace(/\s+/g, '-')}-prd-spec.md`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-neon">LIVE AI TOOL</span>
          <span className="text-xs text-gray-400 font-mono">SPEC BUILDER</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-400" />
          AI PRD & Non-Deterministic Spec Generator
        </h2>
        <p className="text-xs text-gray-300">
          Interactively configure non-functional SLAs, failure modes, latency bounds, and fallback strategies to output an enterprise-ready AI PRD.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Parameters Form */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white mb-2">Configuration Parameters</h3>

          <div>
            <label className="text-xs font-semibold text-gray-300 block mb-1">Product Feature Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-300 block mb-1">Domain Use Case</label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full bg-[#111827] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="Customer Support & Internal Docs">Customer Support & Internal Docs</option>
              <option value="Healthcare EHR Medical Summarization">Healthcare EHR Medical Summarization</option>
              <option value="Fintech Fraud Detection & Reporting">Fintech Fraud Detection & Reporting</option>
              <option value="Developer Code Copilot">Developer Code Copilot</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-300 block mb-1">Primary Model & Pipeline Choice</label>
            <select
              value={primaryModel}
              onChange={(e) => setPrimaryModel(e.target.value)}
              className="w-full bg-[#111827] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="Claude 3.5 Sonnet (RAG Pipeline)">Claude 3.5 Sonnet (RAG Pipeline)</option>
              <option value="GPT-4o (Frontier Direct API)">GPT-4o (Frontier Direct API)</option>
              <option value="Fine-Tuned Llama 3 8B (vLLM Self-Hosted)">Fine-Tuned Llama 3 8B (vLLM Self-Hosted)</option>
              <option value="Hybrid: Llama 3B Intent Router + Claude Sonnet">Hybrid: Llama 3B Intent Router + Claude Sonnet</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-1">p95 Latency SLA Target</label>
              <input
                type="text"
                value={targetLatency}
                onChange={(e) => setTargetLatency(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-1">Max Cost / Query</label>
              <input
                type="text"
                value={maxCostPerQuery}
                onChange={(e) => setMaxCostPerQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-300 block mb-1">Confidence Score Gate (0.0 to 1.0)</label>
            <input
              type="range"
              min="0.50"
              max="0.95"
              step="0.05"
              value={confidenceThreshold}
              onChange={(e) => setConfidenceThreshold(e.target.value)}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
              <span>0.50 (Permissive)</span>
              <span className="text-cyan-300 font-bold">{confidenceThreshold}</span>
              <span>0.95 (Strict Medical/Legal)</span>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-300 block mb-1">Low Confidence Fallback UX</label>
            <input
              type="text"
              value={fallbackStrategy}
              onChange={(e) => setFallbackStrategy(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Live Preview & Export */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Generated Markdown Spec
            </h3>
            <div className="flex items-center gap-2">
              <button onClick={handleCopy} className="btn-secondary text-[11px] py-1.5 px-2.5">
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button onClick={handleDownload} className="btn-primary text-[11px] py-1.5 px-2.5">
                <Download className="w-3.5 h-3.5" />
                <span>Download .MD</span>
              </button>
            </div>
          </div>

          <pre className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-cyan-300 overflow-x-auto whitespace-pre-wrap leading-relaxed flex-1">
            {generatedMarkdown}
          </pre>
        </div>
      </div>
    </div>
  );
}
