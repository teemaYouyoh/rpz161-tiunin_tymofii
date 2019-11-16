<template>
    <div>
        <Header/>
            <div class="main-wrapper">

                <div class="product-wrapper">
                    <div class="container">
                        <div class="product-info">

                            <div class="product-image">
                                <img :src="product.image" :alt="product.image">
                            </div>
                            <div class="product-main-info">
                                <div class="product-title">{{product.name}}</div>
                                <div class="product-characteristics">
                                    <div class="options">
                                        <div class="characteristics-item">Назва</div>
                                        <div class="characteristics-item">Виробник</div>
                                        <div class="characteristics-item">Країна</div>
                                        <div class="characteristics-item">Упаковка</div>
                                        <div class="characteristics-item">Матеріал</div>

                                    </div>
                                    <div class="value">
                                        <div class="characteristics-item">{{product.name}}</div>
                                        <div class="characteristics-item">{{product.manufacturer}}</div>  
                                        <div class="characteristics-item">{{product.country}}</div>
                                        <div class="characteristics-item">Картона коробка</div>
                                        <div class="characteristics-item">Картон з покриттям</div>
                                    </div>
                                </div>
                                <!-- <div class="product_amount">
                                    <button @click="minusProduct(product)">-</button> 
                                    <input v-model="product.amount">   
                                    <button @click="plusProduct(product)">+</button>  
                                </div> -->
                                <div class="product-buy">
                                    <button @click="addProductToCart(product)" class="purchase">В КОРЗИНУ</button>
                                    <div class="product-price">{{product.price}} грн.</div>
                                </div>
                            </div>
                           
                        
                        </div>
                    </div>
                    <!-- <button @click="deleteProduct()">Delete</button> -->
                </div>
                <div class="space-line"></div>
                <Footer/>
            </div> 
        
    </div>
</template>

<script>

    import Vue from 'vue'
    import Vuex from 'vuex'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    import Header from './Header.vue'
	import Footer from './Footer.vue'

    Vue.use(VueAxios, axios)

    export default {
		components : {
			Header,
			Footer
		},
        data: function() {
            return {
                product: {}
            };
        },
        mounted: function() {
            Vue.axios.get("http://localhost:3000/tasks/"+this.$route.params.id).then(response => {
                console.log(response.data);
                this.product = response.data;
                this.product.amount = 1;
                console.log(response.data);
            })
              //Number(this.$route.params.id)
        },
        methods : {
            deleteProduct(){
                Vue.axios.delete("http://localhost:3000/tasks/"+this.$route.params.id).then(response => {
                console.log(response.data);
            })
            },
			addProductToCart(value){
				this.$store.commit('addProductToCart', value);
			}
            // plusProduct(value){
            //     value.amount++;
            //     alert(this.product.amount);
            // },
            // minusProduct(value){          
            //     if(value.amount > 1) 
            //         value.amount--; 
            // },
        }
    }
</script>

<style scoped>
    
    

    .product-info{
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: center;
        padding-top: 50px;
        /* padding : 0 100px; */
    }

    .product-image{
        margin-right: 70px;
    }

    .product-info img{
        width: 400px;
    }
    
    .product-info .product-main-info{
        display: flex;
        flex-direction : column;
        margin-top : 20px;
    }
    
    .product-info .product-title{
        white-space: nowrap;
        font-size: 54px;
    }

    .product-info .product-characteristics{
        display: flex;
        flex-direction : row;
        justify-content: center;
        margin-top: 50px;
        width: 100%;
    }
    
    .product-characteristics .options{
        font-weight: bold;
    }

    .product-characteristics .value{
        margin-left : 20%;
        text-align: right;
    }
    
    .product-characteristics .characteristics-item{
        margin-top: 5px;
    }

    .product-info .product-buy{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }

    .product-info .product-buy button{ 
        width: 100px;
        height: 45px;
        border-radius: 30px;
        margin-right: 30px;
        cursor: pointer;
    }

    .product-info .product-buy .product-price{
        /* margin-top: 50px; */
        text-align: center;
        font-size: 34px;
    }

    /* .product-info .product_amount{
         margin-left: auto;
         margin-right: 50px;
    }

    .product-info button{
        width: 30px;
        height: 30px;
    }

    .product-info input{
        width:50px;
        line-height: 2;
        text-align: center;
    } */

</style>