import React from 'react';
import { FRAMEWORK_COMPARISON_MATRIX } from '../../data/metricsData';
import { Layers } from 'lucide-react';
import type { MetricCategory } from '../../types/metrics';

export const ComparisonMatrix: React.FC = () => {
  const getCategoryBadgeClass = (category: MetricCategory) => {
    switch (category) {
      case 'OKR': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'KPI': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'KRA': return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'KRI': return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
    }
  };

  return (
    <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
          <Layers className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Side-by-Side Framework Comparison Matrix</h2>
          <p className="text-xs text-slate-400">Structural comparative analysis between OKRs, KPIs, KRAs, and KRIs.</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-300">
              <th className="p-3.5 font-bold uppercase tracking-wider">Framework</th>
              <th className="p-3.5 font-bold uppercase tracking-wider">Core Purpose</th>
              <th className="p-3.5 font-bold uppercase tracking-wider">Time Horizon</th>
              <th className="p-3.5 font-bold uppercase tracking-wider">Review Frequency</th>
              <th className="p-3.5 font-bold uppercase tracking-wider">Primary Owner</th>
              <th className="p-3.5 font-bold uppercase tracking-wider">Common Failure Mode / Anti-Pattern</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {FRAMEWORK_COMPARISON_MATRIX.map((row) => (
              <tr key={row.category} className="hover:bg-slate-900/60 transition-colors">
                <td className="p-3.5 font-bold align-top">
                  <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-black uppercase border ${getCategoryBadgeClass(row.category)}`}>
                    {row.category}
                  </span>
                  <div className="text-[11px] text-slate-400 font-normal mt-1">{row.fullName}</div>
                </td>
                <td className="p-3.5 align-top leading-relaxed text-slate-200">{row.corePurpose}</td>
                <td className="p-3.5 align-top text-slate-300 font-medium">{row.timeHorizon}</td>
                <td className="p-3.5 align-top text-slate-300 font-medium">{row.reviewFrequency}</td>
                <td className="p-3.5 align-top text-cyan-300 font-semibold">{row.primaryOwner}</td>
                <td className="p-3.5 align-top text-rose-300 text-[11px] leading-relaxed bg-rose-950/10 rounded-lg">
                  {row.commonFailureMode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
