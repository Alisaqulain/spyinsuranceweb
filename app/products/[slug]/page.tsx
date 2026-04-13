import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductDetails } from "../../lib/product-details";
import { getSiteUrl } from "../../lib/site";
import { ProductEnquiryForm } from "./ProductEnquiryForm";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductDetails(slug);
  if (!product) return { title: "Insurance product" };

  const base = getSiteUrl();
  const url = `${base}/products/${slug}`;

  return {
    title: product.title,
    description: `${product.shortDescription} Get a quote from SPRY INSURANCE PVT LTD — ${product.category}.`,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${product.title} | SPRY INSURANCE PVT LTD`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductDetails(slug);
  if (!product) notFound();

  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="text-sm text-zinc-600">
        <Link href="/" className="hover:text-zinc-950">
          Home
        </Link>
        <span className="mx-2 text-zinc-400">/</span>
        <span className="font-semibold text-zinc-900">{product.label}</span>
      </nav>

      <header className="mt-5 grid gap-6 sm:mt-6 sm:gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div>
          <p className="text-sm font-bold tracking-wide text-[var(--brand-green)]">
            {product.category}
          </p>
          <h1 className="mt-2 text-[1.65rem] font-extrabold leading-tight tracking-tight text-[var(--brand-dark)] sm:text-4xl">
            {product.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {product.shortDescription}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-[var(--brand-muted)] shadow-sm">
          <div className="relative h-[220px] w-full sm:h-[260px]">
            <Image
              src={product.quoteImage}
              alt=""
              fill
              className="object-contain object-center p-5"
              sizes="(min-width: 1024px) 380px, 100vw"
              priority
            />
          </div>
        </div>
      </header>

      <section className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
        <article className="space-y-8">
          {product.overview.map((block, idx) => {
            if (block.kind === "heading") {
              return (
                <h2
                  key={`${block.kind}-${idx}`}
                  className="text-xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-2xl"
                >
                  {block.title}
                </h2>
              );
            }

            if (block.kind === "paragraph") {
              return (
                <p
                  key={`${block.kind}-${idx}`}
                  className="text-base leading-relaxed text-zinc-700"
                >
                  {block.text}
                </p>
              );
            }

            return (
              <ul
                key={`${block.kind}-${idx}`}
                className="list-disc space-y-2 pl-6 text-base text-zinc-700"
              >
                {block.items.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            );
          })}
        </article>

        <aside className="lg:sticky lg:top-[5.5rem]">
          <ProductEnquiryForm product={product} />
        </aside>
      </section>
    </main>
  );
}

