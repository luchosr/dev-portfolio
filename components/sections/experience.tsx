import { experience } from '@/lib/content';
import { Container } from '../container';
import { SectionLabel, TagList } from '../primitives';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <Container>
        <SectionLabel index="03" label="Experience" />

        <h2 className="display mt-20 text-[clamp(2rem,5vw,3.75rem)]">
          Where I&apos;ve worked.
        </h2>

        <ol className="mt-20 border-t border-border-soft">
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.period}`}
              className="grid gap-6 border-b border-border-soft py-14 md:grid-cols-[12rem_1fr] md:gap-12"
            >
              <p className="label pt-2 text-muted">{role.period}</p>
              <div>
                <h3 className="display text-2xl md:text-3xl">{role.title}</h3>
                <p className="label mt-3 text-accent">{role.company}</p>
                <p className="mt-6 max-w-3xl leading-relaxed text-muted">
                  {role.description}
                </p>
                <div className="mt-8">
                  <TagList tags={role.tags} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
