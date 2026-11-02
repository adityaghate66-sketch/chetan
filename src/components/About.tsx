import { Building2, GraduationCap, Mail, MapPin, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import WordReveal from '@/components/WordReveal';
import { profile } from '@/data/portfolio';

interface InfoBlock {
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
}

const infoBlocks: InfoBlock[] = [
  { label: 'Location', value: profile.location, icon: MapPin },
  { label: 'Education', value: profile.education, icon: GraduationCap },
  { label: 'College', value: profile.college, icon: Building2 },
  { label: 'Email', value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-20 px-5 py-28 sm:px-8 sm:py-40">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="01" label="About" />
          </Reveal>
          <WordReveal
            text="Curious by nature. Builder by habit."
            className="font-display mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-bone sm:text-5xl lg:text-6xl"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:mt-24">
          <Reveal delay={150}>
            <p className="text-xl leading-[1.5] text-ink-200 sm:text-2xl">{profile.intro}</p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2">
            {infoBlocks.map((block, index) => {
              const Icon = block.icon;
              const content = (
                <>
                  <div className="flex items-center gap-3 text-ink-400">
                    <Icon className="h-4 w-4 text-electric-400" aria-hidden="true" />
                    <span className="text-xs font-medium uppercase tracking-[0.25em]">{block.label}</span>
                  </div>
                  <p className="mt-4 break-words text-base font-medium text-bone">{block.value}</p>
                </>
              );
              return (
                <Reveal key={block.label} delay={250 + index * 100} className="bg-ink-950">
                  {block.href ? (
                    <a
                      href={block.href}
                      className="group block h-full p-6 transition-colors duration-500 hover:bg-ink-850 sm:p-8"
                    >
                      {content}
                      <span className="mt-3 block h-px w-0 bg-gradient-to-r from-electric-400 to-violet-400 transition-all duration-500 group-hover:w-full" />
                    </a>
                  ) : (
                    <div className="group h-full p-6 transition-colors duration-500 hover:bg-ink-850 sm:p-8">
                      {content}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
