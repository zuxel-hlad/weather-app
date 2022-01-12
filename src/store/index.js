import { createStore } from 'vuex'
import weatherModule from './modules/weatherModule'

export default createStore({
  modules: {
    weatherModule
  }
})
