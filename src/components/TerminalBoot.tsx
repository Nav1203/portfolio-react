import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type BootLine = {
  prompt?: string;
  command?: string;
  output?: string;
  delay: number;
};

const bootLines: BootLine[] = [
  { prompt: 'navaneeth@portfolio:~$', command: 'npm run initialize', delay: 220 },
  { output: '> loading research profile modules', delay: 260 },
  { prompt: 'navaneeth@portfolio:~$', command: 'mount ./agentic-automation', delay: 300 },
  { output: '> agent workflows online', delay: 260 },
  { prompt: 'navaneeth@portfolio:~$', command: 'hydrate ./llm-systems ./ml-pipelines', delay: 300 },
  { output: '> skills, projects, and contact endpoints ready', delay: 280 },
  { prompt: 'navaneeth@portfolio:~$', command: 'open navaneethamarnath.com', delay: 300 },
  { output: '> boot complete. launching portfolio...', delay: 300 },
];

const BOOT_DURATION_MS = 3000;
const BOOT_FADE_START_MS = 2500;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TerminalBoot: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState<BootLine[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const hasCompleted = useRef(false);
  const timing = useMemo(() => (prefersReducedMotion() ? 70 : 1), []);

  const completeBoot = useCallback(() => {
    if (hasCompleted.current) {
      return;
    }

    hasCompleted.current = true;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    let elapsed = 180;

    bootLines.forEach((line) => {
      elapsed += line.delay / timing;
      timers.push(
        setTimeout(() => {
          setVisibleLines((current) => [...current, line]);
        }, elapsed)
      );
    });

    timers.push(
      setTimeout(() => {
        setIsComplete(true);
      }, prefersReducedMotion() ? elapsed + 120 / timing : BOOT_FADE_START_MS)
    );

    timers.push(
      setTimeout(() => {
        completeBoot();
      }, prefersReducedMotion() ? elapsed + 300 / timing : BOOT_DURATION_MS)
    );

    return () => timers.forEach(clearTimeout);
  }, [completeBoot, timing]);

  const handleSkip = () => {
    setIsComplete(true);
    setTimeout(completeBoot, 500);
  };

  return (
    <motion.div
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      animate={{ clipPath: isComplete ? 'inset(0% 0% 100% 0%)' : 'inset(0% 0% 0% 0%)' }}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#05070a] px-4 py-8 text-left text-cyan-200"
      aria-label="Portfolio boot sequence"
    >
      <motion.div
        initial={{ opacity: 1, scale: 1, y: 0 }}
        animate={{
          opacity: isComplete ? 0.35 : 1,
          scale: isComplete ? 0.985 : 1,
          y: isComplete ? -18 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
        className="w-full max-w-3xl overflow-hidden rounded-lg border border-cyan-400/20 bg-black/80 shadow-2xl shadow-cyan-500/10"
      >
        <div className="flex items-center justify-between border-b border-cyan-400/15 bg-zinc-950 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-slate-600" />
            <span className="h-3 w-3 rounded-full bg-slate-500" />
            <span className="h-3 w-3 rounded-full bg-cyan-400/80" />
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
            portfolio boot
          </span>
          <button
            type="button"
            onClick={handleSkip}
            className="rounded border border-cyan-400/25 px-3 py-1 font-mono text-xs text-cyan-100 transition-colors hover:border-cyan-300 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Skip
          </button>
        </div>

        <div className="min-h-[360px] p-5 font-mono text-sm leading-7 sm:p-7 sm:text-base">
          {visibleLines.map((line, index) => (
            <motion.div
              key={`${line.command ?? line.output}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={line.output ? 'text-zinc-300' : 'text-cyan-200'}
            >
              {line.command ? (
                <>
                  <span className="text-cyan-400/80">{line.prompt}</span>{' '}
                  <span>{line.command}</span>
                </>
              ) : (
                <span>{line.output}</span>
              )}
            </motion.div>
          ))}

          {!isComplete && (
            <div className="mt-2 flex items-center text-cyan-200">
              <span className="text-cyan-400/80">navaneeth@portfolio:~$</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-2 inline-block h-5 w-2 bg-cyan-300"
              />
            </div>
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isComplete ? 1 : 0,
          opacity: isComplete ? [0, 1, 0] : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute left-0 right-0 top-1/2 h-px origin-left bg-cyan-200/80 shadow-[0_0_28px_rgba(103,232,249,0.65)]"
      />
    </motion.div>
  );
};

export default TerminalBoot;
