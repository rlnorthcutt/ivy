// Palette picker — swaps the theme files in themes/ and remembers the choice.
const THEMES = [
  ['default', 'Ivy default'],
  ['arbor-yellow-green', 'Arbor'],
  ['carnival-blue-red', 'Carnival'],
  ['coastal-blue-sky', 'Coastal'],
  ['mesa-adobe-blue', 'Mesa'],
  ['petal-blush-pink', 'Petal'],
  ['pulse-blue-pink', 'Pulse'],
  ['solstice-ember-red', 'Solstice'],
  ['sovereign-gold-navy', 'Sovereign'],
  ['still-waters-purple', 'Still Waters'],
  ['sythwave-pink-purple', 'Synthwave']
];
function applyPalette(id) {
  let link = document.getElementById('ivy-docs-palette-link');
  if (id === 'default') { if (link) link.remove(); return; }
  if (!link) {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'ivy-docs-palette-link';
    document.head.appendChild(link);
  }
  link.href = 'themes/' + id + '.css';
}
const select = document.getElementById('palette');
let saved = null;
try { saved = localStorage.getItem('ivy-docs-palette'); } catch (e) {}
for (const [id, label] of THEMES) {
  const opt = document.createElement('option');
  opt.value = id; opt.textContent = label;
  if (id === (saved || 'default')) opt.selected = true;
  select.appendChild(opt);
}
applyPalette(saved || 'default');
select.addEventListener('change', () => {
  try { localStorage.setItem('ivy-docs-palette', select.value); } catch (e) {}
  applyPalette(select.value);
});

// Preview/Source toggle for full example pages — fetches the page's own
// HTML over the network and shows the literal source of the content
// element next to its rendered output, so the two never drift apart.
function initSourceToggle({ contentId, previewBtnId, sourceBtnId }) {
  const content = document.getElementById(contentId);
  const previewBtn = document.getElementById(previewBtnId);
  const sourceBtn = document.getElementById(sourceBtnId);
  if (!content || !previewBtn || !sourceBtn) return;

  const originalChildren = Array.from(content.children);
  let sourcePre = null;
  let loading = null;

  function extractSource(html, id) {
    const openRe = new RegExp('<([a-zA-Z0-9-]+)([^>]*\\bid=["\']' + id + '["\'][^>]*)>');
    const m = html.match(openRe);
    if (!m) return null;
    const tag = m[1];
    const tagRe = new RegExp('</?' + tag + '\\b[^>]*>', 'g');
    tagRe.lastIndex = m.index;
    let depth = 0, end = -1, mm;
    while ((mm = tagRe.exec(html))) {
      if (mm[0][1] === '/') { depth--; if (depth === 0) { end = mm.index + mm[0].length; break; } }
      else depth++;
    }
    return end === -1 ? null : html.slice(m.index, end);
  }

  function ensureSource() {
    if (loading) return loading;
    loading = fetch(location.pathname).then((res) => res.text()).then((html) => {
      const raw = extractSource(html, contentId) || content.outerHTML;
      sourcePre = document.createElement('pre');
      sourcePre.hidden = true;
      const code = document.createElement('code');
      code.textContent = raw;
      sourcePre.appendChild(code);
      content.appendChild(sourcePre);
    }).catch(() => {
      sourcePre = document.createElement('pre');
      sourcePre.hidden = true;
      sourcePre.textContent = 'Source unavailable — open this page over http(s) rather than as a local file.';
      content.appendChild(sourcePre);
    });
    return loading;
  }

  function show(which) {
    const isPreview = which === 'preview';
    originalChildren.forEach((el) => { el.hidden = !isPreview; });
    if (sourcePre) sourcePre.hidden = isPreview;
    previewBtn.setAttribute('aria-pressed', String(isPreview));
    previewBtn.setAttribute('data-variant', isPreview ? 'primary' : 'ghost');
    sourceBtn.setAttribute('aria-pressed', String(!isPreview));
    sourceBtn.setAttribute('data-variant', !isPreview ? 'primary' : 'ghost');
  }

  previewBtn.addEventListener('click', () => show('preview'));
  sourceBtn.addEventListener('click', () => { ensureSource().then(() => show('source')); });
}
