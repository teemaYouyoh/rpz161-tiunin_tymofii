
<template>
    <div>
        <table class="tbl">
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Price</th>
            </tr>
            <tr v-for="product in productList">
                <td>{{product.item}}</td>
                <td>{{product.amount}}</td>
                <td>{{product.price}}$</td>
                <button @click="plusProduct(product)">+</button>     
                <button @click="minusProduct(product)">-</button>     
                <button @click="deleteProduct(product)">x</button> 
            </tr>
        </table>  
        </ul>
        <p>{{totalPrice.toFixed(2)}}$</p>   
        <button @click="finish()">Готово</button>
    </div>
</template>

<script>
    export default {
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
                value.amount--;      
                if(value.amount == 0) 
                    this.deleteProduct(value);

            },
            deleteProduct(value){
                this.$store.commit('deleteProductFromCart', value)
            },
            finish(){
                this.$store.commit('deleteProductFromCart', this.productList)
            }
        },
        computed : {
            totalPrice(){
                var price = 0;
                this.productList.forEach(element => {
                    price += (+element.price * +element.amount);
                });
                return price;
            }
        }
    }
</script>