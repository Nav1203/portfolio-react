import React, { useEffect, useRef } from 'react';

type FlickerCell = {
  x: number;
  y: number;
  start: number;
  duration: number;
  maxOpacity: number;
};

const GRID_SIZE = 48;
const CELL_COUNT = 18;

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let elapsed = 0;
    let previousTime: number | null = null;
    let cells: FlickerCell[] = [];

    const createCell = (start: number, excludedIndex = -1): FlickerCell | null => {
      const candidates: Array<{ x: number; y: number }> = [];
      const columns = Math.ceil(width / GRID_SIZE);
      const rows = Math.ceil(height / GRID_SIZE);
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < columns; x += 1) {
          const tooClose = cells.some((cell, index) => index !== excludedIndex &&
            Math.abs(cell.x - x) <= 1 && Math.abs(cell.y - y) <= 1);
          if (!tooClose) candidates.push({ x, y });
        }
      }
      if (!candidates.length) return null;
      const position = candidates[Math.floor(Math.random() * candidates.length)];
      return { ...position, start, duration: 2400 + Math.random() * 2400,
        maxOpacity: 0.10 + Math.random() * 0.08 };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      cells = [];
      for (let index = 0; index < CELL_COUNT; index += 1) {
        const cell = createCell(elapsed - Math.random() * 2400);
        if (!cell) break;
        cells.push(cell);
      }
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
      cells.forEach((cell, index) => {
        let progress = (elapsed - cell.start) / cell.duration;
        if (progress >= 1) {
          const next = createCell(elapsed + Math.random() * 600, index);
          if (!next) return;
          cell = next;
          cells[index] = next;
          progress = (elapsed - cell.start) / cell.duration;
        }
        const pulse = Math.sin(Math.PI * Math.max(0, Math.min(progress, 1)));
        const opacity = pulse * cell.maxOpacity;
        const x = cell.x * GRID_SIZE;
        const y = cell.y * GRID_SIZE;

        context.fillStyle = `rgba(103, 232, 249, ${opacity})`;
        context.fillRect(x + 1, y + 1, GRID_SIZE - 2, GRID_SIZE - 2);
        context.strokeStyle = `rgba(165, 243, 252, ${opacity * 1.4})`;
        context.strokeRect(x + 0.5, y + 0.5, GRID_SIZE - 1, GRID_SIZE - 1);
      });
    };

    const draw = (time?: number) => {
      if (time !== undefined) {
        if (previousTime !== null) elapsed += Math.min(time - previousTime, 100);
        previousTime = time;
      }
      context.clearRect(0, 0, width, height);
      drawGrid();
      drawFlickerCells();
      drawNoise();

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    const handleResize = () => {
      resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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

