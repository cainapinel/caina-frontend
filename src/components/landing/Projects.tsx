import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Projetos</h2>
      <p className="mt-2 text-sm text-muted">
        Uma amostra do que construo e mantenho.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
