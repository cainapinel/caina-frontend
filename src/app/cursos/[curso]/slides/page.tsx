import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SlideCurso, tituloDoSlide } from "@/components/cursos/SlideCurso";
import { Deck, type Slide } from "@/components/demo/Deck";
import { buscarCurso, cursos } from "@/content/cursos";

type Props = { params: Promise<{ curso: string }> };

export function generateStaticParams() {
  return cursos.map(({ curso }) => ({ curso: curso.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = buscarCurso((await params).curso);
  if (!c) return {};
  return { title: `Slides · ${c.curso.titulo}`, description: `Slides de apoio ao estudo do curso ${c.curso.titulo}.` };
}

export default async function SlidesPage({ params }: Props) {
  const encontrado = buscarCurso((await params).curso);
  if (!encontrado) notFound();
  const { curso, slides } = encontrado;
  const base = `/cursos/${curso.slug}`;

  const deck: Slide[] = slides.map((s) => ({
    id: s.id,
    titulo: tituloDoSlide(s, curso),
    notas: s.notas,
    conteudo: <SlideCurso slide={s} curso={curso} base={base} />,
  }));

  return <Deck slides={deck} aviso={`${curso.titulo} · material de apoio · caina.pinel.com.br`} rotuloNotas="explicação" notasIniciais />;
}
