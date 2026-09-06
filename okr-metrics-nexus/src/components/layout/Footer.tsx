import React from 'react';
import { Target, Layers, Shield, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-slate-950/60 py-8 px-4 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-slate-200">Enterprise OKRs, KPIs, KRAs & KRIs Nexus</span>
          <span className="text-slate-600">|</span>
          <span>Dedicated Vibe Portal</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1 text-slate-400">
            <Layers className="w-3.5 h-3.5 text-purple-400" /> 8 Enterprise Roles
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" /> Governance Cadences
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Real-Time Telemetry
          </span>
        </div>

        <div className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} Enterprise Agile & AI Leadership Operations
        </div>
      </div>
    </footer>
  );
};
