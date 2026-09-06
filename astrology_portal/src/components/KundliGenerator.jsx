import React, { useState } from 'react';
import { calculateHoroscope } from '../utils/astroEngine';
import { CITIES_DATABASE } from '../utils/citiesData';
import { RASHI_LIST } from '../utils/rashiData';
import CitySelector from './CitySelector';
import DiamondKundliChart from './DiamondKundliChart';
import { Sparkles, Calendar, Clock, MapPin, User, ShieldAlert, Award, Compass, Moon, Sun, Star } from 'lucide-react';

export default function KundliGenerator({ onGenerateReport }) {
  const [formData, setFormData] = useState({
    name: 'Aarav Sharma',
    gender: 'Male',
    dob: '1996-08-15',
    tob: '08:30',
    selectedCity: CITIES_DATABASE[0].name,
    lat: CITIES_DATABASE[0].lat,
    lng: CITIES_DATABASE[0].lng,
    knownMoonRashiId: 'auto'
  });

  const [activeTab, setActiveTab] = useState('chart'); // 'chart', 'planets', 'dasha', 'manglik'
  const [chartResult, setChartResult] = useState(() => calculateHoroscope({
    name: 'Aarav Sharma',
    gender: 'Male',
    dob: '1996-08-15',
    tob: '08:30',
    city: CITIES_DATABASE[0].name,
    lat: CITIES_DATABASE[0].lat,
    lng: CITIES_DATABASE[0].lng,
    knownMoonRashiId: 'auto'
  }));

  const handleSelectCity = (cityObj) => {
    setFormData(prev => ({
      ...prev,
      selectedCity: cityObj.name,
      lat: cityObj.lat,
      lng: cityObj.lng
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateHoroscope({
      name: formData.name,
      gender: formData.gender,
      dob: formData.dob,
      tob: formData.tob,
      city: formData.selectedCity,
      lat: formData.lat,
      lng: formData.lng,
      knownMoonRashiId: formData.knownMoonRashiId
    });
    setChartResult(result);
    if (onGenerateReport) {
      onGenerateReport(result);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Top Banner / Hero Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Janam Kundli & Vedic Natal Chart
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-cinzel tracking-wide">
          Generate Your <span className="bg-gradient-to-r from-amber-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Horoscope & Kundli</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
          Discover your Ascendant (Lagna), Moon Rashi, Nakshatra, 9 Planetary Placements, Vimshottari Dasha, and Manglik status based on Vedic astronomical principles.
        </p>
      </div>

      {/* Main Grid: Form Left, Kundli Output Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Form Panel */}
        <div className="lg:col-span-4 bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/30 shadow-2xl space-y-5">
          <h3 className="text-lg font-bold text-amber-300 font-cinzel flex items-center gap-2 border-b border-purple-500/20 pb-3">
            <User className="w-5 h-5 text-purple-400" /> Enter Birth Details
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Name & Gender */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none transition"
                placeholder="e.g. Aarav Sharma"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none transition"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Non-Binary">Non-Binary</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" /> Date of Birth
                </label>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none transition"
                />
              </div>
            </div>

            {/* Time of Birth & Known Rashi Override */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Time of Birth
                </label>
                <input
                  type="time"
                  required
                  value={formData.tob}
                  onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-lg px-3 py-2.5 text-slate-100 text-sm outline-none transition"
                />
              </div>

              <div>
                <label className="block text-amber-300 font-medium mb-1 flex items-center gap-1">
                  <Moon className="w-3.5 h-3.5 text-amber-400" /> Known Moon Rashi
                </label>
                <select
                  value={formData.knownMoonRashiId}
                  onChange={(e) => setFormData({ ...formData, knownMoonRashiId: e.target.value })}
                  className="w-full bg-slate-950 border border-amber-500/60 focus:border-amber-400 rounded-lg px-2.5 py-2.5 text-amber-300 text-xs font-semibold outline-none transition"
                >
                  <option value="auto">✨ Auto-Calculate</option>
                  {RASHI_LIST.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.symbol} {r.vedicName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* City Selector */}
            <CitySelector
              selectedCity={formData.selectedCity}
              onSelectCity={handleSelectCity}
              label="Place of Birth (City/State/Town)"
            />

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-gradient-to-r from-purple-600 via-amber-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-slate-950 font-bold font-cinzel rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform active:scale-95 text-sm flex items-center justify-center gap-2 mt-4"
            >
              <Sparkles className="w-4 h-4 text-slate-950" /> Calculate Kundli & Horoscope
            </button>
          </form>
        </div>

        {/* Kundli Results View Right */}
        <div className="lg:col-span-8 space-y-6">
          {/* Horoscope Key Highlights Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-900/80 backdrop-blur border border-purple-500/30 p-4 rounded-xl text-center space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Lagna (Ascendant)</span>
              <span className="text-lg font-bold text-amber-300 font-cinzel block">
                {chartResult.lagnaRashi.vedicName.split(" ")[0]}
              </span>
              <span className="text-[10px] text-slate-400 block">{chartResult.lagnaRashi.symbol} {chartResult.lagnaRashi.element}</span>
            </div>

            <div className="bg-slate-900/80 backdrop-blur border border-purple-500/30 p-4 rounded-xl text-center space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Moon Rashi</span>
              <span className="text-lg font-bold text-cyan-300 font-cinzel block">
                {chartResult.moonRashi.vedicName.split(" ")[0]}
              </span>
              <span className="text-[10px] text-slate-400 block">Lord: {chartResult.moonRashi.ruler}</span>
            </div>

            <div className="bg-slate-900/80 backdrop-blur border border-purple-500/30 p-4 rounded-xl text-center space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Nakshatra</span>
              <span className="text-lg font-bold text-purple-300 font-cinzel block">
                {chartResult.nakshatra.name}
              </span>
              <span className="text-[10px] text-slate-400 block">Pada #{chartResult.pada} ({chartResult.nakshatra.ruler})</span>
            </div>

            <div className="bg-slate-900/80 backdrop-blur border border-purple-500/30 p-4 rounded-xl text-center space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Sun Sign</span>
              <span className="text-lg font-bold text-rose-300 font-cinzel block">
                {chartResult.sunRashi.englishName}
              </span>
              <span className="text-[10px] text-slate-400 block">{chartResult.sunRashi.symbol} Western</span>
            </div>
          </div>

          {/* Navigation Tabs for Chart / Planets / Dasha / Manglik */}
          <div className="flex border-b border-purple-500/20 gap-2 overflow-x-auto pb-1">
            {[
              { id: 'chart', label: 'Vedic Diamond Chart', icon: Sparkles },
              { id: 'planets', label: 'Planetary Table (9 Grahas)', icon: Star },
              { id: 'dasha', label: 'Vimshottari Dasha', icon: Clock },
              { id: 'manglik', label: 'Manglik & Dosha Analysis', icon: ShieldAlert }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-t-xl font-cinzel text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-900/60 text-amber-300 border-t-2 border-amber-400 border-x border-purple-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Views */}
          <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 min-h-[380px]">
            {activeTab === 'chart' && (
              <div className="space-y-6">
                <DiamondKundliChart houseMap={chartResult.houseMap} chartTitle={`${chartResult.personName}'s Lagna Kundli`} />
                
                {/* Element Distribution Pill */}
                <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block font-cinzel">
                    Four Elements Balance
                  </span>
                  <div className="grid grid-cols-4 gap-3 text-center text-xs">
                    <div className="p-2 rounded bg-rose-950/40 border border-rose-800/40 text-rose-300">
                      <strong>🔥 Fire:</strong> {chartResult.elementBalance.Fire || 0} Planets
                    </div>
                    <div className="p-2 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
                      <strong>🌍 Earth:</strong> {chartResult.elementBalance.Earth || 0} Planets
                    </div>
                    <div className="p-2 rounded bg-cyan-950/40 border border-cyan-800/40 text-cyan-300">
                      <strong>💨 Air:</strong> {chartResult.elementBalance.Air || 0} Planets
                    </div>
                    <div className="p-2 rounded bg-blue-950/40 border border-blue-800/40 text-blue-300">
                      <strong>🌊 Water:</strong> {chartResult.elementBalance.Water || 0} Planets
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'planets' && (
              <div className="space-y-4">
                <h4 className="text-amber-300 font-cinzel font-bold text-base mb-2">9 Planetary Positions & Houses</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300 border-collapse">
                    <thead>
                      <tr className="border-b border-purple-500/30 text-amber-400 font-cinzel">
                        <th className="py-2.5 px-3">Planet</th>
                        <th className="py-2.5 px-3">Occupying Rashi</th>
                        <th className="py-2.5 px-3">House #</th>
                        <th className="py-2.5 px-3">Degrees</th>
                        <th className="py-2.5 px-3">Motion</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {chartResult.planetaryPositions.map((p, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40 transition">
                          <td className="py-2.5 px-3 font-semibold text-white flex items-center gap-2">
                            <span style={{ color: p.color }}>{p.symbol}</span> {p.name}
                          </td>
                          <td className="py-2.5 px-3 text-cyan-300 font-medium">
                            {p.rashiName} ({p.englishRashi})
                          </td>
                          <td className="py-2.5 px-3">
                            <span className="px-2 py-0.5 rounded bg-purple-950 border border-purple-700 text-purple-200 font-mono">
                              House #{p.houseNumber}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-mono text-amber-300">{p.degInSign}</td>
                          <td className="py-2.5 px-3">
                            {p.isRetrograde ? (
                              <span className="px-2 py-0.5 rounded text-[10px] bg-rose-950 text-rose-300 border border-rose-800">
                                Retrograde (Vakra)
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800">
                                Direct (Marga)
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'dasha' && (
              <div className="space-y-5 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-amber-400 font-cinzel font-semibold block text-sm">Active Vimshottari Mahadasha</span>
                    <p className="text-slate-400 text-xs mt-0.5">{chartResult.dasha.duration}</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold font-cinzel text-xs">
                    {chartResult.dasha.mahadasha} - {chartResult.dasha.antardasha}
                  </span>
                </div>

                <div className="space-y-3">
                  <h5 className="font-cinzel text-sm font-bold text-white">Vimshottari Dasha Influence Overview</h5>
                  <p className="leading-relaxed text-slate-300">
                    The Vimshottari Dasha system spans 120 planetary years, determined by your birth Nakshatra (<strong>{chartResult.nakshatra.name}</strong> ruled by <strong>{chartResult.nakshatra.ruler}</strong>).
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <strong className="text-amber-300 block mb-1">Major Period (Mahadasha): {chartResult.dasha.mahadasha}</strong>
                      <p className="text-[11px] text-slate-400">Determines the core focus, major career turns, and personal evolution for the current epoch.</p>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <strong className="text-cyan-300 block mb-1">Sub-Period (Antardasha): {chartResult.dasha.antardasha}</strong>
                      <p className="text-[11px] text-slate-400">Brings immediate events, monthly shifts, financial opportunities, and specific emotional developments.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'manglik' && (
              <div className="space-y-5 text-xs text-slate-300">
                <div className={`p-4 rounded-xl border flex items-center justify-between ${
                  chartResult.isManglik ? 'bg-rose-950/40 border-rose-500/40' : 'bg-emerald-950/40 border-emerald-500/40'
                }`}>
                  <div className="space-y-1">
                    <span className="font-cinzel font-bold text-sm block" style={{ color: chartResult.isManglik ? '#f87171' : '#34d399' }}>
                      {chartResult.manglikSeverity}
                    </span>
                    <p className="text-slate-400 text-xs">
                      {chartResult.isManglik
                        ? "Mars (Mangal) is placed in a sensitive house affecting marital harmony."
                        : "Mars is comfortably positioned. No significant Mangal Dosha present."}
                    </p>
                  </div>
                  <ShieldAlert className={`w-8 h-8 ${chartResult.isManglik ? 'text-rose-400' : 'text-emerald-400'}`} />
                </div>

                {chartResult.isManglik && (
                  <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <h5 className="font-cinzel font-bold text-amber-300 text-sm">Recommended Vedic Remedies (Nivaran)</h5>
                    <ul className="list-disc list-inside space-y-1.5 text-slate-300 leading-relaxed">
                      <li>Chant the <strong>Hanuman Chalisa</strong> on Tuesdays to balance Martian energy.</li>
                      <li>Consider wearing an energized <strong>Red Coral (Moonga)</strong> gemstone after consulting a priest.</li>
                      <li>Matchmaking with another Manglik partner cancels the dosha (Mangal Samyam).</li>
                      <li>Perform Hanuman Abhishekam or offer red flowers on Tuesdays.</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
