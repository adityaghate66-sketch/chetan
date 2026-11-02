import { useRef, type PointerEvent } from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import Reveal from '@/components/Reveal';
import WordReveal from '@/components/WordReveal';
import HeroVisual from '@/components/HeroVisual';

const gridPattern = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
  backgroundSize: '64px 64px',
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
    sectionRef.current.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 pointer-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={gridPattern} aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-16 h-[480px] w-[480px] rounded-full bg-electric-600/20 ambient-blob" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/15 ambient-blob" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-medium tracking-wide text-ink-200">
              <span className="pulse-ring relative inline-flex h-2 w-2 rounded-full bg-success-500" aria-hidden="true" />
              Available for new opportunities
            </span>
          </Reveal>

          <WordReveal
            as="h1"
            text="HEY, I'M CHETAN."
            startDelay={250}
            className="font-display mt-8 text-[clamp(3.25rem,9.5vw,8.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-bone"
          />

          <Reveal delay={700}>
            <p className="mt-8 text-base font-medium text-electric-400 sm:text-lg">
              Computer Science &amp; Data Science Student | Developer | Creative Thinker
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
              Turning ideas into meaningful digital experiences through technology, creativity, and continuous learning.
            </p>
          </Reveal>

          <Reveal delay={850} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors duration-300 hover:bg-white"
              >
                Explore My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold text-bone transition-colors duration-300 hover:bg-white/10"
              >
                Let&apos;s Connect
              </a>
            </MagneticButton>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-ink-400 transition-colors hover:text-bone sm:flex"
      >
        Scroll
        <ArrowDownRight className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
