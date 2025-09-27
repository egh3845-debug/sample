import { defineStore } from 'pinia'
import {allPosts} from "~/http/post-api.js";


export const usePostStore =  defineStore('postStore', {
    state: () => (
        {
            posts : [],
            loading: false,
        }
    ),
    actions:{
        async getAllPosts(){
            const {data} = await allPosts();
            this.posts = data;
        },
    },
})