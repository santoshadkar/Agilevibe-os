import React, { useState } from 'react';
import { X, Award, CheckCircle2, Download, Printer, Sparkles, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ completedCount, totalModules, onClose }) {
  const [userName, setUserName] = useState('Senior Product Manager');
  const percent = Math.round((completedCount / totalModules) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass-panel max-w-2xl w-full rounded-2xl overflow-hidden border border-yellow-500/30 bg-[#0c101c] shadow-2xl my-8">
        {/* Header */}
        <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" />
            <h3 className="font-bold text-sm text-white">AI Product Management Certification</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Certificate Frame */}
        <div className="p-8 text-center bg-gradient-to-b from-[#111827] via-[#0d1220] to-[#141b2d] relative border-8 border-indigo-950/40 m-4 rounded-xl shadow-inner">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-4 left-4 border-t-2 border-l-2 border-yellow-500/40 w-8 h-8" />
          <div className="absolute top-4 right-4 border-t-2 border-r-2 border-yellow-500/40 w-8 h-8" />
          <div className="absolute bottom-4 left-4 border-b-2 border-l-2 border-yellow-500/40 w-8 h-8" />
          <div className="absolute bottom-4 right-4 border-b-2 border-r-2 border-yellow-500/40 w-8 h-8" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Official Certification of Mastery
          </div>

          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-2 uppercase">
            Certified AI Product Manager
          </h1>

          <p className="text-xs text-gray-400 mb-6 font-mono">
            VERIFIED SINGLE SOURCE OF TRUTH CURRICULUM
          </p>

          <p className="text-xs text-gray-300 mb-2">This credential is proudly conferred upon</p>

          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="text-xl lg:text-2xl font-extrabold text-center text-cyan-300 bg-transparent border-b border-cyan-500/40 focus:outline-none focus:border-cyan-400 mb-6 px-4 py-1"
          />

          <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed mb-6">
            For demonstrating advanced competency in AI/ML Architecture, RAG vs Fine-Tuning Decision Engineering, Non-Deterministic PRD Specs, Token ROI Modeling, and Continuous Evals Engineering.
          </p>

          {/* Badges & Credential Stats */}
          <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto p-3 rounded-xl bg-white/5 border border-white/10 text-center mb-6">
            <div>
              <div className="text-[10px] text-gray-400 uppercase font-bold">Modules</div>
              <div className="text-sm font-bold text-white">{completedCount} / {totalModules}</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 uppercase font-bold">Mastery</div>
              <div className="text-sm font-bold text-emerald-400">{percent}%</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 uppercase font-bold">Issued</div>
              <div className="text-sm font-bold text-indigo-300">2026</div>
            </div>
          </div>

          {/* Verification Stamp */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>Vibe Coding Verified AI Product Management Credentials</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="p-4 px-6 border-t border-white/10 flex items-center justify-between bg-white/5">
          <span className="text-xs text-gray-400">Click name above to customize before printing</span>

          <div className="flex items-center gap-3">
            <button onClick={handlePrint} className="btn-secondary text-xs py-2 px-3">
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>

            <button onClick={onClose} className="btn-primary text-xs py-2 px-4">
              <span>Done</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
