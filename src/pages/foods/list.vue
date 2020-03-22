<template>
	<div>
		列表
		<table border="1" width="100%">
			<thead>
				<tr>
					<th>名称</th>
					<th>价格</th>
					<th>加入</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in foodsList">
					<td>{{item.name}}</td>
					<td>{{item.price}}</td>
					<td><button @click="addCart(item.id)">加入购物车</button></td>
				</tr>
			</tbody>
		</table>
		<button @click="toCart()">进入购物车</button>
	</div>
</template>

<script>
	import store from '../../store/index'
	import {mapGetters,mapActions} from 'vuex';
	export default{
		name:'foods',
		store:store,//让vuex在当前组件起作用
		computed:mapGetters(['foodsList']),
		created(){
			//触发list数据的获取
			this.$store.dispatch('getFoods');//触发actions
		},
		methods:{
			...mapActions(['addCart']),//触发actions addCart
			toCart(){
				this.$router.push("/cart")
			}
//			addCart(){
//				this.$store.dispatch('addCart');//触发actions
//			}
		}
	}
</script>

<style>
	
</style>