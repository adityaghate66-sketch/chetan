import { ArrowUp, Github, Hexagon, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import { profile } from '@/data/portfolio';

interface SocialItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const socials: SocialItem[] = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

const socialClass =
  'glass flex h-11 w-11 items-center justify-center rounded-full text-bone transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" className="font-display flex items-center gap-2 text-xl font-bold tracking-wide text-bone">
              <Hexagon className="h-7 w-7 text-electric-400" strokeWidth={1.75} aria-hidden="true" />
              {profile.name.toUpperCase()}
              <span className="text-electric-400">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              Computer Science &amp; Data Science student, developer and creative thinker based in {profile.location}.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-ink-400">Connect</span>
            <ul className="flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      aria-label={label}
                      title={label}
                      target={href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                      className={socialClass}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <span
                      aria-label={`${label} link coming soon`}
                      title={`${label} link coming soon`}
                      className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-dashed border-white/15 text-ink-500"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-400">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="shimmer-text font-display text-lg font-medium">Built with curiosity, one idea at a time.</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 self-start text-sm font-medium text-ink-300 transition-colors hover:text-bone sm:self-auto"
          >
            Back to top
            <span className="glass flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
