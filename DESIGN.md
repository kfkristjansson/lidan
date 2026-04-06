# lidan.is Design System

**Aesthetic:** Grounded calm — like entering a therapy office with natural light.
Professional, warm, trustworthy. Not clinical white, not wellness-spa soft.

**Stack:** Next.js 15 + Tailwind 4 + Poppins font. Light mode only. External-facing wellness site.

---

## Color Palette

| Token          | Hex       | CSS Variable      | Usage                      |
|----------------|-----------|-------------------|----------------------------|
| page bg        | `#f8f7f4` | `--color-page`    | Warm off-white background  |
| surface        | `#ffffff` | `--color-surface` | Cards                      |
| muted bg       | `#f0ede7` | `--color-muted`   | Section backgrounds        |
| deep bg        | `#2a2d25` | `--color-deep`    | Footer                     |
| text primary   | `#2a2d25` | `--color-text`    | Headlines                  |
| text body      | `#585c52` | `--color-body`    | Paragraphs                 |
| text muted     | `#949990` | `--color-subtle`  | Labels, metadata           |
| border         | `#e2ded6` | `--color-border`  | Subtle dividers            |
| accent         | `#6b8f5e` | `--color-accent`  | Muted sage green           |
| accent hover   | `#5a7a4f` | `--color-accent-hover` | Darker sage           |
| accent light   | `#eef3eb` | `--color-accent-light` | Sage tint background  |

## Typography (Poppins)

| Role       | Size  | Weight | Tracking  | Line-height |
|------------|-------|--------|-----------|-------------|
| h1         | 48px  | 600    | -0.02em   | 1.15        |
| h2         | 32px  | 600    | -0.01em   | 1.25        |
| h3         | 22px  | 600    | normal    | 1.35        |
| Body       | 16px  | 300    | normal    | 1.7         |
| Micro      | 11px  | 600    | 0.06em    | 1.4         |

## Component Rules

- **Cards:** No borders. Shadow `0 1px 3px rgba(0,0,0,0.04)`. Radius 12px.
- **Buttons:** Radius 6px. Accent fill primary.
- **Focus-visible:** 2px accent ring, 2px offset.
- **prefers-reduced-motion:** Disable transitions/animations.
- **Max widths:** 720px for reading, 1080px for grid layouts.
- **Nav:** Subtle shadow, flower logo, accent underline on active link.
- **Footer:** Deep green-black background (`#2a2d25`), light text.

## Quality Gate (from parent design system)

- [ ] Squint test: hierarchy visible when blurred
- [ ] Swap test: not generic defaults
- [ ] Density check: nothing superfluous
- [ ] Color count: max 3 non-neutral colors
- [ ] Border audit: shadows > borders
- [ ] Spacing rhythm: tight within groups, separated between sections
- [ ] Typography hierarchy: 3+ size/weight levels
- [ ] Contrast: 4.5:1 minimum, focus states visible, 44px touch targets
- [ ] One accent: sage green for interactive only
