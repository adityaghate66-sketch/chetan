import type { CSSProperties } from 'react';
import { useInView } from '@/hooks/useInView';

interface WordRevealProps {
  text: string;
  className?: string;
  startDelay?: number;
  stagger?: number;
  as?: 'h1' | 'h2';
}

export default function WordReveal({
  text,
  className = '',
  startDelay = 0,
  stagger = 90,
  as = 'h2',
}: WordRevealProps) {
  const { ref, inView } = useInView<HTMLHeadingElement>();
  const words = text.split(' ');
  const classes = `word-group ${inView ? 'is-visible' : ''} ${className}`;
  const content = words.map((word, index) => (
    <span key={`${word}-${index}`} className="word">
      <span style={{ '--delay': `${startDelay + index * stagger}ms` } as CSSProperties}>{word}</span>
      {index < words.length - 1 ? '\u00A0' : null}
    </span>
  ));

  return as === 'h1' ? (
    <h1 ref={ref} className={classes}>{content}</h1>
  ) : (
    <h2 ref={ref} className={classes}>{content}</h2>
  );
}
