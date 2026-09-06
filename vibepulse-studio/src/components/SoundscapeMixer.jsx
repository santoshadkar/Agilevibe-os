import React, { useState } from 'react';
import { soundscape } from '../audio/soundscapeEngine';
import { Volume2, VolumeX, CloudRain, Waves, Sparkles, Brain, Flame, Radio } from 'lucide-react';

export default function SoundscapeMixer() {
  const [isMuted, setIsMuted] = useState(false);
  const [masterVol, setMasterVol] = useState(0.8);
  const [activePreset, setActivePreset] = useState('none');

  const [layers, setLayers] = useState({
    rain: { active: false, volume: 0.5 },
    waves: { active: false, volume: 0.4 },
    synth: { active: false, volume: 0.3 },
    binaural: { active: false, type: 'alpha', volume: 0.4 },
    fire: { active: false, volume: 0.4 }
  });

  const toggleLayer = (layerKey) => {
    const updated = !layers[layerKey].active;
    const newLayers = {
      ...layers,
      [layerKey]: { ...layers[layerKey], active: updated }
    };
    setLayers(newLayers);

    // Apply to engine
    applyToEngine(layerKey, updated, newLayers[layerKey].volume, newLayers[layerKey].type);
  };

  const updateVolume = (layerKey, vol) => {
    const newLayers = {
      ...layers,
      [layerKey]: { ...layers[layerKey], volume: vol }
    };
    setLayers(newLayers);
    if (layers[layerKey].active) {
      applyToEngine(layerKey, true, vol, layers[layerKey].type);
    }
  };

  const updateBinauralType = (type) => {
    const newLayers = {
      ...layers,
      binaural: { ...layers.binaural, type }
    };
    setLayers(newLayers);
    if (layers.binaural.active) {
      soundscape.setBinaural(true, type, layers.binaural.volume);
    }
  };

  const applyToEngine = (layerKey, active, vol, subType) => {
    switch (layerKey) {
      case 'rain':
        soundscape.setRain(active, vol);
        break;
      case 'waves':
        soundscape.setWaves(active, vol);
        break;
      case 'synth':
        soundscape.setSynth(active, vol);
        break;
      case 'binaural':
        soundscape.setBinaural(active, subType || 'alpha', vol);
        break;
      case 'fire':
        soundscape.setFire(active, vol);
        break;
      default:
        break;
    }
  };

  const selectPreset = (presetName) => {
    setActivePreset(presetName);
    soundscape.loadPreset(presetName);

    if (presetName === 'cyber_rain') {
      setLayers({
        rain: { active: true, volume: 0.7 },
        waves: { active: false, volume: 0.4 },
        synth: { active: true, volume: 0.4 },
        binaural: { active: false, type: 'alpha', volume: 0.4 },
        fire: { active: false, volume: 0.4 }
      });
    } else if (presetName === 'deep_space') {
      setLayers({
        rain: { active: false, volume: 0.5 },
        waves: { active: false, volume: 0.4 },
        synth: { active: true, volume: 0.6 },
        binaural: { active: true, type: 'gamma', volume: 0.5 },
        fire: { active: false, volume: 0.4 }
      });
    } else if (presetName === 'ocean_breeze') {
      setLayers({
        rain: { active: false, volume: 0.5 },
        waves: { active: true, volume: 0.6 },
        synth: { active: false, volume: 0.3 },
        binaural: { active: true, type: 'alpha', volume: 0.3 },
        fire: { active: false, volume: 0.4 }
      });
    } else if (presetName === 'cozy_campfire') {
      setLayers({
        rain: { active: true, volume: 0.3 },
        waves: { active: false, volume: 0.4 },
        synth: { active: false, volume: 0.3 },
        binaural: { active: false, type: 'alpha', volume: 0.4 },
        fire: { active: true, volume: 0.7 }
      });
    } else if (presetName === 'binaural_flow') {
      setLayers({
        rain: { active: false, volume: 0.5 },
        waves: { active: false, volume: 0.4 },
        synth: { active: true, volume: 0.3 },
        binaural: { active: true, type: 'alpha', volume: 0.6 },
        fire: { active: false, volume: 0.4 }
      });
    } else {
      setLayers({
        rain: { active: false, volume: 0.5 },
        waves: { active: false, volume: 0.4 },
        synth: { active: false, volume: 0.3 },
        binaural: { active: false, type: 'alpha', volume: 0.4 },
        fire: { active: false, volume: 0.4 }
      });
    }
  };

  const handleMasterVolChange = (e) => {
    const val = parseFloat(e.target.value);
    setMasterVol(val);
    soundscape.setMasterVolume(val);
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    soundscape.setMasterVolume(nextMute ? 0 : masterVol);
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide">Soundscape Synthesizer</h2>
            <p className="text-xs text-slate-400">Procedural Web Audio Engine</p>
          </div>
        </div>

        {/* Master Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleMute}
            className={`p-2 rounded-xl border transition-all ${
              isMuted
                ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:text-white'
            }`}
            title={isMuted ? 'Unmute Master' : 'Mute Master'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={masterVol}
            onChange={handleMasterVolChange}
            className="w-24 accent-purple-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>
      </div>

      {/* Presets */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
          Atmospheric Presets
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {[
            { id: 'cyber_rain', label: 'Cyber Rain', icon: CloudRain, color: 'hover:border-cyan-500/50' },
            { id: 'deep_space', label: 'Deep Space', icon: Sparkles, color: 'hover:border-purple-500/50' },
            { id: 'ocean_breeze', label: 'Ocean Waves', icon: Waves, color: 'hover:border-teal-500/50' },
            { id: 'cozy_campfire', label: 'Campfire', icon: Flame, color: 'hover:border-orange-500/50' },
            { id: 'binaural_flow', label: 'Focus Beats', icon: Brain, color: 'hover:border-emerald-500/50' }
          ].map((preset) => {
            const Icon = preset.icon;
            const isSelected = activePreset === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => selectPreset(preset.id)}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-purple-600/20 border-purple-500 text-purple-300 shadow-lg shadow-purple-500/10'
                    : `bg-slate-800/40 border-slate-700/60 text-slate-300 ${preset.color} hover:bg-slate-800/80`
                }`}
              >
                <Icon className="w-4 h-4 mb-1" />
                <span>{preset.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sound Channels */}
      <div className="space-y-4 pt-2">
        {/* Rain */}
        <SoundRow
          icon={CloudRain}
          label="Rain & Thunder"
          active={layers.rain.active}
          volume={layers.rain.volume}
          onToggle={() => toggleLayer('rain')}
          onVolChange={(v) => updateVolume('rain', v)}
          accentColor="text-cyan-400"
        />

        {/* Waves */}
        <SoundRow
          icon={Waves}
          label="Ocean Swell"
          active={layers.waves.active}
          volume={layers.waves.volume}
          onToggle={() => toggleLayer('waves')}
          onVolChange={(v) => updateVolume('waves', v)}
          accentColor="text-teal-400"
        />

        {/* Synth */}
        <SoundRow
          icon={Sparkles}
          label="Cosmic Ambient Synth"
          active={layers.synth.active}
          volume={layers.synth.volume}
          onToggle={() => toggleLayer('synth')}
          onVolChange={(v) => updateVolume('synth', v)}
          accentColor="text-purple-400"
        />

        {/* Binaural */}
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => toggleLayer('binaural')}
                className={`p-2 rounded-lg border transition-all ${
                  layers.binaural.active
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                    : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-slate-300'
                }`}
              >
                <Brain className="w-4 h-4" />
              </button>
              <div>
                <span className="text-sm font-medium text-slate-200 block">Binaural Tones</span>
                <span className="text-[10px] text-slate-400">Headphones recommended</span>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              disabled={!layers.binaural.active}
              value={layers.binaural.volume}
              onChange={(e) => updateVolume('binaural', parseFloat(e.target.value))}
              className="w-24 accent-emerald-500 disabled:opacity-30 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
          </div>

          {/* Subtype selector */}
          <div className="flex space-x-1.5 pt-1">
            {[
              { id: 'alpha', label: 'Alpha (10Hz Focus)' },
              { id: 'theta', label: 'Theta (6Hz Calm)' },
              { id: 'gamma', label: 'Gamma (40Hz Peak)' }
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => updateBinauralType(sub.id)}
                className={`flex-1 py-1 text-[11px] rounded-lg border transition-all ${
                  layers.binaural.type === sub.id
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 font-semibold'
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:text-slate-200'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fire */}
        <SoundRow
          icon={Flame}
          label="Fireplace Crackle"
          active={layers.fire.active}
          volume={layers.fire.volume}
          onToggle={() => toggleLayer('fire')}
          onVolChange={(v) => updateVolume('fire', v)}
          accentColor="text-amber-400"
        />
      </div>
    </div>
  );
}

function SoundRow({ icon: Icon, label, active, volume, onToggle, onVolChange, accentColor }) {
  return (
    <div className="flex items-center justify-between bg-slate-800/30 border border-slate-800 rounded-xl p-3">
      <div className="flex items-center space-x-3">
        <button
          onClick={onToggle}
          className={`p-2 rounded-lg border transition-all ${
            active
              ? `bg-purple-500/20 border-purple-500/40 ${accentColor}`
              : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-slate-300'
          }`}
        >
          <Icon className="w-4 h-4" />
        </button>
        <span className="text-sm font-medium text-slate-200">{label}</span>
      </div>

      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        disabled={!active}
        value={volume}
        onChange={(e) => onVolChange(parseFloat(e.target.value))}
        className="w-28 accent-purple-500 disabled:opacity-30 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
      />
    </div>
  );
}
