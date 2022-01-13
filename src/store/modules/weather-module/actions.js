import axios from 'axios'

export default {

  async getCity ({ commit, state }, payload) {
    try {
      if (payload && !state.isCityExist) {
        const city = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${state.apiKey}&lang=${state.lang}`)
        commit('addNewCity', city.data)
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
  },

  async getLocation ({ commit, state }, position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    try {
      const location = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${state.apiKey}&lang=${state.lang}`)
      commit('setCurrentLocation', location.data)
    } catch (e) {
      console.error(e.message)
    }
  }
}
