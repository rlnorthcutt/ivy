# TODO

Tracked items for future releases. Not in priority order.

---

## Before next release

- [ ] **CDN / npm publishing** — Publish to npm so jsDelivr and unpkg links work out of the box. Update README with CDN `<link>` tags once available.
- [ ] **Docs update** — Refresh `docs/` pages to reflect 1.1.1 changes: new green palette, button behavior, renamed tokens (`--space-xs` etc.), `--success`.
- [ ] **Lattice docs** — Finalize Lattice CSS, then add joint usage examples in `docs/`.
- [ ] **`color-mix()` fallbacks** — Investigate whether graceful degradation is needed for older Safari (<16.2). Current browser support is ~93%. Add a note or polyfill guidance if targeting broader audiences.

## Future enhancements

- [ ] **Dark mode secondary color** — Evaluate whether `--color-secondary-dark` (`#d64c1d` orange) has sufficient contrast as a text/link color on dark backgrounds. Consider a brighter variant for dark mode.
- [ ] **Container queries** — Explore replacing some breakpoint-based responsive patterns (e.g. `table[data-stack]`) with container queries for better composability inside layouts.
- [ ] **`@starting-style` for dialog** — Add open/close animations to `<dialog>` using `@starting-style` once browser support is sufficient (~92% as of early 2026).
- [ ] **Accordion pattern** — Consider a multi-`details` accordion variant in Extra using `:has()`.
- [ ] **Range input fill without JS** — Track CSS progress on reading `<input>` value natively; remove the `--range-progress` JS requirement if a pure-CSS solution stabilizes.
- [ ] **`gofpdf` note** — (sitemapExport project) Migrate away from archived `jung-kurt/gofpdf` to an active fork.
