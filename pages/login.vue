<script setup lang="ts">
  const { signIn } = useAuth()
  definePageMeta( {
    middleware: "auth",
    auth: {
      navigateAuthenticatedTo: '/',
      unauthenticatedOnly: true,
    }
  })
  async function signInWithCredentials() {
    try {
      await signIn("github")
      alert('Successfully logged in!')
    } catch (error) {
      console.error(error)
    }
  }
  const {data } = useAuth();

</script>
<template>
  <div>
    <span>{{ data?.user }}</span>
    <h1>Enter your credentials to continue</h1>
    <button @click="signInWithCredentials()">Sign in with Github</button>
  </div>
</template>