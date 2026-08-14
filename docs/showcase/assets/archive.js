/* archive.js — filter + sort for the fifty.
   All 50 tiles are in the DOM at build time (crawlable, works without JS).
   Filtering only toggles [hidden]; sorting reorders by appending existing nodes,
   so no markup is ever rebuilt and images never re-decode. */
(function () {
  'use strict';
  var grid = document.getElementById('cards');
  if (!grid) return;
  var cards = Array.prototype.slice.call(grid.children);
  var out = document.getElementById('count');
  var empty = document.getElementById('empty');
  var q = document.getElementById('q');
  var state = { sort: 'rank', arch: '', q: '' };

  var data = {};
  try {
    JSON.parse(document.getElementById('catalogue').textContent).forEach(function (r) {
      data[r.s] = r;
    });
  } catch (e) { /* catalogue optional; sorting falls back to DOM order */ }

  function luma(hex) {
    var h = (hex || '#000').replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    return 0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255);
  }

  var sorters = {
    rank: function (a, b) { return +a.dataset.rank - +b.dataset.rank; },
    name: function (a, b) {
      return (data[a.dataset.slug] || {}).n.localeCompare((data[b.dataset.slug] || {}).n);
    },
    industry: function (a, b) {
      var c = a.dataset.ind.localeCompare(b.dataset.ind);
      return c || (+a.dataset.rank - +b.dataset.rank);
    },
    light: function (a, b) {
      var la = luma(((data[a.dataset.slug] || {}).p || [])[0]);
      var lb = luma(((data[b.dataset.slug] || {}).p || [])[0]);
      return lb - la || (+a.dataset.rank - +b.dataset.rank);
    }
  };

  function apply() {
    var shown = 0;
    cards.forEach(function (c) {
      var ok = (!state.arch || c.dataset.arch === state.arch) &&
               (!state.q || c.dataset.q.indexOf(state.q) > -1);
      c.hidden = !ok;
      if (ok) shown++;
    });
    var sorted = cards.slice().sort(sorters[state.sort] || sorters.rank);
    var frag = document.createDocumentFragment();
    sorted.forEach(function (c) { frag.appendChild(c); });
    grid.appendChild(frag);
    out.textContent = shown === cards.length
      ? cards.length + ' pages'
      : shown + ' of ' + cards.length + ' pages';
    empty.hidden = shown !== 0;
    grid.hidden = shown === 0;
  }

  function group(attr, key) {
    document.querySelectorAll('[data-' + attr + ']').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('[data-' + attr + ']').forEach(function (o) {
          o.setAttribute('aria-pressed', String(o === b));
        });
        state[key] = b.dataset[attr];
        apply();
        sync();
      });
    });
  }
  group('sort', 'sort');
  group('arch', 'arch');

  var t;
  q.addEventListener('input', function () {
    clearTimeout(t);
    t = setTimeout(function () { state.q = q.value.trim().toLowerCase(); apply(); sync(); }, 110);
  });

  /* the current view is shareable and survives a back button */
  function sync() {
    var p = new URLSearchParams();
    if (state.sort !== 'rank') p.set('sort', state.sort);
    if (state.arch) p.set('archetype', state.arch);
    if (state.q) p.set('q', state.q);
    var s = p.toString();
    history.replaceState(null, '', s ? '?' + s + location.hash : location.pathname + location.hash);
  }

  (function restore() {
    var p = new URLSearchParams(location.search);
    state.sort = sorters[p.get('sort')] ? p.get('sort') : 'rank';
    state.arch = p.get('archetype') || '';
    state.q = (p.get('q') || '').toLowerCase();
    if (state.q) q.value = state.q;
    document.querySelectorAll('[data-sort]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.sort === state.sort));
    });
    document.querySelectorAll('[data-arch]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.arch === state.arch));
    });
    apply();
  })();
})();
