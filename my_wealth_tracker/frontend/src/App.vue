<script lang="ts" setup>
import { RouterView } from 'vue-router'
import TheMainNav from './components/TheMainNav.vue'
import { computed } from 'vue'
import router from './router'

const viewName = computed(() => router.currentRoute.value.meta?.title)
</script>
<template>
  <div class="min-h-full">
    <TheMainNav />

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 capitalize">{{ viewName }}</h1>
      </div>
    </header>

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Main view -->
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
