/** The chrome: fonts, mode switch, ticker, index rail, ghost numerals, scroll reveals.
 *  One carrier — everything the spec-poster needs that isn't content. */

export const Chrome = ({ theme: t }) => (
  <html>{`
<style>
  @font-face{font-family:'Meso';src:url('/wp-content/uploads/fonts/MesoTRIAL-Regular.otf');font-weight:400;font-display:swap}
  @font-face{font-family:'Meso';src:url('/wp-content/uploads/fonts/MesoTRIAL-Book.otf');font-weight:350;font-display:swap}
  @font-face{font-family:'Lay';src:url('/wp-content/uploads/fonts/LayGrotesk-Regular.otf');font-weight:400;font-display:swap}
  @font-face{font-family:'Lay';src:url('/wp-content/uploads/fonts/LayGrotesk-Medium.otf');font-weight:500;font-display:swap}
  @font-face{font-family:'Lay';src:url('/wp-content/uploads/fonts/LayGrotesk-Bold.otf');font-weight:700;font-display:swap}
  @font-face{font-family:'GeistM';src:url('/wp-content/uploads/fonts/GeistMono-Regular.ttf');font-weight:400;font-display:swap}
  @font-face{font-family:'GeistM';src:url('/wp-content/uploads/fonts/GeistMono-Medium.ttf');font-weight:500;font-display:swap}

  /* ---- the switch ---- */
  #agent-surface{display:none}
  body.agent-mode #agent-surface{display:flex}
  body.agent-mode #human-surface{display:none}
  body.agent-mode{background:${t.color.stage} !important}
  .ultra-switch{position:fixed;top:18px;right:20px;z-index:9999;display:flex;align-items:center;
    border:2px solid ${t.color.ink};border-radius:999px;overflow:hidden;background:${t.color.paper};
    font-family:'GeistM',ui-monospace,monospace;font-size:12px;letter-spacing:.08em}
  .ultra-switch button{appearance:none;border:0;background:transparent;color:${t.color.dim};
    padding:9px 16px;cursor:pointer;font:inherit;letter-spacing:inherit}
  .ultra-switch button.on{background:${t.color.ink};color:${t.color.paper}}
  body.agent-mode .ultra-switch{border-color:${t.color.goBright};background:${t.color.stage}}
  .ultra-switch button:focus-visible,.chrig-tick:focus-visible,.chrig-card:focus-visible,#chip-row>div:focus-visible,.ultra-rail a:focus-visible,.cmd-copy:focus-visible{outline:2.5px solid #2F6BFF;outline-offset:2px}
  body.agent-mode .ultra-switch button{color:${t.color.termDim}}
  body.agent-mode .ultra-switch button.on{background:${t.color.goBright};color:${t.color.stage}}
  #human-surface,#agent-surface{animation:ultra-fade .45s ease}
  @keyframes ultra-fade{from{opacity:0}to{opacity:1}}

  /* ---- hero: logo strip + mega heading ---- */
  .agent-logos{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:4px 0 10px;
    font-family:'GeistM',ui-monospace,monospace}
  .agent-logos .al-label{font-size:11px;letter-spacing:.16em;color:${t.color.dim};margin-right:6px}
  .al-chip{display:inline-flex;align-items:center;gap:8px;border:1.5px solid ${t.color.ink};
    border-radius:999px;padding:8px 14px;font-size:12.5px;color:${t.color.ink};background:#FFFFFF;
    transition:transform .25s}
  .al-chip:hover{transform:translateY(-3px)}
  .al-chip img{width:16px;height:16px;display:block}
  .al-chip.al-any{border-style:dashed;color:${t.color.dim}}
  .mega{font-family:'Meso','Anton',sans-serif;font-weight:400;font-size:min(6.8vw,92px);
    line-height:1.02;text-transform:uppercase;color:${t.color.ink};margin:6px 0 0;letter-spacing:.005em}
  .mega .l2{-webkit-text-stroke:2.5px ${t.color.ink};color:transparent}
  .mega .pencil{-webkit-text-stroke:0;color:${t.color.ink};font-family:'Apple Color Emoji','Segoe UI Emoji',sans-serif}
  .mega .e-mark{height:.78em;width:auto;vertical-align:-6%;display:inline-block}
  @media(max-width:640px){.mega{font-size:11.4vw;line-height:1.06}
    .mega .l2{-webkit-text-stroke:1.5px ${t.color.ink}}
    .agent-logos .al-label{width:100%}.al-chip{padding:6px 11px;font-size:11px}}

  /* ---- CTA buttons: whole box clickable (stretched link) ---- */
  #cta-row>div,#cta-close>div,#cta-fifty>div{position:relative;cursor:pointer}
  #cta-row>div a::after,#cta-close>div a::after,#cta-fifty>div a::after{content:'';position:absolute;inset:0}

  /* ---- display treatments ---- */
  #human-surface h1,#human-surface h2{text-transform:uppercase}
  #h1-stroke h2{-webkit-text-stroke:2.5px ${t.color.ink};color:transparent !important}
  @media(max-width:640px){#h1-stroke h2{-webkit-text-stroke:1.5px ${t.color.ink}}}

  /* ---- fixed header bar ---- */
  #topnav{position:fixed !important;top:0;left:0;right:0;z-index:9990;max-width:none !important;
    width:100% !important;background:${t.color.paper};border-bottom:2px solid ${t.color.ink};
    padding:16px 200px 16px 28px !important}
  #human-surface{padding-top:74px}
  .ultra-switch{top:13px}
  body.agent-mode #agent-surface{padding-top:64px}
  @media(max-width:640px){
    #topnav{padding:13px 150px 13px 16px !important}
    #topnav p,#topnav div.elementor-widget-container p{font-size:15px !important}
    .ultra-switch{top:10px;right:10px}
    .ultra-switch button{padding:7px 11px;font-size:10.5px}
    #human-surface{padding-top:60px}
  }
  /* ---- ticker ---- */
  .ultra-ticker{width:100%;overflow:hidden;border-top:2px solid ${t.color.ink};border-bottom:2px solid ${t.color.ink};
    background:${t.color.paper};padding:12px 0}
  .ultra-ticker .track{display:inline-flex;white-space:nowrap;animation:tick 26s linear infinite;will-change:transform}
  .ultra-ticker span{font-family:'Meso','Anton',sans-serif;font-size:26px;letter-spacing:.04em;
    color:${t.color.ink};text-transform:uppercase;padding-right:38px}
  .ultra-ticker span em{font-style:normal;color:${t.color.go}}
  @keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}

  #proof,#fifty,#seam,#loop,#stack,#start{position:relative}
  /* ---- index rail ---- */
  .ultra-rail{position:fixed;left:22px;top:50%;transform:translateY(-50%);z-index:9998;
    display:flex;flex-direction:column;gap:14px;font-family:'GeistM',monospace;font-size:11px;letter-spacing:.12em}
  .ultra-rail a{color:${t.color.dim};text-decoration:none;display:flex;gap:8px;align-items:center;transition:color .25s}
  .ultra-rail a::before{content:'';width:18px;height:2px;background:${t.color.line};transition:all .25s}
  .ultra-rail a.on{color:${t.color.ink}}
  .ultra-rail a.on::before{background:${t.color.go};width:30px}
  @media(max-width:1280px){.ultra-rail{display:none}}
  body.agent-mode .ultra-rail{display:none}

  /* ---- loop strip corners ---- */
  #loop-strip{overflow:hidden !important;border-radius:14px !important}
  #loop-strip>div:first-child{border-radius:12px 0 0 12px}
  #loop-strip>div:last-child{border-radius:0 12px 12px 0}
  @media(max-width:899px){#loop-strip>div:first-child{border-radius:12px 12px 0 0}
    #loop-strip>div:last-child{border-radius:0 0 12px 12px}}

  /* ---- the eight-film switcher ----
     One control per film, in the pill language of .al-chip. The live one is marked three
     ways so colour is never the only signal: ink fill, an offset shadow, and the
     "▶ NOW PLAYING" tag that only the active button shows (aria-pressed says the same
     thing to a screen reader). Real <button>s, so tab and Enter/Space work by default. */
  .film-switch{display:flex;flex-wrap:wrap;gap:8px;width:100%;margin:2px 0 6px}
  .fs-b{appearance:none;display:inline-flex;align-items:center;gap:9px;cursor:pointer;
    border:1.5px solid ${t.color.ink};border-radius:999px;background:#FFFFFF;color:${t.color.ink};
    padding:9px 15px;font-family:'Lay',sans-serif;font-size:13.5px;line-height:1;
    transition:transform .2s,box-shadow .2s,background .2s,color .2s}
  .fs-b .fs-n{font-family:'GeistM',ui-monospace,monospace;font-size:10.5px;letter-spacing:.12em;color:${t.color.dim}}
  .fs-b .fs-now{display:none}
  .fs-b:hover{transform:translateY(-2px);box-shadow:3px 3px 0 ${t.color.ink}}
  .fs-b.on{background:${t.color.ink};color:${t.color.paper};box-shadow:4px 4px 0 ${t.color.go}}
  .fs-b.on .fs-n{color:${t.color.goBright}}
  .fs-b.on .fs-now{display:inline-flex;align-items:center;font-family:'GeistM',ui-monospace,monospace;
    font-size:9.5px;letter-spacing:.12em;color:${t.color.goBright};
    border-left:1px solid rgba(250,248,243,.3);padding-left:9px}
  .fs-b.on .fs-now::before{content:'\\25b6';margin-right:5px;font-size:8px}
  .fs-b:focus-visible{outline:2.5px solid #2F6BFF;outline-offset:2px}
  @media(max-width:640px){
    .film-switch{gap:6px}
    .fs-b{padding:8px 12px;font-size:12.5px;gap:7px}
    .fs-b .fs-n{font-size:9.5px}
    .fs-b.on .fs-now{font-size:8.5px;padding-left:7px}
  }

  /* ---- chapter rig ----
     The chapters are an ordinary vertical list at their natural height, in normal
     document flow. The film pins beside them with position:sticky and travels its
     own grid area — no runway, no transform track, no masked window, no scroll-jack.
     Every chapter is reachable by plain scrolling, and by clicking a card or a tick. */
  .chrig-outer{width:100%}
  .chrig{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:26px;width:100%;
    align-items:start}
  /* align-self:start (inherited from align-items) keeps the stage content-height, so it
     has its whole grid area — the height of the chapter column — to stick through. */
  .chrig-stage{position:sticky;top:max(86px,calc(50vh - 250px))}
  .chrig-chapters-vp{position:relative}
  .chrig-frame{background:${t.color.ink};border-radius:18px;padding:10px;position:relative;transform:rotate(-.4deg)}
  .chrig-frame video{width:100%;display:block;border-radius:10px;background:#000}
  .chrig-rail{position:relative;height:8px;margin:14px 6px 4px;background:#26262E;border-radius:4px;cursor:pointer}
  .chrig-progress{position:absolute;left:0;top:0;bottom:0;background:${t.color.goBright};border-radius:4px;width:0;opacity:.85}
  .chrig-tick{position:absolute;top:-4px;width:2.5px;height:16px;background:${t.color.paper};border:0;padding:0;
    cursor:pointer;opacity:.55;transition:opacity .2s,transform .2s}
  .chrig-tick:hover{opacity:1;transform:scaleY(1.15)}
  .chrig-tick.on{opacity:1;background:${t.color.goBright};box-shadow:0 0 0 2px rgba(40,200,64,.35)}
  .chrig-under{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 8px 4px}
  .chrig-cap{font-family:'GeistM',monospace;font-size:11.5px;letter-spacing:.06em;color:${t.color.paper}}
  #chrig-full{appearance:none;border:1.5px solid ${t.color.goBright};background:transparent;color:${t.color.goBright};
    border-radius:999px;padding:7px 14px;font-family:'GeistM',monospace;font-size:11.5px;letter-spacing:.1em;cursor:pointer;white-space:nowrap}
  #chrig-full:hover{background:${t.color.goBright};color:${t.color.stage}}
  .chrig-chapters{display:flex;flex-direction:column;gap:16px;padding:0}
  .chrig-card{border:1.5px solid ${t.color.line};border-radius:14px;padding:18px 20px;background:#FBFAF5;
    cursor:pointer;transition:background .4s,border-color .4s,box-shadow .4s}
  .chrig-card.on{background:#FFFFFF;border-color:${t.color.ink};box-shadow:6px 6px 0 ${t.color.ink}}
  /* STREAM mode (the film's origin refuses Range, so the chapters cannot seek it):
     drop the affordance rather than offer a click that does nothing. */
  .chrig-stream .chrig-card{cursor:default}
  .chrig-tick[disabled]{cursor:default;pointer-events:none}
  .cc-top{display:flex;justify-content:space-between;gap:10px;font-family:'GeistM',monospace;font-size:11px;letter-spacing:.12em}
  .cc-n{color:${t.color.go}} .cc-at{color:${t.color.dim}}
  .cc-t{font-family:'Meso','Anton',sans-serif;font-size:27px;text-transform:uppercase;color:${t.color.ink};margin:8px 0 6px;line-height:1.05}
  .cc-note{font-family:'Lay',sans-serif;font-size:14px;line-height:1.6;color:${t.color.dim};margin:0 0 10px}
  .cc-log{display:block;font-family:'GeistM',monospace;font-size:11.5px;color:${t.color.goBright};
    background:${t.color.stage};border-radius:8px;padding:8px 12px;white-space:pre-wrap;word-break:break-word}
  @media(max-width:899px){
    /* same list, stacked: the film pins under the masthead, the chapters read below it */
    .chrig{display:flex;flex-direction:column;gap:14px}
    .chrig-chapters-vp{min-width:0;max-width:100%;width:100%}
    .chrig-stage{position:sticky;top:58px;z-index:3;background:${t.color.paper};padding-bottom:8px}
    .chrig-frame{transform:none}
    .chrig-chapters{gap:12px;max-width:100%}
    .chrig-card{padding:14px 16px}
    .chrig-card.on{box-shadow:3px 3px 0 ${t.color.ink}}
    .cc-t{font-size:21px;margin:7px 0 6px}
    .cc-note{font-size:13.5px}
    .cc-log{font-size:11px}
    .cc-top{font-size:10px}
    .chrig-cap{font-size:10px}
  }

  #chip-row>div{position:relative;transition:transform .25s,box-shadow .25s}
  #chip-row>div.film-on{box-shadow:5px 5px 0 ${t.color.ink};transform:translateY(-3px)}
  #chip-row>div.film-on::after{content:'\\25b6  IN PLAYER';position:absolute;right:10px;bottom:8px;
    font-family:'GeistM',monospace;font-size:9px;letter-spacing:.1em;opacity:.85}
  .chip-go{position:absolute;top:8px;right:10px;font-size:13px;text-decoration:none;opacity:.7;color:inherit}
  .chip-go:hover{opacity:1}
  /* ---- exhibits: rotation + stamp ---- */
  #film-frame{transform:rotate(-.6deg);position:relative}
  #seam-blob{transform:rotate(-.8deg)}
  #seam-jsx{transform:rotate(.7deg)}
  .ultra-stamp{position:absolute;right:26px;top:-26px;z-index:5;transform:rotate(7deg);
    border:2.5px solid ${t.color.go};color:${t.color.go};border-radius:999px;padding:10px 18px;
    font-family:'GeistM',monospace;font-size:12px;letter-spacing:.14em;background:${t.color.paper}}

  #chip-row>div{flex:1 1 240px !important;min-width:230px}
  #chip-row>div:hover{transform:translateY(-4px);transition:transform .3s}
  @media(max-width:640px){#chip-row>div{flex:1 1 calc(50% - 6px) !important;min-width:0}}

  /* ---- 02 / the fifty: same frame as the film rig, same chip language as #chip-row ---- */
  .fifty-film{background:${t.color.ink};border-radius:18px;padding:10px;width:100%;
    position:relative;transform:rotate(-.4deg)}
  .fifty-film video{width:100%;display:block;border-radius:10px;background:#000;aspect-ratio:16/9}
  .fifty-under{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 8px 4px;flex-wrap:wrap}
  .fifty-cap{font-family:'GeistM',monospace;font-size:11.5px;letter-spacing:.06em;color:${t.color.paper}}
  #fifty-play{appearance:none;border:1.5px solid ${t.color.goBright};background:transparent;color:${t.color.goBright};
    border-radius:999px;padding:7px 14px;font-family:'GeistM',monospace;font-size:11.5px;letter-spacing:.1em;
    cursor:pointer;white-space:nowrap}
  #fifty-play:hover{background:${t.color.goBright};color:${t.color.stage}}
  #fifty-play:focus-visible,#fifty-row>div:focus-visible{outline:2.5px solid #2F6BFF;outline-offset:2px}
  #fifty-row>div{position:relative;flex:1 1 205px !important;min-width:190px;
    transition:transform .25s,box-shadow .25s}
  #fifty-row>div:hover{transform:translateY(-4px);box-shadow:5px 5px 0 ${t.color.ink}}
  #fifty-row>div a::after{content:'';position:absolute;inset:0}
  @media(max-width:640px){
    .fifty-film{transform:none}
    #fifty-row>div{flex:1 1 calc(50% - 6px) !important;min-width:0}
  }
  /* ---- seam multiplayer ---- */
  .mp-cursor{position:absolute;left:0;top:0;z-index:7;pointer-events:none;
    will-change:transform;transform:translate(40px,40px)}
  .mp-cursor svg{display:block;filter:drop-shadow(0 2px 5px rgba(0,0,0,.3))}
  .mp-pill{display:inline-flex;align-items:center;gap:6px;margin-left:14px;margin-top:-4px;
    color:#fff;font-family:'GeistM',monospace;font-size:11px;letter-spacing:.05em;
    padding:4px 10px;border-radius:999px;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.25)}
  .mp-pill img{width:12px;height:12px;display:block}
  .mp-status{opacity:1;font-weight:400;margin-left:2px}
  @media(pointer:fine){.mp-zone,.mp-zone *{cursor:none !important}}
  .mp-you{transition:none;opacity:0;z-index:8}
  #seam-blob{position:relative;overflow:hidden}
  .mp-scanline{position:absolute;left:0;right:0;top:-24px;height:20px;pointer-events:none;
    background:linear-gradient(to bottom,transparent,rgba(31,157,68,.14),transparent);opacity:0}
  .mp-scanline.run{animation:mp-scan 1.6s ease-in-out}
  @keyframes mp-scan{0%{top:0;opacity:1}100%{top:96%;opacity:0}}
  .mp-sel{background:rgba(47,107,255,.35);border-radius:3px}
  .mp-pin{position:absolute;left:0;top:0;width:2.5px;height:16px;background:#D97757;z-index:7;
    pointer-events:none;opacity:0;transition:opacity .15s}
  .mp-pin::after{content:'';position:absolute;top:-5px;left:-2.2px;width:7px;height:7px;
    border-radius:2px;background:#D97757}
  .mp-pin.show{opacity:1}
  #seam-jsx-pre ::selection{background:rgba(217,119,87,.6);color:#FFFFFF}
  #seam-jsx-pre pre::selection{background:rgba(217,119,87,.6);color:#FFFFFF}
  .mp-you.show{opacity:1}
  #jsx-caret.on::after{content:'▍';color:#28C840;animation:mp-blink .8s step-end infinite}
  @keyframes mp-blink{50%{opacity:0}}
  .mp-hl{background:rgba(217,119,87,.35);border-radius:3px}
  .mp-flash-green{box-shadow:0 0 0 2.5px #28C840 !important;transition:box-shadow .3s}
  .mp-flash-amber{box-shadow:0 0 0 2.5px #D97757 !important;transition:box-shadow .3s}
  @media(max-width:899px){
    #seam{overflow:hidden}
    #seam-blob,#seam-jsx{flex-basis:auto !important}
    .mp-cursor svg{width:15px;height:15px}
    .mp-pill{font-size:9.5px;padding:3px 8px;margin-left:9px;gap:4px}
    .mp-pill img{width:10px;height:10px}
    .mp-you{display:none !important}
  }

  /* ---- scroll reveals ---- */
  @media (prefers-reduced-motion: no-preference){
    body:not(.agent-mode) #human-surface .rv{opacity:.001;transform:translateY(30px);
      transition:opacity .7s ease,transform .7s cubic-bezier(.22,1,.36,1)}
    body:not(.agent-mode) #human-surface .rv.rv-in{opacity:1;transform:none}
  }
</style>
<div class="ultra-switch" role="region" aria-label="Reader mode">
  <button type="button" id="us-human" class="on">HUMAN</button>
  <button type="button" id="us-agent">AGENT</button>
</div>
<nav class="ultra-rail" aria-label="Sections">
  <a href="#hero" data-s="hero">00</a><a href="#proof" data-s="proof">01</a>
  <a href="#fifty" data-s="fifty">02</a><a href="#seam" data-s="seam">03</a>
  <a href="#loop" data-s="loop">04</a><a href="#stack" data-s="stack">05</a>
  <a href="#start" data-s="start">06</a>
</nav>
<script>
(function(){
  var KEY='ultra-mode';
  function apply(m){
    document.body.classList.toggle('agent-mode', m==='agent');
    var as0=document.getElementById('agent-surface');
    var ah=document.getElementById('agent-h1');
    if(m==='agent'&&as0&&!ah){
      ah=document.createElement('h1');ah.id='agent-h1';
      ah.style.cssText='position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap';
      ah.textContent='Elementor Ultra \u2014 machine surface';
      as0.insertBefore(ah,as0.firstChild);
    } else if(m!=='agent'&&ah){ ah.remove(); }
    document.getElementById('us-human').classList.toggle('on', m!=='agent');
    document.getElementById('us-agent').classList.toggle('on', m==='agent');
    try{localStorage.setItem(KEY,m)}catch(e){}
  }
  var inEditor=document.body.classList.contains('elementor-editor-active');
  var q=new URLSearchParams(location.search).get('mode');
  var saved=null; try{saved=localStorage.getItem(KEY)}catch(e){}
  apply(!inEditor&&(q||saved||(navigator.webdriver?'agent':'human'))==='agent'?'agent':'human');
  function setRoles(){
    var hs=document.getElementById('human-surface'),as=document.getElementById('agent-surface');
    if(hs)hs.setAttribute('role','main');
    if(as)as.setAttribute('role','main');
    apply(document.body.classList.contains('agent-mode')?'agent':'human');
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setRoles);
  else setRoles();
  if(inEditor){var sw=document.querySelector('.ultra-switch');if(sw)sw.style.display='none'}
  document.getElementById('us-human').addEventListener('click',function(){apply('human')});
  document.getElementById('us-agent').addEventListener('click',function(){apply('agent')});
  document.addEventListener('keydown',function(e){
    if(e.target && /input|textarea|select/i.test(e.target.tagName))return;
    if(e.key==='a'||e.key==='A')apply('agent');
    if(e.key==='h'||e.key==='H')apply('human');
  });
  // reveals: only direct section children, with a settle fallback
  var secs=['hero','proof','fifty','seam','loop','stack','start','colophon'];
  var kids=[];
  secs.forEach(function(id){var s=document.getElementById(id);if(!s)return;
    Array.prototype.forEach.call(s.children,function(c){if(c.tagName==='DIV'){c.classList.add('rv');kids.push(c)}});});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    kids.forEach(function(k){io.observe(k)});
    setTimeout(function(){kids.forEach(function(k){k.classList.add('rv-in')})},6000);
  } else { kids.forEach(function(k){k.classList.add('rv-in')}); }
  // rail active state
  var links=document.querySelectorAll('.ultra-rail a');
  var so=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.dataset.s===e.target.id)})}})},{threshold:.25});
  secs.slice(0,7).forEach(function(id){var s=document.getElementById(id);if(s)so.observe(s)});
})();
</script>
`}</html>
);

export const Ticker = () => (
  <html>{`
<div class="ultra-ticker" aria-hidden="true"><div class="track">
  <span>One prompt in <em>·</em> Elementor site out <em>·</em> typed components <em>·</em> live reload <em>·</em> verified at desktop, wide &amp; mobile <em>·</em> zero human edits <em>·</em> free &amp; MIT <em>·</em></span>
  <span>One prompt in <em>·</em> Elementor site out <em>·</em> typed components <em>·</em> live reload <em>·</em> verified at desktop, wide &amp; mobile <em>·</em> zero human edits <em>·</em> free &amp; MIT <em>·</em></span>
</div></div>`}</html>
);
