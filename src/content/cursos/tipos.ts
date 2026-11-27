/**
 * Tipos do material de cursos. O mesmo conteúdo alimenta o roteiro de estudo
 * (página de leitura e impressão) e os slides de apoio.
 *
 * Nos textos, **negrito** vira <strong>. Nada além disso é interpretado.
 */

export type Bloco =
  | { tipo: "p"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "lista"; itens: string[] }
  | { tipo: "passos"; itens: string[] }
  | { tipo: "prompt"; titulo: string; texto: string; nota?: string }
  | { tipo: "antesDepois"; antes: string; depois: string; porque: string }
  | { tipo: "dica"; titulo?: string; texto: string }
  | { tipo: "cuidado"; titulo?: string; texto: string }
  | { tipo: "tabela"; colunas: string[]; linhas: string[][] }
  | { tipo: "montador" }
  | { tipo: "chamada"; titulo: string; texto: string; href: string; rotulo: string };

export interface Exercicio {
  titulo: string;
  enunciado: string;
  passos?: string[];
  entrega?: string;
}

export interface Modulo {
  numero: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  duracao: string;
  objetivos: string[];
  blocos: Bloco[];
  exercicios: Exercicio[];
  checklist: string[];
}

export interface Curso {
  slug: string;
  titulo: string;
  nivel: string;
  subtitulo: string;
  resumo: string;
  publico: string[];
  formato: { rotulo: string; valor: string }[];
  preRequisitos: string[];
  resultados: string[];
  comoEstudar: string[];
  personagens: string;
  modulos: Modulo[];
  glossario: { termo: string; definicao: string }[];
  colinha: { titulo: string; itens: string[] }[];
  atualizadoEm: string;
}

export type SlideCurso = { id: string; modulo?: number; notas: string } & (
  | { tipo: "capa" }
  | { tipo: "abertura"; modulo: number }
  | { tipo: "topicos"; kicker?: string; titulo: string; itens: string[]; destaque?: string }
  | { tipo: "cards"; kicker?: string; titulo: string; cards: { titulo: string; texto: string }[] }
  | { tipo: "tabela"; kicker?: string; titulo: string; colunas: string[]; linhas: string[][] }
  | { tipo: "prompt"; kicker?: string; titulo: string; texto: string; legenda?: string }
  | { tipo: "antesDepois"; kicker?: string; titulo: string; antes: string; depois: string }
  | { tipo: "frase"; texto: string; apoio?: string }
  | { tipo: "exercicio"; titulo: string; itens: string[] }
  | { tipo: "fim" }
);

export interface MaterialConsulta {
  apresentacao: string;
  /** Título e apoio da seção do modelo para preencher (padrão: Kit IA do introdutório). */
  modeloTitulo?: string;
  modeloSub?: string;
  categorias: { id: string; titulo: string; pedidos: { titulo: string; texto: string }[] }[];
  ajustes: string[];
  antesDeEnviar: string[];
  plano30Dias: { periodo: string; foco: string; tarefas: string[] }[];
  modeloKit: { secao: string; campos: string[] }[];
}

export interface Download {
  rotulo: string;
  descricao: string;
  arquivo: string;
  /** Página do site da qual o PDF é gerado (scripts/pdf-materiais.sh). */
  origem: string;
}

export interface ProjetoFinal {
  titulo: string;
  resumo: string;
  cenario: string[];
  /** E-mail fictício da diretora que abre o projeto. */
  pedido: { de: string; assunto: string; corpo: string };
  arquivos: Download[];
  identidadeVisual: { cores: { nome: string; hex: string; uso: string }[]; fontes: string[]; observacao: string };
  etapas: { titulo: string; descricao: string; tarefas: string[]; entrega: string }[];
  entregaveis: string[];
  regras: string[];
  /** Critérios de avaliação: peso em pontos e o que é insuficiente, bom e excelente. */
  rubrica: { criterio: string; peso: number; niveis: [string, string, string] }[];
  checklistEntrega: string[];
}
