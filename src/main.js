import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import ProductInfo from './components/ProductInfo.vue'
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'
import Shop from './components/Shop.vue'
import AddProduct from './components/AddProduct.vue'
import Purchase from './components/Purchase.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import store from './store.js'

const routes = [
    { path: '/main', component: ProductsList },
    { path: '/shop', component: Shop },
    { path: '/purchase', component: Purchase },
    { path: '/logout', component: Logout },
    { path: '/login', component: Login },
    { path: '/add-product', component: AddProduct },
    { path: '/product/:id', component: ProductInfo },
    { path: '/cart', component: Cart },
]

const router = new VueRouter({
    routes,
    linkActiveClass : 'active-menu-link' 
})

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    el: '#app',
    router,
    store
})
