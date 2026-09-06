import React from 'react';
import type { MetricItem, MetricCategory } from '../../types/metrics';
import { X } from 'lucide-react';

interface ModalInspectorProps {
  metric: MetricItem | null;
  onClose: () => void;
}

export const ModalInspector: React.FC<ModalInspectorProps> = ({
  metric,
  onClose
}) => {
  if (!metric) return null;

  const getCategoryBadgeClass = (category: MetricCategory) => {
    switch (category) {
      case 'OKR': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'KPI': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'KRA': return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'KRI': return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel w-full max-w-2xl p-6 rounded-2xl border border-slate-800 shadow-2xl relative space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-0.5 rounded text-xs font-black uppercase border ${getCategoryBadgeClass(metric.category)}`}>
            {metric.category}
          </span>
          <span className="text-xs text-slate-400">Governance Breakdown</span>
        </div>

        <h2 className="text-xl font-bold text-white">{metric.title}</h2>
        <p className="text-xs text-slate-300 leading-relaxed">{metric.summary}</p>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
          <div>
            <strong className="text-cyan-400 block font-bold mb-0.5">Why This Metric Matters to the Enterprise:</strong>
            <p className="text-slate-300">{metric.whyItMatters}</p>
          </div>

          <div className="pt-2 border-t border-slate-900">
            <strong className="text-rose-400 block font-bold mb-0.5">Anti-Pattern / Common Pitfall to Avoid:</strong>
            <p className="text-rose-200/90">{metric.antiPatternToAvoid}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 font-semibold block text-[10px] uppercase">Accountable Owner</span>
            <span className="text-white font-bold mt-1 block">{metric.ownerRole}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 font-semibold block text-[10px] uppercase">Review Event Cadence</span>
            <span className="text-emerald-400 font-bold mt-1 block">{metric.governanceCadence}</span>
          </div>
        </div>

        <div className="pt-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
