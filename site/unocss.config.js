import { defineConfig } from '@unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  extractors: [extractorSvelte],
  presets: [presetUno()],
  content: {
    pipeline: {
      include: [/\.(vue|svelte)($|\?)/, /src\/app\/utils\/colors\.js($|\?)/],
    },
  },
  // Messed with VitePress class
  blocklist: ['container'],
  theme: {
    colors: {
      primary: '#E69B57',
      primaryLight: '#E6AB73',
      primaryDark: '#CF7522',
    },
  },
  shortcuts: {
    'anchor-link':
      'font-medium decoration-none hover:text-primary-dark focus:text-primary-dark dark:hover:text-primary dark:focus:text-primary transition-color',
  },
})
