---
title: Installation
parent: hryzn_spawn
nav_order: 1
---

# Installation

## Requirements

`hryzn_spawn` runs on top of QBX Core and replaces `qbx_spawn`. Make sure the following are already installed and started on your server:

| Resource | Purpose |
|---|---|
| [qbx_core](https://github.com/Qbox-project/qbx_core) | Framework — provides player/character data |
| [ox_lib](https://github.com/overextended/ox_lib) | Callbacks, animations, model loading |
| [oxmysql](https://github.com/overextended/oxmysql) | Database access for last-location lookups |
| [versa_sdk](#) | Shared SDK dependency |
| `onesync` | Must be enabled server-side (`onesync on` in `server.cfg`) |

Optional:

| Resource | Purpose |
|---|---|
| [illenium-appearance](https://github.com/illenium-development/illenium-appearance) | If started, the player's saved outfit is previewed on the ped during spawn selection |

## Steps

1. **Download** the resource and place it in your server's `resources` folder as `hryzn_spawn`.

2. **Remove or disable `qbx_spawn`.** `hryzn_spawn` registers the same `qb-spawn:client:setupSpawns` entry point — running both at once will cause the spawn selector to trigger twice or behave unpredictably.

3. **Add it to `server.cfg`**, after its dependencies:

   ```cfg
   ensure ox_lib
   ensure oxmysql
   ensure versa_sdk
   ensure qbx_core
   ensure hryzn_spawn
   ```

4. **Restart the resource** (or the server):

   ```
   refresh
   ensure hryzn_spawn
   ```

5. **Verify it's working** — create a new character or reconnect. You should see the custom camera scene and DUI spawn selector instead of the default `qbx_spawn` UI.

## Next steps

- [Configuration](configuration) — set your own spawn locations, camera, and theme
- [Usage](usage) — how the selector integrates with character creation and other resources
