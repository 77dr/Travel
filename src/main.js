import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
// import './assets/styles/reset.css'
// import './assets/styles/border.css'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
