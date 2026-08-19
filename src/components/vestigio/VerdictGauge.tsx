import { LEVEL_COLOR } from "@/lib/severity";
import type { Verdict } from "@/lib/types";

export function VerdictGauge({ verdict }: { verdict: Verdict }) {
  const color = LEVEL_COLOR[verdict.level];
  const radius = 54;
  const circumference = Math.PI * radius; // semicírculo
  const filled = (verdict.score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-edge bg-surface p-6 md:flex-row md:items-center md:gap-8">
      <div className="relative shrink-0">
        <svg width="140" height="82" viewBox="0 0 140 82" aria-hidden>
          <path
            d="M 16 74 A 54 54 0 0 1 124 74"
            fill="none"
            stroke="var(--color-edge)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 16 74 A 54 54 0 0 1 124 74"
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${filled} ${circumference}`}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0 text-center">
          <span className="text-3xl font-bold" style={{ color }}>
            {verdict.score}
          </span>
          <span className="text-sm text-muted">/100</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold" style={{ color }}>
          {verdict.label_pt}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{verdict.summary_pt}</p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-muted">
          escore = intensidade de vestígios · não é probabilidade de IA
        </p>
      </div>
    </div>
  );
}
