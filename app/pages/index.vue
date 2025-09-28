<template>
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
<!--  <hr>-->
<!--  <div class="mx-auto m-6 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">-->
<!--    <img class="size-12 shrink-0" src="" alt="ChitChat Logo" />-->
<!--    <div>-->
<!--      <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>-->
<!--      <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>-->
<!--    </div>-->
<!--  </div>-->
<!--  <hr>-->
  <div class="p-4">
    <div v-if="loading" class="mt-4">Loading...</div>
    <div v-else-if="error" class="mt-4 text-red-500">{{ error }}</div>
    <div class="row">
        <div class="card m-3" style="width: 15rem;" v-for="item in data" :key="item.id">
          <img src="/images/product.jpg" class="card-img-top p-0" alt="{{ item.title }}">
          <div class="card-body">
            <p class="card-text">
              <nuxt-link :to="`/products/${item.id}`">
                {{ item.title }}
              </nuxt-link>
            </p>
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

// state
const data = ref(null)
const loading = ref(true)
const error = ref(null)

// function to fetch data
const fetchData = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    data.value = response.data
  } catch (err) {
    error.value = err.message || "Failed to fetch data"
  } finally {
    loading.value = false
  }
}

// call when component mounts
onMounted(fetchData)


</script>