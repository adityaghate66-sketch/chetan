import { useCallback, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import WordReveal from '@/components/WordReveal';
import { projects, type Project } from '@/data/portfolio';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const [first, second, third] = projects;

  return (
    <section id="projects" className="relative mx-auto max-w-7xl scroll-mt-20 px-5 py-28 sm:px-8 sm:py-40">
      <div className="mb-20 max-w-3xl">
        <Reveal>
          <SectionLabel index="03" label="Projects" />
        </Reveal>
        <WordReveal
          text="Selected work, built with purpose."
          className="font-display mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-bone sm:text-5xl lg:text-6xl"
        />
      </div>

      <div className="grid gap-x-8 gap-y-20 lg:grid-cols-12 lg:gap-y-24">
        <div className="lg:col-span-7">
          <ProjectCard project={first} onExplore={setSelected} />
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:mt-48">
          <ProjectCard project={second} delay={150} onExplore={setSelected} />
        </div>
        <div className="lg:col-span-10 lg:col-start-2">
          <ProjectCard project={third} delay={100} onExplore={setSelected} />
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={closeModal} />}
    </section>
  );
}
