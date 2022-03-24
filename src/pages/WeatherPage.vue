<template>
  <section class="weather-page">
    <div class="container">
      <app-form
        v-model="cityName"
      />
      <weather-list
        v-if="!weatherIsLoading"
        :cities="cities"
        @updateInfo="updateCityById"
        @delete="deleteCity"
      />
      <app-loader v-else/>
    </div>
  </section>
</template>

<script>
import WeatherList from '@/components/WeatherList'
import AppForm from '@/components/AppForm'
import AppLoader from '@/components/AppLoader'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'WeatherPage',
  data () {
    return {
      cityName: '',
      error: false
    }
  },

  components: { WeatherList, AppForm, AppLoader },

  computed: {
    ...mapState('weatherModule', {
      cities: state => state.cities,
      weatherIsLoading: state => state.weatherIsLoading
    })
  },
  watch: {
    cityName (newVal) {
      this.getCity(newVal)
      this.cityName = ''
    }
  },
  mounted () {
    this.checkIsAuth()
    this.getCities()
    this.weatherOnAppStartUpdate()
  },
  methods: {
    ...mapActions('weatherModule', ['getCity', 'updateCityById', 'weatherOnAppStartUpdate']),
    ...mapMutations('weatherModule', ['deleteCity', 'getCities']),
    ...mapMutations('authModule', ['checkIsAuth'])
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
