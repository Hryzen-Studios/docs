# hryzn_spawn

A stylised, DUI-based spawn selector for **QBX Core and QBCore** — a fully self-contained drop-in replacement for `qbx_spawn`/`qb-spawn`, no other resources required beyond your framework itself. It detects QBX vs QBCore automatically and hooks the same entry points `qbx_core`/`qb-multicharacter` already call, so nothing else needs to change to use it. Players get an in-world camera scene with a prop-rendered DUI menu to pick their spawn location.

## Capabilities

- Custom camera scene with an animated ped and a DUI menu rendered onto a world prop
- Configurable spawn locations, optionally gated by job — works the same way on QBX and QBCore
- "Last location" support, compatible with `qbx_spawn`'s server callbacks on QBX
- Optional [illenium-appearance](https://github.com/illenium-development/illenium-appearance) integration to preview the character's outfit during selection, on QBX and QBCore
- Fully re-themeable — font, accent color, background color, header text — via config

::: info
This resource replaces `qbx_spawn`/`qb-spawn`. Don't run both at once.
:::
