const state = () => ({
 meals:[
    {
        id:1,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/burgers/burger1.jpg',
        rate:5,
        price:20
    },
    {
        id:2,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/burgers/burger2.jpg',
        rate:4.5,
        price:25
    },
    {
        id:3,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/burgers/burger3.jpg',
        rate:4,
        price:15
    },
    {
        id:4,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/burgers/burger4.jpg',
        rate:3.5,
        price:30
    }
 ],
 popular_breakfast:[
    {
        id:1,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/meal1.jpg',
        rate:5,
        price:20
    },
    {
        id:2,
        name:'Lorem ipsum',
        description:'Lorem ipsum dolor sit amet',
        img:'assets/images/meals/meal2.jpg',
        rate:4,
        price:25
    }
 ],
 favorites:[
    [
      {
        id: 1,
        name: "Lorem, ipsum dolor.",
        img: "/assets/images/meals/meal1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
      {
        id: 2,
        name: "Lorem, ipsum dolor.",
        img: "/assets/images/meals/meal2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
    ]
  ]
});
 
const getters = {
    popularBreakfast(state){
            return state.popular_breakfast;
    },
    mealsList(state){
            return state.meals;
    },
    favoriteMeals(state){
        return state.favorites;
    },
    mealById(state){
        return (id) => {
            // return state.meals.find(u => u.id === id);
            return state.meals.find(u => u.id == id);
        }
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