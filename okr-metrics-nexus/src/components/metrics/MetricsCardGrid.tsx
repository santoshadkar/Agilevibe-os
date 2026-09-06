import React from 'react';
import type { MetricItem, MetricCategory } from '../../types/metrics';
import { ENTERPRISE_ROLES } from '../../data/metricsData';
import { 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  ChevronRight, 
  Cpu, 
  Sparkles, 
  TrainTrack, 
  Terminal, 
  ShieldCheck, 
  Compass, 
  Target, 
  Users 
} from 'lucide-react';

interface MetricsCardGridProps {
  metrics: MetricItem[];
  onInspect: (item: MetricItem) => void;
  onUpdateKr: (metricId: string, krId: string, newVal: number) => void;
}

export const MetricsCardGrid: React.FC<MetricsCardGridProps> = ({
  metrics,
  onInspect,
  onUpdateKr
}) => {
  const renderRoleIcon = (iconName: string, className: string = 'w-4 h-4') => {
    switch (iconName) {
      case 'Cpu': return <Cpu className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'TrainTrack': return <TrainTrack className={className} />;
      case 'Terminal': return <Terminal className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'Target': return <Target className={className} />;
      case 'Users': return <Users className={className} />;
      default: return <Target className={className} />;
    }
  };

  const getCategoryBadgeClass = (category: MetricCategory) => {
    switch (category) {
      case 'OKR': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'KPI': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'KRA': return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'KRI': return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {metrics.map((item) => {
        const roleMeta = ENTERPRISE_ROLES.find(r => r.id === item.role);

        return (
          <div
            key={item.id}
            className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg hover:shadow-cyan-500/5"
          >
            <div>
              {/* Top Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider border ${getCategoryBadgeClass(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {item.governanceCadence}
                  </span>
                </div>

                {roleMeta && (
                  <div className={`text-[11px] font-semibold flex items-center gap-1.5 ${roleMeta.color}`}>
                    {renderRoleIcon(roleMeta.iconName, 'w-3.5 h-3.5')}
                    <span>{roleMeta.shortTitle}</span>
                  </div>
                )}
              </div>

              {/* Title & Summary */}
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                {item.summary}
              </p>

              {/* CATEGORY SPECIFIC RENDERING */}
              
              {/* 1. OKR RENDERING */}
              {item.category === 'OKR' && item.keyResults && (
                <div className="mt-4 space-y-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Key Results (Target vs Actual Progress)</span>
                    <span className="text-slate-500 font-normal text-[10px]">Click + to simulate</span>
                  </div>
                  {item.keyResults.map((kr) => {
                    const percent = Math.min(100, Math.round((kr.current / kr.target) * 100));
                    return (
                      <div key={kr.id} className="space-y-1 text-xs">
                        <div className="flex items-center justify-between text-slate-200">
                          <span className="line-clamp-1 font-medium">{kr.description}</span>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="font-mono text-cyan-300 font-bold">
                              {kr.current} / {kr.target} {kr.unit}
                            </span>
                            <button
                              onClick={() => onUpdateKr(item.id, kr.id, kr.current + 1)}
                              className="w-5 h-5 rounded bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 flex items-center justify-center text-xs font-bold transition-colors"
                              title="Simulate incrementing key result target"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden flex">
                          <div
                            className={`h-full transition-all duration-500 ${
                              percent >= 100 ? 'bg-emerald-400' : percent >= 75 ? 'bg-cyan-400' : percent >= 50 ? 'bg-amber-400' : 'bg-rose-400'
                            }`}
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 2. KPI RENDERING */}
              {item.category === 'KPI' && item.kpiDetails && (
                <div className="mt-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">Current Telemetry</div>
                    <div className="text-lg font-black text-emerald-400 mt-0.5 flex items-center gap-1.5">
                      {item.kpiDetails.currentVal}
                      {item.kpiDetails.trend === 'up' && <TrendingUp className="w-4 h-4 text-emerald-400" />}
                      {item.kpiDetails.trend === 'down' && <TrendingDown className="w-4 h-4 text-cyan-400" />}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">Target Standard</div>
                    <div className="text-sm font-bold text-slate-200 mt-1">{item.kpiDetails.targetVal}</div>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-slate-900 text-[11px] text-slate-400">
                    <strong className="text-slate-300">Benchmark:</strong> {item.kpiDetails.benchmark}
                  </div>
                </div>
              )}

              {/* 3. KRA RENDERING */}
              {item.category === 'KRA' && item.kraDetails && (
                <div className="mt-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 space-y-2 text-xs">
                  <div>
                    <strong className="text-amber-400 uppercase text-[10px] font-bold block">Accountability Scope</strong>
                    <span className="text-slate-300 mt-0.5 block">{item.kraDetails.accountabilityScope}</span>
                  </div>
                  <div>
                    <strong className="text-slate-400 text-[11px]">Key Role Deliverables:</strong>
                    <ul className="mt-1 space-y-1 list-disc list-inside text-slate-300 text-[11px]">
                      {item.kraDetails.keyDeliverables.map((del, i) => (
                        <li key={i}>{del}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 4. KRI RENDERING */}
              {item.category === 'KRI' && item.kriDetails && (
                <div className="mt-4 bg-rose-950/20 p-3.5 rounded-xl border border-rose-500/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-rose-400 font-bold uppercase text-[10px] flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> Risk Threshold
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      item.kriDetails.severity === 'critical' ? 'bg-rose-600 text-white' :
                      item.kriDetails.severity === 'high' ? 'bg-rose-500/20 text-rose-300 border border-rose-500' :
                      'bg-amber-500/20 text-amber-300 border border-amber-500'
                    }`}>
                      {item.kriDetails.severity} Severity
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400">Trigger Threshold:</span>
                      <div className="font-mono text-rose-300 font-bold">{item.kriDetails.triggerThreshold}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Current Level:</span>
                      <div className="font-mono text-emerald-400 font-bold">{item.kriDetails.currentLevel}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-rose-500/20 text-[11px]">
                    <strong className="text-rose-300">Mitigation Action Plan:</strong>
                    <p className="text-slate-300 mt-0.5">{item.kriDetails.mitigationPlan}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Card Footer Actions */}
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="text-slate-400 text-[11px]">
                Owner: <strong className="text-slate-200">{item.ownerRole}</strong>
              </div>
              <button
                onClick={() => onInspect(item)}
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
              >
                Inspect Governance <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
