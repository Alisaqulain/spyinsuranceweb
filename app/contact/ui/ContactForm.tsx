"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mt-10 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_18px_46px_rgba(16,24,40,0.10)]">
      <div className="border-b border-zinc-200/80 bg-[var(--brand-muted)] px-6 py-5 sm:px-8">
        <h2 className="text-lg font-extrabold tracking-tight text-[var(--brand-dark)]">
          Send an enquiry
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600">
          We usually respond within 24 working hours.
        </p>
      </div>

      <div className="px-6 py-6 sm:px-8 sm:py-7">
        {submitted ? (
          <p className="rounded-xl bg-[var(--brand-muted)] px-4 py-3 text-sm font-medium text-[var(--brand-dark)]">
            Thank you. We have received your enquiry. Our team will contact you
            shortly.
          </p>
        ) : (
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Phone<span className="text-red-600">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="e.g., Health Insurance Quote"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="text-sm font-semibold text-[var(--brand-dark)]"
              >
                Message<span className="text-red-600">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="mt-1.5 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                placeholder="Tell us what you need (coverage type, city, age, vehicle details, etc.)"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#8cc63f] px-6 text-sm font-bold text-[#2f3646] shadow-sm transition hover:bg-[#9ad148]"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

