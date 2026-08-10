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
    <box id="film-frame" tw="flex flex-col w-full" bg={t.color.ink} pad={10} sx={{ borderRadius: '18px' }}>
      <html>{`<div class="ultra-stamp">CERTIFIED 4.1.4 / 4.2.0</div>`}</html>
      <html>{`<video controls muted playsinline preload="metadata"
        poster="https://docs.wpos.ai/images/ultra/examples/housemait-thumb.jpg"
        src="https://docs.wpos.ai/videos/ultra/examples/housemait.mp4"
        style="width:100%;display:block;border-radius:10px;background:#000"></video>`}</html>
      <text size={12.5} font={t.font.mono} color={t.color.paper} pad={[10, 8, 4, 8]} sx={{ letterSpacing: '.06em' }}>
        HOUSEMAIT — 9 SECTIONS · 31 MIN OF AGENT TIME · 0 HUMAN EDITS
      </text>
    </box>
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
