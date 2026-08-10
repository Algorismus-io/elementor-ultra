import { Btn } from './lib.jsx';
import { Ticker } from './chrome.jsx';

/** Nav + hero — the paper spec opens. */

export const Nav = ({ theme: t }) => (
  <row id="topnav" tw="flex items-center w-full max-w-[1180px] px-6" pad={[22, 24]} sx={{ justifyContent: 'space-between' }}>
    <text size={20} font={t.font.display} color={t.color.ink} sx={{ letterSpacing: '.04em' }}>ELEMENTOR—ULTRA</text>
    <row tw="flex items-center gap-6 max-md:hidden" sx={{ flexGrow: '1', justifyContent: 'flex-end' }}>
      <text href="https://docs.wpos.ai/ultra" size={14} font={t.font.body} color={t.color.dim}>Docs</text>
      <text href="https://docs.wpos.ai/ultra/examples/overview" size={14} font={t.font.body} color={t.color.dim}>Examples</text>
      <text href="https://github.com/Algorismus-io/elementor-ultra" size={14} font={t.font.body} color={t.color.dim}>GitHub</text>
    </row>
  </row>
);

export const Hero = ({ theme: t }) => (
  <section id="hero" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-8" pad={[88, 24, 72, 24]} mobile={{ pad: [40, 18, 36, 18] }}>
    <text size={13} font={t.font.mono} color={t.color.go} sx={{ letterSpacing: '.16em' }}>
      THE AGENT-NATIVE BUILD STACK FOR ELEMENTOR · OPEN SOURCE · MIT
    </text>
    <heading tag="h1" w="100%" size={126} weight={400} font={t.font.display} color={t.color.ink} lh={0.96} mobile={{ size: 50 }}>
      One prompt in.
    </heading>
    <box id="h1-stroke" tw="flex w-full" pad={0} sx={{ marginTop: '-14px' }}>
      <heading tag="h2" w="100%" size={126} weight={400} font={t.font.display} color={t.color.ink} lh={0.96} mobile={{ size: 50 }}>
        A site out.
      </heading>
    </box>
    <text size={19} font={t.font.body} color={t.color.dim} lh={1.65} maxw={680} mobile={{ size: 16 }}>
      Elementor pages are JSON documents in a database — your agent could always write them,
      blind, a thousand untyped lines at a time. That's why agent-built pages looked agent-built.
      Ultra gives agents what developers have: components, types, hot reload, and proof.
      Beautiful pages are what happens when agents can see what they're doing.
    </text>
    <row tw="flex gap-4 items-center max-md:flex-col max-md:items-start">
      <Btn theme={t} href="#proof" label="Watch an agent build — 1:38" />
      <Btn theme={t} href="#start" label="Set up in one paste" ghost />
    </row>
    <text size={13} font={t.font.mono} color={t.color.dim} sx={{ letterSpacing: '.04em' }}>
      You're in human mode. Press <strong>A</strong> — or flip the
      switch — to read this page the way an agent does.
    </text>
  </section>
);

export { Ticker };
