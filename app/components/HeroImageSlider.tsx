"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/** HD insurance-themed photos (Unsplash). */
const slides = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=85",
    alt: "Doctor consulting a patient — health insurance",
    caption: "Health protection",
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1920&q=85",
    alt: "Happy family together — family coverage",
    caption: "Family security",
  },
  {
    src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=85",
    alt: "Person driving a car — motor insurance",
    caption: "Motor & travel",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=85",
    alt: "New home keys — property insurance",
    caption: "Home & assets",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=85",
    alt: "Business team meeting — commercial insurance",
    caption: "Business solutions",
  },
  {
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920&q=85",
    alt: "Healthcare professional — wellness and claims",
    caption: "Care you can trust",
  },
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=85",
    alt: "Handshake agreement — trusted partnership",
    caption: "Trusted broking",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=85",
    alt: "Planning finances — life and savings plans",
    caption: "Life & savings",
  },
] as const;

const INTERVAL_MS = 5500;

export function HeroImageSlider({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carousel"
      aria-label="Insurance highlights"
    >
      <div className="relative h-full min-h-[280px] w-full lg:min-h-[min(560px,70vh)]">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`object-cover transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}

        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/90 via-[var(--brand-dark)]/25 to-transparent lg:bg-gradient-to-r lg:from-[var(--brand-dark)]/85 lg:via-[var(--brand-dark)]/20 lg:to-transparent"
          aria-hidden
        />

        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between lg:bottom-6 lg:left-6 lg:right-6">
          <p
            className="max-w-xs text-sm font-semibold text-white drop-shadow-md"
            aria-live="polite"
          >
            {slides[index].caption}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-[var(--brand-green)]"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Show slide ${i + 1} of ${slides.length}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
