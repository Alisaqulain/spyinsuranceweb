import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
  { href: "/testimonial", label: "Testimonial" },
];

export function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-[82px] w-full max-w-[1400px] items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-14 w-44 sm:h-14 sm:w-48">
            <Image
              src="/logo-removebg-preview.png"
              alt="SPRY Insurance Brokers Pvt. Ltd."
              fill
              priority
              className="object-contain object-left"
              sizes="(min-width: 640px) 192px, 176px"
            />
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-10 text-[13px] font-semibold text-zinc-700 md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-zinc-950">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/claim-assistance"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#8cc63f] px-4 text-[13px] font-semibold text-[#2f3646] shadow-[0_2px_14px_rgba(140,198,63,0.5)] ring-1 ring-[#7ab835] transition hover:bg-[#9ad148] hover:shadow-[0_4px_18px_rgba(140,198,63,0.6)]"
          >
            Claim Assistance
          </Link>
        </div>
      </div>
      <div className="h-px w-full bg-zinc-200/80" />
    </header>
  );
}
