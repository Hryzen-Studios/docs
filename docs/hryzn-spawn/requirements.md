# Requirements

* [ox_lib](https://coxdocs.dev/ox_lib) (Free) — callbacks, animations, model loading
* [oxmysql](https://coxdocs.dev/oxmysql) (Free) — database access for last-location lookups
* [hryzen_lib](/hryzen-lib/intro) (Free) — Hryzen Studios' framework bridge, used for player/job lookups
* `onesync` must be enabled server-side (`onesync on` in `server.cfg`)

Plus whichever framework you run, matching `Framework` in `hryzen_lib`'s `config.lua`:

| `Framework` | Requires |
|---|---|
| `qbx` | [qbx_core](https://github.com/Qbox-project/qbx_core) |
| `qbcore` | [qb-core](https://github.com/qbcore-framework/qb-core) + [qb-multicharacter](https://github.com/qbcore-framework/qb-multicharacter) |
| `esx` | [es_extended](https://github.com/esx-overextended/es_extended) |

Optional:

* [illenium-appearance](https://github.com/illenium-development/illenium-appearance) — on QBX only, previews the player's saved outfit on the ped during spawn selection
