import type { MaterialConsulta } from "./tipos";

/** Material de consulta do curso intermediário: pedidos de nível 2, extras e o diário de uso. */
export const consultaIaIntermediario: MaterialConsulta = {
  apresentacao:
    "Pedidos de nível 2 para copiar e adaptar: memória e contexto, Excel, análise, relatórios, Canva e assistentes. São " +
    "mais longos que os do introdutório porque fazem trabalhos maiores. Troque o que está entre colchetes e confira sempre " +
    "o resultado.",
  modeloTitulo: "Modelo do diário de uso",
  modeloSub: "Registre cada uso relevante da IA durante o curso. O diário faz parte da avaliação do projeto final.",
  categorias: [
    {
      id: "memoria",
      titulo: "Memória e contexto",
      pedidos: [
        {
          titulo: "Resumir para recomeçar",
          texto:
            "Resuma esta conversa em tópicos para eu continuar numa conversa nova: objetivo, decisões tomadas, regras " +
            "combinadas, dados importantes e o que ainda falta fazer. Seja completo, mas sem repetir o que já foi descartado.",
        },
        {
          titulo: "O que você sabe sobre mim?",
          texto:
            "Liste tudo o que você sabe ou supõe sobre mim e sobre como eu gosto de receber respostas, separando o que está " +
            "na memória ou nas instruções do que você deduziu nesta conversa.",
        },
        {
          titulo: "Guardar uma preferência",
          texto: "Lembre, para as próximas conversas: [preferência, ex.: prefiro relatórios em tópicos, com no máximo uma página].",
        },
        {
          titulo: "Retomar um trabalho",
          texto:
            "Vou retomar um trabalho. Este é o resumo de onde paramos: [cole o resumo]. Antes de continuar, confirme o que " +
            "entendeu e me diga qual é o próximo passo.",
        },
      ],
    },
    {
      id: "nivel2",
      titulo: "Técnicas de nível 2",
      pedidos: [
        {
          titulo: "Seguir um exemplo",
          texto: "Faça [tarefa] com as informações abaixo. Siga exatamente o estilo, a estrutura e o tamanho deste exemplo:\n\n[exemplo]\n\nInformações:\n[cole]",
        },
        {
          titulo: "Trabalhar em etapas",
          texto:
            "Vamos fazer [trabalho] em etapas. Etapa 1: [primeira etapa]. Não avance para a etapa seguinte até eu confirmar. " +
            "As próximas serão: [liste as etapas].",
        },
        {
          titulo: "Autocrítica",
          texto:
            "Revise a sua resposta como se fosse [quem vai ler]. Aponte: afirmações sem dado, trechos ambíguos e o que falta " +
            "para tomar uma decisão. Depois reescreva corrigindo.",
        },
        {
          titulo: "Resposta em tabela para o Excel",
          texto: "Responda em uma tabela com as colunas [A], [B] e [C], sem texto antes ou depois, para eu colar no Excel.",
        },
      ],
    },
    {
      id: "excel",
      titulo: "Excel: fórmulas",
      pedidos: [
        {
          titulo: "Pedir uma fórmula",
          texto:
            "Uso Excel do Microsoft 365 em português. Na aba [aba], a coluna [letra] tem [conteúdo] e os dados começam na " +
            "linha 2. Quero, na coluna [letra], [resultado desejado]. Me dê a fórmula para a primeira linha, explique cada " +
            "parte em português simples e diga o que acontece se [caso especial].",
        },
        {
          titulo: "Buscar em outra aba",
          texto:
            "Quero trazer [informação] da aba [aba de origem] para a aba [aba de destino], usando [coluna em comum] como " +
            "chave. Use PROCX, trate o caso de não encontrar com uma mensagem, e explique a fórmula.",
        },
        {
          titulo: "Somar ou contar com condições",
          texto:
            "Quero [somar / contar] [o quê] apenas quando [condição 1] e [condição 2]. Os dados estão em [abas e colunas]. " +
            "Use SOMASES ou CONT.SES e explique.",
        },
        {
          titulo: "Resolver um erro",
          texto:
            "Na célula [célula] a fórmula [cole a fórmula] dá [erro]. Nas outras linhas funciona. O valor da célula de busca é " +
            "[valor]. Já conferi [o que você conferiu]. Quais são as causas possíveis e como confiro cada uma?",
        },
      ],
    },
    {
      id: "analise",
      titulo: "Excel: limpeza e análise",
      pedidos: [
        {
          titulo: "Diagnóstico de qualidade",
          texto:
            "Estas são as primeiras linhas de uma planilha exportada de um sistema. Liste todos os problemas de qualidade " +
            "(espaços, escrita diferente, vazios, números como texto, duplicadas), com a linha, e como corrigir cada tipo no " +
            "Excel em português.\n\n[cole as linhas]",
        },
        {
          titulo: "Perguntas para os dados",
          texto:
            "Tenho uma planilha com as colunas [liste]. Vou apresentar a análise para [quem]. Liste as perguntas mais úteis " +
            "que essa pessoa vai querer respondidas e, para cada uma, a tabela dinâmica ou o gráfico que responde.",
        },
        {
          titulo: "Análise com conferência",
          texto:
            "Analise a planilha anexa. Responda: [perguntas]. Para cada número, explique como calculou. Separe o que os dados " +
            "mostram do que é hipótese sua.",
        },
        {
          titulo: "Investigar uma variação",
          texto:
            "As vendas de [categoria/região] passaram de [valor] em [mês] para [valor] em [mês]. Com base na tabela por " +
            "cliente abaixo, mostre quais clientes explicam a variação, em ordem de impacto. Não sugira causas externas.\n\n[cole a tabela]",
        },
      ],
    },
    {
      id: "relatorios",
      titulo: "Relatórios",
      pedidos: [
        {
          titulo: "Rascunho de relatório executivo",
          texto:
            "Com base apenas nos números abaixo, escreva um relatório executivo para [destinatário]: resumo executivo (até 5 " +
            "linhas), destaques, pontos de atenção e recomendações com responsável e prazo. Todo fato com número; hipóteses " +
            "marcadas como \"(hipótese)\"; no máximo [tamanho]. No fim, liste os números usados.\n\n[cole as tabelas]",
        },
        {
          titulo: "Títulos que contam a história",
          texto: "Sugira, para cada seção do relatório abaixo, um título que já diga a conclusão, com até oito palavras.\n\n[cole]",
        },
        {
          titulo: "Revisão de cinco minutos",
          texto:
            "Revise o relatório como se fosse [destinatário] com cinco minutos. O resumo executivo basta sozinho? Há fato sem " +
            "número? Há hipótese escrita como fato? As recomendações dizem quem e quando?\n\n[cole]",
        },
      ],
    },
    {
      id: "canva",
      titulo: "Apresentações e Canva",
      pedidos: [
        {
          titulo: "Roteiro de slides",
          texto:
            "Transforme o texto abaixo no roteiro de uma apresentação de no máximo [número] slides. Para cada slide: título com " +
            "a mensagem (até 8 palavras), até 3 tópicos curtos e o gráfico ou número que deve aparecer. Responda em tabela.\n\n[cole]",
        },
        {
          titulo: "Cortar texto dos slides",
          texto: "Revise este roteiro e aponte os slides com texto demais. Para cada um, proponha uma versão com metade das palavras.\n\n[cole]",
        },
        {
          titulo: "Escolher o gráfico",
          texto:
            "Quero mostrar [o que você quer mostrar] com estes números: [cole]. Que tipo de gráfico comunica melhor e por quê? " +
            "Sugira também o título do gráfico como mensagem.",
        },
      ],
    },
    {
      id: "assistentes",
      titulo: "Assistentes",
      pedidos: [
        {
          titulo: "Escrever instruções de assistente",
          texto:
            "Quero criar um assistente para [tarefa recorrente]. Escreva as instruções com: missão, o que eu vou colar a cada " +
            "uso, a estrutura exata da resposta, regras (tom, o que nunca fazer, [VERIFICAR]), um espaço para exemplo e o que " +
            "fazer quando faltar informação. Antes de escrever, me faça as perguntas de que precisar.",
        },
        {
          titulo: "Testar um assistente",
          texto:
            "Crie três casos de teste para o assistente com as instruções abaixo: um normal, um com informação faltando e um " +
            "com algo estranho ou contraditório. Para cada um, diga o que uma boa resposta deveria fazer.\n\n[cole as instruções]",
        },
        {
          titulo: "Passo a passo de automação",
          texto: "Uso [Outlook / Gmail / Power Automate]. Quero que [o que deve acontecer] sempre que [condição]. Explique passo a passo, clique por clique, e os riscos de configurar errado.",
        },
      ],
    },
  ],
  ajustes: [
    "Separe o que os dados mostram do que é hipótese.",
    "Liste os números que você usou, para eu conferir.",
    "Explique a fórmula parte por parte.",
    "Responda em tabela, sem texto antes ou depois.",
    "Não avance até eu confirmar.",
    "Reescreva os títulos como mensagens.",
    "Corte pela metade sem perder números.",
    "O que um leitor exigente perguntaria?",
  ],
  antesDeEnviar: [
    "Todo número do texto foi conferido com a planilha",
    "Os totais por vendedor, região e cliente não têm nomes duplicados",
    "Fórmulas conferidas em duas ou três linhas na calculadora",
    "Hipóteses estão marcadas como hipóteses",
    "O resumo executivo se sustenta sozinho",
    "Relatório e apresentação mostram os mesmos números",
    "Recomendações dizem o quê, quem e quando",
    "Não sobrou [VERIFICAR] nem colchete",
  ],
  plano30Dias: [
    { periodo: "Semana 1", foco: "Memória", tarefas: ["Revise memória e instruções", "Registre todo uso no diário"] },
    { periodo: "Semana 2", foco: "Excel", tarefas: ["Peça e entenda três fórmulas novas", "Limpe uma planilha real (numa cópia)"] },
    { periodo: "Semana 3", foco: "Relatórios", tarefas: ["Faça um relatório com a estrutura do curso", "Use etapas e autocrítica"] },
    { periodo: "Semana 4", foco: "Assistentes", tarefas: ["Crie um assistente para a tarefa mais repetida", "Some as horas economizadas no diário"] },
  ],
  modeloKit: [
    { secao: "Diário de uso", campos: ["Data", "Tarefa", "Ferramenta", "Pedido (resumo)", "Deu certo? O que ajustei", "Tempo economizado"] },
    { secao: "O que a IA deve saber sobre mim", campos: ["Cargo e área", "Tarefas mais frequentes", "Formato preferido", "Regras (o que nunca fazer)"] },
    { secao: "Meus assistentes", campos: ["Assistente 1: tarefa e ferramenta", "Assistente 2: tarefa e ferramenta", "Assistente 3: tarefa e ferramenta"] },
  ],
};
