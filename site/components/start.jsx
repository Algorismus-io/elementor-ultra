import { SectionHead } from './lib.jsx';

/** 05 / START — the paste-prompt terminal card + colophon. */

const prompt = `Set up Elementor Ultra on this machine by fetching and following
https://raw.githubusercontent.com/Algorismus-io/elementor-ultra/main/SETUP.md
exactly, step by step. Work autonomously and verify each step.`;

export const Start = ({ theme: t }) => (
  <section id="start" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-7" pad={[72, 24]} mobile={{ pad: [32, 18] }}>
    <SectionHead theme={t} no="05" label="Start" />
    <heading tag="h2" w="100%" size={64} weight={400} font={t.font.display} color={t.color.ink} lh={1.02}
      sx={{ textTransform: 'uppercase', letterSpacing: '.01em' }} mobile={{ size: 36 }}>
      Up and running in one paste.
    </heading>
    <box tw="flex flex-col w-full" bg={t.color.stage} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
      <row tw="flex items-center gap-2" pad={[12, 18]} bg={t.color.stagePanel} sx={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <box bg="#FF5F57" sx={{ width: '11px', height: '11px', borderRadius: '50%' }} />
        <box bg="#FEBC2E" sx={{ width: '11px', height: '11px', borderRadius: '50%' }} />
        <box bg="#28C840" sx={{ width: '11px', height: '11px', borderRadius: '50%' }} />
        <text size={12.5} font={t.font.mono} color={t.color.termDim} pad={[0, 0, 0, 8]}>paste this to your AI agent — Claude Code, Cursor, Windsurf, anything MCP</text>
      </row>
      <html>{`<pre style="margin:0;padding:18px 22px;white-space:pre-wrap;word-break:break-word;font-family:'GeistM',ui-monospace,monospace;font-size:13.5px;line-height:1.75;color:#ECECF1">${prompt}</pre>`}</html>
      <text size={13} font={t.font.mono} color={t.color.termDim} pad={[0, 22, 18, 22]}>
        # Prefer a wizard?  npx @algorismus/create-elementor-ultra
      </text>
    </box>
    <text size={13} font={t.font.mono} color={t.color.dim} sx={{ letterSpacing: '.04em' }}>
      NODE 18+ · DOCKER OPTIONAL · ELEMENTOR FREE IS ENOUGH
    </text>
    <row tw="flex flex-wrap gap-6">
      <text href="https://github.com/Algorismus-io/elementor-ultra" size={15} weight={600} font={t.font.body} color={t.color.ink}>GitHub — Algorismus-io/elementor-ultra ↗</text>
      <text href="https://docs.wpos.ai/ultra" size={15} weight={600} font={t.font.body} color={t.color.ink}>Docs ↗</text>
      <text href="https://docs.wpos.ai/ultra/examples/overview" size={15} weight={600} font={t.font.body} color={t.color.ink}>All eight films ↗</text>
    </row>
  </section>
);

export const Colophon = ({ theme: t }) => (
  <section id="colophon" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-4" pad={[40, 24, 72, 24]} sx={{ borderTop: `2px solid ${t.color.ink}`, marginTop: '24px' }}>
    <text size={13.5} font={t.font.mono} color={t.color.go} lh={1.7}>
      COLOPHON — this page practices what it preaches: 10 elementor-jsx components written by an AI
      agent, 158 local styles deduped to 93 shared classes, deployed through the same loop it
      describes, gates green at 1200 / 1920 / 390. Zero human edits. Flip the switch to read its source.
    </text>
    <text size={13} font={t.font.body} color={t.color.dim} lh={1.65} maxw={820}>
      MIT © 2026 Algorismus. Not affiliated with or endorsed by Elementor Ltd — "Elementor" is
      their trademark; this is an independent, interoperating stack. The films show design studies
      of real sites, rebuilt with their public copy and assets to test the toolchain.
    </text>
  </section>
);
