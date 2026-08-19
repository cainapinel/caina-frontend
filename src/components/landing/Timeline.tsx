import { education, timeline } from "@/content/bio";

export function Timeline() {
  return (
    <section id="carreira" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Carreira</h2>
      <ol className="mt-8 space-y-8 border-l border-edge pl-6">
        {timeline.map((entry, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-night" />
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {entry.period}
            </p>
            <h3 className="mt-1 font-medium">
              {entry.role}{" "}
              <span className="text-muted">· {entry.organization}</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {entry.description}
            </p>
          </li>
        ))}
      </ol>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">Formação</h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {education.map((entry, i) => (
          <li key={i} className="rounded-xl border border-edge bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {entry.period}
            </p>
            <p className="mt-2 text-sm font-medium leading-snug">{entry.degree}</p>
            <p className="mt-1 text-xs text-muted">{entry.institution}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
