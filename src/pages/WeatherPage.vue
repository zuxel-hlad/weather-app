<template>
  <section class="weather-page">
    <div class="container">
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
import geoLocation from '../tools/checkCoords'

export default {
  name: 'WeatherPage',
  data () {
    return {
      cityName: ''
    }
  },

  components: { WeatherList, addCityForm },

  computed: {
    ...mapState('weatherModule', {
      cities: state => state.cities
    })
  },

  methods: {
    ...mapActions('weatherModule', ['getCity', 'getCityFromId', 'weatherOnAppStartUpdate', 'getLocation']),
    ...mapMutations('weatherModule', ['deleteCity'])
  },
  watch: {
    cityName (newVal) {
      this.getCity(newVal)
      this.cityName = ''
    }
  },
  created () {
    this.weatherOnAppStartUpdate()
    geoLocation(this.getLocation)
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
