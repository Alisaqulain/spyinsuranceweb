"use client";

import { useState, type FormEvent } from "react";

export function ClaimAssistanceForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mt-10 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_18px_46px_rgba(16,24,40,0.10)]">
      <div className="border-b border-zinc-200/80 bg-[var(--brand-muted)] px-6 py-5 sm:px-8">
        <h2 className="text-lg font-extrabold tracking-tight text-[var(--brand-dark)]">
          Request claim help
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600">
          Fill the form and we’ll call you back.
        </p>
      </div>

      <div className="px-6 py-6 sm:px-8 sm:py-7">
        {submitted ? (
          <p className="rounded-xl bg-[var(--brand-muted)] px-4 py-3 text-sm font-medium text-[var(--brand-dark)]">
            Thank you. We have received your claim assistance request. Our team
            will contact you shortly.
          </p>
        ) : (
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="claim-name"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  id="claim-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="claim-phone"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Phone<span className="text-red-600">*</span>
                </label>
                <input
                  id="claim-phone"
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
                  htmlFor="claim-email"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Email Id<span className="text-red-600">*</span>
                </label>
                <input
                  id="claim-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="claim-policy"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Policy number (optional)
                </label>
                <input
                  id="claim-policy"
                  name="policyNumber"
                  type="text"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="claim-insurer"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Insurer (optional)
                </label>
                <input
                  id="claim-insurer"
                  name="insurer"
                  type="text"
                  placeholder="e.g., HDFC ERGO"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="claim-type"
                  className="text-sm font-semibold text-[var(--brand-dark)]"
                >
                  Claim type<span className="text-red-600">*</span>
                </label>
                <select
                  id="claim-type"
                  name="claimType"
                  required
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="health">Health</option>
                  <option value="motor">Vehicle / Motor</option>
                  <option value="life">Life</option>
                  <option value="travel">Travel</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="claim-details"
                className="text-sm font-semibold text-[var(--brand-dark)]"
              >
                Claim details<span className="text-red-600">*</span>
              </label>
              <textarea
                id="claim-details"
                name="details"
                required
                rows={5}
                className="mt-1.5 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                placeholder="Incident date, location, what happened, what help you need."
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

