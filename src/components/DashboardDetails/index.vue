<script>
 export default {
    name: "DashboardDetails"
 }
</script>
<script setup>
  import { inject, ref} from "vue"
  import DashboardNavbar from '../DashboardNavbar/index.vue'
  import TableLayout from '../Table/index.vue'

  const tableData = inject('tableData')

  const filterData = ref(tableData)

  function handleSearch(value){
    if(!value){
      filterData.value = tableData
    }
    else{
      filterData.value = (tableData || []).filter(item => {
        return item.data.title.toLowerCase().includes(value.toLowerCase())
      })
    }
   console.log(filterData)
  }
</script>

<template>
    <div class="w-full">
        <dashboard-navbar class="mb-5" @handleSearch="handleSearch"/>
        <table-layout class="px-5" :tableData="filterData" />
    </div>
</template>