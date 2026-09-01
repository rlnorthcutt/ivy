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
