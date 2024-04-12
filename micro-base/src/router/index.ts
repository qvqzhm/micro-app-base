import { createRouter, createWebHistory } from "vue-router";
import {home} from "./home";
const router =  createRouter({
    history: createWebHistory(),
    routes: home
})

router.beforeEach((to, from, next)=> {
    console.log(to)
    next()
})

export default router;

