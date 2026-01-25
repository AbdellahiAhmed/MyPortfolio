# Design Tokens - Azizkhaldi.com Clone

## Typography

### Font Families
- **Display**: 'Righteous', cursive
- **Decorative**: 'Megrim', cursive
- **Body**: System stack (default)

### Font Sizes
- **Hero Headline**: 4rem / 5rem / 6rem (mobile → tablet → desktop)
- **Section Headings**: 3rem / 4rem / 5rem
- **Subsection**: 1.5rem / 2rem / 2.5rem
- **Body Large**: 1.125rem (18px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)
- **Micro**: 0.75rem (12px)

### Letter Spacing
- **Nav Items (spaced)**: 0.3em - 0.5em (creates "H o m e" effect)
- **Headings**: -0.02em (tight)
- **Body**: normal
- **Uppercase UI**: 0.1em

### Line Heights
- **Display**: 1.1
- **Headings**: 1.2
- **Body**: 1.6
- **UI Text**: 1.4

### Font Weights
- **Display**: 400 (Righteous is bold by nature)
- **Body**: 400
- **Bold**: 600

## Colors

### Light Theme (Primary)
- **Background**: #FFFFFF
- **Surface**: #F9FAFB
- **Text Primary**: #000000 / #111827
- **Text Secondary**: #6B7280
- **Text Muted**: #9CA3AF
- **Border**: #E5E7EB
- **Accent**: #10B981 (green, seen in flower icon)
- **Hover**: rgba(0,0,0,0.05)

### Dark Theme
- **Background**: #0F172A
- **Surface**: #1E293B
- **Text Primary**: #FFFFFF
- **Text Secondary**: #94A3B8
- **Text Muted**: #64748B
- **Border**: #334155
- **Accent**: #10B981
- **Hover**: rgba(255,255,255,0.05)

## Layout

### Containers
- **Max Width**: 80rem (1280px)
- **Padding X**: 1rem (mobile) / 1.5rem (tablet) / 2rem (desktop)

### Spacing Scale
- **Section Y**: 6rem (96px) desktop / 4rem mobile
- **Large Gap**: 4rem (64px)
- **Medium Gap**: 2rem (32px)
- **Small Gap**: 1rem (16px)
- **Tiny Gap**: 0.5rem (8px)

### Header
- **Height**: 5rem (80px)
- **Background**: rgba(255,255,255,0.8) with backdrop-blur-xl
- **Border**: 1px solid rgba(0,0,0,0.05)

### Grid
- **Projects**: 1col (mobile) / 2col (tablet) / 3col (desktop)
- **Skills/Services**: 1col / 2col / 4col
- **Gap**: 2rem

## Animations

### Timing
- **Fast**: 0.2s
- **Base**: 0.3s (hover states)
- **Medium**: 0.6s (scroll reveals, opacity transitions)
- **Slow**: 0.7s (hero entrance)
- **Marquee**: 30s linear infinite
- **Wave**: 7s ease-in-out infinite

### Easing
- **Standard**: cubic-bezier(0.4, 0, 0.2, 1)
- **Ease Out**: cubic-bezier(0, 0, 0.2, 1)
- **Ease In Out**: cubic-bezier(0.4, 0, 0.6, 1)

### Scroll Reveals
- **Opacity**: 0 → 1
- **TranslateY**: 30px → 0
- **Duration**: 0.6s ease
- **Stagger Delay**: +0.15s per element

### Hover States
- **Scale**: 1 → 1.05 (buttons)
- **Opacity**: 1 → 0.7 (links)
- **Letter Spacing**: increase +0.05em
- **Underline**: width 0 → 100%

### Counters
- **Start**: 0
- **Duration**: 2s
- **Easing**: ease-out
- **Trigger**: IntersectionObserver at threshold 0.5

## Components

### Navigation
- **Letter Spacing**: 0.4em for "H o m e" style
- **Text Transform**: uppercase
- **Font Size**: 0.875rem
- **Active Indicator**: Underline or opacity change
- **Hover**: Opacity 0.6

### Buttons
- **Primary**: Black bg, white text, rounded-full, px-6 py-3
- **Secondary**: Border 2px, transparent bg, px-6 py-3
- **Hover**: scale-105, shadow-lg
- **Transition**: 0.3s all

### Marquee
- **Speed**: translateX(-50%) over 30s
- **Seamless**: Duplicate content with aria-hidden
- **Font**: Righteous, uppercase, 3xl-6xl
- **Separator**: • or ✦ with mx-8

### Cards (Projects)
- **Border Radius**: 1rem
- **Shadow**: subtle on hover
- **Overlay**: Absolute positioned, opacity 0 → 1 on hover
- **Image**: aspect-ratio 4/3, object-cover
- **Hover**: translateY(-4px), shadow-2xl

### Timeline (Experience)
- **Line**: Vertical, 2px, gray-300
- **Dots**: Animated on scroll, scale + opacity
- **Content**: translateX(0) with fade-in
- **Stagger**: +0.2s per item

### Footer
- **Columns**: 1 (mobile) / 2 / 4 (desktop)
- **Live Clock**: Updates every 1s, format: "HH:MM:SS" or locale time
- **Links**: Letter-spaced, hover opacity
- **Bottom**: Signature + "2025 © Edition" style

## Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Wide**: > 1280px

## Accessibility
- **Focus Ring**: 2px solid, offset 2px
- **Contrast**: WCAG AA minimum
- **Skip Links**: For nav bypass
- **ARIA Labels**: All interactive elements
- **Reduced Motion**: Respect prefers-reduced-motion

## Page-Specific

### Home (/)
1. Hero: Large multi-line headline, "scroll down" indicator
2. Marquee: Infinite scroll with profession titles
3. About: Profile image + story + counters
4. Services: Numbered 01/02/03/04 grid
5. Projects: Card grid with hover overlays
6. Experience: Timeline with animated dots
7. Footer: Multi-column with live clock

### Works (/works)
1. Title + intro
2. Full project grid
3. Same footer

### Project Detail (/project/:slug)
1. Hero: Title + subtitle + "Scroll to Explore"
2. Project image
3. Description + "Live Website" spaced link
4. Tech tags
5. Two-image gallery
6. Role + Responsibilities + Impact sections
7. "Other Projects" scroller
8. Same footer
