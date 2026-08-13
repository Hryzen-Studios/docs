export default {
  title: "Hryzen Studios Documentation",
  description: "Scripts and UI for FiveM servers that ship fast and run clean.",
  lang: "en-US",
  cleanUrls: true,
  base: "/",
  ignoreDeadLinks: true,

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Hryzen Studios",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Store", link: "https://hryzen.store" },
      { text: "GitHub", link: "https://github.com/Hryzen-Studios" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Hryzen-Studios" },
    ],
    sidebar: [
      {
        text: "Home",
        link: "/home",
      },
      {
        text: "hryzen_lib",
        link: "/hryzen-lib/intro",
        collapsible: true,
        collapsed: false,
        items: [
          { text: "Setup", link: "/hryzen-lib/setup" },
          {
            text: "Modules",
            collapsible: true,
            collapsed: false,
            items: [
              {
                text: "Framework",
                collapsible: true,
                collapsed: true,
                items: [
                  { text: "Import", link: "/hryzen-lib/framework/import" },
                  { text: "Objects", link: "/hryzen-lib/framework/objects" },
                  { text: "Server", link: "/hryzen-lib/framework/server" },
                  { text: "Events", link: "/hryzen-lib/framework/events" },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "hryzn_spawn",
        link: "/hryzn-spawn/intro",
        collapsible: true,
        collapsed: false,
        items: [
          { text: "Requirements", link: "/hryzn-spawn/requirements" },
          { text: "Installation", link: "/hryzn-spawn/install" },
          { text: "Configuration", link: "/hryzn-spawn/configuration" },
          { text: "Usage", link: "/hryzn-spawn/usage" },
        ],
      },
    ],
    docFooter: {
      prev: false,
      next: true,
    },
    editLink: {
      pattern: "https://github.com/Hryzen-Studios/docs/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "",
      copyright: "Copyright © 2026 Hryzen Studios",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    returnToTopLabel: "Go to Top",
    sidebarMenuLabel: "Menu",
  },
};
