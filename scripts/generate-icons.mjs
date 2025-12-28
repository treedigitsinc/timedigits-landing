import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const designDir = join(__dirname, '..', 'design');
const publicDir = join(__dirname, '..', 'public');

// Ensure directories exist
mkdirSync(designDir, { recursive: true });
mkdirSync(publicDir, { recursive: true });

// Icon SVG content (32x32 base)
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="13" stroke="#27272A" stroke-width="2.5" fill="none"/>
  <line x1="16" y1="16" x2="16" y2="8" stroke="#14B8A6" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="16" y1="16" x2="22" y2="12" stroke="#14B8A6" stroke-width="2.5" stroke-linecap="round"/>
</svg>`;

// Apple touch icon SVG (with background)
const appleTouchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" fill="none">
  <rect width="180" height="180" rx="40" fill="#18181B"/>
  <circle cx="90" cy="90" r="55" stroke="#FFFFFF" stroke-width="6" fill="none"/>
  <line x1="90" y1="90" x2="90" y2="55" stroke="#14B8A6" stroke-width="6" stroke-linecap="round"/>
  <line x1="90" y1="90" x2="115" y2="72" stroke="#14B8A6" stroke-width="6" stroke-linecap="round"/>
</svg>`;

// Icon sizes to generate
const iconSizes = [16, 32, 48, 64, 96, 128, 192, 256, 512];

async function generateIcons() {
  console.log('Generating icon PNGs...');

  // Generate standard icon sizes
  for (const size of iconSizes) {
    const buffer = Buffer.from(iconSvg);
    await sharp(buffer)
      .resize(size, size)
      .png()
      .toFile(join(designDir, `icon-${size}.png`));
    console.log(`  Created icon-${size}.png`);
  }

  // Generate favicon.ico sizes (16, 32, 48)
  const favicon32 = await sharp(Buffer.from(iconSvg))
    .resize(32, 32)
    .png()
    .toBuffer();
  writeFileSync(join(publicDir, 'favicon-32x32.png'), favicon32);
  console.log('  Created favicon-32x32.png');

  const favicon16 = await sharp(Buffer.from(iconSvg))
    .resize(16, 16)
    .png()
    .toBuffer();
  writeFileSync(join(publicDir, 'favicon-16x16.png'), favicon16);
  console.log('  Created favicon-16x16.png');

  // Generate Apple Touch Icon (180x180)
  const appleTouch = await sharp(Buffer.from(appleTouchSvg))
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('  Created apple-touch-icon.png');

  // Generate Android Chrome icons (192, 512)
  const android192 = await sharp(Buffer.from(appleTouchSvg))
    .resize(192, 192)
    .png()
    .toFile(join(publicDir, 'android-chrome-192x192.png'));
  console.log('  Created android-chrome-192x192.png');

  const android512 = await sharp(Buffer.from(appleTouchSvg))
    .resize(512, 512)
    .png()
    .toFile(join(publicDir, 'android-chrome-512x512.png'));
  console.log('  Created android-chrome-512x512.png');

  // Copy apple touch icon to design folder
  await sharp(Buffer.from(appleTouchSvg))
    .resize(180, 180)
    .png()
    .toFile(join(designDir, 'apple-touch-icon-180.png'));
  console.log('  Created design/apple-touch-icon-180.png');

  console.log('\\nIcon generation complete!');
}

generateIcons().catch(console.error);
