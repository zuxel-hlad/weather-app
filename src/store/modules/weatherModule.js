import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    cities: [],
    apiKey: 'ffc28ffb8dd4bfbefdbbb8d51dbbcc6c',
    lang: 'ru',
    error: ''
  }),

  mutations: {
    setCity (state, payload) {
      state.cities.push(payload)
    },
    updateCity (state, payload) {
      state.cities[payload.idx] = { ...payload.city }
    },
    deleteCity (state, payload) {
      state.cities = state.cities.filter(city => city.id !== payload)
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
        state.error = 'Ошибка. Введите корректное название города.'
        console.error({ ...e })
      }
    },

    async getCityFromId ({ state, commit }, payload) {
      const currentCityIdx = state.cities.findIndex(city => city.id === payload)
      try {
        if (state.cityName) {
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
