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
      <html>{`
<div class="cmd-wrap">
  <pre id="cmd-prompt" style="margin:0;padding:18px 110px 14px 22px;white-space:pre-wrap;word-break:break-word;font-family:'GeistM',ui-monospace,monospace;font-size:13.5px;line-height:1.75;color:#ECECF1">${prompt}</pre>
  <button type="button" class="cmd-copy" data-copy="cmd-prompt" aria-label="Copy the setup prompt">COPY</button>
</div>
<div class="cmd-wiz">
  <span># Prefer a wizard?&nbsp;</span><code id="cmd-npx">npx @algorismus/create-elementor-ultra</code>
  <button type="button" class="cmd-copy cmd-inline" data-copy="cmd-npx" aria-label="Copy the npx command">COPY</button>
</div>
<style>
  .cmd-wrap{position:relative}
  .cmd-copy{appearance:none;border:1.5px solid #28C840;background:transparent;color:#28C840;
    border-radius:999px;padding:5px 12px;font-family:'GeistM',ui-monospace,monospace;font-size:11px;
    letter-spacing:.1em;cursor:pointer}
  .cmd-copy:hover,.cmd-copy:focus-visible{background:#28C840;color:#0A0A0E;outline:none}
  .cmd-copy.done{background:#28C840;color:#0A0A0E}
  .cmd-wrap .cmd-copy{position:absolute;top:14px;right:16px}
  .cmd-wiz{display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:0 22px 18px;
    font-family:'GeistM',ui-monospace,monospace;font-size:13px;color:#7ED99B}
  .cmd-wiz code{color:#ECECF1}
  @media(max-width:640px){.cmd-wrap .cmd-copy{position:static;margin:0 22px 10px}
    #cmd-prompt{padding-right:22px}}
</style>
<script>
(function(){
  document.querySelectorAll('.cmd-copy').forEach(function(b){
    b.addEventListener('click',function(){
      var el=document.getElementById(b.dataset.copy);
      var txt=el?el.textContent:'';
      function done(){b.classList.add('done');b.textContent='COPIED \u2713';
        setTimeout(function(){b.classList.remove('done');b.textContent='COPY'},1800)}
      if(navigator.clipboard&&navigator.clipboard.writeText){
        navigator.clipboard.writeText(txt).then(done,function(){fallback()})
      } else fallback();
      function fallback(){
        var ta=document.createElement('textarea');ta.value=txt;ta.style.position='fixed';ta.style.opacity='0';
        document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}catch(e){}
        document.body.removeChild(ta);
      }
    });
  });
})();
</script>`}</html>
    </box>
    <text size={13} font={t.font.mono} color={t.color.dim} sx={{ letterSpacing: '.04em' }}>
      FREE & MIT · NODE 18+ · NO DOCKER NEEDED · ELEMENTOR FREE IS ENOUGH
    </text>
    <text size={14.5} font={t.font.body} color={t.color.dim} lh={1.6} maxw={680}>
      Prefer to read before you run an agent on your machine? SETUP.md is the exact file your
      agent follows.
    </text>
    <text href="https://github.com/Algorismus-io/elementor-ultra/blob/main/SETUP.md" size={15} weight={600} font={t.font.body} color={t.color.ink}>
      Read SETUP.md first ↗
    </text>
    <row tw="flex flex-wrap gap-6">
      <text href="https://github.com/Algorismus-io/elementor-jsx" size={15} weight={600} font={t.font.body} color={t.color.ink}>GitHub — Algorismus-io/elementor-jsx ↗</text>
      <text href="https://www.npmjs.com/package/@algorismus/elementor-jsx" size={15} weight={600} font={t.font.body} color={t.color.ink}>npm — @algorismus/elementor-jsx ↗</text>
      <text href="https://docs.wpos.ai/ultra" size={15} weight={600} font={t.font.body} color={t.color.ink}>Docs ↗</text>
      <text href="https://docs.wpos.ai/ultra/examples/overview" size={15} weight={600} font={t.font.body} color={t.color.ink}>All eight films ↗</text>
    </row>
  </section>
);

export const Colophon = ({ theme: t }) => (
  <section id="colophon" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-4" pad={[40, 24, 72, 24]} sx={{ borderTop: `2px solid ${t.color.ink}`, marginTop: '24px' }}>
    <heading tag="h2" w="100%" size={44} weight={400} font={t.font.display} color={t.color.ink} lh={1.05} mobile={{ size: 30 }}>
      Your agent can build the next one.
    </heading>
    <row id="cta-close" tw="flex gap-4 items-center max-md:flex-col max-md:items-start">
      <box tw="flex items-center justify-center" bg={t.color.ink} pad={[13, 26]} sx={{ borderRadius: '10px', border: `2px solid ${t.color.ink}` }}>
        <text href="#start" size={15} weight={600} font={t.font.body} color={t.color.paper}>Install in one paste — free</text>
      </box>
      <box tw="flex items-center justify-center" bg="transparent" pad={[13, 26]} sx={{ borderRadius: '10px', border: `2px solid ${t.color.ink}` }}>
        <text href="https://github.com/Algorismus-io/elementor-jsx" size={15} weight={600} font={t.font.body} color={t.color.ink}>★ Star it on GitHub</text>
      </box>
    </row>
    <row tw="flex flex-wrap gap-6" pad={[4, 0, 10, 0]}>
      <text href="https://github.com/Algorismus-io/elementor-jsx/discussions" size={14.5} weight={600} font={t.font.body} color={t.color.ink}>Questions? GitHub Discussions ↗</text>
      <text href="https://github.com/Algorismus-io/elementor-jsx/blob/main/CONTRIBUTING.md" size={14.5} weight={600} font={t.font.body} color={t.color.ink}>Contribute ↗</text>
      <text href="https://docs.wpos.ai/ultra" size={14.5} weight={600} font={t.font.body} color={t.color.ink}>Docs ↗</text>
    </row>
    <text size={13.5} font={t.font.mono} color={t.color.go} lh={1.7}>
      COLOPHON — this page practices what it preaches: an AI agent built it with elementor-jsx,
      deployed it through the loop it describes, and passed the same gates. Zero human edits.
      Flip the switch to read its source.
    </text>
    <text size={13} font={t.font.body} color={t.color.dim} lh={1.65} maxw={820}>
      MIT © 2026 Algorismus. Not affiliated with or endorsed by Elementor Ltd — "Elementor" is
      their trademark; this is an independent, interoperating stack. The films show design studies
      of real sites, rebuilt with their public copy and assets to test the toolchain.
    </text>
  </section>
);
