---
title: hryzn_spawn
nav_order: 2
has_children: true
---

# hryzn_spawn

A stylised, DUI-based spawn selector for [QBX Core](https://github.com/Qbox-project/qbx_core) — built as a **drop-in replacement for `qbx_spawn`**.

It hooks the same entry points qbx_core and qbx_multicharacter already call (`qb-spawn:client:setupSpawns`), so no other resource needs to change to use it. Players get an in-world camera scene with a prop-rendered DUI menu to pick their spawn location, instead of the default NUI list.

## Features

- Custom camera scene with an animated ped and a DUI menu rendered onto a world prop
- Configurable spawn locations, optionally gated by job
- "Last location" support, compatible with `qbx_spawn`'s server callbacks
- Optional [illenium-appearance](https://github.com/illenium-development/illenium-appearance) integration to preview the character's outfit during selection
- Fully re-themeable (font, accent color, background color, header text) via config

## Pages

- [Installation](installation)
- [Configuration](configuration)
- [Usage](usage)
