import { ArrowUpRight, Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import WordReveal from '@/components/WordReveal';
import { profile } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-28 sm:py-40">
      <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-electric-600/15 ambient-blob" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="04" label="Contact" />
          </Reveal>
          <WordReveal
            text="HAVE AN IDEA? LET'S BUILD SOMETHING."
            className="font-display mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-bone sm:text-5xl lg:text-6xl"
          />
          <Reveal delay={200}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-300">
              Always open to new opportunities, collaborations, and interesting conversations.
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-12 space-y-6">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 text-bone"
            >
              <span className="glass flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-electric-500/15">
                <Mail className="h-5 w-5 text-electric-400" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.25em] text-ink-400">Email</span>
                <span className="block break-all text-base font-medium underline-offset-4 transition-colors group-hover:text-electric-400 group-hover:underline">
                  {profile.email}
                </span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bone" aria-hidden="true" />
            </a>

            <div className="flex flex-wrap gap-3">
              <ExternalLinkButton href={profile.github} label="GitHub" icon="github" />
              <ExternalLinkButton href={profile.linkedin} label="LinkedIn" icon="linkedin" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={150}>
            <div className="glass relative rounded-3xl p-6 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
