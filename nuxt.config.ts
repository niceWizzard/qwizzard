// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@sidebase/nuxt-auth"],
  app: {
    head: {
      title: "Quizzard - Create and share quizzes fast!",
    }
    
  },
  runtimeConfig: {
    app: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      }
    }
  },
  auth: {
    isEnabled: true,
  }
})