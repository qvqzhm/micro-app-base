import router from './router'
import store from './store'
import Router from "vue-router";
import Vue from "vue";
Vue.use(Router)

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {

})
