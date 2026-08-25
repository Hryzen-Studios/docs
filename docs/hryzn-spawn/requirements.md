# Requirements

* [ox_lib](https://coxdocs.dev/ox_lib) (Free) — callbacks, animations, model loading
* [oxmysql](https://coxdocs.dev/oxmysql) (Free) — database access for last-location lookups
* `onesync` must be enabled server-side (`onesync on` in `server.cfg`)
* Either [qbx_core](https://github.com/Qbox-project/qbx_core), or [qb-core](https://github.com/qbcore-framework/qb-core) + [qb-multicharacter](https://github.com/qbcore-framework/qb-multicharacter) — detected automatically, no configuration needed
* **QBX only:** [qbx_spawn](https://github.com/Hryzen-Studios/qbx_spawn) — a free, separate compatibility marker resource. `qbx_core` won't trigger the spawn selector without a resource by this exact name running; see [Installation](/hryzn-spawn/install) for why. Not needed on QBCore.

No other Hryzen Studios resources required beyond that — `hryzn_spawn` itself is fully self-contained.

Optional:

* [illenium-appearance](https://github.com/illenium-development/illenium-appearance) — previews the player's saved outfit on the ped during spawn selection, on either framework
