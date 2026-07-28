# luciano-ramello.dev

Personal portfolio. Next.js App Router + Tailwind CSS v4.

## Getting started

These files are the source, not a full scaffold — generate the project shell first,
then drop them in:

```bash
pnpm dlx create-next-app@latest portfolio --ts --tailwind --app --eslint --src-dir=false --import-alias "@/*"
cd portfolio
# copy app/, components/ and lib/ over the generated ones
pnpm  dev
```

Everything here assumes **Tailwind v4** (CSS-first config, no `tailwind.config.js`).
If `create-next-app` gives you v3, either upgrade or move the `@theme inline` block
into a config file — the CSS variables themselves work either way.

## How it's organised

```
app/
  globals.css      → both palettes, base styles, .label and .display utilities
  layout.tsx       → next/font (Oxanium + DM Sans), metadata, anti-flash theme script
  page.tsx         → section order
components/
  container.tsx    → shared max-width and gutters
  primitives.tsx   → SectionLabel, TagList, GhostNumeral
  site-header.tsx  → fixed nav, availability badge, toggle
  site-footer.tsx  → copyright, built-with, toggle with palette name
  theme-toggle.tsx → the only client component on the page
  sections/        → one file per numbered section
lib/
  content.ts       → every string on the site
```

Nothing renders hardcoded copy. To change text, edit `lib/content.ts`.

## Colour

Two schemes, nothing in between:

| Token       | Dark — Dracula       | Light — Solarized |
| ----------- | -------------------- | ----------------- |
| `--bg`      | `#282a36` background | `#fdf6e3` base3   |
| `--bg-deep` | `#21222c`            | `#eee8d5` base2   |
| `--fg`      | `#f8f8f2` foreground | `#073642` base02  |
| `--muted`   | `#6272a4` comment    | `#657b83` base00  |
| `--accent`  | `#bd93f9` purple     | `#6c71c4` violet  |
| `--glow`    | `#50fa7b` green      | `#2aa198` cyan    |

Dracula's comment blue-grey doing duty as body text is what gives the dark mode its
character — it's why the paragraphs read lavender rather than plain grey. Solarized's
base00 plays the same role in the light theme.

Dark is the default; the theme script respects `prefers-color-scheme: light` on a
first visit and `localStorage` after that.

## Typography

Oxanium (display) and DM Sans (body), both via `next/font/google`, self-hosted at
build time. Oxanium also covers the monospace-looking labels via the `.label`
utility: uppercase, `0.22em` tracking, tabular figures.

## Still open

- Optional live/repo link for NomadHome in `lib/content.ts`.
- Mobile nav: links are hidden below `md`. Add a menu if you want them back.
