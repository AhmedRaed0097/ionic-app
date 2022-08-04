import { createRouter, createWebHistory } from '@ionic/vue-router';
import SplashPage from '../views/SplashPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=> import('@/views/HomePage')
  },
  {
    path: '/splash',
    name: 'Splash',
    component: SplashPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
