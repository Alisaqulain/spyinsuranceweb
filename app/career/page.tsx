import Link from "next/link";
import { CareerApplicationForm } from "./CareerApplicationForm";

export default function CareerPage() {
  return (
    <main className="mx-auto w-full max-w-[800px] px-4 py-12 sm:px-6 sm:py-16">
      <header className="text-center">
        <p className="text-sm font-bold tracking-wide text-[var(--brand-green)] sm:text-base">
          CAREER
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-4xl">
          Work with SPRY Insurance Brokers
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
          We are always interested in people who share our commitment to clear
          advice and client-first broking. Reach out to learn about current
          openings and how you can contribute from our Kolkata headquarters and
          network.
        </p>
      </header>

      <CareerApplicationForm />

      <section className="mt-12 rounded-2xl border border-zinc-200/90 bg-[var(--brand-muted)] p-8 sm:p-10">
        <h2 className="text-lg font-extrabold text-[var(--brand-dark)]">
          Get in touch
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
          Send your resume or questions through our contact page. We will get
          back to you as soon as we can.
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
