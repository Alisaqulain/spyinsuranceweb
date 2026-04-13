import type { MetadataRoute } from "next";
import { insuranceSections } from "./lib/insurance-products";
import { getSiteUrl } from "./lib/site";

const STATIC_PATHS = [
  "/",
  "/career",
  "/contact",
  "/testimonial",
  "/claim-assistance",
  "/become-a-posp",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const productPaths = insuranceSections.flatMap((s) =>
    s.items.map((item) => item.href)
  );
  const unique = new Set<string>([...STATIC_PATHS, ...productPaths]);

  return [...unique].map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/products/") ? 0.8 : 0.7,
  }));
}
