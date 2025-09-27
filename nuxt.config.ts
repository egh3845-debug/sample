// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nuxt',
            link: [
                {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'},
                {rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'},
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        }
    },
    modules: [// '@nuxtjs/tailwindcss'
    '@pinia/nuxt', '@nuxtjs/tailwindcss'],
    css: [
        'assets/css/main.css',
    ],
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true}
})