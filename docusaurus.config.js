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
  onBrokenLinks: 'throw',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TOOCAA Support Center',
        logo: {
          alt: 'TOOCAA Logo',
          src: 'http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/LOGO.png',
          href: 'https://www.toocaa.com/',
          target:  '_self',
           width: 250,
        height: 25,
        },
        style: 'primary',
        items: [
          {
            type: 'localeDropdown',
          },

        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      },
      algolia: {
        appId: '5BRNKLHRIM',

        apiKey: '8a4e05df2b4288ffa85421fef088efc5',

        indexName: 'wiki',

        contextualSearch: true,

        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'X',
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
                label: 'Youtube',
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
        copyright: `版权所有 © 2013~${new Date().getFullYear()}  深圳恩孚科技. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

