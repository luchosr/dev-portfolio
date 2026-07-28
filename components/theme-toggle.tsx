'use client';

import { useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

function subscribe(callback: () => void) {
  window.addEventListener('theme-change', callback);
  return () => window.removeEventListener('theme-change', callback);
}

/** Reads whatever the pre-paint script already decided. */
function getSnapshot(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'light'
    ? 'light'
    : 'dark';
}

function getServerSnapshot(): Theme {
  return 'dark';
}

export function ThemeToggle({ withLabel = false }: { withLabel?: boolean }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage blocked — theme still applies for this session */
    }
    window.dispatchEvent(new Event('theme-change'));
  }

  // The scheme name is the label: Dracula in the dark, Solarized in the light.
  const schemeName = theme === 'dark' ? 'Dracula' : 'Solarized';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'Solarized light' : 'Dracula dark'} theme`}
      className="group flex items-center gap-2 border border-border-soft px-2.5 py-2 text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <span aria-hidden className="block h-4 w-4">
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </span>
      {withLabel && <span className="label">{schemeName}</span>}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}
