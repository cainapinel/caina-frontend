import { skills } from "@/content/bio";

export function SkillsGrid() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.group} className="rounded-xl border border-edge bg-surface p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              {group.group}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
