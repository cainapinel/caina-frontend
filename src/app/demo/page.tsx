import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { Arena } from "@/components/demo/Arena";
import { Arquitetura } from "@/components/demo/Arquitetura";
import { Deck, type Slide } from "@/components/demo/Deck";
import { Desafio } from "@/components/demo/Desafio";
import { SimuladorPoliticas } from "@/components/demo/SimuladorPoliticas";
import {
  Configuracao,
  SlideApendice,
  SlideCapa,
  SlideDescoberta,
  SlideModelo,
  SlideObjecoes,
  SlideObjetivo,
  SlidePlataforma,
  SlidePOC,
  SlideProximos,
  SlideResultados,
  SlideRisco,
  SlideSucesso,
  Titulo,
} from "@/components/demo/Slides";
import { arquitetura, aviso, notas } from "@/content/demo/narrativa";
import rodadaJson from "@/content/demo/rodada.json";
import type { Rodada } from "@/lib/demo/types";

export const metadata: Metadata = {
  title: "NeuralTrust × ExemploPay",
  description: "Simulação de reunião de vendas: agente de IA atacado com e sem a NeuralTrust. Demo independente.",
  robots: { index: false, follow: false },
};

// Sempre renderizada no servidor: o acesso depende do cookie de cada visitante.
export const dynamic = "force-dynamic";

function AcessoRestrito() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">acesso restrito</p>
      <h1 className="mt-3 text-2xl font-bold">Esta demo é acessada por link</h1>
      <p className="mt-3 text-muted">
        A apresentação dispara ataques reais contra um agente de IA, por isso fica atrás de um link com token. Se você recebeu o
        link, abra-o de novo; se não, peça a Cainã Pinel.
      </p>
      <Link href="/" className="mt-6 font-mono text-sm text-muted hover:text-accent">← caina.pinel.com.br</Link>
    </main>
  );
}

export default async function DemoPage() {
  const token = (await cookies()).get("demo_k")?.value;
  const esperado = process.env.DEMO_ACCESS_TOKEN;
  if (!token || !esperado || token !== esperado) return <AcessoRestrito />;

  const rodada = rodadaJson as unknown as Rodada;

  const slides: Slide[] = [
    { id: "capa", titulo: "Capa", conteudo: <SlideCapa /> },
    { id: "objetivo", titulo: "Objetivo da reunião", conteudo: <SlideObjetivo /> },
    { id: "descoberta", titulo: "O que ouvimos de vocês", conteudo: <SlideDescoberta /> },
    { id: "risco", titulo: "O risco de negócio", conteudo: <SlideRisco /> },
    { id: "modelo", titulo: "O modelo sozinho não basta", conteudo: <SlideModelo rodada={rodada} /> },
    { id: "plataforma", titulo: "A plataforma NeuralTrust", conteudo: <SlidePlataforma /> },
    {
      id: "arquitetura",
      titulo: "Antes e depois",
      conteudo: (
        <>
          <Titulo compacto kicker="Arquitetura" titulo={arquitetura.titulo} />
          <Arquitetura />
        </>
      ),
    },
    {
      id: "demo",
      titulo: "Demonstração ao vivo",
      conteudo: (
        <>
          <Titulo
            compacto
            kicker="Demonstração"
            titulo="Os mesmos ataques, com e sem a NeuralTrust"
            sub="Escolha um ataque. O replay mostra uma execução real gravada; o botão ao vivo dispara o agente agora, nos dois modos ao mesmo tempo."
          />
          <Arena rodada={rodada} token={token} />
        </>
      ),
    },
    {
      id: "simulador",
      titulo: "O que cada política protege",
      conteudo: (
        <>
          <Titulo
            compacto
            kicker="Políticas"
            titulo="Cada política, o risco que ela fecha"
          />
          <SimuladorPoliticas rodada={rodada} />
        </>
      ),
    },
    { id: "resultados", titulo: "Resultados", conteudo: <SlideResultados rodada={rodada} /> },
    { id: "objecoes", titulo: "Perguntas frequentes", conteudo: <SlideObjecoes rodada={rodada} /> },
    { id: "poc", titulo: "Proposta de POC", conteudo: <SlidePOC rodada={rodada} /> },
    { id: "sucesso", titulo: "Pós-venda", conteudo: <SlideSucesso /> },
    {
      id: "desafio",
      titulo: "Tente você mesmo",
      conteudo: (
        <>
          <Titulo compacto kicker="Sua vez" titulo="Tente fazer o agente vazar dados" sub="Escreva o ataque. Ele roda nos dois modos ao mesmo tempo, e o placar mostra qual camada barrou cada tentativa." />
          <Desafio token={token} />
        </>
      ),
    },
    { id: "proximos", titulo: "Próximos passos", conteudo: <SlideProximos /> },
    {
      id: "apendice",
      titulo: "Apêndice: método",
      conteudo: (
        <>
          <SlideApendice />
          <Configuracao rodada={rodada} />
        </>
      ),
    },
  ].map((s) => ({ ...s, notas: notas[s.id] }));

  return <Deck slides={slides} aviso={aviso} />;
}
