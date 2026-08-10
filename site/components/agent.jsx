/** The AGENT surface — not a mirror, the working entry point. Raw by design. */

const surface = `# ELEMENTOR ULTRA :: MACHINE SURFACE
# for agents, crawlers, and humans who prefer it raw
# ────────────────────────────────────────────────────────────

WHAT ........ agent-native build stack for Elementor. JSX in,
              native editable V4 pages out over REST. MIT.

SETUP ....... paste to any MCP-capable agent and stand back:

              Set up Elementor Ultra on this machine by fetching
              and following https://raw.githubusercontent.com/
              Algorismus-io/elementor-ultra/main/SETUP.md
              exactly, step by step. Work autonomously and
              verify each step.

WIZARD ...... npx @algorismus/create-elementor-ultra

STACK ....... @algorismus/elementor-jsx ........ compiler + CLI
              @algorismus/elementor-ultra-mcp .. ~90 MCP tools
              @algorismus/elementor-ultra-studio  gates + doctor
              @algorismus/elementor-ultra-playground  local WP
              companion WordPress plugin ....... REST seam (GPL)

LOOP ........ npx exjsx dev <site> --gates
              save -> ms rebuild -> diff deploy -> hot reload
              -> verify @ 1200 / 1920 / 390

VALIDATION .. server-side authoritative validator; writes are
              backup-first with per-page rollback. base_hash
              optimistic concurrency. op_id idempotency.

DOCS ........ https://docs.wpos.ai/ultra
REPO ........ https://github.com/Algorismus-io/elementor-ultra

PROOF ....... 8 production-shaped sites, built live on camera,
              one prompt each, zero human edits:
              housemait  9 sections  31 min
              canopy    10 sections  17 min
              alike      8 sections  22 min
              triple     8 sections  25 min
              billow     9 sections  25 min
              pumo       8 sections  30 min
              mat        6 sections  21 min
              bt26       8 parts     24 min
              films + scrollable results:
              https://docs.wpos.ai/ultra/examples/overview

SOURCE ...... this very page is elementor-jsx output. excerpt
              of the hero you just flipped from:

              <heading tag="h1" size={132}
                font={t.font.display} color={t.color.ink}
                sx={{ textTransform: 'uppercase' }}>
                One prompt in.<br />A site out.
              </heading>

LICENSE ..... MIT (c) 2026 Algorismus. not affiliated with or
              endorsed by Elementor Ltd; "Elementor" is their
              trademark. independent, interoperating stack.

HUMAN? ...... there is a prettier version of this page.
              press H, or use the switch, top right.`;

export const AgentSurface = ({ theme: t }) => (
  <box id="agent-surface" tw="flex flex-col items-center w-full" bg={t.color.stage} pad={[64, 24, 90, 24]} mobile={{ pad: [40, 14, 60, 14] }}>
    <box tw="flex flex-col w-full max-w-[880px]">
      <html>{`<pre style="margin:0;white-space:pre-wrap;word-break:break-word;
        font-family:'IBM Plex Mono',ui-monospace,SFMono-Regular,monospace;
        font-size:13.5px;line-height:1.75;color:#28C840;">${surface
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`}</html>
    </box>
  </box>
);
