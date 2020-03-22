<template>
	<div>
			<myheader title="小组">
				<img class="img1" slot="img1" src="../../static/img/ic_actionbar_search_icon.png" alt="" />
				<img class="img2" slot="img2" src="../../static/img/ic_create_group_chat_blue.png" alt="" />
			</myheader>
			<glist></glist>
	</div>
</template>

<script>
	import Myheader from "../components/myheader"
	import Glist from '@/components/groupList'
	export default{
		name:"group",
		data(){
			return {
				msg:"我是小组组件的内容"
			}
		},
		components:{//2.注册
		  	Myheader,Glist
		}
	}
</script>

<style>
	.groupUl li{
		width: 100%;
		display: flex;
		padding: 10px;
		box-sizing: border-box;
	}
	.groupUl .groupLeft{
		flex: 1;
	}
	.groupUl .groupLeft img{
		width: 100%;
	}
	.groupUl .groupRight{
		flex: 4;
	}
	.groupUl .groupRight .p4{
		font-size: 20px;
	}
	.groupUl .groupRight .p5{
		font-size: 14px;
		color: #888888;
	}
</style>