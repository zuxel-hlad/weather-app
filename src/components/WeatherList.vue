<template>
  <div class="weather-list" v-if="cities.length">
    <transition-group name="bounce">
      <weather-card
        v-for="city in cities" :key="city.id"
        :city="city"
        @updateInfo="$emit('updateInfo', city.id)"
        @delete="$emit('delete',city.id)"
      />
    </transition-group>
  </div>
  <h3 class="weather-list-message" v-else>Выбранных городов пока нет.</h3>
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

 & .bounce-enter-active {
    animation: bounce-in 0.4s;
  }
 & .bounce-leave-active {
    animation: bounce-in 0.4s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
}

.weather-list-message {
  color: #fff;
  font-size: 32px;
  text-align: center;
}
</style>
