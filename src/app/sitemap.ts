import type { MetadataRoute } from "next";

/**
 * The live site URL is set at deploy time via NEXT_PUBLIC_SITE_URL.
 * Until then the sitemap is empty rather than pointing at a guessed URL.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (!base) return [];
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
