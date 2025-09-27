<template>
  <div class="card">
    <div class="card-body">
      <h3>{{ name }}</h3>
    </div>
    <hr>
    <button @click="update">Update</button>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
})
const emit = defineEmits();
function update() {
  emit("updateName", "Mamad");
}
</script>
