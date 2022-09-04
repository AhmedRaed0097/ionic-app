const state = () => ({
    near_resturants:[
        {
            id:1,
            name:'Lorem ipsum',
            description:'Lorem ipsum dolor sit amet',
            destination:20,
            rate: 4,
            period:10,
            img:'assets/images/restaurants/restaurant1.jpg',
        },
        {
            id:2,
            name:'Lorem ipsum',
            description:'Lorem ipsum dolor sit amet',
            destination:24,
            rate: 5,
            period:12,
            img:'assets/images/restaurants/restaurant2.jpg',
        },
    ],
    favorites:[
        [
          {
            id:1,
            name:'Lorem ipsum',
            description:'Lorem ipsum dolor sit amet',
            destination:20,
            rate: 4,
            period:10,
            img:'assets/images/restaurants/restaurant1.jpg',
          },
          {
            id:2,
            name:'Lorem ipsum',
            description:'Lorem ipsum dolor sit amet',
            destination:24,
            rate: 5,
            period:12,
            img:'assets/images/restaurants/restaurant2.jpg',
          },
        ]
      ]
});
 
const getters = {
    nearResturants(state){
            return state.near_resturants;
    },
    resturantById(state){
        return (id) => {
            // return state.meals.find(u => u.id === id);
            return state.near_resturants.find(u => u.id == id);
        }
    },
    favoriteResturants(state){
        return state.favorites;
    },
};
 
const actions = {};
 
const mutations = {};
 
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}