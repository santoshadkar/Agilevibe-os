import React, { useState } from 'react';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import KundliGenerator from './components/KundliGenerator';
import Matchmaking from './components/Matchmaking';
import RashiExplorer from './components/RashiExplorer';
import FutureTimeline from './components/FutureTimeline';
import DailyCardDraw from './components/DailyCardDraw';
import ReportModal from './components/ReportModal';
import { Sparkles, HeartHandshake, BookOpen, TrendingUp, Star, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('kundli');
  const [reportChartData, setReportChartData] = useState(null);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const handleReportGenerated = (chartData) => {
    setReportChartData(chartData);
  };

  const openReportModal = () => {
    setIsReportOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* Background Canvas Starfield */}
      <Starfield />

      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenReport={openReportModal}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {activeSection === 'kundli' && (
          <KundliGenerator onGenerateReport={handleReportGenerated} />
        )}

        {activeSection === 'matchmaking' && (
          <Matchmaking />
        )}

        {activeSection === 'rashis' && (
          <RashiExplorer />
        )}

        {activeSection === 'predictions' && (
          <FutureTimeline />
        )}

        {activeSection === 'daily' && (
          <DailyCardDraw />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-950/80 border-t border-purple-500/20 py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center gap-2 text-amber-300 font-cinzel font-bold text-sm">
            <Sparkles className="w-4 h-4 text-amber-400" /> AstroCelestial Astrology &amp; Horoscope Portal
          </div>
          <p className="max-w-xl mx-auto text-slate-400 leading-relaxed text-[11px]">
            Engineered with Vedic Jyotish math, Ashtakoot Gun Milan algorithms, and high-precision planetary calculations. Designed for deep self-awareness and spiritual wisdom.
          </p>
          <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-900">
            © 2026 AstroCelestial Portal. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Printable Report Modal */}
      {isReportOpen && (
        <ReportModal
          chartData={reportChartData}
          onClose={() => setIsReportOpen(false)}
        />
      )}
    </div>
  );
}
