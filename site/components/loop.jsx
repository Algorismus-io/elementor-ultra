import { SectionHead } from './lib.jsx';

/** 03 / THE LOOP — instrument strip + a real dev.log excerpt (housemait, film #2). */

const steps = [
  ['SAVE', 'a component file'],
  ['BUILD', 'rebuild in ms'],
  ['DEPLOY', 'diff-driven, ~3 s'],
  ['RELOAD', 'live preview'],
  ['GATES', '1200 · 1920 · 390'],
];

const log = `[dev] full deploy (kit changed) · 1 page(s) · 6468ms
[dev] gates PASS (/)
[dev] no effective change (30ms)
[dev] full deploy (kit changed) · 1 page(s) · 8075ms
[dev] gates FAIL (/) — /@1200 overflow
[dev] full deploy (kit changed) · 1 page(s) · 7324ms
[dev] gates PASS (/)`;

export const Loop = ({ theme: t }) => (
  <section id="loop" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-7" pad={[72, 24]} mobile={{ pad: [32, 18] }}>
    <SectionHead theme={t} no="03" label="The loop" />
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
      <text size={12} font={t.font.mono} color={t.color.termDim} sx={{ letterSpacing: '.12em' }}>REAL LOG — HOUSEMAIT BUILD, FILM #2 (UNEDITED, FAIL INCLUDED)</text>
      <html>{`<pre style="margin:0;white-space:pre-wrap;font-family:'IBM Plex Mono',ui-monospace,monospace;font-size:12.5px;line-height:1.75;color:#28C840">${log}</pre>`}</html>
    </box>
    <text size={16.5} font={t.font.body} color={t.color.dim} lh={1.65} maxw={720}>
      That FAIL line is the point. The agent sees pass/fail per save — at desktop, wide, and
      mobile — so it corrects itself in the next save instead of shipping blind. Verification
      is a first-class primitive, not an afterthought script.
    </text>
  </section>
);
