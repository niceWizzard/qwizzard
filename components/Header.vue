<script lang="ts" setup>



  const {data,status, signOut} = useAuth()

  function canRenderLoginBtn() {
    return status.value !== 'authenticated' && 
           useRouter().currentRoute.value.fullPath.includes('login') === false
  }

</script>

<template >
  <header class="bg-blue-300 min-h-[7vh] p-3 flex flex-row justify-between">
    <h1>Quizzard</h1>
    <div class="flex flex-row gap-6">
      <UButton to="/login" v-if="canRenderLoginBtn()">Login</UButton>
      <button  v-on:click="signOut()"
      v-if="status == 'authenticated'">Logout</button>
      <a href="/login" v-if="status == 'authenticated'">Create Quiz</a>
    </div>
  </header>
</template>



<style>

</style>