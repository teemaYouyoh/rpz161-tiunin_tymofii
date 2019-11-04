<template>
    <div>
        <div>{{product}}</div>
        <button @click="deleteProduct()">Delete</button>
    </div>
</template>
<script>

    import Vue from 'vue'
    import Vuex from 'vuex'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)

    export default {
        data: function() {
            return {
                product: {}
            };
        },
        mounted: function() {
            Vue.axios.get("http://localhost:3000/tasks/"+this.$route.params.id).then(response => {
                console.log(response.data);
                this.product = response.data;
            })
              //Number(this.$route.params.id)
        },
        methods : {
            deleteProduct(){
                Vue.axios.delete("http://localhost:3000/tasks/"+this.$route.params.id).then(response => {
                console.log(response.data);
            })
            }
        }
    }
</script>
