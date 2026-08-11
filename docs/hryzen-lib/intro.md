# hryzen_lib

📦 Core SDK for Hryzen Studios resources — modular systems and framework bridges, free for anyone building on top of Hryzen products.

* 📦 [View on GitHub](https://github.com/Hryzen-Studios/hryzen_lib)

Since each framework (QBX, QBCore, ESX) has its own player/character structures, `hryzen_lib` provides a **centralized character object** that behaves the same way regardless of which one is running underneath. Hryzen resources (like [hryzn_spawn](/hryzn-spawn/intro)) build on this instead of calling a specific framework's exports directly, so a single release can run on any of the three.

## Modules

- [Framework](/hryzen-lib/framework/import) — player lookups, job checks, and centralized player-loaded/unloaded events

More modules will be documented here as they're added.
