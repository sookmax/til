// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TIL by Sook",
  tagline: "Dinosaurs are cool",
  url: "https://sookmax.github.io",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sookmax", // Usually your GitHub org/user name.
  projectName: "sookmax.github.io", // Usually your repo name.
  deploymentBranch: "main",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/sookmax/til/tree/main/",
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...rest
          }) {
            const generatedSidebars = await defaultSidebarItemsGenerator(rest);

            return generatedSidebars;
          },
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve(
              "./node_modules/react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
            ),
          ],
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@docusaurus/plugin-ideal-image"),
      {
        quality: 70,
        max: 300, // max resized image's size.
        min: 300, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "TIL by Sook",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/sookmax/til",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/sookmax/til",
          },
          //   {
          //     title: "Docs",
          //     items: [
          //       {
          //         label: "Tutorial",
          //         to: "/docs/intro",
          //       },
          //     ],
          //   },
          //   {
          //     title: "Community",
          //     items: [
          //       {
          //         label: "Stack Overflow",
          //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //       },
          //       {
          //         label: "Discord",
          //         href: "https://discordapp.com/invite/docusaurus",
          //       },
          //       {
          //         label: "Twitter",
          //         href: "https://twitter.com/docusaurus",
          //       },
          //     ],
          //   },
          //   {
          //     title: "More",
          //     items: [
          //       {
          //         label: "Blog",
          //         to: "/blog",
          //       },
          //       {
          //         label: "GitHub",
          //         href: "https://github.com/facebook/docusaurus",
          //       },
          //     ],
          //   },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sook Chung. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
