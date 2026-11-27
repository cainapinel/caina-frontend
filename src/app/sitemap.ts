import type { MetadataRoute } from "next";
import { cursos } from "@/content/cursos";

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
    {
      url: "https://caina.pinel.com.br/cursos",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...cursos.flatMap(({ curso, projeto }) =>
      ["", "/roteiro", "/slides", "/pedidos", ...(projeto ? ["/projeto"] : [])].map((sufixo) => ({
        url: `https://caina.pinel.com.br/cursos/${curso.slug}${sufixo}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: sufixo ? 0.6 : 0.8,
      })),
    ),
  ];
}
