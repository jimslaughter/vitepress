import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Jim's Travel Blog",
  description: "Come along on my trip!",
  srcDir: '.', // Add this line
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    search: {
      provider: 'local'
    }
  }
})