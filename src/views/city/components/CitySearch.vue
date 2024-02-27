<script setup>
import Bscroll from 'better-scroll'
import { useCityStore } from '@/stores/city'
import { computed, toRefs, ref, watch, onMounted, onUpdated,getCurrentInstance } from 'vue'
const props = defineProps({
  'cities': Object
})
const { cities } = toRefs(props)
const keyword = ref('')
let timer = null
let list = ref([])
const hasNoData = computed(() => {
  return !list.value.length
})
watch(keyword, (newX) => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  if (!newX) {
    list.value = []
    return
  }
  timer = setTimeout(() => {
    const result = []
    for (let i in cities.value) {
      cities.value[i].forEach((value) => {
        if (value.spell.indexOf(newX) > -1 || value.name.indexOf(newX) > -1) {
          result.push(value)
        }
      })
    }
    list.value = result
  }, 100)
})
const { proxy } = getCurrentInstance()
const $router = proxy.$router
const currentCity = useCityStore()
const handleCityClick = city => {
  currentCity.changeCity(city)
  $router.push('/')
}
const search = ref(null)
let scroll = null
onMounted(() => {
  scroll = new Bscroll(search.value, {
    mouseWheel: true,
    click: true
  })
})
onUpdated(() => {
  scroll.value.refresh()
})
</script>

<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li
          class="search-item border-bottom"
          v-show="hasNoData"
        >
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
