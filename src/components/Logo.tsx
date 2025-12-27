interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className = '', size = 32 }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
    >
      {/* Clock circle */}
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Hour hand (pointing to ~10) */}
      <line
        x1="16"
        y1="16"
        x2="11"
        y2="10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Minute hand (pointing to ~2) */}
      <line
        x1="16"
        y1="16"
        x2="22"
        y2="8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  )
}
