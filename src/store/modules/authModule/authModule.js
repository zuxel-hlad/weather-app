import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    isLogged: false
  }),
  mutations: {
    login (state) {
      state.isLogged = true
      localStorage.setItem('isLogged', JSON.stringify({ isLogged: state.isLogged }))
      router.push('/home')
    },

    logout (state) {
      state.isLogged = false
      localStorage.setItem('isLogged', JSON.stringify({ isLogged: state.isLogged }))
      router.push('/login')
    },
    checkIsAuth (state) {
      if (JSON.parse(localStorage.getItem('isLogged')).isLogged) {
        state.isLogged = true
      } else {
        localStorage.setItem('isLogged', JSON.stringify({ isLogged: state.isLogged }))
      }
    }
  }
}
