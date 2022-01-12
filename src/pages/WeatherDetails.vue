<template>
  <section class="weather-details">
    <h1 class="details-title">Weather details page</h1>
  </section>
</template>

<script>
export default {
  name: 'WeatherDetails'
}
</script>

<style scoped lang="scss">
.weather-details {
  padding: 120px 0 0 0;
  min-height: 100vh;

  & .details-title {
    color: #fff;
    text-align: center;
  }
}
</style>
