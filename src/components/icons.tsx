// Minimal inline icon set — no external icon package required.
// Every icon takes an optional className so callers can size/color them with Tailwind.

type IconProps = { className?: string };

const base = "h-5 w-5";

export function IconFilm({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4" />
    </svg>
  );
}

export function IconPalette({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.9 1.2-1.7-.3-.6-.1-1.3.5-1.6.4-.2.9-.2 1.3 0 1.9.9 4-.5 4-2.7A8 8 0 0 0 12 3Z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconWaveform({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M3 12h2M7 8v8M11 5v14M15 8v8M19 10v4M21 12h.01" strokeLinecap="round" />
    </svg>
  );
}

export function IconSparkles({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11 2.5 12.6 8l5.4 1.6L12.6 11 11 16.5 9.4 11 4 9.6 9.4 8Z" />
      <path d="M18.5 14 19.3 16.7 22 17.5 19.3 18.3 18.5 21 17.7 18.3 15 17.5 17.7 16.7Z" />
    </svg>
  );
}

export function IconCamera({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

export function IconShare({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M8 11l8-4M8 13l8 4" />
    </svg>
  );
}

export function IconSearch({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconTarget({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function IconScissors({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <path d="M20 5 7.5 12 20 19M7.8 12h-.3" />
    </svg>
  );
}

export function IconRocket({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 15c3-1 5.5-4 5.7-9.7C11.9 5.5 9 8 8 11l4 4Z" />
      <path d="M8 11 5 12.5 6 15M13 16l1.5 3 2.5-1" />
      <circle cx="14" cy="9" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconArrowUpRight({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconUsers({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20c.7-3.4 3.2-5.5 6.5-5.5s5.8 2.1 6.5 5.5" />
      <circle cx="17.5" cy="8.5" r="2.3" />
      <path d="M16 14.7c2.3.5 4 2.3 4.5 5.3" />
    </svg>
  );
}

export function IconStar({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGlobe({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.2-3.4-8.5S9.8 5.8 12 3.5Z" />
    </svg>
  );
}

export function IconCompass({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.5 9.5-1.6 4.4-4.4 1.6 1.6-4.4Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMapPin({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function IconQuote({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 11c0-3.6 2.1-6.2 5.6-7l.7 1.9C7.2 6.5 6 8 6 9.6c.3-.1.6-.1.9-.1 1.7 0 2.9 1.2 2.9 2.9S8.6 15.3 6.9 15.3C4.7 15.3 3 13.4 3 11Zm10.5 0c0-3.6 2.1-6.2 5.6-7l.7 1.9c-2.1.7-3.3 2.2-3.3 3.8.3-.1.6-.1.9-.1 1.7 0 2.9 1.2 2.9 2.9s-1.2 2.9-2.9 2.9c-2.2 0-3.9-1.9-3.9-4.4Z" />
    </svg>
  );
}

export function IconDot({ className = "h-2 w-2" }: IconProps) {
  return (
    <svg viewBox="0 0 8 8" fill="currentColor" className={className}>
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}

export function IconLayers({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="m12 3 8.5 4.6L12 12.2 3.5 7.6Z" />
      <path d="m3.5 12 8.5 4.6L20.5 12" />
      <path d="m3.5 16.4 8.5 4.6 8.5-4.6" />
    </svg>
  );
}
