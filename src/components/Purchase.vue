<template>
    <div>
        <Header/>
        <div class="main-wrapper">
            <div class="purchase-form">
                <div class="container">
                    <div class="purchase-data">       
                        Ім'я<input type="text" v-model="userData.name">
                        Прізвище<input type="text" v-model="userData.sername">
                        Номер телефону<input type="text" v-model="userData.phone">
                        Електронна адреса<input type="text" v-model="userData.email">
                        <button @click="done()">Оформить</button>
                    </div>
                </div>
            </div>
            <!-- <Footer/> -->
        </div>

    </div>
</template>

<style scoped>

    .purchase-form{
        padding: 30px 0;
    }

    .purchase-data{
        display :flex;
        flex-direction: column;
        align-items: center;
    }

    .purchase-data button{
        margin-top: 10px;
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
            },
            productsToBuy : []
        }
    },
    methods : {
        done(){
            let emailBody = this.userData.name + " " + this.userData.sername +  " " + this.userData.phone + " " + this.userData.email;
            this.productsToBuy.forEach(element => {
                emailBody += ' ' + element.product._id + '=' + element.amount;
            });
            window.open('mailto:mrjokerok21@gmail.com?subject=subject&body='+emailBody);
        }
    },
    mounted(){
        this.productsToBuy = this.$store.getters.getProductsToBuy;
    }
}
</script>