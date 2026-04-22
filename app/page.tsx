import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { InsuranceProductGrid } from "./components/InsuranceProductGrid";
import { getSiteUrl } from "./lib/site";
import { ScrollFlyIn } from "./components/ScrollFlyIn";
import { ScrollFlyStagger } from "./components/ScrollFlyStagger";
import { CountUpNumber, StatsAnimatedGrid } from "./components/StatsCountUp";
import { HeroImageSlider } from "./components/HeroImageSlider";

/** HD photo (Unsplash): healthcare / insurance — 1920px wide for crisp sidebar */
const PRODUCTS_HERO_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=90";

const homeUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Health, Vehicle, General & Life Insurance",
  description:
    "SPRY INSURANCE PVT LTD — Compare health, motor, travel, home, and life insurance in India. Expert broking in Kolkata with claim assistance and nationwide insurer partners.",
  alternates: { canonical: homeUrl },
  openGraph: {
    url: homeUrl,
    title: "SPRY INSURANCE PVT LTD | Insurance that fits your life",
    description:
      "Clear advice and better coverage — health, vehicle, general, and life insurance from a trusted Kolkata broker.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <TopHeroSection />

      <main className="mx-auto w-full max-w-[1920px] px-4 py-8 sm:px-6 sm:py-10">
        <MissionSection />

        <StatsSection />

        <section
          id="products"
          className="group/products mt-12 scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-[0_12px_30px_rgba(16,24,40,0.08)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(16,24,40,0.14)] sm:mt-16 lg:mt-20 lg:grid lg:grid-cols-[minmax(0,380px)_1fr] lg:items-stretch"
        >
          {/* Left: sticky image column — white bg so no green frame around the photo */}
          <div className="min-h-[220px] bg-white sm:min-h-[280px] rounded-t-xl lg:h-full lg:min-h-0 lg:rounded-l-xl lg:rounded-tr-none lg:rounded-br-none">
            <div className="lg:sticky lg:top-24 lg:z-[1] lg:self-start lg:w-full">
              <div className="relative h-[220px] overflow-hidden sm:h-[280px] lg:h-[calc(100vh-6.5rem)] lg:min-h-[500px] lg:rounded-l-xl">
                <Image
                  src={PRODUCTS_HERO_IMAGE}
                  alt="Healthcare and insurance — professional care and family protection"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-[1.1s] ease-out motion-safe:group-hover/products:scale-[1.06] sm:object-[center_30%] lg:object-left lg:object-center"
                  sizes="(min-width: 1024px) 760px, 100vw"
                />
                {/* <div className="absolute inset-0 bg-[var(--brand-green)]/35" /> */}
                <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_35%_25%,rgba(47,54,70,0.45),transparent_55%)]" />
              </div>
            </div>
          </div>

          <ScrollFlyIn from="bottom-right" delayMs={100} className="min-h-0">
            <div className="rounded-b-xl border-t border-zinc-100 bg-white px-4 py-7 sm:px-8 sm:py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10 lg:rounded-tr-xl lg:rounded-br-xl lg:rounded-bl-none">
              <InsuranceProductGrid />
            </div>
          </ScrollFlyIn>
        </section>

        <AboutSection />

        <CareerTestimonialSection />

        <PartnersSection />
      </main>
    </div>
  );
}

function TopHeroSection() {
  return (
    <section
      className="relative mb-10 w-full overflow-hidden bg-[var(--brand-dark)] shadow-[0_12px_40px_rgba(16,24,40,0.15)]"
      aria-label="Introduction"
    >
      <div className="home-float-orb-a pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[var(--brand-green)]/15 blur-3xl" />
      <div className="home-float-orb-b pointer-events-none absolute bottom-0 right-1/3 h-48 w-48 rounded-full bg-[var(--brand-green)]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1920px] items-stretch lg:min-h-[min(560px,72vh)] lg:grid-cols-[1fr_min(52%,820px)]">
        <div className="relative z-10 order-2 flex flex-col justify-center px-4 py-10 sm:order-1 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-16">
          <p className="home-hero-enter home-hero-enter-1 text-xs font-bold tracking-wide text-[var(--brand-green)] sm:text-sm">
            SPRY INSURANCE PVT LTD
          </p>
          <h1 className="home-hero-enter home-hero-enter-2 mt-3 text-[1.65rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            Insurance that fits your life—clear advice, better coverage
          </h1>
          <p className="home-hero-enter home-hero-enter-3 mt-5 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-lg">
            From health to motor and life, we help you compare trusted insurers and
            choose plans with confidence. Experience the new journey with a team
            that puts you first.
          </p>
          <div className="home-hero-enter home-hero-enter-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[var(--brand-green)] px-6 text-sm font-bold text-[var(--brand-dark)] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(140,198,63,0.45)] active:scale-[0.98] motion-reduce:hover:scale-100 sm:h-11 sm:w-auto sm:hover:scale-[1.04]"
            >
              Talk to an expert
            </Link>
            <Link
              href="#products"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[var(--brand-green)]/55 hover:bg-[var(--brand-green)]/12 hover:text-white hover:shadow-[0_0_24px_rgba(140,198,63,0.2)] active:scale-[0.98] motion-reduce:hover:scale-100 sm:h-11 sm:w-auto"
            >
              Browse products
            </Link>
          </div>

          <div className="home-hero-enter home-hero-enter-5 mt-8 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-500 hover:border-[var(--brand-green)]/35 hover:bg-white/[0.1] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:mt-10 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-green)]">
              Why clients choose us
            </p>
            <ul className="mt-5 space-y-4">
              <TopHeroPoint
                title="Independent broking"
                body="We work for you—not the insurer—so recommendations stay unbiased."
              />
              <TopHeroPoint
                title="Faster clarity"
                body="Simple explanations, side-by-side options, and help with paperwork."
              />
              <TopHeroPoint
                title="Claim support"
                body="Guidance when it matters most, so you are never alone in the process."
              />
            </ul>
          </div>
        </div>

        <div className="relative order-1 flex min-h-[240px] w-full sm:order-2 sm:min-h-[300px] lg:min-h-0 lg:h-full">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-16 bg-gradient-to-r from-[var(--brand-dark)] to-transparent sm:w-20 lg:block"
            aria-hidden
          />
          <HeroImageSlider className="relative z-0 min-h-[300px] w-full flex-1 lg:min-h-full" />
        </div>
      </div>
    </section>
  );
}

function TopHeroPoint({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)]/20 ring-1 ring-[var(--brand-green)]/35"
        aria-hidden
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[var(--brand-green)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <div className="min-w-0">
        <p className="text-sm font-bold text-white transition-colors duration-300 group-hover/point:text-[var(--brand-green)]">
          {title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-white/70 transition-colors duration-300 group-hover/point:text-white/85">
          {body}
        </p>
      </div>
    </li>
  );
}

/** Partner logos in `public/partners/partner-01.png` … (sequential, no duplicates). */
const PARTNER_LOGO_COUNT = 21;

const partnerLogos = Array.from({ length: PARTNER_LOGO_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/partners/partner-${n}.png`,
    alt: `Insurance partner — logo ${i + 1}`,
  };
});

function PartnersSection() {
  return (
    <section
      className="mt-16 w-full rounded-2xl bg-[var(--brand-muted)] px-4 py-14 sm:px-8 sm:py-16"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <ScrollFlyIn from="bottom">
          <header className="text-center">
            <p className="text-sm font-bold tracking-wide text-[var(--brand-green)] sm:text-base">
              THEY BELIEVE IN US
            </p>
            <h2
              id="partners-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
            >
              Backed By Partners
            </h2>
          </header>
        </ScrollFlyIn>

        <ScrollFlyStagger
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          staggerMs={42}
        >
          {partnerLogos.map((logo) => (
            <div
              key={logo.src}
              className="group/partner relative flex h-[92px] items-center justify-center rounded-xl border border-zinc-200/80 bg-white px-4 py-5 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.04] motion-safe:hover:border-[var(--brand-green)]/45 motion-safe:hover:shadow-[0_16px_36px_rgba(47,54,70,0.12)] sm:h-[104px]"
            >
              <div className="relative h-14 w-full transition-transform duration-[400ms] motion-safe:group-hover/partner:scale-110 sm:h-16">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 200px, (min-width: 768px) 25vw, 45vw"
                />
              </div>
            </div>
          ))}
        </ScrollFlyStagger>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section
      className="mt-0 w-full bg-white pb-10 pt-2 sm:pb-12 sm:pt-4"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto max-w-[1200px] px-2 sm:px-4">
        <ScrollFlyIn from="bottom">
          <header className="text-center">
            <p className="text-sm font-bold tracking-wide text-[var(--brand-green)] sm:text-base">
              WHAT ARE WE DOING ?
            </p>
            <h2
              id="mission-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
            >
              The SPRY Mission
            </h2>
          </header>
        </ScrollFlyIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
          <ScrollFlyIn delayMs={0} from="bottom-right">
            <article className="group/mission relative flex min-h-0 flex-col overflow-hidden rounded-2xl bg-[#ECEEF2] p-6 pt-7 shadow-sm ring-1 ring-black/5 transition-all duration-500 motion-safe:hover:-translate-y-2 motion-safe:hover:bg-[var(--brand-dark)] motion-safe:hover:shadow-[0_28px_56px_rgba(0,0,0,0.45)] motion-safe:hover:ring-2 motion-safe:hover:ring-[var(--brand-green)]/55 sm:min-h-[320px] sm:p-8 sm:pt-8 md:min-h-[340px]">
            <span
              className="pointer-events-none absolute left-5 top-4 text-7xl font-extrabold leading-none text-white transition-all duration-500 motion-safe:group-hover/mission:scale-105 group-hover/mission:text-[#3a4160] sm:left-6 sm:text-8xl"
              aria-hidden
            >
              01
            </span>
            <div className="relative ml-auto flex h-12 w-12 items-center justify-center text-[#1A1F3C] transition-all duration-500 motion-safe:group-hover/mission:rotate-6 motion-safe:group-hover/mission:scale-110 group-hover/mission:text-white">
              <MissionCheckCirclesIcon className="h-11 w-11" />
            </div>
            <h3 className="relative mt-8 text-lg font-bold leading-snug text-[#1A1F3C] transition-colors duration-500 group-hover/mission:text-white sm:text-xl">
              Insurance Coverage You Can Trust
            </h3>
            <p className="relative mt-4 flex-1 text-left text-sm leading-[1.65] text-[#1A1F3C] transition-colors duration-500 group-hover/mission:text-white/95 sm:text-[15px]">
              As an independent insurance broker, we are able to shop multiple
              carriers to find you the right insurance coverage for your Individual
              and Organization needs. We work with some top companies who are
              professional expertise in product offerings so we can find you a
              reduced premium, saving you time and money.
            </p>
          </article>
          </ScrollFlyIn>

          <ScrollFlyIn delayMs={120} from="bottom">
            <article className="group/mission relative flex min-h-0 flex-col overflow-hidden rounded-2xl bg-[var(--brand-dark)] p-6 pt-7 shadow-md transition-all duration-500 motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-[0_28px_56px_rgba(0,0,0,0.45)] motion-safe:hover:ring-2 motion-safe:hover:ring-[var(--brand-green)]/55 sm:min-h-[320px] sm:p-8 sm:pt-8 md:min-h-[340px]">
            <span
              className="pointer-events-none absolute left-5 top-4 text-7xl font-extrabold leading-none text-[#3a4160] transition-transform duration-700 motion-safe:group-hover/mission:scale-105 sm:left-6 sm:text-8xl"
              aria-hidden
            >
              02
            </span>
            <div className="relative ml-auto flex h-12 w-12 items-center justify-center text-white transition-transform duration-300 motion-safe:group-hover/mission:-rotate-6 motion-safe:group-hover/mission:scale-110">
              <MissionNetworkIcon className="h-11 w-11" />
            </div>
            <h3 className="relative mt-8 text-lg font-bold leading-snug text-white sm:text-xl">
              Provide Real Value
            </h3>
            <p className="relative mt-4 flex-1 text-left text-sm leading-[1.65] text-white/95 sm:text-[15px]">
              At SPRY Insurance Brokers, we believe our success is dependent on our ability to
              provide real value to our customers. We don&apos;t thrive unless our
              customers are completely satisfied. We strive for your happiness, and
              we want you to spread the word about us. It&apos;s a win-win, and
              that&apos;s how we do business.
            </p>
          </article>
          </ScrollFlyIn>

          <ScrollFlyIn delayMs={240} from="bottom-left">
            <article className="group/mission relative flex min-h-0 flex-col overflow-hidden rounded-2xl bg-[#ECEEF2] p-6 pt-7 shadow-sm ring-1 ring-black/5 transition-all duration-500 motion-safe:hover:-translate-y-2 motion-safe:hover:bg-[var(--brand-dark)] motion-safe:hover:shadow-[0_28px_56px_rgba(0,0,0,0.45)] motion-safe:hover:ring-2 motion-safe:hover:ring-[var(--brand-green)]/55 sm:min-h-[320px] sm:p-8 sm:pt-8 md:min-h-[340px]">
            <span
              className="pointer-events-none absolute left-5 top-4 text-7xl font-extrabold leading-none text-white transition-all duration-500 motion-safe:group-hover/mission:scale-105 group-hover/mission:text-[#3a4160] sm:left-6 sm:text-8xl"
              aria-hidden
            >
              03
            </span>
            <div className="relative ml-auto flex h-12 w-12 items-center justify-center text-[#1A1F3C] transition-all duration-500 motion-safe:group-hover/mission:rotate-6 motion-safe:group-hover/mission:scale-110 group-hover/mission:text-white">
              <MissionShieldOutlineIcon className="h-11 w-11" />
            </div>
            <h3 className="relative mt-8 text-lg font-bold leading-snug text-[#1A1F3C] transition-colors duration-500 group-hover/mission:text-white sm:text-xl">
              We Do the Legwork
            </h3>
            <p className="relative mt-4 flex-1 text-left text-sm leading-[1.65] text-[#1A1F3C] transition-colors duration-500 group-hover/mission:text-white/95 sm:text-[15px]">
              With the ongoing changes in the insurance industry, the old school way
              of thinking is long gone. Instead of you worrying about finding the
              right coverage, let our team of experts do all the legwork for you.
              Get a quote for coverage today!
            </p>
          </article>
          </ScrollFlyIn>
        </div>
      </div>
    </section>
  );
}

function MissionCheckCirclesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
      <path
        d="M17 24l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MissionNetworkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="14" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="34" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M17.5 22.5 30 16M17.5 25.5 30 32M30 18l4-2M30 30l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MissionShieldOutlineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 8 38 14v12c0 10-6 18-14 22-8-4-14-12-14-22V14l10-6Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AboutSection() {
  return (
    <section
      className="mt-16 w-full bg-white pb-4 sm:mt-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1000px] px-2 sm:px-4">
        <ScrollFlyIn from="bottom">
          <header className="text-center">
            <p className="text-sm font-bold tracking-wide text-[var(--brand-green)] sm:text-base">
              ABOUT US
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
            >
              What is SPRY Insurance Brokers?
            </h2>
          </header>
        </ScrollFlyIn>

        <ScrollFlyStagger
          className="mt-10 space-y-5 text-left text-base leading-[1.6] text-[#7A869A]"
          staggerMs={90}
        >
          <p>
            <strong className="font-bold text-[#7A869A]">
              SPRY Insurance Brokers Pvt. Ltd.
            </strong>{" "}
            was established in December 2008. The company was introduced in India
            in 2024 in accordance with IRDAI regulations. Headquartered in Kolkata,
            SPRY focuses on serving clients across the eastern region with
            reliable broking services.
          </p>
          <p>
            We are committed to excellence in service delivery and maintain strong
            partnerships with reputable insurance companies across India, ensuring
            our customers access quality coverage and informed guidance.
          </p>
          <p>
            Through established market associations and a disciplined approach to
            claim resolution, our professional team brings deep expertise to help
            individuals and businesses navigate insurance with confidence.
          </p>
          <p>
            Our offerings span a wide range of products, including Health, Family,
            Travel, Car, Vehicle, Home, Business, and Project insurance; Term Life,
            Endowment, Money Back, and ULIP plans; as well as Marine, Personal
            Accident, Medical, and Liabilities insurance—so you can protect what
            matters most under one trusted broking relationship.
          </p>
        </ScrollFlyStagger>
      </div>
    </section>
  );
}

function CareerTestimonialSection() {
  return (
    <section
      className="mt-16 w-full sm:mt-20"
      aria-labelledby="career-testimonial-heading"
    >
      <div className="mx-auto max-w-[1200px] px-2 sm:px-4">
        <ScrollFlyIn from="bottom">
          <header className="text-center">
            <p className="text-sm font-bold tracking-wide text-[var(--brand-green)] sm:text-base">
              JOIN US &amp; HEAR FROM CLIENTS
            </p>
            <h2
              id="career-testimonial-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
            >
              Career &amp; testimonials
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#7A869A] sm:text-lg">
              Explore opportunities with our team, or read what customers say about
              working with SPRY Insurance Brokers.
            </p>
          </header>
        </ScrollFlyIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <ScrollFlyIn delayMs={0} from="bottom-right" className="min-h-0">
            <article className="group/cta relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl bg-[var(--brand-dark)] p-8 shadow-md ring-1 ring-black/10 transition-all duration-500 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_24px_48px_rgba(0,0,0,0.35)] sm:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_85%_15%,rgba(140,198,63,0.35),transparent_50%)]"
                aria-hidden
              />
              <p className="relative text-sm font-bold tracking-wide text-[var(--brand-green)]">
                CAREER
              </p>
              <h3 className="relative mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-[1.65rem]">
                Build your future with SPRY
              </h3>
              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-white/80 sm:text-base">
                We value people who care about clients and clear, honest broking. See
                open roles and how you can grow with us in Kolkata and beyond.
              </p>
              <Link
                href="/career"
                className="relative mt-8 inline-flex h-11 w-fit items-center justify-center rounded-lg bg-[#8cc63f] px-6 text-sm font-bold text-[#2f3646] shadow-[0_2px_12px_rgba(140,198,63,0.4)] transition hover:bg-[#9ad148] hover:shadow-[0_4px_18px_rgba(140,198,63,0.55)]"
              >
                View careers
              </Link>
            </article>
          </ScrollFlyIn>

          <ScrollFlyIn delayMs={140} from="bottom-left" className="min-h-0">
            <article className="group/cta relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-[var(--brand-muted)] p-8 shadow-sm ring-1 ring-black/5 transition-all duration-500 motion-safe:hover:-translate-y-1 motion-safe:hover:border-[var(--brand-green)]/35 motion-safe:hover:shadow-[0_20px_44px_rgba(47,54,70,0.1)] sm:p-10">
              <p className="text-sm font-bold tracking-wide text-[var(--brand-green)]">
                TESTIMONIALS
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[var(--brand-dark)] sm:text-[1.65rem]">
                Trusted by people like you
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#7A869A] sm:text-base">
                Real feedback on support, claims, and choosing the right cover with our
                team.
              </p>
              <blockquote className="mt-6 rounded-xl border border-zinc-200/80 bg-white/80 px-5 py-4 text-sm italic leading-relaxed text-[var(--brand-dark)] shadow-sm sm:text-[15px]">
                &ldquo;Quick support and fast policy issuance. Claim assistance was
                also helpful when I needed it.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-semibold text-zinc-500">
                — Sneha Verma, Car Insurance
              </p>
              <Link
                href="/testimonial"
                className="mt-6 inline-flex h-11 w-fit items-center justify-center rounded-lg border-2 border-[var(--brand-dark)] bg-white px-6 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white"
              >
                Read all testimonials
              </Link>
            </article>
          </ScrollFlyIn>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section
      className="mt-10 w-full rounded-2xl bg-[var(--brand-dark)] px-6 py-12 sm:px-10 sm:py-16"
      aria-labelledby="stats-heading"
    >
      <ScrollFlyIn from="bottom">
        <h2
          id="stats-heading"
          className="text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
        >
          The number says all !
        </h2>
      </ScrollFlyIn>

      <StatsAnimatedGrid className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        <ScrollFlyIn delayMs={0} from="bottom-right">
          <div className="group/stat flex flex-col items-center text-center transition-transform duration-300 motion-safe:hover:-translate-y-1">
          <div className="relative flex h-24 w-24 items-center justify-center transition-transform duration-300 motion-safe:group-hover/stat:scale-105">
            <BlobBg className="home-blob-live absolute inset-0 text-white/95" />
            <span className="relative text-[var(--brand-dark)] transition-transform duration-300 motion-safe:group-hover/stat:scale-110">
              <StatShieldPlusIcon className="h-12 w-12" />
            </span>
          </div>
          <CountUpNumber
            target={5000}
            suffix="+"
            delayMs={0}
            className="mt-6 text-4xl font-extrabold text-white transition-colors duration-300 group-hover/stat:text-[var(--brand-green)] sm:text-5xl"
          />
          <p className="mt-2 text-base font-normal text-white/90">
            Health Insurance
          </p>
        </div>
        </ScrollFlyIn>

        <ScrollFlyIn delayMs={130} from="bottom">
          <div className="group/stat flex flex-col items-center text-center transition-transform duration-300 motion-safe:hover:-translate-y-1">
          <div className="relative flex h-24 w-24 items-center justify-center transition-transform duration-300 motion-safe:group-hover/stat:scale-105">
            <BlobBg className="home-blob-live absolute inset-0 text-white/95" />
            <span className="relative text-[var(--brand-dark)] transition-transform duration-300 motion-safe:group-hover/stat:scale-110">
              <StatUmbrellaIcon className="h-12 w-12" />
            </span>
          </div>
          <CountUpNumber
            target={10000}
            suffix="+"
            delayMs={160}
            className="mt-6 text-4xl font-extrabold text-white transition-colors duration-300 group-hover/stat:text-[var(--brand-green)] sm:text-5xl"
          />
          <p className="mt-2 text-base font-normal text-white/90">
            General Insurance
          </p>
        </div>
        </ScrollFlyIn>

        <ScrollFlyIn delayMs={260} from="bottom-left">
          <div className="group/stat flex flex-col items-center text-center transition-transform duration-300 motion-safe:hover:-translate-y-1">
          <div className="relative flex h-24 w-24 items-center justify-center transition-transform duration-300 motion-safe:group-hover/stat:scale-105">
            <BlobBg className="home-blob-live absolute inset-0 text-white/95" />
            <span className="relative text-[var(--brand-dark)] transition-transform duration-300 motion-safe:group-hover/stat:scale-110">
              <StatLifeRenewIcon className="h-12 w-12" />
            </span>
          </div>
          <CountUpNumber
            target={10}
            suffix="Cr+"
            delayMs={320}
            className="mt-6 text-4xl font-extrabold text-white transition-colors duration-300 group-hover/stat:text-[var(--brand-green)] sm:text-5xl"
          />
          <p className="mt-2 text-base font-normal text-white/90">
            Claims
          </p>
        </div>
        </ScrollFlyIn>
      </StatsAnimatedGrid>
    </section>
  );
}

function BlobBg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M60 8c18 0 32 10 38 26 8 4 14 14 14 26 0 22-16 40-36 44-4 10-14 16-26 16-14 0-26-8-30-22C8 92 4 78 4 62c0-18 10-34 26-40C36 14 46 8 60 8Z" />
    </svg>
  );
}

function StatShieldPlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 6 38 12v14c0 12-6 22-14 26-8-4-14-14-14-26V12l10-6Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M24 18v12M18 24h12"
        stroke="var(--brand-green)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatUmbrellaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 9C14 9 6 16 5 24h38c-1-8-9-15-19-15Z"
        fill="var(--brand-green)"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M24 24v15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M15 39c4 3 14 3 18 0"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatLifeRenewIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M37 15a15 15 0 0 0-25 5M11 33a15 15 0 0 0 25-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M35 11v6h-6M13 37v-6h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 17 29 20v7.5c0 3.2-1.6 6.2-5 7.8-3.4-1.6-5-4.6-5-7.8V20l5-3Z"
        fill="var(--brand-green)"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 25.5 24 28l5.5-5.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
