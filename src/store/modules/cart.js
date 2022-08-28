const state = () => ({
    cart_items:[
        {
            id: 1,
            name: "Lorem ipsum",
            description: "dolor sit amet",
            img: "/assets/images/meals/burgers/burger4.jpg",
            price: 20,
            count: 1,
          },
          {
            id: 2,
            name: "Lorem ipsum",
            description: "dolor sit amet",
            img: "/assets/images/meals/burgers/burger2.jpg",
            price: 15,
            count: 1,
          },
          {
            id: 3,
            name: "Lorem ipsum",
            description: "dolor sit amet",
            img: "/assets/images/meals/burgers/burger3.jpg",
            price: 16,
            count: 1,
          },
    ]
});
 
const getters = {
    cartItems(state){
        return state.cart_items;
    },
    total(state){
        let total = 0;
        state.cart_items.forEach(item => {
          total += (item.price * item.count)
        });
        return total
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