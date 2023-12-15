<script setup>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
const data = reactive({
  swiperList: [],
  iconList: [],
  recommendList: [],
  weekendList: []
})
let getHomeInfo = () => {
  axios.get('/api/index.json')
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
  console.log(`the component is now mounted.`)
  getHomeInfo()
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
