<template>
  <div class="card" @click="details = !details">
    <div class="card-header">
      <h2 class="card-title">{{ city.name }}</h2>
      <div class="card-header-btns">
        <button class="card-button" type="button" @click.stop="$emit('updateInfo')">Обновить</button>
        <button class="card-button" type="button" @click.stop="$emit('delete')">Удалить</button>
      </div>
    </div>
    <div class="card-weather">
      <h3 class="card-temp">{{ city.main.temp }} <sup><sup>o</sup>C</sup></h3>
      <transition name="details-fade">
        <div class="card-details" v-if="details">
          <button class="card-details-close" @click.stop="details = !details">скрыть детали</button>
          <small class="card-details-descr">
            <strong>Ощущается как:</strong> {{ city.main.feels_like.toFixed(0) }}
          </small>
          <small class="card-details-descr"><strong>Атмосферное давление:</strong> {{ city.main.pressure }} гПа</small>
          <small class="card-details-descr"><strong>Погодные условия:</strong> {{ city.weather[0].description }}</small>
          <small class="card-details-descr"><strong>Ветер:</strong> {{ city.wind.speed }} м/сек</small>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    city: {
      type: Object,
      required: true,
      default: null
    }
  },
  data () {
    return {
      details: false
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  padding: 20px;
  width: 380px;
  min-height: 200px;
  //box-shadow: 3px 3px 20px #d0d0d0;
  background: linear-gradient(to top, darkgreen, lightgreen);
  border-radius: 4px;
  cursor: pointer;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-title {
    margin: 0;
    color: #fff;
  }

  &-button {
    padding: 5px 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;

    &:active {
      box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
  }

  &-weather {
    padding: 10px 0 0 0;

  }

  &-temp {
    margin: 0 0 10px 0;
    color: #fff;
  }

  &-details {

    &-descr {
      display: block;
      color: #fff;
    }

    &-close {
      font-size: 12px;
      display: block;
      margin: 0 0 0 auto;
      cursor: pointer;
      border: none;
      background: transparent;
      padding: 0;
      transition: color .4s ease;
      color: #fff;

      &:hover {
        color: red;
      }
    }
  }

  .details-fade-enter-active,
  .details-fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .details-fade-enter-from,
  .details-fade-leave-to {
    opacity: 0;
  }

}
</style>
