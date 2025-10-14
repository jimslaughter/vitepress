import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jim's Travel Blog",
  description: "Come along on my trip!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      
    ],
    search: {
      provider: 'local'
    }
     }
})
