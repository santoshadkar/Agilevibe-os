import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight, RotateCcw, Cpu, Sparkles } from 'lucide-react';

export default function ModelDecisionMatrix() {
  const [answers, setAnswers] = useState({
    freshness: null, // 'realtime' | 'static'
    privacy: null, // 'strict_onprem' | 'cloud_zdr'
    latency: null, // 'ultra_fast' | 'standard'
    budget: null, // 'high' | 'constrained'
  });

  const handleSelect = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const resetMatrix = () => {
    setAnswers({ freshness: null, privacy: null, latency: null, budget: null });
  };

  const isComplete = Object.values(answers).every(v => v !== null);

  const getRecommendation = () => {
    if (answers.privacy === 'strict_onprem') {
      return {
        title: 'Open-Weight SLM / LLM (Self-Hosted vLLM on Private VPC)',
        subtitle: 'Llama 3.1 70B / 8B or Mistral NeMo',
        reasoning: 'Strict HIPAA/GDPR or air-gapped on-premise requirements rule out public frontier APIs. Self-hosting via vLLM or Ollama gives 100% data sovereignty.',
        stack: ['Llama 3.1 70B Instruct', 'vLLM GPU Cluster (A100/H100)', 'pgvector / Qdrant On-Prem'],
        color: 'border-pink-500/40 bg-pink-950/20 text-pink-300'
      };
    }

    if (answers.freshness === 'realtime') {
      if (answers.latency === 'ultra_fast' || answers.budget === 'constrained') {
        return {
          title: 'Hybrid Pipeline: Fast RAG + Small Language Model (SLM)',
          subtitle: 'RAG over Llama 3 8B or Claude 3.5 Haiku',
          reasoning: 'You require real-time dynamic facts, but latency or budget is tight. Combine a fast vector search with an optimized lightweight model.',
          stack: ['Pinecone Vector DB', 'Claude 3.5 Haiku or Llama 3 8B', 'Prompt Caching Enabled'],
          color: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300'
        };
      }
      return {
        title: 'Frontier Model + RAG Architecture',
        subtitle: 'Claude 3.5 Sonnet or GPT-4o with Vector Database',
        reasoning: 'Ideal for enterprise knowledge search requiring state-of-the-art reasoning over private documents without model retraining.',
        stack: ['OpenAI / Anthropic Enterprise API', 'Pinecone / Qdrant', 'RAG Triad Evals Framework'],
        color: 'border-indigo-500/40 bg-indigo-950/20 text-indigo-300'
      };
    }

    // Static domain knowledge case
    if (answers.latency === 'ultra_fast' || answers.budget === 'constrained') {
      return {
        title: 'Fine-Tuned Open-Source SLM',
        subtitle: 'Fine-Tuned Llama 3 8B or Phi-3',
        reasoning: 'Your domain syntax/formatting is static. Fine-tuning a small model drastically lowers token costs and cuts response latency by 70%.',
        stack: ['Llama 3 8B Fine-tuned via Unsloth/LoRA', 'Groq / AWS Bedrock Hosting'],
        color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300'
      };
    }

    return {
      title: 'Direct Frontier API with System Prompting',
      subtitle: 'GPT-4o or Claude 3.5 Sonnet',
      reasoning: 'Fastest time-to-market. Zero infra overhead, highly capable reasoning for general unstructured tasks.',
      stack: ['GPT-4o API', 'Structured Outputs (JSON Mode)', 'LangChain / LlamaIndex'],
      color: 'border-violet-500/40 bg-violet-950/20 text-violet-300'
    };
  };

  const rec = isComplete ? getRecommendation() : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-neon">DECISION ENGINE</span>
          <span className="text-xs text-gray-400 font-mono">MODEL ARCHITECTURE</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          Model Selection Decision Matrix
        </h2>
        <p className="text-xs text-gray-300">
          Answer 4 core product constraint questions to generate an architectural recommendation (RAG, Fine-Tuning, Frontier API, or Open-Source SLM).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Questions Matrix Form */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
          {/* Q1: Data Freshness */}
          <div>
            <label className="text-xs font-bold text-gray-200 block mb-2">
              1. Does your product require access to dynamic, real-time updated knowledge?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleSelect('freshness', 'realtime')}
                className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  answers.freshness === 'realtime'
                    ? 'bg-indigo-600/30 border-indigo-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                Yes (Dynamic Docs/Wikis)
              </button>
              <button
                onClick={() => handleSelect('freshness', 'static')}
                className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  answers.freshness === 'static'
                    ? 'bg-indigo-600/30 border-indigo-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                No (Static Domain Rules)
              </button>
            </div>
          </div>

          {/* Q2: Data Privacy */}
          <div>
            <label className="text-xs font-bold text-gray-200 block mb-2">
              2. What is your data governance & privacy constraint?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleSelect('privacy', 'strict_onprem')}
                className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  answers.privacy === 'strict_onprem'
                    ? 'bg-indigo-600/30 border-indigo-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                Strict On-Prem / Air-gapped
              </button>
              <button
                onClick={() => handleSelect('privacy', 'cloud_zdr')}
                className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  answers.privacy === 'cloud_zdr'
                    ? 'bg-indigo-600/30 border-indigo-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                Cloud API with Zero Retention
              </button>
            </div>
          </div>

          {/* Q3: Latency Requirement */}
          <div>
            <label className="text-xs font-bold text-gray-200 block mb-2">
              3. Target Latency Requirement (p95)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleSelect('latency', 'ultra_fast')}
                className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  answers.latency === 'ultra_fast'
                    ? 'bg-indigo-600/30 border-indigo-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                Ultra Fast (&lt; 800ms)
              </button>
              <button
                onClick={() => handleSelect('latency', 'standard')}
                className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  answers.latency === 'standard'
                    ? 'bg-indigo-600/30 border-indigo-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                Standard (1.5s - 3.0s)
              </button>
            </div>
          </div>

          {/* Q4: Unit Economics */}
          <div>
            <label className="text-xs font-bold text-gray-200 block mb-2">
              4. API Budget & Unit Economics Priority
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleSelect('budget', 'constrained')}
                className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  answers.budget === 'constrained'
                    ? 'bg-indigo-600/30 border-indigo-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                Tight Budget (High Volume)
              </button>
              <button
                onClick={() => handleSelect('budget', 'high')}
                className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  answers.budget === 'high'
                    ? 'bg-indigo-600/30 border-indigo-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                High Margin / Premium
              </button>
            </div>
          </div>

          <button onClick={resetMatrix} className="btn-secondary text-xs w-full py-2 justify-center">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Selections</span>
          </button>
        </div>

        {/* Output Recommendation Box */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Recommended Architectural Blueprint
            </h3>

            {isComplete ? (
              <div className={`p-6 rounded-2xl border ${rec.color} space-y-4`}>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider">TOP RECOMMENDATION</span>
                  <h4 className="text-lg font-extrabold text-white mt-1">{rec.title}</h4>
                  <p className="text-xs text-gray-300 font-semibold">{rec.subtitle}</p>
                </div>

                <div className="text-xs text-gray-300 leading-relaxed p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <strong className="text-cyan-400 block mb-1">Architectural Rationale:</strong>
                  {rec.reasoning}
                </div>

                <div>
                  <h5 className="text-[11px] font-bold text-gray-300 uppercase mb-2">Suggested Tech Stack:</h5>
                  <ul className="space-y-1 text-xs text-gray-200">
                    {rec.stack.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-gray-400 space-y-3">
                <Cpu className="w-12 h-12 text-gray-600 mx-auto animate-pulse" />
                <p className="text-xs">Complete all 4 questions on the left to unlock your tailored model strategy recommendation.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
