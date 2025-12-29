# timedigits Brand Guidelines

**Version:** 1.0
**Last Updated:** December 27, 2025
**Source:** Official brand guide from `/timedigits/brand/timedigits-brand-guide.png`

---

## Overview

This document defines the visual identity and brand standards for **timedigits**, a simple time tracking application. The brand embodies honesty, minimalism, and a refreshing approach to time tracking.

**Tagline:** "Simple time tracking that works."

---

## Logo

### Logo Concept

The timedigits logo is a minimal clock icon representing the core function of the product. It features:

- A circular clock face (ring outline, no fill)
- Two clock hands in teal color
- Hour hand pointing to 12 o'clock (straight up)
- Minute hand pointing to approximately 2 o'clock position

### Logo Anatomy

```
       12
        │
    ┌───┼───┐
    │   │  /│
  9 │   ● / │ 3
    │      │
    └───────┘
        6
```

- **Clock ring:** Circular outline, no fill
- **Hour hand:** Vertical line from center to top
- **Minute hand:** Angled line from center toward upper-right

### Logo Variants

| Variant | Ring Color | Hand Color | Text Color | Use Case |
|---------|------------|------------|------------|----------|
| **Dark** | `#27272A` | `#14B8A6` | `#27272A` | Light backgrounds |
| **Light** | `#FFFFFF` | `#14B8A6` | `#FFFFFF` | Dark backgrounds |

### Logo Files

Located in `/design/` and `/public/`:

**SVG (Vector):**
- `logo-icon.svg` - Icon only (dark variant)
- `logo-icon-light.svg` - Icon only (light variant)
- `logo-full-dark.svg` - Icon + wordmark (dark variant)
- `logo-full-light.svg` - Icon + wordmark (light variant)
- `favicon.svg` - Browser favicon (32x32)

**PNG (Raster):**
- `icon-16.png` through `icon-512.png` - Various sizes
- `favicon-16x16.png` - Small favicon
- `favicon-32x32.png` - Standard favicon
- `apple-touch-icon.png` - iOS home screen (180x180)
- `android-chrome-192x192.png` - Android small
- `android-chrome-512x512.png` - Android large

### Logo Minimum Sizes

| Format | Minimum Size | Notes |
|--------|--------------|-------|
| Icon only | 16x16px | Below this, details become unclear |
| Full logo | 120px wide | Maintains wordmark legibility |
| Print | 0.5 inches | Minimum for clear reproduction |

### Logo Clear Space

Maintain clear space equal to the radius of the clock ring on all sides:

```
    ┌─────────────────┐
    │                 │
    │   ┌─────────┐   │
    │   │  LOGO   │   │
    │   └─────────┘   │
    │                 │
    └─────────────────┘
         ↑
    Clear space = ring radius
```

### Logo Don'ts

- Do not rotate the logo
- Do not change the clock hand positions
- Do not add shadows or effects
- Do not stretch or distort
- Do not use colors outside the brand palette
- Do not place on busy backgrounds without sufficient contrast

---

## Colors

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Zinc-900** | `#18181B` | 24, 24, 27 | Primary dark, backgrounds |
| **Zinc-800** | `#27272A` | 39, 39, 42 | Logo ring (dark variant), text |
| **Teal-500** | `#14B8A6` | 20, 184, 166 | Accent, clock hands, CTAs |
| **White** | `#FFFFFF` | 255, 255, 255 | Light text, backgrounds |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Zinc-100** | `#F4F4F5` | 244, 244, 245 | Light backgrounds |
| **Zinc-400** | `#A1A1AA` | 161, 161, 170 | Secondary text |
| **Teal-600** | `#0D9488` | 13, 148, 136 | Hover states |
| **Teal-400** | `#2DD4BF` | 45, 212, 191 | Highlights |

### Color Usage

```
┌──────────────────────────────────────────┐
│  LIGHT MODE                              │
│  Background: #FFFFFF or #F4F4F5          │
│  Text: #18181B or #27272A                │
│  Accents: #14B8A6                        │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  DARK MODE                               │
│  Background: #18181B                     │
│  Text: #FFFFFF or #F4F4F5                │
│  Accents: #14B8A6                        │
└──────────────────────────────────────────┘
```

### Teal Accent Guidelines

The teal color (`#14B8A6`) should be used sparingly for:
- Clock hands in the logo
- Primary call-to-action buttons
- Interactive elements (links, hover states)
- Success states and confirmations
- Timer display in the app

---

## Typography

### Font Stack

| Usage | Primary Font | Fallbacks |
|-------|--------------|-----------|
| **Headings** | Satoshi | system-ui, -apple-system, sans-serif |
| **Body** | Satoshi | system-ui, -apple-system, sans-serif |
| **Monospace** | JetBrains Mono | Monaco, Consolas, monospace |

### Font Weights

- **Regular (400):** Body text, descriptions
- **Medium (500):** Subheadings, emphasis
- **Bold (700):** Headlines, CTAs

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 48-64px | 700 | 1.1 |
| H2 | 36-48px | 700 | 1.2 |
| H3 | 24-32px | 600 | 1.3 |
| Body | 16-18px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |
| Caption | 12px | 500 | 1.4 |

### Timer Display

For time displays (00:00:00), always use:
- Font: JetBrains Mono
- Weight: 400 or 500
- Proportional sizing for visual impact

---

## Iconography

### Icon Style

- Stroke-based (outline) icons preferred
- 2px stroke weight at 24px size
- Rounded line caps and joins
- Consistent with Phosphor Icons or similar

### Clock Icon Specifications

```svg
<svg viewBox="0 0 32 32">
  <!-- Ring: 2.5px stroke, no fill -->
  <circle cx="16" cy="16" r="13" stroke="#27272A" stroke-width="2.5" fill="none"/>
  <!-- Hour hand: vertical -->
  <line x1="16" y1="16" x2="16" y2="8" stroke="#14B8A6" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Minute hand: angled to ~2 o'clock -->
  <line x1="16" y1="16" x2="22" y2="12" stroke="#14B8A6" stroke-width="2.5" stroke-linecap="round"/>
</svg>
```

---

## Favicon & App Icons

### Browser Favicons

| File | Size | Format | Notes |
|------|------|--------|-------|
| `favicon.svg` | Scalable | SVG | Primary, modern browsers |
| `favicon-16x16.png` | 16x16 | PNG | Legacy small |
| `favicon-32x32.png` | 32x32 | PNG | Legacy standard |

### Mobile App Icons

| File | Size | Platform |
|------|------|----------|
| `apple-touch-icon.png` | 180x180 | iOS |
| `android-chrome-192x192.png` | 192x192 | Android |
| `android-chrome-512x512.png` | 512x512 | Android (hi-res) |

### App Icon Design

Mobile app icons include a dark background (`#18181B`) with:
- Rounded corners (iOS: automatic, Android: included)
- White clock ring for contrast
- Teal clock hands

---

## Implementation

### HTML Head Tags

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#14B8A6" />
```

### CSS Variables

```css
:root {
  /* Brand Colors */
  --color-primary: #18181B;
  --color-secondary: #27272A;
  --color-accent: #14B8A6;
  --color-accent-hover: #0D9488;
  --color-background: #FFFFFF;
  --color-background-alt: #F4F4F5;
  --color-text: #18181B;
  --color-text-muted: #A1A1AA;

  /* Typography */
  --font-sans: 'Satoshi', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', Monaco, Consolas, monospace;
}
```

### React Logo Component

```tsx
import { Logo, FullLogo } from './components/Logo';

// Icon only
<Logo size={32} variant="dark" />

// Full logo with wordmark
<FullLogo height={40} variant="light" />
```

---

## Brand Voice

### Tone

- **Honest:** No marketing fluff, straight to the point
- **Minimal:** Say more with less
- **Refreshing:** Anti-corporate, human

### Key Messages

1. "Track time. That's it."
2. "Free for you. $1 for your team."
3. "No tiers, no tricks, no enterprise pricing."
4. "90% cheaper than Toggl, Harvest, Timely."

### Writing Style

- Use sentence case for headings
- Avoid jargon and buzzwords
- Keep sentences short and direct
- Use numbers over words ($1 not "one dollar")

---

## File Structure

```
timedigits-landing/
├── design/
│   ├── timedigits-brand-guide.png  # Original brand reference
│   ├── logo-icon.svg               # Icon only (dark)
│   ├── logo-icon-light.svg         # Icon only (light)
│   ├── logo-full-dark.svg          # Full logo (dark)
│   ├── logo-full-light.svg         # Full logo (light)
│   ├── favicon.svg                 # 32x32 favicon
│   ├── favicon-16.svg              # 16x16 favicon
│   ├── apple-touch-icon.svg        # 180x180 app icon
│   ├── icon-{16-512}.png           # Various PNG sizes
│   └── apple-touch-icon-180.png    # iOS icon
├── public/
│   ├── favicon.svg                 # Browser favicon
│   ├── favicon-16x16.png           # PNG fallback
│   ├── favicon-32x32.png           # PNG fallback
│   ├── apple-touch-icon.png        # iOS
│   ├── android-chrome-192x192.png  # Android
│   ├── android-chrome-512x512.png  # Android hi-res
│   └── site.webmanifest            # PWA manifest
└── src/
    └── components/
        └── Logo.tsx                # React logo components
```

---

## Contact

For brand inquiries or asset requests, refer to the original brand guide at:
`/timedigits/brand/timedigits-brand-guide.png`
