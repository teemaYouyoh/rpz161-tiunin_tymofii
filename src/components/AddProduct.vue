<template>
    <div>
        <input type="text" v-model="product.name">
        <input type="text"  v-model="product.manufacturer">
        <input type="number"  v-model="product.price">
        <input type="text"  v-model="product.country">
        <input type="text"  v-model="product.image">
        <button @click="addProduct()">Add</button>
    </div>
</template>

<script>

    import Vue from 'vue'
    import Vuex from 'vuex'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)

    export default {
        data(){
            return{
                product : {
                    name : 'Bycicle Bycicle',
                    manufacturer : 'Bycicle',
                    price : 120,
                    country : 'USA',
                    image : 'img'
                }
            }
        },
        methods : {
            addProduct(){
                Vue.axios.post("http://localhost:3000/tasks", JSON.parse(JSON.stringify(this.product))).then(response => {
                    console.log(response.data);
                });
            }
        }
    }
</script>