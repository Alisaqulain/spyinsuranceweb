import { ClaimAssistanceForm } from "./ui/ClaimAssistanceForm";

export default function ClaimAssistancePage() {
  return (
    <main className="mx-auto w-full max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
      <header className="text-center">
        <p className="text-sm font-bold tracking-wide text-[var(--brand-green)] sm:text-base">
          CLAIM ASSISTANCE
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-4xl">
          Claim Assistance
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          If you need help with an ongoing or new claim, share the details here.
          Our team will guide you through the next steps.
        </p>
      </header>

      <ClaimAssistanceForm />

      <section className="mt-12 rounded-2xl border border-zinc-200/90 bg-[var(--brand-muted)] p-8 sm:p-10">
        <h2 className="text-lg font-extrabold text-[var(--brand-dark)]">
          What to include
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-zinc-600 sm:text-base">
          <li>Policy number (if available)</li>
          <li>Insurer name</li>
          <li>Claim type (health / motor / travel / etc.)</li>
          <li>Incident date and short description</li>
        </ul>
      </section>
    </main>
  );
}

