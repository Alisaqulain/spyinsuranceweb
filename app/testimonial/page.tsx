export default function TestimonialPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6">
      <header className="text-center">
        <p className="text-sm font-bold tracking-wide text-[var(--brand-green)] sm:text-base">
          TESTIMONIALS
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
          What our customers say
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
          Real experiences from people who trusted SPRY Insurance Brokers Pvt.
          Ltd. for their insurance needs.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <TestimonialCard
          name="Amit Sharma"
          role="Health Insurance"
          quote="Very smooth process. The team explained everything clearly and helped me pick the right plan."
        />
        <TestimonialCard
          name="Sneha Verma"
          role="Car Insurance"
          quote="Quick support and fast policy issuance. Claim assistance was also helpful when I needed it."
          featured
        />
        <TestimonialCard
          name="Rahul Singh"
          role="Life Insurance"
          quote="Professional guidance and multiple options. I felt confident before making my decision."
        />
      </section>
    </main>
  );
}

function TestimonialCard({
  name,
  role,
  quote,
  featured,
}: {
  name: string;
  role: string;
  quote: string;
  featured?: boolean;
}) {
  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5",
        featured ? "bg-[var(--brand-dark)] text-white ring-black/0" : "",
      ].join(" ")}
    >
      {featured ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,rgba(140,198,63,0.55),transparent_55%)]"
          aria-hidden
        />
      ) : null}

      <div className="relative">
        <p className={featured ? "text-white/90" : "text-zinc-600"}>
          “{quote}”
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-extrabold">{name}</div>
            <div className={featured ? "text-xs text-white/75" : "text-xs text-zinc-500"}>
              {role}
            </div>
          </div>

          <span
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-full ring-1",
              featured
                ? "bg-white/10 ring-white/15"
                : "bg-[color-mix(in_srgb,var(--brand-green)_18%,white)] ring-[color-mix(in_srgb,var(--brand-green)_45%,#0000)]",
            ].join(" ")}
            aria-hidden
          >
            <StarIcon className={featured ? "h-5 w-5 text-[var(--brand-green)]" : "h-5 w-5 text-[var(--brand-dark)]"} />
          </span>
        </div>
      </div>
    </article>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.6 14.6 9l5.9.8-4.3 4.1 1 5.8-5.3-2.9-5.3 2.9 1-5.8-4.3-4.1 5.9-.8L12 3.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

