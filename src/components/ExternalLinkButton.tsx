import { ExternalLink, Github, Linkedin } from 'lucide-react';

interface ExternalLinkButtonProps {
  href: string;
  label: string;
  icon?: 'github' | 'linkedin' | 'external';
  className?: string;
}

const iconFor = {
  github: Github,
  linkedin: Linkedin,
  external: ExternalLink,
};

export default function ExternalLinkButton({ href, label, icon = 'external', className = '' }: ExternalLinkButtonProps) {
  const Icon = iconFor[icon];
  const base = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${className}`;

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed border border-dashed border-white/15 text-ink-400`}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
        {label} (coming soon)
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${base} glass text-bone hover:bg-white/10`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
