import React, { useEffect, useRef } from 'react';

export default function VisualizerCanvas({ mode = 'aurora', isPlaying = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // --- Mode 1: Aurora Waves Parameters ---
    let auroraPhase = 0;

    // --- Mode 2: Starfield Parameters ---
    const stars = Array.from({ length: 180 }, () => ({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      z: Math.random() * width,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#8B5CF6' : '#06B6D4'
    }));

    // --- Mode 3: Raindrops Parameters ---
    const raindrops = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      maxR: Math.random() * 25 + 15,
      speed: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.8 + 0.2
    }));

    // --- Mode 4: Pulsing Rings Parameters ---
    let ringPulse = 0;

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mode === 'aurora') {
        auroraPhase += isPlaying ? 0.015 : 0.003;
        
        // Draw 3 layered gradient waves
        const waveColors = [
          'rgba(139, 92, 246, 0.18)', // Purple glow
          'rgba(6, 182, 212, 0.15)',  // Cyan glow
          'rgba(236, 72, 153, 0.12)'   // Pink glow
        ];

        waveColors.forEach((color, idx) => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.moveTo(0, height);

          for (let x = 0; x <= width; x += 20) {
            const wave1 = Math.sin(x * 0.004 + auroraPhase + idx) * 80;
            const wave2 = Math.cos(x * 0.002 - auroraPhase * 0.7) * 40;
            const y = height * 0.5 + wave1 + wave2 + (idx * 60);
            ctx.lineTo(x, y);
          }

          ctx.lineTo(width, height);
          ctx.closePath();
          ctx.fill();
        });
      } else if (mode === 'starfield') {
        ctx.fillStyle = 'rgba(10, 13, 20, 0.4)';
        ctx.fillRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;

        stars.forEach((star) => {
          if (isPlaying) {
            star.z -= 2.5;
            if (star.z <= 0) {
              star.z = width;
              star.x = (Math.random() - 0.5) * width;
              star.y = (Math.random() - 0.5) * height;
            }
          }

          const k = 300 / star.z;
          const px = star.x * k + cx;
          const py = star.y * k + cy;

          if (px >= 0 && px <= width && py >= 0 && py <= height) {
            const size = Math.max(0.5, (1 - star.z / width) * 4);
            const alpha = Math.min(1, (1 - star.z / width) * 1.2);

            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.globalAlpha = alpha;
            ctx.shadowBlur = 8;
            ctx.shadowColor = star.color;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
          }
        });
      } else if (mode === 'raindrops') {
        raindrops.forEach((drop) => {
          if (isPlaying) {
            drop.r += drop.speed * 0.2;
            drop.alpha -= 0.008;

            if (drop.alpha <= 0 || drop.r >= drop.maxR) {
              drop.x = Math.random() * width;
              drop.y = Math.random() * height;
              drop.r = 1;
              drop.maxR = Math.random() * 25 + 15;
              drop.alpha = Math.random() * 0.7 + 0.3;
            }
          }

          ctx.beginPath();
          ctx.arc(drop.x, drop.y, drop.r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(6, 182, 212, ${drop.alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });
      } else if (mode === 'pulsing_rings') {
        ringPulse += isPlaying ? 0.02 : 0.005;
        const cx = width / 2;
        const cy = height / 2;

        for (let i = 1; i <= 6; i++) {
          const radius = (i * 70 + Math.sin(ringPulse + i * 0.5) * 20) % (Math.min(width, height) * 0.45);
          const alpha = 0.4 - (radius / (Math.min(width, height) * 0.45)) * 0.35;

          ctx.beginPath();
          ctx.arc(cx, cy, Math.max(5, radius), 0, Math.PI * 2);
          ctx.strokeStyle = i % 2 === 0 ? `rgba(139, 92, 246, ${Math.max(0, alpha)})` : `rgba(6, 182, 212, ${Math.max(0, alpha)})`;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 15;
          ctx.shadowColor = i % 2 === 0 ? '#8B5CF6' : '#06B6D4';
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode, isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 opacity-60"
    />
  );
}
