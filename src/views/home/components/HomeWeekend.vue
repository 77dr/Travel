<script setup>
const props = defineProps({
  'list': Array
})
const list = props.list
</script>

<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <router-link
        v-for="item in list"
        :key="item.id"
        :to="`/detail/${item.id}`"
        tag="li"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
  // FIXME:  引入报错
  // @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      // ellipsis()
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    .item-desc
      line-height: .4rem
      color: #ccc
      // ellipsis()
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
</style>
