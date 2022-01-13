import axios from 'axios'
import Cookies from 'js-cookie'
import store from '../index'

// function chekCoords (position) {
//   const latitude = position.coords.latitude
//   const longitude = position.coords.longitude
//   return {
//     latitude,
//     longitude
//   }
// }
//
// navigator.geolocation.getCurrentPosition(chekCoords)
// console.log(chekCoords().latitude)

const initialState = (key) => {
  if (Cookies.get(key) === undefined) {
    Cookies.set(key, JSON.stringify([]))
  } else {
    return [...JSON.parse(Cookies.get(key))]
  }
}

export default {
  namespaced: true,
  state: () => ({
    cities: initialState('cities'),
    apiKey: 'ffc28ffb8dd4bfbefdbbb8d51dbbcc6c',
    lang: 'ru',
    isCityExist: false
  }),

  mutations: {
    setToCookie (state) {
      Cookies.set('cities', JSON.stringify(state.cities))
    },

    setCity (state, payload) {
      if (state.cities === [] || !state.cities.some(city => city.id === payload.id)) {
        state.isCityExist = false
        state.cities.push(payload)
        store.commit('weatherModule/setToCookie')
      } else {
        state.isCityExist = true
      }
    },

    updateCity (state, payload) {
      state.cities[payload.idx] = { ...payload.city }
      store.commit('weatherModule/setToCookie')
    },

    deleteCity (state, payload) {
      state.isCityExist = false
      state.cities = state.cities.filter(city => city.id !== payload)
      store.commit('weatherModule/setToCookie')
    }
  },

  actions: {
    async getCity ({ commit, state }, payload) {
      try {
        if (payload && !state.isCityExist) {
          const city = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${state.apiKey}&lang=${state.lang}`)
          commit('setCity', city.data)
        } else {
          return false
        }
      } catch (e) {
        console.error(e.message)
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
        }
      } catch (e) {
        console.error(e.message)
      }
    },

    async weatherOnAppStartUpdate ({ dispatch, state }) {
      if (!state.cities.length) {
        return
      }
      state.cities.forEach(city => {
        setTimeout(() => dispatch('getCityFromId', city.id), 500)
      })
    }
  }
}
