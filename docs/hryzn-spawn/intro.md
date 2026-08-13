# hryzn_spawn

A stylised, DUI-based spawn selector built on [hryzen_lib](/hryzen-lib/intro) — runs on QBX, QBCore, or ESX, and doubles as a drop-in replacement for `qbx_spawn` on QBX/QBCore. On QBX/QBCore it hooks the same entry points qbx_core/qb-multicharacter already call, so nothing else needs to change to use it; on ESX it opens itself once the character loads, since ESX has no equivalent built-in event. Players get an in-world camera scene with a prop-rendered DUI menu to pick their spawn location.

## Capabilities

- Custom camera scene with an animated ped and a DUI menu rendered onto a world prop
- Configurable spawn locations, optionally gated by job — works the same way across all three frameworks
- "Last location" support on QBX and QBCore, compatible with `qbx_spawn`'s server callbacks on QBX
- Optional [illenium-appearance](https://github.com/illenium-development/illenium-appearance) integration on QBX to preview the character's outfit during selection
- Fully re-themeable — font, accent color, background color, header text — via config

::: info
On QBX/QBCore, this resource replaces `qbx_spawn`/`qb-spawn`. Don't run both at once.
:::
