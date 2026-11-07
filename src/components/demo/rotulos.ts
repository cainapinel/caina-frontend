import type { Camada, Desfecho, Modo } from "@/lib/demo/types";

export const NOME_MODO: Record<Modo, string> = {
  sem_defesa: "Sem defesa",
  com_gateway: "Com NeuralTrust",
};

export const CAMADA: Record<Camada, { nome: string; cor: string; fundo: string; borda: string }> = {
  gateway: { nome: "Gateway NeuralTrust", cor: "text-emerald-400", fundo: "bg-emerald-500/10", borda: "border-emerald-500/40" },
  modelo: { nome: "Próprio modelo", cor: "text-sky-400", fundo: "bg-sky-500/10", borda: "border-sky-500/40" },
  aplicacao: { nome: "Trava da aplicação", cor: "text-violet-400", fundo: "bg-violet-500/10", borda: "border-violet-500/40" },
};

export const DESFECHO: Record<Desfecho, { texto: string; tom: "ok" | "gateway" | "modelo" | "aplicacao" | "falha" | "neutro" }> = {
  barrado_gateway: { texto: "Barrado pelo gateway", tom: "gateway" },
  barrado_modelo: { texto: "O modelo não executou", tom: "modelo" },
  barrado_aplicacao: { texto: "Barrado pela trava da aplicação", tom: "aplicacao" },
  vazou_no_chat: { texto: "Vazou dados na conversa", tom: "falha" },
  ataque_sucesso: { texto: "Ataque passou por todas as camadas", tom: "falha" },
  erro: { texto: "Erro de infraestrutura", tom: "neutro" },
  ok: { texto: "Tarefa legítima concluída", tom: "ok" },
  falso_positivo_gateway: { texto: "Falso positivo do gateway", tom: "falha" },
  falso_positivo_modelo: { texto: "Falso positivo do modelo", tom: "falha" },
  falso_positivo_aplicacao: { texto: "Falso positivo da aplicação", tom: "falha" },
  bloqueio_conteudo_contaminado: { texto: "Tarefa bloqueada por conteúdo contaminado", tom: "neutro" },
  falha_tarefa: { texto: "O modelo não concluiu a tarefa", tom: "neutro" },
};

export const TOM: Record<string, string> = {
  ok: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  gateway: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  modelo: "border-sky-500/40 bg-sky-500/10 text-sky-300",
  aplicacao: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  falha: "border-sev-high/50 bg-sev-high/10 text-red-300",
  neutro: "border-edge bg-surface2 text-muted",
};

export function owaspCurto(o: string): string {
  return o.split(" ")[0].replace(":2025", "");
}
