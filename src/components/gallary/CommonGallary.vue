<script setup>
import { ref, toRefs } from 'vue'
const props = defineProps({
  'imgs': Array
})
const { imgs } = toRefs(props)
const emits = defineEmits(['change'])
function handleGallaryClick () {
  emits('close')
}
const current = ref(0)
function vanSwipeChange (index) {
  current.value = index
}
</script>

<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <van-swipe
        width="100%"
        indicator-color="#fff"
        @change="vanSwipeChange"
      >
        <van-swipe-item
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img class="gallary-img" :src="item" />
        </van-swipe-item>
      </van-swipe>
        <div class="custom-indicator">{{ current+1 }} / {{ imgs.length }}</div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  // .container >>> .swiper-container
  //   overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      position: relative
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .custom-indicator
        color: #fff
        position: absolute;
        left: 50%;
        bottom: -1rem
        transform: translateX(-50%);
</style>
