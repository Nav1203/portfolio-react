import React, { useEffect, useRef } from 'react';

type FlickerCell = {
  x: number;
  y: number;
  phase: number;
  speed: number;
  maxOpacity: number;
};

const GRID_SIZE = 48;
const FLICKER_CELLS: FlickerCell[] = [
  { x: 0.08, y: 0.16, phase: 0.1, speed: 0.0018, maxOpacity: 0.12 },
  { x: 0.24, y: 0.31, phase: 1.7, speed: 0.0012, maxOpacity: 0.09 },
  { x: 0.42, y: 0.12, phase: 2.4, speed: 0.0015, maxOpacity: 0.1 },
  { x: 0.58, y: 0.42, phase: 3.2, speed: 0.001, maxOpacity: 0.08 },
  { x: 0.76, y: 0.23, phase: 4.1, speed: 0.0014, maxOpacity: 0.1 },
  { x: 0.91, y: 0.48, phase: 5.5, speed: 0.0011, maxOpacity: 0.11 },
  { x: 0.18, y: 0.72, phase: 2.8, speed: 0.0013, maxOpacity: 0.09 },
  { x: 0.49, y: 0.82, phase: 4.9, speed: 0.001, maxOpacity: 0.08 },
  { x: 0.71, y: 0.76, phase: 1.2, speed: 0.0015, maxOpacity: 0.09 },
  { x: 0.94, y: 0.68, phase: 3.8, speed: 0.0012, maxOpacity: 0.1 },
];

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let elapsed = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawGrid = () => {
      context.strokeStyle = 'rgba(103, 232, 249, 0.065)';
      context.lineWidth = 1;

      for (let x = 0; x <= width; x += GRID_SIZE) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y <= height; y += GRID_SIZE) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }
    };

    const drawNoise = () => {
      context.fillStyle = 'rgba(255, 255, 255, 0.016)';

      for (let index = 0; index < 440; index += 1) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        context.fillRect(x, y, 1, 1);
      }
    };

    const drawFlickerCells = () => {
      for (const cell of FLICKER_CELLS) {
        const pulse = reducedMotion ? 0.35 : Math.max(0, Math.sin(elapsed * cell.speed + cell.phase));
        const opacity = pulse * cell.maxOpacity;
        const x = Math.round((cell.x * width) / GRID_SIZE) * GRID_SIZE;
        const y = Math.round((cell.y * height) / GRID_SIZE) * GRID_SIZE;

        context.fillStyle = `rgba(103, 232, 249, ${opacity})`;
        context.fillRect(x + 1, y + 1, GRID_SIZE - 2, GRID_SIZE - 2);

        context.strokeStyle = `rgba(165, 243, 252, ${opacity * 1.4})`;
        context.strokeRect(x + 0.5, y + 0.5, GRID_SIZE - 1, GRID_SIZE - 1);
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      drawGrid();
      drawFlickerCells();
      drawNoise();

      if (!reducedMotion) {
        elapsed += 16;
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
      aria-hidden="true"
    />
  );
};

export default NeuralBackground;
