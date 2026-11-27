import type { Download } from "@/content/cursos/tipos";

export function Downloads({ itens, compacto = false }: { itens: Download[]; compacto?: boolean }) {
  if (compacto) {
    return (
      <div className="flex flex-wrap gap-2 print:hidden">
        {itens.map((d) => (
          <a
            key={d.arquivo}
            href={d.arquivo}
            download
            className="rounded-lg border border-edge bg-surface px-3 py-2 text-sm transition-colors hover:border-accent/60 hover:text-accent"
          >
            ↓ {d.rotulo} (PDF)
          </a>
        ))}
      </div>
    );
  }
  return (
    <div className="grid gap-4 md:grid-cols-3 print:hidden">
      {itens.map((d) => (
        <a
          key={d.arquivo}
          href={d.arquivo}
          download
          className="group flex flex-col rounded-xl border border-edge bg-surface p-5 transition-colors hover:border-accent/50"
        >
          <span className="font-mono text-xs text-accent">PDF</span>
          <span className="mt-1 font-semibold">{d.rotulo}</span>
          <span className="mt-1 flex-1 text-sm leading-relaxed text-muted">{d.descricao}</span>
          <span className="mt-4 font-mono text-sm text-muted group-hover:text-accent">↓ baixar</span>
        </a>
      ))}
    </div>
  );
}
