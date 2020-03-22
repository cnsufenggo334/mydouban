<template>
	<div class="newsWrap" @click="toNewsDetail()">
		<div class="newLeft">
			<h3>{{title}}</h3>
			<p class="content">{{content}}</p>
			<p>{{author}}</p>
		</div>
		<div class="newsRight">
			<slot name="img1"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"newsitem",
		props:["title","content","author"],
		methods:{
			toNewsDetail(){
				this.$router.push("/newsdetail")
			}
		}
	}
</script>

<style>
	.newsWrap{
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		display:flex;
	}
	.newsWrap .newLeft{
		flex: 2;
	}
	.newsWrap .newLeft .content{/*多行文本溢出隐藏，显示省略号...*/
		width:126px;
		overflow: hidden;
		text-overflow:ellipsis;/*文本溢出显示省略号*/
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.newsWrap .newsRight{
		flex: 1;
	}
	.newsRight img{ width: 100%;}
	
</style>