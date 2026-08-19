import { SEVERITY_CLASSES, SEVERITY_LABEL_PT } from "@/lib/severity";
import type { MetadataFinding, ReportMetadata } from "@/lib/types";

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4 border-b border-edge/60 py-2 text-sm last:border-0">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-mono text-xs leading-relaxed">{value ?? "—"}</dd>
    </div>
  );
}

function FindingList({ findings }: { findings: MetadataFinding[] }) {
  if (findings.length === 0) {
    return (
      <p className="mt-4 text-sm text-muted">
        Nenhum sinal suspeito nos metadados deste arquivo.
      </p>
    );
  }
  return (
    <ul className="mt-4 space-y-3">
      {findings.map((f) => (
        <li key={f.id} className="rounded-lg border border-edge bg-surface2 p-3">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase ${SEVERITY_CLASSES[f.severity]}`}
            >
              {SEVERITY_LABEL_PT[f.severity]}
            </span>
            <span className="text-sm font-medium">{f.label_pt}</span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted">{f.detail_pt}</p>
        </li>
      ))}
    </ul>
  );
}

export function MetadataPanel({ metadata }: { metadata: ReportMetadata }) {
  const { docx, pdf, plaintext } = metadata;
  return (
    <div className="rounded-2xl border border-edge bg-surface p-6">
      <h3 className="font-semibold">Metadados do arquivo</h3>

      {docx && (
        <>
          <dl className="mt-4">
            <Row label="Criador (dc:creator)" value={docx.core.creator} />
            <Row label="Último a modificar" value={docx.core.last_modified_by} />
            <Row label="Aplicativo" value={docx.app.application} />
            <Row label="Versão do aplicativo" value={docx.app.app_version} />
            <Row label="Revisões salvas" value={docx.core.revision} />
            <Row
              label="Tempo total de edição"
              value={
                docx.app.total_time_minutes === null
                  ? "—"
                  : `${docx.app.total_time_minutes} min`
              }
            />
            <Row label="Sessões de edição (RSIDs)" value={docx.rsid_count} />
            <Row label="Criado em" value={docx.core.created} />
            <Row label="Modificado em" value={docx.core.modified} />
          </dl>
          <FindingList findings={docx.findings} />
        </>
      )}

      {pdf && (
        <>
          <dl className="mt-4">
            <Row label="Producer" value={pdf.producer} />
            <Row label="Creator" value={pdf.creator} />
            <Row label="Criado em" value={pdf.creation_date} />
            <Row label="Modificado em" value={pdf.mod_date} />
            <Row label="Páginas" value={pdf.page_count} />
            <Row
              label="Texto extraível"
              value={pdf.text_extractable ? "sim" : "não (digitalização?)"}
            />
            <Row label="XMP presente" value={pdf.xmp_present ? "sim" : "não"} />
          </dl>
          <FindingList findings={pdf.findings} />
        </>
      )}

      {plaintext && (
        <>
          <dl className="mt-4">
            <Row label="Codificação" value={plaintext.encoding} />
            <Row label="BOM" value={plaintext.bom ?? "ausente"} />
            <Row label="Quebras de linha" value={plaintext.line_endings} />
          </dl>
          <FindingList findings={plaintext.findings} />
        </>
      )}
    </div>
  );
}
