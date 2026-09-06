import React from 'react';
import { Printer, X, Sparkles, ShieldCheck, Star, Award } from 'lucide-react';

export default function ReportModal({ chartData, onClose }) {
  if (!chartData) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-purple-500/40 rounded-3xl p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto text-slate-200 print:text-black print:bg-white print:border-none print:shadow-none print:max-h-none print:static">
        {/* Action Header */}
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-4 print:hidden">
          <h3 className="text-xl font-bold text-amber-300 font-cinzel flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" /> Print / Export Astro Report
          </h3>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-amber-400 text-slate-950 font-bold text-xs font-cinzel rounded-xl hover:bg-amber-300 transition flex items-center gap-1.5 shadow"
            >
              <Printer className="w-4 h-4" /> Print Kundli PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-rose-950 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="space-y-6 print:space-y-4">
          <div className="text-center space-y-1 border-b pb-4 border-slate-800">
            <h2 className="text-2xl font-extrabold text-white print:text-black font-cinzel">
              ASTROCELESTIAL VEDIC HOROSCOPE
            </h2>
            <p className="text-xs text-amber-300 print:text-slate-700">Official Janam Kundli & Planetary Report</p>
          </div>

          {/* Personal & Birth Info Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800 print:border-slate-300 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Full Name</span>
              <strong className="text-white print:text-black text-sm">{chartData.personName}</strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Date of Birth</span>
              <strong className="text-amber-300 print:text-slate-900">{chartData.dob}</strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Time of Birth</span>
              <strong className="text-cyan-300 print:text-slate-900">{chartData.tob}</strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Place of Birth</span>
              <strong className="text-purple-300 print:text-slate-900">{chartData.city}</strong>
            </div>
          </div>

          {/* Key Astro Signs */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-0.5">Ascendant (Lagna)</span>
              <strong className="text-amber-400 text-sm font-cinzel">{chartData.lagnaRashi.vedicName}</strong>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-0.5">Moon Sign (Rashi)</span>
              <strong className="text-cyan-400 text-sm font-cinzel">{chartData.moonRashi.vedicName}</strong>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-0.5">Birth Nakshatra</span>
              <strong className="text-purple-400 text-sm font-cinzel">{chartData.nakshatra.name} (Pada #{chartData.pada})</strong>
            </div>
          </div>

          {/* Planetary Placements Table */}
          <div className="space-y-2">
            <h4 className="font-cinzel text-xs font-bold text-amber-300 uppercase tracking-wider">Planetary Placements</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2">Planet</th>
                    <th className="py-2">Sign</th>
                    <th className="py-2">House</th>
                    <th className="py-2">Degree</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {chartData.planetaryPositions.map((p, idx) => (
                    <tr key={idx}>
                      <td className="py-2 font-semibold text-white print:text-black">{p.name}</td>
                      <td className="py-2 text-cyan-300 print:text-slate-800">{p.rashiName}</td>
                      <td className="py-2 font-mono">House #{p.houseNumber}</td>
                      <td className="py-2 font-mono text-amber-400 print:text-slate-800">{p.degInSign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dasha & Manglik Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
              <strong className="text-amber-300 block mb-1">Current Vimshottari Dasha:</strong>
              <p className="text-slate-300">{chartData.dasha.duration}</p>
            </div>
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
              <strong className="text-rose-300 block mb-1">Mangal Dosha Status:</strong>
              <p className="text-slate-300">{chartData.manglikSeverity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
