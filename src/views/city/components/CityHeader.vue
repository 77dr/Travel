<script setup>

</script>

<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe61e;</div>
    </router-link>
  </div>
</template>


<style lang="stylus" scoped>
  // @import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    // height: $headerHeight
    // line-height: $headerHeight
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: #00bcd4
    // background: $bgColor
    font-size: .32rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
