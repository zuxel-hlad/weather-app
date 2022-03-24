<template>
  <section class="weather-details">
    <div class="container"
    >
      <div class="weather-details-nav">
        <h1 class="details-title">Страница подробного прогноза</h1>
        <button
          class="weather-details-back"
          @click="$router.push('/')"
        >
          На главную
        </button>
      </div>

      <div class="weather-now" v-if="currentCity">
        <h2 class="weather-now-title">Пргноз на данный момент</h2>
        <span class="weather-now-text">Город: {{ currentCity.name }}</span>
        <span class="weather-now-text">Долгота: {{ currentCity.coord.lat }}</span>
        <span class="weather-now-text">Широта: {{ currentCity.coord.lon }}</span>
        <span class="weather-now-text">Температура сейчас: {{ currentCity.main.temp.toFixed() }}
          <sup><sup>o</sup>C</sup></span>
        <span class="weather-now-text">Ощущается как: {{
            currentCity.main.feels_like.toFixed()
          }} <sup><sup>o</sup>C</sup></span>
        <span class="weather-now-text">Влажность: {{ currentCity.main.humidity }} %</span>
        <span class="weather-now-text">Атмосферное давление:  {{ currentCity.main.pressure }} гПа</span>
        <span class="weather-now-text">Погодные условия: {{ currentCity.weather[0].description }}</span>
        <span class="weather-now-text">Скоровсть ветера:  {{ currentCity.wind.speed.toFixed() }} м/сек</span>
        <span class="weather-now-text">Видмость: {{ currentCity.visibility }}  метров</span>
      </div>
      <span class="weather-not-found" v-else>Совпадений не найдено</span>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'WeatherDetails',
  computed: {
    ...mapState('weatherModule', {
      cities: state => state.cities
    }),
    currentCity () {
      return this.cities.find(city => city.id === +this.$route.params.id)
    }
  },
  mounted () {
    this.checkIsAuth()
    this.getCities()
  },
  methods: {
    ...mapMutations('weatherModule', ['getCities']),
    ...mapMutations('authModule', ['checkIsAuth'])
  }
}
</script>

<style scoped lang="scss">
.weather-details {
  padding: 120px 0 0 0;
  min-height: 100vh;

  &-nav {
    padding: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
  }

  &-back {
    padding: 10px 20px;
    background: green;
    border-radius: 4px;
    border: none;
    color: #fff;
    transition: background-color .4s ease;
    cursor: pointer;

    &:hover {
      background-color: darkgreen;
    }
  }

  & .details-title {
    padding: 15px;
    margin: 0;
    text-align: center;
  }

  & .weather-now {
    margin-top: 20px;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    &-text {
      display: block;
      margin-bottom: 10px;
    }
  }
}
</style>
