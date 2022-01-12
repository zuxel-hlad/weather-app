<template>
  <section class="weather-page">
    <div class="container">
      <h1 class="weather-page-title">Weather App</h1>
      <add-city-form
        v-model="cityName"
      />
      <weather-list
        :cities="cities"
        @updateInfo="getCityFromId"
        @delete="deleteCity"
      />
    </div>
  </section>
</template>

<script>
import WeatherList from '../components/WeatherList'
import addCityForm from '../components/addCityForm'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'WeatherPage',
  data () {
    return {
      cityName: ''
    }
  },
  methods: {
    ...mapActions('weatherModule', ['getCity', 'getCityFromId', 'weatherOnAppStartUpdate']),
    ...mapMutations('weatherModule', ['deleteCity'])
  },
  computed: {
    ...mapState('weatherModule', {
      cities: state => state.cities
    })
  },
  watch: {
    cityName (newVal) {
      this.getCity(newVal)
    }
  },
  components: { WeatherList, addCityForm },

  mounted () {
    this.weatherOnAppStartUpdate()
  }

}
</script>

<style scoped lang="scss">
.weather-page {
  padding: 120px 0 0 0;

  &-title {
    margin: 0 0 50px 0;
    text-align: center;
    color: #fff;
  }

  & .add-form {
    margin-bottom: 20px;
  }
}
</style>
