# Installation

Need help beyond this page? Reach out through the [Hryzen Studios store](https://hryzen.store).

## 01 — Acquire

Before installing, make sure you have every [required resource](/hryzn-spawn/requirements) in place for the framework you run — including [hryzen_lib](/hryzen-lib/setup), which `hryzn_spawn` depends on. Then download the `hryzn_spawn` asset from your [Cfx.re Portal](https://portal.cfx.re/assets/granted-assets) — the account you log in with there must be the same one you checked out with on the store.

## 02 — Deploy

::: warning
Do not rename the `hryzn_spawn` folder — the script won't work correctly if you do.
:::

Drag the folder into your server's `resources` directory as-is.

**On QBX or QBCore**, remove or disable the real `qbx_spawn`/`qb-spawn` resource if you have one installed: `hryzn_spawn` registers the same `qb-spawn:client:setupSpawns` entry point, and running both at once causes the spawn selector to trigger twice or behave unpredictably. **On ESX**, there's no equivalent resource to remove — `hryzn_spawn` opens itself once the character loads.

::: info
On QBX, `qbx_core` checks for a resource literally named `qbx_spawn` before it opens the spawn selector at all — it doesn't check whether anything registered a handler for the event, just whether that specific resource name is running. `hryzen_lib` ships a script-free `qbx_spawn` marker resource nested inside it for exactly this — it's not Qbox's real `qbx_spawn`, and you already have it once you've installed `hryzen_lib`. No separate download. Not needed on QBCore/ESX.
:::

## 03 — Register

Add it to `server.cfg`, after its dependencies and after [hryzen_lib is configured](/hryzen-lib/setup) for your framework. `qbx_spawn` here is the marker nested inside `hryzen_lib`, not a separate download:

```ini
ensure ox_lib
ensure oxmysql
ensure qbx_core        # or qb-core / es_extended, matching hryzen_lib's config
ensure hryzen_lib
ensure qbx_spawn        # QBX only — bundled with hryzen_lib, see the note above
ensure hryzn_spawn
```

## 04 — Configure

The `config` folder inside `hryzn_spawn` holds the shared and client config files. See [Configuration](/hryzn-spawn/configuration) for every available option.

## 05 — Confirm

Restart the resource (`refresh` + `ensure hryzn_spawn`, or restart the server), then create a new character or reconnect. On QBX/QBCore you should see the custom camera scene and DUI spawn selector in place of the default spawn UI; on ESX it opens automatically right after your character loads in.
