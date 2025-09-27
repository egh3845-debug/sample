<template>
  <div>
    <img src="/images/logo.png" alt="Discover Nuxt" class="" height="250" width="250" />
    <hr>
    <h1>Welcome to the {{ name }}</h1>
    <hr>
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'My Amazing Site',
})
definePageMeta({
  middleware: [
    'auth',
  ],
});
// import { useStore } from '~/stores/myStore'

import {useTaskStore} from "~/stores/task.js";

const store = useTaskStore()


const name = "About Me";
// console.log('Hi')

onMounted(
    () => {
      console.log(store.complitedTasks);
      // console.log('onMounted');
    }
)

</script>