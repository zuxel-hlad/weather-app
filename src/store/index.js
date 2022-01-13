import { createStore } from 'vuex'
import weatherModule from './modules/weather-module/weatherModule'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],
  modules: {
    weatherModule
  }
})
