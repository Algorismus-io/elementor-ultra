import { SectionHead } from './lib.jsx';

/** 04 / THE STACK — five pieces as a catalog sheet. */

const rows = [
  ['01', 'COMPILER + CLI', '@algorismus/elementor-jsx', 'Typed JSX → native Elementor V4 JSON. Build, deploy, lint, media, import — and the exjsx dev live loop.'],
  ['02', 'MCP SERVER', '@algorismus/elementor-ultra-mcp', '~90 tools for any MCP-capable agent: build, refactor, govern pages, design system, HTML→Elementor.'],
  ['03', 'COMPANION PLUGIN', 'WordPress plugin · GPL', 'The authoritative REST write path on the site: server-side validation, backups, rollback, capability probes.'],
  ['04', 'VERIFY STUDIO', '@algorismus/elementor-ultra-studio', 'Post-deploy gates, health doctor, measure toolkit — Playwright-driven, no hand-written scripts.'],
  ['05', 'LOCAL WORDPRESS', '@algorismus/elementor-ultra-playground', 'Real WordPress + Elementor from a pre-baked snapshot, in seconds. Pure Node — no Docker.'],
];

export const Stack = ({ theme: t }) => (
  <section id="stack" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-7" pad={[72, 24]} mobile={{ pad: [32, 18] }}>
    <SectionHead theme={t} no="04" label="The stack" />
    <heading tag="h2" w="100%" size={64} weight={400} font={t.font.display} color={t.color.ink} lh={1.02}
      sx={{ textTransform: 'uppercase', letterSpacing: '.01em' }} mobile={{ size: 36 }}>
      Five pieces. Use all of them, or one.
    </heading>
    <box tw="flex flex-col w-full" sx={{ borderTop: `2px solid ${t.color.ink}` }}>
      {rows.map(([no, name, pkg, desc]) => (
        <row tw="flex w-full gap-5 items-start" pad={[18, 4]} tw="max-md:flex-col" sx={{ borderBottom: `1px solid ${t.color.line}` }}>
          <box tw="flex" pad={0} sx={{ flexGrow: '0', flexShrink: '0', flexBasis: '40px' }}>
            <text size={13} font={t.font.mono} color={t.color.go}>{no}</text>
          </box>
          <box tw="flex" pad={0} sx={{ flexGrow: '0', flexShrink: '0', flexBasis: '360px', justifyContent: 'flex-start' }}>
            <text size={23} font={t.font.display} color={t.color.ink} sx={{ letterSpacing: '.03em' }} mobile={{ size: 22 }}>{name}</text>
          </box>
          <box tw="flex flex-col gap-1" sx={{ flexGrow: '1', flexShrink: '1', flexBasis: '0', minWidth: '0' }}>
            <text size={13} font={t.font.mono} color={t.color.go}>{pkg}</text>
            <text size={14.5} font={t.font.body} color={t.color.dim} lh={1.55}>{desc}</text>
          </box>
        </row>
      ))}
    </box>
    <row tw="flex flex-wrap gap-8" pad={[8, 0]}>
      <text size={13} font={t.font.mono} color={t.color.dim}>8 SITES SHIPPED ON CAMERA</text>
      <text size={13} font={t.font.mono} color={t.color.dim}>17–31 MIN PER SITE</text>
      <text size={13} font={t.font.mono} color={t.color.dim}>0 HUMAN EDITS</text>
      <text size={13} font={t.font.mono} color={t.color.dim}>400+ COMPILER TESTS · CERTIFIED 4.1.4 / 4.2.0</text>
    </row>
  </section>
);
