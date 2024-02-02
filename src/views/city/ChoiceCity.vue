<script setup>
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/CityAlphabet.vue'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
const data = reactive({
  cities: {},
  hotCities: [],
  letter: ''
})
let getCityInfo = () => {
  axios.get('/api/city.json')
    .then(handleGetCityInfoSucc)
}
const handleGetCityInfoSucc = (res) => {
  res = res.data
  if (res.ret && res.data) {
    const result = res.data
    data.cities = result.cities
    data.hotCities = result.hotCities
  }
}
const handleLetterChange = letter => {
  data.letter = letter
}
onMounted(() => {
  getCityInfo()
})
</script>

<template>
  <div>
    <CityHeader />
    <CitySearch :cities="data.cities" />
    <CityList
      :cities="data.cities"
      :hot="data.hotCities"
      :letter="data.letter"
    />
    <CityAlphabet
      :cities="data.cities"
      @change="handleLetterChange"
    />
  </div>
</template>

<style lang="stylus" scoped>

</style>
