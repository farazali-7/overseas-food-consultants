import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

/**
 * Next generates /robots.txt from this at build time.
 *
 * A file rather than a static /public/robots.txt so the sitemap URL is derived
 * from the same `siteConfig.url` as `metadataBase` — a hardcoded copy is a
 * second source of truth that will eventually disagree with the first.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
