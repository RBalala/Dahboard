<template>
  <q-page class="questions-page">
    <p class="question-text">
      Find the smallest number from the given input
    </p>

    <input v-model="inputValue" />

    <q-btn
      no-caps
      unelevated
      label="Run"
      color="primary"
    />
  </q-page>
</template>

<script>
// vue
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: 'QuestionNumberFour',

  setup() {
    // state
    const state = reactive({
      inputValue: ''
    });

    return {
      // state
      ...toRefs(state),
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
