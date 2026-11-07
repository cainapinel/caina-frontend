"use client";

import { useMemo, useState } from "react";
import type { Rodada } from "@/lib/demo/types";
import { owaspCurto } from "./rotulos";

// Simulador: liga e desliga detectores e mostra, para cada ataque, o que acontece.
// Não reconfigura o gateway real: usa a evidência das execuções gravadas.
//  - detector que cobre o ataque ligado + Enforce -> barrado pelo gateway (observado ou inferido)
//  - nenhum ligado (ou Observe) -> o resultado medido no modo sem defesa

type Risco = "gateway" | "aplicacao" | "modelo" | "exposto";

const RISCO: Record<Risco, { rotulo: string; classe: string; nota: string }> = {
  gateway: { rotulo: "Protegido pela NeuralTrust", classe: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300", nota: "bloqueio determinístico, com evidência" },
  aplicacao: { rotulo: "Contido pela última trava", classe: "border-violet-500/40 bg-violet-500/10 text-violet-300", nota: "o agente tentou; só o código da ferramenta segurou" },
  modelo: { rotulo: "Depende do modelo", classe: "border-sky-500/40 bg-sky-500/10 text-sky-300", nota: "sem garantia: muda com o modelo, o prompt e a versão" },
  exposto: { rotulo: "Dados expostos", classe: "border-sev-high/50 bg-sev-high/10 text-red-300", nota: "o ataque atingiu o objetivo" },
};

const PRESETS = [
  { nome: "Sem NeuralTrust", ligados: [] as string[] },
  { nome: "Só Prompt Guard", ligados: ["Jailbreak — balanced"] },
  { nome: "Configuração da demo", ligados: null },
];

function semDefesa(rodada: Rodada, id: string): { risco: Risco; texto: string } {
  const r = rodada.resumo.por_cenario.find((x) => x.cenario === id && x.modo === "sem_defesa");
  if (!r) return { risco: "modelo", texto: "sem dados" };
  const d = r.desfechos;
  const expostos = (d.vazou_no_chat ?? 0) + (d.ataque_sucesso ?? 0);
  if (expostos > 0) {
    const onde = d.vazou_no_chat ? "na conversa" : "por e-mail";
    return { risco: "exposto", texto: `vazou ${onde} em ${expostos}/${r.n} execuções sem defesa` };
  }
  if ((d.barrado_aplicacao ?? 0) > 0) return { risco: "aplicacao", texto: `o agente tentou em ${d.barrado_aplicacao}/${r.n}; a trava da ferramenta recusou` };
  return { risco: "modelo", texto: `o modelo recusou ou não executou em ${d.barrado_modelo ?? 0}/${r.n}` };
}

function Interruptor({ ligado, onClick, rotulo }: { ligado: boolean; onClick: () => void; rotulo: string }) {
  return (
    <button
      role="switch"
      aria-checked={ligado}
      aria-label={rotulo}
      onClick={onClick}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${ligado ? "bg-emerald-500" : "bg-edge"}`}
    >
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-ink transition-all ${ligado ? "left-[1.375rem]" : "left-0.5"}`} />
    </button>
  );
}

export function SimuladorPoliticas({ rodada }: { rodada: Rodada }) {
  const todos = rodada.detectores.map((d) => d.nome);
  const [ligados, setLigados] = useState<Set<string>>(new Set(todos));
  const [enforce, setEnforce] = useState(true);

  const linhas = useMemo(
    () =>
      rodada.catalogo.ataques.map((a) => {
        const cobertura = rodada.cobertura[a.id] ?? [];
        const ativos = cobertura.filter((c) => ligados.has(c.detector));
        const base = semDefesa(rodada, a.id);
        if (ativos.length && enforce) {
          const c = ativos[0];
          const texto =
            c.base === "observado"
              ? `barrado por "${c.detector}" em ${c.vezes}/${c.de} execuções`
              : `barrado por "${c.detector}" (inferido: na rodada, outro detector agiu antes)`;
          return { a, risco: "gateway" as Risco, texto, nota: null as string | null };
        }
        let nota: string | null = null;
        if (ativos.length && !enforce) nota = `detectado e registrado no Activity por "${ativos[0].detector}", sem bloquear (Observe)`;
        else if (!cobertura.length) nota = "fora do escopo do gateway: injeção de cabeçalho é papel da aplicação";
        else if (ligados.size > 0) nota = "nenhum detector ligado cobre este ataque";
        return { a, risco: base.risco, texto: base.texto, nota };
      }),
    [rodada, ligados, enforce],
  );

  const conta = (r: Risco) => linhas.filter((l) => l.risco === r).length;
  const visiveis = linhas.filter((l) => (rodada.cobertura[l.a.id] ?? []).some((c) => ligados.has(c.detector))).length;

  function alternar(nome: string) {
    setLigados((s) => {
      const n = new Set(s);
      if (n.has(nome)) n.delete(nome);
      else n.add(nome);
      return n;
    });
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[19rem_1fr]">
      <aside className="space-y-3">
        <div className="rounded-2xl border border-edge bg-surface p-4">
          <p className="text-xs text-muted">Política na TrustGuard</p>
          <p className="font-semibold">Agente e-mail — demo</p>
          <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-edge bg-night px-3 py-2 text-sm">
            <span>
              Modo: <strong className={enforce ? "text-emerald-300" : "text-accent"}>{enforce ? "Enforce" : "Observe"}</strong>
              <span className="block text-xs text-muted">{enforce ? "bloqueia" : "só registra, não bloqueia"}</span>
            </span>
            <Interruptor ligado={enforce} onClick={() => setEnforce((v) => !v)} rotulo="Alternar Enforce e Observe" />
          </div>
        </div>

        <div className="space-y-1.5">
          {rodada.detectores.map((d) => (
            <div key={d.nome} className={`rounded-xl border px-3 py-2 transition-colors ${ligados.has(d.nome) ? "border-emerald-500/40 bg-surface" : "border-edge bg-surface/50"}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{d.tipo}</p>
                  <p className="font-mono text-[11px] text-muted">{d.nome} · {d.fase}</p>
                </div>
                <Interruptor ligado={ligados.has(d.nome)} onClick={() => alternar(d.nome)} rotulo={`Ligar ou desligar ${d.nome}`} />
              </div>
              <p className="mt-0.5 text-[11px] leading-snug text-ink/60">Lê {d.le}.</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.nome}
              onClick={() => setLigados(new Set(p.ligados ?? todos))}
              className="rounded-lg border border-edge px-3 py-1.5 text-xs text-muted hover:border-accent hover:text-ink"
            >
              {p.nome}
            </button>
          ))}
        </div>
      </aside>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {(["gateway", "modelo", "aplicacao", "exposto"] as Risco[]).map((r) => (
            <div key={r} className={`rounded-xl border px-3 py-2 ${RISCO[r].classe}`}>
              <p className="text-xl font-bold">{conta(r)}<span className="text-sm font-normal opacity-70">/{linhas.length}</span></p>
              <p className="text-xs">{RISCO[r].rotulo}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted">
          Visibilidade: {visiveis}/{linhas.length} ataques geram evento no Activity da NeuralTrust com esta configuração
          {visiveis === 0 ? " (sem gateway, ninguém fica sabendo do que foi tentado)" : ""}.
        </p>

        <ul className="grid gap-2 xl:grid-cols-2">
          {linhas.map(({ a, risco, texto, nota }) => (
            <li key={a.id} className="rounded-xl border border-edge bg-surface px-3 py-2 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-semibold">
                    <span className="font-mono text-accent">{a.id}</span> {a.nome}
                    <span className="ml-2 font-mono text-[10px] text-muted">{a.owasp.map(owaspCurto).join(" ")}</span>
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-muted">{a.impacto}</p>
                </div>
                <span className={`shrink-0 rounded-md border px-2 py-1 text-xs font-semibold ${RISCO[risco].classe}`}>{RISCO[risco].rotulo}</span>
              </div>
              <p className="mt-1 text-xs text-ink/80">
                {texto} <span className="text-muted">· {RISCO[risco].nota}</span>
              </p>
              {nota && <p className="mt-1 text-xs text-accent/90">{nota}</p>}
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">
          O simulador não reconfigura o gateway: ele aplica a evidência das {rodada.meta.repeticoes} execuções gravadas de cada ataque.
          Para ver um ataque acontecendo de verdade, use o slide de demonstração.
        </p>
      </div>
    </div>
  );
}
