<template>
    <div class="main">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>

    body{
        margin: 0;
        padding: 0;
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

    a{
        color: white;
        text-decoration: none;
    }

    .space-line{
        height: 300px;
    }

    /* MAIN-WRAPPER */

    .main-wrapper{

        margin: -100px 30px 0px;
        position: relative;
        background-color: white;
        border: 0px solid white;
        border-radius: 10px 10px 0 0;
        box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.2);
    }


    /* products */

    .product{
        height: 350px;
        display: inline-block;
        margin-top: 70px;
        margin-right: 50px; 
    }

    .product a{
        color: #3c4858;
    }

    .product img{
        width: 240px;
    }

    .product .price{
        margin-bottom: 10px;
    }

    .product .purchase{
        /* border: 1px solid black; */
        border-radius: 10px;
        padding: 5px;
    }

    /* Large Devices, Wide Screens */
	@media only screen and (max-width : 1366px) {
		
		h1{
			font-size: 32px;
		}
        h2{
            font-size: 28px;
        }

	}

</style>
