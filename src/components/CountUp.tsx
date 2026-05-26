import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface CountUpProps {
  to: number;
  duration?: number;   // ms
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Animates a number from 0 to `to` the first time it enters the viewport.
 * Uses requestAnimationFrame + easeOutCubic. Disconnects after firing,
 * so the value does not reset on subsequent scroll passes.
 *
 * Uses tabular-nums so digits don't reflow as they tick.
 */
export const CountUp: React.FC<CountUpProps> = ({
  to,
  duration = 1500,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  style,
}) => {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVal(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setVal(to * easeOutCubic(t));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setVal(to);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: 'tabular-nums', ...style }}
    >
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
