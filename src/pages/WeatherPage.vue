<template>
  <section class="weather-page">
    <div class="container">
      <h1 class="weather-page-title">Simple weather App</h1>
      <weather-list
        :cities="cities"
        @updateInfo="getCityFromId"
      />
    </div>
  </section>
</template>

<script>
import WeatherList from '../components/WeatherList'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'WeatherPage',
  data () {
    return {}
  },
  methods: {
    ...mapActions('weatherModule', ['getCity', 'getCityFromId'])
  },
  computed: {
    ...mapState('weatherModule', {
      cities: state => state.cities
    })
  },
  components: { WeatherList },
  mounted () {
    this.getCity()
  }
}
</script>

<style scoped lang="scss">
.weather-page {
  padding: 120px 0 0 0;
  min-height: 100vh;

  &-title {
    margin: 0 0 50px 0;
    text-align: center;
  }
}
</style>
