import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,

  state: () => ({
    cities: [],
    isCityExist: false,
    currentLocation: {}
  }),
  mutations,
  actions

}
