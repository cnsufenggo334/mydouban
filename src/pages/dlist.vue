<template>
	<div>
		<banner :delay="300" :loop="true" :autoplay="false">
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
		<div v-for="item in DlistData">
			<p @click="toDdetail(item.id)">{{item.title}}</p>
		</div>
	</div>
</template>

<script>
	import banner from '../components/banner';
//	import {dlist} from '../api/damai'//独享
	export default{
		name:"ddetail",
		components:{
			banner
		},
		created(){
			//根据main.js中的api全局配置，this.api.封装方法直接引用
			var typeid = this.$route.params.typeid;
			this.api.dlist().then((res)=>{
				this.DlistData = res.filter((item)=>item.type==typeid);
			})
		},
		data(){
			return{
				DlistData:[]
			}
		},
		methods:{
			toDdetail(id){
				this.$router.push('/ddetail/'+id)
			}
		}
	}
</script>

<style scoped="scoped">
	p{
		padding: 20px 0;
	}
</style>