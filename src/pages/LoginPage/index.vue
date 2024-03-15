<script lang="ts">
export default {
    name: 'LoginPage'
}
</script>
<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '../../stores/Auth';
import { useRouter } from 'vue-router';

const store = useAuthStore()
const router = useRouter()

const formModel = reactive({
  username: '',
  password: ''
});

function login() {
  if (formModel.username === 'vjain7597@gmail.com' && formModel.password === 'password') {
   
    store.authentactUser(true)
    router.push('/dashboard/1')
  } else {
  }
}
</script>


<template>
    <div class="absolute top-1/4 left-1/3 shadow-md bg-white p-16 flex flex-col items-center  text-slate-700" >
      <header class="font-bold text-xl">
        Welcome to Smartlead.ai
      </header>
      <h2 class="text-sm font-semibold mb-4">
        Log in to your account 
      </h2>
      <form class="w-full" @submit.prevent="login">
        <div class="form-group flex flex-col mb-2">
          <label for="username" class="text-slate-400 text-sm ">Email</label>
          <input autocomplete="off" class="border-solid border-2 border-slate-100 rounded-md px-2" type="text" id="username" v-model="formModel.username" required />
        </div>
        <div class="form-group flex flex-col mb-4">
          <label for="password" class="text-slate-400 text-sm ">Password</label>
          <input autocomplete="off" class="border-solid border-2 border-slate-100 rounded-md px-2" type="password" id="password" v-model="formModel.password" required />
        </div>
        <button class="bg-blue-900 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
      </form>
    </div>
  </template>
    