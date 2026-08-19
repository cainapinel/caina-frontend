export function LimitationsAccordion({ limitations }: { limitations: string[] }) {
  return (
    <details
      open
      className="group rounded-2xl border border-sev-medium/30 bg-surface p-6"
    >
      <summary className="cursor-pointer list-none font-semibold marker:hidden">
        <span className="text-sev-medium">⚠</span> Limitações deste laudo — leia
        antes de tirar conclusões
        <span className="float-right text-muted transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <ul className="mt-4 space-y-2">
        {limitations.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
            <span className="text-sev-medium">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}
