import { content } from './node_modules/micromark/dev/lib/initialize/content.d';
import { Postcss } from "./../node_modules/postcss/lib/postcss.d"
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'nuxt study',
      describe: 'this is a description',
      meta: [
        {
          name: 'description',
          content: 'this is a description'
        }
      ]
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  alias: {
    // "@": resolve(__dirname, "/"), // 设置根目录的别名
    assets: "/<rootDir>/assets"
  },
//   pages: true,
  css: ["~/assets/style/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@pinia/nuxt'

  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  // ssr: false,
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/blog/**': { swr: true },
    // Static page generated on-demand once
    '/articles/**': { static: true },
    // Set custom headers matching paths
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
    // Render these routes with SPA
    '/admin/**': { ssr: false },
    // Add cors headers
    '/api/v1/**': { cors: true },
    // Add redirect headers
    '/old-page': { redirect: '/events' },
    '/old-page2': { redirect: { to: '/events', statusCode: 302 } }
  }
})
