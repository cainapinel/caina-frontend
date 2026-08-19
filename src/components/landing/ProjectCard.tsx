import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-edge bg-surface p-6 transition-colors hover:border-accent/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        {project.visibility === "private" ? (
          <span className="shrink-0 rounded-full border border-edge bg-surface2 px-3 py-1 font-mono text-[11px] text-muted">
            repositório privado
          </span>
        ) : (
          <a
            href={project.github!}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-accent/40 bg-accent-soft px-3 py-1 font-mono text-[11px] text-accent transition-colors hover:border-accent"
          >
            ver no GitHub ↗
          </a>
        )}
      </div>
      <p className="mt-2 text-sm text-muted">{project.tagline}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink/85">
            <span className="mt-1 text-accent">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-surface2 px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
