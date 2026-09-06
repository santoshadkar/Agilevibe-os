import React from 'react';
import { METRIC_HISTORY_TIMELINE } from '../../data/metricsData';
import { Clock, Sparkles } from 'lucide-react';

export const HistoryTimeline: React.FC = () => {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Historical Evolution of Goal & Performance Systems</h2>
          <p className="text-xs text-slate-400">From Peter Drucker's MBOs in 1954 to 2026 AI-Augmented Vibe Telemetry.</p>
        </div>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-8 py-2">
        {METRIC_HISTORY_TIMELINE.map((node, index) => (
          <div key={index} className="relative pl-6 md:pl-8 group">
            {/* Circle dot on line */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center text-amber-400 font-bold text-xs shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
              {index + 1}
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all bg-slate-900/60">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                  {node.badge} • {node.year}
                </span>
                <span className="text-xs text-slate-400 font-semibold">Pioneer: <strong className="text-slate-200">{node.pioneer}</strong></span>
              </div>

              <h3 className="text-lg font-bold text-white mt-1">{node.title}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{node.summary}</p>

              <div className="mt-3 p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-amber-200/90 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Key Innovation:</strong> {node.keyInnovation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
