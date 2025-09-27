<script setup>
import TaskCard from "~/components/Tasks/TaskCard.vue";
defineProps({
  tasks: Array,
  show: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <ul class="list-group" v-if="tasks.length && show">
    <TaskCard
        v-for="(task, index) in tasks" :key="index"
        :task="task"
    />
  </ul>
</template>

<style scoped>

</style>