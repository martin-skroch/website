import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem'
        },
        extend: {
            colors: {
                'primary': '#2F4858',
                'secondary': '#F0F7EE',
                'dark': '#444444',
            },
            fontFamily: {
                'sans': ['"Ubuntu Sans"', ...defaultTheme.fontFamily.sans],
                'anaheim': ['"Anaheim"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}