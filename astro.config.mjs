// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://astro-page-meta-demo.sandlada.com",
    trailingSlash: "always",
    output: "static",
    integrations: [],
    vite: {
        plugins: []
    },
    devToolbar: { enabled: false, },
})
