import { createStore } from 'vuex'
import weatherModule from './modules/weather-module/weatherModule'
import authModule from './modules/authModule/authModule'

export default createStore({

  modules: {
    weatherModule,
    authModule
  }

})
