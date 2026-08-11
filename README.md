# Hryzen Studios Docs

Source for the [Hryzen Studios documentation site](https://hryzen-studios.github.io/docs/), built with Jekyll + [just-the-docs](https://github.com/just-the-docs/just-the-docs) and published via GitHub Pages.

## Adding docs for a resource

1. Create a folder under `docs/<resource-name>/`.
2. Add an `index.md` with `has_children: true` so it appears as a section in the nav.
3. Add child pages (e.g. `installation.md`, `configuration.md`, `usage.md`) with `parent: <Resource Title>` in their front matter.

## Local preview

```
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000/docs/`.

## Publishing

Push to `main`. In the repo's **Settings > Pages**, set the source to the `main` branch (root). GitHub builds and deploys automatically — no CI workflow needed.
