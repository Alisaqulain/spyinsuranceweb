"use client";

import Link from "next/link";
import {
  formatCardLabel,
  insuranceSections,
} from "../lib/insurance-products";
import { CardIcon } from "./insurance-card-icons";
import { ScrollFlyIn } from "./ScrollFlyIn";
import { ScrollFlyStagger } from "./ScrollFlyStagger";

export function InsuranceProductGrid() {
  return (
    <>
      <div className="space-y-12">
        {insuranceSections.map((section, sectionIndex) => (
          <div key={section.title} className="space-y-4">
            <ScrollFlyIn
              from={sectionIndex % 2 === 0 ? "bottom-right" : "bottom-left"}
              delayMs={sectionIndex * 40}
            >
              <h2 className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-[var(--brand-dark)]">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[var(--brand-green)] opacity-40 motion-reduce:animate-none" />
                  <span className="relative block h-2.5 w-2.5 rounded-full bg-[var(--brand-green)] shadow-[0_0_12px_rgba(140,198,63,0.6)]" />
                </span>
                {section.title}
              </h2>
            </ScrollFlyIn>

            <ScrollFlyStagger
              className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
              staggerMs={48}
            >
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group/card relative flex min-h-[92px] w-full cursor-pointer items-center justify-between overflow-hidden rounded-2xl bg-white px-6 py-5 text-left shadow-[0_18px_40px_rgba(16,24,40,0.10)] ring-1 ring-black/5 transition-all duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-[0_26px_56px_rgba(16,24,40,0.16)] motion-safe:hover:ring-2 motion-safe:hover:ring-[var(--brand-green)]/35 before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:-translate-x-full before:skew-x-[-14deg] before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:transition-transform before:duration-700 before:ease-out motion-safe:group-hover/card:before:translate-x-full"
                >
                  <span className="relative z-[2] max-w-[160px] text-[15px] font-extrabold leading-[22px] text-[var(--brand-dark)] transition-transform duration-300 motion-safe:group-hover/card:translate-x-0.5">
                    {formatCardLabel(item.label)
                      .split("\n")
                      .map((line, idx, arr) => (
                        <span key={`${item.href}-${idx}`}>
                          {line}
                          {idx < arr.length - 1 ? <br /> : null}
                        </span>
                      ))}
                  </span>
                  <span className="relative z-[2] ml-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--brand-green)_18%,white)] ring-1 ring-[color-mix(in_srgb,var(--brand-green)_45%,#0000)] transition-all duration-300 motion-safe:group-hover/card:rotate-6 motion-safe:group-hover/card:scale-110 motion-safe:group-hover/card:bg-[color-mix(in_srgb,var(--brand-green)_32%,white)] motion-safe:group-hover/card:shadow-[0_8px_24px_rgba(140,198,63,0.35)]">
                    <span className="text-[var(--brand-dark)] transition-transform duration-300">
                      <CardIcon icon={item.icon ?? "shield"} className="h-7 w-7" />
                    </span>
                  </span>
                </Link>
              ))}
            </ScrollFlyStagger>
          </div>
        ))}
      </div>
    </>
  );
}
