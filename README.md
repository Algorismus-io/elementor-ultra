# Elementor Ultra

**The agent-native build stack for Elementor.** Give an AI agent full authority to build and deploy
real Elementor/WordPress pages — an MCP server (~90 tools), a JSX→Elementor compiler with a CLI, and
a companion WordPress plugin. Open source, MIT.

## Set it up — paste this to your AI agent

Copy this into Claude Code, Cursor, Windsurf, or any MCP-capable agent:

> Set up Elementor Ultra on this machine by fetching and following
> https://raw.githubusercontent.com/Algorismus-io/elementor-ultra/main/SETUP.md
> exactly, step by step. Work autonomously and verify each step.

That's the whole thing. The agent reads the always-current [SETUP.md](SETUP.md), stands up a local
WordPress (no Docker needed), wires itself in as an MCP server, installs the CLI, and proves the
chain end-to-end. You only act when it needs a credential or a client restart.

Prefer a wizard? `npx @algorismus/create-elementor-ultra`.

## What's in the stack

| Piece | Package / repo | What it is |
|---|---|---|
| CLI + compiler | [`@algorismus/elementor-jsx`](https://github.com/Algorismus-io/elementor-jsx) | write small typed JSX components → native Elementor V4 JSON, deploy over REST |
| MCP server | [`@algorismus/elementor-ultra-mcp`](https://github.com/Algorismus-io/elementor-ultra-mcp) | ~90 agent tools; runs via `npx` — build, refactor, govern pages, HTML→Elementor convert |
| Companion plugin | in the MCP repo's [releases](https://github.com/Algorismus-io/elementor-ultra-mcp/releases) | the authoritative WordPress REST write path (validation, backups, rollback) |
| Verify studio | [`@algorismus/elementor-ultra-studio`](https://github.com/Algorismus-io/elementor-ultra-studio) | post-deploy gates + health doctor: `eu-studio check / doctor / measure` (Playwright-driven, no hand-written scripts) |
| Installer | [`@algorismus/create-elementor-ultra`](https://github.com/Algorismus-io/create-elementor-ultra) | one-command interactive onboarding + the skills knowledge base |

## Common tasks

- **Set up** → paste the prompt above, or `npx @algorismus/create-elementor-ultra`
- **Iterate live** → `npx exjsx dev site --gates` (watch → rebuild → smart deploy → preview on :4477; `--gates` re-checks changed pages per save)
- **Update** → [UPDATE.md](UPDATE.md) (`npm i -D @algorismus/elementor-jsx@latest`, then rebuild + redeploy)
- **Local WordPress with no Docker** → `npx @algorismus/elementor-ultra-playground` (pre-baked snapshot, up in seconds)
- **Fix an error** → the skills knowledge base's `references/troubleshooting.md`
- **Docs** → [docs.wpos.ai/ultra](https://docs.wpos.ai/ultra)

## Requirements

Node ≥ 18, an AI client that speaks MCP, and either Docker or nothing (the default local path uses
WordPress Playground — pure Node).

## License

MIT © 2026 [Algorismus](https://algorismus.io). Not affiliated with or endorsed by Elementor Ltd —
"Elementor" is their trademark; this is an independent, interoperating stack.
