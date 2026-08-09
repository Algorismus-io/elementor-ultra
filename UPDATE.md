# Elementor Ultra — updating

The stack is three npm-published pieces plus one WordPress plugin. Updating is one command each.

## CLI + compiler (`@algorismus/elementor-jsx`)

Most fixes land here. Update it, then rebuild + redeploy so the changes reach your site.

```
# project dev-dependency (usual case)
npm i -D @algorismus/elementor-jsx@latest
npm ls @algorismus/elementor-jsx          # confirm the version

# global install
npm i -g @algorismus/elementor-jsx@latest

# then re-ship your pages
npx exjsx build site
WP_URL=… WP_USER=… WP_APP_PASSWORD=… npx exjsx deploy site/site.bundle.json --force
```

Updating also brings the newer verbs: `exjsx dev <dir> [--gates]` — the live loop (watch →
rebuild in ms → smart deploy → preview on `:4477`; `--gates` re-runs the structural check on
changed pages per save) — and `exjsx import <url> --out pages/name.page.jsx`, which captures an
existing page's computed styles into editable JSX. Run `npx exjsx api` for the current one-page
API card.

## MCP server (`@algorismus/elementor-ultra-mcp`)

Nothing to do — the MCP config runs it with `npx -y @algorismus/elementor-ultra-mcp`, which pulls
the latest each launch. Restart your AI client to pick up a new version.

## Onboarding installer (`@algorismus/create-elementor-ultra`)

Run the latest on demand — no install to update:

```
npx @algorismus/create-elementor-ultra@latest
```

## Companion WordPress plugin

Download the newest `elementor-ultra-mcp.zip` from the
[releases](https://github.com/Algorismus-io/elementor-ultra-mcp/releases) and re-upload it in
wp-admin → Plugins → Add New → Upload (overwrites the old one), or `wp plugin install … --force` via
wp-cli.

## After updating — if you'd hit an error before

Update `@algorismus/elementor-jsx`, then **rebuild and redeploy with `--force`**. Recent fixes that
require a redeploy to take effect:

- **`font-family: invalid_value` / unstyled on a no-Docker or remote target** — fixed in **1.1.2**
  (version now detected over REST, so 4.2+ prop forms are emitted without wp-cli).
- **`border-color: invalid_value` from a numeric border** — fixed in **1.1.3** (`border={1}` is a
  width now; color comes from `borderColor`).
- **A photo hero, or `sx={{…}}` being ignored** — added in **1.2.0** (`bgImage` / `bgOpts`, `sx`
  prop merge, `zIndex`/`z`).

Latest versions: `npm view @algorismus/elementor-jsx version`.
