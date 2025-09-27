<template>
  <div>
    <h1>{{ product.title }}</h1>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";

const route = useRoute();

const product = ref([]);


onMounted(
    async () => {
      // console.log(route.params.id);
      try {
        const {data } = await axios.get("https://jsonplaceholder.typicode.com/posts/"+route.params.id);
        product.value = data
      } catch (err) {
        console.log(err);
      } finally {
        // console.log(route.params.id);
      }
    }
)
</script>