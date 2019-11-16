<template>
    <div class="products">

        <header>
			<div class="container">

				<div class="header-title">CardHouse</div>
				<div class="header-menu">
					<ul>
						<li><router-link :to="'/main'">Головна</router-link></li>
						<li><router-link :to="'/shop'">Магазин</router-link></li>
						<li><router-link :to="'/shop1'">Про Нас</router-link></li>
						<li><router-link :to="'/shop2'">Контакти</router-link></li>
						<li><router-link :to="'/cart'">Корзина</router-link></li>
					</ul>
				</div>
				<div class="clear-line"></div>
				<div class="header-button">
					<router-link :to="'/shop'" class="button-text">ДО МАГАЗИНУ</router-link>
				</div>

			</div>
		</header>

		<div class="main-wrapper">

			<div class="advantages">
				<div class="container">
					
					<div class="row">	
						<div class="col-3">
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

						<div class="col-3">
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

						<div class="col-3">
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
			</div>
						
			<div class="clear-line"></div>

			<div class="made-in_parallax">
				<div class="parallax-text">
					Оригінальні карти вироблені у <br> З'єднаних Штатах Америки 
				</div>
			</div>

			<div class="clear-line"></div>

			<div class="new_products">
				<div class="container">
					
					<h1>НОВІ ТОВАРИ</h1>

							<div class="product" v-for = "(product,index) in productsList" v-if ="index < 5">
								<img :src="product.image" alt="">
								<div class="txt">
									<a class="txt1" href = "">{{product.name.toUpperCase()}}</a>
									<div class="price">{{product.price + " грн"}}</div>
									<button @click="addProductToCart(product)" class="purchase">В КОРЗИНУ</button>
								</div>
							</div>

				</div>
			</div>

			<div class="clear-line"></div>

			<div class="slider_parallax">
				<div class="slider-wrapper">
					<div class="container">
						<div>
						    <div class="txt1">КОМБІНАЦІЇ</div>
						    <div class="txt2">Количество комбинаций в стандартной игральной колоде равно 52!, или 8×10<sup>67</sup></div>
						</div>
						<!-- <div id="myslider" class="sl">
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
						</div> -->
					</div>
				</div>
			</div>

			<div class="manufacturer">
				<div class="container">
					
					<h1>ВИРОБНИКИ</h1>

						<div class="man">CARTAMUNDI</div>
						<div class="man">BEE</div>
						<div class="man">AVIATORS</div><br>
						<div class="man">BYCICLE</div>
						<div class="man">TALLY-HO</div>

				</div>
			</div>

			<div class="contactus">
				<div class="container">
					<div class="title">ЗВ'ЯЖІТЬСЯ З НАМИ</div>
				</div>
			</div>

		<Footer/>
		</div>       
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

    Vue.use(VueAxios, axios)

    export default {
		components : {
			Header,
			Footer
		},
        data: function () {
            return {
                productsList : []
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

h1{
	color: #3c4858;
	font-size: 44px;
}

.products{
	position: relative;

}

/* HEADER */


	header{
		height: 1080px;
		background: lightgrey url(/src/images/bg2.jpg) top no-repeat;
		background-size: cover;	
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
	header .header-button{
		clear: both;
		text-align: center;
		margin-top: 600px;
	}
	header .button-text{
		color: white;
		background-color: black;
		border: solid 2px white;
		border-radius: 50px;
		padding: 25px 45px;
		font-size: 54px;
		transition: 0.5s;
		opacity: 0.9;
	}
	header .button-text:hover{
		border: solid 2px black;
		background-color: white;
		color: black;
	}

/* WRAPPER */

.main-wrapper{
	margin: -60px 30px 0px;
	position: relative;
	background-color: white;
	border: 0px solid white;
	border-radius: 10px 10px 0 0;
	box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.2);
}

/* advantages */

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
  background-image: url("/src/images/bg3.jpg");

  height: 720px;
  margin-top: 100px;
  
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax-text{
	color: #FFF;
	font-weight: bold;
	font-size: 64px;
	text-align: center;
	padding-top: 300px;
	text-shadow: 0px 5px 10px black;
}


/* NEW PRODUCT*/

.new_products{
	clear: both;
	margin-top: 100px; 
	margin-bottom: 100px;
	text-align: center;
	color: #3c4858;
}


/* SLIDER */

.slider_parallax {
  background-image: url("/src/images/slider-bg1.jpg");
	
  height: 720px;

  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

}

.slider_parallax .container{
	padding-top: 160px;
}

.parallax .slider-wrapper {
	clear: both;	
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
	clear: both;
	margin-top: 50px; 
	margin-bottom: 100px;
	text-align: center;
	color: #3c4858;
}

.man{
	font-family: 'Cookie', cursive;
	font-size: 60px;
	font-weight: bold;
	display: inline-block;
	margin-right: 50px;
}

.manufacturer h1{
	margin-bottom: 50px;
}


/* CONTACT */

.contactus{
	height: 1080px;
	background-image: url("/src/images/contactus-bg.jpg");
	background-position: center center;
    background-size: cover;
    text-align: center;
}

.contactus .title{
    font-size: 64px;
    color: white;
    font-weight: bold;
    padding-top: 100px;
}






/* Large Devices, Wide Screens */
@media only screen and (max-width : 1366px) {
	
	h1{
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
		margin-top: 50px;
	}

	.parallax-text{
		font-size: 54px;
		padding-top: 180px;
	}

	.new_products{
		margin-top: 50px; 
		margin-bottom: 0;
	}

	.product{
		margin-top: 30px;
		margin-right: 0px; 
	}

	.contactus{
		height: 720px;
	}

	.contactus .title{
	    padding-top: 45px;
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
	
}

/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {
	
}

</style>
