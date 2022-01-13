import { createStore } from 'vuex'
import weatherModule from './modules/weatherModule'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],
  modules: {
    weatherModule
  }
})
