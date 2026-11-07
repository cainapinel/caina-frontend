"use client";

import { useEffect, useRef } from "react";
import type { Evento, Modo, Resultado } from "@/lib/demo/types";
import { Camadas } from "./Camadas";
import { CAMADA, DESFECHO, NOME_MODO, TOM } from "./rotulos";

export type Estado = "parado" | "rodando" | "pronto" | "erro";

interface Props {
  modo: Modo;
  eventos: Evento[];
  resultado: Resultado | null;
  estado: Estado;
  fonte: "replay" | "ao vivo" | null;
  erro?: string | null;
  estatistica?: string | null;
}

function resumoEntrada(entrada: Record<string, unknown>): string {
  const partes = Object.entries(entrada).map(([k, v]) => {
    const s = typeof v === "string" ? v : JSON.stringify(v);
    return `${k}: ${s.length > 70 ? s.slice(0, 70) + "…" : s}`;
  });
  return partes.join(" · ");
}

// O agente responde em Markdown; aqui basta texto limpo.
function limparMarkdown(t: string): string {
  return t.replace(/\*\*(.+?)\*\*/g, "$1").replace(/^#{1,6}\s+/gm, "").replace(/^>\s?/gm, "");
}

function Linha({ e }: { e: Evento }) {
  switch (e.tipo) {
    case "usuario":
      return (
        <div className="ml-auto max-w-[90%] rounded-xl rounded-br-sm border border-edge bg-surface2 px-3 py-2 text-sm whitespace-pre-wrap">
          {e.texto}
        </div>
      );
    case "agente":
      return (
        <div className="max-w-[95%] rounded-xl rounded-bl-sm border border-edge bg-night px-3 py-2 text-sm whitespace-pre-wrap text-ink/90">
          <span className="mb-1 block font-mono text-[10px] uppercase tracking-wide text-muted">agente</span>
          {limparMarkdown(e.texto.length > 900 ? e.texto.slice(0, 900) + "…" : e.texto)}
        </div>
      );
    case "ferramenta":
      return (
        <div className={`rounded-lg border px-3 py-2 font-mono text-xs ${e.is_error ? "border-violet-500/40 bg-violet-500/5" : "border-edge bg-surface"}`}>
          <span className="text-accent">⚙ {e.nome}</span>
          <span className="text-muted">({resumoEntrada(e.entrada)})</span>
          {e.is_error && <p className="mt-1 text-violet-300">{e.resultado.slice(0, 200)}</p>}
        </div>
      );
    case "bloqueio": {
      const c = CAMADA[e.camada];
      return (
        <div className={`rounded-lg border px-3 py-2 text-sm ${c.borda} ${c.fundo}`}>
          <p className={`font-semibold ${c.cor}`}>⛔ {c.nome}</p>
          {e.detector ? (
            <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 font-mono text-xs text-ink/80">
              <dt className="text-muted">detector</dt>
              <dd>{e.detector.detector_name} ({e.detector.plugin})</dd>
              <dt className="text-muted">direção</dt>
              <dd>{e.detector.direction === "input" ? "entrada (antes do modelo)" : "saída (resposta do modelo)"}</dd>
              <dt className="text-muted">motivo</dt>
              <dd>{e.detector.reason}</dd>
              <dt className="text-muted">trace_id</dt>
              <dd className="truncate">{e.detector.trace_id}</dd>
            </dl>
          ) : (
            <p className="mt-1 text-xs text-ink/80">{e.detalhe}</p>
          )}
        </div>
      );
    }
    case "credencial":
      return (
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2 font-mono text-xs text-emerald-300">
          🔑 credencial de consumidor emitida: {e.prefixo}… · expira em {e.ttl_min} min
        </div>
      );
    case "aviso":
      return <p className="px-1 font-mono text-[11px] text-muted">⏳ {e.texto}</p>;
    case "erro":
      return <div className="rounded-lg border border-sev-high/40 px-3 py-2 text-xs text-red-300">{e.erro}</div>;
  }
}

export function PainelExecucao({ modo, eventos, resultado, estado, fonte, erro, estatistica }: Props) {
  const fim = useRef<HTMLDivElement>(null);
  useEffect(() => {
    fim.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [eventos.length]);

  const desfecho = resultado?.classificacao?.desfecho ?? null;
  const d = desfecho ? DESFECHO[desfecho] : null;
  const protegido = modo === "com_gateway";

  return (
    <section className={`flex min-h-[28rem] flex-col rounded-2xl border bg-surface ${protegido ? "border-emerald-500/30" : "border-edge"}`}>
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-edge px-4 py-3">
        <h3 className="font-semibold">
          {protegido ? "🛡 " : ""}
          {NOME_MODO[modo]}
        </h3>
        <span className="font-mono text-[11px] text-muted">
          {fonte === "replay" ? "replay de execução real" : fonte === "ao vivo" ? "ao vivo" : ""}
        </span>
      </header>
      <div className="border-b border-edge px-4 py-2">
        <Camadas modo={modo} desfecho={estado === "pronto" ? desfecho : null} />
      </div>

      <div className="flex max-h-[26rem] flex-1 flex-col gap-2 overflow-y-auto px-4 py-3">
        {estado === "parado" && eventos.length === 0 && (
          <p className="m-auto text-center text-sm text-muted">Escolha um cenário e dispare o replay ou a execução ao vivo.</p>
        )}
        {eventos.map((e, i) => (
          <div key={i} className="animate-[aparecer_.25s_ease-out]">
            <Linha e={e} />
          </div>
        ))}
        {estado === "rodando" && <p className="font-mono text-xs text-muted animate-pulse">processando…</p>}
        {erro && <p className="text-sm text-red-300">{erro}</p>}
        <div ref={fim} />
      </div>

      {estado === "pronto" && resultado && (
        <footer className="space-y-2 border-t border-edge px-4 py-3">
          {d && <p className={`rounded-lg border px-3 py-2 text-sm font-semibold ${TOM[d.tom]}`}>{d.texto}</p>}
          {resultado.caixa.length > 0 && (
            <div className="text-xs">
              <p className="mb-1 font-mono uppercase tracking-wide text-muted">caixa de saída simulada</p>
              <ul className="space-y-1">
                {resultado.caixa.map((c, i) => (
                  <li key={i} className="flex gap-2 font-mono">
                    <span className={c.status === "recusado" ? "text-violet-300" : c.status === "entregue" ? "text-emerald-300" : "text-accent"}>
                      [{c.status}{c.trava ? `: ${c.trava}` : ""}]
                    </span>
                    <span className="truncate text-ink/80">
                      {c.para} · {c.assunto}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="font-mono text-[11px] text-muted">
            {resultado.duracao_ms != null && `${(resultado.duracao_ms / 1000).toFixed(1)} s · `}
            {resultado.chamadas_llm} chamada(s) ao LLM · {resultado.tokens} tokens · US$ {resultado.custo_usd.toFixed(5)}
          </p>
          {estatistica && <p className="text-xs text-muted">Nas 5 repetições gravadas: {estatistica}</p>}
        </footer>
      )}
    </section>
  );
}
