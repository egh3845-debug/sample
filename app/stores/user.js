import { defineStore } from 'pinia'
import {allUsers} from "~/http/user-api.js";


export const useUserStore =  defineStore('userStore', {
    state: () => (
        {
            users : [],
            loading: false,
        }
    ),
    actions:{
        async getAllUsers(){
            const {data} = await allUsers();
            this.users = data;
        },
    },
})