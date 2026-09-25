import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Every real, indexable route on the site. Keep in sync with the top-level
 * pages under src/app/ — add a line here whenever a new page ships.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/programs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sdgs", priority: 0.7, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
    { path: "/get-involved", priority: 0.9, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.6, changeFrequency: "weekly" },
    { path: "/shop", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
