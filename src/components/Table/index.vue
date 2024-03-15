
<script setup lang="ts">

import { ElTable, ElTableColumn } from 'element-plus';
import ProgressChart from "../Progress/index.vue";
import Report from '../Report/index.vue';

defineProps({
    tableData: {
        type: Array,
        default: []
    } 
})
const handleSelectionChange = () => {};

</script>


<template>
    <div>
      <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="Camping Details" width="380">
          <template #default="scope">
            <div class="flex items-center">
              <progress-chart :percentage="scope.row.data.score"/>
              <div class="flex flex-col ml-3">
                <h3 class="text-md font-semibold text-blue-600 cursor-pointer">{{ scope.row.data.title }}</h3>
                <p class="flex text-md text-slate-400">{{ `Sent on ${scope.row.data.date}` }} | {{ `${scope.row.data.sequences} Sequences` }}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Report">
          <template #default="scope">
            <report :reports="scope.row.reports" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
 