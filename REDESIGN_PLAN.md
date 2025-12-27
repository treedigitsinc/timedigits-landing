# TimeDigits Landing Page Complete Redesign Plan

## Problems Identified

1. **H1 Color Inconsistency** - "Track time." vs "That's it." has confusing split colors
2. **Poor Text Contrast** - Gray text on white fails accessibility standards
3. **Scroll-triggered animations broke content** - Sections stayed invisible
4. **Badge overlapping text** - "Most Popular" positioned poorly
5. **Inconsistent spacing** - Sections feel disjointed
6. **No visual hierarchy** - Features and pricing lack distinction
7. **Poor mobile experience** - Content not optimized for narrow viewports

## Design System

### Typography
- **Font**: Inter (clean, geometric, professional)
- **Display**: 60px, font-bold, tracking-tight
- **H2**: 36px, font-bold, tracking-tight
- **H3**: 20px, font-semibold
- **Body Large**: 18px, font-normal
- **Body**: 16px, font-normal
- **Caption**: 14px, font-medium

### Color Palette (Warm Neutrals)
- **Background**: #FAFAF9 (neutral-50)
- **Card Background**: #FFFFFF
- **Primary Text**: #1C1917 (neutral-900)
- **Secondary Text**: #57534E (neutral-600)
- **Muted Text**: #78716C (neutral-500)
- **Borders**: #E7E5E4 (neutral-200)
- **Primary Button**: #1C1917 (neutral-900)
- **Accent**: #0EA5E9 (sky-500) - sparingly

### Spacing Scale
- **Section Padding**: py-20 md:py-28 lg:py-32
- **Container**: max-w-6xl mx-auto px-6
- **Card Padding**: p-8
- **Grid Gap**: gap-8
- **Section Heading Margin**: mb-16

### Animation Strategy
- **NO scroll-triggered animations** (caused visibility bugs)
- **Simple CSS transitions on hover** only
- **Entrance animations**: CSS-only fade-in on page load
- **Hover states**: translate-y-[-2px] + shadow increase

## Component Structure

```
src/
├── App.tsx                 # Main app with all sections
├── index.css               # Styles with animation utilities
└── components/
    ├── Header.tsx          # Sticky nav with logo + CTA
    ├── Hero.tsx            # Main headline + timer preview
    ├── Features.tsx        # 6-feature grid
    ├── HowItWorks.tsx      # 3-step process
    ├── Pricing.tsx         # 2 pricing cards + comparison
    ├── CTA.tsx             # Final call to action
    └── Footer.tsx          # Minimal footer
```

## Section Specifications

### Header
- Sticky, bg-white/90 backdrop-blur
- Logo left, nav center, CTA right
- Height: h-16

### Hero
- Centered layout
- Large headline: "Track time. That's it." (single color)
- Subtitle with $1/user highlight
- Two CTAs: primary dark, secondary outline
- Timer preview below

### Features
- Section heading centered
- 3x2 grid of cards
- Each card: icon + title + description
- Subtle hover lift effect

### How It Works
- 3 steps horizontal on desktop, vertical on mobile
- Numbered circles with connecting lines
- Simple text descriptions

### Pricing
- 2 cards side by side
- Team card highlighted with border + badge INSIDE card
- Full-width CTAs at card bottom
- Competitor comparison below as simple table

### CTA
- Dark background (neutral-900)
- White text, centered
- Single prominent button

### Footer
- Minimal, centered
- Logo + copyright only
