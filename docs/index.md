---
layout: home

hero:
  name: Hryzen Studios
  text: Documentation
  image:
    src: /logo.png
    alt: Hryzen Studios logo
  tagline: Scripts and UI for FiveM servers that ship fast and run clean.
  actions:
    - theme: brand
      text: View Documentation
      link: /home
    - theme: alt
      text: View on GitHub
      link: https://github.com/Hryzen-Studios

features:
  - icon: 📦
    title: hryzen_lib
    details: Free framework bridge SDK that every Hryzen resource builds on. Normalizes player, job, and character data across QBX, QBCore, and ESX.
    link: /hryzen-lib/intro
    linkText: Read the docs
  - icon: 🧭
    title: hryzn_spawn
    details: Stylised, DUI-based spawn selector for QBX Core — a drop-in replacement for qbx_spawn with full theme and location control.
    link: /hryzn-spawn/intro
    linkText: Read the docs
  - icon: 👀
    title: More Coming Soon
    details: Additional Hryzen Studios resources will be documented here as they ship.
    link: https://hryzen.store
    linkText: See the store

head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Hryzen Studios Documentation
  - - meta
    - property: og:url
      content: https://hryzen.store
  - - meta
    - name: title
      content: Hryzen Studios Documentation
  - - link
    - rel: icon
      type: image/png
      href: /logo.png
---

## Getting Started

Every Hryzen resource — free or paid — depends on [hryzen_lib](/hryzen-lib/intro), so it's always the right place to start.

1. [Install hryzen_lib](/hryzen-lib/setup) and set `Framework` to match your server (`qbx`, `qbcore`, or `esx`)
2. Pick a resource above and follow its own install guide
3. Configure it to taste — every resource ships its own config reference

Need a hand? Every doc page here is public regardless of whether you've purchased anything — purchasing only unlocks the resource's files, never the documentation.
