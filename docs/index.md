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

<div class="hz-showcase">
<a class="hz-panel" href="/hryzen-lib/intro">
<div class="hz-panel-head">
<span class="hz-panel-dots"><span></span><span></span><span></span></span>
<span class="hz-panel-file">hryzen_lib / framework.lua</span>
<span class="hz-panel-badge free">Free</span>
</div>
<pre class="hz-panel-code"><span class="hz-tok-kw">local</span> Framework = <span class="hz-tok-kw">require</span> <span class="hz-tok-str">'@hryzen_lib/modules/framework'</span>
<span class="hz-tok-kw">local</span> player = Framework.GetPlayer(source)
<span class="hz-tok-kw">if</span> player.jobs[<span class="hz-tok-str">'police'</span>] <span class="hz-tok-kw">then</span>
    <span class="hz-tok-comment">-- job-gated logic</span>
<span class="hz-tok-kw">end</span></pre>
<div class="hz-panel-body">
<h3>hryzen_lib</h3>
<p>Framework bridge SDK every Hryzen resource builds on. Normalizes player, job, and character data across QBX, QBCore, and ESX.</p>
<span class="hz-panel-link">Read the docs &#8594;</span>
</div>
</a>
<a class="hz-panel" href="/hryzn-spawn/intro">
<div class="hz-panel-head">
<span class="hz-panel-dots"><span></span><span></span><span></span></span>
<span class="hz-panel-file">hryzn_spawn / cl_config.lua</span>
<span class="hz-panel-badge paid">Paid</span>
</div>
<pre class="hz-panel-code">Config.UI = {
    Font  = <span class="hz-tok-str">'Chakra Petch'</span>,
    Color = <span class="hz-tok-str">'#3798F2'</span>,
    HeaderTitle = <span class="hz-tok-str">'Select Spawn'</span>,
}</pre>
<div class="hz-panel-body">
<h3>hryzn_spawn</h3>
<p>Stylised, DUI-based spawn selector for QBX Core — a drop-in replacement for qbx_spawn with full theme and location control.</p>
<span class="hz-panel-link">Read the docs &#8594;</span>
</div>
</a>
<a class="hz-panel hz-panel-soon" href="https://hryzen.store">
<div class="hz-panel-head">
<span class="hz-panel-dots"><span></span><span></span><span></span></span>
<span class="hz-panel-file">???</span>
<span class="hz-panel-badge soon">Soon</span>
</div>
<div class="hz-panel-body hz-panel-body-center">
<p>More resources, documented here as they ship.</p>
<span class="hz-panel-link">See the store &#8594;</span>
</div>
</a>
</div>

## Getting Started

Every Hryzen resource — free or paid — depends on [hryzen_lib](/hryzen-lib/intro), so it's always the right place to start.

1. [Install hryzen_lib](/hryzen-lib/setup) and set `Framework` to match your server (`qbx`, `qbcore`, or `esx`)
2. Pick a resource above and follow its own install guide
3. Configure it to taste — every resource ships its own config reference

Need a hand? Every doc page here is public regardless of whether you've purchased anything — purchasing only unlocks the resource's files, never the documentation.
