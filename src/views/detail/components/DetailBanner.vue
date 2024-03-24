<script setup>
import { ref } from 'vue'

import CommonGallary from '@/components/gallary/CommonGallary.vue'
import FadeAnimation from '@/components/fade/FadeAnimation.vue'

const props = defineProps({
  'sightName': String,
  'bannerImg': String,
  'bannerImgs': Array
})

const showGallary = ref(false)

function handleBannerClick() {
  showGallary.value = true
}

function handleGallaryClose () {
  showGallary.value = false
}
</script>

<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="props.bannerImg" />
      <div class="banner-info">
        <div class="banner-tittle">
          {{ props.sightName }}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ props.bannerImgs.length }}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <CommonGallary
        :imgs="props.bannerImgs"
        v-if="showGallary"
        @close="handleGallaryClose"
      ></CommonGallary>
    </FadeAnimation>
  </div>
</template>


<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
