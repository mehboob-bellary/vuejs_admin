// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    // Private (server only)
    //  API_BASE_URL: "",

    // Public (available in client + server)
    public: {
      API_BASE_URL: ""
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})