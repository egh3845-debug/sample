<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps({
  error: Object as () => NuxtError
})
const handleClear = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="container card m-4 p-5">
    <div class="error-page">
      <h1>{{ error.statusCode }}</h1>
      <p>{{ error.statusMessage || error.message }}</p>
      <button @click="handleClear">Back to Home</button>
    </div>
  </div>
</template>