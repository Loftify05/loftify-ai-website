import React from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;       // ms
  y?: number;           // initial translateY offset in px
  x?: number;           // initial translateX offset in px
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Fades + translates its children into view the first time it scrolls
 * into the viewport. Works via the .lf-reveal / .is-in CSS in index.css.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 24,
  x = 0,
  as: Tag = 'div',
  className = '',
  style,
}) => {
  const [ref, inView] = useInView<HTMLElement>();

  // Pass CSS variables for the per-instance offsets/delay.
  // (Tag is dynamic, so we cast the props.)
  const computedStyle: React.CSSProperties = {
    ...style,
    ['--lf-y' as any]: `${y}px`,
    ['--lf-x' as any]: `${x}px`,
    ['--lf-delay' as any]: `${delay}ms`,
  };

  return React.createElement(
    Tag as any,
    {
      ref,
      className: `lf-reveal${inView ? ' is-in' : ''} ${className}`.trim(),
      style: computedStyle,
    },
    children
  );
};

export default Reveal;
