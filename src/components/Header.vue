

<template>
<!-- //npm i @jeremyhamm/vue-slider -->
    <header>
		<div class="container">
			<div class="header-navigation">

				<div class="header-title">CardHouse</div>
				<div class="header-menu">
					<ul>
						<li><router-link :to="'/main'">Головна</router-link></li>
						<li><router-link :to="'/shop'">Магазин</router-link></li>
						<li><router-link :to="'/about-us'">Про Нас</router-link></li>
						<!-- <li><router-link :to="'/shop3'">Контакти</router-link></li> -->
						<li><router-link :to="'/cart'">Корзина</router-link></li>					
						<!-- <li v-if="currentUser == null"><router-link :to="'/login'">Війти</router-link></li>
						<li v-else><router-link :to="'/logout'">Вийти ({{currentUser.login}})</router-link></li> -->
					</ul>
				</div>
				<!-- <div v-if="menuStyle == 'header-menu-closed'" class="openMenuButtonStyle">			  
					<i class="fa fa-bars" @click='openMenu()'></i>				
				</div>
				<div v-else-if="menuStyle == 'header-menu'" class="closeMenuButtonStyle">
					<i class="fa fa-times" @click='closeMenu()'></i>
				</div> -->
				<Slide right class="mobile-menu">
						<router-link :to="'/main'">Головна</router-link>
						<router-link :to="'/shop'">Магазин</router-link>
						<router-link :to="'/about-us'">Про Нас</router-link>
						<router-link :to="'/cart'">Корзина</router-link>
				</Slide>
			</div>
		</div>
	</header>
</template>

<script>
    import Vue from 'vue'
    import Vuex from 'vuex'
    import axios from 'axios'
	import VueAxios from 'vue-axios'
	import { Slide } from 'vue-burger-menu'

	export default {
		components : {
			Slide
		},
		data : function(){
			return{
				
			}
		},
		methods : {
			
		},
	}
</script>
	
<style scoped>


.mobile-menu{
	display: none;
}

/* HEADER */

header{	
	flex: 0 0 auto;
	height: 480px;
	background: lightgrey url(/src/images/shop-bg.png);
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

	/* Large Devices, Wide Screens */
	@media only screen and (max-width : 1366px) {
		header{
			height: 360px;
		}
		/* header{
			height: 720px;
		}

		header .header-button{
			margin-top: 400px;
		}

		header .button-text{
			padding: 20px 35px;
			font-size: 48px;
		} */
		
	}

	/* Medium Devices, Desktops */
	@media only screen and (max-width : 992px) {
		
	}	

	/* Small Devices, Tablets */
	@media only screen and (max-width : 768px) {
		header .mobile-menu{
			display: block;
		}
		header .header-menu{
			display: none;
		}
		header .header-navigation{
			flex-direction: column;
			margin-top: 60px;
		}
	}

	/* Extra Small Devices, Phones */
	@media only screen and (max-width : 480px) {
		
	}
</style>