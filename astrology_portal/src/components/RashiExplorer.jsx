import React, { useState } from 'react';
import { RASHI_LIST } from '../utils/rashiData';
import { Sparkles, Flame, Mountain, Wind, Droplets, Search, X, Gem, Award, Heart, Briefcase, Activity, ShieldAlert, BookOpen } from 'lucide-react';

export default function RashiExplorer() {
  const [selectedRashi, setSelectedRashi] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [elementFilter, setElementFilter] = useState('All');

  const filteredRashis = RASHI_LIST.filter(r => {
    const matchesSearch = r.vedicName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.ruler.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesElement = elementFilter === 'All' || r.element === elementFilter;
    return matchesSearch && matchesElement;
  });

  const getElementIcon = (element) => {
    switch (element) {
      case 'Fire': return <Flame className="w-3.5 h-3.5 text-rose-400" />;
      case 'Earth': return <Mountain className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Air': return <Wind className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Water': return <Droplets className="w-3.5 h-3.5 text-blue-400" />;
      default: return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Zodiac & Rashi Knowledge Hub
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-cinzel tracking-wide">
          Explore The <span className="bg-gradient-to-r from-amber-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">12 Celestial Signs</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
          Uncover the deep characteristics, ruling planets, gemstones, lucky colors, behavioral traits, love compatibility, and daily affirmations for each Rashi.
        </p>
      </div>

      {/* Controls Bar: Search & Element Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-900/80 backdrop-blur p-4 rounded-2xl border border-purple-500/20 shadow-lg">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search sign, planet, or trait..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 outline-none"
          />
        </div>

        {/* Element Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {['All', 'Fire', 'Earth', 'Air', 'Water'].map((el) => (
            <button
              key={el}
              onClick={() => setElementFilter(el)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-cinzel font-semibold flex items-center gap-1.5 transition ${
                elementFilter === el
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {el !== 'All' && getElementIcon(el)}
              {el}
            </button>
          ))}
        </div>
      </div>

      {/* 12 Rashi Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRashis.map((rashi) => (
          <div
            key={rashi.id}
            onClick={() => setSelectedRashi(rashi)}
            className="group relative bg-slate-900/80 hover:bg-slate-900 backdrop-blur-xl p-5 rounded-2xl border border-purple-500/20 hover:border-amber-400/50 shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-4xl text-amber-300 group-hover:scale-110 transition-transform duration-300 font-serif">
                {rashi.symbol}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-1">
                {getElementIcon(rashi.element)} {rashi.element}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white font-cinzel group-hover:text-amber-300 transition-colors">
                {rashi.vedicName}
              </h3>
              <p className="text-xs text-slate-400 font-medium">{rashi.englishName} ({rashi.dates})</p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Ruler:</span>
                <span className="font-semibold text-cyan-300">{rashi.ruler.split(" ")[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Gemstone:</span>
                <span className="font-semibold text-amber-300">{rashi.gemstone.split("&")[0]}</span>
              </div>
            </div>

            <button className="w-full py-2 px-3 bg-purple-950/60 group-hover:bg-amber-400 group-hover:text-slate-950 text-amber-300 font-cinzel text-xs font-semibold rounded-xl border border-purple-500/30 transition-all duration-300 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> View Rashi Details
            </button>
          </div>
        ))}
      </div>

      {/* Rashi Detail Modal */}
      {selectedRashi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto my-8 text-slate-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedRashi(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-rose-900/60 text-slate-300 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 border-b border-purple-500/20 pb-5">
              <span className="text-6xl text-amber-300 font-serif drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                {selectedRashi.symbol}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel">
                  {selectedRashi.vedicName}
                </h3>
                <p className="text-amber-300 font-semibold text-sm">
                  {selectedRashi.englishName} • {selectedRashi.dates}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs bg-purple-950 border border-purple-700 text-purple-200 flex items-center gap-1">
                    {getElementIcon(selectedRashi.element)} {selectedRashi.element} Element
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs bg-slate-950 border border-slate-800 text-slate-300">
                    {selectedRashi.modality}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Ruling Planet</span>
                <strong className="text-cyan-300 text-sm font-cinzel">{selectedRashi.ruler}</strong>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Lucky Gemstone</span>
                <strong className="text-amber-300 text-sm font-cinzel">{selectedRashi.gemstone}</strong>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Lucky Colors</span>
                <strong className="text-rose-300">{selectedRashi.luckyColors.join(", ")}</strong>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Lucky Numbers</span>
                <strong className="text-emerald-300 font-mono text-sm">{selectedRashi.luckyNumbers.join(", ")}</strong>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="font-cinzel text-base font-bold text-amber-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" /> Core Essence & Overview
              </h4>
              <p className="text-xs leading-relaxed text-slate-300">{selectedRashi.overview}</p>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2 text-xs">
                <strong className="text-emerald-300 font-cinzel block text-sm">Key Strengths & Virtues</strong>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {selectedRashi.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2 text-xs">
                <strong className="text-rose-300 font-cinzel block text-sm">Challenges & Growth Areas</strong>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {selectedRashi.weaknesses.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Behavior in Love, Career, Health */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <strong className="text-rose-400 font-cinzel flex items-center gap-1.5 text-sm">
                  <Heart className="w-4 h-4" /> Love & Relationship Dynamics
                </strong>
                <p className="text-slate-300 leading-relaxed">{selectedRashi.loveBehavior}</p>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <strong className="text-cyan-400 font-cinzel flex items-center gap-1.5 text-sm">
                  <Briefcase className="w-4 h-4" /> Career & Professional Calling
                </strong>
                <p className="text-slate-300 leading-relaxed">{selectedRashi.careerBehavior}</p>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <strong className="text-amber-400 font-cinzel flex items-center gap-1.5 text-sm">
                  <Activity className="w-4 h-4" /> Health & Vitality Focus
                </strong>
                <p className="text-slate-300 leading-relaxed">{selectedRashi.healthFocus}</p>
              </div>
            </div>

            {/* Mantra & Affirmation */}
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 text-center space-y-2">
              <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block font-cinzel">
                Sacred Vedic Mantra
              </span>
              <p className="font-mono text-sm text-cyan-300 font-bold">"{selectedRashi.mantra}"</p>
              <p className="text-xs italic text-purple-200 mt-1">"{selectedRashi.affirmation}"</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
