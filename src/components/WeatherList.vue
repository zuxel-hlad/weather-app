<template>
  <div class="weather-list">
    <weather-card
      v-for="city in cities" :key="city.id"
      :city="city"
      @updateInfo="$emit('updateInfo', city.id)"
    />
  </div>
</template>

<script>
import WeatherCard from './WeatherCard'

export default {
  name: 'WeatherList',
  props: {
    cities: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: { WeatherCard }
}
</script>

<style scoped lang="scss">
.weather-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 25px;
}
</style>
