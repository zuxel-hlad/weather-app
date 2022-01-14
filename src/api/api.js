import axios from 'axios'

export default class Api {
  constructor () {
    this._baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
    this._apiID = 'ffc28ffb8dd4bfbefdbbb8d51dbbcc6c'
    this._lang = 'ru'
    this._unitsMetric = 'units=metric'
  }

  getData = async (url) => {
    try {
      const res = await axios.get(`${this._baseUrl}${url}`)
      return res
    } catch (e) {
      console.error(e)
    }
  }

  _getCity = async (cityName) => {
    const res = await this.getData(`q=${cityName}&${this._unitsMetric}&appid=${this._apiID}&lang=${this._lang}`)
    return res.data
  }

  _getCityById = async (cityId) => {
    const res = await this.getData(`id=${cityId}&${this._unitsMetric}&appid=${this._apiID}&lang=${this._lang}`)
    return res.data
  }

  _getLocation = async (lat, lon) => {
    const res = await this.getData(`lat=${lat}&lon=${lon}&${this._unitsMetric}&appid=${this._apiID}&lang=${this._lang}`)
    return res.data
  }
}
