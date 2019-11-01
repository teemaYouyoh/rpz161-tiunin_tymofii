<template>
    <div>
<header>
			<div class="container">

				<div class="header-title">CardHouse</div>
				<div class="header-menu">
					<ul>
						<li><a href="index.html">Головна</a></li>
						<li><a class="active-menu-link" href="shop.php">Магазин</a></li>
						<li><a href="#">Про Нас</a></li>
						<li><a href="contacts.html">Контакти</a></li>
					</ul>
				</div>
				<div class="clear-line"></div>
			</div>
		</header>

		<div class="main-wrapper">
			
			<div class="inputs">
				<div class="container">
					<!-- <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST"> -->
					
					<span>
						<button @click = "showAllManufacturers()">Всі виробники</button>
					</span>
					<span v-for="element in manufacturers" >
						<input :value="element.name" v-model="isManufacturer" type="checkbox" name="manufacturer">
						{{element.name}}
					</span>
					<!-- <select name="select_manufacturer" v-model="selectedManufacturer">

						<option value="noSelected" selected="">Не обрано</option>
						<option v-for = 'element in manufacturers' :value="element.name">{{element.name}} </option>

					</select> -->

					<select v-model="isSort" @change="sortProducts()">
						<option value="newestProducts">Спочатку нові товари</option>
						<option value="upPrice">Спочатку найменша</option>
						<option value="downPrice">Спочатку найбільша</option>
					</select>
					<!-- </form> -->

				</div>
			</div>
			
			<div class="new_products">
				<div class="container">
						<!-- filteredProducts -->
						<div class="product" v-for = "(product,index) in productsList"> 
									<img :src="product.image" alt="">
									<div class="txt">
										<router-link :to="'/product/'+product._id" class="txt1" href = "">{{product.name.toUpperCase()}}</router-link>
										<div class="price">{{product.price + " грн"}}</div>
										<a class="purchase" href="">В КОРЗИНУ</a>
									</div>
						</div>			
				</div>
			</div>

		</div>
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
                productsList : [],
                manufacturers : [],
                isManufacturer : [],
                isSort : 'newestProducts',   
            }
        },
        mounted : function(){
            Vue.axios.get("http://localhost:3000/tasks").then(response => {
                console.log(response.data);
                this.productsList = response.data;
            })
            //this.showAllManufacturers();
            this.sortProducts();
        },
        methods : {
            showAllManufacturers : function(){
                this.isManufacturer.length = 0;
                this.manufacturers.forEach(element => {
                    this.isManufacturer.push(element.name);
                });
            },
            sortProducts : function(){
                switch(this.isSort) {
                    case 'newestProducts' : {this.productsList.sort((a, b) => +a.id < +b.id ? 1 : -1); break;}
                    case 'upPrice' : {this.productsList.sort((a, b) => +a.price > +b.price ? 1 : -1); break;}
                    case 'downPrice' : {this.productsList.sort((a, b) => +a.price < +b.price ? 1 : -1); break;}
                    default : break;
                }
            }
        },
        computed : {
            // filteredProducts : function(){
            //     return this.productsList.filter(element => {
            //         return this.isManufacturer.includes(element.manufacturer);
            //     })
            // },
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

.container{
	width: 95%;
	margin: 0px auto;
}


/* HEADER */

header{
	height: 480px;
	background: lightgrey url(/src/images/shop-bg.png);
}

.header-title{
	float: left;
	display: block;
	margin-top: 20px;
	font-size: 52px;
	color: white;
	font-family: 'Lobster', cursive;
}

.header-menu{
	float: right;
	display: block;
	margin-top: 30px;
	font-size: 16px;
	text-transform: uppercase;
}

.header-menu ul li{
	display: inline-block;
	list-style-type: none;
	margin-left: 30px;
}

.header-menu>ul>li>a{
	transition: 0.3s;
}

.header-menu>ul>li>a:hover{
	color: red;
}

.active-menu-link{
	padding-bottom: 5px;	
	border-bottom: solid 1px;
	color: red;
}

.clear-line{
	clear: both;
}



/* WRAPPER */

.main-wrapper{
	margin: -100px 30px 0px;
	position: relative;
	background-color: white;
	border: 0px solid white;
	border-radius: 10px 10px 0 0;
	box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.2);
}

/* INPUTS */

.inputs{
	padding-top: 50px;
	padding-left: 50px;
}


/* NEW PRODUCT*/

.new_products{
	clear: both;
	margin-top: 100px; 
	margin-bottom: 100px;
	padding-top: 70px;
	text-align: center;
	color: #3c4858;
}

.new_products a{
	color: #3c4858;
}

.new_products img{
	width: 240px;
}

.buy-product_button_text{
	margin: 0;
}

.product{
	height: 350px;
	display: inline-block;
	margin-right: 50px; 
}

.product .price{
	margin-bottom: 10px;
}

.product .purchase{
	border: 1px solid black;
	border-radius: 10px;
	padding: 5px;
}


/* FOOTER */

footer{
	clear: both;
	position: absolute;
	width: 100%;
	height: 100px;
	bottom: 0;
	color: #acacac;
	background-color: #323437;
}

footer a{
	color: #acacac;
}

footer a:hover{
	text-decoration: underline;
}

footer ul{
	list-style-type: none;
	margin-top: 35px;
}

footer ul li{
	display: inline-block;
	padding: 0 10px; 
	border-right: 1px solid;
}

footer ul li:last-child{
	border-right: 0;
}




/* Large Devices, Wide Screens */
@media only screen and (max-width : 1366px) {
	
	h1{
		font-size: 32px;
	}

	header{
		height: 360px;
	}

	.new_products{
		margin-top: 50px; 
		margin-bottom: 0;
	}

	.product{
		margin-top: 0px;
		margin-right: 0px; 
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