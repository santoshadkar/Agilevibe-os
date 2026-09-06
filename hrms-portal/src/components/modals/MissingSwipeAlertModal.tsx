'use client';

import React, { useState } from 'react';
import { Employee } from '../../types/hrms';
import { ShieldAlert, Clock, CheckCircle, X, Send, AlertTriangle } from 'lucide-react';

interface MissingSwipeAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: Employee;
  onPunchInNow: (employeeId: string) => void;
  onSubmitRegularization: (reason: string) => void;
}

export const MissingSwipeAlertModal: React.FC<MissingSwipeAlertModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onPunchInNow,
  onSubmitRegularization
}) => {
  const [showRegForm, setShowRegForm] = useState(false);
  const [reasonInput, setReasonInput] = useState('Biometric Card Reader malfunction at Gate 1');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handlePunchClick = () => {
    onPunchInNow(currentUser.id);
    onClose();
  };

  const handleRegularizationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitRegularization(reasonInput);
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-rose-500/40 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-rose-500/30 pb-3">
          <div className="flex items-center gap-2 text-rose-400">
            <ShieldAlert className="h-6 w-6 animate-pulse" />
            <h3 className="text-sm font-bold text-white">Attendance Swipe Not Captured Alert</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <div className="space-y-4 text-xs">
            <div className="rounded-xl bg-rose-950/40 p-4 border border-rose-800/40 text-rose-200 leading-relaxed space-y-1">
              <p className="font-bold text-white">Attention {currentUser.name} ({currentUser.empCode}):</p>
              <p>
                Your attendance swipe-in for today (<strong>August 29, 2026</strong>) has <strong>not been captured</strong> by the plant gate card reader.
              </p>
              <p className="text-[11px] text-rose-300 font-semibold pt-1">
                Shift Schedule: {currentUser.shift} ({currentUser.department})
              </p>
            </div>

            {!showRegForm ? (
              <div className="space-y-2">
                <p className="text-gray-300 font-semibold">Please choose an action below:</p>
                
                {/* Action Option 1: Punch In Now */}
                <button
                  onClick={handlePunchClick}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-700/50 hover:bg-emerald-900/80 transition text-left group"
                >
                  <div>
                    <p className="font-bold text-white flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-emerald-400" />
                      <span>1. Punch In Now (Web Kiosk Terminal)</span>
                    </p>
                    <p className="text-[11px] text-emerald-300 mt-0.5">Record immediate check-in time for today's shift</p>
                  </div>
                  <span className="rounded-lg bg-emerald-600 px-3 py-1 text-[11px] font-bold text-white shadow">
                    Punch In
                  </span>
                </button>

                {/* Action Option 2: Submit Regularization Request */}
                <button
                  onClick={() => setShowRegForm(true)}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-purple-950/80 border border-purple-700/50 hover:bg-purple-900/80 transition text-left group"
                >
                  <div>
                    <p className="font-bold text-white flex items-center gap-1.5">
                      <Send className="h-4 w-4 text-purple-400" />
                      <span>2. Request Swipe Regularisation</span>
                    </p>
                    <p className="text-[11px] text-purple-300 mt-0.5">Submit request for forgotten card or reader error for supervisor sign-off</p>
                  </div>
                  <span className="rounded-lg bg-purple-600 px-3 py-1 text-[11px] font-bold text-white shadow">
                    Regularise
                  </span>
                </button>
              </div>
            ) : (
              /* Regularization Request Form */
              <form onSubmit={handleRegularizationSubmit} className="space-y-3">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Reason for Missing Swipe-In</label>
                  <select
                    value={reasonInput}
                    onChange={(e) => setReasonInput(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none mb-2"
                  >
                    <option value="Biometric Card Reader malfunction at Gate 1">Biometric Card Reader malfunction at Gate 1</option>
                    <option value="Forgot RFID Badge / Card at home">Forgot RFID Badge / Card at home</option>
                    <option value="On Plant Emergency Call-Out">On Plant Emergency Call-Out</option>
                  </select>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowRegForm(false)}
                    className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-purple-500/20 hover:bg-purple-500 transition"
                  >
                    Submit Request to Supervisor
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="py-6 text-center space-y-2">
            <CheckCircle className="h-10 w-10 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-sm font-bold text-white">Regularisation Request Submitted!</h4>
            <p className="text-xs text-gray-300">Sent to Plant Supervisor for approval.</p>
          </div>
        )}
      </div>
    </div>
  );
};
