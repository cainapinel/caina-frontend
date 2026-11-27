import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/landing/Footer";
import { cursos } from "@/content/cursos";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Cursos de Cainã Pinel: inteligência artificial na prática, para quem não é da área de tecnologia.",
};

export default function CursosPage() {
  return (
    <main>
      <header className="mx-auto max-w-5xl px-6 pt-14 pb-6">
        <Link href="/" className="font-mono text-sm text-muted hover:text-accent">
          ← caina.pinel.com.br
        </Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Cursos<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Tecnologia explicada para quem não é de tecnologia. Cada curso traz um roteiro de estudo completo, slides para revisar
          e exercícios com situações reais de trabalho.
        </p>
      </header>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-10 md:grid-cols-2">
        {cursos.map(({ curso }) => (
          <Link
            key={curso.slug}
            href={`/cursos/${curso.slug}`}
            className="group flex flex-col rounded-2xl border border-edge bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <p className="font-mono text-xs text-accent">
              {curso.modulos.length} módulos · {curso.nivel.toLowerCase()}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">{curso.titulo}</h2>
            <p className="mt-1 text-sm text-muted">{curso.subtitulo}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/85">{curso.resumo}</p>
            <span className="mt-6 font-mono text-sm text-muted transition-colors group-hover:text-accent">conhecer o curso →</span>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
