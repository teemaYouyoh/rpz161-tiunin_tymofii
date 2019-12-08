<template>
    <div class="products">

        <header>
			<div class="container">
				<div class="header-navigation">
					<div class="header-title">CardHouse</div>
					<div class="header-menu">
						<ul>
							<li><router-link :to="'/main'">Головна</router-link></li>
							<li><router-link :to="'/shop'">Магазин</router-link></li>
							<li><router-link :to="'/about-us'">Про Нас</router-link></li>
							<!-- <li><router-link :to="'/shop2'">Контакти</router-link></li> -->
							<li><router-link :to="'/cart'">Корзина</router-link></li>
						</ul>
					</div>
				</div>			
				<!-- <div class="header-button">
					<router-link :to="'/shop'" class="button-text">ДО МАГАЗИНУ</router-link>
				</div> -->
				<Slide right class="mobile-menu">
					<router-link :to="'/main'">Головна</router-link>
					<router-link :to="'/shop'">Магазин</router-link>
					<router-link :to="'/about-us'">Про Нас</router-link>
					<router-link :to="'/cart'">Корзина</router-link>
				</Slide>
			</div>
		</header>

		

		<main>

			<div class="advantages">
				<div class="container">

					<div class="advantages-item">
						<div class="advantages-img">
							<i class="fa fa-check-square"></i>
						</div>
						<div class="advantages-title">
							ЯКІСТЬ
						</div>
						<div class="advantages-text">
							Найкраща якість від вірибника
						</div>
					</div>	

					<div class="advantages-item">
						<div class="advantages-img">
							<i class="fa fa-truck"></i>
						</div>
						<div class="advantages-title">
							ДОСТАВКА
						</div>
						<div class="advantages-text">
							Швидко доставимо у будь-яке місце України
						</div>
					</div>	

					<div class="advantages-item">
						<div class="advantages-img">
							<i class="fa fa-question-circle"></i>
						</div>
						<div class="advantages-title">
							КОНСУЛЬТАЦІЯ
						</div>
						<div class="advantages-text">
							Цілодобові онлайн-консультанти
						</div>
					</div>	
				</div>
			</div>

			<div class="made-in_parallax">
				<div class="parallax-text">
					<div>
						Оригінальні карти вироблені у
					</div>
					<div>
						З'єднаних Штатах Америки 
					</div>	  
				</div>
			</div>

			<div class="new_products">
				<div class="container">
					
					<h2>НОВІ ТОВАРИ</h2>

					<div class="product-row">
						<div class="product" v-for = "(product,index) in productsList" v-if ="index < 5" v-bind:key="index">
							<img :src="product.image" alt="">
							<div class="txt">
								<a class="txt1" href = "">{{product.name.toUpperCase()}}</a>
								<div class="price">{{product.price + " грн"}}</div>
								<button @click="addProductToCart(product)" class="purchase">В КОРЗИНУ</button>
							</div>
						</div>
					</div>

							

				</div>
			</div>

			

			<div class="slider_parallax">
				<div class="slider-wrapper">
					<div class="container">
						<carousel
							:autoplay="true" 
							:nav="false" 
							:loop="true" 
							:items="1" 
							:dots="false" 
							:autoplayTimeout="3000"
							:autoplaySpeed="2000"
						>
							<div class="sl__slide">
								<div class="txt1">КОМБІНАЦІЇ</div>
								<div class="txt2">Количество комбинаций в стандартной игральной колоде равно 52!, или 8×10<sup>67</sup></div>
							</div>
							<div class="sl__slide">
								<div class="txt1">ГРОШІ</div>
								<div class="txt2">Первыми бумажными деньгами на территории современной Канады служили игральные карты
								</div>
							</div>
							<div class="sl__slide">
								<div class="txt1">«Гра не коштує свічок»</div>
								<div class="txt2">Выражение «игра не стоит свеч» пришло из речи картёжников, говоривших так об очень небольшом выигрыше, который не окупает стоимости свечей, сгоревших во время игры.</div>
							</div>
						</carousel>
					</div>
				</div>
			</div>
			
			

			<div class="manufacturer">
				<div class="container">
					
					<h2>ВИРОБНИКИ</h2>
					<carousel 
						:autoplay="false" 
						:nav="false" 
						:loop="true" 
						:items="3" 
						:dots="true" 
					>
						<div class="man">CARTAMUNDI</div>
						<div class="man">BEE</div>
						<div class="man">AVIATORS</div>
						<div class="man">BYCICLE</div>
						<div class="man">TALLY-HO</div>
						<div class="man">CARTAMUNDI</div>
						<div class="man">BEE</div>
						<div class="man">AVIATORS</div>
						<div class="man">BYCICLE</div>
						<div class="man">TALLY-HO</div>
					</carousel>			

				</div>
			</div>

			<div class="contactus">
				<div class="container">
					<div class="title">ЗВ'ЯЖІТЬСЯ З НАМИ</div>
					<div class="contactus-form">
						<input v-model="contactUsData.name" type="text" name="Name" placeholder="Ім'я">
						<input v-model="contactUsData.email" type="text" name="E-mail" placeholder="E-mail">
						<input v-model="contactUsData.theme" type="text" name="Theme" placeholder="Тема">
						<textarea v-model="contactUsData.message" name="Message" id="" cols="30" rows="10" placeholder="Повідомлення"></textarea>
						<button @click="postContactUs()">Відправити</button>
					</div>
				</div>
			</div>

		</main>       
		<Footer/>
    </div>
</template>
<script>

	// import simpleslider from 'simple-slider'
	
	// simpleslider.getSlider({
	// 	container: document.getElementById('myslider'),
	// 	transitionTime:1,
	// 	delay:3.5
	// });

    import Vue from 'vue'
    import Vuex from 'vuex'
    import axios from 'axios'
	import VueAxios from 'vue-axios'
	
	import Header from './Header.vue'
	import Footer from './Footer.vue'

	import carousel from 'vue-owl-carousel'
	import { Slide } from 'vue-burger-menu'


    Vue.use(VueAxios, axios)

    export default {
		components : {
			Header,
			Footer,
			carousel,
			Slide

			
		},
        data: function () {
            return {
				productsList : [],
				contactUsData : {
					name : '',
					email : '',
					theme : '',
					message : ''
				}

            };
        },
        mounted: function(){
            Vue.axios.get("http://localhost:3000/tasks").then(response => {
                console.log(response.data);
                this.productsList = response.data;
            })
        },
        methods : {
			addProductToCart(value){
				this.$store.commit('addProductToCart', value);
			},
			postContactUs(){
	            window.open('mailto:mrjokerok21@gmail.com?subject=subject&body='+ JSON.stringify(this.contactUsData))
				this.contactUsData = {};
			}
        },
        computed: {
			sortProduct : function(){
				this.productList.sort((a, b) => +a.id < +b.id ? 1 : -1);
			}
        }
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

h2{
	color: #3c4858;
	font-size: 44px;
}

.products{	
    display: flex;
    flex-direction: column;
    min-height: 100%

}

/* HEADER */

	header{
		display: flex;
		flex-direction: row;
		height: 1080px;
		background: lightgrey url(/src/images/bg2.jpg) top no-repeat;
		background-size: cover;	
	}

	header .container{
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
	}

	header .header-navigation{
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 30px;
		align-items: center;
	}

		header .header-title{
			font-size: 64px;
			color: white;
			font-family: 'Lobster', cursive;
		}

		header .header-menu{
			font-size: 20px;
			text-transform: uppercase;
		}

		header .header-menu ul li{
			display: inline-block;
			list-style-type: none;
			margin-left: 30px;
		}
		header .header-menu>ul>li>a{
			transition: 0.3s;
		}
		header .header-menu>ul>li>a:hover{
			color: red;
		}
		header .active-menu-link{
			padding-bottom: 5px;	
			border-bottom: solid 1px;
			color: red;
		}

		.mobile-menu{
			display: none;
		}

	header .header-button{
		display: none;
		margin-bottom: 400px;
	}

	/* header{
		height: 1080px;
		background: lightgrey url(/src/images/bg2.jpg) top no-repeat;
		background-size: cover;	
	}
	.hea
	?
	: left;
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
	header .header-button{
		clear: both;
		text-align: center;
		margin-top: 600px;
	}
	header .button-text{
		color: white;
		background-color: black;
		border: solid 2px white;
		border-radius: 30px;
		padding: 25px 45px;
		font-size: 54px;
		transition: 0.5s;
		opacity: 0.9;
	}
	header .button-text:hover{
		border: solid 2px black;
		background-color: white;
		color: black;
	} */

/* WRAPPER */

main{
	display: flex;
	flex-direction: column;
}

/* advantages */

.advantages{
	display: flex;
	flex-direction: column;
}

.advantages .container{	
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 50px 0;

}

.advantages .advantages-item{
	text-align: center;
}

.advantages-title{
	margin-top: 10px; 
	color: #3c4858;
	font-weight: bold;
}

.advantages-text{
	margin-top: 5px;
	color: #999;
}


/* 
.col-3{
	width: 33%;
	display: inline-block;
	text-align: center;
	margin-top: 50px;
}

.advantages-img{
	font-size: 82px;
}

.advantages-title{
	margin-top: 10px; 
	color: #3c4858;
	font-weight: bold;
}

.advantages-text{
	margin-top: 5px;
	color: #999;
}
 */


.fa{
	font-size: 32px;
}

.fa-check-square{
	color: #DE4B39;
}

.fa-truck{
	color: #55ACEF;
}

.fa-question-circle{
	color: #EC5B93;
}

/* MADE-IN PARALLAX*/

.made-in_parallax {		
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	height: 720px;
	
	background-attachment: fixed;
	background-position: top;	background-image: url("/src/images/bg3.jpg");
	background-repeat: no-repeat;
	background-size: cover;
}

.parallax-text{
	color: #FFF;
	font-weight: bold;
	font-size: 64px;
	text-align: center;
	text-shadow: 0px 5px 10px black;
}


/* NEW PRODUCT*/

.new_products{
	text-align: center;
	color: #3c4858;
}

.new_products .container{
	display: flex;
	flex-direction: column;
	padding: 50px 0;
}

.new_products .product-row{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 35px 0;
	align-items: flex-end;
}


/* SLIDER */

.slider_parallax {
  background-image: url("/src/images/slider-bg1.jpg");
		background: lightgrey url(/src/images/bg2.jpg) top no-repeat;
		background-size: cover;	
	
  height: 720px;

  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

}

.parallax .slider-wrapper {
	color: white;
	background-size: cover;
}

.slider-wrapper .sl__slide{
	margin-top: 265px;

}

.slider-wrapper .txt1,
.slider-wrapper .txt2{
	margin: 5px;
	text-align: center;
	color: white;
	text-shadow: 2px 5px 1px black;

}

.slider-wrapper .txt1{
	font-size: 64px;
	font-weight: bold;
}

.slider-wrapper .txt2{
	margin-top: 25px;
	padding: 5px;
	font-size: 32px;
	background: rgba(0,0,0,0.9);
}

/* MANUFACTURER */

.manufacturer{
	text-align: center;
	color: #3c4858;
}

.manufacturer .container{
	display: flex;
	flex-direction: column;
	padding: 50px 0 85px 0;
}

.manufacturer .container h2{
	margin-bottom: 70px;
}

.manufacturer .man{
	font-family: 'Cookie', cursive;
	font-size: 60px;
	font-weight: bold;
}



/* CONTACT */

.contactus{
	height: 1080px;
	background-image: url("/src/images/contactus-bg.jpg");
	background-position: center center;
    background-size: cover;
    text-align: center;
}

.contactus .container{	
	display: flex;
	flex-direction: column;
	align-items: center;
}

.contactus .title{
    font-size: 64px;
    color: white;
    font-weight: bold;
    padding-top: 100px;
}

input:focus,
textarea:focus{
	outline-color: red;
}

.contactus .contactus-form{
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 500px;
	height: 400px;
	margin-top: 50px;
	padding: 50px 0 30px;
	background: #000;
	opacity: 0.8;
}

.contactus .contactus-form input{
	width: 70%;
	margin-bottom: 20px;
	height: 30px;
	padding: 0 20px;
	font-size: 14px;

}

.contactus .contactus-form textarea{
	width: 352px;
	resize: none;
	padding: 5px 20px 0;
	font-size: 14px;
}

.contactus .contactus-form button{
	margin-top: 20px;
	font-size: 16px;
	padding: 5px;

}

/* Large Devices, Wide Screens */
@media only screen and (max-width : 1366px) {
	
	h2{
		font-size: 32px;
	}

	header{
		height: 720px;
	}

	header .header-button{
		margin-top: 400px;
	}

	header .button-text{
		padding: 20px 35px;
		font-size: 48px;
	}

	.col-3{
		margin-top: 0;
	}

	.made-in_parallax{
		height: 500px;
	}

	.parallax-text{
		font-size: 54px;
	}

	.contactus{
		height: 720px;
	}

	.contactus .title{
	    padding-top: 60px;
	}

	.slider_parallax {
	  height: 480px;
	}

	.slider-wrapper .sl__slide{
		margin-top: 165px;
	}

	.slider-wrapper .txt1{
		font-size: 48px;
	}

	.slider-wrapper .txt2{
		font-size: 25px;
	}

}

/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {
	
}	

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
	.mobile-menu{
		display: block;
	}
	.header-menu{
		display: none;
	}
}

/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {
	
}

</style>
