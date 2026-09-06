import React, { useState } from 'react';
import { TestTube2, CheckCircle2, AlertTriangle, RefreshCw, BarChart2, ShieldCheck } from 'lucide-react';

export default function EvalsSimulator() {
  const [contextPrecision, setContextPrecision] = useState(0.85);
  const [groundedness, setGroundedness] = useState(0.92);
  const [answerRelevance, setAnswerRelevance] = useState(0.88);

  // Overall Evals Score = Weighted average
  const overallScore = Math.round(((contextPrecision * 0.3) + (groundedness * 0.4) + (answerRelevance * 0.3)) * 100);

  const isPassedGate = overallScore >= 85 && groundedness >= 0.90;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-cyan">QUALITY CONTROL TOOL</span>
          <span className="text-xs text-gray-400 font-mono">LLM EVALS HARNESS</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <TestTube2 className="w-5 h-5 text-cyan-400" />
          RAG Triad & Continuous Evals Benchmarking Simulator
        </h2>
        <p className="text-xs text-gray-300">
          Interactively test how Context Relevance, Groundedness (Faithfulness), and Answer Relevance determine production deployment readiness under LLM-as-a-Judge test harnesses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metric Sliders */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6 lg:col-span-1">
          <h3 className="text-sm font-bold text-white mb-3">Adjust RAG Triad Metrics</h3>

          {/* Context Precision */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold text-gray-200">1. Context Precision</span>
              <span className="font-mono text-cyan-300 font-bold">{(contextPrecision * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.40"
              max="1.00"
              step="0.02"
              value={contextPrecision}
              onChange={(e) => setContextPrecision(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <p className="text-[10px] text-gray-400 mt-1">Measures if vector DB retrieved *only* relevant chunks.</p>
          </div>

          {/* Groundedness */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold text-gray-200">2. Groundedness (Faithfulness)</span>
              <span className="font-mono text-emerald-300 font-bold">{(groundedness * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.40"
              max="1.00"
              step="0.02"
              value={groundedness}
              onChange={(e) => setGroundedness(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <p className="text-[10px] text-gray-400 mt-1">Measures if LLM response is strictly supported without hallucinations.</p>
          </div>

          {/* Answer Relevance */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold text-gray-200">3. Answer Relevance</span>
              <span className="font-mono text-indigo-300 font-bold">{(answerRelevance * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.40"
              max="1.00"
              step="0.02"
              value={answerRelevance}
              onChange={(e) => setAnswerRelevance(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <p className="text-[10px] text-gray-400 mt-1">Measures if the generated output directly answers user intent.</p>
          </div>
        </div>

        {/* Evals Gate Dashboard Output */}
        <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
          {/* Main Evals Gate Result */}
          <div className={`p-6 rounded-2xl border ${isPassedGate ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-pink-500/40 bg-pink-950/20'} flex items-center justify-between gap-4`}>
            <div>
              <div className="flex items-center gap-2 mb-1">
                {isPassedGate ? (
                  <span className="badge-emerald flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> CI/CD EVAL GATE PASSED
                  </span>
                ) : (
                  <span className="bg-pink-500/20 text-pink-300 border border-pink-500/30 text-[10px] px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> DEPLOYMENT BLOCKED
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                {isPassedGate ? 'Ready for Production Release' : 'Hallucination / Quality Risk Detected'}
              </h3>

              <p className="text-xs text-gray-300 mt-1">
                {isPassedGate
                  ? 'All RAG triad thresholds passed system safety rules (Faithfulness >= 90%, Overall >= 85%).'
                  : 'Groundedness is below 90% or composite score failed quality gate.'}
              </p>
            </div>

            <div className="text-right">
              <div className="text-4xl font-extrabold text-white font-mono">{overallScore}/100</div>
              <div className="text-[10px] text-gray-400 uppercase font-bold">Composite Eval Score</div>
            </div>
          </div>

          {/* Interactive Scenario Inspection */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-cyan-400" />
              Sample LLM-as-a-Judge Verification Breakdown
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] font-bold text-cyan-300 mb-1">Context Precision</div>
                <div className="text-xs text-gray-300">
                  Retrieved 4 chunks. 3 contains exact semantic answer context.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] font-bold text-emerald-300 mb-1">Faithfulness Check</div>
                <div className="text-xs text-gray-300">
                  {groundedness >= 0.90 ? '0 synthetic claims detected.' : 'Warning: 2 claims missing grounding in context!'}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] font-bold text-indigo-300 mb-1">Answer Relevance</div>
                <div className="text-xs text-gray-300">
                  Output directly resolves user query without rambling.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
