# Usage

Once installed, `hryzn_spawn` works automatically — there's nothing to trigger manually for the standard flow. It detects QBX vs QBCore itself; nothing to configure.

## How the spawn selector gets shown

`hryzn_spawn` listens for the same event `qbx_spawn`/`qb-spawn` used, so any resource that already calls it (`qbx_core`'s built-in multichar, `qb-multicharacter`, etc.) will trigger `hryzn_spawn` instead with no changes on their end:

- `qb-spawn:client:setupSpawns` — fetches available locations and opens the scene
- `qb-spawn:client:openUI` — accepted as a legacy no-op for resources that fire it alongside `setupSpawns`

::: warning
On QBX, `qbx_core` checks for a running `qbx_apartments` resource **before** it checks for `qbx_spawn` at all — if `qbx_apartments` is present, it always wins and fires `apartments:client:setupSpawnUI` instead, regardless of the `qbx_spawn` marker. `hryzn_spawn` also listens for that event so it wins this race too. If `qbx_apartments` itself also opens its own UI for characters that own a property, both will fire — remove or reconfigure `qbx_apartments`' own spawn-UI hook if you want `hryzn_spawn` to be the only thing that opens.
:::

There's also a server-triggerable entry point for servers that want to open the selector directly and get outfit preview support:

```lua
TriggerClientEvent('hryzn_spawn:loadSpawnSelector', source, citizenId)
```

If [illenium-appearance](https://github.com/illenium-development/illenium-appearance) is running, this loads the character's saved model and clothing onto the ped before the scene opens, so the player sees their actual outfit while picking a spawn — on both QBX and QBCore. It reads illenium-appearance's own `playerskins` table directly by `citizenid`, rather than going through a framework-specific callback, so there's nothing framework-specific about it.

## Manual trigger

If you're running a custom multichar system, want to open the selector from an admin command, or just don't want to rely on the automatic triggers above, `hryzn_spawn` exposes a standalone way to open it for a specific player:

**From another server-side resource:**

```lua
TriggerEvent('hryzn_spawn:openSelector', targetSource)
-- or, as an export:
exports.hryzn_spawn:OpenSelector(targetSource)
```

**Directly on the client**, if you already have a reason to be there:

```lua
TriggerClientEvent('hryzn_spawn:client:openSelector', targetSource)
```

Either way, it runs the exact same flow as the automatic triggers — it fetches the player's available locations and opens the camera scene — it just skips waiting for a framework event to fire first.

## Controls

While the selector is open:

| Input | Action |
|---|---|
| Left / Right arrow | Cycle between spawn locations |
| Enter | Confirm the highlighted location |
| Backspace | Spawn at the player's last saved location instead |

## Location gating

Locations with a `job` list in `config/sh_config.lua` (see [Configuration](/hryzn-spawn/configuration)) are filtered server-side — a player is only offered a job-restricted location if they currently hold one of the listed jobs, on either framework. Ungated locations are shown to everyone.

## `qbx_spawn` compatibility

These server callbacks are registered only on QBX, for compatibility with resources built against `qbx_spawn` (e.g. property spawn lists):

- `qbx_spawn:server:getLastLocation` — returns the player's last saved position and current property ID
- `qbx_spawn:server:getProperties` — returns owned properties from `qbx_properties`, if that resource is running

You don't need to call these directly — they exist so other resources that already integrate with `qbx_spawn` keep working unmodified.
