<template>
	<div class="vedioItem">
		<slot name="img1"></slot>
		<p>{{title}}</p>
		<p>
			<span v-for="item in arr" 
				:class="{'glyphicon':true,
				'glyphicon-star':true,
				'glyphicon':true,
				'glyphicon-star-empty':item}"></span>
		</p>
	</div>
</template>

<script>
	export default{
		name:"vedioitem",
		props:["title","rating"],
		data(){
			return{
				arr:[]
			}
		},
		created(){
			var num = Math.floor(this.rating/10);
//			console.log(num)
			for(var i = 0;i<5;i++){
				if (num>i) {
					this.arr.push(false);
				} else{
					this.arr.push(true);
				}
			}
		}
	}
</script>

<style>
	@import '../bootstrap/css/bootstrap.min.css'
</style>