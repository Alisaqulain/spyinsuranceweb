"use client";

import { useId, useState, type FormEvent } from "react";

export function CareerApplicationForm() {
  const titleId = useId();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      aria-labelledby={titleId}
      className="mt-10 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_18px_46px_rgba(16,24,40,0.10)]"
    >
      <div className="border-b border-zinc-200/80 bg-[var(--brand-muted)] px-6 py-5 sm:px-8">
        <h2
          id={titleId}
          className="text-lg font-extrabold tracking-tight text-[var(--brand-dark)]"
        >
          Apply now
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600">
          Share your details and upload your resume. Our team will contact you if
          there’s a matching opening.
        </p>
      </div>

      <div className="px-6 py-6 sm:px-8 sm:py-7">
        {submitted ? (
          <p className="rounded-xl bg-[var(--brand-muted)] px-4 py-3 text-sm font-medium text-[var(--brand-dark)]">
            Thank you. Your application has been received. We’ll get back to you
            soon.
          </p>
        ) : (
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="career-name"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Full name<span className="text-red-600">*</span>
                </label>
                <input
                  id="career-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="career-phone"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Phone<span className="text-red-600">*</span>
                </label>
                <input
                  id="career-phone"
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
                  htmlFor="career-email"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  id="career-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="career-role"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Role / Department
                </label>
                <input
                  id="career-role"
                  name="role"
                  type="text"
                  placeholder="e.g., Sales, Operations, Claims"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="career-resume"
                className="text-sm font-semibold text-[var(--brand-dark)]"
              >
                Upload resume<span className="text-red-600">*</span>
              </label>
              <input
                id="career-resume"
                name="resume"
                type="file"
                required
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="mt-1.5 block w-full cursor-pointer rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--brand-dark)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:brightness-110"
              />
              <p className="mt-2 text-xs text-zinc-500">
                Accepted: PDF, DOC, DOCX
              </p>
            </div>

            <div>
              <label
                htmlFor="career-message"
                className="text-sm font-semibold text-[var(--brand-dark)]"
              >
                Message (optional)
              </label>
              <textarea
                id="career-message"
                name="message"
                rows={4}
                className="mt-1.5 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                placeholder="Tell us briefly about your experience and what you’re looking for."
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#8cc63f] px-6 text-sm font-bold text-[#2f3646] shadow-sm transition hover:bg-[#9ad148]"
            >
              Submit application
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

