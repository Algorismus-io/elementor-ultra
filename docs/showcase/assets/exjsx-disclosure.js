/*!
 * exjsx-disclosure v1.0.0
 * Persistent "generated content" disclosure banner for the exjsx fictional demo archive.
 *
 * Self-contained. No dependencies. No network calls. No cookies. No tracking.
 * Renders inside a Shadow DOM so the host page's CSS cannot restyle, hide or
 * override it, and so this file's CSS cannot leak into the host design.
 *
 * Usage (either form):
 *   <script src="/assets/exjsx-disclosure.js" defer></script>
 *   ...auto-injects on DOMContentLoaded.
 *
 *   or place explicitly to control position in the DOM:
 *   <exjsx-disclosure></exjsx-disclosure>
 *
 * Attributes (all optional):
 *   data-name="Second Spring"     Fictional brand name, named in the notice.
 *   data-sector="menopause telehealth"
 *   data-href="https://exjsx.dev/disclosure/"   Link target for "What is this?"
 *   data-collapsible="false"      Default "true". "false" = bar can never be collapsed.
 *   data-label-title="true"       Prefix document.title with "[Fictional demo] ".
 *   data-position="top"           "top" (default) or "bottom".
 *
 * Accessibility contract (see ACCESSIBILITY.md for the test script):
 *   - First element in the body's reading order; a screen reader meets it before
 *     any page content.
 *   - Exposed as a labelled landmark (role="region", accessible name), not an
 *     alert — it must not interrupt, it must be discoverable.
 *   - The signal is carried by TEXT ("FICTIONAL DEMO", "AI-generated"), not by
 *     colour, not by an icon alone. The icon is aria-hidden decoration.
 *   - The full disclosure sentence stays in the accessibility tree even when the
 *     bar is visually collapsed, so a screen-reader user never gets less
 *     information than a sighted user.
 *   - Collapse control is a real <button> with aria-expanded/aria-controls,
 *     44x44px minimum target, visible :focus-visible ring.
 *   - Never removed from the DOM. Collapse leaves a labelled, readable badge.
 *   - Survives print and PDF export (see @media print).
 *   - Honours prefers-reduced-motion and forced-colors (Windows High Contrast).
 */
(function () {
  'use strict';

  if (window.customElements && window.customElements.get('exjsx-disclosure')) return;

  var STORAGE_KEY = 'exjsx-disclosure-collapsed';

  var SHEET = `
    :host {
      /* Isolate from the host page. Everything below is re-declared explicitly. */
      all: initial;
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      z-index: 2147483647;          /* above Elementor overlays, sticky navs, cookie bars */
      font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
                   Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 14px;
      line-height: 1.45;
      -webkit-font-smoothing: antialiased;
      text-align: left;
      direction: ltr;

      --bg: #17161B;
      --fg: #F4F3F1;
      --fg-dim: #B9B6B0;
      --accent: #FFC53D;
      --rule: rgba(255,255,255,0.22);
      --focus: #FFC53D;
    }
    :host([data-position="bottom"]) { bottom: 0; top: auto; }
    :host(:not([data-position="bottom"])) { top: 0; bottom: auto; }

    * { box-sizing: border-box; }

    .bar {
      background: var(--bg);
      color: var(--fg);
      /* Diagonal hatch = a second, non-colour channel carrying "this is marked
         content". Reads as a hazard/marker band even in greyscale. */
      border-bottom: 3px solid transparent;
      border-image: repeating-linear-gradient(
        135deg, var(--accent) 0 8px, var(--bg) 8px 16px) 3;
      box-shadow: 0 1px 12px rgba(0,0,0,0.32);
      padding: 9px 14px;
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    :host([data-position="bottom"]) .bar {
      border-bottom: 0;
      border-top: 3px solid transparent;
      border-image: repeating-linear-gradient(
        135deg, var(--accent) 0 8px, var(--bg) 8px 16px) 3;
      box-shadow: 0 -1px 12px rgba(0,0,0,0.32);
    }

    .icon { flex: 0 0 auto; width: 18px; height: 18px; display: block; }

    .tag {
      flex: 0 0 auto;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.09em;
      text-transform: uppercase;
      color: var(--bg);
      background: var(--accent);
      padding: 3px 7px;
      border-radius: 3px;
      white-space: nowrap;
    }

    .msg { flex: 1 1 320px; margin: 0; color: var(--fg); min-width: 0; }
    .msg b { font-weight: 700; color: #FFFFFF; }
    .msg .dim { color: var(--fg-dim); }

    a {
      color: var(--accent);
      text-decoration: underline;
      text-underline-offset: 2px;
      white-space: nowrap;
    }
    a:hover { text-decoration-thickness: 2px; }
    /* The link is the first tab stop in the bar, so its focus ring is the first
       thing a keyboard user sees on the page. The UA default is a 1px outline
       that all but disappears against this background. */
    a:focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; }

    .actions { flex: 0 0 auto; display: flex; align-items: center; gap: 4px; margin-left: auto; }

    button {
      appearance: none;
      background: transparent;
      color: var(--fg-dim);
      border: 1px solid var(--rule);
      border-radius: 4px;
      font: inherit;
      font-size: 12px;
      cursor: pointer;
      /* 44x44 hit area per WCAG 2.2 SC 2.5.8 Target Size (Minimum). */
      min-width: 44px;
      min-height: 44px;
      padding: 4px 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    button:hover { color: var(--fg); border-color: var(--fg-dim); }
    button:focus-visible {
      outline: 3px solid var(--focus);
      outline-offset: 2px;
      color: var(--fg);
    }

    /* ---- collapsed state: a badge, never nothing ---- */
    :host([data-state="collapsed"]) .bar {
      width: max-content;
      max-width: calc(100vw - 24px);
      margin: 10px;
      padding: 6px 8px 6px 10px;
      border-radius: 6px;
      border-image: none;
      border: 1px solid var(--accent);
      gap: 8px;
    }
    :host([data-state="collapsed"]) .msg { display: none; }
    :host([data-state="collapsed"]) { pointer-events: none; }
    :host([data-state="collapsed"]) .bar { pointer-events: auto; }

    /* ---- visually hidden but present for assistive tech ---- */
    .sr {
      position: absolute !important;
      width: 1px; height: 1px;
      margin: -1px; padding: 0; border: 0;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      overflow: hidden;
      white-space: nowrap;
    }

    @media (max-width: 640px) {
      :host { font-size: 13px; }
      .bar { padding: 8px 10px; gap: 8px; }
      .msg { flex-basis: 100%; order: 3; }
    }

    /* Screenshots and PDF exports must carry the label too — this is the
       surface most likely to be reshared out of context. */
    @media print {
      :host { position: static !important; }
      .bar {
        background: #FFFFFF !important;
        color: #000000 !important;
        border: 2px solid #000000 !important;
        border-image: none !important;
        box-shadow: none !important;
      }
      .msg, .msg b, .msg .dim, a { color: #000000 !important; }
      .tag { background: #000000 !important; color: #FFFFFF !important; }
      .actions { display: none !important; }
      :host([data-state="collapsed"]) .msg { display: block !important; }
    }

    @media (prefers-reduced-motion: no-preference) {
      button { transition: color 120ms ease, border-color 120ms ease; }
    }

    /* Windows High Contrast / forced colours: keep structure, drop our palette. */
    @media (forced-colors: active) {
      .bar { border: 2px solid CanvasText; border-image: none; }
      .tag { background: Highlight; color: HighlightText; forced-color-adjust: none; }
      button { border-color: CanvasText; }
      button:focus-visible { outline: 3px solid Highlight; }
    }
  `;

  var ICON =
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path fill="#FFC53D" d="M12 2.6 1.7 20.5h20.6L12 2.6Z"/>' +
    '<path fill="#17161B" d="M11 9.2h2v6h-2zM11 16.4h2v2h-2z"/>' +
    '</svg>';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var ExjsxDisclosure = (function () {
    function El() {
      var self = Reflect.construct(HTMLElement, [], El);
      self._root = self.attachShadow({ mode: 'open' });
      return self;
    }
    El.prototype = Object.create(HTMLElement.prototype);
    El.prototype.constructor = El;
    Object.setPrototypeOf(El, HTMLElement);

    El.prototype.connectedCallback = function () {
      var name = this.getAttribute('data-name') || '';
      var sector = this.getAttribute('data-sector') || '';
      var href = this.getAttribute('data-href') || 'https://exjsx.dev/disclosure/';
      var collapsible = this.getAttribute('data-collapsible') !== 'false';

      // The one sentence that does the legal work. Kept short enough to be read,
      // specific enough to be unambiguous: fictional entity, generated content,
      // no real business, nothing here is advice or an offer.
      var sectorBit = sector ? ' ' + esc(sector) : '';
      var sentence =
        (name
          ? '<b>' + esc(name) + '</b> is a <b>fictional business</b> that does not exist.'
          : 'The business shown on this page is <b>fictional</b> and does not exist.') +
        ' This' + sectorBit +
        ' page — its text, statistics, prices, reviews, people and images — was ' +
        '<b>generated by AI</b> as a design demonstration. ' +
        '<span class="dim">Nothing here is a real offer, a real endorsement, or professional advice.</span>';

      // Read verbatim by a screen reader; also the text a text-only crawler sees.
      var srSentence =
        (name
          ? name + ' is a fictional business that does not exist.'
          : 'The business shown on this page is fictional and does not exist.') +
        ' This page and everything on it — ' +
        'text, statistics, prices, reviews, named people, professional credentials, ' +
        'certifications and images — was generated by AI as a design demonstration for the ' +
        'exjsx toolchain. Nothing on this page is a real offer, a real endorsement, ' +
        'a real qualification, or professional advice. Any resemblance to a real ' +
        'organisation or person is unintended.';

      this._root.innerHTML =
        '<style>' + SHEET + '</style>' +
        '<div class="bar" id="exjsx-bar">' +
          ICON +
          '<span class="tag">Fictional demo</span>' +
          '<span class="sr">' + esc(srSentence) + '</span>' +
          '<p class="msg" aria-hidden="true">' + sentence +
            ' <a href="' + esc(href) + '">Full notice</a></p>' +
          (collapsible
            ? '<span class="actions">' +
                '<button type="button" id="exjsx-toggle" aria-expanded="true" ' +
                'aria-controls="exjsx-bar" aria-label="Collapse the fictional-content notice ' +
                'to a badge. The notice cannot be removed.">Minimise</button>' +
              '</span>'
            : '');

      // Landmark, not an alert. It must be findable, not interruptive.
      this.setAttribute('role', 'region');
      this.setAttribute('aria-label', 'Content notice: fictional AI-generated demonstration page');

      if (collapsible) {
        var btn = this._root.getElementById('exjsx-toggle');
        var self = this;
        btn.addEventListener('click', function () {
          var collapsed = self.getAttribute('data-state') === 'collapsed';
          self.setState(collapsed ? 'expanded' : 'collapsed');
        });
        try {
          if (sessionStorage.getItem(STORAGE_KEY) === '1') this.setState('collapsed', true);
        } catch (e) { /* storage blocked; stay expanded */ }
      }

      this._offset();
      var ro = window.ResizeObserver ? new ResizeObserver(this._offset.bind(this)) : null;
      if (ro) ro.observe(this._root.getElementById('exjsx-bar'));
      window.addEventListener('resize', this._offset.bind(this), { passive: true });

      if (this.getAttribute('data-label-title') === 'true') {
        if (document.title.indexOf('[Fictional demo]') !== 0) {
          document.title = '[Fictional demo] ' + document.title;
        }
      }
    };

    El.prototype.setState = function (state, silent) {
      var collapsed = state === 'collapsed';
      this.setAttribute('data-state', collapsed ? 'collapsed' : 'expanded');
      var btn = this._root.getElementById('exjsx-toggle');
      if (btn) {
        btn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
        btn.textContent = collapsed ? 'Notice' : 'Minimise';
        btn.setAttribute(
          'aria-label',
          collapsed
            ? 'Show the full fictional-content notice'
            : 'Collapse the fictional-content notice to a badge. The notice cannot be removed.'
        );
      }
      try { sessionStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0'); } catch (e) {}
      if (!silent) this._offset();
    };

    // Push the page down so the bar never covers the host design's own header.
    El.prototype._offset = function () {
      var bar = this._root.getElementById('exjsx-bar');
      if (!bar) return;
      var h = this.getAttribute('data-state') === 'collapsed' ? 0 : bar.offsetHeight;
      var pos = this.getAttribute('data-position') === 'bottom' ? 'bottom' : 'top';
      var de = document.documentElement;
      de.style.setProperty('--exjsx-disclosure-height', h + 'px');
      de.style.setProperty('scroll-padding-' + pos, h + 'px');
      document.body.style['padding' + (pos === 'top' ? 'Top' : 'Bottom')] = h + 'px';
    };

    return El;
  })();

  customElements.define('exjsx-disclosure', ExjsxDisclosure);

  // Auto-inject as the FIRST child of <body> so it leads the reading order.
  function boot() {
    if (document.querySelector('exjsx-disclosure')) return;
    var s = document.currentScript || document.querySelector('script[src*="exjsx-disclosure"]');
    var el = document.createElement('exjsx-disclosure');
    ['name', 'sector', 'href', 'collapsible', 'label-title', 'position'].forEach(function (k) {
      if (s && s.getAttribute('data-' + k)) el.setAttribute('data-' + k, s.getAttribute('data-' + k));
    });
    document.body.insertBefore(el, document.body.firstChild);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
