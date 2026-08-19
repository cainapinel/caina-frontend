import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://caina.pinel.com.br",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://caina.pinel.com.br/vestigio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
