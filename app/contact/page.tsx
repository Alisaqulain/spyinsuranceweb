import { ContactForm } from "./ui/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
      <header className="text-center">
        <p className="text-sm font-bold tracking-wide text-[var(--brand-green)] sm:text-base">
          CONTACT
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-4xl">
          Contact SPRY
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          Share what you need—health, vehicle, life, or general insurance. Our team
          will reach out with the right options.
        </p>
      </header>

      <ContactForm />

      <section className="mt-12 rounded-2xl border border-zinc-200/90 bg-[var(--brand-muted)] p-8 sm:p-10">
        <h2 className="text-lg font-extrabold text-[var(--brand-dark)]">
          Office
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
          Kolkata, West Bengal, India
        </p>
      </section>
    </main>
  );
}

