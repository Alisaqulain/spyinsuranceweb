"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
};

/**
 * Children fly in one-by-one when the group scrolls into view.
 * Each direct child gets a staggered transition-delay.
 */
export function ScrollFlyStagger({
  children,
  className = "",
  staggerMs = 50,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    if (visible) {
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -6% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  const items = Children.toArray(children);

  return (
    <div
      ref={rootRef}
      className={["scroll-fly-stagger-root", className].join(" ")}
      data-visible={visible ? "true" : "false"}
    >
      {items.map((child, i) => {
        const delay = visible ? i * staggerMs : 0;
        const style: CSSProperties = {
          transitionDelay: `${delay}ms`,
        };

        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<{ className?: string; style?: CSSProperties }>, {
            key: child.key ?? i,
            className: [
              "scroll-fly-stagger-item",
              (child as ReactElement<{ className?: string }>).props.className,
            ]
              .filter(Boolean)
              .join(" "),
            style: {
              ...(typeof (child as ReactElement<{ style?: CSSProperties }>).props.style ===
              "object"
                ? (child as ReactElement<{ style?: CSSProperties }>).props.style
                : {}),
              ...style,
            },
          });
        }

        return (
          <div
            key={i}
            className="scroll-fly-stagger-item"
            style={style}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
