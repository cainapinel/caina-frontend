import Link from "next/link";
import { cursos } from "@/content/cursos";

export function CursosCta() {
  return (
    <section id="cursos" className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Cursos</h2>
          <p className="mt-2 text-sm text-muted">Tecnologia explicada para quem não é de tecnologia.</p>
        </div>
        <Link href="/cursos" className="font-mono text-sm text-muted hover:text-accent">
          todos os cursos →
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {cursos.map(({ curso }) => (
          <Link
            key={curso.slug}
            href={`/cursos/${curso.slug}`}
            className="group flex flex-col rounded-2xl border border-edge bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <p className="font-mono text-xs text-accent">{curso.modulos.length} módulos · roteiro de estudo + slides</p>
            <h3 className="mt-2 text-xl font-bold tracking-tight">{curso.titulo}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/85">{curso.resumo}</p>
            <span className="mt-5 font-mono text-sm text-muted transition-colors group-hover:text-accent">conhecer o curso →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
