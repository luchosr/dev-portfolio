import { hero, site, stats } from '@/lib/content';
import { Container } from '../container';
import { SectionLabel } from '../primitives';

export function Hero() {
  return (
    <section id="top" className="pt-32 pb-16 md:pt-44">
      <Container>
        <SectionLabel index="01" label={hero.eyebrow} />

        <h1 className="display mt-16 text-[clamp(3rem,11vw,10rem)]">
          <span className="block">{site.name.split(' ')[0]}</span>
          <span className="block">
            {site.name.split(' ').slice(1).join(' ')}
            <span className="label align-middle text-accent text-[clamp(1rem,3vw,2.75rem)] tracking-[0.06em]">
              {site.domain}
            </span>
          </span>
        </h1>

        <hr className="mt-16 border-border-soft" />

        <div className="grid gap-10 py-12 md:grid-cols-2 md:items-center">
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {hero.intro}
          </p>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href={hero.primaryCta.href}
              className="label flex items-center gap-2 bg-accent px-7 py-4 text-on-accent transition-opacity hover:opacity-85"
            >
              {hero.primaryCta.label}
              <span aria-hidden>↗</span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="label flex items-center gap-2 border border-border-soft px-7 py-4 text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta.label}
              <span aria-hidden>⌄</span>
            </a>
          </div>
        </div>

        <hr className="border-border-soft" />

        <dl className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-2">
              <dt className="label text-muted">{stat.label}</dt>
              <dd className="display text-2xl font-normal md:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
