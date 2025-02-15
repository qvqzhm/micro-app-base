import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/thr',
    name: 'Thr',
    component: () => import(/* webpackChunkName: "about" */ '../views/Thr.vue')
  },
  {
    path: '/four',
    name: 'Four',
    component: () => import(/* webpackChunkName: "about" */ '../views/Four.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "hash"
})

export default router
