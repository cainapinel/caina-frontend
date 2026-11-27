import { iaNoDiaADia } from "./ia-no-dia-a-dia";
import { consultaIaNoDiaADia } from "./ia-no-dia-a-dia-consulta";
import { slidesIaNoDiaADia } from "./ia-no-dia-a-dia-slides";
import type { Curso, Download, MaterialConsulta, SlideCurso } from "./tipos";

export interface CursoRegistrado {
  curso: Curso;
  slides: SlideCurso[];
  consulta: MaterialConsulta;
  /** PDFs gerados por scripts/pdf-materiais.sh e servidos de public/downloads. */
  downloads: Download[];
}

function downloadsPadrao(slug: string): Download[] {
  return [
    {
      rotulo: "Apostila",
      descricao: "O roteiro de estudo completo, com exercícios, checklists, glossário e colinha.",
      arquivo: `/downloads/${slug}-apostila.pdf`,
      origem: `/cursos/${slug}/roteiro`,
    },
    {
      rotulo: "Slides",
      descricao: "Um slide por página, com a explicação embaixo de cada um.",
      arquivo: `/downloads/${slug}-slides.pdf`,
      origem: `/cursos/${slug}/slides/impressao`,
    },
    {
      rotulo: "Pedidos prontos",
      descricao: "A coleção de pedidos para consulta rápida, checklist de envio, plano de 30 dias e modelo do Kit IA.",
      arquivo: `/downloads/${slug}-pedidos-prontos.pdf`,
      origem: `/cursos/${slug}/pedidos`,
    },
  ];
}

/** Catálogo de cursos do site. Para um curso novo: crie conteúdo, slides e consulta e registre aqui. */
export const cursos: CursoRegistrado[] = [
  {
    curso: iaNoDiaADia,
    slides: slidesIaNoDiaADia,
    consulta: consultaIaNoDiaADia,
    downloads: downloadsPadrao(iaNoDiaADia.slug),
  },
];

export function buscarCurso(slug: string) {
  return cursos.find((c) => c.curso.slug === slug);
}

/** Posição (1-based, para o #n do Deck) do slide de abertura de cada módulo. */
export function slideDoModulo(slides: SlideCurso[], modulo: number): number {
  return slides.findIndex((s) => s.tipo === "abertura" && s.modulo === modulo) + 1;
}
