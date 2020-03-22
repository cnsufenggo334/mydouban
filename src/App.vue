<template>
  <div id="app">
  	<!--一级路由占位-->
  	<!--<img src="./assets/img/1.png" alt="" />-->
    <router-view/>
		<!--app.vue文件是公共部分的内容-->
 		<tabbar></tabbar><!--3.使用-->
  </div>
</template>

<script>
	//app.vue中使用tabbar
	//非路由组件的使用方式
	//1.导入Tabbar是组件tabbar.vue在该文件中的名称
	//分析 myheader.vue在tabbar中引入 
	//还是在每个路由组件中引用 myheader.vue props 标题不一样
import Tabbar from "./components/tabbar";	
export default {
  name: 'App',
  components:{//2.注册
  	Tabbar
  },
//created(){
////	this.Api.php({title:""}).then((res)=>{
////		console.log(res);
////	}),
//	this.Api.doubanVedio({start:0,count:10,city:""}).then((res)=>{
//		console.log(res);
//	})
//},
  beforeCreate(){
  	this.$router.push("/home")
  }
}
</script>

<style lang="scss">
	*{ padding: 0; margin: 0;}
	/*$fonts:30px;*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 	/*font-size: $fonts;*/
}
</style>
