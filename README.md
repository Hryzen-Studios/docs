# Hryzen Studios Docs

Source for the [Hryzen Studios documentation site](https://docs.hryzen.store), built with [VitePress](https://vitepress.dev) and published via GitHub Pages. Structure and tooling modeled on [versa-development/documentation](https://github.com/versa-development/documentation); theme (Chakra Petch, dark blues) matches [hryzen.store](https://hryzen.store).

## Adding docs for a resource

1. Create a folder under `docs/<resource-name>/` with an `intro.md`.
2. Add child pages as needed (`requirements.md`, `install.md`, `configuration.md`, `usage.md`, ...).
3. Add a section for it in the `sidebar` array in `docs/.vitepress/config.ts`.
4. Link it from `docs/home.md` and from the features list in `docs/index.md`.

Docs are public regardless of whether the resource itself is free or paid — purchasing only gates the files, never the documentation. How you word the download step in `intro.md`/`install.md` depends on the resource's actual distribution:

- **Paid (Tebex via hryzen.store)** — link a "Purchase Here" button to the store, and have buyers download via their [Cfx.re Portal](https://portal.cfx.re/assets/granted-assets) (see `docs/hryzn-spawn/install.md` for the pattern). The portal account must match the one used at checkout.
- **Free** — link straight to the resource's public GitHub repo instead.

## Local development

```
npm install
npm run docs:dev
```

Then open `http://localhost:5173/`.

## Publishing

Push to `master`. The `.github/workflows/deploy.yml` workflow builds the site with VitePress and deploys it to GitHub Pages automatically — no manual build step needed. The repo's **Settings > Pages** source must be set to **GitHub Actions**, with the custom domain `docs.hryzen.store` (see the `CNAME` file in `docs/public/`).
