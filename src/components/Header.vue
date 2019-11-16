<template>
    <header>
		<div class="container">

			<div class="header-title">CardHouse</div>
			<div class="header-menu">
				<ul>
					<li><router-link :to="'/main'">Головна</router-link></li>
					<li><router-link :to="'/shop'">Магазин</router-link></li>
					<li><router-link :to="'/shop2'">Про Нас</router-link></li>
					<li><router-link :to="'/shop3'">Контакти</router-link></li>
					<li><router-link :to="'/cart'">Корзина</router-link></li>
					<!-- <li v-if="currentUser == null"><router-link :to="'/login'">Війти</router-link></li>
					<li v-else><router-link :to="'/logout'">Вийти ({{currentUser.login}})</router-link></li> -->
				</ul>
			</div>
			<div class="clear-line"></div>
		</div>
	</header>
</template>

<script>
export default {
}
</script>

<style scoped>

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
</style>