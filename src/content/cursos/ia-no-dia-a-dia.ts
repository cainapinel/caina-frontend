import type { Curso } from "./tipos";

/**
 * Curso "IA no Dia a Dia" — material do aluno.
 *
 * Público: pessoas de fora da área de tecnologia. Primeira turma pensada para
 * secretárias e assistentes executivas. Todos os nomes de pessoas e empresas
 * dos exemplos são fictícios.
 *
 * Cuidado ao atualizar: nomes de planos, preços e botões das ferramentas mudam
 * com frequência. O texto evita citá-los de propósito, para não envelhecer.
 */

export const iaNoDiaADia: Curso = {
  slug: "ia-no-dia-a-dia",
  titulo: "IA no Dia a Dia",
  nivel: "Iniciante",
  subtitulo: "Introdução prática à inteligência artificial para quem não é de tecnologia",
  resumo:
    "Aprenda a usar ChatGPT, Gemini, Claude e Copilot para escrever e-mails, preparar reuniões, " +
    "organizar a agenda e resumir documentos, com segurança e sem precisar entender de programação.",
  publico: [
    "Secretárias, assistentes executivas e profissionais administrativos",
    "Quem nunca usou IA ou usou poucas vezes e não sabe se está usando bem",
    "Quem quer ganhar tempo em tarefas repetitivas de escrita e organização",
  ],
  formato: [
    { rotulo: "Módulos", valor: "8" },
    { rotulo: "Duração sugerida", valor: "1h30 por módulo" },
    { rotulo: "Nível", valor: "Iniciante, do zero" },
    { rotulo: "Ferramentas", valor: "Versões gratuitas bastam" },
  ],
  preRequisitos: [
    "Saber usar navegador, e-mail e um editor de texto (Word ou Google Docs)",
    "Um computador ou celular com internet",
    "Uma conta de e-mail para criar o cadastro nas ferramentas",
  ],
  resultados: [
    "Explicar com suas palavras o que a IA faz, e por que às vezes ela erra",
    "Escolher a ferramenta certa para cada situação",
    "Escrever pedidos claros que geram boas respostas já na primeira tentativa",
    "Redigir, revisar e responder e-mails e mensagens em menos tempo",
    "Transformar anotações soltas em atas, pautas e listas de pendências",
    "Resumir documentos longos e encontrar informações neles",
    "Proteger dados da empresa e reconhecer golpes que usam IA",
    "Montar uma rotina de trabalho com IA e uma biblioteca de pedidos prontos",
  ],
  comoEstudar: [
    "Estude um módulo por vez, na ordem. Cada um usa o que veio antes.",
    "Leia o módulo com a ferramenta aberta ao lado e teste cada exemplo enquanto lê.",
    "Faça os exercícios. A prática é o que fixa o aprendizado, não a leitura.",
    "Use os slides para revisar: eles resumem o módulo e trazem a explicação de cada tela.",
    "No fim de cada módulo, marque o checklist. Se algum item ficou em dúvida, volte ao trecho.",
    "Os textos entre colchetes, como [data] ou [nome], são para você trocar pelos seus dados.",
  ],
  personagens:
    "Nos exemplos, você trabalha como secretária executiva da **Dra. Helena Prado**, diretora comercial " +
    "da **Exemplar Distribuidora**. Pessoas, empresas, endereços e números são fictícios.",
  atualizadoEm: "novembro de 2026",

  modulos: [
    // ---------------------------------------------------------------------------------------
    {
      numero: 1,
      slug: "o-que-e-ia",
      titulo: "O que é IA, sem complicação",
      subtitulo: "Como essas ferramentas funcionam, o que fazem bem e onde erram",
      duracao: "1h30",
      objetivos: [
        "Explicar em uma frase o que é IA generativa",
        "Entender por que a IA às vezes inventa informações",
        "Saber que tipo de tarefa vale a pena entregar à IA",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "Você já usa inteligência artificial há anos, talvez sem perceber: o corretor do celular, o filtro de spam " +
            "do e-mail, as sugestões de filmes do streaming, o GPS que desvia do trânsito. A novidade dos últimos anos é " +
            "a **IA generativa**: ferramentas que **criam** textos, imagens e áudios a partir de um pedido escrito em " +
            "linguagem comum, do jeito que você escreveria para uma colega.",
        },
        { tipo: "subtitulo", texto: "Como funciona, na versão de um minuto" },
        {
          tipo: "p",
          texto:
            "ChatGPT, Gemini, Claude e Copilot funcionam sobre **modelos de linguagem**. Eles foram treinados com uma " +
            "quantidade enorme de textos (livros, sites, artigos) e aprenderam os padrões da língua: que palavras " +
            "costumam vir depois de outras, em que contexto, com que tom. Quando você faz um pedido, o modelo escreve a " +
            "resposta pedaço por pedaço, escolhendo a continuação que faz mais sentido.",
        },
        {
          tipo: "p",
          texto:
            "Por isso a IA é ótima com **linguagem**: escrever, reescrever, resumir, organizar, traduzir e explicar. " +
            "E por isso ela não é uma enciclopédia: ela não consulta uma lista de fatos verificados, ela gera o texto " +
            "mais provável. Na maior parte das vezes, o mais provável é o correto. Nem sempre.",
        },
        {
          tipo: "dica",
          titulo: "Uma imagem para guardar",
          texto:
            "Pense na IA como um **assistente muito rápido e bem informado**, que leu quase tudo e escreve muito bem, " +
            "mas que **não conhece a sua empresa**, às vezes fala com segurança sobre o que não sabe e precisa de " +
            "instruções claras. Quem orienta e revisa o trabalho dele é você.",
        },
        { tipo: "subtitulo", texto: "O que ela faz bem, e onde precisa de supervisão" },
        {
          tipo: "tabela",
          colunas: ["Faz muito bem", "Precisa de supervisão"],
          linhas: [
            ["Escrever rascunhos de e-mails, mensagens e comunicados", "Informar fatos precisos (datas, leis, telefones, endereços)"],
            ["Ajustar o tom de um texto: mais formal, mais gentil, mais curto", "Fazer contas longas ou com muitos números"],
            ["Resumir textos longos e trocas de e-mail", "Saber o que aconteceu ontem (a menos que pesquise na internet)"],
            ["Transformar anotações soltas em ata, tabela ou lista", "Conhecer dados da sua empresa que você não informou"],
            ["Revisar ortografia e gramática", "Decidir por você em assuntos que envolvem pessoas ou dinheiro"],
            ["Traduzir, explicar e sugerir ideias", "Dizer em que dia da semana cai uma data"],
          ],
        },
        { tipo: "subtitulo", texto: "Alucinação: quando a IA inventa" },
        {
          tipo: "p",
          texto:
            "Como o modelo gera o texto mais provável, ele pode produzir algo que **parece certo e não é**: um telefone " +
            "que não existe, uma lei com o número errado, um horário de voo, uma citação que ninguém disse. Isso tem nome: " +
            "**alucinação**. Não é mentira proposital, é um efeito do jeito como a ferramenta funciona. As ferramentas " +
            "melhoraram muito nesse ponto, mas o risco continua existindo.",
        },
        {
          tipo: "cuidado",
          titulo: "A regra de ouro do curso",
          texto:
            "**A IA faz o rascunho, você assina.** Tudo o que sair com o seu nome ou com o nome da sua diretora passa pela " +
            "sua leitura antes. Ela economiza o seu tempo de escrever, não o seu tempo de pensar.",
        },
        { tipo: "subtitulo", texto: "Palavras que você vai ouvir" },
        {
          tipo: "lista",
          itens: [
            "**Prompt**: o pedido que você escreve para a IA. Pode ser uma frase ou uma página.",
            "**Resposta**: o que a IA devolve.",
            "**Conversa** (ou chat): a sequência de pedidos e respostas. Dentro dela, a IA lembra do que já foi dito.",
            "**Contexto**: as informações que você dá para a IA entender a situação.",
            "**Modelo**: o \"cérebro\" por trás da ferramenta. Cada empresa tem os seus, e eles ganham versões novas com frequência.",
            "**Alucinação**: quando a IA apresenta uma informação falsa como se fosse verdadeira.",
          ],
        },
      ],
      exercicios: [
        {
          titulo: "Sua primeira conversa",
          enunciado: "Converse com uma IA pela primeira vez (ou de novo, prestando atenção).",
          passos: [
            "Abra o ChatGPT (chatgpt.com) ou o Gemini (gemini.google.com). Não precisa pagar nada.",
            "Escreva: \"Explique o que você é e quais são os seus limites, como se eu nunca tivesse usado inteligência artificial.\"",
            "Depois pergunte algo cuja resposta você já sabe muito bem, por exemplo sobre o bairro onde mora ou sobre a sua profissão.",
            "Confira: a resposta estava certa? Tinha algum detalhe inventado?",
          ],
          entrega: "Anote três coisas que surpreenderam você, para bem ou para mal.",
        },
      ],
      checklist: [
        "Sei explicar em uma frase o que é IA generativa",
        "Sei o que é alucinação e por que ela acontece",
        "Conheço a regra de ouro: a IA rascunha, eu reviso e assino",
        "Fiz a minha primeira conversa e conferi uma resposta",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 2,
      slug: "ferramentas",
      titulo: "Conhecendo as ferramentas",
      subtitulo: "ChatGPT, Gemini, Claude, Copilot: qual usar e como começar",
      duracao: "1h30",
      objetivos: [
        "Conhecer os principais assistentes de IA e o ponto forte de cada um",
        "Criar uma conta e fazer o primeiro uso com segurança",
        "Entender a tela: onde escrever, anexar, falar e começar de novo",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "Existem várias ferramentas, e a boa notícia é que **elas funcionam de forma muito parecida**: uma caixa de " +
            "texto, um pedido, uma resposta. O que você aprender numa serve para as outras. A diferença está nos detalhes " +
            "e, principalmente, em **onde cada uma se encaixa** no seu dia de trabalho.",
        },
        {
          tipo: "tabela",
          colunas: ["Ferramenta", "Empresa", "Ponto forte no seu dia a dia", "Onde acessar"],
          linhas: [
            ["ChatGPT", "OpenAI", "A mais conhecida. Generalista, vai bem em quase tudo e tem um ótimo modo de conversa por voz.", "chatgpt.com e app"],
            ["Gemini", "Google", "Conversa com Gmail, Agenda, Docs e Drive quando a empresa usa Google Workspace.", "gemini.google.com, app e dentro do Gmail"],
            ["Claude", "Anthropic", "Escrita natural e cuidadosa. Lida bem com documentos longos.", "claude.ai e app"],
            ["Copilot", "Microsoft", "Integrado ao Outlook, Word, Excel e Teams quando a empresa usa Microsoft 365.", "copilot.microsoft.com e dentro do Office"],
            ["Meta AI", "Meta", "Já está dentro do WhatsApp. Bom para perguntas rápidas.", "WhatsApp e Instagram"],
          ],
        },
        {
          tipo: "dica",
          titulo: "Qual escolher?",
          texto:
            "Comece pela que **a sua empresa já usa**. Se o e-mail da empresa é Gmail, experimente o Gemini. Se é Outlook, " +
            "o Copilot. Para uso pessoal, escolha uma e fique com ela por algumas semanas antes de comparar. Trocar de " +
            "ferramenta toda hora atrapalha mais do que ajuda.",
        },
        { tipo: "subtitulo", texto: "Grátis ou pago?" },
        {
          tipo: "p",
          texto:
            "Todas têm uma **versão gratuita** com limites, como um número máximo de mensagens por dia ou acesso a menos " +
            "recursos. Os planos pagos liberam mais uso e modelos mais capazes. **Para este curso, a versão gratuita basta.** " +
            "Preços e nomes de planos mudam com frequência, então confira sempre no site oficial antes de assinar.",
        },
        {
          tipo: "cuidado",
          titulo: "Conta da empresa ou conta pessoal?",
          texto:
            "Se a empresa oferece uma conta corporativa de IA, use-a para os assuntos de trabalho: em geral ela tem regras " +
            "de privacidade mais rígidas. Se não há uma, pergunte à TI ou à sua gestora qual é a política antes de colar " +
            "qualquer informação da empresa numa conta pessoal. O módulo 7 aprofunda esse assunto.",
        },
        { tipo: "subtitulo", texto: "Criando a sua conta" },
        {
          tipo: "passos",
          itens: [
            "**Digite o endereço oficial** no navegador (chatgpt.com, gemini.google.com, claude.ai). Não clique em anúncios: existem sites falsos que imitam essas ferramentas.",
            "Clique em **Entrar** ou **Cadastrar** e use a sua conta Google, Microsoft ou um e-mail.",
            "Leia o resumo de privacidade e aceite os termos.",
            "Se quiser usar por voz ou no celular, instale o **aplicativo oficial** pela loja do celular, conferindo o nome da empresa desenvolvedora.",
          ],
        },
        { tipo: "subtitulo", texto: "Anatomia da tela" },
        {
          tipo: "lista",
          itens: [
            "**Caixa de mensagem**: onde você escreve o pedido. Enter envia; Shift+Enter pula linha.",
            "**Anexo** (ícone de clipe ou de +): envia arquivos, fotos e documentos para a IA ler.",
            "**Microfone**: dita o pedido em vez de digitar. Alguns apps têm conversa por voz completa.",
            "**Nova conversa**: começa do zero, sem a memória da conversa anterior.",
            "**Histórico** (barra lateral): todas as suas conversas antigas, para retomar depois.",
            "**Configurações**: idioma, privacidade e personalização. Vamos mexer nelas no módulo 7.",
          ],
        },
        {
          tipo: "dica",
          titulo: "Uma conversa por assunto",
          texto:
            "A IA lembra o que foi dito **dentro da mesma conversa**. Assunto novo, conversa nova. Isso evita que ela misture " +
            "o e-mail do fornecedor com a pauta da reunião, e deixa o seu histórico organizado.",
        },
      ],
      exercicios: [
        {
          titulo: "O mesmo pedido em duas ferramentas",
          enunciado: "Compare duas ferramentas com um pedido idêntico.",
          passos: [
            "Crie conta em duas ferramentas diferentes (por exemplo ChatGPT e Gemini, ou Gemini e Claude).",
            "Envie o mesmo pedido nas duas: \"Escreva um e-mail curto confirmando a reunião de quinta-feira às 10h com o fornecedor Alfa Embalagens, na sala 3 da Exemplar Distribuidora.\"",
            "Compare as respostas: tom, tamanho, clareza. Qual você enviaria? O que mudaria?",
          ],
          entrega: "Escolha a ferramenta que vai usar como principal nas próximas semanas e anote por quê.",
        },
      ],
      checklist: [
        "Conheço as principais ferramentas e sei qual combina com o sistema da minha empresa",
        "Criei conta em pelo menos uma ferramenta, pelo endereço oficial",
        "Sei anexar um arquivo, usar o microfone e abrir uma nova conversa",
        "Sei onde ficam o histórico e as configurações",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 3,
      slug: "como-pedir",
      titulo: "A arte de pedir",
      subtitulo: "Como escrever pedidos (prompts) que geram boas respostas",
      duracao: "1h30",
      objetivos: [
        "Usar uma fórmula simples de cinco partes para montar pedidos",
        "Melhorar uma resposta conversando, em vez de desistir",
        "Começar a sua biblioteca de pedidos prontos",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "A qualidade da resposta depende muito da qualidade do pedido. Pedido vago gera resposta genérica. É como " +
            "delegar para uma colega nova: quanto mais claro você é sobre a situação e o resultado esperado, melhor o trabalho volta.",
        },
        {
          tipo: "antesDepois",
          antes: "Escreva um e-mail para o fornecedor.",
          depois:
            "Você é uma secretária executiva experiente. A Dra. Helena Prado, diretora comercial da Exemplar Distribuidora, " +
            "precisa remarcar a reunião de quinta-feira com a Alfa Embalagens por causa de uma viagem. Escreva um e-mail " +
            "pedindo para remarcar e sugira três horários na semana seguinte, em lista. Até cinco linhas, tom cordial e " +
            "formal. Não mencione o motivo da viagem.",
          porque:
            "A segunda versão diz quem escreve, para quem, por quê, o que precisa conter, o tamanho e o que evitar. " +
            "A IA não precisa adivinhar nada.",
        },
        { tipo: "subtitulo", texto: "A fórmula P-C-T-F-R" },
        {
          tipo: "tabela",
          colunas: ["Parte", "Pergunta que ela responde", "Exemplo"],
          linhas: [
            ["**P**apel", "Quem a IA deve ser?", "Aja como uma secretária executiva experiente."],
            ["**C**ontexto", "O que ela precisa saber da situação?", "A diretora precisa remarcar a reunião com a Alfa Embalagens."],
            ["**T**arefa", "O que exatamente ela deve fazer?", "Escreva um e-mail pedindo para remarcar."],
            ["**F**ormato", "Como você quer a resposta?", "Até cinco linhas, com três opções de horário em lista."],
            ["**R**egras", "Tom, limites e o que evitar", "Tom cordial e formal. Não mencione o motivo."],
          ],
        },
        {
          tipo: "dica",
          titulo: "Para memorizar",
          texto:
            "\"**P**ara **C**ada **T**arefa, **F**ormato e **R**egras.\" Nem todo pedido precisa das cinco partes: para " +
            "uma pergunta rápida, a tarefa basta. Para o que vai ser enviado a alguém, use todas.",
        },
        { tipo: "subtitulo", texto: "Experimente: monte o seu pedido" },
        { tipo: "montador" },
        { tipo: "subtitulo", texto: "Converse, não desista na primeira resposta" },
        {
          tipo: "p",
          texto:
            "A primeira resposta é um rascunho. Em vez de começar de novo, **peça ajustes na mesma conversa**. A IA mantém " +
            "tudo o que já foi dito e só muda o que você pedir. Alguns pedidos de ajuste que funcionam muito bem:",
        },
        {
          tipo: "lista",
          itens: [
            "\"Deixe mais curto.\" ou \"Resuma em três linhas.\"",
            "\"Deixe mais formal.\" ou \"Deixe mais caloroso, sem perder o profissionalismo.\"",
            "\"Tire o segundo parágrafo e junte o resto.\"",
            "\"Me dê três versões diferentes para eu escolher.\"",
            "\"O que está faltando neste e-mail?\"",
            "\"Explique por que você escolheu essa estrutura.\"",
          ],
        },
        {
          tipo: "prompt",
          titulo: "Deixe a IA fazer as perguntas",
          texto:
            "Quero preparar a pauta da reunião mensal da diretoria comercial. Antes de escrever qualquer coisa, me faça até " +
            "cinco perguntas sobre o que você precisa saber para fazer uma boa pauta.",
          nota: "Útil quando você não sabe por onde começar ou não sabe que informações dar.",
        },
        {
          tipo: "dica",
          titulo: "Mostre um exemplo",
          texto:
            "Se você tem um texto que ficou do jeito certo, cole-o e diga: \"Use este e-mail como modelo de estilo e tamanho.\" " +
            "Um exemplo vale mais do que muitas instruções.",
        },
        { tipo: "subtitulo", texto: "Sua biblioteca de pedidos" },
        {
          tipo: "p",
          texto:
            "Toda vez que um pedido funcionar bem, **guarde-o** num documento (Word, Google Docs ou o app de notas do celular). " +
            "Deixe as partes que mudam entre colchetes, como [nome do fornecedor] e [data]. Em poucas semanas você terá um kit " +
            "pronto para as tarefas que se repetem.",
        },
      ],
      exercicios: [
        {
          titulo: "Três tarefas reais da sua semana",
          enunciado: "Aplique a fórmula P-C-T-F-R em tarefas de verdade.",
          passos: [
            "Liste três tarefas de escrita que você faz toda semana (um e-mail recorrente, um lembrete, um aviso).",
            "Para cada uma, escreva um pedido usando as cinco partes. Use o montador acima, se quiser.",
            "Envie para a IA e peça pelo menos dois ajustes na mesma conversa.",
            "Guarde a versão final do pedido, com colchetes nas partes que mudam.",
          ],
          entrega: "Os três primeiros pedidos da sua biblioteca.",
        },
      ],
      checklist: [
        "Sei montar um pedido com Papel, Contexto, Tarefa, Formato e Regras",
        "Sei pedir ajustes na mesma conversa em vez de recomeçar",
        "Sei pedir para a IA me fazer perguntas antes de responder",
        "Comecei a minha biblioteca de pedidos",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 4,
      slug: "escrita",
      titulo: "Escrita do dia a dia",
      subtitulo: "E-mails, mensagens, comunicados, revisão e tradução",
      duracao: "1h30",
      objetivos: [
        "Redigir e responder e-mails com a IA em menos tempo",
        "Ajustar o tom de um texto sem reescrever do zero",
        "Revisar português, resumir conversas longas e traduzir",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "Escrita é onde a IA mais ajuda no trabalho de secretariado. Este módulo traz pedidos prontos para as situações " +
            "mais comuns. Copie, troque o que está entre colchetes e ajuste ao seu jeito.",
        },
        {
          tipo: "cuidado",
          titulo: "Antes de colar qualquer texto",
          texto:
            "Apague ou troque dados sensíveis: CPF, telefone pessoal, dados bancários, valores de contrato, informações de " +
            "saúde. Se o nome da pessoa não for necessário para a tarefa, troque por [cliente] ou [colaborador].",
        },
        { tipo: "subtitulo", texto: "Responder um e-mail" },
        {
          tipo: "prompt",
          titulo: "Resposta a cliente insatisfeito",
          texto:
            "Recebi o e-mail abaixo de um cliente insatisfeito com o atraso de uma entrega. Escreva uma resposta em nome da " +
            "Dra. Helena Prado, diretora comercial. Reconheça o problema sem culpar ninguém, informe que a nova previsão de " +
            "entrega é [data] e ofereça uma ligação para esclarecer. Tom profissional e empático, até oito linhas.\n\n" +
            "E-mail recebido:\n[cole o e-mail aqui]",
        },
        {
          tipo: "prompt",
          titulo: "Responder em poucas palavras",
          texto:
            "Escreva uma resposta curta e educada para o e-mail abaixo, dizendo que [sua resposta em poucas palavras, " +
            "ex.: a diretora aceita o convite, mas só pode a partir das 15h].\n\n[cole o e-mail aqui]",
          nota: "Você decide o conteúdo, a IA cuida da forma.",
        },
        { tipo: "subtitulo", texto: "Ajustar o tom" },
        {
          tipo: "prompt",
          titulo: "Mudar o tom sem mudar o conteúdo",
          texto:
            "Reescreva a mensagem abaixo para ficar mais [formal / gentil / direta / firme], sem mudar as informações. " +
            "Mantenha o tamanho parecido.\n\n[cole a mensagem aqui]",
          nota: "Ótimo para cobranças delicadas e para mensagens escritas com pressa.",
        },
        { tipo: "subtitulo", texto: "Revisão de português" },
        {
          tipo: "prompt",
          titulo: "Revisão com lista de correções",
          texto:
            "Revise o texto abaixo: corrija ortografia, gramática, concordância e pontuação, sem mudar o meu estilo nem " +
            "o conteúdo. Depois do texto corrigido, liste cada correção que você fez e explique em uma linha.\n\n[cole o texto aqui]",
          nota: "Pedir a lista de correções ajuda você a conferir e a aprender com os próprios erros.",
        },
        { tipo: "subtitulo", texto: "Resumir uma troca longa de e-mails" },
        {
          tipo: "prompt",
          titulo: "Resumo com pendências",
          texto:
            "Resuma a troca de e-mails abaixo em até cinco tópicos: o que foi decidido, o que ainda está pendente e quem é " +
            "responsável por cada pendência. Se algo não estiver claro no texto, escreva [VERIFICAR] em vez de supor.\n\n" +
            "[cole a troca de e-mails aqui]",
        },
        { tipo: "subtitulo", texto: "Comunicados e mensagens" },
        {
          tipo: "prompt",
          titulo: "Comunicado interno",
          texto:
            "Escreva um comunicado interno para todos os colaboradores da Exemplar Distribuidora informando que o escritório " +
            "estará fechado no dia [data] por [motivo]. Inclua o que acontece com os atendimentos urgentes: [como funciona]. " +
            "Tom claro e cordial, título curto, no máximo dois parágrafos.",
        },
        {
          tipo: "prompt",
          titulo: "Mensagem profissional de WhatsApp",
          texto:
            "Escreva uma mensagem de WhatsApp para lembrar o Sr. [nome] da reunião de amanhã às [hora], em [local ou link]. " +
            "Profissional, mas leve, em no máximo três linhas, sem emojis.",
        },
        { tipo: "subtitulo", texto: "Tradução" },
        {
          tipo: "prompt",
          titulo: "Tradução natural, não literal",
          texto:
            "Traduza o e-mail abaixo para o inglês, em tom profissional e natural, como um nativo escreveria. Não traduza " +
            "palavra por palavra. Depois, me diga em português se alguma expressão pode soar diferente do que eu pretendia.\n\n" +
            "[cole o texto aqui]",
        },
        {
          tipo: "dica",
          titulo: "IA dentro do próprio e-mail",
          texto:
            "Se a sua empresa usa Gmail com Gemini ou Outlook com Copilot, procure o botão de escrita assistida dentro da " +
            "própria tela do e-mail. Ele faz o mesmo que você aprendeu aqui, sem copiar e colar. O nome do botão muda conforme " +
            "a versão, mas costuma ter o ícone de uma estrela ou de uma caneta com brilho.",
        },
      ],
      exercicios: [
        {
          titulo: "Caixa de entrada com IA",
          enunciado: "Use a IA para cuidar de três e-mails reais desta semana.",
          passos: [
            "Escolha três e-mails que você precisa responder. Troque nomes e dados sensíveis antes de colar.",
            "Use um dos pedidos deste módulo para cada um, ajustando ao caso.",
            "Revise cada resposta com atenção antes de enviar. Lembre: você assina.",
            "Anote quanto tempo levou, e compare com o tempo que levaria sem IA.",
          ],
          entrega: "Os três pedidos que funcionaram melhor, salvos na sua biblioteca.",
        },
      ],
      checklist: [
        "Sei pedir à IA para redigir ou responder um e-mail",
        "Sei mudar o tom de um texto sem alterar o conteúdo",
        "Uso a IA para revisar português e peço a lista de correções",
        "Retiro dados sensíveis antes de colar qualquer texto",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 5,
      slug: "agenda-e-reunioes",
      titulo: "Agenda, reuniões e organização",
      subtitulo: "Pautas, atas, prioridades, viagens, eventos e planilhas",
      duracao: "1h30",
      objetivos: [
        "Preparar pautas e transformar anotações soltas em atas",
        "Organizar tarefas e prioridades da semana",
        "Planejar viagens e eventos com checklists",
        "Pedir ajuda para fórmulas e formatações de planilhas",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "A segunda grande frente da IA no secretariado é organizar informação: pegar algo bagunçado (anotações, uma lista " +
            "de tarefas, um pedido vago da diretora) e devolver estruturado. Este módulo mostra como.",
        },
        { tipo: "subtitulo", texto: "Antes da reunião: a pauta" },
        {
          tipo: "prompt",
          titulo: "Pauta de reunião",
          texto:
            "Monte a pauta de uma reunião de [duração] entre a diretoria comercial e o fornecedor [nome]. Assuntos: [liste os " +
            "assuntos]. Para cada item, indique o tempo sugerido e o objetivo (informar, discutir ou decidir). Termine com 10 " +
            "minutos para próximos passos.",
        },
        { tipo: "subtitulo", texto: "Depois da reunião: a ata" },
        {
          tipo: "prompt",
          titulo: "Ata a partir de anotações soltas",
          texto:
            "Abaixo estão as minhas anotações rápidas da reunião de hoje. Transforme em uma ata formal com: data, participantes, " +
            "assuntos discutidos, decisões tomadas e uma tabela de pendências com tarefa, responsável e prazo. Não invente " +
            "informações: se algo não estiver claro nas anotações, escreva [VERIFICAR].\n\n[cole as anotações aqui]",
        },
        {
          tipo: "prompt",
          titulo: "Material de treino: anotações fictícias",
          texto:
            "reunião comercial 12/11 - helena, roberto (logística), carla (financeiro)\n" +
            "- atraso alfa embalagens, roberto liga pra eles até sexta\n" +
            "- orçamento 2027: carla manda planilha, helena revisa\n" +
            "- feira de varejo SP mar/2027 - decidido q vamos. ver estande\n" +
            "- cliente horizonte pediu desconto, helena vai pensar\n" +
            "- próxima reunião dia 26?",
          nota: "Use estas anotações com o pedido de ata acima. Repare no que a IA marca como [VERIFICAR].",
        },
        {
          tipo: "dica",
          titulo: "A frase mágica",
          texto:
            "\"**Não invente: se faltar informação, escreva [VERIFICAR].**\" Inclua essa frase sempre que pedir para a IA " +
            "organizar informações. Ela reduz muito as invenções e mostra exatamente o que você precisa conferir.",
        },
        {
          tipo: "cuidado",
          titulo: "Gravação e transcrição de reuniões",
          texto:
            "Teams, Google Meet e Zoom oferecem, em alguns planos, transcrição e resumo automáticos. Antes de usar, confira se a " +
            "empresa permite e **avise todos os participantes** de que a reunião será gravada ou transcrita.",
        },
        { tipo: "subtitulo", texto: "Prioridades da semana" },
        {
          tipo: "prompt",
          titulo: "Organizar a lista de tarefas",
          texto:
            "Esta é a minha lista de tarefas da semana. Organize em uma tabela usando a matriz urgente/importante: faça agora, " +
            "agende, delegue e elimine. Sugira em que dia fazer cada item, considerando que tenho reuniões na terça e na quinta " +
            "de manhã.\n\n[cole a lista aqui]",
        },
        { tipo: "subtitulo", texto: "Viagens e eventos" },
        {
          tipo: "prompt",
          titulo: "Checklist de viagem da diretora",
          texto:
            "A diretora vai viajar de [cidade] para [cidade] de [data] a [data] para [motivo]. Monte um checklist do que eu " +
            "preciso providenciar, dividido em: antes da viagem, documentos, transporte, hospedagem, agenda no destino e " +
            "depois da viagem (reembolsos e relatório).",
          nota: "A IA ajuda a não esquecer nada, mas não reserva voos nem garante preços. Pesquise e reserve nos sites oficiais.",
        },
        {
          tipo: "prompt",
          titulo: "Cronograma de evento",
          texto:
            "Vou organizar a confraternização de fim de ano para 40 pessoas no dia [data]. Monte um cronograma de preparação " +
            "de trás para a frente, semana a semana, com as tarefas e um campo para o responsável. Inclua uma lista de " +
            "fornecedores que vou precisar contratar.",
        },
        { tipo: "subtitulo", texto: "Planilhas sem medo" },
        {
          tipo: "prompt",
          titulo: "Ajuda com Excel ou Google Planilhas",
          texto:
            "Tenho uma planilha no [Excel / Google Planilhas]. A coluna A tem nomes de fornecedores e a coluna B tem a data de " +
            "vencimento do contrato. Quero que a linha fique vermelha quando faltar menos de 30 dias para o vencimento. " +
            "Explique passo a passo, clique por clique, como para quem nunca fez isso.",
          nota: "Funciona para qualquer dúvida de planilha: somar, filtrar, juntar colunas, criar gráficos.",
        },
        {
          tipo: "cuidado",
          titulo: "Datas e horários: sempre confira",
          texto:
            "A IA erra com frequência **em que dia da semana cai uma data**, fusos horários e contas com datas (\"daqui a 45 " +
            "dias\"). Confira tudo no calendário. E lembre: nas versões comuns, a IA não enxerga a agenda de ninguém, a menos que " +
            "esteja integrada e você tenha autorizado.",
        },
      ],
      exercicios: [
        {
          titulo: "Da bagunça para a ata",
          enunciado: "Transforme anotações soltas em uma ata pronta para enviar.",
          passos: [
            "Use as anotações fictícias deste módulo ou anotações reais suas (sem dados sensíveis).",
            "Peça a ata com o pedido deste módulo, incluindo a frase do [VERIFICAR].",
            "Confira cada [VERIFICAR] e cada data. Corrija o que for preciso.",
            "Peça uma versão em e-mail curto para enviar aos participantes.",
          ],
          entrega: "A ata revisada e o e-mail de envio.",
        },
        {
          titulo: "A semana organizada",
          enunciado: "Cole a sua lista de tarefas da próxima semana e peça a organização pela matriz urgente/importante. Ajuste o resultado ao que você sabe e ninguém mais sabe sobre o seu trabalho.",
        },
      ],
      checklist: [
        "Sei pedir uma pauta com tempos e objetivos",
        "Sei transformar anotações em ata com tabela de pendências",
        "Uso a frase \"Não invente: se faltar informação, escreva [VERIFICAR]\"",
        "Confiro datas, dias da semana e horários que a IA escreve",
        "Sei pedir explicação passo a passo para planilhas",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 6,
      slug: "documentos-e-pesquisa",
      titulo: "Documentos, arquivos e pesquisa",
      subtitulo: "Resumir PDFs, ler imagens, comparar versões e pesquisar com fontes",
      duracao: "1h30",
      objetivos: [
        "Resumir documentos longos e encontrar informações neles",
        "Usar fotos e imagens como entrada (quadro branco, cartão, recibo)",
        "Pesquisar na internet pela IA e conferir as fontes",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "Além de texto digitado, as ferramentas aceitam **arquivos**: PDF, Word, planilhas e imagens. Basta clicar no " +
            "ícone de anexo (clipe ou +), escolher o arquivo e escrever o pedido. A IA lê o conteúdo e trabalha em cima dele.",
        },
        {
          tipo: "cuidado",
          titulo: "Documentos confidenciais",
          texto:
            "Contratos, folha de pagamento, dados de clientes, documentos jurídicos e estratégicos só devem ser enviados a " +
            "ferramentas **aprovadas pela empresa**. Na dúvida, não envie. E lembre: a IA não substitui advogado, contador ou médico.",
        },
        { tipo: "subtitulo", texto: "Resumir e extrair informações" },
        {
          tipo: "prompt",
          titulo: "Resumo executivo de um documento",
          texto:
            "Leia o documento anexo e me entregue: (1) um resumo em até cinco linhas; (2) os prazos e datas importantes; " +
            "(3) os valores mencionados; (4) o que exige ação ou decisão da diretoria. Indique a página de cada informação " +
            "para eu conferir.",
          nota: "Pedir a página é o que permite conferir rápido.",
        },
        {
          tipo: "prompt",
          titulo: "Perguntar ao documento",
          texto:
            "Com base apenas no documento anexo, responda: [sua pergunta, ex.: qual é o prazo para cancelamento?]. Se a " +
            "resposta não estiver no documento, diga que não encontrou. Cite o trecho exato.",
        },
        {
          tipo: "prompt",
          titulo: "Comparar duas versões",
          texto:
            "Anexei duas versões do mesmo documento. Liste tudo o que mudou da primeira para a segunda, em uma tabela com: " +
            "trecho, versão antiga, versão nova. Não deixe passar mudanças de números, datas ou prazos.",
        },
        { tipo: "subtitulo", texto: "Fotos e imagens" },
        {
          tipo: "lista",
          itens: [
            "**Quadro branco**: tire uma foto e peça \"Transcreva o que está escrito neste quadro e organize em tópicos.\"",
            "**Cartão de visita**: \"Extraia nome, cargo, empresa, telefone e e-mail deste cartão, em formato de tabela.\"",
            "**Recibos e notas**: \"Faça uma tabela com data, estabelecimento e valor de cada recibo destas fotos.\"",
            "**Print de tela com erro**: \"O que significa esta mensagem e o que eu devo fazer?\"",
          ],
        },
        { tipo: "subtitulo", texto: "Pesquisa na internet" },
        {
          tipo: "p",
          texto:
            "As ferramentas atuais conseguem **pesquisar na internet** e mostram os links que usaram. Isso é diferente de " +
            "responder \"de memória\": com a pesquisa, a informação pode ser recente. Mesmo assim, **peça as fontes e abra pelo " +
            "menos uma** antes de usar a informação.",
        },
        {
          tipo: "prompt",
          titulo: "Pesquisa com fontes",
          texto:
            "Pesquise e liste cinco restaurantes adequados para um almoço de negócios para seis pessoas perto de [endereço], " +
            "com ambiente tranquilo e sala reservada. Para cada um, informe faixa de preço, se aceita reserva e o link da fonte.",
        },
        {
          tipo: "dica",
          titulo: "NotebookLM: perguntas só sobre os seus documentos",
          texto:
            "O **NotebookLM**, do Google (notebooklm.google.com), funciona como um caderno: você carrega os seus documentos " +
            "(manuais, políticas, regulamentos) e ele responde só com base neles, mostrando o trecho de onde tirou cada " +
            "resposta. Ótimo para manuais internos e procedimentos, desde que a empresa permita o envio desses arquivos.",
        },
      ],
      exercicios: [
        {
          titulo: "Encontre e confira",
          enunciado: "Treine resumo e conferência com um documento público.",
          passos: [
            "Escolha um documento público e longo: um regulamento, um manual de produto, um edital.",
            "Anexe e peça o resumo executivo deste módulo, com as páginas.",
            "Confira três informações no documento original. Estavam certas? Na página indicada?",
            "Faça duas perguntas específicas ao documento e confira as respostas.",
          ],
          entrega: "Anote quantas informações estavam certas de primeira.",
        },
      ],
      checklist: [
        "Sei anexar um arquivo e pedir um resumo com páginas de referência",
        "Sei pedir que a IA responda apenas com base no documento",
        "Sei usar fotos como entrada: quadro, cartão, recibo",
        "Peço as fontes nas pesquisas e abro pelo menos uma",
        "Sei quais documentos não devo enviar sem aprovação",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 7,
      slug: "seguranca",
      titulo: "Segurança, privacidade e uso responsável",
      subtitulo: "O que nunca colar, como configurar, como conferir e como não cair em golpes",
      duracao: "1h30",
      objetivos: [
        "Saber que informações nunca devem ir para uma IA",
        "Ajustar as configurações de privacidade da sua ferramenta",
        "Conferir respostas antes de confiar nelas",
        "Reconhecer golpes que usam IA, como voz clonada",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "Tudo o que você digita ou anexa é enviado para os servidores da empresa dona da ferramenta. Dependendo da conta e " +
            "das configurações, as conversas podem ser guardadas, usadas para melhorar os modelos e, em alguns casos, lidas por " +
            "revisores. Por isso, a pergunta antes de colar é sempre: **eu colaria isso num e-mail para alguém de fora da empresa?**",
        },
        { tipo: "subtitulo", texto: "O semáforo dos dados" },
        {
          tipo: "tabela",
          colunas: ["Sinal", "O que é", "Exemplos"],
          linhas: [
            ["🟢 Pode", "Informação genérica ou pública", "Pedido de modelo de e-mail, dúvida de português, pesquisa de restaurante, texto sem nomes"],
            ["🟡 Com cuidado", "Informação interna, depois de anonimizar", "E-mail de cliente com nome e números trocados, anotações de reunião sem dados pessoais"],
            ["🔴 Nunca", "Dados pessoais, sigilosos ou de acesso", "Senhas, CPF, RG, dados bancários e de cartão, dados de saúde, folha de pagamento, contratos e estratégias confidenciais"],
          ],
        },
        {
          tipo: "p",
          texto:
            "No Brasil, dados pessoais de clientes, colegas e fornecedores são protegidos pela **LGPD** (Lei Geral de Proteção de " +
            "Dados). Colar esses dados numa ferramenta não autorizada pela empresa pode ser tratado como um incidente de " +
            "segurança. Na dúvida, pergunte à TI ou ao responsável pela proteção de dados.",
        },
        { tipo: "subtitulo", texto: "Ajuste a privacidade da sua ferramenta" },
        {
          tipo: "passos",
          itens: [
            "Abra as **Configurações** (geralmente clicando no seu nome ou foto).",
            "Procure uma seção como **Controles de dados**, **Privacidade** ou **Atividade**.",
            "Se houver a opção de usar as suas conversas para treinar ou melhorar os modelos, **desative-a** para uso profissional.",
            "Para assuntos sensíveis, use o modo de **conversa temporária** (quando existir): ela não fica no histórico.",
            "De tempos em tempos, apague conversas antigas que não precisa mais guardar.",
          ],
        },
        {
          tipo: "dica",
          titulo: "Os nomes mudam",
          texto:
            "As empresas reorganizam as telas de configuração com frequência. Se não achar a opção, pergunte à própria IA: " +
            "\"Como eu desativo o uso das minhas conversas para treinamento nesta ferramenta?\" e confira a resposta na central " +
            "de ajuda oficial.",
        },
        { tipo: "subtitulo", texto: "Confira antes de confiar" },
        {
          tipo: "p",
          texto: "Antes de enviar ou usar uma resposta, passe os olhos especialmente por:",
        },
        {
          tipo: "lista",
          itens: [
            "**Nomes** de pessoas, empresas e cargos",
            "**Números**: valores, quantidades, telefones, porcentagens",
            "**Datas, horários e dias da semana**",
            "**Leis, normas e regras** citadas",
            "**Links**: abra e veja se levam mesmo aonde deveriam",
            "**Promessas** feitas em nome da diretora ou da empresa",
          ],
        },
        {
          tipo: "prompt",
          titulo: "Peça para a IA apontar as próprias dúvidas",
          texto:
            "Releia a sua resposta. Quais informações você tem menos certeza? Liste o que eu deveria conferir antes de usar.",
        },
        { tipo: "subtitulo", texto: "Golpes que usam IA" },
        {
          tipo: "p",
          texto:
            "Criminosos também usam IA: para **clonar vozes** a partir de poucos segundos de áudio, fazer vídeos falsos e " +
            "escrever e-mails de golpe sem nenhum erro de português. Secretárias e assistentes são alvos frequentes, porque têm " +
            "acesso à agenda, a contatos e, às vezes, a pagamentos.",
        },
        {
          tipo: "cuidado",
          titulo: "Pedido urgente \"da diretora\"? Pare e confirme.",
          texto:
            "Ligação, áudio ou mensagem \"da chefe\" pedindo **transferência, Pix, compra de cartões-presente, troca dos dados " +
            "bancários de um fornecedor** ou envio de documentos com urgência: **desligue e confirme por outro canal**, ligando " +
            "para o número que você já tem salvo. Combine com a diretoria uma **palavra-código** para pedidos fora do comum.",
        },
        { tipo: "subtitulo", texto: "Uso responsável" },
        {
          tipo: "lista",
          itens: [
            "Siga a política de IA da empresa. Se não existir, pergunte.",
            "Seja transparente quando um material importante foi feito com ajuda de IA.",
            "Não use IA para tomar decisões sobre pessoas, como contratar, avaliar ou demitir.",
            "Não use IA para escrever em nome de alguém sem a autorização dessa pessoa.",
          ],
        },
      ],
      exercicios: [
        {
          titulo: "Seu kit de segurança",
          enunciado: "Deixe a sua ferramenta e a sua rotina mais seguras.",
          passos: [
            "Abra as configurações da ferramenta que você usa e revise as opções de privacidade e de uso dos dados.",
            "Monte o seu semáforo: escreva exemplos reais do seu trabalho para verde, amarelo e vermelho.",
            "Descubra se a empresa tem política de IA e se oferece uma conta corporativa.",
            "Combine uma palavra-código com a diretora para confirmar pedidos fora do comum.",
          ],
          entrega: "Seu semáforo de dados em uma página, para deixar à vista.",
        },
      ],
      checklist: [
        "Sei o que nunca deve ir para uma IA",
        "Revisei as configurações de privacidade da minha ferramenta",
        "Confiro nomes, números, datas, leis e links antes de usar uma resposta",
        "Sei reconhecer um pedido urgente suspeito e confirmo por outro canal",
        "Conheço (ou pedi) a política de IA da minha empresa",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 8,
      slug: "rotina",
      titulo: "Sua rotina com IA",
      subtitulo: "Personalização, rotina semanal e projeto final",
      duracao: "1h30",
      objetivos: [
        "Configurar a IA para conhecer o seu jeito de trabalhar",
        "Montar uma rotina semanal com IA",
        "Concluir o projeto final: o seu Kit IA",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "Até aqui você escreveu o contexto em cada pedido. As ferramentas permitem **guardar instruções fixas**, que valem " +
            "para todas as conversas ou para um conjunto delas. Assim você não precisa repetir quem é, como escreve e como assina.",
        },
        {
          tipo: "tabela",
          colunas: ["Recurso", "Onde existe", "Para que serve"],
          linhas: [
            ["Instruções personalizadas / Personalização", "ChatGPT, Claude e outras", "Regras que valem para todas as conversas: seu cargo, seu tom, seu idioma."],
            ["Projetos", "ChatGPT, Claude", "Uma pasta com instruções e arquivos próprios, por exemplo um projeto só para a agenda da diretora."],
            ["Gems", "Gemini", "Um assistente com instruções fixas para uma tarefa: \"revisor de e-mails\", \"redator de atas\"."],
            ["GPTs", "ChatGPT", "A mesma ideia das Gems, e pode ser compartilhado com a equipe."],
          ],
        },
        {
          tipo: "prompt",
          titulo: "Modelo de instruções personalizadas",
          texto:
            "Sou secretária executiva da diretoria comercial de uma distribuidora. Escrevo em português do Brasil, com tom " +
            "cordial e profissional e frases curtas. Assino os e-mails como \"[sua assinatura]\". Quando faltar informação, " +
            "pergunte antes de supor. Nunca invente nomes, números ou datas: marque [VERIFICAR]. Prefiro respostas diretas, " +
            "sem introduções longas.",
          nota: "Cole nas configurações de personalização da sua ferramenta e ajuste ao seu caso. Não inclua dados sensíveis.",
        },
        { tipo: "subtitulo", texto: "Uma rotina semanal possível" },
        {
          tipo: "tabela",
          colunas: ["Quando", "O que pedir à IA"],
          linhas: [
            ["Segunda de manhã", "Organizar as prioridades da semana e preparar as pautas das reuniões"],
            ["Todo dia", "Rascunhos de respostas, ajuste de tom e revisão de português"],
            ["Depois de cada reunião", "Ata e lista de pendências a partir das anotações"],
            ["Quando chegar um documento longo", "Resumo executivo com páginas de referência"],
            ["Sexta à tarde", "Resumo da semana para a diretora e atualização da biblioteca de pedidos"],
          ],
        },
        { tipo: "subtitulo", texto: "Projeto final: o seu Kit IA" },
        {
          tipo: "passos",
          itens: [
            "Liste **cinco tarefas** que se repetem no seu trabalho e tomam tempo.",
            "Para cada uma, escreva um pedido completo com **P-C-T-F-R** e teste até ficar bom.",
            "Teste os cinco pedidos em **duas ferramentas** e escolha a melhor para cada tarefa.",
            "Anote o **tempo antes e depois** de usar a IA em cada tarefa.",
            "Escreva as suas **instruções personalizadas** e configure na ferramenta principal.",
            "Junte tudo num documento: biblioteca de pedidos, instruções, semáforo de dados e rotina semanal.",
          ],
        },
        { tipo: "subtitulo", texto: "Para continuar aprendendo" },
        {
          tipo: "lista",
          itens: [
            "Experimente **uma coisa nova por semana**: um tipo de pedido, um recurso, uma ferramenta.",
            "As ferramentas mudam rápido. Os princípios deste curso não: contexto claro, conversa, conferência e cuidado com os dados.",
            "Quando algo funcionar muito bem, ensine a uma colega. Explicar é a melhor forma de fixar.",
            "Volte à colinha no fim deste material e à coleção de pedidos prontos sempre que precisar.",
          ],
        },
      ],
      exercicios: [
        {
          titulo: "Projeto final: Kit IA",
          enunciado:
            "Monte e apresente o seu Kit IA, seguindo os passos acima. O objetivo é sair do curso com ferramentas prontas para " +
            "usar na segunda-feira, e não só com conhecimento.",
          entrega:
            "Um documento com: cinco pedidos testados, as suas instruções personalizadas, o seu semáforo de dados, a sua rotina " +
            "semanal e o tempo economizado em cada tarefa.",
        },
      ],
      checklist: [
        "Configurei instruções personalizadas na minha ferramenta principal",
        "Tenho uma rotina semanal de uso da IA",
        "Tenho cinco pedidos testados na minha biblioteca",
        "Medi o tempo economizado em pelo menos uma tarefa",
        "Concluí o meu Kit IA",
      ],
    },
  ],

  glossario: [
    { termo: "Inteligência artificial (IA)", definicao: "Sistemas de computador que fazem tarefas que normalmente exigem inteligência humana, como entender texto, reconhecer imagens ou tomar decisões simples." },
    { termo: "IA generativa", definicao: "Tipo de IA que cria conteúdo novo (texto, imagem, áudio, vídeo) a partir de um pedido." },
    { termo: "Modelo de linguagem", definicao: "O sistema por trás do ChatGPT, Gemini e Claude. Aprendeu os padrões da língua lendo muitos textos e gera respostas com base neles." },
    { termo: "Assistente de IA / chatbot", definicao: "O aplicativo ou site onde você conversa com o modelo, como o ChatGPT ou o Gemini." },
    { termo: "Prompt", definicao: "O pedido que você escreve para a IA." },
    { termo: "Contexto", definicao: "As informações que você dá para a IA entender a situação: quem, o quê, por quê, para quem." },
    { termo: "Conversa (chat)", definicao: "A sequência de pedidos e respostas. A IA lembra do que foi dito dentro de uma mesma conversa." },
    { termo: "Alucinação", definicao: "Quando a IA apresenta uma informação falsa como se fosse verdadeira." },
    { termo: "Instruções personalizadas", definicao: "Regras fixas que você configura uma vez e valem para todas as conversas." },
    { termo: "Projeto / Gem / GPT", definicao: "Assistentes com instruções e arquivos próprios para uma tarefa ou assunto específico." },
    { termo: "Pesquisa na web", definicao: "Quando a IA busca informações atuais na internet antes de responder, mostrando os links usados." },
    { termo: "Anonimizar", definicao: "Retirar ou trocar dados que identificam pessoas ou empresas antes de enviar um texto." },
    { termo: "LGPD", definicao: "Lei Geral de Proteção de Dados (Lei 13.709/2018), que regula o uso de dados pessoais no Brasil." },
    { termo: "Deepfake", definicao: "Vídeo, foto ou áudio falso criado com IA para imitar uma pessoa real." },
  ],

  colinha: [
    {
      titulo: "A fórmula do bom pedido",
      itens: [
        "**P**apel: quem a IA deve ser",
        "**C**ontexto: a situação",
        "**T**arefa: o que fazer",
        "**F**ormato: tamanho, lista, tabela",
        "**R**egras: tom e o que evitar",
      ],
    },
    {
      titulo: "Ajustes que funcionam",
      itens: [
        "\"Mais curto\" · \"Mais formal\" · \"Mais gentil\"",
        "\"Me dê três versões\"",
        "\"Me faça perguntas antes de começar\"",
        "\"Use este texto como modelo\"",
        "\"Não invente: escreva [VERIFICAR]\"",
      ],
    },
    {
      titulo: "Sempre confira",
      itens: [
        "Nomes e cargos",
        "Números e valores",
        "Datas, horários e dias da semana",
        "Leis, normas e links",
        "Promessas em nome da empresa",
      ],
    },
    {
      titulo: "Nunca cole",
      itens: [
        "Senhas e códigos de acesso",
        "CPF, RG, dados bancários e de cartão",
        "Dados de saúde e folha de pagamento",
        "Contratos e estratégias confidenciais",
        "Dados de terceiros sem autorização",
      ],
    },
  ],
};
