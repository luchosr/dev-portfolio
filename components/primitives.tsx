import type { ReactNode } from 'react';

/**
 * The numbered rule that opens every section: 03 ——————— EXPERIENCE.
 * The number is real information here — the page reads as a sequence,
 * so the counter earns its place rather than decorating.
 */
export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-6">
      <span className="label text-accent">{index}</span>
      <span aria-hidden className="h-px flex-1 bg-border-soft" />
      <span className="label text-muted">{label}</span>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="label border border-border-soft px-2.5 py-1.5 text-muted">
      {children}
    </li>
  );
}

export function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </ul>
  );
}

/** Big outlined numeral behind the work entries. */
export function GhostNumeral({ value }: { value: string }) {
  return (
    <span
      aria-hidden
      className="display select-none text-[7rem] leading-none text-ghost md:text-[9rem]"
    >
      {value}
    </span>
  );
}
