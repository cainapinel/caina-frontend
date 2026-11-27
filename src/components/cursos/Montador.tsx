"use client";

import { useState } from "react";
import { Copiar } from "./Copiar";

const campos = [
  { id: "papel", letra: "P", nome: "Papel", dica: "Quem a IA deve ser?", exemplo: "Aja como uma secretária executiva experiente." },
  {
    id: "contexto",
    letra: "C",
    nome: "Contexto",
    dica: "Qual é a situação?",
    exemplo: "A Dra. Helena Prado, diretora comercial, precisa remarcar a reunião de quinta-feira com a Alfa Embalagens por causa de uma viagem.",
  },
  { id: "tarefa", letra: "T", nome: "Tarefa", dica: "O que exatamente fazer?", exemplo: "Escreva um e-mail pedindo para remarcar a reunião." },
  { id: "formato", letra: "F", nome: "Formato", dica: "Como entregar a resposta?", exemplo: "Até cinco linhas, com três opções de horário na semana seguinte, em lista." },
  { id: "regras", letra: "R", nome: "Regras", dica: "Tom, limites, o que evitar", exemplo: "Tom cordial e formal. Não mencione o motivo da viagem." },
] as const;

type Valores = Record<(typeof campos)[number]["id"], string>;
const vazio: Valores = { papel: "", contexto: "", tarefa: "", formato: "", regras: "" };

/** Montador do pedido P-C-T-F-R: o aluno preenche as partes e copia o pedido pronto. */
export function Montador() {
  const [v, setV] = useState<Valores>(vazio);
  const pedido = campos
    .map((c) => v[c.id].trim())
    .filter(Boolean)
    .join(" ");

  return (
    <>
    <p className="hidden rounded-xl border border-edge p-4 text-sm print:block">
      No site, o montador de pedido permite preencher as cinco partes e copiar o pedido pronto:
      caina.pinel.com.br/cursos/ia-no-dia-a-dia/roteiro#modulo-3
    </p>
    <div className="rounded-2xl border border-accent/30 bg-surface p-5 print:hidden">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs text-accent">montador de pedido · P-C-T-F-R</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setV(Object.fromEntries(campos.map((c) => [c.id, c.exemplo])) as Valores)}
            className="rounded-md border border-edge px-2.5 py-1 font-mono text-[11px] text-muted hover:border-accent/60 hover:text-accent"
          >
            preencher com exemplo
          </button>
          <button
            type="button"
            onClick={() => setV(vazio)}
            className="rounded-md border border-edge px-2.5 py-1 font-mono text-[11px] text-muted hover:border-accent/60 hover:text-accent"
          >
            limpar
          </button>
        </div>
      </div>
      <div className="mt-4 grid gap-3">
        {campos.map((c) => (
          <label key={c.id} className="grid gap-1 md:grid-cols-[9rem_1fr] md:items-start md:gap-3">
            <span className="pt-2 text-sm">
              <span className="font-mono font-bold text-accent">{c.letra}</span> {c.nome}
              <span className="block text-xs text-muted">{c.dica}</span>
            </span>
            <textarea
              rows={c.id === "contexto" ? 3 : 2}
              value={v[c.id]}
              placeholder={c.exemplo}
              onChange={(e) => setV({ ...v, [c.id]: e.target.value })}
              className="w-full resize-y rounded-lg border border-edge bg-night px-3 py-2 text-sm leading-relaxed text-ink placeholder:text-muted/50 focus:border-accent/60 focus:outline-none"
            />
          </label>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-edge bg-night p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted">seu pedido</p>
          {pedido && <Copiar texto={pedido} rotulo="copiar pedido" />}
        </div>
        <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink/90">
          {pedido || <span className="text-muted">Preencha as partes acima. O pedido aparece aqui, pronto para colar na IA.</span>}
        </p>
      </div>
    </div>
    </>
  );
}
