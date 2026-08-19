import Image from "next/image";
import { hero } from "@/content/bio";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 pt-20 pb-16 md:flex-row md:items-start md:justify-between md:pt-28">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-accent">caina.pinel.com.br</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {hero.name}
        </h1>
        <p className="mt-2 text-lg text-muted">{hero.title}</p>
        <p className="mt-6 leading-relaxed text-ink/90">{hero.bio}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-edge bg-surface px-4 py-2 text-sm transition-colors hover:border-accent/60 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={`mailto:${hero.email}`}
            className="rounded-lg border border-edge bg-surface px-4 py-2 text-sm transition-colors hover:border-accent/60 hover:text-accent"
          >
            {hero.email}
          </a>
          {hero.linkedin && (
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-edge bg-surface px-4 py-2 text-sm transition-colors hover:border-accent/60 hover:text-accent"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src={hero.photo}
          alt={`Foto de ${hero.name}`}
          width={180}
          height={180}
          priority
          className="rounded-2xl border border-edge object-cover shadow-lg shadow-black/40"
        />
      </div>
    </section>
  );
}
