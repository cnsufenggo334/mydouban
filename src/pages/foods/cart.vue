<template>
	<div>
		购物车
		<table border="1" width="100%">
			<thead>
				<tr>
					<th>名称</th>
					<th>价格</th>
					<th>数量</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for='item in cartList'>
					<td>{{item.name}}</td>
					<td>{{item.price}}</td>
					<td>
						<button @click="subcount(item.id)">-</button>
						{{item.count}}
						<button @click="addcount(item.id)">+</button>
					</td>
					<td>
						<button @click="del(item.id)">del</button>
					</td>
				</tr>
				<tr>
					<td>总价：{{$store.getters.totalcount}}</td>
					<td>总数：{{$store.getters.totalprice}}</td>
					<td colspan="2">
						<button @click="clear()">清空购物车</button>
					</td>
				</tr>
			</tbody>
		</table>
		
	</div>
</template>

<script>
	import store from '../../store/index'
	import {mapGetters,mapActions} from 'vuex';
	export default{
		name:'cart',
		store:store,
		computed:mapGetters(['cartList']),
		methods:{
			...mapActions(['subcount','addcount','del','clear'])
		}
	}
</script>

<style>
</style>