import Vue from 'vue'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
