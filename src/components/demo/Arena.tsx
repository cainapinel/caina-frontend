"use client";

import { useMemo, useState } from "react";
import type { Cenario, Modo, ResumoCenario, Rodada } from "@/lib/demo/types";
import { PainelExecucao } from "./PainelExecucao";
import { DESFECHO, owaspCurto } from "./rotulos";
import { useExecucao } from "./useExecucao";

function estatistica(resumo: ResumoCenario[], cenario: string, modo: Modo): string | null {
  const r = resumo.find((x) => x.cenario === cenario && x.modo === modo);
  if (!r) return null;
  return Object.entries(r.desfechos)
    .filter(([, n]) => n > 0)
    .map(([k, n]) => `${n}/${r.n} ${DESFECHO[k as keyof typeof DESFECHO]?.texto.toLowerCase() ?? k}`)
    .join(" · ");
}

function Carta({ c, ativo, onClick }: { c: Cenario; ativo: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group flex h-full flex-col rounded-xl border p-3 text-left transition-colors ${
        ativo ? "border-accent bg-accent-soft" : "border-edge bg-surface hover:border-accent/50"
      }`}
    >
      <span className="font-mono text-xs text-accent">{c.id}</span>
      <span className="mt-1 text-sm font-semibold leading-snug">{c.nome}</span>
      {c.owasp.length > 0 && (
        <span className="mt-auto flex flex-wrap gap-1 pt-2">
          {c.owasp.map((o) => (
            <span key={o} className="rounded border border-edge px-1.5 py-0.5 font-mono text-[10px] text-muted">
              {owaspCurto(o)}
            </span>
          ))}
        </span>
      )}
    </button>
  );
}

export function Arena({ rodada, token }: { rodada: Rodada; token: string }) {
  const [grupo, setGrupo] = useState<"ataques" | "controles">("ataques");
  const lista = rodada.catalogo[grupo];
  const [sel, setSel] = useState<string>(rodada.catalogo.ataques[1]?.id ?? "A1");
  const cenario = useMemo(
    () => [...rodada.catalogo.ataques, ...rodada.catalogo.controles].find((c) => c.id === sel)!,
    [rodada, sel],
  );
  const sem = useExecucao();
  const com = useExecucao();
  const rodando = sem.estado === "rodando" || com.estado === "rodando";

  function escolher(id: string) {
    setSel(id);
    sem.limpar();
    com.limpar();
  }

  function tocarReplay() {
    const g = rodada.replay[sel];
    if (!g) return;
    sem.replay(g.sem_defesa);
    com.replay(g.com_gateway);
  }

  function aoVivo() {
    void sem.aoVivo({ modo: "sem_defesa", cenario_id: sel }, token);
    void com.aoVivo({ modo: "com_gateway", cenario_id: sel }, token);
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {(["ataques", "controles"] as const).map((g) => (
          <button
            key={g}
            onClick={() => {
              setGrupo(g);
              escolher(rodada.catalogo[g][0].id);
            }}
            className={`rounded-lg border px-3 py-1.5 text-sm ${grupo === g ? "border-accent text-accent" : "border-edge text-muted hover:text-ink"}`}
          >
            {g === "ataques" ? `Ataques (${rodada.catalogo.ataques.length})` : `Pedidos legítimos (${rodada.catalogo.controles.length})`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {lista.map((c) => (
          <Carta key={c.id} c={c} ativo={c.id === sel} onClick={() => escolher(c.id)} />
        ))}
      </div>

      <div className="grid gap-4 rounded-2xl border border-edge bg-surface p-5 md:grid-cols-[1fr_auto]">
        <div className="space-y-2 text-sm">
          <h3 className="text-lg font-semibold">
            <span className="font-mono text-accent">{cenario.id}</span> {cenario.nome}
          </h3>
          {cenario.tipo === "ataque" ? (
            <>
              <p><span className="text-muted">Objetivo do atacante:</span> {cenario.objetivo}</p>
              <p><span className="text-muted">Vetor:</span> {cenario.vetor}</p>
              {cenario.impacto && <p className="text-accent/90"><span className="text-muted">Impacto de negócio:</span> {cenario.impacto}</p>}
              {cenario.observacao && <p className="text-xs text-muted">{cenario.observacao}</p>}
            </>
          ) : (
            <p className="text-muted">Pedido legítimo: mede falsos positivos. O esperado é a tarefa ser concluída nos dois modos.</p>
          )}
          <details className="text-xs">
            <summary className="cursor-pointer text-muted hover:text-ink">Entrada usada ({cenario.turnos.length} turno{cenario.turnos.length > 1 ? "s" : ""})</summary>
            <ol className="mt-2 list-decimal space-y-1 pl-5 font-mono text-ink/80">
              {cenario.turnos.map((t, i) => <li key={i} className="whitespace-pre-wrap">{t}</li>)}
            </ol>
          </details>
        </div>
        <div className="flex flex-row gap-2 md:flex-col md:justify-center">
          <button onClick={tocarReplay} disabled={rodando} className="rounded-lg border border-edge bg-surface2 px-4 py-2 text-sm font-semibold hover:border-accent disabled:opacity-50">
            ▶ Replay gravado
          </button>
          <button onClick={aoVivo} disabled={rodando} className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-night hover:bg-accent/90 disabled:opacity-50">
            ⚡ Executar ao vivo
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {([["sem_defesa", sem], ["com_gateway", com]] as const).map(([modo, h]) => (
          <PainelExecucao
            key={modo}
            modo={modo}
            eventos={h.eventos}
            resultado={h.resultado}
            estado={h.estado}
            fonte={h.fonte}
            erro={h.erro}
            estatistica={estatistica(rodada.resumo.por_cenario, sel, modo)}
          />
        ))}
      </div>
    </div>
  );
}
