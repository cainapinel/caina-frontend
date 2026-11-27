import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaixaPrompt } from "@/components/cursos/Blocos";
import { BotaoImprimir } from "@/components/cursos/BotaoImprimir";
import { Downloads } from "@/components/cursos/Downloads";
import { Rico } from "@/components/cursos/Rico";
import { Footer } from "@/components/landing/Footer";
import { buscarCurso, cursos } from "@/content/cursos";

type Props = { params: Promise<{ curso: string }> };

export function generateStaticParams() {
  return cursos.map(({ curso }) => ({ curso: curso.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = buscarCurso((await params).curso);
  if (!c) return {};
  return {
    title: `Pedidos prontos · ${c.curso.titulo}`,
    description: `Coleção de pedidos (prompts) prontos para o dia a dia, do curso ${c.curso.titulo}.`,
  };
}

function Secao({ id, titulo, sub, quebra, children }: { id: string; titulo: string; sub?: string; quebra?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`scroll-mt-6 ${quebra ? "break-before-page" : ""}`}>
      <h2 className="text-2xl font-bold tracking-tight">{titulo}</h2>
      {sub && <p className="mt-1 text-sm text-muted">{sub}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default async function PedidosPage({ params }: Props) {
  const encontrado = buscarCurso((await params).curso);
  if (!encontrado) notFound();
  const { curso, consulta, downloads } = encontrado;
  const base = `/cursos/${curso.slug}`;
  const total = consulta.categorias.reduce((n, c) => n + c.pedidos.length, 0);

  return (
    <main>
      {/* Papel da impressão e do PDF de download (scripts/pdf-materiais.sh). */}
      <style>{`@page { size: A4; margin: 14mm 12mm; }`}</style>
      <header className="mx-auto max-w-5xl px-6 pt-14 pb-8">
        <Link href={base} className="font-mono text-sm text-muted hover:text-accent print:hidden">
          ← {curso.titulo}
        </Link>
        <p className="mt-6 font-mono text-sm text-accent">material de consulta · {total} pedidos prontos</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Pedidos prontos</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink/90">{consulta.apresentacao}</p>
        <p className="mt-2 hidden text-sm text-muted print:block">Roteiro de estudo completo: caina.pinel.com.br/cursos/{curso.slug}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
          <BotaoImprimir />
          <Downloads itens={downloads.filter((d) => d.origem.endsWith("/pedidos"))} compacto />
        </div>
        <nav aria-label="Categorias" className="mt-8 flex flex-wrap gap-2 print:hidden">
          {[...consulta.categorias.map((c) => ({ id: c.id, titulo: c.titulo })), { id: "ajustes", titulo: "Ajustes rápidos" }, { id: "antes-de-enviar", titulo: "Antes de enviar" }, { id: "plano-30-dias", titulo: "Plano de 30 dias" }, { id: "kit-ia", titulo: "Modelo do Kit IA" }].map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full border border-edge px-3 py-1 text-sm text-muted hover:border-accent/60 hover:text-accent">
              {c.titulo}
            </a>
          ))}
        </nav>
      </header>

      <div className="mx-auto max-w-5xl space-y-14 px-6 pb-16">
        {consulta.categorias.map((cat) => (
          <Secao key={cat.id} id={cat.id} titulo={cat.titulo}>
            <div className="grid gap-4 md:grid-cols-2 print:grid-cols-1">
              {cat.pedidos.map((p) => (
                <CaixaPrompt key={p.titulo} titulo={p.titulo} texto={p.texto} />
              ))}
            </div>
          </Secao>
        ))}

        <div className="grid gap-8 md:grid-cols-2 break-before-page">
          <Secao id="ajustes" titulo="Ajustes rápidos" sub="Para usar na mesma conversa, depois da primeira resposta.">
            <ul className="space-y-2 rounded-xl border border-edge bg-surface p-5">
              {consulta.ajustes.map((a) => (
                <li key={a} className="flex gap-2 text-sm">
                  <span className="text-accent">▸</span>“{a}”
                </li>
              ))}
            </ul>
          </Secao>
          <Secao id="antes-de-enviar" titulo="Antes de enviar" sub="A IA faz o rascunho, você assina.">
            <ul className="space-y-2 rounded-xl border border-edge bg-surface p-5">
              {consulta.antesDeEnviar.map((a) => (
                <li key={a} className="flex gap-3 text-sm">
                  <span className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border border-muted" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </Secao>
        </div>

        <Secao id="semaforo" titulo="Semáforo dos dados" sub="Antes de colar: eu mandaria isso por e-mail para alguém de fora da empresa?">
          <div className="grid gap-3 md:grid-cols-3">
            {curso.colinha
              .filter((c) => c.titulo === "Nunca cole")
              .map((c) => (
                <div key={c.titulo} className="rounded-xl border border-sev-high/40 bg-sev-high/5 p-5 md:col-span-1">
                  <p className="font-semibold">🔴 {c.titulo}</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink/85">
                    {c.itens.map((i) => (
                      <li key={i}>· {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            <div className="rounded-xl border border-sev-medium/40 bg-sev-medium/5 p-5">
              <p className="font-semibold">🟡 Só anonimizado</p>
              <p className="mt-2 text-sm text-ink/85">E-mails de clientes, anotações internas e documentos não confidenciais, depois de trocar nomes, números e dados pessoais.</p>
            </div>
            <div className="rounded-xl border border-ok/40 bg-ok/5 p-5">
              <p className="font-semibold">🟢 Pode</p>
              <p className="mt-2 text-sm text-ink/85">Modelos de texto, dúvidas de português, pesquisas, informações públicas e textos sem dados de ninguém.</p>
            </div>
          </div>
        </Secao>

        <Secao id="plano-30-dias" titulo="Plano de 30 dias depois do curso" sub="Um foco por semana, para a IA virar hábito.">
          <ol className="grid gap-3 md:grid-cols-4 print:grid-cols-2">
            {consulta.plano30Dias.map((s) => (
              <li key={s.periodo} className="break-inside-avoid rounded-xl border border-edge bg-surface p-4">
                <p className="font-mono text-xs text-accent">{s.periodo}</p>
                <p className="mt-1 font-semibold">{s.foco}</p>
                <ul className="mt-2 space-y-1.5 text-sm text-ink/85">
                  {s.tarefas.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-0.5 inline-block h-3.5 w-3.5 shrink-0 rounded border border-muted" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Secao>

        <Secao id="kit-ia" quebra titulo="Modelo do Kit IA" sub="O projeto final do curso. Imprima e preencha, ou copie a estrutura para um documento.">
          <div className="space-y-6">
            {consulta.modeloKit.map((k) =>
              k.campos.length >= 5 ? (
                <div key={k.secao} className="break-inside-avoid">
                  <h3 className="font-semibold">{k.secao}</h3>
                  <div className="mt-2 overflow-x-auto rounded-xl border border-edge">
                    <table className="w-full min-w-[36rem] text-left text-sm">
                      <thead className="bg-surface2">
                        <tr>
                          {k.campos.map((c) => (
                            <th key={c} className="px-3 py-2 font-medium">
                              {c}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <tr key={n} className="h-12 border-t border-edge">
                            {k.campos.map((c) => (
                              <td key={c} className="px-3" />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div key={k.secao} className="break-inside-avoid">
                  <h3 className="font-semibold">{k.secao}</h3>
                  <dl className="mt-2 divide-y divide-edge rounded-xl border border-edge">
                    {k.campos.map((c) => (
                      <div key={c} className="grid min-h-12 grid-cols-[11rem_1fr] items-center gap-3 px-3 py-2 text-sm">
                        <dt className="text-muted">{c}</dt>
                        <dd className="h-6 border-b border-dashed border-edge" />
                      </div>
                    ))}
                  </dl>
                </div>
              ),
            )}
          </div>
        </Secao>

        <p className="rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-sm print:hidden">
          <Rico texto="Mais explicações e exercícios no roteiro de estudo: **caina.pinel.com.br/cursos/ia-no-dia-a-dia**" />
        </p>
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
}
