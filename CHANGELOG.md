# Changelog

All notable changes to Ivy.css are documented here.
Follows [Semantic Versioning](https://semver.org/).

---

## [1.2.0] — 2026-08-25

### Changed
- **Palette moved to OKLCH**, and links now get their own hue instead of duplicating the primary color: link is blue (`oklch(0.54 0.152 250)` light / `oklch(0.80 0.102 250)` dark), primary is green (`oklch(0.53 0.144 150)` / `oklch(0.84 0.215 152)`), secondary is rose (`oklch(0.55 0.22 355)` / `oklch(0.80 0.126 355)`). Replaces the 1.1.1 forest-green/amber palette. Requires `oklch()` support (same browser tier as `color-mix()`).
- Responsive root type scale gentled to a six-step, +2.5%-per-step curve (100%→115% across 768px–2560px), replacing the old seven-step curve that went as high as +50%.

### Fixed
- Responsive root type scaling never actually applied — `--font-size` was updated by the breakpoint media queries, but `html` was hardcoded to `font-size:100%` and `body` read a static `--base-size` instead. `html` now reads `var(--font-size)`.
- `header nav a` used `calc(var(--font-size * 1.2))`, which is invalid CSS (`var()` can't hold a math expression) and did nothing — replaced with a flat `1.05rem`.
- `button:disabled` referenced an undefined `--text-muted` token — now uses `--color-muted` for background and border.
- Header/footer padding bled into `article`/`section`/`table`/`figure`/etc. when one of those was nested inside a `header`/`footer` — selector narrowed to page-level header/footer only.
- `--surface-2` / `--surface-3` were never assigned in the default (light, no `data-theme`) state — only inside the dark-media query and the `[data-theme]` blocks. Any page using Ivy without the `<dark-mode-toggle>` component saw unstyled soft/card/callout backgrounds in light mode. Now set in the base `:root` alongside the other applied tokens.
- `:invalid` painted a danger border on required-but-empty fields immediately on page load, before any user interaction — switched to `:user-invalid`.
- `ivy.extra.css`'s `--surface-2` / `--surface-3` values had drifted out of sync with `ivy.css`; both now match.

### Docs
- Corrected several stale values that no longer matched the code: the color palette reference table (was showing the pre-OKLCH hex palette), the responsive type-scaling table (was showing the old seven-step scale), `--range-progress` (documented as a percentage; it's a dimensionless 0–1 ratio), disabled-button opacity (documented as `0.6`; actual is `.5`), header nav link size (documented as `1rem`; actual is `1.05rem`), and a false `pointer-events: none` claim on the breadcrumb separator.
- Clarified that the live color-theme preview boxes on the docs homepage use a local, scoped override of the applied token for demo purposes only — real site-wide theming should still use the `-light`/`-dark` token pairs shown above them.
- Added three new example pages under `docs/` — a landing page, a long-form article, and a dense app screen — demonstrating the library on assembled real-world layouts, linked from a new `docs/examples.html` gallery.
- README: added `--surface-2`/`--surface-3` to the token reference, added `oklch()` to the browser support table, documented the `<dark-mode-toggle>` component and the full-bundle install option, and fixed a broken relative link to Lattice.
- Removed `CLAUDE.md` (project instructions no longer needed).

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
