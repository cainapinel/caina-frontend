/**
 * Seção "Como funciona" do Vestígio — a transparência é parte do produto.
 */

export const honestyStatement = {
  title: "Por que não prometemos “detectar IA”",
  body:
    "Não existe marca d'água pública de LLM detectável por terceiros. O Claude " +
    "não insere marca d'água em texto; o SynthID-Text do Google só é verificável " +
    "pelo próprio Google; a OpenAI nunca lançou o seu. Ferramentas que prometem " +
    "um veredito binário (“é IA” / “não é IA”) entregam falsa certeza. O " +
    "Vestígio faz o que é tecnicamente honesto: encontra vestígios reais, " +
    "explica cada um e diz claramente o que eles provam — e o que não provam.",
};

export interface Technique {
  title: string;
  body: string;
  limitation: string;
}

export const techniques: Technique[] = [
  {
    title: "1 · Forense de caracteres Unicode",
    body:
      "Chatbots e pipelines de texto deixam caracteres que ninguém digita por " +
      "acidente: espaços de largura zero (U+200B), o espaço estreito sem quebra " +
      "(U+202F, artefato notório de saídas do ChatGPT), controles bidirecionais, " +
      "seletores de variação, caracteres TAG usados em esteganografia e " +
      "homoglifos de outros alfabetos. O Vestígio varre o texto codepoint por " +
      "codepoint e destaca cada achado na posição exata, com explicação.",
    limitation:
      "Limitação: colar o texto num editor simples remove a maioria desses " +
      "caracteres — a ausência deles não prova escrita humana.",
  },
  {
    title: "2 · Metadados de documentos",
    body:
      "Arquivos .docx e .pdf carregam a própria história: qual software os " +
      "gerou (python-docx, Pandoc e ReportLab denunciam geração programática), " +
      "quantas sessões de edição existiram (RSIDs do Word), quanto tempo de " +
      "edição foi registrado e se criação e modificação aconteceram no mesmo " +
      "instante — a assinatura de um texto colado de uma vez só.",
    limitation:
      "Limitação: exportações legítimas do Google Docs/LibreOffice também têm " +
      "poucos metadados de edição; cada sinal vem com sua nota de falso positivo.",
  },
  {
    title: "3 · Estilometria",
    body:
      "Frases-clichê recorrentes em texto gerado (“é importante ressaltar”, " +
      "“delve”), densidade de travessões, uniformidade suspeita no comprimento " +
      "de sentenças e parágrafos, e resíduo de Markdown (**negrito**, ### " +
      "títulos) dentro de documentos — o rastro de quem colou a resposta de um " +
      "chatbot direto no editor.",
    limitation:
      "Limitação: são os sinais mais fracos — bons escritores também usam " +
      "travessões e estrutura. Todos entram no laudo como indícios, nunca prova.",
  },
];

export const privacyNote =
  "Privacidade: nada do que você envia é armazenado. A análise acontece em " +
  "memória no servidor e é descartada assim que a resposta chega ao seu " +
  "navegador.";
