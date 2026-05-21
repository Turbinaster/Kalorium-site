import type { MetadataRoute } from "next";

import type { PagePath } from "@/data/page-meta";
import { SITE_URL } from "@/data/site";

const now = new Date();

const routes: Array<{
  path: PagePath;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/calculator", changeFrequency: "weekly", priority: 0.9 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.9 },
  { path: "/photo", changeFrequency: "monthly", priority: 0.8 },
  { path: "/diary", changeFrequency: "monthly", priority: 0.8 },
  { path: "/download", changeFrequency: "weekly", priority: 0.8 },
  { path: "/reviews", changeFrequency: "monthly", priority: 0.6 },
  { path: "/updates", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contacts", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/account-deletion", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
