import React, { useState } from 'react';
import { Calculator, DollarSign, Zap, TrendingDown, Layers, PieChart } from 'lucide-react';

const MODEL_PRICING = {
  'gpt-4o': { name: 'OpenAI GPT-4o', inputPerM: 2.50, outputPerM: 10.00, cachedInputPerM: 1.25 },
  'claude-3-5-sonnet': { name: 'Anthropic Claude 3.5 Sonnet', inputPerM: 3.00, outputPerM: 15.00, cachedInputPerM: 0.30 },
  'gemini-1-5-pro': { name: 'Google Gemini 1.5 Pro', inputPerM: 1.25, outputPerM: 5.00, cachedInputPerM: 0.31 },
  'llama-3-70b-hosted': { name: 'Llama 3.1 70B (Managed API)', inputPerM: 0.60, outputPerM: 0.80, cachedInputPerM: 0.30 },
  'llama-3-8b-self': { name: 'Llama 3.1 8B (vLLM Self-Hosted GPU)', inputPerM: 0.05, outputPerM: 0.05, cachedInputPerM: 0.02 },
};

export default function CostRoiCalculator() {
  const [modelKey, setModelKey] = useState('claude-3-5-sonnet');
  const [dau, setDau] = useState(10000);
  const [requestsPerUser, setRequestsPerUser] = useState(5);
  const [inputTokens, setInputTokens] = useState(3000);
  const [outputTokens, setOutputTokens] = useState(300);
  const [enableCaching, setEnableCaching] = useState(true);
  const [cachePercentage, setCachePercentage] = useState(70); // 70% static system prompt/docs cached

  const currentModel = MODEL_PRICING[modelKey];

  // Daily Math
  const totalDailyRequests = dau * requestsPerUser;
  
  const dailyRawInputTokens = (totalDailyRequests * inputTokens) / 1000000; // in Millions
  const dailyOutputTokens = (totalDailyRequests * outputTokens) / 1000000; // in Millions

  // Caching math
  const cachedInputM = enableCaching ? dailyRawInputTokens * (cachePercentage / 100) : 0;
  const nonCachedInputM = dailyRawInputTokens - cachedInputM;

  const dailyInputCost = (nonCachedInputM * currentModel.inputPerM) + (cachedInputM * currentModel.cachedInputPerM);
  const dailyOutputCost = dailyOutputTokens * currentModel.outputPerM;
  
  const totalDailyCost = dailyInputCost + dailyOutputCost;
  const totalMonthlyCost = totalDailyCost * 30;

  // Comparison with GPT-4o baseline
  const gpt4oBaselineDaily = (dailyRawInputTokens * MODEL_PRICING['gpt-4o'].inputPerM) + (dailyOutputTokens * MODEL_PRICING['gpt-4o'].outputPerM);
  const gpt4oMonthly = gpt4oBaselineDaily * 30;

  const monthlySavingsVsBaseline = gpt4oMonthly - totalMonthlyCost;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-cyan">FINANCIAL TOOL</span>
          <span className="text-xs text-gray-400 font-mono">TOKEN MATH ENGINE</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-cyan-400" />
          Interactive Token Cost & ROI Calculator
        </h2>
        <p className="text-xs text-gray-300">
          Model API token spending across leading frontier LLMs, calculate prompt caching savings, and optimize your AI unit economics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Parameters Controls */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 lg:col-span-1">
          <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            Usage & Model Parameters
          </h3>

          <div>
            <label className="text-xs font-semibold text-gray-300 block mb-1">Target LLM Model</label>
            <select
              value={modelKey}
              onChange={(e) => setModelKey(e.target.value)}
              className="w-full bg-[#111827] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              {Object.entries(MODEL_PRICING).map(([key, item]) => (
                <option key={key} value={key}>{item.name}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1">
              <span>Daily Active Users (DAU)</span>
              <span className="text-indigo-400 font-mono font-bold">{dau.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={dau}
              onChange={(e) => setDau(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1">
              <span>Avg Queries / User / Day</span>
              <span className="text-indigo-400 font-mono font-bold">{requestsPerUser}</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={requestsPerUser}
              onChange={(e) => setRequestsPerUser(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-1">Input Tokens / Req</label>
              <input
                type="number"
                value={inputTokens}
                onChange={(e) => setInputTokens(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-1">Output Tokens / Req</label>
              <input
                type="number"
                value={outputTokens}
                onChange={(e) => setOutputTokens(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white font-mono"
              />
            </div>
          </div>

          {/* Prompt Caching Toggle */}
          <div className="pt-3 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-200">Enable Prompt Caching</span>
              <input
                type="checkbox"
                checked={enableCaching}
                onChange={(e) => setEnableCaching(e.target.checked)}
                className="w-4 h-4 accent-indigo-500 rounded cursor-pointer"
              />
            </div>

            {enableCaching && (
              <div>
                <div className="flex justify-between text-[11px] text-gray-400 mb-1">
                  <span>Static Context Cached</span>
                  <span className="text-cyan-400 font-bold font-mono">{cachePercentage}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="90"
                  step="5"
                  value={cachePercentage}
                  onChange={(e) => setCachePercentage(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>

        {/* Results Dashboard Cards */}
        <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
          {/* Main KPI Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-indigo-500/30">
              <div className="text-xs text-gray-400 uppercase font-bold mb-1">Projected Monthly Spend</div>
              <div className="text-3xl font-extrabold text-white glow-text-violet">
                ${totalMonthlyCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
              <div className="text-[11px] text-gray-400 mt-1">~${(totalDailyCost).toFixed(2)} / day</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30">
              <div className="text-xs text-gray-400 uppercase font-bold mb-1">Cost Per Query</div>
              <div className="text-3xl font-extrabold text-cyan-300 font-mono">
                ${(totalDailyCost / totalDailyRequests).toFixed(5)}
              </div>
              <div className="text-[11px] text-gray-400 mt-1">{totalDailyRequests.toLocaleString()} total queries/day</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30">
              <div className="text-xs text-gray-400 uppercase font-bold mb-1">Caching & Model Savings</div>
              <div className={`text-3xl font-extrabold font-mono ${monthlySavingsVsBaseline >= 0 ? 'text-emerald-400' : 'text-pink-400'}`}>
                {monthlySavingsVsBaseline >= 0 ? '+' : ''}${monthlySavingsVsBaseline.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
              <div className="text-[11px] text-gray-400 mt-1">vs un-cached GPT-4o baseline</div>
            </div>
          </div>

          {/* Model Price Comparison Table */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
              <PieChart className="w-4 h-4 text-indigo-400" />
              Model Comparison Matrix for your {dau.toLocaleString()} DAU Scale
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 bg-white/5">
                    <th className="p-3">Model</th>
                    <th className="p-3">Input $/1M</th>
                    <th className="p-3">Output $/1M</th>
                    <th className="p-3">Est. Monthly Bill</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(MODEL_PRICING).map(([key, item]) => {
                    const isSelected = key === modelKey;
                    const mCost = ((totalDailyRequests * inputTokens / 1M_calc(item.inputPerM, enableCaching ? cachePercentage : 0, item.cachedInputPerM)) + (totalDailyRequests * outputTokens / 1000000 * item.outputPerM)) * 30;
                    
                    return (
                      <tr key={key} className={`border-b border-white/5 ${isSelected ? 'bg-indigo-600/20 text-white font-bold' : 'text-gray-300'}`}>
                        <td className="p-3 flex items-center gap-2">
                          {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                          {item.name}
                        </td>
                        <td className="p-3 font-mono">${item.inputPerM.toFixed(2)}</td>
                        <td className="p-3 font-mono">${item.outputPerM.toFixed(2)}</td>
                        <td className="p-3 font-mono text-cyan-300">${mCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                        <td className="p-3">
                          {isSelected ? (
                            <span className="badge-cyan text-[10px]">Active</span>
                          ) : (
                            <button onClick={() => setModelKey(key)} className="text-[10px] text-gray-400 underline hover:text-white">
                              Select
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function 1M_calc(inputPrice, cachePercent, cachedPrice) {
  // Return weighted cost per 1M input tokens
  const cachedRatio = cachePercent / 100;
  const nonCachedRatio = 1 - cachedRatio;
  const weightedPrice = (nonCachedRatio * inputPrice) + (cachedRatio * cachedPrice);
  return 1000000 / weightedPrice;
}
