# Framework Module

The **Framework Module** bridges `hryzen_lib` to whichever RP framework is running on your server. It provides a **centralized character object** that works the same way whether the underlying framework is QBX, QBCore, or ESX.

::: info
The framework module is server side only. Player/character data should stay server-authoritative — see [Events](/hryzen-lib/framework/events) for how the client finds out a player has loaded.
:::

## Import

```lua
local Framework = require '@hryzen_lib/modules/framework'
```

## Reading the detected framework on the client

Client scripts can't import the Framework module, but sometimes still need to know *which* framework is active (QBX vs QBCore vs ESX) to decide how to behave — without touching any player data. For that, import the lightweight detection helper instead:

```lua
local frameworkName = require '@hryzen_lib/utils/detect'
-- 'qbx' | 'qbcore' | 'esx'
```

This is safe on both client and server — it only resolves [`config.lua`'s `Framework` setting](/hryzen-lib/setup#configuration) (including running the same auto-detection), it never touches player data.
