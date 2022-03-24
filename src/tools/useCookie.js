import Cookies from 'js-cookie'

export default () => {
  const getFromCookie = (key) => {
    if (Cookies.get(key) === undefined) {
      return
    }
    return JSON.parse(Cookies.get(key))
  }

  const setToCookie = (key, value) => {
    Cookies.set(key, JSON.stringify(value))
  }

  const removeFromCookie = (key, value) => {
    Cookies.remove(key, value)
  }

  return {
    getFromCookie,
    setToCookie,
    removeFromCookie
  }
}
