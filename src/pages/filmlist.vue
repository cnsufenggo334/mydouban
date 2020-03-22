<template>
	<div>
		<div class="left">
			<div><router-link to="/myaudio/vedio">☚&nbsp;返回</router-link></div>
			<h3>◄电影列表►</h3>
		</div>
			<div v-infinite-scroll="filmList"
				infinite-scroll-disabled="loading"
				infinite-scroll-distance="10" class="filmWrap">
				<div class="filmList" v-for="item in filmData" @click="dofilmDetail(item.id)">
					<div class="filmLeft">
						<img :src="item.images.small"/>
					</div>
					<div class="filmRight">
						<h4>{{item.title}}</h4>
						<p>{{item.year}}<span v-for="i in item.genres">&nbsp;/&nbsp;{{i}}</span></p>
					</div>
				</div>
			</div>
			<div id="zhanwei">
				
			</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { InfiniteScroll } from 'mint-ui';
	Vue.use(InfiniteScroll);
	export default{
		name:"filmlist",
		data(){
			return{
				filmData:[],
				loading:false,
				currentIdx:0,
				count:8
			}
		},
		created(){
			this.filmList();
		},
		methods:{
			filmList(){
				this.loading = true;
				let params = {
					start:this.currentIdx*this.count,
					count:this.count
				}
				this.$ajax.get("/douban/movie/top250",params).then((res)=>{
//					this.filmData = res.subjects;
//					this.filmData = this.filmData.map((item)=>{
//						item.images.small = "https://images.weserv.nl/?url="+item.images.small;
//						return item;
//					})
					this.filmData = this.filmData.concat(res.subjects);
					this.loading = false;
					this.currentIdx++;
				})
			},
			dofilmDetail(id){
				this.$router.push("/filmdetail/"+id);
			}
		}
	}
</script>

<style scoped="scoped">
	.filmWrap{
		margin-top: 40px;
	}
	.filmList{
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
	}
	#zhanwei{
		width: 100%;
		height: 60px;
	}
	.left{
		width: 100%;
		height: 40px;
		position: fixed;
		top: 0;
		right: 0;
		background: rgba(255,64,85,.5);
	}
	.left>div{
		border: 1px solid red;
		border-radius: 20px;
		padding: 3px 15px;
		position: absolute;
		left: 10px;
		top: 8px;
	}
	.left>h3{
		border-radius: 20px;
		padding: 3px 15px;
		position: absolute;
		left: 33%;
		top:-15px;
		color: blueviolet;
	}
</style>