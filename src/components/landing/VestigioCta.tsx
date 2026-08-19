import Link from "next/link";

export function VestigioCta() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-surface to-surface2 p-8 md:p-12">
        <p className="font-mono text-sm text-accent">ferramenta</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Vestígio</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink/90">
          Análise forense de vestígios de IA generativa em textos: caracteres
          invisíveis na posição exata, metadados reveladores de .docx e .pdf, e
          indícios estilométricos — num laudo honesto, com nível de confiança e
          limitações explícitas. Sem falsas certezas.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Nada do que você envia é armazenado — análise 100% em memória.
        </p>
        <Link
          href="/vestigio"
          className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-night transition-opacity hover:opacity-90"
        >
          Analisar um texto →
        </Link>
      </div>
    </section>
  );
}
