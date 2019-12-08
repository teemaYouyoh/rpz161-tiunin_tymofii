<template>
    <div>
        <Header/>
            <main>

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
                <div class="products-carousel">
                    <h2>Рекомендовані товари</h2>
                    <carousel
                        :autoplay="true" 
                        :nav="false" 
                        :loop="true" 
                        :items="6" 
                        :dots="false" 
                        :autoplayTimeout="3000"
                        :autoplaySpeed="2000"
                    >   
                        <div class="product">
                            <img :src="productsList[0].image" alt="">
                            <div class="txt">
                                <a class="txt1" href = "">{{productsList[0].name.toUpperCase()}}</a>
                                <div class="price">{{productsList[0].price + " грн"}}</div>
                                <button @click="addProductToCart(productsList[0])" class="purchase">В КОРЗИНУ</button>
                            </div>
                        </div>
                        <div class="product">
                            <img :src="productsList[1].image" alt="">
                            <div class="txt">
                                <a class="txt1" href = "">{{productsList[1].name.toUpperCase()}}</a>
                                <div class="price">{{productsList[1].price + " грн"}}</div>
                                <button @click="addProductToCart(productsList[1])" class="purchase">В КОРЗИНУ</button>
                            </div>
                        </div>
                        <div class="product">
                            <img :src="productsList[2].image" alt="">
                            <div class="txt">
                                <a class="txt1" href = "">{{productsList[2].name.toUpperCase()}}</a>
                                <div class="price">{{productsList[2].price + " грн"}}</div>
                                <button @click="addProductToCart(productsList[2])" class="purchase">В КОРЗИНУ</button>
                            </div>
                        </div>
                        <div class="product">
                            <img :src="productsList[6].image" alt="">
                            <div class="txt">
                                <a class="txt1" href = "">{{productsList[6].name.toUpperCase()}}</a>
                                <div class="price">{{productsList[6].price + " грн"}}</div>
                                <button @click="addProductToCart(productsList[6])" class="purchase">В КОРЗИНУ</button>
                            </div>
                        </div>
                        <div class="product">
                            <img :src="productsList[4].image" alt="">
                            <div class="txt">
                                <a class="txt1" href = "">{{productsList[4].name.toUpperCase()}}</a>
                                <div class="price">{{productsList[4].price + " грн"}}</div>
                                <button @click="addProductToCart(productsList[4])" class="purchase">В КОРЗИНУ</button>
                            </div>
                        </div>
                        <div class="product">
                            <img :src="productsList[5].image" alt="">
                            <div class="txt">
                                <a class="txt1" href = "">{{productsList[5].name.toUpperCase()}}</a>
                                <div class="price">{{productsList[5].price + " грн"}}</div>
                                <button @click="addProductToCart(productsList[5])" class="purchase">В КОРЗИНУ</button>
                            </div>
                        </div>
                        
                    </carousel>
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

    import Header from './Header.vue'
	import Footer from './Footer.vue'
    
	import carousel from 'vue-owl-carousel'


    Vue.use(VueAxios, axios)

    export default {
		components : {
			Header,
			Footer,
			carousel,

		},
        data: function() {
            return {
                product: {},
                productsList : []
            };
        },
        mounted: function() {
            Vue.axios.get("http://localhost:3000/tasks/").then(response => {
                console.log(response.data);
                this.productsList = response.data;
            });
            Vue.axios.get("http://localhost:3000/tasks/"+this.$route.params.id).then(response => {
                console.log(response.data);
                this.product = response.data;
                this.product.amount = 1;
                console.log(response.data);
            });

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
    
    .product{
        text-align: center;
    }

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

      .product-info .product-buy button{
          margin-right: 20px;
        font-weight: 700;
        color: white;
        text-decoration: none;
        padding: .8em 1em calc(.8em + 3px);
        border-radius: 3px;
        background: rgb(64,199,129);
        box-shadow: 0 -3px rgb(53,167,110) inset;
        transition: 0.2s;
        }

    .product-info .product-buy button:hover { background: rgb(53, 167, 110); }
    .product-info .product-buy button:active {
        background: rgb(33,147,90);
        box-shadow: 0 3px rgb(33,147,90) inset;
    }

    .product-info .product-buy{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }

    

    .product-info .product-buy .product-price{
        /* margin-top: 50px; */
        text-align: center;
        font-size: 34px;
    }

    .products-carousel{
        margin: 50px 0;
        padding: 0 20px;
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