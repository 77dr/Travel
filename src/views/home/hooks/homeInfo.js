import { reactive, onMounted, onActivated } from 'vue'
import { useCityStore } from '@/stores/city'

import { getCity } from '@/api/home'

function homeInfo() {
  const data = reactive({
    swiperList: [],
    iconList: [],
    recommendList: [],
    weekendList: []
  })

  const city = useCityStore().name

  async function getHomeInfo(){
    let res = await getCity(city)
    res = res.data
    if (res.ret && res.data) {
      const result = res.data
      data.swiperList = result.swiperList
      data.iconList = result.iconList
      data.recommendList = result.recommendList
      data.weekendList = result.weekendList
    }
  }
  let lastCity = ''

  onMounted(() => {
    lastCity = city
    getHomeInfo()
  })

  onActivated(() => {
    if (lastCity !== city) {
      lastCity = city
      getHomeInfo()
    }
  })
  return { data }
}

export default homeInfo