# Installation

Need help beyond this page? Reach out through the [Hryzen Studios store](https://hryzen.store).

## 01 — Acquire

Before installing, make sure you have every [required resource](/hryzn-spawn/requirements) in place. Then download the `hryzn_spawn` asset from your [Cfx.re Portal](https://portal.cfx.re/assets/granted-assets) — the account you log in with there must be the same one you checked out with on the store.

## 02 — Deploy

::: warning
Do not rename the `hryzn_spawn` folder — the script won't work correctly if you do.
:::

Drag the folder into your server's `resources` directory as-is. Then **remove or disable the real `qbx_spawn`** (Qbox's own resource, if you have it installed): `hryzn_spawn` registers the same `qb-spawn:client:setupSpawns` entry point, and running both at once causes the spawn selector to trigger twice or behave unpredictably.

::: info
`hryzn_spawn` ships its own `qbx_spawn` folder nested inside it — that one is **not** Qbox's resource, it's a tiny compatibility marker with no scripts. Leave it in place: `qbx_core` checks for a resource literally named `qbx_spawn` before it opens the spawn selector at all, so without it the selector never appears.
:::

## 03 — Register

Add it to `server.cfg`, after its dependencies. Both `hryzn_spawn` and its nested `qbx_spawn` marker need to be `ensure`d:

```ini
ensure ox_lib
ensure oxmysql
ensure qbx_core
ensure hryzen_lib
ensure hryzn_spawn
ensure qbx_spawn
```

## 04 — Configure

The `config` folder inside `hryzn_spawn` holds the shared and client config files. See [Configuration](/hryzn-spawn/configuration) for every available option.

## 05 — Confirm

Restart the resource (`refresh` + `ensure hryzn_spawn`, or restart the server), then create a new character or reconnect. You should see the custom camera scene and DUI spawn selector in place of the default `qbx_spawn` UI.
