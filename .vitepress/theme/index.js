import DefaultTheme from 'vitepress/theme'
import Cusdis from './components/Cusdis.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Cusdis', Cusdis)
  }
}