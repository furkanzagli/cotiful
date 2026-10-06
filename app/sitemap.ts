import { siteUrl } from "@/lib/config";
import type { MetadataRoute } from "next";
import { categories, products, posts } from "@/lib/catalog";

const origin = siteUrl;
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/about-us", "/manufacturer", "/products", "/collections", "/blog", "/faq", "/contact"];
  const routes = [
    ...fixed.map((path) => ({ url: `${origin}${path}/`, lastModified: new Date("2026-10-06"), changeFrequency: (path === "" || path === "/collections" || path === "/products" ? "weekly" : "monthly") as "weekly" | "monthly", priority: path === "" ? 1 : 0.75 })),
    ...categories.map((item) => ({ url: `${origin}/category/${item.slug}/`, lastModified: new Date("2026-10-06"), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...products.map((item) => ({ url: `${origin}/product/${item.slug}/`, lastModified: new Date("2026-10-06"), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...posts.map((item) => ({ url: `${origin}/blog/${item.slug}/`, lastModified: new Date(item.date), changeFrequency: "monthly" as const, priority: 0.65 })),
  ];
  return routes;
}
