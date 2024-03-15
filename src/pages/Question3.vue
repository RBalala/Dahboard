<template>
  <q-page class="questions-page">
    <p class="question-text">Create a reusable input component</p>

    <InputBox v-model="inputValue" />

    <p class="q-mt-md">Parent Component Value >> {{ inputValue }}</p>
  </q-page>
</template>

<script>
// vue
import { defineComponent, reactive, toRefs } from "vue";

// Component
import InputBox from "components/InputBox.vue";

export default defineComponent({
  name: "QuestionNumberThree",

  components: {
    InputBox,
  },

  setup() {
    // state
    const state = reactive({
      inputValue: "Smartlead",
    });

    return {
      // state
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.questions-page {
  padding: 16px;

  .question-text {
    margin-bottom: 24px;
    font-weight: 500;

    font-size: 16px;
  }
}
</style>
