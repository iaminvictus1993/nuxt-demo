module.exports = {

    /*
    ** Headers of the page
    */
    head: {
        title: 'nuxt-demo',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },

    /*
    ** Build configuration
    */
    build: {

        /*
        ** Run ESLint on save
        */
        extend(config, ctx) {
            if (ctx.dev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        vendor: ['element-ui', 'axios'],

        // 配置element-ui 按需加载
        babel: {
            'presets': [
                ['es2015', { 'modules': false }],
                'stage-0'
            ],
            'plugins': [['component', [
                {
                    'libraryName': 'element-ui',
                    'styleLibraryName': 'theme-chalk'
                }
            ]],
            'transform-async-to-generator',
            'transform-runtime']
        }
    },
    plugins: [
        {
            src: '~plugins/element-ui'
        }
    ]
}
