<template>
	<div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <!--<div class="swiper-slide">Slide 1</div>
		        <div class="swiper-slide">Slide 2</div>
		        <div class="swiper-slide">Slide 3</div>-->
		        <slot name="slide"></slot>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		    
		    <!-- 如果需要导航按钮 -->
		    <!--<div class="swiper-button-prev"></div>-->
		    <!--<div class="swiper-button-next"></div>-->
		    
		    <!-- 如果需要滚动条 -->
		    <!--<div class="swiper-scrollbar"></div>-->
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	export default{
		name:"banner",
		props:{
		        	"delay":{
		        		default:500
		        	},
		        	"loop":{
		        		default:true
		        	},
		        	"autoplay":{
		        		default:false
		        	}
		},
		mounted(){
			var This = this;
			var mySwiper = new Swiper ('.swiper-container', {
				loop:This.loop,
				autoplay:This.autoplay,
				speed:1000,
				// 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			    }
		  	    
		
			    
			    // 如果需要前进后退按钮
//			    navigation: {
//			      nextEl: '.swiper-button-next',
//			      prevEl: '.swiper-button-prev',
//			    },
			    
			    // 如果需要滚动条
//			    scrollbar: {
//			      el: '.swiper-scrollbar',
//			    },
			  })   
		}
	}
</script>

<style>
	@import 'swiper/css/swiper.min.css';
	.swiper-container {
	    width: 100%;
	    position: relative;
	} 
	.swiper-slide img{
		width: 100%;
	} 
	.swiper-container .swiper-pagination{
		position: absolute;
		bottom: 10px;
		margin-left: 35%;
	}
</style>