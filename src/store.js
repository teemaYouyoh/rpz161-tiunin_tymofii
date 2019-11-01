import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state : {
        productList : [],
    },
    mutations : {
        addProductToCart : (state, product) => {
            let result = state.productList.find(item => item.item == product.item)
            if(result == undefined) state.productList.push(product);
        },
        deleteProductFromCart : (state, product) => {
            for(var i = 0; i<state.productList.length; i++){
                if(state.productList[i].item == product.item){
                    state.productList.splice(i,1);
                }
            }
        },
    },
    getters : {
        getProductList : (state) => {
            return state.productList;
        }
    }
});

export default store;