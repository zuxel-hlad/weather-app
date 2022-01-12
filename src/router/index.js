import { createRouter, createWebHistory } from 'vue-router'
import WeatherPage from '../pages/WeatherPage'
import WeatherDetails from '../pages/WeatherDetails'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home?',
      alias: '/',
      component: WeatherPage
    },
    {
      path: '/home/:cityName',
      component: WeatherDetails
    }
  ],
  linkActiveClass: 'active',
  linkExactPathActiveClass: 'active'
})

export default router
