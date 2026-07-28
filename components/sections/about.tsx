import { about } from '@/lib/content';
import { Container } from '../container';
import { SectionLabel } from '../primitives';

const meta = [
  { label: 'Location', value: about.meta.location },
  { label: 'Currently', value: about.meta.currently },
  { label: 'Approach', value: about.meta.approach },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <Container>
        <SectionLabel index="02" label="About" />

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <h2 className="display text-[clamp(2rem,5vw,3.75rem)]">
              {about.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <dl className="space-y-8 border-t border-border-soft pt-8">
            {meta.map((item) => (
              <div
                key={item.label}
                className="border-b border-border-soft pb-8"
              >
                <dt className="label text-accent">{item.label}</dt>
                <dd className="mt-4 leading-relaxed">{item.value}</dd>
              </div>
            ))}
            <div>
              <dt className="label text-accent">Status</dt>
              <dd className="label mt-4 flex items-center gap-2 text-accent">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                {about.meta.status}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
