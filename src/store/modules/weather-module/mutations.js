import useCookie from '@/tools/useCookie'

const { setToCookie, getFromCookie } = useCookie()

export default {

  addNewCity (state, payload) {
    state.cities.push(payload)
    setToCookie('cities', state.cities)
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

  setCityLoader (state, payload) {
    const currentCityIdx = state.cities.findIndex(city => city.id === payload)
    state.cities[currentCityIdx].isLoading = true
  },

  updateCity (state, payload) {
    state.cities[payload.idx] = { ...payload.city }
    setToCookie('cities', state.cities)
  },

  deleteCity (state, payload) {
    state.cities = state.cities.filter(city => city.id !== payload)
    setToCookie('cities', state.cities)
  },

  setLoaderToggle (state, payload) {
    state.weatherIsLoading = payload
  }
}
