import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import ProductInfo from './components/ProductInfo.vue'
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'
import Shop from './components/Shop.vue'
import AddProduct from './components/AddProduct.vue'
import store from './store.js'

const routes = [
    { path: '/', component: ProductsList },
    { path: '/shop', component: Shop },
    { path: '/add-product', component: AddProduct },
    { path: '/product/:id', component: ProductInfo },
    { path: '/cart', component: Cart },
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    el: '#app',
    router,
    store
})
