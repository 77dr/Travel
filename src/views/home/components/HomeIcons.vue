<script setup>
import { computed, toRefs } from 'vue'
const props = defineProps({
  'list': Array
})
const {list} = toRefs(props)
const pages = computed(() => {
  const pages = []
  list.value.forEach((item, index) => {
    const page = Math.floor(index / 8)
    if (!pages[page]) {
      pages[page] = []
    }
    pages[page].push(item)
  })
  return pages
})
</script>

<template>
  <!--  mode1  -->
  <div class="icons">
    <van-swipe
      :show-indicators="false"
      :loop="false"
    >
      <van-swipe-item
        v-for="(page, index) of pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl"
            />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
  <!--  mode2  -->
  <!--  <van-swipe
    :show-indicators="false"
    :loop="false"
  >
    <van-swipe-item
      v-for="(page, index) of pages"
      :key="index"
    >
      <van-grid
        :column-num="4"
        :border="false"
        icon-size="65.5px"
      >
        <van-grid-item
          v-for="item in page"
          :key="item.id"
          :icon="item.imgUrl"
          :text="item.desc"
        />
      </van-grid>
    </van-swipe-item>
  </van-swipe>  -->
</template>

<style lang="stylus" scoped>
  // .icons >>> .swiper-container
  //   height: 0
  //   padding-bottom: 50%
  .icons
    margin-top: .1rem
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
</style>
