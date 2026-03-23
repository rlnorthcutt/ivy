# Changelog

All notable changes to Ivy.css are documented here.
Follows [Semantic Versioning](https://semver.org/).

---

## [1.1.1] — 2026-03-23

### Added
- `@layer ivy-base, ivy-extra` cascade layer declarations — unlayered user CSS now always wins without needing `!important`.
- `a[role=button]` included in core button selectors so styled link-buttons work without Extra.
- `a[role=button][aria-disabled=true]` disabled state in core.
- Dialog mobile override: dialog fills viewport on screens narrower than 32rem.
- `select { appearance: auto }` in forced-colors block so OS renders its native accessible control.
- Global `prefers-reduced-motion` reset in core — all transitions and animations are disabled for users who prefer reduced motion.
- JS snippet comment on `input[type=range]` explaining how to set `--range-progress` for the filled track.

### Changed
- **Brand color**: primary and link colors updated from teal to forest green (`#166534` light / `#4ade80` dark) — fixes WCAG contrast failure on dark backgrounds.
- **Dark mode primary text**: updated to `#052e16` (dark green) for contrast against bright green primary.
- **`--ok` renamed to `--success`** — matches the `data-tone=success` / `.callout.success` naming used throughout Extra.
- **Spacing variable names**: `--m-0_5` → `--space-xs`, `--m-0_75` → `--space-sm`, `--m-2` → `--space-xl`; `--m-0_875` inlined into `--fs-sm:0.875rem`.
- **Extra button base**: Extra no longer overrides core's button background/color. It only adds `box-shadow` and press-transform polish. Loading Extra no longer changes the visual appearance of plain buttons.
- **`--primary` / `--on-primary` aliases removed** from Extra — all rules now use `--color-primary` / `--color-primary-text` etc. directly, matching core naming.
- **Theme switching in Extra** aligned to use identical selectors as core (`html[data-theme="dark"]`, `html.dark`, etc.).
- `html { color-scheme: light }` duplication removed from Extra.
- `display: block` on native block elements (`main`, `article`, etc.) removed — these are block by default in all supported browsers.
- `[aria-current=page]` → `[aria-current="page"]` (quoted attribute value) in both files.
- Card `>header` and `>footer` negative-margin math corrected — footer no longer pulls up into card content.
- `input[role=switch]` checked state uses 60% primary mix (was 40%) for stronger visual distinction.
- `[data-variant=*]` rules no longer use `!important` — cascade layers make these unnecessary.
- Outline/ghost hover states now show a subtle tinted background for better affordance.
- Version synced to `1.1.1` across both files (was `1.0.0` / `1.1.0-extra`).

### Fixed
- Dark mode link/primary color contrast failure (WCAG AA).
- Card `>footer` negative margin pulling footer up into card content.
- Select element gradient arrow lost in Windows High Contrast mode.
- `data-tooltip` accessibility note added — tooltip content is visual-only; pair with `aria-label` or `aria-describedby` for screen readers.

---

## [1.0.0] — 2025 (initial release)

- Core classless baseline: typography, links, code, tables, forms, media, a11y helpers.
- Light/dark mode with `prefers-color-scheme` and manual `data-theme` attribute.
- Fluid responsive headings via `clamp()`.
- Extra layer: button variants, tooltips, dialog, progress, cards, callouts, badges, spinner, breadcrumbs, switches, range inputs.
