<script lang="ts">
export default {
  name: 'Dashboard'
}
</script>
<script setup lang="ts">
import { provide } from 'vue'
import SideNavBar from "../../components/SideNavbar/index.vue"
import DashboardDetails from '../../components/DashboardDetails/index.vue'
import tableData from "../../assets/table.js"

provide('tableData', tableData)

</script>
<template>
    <div class="flex h-screen">
          <side-nav-bar />
          <dashboard-details/>
    </div>
</template>