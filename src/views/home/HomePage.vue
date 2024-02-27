<script setup>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'
import axios from 'axios'
import { useCityStore } from '@/stores/city'
import { reactive, onMounted, onActivated } from 'vue'
const data = reactive({
  swiperList: [],
  iconList: [],
  recommendList: [],
  weekendList: []
})
let lastCity = ''
let getHomeInfo = () => {
  axios.get('/api/index.json?city=' + useCityStore().name)
    .then(getHomeInfoSucc)
}
const getHomeInfoSucc = res => {
  res = res.data
  if (res.ret && res.data) {
    const result = res.data
    data.swiperList = result.swiperList
    data.iconList = result.iconList
    data.recommendList = result.recommendList
    data.weekendList = result.weekendList
  }
}
onMounted(() => {
  lastCity = useCityStore().name
  getHomeInfo()
})
onActivated(() => {
  if (lastCity !== useCityStore().name) {
    lastCity = useCityStore().name
    getHomeInfo()
  }
})
</script>

<template>
  <div>
    <HomeHeader />
    <HomeSwiper :list='data.swiperList' />
    <HomeIcons :list='data.iconList' />
    <HomeRecommend :list='data.recommendList' />
    <HomeWeekend :list='data.weekendList' />
  </div>
</template>
