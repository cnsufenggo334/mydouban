<template>
	<div class="mineWrap">
		<div class="mine" v-for="item in mineData" :keys="item.id" @click="goTo(item.path)">
			<img :src="item.img"/>
			<p>{{item.title}}</p>
		</div>
	</div>
</template>

<script>
//	import {minelist} from '../api/damai';//独享
	import $ from 'jquery';
	export default{
		name:"minelist",
		created(){
			//根据main.js中的api全局配置，this.api.封装方法直接引用
			this.api.minelist().then((res)=>{
				this.mineData = res;
			})
		},
		data(){
			return{
				mineData:[]
			}
		},
		methods:{
			goTo(id){
				this.$router.push('/'+id);
				if(id=="myaudio/city"||id=="myaudio/music"||id=="myaudio/read"||id=="myaudio/tv"||id=="myaudio/vedio"){
					$(".itemWrap").eq(1).click();
					this.$router.push('/'+id);
				};
				if(id=="broad"){
					$(".itemWrap").eq(2).click();
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.mineWrap{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 15px;
		box-sizing: border-box;
		position: relative;
	}
	.mineWrap .mine{
		width: 25%;
		text-align: center;
		padding: 10px;
		box-sizing: border-box;
	}
	.mineWrap .mine img{
		width: 50%;
	}
	.mineWrap .mine:nth-child(11) img{
		width: 40%;
	}
	.mineWrap .mine:nth-child(9){
		position: absolute;
		left: 26%;
		top: 63%;
	}
	.mineWrap .mine:nth-child(10){
		position: absolute;
		left: 50%;
		top: 63%;
	}
</style>