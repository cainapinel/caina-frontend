import type { Severity, VerdictLevel } from "./types";

export const SEVERITY_LABEL_PT: Record<Severity, string> = {
  high: "forte",
  medium: "médio",
  low: "fraco",
  info: "informativo",
};

/** Classes Tailwind por severidade (chip/badge). */
export const SEVERITY_CLASSES: Record<Severity, string> = {
  high: "bg-sev-high/15 text-sev-high border-sev-high/40",
  medium: "bg-sev-medium/15 text-sev-medium border-sev-medium/40",
  low: "bg-sev-low/15 text-sev-low border-sev-low/40",
  info: "bg-sev-info/15 text-sev-info border-sev-info/40",
};

export const LEVEL_COLOR: Record<VerdictLevel, string> = {
  strong: "var(--color-sev-high)",
  moderate: "var(--color-sev-medium)",
  weak: "var(--color-sev-low)",
  none: "var(--color-ok)",
};

export const CATEGORY_LABEL_PT: Record<string, string> = {
  invisible: "Invisíveis",
  atypical_space: "Espaços atípicos",
  bidi_control: "Controles bidi",
  variation_selector: "Seletores de variação",
  tag: "Caracteres TAG",
  typographic: "Tipográficos",
  homoglyph: "Homoglifos",
};
