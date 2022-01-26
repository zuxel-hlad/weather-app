<template>
  <section class="weather-page">
    <div class="container">
      <add-city-form
        v-model="cityName"
      />
      <weather-list
        v-if="!weatherIsLoading"
        :cities="cities"
        @updateInfo="getCityById"
        @delete="deleteCity"
      />
      <app-loader v-else/>
    </div>
  </section>
</template>

<script>
import WeatherList from '../components/WeatherList'
import addCityForm from '../components/addCityForm'
import AppLoader from '../components/AppLoader'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'WeatherPage',
  data () {
    return {
      cityName: ''
    }
  },

  components: { WeatherList, addCityForm, AppLoader },

  computed: {
    ...mapState('weatherModule', {
      cities: state => state.cities,
      weatherIsLoading: state => state.weatherIsLoading
    })
  },

  methods: {
    ...mapActions('weatherModule', ['getCity', 'getCityById', 'weatherOnAppStartUpdate']),
    ...mapMutations('weatherModule', ['deleteCity', 'getCities'])
  },
  watch: {
    cityName (newVal) {
      this.getCity(newVal)
      this.cityName = ''
    }
  },
  created () {
    this.getCities()
    this.weatherOnAppStartUpdate()
  }

}

</script>

<style scoped lang="scss">
.weather-page {
  padding: 120px 0 0 0;
  min-height: 100vh;

  & .add-form {
    margin-bottom: 20px;
  }
}
</style>
