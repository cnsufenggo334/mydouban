<template>
	<div class="broadWrap">
		<div class="broadRight">
			<slot name="img1"></slot>
		</div>
		<div class="broadLeft">
			<div class="span">
				<span class="span1"><h3>{{title}}</h3></span>
				<span class="span2"><button>关注</button></span>
			</div>
			<p class="content">{{content}}</p>
			<p>{{author}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"broaditem",
		props:["title","content","author"]
	}
</script>

<style>
	.broadWrap{
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		display:flex;
	}
	.broadWrap .broadLeft{
		flex: 3;
	}
	.broadWrap .broadRight{
		flex: 1;
	}
	.broadLeft .span{
		overflow: hidden;
	}
	.broadLeft .span1{
		float: left;
		margin-left:10px;
	}
	.broadLeft .span2{
		float: right;
		margin-right: 10px;
		padding-top: 5px;
	}
	.broadLeft .span2 button{
		width: 80px;
		height: 30px;
		line-height: 30px;
		border: none;
		border-radius: 5px;
		background: rgb(66,192,85);
		color: white;
	}
</style>