<template>
	<div>
		<div class="detailWrap">
			<div class="detailImg">
				<img :src="obj.img"/>
			</div>
			<p>{{obj.title}}</p>
		</div>
		<div id="detail"></div>
	</div>
</template>

<script>
	export default{
		name:"gdetail",
		created(){
			var groupid = this.$route.params.groupid;
			this.api.groupList().then((res)=>{
				this.groupData = res;//把数组赋值给已有的空数组
				this.obj = this.groupData.find((item)=>item.id == groupid);//find返回的为一个对象，给已有的对象obj重赋值
			})
		},
		data(){
			return{
				obj:{//添加默认值，防止出现一个不影响效果的BUG
					img:"../../static/img/1.png",
					title:"小组"
				},
				groupData:[]
			}
		},
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