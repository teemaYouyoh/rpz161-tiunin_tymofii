<template>
    <header>
        <div class="container">

            <div class="header-title">CardHouse</div>
            <div class="header-menu">
                <ul>
                    <li><a class="active-menu-link"  href="#">Головна</a></li>
                    <li><a href="shop.html">Магазин</a></li>
                    <li><a href="#">Про Нас</a></li>
                    <li><a href="contacts.html">Контакти</a></li>
                </ul>
            </div>
            <div class="clear-line"></div>
            <div class="header-button">
                <router-link :to="'/shop'" class="button-text" href="shop.html">ДО МАГАЗИНУ</router-link>
            </div>

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
</style>