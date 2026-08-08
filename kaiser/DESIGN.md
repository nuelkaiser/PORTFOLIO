# Design System — Majekodunmi Immanuel Portfolio

## Mode

Brand / editorial single-page portfolio. Parellada-inspired: oversized display type, hairline structure, hover media reveals. No cards in hero. No stat strips.

## Color

| Token | Value | Use |
|-------|-------|-----|
| `--background` | `#eef1f4` | Cool paper field |
| `--foreground` | `#12151a` | Ink |
| `--muted` | `#5c6570` | Secondary text |
| `--accent` | `#1a3a4a` | Progress, emphasis |
| `--accent-soft` | `#2d5a6b` | Italic name, hover titles |
| `--border` | ink @ 12% | Hairlines |

Atmosphere via soft radial washes + light grain. No purple. No flat white-only.

## Typography

- **Display:** Instrument Serif — hero name, section titles, project titles, contact values
- **Body / UI:** Manrope — nav, body, labels
- Tracking: tight on display (−0.03em); wide uppercase micro-labels (~0.16–0.2em)

## Layout

- Gutter: `clamp(1.25rem, 4vw, 3.5rem)`
- Section pad: `clamp(4.5rem, 12vw, 9rem)`
- Max content width: ~1400px
- Hairline dividers between work/history/contact rows

## Motion

1. Nav fade-in + scroll progress bar
2. Hero name slide-up reveal
3. Work hover preview plane + section enter fades

Ease: `cubic-bezier(0.16, 1, 0.3, 1)`. Respect `prefers-reduced-motion`.

## Components

- Fixed sparse nav (name + Work / About / Contact)
- Work rows: title | summary | year + live affordance; desktop hover image plane
- History as typographic timeline rows
- Skills as unlabeled lists under micro-headings (not pills)
- Contact as large underlined link rows
