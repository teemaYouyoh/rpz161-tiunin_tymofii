<template>
    <div>
        <Header/>
        <main>
            <div class="container">
                <h2 v-if="productList.length != 0">Корзина</h2>
                <div class="product_in_cart" v-for="product in productList" v-bind:key="product._id">
                    <div class="product_image">
                        <img :src="product.product.image" :alt="product.product.name">
                    </div>
                    <div class="product_info">
                        <div class="product_title">
                            <router-link :to="'/product/'+product.product._id" class="txt1" href = "">{{product.product.name.toUpperCase()}}</router-link>
                        </div>
                        <div class="product_amount">
                            <button @click="minusProduct(product)">-</button> 
                            <input v-model="product.amount">   
                            <button @click="plusProduct(product)">+</button>  
                        </div>
                        <div class="product_price">
                            {{product.product.price * product.amount}} грн.
                        </div>
                        <div class="delete_product">
                            <button @click="deleteProduct(product)">x</button>
                        </div>
                    </div>
                </div>
                <div v-if="productList.length != 0">
                    <p class="total-price">Сума : {{totalPrice.toFixed(2)}} грн.</p>   
                    <button class="purchase" @click="finish()">Купить</button>
                </div>
                <div v-else-if="productList.length == 0">
                    <h2>Корзина порожня</h2> 
                    <h3>Будь ласка, оберіть товар для покупки.</h3> 
                    <button class="toShopButton"><router-link :to="'/shop'">До магазину</router-link></button>
                </div>
        </div>
        </main>
        <Footer/>
    </div>
</template>

<script>

    import Vue from 'vue'
    import Vuex from 'vuex'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    
    Vue.use(VueAxios, axios)

    import Header from './Header.vue'
    import Footer from './Footer.vue'

    export default {
        components : {
            Header,
            Footer
        },
        data : function(){
            return{
                productList : [],
                
                // totalPrice : 0,
            }
        },
        mounted : async function(){
            this.productList = await this.$store.getters.getProductList;
            console.log(this.productList);
            // this.countTotalPrice();          
        },
        methods : {
            // countTotalPrice(){
            //     this.productList.forEach(element => {
            //         this.totalPrice += +element.price;
            //     });
            // },
            plusProduct(value){
                value.amount++;
            },
            minusProduct(value){          
                if(value.amount > 1) 
                    value.amount--; 
            },
            deleteProduct(value){
                this.$store.commit('deleteProductFromCart', value)
            },
            finish(){
                this.$store.commit('addProductToBuy', this.productList);
                this.$router.push('/purchase');
            }
        },
        computed : {
            totalPrice(){
                var price = 0;
                this.productList.forEach(element => {
                    price += (+element.product.price * +element.amount);
                });
                return price;
            }
        }
    }
</script>

<style scoped>

    .main-wrapper{
        min-height: 500px;
    }

    .container{        
        padding-top: 20px;
        margin-bottom: 50px;
    }

    .product_in_cart{
        display: flex;
        align-items: center;
        border-bottom: 1px solid black;
    }

    .product_info{
        width: 100%;
        display: flex;
        align-items: center;
    }

    .product_info .product_amount{
         margin-left: auto;
         margin-right: 50px;
    }

    .product_info button{
        width: 30px;
        height: 30px;
    }

    .product_info input{
        width:50px;
        line-height: 2;
        text-align: center;
    }

    .product_info .product_title,
    .product_info .product_title>a,
    .product_info .product_price{
        font-size: 28px;
        color :black;
    }   
    
      
    .product_image img{
        width: 250px;
    }

    .total-price{
        font-size: 34px;
        font-weight: bold;
        
    }

    .purchase,
    .toShopButton{
        /* border: 1px solid black;
        border-radius: 10px;
        padding: 5px; */
        font-weight: 700;
    color: white;
    text-decoration: none;
    padding: .8em 1em calc(.8em + 3px);
    border-radius: 3px;
    background: rgb(64,199,129);
    box-shadow: 0 -3px rgb(53,167,110) inset;
    transition: 0.2s;
    }
    .purchase:hover,
    .pruchase:active,
    .toShopButton:hover { background: rgb(53, 167, 110); }
    .toShopButton:active {
    background: rgb(33,147,90);
    box-shadow: 0 3px rgb(33,147,90) inset;
    }


    .delete_product{
        margin-left: 20px;
    }


    /* Large Devices, Wide Screens */
    @media only screen and (max-width : 1366px) {
        .product_image img{
            width: 200px;
        }
        .product_info .product_title,
        .product_info .product_price{
            font-size: 24px;
        }   
        .product_info button{
            width: 30px;
            height: 30px;
        }
        .product_info input{
            width:50px;
            line-height: 2;
            text-align: center;
        }
    }
    /* Medium Devices, Desktops */
    @media only screen and (max-width : 992px) {
        
    }	

    /* Small Devices, Tablets */
    @media only screen and (max-width : 768px) {
        
    }

    /* Extra Small Devices, Phones */
    @media only screen and (max-width : 480px) {
        
    }
</style>