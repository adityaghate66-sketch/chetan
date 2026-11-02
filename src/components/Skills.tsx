import { Camera, Code2, FileSpreadsheet, MessageSquare, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import WordReveal from '@/components/WordReveal';
import { skills, type Skill } from '@/data/portfolio';

const iconMap: Record<Skill['icon'], LucideIcon> = {
  MessageSquare,
  Code2,
  FileSpreadsheet,
  Camera,
};

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 overflow-hidden border-y border-white/5 bg-ink-900/60 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel index="02" label="Skills" />
            </Reveal>
            <WordReveal
              text="What I bring to the table."
              className="font-display mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-bone sm:text-5xl lg:text-6xl"
            />
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-base leading-relaxed text-ink-300">
              A mix of communication, programming, productivity and creative skills that I use across projects and teams.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <Reveal key={skill.name} delay={index * 120}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-950/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-electric-500/40 hover:shadow-[0_24px_60px_-20px_rgba(45,140,255,0.35)] sm:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-500 group-hover:border-electric-400/50 group-hover:bg-electric-500/10">
                      <Icon className="h-5 w-5 text-electric-400 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-[0.25em] text-ink-400">{skill.category}</span>
                  </div>

                  <h3 className="font-display mt-10 text-2xl font-bold text-bone sm:text-3xl">{skill.name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-300">{skill.note}</p>

                  <div className="scan-line mt-8 h-px w-full bg-white/10" aria-hidden="true" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
