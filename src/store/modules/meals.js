const state = () => ({
 meals:[
    {
        id:1,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/burgers/burger1.jpg',
        price:20
    },
    {
        id:2,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/burgers/burger2.jpg',
        price:25
    },
    {
        id:3,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/burgers/burger3.jpg',
        price:15
    },
    {
        id:4,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/burgers/burger4.jpg',
        price:30
    }
 ],
 popular_breakfast:[
    {
        id:1,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/meal1.jpg',
        price:20
    },
    {
        id:2,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/meal2.jpg',
        price:25
    }
 ]
});
 
const getters = {
    popularBreakfast(state){
            return state.popular_breakfast;
    },
    mealsList(state){
            return state.meals;
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