<script>
export default {
  name: "InputBox",
};
</script>
<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({ value });
const inputValue = ref("");

onMounted(() => {
  inputValue.value = props.value;
});

const emits = defineEmits([onChange]);
</script>

<template>
  <input v-model="inputValue" @change="emits.onChange, inputValue" />
</template>

<style lang="scss" scoped></style>
