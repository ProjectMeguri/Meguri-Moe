// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            "link": [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700&display=swap' },
            ],
        },
    },
    typescript: {
        shim: false
    },
    runtimeConfig: {
        public: {
            staticBase: 'https://static.acgtour.com/meguri'
        }
    },
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        baseUrl: 'https://meguri.moe',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'lang',
            redirectOn: 'root',
        },
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'ja',
        locales: [
            {
                code: 'ja',
                file: 'ja.json',
                iso: 'ja-JP',
                name: '日本語'
            },
            {
                code: 'zh-CN',
                file: 'zh-CN.json',
                iso: 'zh-CN',
                name: '简体中文'
            }
        ]
    }
})
