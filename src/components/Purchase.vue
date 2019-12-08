<template>
    <div>
        <Header/>

        <main>
            <div class="purchase-form">
                <div class="container">
                    <div class="purchase-data">       
                        <p>Ім'я</p><input type="text" v-model="userData.name">
                        <p>Прізвище</p><input type="text" v-model="userData.sername">
                        <p>Номер телефону</p><input type="text" v-model="userData.phone">
                        <p>Електронна адреса</p><input type="text" v-model="userData.email">
                        <button class="purchase" @click="done()">Оформить</button>
                    </div>
                </div>
            </div>

<!-- 
            <div class="product card border-0 outofstock">
                <a href="/shop/sale-custom/" class="thumb">
                <div class="card-img-wrapper translucent">
                    <img src="https://media.decemberboys.com.ua/cache/93/2e/932e406b2308097b30de1c7b6b87c802.jpg" class="card-img-top">
                </div> 
                <div class="card-img-overlay d-flex align-items-center p-3 text-center text-dark">
                    <div class="description card-text f-sm">
                        <p>Шанс купить использованные&nbsp;карты по&nbsp;низкой цене&nbsp;и поддержать благотворительную инициативу.</p>
                        </div>
                        </div>
                        </a> 
                        <div class="card-body p-0">
                            <div class="card-text text-center mt-2">
                                <h5 class="mb-0">
                                    <a href="/shop/sale-custom/" class="text-dark no-hover-decoration">
                        Распродажа Старых Карт
                    </a>
                    </h5> 
                    <div class="rating mb-0 f-sm">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star svg-inline--fa fa-star fa-w-18 active">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class="">
                            </path>
                            </svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star svg-inline--fa fa-star fa-w-18 active"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star svg-inline--fa fa-star fa-w-18 active"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star svg-inline--fa fa-star fa-w-18 active"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star svg-inline--fa fa-star fa-w-18 active"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class="">
                            </path>
                            </svg>
                            </div> 
                            <div>
                                <span class="font-weight-bold">
                        75&nbsp;грн
                    </span> <!---->
                    <!-- </div>
                    </div>
                    </div>
                    </div> -->
                    <div class="card">
                            <span href="#">BYCICLE</span>
                            <!-- <img src="https://media.decemberboys.com.ua/cache/30/42/3042a2639321c0926dc230fb5cb898e1.jpg" alt=""> -->
                        
                    </div>
        </main> 
        <Footer/>

    </div>
</template>

<style scoped>
    .card{
        width: 300px;
        height: 180px;
        background: url(https://media.decemberboys.com.ua/cache/30/42/3042a2639321c0926dc230fb5cb898e1.jpg) no-repeat center;
        background-size: 100%;

    }
    .card span{
        opacity: 0;
    }
    .card:hover{
        opacity: 0.15;
        transition: 0.5s opacity;

    }
    .card:hover span{
        opacity: 1;
    }

</style>


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
    data(){
        return{
            userData : {
                name : '',
                sername : '',
                phone : '',
                email : '',
                products  : []
            },
            productsToBuy : []
        }
    },
    methods : {
        done(){
            // let emailBody = this.userData.name + " " + this.userData.sername +  " " + this.userData.phone + " " + this.userData.email;
            this.productsToBuy.forEach(element => {
                this.userData.products.push({
                    'product_id' : element.product._id,
                    'prduct_name' : element.product.name,
                    'amount' : element.amount
                });
            });
            window.open('mailto:mrjokerok21@gmail.com?subject=subject&body='+ JSON.stringify(this.userData));
        }
    },
    mounted(){
        this.productsToBuy = this.$store.getters.getProductsToBuy;
    }
}
</script>

<style scoped>

    .purchase-form{
        padding: 30px 0;
    }

    .purchase-data{
        display :flex;
        flex-direction: column;
        align-items: center;
    }

    .purchase-data p{
        margin-bottom: 0px;
    }

    .purchase-data button{
        margin-top: 20px;
        width: 100px;
        height: 45px;
        border-radius: 30px;
        cursor: pointer;
    }
</style>