import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Downloads } from "@/components/cursos/Downloads";
import { Footer } from "@/components/landing/Footer";
import { buscarCurso, cursos, slideDoModulo } from "@/content/cursos";
import { hero } from "@/content/bio";

type Props = { params: Promise<{ curso: string }> };

export function generateStaticParams() {
  return cursos.map(({ curso }) => ({ curso: curso.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = buscarCurso((await params).curso);
  if (!c) return {};
  return { title: `Curso ${c.curso.titulo}`, description: c.curso.resumo };
}

export default async function CursoPage({ params }: Props) {
  const encontrado = buscarCurso((await params).curso);
  if (!encontrado) notFound();
  const { curso, slides, downloads, projeto, arquivosPratica } = encontrado;
  const base = `/cursos/${curso.slug}`;
  const assunto = encodeURIComponent(`Curso ${curso.titulo}`);

  return (
    <main>
      <header className="mx-auto max-w-5xl px-6 pt-14 pb-10">
        <Link href="/cursos" className="font-mono text-sm text-muted hover:text-accent">
          ← cursos
        </Link>
        <p className="mt-6 font-mono text-sm text-accent">curso · {curso.nivel.toLowerCase()}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          {curso.titulo}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted">{curso.subtitulo}</p>
        <p className="mt-6 max-w-3xl leading-relaxed text-ink/90">{curso.resumo}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`${base}/roteiro`} className="rounded-lg bg-accent px-6 py-3 font-medium text-night transition-opacity hover:opacity-90">
            Abrir o roteiro de estudo →
          </Link>
          <Link
            href={`${base}/slides`}
            className="rounded-lg border border-edge bg-surface px-6 py-3 transition-colors hover:border-accent/60 hover:text-accent"
          >
            Ver os slides
          </Link>
          <Link
            href={`${base}/pedidos`}
            className="rounded-lg border border-edge bg-surface px-6 py-3 transition-colors hover:border-accent/60 hover:text-accent"
          >
            Pedidos prontos
          </Link>
          {projeto && (
            <Link
              href={`${base}/projeto`}
              className="rounded-lg border border-accent/50 bg-surface px-6 py-3 text-accent transition-colors hover:border-accent"
            >
              Projeto final
            </Link>
          )}
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {curso.formato.map((f) => (
            <div key={f.rotulo} className="rounded-xl border border-edge bg-surface p-4">
              <dt className="font-mono text-xs text-muted">{f.rotulo}</dt>
              <dd className="mt-1 font-semibold">{f.valor}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-6 md:grid-cols-2">
        <div className="rounded-2xl border border-edge bg-surface p-6">
          <h2 className="text-lg font-semibold">Para quem é</h2>
          <ul className="mt-3 space-y-2">
            {curso.publico.map((p) => (
              <li key={p} className="flex gap-2 text-sm leading-relaxed text-ink/85">
                <span className="text-accent">▸</span>
                {p}
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-sm font-semibold">Você só precisa de</h3>
          <ul className="mt-2 space-y-1.5">
            {curso.preRequisitos.map((p) => (
              <li key={p} className="text-sm text-muted">
                · {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-edge bg-surface p-6">
          <h2 className="text-lg font-semibold">Ao final, você vai saber</h2>
          <ul className="mt-3 space-y-2">
            {curso.resultados.map((r) => (
              <li key={r} className="flex gap-2 text-sm leading-relaxed text-ink/85">
                <span className="text-ok">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Módulos</h2>
        <ol className="mt-6 space-y-3">
          {curso.modulos.map((m) => (
            <li key={m.numero} className="flex flex-col gap-3 rounded-xl border border-edge bg-surface p-5 md:flex-row md:items-center">
              <span className="font-mono text-2xl font-bold text-accent md:w-12">{String(m.numero).padStart(2, "0")}</span>
              <div className="flex-1">
                <h3 className="font-semibold">{m.titulo}</h3>
                <p className="text-sm text-muted">{m.subtitulo}</p>
              </div>
              <div className="flex gap-2 font-mono text-xs">
                <Link href={`${base}/roteiro#modulo-${m.numero}`} className="rounded-md border border-edge px-2.5 py-1 text-muted hover:border-accent/60 hover:text-accent">
                  roteiro
                </Link>
                <Link href={`${base}/slides#${slideDoModulo(slides, m.numero)}`} className="rounded-md border border-edge px-2.5 py-1 text-muted hover:border-accent/60 hover:text-accent">
                  slides
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {projeto && (
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <Link
            href={`${base}/projeto`}
            className="block rounded-2xl border border-accent/40 bg-gradient-to-br from-surface to-surface2 p-8 transition-colors hover:border-accent"
          >
            <p className="font-mono text-sm text-accent">projeto final</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">{projeto.titulo}</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink/85">{projeto.resumo}</p>
            <span className="mt-5 inline-block font-mono text-sm text-muted">ver o enunciado, as etapas e os critérios de avaliação →</span>
          </Link>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-2xl font-semibold tracking-tight">Materiais para baixar</h2>
        <p className="mt-2 text-sm text-muted">Em PDF, para estudar offline ou imprimir.</p>
        <div className="mt-6">
          <Downloads itens={downloads} />
        </div>
        {arquivosPratica && (
          <>
            <h3 className="mt-10 text-lg font-semibold">Arquivos de prática</h3>
            <p className="mt-1 text-sm text-muted">Planilhas com dados fictícios, usadas nos exercícios e no projeto final.</p>
            <div className="mt-4">
              <Downloads itens={arquivosPratica} />
            </div>
          </>
        )}
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-surface to-surface2 p-8">
          <h2 className="text-2xl font-bold tracking-tight">Quer este curso para você ou para a sua equipe?</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink/85">
            O material é aberto para estudo. Também ofereço o curso em encontros ao vivo, individuais ou em grupo, com exemplos
            adaptados à rotina da sua empresa.
          </p>
          <a
            href={`mailto:${hero.email}?subject=${assunto}`}
            className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-night transition-opacity hover:opacity-90"
          >
            Fale comigo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
