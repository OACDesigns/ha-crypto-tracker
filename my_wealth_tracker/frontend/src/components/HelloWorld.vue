<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const apiServer = 'http://localhost:8083'
const messageFromBackend = ref('')
fetch(`${apiServer}/rest/hello-world`)
  .then((res) => res.text())
  .then((msg) => (messageFromBackend.value = msg))
</script>

<template>
  <div class="greetings">
    <h1 class="text-5xl no-underline text-green-600">{{ msg }}</h1>
    <h3 class="text-lg">
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <h3>Here's a message from the Backend: {{ messageFromBackend }}</h3>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
