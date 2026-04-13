"use client";

import { useId, useState, type FormEvent } from "react";
import type { ProductDetails } from "../../lib/product-details";
import { CardIcon } from "../../components/insurance-card-icons";

type Props = {
  product: ProductDetails;
};

export function ProductEnquiryForm({ product }: Props) {
  const titleId = useId();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      aria-labelledby={titleId}
      className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_18px_46px_rgba(16,24,40,0.10)]"
    >
      <div className="border-b border-zinc-200/80 bg-[var(--brand-muted)] px-6 py-5 sm:px-7">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2
              id={titleId}
              className="text-base font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-lg"
            >
              {product.form.titlePrefix ? `${product.form.titlePrefix} ` : ""}
              {product.label} Quotes
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">
              Share a few details. We’ll contact you with plan options and pricing.
            </p>
          </div>

          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--brand-green)_22%,white)] ring-1 ring-[color-mix(in_srgb,var(--brand-green)_40%,transparent)]"
            aria-hidden
          >
            <span className="text-[var(--brand-dark)]">
              <CardIcon icon={product.icon ?? "shield"} className="h-6 w-6" />
            </span>
          </span>
        </div>
      </div>

      <div className="px-6 py-6 sm:px-7 sm:py-7">
        {submitted ? (
          <p className="rounded-xl bg-[var(--brand-muted)] px-4 py-3 text-sm font-medium text-[var(--brand-dark)]">
            Thank you. We have received your request for{" "}
            <strong>{product.label}</strong>. Our team will contact you shortly.
          </p>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            {product.form.fields.map((field) => {
              const id = `product-${product.slug}-${field.name}`;

              if (field.type === "textarea") {
                return (
                  <div key={field.name}>
                    <label
                      htmlFor={id}
                      className="text-sm font-semibold text-[var(--brand-dark)]"
                    >
                      {field.label}
                      {field.required ? (
                        <span className="text-red-600">*</span>
                      ) : null}
                    </label>
                    <textarea
                      id={id}
                      name={field.name}
                      required={field.required}
                      rows={4}
                      className="mt-1.5 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                    />
                  </div>
                );
              }

              return (
                <div key={field.name}>
                  <label
                    htmlFor={id}
                    className="text-sm font-semibold text-[var(--brand-dark)]"
                  >
                    {field.label}
                    {field.required ? <span className="text-red-600">*</span> : null}
                  </label>
                  <input
                    id={id}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    autoComplete={
                      "autoComplete" in field ? field.autoComplete : undefined
                    }
                    className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[var(--brand-green)]/30 transition focus:border-[var(--brand-green)] focus:ring-2"
                  />
                </div>
              );
            })}

            <input type="hidden" name="product" value={product.label} />

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[var(--brand-dark)] py-3 text-sm font-bold text-white shadow-sm transition hover:brightness-110"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

