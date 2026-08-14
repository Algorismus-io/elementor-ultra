import { SectionHead } from './lib.jsx';

/** 03 / THE LOOP — instrument strip + a real dev.log excerpt (housemait, film #2). */

const steps = [
  ['SAVE', 'a component file'],
  ['BUILD', 'rebuild in ms'],
  ['DEPLOY', 'diff-driven, ~3 s'],
  ['RELOAD', 'live preview'],
  ['GATES', '1200 · 1920 · 390'],
];

export const Loop = ({ theme: t }) => (
  <section id="loop" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-7" pad={[72, 24]} mobile={{ pad: [32, 18] }}>
    <SectionHead theme={t} no="04" label="The loop" />
    <heading tag="h2" w="100%" size={64} weight={400} font={t.font.display} color={t.color.ink} lh={1.02}
      sx={{ textTransform: 'uppercase', letterSpacing: '.01em' }} mobile={{ size: 36 }}>
      Save a file. The site updates. The gates run.
    </heading>
    <row id="loop-strip" tw="flex w-full items-stretch max-md:flex-col" sx={{ border: `2px solid ${t.color.ink}`, borderRadius: '14px', overflow: 'hidden' }}>
      {steps.map(([k, d], i) => (
        <box tw="flex flex-col gap-1" pad={[16, 18]} bg={i === 4 ? t.color.go : t.color.paper}
          sx={{ flexGrow: '1', flexShrink: '1', flexBasis: '0', borderRight: i < 4 ? `1px solid ${t.color.line}` : 'none' }}
          mobile={{ sx: { borderRight: 'none', borderBottom: i < 4 ? `1px solid ${t.color.line}` : 'none' } }}>
          <text size={20} font={t.font.display} color={i === 4 ? t.color.paper : t.color.ink} sx={{ letterSpacing: '.05em' }}>{k}</text>
          <text size={12} font={t.font.mono} color={i === 4 ? '#DFF5E4' : t.color.dim}>{d}</text>
        </box>
      ))}
    </row>
    <box tw="flex flex-col gap-2" bg={t.color.stage} pad={[18, 22]} sx={{ borderRadius: '14px' }}>
      <text size={12} font={t.font.mono} color={t.color.termDim} sx={{ letterSpacing: '.12em' }}>LIVE — THE LOOP, AS IT RUNS (REAL HOUSEMAIT LOG LINES)</text>
      <html>{`
<div id="loop-log" style="min-height:88px;font-family:'GeistM',ui-monospace,monospace;font-size:12.5px;line-height:1.75;color:#28C840"></div>
<style>
  .ls-on{box-shadow:inset 0 -3px 0 #1F9D44}
  .ls-go{filter:brightness(1.07)}
  .ll-line{opacity:0;transition:opacity .5s;display:block}
  .ll-line.in{opacity:1}
  .ll-fail{color:#FFB224}
  .ll-dim{color:#7ED99B}
</style>
<script>
(function(){
  var strip=document.getElementById('loop-strip');
  var logEl=document.getElementById('loop-log');
  if(!strip||!logEl)return;
  logEl.setAttribute('aria-hidden','true');
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    ['[dev] full deploy (kit changed) \u00b7 1 page(s) \u00b7 6468ms','[dev] gates PASS (/)',
     '[dev] full deploy (kit changed) \u00b7 1 page(s) \u00b7 8075ms','[dev] gates PASS (/)'].forEach(function(l){
      var d=document.createElement('span');d.className='ll-line in';d.textContent=l;logEl.appendChild(d)});
    return;
  }
  var cells=strip.children;
  var DEPLOYS=['6468ms','8075ms','7324ms','12386ms','9861ms'];
  var running=false,timers=[],di=0,cycle=0;
  function later(fn,ms){timers.push(setTimeout(fn,ms))}
  function clearTimers(){timers.forEach(clearTimeout);timers=[]}
  function setStep(i){
    for(var j=0;j<cells.length;j++){cells[j].classList.toggle('ls-on',j===i&&i<4);
      cells[j].classList.toggle('ls-go',j===i&&i===4);}
  }
  function addLine(txt,cls){
    var d=document.createElement('span');d.className='ll-line'+(cls?' '+cls:'');d.textContent=txt;
    logEl.appendChild(d);
    requestAnimationFrame(function(){requestAnimationFrame(function(){d.classList.add('in')})});
    while(logEl.children.length>4)logEl.removeChild(logEl.firstChild);
  }
  function run(){
    if(!running)return;
    cycle++;
    var fail=(cycle%4===3);
    setStep(0);
    later(function(){ if(!running)return; setStep(1);
    later(function(){ if(!running)return; setStep(2);
      di=(di+1)%DEPLOYS.length;
      addLine('[dev] full deploy (kit changed) \\u00b7 1 page(s) \\u00b7 '+DEPLOYS[di]);
    later(function(){ if(!running)return; setStep(3);
    later(function(){ if(!running)return; setStep(4);
      if(fail){ addLine('[dev] gates FAIL (/) \\u2014 /@1200 overflow','ll-fail'); }
      else { addLine('[dev] gates PASS (/)'); }
    later(function(){ if(!running)return; setStep(-1);
    later(run,2400);
    },1700);},900);},1900);},900);},1200);
  }
  function start(){if(running)return;running=true;logEl.innerHTML='';cycle=0;run()}
  function stop(){running=false;clearTimers();setStep(-1)}
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(e){e.isIntersecting?start():stop()})},{threshold:.3}).observe(document.getElementById('loop'));
  } else start();
})();
</script>`}</html>
    </box>
    <text size={16.5} font={t.font.body} color={t.color.dim} lh={1.65} maxw={720}>
      That FAIL line is the point. Gates are automated pass/fail checks at 1200, 1920 and
      390 px — desktop, wide and mobile. The agent sees the verdict on every save and corrects
      itself in the next one. Checking the result is built into the loop, not a script you
      remember to run at the end.
    </text>
  </section>
);
