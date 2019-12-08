<template>
    <div>
		
		<Header/>
		<main>
			
			<div class="inputs">
				<div class="container">
					
					<!-- <h2>Фільтри</h2> -->

					<div>
						<h3>Сортування</h3>
						<hr/>
						<select v-model="isSort" @change="sortProducts()">
							<!-- <option value="newestProducts">Спочатку нові товари</option> -->
							<option value="upPrice">Від дешевих до дорогих</option>
							<option value="downPrice">Від дорогих до дешевих</option>
						</select>
					</div>

					<div>						
						<h3>Діапазон цін</h3>
						<hr/>
						<vue-slider
							ref="slider"
							v-model="value"
							v-bind="options"
						></vue-slider>	
						<div class="slider-value">
							<h3>{{options.min}}</h3>
							<h3 class="slider-value">{{value}}</h3>
						</div>						
						
					</div>

					<div class="manufacturers-list">
						<h3>Виробники</h3>
						<hr/>
						<ul>
							<li @click="setManufacturer('All')">Всі виробники</li>
							<li v-for="element in manufacturers" v-bind:key="element" @click="setManufacturer(element)">
								{{element}}
							</li>
						</ul>
						<hr/>
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
					
					<div class="manufacturers-logo">
						<ul>
							<li><img @click="setManufacturer('Bycicle')" src="/src/images/bycicle-logo.png" alt=""></li>
							<li><img @click="setManufacturer('Bee')" src="/src/images/bee-logo.png" alt=""></li>
							<li><img @click="setManufacturer('Cartamundi')" src="/src/images/cartamundi-logo.png" alt=""></li>
							<li><img @click="setManufacturer('Dan-and-Dave')" src="/src/images/dan-and-dave-logo.png" alt=""></li>
							<li><img @click="setManufacturer('Dacember-boys')" src="/src/images/december-boys-logo.png" alt=""></li>
							<li><img @click="setManufacturer('Tally-Ho')" src="/src/images/tally-ho-logo.png" alt=""></li>
							<li><img @click="setManufacturer('Theory11')" src="/src/images/theory11-logo.png" alt=""></li>
						</ul>
					
						<!-- <img src="/src/img/-logo.png" alt=""> -->
					</div>
					<hr>

					<!-- <h2>Товари</h2> -->

					<Slide right class="mobile-filters" width="300" disableOutsideClick>
						<div class="mobile-flters-content">
							<div class="filer-price">
								<h3>Сортування</h3>
								<select v-model="isSort" @change="sortProducts()">
									<!-- <option value="newestProducts">Спочатку нові товари</option> -->
									<option value="upPrice">Від дешевих до дорогих</option>									
									<option value="downPrice">Від дорогих до дешевих</option>
								</select>
							</div>

							<div class="filter-manufacturers">
								<h3>Виробники</h3>
								<ul>
									<li>Всі виробники</li>
									<li v-for="element in manufacturers" v-bind:key="element">
										{{element}}
									</li>
								</ul>
								<!-- <div v-for="element in manufacturers" v-bind:key="element">
									<input class="manufactured-checkbox" :value="element" v-model="isManufacturer" type="checkbox" name="manufacturer">
									{{element}}
								</div> -->
							</div>
						</div>
						
						
					</Slide>

					<div class="product" v-for = "(product,index) in filteredProducts" v-bind:key="index"> 
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

	import { Slide } from 'vue-burger-menu'
	import 'vue-slider-component/theme/antd.css'

	 import Slider from "vue-custom-range-slider";
  // import the styling, css or scss
  import "vue-custom-range-slider/dist/vue-custom-range-slider.css";

  import VueSlider from 'vue-slider-component'


    Vue.use(VueAxios, axios)

    export default {
		components : {
			Header,
			Footer,
			Slide,
			Slider,
			VueSlider
		},
        data(){
            return{
				slider: {
					min : 0,
					max : 100,
					value : 0
				},
                productsList : [],
                manufacturers : [],
                isManufacturer : 'All',
				isSort : 'upPrice',   
				currentUser : null,
				value: 0,
				options: {
					dotSize: 17,
					width: 'auto',
					height: 4,
					contained: false,
					direction: 'ltr',
					data: null,
					min: 0,
					max: 100,
					interval: 1,
					disabled: false,
					clickable: true,
					duration: 0.5,
					adsorb: false,
					lazy: true,
					tooltip: 'focus',
					tooltipPlacement: 'top',
					tooltipFormatter: void 0,
					useKeyboard: false,
					enableCross: true,
					fixed: false,
					minRange: void 0,
					maxRange: void 0,
					order: true,
					marks: false,
					dotOptions: void 0,
					process: true,
					dotStyle: void 0,
					railStyle: void 0,
					processStyle: void 0,
					tooltipStyle: void 0,
					stepStyle: void 0,
					stepActiveStyle: void 0,
					labelStyle: void 0,
					labelActiveStyle: void 0,
				}
				
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
				// this.showAllManufacturers();
				this.sortProducts();
				this.getMinMaxPrice();
			});
			this.currentUser = this.$store.getters.getCurrentUser;
			
        },
        methods : {
			setManufacturer(value){
				this.isManufacturer = value;
			},
            sortProducts(){
                switch(this.isSort) {
                    case 'upPrice' : {this.productsList.sort((a, b) => +a.price > +b.price ? 1 : -1); break;}
                    case 'downPrice' : {this.productsList.sort((a, b) => +a.price < +b.price ? 1 : -1); break;}
                    case 'newestProducts' : {this.productsList.sort((a, b) => +a._id < +b._id ? 1 : -1); break;}
                    default : break;
                }
			},
			addProduct(){
				this.$router.push('/addProduct');
			},
			addProductToCart(value){
				this.$store.commit('addProductToCart', value);
			},
			getMinMaxPrice(){
				let minPrice = this.productsList[0].price;
				let maxPrice = this.productsList[0].price;
				this.productsList.forEach(item=>{
					if(+item.price < +minPrice) minPrice = item.price;
					if(+item.price > +maxPrice) maxPrice = item.price;
				})
				this.options.max = +maxPrice;
				this.value = +this.options.max;
				this.options.min = +minPrice;
			}
        },
        computed : {
            filteredProducts : function(){
                return this.productsList.filter(element => {
					if(this.isManufacturer == 'All' && element.price <= this.value)
						return true;
					if(this.isManufacturer == element.manufacturer && element.price <= this.value)
						return true;
                })
            },
        },
    }
</script>

<style scoped>

.manufacturers-logo ul{
	list-style: none;
	margin: 0;
	padding: 0;
}

.manufacturers-logo ul>li{
	display: inline-block;
	width: 50px;
	margin-right: 5px;
}

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

main{
	flex-direction: row;
	justify-content: space-around;
	text-align: center;
}

/* INPUTS */



.inputs{
	display: block;
	min-width: 250px;
	margin-top: 30px;
	padding-left: 40px; 
	text-align: left;
}

.inputs .container{	
	display: flex;
	flex-direction: column;
	width: 80%;
}

.inputs h3{
	margin-bottom: 0;
}

.inputs .slider-value{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
}

.inputs .slider-value:last-child{
	margin-left: auto;
}

.inputs .slider-value h3{
	margin: 0;
}

.inputs select{
	display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
	margin-top: 15px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
}

.inputs .vue-slider{
	margin-top: 20px;
}

.manufacturers-list ul{
	list-style: none;
	margin-bottom: 15px;
	padding-left: 10px;
}

.manufacturers-list ul>li{
	margin-top: 3px;
	font-size: 16px;
	cursor: pointer;
	transition: 0.3s;
}
.manufacturers-list ul>li:hover{
	color : red;
}

.mobile-filters{
	display: none;
}

.mobile-filters .mobile-flters-content{
	display: flex;
	flex-direction: column;
}

.mobile-filters h2,
.mobile-filters h3{
	color: white;
}

body > div > div > main > div.products > div > div.mobile-filters > div > div.bm-menu{
	background-color: black; 
  	padding: 0;
}

/* NEW PRODUCT*/


.products .container{
	width:100%;
}

.products .container hr{
	width: 95%;
	margin-bottom: 30px;
}

.products{
	width:100%;
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

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

.manufacturers-logo{
	text-align: center;
}

.manufacturers-logo img{
	width: 50px;
	filter: grayscale(100%);
	transition: 0.3s;
	cursor: pointer;
}

.manufacturers-logo img:hover{
	width: 50px;
	filter: grayscale(0%);
}



.buy-product_button_text{
	margin: 0;
}

.product{
	height: 350px;
	display: inline-block;
	margin-bottom: 50px;
	text-align: center;
}

.product .price{
	margin-bottom: 10px;
}

.product .purchase{
	/* border: 1px solid black;
	border-radius: 10px;
	padding: 5px; */
	  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
}

.product .purchase:hover { background: rgb(53, 167, 110); }
.product .purchase:active {
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset;
}


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
	
}	

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
	
	.inputs h2,
	.products h2{
		text-align: center;
	}
	
	main{
		flex-direction: column;
		align-items: center;
	}

	.inputs{
		padding: 0;

		display: none;
	}
	/* .inputs .container{
		flex-direction: row;
	}
	.inputs .container div{
		display: flex;
		flex-direction: row;

	} */
	.inputs h2{
		display: none;
	}

	.mobile-filters{
		display: block;
	}

	.products{
		text-align: center;
	}
	.products .container{
		width: 95%;
	}
	
	
}

/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {
	
}
</style>