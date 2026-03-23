# ivy — Onboarding Guide

## Purpose

Ivy.css is a classless CSS baseline library that applies elegant, opinionated defaults directly to semantic HTML elements — no class names required. Its companion file, `ivy.extra.css`, adds an optional component layer for richer UI patterns. Together they form the "Ivy + Lattice micro-stack," where Ivy handles base styling and Lattice (a separate utility library) handles layout. The project's goal is to let developers write plain, accessible HTML and get a polished result with minimal ceremony.

## Architecture

The codebase is intentionally minimal: two source CSS files, a docs site, and a CI/CD workflow.

- **`ivy.css` (core)** — The classless foundation. Targets native HTML elements (`body`, `h1`–`h6`, `table`, `form`, `code`, etc.) with no selectors that require opt-in markup. Implements a full design-token system via CSS custom properties, fluid typography, and light/dark theme support.
- **`ivy.extra.css` (extra)** — An opt-in enhancement layer. Introduces component-level styling driven by `data-*` attributes (e.g. `data-variant`, `data-tooltip`) for buttons, dialogs, badges, cards, callouts, progress bars, and responsive tables. Mirrors and extends the token system from core with additional surface and shadow tokens.
- **`docs/`** — A static documentation site that doubles as a live visual reference. `index.html` is the entry point; `ivy-core.html` and `ivy-extra.html` are dedicated showcases for each CSS layer. `dark-mode-toggle.min.js` handles the theme switcher. `devserver.sh` spins up a local server for development.
- **`.github/workflows/minify-css.yml`** — CI pipeline that watches source CSS files, minifies them individually and as a combined bundle via `clean-css-cli`, commits output to `dist/` and `docs/`, and deploys the docs site to GitHub Pages.

## Key Patterns

**Classless-first with attribute-based opt-ins.** The core layer requires zero class names — semantic HTML is the API. The extra layer extends this with `data-*` attributes for variants and behaviors, keeping HTML readable while avoiding class proliferation.

**CSS custom property token system.** Both files define all colors, spacing, typography scales, and shadows as CSS custom properties, organized into a coherent token hierarchy. Theme switching (light/dark) is handled entirely through token overrides, making customization a matter of redefining a handful of root variables rather than overriding rules.

**Two-layer composition.** Core and extra are deliberately separated so consumers can adopt only what they need. A static content site might need only `ivy.css`; a richer app adds `ivy.extra.css`. The build pipeline reflects this by producing individual minified files alongside a combined bundle.

**Docs-as-demo.** The documentation pages are simultaneously the user-facing docs and the visual test suite. There is no separate Storybook or component playground — the HTML showcase pages serve both roles.

## Getting Started

1. **Read `README.md`** for a concise overview of the two-layer model, installation options, and the customization API.
2. **Browse `ivy.css`** from the top — the token definitions at the file's opening establish the entire design system vocabulary used throughout.
3. **Open `docs/ivy-core.html` and `docs/ivy-extra.html` in a browser** (use `docs/devserver.sh` locally) to see every styled element and component in context. Cross-reference with the source files as you explore.
4. **Check `ivy.extra.css`** next, paying attention to the `data-*` attribute selectors — these define the complete public API for the component layer.
5. **Review `.github/workflows/minify-css.yml`** to understand how changes to the source files become releases and how the docs site is deployed before making any contributions.

## Repository Statistics

- **Total files:** 12
- **Total lines:** 1371

| Language | Files | Lines | % |
|----------|------:|------:|--:|
| CSS | 4 | 537 | 39.2% |
| HTML | 3 | 533 | 38.9% |
| Markdown | 1 | 211 | 15.4% |
| YAML | 1 | 76 | 5.5% |
| JavaScript | 1 | 7 | 0.5% |
| Shell | 1 | 2 | 0.1% |

## Documentation Library

- `README.md` — Project overview and getting started guide

## File Tree

```
ivy/
├── .github/
│   └── workflows/
│       └── minify-css.yml
├── README.md
├── docs/
│   ├── dark-mode-toggle.min.js
│   ├── devserver.sh
│   ├── index.html
│   ├── ivy-core.html
│   ├── ivy-extra.html
│   ├── ivy.full.min.css
│   ├── lattice.full.min.css
│   └── robots.txt
├── ivy.css
└── ivy.extra.css
```
