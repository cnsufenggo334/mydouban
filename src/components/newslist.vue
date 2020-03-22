<template>
	<div class="newsList">
		<newsitem v-for="item in newslist" 
			:title="item.title" 
			:author="item.author" 
			:content="item.des" :key="item.id">
			<img slot="img1" :src="item.src" alt="" />
		</newsitem>
	</div>
</template>

<script>
	import Newsitem from "./newsitem"
	export default{
		name:"newslist",
		created(){
			this.api.newslist().then((res)=>{
				this.newslist = res;
			})
		},
		components:{
			Newsitem
		},
		data(){
			return {
				newslist:[]
			}
		}
	}
</script>

<style>
	
</style>