import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/landing/Footer";
import { Analyzer } from "@/components/vestigio/Analyzer";
import { HowItWorks } from "@/components/vestigio/HowItWorks";

export const metadata: Metadata = {
  title: "Vestígio — vestígios de IA em textos",
  description:
    "Análise forense de vestígios de IA generativa: caracteres Unicode invisíveis, " +
    "metadados de .docx/.pdf e estilometria — laudo honesto, com limitações " +
    "explícitas. Nada é armazenado.",
};

export default function VestigioPage() {
  return (
    <main>
      <header className="mx-auto max-w-4xl px-6 pt-14 pb-10 text-center">
        <Link href="/" className="font-mono text-sm text-muted hover:text-accent">
          ← caina.pinel.com.br
        </Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Vestígio<span className="text-accent">.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
          Encontre vestígios técnicos de IA generativa num texto: caracteres
          invisíveis, metadados reveladores e indícios de estilo — com as posições
          exatas e um laudo que diz o que as evidências provam{" "}
          <em className="text-ink">e o que não provam</em>.
        </p>
      </header>

      <Analyzer />
      <HowItWorks />
      <Footer />
    </main>
  );
}
