// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Afeez Aziz',
  tagline: 'Crypto Fanatic',
  url: 'https://afeezaziz.cryptolaunchpad.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'afeezaziz', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Afeez Aziz',
        logo: {
          alt: 'Notepad Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://chainbifrost.com',
            label: 'Bifrost',
            position: 'left',
          },    
          {
            href: 'https://bebola.org',
            label: 'Bebola',
            position: 'left',
          },                  
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },        
          {
            href: 'https://t.me/tipskripto',
            label: 'Tips Kripto (Malaysia)',
            position: 'right',
          },            
          {
            href: 'https://cryptolaunchpad.co/join?agent=afeezaziz',
            label: 'Join the Revolution',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social Media',
            items: [

              {
                label: 'Instagram',
                href: 'https://www.instagram.com/afeezabdulaziz/',
              },
              
              {
                label: 'Tiktok',
                href: 'https://vt.tiktok.com/ZSeNscQUT/',
              },

              {
                label: 'Twitter',
                href: 'https://twitter.com/afeezaziz',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Afeez Aziz. Made with Love by Afeez Aziz.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
