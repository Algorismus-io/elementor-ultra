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
  var CH=[
    {n:'CH.01',t:'THE PROMPT',at:'AGENT TIME 00:12',s:2.75,
     note:'One human sentence: \\u201cRead BRIEF.md and build it exactly as written\\u2026 Go.\\u201d That is the entire human contribution to this film.',
     log:'> prompt sent \\u2014 agent takes over'},
    {n:'CH.02',t:'THE BUILD OPENS',at:'00:50 \\u2192 14:27 \\u00b7 51\\u00d7',s:14.22,
     note:'Thirteen minutes compressed. Every save: millisecond rebuild, diff-driven deploy, hot reload, gates at three widths.',
     log:'[dev] full deploy (kit changed) \\u00b7 6468ms \\u00b7 gates PASS (/)'},
    {n:'CH.03',t:'FIRST SECTION LANDS',at:'AGENT TIME 14:31',s:29.77,
     note:'The hero arrives as one save \\u2014 Recoleta, fridge magnets and all. The camera catches the reload as it happens.',
     log:'[dev] gates PASS (/)'},
    {n:'CH.04',t:'SECTION BY SECTION',at:'14:40 \\u2192 31:24 \\u00b7 62\\u00d7',s:38.92,
     note:'WhatsApp 19:48 \\u00b7 the OS 23:39 \\u00b7 stars 25:43 \\u00b7 meals 27:20. One failed gate on the way \\u2014 fixed in the next save.',
     log:'[dev] gates FAIL (/) \\u2014 /@1200 overflow \\u2192 PASS'},
    {n:'CH.05',t:'SHIPPED',at:'AGENT TIME 31:36',s:55.36,
     note:'The ship signal only fires when every section needle is live. All gates green.',
     log:'[dev] gates PASS (/) \\u00b7 9/9 sections live'},
    {n:'CH.06',t:'NATIVE ELEMENTOR',at:'THE EDITOR PROOF',s:66.11,
     note:'The finished page opens in the real editor \\u2014 heading selected, navigator showing the tree. Fully editable, no lock-in.',
     log:'post.php?action=elementor \\u2192 loaded'},
    {n:'CH.07',t:'THE RESULT',at:'FULL SCROLL',s:75.21,
     note:'Nine sections, 31 minutes of agent time, zero human edits \\u2014 then the outro card says the rest.',
     log:'eu-studio check \\u2014 pass:true'}
  ];
  var TOTAL=98.1, END=94.49;
  var v=document.getElementById('chrig-video');
  var wrap=document.getElementById('chrig-chapters');
  var rail=document.getElementById('chrig-rail');
  var prog=document.getElementById('chrig-progress');
  var fullBtn=document.getElementById('chrig-full');
  var full=false, active=-1;
  CH.forEach(function(c,i){
    var d=document.createElement('div'); d.className='chrig-card'; d.dataset.i=i;
    d.innerHTML='<div class="cc-top"><span class="cc-n">'+c.n+'</span><span class="cc-at">'+c.at+'</span></div>'+
      '<div class="cc-t">'+c.t+'</div><p class="cc-note">'+c.note+'</p><code class="cc-log">'+c.log+'</code>';
    d.addEventListener('click',function(){go(i,true)});
    wrap.appendChild(d);
    var tick=document.createElement('button'); tick.type='button'; tick.className='chrig-tick';
    tick.style.left=(c.s/TOTAL*100)+'%'; tick.title=c.n+' '+c.t;
    tick.addEventListener('click',function(e){e.stopPropagation();go(i,true)});
    rail.appendChild(tick);
  });
  var cards=wrap.querySelectorAll('.chrig-card');
  function end(i){return i<CH.length-1?CH[i+1].s:END}
  function go(i,seek){
    if(i===active&&!seek)return;
    active=i;
    cards.forEach(function(c,j){c.classList.toggle('on',j===i)});
    var ticks=rail.querySelectorAll('.chrig-tick');
    ticks.forEach(function(k,j){k.classList.toggle('on',j===i)});
    if(!full){ try{ v.currentTime=CH[i].s; var p=v.play(); if(p&&p.catch)p.catch(function(){}); }catch(e){} }
  }
  v.addEventListener('timeupdate',function(){
    prog.style.width=(v.currentTime/TOTAL*100)+'%';
    if(!full&&active>=0&&v.currentTime>=end(active)-.05){v.pause()}
  });
  fullBtn.addEventListener('click',function(){
    full=!full;
    fullBtn.textContent=full?'\\u25a0 EXIT FULL PLAY':'\\u25b6 WATCH FULL FILM';
    v.controls=full;
    if(full){ try{ v.currentTime=0; var p=v.play(); if(p&&p.catch)p.catch(function(){}); }catch(e){} }
    else { v.pause(); if(active>=0){ v.currentTime=CH[active].s; } }
  });
  var desktop=window.matchMedia('(min-width:900px)').matches;
  if(desktop&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting&&!full){ go(Number(e.target.dataset.i),false) } });
    },{rootMargin:'-42% 0px -42% 0px',threshold:0});
    cards.forEach(function(c){io.observe(c)});
  } else { go(0,false); v.pause(); }
})();
</script>`}</html>
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
