<script>
  export default {
    name: 'SideBarNav'
  }
</script>
<script setup>
import {computed} from "vue";
import { RouterLink,useRoute } from 'vue-router';

const route = useRoute()


const DASHBOARDS = [
  {
      id: "1",
      title: "All Leads"
  },
  {
      id: "2",
      title: "Master Inbox"
  },
  {
      id: "3",
      title: "Email Campaigns"
  }
]

const OUTERLINKS = [
{
      id: "1",
      title: "Join Slack Community",
      link: "https://www.google.com/"
  },
  {
      id: "2",
      title: "Tutorials Community",
      link: "https://www.google.com/"
  }
]

 const activeRoute = computed(() => {
  return DASHBOARDS.find(item => {
    return item.id === route.params.id
   })
 })
</script>

<template>
    <div class="flex flex-col justify-between bg-white text-slate-900 w-1/6 shadow-md" style="height: 93.5vh;">
        <ul class="mt-2">
            <li 
               v-for="nav in DASHBOARDS" 
              :key="nav.id" class="border-l-4 border-solid " 
              :class="{'border-blue-600 bg-blue-50' : activeRoute.id === nav.id}" 
            >
                <router-link :to="`/dashboard/${nav.id}`" class="block px-4 py-2 text-slate-500">{{nav.title}}</router-link>
            </li>
        </ul>
        <div class="mb-4">
            <hr class="w-12 m-auto mb-2" />
        <ul>
            <li v-for="nav in OUTERLINKS" :key="nav.id" >
                <a target="_blank" :href="nav.link" class="block px-4 py-2 text-slate-500">{{nav.title}}</a>
            </li>
        </ul>
    </div>
    </div>
  </template>
  