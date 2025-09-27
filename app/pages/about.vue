<template>
  <button type="button" class="btn btn-primary"
          @click.prevent = "toggleModal"
  >Primary</button>
  <br>
  <div>

    <hr>
<!--    <img src="~/assets/images/logo.png" alt="Discover Nuxt" />-->
    <hr>
    <h1>Welcome to the {{ name }}</h1>
    <hr>

  </div>
</template>
<script setup>
import {mapStores} from "pinia";
// import { useStore } from '~/stores/myStore'
import {useTaskStore} from "~/stores/task.js";
import {useModalStore} from "~/stores/modal.js";
import {computed} from "vue";

onBeforeMount(
    () => {
      console.log('onBeforeMount');
    }
)

useSeoMeta({
  title: 'My Amazing Site',
})
definePageMeta({
  middleware: [
    'auth',
  ],
});

const modal = useModalStore()
const store = useTaskStore()

function toggleModal(){
  modal.toggle();
  console.log(modal.isOpen);
  // console.log(mapStores(useModalStore));
}






const name = "About Me";
// console.log('Hi')

onMounted(
    () => {
      // console.log(store.complitedTasks);
      console.log('onMounted');
    }
)

</script>