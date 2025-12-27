interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      {/* Outer ring */}
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="url(#logo-gradient)"
        strokeWidth="2.5"
      />
      {/* Hour hand */}
      <line
        x1="16"
        y1="16"
        x2="16"
        y2="8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Minute hand */}
      <line
        x1="16"
        y1="16"
        x2="22"
        y2="16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}
