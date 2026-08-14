import { SectionHead, Btn } from './lib.jsx';

/** 02 / THE FIFTY — the showcase. Fifty invented brands, fifty real Elementor pages,
 *  built in one run and ranked best-first by a human design review.
 *
 *  The tiles are lifted verbatim from the archive's own canonical index
 *  (/showcase/index.json, ranks 1–10): slug, name, industry, archetype, and the
 *  page's own ground + ink. Each tile wears the palette of the page it links to —
 *  the same device as the eight film chips in 01, and the reason this reads as
 *  fifty different art directions rather than fifty runs of one template. */

const top = [
  ['runtime-conf', 'RUNTIME', 'Developer conference', 'oversized type as layout', '#FFFFFF', '#000000'],
  ['blunt-instrument', 'Blunt Instrument', 'Performance marketing agency', 'oversized type as layout', '#000000', '#FFFFFF'],
  ['loud-quarry', 'Loud Quarry', 'Music festival', 'poster wall / zine spread', '#101014', '#F2F0EA'],
  ['fourth-hand', 'Fourth Hand', 'Vintage watch marketplace', 'catalogue grid', '#131417', '#E9E7E2'],
  ['hard-turn', 'Hard Turn', 'Brand identity agency', 'asymmetric diagonal collage', '#EFEFEA', '#0A0A0A'],
  ['casa-ocotillo', 'Casa Ocotillo', 'Boutique hotel', 'split-screen scroller', '#EDE3D6', '#332A22'],
  ['onsen-mirador', 'Onsen Mirador', 'Bathhouse and spa', 'split-screen scroller', '#0E1416', '#E8EEEC'],
  ['the-undertow', 'The Undertow', 'Investigative magazine', 'editorial index rail', '#F7F5F0', '#111111'],
  ['the-ward-paper', 'The Ward', 'Local news cooperative', 'single-column long-form', '#FFFDFA', '#141414'],
  ['kilnhouse', 'Kilnhouse', 'DTC cookware', 'catalogue grid', '#F4EFE6', '#221D18'],
];

export const Fifty = ({ theme: t }) => (
  <section id="fifty" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-7" pad={[72, 24]} mobile={{ pad: [32, 18] }}>
    <SectionHead theme={t} no="02" label="Fifty in a day" />
    <heading tag="h2" w="100%" size={64} weight={400} font={t.font.display} color={t.color.ink} lh={1.02}
      sx={{ textTransform: 'uppercase', letterSpacing: '.01em' }} mobile={{ size: 34 }}>
      Fifty invented brands. Fifty real Elementor pages.
    </heading>
    <text size={16.5} font={t.font.body} color={t.color.dim} lh={1.65} maxw={680}>
      One run, fifty briefs, about one developer day. Each brief named a fictional business,
      an audience and a visual archetype — and an agent took it from there: art direction,
      palette, type, copy, imagery, and a native Elementor build through exjsx.
      No human wrote the layouts. Humans debugged what broke and ranked all fifty by eye,
      best first. The weak ones are still in the list.
    </text>
    <html>{`
<div class="fifty-film">
  <video id="fifty-loop" muted loop playsinline preload="none"
    poster="/wp-content/uploads/film/loop-poster.jpg"
    src="/wp-content/uploads/film/loop-16x9.mp4"
    aria-label="Silent six-second loop: all fifty pages assembling into one grid"></video>
  <div class="fifty-under">
    <span class="fifty-cap">50 PAGES · 50 ART DIRECTIONS · ONE RUN · SILENT 6s LOOP</span>
    <button type="button" id="fifty-play" aria-label="Play or pause the loop">▶ PLAY</button>
  </div>
</div>
<script>
(function(){
  var v=document.getElementById('fifty-loop');
  var b=document.getElementById('fifty-play');
  if(!v||!b)return;
  var calm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function sync(){b.textContent=v.paused?'▶ PLAY':'❚❚ PAUSE'}
  b.addEventListener('click',function(){
    if(v.paused){var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause();
  });
  v.addEventListener('play',sync); v.addEventListener('pause',sync); sync();
  // preload="none" + play only while on screen: the loop costs nothing until it is read,
  // and nothing at all if the reader asked for reduced motion.
  if(!calm&&'IntersectionObserver' in window){
    new IntersectionObserver(function(es){
      if(es[0].isIntersecting){var p=v.play();if(p&&p.catch)p.catch(function(){})}
      else v.pause();
    },{threshold:.25}).observe(v);
  }
})();
</script>`}</html>
    <text size={12} font={t.font.mono} color={t.color.dim} sx={{ letterSpacing: '.14em' }}>
      THE TOP TEN OF FIFTY — RANKED BY A HUMAN DESIGN REVIEW
    </text>
    <row id="fifty-row" tw="flex flex-wrap gap-3 w-full">
      {top.map(([slug, name, industry, archetype, ground, ink]) => (
        <box bg={ground} pad={[13, 16]} sx={{ borderRadius: '12px', border: `1px solid ${t.color.line}`, flexGrow: '1', flexShrink: '0', flexBasis: '205px' }}>
          <text href={`/showcase/${slug}/`} size={15.5} weight={700} font={t.font.body} color={ink}>{name}</text>
          <text size={12.5} font={t.font.body} color={ink} sx={{ opacity: '.8' }}>{industry}</text>
          <text size={11} font={t.font.mono} color={ink} pad={[7, 0, 0, 0]} sx={{ opacity: '.72' }}>{archetype}</text>
        </box>
      ))}
    </row>
    <row id="cta-fifty" tw="flex gap-4 items-center max-md:flex-col max-md:items-start">
      <Btn theme={t} href="/showcase/" label="Open the showcase — all 50" />
      <Btn theme={t} href="/showcase/runtime-conf/" label="Read the best one" ghost />
    </row>
    <text size={13} font={t.font.body} color={t.color.dim} lh={1.6} maxw={680}>
      Every one of those fifty businesses is invented. The text, statistics, prices, reviews,
      people and images on them were generated as a design demonstration — nothing there is a
      real offer or a real endorsement. Each case study carries the notice, and each embeds the
      page itself, live and sandboxed, so you can scroll the real thing.
    </text>
  </section>
);
