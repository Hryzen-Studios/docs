# Usage

Once installed, `hryzn_spawn` works automatically — there's nothing to trigger manually for the standard flow. How it gets shown depends on `hryzen_lib`'s configured `Framework`.

## How the spawn selector gets shown

**On QBX or QBCore**, `hryzn_spawn` listens for the same event `qbx_spawn`/`qb-spawn` used, so any resource that already calls it (qbx_core's built-in multichar, `qb-multicharacter`, etc.) will trigger `hryzn_spawn` instead with no changes on their end:

- `qb-spawn:client:setupSpawns` — fetches available locations and opens the scene
- `qb-spawn:client:openUI` — accepted as a legacy no-op for resources that fire it alongside `setupSpawns`

**On ESX**, there's no equivalent framework event to listen for — ESX has no built-in multichar/spawn-selector concept. `hryzn_spawn` instead opens itself as soon as `hryzen_lib:framework:playerLoaded` fires.

There's also a server-triggerable entry point for QBX servers that want to open the selector directly and get outfit preview support:

```lua
TriggerClientEvent('hryzn_spawn:loadSpawnSelector', source, citizenId)
```

If [illenium-appearance](https://github.com/illenium-development/illenium-appearance) is running **and you're on QBX**, this loads the character's saved model and clothing onto the ped before the scene opens, so the player sees their actual outfit while picking a spawn. This preview isn't wired up for QBCore/ESX yet.

## Controls

While the selector is open:

| Input | Action |
|---|---|
| Left / Right arrow | Cycle between spawn locations |
| Enter | Confirm the highlighted location |
| Backspace | Spawn at the player's last saved location instead — **QBX and QBCore only**, not offered on ESX |

## Location gating

Locations with a `job` list in `config/sh_config.lua` (see [Configuration](/hryzn-spawn/configuration)) are filtered server-side via `hryzen_lib`'s `Framework.HasJob` — a player is only offered a job-restricted location if they currently hold one of the listed jobs, on any supported framework. Ungated locations are shown to everyone.

## `qbx_spawn` compatibility

These server callbacks are registered only when `Framework = 'qbx'`, for compatibility with resources built against `qbx_spawn` (e.g. property spawn lists):

- `qbx_spawn:server:getLastLocation` — returns the player's last saved position and current property ID
- `qbx_spawn:server:getProperties` — returns owned properties from `qbx_properties`, if that resource is running

You don't need to call these directly — they exist so other resources that already integrate with `qbx_spawn` keep working unmodified.
