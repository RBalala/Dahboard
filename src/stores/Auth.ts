import { defineStore } from 'pinia'


export const useAuthStore = defineStore('authentaction', {
    state: () => ({ isAuthenticated: false }),
    getters: {
        validateUser: (state) => state.isAuthenticated,
    },
    actions: {
       authentactUser(value: boolean){
         this.isAuthenticated = value
       }
    }
})