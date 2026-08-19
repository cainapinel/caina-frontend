import { CATEGORY_LABEL_PT } from "@/lib/severity";
import type { Report } from "@/lib/types";

export function CategoryCounters({ unicode }: { unicode: Report["unicode"] }) {
  const entries = Object.entries(unicode.counts_by_category);
  return (
    <div className="rounded-2xl border border-edge bg-surface p-6">
      <div className="flex items-baseline justify-between">
        <h3 className="font-semibold">Caracteres suspeitos</h3>
        <span className="font-mono text-sm text-muted">
          {unicode.total_findings} achado(s)
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {entries.map(([category, count]) => (
          <div
            key={category}
            className={`rounded-lg border p-3 text-center ${
              count > 0 ? "border-accent/40 bg-accent-soft" : "border-edge bg-surface2"
            }`}
          >
            <p className={`text-xl font-bold ${count > 0 ? "text-accent" : "text-muted"}`}>
              {count}
            </p>
            <p className="mt-1 text-[11px] leading-tight text-muted">
              {CATEGORY_LABEL_PT[category] ?? category}
            </p>
          </div>
        ))}
      </div>
      {unicode.findings_truncated && (
        <p className="mt-3 text-xs text-muted">
          Lista detalhada limitada aos 300 achados mais relevantes — os contadores
          acima são exatos.
        </p>
      )}
    </div>
  );
}
