import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "../lib/site";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Become a POSP",
  description:
    "Partner with SPRY INSURANCE PVT LTD as a POSP. Contact us to learn about onboarding and support.",
  alternates: { canonical: `${siteUrl}/become-a-posp` },
  openGraph: {
    url: `${siteUrl}/become-a-posp`,
    title: "Become a POSP | SPRY INSURANCE PVT LTD",
    description: "Start your POSP journey with SPRY.",
  },
};

export default function BecomeAPospPage() {
  return (
    <main className="mx-auto w-full max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
      <header className="text-center">
        <p className="text-sm font-bold tracking-wide text-[var(--brand-green)] sm:text-base">
          POSP
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-4xl">
          Become a POSP
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          Interested in partnering with SPRY? Share your details and we’ll guide
          you on the next steps.
        </p>
      </header>

      <section className="mt-12 rounded-2xl border border-zinc-200/90 bg-[var(--brand-muted)] p-8 sm:p-10">
        <h2 className="text-lg font-extrabold text-[var(--brand-dark)]">
          Get started
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
          For now, please contact us and mention “POSP” in the subject.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-[#8cc63f] px-6 text-sm font-bold text-[#2f3646] shadow-sm transition hover:bg-[#9ad148]"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
}

