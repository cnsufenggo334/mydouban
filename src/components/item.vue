<template>
	<div class="itemWrap" @click="fn()">
		<span v-show="!bol"><slot name="normalImg"></slot></span>
		<span v-show="bol"><slot name="activeImg"></slot></span>
		<p :class="{'active':bol}">{{title}}</p>
	</div>
</template>

<script>
	export default{
		name:"item",
		computed:{
			bol(){
				if(this.mark==this.active){
					return true
				}else{
					return false
				}
			}
		},
		props:["title","mark","active"],
		methods:{
			fn(){
				//传递给父级
				this.$emit("myevent",this.mark)
				//切换路由 
				this.$router.push("/"+this.mark)
			}
		}
	}
</script>

<style>
			.itemWrap{
				width: 20%;
				float: left;
				text-align: center;
			}
			.itemWrap img{width: 40px;}
			.itemWrap p.active{ color:rgb(66,189,86)}
</style>