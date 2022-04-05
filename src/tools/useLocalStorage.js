export default () => {
  const setToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }

  const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key)
  }

  return {
    setToLocalStorage,
    getFromLocalStorage,
    removeFromLocalStorage
  }
}
