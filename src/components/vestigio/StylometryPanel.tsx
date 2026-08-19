import { SEVERITY_CLASSES, SEVERITY_LABEL_PT } from "@/lib/severity";
import type { Stylometry } from "@/lib/types";

function Metric({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-edge bg-surface2 p-3">
      <p className="font-mono text-lg">{value ?? "—"}</p>
      <p className="mt-1 text-[11px] leading-tight text-muted">{label}</p>
    </div>
  );
}

export function StylometryPanel({ stylometry }: { stylometry: Stylometry }) {
  if (!stylometry.applicable) {
    return (
      <div className="rounded-2xl border border-edge bg-surface p-6">
        <h3 className="font-semibold">Estilometria</h3>
        <p className="mt-2 text-sm text-muted">{stylometry.reason_pt}</p>
      </div>
    );
  }

  const m = stylometry.metrics;
  return (
    <div className="rounded-2xl border border-edge bg-surface p-6">
      <h3 className="font-semibold">Estilometria</h3>
      <p className="mt-1 text-xs text-muted">
        Indícios fracos por natureza — leia com as limitações em mente.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Metric label="palavras" value={m.word_count} />
        <Metric label="sentenças" value={m.sentence_count} />
        <Metric label="parágrafos" value={m.paragraph_count} />
        <Metric label="travessões / 1000 palavras" value={m.em_dash_per_1000_words} />
        <Metric
          label="variação do tamanho das sentenças (CV)"
          value={m.sentence_length_cv ?? "—"}
        />
        <Metric label="riqueza vocabular (TTR)" value={m.type_token_ratio ?? "—"} />
      </div>

      {stylometry.cliches.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm font-medium">Expressões recorrentes em texto gerado</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {stylometry.cliches.map((c) => (
              <li
                key={c.phrase}
                className="rounded-full border border-edge bg-surface2 px-3 py-1 text-xs text-muted"
              >
                “{c.phrase}” <span className="font-mono text-accent">×{c.count}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {stylometry.findings.length > 0 && (
        <ul className="mt-5 space-y-3">
          {stylometry.findings.map((f) => (
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
      )}
    </div>
  );
}
