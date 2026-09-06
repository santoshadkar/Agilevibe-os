'use client';

import React from 'react';
import { LeaveRequest, AIAnomaly, UserRole } from '../../types/hrms';
import { AlertTriangle, Clock, CheckCircle2, ShieldAlert, ArrowRight, X, Check } from 'lucide-react';

interface PendingActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  pendingLeaves: LeaveRequest[];
  anomalies: AIAnomaly[];
  currentRole: UserRole;
  onApproveLeave: (leaveId: string) => void;
  onResolveAnomaly: (anomalyId: string) => void;
}

export const PendingActionModal: React.FC<PendingActionModalProps> = ({
  isOpen,
  onClose,
  pendingLeaves,
  anomalies,
  currentRole,
  onApproveLeave,
  onResolveAnomaly
}) => {
  if (!isOpen) return null;

  const totalPending = pendingLeaves.length + anomalies.length;
  if (totalPending === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-2xl glass-modal p-6 border border-amber-500/40 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-500/30 pb-3">
          <div className="flex items-center gap-2 text-amber-400">
            <AlertTriangle className="h-5 w-5 animate-bounce" />
            <h3 className="text-sm font-bold text-white">Pending Action Required ({totalPending} Items)</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Message Banner */}
        <div className="rounded-xl bg-amber-950/40 p-3.5 border border-amber-800/40 text-xs text-amber-200 leading-relaxed">
          <p className="font-bold text-amber-300">Action Required for {currentRole === 'HR_ADMIN' ? 'HR Administrator' : 'Plant Supervisor'}:</p>
          <p className="mt-0.5">
            You have unapproved leave applications and unverified attendance/payroll records requiring your sign-off before shift lock.
          </p>
        </div>

        {/* Pending Items List */}
        <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
          
          {/* Pending Leaves */}
          {pendingLeaves.map(lve => (
            <div key={lve.id} className="rounded-xl bg-gray-900/90 p-3.5 border border-gray-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-purple-950 px-2 py-0.5 text-[10px] font-bold text-purple-300 border border-purple-800">
                  PENDING LEAVE APPROVAL
                </span>
                <span className="text-[10px] text-gray-400">Applied: {lve.appliedOn}</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">{lve.employeeName} ({lve.empCode})</p>
                <p className="text-[11px] text-gray-300 mt-0.5">{lve.leaveType} Leave ({lve.days} Days): "{lve.reason}"</p>
              </div>
              <div className="flex justify-end pt-1">
                <button
                  onClick={() => onApproveLeave(lve.id)}
                  className="rounded-lg bg-emerald-600 px-3 py-1 text-xs font-bold text-white hover:bg-emerald-500 transition flex items-center gap-1"
                >
                  <Check className="h-3.5 w-3.5" /> Approve Leave
                </button>
              </div>
            </div>
          ))}

          {/* Pending Anomalies / Attendance Approvals */}
          {anomalies.map(anom => (
            <div key={anom.id} className="rounded-xl bg-gray-900/90 p-3.5 border border-amber-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-amber-950 px-2 py-0.5 text-[10px] font-bold text-amber-400 border border-amber-800">
                  {anom.type}
                </span>
                <span className="text-[10px] text-rose-400 font-semibold">{anom.severity} SEVERITY</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">{anom.employeeName} ({anom.empCode})</p>
                <p className="text-[11px] text-gray-300 mt-0.5">{anom.description}</p>
              </div>
              <div className="flex justify-end pt-1">
                <button
                  onClick={() => onResolveAnomaly(anom.id)}
                  className="rounded-lg bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition flex items-center gap-1"
                >
                  <Check className="h-3.5 w-3.5" /> Verify & Resolve Record
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-2 flex justify-end gap-2 border-t border-gray-800">
          <button
            onClick={onClose}
            className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
          >
            Remind Me Later
          </button>
        </div>
      </div>
    </div>
  );
};
