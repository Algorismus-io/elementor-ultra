import { SectionHead } from './lib.jsx';

/** 01 / PROOF — the films inside a framed exhibit + the eight palette chips. */

const chips = [
  ['housemait', 'Housemait', 'the fridge door', '9 sections · 31 min'],
  ['canopy', 'Canopy', 'the greenhouse ledger', '10 sections · 17 min'],
  ['alike', 'Alike.page', 'the magazine cover', '8 sections · 22 min'],
  ['triple', 'Triple Kingdom', 'the board box', '8 sections · 25 min'],
  ['billow', 'Billow', 'the flight ledger', '9 sections · 25 min'],
  ['pumo', 'Michael Pumo', 'the specification', '8 sections · 30 min'],
  ['mat', 'Mat.', 'the desk', '6 sections · 21 min'],
  ['bt26', 'BT—26', 'the sprint sheet', '8 parts · 24 min'],
];

export const Proof = ({ theme: t }) => (
  <section id="proof" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-7" pad={[72, 24]} mobile={{ pad: [32, 18] }}>
    <SectionHead theme={t} no="01" label="Proof, on camera" />
    <heading tag="h2" w="100%" size={64} weight={400} font={t.font.display} color={t.color.ink} lh={1.02}
      sx={{ textTransform: 'uppercase', letterSpacing: '.01em' }} mobile={{ size: 36 }}>
      Eight real sites, rebuilt live by an agent.
    </heading>
    <text size={16.5} font={t.font.body} color={t.color.dim} lh={1.65} maxw={680}>
      Each film is one take: a human types one prompt, the agent builds the page section by
      section through the live dev loop, every save hot-reloads a real WordPress site and
      re-runs the gates — then the film ends inside the native Elementor editor. The AGENT
      TIME chip burns true elapsed time. Nothing is hidden.
    </text>
    <html>{`
<div class="chrig" id="chrig">
  <div class="chrig-stage">
    <div class="chrig-frame">
      <div class="ultra-stamp">CERTIFIED 4.1.4 / 4.2.0</div>
      <video id="chrig-video" muted playsinline preload="metadata"
        poster="https://docs.wpos.ai/images/ultra/examples/housemait-thumb.jpg"
        src="https://docs.wpos.ai/videos/ultra/examples/housemait.mp4"></video>
      <div class="chrig-rail" id="chrig-rail" aria-label="Film timeline">
        <div class="chrig-progress" id="chrig-progress"></div>
      </div>
      <div class="chrig-under">
        <span class="chrig-cap">HOUSEMAIT — 9 SECTIONS · 31 MIN OF AGENT TIME · 0 HUMAN EDITS</span>
        <button type="button" id="chrig-full">▶ WATCH FULL FILM</button>
      </div>
    </div>
  </div>
  <div class="chrig-chapters" id="chrig-chapters"></div>
</div>
<script>
(function(){
  var FILMS=[{"slug": "housemait", "name": "Housemait", "cap": "HOUSEMAIT \u2014 9 SECTIONS \u00b7 31 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 98.05, "end": 94.45, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:20", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:50 \u2192 14:27 \u00b7 51\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 14:31", "s": 29.77, "note": "The first section \u2014 hero \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "14:40 \u2192 31:24 \u00b7 63\u00d7", "s": 38.92, "note": "Whatsapp 19:48 \u00b7 OS section 23:39 \u00b7 stars 25:43 \u00b7 meals 27:20.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 31:36", "s": 55.36, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 9/9 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.11, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.2, "note": "9 sections, 31 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "canopy", "name": "Canopy", "cap": "CANOPY \u2014 10 SECTIONS \u00b7 17 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 97.77, "end": 94.17, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:20", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:50 \u2192 08:49 \u00b7 30\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 08:53", "s": 29.72, "note": "The first section \u2014 hero \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "09:02 \u2192 16:52 \u00b7 30\u00d7", "s": 38.87, "note": "New-search 09:57 \u00b7 tree 11:45 \u00b7 toolkit 12:30.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 17:04", "s": 54.97, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 10/10 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 65.72, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 74.86, "note": "10 sections, 17 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "alike", "name": "Alike.page", "cap": "ALIKE.PAGE \u2014 8 SECTIONS \u00b7 22 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 98.06, "end": 94.46, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:24", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:54 \u2192 12:05 \u00b7 42\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 12:09", "s": 29.77, "note": "The first section \u2014 cover \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "12:18 \u2192 21:53 \u00b7 36\u00d7", "s": 38.92, "note": "Store spread 15:30 \u00b7 essay 18:26 \u00b7 blow-in 18:26.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 22:05", "s": 55.36, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 8/8 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.11, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.23, "note": "8 sections, 22 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "triple", "name": "Triple Kingdom", "cap": "TRIPLE KINGDOM \u2014 8 SECTIONS \u00b7 25 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 94.86, "end": 91.26, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:20", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:50 \u2192 10:11 \u00b7 35\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 10:15", "s": 29.77, "note": "The first section \u2014 hero \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "10:24 \u2192 24:58 \u00b7 55\u00d7", "s": 38.92, "note": "No-ads panel 17:28 \u00b7 game panels 19:19 \u00b7 reviews 21:06.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 25:10", "s": 55.36, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 8/8 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.11, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.24, "note": "8 sections, 25 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "billow", "name": "Billow", "cap": "BILLOW \u2014 9 SECTIONS \u00b7 25 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 98.06, "end": 94.46, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:22", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:52 \u2192 09:37 \u00b7 33\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 09:41", "s": 29.77, "note": "The first section \u2014 hero \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "09:50 \u2192 25:36 \u00b7 59\u00d7", "s": 38.92, "note": "Five-minutes 16:11 \u00b7 invoice 17:28 \u00b7 cockpit 23:11.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 25:48", "s": 55.36, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 9/9 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.11, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.2, "note": "9 sections, 25 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "pumo", "name": "Michael Pumo", "cap": "MICHAEL PUMO \u2014 8 SECTIONS \u00b7 30 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 97.16, "end": 93.56, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:22", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:52 \u2192 13:31 \u00b7 47\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 13:35", "s": 29.77, "note": "The first section \u2014 hero \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "13:44 \u2192 29:46 \u00b7 60\u00d7", "s": 38.92, "note": "Capability 20:46 \u00b7 project index 23:47 \u00b7 citations 25:07.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 29:58", "s": 55.36, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 8/8 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.11, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.22, "note": "8 sections, 30 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "mat", "name": "Mat.", "cap": "MAT. \u2014 6 SECTIONS \u00b7 21 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 91.64, "end": 88.04, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:22", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:52 \u2192 09:30 \u00b7 32\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 09:34", "s": 29.77, "note": "The first section \u2014 cta \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "09:43 \u2192 20:56 \u00b7 42\u00d7", "s": 38.92, "note": "Hero 09:34 \u00b7 features 15:48 \u00b7 letter 20:05.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 21:08", "s": 55.36, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 6/6 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.11, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.23, "note": "6 sections, 21 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "bt26", "name": "BT\u201426", "cap": "BT\u201426 \u2014 8 PARTS \u00b7 24 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 90.99, "end": 87.39, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:20", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:50 \u2192 07:15 \u00b7 30\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 07:19", "s": 26.62, "note": "The first section \u2014 PT.01 arrival \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "07:28 \u2192 24:25 \u00b7 64\u00d7", "s": 35.77, "note": "PT.02 sprint 14:57 \u00b7 PT.03 table 14:57 \u00b7 PT.04 clock 17:11 \u00b7 PT.05 numbers 18:12.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 24:37", "s": 52.2, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 8/8 parts live"}, {"n": "CH.06", "t": "A LIVE TWEAK", "at": "AGENT TIME 28:04", "s": 62.95, "note": "After shipping, a second prompt changes the page live \u2014 the loop never closed.", "log": "> tweak prompt sent"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 77.5, "note": "8 parts, 24 minutes of agent time, zero human edits.", "log": "8/8 parts detected"}]}];
  var v=document.getElementById('chrig-video');
  var wrap=document.getElementById('chrig-chapters');
  var rail=document.getElementById('chrig-rail');
  var prog=document.getElementById('chrig-progress');
  var fullBtn=document.getElementById('chrig-full');
  var cap=document.querySelector('.chrig-cap');
  var full=false, active=-1, F=FILMS[0], cards=[], pendingSeek=null;
  var BASE='https://docs.wpos.ai';
  function endT(i){return i<F.ch.length-1?F.ch[i+1].s:F.end}
  function go(i,seek){
    if(i===active&&!seek)return;
    active=i;
    cards.forEach(function(c,j){c.classList.toggle('on',j===i)});
    rail.querySelectorAll('.chrig-tick').forEach(function(k,j){k.classList.toggle('on',j===i)});
    if(!full){
      if(v.readyState>=1){ try{v.currentTime=F.ch[i].s;var p=v.play();if(p&&p.catch)p.catch(function(){})}catch(e){} }
      else pendingSeek=F.ch[i].s;
    }
  }
  v.addEventListener('loadedmetadata',function(){
    if(pendingSeek!=null){ try{v.currentTime=pendingSeek;var p=v.play();if(p&&p.catch)p.catch(function(){})}catch(e){} pendingSeek=null; }
  });
  function buildFilm(){
    wrap.innerHTML=''; rail.querySelectorAll('.chrig-tick').forEach(function(k){k.remove()});
    cards=[];
    F.ch.forEach(function(c,i){
      var d=document.createElement('div'); d.className='chrig-card'; d.dataset.i=i;
      d.innerHTML='<div class="cc-top"><span class="cc-n">'+c.n+'</span><span class="cc-at">'+c.at+'</span></div>'+
        '<div class="cc-t">'+c.t+'</div><p class="cc-note">'+c.note+'</p><code class="cc-log">'+c.log+'</code>';
      d.addEventListener('click',function(){go(i,true)});
      wrap.appendChild(d); cards.push(d);
      var tick=document.createElement('button'); tick.type='button'; tick.className='chrig-tick';
      tick.style.left=(c.s/F.total*100)+'%'; tick.title=c.n+' '+c.t;
      tick.addEventListener('click',function(e){e.stopPropagation();go(i,true)});
      rail.appendChild(tick);
    });
    cap.textContent=F.cap;
    observe();
  }
  var io=null;
  function observe(){
    if(io)io.disconnect();
    var desktop=window.matchMedia('(min-width:900px)').matches;
    if(desktop&&'IntersectionObserver' in window){
      io=new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting&&!full){ go(Number(e.target.dataset.i),false) } });
      },{rootMargin:'-42% 0px -42% 0px',threshold:0});
      cards.forEach(function(c){io.observe(c)});
    } else { go(0,false); v.pause(); }
  }
  v.addEventListener('timeupdate',function(){
    prog.style.width=(v.currentTime/F.total*100)+'%';
    if(!full&&active>=0&&v.currentTime>=endT(active)-.05){v.pause()}
  });
  fullBtn.addEventListener('click',function(){
    full=!full;
    fullBtn.textContent=full?'\u25a0 EXIT FULL PLAY':'\u25b6 WATCH FULL FILM';
    v.controls=full;
    if(full){ try{v.currentTime=0;var p=v.play();if(p&&p.catch)p.catch(function(){})}catch(e){} }
    else { v.pause(); if(active>=0){ v.currentTime=F.ch[active].s; } }
  });
  function switchFilm(i){
    if(FILMS[i]===F)return;
    F=FILMS[i]; active=-1; full=false; v.controls=false;
    fullBtn.textContent='\u25b6 WATCH FULL FILM';
    v.pause();
    v.poster=BASE+'/images/ultra/examples/'+F.slug+'-thumb.jpg';
    v.src=BASE+'/videos/ultra/examples/'+F.slug+'.mp4';
    buildFilm();
    var chips=document.querySelectorAll('#chip-row>div');
    chips.forEach(function(c,j){c.classList.toggle('film-on',j===i)});
    pendingSeek=F.ch[0].s;
    go(0,true);
    document.getElementById('chrig').scrollIntoView({behavior:'smooth',block:'start'});
  }
  // chips → film switcher (docs link preserved as a small corner arrow)
  function wireChips(){
  var chips=document.querySelectorAll('#chip-row>div');
  chips.forEach(function(c,i){
    if(i>=FILMS.length)return;
    var a=c.querySelector('a[href]');
    if(a){
      var href=a.getAttribute('href');
      var span=document.createElement('span'); span.innerHTML=a.innerHTML;
      span.className=a.className; a.parentNode.replaceChild(span,a);
      var link=document.createElement('a'); link.href=href; link.className='chip-go'; link.textContent='\u2197';
      link.title='Full breakdown'; link.addEventListener('click',function(e){e.stopPropagation()});
      c.appendChild(link);
    }
    c.style.cursor='pointer';
    c.addEventListener('click',function(){switchFilm(i)});
    if(i===0)c.classList.add('film-on');
  });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wireChips);
  else wireChips();
  buildFilm();
})();
</script>`}</html>
    <text size={12} font={t.font.mono} color={t.color.dim} sx={{ letterSpacing: '.14em' }}>
      THE OTHER SEVEN — CLICK A CARD TO LOAD ITS FILM INTO THE PLAYER
    </text>
    <row id="chip-row" tw="flex flex-wrap gap-3 w-full">
      {chips.map(([key, name, dir, meta]) => (
        <box bg={t.color[key]} pad={[13, 16]} sx={{ borderRadius: '12px', border: `1px solid ${t.color.line}`, flexGrow: '1', flexShrink: '0', flexBasis: '240px' }}>
          <text href={`https://docs.wpos.ai/ultra/examples/${key}`} size={15.5} weight={700} font={t.font.body} color={t.color[key + 'Ink']}>{name}</text>
          <text size={12.5} font={t.font.body} color={t.color[key + 'Ink']} sx={{ opacity: '.8' }}>{dir}</text>
          <text size={11.5} font={t.font.mono} color={t.color[key + 'Ink']} pad={[7, 0, 0, 0]} sx={{ opacity: '.75' }}>{meta}</text>
        </box>
      ))}
    </row>
  </section>
);
