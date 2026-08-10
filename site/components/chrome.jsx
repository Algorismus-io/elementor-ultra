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

  /* ---- ghost numerals ---- */
  #proof,#seam,#loop,#stack,#start{position:relative;overflow:visible}
  #proof::before,#seam::before,#loop::before,#stack::before,#start::before{
    position:absolute;right:-6px;top:-30px;font-family:'Meso','Anton',sans-serif;font-size:300px;
    line-height:1;color:${t.color.ink};opacity:.05;pointer-events:none;z-index:0}
  #proof::before{content:'01'} #seam::before{content:'02'} #loop::before{content:'03'}
  #stack::before{content:'04'} #start::before{content:'05'}
  @media(max-width:900px){#proof::before,#seam::before,#loop::before,#stack::before,#start::before{font-size:140px;top:-14px}}

  /* ---- index rail ---- */
  .ultra-rail{position:fixed;left:22px;top:50%;transform:translateY(-50%);z-index:9998;
    display:flex;flex-direction:column;gap:14px;font-family:'GeistM',monospace;font-size:11px;letter-spacing:.12em}
  .ultra-rail a{color:${t.color.dim};text-decoration:none;display:flex;gap:8px;align-items:center;transition:color .25s}
  .ultra-rail a::before{content:'';width:18px;height:2px;background:${t.color.line};transition:all .25s}
  .ultra-rail a.on{color:${t.color.ink}}
  .ultra-rail a.on::before{background:${t.color.go};width:30px}
  @media(max-width:1280px){.ultra-rail{display:none}}
  body.agent-mode .ultra-rail{display:none}

  /* ---- chapter rig ---- */
  .chrig-outer{height:485vh;width:100%}
  .chrig{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:26px;width:100%;
    position:sticky;top:86px;align-items:start}
  .chrig-stage{}
  .chrig{transition:grid-template-columns .7s cubic-bezier(.22,1,.36,1)}
  .chrig.finale{grid-template-columns:minmax(0,1fr) minmax(0,0.001fr);gap:0}
  .chrig.finale .chrig-chapters-vp{opacity:0;pointer-events:none;transition:opacity .45s ease}
  .chrig.finale .chrig-frame{transform:none}
  .chrig-chapters-vp{transition:opacity .45s ease}
  .chrig-chapters-vp{height:calc(100vh - 140px);overflow:hidden;position:relative;
    -webkit-mask-image:linear-gradient(to bottom,transparent,black 7%,black 89%,transparent);
    mask-image:linear-gradient(to bottom,transparent,black 7%,black 89%,transparent)}
  .chrig-frame{background:${t.color.ink};border-radius:18px;padding:10px;position:relative;transform:rotate(-.4deg)}
  .chrig-frame video{width:100%;display:block;border-radius:10px;background:#000}
  .chrig-rail{position:relative;height:22px;margin:12px 6px 2px;background:#26262E;border-radius:6px;cursor:pointer}
  .chrig-progress{position:absolute;left:0;top:0;bottom:0;background:${t.color.goBright};border-radius:6px;width:0;opacity:.85}
  .chrig-tick{position:absolute;top:-4px;width:3px;height:30px;background:${t.color.paper};border:0;padding:0;
    cursor:pointer;opacity:.55;transition:opacity .2s,transform .2s}
  .chrig-tick:hover{opacity:1;transform:scaleY(1.15)}
  .chrig-tick.on{opacity:1;background:${t.color.goBright};box-shadow:0 0 0 2px rgba(40,200,64,.35)}
  .chrig-under{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 8px 4px}
  .chrig-cap{font-family:'GeistM',monospace;font-size:11.5px;letter-spacing:.06em;color:${t.color.paper}}
  #chrig-full{appearance:none;border:1.5px solid ${t.color.goBright};background:transparent;color:${t.color.goBright};
    border-radius:999px;padding:7px 14px;font-family:'GeistM',monospace;font-size:11.5px;letter-spacing:.1em;cursor:pointer;white-space:nowrap}
  #chrig-full:hover{background:${t.color.goBright};color:${t.color.stage}}
  .chrig-chapters{display:flex;flex-direction:column;gap:3.5vh;padding:22vh 0 30vh;transition:transform .6s cubic-bezier(.22,1,.36,1);will-change:transform}
  .chrig-card{border:1.5px solid ${t.color.line};border-radius:14px;padding:18px 20px;background:#FFFFFF;
    cursor:pointer;opacity:.45;transform:translateY(6px);transition:opacity .4s,transform .4s,border-color .4s}
  .chrig-card.on{opacity:1;transform:none;border-color:${t.color.ink};box-shadow:6px 6px 0 ${t.color.ink}}
  .cc-top{display:flex;justify-content:space-between;gap:10px;font-family:'GeistM',monospace;font-size:11px;letter-spacing:.12em}
  .cc-n{color:${t.color.go}} .cc-at{color:${t.color.dim}}
  .cc-t{font-family:'Meso','Anton',sans-serif;font-size:27px;text-transform:uppercase;color:${t.color.ink};margin:8px 0 6px;line-height:1.05}
  .cc-note{font-family:'Lay',sans-serif;font-size:14px;line-height:1.6;color:${t.color.dim};margin:0 0 10px}
  .cc-log{display:block;font-family:'GeistM',monospace;font-size:11.5px;color:${t.color.go};
    background:${t.color.stage};border-radius:8px;padding:8px 12px;white-space:pre-wrap;word-break:break-word}
  @media(max-width:899px){
    .chrig-outer{height:auto}
    .chrig{display:flex;flex-direction:column;gap:16px;position:static}
    .chrig-chapters-vp{height:auto;overflow:visible;-webkit-mask-image:none;mask-image:none}
    .chrig-chapters{padding:0;transition:none}
    .chrig.finale{grid-template-columns:none;gap:16px}
    .chrig.finale .chrig-chapters-vp{opacity:1;pointer-events:auto}
    .chrig-stage{position:static}
    .chrig-frame{transform:none}
    .chrig-chapters{gap:12px;padding:0}
    .chrig-card{opacity:1;transform:none}
    .chrig-card.on{box-shadow:4px 4px 0 ${t.color.ink}}
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
  @media(max-width:640px){#chip-row>div{flex-basis:100% !important;min-width:0}}
  /* ---- scroll reveals ---- */
  @media (prefers-reduced-motion: no-preference){
    body:not(.agent-mode) #human-surface .rv{opacity:.001;transform:translateY(30px);
      transition:opacity .7s ease,transform .7s cubic-bezier(.22,1,.36,1)}
    body:not(.agent-mode) #human-surface .rv.rv-in{opacity:1;transform:none}
  }
</style>
<div class="ultra-switch" role="group" aria-label="Reader mode">
  <button type="button" id="us-human" class="on">HUMAN</button>
  <button type="button" id="us-agent">AGENT</button>
</div>
<nav class="ultra-rail" aria-label="Sections">
  <a href="#hero" data-s="hero">00</a><a href="#proof" data-s="proof">01</a>
  <a href="#seam" data-s="seam">02</a><a href="#loop" data-s="loop">03</a>
  <a href="#stack" data-s="stack">04</a><a href="#start" data-s="start">05</a>
</nav>
<script>
(function(){
  var KEY='ultra-mode';
  function apply(m){
    document.body.classList.toggle('agent-mode', m==='agent');
    document.getElementById('us-human').classList.toggle('on', m!=='agent');
    document.getElementById('us-agent').classList.toggle('on', m==='agent');
    try{localStorage.setItem(KEY,m)}catch(e){}
  }
  var q=new URLSearchParams(location.search).get('mode');
  var saved=null; try{saved=localStorage.getItem(KEY)}catch(e){}
  apply((q||saved||(navigator.webdriver?'agent':'human'))==='agent'?'agent':'human');
  document.getElementById('us-human').addEventListener('click',function(){apply('human')});
  document.getElementById('us-agent').addEventListener('click',function(){apply('agent')});
  document.addEventListener('keydown',function(e){
    if(e.target && /input|textarea|select/i.test(e.target.tagName))return;
    if(e.key==='a'||e.key==='A')apply('agent');
    if(e.key==='h'||e.key==='H')apply('human');
  });
  // reveals: only direct section children, with a settle fallback
  var secs=['hero','proof','seam','loop','stack','start','colophon'];
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
  secs.slice(0,6).forEach(function(id){var s=document.getElementById(id);if(s)so.observe(s)});
})();
</script>
`}</html>
);

export const Ticker = () => (
  <html>{`
<div class="ultra-ticker" aria-hidden="true"><div class="track">
  <span>One prompt in <em>·</em> a site out <em>·</em> gates 1200 / 1920 / 390 <em>·</em> zero human edits <em>·</em> native Elementor V4 <em>·</em> open source MIT <em>·</em></span>
  <span>One prompt in <em>·</em> a site out <em>·</em> gates 1200 / 1920 / 390 <em>·</em> zero human edits <em>·</em> native Elementor V4 <em>·</em> open source MIT <em>·</em></span>
</div></div>`}</html>
);
