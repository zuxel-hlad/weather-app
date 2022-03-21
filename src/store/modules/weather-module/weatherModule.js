import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,

  state: () => ({
    cities: [],
    weatherIsLoading: false,
    currentLocation: {}
  }),
  mutations,
  actions
}
