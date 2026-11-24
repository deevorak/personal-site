---
name: Carlos Rocha Consultoria em TI
colors:
  surface: '#0b1324'
  surface-dim: '#0b1324'
  surface-bright: '#31394c'
  surface-container-lowest: '#060e1f'
  surface-container-low: '#131b2d'
  surface-container: '#181f31'
  surface-container-high: '#222a3c'
  surface-container-highest: '#2d3547'
  on-surface: '#dbe2fa'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dbe2fa'
  inverse-on-surface: '#283042'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#44e2cd'
  on-secondary: '#003731'
  secondary-container: '#03c6b2'
  on-secondary-container: '#004d44'
  tertiary: '#b8cdff'
  on-tertiary: '#002e6a'
  tertiary-container: '#8cb1ff'
  on-tertiary-container: '#004190'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0b1324'
  on-background: '#dbe2fa'
  surface-variant: '#2d3547'
typography:
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a sharp, high-tech engineering aesthetic tailored for **Carlos Rocha Consultoria em TI**. Designed for enterprise decision-makers, CTOs, and technical teams, the interface evokes authority, precision, and forward-looking reliability.

Drawing from **High-Contrast / Bold** and **Corporate / Modern** movements with an experimental technical edge, the visual language pairs deep navy-slate canvases with luminous cyan and electric blue accents. Zero-radius geometry (`0px`) and monospaced technical typography reinforce the sensation of architectural stability and engineering rigor—sober, trustworthy, and unmistakably modern.

## Colors

The palette is anchored in a deep navy-slate dark mode (`#0D1526` base canvas, `#111B2E` elevated surface, `#1E293B` container/card surface) that eliminates visual glare and mirrors the authority of mission-critical infrastructure.

- **Primary (`#38BDF8`):** Vibrant sky cyan used for primary actions, active states, focus rings, and key data highlights.
- **Secondary (`#2DD4BF`):** Turquoise accent reserved for status indicators, technical badges, and subtle gradient pairings with the primary cyan.
- **Tertiary (`#3B82F6`):** Electric blue for secondary interactive elements, links, and circuit-inspired visual accents.
- **Neutrals & Text:** High-contrast crisp white (`#F8FAFC`) for primary headings and body copy, cool slate (`#94A3B8`) for secondary metadata, and subtle `#334155` hairlines for structural grid divisions.

## Typography

Typography pairs **Sora** for geometric, high-impact display headlines with **JetBrains Mono** for technical precision in body copy, metrics, and UI labels.

- **Headlines (`Sora`):** Bold and SemiBold weights with tight negative tracking (`-0.01em` to `-0.02em`) command attention on hero sections, service titles, and architectural overviews. On mobile viewports, `headline-lg-mobile` scales down to `32px` to preserve hierarchy without wrapping issues.
- **Body & Labels (`JetBrains Mono`):** Monospaced clarity ensures effortless scanning of technical specifications, SLAs, code snippets, and tabular data. Uppercase `label-sm` and `label-lg` tokens use expanded letter-spacing (`0.04em`–`0.08em`) for crisp, engineering-grade categorization.

## Layout & Spacing

This design system uses a **12-column fluid grid** anchored by disciplined, architectural spacing that mirrors a technical blueprint.

- **Desktop (`>= 1024px`):** 12 columns with `1.5rem` (`24px`) gutters and `2rem` (`32px`) outer margins, capped at a `1280px` max-width container for optimal reading and dashboard density.
- **Tablet (`768px – 1023px`):** Collapses to an 8-column grid with `1.5rem` gutters and `1.5rem` outer margins.
- **Mobile (`< 768px`):** 4-column fluid layout with `1rem` gutters and `1rem` outer margins. Multi-column service cards and metric grids stack vertically with `space-md` (`1rem`) gaps.

## Elevation & Depth

Hierarchy is communicated through **tonal surface layering** and **low-contrast structural borders** rather than heavy drop shadows.

- **Tonal Layers:** The base canvas (`#0D1526`) steps up to `#111B2E` for primary sections and `#1E293B` for elevated cards and modals.
- **Low-Contrast Outlines:** All containers, panels, and interactive cards are framed by crisp `1px` solid borders in `#334155` (or `rgba(56, 189, 248, 0.25)` on hover/active states), reinforcing the sharp, zero-radius engineering aesthetic.
- **Luminous Accents:** Subtle `0 0 16px rgba(56, 189, 248, 0.15)` outer glows are reserved strictly for primary CTAs and active circuit-inspired status indicators.

## Shapes

All UI elements adhere strictly to **sharp `0px` corners** (`roundedness: 0`). Buttons, cards, input fields, badges, and modal dialogs feature crisp 90-degree vertices, projecting precision, discipline, and technical authority without decorative softness.

## Components

- **Buttons:** Sharp `0px` corners with `JetBrains Mono` uppercase labels (`label-lg`). Primary buttons use `#38BDF8` fill with `#0D1526` dark text for maximum contrast; secondary buttons use transparent backgrounds with `1px solid #38BDF8` borders and `#38BDF8` text.
- **Chips & Status Badges:** `0px` rectangular tags with `1px solid` borders (`#2DD4BF` for active/operational states, `#334155` for neutral metadata) and `space-xs` / `space-sm` internal padding.
- **Cards:** `#1E293B` surface fill, `1px solid #334155` border, `space-lg` internal padding, and a `2px` top accent bar in `#38BDF8` or `#2DD4BF` to denote service categories.
- **Input Fields:** `#0D1526` background, `1px solid #334155` border, `0px` radius, and `JetBrains Mono` text. Focus states transition the border to `#38BDF8` with a subtle `0 0 0 1px #38BDF8` ring.
- **Checkboxes & Radio Buttons:** Sharp `0px` squares/indicators with `1px solid #475569` borders, filling with `#38BDF8` and a `#0D1526` checkmark when selected.
- **Lists & Data Tables:** Separated by `1px solid #1E293B` horizontal hairlines, using `JetBrains Mono` for aligned numerical metrics, SLAs, and technical specifications.