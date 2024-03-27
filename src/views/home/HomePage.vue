<script setup>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'

import homeInfo from './hooks/homeInfo'

const { data } = homeInfo()
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
