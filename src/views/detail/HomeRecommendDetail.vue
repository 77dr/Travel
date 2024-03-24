<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import axios from 'axios'

// import { useRoute } from 'vue-router'
import DetailBanner from './components/DetailBanner.vue'
import DetailHeader from './components/DetailHeader.vue'
import DetailList from './components/DetailList.vue'

const sightName = ref('')
const bannerImg = ref('')
const gallaryImgs = ref([])
const list = ref([])

const { proxy } = getCurrentInstance()
// const route = useRoute()

async function getDetailInfo () {
  let res = await axios.get('/api/detail.json', {
    // params: { id: route.params.id }
    params: { id: proxy.$route.params.id }
  })
  res = res.data
  if (res.ret && res.data) {
    const data = res.data
    sightName.value = data.sightName
    bannerImg.value = data.bannerImg
    gallaryImgs.value = data.gallaryImgs
    list.value = data.categoryList
  }
}

onMounted(() => {
  getDetailInfo()
})
</script>

<template>
  <div>
    <DetailBanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    />
    <DetailHeader />
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
