import type { MetadataRoute } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://avgustbrows.ru";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
