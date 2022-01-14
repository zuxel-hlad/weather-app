import Api from '../../../api/api'
const api = new Api()
const { _getCity, _getCityById, _getLocation } = api

export default {

  async getCity ({ commit, state }, payload) {
    try {
      if (payload && !state.isCityExist) {
        const city = await _getCity(payload)
        commit('addNewCity', city)
      } else {
        return false
      }
    } catch (e) {
      console.error(e.message)
    }
  },

  async getCityById ({ state, commit }, payload) {
    const currentCityIdx = state.cities.findIndex(city => city.id === payload)
    try {
      if (payload) {
        const newWeather = await _getCityById(payload)
        commit('updateCity', {
          idx: currentCityIdx,
          city: newWeather
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
      setTimeout(() => dispatch('getCityById', city.id), 500)
    })
  },

  async getLocation ({ commit, state }, position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    try {
      const location = await _getLocation(latitude, longitude)
      commit('setCurrentLocation', location)
    } catch (e) {
      console.error(e.message)
    }
  }
}
