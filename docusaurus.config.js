// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TOOCAA Support Center',
  tagline: 'TOOCAA丨The Most User-Friendly Desktop Laser Cutter Engraver',
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
              href: 'https://x.com/ToocaaOfficial',
            },
           {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@toocaa_',
            },
            {
              label: 'Pinterest',
              href: 'https://www.pinterest.com/toocaa_official/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/ToocaaOfficial/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/toocaa_official/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@TOOCAA_OFFICIAL',
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

