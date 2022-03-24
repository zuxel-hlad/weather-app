import useCookie from '@/tools/useCookie'
import router from '@/router'
const { setToCookie, getFromCookie, removeFromCookie } = useCookie()

export default {
  namespaced: true,
  state: () => ({
    isLogged: false
  }),
  mutations: {
    login (state) {
      state.isLogged = true
      setToCookie('isLogged', { status: true })
      router.push('/home')
    },

    logout (state) {
      state.isLogged = false
      removeFromCookie('isLogged', { status: true })
      setToCookie('isLogged', { status: false })
      router.push('/login')
    },
    checkIsAuth (state) {
      if (getFromCookie('isLogged').status) {
        state.isLogged = getFromCookie('isLogged').status
      } else {
        return false
      }
    }
  }
}
