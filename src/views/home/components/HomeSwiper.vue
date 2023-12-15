<script setup>
import { computed, toRefs } from 'vue'
const props = defineProps({
  'list': Array
})
const {list} = toRefs(props)
const showSwiper = computed(() => {
  return props.list.length
})
</script>

<template>
  <div class="swiper">
    <van-swipe
      v-if="showSwiper"
      indicator-color="#fff"
    >
      <van-swipe-item
        v-for="item of list"
        :key="item.id"
      >
        <img
          :src="item.imgUrl"
          class="swiper-img"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="stylus" scoped>
  // 样式穿透
  // .swiper >>> .van-swipe__indicator--active
  //   background-color: #fff
  .swiper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    // height: 31.25vw // 浏览器兼容？
    .swiper-img
      width: 100%
</style>
