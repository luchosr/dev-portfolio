import { site } from '@/lib/content';
import { ThemeToggle } from './theme-toggle';
import { Container } from './container';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="display text-base font-semibold tracking-[0.2em]"
        >
          {site.monogram}
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="label text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {site.available && (
            <p className="label hidden items-center gap-2 text-accent sm:flex">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              {site.availabilityLabel}
            </p>
          )}
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
