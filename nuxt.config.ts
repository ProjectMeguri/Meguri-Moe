// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        defaultLocale: 'zh-CN',
        locales: [
            {
                code: 'zh-CN',
                file: 'zh-CN.json',
                iso: 'zh-CN',
                name: '简体中文'
            },
            {
                code: 'ja',
                file: 'ja.json',
                iso: 'ja-JP',
                name: '日本語'
            },
            {
                code: 'en',
                file: 'en.json',
                iso: 'en-US',
                name: 'English'
            }
        ]
    }
})
