<template>
    <footer>
		<div class="container">
			<ul>
				<li>Copyright © 2019 <b>CARDHOUSE</b></li>
				<li><a href="">Privacy Policy</a></li>
				<li><a href="">About Us</a></li>
				<li><a href="">FAQ</a></li>
				<li><a href="">Contact Support</a></li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  
    footer{
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
</style>