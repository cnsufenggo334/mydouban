<template>
	<div :class="{'searchWrap':true,'green':bol}">
				<p>{{title}}</p>
				<slot name="search"></slot>
				<slot name="img1"></slot>
				<slot name="img2"></slot>
	</div>
</template>

<script>
	export default{
		name:"myheader",
		props:["title","bol"]
	}
</script>

<style>
		.searchWrap{
				width: 100%;
				height: 50px;
				border-bottom: 1px solid gray;
				text-align: center;
				line-height: 50px;
				position: relative;
				background: #EEEEEE;
			}
			.searchWrap .img2{
				width: 25px;
				position: absolute;
				right: 20px;
				top:13px;
			}
			.searchWrap .img1{
				width: 25px;
				position: absolute;
				right: 100px;
				top:13px;
			}
			/*search slot 样式*/
			.searchWrap .searchBox{
				width: 80%;
				height: 35px;
				background: white;
				border-radius: 5px;
				position: absolute;
				top:10px;
				left: 10px;
			}
			.searchWrap .searchBox input{
				position: absolute;
				width: 80%;
				height: 35px;
				top:0px;
				left: 30px;
				border: none;
				outline: none;
				text-indent: 10px;
				font-size: 16px;
			}
			
			.searchWrap .searchBox .searchImg1{
				position: absolute;
				left: 5px;
				width: 22px;
				top:5px
			}
			.searchWrap .searchBox .searchImg2{
				position: absolute;
				right: 5px;
				width: 22px;
				top:6px
			}
			.green{
				background: rgb(66,192,85);
			}
</style>