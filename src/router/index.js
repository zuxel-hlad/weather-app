import { createRouter, createWebHistory } from 'vue-router'
import WeatherPage from '../pages/WeatherPage'
import WeatherDetails from '../pages/WeatherDetails'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      alias: '/main',
      component: WeatherPage
    },
    {
      path: '/details',
      component: WeatherDetails
    }
  ],
  linkActiveClass: 'active',
  linkExactPathActiveClass: 'active'
})

export default router
