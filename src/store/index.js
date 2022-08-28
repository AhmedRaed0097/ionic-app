import resturantModule from './modules/resturants';
import mealModule from './modules/meals';
import cartModule from './modules/cart';
import {createStore} from 'vuex';
 
const store = createStore({
    modules:{
        meals: mealModule,
        resturants: resturantModule,
        cart: cartModule
    }
});
 
export default store;