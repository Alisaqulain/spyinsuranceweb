"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const StatsGridVisibleContext = createContext(false);

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function StatsAnimatedGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (visible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <StatsGridVisibleContext.Provider value={visible}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </StatsGridVisibleContext.Provider>
  );
}

type CountUpNumberProps = {
  target: number;
  suffix?: string;
  className?: string;
  durationMs?: number;
  delayMs?: number;
};

export function CountUpNumber({
  target,
  suffix = "",
  className,
  durationMs = 2000,
  delayMs = 0,
}: CountUpNumberProps) {
  const gridVisible = useContext(StatsGridVisibleContext);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [display, setDisplay] = useState(0);
  const hasStartedRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!gridVisible || hasStartedRef.current || prefersReducedMotion) return;
    hasStartedRef.current = true;

    const timeoutId = window.setTimeout(() => {
      const t0 = performance.now();

      const tick = (now: number) => {
        const elapsed = now - t0;
        const t = Math.min(1, elapsed / durationMs);
        setDisplay(Math.floor(easeOutCubic(t) * target));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(target);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafRef.current);
    };
  }, [gridVisible, prefersReducedMotion, target, durationMs, delayMs]);

  const value = prefersReducedMotion ? (gridVisible ? target : 0) : display;

  return (
    <p className={className}>
      {value}
      {suffix}
    </p>
  );
}
