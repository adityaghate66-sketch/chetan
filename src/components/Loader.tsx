import { useEffect, useState } from 'react';
import { profile } from '@/data/portfolio';

interface LoaderProps {
  onComplete: () => void;
}

const DURATION = 1400;
const EXIT_DURATION = 800;

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;
    let exitTimer = 0;

    const tick = (now: number) => {
      const ratio = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      setProgress(Math.round(eased * 100));
      if (ratio < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        exitTimer = window.setTimeout(onComplete, EXIT_DURATION);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 transition-all duration-700 ease-out ${
        leaving ? 'pointer-events-none opacity-0 blur-sm' : 'opacity-100'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-blob absolute -left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-electric-600/25" />
        <div className="ambient-blob absolute -right-1/4 bottom-1/4 h-[360px] w-[360px] rounded-full bg-violet-500/20" />
      </div>

      <p className="font-display relative text-sm uppercase tracking-[0.35em] text-ink-300">
        {profile.name}
      </p>

      <div className="relative mt-6 font-display text-[clamp(4rem,14vw,9rem)] font-bold leading-none tabular-nums">
        {String(progress).padStart(3, '0')}
      </div>

      <div className="relative mt-8 h-px w-56 overflow-hidden bg-ink-700 sm:w-72">
        <div
          className="h-full origin-left bg-gradient-to-r from-electric-500 to-violet-500 transition-transform duration-100 ease-linear"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    </div>
  );
}
