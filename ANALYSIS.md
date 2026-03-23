# File Summaries

## [core] Core

### `ivy.css`

Ivy.css is a classless CSS framework that provides elegant, opinionated defaults for native HTML elements including typography, forms, tables, code blocks, and media. It implements a comprehensive design token system with light/dark theme support via CSS custom properties, responsive fluid typography, and minimal accessibility improvements. The file is self-described as the 'CORE' stylesheet, intended to be used alongside companion files like ivy.extra.css and Lattice.css.

**Suggestions:**

- [~] **refactor:** The light and dark theme variable blocks are duplicated three times (auto dark media query, [data-theme='dark'], and [data-theme='light']). Extract these into a shared CSS layer or use @layer to reduce repetition and make future color changes easier to maintain in one place.
- [+] **improvement:** The --surface-2 and --surface-3 applied tokens are missing from the :root default applied palette block (only light/dark variants are defined), which means they will be undefined in light mode unless the light theme class is explicitly set. Add --surface-2 and --surface-3 defaults to :root alongside the other applied tokens.
- [>] **performance:** The responsive font-size scale uses seven breakpoint media queries that only update a single CSS variable on :root. Consider using a single clamp() expression on --font-size or --base-size to achieve fluid scaling without multiple media query blocks, reducing CSS parse overhead.
- [d] **docs:** Add a usage example or link to documentation at the top of the file explaining how ivy.css, ivy.extra.css, and Lattice.css relate to each other and the intended load order, to help new adopters understand the architecture without needing to visit an external repo.
- [!] **security:** The skip-link and sr-only patterns are mentioned in comments as a11y features, but if any CSS here injects content via ::before/::after with attr() or custom properties derived from HTML attributes, verify those paths don't create XSS vectors in older browser content-security-policy contexts. Audit all content: property usages for user-controlled values.

---

## [build] Build

### `.github/workflows/minify-css.yml`

A GitHub Actions workflow that triggers on pushes to main (or manually) when CSS source files change. It minifies ivy.css and ivy.extra.css individually and as a combined bundle using clean-css-cli, then commits the output to dist/ and docs/ directories and deploys to GitHub Pages.

**Suggestions:**

- [!] **security:** The workflow commits and pushes using GITHUB_TOKEN with write permissions, which could allow unintended code injection if the CSS files are sourced from pull requests. Restrict triggers to trusted branches only and avoid using write permissions broadly.
- [+] **improvement:** The workflow does not upload or configure the GitHub Pages deployment step (e.g., actions/upload-pages-artifact and actions/deploy-pages), yet it defines a github-pages environment and references steps.deployment.outputs.page_url — add the missing deploy steps or remove the unused environment configuration.
- [>] **performance:** Installing clean-css-cli globally on each run adds latency. Consider caching the npm global install using actions/cache or switching to a local package.json with npm ci for faster, reproducible installs.
- [~] **refactor:** The multiple cleancss invocations could be consolidated into a shell script or Makefile to reduce duplication and make the build logic easier to test and maintain locally without needing GitHub Actions.
- [d] **docs:** Add inline comments explaining why ivy.full.min.css is copied to docs/ specifically, and document the purpose of the dist/ vs docs/ separation to clarify the deployment strategy for future contributors.

---

## [docs] Docs

### `README.md`

Documentation for Ivy.css, a classless CSS baseline library that provides elegant defaults for semantic HTML elements. It describes the two-layer architecture (core and extra), installation instructions, customization via CSS tokens, and the attribute-based API for optional patterns. Also covers browser support, accessibility features, and contribution guidelines.

**Suggestions:**

- [d] **docs:** Add a changelog or link to CHANGELOG.md so users can track version history and breaking changes between SemVer releases.
- [d] **docs:** Include a CDN installation option (e.g., jsDelivr or unpkg URL) alongside the local path example to lower the barrier for quick prototyping.
- [d] **docs:** Add a screenshot or live demo link showcasing both core and extra layers so users can preview the library before installing.

---

### `docs/index.html`

The landing page for the Ivy + Lattice CSS micro-stack project, showcasing features, quick-start instructions, live layout demos, and file build information. It serves as the primary documentation entry point, demonstrating the libraries' classless and utility-based CSS approach with live examples. The page also links to related documentation pages for Ivy Core and Ivy Extra.

**Suggestions:**

- [+] **improvement:** The file table has a mismatch: the <table> has two <th> columns (File, What) but each <tr> in <tbody> has three <td> cells (file name, description, size). Add a third header column (e.g., 'Size') to fix the invalid table structure.
- [+] **improvement:** The GitHub link in the nav and footer points to a user profile (https://github.com/rlnorthcutt) rather than the specific repository. Link directly to the project repository so users can find the source code without an extra navigation step.
- [d] **docs:** The quick-start section references ivy.extra.css and lattice.min.css as separate optional files, but the actual file table only lists ivy.full.min.css, ivy.extra.min.css, and ivy.min.css with no Lattice entries. Add Lattice file sizes to the table for completeness and consistency.
- [+] **improvement:** The <script> tag uses both 'type=module' and 'defer', but modules are deferred by default. Remove the redundant 'defer' attribute.
- [!] **security:** The external GitHub link uses target='_blank' with rel='noopener', which is correct. Ensure all other external links (if added in the future) also include rel='noopener noreferrer' to prevent reverse tabnapping.

---

### `docs/ivy-core.html`

A demonstration/showcase page for the Ivy CSS core library, displaying classless CSS styling applied to semantic HTML elements. It covers typography, lists, code blocks, media, tables, forms, and accessibility features. The page serves as a visual reference for developers evaluating or using the Ivy CSS micro-stack.

**Suggestions:**

- [!] **security:** External media sources (picsum.photos, MDN video) are loaded without subresource integrity checks or a Content Security Policy header/meta tag. Add a CSP meta tag to restrict external resource origins.
- [+] **improvement:** The form has no action or method attributes and no client/server-side validation indicators. Add novalidate or appropriate ARIA live regions to demonstrate how Ivy styles form validation states.
- [d] **docs:** Each section demonstrates a visual feature but lacks inline commentary or labels explaining which CSS rules or custom properties produce the effect. Adding brief annotations would improve the page's utility as a reference document.
- [+] **improvement:** The dark-mode-toggle script is loaded as a module with a redundant defer attribute (modules are deferred by default). Remove the defer attribute to keep the markup clean.
- [~] **refactor:** Navigation links use bare filenames (ivy-core.html, ivy-extra.html) which will break if the docs are served from a non-root path. Use root-relative or configurable base paths for maintainability.

---

### `docs/ivy-extra.html`

A demo/showcase page for the Ivy Extra CSS library, displaying optional UI components including buttons, tooltips, dialogs, tables, forms, badges, cards, callouts, and utility classes. It serves as both documentation and a visual reference for the extra polish layer built on top of the Ivy classless CSS core. The page uses semantic HTML with data attributes to demonstrate the library's API.

**Suggestions:**

- [d] **docs:** Add anchor links or a table of contents at the top listing all sections (buttons, tooltips, dialog, etc.) to improve navigation in the demo page.
- [+] **improvement:** The inline dialog open/close logic relies on IDs but no JavaScript is included in the snippet — ensure a script block or external JS file wires up the openDialog/closeDialog button events, otherwise the dialog demo is non-functional.
- [+] **improvement:** The badge elements use aria-label only for the parent span but the badge count (data-badge) is not exposed to screen readers — consider adding visually-hidden text like 'You have 4 messages' inside the span for better accessibility.
- [+] **improvement:** The inline style on the badges section (style="margin-left:.75rem;") should be replaced with a utility class or gap on the parent container to keep styling out of the HTML demo markup.
- [!] **security:** All href='#' placeholder links should either point to real anchors or use aria-disabled and tabindex=-1 if non-functional, to avoid confusing keyboard and screen reader users.

---

## [other] Other

### `ivy.extra.css`

This is an optional CSS enhancement layer for the Ivy.css classless CSS framework, providing component-level polish and advanced styling. It adds UI components like buttons with variants, tooltips, dialogs, progress bars, badges, spinners, cards, callouts, and responsive tables. It also includes form enhancements, utility helpers, and mirrors the core theme switching system with additional surface and shadow tokens.

**Suggestions:**

- [+] **improvement:** Tooltip positioning using inset with mixed auto values and separate transform per placement is fragile and verbose. Consider using CSS anchor positioning (now baseline in modern browsers) or at least consolidate placement logic with CSS custom properties to reduce repetition across the four placement variants.
- [!] **security:** The data-tooltip attribute content is rendered via CSS attr() which is safe, but document that user-controlled data rendered into data-tooltip attributes must be HTML-escaped server-side to prevent attribute injection attacks when the attribute is set dynamically.
- [>] **performance:** The button selector list is repeated five times across hover, active, focus-visible, and disabled states. Grouping these using :is(button, [type=button], [type=submit], [type=reset], a[role=button]) would reduce selector parsing overhead and improve maintainability.
- [~] **refactor:** The !important declarations on variant selectors ([data-variant=primary], [data-variant=outline], etc.) indicate specificity conflicts with the base button rule. Restructuring so variants use a higher-specificity selector (e.g., button[data-variant=primary]) would eliminate the need for !important and make the cascade more predictable.
- [d] **docs:** Add a usage comment block near the top listing which HTML attributes are used as hooks (data-tooltip, data-placement, data-variant, data-size, data-theme, data-callout, etc.) so developers can quickly find all opt-in extension points without reading the full file.

---

