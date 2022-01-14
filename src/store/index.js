import { createStore } from 'vuex'
import weatherModule from './modules/weather-module/weatherModule'

export default createStore({

  modules: {
    weatherModule
  }

})
