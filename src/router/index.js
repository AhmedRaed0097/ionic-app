import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import SplashPage from '../views/SplashPage.vue'
import LoginPage from '../views/auth/LoginPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    children:[
   
    { path:'tab1',
      component:()=>import('@/views/Tap1Page')
    },
    
    { path:'tab2',
      component:()=>import('@/views/Tap2Page')
    },
    
    { path:'tab3',
      component:()=>import('@/views/Tap3Page')
    },
    
    ]
  },
  {
    path: '/splash',
    name: 'Splash',
    component: SplashPage
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
