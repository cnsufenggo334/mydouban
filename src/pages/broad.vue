<template>
	<div>
		<myheader title="广播">
				<img class="img1" slot="img1" src="../../static/img/ic_status_search_user.png" alt="" />
				<img class="img2" slot="img2" src="../../static/img/ic_create_group_chat_blue.png" alt="" />
		</myheader>
		<div class="broadList">
			<broaditem v-for="item in broadlist" 
				:title="item.title" 
				:author="item.author" 
				:content="item.des" :key="item.id">
				<img slot="img1" :src="item.src" alt="" />
			</broaditem>
		</div>
		<div id="detail"></div>
	</div>
</template>

<script>
	import Myheader from "../components/myheader"
	import Broaditem from '@/components/broaditem'
//	import {broadlist} from '../api/damai'//独享
	export default{
		name:"broad",
		created(){
			//根据main.js中的api全局配置，this.api.封装方法直接引用
			this.api.broadlist().then((res)=>{
				this.broadlist = res;
			})
		},
		data(){
			return {
				broadlist:[]
			}
		},
		components:{//2.注册
		  	Myheader,
		  	Broaditem
		}
	}
</script>

<style>
	.broadList img{
		width: 64px;
		height: 64px;
		border-radius: 50%;
	}
	#detail{
		width: 100%;
		height: 55px;
	}
</style>