import { honestyStatement, privacyNote, techniques } from "@/content/howitworks";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Como funciona</h2>

      <div className="mt-6 rounded-2xl border border-accent/30 bg-accent-soft p-6">
        <h3 className="font-semibold text-accent">{honestyStatement.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/90">
          {honestyStatement.body}
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {techniques.map((technique) => (
          <article
            key={technique.title}
            className="rounded-2xl border border-edge bg-surface p-6"
          >
            <h3 className="font-semibold">{technique.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">
              {technique.body}
            </p>
            <p className="mt-3 text-xs italic leading-relaxed text-muted">
              {technique.limitation}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-8 rounded-xl border border-edge bg-surface p-4 text-sm text-muted">
        🔒 {privacyNote}
      </p>
    </section>
  );
}
