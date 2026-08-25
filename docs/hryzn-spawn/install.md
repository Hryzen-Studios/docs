# Installation

Need help beyond this page? Reach out through the [Hryzen Studios store](https://hryzen.store).

## 01 — Acquire

Before installing, make sure you have every [required resource](/hryzn-spawn/requirements) in place. Then download the `hryzn_spawn` asset from your [Cfx.re Portal](https://portal.cfx.re/assets/granted-assets) — the account you log in with there must be the same one you checked out with on the store.

**On QBX**, also grab [qbx_spawn](https://github.com/Hryzen-Studios/qbx_spawn) — a free, separate compatibility marker resource. See the warning below for why it's required.

## 02 — Deploy

::: warning
Do not rename the `hryzn_spawn` folder — the script won't work correctly if you do.
:::

Drag the folder into your server's `resources` directory as-is.

**On QBX**, `qbx_core` checks for a resource **literally named** `qbx_spawn` before it will trigger the spawn selector at all — it doesn't check whether anything registered a handler for the event, just whether that exact resource name is running. Without it, the spawn selector never appears and `qbx_core` silently falls back to spawning at the character's last saved position instead. This means two things:

::: warning
**Delete the real Qbox `qbx_spawn` first, don't just add ours alongside it.** Running both means the real one's own UI fires too, alongside `hryzn_spawn` — you'll see the real spawn map briefly, then `hryzn_spawn`'s camera scene take over a moment later. `hryzn_spawn` registers the same `qb-spawn:client:setupSpawns` entry point Qbox's real `qbx_spawn` does, so having both installed causes the selector to trigger twice.
:::

::: warning
**Then deploy [Hryzen-Studios/qbx_spawn](https://github.com/Hryzen-Studios/qbx_spawn) as its own resource, with its own `ensure` line.** It's a separate, free, script-free marker resource — not part of the `hryzn_spawn` folder. If your `server.cfg` only uses category/bracket ensures (e.g. `ensure [qbx]`), that may not reliably pick up every resource depending on your folder layout — give `qbx_spawn` its own explicit line to be safe. Not needed on QBCore.
:::

**On QBCore**, none of the above applies — just remove or disable the real `qb-spawn` if you have one installed, for the same double-trigger reason.

::: warning
If you also run `qbx_apartments` on QBX, `qbx_core` checks for it **before** `qbx_spawn` and always defers to it if it's running — characters that own a property will spawn there instead of seeing `hryzn_spawn`'s selector. `hryzn_spawn` hooks that same event too, so it wins the race, but if `qbx_apartments` also opens its own UI for property owners, both may fire. See [Usage](/hryzn-spawn/usage) for details.
:::

## 03 — Register

Add each resource its own line in `server.cfg`, after its dependencies and after your framework resource — `hryzn_spawn` detects QBX vs QBCore itself, nothing to configure:

```ini
ensure ox_lib
ensure oxmysql
ensure qbx_core        # or qb-core
ensure qbx_spawn        # QBX only — separate download, see the warnings above
ensure hryzn_spawn
```

## 04 — Configure

The `config` folder inside `hryzn_spawn` holds the shared and client config files. See [Configuration](/hryzn-spawn/configuration) for every available option.

## 05 — Confirm

Restart the resources (`refresh` + `ensure qbx_spawn` + `ensure hryzn_spawn`, or restart the server), then create a new character or reconnect. You should see the custom camera scene and DUI spawn selector in place of the default spawn UI.
