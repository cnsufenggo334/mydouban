import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import axios from 'axios';

const state = {
	foods:[],//食物列表
	cart:[]//购物车列表
}

const getters = {
	foodsList(state){
		//console.log(state)
		return state.foods;
	},
	cartList(state){
		return state.cart;
	},
	totalcount(state){
		let sum = 0;
		state.cart.map((item)=>{
			sum +=item.count
		})
		return sum
	},
	totalprice(state){
		let sum = 0;
		state.cart.map((item)=>{
			sum +=item.count*item.price
		})
		return sum
	}
}

const actions = {
	getFoods({commit}){
		axios.get("../../static/foods.json").then((res)=>{
			commit('getFoods',res.data)
		})
	},
	addCart({commit},id){
		//console.log(obj)
		commit('addCart',id)
	},
	subcount({commit},id){
		commit('subcount',id)
	},
	addcount({commit},id){
		commit('addcount',id)
	},
	del({commit},id){
		commit('del',id)
	},
	clear({commit},id){
		commit('clear',id)
	}
}

const mutations = {
	getFoods(state,data){
		state.foods = data;
	},
	addCart(state,id){
		//1.id在foods中对应的对象 肯定存在的 id，price,name
		let foodsObj = state.foods.find((item)=>item.id==id);
		//2.id在cart中对应的对象 有可能不存在 id price name count
		let cartObj = state.cart.find((item)=>item.id==id);
		//加入购物车判断 
		if(cartObj){//1.购物车中是否已经存在,如果存在 count++
			cartObj.count++;
		}else{//2如果不存在 count=1
			state.cart.push({
				...foodsObj,
				count:1
			})
		}
		
	},
	subcount(state,id){//数量减少
		let cartObj = state.cart.find((item)=>item.id==id);//找到购物车中对应的商品
		cartObj.count--
	},
	addcount(state,id){//数量增加
		let cartObj = state.cart.find((item)=>item.id==id);//找到购物车中对应的商品
		cartObj.count++
	},
	del(state,id){//删除某一个商品
		//删除 一个数组中删除一个值 state.cart.splice(index,1);
		//通过id找到该商品所在的索引
		let index = state.cart.findIndex(item=>item.id==id);
		state.cart.splice(index,1);
	},
	clear(state,id){//清空购物车
		state.cart = [];
	}
}

export default new Vuex.Store({
	state,getters,actions,mutations
});
