import router from '@/router'
import useLocalStorage from '@/tools/useLocalStorage'

const { setToLocalStorage, getFromLocalStorage } = useLocalStorage()
export default {
  namespaced: true,
  state: () => ({
    isLogged: false
  }),
  mutations: {
    login (state) {
      state.isLogged = true
      setToLocalStorage('isLogged', { isLogged: state.isLogged })
      router.push('/home')
    },

    logout (state) {
      state.isLogged = false
      setToLocalStorage('isLogged', { isLogged: state.isLogged })
      router.push('/login')
    },
    checkIsAuth (state) {
      console.log('auth')
      if (!getFromLocalStorage('isLogged')) {
        setToLocalStorage('isLogged', { isLogged: state.isLogged })
      } else return false
    }
  }
}
