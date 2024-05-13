import { defineConfig } from 'vitepress';
import * as bootstrap from 'bootstrap'
 
 

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'eizhost',
  description: 'web hosting and servers',

head: [
  
  [
    'script',
    {  async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }
  ],
  [
    'script',
    {},
    "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-XXXXXXXXXX');"
  ]
],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "eizhost",
    nav: [
      { text: 'Home', link: '/' },
 { text: 'About', link: '/about' },
{ text: 'why eizhost', link: '/why' },
{ text: 'Contact', link: '/contact' },
      //{
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
 
 


 footer: {
   message: "Released under the MIT License.",
   copyright: "Copyright © 2017-present Adocs",
 },
    sidebar: [
      {
         text: 'Guide',
        items: [
          { text: 'Contact', link: '/contact' },
          // ...
        ],
      },
    ],
  },
});

