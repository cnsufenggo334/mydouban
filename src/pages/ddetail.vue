<template>
	<div>
		<div class="detailWrap">
			<div class="detailImg">
				<img :src="DdatailData.img"/>
			</div>
			<p>{{DdatailData.title}}</p>
		</div>
		<div id="detail"></div>
	</div>
</template>

<script>
//	import {dlist} from '../api/damai'//独享
	export default{
		name:"ddetail",
		created(){
			//根据main.js中的api全局配置，this.api.封装方法直接引用
			this.api.dlist().then(res=>{
				this.DdatailData = res.find(item=>item.id == detailid);
			})
			var detailid = this.$route.params.detailid;
		},
		data(){
			return{
				DdatailData:[]
			}
		}
	}
</script>

<style scoped="scoped">
	.detailWrap{
		width: 100%;
		height: calc(100vh - 65px);
		display: flex;
		flex-direction: column;
		padding: 20px;
		box-sizing: border-box;
		background: #333333;
	}
	.detailWrap .detailImg{
		flex: 3;
	}
	.detailWrap .detailImg img{
		width: 100%;
	}
	.detailWrap p{
		flex: 1;
		padding-top: 10px;
		font-size: 20px;
		color: yellow;
	}
	#detail{
		width: 100%;
		height: 65px;
	}
</style>