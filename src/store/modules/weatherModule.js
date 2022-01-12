import axios from 'axios'
import Cookies from 'js-cookie'
import store from '../index'

const getCitiesFromCookie = (key) => {
  const response = Cookies.get(key)
  return [...JSON.parse(response)]
}

export default {
  namespaced: true,
  state: () => ({
    cities: getCitiesFromCookie('cities'),
    apiKey: 'ffc28ffb8dd4bfbefdbbb8d51dbbcc6c',
    lang: 'ru'
  }),

  mutations: {
    setToCookie (state) {
      Cookies.set('cities', JSON.stringify(state.cities))
    },

    setCity (state, payload) {
      state.cities.push(payload)
      store.commit('weatherModule/setToCookie')
    },

    updateCity (state, payload) {
      state.cities[payload.idx] = { ...payload.city }
      store.commit('weatherModule/setToCookie')
    },

    deleteCity (state, payload) {
      state.cities = state.cities.filter(city => city.id !== payload)
      store.commit('weatherModule/setToCookie')
    }
  },

  actions: {
    async getCity ({ commit, state }, payload) {
      try {
        if (payload) {
          const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${state.apiKey}&lang=${state.lang}`)
          commit('setCity', weather.data)
          console.log(state.cities)
        }
      } catch (e) {
        console.error({ ...e })
      }
    },

    async getCityFromId ({ state, commit }, payload) {
      const currentCityIdx = state.cities.findIndex(city => city.id === payload)
      try {
        if (payload) {
          const newWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${payload}&units=metric&appid=${state.apiKey}&lang=${state.lang}`)
          commit('updateCity', {
            idx: currentCityIdx,
            city: newWeather.data
          })
          console.log(state.cities)
        }
      } catch (e) {
        console.error({ ...e })
      }
    }
  }
}
