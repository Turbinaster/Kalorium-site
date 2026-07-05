import type { MetadataRoute } from "next";

import { SITE_URL } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const siteHost = new URL(SITE_URL).hostname;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: siteHost,
  };
}
