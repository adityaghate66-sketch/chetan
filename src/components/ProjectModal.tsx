import { useEffect } from 'react';
import { X } from 'lucide-react';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Project } from '@/data/portfolio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('is-locked');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6" role="presentation">
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 animate-[fade-in_0.4s_ease-out] bg-ink-950/85 backdrop-blur-md"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[92svh] w-full animate-[modal-rise_0.6s_cubic-bezier(0.16,1,0.3,1)] overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-900 sm:max-w-3xl sm:rounded-3xl"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" aria-hidden="true" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="glass absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-bone transition-colors hover:bg-white/15"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-10">
          <span className="font-display text-sm tabular-nums text-electric-400">{project.number}</span>
          <h3 id="project-modal-title" className="font-display mt-2 text-2xl font-bold leading-tight text-bone sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-300">{project.description}</p>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-ink-400">Technology stack</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-200">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
            <ExternalLinkButton href={project.github} label="GitHub" icon="github" />
            <ExternalLinkButton href={project.liveDemo} label="Live demo" />
          </div>
        </div>
      </div>
    </div>
  );
}
