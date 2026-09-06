import React from 'react';
import { ShieldAlert, Check, X, Terminal, AlertTriangle } from 'lucide-react';

export default function HITLQueue({ pendingApprovals = [], onProcessApproval }) {
  return (
    <div className="glass-panel p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" /> Human-in-the-Loop (HITL) Security Queue
          </h2>
          <p className="text-xs text-slate-400 font-mono">Guarded approval node intercepting high-risk tool actions prior to execution</p>
        </div>
        <span className="badge badge-amber font-mono">
          {pendingApprovals.length} Pending Approval{pendingApprovals.length !== 1 ? 's' : ''}
        </span>
      </div>

      {pendingApprovals.length === 0 ? (
        <div className="p-12 text-center glass-card rounded-2xl space-y-3">
          <Check className="w-10 h-10 text-emerald-400 mx-auto" />
          <h3 className="text-base font-semibold text-slate-200">No Pending Approvals</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            All agent operations are running within low-risk parameters or have already been reviewed.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {pendingApprovals.map((item) => (
            <div
              key={item.approval_id}
              className="glass-card p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-4 shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-100 font-mono text-sm">{item.tool_name}</h3>
                      <span className="badge badge-rose text-[10px]">RISK: {item.risk_level.toUpperCase()}</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">{item.description}</p>
                  </div>
                </div>

                <span className="text-[10px] text-slate-500 font-mono">{item.timestamp}</span>
              </div>

              {/* Arguments JSON Box */}
              <div className="bg-slate-950/80 p-3 rounded-xl border border-white/10 font-mono text-xs text-slate-300 space-y-1">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Proposed Parameters:</div>
                <pre className="text-cyan-300 overflow-x-auto">{JSON.stringify(item.arguments, null, 2)}</pre>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => onProcessApproval(item.approval_id, 'rejected')}
                  className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-semibold hover:bg-rose-500/30 transition-all flex items-center gap-1.5"
                >
                  <X className="w-4 h-4" /> Reject Action
                </button>
                <button
                  onClick={() => onProcessApproval(item.approval_id, 'approved')}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs shadow-lg hover:opacity-90 transition-all flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" /> Approve & Resume Graph
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
