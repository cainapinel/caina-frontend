import { SEVERITY_CLASSES, SEVERITY_LABEL_PT } from "@/lib/severity";
import type { VerdictSignal } from "@/lib/types";

export function SignalBreakdown({ signals }: { signals: VerdictSignal[] }) {
  if (signals.length === 0) return null;
  return (
    <div className="rounded-2xl border border-edge bg-surface p-6">
      <h3 className="font-semibold">Sinais que compõem o escore</h3>
      <ul className="mt-4 divide-y divide-edge">
        {signals.map((signal) => (
          <li key={signal.id} className="flex items-start gap-3 py-3">
            <span
              className={`mt-0.5 shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase ${SEVERITY_CLASSES[signal.severity]}`}
            >
              {SEVERITY_LABEL_PT[signal.severity]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{signal.label_pt}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">
                {signal.detail_pt}
              </p>
            </div>
            <span className="shrink-0 font-mono text-sm text-accent">
              +{signal.points}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
