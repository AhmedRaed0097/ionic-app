import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import SlidesPage from '../views/SlidesPage.vue'
import LoginPage from '../views/auth/LoginPage.vue'
import tab1 from '../views/Tab1Page.vue'
import mealDetails from '../views/MealDetails.vue'
import RestaurantDetails from '../views/RestaurantDetails.vue'

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
    path: '/restaurants/:id',
    name: 'restaurantsDetails',
    component: RestaurantDetails
  },
  {
    path: '/meals/:id',
    name: 'mealsDetails',
    component: mealDetails
  },  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router