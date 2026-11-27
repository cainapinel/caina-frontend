import type { MaterialConsulta } from "./tipos";

/**
 * Material de consulta do curso "IA no Dia a Dia": a coleção de pedidos prontos
 * (quicksheets) e os extras para depois do curso. Nomes e empresas são fictícios;
 * o que está entre colchetes é para o aluno trocar.
 */
export const consultaIaNoDiaADia: MaterialConsulta = {
  apresentacao:
    "Pedidos prontos para copiar, trocar o que está entre colchetes e usar. Estão agrupados por situação. Todos seguem a " +
    "fórmula P-C-T-F-R e funcionam no ChatGPT, Gemini, Claude ou Copilot. Lembre: antes de colar qualquer texto, tire os " +
    "dados sensíveis.",
  categorias: [
    {
      id: "emails",
      titulo: "E-mails e mensagens",
      pedidos: [
        {
          titulo: "Responder um e-mail",
          texto:
            "Escreva uma resposta para o e-mail abaixo em nome de [nome e cargo]. A resposta deve dizer que [o que você quer " +
            "responder, em poucas palavras]. Tom [cordial / formal / firme], até [número] linhas.\n\n[cole o e-mail]",
        },
        {
          titulo: "Cobrar um fornecedor com educação",
          texto:
            "Escreva um e-mail para o fornecedor [nome] cobrando [o que está pendente], que estava previsto para [data]. Peça " +
            "uma nova data até [prazo]. Tom firme, mas cordial, sem ameaças. Até seis linhas.",
        },
        {
          titulo: "Retomar um assunto sem resposta",
          texto:
            "Enviei o e-mail abaixo há [dias] e não tive resposta. Escreva um e-mail curto e gentil retomando o assunto, sem " +
            "parecer insistente, e facilite a resposta com uma pergunta simples de sim ou não.\n\n[cole o e-mail original]",
        },
        {
          titulo: "Recusar um convite",
          texto:
            "Escreva uma resposta recusando o convite abaixo em nome de [nome], por conflito de agenda. Agradeça, mantenha a porta " +
            "aberta para uma próxima oportunidade e não dê detalhes do motivo. Até cinco linhas.\n\n[cole o convite]",
        },
        {
          titulo: "Mudar o tom",
          texto:
            "Reescreva a mensagem abaixo para ficar mais [formal / gentil / direta / firme], sem mudar as informações. Mantenha o " +
            "tamanho parecido.\n\n[cole a mensagem]",
        },
        {
          titulo: "Lembrete por WhatsApp",
          texto:
            "Escreva uma mensagem de WhatsApp para lembrar [nome] de [compromisso] em [data e hora], em [local ou link]. " +
            "Profissional e leve, no máximo três linhas, sem emojis.",
        },
        {
          titulo: "Comunicado interno",
          texto:
            "Escreva um comunicado interno para [público] informando que [o que acontece] no dia [data]. Explique [o que muda " +
            "para as pessoas] e a quem procurar em caso de dúvida: [contato]. Título curto, no máximo dois parágrafos, tom claro e cordial.",
        },
      ],
    },
    {
      id: "revisao",
      titulo: "Revisão e tradução",
      pedidos: [
        {
          titulo: "Revisar português",
          texto:
            "Revise o texto abaixo: corrija ortografia, gramática, concordância e pontuação, sem mudar o estilo nem o conteúdo. " +
            "Depois, liste cada correção e explique em uma linha.\n\n[cole o texto]",
        },
        {
          titulo: "Deixar mais claro e curto",
          texto:
            "Reescreva o texto abaixo para ficar mais claro e com metade do tamanho, sem perder nenhuma informação importante. " +
            "Use frases curtas.\n\n[cole o texto]",
        },
        {
          titulo: "Traduzir com naturalidade",
          texto:
            "Traduza o texto abaixo para o [idioma], em tom profissional e natural, como um nativo escreveria. Depois, me diga em " +
            "português se alguma expressão pode soar diferente do que eu pretendia.\n\n[cole o texto]",
        },
      ],
    },
    {
      id: "reunioes",
      titulo: "Reuniões",
      pedidos: [
        {
          titulo: "Pauta",
          texto:
            "Monte a pauta de uma reunião de [duração] entre [participantes] sobre [tema]. Assuntos: [liste]. Para cada item, " +
            "indique o tempo e o objetivo (informar, discutir ou decidir). Reserve dez minutos no fim para próximos passos.",
        },
        {
          titulo: "Briefing para a diretora",
          texto:
            "A diretora vai se reunir com [pessoa e empresa] para tratar de [assunto]. Com base nas informações abaixo, prepare um " +
            "briefing de uma página: objetivo da reunião, histórico resumido, pontos de atenção e três perguntas que ela pode " +
            "fazer. Não invente: se faltar informação, escreva [VERIFICAR].\n\n[cole as informações]",
        },
        {
          titulo: "Ata a partir de anotações",
          texto:
            "Transforme as anotações abaixo em uma ata formal com: data, participantes, assuntos discutidos, decisões e uma tabela " +
            "de pendências (tarefa, responsável, prazo). Não invente: se algo não estiver claro, escreva [VERIFICAR].\n\n[cole as anotações]",
        },
        {
          titulo: "E-mail de envio da ata",
          texto:
            "Com base na ata acima, escreva um e-mail curto para os participantes com o resumo das decisões e a lista de " +
            "pendências com responsável e prazo. Até dez linhas.",
        },
      ],
    },
    {
      id: "agenda",
      titulo: "Agenda e organização",
      pedidos: [
        {
          titulo: "Prioridades da semana",
          texto:
            "Organize a lista de tarefas abaixo pela matriz urgente/importante (fazer agora, agendar, delegar, eliminar), em uma " +
            "tabela. Sugira o dia de cada item, considerando que tenho [compromissos fixos da semana].\n\n[cole a lista]",
        },
        {
          titulo: "Resolver um conflito de agenda",
          texto:
            "A diretora tem estes compromissos na [dia]: [liste com horários]. Surgiu [novo compromisso], que precisa de [duração]. " +
            "Proponha duas formas de reorganizar o dia, dizendo o que seria remarcado em cada uma e a mensagem que eu mandaria " +
            "para quem for remarcado.",
        },
        {
          titulo: "Checklist de viagem",
          texto:
            "A diretora vai de [origem] para [destino] de [data] a [data] para [motivo]. Monte um checklist do que eu preciso " +
            "providenciar, dividido em: antes da viagem, documentos, transporte, hospedagem, agenda no destino e depois da " +
            "viagem (reembolsos e relatório).",
        },
        {
          titulo: "Cronograma de evento",
          texto:
            "Vou organizar [evento] para [número] pessoas no dia [data]. Monte um cronograma de preparação de trás para a frente, " +
            "semana a semana, com tarefas e um campo para o responsável, e a lista de fornecedores que vou precisar contratar.",
        },
      ],
    },
    {
      id: "documentos",
      titulo: "Documentos e imagens",
      pedidos: [
        {
          titulo: "Resumo executivo",
          texto:
            "Leia o documento anexo e me entregue: (1) resumo em até cinco linhas; (2) prazos e datas; (3) valores; (4) o que " +
            "exige ação ou decisão. Indique a página de cada informação.",
        },
        {
          titulo: "Perguntar ao documento",
          texto:
            "Com base apenas no documento anexo, responda: [pergunta]. Se a resposta não estiver no documento, diga que não " +
            "encontrou. Cite o trecho exato.",
        },
        {
          titulo: "Comparar versões",
          texto:
            "Anexei duas versões do mesmo documento. Liste tudo o que mudou em uma tabela com: trecho, versão antiga, versão nova. " +
            "Não deixe passar mudanças de números, datas ou prazos.",
        },
        {
          titulo: "Foto para tabela",
          texto:
            "Extraia as informações [destes cartões de visita / destes recibos / deste quadro] e organize em uma tabela com as " +
            "colunas [liste as colunas]. Se algum trecho estiver ilegível, escreva [ILEGÍVEL].",
        },
      ],
    },
    {
      id: "planilhas",
      titulo: "Planilhas",
      pedidos: [
        {
          titulo: "Fazer algo novo na planilha",
          texto:
            "Tenho uma planilha no [Excel / Google Planilhas] com [descreva as colunas]. Quero [o que você quer: somar, filtrar, " +
            "destacar em cor, criar gráfico]. Explique passo a passo, clique por clique, como para quem nunca fez isso.",
        },
        {
          titulo: "Entender uma fórmula",
          texto:
            "Explique em português simples o que esta fórmula faz, parte por parte, e dê um exemplo com números: [cole a fórmula]",
        },
      ],
    },
    {
      id: "pesquisa",
      titulo: "Pesquisa",
      pedidos: [
        {
          titulo: "Pesquisa com fontes",
          texto:
            "Pesquise [o que você procura] e liste [número] opções. Para cada uma, informe [critérios: preço, endereço, horário] " +
            "e o link da fonte. Se não tiver certeza de alguma informação, avise.",
        },
        {
          titulo: "Comparar opções",
          texto:
            "Compare as opções abaixo em uma tabela com os critérios [liste os critérios]. No fim, diga qual combina melhor com " +
            "[sua necessidade] e por quê.\n\n[cole as opções]",
        },
      ],
    },
    {
      id: "comecar",
      titulo: "Quando não sei por onde começar",
      pedidos: [
        {
          titulo: "A IA faz as perguntas",
          texto:
            "Quero [objetivo]. Antes de fazer qualquer coisa, me faça até cinco perguntas sobre o que você precisa saber para fazer um bom trabalho.",
        },
        {
          titulo: "O que estou esquecendo?",
          texto: "Vou [tarefa ou evento]. Este é o meu plano: [descreva]. O que eu posso estar esquecendo? Liste em ordem de importância.",
        },
        {
          titulo: "Me ensine",
          texto:
            "Me explique [assunto] como se eu nunca tivesse ouvido falar, com um exemplo do dia a dia de uma secretária. Depois, " +
            "me faça uma pergunta para ver se eu entendi.",
        },
      ],
    },
    {
      id: "conferir",
      titulo: "Conferência e segurança",
      pedidos: [
        {
          titulo: "Apontar as próprias dúvidas",
          texto: "Releia a sua resposta. Quais informações você tem menos certeza? Liste o que eu deveria conferir antes de usar.",
        },
        {
          titulo: "Revisar antes de enviar",
          texto:
            "Vou responder o e-mail abaixo com a minha resposta logo em seguida. Confira se a resposta trata de todas as perguntas " +
            "do e-mail original e se há algo ambíguo ou que possa ser mal interpretado.\n\nE-mail original: [cole]\n\nMinha resposta: [cole]",
        },
        {
          titulo: "Isto parece golpe?",
          texto:
            "Recebi a mensagem abaixo. Analise e me diga se há sinais de golpe ou phishing, explicando cada sinal. Não vou clicar " +
            "em nenhum link até ter certeza.\n\n[cole o texto da mensagem, sem clicar nos links]",
        },
      ],
    },
    {
      id: "personalizar",
      titulo: "Personalização",
      pedidos: [
        {
          titulo: "Instruções personalizadas",
          texto:
            "Sou [cargo] em [tipo de empresa]. Escrevo em português do Brasil, com tom [cordial e profissional] e frases curtas. " +
            "Assino como \"[assinatura]\". Quando faltar informação, pergunte antes de supor. Nunca invente nomes, números ou " +
            "datas: marque [VERIFICAR]. Prefiro respostas diretas, sem introduções longas.",
        },
        {
          titulo: "Assistente de atas (Projeto, Gem ou GPT)",
          texto:
            "Você é o meu assistente de atas. Sempre que eu colar anotações de reunião, devolva: data, participantes, assuntos, " +
            "decisões e tabela de pendências (tarefa, responsável, prazo). Nunca invente informações: marque [VERIFICAR]. Depois " +
            "da ata, ofereça um e-mail curto de envio.",
        },
      ],
    },
  ],
  ajustes: [
    "Deixe mais curto.",
    "Deixe mais formal. / Deixe mais caloroso.",
    "Me dê três versões diferentes.",
    "Transforme em tópicos. / Transforme em tabela.",
    "Tire o [trecho] e junte o resto.",
    "O que está faltando?",
    "Use este texto como modelo de estilo: [cole]",
    "Explique por que você fez assim.",
  ],
  antesDeEnviar: [
    "Li o texto inteiro, do começo ao fim",
    "Nomes, cargos e empresas estão certos",
    "Números, valores e telefones conferidos",
    "Datas, horários e dias da semana conferidos no calendário",
    "Links abertos e funcionando",
    "Nada foi prometido em nome da empresa sem autorização",
    "O tom combina com a pessoa que vai receber",
    "Não sobrou nenhum [colchete] ou [VERIFICAR]",
  ],
  plano30Dias: [
    { periodo: "Semana 1", foco: "Escrita", tarefas: ["Use a IA em pelo menos um e-mail por dia", "Guarde os três pedidos que mais funcionaram"] },
    { periodo: "Semana 2", foco: "Reuniões", tarefas: ["Faça a ata de todas as reuniões com a IA", "Prepare uma pauta e um briefing com a IA"] },
    { periodo: "Semana 3", foco: "Documentos e organização", tarefas: ["Resuma um documento longo com páginas de referência", "Organize a semana pela matriz urgente/importante"] },
    { periodo: "Semana 4", foco: "Rotina", tarefas: ["Configure as instruções personalizadas", "Revise a sua biblioteca e meça o tempo economizado"] },
  ],
  modeloKit: [
    { secao: "Minhas cinco tarefas recorrentes", campos: ["Tarefa", "Pedido que uso", "Ferramenta", "Tempo antes", "Tempo depois"] },
    { secao: "Minhas instruções personalizadas", campos: ["Cargo e empresa", "Tom e estilo", "Assinatura", "Regras (o que nunca fazer)"] },
    { secao: "Meu semáforo de dados", campos: ["🟢 Posso colar", "🟡 Só anonimizado", "🔴 Nunca"] },
    { secao: "Minha rotina semanal", campos: ["Segunda", "Todo dia", "Depois das reuniões", "Sexta"] },
  ],
};
