<script setup>
const props = defineProps({
  'list': Array
})
</script>

<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <router-link
        v-for="item in props.list"
        :key="item.id"
        :to="`/detail/${item.id}`"
        custom
        v-slot="{ navigate }"
      >
        <li @click="navigate" @keypress.enter="navigate" role="link">
          <div class="item-img-wrapper">
            <img :src="item.imgUrl" class="item-img" />
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
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
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
