<template>
	<div class="groupWrap">
		<ul class="groupTop">
			<li>
				<span class="top1">418832个小组等你来玩</span><br />
				<span class="top2">立即选择加入吧</span>
			</li>
		</ul>
		<p class="p1">根据你的兴趣推荐</p>
		<div class="groupDiv"><p class="p2">精彩推荐</p></div>
		<p class="p3">——————————影视——————————</p>
		<ul class="groupUl">
			<li v-for="item in groupData" @click="dogroupDetail(item.id)">
				<div class="groupLeft"><img :src="item.img"/></div>
				<div class="groupRight">
					<p class="p4">{{item.title}}</p>
					<p class="p5">{{item.title}}</p>
				</div>
			</li>
		</ul>
		<div id="detail"></div>
	</div>
</template>

<script>
	export default{
		name:"groupContent",
		created(){
			this.api.groupList().then((res)=>{
				this.groupData = res;
			})
		},
		data(){
			return{
				groupData:[]
			}
		},
		methods:{
			dogroupDetail(id){
				this.$router.push('/gdetail/'+id)
			}
		}
	}
</script>

<style scoped="scoped">
	li{
		list-style: none;
	}
	.groupWrap{
		padding: 20px;
		box-sizing: border-box;
	}
	.groupWrap .groupTop{
		width: 100%;
		height: 200px;
		line-height: 200px;
		text-align: center;
		position: relative;
	}
	.top1{
		font-size: 20px;
		font-weight: bold;
	}
	.top2{
		font-size: 14px;
		color: #888888;
		position: absolute;
		top: 20px;
		left: 120px;
	}
	.p1{
		width: 100%;
		text-align: left;
		padding: 20px 0;
		font-size: 14px;
		color: #888888;
	}
	.p2{
		width: 100%;
		text-align: left;
		line-height: 170px;
		font-size: 16px;
		color: white;
	}
	.groupDiv{
		width: 100%;
		height: 100px;
		text-align: left;
		background: #05D950;
	}
	.groupDiv .p2{
		margin-left: 20px;
		font-size: 16px;
		color: white;
	}
	.p3{
		width: 100%;
		height: 30px;
		font-size: 14px;
		line-height: 30px;
		text-align: center;
	}
	#detail{
		width: 100%;
		height: 55px;
	}
</style>