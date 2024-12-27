// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
    modules: ['@nuxt/icon'],
    runtimeConfig: {
        public: {
            properties: [
                { icon: 'ph:code-duotone', title: 'Webentwickler' },
                { icon: 'ph:linux-logo-duotone', title: 'Linuxnutzer' },
                { icon: 'ph:guitar-duotone', title: 'Musikliebhaber' },
                { icon: 'ph:cooking-pot-duotone', title: 'Freizeitkoch' },
                { icon: 'ph:fork-knife-duotone', title: 'Gaumenfreund' },
                { icon: 'ph:cookie-duotone', title: 'Naschkatze' },
                { icon: 'ph:coffee-duotone', title: 'Kaffeeliebhaber' },
                { icon: 'ph:carrot-duotone', title: 'Hobbygärtner' },
                { icon: 'ph:fish-duotone', title: 'Freizeitangler' },
                { icon: 'ph:tree-duotone', title: 'Naturfreund' },
            ],
        },
    },
    app: {
        head: {
            link: [
                {
                    rel: 'shortcut icon',
                    type: 'image/x-icon',
                    href: 'https://martin-skroch.de/favicon.ico'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: 'https://martin-skroch.de/favicon.png'
                },
                {
                    rel: 'preconnect',
                    href: 'https://analytics.martin-skroch.de'
                },
                {
                    rel: 'preload',
                    href: 'https://analytics.martin-skroch.de/script.js',
                    as: 'script',
                },
            ],
            script: [
                {
                    'async': true,
                    'defer': true,
                    'src': 'https://analytics.martin-skroch.de/script.js',
                    'data-website-id': '1af575ca-6cf1-4164-aa48-8a8ab6de09db',
                    'data-domains': 'martin-skroch.de,www.martin-skroch.de',
                },
            ],
        },
    }
})