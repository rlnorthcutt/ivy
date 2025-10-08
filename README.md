![](image.png)

# Ivy.css

**Ivy** is a tiny, classless CSS baseline for clean, semantic HTML.
It gives you elegant defaults for typography, links, code, media, tables, and basic forms—without forcing utility classes or component markup.

* **Classless first.** Style semantic tags, not div soup.
* **Small & composable.** Keep just the core, or add a light “extra” layer.
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

> Using Lattice for layout? Just include it after Ivy:
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

## What’s in Core vs Extra

### Core (`ivy.css`)

* Document & typography rhythm (fluid headings, readable measure).
* Minimal color tokens & dark-mode swap (prefers-color-scheme).
* Links, lists, blockquotes, code/pre/kbd.
* Responsive media (`img`, `svg`, `video`, `iframe` basics).
* Minimal tables (full width, cell padding, borders).
* Basic forms (inputs/selects/textarea/buttons) without heavy theming.
* A11y touches: focus-visible, selection color, `sr-only` helper.

### Extra (`ivy.extra.css`)

* Buttons for semantic elements (`<button>` & `a[role=button]`) with:

  * Variants via attributes: `data-variant="primary|outline|ghost"`
  * Sizes: `data-size="sm|lg"`
* Details/summary, tooltips (`data-tooltip`), dialog (`<dialog>`), progress.
* Opt-in striped tables (`<table data-striped>`).
* Form niceties: accent-color, switches (`role="switch"`), range, file button.
* Badges (`[aria-label][data-badge]`), busy/spinner (`[aria-busy="true"]`).

---

## Customize (tokens)

Override Ivy’s small token set from your own stylesheet:

```css
:root{
  /* palette */
  --color-bg:#ffffff; --color-text:#1b1f23; --color-muted:#667085;
  --color-link:#0a66c2; --color-border:#e5e7eb; --color-surface:#fafafa;

  /* type & rhythm */
  --font-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --base-size:16px; --lh:1.6; --measure:72ch; --radius:.375rem; --m:1rem;
}
@media (prefers-color-scheme: dark){
  :root{
    --color-bg:#0b0d10; --color-text:#e6e7e9; --color-muted:#98a2b3;
    --color-link:#79b8ff; --color-border:#23262b; --color-surface:#111418;
  }
}
```

---

## Patterns in Extra (attribute API)

A few examples:

```html
<!-- Buttons -->
<button data-variant="primary">Save</button>
<a role="button" data-variant="outline" href="#">Learn more</a>

<!-- Details & tooltip -->
<details><summary>More info</summary><p>Hidden content</p></details>
<button data-tooltip="On the right" data-placement="right">Hover me</button>

<!-- Dialog -->
<button id="open">Open dialog</button>
<dialog id="dlg"><article><h3>Hi</h3><p>Content</p></article></dialog>

<!-- Table striping -->
<table data-striped>…</table>

<!-- Switch / badge / busy -->
<label><input type="checkbox" role="switch"> Enable</label>
<span aria-label="Inbox" data-badge="4">Inbox</span>
<div aria-busy="true" style="min-height:3rem;"></div>
```

---

## Examples

* `examples/ivy-core.html` — element showcase
* `examples/ivy-extra.html` — optional patterns

(If your CI publishes only `dist/`, copy `examples/` into `dist/examples/`.)

---

## Browser support

Modern evergreen browsers. Uses CSS Grid/Flex for demos, `:focus-visible`, and `prefers-color-scheme`.
No JavaScript required (except where you wire up native `<dialog>` open/close).

---

## Accessibility

* Focus outlines via `:focus-visible`.
* Sensible defaults for selection, contrast, and interactive targets.
* `sr-only` helper for visually hidden but accessible text.
* Encourages semantic HTML (`<article>`, `<nav>`, `<button>`, etc.).

---

## Philosophy

* **Classless first.** Author content with HTML; style comes for free.
* **Small layers.** Core → Extra → tiny project CSS.
* **No lock-in.** Works alongside any layout utilities (e.g., Lattice) or design tokens.

---

## Versioning & License

* **SemVer** for releases.
* **MIT License.** © 2025 Ron Northcutt.

---

## Contributing

PRs welcome! Please:

* Keep diffs focused and maintain the tight single-line formatting.
* Preserve license banners (`/*! … */`) so they survive minification.
* Favor semantic selectors and attribute APIs over class proliferation.

---

