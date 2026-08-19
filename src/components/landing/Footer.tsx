import { hero } from "@/content/bio";

export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} {hero.name}
        </p>
        <div className="flex gap-6">
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a href={`mailto:${hero.email}`} className="transition-colors hover:text-accent">
            Email
          </a>
          {hero.linkedin && (
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
