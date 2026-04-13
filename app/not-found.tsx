import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-[900px] flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-bold tracking-wide text-[var(--brand-green)]">
        404 — Not found
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-4xl">
        This page doesn’t exist
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
        The link may be incorrect, or the page may have moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-[var(--brand-dark)] px-6 text-sm font-bold text-white shadow-sm transition hover:brightness-110"
        >
          Go to home
        </Link>
        <Link
          href="/#products"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
        >
          Browse products
        </Link>
      </div>
    </main>
  );
}

