<script lang="ts">
 export default {
    name: "DashboardNavbar"
 }
</script>
<script setup lang="ts">
  import SearchBox from '../Search/index.vue'

  const $emits = defineEmits(['handleSearch']);
</script>

<template>
    <header class="flex justify-between w-full bg-white p-3 shadow-md">
      <h2 class="ml-2">All Campaigns (24)</h2>
      <div>
        <search-box @handleSearch="(searchVal: string) => $emits('handleSearch', searchVal)"/>
      </div>
    </header>
</template>