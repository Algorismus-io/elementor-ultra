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
          "classes", "value": ["g-c-<span id="blob-hash">1e5m6x</span>"] },
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
  &lt;h1 size={<span id="jsx-size">72</span>} font="Recoleta"
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
<div class="mp-cursor mp-you" id="mp-you"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M4.5 2.5 L20 12.2 L12.6 13.6 L9.2 21 Z" fill="#2F6BFF" stroke="#FFFFFF" stroke-width="1.4"/></svg><span class="mp-pill" style="background:#2F6BFF">You</span></div>
<div class="mp-cursor" id="mp-ultra"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M4.5 2.5 L20 12.2 L12.6 13.6 L9.2 21 Z" fill="#1F9D44" stroke="#FFFFFF" stroke-width="1.4"/></svg><span class="mp-pill" style="background:#1F9D44"><img src="/wp-content/uploads/logos/elementor.svg" onerror="this.style.display='none'" style="filter:brightness(0) invert(1)"/>Elementor Ultra<span id="mp-status" class="mp-status">· watching</span></span></div>
<script>
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var seam=document.getElementById('seam');
  var cl=document.getElementById('mp-claude'), eu=document.getElementById('mp-ultra');
  var stEl=document.getElementById('mp-status');
  var blobPane=document.getElementById('seam-blob'), jsxPane=document.getElementById('seam-jsx');
  var blobCopy=document.getElementById('blob-copy'), jsxCopy=document.getElementById('jsx-copy');
  var jsxSize=document.getElementById('jsx-size'), blobHash=document.getElementById('blob-hash');
  if(!seam||!blobPane||!jsxPane||!blobCopy||!jsxCopy)return;
  seam.appendChild(cl); seam.appendChild(eu);
  function status(t){if(stEl)stEl.textContent='\u00b7 '+t}

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

  // ---- organic motion engine: spring + wander + velocity tilt ----
  var A={cl:{el:cl,x:120,y:80,tx:300,ty:120,ph:1.7,sp:0.055},
         eu:{el:eu,x:60,y:200,tx:160,ty:260,ph:4.2,sp:0.05}};
  var running=false, engineOn=false;
  function engine(t){
    if(!engineOn)return;
    for(var k in A){var a=A[k];
      a.x+=(a.tx-a.x)*a.sp; a.y+=(a.ty-a.y)*a.sp;
      var wx=Math.sin(t/1100+a.ph*7)*3+Math.sin(t/430+a.ph*3)*1.2;
      var wy=Math.cos(t/900+a.ph*5)*2.6+Math.cos(t/370+a.ph*2)*1.1;
      var rot=Math.max(-13,Math.min(13,(a.tx-a.x)*0.045));
      a.el.style.transform='translate('+(a.x+wx).toFixed(1)+'px,'+(a.y+wy).toFixed(1)+'px) rotate('+rot.toFixed(1)+'deg)';
    }
    requestAnimationFrame(engine);
  }
  function rel(el){var s=seam.getBoundingClientRect(),r=el.getBoundingClientRect();
    return {x:r.left-s.left,y:r.top-s.top,w:r.width,h:r.height};}
  function aim(a,x,y){a.tx=x;a.ty=y}
  function drift(a,pane){var p=rel(pane);aim(a,p.x+p.w*(0.2+Math.random()*0.6),p.y+p.h*(0.12+Math.random()*0.65))}

  // scanline for the "watching" sweeps
  var scan=document.createElement('div'); scan.className='mp-scanline'; blobPane.appendChild(scan);
  function sweep(){
    scan.classList.remove('run'); void scan.offsetWidth; scan.classList.add('run');
  }

  var COPIES=['Family life, organised with AI.','One tile at a time.','Blog on autopilot.','Run on facts, not guesswork.'];
  var SIZES=['64','72','80','96'];
  var ci=0, si=1, timers=[];
  function later(fn,ms){timers.push(setTimeout(fn,ms))}
  function clearTimers(){timers.forEach(clearTimeout);timers=[]}
  function newHash(){var c='abcdefghjkmnpqrstuvwxyz23456789',h='';for(var i=0;i<6;i++)h+=c[Math.floor(Math.random()*c.length)];return h}
  function recompile(target,fn){
    status('compiling\u2026');
    later(function(){ if(!running)return;
      status('deploying\u2026');
      var bc=rel(target); aim(A.eu,bc.x+bc.w*0.5,bc.y-6);
      later(function(){ if(!running)return;
        fn();
        if(blobHash){blobHash.classList.add('mp-hl');blobHash.textContent=newHash();
          later(function(){blobHash.classList.remove('mp-hl')},800)}
        blobPane.classList.add('mp-flash-amber');
        status('deployed \u2713');
        later(function(){blobPane.classList.remove('mp-flash-amber')},800);
        later(function(){if(running)status('watching')},1400);
      },1200);
    },500);
  }
  function typeInto(el,txt,done){
    var cur=el.textContent,i=cur.length;
    (function del(){ if(!running)return;
      if(i>0){i--;el.textContent=cur.slice(0,i);later(del,15);}
      else {var j=0;(function ty(){ if(!running)return;
        if(j<txt.length){j++;el.textContent=txt.slice(0,j);later(ty,32);} else done();})();}})();
  }
  function act(){
    if(!running)return;
    // beat 1: Ultra sweeps the blob, watching
    drift(A.eu,blobPane); sweep();
    // beat 2: Claude Code edits the size token
    later(function(){ if(!running)return;
      var st=rel(jsxSize); aim(A.cl,st.x+st.w*0.5,st.y-8);
      later(function(){ if(!running)return;
        si=(si+1)%SIZES.length;
        jsxSize.classList.add('mp-sel');
        later(function(){ if(!running)return;
          jsxSize.textContent=SIZES[si]; jsxSize.classList.remove('mp-sel');
          jsxPane.classList.add('mp-flash-green');
          later(function(){jsxPane.classList.remove('mp-flash-green')},500);
          recompile(blobHash||blobCopy,function(){});
        },420);
      },1100);
    },1700);
    // beat 3: Claude Code rewrites the headline
    later(function(){ if(!running)return;
      var jc=rel(jsxCopy); aim(A.cl,jc.x+Math.min(jc.w*0.7,260),jc.y-8);
      later(function(){ if(!running)return;
        ci=(ci+1)%COPIES.length;
        document.getElementById('jsx-caret').classList.add('on');
        typeInto(jsxCopy,COPIES[ci],function(){
          document.getElementById('jsx-caret').classList.remove('on');
          jsxPane.classList.add('mp-flash-green');
          later(function(){jsxPane.classList.remove('mp-flash-green')},600);
          recompile(blobCopy,function(){
            blobCopy.classList.add('mp-hl'); blobCopy.textContent=COPIES[ci];
            later(function(){blobCopy.classList.remove('mp-hl')},800);
          });
          later(function(){ if(!running)return; drift(A.cl,jsxPane); },2400);
          later(act,4600);
        });
      },1300);
    },6200);
  }
  function start(){
    if(running)return; running=true;
    if(!engineOn){engineOn=true;requestAnimationFrame(engine)}
    var bp=rel(blobPane), jp=rel(jsxPane);
    A.eu.x=bp.x+bp.w*0.4;A.eu.y=bp.y+bp.h*0.3;
    A.cl.x=jp.x+jp.w*0.4;A.cl.y=jp.y+jp.h*0.3;
    drift(A.cl,jsxPane); drift(A.eu,blobPane);
    status('watching');
    later(act,1200);
  }
  function stop(){running=false;engineOn=false;clearTimers()}
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(e){e.isIntersecting?start():stop()})},{threshold:.25}).observe(seam);
  } else start();
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
