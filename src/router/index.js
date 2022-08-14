import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import SlidesPage from '../views/SlidesPage.vue'
import LoginPage from '../views/auth/LoginPage.vue'
import tab1 from '../views/Tab1Page.vue'
import itemDetails from '../views/itemDetailsPage.vue'

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
   
    { path:'/',
      name: 'Tab1',
      redirect:'/tab1'
    },
   
    { path:'tab1',
      name: 'Tab1',
      component:tab1
    },
    
    { path:'tab2',
      name: 'Tab2',
      component:()=>import('@/views/Tab2Page')
    },
    
    { path:'tab3',
      name: 'Tab3',
      component:()=>import('@/views/Tab3Page')
    },  
    
    ]
  },
  {
    path: '/splash',
    name: 'Splash',
    component: SlidesPage
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/item/:id',
    name: 'Details',
    component: itemDetails
  }  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
