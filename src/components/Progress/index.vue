<script lang="ts">
export default {
    name: "Progress"
}
</script>
<script lang="ts" setup>
import { computed } from "vue"
import { ElProgress } from 'element-plus';

const $props = defineProps({percentage: Number})

const status = computed(() => {
  if($props.percentage! < 70 && $props.percentage! > 50  ){
    return "warning"
  }
  else if($props.percentage! > 70){
    return 'exception'
  }
  return "success"
})
</script>

<template>
  <el-progress
    type="circle"
    :stroke-width="10"
    :percentage="percentage"
    :status="status"
  >
    <span class="text-xs right-2 relative text-slate-400 block pl-2">{{ percentage }}%</span>
  </el-progress>
</template>

<style>

.el-progress-circle{
    width: 40px !important;
    height: 40px !important;
}

.percentage-value {
  display: block;
}
</style>