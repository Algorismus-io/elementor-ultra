/* case.js — viewport toggle for the sandboxed frame.
   The iframe is never re-created (that would reload the frozen site); only the
   wrapper's width class changes, so switching desktop/mobile is instant and the
   page inside keeps its scroll position. */
(function () {
  'use strict';
  function seg(attr, onPick) {
    var buttons = document.querySelectorAll('[data-' + attr + ']');
    if (!buttons.length) return;
    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        buttons.forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
        onPick(b.dataset[attr] === 'mobile');
      });
    });
  }

  var wrap = document.getElementById('stagewrap');
  if (wrap) seg('vp', function (mobile) { wrap.classList.toggle('is-mobile', mobile); });

  /* Capture plate: both images ship in the markup so the alternate view is
     instant and both stay in the page source for crawlers. */
  var caps = document.getElementById('caps');
  if (caps) {
    var stage = caps.querySelector('.capstage');
    var d = caps.querySelector('.cap-desktop');
    var m = caps.querySelector('.cap-mobile');
    var label = caps.querySelector('[data-cap-label]');
    var dims = caps.querySelector('[data-cap-dims]');
    var text = { desktop: [label.textContent, dims.textContent] };
    seg('cap', function (mobile) {
      stage.classList.toggle('is-mobile', mobile);
      d.hidden = mobile;
      m.hidden = !mobile;
      caps.querySelector('.scrollplate').scrollTop = 0;
      if (mobile) {
        label.textContent = 'Mobile';
        dims.innerHTML = caps.dataset.mobileDims || '390';
      } else {
        label.textContent = text.desktop[0];
        dims.textContent = text.desktop[1];
      }
    });
  }
})();
