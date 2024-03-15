<script lang="ts">
 export default {
    name: "Header"
 }
</script>

<script setup lang="ts">
  import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus';
  import { useRouter } from 'vue-router';  
  import { useAuthStore } from '../../stores/Auth';

  const store = useAuthStore()
  const router = useRouter()

  function handleLogout(){
    store.authentactUser(false)
    router.push('/')
  }
</script>

<template>
    <header class="w-full bg-indigo-700 flex py-3 px-4  justify-between"> 
        <span class="text-white">Smartland.ai</span>
        <el-dropdown :hide-on-click="false" @command="handleLogout">
            <div class="rounded-full text-white bg-blue-700 px-3 py-1 text-xl">V</div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item class="cursor-pointer" command="logout">Logout</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
   </header>
</template>