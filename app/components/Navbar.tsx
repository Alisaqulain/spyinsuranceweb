"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

type NavLink = {
  href: string;
  label: string;
  highlight?: boolean;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/become-a-posp", label: "Become a POSP", highlight: true },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
  { href: "/testimonial", label: "Testimonial" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/90 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1400px] items-center gap-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:min-h-[82px] sm:gap-6 sm:px-6 sm:pb-3 sm:pt-3">
        <Link
          href="/"
          className="flex min-w-0 flex-shrink-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-12 w-36 sm:h-14 sm:w-44 md:w-48">
            <Image
              src="/logo-removebg-preview.png"
              alt="SPRY INSURANCE PVT LTD — home"
              fill
              priority
              className="object-contain object-left"
              sizes="(min-width: 640px) 192px, 144px"
            />
          </div>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-8 text-[13px] font-semibold text-zinc-700 md:flex"
          aria-label="Main"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                l.highlight
                  ? "inline-flex items-center rounded-md bg-[#8cc63f] px-3 py-1.5 font-bold text-[#2f3646] shadow-[0_2px_12px_rgba(140,198,63,0.45)] ring-1 ring-[#7ab835] transition hover:bg-[#9ad148]"
                  : "hover:text-zinc-950"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex flex-shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/claim-assistance"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#8cc63f] px-3 text-[12px] font-semibold text-[#2f3646] shadow-[0_2px_14px_rgba(140,198,63,0.5)] ring-1 ring-[#7ab835] transition hover:bg-[#9ad148] hover:shadow-[0_4px_18px_rgba(140,198,63,0.6)] sm:px-4 sm:text-[13px]"
          >
            <span className="sm:hidden">Claims</span>
            <span className="hidden sm:inline">Claim Assistance</span>
          </Link>

          <button
            type="button"
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm transition hover:bg-zinc-50 md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            id={menuId}
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-zinc-200 bg-white shadow-xl"
            aria-label="Mobile"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-4">
              <span className="text-sm font-bold text-[var(--brand-dark)]">
                Menu
              </span>
              <button
                type="button"
                className="flex h-11 min-w-11 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-1 flex-col gap-1 overflow-y-auto p-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={
                      l.highlight
                        ? "flex min-h-12 items-center rounded-lg bg-[#8cc63f] px-4 py-3 text-[15px] font-bold text-[#2f3646] shadow-sm"
                        : "flex min-h-12 items-center rounded-lg px-4 py-3 text-[15px] font-semibold text-zinc-800 hover:bg-[var(--brand-muted)]"
                    }
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/claim-assistance"
                  className="flex min-h-12 items-center justify-center rounded-lg bg-[#8cc63f] px-4 py-3 text-[15px] font-bold text-[#2f3646] shadow-sm"
                  onClick={() => setOpen(false)}
                >
                  Claim Assistance
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
