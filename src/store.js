import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state : {
        productsInCart : [],
        productsToBuy : [],
        usersList : [],
        currentUser : null
    },
    mutations : {
        addProductToCart : (state, product) => {
            let result = state.productsInCart.find(item => {return item.product._id == product._id});
            if(result == undefined){
                state.productsInCart.push({
                    'product' : product,
                    'amount' : 1
                })
            } else result.amount++;
        },
        deleteProductFromCart : (state, product) => {
            
            for(var i = 0; i<state.productsInCart.length; i++){
                if(state.productsInCart[i].product._id == product.product._id){
                    state.productsInCart.splice(i,1);
                }
            }
        },
        addProductToBuy : (state, product) => {
            state.productsInCart = [];
            state.productsToBuy = [];
            state.productsToBuy = product.concat();
        },
        setCurrentUser : (state, user) => {
            if(state.usersList.indexOf(user) != -1 || user==null){
                state.currentUser = user;
            }
            else alert("This user does not exist!")
        },
        addNewUser : (state, user) => {
            let result = state.usersList.find(item => {return item.name == user.name});
            if(result == undefined){
                state.usersList.push(user);
                state.currentUser = user;
            } 
            else alert("This user is already registered!"); 
        }
    },
    getters : {
        getProductList : (state) => {
            return state.productsInCart;
        },
        getCurrentUser : (state) => {
            return state.currentUser;
        },
        getProductsToBuy : (state) => {
            return state.productsToBuy;
        }
    }
});

export default store;