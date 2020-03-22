<template>
	<div class="typeWrap">
		<div v-for="item in types" :keys="item.id"  @click="toDlist(item.id)">
			{{item.title}}
		</div>
	</div>
</template>

<script>
	export default{
		name:"type",
		created(){
			this.api.hometype().then((res)=>{
				this.types = res;
			})
		},
		data(){
			return{
				types:[]
			}
		},
		methods:{
			toDlist(id){
				this.$router.push("/dlist/"+id)
			}
		}
	}
</script>

<style scoped="scoped">
	.typeWrap{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		display: flex;
	}
	.typeWrap>div{
		flex: 1;
		flex-wrap: wrap;
	}
</style>