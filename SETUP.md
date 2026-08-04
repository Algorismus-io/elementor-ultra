# Elementor Ultra — agent setup instructions

**You are an AI agent. Follow these steps to set up Elementor Ultra end-to-end on this machine and
prove it works.** Elementor Ultra is an open-source stack that gives you full authority to build and
deploy real Elementor/WordPress pages: an MCP server (~90 tools), a JSX→Elementor compiler with the
`exjsx` CLI, and a companion WordPress plugin. Work autonomously; pause only for a human action or a
secret you can't obtain yourself.

## Ground rules

- Verify each step's result before moving on. If a command fails, diagnose and fix — don't proceed on a broken step.
- Never invent WordPress URLs, usernames, or passwords — ask the human for those.
- Requires Node ≥ 18 (`node --version`). On Windows, work from a directory whose path has no spaces.

## Step 1 — Load the knowledge base first

Fetch and read `https://raw.githubusercontent.com/Algorismus-io/create-elementor-ultra/main/skills/SKILL.md`,
then the five reference files it links under `skills/references/` in that repo (install,
wordpress-setup, mcp-clients, authoring, troubleshooting). Treat these as your source of truth over
your own assumptions about Elementor — they carry load-bearing gotchas (app-password ≠ login
password, plugin-required-to-deploy, `ls`/`lh` are em not px, single-param image URLs, the VS Code
config-key caveat, and current styling capabilities).

## Step 2 — Stand up WordPress (default: no Docker, one command)

Prefer the **Docker-free** path — it needs nothing but Node:

```
git clone https://github.com/Algorismus-io/elementor-ultra-mcp
cd elementor-ultra-mcp && node dev/playground/setup-playground.mjs
```

This runs WordPress (PHP-WASM) + Elementor free + the companion plugin on `http://127.0.0.1:8899`,
handles permalinks and plain-HTTP app-password auth, and **prints `WP_URL` / `WP_USER` /
`WP_APP_PASSWORD`**. Leave it running. When it finishes green, **skip Steps 3–4** and verify:
`curl -u USER:APP_PASSWORD http://127.0.0.1:8899/wp-json/elementor-ultra/v1/site/capabilities` → 200.

Only ask the human about a WordPress target if they have an **existing site** to use, or explicitly
prefer Docker (`bash dev/setup.sh`) or a stack they already run (XAMPP/LocalWP). For an existing
site: get its URL, confirm `…/wp-json/` lists an `elementor` namespace, then do Steps 3–4.

## Step 3 — Authenticate (existing sites only)

Guide the human to create a WordPress **Application Password** (wp-admin → Users → Profile →
Application Passwords — NOT their login password). Verify:
`curl -u USER:APP_PASSWORD https://SITE/wp-json/wp/v2/users/me?context=edit` → 200 with a
`capabilities` object. (401 over plain HTTP usually means the site isn't `local` env-type — app
passwords need HTTPS in production.)

## Step 4 — Companion plugin (existing sites only)

If `…/wp-json/elementor-ultra/v1/site/capabilities` 404s, install `elementor-ultra-mcp.zip` from
`https://github.com/Algorismus-io/elementor-ultra-mcp/releases` (Plugins → Add New → Upload →
Activate), or via wp-cli if you have shell access. Re-check for 200.

## Step 5 — Wire the MCP server into this client

Write this into the client's MCP config (exact file path per client + the VS Code
`servers`-vs-`mcpServers` caveat are in `skills/references/mcp-clients.md`):

```json
{
  "mcpServers": {
    "elementor-ultra": {
      "command": "npx",
      "args": ["-y", "@algorismus/elementor-ultra-mcp"],
      "env": {
        "WP_URL": "http://127.0.0.1:8899",
        "WP_USER": "admin",
        "WP_APP_PASSWORD": "the app password from step 2/3",
        "ULTRA_TOOLS": "full"
      }
    }
  }
}
```

The server runs from npm — no install or build. Add a `.gitignore` for this config (it holds a
credential). Tell the human to **restart the client** so the server loads.

## Step 6 — CLI + starter project

`npm i -D @algorismus/elementor-jsx@latest`, then `npx exjsx init site`, then confirm
`npx exjsx build site` compiles a bundle. Deploy needs no wp-cli — the version is detected over REST.

## Step 7 — Prove the chain end-to-end

- Deploy: `WP_URL=… WP_USER=… WP_APP_PASSWORD=… npx exjsx deploy site/site.bundle.json`. Open the
  page and confirm it renders as real Elementor (`e-con`/`e-atomic` markup, actually styled — a clean
  compile does not prove rendering; screenshot at 1440 and 390 if you can).
- After the human restarts the client, confirm the MCP tools are live by listing the site's
  Elementor pages from the restarted session.

## Step 8 — Report

Summarize: WordPress URL; whether plugin / auth / MCP / CLI each verified green; the deployed page
URL; anything the human still needs to finish (e.g. restarting the client). For any failure, name
the exact symptom, what you tried, and the relevant section of
`skills/references/troubleshooting.md`.
