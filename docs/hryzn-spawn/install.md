# Installation

Need help beyond this page? Reach out through the [Hryzen Studios store](https://hryzen.store).

## 01 — Acquire

Before installing, make sure you have every [required resource](/hryzn-spawn/requirements) in place. Then download the `hryzn_spawn` asset from your [Cfx.re Portal](https://portal.cfx.re/assets/granted-assets) — the account you log in with there must be the same one you checked out with on the store.

## 02 — Deploy

::: warning
Do not rename the `hryzn_spawn` folder — the script won't work correctly if you do.
:::

Drag the folder into your server's `resources` directory as-is. Then **remove or disable `qbx_spawn`**: `hryzn_spawn` registers the same `qb-spawn:client:setupSpawns` entry point, and running both at once causes the spawn selector to trigger twice or behave unpredictably.

## 03 — Register

Add it to `server.cfg`, after its dependencies:

```ini
ensure ox_lib
ensure oxmysql
ensure qbx_core
ensure hryzen_lib
ensure hryzn_spawn
```

## 04 — Configure

The `config` folder inside `hryzn_spawn` holds the shared and client config files. See [Configuration](/hryzn-spawn/configuration) for every available option.

## 05 — Confirm

Restart the resource (`refresh` + `ensure hryzn_spawn`, or restart the server), then create a new character or reconnect. You should see the custom camera scene and DUI spawn selector in place of the default `qbx_spawn` UI.
