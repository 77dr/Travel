import { defineStore } from 'pinia'

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log(e)
}

export const useCityStore = defineStore('city', {
  state: () => ({ name: defaultCity }),
  actions: {
    changeCity(city) {
      this.name = city
      try {
        localStorage.city = city
      } catch (e) {
        console.log(e)
      }
    }
  }
})