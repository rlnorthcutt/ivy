![](image.png)

# Ivy.css

**Ivy** is a tiny, classless CSS baseline for clean, semantic HTML.
It gives you elegant defaults for typography, links, code, media, tables, and basic forms—without forcing utility classes or component markup.

* **Classless first.** Style semantic tags, not div soup.
* **Small & composable.** Keep just the core, or add a light "extra" layer.
* **No JS.** Works anywhere, pairs nicely with any layout approach.
* **Optional companion:** [Lattice](../) (minimal layout/positioning utilities).

<p align="center">
  <img alt="CSS Only" src="https://img.shields.io/badge/CSS-Only-0?style=flat&color=0aa" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-000?style=flat&color=333" />
</p>

---

## Files

Ivy ships in two layers:

| File            | Purpose                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ivy.css`       | **Core** classless defaults: type rhythm, links, lists, code/pre, media, minimal tables & forms, a11y helpers.                                                  |
| `ivy.extra.css` | **Extra** optional polish: buttons via data-attributes, details/summary, tooltips, dialog, progress, striped tables, small form niceties, badges, busy spinner. |

> If you minify in CI, you may also have `ivy.min.css` / `ivy.extra.min.css` in `dist/`.

---

## Install

Add Ivy to your page:

```html
<!-- Classless theme (required) -->
<link rel="stylesheet" href="/path/to/ivy.css" />

<!-- Optional polish layer -->
<link rel="stylesheet" href="/path/to/ivy.extra.css" />
```

> Using Lattice for layout? Include it after Ivy:
>
> ```html
> <link rel="stylesheet" href="/path/to/lattice.min.css" />
> ```

---

## Quick start

```html
<main>
  <article>
    <h1>Hello, Ivy</h1>
    <p>Ivy styles your semantic HTML with a clean, readable baseline.</p>

    <figure>
      <img src="https://picsum.photos/960/540" alt="Demo" />
      <figcaption>Responsive media with tasteful defaults.</figcaption>
    </figure>

    <table>
      <thead><tr><th>Item</th><th>Qty</th></tr></thead>
      <tbody><tr><td>Paper</td><td>3</td></tr></tbody>
    </table>

    <form>
      <p><label>Name<br><input type="text" placeholder="Jane Doe"></label></p>
      <p><button type="submit">Submit</button></p>
    </form>
  </article>
</main>
```

No classes required—just semantic HTML.

---

## What's in Core vs Extra

### Core (`ivy.css`)

* Document & typography rhythm (fluid headings, readable measure).
* Minimal color tokens & dark-mode swap (`prefers-color-scheme`).
* Links, lists, blockquotes, code/pre/kbd.
* Responsive media (`img`, `svg`, `video`, `iframe` basics).
* Minimal tables (full width, cell padding, borders).
* Basic forms (inputs/selects/textarea/buttons) without heavy theming.
* A11y: focus-visible, selection color, `sr-only` helper, forced-colors safety, print styles.

### Extra (`ivy.extra.css`)

* Button polish (shadow, press animation) and opt-in variants:
  * `data-variant="primary|secondary|outline|ghost|outline-secondary|ghost-secondary"`
  * `data-size="sm|lg"`
* Details/summary, tooltips (`data-tooltip`), dialog (`<dialog>`), progress.
* Opt-in striped tables (`<table data-striped>`), stacked responsive tables (`data-stack`).
* Form niceties: accent-color, switches (`role="switch"`), range, file button.
* Badges (`[aria-label][data-badge]`), busy/spinner (`[aria-busy="true"]`).
* Cards, callouts, button groups, typographic helpers.

---

## Customize (tokens)

Ivy uses a two-tier token system. Each color has a `-light` and `-dark` variant; the *applied* token (e.g. `--color-bg`) switches between them based on the active theme.

**Override the applied tokens** from your own stylesheet to customize Ivy across both themes at once, or override the `-light`/`-dark` variants to control each theme independently.

```css
/* Override both themes at once */
:root {
  --color-primary-light: #1d4ed8;   /* blue in light mode */
  --color-primary-dark:  #93c5fd;   /* lighter blue in dark mode */
  --color-primary-text-light: #ffffff;
  --color-primary-text-dark:  #0f172a;

  /* typography & rhythm */
  --font-sans: system-ui, -apple-system, sans-serif;
  --measure: 72ch;
  --radius: 0.5rem;
  --m: 1rem;
}
```

> **Do not override `--color-bg` / `--color-primary` etc. directly in `:root`** — the theme switcher will overwrite them when dark mode activates. Always set the `-light` / `-dark` variants, or override inside the appropriate `[data-theme]` block.

### Full token reference

```css
/* Color tokens (set -light and -dark variants) */
--color-bg-light / --color-bg-dark
--color-text-light / --color-text-dark
--color-muted-light / --color-muted-dark
--color-link-light / --color-link-dark
--color-primary-light / --color-primary-dark
--color-primary-text-light / --color-primary-text-dark
--color-secondary-light / --color-secondary-dark
--color-secondary-text-light / --color-secondary-text-dark
--color-border-light / --color-border-dark
--color-surface-light / --color-surface-dark

/* Semantic states */
--info  --success  --warn  --danger

/* Typography */
--font-sans  --font-mono
--base-size  --lh  --measure

/* Spacing & shape */
--m          /* base unit (1rem) */
--space-xs   /* 0.5rem */
--space-sm   /* 0.75rem */
--space-xl   /* 2rem */
--radius     /* border-radius */
--fs-sm      /* small font size (0.875rem) */
```

---

## Patterns in Extra (attribute API)

```html
<!-- Buttons -->
<button data-variant="primary">Save</button>
<button data-variant="outline" data-size="sm">Cancel</button>
<a role="button" data-variant="ghost" href="#">Learn more</a>

<!-- Tooltip (add aria-label for screen readers) -->
<button data-tooltip="Saved!" aria-label="Save document">Save</button>
<button data-tooltip="On the right" data-placement="right">Hover me</button>

<!-- Details -->
<details><summary>More info</summary><p>Hidden content</p></details>

<!-- Dialog -->
<button id="open">Open dialog</button>
<dialog id="dlg"><article><h3>Hi</h3><p>Content</p></article></dialog>

<!-- Table striping / responsive stacking -->
<table data-striped>…</table>
<table data-stack>
  <tbody><tr>
    <td data-label="Name">Alice</td>
    <td data-label="Role">Engineer</td>
  </tr></tbody>
</table>

<!-- Switch / badge / busy -->
<label><input type="checkbox" role="switch"> Enable</label>
<span aria-label="Inbox" data-badge="4">Inbox</span>
<div aria-busy="true" style="min-height:3rem;"></div>

<!-- Card -->
<div class="card">
  <header><h3>Title</h3></header>
  <p>Card content.</p>
  <footer><button data-variant="primary">Action</button></footer>
</div>

<!-- Callout -->
<div class="callout" data-tone="info">
  <strong>Note</strong> Something worth knowing.
</div>
```

---

## Examples

* `docs/ivy-core.html` — element showcase (zero classes)
* `docs/ivy-extra.html` — optional patterns

---

## Browser support

Modern evergreen browsers. Requires support for:

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| `:focus-visible` | 86 | 85 | 15.4 | 86 |
| `prefers-color-scheme` | 76 | 67 | 12.1 | 79 |
| `color-mix()` | 111 | 113 | 16.2 | 111 |
| `@layer` | 99 | 97 | 15.4 | 99 |
| `<dialog>` | 37 | 98 | 15.4 | 79 |

> `color-mix()` is the most recent requirement (~93% global support as of early 2026). No JavaScript required except where you wire up native `<dialog>` open/close or the optional range input fill.

---

## Accessibility

* Focus outlines via `:focus-visible`.
* Sensible contrast for both light and dark palettes (WCAG AA).
* `sr-only` helper for visually hidden but accessible text.
* Windows High Contrast / forced-colors safety.
* `prefers-reduced-motion` — all transitions and animations disabled automatically.
* Encourages semantic HTML (`<article>`, `<nav>`, `<button>`, etc.).

---

## Philosophy

* **Classless first.** Author content with HTML; style comes for free.
* **Small layers.** Core → Extra → tiny project CSS.
* **No lock-in.** Works alongside any layout utilities (e.g., Lattice) or design tokens.

---

## Versioning & License

* **SemVer** for releases. See [CHANGELOG.md](./CHANGELOG.md).
* **MIT License.** © 2025 Ron Northcutt.

---

## Contributing

PRs welcome! Please:

* Keep diffs focused and maintain the tight single-line formatting.
* Preserve license banners (`/*! … */`) so they survive minification.
* Favor semantic selectors and attribute APIs over class proliferation.
* Test changes in both light and dark mode, and with forced-colors enabled.
