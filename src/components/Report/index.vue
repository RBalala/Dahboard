<script>
 export default {
     name: 'Report'
 }
</script>

<script setup>
  defineProps({
    reports: {
        type: Array,
        default: []
    }
  })
</script>

<template>
    <div class="flex gap-8 columns-5">
      <div v-for="report in reports" >
        <div>
            <span class="text-lg mr-1" :class="report.key.split(' ').join('-')">{{ report.value }}</span>
            <span class="text-md text-slate-400" v-if="report.persent">{{ report.persent }}%</span>
        </div>
        <span class="capitalize text-md text-slate-400">{{ report.key }}</span>
      </div>
    </div>
</template>


<style>
  .sent{
    color: rgb(37 99 235);
  }
  .clicked{
    color: rgb(250 204 21);
  }
  .opened{
    color: rgb(192 38 211);
  }
  .replied{
    color: rgb(45 212 191);
  }
  .positive-replay{
    color: rgb(6 182 212);
  }
</style>