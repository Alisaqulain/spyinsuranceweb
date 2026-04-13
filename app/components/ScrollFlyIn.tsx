"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type ScrollFlyFrom = "bottom" | "bottom-right" | "bottom-left" | "left";

type Props = {
  children: ReactNode;
  className?: string;
  /** Extra delay after element enters view (for chaining with siblings) */
  delayMs?: number;
  from?: ScrollFlyFrom;
  /** Unobserve after first reveal */
  once?: boolean;
};

export function ScrollFlyIn({
  children,
  className = "",
  delayMs = 0,
  from = "bottom-right",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (active) {
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          if (once) io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, active]);

  const hiddenTransform =
    from === "bottom"
      ? "translate-y-14"
      : from === "bottom-left"
        ? "-translate-x-12 translate-y-12"
        : from === "left"
          ? "-translate-x-14 translate-y-6"
          : "translate-x-12 translate-y-12";

  return (
    <div
      ref={ref}
      className={[
        "will-change-transform motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        "transition-[opacity,transform] duration-[720ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
        active
          ? "translate-x-0 translate-y-0 opacity-100"
          : `opacity-0 ${hiddenTransform}`,
        className,
      ].join(" ")}
      style={
        active && delayMs > 0
          ? { transitionDelay: `${delayMs}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
