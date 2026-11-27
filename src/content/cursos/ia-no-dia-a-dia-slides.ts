import type { SlideCurso } from "./tipos";

/**
 * Slides de apoio do curso "IA no Dia a Dia". Pensados para o próprio aluno
 * revisar sozinho: cada slide traz em `notas` a explicação do que ele mostra,
 * exibida no painel "explicação" (tecla N).
 */
export const slidesIaNoDiaADia: SlideCurso[] = [
  {
    id: "capa",
    tipo: "capa",
    notas:
      "Bem-vinda! Estes slides resumem cada módulo do roteiro de estudo. Use as setas para avançar e leia esta explicação " +
      "embaixo de cada slide: ela conta o que o slide quer dizer. O botão \"slides\" mostra todos de uma vez, para pular " +
      "direto para um módulo.",
  },
  {
    id: "jornada",
    tipo: "cards",
    kicker: "O curso",
    titulo: "Oito passos, do zero à rotina",
    cards: [
      { titulo: "1. O que é IA", texto: "Como funciona e onde erra" },
      { titulo: "2. Ferramentas", texto: "ChatGPT, Gemini, Claude, Copilot" },
      { titulo: "3. Como pedir", texto: "A fórmula P-C-T-F-R" },
      { titulo: "4. Escrita", texto: "E-mails, revisão, tradução" },
      { titulo: "5. Organização", texto: "Pautas, atas, agenda" },
      { titulo: "6. Documentos", texto: "Resumos e pesquisa" },
      { titulo: "7. Segurança", texto: "Dados, conferência, golpes" },
      { titulo: "8. Rotina", texto: "Seu Kit IA" },
    ],
    notas:
      "O curso tem oito módulos, e cada um usa o que veio antes. Os três primeiros são a base: entender o que é a IA, conhecer " +
      "as ferramentas e aprender a pedir. Do 4 ao 6, aplicamos ao trabalho de secretariado. O 7 é sobre segurança, e o 8 " +
      "junta tudo numa rotina que você leva para o dia a dia.",
  },

  // --- Módulo 1 ---------------------------------------------------------------------------
  { id: "m1", tipo: "abertura", modulo: 1, notas: "Neste módulo você entende o que é a IA generativa, por que ela é tão boa com textos e por que às vezes inventa coisas." },
  {
    id: "m1-ja-usa",
    modulo: 1,
    tipo: "topicos",
    kicker: "Você já usa IA",
    titulo: "A novidade é a IA que cria",
    itens: [
      "Corretor do celular, filtro de spam, GPS, recomendações de filmes: tudo isso já é IA",
      "A **IA generativa** cria textos, imagens e áudios a partir de um pedido",
      "Você pede em português comum, como pediria a uma colega",
    ],
    notas:
      "IA não é novidade na sua vida: o celular que corrige palavras e o e-mail que separa spam usam IA há anos. O que mudou " +
      "é que agora existem ferramentas que produzem conteúdo novo. Você escreve um pedido normal e recebe um texto pronto.",
  },
  {
    id: "m1-como",
    modulo: 1,
    tipo: "topicos",
    kicker: "Como funciona",
    titulo: "Ela aprendeu padrões, não decorou fatos",
    itens: [
      "Foi treinada com uma quantidade enorme de textos",
      "Aprendeu que palavras costumam vir depois de outras, em cada contexto",
      "Escreve a resposta pedaço por pedaço, escolhendo o que faz mais sentido",
    ],
    destaque: "Por isso é ótima com linguagem, e não é uma enciclopédia.",
    notas:
      "O ponto principal: a IA não consulta uma lista de fatos verificados. Ela gera o texto mais provável para o seu pedido. " +
      "Isso a torna excelente para escrever, resumir e reorganizar, que são tarefas de linguagem. E explica por que ela às " +
      "vezes erra fatos: o mais provável nem sempre é o verdadeiro.",
  },
  {
    id: "m1-imagem",
    modulo: 1,
    tipo: "frase",
    texto: "Um assistente rápido e bem informado, que não conhece a sua empresa.",
    apoio: "Quem orienta e revisa o trabalho dele é você.",
    notas:
      "Guarde esta imagem. Esse assistente leu quase tudo e escreve muito bem, mas não sabe nada sobre a Exemplar " +
      "Distribuidora, a Dra. Helena ou o fornecedor de quinta-feira. Tudo o que for específico do seu trabalho, você precisa " +
      "contar. E o resultado, você precisa revisar.",
  },
  {
    id: "m1-tabela",
    modulo: 1,
    tipo: "tabela",
    kicker: "Onde ela brilha",
    titulo: "Faz muito bem × precisa de supervisão",
    colunas: ["Faz muito bem", "Precisa de supervisão"],
    linhas: [
      ["Rascunhos de e-mails e mensagens", "Fatos precisos: datas, leis, telefones"],
      ["Ajustar o tom de um texto", "Contas com muitos números"],
      ["Resumir textos longos", "Notícias de ontem (sem pesquisa)"],
      ["Anotações → ata ou tabela", "Dados da empresa que você não deu"],
      ["Revisar português e traduzir", "Dia da semana de uma data"],
    ],
    notas:
      "A coluna da esquerda é onde você vai ganhar tempo. A da direita não é proibida, só pede conferência. Repare que a última " +
      "linha parece simples, mas a IA erra com frequência em que dia da semana cai uma data. Sempre confira no calendário.",
  },
  {
    id: "m1-alucinacao",
    modulo: 1,
    tipo: "topicos",
    kicker: "Alucinação",
    titulo: "Quando a IA inventa, com toda a segurança",
    itens: [
      "Um telefone que não existe, uma lei com número errado, uma citação que ninguém disse",
      "Não é mentira proposital: é um efeito de como ela gera o texto",
      "As ferramentas melhoraram muito, mas o risco continua",
    ],
    notas:
      "Alucinação é o nome técnico para quando a IA apresenta algo falso como verdadeiro. O perigo é que ela escreve o erro com " +
      "o mesmo tom confiante do acerto. Por isso, informações que podem causar problema (números, datas, nomes, leis) sempre " +
      "passam pela sua conferência.",
  },
  {
    id: "m1-regra",
    modulo: 1,
    tipo: "frase",
    texto: "A IA faz o rascunho. Você assina.",
    apoio: "A regra de ouro do curso.",
    notas:
      "Se você lembrar de uma coisa só deste curso, que seja esta. A IA economiza o seu tempo de escrever, não o seu tempo de " +
      "pensar. Tudo o que sair com o seu nome, ou com o nome da sua diretora, passa pela sua leitura antes.",
  },
  {
    id: "m1-ex",
    modulo: 1,
    tipo: "exercicio",
    titulo: "Sua primeira conversa",
    itens: [
      "Abra chatgpt.com ou gemini.google.com",
      "Peça: \"Explique o que você é e quais são os seus limites, como se eu nunca tivesse usado IA\"",
      "Pergunte algo que você já sabe muito bem e confira a resposta",
      "Anote três coisas que surpreenderam você",
    ],
    notas:
      "O detalhe importante está no terceiro passo: perguntar algo que você já sabe é a melhor forma de perceber, na prática, " +
      "como a IA acerta e onde ela escorrega. O passo a passo completo está no roteiro de estudo.",
  },

  // --- Módulo 2 ---------------------------------------------------------------------------
  { id: "m2", tipo: "abertura", modulo: 2, notas: "Agora você conhece as principais ferramentas, cria a sua conta e aprende a usar a tela." },
  {
    id: "m2-ferramentas",
    modulo: 2,
    tipo: "tabela",
    kicker: "As principais",
    titulo: "Elas funcionam de forma muito parecida",
    colunas: ["Ferramenta", "Empresa", "Ponto forte"],
    linhas: [
      ["ChatGPT", "OpenAI", "Generalista; ótima conversa por voz"],
      ["Gemini", "Google", "Gmail, Agenda, Docs e Drive"],
      ["Claude", "Anthropic", "Escrita cuidadosa; documentos longos"],
      ["Copilot", "Microsoft", "Outlook, Word, Excel e Teams"],
      ["Meta AI", "Meta", "Dentro do WhatsApp"],
    ],
    notas:
      "A boa notícia: o que você aprende numa ferramenta vale para as outras. Todas têm uma caixa de texto, aceitam arquivos e " +
      "respondem em português. A diferença está nos detalhes e em onde cada uma se encaixa: Gemini combina com empresas que " +
      "usam Google, Copilot com empresas que usam Microsoft.",
  },
  {
    id: "m2-escolher",
    modulo: 2,
    tipo: "cards",
    kicker: "Qual escolher",
    titulo: "Comece pela que a sua empresa já usa",
    cards: [
      { titulo: "E-mail no Gmail?", texto: "Experimente o Gemini" },
      { titulo: "E-mail no Outlook?", texto: "Experimente o Copilot" },
      { titulo: "Uso pessoal?", texto: "Escolha uma e fique nela por algumas semanas" },
      { titulo: "Grátis ou pago?", texto: "Para o curso, a versão gratuita basta" },
    ],
    notas:
      "Não perca tempo procurando a ferramenta perfeita. A melhor é a que você vai usar todo dia, e geralmente é a que já se " +
      "integra ao e-mail da empresa. Sobre planos: preços e nomes mudam muito, então confira no site oficial antes de assinar.",
  },
  {
    id: "m2-conta",
    modulo: 2,
    tipo: "topicos",
    kicker: "Primeiros passos",
    titulo: "Criando a conta com segurança",
    itens: [
      "**Digite o endereço oficial**: chatgpt.com, gemini.google.com, claude.ai",
      "Não clique em anúncios: há sites falsos imitando essas ferramentas",
      "Entre com Google, Microsoft ou e-mail e leia o resumo de privacidade",
      "No celular, instale o app oficial e confira o nome da empresa",
    ],
    destaque: "Conta da empresa disponível? Use-a para assuntos de trabalho.",
    notas:
      "O cuidado com o endereço é sério: existem sites e aplicativos falsos que imitam essas ferramentas para roubar dados. " +
      "Digite o endereço você mesma. E se a empresa oferece uma conta corporativa de IA, prefira essa para o trabalho, porque " +
      "ela costuma ter regras de privacidade mais rígidas.",
  },
  {
    id: "m2-tela",
    modulo: 2,
    tipo: "cards",
    kicker: "Anatomia da tela",
    titulo: "Seis coisas para saber onde estão",
    cards: [
      { titulo: "Caixa de mensagem", texto: "Enter envia; Shift+Enter pula linha" },
      { titulo: "Anexo (clipe ou +)", texto: "Arquivos, fotos e documentos" },
      { titulo: "Microfone", texto: "Dite em vez de digitar" },
      { titulo: "Nova conversa", texto: "Começa do zero" },
      { titulo: "Histórico", texto: "Suas conversas antigas" },
      { titulo: "Configurações", texto: "Privacidade e personalização" },
    ],
    notas:
      "Abra a sua ferramenta e encontre cada um destes seis elementos. Eles mudam de lugar entre ferramentas, mas todas têm. " +
      "Uma dica útil: Shift+Enter permite escrever pedidos com várias linhas sem enviar antes da hora.",
  },
  {
    id: "m2-conversa",
    modulo: 2,
    tipo: "frase",
    texto: "Uma conversa por assunto.",
    apoio: "Dentro da conversa a IA lembra de tudo. Assunto novo, conversa nova.",
    notas:
      "A IA lembra do que foi dito na mesma conversa, e isso é ótimo para pedir ajustes. Mas se você misturar o e-mail do " +
      "fornecedor com a pauta da reunião, ela pode confundir as informações. Separar por assunto também deixa o histórico " +
      "fácil de consultar.",
  },
  {
    id: "m2-ex",
    modulo: 2,
    tipo: "exercicio",
    titulo: "O mesmo pedido em duas ferramentas",
    itens: [
      "Crie conta em duas ferramentas",
      "Peça nas duas um e-mail confirmando a reunião de quinta às 10h com a Alfa Embalagens",
      "Compare tom, tamanho e clareza",
      "Escolha a sua ferramenta principal e anote por quê",
    ],
    notas:
      "Comparar ensina mais do que ler sobre as ferramentas. Você vai perceber diferenças de estilo, e isso ajuda a escolher. " +
      "Depois de escolher, fique com ela algumas semanas.",
  },

  // --- Módulo 3 ---------------------------------------------------------------------------
  { id: "m3", tipo: "abertura", modulo: 3, notas: "Este é o módulo mais importante do curso: aprender a pedir. Tudo o que vem depois usa a fórmula que você vai ver aqui." },
  {
    id: "m3-antes-depois",
    modulo: 3,
    tipo: "antesDepois",
    kicker: "Pedido vago, resposta genérica",
    titulo: "A diferença está no pedido",
    antes: "Escreva um e-mail para o fornecedor.",
    depois:
      "Você é uma secretária executiva experiente. A Dra. Helena Prado precisa remarcar a reunião de quinta com a Alfa " +
      "Embalagens. Escreva um e-mail pedindo para remarcar, com três horários na semana seguinte em lista. Até cinco linhas, " +
      "tom cordial e formal. Não mencione o motivo.",
    notas:
      "No primeiro pedido, a IA precisa adivinhar tudo: qual fornecedor, qual assunto, que tom, que tamanho. No segundo, ela " +
      "sabe quem escreve, para quem, por quê, o que incluir e o que evitar. É como delegar a uma colega nova: quanto mais claro, " +
      "melhor o trabalho volta.",
  },
  {
    id: "m3-formula",
    modulo: 3,
    tipo: "tabela",
    kicker: "A fórmula",
    titulo: "P-C-T-F-R",
    colunas: ["Parte", "Responde", "Exemplo"],
    linhas: [
      ["**P**apel", "Quem a IA deve ser?", "Secretária executiva experiente"],
      ["**C**ontexto", "Qual é a situação?", "A diretora precisa remarcar a reunião"],
      ["**T**arefa", "O que fazer?", "Escrever um e-mail pedindo para remarcar"],
      ["**F**ormato", "Como entregar?", "Até cinco linhas, horários em lista"],
      ["**R**egras", "Tom e limites", "Cordial e formal; sem o motivo"],
    ],
    notas:
      "Para memorizar: \"Para Cada Tarefa, Formato e Regras\". Nem todo pedido precisa das cinco partes. Uma pergunta rápida " +
      "pode ter só a tarefa. Mas para tudo o que vai ser enviado a alguém, vale usar as cinco. No roteiro de estudo há um " +
      "montador onde você preenche cada parte e copia o pedido pronto.",
  },
  {
    id: "m3-ajustes",
    modulo: 3,
    tipo: "topicos",
    kicker: "Converse",
    titulo: "A primeira resposta é um rascunho",
    itens: [
      "\"Deixe mais curto.\" · \"Deixe mais formal.\"",
      "\"Tire o segundo parágrafo.\"",
      "\"Me dê três versões diferentes.\"",
      "\"O que está faltando neste e-mail?\"",
      "\"Use este texto como modelo de estilo.\"",
    ],
    destaque: "Peça ajustes na mesma conversa, em vez de recomeçar.",
    notas:
      "Muita gente desiste quando a primeira resposta não fica boa. Não precisa: a IA guarda tudo o que foi dito e muda só o " +
      "que você pedir. Dois ou três ajustes curtos costumam levar o texto exatamente aonde você queria.",
  },
  {
    id: "m3-perguntas",
    modulo: 3,
    tipo: "prompt",
    kicker: "Truque",
    titulo: "Deixe a IA fazer as perguntas",
    texto:
      "Quero preparar a pauta da reunião mensal da diretoria comercial. Antes de escrever qualquer coisa, me faça até cinco " +
      "perguntas sobre o que você precisa saber para fazer uma boa pauta.",
    legenda: "Útil quando você não sabe por onde começar.",
    notas:
      "Quando você não sabe que contexto dar, inverta: peça para a IA perguntar. Ela vai listar exatamente o que precisa saber, " +
      "você responde, e o resultado sai muito melhor. É um dos truques mais úteis do curso.",
  },
  {
    id: "m3-biblioteca",
    modulo: 3,
    tipo: "topicos",
    kicker: "Biblioteca de pedidos",
    titulo: "Funcionou? Guarde.",
    itens: [
      "Um documento no Word, no Google Docs ou nas notas do celular",
      "Partes que mudam entre colchetes: [nome do fornecedor], [data]",
      "Em poucas semanas, um kit pronto para as tarefas que se repetem",
    ],
    notas:
      "Esta biblioteca vai virar o coração do seu projeto final. Cada pedido que der certo entra nela. Com o tempo, você deixa " +
      "de escrever pedidos do zero e passa a só trocar o que está entre colchetes.",
  },
  {
    id: "m3-ex",
    modulo: 3,
    tipo: "exercicio",
    titulo: "Três tarefas reais da sua semana",
    itens: [
      "Liste três tarefas de escrita que se repetem",
      "Escreva um pedido P-C-T-F-R para cada uma",
      "Peça pelo menos dois ajustes na mesma conversa",
      "Guarde as versões finais na sua biblioteca",
    ],
    notas: "Use tarefas reais: um aviso, um lembrete, um e-mail que você escreve toda semana. É assim que o curso vira tempo economizado.",
  },

  // --- Módulo 4 ---------------------------------------------------------------------------
  { id: "m4", tipo: "abertura", modulo: 4, notas: "Escrita é onde a IA mais ajuda no secretariado. Aqui estão os pedidos prontos para as situações mais comuns." },
  {
    id: "m4-antes",
    modulo: 4,
    tipo: "frase",
    texto: "Antes de colar: tire CPF, telefones, dados bancários e valores.",
    apoio: "Troque nomes por [cliente] quando não forem necessários.",
    notas:
      "Este cuidado vem antes de qualquer pedido deste módulo. Muitos e-mails trazem assinaturas com telefone pessoal, números " +
      "de contrato ou valores. Leve dez segundos para apagar ou trocar antes de colar. O módulo 7 aprofunda o assunto.",
  },
  {
    id: "m4-situacoes",
    modulo: 4,
    tipo: "cards",
    kicker: "Situações do dia a dia",
    titulo: "O que pedir à IA",
    cards: [
      { titulo: "Responder", texto: "Você decide o conteúdo, a IA cuida da forma" },
      { titulo: "Ajustar o tom", texto: "Mais formal, gentil, direto ou firme" },
      { titulo: "Revisar", texto: "Corrigir e listar cada correção" },
      { titulo: "Resumir", texto: "Decisões, pendências e responsáveis" },
      { titulo: "Comunicar", texto: "Comunicados e mensagens de WhatsApp" },
      { titulo: "Traduzir", texto: "Natural, não palavra por palavra" },
    ],
    notas:
      "Cada um destes cards tem um pedido pronto no roteiro de estudo, com botão para copiar. A ideia mais útil está no " +
      "primeiro: você diz em poucas palavras o que quer responder (\"aceita, mas só depois das 15h\") e a IA escreve o e-mail " +
      "educado e completo.",
  },
  {
    id: "m4-tom",
    modulo: 4,
    tipo: "prompt",
    kicker: "Pedido pronto",
    titulo: "Mudar o tom sem mudar o conteúdo",
    texto:
      "Reescreva a mensagem abaixo para ficar mais [formal / gentil / direta / firme], sem mudar as informações. Mantenha o " +
      "tamanho parecido.\n\n[cole a mensagem aqui]",
    legenda: "Ótimo para cobranças delicadas e mensagens escritas com pressa.",
    notas:
      "Este é um dos pedidos mais usados por secretárias. Uma cobrança a um fornecedor pode ficar firme sem ser grosseira. Um " +
      "recado escrito às pressas pode ficar profissional. Repare na regra \"sem mudar as informações\": ela impede a IA de " +
      "acrescentar coisas.",
  },
  {
    id: "m4-revisao",
    modulo: 4,
    tipo: "prompt",
    kicker: "Pedido pronto",
    titulo: "Revisão com lista de correções",
    texto:
      "Revise o texto abaixo: corrija ortografia, gramática, concordância e pontuação, sem mudar o meu estilo nem o conteúdo. " +
      "Depois, liste cada correção que você fez e explique em uma linha.\n\n[cole o texto aqui]",
    notas:
      "Pedir a lista de correções tem duas vantagens: você confere o que foi mudado, e aprende com os próprios erros. Com o " +
      "tempo, você vai errar menos e precisar menos da revisão.",
  },
  {
    id: "m4-ex",
    modulo: 4,
    tipo: "exercicio",
    titulo: "Caixa de entrada com IA",
    itens: [
      "Escolha três e-mails reais que precisa responder",
      "Retire dados sensíveis antes de colar",
      "Use um pedido do módulo para cada um e revise antes de enviar",
      "Compare o tempo com e sem IA",
    ],
    notas: "Medir o tempo é importante: é o que mostra, com números, o valor do que você está aprendendo. Guarde essas medidas para o projeto final.",
  },

  // --- Módulo 5 ---------------------------------------------------------------------------
  { id: "m5", tipo: "abertura", modulo: 5, notas: "A segunda grande frente: pegar informação bagunçada e devolver organizada. Pautas, atas, prioridades, viagens, eventos e planilhas." },
  {
    id: "m5-reuniao",
    modulo: 5,
    tipo: "cards",
    kicker: "Reuniões",
    titulo: "Antes e depois da reunião",
    cards: [
      { titulo: "Antes: pauta", texto: "Assuntos, tempo de cada item e objetivo: informar, discutir ou decidir" },
      { titulo: "Depois: ata", texto: "Anotações soltas viram ata formal com tabela de pendências" },
      { titulo: "Depois: e-mail", texto: "Uma versão curta da ata para enviar aos participantes" },
    ],
    notas:
      "A ata é talvez o maior ganho de tempo do curso. Você anota do seu jeito, rápido e abreviado, durante a reunião. Depois " +
      "cola as anotações e recebe a ata formatada, com pendências, responsáveis e prazos. No roteiro há anotações fictícias " +
      "para você treinar.",
  },
  {
    id: "m5-magica",
    modulo: 5,
    tipo: "frase",
    texto: "\"Não invente: se faltar informação, escreva [VERIFICAR].\"",
    apoio: "A frase mágica para organizar informações.",
    notas:
      "Quando a IA organiza anotações incompletas, ela tende a preencher os buracos com algo plausível. Esta frase muda o " +
      "comportamento: em vez de inventar, ela marca o que falta. E você sabe exatamente o que conferir. Use em atas, resumos e " +
      "tabelas.",
  },
  {
    id: "m5-organizar",
    modulo: 5,
    tipo: "topicos",
    kicker: "Organização",
    titulo: "Prioridades, viagens, eventos e planilhas",
    itens: [
      "**Semana**: lista de tarefas organizada pela matriz urgente/importante",
      "**Viagem**: checklist do antes, durante e depois (a IA não reserva nem garante preço)",
      "**Evento**: cronograma de trás para a frente, semana a semana",
      "**Planilha**: \"explique passo a passo, clique por clique\"",
    ],
    notas:
      "Repare no padrão: em todos os casos, a IA ajuda a estruturar e a não esquecer nada, e você executa. Para planilhas, a " +
      "frase \"clique por clique, como para quem nunca fez\" faz a IA explicar no seu ritmo.",
  },
  {
    id: "m5-datas",
    modulo: 5,
    tipo: "topicos",
    kicker: "Cuidado",
    titulo: "Datas e horários: sempre confira",
    itens: [
      "A IA erra com frequência o **dia da semana** de uma data",
      "Fusos horários e contas como \"daqui a 45 dias\" também",
      "Nas versões comuns, ela **não enxerga a agenda** de ninguém",
    ],
    notas:
      "Este é um erro clássico: \"reunião na quinta-feira, dia 14\", quando o dia 14 cai numa sexta. Confira sempre no " +
      "calendário antes de enviar. E se for gravar ou transcrever reuniões, avise todos os participantes.",
  },
  {
    id: "m5-ex",
    modulo: 5,
    tipo: "exercicio",
    titulo: "Da bagunça para a ata",
    itens: [
      "Use as anotações fictícias do roteiro (ou as suas, sem dados sensíveis)",
      "Peça a ata com a frase do [VERIFICAR]",
      "Confira cada [VERIFICAR] e cada data",
      "Peça uma versão em e-mail curto para os participantes",
    ],
    notas: "Nas anotações fictícias há propositalmente informações incompletas, como \"próxima reunião dia 26?\". Veja como a IA lida com elas.",
  },

  // --- Módulo 6 ---------------------------------------------------------------------------
  { id: "m6", tipo: "abertura", modulo: 6, notas: "A IA também lê arquivos e imagens, e pode pesquisar na internet. Aqui você aprende a usar isso com cuidado." },
  {
    id: "m6-docs",
    modulo: 6,
    tipo: "prompt",
    kicker: "Documentos",
    titulo: "Resumo executivo com páginas",
    texto:
      "Leia o documento anexo e me entregue: (1) um resumo em até cinco linhas; (2) os prazos e datas importantes; (3) os " +
      "valores mencionados; (4) o que exige ação ou decisão da diretoria. Indique a página de cada informação para eu conferir.",
    legenda: "Pedir a página é o que permite conferir rápido.",
    notas:
      "Anexe o arquivo pelo ícone de clipe ou + e use este pedido. A parte mais importante é a última frase: com a página " +
      "indicada, você confere cada informação em segundos. Outra variação útil: \"com base apenas no documento, responda... " +
      "Se não estiver no documento, diga que não encontrou.\"",
  },
  {
    id: "m6-imagens",
    modulo: 6,
    tipo: "cards",
    kicker: "Fotos e imagens",
    titulo: "Tire uma foto e peça",
    cards: [
      { titulo: "Quadro branco", texto: "Transcrever e organizar em tópicos" },
      { titulo: "Cartão de visita", texto: "Nome, cargo, telefone e e-mail em tabela" },
      { titulo: "Recibos", texto: "Data, estabelecimento e valor de cada um" },
      { titulo: "Print de erro", texto: "O que significa e o que fazer" },
    ],
    notas:
      "A IA lê imagens. Isso economiza muita digitação: uma foto do quadro depois da reunião, uma pilha de cartões de visita " +
      "depois de um evento, os recibos de uma viagem para o reembolso. Confira os números, principalmente se a foto não estiver nítida.",
  },
  {
    id: "m6-pesquisa",
    modulo: 6,
    tipo: "topicos",
    kicker: "Pesquisa",
    titulo: "Pesquisa na internet, com fontes",
    itens: [
      "As ferramentas atuais pesquisam na web e mostram os links",
      "**Peça as fontes e abra pelo menos uma** antes de usar",
      "**NotebookLM** (Google): perguntas só sobre os seus documentos",
    ],
    destaque: "Documento confidencial? Só em ferramenta aprovada pela empresa.",
    notas:
      "Com pesquisa, a resposta pode trazer informação recente, mas ainda pode estar errada ou mal interpretada. Abra a fonte. " +
      "O NotebookLM é ótimo para manuais e políticas internas, porque responde só com base no que você carregou e mostra o trecho.",
  },
  {
    id: "m6-ex",
    modulo: 6,
    tipo: "exercicio",
    titulo: "Encontre e confira",
    itens: [
      "Escolha um documento público e longo",
      "Peça o resumo executivo com páginas",
      "Confira três informações no original",
      "Faça duas perguntas específicas e confira as respostas",
    ],
    notas: "Use documentos públicos para treinar, como um regulamento ou um manual de produto. Assim você pratica sem nenhum risco de expor dados da empresa.",
  },

  // --- Módulo 7 ---------------------------------------------------------------------------
  { id: "m7", tipo: "abertura", modulo: 7, notas: "Segurança é o que permite usar a IA no trabalho sem medo. Este módulo é curto de ler e importante de aplicar." },
  {
    id: "m7-pergunta",
    modulo: 7,
    tipo: "frase",
    texto: "Eu colaria isso num e-mail para alguém de fora da empresa?",
    apoio: "Tudo o que você digita vai para os servidores da ferramenta.",
    notas:
      "Esta é a pergunta para fazer antes de colar qualquer coisa. As conversas podem ser guardadas, usadas para melhorar os " +
      "modelos e, em alguns casos, lidas por revisores. Se a resposta for \"não\", anonimize ou não cole.",
  },
  {
    id: "m7-semaforo",
    modulo: 7,
    tipo: "tabela",
    kicker: "O semáforo dos dados",
    titulo: "Verde, amarelo, vermelho",
    colunas: ["Sinal", "Exemplos"],
    linhas: [
      ["🟢 Pode", "Modelo de e-mail, dúvida de português, pesquisa de restaurante, texto sem nomes"],
      ["🟡 Com cuidado", "E-mail de cliente com nome e números trocados, anotações sem dados pessoais"],
      ["🔴 Nunca", "Senhas, CPF, dados bancários, saúde, folha de pagamento, contratos confidenciais"],
    ],
    notas:
      "Amarelo significa anonimizar: trocar nomes, números e qualquer dado que identifique alguém. Vermelho não vai para a IA, " +
      "nem anonimizado, a não ser numa ferramenta aprovada pela empresa para isso. Lembre da LGPD: dados pessoais de clientes e " +
      "colegas são protegidos por lei.",
  },
  {
    id: "m7-config",
    modulo: 7,
    tipo: "topicos",
    kicker: "Configurações",
    titulo: "Ajuste a privacidade",
    itens: [
      "Configurações → **Controles de dados**, **Privacidade** ou **Atividade**",
      "Desative o uso das conversas para treinar os modelos, quando houver a opção",
      "Use **conversa temporária** para assuntos sensíveis",
      "Apague conversas antigas de tempos em tempos",
    ],
    notas:
      "Os nomes das opções mudam com frequência. Se não encontrar, pergunte à própria IA como desativar o uso das conversas " +
      "para treinamento, e confira na central de ajuda oficial. Faça isso hoje: leva cinco minutos.",
  },
  {
    id: "m7-conferir",
    modulo: 7,
    tipo: "cards",
    kicker: "Confira antes de confiar",
    titulo: "Seis coisas para olhar sempre",
    cards: [
      { titulo: "Nomes", texto: "Pessoas, empresas, cargos" },
      { titulo: "Números", texto: "Valores, telefones, porcentagens" },
      { titulo: "Datas", texto: "Horários e dias da semana" },
      { titulo: "Leis e normas", texto: "Número e conteúdo" },
      { titulo: "Links", texto: "Abra e veja aonde levam" },
      { titulo: "Promessas", texto: "Em nome da empresa ou da diretora" },
    ],
    notas:
      "Um truque: peça para a IA \"Liste o que você tem menos certeza na sua resposta e o que eu deveria conferir\". Ela costuma " +
      "apontar justamente os pontos mais frágeis.",
  },
  {
    id: "m7-golpes",
    modulo: 7,
    tipo: "topicos",
    kicker: "Golpes com IA",
    titulo: "Pedido urgente \"da diretora\"? Pare e confirme.",
    itens: [
      "A IA clona vozes com poucos segundos de áudio e escreve golpes sem erros",
      "Pix, transferência, cartão-presente, troca de dados bancários de fornecedor: **desconfie**",
      "**Desligue e ligue de volta** para o número que você já tem salvo",
      "Combine uma **palavra-código** com a diretoria",
    ],
    notas:
      "Secretárias e assistentes são alvos frequentes porque têm acesso à agenda, aos contatos e às vezes a pagamentos. O golpe " +
      "sempre usa urgência e autoridade: \"é a Helena, preciso disso agora\". A defesa é simples e funciona: confirmar por outro " +
      "canal, sem exceção.",
  },
  {
    id: "m7-ex",
    modulo: 7,
    tipo: "exercicio",
    titulo: "Seu kit de segurança",
    itens: [
      "Revise as configurações de privacidade da sua ferramenta",
      "Monte o seu semáforo com exemplos reais do seu trabalho",
      "Descubra se a empresa tem política de IA",
      "Combine uma palavra-código com a diretora",
    ],
    notas: "Deixe o seu semáforo impresso ou à vista. Em poucas semanas a pergunta \"isso pode ir para a IA?\" vira hábito.",
  },

  // --- Módulo 8 ---------------------------------------------------------------------------
  { id: "m8", tipo: "abertura", modulo: 8, notas: "Último módulo: juntar tudo numa rotina e sair do curso com ferramentas prontas para usar na segunda-feira." },
  {
    id: "m8-personalizar",
    modulo: 8,
    tipo: "prompt",
    kicker: "Personalização",
    titulo: "Diga uma vez quem você é",
    texto:
      "Sou secretária executiva da diretoria comercial de uma distribuidora. Escrevo em português do Brasil, com tom cordial e " +
      "profissional e frases curtas. Quando faltar informação, pergunte antes de supor. Nunca invente nomes, números ou datas: " +
      "marque [VERIFICAR].",
    legenda: "Instruções personalizadas, Projetos, Gems e GPTs guardam isso para você.",
    notas:
      "Até agora você escreveu o contexto em cada pedido. Com as instruções personalizadas, você escreve uma vez e vale para " +
      "todas as conversas. Projetos (ChatGPT e Claude) e Gems (Gemini) vão além: guardam instruções e arquivos para um assunto " +
      "específico, como a agenda da diretora.",
  },
  {
    id: "m8-rotina",
    modulo: 8,
    tipo: "tabela",
    kicker: "Rotina",
    titulo: "Uma semana com IA",
    colunas: ["Quando", "O que pedir"],
    linhas: [
      ["Segunda de manhã", "Prioridades da semana e pautas"],
      ["Todo dia", "Rascunhos, ajuste de tom e revisão"],
      ["Depois de cada reunião", "Ata e pendências"],
      ["Documento longo", "Resumo executivo com páginas"],
      ["Sexta à tarde", "Resumo da semana e atualização da biblioteca"],
    ],
    notas:
      "Esta é uma sugestão, não uma regra. Adapte ao seu trabalho. O importante é ter momentos fixos de uso: é assim que a IA " +
      "deixa de ser novidade e vira ferramenta de trabalho.",
  },
  {
    id: "m8-projeto",
    modulo: 8,
    tipo: "exercicio",
    titulo: "Projeto final: o seu Kit IA",
    itens: [
      "Cinco tarefas recorrentes, cada uma com um pedido P-C-T-F-R testado",
      "Cada pedido testado em duas ferramentas",
      "Tempo antes e depois em cada tarefa",
      "Instruções personalizadas configuradas",
      "Tudo num documento com o semáforo e a rotina",
    ],
    notas:
      "O Kit IA é o que você leva do curso. Ele junta a biblioteca do módulo 3, os pedidos dos módulos 4 a 6, o semáforo do " +
      "módulo 7 e a rotina deste módulo. Com o tempo economizado medido, você também tem um argumento concreto para mostrar à " +
      "diretoria o valor do que aprendeu.",
  },
  {
    id: "m8-principios",
    modulo: 8,
    tipo: "cards",
    kicker: "Para levar",
    titulo: "As ferramentas mudam. Os princípios, não.",
    cards: [
      { titulo: "Contexto claro", texto: "P-C-T-F-R" },
      { titulo: "Converse", texto: "Ajuste em vez de recomeçar" },
      { titulo: "Confira", texto: "Nomes, números, datas, links" },
      { titulo: "Proteja", texto: "O semáforo dos dados" },
    ],
    notas:
      "Daqui a um ano, as telas vão estar diferentes e haverá ferramentas novas. Estes quatro princípios continuam valendo. " +
      "Experimente uma coisa nova por semana e ensine o que aprendeu a uma colega.",
  },
  {
    id: "fim",
    tipo: "fim",
    notas:
      "Parabéns por chegar até aqui! Volte ao roteiro de estudo sempre que precisar de um pedido pronto, e use a colinha do " +
      "final do roteiro como consulta rápida.",
  },
];
