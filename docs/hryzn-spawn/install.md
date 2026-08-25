# Installation

Need help beyond this page? Reach out through the [Hryzen Studios store](https://hryzen.store).

## 01 — Acquire

Before installing, make sure you have every [required resource](/hryzn-spawn/requirements) in place. Then download the `hryzn_spawn` asset from your [Cfx.re Portal](https://portal.cfx.re/assets/granted-assets) — the account you log in with there must be the same one you checked out with on the store.

## 02 — Deploy

::: warning
Do not rename the `hryzn_spawn` folder — the script won't work correctly if you do.
:::

Drag the folder into your server's `resources` directory as-is, then remove or disable the real `qbx_spawn`/`qb-spawn` resource if you have one installed: `hryzn_spawn` registers the same `qb-spawn:client:setupSpawns` entry point, and running both at once causes the spawn selector to trigger twice or behave unpredictably.

::: info
On QBX, `qbx_core` checks for a resource literally named `qbx_spawn` before it opens the spawn selector at all — it doesn't check whether anything registered a handler for the event, just whether that specific resource name is running. `hryzn_spawn` ships a script-free `qbx_spawn` marker resource nested inside it for exactly this — it's not Qbox's real `qbx_spawn`. No separate download, and it's already inside the folder you downloaded. Not needed on QBCore.
:::

::: warning
If you also run `qbx_apartments` on QBX, `qbx_core` checks for it **before** `qbx_spawn` and always defers to it if it's running — characters that own a property will spawn there instead of seeing `hryzn_spawn`'s selector. `hryzn_spawn` hooks that same event too, so it wins the race, but if `qbx_apartments` also opens its own UI for property owners, both may fire. See [Usage](/hryzn-spawn/usage) for details.
:::

## 03 — Register

Add it to `server.cfg`, after its dependencies and after your framework resource — `hryzn_spawn` detects QBX vs QBCore itself, nothing to configure:

```ini
ensure ox_lib
ensure oxmysql
ensure qbx_core        # or qb-core
ensure qbx_spawn        # QBX only — the marker nested inside hryzn_spawn, see the note above
ensure hryzn_spawn
```

## 04 — Configure

The `config` folder inside `hryzn_spawn` holds the shared and client config files. See [Configuration](/hryzn-spawn/configuration) for every available option.

## 05 — Confirm

Restart the resource (`refresh` + `ensure hryzn_spawn`, or restart the server), then create a new character or reconnect. You should see the custom camera scene and DUI spawn selector in place of the default spawn UI.
