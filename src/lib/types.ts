/**
 * Espelho TypeScript do contrato JSON da Vestígio API (schema_version 1.0).
 *
 * IMPORTANTE: as posições dos achados são offsets de CODEPOINT (índices
 * Python). Em JS, indexe o texto via `Array.from(text)` — nunca `.charAt`
 * (unidades UTF-16 divergem após o primeiro emoji).
 */

export type Severity = "high" | "medium" | "low" | "info";
export type VerdictLevel = "strong" | "moderate" | "weak" | "none";

export type UnicodeCategory =
  | "invisible"
  | "atypical_space"
  | "bidi_control"
  | "variation_selector"
  | "tag"
  | "typographic"
  | "homoglyph";

export interface UnicodeFinding {
  codepoint: string;
  name: string;
  category: UnicodeCategory;
  severity: Severity;
  position: number;
  line: number;
  column: number;
  context_before: string;
  context_after: string;
  context_display: string;
  explanation_pt: string;
}

export interface VerdictSignal {
  id: string;
  category: string;
  severity: Severity;
  points: number;
  label_pt: string;
  detail_pt: string;
}

export interface Verdict {
  level: VerdictLevel;
  label_pt: string;
  score: number;
  summary_pt: string;
  signals: VerdictSignal[];
  limitations_pt: string[];
}

export interface MetadataFinding {
  id: string;
  category: string;
  severity: Severity;
  label_pt: string;
  detail_pt: string;
}

export interface DocxMetadata {
  core: {
    creator: string | null;
    last_modified_by: string | null;
    description: string | null;
    revision: number | null;
    created: string | null;
    modified: string | null;
  };
  app: {
    application: string | null;
    app_version: string | null;
    company: string | null;
    total_time_minutes: number | null;
  };
  rsid_count: number;
  findings: MetadataFinding[];
}

export interface PdfMetadata {
  producer: string | null;
  creator: string | null;
  creation_date: string | null;
  mod_date: string | null;
  encrypted: boolean;
  xmp_present: boolean;
  page_count: number;
  text_extractable: boolean;
  findings: MetadataFinding[];
}

export interface PlaintextMetadata {
  encoding: string;
  bom: string | null;
  line_endings: string;
  findings: MetadataFinding[];
}

export interface ReportMetadata {
  docx: DocxMetadata | null;
  pdf: PdfMetadata | null;
  plaintext: PlaintextMetadata | null;
}

export interface ClicheHit {
  phrase: string;
  lang: "pt" | "en";
  count: number;
  positions: number[];
}

export interface StylometryStructure {
  bullet_lines: number;
  bold_bullet_pattern: boolean;
  heading_lines: number;
  markdown_residue: boolean;
}

export interface Stylometry {
  applicable: boolean;
  reason_pt: string | null;
  metrics: {
    word_count: number;
    sentence_count?: number;
    paragraph_count?: number;
    em_dash_count?: number;
    em_dash_per_1000_words?: number;
    sentence_length_mean?: number;
    sentence_length_stddev?: number;
    sentence_length_cv?: number | null;
    paragraph_length_cv?: number | null;
    type_token_ratio?: number | null;
  };
  cliches: ClicheHit[];
  structure: StylometryStructure | null;
  findings: MetadataFinding[];
}

export interface Report {
  schema_version: string;
  analyzed_at: string;
  duration_ms: number;
  input: {
    kind: "text" | "file";
    filename: string | null;
    filetype: "docx" | "pdf" | "txt" | "md" | null;
    size_bytes: number | null;
    char_count: number;
    word_count: number;
    truncated: boolean;
  };
  verdict: Verdict;
  unicode: {
    total_findings: number;
    counts_by_category: Record<UnicodeCategory, number>;
    findings: UnicodeFinding[];
    findings_truncated: boolean;
  };
  metadata: ReportMetadata | null;
  stylometry: Stylometry;
  extracted_text: string | null;
  extracted_text_truncated: boolean;
  notes_pt: string[];
}

export interface ApiErrorBody {
  error: {
    code: string;
    message_pt: string;
    retry_after?: number;
  };
}
