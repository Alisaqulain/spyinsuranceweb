import { getSiteUrl } from "../lib/site";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "SPRY INSURANCE PVT LTD",
  description:
    "Insurance broking in Kolkata — health, vehicle, general, and life insurance with claim assistance.",
  url: getSiteUrl(),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
} as const;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SPRY INSURANCE PVT LTD",
  url: getSiteUrl(),
  publisher: {
    "@type": "Organization",
    name: "SPRY INSURANCE PVT LTD",
    url: getSiteUrl(),
  },
} as const;

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
