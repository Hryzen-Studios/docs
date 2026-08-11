# Framework Module - Events

`hryzen_lib` normalizes each framework's "player loaded" and "player unloaded" signals into one pair of events, fired on both the client and server.

## playerLoaded

### Server

::: warning
Use `AddEventHandler` on the server for security reasons.
:::

```lua
AddEventHandler('hryzen_lib:framework:playerLoaded', function(source)
    print('player ' .. source .. ' has loaded in')
end)
```

### Client

```lua
RegisterNetEvent('hryzen_lib:framework:playerLoaded', function()
    print('I have loaded in')
end)
```

## playerUnloaded

### Server

::: warning
Use `AddEventHandler` on the server for security reasons.
:::

```lua
AddEventHandler('hryzen_lib:framework:playerUnloaded', function(source)
    print('player ' .. source .. ' has left or changed character')
end)
```

### Client

```lua
RegisterNetEvent('hryzen_lib:framework:playerUnloaded', function()
    print('I have unloaded')
end)
```
