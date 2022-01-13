<template>
  <header class="header">
    <span class="header-title">Weather App</span>
    <div class="header-location">
      <span class="location-details time">{{ new Date().toLocaleDateString() }}</span>
      <span class="location-details">{{ location.main.temp }}<sup><sup>o</sup>C</sup></span>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState('weatherModule', {
      location: state => state.currentLocation
    })
  }

}
</script>

<style scoped lang="scss">
.header {
  padding: 20px 50px;
  width: 100%;
  background-color: #fff;
  min-height: 80px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-location {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & .location-details {
      display: block;
      font-weight: 400;
      line-height: 25px;

      & .time {
        font-size: 12px;
      }
    }
  }

  &-title {
    display: block;
    font-weight: 500;
    font-size: 35px;
  }
}
</style>
