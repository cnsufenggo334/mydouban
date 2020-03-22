<template>
	<div>
		<myheader title="书影音"></myheader>
		<ul class="audioNav">
			<router-link active-class="line" tag="li" to="/myaudio/vedio">电影</router-link>
			<router-link active-class="line" tag="li" to="/myaudio/read">读书</router-link>
			<router-link active-class="line" tag="li" to="/myaudio/tv">电视</router-link>
			<router-link active-class="line" tag="li" to="/myaudio/city">同城</router-link>
			<router-link active-class="line" tag="li" to="/myaudio/music">音乐</router-link>
		</ul>
		<div class="show">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Myheader from "../components/myheader"
	export default{
		name:"myaudio",
		data(){
			return {
				msg:"我是书影音组件的内容"
			}
		},
		components:{//2.注册
		  	Myheader
		}
	}
</script>

<style>
	.show{
		width: 100%;
		height: calc(100vh - 120px);
		background: #bb952a;
	}
	.audioNav{
		width: 100%;
		height: 40px;
		line-height: 40px;
		display: flex;
	}
	.audioNav li{
		list-style: none;
		flex: 1;
	}
	.line{
		border-bottom: 4px solid rgb(45,175,203);
	}
</style>