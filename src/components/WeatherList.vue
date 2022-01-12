<template>
  <div class="weather-list" v-if="cities.length">
    <weather-card
      v-for="city in cities" :key="city.id"
      :city="city"
      @updateInfo="$emit('updateInfo', city.id)"
      @delete="$emit('delete',city.id)"
    />
  </div>
  <h3 v-else>Выбранных городов пока нет.</h3>
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
  justify-content: flex-start;
  gap: 25px;
}
</style>
