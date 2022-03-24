import { createRouter, createWebHistory } from 'vue-router'
import WeatherPage from '@/pages/WeatherPage'
import WeatherDetails from '@/pages/WeatherDetails'
import NotFound from '@/pages/NotFound'
import Login from '@/pages/Login'
import useCookie from '@/tools/useCookie'
const { getFromCookie } = useCookie()
const isAuth = getFromCookie('isLogged')
console.log(isAuth)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      alias: '/',
      component: WeatherPage
    },
    {
      path: '/home/:id',
      component: WeatherDetails
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  linkActiveClass: 'active',
  linkExactPathActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuth.status) next({ name: 'Login' })
  else next()
})

export default router
