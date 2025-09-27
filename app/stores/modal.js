import { defineStore } from "pinia";

export const useModalStore = defineStore('modal',{
    name: "Modal",
    state: () => ({
        // console.log();
        isOpen : true
    }),
    actions: {
        toggle() {
            this.isOpen = !this.isOpen
            console.log(this)
        },
        hiddenClass(){
            console.log(this.isOpen ? "is-visible" : "is-hidden")
        }
    }
})