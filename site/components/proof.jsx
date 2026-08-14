import { SectionHead } from './lib.jsx';

/** 01 / PROOF — the films inside a framed exhibit + the eight palette chips. */

const chips = [
  ['housemait', 'Housemait', 'family-app SaaS', '9 sections · 31 min'],
  ['canopy', 'Canopy', 'SaaS marketing site', '10 sections · 17 min'],
  ['alike', 'Alike.page', 'creator storefront', '8 sections · 22 min'],
  ['triple', 'Triple Kingdom', 'indie game site', '8 sections · 25 min'],
  ['billow', 'Billow', 'finance SaaS', '9 sections · 25 min'],
  ['pumo', 'Michael Pumo', 'developer portfolio', '8 sections · 30 min'],
  ['mat', 'Mat.', 'iOS app site', '6 sections · 21 min'],
  ['bt26', 'BT—26', 'event site', '8 parts · 24 min'],
];

export const Proof = ({ theme: t }) => (
  <section id="proof" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-7" pad={[72, 24]} mobile={{ pad: [32, 18] }}>
    <SectionHead theme={t} no="01" label="Proof, on camera" />
    <heading tag="h2" w="100%" size={64} weight={400} font={t.font.display} color={t.color.ink} lh={1.02}
      sx={{ textTransform: 'uppercase', letterSpacing: '.01em' }} mobile={{ size: 36 }}>
      Eight real sites from the web, rebuilt live by an agent.
    </heading>
    <text size={16.5} font={t.font.body} color={t.color.dim} lh={1.65} maxw={680}>
      Each film is one unedited take — same public copy, same assets as the original site.
      One prompt from a human, then the agent builds section by section against a live
      WordPress site, with a pass/fail check on every save — and the film ends inside the
      real Elementor editor. The timer on screen is real elapsed time: no cuts, no speed-ups
      hiding anything.
    </text>
    <text size={12} font={t.font.mono} color={t.color.dim} sx={{ letterSpacing: '.14em' }}>
      SEVEN CHAPTERS, IN FULL — THE ONE YOU ARE READING IS LIT
    </text>
    <html>{`
<div class="chrig-outer" id="chrig-outer">
<div class="chrig" id="chrig">
  <div class="chrig-stage">
    <div class="chrig-frame">
      <video id="chrig-video" muted playsinline preload="metadata" aria-label="Silent screen recording of an AI agent building this site"
        poster="https://docs.wpos.ai/images/ultra/examples/housemait-thumb.jpg"
        src="https://docs.wpos.ai/videos/ultra/examples/housemait.mp4?v=3"></video>
      <div class="chrig-rail" id="chrig-rail" aria-label="Film timeline">
        <div class="chrig-progress" id="chrig-progress"></div>
      </div>
      <div class="chrig-under">
        <span class="chrig-cap">HOUSEMAIT — 9 SECTIONS · 31 MIN OF AGENT TIME · 0 HUMAN EDITS</span>
        <button type="button" id="chrig-full">▶ WATCH FULL FILM</button>
      </div>
    </div>
  </div>
  <div class="chrig-chapters-vp"><div class="chrig-chapters" id="chrig-chapters"></div></div>
</div>
</div>
<script>
(function(){
  var FILMS=[{"slug": "housemait", "name": "Housemait", "cap": "HOUSEMAIT \u2014 9 SECTIONS \u00b7 31 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 98.1, "end": 94.5, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:20", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:50 \u2192 14:27 \u00b7 51\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 14:31", "s": 29.77, "note": "The first section \u2014 hero \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "14:40 \u2192 31:24 \u00b7 63\u00d7", "s": 38.92, "note": "Whatsapp 19:48 \u00b7 OS section 23:39 \u00b7 stars 25:43 \u00b7 meals 27:20.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 31:36", "s": 55.35, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 9/9 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.1, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.22, "note": "9 sections, 31 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "canopy", "name": "Canopy", "cap": "CANOPY \u2014 10 SECTIONS \u00b7 17 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 97.8, "end": 94.2, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:20", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:50 \u2192 08:49 \u00b7 30\u00d7", "s": 14.25, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 08:53", "s": 29.73, "note": "The first section \u2014 hero \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "09:02 \u2192 16:52 \u00b7 30\u00d7", "s": 38.88, "note": "New-search 09:57 \u00b7 tree 11:45 \u00b7 toolkit 12:30.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 17:04", "s": 54.98, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 10/10 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 65.73, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 74.88, "note": "10 sections, 17 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "alike", "name": "Alike.page", "cap": "ALIKE.PAGE \u2014 8 SECTIONS \u00b7 22 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 98.1, "end": 94.5, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:24", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:54 \u2192 12:05 \u00b7 42\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 12:09", "s": 29.77, "note": "The first section \u2014 cover \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "12:18 \u2192 21:53 \u00b7 36\u00d7", "s": 38.92, "note": "Store spread 15:30 \u00b7 essay 18:26 \u00b7 blow-in 18:26.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 22:05", "s": 55.35, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 8/8 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.1, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.25, "note": "8 sections, 22 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "triple", "name": "Triple Kingdom", "cap": "TRIPLE KINGDOM \u2014 8 SECTIONS \u00b7 25 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 94.9, "end": 91.3, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:20", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:50 \u2192 10:11 \u00b7 35\u00d7", "s": 14.25, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 10:15", "s": 29.8, "note": "The first section \u2014 hero \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "10:24 \u2192 24:58 \u00b7 55\u00d7", "s": 38.95, "note": "No-ads panel 17:28 \u00b7 game panels 19:19 \u00b7 reviews 21:06.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 25:10", "s": 55.38, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 8/8 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.13, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.28, "note": "8 sections, 25 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "billow", "name": "Billow", "cap": "BILLOW \u2014 9 SECTIONS \u00b7 25 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 98.13, "end": 94.53, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:22", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:52 \u2192 09:37 \u00b7 33\u00d7", "s": 14.25, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 09:41", "s": 29.8, "note": "The first section \u2014 hero \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "09:50 \u2192 25:36 \u00b7 59\u00d7", "s": 38.95, "note": "Five-minutes 16:11 \u00b7 invoice 17:28 \u00b7 cockpit 23:11.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 25:48", "s": 55.38, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 9/9 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.13, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.25, "note": "9 sections, 25 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "pumo", "name": "Michael Pumo", "cap": "MICHAEL PUMO \u2014 8 SECTIONS \u00b7 30 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 97.2, "end": 93.6, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:22", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:52 \u2192 13:31 \u00b7 47\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 13:35", "s": 29.77, "note": "The first section \u2014 hero \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "13:44 \u2192 29:46 \u00b7 60\u00d7", "s": 38.92, "note": "Capability 20:46 \u00b7 project index 23:47 \u00b7 citations 25:07.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 29:58", "s": 55.35, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 8/8 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.1, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.25, "note": "8 sections, 30 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "mat", "name": "Mat.", "cap": "MAT. \u2014 6 SECTIONS \u00b7 21 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 91.63, "end": 88.03, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:22", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:52 \u2192 09:30 \u00b7 32\u00d7", "s": 14.22, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 09:34", "s": 29.77, "note": "The first section \u2014 cta \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "09:43 \u2192 20:56 \u00b7 42\u00d7", "s": 38.92, "note": "Hero 09:34 \u00b7 features 15:48 \u00b7 letter 20:05.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 21:08", "s": 55.35, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 6/6 sections live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 66.1, "note": "The finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "THE RESULT", "at": "FULL SCROLL", "s": 75.22, "note": "6 sections, 21 minutes of agent time, zero human edits.", "log": "eu-studio check \u2014 pass:true"}]}, {"slug": "bt26", "name": "BT\u201426", "cap": "BT\u201426 \u2014 8 PARTS \u00b7 24 MIN OF AGENT TIME \u00b7 0 HUMAN EDITS", "total": 101.72, "end": 98.12, "ch": [{"n": "CH.01", "t": "THE PROMPT", "at": "AGENT TIME 00:20", "s": 2.75, "note": "One human sentence. That is the entire human contribution to this film.", "log": "> prompt sent \u2014 agent takes over"}, {"n": "CH.02", "t": "THE BUILD OPENS", "at": "00:50 \u2192 07:15 \u00b7 30\u00d7", "s": 14.25, "note": "Compressed build. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.", "log": "[dev] full deploy (kit changed) \u00b7 gates PASS (/)"}, {"n": "CH.03", "t": "FIRST SECTION LANDS", "at": "AGENT TIME 07:19", "s": 26.63, "note": "The first section \u2014 PT.01 arrival \u2014 lands as one save. The camera catches the reload as it happens.", "log": "[dev] gates PASS (/)"}, {"n": "CH.04", "t": "SECTION BY SECTION", "at": "07:28 \u2192 24:25 \u00b7 64\u00d7", "s": 35.78, "note": "PT.02 sprint 14:57 \u00b7 PT.03 table 14:57 \u00b7 PT.04 clock 17:11 \u00b7 PT.05 numbers 18:12.", "log": "[dev] full deploy (kit changed) \u00b7 1 page(s)"}, {"n": "CH.05", "t": "SHIPPED", "at": "AGENT TIME 24:37", "s": 52.22, "note": "The ship signal only fires when every section needle is live. All gates green.", "log": "[dev] gates PASS (/) \u00b7 8/8 parts live"}, {"n": "CH.06", "t": "NATIVE ELEMENTOR", "at": "THE EDITOR PROOF", "s": 62.97, "note": "Filmed after the build: the finished page opens in the real editor \u2014 heading selected, navigator showing the tree. Fully editable.", "log": "post.php?action=elementor \u2192 loaded"}, {"n": "CH.07", "t": "A LIVE TWEAK", "at": "AGENT TIME 28:04", "s": 72.02, "note": "After shipping, a second prompt changes the page live \u2014 the loop never closed.", "log": "> tweak prompt sent"}, {"n": "CH.08", "t": "THE RESULT", "at": "FULL SCROLL", "s": 86.57, "note": "8 parts, 24 minutes of agent time, zero human edits.", "log": "8/8 parts detected"}]}];
  var v=document.getElementById('chrig-video');
  var wrap=document.getElementById('chrig-chapters');
  wrap.setAttribute('aria-label','Film chapters');
  var rail=document.getElementById('chrig-rail');
  var prog=document.getElementById('chrig-progress');
  var fullBtn=document.getElementById('chrig-full');
  var cap=document.querySelector('.chrig-cap');
  var outer=document.getElementById('chrig-outer');
  var full=false, active=-1, F=FILMS[0], cards=[], pendingSeek=null;
  var BASE='https://docs.wpos.ai', VQ='?v=3';
  var calm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var onScreen=true;   // is the pinned film actually in front of the reader
  function endT(i){return i<F.ch.length-1?F.ch[i+1].s:F.end}
  // ---- can this film be seeked at all?
  // docs.wpos.ai answers a Range request with 200 and the whole body, so the browser
  // marks the media unseekable: v.seekable stays empty however much is buffered, and
  // any v.currentTime = 38.9 is silently clamped. Measured 2026-08-14. Two modes:
  //   SEEK   (seekable) — the chapter the reader scrolls to drives the film.
  //   STREAM (not)      — the film plays straight through and drives the chapter list.
  // Whichever it is, the seven chapters are readable; the mode only decides who leads.
  // If the origin ever starts honouring Range, SEEK turns itself back on.
  var seekOK=null;
  function probeSeek(force){
    var was=seekOK;
    try{var s=v.seekable; seekOK=!!(s&&s.length&&s.end(s.length-1)>1.5)}catch(e){seekOK=false}
    if(seekOK===was&&!force)return seekOK;
    var rig=document.getElementById('chrig');
    if(rig)rig.classList.toggle('chrig-stream',seekOK===false);
    cards.forEach(function(c,i){
      if(seekOK===false){
        // a div with an aria-label and no role hides its own text from screen
        // readers, so the label goes with the button role it belonged to
        c.removeAttribute('role');c.removeAttribute('tabindex');c.removeAttribute('aria-label');
      } else {
        c.setAttribute('role','button');c.setAttribute('tabindex','0');
        c.setAttribute('aria-label','Play chapter '+F.ch[i].n+' '+F.ch[i].t);
      }
    });
    rail.querySelectorAll('.chrig-tick').forEach(function(k){
      if(seekOK===false)k.setAttribute('disabled','');else k.removeAttribute('disabled');
    });
    return seekOK;
  }
  ['loadedmetadata','loadeddata','canplay','progress','durationchange'].forEach(function(ev){
    v.addEventListener(ev,probeSeek);
  });
  function mark(i){
    if(i===active)return;
    active=i;
    cards.forEach(function(c,j){c.classList.toggle('on',j===i)});
    rail.querySelectorAll('.chrig-tick').forEach(function(k,j){k.classList.toggle('on',j===i)});
  }
  // go(i, seek, play): light the card + tick, seek the film. play=false only marks.
  function go(i,seek,play){
    if(i===active&&!seek)return;
    mark(i);
    if(full||seekOK===false)return;
    if(v.readyState>=1){
      try{
        if(seek||Math.abs(v.currentTime-F.ch[i].s)>2)v.currentTime=F.ch[i].s;
        if(play!==false){var p=v.play();if(p&&p.catch)p.catch(function(){})}
      }catch(e){}
    } else { pendingSeek=F.ch[i].s; wantPlay=(play!==false); }
  }
  var wantPlay=false;
  v.addEventListener('loadedmetadata',function(){
    if(pendingSeek!=null){
      try{if(seekOK)v.currentTime=pendingSeek;if(wantPlay){var p=v.play();if(p&&p.catch)p.catch(function(){})}}catch(e){}
      pendingSeek=null;
    }
  });
  function buildFilm(){
    wrap.innerHTML=''; rail.querySelectorAll('.chrig-tick').forEach(function(k){k.remove()});
    if(cardObs)cardObs.disconnect();
    cards=[];
    F.ch.forEach(function(c,i){
      var d=document.createElement('div'); d.className='chrig-card'; d.dataset.i=i;
      d.setAttribute('role','button'); d.setAttribute('tabindex','0');
      d.setAttribute('aria-label','Play chapter '+c.n+' '+c.t);
      d.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();d.click()}});
      d.innerHTML='<div class="cc-top"><span class="cc-n">'+c.n+'</span><span class="cc-at">'+c.at+'</span></div>'+
        '<div class="cc-t">'+c.t+'</div><p class="cc-note">'+c.note+'</p><code class="cc-log">'+c.log+'</code>';
      d.addEventListener('click',function(){ go(i,true,true) });
      wrap.appendChild(d); cards.push(d);
      var tick=document.createElement('button'); tick.type='button'; tick.className='chrig-tick';
      tick.style.left=(c.s/F.total*100)+'%'; tick.title=c.n+' '+c.t;
      tick.setAttribute('aria-label','Play chapter '+c.n+' '+c.t);
      tick.addEventListener('click',function(e){e.stopPropagation();
        go(i,true,true);
        if(cards[i])cards[i].scrollIntoView({behavior:calm?'auto':'smooth',block:'center'});
      });
      rail.appendChild(tick);
    });
    cap.textContent=F.cap;
    watchCards();
    probeSeek(true);   // cards were just re-created — re-apply the mode to them
    go(0,true,false);
  }
  // ---- the chapters are in normal flow; the card crossing the middle of the
  // viewport is the live one. No scroll listener, no runway maths, no scroll-jack.
  var cardObs=null;
  function watchCards(){
    if(!('IntersectionObserver' in window))return;
    cardObs=new IntersectionObserver(function(es){
      // pick the entry nearest the viewport middle among those intersecting
      var best=null,bestD=1e9,mid=window.innerHeight/2;
      es.forEach(function(e){if(e.isIntersecting)e.target.dataset.vis='1';else e.target.dataset.vis=''});
      cards.forEach(function(c,i){
        if(!c.dataset.vis)return;
        var r=c.getBoundingClientRect(), d=Math.abs(r.top+r.height/2-mid);
        if(d<bestD){bestD=d;best=i}
      });
      if(best!=null&&best!==active)go(best,true,!calm&&onScreen);
    },{rootMargin:'-42% 0px -42% 0px',threshold:0});
    cards.forEach(function(c){cardObs.observe(c)});
  }
  // nothing plays off-screen. On screen: play — in STREAM mode that is the whole
  // point (the film runs and lights the chapter it is on), in SEEK mode go() has
  // already put it on the right chapter.
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){
      onScreen=es[0].isIntersecting;
      if(!onScreen){ if(!full)v.pause(); return; }
      probeSeek();
      if(seekOK===false&&!calm){var p=v.play();if(p&&p.catch)p.catch(function(){})}
    },{threshold:0}).observe(document.querySelector('.chrig-stage'));
  }
  function chapterAt(t){
    for(var i=F.ch.length-1;i>=0;i--){if(t>=F.ch[i].s-0.1)return i}
    return 0;
  }
  v.addEventListener('timeupdate',function(){
    prog.style.width=(v.currentTime/F.total*100)+'%';
    // full play: the native controls are the authority, so follow the playhead.
    if(full){ mark(chapterAt(v.currentTime)); return; }
    // STREAM mode: the film cannot be steered, so it simply runs; the lit card keeps
    // meaning "the chapter you are reading", which is what the reader can act on.
    if(seekOK===false)return;
    if(active<0)return;
    // SEEK mode: a chapter plays its own segment and stops there. Scrolling on is
    // what advances the film — the page never moves itself.
    if(v.currentTime>=endT(active)-.05)v.pause();
  });
  fullBtn.addEventListener('click',function(){
    full=!full;
    fullBtn.textContent=full?'\u25a0 EXIT FULL PLAY':'\u25b6 WATCH FULL FILM';
    v.controls=full;
    if(full){ try{if(seekOK)v.currentTime=0;var p=v.play();if(p&&p.catch)p.catch(function(){})}catch(e){} }
    else { v.pause(); if(active>=0&&seekOK){ v.currentTime=F.ch[active].s; } }
  });
  function switchFilm(i){
    if(FILMS[i]===F)return;
    F=FILMS[i]; active=-1; full=false; v.controls=false;
    fullBtn.textContent='\u25b6 WATCH FULL FILM';
    v.pause();
    v.poster=BASE+'/images/ultra/examples/'+F.slug+'-thumb.jpg';
    v.src=BASE+'/videos/ultra/examples/'+F.slug+'.mp4'+VQ;
    buildFilm();
    var chips=document.querySelectorAll('#chip-row>div');
    chips.forEach(function(c,j){c.classList.toggle('film-on',j===i)});
    pendingSeek=F.ch[0].s; wantPlay=!calm;
    // the chips sit below the rig \u2014 bring the film back into view, once, on request
    outer.scrollIntoView({behavior:calm?'auto':'smooth',block:'start'});
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
    var nameEl=c.querySelector('span.e-paragraph-link-base')||c.querySelector('span')||c;
    if(nameEl!==c){
      nameEl.setAttribute('role','button'); nameEl.setAttribute('tabindex','0');
      nameEl.setAttribute('aria-label','Load the '+FILMS[i].name+' film');
      nameEl.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();switchFilm(i)}});
    }
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
