<template>
    <div>
        <Header/>
        <div class="main-wrapper">
            <div class="container">
                <h2>Корзина</h2>
                <div class="product_in_cart" v-for="product in productList">
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
            <p class="total-price">Сума : {{totalPrice.toFixed(2)}} грн.</p>   
            <button class="purchase" @click="finish()">Купить</button>
        </div>
        <Footer/>
        </div>
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

    .purchase{
        margin-bottom: 100px;
        width: 100px;
        height: 45px;
        border-radius: 30px;
        margin-right: 30px;
        cursor: pointer;
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