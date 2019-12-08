<template>
    <div class="wrapper">
            <router-view></router-view>
    </div>
</template>

<script>
export default {
    mounted(){
        // this.$router.push('/main');
    }
}
</script>

<style>

    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

    body{
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
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

    main{
        display: flex;
        flex-direction: column;

        flex: 1 1 auto;

        min-height: 500px;
        margin: -95px 30px 0px;
        position: relative;
        background-color: white;
        border: 0px solid white;
        border-radius: 10px 10px 0 0;
        box-shadow: 0 0 24px 2px rgba(0,0,0,0.14), 0 0 30px 5px rgba(0,0,0,0.12), 0 0 10px -5px rgba(0,0,0,0.2);
    }


    /* products */

    .product-row{
        display: flex;
        flex-wrap: wrap;
    }

    .product{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .product a{
        color: #3c4858;
    }

    .product img{
        width: 240px;
    }

    .product .price{
        margin: 10px 0;
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
    }
    /* Small Devices, Tablets */
    @media only screen and (max-width : 768px) {
        .product{
            margin-top : 20px;
        }
    }
    /* Extra Small Devices, Phones */
    @media only screen and (max-width : 480px) {
        
    }

</style>
