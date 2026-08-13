# hryzen_lib - Setup

## Requirements

* [ox_lib](https://coxdocs.dev/ox_lib) (Free)
* `onesync` must be enabled server-side (`onesync on` in `server.cfg`)

## Installation

* Drag & drop `hryzen_lib` into your server's `resources` directory
* Add it to your `server.cfg` **before** any resource that depends on it:

```ini
ensure ox_lib
ensure qbx_core
ensure hryzen_lib
ensure qbx_spawn
```

::: info
`ensure qbx_spawn` only matters on QBX. `hryzen_lib` ships a script-free `qbx_spawn` marker resource nested inside it — not Qbox's real resource, just something that needs to exist and stay started so `qbx_core` will trigger the spawn-selector flow at all. See [hryzn_spawn's install guide](/hryzn-spawn/install) for the full explanation. Harmless to leave out on QBCore/ESX.
:::

## Configuration

By default, `hryzen_lib` auto-detects your framework via `GetResourceState` — nothing to configure. To pin it explicitly instead, set `Framework` in `config.lua`:

```lua
return {
  Debug = false,

  Framework = 'auto', -- auto, qbx, qbcore, esx
}
```

::: info
Auto-detection checks for `qbx_core`, `qb-core`, then `es_extended`, in that order, and picks the first one found running. If none of the three are running, resources that depend on `hryzen_lib` will error on startup rather than silently doing nothing — set `Framework` explicitly if you're seeing that.
:::
