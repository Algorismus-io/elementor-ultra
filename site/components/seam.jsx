import { SectionHead } from './lib.jsx';

/** 02 / THE SEAM — the argument: a real V4 JSON blob vs the JSX that replaces it.
 *  The left blob is the ACTUAL stored JSON of housemait's hero (built in film #2). */

export const Seam = ({ theme: t }) => (
  <section id="seam" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-7" pad={[72, 24]} mobile={{ pad: [32, 18] }}>
    <SectionHead theme={t} no="02" label="The seam" />
    <heading tag="h2" w="100%" size={64} weight={400} font={t.font.display} color={t.color.ink} lh={1.02}
      sx={{ textTransform: 'uppercase', letterSpacing: '.01em' }} mobile={{ size: 36 }}>
      Same page. One is a blob.<br />One is a language.
    </heading>
    <row tw="flex gap-5 w-full items-stretch max-md:flex-col">
      <box id="seam-blob" tw="flex flex-col gap-2" bg="#F1EDE3" pad={[18, 20]} sx={{ borderRadius: '14px', border: `1px solid ${t.color.line}`, flexGrow: '1', flexShrink: '1', flexBasis: '0', minWidth: '0' }}>
        <text size={12} font={t.font.mono} color={t.color.dim} sx={{ letterSpacing: '.12em' }}>WHAT YOUR AGENT WRITES TODAY — BLIND</text>
        <html>{`
<div id="seam-blob-pre"><pre style="margin:0;white-space:pre-wrap;word-break:break-word;font-family:'GeistM',ui-monospace,monospace;font-size:11px;line-height:1.6;color:#8A857A">[{ "id": "e00000", "elType": "e-flexbox",
  "settings": { "classes": { "$$type": "classes",
    "value": ["g-c-12f5qe"] },
   "tag": { "$$type": "string", "value": "div" } },
  "elements": [
   { "id": "e00001", "elType": "e-flexbox",
    "settings": { "classes": { "$$type": "classes",
      "value": ["g-c-hw3p4m"] },
     "tag": { "$$type": "string", "value": "section" },
     "_cssid": { "$$type": "string", "value": "hero" } },
    "elements": [
     { "id": "e00002", "elType": "e-flexbox",
      "settings": { "classes": { "$$type": "classes",
        "value": ["g-c-1ra9hy"] } },
      "elements": [
       { "id": "e00003", "elType": "widget",
        "settings": { "classes": { "$$type":
          "classes", "value": ["g-c-1e5m6x"] },
         "tag": { "$$type": "string", "value": "h1" },
         "title": { "$$type": "html-v3", "value": {
          "content": { "$$type": "string", "value":
           "<span id="blob-copy">Family life, organised with AI.</span>" },
          "children": [] } } },
        "widgetType": "e-heading" },
       ...and 3,400 more lines like these</pre></div>`}</html>
      </box>
      <box id="seam-jsx" tw="flex flex-col gap-2" bg={t.color.stage} pad={[18, 20]} sx={{ borderRadius: '14px', flexGrow: '1', flexShrink: '1', flexBasis: '0', minWidth: '0' }}>
        <text size={12} font={t.font.mono} color={t.color.goBright} sx={{ letterSpacing: '.12em' }}>THE SAME SECTION, WITH ULTRA</text>
        <html>{`
<div id="seam-jsx-pre"><pre style="margin:0;white-space:pre-wrap;word-break:break-word;font-family:'GeistM',ui-monospace,monospace;font-size:13px;line-height:1.65;color:#ECECF1">&lt;section id="hero" tw="flex flex-col
  items-center gap-6" bg={t.color.paper}&gt;
  &lt;h1 size={72} font="Recoleta"
      color={t.color.ink}&gt;
    <span id="jsx-copy">Family life, organised with AI.</span><span id="jsx-caret"></span>
  &lt;/h1&gt;
  &lt;Bubbles items={fridge.magnets} /&gt;
  &lt;Btn href="#app"&gt;Get the app&lt;/Btn&gt;
&lt;/section&gt;</pre></div>`}</html>
      </box>
    </row>
    <html>{`
<div class="mp-cursor" id="mp-claude"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M4.5 2.5 L20 12.2 L12.6 13.6 L9.2 21 Z" fill="#D97757" stroke="#FFFFFF" stroke-width="1.4"/></svg><span class="mp-pill" style="background:#D97757"><img src="/wp-content/uploads/logos/claude.svg" onerror="this.style.display='none'" style="filter:brightness(0) invert(1)"/>Claude Code</span></div>
<div class="mp-cursor mp-you" id="mp-you"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M4.5 2.5 L20 12.2 L12.6 13.6 L9.2 21 Z" fill="#191914" stroke="#FFFFFF" stroke-width="1.4"/></svg><span class="mp-pill" style="background:#191914">You</span></div>
<div class="mp-cursor" id="mp-ultra"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M4.5 2.5 L20 12.2 L12.6 13.6 L9.2 21 Z" fill="#1F9D44" stroke="#FFFFFF" stroke-width="1.4"/></svg><span class="mp-pill" style="background:#1F9D44"><img src="/wp-content/uploads/logos/elementor.svg" onerror="this.style.display='none'" style="filter:brightness(0) invert(1)"/>Elementor Ultra<span id="mp-status" class="mp-status">· watching</span></span></div>
<script>
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var seam=document.getElementById('seam');
  var cl=document.getElementById('mp-claude'), eu=document.getElementById('mp-ultra');
  var stEl=document.getElementById('mp-status');
  function status(t){if(stEl)stEl.textContent='\u00b7 '+t}
  var blobPane=document.getElementById('seam-blob'), jsxPane=document.getElementById('seam-jsx');
  var blobCopy=document.getElementById('blob-copy'), jsxCopy=document.getElementById('jsx-copy');
  if(!seam||!blobPane||!jsxPane||!blobCopy||!jsxCopy)return;
  seam.appendChild(cl); seam.appendChild(eu);
  // the visitor is the third player
  var you=document.getElementById('mp-you');
  if(you&&window.matchMedia('(pointer:fine)').matches){
    seam.appendChild(you);
    seam.classList.add('mp-zone');
    var raf=null;
    seam.addEventListener('mousemove',function(e){
      if(raf)return;
      raf=requestAnimationFrame(function(){
        raf=null;
        var r=seam.getBoundingClientRect();
        you.style.transform='translate('+Math.round(e.clientX-r.left-4)+'px,'+Math.round(e.clientY-r.top-2)+'px)';
      });
    });
    seam.addEventListener('mouseenter',function(){you.classList.add('show')});
    seam.addEventListener('mouseleave',function(){you.classList.remove('show')});
  }
  var COPIES=['Family life, organised with AI.','One tile at a time.','Blog on autopilot.','Run on facts, not guesswork.'];
  var ci=0, running=false, timers=[];
  function later(fn,ms){timers.push(setTimeout(fn,ms))}
  function clearTimers(){timers.forEach(clearTimeout);timers=[]}
  function rel(el){
    var s=seam.getBoundingClientRect(), r=el.getBoundingClientRect();
    return {x:r.left-s.left, y:r.top-s.top, w:r.width, h:r.height};
  }
  function put(c,x,y){c.style.transform='translate('+Math.round(x)+'px,'+Math.round(y)+'px)'}
  function drift(c,pane){
    var p=rel(pane);
    put(c, p.x+p.w*(0.25+Math.random()*0.5), p.y+p.h*(0.15+Math.random()*0.6));
  }
  function typeInto(el,txt,done){
    var cur=el.textContent, i=cur.length;
    (function del(){ if(i>0){ i--; el.textContent=cur.slice(0,i); later(del,16); }
      else { var j=0; (function ty(){ if(j<txt.length){ j++; el.textContent=txt.slice(0,j); later(ty,34); } else done(); })(); } })();
  }
  function cycle(){
    if(!running)return;
    ci=(ci+1)%COPIES.length;
    var next=COPIES[ci];
    // Claude Code flies to the JSX line
    var jc=rel(jsxCopy);
    put(cl, jc.x+jc.w*0.6, jc.y-8);
    later(function(){
      if(!running)return;
      document.getElementById('jsx-caret').classList.add('on');
      typeInto(jsxCopy,next,function(){
        document.getElementById('jsx-caret').classList.remove('on');
        jsxPane.classList.add('mp-flash-green');
        later(function(){jsxPane.classList.remove('mp-flash-green')},700);
        // Elementor Ultra compiles and deploys; the blob follows
        status('compiling\u2026');
        var bc=rel(blobCopy);
        later(function(){
          if(!running)return;
          status('deploying\u2026');
          put(eu, bc.x+bc.w*0.55, bc.y-6);
          later(function(){
            if(!running)return;
            blobCopy.classList.add('mp-hl');
            blobCopy.textContent=next;
            blobPane.classList.add('mp-flash-amber');
            status('deployed \u2713');
            later(function(){blobCopy.classList.remove('mp-hl');blobPane.classList.remove('mp-flash-amber')},900);
            later(function(){ if(!running)return; status('watching'); drift(eu,blobPane); drift(cl,jsxPane); },1500);
            later(cycle,4200);
          },1550);
        },650);
      });
    },1600);
  }
  function start(){
    if(running)return; running=true;
    drift(cl,jsxPane); drift(eu,blobPane);
    later(cycle,2200);
  }
  function stop(){running=false;clearTimers()}
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(e){e.isIntersecting?start():stop()})},{threshold:.25}).observe(seam);
  } else start();
  window.addEventListener('resize',function(){if(running){drift(cl,jsxPane);drift(eu,blobPane)}});
})();
</script>`}</html>
    <text size={16.5} font={t.font.body} color={t.color.dim} lh={1.65} maxw={720}>
      The left side is the real stored JSON of the hero in film #2 — this is the surface agents
      have been authoring. On the right, the component that generates it. Typed props fail at
      build time. An authoritative server-side validator rejects bad trees before they save.
      Backups first, rollback always. A hallucinating agent can't corrupt a site through this seam.
    </text>
  </section>
);
