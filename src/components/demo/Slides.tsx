import { hero } from "@/content/bio";
import {
  apendice,
  capa,
  descoberta,
  modeloNaoBasta,
  objecoes,
  objetivo,
  plataforma,
  poc,
  proximosPassos,
  risco,
  sucesso,
} from "@/content/demo/narrativa";
import type { Rodada } from "@/lib/demo/types";
import { owaspCurto } from "./rotulos";

// --- Auxiliares ---------------------------------------------------------------------------

export function Titulo({ kicker, titulo, sub, compacto }: { kicker?: string; titulo: string; sub?: string; compacto?: boolean }) {
  return (
    <header className={compacto ? "mb-4" : "mb-8"}>
      {kicker && <p className="font-mono text-sm text-accent">{kicker}</p>}
      <h2 className={`mt-1 font-bold tracking-tight ${compacto ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"}`}>{titulo}</h2>
      {sub && <p className={`max-w-4xl text-muted ${compacto ? "mt-1.5 text-sm" : "mt-3"}`}>{sub}</p>}
    </header>
  );
}

function numeros(rodada: Rodada) {
  const { sem_defesa: s, com_gateway: c } = rodada.resumo.por_modo;
  const p50 = (m: typeof s) => m.latencia_chamada_llm_controles_ms.p50 ?? 0;
  const cen = (id: string) => rodada.resumo.por_cenario.find((r) => r.cenario === id && r.modo === "sem_defesa");
  return {
    s,
    c,
    latS: Math.round(p50(s)),
    latC: Math.round(p50(c)),
    lat: Math.round(p50(c) - p50(s)),
    economia: Math.round(((s.custo_total_usd - c.custo_total_usd) / s.custo_total_usd) * 100),
    a3b: cen("A3b"),
    a4: cen("A4"),
    recusasModelo: s.bloqueios_por_camada.barrado_modelo ?? 0,
  };
}

// --- Slides -------------------------------------------------------------------------------

export function SlideCapa() {
  return (
    <div className="space-y-8">
      <p className="font-mono text-sm text-accent">{capa.kicker}</p>
      <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">{capa.titulo}</h1>
      <p className="text-lg text-muted">{capa.sub}</p>
      <p className="text-sm text-ink/80">{capa.apresentador}</p>
      <p className="pt-6 text-xs text-muted">Use ← → para navegar · N mostra as notas do apresentador · O mostra todos os slides · F tela cheia</p>
    </div>
  );
}

export function SlideObjetivo() {
  return (
    <div>
      <Titulo kicker="Objetivo" titulo={objetivo.titulo} />
      <ol className="space-y-4">
        {objetivo.perguntas.map((p, i) => (
          <li key={p} className="flex gap-4 rounded-xl border border-edge bg-surface p-5 text-lg">
            <span className="font-mono text-accent">{i + 1}</span>
            <span>{p}</span>
          </li>
        ))}
      </ol>
      <p className="mt-8 flex flex-wrap gap-2 text-sm text-muted">
        {objetivo.agenda.map((a, i) => (
          <span key={a} className="rounded-full border border-edge px-3 py-1">
            {i + 1}. {a}
          </span>
        ))}
      </p>
    </div>
  );
}

export function SlideDescoberta() {
  return (
    <div>
      <Titulo kicker="Descoberta" titulo={descoberta.titulo} />
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <p className="leading-relaxed text-ink/90">{descoberta.contexto}</p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 rounded-xl border border-edge bg-surface p-4 text-sm">
            {descoberta.agente.map((a) => (
              <div key={a.rotulo} className="contents">
                <dt className="text-muted">{a.rotulo}</dt>
                <dd>{a.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {descoberta.falas.map((f) => (
            <blockquote key={f.papel} className="rounded-xl border border-edge bg-surface p-4">
              <p className="leading-snug text-ink/90">“{f.texto}”</p>
              <footer className="mt-2 font-mono text-xs text-accent">{f.papel}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SlideRisco() {
  return (
    <div>
      <Titulo kicker="O risco" titulo={risco.titulo} />
      <div className="grid gap-4 md:grid-cols-2">
        {risco.cartoes.map((r) => (
          <div key={r.titulo} className="rounded-xl border border-edge bg-surface p-5">
            {r.owasp && <span className="font-mono text-xs text-accent">OWASP {r.owasp}</span>}
            <p className="mt-1 text-lg font-semibold">{r.titulo}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">{r.texto}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">{risco.base}</p>
    </div>
  );
}

export function SlideModelo({ rodada }: { rodada: Rodada }) {
  const n = numeros(rodada);
  const evidencias = [
    {
      valor: `${n.a3b?.desfechos.vazou_no_chat ?? 0}/${n.a3b?.n ?? 5}`,
      titulo: "Vazou CPFs na conversa",
      texto: "Num pedido com cara de rotina, o modelo recusou enviar o e-mail, mas listou CPF e telefone das clientes no chat.",
    },
    {
      valor: `${n.a4?.desfechos.barrado_aplicacao ?? 0}/${n.a4?.n ?? 5}`,
      titulo: "Tentou o disparo em massa",
      texto: "O agente começou a enviar para toda a base. Só uma trava escrita no código da ferramenta segurou.",
    },
    {
      valor: "0",
      titulo: "Alertas para o time de segurança",
      texto: `O modelo recusou ${n.recusasModelo} de ${n.s.ataques_total} tentativas, e nenhuma delas gerou registro ou aviso.`,
    },
  ];
  return (
    <div>
      <Titulo kicker="Sem proteção" titulo={modeloNaoBasta.titulo} sub={modeloNaoBasta.sub} />
      <div className="grid gap-4 md:grid-cols-3">
        {evidencias.map((e) => (
          <div key={e.titulo} className="rounded-xl border border-sev-high/30 bg-sev-high/5 p-5">
            <p className="text-4xl font-bold text-red-300">{e.valor}</p>
            <p className="mt-2 font-semibold">{e.titulo}</p>
            <p className="mt-1 text-sm text-ink/80">{e.texto}</p>
          </div>
        ))}
      </div>
      <ul className="mt-6 space-y-2 text-sm text-ink/80">
        {modeloNaoBasta.pontos.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}

export function SlidePlataforma() {
  return (
    <div>
      <Titulo kicker="A solução" titulo={plataforma.titulo} />
      <div className="grid gap-4 md:grid-cols-3">
        {plataforma.pilares.map((p) => (
          <div key={p.nome} className="rounded-xl border border-emerald-500/30 bg-surface p-5">
            <p className="text-xl font-bold">{p.nome}</p>
            <p className="font-mono text-xs text-emerald-300">{p.papel}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-ink/85">
              {p.itens.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 flex flex-wrap gap-2 text-xs">
        {plataforma.plataformaItens.map((i) => (
          <span key={i} className="rounded-full border border-edge px-3 py-1 text-muted">{i}</span>
        ))}
      </p>
    </div>
  );
}

export function SlideResultados({ rodada }: { rodada: Rodada }) {
  const n = numeros(rodada);
  const ataques = rodada.resumo.por_cenario.filter((r) => r.tipo === "ataque");
  const ids = [...new Set(ataques.map((a) => a.cenario))];
  const cards = [
    { valor: `${n.c.ataques_bem_sucedidos}/${n.c.ataques_total}`, rotulo: "ataques que atingiram o objetivo com NeuralTrust", tom: "text-emerald-300" },
    { valor: `${n.s.ataques_bem_sucedidos}/${n.s.ataques_total}`, rotulo: "atingiram o objetivo sem proteção", tom: "text-red-300" },
    { valor: `${n.c.falsos_positivos}/${n.c.controles_total}`, rotulo: "pedidos legítimos barrados", tom: "text-emerald-300" },
    { valor: `+${n.lat} ms`, rotulo: `por chamada ao modelo (p50: ${n.latS} → ${n.latC} ms)`, tom: "text-ink" },
  ];
  return (
    <div>
      <Titulo kicker="Resultados" titulo="O que medimos no agente de vocês" sub={`${rodada.meta.repeticoes} execuções de cada ataque e de cada pedido legítimo, em cada modo. Modelo ${rodada.meta.modelo}, TrustGate ${rodada.meta.trustgate.version}.`} />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.rotulo} className="rounded-xl border border-edge bg-surface p-4">
            <p className={`text-3xl font-bold tracking-tight ${c.tom}`}>{c.valor}</p>
            <p className="mt-1 text-sm text-muted">{c.rotulo}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 overflow-x-auto rounded-xl border border-edge">
        <table className="w-full text-sm">
          <thead className="bg-surface2 text-left text-xs text-muted">
            <tr>
              <th className="px-3 py-2">Ataque</th>
              <th className="px-3 py-2">OWASP</th>
              <th className="px-3 py-2">Sem proteção: dados saíram</th>
              <th className="px-3 py-2">Com NeuralTrust: barrado pelo gateway</th>
            </tr>
          </thead>
          <tbody>
            {ids.map((id) => {
              const a = ataques.find((x) => x.cenario === id && x.modo === "sem_defesa");
              const b = ataques.find((x) => x.cenario === id && x.modo === "com_gateway");
              if (!a || !b) return null;
              const vaz = Math.round((a.taxa_vazamento ?? 0) * a.n);
              const gw = b.desfechos.barrado_gateway ?? 0;
              const cat = rodada.catalogo.ataques.find((x) => x.id === id);
              return (
                <tr key={id} className="border-t border-edge">
                  <td className="px-3 py-1.5"><span className="font-mono text-accent">{id}</span> {cat?.nome ?? a.nome}</td>
                  <td className="px-3 py-1.5 font-mono text-xs text-muted">{cat?.owasp.map(owaspCurto).join(" ")}</td>
                  <td className={`px-3 py-1.5 font-mono ${vaz ? "text-red-300" : "text-muted"}`}>{vaz}/{a.n}</td>
                  <td className={`px-3 py-1.5 font-mono ${gw === b.n ? "text-emerald-300" : "text-ink"}`}>
                    {gw}/{b.n}
                    {id === "A7" && <span className="ml-2 font-sans text-xs text-muted">papel da aplicação, não do gateway</span>}
                    {gw > 0 && gw < b.n && <span className="ml-2 font-sans text-xs text-muted">no restante, o próprio modelo recusou</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted">
        Custo de modelo da rodada: US$ {n.s.custo_total_usd.toFixed(3)} sem proteção contra US$ {n.c.custo_total_usd.toFixed(3)} com NeuralTrust
        ({n.economia}% menos), porque ataques barrados na entrada não chegam ao modelo.
      </p>
    </div>
  );
}

export function SlideObjecoes({ rodada }: { rodada: Rodada }) {
  const n = numeros(rodada);
  const fp = `${n.c.falsos_positivos} de ${n.c.controles_total}`;
  return (
    <div>
      <Titulo kicker="Perguntas frequentes" titulo={objecoes.titulo} />
      <div className="grid gap-3 md:grid-cols-2">
        {objecoes.itens.map((o) => (
          <div key={o.pergunta} className="rounded-xl border border-edge bg-surface p-4">
            <p className="font-semibold">{o.pergunta}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{o.resposta(n.lat, n.economia, fp)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SlidePOC({ rodada }: { rodada: Rodada }) {
  const n = numeros(rodada);
  const bloqueio = Math.round(((n.c.ataques_total - n.c.ataques_bem_sucedidos) / n.c.ataques_total) * 100);
  const fp = Math.round((n.c.falsos_positivos / n.c.controles_total) * 100);
  const nestaDemo = [`${bloqueio}%`, `${fp}%`, `+${n.lat} ms`, "sim", "sim"];
  return (
    <div>
      <Titulo kicker="Proposta" titulo={poc.titulo} />
      <ol className="grid gap-2 md:grid-cols-5">
        {poc.plano.map((p) => (
          <li key={p.titulo} className="rounded-xl border border-edge bg-surface p-3 text-sm">
            <span className="font-mono text-xs text-accent">{p.quando}</span>
            <p className="mt-0.5 font-semibold">{p.titulo}</p>
            <p className="mt-1 text-xs text-ink/80">{p.texto}</p>
          </li>
        ))}
      </ol>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-edge bg-surface p-4 text-sm">
          <p className="font-semibold">Plano de ação mútuo</p>
          <ul className="mt-2 space-y-1.5">
            {poc.responsabilidades.map((r) => (
              <li key={r.atividade} className="flex justify-between gap-3 border-t border-edge pt-1.5 first:border-0 first:pt-0">
                <span className="text-ink/85">{r.atividade}</span>
                <span className="shrink-0 font-mono text-xs text-accent">{r.quem}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-edge bg-surface p-4 text-sm">
          <p className="font-semibold">Critérios de sucesso <span className="font-normal text-muted">(proposta, a validar com o CISO)</span></p>
          <ul className="mt-2 space-y-1.5">
            {poc.criterios.map((c, i) => (
              <li key={c} className="flex justify-between gap-3 border-t border-edge pt-1.5 first:border-0 first:pt-0">
                <span className="text-ink/85">{c}</span>
                <span className="shrink-0 rounded bg-emerald-500/10 px-2 font-mono text-xs text-emerald-300">nesta demo: {nestaDemo[i]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SlideSucesso() {
  return (
    <div>
      <Titulo kicker="Pós-venda" titulo={sucesso.titulo} />
      <div className="grid gap-4 md:grid-cols-3">
        {sucesso.colunas.map((c) => (
          <div key={c.titulo} className="rounded-xl border border-edge bg-surface p-4">
            <p className="font-semibold">{c.titulo}</p>
            <ul className="mt-2 space-y-1.5 text-sm text-ink/85">
              {c.itens.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm font-semibold">O que esta demonstração já ensinou para a implantação</p>
      <div className="mt-2 grid gap-3 md:grid-cols-2">
        {sucesso.aprendizados.map((a) => (
          <div key={a.titulo} className="rounded-xl border border-accent/30 bg-accent-soft p-4 text-sm">
            <p className="font-semibold text-accent">{a.titulo}</p>
            <p className="mt-1 text-ink/85">{a.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SlideProximos() {
  return (
    <div>
      <Titulo kicker="Fechamento" titulo={proximosPassos.titulo} />
      <ol className="space-y-3">
        {proximosPassos.passos.map((p, i) => (
          <li key={p.texto} className="flex items-center gap-4 rounded-xl border border-edge bg-surface p-5 text-lg">
            <span className="font-mono text-accent">{i + 1}</span>
            <span className="flex-1">{p.texto}</span>
            <span className="font-mono text-xs text-muted">{p.quando}</span>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-2xl font-semibold text-accent">{proximosPassos.pergunta}</p>
      <p className="mt-6 text-sm text-muted">
        Contato: {hero.name} · {hero.email}
      </p>
    </div>
  );
}

export function SlideApendice() {
  return (
    <div>
      <Titulo kicker="Apêndice" titulo={apendice.titulo} />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-edge bg-surface p-4 text-sm">
          <p className="font-semibold">Como medimos</p>
          <ul className="mt-2 space-y-1.5 text-ink/85">
            {apendice.metodo.map((m) => (
              <li key={m}>• {m}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-edge bg-surface p-4 text-sm">
          <p className="font-semibold">O que validar na POC</p>
          <ul className="mt-2 space-y-1.5 text-ink/85">
            {apendice.validar.map((m) => (
              <li key={m}>• {m}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Configuracao({ rodada }: { rodada: Rodada }) {
  const pol = rodada.meta.politicas_gateway[0];
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-edge bg-surface p-4 text-sm">
        <p className="font-semibold">Configuração usada no TrustGate</p>
        {pol && (
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 font-mono text-xs">
            <dt className="text-muted">guardrail</dt><dd>{pol.slug} ({pol.status})</dd>
            <dt className="text-muted">modo</dt><dd className="text-emerald-300">{pol.mode}</dd>
            <dt className="text-muted">direção</dt><dd>{pol.settings.direction}</dd>
            <dt className="text-muted">se a TrustGuard falhar</dt><dd>{pol.settings.failure_mode === "closed" ? "bloqueia (fail closed)" : "deixa passar (fail open)"}</dd>
            <dt className="text-muted">versão</dt><dd>TrustGate {rodada.meta.trustgate.version}</dd>
          </dl>
        )}
      </div>
      {rodada.politicas_trustguard && (
        <div className="rounded-xl border border-edge bg-surface p-4 text-sm md:col-span-2">
          <p className="font-semibold">Políticas na TrustGuard</p>
          <ul className="mt-2 grid gap-2 md:grid-cols-2">
            {rodada.politicas_trustguard.map((p) => (
              <li key={p.nome}>
                <span className="text-emerald-300">{p.nome}</span> <span className="text-muted">· {p.aplica_a}</span>
                <span className="block font-mono text-xs text-ink/70">{p.regras.join(" · ")}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="rounded-xl border border-edge bg-surface p-4 text-sm">
        <p className="font-semibold">Travas da aplicação (valem nos dois modos)</p>
        <ul className="mt-2 space-y-1">
          {rodada.travas_aplicacao.map((t) => (
            <li key={t.nome}><span className="text-violet-300">{t.nome}:</span> <span className="text-ink/80">{t.detalhe}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
