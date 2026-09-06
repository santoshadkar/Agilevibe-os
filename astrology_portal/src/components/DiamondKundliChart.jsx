import React, { useState } from 'react';
import { Sparkles, Info } from 'lucide-react';

export default function DiamondKundliChart({ houseMap, chartTitle = "Lagna Kundli (Birth Chart)" }) {
  const [selectedHouse, setSelectedHouse] = useState(1);

  // Default fallback house map if missing
  if (!houseMap) return null;

  // House Coordinates & SVG Path definitions for a 400x400 SVG grid
  const housePaths = [
    { id: 1, name: "1st House (Lagna - Self & Vitality)", d: "M 200,20 L 290,110 L 200,200 L 110,110 Z", labelX: 200, labelY: 100 },
    { id: 2, name: "2nd House (Dhana - Wealth & Speech)", d: "M 110,110 L 200,20 L 20,20 Z", labelX: 110, labelY: 50 },
    { id: 3, name: "3rd House (Sahaja - Courage & Siblings)", d: "M 20,20 L 110,110 L 20,200 Z", labelX: 50, labelY: 110 },
    { id: 4, name: "4th House (Matru - Mother & Assets)", d: "M 20,200 L 110,110 L 200,200 L 110,290 Z", labelX: 100, labelY: 200 },
    { id: 5, name: "5th House (Putra - Intelligence & Children)", d: "M 20,200 L 110,290 L 20,380 Z", labelX: 50, labelY: 290 },
    { id: 6, name: "6th House (Ari - Enemies & Health)", d: "M 20,380 L 110,290 L 200,380 Z", labelX: 110, labelY: 350 },
    { id: 7, name: "7th House (Kalatra - Marriage & Spouse)", d: "M 200,200 L 290,290 L 200,380 L 110,290 Z", labelX: 200, labelY: 300 },
    { id: 8, name: "8th House (Ayur - Longevity & Mysticism)", d: "M 200,380 L 290,290 L 380,380 Z", labelX: 290, labelY: 350 },
    { id: 9, name: "9th House (Bhagya - Higher Wisdom & Luck)", d: "M 380,380 L 290,290 L 380,200 Z", labelX: 350, labelY: 290 },
    { id: 10, name: "10th House (Karma - Career & Reputation)", d: "M 200,200 L 290,110 L 380,200 L 290,290 Z", labelX: 300, labelY: 200 },
    { id: 11, name: "11th House (Labha - Gains & Desires)", d: "M 380,200 L 290,110 L 380,20 Z", labelX: 350, labelY: 110 },
    { id: 12, name: "12th House (Vyaya - Moksha & Foreign Travel)", d: "M 380,20 L 290,110 L 200,20 Z", labelX: 290, labelY: 50 }
  ];

  const currentHouseInfo = houseMap[selectedHouse] || { rashi: { vedicName: "Mesha", englishName: "Aries", ruler: "Mars" }, planets: [] };
  const currentPlanets = Array.isArray(currentHouseInfo.planets) ? currentHouseInfo.planets : [];

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl">
      {/* SVG Kundli Chart */}
      <div className="relative w-full max-w-[420px] aspect-square flex flex-col items-center justify-center">
        <h4 className="text-amber-300 font-cinzel text-lg tracking-wider mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          {chartTitle}
        </h4>

        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          {/* Outer Border */}
          <rect x="20" y="20" width="360" height="360" fill="none" stroke="#a855f7" strokeWidth="2.5" className="opacity-80" />
          
          {/* Inner Diagonals */}
          <line x1="20" y1="20" x2="380" y2="380" stroke="#a855f7" strokeWidth="1.5" opacity="0.4" />
          <line x1="380" y1="20" x2="20" y2="380" stroke="#a855f7" strokeWidth="1.5" opacity="0.4" />

          {/* Inner Diamond */}
          <polygon points="200,20 380,200 200,380 20,200" fill="none" stroke="#ffd700" strokeWidth="2" opacity="0.9" />

          {/* Render 12 Houses */}
          {housePaths.map((hp) => {
            const houseData = houseMap[hp.id] || { rashi: { id: "aries", vedicName: "Mesha" }, planets: [] };
            const isSelected = selectedHouse === hp.id;
            const planets = Array.isArray(houseData.planets) ? houseData.planets : [];
            const hasPlanets = planets.length > 0;
            const rashiName = houseData?.rashi?.vedicName || "Mesha";

            return (
              <g
                key={hp.id}
                onClick={() => setSelectedHouse(hp.id)}
                className="cursor-pointer transition-all duration-300 hover:opacity-90"
              >
                {/* Polygon Path */}
                <path
                  d={hp.d}
                  fill={isSelected ? "rgba(168, 85, 247, 0.25)" : hasPlanets ? "rgba(234, 179, 8, 0.12)" : "rgba(15, 23, 42, 0.4)"}
                  stroke={isSelected ? "#ffd700" : "#a855f7"}
                  strokeWidth={isSelected ? "2.5" : "1"}
                  strokeDasharray={isSelected ? "none" : "2,2"}
                />

                {/* House Rashi Number Badge */}
                <text
                  x={hp.labelX}
                  y={hp.labelY - 12}
                  fill="#f59e0b"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="font-cinzel select-none drop-shadow"
                >
                  {rashiName.split(" ")[0]}
                </text>

                {/* House Number Indicator */}
                <text
                  x={hp.labelX}
                  y={hp.labelY + 2}
                  fill="#94a3b8"
                  fontSize="10"
                  textAnchor="middle"
                  className="select-none opacity-80"
                >
                  H{hp.id}
                </text>

                {/* Placed Planets Labels */}
                {planets.map((pl, idx) => (
                  <text
                    key={idx}
                    x={hp.labelX}
                    y={hp.labelY + 16 + idx * 11}
                    fill={pl.color || "#60a5fa"}
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="select-none font-mono drop-shadow-[0_0_4px_rgba(0,0,0,0.9)]"
                  >
                    {(pl.name || "Planet").split(" ")[0]} {pl.symbol || ""}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>

        <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
          <Info className="w-3 h-3 text-purple-400" /> Click on any house to inspect occupants & lord details
        </p>
      </div>

      {/* Selected House Details Panel */}
      <div className="w-full lg:w-72 bg-slate-950/80 p-5 rounded-xl border border-purple-500/30 text-slate-200">
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-cinzel">
            House Details
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-900/60 text-purple-200 border border-purple-500/40">
            House #{selectedHouse}
          </span>
        </div>

        <h5 className="font-cinzel text-lg text-white font-bold mb-1">
          {housePaths[selectedHouse - 1].name.split("(")[1]?.replace(")", "") || "Bhava"}
        </h5>
        
        <div className="space-y-3 mt-4 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">Occupying Rashi / Sign:</span>
            <span className="text-amber-300 font-semibold text-sm">
              {currentHouseInfo?.rashi?.vedicName || "Mesha"} ({currentHouseInfo?.rashi?.englishName || "Aries"})
            </span>
          </div>

          <div>
            <span className="text-slate-400 block mb-0.5">Ruling Lord Planet:</span>
            <span className="text-cyan-300 font-semibold">
              {currentHouseInfo?.rashi?.ruler || "Mars"}
            </span>
          </div>

          <div>
            <span className="text-slate-400 block mb-1">Planetary Occupants ({currentPlanets.length}):</span>
            {currentPlanets.length === 0 ? (
              <p className="text-slate-500 italic">No direct planet in this house. Influenced by house lord {currentHouseInfo?.rashi?.ruler || "Mars"}.</p>
            ) : (
              <div className="space-y-1.5">
                {currentPlanets.map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="font-bold text-slate-100 flex items-center gap-1.5">
                      <span style={{ color: p.color }}>{p.symbol}</span> {p.name}
                    </span>
                    <span className="text-amber-400 font-mono text-[11px]">{p.degInSign}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Signification:</strong> {
              selectedHouse === 1 ? "Physical constitution, aura, leadership, and personal direction." :
              selectedHouse === 2 ? "Finances, family legacy, speech, investments, and assets." :
              selectedHouse === 3 ? "Courage, initiative, younger siblings, and communication." :
              selectedHouse === 4 ? "Mother, emotional peace, home, real estate, and vehicle blessings." :
              selectedHouse === 5 ? "Intellect, creativity, children, mantra siddhi, and past karmic luck." :
              selectedHouse === 6 ? "Daily work, overcoming competitors, vitality, and health balance." :
              selectedHouse === 7 ? "Spouse, long-term partnerships, public connections, and contracts." :
              selectedHouse === 8 ? "Transformation, longevity, intuition, joint finances, and deep research." :
              selectedHouse === 9 ? "Dharma, spiritual wisdom, father figure, luck, and long journeys." :
              selectedHouse === 10 ? "Career, executive status, authority, public reputation, and karma." :
              selectedHouse === 11 ? "Accumulated profits, network circles, social influence, and desire fulfillment." :
              "Foreign travels, spiritual liberation (Moksha), sleep quality, and subconscious mind."
            }
          </div>
        </div>
      </div>
    </div>
  );
}
