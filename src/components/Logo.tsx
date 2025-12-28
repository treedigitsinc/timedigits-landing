interface LogoProps {
  className?: string;
  size?: number;
  variant?: "dark" | "light"; // dark = dark ring for light bg, light = white ring for dark bg
}

/**
 * timedigits Logo Component
 *
 * Brand Colors:
 * - Ring (dark variant): #27272A (zinc-800)
 * - Ring (light variant): #FFFFFF (white)
 * - Clock hands: #14B8A6 (teal-500)
 *
 * Based on official brand guide from /timedigits/brand/
 */
export function Logo({ className = "", size = 32, variant = "dark" }: LogoProps) {
  const ringColor = variant === "dark" ? "#27272A" : "#FFFFFF";
  const handColor = "#14B8A6"; // Teal - always consistent

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-label="timedigits logo"
    >
      {/* Clock face ring */}
      <circle
        cx="16"
        cy="16"
        r="13"
        fill="none"
        stroke={ringColor}
        strokeWidth="2.5"
      />
      {/* Hour hand - pointing up (12 o'clock) */}
      <line
        x1="16"
        y1="16"
        x2="16"
        y2="8"
        stroke={handColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Minute hand - pointing to ~2 o'clock position */}
      <line
        x1="16"
        y1="16"
        x2="22"
        y2="12"
        stroke={handColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Full Logo with Wordmark
 */
interface FullLogoProps {
  className?: string;
  height?: number;
  variant?: "dark" | "light";
}

export function FullLogo({ className = "", height = 40, variant = "dark" }: FullLogoProps) {
  const ringColor = variant === "dark" ? "#27272A" : "#FFFFFF";
  const textColor = variant === "dark" ? "#27272A" : "#FFFFFF";
  const handColor = "#14B8A6";

  // Width based on aspect ratio of full logo (roughly 4:1)
  const width = height * 4.5;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 40"
      width={width}
      height={height}
      className={className}
      aria-label="timedigits"
    >
      {/* Clock icon */}
      <g transform="translate(2, 2)">
        <circle cx="18" cy="18" r="15" stroke={ringColor} strokeWidth="2.5" fill="none"/>
        <line x1="18" y1="18" x2="18" y2="8" stroke={handColor} strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="18" y1="18" x2="26" y2="12" stroke={handColor} strokeWidth="2.5" strokeLinecap="round"/>
      </g>
      {/* Wordmark */}
      <text
        x="44"
        y="27"
        fontFamily="Satoshi, system-ui, -apple-system, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill={textColor}
      >
        timedigits
      </text>
    </svg>
  );
}
