<template>
    <div class="main">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
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
</style>
