# Usage

Once installed, `hryzn_spawn` works automatically — there's nothing to trigger manually for the standard flow.

## How the spawn selector gets shown

`hryzn_spawn` listens for the same event `qbx_spawn` used, so any resource that already calls it (qbx_core's built-in multichar, `qbx_multicharacter`, etc.) will trigger `hryzn_spawn` instead with no changes on their end:

- `qb-spawn:client:setupSpawns` — fetches available locations and opens the scene
- `qb-spawn:client:openUI` — accepted as a legacy no-op for resources that fire it alongside `setupSpawns`

There's also a server-triggerable entry point for resources that want to open the selector directly and get outfit preview support:

```lua
TriggerClientEvent('hryzn_spawn:loadSpawnSelector', source, citizenId)
```

If [illenium-appearance](https://github.com/illenium-development/illenium-appearance) is running, this loads the character's saved model and clothing onto the ped before the scene opens, so the player sees their actual outfit while picking a spawn.

## Controls

While the selector is open:

| Input | Action |
|---|---|
| Left / Right arrow | Cycle between spawn locations |
| Enter | Confirm the highlighted location |
| Backspace | Spawn at the player's last saved location instead |

## Location gating

Locations with a `job` list in `config/sh_config.lua` (see [Configuration](/hryzn-spawn/configuration)) are filtered server-side — a player is only offered a job-restricted location if they currently hold one of the listed jobs. Ungated locations are shown to everyone.

## `qbx_spawn` compatibility

These server callbacks are kept for compatibility with resources built against `qbx_spawn` (e.g. property spawn lists):

- `qbx_spawn:server:getLastLocation` — returns the player's last saved position and current property ID
- `qbx_spawn:server:getProperties` — returns owned properties from `qbx_properties`, if that resource is running

You don't need to call these directly — they exist so other resources that already integrate with `qbx_spawn` keep working unmodified.
