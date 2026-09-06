// Soundscape Engine using HTML5 Web Audio API
// Synthesizes ambient audio procedurally without any external MP3/WAV assets!

class SoundscapeEngine {
  constructor() {
    this.ctx = null;
    this.isInitialized = false;

    // Layer Nodes & Gains
    this.masterGain = null;

    this.layers = {
      rain: { gain: null, source: null, filter: null, active: false, volume: 0.5 },
      waves: { gain: null, source: null, lfo: null, active: false, volume: 0.4 },
      synth: { gain: null, oscs: [], filter: null, active: false, volume: 0.3 },
      binaural: { gain: null, leftOsc: null, rightOsc: null, active: false, volume: 0.3, type: 'alpha' },
      birds: { gain: null, intervalId: null, active: false, volume: 0.3 },
      fire: { gain: null, intervalId: null, active: false, volume: 0.4 }
    };
  }

  init() {
    if (this.isInitialized) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
    this.isInitialized = true;
  }

  ensureContext() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Generate White/Pink Noise Buffer
  createNoiseBuffer(duration = 5) {
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Paul Kellet's filter for pink noise
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      data[i] *= 0.11; // scale volume down
      b6 = white * 0.115926;
    }
    return buffer;
  }

  // --- RAIN ENGINE ---
  setRain(enable, volume = 0.5) {
    this.ensureContext();
    this.layers.rain.volume = volume;
    if (enable) {
      if (!this.layers.rain.active) {
        const noiseBuffer = this.createNoiseBuffer(4);
        const noiseSource = this.ctx.createBufferSource();
        noiseSource.buffer = noiseBuffer;
        noiseSource.loop = true;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(volume * 0.6, this.ctx.currentTime);

        noiseSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.masterGain);

        noiseSource.start();

        this.layers.rain.source = noiseSource;
        this.layers.rain.filter = filter;
        this.layers.rain.gain = gainNode;
        this.layers.rain.active = true;
      } else if (this.layers.rain.gain) {
        this.layers.rain.gain.gain.setValueAtTime(volume * 0.6, this.ctx.currentTime);
      }
    } else {
      if (this.layers.rain.active && this.layers.rain.source) {
        try { this.layers.rain.source.stop(); } catch(e){}
        this.layers.rain.active = false;
      }
    }
  }

  // --- OCEAN WAVES ENGINE ---
  setWaves(enable, volume = 0.4) {
    this.ensureContext();
    this.layers.waves.volume = volume;
    if (enable) {
      if (!this.layers.waves.active) {
        const noiseBuffer = this.createNoiseBuffer(5);
        const noiseSource = this.ctx.createBufferSource();
        noiseSource.buffer = noiseBuffer;
        noiseSource.loop = true;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, this.ctx.currentTime);

        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(volume * 0.3, this.ctx.currentTime);

        // LFO to simulate rolling wave swell
        const lfo = this.ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.08, this.ctx.currentTime); // Wave every 12 sec
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.setValueAtTime(volume * 0.35, this.ctx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(gainNode.gain);

        noiseSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.masterGain);

        noiseSource.start();
        lfo.start();

        this.layers.waves.source = noiseSource;
        this.layers.waves.lfo = lfo;
        this.layers.waves.gain = gainNode;
        this.layers.waves.active = true;
      } else if (this.layers.waves.gain) {
        this.layers.waves.gain.gain.setValueAtTime(volume * 0.3, this.ctx.currentTime);
      }
    } else {
      if (this.layers.waves.active) {
        try {
          if (this.layers.waves.source) this.layers.waves.source.stop();
          if (this.layers.waves.lfo) this.layers.waves.lfo.stop();
        } catch(e){}
        this.layers.waves.active = false;
      }
    }
  }

  // --- AMBIENT SYNTH ENGINE ---
  setSynth(enable, volume = 0.3) {
    this.ensureContext();
    this.layers.synth.volume = volume;
    if (enable) {
      if (!this.layers.synth.active) {
        const chordFreqs = [130.81, 164.81, 196.00, 246.94]; // C3, E3, G3, B3 (Cmaj7 pad)
        const oscs = [];
        const masterSynthGain = this.ctx.createGain();
        masterSynthGain.gain.setValueAtTime(volume * 0.2, this.ctx.currentTime);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, this.ctx.currentTime);

        chordFreqs.forEach(freq => {
          const osc = this.ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
          
          // Subtle detune for warmth
          osc.detune.setValueAtTime((Math.random() - 0.5) * 8, this.ctx.currentTime);
          osc.connect(filter);
          osc.start();
          oscs.push(osc);
        });

        filter.connect(masterSynthGain);
        masterSynthGain.connect(this.masterGain);

        this.layers.synth.oscs = oscs;
        this.layers.synth.filter = filter;
        this.layers.synth.gain = masterSynthGain;
        this.layers.synth.active = true;
      } else if (this.layers.synth.gain) {
        this.layers.synth.gain.gain.setValueAtTime(volume * 0.2, this.ctx.currentTime);
      }
    } else {
      if (this.layers.synth.active) {
        this.layers.synth.oscs.forEach(osc => {
          try { osc.stop(); } catch(e){}
        });
        this.layers.synth.oscs = [];
        this.layers.synth.active = false;
      }
    }
  }

  // --- BINAURAL BEATS ENGINE ---
  setBinaural(enable, type = 'alpha', volume = 0.3) {
    this.ensureContext();
    this.layers.binaural.volume = volume;
    this.layers.binaural.type = type;

    // Frequencies: Base 200 Hz
    // Alpha (10 Hz beat): Left 200Hz, Right 210Hz
    // Theta (6 Hz beat): Left 200Hz, Right 206Hz
    // Gamma (40 Hz beat): Left 200Hz, Right 240Hz
    let diff = 10;
    if (type === 'theta') diff = 6;
    if (type === 'gamma') diff = 40;

    if (enable) {
      if (!this.layers.binaural.active) {
        const merger = this.ctx.createChannelMerger(2);
        
        const leftOsc = this.ctx.createOscillator();
        leftOsc.type = 'sine';
        leftOsc.frequency.setValueAtTime(200, this.ctx.currentTime);

        const rightOsc = this.ctx.createOscillator();
        rightOsc.type = 'sine';
        rightOsc.frequency.setValueAtTime(200 + diff, this.ctx.currentTime);

        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(volume * 0.15, this.ctx.currentTime);

        leftOsc.connect(merger, 0, 0);  // Left ear
        rightOsc.connect(merger, 0, 1); // Right ear

        merger.connect(gainNode);
        gainNode.connect(this.masterGain);

        leftOsc.start();
        rightOsc.start();

        this.layers.binaural.leftOsc = leftOsc;
        this.layers.binaural.rightOsc = rightOsc;
        this.layers.binaural.gain = gainNode;
        this.layers.binaural.active = true;
      } else {
        if (this.layers.binaural.rightOsc) {
          this.layers.binaural.rightOsc.frequency.setValueAtTime(200 + diff, this.ctx.currentTime);
        }
        if (this.layers.binaural.gain) {
          this.layers.binaural.gain.gain.setValueAtTime(volume * 0.15, this.ctx.currentTime);
        }
      }
    } else {
      if (this.layers.binaural.active) {
        try {
          if (this.layers.binaural.leftOsc) this.layers.binaural.leftOsc.stop();
          if (this.layers.binaural.rightOsc) this.layers.binaural.rightOsc.stop();
        } catch(e){}
        this.layers.binaural.active = false;
      }
    }
  }

  // --- FIREPLACE CRACKLE ENGINE ---
  setFire(enable, volume = 0.4) {
    this.ensureContext();
    this.layers.fire.volume = volume;
    if (enable) {
      if (!this.layers.fire.active) {
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(volume * 0.3, this.ctx.currentTime);
        gainNode.connect(this.masterGain);

        // Crackle generator interval
        const intervalId = setInterval(() => {
          if (!this.layers.fire.active || !this.ctx) return;
          if (Math.random() > 0.4) {
            const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.02, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < data.length; i++) {
              data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.1));
            }
            const src = this.ctx.createBufferSource();
            src.buffer = buffer;
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 1500 + Math.random() * 2000;
            src.connect(filter);
            filter.connect(gainNode);
            src.start();
          }
        }, 120);

        this.layers.fire.gain = gainNode;
        this.layers.fire.intervalId = intervalId;
        this.layers.fire.active = true;
      } else if (this.layers.fire.gain) {
        this.layers.fire.gain.gain.setValueAtTime(volume * 0.3, this.ctx.currentTime);
      }
    } else {
      if (this.layers.fire.active) {
        clearInterval(this.layers.fire.intervalId);
        this.layers.fire.active = false;
      }
    }
  }

  // Master Volume
  setMasterVolume(vol) {
    this.ensureContext();
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(vol, this.ctx.currentTime);
    }
  }

  // Play Pomodoro Completion Chime
  playCompletionChime() {
    this.ensureContext();
    const now = this.ctx.currentTime;
    
    // Warm dual harmonic chime (E5 and B5)
    const freqs = [659.25, 987.77, 1318.51];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.3 / (idx + 1), now + idx * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.12 + 1.8);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + idx * 0.12);
      osc.stop(now + idx * 0.12 + 2.0);
    });
  }

  // Quick Preset Loader
  loadPreset(presetName) {
    // Reset all
    this.setRain(false);
    this.setWaves(false);
    this.setSynth(false);
    this.setBinaural(false);
    this.setFire(false);

    switch(presetName) {
      case 'cyber_rain':
        this.setRain(true, 0.7);
        this.setSynth(true, 0.4);
        break;
      case 'deep_space':
        this.setSynth(true, 0.6);
        this.setBinaural(true, 'gamma', 0.5);
        break;
      case 'ocean_breeze':
        this.setWaves(true, 0.6);
        this.setBinaural(true, 'alpha', 0.3);
        break;
      case 'cozy_campfire':
        this.setFire(true, 0.7);
        this.setRain(true, 0.3);
        break;
      case 'binaural_flow':
        this.setBinaural(true, 'alpha', 0.6);
        this.setSynth(true, 0.3);
        break;
      default:
        break;
    }
  }
}

export const soundscape = new SoundscapeEngine();
