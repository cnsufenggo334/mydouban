<template>
	<div>
		<!--头部-->
		<myheader title="首页" bol=true>
				<div class="searchBox" slot="search">
					<img class="searchImg1" src="../../static/img/ic_search_gray.png" alt="" />
					<input type="text" placeholder="请输入您想看到的内容" />
					<img class="searchImg2"  src="../../static/img/ic_scan_gray.png" alt="" />
				</div>
				<img class="img2" slot="img2" src="../../static/img/ic_chat_white.png" alt="" />
		</myheader>
		<!--轮播图--封装-->
		<banner :delay="500" :loop="true" :autoplay="true">
			<div class="swiper-slide" slot="slide">
				<img src="../assets/images/banner/01.jpg"/>
			</div>
			<div class="swiper-slide" slot="slide">
				<img src="../assets/images/banner/02.jpg"/>
			</div>
			<div class="swiper-slide" slot="slide">
				<img src="../assets/images/banner/03.jpg"/>
			</div>
		</banner>
		<!--品类栏-->
		<type></type>
		<!--时事热点-->
		<newlist></newlist>
		<div id="detail"></div>
	</div>
</template>

<script>
	import Myheader from "../components/myheader"
	import Newlist from "../components/newslist"
	import Type from "../components/d-type"//大麦网列表
	import banner from '../components/banner'
	export default{
		name:"home",
		data(){
			return {
				msg:"我是home组件的内容"
			}
		},
		components:{//2.注册
		  	Myheader,Newlist,Type,banner
		}
	}
</script>

<style>
	#detail{
		width: 100%;
		height: 55px;
	}
</style>