// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    app: {
        head: {
            htmlAttrs: {
                prefix: 'og: http://ogp.me/ns#',
            },
            meta: [
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@martin_skroch' },
                { name: 'twitter:creator', content: '@martin_skroch' },
                { property: 'og:type', content: 'website' },
                { property: 'og:locale', content: 'de_DE' },
            ],
            link: [
                { rel: 'shortcut icon', type: 'image/x-icon', href: 'https://martin-skroch.de/favicon.ico' },
                { rel: 'icon', type: 'image/png', href: 'https://martin-skroch.de/favicon.png' },
                { rel: 'preconnect', href: 'https://analytics.martin-skroch.de' },
                { rel: 'preload', href: 'https://analytics.martin-skroch.de/script.js', as: 'script' },
            ],
            script: [{
                'async': true,
                'defer': true,
                'src': 'https://analytics.martin-skroch.de/script.js',
                'data-website-id': '1af575ca-6cf1-4164-aa48-8a8ab6de09db',
                'data-domains': 'martin-skroch.de,www.martin-skroch.de',
            }],
        },
    },
    css: [
        '~/assets/css/main.css'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },
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
            skills: [
                { icon: 'lineicons:laravel', title: 'Laravel' },
                { icon: 'mdi:language-php', title: 'PHP' },
                { icon: 'tabler:brand-mysql', title: 'MySQL' },
                { icon: 'lineicons:javascript', title: 'JavaScript' },
                { icon: 'lineicons:vuejs', title: 'Vue.js' },
                { icon: 'lineicons:nuxt', title: 'Nuxt' },
                { icon: 'akar-icons:html-fill', title: 'HTML' },
                { icon: 'akar-icons:css-fill', title: 'CSS' },
                { icon: 'lineicons:tailwindcss', title: 'TailwindCSS' },
                { icon: 'lineicons:bootstrap-5', title: 'Bootstrap' },
                { icon: 'lineicons:git', title: 'Git' },
                { icon: 'lineicons:flutter', title: 'Flutter' },
                { icon: 'solar:figma-bold-duotone', title: 'Figma' },
                { icon: 'lineicons:docker', title: 'Docker' },
                { icon: 'lineicons:ubuntu', title: 'Ubuntu' },
                { icon: 'mdi:debian', title: 'Debian' },
                { icon: 'mdi:apple', title: 'Apple' },
                { icon: 'lineicons:windows', title: 'Windows' },
                { icon: 'file-icons:terminal', title: 'Terminal' },
            ],
        },
    },
    modules: [
        '@nuxt/icon'
    ],
    icon: {
        class: 'flex',
        customCollections: [
            {
                prefix: 'icon',
                dir: './assets/icons'
            }
        ]
    },
    devtools: {
        enabled: false
    },
})