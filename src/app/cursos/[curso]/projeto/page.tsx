import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BotaoImprimir } from "@/components/cursos/BotaoImprimir";
import { Checklist } from "@/components/cursos/Checklist";
import { Downloads } from "@/components/cursos/Downloads";
import { Rico } from "@/components/cursos/Rico";
import { Footer } from "@/components/landing/Footer";
import { buscarCurso, cursos } from "@/content/cursos";

type Props = { params: Promise<{ curso: string }> };

export function generateStaticParams() {
  return cursos.filter((c) => c.projeto).map(({ curso }) => ({ curso: curso.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = buscarCurso((await params).curso);
  if (!c?.projeto) return {};
  return { title: `Projeto final · ${c.curso.titulo}`, description: c.projeto.resumo };
}

function Secao({ id, titulo, children, quebra }: { id: string; titulo: string; children: React.ReactNode; quebra?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-6 ${quebra ? "break-before-page" : ""}`}>
      <h2 className="text-2xl font-bold tracking-tight">{titulo}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default async function ProjetoPage({ params }: Props) {
  const encontrado = buscarCurso((await params).curso);
  if (!encontrado?.projeto) notFound();
  const { curso, projeto, downloads } = encontrado;
  const base = `/cursos/${curso.slug}`;
  const pontos = projeto.rubrica.reduce((n, r) => n + r.peso, 0);

  return (
    <main>
      {/* Papel da impressão e do PDF de download (scripts/pdf-materiais.sh). */}
      <style>{`@page { size: A4; margin: 14mm 12mm; }`}</style>
      <header className="mx-auto max-w-4xl px-6 pt-14 pb-8">
        <Link href={base} className="font-mono text-sm text-muted hover:text-accent print:hidden">
          ← {curso.titulo}
        </Link>
        <p className="mt-6 font-mono text-sm text-accent">projeto final · {curso.titulo}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{projeto.titulo}</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink/90">{projeto.resumo}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
          <BotaoImprimir />
          <Downloads itens={downloads.filter((d) => d.origem.endsWith("/projeto"))} compacto />
        </div>
        <nav aria-label="Seções" className="mt-8 flex flex-wrap gap-2 print:hidden">
          {[
            ["cenario", "Cenário"],
            ["pedido", "O pedido"],
            ["arquivos", "Arquivos"],
            ["identidade", "Identidade visual"],
            ["etapas", "Etapas"],
            ["entregas", "Entregas e regras"],
            ["avaliacao", "Avaliação"],
            ["checklist", "Checklist"],
          ].map(([id, rotulo]) => (
            <a key={id} href={`#${id}`} className="rounded-full border border-edge px-3 py-1 text-sm text-muted hover:border-accent/60 hover:text-accent">
              {rotulo}
            </a>
          ))}
        </nav>
      </header>

      <div className="mx-auto max-w-4xl space-y-14 px-6 pb-16">
        <Secao id="cenario" titulo="Cenário">
          <div className="space-y-3">
            {projeto.cenario.map((p) => (
              <p key={p} className="leading-relaxed text-ink/90">
                <Rico texto={p} />
              </p>
            ))}
          </div>
        </Secao>

        <Secao id="pedido" titulo="O pedido da diretora">
          <figure className="break-inside-avoid overflow-hidden rounded-xl border border-edge bg-surface">
            <figcaption className="space-y-0.5 border-b border-edge bg-surface2 px-5 py-3 text-sm">
              <p>
                <span className="text-muted">De: </span>
                {projeto.pedido.de}
              </p>
              <p>
                <span className="text-muted">Assunto: </span>
                <span className="font-semibold">{projeto.pedido.assunto}</span>
              </p>
            </figcaption>
            <p className="whitespace-pre-wrap px-5 py-4 text-sm leading-relaxed text-ink/90">{projeto.pedido.corpo}</p>
          </figure>
        </Secao>

        <Secao id="arquivos" titulo="Arquivos">
          <Downloads itens={projeto.arquivos} />
          <ul className="mt-3 hidden space-y-1 text-sm print:block">
            {projeto.arquivos.map((a) => (
              <li key={a.arquivo}>
                · {a.rotulo}: caina.pinel.com.br{a.arquivo}
              </li>
            ))}
          </ul>
        </Secao>

        <Secao id="identidade" titulo="Identidade visual da Exemplar">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {projeto.identidadeVisual.cores.map((c) => (
              <div key={c.hex} className="break-inside-avoid overflow-hidden rounded-xl border border-edge bg-surface">
                <div className="h-14 print:h-10" style={{ background: c.hex, printColorAdjust: "exact", WebkitPrintColorAdjust: "exact" }} />
                <div className="px-3 py-2">
                  <p className="text-sm font-semibold">
                    {c.nome} <span className="font-mono text-xs text-muted">{c.hex}</span>
                  </p>
                  <p className="text-xs text-muted">{c.uso}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm">
            <span className="font-semibold">Fontes: </span>
            {projeto.identidadeVisual.fontes.join(" · ")}
          </p>
          <p className="mt-1 text-sm text-muted">{projeto.identidadeVisual.observacao}</p>
        </Secao>

        <Secao id="etapas" titulo="Etapas" quebra>
          <ol className="space-y-4">
            {projeto.etapas.map((e, i) => (
              <li key={e.titulo} className="break-inside-avoid rounded-xl border border-edge bg-surface p-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-2xl font-bold text-accent">{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{e.titulo}</h3>
                    <p className="text-sm text-muted">{e.descricao}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5 pl-9">
                  {e.tarefas.map((t) => (
                    <li key={t} className="flex gap-2 text-sm leading-relaxed text-ink/90">
                      <span className="text-accent">▸</span>
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 pl-9 text-sm">
                  <span className="font-semibold text-ok">Entrega da etapa: </span>
                  {e.entrega}
                </p>
              </li>
            ))}
          </ol>
        </Secao>

        <Secao id="entregas" titulo="Entregas e regras">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="break-inside-avoid rounded-xl border border-ok/40 bg-ok/5 p-5">
              <h3 className="font-semibold">O que entregar</h3>
              <ul className="mt-3 space-y-2">
                {projeto.entregaveis.map((e) => (
                  <li key={e} className="flex gap-2 text-sm leading-relaxed">
                    <span className="text-ok">✓</span>
                    <span>
                      <Rico texto={e} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="break-inside-avoid rounded-xl border border-edge bg-surface p-5">
              <h3 className="font-semibold">Regras</h3>
              <ul className="mt-3 space-y-2">
                {projeto.regras.map((r) => (
                  <li key={r} className="flex gap-2 text-sm leading-relaxed">
                    <span className="text-accent">▸</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Secao>

        <Secao id="avaliacao" titulo={`Critérios de avaliação (${pontos} pontos)`} quebra>
          <div className="overflow-x-auto rounded-xl border border-edge">
            <table className="w-full min-w-[44rem] text-left text-sm">
              <thead className="bg-surface2">
                <tr>
                  <th className="px-3 py-2 font-medium">Critério</th>
                  <th className="px-3 py-2 font-medium">Pontos</th>
                  <th className="px-3 py-2 font-medium text-sev-high">Insuficiente</th>
                  <th className="px-3 py-2 font-medium">Bom</th>
                  <th className="px-3 py-2 font-medium text-ok">Excelente</th>
                </tr>
              </thead>
              <tbody>
                {projeto.rubrica.map((r) => (
                  <tr key={r.criterio} className="break-inside-avoid border-t border-edge align-top">
                    <td className="px-3 py-2.5 font-semibold">{r.criterio}</td>
                    <td className="px-3 py-2.5 font-mono">{r.peso}</td>
                    {r.niveis.map((n, i) => (
                      <td key={i} className="px-3 py-2.5 leading-relaxed text-ink/85">
                        {n}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted">
            Em cada critério: insuficiente vale até 40% dos pontos, bom até 80% e excelente até 100%. Aprovação com 70 pontos.
          </p>
        </Secao>

        <Secao id="checklist" titulo="Checklist de entrega">
          <div className="rounded-xl border border-edge p-5">
            <Checklist chave={`curso:${curso.slug}:projeto`} itens={projeto.checklistEntrega} />
          </div>
        </Secao>
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
}
