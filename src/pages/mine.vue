<template>
	<div>
		<Myheader title="我的">
				<img class="img2" slot="img2" src="../../static/img/ic_settings.png" alt="" />
		</Myheader>
		<minelist></minelist>
	</div>
</template>

<script>
	import Myheader from "../components/myheader"
	import Minelist from '../components/minelist'
	import $ from 'jquery';
	export default{
		name:"mine",
		components:{//2.注册
		  	Myheader,Minelist
		},
//		beforeRouteLeave (to, from, next) {	
//		    // 导航离开该组件的对应路由时调用
//		    // 可以访问组件实例 `this`
////		      console.log("组件内路由守卫beforeRouteLeave:",from);
//		       if (from.path === "/mine") {  // 如果是需要加判断的界面
//			      let res = confirm("确定要离开吗？");
//			      if(res){
//			      	 next();
//			      }else{
//			      	this.isLeave = false;
//			      	$(".itemWrap").last().click();
//			      }
//			    }
//		  },
	}
</script>

<style>
</style>