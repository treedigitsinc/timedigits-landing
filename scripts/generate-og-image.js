import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// SVG template for OG image (1200x630)
const svgImage = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#09090B;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#18181B;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>

  <!-- Subtle grid pattern -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#27272A" stroke-width="0.5"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.3"/>

  <!-- Logo clock icon -->
  <g transform="translate(540, 160)">
    <circle cx="60" cy="60" r="52" stroke="#FFFFFF" stroke-width="6" fill="none"/>
    <line x1="60" y1="60" x2="60" y2="28" stroke="#14B8A6" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="60" x2="86" y2="44" stroke="#14B8A6" stroke-width="6" stroke-linecap="round"/>
  </g>

  <!-- Brand name -->
  <text x="600" y="340" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="#FFFFFF">timedigits</text>

  <!-- Tagline -->
  <text x="600" y="400" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="700" fill="#14B8A6">The cheapest time tracker you'll find.</text>

  <!-- Value props -->
  <g transform="translate(600, 480)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="24">
    <text fill="#FFFFFF">Free forever for you</text>
    <text x="0" y="40" fill="#71717A">•</text>
    <text x="0" y="80" fill="#FFFFFF">$1/user for your team</text>
  </g>

  <!-- Teal accent line at bottom -->
  <rect x="0" y="620" width="1200" height="10" fill="#14B8A6"/>
</svg>
`;

async function generateOgImage() {
  const outputPath = join(__dirname, '..', 'public', 'og-image.png');

  await sharp(Buffer.from(svgImage))
    .png()
    .toFile(outputPath);

  console.log(`OG image generated: ${outputPath}`);
}

generateOgImage().catch(console.error);
