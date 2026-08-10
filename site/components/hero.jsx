import { Btn } from './lib.jsx';
import { Ticker } from './chrome.jsx';

/** Nav + hero — the paper spec opens. */

export const Nav = ({ theme: t }) => (
  <row id="topnav" tw="flex items-center w-full max-w-[1180px] px-6" pad={[22, 24]} sx={{ justifyContent: 'space-between' }}>
    <text size={20} font={t.font.display} color={t.color.ink} sx={{ letterSpacing: '.04em' }}>ELEMENTOR—ULTRA</text>
    <row tw="flex items-center gap-6 max-md:hidden" sx={{ flexGrow: '1', justifyContent: 'flex-end' }}>
      <text href="https://docs.wpos.ai/ultra" size={14} font={t.font.body} color={t.color.dim}>Docs</text>
      <text href="https://docs.wpos.ai/ultra/examples/overview" size={14} font={t.font.body} color={t.color.dim}>Examples</text>
      <text href="https://github.com/Algorismus-io/elementor-jsx" size={14} font={t.font.body} color={t.color.dim}>GitHub</text>
    </row>
  </row>
);

export const Hero = ({ theme: t }) => (
  <section id="hero" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-8" pad={[88, 24, 72, 24]} mobile={{ pad: [40, 18, 36, 18] }}>
    <text size={13} font={t.font.mono} color={t.color.go} sx={{ letterSpacing: '.16em' }}>
      OPEN-SOURCE TOOLCHAIN FOR ELEMENTOR + AI AGENTS · FREE · MIT · INDEPENDENT — NOT AN ELEMENTOR LTD PRODUCT
    </text>
    <html>{`
<div class="agent-logos" aria-label="Works with">
  <span class="al-label">WORKS WITH</span>
  <span class="al-chip"><img src="/wp-content/uploads/logos/claude.svg" alt="" />Claude Code</span>
  <span class="al-chip"><img src="/wp-content/uploads/logos/cursor.svg" alt="" />Cursor</span>
  <span class="al-chip"><img src="/wp-content/uploads/logos/codex.svg" alt="" />Codex</span>
  <span class="al-chip"><img src="/wp-content/uploads/logos/githubcopilot.svg" alt="" />Copilot</span>
  <span class="al-chip al-any">any MCP agent</span>
</div>
<h1 class="mega">
  <span class="l1">One prompt in.</span><br />
  <span class="l2"><img class="e-mark" src="/wp-content/uploads/logos/elementor.svg" alt="Elementor" /> Elementor site out.</span>
</h1>`}</html>
    <text size={19} font={t.font.body} color={t.color.dim} lh={1.65} maxw={680} mobile={{ size: 16 }}>
      <strong>Build Elementor sites with your own AI agents.</strong> Your agent can already
      write Elementor pages — blind, in thousands of lines of raw JSON. That's why they look
      agent-built. Ultra gives agents typed components, hot reload, and automatic pass/fail
      checks on every save. Beautiful pages are what happens when agents can see what
      they're doing.
    </text>
    <row id="cta-row" tw="flex gap-4 items-center max-md:flex-col max-md:items-start">
      <Btn theme={t} href="#proof" label="Watch an agent build — 1:38" />
      <Btn theme={t} href="#start" label="Set up in one paste" ghost />
    </row>
    <text size={14.5} font={t.font.body} color={t.color.dim} lh={1.5} maxw={620}>
      For developers and agencies who ship client sites on Elementor and build with
      Claude Code, Cursor, Codex or any MCP agent.
    </text>
    <text size={13} font={t.font.mono} color={t.color.dim} sx={{ letterSpacing: '.04em' }}>
      Agents welcome — press <strong>A</strong> for the machine-readable version of this page.
    </text>
  </section>
);

export { Ticker };
