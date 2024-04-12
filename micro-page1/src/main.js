import './public-path.js';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'

Vue.config.productionTip = false

let app = null
window.mount = () => {
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

// 👇 将卸载操作放入 unmount 函数，就是上面步骤2中的卸载函数
window.unmount = () => {
  app.$destroy()
  app.$el.innerHTML = ''
  app = null
}

// 如果不在微前端环境，则直接执行mount渲染
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}
