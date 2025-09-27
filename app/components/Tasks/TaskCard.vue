<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  task: Object
})
// console.log(props.task.id)
const activeClass = computed(()=>
      props.task.id == 3 ? "active" : ""
)
</script>

<template>
  <li class="list-group-item" :class="activeClass">{{ task.name }}</li>
</template>

<style scoped>

</style>