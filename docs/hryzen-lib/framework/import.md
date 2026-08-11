# Framework Module

The **Framework Module** bridges `hryzen_lib` to whichever RP framework is running on your server. It provides a **centralized character object** that works the same way whether the underlying framework is QBX, QBCore, or ESX.

::: info
The framework module is server side only. Player/character data should stay server-authoritative — see [Events](/hryzen-lib/framework/events) for how the client finds out a player has loaded.
:::

## Import

```lua
local Framework = require '@hryzen_lib/modules/framework'
```
