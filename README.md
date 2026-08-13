# Hryzen Studios Docs

Source for the [Hryzen Studios documentation site](https://docs.hryzen.store), built with [VitePress](https://vitepress.dev) and published via GitHub Pages. Tooling (sidebar structure, module-doc pattern) modeled on [versa-development/documentation](https://github.com/versa-development/documentation); the visual identity is our own — a "system readout" theme (Chakra Petch, dark blues, bracketed console callouts) pulled from [hryzen.store](https://hryzen.store) rather than a generic VitePress hero/feature-card look.

## Adding docs for a resource

1. Create a folder under `docs/<resource-name>/` with an `intro.md`.
2. Add child pages as needed (`requirements.md`, `install.md`, `configuration.md`, `usage.md`, ...).
3. Add a section for it in the `sidebar` array in `docs/.vitepress/config.ts`.
4. Add a row for it in the resource registry in `docs/index.md` (`.hz-resource` block) — status badge (`free`/`paid`/`soon`), name, one-line description, framework pills.

Docs are public regardless of whether the resource itself is free or paid — purchasing only gates the files, never the documentation. How you word the download step in `intro.md`/`install.md` depends on the resource's actual distribution:

- **Paid (Tebex via hryzen.store)** — buyers download via their [Cfx.re Portal](https://portal.cfx.re/assets/granted-assets) (see `docs/hryzn-spawn/install.md` for the pattern). The portal account must match the one used at checkout.
- **Free** — link straight to the resource's public GitHub repo instead.

## Local development

```
npm install
npm run docs:dev
```

Then open `http://localhost:5173/`.

## Publishing

Push to `master`. The `.github/workflows/deploy.yml` workflow builds the site with VitePress and deploys it to GitHub Pages automatically — no manual build step needed. The repo's **Settings > Pages** source must be set to **GitHub Actions**, with the custom domain `docs.hryzen.store` (see the `CNAME` file in `docs/public/`).
