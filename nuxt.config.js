export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        script: [
            { src: 'https://pro.fontawesome.com/releases/v5.10.1/js/all.js' }
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: ["@fortawesome/fontawesome-svg-core/styles.css"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */

    modules: [
        // Doc: https://bootstrap-vue.js.org
        "bootstrap-vue/nuxt", ['@nuxtjs/style-resources'], '@nuxtjs/font-awesome', [
            'nuxt-fontawesome', {
                imports: [{
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas']
                    },
                    {
                        set: '@fortawesome/free-brands-svg-icons',
                        icons: ['fab']
                    }
                ]
            }
        ]

    ],
    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false
    },
    styleResources: {
        scss: [
            './assets/scss/*.scss',
            // './assets/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
        ]
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },

};