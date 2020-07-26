import path from 'path'
import fs from 'fs'
import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: "Spencer Young's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/app.css', '~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/markdown.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://spjy.github.io'
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  buildModules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-173554868-1'
      }
    ]
  ],

  generate: {
    routes() {
      return new Promise((resolve, reject) => {
        const routes = []

        fs.readdir('./static/notes/', (err, files) => {
          if (err) {
            reject(err)
          } else {
            files.forEach(file => {
              const filename = file.split('.')
              if (filename[1] === 'md') {
                routes.push(`/notes/${filename[0]}`)
              }
            })

            fs.readdir('./static/essays/', (err, files) => {
              if (err) {
                reject(err)
              } else {
                files.forEach(file => {
                  const filename = file.split('.')
                  if (filename[1] === 'md') {
                    routes.push(`/essays/${filename[0]}`)
                  }
                })

                fs.readdir('./static/projects/', (err, files) => {
                  if (err) {
                    reject(err)
                  } else {
                    files.forEach(file => {
                      const filename = file.split('.')
                      if (filename[1] === 'md') {
                        routes.push(`/projects/${filename[0]}`)
                      }
                    })

                    resolve(routes)
                  }
                })
              }
            })
          }
        })
      })
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      config.module.rules.push({
        test: /\.(md|yml)$/,
        exclude: /(node_modules)/,
        use: 'raw-loader'
      })

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    }
  }
}
