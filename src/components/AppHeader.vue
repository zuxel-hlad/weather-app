<template>
  <header class="header">
    <span class="header-title">Weather App</span>
    <div class="header-location">
      <span class="location-details time">{{ new Date().toLocaleDateString() }}</span>
      <span class="location-details" v-if="location.name">{{ location.name }}</span>
      <span class="location-details" v-else>Местоположение не найдено</span>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import geoLocation from '../tools/checkCoords'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState('weatherModule', {
      location: state => state.currentLocation
    })
  },
  methods: {
    ...mapMutations('weatherModule', ['getCurrentLocation']),
    ...mapActions('weatherModule', ['getLocation'])
  },
  created () {
    geoLocation(this.getLocation)
    this.getCurrentLocation()
  }
}
</script>

<style scoped lang="scss">
.header {
  padding: 20px 50px;
  width: 100%;
  background-color: rgba(0, 0, 0, .4);
  min-height: 80px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  &-location {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & .location-details {
      display: block;
      font-weight: 400;
      line-height: 25px;
      color: #fff;
    }
  }

  &-title {
    display: block;
    font-weight: 500;
    font-size: 35px;
    color: #fff;
  }
}
</style>
