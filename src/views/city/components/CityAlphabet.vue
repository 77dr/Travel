<script setup>
import { ref, computed, toRefs, onUpdated, defineEmits } from 'vue'

const props = defineProps({
  cities: Object
})
const { cities } = toRefs(props)
const letters = computed(() => {
  const letters = []
  for (let i in cities.value) {
    letters.push(i)
  }
  return letters
})
let touchStatus = ref(false)
let startY = ref(0)
let timer = ref(null)
const A = ref(null)
onUpdated(() => {
  startY.value = A.value[0].offsetTop
})
const emits = defineEmits(['change'])
function handleLetterClick (e) {
  emits('change', e.target.innerText)
}
function handleTouchStart () {
  touchStatus.value = true
}
function handleTouchMove (e) {
  if (touchStatus.value) {
    // 节流
    if (timer.value) {
      clearTimeout(timer.value)
    }
    timer.value = setTimeout(() => {
      const touchY = e.touches[0].clientY - 79
      const index = Math.floor((touchY - startY.value) / 20)
      if (index >= 0 && index < letters.value.length) {
        emits('change', letters.value[index])
      }
    }, 8)
  }
}
function handleTouchEnd () {
  touchStatus.value = false
}
</script>

<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      <!-- @touchstart.prevent="handleTouchStart" -->
      {{item}}
    </li>
  </ul>
</template>

<style lang="stylus" scoped>
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
