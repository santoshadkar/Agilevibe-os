/**
 * Browser Speech Synthesis Helper for NotebookLLM Podcast Simulation
 */

class AudioSynthesizer {
  constructor() {
    this.synth = typeof window !== "undefined" ? window.speechSynthesis : null;
    this.voices = [];
    this.isPlaying = false;
    this.currentUtterance = null;
    this.onProgressCallback = null;

    if (this.synth) {
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (this.synth) {
      this.voices = this.synth.getVoices();
    }
  }

  playScript(script, onLineChange, onFinish) {
    if (!this.synth) {
      if (onFinish) onFinish();
      return;
    }

    this.stop();
    this.isPlaying = true;
    let index = 0;

    const speakNext = () => {
      if (index >= script.length || !this.isPlaying) {
        this.isPlaying = false;
        if (onFinish) onFinish();
        return;
      }

      const line = script[index];
      if (onLineChange) onLineChange(index, line);

      const utterance = new SpeechSynthesisUtterance(line.text);
      this.currentUtterance = utterance;

      // Assign different pitch/rate for Host A vs Host B
      if (line.speaker.includes("Host A")) {
        utterance.rate = 1.05;
        utterance.pitch = 1.0;
      } else {
        utterance.rate = 1.1;
        utterance.pitch = 1.25;
      }

      utterance.onend = () => {
        index++;
        speakNext();
      };

      utterance.onerror = () => {
        index++;
        speakNext();
      };

      this.synth.speak(utterance);
    };

    speakNext();
  }

  stop() {
    this.isPlaying = false;
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const audioSynthesizer = new AudioSynthesizer();
