import type { Report } from "@/lib/types";
import { CategoryCounters } from "./CategoryCounters";
import { HighlightedText } from "./HighlightedText";
import { LimitationsAccordion } from "./LimitationsAccordion";
import { MetadataPanel } from "./MetadataPanel";
import { SignalBreakdown } from "./SignalBreakdown";
import { StylometryPanel } from "./StylometryPanel";
import { VerdictGauge } from "./VerdictGauge";

export function ReportView({
  report,
  submittedText,
}: {
  report: Report;
  submittedText: string | null;
}) {
  // Texto para highlight: o colado (guardado no cliente) ou o extraído do arquivo.
  const highlightText = report.extracted_text ?? submittedText;

  return (
    <div className="space-y-6">
      <VerdictGauge verdict={report.verdict} />
      <SignalBreakdown signals={report.verdict.signals} />
      <CategoryCounters unicode={report.unicode} />

      {highlightText && report.unicode.findings.length > 0 && (
        <div className="rounded-2xl border border-edge bg-surface p-6">
          <h3 className="font-semibold">Texto com achados destacados</h3>
          <p className="mt-1 text-xs text-muted">
            Passe o mouse sobre cada marcação para ver o caractere, a posição e a
            explicação.
            {report.extracted_text_truncated &&
              " Texto extraído exibido parcialmente (limite de 50 mil caracteres)."}
          </p>
          <div className="mt-4">
            <HighlightedText text={highlightText} findings={report.unicode.findings} />
          </div>
        </div>
      )}

      {report.metadata && <MetadataPanel metadata={report.metadata} />}
      <StylometryPanel stylometry={report.stylometry} />
      <LimitationsAccordion limitations={report.verdict.limitations_pt} />

      <p className="text-center font-mono text-[11px] text-muted">
        análise em {report.duration_ms} ms · {report.input.char_count} caracteres ·{" "}
        {report.notes_pt[0]}
      </p>
    </div>
  );
}
