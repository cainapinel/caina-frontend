import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SlideCurso, tituloDoSlide } from "@/components/cursos/SlideCurso";
import { buscarCurso, cursos } from "@/content/cursos";

/**
 * Versão dos slides para gerar o PDF de download (scripts/pdf-slides.sh): um slide por
 * página A4 deitada, com a explicação embaixo. Na impressão o tema vira papel branco.
 * Os links usam o endereço completo do site, para funcionarem dentro do PDF.
 */

type Props = { params: Promise<{ curso: string }> };

export function generateStaticParams() {
  return cursos.map(({ curso }) => ({ curso: curso.slug }));
}

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function SlidesImpressaoPage({ params }: Props) {
  const encontrado = buscarCurso((await params).curso);
  if (!encontrado) notFound();
  const { curso, slides } = encontrado;
  const base = `https://caina.pinel.com.br/cursos/${curso.slug}`;

  return (
    <main>
      <style>{`@page { size: 297mm 210mm; margin: 0; } html { font-size: 15px !important; }`}</style>
      {slides.map((s, i) => (
        <section
          key={s.id}
          className="mx-auto flex h-[210mm] w-[297mm] flex-col overflow-hidden border-b border-edge px-[14mm] pt-[10mm] pb-[7mm] break-after-page last:break-after-auto print:border-0"
        >
          <div className="flex min-h-0 flex-1 flex-col justify-center">
            <SlideCurso slide={s} curso={curso} base={base} impresso />
          </div>
          <aside className="mt-4 rounded-lg border-l-4 border-accent bg-accent-soft px-4 py-2.5">
            <p className="font-mono text-[11px] text-accent">explicação</p>
            <p className="text-[13px] leading-relaxed text-ink/90">{s.notas}</p>
          </aside>
          <footer className="mt-2 flex justify-between font-mono text-[9px] text-muted">
            <span>
              {curso.titulo} · {tituloDoSlide(s, curso)}
            </span>
            <span>
              {i + 1}/{slides.length} · caina.pinel.com.br/cursos
            </span>
          </footer>
        </section>
      ))}
    </main>
  );
}
