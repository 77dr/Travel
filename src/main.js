import Vue from 'vue'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

import 'vant/lib/index.css'
import { Swipe, SwipeItem, Grid, GridItem } from 'vant'

import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)

new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount('#app')
