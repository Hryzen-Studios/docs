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
```

## Configuration

Set `Framework` in `config.lua` to match the framework your server runs:

```lua
return {
  Debug = false,

  Framework = 'qbx', -- qbx, qbcore, esx
}
```

::: info
Only the framework you select is active — `hryzen_lib` doesn't auto-detect, matching how most FiveM SDKs handle this so behavior stays predictable.
:::
