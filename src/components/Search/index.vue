<script>
export default {
  name: "SearchBox",
};
</script>
<script setup>
import { onMounted, ref } from "vue";

const searchQuery = ref('');
const $emits = defineEmits(['handleSearch']);

function handleInput(event){
    $emits('handleSearch', event.target.value)
};

</script>

<template>
  <input type="text" class="bg-slate-100 border-solid border-2 border-slate-100 rounded-md px-2" v-model="searchQuery" @input="handleInput" placeholder="Search...">
</template>

<style lang="scss" scoped></style>
