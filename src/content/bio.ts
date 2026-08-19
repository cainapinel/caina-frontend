/**
 * Conteúdo da landing — carreira/biografia (fonte: currículo do Cainã, ago/2026).
 * Único pendente: [PREENCHER] a URL do LinkedIn.
 */

export const hero = {
  name: "Cainã Albuquerque Pinel",
  title: "Líder Técnico · Engenheiro de Software",
  bio:
    "Engenheiro de software e líder técnico com ampla experiência em automação " +
    "de processos (RPA) e desenvolvimento full-stack. Especialista em Python e " +
    "no ecossistema Django, com forte atuação em React/TypeScript, arquitetura " +
    "de soluções, gestão de times e relacionamento com clientes. Hoje, professor " +
    "universitário na FIAP e criador de produtos como EcoSafe OS e Cockpit " +
    "Platform.",
  photo: "/caina.jpeg",
  github: "https://github.com/cainapinel",
  email: "caina@pinel.com.br",
  linkedin: null as string | null, // [PREENCHER: URL do LinkedIn]
};

export interface TimelineEntry {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    period: "2026 — atual",
    role: "Professor Universitário",
    organization: "FIAP",
    description:
      "Ensino de Pensamento Computacional com Python: currículo de lógica, " +
      "algoritmos e Python avançado, mentoria em boas práticas de engenharia e " +
      "avaliação de projetos técnicos.",
  },
  {
    period: "2025 — 2026",
    role: "Software Engineer",
    organization: "Pinterest",
    description:
      "Atuação em Growth Systems: desenvolvimento em Python, React, Kotlin e " +
      "Swift, resolução de problemas complexos e mentoria técnica do time.",
  },
  {
    period: "2024 — 2025",
    role: "RPA Developer · Líder Técnico",
    organization: "Innolevels",
    description:
      "Liderança técnica em Python e análise de dados, arquitetura de soluções " +
      "em Django e React, gestão de equipe e relacionamento direto com clientes.",
  },
  {
    period: "2022 — 2024",
    role: "RPA Developer",
    organization: "Grupo Águia Branca",
    description:
      "Automação de processos em Python (Selenium, PyAutoGUI) num dos maiores " +
      "grupos de transporte e logística do Brasil, com melhoria contínua e " +
      "suporte às automações em produção.",
  },
  {
    period: "2021 — 2022",
    role: "RPA Developer",
    organization: "YDUQS (Ensine-me)",
    description:
      "Automação de gestão de LMS com Python e UiPath, web scraping, code " +
      "review e otimização de gargalos de performance.",
  },
  {
    period: "2020 — 2021",
    role: "Programador Freelancer",
    organization: "ByJR&Cia",
    description:
      "Modernização do sistema de tesouraria de um partido político nacional " +
      "(PHP/CodeIgniter), com ajustes de interface, segurança e conformidade " +
      "regulatória.",
  },
  {
    period: "2019 — 2020",
    role: "Estágio em TI",
    organization: "Instituto Brasileiro de Atuária (IBA)",
    description:
      "Apoio ao desenvolvimento de aplicações atuariais e manutenção de " +
      "sistemas em PHP e JavaScript.",
  },
];

export interface EducationEntry {
  period: string;
  degree: string;
  institution: string;
}

export const education: EducationEntry[] = [
  {
    period: "2024 — 2025",
    degree: "MBA em IA, Data Science & Big Data",
    institution: "IBMEC",
  },
  {
    period: "2022 — 2023",
    degree: "MBA em Desenvolvimento Fullstack",
    institution: "Universidade Estácio de Sá (UNESA)",
  },
  {
    period: "2006 — 2012",
    degree: "Bacharelado em Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Estácio de Sá (UNESA)",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Linguagens",
    items: ["Python", "TypeScript / JavaScript", "Kotlin", "Swift", "PHP"],
  },
  {
    group: "Frameworks",
    items: ["Django + DRF", "React", "Next.js", "Node.js", "Celery"],
  },
  {
    group: "Automação & Dados",
    items: ["Selenium / Playwright", "UiPath", "Automation Anywhere", "pandas", "SARIMAX"],
  },
  {
    group: "Infra & Bancos",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS / Azure", "Railway / Vercel"],
  },
];
