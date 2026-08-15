# Repository Guidelines

## Project Structure & Module Organization
- `layout/` holds the base layouts (`theme.liquid` entry).
- `sections/` contains configurable page sections; pair schema JSON with Liquid markup.
- `snippets/` stores reusable Liquid fragments; `templates/` defines page-level templates.
- `assets/` keeps theme scripts, styles, SVGs, and static files; prefer compiled/minified outputs.
- `config/` holds theme settings; `config/settings_data.json` is environment-local and ignored on pulls.
- `locales/` provides translation JSON files; align keys with Liquid usage.
- `scripts/` is reserved for automation; keep additions cross-platform.

## Build, Test, and Development Commands
- `npm run devonly` — start `shopify theme dev` with current `.env` for live preview.
- `npm run dev` — pull remote theme (ignores `config/settings_data.json` and `assets/storefront-env.js`), then start dev.
- `npm run pull` — sync from the store using `.env.prod`.
- `npm run push` / `push:dev` / `push:live` — deploy to draft, development, or live.
- `npm run serve` — legacy local server fallback.
- Auth helpers: `npm run login`, `logout`, `theme:list`, `theme:info`.

## Coding Style & Naming Conventions
- Use 2-space indentation across Liquid, JSON, and JavaScript.
- Name sections/snippets descriptively (e.g., `product-upsell.liquid`); keep schema titles human-readable.
- Prefer `render` over legacy `include` in Liquid.
- Keep inline scripts minimal; move shared JS/CSS to `assets/`.
- Preserve translation key consistency; avoid hard-coded copy where a `locales/` entry exists.

## Testing Guidelines
- No automated tests yet; validate via `npm run devonly` in multiple viewports.
- Watch console and theme editor for Liquid errors, missing assets, or translation fallbacks.
- Before pushing, verify section settings and blocks still save in the theme editor.

## Commit & Pull Request Guidelines
- Write imperative, concise commit subjects (e.g., `Add PDP size guide section`); group related changes per commit.
- PRs should include: summary, affected templates/sections, screenshots or screencasts for desktop/mobile, and the Shopify theme ID or store URL used.
- Note which commands were run for validation (e.g., `npm run devonly` previewed on Cart and PDP).

## Security & Configuration Tips
- Keep environment variables in `.env` / `.env.prod`; never commit store credentials or access tokens.
- Do not commit generated `config/settings_data.json`; share setting presets via documentation or theme backups instead.
- Avoid embedding secrets or store-specific IDs in assets or Liquid; prefer settings or metafields.

## Cart Drawer
- See `docs/cart/CART.md` for architecture, line-item property contract, performance rules, and agent automation guidelines before changing cart code.
- `AGENTS.md` and `docs/` are in `.shopifyignore` (repo-only; not pushed/pulled with the theme).
