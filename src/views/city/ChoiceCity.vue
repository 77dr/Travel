<script setup>
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/CityAlphabet.vue'

import useLetterLogic from './hooks/useLetterLogic'
import useCityLogic from './hooks/useCityLogic'

const { data } = useCityLogic()
const { letter, handleLetterChange } = useLetterLogic()
</script>

<template>
  <div>
    <CityHeader />
    <CitySearch :cities="data.cities" />
    <CityList
      :cities="data.cities"
      :hot="data.hotCities"
      :letter="letter"
    />
    <CityAlphabet
      :cities="data.cities"
      @change="handleLetterChange"
    />
  </div>
</template>

<style lang="stylus" scoped>

</style>
