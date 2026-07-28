import { contact } from '@/lib/content';
import { Container } from '../container';
import { SectionLabel } from '../primitives';

const icons: Record<string, React.ReactNode> = {
  email: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.95-3.07-1.95 0-2.25 1.46-2.25 2.97V21H9z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  ),
};

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <Container>
        <SectionLabel index="06" label="Contact" />

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <h2 className="display text-[clamp(2.5rem,7vw,5.5rem)]">
            {contact.title.map((word, i) => (
              <span
                key={word}
                className={`block ${i === contact.highlightIndex ? 'text-accent' : ''}`}
              >
                {word}
              </span>
            ))}
          </h2>

          <div>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              {contact.intro}
            </p>

            <ul className="mt-16 border-t border-border-soft">
              {contact.links.map((link) => (
                <li key={link.type} className="border-b border-border-soft">
                  <a
                    href={link.href}
                    target={link.type === 'email' ? undefined : '_blank'}
                    rel={link.type === 'email' ? undefined : 'noreferrer'}
                    className="group flex items-center gap-4 py-6 transition-colors hover:text-accent"
                  >
                    <span aria-hidden className="block h-5 w-5 text-accent">
                      {icons[link.type]}
                    </span>
                    <span className="label">{link.label}</span>
                    <span
                      aria-hidden
                      className="ml-auto translate-x-0 text-muted opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
