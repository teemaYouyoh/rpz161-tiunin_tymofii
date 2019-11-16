<template>
    <div>
        <input type="text" v-model="user.login">
        <input type="password" v-model="user.password">
        <button @click="login()">Login</button>
        <button @click="register()">Register</button>

        <!-- <div class="b-container">
            Sample Text
            <button @click="PopUpShow()">Show popup</button>
        </div>
        <div :style='{display:show}' class="b-popup">
            <div class="b-popup-content">
                Text in Popup
            <button @click="PopUpHide()">Hide popup</button>    
            </div>
        </div> -->
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
                user : {
                    'login' : '',
                    'password' : ''
                },

                //show : 'block'
            }
        },
        methods : {
            login : async function(){
               await this.$store.commit("setCurrentUser", this.user);
               this.$router.push('/shop');
            },
            register : async function(){
               await this.$store.commit("addNewUser", this.user);
               this.$router.push('/shop');
            },
            // PopUpHide(){
            //     this.show = 'none';
            // },
            // PopUpShow(){
            //     this.show = 'block';
            // }
        }
    }
    
</script>

<style scoped>
.b-container{
    width:200px;
    height:150px;
    background-color: #ccc;
    margin:0px auto;
    padding:10px;
    font-size:30px;
    color: #fff;
}
.b-popup{
    width:100%;
    min-height:100%;
    background-color: rgba(0,0,0,0.5);
    overflow:hidden;
    position:fixed;
    top:0px;
}
.b-popup .b-popup-content{
    margin:40px auto 0px auto;
    width:100px;
    height: 40px;
    padding:10px;
    background-color: #c5c5c5;
    border-radius:5px;
    box-shadow: 0px 0px 10px #000;
}
</style>