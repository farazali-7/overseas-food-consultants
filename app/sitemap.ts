import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

/**
 * Next generates /sitemap.xml from this at build time.
 *
 * One route today, because one route exists. The homepage's sections are
 * fragments (#services, #industries), and fragments are deliberately NOT
 * listed: a sitemap enumerates documents, not positions within one. Listing
 * them invites a crawler to treat six anchors as six competing pages and split
 * the ranking signal across them.
 *
 * When the Services/Industries/About/Contact pages land, add them here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
