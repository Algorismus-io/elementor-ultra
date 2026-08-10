/** The AGENT surface — not a mirror, the working entry point. Raw by design. */

const surface = `# ELEMENTOR ULTRA :: MACHINE SURFACE
# for agents, crawlers, and humans who prefer it raw
# canonical for machines: https://exjsx.dev/llms.txt
# ────────────────────────────────────────────────────────────

WHAT ........ open-source toolchain: AI agents build native, editable
              Elementor pages. JSX in, Elementor V4 out over REST. MIT.

PREREQS ..... node >= 18; macOS / Linux / WSL2; no Docker; no existing
              WordPress needed (playground provides one); network:
              registry.npmjs.org + raw.githubusercontent.com

SETUP ....... paste to any MCP-capable agent:
              "Set up Elementor Ultra on this machine by fetching and following https://raw.githubusercontent.com/Algorismus-io/elementor-ultra/4b28b0c1ac863a27f9f1433fd4239054a0dffee6/SETUP.md step by step. Verify each step before the next."
              sha256(SETUP.md) = 67fc2699df8e42f56cb011096106cbc407199bb5
              065c55f2ea3b27a2de04f0a6
              latest (unpinned): .../main/SETUP.md

WIZARD ...... npx @algorismus/create-elementor-ultra@1.0.0
              interactive alternative to SETUP; both produce the same
              install. run one, not both.

CLI ......... exjsx = the CLI of @algorismus/elementor-jsx (npx exjsx)

STACK ....... @algorismus/elementor-jsx@1.6.0 ........ compiler + CLI
              @algorismus/elementor-ultra-mcp@1.0.0 .. 90+ MCP tools
              @algorismus/elementor-ultra-studio@0.5.0  gates + doctor
              @algorismus/elementor-ultra-playground@1.2.0  local WP
              elementor-ultra-mcp WP plugin@1.2.3 (GPL)  REST seam
              tested against: Elementor 4.1.4 / 4.2.0, free is enough

AUTH ........ MCP server -> WordPress REST via a WP Application
              Password (core mechanism, no custom tokens). created
              during setup; stored in your MCP client config for the
              server entry; revoke any time in WP Admin -> Users ->
              Profile -> Application Passwords.

LOOP ........ npx exjsx dev <site-dir> --gates
              <site-dir> = project folder from setup (exjsx init)
              save -> ms rebuild -> diff deploy -> hot reload
              -> pass/fail verify at 1200 / 1920 / 390 px viewports

VERIFY ...... after setup: npx eu-studio check --pages /
              expect: pass:true, gates green at all three widths

ON FAILURE .. every write is backed up first; per-page rollback via
              the elementor_page_rollback MCP tool (backups listed by
              elementor_page_list_backups). base_hash optimistic
              concurrency; op_id idempotency.

LIFECYCLE ... update: npm i -D @algorismus/elementor-jsx@latest, then
              rebuild + redeploy (see repo UPDATE.md). uninstall:
              remove the npm packages, the MCP server entry, the WP
              plugin, and the playground folder.

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

              <heading tag="h1" size={126}
                font={t.font.display} color={t.color.ink}>
                One prompt in. Elementor site out.
              </heading>

LICENSE ..... MIT (c) 2026 Algorismus (also operates wpos.ai; docs
              live there). independent, interoperating project — not
              affiliated with or endorsed by Elementor Ltd; "Elementor"
              is their trademark.

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
