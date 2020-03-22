<template>
	<div class="detailWrap">
		<div class="left">
			<div><router-link to="/filmlist">☚&nbsp;返回</router-link></div>
		</div>
		<div class="filmtitle">
			<h4>{{obj.title}}</h4>
		</div>
		<div class="img1">
			<img :src="img"/>
			<p class="author">主演：{{name}}</p>
			<p class="lei">{{obj.year}}<span v-for="i in obj.genres">&nbsp;/&nbsp;{{i}}</span></p>
		</div>
		<div class="detail">
			<h3>剧情简介:</h3>
			<textarea>
				{{obj.summary}}
			</textarea>
		</div>
		<div class="zhanwei"></div>
	</div>
</template>

<script>
	export default{
		name:"filmdetail",
		data(){
			return{
				obj:{},
				img:null,
				name:""
			}
		},
		created(){
			var id = this.$route.params.id;
			this.getDetail(id);
		},
		methods:{
			getDetail(detailid){
				this.$ajax.get("/douban/movie/subject/"+detailid).then((res)=>{
					this.obj = res;
					this.img = "https://images.weserv.nl/?url="+this.obj.images.small;
					this.name = this.obj.casts[0].name;
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.detailWrap{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.left{
		flex: 1;
	}
	.left>div{
		border: 1px solid red;
		border-radius: 20px;
		padding: 3px 15px;
		position: absolute;
		left: 5px;
		top: 8px;
	}
	.filmtitle{
		flex: 1;
	}
	.filmtitle h4{
		color: #BB0000;
		font-size: 24px;
		font-weight: bolder;
	}
	.img1{
		flex: 3;
		padding: 20px;
		box-sizing: border-box;
		background: #96E555;
	}
	.img1 img{
		width: 100%;
	}
	.author{
		font-size: 20px;
		font-weight: bold;
		color: red;
		padding-top: 10px;
	}
	.lei{
		font-size: 16px;
		color: #666666;
	}
	.detail{
		width: 100%;
		text-align: left;
		padding-left: 10px;
		padding-right: 10px;
		box-sizing: border-box;
	}
	.detail h3{
		font-weight: bold;
	}
	.detail textarea{
		width: 100%;
		font-size: 16px;
		color: #333333;
		border: 2px dotted red;
	}
	.zhanwei{
		width: 100%;
		height: 60px;
	}
</style>