<template>
	<div class="vedioList">
		<div class="vedioH2">
			<h2>影院热映</h2>
		</div>
		<div class="vedioContent">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <vedioitem class="swiper-slide" v-for="item in vedioData" :title="item.title" :rating="item.rating.stars"  :key="item.id">
					<img slot="img1" :src="item.images.small" alt="" />
			        </vedioitem>
			    </div>
			</div>
		</div>
		<div class="jj">
			<div class="vedioH2">
				<h4>在线即将上映</h4>
			</div>
			<div class="p1" @click="dofilmList()">
				<p>查看更多  &gt;&gt;</p>
			</div>
		</div>
		<!--<div>
			<div class="filmList" v-for="item in filmData" @click="dofilmList()">
				<div class="filmLeft">
					<img :src="item.images.small"/>
				</div>
				<div class="filmRight">
					<h4>{{item.title}}</h4>
					<p>{{item.year}}</p>
				</div>
			</div>
		</div>-->
	</div>
</template>

<script>
	import Vedioitem from '@/components/vedioitem';
	import Swiper from 'swiper';
	export default{
		name:"vedio",
		created(){
			this.getData();
//			this.filmList();
		},
		data(){
			return {
				vedioData:[],
//				filmData:[]
			}
		},
		components:{
			Vedioitem
		},
//		props:{
//		        	"delay":{
//		        		default:1000
//		        	},
//		        	"loop":{
//		        		default:true
//		        	},
//		        	"autoplay":{
//		        		default:false
//		        	}
//		},
		mounted(){
			   this.doSwiper();
		},
		methods:{
			doSwiper(){
				var This = this;
				var mySwiper = new Swiper ('.swiper-container', {
					loop:1000,
					autoplay:{
						delay:1000
					},
					speed:500,
					effect : 'coverflow',
					slidesPerView: 3,
					centeredSlides: false
				 })
			},
			getData(){
				this.Api.doubanVedio({start:0,count:8,city:""}).then((res)=>{
					this.vedioData = res.subjects;
					this.vedioData = this.vedioData.map((item)=>{
						item.images.small = "https://images.weserv.nl/?url="+item.images.small;
						return item;
					})
					this.$nextTick(()=>{//延迟执行，自带更新
					    	this.doSwiper();
					})
				})
			},
//			filmList(){
//				this.$ajax.get("/douban/movie/top250",{start:0,count:4}).then((res)=>{
//					this.filmData = res.subjects;
//					this.filmData = this.filmData.map((item)=>{
//						item.images.small = "https://images.weserv.nl/?url="+item.images.small;
//						return item;
//					})
//				})
//			},
			dofilmList(){
				this.$router.push("/filmlist");
			}
		}
	}
</script>

<style scoped="scoped">
	@import 'swiper/css/swiper.min.css';
	.vedioH2{
		text-align: left;
	}
	.vedioH2 h2{
		padding-top: 10px;
		margin-left: 10px;
		margin-top: -10px;
	}
	.swiper-container {
	    width: 100%;
	} 
	.swiper-slide{
		background: rgba(228,165,10,1);
		display: flex;
		flex-direction: column;
	}
	.swiper-slide img{
		width: 100%;
		flex: 3;
	}
	.swiper-slide p{
		flex: 1;
	}
	
	.jj{
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
		padding-left: 10px;
		padding-right: 10px;
		box-sizing: border-box;
		align-items: center;
	}
	.vedioH2{
		width: 40%;
	}
	.vedioH2 h4{
		font-size: 24px;
		font-weight: 600;
	}
	.p1{
		font-size: 16px;
		color: blue;
		margin-top: 10px;
	}
	/*.filmList{
		width: 100%;
		display: flex;
		padding: 10px;
		box-sizing: border-box;
	}
	.filmList .filmLeft{
		flex: 1;
	}
	.filmList .filmLeft img{
		width: 100%;
	}
	.filmList .filmRight{
		flex: 3;
	}*/
</style>