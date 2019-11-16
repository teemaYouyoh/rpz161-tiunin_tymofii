<template>
    <div>
		
		<Header/>

		<div class="main-wrapper">
			
			<div class="inputs">
				<div class="container">
					
					<h2>Фільтри</h2>

					<div>
						<h3>Сортування</h3>
						<select v-model="isSort" @change="sortProducts()">
							<option value="newestProducts">Спочатку нові товари</option>
							<option value="upPrice">Спочатку найменша</option>
							<option value="downPrice">Спочатку найбільша</option>
						</select>
					</div>

					<div>
						<h3>Виробники</h3>
						<div v-for="element in manufacturers" >
							<input :value="element" v-model="isManufacturer" type="checkbox" name="manufacturer">
							{{element}}
						</div>
						<button @click = "showAllManufacturers()">Всі виробники</button>
					</div>


					<!-- <select name="select_manufacturer" v-model="selectedManufacturer">

						<option value="noSelected" selected="">Не обрано</option>
						<option v-for = 'element in manufacturers' :value="element">{{element}} </option>

					</select> -->
					
					
					<!-- <button @click="addProduct()">Add product</button> -->

				</div>
			</div>
			
			<div class="products">
				<div class="container">

					<h2>Товари</h2>

					<div class="product" v-for = "(product,index) in filteredProducts"> 
						<img :src="product.image" :alt="product.name">
						<div class="txt">
							<router-link :to="'/product/'+product._id" class="txt1" href = "">{{product.name.toUpperCase()}}</router-link>
							<div class="price">{{product.price + " грн"}}</div>
							<button @click="addProductToCart(product)" class="purchase">В КОРЗИНУ</button>
							<!-- class="purchase"  -->
						</div>
					</div>

				</div>
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
                productsList : [],
                manufacturers : [],
                isManufacturer : [],
				isSort : 'newestProducts',   
				currentUser : null
            }
        },
        mounted : function(){
            Vue.axios.get("http://localhost:3000/tasks").then(response => {
                console.log(response.data);
				this.productsList = response.data;
				this.productsList.forEach(element => {
					if(this.manufacturers.indexOf(element.manufacturer) == -1)
						this.manufacturers.push(element.manufacturer);
				});
				this.showAllManufacturers();
				this.sortProducts();
			});
			this.currentUser = this.$store.getters.getCurrentUser;
			
        },
        methods : {
            showAllManufacturers(){
                this.isManufacturer = this.manufacturers;
            },
            sortProducts(){
                switch(this.isSort) {
                    case 'newestProducts' : {this.productsList.sort((a, b) => +a._id < +b._id ? 1 : -1); break;}
                    case 'upPrice' : {this.productsList.sort((a, b) => +a.price > +b.price ? 1 : -1); break;}
                    case 'downPrice' : {this.productsList.sort((a, b) => +a.price < +b.price ? 1 : -1); break;}
                    default : break;
                }
			},
			addProduct(){
				this.$router.push('/addProduct');
			},
			addProductToCart(value){
				this.$store.commit('addProductToCart', value);
			}
        },
        computed : {
            filteredProducts : function(){
                return this.productsList.filter(element => {
                    return this.isManufacturer.includes(element.manufacturer);
                })
            },
        },
    }
</script>

<style scoped>
html,
body{
	margin: 0;
	padding: 0;	
	font-family: 'Exo 2', sans-serif;
	background-color: #E0E0E0;
}

a{
	color: white;
	text-decoration: none;
}

h1{
	color: #3c4858;
	font-size: 44px;
}

h2{
	/* color: #3c4858; */
	color: black;
	font-size: 34px;
}

h3{
	color: #3c4858;
}

.container{
	width: 95%;
	margin: 0px auto;
}


.clear-line{
	clear: both;
}



/* WRAPPER */

.main-wrapper{
	display: flex;
	justify-content: space-around;
	text-align: center;
}

/* INPUTS */

.inputs{
	display: block;
	min-width: 250px;
	margin-top: 30px;
	padding-left: 50px; 
	text-align: left;
}


/* NEW PRODUCT*/


.products .container{
	width:100%;
}

.products{
	display: block;
	margin-top: 30px; 
	margin-bottom: 250px;
	/* padding-top: 70px; */
	text-align: left;
	color: #3c4858;
}

.products a{
	color: #3c4858;
}

.products h2{
	text-align: left;
}

.products img{
	width: 240px;
}

.buy-product_button_text{
	margin: 0;
}

.product{
	height: 350px;
	display: inline-block;
	margin-right: 50px; 
	margin-bottom: 50px;
	text-align: center;
}

.product .price{
	margin-bottom: 10px;
}

/* .product .purchase{
	border: 1px solid black;
	border-radius: 10px;
	padding: 5px;
} */


/* Large Devices, Wide Screens */
@media only screen and (max-width : 1366px) {
	
	h1{
		font-size: 32px;
	}

	h2{
		font-size: 28px;
	}

	header{
		height: 360px;
	}

	.products{
		margin-top: 30px; 
		margin-bottom: 0;
	}

	.product{
		margin-top: 0px;
		margin-right: 0px; 
	}
}

/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {
	.main-wrapper{
		flex-direction: column;
	}
	.products{
		text-align: center;
	}
	.products .container{
		width: 95%;
	}
}	

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
	
	
	
}

/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {
	
}
</style>