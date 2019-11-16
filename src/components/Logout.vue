<template>
    <div>

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
               
           },
           mounted : async function(){
               await this.$store.commit('setCurrentUser', null);
               this.$router.push('/shop');
           }
    }
</script>