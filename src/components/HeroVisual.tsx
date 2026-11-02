import { useEffect, useRef } from 'react';
import { Aperture, Code2, Cpu } from 'lucide-react';
import { profile } from '@/data/portfolio';

const chips = [
  { label: 'Python', icon: Code2, position: '-left-4 top-[18%] sm:-left-10', motion: 'float-slow' },
  { label: 'Data Science', icon: Cpu, position: '-right-2 top-[52%] sm:-right-8', motion: 'float-fast' },
  { label: 'Creative', icon: Aperture, position: 'left-6 bottom-[10%] sm:left-8', motion: 'float-slow' },
];

export default function HeroVisual() {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onScroll = () => {
      if (!frameRef.current) return;
      const offset = Math.min(window.scrollY, 900) * 0.12;
      frameRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md" style={{ perspective: '1200px' }}>
      <div ref={frameRef} className="absolute inset-0 transition-transform duration-300 ease-out">
        <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[28px] border border-white/10 bg-gradient-to-b from-ink-700/70 via-ink-850 to-ink-950">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(255,255,255,0.8) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(255,255,255,0.8) 0 1px, transparent 1px 28px)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-electric-500/25 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display gradient-text select-none text-[11rem] font-bold leading-none sm:text-[13rem]" aria-label={profile.name} role="img">
              {profile.initial}
            </span>
          </div>
        </div>

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2"
          style={{ transform: 'rotateX(72deg)', transformStyle: 'preserve-3d' }}
          aria-hidden="true"
        >
          <div className="orbit-spin relative h-full w-full rounded-full border border-electric-400/25">
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-electric-400 shadow-[0_0_16px_rgba(77,163,255,0.9)]" />
          </div>
        </div>
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2"
          style={{ transform: 'rotateX(68deg) rotateZ(35deg)', transformStyle: 'preserve-3d' }}
          aria-hidden="true"
        >
          <div className="orbit-spin-reverse h-full w-full rounded-full border border-violet-400/20" />
        </div>

        {chips.map(({ label, icon: Icon, position, motion }) => (
          <div
            key={label}
            className={`glass absolute ${position} ${motion} flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-bone shadow-[0_12px_40px_rgba(0,0,0,0.45)]`}
          >
            <Icon className="h-3.5 w-3.5 text-electric-400" aria-hidden="true" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
