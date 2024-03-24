import { reactive, onMounted } from 'vue'
import axios from 'axios'

function useCityLogic() {
  const data = reactive({
    cities: {},
    hotCities: []
  })

  async function getCityInfo() {
    let res = await axios.get('/api/city.json')
    res = res.data
    if (res.ret && res.data) {
      const result = res.data
      data.cities = result.cities
      data.hotCities = result.hotCities
    }
  }

  onMounted(() => { getCityInfo() })

  return { data }
}

export default useCityLogic