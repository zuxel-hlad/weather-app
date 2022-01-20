<template>
  <div class="card" @click="details = !details">
    <div class="card-header">
      <h2 class="card-title">{{ city.name }}</h2>
      <span class="card-location"></span>
      <div class="card-header-btns">
        <button class="card-button" title="обновить данные о погоде" type="button" @click.stop="$emit('updateInfo')">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M446.452,231.973A192.112,192.112,0,0,0,285.51,66.251l9.57-9.493a21.333,21.333,0,1,0-30.048-30.292L219.6,71.536a21.333,21.333,0,0,0-.123,30.169l45.067,45.44A21.333,21.333,0,0,0,294.834,117.1l-7-7.053A149.412,149.412,0,0,1,349.307,372.6a21.334,21.334,0,1,0,26.7,33.279A190.874,190.874,0,0,0,446.452,231.973Z"/>
            <path
              d="M247.421,364.863a21.333,21.333,0,0,0-30.294,30.046l7,7.055a149.413,149.413,0,0,1-61.435-262.585A21.334,21.334,0,1,0,136,106.091,192.091,192.091,0,0,0,226.438,445.77l-9.556,9.479a21.333,21.333,0,0,0,30.048,30.292l45.434-45.07a21.334,21.334,0,0,0,.123-30.169Z"/>
          </svg>
        </button>
        <button class="card-button" title="удалить выбранный город" type="button" @click.stop="$emit('delete')">
          <svg viewBox="0 0 512 512"
               xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
        </button>
      </div>
    </div>
    <div class="card-weather">
      <h3 class="card-temp">{{ city.main.temp.toFixed() }} <sup><sup>o</sup>C</sup></h3>
      <transition name="details-fade">
        <div class="card-details" v-if="details">
          <button class="card-details-close" @click.stop="details = !details">скрыть детали</button>
          <small class="card-details-descr">
            <strong>Ощущается как:</strong> {{ city.main.feels_like.toFixed() }}
          </small>
          <small class="card-details-descr"><strong>Атмосферное давление:</strong> {{ city.main.pressure }} гПа</small>
          <small class="card-details-descr"><strong>Погодные условия:</strong> {{ city.weather[0].description }}</small>
          <small class="card-details-descr"><strong>Ветер:</strong> {{ city.wind.speed }} м/сек</small>
        </div>
      </transition>
    </div>
    <router-link
      :to="`/home/${city.id}`"
      class="card-more"
    >
      Подробный прогноз
    </router-link>
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
  box-shadow: 3px 3px 20px #d0d0d0;
  background: linear-gradient(to top, darkgreen, lightgreen);
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &-more {
    padding: 5px;
    position: absolute;
    right: 20px;
    bottom: 20px;
    text-decoration: none;
    display: inline-block;
    color: #fff;
    font-size: 14px;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-btns {
      display: flex;
    }
  }

  &-title {
    margin: 0;
    color: #fff;
  }

  &-button {
    width: 25px;
    height: 25px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    padding: 0;
    border: none;
    background-color: transparent;
    color: #ffffff;
    margin: 0 0 0 10px;

    svg {
      width: 100%;
      height: 100%;
      fill: white;
      transition: fill .4s ease;
    }

    &:hover {
      svg {
        fill: darkgreen;
      }
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
