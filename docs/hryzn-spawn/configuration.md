---
title: Configuration
parent: hryzn_spawn
nav_order: 2
---

# Configuration

`hryzn_spawn` is configured across two files: `config/sh_config.lua` (shared — locations) and `config/cl_config.lua` (client — theme and scene).

## Spawn locations — `config/sh_config.lua`

```lua
SharedConfig = {}

-- Where a brand-new character is placed after creation, before the clothes editor opens
SharedConfig.NewCharacterSpawn = vec4(-1241.98, -209.67, 40.22, 113.3)

SharedConfig.Locations = {
    {
        title    = 'Legion Square',
        subtitle = 'Vespucci Blvd',
        image    = './imgs/legion-square.webp',
        coords   = vector4(167.0161, -915.9072, 29.6920, 61.2138),
    },
    {
        title    = 'Hospital',
        subtitle = 'Vespucci Medical',
        image    = './imgs/hospital.webp',
        job      = { 'ambulance' },
        coords   = vec4(-930.27, -764.55, 17.0, 176.83),
    },
}
```

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Location name shown on the card |
| `subtitle` | Yes | Secondary line under the title |
| `image` | Yes | Path to a `.webp` image, relative to `web/dui/` — add new images under `web/imgs/` and list them in `files` in `fxmanifest.lua` |
| `coords` | Yes | `vec4`/`vector4` spawn position and heading |
| `job` | No | Table of job names. If set, the location is only offered to players holding one of those jobs (checked server-side against `PlayerData.jobs`) |

`SharedConfig.NewCharacterSpawn` is a one-time position used only when a brand new character is created, before the spawn selector or clothing editor opens.

## Theme and scene — `config/cl_config.lua`

```lua
Config = {}

Config.UI = {
    Font            = 'Chakra Petch',               -- Any Google Fonts family name
    Color           = '#3798F2',                    -- Accent colour (borders, glow, dots, rule)
    BackgroundColor = '#07070f',                    -- DUI background colour
    HeaderTitle     = 'Select Spawn',               -- Large heading text
    HeaderSubtitle  = 'Choose your starting location', -- Smaller subheading text
}

Config.Scene = {
    CamPos    = vec3(-299.6916, 286.8102, 115.0114),
    CamTarget = vec3(-289.0052, 299.0318, 115.0114),
    CamFov    = 45.0,
    PedCoords = vector4(-289.9635, 298.4854, 110.2868, 141.0865),

    -- Prop the DUI is rendered onto (TXD = texture dictionary, TEX = texture name)
    PropTxd   = 'ss1_13_build01',
    PropTex   = 'ss1_13_build01_misc',

    -- Animation played on the ped while the selector is open
    AnimDict  = 'random@shop_tattoo',
    AnimName  = '_idle_a',
}
```

| Field | Description |
|---|---|
| `Config.UI.Font` | Any Google Fonts family name, loaded by the DUI page |
| `Config.UI.Color` | Accent color used for borders, glow, dots, and the divider rule |
| `Config.UI.BackgroundColor` | Background color of the DUI panel |
| `Config.UI.HeaderTitle` / `HeaderSubtitle` | Heading text shown above the location cards |
| `Config.Scene.CamPos` / `CamTarget` / `CamFov` | Scripted camera placement for the spawn scene |
| `Config.Scene.PedCoords` | Where the player ped is frozen and positioned for the scene |
| `Config.Scene.PropTxd` / `PropTex` | Texture dictionary/name of the in-world prop the DUI is drawn onto — must match a prop actually present at `PedCoords` |
| `Config.Scene.AnimDict` / `AnimName` | Animation played on the ped for the duration of the scene |

If you change `PedCoords`, make sure a prop with a matching `PropTxd`/`PropTex` exists near that location, or the DUI will have nothing to render onto.
