import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://avgustbrows.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${domain}`, priority: 1.0 },
    { url: `${domain}/uslugi`, priority: 0.9 },
    { url: `${domain}/price`, priority: 0.8 },
    { url: `${domain}/about`, priority: 0.7 },
    { url: `${domain}/courses`, priority: 0.8 },
    { url: `${domain}/otzyvy`, priority: 0.6 },
    { url: `${domain}/contacts`, priority: 0.8 },
    { url: `${domain}/blog`, priority: 0.5 },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));

  const servicePages = services.map((s) => ({
    url: `${domain}/uslugi/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
