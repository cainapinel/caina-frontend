import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocos } from "@/components/cursos/Blocos";
import { BotaoImprimir } from "@/components/cursos/BotaoImprimir";
import { Checklist } from "@/components/cursos/Checklist";
import { Downloads } from "@/components/cursos/Downloads";
import { Rico } from "@/components/cursos/Rico";
import { Footer } from "@/components/landing/Footer";
import { buscarCurso, cursos, slideDoModulo } from "@/content/cursos";

type Props = { params: Promise<{ curso: string }> };

export function generateStaticParams() {
  return cursos.map(({ curso }) => ({ curso: curso.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = buscarCurso((await params).curso);
  if (!c) return {};
  return { title: `Roteiro de estudo · ${c.curso.titulo}`, description: c.curso.resumo };
}

export default async function RoteiroPage({ params }: Props) {
  const encontrado = buscarCurso((await params).curso);
  if (!encontrado) notFound();
  const { curso, slides, downloads, projeto, arquivosPratica } = encontrado;
  const base = `/cursos/${curso.slug}`;

  const sumario = [
    { id: "como-estudar", rotulo: "Como estudar" },
    ...curso.modulos.map((m) => ({ id: `modulo-${m.numero}`, rotulo: `${m.numero}. ${m.titulo}` })),
    { id: "glossario", rotulo: "Glossário" },
    { id: "colinha", rotulo: "Colinha" },
  ];
  // A coleção completa de pedidos fica numa página própria (ver link no topo).

  return (
    <main>
      {/* Papel da impressão e do PDF de download (scripts/pdf-materiais.sh). */}
      <style>{`@page { size: A4; margin: 14mm 12mm; }`}</style>
      <header className="mx-auto max-w-6xl px-6 pt-14 pb-8">
        <Link href={base} className="font-mono text-sm text-muted hover:text-accent print:hidden">
          ← {curso.titulo}
        </Link>
        <p className="mt-6 font-mono text-sm text-accent">roteiro de estudo · material do aluno</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{curso.titulo}</h1>
        <p className="mt-3 max-w-3xl text-lg text-muted">{curso.subtitulo}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
          <Link
            href={`${base}/slides`}
            className="rounded-lg border border-edge bg-surface px-4 py-2 text-sm transition-colors hover:border-accent/60 hover:text-accent"
          >
            Abrir os slides
          </Link>
          <Link
            href={`${base}/pedidos`}
            className="rounded-lg border border-edge bg-surface px-4 py-2 text-sm transition-colors hover:border-accent/60 hover:text-accent"
          >
            Pedidos prontos
          </Link>
          {projeto && (
            <Link
              href={`${base}/projeto`}
              className="rounded-lg border border-accent/50 bg-surface px-4 py-2 text-sm text-accent transition-colors hover:border-accent"
            >
              Projeto final
            </Link>
          )}
          <BotaoImprimir />
          <span className="text-xs text-muted">Atualizado em {curso.atualizadoEm}</span>
        </div>
        <div className="mt-3">
          <Downloads itens={[...downloads, ...(arquivosPratica ?? [])]} compacto />
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 lg:grid-cols-[15rem_1fr]">
        <nav aria-label="Sumário" className="print:hidden">
          <div className="lg:sticky lg:top-6">
            <p className="font-mono text-xs text-muted">sumário</p>
            <ol className="mt-3 space-y-1 border-l border-edge text-sm">
              {sumario.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1 pl-3 text-muted hover:border-accent hover:text-ink">
                    {s.rotulo}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="min-w-0 max-w-3xl space-y-16">
          <section id="como-estudar" className="scroll-mt-6">
            <h2 className="text-2xl font-bold tracking-tight">Como estudar com este material</h2>
            <ul className="mt-4 space-y-2">
              {curso.comoEstudar.map((c) => (
                <li key={c} className="flex gap-2 leading-relaxed text-ink/90">
                  <span className="text-accent">▸</span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-edge bg-surface px-4 py-3 text-sm leading-relaxed text-ink/85">
              <Rico texto={curso.personagens} />
            </p>
          </section>

          {curso.modulos.map((m) => (
            <section key={m.numero} id={`modulo-${m.numero}`} className="scroll-mt-6 break-before-page">
              <p className="font-mono text-sm text-accent">
                módulo {m.numero} de {curso.modulos.length} · {m.duracao}
              </p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight">{m.titulo}</h2>
              <p className="mt-2 text-muted">{m.subtitulo}</p>

              <div className="mt-6 rounded-xl border border-edge bg-surface p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs text-muted">objetivos</p>
                  <Link
                    href={`${base}/slides#${slideDoModulo(slides, m.numero)}`}
                    className="font-mono text-xs text-muted hover:text-accent print:hidden"
                  >
                    slides deste módulo →
                  </Link>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {m.objetivos.map((o) => (
                    <li key={o} className="flex gap-2 text-sm">
                      <span className="text-ok">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Blocos blocos={m.blocos} />
              </div>

              <div id={`modulo-${m.numero}-exercicios`} className="mt-10 scroll-mt-6 space-y-4">
                <h3 className="text-xl font-semibold tracking-tight">Exercícios</h3>
                {m.exercicios.map((e) => (
                  <div key={e.titulo} className="break-inside-avoid rounded-xl border border-ok/30 bg-ok/5 p-5">
                    <p className="font-mono text-xs text-ok">exercício</p>
                    <h4 className="mt-1 font-semibold">{e.titulo}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/90">{e.enunciado}</p>
                    {e.passos && (
                      <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-ink/90 marker:text-ok">
                        {e.passos.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ol>
                    )}
                    {e.entrega && (
                      <p className="mt-3 text-sm">
                        <span className="font-semibold">Para entregar: </span>
                        <span className="text-ink/85">{e.entrega}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 break-inside-avoid rounded-xl border border-edge p-5">
                <h3 className="font-semibold">Checklist do módulo</h3>
                <p className="mb-3 text-xs text-muted print:hidden">Seu progresso fica salvo neste navegador.</p>
                <Checklist chave={`curso:${curso.slug}:m${m.numero}`} itens={m.checklist} />
              </div>
            </section>
          ))}

          <section id="glossario" className="scroll-mt-6 break-before-page">
            <h2 className="text-2xl font-bold tracking-tight">Glossário</h2>
            <dl className="mt-6 divide-y divide-edge rounded-xl border border-edge">
              {curso.glossario.map((g) => (
                <div key={g.termo} className="grid gap-1 px-4 py-3 md:grid-cols-[13rem_1fr] md:gap-4">
                  <dt className="font-semibold">{g.termo}</dt>
                  <dd className="text-sm leading-relaxed text-ink/85">{g.definicao}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="colinha" className="scroll-mt-6 break-before-page">
            <h2 className="text-2xl font-bold tracking-tight">Colinha</h2>
            <p className="mt-2 text-sm text-muted">Uma página para deixar ao lado do computador.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {curso.colinha.map((c) => (
                <div key={c.titulo} className="break-inside-avoid rounded-xl border border-edge bg-surface p-5">
                  <h3 className="font-semibold text-accent">{c.titulo}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                    {c.itens.map((i) => (
                      <li key={i}>
                        <Rico texto={i} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 font-semibold">
              A IA faz o rascunho. Você orienta, confere e assina.
            </p>
          </section>
        </article>
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
}
