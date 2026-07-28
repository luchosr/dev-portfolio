# CLAUDE.md

Context and guardrails for agent-assisted work on this repo.

## What this is

Personal portfolio for Luciano Ramello — Senior Frontend Developer, Madrid.
Single page, six numbered sections, two colour schemes. Next.js App Router,
TypeScript, Tailwind CSS v4.

The visual design already exists (Figma). The job is faithful implementation and
refinement, **not** redesign. If a change would alter the visual direction,
propose it first instead of doing it.

## Commands

```bash
pnpm  dev      # local dev server
pnpm build    # must pass before any change is considered done
pnpm  lint
```

## Invariants — do not break these

1. **Two palettes only.** Dark is Dracula, light is Solarized Light. Every colour
   comes from a CSS variable defined in `app/globals.css`. No hex values, no
   `rgb()`, no Tailwind palette classes (`text-slate-400`, `bg-zinc-900`…)
   anywhere in `components/` or `app/page.tsx`. If a shade is missing, add a
   token to both themes rather than inlining a one-off.
2. **All copy lives in `lib/content.ts`.** Components render data, never
   hardcoded strings. New text means a new field, typed.
3. **One client component.** Only `components/theme-toggle.tsx` carries
   `"use client"`. Adding another requires a stated reason.
4. **Two typefaces.** Oxanium (display, plus the `.label` utility standing in for
   monospace) and DM Sans (body). Loaded via `next/font/google` in
   `app/layout.tsx`. No new font families, no external font CDNs.
5. **Theme switching must not flash.** The inline script in `app/layout.tsx` runs
   before paint. Don't move theme resolution into React state.
6. **Accessibility floor.** Semantic landmarks, one `h1`, visible
   `:focus-visible`, `prefers-reduced-motion` respected, contrast checked in
   _both_ themes — Solarized Light is the easier one to get wrong.

## Structure

```
app/globals.css      palettes, base styles, .label and .display utilities
app/layout.tsx       fonts, metadata, anti-flash theme script
app/page.tsx         section order only
components/          container, primitives, header, footer, toggle
components/sections/ one file per numbered section
lib/content.ts       every string on the site
```

## Conventions

- Server Components by default.
- Tailwind utility classes in JSX; shared patterns go in `components/primitives.tsx`
  or as a `@utility` in `globals.css`, not into a `clsx` soup.
- Section spacing is `py-24` with `scroll-mt-24` for anchor offset. Change it in
  one place if it changes at all.
- British/neutral English in user-facing copy, consistent with the existing text.

## Definition of done

A change is finished when `npm run build` passes, both themes render correctly at
375px and 1440px, keyboard focus is visible through the whole page, and no new
colour or string escaped its designated file.

## Open items

- Optional live/repo link for the NomadHome project card in `lib/content.ts`.
- No mobile nav: header links are hidden below `md`. Design pending.
