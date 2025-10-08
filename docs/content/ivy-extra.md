---
title: "Ivy Extra — Patterns Showcase"
heroSubtitle: "Buttons, details, tooltips, dialog, progress, forms, breadcrumbs, badges, busy."
styles: ["landing", "extra"]
mainClass: ""
footerText: "© 2025 Ivy — Extra demo."
layout: ivy-extra
---

<section aria-labelledby="buttons">
  <h2 id="buttons">Buttons (classless + data-variant)</h2>
  <p>
    <button>Default</button>
    <button data-variant="primary">Primary</button>
    <button data-variant="outline">Outline</button>
    <button data-variant="ghost">Ghost</button>
  </p>
  <p>
    <button data-variant="primary" data-size="sm">Small</button>
    <button data-variant="primary" data-size="lg">Large</button>
    <a role="button" href="#" data-variant="outline">Link as button</a>
  </p>
</section>

<section aria-labelledby="details">
  <h2 id="details">Details / Summary</h2>
  <details>
    <summary>What is Ivy Extra?</summary>
    <p>Ivy Extra is an optional polish layer over the classless core.</p>
  </details>
  <details open>
    <summary>Open by default</summary>
    <p>Use semantic elements, not div soup.</p>
  </details>
</section>

<section aria-labelledby="tooltips">
  <h2 id="tooltips">Tooltips (data attributes)</h2>
  <p>
    <button data-tooltip="Default (top)">Top</button>
    <button data-tooltip="On the right" data-placement="right">Right</button>
    <button data-tooltip="On the bottom" data-placement="bottom">Bottom</button>
    <button data-tooltip="On the left" data-placement="left">Left</button>
  </p>
</section>

<section aria-labelledby="dialog">
  <h2 id="dialog">Dialog</h2>
  <p><button id="openDialog" data-variant="primary">Open dialog</button></p>
  <dialog id="demoDialog">
    <article>
      <h3>Modal Title</h3>
      <p>This is a native <code>&lt;dialog&gt;</code> with Ivy Extra styles.</p>
      <p><button id="closeDialog">Close</button></p>
    </article>
  </dialog>
</section>

<section aria-labelledby="progress">
  <h2 id="progress">Progress</h2>
  <p><progress max="100" value="32">32%</progress></p>
</section>

<section aria-labelledby="tables">
  <h2 id="tables">Striped Table (opt-in)</h2>
  <table data-striped>
    <thead><tr><th>Task</th><th>Status</th><th>Owner</th></tr></thead>
    <tbody>
      <tr><td>Docs</td><td>In progress</td><td>Ron</td></tr>
      <tr><td>Site</td><td>Review</td><td>Alex</td></tr>
      <tr><td>Release</td><td>Planned</td><td>Sam</td></tr>
    </tbody>
    <tfoot><tr><td colspan="3">Totals: 3</td></tr></tfoot>
  </table>
</section>

<section aria-labelledby="forms">
  <h2 id="forms">Form Enhancements</h2>
  <p><label><input type="checkbox" role="switch" /> Enable notifications</label></p>
  <p><label>Volume <input type="range" value="60" /></label></p>
  <p><label>Upload <input type="file" /></label></p>
</section>

<section aria-labelledby="breadcrumbs">
  <h2 id="breadcrumbs">Breadcrumbs</h2>
  <nav aria-label="breadcrumb">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Library</a></li>
      <li aria-current="page">Data</li>
    </ol>
  </nav>
</section>

<section aria-labelledby="badges">
  <h2 id="badges">Badges (data-badge)</h2>
  <p>
    <span aria-label="Inbox" data-badge="4" class="demo-card">Inbox</span>
    <span aria-label="Alerts" data-badge="9" class="demo-card">Alerts</span>
  </p>
</section>

<section aria-labelledby="busy">
  <h2 id="busy">Busy / Spinner</h2>
  <div class="demo-card" aria-busy="true" style="min-height:3rem;">
    Loading… (spinner is positioned in the corner)
  </div>
</section>

<section aria-labelledby="muted">
  <h2 id="muted">Muted &amp; Inline Code</h2>
  <p class="muted">This is muted text for secondary information.</p>
  <p>Inline code tweak: <code>npm run build</code></p>
</section>
