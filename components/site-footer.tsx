import { footer } from '@/lib/content';
import { Container } from './container';
import { ThemeToggle } from './theme-toggle';

export function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-bg-deep py-10">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-muted">{footer.copyright}</p>
        <div className="flex items-center gap-6">
          <p className="label text-muted">{footer.builtWith.join(' · ')}</p>
          {/* Same control as the header, but here it names the palette it switches to. */}
          <ThemeToggle withLabel />
        </div>
      </Container>
    </footer>
  );
}
