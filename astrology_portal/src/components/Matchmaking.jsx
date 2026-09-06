import React, { useState } from 'react';
import { RASHI_LIST } from '../utils/rashiData';
import { calculateHoroscope } from '../utils/astroEngine';
import { calculateMatchmaking } from '../utils/matchmakingEngine';
import CitySelector from './CitySelector';
import { Sparkles, Heart, HeartHandshake, ShieldCheck, AlertCircle, ChevronDown, ChevronUp, UserCheck, Moon } from 'lucide-react';

export default function Matchmaking() {
  const [partner1, setPartner1] = useState({
    name: 'Aarav',
    dob: '1996-08-15',
    tob: '08:30',
    city: 'Mumbai, Maharashtra',
    knownMoonRashiId: 'gemini'
  });

  const [partner2, setPartner2] = useState({
    name: 'Ananya',
    dob: '1998-11-22',
    tob: '14:15',
    city: 'Bengaluru, Karnataka',
    knownMoonRashiId: 'sagittarius'
  });

  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (index) => {
    setOpenAccordions(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Perform Kundli & Matchmaking Calculation
  const p1Chart = calculateHoroscope({
    name: partner1.name,
    dob: partner1.dob,
    tob: partner1.tob,
    city: partner1.city,
    knownMoonRashiId: partner1.knownMoonRashiId
  });

  const p2Chart = calculateHoroscope({
    name: partner2.name,
    dob: partner2.dob,
    tob: partner2.tob,
    city: partner2.city,
    knownMoonRashiId: partner2.knownMoonRashiId
  });

  const matchResult = calculateMatchmaking(p1Chart, p2Chart);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-900/40 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wide uppercase">
          <HeartHandshake className="w-3.5 h-3.5 text-rose-400" /> Ashtakoot Matchmaking & Gun Milan
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-cinzel tracking-wide">
          Kundli & Rashi <span className="bg-gradient-to-r from-rose-300 via-purple-300 to-amber-300 bg-clip-text text-transparent">Matchmaking</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
          Calculate the sacred 36 Gunas compatibility between two birth charts, evaluate Manglik alignment, emotional harmony, and marriage stability.
        </p>
      </div>

      {/* Dual Input Form Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Partner 1 Input */}
        <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/30 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
            <h3 className="text-base font-bold text-cyan-300 font-cinzel flex items-center gap-2">
              <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400/20" /> Partner 1 (Groom / Partner A)
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-200 font-mono">
              {p1Chart.moonRashi.vedicName.split(" ")[0]}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Name</label>
              <input
                type="text"
                value={partner1.name}
                onChange={(e) => setPartner1({ ...partner1, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-lg px-3 py-2 text-slate-100 text-sm outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={partner1.dob}
                  onChange={(e) => setPartner1({ ...partner1, dob: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-lg px-3 py-2 text-slate-100 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Time of Birth</label>
                <input
                  type="time"
                  value={partner1.tob}
                  onChange={(e) => setPartner1({ ...partner1, tob: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-lg px-3 py-2 text-slate-100 text-xs outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-amber-300 font-medium mb-1 flex items-center gap-1">
                <Moon className="w-3.5 h-3.5 text-amber-400" /> Known Moon Rashi (Rashi Override)
              </label>
              <select
                value={partner1.knownMoonRashiId}
                onChange={(e) => setPartner1({ ...partner1, knownMoonRashiId: e.target.value })}
                className="w-full bg-slate-950 border border-amber-500/60 focus:border-amber-400 rounded-lg px-2.5 py-2 text-amber-300 font-semibold outline-none"
              >
                <option value="auto">✨ Auto-Calculate</option>
                {RASHI_LIST.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.symbol} {r.vedicName}
                  </option>
                ))}
              </select>
            </div>

            <CitySelector
              selectedCity={partner1.city}
              onSelectCity={(c) => setPartner1({ ...partner1, city: c.name })}
              label="Place of Birth (City/State)"
            />
          </div>
        </div>

        {/* Partner 2 Input */}
        <div className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-rose-500/30 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-3">
            <h3 className="text-base font-bold text-rose-300 font-cinzel flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400/20" /> Partner 2 (Bride / Partner B)
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-950 border border-rose-700 text-rose-200 font-mono">
              {p2Chart.moonRashi.vedicName.split(" ")[0]}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Name</label>
              <input
                type="text"
                value={partner2.name}
                onChange={(e) => setPartner2({ ...partner2, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 focus:border-rose-400 rounded-lg px-3 py-2 text-slate-100 text-sm outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={partner2.dob}
                  onChange={(e) => setPartner2({ ...partner2, dob: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-rose-400 rounded-lg px-3 py-2 text-slate-100 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Time of Birth</label>
                <input
                  type="time"
                  value={partner2.tob}
                  onChange={(e) => setPartner2({ ...partner2, tob: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-rose-400 rounded-lg px-3 py-2 text-slate-100 text-xs outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-amber-300 font-medium mb-1 flex items-center gap-1">
                <Moon className="w-3.5 h-3.5 text-amber-400" /> Known Moon Rashi (Rashi Override)
              </label>
              <select
                value={partner2.knownMoonRashiId}
                onChange={(e) => setPartner2({ ...partner2, knownMoonRashiId: e.target.value })}
                className="w-full bg-slate-950 border border-amber-500/60 focus:border-amber-400 rounded-lg px-2.5 py-2 text-amber-300 font-semibold outline-none"
              >
                <option value="auto">✨ Auto-Calculate</option>
                {RASHI_LIST.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.symbol} {r.vedicName}
                  </option>
                ))}
              </select>
            </div>

            <CitySelector
              selectedCity={partner2.city}
              onSelectCity={(c) => setPartner2({ ...partner2, city: c.name })}
              label="Place of Birth (City/State)"
            />
          </div>
        </div>
      </div>

      {/* Gun Milan Score Board */}
      <div className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-purple-500/20 pb-6">
          {/* Circular Score Visual Gauge */}
          <div className="relative w-44 h-44 flex items-center justify-center flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" stroke="rgba(147, 51, 234, 0.2)" strokeWidth="10" fill="transparent" />
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="url(#scoreGradient)"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="264"
                strokeDashoffset={264 - (264 * matchResult.matchPercentage) / 100}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-extrabold text-white font-cinzel tracking-tight">
                {matchResult.totalPoints}
              </span>
              <span className="text-xs text-amber-400 font-semibold uppercase">out of 36 Gunas</span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5">{matchResult.matchPercentage}% Match</span>
            </div>
          </div>

          {/* Verdict Text & Compatibility Overview */}
          <div className="space-y-3 flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs">
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-300 font-semibold">{partner1.name}</span>
              <span className="text-slate-500">&amp;</span>
              <span className="text-slate-300 font-semibold">{partner2.name}</span>
            </div>

            <h3 className={`text-2xl font-bold font-cinzel ${matchResult.statusClass}`}>
              {matchResult.status}
            </h3>

            <p className="text-slate-300 text-xs leading-relaxed max-w-xl">
              {matchResult.summary}
            </p>

            <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-purple-200 leading-relaxed flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 block mb-0.5">Manglik & Astrological Harmony:</strong>
                {matchResult.manglikSummary}
              </div>
            </div>
          </div>
        </div>

        {/* 8 Kootas Breakdown Grid Accordion */}
        <div className="space-y-4">
          <h4 className="text-amber-300 font-cinzel font-bold text-base flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" /> Detailed 8 Ashtakoot Guna Breakdown
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {matchResult.breakdown.map((item, idx) => {
              const isOpen = openAccordions[idx];
              const scorePct = (item.score / item.max) * 100;
              const isFullScore = item.score === item.max;

              return (
                <div
                  key={idx}
                  className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 hover:border-purple-500/40 transition duration-200 space-y-2"
                >
                  <div
                    onClick={() => toggleAccordion(idx)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-white font-cinzel block">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-slate-400">{item.desc}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono ${
                        isFullScore
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : item.score > 0
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-rose-950 text-rose-300 border border-rose-800'
                      }`}>
                        {item.score} / {item.max} Pts
                      </span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isFullScore ? 'bg-emerald-400' : item.score > 0 ? 'bg-amber-400' : 'bg-rose-500'
                      }`}
                      style={{ width: `${scorePct}%` }}
                    />
                  </div>

                  {isOpen && (
                    <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-900 mt-2 leading-relaxed">
                      {idx === 0 && "Calculates alignment in social role, spiritual outlook, and professional ego."}
                      {idx === 1 && "Measures magnetic attraction, mutual influence, and emotional control."}
                      {idx === 2 && "Evaluates mutual destiny, longevity, health sync, and luck factor."}
                      {idx === 3 && "Measures physical affection, passion, and instinctual animal compatibility (Yoni)."}
                      {idx === 4 && "Determines intellectual friendship and communication between planetary lords."}
                      {idx === 5 && "Evaluates mental temperament (Deva = divine, Manushya = human, Rakshasa = fiery)."}
                      {idx === 6 && "Crucial for financial prosperity, mutual love growth, and emotional intimacy."}
                      {idx === 7 && "Highest point value (8 pts). Assesses genetic health, nervous system, and progeny blessings."}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
