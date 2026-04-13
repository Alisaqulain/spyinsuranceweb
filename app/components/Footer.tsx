import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/become-a-posp", label: "Become A POSP" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
  { href: "/testimonial", label: "Testimonial" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-[var(--brand-dark)] text-white">
      <div className="mx-auto max-w-[1400px] px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-12 sm:px-6 sm:py-14 sm:pb-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="relative h-14 w-48">
              <Image
                src="/logo-removebg-preview.png"
                alt="SPRY INSURANCE PVT LTD"
                fill
                className="object-contain object-left drop-shadow-sm"
                sizes="192px"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Independent insurance broking with clear guidance across health,
              motor, life, and more. Experience the new journey.
            </p>
            <p className="mt-3 text-xs font-semibold text-white/70">
              SPRY INSURANCE PVT LTD — Established on 28 March 2024
            </p>
            <p className="mt-3 text-xs font-semibold text-[var(--brand-green)]">
              Experience the new journey
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--brand-green)]">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-sm text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/claim-assistance"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#8cc63f] px-3.5 text-sm font-semibold text-[#2f3646] shadow-[0_2px_12px_rgba(140,198,63,0.45)] ring-1 ring-[#7ab835] transition hover:bg-[#9ad148] hover:shadow-[0_3px_16px_rgba(140,198,63,0.55)]"
                >
                  Claim Assistance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--brand-green)]">
              Contact
            </h2>
            <address className="mt-4 not-italic text-sm leading-relaxed text-white/75">
              <p className="font-semibold text-white">SPRY INSURANCE PVT LTD</p>
              <p className="mt-2">Kolkata, West Bengal, India</p>
              <p className="mt-3">
                <Link
                  href="/contact"
                  className="text-[var(--brand-green)] underline-offset-2 hover:underline"
                >
                  Get in touch
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/55 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} SPRY INSURANCE PVT LTD. All rights reserved.
          </p>
          <p className="text-white/45">
            IRDAI licensed insurance broking services
          </p>
        </div>
      </div>
    </footer>
  );
}
