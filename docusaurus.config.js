// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TOOCAA Support Center',
  tagline: 'Focus on micro:bit accessories!',
  url: 'https://wiki.toocaa.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ELECFREAKS',
  projectName: 'wiki.toocaa.com',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          disableVersioning: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale, docPath }) => {
            if (locale === 'zh-Hans') {
              return `https://github.com/elecfreaks/wiki.toocaa.com/edit/main/docs/${docPath}`;
            }
            return `https://github.com/elecfreaks/wiki.toocaa.com/edit/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./css/custom.css'),
        },
        gtag: {
          trackingID: 'G-QBE587N2KZ',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: 'TOOCAA Support Center',
      url: 'https://www.toocaa.com/',
      items: [
        {
          type: 'localeDropdown',
        },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    algolia: {
      appId: 'YRUKJQ7BCN',
      apiKey: '0f8c28cef98499141ab9c88aee1515d8',
      indexName: 'toocaa',
      contextualSearch: true,
      replaceSearchResultPathname: {
        from: '/docs/',
        to: '/',
      },
      searchPagePath: 'search',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/elecfreaks',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/ElecFreaksTech',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/elecfreaks',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCNx8XvTeFVnJuYQYhH-FxmQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://www.toocaa.com/blogs/toocaa-knowledge-share',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/elecfreaks',
            },
          ],
        },
      ],
      copyright: `版权所有 © 2013~${new Date().getFullYear()} 深圳恩孚科技.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;

