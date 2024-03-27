import axios from 'axios'

export function getCity(city) {
  return axios.get('/api/index.json?city=' + city)
}