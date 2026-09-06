import React from 'react';
import { Sparkles, HeartHandshake, BookOpen, TrendingUp, Star, Printer } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenReport }) {
  const navItems = [
    { id: 'kundli', label: 'Kundli & Horoscope', icon: Sparkles },
    { id: 'matchmaking', label: 'Matchmaking (Gun Milan)', icon: HeartHandshake },
    { id: 'rashis', label: '12 Rashis Hub', icon: BookOpen },
    { id: 'predictions', label: 'Future Predictions', icon: TrendingUp },
    { id: 'daily', label: 'Daily Card Draw', icon: Star }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/70 border-b border-purple-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Brand */}
        <div
          onClick={() => setActiveSection('kundli')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-purple-600 to-indigo-700 p-0.5 shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-amber-300 font-serif text-xl">
              ✨
            </div>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wider text-white font-cinzel group-hover:text-amber-300 transition-colors">
              Astro<span className="bg-gradient-to-r from-amber-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Celestial</span>
            </h1>
            <span className="text-[10px] tracking-widest uppercase text-slate-400 block -mt-1 font-semibold">
              Vedic &amp; Western Astrology Portal
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-2xl border border-purple-500/20 shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-4 py-2 rounded-xl font-cinzel text-xs font-semibold flex items-center gap-2 transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-purple-900/80 to-amber-900/80 text-amber-300 border border-amber-400/40 shadow-lg shadow-amber-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Export / Print Button */}
        <button
          onClick={onOpenReport}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold font-cinzel text-xs shadow-lg hover:shadow-amber-400/25 transition transform active:scale-95"
        >
          <Printer className="w-4 h-4 text-slate-950" /> Print Kundli
        </button>
      </div>

      {/* Mobile Sub-Navigation */}
      <div className="lg:hidden flex border-t border-purple-500/20 overflow-x-auto p-2 gap-1 bg-slate-950/90">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-cinzel font-semibold whitespace-nowrap flex items-center gap-1.5 transition ${
              activeSection === item.id
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <item.icon className="w-3 h-3" />
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
