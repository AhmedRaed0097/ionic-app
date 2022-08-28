const state = () => ({
    near_resturants:[
        {
            id:1,
            name:'Lorem ipsum',
            description:'Lorem ipsum dolor sit amet',
            destination:20,
            period:10,
            img:'assets/images/restaurants/restaurant1.jpg',
        },
        {
            id:2,
            name:'Lorem ipsum',
            description:'Lorem ipsum dolor sit amet',
            destination:24,
            period:12,
            img:'assets/images/restaurants/restaurant2.jpg',
        },
    ]
});
 
const getters = {
    nearResturants(state){
            return state.near_resturants;
    }
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