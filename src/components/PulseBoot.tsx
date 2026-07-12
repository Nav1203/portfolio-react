import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const BAR_COLORS = [
  '#67e8f9', '#67e8f9', '#67e8f9', '#67e8f9',
  '#a5f3fc', '#a5f3fc',
  '#e0fbff', '#e0fbff', '#e0fbff',
  '#a5f3fc', '#a5f3fc',
  '#67e8f9', '#67e8f9', '#67e8f9',
];

const FLY_START_MS = 4200; // name fully expanded + brief hold, then it flies home
const FLY_DURATION_MS = 900;
const TOTAL_DURATION_MS = FLY_START_MS + FLY_DURATION_MS + 200;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const PulseBoot: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [skipped, setSkipped] = useState(false);
  const [reduced] = useState(prefersReducedMotion);
  const [stage, setStage] = useState<'pulse' | 'fly'>('pulse');
  const hasCompleted = useRef(false);
  const nameRef = useRef<HTMLSpanElement>(null);

  const completeBoot = useCallback(() => {
    if (hasCompleted.current) {
      return;
    }
    hasCompleted.current = true;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (reduced || skipped) {
      const timer = setTimeout(completeBoot, 350);
      return () => clearTimeout(timer);
    }

    const flyTimer = setTimeout(() => setStage('fly'), FLY_START_MS);
    const fallback = setTimeout(completeBoot, TOTAL_DURATION_MS);
    return () => {
      clearTimeout(flyTimer);
      clearTimeout(fallback);
    };
  }, [reduced, skipped, completeBoot]);

  // FLIP: when the fly stage begins, glide the boot's name from screen-center
  // into the real Hero name slot (matching position + font size), then hand off.
  useLayoutEffect(() => {
    if (stage !== 'fly') {
      return;
    }
    const el = nameRef.current;
    const target =
      typeof document !== 'undefined' ? document.getElementById('hero-name-slot') : null;
    if (!el || !target) {
      return; // fallback timer still completes the boot
    }

    const from = el.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    const fromFont = parseFloat(getComputedStyle(el).fontSize) || from.height;
    const toFont = parseFloat(getComputedStyle(target).fontSize) || to.height;
    const scale = toFont / fromFont;
    // Origin top-left: left edges align, and vertical centers align after scaling.
    const tx = to.left - from.left;
    const ty = to.top + to.height / 2 - from.top - (scale * from.height) / 2;

    el.style.transformOrigin = '0 0';
    el.style.willChange = 'transform';
    const raf = requestAnimationFrame(() => {
      el.style.transition = `transform ${FLY_DURATION_MS}ms cubic-bezier(.7,0,.3,1)`;
      el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    });
    const done = setTimeout(completeBoot, FLY_DURATION_MS + 40);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(done);
    };
  }, [stage, completeBoot]);

  const handleSkip = () => {
    setSkipped(true);
  };

  if (reduced || skipped) {
    return (
      <div
        aria-label="Portfolio boot sequence"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: '#05070a',
          animation: 'pulseBootWaveFade 300ms ease forwards',
        }}
      />
    );
  }

  return (
    <div
      aria-label="Portfolio boot sequence"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        // Fades to transparent as the name flies home, revealing the real page.
        backgroundColor: stage === 'fly' ? 'rgba(5,7,10,0)' : 'rgba(5,7,10,1)',
        transition: 'background-color .7s ease',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          animation: 'pulseBootWaveFade .4s ease 1.5s forwards',
        }}
      >
        {BAR_COLORS.map((color, index) => (
          <div
            key={index}
            style={{
              width: '3px',
              background: color,
              borderRadius: '2px',
              height: '2px',
              animation: `pulseBootWaveBar 1.5s ease-in-out ${(index * 0.07).toFixed(2)}s`,
            }}
          />
        ))}
      </div>

      {/* Two line halves grow inward, leaving a ~160px gap at dead center for
          the name. They fade out later as the name expands past the gap. */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          width: 'calc(50% - 80px)',
          top: '50%',
          height: '1px',
          zIndex: 2,
          background: '#a5f3fc',
          boxShadow: '0 0 16px rgba(103,232,249,.7)',
          transformOrigin: 'right',
          transform: 'scaleX(0)',
          animation:
            'pulseBootLineGrow .45s cubic-bezier(.2,.8,.2,1) 1.6s forwards, pulseBootWaveFade .35s ease 2.7s forwards',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          width: 'calc(50% - 80px)',
          top: '50%',
          height: '1px',
          zIndex: 2,
          background: '#a5f3fc',
          boxShadow: '0 0 16px rgba(103,232,249,.7)',
          transformOrigin: 'left',
          transform: 'scaleX(0)',
          animation:
            'pulseBootLineGrow .45s cubic-bezier(.2,.8,.2,1) 1.6s forwards, pulseBootWaveFade .35s ease 2.7s forwards',
        }}
      />

      {/* Initials appear dead-center inside the line gap, hold, then expand
          outward from that shared center. Name: "NA" -> "Navaneeth Amarnath".
          Subtitle below (smaller): "RE" -> "Research Engineer", same motion,
          slightly staggered. Initials glow brightest. */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(6px, 1.2vw, 14px)',
          opacity: 0,
          animation: 'pulseBootNameIn .25s ease 2.1s forwards',
        }}
      >
        {/* Name row — this is the element that flies into the Hero name slot */}
        <span
          ref={nameRef}
          style={{
            display: 'inline-flex',
            alignItems: 'flex-end',
            lineHeight: 1,
            font: "700 clamp(1.75rem, 5vw, 3.25rem) 'Sora', sans-serif",
            color: '#a5f3fc',
            letterSpacing: '.01em',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ lineHeight: 1 }}>N</span>
          <span
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              minWidth: 0,
              maxWidth: 0,
              lineHeight: 1,
              animation: 'pulseBootRevealW 1.4s cubic-bezier(.2,.8,.2,1) 2.7s forwards',
            }}
          >
            avaneeth
          </span>
          {/* word-space grows between the two words as the name expands */}
          <span
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              minWidth: 0,
              width: 0,
              lineHeight: 1,
              animation: 'pulseBootGapGrow 1.4s cubic-bezier(.2,.8,.2,1) 2.7s forwards',
            }}
          >
            &nbsp;
          </span>
          <span style={{ lineHeight: 1 }}>A</span>
          <span
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              minWidth: 0,
              maxWidth: 0,
              lineHeight: 1,
              animation: 'pulseBootRevealW 1.4s cubic-bezier(.2,.8,.2,1) 2.7s forwards',
            }}
          >
            marnath
          </span>
        </span>

        {/* horizontal demarker between name and role — fades out as the name flies home */}
        <span
          style={{
            width: 'clamp(30px, 6vw, 64px)',
            height: '1px',
            background: 'rgba(165,243,252,.55)',
            boxShadow: '0 0 10px rgba(103,232,249,.5)',
            opacity: stage === 'fly' ? 0 : 1,
            transition: 'opacity .35s ease',
          }}
        />

        {/* Subtitle row — same reveal, smaller font, slight stagger; fades on fly */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'flex-end',
            lineHeight: 1,
            font: "600 clamp(0.8rem, 2vw, 1.15rem) 'Sora', sans-serif",
            color: 'rgba(165,243,252,.9)',
            letterSpacing: '.06em',
            whiteSpace: 'nowrap',
            opacity: stage === 'fly' ? 0 : 1,
            transition: 'opacity .35s ease',
          }}
        >
          <span style={{ lineHeight: 1 }}>R</span>
          <span
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              minWidth: 0,
              maxWidth: 0,
              lineHeight: 1,
              animation: 'pulseBootRevealW 1.4s cubic-bezier(.2,.8,.2,1) 2.9s forwards',
            }}
          >
            esearch
          </span>
          {/* word-space grows between the two words as the name expands */}
          <span
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              minWidth: 0,
              width: 0,
              lineHeight: 1,
              animation: 'pulseBootGapGrow 1.4s cubic-bezier(.2,.8,.2,1) 3s forwards',
            }}
          >
            &nbsp;
          </span>
          <span style={{ lineHeight: 1 }}>E</span>
          <span
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              minWidth: 0,
              maxWidth: 0,
              lineHeight: 1,
              animation: 'pulseBootRevealW 1.4s cubic-bezier(.2,.8,.2,1) 3s forwards',
            }}
          >
            ngineer
          </span>
        </span>
      </div>

      <button
        type="button"
        onClick={handleSkip}
        style={{
          position: 'absolute',
          top: 14,
          right: 14,
          background: 'transparent',
          border: '1px solid rgba(103,232,249,.25)',
          color: '#a5f3fc',
          font: "500 10px 'JetBrains Mono', monospace",
          letterSpacing: '.08em',
          padding: '5px 10px',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 5,
          opacity: stage === 'fly' ? 0 : 1,
          transition: 'opacity .3s ease',
          pointerEvents: stage === 'fly' ? 'none' : 'auto',
        }}
      >
        SKIP
      </button>
    </div>
  );
};

export default PulseBoot;
