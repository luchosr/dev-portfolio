import { stack } from '@/lib/content';
import { Container } from '../container';
import { SectionLabel } from '../primitives';

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 bg-bg-deep py-24">
      <Container>
        <SectionLabel index="04" label="Stack" />

        <h2 className="display mt-20 text-[clamp(2rem,5vw,3.75rem)]">
          Tools of the trade.
        </h2>

        <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-10">
          {stack.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-4">
                <h3 className="label text-accent">{group.label}</h3>
                <span aria-hidden className="h-px flex-1 bg-border-soft" />
              </div>
              <ul className="mt-8 space-y-4">
                {group.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 text-lg">
                    <span aria-hidden className="text-muted">
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
