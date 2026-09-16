import type { Metadata } from 'next';
import { Oxanium, DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { site, contact } from '@/lib/content';
import './globals.css';

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-oxanium',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Senior Frontend Developer`,
  description:
    'Senior Frontend Developer in Madrid. React, TypeScript and Next.js, moving toward fullstack with Node.js and Prisma. Banking and aviation background.',
  keywords: [
    'Luciano Ramello',
    'Frontend Developer',
    'Senior Frontend Developer',
    'React Developer',
    'TypeScript Developer',
    'Next.js Developer',
    'Fullstack Developer',
    'Madrid',
    'Remote Frontend Developer Europe',
  ],
  openGraph: {
    title: `${site.name} — Senior Frontend Developer`,
    description:
      'React, TypeScript and Next.js. Banking and aviation background. Remote across Europe.',
    url: site.url,
    siteName: site.name,
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: site.url },
};

/**
 * Runs before paint so the page never flashes the wrong palette.
 * Dark (Dracula) is the default; Solarized Light is opt-in.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${oxanium.variable} ${dmSans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: site.name,
              url: site.url,
              jobTitle: 'Senior Frontend Developer',
              address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
              sameAs: contact.links
                .filter((link) => link.type !== 'email')
                .map((link) => link.href),
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
