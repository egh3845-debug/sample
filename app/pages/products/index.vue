<template>
  <div>
    <h1>{{ name }} {{ obj.name }}</h1>
    <hr>
    <p>{{ fullName }}</p>
    <button @click="increment">increment</button>
    <hr>
    <Card :name=name
          @updateName="update"
    ></Card>
  </div>
</template>
<script setup>
import {useCounter} from "~/composables/useCounter.js";
import Card from "~/components/Card.vue";

const {count, increment} = useCounter();

function update(newname) {
  console.log(newname);
  name.value = newname;
}

let name = ref("Ehsan");
let lastname = ref("gh");
const fullName = computed(() => {
  // console.log(name.value);
  return name.value +' '+lastname.value;
});
let obj = reactive({
  name: "GH",
  family: "Helvetica",
})

function UpdateName() {
  console.log(name);
  name.value = "Edwan";
}
</script>