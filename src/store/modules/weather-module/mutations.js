import useCookie from '../../../tools/useCookie'

const { setToCookie, getFromCookie } = useCookie()

export default {

  addNewCity (state, payload) {
    if (!state.cities.some(city => city.id === payload.id)) {
      state.isCityExist = false
      state.cities.push(payload)
      setToCookie('cities', state.cities)
    } else {
      state.isCityExist = true
    }
  },

  getCities (state) {
    if (getFromCookie('cities')) {
      state.cities = [...getFromCookie('cities')]
    } else {
      setToCookie('cities', [])
    }
  },

  setCurrentLocation (state, payload) {
    state.currentLocation = { ...payload }
    setToCookie('currentLocation', state.currentLocation)
  },

  getCurrentLocation (state) {
    if (getFromCookie('currentLocation')) {
      state.currentLocation = { ...getFromCookie('currentLocation') }
    } else {
      setToCookie('currentLocation', {})
    }
  },

  updateCity (state, payload) {
    state.cities[payload.idx] = { ...payload.city }
    setToCookie('cities', state.cities)
  },

  deleteCity (state, payload) {
    state.isCityExist = false
    state.cities = state.cities.filter(city => city.id !== payload)
    setToCookie('cities', state.cities)
  }
}
