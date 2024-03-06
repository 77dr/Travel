import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import HomePage from '../views/home/HomePage.vue'
import ChoiceCity from '../views/city/ChoiceCity.vue'
import Detail from '../views/detail/HomeRecommendDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
      component: HomePage
    }, {
      path: '/city',
      name: 'city',
      component: ChoiceCity
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition)
    return { x: 0, y: 0 }
  }
})

export default router
