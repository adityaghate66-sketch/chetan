interface SectionLabelProps {
  index: string;
  label: string;
}

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-sm tabular-nums text-electric-400">{index}</span>
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-ink-300">{label}</span>
      <span className="line-grow h-px w-16 bg-gradient-to-r from-electric-500/80 to-transparent" aria-hidden="true" />
    </div>
  );
}
