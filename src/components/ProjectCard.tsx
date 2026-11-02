import type { CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import Reveal from '@/components/Reveal';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  delay?: number;
  onExplore: (project: Project) => void;
}

export default function ProjectCard({ project, delay = 0, onExplore }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className="group h-full">
      <article className="flex h-full flex-col">
        <button
          type="button"
          onClick={() => onExplore(project)}
          aria-label={`Open details for ${project.title}`}
          className="relative block aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800 text-left"
        >
          <div className="image-curtain absolute inset-0" style={{ '--delay': `${delay + 200}ms` } as CSSProperties}>
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" aria-hidden="true" />
          <span className="font-display absolute left-6 top-5 text-sm font-medium tabular-nums text-bone/80">
            {project.number}
          </span>
          <span className="glass absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4 text-bone" aria-hidden="true" />
          </span>
        </button>

        <div className="mt-6 flex flex-1 flex-col">
          <h3 className="font-display text-2xl font-bold leading-tight text-bone sm:text-3xl">{project.title}</h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-ink-300">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack placeholders">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-300">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <MagneticButton>
              <button
                type="button"
                onClick={() => onExplore(project)}
                className="group/btn inline-flex items-center gap-2 rounded-full border border-bone/20 px-6 py-3 text-sm font-semibold text-bone transition-all duration-300 hover:border-electric-400 hover:bg-electric-500/10"
              >
                Explore Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
              </button>
            </MagneticButton>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
