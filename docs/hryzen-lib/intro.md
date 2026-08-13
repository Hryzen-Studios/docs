# hryzen_lib

The core SDK every Hryzen Studios resource is built on — free, and required regardless of whether the resource sitting on top of it is free or paid.

Each framework (QBX, QBCore, ESX) has its own player and character structures. `hryzen_lib` provides one centralized character object that behaves the same way no matter which is running underneath, so a Hryzen resource written once runs on all three without touching a framework's exports directly.

## Modules

- [Framework](/hryzen-lib/framework/import) — player lookups, job checks, and centralized player-loaded/unloaded events

More modules will be documented here as they're added.

[Source on GitHub →](https://github.com/Hryzen-Studios/hryzen_lib)
