import axios from 'axios'

class Api {
  constructor () {
    this._baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
    this._options = '&units=metric&appid=ffc28ffb8dd4bfbefdbbb8d51dbbcc6c&lang='
    this._lang = 'ru'
  }

  _getData = async (url) => {
    try {
      const res = await axios.get(`${this._baseUrl}${url}`)
      return res
    } catch (e) {
      console.error(e)
    }
  }

  _getCity = async (cityName) => {
    const res = await this._getData(`q=${cityName}${this._options}${this._lang}`)
    return res.data
  }

  _getCityById = async (cityId) => {
    const res = await this._getData(`id=${cityId}${this._options}${this._lang}`)
    return res.data
  }

  _getLocation = async (lat, lon) => {
    const res = await this._getData(`lat=${lat}&lon=${lon}${this._options}${this._lang}`)
    return res.data
  }
}

export const api = new Api()
