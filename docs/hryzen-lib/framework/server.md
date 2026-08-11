# Framework Module - Server

[Read here](/hryzen-lib/framework/import) on how to import the module into your scripts!

## GetPlayer

Get the character object from a source.

```lua
local player = Framework.GetPlayer(source)
```

**Parameters**
- `source` (number) – The player's source

**Returns**
- `character` (table | false) – The [character object](/hryzen-lib/framework/objects) if found, or `false` if no player exists with that source

## GetPlayerFromIdentifier

Get the character object from the player's unique identifier.

```lua
local player = Framework.GetPlayerFromIdentifier(identifier)
```

**Parameters**
- `identifier` (string) – The player's unique identifier (citizenid, identifier, etc.)

**Returns**
- `character` (table | false) – The [character object](/hryzen-lib/framework/objects) if found, or `false` if no player exists with that identifier

## GetPlayers

Get all active character objects.

```lua
local players = Framework.GetPlayers()
```

**Returns**
- `characters` (table) – A table containing every currently active [character object](/hryzen-lib/framework/objects)

## HasJob

Check whether a player currently holds a given job.

```lua
local hasJob = Framework.HasJob(source, jobName)
```

**Parameters**
- `source` (number) – The player's source
- `jobName` (string) – The job name to check for

**Returns**
- `hasJob` (boolean) – `true` if the player holds that job (checks both `job` and `jobs` — see the [character object](/hryzen-lib/framework/objects))

## GetMetaDataValue

Get a metadata key value pair on a character.

```lua
local value = Framework.GetMetaDataValue(source, key)
```

**Parameters**
- `source` (number) – The player's source
- `key` (string) – The metadata key to retrieve

**Returns**
- `value` (any) – The value of the requested metadata key, or `nil` if it doesn't exist

## SetMetaDataValue

Set a metadata key value pair on a character.

```lua
local success = Framework.SetMetaDataValue(source, key, value)
```

**Parameters**
- `source` (number) – The player's source
- `key` (string) – The metadata key to set
- `value` (any) – The value to assign

**Returns**
- `success` (boolean) – `true` if the value was successfully set, otherwise `false`
