import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Eloquent",
  description: "Vue3 and Laravel API and Eloquent integration",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Topics',
        items: [
          { text: 'Getting Started', link: '/introduction' },
          { text: 'Installation', link: '/installation' },
          { text: 'API Class', link: '/api' },
          { text: 'Model', link: '/model' },
          { text: 'Collection', link: '/collection' },
          { text: 'Examples', link: '/examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cimd/vue-eloquent' }
    ]
  }
})
