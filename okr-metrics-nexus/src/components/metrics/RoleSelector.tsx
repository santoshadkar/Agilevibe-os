import React from 'react';
import type { EnterpriseRole } from '../../types/metrics';
import { ENTERPRISE_ROLES } from '../../data/metricsData';
import { Cpu, Sparkles, TrainTrack, Terminal, ShieldCheck, Compass, Target, Users } from 'lucide-react';

interface RoleSelectorProps {
  selectedRole: EnterpriseRole | 'all';
  onRoleSelect: (role: EnterpriseRole | 'all') => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({
  selectedRole,
  onRoleSelect
}) => {
  const renderRoleIcon = (iconName: string, className: string = 'w-5 h-5') => {
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

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <Users className="w-4 h-4 text-cyan-400" />
          <span>Select Leadership / Delivery Role Perspective (8 Dedicated Views)</span>
        </h2>
        {selectedRole !== 'all' && (
          <button
            onClick={() => onRoleSelect('all')}
            className="text-xs text-cyan-400 hover:underline font-semibold"
          >
            Show All 8 Roles
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-2.5">
        {/* All Roles Button */}
        <button
          onClick={() => onRoleSelect('all')}
          className={`p-3 rounded-xl border text-left transition-all ${
            selectedRole === 'all'
              ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-cyan-400 text-white shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/40'
              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
          }`}
        >
          <div className="text-xs font-bold">All 8 Roles</div>
          <div className="text-[10px] text-slate-400 mt-1">Enterprise Overview</div>
        </button>

        {ENTERPRISE_ROLES.map((role) => {
          const isSelected = selectedRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => onRoleSelect(role.id)}
              className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group ${
                isSelected
                  ? `bg-gradient-to-b ${role.bgGradient} ${role.borderColor} text-white shadow-lg ring-1 ring-white/20`
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={role.color}>
                  {renderRoleIcon(role.iconName, 'w-4 h-4')}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                )}
              </div>
              <div className="text-xs font-bold mt-2 truncate">{role.shortTitle}</div>
              <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{role.focusArea}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
