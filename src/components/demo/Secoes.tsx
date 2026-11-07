import { achados, cliente, dores, posVenda, resumoExecutivo, rollout } from "@/content/demo/narrativa";
import type { Rodada } from "@/lib/demo/types";
import { owaspCurto } from "./rotulos";

export function ResumoExecutivo({ rodada }: { rodada: Rodada }) {
  const { sem_defesa: s, com_gateway: c } = rodada.resumo.por_modo;
  const lat = Math.round((c.latencia_chamada_llm_controles_ms.p50 ?? 0) - (s.latencia_chamada_llm_controles_ms.p50 ?? 0));
  const blocos = [
    { titulo: "O problema", texto: resumoExecutivo.problema },
    { titulo: "A solução", texto: resumoExecutivo.solucao },
    { titulo: "A implantação", texto: resumoExecutivo.implantacao },
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="grid gap-3 rounded-2xl border border-edge bg-surface p-5 md:grid-cols-[1fr_1fr_1fr_15rem]">
        {blocos.map((b) => (
          <div key={b.titulo}>
            <p className="font-mono text-xs text-accent">{b.titulo}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/90">{b.texto}</p>
          </div>
        ))}
        <div className="space-y-1 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3 font-mono text-xs">
          <p className="font-sans text-xs text-accent">A prova (medida)</p>
          <p><span className="text-emerald-300">{c.ataques_bem_sucedidos}/{c.ataques_total}</span> ataques passaram com NeuralTrust</p>
          <p><span className="text-red-300">{s.ataques_bem_sucedidos}/{s.ataques_total}</span> passaram sem defesa</p>
          <p><span className="text-emerald-300">{c.falsos_positivos}/{c.controles_total}</span> pedidos legítimos barrados</p>
          <p><span className="text-ink">+{lat} ms</span> por chamada (p50)</p>
        </div>
      </div>
    </div>
  );
}

export function Cliente() {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
      <div className="space-y-4">
        <p className="leading-relaxed text-ink/90">{cliente.descricao}</p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 rounded-xl border border-edge bg-surface p-4 text-sm">
          {cliente.agente.map((a) => (
            <div key={a.rotulo} className="contents">
              <dt className="text-muted">{a.rotulo}</dt>
              <dd>{a.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {dores.map((d) => (
          <div key={d.titulo} className="rounded-xl border border-edge bg-surface p-4">
            <span className="font-mono text-[10px] text-accent">{d.owasp}</span>
            <p className="mt-1 font-semibold leading-snug">{d.titulo}</p>
            <p className="mt-1 text-sm text-muted">{d.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Politicas({ rodada }: { rodada: Rodada }) {
  const pol = rodada.meta.politicas_gateway[0];
  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-2">
        {rodada.detectores.map((d) => (
          <div key={d.nome} className="rounded-xl border border-edge bg-surface p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold">{d.nome}</p>
                <p className="font-mono text-xs text-muted">{d.tipo} · {d.plugin}</p>
              </div>
              <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-300">
                {d.fase} → {d.acao}
              </span>
            </div>
            <p className="mt-2 text-sm text-ink/80">Lê: {d.le}.</p>
            {d.topicos && <p className="mt-1 text-xs text-muted">Tópicos: {d.topicos.join(", ")}</p>}
            {d.entidades && <p className="mt-1 text-xs text-muted">Entidades: {d.entidades.join(", ")}</p>}
            <p className="mt-2 flex flex-wrap gap-1">
              {d.cobre.map((c) => (
                <span key={c} className="rounded bg-night px-1.5 py-0.5 font-mono text-[10px] text-accent">{c}</span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {pol && (
          <div className="rounded-xl border border-edge bg-surface p-4 text-sm">
            <p className="font-semibold">Guardrail no gateway (lido da API de admin)</p>
            <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 font-mono text-xs">
              <dt className="text-muted">política</dt><dd>{pol.slug} ({pol.status})</dd>
              <dt className="text-muted">modo</dt><dd className="text-emerald-300">{pol.mode}</dd>
              <dt className="text-muted">direção</dt><dd>{pol.settings.direction}</dd>
              <dt className="text-muted">falha</dt><dd>{pol.settings.failure_mode === "closed" ? "closed (bloqueia se a TrustGuard cair)" : pol.settings.failure_mode}</dd>
              <dt className="text-muted">estágios</dt><dd>{pol.stages.join(", ")}</dd>
              <dt className="text-muted">TrustGate</dt><dd>{rodada.meta.trustgate.version}</dd>
            </dl>
          </div>
        )}
        <div className="rounded-xl border border-edge bg-surface p-4 text-sm">
          <p className="font-semibold">Travas da aplicação (valem nos dois modos)</p>
          <ul className="mt-2 space-y-1.5">
            {rodada.travas_aplicacao.map((t) => (
              <li key={t.nome}><span className="text-violet-300">{t.nome}:</span> <span className="text-ink/80">{t.detalhe}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold">Como ligar em produção sem susto</p>
        <ol className="grid gap-2 md:grid-cols-3">
          {rollout.map((r, i) => (
            <li key={r.fase} className="rounded-xl border border-edge bg-surface p-4 text-sm">
              <span className="font-mono text-xs text-accent">{i + 1}. {r.fase}</span>
              <p className="mt-1 text-ink/80">{r.texto}</p>
            </li>
          ))}
        </ol>
        <p className="mt-2 text-xs text-muted">Os detectores foram configurados no console da TrustGuard; a API de admin do TrustGate não expõe esses objetos, mas os nomes conferem com os bloqueios registrados.</p>
      </div>
    </div>
  );
}

function Numero({ valor, rotulo, tom }: { valor: string; rotulo: string; tom?: string }) {
  return (
    <div className="rounded-xl border border-edge bg-surface p-4">
      <p className={`text-3xl font-bold tracking-tight ${tom ?? ""}`}>{valor}</p>
      <p className="mt-1 text-sm text-muted">{rotulo}</p>
    </div>
  );
}

export function Numeros({ rodada }: { rodada: Rodada }) {
  const { sem_defesa: s, com_gateway: c } = rodada.resumo.por_modo;
  const latS = s.latencia_chamada_llm_controles_ms.p50 ?? 0;
  const latC = c.latencia_chamada_llm_controles_ms.p50 ?? 0;
  const ataques = rodada.resumo.por_cenario.filter((r) => r.tipo === "ataque");
  const ids = [...new Set(ataques.map((a) => a.cenario))];
  const celula = (id: string, modo: "sem_defesa" | "com_gateway") => ataques.find((a) => a.cenario === id && a.modo === modo);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Numero valor={`${c.ataques_bem_sucedidos}/${c.ataques_total}`} rotulo="ataques que passaram com NeuralTrust" tom="text-emerald-300" />
        <Numero valor={`${s.ataques_bem_sucedidos}/${s.ataques_total}`} rotulo="ataques que passaram sem defesa" tom="text-red-300" />
        <Numero valor={`${c.falsos_positivos}`} rotulo={`falsos positivos em ${c.controles_total} pedidos legítimos`} tom="text-emerald-300" />
        <Numero valor={`+${Math.round(latC - latS)} ms`} rotulo={`latência p50 por chamada (${Math.round(latS)} → ${Math.round(latC)} ms, só pedidos legítimos)`} />
      </div>

      <div className="overflow-x-auto rounded-xl border border-edge">
        <table className="w-full text-sm">
          <thead className="bg-surface2 text-left text-xs text-muted">
            <tr>
              <th className="px-3 py-2">Ataque</th>
              <th className="px-3 py-2">OWASP</th>
              <th className="px-3 py-2">Sem defesa: dados saíram</th>
              <th className="px-3 py-2">Com NeuralTrust: barrado pelo gateway</th>
            </tr>
          </thead>
          <tbody>
            {ids.map((id) => {
              const a = celula(id, "sem_defesa");
              const b = celula(id, "com_gateway");
              if (!a || !b) return null;
              const vaz = Math.round((a.taxa_vazamento ?? 0) * a.n);
              const gw = b.desfechos.barrado_gateway ?? 0;
              const cat = rodada.catalogo.ataques.find((x) => x.id === id);
              return (
                <tr key={id} className="border-t border-edge">
                  <td className="px-3 py-2"><span className="font-mono text-accent">{id}</span> {a.nome}</td>
                  <td className="px-3 py-2 font-mono text-xs text-muted">{cat?.owasp.map(owaspCurto).join(" ")}</td>
                  <td className={`px-3 py-2 font-mono ${vaz ? "text-red-300" : "text-muted"}`}>{vaz}/{a.n}</td>
                  <td className={`px-3 py-2 font-mono ${gw === b.n ? "text-emerald-300" : "text-ink"}`}>
                    {gw}/{b.n}
                    {gw < b.n && <span className="ml-2 text-xs text-muted">(resto: {Object.entries(b.desfechos).filter(([k, n]) => n && k !== "barrado_gateway").map(([k, n]) => `${k.replace("barrado_", "")} ${n}`).join(", ")})</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted">
        {rodada.meta.repeticoes} repetições por cenário e modo, modelo {rodada.meta.modelo}, TrustGate {rodada.meta.trustgate.version}, rodada de{" "}
        {new Date(rodada.meta.iniciado_em).toLocaleString("pt-BR")}. LLM não é determinístico: por isso taxas, e não um resultado isolado.
        Custo total da rodada: US$ {(s.custo_total_usd + c.custo_total_usd).toFixed(2)}.
      </p>
    </div>
  );
}

export function PosVenda({ rodada }: { rodada: Rodada }) {
  const c = rodada.resumo.por_modo.com_gateway;
  const s = rodada.resumo.por_modo.sem_defesa;
  const lat = Math.round((c.latencia_chamada_llm_controles_ms.p50 ?? 0) - (s.latencia_chamada_llm_controles_ms.p50 ?? 0));
  const bloqueio = Math.round(((c.ataques_total - c.ataques_bem_sucedidos) / c.ataques_total) * 100);
  const fp = Math.round((c.falsos_positivos / c.controles_total) * 100);
  const nesteCase = [`${bloqueio}% bloqueado`, `${fp}% de falsos positivos`, `+${lat} ms`, "chave só no gateway", "trace_id em todo bloqueio"];

  return (
    <div className="space-y-8">
      <ol className="grid gap-2 md:grid-cols-5">
        {posVenda.plano.map((p) => (
          <li key={p.titulo} className="rounded-xl border border-edge bg-surface p-4 text-sm">
            <span className="font-mono text-xs text-accent">{p.quando}</span>
            <p className="mt-1 font-semibold">{p.titulo}</p>
            <p className="mt-1 text-ink/80">{p.texto}</p>
          </li>
        ))}
      </ol>

      <div className="rounded-xl border border-edge bg-surface p-4">
        <p className="font-semibold">Critérios de sucesso da prova de conceito</p>
        <p className="text-xs text-muted">{posVenda.criteriosNota}</p>
        <ul className="mt-3 space-y-1.5 text-sm">
          {posVenda.criterios.map((cr, i) => (
            <li key={cr} className="flex flex-wrap items-center justify-between gap-2 border-t border-edge pt-1.5 first:border-0 first:pt-0">
              <span>{cr}</span>
              <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-xs text-emerald-300">{nesteCase[i]}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-2 font-semibold">O que a demo mostrou além dos números</p>
        <div className="grid gap-3 md:grid-cols-2">
          {achados.map((a) => (
            <div key={a.titulo} className="rounded-xl border border-edge bg-surface p-4 text-sm">
              <p className="font-semibold">{a.titulo}</p>
              <p className="mt-1 text-ink/80">{a.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
