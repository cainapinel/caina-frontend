import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { Footer } from "@/components/landing/Footer";
import { Apresentador } from "@/components/demo/Apresentador";
import { Arena } from "@/components/demo/Arena";
import { Arquitetura } from "@/components/demo/Arquitetura";
import { Desafio } from "@/components/demo/Desafio";
import { Cliente, Numeros, Politicas, PosVenda } from "@/components/demo/Secoes";
import { aviso } from "@/content/demo/narrativa";
import rodadaJson from "@/content/demo/rodada.json";
import type { Rodada } from "@/lib/demo/types";

export const metadata: Metadata = {
  title: "Case: agente de IA protegido pela NeuralTrust",
  description: "Demo independente: agente de e-mail atacado com e sem o gateway da NeuralTrust.",
  robots: { index: false, follow: false },
};

// Sempre renderizada no servidor: o acesso depende do cookie de cada visitante.
export const dynamic = "force-dynamic";

const SECOES = [
  { id: "cliente", titulo: "O cliente e a dor" },
  { id: "arquitetura", titulo: "Antes e depois" },
  { id: "ataques", titulo: "Ataques lado a lado" },
  { id: "politicas", titulo: "Políticas" },
  { id: "numeros", titulo: "Números" },
  { id: "pos-venda", titulo: "Pós-venda" },
  { id: "desafio", titulo: "Tente você mesmo" },
];

function Secao({ id, numero, titulo, sub, children }: { id: string; numero: number; titulo: string; sub: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-14 px-4 py-14 md:px-6">
      <p className="font-mono text-sm text-accent">{String(numero).padStart(2, "0")}</p>
      <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">{titulo}</h2>
      <p className="mt-2 max-w-3xl text-muted">{sub}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function AcessoRestrito() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">acesso restrito</p>
      <h1 className="mt-3 text-2xl font-bold">Esta demo é acessada por link</h1>
      <p className="mt-3 text-muted">
        O case dispara ataques reais contra um agente de IA, por isso fica atrás de um link com token. Se você recebeu o
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

  return (
    <main>
      <div className="border-b border-accent/30 bg-accent-soft px-4 py-2 text-center text-xs text-accent">{aviso}</div>

      <header className="mx-auto max-w-6xl px-4 pt-14 pb-6 md:px-6">
        <Link href="/" className="font-mono text-sm text-muted hover:text-accent">← caina.pinel.com.br</Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
          Um agente de IA com acesso a dados de clientes.
          <br />
          <span className="text-accent">O que acontece quando ele é atacado?</span>
        </h1>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted">
          Um case de pré-venda e pós-venda: o mesmo agente, os mesmos ataques, com e sem o gateway da NeuralTrust na frente.
          Tudo o que aparece aqui saiu de execuções reais, gravadas ou disparadas ao vivo.
        </p>
      </header>

      <Apresentador secoes={SECOES} />

      <Secao id="cliente" numero={1} titulo="O cliente e a dor" sub="Quem é o cliente fictício, o que o agente faz e por que isso preocupa quem responde por segurança e por LGPD.">
        <Cliente />
      </Secao>
      <Secao id="arquitetura" numero={2} titulo="Antes e depois" sub="Onde ficam as chaves e por onde passa cada pedido, com e sem o gateway.">
        <Arquitetura />
      </Secao>
      <Secao id="ataques" numero={3} titulo="Ataques lado a lado" sub="Escolha um cenário. O replay mostra uma execução real gravada; o botão ao vivo dispara o agente agora, nos dois modos ao mesmo tempo. Cada bloqueio diz qual camada agiu.">
        <Arena rodada={rodada} token={token} />
      </Secao>
      <Secao id="politicas" numero={4} titulo="Políticas" sub="O que foi ligado na NeuralTrust para chegar a esse resultado, sem mudar uma linha do agente.">
        <Politicas rodada={rodada} />
      </Secao>
      <Secao id="numeros" numero={5} titulo="Números" sub="Todos os cenários, cinco vezes em cada modo, com pedidos legítimos para medir falsos positivos.">
        <Numeros rodada={rodada} />
      </Secao>
      <Secao id="pos-venda" numero={6} titulo="Pós-venda" sub="Como eu levaria isso para produção num cliente real, e o que a própria demo ensinou.">
        <PosVenda rodada={rodada} />
      </Secao>
      <Secao id="desafio" numero={7} titulo="Tente você mesmo" sub="Escreva o seu ataque. Ele roda contra o agente nos dois modos, e o placar mostra qual camada barrou cada tentativa.">
        <Desafio token={token} />
      </Secao>

      <Footer />
    </main>
  );
}
