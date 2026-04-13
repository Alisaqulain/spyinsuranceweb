import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { Navbar } from "./components/Navbar";
import { getSiteUrl } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SPRY INSURANCE PVT LTD | Health, Vehicle & Life Insurance Kolkata",
    template: "%s | SPRY INSURANCE PVT LTD",
  },
  description:
    "SPRY INSURANCE PVT LTD — IRDAI-licensed insurance broking in Kolkata. Health, vehicle, general, and life insurance; quotes, claim assistance, and expert guidance across India.",
  keywords: [
    "insurance broker Kolkata",
    "health insurance India",
    "car insurance",
    "two wheeler insurance",
    "life insurance",
    "travel insurance",
    "claim assistance",
    "SPRY INSURANCE PVT LTD",
  ],
  authors: [{ name: "SPRY INSURANCE PVT LTD" }],
  creator: "SPRY INSURANCE PVT LTD",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "SPRY INSURANCE PVT LTD",
    title: "SPRY INSURANCE PVT LTD | Insurance Broking Kolkata",
    description:
      "Compare health, motor, and life plans with clear advice. Claim assistance and coverage across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPRY INSURANCE PVT LTD | Insurance Broking",
    description:
      "Health, vehicle, general & life insurance — Kolkata-based broking with nationwide support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "insurance",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#2f3646" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-white font-sans text-[var(--foreground)]">
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
