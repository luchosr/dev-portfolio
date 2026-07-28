import { projects } from '@/lib/content';
import { Container } from '../container';
import { GhostNumeral, SectionLabel, TagList } from '../primitives';

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-24">
      <Container>
        <SectionLabel index="05" label="Selected work" />

        <h2 className="display mt-20 text-[clamp(2rem,5vw,3.75rem)]">
          Things I&apos;ve built.
        </h2>

        <ol className="mt-20 border-t border-border-soft">
          {projects.map((project) => (
            <li
              key={project.title}
              className="grid gap-6 border-b border-border-soft py-16 md:grid-cols-[12rem_1fr] md:gap-12"
            >
              <GhostNumeral value={project.index} />
              <div>
                <h3 className="display text-2xl md:text-3xl">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {project.title} <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="label mt-3 text-muted">{project.year}</p>
                <p className="mt-6 max-w-3xl leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-8">
                  <TagList tags={project.tags} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
