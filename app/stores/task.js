import {allTasks} from "~/http/task-api.js";


export const useTaskStore =  defineStore('taskStore', {
    state: () => (
        {
            tasks : [],
        }
    ),
    getters:{
        complitedTasks : state => state.tasks,
    },
    actions:{
        async getAllTasks(){
            const {data} = await allTasks();
            this.tasks = data;
        },
    }
})