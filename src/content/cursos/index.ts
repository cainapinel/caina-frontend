import { iaNoDiaADia } from "./ia-no-dia-a-dia";
import { consultaIaNoDiaADia } from "./ia-no-dia-a-dia-consulta";
import { slidesIaNoDiaADia } from "./ia-no-dia-a-dia-slides";
import { iaIntermediario } from "./ia-intermediario";
import { consultaIaIntermediario } from "./ia-intermediario-consulta";
import { projetoIaIntermediario } from "./ia-intermediario-projeto";
import { slidesIaIntermediario } from "./ia-intermediario-slides";
import type { Curso, Download, MaterialConsulta, ProjetoFinal, SlideCurso } from "./tipos";

export interface CursoRegistrado {
  curso: Curso;
  slides: SlideCurso[];
  consulta: MaterialConsulta;
  /** PDFs gerados por scripts/pdf-materiais.sh e servidos de public/downloads. */
  downloads: Download[];
  projeto?: ProjetoFinal;
  /** Planilhas e arquivos usados nos exercícios (public/downloads). */
  arquivosPratica?: Download[];
}

function downloadsPadrao(slug: string, comProjeto = false): Download[] {
  const lista: Download[] = [
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
      descricao: "A coleção de pedidos para consulta rápida e os modelos para preencher.",
      arquivo: `/downloads/${slug}-pedidos-prontos.pdf`,
      origem: `/cursos/${slug}/pedidos`,
    },
  ];
  if (comProjeto) {
    lista.push({
      rotulo: "Projeto final",
      descricao: "O enunciado do projeto, as etapas, as entregas e os critérios de avaliação.",
      arquivo: `/downloads/${slug}-projeto-final.pdf`,
      origem: `/cursos/${slug}/projeto`,
    });
  }
  return lista;
}

/** Catálogo de cursos do site, na ordem da trilha. Para um curso novo: crie o conteúdo e registre aqui. */
export const cursos: CursoRegistrado[] = [
  {
    curso: iaNoDiaADia,
    slides: slidesIaNoDiaADia,
    consulta: consultaIaNoDiaADia,
    downloads: downloadsPadrao(iaNoDiaADia.slug),
  },
  {
    curso: iaIntermediario,
    slides: slidesIaIntermediario,
    consulta: consultaIaIntermediario,
    downloads: downloadsPadrao(iaIntermediario.slug, true),
    projeto: projetoIaIntermediario,
    arquivosPratica: projetoIaIntermediario.arquivos,
  },
];

export function buscarCurso(slug: string) {
  return cursos.find((c) => c.curso.slug === slug);
}

/** Posição (1-based, para o #n do Deck) do slide de abertura de cada módulo. */
export function slideDoModulo(slides: SlideCurso[], modulo: number): number {
  return slides.findIndex((s) => s.tipo === "abertura" && s.modulo === modulo) + 1;
}
