import React, { useState, useMemo } from 'react';
import { CITIES_DATABASE } from '../utils/citiesData';
import { MapPin, Search, PlusCircle, Check } from 'lucide-react';

export default function CitySelector({ selectedCity, onSelectCity, label = "Place of Birth" }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [customData, setCustomData] = useState({
    name: '',
    lat: '20.5937',
    lng: '78.9629'
  });

  // Filter cities by search term
  const filteredCities = useMemo(() => {
    if (!searchTerm.trim()) return CITIES_DATABASE;
    const term = searchTerm.toLowerCase();
    return CITIES_DATABASE.filter(c =>
      c.name.toLowerCase().includes(term) ||
      (c.state && c.state.toLowerCase().includes(term)) ||
      (c.country && c.country.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  const handleSelect = (cityObj) => {
    onSelectCity(cityObj);
    setSearchTerm('');
    setIsOpen(false);
    setIsCustomMode(false);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customData.name.trim()) return;
    const customObj = {
      name: `${customData.name} (Custom Location)`,
      lat: parseFloat(customData.lat) || 20.0,
      lng: parseFloat(customData.lng) || 78.0,
      tz: "+05:30"
    };
    onSelectCity(customObj);
    setIsOpen(false);
  };

  return (
    <div className="relative space-y-1 text-xs">
      <label className="block text-slate-300 font-medium flex items-center justify-between">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {label}
        </span>
        <button
          type="button"
          onClick={() => setIsCustomMode(!isCustomMode)}
          className="text-[10px] text-amber-400 hover:underline flex items-center gap-1 font-mono"
        >
          <PlusCircle className="w-3 h-3" /> {isCustomMode ? 'Pick from List' : 'Custom Lat/Lng'}
        </button>
      </label>

      {!isCustomMode ? (
        <div className="relative">
          {/* Main Dropdown Display Trigger */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-slate-950 border border-slate-700 hover:border-amber-400 rounded-lg px-3 py-2.5 text-slate-100 text-xs cursor-pointer flex items-center justify-between transition"
          >
            <span className="truncate text-cyan-300 font-semibold">{selectedCity || 'Select City/State...'}</span>
            <Search className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          </div>

          {/* Dropdown Search Menu */}
          {isOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-slate-900 border border-purple-500/40 rounded-xl shadow-2xl p-2 max-h-64 overflow-y-auto space-y-2">
              <input
                type="text"
                autoFocus
                placeholder="Search city, district, or state (e.g. Jaipur, Patna, Kerala)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-lg px-3 py-2 text-xs text-white outline-none"
              />

              <div className="divide-y divide-slate-800/60 max-h-48 overflow-y-auto pr-1">
                {filteredCities.length === 0 ? (
                  <div className="p-3 text-center text-slate-400 text-xs space-y-1">
                    <p>No exact match found.</p>
                    <button
                      type="button"
                      onClick={() => { setIsCustomMode(true); setCustomData(prev => ({ ...prev, name: searchTerm })); }}
                      className="text-amber-400 underline font-semibold text-[11px]"
                    >
                      Add "{searchTerm}" as Custom Location
                    </button>
                  </div>
                ) : (
                  filteredCities.map((city, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelect(city)}
                      className={`p-2 rounded-lg cursor-pointer hover:bg-purple-950/60 flex items-center justify-between transition text-xs ${
                        selectedCity === city.name ? 'bg-purple-900/40 text-amber-300' : 'text-slate-200'
                      }`}
                    >
                      <div>
                        <span className="font-semibold block">{city.name}</span>
                        <span className="text-[10px] text-slate-400">Lat: {city.lat}°N, Lng: {city.lng}°E</span>
                      </div>
                      {selectedCity === city.name && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Custom Location Mode */
        <div className="bg-slate-950 p-3 rounded-xl border border-amber-500/40 space-y-2 text-xs">
          <input
            type="text"
            placeholder="Town/Village Name"
            value={customData.name}
            onChange={(e) => setCustomData({ ...customData, name: e.target.value })}
            className="w-full bg-slate-900 border border-slate-700 px-2.5 py-1.5 rounded text-white text-xs outline-none"
          />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-[10px] text-slate-400 block">Latitude (°N)</span>
              <input
                type="number"
                step="0.0001"
                value={customData.lat}
                onChange={(e) => setCustomData({ ...customData, lat: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 px-2 py-1 rounded text-amber-300 font-mono text-xs outline-none"
              />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Longitude (°E)</span>
              <input
                type="number"
                step="0.0001"
                value={customData.lng}
                onChange={(e) => setCustomData({ ...customData, lng: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 px-2 py-1 rounded text-cyan-300 font-mono text-xs outline-none"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleCustomSubmit}
            className="w-full py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold font-cinzel rounded text-xs transition"
          >
            Apply Custom Coordinates
          </button>
        </div>
      )}
    </div>
  );
}
