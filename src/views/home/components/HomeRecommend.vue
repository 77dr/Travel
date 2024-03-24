<script setup>
const props = defineProps({
  'list': Array
})
</script>

<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        v-for="item in props.list"
        :key="item.id"
        :to="`/detail/${item.id}`"
        tag="li"
        class="item border-bottom"
      >
        <img :src="item.imgUrl" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background-color: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
